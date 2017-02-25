export default function load(config = {}) {
  let result;
  if ('WebAssembly' in window) {
    /* eslint-disable */
    config.wasmBinary = new Uint8Array(require('../compiled/wasm/asm-dom.wasm'));
    result = require('../compiled/wasm/asm-dom.js')(config);
    /* eslint-enable */
  } else {
    // eslint-disable-next-line
    result = require('../compiled/asmjs/asm-dom.asm.js')(config);
  }
  return result;
}
