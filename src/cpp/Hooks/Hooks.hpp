#ifndef Hooks_hpp
#define Hooks_hpp

#include "../VNode/VNode.hpp"

// all returns any
typedef void (*PreHook)();
typedef void (*InitHook)(VNode* vNode);
typedef void (*CreateHook)(VNode* emptyVNode, VNode* vNode);
typedef void (*InsertHook)(VNode* vNode);
typedef void (*PrePatchHook)(VNode* oldVNode, VNode* vNode);
typedef void (*UpdateHook)(VNode* oldVNode, VNode* vNode);
typedef void (*PostPatchHook)(VNode* oldVNode, VNode* vNode);
typedef void (*DestroyHook)(VNode* vNode);
typedef void (*RemoveHook)(VNode* vNode, void (*removeCallback)());
typedef void (*PostHook)();

struct Hooks {
	PreHook* pre;
	InitHook* init;
	CreateHook* create;
	InsertHook* insert;
	PrePatchHook* prepatch;
	UpdateHook* update;
	PostPatchHook* postpatch;
	DestroyHook* destroy;
	RemoveHook* remove;
	PostHook* post;
};

#endif
