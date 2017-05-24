#include "h.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <algorithm>
#include <cstdint>
#include <string>
#include <map>

VNode* const adjustVNode(VNode* const vnode) {
  if (vnode->props.count(std::string("key")) != 0) {
    vnode->key = vnode->props.at(std::string("key"));
  }
  return vnode;
}

std::uintptr_t h_s(const std::string& sel) {
  return reinterpret_cast<std::uintptr_t>(adjustVNode(new VNode(sel)));
};

std::uintptr_t h_ti(const std::string& text, const bool& isText) {
  if (isText) {
    return reinterpret_cast<std::uintptr_t>(adjustVNode(new VNode(text, true)));
  } else {
    return reinterpret_cast<std::uintptr_t>(adjustVNode(new VNode(text)));
  }
};

std::uintptr_t h_sn(const std::string& sel, const int& node) {
  return reinterpret_cast<std::uintptr_t>(adjustVNode(new VNode(sel, reinterpret_cast<VNode*>(node))));
};

std::uintptr_t h_st(const std::string& sel, const std::string& text) {
  return reinterpret_cast<std::uintptr_t>(adjustVNode(new VNode(sel, text)));
};

std::uintptr_t h_sd(const std::string& sel, const std::map<std::string, std::string>& nodeProps) {
  return reinterpret_cast<std::uintptr_t>(adjustVNode(new VNode(sel, nodeProps)));
};

std::uintptr_t h_sc(const std::string& sel, const std::vector<std::uintptr_t>& children) {
  VNode* vnode = new VNode(sel);
  for(std::vector<int>::size_type i = 0; i < children.size(); ++i) {
    vnode->children.push_back(reinterpret_cast<VNode*>(children[i]));
  }
  return reinterpret_cast<std::uintptr_t>(adjustVNode(vnode));
};

std::uintptr_t h_sdn(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const int& node) {
  return reinterpret_cast<std::uintptr_t>(adjustVNode(new VNode(sel, nodeProps, reinterpret_cast<VNode*>(node))));
};

std::uintptr_t h_sdt(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::string& text) {
  return reinterpret_cast<std::uintptr_t>(new VNode(sel, nodeProps, text));
};

std::uintptr_t h_sdc(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::vector<std::uintptr_t>& children) {
  VNode* vnode = new VNode(sel, nodeProps);
  for(std::vector<int>::size_type i = 0; i < children.size(); ++i) {
    vnode->children.push_back(reinterpret_cast<VNode*>(children[i]));
  }
  return reinterpret_cast<std::uintptr_t>(adjustVNode(vnode));
};

std::uintptr_t h_elm(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const int elm) {
  VNode* vnode = adjustVNode(new VNode(sel, nodeProps));
  vnode->elm = elm;
  return reinterpret_cast<std::uintptr_t>(vnode);
};

void deleteVNodePtr(const std::uintptr_t& vnodePtr) {
  delete reinterpret_cast<VNode*>(vnodePtr);
};

void removeChild(const std::uintptr_t& parentPtr, const std::uintptr_t& childPtr) {
  std::vector<VNode*>& children = reinterpret_cast<VNode*>(parentPtr)->children;
  children.erase(std::remove(children.begin(), children.end(), reinterpret_cast<VNode*>(childPtr)), children.end());
}

void replaceChild(const std::uintptr_t& parentPtr, const std::uintptr_t& oldChildPtr, const std::uintptr_t& newChildPtr) {
  std::vector<VNode*>& children = reinterpret_cast<VNode*>(parentPtr)->children;
  std::replace(children.begin(), children.end(), reinterpret_cast<VNode*>(oldChildPtr), reinterpret_cast<VNode*>(newChildPtr));
}

int getNode(const std::uintptr_t& vnodePtr) {
  return reinterpret_cast<VNode*>(vnodePtr)->elm;
}

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
  emscripten::function("removeChild", &removeChild);
  emscripten::function("replaceChild", &replaceChild);
  emscripten::function("_getNode", &getNode);
}
