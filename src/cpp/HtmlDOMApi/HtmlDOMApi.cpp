#include "HtmlDOMApi.hpp"
#include <emscripten/val.h>
#include <string>

emscripten::val createElement(std::string tagName) {
  return emscripten::val::global("document").call<emscripten::val>("createElement", tagName);
}

emscripten::val createElementNS(std::string namespaceURI, std::string qualifiedName) {
  return emscripten::val::global("document").call<emscripten::val>("createElementNS", namespaceURI, qualifiedName);
}

emscripten::val createTextNode(std::string text) {
  return emscripten::val::global("document").call<emscripten::val>("createTextNode", text);
}

emscripten::val createComment(std::string text) {
  return emscripten::val::global("document").call<emscripten::val>("createComment", text);
}

void insertBefore(emscripten::val parentNode, emscripten::val newNode, emscripten::val referenceNode) {
  parentNode.call<void>("insertBefore", newNode, referenceNode);
}

void removeChild(emscripten::val node, emscripten::val child) {
  node.call<void>("removeChild", child);
}

void appendChild(emscripten::val node, emscripten::val child) {
  node.call<void>("appendChild", child);
}

emscripten::val parentNode(emscripten::val node) {
  return node["parentNode"];
}

emscripten::val nextSibling(emscripten::val node) {
  return node["nextSibling"];
}

std::string tagName(emscripten::val elm) {
  return elm["tagName"].as<std::string>();
}

void setTextContent(emscripten::val node, std::string text) {
  node.set("textContent", text);
}

std::string getTextContent(emscripten::val node) {
  return node["textContent"].as<std::string>();
}

bool isElement(emscripten::val node) {
  return node["nodeType"].as<int>() == 1;
}

bool isText(emscripten::val node) {
  return node["nodeType"].as<int>() == 3;
}

bool isComment(emscripten::val node) {
  return node["nodeType"].as<int>() == 8;
}
