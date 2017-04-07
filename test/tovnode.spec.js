import expect from 'expect';
import asmDom from '../src/';

describe('toVNode', function test() {
  this.timeout(5000);

  const vdom = asmDom();
  const { toVNode } = vdom;

  it('should convert a comment to VNode', () => {
    const comment = document.createComment('this is a comment');
    const vnodePtr = toVNode(comment);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('!');
    expect(vnode.text).toEqual('this is a comment');
    vdom.deleteVNode(vnodePtr);
  });

  it('should convert a text node to VNode', () => {
    const comment = document.createTextNode('this is a text');
    const vnodePtr = toVNode(comment);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('');
    expect(vnode.text).toEqual('this is a text');
    vdom.deleteVNode(vnodePtr);
  });

  it('should convert a node to VNode', () => {
    const node = document.createElement('div');
    const vnodePtr = toVNode(node);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel.toLowerCase()).toEqual('div');
    vdom.deleteVNode(vnodePtr);
  });

  it('should convert a node with attributes to VNode', () => {
    const node = document.createElement('div');
    node.setAttribute('id', 'nodeId');
    node.setAttribute('foo', 'bar');
    node.setAttribute('lorem', 'ipsum');
    const vnodePtr = toVNode(node);
    /*
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.props.get('id')).toBeFalsy();
    expect(vnode.props.get('foo')).toEqual('bar');
    expect(vnode.props.get('lorem')).toEqual('ipsum');
    */
    vdom.deleteVNode(vnodePtr);
  });

  it('should convert a node with id and class to VNode', () => {
    const node = document.createElement('div');
    node.appendChild(document.createElement('video'));
    node.appendChild(document.createElement('span'));
    node.className = 'nodeClass1 nodeClass2';
    node.setAttribute('id', 'nodeId');
    const vnodePtr = toVNode(node);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel.toLowerCase()).toEqual('div');
    expect(vnode.props.get('id')).toEqual('nodeId');
    expect(vnode.props.get('class')).toEqual('nodeClass1 nodeClass2');
    vdom.deleteVNode(vnodePtr);
  });

  it('should convert a node with children to VNode', () => {
    const node = document.createElement('div');
    node.appendChild(document.createElement('video'));
    node.appendChild(document.createElement('span'));
    const vnodePtr = toVNode(node);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel.toLowerCase()).toEqual('div');
    expect(vnode.children.length).toEqual(2);
    expect(vnode.children[0].sel.toLowerCase()).toEqual('video');
    expect(vnode.children[1].sel.toLowerCase()).toEqual('span');
    vdom.deleteVNode(vnodePtr);
  });
});
