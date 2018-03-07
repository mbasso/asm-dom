#include "../../../src/cpp/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>

using namespace asmdom;

bool onClick(emscripten::val event) {
	return true;
};

void shouldDeleteAVNode() {
	VNode* vnode = h("div", Children {
		h("span"),
		h("div", Children {
			h("video"),
		}),
	});
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAProperTag() {
	VNode* vnode = h("div");
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithChildren() {
	VNode* vnode = h("div", Children {h("span"), h("b")});
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

void shouldCreateAVNodeForFragment() {
	VNode* vnode = h("");
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrsAndOneChild() {
	VNode* vnode = h("div",
		Data(Attrs {
			{"foo", "bar"}
		}),
		h("span")
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrsAndTextContentInString() {
	VNode* vnode = h("div",
		Data(Attrs {
			{"foo", "bar"}
		}),
		"I am a string"
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrsAndChildren() {
	VNode* vnode = h("div", 
		Data(Attrs {
			{"foo", "bar"}
		}),
		Children {h("span"), h("i")}
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithText() {
	VNode* vnode = h("this is a text", true);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrs() {
	VNode* vnode = h("i",
		Data (
			Attrs {
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
	VNode* vnode = h("i",
	Data (
		Props {
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
	VNode* vnode = h("i",
		Data (
			Callbacks {
				{"onclick", onClick},
			}
		)
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrsAndProps() {
	VNode* vnode = h("i",
		Data (
			Attrs {
				{"data-empty", ""},
				{"data-dash", "-"},
				{"data-dashed", "foo-bar"},
				{"data-camel", "fooBar"},
				{"data-integer", "0"},
				{"data-float", "0.1"}
			},
			Props {
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
	VNode* vnode = h("i",
		Data (
			Attrs {
				{"data-empty", ""},
				{"data-dash", "-"},
				{"data-dashed", "foo-bar"},
				{"data-camel", "fooBar"},
				{"data-integer", "0"},
				{"data-float", "0.1"}
			},
			Callbacks {
				{"onclick", onClick},
			}
		)
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithPropsAndCallbacks() {
	VNode* vnode = h("i",
		Data (
			Props {
				{"data-empty", emscripten::val("")},
				{"data-dash", emscripten::val("")},
				{"data-dashed", emscripten::val("foo-bar")},
				{"data-camel", emscripten::val("fooBar")},
				{"data-integer", emscripten::val(0)},
				{"data-float", emscripten::val(0.1)}
			},
			Callbacks {
				{"onclick", onClick},
			}
		)
	);
	deleteVNode(vnode);
};

void shouldCreateAVNodeWithAttrsPropsAndCallbacks() {
	VNode* vnode = h("i",
		Data (
			Attrs {
				{"data-empty", ""},
				{"data-dash", "-"},
				{"data-dashed", "foo-bar"},
				{"data-camel", "fooBar"},
				{"data-integer", "0"},
				{"data-float", "0.1"}
			},
			Props {
				{"data-empty", emscripten::val("")},
				{"data-dash", emscripten::val("")},
				{"data-dashed", emscripten::val("foo-bar")},
				{"data-camel", emscripten::val("fooBar")},
				{"data-integer", emscripten::val(0)},
				{"data-float", emscripten::val(0.1)}
			},
			Callbacks {
				{"onclick", onClick},
			}
		)
	);
	deleteVNode(vnode);
};

EMSCRIPTEN_BINDINGS(h_function_tests) {
  emscripten::function("shouldDeleteAVNode", &shouldDeleteAVNode);
  emscripten::function("shouldCreateAVNodeWithAProperTag", &shouldCreateAVNodeWithAProperTag);
  emscripten::function("shouldCreateAVNodeWithChildren", &shouldCreateAVNodeWithChildren);
  emscripten::function("shouldCreateAVNodeWithOneChild", &shouldCreateAVNodeWithOneChild);
  emscripten::function("shouldCreateAVNodeWithTextContentInString", &shouldCreateAVNodeWithTextContentInString);
  emscripten::function("shouldCreateAVNodeForComment", &shouldCreateAVNodeForComment);
  emscripten::function("shouldCreateAVNodeForFragment", &shouldCreateAVNodeForFragment);
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
