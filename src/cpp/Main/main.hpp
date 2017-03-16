#ifndef Main_hpp
#define Main_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>
#include <vector>

emscripten::val createElm(VNode vnode, std::vector<VNode> insertedVnodeQueue);

#endif
