#ifndef asmdom_todomvc_todos_hpp
#define asmdom_todomvc_todos_hpp

#include "../../../../src/cpp/asm-dom.hpp"
#include "task.hpp"
#include <functional>
#include <vector>
#include <string>

using namespace asmdom;
using namespace todomvc::task;

namespace todomvc {
	namespace todos {

		enum TodoFilter { completed, active, all };
		struct Todos {
			int nextID;
			std::string editingTitle;
			std::vector<Task> tasks;
			TodoFilter filter;
		};

		typedef std::function<Todos(Todos)> action;

		VNode* view(Todos task, std::function<void(action)> handler);
		Todos init();
		Todos init(std::vector<Task> tasks);
		Todos update(Todos todos, action act);
		
		namespace Action {

			action Add(std::string title);
			action Remove(int id);
			action Archive();
			action ToggleAll(bool done);
			action Filter(TodoFilter filter);
			action Modify(int id, todomvc::task::action act);

		}
	}
}

#endif