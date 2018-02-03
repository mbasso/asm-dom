---
id: motivation
title: Motivation
---

asm-dom is a minimal WebAssembly virtual DOM to build C++ SPA (Single page applications). You can write an entire SPA in C++ and compile it to WebAssembly (or asmjs as fallback) using [Emscripten](http://kripken.github.io/emscripten-site/), asm-dom will call DOM APIs for you. This will produce an app that `aims to execute at native speed by taking advantage of common hardware capabilities`, also, you can use your C/C++ code without any change, you haven't to create a binding layer to use it (as we have to do if we want to use a C++ lib from JS). Basically we are creating an app in C++ that call javascript if needed instead of the opposite. You can write only once in C++ and share as much code as possible with desktop/mobile apps and web site. If you want to learn more about performance, please see [this](https://github.com/mbasso/asm-dom/tree/master/benchmarks).

## How can I structure my application with asm-dom?*

asm-dom is a low-level virtual DOM library. It is unopinionated with regards to how you should structure your application.

## How did you come up with the concept of asm-dom?*

At the beginning asm-dom is born from the idea to test the powerful of WebAssembly in a common use case that is not gaming, VR, AR or Image / video editing. Unfortunately, at the moment, [GC/DOM Integration](http://webassembly.org/docs/future-features/) is a future feature 🦄, so, asm-dom isn't totally developed in wasm. All interactions with the DOM are written in Javascript. This is a big disadvantage because of the overhead of the binding between JS and WASM, in the future asm-dom will be even more powerful, anyway results are satisfying.
