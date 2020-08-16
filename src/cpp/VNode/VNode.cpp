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

	void VNode::normalize(const bool injectSvgNamespace) {
		if (!(hash & isNormalized)) {
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

				bool addNS = injectSvgNamespace || (sel[0] == 's' && sel[1] == 'v' && sel[2] == 'g');
				if (addNS) {
					hash |= hasNS;
					ns = "http://www.w3.org/2000/svg";
				}

				if (!data.attrs.empty()) hash |= hasAttrs;
				#ifndef ASMDOM_JS_SIDE
					if (!data.props.empty()) hash |= hasProps;
					if (!data.callbacks.empty()) hash |= hasCallbacks;
				#endif
				if (!children.empty()) {
					hash |= hasDirectChildren;

					Children::size_type i = children.size();
					while (i--) {
						children[i]->normalize(
							addNS && sel != "foreignObject"
						);
					}
				}

				if (sel[0] == '\0') {
					hash |= isFragment;
				} else {
					if (hashes[sel] == 0) {
						hashes[sel] = ++currentHash;
					}

					hash |= (hashes[sel] << 13) | isElement;

					#ifndef ASMDOM_JS_SIDE
						if ((hash & hasCallbacks) && data.callbacks.count("ref")) {
							hash |= hasRef;
						}
					#endif
				}
			}

			hash |= isNormalized;
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
