#include "main.hpp"
#include "../Diff/diff.hpp"
#include "../VNode/VNode.hpp"
#include "../HtmlDOMApi/HtmlDOMApi.hpp"
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
  return !vnode1->key.empty() && vnode1->key.compare(vnode2->key) == 0 && vnode1->sel.compare(vnode2->sel) == 0;
};

VNode* emptyNodeAt(const emscripten::val elm) {
  VNode* vnode = new VNode(tagName(elm));
  vnode->elm = elm;
  std::transform(vnode->sel.begin(), vnode->sel.end(), vnode->sel.begin(), ::tolower);

  if (isDefined(elm["id"])) {
		vnode->props.insert(
			std::make_pair(
				std::string("id"),
				elm["id"].as<std::string>()
			)
		);
  }

  if (isDefined(elm["className"])) {
		vnode->props.insert(
			std::make_pair(
				std::string("class"),
				elm["className"].as<std::string>()
			)
		);
  }

  return vnode;
};

std::map<std::string, int> createKeyToOldIdx(const std::vector<VNode*> children, const int beginIdx, const int endIdx) {
  std::size_t i = beginIdx;
	std::map<std::string, int> map;
  for (; i <= endIdx; ++i) {
    if (!children[i]->key.empty()) {
			map[children[i]->key] = i;
		}
  }
  return map;
}

emscripten::val createElm(VNode* const vnode, std::vector<VNode* const> insertedVnodeQueue) {
	if (vnode->sel.compare("!") == 0) {
		vnode->elm = createComment(vnode->text);
	} else if (vnode->sel.empty()) {
		vnode->elm = createTextNode(vnode->text);
	} else {
		if (vnode->props.count(std::string("ns")) != 0) {
			vnode->elm = createElementNS(vnode->props.at(std::string("ns")), vnode->sel);
		} else {
			vnode->elm = createElement(vnode->sel);
		}

		diff(emptyNode, vnode);

		if (!vnode->children.empty()) {
			for(std::vector<VNode*>::size_type i = 0; i != vnode->children.size(); ++i) {
				appendChild(vnode->elm, createElm(vnode->children[i], insertedVnodeQueue));
			}
		} else if (!vnode->text.empty()) {
			appendChild(vnode->elm, createTextNode(vnode->text));
		}
	}
	return vnode->elm;
};

void addVnodes(
	emscripten::val parentElm,
	emscripten::val before,
	std::vector<VNode*> vnodes,
	std::vector<VNode*>::size_type startIdx,
	const std::vector<VNode*>::size_type endIdx,
	std::vector<VNode* const> insertedVnodeQueue
) {
	for (; startIdx <= endIdx; ++startIdx) {
		insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
	}
};

void removeVnodes(
	emscripten::val parentElm,
	std::vector<VNode*> vnodes,
	std::vector<VNode*>::size_type startIdx,
	const std::vector<VNode*>::size_type endIdx
) {
	std::function<void()> rm;
	for (; startIdx <= endIdx; ++startIdx) {
		VNode* vnode = vnodes[startIdx];
		if (!vnode->sel.empty()) {
			int listeners = 1;
			rm = [&listeners, &vnode]() -> void {
				if (--listeners == 0) {
					emscripten::val parent = parentNode(vnode->elm);
					removeChild(parent, vnode->elm);
				}
			};
			// TODO: remove callback
			rm();
		} else {
			removeChild(parentElm, vnodes[startIdx]->elm);
		}
	}
};

void updateChildren(
	emscripten::val parentElm,
	std::vector<VNode*> oldCh,
	std::vector<VNode*> newCh,
	std::vector<VNode* const> insertedVnodeQueue
) {
	std::size_t oldStartIdx = 0;
	std::size_t newStartIdx = 0;
	std::size_t oldEndIdx = oldCh.size() - 1;
	std::size_t newEndIdx = newCh.size() - 1;
	VNode* oldStartVnode = oldCh[0];
	VNode* oldEndVnode = oldCh[oldEndIdx];
	VNode* newStartVnode = newCh[0];
	VNode* newEndVnode = newCh[newEndIdx];
	std::map<std::string, int> oldKeyToIdx;
	VNode* elmToMove;

	while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
		if (sameVnode(oldStartVnode, newStartVnode)) {
			patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
			oldStartVnode = oldCh[++oldStartIdx];
			newStartVnode = newCh[++newStartIdx];
		} else if (sameVnode(oldEndVnode, newEndVnode)) {
			patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
			oldEndVnode = oldCh[--oldEndIdx];
			newEndVnode = newCh[--newEndIdx];
		} else if (sameVnode(oldStartVnode, newEndVnode)) {
			patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
			insertBefore(parentElm, oldStartVnode->elm, nextSibling(oldEndVnode->elm));
			oldStartVnode = oldCh[++oldStartIdx];
			newEndVnode = newCh[--newEndIdx];
		} else if (sameVnode(oldEndVnode, newStartVnode)) {
			patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
			insertBefore(parentElm, oldEndVnode->elm, oldStartVnode->elm);
			oldEndVnode = oldCh[--oldEndIdx];
			newStartVnode = newCh[++newStartIdx];
		} else {
			if (oldKeyToIdx.empty()) {
				oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
			}
			if (oldKeyToIdx.count(newStartVnode->key) == 0) {
				insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode->elm);
				newStartVnode = newCh[++newStartIdx];
			} else {
				elmToMove = oldCh[oldKeyToIdx[newStartVnode->key]];
				if (elmToMove->sel.compare(newStartVnode->sel) != 0) {
					insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode->elm);
				} else {
					patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
					oldCh[oldKeyToIdx[newStartVnode->key]]->key = std::string("");
					insertBefore(parentElm, elmToMove->elm, oldStartVnode->elm);
				}
				newStartVnode = newCh[++newStartIdx];
			}
		}
	}
	if (oldStartIdx > oldEndIdx) {
		addVnodes(parentElm, newCh[newEndIdx+1]->elm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	} else if (newStartIdx > newEndIdx) {
		removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	}
};

void patchVnode(
	VNode* __restrict__ const oldVnode,
	VNode* __restrict__ const vnode,
	std::vector<VNode* const> insertedVnodeQueue
) {
	diff(oldVnode, vnode);
	if (vnode->text.empty()) {
		if (!vnode->children.empty() && !oldVnode->children.empty()) {
			// if (vnode->children != oldVnode->children)
			updateChildren(vnode->elm, oldVnode->children, vnode->children, insertedVnodeQueue);
		} else if(!vnode->children.empty()) {
			if (!oldVnode->text.empty()) setTextContent(vnode->elm, std::string());
			addVnodes(vnode->elm, emscripten::val::null(), vnode->children, 0, vnode->children.size() - 1, insertedVnodeQueue);
		} else if(!oldVnode->children.empty()) {
			removeVnodes(vnode->elm, oldVnode->children, 0, oldVnode->children.size() - 1);
		} else if (!oldVnode->text.empty()) {
			setTextContent(vnode->elm, oldVnode->text);
		}
	} else if (vnode->text.compare(oldVnode->text) != 0) {
		setTextContent(vnode->elm, vnode->text);
	}
};

VNode* patch_vnode(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
	std::vector<VNode* const> insertedVnodeQueue;
	if (sameVnode(oldVnode, vnode)) {
		patchVnode(oldVnode, vnode, insertedVnodeQueue);
	} else {
		emscripten::val parent = parentNode(oldVnode->elm);
		createElm(vnode, insertedVnodeQueue);
		if (isDefined(parent)) {
			insertBefore(parent, vnode->elm, nextSibling(oldVnode->elm));
			std::vector<VNode*> vnodes { oldVnode };
			removeVnodes(parent, vnodes, 0, 0);
		}
	}
	return vnode;
};

VNode* patch_element(const emscripten::val element, VNode* const vnode) {
	return patch_vnode(emptyNodeAt(element), vnode);
};

std::size_t patch_vnodePtr(const std::size_t oldVnode, const std::size_t vnode) {
	return reinterpret_cast<std::size_t>(patch_vnode(reinterpret_cast<VNode*>(oldVnode), reinterpret_cast<VNode*>(vnode)));
};

std::size_t patch_elementPtr(const emscripten::val element, const std::size_t vnode) {
	return reinterpret_cast<std::size_t>(patch_element(element, reinterpret_cast<VNode*>(vnode)));
};

EMSCRIPTEN_BINDINGS(patch_function) {
	emscripten::function("_patch_vnode", &patch_vnodePtr, emscripten::allow_raw_pointers());
	emscripten::function("_patch_element", &patch_elementPtr, emscripten::allow_raw_pointers());
}
