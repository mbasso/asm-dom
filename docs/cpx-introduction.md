---
id: introduction
title: Introduction
---

[asm-dom](https://github.com/mbasso/asm-dom) Virtual DOM is a little bit verbose to write, we need a lot, not to much readable, lines of code to create a view. In addition we have to convert some types, merge attributes, props and do other stuff like that every time. For this reason we have decided to create [gccx](https://github.com/mbasso/gccx), a parser that allows us to write a new simple syntax. We will call this syntax `CPX`, it is based on [JSX](https://facebook.github.io/jsx/) but it has some differences. Basically [gccx](https://github.com/mbasso/gccx) will transform this syntax into standard C++. In this way we can write files that appear very similar to HTML and can be written and read easily.

As we said, [gccx](https://github.com/mbasso/gccx) compiles `CPX` into standard C++. This means that [gccx](https://github.com/mbasso/gccx) will compile everything that respects `CPX` syntax, it will not check the validity of your program, it will not warn you about undefined variables, wrong types and so on. You will catch these errors only when you decide to compile your C++ code using [emcc](http://kripken.github.io/emscripten-site/).
Using [gccx](https://github.com/mbasso/gccx) you can compile files that embed some `CPX` code, but also file that contains only `CPX` code, for example you can parse this:

```js
#include "../path-to-asm-dom/asm-dom.hpp"
#include <string>
#include <emscripten/val.h>

int main() {
  asmdom::VNode* image = <img src="hello.png" />;
}
```

or only this:

```js
<img src="hello.png" />
```

Please read carefully this document to understand the syntactic differences from `JSX`. These differences are necessary because C++ is a weakly typed language while Javascript is a dynamically typed language.

### CPX represents objects

`CPX` code compiles into calls to `asmdom::h`, this means that a `CPX` expression always returns an `asmdom::VNode*`, for this reason, you can do:

```js
asmdom::VNode* image = <img src="hello.png" />;

// is equal to
/*
asmdom::VNode* image = asmdom::h(u8"img",
  asmdom::Data (
    asmdom::Attrs {
      {u8"src", u8"hello.png"}
    }
  )
);
*/
```

### Scope

Since `CPX` compiles into calls to `asmdom::h`, the `asm-dom.hpp` must always be on top of the interested file. Consider also that `asmdom` uses `std::string` and `emscripten::val`, defined in `<string>` and `<emscripten/val.h>`.

```c++
#include "../path-to-asm-dom/asm-dom.hpp"
#include <string>
#include <emscripten/val.h>

// code...
```