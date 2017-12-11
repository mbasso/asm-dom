#ifdef ASMDOM_JS_SIDE
	#ifndef asmdom_utils_hpp
	#define asmdom_utils_hpp

	#include <string>

	namespace asmdom {

		std::wstring utf8_to_wstring(const std::string& str);
		std::string wstring_to_utf8(const std::wstring& str);

	}

	#endif
#endif
