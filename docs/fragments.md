---
id: fragments
title: Fragments
---

If you want to group a list of children without adding extra nodes to the DOM or you want to use [DocumentFragments](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) to improve the performance of your app, you can do that creating a `VNode` with an empty selector:

```js

// without fragments if you want to return 3 div
// you have to add a parent node that is inserted into the DOM tree
/* asmdom::VNode* vnode = (
    h("div",
        Children {
            h("div", std::string("Child 1")),
            h("div", std::string("Child 2")),
            h("div", std::string("Child 3"))
        }
    )
); */

// with fragments you can just add them without additional nodes
asmdom::VNode* vnode = (
    h("",
        Children {
            h("div", std::string("Child 1")),
            h("div", std::string("Child 2")),
            h("div", std::string("Child 3"))
        }
    )
);
```