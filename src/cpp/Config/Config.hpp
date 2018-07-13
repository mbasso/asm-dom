#ifndef asmdom_Config_hpp
#define asmdom_Config_hpp

namespace asmdom {

	extern bool CLEAR_MEMORY;
	extern bool UNSAFE_PATCH;

	struct Config {
		bool clearMemory = true;
		bool unsafePatch = false;
	};

}

#endif
