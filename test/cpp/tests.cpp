#include "../../src/cpp/asm-dom.hpp"
#include "utils.cpp"
#include "index/index.cpp"
#include "h/h.cpp"
#include "attributes/attributes.cpp"
#include "eventlisteners/eventlisteners.cpp"
#include "dataset/dataset.cpp"
#include "props/props.cpp"
#include "patch/patch.cpp"

int main() {
	asmdomConfig config = asmdomConfig();
	config.unsafePatch = true;

	init(config);
	return 0;
};
