#include "toVNode.hpp"
#include "../VNode/VNode.hpp"
#include "../h/h.hpp"
#include <emscripten/val.h>
#include <algorithm>
#include <string>

namespace asmdom {

	VNode* toVNode(const emscripten::val& node) {
		VNode* vnode;
		int nodeType = node["nodeType"].as<int>();
		// isElement
		if (nodeType == 1) {
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
		// isText
		} else if (nodeType == 3) {
			vnode = h(node["textContent"].as<std::string>(), true);
		// isComment
		} else if (nodeType == 8) {
			vnode = h("!", node["textContent"].as<std::string>());
		} else {
			vnode = h("");
		}
		vnode->elm = emscripten::val::module_property("addNode")(node).as<int>();
		return vnode;
	};

}
