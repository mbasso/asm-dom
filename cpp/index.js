'use strict';

var _domApi = require('./domApi');

var _domApi2 = _interopRequireDefault(_domApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

if (window === undefined && global !== undefined) global.window = {};

if (window.asmDomHelpers === undefined) window.asmDomHelpers = {};
window.asmDomHelpers.domApi = _domApi2['default'];
window.asmDomHelpers.nodes = _domApi.nodes;