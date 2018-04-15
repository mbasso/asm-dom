#include "patch.hpp"
#include "../Diff/diff.hpp"
#include "../VNode/VNode.hpp"
#include "../h/h.hpp"
#include "../VDOMConfig/VDOMConfig.hpp"
#include <emscripten/val.h>
#include <algorithm>
#include <cstdint>
#include <vector>
#include <string>
#include <unordered_map>

namespace asmdom {

	void patchVNode(
		VNode* __restrict__ const oldVnode,
		VNode* __restrict__ const vnode,
		int parentElm
	);

	VNode* const emptyNode = h("");

	#ifndef ASMDOM_JS_SIDE
		VNode* currentNode = NULL;
	#endif
	#ifdef ASMDOM_TEST
		void reset() {
			currentNode = NULL;
		};
	#endif

	bool sameVNode(const VNode* __restrict__ const vnode1, const VNode* __restrict__ const vnode2) {
		return vnode1->nt == vnode2->nt && vnode1->selHash == vnode2->selHash && vnode1->key == vnode2->key;
	};

	int createElm(VNode* const vnode) {
		bool isFragment = vnode->nt == fragment;
		if (vnode->nt == element || isFragment) {
			if (isFragment) {
				vnode->elm = EM_ASM_INT({
					return window['asmDomHelpers']['domApi']['createDocumentFragment']();
				});
			} else if (vnode->data.attrs.count("ns")) {
				vnode->elm = EM_ASM_INT({
					return window['asmDomHelpers']['domApi']['createElementNS'](
						Module['UTF8ToString']($0),
						Module['UTF8ToString']($1)
					);
				}, vnode->data.attrs["ns"].c_str(), vnode->sel.c_str());
				vnode->data.attrs.erase("ns");
			} else {
				vnode->elm = EM_ASM_INT({
					return window['asmDomHelpers']['domApi']['createElement'](
						Module['UTF8ToString']($0)
					);
				}, vnode->sel.c_str());
			}

			diff(emptyNode, vnode);
			
			for(std::vector<VNode*>::size_type i = 0, j = vnode->children.size(); i != j; ++i) {
				EM_ASM_({
					window['asmDomHelpers']['domApi']['appendChild']($0, $1);
				}, vnode->elm, createElm(vnode->children[i]));
			}
		} else if (vnode->nt == text) {
    	vnode->elm = EM_ASM_INT({
				return window['asmDomHelpers']['domApi']['createTextNode'](
					Module['UTF8ToString']($0)
				);
			}, vnode->text.c_str());
		} else if (vnode->nt == comment) {
			vnode->elm = EM_ASM_INT({
				return window['asmDomHelpers']['domApi']['createComment'](
					Module['UTF8ToString']($0)
				);
			}, vnode->text.c_str());
		}
		return vnode->elm;
	};

	void addVNodes(
		const int parentElm,
		const int before,
		const std::vector<VNode*>& vnodes,
		std::vector<VNode*>::size_type startIdx,
		const std::vector<VNode*>::size_type endIdx
	) {
		while (startIdx <= endIdx) {
			EM_ASM_({
				window['asmDomHelpers']['domApi']['insertBefore']($0, $1, $2)
			}, parentElm, createElm(vnodes[startIdx++]), before);
		}
	};

	void removeVNodes(
		const std::vector<VNode*>& vnodes,
		std::vector<VNode*>::size_type startIdx,
		const std::vector<VNode*>::size_type endIdx
	) {
		while (startIdx <= endIdx) {
			VNode* const vnode = vnodes[startIdx++];
			EM_ASM_({
				window['asmDomHelpers']['domApi']['removeChild']($0);
			}, vnode->elm);

			#ifdef ASMDOM_JS_SIDE
				EM_ASM_({
					var data = window['asmDomHelpers']['vnodesData'][$0];
					if (data !== undefined && data['ref'] !== undefined) {
						data['ref'](null);
					}
				}, reinterpret_cast<std::uintptr_t>(vnode));
			#else
				if (vnode->data.callbacks.count("ref")) {
					vnode->data.callbacks["ref"](
						emscripten::val::null()
					);
				}
			#endif
		}
	};

	void updateChildren(
		int parentElm,
		std::vector<VNode*> oldCh,
		const std::vector<VNode*>& newCh
	) {
		int oldStartIdx = 0;
		int newStartIdx = 0;
		int oldEndIdx = oldCh.size() - 1;
		int newEndIdx = newCh.size() - 1;
		VNode* oldStartVnode = oldCh[0];
		VNode* oldEndVnode = oldCh[oldEndIdx];
		VNode* newStartVnode = newCh[0];
		VNode* newEndVnode = newCh[newEndIdx];
		bool oldKeys = false;
		std::unordered_map<std::string, int> oldKeyToIdx;

		while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
			if (oldStartVnode == NULL) {
				oldStartVnode = oldCh[++oldStartIdx];
			} else if (oldEndVnode == NULL) {
				oldEndVnode = oldCh[--oldEndIdx];
			} else if (sameVNode(oldStartVnode, newStartVnode)) {
				patchVNode(oldStartVnode, newStartVnode, parentElm);
				oldStartVnode = oldCh[++oldStartIdx];
				newStartVnode = newCh[++newStartIdx];
			} else if (sameVNode(oldEndVnode, newEndVnode)) {
				patchVNode(oldEndVnode, newEndVnode, parentElm);
				oldEndVnode = oldCh[--oldEndIdx];
				newEndVnode = newCh[--newEndIdx];
			} else if (sameVNode(oldStartVnode, newEndVnode)) {
				patchVNode(oldStartVnode, newEndVnode, parentElm);

				EM_ASM_({
					window['asmDomHelpers']['domApi']['insertBefore'](
						$0,
						$1,
						window['asmDomHelpers']['domApi']['nextSibling']($2)
					);
				}, parentElm, oldStartVnode->elm, oldEndVnode->elm);
				oldStartVnode = oldCh[++oldStartIdx];
				newEndVnode = newCh[--newEndIdx];
			} else if (sameVNode(oldEndVnode, newStartVnode)) {
				patchVNode(oldEndVnode, newStartVnode, parentElm);

				EM_ASM_({
					window['asmDomHelpers']['domApi']['insertBefore']($0, $1, $2);
				}, parentElm, oldEndVnode->elm, oldStartVnode->elm);
				oldEndVnode = oldCh[--oldEndIdx];
				newStartVnode = newCh[++newStartIdx];
			} else {
				if (!oldKeys) {
					oldKeys = true;
					int beginIdx = oldStartIdx;
					while (beginIdx <= oldEndIdx) {
						if (!oldCh[beginIdx]->key.empty()) {
							oldKeyToIdx.insert(std::make_pair(oldCh[beginIdx]->key, beginIdx));
						}
						++beginIdx;
					}
				}
				if (!oldKeyToIdx.count(newStartVnode->key)) {
					EM_ASM_({
						window['asmDomHelpers']['domApi']['insertBefore']($0, $1, $2);
					}, parentElm, createElm(newStartVnode), oldStartVnode->elm);
				} else {
					VNode* elmToMove = oldCh[oldKeyToIdx[newStartVnode->key]];
					if (elmToMove->selHash != newStartVnode->selHash) {
						EM_ASM_({
							window['asmDomHelpers']['domApi']['insertBefore']($0, $1, $2);
						}, parentElm, createElm(newStartVnode), oldStartVnode->elm);
					} else {
						patchVNode(elmToMove, newStartVnode, parentElm);
						oldCh[oldKeyToIdx[newStartVnode->key]] = NULL;
						EM_ASM_({
							window['asmDomHelpers']['domApi']['insertBefore']($0, $1, $2);
						}, parentElm, elmToMove->elm, oldStartVnode->elm);
					}
				}
				newStartVnode = newCh[++newStartIdx];
			}
		}
		if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
			if (oldStartIdx > oldEndIdx) {
				addVNodes(parentElm, newEndIdx + 1 <= newCh.size() - 1 ? newCh[newEndIdx+1]->elm : 0, newCh, newStartIdx, newEndIdx);
			} else {
				removeVNodes(oldCh, oldStartIdx, oldEndIdx);
			}
		}
	};

	void patchVNode(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode, int parentElm) {
		vnode->elm = oldVnode->elm;
		bool isFragment = vnode->nt == fragment;
		if (vnode->nt == element || isFragment) {
			diff(oldVnode, vnode);
			bool childrenNotEmpty = !vnode->children.empty();
			bool oldChildrenNotEmpty = !oldVnode->children.empty();
			if (childrenNotEmpty && oldChildrenNotEmpty) {
				updateChildren(isFragment ? parentElm : vnode->elm, oldVnode->children, vnode->children);
			} else if(childrenNotEmpty) {
				addVNodes(isFragment ? parentElm : vnode->elm, 0, vnode->children, 0, vnode->children.size() - 1);
			} else if(oldChildrenNotEmpty) {
				removeVNodes(oldVnode->children, 0, oldVnode->children.size() - 1);
			}
		} else if (vnode->text != oldVnode->text) {
			EM_ASM_({
				window['asmDomHelpers']['domApi']['setNodeValue'](
					$0,
					Module['UTF8ToString']($1)
				);
			}, vnode->elm, vnode->text.c_str());
		}
	};

	VNode* patch(const emscripten::val& element, VNode* const vnode) {
		VNode* oldVnode = toVNode(element);
		VNode* result = patch(oldVnode, vnode);
		if (!VDOMConfig::getConfig().getClearMemory()) {
			deleteVNode(oldVnode);
		}
		return result;
	};

	VNode* patch(VNode* const oldVnode, VNode* const vnode) {
		#ifndef ASMDOM_JS_SIDE
			VDOMConfig& config = VDOMConfig::getConfig();
			if (
				!config.getUnsafePatch() &&
				currentNode != oldVnode && currentNode != NULL
			) return NULL;
		#endif

		if (oldVnode == vnode) return vnode;

		#ifndef ASMDOM_JS_SIDE
			currentNode = vnode;
		#endif

		if (sameVNode(oldVnode, vnode)) {
			patchVNode(oldVnode, vnode, oldVnode->elm);
		} else {
			EM_ASM_({
				var parent = window['asmDomHelpers']['domApi']['parentNode']($1);
				if (parent !== 0) {
					window['asmDomHelpers']['domApi']['insertBefore'](
						parent,
						$0,
						window['asmDomHelpers']['domApi']['nextSibling']($1)
					);
					window['asmDomHelpers']['domApi']['removeChild']($1);
				}
			}, createElm(vnode), oldVnode->elm);
		}

		#ifndef ASMDOM_JS_SIDE
			if (config.getClearMemory()) {
				deleteVNode(oldVnode);
			}
		#endif

		return vnode;
	};

}
