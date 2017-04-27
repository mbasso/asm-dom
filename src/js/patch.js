export default (oldVnode, vnode) => {
  if (typeof oldVnode !== 'number') {
    const props = new window.asmDom.MapStringString();
    if (oldVnode.id) props.set('id', oldVnode.id);
    if (oldVnode.className) props.set('class', oldVnode.className);
    oldVnode = window.asmDom._h_elm(
      oldVnode.tagName.toLowerCase(),
      props,
      window.asmDomHelpers.domApi.addNode(oldVnode),
    );
    props.delete();
  }
  const result = window.asmDom.patchVNode(oldVnode, vnode);
  setTimeout(window.asmDom.deleteVNode.bind(null, oldVnode));
  return result;
};
