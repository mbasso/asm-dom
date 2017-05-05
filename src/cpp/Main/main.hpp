#ifndef Main_hpp
#define Main_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>
#include <vector>

int patch_vnodePtr(const int oldVnode, const int vnode);
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
