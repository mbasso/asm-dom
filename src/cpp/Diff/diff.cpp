#include "diff.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten.h>
#include <emscripten/val.h>
#include <iterator>
#include <cstdint>
#include <map>

namespace asmdom {

	const std::string emptyString;

	void diffAttrs(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		Attrs& oldAttrs = oldVnode->data.attrs;
		Attrs& attrs = vnode->data.attrs;

		if (oldAttrs.empty() && attrs.empty()) return;

		for (const auto& it : oldAttrs) {
			if (!attrs.count(it.first)) {
				EM_ASM_({
					window['asmDomHelpers']['domApi']['removeAttribute'](
						$0,
						Module['UTF8ToString']($1)
					);
				}, vnode->elm, it.first.c_str());
			}
		}

		for (const auto& it : attrs) {
			if (!oldAttrs.count(it.first) || oldAttrs[it.first] != it.second) {
				#ifndef ASMDOM_JS_SIDE
					if (it.second == "false") {
						EM_ASM_({
							window['asmDomHelpers']['domApi']['removeAttribute'](
								$0,
								Module['UTF8ToString']($1)
							);
						}, vnode->elm, it.first.c_str());
					} else {
				#endif
					
					EM_ASM_({
						window['asmDomHelpers']['domApi']['setAttribute'](
							$0,
							Module['UTF8ToString']($1),
							Module['UTF8ToString']($2)
						);
					}, vnode->elm, it.first.c_str(), it.second == "true" ? emptyString.c_str() : it.second.c_str());
				
				#ifndef ASMDOM_JS_SIDE
					}
				#endif
			}
		}
	};

	#ifndef ASMDOM_JS_SIDE

	void diffProps(const VNode* __restrict__ const oldVnode, const VNode* __restrict__ const vnode) {
		const Props& oldProps = oldVnode->data.props;
		const Props& props = vnode->data.props;

		if (oldProps.empty() && props.empty()) return;

		emscripten::val elm = emscripten::val::global("window")["asmDomHelpers"]["nodes"][vnode->elm];

		EM_ASM_({
			window['asmDomHelpers']['nodes'][$0]['asmDomRaws'] = [];
		}, vnode->elm);

		for (const auto& it : oldProps) {
			if (!props.count(it.first)) {
				elm.set(it.first.c_str(), emscripten::val::undefined());
			}
		}

		for (const auto& it : props) {
			EM_ASM_({
				window['asmDomHelpers']['nodes'][$0]['asmDomRaws'].push(Module['UTF8ToString']($1));
			}, vnode->elm, it.first.c_str());

			if (
				!oldProps.count(it.first) ||
				!it.second.strictlyEquals(oldProps.at(it.first)) ||
				(
					(it.first == "value" || it.first == "checked") && 
					!it.second.strictlyEquals(elm[it.first.c_str()])
				)
			) {
				elm.set(it.first.c_str(), it.second);
			}
		}
	};

	void diffCallbacks(const VNode* __restrict__ const oldVnode, const VNode* __restrict__ const vnode) {
		const Callbacks& oldCallbacks = oldVnode->data.callbacks;
		const Callbacks& callbacks = vnode->data.callbacks;

		if (oldCallbacks.empty() && callbacks.empty()) return;

		for (const auto& it : oldCallbacks) {
			if (!callbacks.count(it.first)) {
				EM_ASM_({
					var key = Module['UTF8ToString']($1).replace(/^on/, "");
					var elm = window['asmDomHelpers']['nodes'][$0];
					elm.removeEventListener(
						key,
						window['asmDomHelpers']['eventProxy'],
						false
					);
					delete elm['asmDomEvents'][key];
				}, vnode->elm, it.first.c_str());
			}
		}

		EM_ASM_({
			var elm = window['asmDomHelpers']['nodes'][$0];
			elm.asmDomVNode = $1;
			if (elm['asmDomEvents'] === undefined) {
				elm['asmDomEvents'] = {};
			}
		}, vnode->elm, reinterpret_cast<std::uintptr_t>(vnode));

		for (const auto& it : callbacks) {
			if (!oldCallbacks.count(it.first)) {
				EM_ASM_({
					var key = Module['UTF8ToString']($1).replace(/^on/, "");
					var elm = window['asmDomHelpers']['nodes'][$0];
					elm.addEventListener(
						key,
						window['asmDomHelpers']['eventProxy'],
						false
					);
					elm['asmDomEvents'][key] = window['asmDomHelpers']['eventProxy'];
				}, vnode->elm, it.first.c_str());
			}
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
