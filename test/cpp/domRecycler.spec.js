import expect from 'expect';
import setup from '../setup';
import init from './';

describe('dom recycler', function testDomRecycler() {
  this.timeout(30000);

  let recycler;
  let Module;

  before((done) => {
    setup();
    init().then((res) => {
      Module = res;
      recycler = res.recycler;
      done();
    });
  });

  beforeEach(() => {
    recycler.nodes = {};
  });

  it('should create and recycler texts', () => {
    const node = recycler.createText('Hello World!');
    expect(node.nodeValue).toEqual('Hello World!');
    expect(recycler.nodes['#TEXT']).toEqual(undefined);
    recycler.collect(node);
    expect(recycler.nodes['#TEXT']).toEqual([node]);
    const newNode = recycler.createText('New Hello World!');
    expect(node.nodeValue).toEqual('New Hello World!');
    expect(newNode).toEqual(node);
    expect(recycler.nodes['#TEXT']).toEqual([]);
  });

  it('should create and recycler comments', () => {
    const node = recycler.createComment('Hello World!');
    expect(node.nodeValue).toEqual('Hello World!');
    expect(recycler.nodes['#COMMENT']).toEqual(undefined);
    recycler.collect(node);
    expect(recycler.nodes['#COMMENT']).toEqual([node]);
    const newNode = recycler.createComment('New Hello World!');
    expect(node.nodeValue).toEqual('New Hello World!');
    expect(newNode).toEqual(node);
    expect(recycler.nodes['#COMMENT']).toEqual([]);
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
    expect(node.nodeName).toEqual('svg');
    expect(recycler.nodes['SVGhttp://www.w3.org/2000/svg']).toEqual(undefined);
    recycler.collect(node);
    expect(recycler.nodes['SVGhttp://www.w3.org/2000/svg']).toEqual([node]);
    const newNode = recycler.createNS('svg', 'http://www.w3.org/2000/svg');
    expect(node.nodeName).toEqual('svg');
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
    node.asmDomRaws = {
      onclick: true,
      onkeydown: true,
    };
    expect(node.onclick).toEqual(callback);
    expect(node.onkeydown).toEqual(callback);
    recycler.collect(node);
    expect(node.onclick).toEqual(undefined);
    expect(node.onkeydown).toEqual(undefined);
    expect(node.asmDomRaws).toEqual(undefined);
  });

  it('should clean asmDomEvents', () => {
    let calls = 0;

    const oldEventProxy = Module.eventProxy;
    Module.eventProxy = () => {
      calls++;
    };

    const node = recycler.create('div');
    node.addEventListener('click', Module.eventProxy);
    node.addEventListener('keydown', Module.eventProxy);
    node.asmDomEvents = {
      click: true,
      keydown: true,
    };
    node.click();
    expect(calls).toEqual(1);
    recycler.collect(node);
    expect(node.asmDomEvents).toEqual(undefined);
    node.click();
    expect(calls).toEqual(1);

    Module.eventProxy = oldEventProxy;
  });
});
