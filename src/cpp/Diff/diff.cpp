#include "diff.hpp"
#include "../VNode/VNode.hpp"
#include <iterator>
#include <map>

void diff(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
	if (oldVnode->props.empty() && vnode->props.empty()) return;

	std::map<std::string, std::string>::iterator it = oldVnode->props.begin();
	while (it != oldVnode->props.end())
	{
		if (vnode->props.count(it->first) == 0) {
			vnode->elm.call<void>("removeAttribute", emscripten::val(it->first));
		}
		++it;
	}

	it = vnode->props.begin();
	bool isAttrDefined = false;
	while (it != vnode->props.end()) {
		isAttrDefined = oldVnode->props.count(it->first) != 0;
		if (!isAttrDefined || (isAttrDefined && oldVnode->props.at(it->first).compare(it->second) != 0)) {
			vnode->elm.call<void>(
				"setAttribute",
				emscripten::val(it->first),
				emscripten::val(it->second)
			);
		} else if (!isAttrDefined) {
			vnode->elm.call<void>("removeAttribute", emscripten::val(it->first));
		}
		++it;
	}
};
