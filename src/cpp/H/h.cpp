#include "h.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <algorithm>
#include <cstdint>
#include <string>
#include <map>

// cpp

void deleteVNode(VNode* vnode) {
  delete vnode->data;
  vnode->data = NULL;
  std::vector<VNode*>::size_type i = vnode->children.size();
  while (i--) delete vnode->children[i];
  delete vnode;
};

void removeChild(VNode* parent, VNode* child) {
  VNodeChildren& children = parent->children;
  children.erase(std::remove(children.begin(), children.end(), child), children.end());
};

void replaceChild(VNode* parent, VNode* oldChild, VNode* newChild) {
  VNodeChildren& children = parent->children;
  std::replace(children.begin(), children.end(), oldChild, newChild);
};

// js

std::uintptr_t h_s(const std::string& sel) {
  return reinterpret_cast<std::uintptr_t>(new VNode(sel));
};

std::uintptr_t h_ti(const std::string& nodeText, bool isText) {
  return reinterpret_cast<std::uintptr_t>(new VNode(nodeText, isText));
};

std::uintptr_t h_sn(const std::string& sel, const std::uintptr_t& node) {
  return reinterpret_cast<std::uintptr_t>(new VNode(sel, reinterpret_cast<VNode*>(node)));
};

std::uintptr_t h_st(const std::string& sel, const std::string& nodeText) {
  return reinterpret_cast<std::uintptr_t>(new VNode(sel, nodeText));
};

std::uintptr_t h_sd(const std::string& sel, const VNodeAttrs& nodeAttrs) {
  return reinterpret_cast<std::uintptr_t>(new VNode(sel, new VNodeData(nodeAttrs)));
};

std::uintptr_t h_sc(const std::string& sel, const std::vector<std::uintptr_t>& nodeChildren) {
  VNodeChildren children = VNodeChildren();
  for(std::vector<std::uintptr_t>::size_type i = 0; i < nodeChildren.size(); ++i) {
    children.push_back(reinterpret_cast<VNode*>(nodeChildren[i]));
  }
  return reinterpret_cast<std::uintptr_t>(new VNode(sel, children));
};

std::uintptr_t h_sdn(const std::string& sel, const VNodeAttrs& nodeAttrs, const std::uintptr_t& node) {
  return reinterpret_cast<std::uintptr_t>(new VNode(sel, new VNodeData(nodeAttrs), reinterpret_cast<VNode*>(node)));
};

std::uintptr_t h_sdt(const std::string& sel, const VNodeAttrs& nodeAttrs, const std::string& nodeText) {
  return reinterpret_cast<std::uintptr_t>(new VNode(sel, new VNodeData(nodeAttrs), nodeText));
};

std::uintptr_t h_sdc(const std::string& sel, const VNodeAttrs& nodeAttrs, const std::vector<std::uintptr_t>& nodeChildren) {
  VNodeChildren children = VNodeChildren();
  for(std::vector<std::uintptr_t>::size_type i = 0; i < nodeChildren.size(); ++i) {
    children.push_back(reinterpret_cast<VNode*>(nodeChildren[i]));
  }
  return reinterpret_cast<std::uintptr_t>(new VNode(sel, new VNodeData(nodeAttrs), children));
};

// TODO : make it callable from C++
std::uintptr_t h_elm(const std::string& sel, const VNodeAttrs& nodeAttrs, const int elm) {
  VNode* vnode = new VNode(sel, new VNodeData(nodeAttrs));
  vnode->elm = elm;
  return reinterpret_cast<std::uintptr_t>(vnode);
};

void deleteVNodePtr(const std::uintptr_t& vnodePtr) {
  deleteVNode(reinterpret_cast<VNode*>(vnodePtr));
};

void removeChildPtr(const std::uintptr_t& parent, const std::uintptr_t& child) {
  removeChild(reinterpret_cast<VNode*>(parent), reinterpret_cast<VNode*>(child));
};

void replaceChildPtr(const std::uintptr_t& parent, const std::uintptr_t& oldChild, const std::uintptr_t& newChild) {
  replaceChild(reinterpret_cast<VNode*>(parent), reinterpret_cast<VNode*>(oldChild), reinterpret_cast<VNode*>(newChild));
};

// TODO : make it callable from C++
int getNode(const std::uintptr_t& vnodePtr) {
  return reinterpret_cast<VNode*>(vnodePtr)->elm;
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
  emscripten::function("_deleteVNode", &deleteVNodePtr);
  emscripten::function("removeChild", &removeChildPtr);
  emscripten::function("replaceChild", &replaceChildPtr);
  emscripten::function("_getNode", &getNode);
};
