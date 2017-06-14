#include "../../../src/asm-dom.hpp"
#include <emscripten/bind.h>

void shouldCreateAVNodeWithAProperTag() {
	VNode* vnode = new VNode("div");
	deleteVNode(vnode);
};

void shouldDeleteAVNode() {
	VNode* vnode = new VNode("div", VNodeChildren {
		new VNode("span"),
		new VNode("div", VNodeChildren {
			new VNode("video"),
		}),
	});
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithChildren() {
	VNode* vnode = new VNode("div", VNodeChildren {new VNode("span"), new VNode("b")});
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithOneChild() {
	VNode* vnode = new VNode("div", new VNode("span"));
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithTextContentInString() {
	VNode* vnode = new VNode("div", "I am a string");
	deleteVNode(vnode);
};

void shouldCreateAVNodeForComment() {
	VNode* vnode = new VNode("!", "test");
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithText() {
	VNode* vnode = new VNode("this is a text", true);
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