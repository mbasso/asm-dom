#include "../asm-dom.hpp"
#include <emscripten/bind.h>
#include <cstdint>
#include <codecvt>
#include <locale>
#include <string>

using namespace asmdom;

std::string wstring_to_utf8(const std::wstring& str) {
  std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
  return converter.to_bytes(str);
};

std::uintptr_t h_s(const std::wstring& sel) {
  return reinterpret_cast<std::uintptr_t>(new VNode(wstring_to_utf8(sel)));
};

std::uintptr_t h_ti(const std::wstring& nodeText, bool isText) {
  return reinterpret_cast<std::uintptr_t>(new VNode(wstring_to_utf8(nodeText), isText));
};

std::uintptr_t h_sn(const std::wstring& sel, const std::uintptr_t& node) {
  return reinterpret_cast<std::uintptr_t>(new VNode(wstring_to_utf8(sel), reinterpret_cast<VNode*>(node)));
};

std::uintptr_t h_st(const std::wstring& sel, const std::wstring& nodeText) {
  return reinterpret_cast<std::uintptr_t>(new VNode(wstring_to_utf8(sel), wstring_to_utf8(nodeText)));
};

std::uintptr_t h_sd(const std::wstring& sel, const VNodeAttrs& nodeAttrs) {
  return reinterpret_cast<std::uintptr_t>(new VNode(wstring_to_utf8(sel), new VNodeData(nodeAttrs)));
};

std::uintptr_t h_sc(const std::wstring& sel, const std::vector<std::uintptr_t>& nodeChildren) {
  VNodeChildren children = VNodeChildren();
  for(std::vector<std::uintptr_t>::size_type i = 0; i < nodeChildren.size(); ++i) {
    children.push_back(reinterpret_cast<VNode*>(nodeChildren[i]));
  }
  return reinterpret_cast<std::uintptr_t>(new VNode(wstring_to_utf8(sel), children));
};

std::uintptr_t h_sdn(const std::wstring& sel, const VNodeAttrs& nodeAttrs, const std::uintptr_t& node) {
  return reinterpret_cast<std::uintptr_t>(new VNode(wstring_to_utf8(sel), new VNodeData(nodeAttrs), reinterpret_cast<VNode*>(node)));
};

std::uintptr_t h_sdt(const std::wstring& sel, const VNodeAttrs& nodeAttrs, const std::wstring& nodeText) {
  return reinterpret_cast<std::uintptr_t>(new VNode(wstring_to_utf8(sel), new VNodeData(nodeAttrs), wstring_to_utf8(nodeText)));
};

std::uintptr_t h_sdc(const std::wstring& sel, const VNodeAttrs& nodeAttrs, const std::vector<std::uintptr_t>& nodeChildren) {
  VNodeChildren children = VNodeChildren();
  for(std::vector<std::uintptr_t>::size_type i = 0; i < nodeChildren.size(); ++i) {
    children.push_back(reinterpret_cast<VNode*>(nodeChildren[i]));
  }
  return reinterpret_cast<std::uintptr_t>(new VNode(wstring_to_utf8(sel), new VNodeData(nodeAttrs), children));
};

std::uintptr_t h_elm(const std::wstring& sel, const VNodeAttrs& nodeAttrs, const int elm) {
  VNode* vnode = new VNode(wstring_to_utf8(sel), new VNodeData(nodeAttrs));
  vnode->elm = elm;
  return reinterpret_cast<std::uintptr_t>(vnode);
};

EMSCRIPTEN_BINDINGS(h_function) {
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
};