export default (oldVnode, vnode) => {
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
  if (window.asmDom.clearMemory === true) {
    if (window.asmDomHelpers.vnodeToClear !== undefined) {
      setTimeout(
        window.asmDom.deleteVNode.bind(null, window.asmDomHelpers.vnodeToClear),
      );
    }
    window.asmDomHelpers.vnodeToClear = oldVnode;
  }
  return window.asmDom.patchVNode(oldVnode, vnode);
};
