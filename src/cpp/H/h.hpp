#ifndef H_hpp
#define H_hpp

#include "../VNode/VNode.hpp"

void deleteVNode(VNode* vnode);
void removeChild(VNode* parent, VNode* child);
void replaceChild(VNode* parent, VNode* oldChild, VNode* newChild);

#endif
