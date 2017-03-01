#include "../HtmlDOMApi/HtmlDOMApi.hpp"
#include "../VNode/VNode.hpp"
#include "../Val/Val.hpp"
#include <algorithm>
#include <string>

struct VNode* toVNode(const val node) {
	struct VNode* vnode = new VNode;
	if (isElement(node)) {
		// TODO
		/*
		std::string id;
		if (!node["id"].as<std::string>.empty()) {
			id.append("#");
			id.append(node["id"].as<std::string>);
		}
		std::string c = node.call<std::string>("getAttribute", std::string("class"));
		if (!c.empty()) {
			std::replace(c.begin(), c.end(), ' ', '.');
		}
		*/
	} else if (isText(node)) {
		vnode->elm = node;
		vnode->text = getTextContent(node);
	} else if (isComment(node)) {
		vnode->sel = std::string("!");
		vnode->text = getTextContent(node);
	} else {

	}
	return vnode;
};
