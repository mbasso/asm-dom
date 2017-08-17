#ifndef asmdom_Init_hpp
#define asmdom_Init_hpp

namespace asmdom {

	struct Config { 
		bool clearMemory = true;
		bool unsafePatch = false;
	};

	void init(const Config& config);

}

#endif
