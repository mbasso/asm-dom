#ifndef dataset_hpp
#define dataset_hpp

#include "../../Hooks/Hooks.hpp"
#include "../../VNode/VNode.hpp"

void updateDataset(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode);
extern Hooks datasetHooks;

#endif
