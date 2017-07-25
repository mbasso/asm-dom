#include <string>

namespace todomvc {
	namespace helpers {

		std::string classnames(std::map<std::string, bool> classes) {
			std::string className = "";
			for ( auto it = classes.begin(); it != classes.end(); ++it  ) {
				if (it->second) {
					className.append(it->first);
				}
			}
			return className;
		};
	
	}
}