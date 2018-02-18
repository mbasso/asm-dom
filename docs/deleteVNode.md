---
id: deleteVNode
title: deleteVNode
---

Deletes a vnode and all its children from memory. This is useful if you want to delete an entire tree. If you want to delete a vnode but not its children you can simply use the C++ keyword `delete`.

```c++
VNode* child1 = h("h1", string("Headline"));
VNode* child2 = h("p", string("A paragraph"));
VNode* vnode = h("div",
  Data(
    Attrs {
      {"id", "root"}
      {"style", "color: #000"}
    }
  ),
  Children {
    child1,
    child2,
  }
);

// delete vnode, child1 and child2 from memory
deleteVNode(vnode);

// delete vnode but not child1 and child2 from memory
// delete vnode;
```
