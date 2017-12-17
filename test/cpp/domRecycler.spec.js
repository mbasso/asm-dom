import expect from 'expect';
import recycler from '../../src/cpp/domRecycler';

describe('dom recycler', () => {
  beforeEach(() => {
    recycler.nodes = {};
  });

  it('should create and recycler texts', () => {
    const node = recycler.createText('Hello World!');
    expect(node.nodeValue).toEqual('Hello World!');
    expect(recycler.nodes['#text']).toEqual(undefined);
    recycler.collect(node);
    expect(recycler.nodes['#text']).toEqual([node]);
    const newNode = recycler.createText('New Hello World!');
    expect(node.nodeValue).toEqual('New Hello World!');
    expect(newNode).toEqual(node);
    expect(recycler.nodes['#text']).toEqual([]);
  });

  it('should create and recycler comments', () => {
    const node = recycler.createComment('Hello World!');
    expect(node.nodeValue).toEqual('Hello World!');
    expect(recycler.nodes['#comment']).toEqual(undefined);
    recycler.collect(node);
    expect(recycler.nodes['#comment']).toEqual([node]);
    const newNode = recycler.createComment('New Hello World!');
    expect(node.nodeValue).toEqual('New Hello World!');
    expect(newNode).toEqual(node);
    expect(recycler.nodes['#comment']).toEqual([]);
  });

  it('should create and normal nodes', () => {
    const node = recycler.create('div');
    expect(node.nodeName).toEqual('DIV');
    expect(recycler.nodes['DIV']).toEqual(undefined);
    recycler.collect(node);
    expect(recycler.nodes['DIV']).toEqual([node]);
    const newNode = recycler.create('div');
    expect(node.nodeName).toEqual('DIV');
    expect(newNode).toEqual(node);
    expect(recycler.nodes['DIV']).toEqual([]);
  });

  it('should create and nodes with namespace', () => {
    const node = recycler.createNS('svg', 'http://www.w3.org/2000/svg');
    expect(node.nodeName).toEqual('SVG');
    expect(recycler.nodes['SVGhttp://www.w3.org/2000/svg']).toEqual(undefined);
    recycler.collect(node);
    expect(recycler.nodes['SVGhttp://www.w3.org/2000/svg']).toEqual([node]);
    const newNode = recycler.createNS('svg', 'http://www.w3.org/2000/svg');
    expect(node.nodeName).toEqual('SVG');
    expect(newNode).toEqual(node);
    expect(recycler.nodes['SVGhttp://www.w3.org/2000/svg']).toEqual([]);
  });

  it('should clean children', () => {
    const div = recycler.create('div');
    const span = recycler.create('span');
    expect(div.children.length).toEqual(0);
    div.appendChild(span);
    expect(div.children.length).toEqual(1);
    recycler.collect(div);
    expect(div.children.length).toEqual(0);
    expect(recycler.nodes['DIV']).toEqual([div]);
    expect(recycler.nodes['SPAN']).toEqual([span]);
  });

  it('should clean attributes', () => {
    const node = recycler.create('a');
    node.setAttribute('href', '/foo');
    expect(node.getAttribute('href')).toEqual('/foo');
    recycler.collect(node);
    expect(node.getAttribute('href')).toEqual(null);
  });

  it('should clean props', () => {
    const node = recycler.create('a');
    node.foo = 'foo';
    expect(node.foo).toEqual('foo');
    recycler.collect(node);
    expect(node.foo).toEqual(undefined);
  });

  it('should preserve asmDom props', () => {
    const node = recycler.create('a');
    node.asmDomFoo = 'foo';
    expect(node.asmDomFoo).toEqual('foo');
    recycler.collect(node);
    expect(node.asmDomFoo).toEqual('foo');
  });

  it('should clean textContent', () => {
    const node = recycler.create('span');
    node.textContent = 'foo';
    expect(node.textContent).toEqual('foo');
    recycler.collect(node);
    expect(node.textContent).toEqual('');
  });

  it('should clean asmDomRaws', () => {
    const node = recycler.create('span');
    const callback = () => {};
    node.onclick = callback;
    node.onkeydown = callback;
    node.asmDomRaws = ['onclick', 'onkeydown'];
    expect(node.onclick).toEqual(callback);
    expect(node.onkeydown).toEqual(callback);
    recycler.collect(node);
    expect(node.onclick).toEqual(undefined);
    expect(node.onkeydown).toEqual(undefined);
    expect(node.asmDomRaws).toEqual(undefined);
  });

  it('should clean asmDomEvents', () => {
    let calls = 0;
    const node = recycler.create('div');
    const callbacks = {
      click: () => { calls++; },
      keydown: () => { calls++; },
    };
    node.addEventListener('click', callbacks.click);
    node.addEventListener('keydown', callbacks.keydown);
    node.asmDomEvents = {
      click: callbacks.click,
      keydown: callbacks.keydown,
    };
    node.click();
    expect(calls).toEqual(1);
    recycler.collect(node);
    expect(node.asmDomEvents).toEqual(undefined);
    node.click();
    expect(calls).toEqual(1);
  });
});
