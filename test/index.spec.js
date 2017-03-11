import expect from 'expect';
import asmDom from '../src/';

describe('load', () => {
  it('should load asm-dom using asm.js', () => {
    const vdom = asmDom();
    expect(vdom.h).toExist();
    expect(vdom.usingWasm).toBeFalsy();
  });

  it('should load asm-dom using wasm', () => {
    window.WebAssembly = {};
    expect(asmDom).toThrow(SyntaxError);
  });
});
