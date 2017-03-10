#ifndef H_hpp
#define H_hpp

#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"

VNode h_s(std::string sel);
VNode h_ti(std::string text, bool isText);

VNode h_sn(std::string sel, VNode node);
VNode h_st(std::string sel, std::string text);
VNode h_sd(std::string sel, VNodeData data);
VNode h_sc(std::string sel, std::vector<VNode> children);

VNode h_sdn(std::string sel, VNodeData data, VNode node);
VNode h_sdt(std::string sel, VNodeData data, std::string text);
VNode h_sdc(std::string sel, VNodeData data, std::vector<VNode> children);

VNode h_stdc(std::string sel, std::string text, VNodeData data, std::vector<VNode> children);

#endif
