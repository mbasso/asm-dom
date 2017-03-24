#ifndef Main_hpp
#define Main_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>
#include <vector>

std::size_t patch_vnodePtr(std::size_t oldVnode, std::size_t vnode);
std::size_t patch_elementPtr(emscripten::val element, std::size_t vnode);
VNode* patch_vnode(VNode* oldVnode, VNode* vnode);
VNode* patch_element(emscripten::val oldVnode, VNode* vnode);
emscripten::val createElm(VNode* vnode, std::vector<VNode*> insertedVnodeQueue);
void addVnodes(
	emscripten::val parentElm,
	emscripten::val before,
	std::vector<VNode*> vnodes,
	std::vector<VNode*>::size_type startIdx,
	std::vector<VNode*>::size_type endIdx,
	std::vector<VNode*> insertedVnodeQueue
);
void removeVnodes(
	emscripten::val parentElm,
	std::vector<VNode*> vnodes,
	std::vector<VNode*>::size_type startIdx,
	std::vector<VNode*>::size_type endIdx
);
void updateChildren(
	emscripten::val parentElm,
	std::vector<VNode*> oldCh,
	std::vector<VNode*> newCh,
	std::vector<VNode*> insertedVnodeQueue
);
void patchVnode(
	VNode* oldVnode,
	VNode* vnode,
	std::vector<VNode*> insertedVnodeQueue
);

#endif
