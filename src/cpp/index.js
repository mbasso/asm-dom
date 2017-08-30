import domApi, { nodes } from './domApi';

if (window === undefined && global !== undefined) global.window = {};

if (window.asmDomHelpers === undefined) window.asmDomHelpers = {};
window.asmDomHelpers.domApi = domApi;
window.asmDomHelpers.nodes = nodes;
