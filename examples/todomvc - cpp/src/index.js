import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import '../../../src/cpp/';

(() => {
  const config = {};

  new Promise(
    (resolve) => {
      if ('WebAssembly' in window) {
        import('../compiled/wasm/app.wasm')
                .then((wasm) => {
                  config.wasmBinary = new Uint8Array(wasm);
                  return import('../compiled/wasm/app.js');
                })
                .then(resolve);
      } else {
        import('../compiled/asmjs/app.asm.js').then(resolve);
      }
    },
  )
    .then(Module => Module(config));
})();

