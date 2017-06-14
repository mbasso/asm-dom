#ifndef Main_hpp
#define Main_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>
#include <vector>

void updateChildren(
	emscripten::val parentElm,
	std::vector<VNode*>& oldChildren,
	std::vector<VNode*>& newChildren
);
void patchVNode(
	VNode* __restrict__ const oldVnode,
	VNode* __restrict__ const vnode
);
void patch(
	VNode* __restrict__ const oldVnode,
	VNode* __restrict__ const vnode
);

#endif
