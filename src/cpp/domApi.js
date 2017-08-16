export const nodes = { 0: null };
let lastPtr = 0;
const freePtrs = [];

const addPtr = (node) => {
  const ptr = freePtrs.length !== 0 ? freePtrs.pop() : ++lastPtr;
  nodes[ptr] = node;
  if (node !== null && node !== undefined) node.asmDomPtr = ptr;
  return ptr;
};

const remove = (node) => {
  while (node.firstChild) remove(node.firstChild);
  freePtrs.push(node.asmDomPtr);
  node.remove();
};

export default {
  'addNode'(node) {
    addPtr(node.parentNode);
    addPtr(node.nextSibling);
    const ptr = addPtr(node);
    return nodes[ptr] !== null ? ptr : null;
  },
  'createElement'(tagName) {
    return addPtr(document.createElement(tagName));
  },
  'createElementNS'(namespaceURI, qualifiedName) {
    return addPtr(document.createElementNS(namespaceURI, qualifiedName));
  },
  'createTextNode'(text) {
    return addPtr(document.createTextNode(text));
  },
  'createComment'(text) {
    return addPtr(document.createComment(text));
  },
  'insertBefore'(parentNodePtr, newNodePtr, referenceNodePtr) {
    nodes[parentNodePtr].insertBefore(
      nodes[newNodePtr],
      nodes[referenceNodePtr] !== undefined ? nodes[referenceNodePtr] : null,
    );
  },
  'removeChild'(childPtr) {
    if (nodes[childPtr] === null || nodes[childPtr] === undefined) return;
    remove(nodes[childPtr]);
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
  'parentNode': (nodePtr) => {
    if (
      nodes[nodePtr] !== null && nodes[nodePtr] !== undefined &&
      nodes[nodePtr].parentNode !== null
    ) return nodes[nodePtr].parentNode.asmDomPtr;
    return 0;
  },
  'nextSibling': (nodePtr) => {
    if (
      nodes[nodePtr] !== null && nodes[nodePtr] !== undefined &&
      nodes[nodePtr].nextSibling !== null
    ) return nodes[nodePtr].nextSibling.asmDomPtr;
    return 0;
  },
  'setTextContent': (nodePtr, text) => {
    nodes[nodePtr].textContent = text;
  },
};
