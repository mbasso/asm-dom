import expect from 'expect';
import asmDom from '../src/';

describe('VNode', () => {
  const vdom = asmDom();

  it('should create a vnode with a selector', () => {
    const vnode = vdom.H.prototype.h('div');
    expect(vnode.get_sel()).toEqual('div');
  });
});
