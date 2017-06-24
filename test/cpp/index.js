import init from '../../src/cpp/init';

export default (config) => {
  if (config === undefined) config = {};

  const asmDomReady = init();

  return new Promise(
    resolve => resolve(require('./app.asm.js')),
  )
    .then(lib => lib(config))
    .then(lib =>
      asmDomReady.then(prepareAsmDom => prepareAsmDom(lib))
                 .then(() => lib),
    );
};
