import h from './js/h';
import patch from './js/patch';
import diff from './js/diff';
import domApi, { nodes } from './shared/domApi';

const cache = {};

// import() is compiled to require.ensure, this is a polyfill for nodejs
// an alternative solution is needed
if (typeof require.ensure !== 'function') require.ensure = (d, c) => { c(require); };

export default (config) => {
  if (config === undefined) config = {};

  if (cache.lib !== undefined && config.hardReload !== true) {
    return Promise.resolve(cache.lib);
  }

  if (config.clearMemory === undefined) config.clearMemory = true;
  if (config.unsafePatch === undefined) config.unsafePatch = false;

  let result;
  const readyPromise = new Promise((resolve) => {
    config['_main'] = () => resolve(cache);
  });
  if ((config.useWasm === true || 'WebAssembly' in window) && config.useAsmJS !== true) {
    result = import('./js/loadWasm').then(x => x.default(config));
  } else {
    result = import('../compiled/asmjs/asm-dom.asm.js');
  }

  return result
    .then(lib => lib(config))
    .then((lib) => {
      cache.lib = lib;

      if (window === undefined && global !== undefined) global.window = {};
      window.asmDom = lib;

      lib.h = h;
      lib.patch = patch;
      lib.getNode = vnode => nodes[lib._getNode(vnode)];
      lib.deleteVNode = (oldVnode) => {
        window.asmDomHelpers.vnodesData[oldVnode] = undefined;
        lib._deleteVNode(oldVnode);
      };
      lib.reset = () => {
        window.asmDomHelpers = {
          currentNode: undefined,
          domApi,
          vnodesData: {},
          diff,
        };
      };

      lib.reset();

      return readyPromise;
    })
    .then(x => x.lib);
};
