export const getPatchFunction = (lib) => (oldVnode, vnode) => {
  let result;
  if (oldVnode instanceof HTMLElement) {
    // eslint-disable-next-line
    result = lib._patch_element(oldVnode, vnode);
  } else {
    // eslint-disable-next-line
    result = lib._patch_vnode(oldVnode, vnode);
    lib.deleteVNode(oldVnode);
  }
  return result;
};
