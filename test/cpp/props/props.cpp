#include "../../../src/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>

using namespace asmdom;

void shouldCreateElementWithProps() {
  VNode* vnode = new VNode("div",
    new VNodeData(
      VNodeProps {
        {"src", emscripten::val("http://localhost/")}
      }
    )
  );
  patch(getRoot(), vnode);
  emscripten::val elm = getBodyFirstChild();
  assertEquals(elm["src"], emscripten::val("http://localhost/"));

  deleteVNode(vnode);
};

void changesAnElementsProps() {
  VNode* vnode = new VNode("a",
  new VNodeData(
      VNodeProps {
        {"src", emscripten::val("http://other/")}
      }
    )
  );
  VNode* vnode2 = new VNode("a",
  new VNodeData(
      VNodeProps {
        {"src", emscripten::val("http://localhost/")}
      }
    )
  );
  patch(getRoot(), vnode);
  patch(vnode, vnode2);
  emscripten::val elm = getBodyFirstChild();
  assertEquals(elm["src"], emscripten::val("http://localhost/"));

  deleteVNode(vnode2);
};

void preservesMemoizedProps() {
  VNodeData* data = new VNodeData(
    VNodeProps {
      {"src", emscripten::val("http://other/")}
    }
  );
  VNode* vnode = new VNode("a", data);
  VNode* vnode2 = new VNode("a", data);
  patch(getRoot(), vnode);

  emscripten::val elm = getBodyFirstChild();
  assertEquals(elm["src"], emscripten::val("http://other/"));

  patch(vnode, vnode2);
  elm = getBodyFirstChild();
  assertEquals(elm["src"], emscripten::val("http://other/"));

  deleteVNode(vnode2);
};

void removesAnElementsProps() {
  VNode* vnode = new VNode("a",
    new VNodeData(
      VNodeProps {
        {"src", emscripten::val("http://other/")}
      }
    )
  );
  VNode* vnode2 = new VNode("a");
  patch(getRoot(), vnode);
  patch(vnode, vnode2);

	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["src"], emscripten::val::undefined());

  deleteVNode(vnode2);
};

EMSCRIPTEN_BINDINGS(props_tests) {
  emscripten::function("shouldCreateElementWithProps", &shouldCreateElementWithProps);
  emscripten::function("changesAnElementsProps", &changesAnElementsProps);
  emscripten::function("preservesMemoizedProps", &preservesMemoizedProps);
  emscripten::function("removesAnElementsProps", &removesAnElementsProps);
};