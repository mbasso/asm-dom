#ifndef H_hpp
#define H_hpp

#include "../VNode/VNode.hpp"

std::size_t h_s(const std::string& sel);

std::size_t h_ti(const std::string& text, const bool& isText);
std::size_t h_sn(const std::string& sel, const std::size_t& node);
std::size_t h_st(const std::string& sel, const std::string& text);
std::size_t h_sd(const std::string& sel, const std::map<std::string, std::string>& nodeProps);
std::size_t h_sc(const std::string& sel, const std::vector<std::size_t>& children);

std::size_t h_sdn(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::size_t& node);
std::size_t h_sdt(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::string& text);
std::size_t h_sdc(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::vector<std::size_t>& children);

std::size_t h_stdc(const std::string& sel, const std::string& text, const std::map<std::string, std::string>& nodeProps, const std::vector<std::size_t>& children);

void deleteVNodePtr(const std::size_t& vnode);

#endif
