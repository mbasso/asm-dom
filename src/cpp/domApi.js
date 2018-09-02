import recycler from './domRecycler';

export const nodes = { 0: null };
let lastPtr = 0;

const addPtr = (node) => {
  if (node === null) return 0;
  if (node.asmDomPtr !== undefined) return node.asmDomPtr;
  nodes[++lastPtr] = node;
  // eslint-disable-next-line
  return node.asmDomPtr = lastPtr;
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
    const node = nodes[childPtr];
    if (node === null || node === undefined) return;
    const parent = node.parentNode;
    if (parent !== null) parent.removeChild(node);
    recycler.collect(node);
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
    const node = nodes[nodePtr];
    return (
      node !== null && node !== undefined &&
      node.parentNode !== null
    ) ? node.parentNode.asmDomPtr : 0;
  },
  // eslint-disable-next-line
  'nextSibling': (nodePtr) => {
    const node = nodes[nodePtr];
    return (
      node !== null && node !== undefined &&
      node.nextSibling !== null
    ) ? node.nextSibling.asmDomPtr : 0;
  },
  'setNodeValue': (nodePtr, text) => {
    nodes[nodePtr].nodeValue = text;
  },
};
