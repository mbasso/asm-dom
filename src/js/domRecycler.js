const recycler = {
  collect(node) {
    if (node === null || node === undefined) return;
    recycler.clean(node);
    const name = `${node.nodeName}${node.asmDomNS !== undefined ? node.namespaceURI : ''}`;
    const list = recycler.nodes[name];
    if (list) list.push(node);
    else recycler.nodes[name] = [node];
  },
  create(name, ns) {
    name = name.toUpperCase();
    if (ns === undefined) ns = '';
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
    node.nodeValue = text;
    return node;
  },
  createComment(comment) {
    const list = recycler.nodes['#comment'];
    const node = list && list.pop() || document.createComment(comment);
    node.nodeValue = comment;
    return node;
  },
  clean(node) {
    node.remove();
    let i;
    if (node.attributes !== undefined) i = node.attributes.length;
    while (node.firstChild) recycler.collect(node.firstChild);
    while (i--) node.removeAttribute(node.attributes[i].name);
    if (node.asmDomRaws !== undefined) {
      for (i = node.asmDomRaws.length; i--;) node[node.asmDomRaws[i]] = undefined;
      node.asmDomRaws = undefined;
    }
    if (node.textContent !== '') node.textContent = '';
    if (node.nodeValue !== null && node.nodeValue !== undefined && node.nodeValue !== '') {
      node.nodeValue = '';
    }
    const keys = Object.keys(node);
    for (i = keys.length; i--;) {
      if (
        keys[i][0] !== 'a' || keys[i][1] !== 's' || keys[i][2] !== 'm' ||
        keys[i][3] !== 'D' || keys[i][4] !== 'o' || keys[i][5] !== 'm'
      ) {
        node[keys[i]] = undefined;
      }
    }
  },
  nodes: {},
};

export default recycler;
