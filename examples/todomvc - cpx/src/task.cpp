#include "../../../src/cpp/asm-dom.hpp"
#include "task.hpp"
#include "helpers.hpp"
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
			Callback onDestroy = [remove, task](emscripten::val e) {
				remove(task.id);
				return true;
			};

			Callback startEdit = [handler](emscripten::val e) -> bool {
				handler(Action::StartEdit());
				return true;
			};
			Callback onEdit = [handler](emscripten::val e) -> bool {
				std::string value = wstring_to_utf8(e["target"]["value"].as<std::wstring>());
				if (e["keyCode"].as<int>() == KEY_ENTER && !value.empty()) {
					handler(Action::CommitEdit(value));
				}
				return true;
			};
			Callback cancelEdit = [handler](emscripten::val e) -> bool {
				handler(Action::CancelEdit());
				return true;
			};

			Callback toggle = [handler](emscripten::val e) -> bool {
				handler(Action::Toggle(targetChecked(e)));
				return true;
			};

			return (
				<li
					key={std::to_string(task.id)}
					class={classnames({
						{"completed", task.done && !task.editing},
						{"editing", task.editing}
					})}
				>
					<div class="view">
						<input
							type="checkbox"
							class="toggle"
							checked={task.done}
							onclick={toggle}
						/>
						<label ondblclick={startEdit}>{{ task.title }}</label>
						<button
							class="destroy"
							onclick={onDestroy}
						/>
					</div>
					<input
						class="edit"
						value={task.editingValue}	
						onblur={cancelEdit}
						onkeydown={onEdit}
					/>
				</li>
			);
		};

		Task init(int id, std::string title) {
			Task model;
			model.id = id;
			model.title = title;
			model.done = false;
			model.editing = false;
			model.editingValue = L"";
			return model;
		};

		Task update(Task model, action act) {
			return act(model);
		};

	}

}