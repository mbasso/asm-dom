---
id: h
title: h
---

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