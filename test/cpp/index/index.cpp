#include "../../../src/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>

using namespace asmdom;

void shouldAutomaticallyClearMemory() {
	reset();
	asmdomConfig config = asmdomConfig();
	init(config);

	VNode* vnode = new VNode("div");
	VNode* vnode1 = new VNode("div");
	VNode* vnode2 = new VNode("div");

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
	asmdomConfig config = asmdomConfig();
	config.clearMemory = true;
	init(config);

	VNode* vnode = new VNode("div");
	VNode* vnode1 = new VNode("div");
	VNode* vnode2 = new VNode("div");

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
	asmdomConfig config = asmdomConfig();
	config.clearMemory = false;
	init(config);

	VNode* vnode = new VNode("div");
	VNode* vnode1 = new VNode("div");
	VNode* vnode2 = new VNode("div");

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
	asmdomConfig config = asmdomConfig();
	init(config);

	VNode* vnode = new VNode("div");
	VNode* vnode1 = new VNode("div");
	VNode* vnode2 = new VNode("div");

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
	asmdomConfig config = asmdomConfig();
	config.unsafePatch = false;
	init(config);

	VNode* vnode = new VNode("div");
	VNode* vnode1 = new VNode("div");
	VNode* vnode2 = new VNode("div");

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
	asmdomConfig config = asmdomConfig();
	config.unsafePatch = true;
	init(config);

	VNode* vnode = new VNode("div");
	VNode* vnode1 = new VNode("div");
	VNode* vnode2 = new VNode("div");

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
