#include "h.hpp"
#include "../VNode/VNode.hpp"
#include <vector>
#include <string>
#include <map>

namespace asmdom {

	VNode* h(const std::string& sel) {
		return new VNode(sel);
	};

	VNode* h(const std::string& sel, const std::string& text) {
		return new VNode(sel, text);
	};

	VNode* h(const std::string& sel, bool isText) {
		return new VNode(sel, isText);
	};

	VNode* h(const std::string& sel, const Data& data) {
		return new VNode(sel, data);
	};

	VNode* h(const std::string& sel, const Children& children) {
		return new VNode(sel, children);
	};

	VNode* h(const std::string& sel, VNode* child) {
		return new VNode(sel, child);
	};

	VNode* h(const std::string& sel, const Data& data, const std::string& text) {
		return new VNode(sel, data, text);
	};

	VNode* h(const std::string& sel, const Data& data, const Children& children) {
		return new VNode(sel, data, children);
	};

	VNode* h(const std::string& sel, const Data& data, VNode* child) {
		return new VNode(sel, data, child);
	};

}