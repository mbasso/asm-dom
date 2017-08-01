import domApi, { nodes } from '../shared/domApi';

if (window === undefined && global !== undefined) global.window = {};

if (window.asmDomHelpers === undefined) window.asmDomHelpers = {};
window.asmDomHelpers.domApi = domApi;
window.asmDomHelpers.nodes = nodes;
