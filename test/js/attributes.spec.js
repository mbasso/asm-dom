import expect from 'expect';
import init from '../../src/';

describe('attributes (js)', function testAttributes() {
  this.timeout(30000);

  let root;
  let vdom;
  let h;
  let patch;

  before((done) => {
    init({
      useAsmJS: true,
      hardReload: true,
    }).then((asmDom) => {
      vdom = asmDom;
      h = vdom.h;
      patch = vdom.patch;
      done();
    });
  });

  beforeEach(() => {
    vdom.reset();

    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
  });

  it('should have their provided values', () => {
    const vnode = h('div', { href: '/foo', minlength: 1, value: true });
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttribute('href')).toEqual('/foo');
    expect(elm.getAttribute('minlength')).toEqual('1');
    expect(elm.getAttribute('value')).toEqual('true');
    vdom.deleteVNode(vnode);
  });

  it('can be memoized', () => {
    const attrs = { href: '/foo', minlength: 1, value: true };
    const vnode = h('div', attrs);
    const vnode2 = h('div', attrs);
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.getAttribute('href')).toEqual('/foo');
    expect(elm.getAttribute('minlength')).toEqual('1');
    expect(elm.getAttribute('value')).toEqual('true');
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(elm.getAttribute('href')).toEqual('/foo');
    expect(elm.getAttribute('minlength')).toEqual('1');
    expect(elm.getAttribute('value')).toEqual('true');
    vdom.deleteVNode(vnode2);
  });

  it('should be omitted when falsy values are provided', () => {
    const vnode = h('div', { href: null, minlength: 0, value: false });
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttribute('href')).toEqual('null');
    expect(elm.getAttribute('minlength')).toEqual('0');
    expect(elm.getAttribute('value')).toEqual(null);
    vdom.deleteVNode(vnode);
  });

  it('should be set correctly when namespaced', () => {
    const vnode = h('div', { 'xlink:href': '#foo' });
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttributeNS('http://www.w3.org/1999/xlink', 'href')).toEqual('#foo');
    vdom.deleteVNode(vnode);
  });
});
