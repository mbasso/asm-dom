#include "diff.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten.h>
#include <emscripten/val.h>
#include <iterator>
#include <cstdint>
#include <map>

namespace asmdom {

	void diffAttrs(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		if (oldVnode->data.attrs.empty() && vnode->data.attrs.empty()) return;

		for (auto& it : oldVnode->data.attrs) {
			if (!vnode->data.attrs.count(it.first)) {
				EM_ASM_({
					window['asmDomHelpers']['domApi']['removeAttribute'](
						$0,
						Module['Pointer_stringify']($1)
					);
				}, vnode->elm, it.first.c_str());
			}
		}

		for (auto& it : vnode->data.attrs) {
			if (!oldVnode->data.attrs.count(it.first) || oldVnode->data.attrs[it.first].compare(it.second)) {
				#ifndef ASMDOM_JS_SIDE
					if (!it.second.compare("false")) {
						EM_ASM_({
							window['asmDomHelpers']['domApi']['removeAttribute'](
								$0,
								Module['Pointer_stringify']($1)
							);
						}, vnode->elm, it.first.c_str());
					} else {
				#endif
					
					EM_ASM_({
						window['asmDomHelpers']['domApi']['setAttribute'](
							$0,
							Module['Pointer_stringify']($1),
							Module['Pointer_stringify']($2)
						);
					}, vnode->elm, it.first.c_str(), it.second.c_str());
				
				#ifndef ASMDOM_JS_SIDE
					}
				#endif
			}
		}
	};

	#ifndef ASMDOM_JS_SIDE

	void diffProps(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		if (oldVnode->data.props.empty() && vnode->data.props.empty()) return;

		emscripten::val elm = emscripten::val::global("window")["asmDomHelpers"]["nodes"][vnode->elm];

		for (auto& it : oldVnode->data.props) {
			if (!vnode->data.props.count(it.first)) {
				elm.set(it.first.c_str(), emscripten::val::undefined());
			}
		}

		for (auto& it : vnode->data.props) {
			if (
				!oldVnode->data.props.count(it.first) ||
				!it.second.strictlyEquals(oldVnode->data.props.at(it.first)) ||
				(!it.first.compare("value") && !it.second.strictlyEquals(elm[it.first.c_str()]))
			) {
				elm.set(it.first.c_str(), it.second);
			}
		}
	};

	void diffCallbacks(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		if (oldVnode->data.callbacks.empty() && vnode->data.callbacks.empty()) return;

		emscripten::val elm = emscripten::val::global("window")["asmDomHelpers"]["nodes"][vnode->elm];

		for (auto& it : oldVnode->data.callbacks) {
			if (!vnode->data.callbacks.count(it.first)) {
				elm.set(it.first.c_str(), emscripten::val::undefined());
			}
		}

		for (auto& it : vnode->data.callbacks) {
			elm.set(
				it.first.c_str(),
				emscripten::val::global("window")["asmDomHelpers"].call<emscripten::val>("functionCallback", reinterpret_cast<std::uintptr_t>(vnode), emscripten::val(it.first))
			);
		}
	};

	#endif

	void diff(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		#ifdef ASMDOM_JS_SIDE
			EM_ASM_({
				window['asmDomHelpers']['diff']($0, $1, $2);
			}, reinterpret_cast<std::uintptr_t>(oldVnode), reinterpret_cast<std::uintptr_t>(vnode), vnode->elm);
		#endif

		diffAttrs(oldVnode, vnode);

		#ifndef ASMDOM_JS_SIDE
			diffProps(oldVnode, vnode);
			diffCallbacks(oldVnode, vnode);
		#endif
		
	};

}
