import domApi, { nodes } from '../shared/domApi';

export default function init() {
  return new Promise((resolve) => {
    if (window === undefined && global !== undefined) global.window = {};

    if (window.asmDomHelpers === undefined) window.asmDomHelpers = {};
    window.asmDomHelpers.domApi = domApi;
    window.asmDomHelpers.nodes = nodes;

    window.asmDomReady = () => resolve((app) => {
      window.asmDom = { 'Pointer_stringify': app.Pointer_stringify };
      window.asmDomHelpers.functionCallback = (vnode, callback) =>
        event => app.functionCallback(vnode, callback, event);
      return Promise.resolve(app);
    });
  });
}
