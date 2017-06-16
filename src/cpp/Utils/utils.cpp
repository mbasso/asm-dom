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
