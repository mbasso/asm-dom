---
id: toVNode
title: toVNode
---

Converts a DOM node into a virtual node. This is especially good for patching over an pre-existing, server-side generated content.

```c++
// supposing that 'root' is a server-side generated div
VNode* vnode = toVNode(
  emscripten::val::global("document").call<emscripten::val>(
    "getElementById",
    emscripten::val("root")
  )
);

VNode* newVnode = h("div",
  Data(
    Attrs {
      {"id", "root"}
      {"style", "color: #000"}
    }
  ),
  Children {
    h("h1", string("Headline")),
    h("p", string("A paragraph")),
  }
);

patch(vnode, newVnode);
```
