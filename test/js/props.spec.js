import expect from 'expect';
import init from '../../src/js/';
import setup from '../setup';

describe('props (js)', function testProps() {
  this.timeout(30000);

  let root;
  let vdom;
  let h;
  let patch;

  before((done) => {
    setup();
    init({
      useAsmJS: true,
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

  it('should create elements with props', () => {
    const vnode = h('div', { raw: { src: 'http://localhost/' } });
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.src).toEqual('http://localhost/');
    vdom.deleteVNode(vnode);
  });

  it('changes an elements props', () => {
    const vnode = h('a', { raw: { src: 'http://other/' } });
    const vnode2 = h('a', { raw: { src: 'http://localhost/' } });
    patch(root, vnode);
    patch(vnode, vnode2);
    const elm = document.body.firstChild;
    expect(elm.src).toEqual('http://localhost/');
  });

  it('preserves memoized props', () => {
    const props = { src: 'http://other/' };
    const vnode = h('a', { raw: props });
    const vnode2 = h('a', { raw: props });
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.src, 'http://other/');
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(elm.src).toEqual('http://other/');
  });

  it('removes an elements props', () => {
    const vnode = h('a', { raw: { src: 'http://other/' } });
    const vnode2 = h('a');
    patch(root, vnode);
    patch(vnode, vnode2);
    const elm = document.body.firstChild;
    expect(elm.src).toEqual(undefined);
  });

  it('should update value prop if user interacted with the element', () => {
    const vnode = h('input', { raw: { value: 'foo' } });
    const vnode2 = h('input', { raw: { value: 'foo' } });
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.value).toEqual('foo');
    elm.value = 'bar';
    expect(elm.value).toEqual('bar');
    patch(vnode, vnode2);
    expect(elm.value).toEqual('foo');
  });

  it('should update checked prop if user interacted with the element', () => {
    const vnode = h('input', {
      type: 'checkbox',
      raw: {
        checked: true,
      },
    });
    const vnode2 = h('input', {
      type: 'checkbox',
      raw: {
        checked: true,
      },
    });
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.checked).toEqual(true);
    elm.checked = false;
    expect(elm.checked).toEqual(false);
    patch(vnode, vnode2);
    expect(elm.checked).toEqual(true);
  });
});
