---
id: elements
title: Elements
---

To create a VNode, you can simply write a tag as you do in XML:

```js
<img src="hello.png" />
```

If you want to dynamically choose a tag of an element, you can use `->` and `.` operators on your vars:

```
<foo.bar->baz src="hello.png" />
```