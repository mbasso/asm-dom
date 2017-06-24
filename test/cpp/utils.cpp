#include "utils.hpp"
#include <emscripten/val.h>

void assertEquals(emscripten::val actual, emscripten::val expected) {
	if (!actual.strictlyEquals(expected)) {
		throw 20;
	}
};

emscripten::val getBodyFirstChild() {
	return emscripten::val::global("document")["body"]["firstChild"];
};

emscripten::val getRoot() {
	return emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root"));
};
