#include "VNodeData.hpp"
#include <emscripten/bind.h>

EMSCRIPTEN_BINDINGS(vnodedata) {
  emscripten::register_map<std::string, std::string>("MapStringString");
  emscripten::register_map<std::string, bool>("MapStringBool");

  emscripten::class_<VNodeData>("VNodeData")
    .constructor<>()
    .property("key", &VNodeData::key)
    .property("ns", &VNodeData::ns)
    .property("attrs", &VNodeData::attrs)
    .property("props", &VNodeData::props)
    .property("classNames", &VNodeData::classNames);
}
