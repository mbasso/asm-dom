
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


// H
function H() { throw "cannot construct a H, no constructor in IDL" }
H.prototype = Object.create(WrapperObject.prototype);
H.prototype.constructor = H;
H.prototype.__class__ = H;
H.__cache__ = {};
Module['H'] = H;

H.prototype['h'] = H.prototype.h = function(arg0, arg1) {
  var self = this.ptr;
  ensureCache.prepare();
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  if (arg1 === undefined) { return wrapPointer(_emscripten_bind_H_h_1(self, arg0), VNode) }
  return wrapPointer(_emscripten_bind_H_h_2(self, arg0, arg1), VNode);
};;

  H.prototype['__destroy__'] = H.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_H___destroy___0(self);
};
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
// VNodeData
function VNodeData() { throw "cannot construct a VNodeData, no constructor in IDL" }
VNodeData.prototype = Object.create(WrapperObject.prototype);
VNodeData.prototype.constructor = VNodeData;
VNodeData.prototype.__class__ = VNodeData;
VNodeData.__cache__ = {};
Module['VNodeData'] = VNodeData;

  VNodeData.prototype['get_key'] = VNodeData.prototype.get_key = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_VNodeData_get_key_0(self));
};
    VNodeData.prototype['set_key'] = VNodeData.prototype.set_key = function(arg0) {
  var self = this.ptr;
  ensureCache.prepare();
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_VNodeData_set_key_1(self, arg0);
};
  VNodeData.prototype['get_ns'] = VNodeData.prototype.get_ns = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_VNodeData_get_ns_0(self));
};
    VNodeData.prototype['set_ns'] = VNodeData.prototype.set_ns = function(arg0) {
  var self = this.ptr;
  ensureCache.prepare();
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_VNodeData_set_ns_1(self, arg0);
};
  VNodeData.prototype['__destroy__'] = VNodeData.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_VNodeData___destroy___0(self);
};
// VNode
function VNode() { throw "cannot construct a VNode, no constructor in IDL" }
VNode.prototype = Object.create(WrapperObject.prototype);
VNode.prototype.constructor = VNode;
VNode.prototype.__class__ = VNode;
VNode.__cache__ = {};
Module['VNode'] = VNode;

VNode.prototype['set_children'] = VNode.prototype.set_children = function(arg0, arg1) {
  var self = this.ptr;
  ensureCache.prepare();
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  _emscripten_bind_VNode_set_children_2(self, arg0, arg1);
};;

  VNode.prototype['get_sel'] = VNode.prototype.get_sel = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_VNode_get_sel_0(self));
};
    VNode.prototype['set_sel'] = VNode.prototype.set_sel = function(arg0) {
  var self = this.ptr;
  ensureCache.prepare();
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_VNode_set_sel_1(self, arg0);
};
  VNode.prototype['get_key'] = VNode.prototype.get_key = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_VNode_get_key_0(self));
};
    VNode.prototype['set_key'] = VNode.prototype.set_key = function(arg0) {
  var self = this.ptr;
  ensureCache.prepare();
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_VNode_set_key_1(self, arg0);
};
  VNode.prototype['get_text'] = VNode.prototype.get_text = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_VNode_get_text_0(self));
};
    VNode.prototype['set_text'] = VNode.prototype.set_text = function(arg0) {
  var self = this.ptr;
  ensureCache.prepare();
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_VNode_set_text_1(self, arg0);
};
  VNode.prototype['get_data'] = VNode.prototype.get_data = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_VNode_get_data_0(self), VNodeData);
};
    VNode.prototype['set_data'] = VNode.prototype.set_data = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_VNode_set_data_1(self, arg0);
};
  VNode.prototype['__destroy__'] = VNode.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_VNode___destroy___0(self);
};
(function() {
  function setupEnums() {
    
  }
  if (Module['calledRun']) setupEnums();
  else addOnPreMain(setupEnums);
})();
