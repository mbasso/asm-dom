#include "VDOMConfig.hpp"

namespace asmdom {

	bool VDOMConfig::getClearMemory() {
		return clearMemory;
	};

	bool VDOMConfig::getUnsafePatch() {
		return unsafePatch;
	};

	void VDOMConfig::setClearMemory(bool clear) {
		clearMemory = clear;
	};

	void VDOMConfig::setUnsafePatch(bool unsafe) {
		unsafePatch = unsafe;
	};

}
