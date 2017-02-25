#ifndef HtmlDOMApi_hpp
#define HtmlDOMApi_hpp

#include <emscripten/val.h>

emscripten::val createElement(char* tagName);
emscripten::val createElementNS(char* namespaceURI, char* qualifiedName);
emscripten::val createTextNode(char* text);
emscripten::val createComment(char* text);
emscripten::val createElement(char* tagName);
emscripten::val createElementNS(char* namespaceURI, char* qualifiedName);
emscripten::val createTextNode(char* text);
emscripten::val createComment(char* text);
void insertBefore(emscripten::val parentNode, emscripten::val newNode, emscripten::val referenceNode);
void removeChild(emscripten::val node, emscripten::val child);
void appendChild(emscripten::val node, emscripten::val child);
emscripten::val parentNode(emscripten::val node);
emscripten::val nextSibling(emscripten::val node);
std::string tagName(emscripten::val elm);
void setTextContent(emscripten::val node, char* text);
std::string getTextContent(emscripten::val node);
bool isElement(emscripten::val node);
bool isText(emscripten::val node);
bool isComment(emscripten::val node);

#endif