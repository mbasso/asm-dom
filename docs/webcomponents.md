---
id: webcomponents
title: Web Components
---

Virtual DOM and WebComponents represent different technologies. Virtual DOM provides a declarative way to write the UI and keep it sync with the data, while WebComponents provide an encapsulation for reusable components. There are no limitation to use them together, you can use asm-dom with WebComponents or use asm-dom inside WebComponents.

## Using WebComponents in asm-dom

With asm-dom you can just use WebComponents as any other element:

```c++
// customElements.define('my-tabs', MyTabs);

VNode* vnode = h("my-tabs",
  Data(
    Attrs {
      {"class", "css-class"},
      {"attr", "an attribute"}
    },
    Props {
      {"prop", "a prop"}
    },
    Callbacks {
      {"tab-select", onTabSelect}
    }
  ),
  Children {
    h("p", std::string("I'm a child!"))
  }
);
```

## Using asm-dom in WebComponents

At the moment creating WebComponents from C++ is not so easy, you problably need to mix some C++ and Javascript code, maybe with [`emscripten_run_script`](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-javascript-from-c-c), [`EM_ASM`](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-javascript-from-c-c) or [`Embind`](http://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/embind.html).
Please, to make asm-dom work, make sure to enable the usage of [`patch`](patch.html) in multiple points of your app with `unsafePatch = true` in the [`init`](init.html) function.