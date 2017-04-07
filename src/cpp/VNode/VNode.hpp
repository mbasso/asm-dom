#ifndef VNode_hpp
#define VNode_hpp

#include <emscripten/val.h>
#include <vector>
#include <string>
#include <map>

class VNode {
  public:
    VNode(): elm(emscripten::val::undefined()) {};
    VNode(
      const std::string nodeSel
    ): sel(nodeSel), elm(emscripten::val::undefined()) {};
    VNode(
      const std::string nodeSel,
      const std::string nodeText
    ): sel(nodeSel), text(nodeText), elm(emscripten::val::undefined()) {};
    VNode(
      const std::string nodeText,
      bool isText
    ): text(nodeText), elm(emscripten::val::undefined()) {};
    VNode(
      const std::string nodeSel,
      const std::map<std::string, std::string> nodeProps
    ): sel(nodeSel), props(nodeProps), elm(emscripten::val::undefined()) {};
    VNode(
      const std::string nodeSel,
      VNode* child
    ): sel(nodeSel), elm(emscripten::val::undefined()), children(std::vector<VNode*> { child }) {};
    VNode(
      const std::string nodeSel,
      const std::map<std::string, std::string> nodeProps,
      const std::string nodeText
    ): sel(nodeSel), text(nodeText), props(nodeProps), elm(emscripten::val::undefined()) {};
    VNode(
      const std::string nodeSel,
      const std::map<std::string, std::string> nodeProps,
      VNode* child
    ): sel(nodeSel), props(nodeProps), elm(emscripten::val::undefined()), children(std::vector<VNode*> { child }) {};
    VNode(
      const std::string nodeSel,
      const std::string nodeText,
      const std::map<std::string, std::string> nodeProps,
      const std::vector<VNode*> nodeChildren
    ): sel(nodeSel), text(nodeText), props(nodeProps), elm(emscripten::val::undefined()), children(nodeChildren) {};
    std::string sel; 
    std::string key;
    std::string text;
    std::map<std::string, std::string> props;
    emscripten::val elm;
    std::vector<VNode*> children;
    // bindings
    std::vector<VNode> get_children() const;
    void set_children(std::vector<VNode> nodeChildren);
};

#endif
