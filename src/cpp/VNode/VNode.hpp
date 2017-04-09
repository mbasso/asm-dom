#ifndef VNode_hpp
#define VNode_hpp

#include <emscripten/val.h>
#include <vector>
#include <string>
#include <map>

class VNode {
  public:
    VNode() {};
    VNode(
      const std::string nodeSel
    ): sel(nodeSel) {};
    VNode(
      const std::string nodeSel,
      const std::string nodeText
    ): sel(nodeSel), text(nodeText) {};
    VNode(
      const std::string nodeText,
      bool isText
    ): text(nodeText) {};
    VNode(
      const std::string nodeSel,
      const std::map<std::string, std::string> nodeProps
    ): sel(nodeSel), props(nodeProps) {};
    VNode(
      const std::string nodeSel,
      VNode* child
    ): sel(nodeSel), children(std::vector<VNode*> { child }) {};
    VNode(
      const std::string nodeSel,
      const std::map<std::string, std::string> nodeProps,
      const std::string nodeText
    ): sel(nodeSel), text(nodeText), props(nodeProps) {};
    VNode(
      const std::string nodeSel,
      const std::map<std::string, std::string> nodeProps,
      VNode* child
    ): sel(nodeSel), props(nodeProps), children(std::vector<VNode*> { child }) {};
    VNode(
      const std::string nodeSel,
      const std::string nodeText,
      const std::map<std::string, std::string> nodeProps,
      const std::vector<VNode*> nodeChildren
    ): sel(nodeSel), text(nodeText), props(nodeProps), children(nodeChildren) {};
    std::string sel; 
    std::string key;
    std::string text;
    std::map<std::string, std::string> props;
    int elm;
    std::vector<VNode*> children;
    // bindings
    std::vector<VNode> get_children() const;
    void set_children(std::vector<VNode> nodeChildren);
};

#endif
