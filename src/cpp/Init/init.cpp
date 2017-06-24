#include "init.hpp"
#include "../VDOMConfig/VDOMConfig.hpp"
#include <emscripten.h>

namespace asmdom {

	void init(asmdomConfig config) {
		VDOMConfig& vdomconfig = VDOMConfig::getConfig();
		vdomconfig.setCppSide(true);
		vdomconfig.setClearMemory(config.clearMemory);
		vdomconfig.setUnsafePatch(config.unsafePatch);
		EM_ASM(window['asmDomReady']());
	};

}
