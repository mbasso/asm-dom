#ifndef asmdom_VNode_hpp
#define asmdom_VNode_hpp

#include <emscripten/val.h>
#include <functional>
#include <utility>
#include <vector>
#include <string>
#include <map>

namespace asmdom {

  typedef std::function<bool(emscripten::val)> Callback;

  typedef std::map<std::string, std::string> Attrs;
  typedef std::map<std::string, emscripten::val> Props;
  typedef std::map<std::string, Callback> Callbacks;

  struct Data {
    Data() {};
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

    Attrs attrs;
    Props props;
    Callbacks callbacks;
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

  typedef std::vector<VNode*> Children;

	void deleteVNode(VNode* vnode);

}

#endif
