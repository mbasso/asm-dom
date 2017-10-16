#include "../../src/cpp/asm-dom.hpp"
#include <emscripten/val.h>
#include <emscripten/bind.h>
#include <string>

using namespace asmdom;

VNode* vnode1;
VNode* vnode2;
VNode* vnode3;
VNode* vnode4;
VNode* vnode5;
VNode* vnode6;

int main() {
	Config config = Config();
	config.unsafePatch = true;
	config.clearMemory = false;
	init(config);

	// enlarge memory, avoid strange benchmarks
	Children children = Children();
	children.reserve(10000);
	for (int i = 0; i < 10000; ++i) {
		children.push_back(h("span",
			Data(
				Attrs {
					{"foo", "foo"},
					{"bar", "bar"},
					{"baz", "baz"},
					{"e", std::to_string(i)}
				}
			)
		));
	}
	for (int i = 0; i < 10000; ++i) {
		delete children[i];
	}

	return 0;
};

void create() {
	int i = 100;
	while (i--) {
		VNode* vnode = h("div",
			Data(
				Attrs {
					{"foo", "foo"},
					{"bar", "bar"},
					{"baz", "baz"}
				}
			),
			Children {
				h("div", Data(Attrs { {"foo", "foo"} })),
				h("div", Data(Attrs { {"foo", "foo"} })),
				h("div", Data(Attrs { {"foo", "foo"} }), Children {
					h("div", Data(Attrs { {"foo", "foo"} })),
					h("div", Data(Attrs { {"foo", "foo"} })),
					h("div", Data(Attrs { {"foo", "foo"} }))
				})
			}
		);
		delete vnode;
	}
};

void patchWithoutChangesSetup() {
	emscripten::val elm = emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root"));
	
	Children children = Children();
	children.reserve(100);
	for (int i = 0; i < 100; ++i) {
		children.push_back(h("span",
			Data(
				Attrs {
					{"e", std::to_string(i)}
				}
			),
			Children {
				h("span",
					Data(
						Attrs {
							{"e", std::to_string(i - 3)}
						}
					)
				)
			}
		));
	}
	vnode1 = h("div",
		Data(
			Attrs {
				{"foo", "foo"},
				{"bar", "bar"},
				{"baz", "baz"}
			}
		),
		children
	);

	patch(elm, vnode1);

	children = Children();
	children.reserve(100);
	for (int i = 0; i < 100; ++i) {
		children.push_back(h("span",
			Data(
				Attrs {
					{"e", std::to_string(i)}
				}
			),
			Children {
				h("span",
					Data(
						Attrs {
							{"e", std::to_string(i - 3)}
						}
					)
				)
			}
		));
	}
	vnode2 = h("div",
		Data(
			Attrs {
				{"foo", "foo"},
				{"bar", "bar"},
				{"baz", "baz"}
			}
		),
		children
	);
};

void patchWithoutChanges() {
	int j = 100;
	while (j--) {
		patch(vnode1, vnode2);
		VNode* temp = vnode1;
		vnode1 = vnode2;
		vnode2 = temp;
	}
};

void patchWithChangesSetup() {
	emscripten::val elm = emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root"));
	
	Children children = Children();
	children.reserve(100);
	for (int i = 0; i < 100; ++i) {
		children.push_back(h("span",
			Data(
				Attrs {
					{"e", std::to_string(i)}
				}
			),
			Children {
				h("span",
					Data(
						Attrs {
							{"e", std::to_string(i - 1)}
						}
					)
				)
			}
		));
	}
	vnode3 = h("div",
		Data(
			Attrs {
				{"foo", "foo"},
				{"bar", "bar"},
				{"baz", "baz"}
			}
		),
		children
	);

	patch(elm, vnode3);

	children = Children();
	children.reserve(100);
	for (int i = 0; i < 100; ++i) {
		children.push_back(h("span",
			Data(
				Attrs {
					{"e", "27"}
				}
			),
			Children {
				h("span",
					Data(
						Attrs {
							{"e", "27"}
						}
					)
				)
			}
		));
	}
	vnode4 = h("div",
		Data(
			Attrs {
				{"foo", "foo"},
				{"bar", "bar"},
				{"baz", "baz"}
			}
		),
		children
	);
};

void patchWithChanges() {
	int j = 100;
	while (j--) {
		patch(vnode3, vnode4);
		VNode* temp = vnode3;
		vnode3 = vnode4;
		vnode4 = temp;
	}
};

void patchWithAdditionSetup() {
	emscripten::val elm = emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root"));
	
	Children children = Children();
	children.reserve(100);
	for (int i = 0; i < 100; ++i) {
		children.push_back(h("span",
			Children {
				h("span")
			}
		));
	}
	vnode5 = h("div",
		Data(
			Attrs {
				{"foo", "foo"},
				{"bar", "bar"},
				{"baz", "baz"}
			}
		),
		children
	);

	patch(elm, vnode5);

	vnode6 = h("div",
		Data(
			Attrs {
				{"foo", "foo"},
				{"bar", "bar"},
				{"baz", "baz"}
			}
		)
	);
};

void patchWithAddition() {
	int j = 100;
	while (j--) {
		patch(vnode5, vnode6);
		VNode* temp = vnode5;
		vnode5 = vnode6;
		vnode6 = temp;
	}
};

EMSCRIPTEN_BINDINGS(app) {
  emscripten::function("create", &create);
  emscripten::function("patchWithoutChangesSetup", &patchWithoutChangesSetup);
  emscripten::function("patchWithoutChanges", &patchWithoutChanges);
  emscripten::function("patchWithChangesSetup", &patchWithChangesSetup);
  emscripten::function("patchWithChanges", &patchWithChanges);
  emscripten::function("patchWithAdditionSetup", &patchWithAdditionSetup);
  emscripten::function("patchWithAddition", &patchWithAddition);
};
