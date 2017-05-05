#include "diff.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten.h>
#include <iterator>
#include <map>

void diff(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
	EM_ASM_({
		window['asmDomHelpers']['diff']($0, $1, $2);
	}, reinterpret_cast<int>(oldVnode), reinterpret_cast<int>(vnode), vnode->elm);

	if (oldVnode->props.empty() && vnode->props.empty()) return;

	std::map<std::string, std::string>::iterator it = oldVnode->props.begin();
	while (it != oldVnode->props.end())
	{
		if (vnode->props.count(it->first) == 0) {
			EM_ASM_({
				window['asmDomHelpers']['domApi']['removeAttribute'](
					$0,
					window['asmDom']['Pointer_stringify']($1)
				);
			}, vnode->elm, it->first.c_str());
		}
		++it;
	}

	it = vnode->props.begin();
	bool isAttrDefined;
	while (it != vnode->props.end()) {
		isAttrDefined = oldVnode->props.count(it->first) != 0;
		if (!isAttrDefined || (isAttrDefined && oldVnode->props.at(it->first).compare(it->second) != 0)) {
			EM_ASM_({
				window['asmDomHelpers']['domApi']['setAttribute'](
					$0,
					window['asmDom']['Pointer_stringify']($1),
					window['asmDom']['Pointer_stringify']($2)
				);
			}, vnode->elm, it->first.c_str(), it->second.c_str());
		}
		++it;
	}
};
