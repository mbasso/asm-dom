export default (oldVnode, vnode, options) => {
  let result;
  if (typeof oldVnode === 'number') {
    result = window.asmDom.patchVNode(oldVnode, vnode);
    options = options || {};
    if (options.clearMemory === undefined || options.clearMemory) {
      setTimeout(() => {
        window.asmDom.deleteVNode(oldVnode);
      });
    }
  } else {
    result = window.asmDom.patchElement(oldVnode, vnode);
  }
  return result;
};
