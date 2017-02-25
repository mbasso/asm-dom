#include "VNode.hpp"
#include "../HtmlDOMApi/HtmlDOMApi.hpp"
#include <emscripten/val.h>

VNode::VNode (char* selector, char* nodeKey)
: sel(selector), key(nodeKey)
{};

char* VNode::getName() {
  return sel;
}
void VNode::setName(char* selector) {
  sel = selector;
}

char* VNode::getKey() {
  return key;
}
void VNode::setKey(char* nodeKey) {
  key = nodeKey;
}

void VNode::render(VNode* node) {
  emscripten::val::global("document")["body"].call<void>("appendChild", createElement(node->getName()));
}