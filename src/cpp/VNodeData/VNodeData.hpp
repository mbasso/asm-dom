#ifndef VNodeData_hpp
#define VNodeData_hpp

#include "../VNode/VNode.hpp"
#include "../Hooks/Hooks.hpp"
#include "../Val/Val.hpp"
#include <emscripten/val.h>
#include <functional>
#include <vector>
#include <string>

struct VNodeData {
  val props;
  val attrs;
  val className;
  val style;
  val dataset;
  val on;
  val hero;
  val attachData;
  struct Hooks* hook;
  std::string key;
  std::string ns;
  std::function<struct VNode*(void)> fn;
  std::vector<val> args;
};

#endif