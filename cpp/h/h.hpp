#ifndef asmdom_h_hpp
#define asmdom_h_hpp

#include "../VNode/VNode.hpp"
#include <vector>
#include <string>
#include <map>

namespace asmdom {

	VNode* h(const std::string& sel);
	VNode* h(const std::string& sel, const std::string& text);
	VNode* h(const std::string& sel, const bool text);
	VNode* h(const std::string& sel, const Data& data);
	VNode* h(const std::string& sel, const Children& children);
	VNode* h(const std::string& sel, VNode* child);
	VNode* h(const std::string& sel, const Data& data, const std::string& text);
	VNode* h(const std::string& sel, const Data& data, const Children& children);
	VNode* h(const std::string& sel, const Data& data, VNode* child);

}

#endif
