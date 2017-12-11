#include "../../../src/cpp/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>

using namespace asmdom;

void shouldHaveTheirProvidedValues() {
	VNode* vnode = h("div", Data(
		Attrs {
			{"href", "/foo"},
			{"minlength", "1"},
			{"value", "foo"}
		}
	));
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("href")),
		emscripten::val("/foo")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("minlength")),
		emscripten::val("1")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("value")),
		emscripten::val("foo")
	);

	delete vnode;
};

void attributesCanBeMemoized() {
	Data data = Data(
		Attrs {
			{"href", "/foo"},
			{"minlength", "1"},
			{"value", "foo"}
		}
	);
	VNode* vnode = h("div", data);
	VNode* vnode2 = h("div", data);
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("href")),
		emscripten::val("/foo")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("minlength")),
		emscripten::val("1")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("value")),
		emscripten::val("foo")
	);
	patch(vnode, vnode2);
	
	elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("href")),
		emscripten::val("/foo")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("minlength")),
		emscripten::val("1")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("value")),
		emscripten::val("foo")
	);

	delete vnode2;
};

void shouldBeOmittedWhenFalsyValuesAreProvided() {
	VNode* vnode = h("div", Data(
		Attrs {
			{"href", "null"},
			{"minlength", "0"},
			{"value", "false"}
		}
	));
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("href")),
		emscripten::val("null")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("minlength")),
		emscripten::val("0")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("value")),
		emscripten::val::null()
	);

	delete vnode;
};

void shouldSetTruthyValuesToEmptyString() {
	VNode* vnode = h("input", Data(
		Attrs {
			{"href", "null"},
			{"minlength", "0"},
			{"readonly", "true"}
		}
	));
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("href")),
		emscripten::val("null")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("minlength")),
		emscripten::val("0")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("readonly")),
		emscripten::val("")
	);

	delete vnode;
};

void shouldBeSetCorrectlyWhenNamespaced() {
	VNode* vnode = h("div", Data(
		Attrs {
			{"xlink:href", "#foo"}
		}
	));
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttributeNS",
			emscripten::val("http://www.w3.org/1999/xlink"),
			emscripten::val("href")
		),
		emscripten::val("#foo")
	);

	delete vnode;
};

EMSCRIPTEN_BINDINGS(attributes_tests) {
  emscripten::function("shouldHaveTheirProvidedValues", &shouldHaveTheirProvidedValues);
  emscripten::function("attributesCanBeMemoized", &attributesCanBeMemoized);
  emscripten::function("shouldBeOmittedWhenFalsyValuesAreProvided", &shouldBeOmittedWhenFalsyValuesAreProvided);
	emscripten::function("shouldSetTruthyValuesToEmptyString", &shouldSetTruthyValuesToEmptyString);
	emscripten::function("shouldBeSetCorrectlyWhenNamespaced", &shouldBeSetCorrectlyWhenNamespaced);
};