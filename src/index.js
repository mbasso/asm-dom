export default function load(config = {}) {
  let result;
  if ('WebAssembly' in window) {
    /* eslint-disable */
    config.wasmBinary = new Uint8Array(require('../compiled/wasm/asm-dom.wasm'));
    result = require('../compiled/wasm/asm-dom.js')(config);
    /* eslint-enable */
  } else {
    // eslint-disable-next-line
    result = require('../compiled/asmjs/asm-dom.asm.js')(config);
  }

  // improve APIs (due to bindings problems)

  // automatically inject children length in functions like:
  // static struct VNode* h(const char* sel, struct VNode** children, int childrenNum);
  result.h = (...params) => {
    const newParams = [...params];
    if (Array.isArray(params[params.length - 1])) {
      newParams.push(params.length);
    }
    return result.H.prototype.h.apply(result.H.prototype, newParams);
  };

  return result;
}
