#ifndef H_hpp
#define H_hpp

#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"
#include <vector>
#include <string.h>

class H {
	public:
		static struct VNode* h(const char* sel);
		static struct VNode* h(const char* text, bool isText);

		static struct VNode* h(const char* sel, struct VNode* node);
		static struct VNode* h(const char* sel, const char* text);
		static struct VNode* h(const char* sel, struct VNodeData* data);
		static struct VNode* h(const char* sel, struct VNode** children, int childrenNum);

		static struct VNode* h(const char* sel, struct VNodeData* data, struct VNode* node);
		static struct VNode* h(const char* sel, struct VNodeData* data, const char* text);
		static struct VNode* h(const char* sel, struct VNodeData* data, struct VNode** children, int childrenNum);
};

#endif
