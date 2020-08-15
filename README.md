# :rage4: asm-dom :rage4:
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)
[![Build Status](https://travis-ci.org/mbasso/asm-dom.svg?branch=master)](https://travis-ci.org/mbasso/asm-dom)
[![npm version](https://img.shields.io/npm/v/asm-dom.svg)](https://www.npmjs.com/package/asm-dom)
[![npm downloads](https://img.shields.io/npm/dm/asm-dom.svg?maxAge=2592000)](https://www.npmjs.com/package/asm-dom)
[![Join the chat at https://gitter.im/mbasso/asm-dom](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mbasso/asm-dom?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> A minimal WebAssembly virtual DOM to build C++ SPA (Single page applications)

## Table of Contents

- [Motivation](#motivation)
- [Inline Example](#inline-example)
- [Getting started](#getting-started)
- [Ecosystem](#ecosystem)
- [Examples](#examples)
- [Roadmap](#roadmap)
- [Change Log](#change-log)
- [Authors](#authors)
- [Copyright and License](#copyright-and-license)

## Motivation

asm-dom is a minimal WebAssembly virtual DOM to build C++ SPA (Single page applications). You can write an entire SPA in C++ and compile it to WebAssembly (or asmjs as fallback) using [Emscripten](http://kripken.github.io/emscripten-site/), asm-dom will call DOM APIs for you. This will produce an app that `aims to execute at native speed by taking advantage of common hardware capabilities`, also, you can use your C/C++ code without any change, you haven't to create a binding layer to use it (as we have to do if we want to use a C++ lib from JS). Basically we are creating an app in C++ that call javascript if needed instead of the opposite. You can write only once in C++ and share as much code as possible with desktop/mobile apps and web site. If you want to learn more about performance, please see [this](https://github.com/mbasso/asm-dom/tree/master/benchmarks).

*How can I structure my application with asm-dom?*

asm-dom is a low-level virtual DOM library. It is unopinionated with regards to how you should structure your application.

*How did you come up with the concept of asm-dom?*

At the beginning asm-dom is born from the idea to test the powerful of WebAssembly in a common use case that is not gaming, VR, AR or Image / video editing. Unfortunately, at the moment, [GC/DOM Integration](http://webassembly.org/docs/future-features/) is a future feature 🦄, so, asm-dom isn't totally developed in wasm. All interactions with the DOM are written in Javascript. This is a big disadvantage because of the overhead of the binding between JS and WASM, in the future asm-dom will be even more powerful, anyway results are satisfying.

## Inline Example

```jsx
#include "asm-dom.hpp"

using namespace asmdom;

int main() {
  Config config = Config();
  init(config);

  // asm-dom can be used with a JSX like syntax thanks to gccx
  VNode* vnode = (
    <div
      onclick={[](emscripten::val e) -> bool {
        emscripten::val::global("console").call<void>("log", emscripten::val("clicked"));
        return true;
      }}
    >
      <span style="font-weight: bold">This is bold</span>
      and this is just normal text
      <a href="/foo">I'll take you places!</a>
    </div>
  );

  // Patch into empty DOM element – this modifies the DOM as a side effect
  patch(
    emscripten::val::global("document").call<emscripten::val>(
      "getElementById",
      std::string("root")
    ),
    vnode
  );

  // without gccx
  VNode* newVnode = h("div",
    Data(
      Callbacks {
        {"onclick", [](emscripten::val e) -> bool {
          emscripten::val::global("console").call<void>("log", emscripten::val("another click"));
          return true;
        }}
      }
    ),
    Children {
      h("span",
        Data(
          Attrs {
            {"style", "font-weight: normal; font-style: italic"}
          }
        ),
        std::string("This is now italic type")
      ),
      h(" and this is just normal text", true),
      h("a",
        Data(
          Attrs {
            {"href", "/bar"}
          }
        ),
        std::string("I'll take you places!")
      )
    }
  );

  // Second `patch` invocation
  patch(vnode, newVnode); // asm-dom efficiently updates the old view to the new state

  return 0;
};
```

## Getting started

asm-dom aims to be used from C++, however it can be used also from javascript, here you can find the doc of both:

- [C++ docs](https://mbasso.github.io/asm-dom/docs/installation.html)
- [JS docs](https://github.com/mbasso/asm-dom/blob/master/docs/js.md)

## Ecosystem

Here you can find a list of related projects:

- [gccx](https://github.com/mbasso/gccx) - CPX (JSX like syntax) support.
- [asm-dom-boilerplate](https://github.com/mbasso/asm-dom-boilerplate) - A simple boilerplate to start using asm-dom without configuration.

## Examples

Examples are available in the [examples folder](https://github.com/mbasso/asm-dom/tree/master/examples).

Also, here is the list of third-party examples:

- [asm-dom-OO-counters](https://github.com/kevinaud/asm-dom-OO-counters)
- [asm-dom-cmake](https://github.com/ArthurSonzogni/asm-dom-cmake) - Build using cmake only.

and online Demos:

- [TODO MVC](https://mbasso.github.io/asm-dom/examples/todomvc/)
- [simple counter](http://arthursonzogni.github.io/asm-dom-cmake/)

## Roadmap

- [ ] Thunks support
- [ ] asm-dom aims to be even more powerful with [GC/DOM Integration](http://webassembly.org/docs/future-features/). Unfortunately this is a future feature 🦄, so, we have to be patient and wait a bit.

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/mbasso/asm-dom/releases) page.

## Authors

**Matteo Basso**
- [github/mbasso](https://github.com/mbasso)
- [@teo_basso](https://twitter.com/teo_basso)

## Copyright and License

Copyright for portions of project asm-dom are held by:
- Simon Friis Vindum, 2015 as part of project snabbdom
- project snabbdom-to-html

All other copyright for project asm-dom are held by Matteo Basso.

Copyright (c) 2016, Matteo Basso.

asm-dom source code is licensed under the [MIT License](https://github.com/mbasso/asm-dom/blob/master/LICENSE.md).
