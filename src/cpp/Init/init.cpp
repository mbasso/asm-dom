#include "init.hpp"
#include "../VDOMConfig/VDOMConfig.hpp"
#include <emscripten.h>

namespace asmdom {

	void init(const Config& config) {
		VDOMConfig& vdomconfig = VDOMConfig::getConfig();
		vdomconfig.setClearMemory(config.clearMemory);
		vdomconfig.setUnsafePatch(config.unsafePatch);

		EM_ASM(
			#ifndef ASMDOM_JS_SIDE
				window['asmDomHelpers']['eventProxy'] = function(e) {
					return Module['functionCallback'](this.asmDomVNode, e.type, e)
				};
			#else
				Module.diff = window['asmDomHelpers']['diff'];
			#endif

			Module.addNode = window['asmDomHelpers']['domApi']['addNode'];
			Module.createElement = window['asmDomHelpers']['domApi']['createElement'];
			Module.createElementNS = window['asmDomHelpers']['domApi']['createElementNS'];
			Module.createTextNode = window['asmDomHelpers']['domApi']['createTextNode'];
			Module.createComment = window['asmDomHelpers']['domApi']['createComment'];
			Module.createDocumentFragment = window['asmDomHelpers']['domApi']['createDocumentFragment'];
			Module.insertBefore = window['asmDomHelpers']['domApi']['insertBefore'];
			Module.removeChild = window['asmDomHelpers']['domApi']['removeChild'];
			Module.appendChild = window['asmDomHelpers']['domApi']['appendChild'];
			Module.removeAttribute = window['asmDomHelpers']['domApi']['removeAttribute'];
			Module.setAttribute = window['asmDomHelpers']['domApi']['setAttribute'];
			Module.parentNode = window['asmDomHelpers']['domApi']['parentNode'];
			Module.nextSibling = window['asmDomHelpers']['domApi']['nextSibling'];
			Module.setNodeValue = window['asmDomHelpers']['domApi']['setNodeValue'];

			Module.nodes = window['asmDomHelpers']['nodes'];
			Module.eventProxy = window['asmDomHelpers']['eventProxy'];
		);
	};

}
