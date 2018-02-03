---
id: memory-management
title: Memory Management
---

As we said before the `h` returns a pointer to a VNode, this means that the memory have to be deleted manually. By default asm-dom automatically delete the old vnode from memory when `patch` (or `toHTML`) is called. However, if you want to create a vnode that is not patched, or if you want to manually manage this aspect (setting `clearMemory = false` in the `Config` object to pass to the `init` function), you have to delete it manually.

```c++
VNode* vnode1 = h("div");
VNode* vnode2 = h("div", Children {
  h("span")
});
patch(vnode1, vnode2); // vnode1 automatically deleted

VNode* child1 = h(std::string("span"), "child 1");
VNode* child2 = h(std::string("span"), "child 2");
VNode* vnode = h("span", Children {
  child1,
  child2,
});
delete vnode; // manually delete vnode, child1 and child2 from memory
```
