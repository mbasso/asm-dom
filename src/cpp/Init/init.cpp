#include "init.hpp"
#include "../VDOMConfig/VDOMConfig.hpp"
#include <emscripten.h>

namespace asmdom {

	void init(asmdomConfig& config) {
		VDOMConfig& vdomconfig = VDOMConfig::getConfig();
		vdomconfig.setClearMemory(config.clearMemory);
		vdomconfig.setUnsafePatch(config.unsafePatch);

		#ifndef ASMDOM_JS_SIDE

		EM_ASM(
			window['asmDomHelpers']['functionCallback'] = function(vnode, callback) {
        return function(event) {
					return Module['functionCallback'](vnode, callback, event);
				};
			};
		);

		#endif
	};

}
