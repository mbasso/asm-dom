#ifndef asmdom_diff_hpp
#define asmdom_diff_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>

namespace asmdom {

	VNode* toVNode(const emscripten::val& node);

}

#endif