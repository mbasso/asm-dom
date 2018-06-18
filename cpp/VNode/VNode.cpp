#include "VNode.hpp"
#ifndef ASMDOM_JS_SIDE
	#include <emscripten/val.h>
	#include <emscripten/bind.h>
#endif
#include <cstdint>
#include <string>
#include <unordered_map>

namespace asmdom {

	unsigned int currentHash = 0;
	std::unordered_map<std::string, unsigned int> hashes;

	void addNS(VNode* const vnode) {
		vnode->hash |= hasNS;
		vnode->ns = "http://www.w3.org/2000/svg";
		if ((vnode->hash & hasDirectChildren) && vnode->sel != "foreignObject") {
			for(std::vector<VNode*>::size_type i = 0, j = vnode->children.size(); i != j; ++i) {
				addNS(vnode->children[i]);
			}
		}
	};

	void VNode::normalize() {
		if (data.attrs.count("key")) {
			hash |= hasKey;
			key = data.attrs["key"];
			data.attrs.erase("key");
		}

		if (sel[0] == '!') {
			hash |= isComment;
			sel = "";
		} else {
			children.erase(std::remove(children.begin(), children.end(), (VNode*)NULL), children.end());

			Attrs::iterator it = data.attrs.begin();
			while (it != data.attrs.end()) {
				if (it->first == "ns") {
					hash |= hasNS;
					ns = it->second;
					it = data.attrs.erase(it);
				} else if (it->second == "false") {
					it = data.attrs.erase(it);
				} else {
					if (it->second == "true") {
						it->second = "";
					}
					++it;
				}
			}

			if (!data.attrs.empty()) hash |= hasAttrs;
			#ifndef ASMDOM_JS_SIDE
				if (!data.props.empty()) hash |= hasProps;
				if (!data.callbacks.empty()) hash |= hasCallbacks;
			#endif
			if (!children.empty()) hash |= hasDirectChildren;

			if (sel[0] == '\0') {
				hash |= isFragment;
			} else {
				if (hashes[sel] == 0) {
					hashes[sel] = ++currentHash;
				}

				hash |= (hashes[sel] << 12) | isElement;

				#ifndef ASMDOM_JS_SIDE
					if ((hash & hasCallbacks) && data.callbacks.count("ref")) {
						hash |= hasRef;
					}
				#endif

				if (sel[0] == 's' && sel[1] == 'v' && sel[2] == 'g') {
					addNS(this);
				}
			}
		}
	};

	void deleteVNode(const VNode* const vnode) {
		if (!(vnode->hash & hasText)) {
			Children::size_type i = vnode->children.size();
			while (i--) deleteVNode(vnode->children[i]);
		}
		delete vnode;
  };

	VNode::~VNode() {
		if (hash & hasText) {
			Children::size_type i = children.size();
			while (i--) delete children[i];
		}
  };

	#ifndef ASMDOM_JS_SIDE

		emscripten::val functionCallback(const std::uintptr_t& vnode, std::string callback, emscripten::val event) {
			Callbacks cbs = reinterpret_cast<VNode*>(vnode)->data.callbacks;
			if (!cbs.count(callback)) {
				callback = "on" + callback;
			}
			return emscripten::val(cbs[callback](event));
		};

		EMSCRIPTEN_BINDINGS(function_callback) {
			emscripten::function("functionCallback", &functionCallback, emscripten::allow_raw_pointers());
		};

	#endif

}
