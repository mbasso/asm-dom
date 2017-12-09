# Table of Contents

- [Inline Example](#inline-example)
- [Installation](#installation)
- [Examples](#examples)
- [Documentation](#documentation)
	- [init](#init)
	- [h](#h)
	- [patch](#patch)
	- [deleteVNode](#deletevnode)
	- [toVNode](#tovnode)
	- [toHTML](#tohtml)
- [Notes](#notes)
	- [boolean attributes](#boolean-attributes)
- [Helpers](#helpers)
  - [svg](#svg)
- [Structuring applications](#structuring-applications)

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

## Examples

Examples are available in the [examples folder](https://github.com/mbasso/asm-dom/tree/master/examples):

- [TODO MVC](https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20js)

## Documentation

### init

By default asm-dom returns an `init` function that takes an optional configuration object. This represents the [Module](https://kripken.github.io/emscripten-site/docs/api_reference/module.html) object passed to emscripten with 4 additional props:
- `useWasm`: `true` if you want to force the usage of WebAssembly
- `useAsmJS`: `true` if you want to force the usage of asm.js
- `clearMemory`: `true` by default, set it to `false` if you want to free memory manually, for more information see [deleteVNode](#deletevnode).
- `unsafePatch`: `false` by default, set it to `true` if you haven't a single `patch` in your application. This allows you to call patch with an `oldVnode` that hasn't been used previously. 

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

You can create vnodes using `h` function. `h` accepts a tag/selector as a string, an optional data object and an optional **string** or array of children. The data object contains all attributes and 3 special props:
- `ns`: the namespace URI to associate with the element
- `key`: this property is used to keep pointers to DOM nodes that existed previously to avoid recreating them if it is unnecessary. This is very useful for things like list reordering.
- `raw`: an object that contains **callbacks** and raw values applied to the DOM element with the dot notation. You should also put in `raw` properties like `value` or  `checked`.

This returns the memory address of your virtual node.

```js
const { h } = asmDom;
const vnode = h('div', { style: 'color: #000' }, [
  h('h1', 'Headline'),
  h('p', 'A paragraph'),
]);

const vnode2 = h('div', {
  id: 'an-id', // node.setAttribute('id', 'an-id')
  key: 'foo',
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
const oldText = h('span', 'old text');
const vnode = h('div', [
  h('span', 'this is a text'),
  oldText
]);

patch(document.getElementById('root'), vnode);

const newText = h('span', 'new text');
// patch only the child
patch(oldText, newText);
```

### deleteVNode

As we said before the `h` returns a memory address. This means that this memory have to be deleted manually, as we have to do in C++ for example. By default asm-dom automatically delete the old vnode from memory when `patch` (or `toHTML`) is called. However, if you want to create a vnode that is not patched, or if you want to manually manage this aspect (setting `clearMemory: false` in the `init` function), you have to delete it manually. For this reason we have developed a function that allows you to delete a given vnode and all its children recursively:

```js
const vnode1 = h('div');
const vnode2 = h('div', [
  h('span')
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

## toVNode

Converts a DOM node into a virtual node. This is especially good for patching over an pre-existing, server-side generated content. Using this function together with `toHTML` you can implement server-side rendering.

```js
// supposing that 'root' is a server-side generated div
const vnode = toVNode(document.getElementById('root'));

const newVnode = h('div', {
  id: 'root',
  style: 'color: #000',
}, [
  h('h1', 'Headline'),
  h('p', 'A paragraph'),
]);

patch(vnode, newVnode);
```

## toHTML

Renders a vnode to HTML string. This is particularly useful if you want to generate HTML on the server. Using this function together with `toVNode` you can implement server-side rendering.

```js
const vnode = h('div', {
  id: 'root',
  style: 'color: #000',
}, [
  h('h1', 'Headline'),
  h('p', 'A paragraph'),
]);

const html = toHTML(vnode);
// html = '<div id="root" style="color: #000"><h1>Headline</h1><p>A paragraph</p></div>';
```

## Notes

### boolean attributes

If you want to set a boolean attribute, like `readonly`, you can just pass `true` or `false`, asm-dom will handle it for you:

```js
const vnode = h('input', {
  readonly: true,
  // or readonly: false,
});
```

## Helpers

### svg

SVG just works when using the `h` function for creating virtual nodes. SVG elements are automatically created with the appropriate namespaces.

```js
const vnode = h('div', [
  h('svg', { width: 100, height: 100 }, [
    h('circle', { cx: 50, cy: 50, r: 40, stroke: 'green', 'stroke-width': 4, fill: 'yellow'})
  ])
]);
```

## Structuring applications

asm-dom is a low-level virtual DOM library. It is unopinionated with regards to how you should structure your application.

You can take a look to [this](https://github.com/snabbdom/snabbdom#structuring-applications) list in snabbdom repository, a js virtual DOM that inspire this library. Snabbdom has some different APIs but you can still take inspiration from it.
