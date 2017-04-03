#ifndef class_hpp
#define class_hpp

#include "../../Hooks/Hooks.hpp"
#include "../../VNode/VNode.hpp"

void updateClass(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode);
extern Hooks classHooks;

#endif
