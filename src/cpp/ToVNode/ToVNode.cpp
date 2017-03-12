#include "../HtmlDOMApi/HtmlDOMApi.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/val.h>
// #include <algorithm>
#include <string>

VNode to_VNode(const emscripten::val node) {
	VNode vnode = VNode();
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
		vnode.elm = node;
		vnode.text = getTextContent(node);
	} else if (isComment(node)) {
		vnode.sel = std::string("!");
		vnode.text = getTextContent(node);
	}
	return vnode;
};

EMSCRIPTEN_BINDINGS(to_vnode_function) {
	emscripten::function("toVNode", &to_VNode);
}
