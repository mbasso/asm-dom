import h from './h';
import patch from './patch';
import { toHTML, appendProps, insertInnerHTML } from './toHTML';
import diff from './diff';

// import() is compiled to require.ensure, this is a polyfill for nodejs
// an alternative solution is needed
if (
  typeof require !== 'undefined' &&
  typeof require.ensure !== 'function'
) {
  require.ensure = (d, c) => { c(require); };
}

export default (config) => {
  if (config === undefined) config = {};

  config['diff'] = diff.bind(null, config);
  config['appendProps'] = appendProps.bind(null, config);
  config['insertInnerHTML'] = insertInnerHTML.bind(null, config);
  config.h = h.bind(null, config);
  config.patch = patch.bind(null, config);
  config.reset = () => {
    config['currentNode'] = undefined;
    config['vnodesData'] = {};
  };
  config.toHTML = toHTML.bind(null, config);
  config.getNode = vnode => config.nodes[config._getNode(vnode)];
  config.deleteVNode = (oldVnode) => {
    config.vnodesData[oldVnode] = undefined;
    config._deleteVNode(oldVnode);
  };
  config.clearMemory = config.clearMemory === undefined ? true : config.clearMemory;
  config.unsafePatch = config.unsafePatch === undefined ? false : config.unsafePatch;

  let result;
  if (
    (
      config.useWasm === true ||
      (typeof window !== 'undefined' && 'WebAssembly' in window) ||
      (typeof global !== 'undefined' && 'WebAssembly' in global)
    ) &&
    config.useAsmJS !== true
  ) {
    result = import('./loadWasm').then(x => x.default(config));
  } else {
    result = import('../../compiled/asmjs/asm-dom.asm.js');
  }

  return result
    .then(factory =>
      factory(config).then((lib) => {
        lib.reset();
        delete lib.then;
        return lib;
      }),
    );
};
