#ifndef H_hpp
#define H_hpp

#include "../VNode/VNode.hpp"

VNode* h(const std::string& sel);

VNode* h(const std::string& text, const bool& isText);
VNode* h(const std::string& sel, VNode* node);
VNode* h(const std::string& sel, const std::string& text);
VNode* h(const std::string& sel, const std::map<std::string, std::string>& nodeProps);
VNode* h(const std::string& sel, const std::vector<VNode*>& children);

VNode* h(const std::string& sel, const std::map<std::string, std::string>& nodeProps, VNode* node);
VNode* h(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::string& text);
VNode* h(const std::string& sel, const std::map<std::string, std::string>& nodeProps, const std::vector<VNode*>& children);

void deleteVNode(const VNode* vnode);
void removeChild(VNode* parent, VNode* child);
void replaceChild(VNode* parent, VNode* oldChild, VNode* newChild);

#endif
