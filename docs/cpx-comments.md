---
id: comments
title: Comments
---

Comments can be written just like in JSX as follows:

```js
<div>
  { /* I'm a comment */}
  Hello World!
</div>
```

In this way the comment is deleted at compile time and not rendered.

If you want to render a comment into the DOM, you can do something like:

```
<div>
  <!-- I'll be rendered! -->
  Hello World!
</div>
```