#ifndef VNodeData_hpp
#define VNodeData_hpp

// #include "../VNode/VNode.hpp"
// #include "../Hooks/Hooks.hpp"
#include "../Val/Val.hpp"
// #include <functional>
#include <emscripten/bind.h>
#include <vector>
#include <map>
#include <string>

class VNodeData {
  public:
    VNodeData() {};
    std::map<std::string, std::string> props;
    std::map<std::string, std::string> attrs;
    val className;
    val style;
    val dataset;
    val on;
    val hero;
    val attachData;
    // struct Hooks* hook;
    std::string key;
    std::string ns;
    // std::function<VNode*(void)> fn;
    std::vector<val> args;
};

#endif