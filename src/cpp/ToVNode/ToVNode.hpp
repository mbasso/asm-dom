#ifndef ToVNode_hpp
#define ToVNode_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>

VNode to_VNode(const emscripten::val node);

#endif
