import expect from 'expect';
import init from '../../src/js/';
import setup from '../setup';

describe('eventlisteners (js)', function testEventlisteners() {
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

  it('should attach a click event handler to element (as prop)', () => {
    const result = [];
    const clicked = (ev) => { result.push(ev); };
    const vnode = h('div', { raw: { onclick: clicked } }, [
      h('a', 'Click my parent'),
    ]);
    patch(root, vnode);
    const elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(1);
    vdom.deleteVNode(vnode);
  });

  it('should detach attached click event handler to element (as prop)', () => {
    const result = [];
    const clicked = (ev) => { result.push(ev); };
    const vnode = h('div', { raw: { onclick: clicked } }, [
      h('a', 'Click my parent'),
    ]);
    patch(root, vnode);
    let elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(1);
    const vnode2 = h('div', { raw: {} }, [
      h('a', 'Click my parent'),
    ]);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(1);
    vdom.deleteVNode(vnode2);
  });

  it('should share handlers in parent and child nodes (as prop)', () => {
    const result = [];
    const sharedHandlers = {
      onclick: (ev) => { result.push(ev); },
    };
    const vnode = h('div', { raw: sharedHandlers }, [
      h('a', { raw: sharedHandlers }, 'Click my parent'),
    ]);
    patch(root, vnode);
    const elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(1);
    elm.firstChild.click();
    expect(result.length).toEqual(3);
    vdom.deleteVNode(vnode);
  });

  it('should update handlers (as prop)', () => {
    const firstArr = [];
    const secondArr = [];
    const pushToFirstArray = (ev) => { firstArr.push(ev); };
    const pushToSecondArray = (ev) => { secondArr.push(ev); };
    const vnode = h('div', { raw: { onclick: pushToFirstArray } }, [
      h('a', 'Click my parent'),
    ]);
    patch(root, vnode);
    let elm = document.body.firstChild;
    elm.click();
    expect(firstArr.length).toEqual(1);
    const vnode2 = h('div', { raw: { onclick: pushToSecondArray } }, [
      h('a', 'Click my parent'),
    ]);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    elm.click();
    expect(firstArr.length).toEqual(1);
    expect(secondArr.length).toEqual(1);
    vdom.deleteVNode(vnode2);
  });

  it('should not update handlers (as prop)', () => {
    const result = [];
    const clicked = (ev) => { result.push(ev); };
    const vnode = h('div', { raw: { onclick: clicked } }, [
      h('a', 'Click my parent'),
    ]);
    patch(root, vnode);
    let elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(1);
    const vnode2 = h('div', { raw: { onclick: clicked } }, [
      h('a', 'Click my parent'),
    ]);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(2);
    vdom.deleteVNode(vnode2);
  });

  it('should attach a click event handler to element (as eventListener)', () => {
    const result = [];
    const clicked = (ev) => { result.push(ev); };
    const vnode = h('div', { onclick: clicked }, [
      h('a', 'Click my parent'),
    ]);
    patch(root, vnode);
    const elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(1);
    vdom.deleteVNode(vnode);
  });

  it('should detach attached click event handler to element (as eventListener)', () => {
    const result = [];
    const clicked = (ev) => { result.push(ev); };
    const vnode = h('div', { onclick: clicked }, [
      h('a', 'Click my parent'),
    ]);
    patch(root, vnode);
    let elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(1);
    const vnode2 = h('div', [
      h('a', 'Click my parent'),
    ]);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(1);
    vdom.deleteVNode(vnode2);
  });

  it('should share handlers in parent and child nodes (as eventListener)', () => {
    const result = [];
    const sharedHandlers = {
      onclick: (ev) => { result.push(ev); },
    };
    const vnode = h('div', sharedHandlers, [
      h('a', sharedHandlers, 'Click my parent'),
    ]);
    patch(root, vnode);
    const elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(1);
    elm.firstChild.click();
    expect(result.length).toEqual(3);
    vdom.deleteVNode(vnode);
  });

  it('should update handlers (as eventListener)', () => {
    const firstArr = [];
    const secondArr = [];
    const pushToFirstArray = (ev) => { firstArr.push(ev); };
    const pushToSecondArray = (ev) => { secondArr.push(ev); };
    const vnode = h('div', { onclick: pushToFirstArray }, [
      h('a', 'Click my parent'),
    ]);
    patch(root, vnode);
    let elm = document.body.firstChild;
    elm.click();
    expect(firstArr.length).toEqual(1);
    const vnode2 = h('div', { onclick: pushToSecondArray }, [
      h('a', 'Click my parent'),
    ]);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    elm.click();
    expect(firstArr.length).toEqual(1);
    expect(secondArr.length).toEqual(1);
    vdom.deleteVNode(vnode2);
  });

  it('should not update handlers (as eventListener)', () => {
    const result = [];
    const clicked = (ev) => { result.push(ev); };
    const vnode = h('div', { onclick: clicked }, [
      h('a', 'Click my parent'),
    ]);
    patch(root, vnode);
    let elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(1);
    const vnode2 = h('div', { onclick: clicked }, [
      h('a', 'Click my parent'),
    ]);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    elm.click();
    expect(result.length).toEqual(2);
    vdom.deleteVNode(vnode2);
  });
});
