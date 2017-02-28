#ifndef H_hpp
#define H_hpp

#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"
#include "../Val/Val.hpp"
#include <vector>
#include <string>

struct VNode* h(const std::string sel);
struct VNode* h(const std::string text, bool isText);

struct VNode* h(const std::string sel, struct VNode* const node);
struct VNode* h(const std::string sel, const std::string text);
struct VNode* h(const std::string sel, struct VNodeData* const data);
struct VNode* h(const std::string sel, const std::vector<struct VNode*> children);

struct VNode* h(const std::string sel, struct VNodeData* const data, struct VNode* const node);
struct VNode* h(const std::string sel, struct VNodeData* const data, const std::string text);
struct VNode* h(const std::string sel, struct VNodeData* const data, const std::vector<struct VNode*> children);

#endif
