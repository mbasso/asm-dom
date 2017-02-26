#ifndef VNode_hpp
#define VNode_hpp

#include "../VNodeData/VNodeData.hpp"
#include <emscripten/val.h>
#include <vector>
#include <string>

struct VNode {
  std::string sel;
  std::string key;
  std::string text;
  struct VNodeData data;
  emscripten::val elm;
  std::vector<struct VNode> children;
};

#endif