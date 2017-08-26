# Table of Contents

- [Inline Example](#inline-example)
- [Installation](#installation)
- [Examples](#examples)
- [Documentation](#documentation)
	- [init](#init)
	- [h](#h)
	- [patch](#patch)
- [Notes](#notes)
	- [memory management](#memory-management)
	- [boolean attributes](#boolean-attributes)
	- [string encoding](#string-encoding)
- [Helpers](#helpers)
  - [svg](#svg)
- [Structuring applications](#structuring-applications)

## Inline Example

```c++
#include "asm-dom.hpp"

using namespace asmdom;

int main() {
  Config config = Config();
  init(config);

  VNode* vnode = h("div",
    Data(
      Callbacks {
        {"onclick", [](emscripten::val e) -> bool {
          emscripten::val::global("console").call<void>("log", emscripten::val("clicked"));
          return true;
        }}
      }
    ),
    Children {
      h("span",
        Data(
          Attrs {
            {"style", "font-weight: bold"}
          }
        ),
        std::string("This is bold")
      ),
      h(" and this is just normal text", true),
      h("a",
        Data(
          Attrs {
            {"href", "/foo"}
          }
        ),
        std::string("I'll take you places!")
      )
    }
  );

  // Patch into empty DOM element – this modifies the DOM as a side effect
  patch(
    emscripten::val::global("document").call<emscripten::val>(
    "getElementById",
    std::string("root"),
    vnode
  );

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

## Installation

In order to use asm-dom you have to prepare your js and C++ environment.

To do this, **before importing your compiled code from C++** (wasm or asmjs) you have to include our js file: 

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

You can now build your app using the source code in the [cpp](https://github.com/mbasso/asm-dom/tree/master/cpp) folder:

- `asm-dom.hpp`
- `asm-dom.cpp` or `asm-dom.a`

To compile your code you can now use [emscripten (emcc cli)](http://kripken.github.io/emscripten-site/), [here](http://webassembly.org/getting-started/developers-guide/) is the installation guide. Please make sure to use the `--bind` option during the compilation, otherwise asm-dom will not work. You can find an example that uses all the optiminazionts [here](https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpp/package.json).
You can also notice that we are using 2 extra files with emcc `--pre-js` (`prefix.js`) and `--post-js` (`postfix.js`). These files allow us to import the generated js as a module with the `import` syntax as shown [here](https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpp/src/index.js).

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

## Examples

Examples are available in the [examples folder](https://github.com/mbasso/asm-dom/tree/master/examples):

- [TODO MVC](https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpp)

## Documentation

All APIs are available in the namespace `asmdom`.

### init

The `init` function has to been called before using `asm-dom`, in the `main` function, to prepare its environment. It takes a `Config` struct defined as follows:

```c++
struct Config { 
  bool clearMemory = true;
  bool unsafePatch = false;
}
```

- `clearMemory`: `true` by default, set it to `false` if you want to free memory manually, for more information see [#memory management](##memory-management).
- `unsafePatch`: `false` by default, set it to `true` if you haven't a single `patch` in your application. This allows you to call patch with an `oldVnode` that hasn't been used previously.

```c++
Config config = Config();
config.unsafePatch = true;
init(config);
```

### h

You can create vnodes using `h` function. `h` accepts a tag/selector as a `std::string`, an optional `Data` struct and an optional `std::string` or a vector of children. Here is the list of signatures:

```c++
VNode* h(const std::string& sel);
VNode* h(const std::string& sel, const std::string& text);
VNode* h(const std::string& text, true); // used to create text nodes
VNode* h(const std::string& sel, const Data& data);
VNode* h(const std::string& sel, const Children& children);
VNode* h(const std::string& sel, VNode* child);
VNode* h(const std::string& sel, const Data& data, const std::string& text);
VNode* h(const std::string& sel, const Data& data, const Children& children);
VNode* h(const std::string& sel, const Data& data, VNode* child);
```

The data object contains optional attributes, optional props and optional callbacks. Also, attributes can contain 2 special keys:
- `ns`: the namespace URI to associate with the element
- `key`: this property is used to keep pointers to DOM nodes that existed previously to avoid recreating them if it is unnecessary. This is very useful for things like list reordering.

Here is an example, please use our `typedef` to do that:

```c++
// typedef std::function<bool(emscripten::val)> Callback;

// typedef std::unordered_map<std::string, std::string> Attrs;
// typedef std::unordered_map<std::string, emscripten::val> Props;
// typedef std::unordered_map<std::string, Callback> Callbacks;

// typedef std::vector<VNode*> Children;

VNode* vnode = h("div",
  Data(
    Attrs {{"style", "color: #000"}}
  ),
  Children {
    h("h1", string("Headline")),
    h("p", string("A paragraph")),
  }
);

VNode* vnode2 = h("div",
  Data(
    Attrs {
      {"id", "an-id"}, // node.setAttribute('id', 'an-id')
      {"key", "foo"},
      {"class", "foo"}, // node.setAttribute('class', 'foo')
      {"data-foo", "bar"} // a dataset attribute
    },
    Props {
      {"foo", emscripten::val(7)} // node.foo = 7
    },
    Children {
      {"onclick", [](emscripten::val e) -> bool {
        // do stuff...
        return true;
      }}
    }
  )
);
```

### patch

The `patch` takes two arguments, the first is a DOM element (you can get it using [emscripten::val::global](https://kripken.github.io/emscripten-site/docs/api_reference/val.h.html)) or a vnode representing the current view. The second is a vnode representing the new, updated view. If `patch` succedeed, the new vnode (the second parameter) is returned.

If a DOM element is passed, `newVnode` will be turned into a DOM node, and the passed element will be replaced by the created DOM node. If an `oldVnode` is passed, asm-dom will efficiently modify it to match the description in the new vnode.

**If `unsafePatch` in `init` is equal to false, any old vnode passed must be the resulting vnode from the previous call to patch. Otherwise, no operation is performed and NULL is returned.**

```c++
VNode* oldVnode = h(std::string("span"), "old node");
VNode* newVnode = h(std::string("span"), "new node");

patch(
	emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root")),
	oldVnode
);
patch(oldVnode, newVnode);

// with unsafePatch = false
VNode* vnode = h("div");
patch(oldVnode, vnode); // returns NULL, found oldVnode, expected newVnode
```

With `unsafePatch = true` you can implement some interesting mechanisms, for example you can do something like this:

```c++
VNode* oldText = h(std::string("span"), "old text");
VNode* vnode = h("div", VNodeChildren {
  h(std::string("span"), "this is a text"),
  oldText
});

patch(document.getElementById("root"),
	emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root")),
	vnode
);

VNode* newText = h(std::string("span"), "new text");
// patch only the child
patch(oldText, newText);
```

## Notes

### memory management

As we said before the `h` returns a pointer to a VNode, this means that the memory have to be deleted manually. By default asm-dom automatically delete the old vnode from memory when `patch` is called. However, if you want to create a vnode that is not patched, or if you want to manually manage this aspect (setting `clearMemory = false` in the `Config` object to pass to the `init` function), you have to delete it manually.

```c++
VNode* vnode1 = h("div");
VNode* vnode2 = h("div", VNodeChildren {
  h("span")
});
patch(vnode1, vnode2); // vnode1 automatically deleted

VNode* child1 = h(std::string("span"), "child 1");
VNode* child2 = h(std::string("span"), "child 2");
VNode* vnode = h("span", VNodeChildren {
  child1,
  child2,
});
delete vnode; // manually delete vnode, child1 and child2 from memory
```

### boolean attributes

If you want to set a boolean attribute, like `readonly`, you can just pass true or false as string, asm-dom will handle it for you:

```c++
VNode* vnode = h("input",
  Data(
    Attrs {
      {"type", "text"}
      {"readonly", "true"}
      // or {"readonly", "false"}
    },
  )
);
```

### string encoding

asm-dom renders attributes in UTF-8 (they are std::string) and props in UTF-16 (they are [emscripten::val](https://kripken.github.io/emscripten-site/docs/api_reference/val.h.html)).
If you want to take a string from javascript, from an input for example, you have to know that this string is encoded in UTF-16 and you can save it in a `std::wstring` variable, so, you have to pay attention to the encoding. In the [TODOMVC example](https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpp) you can see how we have dealed with that. We have created [2 helpers](https://github.com/mbasso/asm-dom/blob/cpp-api/examples/todomvc%20-%20cpp/src/helpers.cpp) that are used when we take values from events (event.target.value) and put values into props. Here is an example:

```c++
std::wstring utf8_to_wstring(const std::string& str) {
  std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
  return converter.from_bytes(str);
};

std::string wstring_to_utf8(const std::wstring& str) {
  std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
  return converter.to_bytes(str);
};

const int KEY_ENTER = 13;

int main() {
  // some code here...

  std::string val = getInputValue();

  VNode* vnode = h("input",
    Data(
      Attrs {
        // UTF-8 encoding, no stuff needed
        {"type", "text"}
        // UTF-8 encoding, u8 needed for accented characters
        {"class", u8"ehilà"}
      },
      Props {
        // setting a prop: UTF-8 to UTF-16
        {"value", emscripten::val(utf8_to_wstring(val))}
        {"anotherProp", emscripten::val(L"This is UTF-16")}
      },
      Callbacks {
        {"onkeydown", [handler](emscripten::val e) -> bool {
          // get value from event: UTF-16 to UTF-8
          std::string value = wstring_to_utf8(e["target"]["value"].as<std::wstring>());
          if (e["keyCode"].as<int>() == KEY_ENTER && !value.empty()) {
            // do stuff...
          }
          return true;
        }}
      }
    )
  );

  // some code here...
};
```

## Helpers

### svg

SVG just works when using the `h` function for creating virtual nodes. SVG elements are automatically created with the appropriate namespaces.

```c++
VNode* vnode = h("div", Children {
  h("svg",
    Data(
      Attrs {
        {"width", "100"},
        {"height", "100"}
      }
    ),
    Children {
      h("circle",
        Data(
          Attrs {
            {
              {"cx", "50"},
              {"cy", "50"},
              {"r", "40"},
              {"stroke", "green"},
              {"stroke-width"", "4"},
              {"fill", "yellow"}
            }
          }
        )
      )
    }
  )
});
```

## Structuring applications

asm-dom is a low-level virtual DOM library. It is unopinionated with regards to how you should structure your application.

You can take a look to [this](https://github.com/snabbdom/snabbdom#structuring-applications) list in snabbdom repository, a js virtual DOM that inspire this library. Snabbdom has javascript APIs but you can still take inspiration from it and translate structures in C++.
