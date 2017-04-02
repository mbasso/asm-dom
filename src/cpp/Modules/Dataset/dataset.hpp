#ifndef dataset_hpp
#define dataset_hpp

#include "../../Hooks/Hooks.hpp"
#include "../../VNode/VNode.hpp"

void updateDataset(VNode* oldVnode, VNode* vnode);
extern Hooks datasetHooks;

#endif
