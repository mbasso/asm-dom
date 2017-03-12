import expect from 'expect';
import asmDom from '../src/';

describe('h', () => {
  const vdom = asmDom();
  const { h } = vdom;

  it('should create a vnode with a selector', () => {
    const vnode = h('div');
    expect(vnode.sel).toEqual('div');
    expect(vnode.text).toEqual('');
  });

  it('should create a vnode with text', () => {
    const vnode = h('this is a text', true);
    expect(vnode.sel).toEqual('');
    expect(vnode.text).toEqual('this is a text');
  });

  it('should create a vnode with children', () => {
    const vnode = h('div', [
      h('video'),
      h('span'),
      h('div', [
        h('div'),
      ]),
    ]);
    expect(vnode.sel).toEqual('div');
    expect(vnode.children).toBeA(vdom.VNodeVector);
    expect(vnode.children.size()).toEqual(3);
    expect(vnode.children.get(0).sel).toEqual('video');
  });

  it('should create an svg vnode', () => {
    const vnode = h('svg', [
      h('video'),
    ]);
    expect(vnode.sel).toEqual('svg');
    expect(vnode.data.ns).toEqual('http://www.w3.org/2000/svg');
    expect(vnode.children.get(0).sel).toEqual('video');
    expect(vnode.children.get(0).data.ns).toEqual('http://www.w3.org/2000/svg');
  });

  it('should create a vnode with a single child', () => {
    const vnode = h('div', h('video'));
    expect(vnode.sel).toEqual('div');
    expect(vnode.children).toBeA(vdom.VNodeVector);
    expect(vnode.children.size()).toEqual(1);
    expect(vnode.children.get(0).sel).toEqual('video');
  });

  it('should create a vnode with all params', () => {
    const data = new vdom.VNodeData();
    const children = new vdom.VNodeVector();
    const vnode = h('div', 'this is a text', data, children);
    expect(vnode.sel).toEqual('div');
    expect(vnode.text).toEqual('this is a text');
    expect(vnode.data).toEqual(data);
    expect(vnode.children).toEqual(children);
  });
});
