#include "../../../src/cpp/asm-dom.hpp"
#include "./task.hpp"
#include "./helpers.hpp"
#include <emscripten/val.h>
#include <functional>

using namespace asmdom;
using namespace todomvc::helpers;

namespace todomvc {

	namespace task {

		namespace Action {
			action Toggle (bool done) {
				return [done](Task model) -> Task {
					model.done = done;
					return model;
				};
			};

			action StartEdit() {
				return [](Task model) -> Task {
					model.editing = true;
					model.editingValue = utf8_to_wstring(model.title);
					return model;
				};
			};

			action CommitEdit(std::string title) {
				return [title](Task model) -> Task {
					model.title = title;
					model.editing = false;
					model.editingValue = L"";
					return model;
				};
			};

			action CancelEdit() {
				return [](Task model) -> Task {
					model.editing = false;
					model.editingValue = L"";
					return model;
				};
			};
		}

		bool targetChecked(emscripten::val& e) {
			return e["target"]["checked"].as<bool>();
		};

		const int KEY_ENTER = 13;

		VNode* view(Task task, std::function<void(action)> handler, std::function<void(int)> remove) {
			return h("li", 
				Data(
					Attrs {
						{"class", classnames({
							{"completed", task.done && !task.editing},
							{"editing", task.editing}
						})},
						{"key", std::to_string(task.id)}
					}
				),
				Children {
					h("div",
						Data(
							Attrs {
								{"class", "view"}
							}
						),
						Children {
							h("input",
								Data(
									Attrs {
										{"type", "checkbox"},
										{"class", "toggle"},
									},
									Props {
										{"checked", emscripten::val(task.done)}
									},
									Callbacks {
										{"onclick", [handler](emscripten::val e) -> bool {
											handler(Action::Toggle(targetChecked(e)));
											return true;
										}}
									}
								)
							),
							h("label",
								Data(
									Callbacks {
										{"ondblclick", [handler](emscripten::val e) -> bool {
											handler(Action::StartEdit());
											return true;
										}}
									}
								),
								task.title
							),
							h("button",
								Data(
									Attrs {
										{"class", "destroy"},
									},
									Callbacks {
										{"onclick", [remove, task](emscripten::val e) {
											remove(task.id);
											return true;
										}}
									}
								)
							)
						}
					),
					h("input",
						Data(
							Attrs {
								{"class", "edit"},
							},
							Props {
								{"value", emscripten::val(task.editingValue)}
							},
							Callbacks {
								{"onblur", [handler](emscripten::val e) -> bool {
									handler(Action::CancelEdit());
									return true;
								}},
								{"onkeydown", [handler](emscripten::val e) -> bool {
									std::string value = wstring_to_utf8(e["target"]["value"].as<std::wstring>());
									if (e["keyCode"].as<int>() == KEY_ENTER && !value.empty()) {
										handler(Action::CommitEdit(value));
									}
									return true;
								}}
							}
						)
					)
				});
		};

		Task init(int id, std::string title) {
			return {
				.id = id,
				.title = title,
				.done = false,
				.editing = false,
				.editingValue = L""
			};
		};

		Task update(Task model, action act) {
			return act(model);
		};

	}

}