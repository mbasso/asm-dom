#include "h.hpp"
#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/bind.h>
#include <string>

void addNS(VNode* const vnode) {
	vnode->data.ns = std::string("http://www.w3.org/2000/svg");
	if (vnode->sel.compare("foreignObject") != 0 && !vnode->children.empty()) {
    for(std::vector<VNode>::size_type i = vnode->children.size(); i--;) {
      addNS(vnode->children[i]);
    }
	}
}

void adjustVNode(VNode* const vnode) {
  vnode->key = vnode->data.key;
  if (
    vnode->sel.length() >= 3 && vnode->sel[0] == 's' && vnode->sel[1] == 'v' && vnode->sel[2] == 'g' &&
    (vnode->sel.length() == 3 || vnode->sel[3] == '.' || vnode->sel[3] == '#')
  ) {
    addNS(vnode);
  }
}

VNode* _h_s(const std::string sel) {
  VNode* vnode = new VNode();
  vnode->sel = sel;
  adjustVNode(vnode);
  return vnode;
};

std::size_t h_s(const std::string sel) {
  return reinterpret_cast<std::size_t>(_h_s(sel));
};

std::size_t h_ti(const std::string text, const bool isText) {
  VNode* vnode = new VNode();
  if (isText) {
    vnode->text = text;
  } else {
    vnode->sel = text;
  }
  adjustVNode(vnode);
  return reinterpret_cast<std::size_t>(vnode);
};

std::size_t h_sn(const std::string sel, const std::size_t node) {
  VNode* vnode = _h_s(sel);
  vnode->children.push_back(reinterpret_cast<VNode*>(node));
  adjustVNode(vnode);
  return reinterpret_cast<std::size_t>(vnode);
};

std::size_t h_st(const std::string sel, const std::string text) {
  VNode* vnode = _h_s(sel);
  vnode->text = text;
  return reinterpret_cast<std::size_t>(vnode);
};

VNode* _h_sd(const std::string sel, const VNodeData data) {
  VNode* vnode = _h_s(sel);
  vnode->data = data;
  return vnode;
};

std::size_t h_sd(const std::string sel, const VNodeData data) {
  return reinterpret_cast<std::size_t>(_h_sd(sel, data));
};

std::size_t h_sc(const std::string sel, const std::vector<std::size_t> children) {
  VNode* vnode = _h_s(sel);
  for(std::vector<std::size_t>::size_type i = 0; i < children.size(); i++) {
    vnode->children.push_back(reinterpret_cast<VNode*>(children[i]));
  }
  adjustVNode(vnode);
  return reinterpret_cast<std::size_t>(vnode);
};

std::size_t h_sdn(const std::string sel, const VNodeData data, const std::size_t node) {
  VNode* vnode = _h_sd(sel, data);
  vnode->children.push_back(reinterpret_cast<VNode*>(node));
  adjustVNode(vnode);
  return reinterpret_cast<std::size_t>(vnode);
};

std::size_t h_sdt(const std::string sel, const VNodeData data, const std::string text) {
  VNode* vnode = _h_sd(sel, data);
  vnode->text = text;
  return reinterpret_cast<std::size_t>(vnode);
};

std::size_t h_sdc(const std::string sel, const VNodeData data, const std::vector<std::size_t> children) {
  VNode* vnode = _h_sd(sel, data);
  for(std::vector<std::size_t>::size_type i = 0; i < children.size(); i++) {
    vnode->children.push_back(reinterpret_cast<VNode*>(children[i]));
  }
  adjustVNode(vnode);
  return reinterpret_cast<std::size_t>(vnode);
};

std::size_t h_stdc(const std::string sel, const std::string text, const VNodeData data, const std::vector<std::size_t> children) {
  std::vector<VNode*> vnodes;
  for(std::vector<std::size_t>::size_type i = 0; i < children.size(); i++) {
    vnodes.push_back(reinterpret_cast<VNode*>(children[i]));
  }
  VNode* vnode = new VNode(sel, text, data, vnodes);
  adjustVNode(vnode);
  return reinterpret_cast<std::size_t>(vnode);
};

VNode getVNode(const std::size_t vnode) {
	return *(reinterpret_cast<VNode*>(vnode));
}

void deleteVNode(VNode* const vnode) {
  for (std::vector<VNode*>::size_type i = vnode->children.size(); i--;) {
    deleteVNode(vnode->children[i]);
    // vnode->children[i] = NULL;
  }
  vnode->children.clear();
  delete vnode;
}

void deleteVNodePtr(const std::size_t vnodePtr) {
  deleteVNode(reinterpret_cast<VNode*>(vnodePtr));
};

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
  emscripten::function("_h_stdc", &h_stdc, emscripten::allow_raw_pointers());
  emscripten::function("_getVNode", &getVNode, emscripten::allow_raw_pointer<emscripten::arg<0>>());
  emscripten::function("deleteVNode", &deleteVNodePtr, emscripten::allow_raw_pointer<emscripten::arg<0>>());
}
