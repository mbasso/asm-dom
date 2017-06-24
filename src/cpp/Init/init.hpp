#ifndef asmdom_Init_hpp
#define asmdom_Init_hpp

namespace asmdom {

	struct asmdomConfig { 
		bool clearMemory = true;
		bool unsafePatch = false;
	};

	void init(asmdomConfig config);

}

#endif
