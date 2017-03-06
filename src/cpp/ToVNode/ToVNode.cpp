#include "../HtmlDOMApi/HtmlDOMApi.hpp"
#include "../VNode/VNode.hpp"
#include "../Val/Val.hpp"
#include <algorithm>
#include <string.h>

VNode* toVNode(const val node) {
	VNode* vnode = new VNode;
	if (isElement(node)) {
		// TODO
		/*
		char* id;
		if (!node["id"].as<char*>.empty()) {
			id.append("#");
			id.append(node["id"].as<char*>);
		}
		char* c = node.call<char*>("getAttribute", char*("class"));
		if (!c.empty()) {
			std::replace(c.begin(), c.end(), ' ', '.');
		}
		*/
	} else if (isText(node)) {
		vnode->elm = node;
		vnode->text = getTextContent(node);
	} else if (isComment(node)) {
		vnode->sel = "!";
		vnode->text = getTextContent(node);
	} else {

	}
	return vnode;
};
