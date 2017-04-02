export const getPatchFunction = (lib) => (oldVnode, vnode) => {
  let result;
  if (typeof oldVnode === 'number') {
    // eslint-disable-next-line
    result = lib._patch_vnode(oldVnode, vnode);
    lib.deleteVNode(oldVnode);
  } else {
    // eslint-disable-next-line
    result = lib._patch_element(oldVnode, vnode);
  }
  return result;
};
