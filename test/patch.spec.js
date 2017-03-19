import expect from 'expect';
import asmDom from '../src/';

describe('patch', () => {
  const vdom = asmDom();
  const { h, patch } = vdom;
  let root;

  const clearDOM = () => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    root = document.createElement('div');
    root.setAttribute('id', 'foo');
    document.body.appendChild(root);
  };

  clearDOM();
  afterEach(clearDOM);

  it('should patch a node', () => {
    expect(document.body.children.length).toEqual(1);
    expect(document.body.firstChild).toEqual(root);
    const span = h('span');
    patch(root, span);
    span.delete();
    expect(document.body.children.length).toEqual(1);
    expect(document.body.firstChild.nodeName).toEqual('SPAN');
    expect(document.body.firstChild.getAttribute('id')).toBeFalsy();
    expect(document.body.firstChild.className).toBeFalsy();
  });
});
