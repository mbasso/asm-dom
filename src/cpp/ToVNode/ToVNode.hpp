#ifndef ToVNode_hpp
#define ToVNode_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>

std::size_t toVNodePtr(const emscripten::val& node);

#endif
