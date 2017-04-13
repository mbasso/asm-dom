export const getPatchFunction = (lib) => (oldVnode, vnode) => {
  let result;
  if (typeof oldVnode === 'number') {
    result = lib.patchVNode(oldVnode, vnode);
    setTimeout(() => {
      window.asmDomHelpers.vnodesData[oldVnode] = undefined;
      lib.deleteVNode(oldVnode);
    });
  } else {
    result = lib.patchElement(oldVnode, vnode);
  }
  return result;
};
