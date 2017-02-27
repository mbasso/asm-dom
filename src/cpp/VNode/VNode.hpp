#ifndef VNode_hpp
#define VNode_hpp

#include "../VNodeData/VNodeData.hpp"
#include "../Val/Val.hpp"
#include <vector>
#include <string>

struct VNode {
  std::string sel;
  std::string key;
  std::string text;
  struct VNodeData* data;
  val elm;
  std::vector<struct VNode*> children;
};

#endif
