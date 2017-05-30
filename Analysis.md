
---
**Attention, this analysis is not completed yet, we're doing our best to create interesting material that can be used as a starting point to others experiments. Contributions are welcome.**
---


# Table of Contents

- [Introduction](#introduction)
- [Implementation details](#implementation-details)
	- [Why C](#why-c)
	- [Compilation process](#compilation-process)
	- [JS Bindings](#js-bindings)
	- [JS side vs WASM side](#js-side-vs-wasm-side)
- [Perfomance analysis](#perfomance-analysis)
	- [Why not BenchmarkJS](#why-not-benchmarkjs)
	- [Garbage Collector](#garbage-collector)
	- [Bindings](#bindings)
	- [Performance](#performance)
- [Summary](#summary)

## Introduction
This paper aims to collect a series of data and motivations that describes this project, here you can find some interesting material that can be used as a starting point to others experiments. We will see a performane analysis and the problems that we have faced up, for example how to limit cost of JS to wasm interop. All the explainations here are purely conceptual, there will be no code inside this document, fot that one, you can simply navigate the source code in the repository. We think that this text will simplify the study of common problems during the development of a JS + WebAssembly library, so, we are pleased to share our experience and we hope that this will motivate you to learn and code something.

## Implementation details
In this section you will find some implementation details of asm-dom, the motivations that get us choose some techniques rather than others, what and why we coded in JS and not in C++. How we tried to solve the problem of the overhead beetwen the two languages and other stuff like that.

### Why C
To write asm-dom we have choosen C++ and not other languages that compile to WebAssembly because we think that, in the future, we will have more chance to use this codebase in other projects (use asm-dom directly from C++ is on the roadmap) and languages. Also, we think that [emscripten](http://kripken.github.io/emscripten-site/) is a really great tool and we bet on it.

### Compilation process
One important aspect of asm-dom that took us a lot of time during the design is the compilation process. How can we handle C++ and JS? How can we compile the C++ and use it from JS? How can we expose an npm module?
Basically asm-dom uses first Emscripten and then webpack: the first one regards the C++ and the second the JS.
Here is the list of simple steps that asm-dom uses to work:

1. Emscripten compiles C++ code to WebAssembly
2. Emscripten compiles C++ code to AsmJS
3. Output of step `1` and `2` is wrapped inside a js code that allows us to import it as a normal module (see [helpers](https://github.com/mbasso/asm-dom/tree/master/src/helpers) folder for more information)
4. Pure js code is compiled with babel (AsmJS and WebAssembly glue code are ignored)
5. Js code uses dynamic import and webpack code splitting to load only the correct code of asm-dom (WebAssembly if supported, AsmJS otherwise)
6. We have now a working npm module

This is the complete compilation process, please pay particular attention of step `3`, it is very important to do that (maybe using `--pre-js` and `--post-js` params with Emscripten, you can see them in the [package.json](https://github.com/mbasso/asm-dom/tree/master/package.json)) otherwise, you cannot use the output of the C code in node.

### JS Bindings
In this section we want to share our experience about JS to Wasm interop costs and our methods to limit this problem. As you probably know infact, passing variables from JS to Wasm and vice versa has a cost. As you also know, asm-dom is written in C++ and compiled to WebAssembly with [emscripten](http://kripken.github.io/emscripten-site/), so we have spent a lot of time dealing with this problem. Specially because we have a lot of interaction between these two environments. Emscripten offers several ways to use Javascript inside C++ and expose C++ structures to this one. Let's see both.

The reference page to this section is [this](http://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html) one, we reccomend you to take a look at that before continuing.
To use Javascript inside C++, as we can see, [EM_ASM()](http://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#interacting-with-code-call-javascript-from-native) is the faster way. Basically we can put some plain javascript code inside C++ and pass to it some parameters like numbers or pointers. We are using this technique to call our dom APIs for example, we will see it soon.

To expose C++ structures we can use [Embind](http://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/embind.html#embind-val-guide). This special class allows us to create the bindings between the two languages.
In our case we have figured out that use Embind to map a C++ strucure to a JS object is a bit expensive. In fact, in our library we have a lot of interop between the two environments. It would be great to have the vdom tree in a variable in JS but it is too much expensive, so we avoid that and we found an alternative way to pass C++ object to it. Basically we return to JS the memory address of the C++ structure and, when we want to take it back, we can reinterpret that address as a pointer and use the data structure in a normal way. Using this technique we are only passing numbers to Javascript, avoiding additional information like vnode selectors, props, and so on. But what if we want to manipulate the data structure? As we can see in asm-dom we expose a set of methods like `removeChild` or `replaceChild` that allows you to do that without a lot of overhead, so they seem cheap. Ok, but in some circumstances I absolutely need to expose a JS object, how can I do? If you want to do that, we reccomend to create a method that, given the memory address, returns the original C++ structure as a JS object. In this way there is a little overhead by default, and you can get the JS object only when you really need it. Something like that:

```js
const { h, getVNode } = asmDom;
const memoryAddress = h('div');
// 5257344
const dataStructure = getVNode(memoryAddress);
// {
//   sel: 'div',
//	 props: {},
//	 children: [],
// }
```

In asm-dom we have all these types of optimizations, anyway the overhead seems to be very relevant, mainly because of the translation, for examples, from JS arrays to vectors (this is used for children) or from JS Object to std::map (used for props). We are doing this to have a set of public APIs that is pretty good to use.

### JS side vs WASM side
Which pieces of my library should I write in Javascript? And Which in WebAssembly?
We think that you should write in Javascript only the code that is strictly needed, for example DOM interactions (since there aren't DOM APIs in WebAssembly yet) and others public APIs (for a library) that can act as a bridge with the WebAssembly environment.
We think that you should write in WebAssembly complex functions (like the diffing algorithm of a virtual dom), so you can get advantage of the speed of this language. Consider also that when you want to do this, you have to pay attention of the cost of bindings. For example, in our diffing algorithm functions are compared in the JS side, in fact, pass them to WebAssembly would have been too much expansive. This is the meaning of the `raw` prop. It defines what will be compared in Javascript rather than WebAssembly. So our diffing algorithm is composed by two parts: A [js function](https://github.com/mbasso/asm-dom/blob/master/src/js/diff.js) and a [WebAssembly function](https://github.com/mbasso/asm-dom/blob/master/src/cpp/Diff/diff.cpp).

## Perfomance analysis
In this section you will find an analysis of performances, we will start with an explaination of the causes that motivate us to make these tests without a particular library, then you will see some considerations about WebAssembly and finally some data.

### Why not BenchmarkJS

### Garbage Collector

### Bindings

### Performance

## Summary

