#include "VNode.hpp"
#include <string>

namespace asmdom {

	void VNode::adjustVNode() {
		// TODO : inject ns for svgs
		if (data != NULL && data->attrs.count(std::string("key")) != 0) {
			key = data->attrs.at(std::string("key"));
		}
	};

	void VNode::removeChild(VNode* child) {
		children.erase(std::remove(children.begin(), children.end(), child), children.end());
	};

	void VNode::replaceChild(VNode* oldChild, VNode* newChild) {
		std::replace(children.begin(), children.end(), oldChild, newChild);
	};

}
