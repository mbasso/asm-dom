#include "../cpp/asm-dom.hpp"
#include "../cpp/asm-dom-server.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <cstdint>
#include <codecvt>
#include <locale>
#include <string>
#include <map>

using namespace asmdom;

Attrs toUtf8Attrs(std::map<std::wstring, std::wstring> utf16Attrs) {
  Attrs utf8Attrs;
  for (auto& it : utf16Attrs) {
    utf8Attrs[wstring_to_utf8(it.first)] = wstring_to_utf8(it.second);
  }
  return utf8Attrs;
}

void deleteVNodePtr(const std::uintptr_t& vnodePtr) {
  deleteVNode(reinterpret_cast<VNode*>(vnodePtr));
};

std::uintptr_t toVNodePtr(const emscripten::val& node) {
  return reinterpret_cast<std::uintptr_t>(toVNode(node));
};

int getNode(const std::uintptr_t& vnodePtr) {
  return reinterpret_cast<VNode*>(vnodePtr)->elm;
};

void patchPtr(const std::uintptr_t& oldVnode, const std::uintptr_t& vnode) {
	patch(reinterpret_cast<VNode*>(oldVnode), reinterpret_cast<VNode*>(vnode));
};

std::wstring ptrToHTML(const std::uintptr_t& vnode) {
	return utf8_to_wstring(toHTML(reinterpret_cast<VNode*>(vnode)));
};

std::uintptr_t h_s(const std::wstring& sel) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel)));
};

std::uintptr_t h_ti(const std::wstring& nodeText, bool text) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(nodeText), text));
};

std::uintptr_t h_sn(const std::wstring& sel, const std::uintptr_t& node) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), reinterpret_cast<VNode*>(node)));
};

std::uintptr_t h_st(const std::wstring& sel, const std::wstring& nodeText) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), wstring_to_utf8(nodeText)));
};

std::uintptr_t h_sd(const std::wstring& sel, const std::map<std::wstring, std::wstring>& nodeAttrs) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), Data(toUtf8Attrs(nodeAttrs))));
};

std::uintptr_t h_sc(const std::wstring& sel, const std::vector<std::uintptr_t>& nodeChildren) {
  Children children = Children();
  for(std::vector<std::uintptr_t>::size_type i = 0; i < nodeChildren.size(); ++i) {
    children.push_back(reinterpret_cast<VNode*>(nodeChildren[i]));
  }
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), children));
};

std::uintptr_t h_sdn(const std::wstring& sel, const std::map<std::wstring, std::wstring>& nodeAttrs, const std::uintptr_t& node) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), Data(toUtf8Attrs(nodeAttrs)), reinterpret_cast<VNode*>(node)));
};

std::uintptr_t h_sdt(const std::wstring& sel, const std::map<std::wstring, std::wstring>& nodeAttrs, const std::wstring& nodeText) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), Data(toUtf8Attrs(nodeAttrs)), wstring_to_utf8(nodeText)));
};

std::uintptr_t h_sdc(const std::wstring& sel, const std::map<std::wstring, std::wstring>& nodeAttrs, const std::vector<std::uintptr_t>& nodeChildren) {
  Children children = Children();
  for(std::vector<std::uintptr_t>::size_type i = 0; i < nodeChildren.size(); ++i) {
    children.push_back(reinterpret_cast<VNode*>(nodeChildren[i]));
  }
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), Data(toUtf8Attrs(nodeAttrs)), children));
};

std::uintptr_t h_elm(const std::wstring& sel, const std::map<std::wstring, std::wstring>& nodeAttrs, const int elm) {
  VNode* vnode = h(wstring_to_utf8(sel), Data(toUtf8Attrs(nodeAttrs)));
  vnode->elm = elm;
  return reinterpret_cast<std::uintptr_t>(vnode);
};

int main() {
  Config config = Config();
  init(config);

  return 0;
};

EMSCRIPTEN_BINDINGS(bindings) {
  emscripten::register_map<std::wstring, std::wstring>("MapStringString");
  emscripten::register_vector<std::uintptr_t>("VNodePtrVector");
  emscripten::function("_deleteVNode", &deleteVNodePtr);
  emscripten::function("toVNode", &toVNodePtr);
  emscripten::function("_toHTML", &ptrToHTML);
  emscripten::function("_getNode", &getNode);
	emscripten::function("_patch", &patchPtr);
  emscripten::function("_h_s", &h_s);
  emscripten::function("_h_ti", &h_ti);
  emscripten::function("_h_sn", &h_sn);
  emscripten::function("_h_st", &h_st);
  emscripten::function("_h_sd", &h_sd);
  emscripten::function("_h_sc", &h_sc);
  emscripten::function("_h_sdn", &h_sdn);
  emscripten::function("_h_sdt", &h_sdt);
  emscripten::function("_h_sdc", &h_sdc);
  emscripten::function("_h_elm", &h_elm);
}