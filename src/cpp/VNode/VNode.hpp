#ifndef VNode_hpp
#define VNode_hpp

#include <vector>
#include <string>
#include <map>
#include <emscripten/val.h>

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
    ~VNode() {
      for (std::vector<VNode*>::size_type i = children.size(); i--;) {
        delete children[i];
      }
      children.clear();
    }
    std::string sel; 
    std::string key;
    std::string text;
    std::map<std::string, std::string> props;
    int elm;
    std::vector<VNode*> children;
};

#endif
