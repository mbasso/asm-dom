---
id: svg
title: SVG
---

SVG just works when using the `h` function for creating virtual nodes. SVG elements are automatically created with the appropriate namespaces.

```c++
VNode* vnode = h("div", Children {
  h("svg",
    Data(
      Attrs {
        {"width", "100"},
        {"height", "100"}
      }
    ),
    Children {
      h("circle",
        Data(
          Attrs {
            {
              {"cx", "50"},
              {"cy", "50"},
              {"r", "40"},
              {"stroke", "green"},
              {"stroke-width", "4"},
              {"fill", "yellow"}
            }
          }
        )
      )
    }
  )
});
```
