#include "main.hpp"
#include "../H/h.hpp"
#include "../Diff/diff.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/val.h>
#include <emscripten/bind.h>
#include <algorithm>
#include <vector>
#include <map>
#include <string>

VNode* const emptyNode = new VNode();

bool isDefined(const emscripten::val& obj) {
  std::string type = obj.typeOf().as<std::string>();
  return type.compare("undefined") != 0 && type.compare("null") != 0;
};

bool sameVnode(const VNode* __restrict__ const vnode1, const VNode* __restrict__ const vnode2) {
  return vnode1->key.compare(vnode2->key) == 0 && vnode1->sel.compare(vnode2->sel) == 0;
};

std::map<std::string, int>* createKeyToOldIdx(const std::vector<VNode*>& children, const int beginIdx, const int endIdx) {
  std::size_t i = beginIdx;
	std::map<std::string, int>* map = new std::map<std::string, int>();
  for (; i <= endIdx; ++i) {
    if (!children[i]->key.empty()) {
			map->insert(std::make_pair(children[i]->key, i));
		}
  }
  return map;
}

int createElm(VNode* const vnode) {
	if (vnode->sel.compare("!") == 0) {
		vnode->elm = EM_ASM_INT({
			return window['asmDomHelpers']['domApi']['createComment'](
				window['asmDom']['Pointer_stringify']($0)
			);
		}, vnode->text.c_str());
	} else if (vnode->sel.empty()) {
		vnode->elm = EM_ASM_INT({
			return window['asmDomHelpers']['domApi']['createTextNode'](
				window['asmDom']['Pointer_stringify']($0)
			);
		}, vnode->text.c_str());
	} else {
		if (vnode->props.count(std::string("ns")) != 0) {
			vnode->elm = EM_ASM_INT({
				return window['asmDomHelpers']['domApi']['createElementNS'](
					window['asmDom']['Pointer_stringify']($0),
					window['asmDom']['Pointer_stringify']($1)
				);
			}, vnode->props.at(std::string("ns")).c_str(), vnode->sel.c_str());
		} else {
			vnode->elm = EM_ASM_INT({
				return window['asmDomHelpers']['domApi']['createElement'](
					window['asmDom']['Pointer_stringify']($0)
				);
			}, vnode->sel.c_str());
		}

		diff(emptyNode, vnode);

		if (!vnode->children.empty()) {
			for(std::vector<VNode*>::size_type i = 0; i != vnode->children.size(); ++i) {
				EM_ASM_({
					window['asmDomHelpers']['domApi']['appendChild']($0, $1);
				}, vnode->elm, createElm(vnode->children[i]));
			}
		} else if (!vnode->text.empty()) {
			EM_ASM_({
				window['asmDomHelpers']['domApi']['appendChild'](
					$0,
					window['asmDomHelpers']['domApi']['createTextNode'](
						window['asmDom']['Pointer_stringify']($1)
					)
				);
			}, vnode->elm, vnode->text.c_str());
		}
	}
	return vnode->elm;
};

void addVnodes(
	int parentElm,
	int before,
	std::vector<VNode*>& vnodes,
	std::vector<VNode*>::size_type startIdx,
	const std::vector<VNode*>::size_type endIdx
) {
	for (; startIdx <= endIdx; ++startIdx) {
		EM_ASM_({
			window['asmDomHelpers']['domApi']['insertBefore']($0, $1, $2 || null)
		}, parentElm, createElm(vnodes[startIdx]), before);
	}
};

void removeVnodes(
	std::vector<VNode*>& vnodes,
	std::vector<VNode*>::size_type startIdx,
	const std::vector<VNode*>::size_type endIdx
) {
	for (; startIdx <= endIdx; ++startIdx) {
		EM_ASM_({
			window['asmDomHelpers']['domApi']['removeChild']($0);
		}, vnodes[startIdx]->elm);
	}
};

void updateChildren(
	int parentElm,
	std::vector<VNode*>& oldCh,
	std::vector<VNode*>& newCh
) {
	std::size_t oldStartIdx = 0;
	std::size_t newStartIdx = 0;
	std::size_t oldEndIdx = oldCh.size() - 1;
	std::size_t newEndIdx = newCh.size() - 1;
	VNode* oldStartVnode = oldCh[0];
	VNode* oldEndVnode = oldCh[oldEndIdx];
	VNode* newStartVnode = newCh[0];
	VNode* newEndVnode = newCh[newEndIdx];
	std::map<std::string, int>* oldKeyToIdx;
	VNode* elmToMove;

	while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
		if (sameVnode(oldStartVnode, newStartVnode)) {
			patchVnode(oldStartVnode, newStartVnode);
			oldStartVnode = oldCh[++oldStartIdx];
			newStartVnode = newCh[++newStartIdx];
		} else if (sameVnode(oldEndVnode, newEndVnode)) {
			patchVnode(oldEndVnode, newEndVnode);
			oldEndVnode = oldCh[--oldEndIdx];
			newEndVnode = newCh[--newEndIdx];
		} else if (sameVnode(oldStartVnode, newEndVnode)) {
			patchVnode(oldStartVnode, newEndVnode);

			EM_ASM_({
				window['asmDomHelpers']['domApi']['insertBefore'](
					$0,
					$1,
					window['asmDomHelpers']['domApi']['nextSibling']($2)
				);
			}, parentElm, oldStartVnode->elm, oldEndVnode->elm);
			oldStartVnode = oldCh[++oldStartIdx];
			newEndVnode = newCh[--newEndIdx];
		} else if (sameVnode(oldEndVnode, newStartVnode)) {
			patchVnode(oldEndVnode, newStartVnode);

			EM_ASM_({
				window['asmDomHelpers']['domApi']['insertBefore']($0, $1, $2);
			}, parentElm, oldEndVnode->elm, oldStartVnode->elm);
			oldEndVnode = oldCh[--oldEndIdx];
			newStartVnode = newCh[++newStartIdx];
		} else {
			if (!oldKeyToIdx) {
				oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
			}
			if (oldKeyToIdx->count(newStartVnode->key) == 0) {
				EM_ASM_({
					window['asmDomHelpers']['domApi']['insertBefore']($0, $1, $2);
				}, parentElm, createElm(newStartVnode), oldStartVnode->elm);
				newStartVnode = newCh[++newStartIdx];
			} else {
				elmToMove = oldCh[oldKeyToIdx->at(newStartVnode->key)];
				if (elmToMove->sel.compare(newStartVnode->sel) != 0) {
					EM_ASM_({
						window['asmDomHelpers']['domApi']['insertBefore']($0, $1, $2);
					}, parentElm, createElm(newStartVnode), oldStartVnode->elm);
				} else {
					patchVnode(elmToMove, newStartVnode);
					deleteVNode(elmToMove);
					elmToMove = NULL;
					oldKeyToIdx->erase(newStartVnode->key);
					EM_ASM_({
						window['asmDomHelpers']['domApi']['insertBefore']($0, $1, $2);
					}, parentElm, elmToMove->elm, oldStartVnode->elm);
				}
				newStartVnode = newCh[++newStartIdx];
			}
		}
	}
	if (oldStartIdx > oldEndIdx) {
		if (newEndIdx + 1 <= newCh.size() - 1) {
			addVnodes(parentElm, newCh[newEndIdx+1]->elm, newCh, newStartIdx, newEndIdx);
		} else {
			addVnodes(parentElm, 0, newCh, newStartIdx, newEndIdx);
		}
	} else if (newStartIdx > newEndIdx) {
		removeVnodes(oldCh, oldStartIdx, oldEndIdx);
	}
	delete oldKeyToIdx;
};

void patchVnode(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
	vnode->elm = oldVnode->elm;
	diff(oldVnode, vnode);
	if (vnode->text.empty()) {
		if (!vnode->children.empty() && !oldVnode->children.empty()) {
			updateChildren(vnode->elm, oldVnode->children, vnode->children);
		} else if(!vnode->children.empty()) {
			if (!oldVnode->text.empty()) {
				EM_ASM_({
					window['asmDomHelpers']['domApi']['setTextContent']($0, "");
				}, vnode->elm);
			};
			addVnodes(vnode->elm, 0, vnode->children, 0, vnode->children.size() - 1);
		} else if(!oldVnode->children.empty()) {
			removeVnodes(oldVnode->children, 0, oldVnode->children.size() - 1);
		} else if (!oldVnode->text.empty()) {
			EM_ASM_({
				window['asmDomHelpers']['domApi']['setTextContent']($0, "");
			}, vnode->elm);
		}
	} else if (vnode->text.compare(oldVnode->text) != 0) {
		EM_ASM_({
			window['asmDomHelpers']['domApi']['setTextContent'](
				$0,
				window['asmDom']['Pointer_stringify']($1)
			);
		}, vnode->elm, vnode->text.c_str());
	}
};

VNode* patch_vnode(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
	if (sameVnode(oldVnode, vnode)) {
		patchVnode(oldVnode, vnode);
	} else {
		int parent = EM_ASM_INT({
			return window['asmDomHelpers']['domApi']['parentNode']($0);
		}, oldVnode->elm);
		createElm(vnode);
		if (parent) {
			EM_ASM_({
				window['asmDomHelpers']['domApi']['insertBefore'](
					$0,
					$1,
					window['asmDomHelpers']['domApi']['nextSibling']($2)
				);
			}, parent, vnode->elm, oldVnode->elm);
			std::vector<VNode*> vnodes { oldVnode };
			removeVnodes(vnodes, 0, 0);
		}
	}
	return vnode;
};

std::size_t patch_vnodePtr(const std::size_t oldVnode, const std::size_t vnode) {
	return reinterpret_cast<std::size_t>(patch_vnode(reinterpret_cast<VNode*>(oldVnode), reinterpret_cast<VNode*>(vnode)));
};

EMSCRIPTEN_BINDINGS(patch_function) {
	emscripten::function("patchVNode", &patch_vnodePtr, emscripten::allow_raw_pointers());
}
