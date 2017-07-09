#include "../asm-dom.hpp"
#include <emscripten/bind.h>
#include <cstdint>
#include <string>

using namespace asmdom;

void deleteVNodePtr(const std::uintptr_t& vnodePtr) {
  deleteVNode(reinterpret_cast<VNode*>(vnodePtr));
};

void removeChildPtr(const std::uintptr_t& parent, const std::uintptr_t& child) {
  reinterpret_cast<VNode*>(parent)->removeChild(reinterpret_cast<VNode*>(child));
};

void replaceChildPtr(const std::uintptr_t& parent, const std::uintptr_t& oldChild, const std::uintptr_t& newChild) {
  reinterpret_cast<VNode*>(parent)->replaceChild(reinterpret_cast<VNode*>(oldChild), reinterpret_cast<VNode*>(newChild));
};

int getNode(const std::uintptr_t& vnodePtr) {
  return reinterpret_cast<VNode*>(vnodePtr)->elm;
};

void patchPtr(const std::uintptr_t& oldVnode, const std::uintptr_t& vnode) {
	patch(reinterpret_cast<VNode*>(oldVnode), reinterpret_cast<VNode*>(vnode));
};

EMSCRIPTEN_BINDINGS(bindings) {
  emscripten::register_map<std::string, std::string>("MapStringString");
  emscripten::register_vector<std::uintptr_t>("VNodePtrVector");
  emscripten::function("_deleteVNode", &deleteVNodePtr);
  emscripten::function("removeChild", &removeChildPtr);
  emscripten::function("replaceChild", &replaceChildPtr);
  emscripten::function("_getNode", &getNode);
	emscripten::function("_patch", &patchPtr);
}