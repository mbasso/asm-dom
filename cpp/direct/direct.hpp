#ifndef asmdom_direct_hpp
#define asmdom_direct_hpp

#include "../VNode/VNode.hpp"
#include <emscripten.h>
#ifndef ASMDOM_JS_SIDE
	#include <emscripten/val.h>
#endif

namespace asmdom {
	namespace direct {

		inline int createElement(const char* selector) {
			return EM_ASM_INT({
				return Module.createElement(
					Module['UTF8ToString']($0)
				);
			}, selector);
		};

		inline int createElementNS(const char* selector, const char* ns) {
			return EM_ASM_INT({
				return Module.createElementNS(
					Module['UTF8ToString']($0),
					Module['UTF8ToString']($1)
				);
			}, selector, ns);
		};

		inline int createTextNode(const char* text) {
			return EM_ASM_INT({
				return Module.createTextNode(
					Module['UTF8ToString']($0)
				);
			}, text);
		};

		inline int createComment(const char* comment) {
			return EM_ASM_INT({
				return Module.createComment(
					Module['UTF8ToString']($0)
				);
			}, comment);
		};

		inline int createDocumentFragment() {
			return EM_ASM_INT({
				return Module.createDocumentFragment();
			});
		};


		inline void appendChild(const int parentElm, const int childElm) {
			EM_ASM_({
				Module.appendChild($0, $1);
			}, parentElm, childElm);
		};


		inline void insertBefore(const int parentElm, const int newElm, const int referenceElm) {
			EM_ASM_({
				Module.insertBefore($0, $1, $2)
			}, parentElm, newElm, referenceElm);
		};


		inline void setNodeValue(const int elm, const char* value) {
			EM_ASM_({
				Module.setNodeValue(
					$0,
					Module['UTF8ToString']($1)
				);
			}, elm, value);
		};


		inline void setAttribute(const int elm, const char* attribute, const char* value) {
			EM_ASM_({
				Module.setAttribute(
					$0,
					Module['UTF8ToString']($1),
					Module['UTF8ToString']($2)
				);
			}, elm, attribute, value);
		};

		inline void removeAttribute(const int elm, const char* attribute) {
			EM_ASM_({
				Module.removeAttribute(
					$0,
					Module['UTF8ToString']($1)
				);
			}, elm, attribute);
		};

		inline int toElement(emscripten::val element) {
			return emscripten::val::module_property("addNode")(element).as<int>();
		};

		#ifndef ASMDOM_JS_SIDE
	
		extern void (*setText)(const int, const char*);
		extern void (*setComment)(const int, const char*);

		void setProperty(const int elm, const char* property, const emscripten::val value);
		void removeProperty(const int elm, const char* property);

		void setCallback(const int elm, const char* event, const Callback callback);
		void removeCallback(const int elm, const char* event);

		inline void remove(const int elm) {
			EM_ASM_({
				Module.removeChild($0, false);
			}, elm);
		};


		inline int parentNode(const int elm) {
			return EM_ASM_INT({
				return Module.parentNode($0);
			}, elm);
		};

		inline int firstChild(const int elm) {
			return EM_ASM_INT({
				return Module.firstChild($0);
			}, elm);
		};

		inline int nextSibling(const int elm) {
			return EM_ASM_INT({
				return Module.nextSibling($0);
			}, elm);
		};


		inline void deleteElement(const int elm) {
			EM_ASM_({
				Module.deleteElement($0);
			}, elm);
		};

		inline emscripten::val getElement(const int elm) {
			return emscripten::val::module_property("nodes")[elm];
		};

		#endif

	}
}

#endif
