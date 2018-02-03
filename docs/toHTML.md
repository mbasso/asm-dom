---
id: toHTML
title: toHTML
---

Renders a vnode to HTML string. This is particularly useful if you want to generate HTML on the server.

```c++
VNode* vnode = h("div",
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

std::string html = toHTML(vnode);
// html = <div id="root" style="color: #000"><h1>Headline</h1><p>A paragraph</p></div>;
```
