#include "VNode.hpp"
#include <vector>

void VNode::set_children(struct VNode** vnodes, int num) {
	children = std::vector<struct VNode*>(vnodes, vnodes + num);
};