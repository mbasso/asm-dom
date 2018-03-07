import recycler from './domRecycler';

export const nodes = { 0: null };
let lastPtr = 0;

const addPtr = (node) => {
  if (node === null) return 0;
  if (node.asmDomPtr !== undefined) return node.asmDomPtr;
  const ptr = ++lastPtr;
  nodes[ptr] = node;
  node.asmDomPtr = ptr;
  return ptr;
};

export default {
  'addNode'(node) {
    addPtr(node.parentNode);
    addPtr(node.nextSibling);
    return addPtr(node);
  },
  'createElement'(tagName) {
    return addPtr(recycler.create(tagName));
  },
  'createElementNS'(namespaceURI, qualifiedName) {
    return addPtr(recycler.createNS(qualifiedName, namespaceURI));
  },
  'createTextNode'(text) {
    return addPtr(recycler.createText(text));
  },
  'createComment'(text) {
    return addPtr(recycler.createComment(text));
  },
  'createDocumentFragment'() {
    return addPtr(document.createDocumentFragment());
  },
  'insertBefore'(parentNodePtr, newNodePtr, referenceNodePtr) {
    nodes[parentNodePtr].insertBefore(
      nodes[newNodePtr],
      nodes[referenceNodePtr],
    );
  },
  'removeChild'(childPtr) {
    if (nodes[childPtr] === null || nodes[childPtr] === undefined) return;
    recycler.collect(nodes[childPtr]);
  },
  'appendChild'(parentPtr, childPtr) {
    nodes[parentPtr].appendChild(nodes[childPtr]);
  },
  'removeAttribute'(nodePtr, attr) {
    nodes[nodePtr].removeAttribute(attr);
  },
  'setAttribute'(nodePtr, attr, value) {
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
  // eslint-disable-next-line
  'parentNode': (nodePtr) => {
    return (
      nodes[nodePtr] !== null && nodes[nodePtr] !== undefined &&
      nodes[nodePtr].parentNode !== null
    ) ? nodes[nodePtr].parentNode.asmDomPtr : 0;
  },
  // eslint-disable-next-line
  'nextSibling': (nodePtr) => {
    return (
      nodes[nodePtr] !== null && nodes[nodePtr] !== undefined &&
      nodes[nodePtr].nextSibling !== null
    ) ? nodes[nodePtr].nextSibling.asmDomPtr : 0;
  },
  'setTextContent': (nodePtr, text) => {
    nodes[nodePtr].textContent = text;
  },
};
