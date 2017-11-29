#include "../../../src/cpp/asm-dom.hpp"
#include "../../../src/cpp/asm-dom-server.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>

using namespace asmdom;

void shouldHandleNullVNode() {
	VNode* vnode = NULL;

	assertEquals(
		toHTML(vnode),
		std::string("")
	);
};

void shouldParseElements() {
	VNode* vnode = h("div");

	assertEquals(
		toHTML(vnode),
		std::string("<div></div>")
	);
};

void shouldParseComments() {
	VNode* vnode = h("!", std::string("comment"));

	assertEquals(
		toHTML(vnode),
		std::string("<!--comment-->")
	);
};

void shouldParseText() {
	VNode* vnode = h("a text", true);

	assertEquals(
		toHTML(vnode),
		std::string("a text")
	);
};

void shouldHandleChildren() {
	VNode* vnode = h("div",
		Children {
			h("span"),
			h("b")
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<div><span></span><b></b></div>")
	);
};

void shouldHandleTextContent() {
	VNode* vnode = h("p", std::string("a text"));

	assertEquals(
		toHTML(vnode),
		std::string("<p>a text</p>")
	);
};

void shouldParseAttributes() {
	VNode* vnode = h("div",
		Attrs {
			{"data-foo", "bar"}
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<div data-foo=\"bar\"></div>")
	);
};

void shouldOmitFalsyAttributes() {
	VNode* vnode = h("div",
		Attrs {
			{"readonly", "false"},
			{"style", "width: 250px; height: 250px;"}
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<div style=\"width: 250px; height: 250px;\"></div>")
	);
};

void shouldParseProps() {
	VNode* vnode = h("div",
		Props {
			{"readonly", emscripten::val(true)}
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<div readonly=\"true\"></div>")
	);
};

void shouldOmitProps() {
	VNode* vnode = h("div",
		Props {
			{"attributes", emscripten::val("foo")},
			{"childElementCount", emscripten::val("foo")},
			{"children", emscripten::val("foo")},
			{"classList", emscripten::val("foo")},
			{"clientHeight", emscripten::val("foo")},
			{"clientLeft", emscripten::val("foo")},
			{"clientTop", emscripten::val("foo")},
			{"clientWidth", emscripten::val("foo")},
			{"currentStyle", emscripten::val("foo")},
			{"firstElementChild", emscripten::val("foo")},
			{"innerHTML", emscripten::val("foo")},
			{"lastElementChild", emscripten::val("foo")},
			{"nextElementSibling", emscripten::val("foo")},
			{"ongotpointercapture", emscripten::val("foo")},
			{"onlostpointercapture", emscripten::val("foo")},
			{"onwheel", emscripten::val("foo")},
			{"outerHTML", emscripten::val("foo")},
			{"previousElementSibling", emscripten::val("foo")},
			{"runtimeStyle", emscripten::val("foo")},
			{"scrollHeight", emscripten::val("foo")},
			{"scrollLeft", emscripten::val("foo")},
			{"scrollLeftMax", emscripten::val("foo")},
			{"scrollTop", emscripten::val("foo")},
			{"scrollTopMax", emscripten::val("foo")},
			{"scrollWidth", emscripten::val("foo")},
			{"tabStop", emscripten::val("foo")},
			{"tagName", emscripten::val("foo")}
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<div>foo</div>")
	);
};

void shouldOmitCallbacks() {
	VNode* vnode = h("div",
    Data(
      Callbacks {
        {"onclick", [](emscripten::val e) -> bool {
          return true;
        }}
      }
		)
	);

	assertEquals(
		toHTML(vnode),
		std::string("<div></div>")
	);
};

void shouldHandleInnerHTML() {
	VNode* vnode = h("div",
		Props {
			{"innerHTML", emscripten::val(u8"<p>a text 字à</p>")}
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<div><p>a text 字à</p></div>")
	);
};

void shouldHandleSvgContainerElements() {
	VNode* vnode = h("svg",
		Children {
			h("a"),
			h("defs"),
			h("glyph"),
			h("g"),
			h("marker"),
			h("mask"),
			h("missing-glyph"),
			h("pattern"),
			h("svg"),
			h("switch"),
			h("symbol"),
			h("text"),
			h("desc"),
			h("metadata"),
			h("title")
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<svg><a></a><defs></defs><glyph></glyph><g></g><marker></marker><mask></mask><missing-glyph></missing-glyph><pattern></pattern><svg></svg><switch></switch><symbol></symbol><text></text><desc></desc><metadata></metadata><title></title></svg>")
	);
};

void shouldHandleSvgNonContainerElements() {
	VNode* vnode = h("svg",
		Children {
			h("rect")
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<svg><rect /></svg>")
	);
};

void shouldHandleVoidElements() {
	VNode* vnode = h("div",
		Children {
			h("area"),
			h("base"),
			h("br"),
			h("col"),
			h("embed"),
			h("hr"),
			h("img"),
			h("input"),
			h("keygen"),
			h("link"),
			h("meta"),
			h("param"),
			h("source"),
			h("track"),
			h("wbr")
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<div><area><base><br><col><embed><hr><img><input><keygen><link><meta><param><source><track><wbr></div>")
	);
};

void shouldEscapeText() {
	VNode* vnode = h("<>\"'&`text", true);

	assertEquals(
		toHTML(vnode),
		std::string("&lt;&gt;&quot;&apos;&amp;&#96;text")
	);
};

void shouldEscapeTextContent() {
	VNode* vnode = h("p", std::string("<>\"'&`text"));

	assertEquals(
		toHTML(vnode),
		std::string("<p>&lt;&gt;&quot;&apos;&amp;&#96;text</p>")
	);
};

void shouldEscapeAttributes() {
	VNode* vnode = h("div",
		Attrs {
			{"data-foo", "<>\"'&`text"}
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<div data-foo=\"&lt;&gt;&quot;&apos;&amp;&#96;text\"></div>")
	);
};

void shouldEscapeProps() {
	VNode* vnode = h("div",
		Props {
			{"data-foo", emscripten::val("<>\"'&`text")}
		}
	);

	assertEquals(
		toHTML(vnode),
		std::string("<div data-foo=\"&lt;&gt;&quot;&apos;&amp;&#96;text\"></div>")
	);
};

EMSCRIPTEN_BINDINGS(tohtml_tests) {
	emscripten::function("shouldHandleNullVNode", &shouldHandleNullVNode);
	emscripten::function("shouldParseElements", &shouldParseElements);
	emscripten::function("shouldParseComments", &shouldParseComments);
	emscripten::function("shouldParseText", &shouldParseText);
	emscripten::function("shouldHandleChildren", &shouldHandleChildren);
	emscripten::function("shouldHandleTextContent", &shouldHandleTextContent);
	emscripten::function("shouldParseAttributes", &shouldParseAttributes);
	emscripten::function("shouldOmitFalsyAttributes", &shouldOmitFalsyAttributes);
	emscripten::function("shouldParseProps", &shouldParseProps);
	emscripten::function("shouldOmitProps", &shouldOmitProps);
	emscripten::function("shouldOmitCallbacks", &shouldOmitCallbacks);
	emscripten::function("shouldHandleInnerHTML", &shouldHandleInnerHTML);
	emscripten::function("shouldHandleSvgContainerElements", &shouldHandleSvgContainerElements);
	emscripten::function("shouldHandleSvgNonContainerElements", &shouldHandleSvgNonContainerElements);
	emscripten::function("shouldHandleVoidElements", &shouldHandleVoidElements);
	emscripten::function("shouldEscapeText", &shouldEscapeText);
	emscripten::function("shouldEscapeTextContent", &shouldEscapeTextContent);
	emscripten::function("shouldEscapeAttributes", &shouldEscapeAttributes);
	emscripten::function("shouldEscapeProps", &shouldEscapeProps);
};
