---
id: children
title: Children
---

If a tag is empty, you can close it with `/>`, like XML:

```js
<div />
```

otherwise, it can contains children:

```js
<div>
  <h1>Hello World!</h1>
  <img src="hello.png" />
  This is a text
</div>
```

## Expressions as children

You can also embed expressions in children, these expressions can produce `std::string`, `asmdom::VNode` or `asmdom::Children`.

### Strings

`std::string` can be embed using double curly brackets:

```js
// std::string name = "foo";

<div>
  <h1>Hello {{ name }}!</h1>
</div>
```

### VNode

`asmdom::VNode` can be embed using single curly brackets:

```js
/*
asmdom::VNode getImg(std::string src) {
  return <img src={src} />;
};
*/

<div>
  <h1>Hello World!</h1>
  { getImg("hello.png") }
</div>
```

### Children

`asmdom::Children` can be embed using `{...expression}`:

```js
/*
asmdom::Children getVNodes(std::string src) {
  return asmdom::Children {
    <img src={src} />,
    <div>Rendering {{ src }}</div>
  };
};
*/

<div>
  <h1>Hello World!</h1>
  {...getVNodes("hello.png")}
</div>
```

## NULL children

If you want to conditionally render something, `CPX` accepts `NULL` values:

```js
// std::string name = "foo";
<div>
  <h1>Hello World!</h1>
  { name === "foo" ? <h2>Hi Foo!</h2> : NULL }
</div>
```