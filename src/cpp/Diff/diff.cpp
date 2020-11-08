#include "diff.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten.h>
#include <emscripten/val.h>
#include <iterator>
#include <cstdint>
#include <map>

namespace asmdom {

	void diffAttrs(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		Attrs& oldAttrs = oldVnode->data.attrs;
		Attrs& attrs = vnode->data.attrs;

		for (const auto& it : oldAttrs) {
			if (!attrs.count(it.first)) {
				direct::removeAttribute(vnode->elm, it.first.c_str());
			}
		}

		for (const auto& it : attrs) {
			if (!oldAttrs.count(it.first) || oldAttrs[it.first] != it.second) {
				direct::setAttribute(vnode->elm, it.first.c_str(), it.second.c_str());
			}
		}
	};

	#ifndef ASMDOM_JS_SIDE

	void diffProps(const VNode* __restrict__ const oldVnode, const VNode* __restrict__ const vnode) {
		const Props& oldProps = oldVnode->data.props;
		const Props& props = vnode->data.props;

		emscripten::val elm = emscripten::val::module_property("nodes")[vnode->elm];

		EM_ASM_({
			Module['nodes'][$0]['asmDomRaws'] = {};
		}, vnode->elm);

		for (const auto& it : oldProps) {
			if (!props.count(it.first)) {
				elm.set(it.first.c_str(), emscripten::val::undefined());
			}
		}

		for (const auto& it : props) {
			EM_ASM_({
				Module['nodes'][$0]['asmDomRaws'][Module['UTF8ToString']($1)] = true;
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

		for (const auto& it : oldCallbacks) {
			if (!callbacks.count(it.first) && it.first != "ref") {
				EM_ASM_({
					var key = Module['UTF8ToString']($1).replace(/^on/, "");
					var elm = Module['nodes'][$0];
					elm.removeEventListener(
						key,
						Module['eventProxy'],
						false
					);
					delete elm['asmDomEvents'][key];
				}, vnode->elm, it.first.c_str());
			}
		}

		EM_ASM_({
			var elm = Module['nodes'][$0];
			elm['asmDomCallbacks'] = $1;
			if (elm['asmDomEvents'] === undefined) {
				elm['asmDomEvents'] = {};
			}
		}, vnode->elm, reinterpret_cast<std::uintptr_t>(&vnode->data.callbacks));

		for (const auto& it : callbacks) {
			if (!oldCallbacks.count(it.first) && it.first != "ref") {
				EM_ASM_({
					var key = Module['UTF8ToString']($1).replace(/^on/, "");
					var elm = Module['nodes'][$0];
					elm.addEventListener(
						key,
						Module['eventProxy'],
						false
					);
					elm['asmDomEvents'][key] = true;
				}, vnode->elm, it.first.c_str());
			}
		}

		if (vnode->hash & hasRef) {
			bool(*const* callback)(emscripten::val) = callbacks.at("ref").target<bool(*)(emscripten::val)>();
			bool(*const* oldCallback)(emscripten::val) = oldVnode->hash & hasRef ? oldCallbacks.at("ref").target<bool(*)(emscripten::val)>() : NULL;
			if (!callback || !oldCallback || *oldCallback != *callback) {
				if (oldVnode->hash & hasRef) {
					oldCallbacks.at("ref")(emscripten::val::null());
				}
				callbacks.at("ref")(
					emscripten::val::module_property("nodes")[vnode->elm]
				);
			}
		} else if (oldVnode->hash & hasRef) {
			oldCallbacks.at("ref")(emscripten::val::null());
		}
	};

	#endif

	void diff(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
		const unsigned int vnodes = vnode->hash | oldVnode->hash;

		if (vnodes & hasAttrs) diffAttrs(oldVnode, vnode);

		#ifdef ASMDOM_JS_SIDE
			EM_ASM_({
				Module['diff']($0, $1, $2);
			}, reinterpret_cast<std::uintptr_t>(oldVnode), reinterpret_cast<std::uintptr_t>(vnode), vnode->elm);
		#else
			if (vnodes & hasProps) diffProps(oldVnode, vnode);
			if (vnodes & hasCallbacks) diffCallbacks(oldVnode, vnode);
		#endif
	};

}
