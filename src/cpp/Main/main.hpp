#ifndef Main_hpp
#define Main_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>
#include <cstdint>
#include <vector>

void patch_vnodePtr(const std::uintptr_t oldVnode, const std::uintptr_t vnode);
void updateChildren(
	emscripten::val parentElm,
	std::vector<VNode*>& oldCh,
	std::vector<VNode*>& newCh
);
void patchVnode(
	VNode* __restrict__ const oldVnode,
	VNode* __restrict__ const vnode
);

#endif
