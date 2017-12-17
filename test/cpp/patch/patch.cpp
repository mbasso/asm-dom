#include "../../../src/cpp/asm-dom.hpp"
#include "../utils.hpp"
#include <stdlib.h>
#include <algorithm>
#include <codecvt>
#include <locale>
#include <emscripten/bind.h>
#include <emscripten/val.h>

using namespace asmdom;

void shouldPatchANode() {
	assertEquals(emscripten::val::global("document")["body"]["children"]["length"], emscripten::val(1));
	assertEquals(emscripten::val::global("document")["body"]["firstChild"], emscripten::val(getRoot()));
	VNode* vnode = h("span");
	patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(emscripten::val::global("document")["body"]["children"]["length"], emscripten::val(1));
	assertEquals(elm["nodeName"], emscripten::val("SPAN"));
	assertEquals(elm["className"], emscripten::val(""));
	delete vnode;
};

void shouldHaveATag() {
	VNode* vnode = h("div");
	VNode* elmPtr = patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["tagName"], emscripten::val("DIV"));
	delete elmPtr;
};

void shouldHaveTheCorrectNamespace() {
	std::string svgNamespace = "http://www.w3.org/2000/svg";
	VNode* vnode = h("div",
		h("div", 
			Data(
				Attrs {
					{"ns", svgNamespace}
				}
			)
		)
	);
	patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["firstChild"]["namespaceURI"], emscripten::val(svgNamespace));
	delete vnode;
};

void shouldInjectSvgNamespace() {
	std::string svgNamespace = "http://www.w3.org/2000/svg";
	std::string XHTMLNamespace = "http://www.w3.org/1999/xhtml";
	VNode* vnode = h("svg",
		Children {
			h("foreignObject",
				Children {
					h("div",
						Children {
							h("I am HTML embedded in SVG", true)
						}
					)
				}
			)
		}
	);

	patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["namespaceURI"], emscripten::val(svgNamespace));
	assertEquals(elm["firstChild"]["namespaceURI"], emscripten::val(svgNamespace));
	assertEquals(elm["firstChild"]["firstChild"]["namespaceURI"], emscripten::val(XHTMLNamespace));
	delete vnode;
};

void shouldCreateElementsWithClass() {
	VNode* vnode = h("div",
		Data(
			Attrs {
				{"class", "foo"}
			}
		)
	);
	VNode* elmPtr = patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(
		elm.call<emscripten::val>("getAttribute", emscripten::val("class")),
		emscripten::val("foo")
	);
	delete elmPtr;
};

void shouldCreateElementsWithTextContent() {
	VNode* vnode = h("div",
		Children {
			h("I am a string", true)
		}
	);
	VNode* elmPtr = patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["innerHTML"], emscripten::val("I am a string"));
	delete elmPtr;
};

// TODO : how can we test this?
void shouldCreateElementsWithTextContentInUtf8() {};

void shouldCreateElementsWithSpanAndTextContent() {
	VNode* vnode = h("a",
		Children {
			h("span"),
			h("I am a string", true)
		}
	);
	VNode* elmPtr = patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["tagName"], emscripten::val("SPAN"));
	assertEquals(elm["childNodes"]["1"]["textContent"], emscripten::val("I am a string"));
	delete elmPtr;
};

void isAPatchOfTheRootElement() {
	emscripten::val elmWithIdAndClass = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
	elmWithIdAndClass.set("id", emscripten::val("id"));
	elmWithIdAndClass.set("className", emscripten::val("class"));
	VNode* vnode = h("div",
		Data (
			Attrs {
				{"id", "id"},
				{"class", "class"}
			}
		),
		Children {
			h(std::string("span"), std::string("Hi"))
		}
	);

	patch(elmWithIdAndClass, vnode);
	emscripten::val elm = getNode(vnode);
	assertEquals(elm, elmWithIdAndClass);
	assertEquals(elm["tagName"], emscripten::val("DIV"));
	assertEquals(elm["id"], emscripten::val("id"));
	assertEquals(elm["className"], emscripten::val("class"));
	delete vnode;
};

void shouldCreateComments() {
	VNode* vnode = h(std::string("!"), std::string("test"));
	VNode* elmPtr = patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["nodeType"], emscripten::val::global("document")["COMMENT_NODE"]);
	assertEquals(elm["textContent"], emscripten::val("test"));
	delete elmPtr;
};

void shouldAppendElements() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(1));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	delete vnode2;
};

void shouldPrependElements() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(2));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(5));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["4"]["innerHTML"], emscripten::val("5"));
	delete vnode2;
};

void shouldAddElementsInTheMiddle() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(4));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(5));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["4"]["innerHTML"], emscripten::val("5"));
	delete vnode2;
};

void shouldAddElementsAtBeginAndEnd() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(5));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["4"]["innerHTML"], emscripten::val("5"));
	delete vnode2;
};

void shouldAddChildrenToParentWithNoChildren() {
	VNode* vnode1 = h("span",
		Data (
			Attrs {
				{"key", "span"}
			}
		)
	);
	VNode* vnode2 = h("span",
		Data (
			Attrs {
				{"key", "span"}
			}
		),
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(0));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	delete vnode2;
};

void shouldRemoveAllChildrenFromParent() {
	VNode* vnode1 = h("span",
		Data (
			Attrs {
				{"key", "span"}
			}
		),
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3"))
		}
	);
	VNode* vnode2 = h("span",
		Data (
			Attrs {
				{"key", "span"}
			}
		)
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(0));
	delete vnode2;
};

void shouldUpdateOneChildWithSameKeyButDifferentSel() {
	VNode* vnode1 = h("span",
		Data (
			Attrs {
				{"key", "span"}
			}
		),
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3"))
		}
	);
	VNode* vnode2 = h("span",
		Data (
			Attrs {
				{"key", "span"}
			}
		),
		Children {
			h(std::string("span"), std::string("1")),
			h("i",
				Data (
					Attrs {
						{"key", "2"}
					}
				),
				std::string("2")
			),
			h(std::string("span"), std::string("3"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["1"]["tagName"], emscripten::val("I"));
	delete vnode2;
};

void shouldRemoveElementsFromTheBeginning() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(5));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("5"));
	delete vnode2;
};

void shouldRemoveElementsFromTheEnd() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(5));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	delete vnode2;
};

void shouldRemoveElementsFromTheMiddle() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(5));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(4));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("5"));
	delete vnode2;
};

void shouldMoveElementForward() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("4"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(4));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(4));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("4"));
	delete vnode2;
};

void shouldMoveElementToEnd() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("1"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("1"));
	delete vnode2;
};

void shouldMoveElementBackwards() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(4));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(4));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("3"));
	delete vnode2;
};

void shouldSwapFirstAndLast() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("1"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(4));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(4));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("1"));
	delete vnode2;
};

void shouldMoveToLeftAndReplace() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("6"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(5));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(5));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["4"]["innerHTML"], emscripten::val("6"));
	delete vnode2;
};

void shouldMoveToLeftAndLeavesHole() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("6"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(2));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("6"));
	delete vnode2;
};

void shouldHandleMovedAndSetToUndefinedElementEndingAtEnd() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5")),
			h(std::string("span"), std::string("3"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("5"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	delete vnode2;
};

void shouldMoveAKeyInNonKeyedNodesWithASizeUp() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("a")),
			h(std::string("span"), std::string("b")),
			h(std::string("span"), std::string("c"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("d")),
			h(std::string("span"), std::string("a")),
			h(std::string("span"), std::string("b")),
			h(std::string("span"), std::string("c")),
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("e"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(4));
	assertEquals(elm["textContent"], emscripten::val("1abc"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(6));
	assertEquals(elm["textContent"], emscripten::val("dabc1e"));
	delete vnode2;
};

void shouldReverseElements() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5")),
			h(std::string("span"), std::string("6")),
			h(std::string("span"), std::string("7")),
			h(std::string("span"), std::string("8"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("8")),
			h(std::string("span"), std::string("7")),
			h(std::string("span"), std::string("6")),
			h(std::string("span"), std::string("5")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("1"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(8));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(8));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("8"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("7"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("6"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("5"));
	assertEquals(elm["children"]["4"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["5"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["6"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["7"]["innerHTML"], emscripten::val("1"));
	delete vnode2;
};

void shouldReverseElementsWith0() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("0")),
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("5")),
			h(std::string("span"), std::string("0"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(6));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(6));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["4"]["innerHTML"], emscripten::val("5"));
	assertEquals(elm["children"]["5"]["innerHTML"], emscripten::val("0"));
	delete vnode2;
};

VNode* spanNumWithOpacity(int z, std::string o) {
	std::string zString = std::to_string(z);
	std::string opacity = std::string("opacity: ");
	opacity.append(o);
	return h("span",
		Data(
			Attrs {
				{"key", zString},
				{"style", opacity}
			}
		),
		zString
	);
};

std::vector<int> shuffle(std::vector<int>& arr, int elms) {
	std::vector<int> newArr;
	newArr.reserve(elms);
	for (int n = 0; n < elms; ++n) {
		newArr[n] = arr[n];
	}
	for (int n = 0; n < elms; ++n) {
		int i = rand() % elms;
		
		int temp = newArr[n];
		newArr[n] = newArr[i];
		newArr[i] = temp;
	}
	return newArr;
};

void shouldHandleRandomShuffles() {
	int n;
	int i;
	std::vector<int> arr;
	std::vector<std::string> opacities;
	int elms = 14;
	int samples = 5;
	
	arr.reserve(elms);
	opacities.reserve(elms);
	for (n = 0; n < elms; ++n) {
		arr[n] = n;
	}
	for (n = 0; n < samples; ++n) {
		Children children;
		for (i = 0; i < elms; ++i) {
			children.push_back(spanNumWithOpacity(arr[i], std::string("1")));
		}
		VNode* vnode1 = h("span", children);

		std::vector<int> shufArr = shuffle(arr, elms);

		emscripten::val elm = emscripten::val::global("document").call<emscripten::val>("createElement", emscripten::val("div"));
		patch(elm, vnode1);
		elm = getNode(vnode1);
		for (i = 0; i < elms; ++i) {
			assertEquals(elm["children"][std::to_string(i)]["innerHTML"], emscripten::val(std::to_string(i)));
			opacities[i] = std::string("0.");
			opacities[i].append(std::to_string(rand() % 99999));
		}
		Children opacityChildren;
		for (i = 0; i < elms; ++i) {
			opacityChildren.push_back(spanNumWithOpacity(shufArr[i], opacities[i]));
		}
		VNode* vnode2 = h("span", opacityChildren);

		patch(vnode1, vnode2);
		elm = getNode(vnode2);
		for (i = 0; i < elms; ++i) {
			assertEquals(elm["children"][std::to_string(i)]["innerHTML"], emscripten::val(std::to_string(shufArr[i])));
			assertEquals(emscripten::val(opacities[i]).call<emscripten::val>("indexOf", elm["children"][std::to_string(i)]["style"]["opacity"]), emscripten::val(0));
		}
		delete vnode2;
	}
};

void shouldSupportNullChildren() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("0")),
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			NULL,
			h(std::string("span"), std::string("2")),
			NULL,
			NULL,
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("0")),
			NULL,
			h(std::string("span"), std::string("5")),
			h(std::string("span"), std::string("4")),
			NULL,
			h(std::string("span"), std::string("3")),
			NULL
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(6));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(6));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("0"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("5"));
	assertEquals(elm["children"]["4"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["5"]["innerHTML"], emscripten::val("3"));
	delete vnode2;
};

void shouldSupportAllNullChildren() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("0")),
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			NULL,
			NULL,
			NULL,
			NULL,
			NULL,
			NULL
		}
	);
	VNode* vnode3 = h("span",
		Children {
			h(std::string("span"), std::string("5")),
			h(std::string("span"), std::string("4")),
			h(std::string("span"), std::string("3")),
			h(std::string("span"), std::string("2")),
			h(std::string("span"), std::string("1")),
			h(std::string("span"), std::string("0"))
		}
	);
	patch(getRoot(), vnode1);
	patch(vnode1, vnode2);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(0));
	patch(vnode2, vnode3);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(6));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("5"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("4"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("3"));
	assertEquals(elm["children"]["3"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["4"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["5"]["innerHTML"], emscripten::val("0"));
	delete vnode3;
};

void shouldHandleRandomShufflesWithNullChildren() {
	int i;
	int j;
	int r;
	int len;
	std::vector<int> arr;
	int maxArrLen = 15;
	int samples = 5;
	VNode* vnode1 = patch(getRoot(), h("div"));
	VNode* vnode2;
	for (i = 0; i < samples; ++i) {
		len = rand() % (maxArrLen + 1);
		arr = std::vector<int>();
		arr.reserve(len);
		for (j = 0; j < len; ++j) {
			r = rand() % 100;
			if (r < 50) arr[j] = j;
			else arr[j] = NULL;
		}
		std::vector<int> shufArr = shuffle(arr, len);
		Children children = Children();
		for (j = 0; j < len; ++j) {
			children.push_back(shufArr[j] == NULL ? NULL : h(std::string("span"), std::to_string(shufArr[j])));
		}
		vnode2 = h("div", children);
		patch(vnode1, vnode2);
		emscripten::val elm = getBodyFirstChild();
		r = 0;
		for (j = 0; j < len; ++j) {
			if (shufArr[j] != NULL) {
				assertEquals(elm["children"][std::to_string(r)]["innerHTML"], emscripten::val(std::to_string(shufArr[j])));
				++r;
			}
		}
		assertEquals(elm["children"]["length"], emscripten::val(r));
		vnode1 = vnode2;
	}
	delete vnode2;
};

void shouldAppendElements2() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("Hello"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("Hello")),
			h(std::string("span"), std::string("World"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(1));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("Hello"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(2));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("Hello"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("World"));
	delete vnode2;
};

void shouldHandleUnmovedTextNodes() {
	VNode* vnode1 = h("div",
		Children {
			h("Text", true),
			h(std::string("span"), std::string("Span"))
		}
	);
	VNode* vnode2 = h("div",
		Children {
			h("Text", true),
			h(std::string("span"), std::string("Span"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Text"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Text"));
	delete vnode2;
};

void shouldHandleChangingTextChildren() {
	VNode* vnode1 = h("div",
		Children {
			h("Text", true),
			h(std::string("span"), std::string("Span"))
		}
	);
	VNode* vnode2 = h("div",
		Children {
			h("Text2", true),
			h(std::string("span"), std::string("Span"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Text"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Text2"));
	delete vnode2;
};

void shouldHandleUnmovedCommentNodes() {
	VNode* vnode1 = h("div",
		Children {
			h(std::string("!"), std::string("Text")),
			h(std::string("span"), std::string("Span"))
		}
	);
	VNode* vnode2 = h("div",
		Children {
			h(std::string("!"), std::string("Text")),
			h(std::string("span"), std::string("Span"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Text"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Text"));
	delete vnode2;
};

void shouldHandleChangingCommentText() {
	VNode* vnode1 = h("div",
		Children {
			h(std::string("!"), std::string("Text")),
			h(std::string("span"), std::string("Span"))
		}
	);
	VNode* vnode2 = h("div",
		Children {
			h(std::string("!"), std::string("Text2")),
			h(std::string("span"), std::string("Span"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Text"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Text2"));
	delete vnode2;
};

void shouldHandleChangingEmptyComment() {
	VNode* vnode1 = h("div",
		Children {
			h("!"),
			h(std::string("span"), std::string("Span"))
		}
	);
	VNode* vnode2 = h("div",
		Children {
			h(std::string("!"), std::string("Test")),
			h(std::string("span"), std::string("Span"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val(""));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Test"));
	delete vnode2;
};

void shouldPrependElements2() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("World"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("span"), std::string("Hello")),
			h(std::string("span"), std::string("World"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(1));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("World"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(2));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("Hello"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("World"));
	delete vnode2;
};

void shouldPrependElementOfDifferentTagType() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("World"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("div"), std::string("Hello")),
			h(std::string("span"), std::string("World"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(1));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("World"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(2));
	assertEquals(elm["children"]["0"]["tagName"], emscripten::val("DIV"));
	assertEquals(elm["children"]["1"]["tagName"], emscripten::val("SPAN"));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("Hello"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("World"));
	delete vnode2;
};

void shouldRemoveElements() {
	VNode* vnode1 = h("div",
		Children {
			h(std::string("span"), std::string("One")),
			h(std::string("span"), std::string("Two")),
			h(std::string("span"), std::string("Three"))
		}
	);
	VNode* vnode2 = h("div",
		Children {
			h(std::string("span"), std::string("One")),
			h(std::string("span"), std::string("Three"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("One"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("Two"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("Three"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("One"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("Three"));
	delete vnode2;
};

void shouldRemoveASingleTextNode() {
	VNode* vnode1 = h(std::string("div"), std::string("One"));
	VNode* vnode2 = h("div");
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["textContent"], emscripten::val("One"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["textContent"], emscripten::val(""));
	delete vnode2;
};

void shouldRemoveASingleTextNodeWhenChildrenAreUpdated() {
	VNode* vnode1 = h(std::string("div"), std::string("One"));
	VNode* vnode2 = h("div",
		Children {
			h(std::string("div"), std::string("Two")),
			h(std::string("span"), std::string("Three"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["textContent"], emscripten::val("One"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Two"));
	assertEquals(elm["childNodes"]["1"]["textContent"], emscripten::val("Three"));
	delete vnode2;
};

void shouldRemoveATextNodeAmongOtherElements() {
	VNode* vnode1 = h("div",
		Children {
			h(std::string("One"), true),
			h(std::string("span"), std::string("Two"))
		}
	);
	VNode* vnode2 = h("div",
		Children {
			h(std::string("div"), std::string("Three"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("One"));
	assertEquals(elm["childNodes"]["1"]["textContent"], emscripten::val("Two"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["length"], emscripten::val(1));
	assertEquals(elm["childNodes"]["0"]["tagName"], emscripten::val("DIV"));
	assertEquals(elm["childNodes"]["0"]["textContent"], emscripten::val("Three"));
	delete vnode2;
};

void shouldReorderElements() {
	VNode* vnode1 = h("span",
		Children {
			h(std::string("span"), std::string("One")),
			h(std::string("div"), std::string("Two")),
			h(std::string("b"), std::string("Three"))
		}
	);
	VNode* vnode2 = h("span",
		Children {
			h(std::string("b"), std::string("Three")),
			h(std::string("span"), std::string("One")),
			h(std::string("div"), std::string("Two"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("One"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("Two"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("Three"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(3));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("Three"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("One"));
	assertEquals(elm["children"]["2"]["innerHTML"], emscripten::val("Two"));
	assertEquals(elm["children"]["0"]["tagName"], emscripten::val("B"));
	assertEquals(elm["children"]["1"]["tagName"], emscripten::val("SPAN"));
	assertEquals(elm["children"]["2"]["tagName"], emscripten::val("DIV"));
	delete vnode2;
};

void shouldSupportNullChildren2() {
	VNode* vnode1 = h("i",
		Children {
			NULL,
			h(std::string("i"), std::string("1")),
			h(std::string("i"), std::string("2")),
			NULL
		}
	);
	VNode* vnode2 = h("i",
		Children {
			h(std::string("i"), std::string("2")),
			NULL,
			NULL,
			h(std::string("i"), std::string("1")),
			NULL
		}
	);
	VNode* vnode3 = h("i",
		Children {
			NULL,
			h(std::string("i"), std::string("1")),
			NULL,
			NULL,
			h(std::string("i"), std::string("2")),
			NULL,
			NULL
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(2));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(2));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("1"));
	patch(vnode2, vnode3);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(2));
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("1"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("2"));
	delete vnode3;
};

void shouldSupportAllNullChildren2() {
	VNode* vnode1 = h("i",
		Children {
			h(std::string("i"), std::string("1")),
			h(std::string("i"), std::string("2"))
		}
	);
	VNode* vnode2 = h("i",
		Children {
			NULL,
			NULL
		}
	);
	VNode* vnode3 = h("i",
		Children {
			h(std::string("i"), std::string("2")),
			h(std::string("i"), std::string("1"))
		}
	);
	patch(getRoot(), vnode1);
	patch(vnode1, vnode2);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["length"], emscripten::val(0));
	patch(vnode2, vnode3);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["innerHTML"], emscripten::val("2"));
	assertEquals(elm["children"]["1"]["innerHTML"], emscripten::val("1"));
	delete vnode3;
};

void shouldSetAsmDomRaws() {
	VNode* vnode1 = h("i",
		Data(
			Props {
				{"foo", emscripten::val("")}
			}
		)
	);
	VNode* vnode2 = h("i",
		Data(
			Props {
				{"bar", emscripten::val("")}
			}
		)
	);
	VNode* vnode3 = h("i");
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["asmDomRaws"]["length"], emscripten::val(1));
	assertEquals(elm["asmDomRaws"]["0"], emscripten::val("foo"));
	patch(vnode1, vnode2);
	assertEquals(elm["asmDomRaws"]["length"], emscripten::val(1));
	assertEquals(elm["asmDomRaws"]["0"], emscripten::val("bar"));
	patch(vnode2, vnode3);
	assertEquals(elm["asmDomRaws"]["length"], emscripten::val(0));
	delete vnode3;
};

// js only:
// should automatically set value as raw
// should automatically set checked as raw

void shouldSetAsmDomEvents() {
	VNode* vnode1 = h("i",
		Data(
			Callbacks {
				{"onclick", onClick}
			}
		)
	);
	VNode* vnode2 = h("i",
		Data(
			Callbacks {
				{"onkeydown", onClick}
			}
		)
	);
	VNode* vnode3 = h("i");
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	emscripten::val keys = emscripten::val::global("Object").call<emscripten::val>("keys", elm["asmDomEvents"]);
	assertEquals(keys["length"], emscripten::val(1));
	assertEquals(keys["0"], emscripten::val("click"));
	patch(vnode1, vnode2);
	keys = emscripten::val::global("Object").call<emscripten::val>("keys", elm["asmDomEvents"]);
	assertEquals(keys["length"], emscripten::val(1));
	assertEquals(keys["0"], emscripten::val("keydown"));
	patch(vnode2, vnode3);
	keys = emscripten::val::global("Object").call<emscripten::val>("keys", elm["asmDomEvents"]);
	assertEquals(keys["length"], emscripten::val(0));
	delete vnode3;
};

EMSCRIPTEN_BINDINGS(patch_tests) {
  emscripten::function("shouldPatchANode", &shouldPatchANode);
	emscripten::function("shouldHaveATag", &shouldHaveATag);
	emscripten::function("shouldHaveTheCorrectNamespace", &shouldHaveTheCorrectNamespace);
	emscripten::function("shouldInjectSvgNamespace", &shouldInjectSvgNamespace);
	emscripten::function("shouldCreateElementsWithClass", &shouldCreateElementsWithClass);
	emscripten::function("shouldCreateElementsWithTextContent", &shouldCreateElementsWithTextContent);
	emscripten::function("shouldCreateElementsWithTextContentInUtf8", &shouldCreateElementsWithTextContentInUtf8);
	emscripten::function("shouldCreateElementsWithSpanAndTextContent", &shouldCreateElementsWithSpanAndTextContent);
	emscripten::function("isAPatchOfTheRootElement", &isAPatchOfTheRootElement);
	emscripten::function("shouldCreateComments", &shouldCreateComments);
	emscripten::function("shouldAppendElements", &shouldAppendElements);
	emscripten::function("shouldPrependElements", &shouldPrependElements);
	emscripten::function("shouldAddElementsInTheMiddle", &shouldAddElementsInTheMiddle);
	emscripten::function("shouldAddElementsAtBeginAndEnd", &shouldAddElementsAtBeginAndEnd);
	emscripten::function("shouldAddChildrenToParentWithNoChildren", &shouldAddChildrenToParentWithNoChildren);
	emscripten::function("shouldRemoveAllChildrenFromParent", &shouldRemoveAllChildrenFromParent);
	emscripten::function("shouldUpdateOneChildWithSameKeyButDifferentSel", &shouldUpdateOneChildWithSameKeyButDifferentSel);
	emscripten::function("shouldRemoveElementsFromTheBeginning", &shouldRemoveElementsFromTheBeginning);
	emscripten::function("shouldRemoveElementsFromTheEnd", &shouldRemoveElementsFromTheEnd);
	emscripten::function("shouldRemoveElementsFromTheMiddle", &shouldRemoveElementsFromTheMiddle);
	emscripten::function("shouldMoveElementForward", &shouldMoveElementForward);
	emscripten::function("shouldMoveElementToEnd", &shouldMoveElementToEnd);
	emscripten::function("shouldMoveElementBackwards", &shouldMoveElementBackwards);
	emscripten::function("shouldSwapFirstAndLast", &shouldSwapFirstAndLast);
	emscripten::function("shouldMoveToLeftAndReplace", &shouldMoveToLeftAndReplace);
	emscripten::function("shouldMoveToLeftAndLeavesHole", &shouldMoveToLeftAndLeavesHole);
	emscripten::function("shouldHandleMovedAndSetToUndefinedElementEndingAtEnd", &shouldHandleMovedAndSetToUndefinedElementEndingAtEnd);
	emscripten::function("shouldMoveAKeyInNonKeyedNodesWithASizeUp", &shouldMoveAKeyInNonKeyedNodesWithASizeUp);
	emscripten::function("shouldReverseElements", &shouldReverseElements);
	emscripten::function("shouldReverseElementsWith0", &shouldReverseElementsWith0);
	emscripten::function("shouldHandleRandomShuffles", &shouldHandleRandomShuffles);
	emscripten::function("shouldSupportNullChildren", &shouldSupportNullChildren);
	emscripten::function("shouldSupportAllNullChildren", &shouldSupportAllNullChildren);
	emscripten::function("shouldHandleRandomShufflesWithNullChildren", &shouldHandleRandomShufflesWithNullChildren);
	emscripten::function("shouldAppendElements2", &shouldAppendElements2);
	emscripten::function("shouldHandleUnmovedTextNodes", &shouldHandleUnmovedTextNodes);
	emscripten::function("shouldHandleChangingTextChildren", &shouldHandleChangingTextChildren);
	emscripten::function("shouldHandleUnmovedCommentNodes", &shouldHandleUnmovedCommentNodes);
	emscripten::function("shouldHandleChangingCommentText", &shouldHandleChangingCommentText);
	emscripten::function("shouldHandleChangingEmptyComment", &shouldHandleChangingEmptyComment);
	emscripten::function("shouldPrependElements2", &shouldPrependElements2);
	emscripten::function("shouldPrependElementOfDifferentTagType", &shouldPrependElementOfDifferentTagType);
	emscripten::function("shouldRemoveElements", &shouldRemoveElements);
	emscripten::function("shouldRemoveASingleTextNode", &shouldRemoveASingleTextNode);
	emscripten::function("shouldRemoveASingleTextNodeWhenChildrenAreUpdated", &shouldRemoveASingleTextNodeWhenChildrenAreUpdated);
	emscripten::function("shouldRemoveATextNodeAmongOtherElements", &shouldRemoveATextNodeAmongOtherElements);
	emscripten::function("shouldReorderElements", &shouldReorderElements);
	emscripten::function("shouldSupportNullChildren2", &shouldSupportNullChildren2);
	emscripten::function("shouldSupportAllNullChildren2", &shouldSupportAllNullChildren2);
	emscripten::function("shouldSetAsmDomRaws", &shouldSetAsmDomRaws);
	emscripten::function("shouldSetAsmDomEvents", &shouldSetAsmDomEvents);
};
