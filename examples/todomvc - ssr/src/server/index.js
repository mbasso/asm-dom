import '../../../../src/cpp/';

const config = {};

new Promise(
  (resolve) => {
    if ('WebAssembly' in global) {
      import('../../compiled/server/wasm/app.wasm')
              .then((wasm) => {
                config.wasmBinary = new Uint8Array(wasm);
                return import('../../compiled/server/wasm/app.js');
              })
              .then(resolve);
    } else {
      import('../../compiled/server/asmjs/app.asm.js').then(resolve);
    }
  },
)
.then(Module => Module(config));
