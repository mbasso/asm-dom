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
});
