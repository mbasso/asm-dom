(function(rootScope) {
	var createGlobalModule = function(factory) {
		if (typeof exports === 'object' && typeof module === 'object')
			module.exports = factory;
		else if (typeof define === 'function' && define['amd'])
			define([], function() { return factory; });
		else if (typeof exports === 'object')
			exports["Module"] = factory;
		else
			rootScope.Module = factory;
	};

	var moduleFactory = function(Module) {
			Module = Module || {};