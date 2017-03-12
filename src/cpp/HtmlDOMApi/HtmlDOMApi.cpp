#include "HtmlDOMApi.hpp"
#include "../Val/Val.hpp"
#include <string>

val createElement(std::string tagName) {
  return val::global("document").call<val>("createElement", tagName);
}

val createElementNS(std::string namespaceURI, std::string qualifiedName) {
  return val::global("document").call<val>("createElementNS", namespaceURI, qualifiedName);
}

val createTextNode(std::string text) {
  return val::global("document").call<val>("createTextNode", text);
}

val createComment(std::string text) {
  return val::global("document").call<val>("createComment", text);
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

void setTextContent(val node, std::string text) {
  node.set("textContent", text);
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
