#include "VNodeData.hpp"

EMSCRIPTEN_BINDINGS(vnodedata) {
  emscripten::register_map<std::string, std::string>("MapIntInt");

  emscripten::class_<VNodeData>("VNodeData")
    .constructor<>()
    .property("key", &VNodeData::key)
    .property("ns", &VNodeData::ns)
    .property("attrs", &VNodeData::attrs);
}