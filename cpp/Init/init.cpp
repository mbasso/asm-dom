#include "init.hpp"
#include "../VDOMConfig/VDOMConfig.hpp"
#include <emscripten.h>

namespace asmdom {

	void init(const Config& config) {
		VDOMConfig& vdomconfig = VDOMConfig::getConfig();
		vdomconfig.setClearMemory(config.clearMemory);
		vdomconfig.setUnsafePatch(config.unsafePatch);

		#ifndef ASMDOM_JS_SIDE

			EM_ASM(
				window['asmDomHelpers']['eventProxy'] = function(e) {
					return Module['functionCallback'](this.asmDomVNode, e.type, e)
				};
			);

		#endif
	};

}
