#ifndef Utils_hpp
#define Utils_hpp

#include "../VNode/VNode.hpp"

void deleteVNode(VNode* vnode);
void removeChild(VNode* parent, VNode* child);
void replaceChild(VNode* parent, VNode* oldChild, VNode* newChild);

#endif
