#include "../../../src/cpp/asm-dom.hpp"
#include "todos.hpp"
#include "task.hpp"
#include "helpers.hpp"
#include <emscripten/val.h>
#include <functional>
#include <algorithm>
#include <vector>
#include <string>

using namespace todomvc::helpers;

namespace todomvc {

	namespace todos {

		namespace Action {

			action Add(std::string title) {
				return [title](Todos model) -> Todos {
					model.tasks.push_back(todomvc::task::init(model.nextID, title));
					model.editingTitle = {};
					++model.nextID;
					return model;
				};
			};

			action Remove(int id) {
				return [id](Todos model) -> Todos {
					model.tasks.erase(
						std::remove_if(
							model.tasks.begin(),
							model.tasks.end(),
							[&id](const Task& o) { return o.id == id; }
						),
						model.tasks.end()
					);
					return model;
				};
			};

			action Archive() {
				return [](Todos model) -> Todos {
					model.tasks.erase(
						std::remove_if(
							model.tasks.begin(),
							model.tasks.end(),
							[](const Task& o) { return o.done; }
						),
						model.tasks.end()
					);
					return model;
				};
			};

			action ToggleAll(bool done) {
				return [done](Todos model) -> Todos {
					for(std::vector<Task>::size_type i = 0; i < model.tasks.size(); ++i) {
						model.tasks[i] = todomvc::task::update(model.tasks[i], todomvc::task::Action::Toggle(done));
					}
					return model;
				};
			};

			action Filter(TodoFilter filter) {
				return [filter](Todos model) -> Todos {
					model.filter = filter;
					return model;
				};
			};

			action Modify(int id, todomvc::task::action act) {
				return [act, id](Todos model) -> Todos {
					for(std::vector<Task>::size_type i = 0; i < model.tasks.size(); ++i) {
						if (model.tasks[i].id == id) {
							model.tasks[i] = todomvc::task::update(model.tasks[i], act);
						}
					}
					return model;
				};
			};

		}

		const int KEY_ENTER = 13;

		bool onClick(emscripten::val e) {
			emscripten::val::global("console").call<void>("log", emscripten::val("clicked"));
			return true;
		};

		int remainingTodos(const std::vector<Task>& tasks) {
			return std::count_if(tasks.begin(), tasks.end(), [] (const Task& t) { return !t.done; });
		};

		std::vector<Task> filteredTodos(const std::vector<Task>& tasks, const TodoFilter& filter) {
			if (filter == all) return tasks;

			std::vector<Task> filtered;
			for(size_t i = 0; i < tasks.size(); ++i) {
				switch(filter) {
						case completed:
							if (tasks[i].done) filtered.push_back(tasks[i]);
							break;
						case active:
							if (!tasks[i].done) filtered.push_back(tasks[i]);
							break;
						default:
							break;
				}
			}
			return filtered;
		};

		VNode* view(Todos model, std::function<void(action)> handler) {
			int remaining = remainingTodos(model.tasks);
			std::vector<Task> filtered = filteredTodos(model.tasks, model.filter);

			Children tasksViews = Children();
			for(std::vector<Task>::size_type i = 0; i < filtered.size(); ++i) {
				Task todo = filtered[i];
				tasksViews.push_back(
					todomvc::task::view(
						todo,
						[handler, todo](std::function<Task(Task)> action) -> void {
							return handler(Action::Modify(todo.id, action));
						},
						[handler](int id) -> void {
							return handler(Action::Remove(id));
						}
					)
				);
			}

			return (
				<section class="todoapp" onclick={onClick}>
					<header class="header">
						<h1>todos</h1>
						<input
							id="new-todo"
							class="new-todo"
							placeholder="What needs to be done?"
							value={model.editingTitle}
							onkeydown={[handler](emscripten::val e) -> bool {
								std::string value = wstring_to_utf8(e["target"]["value"].as<std::wstring>());
								if (e["keyCode"].as<int>() == KEY_ENTER && !value.empty()) {
									handler(Action::Add(value));
								}
								return true;
							}}
						/>
					</header>

					<section
						class="main"
						style={"display: " + std::string(model.tasks.size() > 0 ? "block" : "none")}
					>
            <input
              id="toggle-all"
              class="toggle-all"
              type="checkbox"
              checked={remaining == 0}
              onclick={[handler](emscripten::val e) -> bool {
                handler(Action::ToggleAll(targetChecked(e)));
                return true;
              }}
            />
						<label for="toggle-all" />
						<ul class="todo-list">
							{...tasksViews}
						</ul>
					</section>
					
					<footer 
						class="footer"
						style={"display: " + std::string(model.tasks.size() > 0 ? "block" : "none")}
					>
						<span class="todo-count">
							<strong>{{ std::to_string(remaining) }}</strong>
							{{ " item" + std::string(remaining == 1 ? "" : "s") + " left" }}
						</span>
						<ul class="filters">
							<li><a href="#/" class={model.filter == all ? "selected" : ""}>All</a></li>
							<li><a href="#/active" class={model.filter == active ? "selected" : ""}>Active</a></li>
							<li><a href="#/completed" class={model.filter == completed ? "selected" : ""}>Completed</a></li>
						</ul>
						<button
							class="clear-completed"
							style={"display: " + std::string(model.tasks.size() > 0 ? "block" : "none")}
							onclick={[handler](emscripten::val e) -> bool {
								handler(Action::Archive());
								return true;
							}}
						>
							Clear completed
						</button>
					</footer>
				</section>
			);
		};

		Todos init() {
			return init(std::vector<Task>());
		};

		Todos init(std::vector<Task> tasks) {
			auto it = std::min_element(tasks.begin(), tasks.end(), [] (const Task& a, const Task& b) { return a.id > b.id; });
			Todos model;
			model.nextID = it != tasks.end() ? it->id + 1 : 1;
			model.tasks = tasks;
			model.filter = all;
			return model;
		};

		Todos update(Todos todos, action act) {
			return act(todos);
		};

	}

}
