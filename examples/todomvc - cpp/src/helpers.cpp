#include "./helpers.hpp"
#include <codecvt>
#include <locale>
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

		std::string wstring_to_utf8(const std::wstring& str) {
			std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
			return converter.to_bytes(str);
		};
	
	}
}