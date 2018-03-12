'use strict';

exports.__esModule = true;
var recycler = {
  collect: function collect(node) {
    recycler.clean(node);
    var name = node.nodeName;
    if (node.asmDomNS !== undefined) name += node.namespaceURI;
    var list = recycler.nodes[name];
    if (list !== undefined) list.push(node);else recycler.nodes[name] = [node];
  },
  create: function create(name) {
    name = name.toUpperCase();
    var list = recycler.nodes[name];
    if (list !== undefined) {
      var node = list.pop();
      if (node !== undefined) return node;
    }
    return document.createElement(name);
  },
  createNS: function createNS(name, ns) {
    name = name.toUpperCase();
    var list = recycler.nodes[name + ns];
    if (list !== undefined) {
      var _node = list.pop();
      if (_node !== undefined) return _node;
    }
    var node = document.createElementNS(ns, name);
    node.asmDomNS = ns;
    return node;
  },
  createText: function createText(text) {
    var list = recycler.nodes['#text'];
    if (list !== undefined) {
      var node = list.pop();
      if (node !== undefined) {
        node.nodeValue = text;
        return node;
      }
    }
    return document.createTextNode(text);
  },
  createComment: function createComment(comment) {
    var list = recycler.nodes['#comment'];
    if (list !== undefined) {
      var node = list.pop();
      if (node !== undefined) {
        node.nodeValue = comment;
        return node;
      }
    }
    return document.createComment(comment);
  },
  clean: function clean(node) {
    node.remove();
    var i = void 0;
    // eslint-disable-next-line
    while (i = node.lastChild) {
      recycler.collect(i);
    }i = node.attributes !== undefined ? node.attributes.length : 0;
    while (i--) {
      node.removeAttribute(node.attributes[i].name);
    }node.asmDomVNode = undefined;
    if (node.asmDomRaws !== undefined) {
      node.asmDomRaws.forEach(function (raw) {
        node[raw] = undefined;
      });
      node.asmDomRaws = undefined;
    }
    if (node.asmDomEvents !== undefined) {
      var keys = Object.keys(node.asmDomEvents);
      i = keys.length;
      // eslint-disable-next-line
      while (i--) {
        node.removeEventListener(keys[i], node.asmDomEvents[keys[i]], false);
      }
      node.asmDomEvents = undefined;
    }
    if (node.nodeValue !== null && node.nodeValue !== '') {
      node.nodeValue = '';
    }
    Object.keys(node).forEach(function (key) {
      if (key[0] !== 'a' || key[1] !== 's' || key[2] !== 'm' || key[3] !== 'D' || key[4] !== 'o' || key[5] !== 'm') {
        node[key] = undefined;
      }
    });
  },

  nodes: {}
};

exports['default'] = recycler;