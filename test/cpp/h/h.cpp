#include "../../../src/asm-dom.hpp"
#include <emscripten/bind.h>

using namespace asmdom;

emscripten::val onClick(emscripten::val event) {
	return emscripten::val::undefined();
};

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

void shouldCreateAVNodeWithAttrsAndOneChild() {
	VNode* vnode = new VNode("div",
		new VNodeData(VNodeAttrs {
			{"foo", "bar"}
		}),
		new VNode("span")
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrsAndTextContentInString() {
	VNode* vnode = new VNode("div",
		new VNodeData(VNodeAttrs {
			{"foo", "bar"}
		}),
		"I am a string"
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrsAndChildren() {
	VNode* vnode = new VNode("div", 
		new VNodeData(VNodeAttrs {
			{"foo", "bar"}
		}),
		VNodeChildren {new VNode("span"), new VNode("i")}
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithText() {
	VNode* vnode = new VNode("this is a text", true);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrs() {
	VNode* vnode = new VNode("i",
		new VNodeData (
			VNodeAttrs {
				{"data-empty", ""},
				{"data-dash", "-"},
				{"data-dashed", "foo-bar"},
				{"data-camel", "fooBar"},
				{"data-integer", "0"},
				{"data-float", "0.1"}
			}
		)
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithProps() {
	VNode* vnode = new VNode("i",
	new VNodeData (
		VNodeProps {
			{"data-empty", emscripten::val("")},
			{"data-dash", emscripten::val("")},
			{"data-dashed", emscripten::val("foo-bar")},
			{"data-camel", emscripten::val("fooBar")},
			{"data-integer", emscripten::val(0)},
			{"data-float", emscripten::val(0.1)}
		})
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithCallbacks() {
	VNode* vnode = new VNode("i",
		new VNodeData (
			VNodeCallbacks {
				{"onclick", onClick},
			}
		)
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrsAndProps() {
	VNode* vnode = new VNode("i",
		new VNodeData (
			VNodeAttrs {
				{"data-empty", ""},
				{"data-dash", "-"},
				{"data-dashed", "foo-bar"},
				{"data-camel", "fooBar"},
				{"data-integer", "0"},
				{"data-float", "0.1"}
			},
			VNodeProps {
				{"data-empty", emscripten::val("")},
				{"data-dash", emscripten::val("")},
				{"data-dashed", emscripten::val("foo-bar")},
				{"data-camel", emscripten::val("fooBar")},
				{"data-integer", emscripten::val(0)},
				{"data-float", emscripten::val(0.1)}
			}
		)
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrsAndCallbacks() {
	VNode* vnode = new VNode("i",
		new VNodeData (
			VNodeAttrs {
				{"data-empty", ""},
				{"data-dash", "-"},
				{"data-dashed", "foo-bar"},
				{"data-camel", "fooBar"},
				{"data-integer", "0"},
				{"data-float", "0.1"}
			},
			VNodeCallbacks {
				{"onclick", onClick},
			}
		)
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithPropsAndCallbacks() {
	VNode* vnode = new VNode("i",
		new VNodeData (
			VNodeProps {
				{"data-empty", emscripten::val("")},
				{"data-dash", emscripten::val("")},
				{"data-dashed", emscripten::val("foo-bar")},
				{"data-camel", emscripten::val("fooBar")},
				{"data-integer", emscripten::val(0)},
				{"data-float", emscripten::val(0.1)}
			},
			VNodeCallbacks {
				{"onclick", onClick},
			}
		)
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrsPropsAndCallbacks() {
	VNode* vnode = new VNode("i",
		new VNodeData (
			VNodeAttrs {
				{"data-empty", ""},
				{"data-dash", "-"},
				{"data-dashed", "foo-bar"},
				{"data-camel", "fooBar"},
				{"data-integer", "0"},
				{"data-float", "0.1"}
			},
			VNodeProps {
				{"data-empty", emscripten::val("")},
				{"data-dash", emscripten::val("")},
				{"data-dashed", emscripten::val("foo-bar")},
				{"data-camel", emscripten::val("fooBar")},
				{"data-integer", emscripten::val(0)},
				{"data-float", emscripten::val(0.1)}
			},
			VNodeCallbacks {
				{"onclick", onClick},
			}
		)
	);
	deleteVNode(vnode);
};

EMSCRIPTEN_BINDINGS(h_function_tests) {
  emscripten::function("shouldCreateAVNodeWithAProperTag", &shouldCreateAVNodeWithAProperTag);
  emscripten::function("shouldDeleteAVNode", &shouldDeleteAVNode);
  emscripten::function("shouldCreateAVNodeWithChildren", &shouldCreateAVNodeWithChildren);
  emscripten::function("shouldCreateAVNodeWithOneChild", &shouldCreateAVNodeWithOneChild);
  emscripten::function("shouldCreateAVNodeWithTextContentInString", &shouldCreateAVNodeWithTextContentInString);
  emscripten::function("shouldCreateAVNodeForComment", &shouldCreateAVNodeForComment);
  emscripten::function("shouldCreateAVNodeWithAttrsAndOneChild", &shouldCreateAVNodeWithAttrsAndOneChild);
  emscripten::function("shouldCreateAVNodeWithAttrsAndTextContentInString", &shouldCreateAVNodeWithAttrsAndTextContentInString);
  emscripten::function("shouldCreateAVNodeWithAttrsAndChildren", &shouldCreateAVNodeWithAttrsAndChildren);
  emscripten::function("shouldCreateAVNodeWithText", &shouldCreateAVNodeWithText);
  emscripten::function("shouldCreateAVNodeWithAttrs", &shouldCreateAVNodeWithAttrs);
  emscripten::function("shouldCreateAVNodeWithProps", &shouldCreateAVNodeWithProps);
  emscripten::function("shouldCreateAVNodeWithCallbacks", &shouldCreateAVNodeWithCallbacks);
  emscripten::function("shouldCreateAVNodeWithAttrsAndProps", &shouldCreateAVNodeWithAttrsAndProps);
  emscripten::function("shouldCreateAVNodeWithAttrsAndCallbacks", &shouldCreateAVNodeWithAttrsAndCallbacks);
  emscripten::function("shouldCreateAVNodeWithPropsAndCallbacks", &shouldCreateAVNodeWithPropsAndCallbacks);
  emscripten::function("shouldCreateAVNodeWithAttrsPropsAndCallbacks", &shouldCreateAVNodeWithAttrsPropsAndCallbacks);
};