import h from './js/h';
import patch from './js/patch';
import diff from './js/diff';
import domApi, { nodes } from './js/domApi';

const cache = {};

// import() is compiled to require.ensure, this is a polyfill for nodejs
// an alternative solution is needed
if (typeof require.ensure !== 'function') require.ensure = (d, c) => { c(require); };

export default (config) => {
  config = config || {};
  if (config.clearMemory === undefined) config.clearMemory = true;

  if (cache.lib && !config.hardReload) {
    return Promise.resolve(cache.lib);
  }

  config = config || {};
  let result;
  const readyPromise = new Promise((resolve) => {
    config['_main'] = () => resolve(cache);
  });
  if ((config.useWasm || 'WebAssembly' in window) && !config.useAsmJS) {
    result = import('./js/loadWasm').then(x => x.default(config));
  } else {
    result = import('../compiled/asmjs/asm-dom.asm.js');
  }

  return result
    .then(lib => lib(config))
    .then((lib) => {
      cache.lib = lib;

      if (!window && global) global.window = {};
      window.asmDom = lib;
      window.asmDomHelpers = {
        vnodeToClear: undefined,
        domApi,
        vnodesData: {},
        diff,
      };

      lib.h = h;
      lib.patch = patch;
      lib.getNode = vnode => nodes[lib._getNode(vnode)];
      lib.deleteVNode = (oldVnode) => {
        window.asmDomHelpers.vnodesData[oldVnode] = undefined;
        lib._deleteVNode(oldVnode);
      };

      return readyPromise;
    })
    .then(x => x.lib);
};
