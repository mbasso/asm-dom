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

		if (!node["id"].as<std::string>().empty()) {
			vnode->sel += '#';
			vnode->sel.append(node["id"].as<std::string>());
		}

		emscripten::val nodeClass = node.call<emscripten::val>("getAttribute", std::string("class"));
		if (nodeClass.typeOf().as<std::string>().compare("string") == 0) {
			vnode->sel += '.';
			vnode->sel.append(nodeClass.as<std::string>());
			std::replace(vnode->sel.begin(), vnode->sel.end(), ' ', '.');
		}

		int i = 0;
		int n = node["attributes"]["length"].as<int>();
		for(; i < n; i++) {
			std::string name = node["attributes"][i]["nodeName"].as<std::string>();
			if (name.compare("id") != 0 && name.compare("class") != 0) {
				vnode->data.attrs.insert(std::make_pair(name, node["attributes"][i]["nodeValue"].as<std::string>()));
			}
		}

		i = 0;
		n = node["childNodes"]["length"].as<int>();
		for(; i < n; i++) {
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
