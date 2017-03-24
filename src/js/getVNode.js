const childrenToArray = (vnode) => {
  const children = [];
  for (let i = 0, n = vnode.children.size(); i < n; i++) {
    const child = vnode.children.get(i);
    childrenToArray(child);
    children.push(child);
  }
  // eslint-disable-next-line
  vnode.children = children;
};

export const getGetVNodeFunction = (lib) => (memoryAddress) => {
	// eslint-disable-next-line
	const result = lib._getVNode(memoryAddress);
  childrenToArray(result);
  return result;
};
