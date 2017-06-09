const cache = {};

export default (config) => {
  if (config === undefined) config = {};

  const readyPromise = new Promise((resolve) => {
    config['_main'] = () => resolve(cache);
  });

  return new Promise(
    resolve => resolve(require('./app.asm.js')),
  )
    .then(lib => lib(config))
    .then((lib) => {
      cache.lib = lib;

      return readyPromise;
    })
    .then(x => x.lib);
};
