import { getHFunction } from './js/h';
import { getPatchFunction } from './js/patch';
import diff from './js/diff';
import domApi from './js/domApi';

export default function load(config = {}) {
  let lib;
  if ((config.useWasm || 'WebAssembly' in window) && !config.useAsmJS) {
    /* eslint-disable */
    config.memoryInitializerPrefixURL = '';
    config.wasmBinary = new Uint8Array(require('../compiled/wasm/asm-dom.wasm'));
    lib = require('../compiled/wasm/asm-dom.js')(config);
    /* eslint-enable */
  } else {
    // eslint-disable-next-line
    lib = require('../compiled/asmjs/asm-dom.asm.js')(config);
  }

  lib.h = getHFunction(lib);
  lib.patch = getPatchFunction(lib);

  /* eslint-disable */
  window['asmDomHelpers'] = {
    'Pointer_stringify': lib.Pointer_stringify,
    'domApi': domApi,
    'vnodesData': {},
    'diff': diff,
  };
  /* eslint-enable */

  return lib;
}
