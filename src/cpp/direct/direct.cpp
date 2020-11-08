#include "direct.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten.h>
#ifndef ASMDOM_JS_SIDE
	#include <emscripten/bind.h>
	#include <cstdint>
	#include <string>
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
					Module['UTF8ToString']($1),
					Module['UTF8ToString']($0)
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

		#ifndef ASMDOM_JS_SIDE


		void (*setText)(const int, const char*) = &setNodeValue;
		void (*setComment)(const int, const char*) = &setNodeValue;


		void setProperty(const int elm, const char* property, const char* value) {
			EM_ASM_({
				var node = Module['nodes'][$0];
				var key = Module['UTF8ToString']($1);
				if (node['asmDomRaws'] === undefined) {
					node['asmDomRaws'] = {};
				}
				node['asmDomRaws'][key] = true;
				node[key] = Module['UTF8ToString']($2);
			}, elm, property, value);
		};

		void removeProperty(const int elm, const char* property) {
			EM_ASM_({
				var node = Module['nodes'][$0];
				if (node['asmDomRaws'] !== undefined) {
					var key = Module['UTF8ToString']($1);
					delete node['asmDomRaws'][key];
					node[key] = undefined;
				}
			}, elm, property);
		};

		std::uintptr_t allocCallbacks() {
			return reinterpret_cast<std::uintptr_t>(new Callbacks());
		};

		void deleteCallbacks(const std::uintptr_t callbacks) {
			delete reinterpret_cast<Callbacks*>(callbacks);
		};

		void updateCallback(const std::uintptr_t callbacks, const std::uintptr_t callback, const std::string event) {
			Callbacks cbs = *reinterpret_cast<Callbacks*>(callbacks);
			Callback cb = *reinterpret_cast<Callback*>(callback);
			cbs[event] = cb;
		};

		void deleteCallback(const std::uintptr_t callbacks, std::string event) {
			Callbacks cbs = *reinterpret_cast<Callbacks*>(callbacks);
			if (cbs.count(event)) {
				cbs.erase(event);
			} else {
				event = "on" + event;
				if (cbs.count(event)) {
					cbs.erase(event);
				}
			}
		};

		EMSCRIPTEN_BINDINGS(direct_callbacks) {
			emscripten::function("allocCallbacks", &allocCallbacks);
			emscripten::function("deleteCallbacks", &deleteCallbacks);
			emscripten::function("updateCallback", &updateCallback);
			emscripten::function("deleteCallback", &deleteCallback);
		};

		void setCallback(const int elm, const char* event, const Callback callback) {
			EM_ASM_({
				var elm = Module['nodes'][$0];
				var key = Module['UTF8ToString']($1).replace(/^on/, "");

				if (elm['asmDomCallbacks'] === undefined) {
					elm['asmDomDeleteCallbacks'] = true;
					elm['asmDomCallbacks'] = Module['allocCallbacks']();
				}
				Module['updateCallback'](elm['asmDomCallbacks'], $2, key);

				if (elm['asmDomEvents'] === undefined) {
					elm['asmDomEvents'] = {};
				}
				elm['asmDomEvents'][key] = true;

				elm.addEventListener(
					key,
					Module['eventProxy'],
					false
				);
			}, elm, event, reinterpret_cast<std::uintptr_t>(&callback));
		};

		void removeCallback(const int elm, const char* event) {
			EM_ASM_({
				var elm = Module['nodes'][$0];
				if (elm['asmDomEvents'] !== undefined) {
					var key = Module['UTF8ToString']($1).replace(/^on/, "");
					delete elm['asmDomEvents'][key];
					Module['deleteCallback'](this['asmDomCallbacks'], key);
					elm.removeEventListener(
						key,
						Module['eventProxy'],
						false
					);
				}
			}, elm, event);
		};


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


		#endif

	}
}
