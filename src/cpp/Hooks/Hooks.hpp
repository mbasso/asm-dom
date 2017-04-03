#ifndef Hooks_hpp
#define Hooks_hpp

#include "../VNode/VNode.hpp"

typedef void (*PreHook)();
typedef void (*InitHook)(VNode* const vnode);
typedef void (*CreateHook)(VNode* __restrict__ const emptyVNode, VNode* __restrict__ const vnode);
typedef void (*InsertHook)(VNode* const vnode);
typedef void (*PrePatchHook)(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode);
typedef void (*UpdateHook)(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode);
typedef void (*PostPatchHook)(VNode* __restrict__ const oldVnode, VNode* __restrict__ const vnode);
typedef void (*DestroyHook)(VNode* const vnode);
typedef void (*RemoveHook)(VNode* const vnode, const std::function<void()> removeCallback);
typedef void (*PostHook)();

struct Hooks {
	Hooks(
		CreateHook createHook,
		UpdateHook updateHook
	) : create(createHook), update(updateHook) {}

	PreHook pre;
	InitHook init;
	CreateHook create;
	InsertHook insert;
	PrePatchHook prepatch;
	UpdateHook update;
	PostPatchHook postpatch;
	DestroyHook destroy;
	RemoveHook remove;
	PostHook post;
};

#endif
