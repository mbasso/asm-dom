#include "HtmlDOMApi.hpp"
#include <emscripten/val.h>
#include <string>

using namespace emscripten;

val createElement(char* tagName) {
  return val::global("document").call<val>("createElement", std::string(tagName));
}

val createElementNS(char* namespaceURI, char* qualifiedName) {
  return val::global("document").call<val>("createElementNS", std::string(namespaceURI), std::string(qualifiedName));
}

val createTextNode(char* text) {
  return val::global("document").call<val>("createTextNode", std::string(text));
}

val createComment(char* text) {
  return val::global("document").call<val>("createComment", std::string(text));
}

void insertBefore(val parentNode, val newNode, val referenceNode) {
  parentNode.call<void>("insertBefore", newNode, referenceNode);
}

void removeChild(val node, val child) {
  node.call<void>("removeChild", child);
}

void appendChild(val node, val child) {
  node.call<void>("appendChild", child);
}

val parentNode(val node) {
  return node["parentNode"];
}

val nextSibling(val node) {
  return node["nextSibling"];
}

std::string tagName(val elm) {
  return elm["tagName"].as<std::string>();
}

void setTextContent(val node, char* text) {
  node.set("textContent", std::string(text));
}

std::string getTextContent(val node) {
  return node["nodeType"].as<std::string>();
}

bool isElement(val node) {
  return node["nodeType"].as<int>() == 1;
}

bool isText(val node) {
  return node["nodeType"].as<int>() == 3;
}

bool isComment(val node) {
  return node["nodeType"].as<int>() == 8;
}
