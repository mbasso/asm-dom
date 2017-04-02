const childrenToArray = (vnode) => {
  const children = [];
  for (let i = vnode.children.size(); i--;) {
    children.unshift(
      childrenToArray(vnode.children.get(i))
    );
  }
  // eslint-disable-next-line
  vnode.children = children;
  return vnode;
};

export const getGetVNodeFunction = (lib) => (memoryAddress) => (
  childrenToArray(lib._getVNode(memoryAddress))
);
