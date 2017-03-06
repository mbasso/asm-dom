#include "h.hpp"
#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/bind.h>
#include <string>

void addNS(VNode vnode) {
	vnode.data.ns = "http://www.w3.org/2000/svg";
  if (vnode.sel.compare(std::string("foreignObject")) && !vnode.children.empty()) {
		for(auto const& value: vnode.children) {
			addNS(value);
		}
  }
}

VNode adjustVNode(VNode vnode) {
	if (
  	vnode.sel.length() >= 3 && vnode.sel[0] == 's' && vnode.sel[1] == 'v' && vnode.sel[2] == 'g' &&
    (vnode.sel.length() == 3 || vnode.sel[3] == '.' || vnode.sel[3] == '#')
  ) {
    addNS(vnode);
  }
	return vnode;
}

VNode h(std::string sel, std::string text, VNodeData data, std::vector<VNode> children) {
	VNode vnode(sel, text, data, children);
	return adjustVNode(vnode);
};

EMSCRIPTEN_BINDINGS(h_function) {
	emscripten::function("h", &h);
}
