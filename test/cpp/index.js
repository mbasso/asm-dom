import '../../src/cpp/';

export default onRuntimeInitialized =>
  (
    process.env.SERVER_SIDE === '1'
      ? require('./node/app.asm.js')
      : require('./web/app.asm.js')
  )({
    'onRuntimeInitialized': onRuntimeInitialized,
  });
