import expect from 'expect';
import init from '../../src/';

describe('dataset (js)', function testDataset() {
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

  it('should set on initial element creation', () => {
    const vnode = h('div', { 'data-foo': 'foo' });
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttribute('data-foo')).toEqual('foo');
    vdom.deleteVNode(vnode);
  });

  it('should update dataset', () => {
    const vnode = h('i', {
      'data-foo': 'foo',
      'data-bar': 'bar',
    });
    const vnode2 = h('i', {
      'data-baz': 'baz',
    });
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttribute('data-foo')).toEqual('foo');
    expect(elm.getAttribute('data-bar')).toEqual('bar');
    patch(vnode, vnode2);
    expect(elm.getAttribute('data-baz')).toEqual('baz');
    expect(elm.getAttribute('data-foo')).toEqual(null);
    vdom.deleteVNode(vnode2);
  });

  it('can be memoized', () => {
    const dataset = {
      'data-foo': 'foo',
      'data-bar': 'bar',
    };
    const vnode = h('i', dataset);
    const vnode2 = h('i', dataset);
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttribute('data-foo')).toEqual('foo');
    expect(elm.getAttribute('data-bar')).toEqual('bar');
    patch(vnode, vnode2);
    expect(elm.getAttribute('data-foo')).toEqual('foo');
    expect(elm.getAttribute('data-bar')).toEqual('bar');
    vdom.deleteVNode(vnode2);
  });

  it('should handles string conversions', () => {
    const vnode = h('i', {
      'data-empty': '',
      'data-dash': '-',
      'data-dashed': 'foo-bar',
      'data-camel': 'fooBar',
      'data-integer': 0,
      'data-float': 0.1,
    });
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttribute('data-empty')).toEqual('');
    expect(elm.getAttribute('data-dash')).toEqual('-');
    expect(elm.getAttribute('data-dashed')).toEqual('foo-bar');
    expect(elm.getAttribute('data-camel')).toEqual('fooBar');
    expect(elm.getAttribute('data-integer')).toEqual('0');
    expect(elm.getAttribute('data-float')).toEqual('0.1');
    vdom.deleteVNode(vnode);
  });
});
