import expect from 'expect';
import init from '../src/';

describe('h', function test() {
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

  it('should get a vnode', () => {
    const vnode = h('div');
    expect(vdom.getNode(vnode)).toEqual(null);
    vdom.deleteVNode(vnode);
  });

  it('should delete a vnode', () => {
    const div = h('div', [
      h('span'),
      h('div', [
        h('video'),
      ]),
    ]);
    expect(
      () => vdom.deleteVNode(div),
    ).toNotThrow();
  });

  it('should remove a child', () => {
    const child = h('span');
    const parent = h('div', [
      h('video'),
      child,
      h('img'),
    ]);
    vdom.removeChild(parent, child);
    patch(root, parent);
    const elm = document.body.firstChild;
    expect(elm.childNodes.length).toEqual(2);
    expect(elm.childNodes[0].tagName).toEqual('VIDEO');
    expect(elm.childNodes[1].tagName).toEqual('IMG');
    vdom.deleteVNode(child);
    vdom.deleteVNode(parent);
  });

  it('should replace a child', () => {
    const oldChild = h('span');
    const newChild = h('div');
    const parent = h('div', [
      h('video'),
      oldChild,
      h('img'),
    ]);
    vdom.replaceChild(parent, oldChild, newChild);
    patch(root, parent);
    const elm = document.body.firstChild;
    expect(elm.childNodes.length).toEqual(3);
    expect(elm.childNodes[0].tagName).toEqual('VIDEO');
    expect(elm.childNodes[1].tagName).toEqual('DIV');
    expect(elm.childNodes[2].tagName).toEqual('IMG');
    vdom.deleteVNode(oldChild);
    vdom.deleteVNode(parent);
  });

  it('should create vnode with tag, props and elm', () => {
    expect(() => {
      const props = new window.asmDom.MapStringString();
      props.set('id', 'foo');
      props.set('class', 'bar');
      const vnode = vdom._h_elm('div', props, 1);
      vdom.deleteVNode(vnode);
      props.delete();
    }).toNotThrow();
  });

  it('should create a vnode with proper tag', () => {
    const vnodePtr = h('div');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with children', () => {
    const vnodePtr = h('div', [h('span#hello'), h('b.world')]);
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with one child', () => {
    const vnodePtr = h('div', h('span#hello'));
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with props and one child', () => {
    const vnodePtr = h('div', {
      foo: 'bar',
    }, h('span'));
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with text content', () => {
    const vnodePtr = h('div', ['I am a string']);
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with text content in string', () => {
    const vnodePtr = h('div', 'I am a string');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode for comment', () => {
    const vnodePtr = h('!', 'test');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with props and text content in string', () => {
    const vnodePtr = h('div', {
      foo: 'bar',
    }, 'I am a string');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with props and children', () => {
    const vnodePtr = h('div', {
      foo: 'bar',
    }, [h('span'), h('i')]);
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with text', () => {
    const vnodePtr = h('this is a text', true);
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with attrs', () => {
    const vnodePtr = h('i', {
      'data-empty': '',
      'data-dash': '-',
      'data-dashed': 'foo-bar',
      'data-camel': 'fooBar',
      'data-integer': '0',
      'data-float': '0.1',
    });
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with raw', () => {
    const vnodePtr = h('i', {
      raw: {
        foo: 'bar',
        onclick: () => 7,
      },
    });
    vdom.deleteVNode(vnodePtr);
  });

  it('should throw if invalid arguments are provided', () => {
    expect(() => {
      h('', '', '', '');
    }).toThrow();
    expect(() => {
      h('', () => {});
    }).toThrow();
    expect(() => {
      h('', '', {});
    }).toThrow();
  });
});
