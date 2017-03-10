import expect from 'expect';
import asmDom from '../src/';

describe('VNode', () => {
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
  });
});
