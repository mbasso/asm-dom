#include "h.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <string>
#include <map>

VNode* const adjustVNode(VNode* const vnode) {
  if (vnode->props.count(std::string("key")) != 0) {
    vnode->key = vnode->props.at(std::string("key"));
  }
  return vnode;
}

int h_s(const std::string& sel) {
  return reinterpret_cast<int>(adjustVNode(new VNode(sel)));
};

int h_ti(const std::string& text, const bool& isText) {
  if (isText) {
    return reinterpret_cast<int>(adjustVNode(new VNode(text, true)));
  } else {
    return reinterpret_cast<int>(adjustVNode(new VNode(text)));
  }
};

int h_sn(const std::string& sel, const int& node) {
  return reinterpret_cast<int>(adjustVNode(new VNode(sel, reinterpret_cast<VNode*>(node))));
};

int h_st(const std::string& sel, const std::string& text) {
  return reinterpret_cast<int>(adjustVNode(new VNode(sel, text)));
};

int h_sd(const std::string& sel, const std::map<std::string, std::string>& nodeProps) {
  return reinterpret_cast<int>(adjustVNode(new VNode(sel, nodeProps)));
};

int h_sc(const std::string& sel, const std::vector<int>& children) {
  VNode* vnode = new VNode(sel);
  for(std::vector<int>::size_type i = 0; i < children.size(); ++i) {
    vnode->children.push_back(reinterpret_cast<VNode*>(children[i]));
  }
  return reinterpret_cast<int>(adjustVNode(vnode));
};

int h_sdn(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const int& node) {
  return reinterpret_cast<int>(adjustVNode(new VNode(sel, nodeProps, reinterpret_cast<VNode*>(node))));
};

int h_sdt(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::string& text) {
  return reinterpret_cast<int>(new VNode(sel, nodeProps, text));
};

int h_sdc(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::vector<int>& children) {
  VNode* vnode = new VNode(sel, nodeProps);
  for(std::vector<int>::size_type i = 0; i < children.size(); ++i) {
    vnode->children.push_back(reinterpret_cast<VNode*>(children[i]));
  }
  return reinterpret_cast<int>(adjustVNode(vnode));
};

int h_elm(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const int elm) {
  VNode* vnode = adjustVNode(new VNode(sel, nodeProps));
  vnode->elm = elm;
  return reinterpret_cast<int>(vnode);
};

void deleteVNodePtr(const int& vnodePtr) {
  delete reinterpret_cast<VNode*>(vnodePtr);
};

int getNode(const int& vnodePtr) {
  return reinterpret_cast<VNode*>(vnodePtr)->elm;
}

EMSCRIPTEN_BINDINGS(h_function) {
  emscripten::function("_h_s", &h_s, emscripten::allow_raw_pointers());
  emscripten::function("_h_ti", &h_ti, emscripten::allow_raw_pointers());
  emscripten::function("_h_sn", &h_sn, emscripten::allow_raw_pointers());
  emscripten::function("_h_st", &h_st, emscripten::allow_raw_pointers());
  emscripten::function("_h_sd", &h_sd, emscripten::allow_raw_pointers());
  emscripten::function("_h_sc", &h_sc, emscripten::allow_raw_pointers());
  emscripten::function("_h_sdn", &h_sdn, emscripten::allow_raw_pointers());
  emscripten::function("_h_sdt", &h_sdt, emscripten::allow_raw_pointers());
  emscripten::function("_h_sdc", &h_sdc, emscripten::allow_raw_pointers());
  emscripten::function("_h_elm", &h_elm, emscripten::allow_raw_pointers());
  emscripten::function("_deleteVNode", &deleteVNodePtr, emscripten::allow_raw_pointer<emscripten::arg<0>>());
  emscripten::function("_getNode", &getNode, emscripten::allow_raw_pointer<emscripten::arg<0>>());
}
