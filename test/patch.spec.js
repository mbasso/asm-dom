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
    // vnode.delete();
  });

  it('should have different tag and id', () => {
    let elm = document.createElement('div');
    root.appendChild(elm);
    const vnode = h('span#id');
    elm = patch(elm, vnode).elm;
    expect(elm.tagName).toEqual('SPAN');
    expect(elm.id).toEqual('id');
    // vnode.delete();
  });

  it('should have an id', () => {
    const vnode = h('div', [h('div#unique')]);
    const elm = patch(root, vnode).elm;
    expect(elm.firstChild.id).toEqual('unique');
    // vnode.delete();
  });

  /*
  it('should have correct namespace', () => {
    const SVGNamespace = 'http://www.w3.org/2000/svg';
    const XHTMLNamespace = 'http://www.w3.org/1999/xhtml';
    let vnode;
    let elm;

    // TODO: ns in data

    // verify that svg tag automatically gets svg namespace
    vnode = h('svg', [
      h('foreignObject', [
        h('div', ['I am HTML embedded in SVG']),
      ]),
    ]);
    elm = patch(root, vnode).elm;
    expect(elm.namespaceURI).toEqual(SVGNamespace);
    expect(elm.firstChild.namespaceURI).toEqual(SVGNamespace);
    expect(elm.firstChild.firstChild.namespaceURI).toEqual(XHTMLNamespace);
    // vnode.delete();

    // verify that svg tag with extra selectors gets svg namespace
    vnode = h('svg#some-id');
    elm = patch(root, vnode).elm;
    expect(elm.namespaceURI, SVGNamespace);
    // vnode.delete();

    // verify that non-svg tag beginning with 'svg' does NOT get namespace
    vnode = h('svg-custom-el');
    elm = patch(root, vnode).elm;
    expect(elm.namespaceURI).toNotEqual(SVGNamespace);
    // vnode.delete();
  });

  it('should receive classes in selector', () => {
    const vnode = h('div', [h('i.am.a.class')]);
    const elm = patch(root, vnode).elm;
    expect(elm.firstChild.classList.contains('am')).toBeTruthy();
    expect(elm.firstChild.classList.contains('a')).toBeTruthy();
    expect(elm.firstChild.classList.contains('class')).toBeTruthy();
    // vnode.delete();
  });
  */

  // TODO: should receive classes in class property
  // TODO: handles classes from both selector and property

  it('should create elements with text content', () => {
    const vnode = h('div', ['I am a string']);
    const elm = patch(root, vnode).elm;
    expect(elm.innerHTML).toEqual('I am a string');
    // vnode.delete();
  });

  it('should create elements with span and text content', () => {
    const vnode = h('a', [h('span'), 'I am a string']);
    const elm = patch(root, vnode).elm;
    expect(elm.childNodes[0].tagName).toEqual('SPAN');
    expect(elm.childNodes[1].textContent).toEqual('I am a string');
    // vnode.delete();
  });

  // TODO: should create elements with props

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
        // vnode.delete();
        done();
      };
      document.body.appendChild(frame);
    } else {
      done();
    }
  });

  it('is a patch of the root element', () => {
    const elmWithIdAndClass = document.createElement('div');
    elmWithIdAndClass.id = 'id';
    elmWithIdAndClass.className = 'class';
    const vnode = h('div#id.class', [h('span', 'Hi')]);
    const elm = patch(elmWithIdAndClass, vnode).elm;
    expect(elm).toEqual(elmWithIdAndClass);
    expect(elm.tagName).toEqual('DIV');
    expect(elm.id).toEqual('id');
    expect(elm.className).toEqual('class');
    // vnode.delete();
  });
  */

  it('should create comments', () => {
    const vnode = h('!', 'test');
    const elm = patch(root, vnode).elm;
    expect(elm.nodeType).toEqual(document.COMMENT_NODE);
    expect(elm.textContent).toEqual('test');
    // vnode.delete();
  });

  // Others

  it('should patch a node', () => {
    expect(document.body.children.length).toEqual(1);
    expect(document.body.firstChild).toEqual(root);
    const span = h('span');
    patch(root, span);
    // span.delete();
    expect(document.body.children.length).toEqual(1);
    expect(document.body.firstChild.nodeName).toEqual('SPAN');
    expect(document.body.firstChild.getAttribute('id')).toBeFalsy();
    expect(document.body.firstChild.className).toBeFalsy();
  });
});
