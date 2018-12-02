		Module.then = function(cb) {
			if(Module.calledRun)
				cb(Module);
			else {
				var b = Module.onRuntimeInitialized;
				Module.onRuntimeInitialized = function(){
					b && b();
					cb(Module);
				};
			}
			return Module;
		};

		createGlobalModule(moduleFactory);
		return Module;
	};

	createGlobalModule(moduleFactory);
})(this);