'use strict';

exports.__esModule = true;
exports.nodes = undefined;

var _domRecycler = require('./domRecycler');

var _domRecycler2 = _interopRequireDefault(_domRecycler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var nodes = exports.nodes = { 0: null };
var lastPtr = 0;

var addPtr = function addPtr(node) {
  if (node === null) return 0;
  if (node.asmDomPtr !== undefined) return node.asmDomPtr;
  var ptr = ++lastPtr;
  nodes[ptr] = node;
  node.asmDomPtr = ptr;
  return ptr;
};

exports['default'] = {
  'addNode': function addNode(node) {
    addPtr(node.parentNode);
    addPtr(node.nextSibling);
    return addPtr(node);
  },
  'createElement': function createElement(tagName) {
    return addPtr(_domRecycler2['default'].create(tagName));
  },
  'createElementNS': function createElementNS(namespaceURI, qualifiedName) {
    return addPtr(_domRecycler2['default'].createNS(qualifiedName, namespaceURI));
  },
  'createTextNode': function createTextNode(text) {
    return addPtr(_domRecycler2['default'].createText(text));
  },
  'createComment': function createComment(text) {
    return addPtr(_domRecycler2['default'].createComment(text));
  },
  'createDocumentFragment': function createDocumentFragment() {
    return addPtr(document.createDocumentFragment());
  },
  'insertBefore': function insertBefore(parentNodePtr, newNodePtr, referenceNodePtr) {
    nodes[parentNodePtr].insertBefore(nodes[newNodePtr], nodes[referenceNodePtr]);
  },
  'removeChild': function removeChild(childPtr) {
    if (nodes[childPtr] === null || nodes[childPtr] === undefined) return;
    _domRecycler2['default'].collect(nodes[childPtr]);
  },
  'appendChild': function appendChild(parentPtr, childPtr) {
    nodes[parentPtr].appendChild(nodes[childPtr]);
  },
  'removeAttribute': function removeAttribute(nodePtr, attr) {
    nodes[nodePtr].removeAttribute(attr);
  },
  'setAttribute': function setAttribute(nodePtr, attr, value) {
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
  'parentNode': function parentNode(nodePtr) {
    return nodes[nodePtr] !== null && nodes[nodePtr] !== undefined && nodes[nodePtr].parentNode !== null ? nodes[nodePtr].parentNode.asmDomPtr : 0;
  },
  // eslint-disable-next-line
  'nextSibling': function nextSibling(nodePtr) {
    return nodes[nodePtr] !== null && nodes[nodePtr] !== undefined && nodes[nodePtr].nextSibling !== null ? nodes[nodePtr].nextSibling.asmDomPtr : 0;
  },
  'setTextContent': function setTextContent(nodePtr, text) {
    nodes[nodePtr].textContent = text;
  }
};