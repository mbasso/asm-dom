#include "h.hpp"
#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"
#include "../Val/Val.hpp"
#include <vector>
#include <string.h>

void addNS(struct VNode* vnode) {
	vnode->data->ns = "http://www.w3.org/2000/svg";
  if (strcmp(vnode->sel, (char*)"foreignObject") && !vnode->children.empty()) {
		for(auto const& value: vnode->children) {
			if (value->data != NULL) {
				addNS(value);
			}
		}
  }
}

struct VNode* adjustVNode(struct VNode* vnode) {
	if (
    strlen(vnode->sel) >= 3 && vnode->sel[0] == 's' && vnode->sel[1] == 'v' && vnode->sel[2] == 'g' &&
    (strlen(vnode->sel) == 3 || vnode->sel[3] == '.' || vnode->sel[3] == '#')
  ) {
    addNS(vnode);
  }
	return vnode;
}

struct VNode* H::h(const char* sel) {
	struct VNode* vnode = new VNode;
	vnode->sel = sel;
	return adjustVNode(vnode);
};

struct VNode* H::h(const char* text, bool isText) {
	struct VNode* vnode;
	if (isText) {
		vnode = new VNode;
		vnode->text = text;
	} else {
		vnode = H::h(text);
	}
	return adjustVNode(vnode);
};

struct VNode* H::h(const char* sel, struct VNode* node) {
	struct VNode* vnode = H::h(sel);
	vnode->children = std::vector<struct VNode*> { node };
	return adjustVNode(vnode);
};

struct VNode* H::h(const char* sel, const char* text) {
	struct VNode* vnode = H::h(sel);
	vnode->text = text;
	return adjustVNode(vnode);
};

struct VNode* H::h(const char* sel, struct VNodeData* data) {
	struct VNode* vnode = H::h(sel);
	vnode->data = data;
	return adjustVNode(vnode);
};

struct VNode* H::h(const char* sel, std::vector<struct VNode*> children) {
	struct VNode* vnode = H::h(sel);
	vnode->children = children;
	return adjustVNode(vnode);
};

struct VNode* H::h(const char* sel, struct VNodeData* data, struct VNode* node) {
	struct VNode* vnode = H::h(sel, data);
	vnode->children = std::vector<struct VNode*> { node };
	return adjustVNode(vnode);
};

struct VNode* H::h(const char* sel, struct VNodeData* data, const char* text) {
	struct VNode* vnode = H::h(sel, data);
	vnode->text = text;
	return adjustVNode(vnode);
};

struct VNode* H::h(const char* sel, struct VNodeData* data, std::vector<struct VNode*> children) {
	struct VNode* vnode = H::h(sel, data);
	vnode->children = children;
	return adjustVNode(vnode);
};
