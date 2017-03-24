import expect from 'expect';
import asmDom from '../src/';

describe('h', () => {
  const vdom = asmDom();
  const { h } = vdom;

  it('should get a vnode', () => {
    let div = h('div', [
      h('span'),
      h('div', [
        h('video'),
      ]),
    ]);
    div = vdom.getVNode(div);
    expect(div).toMatch({
      sel: 'div',
      key: '',
      text: '',
      children: [
        {
          sel: 'span',
          key: '',
          text: '',
          children: [],
        },
        {
          sel: 'div',
          key: '',
          text: '',
          children: [
            {
              sel: 'video',
              key: '',
              text: '',
              children: [],
            },
          ],
        },
      ],
    });
  });

  it('should delete a vnode', () => {
    const div = h('div', [
      h('span'),
      h('div', [
        h('video'),
      ]),
    ]);
    expect(
      () => vdom.deleteVNode(div)
    ).toNotThrow();
  });

  it('should create a vnode with proper tag', () => {
    let div = h('div');
    let a = h('a');
    div = vdom.getVNode(div);
    a = vdom.getVNode(a);
    expect(div.sel).toEqual('div');
    expect(a.sel).toEqual('a');
  });

  it('should create a vnode with children', () => {
    let vnode = h('div', [h('span#hello'), h('b.world')]);
    vnode = vdom.getVNode(vnode);
    expect(vnode.sel).toEqual('div');
    expect(vnode.children[0].sel).toEqual('span#hello');
    expect(vnode.children[1].sel).toEqual('b.world');
  });

  it('should create a vnode with one child', () => {
    let vnode = h('div', h('span#hello'));
    vnode = vdom.getVNode(vnode);
    expect(vnode.sel).toEqual('div');
    expect(vnode.children[0].sel).toEqual('span#hello');
  });

  // TODO: should create a vnode with props and one child

  it('should create a vnode with text content', () => {
    let vnode = h('div', ['I am a string']);
    vnode = vdom.getVNode(vnode);
    expect(vnode.children[0].text).toEqual('I am a string');
  });

  it('should create a vnode with text content in string', () => {
    let vnode = h('div', 'I am a string');
    vnode = vdom.getVNode(vnode);
    expect(vnode.text).toEqual('I am a string');
  });

  it('should create a vnode for comment', () => {
    let vnode = h('!', 'test');
    vnode = vdom.getVNode(vnode);
    expect(vnode.sel).toEqual('!');
    expect(vnode.text).toEqual('test');
  });

  // TODO: should create vnode with props and text content in string

  // Others

  it('should create a vnode with a selector', () => {
    let vnode = h('div');
    vnode = vdom.getVNode(vnode);
    expect(vnode.sel).toEqual('div');
    expect(vnode.text).toEqual('');
  });

  it('should create a vnode with text', () => {
    let vnode = h('this is a text', true);
    vnode = vdom.getVNode(vnode);
    expect(vnode.sel).toEqual('');
    expect(vnode.text).toEqual('this is a text');
  });

  it('should create a vnode with children', () => {
    let vnode = h('div', [
      h('video'),
      h('span'),
      h('div', [
        h('div'),
      ]),
    ]);
    vnode = vdom.getVNode(vnode);
    expect(vnode.sel).toEqual('div');
    expect(vnode.children.length).toEqual(3);
    expect(vnode.children[0].sel).toEqual('video');
  });

  it('should create an svg vnode', () => {
    let vnode = h('svg', [
      h('video'),
    ]);
    vnode = vdom.getVNode(vnode);
    expect(vnode.sel).toEqual('svg');
    expect(vnode.data.ns).toEqual('http://www.w3.org/2000/svg');
    expect(vnode.children[0].sel).toEqual('video');
    expect(vnode.children[0].data.ns).toEqual('http://www.w3.org/2000/svg');
  });

  it('should create a vnode with a single child', () => {
    let vnode = h('div', h('video'));
    vnode = vdom.getVNode(vnode);
    expect(vnode.sel).toEqual('div');
    expect(vnode.children.length).toEqual(1);
    expect(vnode.children[0].sel).toEqual('video');
  });

  it('should create a vnode with all params', () => {
    const data = new vdom.VNodeData();
    const children = new vdom.VNodePtrVector();
    let vnode = h('div', 'this is a text', data, children);
    vnode = vdom.getVNode(vnode);
    expect(vnode.sel).toEqual('div');
    expect(vnode.text).toEqual('this is a text');
    expect(vnode.data).toMatch(data);
    expect(vnode.children.length).toEqual(0);
  });
});
