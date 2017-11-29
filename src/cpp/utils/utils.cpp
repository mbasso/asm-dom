#ifdef ASMDOM_JS_SIDE
	#include "utils.hpp"
	#include <string>
	#include <codecvt>
	#include <locale>

	namespace asmdom {

		std::wstring utf8_to_wstring(const std::string& str) {
			std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
			return converter.from_bytes(str);
		};

		std::string wstring_to_utf8(const std::wstring& str) {
			std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
			return converter.to_bytes(str);
		};

	}
#endif