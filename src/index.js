import { getHFunction } from './js/h';
import { getPatchFunction } from './js/patch';
import { getGetVNodeFunction } from './js/getVNode';
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
  lib.getVNode = getGetVNodeFunction(lib);

  lib.patchElement = lib._patch_element;
  lib.patchVNode = lib._patch_vnode;
  lib.patch = getPatchFunction(lib);

  let api;
  switch (typeof config.domApi) {
    case 'function':
      api = config.domApi(lib);
      break;
    case 'object':
      api = config.domApi;
      break;
    default:
      api = domApi;
      break;
  }

  const asmDomHelpers = {
    'Pointer_stringify': lib.Pointer_stringify,
    'domApi': api,
  };
  /* eslint-disable */
  if (window) window['asmDomHelpers'] = asmDomHelpers;
  if (global) {
    if (!global.window) global.window = {};
    global.window['asmDomHelpers'] = asmDomHelpers;
  }
  /* eslint-enable */

  return lib;
}
