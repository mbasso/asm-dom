import expect from 'expect';
import asmDom from '../src/';

// eslint-disable-next-line
describe('load', function test() {
  this.timeout(5000);

  afterEach(() => {
    delete window.WebAssembly;
  });

  it('should load asm-dom using asm.js', () => {
    const vdom = asmDom();
    expect(vdom.h).toExist();
    expect(vdom.usingWasm).toBeFalsy();
  });

  it('should load asm-dom using asm.js (by config)', () => {
    const vdom = asmDom({
      useAsmJS: true,
    });
    expect(vdom.h).toExist();
    expect(vdom.usingWasm).toBeFalsy();
  });

  it('should load asm-dom using wasm', () => {
    window.WebAssembly = {};
    // .wasm file throw a SyntaxError on node
    expect(asmDom).toThrow(SyntaxError);
  });

  it('should load asm-dom using wasm (by config)', () => {
    // .wasm file throw a SyntaxError on node
    expect(() => asmDom({
      useWasm: true,
    })).toThrow(SyntaxError);
  });
});
