// eslint-disable-next-line
import preval from 'babel-plugin-preval/macro';

export default (config) => {
  const base64 = preval`
    var fs = require('fs');
    module.exports = fs.readFileSync(__dirname + '/../../compiled/wasm/asm-dom.wasm', 'base64');
  `;
  const binary = new Buffer(base64, 'base64').toString('binary');
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; ++i) {
    bytes[i] = binary.charCodeAt(i);
  }
  config.wasmBinary = new Uint8Array(bytes.buffer);
  return Promise.resolve(require('../../compiled/wasm/asm-dom.js'));
};
