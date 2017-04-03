#include "dataset.hpp"
#include "../../Hooks/Hooks.hpp"
#include "../../VNode/VNode.hpp"
#include "../../Utils/utils.hpp"
#include <algorithm>
#include <iterator>
#include <regex>
#include <map>

std::regex capsRegex("[A-Z]");

std::string getDataSel(const std::string& key) {
	std::string result("data-");
	std::string dataAttr = std::regex_replace(key, capsRegex, "-$&", std::regex_constants::match_any);
	std::transform(dataAttr.begin(), dataAttr.end(), dataAttr.begin(), ::tolower);
	result.append(dataAttr);
	return result;
}

void setValueInDataset(VNode* const vnode, emscripten::val& nodeDataset, bool& isDatasetDefined, std::map<std::string, std::string>::iterator& it) {
	if (isDatasetDefined) {
		nodeDataset.set(it->first, emscripten::val(it->second));
	} else {
		vnode->elm.call<void>(
			"setAttribute",
			emscripten::val(getDataSel(it->first)),
			emscripten::val(it->second)
		);
	}
};

void updateDataset(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode) {
	std::map<std::string, std::string> oldDataset = oldVnode->data.dataset;
	std::map<std::string, std::string> dataset = vnode->data.dataset;

	if (oldDataset.empty() && dataset.empty()) return;
	if (oldDataset == dataset) return;

	emscripten::val nodeDataset = vnode->elm["dataset"];
	bool isDatasetDefined = isDefined(nodeDataset);
	
	std::map<std::string, std::string>::iterator it = oldDataset.begin();
	while (it != oldDataset.end())
	{
		if (dataset.count(it->first) == 0) {
			if (isDatasetDefined) {
				nodeDataset.set(it->first, emscripten::val::undefined());
			} else {
				vnode->elm.call<void>("removeAttribute", emscripten::val(getDataSel(it->first)));
			}
		}
		it++;
	}

	it = dataset.begin();
	while (it != dataset.end()) {
		if (oldDataset.count(it->first) != 0) {
			if (oldDataset.at(it->first) != dataset.at(it->first)) {
				setValueInDataset(vnode, nodeDataset, isDatasetDefined, it);
			}
		} else {
			setValueInDataset(vnode, nodeDataset, isDatasetDefined, it);
		}
		it++;
	}
};

Hooks datasetHooks(&updateDataset, &updateDataset);
