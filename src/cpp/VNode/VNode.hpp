#ifndef VNode_hpp
#define VNode_hpp

#include "../VNodeData/VNodeData.hpp"
#include "../Val/Val.hpp"
#include <emscripten/val.h>
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

struct VNode* vnode (
  const std::string sel,
  const std::string key,
  const std::string text,
  struct VNodeData* const data,
  const val elm,
  const std::vector<struct VNode*> children
);

#endif
