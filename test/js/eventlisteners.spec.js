import expect from 'expect';
import init from '../../src/';

describe('eventlisteners (js)', function testEventlisteners() {
  this.timeout(30000);

  let root;
  let vdom;
  let h;
  let patch;

  before((done) => {
    init({
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

  it('should attach a click event handler to element', () => {
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

  it('should detach attached click event handler to element', () => {
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

  it('should share handlers in parent and child nodes', () => {
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
});
