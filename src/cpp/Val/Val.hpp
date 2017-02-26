#ifndef Val_hpp
#define Val_hpp

#include <emscripten/val.h>

static emscripten::val undef = emscripten::val::undefined();

class val : public emscripten::val {
	public:
		val() : emscripten::val(undef)
    {}
    val(const emscripten::val& emval) : emscripten::val(emval)
    {}
};

#endif
