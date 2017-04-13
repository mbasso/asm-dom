const recycler = {
  collect(node) {
    recycler.clean(node);
    const name = `${node.nodeName}${node.asmDomNS ? node.namespaceURI : ''}`;
    const list = recycler.nodes[name];
    if (list) list.push(node);
    else recycler.nodes[name] = [node];
  },
  create(nodeName, ns = '') {
    const name = nodeName.toUpperCase();
    const list = recycler.nodes[name + ns];
    return (
      list && list.pop() ||
      ns && document.createElementNS(ns, name) ||
      document.createElement(name)
    );
  },
  createText(text) {
    const list = recycler.nodes['#text'];
    const node = list && list.pop() || document.createTextNode(text);
    node.textContent = text;
    return node;
  },
  createComment(comment) {
    const list = recycler.nodes['#comment'];
    const node = list && list.pop() || document.createComment(comment);
    node.textContent = comment;
    return node;
  },
  clean(node) {
    node.remove();
    let len = node.attributes && node.attributes.length;
    while (len--) node.removeAttribute(node.attributes[len].name);
    if (node.asmDomListeners) {
      node.asmDomListeners.forEach(x => { node[x] = undefined; });
      node.asmDomListeners = undefined;
    }
    Object.keys(node).forEach(x => {
      if (
        x[0] !== 'a' || x[1] !== 's' || x[2] !== 'm' ||
        x[0] !== 'D' || x[1] !== 'o' || x[2] !== 'm'
      ) {
        node[x] = undefined;
      }
    });
  },
  nodes: {},
};

export default recycler;
