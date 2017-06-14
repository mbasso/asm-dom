#include "diff.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten.h>
#include <iterator>
#include <cstdint>
#include <map>

void diff(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
	EM_ASM_({
		window['asmDomHelpers']['diff']($0, $1, $2);
	}, reinterpret_cast<std::uintptr_t>(oldVnode), reinterpret_cast<std::uintptr_t>(vnode), vnode->elm);

	if (oldVnode->data == NULL && vnode->data == NULL) return;

	if (oldVnode->data != NULL) {
		VNodeAttrs::iterator it = oldVnode->data->attrs.begin();
		bool areDataDefined = vnode->data != NULL;
		while (it != oldVnode->data->attrs.end())
		{
			if (!areDataDefined || (areDataDefined && vnode->data->attrs.count(it->first) == 0)) {
				EM_ASM_({
					window['asmDomHelpers']['domApi']['removeAttribute'](
						$0,
						window['asmDom']['Pointer_stringify']($1)
					);
				}, vnode->elm, it->first.c_str());
			}
			++it;
		}
	}

	if (vnode->data != NULL) {
		VNodeAttrs::iterator it = vnode->data->attrs.begin();
		bool isAttrDefined;
		bool areDataDefined = oldVnode->data != NULL;
		while (it != vnode->data->attrs.end()) {
			isAttrDefined = areDataDefined && oldVnode->data->attrs.count(it->first) != 0;
			if (!isAttrDefined || (isAttrDefined && oldVnode->data->attrs.at(it->first).compare(it->second) != 0)) {
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
	}
};
