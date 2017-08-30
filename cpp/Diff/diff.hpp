#ifndef asmdom_diff_hpp
#define asmdom_diff_hpp

#include "../VNode/VNode.hpp"

namespace asmdom {

	void diff(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode);

}

#endif