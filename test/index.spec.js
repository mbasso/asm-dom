import expect from 'expect';
import asmDom from '../src/';

describe('VNode', () => {
  const vdom = asmDom();
  const { h } = vdom;

  it('should create a vnode with a selector', () => {
    const vnode = h('div');
    expect(vnode.get_sel()).toEqual('div');
    expect(vnode.get_text()).toEqual('');
  });

  it('should create a vnode with text', () => {
    const vnode = h('this is a text', true);
    expect(vnode.get_sel()).toEqual('');
    expect(vnode.get_text()).toEqual('this is a text');
  });

  it('should create a vnode with children', () => {
    const vnode = h('div', [
      h('video'),
      h('span'),
      h('div', [
        h('div'),
      ]),
    ]);
    expect(vnode.get_sel()).toEqual('div');
  });
});
