#include "props.hpp"
#include "../../VNode/VNode.hpp"
#include "../../Utils/utils.hpp"
#include <map>
#include <iterator>

void updateProps(VNode oldVnode, VNode vnode) {
	std::map<std::string, std::string> oldProps = oldVnode.data.props;
	std::map<std::string, std::string> props = vnode.data.props;

	if (oldProps.empty() && props.empty()) return;
	if (oldProps == props) return;

	std::string cur;
	std::map<std::string, std::string>::iterator it = oldProps.begin();
	while (it != oldProps.end())
	{
		if (props.count(it->first) == 0) {
			vnode.elm.set(it->first.c_str(), emscripten::val::undefined());
		}
		it++;
	}

	it = props.begin();
	while (it != props.end())
	{
		cur = it->second;
		if (oldProps.count(it->first) != 0) {
			emscripten::val currentProp = vnode.elm[it->first.c_str()];
			if (
				oldProps.at(it->first).compare(cur) != 0 &&
				(it->first.compare("value") != 0 || isDefined(currentProp) && currentProp.as<std::string>().compare(cur) != 0)
			) {
				vnode.elm.set(it->first.c_str(), emscripten::val(it->second.c_str()));
			}
		} else {
			vnode.elm.set(it->first.c_str(), emscripten::val::undefined());
		}
		it++;
	}
};
