#include "VNode.hpp"
#include <vector>

/* struct VNode** VNode::get_children() {
	return &children[0];
}; */

void VNode::set_children(struct VNode** vnodes, int num) {
	children = std::vector<struct VNode*>(vnodes, vnodes + num);
};