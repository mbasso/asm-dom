#include "../../src/cpp/asm-dom.hpp"

using namespace asmdom;

int main() {
	Config config = Config();
	config.unsafePatch = true;

	init(config);
	return 0;
};
