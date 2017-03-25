#ifndef VNodeData_hpp
#define VNodeData_hpp

// #include "../VNode/VNode.hpp"
// #include "../Hooks/Hooks.hpp"
// #include <functional>
// #include <vector>
#include <emscripten/bind.h>
#include <string>
#include <map>

class VNodeData {
  public:
    VNodeData() {};
    std::map<std::string, std::string> props;
    std::map<std::string, std::string> attrs;
    std::map<std::string, bool> classNames;
    /*
    emscripten::val style;
    emscripten::val dataset;
    emscripten::val on;
    emscripten::val hero;
    emscripten::val attachData;
    struct Hooks* hook;
    std::function<VNode*(void)> fn;
    std::vector<emscripten::val> args;
    */
    std::string key;
    std::string ns;
};

#endif
