#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"
#include "../Val/Val.hpp"
#include <vector>
#include <string>

void addNS(struct VNode* const vnode) {
	vnode->data->ns = "http://www.w3.org/2000/svg";
  if (vnode->sel != std::string("foreignObject") && !vnode->children.empty()) {
		for(auto const& value: vnode->children) {
			if (value->data != NULL) {
				addNS(value);
			}
		}
  }
}

struct VNode* adjustVNode(struct VNode* const vnode) {
	if (
    vnode->sel.at(0) == 's' && vnode->sel.at(1) == 'v' && vnode->sel.at(2) == 'g' &&
    (vnode->sel.length() == 3 || vnode->sel.at(3) == '.' || vnode->sel.at(3) == '#')
  ) {
    addNS(vnode);
  }
	return vnode;
}

struct VNode* h(const std::string sel) {
	struct VNode* vnode = new VNode;
	vnode->sel = sel;
	return adjustVNode(vnode);
};

struct VNode* h(const std::string text, const bool isText) {
	struct VNode* vnode;
	if (isText) {
		vnode = new VNode;
		vnode->text = text;
	} else {
		vnode = h(text);
	}
	return adjustVNode(vnode);
};

struct VNode* h(const std::string sel, struct VNode* const node) {
	struct VNode* vnode = h(sel);
	vnode->children = std::vector<struct VNode*> { node };
	return adjustVNode(vnode);
};

struct VNode* h(const std::string sel, const std::string text) {
	struct VNode* vnode = h(sel);
	vnode->text = text;
	return adjustVNode(vnode);
};

struct VNode* h(const std::string sel, struct VNodeData* const data) {
	struct VNode* vnode = h(sel);
	vnode->data = data;
	return adjustVNode(vnode);
};

struct VNode* h(const std::string sel, const std::vector<struct VNode*> children) {
	struct VNode* vnode = h(sel);
	vnode->children = children;
	return adjustVNode(vnode);
};

struct VNode* h(const std::string sel, struct VNodeData* const data, struct VNode* const node) {
	struct VNode* vnode = h(sel, data);
	vnode->children = std::vector<struct VNode*> { node };
	return adjustVNode(vnode);
};

struct VNode* h(const std::string sel, struct VNodeData* const data, const std::string text) {
	struct VNode* vnode = h(sel, data);
	vnode->text = text;
	return adjustVNode(vnode);
};

struct VNode* h(const std::string sel, struct VNodeData* const data, const std::vector<struct VNode*> children) {
	struct VNode* vnode = h(sel, data);
	vnode->children = children;
	return adjustVNode(vnode);
};
