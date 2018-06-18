---
id: ref
title: Ref
---

If you want to access direclty DOM nodes created by asm-dom, for example to managing focus, text selection, or integrating with third-party DOM libraries, you can use `refs callbacks`. `ref` is a special callback that takes the DOM node as param and can return `true` or `false` unconditionally, this is just for semplicity, to mantain the same signatures of other events.
`ref` is called after that the DOM node is mounted, if the ref callback changes or after that the DOM node is removed from the DOM tree, in this case the param is evaluated `emscripten::val::null`.
Here is an example of the first and the last case:

```c++
bool refCallback(emscripten::val node) {
  // check if node === null
  if (node.strictlyEquals(emscripten::val::null())) {
    // node unmounted
    // do nothing
  } else {
    // node mounted
    // focus input
    node.call<void>("focus");
  }

  return true;
};

int main() {
  Config config = Config();
  init(config);

  VNode* vnode1 = h("div",
    h("input",
      Data(
        Callbacks {
          {"ref", refCallback}
        }
      )
    )
  );

  patch(
    emscripten::val::global("document").call<emscripten::val>(
      "getElementById",
      std::string("root")
    ),
    vnode1
  );

  VNode* vnode2 = h("div");
  patch(vnode1, vnode2);

  deleteVNode(vnode2);

  return 0;
}
```

As we said before `ref callback` is also invoked if it changes, in the following example asm-dom will call `refCallback` after that the DOM node is mounted and then `anotherRefCallback` after the update:

```c++
VNode* vnode1 = h("div",
  h("input",
    Data(
      Callbacks {
        {"ref", refCallback}
      }
    )
  )
);

patch(
  emscripten::val::global("document").call<emscripten::val>(
    "getElementById",
    std::string("root")
  ),
  vnode1
);

VNode* vnode2 = h("div",
  h("input",
    Data(
      Callbacks {
        {"ref", anotherRefCallback}
      }
    )
  )
);

patch(vnode1, vnode2);
```

Please note that if you want to use a lambda as a ref asm-dom will call it on every update, so, you probably want to avoid something like this:

```c++
VNode* vnode1 = h("div",
  h("input",
    Data(
      Callbacks {
        {"ref", [&](emscripten::val node) -> bool {
          if (!node.strictlyEquals(emscripten::val::null())) {
            // node mounted
            // focus input
            node.call<void>("focus");
          }

          return true;
        }}
      }
    )
  )
);
```
