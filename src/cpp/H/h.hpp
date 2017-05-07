#ifndef H_hpp
#define H_hpp

#include "../VNode/VNode.hpp"

int h_s(const std::string& sel);

int h_ti(const std::string& text, const bool& isText);
int h_sn(const std::string& sel, const int& node);
int h_st(const std::string& sel, const std::string& text);
int h_sd(const std::string& sel, const std::map<std::string, std::string>& nodeProps);
int h_sc(const std::string& sel, const std::vector<int>& children);

int h_sdn(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const int& node);
int h_sdt(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::string& text);
int h_sdc(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::vector<int>& children);

int h_stdc(const std::string& sel, const std::string& text, const std::map<std::string, std::string>& nodeProps, const std::vector<int>& children);

int h_elm(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const int elm);

void deleteVNodePtr(const int& vnode);

#endif
