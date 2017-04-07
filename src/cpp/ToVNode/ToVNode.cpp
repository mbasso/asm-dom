#include "../HtmlDOMApi/HtmlDOMApi.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <algorithm>
#include <string>

VNode* toVNode(const emscripten::val& node) {
	VNode* vnode = new VNode();
	if (isElement(node)) {
		vnode->sel.append(tagName(node));

		int i = 0;
		int n = node["attributes"]["length"].as<int>();
		for(; i < n; ++i) {
			vnode->props.insert(
				std::make_pair(
					node["attributes"][i]["nodeName"].as<std::string>(),
					node["attributes"][i]["nodeValue"].as<std::string>()
				)
			);
		}

		i = 0;
		n = node["childNodes"]["length"].as<int>();
		for(; i < n; ++i) {
			vnode->children.push_back(toVNode(node["childNodes"][i]));
		}
		vnode->elm = node;
	} else if (isText(node)) {
		vnode->elm = node;
		vnode->text = getTextContent(node);
	} else if (isComment(node)) {
		vnode->sel = std::string("!");
		vnode->text = getTextContent(node);
	}
	return vnode;
};

std::size_t toVNodePtr(const emscripten::val& node) {
	return reinterpret_cast<std::size_t>(toVNode(node));
}

EMSCRIPTEN_BINDINGS(to_vnode_function) {
	emscripten::function("toVNode", &toVNodePtr, emscripten::allow_raw_pointer<emscripten::ret_val>());
}
