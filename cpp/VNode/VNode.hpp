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

  enum NodeType { element, text, comment, fragment };

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
      void normalize();
    public:
      VNode(
        const std::string& nodeSel
      ): sel(nodeSel) { normalize(); };
      VNode(
        const std::string& nodeSel,
        const std::string& nodeText
      ): sel(nodeSel) {
        normalize();
        if (nt == comment) {
          text = nodeText;
        } else {
          children.push_back(new VNode(nodeText, true));
          cleanChildren = true;
			  }
      };
      VNode(
        const std::string& nodeText,
        bool isText
      ) {
        if (isText) {
          text = nodeText;
          normalize();
			    nt = NodeType::text;
        } else {
          sel = nodeText;
          normalize();
        }
      };
      VNode(
        const std::string& nodeSel,
        const Data& nodeData
      ): sel(nodeSel), data(nodeData) { normalize(); };
      VNode(
        const std::string& nodeSel,
        const std::vector<VNode*>& nodeChildren
      ): sel(nodeSel), children(nodeChildren) { normalize(); };
      VNode(
        const std::string& nodeSel,
        VNode* child
      ): sel(nodeSel), children{ child } { normalize(); };
      VNode(
        const std::string& nodeSel,
        const Data& nodeData,
        const std::string& nodeText
      ): sel(nodeSel), data(nodeData) {
        normalize();
        if (nt == comment) {
          text = nodeText;
        } else {
          children.push_back(new VNode(nodeText, true));
          cleanChildren = true;
        }
      };
      VNode(
        const std::string& nodeSel,
        const Data& nodeData,
        const std::vector<VNode*>& nodeChildren
      ): sel(nodeSel), data(nodeData), children(nodeChildren) { normalize(); };
      VNode(
        const std::string& nodeSel,
        const Data& nodeData,
        VNode* child
      ): sel(nodeSel), data(nodeData), children{ child } { normalize(); };
      ~VNode();

    std::string sel;
    std::string key;
    std::string text;
    NodeType nt;
    std::size_t selHash;
    Data data;
    int elm;
    bool cleanChildren;
    std::vector<VNode*> children;
  };

  void deleteVNode(const VNode* const vnode);

  typedef std::vector<VNode*> Children;

}

#endif
