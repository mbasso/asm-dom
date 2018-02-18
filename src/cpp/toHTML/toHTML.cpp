#include "toHTML.hpp"
#include "../utils/utils.hpp"
#include "../VNode/VNode.hpp"
#include "../VDOMConfig/VDOMConfig.hpp"
#include <emscripten/val.h>
#include <algorithm>
#include <vector>
#include <string>

namespace asmdom {

	// All SVG children elements, not in this list, should self-close

	std::vector<std::string> containerElements {
		// http://www.w3.org/TR/SVG/intro.html#TermContainerElement
		"a",
		"defs",
		"glyph",
		"g",
		"marker",
		"mask",
		"missing-glyph",
		"pattern",
		"svg",
		"switch",
		"symbol",
		"text",

  	// http://www.w3.org/TR/SVG/intro.html#TermDescriptiveElement
		"desc",
		"metadata",
		"title"
	};

	// http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
	std::vector<std::string> voidElements {
		"area",
		"base",
		"br",
		"col",
		"embed",
		"hr",
		"img",
		"input",
		"keygen",
		"link",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	};

	#ifndef ASMDOM_JS_SIDE
		// https://developer.mozilla.org/en-US/docs/Web/API/element
		std::vector<std::string> omitProps {
			"attributes",
			"childElementCount",
			"children",
			"classList",
			"clientHeight",
			"clientLeft",
			"clientTop",
			"clientWidth",
			"currentStyle",
			"firstElementChild",
			"innerHTML",
			"lastElementChild",
			"nextElementSibling",
			"ongotpointercapture",
			"onlostpointercapture",
			"onwheel",
			"outerHTML",
			"previousElementSibling",
			"runtimeStyle",
			"scrollHeight",
			"scrollLeft",
			"scrollLeftMax",
			"scrollTop",
			"scrollTopMax",
			"scrollWidth",
			"tabStop",
			"tagName"
		};
	#endif

	std::string encode(const std::string& data) {
		std::string encoded;
		encoded.reserve(data.size());
		for(size_t pos = 0; pos != data.size(); ++pos) {
				switch(data[pos]) {
						case '&':  encoded.append("&amp;");       break;
						case '\"': encoded.append("&quot;");      break;
						case '\'': encoded.append("&apos;");      break;
						case '<':  encoded.append("&lt;");        break;
						case '>':  encoded.append("&gt;");        break;
						case '`':  encoded.append("&#96;");				break;
						default:   encoded.append(&data[pos], 1); break;
				}
		}
		return encoded;
	};

	void appendAttributes(const VNode* const vnode, std::string& html) {
		for (auto& it : vnode->data.attrs) {
			if (it.first != "ns" && it.second != "false") {
				html.append(" " + it.first + "=\"");
				if (it.second != "true") {
					html.append(encode(it.second));
				}
				html.append("\"");
			}
		}

		#ifdef ASMDOM_JS_SIDE
			html.append(
				wstring_to_utf8(emscripten::val::global("window")["asmDomHelpers"].call<std::wstring>("appendProps", reinterpret_cast<std::uintptr_t>(vnode)))
			);
		#else
			emscripten::val String = emscripten::val::global("String");
			for (auto& it : vnode->data.props) {
				if (std::find(omitProps.begin(), omitProps.end(), it.first) == omitProps.end()) {
					std::string key = it.first;
					std::transform(key.begin(), key.end(), key.begin(), ::tolower);
					html.append(" " + key + "=\"" + encode(String(it.second).as<std::string>()) + "\"");
				}
			}
		#endif
	};

	void toHTML(const VNode* const vnode, std::string& html) {
		if (vnode == NULL) return;

		if (vnode->sel.empty() && !vnode->text.empty()) {
			html.append(encode(vnode->text));
			return;
		}
		
		if (vnode->sel == "!") {
			html.append("<!--" + vnode->text + "-->");
      return;
		}

    bool isSvg = vnode->data.attrs.count("ns") != 0 && vnode->data.attrs.at("ns") == "http://www.w3.org/2000/svg";
		bool isSvgContainerElement = isSvg && std::find(containerElements.begin(), containerElements.end(), vnode->sel) != containerElements.end();

		html.append("<" + vnode->sel);
		appendAttributes(vnode, html);
    if (isSvg && !isSvgContainerElement) {
      html.append(" /");
    }
    html.append(">");

    if (
			(isSvgContainerElement) ||
			(!isSvg && std::find(voidElements.begin(), voidElements.end(), vnode->sel) == voidElements.end())
		) {
			#ifdef ASMDOM_JS_SIDE
				html.append(
					wstring_to_utf8(emscripten::val::global("window")["asmDomHelpers"].call<std::wstring>("insertInnerHTML", reinterpret_cast<std::uintptr_t>(vnode)))
				);
			#else
				if (vnode->data.props.count("innerHTML") != 0) {
					html.append(vnode->data.props.at("innerHTML").as<std::string>());
				} else
			#endif
			
			if (!vnode->text.empty()) {
        html.append(encode(vnode->text));
      } else if (!vnode->children.empty()) {
				for(Children::size_type i = 0; i != vnode->children.size(); ++i) {
					toHTML(vnode->children[i], html);
				}
      }
      html.append("</" + vnode->sel + ">");
		}
	};

	std::string toHTML(const VNode* const vnode) {
		std::string html;
		toHTML(vnode, html);

		#ifndef ASMDOM_JS_SIDE
			if (vnode != NULL && VDOMConfig::getConfig().getClearMemory()) {
				deleteVNode(vnode);
			}
		#endif

    return html;
	};

}
