export default (oldVnode, vnode) => {
  if (
    window.asmDomHelpers.currentNode !== oldVnode &&
    window.asmDomHelpers.currentNode !== undefined
  ) return;
  // eslint-disable-next-line
  if (oldVnode === vnode) return vnode;
  window.asmDomHelpers.currentNode = vnode;
  if (typeof oldVnode !== 'number') {
    const props = new window.asmDom.MapStringString();
    if (oldVnode.id !== '') props.set('id', oldVnode.id);
    if (oldVnode.className !== '') props.set('class', oldVnode.className);
    oldVnode = window.asmDom._h_elm(
      oldVnode.tagName.toLowerCase(),
      props,
      window.asmDomHelpers.domApi.addNode(oldVnode),
    );
    props.delete();
  }
  window.asmDom.patchVNode(oldVnode, vnode);
  if (window.asmDom.clearMemory === true) {
    setTimeout(window.asmDom.deleteVNode.bind(null, oldVnode));
  }
  // eslint-disable-next-line
  return vnode;
};
