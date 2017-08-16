#include "../cpp/asm-dom.hpp"
#include <emscripten/bind.h>
#include <cstdint>
#include <codecvt>
#include <locale>
#include <string>

using namespace asmdom;

void deleteVNodePtr(const std::uintptr_t& vnodePtr) {
  deleteVNode(reinterpret_cast<VNode*>(vnodePtr));
};

int getNode(const std::uintptr_t& vnodePtr) {
  return reinterpret_cast<VNode*>(vnodePtr)->elm;
};

void patchPtr(const std::uintptr_t& oldVnode, const std::uintptr_t& vnode) {
	patch(reinterpret_cast<VNode*>(oldVnode), reinterpret_cast<VNode*>(vnode));
};

std::string wstring_to_utf8(const std::wstring& str) {
  std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
  return converter.to_bytes(str);
};

std::uintptr_t h_s(const std::wstring& sel) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel)));
};

std::uintptr_t h_ti(const std::wstring& nodeText, bool isText) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(nodeText), isText));
};

std::uintptr_t h_sn(const std::wstring& sel, const std::uintptr_t& node) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), reinterpret_cast<VNode*>(node)));
};

std::uintptr_t h_st(const std::wstring& sel, const std::wstring& nodeText) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), wstring_to_utf8(nodeText)));
};

std::uintptr_t h_sd(const std::wstring& sel, const Attrs& nodeAttrs) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), Data(nodeAttrs)));
};

std::uintptr_t h_sc(const std::wstring& sel, const std::vector<std::uintptr_t>& nodeChildren) {
  Children children = Children();
  for(std::vector<std::uintptr_t>::size_type i = 0; i < nodeChildren.size(); ++i) {
    children.push_back(reinterpret_cast<VNode*>(nodeChildren[i]));
  }
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), children));
};

std::uintptr_t h_sdn(const std::wstring& sel, const Attrs& nodeAttrs, const std::uintptr_t& node) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), Data(nodeAttrs), reinterpret_cast<VNode*>(node)));
};

std::uintptr_t h_sdt(const std::wstring& sel, const Attrs& nodeAttrs, const std::wstring& nodeText) {
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), Data(nodeAttrs), wstring_to_utf8(nodeText)));
};

std::uintptr_t h_sdc(const std::wstring& sel, const Attrs& nodeAttrs, const std::vector<std::uintptr_t>& nodeChildren) {
  Children children = Children();
  for(std::vector<std::uintptr_t>::size_type i = 0; i < nodeChildren.size(); ++i) {
    children.push_back(reinterpret_cast<VNode*>(nodeChildren[i]));
  }
  return reinterpret_cast<std::uintptr_t>(h(wstring_to_utf8(sel), Data(nodeAttrs), children));
};

std::uintptr_t h_elm(const std::wstring& sel, const Attrs& nodeAttrs, const int elm) {
  VNode* vnode = h(wstring_to_utf8(sel), Data(nodeAttrs));
  vnode->elm = elm;
  return reinterpret_cast<std::uintptr_t>(vnode);
};

EMSCRIPTEN_BINDINGS(bindings) {
  emscripten::register_map<std::string, std::string>("MapStringString");
  emscripten::register_vector<std::uintptr_t>("VNodePtrVector");
  emscripten::function("_deleteVNode", &deleteVNodePtr);
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