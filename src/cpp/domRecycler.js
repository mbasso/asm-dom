const recycler = {
  collect(node) {
    recycler.clean(node);
    let name = node.nodeName;
    if (node.asmDomNS !== undefined) name += node.namespaceURI;
    const list = recycler.nodes[name];
    if (list !== undefined) list.push(node);
    else recycler.nodes[name] = [node];
  },
  create(name) {
    name = name.toUpperCase();
    const list = recycler.nodes[name];
    if (list !== undefined) {
      const node = list.pop();
      if (node !== undefined) return node;
    }
    return document.createElement(name);
  },
  createNS(name, ns) {
    name = name.toUpperCase();
    const list = recycler.nodes[name + ns];
    if (list !== undefined) {
      const node = list.pop();
      if (node !== undefined) return node;
    }
    const node = document.createElementNS(ns, name);
    node.asmDomNS = ns;
    return node;
  },
  createText(text) {
    const list = recycler.nodes['#text'];
    if (list !== undefined) {
      const node = list.pop();
      if (node !== undefined) {
        node.nodeValue = text;
        return node;
      }
    }
    return document.createTextNode(text);
  },
  createComment(comment) {
    const list = recycler.nodes['#comment'];
    if (list !== undefined) {
      const node = list.pop();
      if (node !== undefined) {
        node.nodeValue = comment;
        return node;
      }
    }
    return document.createComment(comment);
  },
  clean(node) {
    let i;
    // eslint-disable-next-line
    while (i = node.lastChild) recycler.collect(i);
    node.remove();
    i = node.attributes !== undefined ? node.attributes.length : 0;
    while (i--) node.removeAttribute(node.attributes[i].name);
    if (node.asmDomRaws !== undefined && node.asmDomRaws.length > 0) {
      node.asmDomRaws.forEach((raw) => {
        node[raw] = undefined;
      });
      node.asmDomRaws = [];
    }
    if (node.textContent !== null && node.textContent !== '') {
      node.textContent = '';
    }
    Object.keys(node).forEach((key) => {
      if (
        key[0] !== 'a' || key[1] !== 's' || key[2] !== 'm' ||
        key[3] !== 'D' || key[4] !== 'o' || key[5] !== 'm'
      ) {
        node[key] = undefined;
      }
    });
  },
  nodes: {},
};

export default recycler;
