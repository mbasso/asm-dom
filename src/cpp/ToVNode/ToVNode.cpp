#include "../HtmlDOMApi/HtmlDOMApi.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <algorithm>
#include <string>

VNode to_VNode(const emscripten::val node) {
	VNode vnode = VNode();
	if (isElement(node)) {
		std::string id;
		if (!node["id"].as<std::string>().empty()) {
			id += '#';
			id.append(node["id"].as<std::string>());
		}
		std::string c;
		emscripten::val nodeClass = node.call<emscripten::val>("getAttribute", std::string("class"));
		if (nodeClass.typeOf().as<std::string>().compare(std::string("string")) == 0) {
			c += '.';
			c.append(nodeClass.as<std::string>());
			std::replace(c.begin(), c.end(), ' ', '.');
		}
		vnode.sel.append(tagName(node));
		vnode.sel.append(id);
		vnode.sel.append(c);
		emscripten::val attributes = node["attributes"];
		for(int i = 0, n = attributes["length"].as<int>(); i < n; i++) {
			std::string name = attributes[i]["nodeName"].as<std::string>();
			if (name.compare(std::string("id")) != 0 && name.compare(std::string("class")) != 0) {
				vnode.data.attrs.insert(std::make_pair(name, attributes[i]["nodeValue"].as<std::string>()));
			}
		}
		for(int i = 0, n = node["childNodes"]["length"].as<int>(); i < n; i++) {
			vnode.children.push_back(to_VNode(node["childNodes"][i]));
		}
		vnode.elm = node;
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
