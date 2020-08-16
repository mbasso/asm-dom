# Table of Contents

- [Inline Example](#inline-example)
- [Installation](#installation)
- [Examples](#examples)
- [Documentation](#documentation)
	- [init](#init)
	- [h](#h)
	- [patch](#patch)
	- [toVNode](#tovnode)
	- [toHTML](#tohtml)
  - [deleteVNode](#deletevnode)
- [Notes](#notes)
	- [memory management](#memory-management)
	- [boolean attributes](#boolean-attributes)
	- [string encoding](#string-encoding)
  - [ref](#ref)
  - [fragments](#fragments)
- [Helpers](#helpers)
  - [svg](#svg)
- [Server side rendering](#server-side-rendering)
- [WebComponents](#webcomponents)
  - [Using WebComponents in asm-dom](#using-webcomponents-in-asm-dom)
  - [Using asm-dom in WebComponents](#using-asm-dom-in-webcomponents)
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
      std::string("root")
    ),
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

If you want to start using asm-dom without configuration you can consider [asm-dom-boilerplate](https://github.com/mbasso/asm-dom-boilerplate), a very simple project that includes all you need, just clone and run it!

Otherwise, here is the guide for the manual installation.

If you are using webpack, in order to use asm-dom, you have to prepare your environment:

- Install `arraybuffer-loader`:

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

- if you are using webpack, you can see our [example]((https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpp/src/index.js)).

- If you want to use wasm without webpack, you can see [this](https://gist.github.com/kripken/59c67556dc03bb6d57052fedef1e61ab) gist.

If you are using [babel](https://babeljs.io/), please make sure to ignore the compiled files:

```js
{
  test: /\.js$/,
  loaders: ['babel-loader'],
  exclude: [
    /node_modules/,
    /compiled/, // folder that contains the compiled code (wasm and asmjs)
    /\.asm\.js$/ // ignore all .asm.js files
  ],
}
```

You can find a complete example to study in the example folder, [here](https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpp) it is.

If you want to use a [JSX](https://facebook.github.io/jsx/) like syntax in C++ you can also consider using [gccx](https://github.com/mbasso/gccx) before `emcc`, [here](https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpx) you can find the same example with an additional build step.

## Examples

Examples are available in the [examples folder](https://github.com/mbasso/asm-dom/tree/master/examples).

Also, here is the list of third-party examples:

- [asm-dom-OO-counters](https://github.com/kevinaud/asm-dom-OO-counters)

and online Demos:

- [TODO MVC](https://mbasso.github.io/asm-dom/examples/todomvc/)

## Documentation

All APIs are available in the namespace `asmdom`. They can be used including using `asm-dom.hpp`, except `toHTML` that is defined in `asm-dom-server.hpp`.

### init

The `init` function has to been called before using `asm-dom`, in the `main` function, to prepare its environment. It takes a `Config` struct defined as follows:

```c++
struct Config { 
  bool clearMemory = true;
  bool unsafePatch = false;
}
```

- `clearMemory`: `true` by default, set it to `false` if you want to free memory manually, for more information see [memory management](#memory-management).
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

And callbacks can contain a special key:
- `ref`: a callback that provides a way to access DOM nodes, you can learn more about that [here](#ref)

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
    Callbacks {
      // function pointer
      {"ondblclick", onDblClick},
      // lambda
      {"onclick", [](emscripten::val e) -> bool {
        // do stuff...
        return true;
      }},
      // ref
      {"ref", divRef}
    }
  )
);
```

### patch

The `patch` takes two arguments, the first is a DOM element (you can get it using [emscripten::val::global](https://kripken.github.io/emscripten-site/docs/api_reference/val.h.html)) or a vnode representing the current view. The second is a vnode representing the new, updated view. If `patch` succedeed, the new vnode (the second parameter) is returned.

If a DOM element is passed, `newVnode` will be turned into a DOM node, and the passed element will be replaced by the created DOM node. If an `oldVnode` is passed, asm-dom will efficiently modify it to match the description in the new vnode.

**If `unsafePatch` in `init` is equal to false, any old vnode passed must be the resulting vnode from the previous call to patch. Otherwise, no operation is performed and NULL is returned.**

```c++
VNode* oldVnode = h("span", std::string("old node"));
VNode* newVnode = h("span", std::string("new node"));

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
VNode* oldText = h("span", std::string("old text"));
VNode* vnode = h("div", Children {
  h("span", std::string("this is a text")),
  oldText
});

patch(
	emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root")),
	vnode
);

VNode* newText = h(std::string("span"), "new text");
// patch only the child
patch(oldText, newText);
```

## toVNode

Converts a DOM node into a virtual node. This is especially good for patching over an pre-existing, server-side generated content.

```c++
// supposing that 'root' is a server-side generated div
VNode* vnode = toVNode(
  emscripten::val::global("document").call<emscripten::val>(
    "getElementById",
    emscripten::val("root")
  )
);

VNode* newVnode = h("div",
  Data(
    Attrs {
      {"id", "root"}
      {"style", "color: #000"}
    }
  ),
  Children {
    h("h1", string("Headline")),
    h("p", string("A paragraph")),
  }
);

patch(vnode, newVnode);
```

## toHTML

Renders a vnode to HTML string. This is particularly useful if you want to generate HTML on the server.

```c++
VNode* vnode = h("div",
  Data(
    Attrs {
      {"id", "root"}
      {"style", "color: #000"}
    }
  ),
  Children {
    h("h1", string("Headline")),
    h("p", string("A paragraph")),
  }
);

std::string html = toHTML(vnode);
// html = <div id="root" style="color: #000"><h1>Headline</h1><p>A paragraph</p></div>;
```

## deleteVNode

Deletes a vnode and all its children from memory. This is useful if you want to delete an entire tree. If you want to delete a vnode but not its children you can simply use the C++ keyword `delete`.

```c++
VNode* child1 = h("h1", string("Headline"));
VNode* child2 = h("p", string("A paragraph"));
VNode* vnode = h("div",
  Data(
    Attrs {
      {"id", "root"}
      {"style", "color: #000"}
    }
  ),
  Children {
    child1,
    child2,
  }
);

// delete vnode, child1 and child2 from memory
deleteVNode(vnode);

// delete vnode but not child1 and child2 from memory
// delete vnode;
```

## Notes

### memory management

As we said before the `h` returns a pointer to a VNode, this means that the memory have to be deleted manually. By default asm-dom automatically delete the old vnode from memory when `patch` (or `toHTML`) is called. However, if you want to create a vnode that is not patched, or if you want to manually manage this aspect (setting `clearMemory = false` in the `Config` object to pass to the `init` function), you have to delete it manually.

```c++
VNode* vnode1 = h("div");
VNode* vnode2 = h("div", Children {
  h("span")
});
patch(vnode1, vnode2); // vnode1 automatically deleted

VNode* child1 = h(std::string("span"), "child 1");
VNode* child2 = h(std::string("span"), "child 2");
VNode* vnode = h("span", Children {
  child1,
  child2,
});
deleteVNode(vnode); // manually delete vnode, child1 and child2 from memory
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

### Ref

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

### Fragments

If you want to group a list of children without adding extra nodes to the DOM or you want to use [DocumentFragments](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) to improve the performance of your app, you can do that creating a `VNode` with an empty selector:

```js
// without fragments if you want to return 3 div
// you have to add a parent node that is inserted into the DOM tree
/* asmdom::VNode* vnode = (
    h("div",
        Children {
            h("div", std::string("Child 1")),
            h("div", std::string("Child 2")),
            h("div", std::string("Child 3"))
        }
    )
); */

// with fragments you can just add them without additional nodes
asmdom::VNode* vnode = (
    h("",
        Children {
            h("div", std::string("Child 1")),
            h("div", std::string("Child 2")),
            h("div", std::string("Child 3"))
        }
    )
);
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
              {"stroke-width", "4"},
              {"fill", "yellow"}
            }
          }
        )
      )
    }
  )
});
```

## Server side rendering

If you are interested in server side rendering, you can do that with asm-dom in 2 simple steps:

- You can use `toHTML` to generate HTML on the server and send it to the client for faster page loads and to allow search engines to crawl your pages for SEO purposes.
- After that you can call `toVNode` on the node that you have server-rendered and patch it with a vnode created on the client. In this way asm-dom will preserve it and only attach event handlers, providing a fantastic first-load experience.

Here is an example:

```c++
// a function that returns the view, used on client and server
VNode* view() {
  return (
    h("div",
      Data(
        Attrs {
          {"id", "root"}
        }
      ),
      Children {
        h("h1", std::string("Title")),
        h("button",
          Data(
            Attrs {
              {"class", "btn"}
            },
            Callbacks {
              {"onclick", onButtonClick}
            }
          ),
          "Click Me!"
        )
      }
    )
  );
}

// on the server
VNode* vnode = view();
std::string appString = toHTML(vnode);
std::string html = (
  "<!DOCTYPE html>"
  "<html>"
    "<head>"
      "<title>My Awesome App</title>"
      "<link rel=\"stylesheet\" href=\"/index.css\" />"
    "</head>"
    
    "<body>"
      + appString +
    "</body>"
    
    "<script src=\"/bundle.js\"></script>"
  "</html>"
);

// on the client
VNode* oldVNode = toVNode(
  emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root"))
);
VNode* vnode = view();
patch(oldVNode, vnode); // attach event handlers
```

## WebComponents

Virtual DOM and WebComponents represent different technologies. Virtual DOM provides a declarative way to write the UI and keep it sync with the data, while WebComponents provide an encapsulation for reusable components. There are no limitation to use them together, you can use asm-dom with WebComponents or use asm-dom inside WebComponents.

### Using WebComponents in asm-dom

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

### Using asm-dom in WebComponents

At the moment creating WebComponents from C++ is not so easy, you problably need to mix some C++ and Javascript code, maybe with [`emscripten_run_script`](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-javascript-from-c-c), [`EM_ASM`](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-javascript-from-c-c) or [`Embind`](http://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/embind.html).
Please, to make asm-dom work, make sure to enable the usage of [`patch`](#patch) in multiple points of your app with `unsafePatch = true` in the [`init`](#init) function.

## Structuring applications

asm-dom is a low-level virtual DOM library. It is unopinionated with regards to how you should structure your application.

You can take a look to [this](https://github.com/snabbdom/snabbdom#structuring-applications) list in snabbdom repository, a js virtual DOM that inspire this library. Snabbdom has javascript APIs but you can still take inspiration from it and translate structures in C++.
