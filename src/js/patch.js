export default (Module, oldVnode, vnode) => {
  if (
    Module.unsafePatch === false &&
    Module.currentNode !== oldVnode &&
    Module.currentNode !== undefined
  ) return;
  // eslint-disable-next-line
  if (oldVnode === vnode) return vnode;
  Module.currentNode = vnode;
  let { clearMemory } = Module;
  if (typeof oldVnode !== 'number') {
    clearMemory = true;
    oldVnode = Module.toVNode(oldVnode);
  }
  Module._patch(oldVnode, vnode);
  if (clearMemory === true) {
    setTimeout(Module.deleteVNode.bind(null, oldVnode));
  }
  // eslint-disable-next-line
  return vnode;
};
