#ifndef Main_hpp
#define Main_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>
#include <vector>

std::size_t patch_vnodePtr(std::size_t oldVnode, std::size_t vnode);
std::size_t patch_elementPtr(emscripten::val element, std::size_t vnode);
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
