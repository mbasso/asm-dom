#ifndef VNode_hpp
#define VNode_hpp

#include "../VNodeData/VNodeData.hpp"
#include <emscripten/val.h>
#include <vector>
#include <string>

class VNode {
  public:
    VNode(): elm(emscripten::val::undefined()) {};
    VNode(
      std::string nodeSel,
      std::string nodeText,
      VNodeData nodeData,
      std::vector<VNode*> nodeChildren
    ): sel(nodeSel), text(nodeText), data(nodeData), elm(emscripten::val::undefined()), children(nodeChildren) {};
    std::string sel;
    std::string key;
    std::string text;
    VNodeData data;
    emscripten::val elm;
    std::vector<VNode*> children;
    std::vector<VNode> get_children() const;
    // readonly
    void set_children(std::vector<VNode> nodeChildren);
};

#endif
