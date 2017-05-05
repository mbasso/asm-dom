#include "VNode.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <string>
#include <map>

EMSCRIPTEN_BINDINGS(vnode) {
  emscripten::register_map<std::string, std::string>("MapStringString");
  emscripten::register_vector<int>("VNodePtrVector");
}
