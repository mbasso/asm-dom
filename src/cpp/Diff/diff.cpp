#include "diff.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten.h>
#include <emscripten/val.h>
#include <iterator>
#include <cstdint>
#include <map>

namespace asmdom {

	void diffAttrs(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		if (oldVnode->data != NULL) {
			VNodeAttrs::iterator it = oldVnode->data->attrs.begin();
			bool areDataDefined = vnode->data != NULL;
			while (it != oldVnode->data->attrs.end()) {
				if (!areDataDefined || (areDataDefined && vnode->data->attrs.count(it->first) == 0)) {
					EM_ASM_({
						window['asmDomHelpers']['domApi']['removeAttribute'](
							$0,
							window['asmDom']['Pointer_stringify']($1)
						);
					}, vnode->elm, it->first.c_str());
				}
				++it;
			}
		}

		if (vnode->data != NULL) {
			VNodeAttrs::iterator it = vnode->data->attrs.begin();
			bool isAttrDefined;
			bool areDataDefined = oldVnode->data != NULL;
			while (it != vnode->data->attrs.end()) {
				isAttrDefined = areDataDefined && oldVnode->data->attrs.count(it->first) != 0;
				if (!isAttrDefined || (isAttrDefined && oldVnode->data->attrs.at(it->first).compare(it->second) != 0)) {
					#ifndef ASMDOM_JS_SIDE
						if (it->second.compare("false") == 0) {
							EM_ASM_({
								window['asmDomHelpers']['domApi']['removeAttribute'](
									$0,
									window['asmDom']['Pointer_stringify']($1)
								);
							}, vnode->elm, it->first.c_str());
						} else {
					#endif
					
						EM_ASM_({
							window['asmDomHelpers']['domApi']['setAttribute'](
								$0,
								window['asmDom']['Pointer_stringify']($1),
								window['asmDom']['Pointer_stringify']($2)
							);
						}, vnode->elm, it->first.c_str(), it->second.c_str());
					
					#ifndef ASMDOM_JS_SIDE
					}
					#endif
				}
				++it;
			}
		}
	};

	void diffProps(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		emscripten::val elm = emscripten::val::global("window")["asmDomHelpers"]["nodes"][vnode->elm];

		if (oldVnode->data != NULL) {
			VNodeProps::iterator it = oldVnode->data->props.begin();
			bool areDataDefined = vnode->data != NULL;
			while (it != oldVnode->data->props.end()) {
				if (!areDataDefined || (areDataDefined && vnode->data->props.count(it->first) == 0)) {
					elm.set(it->first.c_str(), emscripten::val::undefined());
				}
				++it;
			}
		}

		if (vnode->data != NULL) {
			VNodeProps::iterator it = vnode->data->props.begin();
			bool areDataDefined = oldVnode->data != NULL;
			while (it != vnode->data->props.end()) {
				if (
					(oldVnode->data->props.count(it->first) == 0) ||
					(areDataDefined && !it->second.strictlyEquals(oldVnode->data->props.at(it->first))) ||
					(it->first.compare("value") == 0 && !it->second.strictlyEquals(elm[it->first.c_str()]))
				) {
					elm.set(it->first.c_str(), it->second);
				}
				++it;
			}
		}
	};

	void diffCallbacks(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		emscripten::val elm = emscripten::val::global("window")["asmDomHelpers"]["nodes"][vnode->elm];

		if (oldVnode->data != NULL) {
			VNodeCallbacks::iterator it = oldVnode->data->callbacks.begin();
			bool areDataDefined = vnode->data != NULL;
			while (it != oldVnode->data->callbacks.end()) {
				if (!areDataDefined || (areDataDefined && vnode->data->callbacks.count(it->first) == 0)) {
					elm.set(it->first.c_str(), emscripten::val::undefined());
				}
				++it;
			}
		}

		if (vnode->data != NULL) {
			VNodeCallbacks::iterator it = vnode->data->callbacks.begin();
			while (it != vnode->data->callbacks.end()) {
				elm.set(
					it->first.c_str(),
					emscripten::val::global("window")["asmDomHelpers"].call<emscripten::val>("functionCallback", reinterpret_cast<std::uintptr_t>(vnode), emscripten::val(it->first))
				);
				++it;
			}
		}
	};

	void diff(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		#ifdef ASMDOM_JS_SIDE
			EM_ASM_({
				window['asmDomHelpers']['diff']($0, $1, $2);
			}, reinterpret_cast<std::uintptr_t>(oldVnode), reinterpret_cast<std::uintptr_t>(vnode), vnode->elm);
		#endif

		if (oldVnode->data == NULL && vnode->data == NULL) return;

		diffAttrs(oldVnode, vnode);

		#ifndef ASMDOM_JS_SIDE
			diffProps(oldVnode, vnode);
			diffCallbacks(oldVnode, vnode);
		#endif
		
	};

}
