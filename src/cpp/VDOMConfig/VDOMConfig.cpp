#include "VDOMConfig.hpp"

namespace asmdom {

	bool VDOMConfig::getClearMemory() {
		return clearMemory;
	};

	bool VDOMConfig::getUnsafePatch() {
		return unsafePatch;
	};

	bool VDOMConfig::getCppSide() {
		return cppSide;
	};

	void VDOMConfig::setClearMemory(bool clear) {
		clearMemory = clear;
	};

	void VDOMConfig::setUnsafePatch(bool unsafe) {
		unsafePatch = unsafe;
	};

	void VDOMConfig::setCppSide(bool cpp) {
		cppSide = cpp;
	};

}
