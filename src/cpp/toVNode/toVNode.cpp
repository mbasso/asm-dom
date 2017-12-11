#include "toVNode.hpp"
#include "../VNode/VNode.hpp"
#include "../h/h.hpp"
#include <emscripten/val.h>
#include <algorithm>
#include <string>

namespace asmdom {

	bool isElement(const emscripten::val& node) {
		return node["nodeType"].as<int>() == 1;
	};

	bool isText(const emscripten::val& node) {
		return node["nodeType"].as<int>() == 3;
	};

	bool isComment(const emscripten::val& node) {
		return node["nodeType"].as<int>() == 8;
	};

	VNode* toVNode(const emscripten::val& node) {
		VNode* vnode;
		if (isElement(node)) {
			std::string sel = node["tagName"].as<std::string>();
			std::transform(sel.begin(), sel.end(), sel.begin(), ::tolower);

			Data data;
			int i = node["attributes"]["length"].as<int>();
			while (i--) {
				data.attrs.insert(
					std::make_pair(
						node["attributes"][i]["nodeName"].as<std::string>(),
						node["attributes"][i]["nodeValue"].as<std::string>()
					)
				);
			}

			Children children;
			i = 0;
			for(int n = node["childNodes"]["length"].as<int>(); i < n; ++i) {
				children.push_back(toVNode(node["childNodes"][i]));
			}

			vnode = h(sel, data, children);
		} else if (isText(node)) {
			vnode = h(node["textContent"].as<std::string>(), true);
		} else if (isComment(node)) {
			vnode = h("!", node["textContent"].as<std::string>());
		} else {
			vnode = h("");
		}
		vnode->elm = emscripten::val::global("window")["asmDomHelpers"]["domApi"].call<int>("addNode", node);
		return vnode;
	};

}
