#ifndef asmdom_tovnode_hpp
#define asmdom_tovnode_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>

namespace asmdom {

	VNode* toVNode(const emscripten::val& node);

}

#endif