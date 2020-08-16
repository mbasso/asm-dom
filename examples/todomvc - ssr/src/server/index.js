const config = {};

const instantiate = (Module) => {
  Module(config);
};

if ('WebAssembly' in global) {
  import('../../compiled/server/wasm/app.wasm')
          .then((wasm) => {
            config.wasmBinary = new Uint8Array(wasm);
            return import('../../compiled/server/wasm/app.js');
          })
          .then(instantiate);
} else {
  import('../../compiled/server/asmjs/app.asm.js').then(instantiate);
}
