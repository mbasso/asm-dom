#ifndef HtmlDOMApi_hpp
#define HtmlDOMApi_hpp

#include <emscripten/val.h>
#include <string>

emscripten::val createElement(const std::string& tagName);
emscripten::val createElementNS(const std::string& namespaceURI, const std::string& qualifiedName);
emscripten::val createTextNode(const std::string& text);
emscripten::val createComment(const std::string& text);
void insertBefore(emscripten::val& parentNode, const emscripten::val& newNode, const emscripten::val& referenceNode);
void removeChild(emscripten::val& node, const emscripten::val& child);
void appendChild(emscripten::val& node, const emscripten::val& child);
emscripten::val parentNode(const emscripten::val& node);
emscripten::val nextSibling(const emscripten::val& node);
std::string tagName(const emscripten::val& elm);
void setTextContent(emscripten::val& node, const std::string& text);
std::string getTextContent(const emscripten::val& node);
bool isElement(const emscripten::val& node);
bool isText(const emscripten::val& node);
bool isComment(const emscripten::val& node);

#endif
