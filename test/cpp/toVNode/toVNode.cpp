#include "../../../src/cpp/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>

using namespace asmdom;

void shouldConvertANodeToVNode() {
	emscripten::val node = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
	
	VNode* vnode = toVNode(node);
	patch(getRoot(), vnode);

	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm["tagName"],
		emscripten::val("DIV")
	);

  deleteVNode(vnode);
};

void shouldConvertTextNodeToVNode() {
	emscripten::val node = emscripten::val::global("document").call<emscripten::val>("createTextNode", emscripten::val("Hello world!"));
	
	VNode* vnode = toVNode(node);
	patch(getRoot(), vnode);

	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm["nodeName"],
		emscripten::val("#text")
	);
	assertEquals(
		elm["textContent"],
		emscripten::val("Hello world!")
	);

  deleteVNode(vnode);
};

void shouldConvertCommentNodeToVNode() {
	emscripten::val node = emscripten::val::global("document").call<emscripten::val>("createComment", emscripten::val("Hello world!"));
	
	VNode* vnode = toVNode(node);
	patch(getRoot(), vnode);

	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm["nodeName"],
		emscripten::val("#comment")
	);
	assertEquals(
		elm["textContent"],
		emscripten::val("Hello world!")
	);

  deleteVNode(vnode);

};

void shouldConvertANodeWithAttributesToVNode() {
	emscripten::val node = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
	node.call<void>("setAttribute", emscripten::val("src"), emscripten::val("http://localhost/"));
	node.call<void>("setAttribute", emscripten::val("data-foo"), emscripten::val("bar"));
	node.call<void>("setAttribute", emscripten::val("data-bar"), emscripten::val("foo"));
	
	VNode* vnode = toVNode(node);
	patch(getRoot(), vnode);

	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm["tagName"],
		emscripten::val("DIV")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("src")),
		emscripten::val("http://localhost/")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-foo")),
		emscripten::val("bar")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-bar")),
		emscripten::val("foo")
	);

  deleteVNode(vnode);
};

void shouldConvertANodeWithChildrenToVNode() {
	emscripten::val parent = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
	emscripten::val h1 = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("h1"));
	h1.call<void>("appendChild", emscripten::val::global("document").call<emscripten::val>("createTextNode", emscripten::val("Hello World!")));
	emscripten::val p = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("p"));
	p.call<void>("appendChild", emscripten::val::global("document").call<emscripten::val>("createTextNode", emscripten::val("foo")));
	p.call<void>("appendChild", emscripten::val::global("document").call<emscripten::val>("createComment", emscripten::val("bar")));
	emscripten::val child = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
	parent.call<void>("appendChild", h1);
	parent.call<void>("appendChild", p);
	parent.call<void>("appendChild", child);

	VNode* vnode = toVNode(parent);
	patch(getRoot(), vnode);

	emscripten::val elm = getBodyFirstChild();

	assertEquals(elm["tagName"], emscripten::val("DIV"));
	assertEquals(elm["childNodes"]["length"], emscripten::val(3));
	assertEquals(elm["childNodes"]["0"]["tagName"], emscripten::val("H1"));
	assertEquals(elm["childNodes"]["0"]["childNodes"]["length"], emscripten::val(1));
	assertEquals(elm["childNodes"]["0"]["childNodes"]["0"]["nodeName"], emscripten::val("#text"));
	assertEquals(elm["childNodes"]["0"]["childNodes"]["0"]["textContent"], emscripten::val("Hello World!"));
	assertEquals(elm["childNodes"]["1"]["tagName"], emscripten::val("P"));
	assertEquals(elm["childNodes"]["1"]["childNodes"]["length"], emscripten::val(2));
	assertEquals(elm["childNodes"]["1"]["childNodes"]["0"]["nodeName"], emscripten::val("#text"));
	assertEquals(elm["childNodes"]["1"]["childNodes"]["0"]["textContent"], emscripten::val("foo"));
	assertEquals(elm["childNodes"]["1"]["childNodes"]["1"]["nodeName"], emscripten::val("#comment"));
	assertEquals(elm["childNodes"]["1"]["childNodes"]["1"]["textContent"], emscripten::val("bar"));
	assertEquals(elm["childNodes"]["2"]["tagName"], emscripten::val("DIV"));

  deleteVNode(vnode);
};

void shouldConvertANodeWithAttributesAndChildrenToVNode() {
	emscripten::val parent = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
	parent.call<void>("setAttribute", emscripten::val("data-foo"), emscripten::val("foo"));
	emscripten::val img = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("img"));
	img.call<void>("setAttribute", emscripten::val("src"), emscripten::val("http://localhost/"));
	emscripten::val div = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
	parent.call<void>("appendChild", img);
	parent.call<void>("appendChild", div);

	VNode* vnode = toVNode(parent);
	patch(getRoot(), vnode);

	emscripten::val elm = getBodyFirstChild();

	assertEquals(elm["tagName"], emscripten::val("DIV"));
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-foo")),
		emscripten::val("foo")
	);
	assertEquals(elm["childNodes"]["length"], emscripten::val(2));
	assertEquals(elm["childNodes"]["0"]["tagName"], emscripten::val("IMG"));
	assertEquals(
		elm["childNodes"]["0"].call<emscripten::val>("getAttribute", emscripten::val("src")),
		emscripten::val("http://localhost/")
	);
	assertEquals(elm["childNodes"]["1"]["tagName"], emscripten::val("DIV"));

  deleteVNode(vnode);
};

void shouldRemovePreviousChildrenOfTheRootElement() {
	emscripten::val h2 = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("h2"));
	h2.set("textContent", emscripten::val("Hello"));
	emscripten::val prevElm = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
	prevElm.set("id", emscripten::val("id"));
	prevElm.set("className", emscripten::val("class"));
	prevElm.call<void>("appendChild", h2);

	VNode* nextVNode = h("div",
		Data(
			Attrs {
				{"id", "id"},
				{"class", "class"}
			}
		),
		Children {
			h("span", std::string("Hi"))
		}
	);

	patch(toVNode(prevElm), nextVNode);

	emscripten::val elm = getNode(nextVNode);

	assertEquals(elm, prevElm);
	assertEquals(elm["tagName"], emscripten::val("DIV"));
	assertEquals(elm["id"], emscripten::val("id"));
	assertEquals(elm["className"], emscripten::val("class"));
	assertEquals(elm["childNodes"]["length"], emscripten::val(1));
	assertEquals(elm["childNodes"]["0"]["tagName"], emscripten::val("SPAN"));
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Hi"));

	deleteVNode(nextVNode);
};

void shouldSupportPatchingInADocumentFragment() {
	emscripten::val prevElm = emscripten::val::global("document").call<emscripten::val>("createDocumentFragment");

	VNode* nextVNode = h("",
		Children {
			h("div",
				Data(
					Attrs {
						{"id", "id"},
						{"class", "class"}
					}
				),
				Children {
					h("span", std::string("Hi"))
				}
			)
		}
	);

	patch(toVNode(prevElm), nextVNode);

	emscripten::val elm = getNode(nextVNode);

	assertEquals(elm, prevElm);
	assertEquals(elm["nodeType"], emscripten::val(11));
	assertEquals(elm["childNodes"]["length"], emscripten::val(1));
	assertEquals(elm["childNodes"]["0"]["tagName"], emscripten::val("DIV"));
	assertEquals(elm["childNodes"]["0"]["id"], emscripten::val("id"));
	assertEquals(elm["childNodes"]["0"]["className"], emscripten::val("class"));
	assertEquals(elm["childNodes"]["0"]["childNodes"]["length"], emscripten::val(1));
	assertEquals(elm["childNodes"]["0"]["childNodes"]["0"]["tagName"], emscripten::val("SPAN"));
	assertEquals(elm["childNodes"]["0"]["childNodes"]["0"]["textContent"], emscripten::val("Hi"));

	deleteVNode(nextVNode);
};

void shouldRemoveSomeChildrenOfTheRootElement() {
	emscripten::val h2 = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("h2"));
	h2.set("textContent", emscripten::val("Hello"));
	emscripten::val prevElm = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
	prevElm.set("id", emscripten::val("id"));
	prevElm.set("className", emscripten::val("class"));
	emscripten::val text = emscripten::val::global("document").call<emscripten::val>("createTextNode", emscripten::val("Foobar"));
	text.set("testProperty", emscripten::val(123));
	prevElm.call<void>("appendChild", text);
	prevElm.call<void>("appendChild", h2);

	VNode* nextVNode = h("div",
		Data(
			Attrs {
				{"id", "id"},
				{"class", "class"}
			}
		),
		Children {
			h("Foobar", true)
		}
	);

	patch(toVNode(prevElm), nextVNode);

	emscripten::val elm = getNode(nextVNode);

	assertEquals(elm, prevElm);
	assertEquals(elm["tagName"], emscripten::val("DIV"));
	assertEquals(elm["id"], emscripten::val("id"));
	assertEquals(elm["className"], emscripten::val("class"));
	assertEquals(elm["childNodes"]["length"], emscripten::val(1));
	assertEquals(elm["childNodes"]["0"]["nodeType"], emscripten::val(3));
	assertEquals(elm["childNodes"]["0"]["wholeText"], emscripten::val("Foobar"));
	assertEquals(elm["childNodes"]["0"]["testProperty"], emscripten::val(123));

	deleteVNode(nextVNode);
};

void shouldRemoveTextElements() {
	emscripten::val h2 = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("h2"));
	h2.set("textContent", emscripten::val("Hello"));
	emscripten::val prevElm = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
	prevElm.set("id", emscripten::val("id"));
	prevElm.set("className", emscripten::val("class"));
	emscripten::val text = emscripten::val::global("document").call<emscripten::val>("createTextNode", emscripten::val("Foobar"));
	prevElm.call<void>("appendChild", text);
	prevElm.call<void>("appendChild", h2);

	VNode* nextVNode = h("div",
		Data(
			Attrs {
				{"id", "id"},
				{"class", "class"}
			}
		),
		Children {
			h("h2", std::string("Hello"))
		}
	);

	patch(toVNode(prevElm), nextVNode);

	emscripten::val elm = getNode(nextVNode);

	assertEquals(elm, prevElm);
	assertEquals(elm["tagName"], emscripten::val("DIV"));
	assertEquals(elm["id"], emscripten::val("id"));
	assertEquals(elm["className"], emscripten::val("class"));
	assertEquals(elm["childNodes"]["length"], emscripten::val(1));
	assertEquals(elm["childNodes"]["0"]["nodeType"], emscripten::val(1));
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Hello"));

	deleteVNode(nextVNode);
};

EMSCRIPTEN_BINDINGS(toVNode_tests) {
	emscripten::function("shouldConvertANodeToVNode", &shouldConvertANodeToVNode);
	emscripten::function("shouldConvertTextNodeToVNode", &shouldConvertTextNodeToVNode);
	emscripten::function("shouldConvertCommentNodeToVNode", &shouldConvertCommentNodeToVNode);
	emscripten::function("shouldConvertANodeWithAttributesToVNode", &shouldConvertANodeWithAttributesToVNode);
	emscripten::function("shouldConvertANodeWithChildrenToVNode", &shouldConvertANodeWithChildrenToVNode);
	emscripten::function("shouldConvertANodeWithAttributesAndChildrenToVNode", &shouldConvertANodeWithAttributesAndChildrenToVNode);
	emscripten::function("shouldRemovePreviousChildrenOfTheRootElement", &shouldRemovePreviousChildrenOfTheRootElement);
	emscripten::function("shouldSupportPatchingInADocumentFragment", &shouldSupportPatchingInADocumentFragment);
	emscripten::function("shouldRemoveSomeChildrenOfTheRootElement", &shouldRemoveSomeChildrenOfTheRootElement);
	emscripten::function("shouldRemoveTextElements", &shouldRemoveTextElements);
};