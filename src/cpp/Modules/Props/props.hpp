#ifndef props_hpp
#define props_hpp

#include "../../Hooks/Hooks.hpp"
#include "../../VNode/VNode.hpp"

void updateProps(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode);
extern Hooks propsHooks;

#endif