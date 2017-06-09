#include "../../../src/asm-dom.hpp"
#include <emscripten/bind.h>

void shouldCreateAVNodeWithAProperTag() {
	VNode* vnode = h("div");
	deleteVNode(vnode);
};

void shouldDeleteAVNode() {
	VNode* vnode = h("div", std::vector<VNode*> {
		h("span"),
		h("div", std::vector<VNode*> {
			h("video"),
		}),
	});
	deleteVNode(vnode);
};

EMSCRIPTEN_BINDINGS(h_function_tests) {
  emscripten::function("shouldCreateAVNodeWithAProperTag", &shouldCreateAVNodeWithAProperTag);
  emscripten::function("shouldDeleteAVNode", &shouldDeleteAVNode);
};