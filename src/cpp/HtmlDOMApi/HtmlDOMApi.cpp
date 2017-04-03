#include "HtmlDOMApi.hpp"
#include <emscripten/val.h>
#include <string>

static emscripten::val document = emscripten::val::global("document");

emscripten::val createElement(const std::string tagName) {
  return document.call<emscripten::val>("createElement", tagName);
}

emscripten::val createElementNS(const std::string namespaceURI, const std::string qualifiedName) {
  return document.call<emscripten::val>("createElementNS", namespaceURI, qualifiedName);
}

emscripten::val createTextNode(const std::string text) {
  return document.call<emscripten::val>("createTextNode", text);
}

emscripten::val createComment(const std::string text) {
  return document.call<emscripten::val>("createComment", text);
}

void insertBefore(emscripten::val parentNode, const emscripten::val newNode, const emscripten::val referenceNode) {
  parentNode.call<void>("insertBefore", newNode, referenceNode);
}

void removeChild(emscripten::val node, const emscripten::val child) {
  node.call<void>("removeChild", child);
}

void appendChild(emscripten::val node, const emscripten::val child) {
  node.call<void>("appendChild", child);
}

emscripten::val parentNode(const emscripten::val node) {
  return node["parentNode"];
}

emscripten::val nextSibling(const emscripten::val node) {
  return node["nextSibling"];
}

std::string tagName(const emscripten::val elm) {
  return elm["tagName"].as<std::string>();
}

void setTextContent(emscripten::val node, const std::string text) {
  node.set("textContent", text);
}

std::string getTextContent(const emscripten::val node) {
  return node["textContent"].as<std::string>();
}

bool isElement(const emscripten::val node) {
  return node["nodeType"].as<int>() == 1;
}

bool isText(const emscripten::val node) {
  return node["nodeType"].as<int>() == 3;
}

bool isComment(const emscripten::val node) {
  return node["nodeType"].as<int>() == 8;
}
