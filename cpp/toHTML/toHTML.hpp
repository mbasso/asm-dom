#ifndef asmdom_tohtml_hpp
#define asmdom_tohtml_hpp

#include "../VNode/VNode.hpp"
#include <string>

namespace asmdom {

	std::string toHTML(const VNode* const vnode);

}

#endif