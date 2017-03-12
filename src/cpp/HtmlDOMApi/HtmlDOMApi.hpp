#ifndef HtmlDOMApi_hpp
#define HtmlDOMApi_hpp

#include "../Val/Val.hpp"
#include <string.h>

val createElement(std::string tagName);
val createElementNS(std::string namespaceURI, std::string qualifiedName);
val createTextNode(std::string text);
val createComment(std::string text);
void insertBefore(val parentNode, val newNode, val referenceNode);
void removeChild(val node, val child);
void appendChild(val node, val child);
val parentNode(val node);
val nextSibling(val node);
std::string tagName(val elm);
void setTextContent(val node, std::string text);
std::string getTextContent(val node);
bool isElement(val node);
bool isText(val node);
bool isComment(val node);

#endif