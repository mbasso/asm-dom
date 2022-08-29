#include "../../../src/cpp/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/val.h>
#include <emscripten/bind.h>
#include <string>

using namespace asmdom;
using namespace asmdom::direct;

void shouldDirectlyCreateUniqueElements() {
	const int elm1 = createElement("span");
	const int elm2 = createElement("span");
	const int elm3 = createElementNS("div", "http://www.w3.org/2000/svg");
	const int elm4 = createElementNS("div", "http://www.w3.org/2000/svg");
	const int elm5 = createTextNode("text");
	const int elm6 = createTextNode("text");
	const int elm7 = createComment("comment");
	const int elm8 = createComment("comment");
	const int elm9 = createDocumentFragment();
	const int elm10 = createDocumentFragment();

	assert(elm1 != elm2);
	assert(elm2 != elm3);
	assert(elm3 != elm4);
	assert(elm4 != elm5);
	assert(elm5 != elm6);
	assert(elm6 != elm7);
	assert(elm7 != elm8);
	assert(elm8 != elm9);
	assert(elm9 != elm10);

	deleteElement(elm1);
	deleteElement(elm2);
	deleteElement(elm3);
	deleteElement(elm4);
	deleteElement(elm5);
	deleteElement(elm6);
	deleteElement(elm7);
	deleteElement(elm8);
	deleteElement(elm9);
	deleteElement(elm10);
};

void shouldDirectlyCreateElements() {
	const int elm = createElement("span");
	const emscripten::val element = getElement(elm);
	assertEquals(element["tagName"], emscripten::val("SPAN"));

	deleteElement(elm);
};

void shouldDirectlyCreateElementsWithNamespace() {
	const char* namespaceURI = "http://www.w3.org/2000/svg";

	const int elm = createElementNS("div", namespaceURI);
	const emscripten::val element = getElement(elm);
	assertEquals(element["tagName"], emscripten::val("div"));
	assertEquals(element["namespaceURI"], emscripten::val(namespaceURI));

	deleteElement(elm);
};

void shouldDirectlyCreateTextNodes() {
	const char* text = "text node";

	const int elm = createTextNode(text);
	const emscripten::val element = getElement(elm);
	assertEquals(element["nodeName"], emscripten::val("#text"));
	assertEquals(element["textContent"], emscripten::val(text));

	deleteElement(elm);
};

void shouldDirectlyCreateComments() {
	const char* comment = "comment node";

	const int elm = createComment(comment);
	const emscripten::val element = getElement(elm);
	assertEquals(element["nodeName"], emscripten::val("#comment"));
	assertEquals(element["textContent"], emscripten::val(comment));

	deleteElement(elm);
};

void shouldDirectlyCreateFragments() {
	const int elm = createDocumentFragment();
	const emscripten::val element = getElement(elm);
	assertEquals(element["nodeName"], emscripten::val("#document-fragment"));

	deleteElement(elm);
};

void shouldDirectlySetNodeValue() {
	const char* text = "foo";
	const char* newText = "bar";

	const int elm = createTextNode(text);
	const emscripten::val element = getElement(elm);
	assertEquals(element["nodeName"], emscripten::val("#text"));
	assertEquals(element["textContent"], emscripten::val(text));
	setText(elm, newText);
	assertEquals(element["textContent"], emscripten::val(newText));

	const char* comment = "foo";
	const char* newComment = "bar";

	const int elm2 = createComment(comment);
	const emscripten::val element2 = getElement(elm2);
	assertEquals(element2["nodeName"], emscripten::val("#comment"));
	assertEquals(element2["textContent"], emscripten::val(comment));
	setComment(elm2, newComment);
	assertEquals(element2["textContent"], emscripten::val(newComment));

	deleteElement(elm);
	deleteElement(elm2);
};

void shouldDirectlySetText() {
	const char* text = "foo";
	const char* newText = "bar";

	const int elm = createTextNode(text);
	const emscripten::val element = getElement(elm);
	assertEquals(element["nodeName"], emscripten::val("#text"));
	assertEquals(element["textContent"], emscripten::val(text));
	setText(elm, newText);
	assertEquals(element["textContent"], emscripten::val(newText));

	deleteElement(elm);
};

void shouldDirectlySetComment() {
	const char* comment = "foo";
	const char* newComment = "bar";

	const int elm = createComment(comment);
	const emscripten::val element = getElement(elm);
	assertEquals(element["nodeName"], emscripten::val("#comment"));
	assertEquals(element["textContent"], emscripten::val(comment));
	setComment(elm, newComment);
	assertEquals(element["textContent"], emscripten::val(newComment));

	deleteElement(elm);
};

void shouldDirectlySetAttribute() {
	const int elm = createElement("a");
	const emscripten::val element = getElement(elm);

	setAttribute(elm, "href", "/foo");
	assertEquals(
		element.call<emscripten::val>("getAttribute", emscripten::val("href")),
		emscripten::val("/foo")
	);

	setAttribute(elm, "href", "/bar");
	assertEquals(
		element.call<emscripten::val>("getAttribute", emscripten::val("href")),
		emscripten::val("/bar")
	);

	deleteElement(elm);
};

void shouldDirectlyRemoveAttribute() {
	const int elm = createElement("a");
	const emscripten::val element = getElement(elm);

	setAttribute(elm, "href", "/foo");
	assertEquals(
		element.call<emscripten::val>("getAttribute", emscripten::val("href")),
		emscripten::val("/foo")
	);

	removeAttribute(elm, "href");
	assertEquals(
		element.call<emscripten::val>("getAttribute", emscripten::val("href")),
		emscripten::val::null()
	);

	deleteElement(elm);
};

void shouldDirectlyDeleteElements() {
	const int elm = createElement("li");
	deleteElement(elm);
	deleteElement(createElement("li"));
	deleteElement(createElement("li"));
	// deleted elements are recycled
	assert(elm == createElement("li"));
};

void shouldDirectlyConvertElementToInt() {
	const int elm1 = toElement(emscripten::val::global("document")["body"]["firstChild"]);
	const int elm2 = toElement(emscripten::val::global("document")["body"]["firstChild"]);

	assert(elm1 == elm2);
	
	const int elm3 = createElement("div");
	appendChild(elm2, elm3);
	assert(elm3 == toElement(emscripten::val::global("document")["body"]["firstChild"]["firstChild"]));

	deleteElement(elm1);
	deleteElement(elm2);
	deleteElement(elm3);
};

void shouldDirectlyGetElements() {
	const int elm1 = toElement(emscripten::val::global("document")["body"]["firstChild"]);
	const int elm2 = createElement("div");
	appendChild(elm1, elm2);

	assert(emscripten::val::global("document")["body"]["firstChild"]["firstChild"] == getElement(elm2));

	deleteElement(elm1);
	deleteElement(elm2);
};

void shouldDirectlyAppendChild() {
	const int elm1 = toElement(emscripten::val::global("document")["body"]["firstChild"]);
	const int elm2 = createElement("div");
	appendChild(elm1, elm2);
	assert(elm2 == toElement(emscripten::val::global("document")["body"]["firstChild"]["firstChild"]));

	deleteElement(elm1);
	deleteElement(elm2);
};

void shouldDirectlyFirstChild() {
	assert(
		firstChild(toElement(emscripten::val::global("document")["body"]))
		==
		toElement(emscripten::val::global("document")["body"]["firstChild"])
	);
	const int elm1 = toElement(emscripten::val::global("document")["body"]["firstChild"]);
	assert(firstChild(elm1) == 0);
	const int elm2 = createElement("div");
	appendChild(elm1, elm2);
	assert(
		firstChild(firstChild(toElement(emscripten::val::global("document")["body"])))
		==
		toElement(emscripten::val::global("document")["body"]["firstChild"]["firstChild"])
	);
	assert(elm2 == toElement(emscripten::val::global("document")["body"]["firstChild"]["firstChild"]));

	deleteElement(elm1);
	deleteElement(elm2);
};

void shouldDirectlyParentNode() {
	const int elm1 = toElement(emscripten::val::global("document")["body"]["firstChild"]);
	assert(
		parentNode(elm1)
		==
		toElement(emscripten::val::global("document")["body"])
	);
	const int elm2 = createElement("div");
	assert(parentNode(elm2) == 0);
	appendChild(elm1, elm2);
	assert(parentNode(elm2) == elm1);

	deleteElement(elm1);
	deleteElement(elm2);
};

void shouldDirectlyRemove() {
	const int elm1 = toElement(emscripten::val::global("document")["body"]["firstChild"]);
	const int elm2 = createElement("div");
	appendChild(elm1, elm2);
	assert(elm2 == toElement(emscripten::val::global("document")["body"]["firstChild"]["firstChild"]));
	remove(elm2);
	assertEquals(
		emscripten::val::global("document")["body"]["firstChild"]["firstChild"],
		emscripten::val::null()
	);

	deleteElement(elm1);
	deleteElement(elm2);
};

void shouldDirectlyNextSibling() {
	assert(
		nextSibling(toElement(emscripten::val::global("document")["body"]["firstChild"]))
		==
		toElement(emscripten::val::global("document")["body"]["firstChild"]["nextSibling"])
	);
	assert(
		nextSibling(nextSibling(toElement(emscripten::val::global("document")["body"]["firstChild"])))
		==
		0
	);
};

void shouldDirectlyInsertBefore() {
	const int elm1 = toElement(emscripten::val::global("document")["body"]["firstChild"]);
	const int elm2 = createElement("div");
	appendChild(elm1, elm2);
	const int elm3 = createElement("div");
	insertBefore(elm1, elm3, elm2);
	assert(
		toElement(emscripten::val::global("document")["body"]["firstChild"]["firstChild"])
		==
		elm3
	);
	const int elm4 = createElement("div");
	insertBefore(elm1, elm4, elm2);
	assert(
		toElement(emscripten::val::global("document")["body"]["firstChild"]["firstChild"]["nextSibling"])
		==
		elm4
	);

	deleteElement(elm1);
	deleteElement(elm2);
	deleteElement(elm3);
	deleteElement(elm4);
};

void shouldDirectlySetProperty() {
	const int elm = createElement("a");
	const emscripten::val element = getElement(elm);

	setProperty(elm, "foo", emscripten::val("foo-prop"));
	assertEquals(element["foo"], emscripten::val("foo-prop"));

	setProperty(elm, "foo", emscripten::val("bar"));
	assertEquals(element["foo"], emscripten::val("bar"));

	setProperty(elm, "foo", emscripten::val(true));
	assertEquals(element["foo"], emscripten::val(true));

	setProperty(elm, "foo", emscripten::val(42));
	assertEquals(element["foo"], emscripten::val(42));
};

void shouldDirectlyRemoveProperty() {
	const int elm = createElement("a");
	const emscripten::val element = getElement(elm);

	assertEquals(element["bar"], emscripten::val::undefined());
	removeProperty(elm, "bar");
	assertEquals(element["bar"], emscripten::val::undefined());

	setProperty(elm, "foo", emscripten::val("foo-prop"));
	assertEquals(element["foo"], emscripten::val("foo-prop"));

	removeProperty(elm, "foo");
	assertEquals(element["foo"], emscripten::val::undefined());

	assertEquals(element["bar"], emscripten::val::undefined());
	removeProperty(elm, "bar");
	assertEquals(element["bar"], emscripten::val::undefined());

	setProperty(elm, "foo", emscripten::val("foo-prop"));
	assertEquals(element["foo"], emscripten::val("foo-prop"));
	deleteElement(elm);
	assertEquals(element["foo"], emscripten::val::undefined());
};

void shouldDirectlySetCallback() {
	int count = 1;
	const int elm = createElement("div");
	const emscripten::val element = getElement(elm);

	setCallback(elm, "click", [&count](emscripten::val e) -> bool {
		std::string tagName = e["target"]["tagName"].as<std::string>();
		assert(tagName == "DIV");
		++count;
		return false;
	});
	element.call<void>("click");
	assert(count == 2);

	setCallback(elm, "click", [&count](emscripten::val e) -> bool {
		--count;
		return false;
	});
	element.call<void>("click");
	assert(count == 1);

	setCallback(elm, "onclick", [&count](emscripten::val e) -> bool {
		count += 5;
		return false;
	});
	element.call<void>("click");
	assert(count == 6);

	setCallback(elm, "onclick", [&count](emscripten::val e) -> bool {
		count += 6;
		return false;
	});
	element.call<void>("click");
	assert(count == 12);

	deleteElement(elm);
	element.call<void>("click");
	assert(count == 12);
};

void shouldDirectlyRemoveCallback() {
	int count = 1;
	const int elm = createElement("div");
	const emscripten::val element = getElement(elm);

	removeCallback(elm, "click");

	setCallback(elm, "click", [&count](emscripten::val e) -> bool {
		++count;
		return false;
	});
	element.call<void>("click");
	assert(count == 2);

	removeCallback(elm, "click");
	element.call<void>("click");
	assert(count == 2);

	setCallback(elm, "click", [&count](emscripten::val e) -> bool {
		++count;
		return false;
	});
	element.call<void>("click");
	assert(count == 3);

	removeCallback(elm, "onclick");
	element.call<void>("click");
	assert(count == 3);

	deleteElement(elm);
	element.call<void>("click");
	assert(count == 3);
};



EMSCRIPTEN_BINDINGS(direct_tests) {
  emscripten::function("shouldDirectlyCreateElements", &shouldDirectlyCreateElements);
  emscripten::function("shouldDirectlyCreateElementsWithNamespace", &shouldDirectlyCreateElementsWithNamespace);
  emscripten::function("shouldDirectlyCreateTextNodes", &shouldDirectlyCreateTextNodes);
  emscripten::function("shouldDirectlyCreateComments", &shouldDirectlyCreateComments);
  emscripten::function("shouldDirectlyCreateFragments", &shouldDirectlyCreateFragments);
	emscripten::function("shouldDirectlySetNodeValue", &shouldDirectlySetNodeValue);
	emscripten::function("shouldDirectlySetText", &shouldDirectlySetText);
	emscripten::function("shouldDirectlySetComment", &shouldDirectlySetComment);
	emscripten::function("shouldDirectlySetAttribute", &shouldDirectlySetAttribute);
	emscripten::function("shouldDirectlyRemoveAttribute", &shouldDirectlyRemoveAttribute);
	emscripten::function("shouldDirectlyDeleteElements", &shouldDirectlyDeleteElements);
	emscripten::function("shouldDirectlyConvertElementToInt", &shouldDirectlyConvertElementToInt);
	emscripten::function("shouldDirectlyGetElements", &shouldDirectlyGetElements);
	emscripten::function("shouldDirectlyAppendChild", &shouldDirectlyAppendChild);
	emscripten::function("shouldDirectlyFirstChild", &shouldDirectlyFirstChild);
	emscripten::function("shouldDirectlyParentNode", &shouldDirectlyParentNode);
	emscripten::function("shouldDirectlyRemove", &shouldDirectlyRemove);
	emscripten::function("shouldDirectlyNextSibling", &shouldDirectlyNextSibling);
	emscripten::function("shouldDirectlyInsertBefore", &shouldDirectlyInsertBefore);
	emscripten::function("shouldDirectlySetProperty", &shouldDirectlySetProperty);
	emscripten::function("shouldDirectlyRemoveProperty", &shouldDirectlyRemoveProperty);
	emscripten::function("shouldDirectlySetCallback", &shouldDirectlySetCallback);
	emscripten::function("shouldDirectlyRemoveCallback", &shouldDirectlyRemoveCallback);
};
