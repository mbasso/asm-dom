#ifndef H_hpp
#define H_hpp

#include "../VNode/VNode.hpp"
#include <cstdint>

std::uintptr_t h_s(const std::string& sel);

std::uintptr_t h_ti(const std::string& text, const bool& isText);
std::uintptr_t h_sn(const std::string& sel, const int& node);
std::uintptr_t h_st(const std::string& sel, const std::string& text);
std::uintptr_t h_sd(const std::string& sel, const std::map<std::string, std::string>& nodeProps);
std::uintptr_t h_sc(const std::string& sel, const std::vector<std::uintptr_t>& children);

std::uintptr_t h_sdn(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const int& node);
std::uintptr_t h_sdt(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::string& text);
std::uintptr_t h_sdc(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::vector<std::uintptr_t>& children);

std::uintptr_t h_elm(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const int elm);

void deleteVNodePtr(const std::uintptr_t& vnode);

#endif
