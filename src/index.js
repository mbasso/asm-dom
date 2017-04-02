import { getHFunction } from './js/h';
import { getPatchFunction } from './js/patch';
import { getGetVNodeFunction } from './js/getVNode';

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
  lib.getVNode = getGetVNodeFunction(lib);

  /* eslint-disable */
  lib.patchElement = lib._patch_element;
  lib.patchVNode = lib._patch_vnode;
  /* eslint-enable */

  return lib;
}
