#ifndef HtmlDOMApi_hpp
#define HtmlDOMApi_hpp

#include <emscripten/val.h>
#include <string>

emscripten::val createElement(std::string tagName);
emscripten::val createElementNS(std::string namespaceURI, std::string qualifiedName);
emscripten::val createTextNode(std::string text);
emscripten::val createComment(std::string text);
void insertBefore(emscripten::val parentNode, emscripten::val newNode, emscripten::val referenceNode);
void removeChild(emscripten::val node, emscripten::val child);
void appendChild(emscripten::val node, emscripten::val child);
emscripten::val parentNode(emscripten::val node);
emscripten::val nextSibling(emscripten::val node);
std::string tagName(emscripten::val elm);
void setTextContent(emscripten::val node, std::string text);
std::string getTextContent(emscripten::val node);
bool isElement(emscripten::val node);
bool isText(emscripten::val node);
bool isComment(emscripten::val node);

#endif