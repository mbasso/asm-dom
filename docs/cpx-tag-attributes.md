---
id: tag-attributes
title: Tag Attributes
---

Attributes (attributes, props, and callbacks) can be set as string literals with double quotes just like in XML:

```js
<img src="hello.png" />
```

or you can assign an expression inside curly brackets:

```js
// std::string filename = "hello";
// std::string extension = "png";

<img src={filename + "." + extension} />
```

Differently from JSX, you can set any attribute just like in html, you don't have to use for example `className` or camel case identifiers:

```js
// in JSX:
<div className="css-class" tabIndex="0" />

// in CPX:
<div class="css-class" tabindex="0" />
```

## Attributes

Attributes corresponds to [`asmdom::Attrs`](https://github.com/mbasso/asm-dom/blob/master/docs/cpp.md#h), they are `std::string` and are set using `domNode.setAttribute(attr, val)`. Here is the syntax:

```
<image
  attribute="this is an attribute"
  class="css-class"
  data-id="foo" // dataset attribute
  xlink:href="link" // namespaced attribute
/>
```

However there are some special identifiers that are automatically interpreted as props like `value` or `checked`. This is particularly convenient to avoid a code like `<input [value]={variable} />` every time.
In addition, `ref` and every attribute that starts with `on` is automatically interpreted as callbacks and rendered lowercase, for example:

```
<button onClick={callback} />
<button ref={callback} />

// is equal to

<button (onclick)={callback}>
<button (ref)={callback}>
```

If you want to declare an attribute that stars with `on`, `ref`, `value` or `checked`, so, you want to ignore these rules, you can surround it with curly brackets:

```
<button onClick={callback} /> // this is an "onclick" callback
<button {onClick}="callback" /> // this is an "onClick" attribute
```

## Props

Props corresponds to [`asmdom::Props`](https://github.com/mbasso/asm-dom/blob/master/docs/cpp.md#h), they are [`emscripten::val`](https://kripken.github.io/emscripten-site/docs/api_reference/val.h.html) and are set using the dot notation `node.prop = val`. You can specify that an attribute is a prop surrounding it with square brackets:

```
<div
  attribute="this is a attribute"
  [prop]="this is a prop"
/>
```

Using gccx you don't have to care about the type, values are automatically passed to `emscripten::val` constructor, so, you can do something like this:

```
// you can provide any type:
// int foo = 7;

// or emscripten::val
// emscripten::val bar = emscripten::val::undefined();

<div
  [foo]={foo}
  [bar]={bar}
/>
```

## Callbacks

Callbacks corresponds to [`asmdom::Callbacks`](https://github.com/mbasso/asm-dom/blob/master/docs/cpp.md#h) and they are `std::function<bool(emscripten::val)>`. You can specify that an attribute is a callback surrounding it with parens:

```
<button (onclick)={handler} />
```

You can provide to callbacks a `std::function<bool(emscripten::val)>`, a pointer to a function or a lambda:

```
/*
bool onChange(emscripten::val event) {
	// do stuff...
	return true;
};
*/

<input
  (onchange)={onChange}
  (onkeydown)={[&](emscripten::val e) -> bool {
    // do stuff...
    return false;
  }}
/>
```

## Default to true

If you pass no value for an attribute or a prop, it defaults to true:

```
<input [booleanVal] readonly>
// is equal to
<input [booleanVal]={true} readonly="true">

// falsy values can be used as follows:
<input [booleanVal]={false} readonly="false">
```

## Spread attributes

If you already have an `asmdom::Data` object, and you want to pass it in `CPX`, you can use `...` as a `spread` operator to pass the whole object:

```js
/*
asmdom::Data data(
  Attrs {
    {"class", "css-class"},
    {"style", "font-weight: bold"}
  }
)
*/

<div attribute="foo" {...data} />
// is equal to
<div attribute="foo" class="css-class" style="font-weight: bold" />

// you can overwrite values in spread putting them after it
<div attribute="foo" {...data} class="another-css-class"/>
// <div attribute="foo" style="font-weight: bold" class="another-css-class" />
```