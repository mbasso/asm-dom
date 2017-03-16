#include "main.hpp"
#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"
#include "../HtmlDOMApi/HtmlDOMApi.hpp"
#include <algorithm>
#include <vector>
#include <string>

emscripten::val createElm(VNode vnode, std::vector<VNode> insertedVnodeQueue) {
	// TODO: init hook
	if (vnode.sel.compare(std::string("!")) == 0) {
		vnode.elm = createComment(vnode.text);
	} else if (vnode.sel.empty()) {
		vnode.elm = createTextNode(vnode.text);
	} else {
		std::size_t hashIdx = vnode.sel.find('#');
		std::size_t dotIdx = vnode.sel.find('.', hashIdx);
		int hash = hashIdx > 0 ? static_cast<int>(hashIdx) : vnode.sel.length();
		int dot = dotIdx > 0 ? static_cast<int>(dotIdx) : vnode.sel.length();
		std::string tag = hashIdx != -1 || dotIdx != -1 ? vnode.sel.substr(0, std::min(hash, dot)) : vnode.sel;
		vnode.elm = !vnode.data.ns.empty() ? createElementNS(vnode.data.ns, tag) : createElement(tag);

		if (hash < dot) {
			vnode.elm.set("id", emscripten::val(vnode.sel.substr(hash + 1, dot)));
		}
		if (dotIdx > 0) {
			std::string className = vnode.sel.substr(dot + 1);
			std::replace(className.begin(), className.end(), '.', ' ');
			vnode.elm.set("className", emscripten::val(className));
		}
		// TODO: create callback
		if (!vnode.children.empty()) {
			for(std::vector<VNode>::size_type i = 0; i != vnode.children.size(); i++) {
				appendChild(vnode.elm, createElm(vnode.children[i], insertedVnodeQueue));
			}
		} else if (!vnode.text.empty()) {
			appendChild(vnode.elm, createTextNode(vnode.text));
		}
		// TODO: create hook
		// TODO: insert hook
	}
	return vnode.elm;
};

void addVnodes(
	emscripten::val parentElm,
	emscripten::val before,
	std::vector<VNode> vnodes,
	std::vector<VNode>::size_type startIdx,
	std::vector<VNode>::size_type endIdx,
	std::vector<VNode> insertedVnodeQueue
) {
	for (; startIdx <= endIdx; startIdx++) {
		insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
	}
};
