---
id: installation
title: Installation
---

In order to use asm-dom you have to prepare your js and C++ environment.

To do this, as first thing, **before importing your compiled code from C++** (wasm or asmjs) you have to include our js file: 

- if you are not using [npm](https://www.npmjs.com/package/asm-dom) you can import [our js file](https://github.com/mbasso/asm-dom/blob/master/dist/cpp/asm-dom.js) from [unpkg](https://unpkg.com/asm-dom/dist/cpp/asm-dom.js)

- if you are using [npm](https://www.npmjs.com/package/asm-dom) you can install asm-dom:

  ```bash
  npm install --save asm-dom
  ```

  and import our js file in this way:

  ```js
  import 'asm-dom/cpp/';
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

After that, you can build your app using the source code in the [cpp](https://github.com/mbasso/asm-dom/tree/master/cpp) folder:

- `asm-dom.hpp` and `asm-dom-server.hpp`
- `asm-dom.cpp` and `asm-dom-server.cpp` (or `asm-dom.a` that includes both)

and compile it using [emscripten (emcc cli)](http://kripken.github.io/emscripten-site/), [here](http://webassembly.org/getting-started/developers-guide/) is the installation guide. A few tips about this step:

- please make sure to use the `--bind` option during the compilation, otherwise asm-dom will not work.

- emcc has a lot of settings that can optimize the build, we suggest you to see [this](https://kripken.github.io/emscripten-site/docs/optimizing/Optimizing-Code.html) page and [our configuration]((https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpp/package.json)) in the TODOMVC example.

- we suggest you to compile your app to `.bc` and then use it to produce a WebAssembly version and an asm.js version that you can use as fallback

After the compilation you can import your app:

- if you are using webpack, you can see our [example]((https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpp/src/index.js)). In order to import it as a module we have used 2 extra files with emcc `--pre-js` (`prefix.js`) and `--post-js` (`postfix.js`).

- If you want to use wasm without webpack, you can see [this](https://gist.github.com/kripken/59c67556dc03bb6d57052fedef1e61ab) gist.

If you are using [babel](https://babeljs.io/), please make sure to ignore the compiled files, the prefix and suffix:

```js
{
  test: /\.js$/,
  loaders: ['babel-loader'],
  exclude: [
    /node_modules/,
    /compiled/, // folder that contains the compiled code (wasm and asmjs)
    /\.asm\.js$/, // ignore all .asm.js files
    /prefix\.js$/, // ignore --pre-js
    /postfix\.js$/ // ignore --post-js
  ],
}
```

You can find a complete example to study in the example folder, [here](https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpp) it is.

If you want to use a [JSX](https://facebook.github.io/jsx/) like syntax in C++ you can also consider using [gccx](https://github.com/mbasso/gccx) before `emcc`, [here](https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpx) you can find the same example with an additional build step.
