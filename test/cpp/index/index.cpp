#include "../../../src/cpp/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>

using namespace asmdom;

void shouldAutomaticallyClearMemory() {
	reset();
	Config config = Config();
	init(config);

	VNode* vnode = h("div");
	VNode* vnode1 = h("div");
	VNode* vnode2 = h("div");

	VNode obj = *vnode;

	patch(getRoot(), vnode);
	patch(vnode, vnode1);
	patch(vnode1, vnode2);

	if (vnode->sel == obj.sel) {
		throw 20;
	}

	deleteVNode(vnode1);
	deleteVNode(vnode2);
};

void shouldAutomaticallyClearMemoryByConfig() {
	reset();
	Config config = Config();
	config.clearMemory = true;
	init(config);

	VNode* vnode = h("div");
	VNode* vnode1 = h("div");
	VNode* vnode2 = h("div");

	VNode obj = *vnode;

	patch(getRoot(), vnode);
	patch(vnode, vnode1);
	patch(vnode1, vnode2);

	if (vnode->sel == obj.sel) {
		throw 20;
	}

	deleteVNode(vnode1);
	deleteVNode(vnode2);
};

void shouldNotAutomaticallyClearMemoryByConfig() {
	reset();
	Config config = Config();
	config.clearMemory = false;
	init(config);

	VNode* vnode = h("div");
	VNode* vnode1 = h("div");
	VNode* vnode2 = h("div");

	VNode obj = *vnode;

	patch(getRoot(), vnode);
	patch(vnode, vnode1);
	patch(vnode1, vnode2);

	if (vnode->sel != obj.sel) {
		throw 20;
	}

	deleteVNode(vnode1);
	deleteVNode(vnode2);
};

void shouldUseSafePatch() {
	reset();
	Config config = Config();
	init(config);

	VNode* vnode = h("div");
	VNode* vnode1 = h("div");
	VNode* vnode2 = h("div");

	if (patch(getRoot(), vnode) != vnode) {
		throw 20;
	}
	if (patch(vnode1, vnode2) != NULL) {
		throw 20;
	}

	deleteVNode(vnode);
	deleteVNode(vnode2);
};

void shouldUseSafePatchByConfig() {
	reset();
	Config config = Config();
	config.unsafePatch = false;
	init(config);

	VNode* vnode = h("div");
	VNode* vnode1 = h("div");
	VNode* vnode2 = h("div");

	if (patch(getRoot(), vnode) != vnode) {
		throw 20;
	}
	if (patch(vnode1, vnode2) != NULL) {
		throw 20;
	}

	deleteVNode(vnode);
	deleteVNode(vnode2);
};

void shouldNotUseSafePatchByConfig() {
	reset();
	Config config = Config();
	config.unsafePatch = true;
	init(config);

	VNode* vnode = h("div");
	VNode* vnode1 = h("div");
	VNode* vnode2 = h("div");

	if (patch(getRoot(), vnode) != vnode) {
		throw 20;
	}
	if (patch(vnode1, vnode2) != vnode2) {
		throw 20;
	}

	deleteVNode(vnode);
	deleteVNode(vnode2);
};


EMSCRIPTEN_BINDINGS(index_function_tests) {
	emscripten::function("shouldAutomaticallyClearMemory", &shouldAutomaticallyClearMemory);
	emscripten::function("shouldAutomaticallyClearMemoryByConfig", &shouldAutomaticallyClearMemoryByConfig);
	emscripten::function("shouldNotAutomaticallyClearMemoryByConfig", &shouldNotAutomaticallyClearMemoryByConfig);
	emscripten::function("shouldUseSafePatch", &shouldUseSafePatch);
	emscripten::function("shouldUseSafePatchByConfig", &shouldUseSafePatchByConfig);
	emscripten::function("shouldNotUseSafePatchByConfig", &shouldNotUseSafePatchByConfig);
};
