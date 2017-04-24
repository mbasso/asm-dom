import expect from 'expect';
import init from '../src/';

describe('patch', function testPatch() {
  this.timeout(30000);

  let root;
  let vdom;
  let h;
  let patch;

  before((done) => {
    init().then((asmDom) => {
      vdom = asmDom;
      h = vdom.h;
      patch = vdom.patch;
      done();
    });
  });

  beforeEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
  });

  it('should patch a node', () => {
    expect(document.body.children.length).toEqual(1);
    expect(document.body.firstChild).toEqual(root);
    const span = h('span');
    const elm = patch(root, span);
    expect(document.body.children.length).toEqual(1);
    expect(document.body.firstChild.nodeName).toEqual('SPAN');
    expect(document.body.firstChild.getAttribute('id')).toBeFalsy();
    expect(document.body.firstChild.className).toBeFalsy();
    vdom.deleteVNode(elm);
  });

  it('should have a tag', () => {
    const vnode = h('div');
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.tagName).toEqual('DIV');
    vdom.deleteVNode(elmPtr);
  });

  it('should have the correct namespace', () => {
    const svgNamespace = 'http://www.w3.org/2000/svg';

    patch(root, h('div', [h('div', { ns: svgNamespace })]));
    const elm = document.body.firstChild;
    expect(elm.firstChild.namespaceURI).toEqual(svgNamespace);
  });

  it('should create elements with class', () => {
    const vnode = h('div', { 'class': 'foo' });
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttribute('class')).toEqual('foo');
    vdom.deleteVNode(elmPtr);
  });

  it('should create elements with className', () => {
    const vnode = h('div', { className: 'foo' });
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttribute('class')).toEqual('foo');
    vdom.deleteVNode(elmPtr);
  });

  it('should create elements with text content', () => {
    const vnode = h('div', ['I am a string']);
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.innerHTML).toEqual('I am a string');
    vdom.deleteVNode(elmPtr);
  });

  it('should create elements with span and text content', () => {
    const vnode = h('a', [h('span'), 'I am a string']);
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.childNodes[0].tagName).toEqual('SPAN');
    expect(elm.childNodes[1].textContent).toEqual('I am a string');
    vdom.deleteVNode(elmPtr);
  });

  it('should create comments', () => {
    const vnode = h('!', 'test');
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.nodeType).toEqual(document.COMMENT_NODE);
    expect(elm.textContent).toEqual('test');
    vdom.deleteVNode(elmPtr);
  });

  /*
  it('should create an element created inside an iframe', (done) => {
    // Only run if srcdoc is supported.
    const frame = document.createElement('iframe');
    if (typeof frame.srcdoc !== 'undefined') {
      frame.srcdoc = '<div>Thing 1</div>';
      frame.onload = () => {
        const vnode = h('div', 'Thing 2');
        patch(frame.contentDocument.body.querySelector('div'), vnode);
        expect(frame.contentDocument.body.querySelector('div').textContent).toEqual('Thing 2');
        frame.remove();
        vdom.deleteVNode(vnode);
        done();
      };
      document.body.appendChild(frame);
    } else {
      done();
    }
  });
  */


});
