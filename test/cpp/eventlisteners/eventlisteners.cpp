#include "../../../src/cpp/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <vector>

using namespace asmdom;

std::vector<emscripten::val> result = std::vector<emscripten::val>();

void beforeEach() {
	result.clear();
};

bool callback(emscripten::val event) {
	std::string tagName = event["target"]["tagName"].as<std::string>();
	if (tagName.compare("DIV") != 0 && tagName.compare("A") != 0) {
		throw 20;
	}

	result.push_back(event);
	return true;
};

void shouldAttachAClickEventHandlerToElement() {
	beforeEach();
	VNode* vnode = h("div",
		Data(
			Callbacks {
				{"onclick", callback}
			}
		), 
		Children {
			h(std::string("a"), std::string("Click my parent"))
		}
	);
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();
	elm.call<void>("click");

	// assert
	if (result.size() != 1) {
		throw 20;
	}

	delete vnode;
};

void shouldDetachAttachedClickEventHandlerToElement() {
	beforeEach();
	VNode* vnode1 = h("div",
		Data(
			Callbacks {
				{"onclick", callback}
			}
		), 
		Children {
			h(std::string("a"), std::string("Click my parent"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	elm.call<void>("click");
	// assert
	if (result.size() != 1) {
		throw 20;
	}

	VNode* vnode2 = h("div",
		Children {
			h(std::string("a"), std::string("Click my parent"))
		}
	);
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	elm.call<void>("click");
	// assert
	if (result.size() != 1) {
		throw 20;
	}
	delete vnode2;
};

void shouldShareHandlersInParentAndChildNodes() {
	beforeEach();
	VNode* vnode = h("div",
		Data(
			Callbacks {
				{"onclick", callback}
			}
		), 
		Children {
			h("a",
				Data(
					Callbacks {
						{"onclick", callback}
					}
				),
				std::string("Click my parent")
			)
		}
	);
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();
	elm.call<void>("click");
	// assert
	if (result.size() != 1) {
		throw 20;
	}

	elm["firstChild"].call<void>("click");
	// assert
	if (result.size() != 3) {
		throw 20;
	}

	delete vnode;
};

void shouldHandleLambdaWithCapture() {
	beforeEach();
	int count = 1;

	VNode* vnode = h("div",
		Data(
			Callbacks {
				{"onclick", [&count](emscripten::val e) -> bool {
					++count;
					return false;
				}}
			}
		)
	);
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();
	elm.call<void>("click");
	// assert
	if (count != 2) {
		throw 20;
	}

	delete vnode;
};

EMSCRIPTEN_BINDINGS(eventlisteners_tests) {
  emscripten::function("shouldAttachAClickEventHandlerToElement", &shouldAttachAClickEventHandlerToElement);
  emscripten::function("shouldDetachAttachedClickEventHandlerToElement", &shouldDetachAttachedClickEventHandlerToElement);
  emscripten::function("shouldShareHandlersInParentAndChildNodes", &shouldShareHandlersInParentAndChildNodes);
  emscripten::function("shouldHandleLambdaWithCapture", &shouldHandleLambdaWithCapture);
};
