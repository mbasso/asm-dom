#include "VNodeData.hpp"

EMSCRIPTEN_BINDINGS(vnodedata) {
  emscripten::class_<VNodeData>("VNodeData")
    .constructor<>()
    .property("key", &VNodeData::key)
    .property("ns", &VNodeData::ns);
}