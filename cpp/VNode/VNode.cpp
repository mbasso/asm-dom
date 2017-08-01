#include "VNode.hpp"
#include <emscripten/val.h>
#include <emscripten/bind.h>
#include <cstdint>
#include <string>

namespace asmdom {

	void addNS(VNode* vnode) {
		if (vnode->data == NULL) {
			vnode->data = new VNodeData();
		}

		vnode->data->attrs.insert(std::make_pair("ns", "http://www.w3.org/2000/svg"));
		if (vnode->sel.compare("foreignObject") != 0 && !vnode->children.empty()) {
			for(std::vector<VNode*>::size_type i = 0; i != vnode->children.size(); ++i) {
				addNS(vnode->children[i]);
			}
		}
	}

	void VNode::adjustVNode() {
		if (data != NULL && data->attrs.count(std::string("key")) != 0) {
			key = data->attrs.at(std::string("key"));
		}

		if (sel[0] == 's' && sel[1] == 'v' && sel[2] == 'g') {
			addNS(this);
		}

		children.erase(std::remove(children.begin(), children.end(), (VNode*)NULL), children.end());
	};

	void VNode::removeChild(VNode* child) {
		children.erase(std::remove(children.begin(), children.end(), child), children.end());
	};

	void VNode::replaceChild(VNode* oldChild, VNode* newChild) {
		std::replace(children.begin(), children.end(), oldChild, newChild);
	};

	void deleteVNode(VNode* vnode) {
    delete vnode->data;
    vnode->data = NULL;
    std::vector<VNode*>::size_type i = vnode->children.size();
    while (i--) deleteVNode(vnode->children[i]);
    delete vnode;
  };

	#ifndef ASMDOM_JS_SIDE

	emscripten::val functionCallback(const std::uintptr_t& vnode, const std::string& callback, emscripten::val event) {
		return emscripten::val(reinterpret_cast<VNode*>(vnode)->data->callbacks.at(callback)(event));
	};

	EMSCRIPTEN_BINDINGS(function_callback) {
		emscripten::function("functionCallback", &functionCallback, emscripten::allow_raw_pointers());
	};

	#endif

}
