#ifndef asmdom_Patch_hpp
#define asmdom_Patch_hpp

#include "../VNode/VNode.hpp"
#include <vector>

namespace asmdom {

	VNode* patch(
		const emscripten::val& element,
		VNode* const vnode
	);
	VNode* patch(
		VNode* const oldVnode,
		VNode* const vnode
	);

	#ifndef ASMDOM_JS_SIDE
		void reset();
	#endif

}

#endif
