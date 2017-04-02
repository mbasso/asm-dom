#ifndef props_hpp
#define props_hpp

#include "../../Hooks/Hooks.hpp"
#include "../../VNode/VNode.hpp"

void updateProps(VNode* oldVnode, VNode* vnode);
extern Hooks propsHooks;

#endif