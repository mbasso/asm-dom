#ifndef asmdom_test_utils_hpp
#define asmdom_test_utils_hpp

#include "../../src/cpp/asm-dom.hpp"
#include <emscripten/val.h>

void assertEquals(emscripten::val actual, emscripten::val expected);
emscripten::val getBodyFirstChild();
emscripten::val getRoot();
emscripten::val getNode(asmdom::VNode* vnode);

#endif