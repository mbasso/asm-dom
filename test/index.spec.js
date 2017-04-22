import expect from 'expect';
import init from '../src/';

describe('load', function test() {
  this.timeout(10000);

  afterEach(() => {
    delete window.WebAssembly;
  });

  it('should load asm-dom using asm.js', (done) => {
    init().then((vdom) => {
      expect(vdom.h).toExist();
      expect(vdom.usingWasm).toBeFalsy();
      done();
    });
  });

  it('should load asm-dom using asm.js (by config)', (done) => {
    init({
      useAsmJS: true,
    }).then((vdom) => {
      expect(vdom.h).toExist();
      expect(vdom.usingWasm).toBeFalsy();
      done();
    });
  });

  it('should load asm-dom using wasm', (done) => {
    window.WebAssembly = {};
    // .wasm file throw a SyntaxError on node
    init().catch((ex) => {
      expect(ex).toBeA(SyntaxError);
      done();
    });
  });

  it('should load asm-dom using wasm (by config)', (done) => {
    // .wasm file throw a SyntaxError on node
    init({
      useWasm: true,
    }).catch((ex) => {
      expect(ex).toBeA(SyntaxError);
      done();
    });
  });
});
