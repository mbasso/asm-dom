---
id: patch
title: patch
---

The `patch` takes two arguments, the first is a DOM element (you can get it using [emscripten::val::global](https://kripken.github.io/emscripten-site/docs/api_reference/val.h.html)) or a vnode representing the current view. The second is a vnode representing the new, updated view. If `patch` succedeed, the new vnode (the second parameter) is returned.

If a DOM element is passed, `newVnode` will be turned into a DOM node, and the passed element will be replaced by the created DOM node. If an `oldVnode` is passed, asm-dom will efficiently modify it to match the description in the new vnode.

**If `unsafePatch` in `init` is equal to false, any old vnode passed must be the resulting vnode from the previous call to patch. Otherwise, no operation is performed and NULL is returned.**

```c++
VNode* oldVnode = h("span", std::string("old node"));
VNode* newVnode = h("span", std::string("new node"));

patch(
	emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root")),
	oldVnode
);
patch(oldVnode, newVnode);

// with unsafePatch = false
VNode* vnode = h("div");
patch(oldVnode, vnode); // returns NULL, found oldVnode, expected newVnode
```

With `unsafePatch = true` you can implement some interesting mechanisms, for example you can do something like this:

```c++
VNode* oldText = h("span", std::string("old text"));
VNode* vnode = h("div", Children {
  h("span", std::string("this is a text")),
  oldText
});

patch(
	emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root")),
	vnode
);

VNode* newText = h(std::string("span"), "new text");
// patch only the child
patch(oldText, newText);
```
