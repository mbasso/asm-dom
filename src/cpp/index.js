import domApi, { nodes } from './domApi';

if (typeof global !== 'undefined' && global.window === undefined) global.window = {};

if (window.asmDomHelpers === undefined) window.asmDomHelpers = {};
window.asmDomHelpers.domApi = domApi;
window.asmDomHelpers.nodes = nodes;
