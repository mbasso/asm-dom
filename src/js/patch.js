export default (oldVnode, vnode) => {
  if (
    window.asmDom.unsafePatch === false &&
    window.asmDomHelpers.currentNode !== oldVnode &&
    window.asmDomHelpers.currentNode !== undefined
  ) return;
  // eslint-disable-next-line
  if (oldVnode === vnode) return vnode;
  window.asmDomHelpers.currentNode = vnode;
  let { clearMemory } = window.asmDom;
  if (typeof oldVnode !== 'number') {
    clearMemory = true;
    oldVnode = window.asmDom.toVNode(oldVnode);
  }
  window.asmDom._patch(oldVnode, vnode);
  if (clearMemory === true) {
    setTimeout(window.asmDom.deleteVNode.bind(null, oldVnode));
  }
  // eslint-disable-next-line
  return vnode;
};
