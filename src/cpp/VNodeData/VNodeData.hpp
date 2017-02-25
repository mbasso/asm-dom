#ifndef VNodeData_hpp
#define VNodeData_hpp

#include "../VNode/VNode.hpp"
#include <emscripten/val.h>
#include <functional>
#include <vector>
#include <string>

struct VNodeData {
  emscripten::val props;
  emscripten::val attrs;
  emscripten::val class;
  emscripten::val style;
  emscripten::val dataset;
  emscripten::val on;
  emscripten::val hero;
  emscripten::val attachData;
  hook?: Hooks;
  std::string key;
  std::string ns;
  std::function<VNode(void)> fn;
  std::vector<emscripte::val> args;
};

#endif