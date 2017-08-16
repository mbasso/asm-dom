#include "./todos.hpp"
#include "./task.hpp"
#include "./helpers.hpp"
#include <emscripten/val.h>
#include <functional>
#include <vector>
#include <string>

using namespace todomvc::helpers;

namespace todomvc {

	namespace todos {

		namespace Action {

			action Add(std::string title) {
				return [title](Todos model) -> Todos {
					model.tasks.push_back(todomvc::task::init(model.nextID, title));
					model.editingTitle = std::string("");
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
			int remaining = 0;
			for(std::vector<Task>::size_type i = 0; i < tasks.size(); ++i) {
				if (!tasks[i].done) {
					++remaining;
				}
			}
			return remaining;
		};

		std::vector<Task> filteredTodos(const std::vector<Task>& tasks, const TodoFilter& filter) {
			if (filter == all) return tasks;

			std::vector<Task> filtered = std::vector<Task>();
			for(std::vector<Task>::size_type i = 0; i < tasks.size(); ++i) {
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

			return h("section",
				Data(
					Attrs {
						{"class", "todoapp"}
					},
					Callbacks {
						{"onclick", onClick}
					}
				),
				Children {
					h("header",
						Data(
							Attrs {
								{"class", "header"}
							}
						),
						Children {
							h(std::string("h1"), std::string("todos")),
							h("input",
								Data(
									Attrs {
										{"id", "new-todo"},
										{"class", "new-todo"},
										{"placeholder", "What needs to be done?"}
									},
									Props {
										{"value", emscripten::val(model.editingTitle)}
									},
									Callbacks {
										{"onkeydown", [handler](emscripten::val e) -> bool {
											std::string value = wstring_to_utf8(e["target"]["value"].as<std::wstring>());
											if (e["keyCode"].as<int>() == KEY_ENTER && !value.empty()) {
												handler(Action::Add(value));
											}
											return true;
										}}
									}
								)
							)
						}
					),
					h("section",
						Data(
							Attrs {
								{"class", "main"},
								{"style", "display: " + std::string(model.tasks.size() > 0 ? "block" : "none")}
							}
						),
						Children {
							h("input",
								Data(
									Attrs {
										{"class", "toggle-all"},
										{"type", "checkbox"}
									},
									Props {
										{"checked", emscripten::val(remaining == 0)}
									},
									Callbacks {
										{"onclick", [handler](emscripten::val e) -> bool {
											handler(Action::ToggleAll(targetChecked(e)));
											return true;
										}}
									}
								)
							),
							h("ul",
								Data(
									Attrs {
										{"class", "todo-list"}
									}
								),
								tasksViews
							)
						}
					),
					h("footer",
						Data(
							Attrs {
								{"class", "footer"},
								{"style", "display: " + std::string(model.tasks.size() > 0 ? "block" : "none")}
							}
						),
						Children {
							h("span",
								Data(
									Attrs {
										{"class", "todo-count"}
									}
								),
								Children {
									h(std::string("strong"), std::to_string(remaining)),
									h(std::string(" item" + std::string(remaining == 1 ? "" : "s") + " left"), true)
								}
							),
							h("ul",
								Data(
									Attrs {
										{"class", "filters"}
									}
								),
								Children {
									h("li",
										h("a",
											Data(
												Attrs {
													{"class", model.filter == all ? "selected" : ""},
													{"href", "#/"}
												}
											),
											std::string("All")
										)
									),
									h("li",
										h("a",
											Data(
												Attrs {
													{"class", model.filter == active ? "selected" : ""},
													{"href", "#/active"}
												}
											),
											std::string("Active")
										)
									),
									h("li",
										h("a",
											Data(
												Attrs {
													{"class", model.filter == completed ? "selected" : ""},
													{"href", "#/completed"}
												}
											),
											std::string("Completed")
										)
									)
								}
							),
							h("button",
								Data(
									Attrs {
										{"class", "clear-completed"},
										{"style", "display: " + std::string(model.tasks.size() > 0 ? "block" : "none")}
									},
									Callbacks {
										{"onclick", [handler](emscripten::val e) -> bool {
											handler(Action::Archive());
											return true;
										}}
									}
								),
								std::string("Clear completed")
							)
						}
					)
				}
			);
		};

		Todos init() {
			return init(std::vector<Task>());
		};

		Todos init(std::vector<Task> tasks) {
			int nextID = 0;
			for (auto it = tasks.begin(); it != tasks.end(); ++it) {
				if (nextID < it->id) {
					nextID = it->id;
				}
			}
			++nextID;
			return {
				.nextID = nextID,
				.tasks = tasks,
				.editingTitle = std::string(""),
				.filter = all,
			};
		};

		Todos update(Todos todos, action act) {
			return act(todos);
		};

	}

}
