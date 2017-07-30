#ifndef asmdom_Patch_hpp
#define asmdom_Patch_hpp

#include "../VNode/VNode.hpp"
#include <vector>

namespace asmdom {

	VNode* patch(
		emscripten::val element,
		VNode* vnode
	);
	VNode* patch(
		VNode* oldVnode,
		VNode* vnode
	);

	void reset();

}

#endif
