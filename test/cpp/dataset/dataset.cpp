#include "../../../src/cpp/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>

using namespace asmdom;

void shouldSetOnInitialElementCreation() {
	VNode* vnode = new VNode("div", new VNodeData(
		VNodeAttrs {
			{"data-foo", "foo"}
		}
	));
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-foo")),
		emscripten::val("foo")
	);

	deleteVNode(vnode);
};

void datasetCanBeMemoized() {
	VNodeData* data = new VNodeData(
		VNodeAttrs {
			{"data-foo", "foo"},
			{"data-bar", "bar"}
		}
	);
	VNode* vnode = new VNode("i", data);
	VNode* vnode2 = new VNode("i", data);
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-foo")),
		emscripten::val("foo")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-bar")),
		emscripten::val("bar")
	);
	patch(vnode, vnode2);
	
	elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-foo")),
		emscripten::val("foo")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-bar")),
		emscripten::val("bar")
	);

	deleteVNode(vnode2);
};

void shouldUpdateDataset() {
	VNode* vnode = new VNode("div", new VNodeData(
		VNodeAttrs {
			{"data-foo", "foo"},
			{"data-bar", "bar"}
		}
	));
	VNode* vnode2 = new VNode("div", new VNodeData(
		VNodeAttrs {
			{"data-baz", "baz"}
		}
	));
	patch(getRoot(), vnode);
	
	emscripten::val elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-foo")),
		emscripten::val("foo")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-bar")),
		emscripten::val("bar")
	);
	patch(vnode, vnode2);
	
	elm = getBodyFirstChild();

	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-baz")),
		emscripten::val("baz")
	);
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("data-foo")),
		emscripten::val::null()
	);

	deleteVNode(vnode2);
};

EMSCRIPTEN_BINDINGS(dataset_tests) {
  emscripten::function("shouldSetOnInitialElementCreation", &shouldSetOnInitialElementCreation);
  emscripten::function("datasetCanBeMemoized", &datasetCanBeMemoized);
  emscripten::function("shouldUpdateDataset", &shouldUpdateDataset);
};