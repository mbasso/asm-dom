#ifndef VNode_hpp
#define VNode_hpp

#include "../VNodeData/VNodeData.hpp"
#include "../Val/Val.hpp"
#include <vector>
#include <string>

class VNode {
  public:
    VNode() {};
    VNode(
      std::string nodeSel,
      std::string nodeText,
      VNodeData nodeData,
      std::vector<VNode> nodeChildren
    ): sel(nodeSel), text(nodeText), data(nodeData), children(nodeChildren) {};
    std::string sel;
    std::string key;
    std::string text;
    VNodeData data;
    val elm;
    std::vector<VNode> children;
};

#endif
