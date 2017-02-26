#ifndef Hooks_hpp
#define Hooks_hpp

#include "../VNode/VNode.hpp"

// all returns any
typedef void (*PreHook)();
typedef void (*InitHook)(struct VNode vNode);
typedef void (*CreateHook)(struct VNode emptyVNode, struct VNode vNode);
typedef void (*InsertHook)(struct VNode vNode);
typedef void (*PrePatchHook)(struct VNode oldVNode, struct VNode vNode);
typedef void (*UpdateHook)(struct VNode oldVNode, struct VNode vNode);
typedef void (*PostPatchHook)(struct VNode oldVNode, struct VNode vNode);
typedef void (*DestroyHook)(struct VNode vNode);
typedef void (*RemoveHook)(struct VNode vNode, void (*removeCallback)());
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
