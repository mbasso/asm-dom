export default onRuntimeInitialized =>
  require('./app.asm.js')({
    'onRuntimeInitialized': onRuntimeInitialized,
  });
