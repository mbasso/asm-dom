export default (oldVnode, vnode) => {
  let result;
  if (typeof oldVnode === 'number') {
    result = window.asmDom.patchVNode(oldVnode, vnode);
    setTimeout(() => {
      window.asmDomHelpers.vnodesData[oldVnode] = undefined;
      window.asmDom.deleteVNode(oldVnode);
    });
  } else {
    result = window.asmDom.patchElement(oldVnode, vnode);
  }
  return result;
};
