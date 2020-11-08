#ifndef asmdom_direct_hpp
#define asmdom_direct_hpp

#include "../VNode/VNode.hpp"

namespace asmdom {
	namespace direct {

		inline int createElement(const char* sel);
		inline int createElementNS(const char* sel, const char* ns);
		inline int createTextNode(const char* text);
		inline int createComment(const char* comment);
		inline int createDocumentFragment();

		inline void appendChild(const int parentElm, const int childElm);

		inline void insertBefore(const int parentElm, const int newElm, const int referenceElm);

		inline void setNodeValue(const int elm, const char* value);

		inline void setAttribute(const int elm, const char* attribute, const char* value);
		inline void removeAttribute(const int elm, const char* attribute);

		#ifndef ASMDOM_JS_SIDE
	
		extern void (*setText)(const int, const char*);
		extern void (*setComment)(const int, const char*);

		void setProperty(const int elm, const char* property, const char* value);
		void removeProperty(const int elm, const char* property);

		void setCallback(const int elm, const char* event, const Callback callback);
		void removeCallback(const int elm, const char* event);

		inline void remove(const int elm);

		inline int parentNode(const int elm);
		inline int nextSibling(const int elm);

		inline void deleteElement(const int elm);

		#endif

	}
}

#endif
