#include "VNode.hpp"
#include <emscripten/bind.h>

EMSCRIPTEN_BINDINGS(vnode) {
  emscripten::class_<VNode>("VNode")
    .constructor<>()
    .property("sel", &VNode::sel)
    .property("key", &VNode::key)
    .property("text", &VNode::text)
    .property("data", &VNode::data)
    .property("children", &VNode::children);
  
  emscripten::register_vector<VNode>("VNodeVector");
}
