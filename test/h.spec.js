import expect from 'expect';
import asmDom from '../src/';

describe('h', () => {
  const vdom = asmDom();
  const { h } = vdom;

  it('should create a vnode with proper tag', () => {
    const div = h('div');
    const a = h('a');
    expect(div.sel).toEqual('div');
    expect(a.sel).toEqual('a');
    // div.delete();
    // a.delete();
  });

  it('should create a vnode with children', () => {
    const vnode = h('div', [h('span#hello'), h('b.world')]);
    expect(vnode.sel).toEqual('div');
    expect(vnode.children.get(0).sel).toEqual('span#hello');
    expect(vnode.children.get(1).sel).toEqual('b.world');
    // vnode.delete();
  });

  it('should create a vnode with one child', () => {
    const vnode = h('div', h('span#hello'));
    expect(vnode.sel).toEqual('div');
    expect(vnode.children.get(0).sel).toEqual('span#hello');
    // vnode.delete();
  });

  // TODO: should create a vnode with props and one child

  it('should create a vnode with text content', () => {
    const vnode = h('div', ['I am a string']);
    expect(vnode.children.get(0).text).toEqual('I am a string');
    // vnode.delete();
  });

  it('should create a vnode with text content in string', () => {
    const vnode = h('div', 'I am a string');
    expect(vnode.text).toEqual('I am a string');
    // vnode.delete();
  });

  it('should create a vnode for comment', () => {
    const vnode = h('!', 'test');
    expect(vnode.sel).toEqual('!');
    expect(vnode.text).toEqual('test');
    // vnode.delete();
  });

  // TODO: should create vnode with props and text content in string

  // Others

  it('should create a vnode with a selector', () => {
    const vnode = h('div');
    expect(vnode.sel).toEqual('div');
    expect(vnode.text).toEqual('');
    // vnode.delete();
  });

  it('should create a vnode with text', () => {
    const vnode = h('this is a text', true);
    expect(vnode.sel).toEqual('');
    expect(vnode.text).toEqual('this is a text');
    // vnode.delete();
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
    // vnode.delete();
  });

  it('should create an svg vnode', () => {
    const vnode = h('svg', [
      h('video'),
    ]);
    expect(vnode.sel).toEqual('svg');
    expect(vnode.data.ns).toEqual('http://www.w3.org/2000/svg');
    expect(vnode.children.get(0).sel).toEqual('video');
    expect(vnode.children.get(0).data.ns).toEqual('http://www.w3.org/2000/svg');
    // vnode.delete();
  });

  it('should create a vnode with a single child', () => {
    const vnode = h('div', h('video'));
    expect(vnode.sel).toEqual('div');
    expect(vnode.children).toBeA(vdom.VNodeVector);
    expect(vnode.children.size()).toEqual(1);
    expect(vnode.children.get(0).sel).toEqual('video');
    // vnode.delete();
  });

  it('should create a vnode with all params', () => {
    const data = new vdom.VNodeData();
    const children = new vdom.VNodeVector();
    const vnode = h('div', 'this is a text', data, children);
    expect(vnode.sel).toEqual('div');
    expect(vnode.text).toEqual('this is a text');
    expect(vnode.data).toEqual(data);
    expect(vnode.children).toEqual(children);
    // vnode.delete();
  });
});
