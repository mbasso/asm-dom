#include "utils.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/bind.h>
#include <algorithm>
#include <cstdint>

void deleteVNode(VNode* vnode) {
  delete vnode->data;
  vnode->data = NULL;
  std::vector<VNode*>::size_type i = vnode->children.size();
  while (i--) deleteVNode(vnode->children[i]);
  delete vnode;
};

void removeChild(VNode* parent, VNode* child) {
  VNodeChildren& children = parent->children;
  children.erase(std::remove(children.begin(), children.end(), child), children.end());
};

void replaceChild(VNode* parent, VNode* oldChild, VNode* newChild) {
  VNodeChildren& children = parent->children;
  std::replace(children.begin(), children.end(), oldChild, newChild);
};
