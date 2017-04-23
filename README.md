# :rage4: asm-dom :rage4:
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

> A minimal WebAssembly virtual DOM focused on performance

---

:warning: **Attention - This project isn't completed yet. Feel free to contribute, see [TODO](#todo) to get started** :warning:
---

---

## Table of Contents

- [Installation](#installation)
- [Motivation](#motivation)
- [Example](#example)
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

## Motivation
asm-dom is a minimal WebAssembly virtual DOM focused on performance. It is born from the idea to test the powerful of WebAssembly in a common use case that is not gaming, VR, AR or Image / video editing. Unfortunately, at the moment, [GC / DOM / Web API Integration](http://webassembly.org/docs/gc/) is a future feature 🦄, so, asm-dom isn't totally developed in wasm. All interactions with the DOM are written in Javascript. This is a big disadvantage because of the overhead of the binding between JS and WASM, in the future asm-dom will be even more powerful, anyway results are satisfying.
Last but not least, this project aims to be an example for those who want to try WebAssembly and emscripten!

## Example

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

## Documentation

### init

By default asm-dom returns an `init` function that takes an optional configuration object. This represents the [Module](https://kripken.github.io/emscripten-site/docs/api_reference/module.html) object passed to emscripten with 2 additional props:
- `useWasm`: `true` if you want to force the usage of WebAssembly
- `useAsmJS`: `true` if you want to force the usage of asm.js

By default asm-dom uses WebAssembly if supported, otherwise asm.js

Please note that **this function have to be called only one time in your application**.

```js
import init from 'asm-dom';

// init returns a Promise
const asmDom = await init();
// const asmDom = await init({ useAsmJS: true });
// init().then(asmDom => { ... });
```

### h

You can create vnodes using `h` function. `h` accepts a tag/selector as a string, an optional data object and an optional string or array of children. The data object contains all attributes and a special `raw` prop that can contains callbacks and raw values applied to the DOM element with the dot notation. This returns the memory address of your virtual node.

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

The `patch` takes two arguments, the first is a DOM element or a vnode representing the current view. The second is a vnode representing the new, updated view.

If a DOM element with a **parent and id** is passed, newVnode will be turned into a DOM node, and the passed element will be replaced by the created DOM node. If an old vnode is passed, asm-dom will efficiently modify it to match the description in the new vnode.

Any old vnode passed must be the resulting vnode from a previous call to patch.

```js
const { h, patch } = asmDom;

const vnode = h('span', 'old node');
const newVnode = h('span', 'new node');

patch(document.getElementById('root'), vnode);
patch(vnode, newVnode);
```

## TODO

Here is a list of things that have to be done to complete this project:

- test
- use requestAnimationFrame? (there is a branch with this name)
- use the closure compiler (cause problems with wasm, need to update emscripten)

## Benchmarks

At the moment we haven't Benchmarks to show, but they'll come soon!

## Roadmap

asm-dom aims to be even more powerful with [GC / DOM / Web API Integration](http://webassembly.org/docs/gc/). Unfortunately this is a future feature 🦄, so, we have to be patient and wait a little.

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/mbasso/asm-dom/releases) page.

## Authors
**Matteo Basso**
- [github/mbasso](https://github.com/mbasso)
- [@teo_basso](https://twitter.com/teo_basso)

## Copyright and License
Copyright (c) 2016, Matteo Basso.

asm-dom source code is licensed under the [MIT License](https://github.com/mbasso/asm-dom/blob/master/LICENSE.md).
