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

			VNodeChildren tasksViews = VNodeChildren();
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

			return new VNode("section",
				new VNodeData(
					VNodeAttrs {
						{"class", "todoapp"}
					},
					VNodeCallbacks {
						{"onclick", onClick}
					}
				),
				VNodeChildren {
					new VNode("header",
						new VNodeData(
							VNodeAttrs {
								{"class", "header"}
							}
						),
						VNodeChildren {
							new VNode(std::string("h1"), std::string("todos")),
							new VNode("input",
								new VNodeData(
									VNodeAttrs {
										{"id", "new-todo"},
										{"class", "new-todo"},
										{"placeholder", "What needs to be done?"}
									},
									VNodeProps {
										{"value", emscripten::val(model.editingTitle)}
									},
									VNodeCallbacks {
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
					new VNode("section",
						new VNodeData(
							VNodeAttrs {
								{"class", "main"},
								{"style", "display: " + std::string(model.tasks.size() > 0 ? "block" : "none")}
							}
						),
						VNodeChildren {
							new VNode("input",
								new VNodeData(
									VNodeAttrs {
										{"class", "toggle-all"},
										{"type", "checkbox"}
									},
									VNodeProps {
										{"checked", emscripten::val(remaining == 0)}
									},
									VNodeCallbacks {
										{"onclick", [handler](emscripten::val e) -> bool {
											handler(Action::ToggleAll(targetChecked(e)));
											return true;
										}}
									}
								)
							),
							new VNode("ul",
								new VNodeData(
									VNodeAttrs {
										{"class", "todo-list"}
									}
								),
								tasksViews
							)
						}
					),
					new VNode("footer",
						new VNodeData(
							VNodeAttrs {
								{"class", "footer"},
								{"style", "display: " + std::string(model.tasks.size() > 0 ? "block" : "none")}
							}
						),
						VNodeChildren {
							new VNode("span",
								new VNodeData(
									VNodeAttrs {
										{"class", "todo-count"}
									}
								),
								VNodeChildren {
									new VNode(std::string("strong"), std::to_string(remaining)),
									new VNode(std::string(" item" + std::string(remaining == 1 ? "" : "s") + " left"), true)
								}
							),
							new VNode("ul",
								new VNodeData(
									VNodeAttrs {
										{"class", "filters"}
									}
								),
								VNodeChildren {
									new VNode("li",
										new VNode("a",
											new VNodeData(
												VNodeAttrs {
													{"class", model.filter == all ? "selected" : ""},
													{"href", "#/"}
												}
											),
											std::string("All")
										)
									),
									new VNode("li",
										new VNode("a",
											new VNodeData(
												VNodeAttrs {
													{"class", model.filter == active ? "selected" : ""},
													{"href", "#/active"}
												}
											),
											std::string("Active")
										)
									),
									new VNode("li",
										new VNode("a",
											new VNodeData(
												VNodeAttrs {
													{"class", model.filter == completed ? "selected" : ""},
													{"href", "#/completed"}
												}
											),
											std::string("Completed")
										)
									)
								}
							),
							new VNode("button",
								new VNodeData(
									VNodeAttrs {
										{"class", "clear-completed"},
										{"style", "display: " + std::string(model.tasks.size() > 0 ? "block" : "none")}
									},
									VNodeCallbacks {
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
