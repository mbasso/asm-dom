#ifndef HtmlDOMApi_hpp
#define HtmlDOMApi_hpp

#include <emscripten/val.h>

using namespace emscripten;

val createElement(char* tagName);
val createElementNS(char* namespaceURI, char* qualifiedName);
val createTextNode(char* text);
val createComment(char* text);
val createElement(char* tagName);
val createElementNS(char* namespaceURI, char* qualifiedName);
val createTextNode(char* text);
val createComment(char* text);
void insertBefore(val parentNode, val newNode, val referenceNode);
void removeChild(val node, val child);
void appendChild(val node, val child);
val parentNode(val node);
val nextSibling(val node);
std::string tagName(val elm);
void setTextContent(val node, char* text);
std::string getTextContent(val node);
bool isElement(val node);
bool isText(val node);
bool isComment(val node);

#endif