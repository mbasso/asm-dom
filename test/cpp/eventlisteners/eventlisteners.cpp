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
	assert(tagName == "DIV" || tagName == "A");

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

	assert(result.size() == 1);

	deleteVNode(vnode);
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
	assert(result.size() == 1);

	VNode* vnode2 = h("div",
		Children {
			h(std::string("a"), std::string("Click my parent"))
		}
	);
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	elm.call<void>("click");
	assert(result.size() == 1);
	deleteVNode(vnode2);
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
	assert(result.size() == 1);

	elm["firstChild"].call<void>("click");
	assert(result.size() == 3);

	deleteVNode(vnode);
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
	assert(count == 2);

	deleteVNode(vnode);
};

void shouldUpdateHandlers() {
	beforeEach();
	int count = 1;

	VNode* vnode1 = h("div",
		Data(
			Callbacks {
				{"onclick", [&count](emscripten::val e) -> bool {
					++count;
					return false;
				}}
			}
		)
	);
	patch(getRoot(), vnode1);
	
	emscripten::val elm = getBodyFirstChild();
	elm.call<void>("click");
	assert(count == 2);

	VNode* vnode2 = h("div",
		Data(
			Callbacks {
				{"onclick", [&count](emscripten::val e) -> bool {
					--count;
					return false;
				}}
			}
		)
	);
	patch(vnode1, vnode2);
	
	elm.call<void>("click");
	assert(count == 1);

	deleteVNode(vnode2);
};

void shouldNotUpdateHandlers() {
	beforeEach();
	int count = 1;

	VNode* vnode1 = h("div",
		Data(
			Callbacks {
				{"onclick", [&count](emscripten::val e) -> bool {
					++count;
					return false;
				}}
			}
		)
	);
	patch(getRoot(), vnode1);
	
	emscripten::val elm = getBodyFirstChild();
	elm.call<void>("click");
	assert(count == 2);

	VNode* vnode2 = h("div",
		Data(
			Callbacks {
				{"onclick", [&count](emscripten::val e) -> bool {
					++count;
					return false;
				}}
			}
		)
	);
	patch(vnode1, vnode2);
	
	elm.call<void>("click");
	assert(count == 3);

	deleteVNode(vnode2);
};

void shouldNotAttachRefEventHandlerToElement() {
	beforeEach();

	VNode* vnode1 = h("div",
		Data(
			Callbacks {
				{"ref", [](emscripten::val e) -> bool {
					return false;
				}}
			}
		)
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	emscripten::val keys = emscripten::val::global("Object").call<emscripten::val>("keys", elm["asmDomEvents"]);
	assertEquals(keys["length"], emscripten::val(0));

	VNode* vnode2 = h("div");
	patch(vnode1, vnode2);
	keys = emscripten::val::global("Object").call<emscripten::val>("keys", elm["asmDomEvents"]);
	assertEquals(keys["length"], emscripten::val(0));

	deleteVNode(vnode2);
};

EMSCRIPTEN_BINDINGS(eventlisteners_tests) {
  emscripten::function("shouldAttachAClickEventHandlerToElement", &shouldAttachAClickEventHandlerToElement);
  emscripten::function("shouldDetachAttachedClickEventHandlerToElement", &shouldDetachAttachedClickEventHandlerToElement);
  emscripten::function("shouldShareHandlersInParentAndChildNodes", &shouldShareHandlersInParentAndChildNodes);
  emscripten::function("shouldHandleLambdaWithCapture", &shouldHandleLambdaWithCapture);
  emscripten::function("shouldUpdateHandlers", &shouldUpdateHandlers);
  emscripten::function("shouldNotUpdateHandlers", &shouldNotUpdateHandlers);
  emscripten::function("shouldNotAttachRefEventHandlerToElement", &shouldNotAttachRefEventHandlerToElement);
};
