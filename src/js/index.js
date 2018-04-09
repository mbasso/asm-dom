import h from './h';
import patch from './patch';
import { toHTML, appendProps, insertInnerHTML } from './toHTML';
import diff, { eventProxy } from './diff';
import domApi, { nodes } from '../cpp/domApi';

const cache = {};

// import() is compiled to require.ensure, this is a polyfill for nodejs
// an alternative solution is needed
if (typeof require.ensure !== 'function') require.ensure = (d, c) => { c(require); };
if (typeof global !== 'undefined' && global.window === undefined) global.window = {};

export default (config) => {
  if (config === undefined) config = {};

  if (cache.lib !== undefined && config.hardReload !== true) {
    return Promise.resolve(cache.lib);
  }

  if (config.clearMemory === undefined) config.clearMemory = true;
  if (config.unsafePatch === undefined) config.unsafePatch = false;

  let result;
  const readyPromise = new Promise((resolve) => {
    config['onRuntimeInitialized'] = () => resolve(cache);
  });
  if (
    (
      config.useWasm === true || 'WebAssembly' in window ||
      (typeof global !== 'undefined' && 'WebAssembly' in global)
    ) &&
    config.useAsmJS !== true
  ) {
    result = import('./loadWasm').then(x => x.default(config));
  } else {
    result = import('../../compiled/asmjs/asm-dom.asm.js');
  }

  return result
    .then(lib => lib(config))
    .then((lib) => {
      cache.lib = lib;

      window.asmDom = lib;

      lib.h = h;
      lib.patch = patch;
      lib.toHTML = toHTML;
      lib.getNode = vnode => nodes[lib._getNode(vnode)];
      lib.deleteVNode = (oldVnode) => {
        window.asmDomHelpers.vnodesData[oldVnode] = undefined;
        lib._deleteVNode(oldVnode);
      };
      lib.reset = () => {
        window.asmDomHelpers = {
          currentNode: undefined,
          domApi,
          'vnodesData': {},
          diff,
          eventProxy,
          appendProps,
          insertInnerHTML,
          nodes,
        };
      };

      lib.reset();

      return readyPromise;
    })
    .then(x => x.lib);
};
