#include "class.hpp"
#include "../../VNode/VNode.hpp"
#include "../../Utils/utils.hpp"
#include <map>
#include <iterator>

void updateClass(VNode oldVnode, VNode vnode) {
	std::map<std::string, bool> oldClass = oldVnode.data.classNames;
	std::map<std::string, bool> klass = vnode.data.classNames;

	if (oldClass.empty() && klass.empty()) return;
	if (oldClass == klass) return;

	std::string cur;
	std::string old;
	std::map<std::string, bool>::iterator it = oldClass.begin();
	while (it != oldClass.end())
	{
		if (klass.count(it->first) == 0) {
			vnode.elm["classList"].call<>("remove", it->first);
		}
		it++;
	}

	it = klass.begin();
	while (it != klass.end())
	{
		cur = it->second;
		if (oldClass.count(it->first) != 0) {
			if (oldClass.at(it->first) != klass.at(it->first)) {
				vnode.elm["classList"].call(klass.at(it->first) ? "add" : "remove", it->first);
			}
		} else {
			vnode.elm["classList"].call(klass.at(it->first) ? "add" : "remove", it->first);
		}
		it++;
	}
};
