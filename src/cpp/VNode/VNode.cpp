#include "VNode.hpp"
#include "../Val/Val.hpp"

struct VNode* vnode (
  const std::string sel,
  const std::string key,
  const std::string text,
  struct VNodeData* const data,
  const val elm,
  const std::vector<struct VNode*> children
) {
	struct VNode* node = new VNode;
	node->sel = sel;
	if (!data->key.empty()) {
		node->key = data->key;
	}
	node->text = text;
	node->data = data;
	node->elm = elm;
	node->children = children;
	return node;
};