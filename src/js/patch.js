export const getPatchFunction = (lib) => (oldVnode, vnode) => {
  let result;
  if (typeof oldVnode === 'number') {
    result = lib._patch_vnode(oldVnode, vnode);
    lib.deleteVNode(oldVnode);
  } else {
    result = lib._patch_element(oldVnode, vnode);
  }
  return result;
};
