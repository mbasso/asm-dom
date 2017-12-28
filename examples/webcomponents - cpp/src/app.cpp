#include "../../../src/cpp/asm-dom.hpp"
#include <string>
#include <emscripten/val.h>

using namespace asmdom;

int main() {
	Config config;
	config.unsafePatch = true;
	init(config);

	VNode* oldVnode = h("div",
		Data(
			Attrs {
				{"id", "root"}
			}
		),
		Children {
			h("Here is an \"Hello\" component that accepts a \"name\" attribute, and emit a \"change\" event, please open the console", true),
			h("br"),
			h("br"),
			h("hello-component",
				Data(
					Attrs {
						{"name", "World"}
					},
					Callbacks {
						{"onchange", [](emscripten::val e) -> bool {
							emscripten::val::global("console").call<void>("log", emscripten::val("name changed:"), e["target"]["name"]);
							return true;
						}}
					}
				)
			)
		}
	);

	patch(
		emscripten::val::global("document").call<emscripten::val>(
			"getElementById",
			std::string("root")
		),
		oldVnode
	);

  VNode* newVnode = h("div",
		Data(
			Attrs {
				{"id", "root"}
			}
		),
		Children {
			h("Here is an \"Hello\" component that accepts a \"name\" attribute, and emit a \"change\" event, please open the console", true),
			h("br"),
			h("br"),
			h("hello-component",
				Data(
					Attrs {
						{"name", "asm-dom"}
					},
					Callbacks {
						{"onchange", [](emscripten::val e) -> bool {
							emscripten::val::global("console").call<void>("log", emscripten::val("name changed:"), e["target"]["name"]);
							return true;
						}}
					}
				)
			)
		}
	);

	patch(oldVnode, newVnode);

	return 0;
};
