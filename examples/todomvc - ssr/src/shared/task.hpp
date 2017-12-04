#ifndef asmdom_todomvc_task_hpp
#define asmdom_todomvc_task_hpp

#include "../../../../src/cpp/asm-dom.hpp"
#include <functional>
#include <string>

using namespace asmdom;

namespace todomvc {
	namespace task {

		struct Task {
			int id;
			std::string title;
			bool done;
			bool editing;
			std::wstring editingValue;
		};

		typedef std::function<Task(Task)> action;

		VNode* view(Task task, std::function<void(action)>, std::function<void(int)> remove);
		Task init(int id, std::string title);
		Task update(Task task, action act);
		
		namespace Action {

			action Toggle (bool done);
			action StartEdit();
			action CommitEdit(std::string title);
			action CancelEdit();

		}
	}
}

#endif