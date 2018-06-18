---
id: fragments
title: Fragments
---

[DocumentFragments](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) can be written using a special selector `Fragment`:

```js
<Fragment>
	<div>Div content</div>
  Hello World!
</Fragment>
```

In this way you can group a list of children without adding extra nodes to the DOM.

```js

// this cannot be done
/* asmdom::VNode* vnode = (
	<div>Child 1</div>
	<div>Child 2</div>
	<div>Child 3</div>
); */

// this is a valid alternative to the code above
asmdom::VNode* vnode = (
	<Fragment>
		<div>Child 1</div>
		<div>Child 2</div>
		<div>Child 3</div>
	</Fragment>
);
```
