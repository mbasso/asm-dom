# :rage4: asm-dom :rage4:
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)
[![Build Status](https://travis-ci.org/mbasso/asm-dom.svg?branch=master)](https://travis-ci.org/mbasso/asm-dom)
[![npm version](https://img.shields.io/npm/v/asm-dom.svg)](https://www.npmjs.com/package/asm-dom)
[![npm downloads](https://img.shields.io/npm/dm/asm-dom.svg?maxAge=2592000)](https://www.npmjs.com/package/asm-dom)
[![Join the chat at https://gitter.im/mbasso/asm-dom](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mbasso/asm-dom?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> A minimal WebAssembly virtual DOM focused on performance

## Table of Contents

- [Installation](#installation)
- [Motivation](#motivation)
- [Inline Example](#inline-example)
- [Examples](#examples)
- [Documentation](#documentation)
- [TODO](#todo)
- [Benchmarks](#benchmarks)
- [Roadmap](#installation)
- [Change Log](#change-log)
- [Authors](#authors)
- [Copyright and License](#copyright-and-license)

## Installation

You can install asm-dom using [npm](https://www.npmjs.com/package/asm-dom):

```bash
npm install --save asm-dom
```

If you are using this library with webpack you also need to install `arraybuffer-loader`:

```bash
npm install --save-dev arraybuffer-loader
```

and add this object to your loaders:

```js
{
  test: /\.wasm$/,
  loaders: ['arraybuffer-loader'],
}
```

also, if you have some problems with fs, you can add this to your webpack config:

```js
node: {
  fs: 'empty',
},
```

## Motivation
asm-dom is a minimal WebAssembly virtual DOM focused on performance. It is born from the idea to test the powerful of WebAssembly in a common use case that is not gaming, VR, AR or Image / video editing. Unfortunately, at the moment, [GC / DOM / Web API Integration](http://webassembly.org/docs/gc/) is a future feature 🦄, so, asm-dom isn't totally developed in wasm. All interactions with the DOM are written in Javascript. This is a big disadvantage because of the overhead of the binding between JS and WASM, in the future asm-dom will be even more powerful, anyway results are satisfying.
Last but not least, this project aims to be an example for those who want to try WebAssembly and emscripten!

## Inline Example

```js
import init from 'asm-dom';

const asmDom = await init();
// or init().then(asmDom => { ... });
const { h, patch } = asmDom;

const root = document.getElementById('root');

const vnode = h('div', {
  raw: { onclick: () => console.log('clicked') }
}, [
  h('span', { style: 'font-weight: bold' }, 'This is bold'),
  ' and this is just normal text',
  h('a', { href: '/foo' }, 'I\'ll take you places!')
]);
// Patch into empty DOM element – this modifies the DOM as a side effect
patch(root, vnode);

const newVnode = h('div', {
  raw: { onclick: () => console.log('another click') }
}, [
  h('span', { style: 'font-weight: normal; font-style: italic' }, 'This is now italic type'),
  ' and this is just normal text',
  h('a', { href: '/bar' }, 'I\'ll take you places!')
]);

// Second `patch` invocation
patch(vnode, newVnode); // asm-dom efficiently updates the old view to the new state
```

## Examples

Examples are available in the [examples folder](https://github.com/mbasso/asm-dom/tree/master/examples).

Also, here is the list of the online Demos:

- [TODO MVC](https://mbasso.github.io/asm-dom/examples/todomvc/)

## Documentation

### init

By default asm-dom returns an `init` function that takes an optional configuration object. This represents the [Module](https://kripken.github.io/emscripten-site/docs/api_reference/module.html) object passed to emscripten with 3 additional props:
- `useWasm`: `true` if you want to force the usage of WebAssembly
- `useAsmJS`: `true` if you want to force the usage of asm.js
- `clearMemory`: `true` by default, set it to `false` if you want to free memory manually, for more information see [deleteVNode](#deletevnode).
- `unsafePatch`: `false` by default, set it to `true` if you haven't a single `patch` in your application. This allows you to call patch with an `oldVnode` that hasn't been used previously. For example, you have to enable this option if you want to patch a subtree of your vdom and then use `replaceChild`, for more information see [patch](#patch).

By default asm-dom uses WebAssembly if supported, otherwise asm.js

Please note that **this function creates the module only the first time that is called, the next times returns a Promise that resolve with the same, cached object**.

```js
import init from 'asm-dom';

// init returns a Promise
const asmDom = await init();
// const asmDom = await init({ useAsmJS: true });
// init().then(asmDom => { ... });
```

### h

You can create vnodes using `h` function. `h` accepts a tag/selector as a string, an optional data object and an optional **string** or array of children. The data object contains all attributes and a special `raw` prop that can contains **callbacks** and raw values applied to the DOM element with the dot notation. You should also put in `raw` properties like `value` or  `checked`. This returns the memory address of your virtual node.

```js
const { h } = asmDom;
const vnode = h('div', { style: 'color: #000' }, [
  h('h1', 'Headline'),
  h('p', 'A paragraph'),
]);

const vnode2 = h('div', {
  id: 'an-id', // node.setAttribute('id', 'an-id')
  className: 'foo', // className is a special attribute evaluated as 'class'
  'data-foo': 'bar', // a dataset attribute
  raw: {
    onclick: (e) => console.log('clicked: ', e.target),
    foo: 'bar', // raw value: node.foo = 'bar'
  },
});
```

### patch

The `patch` takes two arguments, the first is a DOM element or a vnode representing the current view. The second is a vnode representing the new, updated view. If `patch` succedeed, the new vnode (the second parameter) is returned.

If a DOM element is passed, `newVnode` will be turned into a DOM node, and the passed element will be replaced by the created DOM node. If an `oldVnode` is passed, asm-dom will efficiently modify it to match the description in the new vnode.

**If `unsafePatch` in `init` is equal to false, any old vnode passed must be the resulting vnode from the previous call to patch. Otherwise, no operation is performed and undefined is returned.**

```js
const { h, patch } = asmDom;

const oldVnode = h('span', 'old node');
const newVnode = h('span', 'new node');

patch(document.getElementById('root'), oldVnode);
patch(oldVnode, newVnode);

// with unsafePatch = false
const vnode = h('div');
patch(oldVnode, vnode); // returns undefined, found oldVnode, expected newVnode
```

With `unsafePatch = true` you can implement some interesting mechanisms, for example you can do something like this:

```js
const oldVnode = h('span', 'old text');
const vnode = h('div', [
  h('span', 'this is a text'),
  oldVnode
]);

patch(document.getElementById('root'), vnode);

const newVnode = h('span', 'new text');
// patch only the child
patch(oldVnode, newVnode);

// update the tree
replaceChild(vnode, oldVnode, newVnode);
```

### deleteVNode

As we said before the `h` returns a memory address. This means that this memory have to be deleted manually, as we have to do in C++ for example. By default asm-dom automatically delete the old vnode from memory when `patch` is called. However, if you want to create a vnode that is not patched, or if you want to manually manage this aspect (setting `clearMemory: false` in the `init` function), you have to delete it manually. For this reason we have developed a function that allows you to delete a given vnode and all its children recursively:

```js
const vnode1 = h('div');
const vnode2 = h('div', [
  h('span',)
]);
patch(vnode1, vnode2); // vnode1 automatically deleted

const child1 = h('span', 'child 1');
const child2 = h('span', 'child 2');
const vnode = h('span', [
  child1,
  child2,
]);
deleteVNode(vnode); // manually delete vnode, child1 and child2 from memory
```

### removeChild

Remove the given child from the given parent:

```js
const child = h('div');
const parent = h('span', [
  h('video'),
  child,
]);
removeChild(parent, child); // parent =  h('span', [h('video')]);
deleteVNode(child);
```

### replaceChild

Replace a child with another in the given parent:

```js
const oldChild = h('div');
const newChild = h('span');
const parent = h('span', [
  h('video'),
  oldChild,
]);
replaceChild(parent, oldChild, newChild); // parent =  h('span', [h('video'), h('span')]);
deleteVNode(oldChild);
```

## TODO

Here is a list of things that have to be done to complete this project:

- use the closure compiler (cause problems with wasm, need to update emscripten)

## Benchmarks

At the moment we haven't Benchmarks to show, but they'll come soon!
Consider that benchmarking this library is not easy, we have to reproduce real world situations with big vnodes trees and frequent updates. Run a single patch or a sequence of patch in a for-loop might produce results that are not attributable to a real application.

## Roadmap

asm-dom aims to be even more powerful with [GC / DOM / Web API Integration](http://webassembly.org/docs/gc/). Unfortunately this is a future feature 🦄, so, we have to be patient and wait a bit.

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/mbasso/asm-dom/releases) page.

## Authors
**Matteo Basso**
- [github/mbasso](https://github.com/mbasso)
- [@teo_basso](https://twitter.com/teo_basso)

## Copyright and License
Copyright for portions of project asm-dom are held by Simon Friis Vindum, 2015 as part of project snabbdom. All other copyright for project asm-dom are held by Matteo Basso.

Copyright (c) 2016, Matteo Basso.

asm-dom source code is licensed under the [MIT License](https://github.com/mbasso/asm-dom/blob/master/LICENSE.md).
