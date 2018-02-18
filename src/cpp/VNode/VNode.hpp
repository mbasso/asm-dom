#ifndef asmdom_VNode_hpp
#define asmdom_VNode_hpp

#include <emscripten/val.h>
#include <vector>
#include <string>
#ifdef ASMDOM_JS_SIDE
  #include <map>
#else
  #include <functional>
  #include <utility>
  #include <unordered_map>
#endif

namespace asmdom {

  #ifdef ASMDOM_JS_SIDE
    typedef std::map<std::string, std::string> Attrs;
  #else
    typedef std::function<bool(emscripten::val)> Callback;
    typedef std::unordered_map<std::string, std::string> Attrs;
    typedef std::unordered_map<std::string, emscripten::val> Props;
    typedef std::unordered_map<std::string, Callback> Callbacks;
  #endif

  struct Data {
    Data() {};
    #ifdef ASMDOM_JS_SIDE
      Data(
        const Data& data
      ): attrs(data.attrs) {};
      Data(
        const Attrs& dataAttrs
      ): attrs(dataAttrs) {};
    #else
      Data(
        const Data& data
      ): attrs(data.attrs), props(data.props), callbacks(data.callbacks) {};
      Data(
        const Attrs& dataAttrs,
        const Props& dataProps = Props(),
        const Callbacks& dataCallbacks = Callbacks()
      ): attrs(dataAttrs), props(dataProps), callbacks(dataCallbacks) {};
      Data(
        const Attrs& dataAttrs,
        const Callbacks& dataCallbacks
      ): attrs(dataAttrs), callbacks(dataCallbacks) {};
      Data(
        const Props& dataProps,
        const Callbacks& dataCallbacks = Callbacks()
      ): props(dataProps), callbacks(dataCallbacks) {};
      Data(
        const Callbacks& dataCallbacks
      ): callbacks(dataCallbacks) {};
    #endif

    Attrs attrs;
    #ifndef ASMDOM_JS_SIDE
      Props props;
      Callbacks callbacks;
    #endif
  };

  struct VNode {
    private:
      void adjustVNode();
    public:
      VNode() {};
      VNode(
        const std::string& nodeSel
      ): sel(nodeSel) {};
      VNode(
        const std::string& nodeSel,
        const std::string& nodeText
      ): sel(nodeSel), text(nodeText) {};
      VNode(
        const std::string& nodeText,
        bool isText
      ) {
        if (isText) {
          text = nodeText;
        } else {
          sel = nodeText;
        }
      };
      VNode(
        const std::string& nodeSel,
        const Data& nodeData
      ): sel(nodeSel), data(nodeData) { adjustVNode(); };
      VNode(
        const std::string& nodeSel,
        const std::vector<VNode*>& nodeChildren
      ): sel(nodeSel), children(nodeChildren) { adjustVNode(); };
      VNode(
        const std::string& nodeSel,
        VNode* child
      ): sel(nodeSel), children{ child } {};
      VNode(
        const std::string& nodeSel,
        const Data& nodeData,
        const std::string& nodeText
      ): sel(nodeSel), text(nodeText), data(nodeData) { adjustVNode(); };
      VNode(
        const std::string& nodeSel,
        const Data& nodeData,
        const std::vector<VNode*>& nodeChildren
      ): sel(nodeSel), data(nodeData), children(nodeChildren) { adjustVNode(); };
      VNode(
        const std::string& nodeSel,
        const Data& nodeData,
        VNode* child
      ): sel(nodeSel), data(nodeData), children{ child } { adjustVNode(); };

      std::string sel; 
      std::string key;
      std::string text;
      Data data;
      int elm;
      std::vector<VNode*> children;
  };

  void deleteVNode(const VNode* const vnode);

  typedef std::vector<VNode*> Children;

}

#endif
