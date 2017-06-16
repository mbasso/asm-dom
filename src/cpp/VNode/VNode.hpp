#ifndef VNode_hpp
#define VNode_hpp

#include <utility>
#include <vector>
#include <string>
#include <map>
#include <emscripten/val.h>

typedef std::map<std::string, std::string> VNodeAttrs;
typedef std::map<std::string, emscripten::val> VNodeProps;

class VNodeData {
  public:
    VNodeData(
      VNodeAttrs dataAttrs = VNodeAttrs(),
      VNodeProps dataProps = VNodeProps()
    ): attrs{std::move(dataAttrs)}, props{std::move(dataProps)} {};
    VNodeAttrs attrs;
    VNodeProps props;
    // std::map<std::string, void*> callbacks;
};

class VNode {
  void adjustVNode();
  public:
    VNode(): data(NULL) {};
    VNode(
      std::string nodeSel
    ): sel(nodeSel), data(NULL) {};
    VNode(
      std::string nodeSel,
      std::string nodeText
    ): sel(nodeSel), text(nodeText), data(NULL) {};
    VNode(
      std::string nodeText,
      bool isText
    ): data(NULL) {
      if (isText) {
        text = nodeText;
      } else {
        sel = nodeText;
      }
    };
    VNode(
      std::string nodeSel,
      VNodeData* nodeData
    ): sel(nodeSel), data(nodeData) { adjustVNode(); };
    VNode(
      std::string nodeSel,
      std::vector<VNode*> nodeChildren
    ): sel(nodeSel), data(NULL), children{std::move(nodeChildren)} {};
    VNode(
      std::string nodeSel,
      VNode* child
    ): sel(nodeSel), data(NULL), children{ child } {};
    VNode(
      std::string nodeSel,
      VNodeData* nodeData,
      std::string nodeText
    ): sel(nodeSel), text(nodeText), data(nodeData) { adjustVNode(); };
    VNode(
      std::string nodeSel,
      VNodeData* nodeData,
      std::vector<VNode*> nodeChildren
    ): sel(nodeSel), data(nodeData), children{std::move(nodeChildren)} { adjustVNode(); };
    VNode(
      std::string nodeSel,
      VNodeData* nodeData,
      VNode* child
    ): sel(nodeSel), data(nodeData), children{ child } { adjustVNode(); };

    void removeChild(VNode* child);
    void replaceChild(VNode* oldChild, VNode* newChild);

    std::string sel; 
    std::string key;
    std::string text;
    VNodeData* data;
    int elm;
    std::vector<VNode*> children;
};

typedef std::vector<VNode*> VNodeChildren;

#endif
