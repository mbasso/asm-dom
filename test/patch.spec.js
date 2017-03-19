/*
import expect from 'expect';
import asmDom from '../src/';

describe('load', () => {
  const vdom = asmDom();
  const { h, patch } = vdom;

  const div = document.createElement('div');
  div.setAttribute('id', 'foo');
  document.body.appendChild(div);
  const root = document.getElementById('foo');

  afterEach(() => {
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
  });

  it('should patch a node', () => {
    expect(root.children.length).toEqual(0);
    patch(root, h('span'));
    expect(root.children.length).toEqual(1);
    expect(root.firstChild.nodeName).toEqual('SPAN');
  });
});
*/
