import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import init from '../../../src/cpp/init';

(() => {
  const config = {};
  const asmDomReady = init();

  return new Promise(
    (resolve) => {
      if ('WebAssembly' in window) {
        import('../compiled/wasm/app.wasm')
                .then((wasm) => {
                  config.wasmBinary = new Uint8Array(wasm);
                })
                .then(() => import('../compiled/wasm/app.js'))
                .then(resolve);
      } else {
        import('../compiled/asmjs/app.asm.js').then(resolve);
      }
    },
  )
    .then(lib => lib(config))
    .then(lib =>
      asmDomReady.then(prepareAsmDom => prepareAsmDom(lib))
                 .then(() => lib.start()),
    );
})();

