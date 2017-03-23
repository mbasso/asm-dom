#include "VNode.hpp"
#include <emscripten/bind.h>

EMSCRIPTEN_BINDINGS(vnode) {
  emscripten::value_object<VNode>("VNode")
    .field("sel", &VNode::sel)
    .field("key", &VNode::key)
    .field("text", &VNode::text)
    .field("data", &VNode::data)
    .field("elm", &VNode::elm)
    .field("children", &VNode::children);
  
  emscripten::register_vector<VNode>("VNodeVector");
  emscripten::register_vector<std::size_t>("VNodePtrVector");
}
