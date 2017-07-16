#include "../../../src/asm-dom.hpp"
#include <emscripten/bind.h>

using namespace asmdom;

int main() {
	asmdomConfig config = asmdomConfig();
	config.unsafePatch = true;

	init(config);
	return 0;
};

void start() {
	VNode* vnode = new VNode(
		std::string("div"),
		std::string("Hello World from C++!")
	);

	patch(
		emscripten::val::global("document").call<emscripten::val>(
			"querySelector",
			std::string(".todoapp")
		),
		vnode
	);
};

EMSCRIPTEN_BINDINGS(app) {
  emscripten::function("start", &start);
};
