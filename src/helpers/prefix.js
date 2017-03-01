(function (root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["default"] = factory();
	else
		root["default"] = factory();
})(this, function() {
  return function(Module) {
