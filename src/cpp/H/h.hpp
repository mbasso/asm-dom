#ifndef H_hpp
#define H_hpp

#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"

std::size_t h_s(std::string sel);

std::size_t h_ti(std::string text, bool isText);
std::size_t h_sn(std::string sel, std::size_t node);
std::size_t h_st(std::string sel, std::string text);
std::size_t h_sd(std::string sel, VNodeData data);
std::size_t h_sc(std::string sel, std::vector<std::size_t> children);

std::size_t h_sdn(std::string sel, VNodeData data, std::size_t node);
std::size_t h_sdt(std::string sel, VNodeData data, std::string text);
std::size_t h_sdc(std::string sel, VNodeData data, std::vector<std::size_t> children);

std::size_t h_stdc(std::string sel, std::string text, VNodeData data, std::vector<std::size_t> children);

VNode getVNode(std::size_t vnode);

#endif
