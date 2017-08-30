import expect from 'expect';
import init from '../../src/js/';

describe('load (js)', function test() {
  this.timeout(30000);

  let root;

  beforeEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
  });

  afterEach(() => {
    delete window.WebAssembly;
  });

  it('should load asm-dom using asm.js (by config)', (done) => {
    init({
      useAsmJS: true,
      hardReload: true,
    }).then((vdom) => {
      expect(vdom.h).toExist();
      expect(vdom.usingWasm).toBeFalsy();
      done();
    });
  });

  it('should load asm-dom using wasm', (done) => {
    window.WebAssembly = {};
    // .wasm file throw a SyntaxError on node
    init({
      hardReload: true,
    }).catch((ex) => {
      expect(ex).toBeA(SyntaxError);
      done();
    });
  });

  it('should load asm-dom using wasm (by config)', (done) => {
    // .wasm file throw a SyntaxError on node
    init({
      useWasm: true,
      hardReload: true,
    }).catch((ex) => {
      expect(ex).toBeA(SyntaxError);
      done();
    });
  });

  it('should automatically clear memory', (done) => {
    init({
      useAsmJS: true,
      hardReload: true,
    }).then((vdom) => {
      expect(vdom.clearMemory).toEqual(true);
      const { h, patch } = vdom;
      const spy = expect.spyOn(vdom, 'deleteVNode');
      const vnode = h('div');
      const vnode1 = h('div');
      const vnode2 = h('div');
      patch(root, vnode);
      patch(vnode, vnode1);
      patch(vnode1, vnode2);
      setTimeout(() => {
        expect(spy.calls.length).toEqual(3);
        expect(spy.calls[1].arguments).toEqual([vnode]);
        expect(spy.calls[2].arguments).toEqual([vnode1]);
        vdom.deleteVNode(vnode1);
        vdom.deleteVNode(vnode2);
        done();
      }, 500);
    });
  });

  it('should automatically clear memory (by config)', (done) => {
    init({
      useAsmJS: true,
      hardReload: true,
      clearMemory: true,
    }).then((vdom) => {
      expect(vdom.clearMemory).toEqual(true);
      const { h, patch } = vdom;
      const spy = expect.spyOn(vdom, 'deleteVNode');
      const vnode = h('div');
      const vnode1 = h('div');
      const vnode2 = h('div');
      patch(root, vnode);
      patch(vnode, vnode1);
      patch(vnode1, vnode2);
      setTimeout(() => {
        expect(spy.calls.length).toEqual(3);
        expect(spy.calls[1].arguments).toEqual([vnode]);
        expect(spy.calls[2].arguments).toEqual([vnode1]);
        vdom.deleteVNode(vnode1);
        vdom.deleteVNode(vnode2);
        done();
      }, 500);
    });
  });

  it('should not automatically clear memory (by config)', (done) => {
    init({
      useAsmJS: true,
      hardReload: true,
      clearMemory: false,
    }).then((vdom) => {
      expect(vdom.clearMemory).toEqual(false);
      const { h, patch } = vdom;
      const spy = expect.spyOn(vdom, 'deleteVNode');
      const vnode = h('div');
      const vnode1 = h('div');
      const vnode2 = h('div');
      patch(root, vnode);
      patch(vnode, vnode1);
      patch(vnode1, vnode2);
      setTimeout(() => {
        expect(spy.calls.length).toEqual(0);
        vdom.deleteVNode(vnode);
        vdom.deleteVNode(vnode1);
        vdom.deleteVNode(vnode2);
        done();
      }, 500);
    });
  });

  it('should use safe patch', () => {
    init({
      useAsmJS: true,
      hardReload: true,
    }).then((vdom) => {
      expect(vdom.unsafePatch).toEqual(false);
      const { h, patch } = vdom;
      const vnode = h('div');
      const vnode1 = h('div');
      const vnode2 = h('div');
      expect(patch(root, vnode)).toEqual(vnode);
      expect(patch(vnode1, vnode2)).toEqual(undefined);
      vdom.deleteVNode(vnode);
      vdom.deleteVNode(vnode2);
    });
  });

  it('should use safe patch (by config)', () => {
    init({
      useAsmJS: true,
      hardReload: true,
      unsafePatch: false,
    }).then((vdom) => {
      expect(vdom.unsafePatch).toEqual(false);
      const { h, patch } = vdom;
      const vnode = h('div');
      const vnode1 = h('div');
      const vnode2 = h('div');
      expect(patch(root, vnode)).toEqual(vnode);
      expect(patch(vnode1, vnode2)).toEqual(undefined);
      vdom.deleteVNode(vnode);
      vdom.deleteVNode(vnode2);
    });
  });

  it('should not use safe patch (by config)', () => {
    init({
      useAsmJS: true,
      hardReload: true,
      unsafePatch: true,
    }).then((vdom) => {
      expect(vdom.unsafePatch).toEqual(true);
      const { h, patch } = vdom;
      const vnode = h('div');
      const vnode1 = h('div');
      const vnode2 = h('div');
      expect(patch(root, vnode)).toEqual(vnode);
      expect(patch(vnode1, vnode2)).toEqual(vnode2);
      vdom.deleteVNode(vnode);
      vdom.deleteVNode(vnode2);
    });
  });
});
