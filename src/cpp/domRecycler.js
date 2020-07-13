const recycler = {
  create(name) {
    const list = recycler.nodes[name.toUpperCase()];
    return list !== undefined && list.pop() || document.createElement(name);
  },
  createNS(name, ns) {
    const list = recycler.nodes[name.toUpperCase() + ns];
    const node = list !== undefined && list.pop() || document.createElementNS(ns, name);
    node.asmDomNS = ns;
    return node;
  },
  createText(text) {
    const list = recycler.nodes['#TEXT'];
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
    const list = recycler.nodes['#COMMENT'];
    if (list !== undefined) {
      const node = list.pop();
      if (node !== undefined) {
        node.nodeValue = comment;
        return node;
      }
    }
    return document.createComment(comment);
  },
  collect(node) {
    // clean
    let i;

    // eslint-disable-next-line
    while (i = node.lastChild) {
      node.removeChild(i);
      recycler.collect(i);
    }
    i = node.attributes !== undefined ? node.attributes.length : 0;
    while (i--) node.removeAttribute(node.attributes[i].name);
    node.asmDomVNode = undefined;
    if (node.asmDomRaws !== undefined) {
      node.asmDomRaws.forEach((raw) => {
        node[raw] = undefined;
      });
      node.asmDomRaws = undefined;
    }
    if (node.asmDomEvents !== undefined) {
      Object.keys(node.asmDomEvents).forEach((event) => {
        node.removeEventListener(event, node.asmDomEvents[event], false);
      });
      node.asmDomEvents = undefined;
    }
    if (node.nodeValue !== null && node.nodeValue !== '') {
      node.nodeValue = '';
    }
    Object.keys(node).forEach((key) => {
      if (
        key[0] !== 'a' || key[1] !== 's' || key[2] !== 'm' ||
        key[3] !== 'D' || key[4] !== 'o' || key[5] !== 'm'
      ) {
        node[key] = undefined;
      }
    });

    // collect
    let name = node.nodeName.toUpperCase();
    if (node.asmDomNS !== undefined) name += node.namespaceURI;
    const list = recycler.nodes[name];
    if (list !== undefined) list.push(node);
    else recycler.nodes[name] = [node];
  },
  nodes: {},
};

export default recycler;
