---
id: inline-example
title: Inline example
---

```
#include "asm-dom.hpp"

using namespace asmdom;

int main() {
  Config config = Config();
  init(config);

  // asm-dom can be used with a JSX like syntax thanks to gccx
  VNode* vnode = (
    <div
      onclick={[](emscripten::val e) -> bool {
        emscripten::val::global("console").call<void>("log", emscripten::val("clicked"));
        return true;
      }}
    >
      <span style="font-weight: bold">This is bold</span>
      and this is just normal text
      <a href="/foo">I'll take you places!</a>
    </div>
  );

  // Patch into empty DOM element – this modifies the DOM as a side effect
  patch(
    emscripten::val::global("document").call<emscripten::val>(
      "getElementById",
      std::string("root")
    ),
    vnode
  );

  // without gccx
  VNode* newVnode = h("div",
    Data(
      Callbacks {
        {"onclick", [](emscripten::val e) -> bool {
          emscripten::val::global("console").call<void>("log", emscripten::val("another click"));
          return true;
        }}
      }
    ),
    Children {
      h("span",
        Data(
          Attrs {
            {"style", "font-weight: normal; font-style: italic"}
          }
        ),
        std::string("This is now italic type")
      ),
      h(" and this is just normal text", true),
      h("a",
        Data(
          Attrs {
            {"href", "/bar"}
          }
        ),
        std::string("I'll take you places!")
      )
    }
  );

  // Second `patch` invocation
  patch(vnode, newVnode); // asm-dom efficiently updates the old view to the new state

  return 0;
};
```
