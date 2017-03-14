#include "utils.hpp"
#include <emscripten/val.h>
#include <string>

bool isUndefined(emscripten::val obj) {
  return obj.typeOf().as<std::string>().compare(std::string("undefined")) == 0;
};

bool isNull(emscripten::val obj) {
  return obj.typeOf().as<std::string>().compare(std::string("null")) == 0;
};

bool isDefined(emscripten::val obj) {
  std::string type = obj.typeOf().as<std::string>();
  return type.compare(std::string("undefined")) =! 0 && type.compare(std::string("null")) != 0;
};
