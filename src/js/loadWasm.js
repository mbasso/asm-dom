export default config => (
  Promise.resolve(require('../../compiled/wasm/asm-dom.wasm'))
      .then((wasm) => {
        config.wasmBinary = new Uint8Array(wasm);
      })
      .then(() => require('../../compiled/wasm/asm-dom.js'))
);
