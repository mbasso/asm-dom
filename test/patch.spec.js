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

  it('should have a tag', () => {
    const vnode = h('div');
    const elm = patch(root, vnode).elm;
    expect(elm.tagName).toEqual('DIV');
    vnode.delete();
  });

  it('should have different tag and id', () => {
    let elm = document.createElement('div');
    root.appendChild(elm);
    const vnode = h('span#id');
    elm = patch(elm, vnode).elm;
    expect(elm.tagName).toEqual('SPAN');
    expect(elm.id).toEqual('id');
    vnode.delete();
  });

  it('should have an id', () => {
    const vnode = h('div', [h('div#unique')]);
    const elm = patch(root, vnode).elm;
    expect(elm.firstChild.id).toEqual('unique');
    vnode.delete();
  });

  // Others

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
