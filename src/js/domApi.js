import recycler from './domRecycler';

export const nodes = { 0: null };
let ptr = 0;

const addPtr = (node, ns) => {
  if (node) {
    node.asmDomPtr = ptr;
    node.asmDomNS = ns;
  }
  return node;
};

export default {
  'addNode'(node) {
    nodes[++ptr] = addPtr(node.parentNode);
    nodes[++ptr] = addPtr(node.nextSibling);
    return (nodes[++ptr] = addPtr(node)) && ptr;
  },
  'createElement'(tagName) {
    const node = recycler.create(tagName);
    return node.asmDomPtr || (nodes[++ptr] = addPtr(node)) && ptr;
  },
  'createElementNS'(namespaceURI, qualifiedName) {
    const node = recycler.create(qualifiedName, namespaceURI);
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
    // if (!nodes[parentNodePtr].appendChild) return;
    nodes[parentNodePtr].insertBefore(nodes[newNodePtr], nodes[referenceNodePtr]);
  },
  'removeChild'(childPtr) {
    recycler.collect(nodes[childPtr]);
  },
  'appendChild'(parentPtr, childPtr) {
    // if (!nodes[parentPtr].appendChild) return;
    nodes[parentPtr].appendChild(nodes[childPtr]);
  },
  'removeAttribute'(nodePtr, attr) {
    // if (!nodes[nodePtr].removeAttribute) return;
    nodes[nodePtr].removeAttribute(attr);
  },
  'setAttribute'(nodePtr, attr, value) {
    // if (!nodes[nodePtr].setAttribute) return;
    // xChar = 120
    // colonChar = 58
    if (attr.charCodeAt(0) !== 120) {
      nodes[nodePtr].setAttribute(attr, value);
    } else if (attr.charCodeAt(3) === 58) {
      // Assume xml namespace
      nodes[nodePtr].setAttributeNS('http://www.w3.org/XML/1998/namespace', attr, value);
    } else if (attr.charCodeAt(5) === 58) {
      // Assume xlink namespace
      nodes[nodePtr].setAttributeNS('http://www.w3.org/1999/xlink', attr, value);
    } else {
      nodes[nodePtr].setAttribute(attr, value);
    }
  },
  'parentNode': nodePtr => (
    nodes[nodePtr] && nodes[nodePtr].parentNode && nodes[nodePtr].parentNode.asmDomPtr ||
    0
  ),
  'nextSibling': nodePtr => (
    nodes[nodePtr] && nodes[nodePtr].nextSibling && nodes[nodePtr].nextSibling.asmDomPtr ||
    0
  ),
  'setTextContent': (nodePtr, text) => {
    nodes[nodePtr].textContent = text;
  },
};
