#include "../../src/asm-dom.hpp"
#include "utils.cpp"
#include "h/h.cpp"
#include "attributes/attributes.cpp"

int main() {
	asmdomConfig config = asmdomConfig();
	config.unsafePatch = true;

	init(config);
	return 0;
};
