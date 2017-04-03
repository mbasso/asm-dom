#include "utils.hpp"
#include <emscripten/val.h>
#include <string>

/*
bool isUndefined(emscripten::val obj) {
  return obj.typeOf().as<std::string>().compare("undefined") == 0;
};

bool isNull(emscripten::val obj) {
  return obj.typeOf().as<std::string>().compare("null") == 0;
};
*/

bool isDefined(const emscripten::val& obj) {
  std::string type = obj.typeOf().as<std::string>();
  return type.compare("undefined") != 0 && type.compare("null") != 0;
};
