#include "VNode.hpp"
#ifndef ASMDOM_JS_SIDE
	#include <emscripten/val.h>
	#include <emscripten/bind.h>
#endif
#include <cstdint>
#include <string>
#include <functional>
#include <unordered_map>

namespace asmdom {

	std::hash<std::string> hasher;
	std::unordered_map<std::string, std::size_t> hashes;

	void addNS(VNode* const vnode) {
		vnode->data.attrs["ns"] = "http://www.w3.org/2000/svg";
		if (vnode->sel != "foreignObject" && !vnode->children.empty()) {
			for(std::vector<VNode*>::size_type i = 0, j = vnode->children.size(); i != j; ++i) {
				addNS(vnode->children[i]);
			}
		}
	};

	void VNode::normalize() {
		if (sel[0] == '!') {
			nt = comment;
		} else if (sel[0] == '\0') {
			nt = fragment;
		} else {
			nt = element;
		}
		selHash = hashes[sel];
		if (selHash == 0) {
			selHash = hasher(sel);
			hashes[sel] = selHash;
		}

		if (data.attrs.count("key") != 0) {
			key = data.attrs["key"];
			data.attrs.erase("key");
		}

		if (sel[0] == 's' && sel[1] == 'v' && sel[2] == 'g') {
			addNS(this);
		}

		children.erase(std::remove(children.begin(), children.end(), (VNode*)NULL), children.end());
	};

	void deleteVNode(const VNode* const vnode) {
		if (!vnode->cleanChildren) {
			Children::size_type i = vnode->children.size();
			while (i--) deleteVNode(vnode->children[i]);
		}
		delete vnode;
  };

	VNode::~VNode() {
		if (cleanChildren) {
			Children::size_type i = children.size();
			while (i--) delete children[i];
		}
  };

	#ifndef ASMDOM_JS_SIDE

		emscripten::val functionCallback(const std::uintptr_t& vnode, const std::string& callback, emscripten::val event) {
			Callbacks cbs = reinterpret_cast<VNode*>(vnode)->data.callbacks;
			std::string cb = callback;
			if (!cbs.count(callback)) {
				cb = "on" + cb;
			}
			return emscripten::val(cbs[cb](event));
		};

		EMSCRIPTEN_BINDINGS(function_callback) {
			emscripten::function("functionCallback", &functionCallback, emscripten::allow_raw_pointers());
		};

	#endif

}
