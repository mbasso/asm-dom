import { getHFunction } from './js/h';

export default function load(config = {}) {
  let lib;
  if ('WebAssembly' in window) {
    /* eslint-disable */
    config.wasmBinary = new Uint8Array(require('../compiled/wasm/asm-dom.wasm'));
    config.memoryInitializerPrefixURL = '';
    lib = require('../compiled/wasm/asm-dom.js')(config);
    /* eslint-enable */
  } else {
    // eslint-disable-next-line
    lib = require('../compiled/asmjs/asm-dom.asm.js')(config);
  }

  lib.h = getHFunction(lib);

  return lib;
}
