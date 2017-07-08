#include "../../../src/asm-dom.hpp"
#include "../utils.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>

using namespace asmdom;

void shouldPatchANode() {
	assertEquals(emscripten::val::global("document")["body"]["children"]["length"], emscripten::val(1));
	assertEquals(emscripten::val::global("document")["body"]["firstChild"], emscripten::val(getRoot()));
	VNode* vnode = new VNode("span");
	patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(emscripten::val::global("document")["body"]["children"]["length"], emscripten::val(1));
	assertEquals(elm["nodeName"], emscripten::val("SPAN"));
	assertEquals(elm["className"], emscripten::val(""));
	deleteVNode(vnode);
};

void shouldHaveATag() {
	VNode* vnode = new VNode("div");
	VNode* elmPtr = patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["tagName"], emscripten::val("DIV"));
	deleteVNode(elmPtr);
};

void shouldHaveTheCorrectNamespace() {
	std::string svgNamespace = "http://www.w3.org/2000/svg";
	VNode* vnode = new VNode("div",
		new VNode("div", 
			new VNodeData(
				VNodeAttrs {
					{"ns", svgNamespace}
				}
			)
		)
	);
	patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["firstChild"]["namespaceURI"], emscripten::val(svgNamespace));
	deleteVNode(vnode);
};

void shouldCreateElementsWithClass() {
	VNode* vnode = new VNode("div",
		new VNodeData(
			VNodeAttrs {
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
	deleteVNode(elmPtr);
};

void shouldCreateElementsWithTextContent() {
	VNode* vnode = new VNode("div",
		VNodeChildren {
			new VNode("I am a string", true)
		}
	);
	VNode* elmPtr = patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["innerHTML"], emscripten::val("I am a string"));
	deleteVNode(elmPtr);
};

void shouldCreateElementsWithSpanAndTextContent() {
	VNode* vnode = new VNode("a",
		VNodeChildren {
			new VNode("span"),
			new VNode("I am a string", true)
		}
	);
	VNode* elmPtr = patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["childNodes"]["0"]["tagName"], emscripten::val("SPAN"));
	assertEquals(elm["childNodes"]["1"]["textContent"], emscripten::val("I am a string"));
	deleteVNode(elmPtr);
};

// TODO
void isAPatchOfTheRootElement() {};

void shouldCreateComments() {
	VNode* vnode = new VNode(std::string("!"), std::string("test"));
	VNode* elmPtr = patch(getRoot(), vnode);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["nodeType"], emscripten::val::global("document")["COMMENT_NODE"]);
	assertEquals(elm["textContent"], emscripten::val("test"));
	deleteVNode(elmPtr);
};

void shouldAppendElements() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3"))
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
	deleteVNode(vnode2);
};

void shouldPrependElements() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
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
	deleteVNode(vnode2);
};

void shouldAddElementsInTheMiddle() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
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
	deleteVNode(vnode2);
};

void shouldAddElementsAtBeginAndEnd() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
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
	deleteVNode(vnode2);
};

void shouldAddChildrenToParentWithNoChildren() {
	VNode* vnode1 = new VNode("span",
		new VNodeData (
			VNodeAttrs {
				{"key", "span"}
			}
		)
	);
	VNode* vnode2 = new VNode("span",
		new VNodeData (
			VNodeAttrs {
				{"key", "span"}
			}
		),
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3"))
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
	deleteVNode(vnode2);
};

void shouldRemoveAllChildrenFromParent() {
	VNode* vnode1 = new VNode("span",
		new VNodeData (
			VNodeAttrs {
				{"key", "span"}
			}
		),
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3"))
		}
	);
	VNode* vnode2 = new VNode("span",
		new VNodeData (
			VNodeAttrs {
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
	deleteVNode(vnode2);
};

void shouldUpdateOneChildWithSameKeyButDifferentSel() {
	VNode* vnode1 = new VNode("span",
		new VNodeData (
			VNodeAttrs {
				{"key", "span"}
			}
		),
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3"))
		}
	);
	VNode* vnode2 = new VNode("span",
		new VNodeData (
			VNodeAttrs {
				{"key", "span"}
			}
		),
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode("i",
				new VNodeData (
					VNodeAttrs {
						{"key", "2"}
					}
				),
				std::string("2")
			),
			new VNode(std::string("span"), std::string("3"))
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
	deleteVNode(vnode2);
};

void shouldRemoveElementsFromTheBeginning() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
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
	deleteVNode(vnode2);
};

void shouldRemoveElementsFromTheEnd() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3"))
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
	deleteVNode(vnode2);
};

void shouldRemoveElementsFromTheMiddle() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
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
	deleteVNode(vnode2);
};

void shouldMoveElementForward() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("4"))
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
	deleteVNode(vnode2);
};

void shouldMoveElementToEnd() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("1"))
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
	deleteVNode(vnode2);
};

void shouldMoveElementBackwards() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3"))
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
	deleteVNode(vnode2);
};

void shouldSwapFirstAndLast() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("1"))
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
	deleteVNode(vnode2);
};

void shouldMoveToLeftAndReplace() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("6"))
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
	deleteVNode(vnode2);
};

void shouldMoveToLeftAndLeavesHole() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("6"))
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
	deleteVNode(vnode2);
};

void shouldHandleMovedAndSetToUndefinedElementEndingAtEnd() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5")),
			new VNode(std::string("span"), std::string("3"))
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
	deleteVNode(vnode2);
};

void shouldMoveAKeyInNonKeyedNodesWithASizeUp() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("a")),
			new VNode(std::string("span"), std::string("b")),
			new VNode(std::string("span"), std::string("c"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("d")),
			new VNode(std::string("span"), std::string("a")),
			new VNode(std::string("span"), std::string("b")),
			new VNode(std::string("span"), std::string("c")),
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("e"))
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
	deleteVNode(vnode2);
};

void shouldReverseElements() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5")),
			new VNode(std::string("span"), std::string("6")),
			new VNode(std::string("span"), std::string("7")),
			new VNode(std::string("span"), std::string("8"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("8")),
			new VNode(std::string("span"), std::string("7")),
			new VNode(std::string("span"), std::string("6")),
			new VNode(std::string("span"), std::string("5")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("1"))
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
	deleteVNode(vnode2);
};

void shouldReverseElementsWith0() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("0")),
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("5")),
			new VNode(std::string("span"), std::string("0"))
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
	deleteVNode(vnode2);
};

// TODO
void shouldHandleRandomShuffles() {};

// TODO
void shouldSupportNullChildren() {
	/* VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("0")),
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("2")),
			new VNode(std::string("span"), std::string("3")),
			new VNode(std::string("span"), std::string("4")),
			new VNode(std::string("span"), std::string("5"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			NULL,
			new VNode(std::string("span"), std::string("2")),
			NULL,
			NULL,
			new VNode(std::string("span"), std::string("1")),
			new VNode(std::string("span"), std::string("0")),
			NULL,
			new VNode(std::string("span"), std::string("5")),
			new VNode(std::string("span"), std::string("4")),
			NULL,
			new VNode(std::string("span"), std::string("3")),
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
	deleteVNode(vnode2); */
};

// TODO
void shouldSupportAllNullChildren() {};
void shouldHandleRandomShufflesWithNullChildren() {};

void shouldAppendElements2() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("Hello"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("Hello")),
			new VNode(std::string("span"), std::string("World"))
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
	deleteVNode(vnode2);
};

// TODO
void shouldHandleUnmovedTextNodes() {
	/* VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode("Text", true),
			new VNode(std::string("span"), std::string("Span"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode("Text", true),
			new VNode(std::string("span"), std::string("Span"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["textContent"], emscripten::val("Text"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["textContent"], emscripten::val("Text"));
	deleteVNode(vnode2); */
};

// TODO
void shouldHandleChangingTextChildren() {
	/* VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode("Text", true),
			new VNode(std::string("span"), std::string("Span"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode("Text2", true),
			new VNode(std::string("span"), std::string("Span"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["textContent"], emscripten::val("Text"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["textContent"], emscripten::val("Text2"));
	deleteVNode(vnode2); */
};

// TODO
void shouldHandleUnmovedCommentNodes() {
	/* VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("!"), std::string("Text")),
			new VNode(std::string("span"), std::string("Span"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("!"), std::string("Text")),
			new VNode(std::string("span"), std::string("Span"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["textContent"], emscripten::val("Text"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["textContent"], emscripten::val("Text"));
	deleteVNode(vnode2); */
};

// TODO
void shouldHandleChangingCommentText() {
	/* VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("!"), std::string("Text")),
			new VNode(std::string("span"), std::string("Span"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("!"), std::string("Text2")),
			new VNode(std::string("span"), std::string("Span"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["textContent"], emscripten::val("Text"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["textContent"], emscripten::val("Text2"));
	deleteVNode(vnode2); */
};

// TODO
void shouldHandleChangingEmptyComment() {
	/* VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode("!"),
			new VNode(std::string("span"), std::string("Span"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("!"), std::string("Test")),
			new VNode(std::string("span"), std::string("Span"))
		}
	);
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["textContent"], emscripten::val(""));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["children"]["0"]["textContent"], emscripten::val("Test"));
	deleteVNode(vnode2); */
};

void shouldPrependElements2() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("World"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("Hello")),
			new VNode(std::string("span"), std::string("World"))
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
	deleteVNode(vnode2);
};

void shouldPrependElementOfDifferentTagType() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("World"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("div"), std::string("Hello")),
			new VNode(std::string("span"), std::string("World"))
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
	deleteVNode(vnode2);
};

void shouldRemoveElements() {
	VNode* vnode1 = new VNode("div",
		VNodeChildren {
			new VNode(std::string("span"), std::string("One")),
			new VNode(std::string("span"), std::string("Two")),
			new VNode(std::string("span"), std::string("Three"))
		}
	);
	VNode* vnode2 = new VNode("div",
		VNodeChildren {
			new VNode(std::string("span"), std::string("One")),
			new VNode(std::string("span"), std::string("Three"))
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
	deleteVNode(vnode2);
};

void shouldRemoveASingleTextNode() {
	VNode* vnode1 = new VNode(std::string("div"), std::string("One"));
	VNode* vnode2 = new VNode("div");
	patch(getRoot(), vnode1);
	emscripten::val elm = getBodyFirstChild();
	assertEquals(elm["textContent"], emscripten::val("One"));
	patch(vnode1, vnode2);
	elm = getBodyFirstChild();
	assertEquals(elm["textContent"], emscripten::val(""));
	deleteVNode(vnode2);
};

// TODO
void shouldRemoveASingleTextNodeWhenChildrenAreUpdated() {};
void shouldRemoveATextNodeAmongOtherElements() {};

void shouldReorderElements() {
	VNode* vnode1 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("span"), std::string("One")),
			new VNode(std::string("div"), std::string("Two")),
			new VNode(std::string("b"), std::string("Three"))
		}
	);
	VNode* vnode2 = new VNode("span",
		VNodeChildren {
			new VNode(std::string("b"), std::string("Three")),
			new VNode(std::string("span"), std::string("One")),
			new VNode(std::string("div"), std::string("Two"))
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
	deleteVNode(vnode2);
};

// TODO
void shouldSupportNullChildren2() {};

// TODO
void shouldSupportAllNullChildren2() {
	/* VNode* vnode1 = new VNode("i",
		VNodeChildren {
			new VNode(std::string("i"), std::string("1")),
			new VNode(std::string("i"), std::string("2"))
		}
	);
	VNode* vnode2 = new VNode("i",
		VNodeChildren {
			NULL,
			NULL
		}
	);
	VNode* vnode3 = new VNode("i",
		VNodeChildren {
			new VNode(std::string("i"), std::string("2")),
			new VNode(std::string("i"), std::string("1"))
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
	deleteVNode(vnode3); */
};

EMSCRIPTEN_BINDINGS(patch_tests) {
  emscripten::function("shouldPatchANode", &shouldPatchANode);
	emscripten::function("shouldHaveATag", &shouldHaveATag);
	emscripten::function("shouldHaveTheCorrectNamespace", &shouldHaveTheCorrectNamespace);
	emscripten::function("shouldCreateElementsWithClass", &shouldCreateElementsWithClass);
	emscripten::function("shouldCreateElementsWithTextContent", &shouldCreateElementsWithTextContent);
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
};
