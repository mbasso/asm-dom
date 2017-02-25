#ifndef VNode_hpp
#define VNode_hpp

#include <emscripten/val.h>
#include <vector>
#include <string>

struct VNode {
  std::string sel;
  std::string key;
  std::string text;
  // data: VNodeData | undefined;
  emscripten::val elm;
  std::vector<VNode> children;
};

#endif