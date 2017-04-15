import h from './js/h';
import patch from './js/patch';
import diff from './js/diff';
import domApi from './js/domApi';

export default (config) => {
  config = config || {};
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

  window['asmDom'] = lib;

  lib.h = h;
  lib.patch = patch;
  lib.deleteVNode = (oldVnode) => {
    window.asmDomHelpers.vnodesData[oldVnode] = undefined;
    lib._deleteVNode(oldVnode);
  };

  /* eslint-disable */
  window['asmDomHelpers'] = {
    'domApi': domApi,
    'vnodesData': {},
    'diff': diff,
  };
  /* eslint-enable */

  return lib;
};
