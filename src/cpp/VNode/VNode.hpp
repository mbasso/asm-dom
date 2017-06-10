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
      std::string nodeSel
    ): sel(nodeSel) {};
    VNode(
      std::string nodeSel,
      std::string nodeText
    ): sel(nodeSel), text(nodeText) {};
    VNode(
      std::string nodeText,
      bool isText
    ): text(nodeText) {};
    VNode(
      std::string nodeSel,
      std::map<std::string, std::string> nodeProps
    ): sel(nodeSel), props(nodeProps) {};
    VNode(
      std::string nodeSel,
      std::vector<VNode*> nodeChildren
    ): sel(nodeSel), children(nodeChildren) {};
    VNode(
      std::string nodeSel,
      VNode* child
    ): sel(nodeSel), children(std::vector<VNode*> { child }) {};
    VNode(
      std::string nodeSel,
      std::map<std::string, std::string> nodeProps,
      std::string nodeText
    ): sel(nodeSel), text(nodeText), props(nodeProps) {};
    VNode(
      std::string nodeSel,
      std::map<std::string, std::string> nodeProps,
      std::vector<VNode*> nodeChildren
    ): sel(nodeSel), props(nodeProps), children(nodeChildren) {};
    VNode(
      std::string nodeSel,
      std::map<std::string, std::string> nodeProps,
      VNode* child
    ): sel(nodeSel), props(nodeProps), children(std::vector<VNode*> { child }) {};
    ~VNode() {
      std::vector<VNode*>::size_type i = children.size();
      while (i--) delete children[i];
    }
    std::string sel; 
    std::string key;
    std::string text;
    std::map<std::string, std::string> props;
    int elm;
    std::vector<VNode*> children;
};

typedef std::vector<VNode*> VNodeChildren;

#endif
