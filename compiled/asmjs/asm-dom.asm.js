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
// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = (typeof Module !== 'undefined' ? Module : null) || {};

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

if (Module['ENVIRONMENT']) {
  if (Module['ENVIRONMENT'] === 'WEB') {
    ENVIRONMENT_IS_WEB = true;
  } else if (Module['ENVIRONMENT'] === 'WORKER') {
    ENVIRONMENT_IS_WORKER = true;
  } else if (Module['ENVIRONMENT'] === 'NODE') {
    ENVIRONMENT_IS_NODE = true;
  } else if (Module['ENVIRONMENT'] === 'SHELL') {
    ENVIRONMENT_IS_SHELL = true;
  } else {
    throw new Error('The provided Module[\'ENVIRONMENT\'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.');
  }
} else {
  ENVIRONMENT_IS_WEB = typeof window === 'object';
  ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
  ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
}


if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  if (!Module['print']) Module['print'] = console.log;
  if (!Module['printErr']) Module['printErr'] = console.warn;

  var nodeFS;
  var nodePath;

  Module['read'] = function read(filename, binary) {
    if (!nodeFS) nodeFS = require('fs');
    if (!nodePath) nodePath = require('path');
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    return binary ? ret : ret.toString();
  };

  Module['readBinary'] = function readBinary(filename) {
    var ret = Module['read'](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  Module['load'] = function load(f) {
    globalEval(read(f));
  };

  if (!Module['thisProgram']) {
    if (process['argv'].length > 1) {
      Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
    } else {
      Module['thisProgram'] = 'unknown-program';
    }
  }

  Module['arguments'] = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  Module['inspect'] = function () { return '[Emscripten Module object]'; };
}
else if (ENVIRONMENT_IS_SHELL) {
  if (!Module['print']) Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm

  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function read() { throw 'no read() available' };
  }

  Module['readBinary'] = function readBinary(f) {
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    var data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };

  Module['readAsync'] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
      } else {
        onerror();
      }
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof console !== 'undefined') {
    if (!Module['print']) Module['print'] = function print(x) {
      console.log(x);
    };
    if (!Module['printErr']) Module['printErr'] = function printErr(x) {
      console.warn(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }

  if (ENVIRONMENT_IS_WORKER) {
    Module['load'] = importScripts;
  }

  if (typeof Module['setWindowTitle'] === 'undefined') {
    Module['setWindowTitle'] = function(title) { document.title = title };
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}

function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
if (!Module['thisProgram']) {
  Module['thisProgram'] = './this.program';
}

// *** Environment setup code ***

// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];

// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];

// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = undefined;



// {{PREAMBLE_ADDITIONS}}

// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

//========================================
// Runtime code shared with compiler
//========================================

var Runtime = {
  setTempRet0: function (value) {
    tempRet0 = value;
  },
  getTempRet0: function () {
    return tempRet0;
  },
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  STACK_ALIGN: 16,
  prepVararg: function (ptr, type) {
    if (type === 'double' || type === 'i64') {
      // move so the load is aligned
      if (ptr & 7) {
        assert((ptr & 7) === 4);
        ptr += 4;
      }
    } else {
      assert((ptr & 3) === 0);
    }
    return ptr;
  },
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      assert(args.length == sig.length-1);
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
    } else {
      assert(sig.length == 1);
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return Module['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[sig]) {
      Runtime.funcWrappers[sig] = {};
    }
    var sigCache = Runtime.funcWrappers[sig];
    if (!sigCache[func]) {
      // optimize away arguments usage in common cases
      if (sig.length === 1) {
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func);
        };
      } else if (sig.length === 2) {
        sigCache[func] = function dynCall_wrapper(arg) {
          return Runtime.dynCall(sig, func, [arg]);
        };
      } else {
        // general case
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func, Array.prototype.slice.call(arguments));
        };
      }
    }
    return sigCache[func];
  },
  getCompilerSetting: function (name) {
    throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+15)&-16);(assert((((STACKTOP|0) < (STACK_MAX|0))|0))|0); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + (assert(!staticSealed),size))|0;STATICTOP = (((STATICTOP)+15)&-16); return ret; },
  dynamicAlloc: function (size) { assert(DYNAMICTOP_PTR);var ret = HEAP32[DYNAMICTOP_PTR>>2];var end = (((ret + size + 15)|0) & -16);HEAP32[DYNAMICTOP_PTR>>2] = end;if (end >= TOTAL_MEMORY) {var success = enlargeMemory();if (!success) {HEAP32[DYNAMICTOP_PTR>>2] = ret;return 0;}}return ret;},
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 16))*(quantum ? quantum : 16); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}



Module["Runtime"] = Runtime;



//========================================
// Runtime essentials
//========================================

var ABORT = 0; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;

function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  if (!func) {
    try { func = eval('_' + ident); } catch(e) {}
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}

var cwrap, ccall;
(function(){
  var JSfuncs = {
    // Helpers for cwrap -- it can't refer to Runtime directly because it might
    // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
    // out what the minified function name is.
    'stackSave': function() {
      Runtime.stackSave()
    },
    'stackRestore': function() {
      Runtime.stackRestore()
    },
    // type conversion from js to c
    'arrayToC' : function(arr) {
      var ret = Runtime.stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
    'stringToC' : function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = Runtime.stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    }
  };
  // For fast lookup of conversion functions
  var toC = {'string' : JSfuncs['stringToC'], 'array' : JSfuncs['arrayToC']};

  // C calling interface.
  ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    assert(returnType !== 'array', 'Return type should not be "array".');
    if (args) {
      for (var i = 0; i < args.length; i++) {
        var converter = toC[argTypes[i]];
        if (converter) {
          if (stack === 0) stack = Runtime.stackSave();
          cArgs[i] = converter(args[i]);
        } else {
          cArgs[i] = args[i];
        }
      }
    }
    var ret = func.apply(null, cArgs);
    if ((!opts || !opts.async) && typeof EmterpreterAsync === 'object') {
      assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling ccall');
    }
    if (opts && opts.async) assert(!returnType, 'async ccalls cannot return values');
    if (returnType === 'string') ret = Pointer_stringify(ret);
    if (stack !== 0) {
      if (opts && opts.async) {
        EmterpreterAsync.asyncFinalizers.push(function() {
          Runtime.stackRestore(stack);
        });
        return;
      }
      Runtime.stackRestore(stack);
    }
    return ret;
  }

  var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
  function parseJSFunc(jsfunc) {
    // Match the body and the return value of a javascript function source
    var parsed = jsfunc.toString().match(sourceRegex).slice(1);
    return {arguments : parsed[0], body : parsed[1], returnValue: parsed[2]}
  }

  // sources of useful functions. we create this lazily as it can trigger a source decompression on this entire file
  var JSsource = null;
  function ensureJSsource() {
    if (!JSsource) {
      JSsource = {};
      for (var fun in JSfuncs) {
        if (JSfuncs.hasOwnProperty(fun)) {
          // Elements of toCsource are arrays of three items:
          // the code, and the return value
          JSsource[fun] = parseJSFunc(JSfuncs[fun]);
        }
      }
    }
  }

  cwrap = function cwrap(ident, returnType, argTypes) {
    argTypes = argTypes || [];
    var cfunc = getCFunc(ident);
    // When the function takes numbers and returns a number, we can just return
    // the original function
    var numericArgs = argTypes.every(function(type){ return type === 'number'});
    var numericRet = (returnType !== 'string');
    if ( numericRet && numericArgs) {
      return cfunc;
    }
    // Creation of the arguments list (["$1","$2",...,"$nargs"])
    var argNames = argTypes.map(function(x,i){return '$'+i});
    var funcstr = "(function(" + argNames.join(',') + ") {";
    var nargs = argTypes.length;
    if (!numericArgs) {
      // Generate the code needed to convert the arguments from javascript
      // values to pointers
      ensureJSsource();
      funcstr += 'var stack = ' + JSsource['stackSave'].body + ';';
      for (var i = 0; i < nargs; i++) {
        var arg = argNames[i], type = argTypes[i];
        if (type === 'number') continue;
        var convertCode = JSsource[type + 'ToC']; // [code, return]
        funcstr += 'var ' + convertCode.arguments + ' = ' + arg + ';';
        funcstr += convertCode.body + ';';
        funcstr += arg + '=(' + convertCode.returnValue + ');';
      }
    }

    // When the code is compressed, the name of cfunc is not literally 'cfunc' anymore
    var cfuncname = parseJSFunc(function(){return cfunc}).returnValue;
    // Call the function
    funcstr += 'var ret = ' + cfuncname + '(' + argNames.join(',') + ');';
    if (!numericRet) { // Return type can only by 'string' or 'number'
      // Convert the result to a string
      var strgfy = parseJSFunc(function(){return Pointer_stringify}).returnValue;
      funcstr += 'ret = ' + strgfy + '(ret);';
    }
    funcstr += "if (typeof EmterpreterAsync === 'object') { assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling cwrap') }";
    if (!numericArgs) {
      // If we had a stack, restore it
      ensureJSsource();
      funcstr += JSsource['stackRestore'].body.replace('()', '(stack)') + ';';
    }
    funcstr += 'return ret})';
    return eval(funcstr);
  };
})();
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;

function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}
Module["setValue"] = setValue;


function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
Module["getValue"] = getValue;

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
Module["ALLOC_STACK"] = ALLOC_STACK;
Module["ALLOC_STATIC"] = ALLOC_STATIC;
Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;
Module["ALLOC_NONE"] = ALLOC_NONE;

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [typeof _malloc === 'function' ? _malloc : Runtime.staticAlloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}
Module["allocate"] = allocate;

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!staticSealed) return Runtime.staticAlloc(size);
  if (!runtimeInitialized) return Runtime.dynamicAlloc(size);
  return _malloc(size);
}
Module["getMemory"] = getMemory;

function Pointer_stringify(ptr, /* optional */ length) {
  if (length === 0 || !ptr) return '';
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = 0;
  var t;
  var i = 0;
  while (1) {
    assert(ptr + i < TOTAL_MEMORY);
    t = HEAPU8[(((ptr)+(i))>>0)];
    hasUtf |= t;
    if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (hasUtf < 128) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  return Module['UTF8ToString'](ptr);
}
Module["Pointer_stringify"] = Pointer_stringify;

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAP8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}
Module["AsciiToString"] = AsciiToString;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}
Module["stringToAscii"] = stringToAscii;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
function UTF8ArrayToString(u8Array, idx) {
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  while (u8Array[endPtr]) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var u0, u1, u2, u3, u4, u5;

    var str = '';
    while (1) {
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      u0 = u8Array[idx++];
      if (!u0) return str;
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u3 = u8Array[idx++] & 63;
        if ((u0 & 0xF8) == 0xF0) {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
        } else {
          u4 = u8Array[idx++] & 63;
          if ((u0 & 0xFC) == 0xF8) {
            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
          } else {
            u5 = u8Array[idx++] & 63;
            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
          }
        }
      }
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
}
Module["UTF8ArrayToString"] = UTF8ArrayToString;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function UTF8ToString(ptr) {
  return UTF8ArrayToString(HEAPU8,ptr);
}
Module["UTF8ToString"] = UTF8ToString;

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x1FFFFF) {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x3FFFFFF) {
      if (outIdx + 4 >= endIdx) break;
      outU8Array[outIdx++] = 0xF8 | (u >> 24);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 5 >= endIdx) break;
      outU8Array[outIdx++] = 0xFC | (u >> 30);
      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}
Module["stringToUTF8Array"] = stringToUTF8Array;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}
Module["stringToUTF8"] = stringToUTF8;

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      ++len;
    } else if (u <= 0x7FF) {
      len += 2;
    } else if (u <= 0xFFFF) {
      len += 3;
    } else if (u <= 0x1FFFFF) {
      len += 4;
    } else if (u <= 0x3FFFFFF) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
}
Module["lengthBytesUTF8"] = lengthBytesUTF8;

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}


function UTF32ToString(ptr) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}


function demangle(func) {
  var __cxa_demangle_func = Module['___cxa_demangle'] || Module['__cxa_demangle'];
  if (__cxa_demangle_func) {
    try {
      var s =
        func.substr(1);
      var len = lengthBytesUTF8(s)+1;
      var buf = _malloc(len);
      stringToUTF8(s, buf, len);
      var status = _malloc(4);
      var ret = __cxa_demangle_func(buf, 0, 0, status);
      if (getValue(status, 'i32') === 0 && ret) {
        return Pointer_stringify(ret);
      }
      // otherwise, libcxxabi failed
    } catch(e) {
      // ignore problems here
    } finally {
      if (buf) _free(buf);
      if (status) _free(status);
      if (ret) _free(ret);
    }
    // failure when using libcxxabi, don't demangle
    return func;
  }
  Runtime.warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
  return func;
}

function demangleAll(text) {
  var regex =
    /__Z[\w\d_]+/g;
  return text.replace(regex,
    function(x) {
      var y = demangle(x);
      return x === y ? x : (x + ' [' + y + ']');
    });
}

function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
    // so try that as a special-case.
    try {
      throw new Error(0);
    } catch(e) {
      err = e;
    }
    if (!err.stack) {
      return '(no stack trace available)';
    }
  }
  return err.stack.toString();
}

function stackTrace() {
  var js = jsStackTrace();
  if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
  return demangleAll(js);
}
Module["stackTrace"] = stackTrace;

// Memory management

var PAGE_SIZE = 4096;

function alignMemoryPage(x) {
  if (x % 4096 > 0) {
    x += (4096 - (x % 4096));
  }
  return x;
}

var HEAP;
var buffer;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBuffer(buf) {
  Module['buffer'] = buffer = buf;
}

function updateGlobalBufferViews() {
  Module['HEAP8'] = HEAP8 = new Int8Array(buffer);
  Module['HEAP16'] = HEAP16 = new Int16Array(buffer);
  Module['HEAP32'] = HEAP32 = new Int32Array(buffer);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
}

var STATIC_BASE, STATICTOP, staticSealed; // static area
var STACK_BASE, STACKTOP, STACK_MAX; // stack area
var DYNAMIC_BASE, DYNAMICTOP_PTR; // dynamic area handled by sbrk

  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false;


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  HEAPU32[(STACK_MAX >> 2)-1] = 0x02135467;
  HEAPU32[(STACK_MAX >> 2)-2] = 0x89BACDFE;
}

function checkStackCookie() {
  if (HEAPU32[(STACK_MAX >> 2)-1] != 0x02135467 || HEAPU32[(STACK_MAX >> 2)-2] != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' + HEAPU32[(STACK_MAX >> 2)-2].toString(16) + ' ' + HEAPU32[(STACK_MAX >> 2)-1].toString(16));
  }
  // Also test the global address 0 for integrity. This check is not compatible with SAFE_SPLIT_MEMORY though, since that mode already tests all address 0 accesses on its own.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
}

function abortStackOverflow(allocSize) {
  abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - asm.stackSave() + allocSize) + ' bytes available!');
}

function abortOnCannotGrowMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
}


function enlargeMemory() {
  abortOnCannotGrowMemory();
}


var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;

var WASM_PAGE_SIZE = 64 * 1024;

var totalMemory = WASM_PAGE_SIZE;
while (totalMemory < TOTAL_MEMORY || totalMemory < 2*TOTAL_STACK) {
  if (totalMemory < 16*1024*1024) {
    totalMemory *= 2;
  } else {
    totalMemory += 16*1024*1024;
  }
}
if (totalMemory !== TOTAL_MEMORY) {
  Module.printErr('increasing TOTAL_MEMORY to ' + totalMemory + ' to be compliant with the asm.js spec (and given that TOTAL_STACK=' + TOTAL_STACK + ')');
  TOTAL_MEMORY = totalMemory;
}

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'JS engine does not provide full typed array support');



// Use a provided buffer, if there is one, or else allocate a new one
if (Module['buffer']) {
  buffer = Module['buffer'];
  assert(buffer.byteLength === TOTAL_MEMORY, 'provided buffer should be ' + TOTAL_MEMORY + ' bytes, but it is ' + buffer.byteLength);
} else {
  // Use a WebAssembly memory where available
  {
    buffer = new ArrayBuffer(TOTAL_MEMORY);
  }
  assert(buffer.byteLength === TOTAL_MEMORY);
}
updateGlobalBufferViews();


function getTotalMemory() {
  return TOTAL_MEMORY;
}

// Endianness check (note: assumes compiler arch was little-endian)
  HEAP32[0] = 0x63736d65; /* 'emsc' */
HEAP16[1] = 0x6373;
if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';

Module['HEAP'] = HEAP;
Module['buffer'] = buffer;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Runtime.dynCall('v', func);
      } else {
        Runtime.dynCall('vi', func, [callback.arg]);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  checkStackCookie();
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  callRuntimeCallbacks(__ATEXIT__);
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module["addOnPreRun"] = addOnPreRun;

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module["addOnInit"] = addOnInit;

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module["addOnPreMain"] = addOnPreMain;

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module["addOnExit"] = addOnExit;

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module["addOnPostRun"] = addOnPostRun;

// Tools


function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}
Module["intArrayFromString"] = intArrayFromString;

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module["intArrayToString"] = intArrayToString;

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
function writeStringToMemory(string, buffer, dontAddNull) {
  Runtime.warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var lastChar, end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}
Module["writeStringToMemory"] = writeStringToMemory;

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}
Module["writeArrayToMemory"] = writeArrayToMemory;

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}
Module["writeAsciiToMemory"] = writeAsciiToMemory;

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}


// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];


if (!Math['clz32']) Math['clz32'] = function(x) {
  x = x >>> 0;
  for (var i = 0; i < 32; i++) {
    if (x & (1 << (31 - i))) return i;
  }
  return 32;
};
Math.clz32 = Math['clz32']

if (!Math['trunc']) Math['trunc'] = function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};
Math.trunc = Math['trunc'];

var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
  return id;
}

function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            Module.printErr('still waiting on run dependencies:');
          }
          Module.printErr('dependency: ' + dep);
        }
        if (shown) {
          Module.printErr('(end of list)');
        }
      }, 10000);
    }
  } else {
    Module.printErr('warning: run dependency added without ID');
  }
}
Module["addRunDependency"] = addRunDependency;

function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    Module.printErr('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module["removeRunDependency"] = removeRunDependency;

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data



var memoryInitializer = null;



var /* show errors on likely calls to FS when it was not included */ FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;


// === Body ===

var ASM_CONSTS = [];




STATIC_BASE = 8;

STATICTOP = STATIC_BASE + 6960;
  /* global initializers */  __ATINIT__.push({ func: function() { __GLOBAL__sub_I_app_cpp() } }, { func: function() { __GLOBAL__sub_I_glue_wrapper_cpp() } }, { func: function() { __GLOBAL__sub_I_bind_cpp() } });
  

/* memory initializer */ allocate([12,3,0,0,44,3,0,0,0,0,0,0,1,0,0,0,32,0,0,0,0,0,0,0,160,2,0,0,107,3,0,0,160,2,0,0,145,3,0,0,160,2,0,0,193,6,0,0,160,2,0,0,224,6,0,0,160,2,0,0,255,6,0,0,160,2,0,0,30,7,0,0,160,2,0,0,61,7,0,0,160,2,0,0,92,7,0,0,160,2,0,0,123,7,0,0,160,2,0,0,154,7,0,0,160,2,0,0,185,7,0,0,160,2,0,0,216,7,0,0,160,2,0,0,247,7,0,0,160,2,0,0,22,8,0,0,12,3,0,0,53,8,0,0,0,0,0,0,1,0,0,0,32,0,0,0,0,0,0,0,12,3,0,0,116,8,0,0,0,0,0,0,1,0,0,0,32,0,0,0,0,0,0,0,160,2,0,0,190,18,0,0,200,2,0,0,30,19,0,0,216,0,0,0,0,0,0,0,200,2,0,0,203,18,0,0,232,0,0,0,0,0,0,0,160,2,0,0,236,18,0,0,200,2,0,0,249,18,0,0,200,0,0,0,0,0,0,0,200,2,0,0,86,20,0,0,216,0,0,0,0,0,0,0,200,2,0,0,50,20,0,0,0,1,0,0,0,0,0,0,200,2,0,0,120,20,0,0,216,0,0,0,0,0,0,0,240,2,0,0,160,20,0,0,240,2,0,0,162,20,0,0,240,2,0,0,164,20,0,0,240,2,0,0,166,20,0,0,240,2,0,0,168,20,0,0,240,2,0,0,170,20,0,0,240,2,0,0,172,20,0,0,240,2,0,0,174,20,0,0,240,2,0,0,176,20,0,0,240,2,0,0,178,20,0,0,240,2,0,0,180,20,0,0,240,2,0,0,182,20,0,0,240,2,0,0,184,20,0,0,200,2,0,0,186,20,0,0,200,0,0,0,0,0,0,0,172,1,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,25,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,3,0,0,0,33,23,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,2,0,0,5,0,0,0,181,18,0,0,0,0,0,0,200,0,0,0,6,0,0,0,7,0,0,0,8,0,0,0,9,0,0,0,10,0,0,0,11,0,0,0,12,0,0,0,13,0,0,0,0,0,0,0,240,0,0,0,6,0,0,0,14,0,0,0,8,0,0,0,9,0,0,0,10,0,0,0,15,0,0,0,16,0,0,0,17,0,0,0,0,0,0,0,32,1,0,0,6,0,0,0,18,0,0,0,8,0,0,0,9,0,0,0,19,0,0,0,0,0,0,0,152,1,0,0,6,0,0,0,20,0,0,0,8,0,0,0,9,0,0,0,10,0,0,0,21,0,0,0,22,0,0,0,23,0,0,0,78,83,116,51,95,95,50,49,50,98,97,115,105,99,95,115,116,114,105,110,103,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,99,69,69,69,69,0,78,83,116,51,95,95,50,50,49,95,95,98,97,115,105,99,95,115,116,114,105,110,103,95,99,111,109,109,111,110,73,76,98,49,69,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,51,118,97,108,69,0,118,111,105,100,0,98,111,111,108,0,99,104,97,114,0,115,105,103,110,101,100,32,99,104,97,114,0,117,110,115,105,103,110,101,100,32,99,104,97,114,0,115,104,111,114,116,0,117,110,115,105,103,110,101,100,32,115,104,111,114,116,0,105,110,116,0,117,110,115,105,103,110,101,100,32,105,110,116,0,108,111,110,103,0,117,110,115,105,103,110,101,100,32,108,111,110,103,0,102,108,111,97,116,0,100,111,117,98,108,101,0,115,116,100,58,58,115,116,114,105,110,103,0,115,116,100,58,58,98,97,115,105,99,95,115,116,114,105,110,103,60,117,110,115,105,103,110,101,100,32,99,104,97,114,62,0,115,116,100,58,58,119,115,116,114,105,110,103,0,101,109,115,99,114,105,112,116,101,110,58,58,118,97,108,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,99,104,97,114,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,115,105,103,110,101,100,32,99,104,97,114,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,110,115,105,103,110,101,100,32,99,104,97,114,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,115,104,111,114,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,110,115,105,103,110,101,100,32,115,104,111,114,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,105,110,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,110,115,105,103,110,101,100,32,105,110,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,108,111,110,103,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,110,115,105,103,110,101,100,32,108,111,110,103,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,105,110,116,56,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,105,110,116,56,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,105,110,116,49,54,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,105,110,116,49,54,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,105,110,116,51,50,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,105,110,116,51,50,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,102,108,111,97,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,100,111,117,98,108,101,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,108,111,110,103,32,100,111,117,98,108,101,62,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,101,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,100,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,102,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,109,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,108,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,106,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,105,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,116,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,115,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,104,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,97,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,99,69,69,0,78,83,116,51,95,95,50,49,50,98,97,115,105,99,95,115,116,114,105,110,103,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,119,69,69,69,69,0,78,83,116,51,95,95,50,49,50,98,97,115,105,99,95,115,116,114,105,110,103,73,104,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,104,69,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,104,69,69,69,69,0,17,0,10,0,17,17,17,0,0,0,0,5,0,0,0,0,0,0,9,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,15,10,17,17,17,3,10,7,0,1,19,9,11,11,0,0,9,6,11,0,0,11,0,6,17,0,0,0,17,17,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,10,10,17,17,17,0,10,0,0,2,0,9,11,0,0,0,9,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,13,0,0,0,0,9,14,0,0,0,0,0,14,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,15,0,0,0,0,9,16,0,0,0,0,0,16,0,0,16,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,10,0,0,0,0,9,11,0,0,0,0,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,45,43,32,32,32,48,88,48,120,0,40,110,117,108,108,41,0,45,48,88,43,48,88,32,48,88,45,48,120,43,48,120,32,48,120,0,105,110,102,0,73,78,70,0,110,97,110,0,78,65,78,0,46,0,84,33,34,25,13,1,2,3,17,75,28,12,16,4,11,29,18,30,39,104,110,111,112,113,98,32,5,6,15,19,20,21,26,8,22,7,40,36,23,24,9,10,14,27,31,37,35,131,130,125,38,42,43,60,61,62,63,67,71,74,77,88,89,90,91,92,93,94,95,96,97,99,100,101,102,103,105,106,107,108,114,115,116,121,122,123,124,0,73,108,108,101,103,97,108,32,98,121,116,101,32,115,101,113,117,101,110,99,101,0,68,111,109,97,105,110,32,101,114,114,111,114,0,82,101,115,117,108,116,32,110,111,116,32,114,101,112,114,101,115,101,110,116,97,98,108,101,0,78,111,116,32,97,32,116,116,121,0,80,101,114,109,105,115,115,105,111,110,32,100,101,110,105,101,100,0,79,112,101,114,97,116,105,111,110,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,78,111,32,115,117,99,104,32,102,105,108,101,32,111,114,32,100,105,114,101,99,116,111,114,121,0,78,111,32,115,117,99,104,32,112,114,111,99,101,115,115,0,70,105,108,101,32,101,120,105,115,116,115,0,86,97,108,117,101,32,116,111,111,32,108,97,114,103,101,32,102,111,114,32,100,97,116,97,32,116,121,112,101,0,78,111,32,115,112,97,99,101,32,108,101,102,116,32,111,110,32,100,101,118,105,99,101,0,79,117,116,32,111,102,32,109,101,109,111,114,121,0,82,101,115,111,117,114,99,101,32,98,117,115,121,0,73,110,116,101,114,114,117,112,116,101,100,32,115,121,115,116,101,109,32,99,97,108,108,0,82,101,115,111,117,114,99,101,32,116,101,109,112,111,114,97,114,105,108,121,32,117,110,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,115,101,101,107,0,67,114,111,115,115,45,100,101,118,105,99,101,32,108,105,110,107,0,82,101,97,100,45,111,110,108,121,32,102,105,108,101,32,115,121,115,116,101,109,0,68,105,114,101,99,116,111,114,121,32,110,111,116,32,101,109,112,116,121,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,112,101,101,114,0,79,112,101,114,97,116,105,111,110,32,116,105,109,101,100,32,111,117,116,0,67,111,110,110,101,99,116,105,111,110,32,114,101,102,117,115,101,100,0,72,111,115,116,32,105,115,32,100,111,119,110,0,72,111,115,116,32,105,115,32,117,110,114,101,97,99,104,97,98,108,101,0,65,100,100,114,101,115,115,32,105,110,32,117,115,101,0,66,114,111,107,101,110,32,112,105,112,101,0,73,47,79,32,101,114,114,111,114,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,32,111,114,32,97,100,100,114,101,115,115,0,66,108,111,99,107,32,100,101,118,105,99,101,32,114,101,113,117,105,114,101,100,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,0,78,111,116,32,97,32,100,105,114,101,99,116,111,114,121,0,73,115,32,97,32,100,105,114,101,99,116,111,114,121,0,84,101,120,116,32,102,105,108,101,32,98,117,115,121,0,69,120,101,99,32,102,111,114,109,97,116,32,101,114,114,111,114,0,73,110,118,97,108,105,100,32,97,114,103,117,109,101,110,116,0,65,114,103,117,109,101,110,116,32,108,105,115,116,32,116,111,111,32,108,111,110,103,0,83,121,109,98,111,108,105,99,32,108,105,110,107,32,108,111,111,112,0,70,105,108,101,110,97,109,101,32,116,111,111,32,108,111,110,103,0,84,111,111,32,109,97,110,121,32,111,112,101,110,32,102,105,108,101,115,32,105,110,32,115,121,115,116,101,109,0,78,111,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,115,32,97,118,97,105,108,97,98,108,101,0,66,97,100,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,0,78,111,32,99,104,105,108,100,32,112,114,111,99,101,115,115,0,66,97,100,32,97,100,100,114,101,115,115,0,70,105,108,101,32,116,111,111,32,108,97,114,103,101,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,78,111,32,108,111,99,107,115,32,97,118,97,105,108,97,98,108,101,0,82,101,115,111,117,114,99,101,32,100,101,97,100,108,111,99,107,32,119,111,117,108,100,32,111,99,99,117,114,0,83,116,97,116,101,32,110,111,116,32,114,101,99,111,118,101,114,97,98,108,101,0,80,114,101,118,105,111,117,115,32,111,119,110,101,114,32,100,105,101,100,0,79,112,101,114,97,116,105,111,110,32,99,97,110,99,101,108,101,100,0,70,117,110,99,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,78,111,32,109,101,115,115,97,103,101,32,111,102,32,100,101,115,105,114,101,100,32,116,121,112,101,0,73,100,101,110,116,105,102,105,101,114,32,114,101,109,111,118,101,100,0,68,101,118,105,99,101,32,110,111,116,32,97,32,115,116,114,101,97,109,0,78,111,32,100,97,116,97,32,97,118,97,105,108,97,98,108,101,0,68,101,118,105,99,101,32,116,105,109,101,111,117,116,0,79,117,116,32,111,102,32,115,116,114,101,97,109,115,32,114,101,115,111,117,114,99,101,115,0,76,105,110,107,32,104,97,115,32,98,101,101,110,32,115,101,118,101,114,101,100,0,80,114,111,116,111,99,111,108,32,101,114,114,111,114,0,66,97,100,32,109,101,115,115,97,103,101,0,70,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,105,110,32,98,97,100,32,115,116,97,116,101,0,78,111,116,32,97,32,115,111,99,107,101,116,0,68,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,32,114,101,113,117,105,114,101,100,0,77,101,115,115,97,103,101,32,116,111,111,32,108,97,114,103,101,0,80,114,111,116,111,99,111,108,32,119,114,111,110,103,32,116,121,112,101,32,102,111,114,32,115,111,99,107,101,116,0,80,114,111,116,111,99,111,108,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,80,114,111,116,111,99,111,108,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,83,111,99,107,101,116,32,116,121,112,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,78,111,116,32,115,117,112,112,111,114,116,101,100,0,80,114,111,116,111,99,111,108,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,65,100,100,114,101,115,115,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,112,114,111,116,111,99,111,108,0,65,100,100,114,101,115,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,78,101,116,119,111,114,107,32,105,115,32,100,111,119,110,0,78,101,116,119,111,114,107,32,117,110,114,101,97,99,104,97,98,108,101,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,110,101,116,119,111,114,107,0,67,111,110,110,101,99,116,105,111,110,32,97,98,111,114,116,101,100,0,78,111,32,98,117,102,102,101,114,32,115,112,97,99,101,32,97,118,97,105,108,97,98,108,101,0,83,111,99,107,101,116,32,105,115,32,99,111,110,110,101,99,116,101,100,0,83,111,99,107,101,116,32,110,111,116,32,99,111,110,110,101,99,116,101,100,0,67,97,110,110,111,116,32,115,101,110,100,32,97,102,116,101,114,32,115,111,99,107,101,116,32,115,104,117,116,100,111,119,110,0,79,112,101,114,97,116,105,111,110,32,97,108,114,101,97,100,121,32,105,110,32,112,114,111,103,114,101,115,115,0,79,112,101,114,97,116,105,111,110,32,105,110,32,112,114,111,103,114,101,115,115,0,83,116,97,108,101,32,102,105,108,101,32,104,97,110,100,108,101,0,82,101,109,111,116,101,32,73,47,79,32,101,114,114,111,114,0,81,117,111,116,97,32,101,120,99,101,101,100,101,100,0,78,111,32,109,101,100,105,117,109,32,102,111,117,110,100,0,87,114,111,110,103,32,109,101,100,105,117,109,32,116,121,112,101,0,78,111,32,101,114,114,111,114,32,105,110,102,111,114,109,97,116,105,111,110,0,0,116,101,114,109,105,110,97,116,105,110,103,32,119,105,116,104,32,37,115,32,101,120,99,101,112,116,105,111,110,32,111,102,32,116,121,112,101,32,37,115,58,32,37,115,0,116,101,114,109,105,110,97,116,105,110,103,32,119,105,116,104,32,37,115,32,101,120,99,101,112,116,105,111,110,32,111,102,32,116,121,112,101,32,37,115,0,116,101,114,109,105,110,97,116,105,110,103,32,119,105,116,104,32,37,115,32,102,111,114,101,105,103,110,32,101,120,99,101,112,116,105,111,110,0,116,101,114,109,105,110,97,116,105,110,103,0,117,110,99,97,117,103,104,116,0,83,116,57,101,120,99,101,112,116,105,111,110,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0,83,116,57,116,121,112,101,95,105,110,102,111,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,112,116,104,114,101,97,100,95,111,110,99,101,32,102,97,105,108,117,114,101,32,105,110,32,95,95,99,120,97,95,103,101,116,95,103,108,111,98,97,108,115,95,102,97,115,116,40,41,0,99,97,110,110,111,116,32,99,114,101,97,116,101,32,112,116,104,114,101,97,100,32,107,101,121,32,102,111,114,32,95,95,99,120,97,95,103,101,116,95,103,108,111,98,97,108,115,40,41,0,99,97,110,110,111,116,32,122,101,114,111,32,111,117,116,32,116,104,114,101,97,100,32,118,97,108,117,101,32,102,111,114,32,95,95,99,120,97,95,103,101,116,95,103,108,111,98,97,108,115,40,41,0,116,101,114,109,105,110,97,116,101,95,104,97,110,100,108,101,114,32,117,110,101,120,112,101,99,116,101,100,108,121,32,114,101,116,117,114,110,101,100,0,116,101,114,109,105,110,97,116,101,95,104,97,110,100,108,101,114,32,117,110,101,120,112,101,99,116,101,100,108,121,32,116,104,114,101,119,32,97,110,32,101,120,99,101,112,116,105,111,110,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,57,95,95,112,111,105,110,116,101,114,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,112,98,97,115,101,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,51,95,95,102,117,110,100,97,109,101,110,116,97,108,95,116,121,112,101,95,105,110,102,111,69,0,118,0,98,0,99,0,104,0,97,0,115,0,116,0,105,0,106,0,108,0,109,0,102,0,100,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,49,95,95,118,109,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);





/* no memory initializer */
var tempDoublePtr = STATICTOP; STATICTOP += 16;

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}

// {{PRE_LIBRARY}}


  
  function _atexit(func, arg) {
      __ATEXIT__.unshift({ func: func, arg: arg });
    }function ___cxa_atexit() {
  return _atexit.apply(null, arguments)
  }

   
  Module["_i64Subtract"] = _i64Subtract;

   
  Module["_i64Add"] = _i64Add;

  
  
  
  function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
          codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }var embind_charCodes=undefined;function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
          ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
  
  
  var awaitingDependencies={};
  
  var registeredTypes={};
  
  var typeDependencies={};
  
  
  
  
  
  
  var char_0=48;
  
  var char_9=57;function makeLegalFunctionName(name) {
      if (undefined === name) {
          return '_unknown';
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, '$');
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
          return '_' + name;
      } else {
          return name;
      }
    }function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      /*jshint evil:true*/
      return new Function(
          "body",
          "return function " + name + "() {\n" +
          "    \"use strict\";" +
          "    return body.apply(this, arguments);\n" +
          "};\n"
      )(body);
    }function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function(message) {
          this.name = errorName;
          this.message = message;
  
          var stack = (new Error(message)).stack;
          if (stack !== undefined) {
              this.stack = this.toString() + '\n' +
                  stack.replace(/^Error(:[^\n]*)?\n/, '');
          }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
          if (this.message === undefined) {
              return this.name;
          } else {
              return this.name + ': ' + this.message;
          }
      };
  
      return errorClass;
    }var BindingError=undefined;function throwBindingError(message) {
      throw new BindingError(message);
    }
  
  
  
  var InternalError=undefined;function throwInternalError(message) {
      throw new InternalError(message);
    }function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function(type) {
          typeDependencies[type] = dependentTypes;
      });
  
      function onComplete(typeConverters) {
          var myTypeConverters = getTypeConverters(typeConverters);
          if (myTypeConverters.length !== myTypes.length) {
              throwInternalError('Mismatched type converter count');
          }
          for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
          }
      }
  
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function(dt, i) {
          if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
          } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                  awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(function() {
                  typeConverters[i] = registeredTypes[dt];
                  ++registered;
                  if (registered === unregisteredTypes.length) {
                      onComplete(typeConverters);
                  }
              });
          }
      });
      if (0 === unregisteredTypes.length) {
          onComplete(typeConverters);
      }
    }function registerType(rawType, registeredInstance, options) {
      options = options || {};
  
      if (!('argPackAdvance' in registeredInstance)) {
          throw new TypeError('registerType registeredInstance requires argPackAdvance');
      }
  
      var name = registeredInstance.name;
      if (!rawType) {
          throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
          if (options.ignoreDuplicateRegistrations) {
              return;
          } else {
              throwBindingError("Cannot register type '" + name + "' twice");
          }
      }
  
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
  
      if (awaitingDependencies.hasOwnProperty(rawType)) {
          var callbacks = awaitingDependencies[rawType];
          delete awaitingDependencies[rawType];
          callbacks.forEach(function(cb) {
              cb();
          });
      }
    }function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          isVoid: true, // void return values can be optimized out sometimes
          name: name,
          'argPackAdvance': 0,
          'fromWireType': function() {
              return undefined;
          },
          'toWireType': function(destructors, o) {
              // TODO: assert if anything else is given?
              return undefined;
          },
      });
    }

   
  Module["_memset"] = _memset;

  
  function getShiftFromSize(size) {
      switch (size) {
          case 1: return 0;
          case 2: return 1;
          case 4: return 2;
          case 8: return 3;
          default:
              throw new TypeError('Unknown type size: ' + size);
      }
    }function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(wt) {
              // ambiguous emscripten ABI: sometimes return values are
              // true or false, and sometimes integers (0 or 1)
              return !!wt;
          },
          'toWireType': function(destructors, o) {
              return o ? trueValue : falseValue;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': function(pointer) {
              // TODO: if heap is fixed (like in asm.js) this could be executed outside
              var heap;
              if (size === 1) {
                  heap = HEAP8;
              } else if (size === 2) {
                  heap = HEAP16;
              } else if (size === 4) {
                  heap = HEAP32;
              } else {
                  throw new TypeError("Unknown boolean type size: " + name);
              }
              return this['fromWireType'](heap[pointer >> shift]);
          },
          destructorFunction: null, // This type does not need a destructor
      });
    }

   
  Module["_bitshift64Shl"] = _bitshift64Shl;

  function _abort() {
      Module['abort']();
    }

  
  function _free() {
  }
  Module["_free"] = _free;
  
  function _malloc(bytes) {
      /* Over-allocate to make sure it is byte-aligned by 8.
       * This will leak memory, but this is only the dummy
       * implementation (replaced by dlmalloc normally) so
       * not an issue.
       */
      var ptr = Runtime.dynamicAlloc(bytes + 8);
      return (ptr+8) & 0xFFFFFFF8;
    }
  Module["_malloc"] = _malloc;
  
  function simpleReadValueFromPointer(pointer) {
      return this['fromWireType'](HEAPU32[pointer >> 2]);
    }function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              var length = HEAPU32[value >> 2];
              var a = new Array(length);
              for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
              }
              _free(value);
              return a.join('');
          },
          'toWireType': function(destructors, value) {
              if (value instanceof ArrayBuffer) {
                  value = new Uint8Array(value);
              }
  
              function getTAElement(ta, index) {
                  return ta[index];
              }
              function getStringElement(string, index) {
                  return string.charCodeAt(index);
              }
              var getElement;
              if (value instanceof Uint8Array) {
                  getElement = getTAElement;
              } else if (value instanceof Uint8ClampedArray) {
                  getElement = getTAElement;
              } else if (value instanceof Int8Array) {
                  getElement = getTAElement;
              } else if (typeof value === 'string') {
                  getElement = getStringElement;
              } else {
                  throwBindingError('Cannot pass non-string to std::string');
              }
  
              // assumes 4-byte alignment
              var length = value.length;
              var ptr = _malloc(4 + length);
              HEAPU32[ptr >> 2] = length;
              for (var i = 0; i < length; ++i) {
                  var charCode = getElement(value, i);
                  if (charCode > 255) {
                      _free(ptr);
                      throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                  }
                  HEAPU8[ptr + 4 + i] = charCode;
              }
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function __embind_register_std_wstring(rawType, charSize, name) {
      // nb. do not cache HEAPU16 and HEAPU32, they may be destroyed by enlargeMemory().
      name = readLatin1String(name);
      var getHeap, shift;
      if (charSize === 2) {
          getHeap = function() { return HEAPU16; };
          shift = 1;
      } else if (charSize === 4) {
          getHeap = function() { return HEAPU32; };
          shift = 2;
      }
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              var HEAP = getHeap();
              var length = HEAPU32[value >> 2];
              var a = new Array(length);
              var start = (value + 4) >> shift;
              for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAP[start + i]);
              }
              _free(value);
              return a.join('');
          },
          'toWireType': function(destructors, value) {
              // assumes 4-byte alignment
              var HEAP = getHeap();
              var length = value.length;
              var ptr = _malloc(4 + length * charSize);
              HEAPU32[ptr >> 2] = length;
              var start = (ptr + 4) >> shift;
              for (var i = 0; i < length; ++i) {
                  HEAP[start + i] = value.charCodeAt(i);
              }
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function _pthread_once(ptr, func) {
      if (!_pthread_once.seen) _pthread_once.seen = {};
      if (ptr in _pthread_once.seen) return;
      Runtime.dynCall('v', func);
      _pthread_once.seen[ptr] = 1;
    }

  function ___lock() {}

  function ___unlock() {}

  
  var emval_free_list=[];
  
  var emval_handle_array=[{},{value:undefined},{value:null},{value:true},{value:false}];function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
          emval_handle_array[handle] = undefined;
          emval_free_list.push(handle);
      }
    }

  
  var PTHREAD_SPECIFIC={};function _pthread_getspecific(key) {
      return PTHREAD_SPECIFIC[key] || 0;
    }

  
  var PTHREAD_SPECIFIC_NEXT_KEY=1;
  
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function _pthread_key_create(key, destructor) {
      if (key == 0) {
        return ERRNO_CODES.EINVAL;
      }
      HEAP32[((key)>>2)]=PTHREAD_SPECIFIC_NEXT_KEY;
      // values start at 0
      PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY] = 0;
      PTHREAD_SPECIFIC_NEXT_KEY++;
      return 0;
    }

  
  function _embind_repr(v) {
      if (v === null) {
          return 'null';
      }
      var t = typeof v;
      if (t === 'object' || t === 'array' || t === 'function') {
          return v.toString();
      } else {
          return '' + v;
      }
    }
  
  function integerReadValueFromPointer(name, shift, signed) {
      // integers are quite common, so generate very specialized functions
      switch (shift) {
          case 0: return signed ?
              function readS8FromPointer(pointer) { return HEAP8[pointer]; } :
              function readU8FromPointer(pointer) { return HEAPU8[pointer]; };
          case 1: return signed ?
              function readS16FromPointer(pointer) { return HEAP16[pointer >> 1]; } :
              function readU16FromPointer(pointer) { return HEAPU16[pointer >> 1]; };
          case 2: return signed ?
              function readS32FromPointer(pointer) { return HEAP32[pointer >> 2]; } :
              function readU32FromPointer(pointer) { return HEAPU32[pointer >> 2]; };
          default:
              throw new TypeError("Unknown integer type: " + name);
      }
    }function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) { // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come out as 'i32 -1'. Always treat those as max u32.
          maxRange = 4294967295;
      }
  
      var shift = getShiftFromSize(size);
      
      var fromWireType = function(value) {
          return value;
      };
      
      if (minRange === 0) {
          var bitshift = 32 - 8*size;
          fromWireType = function(value) {
              return (value << bitshift) >>> bitshift;
          };
      }
  
      registerType(primitiveType, {
          name: name,
          'fromWireType': fromWireType,
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following two if()s and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              if (value < minRange || value > maxRange) {
                  throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
              }
              return value | 0;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  
  
  
  function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              ++count;
          }
      }
      return count;
    }
  
  function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              return emval_handle_array[i];
          }
      }
      return null;
    }function init_emval() {
      Module['count_emval_handles'] = count_emval_handles;
      Module['get_first_emval'] = get_first_emval;
    }function __emval_register(value) {
  
      switch(value){
        case undefined :{ return 1; }
        case null :{ return 2; }
        case true :{ return 3; }
        case false :{ return 4; }
        default:{
          var handle = emval_free_list.length ?
              emval_free_list.pop() :
              emval_handle_array.length;
  
          emval_handle_array[handle] = {refcount: 1, value: value};
          return handle;
          }
        }
    }function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(handle) {
              var rv = emval_handle_array[handle].value;
              __emval_decref(handle);
              return rv;
          },
          'toWireType': function(destructors, value) {
              return __emval_register(value);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: null, // This type does not need a destructor
  
          // TODO: do we need a deleteObject here?  write a test where
          // emval is passed into JS via an interface
      });
    }

  function _pthread_setspecific(key, value) {
      if (!(key in PTHREAD_SPECIFIC)) {
        return ERRNO_CODES.EINVAL;
      }
      PTHREAD_SPECIFIC[key] = value;
      return 0;
    }

  
  var SYSCALLS={varargs:0,get:function (varargs) {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function () {
        var ret = Pointer_stringify(SYSCALLS.get());
        return ret;
      },get64:function () {
        var low = SYSCALLS.get(), high = SYSCALLS.get();
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      },getZero:function () {
        assert(SYSCALLS.get() === 0);
      }};function ___syscall54(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // ioctl
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

   
  Module["_bitshift64Lshr"] = _bitshift64Lshr;

  
  function floatReadValueFromPointer(name, shift) {
      switch (shift) {
          case 2: return function(pointer) {
              return this['fromWireType'](HEAPF32[pointer >> 2]);
          };
          case 3: return function(pointer) {
              return this['fromWireType'](HEAPF64[pointer >> 3]);
          };
          default:
              throw new TypeError("Unknown float type: " + name);
      }
    }function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              return value;
          },
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following if() and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              return value;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': floatReadValueFromPointer(name, shift),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function _pthread_cleanup_push(routine, arg) {
      __ATEXIT__.push(function() { Runtime.dynCall('vi', routine, [arg]) })
      _pthread_cleanup_push.level = __ATEXIT__.length;
    }

  function _pthread_cleanup_pop() {
      assert(_pthread_cleanup_push.level == __ATEXIT__.length, 'cannot pop if something else added meanwhile!');
      __ATEXIT__.pop();
      _pthread_cleanup_push.level = __ATEXIT__.length;
    }

  function ___cxa_find_matching_catch_3() {
          return ___cxa_find_matching_catch.apply(null, arguments);
        }

  
  function __ZSt18uncaught_exceptionv() { // std::uncaught_exception()
      return !!__ZSt18uncaught_exceptionv.uncaught_exception;
    }
  
  var EXCEPTIONS={last:0,caught:[],infos:{},deAdjust:function (adjusted) {
        if (!adjusted || EXCEPTIONS.infos[adjusted]) return adjusted;
        for (var ptr in EXCEPTIONS.infos) {
          var info = EXCEPTIONS.infos[ptr];
          if (info.adjusted === adjusted) {
            return ptr;
          }
        }
        return adjusted;
      },addRef:function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        info.refcount++;
      },decRef:function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        assert(info.refcount > 0);
        info.refcount--;
        // A rethrown exception can reach refcount 0; it must not be discarded
        // Its next handler will clear the rethrown flag and addRef it, prior to
        // final decRef and destruction here
        if (info.refcount === 0 && !info.rethrown) {
          if (info.destructor) {
            Runtime.dynCall('vi', info.destructor, [ptr]);
          }
          delete EXCEPTIONS.infos[ptr];
          ___cxa_free_exception(ptr);
        }
      },clearRef:function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        info.refcount = 0;
      }};function ___cxa_begin_catch(ptr) {
      var info = EXCEPTIONS.infos[ptr];
      if (info && !info.caught) {
        info.caught = true;
        __ZSt18uncaught_exceptionv.uncaught_exception--;
      }
      if (info) info.rethrown = false;
      EXCEPTIONS.caught.push(ptr);
      EXCEPTIONS.addRef(EXCEPTIONS.deAdjust(ptr));
      return ptr;
    }

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 
  Module["_memcpy"] = _memcpy;

  function ___syscall6(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // close
      var stream = SYSCALLS.getStreamFromFD();
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  
  
  var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_STATIC); 
  Module["_llvm_cttz_i32"] = _llvm_cttz_i32; 
  Module["___udivmoddi4"] = ___udivmoddi4; 
  Module["___udivdi3"] = ___udivdi3;

  
  function ___setErrNo(value) {
      if (Module['___errno_location']) HEAP32[((Module['___errno_location']())>>2)]=value;
      else Module.printErr('failed to set errno from JS');
      return value;
    } 
  Module["_sbrk"] = _sbrk;

  
  
  function ___resumeException(ptr) {
      if (!EXCEPTIONS.last) { EXCEPTIONS.last = ptr; }
      throw ptr;
    }function ___cxa_find_matching_catch() {
      var thrown = EXCEPTIONS.last;
      if (!thrown) {
        // just pass through the null ptr
        return ((asm["setTempRet0"](0),0)|0);
      }
      var info = EXCEPTIONS.infos[thrown];
      var throwntype = info.type;
      if (!throwntype) {
        // just pass through the thrown ptr
        return ((asm["setTempRet0"](0),thrown)|0);
      }
      var typeArray = Array.prototype.slice.call(arguments);
  
      var pointer = Module['___cxa_is_pointer_type'](throwntype);
      // can_catch receives a **, add indirection
      if (!___cxa_find_matching_catch.buffer) ___cxa_find_matching_catch.buffer = _malloc(4);
      HEAP32[((___cxa_find_matching_catch.buffer)>>2)]=thrown;
      thrown = ___cxa_find_matching_catch.buffer;
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < typeArray.length; i++) {
        if (typeArray[i] && Module['___cxa_can_catch'](typeArray[i], throwntype, thrown)) {
          thrown = HEAP32[((thrown)>>2)]; // undo indirection
          info.adjusted = thrown;
          return ((asm["setTempRet0"](typeArray[i]),thrown)|0);
        }
      }
      // Shouldn't happen unless we have bogus data in typeArray
      // or encounter a type for which emscripten doesn't have suitable
      // typeinfo defined. Best-efforts match just in case.
      thrown = HEAP32[((thrown)>>2)]; // undo indirection
      return ((asm["setTempRet0"](throwntype),thrown)|0);
    }function ___gxx_personality_v0() {
    }

   
  Module["___uremdi3"] = ___uremdi3;

  function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
      ];
  
      var TA = typeMapping[dataTypeIndex];
  
      function decodeMemoryView(handle) {
          handle = handle >> 2;
          var heap = HEAPU32;
          var size = heap[handle]; // in elements
          var data = heap[handle + 1]; // byte offset into emscripten heap
          return new TA(heap['buffer'], data, size);
      }
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': decodeMemoryView,
          'argPackAdvance': 8,
          'readValueFromPointer': decodeMemoryView,
      }, {
          ignoreDuplicateRegistrations: true,
      });
    }

   
  Module["_pthread_self"] = _pthread_self;

  function ___syscall140(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // llseek
      var stream = SYSCALLS.getStreamFromFD(), offset_high = SYSCALLS.get(), offset_low = SYSCALLS.get(), result = SYSCALLS.get(), whence = SYSCALLS.get();
      var offset = offset_low;
      assert(offset_high === 0);
      FS.llseek(stream, offset, whence);
      HEAP32[((result)>>2)]=stream.position;
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall146(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // writev
      // hack to support printf in NO_FILESYSTEM
      var stream = SYSCALLS.get(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
      var ret = 0;
      if (!___syscall146.buffer) {
        ___syscall146.buffers = [null, [], []]; // 1 => stdout, 2 => stderr
        ___syscall146.printChar = function(stream, curr) {
          var buffer = ___syscall146.buffers[stream];
          assert(buffer);
          if (curr === 0 || curr === 10) {
            (stream === 1 ? Module['print'] : Module['printErr'])(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
      }
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          ___syscall146.printChar(stream, HEAPU8[ptr+j]);
        }
        ret += len;
      }
      return ret;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  
  function ___cxa_free_exception(ptr) {
      try {
        return _free(ptr);
      } catch(e) { // XXX FIXME
        Module.printErr('exception during cxa_free_exception: ' + e);
      }
    }function ___cxa_end_catch() {
      // Clear state flag.
      asm['setThrew'](0);
      // Call destructor if one is registered then clear it.
      var ptr = EXCEPTIONS.caught.pop();
      if (ptr) {
        EXCEPTIONS.decRef(EXCEPTIONS.deAdjust(ptr));
        EXCEPTIONS.last = 0; // XXX in decRef?
      }
    }

  var ___dso_handle=STATICTOP; STATICTOP += 16;;
embind_init_charCodes();
BindingError = Module['BindingError'] = extendError(Error, 'BindingError');;
InternalError = Module['InternalError'] = extendError(Error, 'InternalError');;
init_emval();;
/* flush anything remaining in the buffer during shutdown */ __ATEXIT__.push(function() { var fflush = Module["_fflush"]; if (fflush) fflush(0); var printChar = ___syscall146.printChar; if (!printChar) return; var buffers = ___syscall146.buffers; if (buffers[1].length) printChar(1, 10); if (buffers[2].length) printChar(2, 10); });;
DYNAMICTOP_PTR = allocate(1, "i32", ALLOC_STATIC);

STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);

STACK_MAX = STACK_BASE + TOTAL_STACK;

DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;

staticSealed = true; // seal the static portion of memory

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");



function nullFunc_iiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_i(x) { Module["printErr"]("Invalid function pointer called with signature 'i'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vi(x) { Module["printErr"]("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vii(x) { Module["printErr"]("Invalid function pointer called with signature 'vii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_ii(x) { Module["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_v(x) { Module["printErr"]("Invalid function pointer called with signature 'v'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_i(index) {
  try {
    return Module["dynCall_i"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "abortStackOverflow": abortStackOverflow, "nullFunc_iiii": nullFunc_iiii, "nullFunc_viiiii": nullFunc_viiiii, "nullFunc_i": nullFunc_i, "nullFunc_vi": nullFunc_vi, "nullFunc_vii": nullFunc_vii, "nullFunc_ii": nullFunc_ii, "nullFunc_v": nullFunc_v, "nullFunc_viiiiii": nullFunc_viiiiii, "nullFunc_viiii": nullFunc_viiii, "invoke_iiii": invoke_iiii, "invoke_viiiii": invoke_viiiii, "invoke_i": invoke_i, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_viiii": invoke_viiii, "_pthread_cleanup_pop": _pthread_cleanup_pop, "floatReadValueFromPointer": floatReadValueFromPointer, "simpleReadValueFromPointer": simpleReadValueFromPointer, "_pthread_key_create": _pthread_key_create, "__embind_register_memory_view": __embind_register_memory_view, "throwInternalError": throwInternalError, "get_first_emval": get_first_emval, "_abort": _abort, "throwBindingError": throwBindingError, "___gxx_personality_v0": ___gxx_personality_v0, "integerReadValueFromPointer": integerReadValueFromPointer, "extendError": extendError, "___cxa_free_exception": ___cxa_free_exception, "__embind_register_void": __embind_register_void, "__ZSt18uncaught_exceptionv": __ZSt18uncaught_exceptionv, "getShiftFromSize": getShiftFromSize, "embind_init_charCodes": embind_init_charCodes, "___setErrNo": ___setErrNo, "__emval_register": __emval_register, "___cxa_begin_catch": ___cxa_begin_catch, "_emscripten_memcpy_big": _emscripten_memcpy_big, "___cxa_end_catch": ___cxa_end_catch, "__embind_register_bool": __embind_register_bool, "___resumeException": ___resumeException, "___cxa_find_matching_catch_3": ___cxa_find_matching_catch_3, "_embind_repr": _embind_repr, "__embind_register_std_wstring": __embind_register_std_wstring, "_pthread_getspecific": _pthread_getspecific, "createNamedFunction": createNamedFunction, "__embind_register_emval": __embind_register_emval, "readLatin1String": readLatin1String, "__embind_register_integer": __embind_register_integer, "_pthread_once": _pthread_once, "__emval_decref": __emval_decref, "__embind_register_float": __embind_register_float, "makeLegalFunctionName": makeLegalFunctionName, "___syscall54": ___syscall54, "___unlock": ___unlock, "init_emval": init_emval, "whenDependentTypesAreResolved": whenDependentTypesAreResolved, "_pthread_setspecific": _pthread_setspecific, "___cxa_atexit": ___cxa_atexit, "registerType": registerType, "___lock": ___lock, "___syscall6": ___syscall6, "_pthread_cleanup_push": _pthread_cleanup_push, "count_emval_handles": count_emval_handles, "_atexit": _atexit, "___syscall140": ___syscall140, "__embind_register_std_string": __embind_register_std_string, "___cxa_find_matching_catch": ___cxa_find_matching_catch, "___syscall146": ___syscall146, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "cttz_i8": cttz_i8, "___dso_handle": ___dso_handle };
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var cttz_i8=env.cttz_i8|0;
  var ___dso_handle=env.___dso_handle|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var abortStackOverflow=env.abortStackOverflow;
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_viiiii=env.nullFunc_viiiii;
  var nullFunc_i=env.nullFunc_i;
  var nullFunc_vi=env.nullFunc_vi;
  var nullFunc_vii=env.nullFunc_vii;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_v=env.nullFunc_v;
  var nullFunc_viiiiii=env.nullFunc_viiiiii;
  var nullFunc_viiii=env.nullFunc_viiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_i=env.invoke_i;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var floatReadValueFromPointer=env.floatReadValueFromPointer;
  var simpleReadValueFromPointer=env.simpleReadValueFromPointer;
  var _pthread_key_create=env._pthread_key_create;
  var __embind_register_memory_view=env.__embind_register_memory_view;
  var throwInternalError=env.throwInternalError;
  var get_first_emval=env.get_first_emval;
  var _abort=env._abort;
  var throwBindingError=env.throwBindingError;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var integerReadValueFromPointer=env.integerReadValueFromPointer;
  var extendError=env.extendError;
  var ___cxa_free_exception=env.___cxa_free_exception;
  var __embind_register_void=env.__embind_register_void;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var getShiftFromSize=env.getShiftFromSize;
  var embind_init_charCodes=env.embind_init_charCodes;
  var ___setErrNo=env.___setErrNo;
  var __emval_register=env.__emval_register;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___cxa_end_catch=env.___cxa_end_catch;
  var __embind_register_bool=env.__embind_register_bool;
  var ___resumeException=env.___resumeException;
  var ___cxa_find_matching_catch_3=env.___cxa_find_matching_catch_3;
  var _embind_repr=env._embind_repr;
  var __embind_register_std_wstring=env.__embind_register_std_wstring;
  var _pthread_getspecific=env._pthread_getspecific;
  var createNamedFunction=env.createNamedFunction;
  var __embind_register_emval=env.__embind_register_emval;
  var readLatin1String=env.readLatin1String;
  var __embind_register_integer=env.__embind_register_integer;
  var _pthread_once=env._pthread_once;
  var __emval_decref=env.__emval_decref;
  var __embind_register_float=env.__embind_register_float;
  var makeLegalFunctionName=env.makeLegalFunctionName;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var init_emval=env.init_emval;
  var whenDependentTypesAreResolved=env.whenDependentTypesAreResolved;
  var _pthread_setspecific=env._pthread_setspecific;
  var ___cxa_atexit=env.___cxa_atexit;
  var registerType=env.registerType;
  var ___lock=env.___lock;
  var ___syscall6=env.___syscall6;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var count_emval_handles=env.count_emval_handles;
  var _atexit=env._atexit;
  var ___syscall140=env.___syscall140;
  var __embind_register_std_string=env.__embind_register_std_string;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var ___syscall146=env.___syscall146;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;
  if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(size|0);

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function __GLOBAL__sub_I_app_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 HEAP32[1336] = (1);
 (___cxa_atexit((24|0),(5344|0),(___dso_handle|0))|0);
 return;
}
function __ZN10emscripten3valD2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[$this>>2]|0;
 __THREW__ = 0;
 invoke_vi(25,($0|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_3(0|0)|0;
  $4 = tempRet0;
  ___clang_call_terminate($3);
  // unreachable;
 } else {
  return;
 }
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___cxa_begin_catch(($0|0))|0);
 __ZSt9terminatev();
 // unreachable;
}
function __GLOBAL__sub_I_glue_wrapper_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 HEAP32[1337] = (1);
 (___cxa_atexit((24|0),(5348|0),(___dso_handle|0))|0);
 return;
}
function _emscripten_bind_VoidPtr___destroy___0($self) {
 $self = $self|0;
 var $isnull = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $isnull = ($self|0)==(0|0);
 if (!($isnull)) {
  __ZdlPv($self);
 }
 return;
}
function __GLOBAL__sub_I_bind_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___cxx_global_var_init();
 return;
}
function ___cxx_global_var_init() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN53EmscriptenBindingInitializer_native_and_builtin_typesC2Ev(5904);
 return;
}
function __ZN53EmscriptenBindingInitializer_native_and_builtin_typesC2Ev($this) {
 $this = $this|0;
 var $call = 0, $call2 = 0, $call3 = 0, $call4 = 0, $call5 = 0, $call6 = 0, $this$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $this$addr = $this;
 $call = (__ZN10emscripten8internal6TypeIDIvE3getEv()|0);
 __embind_register_void(($call|0),(932|0));
 $call2 = (__ZN10emscripten8internal6TypeIDIbE3getEv()|0);
 __embind_register_bool(($call2|0),(937|0),1,1,0);
 __ZN12_GLOBAL__N_1L16register_integerIcEEvPKc(942);
 __ZN12_GLOBAL__N_1L16register_integerIaEEvPKc(947);
 __ZN12_GLOBAL__N_1L16register_integerIhEEvPKc(959);
 __ZN12_GLOBAL__N_1L16register_integerIsEEvPKc(973);
 __ZN12_GLOBAL__N_1L16register_integerItEEvPKc(979);
 __ZN12_GLOBAL__N_1L16register_integerIiEEvPKc(994);
 __ZN12_GLOBAL__N_1L16register_integerIjEEvPKc(998);
 __ZN12_GLOBAL__N_1L16register_integerIlEEvPKc(1011);
 __ZN12_GLOBAL__N_1L16register_integerImEEvPKc(1016);
 __ZN12_GLOBAL__N_1L14register_floatIfEEvPKc(1030);
 __ZN12_GLOBAL__N_1L14register_floatIdEEvPKc(1036);
 $call3 = (__ZN10emscripten8internal6TypeIDINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE3getEv()|0);
 __embind_register_std_string(($call3|0),(1043|0));
 $call4 = (__ZN10emscripten8internal6TypeIDINSt3__212basic_stringIhNS2_11char_traitsIhEENS2_9allocatorIhEEEEE3getEv()|0);
 __embind_register_std_string(($call4|0),(1055|0));
 $call5 = (__ZN10emscripten8internal6TypeIDINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE3getEv()|0);
 __embind_register_std_wstring(($call5|0),4,(1088|0));
 $call6 = (__ZN10emscripten8internal6TypeIDINS_3valEE3getEv()|0);
 __embind_register_emval(($call6|0),(1101|0));
 __ZN12_GLOBAL__N_1L20register_memory_viewIcEEvPKc(1117);
 __ZN12_GLOBAL__N_1L20register_memory_viewIaEEvPKc(1147);
 __ZN12_GLOBAL__N_1L20register_memory_viewIhEEvPKc(1184);
 __ZN12_GLOBAL__N_1L20register_memory_viewIsEEvPKc(1223);
 __ZN12_GLOBAL__N_1L20register_memory_viewItEEvPKc(1254);
 __ZN12_GLOBAL__N_1L20register_memory_viewIiEEvPKc(1294);
 __ZN12_GLOBAL__N_1L20register_memory_viewIjEEvPKc(1323);
 __ZN12_GLOBAL__N_1L20register_memory_viewIlEEvPKc(1361);
 __ZN12_GLOBAL__N_1L20register_memory_viewImEEvPKc(1391);
 __ZN12_GLOBAL__N_1L20register_memory_viewIaEEvPKc(1430);
 __ZN12_GLOBAL__N_1L20register_memory_viewIhEEvPKc(1462);
 __ZN12_GLOBAL__N_1L20register_memory_viewIsEEvPKc(1495);
 __ZN12_GLOBAL__N_1L20register_memory_viewItEEvPKc(1528);
 __ZN12_GLOBAL__N_1L20register_memory_viewIiEEvPKc(1562);
 __ZN12_GLOBAL__N_1L20register_memory_viewIjEEvPKc(1595);
 __ZN12_GLOBAL__N_1L20register_memory_viewIfEEvPKc(1629);
 __ZN12_GLOBAL__N_1L20register_memory_viewIdEEvPKc(1660);
 __ZN12_GLOBAL__N_1L20register_memory_viewIeEEvPKc(1692);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal6TypeIDIvE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIvE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal6TypeIDIbE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIbE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_1L16register_integerIcEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $conv = 0, $conv3 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDIcE3getEv()|0);
 $0 = $name$addr;
 $conv = -128 << 24 >> 24;
 $conv3 = 127 << 24 >> 24;
 __embind_register_integer(($call|0),($0|0),1,($conv|0),($conv3|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L16register_integerIaEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $conv = 0, $conv3 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDIaE3getEv()|0);
 $0 = $name$addr;
 $conv = -128 << 24 >> 24;
 $conv3 = 127 << 24 >> 24;
 __embind_register_integer(($call|0),($0|0),1,($conv|0),($conv3|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L16register_integerIhEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $conv = 0, $conv3 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDIhE3getEv()|0);
 $0 = $name$addr;
 $conv = 0;
 $conv3 = 255;
 __embind_register_integer(($call|0),($0|0),1,($conv|0),($conv3|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L16register_integerIsEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $conv = 0, $conv3 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDIsE3getEv()|0);
 $0 = $name$addr;
 $conv = -32768 << 16 >> 16;
 $conv3 = 32767 << 16 >> 16;
 __embind_register_integer(($call|0),($0|0),2,($conv|0),($conv3|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L16register_integerItEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $conv = 0, $conv3 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDItE3getEv()|0);
 $0 = $name$addr;
 $conv = 0;
 $conv3 = 65535;
 __embind_register_integer(($call|0),($0|0),2,($conv|0),($conv3|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L16register_integerIiEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDIiE3getEv()|0);
 $0 = $name$addr;
 __embind_register_integer(($call|0),($0|0),4,-2147483648,2147483647);
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L16register_integerIjEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDIjE3getEv()|0);
 $0 = $name$addr;
 __embind_register_integer(($call|0),($0|0),4,0,-1);
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L16register_integerIlEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDIlE3getEv()|0);
 $0 = $name$addr;
 __embind_register_integer(($call|0),($0|0),4,-2147483648,2147483647);
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L16register_integerImEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDImE3getEv()|0);
 $0 = $name$addr;
 __embind_register_integer(($call|0),($0|0),4,0,-1);
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L14register_floatIfEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDIfE3getEv()|0);
 $0 = $name$addr;
 __embind_register_float(($call|0),($0|0),4);
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L14register_floatIdEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDIdE3getEv()|0);
 $0 = $name$addr;
 __embind_register_float(($call|0),($0|0),8);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal6TypeIDINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal6TypeIDINSt3__212basic_stringIhNS2_11char_traitsIhEENS2_9allocatorIhEEEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIhNS2_11char_traitsIhEENS2_9allocatorIhEEEEE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal6TypeIDINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal6TypeIDINS_3valEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_3valEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIcEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewIcEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexIcEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIaEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewIaEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexIaEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIhEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewIhEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexIhEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIsEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewIsEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexIsEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewItEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewItEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexItEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIiEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewIiEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexIiEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIjEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewIjEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexIjEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIlEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewIlEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexIlEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewImEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewImEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexImEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIfEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewIfEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexIfEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIdEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewIdEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexIdEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIeEEvPKc($name) {
 $name = $name|0;
 var $0 = 0, $call = 0, $call1 = 0, $name$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $name$addr = $name;
 $call = (__ZN10emscripten8internal6TypeIDINS_11memory_viewIeEEE3getEv()|0);
 $call1 = (__ZN12_GLOBAL__N_118getTypedArrayIndexIeEENS_15TypedArrayIndexEv()|0);
 $0 = $name$addr;
 __embind_register_memory_view(($call|0),($call1|0),($0|0));
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIeEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewIeEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIeEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 7;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIeEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (48|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIdEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewIdEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIdEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 7;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIdEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (56|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIfEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewIfEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIfEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 6;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIfEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (64|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewImEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewImEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexImEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 5;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewImEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (72|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIlEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewIlEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIlEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 4;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIlEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (80|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIjEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewIjEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIjEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 5;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIjEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (88|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIiEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewIiEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIiEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 4;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIiEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (96|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewItEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewItEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexItEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 3;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewItEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (104|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIsEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewIsEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIsEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 2;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIsEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (112|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIhEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewIhEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIhEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 1;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIhEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (120|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIaEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewIaEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIaEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIaEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (128|0);
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIcEEE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDINS_11memory_viewIcEEE3getEv()|0);
 return ($call|0);
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIcEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIcEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (136|0);
}
function __ZN10emscripten8internal11LightTypeIDINS_3valEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (40|0);
}
function __ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (144|0);
}
function __ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIhNS2_11char_traitsIhEENS2_9allocatorIhEEEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (168|0);
}
function __ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (8|0);
}
function __ZN10emscripten8internal6TypeIDIdE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIdE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDIdE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (400|0);
}
function __ZN10emscripten8internal6TypeIDIfE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIfE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDIfE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (392|0);
}
function __ZN10emscripten8internal6TypeIDImE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDImE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDImE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (384|0);
}
function __ZN10emscripten8internal6TypeIDIlE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIlE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDIlE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (376|0);
}
function __ZN10emscripten8internal6TypeIDIjE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIjE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDIjE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (368|0);
}
function __ZN10emscripten8internal6TypeIDIiE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIiE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDIiE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (360|0);
}
function __ZN10emscripten8internal6TypeIDItE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDItE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDItE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (352|0);
}
function __ZN10emscripten8internal6TypeIDIsE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIsE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDIsE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (344|0);
}
function __ZN10emscripten8internal6TypeIDIhE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIhE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDIhE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (328|0);
}
function __ZN10emscripten8internal6TypeIDIaE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIaE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDIaE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (336|0);
}
function __ZN10emscripten8internal6TypeIDIcE3getEv() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10emscripten8internal11LightTypeIDIcE3getEv()|0);
 return ($call|0);
}
function __ZN10emscripten8internal11LightTypeIDIcE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (320|0);
}
function __ZN10emscripten8internal11LightTypeIDIbE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (312|0);
}
function __ZN10emscripten8internal11LightTypeIDIvE3getEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (304|0);
}
function ___getTypeName($ti) {
 $ti = $ti|0;
 var $0 = 0, $1 = 0, $__type_name$i = 0, $call1 = 0, $this$addr$i = 0, $this1$i = 0, $ti$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $ti$addr = $ti;
 $0 = $ti$addr;
 $this$addr$i = $0;
 $this1$i = $this$addr$i;
 $__type_name$i = ((($this1$i)) + 4|0);
 $1 = HEAP32[$__type_name$i>>2]|0;
 $call1 = (___strdup($1)|0);
 STACKTOP = sp;return ($call1|0);
}
function ___stdio_close($f) {
 $f = $f|0;
 var $0 = 0, $call = 0, $call1 = 0, $fd = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer = sp;
 $fd = ((($f)) + 60|0);
 $0 = HEAP32[$fd>>2]|0;
 HEAP32[$vararg_buffer>>2] = $0;
 $call = (___syscall6(6,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 STACKTOP = sp;return ($call1|0);
}
function ___stdio_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr41 = 0, $add$ptr46 = 0;
 var $buf31 = 0, $buf_size = 0, $call = 0, $call10 = 0, $call7 = 0, $call9 = 0, $cmp = 0, $cmp17 = 0, $cmp22 = 0, $cmp29 = 0, $cmp38 = 0, $cnt$0 = 0, $cnt$1 = 0, $dec = 0, $fd8 = 0, $incdec$ptr = 0, $iov$0 = 0, $iov$1 = 0, $iov_base2 = 0, $iov_len = 0;
 var $iov_len24 = 0, $iov_len28 = 0, $iov_len3 = 0, $iov_len50 = 0, $iov_len50$phi$trans$insert = 0, $iovcnt$0 = 0, $iovcnt$1 = 0, $iovs = 0, $or = 0, $rem$0 = 0, $retval$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub26 = 0, $sub36 = 0, $sub51 = 0, $tobool = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0;
 var $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, $wbase = 0, $wend = 0, $wend19 = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $iovs = sp + 32|0;
 $wbase = ((($f)) + 28|0);
 $0 = HEAP32[$wbase>>2]|0;
 HEAP32[$iovs>>2] = $0;
 $iov_len = ((($iovs)) + 4|0);
 $wpos = ((($f)) + 20|0);
 $1 = HEAP32[$wpos>>2]|0;
 $sub$ptr$sub = (($1) - ($0))|0;
 HEAP32[$iov_len>>2] = $sub$ptr$sub;
 $iov_base2 = ((($iovs)) + 8|0);
 HEAP32[$iov_base2>>2] = $buf;
 $iov_len3 = ((($iovs)) + 12|0);
 HEAP32[$iov_len3>>2] = $len;
 $add = (($sub$ptr$sub) + ($len))|0;
 $fd8 = ((($f)) + 60|0);
 $buf31 = ((($f)) + 44|0);
 $iov$0 = $iovs;$iovcnt$0 = 2;$rem$0 = $add;
 while(1) {
  $2 = HEAP32[1338]|0;
  $tobool = ($2|0)==(0|0);
  if ($tobool) {
   $4 = HEAP32[$fd8>>2]|0;
   HEAP32[$vararg_buffer3>>2] = $4;
   $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
   HEAP32[$vararg_ptr6>>2] = $iov$0;
   $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
   HEAP32[$vararg_ptr7>>2] = $iovcnt$0;
   $call9 = (___syscall146(146,($vararg_buffer3|0))|0);
   $call10 = (___syscall_ret($call9)|0);
   $cnt$0 = $call10;
  } else {
   _pthread_cleanup_push((26|0),($f|0));
   $3 = HEAP32[$fd8>>2]|0;
   HEAP32[$vararg_buffer>>2] = $3;
   $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
   HEAP32[$vararg_ptr1>>2] = $iov$0;
   $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
   HEAP32[$vararg_ptr2>>2] = $iovcnt$0;
   $call = (___syscall146(146,($vararg_buffer|0))|0);
   $call7 = (___syscall_ret($call)|0);
   _pthread_cleanup_pop(0);
   $cnt$0 = $call7;
  }
  $cmp = ($rem$0|0)==($cnt$0|0);
  if ($cmp) {
   label = 6;
   break;
  }
  $cmp17 = ($cnt$0|0)<(0);
  if ($cmp17) {
   label = 8;
   break;
  }
  $sub26 = (($rem$0) - ($cnt$0))|0;
  $iov_len28 = ((($iov$0)) + 4|0);
  $10 = HEAP32[$iov_len28>>2]|0;
  $cmp29 = ($cnt$0>>>0)>($10>>>0);
  if ($cmp29) {
   $11 = HEAP32[$buf31>>2]|0;
   HEAP32[$wbase>>2] = $11;
   HEAP32[$wpos>>2] = $11;
   $sub36 = (($cnt$0) - ($10))|0;
   $incdec$ptr = ((($iov$0)) + 8|0);
   $dec = (($iovcnt$0) + -1)|0;
   $iov_len50$phi$trans$insert = ((($iov$0)) + 12|0);
   $$pre = HEAP32[$iov_len50$phi$trans$insert>>2]|0;
   $14 = $$pre;$cnt$1 = $sub36;$iov$1 = $incdec$ptr;$iovcnt$1 = $dec;
  } else {
   $cmp38 = ($iovcnt$0|0)==(2);
   if ($cmp38) {
    $12 = HEAP32[$wbase>>2]|0;
    $add$ptr41 = (($12) + ($cnt$0)|0);
    HEAP32[$wbase>>2] = $add$ptr41;
    $14 = $10;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = 2;
   } else {
    $14 = $10;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = $iovcnt$0;
   }
  }
  $13 = HEAP32[$iov$1>>2]|0;
  $add$ptr46 = (($13) + ($cnt$1)|0);
  HEAP32[$iov$1>>2] = $add$ptr46;
  $iov_len50 = ((($iov$1)) + 4|0);
  $sub51 = (($14) - ($cnt$1))|0;
  HEAP32[$iov_len50>>2] = $sub51;
  $iov$0 = $iov$1;$iovcnt$0 = $iovcnt$1;$rem$0 = $sub26;
 }
 if ((label|0) == 6) {
  $5 = HEAP32[$buf31>>2]|0;
  $buf_size = ((($f)) + 48|0);
  $6 = HEAP32[$buf_size>>2]|0;
  $add$ptr = (($5) + ($6)|0);
  $wend = ((($f)) + 16|0);
  HEAP32[$wend>>2] = $add$ptr;
  $7 = $5;
  HEAP32[$wbase>>2] = $7;
  HEAP32[$wpos>>2] = $7;
  $retval$0 = $len;
 }
 else if ((label|0) == 8) {
  $wend19 = ((($f)) + 16|0);
  HEAP32[$wend19>>2] = 0;
  HEAP32[$wbase>>2] = 0;
  HEAP32[$wpos>>2] = 0;
  $8 = HEAP32[$f>>2]|0;
  $or = $8 | 32;
  HEAP32[$f>>2] = $or;
  $cmp22 = ($iovcnt$0|0)==(2);
  if ($cmp22) {
   $retval$0 = 0;
  } else {
   $iov_len24 = ((($iov$0)) + 4|0);
   $9 = HEAP32[$iov_len24>>2]|0;
   $sub = (($len) - ($9))|0;
   $retval$0 = $sub;
  }
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___stdio_seek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $$pre = 0, $0 = 0, $1 = 0, $call = 0, $call1 = 0, $cmp = 0, $fd = 0, $ret = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer = sp;
 $ret = sp + 20|0;
 $fd = ((($f)) + 60|0);
 $0 = HEAP32[$fd>>2]|0;
 HEAP32[$vararg_buffer>>2] = $0;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = 0;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $off;
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 HEAP32[$vararg_ptr3>>2] = $ret;
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 HEAP32[$vararg_ptr4>>2] = $whence;
 $call = (___syscall140(140,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 $cmp = ($call1|0)<(0);
 if ($cmp) {
  HEAP32[$ret>>2] = -1;
  $1 = -1;
 } else {
  $$pre = HEAP32[$ret>>2]|0;
  $1 = $$pre;
 }
 STACKTOP = sp;return ($1|0);
}
function ___syscall_ret($r) {
 $r = $r|0;
 var $call = 0, $cmp = 0, $retval$0 = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($r>>>0)>(4294963200);
 if ($cmp) {
  $sub = (0 - ($r))|0;
  $call = (___errno_location()|0);
  HEAP32[$call>>2] = $sub;
  $retval$0 = -1;
 } else {
  $retval$0 = $r;
 }
 return ($retval$0|0);
}
function ___errno_location() {
 var $0 = 0, $1 = 0, $call$i = 0, $errno_ptr = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[1338]|0;
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $retval$0 = 5396;
 } else {
  $call$i = (_pthread_self()|0);
  $errno_ptr = ((($call$i)) + 64|0);
  $1 = HEAP32[$errno_ptr>>2]|0;
  $retval$0 = $1;
 }
 return ($retval$0|0);
}
function _cleanup_387($p) {
 $p = $p|0;
 var $0 = 0, $lockcount = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lockcount = ((($p)) + 68|0);
 $0 = HEAP32[$lockcount>>2]|0;
 $tobool = ($0|0)==(0);
 if ($tobool) {
  ___unlockfile($p);
 }
 return;
}
function ___unlockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___stdout_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $and = 0, $call = 0, $call3 = 0, $fd = 0, $lbf = 0, $tio = 0, $tobool = 0, $tobool2 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $vararg_buffer = sp;
 $tio = sp + 12|0;
 $write = ((($f)) + 36|0);
 HEAP32[$write>>2] = 2;
 $0 = HEAP32[$f>>2]|0;
 $and = $0 & 64;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $fd = ((($f)) + 60|0);
  $1 = HEAP32[$fd>>2]|0;
  HEAP32[$vararg_buffer>>2] = $1;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = 21505;
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  HEAP32[$vararg_ptr2>>2] = $tio;
  $call = (___syscall54(54,($vararg_buffer|0))|0);
  $tobool2 = ($call|0)==(0);
  if (!($tobool2)) {
   $lbf = ((($f)) + 75|0);
   HEAP8[$lbf>>0] = -1;
  }
 }
 $call3 = (___stdio_write($f,$buf,$len)|0);
 STACKTOP = sp;return ($call3|0);
}
function _vfprintf($f,$fmt,$ap) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $$call21 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $add$ptr = 0, $and = 0, $and11 = 0, $and36 = 0, $ap2 = 0, $buf = 0, $buf_size = 0, $call = 0, $call21 = 0, $call2130 = 0, $call6 = 0;
 var $cmp = 0, $cmp5 = 0, $cmp7 = 0, $cond = 0, $internal_buf = 0, $lock = 0, $mode = 0, $nl_arg = 0, $nl_type = 0, $or = 0, $ret$1 = 0, $ret$1$ = 0, $retval$0 = 0, $tobool = 0, $tobool22 = 0, $tobool26 = 0, $tobool37 = 0, $tobool41 = 0, $vacopy_currentptr = 0, $wbase = 0;
 var $wend = 0, $wpos = 0, $write = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(224|0);
 $ap2 = sp + 120|0;
 $nl_type = sp + 80|0;
 $nl_arg = sp;
 $internal_buf = sp + 136|0;
 dest=$nl_type; stop=dest+40|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 $vacopy_currentptr = HEAP32[$ap>>2]|0;
 HEAP32[$ap2>>2] = $vacopy_currentptr;
 $call = (_printf_core(0,$fmt,$ap2,$nl_arg,$nl_type)|0);
 $cmp = ($call|0)<(0);
 if ($cmp) {
  $retval$0 = -1;
 } else {
  $lock = ((($f)) + 76|0);
  $0 = HEAP32[$lock>>2]|0;
  $cmp5 = ($0|0)>(-1);
  if ($cmp5) {
   $call6 = (___lockfile($f)|0);
   $cond = $call6;
  } else {
   $cond = 0;
  }
  $1 = HEAP32[$f>>2]|0;
  $and = $1 & 32;
  $mode = ((($f)) + 74|0);
  $2 = HEAP8[$mode>>0]|0;
  $cmp7 = ($2<<24>>24)<(1);
  if ($cmp7) {
   $and11 = $1 & -33;
   HEAP32[$f>>2] = $and11;
  }
  $buf_size = ((($f)) + 48|0);
  $3 = HEAP32[$buf_size>>2]|0;
  $tobool = ($3|0)==(0);
  if ($tobool) {
   $buf = ((($f)) + 44|0);
   $4 = HEAP32[$buf>>2]|0;
   HEAP32[$buf>>2] = $internal_buf;
   $wbase = ((($f)) + 28|0);
   HEAP32[$wbase>>2] = $internal_buf;
   $wpos = ((($f)) + 20|0);
   HEAP32[$wpos>>2] = $internal_buf;
   HEAP32[$buf_size>>2] = 80;
   $add$ptr = ((($internal_buf)) + 80|0);
   $wend = ((($f)) + 16|0);
   HEAP32[$wend>>2] = $add$ptr;
   $call21 = (_printf_core($f,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $tobool22 = ($4|0)==(0|0);
   if ($tobool22) {
    $ret$1 = $call21;
   } else {
    $write = ((($f)) + 36|0);
    $5 = HEAP32[$write>>2]|0;
    (FUNCTION_TABLE_iiii[$5 & 31]($f,0,0)|0);
    $6 = HEAP32[$wpos>>2]|0;
    $tobool26 = ($6|0)==(0|0);
    $$call21 = $tobool26 ? -1 : $call21;
    HEAP32[$buf>>2] = $4;
    HEAP32[$buf_size>>2] = 0;
    HEAP32[$wend>>2] = 0;
    HEAP32[$wbase>>2] = 0;
    HEAP32[$wpos>>2] = 0;
    $ret$1 = $$call21;
   }
  } else {
   $call2130 = (_printf_core($f,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $ret$1 = $call2130;
  }
  $7 = HEAP32[$f>>2]|0;
  $and36 = $7 & 32;
  $tobool37 = ($and36|0)==(0);
  $ret$1$ = $tobool37 ? $ret$1 : -1;
  $or = $7 | $and;
  HEAP32[$f>>2] = $or;
  $tobool41 = ($cond|0)==(0);
  if (!($tobool41)) {
   ___unlockfile($f);
  }
  $retval$0 = $ret$1$;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function _printf_core($f,$fmt,$ap,$nl_arg,$nl_type) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 $nl_arg = $nl_arg|0;
 $nl_type = $nl_type|0;
 var $$ = 0, $$$i = 0, $$272 = 0, $$396$i = 0.0, $$404$i = 0.0, $$add$ptr258 = 0, $$l10n$0 = 0, $$p$i = 0, $$p$inc468$i = 0, $$pr = 0, $$pr$i = 0, $$pr477$i = 0, $$pre = 0, $$pre$i = 0, $$pre334 = 0, $$pre335 = 0, $$pre336 = 0, $$pre558$i = 0, $$pre560$i = 0, $$pre562$i = 0;
 var $$sub514$i = 0, $$sub562$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0;
 var $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0;
 var $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0;
 var $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0;
 var $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0.0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0;
 var $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0;
 var $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0;
 var $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0;
 var $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0;
 var $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0;
 var $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0;
 var $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0;
 var $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0;
 var $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $a$0 = 0, $a$1 = 0, $a$1$lcssa$i = 0, $a$1549$i = 0, $a$2 = 0, $a$2$ph$i = 0, $a$3$lcssa$i = 0;
 var $a$3539$i = 0, $a$5$lcssa$i = 0, $a$5521$i = 0, $a$6$i = 0, $a$8$i = 0, $a$9$ph$i = 0, $add = 0, $add$i = 0, $add$i203 = 0, $add$i240 = 0, $add$ptr = 0, $add$ptr139 = 0, $add$ptr206 = 0, $add$ptr213$i = 0, $add$ptr258 = 0, $add$ptr311$i = 0, $add$ptr311$z$4$i = 0, $add$ptr341 = 0, $add$ptr354$i = 0, $add$ptr358$i = 0;
 var $add$ptr360 = 0, $add$ptr373$i = 0, $add$ptr43 = 0, $add$ptr43$arrayidx31 = 0, $add$ptr442$i = 0, $add$ptr442$z$3$i = 0, $add$ptr474 = 0, $add$ptr65$i = 0, $add$ptr671$i = 0, $add$ptr742$i = 0, $add$ptr88 = 0, $add113$i = 0, $add150$i = 0, $add154$i = 0, $add163$i = 0, $add165$i = 0, $add270 = 0, $add273$i = 0, $add275$i = 0, $add284$i = 0;
 var $add313$i = 0, $add323 = 0, $add355$i = 0, $add396 = 0, $add410$i = 0.0, $add413 = 0, $add414$i = 0, $add442 = 0, $add477$neg$i = 0, $add561$i = 0, $add608$i = 0, $add612$i = 0, $add620$i = 0, $add653$i = 0, $add67$i = 0, $add737$i = 0, $add810$i = 0, $add87$i = 0.0, $add90$i = 0.0, $and = 0;
 var $and$i = 0, $and$i$i = 0, $and$i216 = 0, $and$i231 = 0, $and$i239 = 0, $and$i245 = 0, $and$i406$i = 0, $and$i412$i = 0, $and$i418$i = 0, $and$i424$i = 0, $and$i430$i = 0, $and$i436$i = 0, $and$i442$i = 0, $and$i448$i = 0, $and$i454$i = 0, $and$i460$i = 0, $and$i466$i = 0, $and$i472$i = 0, $and12$i = 0, $and134$i = 0;
 var $and211 = 0, $and215 = 0, $and217 = 0, $and220 = 0, $and250 = 0, $and255 = 0, $and264 = 0, $and282$i = 0, $and290 = 0, $and295 = 0, $and310 = 0, $and310$fl$4 = 0, $and36$i = 0, $and379$i = 0, $and483$i = 0, $and610$pre$phi$iZ2D = 0, $and62$i = 0, $arg = 0, $arglist_current = 0, $arglist_current2 = 0;
 var $arglist_next = 0, $arglist_next3 = 0, $argpos$0 = 0, $arraydecay208$add$ptr213$i = 0, $arrayidx$i = 0, $arrayidx$i236 = 0, $arrayidx114 = 0, $arrayidx117$i = 0, $arrayidx119 = 0, $arrayidx124 = 0, $arrayidx132 = 0, $arrayidx16 = 0, $arrayidx174 = 0, $arrayidx193 = 0, $arrayidx251$i = 0, $arrayidx31 = 0, $arrayidx35 = 0, $arrayidx371 = 0, $arrayidx453$i = 0, $arrayidx470 = 0;
 var $arrayidx482 = 0, $arrayidx489$i = 0, $arrayidx68 = 0, $arrayidx73 = 0, $arrayidx81 = 0, $big$i = 0, $buf = 0, $buf$i = 0, $call = 0, $call345 = 0, $call346 = 0, $call357 = 0, $call385 = 0, $call412 = 0, $call55$i = 0.0, $carry$0544$i = 0, $carry262$0535$i = 0, $cmp = 0, $cmp1 = 0, $cmp103$i = 0;
 var $cmp105 = 0, $cmp111 = 0, $cmp116 = 0, $cmp126 = 0, $cmp127$i = 0, $cmp13 = 0, $cmp147$i = 0, $cmp166 = 0, $cmp177 = 0, $cmp18 = 0, $cmp182 = 0, $cmp185 = 0, $cmp188$i = 0, $cmp196$i = 0, $cmp205$i = 0, $cmp212 = 0, $cmp225$i = 0, $cmp225547$i = 0, $cmp228$i = 0, $cmp235$i = 0;
 var $cmp235543$i = 0, $cmp241 = 0, $cmp249$i = 0, $cmp259$i = 0, $cmp259537$i = 0, $cmp265$i = 0, $cmp271 = 0, $cmp277$i = 0, $cmp277533$i = 0, $cmp299$i = 0, $cmp307 = 0, $cmp308$i = 0, $cmp315$i = 0, $cmp324 = 0, $cmp324$i = 0, $cmp324529$i = 0, $cmp333$i = 0, $cmp338$i = 0, $cmp350$i = 0, $cmp363525$i = 0;
 var $cmp37 = 0, $cmp374$i = 0, $cmp378 = 0, $cmp378308 = 0, $cmp38$i = 0, $cmp385$i = 0, $cmp386 = 0, $cmp390$i = 0, $cmp391 = 0, $cmp398 = 0, $cmp403$i = 0, $cmp405 = 0, $cmp405318 = 0, $cmp411$i = 0, $cmp414 = 0, $cmp416$i = 0, $cmp416519$i = 0, $cmp420$i = 0, $cmp422 = 0, $cmp433$i = 0;
 var $cmp433515$i = 0, $cmp435 = 0, $cmp443 = 0, $cmp443$i = 0, $cmp450$i = 0, $cmp450$lcssa$i = 0, $cmp467 = 0, $cmp470$i = 0, $cmp473$i = 0, $cmp479 = 0, $cmp48$i = 0, $cmp495$i = 0, $cmp495511$i = 0, $cmp50 = 0, $cmp50302 = 0, $cmp505$i = 0, $cmp515$i = 0, $cmp528$i = 0, $cmp563$i = 0, $cmp577$i = 0;
 var $cmp59$i = 0, $cmp614$i = 0, $cmp617$i = 0, $cmp623$i = 0, $cmp636$i = 0, $cmp636506$i = 0, $cmp65 = 0, $cmp660$i = 0, $cmp665$i = 0, $cmp673$i = 0, $cmp678$i = 0, $cmp678491$i = 0, $cmp686$i = 0, $cmp707$i = 0, $cmp707486$i = 0, $cmp710$i = 0, $cmp710487$i = 0, $cmp722$i = 0, $cmp722483$i = 0, $cmp727$i = 0;
 var $cmp745$i = 0, $cmp748$i = 0, $cmp748499$i = 0, $cmp75 = 0, $cmp760$i = 0, $cmp765$i = 0, $cmp770$i = 0, $cmp770495$i = 0, $cmp777$i = 0, $cmp790$i = 0, $cmp818$i = 0, $cmp82$i = 0, $cmp94$i = 0, $cmp97 = 0, $cnt$0 = 0, $cnt$1 = 0, $cond$i = 0, $cond100$i = 0, $cond233$i = 0, $cond246 = 0;
 var $cond271$i = 0, $cond304$i = 0, $cond355 = 0, $cond427 = 0, $cond43$i = 0, $cond53$i = 0, $cond629$i = 0, $cond732$i = 0, $cond800$i = 0, $conv$i = 0, $conv$i205 = 0, $conv1$i = 0, $conv111$i = 0, $conv114$i = 0, $conv116$i = 0, $conv118393$i = 0, $conv120 = 0, $conv121$i = 0, $conv123$i = 0.0, $conv134 = 0;
 var $conv164 = 0, $conv175 = 0, $conv208 = 0, $conv216$i = 0, $conv218$i = 0.0, $conv230 = 0, $conv233 = 0, $conv32 = 0, $conv4$i = 0, $conv4$i197 = 0, $conv4$i211 = 0, $conv48 = 0, $conv48300 = 0, $conv58 = 0, $conv644$i = 0, $conv646$i = 0, $conv69 = 0, $conv83 = 0, $d$0$i = 0, $d$0542$i = 0;
 var $d$0545$i = 0, $d$1534$i = 0, $d$2$lcssa$i = 0, $d$2520$i = 0, $d$4$i = 0, $d$5494$i = 0, $d$6488$i = 0, $d$7500$i = 0, $dec$i = 0, $dec476$i = 0, $dec481$i = 0, $dec78$i = 0, $div274$i = 0, $div356$i = 0, $div378$i = 0, $div384$i = 0, $e$0531$i = 0, $e$1$i = 0, $e$2517$i = 0, $e$4$i = 0;
 var $e$5$ph$i = 0, $e2$i = 0, $ebuf0$i = 0, $estr$0$i = 0, $estr$1$lcssa$i = 0, $estr$1507$i = 0, $estr$2$i = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded4 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $fl$0275 = 0, $fl$0304 = 0;
 var $fl$1 = 0, $fl$1$and220 = 0, $fl$3 = 0, $fl$4 = 0, $fl$6 = 0, $i$0$lcssa = 0, $i$0$lcssa343 = 0, $i$0310 = 0, $i$0530$i = 0, $i$07$i = 0, $i$07$i201 = 0, $i$1$lcssa$i = 0, $i$1319 = 0, $i$1526$i = 0, $i$2292 = 0, $i$2516$i = 0, $i$3289 = 0, $i$3512$i = 0, $i137 = 0, $i86 = 0;
 var $idxprom$i = 0, $inc = 0, $inc$i = 0, $inc425$i = 0, $inc438$i = 0, $inc468$i = 0, $inc489 = 0, $inc500$i = 0, $incdec$ptr = 0, $incdec$ptr$i = 0, $incdec$ptr$i204 = 0, $incdec$ptr$i212 = 0, $incdec$ptr$i225 = 0, $incdec$ptr106$i = 0, $incdec$ptr112$i = 0, $incdec$ptr115$i = 0, $incdec$ptr122$i = 0, $incdec$ptr137$i = 0, $incdec$ptr170 = 0, $incdec$ptr217$i = 0;
 var $incdec$ptr23 = 0, $incdec$ptr246$i = 0, $incdec$ptr288$i = 0, $incdec$ptr292$a$3$i = 0, $incdec$ptr292$a$3567$i = 0, $incdec$ptr292$a$3569$i = 0, $incdec$ptr292$i = 0, $incdec$ptr292566$i = 0, $incdec$ptr296$i = 0, $incdec$ptr384 = 0, $incdec$ptr411 = 0, $incdec$ptr419$i = 0, $incdec$ptr423$i = 0, $incdec$ptr62 = 0, $incdec$ptr639$i = 0, $incdec$ptr645$i = 0, $incdec$ptr647$i = 0, $incdec$ptr681$i = 0, $incdec$ptr689$i = 0, $incdec$ptr698$i = 0;
 var $incdec$ptr725$i = 0, $incdec$ptr734$i = 0, $incdec$ptr773$i = 0, $incdec$ptr776$i = 0, $incdec$ptr808$i = 0, $isdigit = 0, $isdigit$i = 0, $isdigit$i207 = 0, $isdigit188 = 0, $isdigit190 = 0, $isdigit6$i = 0, $isdigit6$i199 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$i = 0, $isdigittmp$i206 = 0, $isdigittmp187 = 0, $isdigittmp189 = 0, $isdigittmp5$i = 0, $isdigittmp5$i198 = 0;
 var $isdigittmp8$i = 0, $isdigittmp8$i200 = 0, $j$0$i = 0, $j$0524$i = 0, $j$0527$i = 0, $j$1513$i = 0, $j$2$i = 0, $l$0 = 0, $l$0$i = 0, $l$1$i = 0, $l$1309 = 0, $l$2 = 0, $l10n$0 = 0, $l10n$0$phi = 0, $l10n$1 = 0, $l10n$2 = 0, $l10n$3 = 0, $land$ext$neg$i = 0, $lnot$ext = 0, $lnot$i = 0;
 var $lnot455$i = 0, $lnot484 = 0, $lor$ext$i = 0, $mb = 0, $mul$i = 0, $mul$i202 = 0, $mul$i241 = 0.0, $mul125$i = 0.0, $mul202$i = 0.0, $mul220$i = 0.0, $mul286$i = 0, $mul322$i = 0, $mul328$i = 0, $mul335$i = 0, $mul349$i = 0, $mul367$i = 0, $mul406$i = 0.0, $mul407$i = 0.0, $mul431$i = 0, $mul437$i = 0;
 var $mul499$i = 0, $mul513$i = 0, $mul80$i = 0.0, $notlhs$i = 0, $notrhs$i = 0, $or = 0, $or$cond = 0, $or$cond$i = 0, $or$cond1$not$i = 0, $or$cond192 = 0, $or$cond193 = 0, $or$cond195 = 0, $or$cond2$i = 0, $or$cond321 = 0, $or$cond395$i = 0, $or$cond397$i = 0, $or$cond401$i = 0, $or$i = 0, $or$i242 = 0, $or100 = 0;
 var $or100$fl$0 = 0, $or120$i = 0, $or247 = 0, $or504$i = 0, $or613$i = 0, $p$0 = 0, $p$0$add270 = 0, $p$1 = 0, $p$2 = 0, $p$2$add323 = 0, $p$3 = 0, $p$4340 = 0, $p$5 = 0, $p$addr$2$$sub514398$i = 0, $p$addr$2$$sub562399$i = 0, $p$addr$2$i = 0, $p$addr$3$i = 0, $p$addr$4$lcssa$i = 0, $p$addr$4489$i = 0, $p$addr$5$lcssa$i = 0;
 var $p$addr$5501$i = 0, $pl$0 = 0, $pl$0$i = 0, $pl$1 = 0, $pl$1$i = 0, $pl$2 = 0, $prefix$0 = 0, $prefix$0$add$ptr65$i = 0, $prefix$0$i = 0, $prefix$1 = 0, $prefix$2 = 0, $r$0$a$9$i = 0, $re$1482$i = 0, $rem360$i = 0, $rem370$i = 0, $rem494$i = 0, $rem494510$i = 0, $retval$0 = 0, $retval$0$i = 0, $round$0481$i = 0.0;
 var $round377$1$i = 0.0, $s$0 = 0, $s$0$i = 0, $s$1 = 0, $s$1$i = 0, $s$2$lcssa = 0, $s$2294 = 0, $s$4 = 0, $s$6 = 0, $s$7 = 0, $s$addr$0$lcssa$i = 0, $s$addr$0$lcssa$i229 = 0, $s$addr$06$i = 0, $s$addr$06$i221 = 0, $s35$0$i = 0, $s668$0492$i = 0, $s668$1$i = 0, $s715$0$lcssa$i = 0, $s715$0484$i = 0, $s753$0$i = 0;
 var $s753$1496$i = 0, $s753$2$i = 0, $scevgep556$i = 0, $scevgep556557$i = 0, $shl = 0, $shl280$i = 0, $shl60 = 0, $shr = 0, $shr283$i = 0, $shr285$i = 0, $small$0$i = 0.0, $small$1$i = 0.0, $st$0 = 0, $storemerge = 0, $storemerge186278 = 0, $storemerge186303 = 0, $storemerge191 = 0, $sub = 0, $sub$i = 0.0, $sub$ptr$div$i = 0;
 var $sub$ptr$div321$i = 0, $sub$ptr$div347$i = 0, $sub$ptr$div430$i = 0, $sub$ptr$div511$i = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast160$i = 0, $sub$ptr$lhs$cast305$i = 0, $sub$ptr$lhs$cast318 = 0, $sub$ptr$lhs$cast318$i = 0, $sub$ptr$lhs$cast344$i = 0, $sub$ptr$lhs$cast362 = 0, $sub$ptr$lhs$cast432 = 0, $sub$ptr$lhs$cast508$i = 0, $sub$ptr$lhs$cast694$i = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast152$i = 0, $sub$ptr$rhs$cast268 = 0, $sub$ptr$rhs$cast306$i = 0;
 var $sub$ptr$rhs$cast319 = 0, $sub$ptr$rhs$cast319$i = 0, $sub$ptr$rhs$cast363 = 0, $sub$ptr$rhs$cast428$i = 0, $sub$ptr$rhs$cast433 = 0, $sub$ptr$rhs$cast634$i = 0, $sub$ptr$rhs$cast634504$i = 0, $sub$ptr$rhs$cast649$i = 0, $sub$ptr$rhs$cast695$i = 0, $sub$ptr$rhs$cast788$i = 0, $sub$ptr$rhs$cast812$i = 0, $sub$ptr$sub = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub145$i = 0, $sub$ptr$sub153$i = 0, $sub$ptr$sub159$i = 0, $sub$ptr$sub162$i = 0, $sub$ptr$sub172$i = 0, $sub$ptr$sub175$i = 0, $sub$ptr$sub269 = 0;
 var $sub$ptr$sub307$i = 0, $sub$ptr$sub320 = 0, $sub$ptr$sub320$i = 0, $sub$ptr$sub346$i = 0, $sub$ptr$sub364 = 0, $sub$ptr$sub429$i = 0, $sub$ptr$sub434 = 0, $sub$ptr$sub434$p$5 = 0, $sub$ptr$sub510$i = 0, $sub$ptr$sub635$i = 0, $sub$ptr$sub635505$i = 0, $sub$ptr$sub650$i = 0, $sub$ptr$sub650$pn$i = 0, $sub$ptr$sub696$i = 0, $sub$ptr$sub789$i = 0, $sub$ptr$sub813$i = 0, $sub101 = 0, $sub101$w$0 = 0, $sub124$i = 0.0, $sub135 = 0;
 var $sub146$i = 0, $sub165 = 0, $sub176 = 0, $sub181$i = 0, $sub203$i = 0, $sub219$i = 0.0, $sub256$i = 0, $sub264$i = 0, $sub281$i = 0, $sub336$i = 0, $sub343$i = 0, $sub357$i = 0, $sub390 = 0, $sub409$i = 0, $sub478$i = 0, $sub480$i = 0, $sub49 = 0, $sub49301 = 0, $sub49305 = 0, $sub514$i = 0;
 var $sub562$i = 0, $sub59 = 0, $sub626$le$i = 0, $sub735$i = 0, $sub74$i = 0, $sub806$i = 0, $sub84 = 0, $sub85$i = 0.0, $sub86$i = 0.0, $sub88$i = 0.0, $sub91$i = 0.0, $sub97$i = 0, $sum = 0, $t$0 = 0, $t$1 = 0, $t$addr$0$i = 0, $t$addr$1$i = 0, $tobool = 0, $tobool$i = 0, $tobool$i$i = 0;
 var $tobool$i217 = 0, $tobool$i232 = 0, $tobool$i246 = 0, $tobool$i407$i = 0, $tobool$i413$i = 0, $tobool$i419$i = 0, $tobool$i425$i = 0, $tobool$i431$i = 0, $tobool$i437$i = 0, $tobool$i443$i = 0, $tobool$i449$i = 0, $tobool$i455$i = 0, $tobool$i461$i = 0, $tobool$i467$i = 0, $tobool$i473$i = 0, $tobool13$i = 0, $tobool135$i = 0, $tobool139$i = 0, $tobool140$i = 0, $tobool141 = 0;
 var $tobool179 = 0, $tobool209 = 0, $tobool218 = 0, $tobool222$i = 0, $tobool244$i = 0, $tobool25 = 0, $tobool256 = 0, $tobool265 = 0, $tobool28 = 0, $tobool290$i = 0, $tobool290565$i = 0, $tobool291 = 0, $tobool294$i = 0, $tobool296 = 0, $tobool315 = 0, $tobool341$i = 0, $tobool350 = 0, $tobool358 = 0, $tobool37$i = 0, $tobool371$i = 0;
 var $tobool380$i = 0, $tobool381 = 0, $tobool400$i = 0, $tobool408 = 0, $tobool460 = 0, $tobool463 = 0, $tobool471 = 0, $tobool484$i = 0, $tobool490$i = 0, $tobool55 = 0, $tobool56$i = 0, $tobool63$i = 0, $tobool76$i = 0, $tobool76563$i = 0, $tobool781$i = 0, $tobool79$i = 0, $tobool9$i = 0, $tobool90 = 0, $trunc = 0, $w$0 = 0;
 var $w$1 = 0, $w$2 = 0, $w$add165$i = 0, $w$add653$i = 0, $wc = 0, $ws$0311 = 0, $ws$1320 = 0, $xor = 0, $xor$i = 0, $xor167$i = 0, $xor186$i = 0, $xor450 = 0, $xor458 = 0, $xor655$i = 0, $xor816$i = 0, $y$addr$0$i = 0.0, $y$addr$1$i = 0.0, $y$addr$2$i = 0.0, $y$addr$3$i = 0.0, $y$addr$4$i = 0.0;
 var $z$0$i = 0, $z$0$lcssa = 0, $z$0295 = 0, $z$1 = 0, $z$1$lcssa$i = 0, $z$1548$i = 0, $z$2 = 0, $z$2$i = 0, $z$3$lcssa$i = 0, $z$3538$i = 0, $z$4$i = 0, $z$7$add$ptr742$i = 0, $z$7$i = 0, $z$7$ph$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(624|0);
 $big$i = sp + 24|0;
 $e2$i = sp + 16|0;
 $buf$i = sp + 588|0;
 $ebuf0$i = sp + 576|0;
 $arg = sp;
 $buf = sp + 536|0;
 $wc = sp + 8|0;
 $mb = sp + 528|0;
 $tobool25 = ($f|0)!=(0|0);
 $add$ptr206 = ((($buf)) + 40|0);
 $sub$ptr$lhs$cast318 = $add$ptr206;
 $add$ptr341 = ((($buf)) + 39|0);
 $arrayidx371 = ((($wc)) + 4|0);
 $sub$ptr$rhs$cast$i = $buf$i;
 $0 = (0 - ($sub$ptr$rhs$cast$i))|0;
 $arrayidx$i236 = ((($ebuf0$i)) + 12|0);
 $incdec$ptr106$i = ((($ebuf0$i)) + 11|0);
 $sub$ptr$lhs$cast160$i = $arrayidx$i236;
 $sub$ptr$sub159$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast$i))|0;
 $sub$ptr$sub145$i = (-2 - ($sub$ptr$rhs$cast$i))|0;
 $sub$ptr$sub153$i = (($sub$ptr$lhs$cast160$i) + 2)|0;
 $add$ptr213$i = ((($big$i)) + 288|0);
 $add$ptr671$i = ((($buf$i)) + 9|0);
 $sub$ptr$lhs$cast694$i = $add$ptr671$i;
 $incdec$ptr689$i = ((($buf$i)) + 8|0);
 $cnt$0 = 0;$l$0 = 0;$l10n$0 = 0;$s$0 = $fmt;
 L1: while(1) {
  $cmp = ($cnt$0|0)>(-1);
  do {
   if ($cmp) {
    $sub = (2147483647 - ($cnt$0))|0;
    $cmp1 = ($l$0|0)>($sub|0);
    if ($cmp1) {
     $call = (___errno_location()|0);
     HEAP32[$call>>2] = 75;
     $cnt$1 = -1;
     break;
    } else {
     $add = (($l$0) + ($cnt$0))|0;
     $cnt$1 = $add;
     break;
    }
   } else {
    $cnt$1 = $cnt$0;
   }
  } while(0);
  $1 = HEAP8[$s$0>>0]|0;
  $tobool = ($1<<24>>24)==(0);
  if ($tobool) {
   label = 243;
   break;
  } else {
   $2 = $1;$s$1 = $s$0;
  }
  L9: while(1) {
   switch ($2<<24>>24) {
   case 37:  {
    $s$2294 = $s$1;$z$0295 = $s$1;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $s$2$lcssa = $s$1;$z$0$lcssa = $s$1;
    break L9;
    break;
   }
   default: {
   }
   }
   $incdec$ptr = ((($s$1)) + 1|0);
   $$pre = HEAP8[$incdec$ptr>>0]|0;
   $2 = $$pre;$s$1 = $incdec$ptr;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $arrayidx16 = ((($s$2294)) + 1|0);
     $3 = HEAP8[$arrayidx16>>0]|0;
     $cmp18 = ($3<<24>>24)==(37);
     if (!($cmp18)) {
      $s$2$lcssa = $s$2294;$z$0$lcssa = $z$0295;
      break L12;
     }
     $incdec$ptr23 = ((($z$0295)) + 1|0);
     $add$ptr = ((($s$2294)) + 2|0);
     $4 = HEAP8[$add$ptr>>0]|0;
     $cmp13 = ($4<<24>>24)==(37);
     if ($cmp13) {
      $s$2294 = $add$ptr;$z$0295 = $incdec$ptr23;
      label = 9;
     } else {
      $s$2$lcssa = $add$ptr;$z$0$lcssa = $incdec$ptr23;
      break;
     }
    }
   }
  } while(0);
  $sub$ptr$lhs$cast = $z$0$lcssa;
  $sub$ptr$rhs$cast = $s$0;
  $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
  if ($tobool25) {
   $5 = HEAP32[$f>>2]|0;
   $and$i = $5 & 32;
   $tobool$i = ($and$i|0)==(0);
   if ($tobool$i) {
    (___fwritex($s$0,$sub$ptr$sub,$f)|0);
   }
  }
  $tobool28 = ($sub$ptr$sub|0)==(0);
  if (!($tobool28)) {
   $l10n$0$phi = $l10n$0;$cnt$0 = $cnt$1;$l$0 = $sub$ptr$sub;$s$0 = $s$2$lcssa;$l10n$0 = $l10n$0$phi;
   continue;
  }
  $arrayidx31 = ((($s$2$lcssa)) + 1|0);
  $6 = HEAP8[$arrayidx31>>0]|0;
  $conv32 = $6 << 24 >> 24;
  $isdigittmp = (($conv32) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $arrayidx35 = ((($s$2$lcssa)) + 2|0);
   $7 = HEAP8[$arrayidx35>>0]|0;
   $cmp37 = ($7<<24>>24)==(36);
   $add$ptr43 = ((($s$2$lcssa)) + 3|0);
   $add$ptr43$arrayidx31 = $cmp37 ? $add$ptr43 : $arrayidx31;
   $$l10n$0 = $cmp37 ? 1 : $l10n$0;
   $isdigittmp$ = $cmp37 ? $isdigittmp : -1;
   $$pre334 = HEAP8[$add$ptr43$arrayidx31>>0]|0;
   $8 = $$pre334;$argpos$0 = $isdigittmp$;$l10n$1 = $$l10n$0;$storemerge = $add$ptr43$arrayidx31;
  } else {
   $8 = $6;$argpos$0 = -1;$l10n$1 = $l10n$0;$storemerge = $arrayidx31;
  }
  $conv48300 = $8 << 24 >> 24;
  $sub49301 = (($conv48300) + -32)|0;
  $cmp50302 = ($sub49301>>>0)<(32);
  L25: do {
   if ($cmp50302) {
    $9 = $8;$fl$0304 = 0;$storemerge186303 = $storemerge;$sub49305 = $sub49301;
    while(1) {
     $shl = 1 << $sub49305;
     $and = $shl & 75913;
     $tobool55 = ($and|0)==(0);
     if ($tobool55) {
      $11 = $9;$fl$0275 = $fl$0304;$storemerge186278 = $storemerge186303;
      break L25;
     }
     $conv58 = $9 << 24 >> 24;
     $sub59 = (($conv58) + -32)|0;
     $shl60 = 1 << $sub59;
     $or = $shl60 | $fl$0304;
     $incdec$ptr62 = ((($storemerge186303)) + 1|0);
     $10 = HEAP8[$incdec$ptr62>>0]|0;
     $conv48 = $10 << 24 >> 24;
     $sub49 = (($conv48) + -32)|0;
     $cmp50 = ($sub49>>>0)<(32);
     if ($cmp50) {
      $9 = $10;$fl$0304 = $or;$storemerge186303 = $incdec$ptr62;$sub49305 = $sub49;
     } else {
      $11 = $10;$fl$0275 = $or;$storemerge186278 = $incdec$ptr62;
      break;
     }
    }
   } else {
    $11 = $8;$fl$0275 = 0;$storemerge186278 = $storemerge;
   }
  } while(0);
  $cmp65 = ($11<<24>>24)==(42);
  do {
   if ($cmp65) {
    $arrayidx68 = ((($storemerge186278)) + 1|0);
    $12 = HEAP8[$arrayidx68>>0]|0;
    $conv69 = $12 << 24 >> 24;
    $isdigittmp189 = (($conv69) + -48)|0;
    $isdigit190 = ($isdigittmp189>>>0)<(10);
    if ($isdigit190) {
     $arrayidx73 = ((($storemerge186278)) + 2|0);
     $13 = HEAP8[$arrayidx73>>0]|0;
     $cmp75 = ($13<<24>>24)==(36);
     if ($cmp75) {
      $arrayidx81 = (($nl_type) + ($isdigittmp189<<2)|0);
      HEAP32[$arrayidx81>>2] = 10;
      $14 = HEAP8[$arrayidx68>>0]|0;
      $conv83 = $14 << 24 >> 24;
      $sub84 = (($conv83) + -48)|0;
      $i86 = (($nl_arg) + ($sub84<<3)|0);
      $15 = $i86;
      $16 = $15;
      $17 = HEAP32[$16>>2]|0;
      $18 = (($15) + 4)|0;
      $19 = $18;
      $20 = HEAP32[$19>>2]|0;
      $add$ptr88 = ((($storemerge186278)) + 3|0);
      $l10n$2 = 1;$storemerge191 = $add$ptr88;$w$0 = $17;
     } else {
      label = 24;
     }
    } else {
     label = 24;
    }
    if ((label|0) == 24) {
     label = 0;
     $tobool90 = ($l10n$1|0)==(0);
     if (!($tobool90)) {
      $retval$0 = -1;
      break L1;
     }
     if (!($tobool25)) {
      $$pr = $12;$fl$1 = $fl$0275;$l10n$3 = 0;$s$4 = $arrayidx68;$w$1 = 0;
      break;
     }
     $arglist_current = HEAP32[$ap>>2]|0;
     $21 = $arglist_current;
     $22 = ((0) + 4|0);
     $expanded4 = $22;
     $expanded = (($expanded4) - 1)|0;
     $23 = (($21) + ($expanded))|0;
     $24 = ((0) + 4|0);
     $expanded8 = $24;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $25 = $23 & $expanded6;
     $26 = $25;
     $27 = HEAP32[$26>>2]|0;
     $arglist_next = ((($26)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next;
     $l10n$2 = 0;$storemerge191 = $arrayidx68;$w$0 = $27;
    }
    $cmp97 = ($w$0|0)<(0);
    $or100 = $fl$0275 | 8192;
    $sub101 = (0 - ($w$0))|0;
    $or100$fl$0 = $cmp97 ? $or100 : $fl$0275;
    $sub101$w$0 = $cmp97 ? $sub101 : $w$0;
    $$pre335 = HEAP8[$storemerge191>>0]|0;
    $$pr = $$pre335;$fl$1 = $or100$fl$0;$l10n$3 = $l10n$2;$s$4 = $storemerge191;$w$1 = $sub101$w$0;
   } else {
    $conv4$i = $11 << 24 >> 24;
    $isdigittmp5$i = (($conv4$i) + -48)|0;
    $isdigit6$i = ($isdigittmp5$i>>>0)<(10);
    if ($isdigit6$i) {
     $28 = $storemerge186278;$i$07$i = 0;$isdigittmp8$i = $isdigittmp5$i;
     while(1) {
      $mul$i = ($i$07$i*10)|0;
      $add$i = (($mul$i) + ($isdigittmp8$i))|0;
      $incdec$ptr$i = ((($28)) + 1|0);
      $29 = HEAP8[$incdec$ptr$i>>0]|0;
      $conv$i = $29 << 24 >> 24;
      $isdigittmp$i = (($conv$i) + -48)|0;
      $isdigit$i = ($isdigittmp$i>>>0)<(10);
      if ($isdigit$i) {
       $28 = $incdec$ptr$i;$i$07$i = $add$i;$isdigittmp8$i = $isdigittmp$i;
      } else {
       break;
      }
     }
     $cmp105 = ($add$i|0)<(0);
     if ($cmp105) {
      $retval$0 = -1;
      break L1;
     } else {
      $$pr = $29;$fl$1 = $fl$0275;$l10n$3 = $l10n$1;$s$4 = $incdec$ptr$i;$w$1 = $add$i;
     }
    } else {
     $$pr = $11;$fl$1 = $fl$0275;$l10n$3 = $l10n$1;$s$4 = $storemerge186278;$w$1 = 0;
    }
   }
  } while(0);
  $cmp111 = ($$pr<<24>>24)==(46);
  L45: do {
   if ($cmp111) {
    $arrayidx114 = ((($s$4)) + 1|0);
    $30 = HEAP8[$arrayidx114>>0]|0;
    $cmp116 = ($30<<24>>24)==(42);
    if (!($cmp116)) {
     $conv4$i197 = $30 << 24 >> 24;
     $isdigittmp5$i198 = (($conv4$i197) + -48)|0;
     $isdigit6$i199 = ($isdigittmp5$i198>>>0)<(10);
     if ($isdigit6$i199) {
      $47 = $arrayidx114;$i$07$i201 = 0;$isdigittmp8$i200 = $isdigittmp5$i198;
     } else {
      $p$0 = 0;$s$6 = $arrayidx114;
      break;
     }
     while(1) {
      $mul$i202 = ($i$07$i201*10)|0;
      $add$i203 = (($mul$i202) + ($isdigittmp8$i200))|0;
      $incdec$ptr$i204 = ((($47)) + 1|0);
      $48 = HEAP8[$incdec$ptr$i204>>0]|0;
      $conv$i205 = $48 << 24 >> 24;
      $isdigittmp$i206 = (($conv$i205) + -48)|0;
      $isdigit$i207 = ($isdigittmp$i206>>>0)<(10);
      if ($isdigit$i207) {
       $47 = $incdec$ptr$i204;$i$07$i201 = $add$i203;$isdigittmp8$i200 = $isdigittmp$i206;
      } else {
       $p$0 = $add$i203;$s$6 = $incdec$ptr$i204;
       break L45;
      }
     }
    }
    $arrayidx119 = ((($s$4)) + 2|0);
    $31 = HEAP8[$arrayidx119>>0]|0;
    $conv120 = $31 << 24 >> 24;
    $isdigittmp187 = (($conv120) + -48)|0;
    $isdigit188 = ($isdigittmp187>>>0)<(10);
    if ($isdigit188) {
     $arrayidx124 = ((($s$4)) + 3|0);
     $32 = HEAP8[$arrayidx124>>0]|0;
     $cmp126 = ($32<<24>>24)==(36);
     if ($cmp126) {
      $arrayidx132 = (($nl_type) + ($isdigittmp187<<2)|0);
      HEAP32[$arrayidx132>>2] = 10;
      $33 = HEAP8[$arrayidx119>>0]|0;
      $conv134 = $33 << 24 >> 24;
      $sub135 = (($conv134) + -48)|0;
      $i137 = (($nl_arg) + ($sub135<<3)|0);
      $34 = $i137;
      $35 = $34;
      $36 = HEAP32[$35>>2]|0;
      $37 = (($34) + 4)|0;
      $38 = $37;
      $39 = HEAP32[$38>>2]|0;
      $add$ptr139 = ((($s$4)) + 4|0);
      $p$0 = $36;$s$6 = $add$ptr139;
      break;
     }
    }
    $tobool141 = ($l10n$3|0)==(0);
    if (!($tobool141)) {
     $retval$0 = -1;
     break L1;
    }
    if ($tobool25) {
     $arglist_current2 = HEAP32[$ap>>2]|0;
     $40 = $arglist_current2;
     $41 = ((0) + 4|0);
     $expanded11 = $41;
     $expanded10 = (($expanded11) - 1)|0;
     $42 = (($40) + ($expanded10))|0;
     $43 = ((0) + 4|0);
     $expanded15 = $43;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $44 = $42 & $expanded13;
     $45 = $44;
     $46 = HEAP32[$45>>2]|0;
     $arglist_next3 = ((($45)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next3;
     $p$0 = $46;$s$6 = $arrayidx119;
    } else {
     $p$0 = 0;$s$6 = $arrayidx119;
    }
   } else {
    $p$0 = -1;$s$6 = $s$4;
   }
  } while(0);
  $s$7 = $s$6;$st$0 = 0;
  while(1) {
   $49 = HEAP8[$s$7>>0]|0;
   $conv164 = $49 << 24 >> 24;
   $sub165 = (($conv164) + -65)|0;
   $cmp166 = ($sub165>>>0)>(57);
   if ($cmp166) {
    $retval$0 = -1;
    break L1;
   }
   $incdec$ptr170 = ((($s$7)) + 1|0);
   $arrayidx174 = ((2227 + (($st$0*58)|0)|0) + ($sub165)|0);
   $50 = HEAP8[$arrayidx174>>0]|0;
   $conv175 = $50&255;
   $sub176 = (($conv175) + -1)|0;
   $cmp177 = ($sub176>>>0)<(8);
   if ($cmp177) {
    $s$7 = $incdec$ptr170;$st$0 = $conv175;
   } else {
    break;
   }
  }
  $tobool179 = ($50<<24>>24)==(0);
  if ($tobool179) {
   $retval$0 = -1;
   break;
  }
  $cmp182 = ($50<<24>>24)==(19);
  $cmp185 = ($argpos$0|0)>(-1);
  do {
   if ($cmp182) {
    if ($cmp185) {
     $retval$0 = -1;
     break L1;
    } else {
     label = 51;
    }
   } else {
    if ($cmp185) {
     $arrayidx193 = (($nl_type) + ($argpos$0<<2)|0);
     HEAP32[$arrayidx193>>2] = $conv175;
     $51 = (($nl_arg) + ($argpos$0<<3)|0);
     $52 = $51;
     $53 = $52;
     $54 = HEAP32[$53>>2]|0;
     $55 = (($52) + 4)|0;
     $56 = $55;
     $57 = HEAP32[$56>>2]|0;
     $58 = $arg;
     $59 = $58;
     HEAP32[$59>>2] = $54;
     $60 = (($58) + 4)|0;
     $61 = $60;
     HEAP32[$61>>2] = $57;
     label = 51;
     break;
    }
    if (!($tobool25)) {
     $retval$0 = 0;
     break L1;
    }
    _pop_arg($arg,$conv175,$ap);
   }
  } while(0);
  if ((label|0) == 51) {
   label = 0;
   if (!($tobool25)) {
    $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
    continue;
   }
  }
  $62 = HEAP8[$s$7>>0]|0;
  $conv208 = $62 << 24 >> 24;
  $tobool209 = ($st$0|0)!=(0);
  $and211 = $conv208 & 15;
  $cmp212 = ($and211|0)==(3);
  $or$cond192 = $tobool209 & $cmp212;
  $and215 = $conv208 & -33;
  $t$0 = $or$cond192 ? $and215 : $conv208;
  $and217 = $fl$1 & 8192;
  $tobool218 = ($and217|0)==(0);
  $and220 = $fl$1 & -65537;
  $fl$1$and220 = $tobool218 ? $fl$1 : $and220;
  L74: do {
   switch ($t$0|0) {
   case 110:  {
    $trunc = $st$0&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $69 = HEAP32[$arg>>2]|0;
     HEAP32[$69>>2] = $cnt$1;
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 1:  {
     $70 = HEAP32[$arg>>2]|0;
     HEAP32[$70>>2] = $cnt$1;
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 2:  {
     $71 = ($cnt$1|0)<(0);
     $72 = $71 << 31 >> 31;
     $73 = HEAP32[$arg>>2]|0;
     $74 = $73;
     $75 = $74;
     HEAP32[$75>>2] = $cnt$1;
     $76 = (($74) + 4)|0;
     $77 = $76;
     HEAP32[$77>>2] = $72;
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 3:  {
     $conv230 = $cnt$1&65535;
     $78 = HEAP32[$arg>>2]|0;
     HEAP16[$78>>1] = $conv230;
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 4:  {
     $conv233 = $cnt$1&255;
     $79 = HEAP32[$arg>>2]|0;
     HEAP8[$79>>0] = $conv233;
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 6:  {
     $80 = HEAP32[$arg>>2]|0;
     HEAP32[$80>>2] = $cnt$1;
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 7:  {
     $81 = ($cnt$1|0)<(0);
     $82 = $81 << 31 >> 31;
     $83 = HEAP32[$arg>>2]|0;
     $84 = $83;
     $85 = $84;
     HEAP32[$85>>2] = $cnt$1;
     $86 = (($84) + 4)|0;
     $87 = $86;
     HEAP32[$87>>2] = $82;
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    default: {
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $cmp241 = ($p$0>>>0)>(8);
    $cond246 = $cmp241 ? $p$0 : 8;
    $or247 = $fl$1$and220 | 8;
    $fl$3 = $or247;$p$1 = $cond246;$t$1 = 120;
    label = 63;
    break;
   }
   case 88: case 120:  {
    $fl$3 = $fl$1$and220;$p$1 = $p$0;$t$1 = $t$0;
    label = 63;
    break;
   }
   case 111:  {
    $116 = $arg;
    $117 = $116;
    $118 = HEAP32[$117>>2]|0;
    $119 = (($116) + 4)|0;
    $120 = $119;
    $121 = HEAP32[$120>>2]|0;
    $122 = ($118|0)==(0);
    $123 = ($121|0)==(0);
    $124 = $122 & $123;
    if ($124) {
     $s$addr$0$lcssa$i229 = $add$ptr206;
    } else {
     $126 = $118;$129 = $121;$s$addr$06$i221 = $add$ptr206;
     while(1) {
      $125 = $126 & 7;
      $127 = $125 | 48;
      $128 = $127&255;
      $incdec$ptr$i225 = ((($s$addr$06$i221)) + -1|0);
      HEAP8[$incdec$ptr$i225>>0] = $128;
      $130 = (_bitshift64Lshr(($126|0),($129|0),3)|0);
      $131 = tempRet0;
      $132 = ($130|0)==(0);
      $133 = ($131|0)==(0);
      $134 = $132 & $133;
      if ($134) {
       $s$addr$0$lcssa$i229 = $incdec$ptr$i225;
       break;
      } else {
       $126 = $130;$129 = $131;$s$addr$06$i221 = $incdec$ptr$i225;
      }
     }
    }
    $and264 = $fl$1$and220 & 8;
    $tobool265 = ($and264|0)==(0);
    if ($tobool265) {
     $a$0 = $s$addr$0$lcssa$i229;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = 0;$prefix$1 = 2707;
     label = 76;
    } else {
     $sub$ptr$rhs$cast268 = $s$addr$0$lcssa$i229;
     $sub$ptr$sub269 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast268))|0;
     $cmp271 = ($p$0|0)>($sub$ptr$sub269|0);
     $add270 = (($sub$ptr$sub269) + 1)|0;
     $p$0$add270 = $cmp271 ? $p$0 : $add270;
     $a$0 = $s$addr$0$lcssa$i229;$fl$4 = $fl$1$and220;$p$2 = $p$0$add270;$pl$1 = 0;$prefix$1 = 2707;
     label = 76;
    }
    break;
   }
   case 105: case 100:  {
    $135 = $arg;
    $136 = $135;
    $137 = HEAP32[$136>>2]|0;
    $138 = (($135) + 4)|0;
    $139 = $138;
    $140 = HEAP32[$139>>2]|0;
    $141 = ($140|0)<(0);
    if ($141) {
     $142 = (_i64Subtract(0,0,($137|0),($140|0))|0);
     $143 = tempRet0;
     $144 = $arg;
     $145 = $144;
     HEAP32[$145>>2] = $142;
     $146 = (($144) + 4)|0;
     $147 = $146;
     HEAP32[$147>>2] = $143;
     $148 = $142;$149 = $143;$pl$0 = 1;$prefix$0 = 2707;
     label = 75;
     break L74;
    }
    $and290 = $fl$1$and220 & 2048;
    $tobool291 = ($and290|0)==(0);
    if ($tobool291) {
     $and295 = $fl$1$and220 & 1;
     $tobool296 = ($and295|0)==(0);
     $$ = $tobool296 ? 2707 : (2709);
     $148 = $137;$149 = $140;$pl$0 = $and295;$prefix$0 = $$;
     label = 75;
    } else {
     $148 = $137;$149 = $140;$pl$0 = 1;$prefix$0 = (2708);
     label = 75;
    }
    break;
   }
   case 117:  {
    $63 = $arg;
    $64 = $63;
    $65 = HEAP32[$64>>2]|0;
    $66 = (($63) + 4)|0;
    $67 = $66;
    $68 = HEAP32[$67>>2]|0;
    $148 = $65;$149 = $68;$pl$0 = 0;$prefix$0 = 2707;
    label = 75;
    break;
   }
   case 99:  {
    $161 = $arg;
    $162 = $161;
    $163 = HEAP32[$162>>2]|0;
    $164 = (($161) + 4)|0;
    $165 = $164;
    $166 = HEAP32[$165>>2]|0;
    $167 = $163&255;
    HEAP8[$add$ptr341>>0] = $167;
    $a$2 = $add$ptr341;$fl$6 = $and220;$p$5 = 1;$pl$2 = 0;$prefix$2 = 2707;$z$2 = $add$ptr206;
    break;
   }
   case 109:  {
    $call345 = (___errno_location()|0);
    $168 = HEAP32[$call345>>2]|0;
    $call346 = (_strerror($168)|0);
    $a$1 = $call346;
    label = 81;
    break;
   }
   case 115:  {
    $169 = HEAP32[$arg>>2]|0;
    $tobool350 = ($169|0)!=(0|0);
    $cond355 = $tobool350 ? $169 : 2717;
    $a$1 = $cond355;
    label = 81;
    break;
   }
   case 67:  {
    $170 = $arg;
    $171 = $170;
    $172 = HEAP32[$171>>2]|0;
    $173 = (($170) + 4)|0;
    $174 = $173;
    $175 = HEAP32[$174>>2]|0;
    HEAP32[$wc>>2] = $172;
    HEAP32[$arrayidx371>>2] = 0;
    HEAP32[$arg>>2] = $wc;
    $270 = $wc;$p$4340 = -1;
    label = 85;
    break;
   }
   case 83:  {
    $$pre336 = HEAP32[$arg>>2]|0;
    $cmp378308 = ($p$0|0)==(0);
    if ($cmp378308) {
     _pad($f,32,$w$1,0,$fl$1$and220);
     $i$0$lcssa343 = 0;
     label = 96;
    } else {
     $270 = $$pre336;$p$4340 = $p$0;
     label = 85;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $179 = +HEAPF64[$arg>>3];
    HEAP32[$e2$i>>2] = 0;
    HEAPF64[tempDoublePtr>>3] = $179;$180 = HEAP32[tempDoublePtr>>2]|0;
    $181 = HEAP32[tempDoublePtr+4>>2]|0;
    $182 = ($181|0)<(0);
    if ($182) {
     $sub$i = -$179;
     $pl$0$i = 1;$prefix$0$i = 2724;$y$addr$0$i = $sub$i;
    } else {
     $and$i239 = $fl$1$and220 & 2048;
     $tobool9$i = ($and$i239|0)==(0);
     $and12$i = $fl$1$and220 & 1;
     if ($tobool9$i) {
      $tobool13$i = ($and12$i|0)==(0);
      $$$i = $tobool13$i ? (2725) : (2730);
      $pl$0$i = $and12$i;$prefix$0$i = $$$i;$y$addr$0$i = $179;
     } else {
      $pl$0$i = 1;$prefix$0$i = (2727);$y$addr$0$i = $179;
     }
    }
    HEAPF64[tempDoublePtr>>3] = $y$addr$0$i;$183 = HEAP32[tempDoublePtr>>2]|0;
    $184 = HEAP32[tempDoublePtr+4>>2]|0;
    $185 = $184 & 2146435072;
    $186 = ($185>>>0)<(2146435072);
    $187 = (0)<(0);
    $188 = ($185|0)==(2146435072);
    $189 = $188 & $187;
    $190 = $186 | $189;
    do {
     if ($190) {
      $call55$i = (+_frexpl($y$addr$0$i,$e2$i));
      $mul$i241 = $call55$i * 2.0;
      $tobool56$i = $mul$i241 != 0.0;
      if ($tobool56$i) {
       $193 = HEAP32[$e2$i>>2]|0;
       $dec$i = (($193) + -1)|0;
       HEAP32[$e2$i>>2] = $dec$i;
      }
      $or$i242 = $t$0 | 32;
      $cmp59$i = ($or$i242|0)==(97);
      if ($cmp59$i) {
       $and62$i = $t$0 & 32;
       $tobool63$i = ($and62$i|0)==(0);
       $add$ptr65$i = ((($prefix$0$i)) + 9|0);
       $prefix$0$add$ptr65$i = $tobool63$i ? $prefix$0$i : $add$ptr65$i;
       $add67$i = $pl$0$i | 2;
       $194 = ($p$0>>>0)>(11);
       $sub74$i = (12 - ($p$0))|0;
       $tobool76563$i = ($sub74$i|0)==(0);
       $tobool76$i = $194 | $tobool76563$i;
       do {
        if ($tobool76$i) {
         $y$addr$1$i = $mul$i241;
        } else {
         $re$1482$i = $sub74$i;$round$0481$i = 8.0;
         while(1) {
          $dec78$i = (($re$1482$i) + -1)|0;
          $mul80$i = $round$0481$i * 16.0;
          $tobool79$i = ($dec78$i|0)==(0);
          if ($tobool79$i) {
           break;
          } else {
           $re$1482$i = $dec78$i;$round$0481$i = $mul80$i;
          }
         }
         $195 = HEAP8[$prefix$0$add$ptr65$i>>0]|0;
         $cmp82$i = ($195<<24>>24)==(45);
         if ($cmp82$i) {
          $sub85$i = -$mul$i241;
          $sub86$i = $sub85$i - $mul80$i;
          $add87$i = $mul80$i + $sub86$i;
          $sub88$i = -$add87$i;
          $y$addr$1$i = $sub88$i;
          break;
         } else {
          $add90$i = $mul$i241 + $mul80$i;
          $sub91$i = $add90$i - $mul80$i;
          $y$addr$1$i = $sub91$i;
          break;
         }
        }
       } while(0);
       $196 = HEAP32[$e2$i>>2]|0;
       $cmp94$i = ($196|0)<(0);
       $sub97$i = (0 - ($196))|0;
       $cond100$i = $cmp94$i ? $sub97$i : $196;
       $197 = ($cond100$i|0)<(0);
       $198 = $197 << 31 >> 31;
       $199 = (_fmt_u($cond100$i,$198,$arrayidx$i236)|0);
       $cmp103$i = ($199|0)==($arrayidx$i236|0);
       if ($cmp103$i) {
        HEAP8[$incdec$ptr106$i>>0] = 48;
        $estr$0$i = $incdec$ptr106$i;
       } else {
        $estr$0$i = $199;
       }
       $200 = $196 >> 31;
       $201 = $200 & 2;
       $202 = (($201) + 43)|0;
       $conv111$i = $202&255;
       $incdec$ptr112$i = ((($estr$0$i)) + -1|0);
       HEAP8[$incdec$ptr112$i>>0] = $conv111$i;
       $add113$i = (($t$0) + 15)|0;
       $conv114$i = $add113$i&255;
       $incdec$ptr115$i = ((($estr$0$i)) + -2|0);
       HEAP8[$incdec$ptr115$i>>0] = $conv114$i;
       $notrhs$i = ($p$0|0)<(1);
       $and134$i = $fl$1$and220 & 8;
       $tobool135$i = ($and134$i|0)==(0);
       $s$0$i = $buf$i;$y$addr$2$i = $y$addr$1$i;
       while(1) {
        $conv116$i = (~~(($y$addr$2$i)));
        $arrayidx117$i = (2691 + ($conv116$i)|0);
        $203 = HEAP8[$arrayidx117$i>>0]|0;
        $conv118393$i = $203&255;
        $or120$i = $conv118393$i | $and62$i;
        $conv121$i = $or120$i&255;
        $incdec$ptr122$i = ((($s$0$i)) + 1|0);
        HEAP8[$s$0$i>>0] = $conv121$i;
        $conv123$i = (+($conv116$i|0));
        $sub124$i = $y$addr$2$i - $conv123$i;
        $mul125$i = $sub124$i * 16.0;
        $sub$ptr$lhs$cast$i = $incdec$ptr122$i;
        $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
        $cmp127$i = ($sub$ptr$sub$i|0)==(1);
        do {
         if ($cmp127$i) {
          $notlhs$i = $mul125$i == 0.0;
          $or$cond1$not$i = $notrhs$i & $notlhs$i;
          $or$cond$i = $tobool135$i & $or$cond1$not$i;
          if ($or$cond$i) {
           $s$1$i = $incdec$ptr122$i;
           break;
          }
          $incdec$ptr137$i = ((($s$0$i)) + 2|0);
          HEAP8[$incdec$ptr122$i>>0] = 46;
          $s$1$i = $incdec$ptr137$i;
         } else {
          $s$1$i = $incdec$ptr122$i;
         }
        } while(0);
        $tobool139$i = $mul125$i != 0.0;
        if ($tobool139$i) {
         $s$0$i = $s$1$i;$y$addr$2$i = $mul125$i;
        } else {
         break;
        }
       }
       $tobool140$i = ($p$0|0)!=(0);
       $$pre560$i = $s$1$i;
       $sub146$i = (($sub$ptr$sub145$i) + ($$pre560$i))|0;
       $cmp147$i = ($sub146$i|0)<($p$0|0);
       $or$cond321 = $tobool140$i & $cmp147$i;
       $sub$ptr$rhs$cast152$i = $incdec$ptr115$i;
       $add150$i = (($sub$ptr$sub153$i) + ($p$0))|0;
       $add154$i = (($add150$i) - ($sub$ptr$rhs$cast152$i))|0;
       $sub$ptr$sub162$i = (($sub$ptr$sub159$i) - ($sub$ptr$rhs$cast152$i))|0;
       $add163$i = (($sub$ptr$sub162$i) + ($$pre560$i))|0;
       $l$0$i = $or$cond321 ? $add154$i : $add163$i;
       $add165$i = (($l$0$i) + ($add67$i))|0;
       _pad($f,32,$w$1,$add165$i,$fl$1$and220);
       $204 = HEAP32[$f>>2]|0;
       $and$i418$i = $204 & 32;
       $tobool$i419$i = ($and$i418$i|0)==(0);
       if ($tobool$i419$i) {
        (___fwritex($prefix$0$add$ptr65$i,$add67$i,$f)|0);
       }
       $xor167$i = $fl$1$and220 ^ 65536;
       _pad($f,48,$w$1,$add165$i,$xor167$i);
       $sub$ptr$sub172$i = (($$pre560$i) - ($sub$ptr$rhs$cast$i))|0;
       $205 = HEAP32[$f>>2]|0;
       $and$i424$i = $205 & 32;
       $tobool$i425$i = ($and$i424$i|0)==(0);
       if ($tobool$i425$i) {
        (___fwritex($buf$i,$sub$ptr$sub172$i,$f)|0);
       }
       $sub$ptr$sub175$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast152$i))|0;
       $sum = (($sub$ptr$sub172$i) + ($sub$ptr$sub175$i))|0;
       $sub181$i = (($l$0$i) - ($sum))|0;
       _pad($f,48,$sub181$i,0,0);
       $206 = HEAP32[$f>>2]|0;
       $and$i430$i = $206 & 32;
       $tobool$i431$i = ($and$i430$i|0)==(0);
       if ($tobool$i431$i) {
        (___fwritex($incdec$ptr115$i,$sub$ptr$sub175$i,$f)|0);
       }
       $xor186$i = $fl$1$and220 ^ 8192;
       _pad($f,32,$w$1,$add165$i,$xor186$i);
       $cmp188$i = ($add165$i|0)<($w$1|0);
       $w$add165$i = $cmp188$i ? $w$1 : $add165$i;
       $retval$0$i = $w$add165$i;
       break;
      }
      $cmp196$i = ($p$0|0)<(0);
      $$p$i = $cmp196$i ? 6 : $p$0;
      if ($tobool56$i) {
       $mul202$i = $mul$i241 * 268435456.0;
       $207 = HEAP32[$e2$i>>2]|0;
       $sub203$i = (($207) + -28)|0;
       HEAP32[$e2$i>>2] = $sub203$i;
       $$pr$i = $sub203$i;$y$addr$3$i = $mul202$i;
      } else {
       $$pre558$i = HEAP32[$e2$i>>2]|0;
       $$pr$i = $$pre558$i;$y$addr$3$i = $mul$i241;
      }
      $cmp205$i = ($$pr$i|0)<(0);
      $arraydecay208$add$ptr213$i = $cmp205$i ? $big$i : $add$ptr213$i;
      $y$addr$4$i = $y$addr$3$i;$z$0$i = $arraydecay208$add$ptr213$i;
      while(1) {
       $conv216$i = (~~(($y$addr$4$i))>>>0);
       HEAP32[$z$0$i>>2] = $conv216$i;
       $incdec$ptr217$i = ((($z$0$i)) + 4|0);
       $conv218$i = (+($conv216$i>>>0));
       $sub219$i = $y$addr$4$i - $conv218$i;
       $mul220$i = $sub219$i * 1.0E+9;
       $tobool222$i = $mul220$i != 0.0;
       if ($tobool222$i) {
        $y$addr$4$i = $mul220$i;$z$0$i = $incdec$ptr217$i;
       } else {
        break;
       }
      }
      $cmp225547$i = ($$pr$i|0)>(0);
      if ($cmp225547$i) {
       $208 = $$pr$i;$a$1549$i = $arraydecay208$add$ptr213$i;$z$1548$i = $incdec$ptr217$i;
       while(1) {
        $cmp228$i = ($208|0)>(29);
        $cond233$i = $cmp228$i ? 29 : $208;
        $d$0542$i = ((($z$1548$i)) + -4|0);
        $cmp235543$i = ($d$0542$i>>>0)<($a$1549$i>>>0);
        do {
         if ($cmp235543$i) {
          $a$2$ph$i = $a$1549$i;
         } else {
          $carry$0544$i = 0;$d$0545$i = $d$0542$i;
          while(1) {
           $209 = HEAP32[$d$0545$i>>2]|0;
           $210 = (_bitshift64Shl(($209|0),0,($cond233$i|0))|0);
           $211 = tempRet0;
           $212 = (_i64Add(($210|0),($211|0),($carry$0544$i|0),0)|0);
           $213 = tempRet0;
           $214 = (___uremdi3(($212|0),($213|0),1000000000,0)|0);
           $215 = tempRet0;
           HEAP32[$d$0545$i>>2] = $214;
           $216 = (___udivdi3(($212|0),($213|0),1000000000,0)|0);
           $217 = tempRet0;
           $d$0$i = ((($d$0545$i)) + -4|0);
           $cmp235$i = ($d$0$i>>>0)<($a$1549$i>>>0);
           if ($cmp235$i) {
            break;
           } else {
            $carry$0544$i = $216;$d$0545$i = $d$0$i;
           }
          }
          $tobool244$i = ($216|0)==(0);
          if ($tobool244$i) {
           $a$2$ph$i = $a$1549$i;
           break;
          }
          $incdec$ptr246$i = ((($a$1549$i)) + -4|0);
          HEAP32[$incdec$ptr246$i>>2] = $216;
          $a$2$ph$i = $incdec$ptr246$i;
         }
        } while(0);
        $z$2$i = $z$1548$i;
        while(1) {
         $cmp249$i = ($z$2$i>>>0)>($a$2$ph$i>>>0);
         if (!($cmp249$i)) {
          break;
         }
         $arrayidx251$i = ((($z$2$i)) + -4|0);
         $218 = HEAP32[$arrayidx251$i>>2]|0;
         $lnot$i = ($218|0)==(0);
         if ($lnot$i) {
          $z$2$i = $arrayidx251$i;
         } else {
          break;
         }
        }
        $219 = HEAP32[$e2$i>>2]|0;
        $sub256$i = (($219) - ($cond233$i))|0;
        HEAP32[$e2$i>>2] = $sub256$i;
        $cmp225$i = ($sub256$i|0)>(0);
        if ($cmp225$i) {
         $208 = $sub256$i;$a$1549$i = $a$2$ph$i;$z$1548$i = $z$2$i;
        } else {
         $$pr477$i = $sub256$i;$a$1$lcssa$i = $a$2$ph$i;$z$1$lcssa$i = $z$2$i;
         break;
        }
       }
      } else {
       $$pr477$i = $$pr$i;$a$1$lcssa$i = $arraydecay208$add$ptr213$i;$z$1$lcssa$i = $incdec$ptr217$i;
      }
      $cmp259537$i = ($$pr477$i|0)<(0);
      if ($cmp259537$i) {
       $add273$i = (($$p$i) + 25)|0;
       $div274$i = (($add273$i|0) / 9)&-1;
       $add275$i = (($div274$i) + 1)|0;
       $cmp299$i = ($or$i242|0)==(102);
       $220 = $$pr477$i;$a$3539$i = $a$1$lcssa$i;$z$3538$i = $z$1$lcssa$i;
       while(1) {
        $sub264$i = (0 - ($220))|0;
        $cmp265$i = ($sub264$i|0)>(9);
        $cond271$i = $cmp265$i ? 9 : $sub264$i;
        $cmp277533$i = ($a$3539$i>>>0)<($z$3538$i>>>0);
        do {
         if ($cmp277533$i) {
          $shl280$i = 1 << $cond271$i;
          $sub281$i = (($shl280$i) + -1)|0;
          $shr285$i = 1000000000 >>> $cond271$i;
          $carry262$0535$i = 0;$d$1534$i = $a$3539$i;
          while(1) {
           $222 = HEAP32[$d$1534$i>>2]|0;
           $and282$i = $222 & $sub281$i;
           $shr283$i = $222 >>> $cond271$i;
           $add284$i = (($shr283$i) + ($carry262$0535$i))|0;
           HEAP32[$d$1534$i>>2] = $add284$i;
           $mul286$i = Math_imul($and282$i, $shr285$i)|0;
           $incdec$ptr288$i = ((($d$1534$i)) + 4|0);
           $cmp277$i = ($incdec$ptr288$i>>>0)<($z$3538$i>>>0);
           if ($cmp277$i) {
            $carry262$0535$i = $mul286$i;$d$1534$i = $incdec$ptr288$i;
           } else {
            break;
           }
          }
          $223 = HEAP32[$a$3539$i>>2]|0;
          $tobool290$i = ($223|0)==(0);
          $incdec$ptr292$i = ((($a$3539$i)) + 4|0);
          $incdec$ptr292$a$3$i = $tobool290$i ? $incdec$ptr292$i : $a$3539$i;
          $tobool294$i = ($mul286$i|0)==(0);
          if ($tobool294$i) {
           $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3$i;$z$4$i = $z$3538$i;
           break;
          }
          $incdec$ptr296$i = ((($z$3538$i)) + 4|0);
          HEAP32[$z$3538$i>>2] = $mul286$i;
          $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3$i;$z$4$i = $incdec$ptr296$i;
         } else {
          $221 = HEAP32[$a$3539$i>>2]|0;
          $tobool290565$i = ($221|0)==(0);
          $incdec$ptr292566$i = ((($a$3539$i)) + 4|0);
          $incdec$ptr292$a$3567$i = $tobool290565$i ? $incdec$ptr292566$i : $a$3539$i;
          $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3567$i;$z$4$i = $z$3538$i;
         }
        } while(0);
        $cond304$i = $cmp299$i ? $arraydecay208$add$ptr213$i : $incdec$ptr292$a$3569$i;
        $sub$ptr$lhs$cast305$i = $z$4$i;
        $sub$ptr$rhs$cast306$i = $cond304$i;
        $sub$ptr$sub307$i = (($sub$ptr$lhs$cast305$i) - ($sub$ptr$rhs$cast306$i))|0;
        $sub$ptr$div$i = $sub$ptr$sub307$i >> 2;
        $cmp308$i = ($sub$ptr$div$i|0)>($add275$i|0);
        $add$ptr311$i = (($cond304$i) + ($add275$i<<2)|0);
        $add$ptr311$z$4$i = $cmp308$i ? $add$ptr311$i : $z$4$i;
        $224 = HEAP32[$e2$i>>2]|0;
        $add313$i = (($224) + ($cond271$i))|0;
        HEAP32[$e2$i>>2] = $add313$i;
        $cmp259$i = ($add313$i|0)<(0);
        if ($cmp259$i) {
         $220 = $add313$i;$a$3539$i = $incdec$ptr292$a$3569$i;$z$3538$i = $add$ptr311$z$4$i;
        } else {
         $a$3$lcssa$i = $incdec$ptr292$a$3569$i;$z$3$lcssa$i = $add$ptr311$z$4$i;
         break;
        }
       }
      } else {
       $a$3$lcssa$i = $a$1$lcssa$i;$z$3$lcssa$i = $z$1$lcssa$i;
      }
      $cmp315$i = ($a$3$lcssa$i>>>0)<($z$3$lcssa$i>>>0);
      $sub$ptr$lhs$cast318$i = $arraydecay208$add$ptr213$i;
      do {
       if ($cmp315$i) {
        $sub$ptr$rhs$cast319$i = $a$3$lcssa$i;
        $sub$ptr$sub320$i = (($sub$ptr$lhs$cast318$i) - ($sub$ptr$rhs$cast319$i))|0;
        $sub$ptr$div321$i = $sub$ptr$sub320$i >> 2;
        $mul322$i = ($sub$ptr$div321$i*9)|0;
        $225 = HEAP32[$a$3$lcssa$i>>2]|0;
        $cmp324529$i = ($225>>>0)<(10);
        if ($cmp324529$i) {
         $e$1$i = $mul322$i;
         break;
        } else {
         $e$0531$i = $mul322$i;$i$0530$i = 10;
        }
        while(1) {
         $mul328$i = ($i$0530$i*10)|0;
         $inc$i = (($e$0531$i) + 1)|0;
         $cmp324$i = ($225>>>0)<($mul328$i>>>0);
         if ($cmp324$i) {
          $e$1$i = $inc$i;
          break;
         } else {
          $e$0531$i = $inc$i;$i$0530$i = $mul328$i;
         }
        }
       } else {
        $e$1$i = 0;
       }
      } while(0);
      $cmp333$i = ($or$i242|0)!=(102);
      $mul335$i = $cmp333$i ? $e$1$i : 0;
      $sub336$i = (($$p$i) - ($mul335$i))|0;
      $cmp338$i = ($or$i242|0)==(103);
      $tobool341$i = ($$p$i|0)!=(0);
      $226 = $tobool341$i & $cmp338$i;
      $land$ext$neg$i = $226 << 31 >> 31;
      $sub343$i = (($sub336$i) + ($land$ext$neg$i))|0;
      $sub$ptr$lhs$cast344$i = $z$3$lcssa$i;
      $sub$ptr$sub346$i = (($sub$ptr$lhs$cast344$i) - ($sub$ptr$lhs$cast318$i))|0;
      $sub$ptr$div347$i = $sub$ptr$sub346$i >> 2;
      $227 = ($sub$ptr$div347$i*9)|0;
      $mul349$i = (($227) + -9)|0;
      $cmp350$i = ($sub343$i|0)<($mul349$i|0);
      if ($cmp350$i) {
       $add$ptr354$i = ((($arraydecay208$add$ptr213$i)) + 4|0);
       $add355$i = (($sub343$i) + 9216)|0;
       $div356$i = (($add355$i|0) / 9)&-1;
       $sub357$i = (($div356$i) + -1024)|0;
       $add$ptr358$i = (($add$ptr354$i) + ($sub357$i<<2)|0);
       $rem360$i = (($add355$i|0) % 9)&-1;
       $j$0524$i = (($rem360$i) + 1)|0;
       $cmp363525$i = ($j$0524$i|0)<(9);
       if ($cmp363525$i) {
        $i$1526$i = 10;$j$0527$i = $j$0524$i;
        while(1) {
         $mul367$i = ($i$1526$i*10)|0;
         $j$0$i = (($j$0527$i) + 1)|0;
         $exitcond$i = ($j$0$i|0)==(9);
         if ($exitcond$i) {
          $i$1$lcssa$i = $mul367$i;
          break;
         } else {
          $i$1526$i = $mul367$i;$j$0527$i = $j$0$i;
         }
        }
       } else {
        $i$1$lcssa$i = 10;
       }
       $228 = HEAP32[$add$ptr358$i>>2]|0;
       $rem370$i = (($228>>>0) % ($i$1$lcssa$i>>>0))&-1;
       $tobool371$i = ($rem370$i|0)==(0);
       $add$ptr373$i = ((($add$ptr358$i)) + 4|0);
       $cmp374$i = ($add$ptr373$i|0)==($z$3$lcssa$i|0);
       $or$cond395$i = $cmp374$i & $tobool371$i;
       do {
        if ($or$cond395$i) {
         $a$8$i = $a$3$lcssa$i;$d$4$i = $add$ptr358$i;$e$4$i = $e$1$i;
        } else {
         $div378$i = (($228>>>0) / ($i$1$lcssa$i>>>0))&-1;
         $and379$i = $div378$i & 1;
         $tobool380$i = ($and379$i|0)==(0);
         $$396$i = $tobool380$i ? 9007199254740992.0 : 9007199254740994.0;
         $div384$i = (($i$1$lcssa$i|0) / 2)&-1;
         $cmp385$i = ($rem370$i>>>0)<($div384$i>>>0);
         if ($cmp385$i) {
          $small$0$i = 0.5;
         } else {
          $cmp390$i = ($rem370$i|0)==($div384$i|0);
          $or$cond397$i = $cmp374$i & $cmp390$i;
          $$404$i = $or$cond397$i ? 1.0 : 1.5;
          $small$0$i = $$404$i;
         }
         $tobool400$i = ($pl$0$i|0)==(0);
         do {
          if ($tobool400$i) {
           $round377$1$i = $$396$i;$small$1$i = $small$0$i;
          } else {
           $229 = HEAP8[$prefix$0$i>>0]|0;
           $cmp403$i = ($229<<24>>24)==(45);
           if (!($cmp403$i)) {
            $round377$1$i = $$396$i;$small$1$i = $small$0$i;
            break;
           }
           $mul406$i = -$$396$i;
           $mul407$i = -$small$0$i;
           $round377$1$i = $mul406$i;$small$1$i = $mul407$i;
          }
         } while(0);
         $sub409$i = (($228) - ($rem370$i))|0;
         HEAP32[$add$ptr358$i>>2] = $sub409$i;
         $add410$i = $round377$1$i + $small$1$i;
         $cmp411$i = $add410$i != $round377$1$i;
         if (!($cmp411$i)) {
          $a$8$i = $a$3$lcssa$i;$d$4$i = $add$ptr358$i;$e$4$i = $e$1$i;
          break;
         }
         $add414$i = (($sub409$i) + ($i$1$lcssa$i))|0;
         HEAP32[$add$ptr358$i>>2] = $add414$i;
         $cmp416519$i = ($add414$i>>>0)>(999999999);
         if ($cmp416519$i) {
          $a$5521$i = $a$3$lcssa$i;$d$2520$i = $add$ptr358$i;
          while(1) {
           $incdec$ptr419$i = ((($d$2520$i)) + -4|0);
           HEAP32[$d$2520$i>>2] = 0;
           $cmp420$i = ($incdec$ptr419$i>>>0)<($a$5521$i>>>0);
           if ($cmp420$i) {
            $incdec$ptr423$i = ((($a$5521$i)) + -4|0);
            HEAP32[$incdec$ptr423$i>>2] = 0;
            $a$6$i = $incdec$ptr423$i;
           } else {
            $a$6$i = $a$5521$i;
           }
           $230 = HEAP32[$incdec$ptr419$i>>2]|0;
           $inc425$i = (($230) + 1)|0;
           HEAP32[$incdec$ptr419$i>>2] = $inc425$i;
           $cmp416$i = ($inc425$i>>>0)>(999999999);
           if ($cmp416$i) {
            $a$5521$i = $a$6$i;$d$2520$i = $incdec$ptr419$i;
           } else {
            $a$5$lcssa$i = $a$6$i;$d$2$lcssa$i = $incdec$ptr419$i;
            break;
           }
          }
         } else {
          $a$5$lcssa$i = $a$3$lcssa$i;$d$2$lcssa$i = $add$ptr358$i;
         }
         $sub$ptr$rhs$cast428$i = $a$5$lcssa$i;
         $sub$ptr$sub429$i = (($sub$ptr$lhs$cast318$i) - ($sub$ptr$rhs$cast428$i))|0;
         $sub$ptr$div430$i = $sub$ptr$sub429$i >> 2;
         $mul431$i = ($sub$ptr$div430$i*9)|0;
         $231 = HEAP32[$a$5$lcssa$i>>2]|0;
         $cmp433515$i = ($231>>>0)<(10);
         if ($cmp433515$i) {
          $a$8$i = $a$5$lcssa$i;$d$4$i = $d$2$lcssa$i;$e$4$i = $mul431$i;
          break;
         } else {
          $e$2517$i = $mul431$i;$i$2516$i = 10;
         }
         while(1) {
          $mul437$i = ($i$2516$i*10)|0;
          $inc438$i = (($e$2517$i) + 1)|0;
          $cmp433$i = ($231>>>0)<($mul437$i>>>0);
          if ($cmp433$i) {
           $a$8$i = $a$5$lcssa$i;$d$4$i = $d$2$lcssa$i;$e$4$i = $inc438$i;
           break;
          } else {
           $e$2517$i = $inc438$i;$i$2516$i = $mul437$i;
          }
         }
        }
       } while(0);
       $add$ptr442$i = ((($d$4$i)) + 4|0);
       $cmp443$i = ($z$3$lcssa$i>>>0)>($add$ptr442$i>>>0);
       $add$ptr442$z$3$i = $cmp443$i ? $add$ptr442$i : $z$3$lcssa$i;
       $a$9$ph$i = $a$8$i;$e$5$ph$i = $e$4$i;$z$7$ph$i = $add$ptr442$z$3$i;
      } else {
       $a$9$ph$i = $a$3$lcssa$i;$e$5$ph$i = $e$1$i;$z$7$ph$i = $z$3$lcssa$i;
      }
      $sub626$le$i = (0 - ($e$5$ph$i))|0;
      $z$7$i = $z$7$ph$i;
      while(1) {
       $cmp450$i = ($z$7$i>>>0)>($a$9$ph$i>>>0);
       if (!($cmp450$i)) {
        $cmp450$lcssa$i = 0;
        break;
       }
       $arrayidx453$i = ((($z$7$i)) + -4|0);
       $232 = HEAP32[$arrayidx453$i>>2]|0;
       $lnot455$i = ($232|0)==(0);
       if ($lnot455$i) {
        $z$7$i = $arrayidx453$i;
       } else {
        $cmp450$lcssa$i = 1;
        break;
       }
      }
      do {
       if ($cmp338$i) {
        $233 = $tobool341$i&1;
        $inc468$i = $233 ^ 1;
        $$p$inc468$i = (($inc468$i) + ($$p$i))|0;
        $cmp470$i = ($$p$inc468$i|0)>($e$5$ph$i|0);
        $cmp473$i = ($e$5$ph$i|0)>(-5);
        $or$cond2$i = $cmp470$i & $cmp473$i;
        if ($or$cond2$i) {
         $dec476$i = (($t$0) + -1)|0;
         $add477$neg$i = (($$p$inc468$i) + -1)|0;
         $sub478$i = (($add477$neg$i) - ($e$5$ph$i))|0;
         $p$addr$2$i = $sub478$i;$t$addr$0$i = $dec476$i;
        } else {
         $sub480$i = (($t$0) + -2)|0;
         $dec481$i = (($$p$inc468$i) + -1)|0;
         $p$addr$2$i = $dec481$i;$t$addr$0$i = $sub480$i;
        }
        $and483$i = $fl$1$and220 & 8;
        $tobool484$i = ($and483$i|0)==(0);
        if (!($tobool484$i)) {
         $and610$pre$phi$iZ2D = $and483$i;$p$addr$3$i = $p$addr$2$i;$t$addr$1$i = $t$addr$0$i;
         break;
        }
        do {
         if ($cmp450$lcssa$i) {
          $arrayidx489$i = ((($z$7$i)) + -4|0);
          $234 = HEAP32[$arrayidx489$i>>2]|0;
          $tobool490$i = ($234|0)==(0);
          if ($tobool490$i) {
           $j$2$i = 9;
           break;
          }
          $rem494510$i = (($234>>>0) % 10)&-1;
          $cmp495511$i = ($rem494510$i|0)==(0);
          if ($cmp495511$i) {
           $i$3512$i = 10;$j$1513$i = 0;
          } else {
           $j$2$i = 0;
           break;
          }
          while(1) {
           $mul499$i = ($i$3512$i*10)|0;
           $inc500$i = (($j$1513$i) + 1)|0;
           $rem494$i = (($234>>>0) % ($mul499$i>>>0))&-1;
           $cmp495$i = ($rem494$i|0)==(0);
           if ($cmp495$i) {
            $i$3512$i = $mul499$i;$j$1513$i = $inc500$i;
           } else {
            $j$2$i = $inc500$i;
            break;
           }
          }
         } else {
          $j$2$i = 9;
         }
        } while(0);
        $or504$i = $t$addr$0$i | 32;
        $cmp505$i = ($or504$i|0)==(102);
        $sub$ptr$lhs$cast508$i = $z$7$i;
        $sub$ptr$sub510$i = (($sub$ptr$lhs$cast508$i) - ($sub$ptr$lhs$cast318$i))|0;
        $sub$ptr$div511$i = $sub$ptr$sub510$i >> 2;
        $235 = ($sub$ptr$div511$i*9)|0;
        $mul513$i = (($235) + -9)|0;
        if ($cmp505$i) {
         $sub514$i = (($mul513$i) - ($j$2$i))|0;
         $cmp515$i = ($sub514$i|0)<(0);
         $$sub514$i = $cmp515$i ? 0 : $sub514$i;
         $cmp528$i = ($p$addr$2$i|0)<($$sub514$i|0);
         $p$addr$2$$sub514398$i = $cmp528$i ? $p$addr$2$i : $$sub514$i;
         $and610$pre$phi$iZ2D = 0;$p$addr$3$i = $p$addr$2$$sub514398$i;$t$addr$1$i = $t$addr$0$i;
         break;
        } else {
         $add561$i = (($mul513$i) + ($e$5$ph$i))|0;
         $sub562$i = (($add561$i) - ($j$2$i))|0;
         $cmp563$i = ($sub562$i|0)<(0);
         $$sub562$i = $cmp563$i ? 0 : $sub562$i;
         $cmp577$i = ($p$addr$2$i|0)<($$sub562$i|0);
         $p$addr$2$$sub562399$i = $cmp577$i ? $p$addr$2$i : $$sub562$i;
         $and610$pre$phi$iZ2D = 0;$p$addr$3$i = $p$addr$2$$sub562399$i;$t$addr$1$i = $t$addr$0$i;
         break;
        }
       } else {
        $$pre562$i = $fl$1$and220 & 8;
        $and610$pre$phi$iZ2D = $$pre562$i;$p$addr$3$i = $$p$i;$t$addr$1$i = $t$0;
       }
      } while(0);
      $236 = $p$addr$3$i | $and610$pre$phi$iZ2D;
      $237 = ($236|0)!=(0);
      $lor$ext$i = $237&1;
      $or613$i = $t$addr$1$i | 32;
      $cmp614$i = ($or613$i|0)==(102);
      if ($cmp614$i) {
       $cmp617$i = ($e$5$ph$i|0)>(0);
       $add620$i = $cmp617$i ? $e$5$ph$i : 0;
       $estr$2$i = 0;$sub$ptr$sub650$pn$i = $add620$i;
      } else {
       $cmp623$i = ($e$5$ph$i|0)<(0);
       $cond629$i = $cmp623$i ? $sub626$le$i : $e$5$ph$i;
       $238 = ($cond629$i|0)<(0);
       $239 = $238 << 31 >> 31;
       $240 = (_fmt_u($cond629$i,$239,$arrayidx$i236)|0);
       $sub$ptr$rhs$cast634504$i = $240;
       $sub$ptr$sub635505$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast634504$i))|0;
       $cmp636506$i = ($sub$ptr$sub635505$i|0)<(2);
       if ($cmp636506$i) {
        $estr$1507$i = $240;
        while(1) {
         $incdec$ptr639$i = ((($estr$1507$i)) + -1|0);
         HEAP8[$incdec$ptr639$i>>0] = 48;
         $sub$ptr$rhs$cast634$i = $incdec$ptr639$i;
         $sub$ptr$sub635$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast634$i))|0;
         $cmp636$i = ($sub$ptr$sub635$i|0)<(2);
         if ($cmp636$i) {
          $estr$1507$i = $incdec$ptr639$i;
         } else {
          $estr$1$lcssa$i = $incdec$ptr639$i;
          break;
         }
        }
       } else {
        $estr$1$lcssa$i = $240;
       }
       $241 = $e$5$ph$i >> 31;
       $242 = $241 & 2;
       $243 = (($242) + 43)|0;
       $conv644$i = $243&255;
       $incdec$ptr645$i = ((($estr$1$lcssa$i)) + -1|0);
       HEAP8[$incdec$ptr645$i>>0] = $conv644$i;
       $conv646$i = $t$addr$1$i&255;
       $incdec$ptr647$i = ((($estr$1$lcssa$i)) + -2|0);
       HEAP8[$incdec$ptr647$i>>0] = $conv646$i;
       $sub$ptr$rhs$cast649$i = $incdec$ptr647$i;
       $sub$ptr$sub650$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast649$i))|0;
       $estr$2$i = $incdec$ptr647$i;$sub$ptr$sub650$pn$i = $sub$ptr$sub650$i;
      }
      $add608$i = (($pl$0$i) + 1)|0;
      $add612$i = (($add608$i) + ($p$addr$3$i))|0;
      $l$1$i = (($add612$i) + ($lor$ext$i))|0;
      $add653$i = (($l$1$i) + ($sub$ptr$sub650$pn$i))|0;
      _pad($f,32,$w$1,$add653$i,$fl$1$and220);
      $244 = HEAP32[$f>>2]|0;
      $and$i436$i = $244 & 32;
      $tobool$i437$i = ($and$i436$i|0)==(0);
      if ($tobool$i437$i) {
       (___fwritex($prefix$0$i,$pl$0$i,$f)|0);
      }
      $xor655$i = $fl$1$and220 ^ 65536;
      _pad($f,48,$w$1,$add653$i,$xor655$i);
      do {
       if ($cmp614$i) {
        $cmp660$i = ($a$9$ph$i>>>0)>($arraydecay208$add$ptr213$i>>>0);
        $r$0$a$9$i = $cmp660$i ? $arraydecay208$add$ptr213$i : $a$9$ph$i;
        $d$5494$i = $r$0$a$9$i;
        while(1) {
         $245 = HEAP32[$d$5494$i>>2]|0;
         $246 = (_fmt_u($245,0,$add$ptr671$i)|0);
         $cmp673$i = ($d$5494$i|0)==($r$0$a$9$i|0);
         do {
          if ($cmp673$i) {
           $cmp686$i = ($246|0)==($add$ptr671$i|0);
           if (!($cmp686$i)) {
            $s668$1$i = $246;
            break;
           }
           HEAP8[$incdec$ptr689$i>>0] = 48;
           $s668$1$i = $incdec$ptr689$i;
          } else {
           $cmp678491$i = ($246>>>0)>($buf$i>>>0);
           if (!($cmp678491$i)) {
            $s668$1$i = $246;
            break;
           }
           $247 = $246;
           $248 = (($247) - ($sub$ptr$rhs$cast$i))|0;
           _memset(($buf$i|0),48,($248|0))|0;
           $s668$0492$i = $246;
           while(1) {
            $incdec$ptr681$i = ((($s668$0492$i)) + -1|0);
            $cmp678$i = ($incdec$ptr681$i>>>0)>($buf$i>>>0);
            if ($cmp678$i) {
             $s668$0492$i = $incdec$ptr681$i;
            } else {
             $s668$1$i = $incdec$ptr681$i;
             break;
            }
           }
          }
         } while(0);
         $249 = HEAP32[$f>>2]|0;
         $and$i442$i = $249 & 32;
         $tobool$i443$i = ($and$i442$i|0)==(0);
         if ($tobool$i443$i) {
          $sub$ptr$rhs$cast695$i = $s668$1$i;
          $sub$ptr$sub696$i = (($sub$ptr$lhs$cast694$i) - ($sub$ptr$rhs$cast695$i))|0;
          (___fwritex($s668$1$i,$sub$ptr$sub696$i,$f)|0);
         }
         $incdec$ptr698$i = ((($d$5494$i)) + 4|0);
         $cmp665$i = ($incdec$ptr698$i>>>0)>($arraydecay208$add$ptr213$i>>>0);
         if ($cmp665$i) {
          break;
         } else {
          $d$5494$i = $incdec$ptr698$i;
         }
        }
        $250 = ($236|0)==(0);
        do {
         if (!($250)) {
          $251 = HEAP32[$f>>2]|0;
          $and$i448$i = $251 & 32;
          $tobool$i449$i = ($and$i448$i|0)==(0);
          if (!($tobool$i449$i)) {
           break;
          }
          (___fwritex(2759,1,$f)|0);
         }
        } while(0);
        $cmp707486$i = ($incdec$ptr698$i>>>0)<($z$7$i>>>0);
        $cmp710487$i = ($p$addr$3$i|0)>(0);
        $252 = $cmp710487$i & $cmp707486$i;
        if ($252) {
         $d$6488$i = $incdec$ptr698$i;$p$addr$4489$i = $p$addr$3$i;
         while(1) {
          $253 = HEAP32[$d$6488$i>>2]|0;
          $254 = (_fmt_u($253,0,$add$ptr671$i)|0);
          $cmp722483$i = ($254>>>0)>($buf$i>>>0);
          if ($cmp722483$i) {
           $255 = $254;
           $256 = (($255) - ($sub$ptr$rhs$cast$i))|0;
           _memset(($buf$i|0),48,($256|0))|0;
           $s715$0484$i = $254;
           while(1) {
            $incdec$ptr725$i = ((($s715$0484$i)) + -1|0);
            $cmp722$i = ($incdec$ptr725$i>>>0)>($buf$i>>>0);
            if ($cmp722$i) {
             $s715$0484$i = $incdec$ptr725$i;
            } else {
             $s715$0$lcssa$i = $incdec$ptr725$i;
             break;
            }
           }
          } else {
           $s715$0$lcssa$i = $254;
          }
          $257 = HEAP32[$f>>2]|0;
          $and$i454$i = $257 & 32;
          $tobool$i455$i = ($and$i454$i|0)==(0);
          if ($tobool$i455$i) {
           $cmp727$i = ($p$addr$4489$i|0)>(9);
           $cond732$i = $cmp727$i ? 9 : $p$addr$4489$i;
           (___fwritex($s715$0$lcssa$i,$cond732$i,$f)|0);
          }
          $incdec$ptr734$i = ((($d$6488$i)) + 4|0);
          $sub735$i = (($p$addr$4489$i) + -9)|0;
          $cmp707$i = ($incdec$ptr734$i>>>0)<($z$7$i>>>0);
          $cmp710$i = ($p$addr$4489$i|0)>(9);
          $258 = $cmp710$i & $cmp707$i;
          if ($258) {
           $d$6488$i = $incdec$ptr734$i;$p$addr$4489$i = $sub735$i;
          } else {
           $p$addr$4$lcssa$i = $sub735$i;
           break;
          }
         }
        } else {
         $p$addr$4$lcssa$i = $p$addr$3$i;
        }
        $add737$i = (($p$addr$4$lcssa$i) + 9)|0;
        _pad($f,48,$add737$i,9,0);
       } else {
        $add$ptr742$i = ((($a$9$ph$i)) + 4|0);
        $z$7$add$ptr742$i = $cmp450$lcssa$i ? $z$7$i : $add$ptr742$i;
        $cmp748499$i = ($p$addr$3$i|0)>(-1);
        if ($cmp748499$i) {
         $tobool781$i = ($and610$pre$phi$iZ2D|0)==(0);
         $d$7500$i = $a$9$ph$i;$p$addr$5501$i = $p$addr$3$i;
         while(1) {
          $259 = HEAP32[$d$7500$i>>2]|0;
          $260 = (_fmt_u($259,0,$add$ptr671$i)|0);
          $cmp760$i = ($260|0)==($add$ptr671$i|0);
          if ($cmp760$i) {
           HEAP8[$incdec$ptr689$i>>0] = 48;
           $s753$0$i = $incdec$ptr689$i;
          } else {
           $s753$0$i = $260;
          }
          $cmp765$i = ($d$7500$i|0)==($a$9$ph$i|0);
          do {
           if ($cmp765$i) {
            $incdec$ptr776$i = ((($s753$0$i)) + 1|0);
            $261 = HEAP32[$f>>2]|0;
            $and$i460$i = $261 & 32;
            $tobool$i461$i = ($and$i460$i|0)==(0);
            if ($tobool$i461$i) {
             (___fwritex($s753$0$i,1,$f)|0);
            }
            $cmp777$i = ($p$addr$5501$i|0)<(1);
            $or$cond401$i = $tobool781$i & $cmp777$i;
            if ($or$cond401$i) {
             $s753$2$i = $incdec$ptr776$i;
             break;
            }
            $262 = HEAP32[$f>>2]|0;
            $and$i466$i = $262 & 32;
            $tobool$i467$i = ($and$i466$i|0)==(0);
            if (!($tobool$i467$i)) {
             $s753$2$i = $incdec$ptr776$i;
             break;
            }
            (___fwritex(2759,1,$f)|0);
            $s753$2$i = $incdec$ptr776$i;
           } else {
            $cmp770495$i = ($s753$0$i>>>0)>($buf$i>>>0);
            if (!($cmp770495$i)) {
             $s753$2$i = $s753$0$i;
             break;
            }
            $scevgep556$i = (($s753$0$i) + ($0)|0);
            $scevgep556557$i = $scevgep556$i;
            _memset(($buf$i|0),48,($scevgep556557$i|0))|0;
            $s753$1496$i = $s753$0$i;
            while(1) {
             $incdec$ptr773$i = ((($s753$1496$i)) + -1|0);
             $cmp770$i = ($incdec$ptr773$i>>>0)>($buf$i>>>0);
             if ($cmp770$i) {
              $s753$1496$i = $incdec$ptr773$i;
             } else {
              $s753$2$i = $incdec$ptr773$i;
              break;
             }
            }
           }
          } while(0);
          $sub$ptr$rhs$cast788$i = $s753$2$i;
          $sub$ptr$sub789$i = (($sub$ptr$lhs$cast694$i) - ($sub$ptr$rhs$cast788$i))|0;
          $263 = HEAP32[$f>>2]|0;
          $and$i472$i = $263 & 32;
          $tobool$i473$i = ($and$i472$i|0)==(0);
          if ($tobool$i473$i) {
           $cmp790$i = ($p$addr$5501$i|0)>($sub$ptr$sub789$i|0);
           $cond800$i = $cmp790$i ? $sub$ptr$sub789$i : $p$addr$5501$i;
           (___fwritex($s753$2$i,$cond800$i,$f)|0);
          }
          $sub806$i = (($p$addr$5501$i) - ($sub$ptr$sub789$i))|0;
          $incdec$ptr808$i = ((($d$7500$i)) + 4|0);
          $cmp745$i = ($incdec$ptr808$i>>>0)<($z$7$add$ptr742$i>>>0);
          $cmp748$i = ($sub806$i|0)>(-1);
          $264 = $cmp745$i & $cmp748$i;
          if ($264) {
           $d$7500$i = $incdec$ptr808$i;$p$addr$5501$i = $sub806$i;
          } else {
           $p$addr$5$lcssa$i = $sub806$i;
           break;
          }
         }
        } else {
         $p$addr$5$lcssa$i = $p$addr$3$i;
        }
        $add810$i = (($p$addr$5$lcssa$i) + 18)|0;
        _pad($f,48,$add810$i,18,0);
        $265 = HEAP32[$f>>2]|0;
        $and$i$i = $265 & 32;
        $tobool$i$i = ($and$i$i|0)==(0);
        if (!($tobool$i$i)) {
         break;
        }
        $sub$ptr$rhs$cast812$i = $estr$2$i;
        $sub$ptr$sub813$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast812$i))|0;
        (___fwritex($estr$2$i,$sub$ptr$sub813$i,$f)|0);
       }
      } while(0);
      $xor816$i = $fl$1$and220 ^ 8192;
      _pad($f,32,$w$1,$add653$i,$xor816$i);
      $cmp818$i = ($add653$i|0)<($w$1|0);
      $w$add653$i = $cmp818$i ? $w$1 : $add653$i;
      $retval$0$i = $w$add653$i;
     } else {
      $and36$i = $t$0 & 32;
      $tobool37$i = ($and36$i|0)!=(0);
      $cond$i = $tobool37$i ? 2743 : 2747;
      $cmp38$i = ($y$addr$0$i != $y$addr$0$i) | (0.0 != 0.0);
      $cond43$i = $tobool37$i ? 2751 : 2755;
      $pl$1$i = $cmp38$i ? 0 : $pl$0$i;
      $s35$0$i = $cmp38$i ? $cond43$i : $cond$i;
      $add$i240 = (($pl$1$i) + 3)|0;
      _pad($f,32,$w$1,$add$i240,$and220);
      $191 = HEAP32[$f>>2]|0;
      $and$i406$i = $191 & 32;
      $tobool$i407$i = ($and$i406$i|0)==(0);
      if ($tobool$i407$i) {
       (___fwritex($prefix$0$i,$pl$1$i,$f)|0);
       $$pre$i = HEAP32[$f>>2]|0;
       $192 = $$pre$i;
      } else {
       $192 = $191;
      }
      $and$i412$i = $192 & 32;
      $tobool$i413$i = ($and$i412$i|0)==(0);
      if ($tobool$i413$i) {
       (___fwritex($s35$0$i,3,$f)|0);
      }
      $xor$i = $fl$1$and220 ^ 8192;
      _pad($f,32,$w$1,$add$i240,$xor$i);
      $cmp48$i = ($add$i240|0)<($w$1|0);
      $cond53$i = $cmp48$i ? $w$1 : $add$i240;
      $retval$0$i = $cond53$i;
     }
    } while(0);
    $cnt$0 = $cnt$1;$l$0 = $retval$0$i;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
    continue L1;
    break;
   }
   default: {
    $a$2 = $s$0;$fl$6 = $fl$1$and220;$p$5 = $p$0;$pl$2 = 0;$prefix$2 = 2707;$z$2 = $add$ptr206;
   }
   }
  } while(0);
  L310: do {
   if ((label|0) == 63) {
    label = 0;
    $88 = $arg;
    $89 = $88;
    $90 = HEAP32[$89>>2]|0;
    $91 = (($88) + 4)|0;
    $92 = $91;
    $93 = HEAP32[$92>>2]|0;
    $and250 = $t$1 & 32;
    $94 = ($90|0)==(0);
    $95 = ($93|0)==(0);
    $96 = $94 & $95;
    if ($96) {
     $112 = 0;$114 = 0;$s$addr$0$lcssa$i = $add$ptr206;
    } else {
     $97 = $90;$99 = $93;$s$addr$06$i = $add$ptr206;
     while(1) {
      $idxprom$i = $97 & 15;
      $arrayidx$i = (2691 + ($idxprom$i)|0);
      $98 = HEAP8[$arrayidx$i>>0]|0;
      $conv4$i211 = $98&255;
      $or$i = $conv4$i211 | $and250;
      $conv1$i = $or$i&255;
      $incdec$ptr$i212 = ((($s$addr$06$i)) + -1|0);
      HEAP8[$incdec$ptr$i212>>0] = $conv1$i;
      $100 = (_bitshift64Lshr(($97|0),($99|0),4)|0);
      $101 = tempRet0;
      $102 = ($100|0)==(0);
      $103 = ($101|0)==(0);
      $104 = $102 & $103;
      if ($104) {
       break;
      } else {
       $97 = $100;$99 = $101;$s$addr$06$i = $incdec$ptr$i212;
      }
     }
     $105 = $arg;
     $106 = $105;
     $107 = HEAP32[$106>>2]|0;
     $108 = (($105) + 4)|0;
     $109 = $108;
     $110 = HEAP32[$109>>2]|0;
     $112 = $107;$114 = $110;$s$addr$0$lcssa$i = $incdec$ptr$i212;
    }
    $111 = ($112|0)==(0);
    $113 = ($114|0)==(0);
    $115 = $111 & $113;
    $and255 = $fl$3 & 8;
    $tobool256 = ($and255|0)==(0);
    $or$cond193 = $tobool256 | $115;
    $shr = $t$1 >> 4;
    $add$ptr258 = (2707 + ($shr)|0);
    $$add$ptr258 = $or$cond193 ? 2707 : $add$ptr258;
    $$272 = $or$cond193 ? 0 : 2;
    $a$0 = $s$addr$0$lcssa$i;$fl$4 = $fl$3;$p$2 = $p$1;$pl$1 = $$272;$prefix$1 = $$add$ptr258;
    label = 76;
   }
   else if ((label|0) == 75) {
    label = 0;
    $150 = (_fmt_u($148,$149,$add$ptr206)|0);
    $a$0 = $150;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = $pl$0;$prefix$1 = $prefix$0;
    label = 76;
   }
   else if ((label|0) == 81) {
    label = 0;
    $call357 = (_memchr($a$1,0,$p$0)|0);
    $tobool358 = ($call357|0)==(0|0);
    $sub$ptr$lhs$cast362 = $call357;
    $sub$ptr$rhs$cast363 = $a$1;
    $sub$ptr$sub364 = (($sub$ptr$lhs$cast362) - ($sub$ptr$rhs$cast363))|0;
    $add$ptr360 = (($a$1) + ($p$0)|0);
    $p$3 = $tobool358 ? $p$0 : $sub$ptr$sub364;
    $z$1 = $tobool358 ? $add$ptr360 : $call357;
    $a$2 = $a$1;$fl$6 = $and220;$p$5 = $p$3;$pl$2 = 0;$prefix$2 = 2707;$z$2 = $z$1;
   }
   else if ((label|0) == 85) {
    label = 0;
    $i$0310 = 0;$l$1309 = 0;$ws$0311 = $270;
    while(1) {
     $176 = HEAP32[$ws$0311>>2]|0;
     $tobool381 = ($176|0)==(0);
     if ($tobool381) {
      $i$0$lcssa = $i$0310;$l$2 = $l$1309;
      break;
     }
     $call385 = (_wctomb($mb,$176)|0);
     $cmp386 = ($call385|0)<(0);
     $sub390 = (($p$4340) - ($i$0310))|0;
     $cmp391 = ($call385>>>0)>($sub390>>>0);
     $or$cond195 = $cmp386 | $cmp391;
     if ($or$cond195) {
      $i$0$lcssa = $i$0310;$l$2 = $call385;
      break;
     }
     $incdec$ptr384 = ((($ws$0311)) + 4|0);
     $add396 = (($call385) + ($i$0310))|0;
     $cmp378 = ($p$4340>>>0)>($add396>>>0);
     if ($cmp378) {
      $i$0310 = $add396;$l$1309 = $call385;$ws$0311 = $incdec$ptr384;
     } else {
      $i$0$lcssa = $add396;$l$2 = $call385;
      break;
     }
    }
    $cmp398 = ($l$2|0)<(0);
    if ($cmp398) {
     $retval$0 = -1;
     break L1;
    }
    _pad($f,32,$w$1,$i$0$lcssa,$fl$1$and220);
    $cmp405318 = ($i$0$lcssa|0)==(0);
    if ($cmp405318) {
     $i$0$lcssa343 = 0;
     label = 96;
    } else {
     $i$1319 = 0;$ws$1320 = $270;
     while(1) {
      $177 = HEAP32[$ws$1320>>2]|0;
      $tobool408 = ($177|0)==(0);
      if ($tobool408) {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 96;
       break L310;
      }
      $incdec$ptr411 = ((($ws$1320)) + 4|0);
      $call412 = (_wctomb($mb,$177)|0);
      $add413 = (($call412) + ($i$1319))|0;
      $cmp414 = ($add413|0)>($i$0$lcssa|0);
      if ($cmp414) {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 96;
       break L310;
      }
      $178 = HEAP32[$f>>2]|0;
      $and$i231 = $178 & 32;
      $tobool$i232 = ($and$i231|0)==(0);
      if ($tobool$i232) {
       (___fwritex($mb,$call412,$f)|0);
      }
      $cmp405 = ($add413>>>0)<($i$0$lcssa>>>0);
      if ($cmp405) {
       $i$1319 = $add413;$ws$1320 = $incdec$ptr411;
      } else {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 96;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 96) {
   label = 0;
   $xor = $fl$1$and220 ^ 8192;
   _pad($f,32,$w$1,$i$0$lcssa343,$xor);
   $cmp422 = ($w$1|0)>($i$0$lcssa343|0);
   $cond427 = $cmp422 ? $w$1 : $i$0$lcssa343;
   $cnt$0 = $cnt$1;$l$0 = $cond427;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
   continue;
  }
  if ((label|0) == 76) {
   label = 0;
   $cmp307 = ($p$2|0)>(-1);
   $and310 = $fl$4 & -65537;
   $and310$fl$4 = $cmp307 ? $and310 : $fl$4;
   $151 = $arg;
   $152 = $151;
   $153 = HEAP32[$152>>2]|0;
   $154 = (($151) + 4)|0;
   $155 = $154;
   $156 = HEAP32[$155>>2]|0;
   $157 = ($153|0)!=(0);
   $158 = ($156|0)!=(0);
   $159 = $157 | $158;
   $tobool315 = ($p$2|0)!=(0);
   $or$cond = $tobool315 | $159;
   if ($or$cond) {
    $sub$ptr$rhs$cast319 = $a$0;
    $sub$ptr$sub320 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast319))|0;
    $160 = $159&1;
    $lnot$ext = $160 ^ 1;
    $add323 = (($lnot$ext) + ($sub$ptr$sub320))|0;
    $cmp324 = ($p$2|0)>($add323|0);
    $p$2$add323 = $cmp324 ? $p$2 : $add323;
    $a$2 = $a$0;$fl$6 = $and310$fl$4;$p$5 = $p$2$add323;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $add$ptr206;
   } else {
    $a$2 = $add$ptr206;$fl$6 = $and310$fl$4;$p$5 = 0;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $add$ptr206;
   }
  }
  $sub$ptr$lhs$cast432 = $z$2;
  $sub$ptr$rhs$cast433 = $a$2;
  $sub$ptr$sub434 = (($sub$ptr$lhs$cast432) - ($sub$ptr$rhs$cast433))|0;
  $cmp435 = ($p$5|0)<($sub$ptr$sub434|0);
  $sub$ptr$sub434$p$5 = $cmp435 ? $sub$ptr$sub434 : $p$5;
  $add442 = (($sub$ptr$sub434$p$5) + ($pl$2))|0;
  $cmp443 = ($w$1|0)<($add442|0);
  $w$2 = $cmp443 ? $add442 : $w$1;
  _pad($f,32,$w$2,$add442,$fl$6);
  $266 = HEAP32[$f>>2]|0;
  $and$i245 = $266 & 32;
  $tobool$i246 = ($and$i245|0)==(0);
  if ($tobool$i246) {
   (___fwritex($prefix$2,$pl$2,$f)|0);
  }
  $xor450 = $fl$6 ^ 65536;
  _pad($f,48,$w$2,$add442,$xor450);
  _pad($f,48,$sub$ptr$sub434$p$5,$sub$ptr$sub434,0);
  $267 = HEAP32[$f>>2]|0;
  $and$i216 = $267 & 32;
  $tobool$i217 = ($and$i216|0)==(0);
  if ($tobool$i217) {
   (___fwritex($a$2,$sub$ptr$sub434,$f)|0);
  }
  $xor458 = $fl$6 ^ 8192;
  _pad($f,32,$w$2,$add442,$xor458);
  $cnt$0 = $cnt$1;$l$0 = $w$2;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
 }
 L345: do {
  if ((label|0) == 243) {
   $tobool460 = ($f|0)==(0|0);
   if ($tobool460) {
    $tobool463 = ($l10n$0|0)==(0);
    if ($tobool463) {
     $retval$0 = 0;
    } else {
     $i$2292 = 1;
     while(1) {
      $arrayidx470 = (($nl_type) + ($i$2292<<2)|0);
      $268 = HEAP32[$arrayidx470>>2]|0;
      $tobool471 = ($268|0)==(0);
      if ($tobool471) {
       $i$3289 = $i$2292;
       break;
      }
      $add$ptr474 = (($nl_arg) + ($i$2292<<3)|0);
      _pop_arg($add$ptr474,$268,$ap);
      $inc = (($i$2292) + 1)|0;
      $cmp467 = ($inc|0)<(10);
      if ($cmp467) {
       $i$2292 = $inc;
      } else {
       $retval$0 = 1;
       break L345;
      }
     }
     while(1) {
      $arrayidx482 = (($nl_type) + ($i$3289<<2)|0);
      $269 = HEAP32[$arrayidx482>>2]|0;
      $lnot484 = ($269|0)==(0);
      $inc489 = (($i$3289) + 1)|0;
      if (!($lnot484)) {
       $retval$0 = -1;
       break L345;
      }
      $cmp479 = ($inc489|0)<(10);
      if ($cmp479) {
       $i$3289 = $inc489;
      } else {
       $retval$0 = 1;
       break;
      }
     }
    }
   } else {
    $retval$0 = $cnt$1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function ___lockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function ___fwritex($s,$l,$f) {
 $s = $s|0;
 $l = $l|0;
 $f = $f|0;
 var $$pre = 0, $$pre31 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr26 = 0, $arrayidx = 0, $call = 0, $call16 = 0, $call4 = 0;
 var $cmp = 0, $cmp11 = 0, $cmp17 = 0, $cmp6 = 0, $i$0 = 0, $i$1 = 0, $l$addr$0 = 0, $lbf = 0, $retval$0 = 0, $s$addr$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub21 = 0, $tobool = 0, $tobool1 = 0, $tobool9 = 0, $wend = 0, $wpos = 0, $write = 0, $write15 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $wend = ((($f)) + 16|0);
 $0 = HEAP32[$wend>>2]|0;
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = HEAP32[$wend>>2]|0;
   $3 = $$pre;
   label = 5;
  } else {
   $retval$0 = 0;
  }
 } else {
  $1 = $0;
  $3 = $1;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $wpos = ((($f)) + 20|0);
   $2 = HEAP32[$wpos>>2]|0;
   $sub$ptr$sub = (($3) - ($2))|0;
   $cmp = ($sub$ptr$sub>>>0)<($l>>>0);
   $4 = $2;
   if ($cmp) {
    $write = ((($f)) + 36|0);
    $5 = HEAP32[$write>>2]|0;
    $call4 = (FUNCTION_TABLE_iiii[$5 & 31]($f,$s,$l)|0);
    $retval$0 = $call4;
    break;
   }
   $lbf = ((($f)) + 75|0);
   $6 = HEAP8[$lbf>>0]|0;
   $cmp6 = ($6<<24>>24)>(-1);
   L10: do {
    if ($cmp6) {
     $i$0 = $l;
     while(1) {
      $tobool9 = ($i$0|0)==(0);
      if ($tobool9) {
       $9 = $4;$i$1 = 0;$l$addr$0 = $l;$s$addr$0 = $s;
       break L10;
      }
      $sub = (($i$0) + -1)|0;
      $arrayidx = (($s) + ($sub)|0);
      $7 = HEAP8[$arrayidx>>0]|0;
      $cmp11 = ($7<<24>>24)==(10);
      if ($cmp11) {
       break;
      } else {
       $i$0 = $sub;
      }
     }
     $write15 = ((($f)) + 36|0);
     $8 = HEAP32[$write15>>2]|0;
     $call16 = (FUNCTION_TABLE_iiii[$8 & 31]($f,$s,$i$0)|0);
     $cmp17 = ($call16>>>0)<($i$0>>>0);
     if ($cmp17) {
      $retval$0 = $i$0;
      break L5;
     }
     $add$ptr = (($s) + ($i$0)|0);
     $sub21 = (($l) - ($i$0))|0;
     $$pre31 = HEAP32[$wpos>>2]|0;
     $9 = $$pre31;$i$1 = $i$0;$l$addr$0 = $sub21;$s$addr$0 = $add$ptr;
    } else {
     $9 = $4;$i$1 = 0;$l$addr$0 = $l;$s$addr$0 = $s;
    }
   } while(0);
   _memcpy(($9|0),($s$addr$0|0),($l$addr$0|0))|0;
   $10 = HEAP32[$wpos>>2]|0;
   $add$ptr26 = (($10) + ($l$addr$0)|0);
   HEAP32[$wpos>>2] = $add$ptr26;
   $add = (($i$1) + ($l$addr$0))|0;
   $retval$0 = $add;
  }
 } while(0);
 return ($retval$0|0);
}
function _pop_arg($arg,$type,$ap) {
 $arg = $arg|0;
 $type = $type|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0.0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
 var $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0;
 var $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $cmp = 0, $conv16 = 0, $conv22$mask = 0, $conv28 = 0, $conv34$mask = 0, $expanded = 0, $expanded28 = 0, $expanded30 = 0, $expanded31 = 0;
 var $expanded32 = 0, $expanded34 = 0, $expanded35 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded41 = 0, $expanded42 = 0, $expanded44 = 0, $expanded45 = 0, $expanded46 = 0, $expanded48 = 0, $expanded49 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded55 = 0, $expanded56 = 0, $expanded58 = 0, $expanded59 = 0;
 var $expanded60 = 0, $expanded62 = 0, $expanded63 = 0, $expanded65 = 0, $expanded66 = 0, $expanded67 = 0, $expanded69 = 0, $expanded70 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded76 = 0, $expanded77 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded83 = 0, $expanded84 = 0, $expanded86 = 0, $expanded87 = 0;
 var $expanded88 = 0, $expanded90 = 0, $expanded91 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($type>>>0)>(20);
 L1: do {
  if (!($cmp)) {
   do {
    switch ($type|0) {
    case 9:  {
     $arglist_current = HEAP32[$ap>>2]|0;
     $0 = $arglist_current;
     $1 = ((0) + 4|0);
     $expanded28 = $1;
     $expanded = (($expanded28) - 1)|0;
     $2 = (($0) + ($expanded))|0;
     $3 = ((0) + 4|0);
     $expanded32 = $3;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $4 = $2 & $expanded30;
     $5 = $4;
     $6 = HEAP32[$5>>2]|0;
     $arglist_next = ((($5)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next;
     HEAP32[$arg>>2] = $6;
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = HEAP32[$ap>>2]|0;
     $7 = $arglist_current2;
     $8 = ((0) + 4|0);
     $expanded35 = $8;
     $expanded34 = (($expanded35) - 1)|0;
     $9 = (($7) + ($expanded34))|0;
     $10 = ((0) + 4|0);
     $expanded39 = $10;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $11 = $9 & $expanded37;
     $12 = $11;
     $13 = HEAP32[$12>>2]|0;
     $arglist_next3 = ((($12)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next3;
     $14 = ($13|0)<(0);
     $15 = $14 << 31 >> 31;
     $16 = $arg;
     $17 = $16;
     HEAP32[$17>>2] = $13;
     $18 = (($16) + 4)|0;
     $19 = $18;
     HEAP32[$19>>2] = $15;
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = HEAP32[$ap>>2]|0;
     $20 = $arglist_current5;
     $21 = ((0) + 4|0);
     $expanded42 = $21;
     $expanded41 = (($expanded42) - 1)|0;
     $22 = (($20) + ($expanded41))|0;
     $23 = ((0) + 4|0);
     $expanded46 = $23;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $24 = $22 & $expanded44;
     $25 = $24;
     $26 = HEAP32[$25>>2]|0;
     $arglist_next6 = ((($25)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next6;
     $27 = $arg;
     $28 = $27;
     HEAP32[$28>>2] = $26;
     $29 = (($27) + 4)|0;
     $30 = $29;
     HEAP32[$30>>2] = 0;
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = HEAP32[$ap>>2]|0;
     $31 = $arglist_current8;
     $32 = ((0) + 8|0);
     $expanded49 = $32;
     $expanded48 = (($expanded49) - 1)|0;
     $33 = (($31) + ($expanded48))|0;
     $34 = ((0) + 8|0);
     $expanded53 = $34;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $35 = $33 & $expanded51;
     $36 = $35;
     $37 = $36;
     $38 = $37;
     $39 = HEAP32[$38>>2]|0;
     $40 = (($37) + 4)|0;
     $41 = $40;
     $42 = HEAP32[$41>>2]|0;
     $arglist_next9 = ((($36)) + 8|0);
     HEAP32[$ap>>2] = $arglist_next9;
     $43 = $arg;
     $44 = $43;
     HEAP32[$44>>2] = $39;
     $45 = (($43) + 4)|0;
     $46 = $45;
     HEAP32[$46>>2] = $42;
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = HEAP32[$ap>>2]|0;
     $47 = $arglist_current11;
     $48 = ((0) + 4|0);
     $expanded56 = $48;
     $expanded55 = (($expanded56) - 1)|0;
     $49 = (($47) + ($expanded55))|0;
     $50 = ((0) + 4|0);
     $expanded60 = $50;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $51 = $49 & $expanded58;
     $52 = $51;
     $53 = HEAP32[$52>>2]|0;
     $arglist_next12 = ((($52)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next12;
     $conv16 = $53&65535;
     $54 = $conv16 << 16 >> 16;
     $55 = ($54|0)<(0);
     $56 = $55 << 31 >> 31;
     $57 = $arg;
     $58 = $57;
     HEAP32[$58>>2] = $54;
     $59 = (($57) + 4)|0;
     $60 = $59;
     HEAP32[$60>>2] = $56;
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = HEAP32[$ap>>2]|0;
     $61 = $arglist_current14;
     $62 = ((0) + 4|0);
     $expanded63 = $62;
     $expanded62 = (($expanded63) - 1)|0;
     $63 = (($61) + ($expanded62))|0;
     $64 = ((0) + 4|0);
     $expanded67 = $64;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $65 = $63 & $expanded65;
     $66 = $65;
     $67 = HEAP32[$66>>2]|0;
     $arglist_next15 = ((($66)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next15;
     $conv22$mask = $67 & 65535;
     $68 = $arg;
     $69 = $68;
     HEAP32[$69>>2] = $conv22$mask;
     $70 = (($68) + 4)|0;
     $71 = $70;
     HEAP32[$71>>2] = 0;
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = HEAP32[$ap>>2]|0;
     $72 = $arglist_current17;
     $73 = ((0) + 4|0);
     $expanded70 = $73;
     $expanded69 = (($expanded70) - 1)|0;
     $74 = (($72) + ($expanded69))|0;
     $75 = ((0) + 4|0);
     $expanded74 = $75;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $76 = $74 & $expanded72;
     $77 = $76;
     $78 = HEAP32[$77>>2]|0;
     $arglist_next18 = ((($77)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next18;
     $conv28 = $78&255;
     $79 = $conv28 << 24 >> 24;
     $80 = ($79|0)<(0);
     $81 = $80 << 31 >> 31;
     $82 = $arg;
     $83 = $82;
     HEAP32[$83>>2] = $79;
     $84 = (($82) + 4)|0;
     $85 = $84;
     HEAP32[$85>>2] = $81;
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = HEAP32[$ap>>2]|0;
     $86 = $arglist_current20;
     $87 = ((0) + 4|0);
     $expanded77 = $87;
     $expanded76 = (($expanded77) - 1)|0;
     $88 = (($86) + ($expanded76))|0;
     $89 = ((0) + 4|0);
     $expanded81 = $89;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $90 = $88 & $expanded79;
     $91 = $90;
     $92 = HEAP32[$91>>2]|0;
     $arglist_next21 = ((($91)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next21;
     $conv34$mask = $92 & 255;
     $93 = $arg;
     $94 = $93;
     HEAP32[$94>>2] = $conv34$mask;
     $95 = (($93) + 4)|0;
     $96 = $95;
     HEAP32[$96>>2] = 0;
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = HEAP32[$ap>>2]|0;
     $97 = $arglist_current23;
     $98 = ((0) + 8|0);
     $expanded84 = $98;
     $expanded83 = (($expanded84) - 1)|0;
     $99 = (($97) + ($expanded83))|0;
     $100 = ((0) + 8|0);
     $expanded88 = $100;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $101 = $99 & $expanded86;
     $102 = $101;
     $103 = +HEAPF64[$102>>3];
     $arglist_next24 = ((($102)) + 8|0);
     HEAP32[$ap>>2] = $arglist_next24;
     HEAPF64[$arg>>3] = $103;
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = HEAP32[$ap>>2]|0;
     $104 = $arglist_current26;
     $105 = ((0) + 8|0);
     $expanded91 = $105;
     $expanded90 = (($expanded91) - 1)|0;
     $106 = (($104) + ($expanded90))|0;
     $107 = ((0) + 8|0);
     $expanded95 = $107;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $108 = $106 & $expanded93;
     $109 = $108;
     $110 = +HEAPF64[$109>>3];
     $arglist_next27 = ((($109)) + 8|0);
     HEAP32[$ap>>2] = $arglist_next27;
     HEAPF64[$arg>>3] = $110;
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_u($0,$1,$s) {
 $0 = $0|0;
 $1 = $1|0;
 $s = $s|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add5 = 0;
 var $conv6 = 0, $div9 = 0, $incdec$ptr = 0, $incdec$ptr7 = 0, $rem4 = 0, $s$addr$0$lcssa = 0, $s$addr$013 = 0, $s$addr$1$lcssa = 0, $s$addr$19 = 0, $tobool8 = 0, $x$addr$0$lcssa$off0 = 0, $y$010 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1>>>0)>(0);
 $3 = ($0>>>0)>(4294967295);
 $4 = ($1|0)==(0);
 $5 = $4 & $3;
 $6 = $2 | $5;
 if ($6) {
  $7 = $0;$8 = $1;$s$addr$013 = $s;
  while(1) {
   $9 = (___uremdi3(($7|0),($8|0),10,0)|0);
   $10 = tempRet0;
   $11 = $9 | 48;
   $12 = $11&255;
   $incdec$ptr = ((($s$addr$013)) + -1|0);
   HEAP8[$incdec$ptr>>0] = $12;
   $13 = (___udivdi3(($7|0),($8|0),10,0)|0);
   $14 = tempRet0;
   $15 = ($8>>>0)>(9);
   $16 = ($7>>>0)>(4294967295);
   $17 = ($8|0)==(9);
   $18 = $17 & $16;
   $19 = $15 | $18;
   if ($19) {
    $7 = $13;$8 = $14;$s$addr$013 = $incdec$ptr;
   } else {
    break;
   }
  }
  $s$addr$0$lcssa = $incdec$ptr;$x$addr$0$lcssa$off0 = $13;
 } else {
  $s$addr$0$lcssa = $s;$x$addr$0$lcssa$off0 = $0;
 }
 $tobool8 = ($x$addr$0$lcssa$off0|0)==(0);
 if ($tobool8) {
  $s$addr$1$lcssa = $s$addr$0$lcssa;
 } else {
  $s$addr$19 = $s$addr$0$lcssa;$y$010 = $x$addr$0$lcssa$off0;
  while(1) {
   $rem4 = (($y$010>>>0) % 10)&-1;
   $add5 = $rem4 | 48;
   $conv6 = $add5&255;
   $incdec$ptr7 = ((($s$addr$19)) + -1|0);
   HEAP8[$incdec$ptr7>>0] = $conv6;
   $div9 = (($y$010>>>0) / 10)&-1;
   $20 = ($y$010>>>0)<(10);
   if ($20) {
    $s$addr$1$lcssa = $incdec$ptr7;
    break;
   } else {
    $s$addr$19 = $incdec$ptr7;$y$010 = $div9;
   }
  }
 }
 return ($s$addr$1$lcssa|0);
}
function _strerror($e) {
 $e = $e|0;
 var $0 = 0, $1 = 0, $arrayidx = 0, $cmp = 0, $conv = 0, $dec = 0, $i$012 = 0, $i$111 = 0, $inc = 0, $incdec$ptr = 0, $s$0$lcssa = 0, $s$010 = 0, $s$1 = 0, $tobool = 0, $tobool5 = 0, $tobool59 = 0, $tobool8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $i$012 = 0;
 while(1) {
  $arrayidx = (2761 + ($i$012)|0);
  $0 = HEAP8[$arrayidx>>0]|0;
  $conv = $0&255;
  $cmp = ($conv|0)==($e|0);
  if ($cmp) {
   label = 2;
   break;
  }
  $inc = (($i$012) + 1)|0;
  $tobool = ($inc|0)==(87);
  if ($tobool) {
   $i$111 = 87;$s$010 = 2849;
   label = 5;
   break;
  } else {
   $i$012 = $inc;
  }
 }
 if ((label|0) == 2) {
  $tobool59 = ($i$012|0)==(0);
  if ($tobool59) {
   $s$0$lcssa = 2849;
  } else {
   $i$111 = $i$012;$s$010 = 2849;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $s$1 = $s$010;
   while(1) {
    $1 = HEAP8[$s$1>>0]|0;
    $tobool8 = ($1<<24>>24)==(0);
    $incdec$ptr = ((($s$1)) + 1|0);
    if ($tobool8) {
     break;
    } else {
     $s$1 = $incdec$ptr;
    }
   }
   $dec = (($i$111) + -1)|0;
   $tobool5 = ($dec|0)==(0);
   if ($tobool5) {
    $s$0$lcssa = $incdec$ptr;
    break;
   } else {
    $i$111 = $dec;$s$010 = $incdec$ptr;
    label = 5;
   }
  }
 }
 return ($s$0$lcssa|0);
}
function _memchr($src,$c,$n) {
 $src = $src|0;
 $c = $c|0;
 $n = $n|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $and = 0, $and15 = 0, $and16 = 0, $and39 = 0, $cmp = 0, $cmp11 = 0, $cmp1132 = 0, $cmp28 = 0, $cmp8 = 0, $cond = 0, $conv1 = 0, $dec = 0;
 var $dec34 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0, $incdec$ptr33 = 0, $lnot = 0, $mul = 0, $n$addr$0$lcssa = 0, $n$addr$0$lcssa52 = 0, $n$addr$043 = 0, $n$addr$1$lcssa = 0, $n$addr$133 = 0, $n$addr$227 = 0, $n$addr$3 = 0, $neg = 0, $or$cond = 0, $or$cond42 = 0, $s$0$lcssa = 0, $s$0$lcssa53 = 0, $s$044 = 0, $s$128 = 0;
 var $s$2 = 0, $sub = 0, $sub22 = 0, $tobool = 0, $tobool2 = 0, $tobool2$lcssa = 0, $tobool241 = 0, $tobool25 = 0, $tobool2526 = 0, $tobool36 = 0, $tobool40 = 0, $w$0$lcssa = 0, $w$034 = 0, $xor = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $conv1 = $c & 255;
 $0 = $src;
 $and39 = $0 & 3;
 $tobool40 = ($and39|0)!=(0);
 $tobool241 = ($n|0)!=(0);
 $or$cond42 = $tobool241 & $tobool40;
 L1: do {
  if ($or$cond42) {
   $1 = $c&255;
   $n$addr$043 = $n;$s$044 = $src;
   while(1) {
    $2 = HEAP8[$s$044>>0]|0;
    $cmp = ($2<<24>>24)==($1<<24>>24);
    if ($cmp) {
     $n$addr$0$lcssa52 = $n$addr$043;$s$0$lcssa53 = $s$044;
     label = 6;
     break L1;
    }
    $incdec$ptr = ((($s$044)) + 1|0);
    $dec = (($n$addr$043) + -1)|0;
    $3 = $incdec$ptr;
    $and = $3 & 3;
    $tobool = ($and|0)!=(0);
    $tobool2 = ($dec|0)!=(0);
    $or$cond = $tobool2 & $tobool;
    if ($or$cond) {
     $n$addr$043 = $dec;$s$044 = $incdec$ptr;
    } else {
     $n$addr$0$lcssa = $dec;$s$0$lcssa = $incdec$ptr;$tobool2$lcssa = $tobool2;
     label = 5;
     break;
    }
   }
  } else {
   $n$addr$0$lcssa = $n;$s$0$lcssa = $src;$tobool2$lcssa = $tobool241;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($tobool2$lcssa) {
   $n$addr$0$lcssa52 = $n$addr$0$lcssa;$s$0$lcssa53 = $s$0$lcssa;
   label = 6;
  } else {
   $n$addr$3 = 0;$s$2 = $s$0$lcssa;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $4 = HEAP8[$s$0$lcssa53>>0]|0;
   $5 = $c&255;
   $cmp8 = ($4<<24>>24)==($5<<24>>24);
   if ($cmp8) {
    $n$addr$3 = $n$addr$0$lcssa52;$s$2 = $s$0$lcssa53;
   } else {
    $mul = Math_imul($conv1, 16843009)|0;
    $cmp1132 = ($n$addr$0$lcssa52>>>0)>(3);
    L11: do {
     if ($cmp1132) {
      $n$addr$133 = $n$addr$0$lcssa52;$w$034 = $s$0$lcssa53;
      while(1) {
       $6 = HEAP32[$w$034>>2]|0;
       $xor = $6 ^ $mul;
       $sub = (($xor) + -16843009)|0;
       $neg = $xor & -2139062144;
       $and15 = $neg ^ -2139062144;
       $and16 = $and15 & $sub;
       $lnot = ($and16|0)==(0);
       if (!($lnot)) {
        break;
       }
       $incdec$ptr21 = ((($w$034)) + 4|0);
       $sub22 = (($n$addr$133) + -4)|0;
       $cmp11 = ($sub22>>>0)>(3);
       if ($cmp11) {
        $n$addr$133 = $sub22;$w$034 = $incdec$ptr21;
       } else {
        $n$addr$1$lcssa = $sub22;$w$0$lcssa = $incdec$ptr21;
        label = 11;
        break L11;
       }
      }
      $n$addr$227 = $n$addr$133;$s$128 = $w$034;
     } else {
      $n$addr$1$lcssa = $n$addr$0$lcssa52;$w$0$lcssa = $s$0$lcssa53;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $tobool2526 = ($n$addr$1$lcssa|0)==(0);
     if ($tobool2526) {
      $n$addr$3 = 0;$s$2 = $w$0$lcssa;
      break;
     } else {
      $n$addr$227 = $n$addr$1$lcssa;$s$128 = $w$0$lcssa;
     }
    }
    while(1) {
     $7 = HEAP8[$s$128>>0]|0;
     $cmp28 = ($7<<24>>24)==($5<<24>>24);
     if ($cmp28) {
      $n$addr$3 = $n$addr$227;$s$2 = $s$128;
      break L8;
     }
     $incdec$ptr33 = ((($s$128)) + 1|0);
     $dec34 = (($n$addr$227) + -1)|0;
     $tobool25 = ($dec34|0)==(0);
     if ($tobool25) {
      $n$addr$3 = 0;$s$2 = $incdec$ptr33;
      break;
     } else {
      $n$addr$227 = $dec34;$s$128 = $incdec$ptr33;
     }
    }
   }
  }
 } while(0);
 $tobool36 = ($n$addr$3|0)!=(0);
 $cond = $tobool36 ? $s$2 : 0;
 return ($cond|0);
}
function _pad($f,$c,$w,$l,$fl) {
 $f = $f|0;
 $c = $c|0;
 $w = $w|0;
 $l = $l|0;
 $fl = $fl|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $and = 0, $and$i = 0, $and$i15 = 0, $cmp = 0, $cmp1 = 0, $cmp3 = 0, $cmp314 = 0, $cond = 0, $l$addr$0$lcssa21 = 0, $l$addr$017 = 0, $or$cond = 0, $pad = 0, $sub = 0, $sub6 = 0;
 var $tobool = 0, $tobool$i = 0, $tobool$i16 = 0, $tobool$i18 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(256|0);
 $pad = sp;
 $and = $fl & 73728;
 $tobool = ($and|0)==(0);
 $cmp = ($w|0)>($l|0);
 $or$cond = $cmp & $tobool;
 do {
  if ($or$cond) {
   $sub = (($w) - ($l))|0;
   $cmp1 = ($sub>>>0)>(256);
   $cond = $cmp1 ? 256 : $sub;
   _memset(($pad|0),($c|0),($cond|0))|0;
   $cmp314 = ($sub>>>0)>(255);
   $0 = HEAP32[$f>>2]|0;
   $and$i15 = $0 & 32;
   $tobool$i16 = ($and$i15|0)==(0);
   if ($cmp314) {
    $1 = (($w) - ($l))|0;
    $4 = $0;$l$addr$017 = $sub;$tobool$i18 = $tobool$i16;
    while(1) {
     if ($tobool$i18) {
      (___fwritex($pad,256,$f)|0);
      $$pre = HEAP32[$f>>2]|0;
      $2 = $$pre;
     } else {
      $2 = $4;
     }
     $sub6 = (($l$addr$017) + -256)|0;
     $cmp3 = ($sub6>>>0)>(255);
     $and$i = $2 & 32;
     $tobool$i = ($and$i|0)==(0);
     if ($cmp3) {
      $4 = $2;$l$addr$017 = $sub6;$tobool$i18 = $tobool$i;
     } else {
      break;
     }
    }
    $3 = $1 & 255;
    if ($tobool$i) {
     $l$addr$0$lcssa21 = $3;
    } else {
     break;
    }
   } else {
    if ($tobool$i16) {
     $l$addr$0$lcssa21 = $sub;
    } else {
     break;
    }
   }
   (___fwritex($pad,$l$addr$0$lcssa21,$f)|0);
  }
 } while(0);
 STACKTOP = sp;return;
}
function _wctomb($s,$wc) {
 $s = $s|0;
 $wc = $wc|0;
 var $call = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 if ($tobool) {
  $retval$0 = 0;
 } else {
  $call = (_wcrtomb($s,$wc,0)|0);
  $retval$0 = $call;
 }
 return ($retval$0|0);
}
function _frexpl($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $call = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (+_frexp($x,$e));
 return (+$call);
}
function _frexp($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0.0, $call = 0.0, $conv = 0, $mul = 0.0, $retval$0 = 0.0, $storemerge = 0, $sub = 0, $sub8 = 0, $tobool1 = 0, $trunc$clear = 0, $x$addr$0 = 0.0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $x;$0 = HEAP32[tempDoublePtr>>2]|0;
 $1 = HEAP32[tempDoublePtr+4>>2]|0;
 $2 = (_bitshift64Lshr(($0|0),($1|0),52)|0);
 $3 = tempRet0;
 $4 = $2&65535;
 $trunc$clear = $4 & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $tobool1 = $x != 0.0;
  if ($tobool1) {
   $mul = $x * 1.8446744073709552E+19;
   $call = (+_frexp($mul,$e));
   $5 = HEAP32[$e>>2]|0;
   $sub = (($5) + -64)|0;
   $storemerge = $sub;$x$addr$0 = $call;
  } else {
   $storemerge = 0;$x$addr$0 = $x;
  }
  HEAP32[$e>>2] = $storemerge;
  $retval$0 = $x$addr$0;
  break;
 }
 case 2047:  {
  $retval$0 = $x;
  break;
 }
 default: {
  $conv = $2 & 2047;
  $sub8 = (($conv) + -1022)|0;
  HEAP32[$e>>2] = $sub8;
  $6 = $1 & -2146435073;
  $7 = $6 | 1071644672;
  HEAP32[tempDoublePtr>>2] = $0;HEAP32[tempDoublePtr+4>>2] = $7;$8 = +HEAPF64[tempDoublePtr>>3];
  $retval$0 = $8;
 }
 }
 return (+$retval$0);
}
function _wcrtomb($s,$wc,$st) {
 $s = $s|0;
 $wc = $wc|0;
 $st = $st|0;
 var $0 = 0, $and = 0, $and19 = 0, $and23 = 0, $and36 = 0, $and41 = 0, $and45 = 0, $call = 0, $cmp = 0, $cmp11 = 0, $cmp2 = 0, $cmp28 = 0, $cmp9 = 0, $conv = 0, $conv16 = 0, $conv21 = 0, $conv25 = 0, $conv33 = 0, $conv38 = 0, $conv43 = 0;
 var $conv47 = 0, $conv5 = 0, $conv7 = 0, $incdec$ptr = 0, $incdec$ptr17 = 0, $incdec$ptr22 = 0, $incdec$ptr34 = 0, $incdec$ptr39 = 0, $incdec$ptr44 = 0, $or = 0, $or$cond = 0, $or15 = 0, $or20 = 0, $or24 = 0, $or32 = 0, $or37 = 0, $or42 = 0, $or46 = 0, $or6 = 0, $retval$0 = 0;
 var $shr1426 = 0, $shr1827 = 0, $shr28 = 0, $shr3123 = 0, $shr3524 = 0, $shr4025 = 0, $sub27 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 do {
  if ($tobool) {
   $retval$0 = 1;
  } else {
   $cmp = ($wc>>>0)<(128);
   if ($cmp) {
    $conv = $wc&255;
    HEAP8[$s>>0] = $conv;
    $retval$0 = 1;
    break;
   }
   $cmp2 = ($wc>>>0)<(2048);
   if ($cmp2) {
    $shr28 = $wc >>> 6;
    $or = $shr28 | 192;
    $conv5 = $or&255;
    $incdec$ptr = ((($s)) + 1|0);
    HEAP8[$s>>0] = $conv5;
    $and = $wc & 63;
    $or6 = $and | 128;
    $conv7 = $or6&255;
    HEAP8[$incdec$ptr>>0] = $conv7;
    $retval$0 = 2;
    break;
   }
   $cmp9 = ($wc>>>0)<(55296);
   $0 = $wc & -8192;
   $cmp11 = ($0|0)==(57344);
   $or$cond = $cmp9 | $cmp11;
   if ($or$cond) {
    $shr1426 = $wc >>> 12;
    $or15 = $shr1426 | 224;
    $conv16 = $or15&255;
    $incdec$ptr17 = ((($s)) + 1|0);
    HEAP8[$s>>0] = $conv16;
    $shr1827 = $wc >>> 6;
    $and19 = $shr1827 & 63;
    $or20 = $and19 | 128;
    $conv21 = $or20&255;
    $incdec$ptr22 = ((($s)) + 2|0);
    HEAP8[$incdec$ptr17>>0] = $conv21;
    $and23 = $wc & 63;
    $or24 = $and23 | 128;
    $conv25 = $or24&255;
    HEAP8[$incdec$ptr22>>0] = $conv25;
    $retval$0 = 3;
    break;
   }
   $sub27 = (($wc) + -65536)|0;
   $cmp28 = ($sub27>>>0)<(1048576);
   if ($cmp28) {
    $shr3123 = $wc >>> 18;
    $or32 = $shr3123 | 240;
    $conv33 = $or32&255;
    $incdec$ptr34 = ((($s)) + 1|0);
    HEAP8[$s>>0] = $conv33;
    $shr3524 = $wc >>> 12;
    $and36 = $shr3524 & 63;
    $or37 = $and36 | 128;
    $conv38 = $or37&255;
    $incdec$ptr39 = ((($s)) + 2|0);
    HEAP8[$incdec$ptr34>>0] = $conv38;
    $shr4025 = $wc >>> 6;
    $and41 = $shr4025 & 63;
    $or42 = $and41 | 128;
    $conv43 = $or42&255;
    $incdec$ptr44 = ((($s)) + 3|0);
    HEAP8[$incdec$ptr39>>0] = $conv43;
    $and45 = $wc & 63;
    $or46 = $and45 | 128;
    $conv47 = $or46&255;
    HEAP8[$incdec$ptr44>>0] = $conv47;
    $retval$0 = 4;
    break;
   } else {
    $call = (___errno_location()|0);
    HEAP32[$call>>2] = 84;
    $retval$0 = -1;
    break;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function ___towrite($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $add$ptr = 0, $and = 0, $buf = 0, $buf_size = 0, $conv = 0, $conv3 = 0, $mode = 0, $or = 0, $or5 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $sub = 0, $tobool = 0, $wbase = 0;
 var $wend = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mode = ((($f)) + 74|0);
 $0 = HEAP8[$mode>>0]|0;
 $conv = $0 << 24 >> 24;
 $sub = (($conv) + 255)|0;
 $or = $sub | $conv;
 $conv3 = $or&255;
 HEAP8[$mode>>0] = $conv3;
 $1 = HEAP32[$f>>2]|0;
 $and = $1 & 8;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $rend = ((($f)) + 8|0);
  HEAP32[$rend>>2] = 0;
  $rpos = ((($f)) + 4|0);
  HEAP32[$rpos>>2] = 0;
  $buf = ((($f)) + 44|0);
  $2 = HEAP32[$buf>>2]|0;
  $wbase = ((($f)) + 28|0);
  HEAP32[$wbase>>2] = $2;
  $wpos = ((($f)) + 20|0);
  HEAP32[$wpos>>2] = $2;
  $3 = $2;
  $buf_size = ((($f)) + 48|0);
  $4 = HEAP32[$buf_size>>2]|0;
  $add$ptr = (($3) + ($4)|0);
  $wend = ((($f)) + 16|0);
  HEAP32[$wend>>2] = $add$ptr;
  $retval$0 = 0;
 } else {
  $or5 = $1 | 32;
  HEAP32[$f>>2] = $or5;
  $retval$0 = -1;
 }
 return ($retval$0|0);
}
function _strlen($s) {
 $s = $s|0;
 var $$pn = 0, $$pn24 = 0, $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $and = 0, $and3 = 0, $incdec$ptr = 0, $incdec$ptr1323 = 0, $incdec$ptr7 = 0, $lnot = 0, $neg = 0, $rem = 0, $rem13 = 0, $retval$0 = 0, $s$addr$0$lcssa = 0;
 var $s$addr$015 = 0, $s$addr$1$lcssa = 0, $sub = 0, $sub$ptr$lhs$cast15 = 0, $tobool = 0, $tobool1 = 0, $tobool10 = 0, $tobool1021 = 0, $tobool14 = 0, $w$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $s;
 $rem13 = $0 & 3;
 $tobool14 = ($rem13|0)==(0);
 L1: do {
  if ($tobool14) {
   $s$addr$0$lcssa = $s;
   label = 4;
  } else {
   $5 = $0;$s$addr$015 = $s;
   while(1) {
    $1 = HEAP8[$s$addr$015>>0]|0;
    $tobool1 = ($1<<24>>24)==(0);
    if ($tobool1) {
     $$pn = $5;
     break L1;
    }
    $incdec$ptr = ((($s$addr$015)) + 1|0);
    $2 = $incdec$ptr;
    $rem = $2 & 3;
    $tobool = ($rem|0)==(0);
    if ($tobool) {
     $s$addr$0$lcssa = $incdec$ptr;
     label = 4;
     break;
    } else {
     $5 = $2;$s$addr$015 = $incdec$ptr;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $w$0 = $s$addr$0$lcssa;
  while(1) {
   $3 = HEAP32[$w$0>>2]|0;
   $sub = (($3) + -16843009)|0;
   $neg = $3 & -2139062144;
   $and = $neg ^ -2139062144;
   $and3 = $and & $sub;
   $lnot = ($and3|0)==(0);
   $incdec$ptr7 = ((($w$0)) + 4|0);
   if ($lnot) {
    $w$0 = $incdec$ptr7;
   } else {
    break;
   }
  }
  $4 = $3&255;
  $tobool1021 = ($4<<24>>24)==(0);
  if ($tobool1021) {
   $s$addr$1$lcssa = $w$0;
  } else {
   $$pn24 = $w$0;
   while(1) {
    $incdec$ptr1323 = ((($$pn24)) + 1|0);
    $$pre = HEAP8[$incdec$ptr1323>>0]|0;
    $tobool10 = ($$pre<<24>>24)==(0);
    if ($tobool10) {
     $s$addr$1$lcssa = $incdec$ptr1323;
     break;
    } else {
     $$pn24 = $incdec$ptr1323;
    }
   }
  }
  $sub$ptr$lhs$cast15 = $s$addr$1$lcssa;
  $$pn = $sub$ptr$lhs$cast15;
 }
 $retval$0 = (($$pn) - ($0))|0;
 return ($retval$0|0);
}
function ___strdup($s) {
 $s = $s|0;
 var $add = 0, $call = 0, $call1 = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_strlen($s)|0);
 $add = (($call) + 1)|0;
 $call1 = (_malloc($add)|0);
 $tobool = ($call1|0)==(0|0);
 if ($tobool) {
  $retval$0 = 0;
 } else {
  _memcpy(($call1|0),($s|0),($add|0))|0;
  $retval$0 = $call1;
 }
 return ($retval$0|0);
}
function _fflush($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $call = 0, $call1 = 0, $call118 = 0, $call16 = 0, $call22 = 0, $call7 = 0, $cmp = 0, $cmp14 = 0, $cmp20 = 0, $cond10 = 0, $cond19 = 0, $f$addr$0 = 0, $f$addr$019 = 0, $f$addr$022 = 0;
 var $lock = 0, $lock13 = 0, $next = 0, $or = 0, $phitmp = 0, $r$0$lcssa = 0, $r$021 = 0, $r$1 = 0, $retval$0 = 0, $tobool = 0, $tobool11 = 0, $tobool1120 = 0, $tobool24 = 0, $tobool5 = 0, $wbase = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($f|0)==(0|0);
 do {
  if ($tobool) {
   $1 = HEAP32[163]|0;
   $tobool5 = ($1|0)==(0|0);
   if ($tobool5) {
    $cond10 = 0;
   } else {
    $2 = HEAP32[163]|0;
    $call7 = (_fflush($2)|0);
    $cond10 = $call7;
   }
   ___lock(((5380)|0));
   $f$addr$019 = HEAP32[(5376)>>2]|0;
   $tobool1120 = ($f$addr$019|0)==(0|0);
   if ($tobool1120) {
    $r$0$lcssa = $cond10;
   } else {
    $f$addr$022 = $f$addr$019;$r$021 = $cond10;
    while(1) {
     $lock13 = ((($f$addr$022)) + 76|0);
     $3 = HEAP32[$lock13>>2]|0;
     $cmp14 = ($3|0)>(-1);
     if ($cmp14) {
      $call16 = (___lockfile($f$addr$022)|0);
      $cond19 = $call16;
     } else {
      $cond19 = 0;
     }
     $wpos = ((($f$addr$022)) + 20|0);
     $4 = HEAP32[$wpos>>2]|0;
     $wbase = ((($f$addr$022)) + 28|0);
     $5 = HEAP32[$wbase>>2]|0;
     $cmp20 = ($4>>>0)>($5>>>0);
     if ($cmp20) {
      $call22 = (___fflush_unlocked($f$addr$022)|0);
      $or = $call22 | $r$021;
      $r$1 = $or;
     } else {
      $r$1 = $r$021;
     }
     $tobool24 = ($cond19|0)==(0);
     if (!($tobool24)) {
      ___unlockfile($f$addr$022);
     }
     $next = ((($f$addr$022)) + 56|0);
     $f$addr$0 = HEAP32[$next>>2]|0;
     $tobool11 = ($f$addr$0|0)==(0|0);
     if ($tobool11) {
      $r$0$lcssa = $r$1;
      break;
     } else {
      $f$addr$022 = $f$addr$0;$r$021 = $r$1;
     }
    }
   }
   ___unlock(((5380)|0));
   $retval$0 = $r$0$lcssa;
  } else {
   $lock = ((($f)) + 76|0);
   $0 = HEAP32[$lock>>2]|0;
   $cmp = ($0|0)>(-1);
   if (!($cmp)) {
    $call118 = (___fflush_unlocked($f)|0);
    $retval$0 = $call118;
    break;
   }
   $call = (___lockfile($f)|0);
   $phitmp = ($call|0)==(0);
   $call1 = (___fflush_unlocked($f)|0);
   if ($phitmp) {
    $retval$0 = $call1;
   } else {
    ___unlockfile($f);
    $retval$0 = $call1;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function ___fflush_unlocked($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $cmp = 0, $cmp4 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $seek = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $tobool = 0, $wbase = 0, $wend = 0, $wpos = 0;
 var $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $wpos = ((($f)) + 20|0);
 $0 = HEAP32[$wpos>>2]|0;
 $wbase = ((($f)) + 28|0);
 $1 = HEAP32[$wbase>>2]|0;
 $cmp = ($0>>>0)>($1>>>0);
 if ($cmp) {
  $write = ((($f)) + 36|0);
  $2 = HEAP32[$write>>2]|0;
  (FUNCTION_TABLE_iiii[$2 & 31]($f,0,0)|0);
  $3 = HEAP32[$wpos>>2]|0;
  $tobool = ($3|0)==(0|0);
  if ($tobool) {
   $retval$0 = -1;
  } else {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $rpos = ((($f)) + 4|0);
  $4 = HEAP32[$rpos>>2]|0;
  $rend = ((($f)) + 8|0);
  $5 = HEAP32[$rend>>2]|0;
  $cmp4 = ($4>>>0)<($5>>>0);
  if ($cmp4) {
   $seek = ((($f)) + 40|0);
   $6 = HEAP32[$seek>>2]|0;
   $sub$ptr$lhs$cast = $4;
   $sub$ptr$rhs$cast = $5;
   $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
   (FUNCTION_TABLE_iiii[$6 & 31]($f,$sub$ptr$sub,1)|0);
  }
  $wend = ((($f)) + 16|0);
  HEAP32[$wend>>2] = 0;
  HEAP32[$wbase>>2] = 0;
  HEAP32[$wpos>>2] = 0;
  HEAP32[$rend>>2] = 0;
  HEAP32[$rpos>>2] = 0;
  $retval$0 = 0;
 }
 return ($retval$0|0);
}
function ___overflow($f,$_c) {
 $f = $f|0;
 $_c = $_c|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $c = 0, $call = 0, $call13 = 0, $cmp = 0, $cmp14 = 0, $cmp7 = 0, $conv = 0, $conv18 = 0, $conv5 = 0, $conv6 = 0, $incdec$ptr = 0, $lbf = 0, $retval$0 = 0;
 var $tobool = 0, $tobool1 = 0, $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $c = sp;
 $conv = $_c&255;
 HEAP8[$c>>0] = $conv;
 $wend = ((($f)) + 16|0);
 $0 = HEAP32[$wend>>2]|0;
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = HEAP32[$wend>>2]|0;
   $2 = $$pre;
   label = 4;
  } else {
   $retval$0 = -1;
  }
 } else {
  $2 = $0;
  label = 4;
 }
 do {
  if ((label|0) == 4) {
   $wpos = ((($f)) + 20|0);
   $1 = HEAP32[$wpos>>2]|0;
   $cmp = ($1>>>0)<($2>>>0);
   if ($cmp) {
    $conv5 = $_c & 255;
    $lbf = ((($f)) + 75|0);
    $3 = HEAP8[$lbf>>0]|0;
    $conv6 = $3 << 24 >> 24;
    $cmp7 = ($conv5|0)==($conv6|0);
    if (!($cmp7)) {
     $incdec$ptr = ((($1)) + 1|0);
     HEAP32[$wpos>>2] = $incdec$ptr;
     HEAP8[$1>>0] = $conv;
     $retval$0 = $conv5;
     break;
    }
   }
   $write = ((($f)) + 36|0);
   $4 = HEAP32[$write>>2]|0;
   $call13 = (FUNCTION_TABLE_iiii[$4 & 31]($f,$c,1)|0);
   $cmp14 = ($call13|0)==(1);
   if ($cmp14) {
    $5 = HEAP8[$c>>0]|0;
    $conv18 = $5&255;
    $retval$0 = $conv18;
   } else {
    $retval$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _fputc($c,$f) {
 $c = $c|0;
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $call = 0, $call24 = 0, $call8 = 0, $cmp = 0, $cmp1 = 0, $cmp11 = 0, $cmp16 = 0, $cmp3 = 0, $cond26 = 0, $conv = 0, $conv10 = 0, $conv19 = 0, $conv22 = 0;
 var $conv5 = 0, $conv7 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0, $lbf = 0, $lbf9 = 0, $lock = 0, $retval$0 = 0, $tobool = 0, $wend = 0, $wend15 = 0, $wpos = 0, $wpos14 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lock = ((($f)) + 76|0);
 $0 = HEAP32[$lock>>2]|0;
 $cmp = ($0|0)<(0);
 if ($cmp) {
  label = 3;
 } else {
  $call = (___lockfile($f)|0);
  $tobool = ($call|0)==(0);
  if ($tobool) {
   label = 3;
  } else {
   $lbf9 = ((($f)) + 75|0);
   $4 = HEAP8[$lbf9>>0]|0;
   $conv10 = $4 << 24 >> 24;
   $cmp11 = ($conv10|0)==($c|0);
   if ($cmp11) {
    label = 10;
   } else {
    $wpos14 = ((($f)) + 20|0);
    $5 = HEAP32[$wpos14>>2]|0;
    $wend15 = ((($f)) + 16|0);
    $6 = HEAP32[$wend15>>2]|0;
    $cmp16 = ($5>>>0)<($6>>>0);
    if ($cmp16) {
     $conv19 = $c&255;
     $incdec$ptr21 = ((($5)) + 1|0);
     HEAP32[$wpos14>>2] = $incdec$ptr21;
     HEAP8[$5>>0] = $conv19;
     $conv22 = $c & 255;
     $cond26 = $conv22;
    } else {
     label = 10;
    }
   }
   if ((label|0) == 10) {
    $call24 = (___overflow($f,$c)|0);
    $cond26 = $call24;
   }
   ___unlockfile($f);
   $retval$0 = $cond26;
  }
 }
 do {
  if ((label|0) == 3) {
   $lbf = ((($f)) + 75|0);
   $1 = HEAP8[$lbf>>0]|0;
   $conv = $1 << 24 >> 24;
   $cmp1 = ($conv|0)==($c|0);
   if (!($cmp1)) {
    $wpos = ((($f)) + 20|0);
    $2 = HEAP32[$wpos>>2]|0;
    $wend = ((($f)) + 16|0);
    $3 = HEAP32[$wend>>2]|0;
    $cmp3 = ($2>>>0)<($3>>>0);
    if ($cmp3) {
     $conv5 = $c&255;
     $incdec$ptr = ((($2)) + 1|0);
     HEAP32[$wpos>>2] = $incdec$ptr;
     HEAP8[$2>>0] = $conv5;
     $conv7 = $c & 255;
     $retval$0 = $conv7;
     break;
    }
   }
   $call8 = (___overflow($f,$c)|0);
   $retval$0 = $call8;
  }
 } while(0);
 return ($retval$0|0);
}
function _malloc($bytes) {
 $bytes = $bytes|0;
 var $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i177 = 0, $$pre$i180 = 0, $$pre$i45$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i178Z2D = 0, $$pre$phi$i46$iZ2D = 0, $$pre$phi$iZ2D = 0, $$pre$phiZ2D = 0, $$pre5$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0;
 var $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0;
 var $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0;
 var $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0;
 var $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0;
 var $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0;
 var $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F$0$i$i = 0, $F104$0 = 0, $F197$0$i = 0, $F224$0$i$i = 0;
 var $F290$0$i = 0, $I252$0$i$i = 0, $I316$0$i = 0, $I57$0$i$i = 0, $K105$0$i$i = 0, $K305$0$i$i = 0, $K373$0$i = 0, $R$1$i = 0, $R$1$i$i = 0, $R$1$i168 = 0, $R$3$i = 0, $R$3$i$i = 0, $R$3$i171 = 0, $RP$1$i = 0, $RP$1$i$i = 0, $RP$1$i167 = 0, $T$0$i = 0, $T$0$i$i = 0, $T$0$i47$i = 0, $add$i = 0;
 var $add$i$i = 0, $add$i146 = 0, $add$i181 = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr$i1$i$i = 0, $add$ptr$i16$i = 0, $add$ptr$i161 = 0, $add$ptr$i194 = 0, $add$ptr$i21$i = 0, $add$ptr$i49$i = 0, $add$ptr14$i$i = 0, $add$ptr15$i$i = 0, $add$ptr16$i$i = 0, $add$ptr166 = 0, $add$ptr169 = 0, $add$ptr17$i$i = 0, $add$ptr178 = 0;
 var $add$ptr181$i = 0, $add$ptr182 = 0, $add$ptr189$i = 0, $add$ptr190$i = 0, $add$ptr193 = 0, $add$ptr199 = 0, $add$ptr2$i$i = 0, $add$ptr205$i$i = 0, $add$ptr212$i$i = 0, $add$ptr225$i = 0, $add$ptr227$i = 0, $add$ptr24$i$i = 0, $add$ptr262$i = 0, $add$ptr269$i = 0, $add$ptr273$i = 0, $add$ptr282$i = 0, $add$ptr3$i$i = 0, $add$ptr30$i$i = 0, $add$ptr369$i$i = 0, $add$ptr4$i$i = 0;
 var $add$ptr4$i$i$i = 0, $add$ptr4$i26$i = 0, $add$ptr4$i54$i = 0, $add$ptr441$i = 0, $add$ptr5$i$i = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i$i = 0, $add$ptr6$i58$i = 0, $add$ptr7$i$i = 0, $add$ptr8$i118$i = 0, $add$ptr95 = 0, $add$ptr98 = 0, $add10$i = 0, $add101$i = 0, $add110$i = 0, $add13$i = 0, $add14$i = 0, $add140$i = 0, $add144 = 0, $add150$i = 0;
 var $add17$i = 0, $add17$i184 = 0, $add177$i = 0, $add18$i = 0, $add19$i = 0, $add2 = 0, $add20$i = 0, $add206$i$i = 0, $add212$i = 0, $add215$i = 0, $add22$i = 0, $add246$i = 0, $add26$i$i = 0, $add268$i = 0, $add269$i$i = 0, $add274$i$i = 0, $add278$i$i = 0, $add280$i$i = 0, $add283$i$i = 0, $add337$i = 0;
 var $add342$i = 0, $add346$i = 0, $add348$i = 0, $add351$i = 0, $add46$i = 0, $add50 = 0, $add51$i = 0, $add54 = 0, $add54$i = 0, $add58 = 0, $add62 = 0, $add64 = 0, $add74$i$i = 0, $add77$i = 0, $add78$i = 0, $add79$i$i = 0, $add8 = 0, $add82$i = 0, $add83$i$i = 0, $add85$i$i = 0;
 var $add86$i = 0, $add88$i$i = 0, $add9$i = 0, $add90$i = 0, $add92$i = 0, $and = 0, $and$i = 0, $and$i$i = 0, $and$i$i$i = 0, $and$i143 = 0, $and$i17$i = 0, $and$i22$i = 0, $and$i50$i = 0, $and100$i = 0, $and103$i = 0, $and104$i = 0, $and106 = 0, $and11$add51$i = 0, $and11$i = 0, $and119$i$i = 0;
 var $and12$i = 0, $and13$i = 0, $and13$i$i = 0, $and133$i$i = 0, $and14 = 0, $and145 = 0, $and17$i = 0, $and194$i = 0, $and194$i205 = 0, $and199$i = 0, $and209$i$i = 0, $and21$i = 0, $and21$i149 = 0, $and227$i$i = 0, $and236$i = 0, $and264$i$i = 0, $and268$i$i = 0, $and273$i$i = 0, $and282$i$i = 0, $and29$i = 0;
 var $and292$i = 0, $and295$i$i = 0, $and3$i = 0, $and3$i$i = 0, $and3$i$i$i = 0, $and3$i24$i = 0, $and3$i52$i = 0, $and30$i = 0, $and318$i$i = 0, $and32$i = 0, $and32$i$i = 0, $and33$i$i = 0, $and331$i = 0, $and336$i = 0, $and341$i = 0, $and350$i = 0, $and363$i = 0, $and37$i$i = 0, $and387$i = 0, $and4 = 0;
 var $and40$i$i = 0, $and41 = 0, $and42$i = 0, $and43 = 0, $and46 = 0, $and49 = 0, $and49$i = 0, $and49$i$i = 0, $and53 = 0, $and57 = 0, $and6$i = 0, $and6$i$i = 0, $and6$i10$i = 0, $and6$i27$i = 0, $and61 = 0, $and64$i = 0, $and68$i = 0, $and69$i$i = 0, $and7 = 0, $and73$i = 0;
 var $and73$i$i = 0, $and74 = 0, $and77$i = 0, $and78$i$i = 0, $and8$i = 0, $and80$i = 0, $and81$i = 0, $and85$i = 0, $and87$i$i = 0, $and89$i = 0, $and9$i = 0, $and96$i$i = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i14$i = 0, $arrayidx$i150 = 0, $arrayidx$i37$i = 0, $arrayidx103 = 0, $arrayidx103$i$i = 0;
 var $arrayidx106$i = 0, $arrayidx107$i$i = 0, $arrayidx113$i = 0, $arrayidx113$i159 = 0, $arrayidx121$i = 0, $arrayidx123$i$i = 0, $arrayidx126$i$i = 0, $arrayidx137$i = 0, $arrayidx143$i$i = 0, $arrayidx148$i = 0, $arrayidx151$i = 0, $arrayidx151$i$i = 0, $arrayidx154$i = 0, $arrayidx155$i = 0, $arrayidx161$i = 0, $arrayidx165$i = 0, $arrayidx165$i169 = 0, $arrayidx178$i$i = 0, $arrayidx184$i = 0, $arrayidx184$i$i = 0;
 var $arrayidx195$i$i = 0, $arrayidx196$i = 0, $arrayidx204$i = 0, $arrayidx212$i = 0, $arrayidx223$i$i = 0, $arrayidx228$i = 0, $arrayidx23$i = 0, $arrayidx239$i = 0, $arrayidx245$i = 0, $arrayidx256$i = 0, $arrayidx27$i = 0, $arrayidx287$i$i = 0, $arrayidx289$i = 0, $arrayidx290$i$i = 0, $arrayidx325$i$i = 0, $arrayidx355$i = 0, $arrayidx358$i = 0, $arrayidx394$i = 0, $arrayidx40$i = 0, $arrayidx44$i = 0;
 var $arrayidx61$i = 0, $arrayidx65$i = 0, $arrayidx66 = 0, $arrayidx71$i = 0, $arrayidx75$i = 0, $arrayidx91$i$i = 0, $arrayidx92$i$i = 0, $arrayidx94$i = 0, $arrayidx94$i156 = 0, $arrayidx96$i$i = 0, $bk = 0, $bk$i = 0, $bk$i$i = 0, $bk$i163 = 0, $bk$i35$i = 0, $bk102$i$i = 0, $bk122 = 0, $bk124 = 0, $bk136$i = 0, $bk139$i$i = 0;
 var $bk158$i$i = 0, $bk161$i$i = 0, $bk218$i = 0, $bk220$i = 0, $bk246$i$i = 0, $bk248$i$i = 0, $bk302$i$i = 0, $bk311$i = 0, $bk313$i = 0, $bk338$i$i = 0, $bk357$i$i = 0, $bk360$i$i = 0, $bk370$i = 0, $bk407$i = 0, $bk429$i = 0, $bk43$i$i = 0, $bk432$i = 0, $bk47$i = 0, $bk55$i$i = 0, $bk67$i$i = 0;
 var $bk74$i$i = 0, $bk78 = 0, $bk82$i$i = 0, $br$2$ph$i = 0, $call107$i = 0, $call131$i = 0, $call132$i = 0, $call275$i = 0, $call37$i = 0, $call68$i = 0, $call83$i = 0, $child$i$i = 0, $child166$i$i = 0, $child289$i$i = 0, $child357$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i11$i = 0, $cmp$i140 = 0;
 var $cmp$i179 = 0, $cmp$i18$i = 0, $cmp$i2$i$i = 0, $cmp$i23$i = 0, $cmp$i51$i = 0, $cmp$i9$i = 0, $cmp1 = 0, $cmp1$i = 0, $cmp10 = 0, $cmp100$i$i = 0, $cmp102$i = 0, $cmp104$i$i = 0, $cmp105$i = 0, $cmp106$i$i = 0, $cmp107$i = 0, $cmp107$i157 = 0, $cmp108$i = 0, $cmp108$i$i = 0, $cmp112$i$i = 0, $cmp113 = 0;
 var $cmp114$i = 0, $cmp116$i = 0, $cmp118$i = 0, $cmp119$i = 0, $cmp12$i = 0, $cmp120$i$i = 0, $cmp120$i42$i = 0, $cmp121$i = 0, $cmp123$i = 0, $cmp124$i$i = 0, $cmp126$i = 0, $cmp127$i = 0, $cmp128 = 0, $cmp128$i = 0, $cmp128$i$i = 0, $cmp130$i = 0, $cmp133$i = 0, $cmp133$i$i = 0, $cmp133$i197 = 0, $cmp135$i = 0;
 var $cmp137$i = 0, $cmp137$i$i = 0, $cmp137$i198 = 0, $cmp138$i = 0, $cmp139 = 0, $cmp140$i = 0, $cmp141$not$i = 0, $cmp142$i = 0, $cmp144$i$i = 0, $cmp146 = 0, $cmp15 = 0, $cmp15$i = 0, $cmp151$i = 0, $cmp152$i = 0, $cmp153$i$i = 0, $cmp155$i = 0, $cmp156 = 0, $cmp156$i = 0, $cmp156$i$i = 0, $cmp157$i = 0;
 var $cmp159$i = 0, $cmp159$i200 = 0, $cmp16 = 0, $cmp160$i$i = 0, $cmp162 = 0, $cmp162$i = 0, $cmp162$i201 = 0, $cmp166$i = 0, $cmp168$i$i = 0, $cmp171$i = 0, $cmp172$i$i = 0, $cmp174$i = 0, $cmp180$i = 0, $cmp185$i = 0, $cmp185$i$i = 0, $cmp186 = 0, $cmp186$i = 0, $cmp189$i$i = 0, $cmp19$i = 0, $cmp190$i = 0;
 var $cmp191$i = 0, $cmp198$i = 0, $cmp2$i$i = 0, $cmp2$i$i$i = 0, $cmp20$i$i = 0, $cmp203$i = 0, $cmp205$i = 0, $cmp208$i = 0, $cmp209$i = 0, $cmp21$i = 0, $cmp215$i$i = 0, $cmp217$i = 0, $cmp218$i = 0, $cmp221$i = 0, $cmp224$i = 0, $cmp228$i = 0, $cmp229$i = 0, $cmp233$i = 0, $cmp236$i$i = 0, $cmp24$i = 0;
 var $cmp24$i$i = 0, $cmp246$i = 0, $cmp250$i = 0, $cmp254$i$i = 0, $cmp257$i = 0, $cmp258$i$i = 0, $cmp26$i = 0, $cmp265$i = 0, $cmp27$i$i = 0, $cmp28$i = 0, $cmp28$i$i = 0, $cmp284$i = 0, $cmp29 = 0, $cmp3$i$i = 0, $cmp301$i = 0, $cmp306$i$i = 0, $cmp31 = 0, $cmp319$i = 0, $cmp319$i$i = 0, $cmp32$i = 0;
 var $cmp32$i186 = 0, $cmp323$i = 0, $cmp327$i$i = 0, $cmp33$i = 0, $cmp332$i$i = 0, $cmp34$i = 0, $cmp34$i$i = 0, $cmp35$i = 0, $cmp350$i$i = 0, $cmp36$i = 0, $cmp36$i$i = 0, $cmp374$i = 0, $cmp38$i = 0, $cmp38$i$i = 0, $cmp388$i = 0, $cmp396$i = 0, $cmp40$i = 0, $cmp401$i = 0, $cmp41$i$i = 0, $cmp42$i$i = 0;
 var $cmp422$i = 0, $cmp43$i = 0, $cmp44$i$i = 0, $cmp45$i = 0, $cmp45$i155 = 0, $cmp46$i = 0, $cmp46$i$i = 0, $cmp46$i38$i = 0, $cmp48$i = 0, $cmp49$i = 0, $cmp5 = 0, $cmp51$i = 0, $cmp54$i$i = 0, $cmp55$i = 0, $cmp55$i187 = 0, $cmp57$i = 0, $cmp57$i$i = 0, $cmp57$i188 = 0, $cmp59$i$i = 0, $cmp60$i = 0;
 var $cmp60$i$i = 0, $cmp62$i = 0, $cmp63$i = 0, $cmp63$i$i = 0, $cmp65$i = 0, $cmp66$i = 0, $cmp66$i191 = 0, $cmp69$i = 0, $cmp7$i$i = 0, $cmp70 = 0, $cmp72$i = 0, $cmp75$i$i = 0, $cmp76 = 0, $cmp76$i = 0, $cmp79 = 0, $cmp81$i = 0, $cmp81$i$i = 0, $cmp81$i192 = 0, $cmp83$i$i = 0, $cmp85$i = 0;
 var $cmp86$i$i = 0, $cmp89$i = 0, $cmp9$i$i = 0, $cmp90$i = 0, $cmp91$i = 0, $cmp93$i = 0, $cmp95$i = 0, $cmp96$i = 0, $cmp97$i = 0, $cmp97$i$i = 0, $cmp977$i = 0, $cmp99 = 0, $cond = 0, $cond$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i19$i = 0, $cond$i25$i = 0, $cond$i53$i = 0, $cond$v$0$i = 0;
 var $cond115$i$i = 0, $cond13$i$i = 0, $cond15$i$i = 0, $cond2$i = 0, $cond2$i$i = 0, $cond3$i = 0, $cond315$i$i = 0, $cond383$i = 0, $cond4$i = 0, $exitcond$i$i = 0, $fd$i = 0, $fd$i$i = 0, $fd$i164 = 0, $fd103$i$i = 0, $fd123 = 0, $fd139$i = 0, $fd140$i$i = 0, $fd148$i$i = 0, $fd160$i$i = 0, $fd219$i = 0;
 var $fd247$i$i = 0, $fd303$i$i = 0, $fd312$i = 0, $fd339$i$i = 0, $fd344$i$i = 0, $fd359$i$i = 0, $fd371$i = 0, $fd408$i = 0, $fd416$i = 0, $fd431$i = 0, $fd50$i = 0, $fd54$i$i = 0, $fd59$i$i = 0, $fd68$pre$phi$i$iZ2D = 0, $fd69 = 0, $fd78$i$i = 0, $fd85$i$i = 0, $fd9 = 0, $head = 0, $head$i = 0;
 var $head$i$i = 0, $head$i$i$i = 0, $head$i154 = 0, $head$i20$i = 0, $head$i31$i = 0, $head$i57$i = 0, $head118$i$i = 0, $head168 = 0, $head173 = 0, $head177 = 0, $head179 = 0, $head179$i = 0, $head182$i = 0, $head187$i = 0, $head189$i = 0, $head195 = 0, $head198 = 0, $head208$i$i = 0, $head211$i$i = 0, $head23$i$i = 0;
 var $head25 = 0, $head265$i = 0, $head268$i = 0, $head271$i = 0, $head274$i = 0, $head279$i = 0, $head281$i = 0, $head29$i = 0, $head29$i$i = 0, $head317$i$i = 0, $head32$i$i = 0, $head34$i$i = 0, $head386$i = 0, $head7$i$i = 0, $head7$i$i$i = 0, $head7$i59$i = 0, $head94 = 0, $head97 = 0, $head99$i = 0, $i$01$i$i = 0;
 var $idx$0$i = 0, $inc$i$i = 0, $index$i = 0, $index$i$i = 0, $index$i172 = 0, $index$i43$i = 0, $index288$i$i = 0, $index356$i = 0, $magic$i$i = 0, $nb$0 = 0, $neg = 0, $neg$i = 0, $neg$i$i = 0, $neg$i173 = 0, $neg$i183 = 0, $neg103$i = 0, $neg13 = 0, $neg132$i$i = 0, $neg48$i = 0, $neg73 = 0;
 var $next$i = 0, $next$i$i = 0, $next$i$i$i = 0, $next231$i = 0, $not$cmp150$i$i = 0, $not$cmp346$i$i = 0, $not$cmp418$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i189 = 0, $or$cond1$i = 0, $or$cond1$i185 = 0, $or$cond2$i = 0, $or$cond3$i = 0, $or$cond4$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond8$i = 0, $or$cond95$i = 0, $or$i = 0;
 var $or$i$i = 0, $or$i$i$i = 0, $or$i196 = 0, $or$i56$i = 0, $or101$i$i = 0, $or110 = 0, $or167 = 0, $or172 = 0, $or176 = 0, $or178$i = 0, $or180 = 0, $or183$i = 0, $or186$i = 0, $or188$i = 0, $or19$i$i = 0, $or194 = 0, $or197 = 0, $or204$i = 0, $or210$i$i = 0, $or22$i$i = 0;
 var $or23 = 0, $or232$i$i = 0, $or26 = 0, $or264$i = 0, $or267$i = 0, $or270$i = 0, $or275$i = 0, $or278$i = 0, $or28$i$i = 0, $or280$i = 0, $or297$i = 0, $or300$i$i = 0, $or33$i$i = 0, $or368$i = 0, $or40 = 0, $or44$i$i = 0, $or93 = 0, $or96 = 0, $p$0$i$i = 0, $parent$i = 0;
 var $parent$i$i = 0, $parent$i162 = 0, $parent$i40$i = 0, $parent135$i = 0, $parent138$i$i = 0, $parent149$i = 0, $parent162$i$i = 0, $parent165$i$i = 0, $parent166$i = 0, $parent179$i$i = 0, $parent196$i$i = 0, $parent226$i = 0, $parent240$i = 0, $parent257$i = 0, $parent301$i$i = 0, $parent337$i$i = 0, $parent361$i$i = 0, $parent369$i = 0, $parent406$i = 0, $parent433$i = 0;
 var $qsize$0$i$i = 0, $retval$0 = 0, $rsize$0$i = 0, $rsize$0$i152 = 0, $rsize$1$i = 0, $rsize$3$i = 0, $rsize$4$lcssa$i = 0, $rsize$49$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sflags193$i = 0, $sflags235$i = 0, $shl = 0, $shl$i = 0, $shl$i$i = 0, $shl$i13$i = 0, $shl$i144 = 0, $shl$i36$i = 0, $shl102 = 0, $shl105 = 0;
 var $shl116$i$i = 0, $shl12 = 0, $shl127$i$i = 0, $shl131$i$i = 0, $shl15$i = 0, $shl18$i = 0, $shl192$i = 0, $shl195$i = 0, $shl198$i = 0, $shl22 = 0, $shl221$i$i = 0, $shl226$i$i = 0, $shl265$i$i = 0, $shl270$i$i = 0, $shl276$i$i = 0, $shl279$i$i = 0, $shl288$i = 0, $shl291$i = 0, $shl294$i$i = 0, $shl31$i = 0;
 var $shl316$i$i = 0, $shl326$i$i = 0, $shl333$i = 0, $shl338$i = 0, $shl344$i = 0, $shl347$i = 0, $shl35 = 0, $shl362$i = 0, $shl37 = 0, $shl384$i = 0, $shl39$i$i = 0, $shl395$i = 0, $shl48$i$i = 0, $shl52$i = 0, $shl60$i = 0, $shl65 = 0, $shl70$i$i = 0, $shl72 = 0, $shl75$i$i = 0, $shl81$i$i = 0;
 var $shl84$i$i = 0, $shl9$i = 0, $shl90 = 0, $shl95$i$i = 0, $shr = 0, $shr$i = 0, $shr$i$i = 0, $shr$i139 = 0, $shr$i34$i = 0, $shr101 = 0, $shr11$i = 0, $shr11$i147 = 0, $shr110$i$i = 0, $shr12$i = 0, $shr123$i$i = 0, $shr15$i = 0, $shr16$i = 0, $shr16$i148 = 0, $shr19$i = 0, $shr194$i = 0;
 var $shr20$i = 0, $shr214$i$i = 0, $shr253$i$i = 0, $shr263$i$i = 0, $shr267$i$i = 0, $shr27$i = 0, $shr272$i$i = 0, $shr277$i$i = 0, $shr281$i$i = 0, $shr283$i = 0, $shr3 = 0, $shr310$i$i = 0, $shr318$i = 0, $shr322$i$i = 0, $shr330$i = 0, $shr335$i = 0, $shr340$i = 0, $shr345$i = 0, $shr349$i = 0, $shr378$i = 0;
 var $shr391$i = 0, $shr4$i = 0, $shr41$i = 0, $shr45 = 0, $shr47 = 0, $shr48 = 0, $shr5$i = 0, $shr5$i142 = 0, $shr51 = 0, $shr52 = 0, $shr55 = 0, $shr56 = 0, $shr58$i$i = 0, $shr59 = 0, $shr60 = 0, $shr63 = 0, $shr68$i$i = 0, $shr7$i = 0, $shr7$i145 = 0, $shr72$i = 0;
 var $shr72$i$i = 0, $shr75$i = 0, $shr76$i = 0, $shr77$i$i = 0, $shr79$i = 0, $shr8$i = 0, $shr80$i = 0, $shr82$i$i = 0, $shr83$i = 0, $shr84$i = 0, $shr86$i$i = 0, $shr87$i = 0, $shr88$i = 0, $shr91$i = 0, $size$i$i = 0, $size$i$i$i = 0, $size188$i = 0, $size245$i = 0, $sizebits$0$i = 0, $sizebits$0$shl52$i = 0;
 var $sp$0$i$i = 0, $sp$0$i$i$i = 0, $sp$0104$i = 0, $sp$1103$i = 0, $ssize$2$ph$i = 0, $ssize$5$i = 0, $sub = 0, $sub$i = 0, $sub$i138 = 0, $sub$i182 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$lhs$cast$i28$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$rhs$cast$i29$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i30$i = 0, $sub10$i = 0;
 var $sub101$i = 0, $sub101$rsize$4$i = 0, $sub112$i = 0, $sub113$i$i = 0, $sub118$i = 0, $sub14$i = 0, $sub16$i$i = 0, $sub160 = 0, $sub172$i = 0, $sub18$i$i = 0, $sub190 = 0, $sub2$i = 0, $sub22$i = 0, $sub260$i = 0, $sub262$i$i = 0, $sub266$i$i = 0, $sub271$i$i = 0, $sub275$i$i = 0, $sub30$i = 0, $sub31$i = 0;
 var $sub31$rsize$0$i = 0, $sub313$i$i = 0, $sub329$i = 0, $sub33$i = 0, $sub334$i = 0, $sub339$i = 0, $sub343$i = 0, $sub381$i = 0, $sub4$i = 0, $sub41$i = 0, $sub42 = 0, $sub44 = 0, $sub5$i$i = 0, $sub5$i$i$i = 0, $sub5$i55$i = 0, $sub50$i = 0, $sub6$i = 0, $sub63$i = 0, $sub67$i = 0, $sub67$i$i = 0;
 var $sub70$i = 0, $sub71$i$i = 0, $sub76$i$i = 0, $sub80$i$i = 0, $sub91 = 0, $sub99$i = 0, $t$0$i = 0, $t$0$i151 = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$48$i = 0, $tbase$793$i = 0, $tobool$i$i = 0, $tobool107 = 0, $tobool195$i = 0, $tobool200$i = 0, $tobool228$i$i = 0, $tobool237$i = 0, $tobool293$i = 0;
 var $tobool296$i$i = 0, $tobool30$i = 0, $tobool364$i = 0, $tobool97$i$i = 0, $tsize$792$i = 0, $v$0$i = 0, $v$0$i153 = 0, $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$410$i = 0, $xor$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $magic$i$i = sp;
 $cmp = ($bytes>>>0)<(245);
 do {
  if ($cmp) {
   $cmp1 = ($bytes>>>0)<(11);
   $add2 = (($bytes) + 11)|0;
   $and = $add2 & -8;
   $cond = $cmp1 ? 16 : $and;
   $shr = $cond >>> 3;
   $0 = HEAP32[1350]|0;
   $shr3 = $0 >>> $shr;
   $and4 = $shr3 & 3;
   $cmp5 = ($and4|0)==(0);
   if (!($cmp5)) {
    $neg = $shr3 & 1;
    $and7 = $neg ^ 1;
    $add8 = (($and7) + ($shr))|0;
    $shl = $add8 << 1;
    $arrayidx = (5440 + ($shl<<2)|0);
    $1 = ((($arrayidx)) + 8|0);
    $2 = HEAP32[$1>>2]|0;
    $fd9 = ((($2)) + 8|0);
    $3 = HEAP32[$fd9>>2]|0;
    $cmp10 = ($arrayidx|0)==($3|0);
    do {
     if ($cmp10) {
      $shl12 = 1 << $add8;
      $neg13 = $shl12 ^ -1;
      $and14 = $0 & $neg13;
      HEAP32[1350] = $and14;
     } else {
      $4 = HEAP32[(5416)>>2]|0;
      $cmp15 = ($3>>>0)<($4>>>0);
      if ($cmp15) {
       _abort();
       // unreachable;
      }
      $bk = ((($3)) + 12|0);
      $5 = HEAP32[$bk>>2]|0;
      $cmp16 = ($5|0)==($2|0);
      if ($cmp16) {
       HEAP32[$bk>>2] = $arrayidx;
       HEAP32[$1>>2] = $3;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $shl22 = $add8 << 3;
    $or23 = $shl22 | 3;
    $head = ((($2)) + 4|0);
    HEAP32[$head>>2] = $or23;
    $add$ptr = (($2) + ($shl22)|0);
    $head25 = ((($add$ptr)) + 4|0);
    $6 = HEAP32[$head25>>2]|0;
    $or26 = $6 | 1;
    HEAP32[$head25>>2] = $or26;
    $retval$0 = $fd9;
    STACKTOP = sp;return ($retval$0|0);
   }
   $7 = HEAP32[(5408)>>2]|0;
   $cmp29 = ($cond>>>0)>($7>>>0);
   if ($cmp29) {
    $cmp31 = ($shr3|0)==(0);
    if (!($cmp31)) {
     $shl35 = $shr3 << $shr;
     $shl37 = 2 << $shr;
     $sub = (0 - ($shl37))|0;
     $or40 = $shl37 | $sub;
     $and41 = $shl35 & $or40;
     $sub42 = (0 - ($and41))|0;
     $and43 = $and41 & $sub42;
     $sub44 = (($and43) + -1)|0;
     $shr45 = $sub44 >>> 12;
     $and46 = $shr45 & 16;
     $shr47 = $sub44 >>> $and46;
     $shr48 = $shr47 >>> 5;
     $and49 = $shr48 & 8;
     $add50 = $and49 | $and46;
     $shr51 = $shr47 >>> $and49;
     $shr52 = $shr51 >>> 2;
     $and53 = $shr52 & 4;
     $add54 = $add50 | $and53;
     $shr55 = $shr51 >>> $and53;
     $shr56 = $shr55 >>> 1;
     $and57 = $shr56 & 2;
     $add58 = $add54 | $and57;
     $shr59 = $shr55 >>> $and57;
     $shr60 = $shr59 >>> 1;
     $and61 = $shr60 & 1;
     $add62 = $add58 | $and61;
     $shr63 = $shr59 >>> $and61;
     $add64 = (($add62) + ($shr63))|0;
     $shl65 = $add64 << 1;
     $arrayidx66 = (5440 + ($shl65<<2)|0);
     $8 = ((($arrayidx66)) + 8|0);
     $9 = HEAP32[$8>>2]|0;
     $fd69 = ((($9)) + 8|0);
     $10 = HEAP32[$fd69>>2]|0;
     $cmp70 = ($arrayidx66|0)==($10|0);
     do {
      if ($cmp70) {
       $shl72 = 1 << $add64;
       $neg73 = $shl72 ^ -1;
       $and74 = $0 & $neg73;
       HEAP32[1350] = $and74;
       $14 = $and74;
      } else {
       $11 = HEAP32[(5416)>>2]|0;
       $cmp76 = ($10>>>0)<($11>>>0);
       if ($cmp76) {
        _abort();
        // unreachable;
       }
       $bk78 = ((($10)) + 12|0);
       $12 = HEAP32[$bk78>>2]|0;
       $cmp79 = ($12|0)==($9|0);
       if ($cmp79) {
        HEAP32[$bk78>>2] = $arrayidx66;
        HEAP32[$8>>2] = $10;
        $14 = $0;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $shl90 = $add64 << 3;
     $sub91 = (($shl90) - ($cond))|0;
     $or93 = $cond | 3;
     $head94 = ((($9)) + 4|0);
     HEAP32[$head94>>2] = $or93;
     $add$ptr95 = (($9) + ($cond)|0);
     $or96 = $sub91 | 1;
     $head97 = ((($add$ptr95)) + 4|0);
     HEAP32[$head97>>2] = $or96;
     $add$ptr98 = (($add$ptr95) + ($sub91)|0);
     HEAP32[$add$ptr98>>2] = $sub91;
     $cmp99 = ($7|0)==(0);
     if (!($cmp99)) {
      $13 = HEAP32[(5420)>>2]|0;
      $shr101 = $7 >>> 3;
      $shl102 = $shr101 << 1;
      $arrayidx103 = (5440 + ($shl102<<2)|0);
      $shl105 = 1 << $shr101;
      $and106 = $14 & $shl105;
      $tobool107 = ($and106|0)==(0);
      if ($tobool107) {
       $or110 = $14 | $shl105;
       HEAP32[1350] = $or110;
       $$pre = ((($arrayidx103)) + 8|0);
       $$pre$phiZ2D = $$pre;$F104$0 = $arrayidx103;
      } else {
       $15 = ((($arrayidx103)) + 8|0);
       $16 = HEAP32[$15>>2]|0;
       $17 = HEAP32[(5416)>>2]|0;
       $cmp113 = ($16>>>0)<($17>>>0);
       if ($cmp113) {
        _abort();
        // unreachable;
       } else {
        $$pre$phiZ2D = $15;$F104$0 = $16;
       }
      }
      HEAP32[$$pre$phiZ2D>>2] = $13;
      $bk122 = ((($F104$0)) + 12|0);
      HEAP32[$bk122>>2] = $13;
      $fd123 = ((($13)) + 8|0);
      HEAP32[$fd123>>2] = $F104$0;
      $bk124 = ((($13)) + 12|0);
      HEAP32[$bk124>>2] = $arrayidx103;
     }
     HEAP32[(5408)>>2] = $sub91;
     HEAP32[(5420)>>2] = $add$ptr95;
     $retval$0 = $fd69;
     STACKTOP = sp;return ($retval$0|0);
    }
    $18 = HEAP32[(5404)>>2]|0;
    $cmp128 = ($18|0)==(0);
    if ($cmp128) {
     $nb$0 = $cond;
    } else {
     $sub$i = (0 - ($18))|0;
     $and$i = $18 & $sub$i;
     $sub2$i = (($and$i) + -1)|0;
     $shr$i = $sub2$i >>> 12;
     $and3$i = $shr$i & 16;
     $shr4$i = $sub2$i >>> $and3$i;
     $shr5$i = $shr4$i >>> 5;
     $and6$i = $shr5$i & 8;
     $add$i = $and6$i | $and3$i;
     $shr7$i = $shr4$i >>> $and6$i;
     $shr8$i = $shr7$i >>> 2;
     $and9$i = $shr8$i & 4;
     $add10$i = $add$i | $and9$i;
     $shr11$i = $shr7$i >>> $and9$i;
     $shr12$i = $shr11$i >>> 1;
     $and13$i = $shr12$i & 2;
     $add14$i = $add10$i | $and13$i;
     $shr15$i = $shr11$i >>> $and13$i;
     $shr16$i = $shr15$i >>> 1;
     $and17$i = $shr16$i & 1;
     $add18$i = $add14$i | $and17$i;
     $shr19$i = $shr15$i >>> $and17$i;
     $add20$i = (($add18$i) + ($shr19$i))|0;
     $arrayidx$i = (5704 + ($add20$i<<2)|0);
     $19 = HEAP32[$arrayidx$i>>2]|0;
     $head$i = ((($19)) + 4|0);
     $20 = HEAP32[$head$i>>2]|0;
     $and21$i = $20 & -8;
     $sub22$i = (($and21$i) - ($cond))|0;
     $rsize$0$i = $sub22$i;$t$0$i = $19;$v$0$i = $19;
     while(1) {
      $arrayidx23$i = ((($t$0$i)) + 16|0);
      $21 = HEAP32[$arrayidx23$i>>2]|0;
      $cmp$i = ($21|0)==(0|0);
      if ($cmp$i) {
       $arrayidx27$i = ((($t$0$i)) + 20|0);
       $22 = HEAP32[$arrayidx27$i>>2]|0;
       $cmp28$i = ($22|0)==(0|0);
       if ($cmp28$i) {
        break;
       } else {
        $cond4$i = $22;
       }
      } else {
       $cond4$i = $21;
      }
      $head29$i = ((($cond4$i)) + 4|0);
      $23 = HEAP32[$head29$i>>2]|0;
      $and30$i = $23 & -8;
      $sub31$i = (($and30$i) - ($cond))|0;
      $cmp32$i = ($sub31$i>>>0)<($rsize$0$i>>>0);
      $sub31$rsize$0$i = $cmp32$i ? $sub31$i : $rsize$0$i;
      $cond$v$0$i = $cmp32$i ? $cond4$i : $v$0$i;
      $rsize$0$i = $sub31$rsize$0$i;$t$0$i = $cond4$i;$v$0$i = $cond$v$0$i;
     }
     $24 = HEAP32[(5416)>>2]|0;
     $cmp33$i = ($v$0$i>>>0)<($24>>>0);
     if ($cmp33$i) {
      _abort();
      // unreachable;
     }
     $add$ptr$i = (($v$0$i) + ($cond)|0);
     $cmp35$i = ($v$0$i>>>0)<($add$ptr$i>>>0);
     if (!($cmp35$i)) {
      _abort();
      // unreachable;
     }
     $parent$i = ((($v$0$i)) + 24|0);
     $25 = HEAP32[$parent$i>>2]|0;
     $bk$i = ((($v$0$i)) + 12|0);
     $26 = HEAP32[$bk$i>>2]|0;
     $cmp40$i = ($26|0)==($v$0$i|0);
     do {
      if ($cmp40$i) {
       $arrayidx61$i = ((($v$0$i)) + 20|0);
       $30 = HEAP32[$arrayidx61$i>>2]|0;
       $cmp62$i = ($30|0)==(0|0);
       if ($cmp62$i) {
        $arrayidx65$i = ((($v$0$i)) + 16|0);
        $31 = HEAP32[$arrayidx65$i>>2]|0;
        $cmp66$i = ($31|0)==(0|0);
        if ($cmp66$i) {
         $R$3$i = 0;
         break;
        } else {
         $R$1$i = $31;$RP$1$i = $arrayidx65$i;
        }
       } else {
        $R$1$i = $30;$RP$1$i = $arrayidx61$i;
       }
       while(1) {
        $arrayidx71$i = ((($R$1$i)) + 20|0);
        $32 = HEAP32[$arrayidx71$i>>2]|0;
        $cmp72$i = ($32|0)==(0|0);
        if (!($cmp72$i)) {
         $R$1$i = $32;$RP$1$i = $arrayidx71$i;
         continue;
        }
        $arrayidx75$i = ((($R$1$i)) + 16|0);
        $33 = HEAP32[$arrayidx75$i>>2]|0;
        $cmp76$i = ($33|0)==(0|0);
        if ($cmp76$i) {
         break;
        } else {
         $R$1$i = $33;$RP$1$i = $arrayidx75$i;
        }
       }
       $cmp81$i = ($RP$1$i>>>0)<($24>>>0);
       if ($cmp81$i) {
        _abort();
        // unreachable;
       } else {
        HEAP32[$RP$1$i>>2] = 0;
        $R$3$i = $R$1$i;
        break;
       }
      } else {
       $fd$i = ((($v$0$i)) + 8|0);
       $27 = HEAP32[$fd$i>>2]|0;
       $cmp45$i = ($27>>>0)<($24>>>0);
       if ($cmp45$i) {
        _abort();
        // unreachable;
       }
       $bk47$i = ((($27)) + 12|0);
       $28 = HEAP32[$bk47$i>>2]|0;
       $cmp48$i = ($28|0)==($v$0$i|0);
       if (!($cmp48$i)) {
        _abort();
        // unreachable;
       }
       $fd50$i = ((($26)) + 8|0);
       $29 = HEAP32[$fd50$i>>2]|0;
       $cmp51$i = ($29|0)==($v$0$i|0);
       if ($cmp51$i) {
        HEAP32[$bk47$i>>2] = $26;
        HEAP32[$fd50$i>>2] = $27;
        $R$3$i = $26;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $cmp90$i = ($25|0)==(0|0);
     do {
      if (!($cmp90$i)) {
       $index$i = ((($v$0$i)) + 28|0);
       $34 = HEAP32[$index$i>>2]|0;
       $arrayidx94$i = (5704 + ($34<<2)|0);
       $35 = HEAP32[$arrayidx94$i>>2]|0;
       $cmp95$i = ($v$0$i|0)==($35|0);
       if ($cmp95$i) {
        HEAP32[$arrayidx94$i>>2] = $R$3$i;
        $cond2$i = ($R$3$i|0)==(0|0);
        if ($cond2$i) {
         $shl$i = 1 << $34;
         $neg$i = $shl$i ^ -1;
         $and103$i = $18 & $neg$i;
         HEAP32[(5404)>>2] = $and103$i;
         break;
        }
       } else {
        $36 = HEAP32[(5416)>>2]|0;
        $cmp107$i = ($25>>>0)<($36>>>0);
        if ($cmp107$i) {
         _abort();
         // unreachable;
        }
        $arrayidx113$i = ((($25)) + 16|0);
        $37 = HEAP32[$arrayidx113$i>>2]|0;
        $cmp114$i = ($37|0)==($v$0$i|0);
        if ($cmp114$i) {
         HEAP32[$arrayidx113$i>>2] = $R$3$i;
        } else {
         $arrayidx121$i = ((($25)) + 20|0);
         HEAP32[$arrayidx121$i>>2] = $R$3$i;
        }
        $cmp126$i = ($R$3$i|0)==(0|0);
        if ($cmp126$i) {
         break;
        }
       }
       $38 = HEAP32[(5416)>>2]|0;
       $cmp130$i = ($R$3$i>>>0)<($38>>>0);
       if ($cmp130$i) {
        _abort();
        // unreachable;
       }
       $parent135$i = ((($R$3$i)) + 24|0);
       HEAP32[$parent135$i>>2] = $25;
       $arrayidx137$i = ((($v$0$i)) + 16|0);
       $39 = HEAP32[$arrayidx137$i>>2]|0;
       $cmp138$i = ($39|0)==(0|0);
       do {
        if (!($cmp138$i)) {
         $cmp142$i = ($39>>>0)<($38>>>0);
         if ($cmp142$i) {
          _abort();
          // unreachable;
         } else {
          $arrayidx148$i = ((($R$3$i)) + 16|0);
          HEAP32[$arrayidx148$i>>2] = $39;
          $parent149$i = ((($39)) + 24|0);
          HEAP32[$parent149$i>>2] = $R$3$i;
          break;
         }
        }
       } while(0);
       $arrayidx154$i = ((($v$0$i)) + 20|0);
       $40 = HEAP32[$arrayidx154$i>>2]|0;
       $cmp155$i = ($40|0)==(0|0);
       if (!($cmp155$i)) {
        $41 = HEAP32[(5416)>>2]|0;
        $cmp159$i = ($40>>>0)<($41>>>0);
        if ($cmp159$i) {
         _abort();
         // unreachable;
        } else {
         $arrayidx165$i = ((($R$3$i)) + 20|0);
         HEAP32[$arrayidx165$i>>2] = $40;
         $parent166$i = ((($40)) + 24|0);
         HEAP32[$parent166$i>>2] = $R$3$i;
         break;
        }
       }
      }
     } while(0);
     $cmp174$i = ($rsize$0$i>>>0)<(16);
     if ($cmp174$i) {
      $add177$i = (($rsize$0$i) + ($cond))|0;
      $or178$i = $add177$i | 3;
      $head179$i = ((($v$0$i)) + 4|0);
      HEAP32[$head179$i>>2] = $or178$i;
      $add$ptr181$i = (($v$0$i) + ($add177$i)|0);
      $head182$i = ((($add$ptr181$i)) + 4|0);
      $42 = HEAP32[$head182$i>>2]|0;
      $or183$i = $42 | 1;
      HEAP32[$head182$i>>2] = $or183$i;
     } else {
      $or186$i = $cond | 3;
      $head187$i = ((($v$0$i)) + 4|0);
      HEAP32[$head187$i>>2] = $or186$i;
      $or188$i = $rsize$0$i | 1;
      $head189$i = ((($add$ptr$i)) + 4|0);
      HEAP32[$head189$i>>2] = $or188$i;
      $add$ptr190$i = (($add$ptr$i) + ($rsize$0$i)|0);
      HEAP32[$add$ptr190$i>>2] = $rsize$0$i;
      $cmp191$i = ($7|0)==(0);
      if (!($cmp191$i)) {
       $43 = HEAP32[(5420)>>2]|0;
       $shr194$i = $7 >>> 3;
       $shl195$i = $shr194$i << 1;
       $arrayidx196$i = (5440 + ($shl195$i<<2)|0);
       $shl198$i = 1 << $shr194$i;
       $and199$i = $0 & $shl198$i;
       $tobool200$i = ($and199$i|0)==(0);
       if ($tobool200$i) {
        $or204$i = $0 | $shl198$i;
        HEAP32[1350] = $or204$i;
        $$pre$i = ((($arrayidx196$i)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F197$0$i = $arrayidx196$i;
       } else {
        $44 = ((($arrayidx196$i)) + 8|0);
        $45 = HEAP32[$44>>2]|0;
        $46 = HEAP32[(5416)>>2]|0;
        $cmp208$i = ($45>>>0)<($46>>>0);
        if ($cmp208$i) {
         _abort();
         // unreachable;
        } else {
         $$pre$phi$iZ2D = $44;$F197$0$i = $45;
        }
       }
       HEAP32[$$pre$phi$iZ2D>>2] = $43;
       $bk218$i = ((($F197$0$i)) + 12|0);
       HEAP32[$bk218$i>>2] = $43;
       $fd219$i = ((($43)) + 8|0);
       HEAP32[$fd219$i>>2] = $F197$0$i;
       $bk220$i = ((($43)) + 12|0);
       HEAP32[$bk220$i>>2] = $arrayidx196$i;
      }
      HEAP32[(5408)>>2] = $rsize$0$i;
      HEAP32[(5420)>>2] = $add$ptr$i;
     }
     $add$ptr225$i = ((($v$0$i)) + 8|0);
     $retval$0 = $add$ptr225$i;
     STACKTOP = sp;return ($retval$0|0);
    }
   } else {
    $nb$0 = $cond;
   }
  } else {
   $cmp139 = ($bytes>>>0)>(4294967231);
   if ($cmp139) {
    $nb$0 = -1;
   } else {
    $add144 = (($bytes) + 11)|0;
    $and145 = $add144 & -8;
    $47 = HEAP32[(5404)>>2]|0;
    $cmp146 = ($47|0)==(0);
    if ($cmp146) {
     $nb$0 = $and145;
    } else {
     $sub$i138 = (0 - ($and145))|0;
     $shr$i139 = $add144 >>> 8;
     $cmp$i140 = ($shr$i139|0)==(0);
     if ($cmp$i140) {
      $idx$0$i = 0;
     } else {
      $cmp1$i = ($and145>>>0)>(16777215);
      if ($cmp1$i) {
       $idx$0$i = 31;
      } else {
       $sub4$i = (($shr$i139) + 1048320)|0;
       $shr5$i142 = $sub4$i >>> 16;
       $and$i143 = $shr5$i142 & 8;
       $shl$i144 = $shr$i139 << $and$i143;
       $sub6$i = (($shl$i144) + 520192)|0;
       $shr7$i145 = $sub6$i >>> 16;
       $and8$i = $shr7$i145 & 4;
       $add$i146 = $and8$i | $and$i143;
       $shl9$i = $shl$i144 << $and8$i;
       $sub10$i = (($shl9$i) + 245760)|0;
       $shr11$i147 = $sub10$i >>> 16;
       $and12$i = $shr11$i147 & 2;
       $add13$i = $add$i146 | $and12$i;
       $sub14$i = (14 - ($add13$i))|0;
       $shl15$i = $shl9$i << $and12$i;
       $shr16$i148 = $shl15$i >>> 15;
       $add17$i = (($sub14$i) + ($shr16$i148))|0;
       $shl18$i = $add17$i << 1;
       $add19$i = (($add17$i) + 7)|0;
       $shr20$i = $and145 >>> $add19$i;
       $and21$i149 = $shr20$i & 1;
       $add22$i = $and21$i149 | $shl18$i;
       $idx$0$i = $add22$i;
      }
     }
     $arrayidx$i150 = (5704 + ($idx$0$i<<2)|0);
     $48 = HEAP32[$arrayidx$i150>>2]|0;
     $cmp24$i = ($48|0)==(0|0);
     L123: do {
      if ($cmp24$i) {
       $rsize$3$i = $sub$i138;$t$2$i = 0;$v$3$i = 0;
       label = 86;
      } else {
       $cmp26$i = ($idx$0$i|0)==(31);
       $shr27$i = $idx$0$i >>> 1;
       $sub30$i = (25 - ($shr27$i))|0;
       $cond$i = $cmp26$i ? 0 : $sub30$i;
       $shl31$i = $and145 << $cond$i;
       $rsize$0$i152 = $sub$i138;$rst$0$i = 0;$sizebits$0$i = $shl31$i;$t$0$i151 = $48;$v$0$i153 = 0;
       while(1) {
        $head$i154 = ((($t$0$i151)) + 4|0);
        $49 = HEAP32[$head$i154>>2]|0;
        $and32$i = $49 & -8;
        $sub33$i = (($and32$i) - ($and145))|0;
        $cmp34$i = ($sub33$i>>>0)<($rsize$0$i152>>>0);
        if ($cmp34$i) {
         $cmp36$i = ($sub33$i|0)==(0);
         if ($cmp36$i) {
          $rsize$49$i = 0;$t$48$i = $t$0$i151;$v$410$i = $t$0$i151;
          label = 90;
          break L123;
         } else {
          $rsize$1$i = $sub33$i;$v$1$i = $t$0$i151;
         }
        } else {
         $rsize$1$i = $rsize$0$i152;$v$1$i = $v$0$i153;
        }
        $arrayidx40$i = ((($t$0$i151)) + 20|0);
        $50 = HEAP32[$arrayidx40$i>>2]|0;
        $shr41$i = $sizebits$0$i >>> 31;
        $arrayidx44$i = (((($t$0$i151)) + 16|0) + ($shr41$i<<2)|0);
        $51 = HEAP32[$arrayidx44$i>>2]|0;
        $cmp45$i155 = ($50|0)==(0|0);
        $cmp46$i = ($50|0)==($51|0);
        $or$cond1$i = $cmp45$i155 | $cmp46$i;
        $rst$1$i = $or$cond1$i ? $rst$0$i : $50;
        $cmp49$i = ($51|0)==(0|0);
        $52 = $cmp49$i&1;
        $shl52$i = $52 ^ 1;
        $sizebits$0$shl52$i = $sizebits$0$i << $shl52$i;
        if ($cmp49$i) {
         $rsize$3$i = $rsize$1$i;$t$2$i = $rst$1$i;$v$3$i = $v$1$i;
         label = 86;
         break;
        } else {
         $rsize$0$i152 = $rsize$1$i;$rst$0$i = $rst$1$i;$sizebits$0$i = $sizebits$0$shl52$i;$t$0$i151 = $51;$v$0$i153 = $v$1$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 86) {
      $cmp55$i = ($t$2$i|0)==(0|0);
      $cmp57$i = ($v$3$i|0)==(0|0);
      $or$cond$i = $cmp55$i & $cmp57$i;
      if ($or$cond$i) {
       $shl60$i = 2 << $idx$0$i;
       $sub63$i = (0 - ($shl60$i))|0;
       $or$i = $shl60$i | $sub63$i;
       $and64$i = $47 & $or$i;
       $cmp65$i = ($and64$i|0)==(0);
       if ($cmp65$i) {
        $nb$0 = $and145;
        break;
       }
       $sub67$i = (0 - ($and64$i))|0;
       $and68$i = $and64$i & $sub67$i;
       $sub70$i = (($and68$i) + -1)|0;
       $shr72$i = $sub70$i >>> 12;
       $and73$i = $shr72$i & 16;
       $shr75$i = $sub70$i >>> $and73$i;
       $shr76$i = $shr75$i >>> 5;
       $and77$i = $shr76$i & 8;
       $add78$i = $and77$i | $and73$i;
       $shr79$i = $shr75$i >>> $and77$i;
       $shr80$i = $shr79$i >>> 2;
       $and81$i = $shr80$i & 4;
       $add82$i = $add78$i | $and81$i;
       $shr83$i = $shr79$i >>> $and81$i;
       $shr84$i = $shr83$i >>> 1;
       $and85$i = $shr84$i & 2;
       $add86$i = $add82$i | $and85$i;
       $shr87$i = $shr83$i >>> $and85$i;
       $shr88$i = $shr87$i >>> 1;
       $and89$i = $shr88$i & 1;
       $add90$i = $add86$i | $and89$i;
       $shr91$i = $shr87$i >>> $and89$i;
       $add92$i = (($add90$i) + ($shr91$i))|0;
       $arrayidx94$i156 = (5704 + ($add92$i<<2)|0);
       $53 = HEAP32[$arrayidx94$i156>>2]|0;
       $t$4$ph$i = $53;
      } else {
       $t$4$ph$i = $t$2$i;
      }
      $cmp977$i = ($t$4$ph$i|0)==(0|0);
      if ($cmp977$i) {
       $rsize$4$lcssa$i = $rsize$3$i;$v$4$lcssa$i = $v$3$i;
      } else {
       $rsize$49$i = $rsize$3$i;$t$48$i = $t$4$ph$i;$v$410$i = $v$3$i;
       label = 90;
      }
     }
     if ((label|0) == 90) {
      while(1) {
       label = 0;
       $head99$i = ((($t$48$i)) + 4|0);
       $54 = HEAP32[$head99$i>>2]|0;
       $and100$i = $54 & -8;
       $sub101$i = (($and100$i) - ($and145))|0;
       $cmp102$i = ($sub101$i>>>0)<($rsize$49$i>>>0);
       $sub101$rsize$4$i = $cmp102$i ? $sub101$i : $rsize$49$i;
       $t$4$v$4$i = $cmp102$i ? $t$48$i : $v$410$i;
       $arrayidx106$i = ((($t$48$i)) + 16|0);
       $55 = HEAP32[$arrayidx106$i>>2]|0;
       $cmp107$i157 = ($55|0)==(0|0);
       if (!($cmp107$i157)) {
        $rsize$49$i = $sub101$rsize$4$i;$t$48$i = $55;$v$410$i = $t$4$v$4$i;
        label = 90;
        continue;
       }
       $arrayidx113$i159 = ((($t$48$i)) + 20|0);
       $56 = HEAP32[$arrayidx113$i159>>2]|0;
       $cmp97$i = ($56|0)==(0|0);
       if ($cmp97$i) {
        $rsize$4$lcssa$i = $sub101$rsize$4$i;$v$4$lcssa$i = $t$4$v$4$i;
        break;
       } else {
        $rsize$49$i = $sub101$rsize$4$i;$t$48$i = $56;$v$410$i = $t$4$v$4$i;
        label = 90;
       }
      }
     }
     $cmp116$i = ($v$4$lcssa$i|0)==(0|0);
     if ($cmp116$i) {
      $nb$0 = $and145;
     } else {
      $57 = HEAP32[(5408)>>2]|0;
      $sub118$i = (($57) - ($and145))|0;
      $cmp119$i = ($rsize$4$lcssa$i>>>0)<($sub118$i>>>0);
      if ($cmp119$i) {
       $58 = HEAP32[(5416)>>2]|0;
       $cmp121$i = ($v$4$lcssa$i>>>0)<($58>>>0);
       if ($cmp121$i) {
        _abort();
        // unreachable;
       }
       $add$ptr$i161 = (($v$4$lcssa$i) + ($and145)|0);
       $cmp123$i = ($v$4$lcssa$i>>>0)<($add$ptr$i161>>>0);
       if (!($cmp123$i)) {
        _abort();
        // unreachable;
       }
       $parent$i162 = ((($v$4$lcssa$i)) + 24|0);
       $59 = HEAP32[$parent$i162>>2]|0;
       $bk$i163 = ((($v$4$lcssa$i)) + 12|0);
       $60 = HEAP32[$bk$i163>>2]|0;
       $cmp128$i = ($60|0)==($v$4$lcssa$i|0);
       do {
        if ($cmp128$i) {
         $arrayidx151$i = ((($v$4$lcssa$i)) + 20|0);
         $64 = HEAP32[$arrayidx151$i>>2]|0;
         $cmp152$i = ($64|0)==(0|0);
         if ($cmp152$i) {
          $arrayidx155$i = ((($v$4$lcssa$i)) + 16|0);
          $65 = HEAP32[$arrayidx155$i>>2]|0;
          $cmp156$i = ($65|0)==(0|0);
          if ($cmp156$i) {
           $R$3$i171 = 0;
           break;
          } else {
           $R$1$i168 = $65;$RP$1$i167 = $arrayidx155$i;
          }
         } else {
          $R$1$i168 = $64;$RP$1$i167 = $arrayidx151$i;
         }
         while(1) {
          $arrayidx161$i = ((($R$1$i168)) + 20|0);
          $66 = HEAP32[$arrayidx161$i>>2]|0;
          $cmp162$i = ($66|0)==(0|0);
          if (!($cmp162$i)) {
           $R$1$i168 = $66;$RP$1$i167 = $arrayidx161$i;
           continue;
          }
          $arrayidx165$i169 = ((($R$1$i168)) + 16|0);
          $67 = HEAP32[$arrayidx165$i169>>2]|0;
          $cmp166$i = ($67|0)==(0|0);
          if ($cmp166$i) {
           break;
          } else {
           $R$1$i168 = $67;$RP$1$i167 = $arrayidx165$i169;
          }
         }
         $cmp171$i = ($RP$1$i167>>>0)<($58>>>0);
         if ($cmp171$i) {
          _abort();
          // unreachable;
         } else {
          HEAP32[$RP$1$i167>>2] = 0;
          $R$3$i171 = $R$1$i168;
          break;
         }
        } else {
         $fd$i164 = ((($v$4$lcssa$i)) + 8|0);
         $61 = HEAP32[$fd$i164>>2]|0;
         $cmp133$i = ($61>>>0)<($58>>>0);
         if ($cmp133$i) {
          _abort();
          // unreachable;
         }
         $bk136$i = ((($61)) + 12|0);
         $62 = HEAP32[$bk136$i>>2]|0;
         $cmp137$i = ($62|0)==($v$4$lcssa$i|0);
         if (!($cmp137$i)) {
          _abort();
          // unreachable;
         }
         $fd139$i = ((($60)) + 8|0);
         $63 = HEAP32[$fd139$i>>2]|0;
         $cmp140$i = ($63|0)==($v$4$lcssa$i|0);
         if ($cmp140$i) {
          HEAP32[$bk136$i>>2] = $60;
          HEAP32[$fd139$i>>2] = $61;
          $R$3$i171 = $60;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $cmp180$i = ($59|0)==(0|0);
       do {
        if ($cmp180$i) {
         $81 = $47;
        } else {
         $index$i172 = ((($v$4$lcssa$i)) + 28|0);
         $68 = HEAP32[$index$i172>>2]|0;
         $arrayidx184$i = (5704 + ($68<<2)|0);
         $69 = HEAP32[$arrayidx184$i>>2]|0;
         $cmp185$i = ($v$4$lcssa$i|0)==($69|0);
         if ($cmp185$i) {
          HEAP32[$arrayidx184$i>>2] = $R$3$i171;
          $cond3$i = ($R$3$i171|0)==(0|0);
          if ($cond3$i) {
           $shl192$i = 1 << $68;
           $neg$i173 = $shl192$i ^ -1;
           $and194$i = $47 & $neg$i173;
           HEAP32[(5404)>>2] = $and194$i;
           $81 = $and194$i;
           break;
          }
         } else {
          $70 = HEAP32[(5416)>>2]|0;
          $cmp198$i = ($59>>>0)<($70>>>0);
          if ($cmp198$i) {
           _abort();
           // unreachable;
          }
          $arrayidx204$i = ((($59)) + 16|0);
          $71 = HEAP32[$arrayidx204$i>>2]|0;
          $cmp205$i = ($71|0)==($v$4$lcssa$i|0);
          if ($cmp205$i) {
           HEAP32[$arrayidx204$i>>2] = $R$3$i171;
          } else {
           $arrayidx212$i = ((($59)) + 20|0);
           HEAP32[$arrayidx212$i>>2] = $R$3$i171;
          }
          $cmp217$i = ($R$3$i171|0)==(0|0);
          if ($cmp217$i) {
           $81 = $47;
           break;
          }
         }
         $72 = HEAP32[(5416)>>2]|0;
         $cmp221$i = ($R$3$i171>>>0)<($72>>>0);
         if ($cmp221$i) {
          _abort();
          // unreachable;
         }
         $parent226$i = ((($R$3$i171)) + 24|0);
         HEAP32[$parent226$i>>2] = $59;
         $arrayidx228$i = ((($v$4$lcssa$i)) + 16|0);
         $73 = HEAP32[$arrayidx228$i>>2]|0;
         $cmp229$i = ($73|0)==(0|0);
         do {
          if (!($cmp229$i)) {
           $cmp233$i = ($73>>>0)<($72>>>0);
           if ($cmp233$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx239$i = ((($R$3$i171)) + 16|0);
            HEAP32[$arrayidx239$i>>2] = $73;
            $parent240$i = ((($73)) + 24|0);
            HEAP32[$parent240$i>>2] = $R$3$i171;
            break;
           }
          }
         } while(0);
         $arrayidx245$i = ((($v$4$lcssa$i)) + 20|0);
         $74 = HEAP32[$arrayidx245$i>>2]|0;
         $cmp246$i = ($74|0)==(0|0);
         if ($cmp246$i) {
          $81 = $47;
         } else {
          $75 = HEAP32[(5416)>>2]|0;
          $cmp250$i = ($74>>>0)<($75>>>0);
          if ($cmp250$i) {
           _abort();
           // unreachable;
          } else {
           $arrayidx256$i = ((($R$3$i171)) + 20|0);
           HEAP32[$arrayidx256$i>>2] = $74;
           $parent257$i = ((($74)) + 24|0);
           HEAP32[$parent257$i>>2] = $R$3$i171;
           $81 = $47;
           break;
          }
         }
        }
       } while(0);
       $cmp265$i = ($rsize$4$lcssa$i>>>0)<(16);
       do {
        if ($cmp265$i) {
         $add268$i = (($rsize$4$lcssa$i) + ($and145))|0;
         $or270$i = $add268$i | 3;
         $head271$i = ((($v$4$lcssa$i)) + 4|0);
         HEAP32[$head271$i>>2] = $or270$i;
         $add$ptr273$i = (($v$4$lcssa$i) + ($add268$i)|0);
         $head274$i = ((($add$ptr273$i)) + 4|0);
         $76 = HEAP32[$head274$i>>2]|0;
         $or275$i = $76 | 1;
         HEAP32[$head274$i>>2] = $or275$i;
        } else {
         $or278$i = $and145 | 3;
         $head279$i = ((($v$4$lcssa$i)) + 4|0);
         HEAP32[$head279$i>>2] = $or278$i;
         $or280$i = $rsize$4$lcssa$i | 1;
         $head281$i = ((($add$ptr$i161)) + 4|0);
         HEAP32[$head281$i>>2] = $or280$i;
         $add$ptr282$i = (($add$ptr$i161) + ($rsize$4$lcssa$i)|0);
         HEAP32[$add$ptr282$i>>2] = $rsize$4$lcssa$i;
         $shr283$i = $rsize$4$lcssa$i >>> 3;
         $cmp284$i = ($rsize$4$lcssa$i>>>0)<(256);
         if ($cmp284$i) {
          $shl288$i = $shr283$i << 1;
          $arrayidx289$i = (5440 + ($shl288$i<<2)|0);
          $77 = HEAP32[1350]|0;
          $shl291$i = 1 << $shr283$i;
          $and292$i = $77 & $shl291$i;
          $tobool293$i = ($and292$i|0)==(0);
          if ($tobool293$i) {
           $or297$i = $77 | $shl291$i;
           HEAP32[1350] = $or297$i;
           $$pre$i177 = ((($arrayidx289$i)) + 8|0);
           $$pre$phi$i178Z2D = $$pre$i177;$F290$0$i = $arrayidx289$i;
          } else {
           $78 = ((($arrayidx289$i)) + 8|0);
           $79 = HEAP32[$78>>2]|0;
           $80 = HEAP32[(5416)>>2]|0;
           $cmp301$i = ($79>>>0)<($80>>>0);
           if ($cmp301$i) {
            _abort();
            // unreachable;
           } else {
            $$pre$phi$i178Z2D = $78;$F290$0$i = $79;
           }
          }
          HEAP32[$$pre$phi$i178Z2D>>2] = $add$ptr$i161;
          $bk311$i = ((($F290$0$i)) + 12|0);
          HEAP32[$bk311$i>>2] = $add$ptr$i161;
          $fd312$i = ((($add$ptr$i161)) + 8|0);
          HEAP32[$fd312$i>>2] = $F290$0$i;
          $bk313$i = ((($add$ptr$i161)) + 12|0);
          HEAP32[$bk313$i>>2] = $arrayidx289$i;
          break;
         }
         $shr318$i = $rsize$4$lcssa$i >>> 8;
         $cmp319$i = ($shr318$i|0)==(0);
         if ($cmp319$i) {
          $I316$0$i = 0;
         } else {
          $cmp323$i = ($rsize$4$lcssa$i>>>0)>(16777215);
          if ($cmp323$i) {
           $I316$0$i = 31;
          } else {
           $sub329$i = (($shr318$i) + 1048320)|0;
           $shr330$i = $sub329$i >>> 16;
           $and331$i = $shr330$i & 8;
           $shl333$i = $shr318$i << $and331$i;
           $sub334$i = (($shl333$i) + 520192)|0;
           $shr335$i = $sub334$i >>> 16;
           $and336$i = $shr335$i & 4;
           $add337$i = $and336$i | $and331$i;
           $shl338$i = $shl333$i << $and336$i;
           $sub339$i = (($shl338$i) + 245760)|0;
           $shr340$i = $sub339$i >>> 16;
           $and341$i = $shr340$i & 2;
           $add342$i = $add337$i | $and341$i;
           $sub343$i = (14 - ($add342$i))|0;
           $shl344$i = $shl338$i << $and341$i;
           $shr345$i = $shl344$i >>> 15;
           $add346$i = (($sub343$i) + ($shr345$i))|0;
           $shl347$i = $add346$i << 1;
           $add348$i = (($add346$i) + 7)|0;
           $shr349$i = $rsize$4$lcssa$i >>> $add348$i;
           $and350$i = $shr349$i & 1;
           $add351$i = $and350$i | $shl347$i;
           $I316$0$i = $add351$i;
          }
         }
         $arrayidx355$i = (5704 + ($I316$0$i<<2)|0);
         $index356$i = ((($add$ptr$i161)) + 28|0);
         HEAP32[$index356$i>>2] = $I316$0$i;
         $child357$i = ((($add$ptr$i161)) + 16|0);
         $arrayidx358$i = ((($child357$i)) + 4|0);
         HEAP32[$arrayidx358$i>>2] = 0;
         HEAP32[$child357$i>>2] = 0;
         $shl362$i = 1 << $I316$0$i;
         $and363$i = $81 & $shl362$i;
         $tobool364$i = ($and363$i|0)==(0);
         if ($tobool364$i) {
          $or368$i = $81 | $shl362$i;
          HEAP32[(5404)>>2] = $or368$i;
          HEAP32[$arrayidx355$i>>2] = $add$ptr$i161;
          $parent369$i = ((($add$ptr$i161)) + 24|0);
          HEAP32[$parent369$i>>2] = $arrayidx355$i;
          $bk370$i = ((($add$ptr$i161)) + 12|0);
          HEAP32[$bk370$i>>2] = $add$ptr$i161;
          $fd371$i = ((($add$ptr$i161)) + 8|0);
          HEAP32[$fd371$i>>2] = $add$ptr$i161;
          break;
         }
         $82 = HEAP32[$arrayidx355$i>>2]|0;
         $cmp374$i = ($I316$0$i|0)==(31);
         $shr378$i = $I316$0$i >>> 1;
         $sub381$i = (25 - ($shr378$i))|0;
         $cond383$i = $cmp374$i ? 0 : $sub381$i;
         $shl384$i = $rsize$4$lcssa$i << $cond383$i;
         $K373$0$i = $shl384$i;$T$0$i = $82;
         while(1) {
          $head386$i = ((($T$0$i)) + 4|0);
          $83 = HEAP32[$head386$i>>2]|0;
          $and387$i = $83 & -8;
          $cmp388$i = ($and387$i|0)==($rsize$4$lcssa$i|0);
          if ($cmp388$i) {
           label = 148;
           break;
          }
          $shr391$i = $K373$0$i >>> 31;
          $arrayidx394$i = (((($T$0$i)) + 16|0) + ($shr391$i<<2)|0);
          $shl395$i = $K373$0$i << 1;
          $84 = HEAP32[$arrayidx394$i>>2]|0;
          $cmp396$i = ($84|0)==(0|0);
          if ($cmp396$i) {
           label = 145;
           break;
          } else {
           $K373$0$i = $shl395$i;$T$0$i = $84;
          }
         }
         if ((label|0) == 145) {
          $85 = HEAP32[(5416)>>2]|0;
          $cmp401$i = ($arrayidx394$i>>>0)<($85>>>0);
          if ($cmp401$i) {
           _abort();
           // unreachable;
          } else {
           HEAP32[$arrayidx394$i>>2] = $add$ptr$i161;
           $parent406$i = ((($add$ptr$i161)) + 24|0);
           HEAP32[$parent406$i>>2] = $T$0$i;
           $bk407$i = ((($add$ptr$i161)) + 12|0);
           HEAP32[$bk407$i>>2] = $add$ptr$i161;
           $fd408$i = ((($add$ptr$i161)) + 8|0);
           HEAP32[$fd408$i>>2] = $add$ptr$i161;
           break;
          }
         }
         else if ((label|0) == 148) {
          $fd416$i = ((($T$0$i)) + 8|0);
          $86 = HEAP32[$fd416$i>>2]|0;
          $87 = HEAP32[(5416)>>2]|0;
          $cmp422$i = ($86>>>0)>=($87>>>0);
          $not$cmp418$i = ($T$0$i>>>0)>=($87>>>0);
          $88 = $cmp422$i & $not$cmp418$i;
          if ($88) {
           $bk429$i = ((($86)) + 12|0);
           HEAP32[$bk429$i>>2] = $add$ptr$i161;
           HEAP32[$fd416$i>>2] = $add$ptr$i161;
           $fd431$i = ((($add$ptr$i161)) + 8|0);
           HEAP32[$fd431$i>>2] = $86;
           $bk432$i = ((($add$ptr$i161)) + 12|0);
           HEAP32[$bk432$i>>2] = $T$0$i;
           $parent433$i = ((($add$ptr$i161)) + 24|0);
           HEAP32[$parent433$i>>2] = 0;
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $add$ptr441$i = ((($v$4$lcssa$i)) + 8|0);
       $retval$0 = $add$ptr441$i;
       STACKTOP = sp;return ($retval$0|0);
      } else {
       $nb$0 = $and145;
      }
     }
    }
   }
  }
 } while(0);
 $89 = HEAP32[(5408)>>2]|0;
 $cmp156 = ($89>>>0)<($nb$0>>>0);
 if (!($cmp156)) {
  $sub160 = (($89) - ($nb$0))|0;
  $90 = HEAP32[(5420)>>2]|0;
  $cmp162 = ($sub160>>>0)>(15);
  if ($cmp162) {
   $add$ptr166 = (($90) + ($nb$0)|0);
   HEAP32[(5420)>>2] = $add$ptr166;
   HEAP32[(5408)>>2] = $sub160;
   $or167 = $sub160 | 1;
   $head168 = ((($add$ptr166)) + 4|0);
   HEAP32[$head168>>2] = $or167;
   $add$ptr169 = (($add$ptr166) + ($sub160)|0);
   HEAP32[$add$ptr169>>2] = $sub160;
   $or172 = $nb$0 | 3;
   $head173 = ((($90)) + 4|0);
   HEAP32[$head173>>2] = $or172;
  } else {
   HEAP32[(5408)>>2] = 0;
   HEAP32[(5420)>>2] = 0;
   $or176 = $89 | 3;
   $head177 = ((($90)) + 4|0);
   HEAP32[$head177>>2] = $or176;
   $add$ptr178 = (($90) + ($89)|0);
   $head179 = ((($add$ptr178)) + 4|0);
   $91 = HEAP32[$head179>>2]|0;
   $or180 = $91 | 1;
   HEAP32[$head179>>2] = $or180;
  }
  $add$ptr182 = ((($90)) + 8|0);
  $retval$0 = $add$ptr182;
  STACKTOP = sp;return ($retval$0|0);
 }
 $92 = HEAP32[(5412)>>2]|0;
 $cmp186 = ($92>>>0)>($nb$0>>>0);
 if ($cmp186) {
  $sub190 = (($92) - ($nb$0))|0;
  HEAP32[(5412)>>2] = $sub190;
  $93 = HEAP32[(5424)>>2]|0;
  $add$ptr193 = (($93) + ($nb$0)|0);
  HEAP32[(5424)>>2] = $add$ptr193;
  $or194 = $sub190 | 1;
  $head195 = ((($add$ptr193)) + 4|0);
  HEAP32[$head195>>2] = $or194;
  $or197 = $nb$0 | 3;
  $head198 = ((($93)) + 4|0);
  HEAP32[$head198>>2] = $or197;
  $add$ptr199 = ((($93)) + 8|0);
  $retval$0 = $add$ptr199;
  STACKTOP = sp;return ($retval$0|0);
 }
 $94 = HEAP32[1468]|0;
 $cmp$i179 = ($94|0)==(0);
 if ($cmp$i179) {
  HEAP32[(5880)>>2] = 4096;
  HEAP32[(5876)>>2] = 4096;
  HEAP32[(5884)>>2] = -1;
  HEAP32[(5888)>>2] = -1;
  HEAP32[(5892)>>2] = 0;
  HEAP32[(5844)>>2] = 0;
  $95 = $magic$i$i;
  $xor$i$i = $95 & -16;
  $and6$i$i = $xor$i$i ^ 1431655768;
  HEAP32[$magic$i$i>>2] = $and6$i$i;
  HEAP32[1468] = $and6$i$i;
  $96 = 4096;
 } else {
  $$pre$i180 = HEAP32[(5880)>>2]|0;
  $96 = $$pre$i180;
 }
 $add$i181 = (($nb$0) + 48)|0;
 $sub$i182 = (($nb$0) + 47)|0;
 $add9$i = (($96) + ($sub$i182))|0;
 $neg$i183 = (0 - ($96))|0;
 $and11$i = $add9$i & $neg$i183;
 $cmp12$i = ($and11$i>>>0)>($nb$0>>>0);
 if (!($cmp12$i)) {
  $retval$0 = 0;
  STACKTOP = sp;return ($retval$0|0);
 }
 $97 = HEAP32[(5840)>>2]|0;
 $cmp15$i = ($97|0)==(0);
 if (!($cmp15$i)) {
  $98 = HEAP32[(5832)>>2]|0;
  $add17$i184 = (($98) + ($and11$i))|0;
  $cmp19$i = ($add17$i184>>>0)<=($98>>>0);
  $cmp21$i = ($add17$i184>>>0)>($97>>>0);
  $or$cond1$i185 = $cmp19$i | $cmp21$i;
  if ($or$cond1$i185) {
   $retval$0 = 0;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $99 = HEAP32[(5844)>>2]|0;
 $and29$i = $99 & 4;
 $tobool30$i = ($and29$i|0)==(0);
 L255: do {
  if ($tobool30$i) {
   $100 = HEAP32[(5424)>>2]|0;
   $cmp32$i186 = ($100|0)==(0|0);
   L257: do {
    if ($cmp32$i186) {
     label = 172;
    } else {
     $sp$0$i$i = (5848);
     while(1) {
      $101 = HEAP32[$sp$0$i$i>>2]|0;
      $cmp$i11$i = ($101>>>0)>($100>>>0);
      if (!($cmp$i11$i)) {
       $size$i$i = ((($sp$0$i$i)) + 4|0);
       $102 = HEAP32[$size$i$i>>2]|0;
       $add$ptr$i$i = (($101) + ($102)|0);
       $cmp2$i$i = ($add$ptr$i$i>>>0)>($100>>>0);
       if ($cmp2$i$i) {
        break;
       }
      }
      $next$i$i = ((($sp$0$i$i)) + 8|0);
      $103 = HEAP32[$next$i$i>>2]|0;
      $cmp3$i$i = ($103|0)==(0|0);
      if ($cmp3$i$i) {
       label = 172;
       break L257;
      } else {
       $sp$0$i$i = $103;
      }
     }
     $add77$i = (($add9$i) - ($92))|0;
     $and80$i = $add77$i & $neg$i183;
     $cmp81$i192 = ($and80$i>>>0)<(2147483647);
     if ($cmp81$i192) {
      $call83$i = (_sbrk(($and80$i|0))|0);
      $108 = HEAP32[$sp$0$i$i>>2]|0;
      $109 = HEAP32[$size$i$i>>2]|0;
      $add$ptr$i194 = (($108) + ($109)|0);
      $cmp85$i = ($call83$i|0)==($add$ptr$i194|0);
      if ($cmp85$i) {
       $cmp89$i = ($call83$i|0)==((-1)|0);
       if (!($cmp89$i)) {
        $tbase$793$i = $call83$i;$tsize$792$i = $and80$i;
        label = 190;
        break L255;
       }
      } else {
       $br$2$ph$i = $call83$i;$ssize$2$ph$i = $and80$i;
       label = 180;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 172) {
     $call37$i = (_sbrk(0)|0);
     $cmp38$i = ($call37$i|0)==((-1)|0);
     if (!($cmp38$i)) {
      $104 = $call37$i;
      $105 = HEAP32[(5876)>>2]|0;
      $sub41$i = (($105) + -1)|0;
      $and42$i = $sub41$i & $104;
      $cmp43$i = ($and42$i|0)==(0);
      $add46$i = (($sub41$i) + ($104))|0;
      $neg48$i = (0 - ($105))|0;
      $and49$i = $add46$i & $neg48$i;
      $sub50$i = (($and49$i) - ($104))|0;
      $add51$i = $cmp43$i ? 0 : $sub50$i;
      $and11$add51$i = (($add51$i) + ($and11$i))|0;
      $106 = HEAP32[(5832)>>2]|0;
      $add54$i = (($and11$add51$i) + ($106))|0;
      $cmp55$i187 = ($and11$add51$i>>>0)>($nb$0>>>0);
      $cmp57$i188 = ($and11$add51$i>>>0)<(2147483647);
      $or$cond$i189 = $cmp55$i187 & $cmp57$i188;
      if ($or$cond$i189) {
       $107 = HEAP32[(5840)>>2]|0;
       $cmp60$i = ($107|0)==(0);
       if (!($cmp60$i)) {
        $cmp63$i = ($add54$i>>>0)<=($106>>>0);
        $cmp66$i191 = ($add54$i>>>0)>($107>>>0);
        $or$cond2$i = $cmp63$i | $cmp66$i191;
        if ($or$cond2$i) {
         break;
        }
       }
       $call68$i = (_sbrk(($and11$add51$i|0))|0);
       $cmp69$i = ($call68$i|0)==($call37$i|0);
       if ($cmp69$i) {
        $tbase$793$i = $call37$i;$tsize$792$i = $and11$add51$i;
        label = 190;
        break L255;
       } else {
        $br$2$ph$i = $call68$i;$ssize$2$ph$i = $and11$add51$i;
        label = 180;
       }
      }
     }
    }
   } while(0);
   L274: do {
    if ((label|0) == 180) {
     $sub112$i = (0 - ($ssize$2$ph$i))|0;
     $cmp91$i = ($br$2$ph$i|0)!=((-1)|0);
     $cmp93$i = ($ssize$2$ph$i>>>0)<(2147483647);
     $or$cond5$i = $cmp93$i & $cmp91$i;
     $cmp96$i = ($add$i181>>>0)>($ssize$2$ph$i>>>0);
     $or$cond3$i = $cmp96$i & $or$cond5$i;
     do {
      if ($or$cond3$i) {
       $110 = HEAP32[(5880)>>2]|0;
       $sub99$i = (($sub$i182) - ($ssize$2$ph$i))|0;
       $add101$i = (($sub99$i) + ($110))|0;
       $neg103$i = (0 - ($110))|0;
       $and104$i = $add101$i & $neg103$i;
       $cmp105$i = ($and104$i>>>0)<(2147483647);
       if ($cmp105$i) {
        $call107$i = (_sbrk(($and104$i|0))|0);
        $cmp108$i = ($call107$i|0)==((-1)|0);
        if ($cmp108$i) {
         (_sbrk(($sub112$i|0))|0);
         break L274;
        } else {
         $add110$i = (($and104$i) + ($ssize$2$ph$i))|0;
         $ssize$5$i = $add110$i;
         break;
        }
       } else {
        $ssize$5$i = $ssize$2$ph$i;
       }
      } else {
       $ssize$5$i = $ssize$2$ph$i;
      }
     } while(0);
     $cmp118$i = ($br$2$ph$i|0)==((-1)|0);
     if (!($cmp118$i)) {
      $tbase$793$i = $br$2$ph$i;$tsize$792$i = $ssize$5$i;
      label = 190;
      break L255;
     }
    }
   } while(0);
   $111 = HEAP32[(5844)>>2]|0;
   $or$i196 = $111 | 4;
   HEAP32[(5844)>>2] = $or$i196;
   label = 187;
  } else {
   label = 187;
  }
 } while(0);
 if ((label|0) == 187) {
  $cmp127$i = ($and11$i>>>0)<(2147483647);
  if ($cmp127$i) {
   $call131$i = (_sbrk(($and11$i|0))|0);
   $call132$i = (_sbrk(0)|0);
   $cmp133$i197 = ($call131$i|0)!=((-1)|0);
   $cmp135$i = ($call132$i|0)!=((-1)|0);
   $or$cond4$i = $cmp133$i197 & $cmp135$i;
   $cmp137$i198 = ($call131$i>>>0)<($call132$i>>>0);
   $or$cond7$i = $cmp137$i198 & $or$cond4$i;
   if ($or$cond7$i) {
    $sub$ptr$lhs$cast$i = $call132$i;
    $sub$ptr$rhs$cast$i = $call131$i;
    $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
    $add140$i = (($nb$0) + 40)|0;
    $cmp141$not$i = ($sub$ptr$sub$i>>>0)>($add140$i>>>0);
    if ($cmp141$not$i) {
     $tbase$793$i = $call131$i;$tsize$792$i = $sub$ptr$sub$i;
     label = 190;
    }
   }
  }
 }
 if ((label|0) == 190) {
  $112 = HEAP32[(5832)>>2]|0;
  $add150$i = (($112) + ($tsize$792$i))|0;
  HEAP32[(5832)>>2] = $add150$i;
  $113 = HEAP32[(5836)>>2]|0;
  $cmp151$i = ($add150$i>>>0)>($113>>>0);
  if ($cmp151$i) {
   HEAP32[(5836)>>2] = $add150$i;
  }
  $114 = HEAP32[(5424)>>2]|0;
  $cmp157$i = ($114|0)==(0|0);
  do {
   if ($cmp157$i) {
    $115 = HEAP32[(5416)>>2]|0;
    $cmp159$i200 = ($115|0)==(0|0);
    $cmp162$i201 = ($tbase$793$i>>>0)<($115>>>0);
    $or$cond8$i = $cmp159$i200 | $cmp162$i201;
    if ($or$cond8$i) {
     HEAP32[(5416)>>2] = $tbase$793$i;
    }
    HEAP32[(5848)>>2] = $tbase$793$i;
    HEAP32[(5852)>>2] = $tsize$792$i;
    HEAP32[(5860)>>2] = 0;
    $116 = HEAP32[1468]|0;
    HEAP32[(5436)>>2] = $116;
    HEAP32[(5432)>>2] = -1;
    $i$01$i$i = 0;
    while(1) {
     $shl$i13$i = $i$01$i$i << 1;
     $arrayidx$i14$i = (5440 + ($shl$i13$i<<2)|0);
     $117 = ((($arrayidx$i14$i)) + 12|0);
     HEAP32[$117>>2] = $arrayidx$i14$i;
     $118 = ((($arrayidx$i14$i)) + 8|0);
     HEAP32[$118>>2] = $arrayidx$i14$i;
     $inc$i$i = (($i$01$i$i) + 1)|0;
     $exitcond$i$i = ($inc$i$i|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $i$01$i$i = $inc$i$i;
     }
    }
    $sub172$i = (($tsize$792$i) + -40)|0;
    $add$ptr$i16$i = ((($tbase$793$i)) + 8|0);
    $119 = $add$ptr$i16$i;
    $and$i17$i = $119 & 7;
    $cmp$i18$i = ($and$i17$i|0)==(0);
    $120 = (0 - ($119))|0;
    $and3$i$i = $120 & 7;
    $cond$i19$i = $cmp$i18$i ? 0 : $and3$i$i;
    $add$ptr4$i$i = (($tbase$793$i) + ($cond$i19$i)|0);
    $sub5$i$i = (($sub172$i) - ($cond$i19$i))|0;
    HEAP32[(5424)>>2] = $add$ptr4$i$i;
    HEAP32[(5412)>>2] = $sub5$i$i;
    $or$i$i = $sub5$i$i | 1;
    $head$i20$i = ((($add$ptr4$i$i)) + 4|0);
    HEAP32[$head$i20$i>>2] = $or$i$i;
    $add$ptr6$i$i = (($add$ptr4$i$i) + ($sub5$i$i)|0);
    $head7$i$i = ((($add$ptr6$i$i)) + 4|0);
    HEAP32[$head7$i$i>>2] = 40;
    $121 = HEAP32[(5888)>>2]|0;
    HEAP32[(5428)>>2] = $121;
   } else {
    $sp$0104$i = (5848);
    while(1) {
     $122 = HEAP32[$sp$0104$i>>2]|0;
     $size188$i = ((($sp$0104$i)) + 4|0);
     $123 = HEAP32[$size188$i>>2]|0;
     $add$ptr189$i = (($122) + ($123)|0);
     $cmp190$i = ($tbase$793$i|0)==($add$ptr189$i|0);
     if ($cmp190$i) {
      label = 200;
      break;
     }
     $next$i = ((($sp$0104$i)) + 8|0);
     $124 = HEAP32[$next$i>>2]|0;
     $cmp186$i = ($124|0)==(0|0);
     if ($cmp186$i) {
      break;
     } else {
      $sp$0104$i = $124;
     }
    }
    if ((label|0) == 200) {
     $sflags193$i = ((($sp$0104$i)) + 12|0);
     $125 = HEAP32[$sflags193$i>>2]|0;
     $and194$i205 = $125 & 8;
     $tobool195$i = ($and194$i205|0)==(0);
     if ($tobool195$i) {
      $cmp203$i = ($114>>>0)>=($122>>>0);
      $cmp209$i = ($114>>>0)<($tbase$793$i>>>0);
      $or$cond95$i = $cmp209$i & $cmp203$i;
      if ($or$cond95$i) {
       $add212$i = (($123) + ($tsize$792$i))|0;
       HEAP32[$size188$i>>2] = $add212$i;
       $126 = HEAP32[(5412)>>2]|0;
       $add$ptr$i49$i = ((($114)) + 8|0);
       $127 = $add$ptr$i49$i;
       $and$i50$i = $127 & 7;
       $cmp$i51$i = ($and$i50$i|0)==(0);
       $128 = (0 - ($127))|0;
       $and3$i52$i = $128 & 7;
       $cond$i53$i = $cmp$i51$i ? 0 : $and3$i52$i;
       $add$ptr4$i54$i = (($114) + ($cond$i53$i)|0);
       $add215$i = (($tsize$792$i) - ($cond$i53$i))|0;
       $sub5$i55$i = (($add215$i) + ($126))|0;
       HEAP32[(5424)>>2] = $add$ptr4$i54$i;
       HEAP32[(5412)>>2] = $sub5$i55$i;
       $or$i56$i = $sub5$i55$i | 1;
       $head$i57$i = ((($add$ptr4$i54$i)) + 4|0);
       HEAP32[$head$i57$i>>2] = $or$i56$i;
       $add$ptr6$i58$i = (($add$ptr4$i54$i) + ($sub5$i55$i)|0);
       $head7$i59$i = ((($add$ptr6$i58$i)) + 4|0);
       HEAP32[$head7$i59$i>>2] = 40;
       $129 = HEAP32[(5888)>>2]|0;
       HEAP32[(5428)>>2] = $129;
       break;
      }
     }
    }
    $130 = HEAP32[(5416)>>2]|0;
    $cmp218$i = ($tbase$793$i>>>0)<($130>>>0);
    if ($cmp218$i) {
     HEAP32[(5416)>>2] = $tbase$793$i;
     $145 = $tbase$793$i;
    } else {
     $145 = $130;
    }
    $add$ptr227$i = (($tbase$793$i) + ($tsize$792$i)|0);
    $sp$1103$i = (5848);
    while(1) {
     $131 = HEAP32[$sp$1103$i>>2]|0;
     $cmp228$i = ($131|0)==($add$ptr227$i|0);
     if ($cmp228$i) {
      label = 208;
      break;
     }
     $next231$i = ((($sp$1103$i)) + 8|0);
     $132 = HEAP32[$next231$i>>2]|0;
     $cmp224$i = ($132|0)==(0|0);
     if ($cmp224$i) {
      $sp$0$i$i$i = (5848);
      break;
     } else {
      $sp$1103$i = $132;
     }
    }
    if ((label|0) == 208) {
     $sflags235$i = ((($sp$1103$i)) + 12|0);
     $133 = HEAP32[$sflags235$i>>2]|0;
     $and236$i = $133 & 8;
     $tobool237$i = ($and236$i|0)==(0);
     if ($tobool237$i) {
      HEAP32[$sp$1103$i>>2] = $tbase$793$i;
      $size245$i = ((($sp$1103$i)) + 4|0);
      $134 = HEAP32[$size245$i>>2]|0;
      $add246$i = (($134) + ($tsize$792$i))|0;
      HEAP32[$size245$i>>2] = $add246$i;
      $add$ptr$i21$i = ((($tbase$793$i)) + 8|0);
      $135 = $add$ptr$i21$i;
      $and$i22$i = $135 & 7;
      $cmp$i23$i = ($and$i22$i|0)==(0);
      $136 = (0 - ($135))|0;
      $and3$i24$i = $136 & 7;
      $cond$i25$i = $cmp$i23$i ? 0 : $and3$i24$i;
      $add$ptr4$i26$i = (($tbase$793$i) + ($cond$i25$i)|0);
      $add$ptr5$i$i = ((($add$ptr227$i)) + 8|0);
      $137 = $add$ptr5$i$i;
      $and6$i27$i = $137 & 7;
      $cmp7$i$i = ($and6$i27$i|0)==(0);
      $138 = (0 - ($137))|0;
      $and13$i$i = $138 & 7;
      $cond15$i$i = $cmp7$i$i ? 0 : $and13$i$i;
      $add$ptr16$i$i = (($add$ptr227$i) + ($cond15$i$i)|0);
      $sub$ptr$lhs$cast$i28$i = $add$ptr16$i$i;
      $sub$ptr$rhs$cast$i29$i = $add$ptr4$i26$i;
      $sub$ptr$sub$i30$i = (($sub$ptr$lhs$cast$i28$i) - ($sub$ptr$rhs$cast$i29$i))|0;
      $add$ptr17$i$i = (($add$ptr4$i26$i) + ($nb$0)|0);
      $sub18$i$i = (($sub$ptr$sub$i30$i) - ($nb$0))|0;
      $or19$i$i = $nb$0 | 3;
      $head$i31$i = ((($add$ptr4$i26$i)) + 4|0);
      HEAP32[$head$i31$i>>2] = $or19$i$i;
      $cmp20$i$i = ($add$ptr16$i$i|0)==($114|0);
      do {
       if ($cmp20$i$i) {
        $139 = HEAP32[(5412)>>2]|0;
        $add$i$i = (($139) + ($sub18$i$i))|0;
        HEAP32[(5412)>>2] = $add$i$i;
        HEAP32[(5424)>>2] = $add$ptr17$i$i;
        $or22$i$i = $add$i$i | 1;
        $head23$i$i = ((($add$ptr17$i$i)) + 4|0);
        HEAP32[$head23$i$i>>2] = $or22$i$i;
       } else {
        $140 = HEAP32[(5420)>>2]|0;
        $cmp24$i$i = ($add$ptr16$i$i|0)==($140|0);
        if ($cmp24$i$i) {
         $141 = HEAP32[(5408)>>2]|0;
         $add26$i$i = (($141) + ($sub18$i$i))|0;
         HEAP32[(5408)>>2] = $add26$i$i;
         HEAP32[(5420)>>2] = $add$ptr17$i$i;
         $or28$i$i = $add26$i$i | 1;
         $head29$i$i = ((($add$ptr17$i$i)) + 4|0);
         HEAP32[$head29$i$i>>2] = $or28$i$i;
         $add$ptr30$i$i = (($add$ptr17$i$i) + ($add26$i$i)|0);
         HEAP32[$add$ptr30$i$i>>2] = $add26$i$i;
         break;
        }
        $head32$i$i = ((($add$ptr16$i$i)) + 4|0);
        $142 = HEAP32[$head32$i$i>>2]|0;
        $and33$i$i = $142 & 3;
        $cmp34$i$i = ($and33$i$i|0)==(1);
        if ($cmp34$i$i) {
         $and37$i$i = $142 & -8;
         $shr$i34$i = $142 >>> 3;
         $cmp38$i$i = ($142>>>0)<(256);
         L326: do {
          if ($cmp38$i$i) {
           $fd$i$i = ((($add$ptr16$i$i)) + 8|0);
           $143 = HEAP32[$fd$i$i>>2]|0;
           $bk$i35$i = ((($add$ptr16$i$i)) + 12|0);
           $144 = HEAP32[$bk$i35$i>>2]|0;
           $shl$i36$i = $shr$i34$i << 1;
           $arrayidx$i37$i = (5440 + ($shl$i36$i<<2)|0);
           $cmp41$i$i = ($143|0)==($arrayidx$i37$i|0);
           do {
            if (!($cmp41$i$i)) {
             $cmp42$i$i = ($143>>>0)<($145>>>0);
             if ($cmp42$i$i) {
              _abort();
              // unreachable;
             }
             $bk43$i$i = ((($143)) + 12|0);
             $146 = HEAP32[$bk43$i$i>>2]|0;
             $cmp44$i$i = ($146|0)==($add$ptr16$i$i|0);
             if ($cmp44$i$i) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $cmp46$i38$i = ($144|0)==($143|0);
           if ($cmp46$i38$i) {
            $shl48$i$i = 1 << $shr$i34$i;
            $neg$i$i = $shl48$i$i ^ -1;
            $147 = HEAP32[1350]|0;
            $and49$i$i = $147 & $neg$i$i;
            HEAP32[1350] = $and49$i$i;
            break;
           }
           $cmp54$i$i = ($144|0)==($arrayidx$i37$i|0);
           do {
            if ($cmp54$i$i) {
             $$pre5$i$i = ((($144)) + 8|0);
             $fd68$pre$phi$i$iZ2D = $$pre5$i$i;
            } else {
             $cmp57$i$i = ($144>>>0)<($145>>>0);
             if ($cmp57$i$i) {
              _abort();
              // unreachable;
             }
             $fd59$i$i = ((($144)) + 8|0);
             $148 = HEAP32[$fd59$i$i>>2]|0;
             $cmp60$i$i = ($148|0)==($add$ptr16$i$i|0);
             if ($cmp60$i$i) {
              $fd68$pre$phi$i$iZ2D = $fd59$i$i;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $bk67$i$i = ((($143)) + 12|0);
           HEAP32[$bk67$i$i>>2] = $144;
           HEAP32[$fd68$pre$phi$i$iZ2D>>2] = $143;
          } else {
           $parent$i40$i = ((($add$ptr16$i$i)) + 24|0);
           $149 = HEAP32[$parent$i40$i>>2]|0;
           $bk74$i$i = ((($add$ptr16$i$i)) + 12|0);
           $150 = HEAP32[$bk74$i$i>>2]|0;
           $cmp75$i$i = ($150|0)==($add$ptr16$i$i|0);
           do {
            if ($cmp75$i$i) {
             $child$i$i = ((($add$ptr16$i$i)) + 16|0);
             $arrayidx96$i$i = ((($child$i$i)) + 4|0);
             $154 = HEAP32[$arrayidx96$i$i>>2]|0;
             $cmp97$i$i = ($154|0)==(0|0);
             if ($cmp97$i$i) {
              $155 = HEAP32[$child$i$i>>2]|0;
              $cmp100$i$i = ($155|0)==(0|0);
              if ($cmp100$i$i) {
               $R$3$i$i = 0;
               break;
              } else {
               $R$1$i$i = $155;$RP$1$i$i = $child$i$i;
              }
             } else {
              $R$1$i$i = $154;$RP$1$i$i = $arrayidx96$i$i;
             }
             while(1) {
              $arrayidx103$i$i = ((($R$1$i$i)) + 20|0);
              $156 = HEAP32[$arrayidx103$i$i>>2]|0;
              $cmp104$i$i = ($156|0)==(0|0);
              if (!($cmp104$i$i)) {
               $R$1$i$i = $156;$RP$1$i$i = $arrayidx103$i$i;
               continue;
              }
              $arrayidx107$i$i = ((($R$1$i$i)) + 16|0);
              $157 = HEAP32[$arrayidx107$i$i>>2]|0;
              $cmp108$i$i = ($157|0)==(0|0);
              if ($cmp108$i$i) {
               break;
              } else {
               $R$1$i$i = $157;$RP$1$i$i = $arrayidx107$i$i;
              }
             }
             $cmp112$i$i = ($RP$1$i$i>>>0)<($145>>>0);
             if ($cmp112$i$i) {
              _abort();
              // unreachable;
             } else {
              HEAP32[$RP$1$i$i>>2] = 0;
              $R$3$i$i = $R$1$i$i;
              break;
             }
            } else {
             $fd78$i$i = ((($add$ptr16$i$i)) + 8|0);
             $151 = HEAP32[$fd78$i$i>>2]|0;
             $cmp81$i$i = ($151>>>0)<($145>>>0);
             if ($cmp81$i$i) {
              _abort();
              // unreachable;
             }
             $bk82$i$i = ((($151)) + 12|0);
             $152 = HEAP32[$bk82$i$i>>2]|0;
             $cmp83$i$i = ($152|0)==($add$ptr16$i$i|0);
             if (!($cmp83$i$i)) {
              _abort();
              // unreachable;
             }
             $fd85$i$i = ((($150)) + 8|0);
             $153 = HEAP32[$fd85$i$i>>2]|0;
             $cmp86$i$i = ($153|0)==($add$ptr16$i$i|0);
             if ($cmp86$i$i) {
              HEAP32[$bk82$i$i>>2] = $150;
              HEAP32[$fd85$i$i>>2] = $151;
              $R$3$i$i = $150;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $cmp120$i42$i = ($149|0)==(0|0);
           if ($cmp120$i42$i) {
            break;
           }
           $index$i43$i = ((($add$ptr16$i$i)) + 28|0);
           $158 = HEAP32[$index$i43$i>>2]|0;
           $arrayidx123$i$i = (5704 + ($158<<2)|0);
           $159 = HEAP32[$arrayidx123$i$i>>2]|0;
           $cmp124$i$i = ($add$ptr16$i$i|0)==($159|0);
           do {
            if ($cmp124$i$i) {
             HEAP32[$arrayidx123$i$i>>2] = $R$3$i$i;
             $cond2$i$i = ($R$3$i$i|0)==(0|0);
             if (!($cond2$i$i)) {
              break;
             }
             $shl131$i$i = 1 << $158;
             $neg132$i$i = $shl131$i$i ^ -1;
             $160 = HEAP32[(5404)>>2]|0;
             $and133$i$i = $160 & $neg132$i$i;
             HEAP32[(5404)>>2] = $and133$i$i;
             break L326;
            } else {
             $161 = HEAP32[(5416)>>2]|0;
             $cmp137$i$i = ($149>>>0)<($161>>>0);
             if ($cmp137$i$i) {
              _abort();
              // unreachable;
             }
             $arrayidx143$i$i = ((($149)) + 16|0);
             $162 = HEAP32[$arrayidx143$i$i>>2]|0;
             $cmp144$i$i = ($162|0)==($add$ptr16$i$i|0);
             if ($cmp144$i$i) {
              HEAP32[$arrayidx143$i$i>>2] = $R$3$i$i;
             } else {
              $arrayidx151$i$i = ((($149)) + 20|0);
              HEAP32[$arrayidx151$i$i>>2] = $R$3$i$i;
             }
             $cmp156$i$i = ($R$3$i$i|0)==(0|0);
             if ($cmp156$i$i) {
              break L326;
             }
            }
           } while(0);
           $163 = HEAP32[(5416)>>2]|0;
           $cmp160$i$i = ($R$3$i$i>>>0)<($163>>>0);
           if ($cmp160$i$i) {
            _abort();
            // unreachable;
           }
           $parent165$i$i = ((($R$3$i$i)) + 24|0);
           HEAP32[$parent165$i$i>>2] = $149;
           $child166$i$i = ((($add$ptr16$i$i)) + 16|0);
           $164 = HEAP32[$child166$i$i>>2]|0;
           $cmp168$i$i = ($164|0)==(0|0);
           do {
            if (!($cmp168$i$i)) {
             $cmp172$i$i = ($164>>>0)<($163>>>0);
             if ($cmp172$i$i) {
              _abort();
              // unreachable;
             } else {
              $arrayidx178$i$i = ((($R$3$i$i)) + 16|0);
              HEAP32[$arrayidx178$i$i>>2] = $164;
              $parent179$i$i = ((($164)) + 24|0);
              HEAP32[$parent179$i$i>>2] = $R$3$i$i;
              break;
             }
            }
           } while(0);
           $arrayidx184$i$i = ((($child166$i$i)) + 4|0);
           $165 = HEAP32[$arrayidx184$i$i>>2]|0;
           $cmp185$i$i = ($165|0)==(0|0);
           if ($cmp185$i$i) {
            break;
           }
           $166 = HEAP32[(5416)>>2]|0;
           $cmp189$i$i = ($165>>>0)<($166>>>0);
           if ($cmp189$i$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx195$i$i = ((($R$3$i$i)) + 20|0);
            HEAP32[$arrayidx195$i$i>>2] = $165;
            $parent196$i$i = ((($165)) + 24|0);
            HEAP32[$parent196$i$i>>2] = $R$3$i$i;
            break;
           }
          }
         } while(0);
         $add$ptr205$i$i = (($add$ptr16$i$i) + ($and37$i$i)|0);
         $add206$i$i = (($and37$i$i) + ($sub18$i$i))|0;
         $oldfirst$0$i$i = $add$ptr205$i$i;$qsize$0$i$i = $add206$i$i;
        } else {
         $oldfirst$0$i$i = $add$ptr16$i$i;$qsize$0$i$i = $sub18$i$i;
        }
        $head208$i$i = ((($oldfirst$0$i$i)) + 4|0);
        $167 = HEAP32[$head208$i$i>>2]|0;
        $and209$i$i = $167 & -2;
        HEAP32[$head208$i$i>>2] = $and209$i$i;
        $or210$i$i = $qsize$0$i$i | 1;
        $head211$i$i = ((($add$ptr17$i$i)) + 4|0);
        HEAP32[$head211$i$i>>2] = $or210$i$i;
        $add$ptr212$i$i = (($add$ptr17$i$i) + ($qsize$0$i$i)|0);
        HEAP32[$add$ptr212$i$i>>2] = $qsize$0$i$i;
        $shr214$i$i = $qsize$0$i$i >>> 3;
        $cmp215$i$i = ($qsize$0$i$i>>>0)<(256);
        if ($cmp215$i$i) {
         $shl221$i$i = $shr214$i$i << 1;
         $arrayidx223$i$i = (5440 + ($shl221$i$i<<2)|0);
         $168 = HEAP32[1350]|0;
         $shl226$i$i = 1 << $shr214$i$i;
         $and227$i$i = $168 & $shl226$i$i;
         $tobool228$i$i = ($and227$i$i|0)==(0);
         do {
          if ($tobool228$i$i) {
           $or232$i$i = $168 | $shl226$i$i;
           HEAP32[1350] = $or232$i$i;
           $$pre$i45$i = ((($arrayidx223$i$i)) + 8|0);
           $$pre$phi$i46$iZ2D = $$pre$i45$i;$F224$0$i$i = $arrayidx223$i$i;
          } else {
           $169 = ((($arrayidx223$i$i)) + 8|0);
           $170 = HEAP32[$169>>2]|0;
           $171 = HEAP32[(5416)>>2]|0;
           $cmp236$i$i = ($170>>>0)<($171>>>0);
           if (!($cmp236$i$i)) {
            $$pre$phi$i46$iZ2D = $169;$F224$0$i$i = $170;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         HEAP32[$$pre$phi$i46$iZ2D>>2] = $add$ptr17$i$i;
         $bk246$i$i = ((($F224$0$i$i)) + 12|0);
         HEAP32[$bk246$i$i>>2] = $add$ptr17$i$i;
         $fd247$i$i = ((($add$ptr17$i$i)) + 8|0);
         HEAP32[$fd247$i$i>>2] = $F224$0$i$i;
         $bk248$i$i = ((($add$ptr17$i$i)) + 12|0);
         HEAP32[$bk248$i$i>>2] = $arrayidx223$i$i;
         break;
        }
        $shr253$i$i = $qsize$0$i$i >>> 8;
        $cmp254$i$i = ($shr253$i$i|0)==(0);
        do {
         if ($cmp254$i$i) {
          $I252$0$i$i = 0;
         } else {
          $cmp258$i$i = ($qsize$0$i$i>>>0)>(16777215);
          if ($cmp258$i$i) {
           $I252$0$i$i = 31;
           break;
          }
          $sub262$i$i = (($shr253$i$i) + 1048320)|0;
          $shr263$i$i = $sub262$i$i >>> 16;
          $and264$i$i = $shr263$i$i & 8;
          $shl265$i$i = $shr253$i$i << $and264$i$i;
          $sub266$i$i = (($shl265$i$i) + 520192)|0;
          $shr267$i$i = $sub266$i$i >>> 16;
          $and268$i$i = $shr267$i$i & 4;
          $add269$i$i = $and268$i$i | $and264$i$i;
          $shl270$i$i = $shl265$i$i << $and268$i$i;
          $sub271$i$i = (($shl270$i$i) + 245760)|0;
          $shr272$i$i = $sub271$i$i >>> 16;
          $and273$i$i = $shr272$i$i & 2;
          $add274$i$i = $add269$i$i | $and273$i$i;
          $sub275$i$i = (14 - ($add274$i$i))|0;
          $shl276$i$i = $shl270$i$i << $and273$i$i;
          $shr277$i$i = $shl276$i$i >>> 15;
          $add278$i$i = (($sub275$i$i) + ($shr277$i$i))|0;
          $shl279$i$i = $add278$i$i << 1;
          $add280$i$i = (($add278$i$i) + 7)|0;
          $shr281$i$i = $qsize$0$i$i >>> $add280$i$i;
          $and282$i$i = $shr281$i$i & 1;
          $add283$i$i = $and282$i$i | $shl279$i$i;
          $I252$0$i$i = $add283$i$i;
         }
        } while(0);
        $arrayidx287$i$i = (5704 + ($I252$0$i$i<<2)|0);
        $index288$i$i = ((($add$ptr17$i$i)) + 28|0);
        HEAP32[$index288$i$i>>2] = $I252$0$i$i;
        $child289$i$i = ((($add$ptr17$i$i)) + 16|0);
        $arrayidx290$i$i = ((($child289$i$i)) + 4|0);
        HEAP32[$arrayidx290$i$i>>2] = 0;
        HEAP32[$child289$i$i>>2] = 0;
        $172 = HEAP32[(5404)>>2]|0;
        $shl294$i$i = 1 << $I252$0$i$i;
        $and295$i$i = $172 & $shl294$i$i;
        $tobool296$i$i = ($and295$i$i|0)==(0);
        if ($tobool296$i$i) {
         $or300$i$i = $172 | $shl294$i$i;
         HEAP32[(5404)>>2] = $or300$i$i;
         HEAP32[$arrayidx287$i$i>>2] = $add$ptr17$i$i;
         $parent301$i$i = ((($add$ptr17$i$i)) + 24|0);
         HEAP32[$parent301$i$i>>2] = $arrayidx287$i$i;
         $bk302$i$i = ((($add$ptr17$i$i)) + 12|0);
         HEAP32[$bk302$i$i>>2] = $add$ptr17$i$i;
         $fd303$i$i = ((($add$ptr17$i$i)) + 8|0);
         HEAP32[$fd303$i$i>>2] = $add$ptr17$i$i;
         break;
        }
        $173 = HEAP32[$arrayidx287$i$i>>2]|0;
        $cmp306$i$i = ($I252$0$i$i|0)==(31);
        $shr310$i$i = $I252$0$i$i >>> 1;
        $sub313$i$i = (25 - ($shr310$i$i))|0;
        $cond315$i$i = $cmp306$i$i ? 0 : $sub313$i$i;
        $shl316$i$i = $qsize$0$i$i << $cond315$i$i;
        $K305$0$i$i = $shl316$i$i;$T$0$i47$i = $173;
        while(1) {
         $head317$i$i = ((($T$0$i47$i)) + 4|0);
         $174 = HEAP32[$head317$i$i>>2]|0;
         $and318$i$i = $174 & -8;
         $cmp319$i$i = ($and318$i$i|0)==($qsize$0$i$i|0);
         if ($cmp319$i$i) {
          label = 278;
          break;
         }
         $shr322$i$i = $K305$0$i$i >>> 31;
         $arrayidx325$i$i = (((($T$0$i47$i)) + 16|0) + ($shr322$i$i<<2)|0);
         $shl326$i$i = $K305$0$i$i << 1;
         $175 = HEAP32[$arrayidx325$i$i>>2]|0;
         $cmp327$i$i = ($175|0)==(0|0);
         if ($cmp327$i$i) {
          label = 275;
          break;
         } else {
          $K305$0$i$i = $shl326$i$i;$T$0$i47$i = $175;
         }
        }
        if ((label|0) == 275) {
         $176 = HEAP32[(5416)>>2]|0;
         $cmp332$i$i = ($arrayidx325$i$i>>>0)<($176>>>0);
         if ($cmp332$i$i) {
          _abort();
          // unreachable;
         } else {
          HEAP32[$arrayidx325$i$i>>2] = $add$ptr17$i$i;
          $parent337$i$i = ((($add$ptr17$i$i)) + 24|0);
          HEAP32[$parent337$i$i>>2] = $T$0$i47$i;
          $bk338$i$i = ((($add$ptr17$i$i)) + 12|0);
          HEAP32[$bk338$i$i>>2] = $add$ptr17$i$i;
          $fd339$i$i = ((($add$ptr17$i$i)) + 8|0);
          HEAP32[$fd339$i$i>>2] = $add$ptr17$i$i;
          break;
         }
        }
        else if ((label|0) == 278) {
         $fd344$i$i = ((($T$0$i47$i)) + 8|0);
         $177 = HEAP32[$fd344$i$i>>2]|0;
         $178 = HEAP32[(5416)>>2]|0;
         $cmp350$i$i = ($177>>>0)>=($178>>>0);
         $not$cmp346$i$i = ($T$0$i47$i>>>0)>=($178>>>0);
         $179 = $cmp350$i$i & $not$cmp346$i$i;
         if ($179) {
          $bk357$i$i = ((($177)) + 12|0);
          HEAP32[$bk357$i$i>>2] = $add$ptr17$i$i;
          HEAP32[$fd344$i$i>>2] = $add$ptr17$i$i;
          $fd359$i$i = ((($add$ptr17$i$i)) + 8|0);
          HEAP32[$fd359$i$i>>2] = $177;
          $bk360$i$i = ((($add$ptr17$i$i)) + 12|0);
          HEAP32[$bk360$i$i>>2] = $T$0$i47$i;
          $parent361$i$i = ((($add$ptr17$i$i)) + 24|0);
          HEAP32[$parent361$i$i>>2] = 0;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $add$ptr369$i$i = ((($add$ptr4$i26$i)) + 8|0);
      $retval$0 = $add$ptr369$i$i;
      STACKTOP = sp;return ($retval$0|0);
     } else {
      $sp$0$i$i$i = (5848);
     }
    }
    while(1) {
     $180 = HEAP32[$sp$0$i$i$i>>2]|0;
     $cmp$i$i$i = ($180>>>0)>($114>>>0);
     if (!($cmp$i$i$i)) {
      $size$i$i$i = ((($sp$0$i$i$i)) + 4|0);
      $181 = HEAP32[$size$i$i$i>>2]|0;
      $add$ptr$i$i$i = (($180) + ($181)|0);
      $cmp2$i$i$i = ($add$ptr$i$i$i>>>0)>($114>>>0);
      if ($cmp2$i$i$i) {
       break;
      }
     }
     $next$i$i$i = ((($sp$0$i$i$i)) + 8|0);
     $182 = HEAP32[$next$i$i$i>>2]|0;
     $sp$0$i$i$i = $182;
    }
    $add$ptr2$i$i = ((($add$ptr$i$i$i)) + -47|0);
    $add$ptr3$i$i = ((($add$ptr2$i$i)) + 8|0);
    $183 = $add$ptr3$i$i;
    $and$i$i = $183 & 7;
    $cmp$i9$i = ($and$i$i|0)==(0);
    $184 = (0 - ($183))|0;
    $and6$i10$i = $184 & 7;
    $cond$i$i = $cmp$i9$i ? 0 : $and6$i10$i;
    $add$ptr7$i$i = (($add$ptr2$i$i) + ($cond$i$i)|0);
    $add$ptr8$i118$i = ((($114)) + 16|0);
    $cmp9$i$i = ($add$ptr7$i$i>>>0)<($add$ptr8$i118$i>>>0);
    $cond13$i$i = $cmp9$i$i ? $114 : $add$ptr7$i$i;
    $add$ptr14$i$i = ((($cond13$i$i)) + 8|0);
    $add$ptr15$i$i = ((($cond13$i$i)) + 24|0);
    $sub16$i$i = (($tsize$792$i) + -40)|0;
    $add$ptr$i1$i$i = ((($tbase$793$i)) + 8|0);
    $185 = $add$ptr$i1$i$i;
    $and$i$i$i = $185 & 7;
    $cmp$i2$i$i = ($and$i$i$i|0)==(0);
    $186 = (0 - ($185))|0;
    $and3$i$i$i = $186 & 7;
    $cond$i$i$i = $cmp$i2$i$i ? 0 : $and3$i$i$i;
    $add$ptr4$i$i$i = (($tbase$793$i) + ($cond$i$i$i)|0);
    $sub5$i$i$i = (($sub16$i$i) - ($cond$i$i$i))|0;
    HEAP32[(5424)>>2] = $add$ptr4$i$i$i;
    HEAP32[(5412)>>2] = $sub5$i$i$i;
    $or$i$i$i = $sub5$i$i$i | 1;
    $head$i$i$i = ((($add$ptr4$i$i$i)) + 4|0);
    HEAP32[$head$i$i$i>>2] = $or$i$i$i;
    $add$ptr6$i$i$i = (($add$ptr4$i$i$i) + ($sub5$i$i$i)|0);
    $head7$i$i$i = ((($add$ptr6$i$i$i)) + 4|0);
    HEAP32[$head7$i$i$i>>2] = 40;
    $187 = HEAP32[(5888)>>2]|0;
    HEAP32[(5428)>>2] = $187;
    $head$i$i = ((($cond13$i$i)) + 4|0);
    HEAP32[$head$i$i>>2] = 27;
    ;HEAP32[$add$ptr14$i$i>>2]=HEAP32[(5848)>>2]|0;HEAP32[$add$ptr14$i$i+4>>2]=HEAP32[(5848)+4>>2]|0;HEAP32[$add$ptr14$i$i+8>>2]=HEAP32[(5848)+8>>2]|0;HEAP32[$add$ptr14$i$i+12>>2]=HEAP32[(5848)+12>>2]|0;
    HEAP32[(5848)>>2] = $tbase$793$i;
    HEAP32[(5852)>>2] = $tsize$792$i;
    HEAP32[(5860)>>2] = 0;
    HEAP32[(5856)>>2] = $add$ptr14$i$i;
    $p$0$i$i = $add$ptr15$i$i;
    while(1) {
     $add$ptr24$i$i = ((($p$0$i$i)) + 4|0);
     HEAP32[$add$ptr24$i$i>>2] = 7;
     $188 = ((($add$ptr24$i$i)) + 4|0);
     $cmp27$i$i = ($188>>>0)<($add$ptr$i$i$i>>>0);
     if ($cmp27$i$i) {
      $p$0$i$i = $add$ptr24$i$i;
     } else {
      break;
     }
    }
    $cmp28$i$i = ($cond13$i$i|0)==($114|0);
    if (!($cmp28$i$i)) {
     $sub$ptr$lhs$cast$i$i = $cond13$i$i;
     $sub$ptr$rhs$cast$i$i = $114;
     $sub$ptr$sub$i$i = (($sub$ptr$lhs$cast$i$i) - ($sub$ptr$rhs$cast$i$i))|0;
     $189 = HEAP32[$head$i$i>>2]|0;
     $and32$i$i = $189 & -2;
     HEAP32[$head$i$i>>2] = $and32$i$i;
     $or33$i$i = $sub$ptr$sub$i$i | 1;
     $head34$i$i = ((($114)) + 4|0);
     HEAP32[$head34$i$i>>2] = $or33$i$i;
     HEAP32[$cond13$i$i>>2] = $sub$ptr$sub$i$i;
     $shr$i$i = $sub$ptr$sub$i$i >>> 3;
     $cmp36$i$i = ($sub$ptr$sub$i$i>>>0)<(256);
     if ($cmp36$i$i) {
      $shl$i$i = $shr$i$i << 1;
      $arrayidx$i$i = (5440 + ($shl$i$i<<2)|0);
      $190 = HEAP32[1350]|0;
      $shl39$i$i = 1 << $shr$i$i;
      $and40$i$i = $190 & $shl39$i$i;
      $tobool$i$i = ($and40$i$i|0)==(0);
      if ($tobool$i$i) {
       $or44$i$i = $190 | $shl39$i$i;
       HEAP32[1350] = $or44$i$i;
       $$pre$i$i = ((($arrayidx$i$i)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $arrayidx$i$i;
      } else {
       $191 = ((($arrayidx$i$i)) + 8|0);
       $192 = HEAP32[$191>>2]|0;
       $193 = HEAP32[(5416)>>2]|0;
       $cmp46$i$i = ($192>>>0)<($193>>>0);
       if ($cmp46$i$i) {
        _abort();
        // unreachable;
       } else {
        $$pre$phi$i$iZ2D = $191;$F$0$i$i = $192;
       }
      }
      HEAP32[$$pre$phi$i$iZ2D>>2] = $114;
      $bk$i$i = ((($F$0$i$i)) + 12|0);
      HEAP32[$bk$i$i>>2] = $114;
      $fd54$i$i = ((($114)) + 8|0);
      HEAP32[$fd54$i$i>>2] = $F$0$i$i;
      $bk55$i$i = ((($114)) + 12|0);
      HEAP32[$bk55$i$i>>2] = $arrayidx$i$i;
      break;
     }
     $shr58$i$i = $sub$ptr$sub$i$i >>> 8;
     $cmp59$i$i = ($shr58$i$i|0)==(0);
     if ($cmp59$i$i) {
      $I57$0$i$i = 0;
     } else {
      $cmp63$i$i = ($sub$ptr$sub$i$i>>>0)>(16777215);
      if ($cmp63$i$i) {
       $I57$0$i$i = 31;
      } else {
       $sub67$i$i = (($shr58$i$i) + 1048320)|0;
       $shr68$i$i = $sub67$i$i >>> 16;
       $and69$i$i = $shr68$i$i & 8;
       $shl70$i$i = $shr58$i$i << $and69$i$i;
       $sub71$i$i = (($shl70$i$i) + 520192)|0;
       $shr72$i$i = $sub71$i$i >>> 16;
       $and73$i$i = $shr72$i$i & 4;
       $add74$i$i = $and73$i$i | $and69$i$i;
       $shl75$i$i = $shl70$i$i << $and73$i$i;
       $sub76$i$i = (($shl75$i$i) + 245760)|0;
       $shr77$i$i = $sub76$i$i >>> 16;
       $and78$i$i = $shr77$i$i & 2;
       $add79$i$i = $add74$i$i | $and78$i$i;
       $sub80$i$i = (14 - ($add79$i$i))|0;
       $shl81$i$i = $shl75$i$i << $and78$i$i;
       $shr82$i$i = $shl81$i$i >>> 15;
       $add83$i$i = (($sub80$i$i) + ($shr82$i$i))|0;
       $shl84$i$i = $add83$i$i << 1;
       $add85$i$i = (($add83$i$i) + 7)|0;
       $shr86$i$i = $sub$ptr$sub$i$i >>> $add85$i$i;
       $and87$i$i = $shr86$i$i & 1;
       $add88$i$i = $and87$i$i | $shl84$i$i;
       $I57$0$i$i = $add88$i$i;
      }
     }
     $arrayidx91$i$i = (5704 + ($I57$0$i$i<<2)|0);
     $index$i$i = ((($114)) + 28|0);
     HEAP32[$index$i$i>>2] = $I57$0$i$i;
     $arrayidx92$i$i = ((($114)) + 20|0);
     HEAP32[$arrayidx92$i$i>>2] = 0;
     HEAP32[$add$ptr8$i118$i>>2] = 0;
     $194 = HEAP32[(5404)>>2]|0;
     $shl95$i$i = 1 << $I57$0$i$i;
     $and96$i$i = $194 & $shl95$i$i;
     $tobool97$i$i = ($and96$i$i|0)==(0);
     if ($tobool97$i$i) {
      $or101$i$i = $194 | $shl95$i$i;
      HEAP32[(5404)>>2] = $or101$i$i;
      HEAP32[$arrayidx91$i$i>>2] = $114;
      $parent$i$i = ((($114)) + 24|0);
      HEAP32[$parent$i$i>>2] = $arrayidx91$i$i;
      $bk102$i$i = ((($114)) + 12|0);
      HEAP32[$bk102$i$i>>2] = $114;
      $fd103$i$i = ((($114)) + 8|0);
      HEAP32[$fd103$i$i>>2] = $114;
      break;
     }
     $195 = HEAP32[$arrayidx91$i$i>>2]|0;
     $cmp106$i$i = ($I57$0$i$i|0)==(31);
     $shr110$i$i = $I57$0$i$i >>> 1;
     $sub113$i$i = (25 - ($shr110$i$i))|0;
     $cond115$i$i = $cmp106$i$i ? 0 : $sub113$i$i;
     $shl116$i$i = $sub$ptr$sub$i$i << $cond115$i$i;
     $K105$0$i$i = $shl116$i$i;$T$0$i$i = $195;
     while(1) {
      $head118$i$i = ((($T$0$i$i)) + 4|0);
      $196 = HEAP32[$head118$i$i>>2]|0;
      $and119$i$i = $196 & -8;
      $cmp120$i$i = ($and119$i$i|0)==($sub$ptr$sub$i$i|0);
      if ($cmp120$i$i) {
       label = 304;
       break;
      }
      $shr123$i$i = $K105$0$i$i >>> 31;
      $arrayidx126$i$i = (((($T$0$i$i)) + 16|0) + ($shr123$i$i<<2)|0);
      $shl127$i$i = $K105$0$i$i << 1;
      $197 = HEAP32[$arrayidx126$i$i>>2]|0;
      $cmp128$i$i = ($197|0)==(0|0);
      if ($cmp128$i$i) {
       label = 301;
       break;
      } else {
       $K105$0$i$i = $shl127$i$i;$T$0$i$i = $197;
      }
     }
     if ((label|0) == 301) {
      $198 = HEAP32[(5416)>>2]|0;
      $cmp133$i$i = ($arrayidx126$i$i>>>0)<($198>>>0);
      if ($cmp133$i$i) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$arrayidx126$i$i>>2] = $114;
       $parent138$i$i = ((($114)) + 24|0);
       HEAP32[$parent138$i$i>>2] = $T$0$i$i;
       $bk139$i$i = ((($114)) + 12|0);
       HEAP32[$bk139$i$i>>2] = $114;
       $fd140$i$i = ((($114)) + 8|0);
       HEAP32[$fd140$i$i>>2] = $114;
       break;
      }
     }
     else if ((label|0) == 304) {
      $fd148$i$i = ((($T$0$i$i)) + 8|0);
      $199 = HEAP32[$fd148$i$i>>2]|0;
      $200 = HEAP32[(5416)>>2]|0;
      $cmp153$i$i = ($199>>>0)>=($200>>>0);
      $not$cmp150$i$i = ($T$0$i$i>>>0)>=($200>>>0);
      $201 = $cmp153$i$i & $not$cmp150$i$i;
      if ($201) {
       $bk158$i$i = ((($199)) + 12|0);
       HEAP32[$bk158$i$i>>2] = $114;
       HEAP32[$fd148$i$i>>2] = $114;
       $fd160$i$i = ((($114)) + 8|0);
       HEAP32[$fd160$i$i>>2] = $199;
       $bk161$i$i = ((($114)) + 12|0);
       HEAP32[$bk161$i$i>>2] = $T$0$i$i;
       $parent162$i$i = ((($114)) + 24|0);
       HEAP32[$parent162$i$i>>2] = 0;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $202 = HEAP32[(5412)>>2]|0;
  $cmp257$i = ($202>>>0)>($nb$0>>>0);
  if ($cmp257$i) {
   $sub260$i = (($202) - ($nb$0))|0;
   HEAP32[(5412)>>2] = $sub260$i;
   $203 = HEAP32[(5424)>>2]|0;
   $add$ptr262$i = (($203) + ($nb$0)|0);
   HEAP32[(5424)>>2] = $add$ptr262$i;
   $or264$i = $sub260$i | 1;
   $head265$i = ((($add$ptr262$i)) + 4|0);
   HEAP32[$head265$i>>2] = $or264$i;
   $or267$i = $nb$0 | 3;
   $head268$i = ((($203)) + 4|0);
   HEAP32[$head268$i>>2] = $or267$i;
   $add$ptr269$i = ((($203)) + 8|0);
   $retval$0 = $add$ptr269$i;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $call275$i = (___errno_location()|0);
 HEAP32[$call275$i>>2] = 12;
 $retval$0 = 0;
 STACKTOP = sp;return ($retval$0|0);
}
function _free($mem) {
 $mem = $mem|0;
 var $$pre = 0, $$pre$phiZ2D = 0, $$pre307 = 0, $$pre308 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $8 = 0, $9 = 0, $F510$0 = 0;
 var $I534$0 = 0, $K583$0 = 0, $R$1 = 0, $R$3 = 0, $R332$1 = 0, $R332$3 = 0, $RP$1 = 0, $RP360$1 = 0, $T$0 = 0, $add$ptr = 0, $add$ptr16 = 0, $add$ptr217 = 0, $add$ptr261 = 0, $add$ptr482 = 0, $add$ptr498 = 0, $add$ptr6 = 0, $add17 = 0, $add246 = 0, $add258 = 0, $add267 = 0;
 var $add550 = 0, $add555 = 0, $add559 = 0, $add561 = 0, $add564 = 0, $and = 0, $and140 = 0, $and210 = 0, $and215 = 0, $and232 = 0, $and240 = 0, $and266 = 0, $and301 = 0, $and410 = 0, $and46 = 0, $and495 = 0, $and5 = 0, $and512 = 0, $and545 = 0, $and549 = 0;
 var $and554 = 0, $and563 = 0, $and574 = 0, $and592 = 0, $and8 = 0, $arrayidx = 0, $arrayidx108 = 0, $arrayidx113 = 0, $arrayidx130 = 0, $arrayidx149 = 0, $arrayidx157 = 0, $arrayidx182 = 0, $arrayidx188 = 0, $arrayidx198 = 0, $arrayidx279 = 0, $arrayidx362 = 0, $arrayidx374 = 0, $arrayidx379 = 0, $arrayidx400 = 0, $arrayidx419 = 0;
 var $arrayidx427 = 0, $arrayidx454 = 0, $arrayidx460 = 0, $arrayidx470 = 0, $arrayidx509 = 0, $arrayidx567 = 0, $arrayidx570 = 0, $arrayidx599 = 0, $arrayidx99 = 0, $bk = 0, $bk275 = 0, $bk286 = 0, $bk321 = 0, $bk333 = 0, $bk34 = 0, $bk343 = 0, $bk529 = 0, $bk531 = 0, $bk580 = 0, $bk611 = 0;
 var $bk631 = 0, $bk634 = 0, $bk66 = 0, $bk73 = 0, $bk82 = 0, $child = 0, $child171 = 0, $child361 = 0, $child443 = 0, $child569 = 0, $cmp = 0, $cmp$i = 0, $cmp1 = 0, $cmp100 = 0, $cmp104 = 0, $cmp109 = 0, $cmp114 = 0, $cmp118 = 0, $cmp127 = 0, $cmp13 = 0;
 var $cmp131 = 0, $cmp143 = 0, $cmp150 = 0, $cmp162 = 0, $cmp165 = 0, $cmp173 = 0, $cmp176 = 0, $cmp18 = 0, $cmp189 = 0, $cmp192 = 0, $cmp2 = 0, $cmp211 = 0, $cmp22 = 0, $cmp228 = 0, $cmp243 = 0, $cmp249 = 0, $cmp25 = 0, $cmp255 = 0, $cmp269 = 0, $cmp280 = 0;
 var $cmp283 = 0, $cmp287 = 0, $cmp29 = 0, $cmp296 = 0, $cmp305 = 0, $cmp308 = 0, $cmp31 = 0, $cmp312 = 0, $cmp334 = 0, $cmp340 = 0, $cmp344 = 0, $cmp348 = 0, $cmp35 = 0, $cmp363 = 0, $cmp368 = 0, $cmp375 = 0, $cmp380 = 0, $cmp386 = 0, $cmp395 = 0, $cmp401 = 0;
 var $cmp413 = 0, $cmp42 = 0, $cmp420 = 0, $cmp432 = 0, $cmp435 = 0, $cmp445 = 0, $cmp448 = 0, $cmp461 = 0, $cmp464 = 0, $cmp484 = 0, $cmp50 = 0, $cmp502 = 0, $cmp519 = 0, $cmp53 = 0, $cmp536 = 0, $cmp540 = 0, $cmp57 = 0, $cmp584 = 0, $cmp593 = 0, $cmp601 = 0;
 var $cmp605 = 0, $cmp624 = 0, $cmp640 = 0, $cmp74 = 0, $cmp80 = 0, $cmp83 = 0, $cmp87 = 0, $cond = 0, $cond291 = 0, $cond292 = 0, $dec = 0, $fd = 0, $fd273 = 0, $fd311 = 0, $fd322$pre$phiZ2D = 0, $fd338 = 0, $fd347 = 0, $fd530 = 0, $fd56 = 0, $fd581 = 0;
 var $fd612 = 0, $fd620 = 0, $fd633 = 0, $fd67$pre$phiZ2D = 0, $fd78 = 0, $fd86 = 0, $head = 0, $head209 = 0, $head216 = 0, $head231 = 0, $head248 = 0, $head260 = 0, $head481 = 0, $head497 = 0, $head591 = 0, $idx$neg = 0, $index = 0, $index399 = 0, $index568 = 0, $neg = 0;
 var $neg139 = 0, $neg300 = 0, $neg409 = 0, $next4$i = 0, $not$cmp621 = 0, $or = 0, $or247 = 0, $or259 = 0, $or480 = 0, $or496 = 0, $or516 = 0, $or578 = 0, $p$1 = 0, $parent = 0, $parent170 = 0, $parent183 = 0, $parent199 = 0, $parent331 = 0, $parent442 = 0, $parent455 = 0;
 var $parent471 = 0, $parent579 = 0, $parent610 = 0, $parent635 = 0, $psize$1 = 0, $psize$2 = 0, $shl = 0, $shl138 = 0, $shl278 = 0, $shl299 = 0, $shl408 = 0, $shl45 = 0, $shl508 = 0, $shl511 = 0, $shl546 = 0, $shl551 = 0, $shl557 = 0, $shl560 = 0, $shl573 = 0, $shl590 = 0;
 var $shl600 = 0, $shr = 0, $shr268 = 0, $shr501 = 0, $shr535 = 0, $shr544 = 0, $shr548 = 0, $shr553 = 0, $shr558 = 0, $shr562 = 0, $shr586 = 0, $shr596 = 0, $sp$0$i = 0, $sp$0$in$i = 0, $sub = 0, $sub547 = 0, $sub552 = 0, $sub556 = 0, $sub589 = 0, $tobool233 = 0;
 var $tobool241 = 0, $tobool513 = 0, $tobool575 = 0, $tobool9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($mem|0)==(0|0);
 if ($cmp) {
  return;
 }
 $add$ptr = ((($mem)) + -8|0);
 $0 = HEAP32[(5416)>>2]|0;
 $cmp1 = ($add$ptr>>>0)<($0>>>0);
 if ($cmp1) {
  _abort();
  // unreachable;
 }
 $head = ((($mem)) + -4|0);
 $1 = HEAP32[$head>>2]|0;
 $and = $1 & 3;
 $cmp2 = ($and|0)==(1);
 if ($cmp2) {
  _abort();
  // unreachable;
 }
 $and5 = $1 & -8;
 $add$ptr6 = (($add$ptr) + ($and5)|0);
 $and8 = $1 & 1;
 $tobool9 = ($and8|0)==(0);
 do {
  if ($tobool9) {
   $2 = HEAP32[$add$ptr>>2]|0;
   $cmp13 = ($and|0)==(0);
   if ($cmp13) {
    return;
   }
   $idx$neg = (0 - ($2))|0;
   $add$ptr16 = (($add$ptr) + ($idx$neg)|0);
   $add17 = (($2) + ($and5))|0;
   $cmp18 = ($add$ptr16>>>0)<($0>>>0);
   if ($cmp18) {
    _abort();
    // unreachable;
   }
   $3 = HEAP32[(5420)>>2]|0;
   $cmp22 = ($add$ptr16|0)==($3|0);
   if ($cmp22) {
    $head209 = ((($add$ptr6)) + 4|0);
    $27 = HEAP32[$head209>>2]|0;
    $and210 = $27 & 3;
    $cmp211 = ($and210|0)==(3);
    if (!($cmp211)) {
     $p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    HEAP32[(5408)>>2] = $add17;
    $and215 = $27 & -2;
    HEAP32[$head209>>2] = $and215;
    $or = $add17 | 1;
    $head216 = ((($add$ptr16)) + 4|0);
    HEAP32[$head216>>2] = $or;
    $add$ptr217 = (($add$ptr16) + ($add17)|0);
    HEAP32[$add$ptr217>>2] = $add17;
    return;
   }
   $shr = $2 >>> 3;
   $cmp25 = ($2>>>0)<(256);
   if ($cmp25) {
    $fd = ((($add$ptr16)) + 8|0);
    $4 = HEAP32[$fd>>2]|0;
    $bk = ((($add$ptr16)) + 12|0);
    $5 = HEAP32[$bk>>2]|0;
    $shl = $shr << 1;
    $arrayidx = (5440 + ($shl<<2)|0);
    $cmp29 = ($4|0)==($arrayidx|0);
    if (!($cmp29)) {
     $cmp31 = ($4>>>0)<($0>>>0);
     if ($cmp31) {
      _abort();
      // unreachable;
     }
     $bk34 = ((($4)) + 12|0);
     $6 = HEAP32[$bk34>>2]|0;
     $cmp35 = ($6|0)==($add$ptr16|0);
     if (!($cmp35)) {
      _abort();
      // unreachable;
     }
    }
    $cmp42 = ($5|0)==($4|0);
    if ($cmp42) {
     $shl45 = 1 << $shr;
     $neg = $shl45 ^ -1;
     $7 = HEAP32[1350]|0;
     $and46 = $7 & $neg;
     HEAP32[1350] = $and46;
     $p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    $cmp50 = ($5|0)==($arrayidx|0);
    if ($cmp50) {
     $$pre308 = ((($5)) + 8|0);
     $fd67$pre$phiZ2D = $$pre308;
    } else {
     $cmp53 = ($5>>>0)<($0>>>0);
     if ($cmp53) {
      _abort();
      // unreachable;
     }
     $fd56 = ((($5)) + 8|0);
     $8 = HEAP32[$fd56>>2]|0;
     $cmp57 = ($8|0)==($add$ptr16|0);
     if ($cmp57) {
      $fd67$pre$phiZ2D = $fd56;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk66 = ((($4)) + 12|0);
    HEAP32[$bk66>>2] = $5;
    HEAP32[$fd67$pre$phiZ2D>>2] = $4;
    $p$1 = $add$ptr16;$psize$1 = $add17;
    break;
   }
   $parent = ((($add$ptr16)) + 24|0);
   $9 = HEAP32[$parent>>2]|0;
   $bk73 = ((($add$ptr16)) + 12|0);
   $10 = HEAP32[$bk73>>2]|0;
   $cmp74 = ($10|0)==($add$ptr16|0);
   do {
    if ($cmp74) {
     $child = ((($add$ptr16)) + 16|0);
     $arrayidx99 = ((($child)) + 4|0);
     $14 = HEAP32[$arrayidx99>>2]|0;
     $cmp100 = ($14|0)==(0|0);
     if ($cmp100) {
      $15 = HEAP32[$child>>2]|0;
      $cmp104 = ($15|0)==(0|0);
      if ($cmp104) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $15;$RP$1 = $child;
      }
     } else {
      $R$1 = $14;$RP$1 = $arrayidx99;
     }
     while(1) {
      $arrayidx108 = ((($R$1)) + 20|0);
      $16 = HEAP32[$arrayidx108>>2]|0;
      $cmp109 = ($16|0)==(0|0);
      if (!($cmp109)) {
       $R$1 = $16;$RP$1 = $arrayidx108;
       continue;
      }
      $arrayidx113 = ((($R$1)) + 16|0);
      $17 = HEAP32[$arrayidx113>>2]|0;
      $cmp114 = ($17|0)==(0|0);
      if ($cmp114) {
       break;
      } else {
       $R$1 = $17;$RP$1 = $arrayidx113;
      }
     }
     $cmp118 = ($RP$1>>>0)<($0>>>0);
     if ($cmp118) {
      _abort();
      // unreachable;
     } else {
      HEAP32[$RP$1>>2] = 0;
      $R$3 = $R$1;
      break;
     }
    } else {
     $fd78 = ((($add$ptr16)) + 8|0);
     $11 = HEAP32[$fd78>>2]|0;
     $cmp80 = ($11>>>0)<($0>>>0);
     if ($cmp80) {
      _abort();
      // unreachable;
     }
     $bk82 = ((($11)) + 12|0);
     $12 = HEAP32[$bk82>>2]|0;
     $cmp83 = ($12|0)==($add$ptr16|0);
     if (!($cmp83)) {
      _abort();
      // unreachable;
     }
     $fd86 = ((($10)) + 8|0);
     $13 = HEAP32[$fd86>>2]|0;
     $cmp87 = ($13|0)==($add$ptr16|0);
     if ($cmp87) {
      HEAP32[$bk82>>2] = $10;
      HEAP32[$fd86>>2] = $11;
      $R$3 = $10;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $cmp127 = ($9|0)==(0|0);
   if ($cmp127) {
    $p$1 = $add$ptr16;$psize$1 = $add17;
   } else {
    $index = ((($add$ptr16)) + 28|0);
    $18 = HEAP32[$index>>2]|0;
    $arrayidx130 = (5704 + ($18<<2)|0);
    $19 = HEAP32[$arrayidx130>>2]|0;
    $cmp131 = ($add$ptr16|0)==($19|0);
    if ($cmp131) {
     HEAP32[$arrayidx130>>2] = $R$3;
     $cond291 = ($R$3|0)==(0|0);
     if ($cond291) {
      $shl138 = 1 << $18;
      $neg139 = $shl138 ^ -1;
      $20 = HEAP32[(5404)>>2]|0;
      $and140 = $20 & $neg139;
      HEAP32[(5404)>>2] = $and140;
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    } else {
     $21 = HEAP32[(5416)>>2]|0;
     $cmp143 = ($9>>>0)<($21>>>0);
     if ($cmp143) {
      _abort();
      // unreachable;
     }
     $arrayidx149 = ((($9)) + 16|0);
     $22 = HEAP32[$arrayidx149>>2]|0;
     $cmp150 = ($22|0)==($add$ptr16|0);
     if ($cmp150) {
      HEAP32[$arrayidx149>>2] = $R$3;
     } else {
      $arrayidx157 = ((($9)) + 20|0);
      HEAP32[$arrayidx157>>2] = $R$3;
     }
     $cmp162 = ($R$3|0)==(0|0);
     if ($cmp162) {
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
    $23 = HEAP32[(5416)>>2]|0;
    $cmp165 = ($R$3>>>0)<($23>>>0);
    if ($cmp165) {
     _abort();
     // unreachable;
    }
    $parent170 = ((($R$3)) + 24|0);
    HEAP32[$parent170>>2] = $9;
    $child171 = ((($add$ptr16)) + 16|0);
    $24 = HEAP32[$child171>>2]|0;
    $cmp173 = ($24|0)==(0|0);
    do {
     if (!($cmp173)) {
      $cmp176 = ($24>>>0)<($23>>>0);
      if ($cmp176) {
       _abort();
       // unreachable;
      } else {
       $arrayidx182 = ((($R$3)) + 16|0);
       HEAP32[$arrayidx182>>2] = $24;
       $parent183 = ((($24)) + 24|0);
       HEAP32[$parent183>>2] = $R$3;
       break;
      }
     }
    } while(0);
    $arrayidx188 = ((($child171)) + 4|0);
    $25 = HEAP32[$arrayidx188>>2]|0;
    $cmp189 = ($25|0)==(0|0);
    if ($cmp189) {
     $p$1 = $add$ptr16;$psize$1 = $add17;
    } else {
     $26 = HEAP32[(5416)>>2]|0;
     $cmp192 = ($25>>>0)<($26>>>0);
     if ($cmp192) {
      _abort();
      // unreachable;
     } else {
      $arrayidx198 = ((($R$3)) + 20|0);
      HEAP32[$arrayidx198>>2] = $25;
      $parent199 = ((($25)) + 24|0);
      HEAP32[$parent199>>2] = $R$3;
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
   }
  } else {
   $p$1 = $add$ptr;$psize$1 = $and5;
  }
 } while(0);
 $cmp228 = ($p$1>>>0)<($add$ptr6>>>0);
 if (!($cmp228)) {
  _abort();
  // unreachable;
 }
 $head231 = ((($add$ptr6)) + 4|0);
 $28 = HEAP32[$head231>>2]|0;
 $and232 = $28 & 1;
 $tobool233 = ($and232|0)==(0);
 if ($tobool233) {
  _abort();
  // unreachable;
 }
 $and240 = $28 & 2;
 $tobool241 = ($and240|0)==(0);
 if ($tobool241) {
  $29 = HEAP32[(5424)>>2]|0;
  $cmp243 = ($add$ptr6|0)==($29|0);
  if ($cmp243) {
   $30 = HEAP32[(5412)>>2]|0;
   $add246 = (($30) + ($psize$1))|0;
   HEAP32[(5412)>>2] = $add246;
   HEAP32[(5424)>>2] = $p$1;
   $or247 = $add246 | 1;
   $head248 = ((($p$1)) + 4|0);
   HEAP32[$head248>>2] = $or247;
   $31 = HEAP32[(5420)>>2]|0;
   $cmp249 = ($p$1|0)==($31|0);
   if (!($cmp249)) {
    return;
   }
   HEAP32[(5420)>>2] = 0;
   HEAP32[(5408)>>2] = 0;
   return;
  }
  $32 = HEAP32[(5420)>>2]|0;
  $cmp255 = ($add$ptr6|0)==($32|0);
  if ($cmp255) {
   $33 = HEAP32[(5408)>>2]|0;
   $add258 = (($33) + ($psize$1))|0;
   HEAP32[(5408)>>2] = $add258;
   HEAP32[(5420)>>2] = $p$1;
   $or259 = $add258 | 1;
   $head260 = ((($p$1)) + 4|0);
   HEAP32[$head260>>2] = $or259;
   $add$ptr261 = (($p$1) + ($add258)|0);
   HEAP32[$add$ptr261>>2] = $add258;
   return;
  }
  $and266 = $28 & -8;
  $add267 = (($and266) + ($psize$1))|0;
  $shr268 = $28 >>> 3;
  $cmp269 = ($28>>>0)<(256);
  do {
   if ($cmp269) {
    $fd273 = ((($add$ptr6)) + 8|0);
    $34 = HEAP32[$fd273>>2]|0;
    $bk275 = ((($add$ptr6)) + 12|0);
    $35 = HEAP32[$bk275>>2]|0;
    $shl278 = $shr268 << 1;
    $arrayidx279 = (5440 + ($shl278<<2)|0);
    $cmp280 = ($34|0)==($arrayidx279|0);
    if (!($cmp280)) {
     $36 = HEAP32[(5416)>>2]|0;
     $cmp283 = ($34>>>0)<($36>>>0);
     if ($cmp283) {
      _abort();
      // unreachable;
     }
     $bk286 = ((($34)) + 12|0);
     $37 = HEAP32[$bk286>>2]|0;
     $cmp287 = ($37|0)==($add$ptr6|0);
     if (!($cmp287)) {
      _abort();
      // unreachable;
     }
    }
    $cmp296 = ($35|0)==($34|0);
    if ($cmp296) {
     $shl299 = 1 << $shr268;
     $neg300 = $shl299 ^ -1;
     $38 = HEAP32[1350]|0;
     $and301 = $38 & $neg300;
     HEAP32[1350] = $and301;
     break;
    }
    $cmp305 = ($35|0)==($arrayidx279|0);
    if ($cmp305) {
     $$pre307 = ((($35)) + 8|0);
     $fd322$pre$phiZ2D = $$pre307;
    } else {
     $39 = HEAP32[(5416)>>2]|0;
     $cmp308 = ($35>>>0)<($39>>>0);
     if ($cmp308) {
      _abort();
      // unreachable;
     }
     $fd311 = ((($35)) + 8|0);
     $40 = HEAP32[$fd311>>2]|0;
     $cmp312 = ($40|0)==($add$ptr6|0);
     if ($cmp312) {
      $fd322$pre$phiZ2D = $fd311;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk321 = ((($34)) + 12|0);
    HEAP32[$bk321>>2] = $35;
    HEAP32[$fd322$pre$phiZ2D>>2] = $34;
   } else {
    $parent331 = ((($add$ptr6)) + 24|0);
    $41 = HEAP32[$parent331>>2]|0;
    $bk333 = ((($add$ptr6)) + 12|0);
    $42 = HEAP32[$bk333>>2]|0;
    $cmp334 = ($42|0)==($add$ptr6|0);
    do {
     if ($cmp334) {
      $child361 = ((($add$ptr6)) + 16|0);
      $arrayidx362 = ((($child361)) + 4|0);
      $47 = HEAP32[$arrayidx362>>2]|0;
      $cmp363 = ($47|0)==(0|0);
      if ($cmp363) {
       $48 = HEAP32[$child361>>2]|0;
       $cmp368 = ($48|0)==(0|0);
       if ($cmp368) {
        $R332$3 = 0;
        break;
       } else {
        $R332$1 = $48;$RP360$1 = $child361;
       }
      } else {
       $R332$1 = $47;$RP360$1 = $arrayidx362;
      }
      while(1) {
       $arrayidx374 = ((($R332$1)) + 20|0);
       $49 = HEAP32[$arrayidx374>>2]|0;
       $cmp375 = ($49|0)==(0|0);
       if (!($cmp375)) {
        $R332$1 = $49;$RP360$1 = $arrayidx374;
        continue;
       }
       $arrayidx379 = ((($R332$1)) + 16|0);
       $50 = HEAP32[$arrayidx379>>2]|0;
       $cmp380 = ($50|0)==(0|0);
       if ($cmp380) {
        break;
       } else {
        $R332$1 = $50;$RP360$1 = $arrayidx379;
       }
      }
      $51 = HEAP32[(5416)>>2]|0;
      $cmp386 = ($RP360$1>>>0)<($51>>>0);
      if ($cmp386) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$RP360$1>>2] = 0;
       $R332$3 = $R332$1;
       break;
      }
     } else {
      $fd338 = ((($add$ptr6)) + 8|0);
      $43 = HEAP32[$fd338>>2]|0;
      $44 = HEAP32[(5416)>>2]|0;
      $cmp340 = ($43>>>0)<($44>>>0);
      if ($cmp340) {
       _abort();
       // unreachable;
      }
      $bk343 = ((($43)) + 12|0);
      $45 = HEAP32[$bk343>>2]|0;
      $cmp344 = ($45|0)==($add$ptr6|0);
      if (!($cmp344)) {
       _abort();
       // unreachable;
      }
      $fd347 = ((($42)) + 8|0);
      $46 = HEAP32[$fd347>>2]|0;
      $cmp348 = ($46|0)==($add$ptr6|0);
      if ($cmp348) {
       HEAP32[$bk343>>2] = $42;
       HEAP32[$fd347>>2] = $43;
       $R332$3 = $42;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $cmp395 = ($41|0)==(0|0);
    if (!($cmp395)) {
     $index399 = ((($add$ptr6)) + 28|0);
     $52 = HEAP32[$index399>>2]|0;
     $arrayidx400 = (5704 + ($52<<2)|0);
     $53 = HEAP32[$arrayidx400>>2]|0;
     $cmp401 = ($add$ptr6|0)==($53|0);
     if ($cmp401) {
      HEAP32[$arrayidx400>>2] = $R332$3;
      $cond292 = ($R332$3|0)==(0|0);
      if ($cond292) {
       $shl408 = 1 << $52;
       $neg409 = $shl408 ^ -1;
       $54 = HEAP32[(5404)>>2]|0;
       $and410 = $54 & $neg409;
       HEAP32[(5404)>>2] = $and410;
       break;
      }
     } else {
      $55 = HEAP32[(5416)>>2]|0;
      $cmp413 = ($41>>>0)<($55>>>0);
      if ($cmp413) {
       _abort();
       // unreachable;
      }
      $arrayidx419 = ((($41)) + 16|0);
      $56 = HEAP32[$arrayidx419>>2]|0;
      $cmp420 = ($56|0)==($add$ptr6|0);
      if ($cmp420) {
       HEAP32[$arrayidx419>>2] = $R332$3;
      } else {
       $arrayidx427 = ((($41)) + 20|0);
       HEAP32[$arrayidx427>>2] = $R332$3;
      }
      $cmp432 = ($R332$3|0)==(0|0);
      if ($cmp432) {
       break;
      }
     }
     $57 = HEAP32[(5416)>>2]|0;
     $cmp435 = ($R332$3>>>0)<($57>>>0);
     if ($cmp435) {
      _abort();
      // unreachable;
     }
     $parent442 = ((($R332$3)) + 24|0);
     HEAP32[$parent442>>2] = $41;
     $child443 = ((($add$ptr6)) + 16|0);
     $58 = HEAP32[$child443>>2]|0;
     $cmp445 = ($58|0)==(0|0);
     do {
      if (!($cmp445)) {
       $cmp448 = ($58>>>0)<($57>>>0);
       if ($cmp448) {
        _abort();
        // unreachable;
       } else {
        $arrayidx454 = ((($R332$3)) + 16|0);
        HEAP32[$arrayidx454>>2] = $58;
        $parent455 = ((($58)) + 24|0);
        HEAP32[$parent455>>2] = $R332$3;
        break;
       }
      }
     } while(0);
     $arrayidx460 = ((($child443)) + 4|0);
     $59 = HEAP32[$arrayidx460>>2]|0;
     $cmp461 = ($59|0)==(0|0);
     if (!($cmp461)) {
      $60 = HEAP32[(5416)>>2]|0;
      $cmp464 = ($59>>>0)<($60>>>0);
      if ($cmp464) {
       _abort();
       // unreachable;
      } else {
       $arrayidx470 = ((($R332$3)) + 20|0);
       HEAP32[$arrayidx470>>2] = $59;
       $parent471 = ((($59)) + 24|0);
       HEAP32[$parent471>>2] = $R332$3;
       break;
      }
     }
    }
   }
  } while(0);
  $or480 = $add267 | 1;
  $head481 = ((($p$1)) + 4|0);
  HEAP32[$head481>>2] = $or480;
  $add$ptr482 = (($p$1) + ($add267)|0);
  HEAP32[$add$ptr482>>2] = $add267;
  $61 = HEAP32[(5420)>>2]|0;
  $cmp484 = ($p$1|0)==($61|0);
  if ($cmp484) {
   HEAP32[(5408)>>2] = $add267;
   return;
  } else {
   $psize$2 = $add267;
  }
 } else {
  $and495 = $28 & -2;
  HEAP32[$head231>>2] = $and495;
  $or496 = $psize$1 | 1;
  $head497 = ((($p$1)) + 4|0);
  HEAP32[$head497>>2] = $or496;
  $add$ptr498 = (($p$1) + ($psize$1)|0);
  HEAP32[$add$ptr498>>2] = $psize$1;
  $psize$2 = $psize$1;
 }
 $shr501 = $psize$2 >>> 3;
 $cmp502 = ($psize$2>>>0)<(256);
 if ($cmp502) {
  $shl508 = $shr501 << 1;
  $arrayidx509 = (5440 + ($shl508<<2)|0);
  $62 = HEAP32[1350]|0;
  $shl511 = 1 << $shr501;
  $and512 = $62 & $shl511;
  $tobool513 = ($and512|0)==(0);
  if ($tobool513) {
   $or516 = $62 | $shl511;
   HEAP32[1350] = $or516;
   $$pre = ((($arrayidx509)) + 8|0);
   $$pre$phiZ2D = $$pre;$F510$0 = $arrayidx509;
  } else {
   $63 = ((($arrayidx509)) + 8|0);
   $64 = HEAP32[$63>>2]|0;
   $65 = HEAP32[(5416)>>2]|0;
   $cmp519 = ($64>>>0)<($65>>>0);
   if ($cmp519) {
    _abort();
    // unreachable;
   } else {
    $$pre$phiZ2D = $63;$F510$0 = $64;
   }
  }
  HEAP32[$$pre$phiZ2D>>2] = $p$1;
  $bk529 = ((($F510$0)) + 12|0);
  HEAP32[$bk529>>2] = $p$1;
  $fd530 = ((($p$1)) + 8|0);
  HEAP32[$fd530>>2] = $F510$0;
  $bk531 = ((($p$1)) + 12|0);
  HEAP32[$bk531>>2] = $arrayidx509;
  return;
 }
 $shr535 = $psize$2 >>> 8;
 $cmp536 = ($shr535|0)==(0);
 if ($cmp536) {
  $I534$0 = 0;
 } else {
  $cmp540 = ($psize$2>>>0)>(16777215);
  if ($cmp540) {
   $I534$0 = 31;
  } else {
   $sub = (($shr535) + 1048320)|0;
   $shr544 = $sub >>> 16;
   $and545 = $shr544 & 8;
   $shl546 = $shr535 << $and545;
   $sub547 = (($shl546) + 520192)|0;
   $shr548 = $sub547 >>> 16;
   $and549 = $shr548 & 4;
   $add550 = $and549 | $and545;
   $shl551 = $shl546 << $and549;
   $sub552 = (($shl551) + 245760)|0;
   $shr553 = $sub552 >>> 16;
   $and554 = $shr553 & 2;
   $add555 = $add550 | $and554;
   $sub556 = (14 - ($add555))|0;
   $shl557 = $shl551 << $and554;
   $shr558 = $shl557 >>> 15;
   $add559 = (($sub556) + ($shr558))|0;
   $shl560 = $add559 << 1;
   $add561 = (($add559) + 7)|0;
   $shr562 = $psize$2 >>> $add561;
   $and563 = $shr562 & 1;
   $add564 = $and563 | $shl560;
   $I534$0 = $add564;
  }
 }
 $arrayidx567 = (5704 + ($I534$0<<2)|0);
 $index568 = ((($p$1)) + 28|0);
 HEAP32[$index568>>2] = $I534$0;
 $child569 = ((($p$1)) + 16|0);
 $arrayidx570 = ((($p$1)) + 20|0);
 HEAP32[$arrayidx570>>2] = 0;
 HEAP32[$child569>>2] = 0;
 $66 = HEAP32[(5404)>>2]|0;
 $shl573 = 1 << $I534$0;
 $and574 = $66 & $shl573;
 $tobool575 = ($and574|0)==(0);
 do {
  if ($tobool575) {
   $or578 = $66 | $shl573;
   HEAP32[(5404)>>2] = $or578;
   HEAP32[$arrayidx567>>2] = $p$1;
   $parent579 = ((($p$1)) + 24|0);
   HEAP32[$parent579>>2] = $arrayidx567;
   $bk580 = ((($p$1)) + 12|0);
   HEAP32[$bk580>>2] = $p$1;
   $fd581 = ((($p$1)) + 8|0);
   HEAP32[$fd581>>2] = $p$1;
  } else {
   $67 = HEAP32[$arrayidx567>>2]|0;
   $cmp584 = ($I534$0|0)==(31);
   $shr586 = $I534$0 >>> 1;
   $sub589 = (25 - ($shr586))|0;
   $cond = $cmp584 ? 0 : $sub589;
   $shl590 = $psize$2 << $cond;
   $K583$0 = $shl590;$T$0 = $67;
   while(1) {
    $head591 = ((($T$0)) + 4|0);
    $68 = HEAP32[$head591>>2]|0;
    $and592 = $68 & -8;
    $cmp593 = ($and592|0)==($psize$2|0);
    if ($cmp593) {
     label = 130;
     break;
    }
    $shr596 = $K583$0 >>> 31;
    $arrayidx599 = (((($T$0)) + 16|0) + ($shr596<<2)|0);
    $shl600 = $K583$0 << 1;
    $69 = HEAP32[$arrayidx599>>2]|0;
    $cmp601 = ($69|0)==(0|0);
    if ($cmp601) {
     label = 127;
     break;
    } else {
     $K583$0 = $shl600;$T$0 = $69;
    }
   }
   if ((label|0) == 127) {
    $70 = HEAP32[(5416)>>2]|0;
    $cmp605 = ($arrayidx599>>>0)<($70>>>0);
    if ($cmp605) {
     _abort();
     // unreachable;
    } else {
     HEAP32[$arrayidx599>>2] = $p$1;
     $parent610 = ((($p$1)) + 24|0);
     HEAP32[$parent610>>2] = $T$0;
     $bk611 = ((($p$1)) + 12|0);
     HEAP32[$bk611>>2] = $p$1;
     $fd612 = ((($p$1)) + 8|0);
     HEAP32[$fd612>>2] = $p$1;
     break;
    }
   }
   else if ((label|0) == 130) {
    $fd620 = ((($T$0)) + 8|0);
    $71 = HEAP32[$fd620>>2]|0;
    $72 = HEAP32[(5416)>>2]|0;
    $cmp624 = ($71>>>0)>=($72>>>0);
    $not$cmp621 = ($T$0>>>0)>=($72>>>0);
    $73 = $cmp624 & $not$cmp621;
    if ($73) {
     $bk631 = ((($71)) + 12|0);
     HEAP32[$bk631>>2] = $p$1;
     HEAP32[$fd620>>2] = $p$1;
     $fd633 = ((($p$1)) + 8|0);
     HEAP32[$fd633>>2] = $71;
     $bk634 = ((($p$1)) + 12|0);
     HEAP32[$bk634>>2] = $T$0;
     $parent635 = ((($p$1)) + 24|0);
     HEAP32[$parent635>>2] = 0;
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $74 = HEAP32[(5432)>>2]|0;
 $dec = (($74) + -1)|0;
 HEAP32[(5432)>>2] = $dec;
 $cmp640 = ($dec|0)==(0);
 if ($cmp640) {
  $sp$0$in$i = (5856);
 } else {
  return;
 }
 while(1) {
  $sp$0$i = HEAP32[$sp$0$in$i>>2]|0;
  $cmp$i = ($sp$0$i|0)==(0|0);
  $next4$i = ((($sp$0$i)) + 8|0);
  if ($cmp$i) {
   break;
  } else {
   $sp$0$in$i = $next4$i;
  }
 }
 HEAP32[(5432)>>2] = -1;
 return;
}
function __ZdlPv($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($ptr);
 return;
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $__type_name$i = 0, $add$ptr = 0, $call = 0, $call10 = 0, $call14 = 0, $cond = 0, $exception_class = 0, $primaryException = 0, $thrown_object = 0, $tobool = 0, $tobool1 = 0, $vararg_buffer = 0, $vararg_buffer10 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0;
 var $vararg_ptr6 = 0, $vfn = 0, $vfn13 = 0, $vtable = 0, $vtable12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $vararg_buffer10 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $thrown_object = sp + 36|0;
 $call = (___cxa_get_globals_fast()|0);
 $tobool = ($call|0)==(0|0);
 if (!($tobool)) {
  $0 = HEAP32[$call>>2]|0;
  $tobool1 = ($0|0)==(0|0);
  if (!($tobool1)) {
   $add$ptr = ((($0)) + 80|0);
   $exception_class = ((($0)) + 48|0);
   $1 = $exception_class;
   $2 = $1;
   $3 = HEAP32[$2>>2]|0;
   $4 = (($1) + 4)|0;
   $5 = $4;
   $6 = HEAP32[$5>>2]|0;
   $7 = $3 & -256;
   $8 = ($7|0)==(1126902528);
   $9 = ($6|0)==(1129074247);
   $10 = $8 & $9;
   if (!($10)) {
    $22 = HEAP32[165]|0;
    HEAP32[$vararg_buffer7>>2] = $22;
    _abort_message(4739,$vararg_buffer7);
    // unreachable;
   }
   $11 = ($3|0)==(1126902529);
   $12 = ($6|0)==(1129074247);
   $13 = $11 & $12;
   if ($13) {
    $primaryException = ((($0)) + 44|0);
    $14 = HEAP32[$primaryException>>2]|0;
    $cond = $14;
   } else {
    $cond = $add$ptr;
   }
   HEAP32[$thrown_object>>2] = $cond;
   $15 = HEAP32[$0>>2]|0;
   $__type_name$i = ((($15)) + 4|0);
   $16 = HEAP32[$__type_name$i>>2]|0;
   $vtable = HEAP32[48]|0;
   $vfn = ((($vtable)) + 16|0);
   $17 = HEAP32[$vfn>>2]|0;
   $call10 = (FUNCTION_TABLE_iiii[$17 & 31](192,$15,$thrown_object)|0);
   if ($call10) {
    $18 = HEAP32[$thrown_object>>2]|0;
    $19 = HEAP32[165]|0;
    $vtable12 = HEAP32[$18>>2]|0;
    $vfn13 = ((($vtable12)) + 8|0);
    $20 = HEAP32[$vfn13>>2]|0;
    $call14 = (FUNCTION_TABLE_ii[$20 & 1]($18)|0);
    HEAP32[$vararg_buffer>>2] = $19;
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    HEAP32[$vararg_ptr1>>2] = $16;
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    HEAP32[$vararg_ptr2>>2] = $call14;
    _abort_message(4653,$vararg_buffer);
    // unreachable;
   } else {
    $21 = HEAP32[165]|0;
    HEAP32[$vararg_buffer3>>2] = $21;
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    HEAP32[$vararg_ptr6>>2] = $16;
    _abort_message(4698,$vararg_buffer3);
    // unreachable;
   }
  }
 }
 _abort_message(4777,$vararg_buffer10);
 // unreachable;
}
function ___cxa_get_globals_fast() {
 var $0 = 0, $call = 0, $call1 = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer = sp;
 $call = (_pthread_once((5896|0),(27|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  $0 = HEAP32[1475]|0;
  $call1 = (_pthread_getspecific(($0|0))|0);
  STACKTOP = sp;return ($call1|0);
 } else {
  _abort_message(4928,$vararg_buffer);
  // unreachable;
 }
 return (0)|0;
}
function _abort_message($format,$varargs) {
 $format = $format|0;
 $varargs = $varargs|0;
 var $0 = 0, $list = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $list = sp;
 HEAP32[$list>>2] = $varargs;
 $0 = HEAP32[106]|0;
 (_vfprintf($0,$format,$list)|0);
 (_fputc(10,$0)|0);
 _abort();
 // unreachable;
}
function __ZN10__cxxabiv116__shim_type_infoD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv117__class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type,$adjustedPtr) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 $adjustedPtr = $adjustedPtr|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $cmp = 0, $cmp$i = 0, $cmp4 = 0, $dst_ptr_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $path_dst_ptr_to_static_ptr = 0, $retval$0 = 0, $retval$2 = 0, $src2dst_offset = 0, $static_type = 0, $vfn = 0, $vtable = 0;
 var dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $info = sp;
 $cmp$i = ($this|0)==($thrown_type|0);
 if ($cmp$i) {
  $retval$2 = 1;
 } else {
  $0 = ($thrown_type|0)==(0|0);
  if ($0) {
   $retval$2 = 0;
  } else {
   $1 = (___dynamic_cast($thrown_type,216,200,0)|0);
   $cmp = ($1|0)==(0|0);
   if ($cmp) {
    $retval$2 = 0;
   } else {
    $2 = ((($info)) + 4|0);
    dest=$2; stop=dest+52|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
    HEAP32[$info>>2] = $1;
    $static_type = ((($info)) + 8|0);
    HEAP32[$static_type>>2] = $this;
    $src2dst_offset = ((($info)) + 12|0);
    HEAP32[$src2dst_offset>>2] = -1;
    $number_of_dst_type = ((($info)) + 48|0);
    HEAP32[$number_of_dst_type>>2] = 1;
    $vtable = HEAP32[$1>>2]|0;
    $vfn = ((($vtable)) + 28|0);
    $3 = HEAP32[$vfn>>2]|0;
    $4 = HEAP32[$adjustedPtr>>2]|0;
    FUNCTION_TABLE_viiii[$3 & 31]($1,$info,$4,1);
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    $5 = HEAP32[$path_dst_ptr_to_static_ptr>>2]|0;
    $cmp4 = ($5|0)==(1);
    if ($cmp4) {
     $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
     $6 = HEAP32[$dst_ptr_leading_to_static_ptr>>2]|0;
     HEAP32[$adjustedPtr>>2] = $6;
     $retval$0 = 1;
    } else {
     $retval$0 = 0;
    }
    $retval$2 = $retval$0;
   }
  }
 }
 STACKTOP = sp;return ($retval$2|0);
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $cmp$i = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = HEAP32[$static_type>>2]|0;
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$info,$dst_ptr,$current_ptr,$path_below);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $add = 0, $cmp = 0, $cmp$i = 0, $cmp$i19 = 0, $cmp$i20 = 0, $cmp12 = 0, $cmp13 = 0, $cmp2$i = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0;
 var $dst_ptr_not_leading_to_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_dst_ptr10 = 0, $path_dynamic_ptr_to_static_ptr$i = 0, $search_done = 0, $static_ptr$i = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = HEAP32[$static_type>>2]|0;
 $cmp$i = ($this|0)==($0|0);
 do {
  if ($cmp$i) {
   $static_ptr$i = ((($info)) + 4|0);
   $1 = HEAP32[$static_ptr$i>>2]|0;
   $cmp$i20 = ($1|0)==($current_ptr|0);
   if ($cmp$i20) {
    $path_dynamic_ptr_to_static_ptr$i = ((($info)) + 28|0);
    $2 = HEAP32[$path_dynamic_ptr_to_static_ptr$i>>2]|0;
    $cmp2$i = ($2|0)==(1);
    if (!($cmp2$i)) {
     HEAP32[$path_dynamic_ptr_to_static_ptr$i>>2] = $path_below;
    }
   }
  } else {
   $3 = HEAP32[$info>>2]|0;
   $cmp$i19 = ($this|0)==($3|0);
   if ($cmp$i19) {
    $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
    $4 = HEAP32[$dst_ptr_leading_to_static_ptr>>2]|0;
    $cmp = ($4|0)==($current_ptr|0);
    if (!($cmp)) {
     $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
     $5 = HEAP32[$dst_ptr_not_leading_to_static_ptr>>2]|0;
     $cmp5 = ($5|0)==($current_ptr|0);
     if (!($cmp5)) {
      $path_dynamic_ptr_to_dst_ptr10 = ((($info)) + 32|0);
      HEAP32[$path_dynamic_ptr_to_dst_ptr10>>2] = $path_below;
      HEAP32[$dst_ptr_not_leading_to_static_ptr>>2] = $current_ptr;
      $number_to_dst_ptr = ((($info)) + 40|0);
      $6 = HEAP32[$number_to_dst_ptr>>2]|0;
      $add = (($6) + 1)|0;
      HEAP32[$number_to_dst_ptr>>2] = $add;
      $number_to_static_ptr = ((($info)) + 36|0);
      $7 = HEAP32[$number_to_static_ptr>>2]|0;
      $cmp12 = ($7|0)==(1);
      if ($cmp12) {
       $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
       $8 = HEAP32[$path_dst_ptr_to_static_ptr>>2]|0;
       $cmp13 = ($8|0)==(2);
       if ($cmp13) {
        $search_done = ((($info)) + 54|0);
        HEAP8[$search_done>>0] = 1;
       }
      }
      $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
      HEAP32[$is_dst_type_derived_from_static_type>>2] = 4;
      break;
     }
    }
    $cmp7 = ($path_below|0)==(1);
    if ($cmp7) {
     $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
     HEAP32[$path_dynamic_ptr_to_dst_ptr>>2] = 1;
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $cmp$i = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = HEAP32[$static_type>>2]|0;
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $add = 0, $cmp = 0, $cmp4 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $number_to_static_ptr = 0, $number_to_static_ptr11 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dst_ptr_to_static_ptr12 = 0, $path_dst_ptr_to_static_ptr6 = 0, $search_done = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $0 = HEAP32[$dst_ptr_leading_to_static_ptr>>2]|0;
 $cmp = ($0|0)==(0|0);
 do {
  if ($cmp) {
   HEAP32[$dst_ptr_leading_to_static_ptr>>2] = $adjustedPtr;
   $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
   HEAP32[$path_dst_ptr_to_static_ptr>>2] = $path_below;
   $number_to_static_ptr = ((($info)) + 36|0);
   HEAP32[$number_to_static_ptr>>2] = 1;
  } else {
   $cmp4 = ($0|0)==($adjustedPtr|0);
   if (!($cmp4)) {
    $number_to_static_ptr11 = ((($info)) + 36|0);
    $2 = HEAP32[$number_to_static_ptr11>>2]|0;
    $add = (($2) + 1)|0;
    HEAP32[$number_to_static_ptr11>>2] = $add;
    $path_dst_ptr_to_static_ptr12 = ((($info)) + 24|0);
    HEAP32[$path_dst_ptr_to_static_ptr12>>2] = 2;
    $search_done = ((($info)) + 54|0);
    HEAP8[$search_done>>0] = 1;
    break;
   }
   $path_dst_ptr_to_static_ptr6 = ((($info)) + 24|0);
   $1 = HEAP32[$path_dst_ptr_to_static_ptr6>>2]|0;
   $cmp7 = ($1|0)==(2);
   if ($cmp7) {
    HEAP32[$path_dst_ptr_to_static_ptr6>>2] = $path_below;
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($this,$info,$dst_ptr,$current_ptr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add = 0, $cmp = 0, $cmp10 = 0, $cmp13 = 0, $cmp18 = 0, $cmp2 = 0, $cmp21 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $number_of_dst_type = 0;
 var $number_of_dst_type17 = 0, $number_to_static_ptr = 0, $number_to_static_ptr26 = 0, $or$cond = 0, $or$cond19 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dst_ptr_to_static_ptr12 = 0, $search_done = 0, $search_done23 = 0, $search_done27 = 0, $static_ptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $found_any_static_type = ((($info)) + 53|0);
 HEAP8[$found_any_static_type>>0] = 1;
 $static_ptr = ((($info)) + 4|0);
 $0 = HEAP32[$static_ptr>>2]|0;
 $cmp = ($0|0)==($current_ptr|0);
 do {
  if ($cmp) {
   $found_our_static_ptr = ((($info)) + 52|0);
   HEAP8[$found_our_static_ptr>>0] = 1;
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $1 = HEAP32[$dst_ptr_leading_to_static_ptr>>2]|0;
   $cmp2 = ($1|0)==(0|0);
   if ($cmp2) {
    HEAP32[$dst_ptr_leading_to_static_ptr>>2] = $dst_ptr;
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    HEAP32[$path_dst_ptr_to_static_ptr>>2] = $path_below;
    $number_to_static_ptr = ((($info)) + 36|0);
    HEAP32[$number_to_static_ptr>>2] = 1;
    $number_of_dst_type = ((($info)) + 48|0);
    $2 = HEAP32[$number_of_dst_type>>2]|0;
    $cmp5 = ($2|0)==(1);
    $cmp7 = ($path_below|0)==(1);
    $or$cond = $cmp5 & $cmp7;
    if (!($or$cond)) {
     break;
    }
    $search_done = ((($info)) + 54|0);
    HEAP8[$search_done>>0] = 1;
    break;
   }
   $cmp10 = ($1|0)==($dst_ptr|0);
   if (!($cmp10)) {
    $number_to_static_ptr26 = ((($info)) + 36|0);
    $6 = HEAP32[$number_to_static_ptr26>>2]|0;
    $add = (($6) + 1)|0;
    HEAP32[$number_to_static_ptr26>>2] = $add;
    $search_done27 = ((($info)) + 54|0);
    HEAP8[$search_done27>>0] = 1;
    break;
   }
   $path_dst_ptr_to_static_ptr12 = ((($info)) + 24|0);
   $3 = HEAP32[$path_dst_ptr_to_static_ptr12>>2]|0;
   $cmp13 = ($3|0)==(2);
   if ($cmp13) {
    HEAP32[$path_dst_ptr_to_static_ptr12>>2] = $path_below;
    $5 = $path_below;
   } else {
    $5 = $3;
   }
   $number_of_dst_type17 = ((($info)) + 48|0);
   $4 = HEAP32[$number_of_dst_type17>>2]|0;
   $cmp18 = ($4|0)==(1);
   $cmp21 = ($5|0)==(1);
   $or$cond19 = $cmp18 & $cmp21;
   if ($or$cond19) {
    $search_done23 = ((($info)) + 54|0);
    HEAP8[$search_done23>>0] = 1;
   }
  }
 } while(0);
 return;
}
function ___dynamic_cast($static_ptr,$static_type,$dst_type,$src2dst_offset) {
 $static_ptr = $static_ptr|0;
 $static_type = $static_type|0;
 $dst_type = $dst_type|0;
 $src2dst_offset = $src2dst_offset|0;
 var $$ = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr$ = 0, $arrayidx = 0;
 var $arrayidx1 = 0, $cmp = 0, $cmp$i = 0, $cmp14 = 0, $cmp16 = 0, $cmp19 = 0, $cmp25 = 0, $cmp27 = 0, $cmp30 = 0, $cmp33 = 0, $dst_ptr$0 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $or$cond = 0, $or$cond15 = 0, $or$cond16 = 0;
 var $or$cond17 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_static_ptr = 0, $src2dst_offset5 = 0, $static_ptr3 = 0, $static_type4 = 0, $vfn = 0, $vfn11 = 0, $vtable10 = 0, $vtable7 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $info = sp;
 $0 = HEAP32[$static_ptr>>2]|0;
 $arrayidx = ((($0)) + -8|0);
 $1 = HEAP32[$arrayidx>>2]|0;
 $add$ptr = (($static_ptr) + ($1)|0);
 $arrayidx1 = ((($0)) + -4|0);
 $2 = HEAP32[$arrayidx1>>2]|0;
 HEAP32[$info>>2] = $dst_type;
 $static_ptr3 = ((($info)) + 4|0);
 HEAP32[$static_ptr3>>2] = $static_ptr;
 $static_type4 = ((($info)) + 8|0);
 HEAP32[$static_type4>>2] = $static_type;
 $src2dst_offset5 = ((($info)) + 12|0);
 HEAP32[$src2dst_offset5>>2] = $src2dst_offset;
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
 $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
 $path_dynamic_ptr_to_static_ptr = ((($info)) + 28|0);
 $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
 $number_to_dst_ptr = ((($info)) + 40|0);
 $cmp$i = ($2|0)==($dst_type|0);
 dest=$dst_ptr_leading_to_static_ptr; stop=dest+36|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));HEAP16[$dst_ptr_leading_to_static_ptr+36>>1]=0|0;HEAP8[$dst_ptr_leading_to_static_ptr+38>>0]=0|0;
 L1: do {
  if ($cmp$i) {
   $number_of_dst_type = ((($info)) + 48|0);
   HEAP32[$number_of_dst_type>>2] = 1;
   $vtable7 = HEAP32[$dst_type>>2]|0;
   $vfn = ((($vtable7)) + 20|0);
   $3 = HEAP32[$vfn>>2]|0;
   FUNCTION_TABLE_viiiiii[$3 & 31]($dst_type,$info,$add$ptr,$add$ptr,1,0);
   $4 = HEAP32[$path_dst_ptr_to_static_ptr>>2]|0;
   $cmp = ($4|0)==(1);
   $add$ptr$ = $cmp ? $add$ptr : 0;
   $dst_ptr$0 = $add$ptr$;
  } else {
   $number_to_static_ptr = ((($info)) + 36|0);
   $vtable10 = HEAP32[$2>>2]|0;
   $vfn11 = ((($vtable10)) + 24|0);
   $5 = HEAP32[$vfn11>>2]|0;
   FUNCTION_TABLE_viiiii[$5 & 31]($2,$info,$add$ptr,1,0);
   $6 = HEAP32[$number_to_static_ptr>>2]|0;
   switch ($6|0) {
   case 0:  {
    $7 = HEAP32[$number_to_dst_ptr>>2]|0;
    $cmp14 = ($7|0)==(1);
    $8 = HEAP32[$path_dynamic_ptr_to_static_ptr>>2]|0;
    $cmp16 = ($8|0)==(1);
    $or$cond = $cmp14 & $cmp16;
    $9 = HEAP32[$path_dynamic_ptr_to_dst_ptr>>2]|0;
    $cmp19 = ($9|0)==(1);
    $or$cond15 = $or$cond & $cmp19;
    $10 = HEAP32[$dst_ptr_not_leading_to_static_ptr>>2]|0;
    $$ = $or$cond15 ? $10 : 0;
    $dst_ptr$0 = $$;
    break L1;
    break;
   }
   case 1:  {
    break;
   }
   default: {
    $dst_ptr$0 = 0;
    break L1;
   }
   }
   $11 = HEAP32[$path_dst_ptr_to_static_ptr>>2]|0;
   $cmp25 = ($11|0)==(1);
   if (!($cmp25)) {
    $12 = HEAP32[$number_to_dst_ptr>>2]|0;
    $cmp27 = ($12|0)==(0);
    $13 = HEAP32[$path_dynamic_ptr_to_static_ptr>>2]|0;
    $cmp30 = ($13|0)==(1);
    $or$cond16 = $cmp27 & $cmp30;
    $14 = HEAP32[$path_dynamic_ptr_to_dst_ptr>>2]|0;
    $cmp33 = ($14|0)==(1);
    $or$cond17 = $or$cond16 & $cmp33;
    if (!($or$cond17)) {
     $dst_ptr$0 = 0;
     break;
    }
   }
   $15 = HEAP32[$dst_ptr_leading_to_static_ptr>>2]|0;
   $dst_ptr$0 = $15;
  }
 } while(0);
 STACKTOP = sp;return ($dst_ptr$0|0);
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $cmp$i = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = HEAP32[$static_type>>2]|0;
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $__base_type = ((($this)) + 8|0);
  $1 = HEAP32[$__base_type>>2]|0;
  $vtable = HEAP32[$1>>2]|0;
  $vfn = ((($vtable)) + 20|0);
  $2 = HEAP32[$vfn>>2]|0;
  FUNCTION_TABLE_viiiiii[$2 & 31]($1,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
 }
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_type = 0, $__base_type40 = 0, $add = 0;
 var $cmp = 0, $cmp$i = 0, $cmp$i33 = 0, $cmp$i34 = 0, $cmp11 = 0, $cmp2$i = 0, $cmp26 = 0, $cmp27 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $is_dst_type_derived_from_static_type13$0$off035 = 0, $not$tobool19 = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0;
 var $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_dst_ptr10 = 0, $path_dynamic_ptr_to_static_ptr$i = 0, $search_done = 0, $static_ptr$i = 0, $static_type = 0, $tobool16 = 0, $vfn = 0, $vfn42 = 0, $vtable = 0, $vtable41 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = HEAP32[$static_type>>2]|0;
 $cmp$i = ($this|0)==($0|0);
 do {
  if ($cmp$i) {
   $static_ptr$i = ((($info)) + 4|0);
   $1 = HEAP32[$static_ptr$i>>2]|0;
   $cmp$i33 = ($1|0)==($current_ptr|0);
   if ($cmp$i33) {
    $path_dynamic_ptr_to_static_ptr$i = ((($info)) + 28|0);
    $2 = HEAP32[$path_dynamic_ptr_to_static_ptr$i>>2]|0;
    $cmp2$i = ($2|0)==(1);
    if (!($cmp2$i)) {
     HEAP32[$path_dynamic_ptr_to_static_ptr$i>>2] = $path_below;
    }
   }
  } else {
   $3 = HEAP32[$info>>2]|0;
   $cmp$i34 = ($this|0)==($3|0);
   if (!($cmp$i34)) {
    $__base_type40 = ((($this)) + 8|0);
    $15 = HEAP32[$__base_type40>>2]|0;
    $vtable41 = HEAP32[$15>>2]|0;
    $vfn42 = ((($vtable41)) + 24|0);
    $16 = HEAP32[$vfn42>>2]|0;
    FUNCTION_TABLE_viiiii[$16 & 31]($15,$info,$current_ptr,$path_below,$use_strcmp);
    break;
   }
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $4 = HEAP32[$dst_ptr_leading_to_static_ptr>>2]|0;
   $cmp = ($4|0)==($current_ptr|0);
   if (!($cmp)) {
    $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
    $5 = HEAP32[$dst_ptr_not_leading_to_static_ptr>>2]|0;
    $cmp5 = ($5|0)==($current_ptr|0);
    if (!($cmp5)) {
     $path_dynamic_ptr_to_dst_ptr10 = ((($info)) + 32|0);
     HEAP32[$path_dynamic_ptr_to_dst_ptr10>>2] = $path_below;
     $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
     $6 = HEAP32[$is_dst_type_derived_from_static_type>>2]|0;
     $cmp11 = ($6|0)==(4);
     if ($cmp11) {
      break;
     }
     $found_our_static_ptr = ((($info)) + 52|0);
     HEAP8[$found_our_static_ptr>>0] = 0;
     $found_any_static_type = ((($info)) + 53|0);
     HEAP8[$found_any_static_type>>0] = 0;
     $__base_type = ((($this)) + 8|0);
     $7 = HEAP32[$__base_type>>2]|0;
     $vtable = HEAP32[$7>>2]|0;
     $vfn = ((($vtable)) + 20|0);
     $8 = HEAP32[$vfn>>2]|0;
     FUNCTION_TABLE_viiiiii[$8 & 31]($7,$info,$current_ptr,$current_ptr,1,$use_strcmp);
     $9 = HEAP8[$found_any_static_type>>0]|0;
     $tobool16 = ($9<<24>>24)==(0);
     if ($tobool16) {
      $is_dst_type_derived_from_static_type13$0$off035 = 0;
      label = 13;
     } else {
      $10 = HEAP8[$found_our_static_ptr>>0]|0;
      $not$tobool19 = ($10<<24>>24)==(0);
      if ($not$tobool19) {
       $is_dst_type_derived_from_static_type13$0$off035 = 1;
       label = 13;
      } else {
       label = 17;
      }
     }
     do {
      if ((label|0) == 13) {
       HEAP32[$dst_ptr_not_leading_to_static_ptr>>2] = $current_ptr;
       $number_to_dst_ptr = ((($info)) + 40|0);
       $11 = HEAP32[$number_to_dst_ptr>>2]|0;
       $add = (($11) + 1)|0;
       HEAP32[$number_to_dst_ptr>>2] = $add;
       $number_to_static_ptr = ((($info)) + 36|0);
       $12 = HEAP32[$number_to_static_ptr>>2]|0;
       $cmp26 = ($12|0)==(1);
       if ($cmp26) {
        $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
        $13 = HEAP32[$path_dst_ptr_to_static_ptr>>2]|0;
        $cmp27 = ($13|0)==(2);
        if ($cmp27) {
         $search_done = ((($info)) + 54|0);
         HEAP8[$search_done>>0] = 1;
         if ($is_dst_type_derived_from_static_type13$0$off035) {
          label = 17;
          break;
         } else {
          $14 = 4;
          break;
         }
        }
       }
       if ($is_dst_type_derived_from_static_type13$0$off035) {
        label = 17;
       } else {
        $14 = 4;
       }
      }
     } while(0);
     if ((label|0) == 17) {
      $14 = 3;
     }
     HEAP32[$is_dst_type_derived_from_static_type>>2] = $14;
     break;
    }
   }
   $cmp7 = ($path_below|0)==(1);
   if ($cmp7) {
    $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
    HEAP32[$path_dynamic_ptr_to_dst_ptr>>2] = 1;
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $cmp$i = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = HEAP32[$static_type>>2]|0;
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$info,$adjustedPtr,$path_below);
 } else {
  $__base_type = ((($this)) + 8|0);
  $1 = HEAP32[$__base_type>>2]|0;
  $vtable = HEAP32[$1>>2]|0;
  $vfn = ((($vtable)) + 28|0);
  $2 = HEAP32[$vfn>>2]|0;
  FUNCTION_TABLE_viiii[$2 & 31]($1,$info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZNSt9type_infoD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $call = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer = sp;
 $call = (_pthread_key_create((5900|0),(28|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(4977,$vararg_buffer);
  // unreachable;
 }
}
function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv($p) {
 $p = $p|0;
 var $0 = 0, $call = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer = sp;
 _free($p);
 $0 = HEAP32[1475]|0;
 $call = (_pthread_setspecific(($0|0),(0|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(5027,$vararg_buffer);
  // unreachable;
 }
}
function __ZSt9terminatev() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $call = 0, $call8 = 0, $exception_class = 0, $terminateHandler = 0;
 var $tobool = 0, $tobool1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __THREW__ = 0;
 $call = (invoke_i(29)|0);
 $0 = __THREW__; __THREW__ = 0;
 $1 = $0&1;
 if ($1) {
  $14 = ___cxa_find_matching_catch_3(0|0)|0;
  $15 = tempRet0;
  ___clang_call_terminate($14);
  // unreachable;
 }
 $tobool = ($call|0)==(0|0);
 if (!($tobool)) {
  $2 = HEAP32[$call>>2]|0;
  $tobool1 = ($2|0)==(0|0);
  if (!($tobool1)) {
   $exception_class = ((($2)) + 48|0);
   $3 = $exception_class;
   $4 = $3;
   $5 = HEAP32[$4>>2]|0;
   $6 = (($3) + 4)|0;
   $7 = $6;
   $8 = HEAP32[$7>>2]|0;
   $9 = $5 & -256;
   $10 = ($9|0)==(1126902528);
   $11 = ($8|0)==(1129074247);
   $12 = $10 & $11;
   if ($12) {
    $terminateHandler = ((($2)) + 12|0);
    $13 = HEAP32[$terminateHandler>>2]|0;
    __ZSt11__terminatePFvvE($13);
    // unreachable;
   }
  }
 }
 $call8 = (__ZSt13get_terminatev()|0);
 __ZSt11__terminatePFvvE($call8);
 // unreachable;
}
function __ZSt11__terminatePFvvE($func) {
 $func = $func|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 __THREW__ = 0;
 invoke_v($func|0);
 $0 = __THREW__; __THREW__ = 0;
 $1 = $0&1;
 if (!($1)) {
  __THREW__ = 0;
  invoke_vii(30,(5080|0),($vararg_buffer|0));
  $2 = __THREW__; __THREW__ = 0;
 }
 $3 = ___cxa_find_matching_catch_3(0|0)|0;
 $4 = tempRet0;
 (___cxa_begin_catch(($3|0))|0);
 __THREW__ = 0;
 invoke_vii(30,(5120|0),($vararg_buffer1|0));
 $5 = __THREW__; __THREW__ = 0;
 $6 = ___cxa_find_matching_catch_3(0|0)|0;
 $7 = tempRet0;
 __THREW__ = 0;
 invoke_v(31);
 $8 = __THREW__; __THREW__ = 0;
 $9 = $8&1;
 if ($9) {
  $10 = ___cxa_find_matching_catch_3(0|0)|0;
  $11 = tempRet0;
  ___clang_call_terminate($10);
  // unreachable;
 } else {
  ___clang_call_terminate($6);
  // unreachable;
 }
}
function __ZSt13get_terminatev() {
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[164]|0;HEAP32[164] = (($0+0)|0);
 $1 = $0;
 return ($1|0);
}
function __ZN10__cxxabiv123__fundamental_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type,$0) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 $0 = $0|0;
 var $cmp$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp$i = ($this|0)==($thrown_type|0);
 return ($cmp$i|0);
}
function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_count = 0, $__flags = 0, $add$ptr = 0, $and = 0, $and30 = 0, $arraydecay = 0, $cmp = 0, $cmp$i = 0;
 var $cmp19 = 0, $cmp40 = 0, $found_any_static_type5 = 0, $found_our_static_ptr2 = 0, $incdec$ptr = 0, $incdec$ptr39 = 0, $p$0 = 0, $path_dst_ptr_to_static_ptr = 0, $search_done = 0, $static_type = 0, $tobool14 = 0, $tobool17 = 0, $tobool22 = 0, $tobool27 = 0, $tobool31 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = HEAP32[$static_type>>2]|0;
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $found_our_static_ptr2 = ((($info)) + 52|0);
  $1 = HEAP16[$found_our_static_ptr2>>1]|0;
  $2 = $1&255;
  $found_any_static_type5 = ((($info)) + 53|0);
  $3 = ($1&65535) >>> 8;
  $4 = $3&255;
  $arraydecay = ((($this)) + 16|0);
  $__base_count = ((($this)) + 12|0);
  $5 = HEAP32[$__base_count>>2]|0;
  $add$ptr = (((($this)) + 16|0) + ($5<<3)|0);
  HEAP8[$found_our_static_ptr2>>0] = 0;
  HEAP8[$found_any_static_type5>>0] = 0;
  __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($arraydecay,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
  $cmp = ($5|0)>(1);
  L4: do {
   if ($cmp) {
    $incdec$ptr = ((($this)) + 24|0);
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    $__flags = ((($this)) + 8|0);
    $search_done = ((($info)) + 54|0);
    $p$0 = $incdec$ptr;
    while(1) {
     $6 = HEAP8[$search_done>>0]|0;
     $tobool14 = ($6<<24>>24)==(0);
     if (!($tobool14)) {
      break L4;
     }
     $7 = HEAP16[$found_our_static_ptr2>>1]|0;
     $8 = $7&255;
     $tobool17 = ($8<<24>>24)==(0);
     if ($tobool17) {
      $tobool27 = ($7&65535)<(256);
      if (!($tobool27)) {
       $11 = HEAP32[$__flags>>2]|0;
       $and30 = $11 & 1;
       $tobool31 = ($and30|0)==(0);
       if ($tobool31) {
        break L4;
       }
      }
     } else {
      $9 = HEAP32[$path_dst_ptr_to_static_ptr>>2]|0;
      $cmp19 = ($9|0)==(1);
      if ($cmp19) {
       break L4;
      }
      $10 = HEAP32[$__flags>>2]|0;
      $and = $10 & 2;
      $tobool22 = ($and|0)==(0);
      if ($tobool22) {
       break L4;
      }
     }
     HEAP8[$found_our_static_ptr2>>0] = 0;
     HEAP8[$found_any_static_type5>>0] = 0;
     __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($p$0,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
     $incdec$ptr39 = ((($p$0)) + 8|0);
     $cmp40 = ($incdec$ptr39>>>0)<($add$ptr>>>0);
     if ($cmp40) {
      $p$0 = $incdec$ptr39;
     } else {
      break;
     }
    }
   }
  } while(0);
  HEAP8[$found_our_static_ptr2>>0] = $2;
  HEAP8[$found_any_static_type5>>0] = $4;
 }
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_count = 0, $__base_count63 = 0, $__flags34 = 0, $__flags72 = 0, $add = 0, $add$ptr = 0, $add$ptr64 = 0, $and = 0, $and35 = 0, $and73 = 0, $and88 = 0, $arraydecay = 0, $arraydecay62 = 0;
 var $cmp = 0, $cmp$i = 0, $cmp$i77 = 0, $cmp$i78 = 0, $cmp100 = 0, $cmp106 = 0, $cmp11 = 0, $cmp115 = 0, $cmp121 = 0, $cmp16 = 0, $cmp2$i = 0, $cmp27 = 0, $cmp44 = 0, $cmp46 = 0, $cmp5 = 0, $cmp7 = 0, $cmp70 = 0, $cmp77 = 0, $cmp85 = 0, $cmp97 = 0;
 var $does_dst_type_point_to_our_static_type$0$off0 = 0, $does_dst_type_point_to_our_static_type$1$off0 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $incdec$ptr = 0, $incdec$ptr105 = 0, $incdec$ptr120 = 0, $incdec$ptr69 = 0, $incdec$ptr84 = 0, $is_dst_type_derived_from_static_type = 0, $is_dst_type_derived_from_static_type13$0$off0 = 0, $is_dst_type_derived_from_static_type13$1$off0 = 0, $is_dst_type_derived_from_static_type13$2$off0 = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $number_to_static_ptr76 = 0, $p$0 = 0, $p65$0 = 0;
 var $p65$1 = 0, $p65$2 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dst_ptr_to_static_ptr99 = 0, $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_dst_ptr10 = 0, $path_dynamic_ptr_to_static_ptr$i = 0, $search_done = 0, $search_done110 = 0, $search_done79 = 0, $search_done92 = 0, $static_ptr$i = 0, $static_type = 0, $tobool111 = 0, $tobool18 = 0, $tobool22 = 0, $tobool25 = 0, $tobool30 = 0, $tobool36 = 0, $tobool74 = 0;
 var $tobool80 = 0, $tobool89 = 0, $tobool93 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = HEAP32[$static_type>>2]|0;
 $cmp$i = ($this|0)==($0|0);
 L1: do {
  if ($cmp$i) {
   $static_ptr$i = ((($info)) + 4|0);
   $1 = HEAP32[$static_ptr$i>>2]|0;
   $cmp$i77 = ($1|0)==($current_ptr|0);
   if ($cmp$i77) {
    $path_dynamic_ptr_to_static_ptr$i = ((($info)) + 28|0);
    $2 = HEAP32[$path_dynamic_ptr_to_static_ptr$i>>2]|0;
    $cmp2$i = ($2|0)==(1);
    if (!($cmp2$i)) {
     HEAP32[$path_dynamic_ptr_to_static_ptr$i>>2] = $path_below;
    }
   }
  } else {
   $3 = HEAP32[$info>>2]|0;
   $cmp$i78 = ($this|0)==($3|0);
   if (!($cmp$i78)) {
    $arraydecay62 = ((($this)) + 16|0);
    $__base_count63 = ((($this)) + 12|0);
    $18 = HEAP32[$__base_count63>>2]|0;
    $add$ptr64 = (((($this)) + 16|0) + ($18<<3)|0);
    __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($arraydecay62,$info,$current_ptr,$path_below,$use_strcmp);
    $incdec$ptr69 = ((($this)) + 24|0);
    $cmp70 = ($18|0)>(1);
    if (!($cmp70)) {
     break;
    }
    $__flags72 = ((($this)) + 8|0);
    $19 = HEAP32[$__flags72>>2]|0;
    $and73 = $19 & 2;
    $tobool74 = ($and73|0)==(0);
    if ($tobool74) {
     $number_to_static_ptr76 = ((($info)) + 36|0);
     $20 = HEAP32[$number_to_static_ptr76>>2]|0;
     $cmp77 = ($20|0)==(1);
     if (!($cmp77)) {
      $and88 = $19 & 1;
      $tobool89 = ($and88|0)==(0);
      if ($tobool89) {
       $search_done110 = ((($info)) + 54|0);
       $p65$2 = $incdec$ptr69;
       while(1) {
        $25 = HEAP8[$search_done110>>0]|0;
        $tobool111 = ($25<<24>>24)==(0);
        if (!($tobool111)) {
         break L1;
        }
        $26 = HEAP32[$number_to_static_ptr76>>2]|0;
        $cmp115 = ($26|0)==(1);
        if ($cmp115) {
         break L1;
        }
        __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($p65$2,$info,$current_ptr,$path_below,$use_strcmp);
        $incdec$ptr120 = ((($p65$2)) + 8|0);
        $cmp121 = ($incdec$ptr120>>>0)<($add$ptr64>>>0);
        if ($cmp121) {
         $p65$2 = $incdec$ptr120;
        } else {
         break L1;
        }
       }
      }
      $path_dst_ptr_to_static_ptr99 = ((($info)) + 24|0);
      $search_done92 = ((($info)) + 54|0);
      $p65$1 = $incdec$ptr69;
      while(1) {
       $22 = HEAP8[$search_done92>>0]|0;
       $tobool93 = ($22<<24>>24)==(0);
       if (!($tobool93)) {
        break L1;
       }
       $23 = HEAP32[$number_to_static_ptr76>>2]|0;
       $cmp97 = ($23|0)==(1);
       if ($cmp97) {
        $24 = HEAP32[$path_dst_ptr_to_static_ptr99>>2]|0;
        $cmp100 = ($24|0)==(1);
        if ($cmp100) {
         break L1;
        }
       }
       __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($p65$1,$info,$current_ptr,$path_below,$use_strcmp);
       $incdec$ptr105 = ((($p65$1)) + 8|0);
       $cmp106 = ($incdec$ptr105>>>0)<($add$ptr64>>>0);
       if ($cmp106) {
        $p65$1 = $incdec$ptr105;
       } else {
        break L1;
       }
      }
     }
    }
    $search_done79 = ((($info)) + 54|0);
    $p65$0 = $incdec$ptr69;
    while(1) {
     $21 = HEAP8[$search_done79>>0]|0;
     $tobool80 = ($21<<24>>24)==(0);
     if (!($tobool80)) {
      break L1;
     }
     __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($p65$0,$info,$current_ptr,$path_below,$use_strcmp);
     $incdec$ptr84 = ((($p65$0)) + 8|0);
     $cmp85 = ($incdec$ptr84>>>0)<($add$ptr64>>>0);
     if ($cmp85) {
      $p65$0 = $incdec$ptr84;
     } else {
      break L1;
     }
    }
   }
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $4 = HEAP32[$dst_ptr_leading_to_static_ptr>>2]|0;
   $cmp = ($4|0)==($current_ptr|0);
   if (!($cmp)) {
    $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
    $5 = HEAP32[$dst_ptr_not_leading_to_static_ptr>>2]|0;
    $cmp5 = ($5|0)==($current_ptr|0);
    if (!($cmp5)) {
     $path_dynamic_ptr_to_dst_ptr10 = ((($info)) + 32|0);
     HEAP32[$path_dynamic_ptr_to_dst_ptr10>>2] = $path_below;
     $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
     $6 = HEAP32[$is_dst_type_derived_from_static_type>>2]|0;
     $cmp11 = ($6|0)==(4);
     if ($cmp11) {
      break;
     }
     $arraydecay = ((($this)) + 16|0);
     $__base_count = ((($this)) + 12|0);
     $7 = HEAP32[$__base_count>>2]|0;
     $add$ptr = (((($this)) + 16|0) + ($7<<3)|0);
     $found_our_static_ptr = ((($info)) + 52|0);
     $found_any_static_type = ((($info)) + 53|0);
     $search_done = ((($info)) + 54|0);
     $__flags34 = ((($this)) + 8|0);
     $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
     $does_dst_type_point_to_our_static_type$0$off0 = 0;$is_dst_type_derived_from_static_type13$0$off0 = 0;$p$0 = $arraydecay;
     L34: while(1) {
      $cmp16 = ($p$0>>>0)<($add$ptr>>>0);
      if (!($cmp16)) {
       $is_dst_type_derived_from_static_type13$2$off0 = $is_dst_type_derived_from_static_type13$0$off0;
       label = 20;
       break;
      }
      HEAP8[$found_our_static_ptr>>0] = 0;
      HEAP8[$found_any_static_type>>0] = 0;
      __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($p$0,$info,$current_ptr,$current_ptr,1,$use_strcmp);
      $8 = HEAP8[$search_done>>0]|0;
      $tobool18 = ($8<<24>>24)==(0);
      if (!($tobool18)) {
       $is_dst_type_derived_from_static_type13$2$off0 = $is_dst_type_derived_from_static_type13$0$off0;
       label = 20;
       break;
      }
      $9 = HEAP8[$found_any_static_type>>0]|0;
      $tobool22 = ($9<<24>>24)==(0);
      do {
       if ($tobool22) {
        $does_dst_type_point_to_our_static_type$1$off0 = $does_dst_type_point_to_our_static_type$0$off0;$is_dst_type_derived_from_static_type13$1$off0 = $is_dst_type_derived_from_static_type13$0$off0;
       } else {
        $10 = HEAP8[$found_our_static_ptr>>0]|0;
        $tobool25 = ($10<<24>>24)==(0);
        if ($tobool25) {
         $13 = HEAP32[$__flags34>>2]|0;
         $and35 = $13 & 1;
         $tobool36 = ($and35|0)==(0);
         if ($tobool36) {
          $is_dst_type_derived_from_static_type13$2$off0 = 1;
          label = 20;
          break L34;
         } else {
          $does_dst_type_point_to_our_static_type$1$off0 = $does_dst_type_point_to_our_static_type$0$off0;$is_dst_type_derived_from_static_type13$1$off0 = 1;
          break;
         }
        }
        $11 = HEAP32[$path_dst_ptr_to_static_ptr>>2]|0;
        $cmp27 = ($11|0)==(1);
        if ($cmp27) {
         label = 25;
         break L34;
        }
        $12 = HEAP32[$__flags34>>2]|0;
        $and = $12 & 2;
        $tobool30 = ($and|0)==(0);
        if ($tobool30) {
         label = 25;
         break L34;
        } else {
         $does_dst_type_point_to_our_static_type$1$off0 = 1;$is_dst_type_derived_from_static_type13$1$off0 = 1;
        }
       }
      } while(0);
      $incdec$ptr = ((($p$0)) + 8|0);
      $does_dst_type_point_to_our_static_type$0$off0 = $does_dst_type_point_to_our_static_type$1$off0;$is_dst_type_derived_from_static_type13$0$off0 = $is_dst_type_derived_from_static_type13$1$off0;$p$0 = $incdec$ptr;
     }
     do {
      if ((label|0) == 20) {
       if (!($does_dst_type_point_to_our_static_type$0$off0)) {
        HEAP32[$dst_ptr_not_leading_to_static_ptr>>2] = $current_ptr;
        $number_to_dst_ptr = ((($info)) + 40|0);
        $14 = HEAP32[$number_to_dst_ptr>>2]|0;
        $add = (($14) + 1)|0;
        HEAP32[$number_to_dst_ptr>>2] = $add;
        $number_to_static_ptr = ((($info)) + 36|0);
        $15 = HEAP32[$number_to_static_ptr>>2]|0;
        $cmp44 = ($15|0)==(1);
        if ($cmp44) {
         $16 = HEAP32[$path_dst_ptr_to_static_ptr>>2]|0;
         $cmp46 = ($16|0)==(2);
         if ($cmp46) {
          HEAP8[$search_done>>0] = 1;
          if ($is_dst_type_derived_from_static_type13$2$off0) {
           label = 25;
           break;
          } else {
           $17 = 4;
           break;
          }
         }
        }
       }
       if ($is_dst_type_derived_from_static_type13$2$off0) {
        label = 25;
       } else {
        $17 = 4;
       }
      }
     } while(0);
     if ((label|0) == 25) {
      $17 = 3;
     }
     HEAP32[$is_dst_type_derived_from_static_type>>2] = $17;
     break;
    }
   }
   $cmp7 = ($path_below|0)==(1);
   if ($cmp7) {
    $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
    HEAP32[$path_dynamic_ptr_to_dst_ptr>>2] = 1;
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $__base_count = 0, $add$ptr = 0, $arraydecay = 0, $cmp = 0, $cmp$i = 0, $cmp7 = 0, $incdec$ptr = 0, $incdec$ptr6 = 0, $p$0 = 0, $search_done = 0, $static_type = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = HEAP32[$static_type>>2]|0;
 $cmp$i = ($this|0)==($0|0);
 L1: do {
  if ($cmp$i) {
   __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$info,$adjustedPtr,$path_below);
  } else {
   $arraydecay = ((($this)) + 16|0);
   $__base_count = ((($this)) + 12|0);
   $1 = HEAP32[$__base_count>>2]|0;
   $add$ptr = (((($this)) + 16|0) + ($1<<3)|0);
   __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($arraydecay,$info,$adjustedPtr,$path_below);
   $cmp = ($1|0)>(1);
   if ($cmp) {
    $incdec$ptr = ((($this)) + 24|0);
    $search_done = ((($info)) + 54|0);
    $p$0 = $incdec$ptr;
    while(1) {
     __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($p$0,$info,$adjustedPtr,$path_below);
     $2 = HEAP8[$search_done>>0]|0;
     $tobool = ($2<<24>>24)==(0);
     if (!($tobool)) {
      break L1;
     }
     $incdec$ptr6 = ((($p$0)) + 8|0);
     $cmp7 = ($incdec$ptr6>>>0)<($add$ptr>>>0);
     if ($cmp7) {
      $p$0 = $incdec$ptr6;
     } else {
      break;
     }
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__offset_flags = 0, $add$ptr = 0, $add$ptr4 = 0, $and = 0, $and6 = 0, $cond = 0, $offset_to_base$0 = 0, $shr = 0, $tobool = 0, $tobool7 = 0, $vfn = 0, $vtable3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__offset_flags = ((($this)) + 4|0);
 $0 = HEAP32[$__offset_flags>>2]|0;
 $shr = $0 >> 8;
 $and = $0 & 1;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $offset_to_base$0 = $shr;
 } else {
  $1 = HEAP32[$adjustedPtr>>2]|0;
  $add$ptr = (($1) + ($shr)|0);
  $2 = HEAP32[$add$ptr>>2]|0;
  $offset_to_base$0 = $2;
 }
 $3 = HEAP32[$this>>2]|0;
 $vtable3 = HEAP32[$3>>2]|0;
 $vfn = ((($vtable3)) + 28|0);
 $4 = HEAP32[$vfn>>2]|0;
 $add$ptr4 = (($adjustedPtr) + ($offset_to_base$0)|0);
 $and6 = $0 & 2;
 $tobool7 = ($and6|0)!=(0);
 $cond = $tobool7 ? $path_below : 2;
 FUNCTION_TABLE_viiii[$4 & 31]($3,$info,$add$ptr4,$cond);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__offset_flags = 0, $add$ptr = 0, $add$ptr4 = 0, $and = 0, $and6 = 0, $cond = 0, $offset_to_base$0 = 0, $shr = 0, $tobool = 0, $tobool7 = 0, $vfn = 0, $vtable3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__offset_flags = ((($this)) + 4|0);
 $0 = HEAP32[$__offset_flags>>2]|0;
 $shr = $0 >> 8;
 $and = $0 & 1;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $offset_to_base$0 = $shr;
 } else {
  $1 = HEAP32[$current_ptr>>2]|0;
  $add$ptr = (($1) + ($shr)|0);
  $2 = HEAP32[$add$ptr>>2]|0;
  $offset_to_base$0 = $2;
 }
 $3 = HEAP32[$this>>2]|0;
 $vtable3 = HEAP32[$3>>2]|0;
 $vfn = ((($vtable3)) + 20|0);
 $4 = HEAP32[$vfn>>2]|0;
 $add$ptr4 = (($current_ptr) + ($offset_to_base$0)|0);
 $and6 = $0 & 2;
 $tobool7 = ($and6|0)!=(0);
 $cond = $tobool7 ? $path_below : 2;
 FUNCTION_TABLE_viiiiii[$4 & 31]($3,$info,$dst_ptr,$add$ptr4,$cond,$use_strcmp);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__offset_flags = 0, $add$ptr = 0, $add$ptr4 = 0, $and = 0, $and6 = 0, $cond = 0, $offset_to_base$0 = 0, $shr = 0, $tobool = 0, $tobool7 = 0, $vfn = 0, $vtable3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__offset_flags = ((($this)) + 4|0);
 $0 = HEAP32[$__offset_flags>>2]|0;
 $shr = $0 >> 8;
 $and = $0 & 1;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $offset_to_base$0 = $shr;
 } else {
  $1 = HEAP32[$current_ptr>>2]|0;
  $add$ptr = (($1) + ($shr)|0);
  $2 = HEAP32[$add$ptr>>2]|0;
  $offset_to_base$0 = $2;
 }
 $3 = HEAP32[$this>>2]|0;
 $vtable3 = HEAP32[$3>>2]|0;
 $vfn = ((($vtable3)) + 24|0);
 $4 = HEAP32[$vfn>>2]|0;
 $add$ptr4 = (($current_ptr) + ($offset_to_base$0)|0);
 $and6 = $0 & 2;
 $tobool7 = ($and6|0)!=(0);
 $cond = $tobool7 ? $path_below : 2;
 FUNCTION_TABLE_viiiii[$4 & 31]($3,$info,$add$ptr4,$cond,$use_strcmp);
 return;
}
function ___cxa_can_catch($catchType,$excpType,$thrown) {
 $catchType = $catchType|0;
 $excpType = $excpType|0;
 $thrown = $thrown|0;
 var $0 = 0, $1 = 0, $2 = 0, $call = 0, $conv = 0, $temp = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $temp = sp;
 $0 = HEAP32[$thrown>>2]|0;
 HEAP32[$temp>>2] = $0;
 $vtable = HEAP32[$catchType>>2]|0;
 $vfn = ((($vtable)) + 16|0);
 $1 = HEAP32[$vfn>>2]|0;
 $call = (FUNCTION_TABLE_iiii[$1 & 31]($catchType,$excpType,$temp)|0);
 $conv = $call&1;
 if ($call) {
  $2 = HEAP32[$temp>>2]|0;
  HEAP32[$thrown>>2] = $2;
 }
 STACKTOP = sp;return ($conv|0);
}
function ___cxa_is_pointer_type($type) {
 $type = $type|0;
 var $0 = 0, $1 = 0, $2 = 0, $conv = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($type|0)==(0|0);
 if ($0) {
  $2 = 0;
 } else {
  $1 = (___dynamic_cast($type,216,272,0)|0);
  $phitmp = ($1|0)!=(0|0);
  $2 = $phitmp;
 }
 $conv = $2&1;
 return ($conv|0);
}
function runPostSets() {
}
function _i64Subtract(a, b, c, d) {
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a - c)>>>0;
    h = (b - d)>>>0;
    h = (b - d - (((c>>>0) > (a>>>0))|0))>>>0; // Borrow one from high word to low word on underflow.
    return ((tempRet0 = h,l|0)|0);
}
function _i64Add(a, b, c, d) {
    /*
      x = a + b*2^32
      y = c + d*2^32
      result = l + h*2^32
    */
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a + c)>>>0;
    h = (b + d + (((l>>>0) < (a>>>0))|0))>>>0; // Add carry from low word to high word on overflow.
    return ((tempRet0 = h,l|0)|0);
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var stop = 0, value4 = 0, stop4 = 0, unaligned = 0;
    stop = (ptr + num)|0;
    if ((num|0) >= 20) {
      // This is unaligned, but quite large, so work hard to get to aligned settings
      value = value & 0xff;
      unaligned = ptr & 3;
      value4 = value | (value << 8) | (value << 16) | (value << 24);
      stop4 = stop & ~3;
      if (unaligned) {
        unaligned = (ptr + 4 - unaligned)|0;
        while ((ptr|0) < (unaligned|0)) { // no need to check for stop, since we have large num
          HEAP8[((ptr)>>0)]=value;
          ptr = (ptr+1)|0;
        }
      }
      while ((ptr|0) < (stop4|0)) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    while ((ptr|0) < (stop|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (ptr-num)|0;
}
function _bitshift64Shl(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = (high << bits) | ((low&(ander << (32 - bits))) >>> (32 - bits));
      return low << bits;
    }
    tempRet0 = low << (bits - 32);
    return 0;
}
function _bitshift64Lshr(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = high >>> bits;
      return (low >>> bits) | ((high&ander) << (32 - bits));
    }
    tempRet0 = 0;
    return (high >>> (bits - 32))|0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if ((num|0) >= 4096) return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    ret = dest|0;
    if ((dest&3) == (src&3)) {
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      while ((num|0) >= 4) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
        num = (num-4)|0;
      }
    }
    while ((num|0) > 0) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
      num = (num-1)|0;
    }
    return ret|0;
}
function _llvm_cttz_i32(x) {
    x = x|0;
    var ret = 0;
    ret = ((HEAP8[(((cttz_i8)+(x & 0xff))>>0)])|0);
    if ((ret|0) < 8) return ret|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 8)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 8)|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 16)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 16)|0;
    return (((HEAP8[(((cttz_i8)+(x >>> 24))>>0)])|0) + 24)|0;
}
function ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    $rem = $rem | 0;
    var $n_sroa_0_0_extract_trunc = 0, $n_sroa_1_4_extract_shift$0 = 0, $n_sroa_1_4_extract_trunc = 0, $d_sroa_0_0_extract_trunc = 0, $d_sroa_1_4_extract_shift$0 = 0, $d_sroa_1_4_extract_trunc = 0, $4 = 0, $17 = 0, $37 = 0, $49 = 0, $51 = 0, $57 = 0, $58 = 0, $66 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $105 = 0, $117 = 0, $119 = 0, $125 = 0, $126 = 0, $130 = 0, $q_sroa_1_1_ph = 0, $q_sroa_0_1_ph = 0, $r_sroa_1_1_ph = 0, $r_sroa_0_1_ph = 0, $sr_1_ph = 0, $d_sroa_0_0_insert_insert99$0 = 0, $d_sroa_0_0_insert_insert99$1 = 0, $137$0 = 0, $137$1 = 0, $carry_0203 = 0, $sr_1202 = 0, $r_sroa_0_1201 = 0, $r_sroa_1_1200 = 0, $q_sroa_0_1199 = 0, $q_sroa_1_1198 = 0, $147 = 0, $149 = 0, $r_sroa_0_0_insert_insert42$0 = 0, $r_sroa_0_0_insert_insert42$1 = 0, $150$1 = 0, $151$0 = 0, $152 = 0, $154$0 = 0, $r_sroa_0_0_extract_trunc = 0, $r_sroa_1_4_extract_trunc = 0, $155 = 0, $carry_0_lcssa$0 = 0, $carry_0_lcssa$1 = 0, $r_sroa_0_1_lcssa = 0, $r_sroa_1_1_lcssa = 0, $q_sroa_0_1_lcssa = 0, $q_sroa_1_1_lcssa = 0, $q_sroa_0_0_insert_ext75$0 = 0, $q_sroa_0_0_insert_ext75$1 = 0, $q_sroa_0_0_insert_insert77$1 = 0, $_0$0 = 0, $_0$1 = 0;
    $n_sroa_0_0_extract_trunc = $a$0;
    $n_sroa_1_4_extract_shift$0 = $a$1;
    $n_sroa_1_4_extract_trunc = $n_sroa_1_4_extract_shift$0;
    $d_sroa_0_0_extract_trunc = $b$0;
    $d_sroa_1_4_extract_shift$0 = $b$1;
    $d_sroa_1_4_extract_trunc = $d_sroa_1_4_extract_shift$0;
    if (($n_sroa_1_4_extract_trunc | 0) == 0) {
      $4 = ($rem | 0) != 0;
      if (($d_sroa_1_4_extract_trunc | 0) == 0) {
        if ($4) {
          HEAP32[$rem >> 2] = ($n_sroa_0_0_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
          HEAP32[$rem + 4 >> 2] = 0;
        }
        $_0$1 = 0;
        $_0$0 = ($n_sroa_0_0_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$4) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
    }
    $17 = ($d_sroa_1_4_extract_trunc | 0) == 0;
    do {
      if (($d_sroa_0_0_extract_trunc | 0) == 0) {
        if ($17) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
            HEAP32[$rem + 4 >> 2] = 0;
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        if (($n_sroa_0_0_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0;
            HEAP32[$rem + 4 >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_1_4_extract_trunc >>> 0);
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_1_4_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $37 = $d_sroa_1_4_extract_trunc - 1 | 0;
        if (($37 & $d_sroa_1_4_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0 | $a$0 & -1;
            HEAP32[$rem + 4 >> 2] = $37 & $n_sroa_1_4_extract_trunc | $a$1 & 0;
          }
          $_0$1 = 0;
          $_0$0 = $n_sroa_1_4_extract_trunc >>> ((_llvm_cttz_i32($d_sroa_1_4_extract_trunc | 0) | 0) >>> 0);
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $49 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
        $51 = $49 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
        if ($51 >>> 0 <= 30) {
          $57 = $51 + 1 | 0;
          $58 = 31 - $51 | 0;
          $sr_1_ph = $57;
          $r_sroa_0_1_ph = $n_sroa_1_4_extract_trunc << $58 | $n_sroa_0_0_extract_trunc >>> ($57 >>> 0);
          $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($57 >>> 0);
          $q_sroa_0_1_ph = 0;
          $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $58;
          break;
        }
        if (($rem | 0) == 0) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = 0 | $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$17) {
          $117 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
          $119 = $117 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          if ($119 >>> 0 <= 31) {
            $125 = $119 + 1 | 0;
            $126 = 31 - $119 | 0;
            $130 = $119 - 31 >> 31;
            $sr_1_ph = $125;
            $r_sroa_0_1_ph = $n_sroa_0_0_extract_trunc >>> ($125 >>> 0) & $130 | $n_sroa_1_4_extract_trunc << $126;
            $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($125 >>> 0) & $130;
            $q_sroa_0_1_ph = 0;
            $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $126;
            break;
          }
          if (($rem | 0) == 0) {
            $_0$1 = 0;
            $_0$0 = 0;
            return (tempRet0 = $_0$1, $_0$0) | 0;
          }
          HEAP32[$rem >> 2] = 0 | $a$0 & -1;
          HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $66 = $d_sroa_0_0_extract_trunc - 1 | 0;
        if (($66 & $d_sroa_0_0_extract_trunc | 0) != 0) {
          $86 = (Math_clz32($d_sroa_0_0_extract_trunc | 0) | 0) + 33 | 0;
          $88 = $86 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          $89 = 64 - $88 | 0;
          $91 = 32 - $88 | 0;
          $92 = $91 >> 31;
          $95 = $88 - 32 | 0;
          $105 = $95 >> 31;
          $sr_1_ph = $88;
          $r_sroa_0_1_ph = $91 - 1 >> 31 & $n_sroa_1_4_extract_trunc >>> ($95 >>> 0) | ($n_sroa_1_4_extract_trunc << $91 | $n_sroa_0_0_extract_trunc >>> ($88 >>> 0)) & $105;
          $r_sroa_1_1_ph = $105 & $n_sroa_1_4_extract_trunc >>> ($88 >>> 0);
          $q_sroa_0_1_ph = $n_sroa_0_0_extract_trunc << $89 & $92;
          $q_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc << $89 | $n_sroa_0_0_extract_trunc >>> ($95 >>> 0)) & $92 | $n_sroa_0_0_extract_trunc << $91 & $88 - 33 >> 31;
          break;
        }
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = $66 & $n_sroa_0_0_extract_trunc;
          HEAP32[$rem + 4 >> 2] = 0;
        }
        if (($d_sroa_0_0_extract_trunc | 0) == 1) {
          $_0$1 = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$0 = 0 | $a$0 & -1;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        } else {
          $78 = _llvm_cttz_i32($d_sroa_0_0_extract_trunc | 0) | 0;
          $_0$1 = 0 | $n_sroa_1_4_extract_trunc >>> ($78 >>> 0);
          $_0$0 = $n_sroa_1_4_extract_trunc << 32 - $78 | $n_sroa_0_0_extract_trunc >>> ($78 >>> 0) | 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
      }
    } while (0);
    if (($sr_1_ph | 0) == 0) {
      $q_sroa_1_1_lcssa = $q_sroa_1_1_ph;
      $q_sroa_0_1_lcssa = $q_sroa_0_1_ph;
      $r_sroa_1_1_lcssa = $r_sroa_1_1_ph;
      $r_sroa_0_1_lcssa = $r_sroa_0_1_ph;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = 0;
    } else {
      $d_sroa_0_0_insert_insert99$0 = 0 | $b$0 & -1;
      $d_sroa_0_0_insert_insert99$1 = $d_sroa_1_4_extract_shift$0 | $b$1 & 0;
      $137$0 = _i64Add($d_sroa_0_0_insert_insert99$0 | 0, $d_sroa_0_0_insert_insert99$1 | 0, -1, -1) | 0;
      $137$1 = tempRet0;
      $q_sroa_1_1198 = $q_sroa_1_1_ph;
      $q_sroa_0_1199 = $q_sroa_0_1_ph;
      $r_sroa_1_1200 = $r_sroa_1_1_ph;
      $r_sroa_0_1201 = $r_sroa_0_1_ph;
      $sr_1202 = $sr_1_ph;
      $carry_0203 = 0;
      while (1) {
        $147 = $q_sroa_0_1199 >>> 31 | $q_sroa_1_1198 << 1;
        $149 = $carry_0203 | $q_sroa_0_1199 << 1;
        $r_sroa_0_0_insert_insert42$0 = 0 | ($r_sroa_0_1201 << 1 | $q_sroa_1_1198 >>> 31);
        $r_sroa_0_0_insert_insert42$1 = $r_sroa_0_1201 >>> 31 | $r_sroa_1_1200 << 1 | 0;
        _i64Subtract($137$0 | 0, $137$1 | 0, $r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0) | 0;
        $150$1 = tempRet0;
        $151$0 = $150$1 >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1;
        $152 = $151$0 & 1;
        $154$0 = _i64Subtract($r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0, $151$0 & $d_sroa_0_0_insert_insert99$0 | 0, ((($150$1 | 0) < 0 ? -1 : 0) >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1) & $d_sroa_0_0_insert_insert99$1 | 0) | 0;
        $r_sroa_0_0_extract_trunc = $154$0;
        $r_sroa_1_4_extract_trunc = tempRet0;
        $155 = $sr_1202 - 1 | 0;
        if (($155 | 0) == 0) {
          break;
        } else {
          $q_sroa_1_1198 = $147;
          $q_sroa_0_1199 = $149;
          $r_sroa_1_1200 = $r_sroa_1_4_extract_trunc;
          $r_sroa_0_1201 = $r_sroa_0_0_extract_trunc;
          $sr_1202 = $155;
          $carry_0203 = $152;
        }
      }
      $q_sroa_1_1_lcssa = $147;
      $q_sroa_0_1_lcssa = $149;
      $r_sroa_1_1_lcssa = $r_sroa_1_4_extract_trunc;
      $r_sroa_0_1_lcssa = $r_sroa_0_0_extract_trunc;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = $152;
    }
    $q_sroa_0_0_insert_ext75$0 = $q_sroa_0_1_lcssa;
    $q_sroa_0_0_insert_ext75$1 = 0;
    $q_sroa_0_0_insert_insert77$1 = $q_sroa_1_1_lcssa | $q_sroa_0_0_insert_ext75$1;
    if (($rem | 0) != 0) {
      HEAP32[$rem >> 2] = 0 | $r_sroa_0_1_lcssa;
      HEAP32[$rem + 4 >> 2] = $r_sroa_1_1_lcssa | 0;
    }
    $_0$1 = (0 | $q_sroa_0_0_insert_ext75$0) >>> 31 | $q_sroa_0_0_insert_insert77$1 << 1 | ($q_sroa_0_0_insert_ext75$1 << 1 | $q_sroa_0_0_insert_ext75$0 >>> 31) & 0 | $carry_0_lcssa$1;
    $_0$0 = ($q_sroa_0_0_insert_ext75$0 << 1 | 0 >>> 31) & -2 | $carry_0_lcssa$0;
    return (tempRet0 = $_0$1, $_0$0) | 0;
}
function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $1$0 = 0;
    $1$0 = ___udivmoddi4($a$0, $a$1, $b$0, $b$1, 0) | 0;
    return $1$0 | 0;
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    oldDynamicTop = HEAP32[DYNAMICTOP_PTR>>2]|0;
    newDynamicTop = oldDynamicTop + increment | 0;

    if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
      | (newDynamicTop|0) < 0) { // Also underflow, sbrk() should be able to be used to subtract.
      abortOnCannotGrowMemory()|0;
      ___setErrNo(12);
      return -1;
    }

    HEAP32[DYNAMICTOP_PTR>>2] = newDynamicTop;
    totalMemory = getTotalMemory()|0;
    if ((newDynamicTop|0) > (totalMemory|0)) {
      if ((enlargeMemory()|0) == 0) {
        ___setErrNo(12);
        HEAP32[DYNAMICTOP_PTR>>2] = oldDynamicTop;
        return -1;
      }
    }
    return oldDynamicTop|0;
}
function ___uremdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $rem = 0, __stackBase__ = 0;
    __stackBase__ = STACKTOP;
    STACKTOP = STACKTOP + 16 | 0;
    $rem = __stackBase__ | 0;
    ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) | 0;
    STACKTOP = __stackBase__;
    return (tempRet0 = HEAP32[$rem + 4 >> 2] | 0, HEAP32[$rem >> 2] | 0) | 0;
}
function _pthread_self() {
    return 0;
}

  
function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&31](a1|0,a2|0,a3|0)|0;
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&31](a1|0,a2|0,a3|0,a4|0,a5|0);
}


function dynCall_i(index) {
  index = index|0;
  
  return FUNCTION_TABLE_i[index&31]()|0;
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&31](a1|0);
}


function dynCall_vii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  FUNCTION_TABLE_vii[index&31](a1|0,a2|0);
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&1](a1|0)|0;
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&31]();
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&31](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&31](a1|0,a2|0,a3|0,a4|0);
}

function b0(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_iiii(0);return 0;
}
function b1(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; nullFunc_viiiii(1);
}
function b2() {
 ; nullFunc_i(2);return 0;
}
function b3(p0) {
 p0 = p0|0; nullFunc_vi(3);
}
function __emval_decref__wrapper(p0) {
 p0 = p0|0; __emval_decref(p0|0);
}
function b4(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_vii(4);
}
function b5(p0) {
 p0 = p0|0; nullFunc_ii(5);return 0;
}
function b6() {
 ; nullFunc_v(6);
}
function ___cxa_end_catch__wrapper() {
 ; ___cxa_end_catch();
}
function b7(p0,p1,p2,p3,p4,p5) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0; nullFunc_viiiiii(7);
}
function b8(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_viiii(8);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,b0,___stdio_write,___stdio_seek,___stdout_write,b0,b0,b0,b0,b0,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,b0,b0,b0,b0,b0,b0,b0,b0,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0];
var FUNCTION_TABLE_viiiii = [b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b1,b1,b1,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b1,b1,b1,b1,b1,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b1,b1,b1,b1,b1,b1
,b1,b1,b1];
var FUNCTION_TABLE_i = [b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,___cxa_get_globals_fast,b2,b2];
var FUNCTION_TABLE_vi = [b3,b3,b3,b3,b3,b3,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,b3,b3,b3,b3,__ZN10__cxxabiv120__si_class_type_infoD0Ev,b3,b3,b3,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,b3,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,b3,b3,b3,__ZN10emscripten3valD2Ev,__emval_decref__wrapper,_cleanup_387,b3,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv
,b3,b3,b3];
var FUNCTION_TABLE_vii = [b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
,b4,_abort_message,b4];
var FUNCTION_TABLE_ii = [b5,___stdio_close];
var FUNCTION_TABLE_v = [b6,b6,b6,b6,b6,__ZL25default_terminate_handlerv,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b6
,b6,b6,___cxa_end_catch__wrapper];
var FUNCTION_TABLE_viiiiii = [b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b7,b7,b7,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b7,b7,b7,b7,b7,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b7,b7,b7,b7,b7,b7,b7
,b7,b7,b7];
var FUNCTION_TABLE_viiii = [b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b8,b8,b8,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b8,b8,b8,b8,b8,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b8,b8,b8,b8,b8
,b8,b8,b8];

  return { _llvm_cttz_i32: _llvm_cttz_i32, ___cxa_can_catch: ___cxa_can_catch, _fflush: _fflush, ___udivmoddi4: ___udivmoddi4, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _i64Add: _i64Add, _pthread_self: _pthread_self, _emscripten_bind_VoidPtr___destroy___0: _emscripten_bind_VoidPtr___destroy___0, _i64Subtract: _i64Subtract, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, ___getTypeName: ___getTypeName, _sbrk: _sbrk, _bitshift64Lshr: _bitshift64Lshr, _free: _free, ___udivdi3: ___udivdi3, ___uremdi3: ___uremdi3, ___errno_location: ___errno_location, _bitshift64Shl: _bitshift64Shl, __GLOBAL__sub_I_app_cpp: __GLOBAL__sub_I_app_cpp, __GLOBAL__sub_I_glue_wrapper_cpp: __GLOBAL__sub_I_glue_wrapper_cpp, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_i: dynCall_i, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);

var real__bitshift64Lshr = asm["_bitshift64Lshr"]; asm["_bitshift64Lshr"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__bitshift64Lshr.apply(null, arguments);
};

var real___GLOBAL__sub_I_glue_wrapper_cpp = asm["__GLOBAL__sub_I_glue_wrapper_cpp"]; asm["__GLOBAL__sub_I_glue_wrapper_cpp"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real___GLOBAL__sub_I_glue_wrapper_cpp.apply(null, arguments);
};

var real__bitshift64Shl = asm["_bitshift64Shl"]; asm["_bitshift64Shl"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__bitshift64Shl.apply(null, arguments);
};

var real__fflush = asm["_fflush"]; asm["_fflush"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__fflush.apply(null, arguments);
};

var real____cxa_is_pointer_type = asm["___cxa_is_pointer_type"]; asm["___cxa_is_pointer_type"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____cxa_is_pointer_type.apply(null, arguments);
};

var real__emscripten_bind_VoidPtr___destroy___0 = asm["_emscripten_bind_VoidPtr___destroy___0"]; asm["_emscripten_bind_VoidPtr___destroy___0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_VoidPtr___destroy___0.apply(null, arguments);
};

var real__llvm_cttz_i32 = asm["_llvm_cttz_i32"]; asm["_llvm_cttz_i32"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__llvm_cttz_i32.apply(null, arguments);
};

var real__sbrk = asm["_sbrk"]; asm["_sbrk"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__sbrk.apply(null, arguments);
};

var real___GLOBAL__sub_I_app_cpp = asm["__GLOBAL__sub_I_app_cpp"]; asm["__GLOBAL__sub_I_app_cpp"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real___GLOBAL__sub_I_app_cpp.apply(null, arguments);
};

var real____uremdi3 = asm["___uremdi3"]; asm["___uremdi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____uremdi3.apply(null, arguments);
};

var real__i64Subtract = asm["_i64Subtract"]; asm["_i64Subtract"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Subtract.apply(null, arguments);
};

var real___GLOBAL__sub_I_bind_cpp = asm["__GLOBAL__sub_I_bind_cpp"]; asm["__GLOBAL__sub_I_bind_cpp"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real___GLOBAL__sub_I_bind_cpp.apply(null, arguments);
};

var real____udivmoddi4 = asm["___udivmoddi4"]; asm["___udivmoddi4"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____udivmoddi4.apply(null, arguments);
};

var real__i64Add = asm["_i64Add"]; asm["_i64Add"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Add.apply(null, arguments);
};

var real__pthread_self = asm["_pthread_self"]; asm["_pthread_self"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__pthread_self.apply(null, arguments);
};

var real____getTypeName = asm["___getTypeName"]; asm["___getTypeName"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____getTypeName.apply(null, arguments);
};

var real____udivdi3 = asm["___udivdi3"]; asm["___udivdi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____udivdi3.apply(null, arguments);
};

var real____errno_location = asm["___errno_location"]; asm["___errno_location"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____errno_location.apply(null, arguments);
};

var real____cxa_can_catch = asm["___cxa_can_catch"]; asm["___cxa_can_catch"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____cxa_can_catch.apply(null, arguments);
};

var real__free = asm["_free"]; asm["_free"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__free.apply(null, arguments);
};

var real__malloc = asm["_malloc"]; asm["_malloc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__malloc.apply(null, arguments);
};
var _memset = Module["_memset"] = asm["_memset"];
var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];
var __GLOBAL__sub_I_glue_wrapper_cpp = Module["__GLOBAL__sub_I_glue_wrapper_cpp"] = asm["__GLOBAL__sub_I_glue_wrapper_cpp"];
var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];
var _fflush = Module["_fflush"] = asm["_fflush"];
var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = asm["___cxa_is_pointer_type"];
var _emscripten_bind_VoidPtr___destroy___0 = Module["_emscripten_bind_VoidPtr___destroy___0"] = asm["_emscripten_bind_VoidPtr___destroy___0"];
var _llvm_cttz_i32 = Module["_llvm_cttz_i32"] = asm["_llvm_cttz_i32"];
var _sbrk = Module["_sbrk"] = asm["_sbrk"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var __GLOBAL__sub_I_app_cpp = Module["__GLOBAL__sub_I_app_cpp"] = asm["__GLOBAL__sub_I_app_cpp"];
var ___uremdi3 = Module["___uremdi3"] = asm["___uremdi3"];
var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];
var __GLOBAL__sub_I_bind_cpp = Module["__GLOBAL__sub_I_bind_cpp"] = asm["__GLOBAL__sub_I_bind_cpp"];
var ___udivmoddi4 = Module["___udivmoddi4"] = asm["___udivmoddi4"];
var _i64Add = Module["_i64Add"] = asm["_i64Add"];
var _pthread_self = Module["_pthread_self"] = asm["_pthread_self"];
var ___getTypeName = Module["___getTypeName"] = asm["___getTypeName"];
var ___udivdi3 = Module["___udivdi3"] = asm["___udivdi3"];
var ___errno_location = Module["___errno_location"] = asm["___errno_location"];
var ___cxa_can_catch = Module["___cxa_can_catch"] = asm["___cxa_can_catch"];
var _free = Module["_free"] = asm["_free"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_i = Module["dynCall_i"] = asm["dynCall_i"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
;

Runtime.stackAlloc = asm['stackAlloc'];
Runtime.stackSave = asm['stackSave'];
Runtime.stackRestore = asm['stackRestore'];
Runtime.establishStackSpace = asm['establishStackSpace'];

Runtime.setTempRet0 = asm['setTempRet0'];
Runtime.getTempRet0 = asm['getTempRet0'];



// === Auto-generated postamble setup entry stuff ===





function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var preloadStartTime = null;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun']) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  args = args || [];

  ensureInitRuntime();

  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString(Module['thisProgram']), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);


  try {

    var ret = Module['_main'](argc, argv, 0);


    // if we're not running an evented main loop, it's time to exit
    exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
      throw e;
    }
  } finally {
    calledMain = true;
  }
}




function run(args) {
  args = args || Module['arguments'];

  if (preloadStartTime === null) preloadStartTime = Date.now();

  if (runDependencies > 0) {
    Module.printErr('run() called, but dependencies remain, so not running');
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    if (ABORT) return;

    ensureInitRuntime();

    preMain();

    if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
      Module.printErr('pre-main prep time: ' + (Date.now() - preloadStartTime) + ' ms');
    }

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (Module['_main'] && shouldRunNow) Module['callMain'](args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = Module.run = run;

function exit(status, implicit) {
  if (implicit && Module['noExitRuntime']) {
    Module.printErr('exit(' + status + ') implicitly called by end of main(), but noExitRuntime, so not exiting the runtime (you can use emscripten_force_exit, if you want to force a true shutdown)');
    return;
  }

  if (Module['noExitRuntime']) {
    Module.printErr('exit(' + status + ') called, but noExitRuntime, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)');
  } else {

    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  if (ENVIRONMENT_IS_NODE) {
    process['exit'](status);
  } else if (ENVIRONMENT_IS_SHELL && typeof quit === 'function') {
    quit(status);
  }
  // if we reach here, we must throw an exception to halt the current execution
  throw new ExitStatus(status);
}
Module['exit'] = Module.exit = exit;

var abortDecorators = [];

function abort(what) {
  if (what !== undefined) {
    Module.print(what);
    Module.printErr(what);
    what = JSON.stringify(what)
  } else {
    what = '';
  }

  ABORT = true;
  EXITSTATUS = 1;

  var extra = '';

  var output = 'abort(' + what + ') at ' + stackTrace() + extra;
  if (abortDecorators) {
    abortDecorators.forEach(function(decorator) {
      output = decorator(output, what);
    });
  }
  throw output;
}
Module['abort'] = Module.abort = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}


run();

// {{POST_RUN_ADDITIONS}}





// {{MODULE_ADDITIONS}}




// Bindings utilities

function WrapperObject() {
}
WrapperObject.prototype = Object.create(WrapperObject.prototype);
WrapperObject.prototype.constructor = WrapperObject;
WrapperObject.prototype.__class__ = WrapperObject;
WrapperObject.__cache__ = {};
Module['WrapperObject'] = WrapperObject;

function getCache(__class__) {
  return (__class__ || WrapperObject).__cache__;
}
Module['getCache'] = getCache;

function wrapPointer(ptr, __class__) {
  var cache = getCache(__class__);
  var ret = cache[ptr];
  if (ret) return ret;
  ret = Object.create((__class__ || WrapperObject).prototype);
  ret.ptr = ptr;
  return cache[ptr] = ret;
}
Module['wrapPointer'] = wrapPointer;

function castObject(obj, __class__) {
  return wrapPointer(obj.ptr, __class__);
}
Module['castObject'] = castObject;

Module['NULL'] = wrapPointer(0);

function destroy(obj) {
  if (!obj['__destroy__']) throw 'Error: Cannot destroy object. (Did you create it yourself?)';
  obj['__destroy__']();
  // Remove from cache, so the object can be GC'd and refs added onto it released
  delete getCache(obj.__class__)[obj.ptr];
}
Module['destroy'] = destroy;

function compare(obj1, obj2) {
  return obj1.ptr === obj2.ptr;
}
Module['compare'] = compare;

function getPointer(obj) {
  return obj.ptr;
}
Module['getPointer'] = getPointer;

function getClass(obj) {
  return obj.__class__;
}
Module['getClass'] = getClass;

// Converts big (string or array) values into a C-style storage, in temporary space

var ensureCache = {
  buffer: 0,  // the main buffer of temporary storage
  size: 0,   // the size of buffer
  pos: 0,    // the next free offset in buffer
  temps: [], // extra allocations
  needed: 0, // the total size we need next time

  prepare: function() {
    if (this.needed) {
      // clear the temps
      for (var i = 0; i < this.temps.length; i++) {
        Module['_free'](this.temps[i]);
      }
      this.temps.length = 0;
      // prepare to allocate a bigger buffer
      Module['_free'](this.buffer);
      this.buffer = 0;
      this.size += this.needed;
      // clean up
      this.needed = 0;
    }
    if (!this.buffer) { // happens first time, or when we need to grow
      this.size += 128; // heuristic, avoid many small grow events
      this.buffer = Module['_malloc'](this.size);
      assert(this.buffer);
    }
    this.pos = 0;
  },
  alloc: function(array, view) {
    assert(this.buffer);
    var bytes = view.BYTES_PER_ELEMENT;
    var len = array.length * bytes;
    len = (len + 7) & -8; // keep things aligned to 8 byte boundaries
    var ret;
    if (this.pos + len >= this.size) {
      // we failed to allocate in the buffer, this time around :(
      assert(len > 0); // null terminator, at least
      this.needed += len;
      ret = Module['_malloc'](len);
      this.temps.push(ret);
    } else {
      // we can allocate in the buffer
      ret = this.buffer + this.pos;
      this.pos += len;
    }
    var retShifted = ret;
    switch (bytes) {
      case 2: retShifted >>= 1; break;
      case 4: retShifted >>= 2; break;
      case 8: retShifted >>= 3; break;
    }
    for (var i = 0; i < array.length; i++) {
      view[retShifted + i] = array[i];
    }
    return ret;
  },
};

function ensureString(value) {
  if (typeof value === 'string') return ensureCache.alloc(intArrayFromString(value), HEAP8);
  return value;
}
function ensureInt8(value) {
  if (typeof value === 'object') return ensureCache.alloc(value, HEAP8);
  return value;
}
function ensureInt16(value) {
  if (typeof value === 'object') return ensureCache.alloc(value, HEAP16);
  return value;
}
function ensureInt32(value) {
  if (typeof value === 'object') return ensureCache.alloc(value, HEAP32);
  return value;
}
function ensureFloat32(value) {
  if (typeof value === 'object') return ensureCache.alloc(value, HEAPF32);
  return value;
}
function ensureFloat64(value) {
  if (typeof value === 'object') return ensureCache.alloc(value, HEAPF64);
  return value;
}


// VoidPtr
function VoidPtr() { throw "cannot construct a VoidPtr, no constructor in IDL" }
VoidPtr.prototype = Object.create(WrapperObject.prototype);
VoidPtr.prototype.constructor = VoidPtr;
VoidPtr.prototype.__class__ = VoidPtr;
VoidPtr.__cache__ = {};
Module['VoidPtr'] = VoidPtr;

  VoidPtr.prototype['__destroy__'] = VoidPtr.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_VoidPtr___destroy___0(self);
};
(function() {
  function setupEnums() {
    
  }
  if (Module['calledRun']) setupEnums();
  else addOnPreMain(setupEnums);
})();

	return Module;
	};
});
