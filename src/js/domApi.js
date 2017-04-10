import recycler from './domRecycler';

const nodes = {
  0: null,
};
let ptr = 0;

const addPtr = (node, ns) => {
  if (node) {
    node.asmDomPtr = ptr;
    node.asmDomNS = ns;
  }
  return node;
};

export default {
  'addNode'(id) {
    const node = document.getElementById(id);
    nodes[++ptr] = addPtr(node.parentNode);
    nodes[++ptr] = addPtr(node.nextSibling);
    return (nodes[++ptr] = addPtr(node)) && ptr;
  },
  'createElement'(tagName) {
    const node = recycler.create(tagName);
    return node.asmDomPtr || (nodes[++ptr] = addPtr(node)) && ptr;
  },
  'createElementNS'(namespaceURI, qualifiedName) {
    const node = recycler.create(namespaceURI, qualifiedName);
    return node.asmDomPtr || (nodes[++ptr] = addPtr(node, namespaceURI)) && ptr;
  },
  'createTextNode'(text) {
    const node = recycler.createText(text);
    return node.asmDomPtr || (nodes[++ptr] = addPtr(node)) && ptr;
  },
  'createComment'(text) {
    const node = recycler.createComment(text);
    return node.asmDomPtr || (nodes[++ptr] = addPtr(node)) && ptr;
  },
  'insertBefore'(parentNodePtr, newNodePtr, referenceNodePtr) {
    nodes[parentNodePtr].insertBefore(nodes[newNodePtr], nodes[referenceNodePtr]);
  },
  'removeChild'(parentPtr, childPtr) {
    recycler.collect(nodes[childPtr]);
  },
  'appendChild'(parentPtr, childPtr) {
    nodes[parentPtr].appendChild(nodes[childPtr]);
  },
  'removeAttribute'(nodePtr, attr) {
    nodes[nodePtr].removeAttribute(attr);
  },
  'setAttribute'(nodePtr, attr, value) {
    nodes[nodePtr].setAttribute(attr, value);
  },
  'parentNode': nodePtr => nodes[nodePtr].parentNode.asmDomPtr,
  'nextSibling': nodePtr => (
    nodes[nodePtr] && nodes[nodePtr].nextSibling && nodes[nodePtr].nextSibling.asmDomPtr ||
    0
  ),
  'setTextContent': (nodePtr, text) => {
    nodes[nodePtr].textContent = text;
  },
};
