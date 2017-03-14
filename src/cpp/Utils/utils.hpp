#ifndef Utils_hpp
#define Utils_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>

bool isUndefined(emscripten::val obj);
bool isNull(emscripten::val obj);
bool isDefined(emscripten::val obj);
bool sameVnode(VNode vnode1, VNode vnode2);
VNode emptyNodeAt(emscripten::val elm);

#endif