export default function load(config = {}) {
  let lib;
  if ('WebAssembly' in window) {
    /* eslint-disable */
    config.wasmBinary = new Uint8Array(require('../compiled/wasm/asm-dom.wasm'));
    config.memoryInitializerPrefixURL = '';
    lib = require('../compiled/wasm/asm-dom.js')(config);
    /* eslint-enable */
  } else {
    // eslint-disable-next-line
    lib = require('../compiled/asmjs/asm-dom.asm.js')(config);
  }

  lib.h = (a, b, c) => {
    let sel = a;
    let text = '';
    let data;
    const children = new lib.VNodeVector();

    if (b === true) {
      sel = '';
      text = a;
    } else if (Array.isArray(b)) {
      b.forEach(x => children.push_back(x));
    } else if (typeof b === 'string') {
      text = b;
    } else if (typeof b === 'number') {
      children.push_back(b);
    } else {
      data = b;
      if (typeof c === 'string') {
        text = c;
      } else if (typeof c === 'number') {
        children.push_back(c);
      } else if (Array.isArray(c)) {
        c.forEach(x => children.push_back(x));
      }
    }

    if (!data) {
      data = new lib.VNodeData();
    }

    // eslint-disable-next-line
    return lib._h(sel, text, data, children);
  };

  return lib;
}
