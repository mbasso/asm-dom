#ifndef VNode_hpp
#define VNode_hpp

#include "../VNodeData/VNodeData.hpp"
#include "../Val/Val.hpp"
#include <vector>
#include <string.h>

struct VNode {
  const char* sel;
  const char* key;
  const char* text;
  struct VNodeData* data;
  val elm;
  std::vector<struct VNode*> children;

  void set_children(struct VNode** vnodes, int num);
};

#endif
