#include "../../../src/asm-dom.hpp"
#include <emscripten/bind.h>

void shouldCreateAVNodeWithAProperTag() {
	VNode* vnode = h("div");
	deleteVNode(vnode);
};

void shouldDeleteAVNode() {
	VNode* vnode = h("div", VNodeChildren {
		h("span"),
		h("div", VNodeChildren {
			h("video"),
		}),
	});
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithChildren() {
	VNode* vnode = h("div", VNodeChildren {h("span"), h("b")});
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithOneChild() {
	VNode* vnode = h("div", h("span"));
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithTextContentInString() {
	VNode* vnode = h("div", "I am a string");
	deleteVNode(vnode);
};

void shouldCreateAVNodeForComment() {
	VNode* vnode = h("!", "test");
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithText() {
	VNode* vnode = h("this is a text", true);
	deleteVNode(vnode);
};

EMSCRIPTEN_BINDINGS(h_function_tests) {
  emscripten::function("shouldCreateAVNodeWithAProperTag", &shouldCreateAVNodeWithAProperTag);
  emscripten::function("shouldDeleteAVNode", &shouldDeleteAVNode);
  emscripten::function("shouldCreateAVNodeWithChildren", &shouldCreateAVNodeWithChildren);
  emscripten::function("shouldCreateAVNodeWithOneChild", &shouldCreateAVNodeWithOneChild);
  emscripten::function("shouldCreateAVNodeWithTextContentInString", &shouldCreateAVNodeWithTextContentInString);
  emscripten::function("shouldCreateAVNodeForComment", &shouldCreateAVNodeForComment);
  emscripten::function("shouldCreateAVNodeWithText", &shouldCreateAVNodeWithText);
};