#include "../../../src/cpp/asm-dom.hpp"
#include "./todos.hpp"
#include <emscripten.h>
#include <emscripten/bind.h>

using namespace asmdom;
using namespace todomvc::todos;

std::function<void(todomvc::todos::action)> handler;

void onhashchange(std::string filter) {
	TodoFilter todoFilter = all;
	if (filter.compare("completed") == 0) {
		todoFilter = completed;
	} else if (filter.compare("active") == 0) {
		todoFilter = active;
	}
	handler(todomvc::todos::Action::Filter(todoFilter));
};

void render(Todos initState, VNode* oldVnode);

VNode* nextVnode;

VNode* beforePatch(Todos initState) {
	handler = [initState](std::function<Todos(Todos)> e) {
		Todos newState = update(initState, e);
		render(newState, nextVnode);
	};
	nextVnode = view(initState, handler);
	return nextVnode;
};

void afterPatch(VNode* rendered) {
	if (rendered != NULL) {
		EM_ASM(
			window['onhashchange'] = function() {
				window['todomvc']['onhashchange'](window['location']['hash']['substr'](2) || 'all');
			};
		);
	}
};

void render(Todos initState, VNode* oldVnode) {
	VNode* newVnode = beforePatch(initState);
	VNode* result = patch(oldVnode, newVnode);
	afterPatch(result);
};

void render(Todos initState, emscripten::val oldVnode) {
	VNode* newVnode = beforePatch(initState);
	VNode* result = patch(oldVnode, newVnode);
	afterPatch(result);
};

int main() {
	asmdomConfig config = asmdomConfig();
	init(config);

	EM_ASM(
		window['todomvc'] = {
			'onhashchange': Module['onhashchange'],
		};
	);

	render(
		todomvc::todos::init(),
		emscripten::val::global("document").call<emscripten::val>(
			"querySelector",
			std::string(".todoapp")
		)
	);
	return 0;
};

EMSCRIPTEN_BINDINGS(app) {
  emscripten::function("onhashchange", &onhashchange);
};
