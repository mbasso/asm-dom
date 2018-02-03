---
id: boolean-attributes
title: Boolean Attributes
---

If you want to set a boolean attribute, like `readonly`, you can just pass true or false as string, asm-dom will handle it for you:

```c++
VNode* vnode = h("input",
  Data(
    Attrs {
      {"type", "text"}
      {"readonly", "true"}
      // or {"readonly", "false"}
    },
  )
);
```
