#ifndef H_hpp
#define H_hpp

#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"
#include <vector>
#include <string.h>

class H {
	public:
		struct VNode* h(const char* sel);
		struct VNode* h(const char* text, bool isText);

		struct VNode* h(const char* sel, struct VNode* node);
		struct VNode* h(const char* sel, const char* text);
		struct VNode* h(const char* sel, struct VNodeData* data);
		struct VNode* h(const char* sel, std::vector<struct VNode*> children);

		struct VNode* h(const char* sel, struct VNodeData* data, struct VNode* node);
		struct VNode* h(const char* sel, struct VNodeData* data, const char* text);
		struct VNode* h(const char* sel, struct VNodeData* data, std::vector<struct VNode*> children);
};

#endif
