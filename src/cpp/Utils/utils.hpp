#ifndef Utils_hpp
#define Utils_hpp

#include <emscripten/val.h>

bool isUndefined(emscripten::val obj);
bool isNull(emscripten::val obj);
bool isDefined(emscripten::val obj);

#endif