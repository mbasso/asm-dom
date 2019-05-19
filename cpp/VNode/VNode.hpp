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

  enum VNodeFlags {
    // NodeType
    isElement = 1,
    isText = 1 << 1,
    isComment = 1 << 2,
    isFragment = 1 << 3,

    // flags
    hasKey = 1 << 4,
    hasText = 1 << 5,
    hasAttrs = 1 << 6,
    hasProps = 1 << 7,
    hasCallbacks = 1 << 8,
    hasDirectChildren = 1 << 9,
    hasChildren = hasDirectChildren | hasText,
    hasRef = 1 << 10,
    hasNS = 1 << 11,
    isNormalized = 1 << 12,

    // masks
    isElementOrFragment = isElement | isFragment,
    nodeType = isElement | isText | isComment | isFragment,
    removeNodeType = ~0 ^ nodeType,
    extractSel = ~0 << 13,
    id = extractSel | hasKey | nodeType
  };

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
      void normalize(const bool injectSvgNamespace);
    public:
      VNode(
        const std::string& nodeSel
      ): sel(nodeSel) {};
      VNode(
        const std::string& nodeSel,
        const std::string& nodeText
      ): sel(nodeSel) {
        normalize();
        if (hash & isComment) {
          sel = nodeText;
        } else {
          children.push_back(new VNode(nodeText, true));
          hash |= hasText;
			  }
      };
      VNode(
        const std::string& nodeText,
        const bool textNode
      ) {
        if (textNode) {
          normalize();
          sel = nodeText;
          // replace current type with text type
			    hash = (hash & removeNodeType) | isText;
        } else {
          sel = nodeText;
          normalize();
        }
      };
      VNode(
        const std::string& nodeSel,
        const Data& nodeData
      ): sel(nodeSel), data(nodeData) {};
      VNode(
        const std::string& nodeSel,
        const std::vector<VNode*>& nodeChildren
      ): sel(nodeSel), children(nodeChildren) {};
      VNode(
        const std::string& nodeSel,
        VNode* child
      ): sel(nodeSel), children{ child } {};
      VNode(
        const std::string& nodeSel,
        const Data& nodeData,
        const std::string& nodeText
      ): sel(nodeSel), data(nodeData) {
        normalize();
        if (hash & isComment) {
          sel = nodeText;
        } else {
          children.push_back(new VNode(nodeText, true));
          hash |= hasText;
        }
      };
      VNode(
        const std::string& nodeSel,
        const Data& nodeData,
        const std::vector<VNode*>& nodeChildren
      ): sel(nodeSel), data(nodeData), children(nodeChildren) {};
      VNode(
        const std::string& nodeSel,
        const Data& nodeData,
        VNode* child
      ): sel(nodeSel), data(nodeData), children{ child } {};
      ~VNode();

      void normalize() { normalize(false); };

    // contains selector for elements and fragments, text for comments and textNodes
    std::string sel;
    std::string key;
    std::string ns;
    unsigned int hash = 0;
    Data data;
    int elm = 0;
    std::vector<VNode*> children;
  };

  void deleteVNode(const VNode* const vnode);

  typedef std::vector<VNode*> Children;

}

#endif
