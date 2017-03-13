import expect from 'expect';
import asmDom from '../src/';

describe('toVNode', () => {
  const vdom = asmDom();
  const { toVNode } = vdom;

  it('should convert a comment to VNode', () => {
    const comment = document.createComment('this is a comment');
    const vnode = toVNode(comment);
    expect(vnode.sel).toEqual('!');
    expect(vnode.text).toEqual('this is a comment');
  });

  it('should convert a text node to VNode', () => {
    const comment = document.createTextNode('this is a text');
    const vnode = toVNode(comment);
    expect(vnode.sel).toEqual('');
    expect(vnode.text).toEqual('this is a text');
  });

  it('should convert a node to VNode', () => {
    const node = document.createElement('div');
    const vnode = toVNode(node);
    expect(vnode.sel.toLowerCase()).toEqual('div');
  });

  it('should convert a node with attributes to VNode', () => {
    const node = document.createElement('div');
    node.setAttribute('id', 'nodeId');
    node.setAttribute('foo', 'bar');
    node.setAttribute('lorem', 'ipsum');
    const vnode = toVNode(node);
    expect(vnode.data.attrs.get('id')).toBeFalsy();
    expect(vnode.data.attrs.get('foo')).toEqual('bar');
    expect(vnode.data.attrs.get('lorem')).toEqual('ipsum');
  });

  it('should convert a node with id and class to VNode', () => {
    const node = document.createElement('div');
    node.appendChild(document.createElement('video'));
    node.appendChild(document.createElement('span'));
    node.className = 'nodeClass1 nodeClass2';
    node.setAttribute('id', 'nodeId');
    const vnode = toVNode(node);
    expect(vnode.sel.toLowerCase()).toEqual('div#nodeid.nodeclass1.nodeclass2');
  });

  it('should convert a node with children to VNode', () => {
    const node = document.createElement('div');
    node.appendChild(document.createElement('video'));
    node.appendChild(document.createElement('span'));
    const vnode = toVNode(node);
    expect(vnode.sel.toLowerCase()).toEqual('div');
    expect(vnode.children).toBeA(vdom.VNodeVector);
    expect(vnode.children.size()).toEqual(2);
    expect(vnode.children.get(0).sel.toLowerCase()).toEqual('video');
    expect(vnode.children.get(1).sel.toLowerCase()).toEqual('span');
  });
});
