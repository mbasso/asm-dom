#include "../../../src/cpp/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>

using namespace asmdom;

void shouldCreateElementWithProps() {
  VNode* vnode = h("div",
    Data(
      Props {
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
  VNode* vnode = h("a",
  Data(
      Props {
        {"src", emscripten::val("http://other/")}
      }
    )
  );
  VNode* vnode2 = h("a",
  Data(
      Props {
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
  Data data = Data(
    Props {
      {"src", emscripten::val("http://other/")}
    }
  );
  VNode* vnode = h("a", data);
  VNode* vnode2 = h("a", data);
  patch(getRoot(), vnode);

  emscripten::val elm = getBodyFirstChild();
  assertEquals(elm["src"], emscripten::val("http://other/"));

  patch(vnode, vnode2);
  elm = getBodyFirstChild();
  assertEquals(elm["src"], emscripten::val("http://other/"));

  deleteVNode(vnode2);
};

void removesAnElementsProps() {
  VNode* vnode = h("a",
    Data(
      Props {
        {"src", emscripten::val("http://other/")}
      }
    )
  );
  VNode* vnode2 = h("a");
  patch(getRoot(), vnode);
  patch(vnode, vnode2);

	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["src"], emscripten::val::undefined());

  deleteVNode(vnode2);
};

void shouldUpdateValuePropIfUserInteractedWithTheElement() {
  VNode* vnode = h("input",
    Data(
      Props {
        {"value", emscripten::val("foo")}
      }
    )
  );
  VNode* vnode2 = h("input",
    Data(
      Props {
        {"value", emscripten::val("foo")}
      }
    )
  );
  patch(getRoot(), vnode);
  emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["value"], emscripten::val("foo"));
  elm.set("value", emscripten::val("bar"));
	assertEquals(elm["value"], emscripten::val("bar"));
  patch(vnode, vnode2);
	assertEquals(elm["value"], emscripten::val("foo"));

  deleteVNode(vnode2);
};

void shouldUpdateCheckedPropIfUserInteractedWithTheElement() {
  VNode* vnode = h("input",
    Data(
      Attrs {
        {"type", "checkbox"}
      },
      Props {
        {"checked", emscripten::val(true)}
      }
    )
  );
  VNode* vnode2 = h("input",
    Data(
      Attrs {
        {"type", "checkbox"}
      },
      Props {
        {"checked", emscripten::val(true)}
      }
    )
  );
  patch(getRoot(), vnode);
  emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["checked"], emscripten::val(true));
  elm.set("checked", emscripten::val(false));
	assertEquals(elm["checked"], emscripten::val(false));
  patch(vnode, vnode2);
	assertEquals(elm["checked"], emscripten::val(true));

  deleteVNode(vnode2);
};

EMSCRIPTEN_BINDINGS(props_tests) {
  emscripten::function("shouldCreateElementWithProps", &shouldCreateElementWithProps);
  emscripten::function("changesAnElementsProps", &changesAnElementsProps);
  emscripten::function("preservesMemoizedProps", &preservesMemoizedProps);
  emscripten::function("removesAnElementsProps", &removesAnElementsProps);
  emscripten::function("shouldUpdateValuePropIfUserInteractedWithTheElement", &shouldUpdateValuePropIfUserInteractedWithTheElement);
  emscripten::function("shouldUpdateCheckedPropIfUserInteractedWithTheElement", &shouldUpdateCheckedPropIfUserInteractedWithTheElement);
};