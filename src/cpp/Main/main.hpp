#ifndef Main_hpp
#define Main_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>
#include <vector>

emscripten::val createElm(VNode vnode, std::vector<VNode> insertedVnodeQueue);
void addVnodes(
	emscripten::val parentElm,
	emscripten::val before,
	std::vector<VNode> vnodes,
	int startIdx,
	int endIdx,
	std::vector<VNode> insertedVnodeQueue
);

#endif
