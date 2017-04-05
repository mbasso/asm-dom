#include "VNodeData.hpp"
#include <emscripten/bind.h>

EMSCRIPTEN_BINDINGS(vnodedata) {
  emscripten::register_map<std::string, std::string>("MapStringString");
  emscripten::register_map<std::string, bool>("MapStringBool");

  emscripten::value_object<VNodeData>("VNodeData")
    .field("key", &VNodeData::key)
    .field("ns", &VNodeData::ns)
    .field("attrs", &VNodeData::attrs)
    .field("props", &VNodeData::props)
    .field("dataset", &VNodeData::dataset)
    .field("classNames", &VNodeData::classNames);
}
