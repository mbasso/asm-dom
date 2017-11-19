import expect from 'expect';
import init from '../../src/js/';

describe('toVNode (js)', function test() {
  this.timeout(30000);

  let root;
  let vdom;
  let h;
  let patch;
  let toVNode;
  let getNode;

  before((done) => {
    init({
      useAsmJS: true,
      hardReload: true,
    }).then((asmDom) => {
      vdom = asmDom;
      h = vdom.h;
      patch = vdom.patch;
      toVNode = vdom.toVNode;
      getNode = vdom.getNode;
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

  it('should convert a node to vnode', () => {
    const node = document.createElement('div');
    const vnode = toVNode(node);
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.tagName).toEqual('DIV');
    vdom.deleteVNode(vnode);
  });

  it('should convert text node to vnode', () => {
    const node = document.createTextNode('Hello world!');
    const vnode = toVNode(node);
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.nodeName).toEqual('#text');
    expect(elm.textContent).toEqual('Hello world!');
    vdom.deleteVNode(vnode);
  });

  it('should convert comment node to vnode', () => {
    const node = document.createComment('Hello world!');
    const vnode = toVNode(node);
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.nodeName).toEqual('#comment');
    expect(elm.textContent).toEqual('Hello world!');
    vdom.deleteVNode(vnode);
  });

  it('should convert a node with attributes to vnode', () => {
    const node = document.createElement('div');
    node.setAttribute('src', 'http://localhost/');
    node.setAttribute('data-foo', 'bar');
    node.setAttribute('data-bar', 'foo');
    const vnode = toVNode(node);
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.tagName).toEqual('DIV');
    expect(elm.getAttribute('src')).toEqual('http://localhost/');
    expect(elm.getAttribute('data-foo')).toEqual('bar');
    expect(elm.getAttribute('data-bar')).toEqual('foo');
    vdom.deleteVNode(vnode);
  });

  it('should convert a node with children to vnode', () => {
    const parent = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('Hello World!'));
    const p = document.createElement('p');
    p.appendChild(document.createTextNode('foo'));
    p.appendChild(document.createComment('bar'));
    const child = document.createElement('div');
    parent.appendChild(h1);
    parent.appendChild(p);
    parent.appendChild(child);
    const vnode = toVNode(parent);
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.tagName).toEqual('DIV');
    expect(elm.childNodes.length).toEqual(3);
    expect(elm.childNodes[0].tagName).toEqual('H1');
    expect(elm.childNodes[0].childNodes.length).toEqual(1);
    expect(elm.childNodes[0].childNodes[0].nodeName).toEqual('#text');
    expect(elm.childNodes[0].childNodes[0].textContent).toEqual('Hello World!');
    expect(elm.childNodes[1].tagName).toEqual('P');
    expect(elm.childNodes[1].childNodes.length).toEqual(2);
    expect(elm.childNodes[1].childNodes[0].nodeName).toEqual('#text');
    expect(elm.childNodes[1].childNodes[0].textContent).toEqual('foo');
    expect(elm.childNodes[1].childNodes[1].nodeName).toEqual('#comment');
    expect(elm.childNodes[1].childNodes[1].textContent).toEqual('bar');
    expect(elm.childNodes[2].tagName).toEqual('DIV');
    vdom.deleteVNode(vnode);
  });

  it('should convert a node with attributes and children to vnode', () => {
    const parent = document.createElement('div');
    parent.setAttribute('data-foo', 'foo');
    const img = document.createElement('img');
    img.setAttribute('src', 'http://localhost/');
    const div = document.createElement('div');
    parent.appendChild(img);
    parent.appendChild(div);
    const vnode = toVNode(parent);
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.tagName).toEqual('DIV');
    expect(elm.getAttribute('data-foo')).toEqual('foo');
    expect(elm.childNodes.length).toEqual(2);
    expect(elm.childNodes[0].tagName).toEqual('IMG');
    expect(elm.childNodes[0].getAttribute('src')).toEqual('http://localhost/');
    expect(elm.childNodes[1].tagName).toEqual('DIV');
    vdom.deleteVNode(vnode);
  });

  it('should remove previous children of the root element', () => {
    const h2 = document.createElement('h2');
    h2.textContent = 'Hello';
    const prevElm = document.createElement('div');
    prevElm.id = 'id';
    prevElm.className = 'class';
    prevElm.appendChild(h2);
    const nextVNode = h('div', {
      id: 'id',
      className: 'class',
    }, [
      h('span', 'Hi'),
    ]);
    patch(toVNode(prevElm), nextVNode);
    const elm = getNode(nextVNode);
    expect(elm).toEqual(prevElm);
    expect(elm.tagName).toEqual('DIV');
    expect(elm.id).toEqual('id');
    expect(elm.className).toEqual('class');
    expect(elm.childNodes.length).toEqual(1);
    expect(elm.childNodes[0].tagName).toEqual('SPAN');
    expect(elm.childNodes[0].textContent).toEqual('Hi');
    vdom.deleteVNode(nextVNode);
  });

  it('should support patching in a DocumentFragment', () => {
    const prevElm = document.createDocumentFragment();
    const nextVNode = h('', [
      h('div', {
        id: 'id',
        className: 'class',
      }, [
        h('span', 'Hi'),
      ]),
    ]);
    patch(toVNode(prevElm), nextVNode);
    const elm = getNode(nextVNode);
    expect(elm).toEqual(prevElm);
    expect(elm.nodeType).toEqual(11);
    expect(elm.childNodes.length).toEqual(1);
    expect(elm.childNodes[0].tagName).toEqual('DIV');
    expect(elm.childNodes[0].id).toEqual('id');
    expect(elm.childNodes[0].className).toEqual('class');
    expect(elm.childNodes[0].childNodes.length).toEqual(1);
    expect(elm.childNodes[0].childNodes[0].tagName).toEqual('SPAN');
    expect(elm.childNodes[0].childNodes[0].textContent).toEqual('Hi');
    vdom.deleteVNode(nextVNode);
  });

  it('should remove some children of the root element', () => {
    const h2 = document.createElement('h2');
    h2.textContent = 'Hello';
    const prevElm = document.createElement('div');
    prevElm.id = 'id';
    prevElm.className = 'class';
    const text = document.createTextNode('Foobar');
    text.testProperty = 123;
    prevElm.appendChild(text);
    prevElm.appendChild(h2);
    const nextVNode = h('div', {
      id: 'id',
      className: 'class',
    }, [
      'Foobar',
    ]);
    patch(toVNode(prevElm), nextVNode);
    const elm = getNode(nextVNode);
    expect(elm).toEqual(prevElm);
    expect(elm.tagName).toEqual('DIV');
    expect(elm.id).toEqual('id');
    expect(elm.className).toEqual('class');
    expect(elm.childNodes.length).toEqual(1);
    expect(elm.childNodes[0].nodeType).toEqual(3);
    expect(elm.childNodes[0].wholeText).toEqual('Foobar');
    expect(elm.childNodes[0].testProperty).toEqual(123);
    vdom.deleteVNode(nextVNode);
  });

  it('should remove text elements', () => {
    const h2 = document.createElement('h2');
    h2.textContent = 'Hello';
    const prevElm = document.createElement('div');
    prevElm.id = 'id';
    prevElm.className = 'class';
    const text = document.createTextNode('Foobar');
    prevElm.appendChild(text);
    prevElm.appendChild(h2);
    const nextVNode = h('div', {
      id: 'id',
      className: 'class',
    }, [
      h('h2', 'Hello'),
    ]);
    patch(toVNode(prevElm), nextVNode);
    const elm = getNode(nextVNode);
    expect(elm).toEqual(prevElm);
    expect(elm.tagName).toEqual('DIV');
    expect(elm.id).toEqual('id');
    expect(elm.className).toEqual('class');
    expect(elm.childNodes.length).toEqual(1);
    expect(elm.childNodes[0].nodeType).toEqual(1);
    expect(elm.childNodes[0].textContent).toEqual('Hello');
    vdom.deleteVNode(nextVNode);
  });
});
