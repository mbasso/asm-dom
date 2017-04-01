#include "main.hpp"
#include "../Hooks/Hooks.hpp"
#include "../Modules/Class/class.hpp"
#include "../Modules/Props/props.hpp"
#include "../Modules/Dataset/dataset.hpp"
#include "../VNode/VNode.hpp"
#include "../HtmlDOMApi/HtmlDOMApi.hpp"
#include "../Utils/utils.hpp"
#include <emscripten/bind.h>
#include <algorithm>
#include <vector>
#include <map>
#include <string>

VNode* emptyNode = new VNode();

std::vector<Hooks> hooks = {
	classHooks,
	propsHooks,
	datasetHooks
};

bool sameVnode(VNode* vnode1, VNode* vnode2) {
  return vnode1->key.compare(vnode2->key) == 0 && vnode1->sel.compare(vnode2->sel) == 0;
};

VNode* emptyNodeAt(emscripten::val elm) {
  VNode* vnode = new VNode();
  vnode->elm = elm;
  vnode->sel.append(tagName(elm));
  std::transform(vnode->sel.begin(), vnode->sel.end(), vnode->sel.begin(), ::tolower);

  if (isDefined(elm["id"])) {
    vnode->sel += '#';
    vnode->sel.append(elm["id"].as<std::string>());
  }

  if (isDefined(elm["className"])) {
    vnode->sel += '.';
    vnode->sel.append(elm["className"].as<std::string>());
    std::replace(vnode->sel.begin(), vnode->sel.end(), ' ', '.');
  }

  return vnode;
};

std::map<std::string, int> createKeyToOldIdx(std::vector<VNode*> children, int beginIdx, int endIdx) {
  std::size_t i = beginIdx;
	std::map<std::string, int> map;
  for (; i <= endIdx; i++) {
    if (!children[i]->key.empty()) {
			map[children[i]->key] = i;
		}
  }
  return map;
}

emscripten::val createElm(VNode* vnode, std::vector<VNode*> insertedVnodeQueue) {
	// TODO: init hook
	if (vnode->sel.compare("!") == 0) {
		vnode->elm = createComment(vnode->text);
	} else if (vnode->sel.empty()) {
		vnode->elm = createTextNode(vnode->text);
	} else {
		std::size_t hashIdx = vnode->sel.find('#');
		std::size_t dotIdx = vnode->sel.find('.', hashIdx);
		int hash = hashIdx != std::string::npos ? static_cast<int>(hashIdx) : vnode->sel.length();
		int dot = dotIdx != std::string::npos ? static_cast<int>(dotIdx) : vnode->sel.length();
		std::string tag = hashIdx != std::string::npos || dotIdx != std::string::npos ? vnode->sel.substr(0, std::min(hash, dot)) : vnode->sel;
		vnode->elm = !vnode->data.ns.empty() ? createElementNS(vnode->data.ns, tag) : createElement(tag);

		if (hash < dot) {
			vnode->elm.set("id", emscripten::val(vnode->sel.substr(hash + 1, dot)));
		}
		if (dotIdx != std::string::npos) {
			std::string className = vnode->sel.substr(dot + 1);
			std::replace(className.begin(), className.end(), '.', ' ');
			vnode->elm.set("className", emscripten::val(className));
		}
		for (std::vector<Hooks>::size_type i = hooks.size(); i--;) {
			if (hooks[i].create) {
				hooks[i].create(emptyNode, vnode);
			}
		}
		if (!vnode->children.empty()) {
			for(std::vector<VNode*>::size_type i = 0; i != vnode->children.size(); i++) {
				appendChild(vnode->elm, createElm(vnode->children[i], insertedVnodeQueue));
			}
		} else if (!vnode->text.empty()) {
			appendChild(vnode->elm, createTextNode(vnode->text));
		}
		// TODO: create hook
		// TODO: insert hook
	}
	return vnode->elm;
};

void addVnodes(
	emscripten::val parentElm,
	emscripten::val before,
	std::vector<VNode*> vnodes,
	std::vector<VNode*>::size_type startIdx,
	std::vector<VNode*>::size_type endIdx,
	std::vector<VNode*> insertedVnodeQueue
) {
	for (; startIdx <= endIdx; startIdx++) {
		insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
	}
};

void invokeDestroyHook(VNode* vnode) {
	// TODO: destroy callback
	for (std::vector<Hooks>::size_type i = hooks.size(); i--;) {
		if (hooks[i].destroy) {
			hooks[i].destroy(vnode);
		}
	}
	if (!vnode->children.empty()) {
		for (std::vector<VNode*>::size_type j = 0; j < vnode->children.size(); j++) {
			invokeDestroyHook(vnode->children[j]);
		}
	}
}

void removeVnodes(
	emscripten::val parentElm,
	std::vector<VNode*> vnodes,
	std::vector<VNode*>::size_type startIdx,
	std::vector<VNode*>::size_type endIdx
) {
	std::function<void()> rm;
	for (; startIdx <= endIdx; startIdx++) {
		VNode* vnode = vnodes[startIdx];
		if (!vnode->sel.empty()) {
			invokeDestroyHook(vnode);
			int listeners = 1;
			rm = [&listeners, &vnode]() -> void {
				if (--listeners == 0) {
					removeChild(parentNode(vnode->elm), vnode->elm);
				}
			};
			// TODO: remove callback
			for (std::vector<Hooks>::size_type i = hooks.size(); i--;) {
				if (hooks[i].remove) {
					listeners++;
					hooks[i].remove(vnode, rm);
				}
			}
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
	std::vector<VNode*> insertedVnodeQueue
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
	VNode* oldVnode,
	VNode* vnode,
	std::vector<VNode*> insertedVnodeQueue
) {
	// TODO: prepatch hook
	if (oldVnode == vnode) return;
	for (std::vector<Hooks>::size_type i = hooks.size(); i--;) {
		if (hooks[i].update) {
			hooks[i].update(oldVnode, vnode);
		}
	}
	// TODO: update hook
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
	// TODO: postpatch hook
};

VNode* patch_vnode(VNode* oldVnode, VNode* vnode) {
	std::vector<VNode*> insertedVnodeQueue;
	for (std::vector<Hooks>::size_type i = hooks.size(); i--;) {
		if (hooks[i].pre) {
			hooks[i].pre();
		}
	}
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
	// TODO: insert hook
	for (std::vector<Hooks>::size_type i = hooks.size(); i--;) {
		if (hooks[i].post) {
			hooks[i].post();
		}
	}
	return vnode;
};

VNode* patch_element(emscripten::val element, VNode* vnode) {
	VNode* oldVnode = emptyNodeAt(element);
	return patch_vnode(oldVnode, vnode);
};

std::size_t patch_vnodePtr(std::size_t oldVnode, std::size_t vnode) {
	return reinterpret_cast<std::size_t>(patch_vnode(reinterpret_cast<VNode*>(oldVnode), reinterpret_cast<VNode*>(vnode)));
};

std::size_t patch_elementPtr(emscripten::val element, std::size_t vnode) {
	return reinterpret_cast<std::size_t>(patch_element(element, reinterpret_cast<VNode*>(vnode)));
};

EMSCRIPTEN_BINDINGS(patch_function) {
	emscripten::function("_patch_vnode", &patch_vnodePtr, emscripten::allow_raw_pointers());
	emscripten::function("_patch_element", &patch_elementPtr, emscripten::allow_raw_pointers());
}
