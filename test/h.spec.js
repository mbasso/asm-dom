import expect from 'expect';
import asmDom from '../src/';

describe('h', function test() {
  this.timeout(5000);

  const vdom = asmDom();
  const { h } = vdom;

  it('should get a vnode', () => {
    const divPtr = h('div', [
      h('span'),
      h('div', [
        h('video'),
      ]),
    ]);
    const div = vdom.getVNode(divPtr);
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
    vdom.deleteVNode(divPtr);
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
    const divPtr = h('div');
    const aPtr = h('a');
    const div = vdom.getVNode(divPtr);
    const a = vdom.getVNode(aPtr);
    expect(div.sel).toEqual('div');
    expect(a.sel).toEqual('a');
    vdom.deleteVNode(divPtr);
    vdom.deleteVNode(aPtr);
  });

  it('should create a vnode with children', () => {
    const vnodePtr = h('div', [h('span#hello'), h('b.world')]);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('div');
    expect(vnode.children[0].sel).toEqual('span#hello');
    expect(vnode.children[1].sel).toEqual('b.world');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with one child', () => {
    const vnodePtr = h('div', h('span#hello'));
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('div');
    expect(vnode.children[0].sel).toEqual('span#hello');
    vdom.deleteVNode(vnodePtr);
  });

  // TODO: should create a vnode with props and one child

  it('should create a vnode with text content', () => {
    const vnodePtr = h('div', ['I am a string']);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.children[0].text).toEqual('I am a string');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with text content in string', () => {
    const vnodePtr = h('div', 'I am a string');
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.text).toEqual('I am a string');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode for comment', () => {
    const vnodePtr = h('!', 'test');
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('!');
    expect(vnode.text).toEqual('test');
    vdom.deleteVNode(vnodePtr);
  });

  // TODO: should create vnode with props and text content in string

  // Others

  it('should create a vnode with a selector', () => {
    const vnodePtr = h('div');
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('div');
    expect(vnode.text).toEqual('');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with text', () => {
    const vnodePtr = h('this is a text', true);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('');
    expect(vnode.text).toEqual('this is a text');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with children', () => {
    const vnodePtr = h('div', [
      h('video'),
      h('span'),
      h('div', [
        h('div'),
      ]),
    ]);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('div');
    expect(vnode.children.length).toEqual(3);
    expect(vnode.children[0].sel).toEqual('video');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create an svg vnode', () => {
    const vnodePtr = h('svg', [
      h('video'),
    ]);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('svg');
    expect(vnode.data.ns).toEqual('http://www.w3.org/2000/svg');
    expect(vnode.children[0].sel).toEqual('video');
    expect(vnode.children[0].data.ns).toEqual('http://www.w3.org/2000/svg');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with a single child', () => {
    const vnodePtr = h('div', h('video'));
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('div');
    expect(vnode.children.length).toEqual(1);
    expect(vnode.children[0].sel).toEqual('video');
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with all params', () => {
    const data = new vdom.VNodeData();
    const children = new vdom.VNodePtrVector();
    const vnodePtr = h('div', 'this is a text', data, children);
    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.sel).toEqual('div');
    expect(vnode.text).toEqual('this is a text');
    expect(vnode.data).toMatch(data);
    expect(vnode.children.length).toEqual(0);
    vdom.deleteVNode(vnodePtr);
  });

  it('should create a vnode with dataset', () => {
    const vnodePtr = h('i', {
      dataset: {
        empty: '',
        dash: '-',
        dashed: 'foo-bar',
        camel: 'fooBar',
        integer: 0,
        float: 0.1,
      },
    });

    const vnode = vdom.getVNode(vnodePtr);
    expect(vnode.data.dataset.get('empty')).toEqual('');
    expect(vnode.data.dataset.get('dash')).toEqual('-');
    expect(vnode.data.dataset.get('dashed')).toEqual('foo-bar');
    expect(vnode.data.dataset.get('camel')).toEqual('fooBar');
    expect(vnode.data.dataset.get('integer')).toEqual('0');
    expect(vnode.data.dataset.get('float')).toEqual('0.1');
    vdom.deleteVNode(vnodePtr);
  });
});
