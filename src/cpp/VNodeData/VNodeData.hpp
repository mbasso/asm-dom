#ifndef VNodeData_hpp
#define VNodeData_hpp

#include "../VNode/VNode.hpp"
#include "../Hooks/Hooks.hpp"
#include <emscripten/val.h>
#include <functional>
#include <vector>
#include <string>

struct VNodeData {
  emscripten::val props;
  emscripten::val attrs;
  emscripten::val className;
  emscripten::val style;
  emscripten::val dataset;
  emscripten::val on;
  emscripten::val hero;
  emscripten::val attachData;
  struct Hooks hook;
  std::string key;
  std::string ns;
  std::function<struct VNode(void)> fn;
  std::vector<emscripten::val> args;
};

#endif