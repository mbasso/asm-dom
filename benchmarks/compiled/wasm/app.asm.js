Module["asm"] =  (function(global, env, buffer) {
'almost asm';


  var Int8View = global.Int8Array;
  var HEAP8 = new Int8View(buffer);
  var Int16View = global.Int16Array;
  var HEAP16 = new Int16View(buffer);
  var Int32View = global.Int32Array;
  var HEAP32 = new Int32View(buffer);
  var Uint8View = global.Uint8Array;
  var HEAPU8 = new Uint8View(buffer);
  var Uint16View = global.Uint16Array;
  var HEAPU16 = new Uint16View(buffer);
  var Uint32View = global.Uint32Array;
  var HEAPU32 = new Uint32View(buffer);
  var Float32View = global.Float32Array;
  var HEAPF32 = new Float32View(buffer);
  var Float64View = global.Float64Array;
  var HEAPF64 = new Float64View(buffer);
  var byteLength = global.byteLength;

  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var cttz_i8=env.cttz_i8|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntS = 0, tempValue = 0, tempDouble = 0.0;
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
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _pthread_getspecific=env._pthread_getspecific;
  var __emval_get_method_caller=env.__emval_get_method_caller;
  var floatReadValueFromPointer=env.floatReadValueFromPointer;
  var simpleReadValueFromPointer=env.simpleReadValueFromPointer;
  var ___resumeException=env.___resumeException;
  var _pthread_key_create=env._pthread_key_create;
  var __embind_register_memory_view=env.__embind_register_memory_view;
  var throwInternalError=env.throwInternalError;
  var get_first_emval=env.get_first_emval;
  var _abort=env._abort;
  var __emval_set_property=env.__emval_set_property;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var requireHandle=env.requireHandle;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var extendError=env.extendError;
  var init_emval=env.init_emval;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var __emval_take_value=env.__emval_take_value;
  var _emscripten_asm_const_ii=env._emscripten_asm_const_ii;
  var getShiftFromSize=env.getShiftFromSize;
  var __emval_get_property=env.__emval_get_property;
  var __embind_register_emval=env.__embind_register_emval;
  var __emval_as=env.__emval_as;
  var _llvm_cttz_i32=env._llvm_cttz_i32;
  var ___setErrNo=env.___setErrNo;
  var __emval_register=env.__emval_register;
  var __embind_register_void=env.__embind_register_void;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var __embind_register_bool=env.__embind_register_bool;
  var _emscripten_asm_const_v=env._emscripten_asm_const_v;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var __emval_incref=env.__emval_incref;
  var _embind_repr=env._embind_repr;
  var __embind_register_std_wstring=env.__embind_register_std_wstring;
  var __emval_get_global=env.__emval_get_global;
  var createNamedFunction=env.createNamedFunction;
  var embind_init_charCodes=env.embind_init_charCodes;
  var readLatin1String=env.readLatin1String;
  var getStringOrSymbol=env.getStringOrSymbol;
  var throwUnboundTypeError=env.throwUnboundTypeError;
  var craftInvokerFunction=env.craftInvokerFunction;
  var __embind_register_integer=env.__embind_register_integer;
  var _pthread_once=env._pthread_once;
  var __emval_decref=env.__emval_decref;
  var runDestructors=env.runDestructors;
  var requireRegisteredType=env.requireRegisteredType;
  var makeLegalFunctionName=env.makeLegalFunctionName;
  var integerReadValueFromPointer=env.integerReadValueFromPointer;
  var __emval_addMethodCaller=env.__emval_addMethodCaller;
  var heap32VectorToArray=env.heap32VectorToArray;
  var __emval_lookupTypes=env.__emval_lookupTypes;
  var whenDependentTypesAreResolved=env.whenDependentTypesAreResolved;
  var _emscripten_asm_const_iii=env._emscripten_asm_const_iii;
  var __emval_call_method=env.__emval_call_method;
  var __emval_run_destructors=env.__emval_run_destructors;
  var emval_get_global=env.emval_get_global;
  var _emscripten_asm_const_iiii=env._emscripten_asm_const_iiii;
  var registerType=env.registerType;
  var __emval_allocateDestructors=env.__emval_allocateDestructors;
  var __emval_strictly_equals=env.__emval_strictly_equals;
  var __embind_register_function=env.__embind_register_function;
  var __emval_new_cstring=env.__emval_new_cstring;
  var ___syscall6=env.___syscall6;
  var throwBindingError=env.throwBindingError;
  var ensureOverloadTable=env.ensureOverloadTable;
  var count_emval_handles=env.count_emval_handles;
  var ___cxa_throw=env.___cxa_throw;
  var requireFunction=env.requireFunction;
  var __embind_register_float=env.__embind_register_float;
  var new_=env.new_;
  var ___syscall140=env.___syscall140;
  var getTypeName=env.getTypeName;
  var _pthread_setspecific=env._pthread_setspecific;
  var __embind_register_std_string=env.__embind_register_std_string;
  var replacePublicSymbol=env.replacePublicSymbol;
  var ___syscall146=env.___syscall146;
  var exposePublicSymbol=env.exposePublicSymbol;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

function _emscripten_replace_memory(newBuffer) {
  if ((byteLength(newBuffer) & 0xffffff || byteLength(newBuffer) <= 0xffffff) || byteLength(newBuffer) > 0x80000000) return false;
  HEAP8 = new Int8View(newBuffer);
  HEAP16 = new Int16View(newBuffer);
  HEAP32 = new Int32View(newBuffer);
  HEAPU8 = new Uint8View(newBuffer);
  HEAPU16 = new Uint16View(newBuffer);
  HEAPU32 = new Uint32View(newBuffer);
  HEAPF32 = new Float32View(newBuffer);
  HEAPF64 = new Float64View(newBuffer);
  buffer = newBuffer;
  return true;
}

// EMSCRIPTEN_START_FUNCS

function _malloc(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 do if (i1 >>> 0 < 245) {
  i12 = i1 >>> 0 < 11 ? 16 : i1 + 11 & -8;
  i10 = HEAP32[2392] | 0;
  if (i10 >>> (i12 >>> 3) & 3 | 0) {
   i3 = 9608 + ((i10 >>> (i12 >>> 3) & 1 ^ 1) + (i12 >>> 3) << 1 << 2) | 0;
   i1 = HEAP32[i3 + 8 >> 2] | 0;
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i3 | 0) == (i2 | 0)) HEAP32[2392] = i10 & ~(1 << (i10 >>> (i12 >>> 3) & 1 ^ 1) + (i12 >>> 3)); else {
    HEAP32[i2 + 12 >> 2] = i3;
    HEAP32[i3 + 8 >> 2] = i2;
   }
   i13 = (i10 >>> (i12 >>> 3) & 1 ^ 1) + (i12 >>> 3) << 3;
   HEAP32[i1 + 4 >> 2] = i13 | 3;
   HEAP32[i1 + i13 + 4 >> 2] = HEAP32[i1 + i13 + 4 >> 2] | 1;
   i13 = i1 + 8 | 0;
   STACKTOP = i14;
   return i13 | 0;
  }
  i11 = HEAP32[2394] | 0;
  if (i12 >>> 0 > i11 >>> 0) {
   if (i10 >>> (i12 >>> 3) | 0) {
    i1 = i10 >>> (i12 >>> 3) << (i12 >>> 3) & (2 << (i12 >>> 3) | 0 - (2 << (i12 >>> 3)));
    i4 = ((i1 & 0 - i1) + -1 | 0) >>> (((i1 & 0 - i1) + -1 | 0) >>> 12 & 16);
    i5 = i4 >>> (i4 >>> 5 & 8) >>> (i4 >>> (i4 >>> 5 & 8) >>> 2 & 4);
    i5 = (i4 >>> 5 & 8 | ((i1 & 0 - i1) + -1 | 0) >>> 12 & 16 | i4 >>> (i4 >>> 5 & 8) >>> 2 & 4 | i5 >>> 1 & 2 | i5 >>> (i5 >>> 1 & 2) >>> 1 & 1) + (i5 >>> (i5 >>> 1 & 2) >>> (i5 >>> (i5 >>> 1 & 2) >>> 1 & 1)) | 0;
    i4 = HEAP32[9608 + (i5 << 1 << 2) + 8 >> 2] | 0;
    i1 = HEAP32[i4 + 8 >> 2] | 0;
    if ((9608 + (i5 << 1 << 2) | 0) == (i1 | 0)) {
     HEAP32[2392] = i10 & ~(1 << i5);
     i1 = i10 & ~(1 << i5);
    } else {
     HEAP32[i1 + 12 >> 2] = 9608 + (i5 << 1 << 2);
     HEAP32[9608 + (i5 << 1 << 2) + 8 >> 2] = i1;
     i1 = i10;
    }
    HEAP32[i4 + 4 >> 2] = i12 | 3;
    HEAP32[i4 + i12 + 4 >> 2] = (i5 << 3) - i12 | 1;
    HEAP32[i4 + i12 + ((i5 << 3) - i12) >> 2] = (i5 << 3) - i12;
    if (i11 | 0) {
     i3 = HEAP32[2397] | 0;
     if (!(i1 & 1 << (i11 >>> 3))) {
      HEAP32[2392] = i1 | 1 << (i11 >>> 3);
      i1 = 9608 + (i11 >>> 3 << 1 << 2) + 8 | 0;
      i2 = 9608 + (i11 >>> 3 << 1 << 2) | 0;
     } else {
      i1 = 9608 + (i11 >>> 3 << 1 << 2) + 8 | 0;
      i2 = HEAP32[9608 + (i11 >>> 3 << 1 << 2) + 8 >> 2] | 0;
     }
     HEAP32[i1 >> 2] = i3;
     HEAP32[i2 + 12 >> 2] = i3;
     HEAP32[i3 + 8 >> 2] = i2;
     HEAP32[i3 + 12 >> 2] = 9608 + (i11 >>> 3 << 1 << 2);
    }
    HEAP32[2394] = (i5 << 3) - i12;
    HEAP32[2397] = i4 + i12;
    i13 = i4 + 8 | 0;
    STACKTOP = i14;
    return i13 | 0;
   }
   i9 = HEAP32[2393] | 0;
   if (i9) {
    i2 = ((i9 & 0 - i9) + -1 | 0) >>> (((i9 & 0 - i9) + -1 | 0) >>> 12 & 16);
    i3 = i2 >>> (i2 >>> 5 & 8) >>> (i2 >>> (i2 >>> 5 & 8) >>> 2 & 4);
    i3 = HEAP32[9872 + ((i2 >>> 5 & 8 | ((i9 & 0 - i9) + -1 | 0) >>> 12 & 16 | i2 >>> (i2 >>> 5 & 8) >>> 2 & 4 | i3 >>> 1 & 2 | i3 >>> (i3 >>> 1 & 2) >>> 1 & 1) + (i3 >>> (i3 >>> 1 & 2) >>> (i3 >>> (i3 >>> 1 & 2) >>> 1 & 1)) << 2) >> 2] | 0;
    i2 = (HEAP32[i3 + 4 >> 2] & -8) - i12 | 0;
    i1 = HEAP32[i3 + 16 + (((HEAP32[i3 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
    if (!i1) {
     i8 = i2;
     i7 = i3;
    } else {
     do {
      i7 = (HEAP32[i1 + 4 >> 2] & -8) - i12 | 0;
      i8 = i7 >>> 0 < i2 >>> 0;
      i2 = i8 ? i7 : i2;
      i3 = i8 ? i1 : i3;
      i1 = HEAP32[i1 + 16 + (((HEAP32[i1 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
     } while ((i1 | 0) != 0);
     i8 = i2;
     i7 = i3;
    }
    i6 = i7 + i12 | 0;
    if (i7 >>> 0 < i6 >>> 0) {
     i5 = HEAP32[i7 + 24 >> 2] | 0;
     i1 = HEAP32[i7 + 12 >> 2] | 0;
     do if ((i1 | 0) == (i7 | 0)) {
      i2 = i7 + 20 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
      if (!i1) {
       i2 = i7 + 16 | 0;
       i1 = HEAP32[i2 >> 2] | 0;
       if (!i1) {
        i3 = 0;
        break;
       }
      }
      while (1) {
       i4 = i1 + 20 | 0;
       i3 = HEAP32[i4 >> 2] | 0;
       if (i3 | 0) {
        i1 = i3;
        i2 = i4;
        continue;
       }
       i4 = i1 + 16 | 0;
       i3 = HEAP32[i4 >> 2] | 0;
       if (!i3) break; else {
        i1 = i3;
        i2 = i4;
       }
      }
      HEAP32[i2 >> 2] = 0;
      i3 = i1;
     } else {
      i3 = HEAP32[i7 + 8 >> 2] | 0;
      HEAP32[i3 + 12 >> 2] = i1;
      HEAP32[i1 + 8 >> 2] = i3;
      i3 = i1;
     } while (0);
     do if (i5 | 0) {
      i1 = HEAP32[i7 + 28 >> 2] | 0;
      i2 = (i3 | 0) == 0;
      if ((i7 | 0) == (HEAP32[9872 + (i1 << 2) >> 2] | 0)) {
       HEAP32[9872 + (i1 << 2) >> 2] = i3;
       if (i2) {
        HEAP32[2393] = i9 & ~(1 << i1);
        break;
       }
      } else {
       HEAP32[i5 + 16 + (((HEAP32[i5 + 16 >> 2] | 0) != (i7 | 0) & 1) << 2) >> 2] = i3;
       if (i2) break;
      }
      HEAP32[i3 + 24 >> 2] = i5;
      i1 = HEAP32[i7 + 16 >> 2] | 0;
      if (i1 | 0) {
       HEAP32[i3 + 16 >> 2] = i1;
       HEAP32[i1 + 24 >> 2] = i3;
      }
      i1 = HEAP32[i7 + 20 >> 2] | 0;
      if (i1 | 0) {
       HEAP32[i3 + 20 >> 2] = i1;
       HEAP32[i1 + 24 >> 2] = i3;
      }
     } while (0);
     if (i8 >>> 0 < 16) {
      i13 = i8 + i12 | 0;
      HEAP32[i7 + 4 >> 2] = i13 | 3;
      i13 = i7 + i13 + 4 | 0;
      HEAP32[i13 >> 2] = HEAP32[i13 >> 2] | 1;
     } else {
      HEAP32[i7 + 4 >> 2] = i12 | 3;
      HEAP32[i6 + 4 >> 2] = i8 | 1;
      HEAP32[i6 + i8 >> 2] = i8;
      if (i11 | 0) {
       i3 = HEAP32[2397] | 0;
       if (!(1 << (i11 >>> 3) & i10)) {
        HEAP32[2392] = 1 << (i11 >>> 3) | i10;
        i1 = 9608 + (i11 >>> 3 << 1 << 2) + 8 | 0;
        i2 = 9608 + (i11 >>> 3 << 1 << 2) | 0;
       } else {
        i1 = 9608 + (i11 >>> 3 << 1 << 2) + 8 | 0;
        i2 = HEAP32[9608 + (i11 >>> 3 << 1 << 2) + 8 >> 2] | 0;
       }
       HEAP32[i1 >> 2] = i3;
       HEAP32[i2 + 12 >> 2] = i3;
       HEAP32[i3 + 8 >> 2] = i2;
       HEAP32[i3 + 12 >> 2] = 9608 + (i11 >>> 3 << 1 << 2);
      }
      HEAP32[2394] = i8;
      HEAP32[2397] = i6;
     }
     i13 = i7 + 8 | 0;
     STACKTOP = i14;
     return i13 | 0;
    }
   }
  }
 } else if (i1 >>> 0 > 4294967231) i12 = -1; else {
  i12 = i1 + 11 & -8;
  i4 = HEAP32[2393] | 0;
  if (i4) {
   if (!((i1 + 11 | 0) >>> 8)) i9 = 0; else if (i12 >>> 0 > 16777215) i9 = 31; else {
    i9 = (i1 + 11 | 0) >>> 8 << ((((i1 + 11 | 0) >>> 8) + 1048320 | 0) >>> 16 & 8);
    i9 = 14 - ((i9 + 520192 | 0) >>> 16 & 4 | (((i1 + 11 | 0) >>> 8) + 1048320 | 0) >>> 16 & 8 | ((i9 << ((i9 + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) + (i9 << ((i9 + 520192 | 0) >>> 16 & 4) << (((i9 << ((i9 + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
    i9 = i12 >>> (i9 + 7 | 0) & 1 | i9 << 1;
   }
   i1 = HEAP32[9872 + (i9 << 2) >> 2] | 0;
   L74 : do if (!i1) {
    i3 = 0 - i12 | 0;
    i1 = 0;
    i2 = 0;
    i13 = 57;
   } else {
    i7 = 0 - i12 | 0;
    i6 = 0;
    i8 = i12 << ((i9 | 0) == 31 ? 0 : 25 - (i9 >>> 1) | 0);
    i2 = 0;
    while (1) {
     i3 = (HEAP32[i1 + 4 >> 2] & -8) - i12 | 0;
     if (i3 >>> 0 < i7 >>> 0) if (!i3) {
      i3 = 0;
      i5 = i1;
      i2 = i1;
      i13 = 61;
      break L74;
     } else i2 = i1; else i3 = i7;
     i5 = HEAP32[i1 + 20 >> 2] | 0;
     i1 = HEAP32[i1 + 16 + (i8 >>> 31 << 2) >> 2] | 0;
     i6 = (i5 | 0) == 0 | (i5 | 0) == (i1 | 0) ? i6 : i5;
     i5 = (i1 | 0) == 0;
     if (i5) {
      i1 = i6;
      i13 = 57;
      break;
     } else {
      i7 = i3;
      i8 = i8 << ((i5 ^ 1) & 1);
     }
    }
   } while (0);
   if ((i13 | 0) == 57) {
    if ((i1 | 0) == 0 & (i2 | 0) == 0) {
     i1 = 2 << i9;
     if (!((i1 | 0 - i1) & i4)) break;
     i11 = ((i1 | 0 - i1) & i4 & 0 - ((i1 | 0 - i1) & i4)) + -1 | 0;
     i2 = i11 >>> (i11 >>> 12 & 16) >>> (i11 >>> (i11 >>> 12 & 16) >>> 5 & 8);
     i1 = i2 >>> (i2 >>> 2 & 4) >>> (i2 >>> (i2 >>> 2 & 4) >>> 1 & 2);
     i1 = HEAP32[9872 + ((i11 >>> (i11 >>> 12 & 16) >>> 5 & 8 | i11 >>> 12 & 16 | i2 >>> 2 & 4 | i2 >>> (i2 >>> 2 & 4) >>> 1 & 2 | i1 >>> 1 & 1) + (i1 >>> (i1 >>> 1 & 1)) << 2) >> 2] | 0;
     i2 = 0;
    }
    if (!i1) {
     i7 = i3;
     i9 = i2;
    } else {
     i5 = i1;
     i13 = 61;
    }
   }
   if ((i13 | 0) == 61) while (1) {
    i13 = 0;
    i1 = (HEAP32[i5 + 4 >> 2] & -8) - i12 | 0;
    i11 = i1 >>> 0 < i3 >>> 0;
    i1 = i11 ? i1 : i3;
    i2 = i11 ? i5 : i2;
    i5 = HEAP32[i5 + 16 + (((HEAP32[i5 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
    if (!i5) {
     i7 = i1;
     i9 = i2;
     break;
    } else {
     i3 = i1;
     i13 = 61;
    }
   }
   if (i9) if (i7 >>> 0 < ((HEAP32[2394] | 0) - i12 | 0) >>> 0) {
    i8 = i9 + i12 | 0;
    if (i9 >>> 0 >= i8 >>> 0) {
     i13 = 0;
     STACKTOP = i14;
     return i13 | 0;
    }
    i6 = HEAP32[i9 + 24 >> 2] | 0;
    i1 = HEAP32[i9 + 12 >> 2] | 0;
    do if ((i1 | 0) == (i9 | 0)) {
     i2 = i9 + 20 | 0;
     i1 = HEAP32[i2 >> 2] | 0;
     if (!i1) {
      i2 = i9 + 16 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
      if (!i1) {
       i1 = 0;
       break;
      }
     }
     while (1) {
      i5 = i1 + 20 | 0;
      i3 = HEAP32[i5 >> 2] | 0;
      if (i3 | 0) {
       i1 = i3;
       i2 = i5;
       continue;
      }
      i5 = i1 + 16 | 0;
      i3 = HEAP32[i5 >> 2] | 0;
      if (!i3) break; else {
       i1 = i3;
       i2 = i5;
      }
     }
     HEAP32[i2 >> 2] = 0;
    } else {
     i13 = HEAP32[i9 + 8 >> 2] | 0;
     HEAP32[i13 + 12 >> 2] = i1;
     HEAP32[i1 + 8 >> 2] = i13;
    } while (0);
    do if (i6) {
     i2 = HEAP32[i9 + 28 >> 2] | 0;
     i3 = (i1 | 0) == 0;
     if ((i9 | 0) == (HEAP32[9872 + (i2 << 2) >> 2] | 0)) {
      HEAP32[9872 + (i2 << 2) >> 2] = i1;
      if (i3) {
       HEAP32[2393] = i4 & ~(1 << i2);
       i4 = i4 & ~(1 << i2);
       break;
      }
     } else {
      HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i9 | 0) & 1) << 2) >> 2] = i1;
      if (i3) break;
     }
     HEAP32[i1 + 24 >> 2] = i6;
     i2 = HEAP32[i9 + 16 >> 2] | 0;
     if (i2 | 0) {
      HEAP32[i1 + 16 >> 2] = i2;
      HEAP32[i2 + 24 >> 2] = i1;
     }
     i2 = HEAP32[i9 + 20 >> 2] | 0;
     if (i2) {
      HEAP32[i1 + 20 >> 2] = i2;
      HEAP32[i2 + 24 >> 2] = i1;
     }
    } while (0);
    do if (i7 >>> 0 < 16) {
     i13 = i7 + i12 | 0;
     HEAP32[i9 + 4 >> 2] = i13 | 3;
     i13 = i9 + i13 + 4 | 0;
     HEAP32[i13 >> 2] = HEAP32[i13 >> 2] | 1;
    } else {
     HEAP32[i9 + 4 >> 2] = i12 | 3;
     HEAP32[i8 + 4 >> 2] = i7 | 1;
     HEAP32[i8 + i7 >> 2] = i7;
     i3 = i7 >>> 3;
     if (i7 >>> 0 < 256) {
      i1 = HEAP32[2392] | 0;
      if (!(i1 & 1 << i3)) {
       HEAP32[2392] = i1 | 1 << i3;
       i1 = 9608 + (i3 << 1 << 2) + 8 | 0;
       i2 = 9608 + (i3 << 1 << 2) | 0;
      } else {
       i1 = 9608 + (i3 << 1 << 2) + 8 | 0;
       i2 = HEAP32[9608 + (i3 << 1 << 2) + 8 >> 2] | 0;
      }
      HEAP32[i1 >> 2] = i8;
      HEAP32[i2 + 12 >> 2] = i8;
      HEAP32[i8 + 8 >> 2] = i2;
      HEAP32[i8 + 12 >> 2] = 9608 + (i3 << 1 << 2);
      break;
     }
     i1 = i7 >>> 8;
     if (!i1) i1 = 0; else if (i7 >>> 0 > 16777215) i1 = 31; else {
      i13 = i1 << ((i1 + 1048320 | 0) >>> 16 & 8) << (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4);
      i1 = 14 - (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4 | (i1 + 1048320 | 0) >>> 16 & 8 | (i13 + 245760 | 0) >>> 16 & 2) + (i13 << ((i13 + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
      i1 = i7 >>> (i1 + 7 | 0) & 1 | i1 << 1;
     }
     i3 = 9872 + (i1 << 2) | 0;
     HEAP32[i8 + 28 >> 2] = i1;
     HEAP32[i8 + 16 + 4 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 0;
     i2 = 1 << i1;
     if (!(i2 & i4)) {
      HEAP32[2393] = i2 | i4;
      HEAP32[i3 >> 2] = i8;
      HEAP32[i8 + 24 >> 2] = i3;
      HEAP32[i8 + 12 >> 2] = i8;
      HEAP32[i8 + 8 >> 2] = i8;
      break;
     }
     i2 = i7 << ((i1 | 0) == 31 ? 0 : 25 - (i1 >>> 1) | 0);
     i3 = HEAP32[i3 >> 2] | 0;
     while (1) {
      if ((HEAP32[i3 + 4 >> 2] & -8 | 0) == (i7 | 0)) {
       i13 = 97;
       break;
      }
      i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
      i1 = HEAP32[i4 >> 2] | 0;
      if (!i1) {
       i13 = 96;
       break;
      } else {
       i2 = i2 << 1;
       i3 = i1;
      }
     }
     if ((i13 | 0) == 96) {
      HEAP32[i4 >> 2] = i8;
      HEAP32[i8 + 24 >> 2] = i3;
      HEAP32[i8 + 12 >> 2] = i8;
      HEAP32[i8 + 8 >> 2] = i8;
      break;
     } else if ((i13 | 0) == 97) {
      i12 = i3 + 8 | 0;
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i13 + 12 >> 2] = i8;
      HEAP32[i12 >> 2] = i8;
      HEAP32[i8 + 8 >> 2] = i13;
      HEAP32[i8 + 12 >> 2] = i3;
      HEAP32[i8 + 24 >> 2] = 0;
      break;
     }
    } while (0);
    i13 = i9 + 8 | 0;
    STACKTOP = i14;
    return i13 | 0;
   }
  }
 } while (0);
 i3 = HEAP32[2394] | 0;
 if (i3 >>> 0 >= i12 >>> 0) {
  i2 = i3 - i12 | 0;
  i1 = HEAP32[2397] | 0;
  if (i2 >>> 0 > 15) {
   i13 = i1 + i12 | 0;
   HEAP32[2397] = i13;
   HEAP32[2394] = i2;
   HEAP32[i13 + 4 >> 2] = i2 | 1;
   HEAP32[i13 + i2 >> 2] = i2;
   HEAP32[i1 + 4 >> 2] = i12 | 3;
  } else {
   HEAP32[2394] = 0;
   HEAP32[2397] = 0;
   HEAP32[i1 + 4 >> 2] = i3 | 3;
   HEAP32[i1 + i3 + 4 >> 2] = HEAP32[i1 + i3 + 4 >> 2] | 1;
  }
  i13 = i1 + 8 | 0;
  STACKTOP = i14;
  return i13 | 0;
 }
 i5 = HEAP32[2395] | 0;
 if (i5 >>> 0 > i12 >>> 0) {
  i10 = i5 - i12 | 0;
  HEAP32[2395] = i10;
  i13 = HEAP32[2398] | 0;
  i11 = i13 + i12 | 0;
  HEAP32[2398] = i11;
  HEAP32[i11 + 4 >> 2] = i10 | 1;
  HEAP32[i13 + 4 >> 2] = i12 | 3;
  i13 = i13 + 8 | 0;
  STACKTOP = i14;
  return i13 | 0;
 }
 if (!(HEAP32[2510] | 0)) {
  HEAP32[2512] = 4096;
  HEAP32[2511] = 4096;
  HEAP32[2513] = -1;
  HEAP32[2514] = -1;
  HEAP32[2515] = 0;
  HEAP32[2503] = 0;
  HEAP32[i14 >> 2] = i14 & -16 ^ 1431655768;
  HEAP32[2510] = i14 & -16 ^ 1431655768;
  i1 = 4096;
 } else i1 = HEAP32[2512] | 0;
 i6 = i12 + 48 | 0;
 i7 = i12 + 47 | 0;
 i9 = i1 + i7 | 0;
 i8 = 0 - i1 | 0;
 if ((i9 & i8) >>> 0 <= i12 >>> 0) {
  i13 = 0;
  STACKTOP = i14;
  return i13 | 0;
 }
 i1 = HEAP32[2502] | 0;
 if (i1 | 0) {
  i11 = HEAP32[2500] | 0;
  if ((i11 + (i9 & i8) | 0) >>> 0 <= i11 >>> 0 ? 1 : (i11 + (i9 & i8) | 0) >>> 0 > i1 >>> 0) {
   i13 = 0;
   STACKTOP = i14;
   return i13 | 0;
  }
 }
 L167 : do if (!(HEAP32[2503] & 4)) {
  i3 = HEAP32[2398] | 0;
  L169 : do if (!i3) i13 = 118; else {
   i1 = 10016;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (i2 >>> 0 <= i3 >>> 0) {
     i4 = i1 + 4 | 0;
     if ((i2 + (HEAP32[i4 >> 2] | 0) | 0) >>> 0 > i3 >>> 0) break;
    }
    i1 = HEAP32[i1 + 8 >> 2] | 0;
    if (!i1) {
     i13 = 118;
     break L169;
    }
   }
   if ((i9 - i5 & i8) >>> 0 < 2147483647) {
    i2 = _sbrk(i9 - i5 & i8 | 0) | 0;
    if ((i2 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0)) if ((i2 | 0) == (-1 | 0)) i1 = i9 - i5 & i8; else {
     i7 = i2;
     i5 = i9 - i5 & i8;
     i13 = 135;
     break L167;
    } else {
     i4 = i2;
     i3 = i9 - i5 & i8;
     i13 = 126;
    }
   } else i1 = 0;
  } while (0);
  do if ((i13 | 0) == 118) {
   i3 = _sbrk(0) | 0;
   if ((i3 | 0) == (-1 | 0)) i1 = 0; else {
    i5 = HEAP32[2511] | 0;
    i5 = ((i5 + -1 & i3 | 0) == 0 ? 0 : (i5 + -1 + i3 & 0 - i5) - i3 | 0) + (i9 & i8) | 0;
    i1 = HEAP32[2500] | 0;
    if (i5 >>> 0 > i12 >>> 0 & i5 >>> 0 < 2147483647) {
     i2 = HEAP32[2502] | 0;
     if (i2 | 0) if ((i5 + i1 | 0) >>> 0 <= i1 >>> 0 | (i5 + i1 | 0) >>> 0 > i2 >>> 0) {
      i1 = 0;
      break;
     }
     i1 = _sbrk(i5 | 0) | 0;
     if ((i1 | 0) == (i3 | 0)) {
      i7 = i3;
      i13 = 135;
      break L167;
     } else {
      i4 = i1;
      i3 = i5;
      i13 = 126;
     }
    } else i1 = 0;
   }
  } while (0);
  do if ((i13 | 0) == 126) {
   i2 = 0 - i3 | 0;
   if (!(i6 >>> 0 > i3 >>> 0 & (i3 >>> 0 < 2147483647 & (i4 | 0) != (-1 | 0)))) if ((i4 | 0) == (-1 | 0)) {
    i1 = 0;
    break;
   } else {
    i7 = i4;
    i5 = i3;
    i13 = 135;
    break L167;
   }
   i1 = HEAP32[2512] | 0;
   i1 = i7 - i3 + i1 & 0 - i1;
   if (i1 >>> 0 >= 2147483647) {
    i7 = i4;
    i5 = i3;
    i13 = 135;
    break L167;
   }
   if ((_sbrk(i1 | 0) | 0) == (-1 | 0)) {
    _sbrk(i2 | 0) | 0;
    i1 = 0;
    break;
   } else {
    i7 = i4;
    i5 = i1 + i3 | 0;
    i13 = 135;
    break L167;
   }
  } while (0);
  HEAP32[2503] = HEAP32[2503] | 4;
  i13 = 133;
 } else {
  i1 = 0;
  i13 = 133;
 } while (0);
 if ((i13 | 0) == 133) if ((i9 & i8) >>> 0 < 2147483647) {
  i2 = _sbrk(i9 & i8 | 0) | 0;
  i3 = _sbrk(0) | 0;
  i4 = (i3 - i2 | 0) >>> 0 > (i12 + 40 | 0) >>> 0;
  if (!((i2 | 0) == (-1 | 0) | i4 ^ 1 | i2 >>> 0 < i3 >>> 0 & ((i2 | 0) != (-1 | 0) & (i3 | 0) != (-1 | 0)) ^ 1)) {
   i7 = i2;
   i5 = i4 ? i3 - i2 | 0 : i1;
   i13 = 135;
  }
 }
 if ((i13 | 0) == 135) {
  i1 = (HEAP32[2500] | 0) + i5 | 0;
  HEAP32[2500] = i1;
  if (i1 >>> 0 > (HEAP32[2501] | 0) >>> 0) HEAP32[2501] = i1;
  i9 = HEAP32[2398] | 0;
  do if (!i9) {
   i13 = HEAP32[2396] | 0;
   if ((i13 | 0) == 0 | i7 >>> 0 < i13 >>> 0) HEAP32[2396] = i7;
   HEAP32[2504] = i7;
   HEAP32[2505] = i5;
   HEAP32[2507] = 0;
   HEAP32[2401] = HEAP32[2510];
   HEAP32[2400] = -1;
   i1 = 0;
   do {
    i13 = 9608 + (i1 << 1 << 2) | 0;
    HEAP32[i13 + 12 >> 2] = i13;
    HEAP32[i13 + 8 >> 2] = i13;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 32);
   i13 = i7 + 8 | 0;
   i13 = (i13 & 7 | 0) == 0 ? 0 : 0 - i13 & 7;
   i11 = i7 + i13 | 0;
   i13 = i5 + -40 - i13 | 0;
   HEAP32[2398] = i11;
   HEAP32[2395] = i13;
   HEAP32[i11 + 4 >> 2] = i13 | 1;
   HEAP32[i11 + i13 + 4 >> 2] = 40;
   HEAP32[2399] = HEAP32[2514];
  } else {
   i1 = 10016;
   do {
    i2 = HEAP32[i1 >> 2] | 0;
    i4 = i1 + 4 | 0;
    i3 = HEAP32[i4 >> 2] | 0;
    if ((i7 | 0) == (i2 + i3 | 0)) {
     i13 = 145;
     break;
    }
    i1 = HEAP32[i1 + 8 >> 2] | 0;
   } while ((i1 | 0) != 0);
   if ((i13 | 0) == 145) if (!(HEAP32[i1 + 12 >> 2] & 8)) if (i9 >>> 0 < i7 >>> 0 & i9 >>> 0 >= i2 >>> 0) {
    HEAP32[i4 >> 2] = i3 + i5;
    i11 = (i9 + 8 & 7 | 0) == 0 ? 0 : 0 - (i9 + 8) & 7;
    i13 = (HEAP32[2395] | 0) + (i5 - i11) | 0;
    HEAP32[2398] = i9 + i11;
    HEAP32[2395] = i13;
    HEAP32[i9 + i11 + 4 >> 2] = i13 | 1;
    HEAP32[i9 + i11 + i13 + 4 >> 2] = 40;
    HEAP32[2399] = HEAP32[2514];
    break;
   }
   if (i7 >>> 0 < (HEAP32[2396] | 0) >>> 0) HEAP32[2396] = i7;
   i2 = i7 + i5 | 0;
   i1 = 10016;
   do {
    if ((HEAP32[i1 >> 2] | 0) == (i2 | 0)) {
     i13 = 153;
     break;
    }
    i1 = HEAP32[i1 + 8 >> 2] | 0;
   } while ((i1 | 0) != 0);
   if ((i13 | 0) == 153) if (!(HEAP32[i1 + 12 >> 2] & 8)) {
    HEAP32[i1 >> 2] = i7;
    i11 = i1 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + i5;
    i11 = i7 + 8 | 0;
    i11 = i7 + ((i11 & 7 | 0) == 0 ? 0 : 0 - i11 & 7) | 0;
    i1 = i2 + ((i2 + 8 & 7 | 0) == 0 ? 0 : 0 - (i2 + 8) & 7) | 0;
    i10 = i11 + i12 | 0;
    i8 = i1 - i11 - i12 | 0;
    HEAP32[i11 + 4 >> 2] = i12 | 3;
    do if ((i1 | 0) == (i9 | 0)) {
     i13 = (HEAP32[2395] | 0) + i8 | 0;
     HEAP32[2395] = i13;
     HEAP32[2398] = i10;
     HEAP32[i10 + 4 >> 2] = i13 | 1;
    } else {
     if ((i1 | 0) == (HEAP32[2397] | 0)) {
      i13 = (HEAP32[2394] | 0) + i8 | 0;
      HEAP32[2394] = i13;
      HEAP32[2397] = i10;
      HEAP32[i10 + 4 >> 2] = i13 | 1;
      HEAP32[i10 + i13 >> 2] = i13;
      break;
     }
     i7 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i7 & 3 | 0) == 1) {
      L237 : do if (i7 >>> 0 < 256) {
       i2 = HEAP32[i1 + 8 >> 2] | 0;
       i3 = HEAP32[i1 + 12 >> 2] | 0;
       if ((i3 | 0) == (i2 | 0)) {
        HEAP32[2392] = HEAP32[2392] & ~(1 << (i7 >>> 3));
        break;
       } else {
        HEAP32[i2 + 12 >> 2] = i3;
        HEAP32[i3 + 8 >> 2] = i2;
        break;
       }
      } else {
       i6 = HEAP32[i1 + 24 >> 2] | 0;
       i2 = HEAP32[i1 + 12 >> 2] | 0;
       do if ((i2 | 0) == (i1 | 0)) {
        i2 = HEAP32[i1 + 16 + 4 >> 2] | 0;
        if (!i2) {
         i2 = HEAP32[i1 + 16 >> 2] | 0;
         if (!i2) {
          i2 = 0;
          break;
         } else i5 = i1 + 16 | 0;
        } else i5 = i1 + 16 + 4 | 0;
        while (1) {
         i4 = i2 + 20 | 0;
         i3 = HEAP32[i4 >> 2] | 0;
         if (i3 | 0) {
          i2 = i3;
          i5 = i4;
          continue;
         }
         i4 = i2 + 16 | 0;
         i3 = HEAP32[i4 >> 2] | 0;
         if (!i3) break; else {
          i2 = i3;
          i5 = i4;
         }
        }
        HEAP32[i5 >> 2] = 0;
       } else {
        i13 = HEAP32[i1 + 8 >> 2] | 0;
        HEAP32[i13 + 12 >> 2] = i2;
        HEAP32[i2 + 8 >> 2] = i13;
       } while (0);
       if (!i6) break;
       i3 = HEAP32[i1 + 28 >> 2] | 0;
       i4 = (i2 | 0) == 0;
       do if ((i1 | 0) == (HEAP32[9872 + (i3 << 2) >> 2] | 0)) {
        HEAP32[9872 + (i3 << 2) >> 2] = i2;
        if (!i4) break;
        HEAP32[2393] = HEAP32[2393] & ~(1 << i3);
        break L237;
       } else {
        HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i1 | 0) & 1) << 2) >> 2] = i2;
        if (i4) break L237;
       } while (0);
       HEAP32[i2 + 24 >> 2] = i6;
       i3 = HEAP32[i1 + 16 >> 2] | 0;
       if (i3 | 0) {
        HEAP32[i2 + 16 >> 2] = i3;
        HEAP32[i3 + 24 >> 2] = i2;
       }
       i3 = HEAP32[i1 + 16 + 4 >> 2] | 0;
       if (!i3) break;
       HEAP32[i2 + 20 >> 2] = i3;
       HEAP32[i3 + 24 >> 2] = i2;
      } while (0);
      i1 = i1 + (i7 & -8) | 0;
      i5 = (i7 & -8) + i8 | 0;
     } else i5 = i8;
     i3 = i1 + 4 | 0;
     HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -2;
     HEAP32[i10 + 4 >> 2] = i5 | 1;
     HEAP32[i10 + i5 >> 2] = i5;
     i3 = i5 >>> 3;
     if (i5 >>> 0 < 256) {
      i1 = HEAP32[2392] | 0;
      if (!(i1 & 1 << i3)) {
       HEAP32[2392] = i1 | 1 << i3;
       i1 = 9608 + (i3 << 1 << 2) + 8 | 0;
       i2 = 9608 + (i3 << 1 << 2) | 0;
      } else {
       i1 = 9608 + (i3 << 1 << 2) + 8 | 0;
       i2 = HEAP32[9608 + (i3 << 1 << 2) + 8 >> 2] | 0;
      }
      HEAP32[i1 >> 2] = i10;
      HEAP32[i2 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i2;
      HEAP32[i10 + 12 >> 2] = 9608 + (i3 << 1 << 2);
      break;
     }
     i1 = i5 >>> 8;
     do if (!i1) i2 = 0; else {
      if (i5 >>> 0 > 16777215) {
       i2 = 31;
       break;
      }
      i2 = i1 << ((i1 + 1048320 | 0) >>> 16 & 8) << (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4);
      i2 = 14 - (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4 | (i1 + 1048320 | 0) >>> 16 & 8 | (i2 + 245760 | 0) >>> 16 & 2) + (i2 << ((i2 + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
      i2 = i5 >>> (i2 + 7 | 0) & 1 | i2 << 1;
     } while (0);
     i4 = 9872 + (i2 << 2) | 0;
     HEAP32[i10 + 28 >> 2] = i2;
     HEAP32[i10 + 16 + 4 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 0;
     i1 = HEAP32[2393] | 0;
     i3 = 1 << i2;
     if (!(i1 & i3)) {
      HEAP32[2393] = i1 | i3;
      HEAP32[i4 >> 2] = i10;
      HEAP32[i10 + 24 >> 2] = i4;
      HEAP32[i10 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i10;
      break;
     }
     i2 = i5 << ((i2 | 0) == 31 ? 0 : 25 - (i2 >>> 1) | 0);
     i3 = HEAP32[i4 >> 2] | 0;
     while (1) {
      if ((HEAP32[i3 + 4 >> 2] & -8 | 0) == (i5 | 0)) {
       i13 = 194;
       break;
      }
      i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
      i1 = HEAP32[i4 >> 2] | 0;
      if (!i1) {
       i13 = 193;
       break;
      } else {
       i2 = i2 << 1;
       i3 = i1;
      }
     }
     if ((i13 | 0) == 193) {
      HEAP32[i4 >> 2] = i10;
      HEAP32[i10 + 24 >> 2] = i3;
      HEAP32[i10 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i10;
      break;
     } else if ((i13 | 0) == 194) {
      i12 = i3 + 8 | 0;
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i13 + 12 >> 2] = i10;
      HEAP32[i12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i13;
      HEAP32[i10 + 12 >> 2] = i3;
      HEAP32[i10 + 24 >> 2] = 0;
      break;
     }
    } while (0);
    i13 = i11 + 8 | 0;
    STACKTOP = i14;
    return i13 | 0;
   }
   i2 = 10016;
   while (1) {
    i1 = HEAP32[i2 >> 2] | 0;
    if (i1 >>> 0 <= i9 >>> 0) {
     i3 = i1 + (HEAP32[i2 + 4 >> 2] | 0) | 0;
     if (i3 >>> 0 > i9 >>> 0) break;
    }
    i2 = HEAP32[i2 + 8 >> 2] | 0;
   }
   i6 = i3 + -47 + ((i3 + -47 + 8 & 7 | 0) == 0 ? 0 : 0 - (i3 + -47 + 8) & 7) | 0;
   i6 = i6 >>> 0 < (i9 + 16 | 0) >>> 0 ? i9 : i6;
   i1 = i7 + 8 | 0;
   i1 = (i1 & 7 | 0) == 0 ? 0 : 0 - i1 & 7;
   i13 = i7 + i1 | 0;
   i1 = i5 + -40 - i1 | 0;
   HEAP32[2398] = i13;
   HEAP32[2395] = i1;
   HEAP32[i13 + 4 >> 2] = i1 | 1;
   HEAP32[i13 + i1 + 4 >> 2] = 40;
   HEAP32[2399] = HEAP32[2514];
   HEAP32[i6 + 4 >> 2] = 27;
   HEAP32[i6 + 8 >> 2] = HEAP32[2504];
   HEAP32[i6 + 8 + 4 >> 2] = HEAP32[2505];
   HEAP32[i6 + 8 + 8 >> 2] = HEAP32[2506];
   HEAP32[i6 + 8 + 12 >> 2] = HEAP32[2507];
   HEAP32[2504] = i7;
   HEAP32[2505] = i5;
   HEAP32[2507] = 0;
   HEAP32[2506] = i6 + 8;
   i1 = i6 + 24 | 0;
   do {
    i13 = i1;
    i1 = i1 + 4 | 0;
    HEAP32[i1 >> 2] = 7;
   } while ((i13 + 8 | 0) >>> 0 < i3 >>> 0);
   if ((i6 | 0) != (i9 | 0)) {
    HEAP32[i6 + 4 >> 2] = HEAP32[i6 + 4 >> 2] & -2;
    HEAP32[i9 + 4 >> 2] = i6 - i9 | 1;
    HEAP32[i6 >> 2] = i6 - i9;
    if ((i6 - i9 | 0) >>> 0 < 256) {
     i3 = 9608 + ((i6 - i9 | 0) >>> 3 << 1 << 2) | 0;
     i1 = HEAP32[2392] | 0;
     if (!(i1 & 1 << ((i6 - i9 | 0) >>> 3))) {
      HEAP32[2392] = i1 | 1 << ((i6 - i9 | 0) >>> 3);
      i1 = i3 + 8 | 0;
      i2 = i3;
     } else {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i3 + 8 >> 2] | 0;
     }
     HEAP32[i1 >> 2] = i9;
     HEAP32[i2 + 12 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i2;
     HEAP32[i9 + 12 >> 2] = i3;
     break;
    }
    if (!((i6 - i9 | 0) >>> 8)) i2 = 0; else if ((i6 - i9 | 0) >>> 0 > 16777215) i2 = 31; else {
     i2 = (i6 - i9 | 0) >>> 8 << ((((i6 - i9 | 0) >>> 8) + 1048320 | 0) >>> 16 & 8);
     i2 = 14 - ((i2 + 520192 | 0) >>> 16 & 4 | (((i6 - i9 | 0) >>> 8) + 1048320 | 0) >>> 16 & 8 | ((i2 << ((i2 + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) + (i2 << ((i2 + 520192 | 0) >>> 16 & 4) << (((i2 << ((i2 + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
     i2 = (i6 - i9 | 0) >>> (i2 + 7 | 0) & 1 | i2 << 1;
    }
    i4 = 9872 + (i2 << 2) | 0;
    HEAP32[i9 + 28 >> 2] = i2;
    HEAP32[i9 + 20 >> 2] = 0;
    HEAP32[i9 + 16 >> 2] = 0;
    i1 = HEAP32[2393] | 0;
    i3 = 1 << i2;
    if (!(i1 & i3)) {
     HEAP32[2393] = i1 | i3;
     HEAP32[i4 >> 2] = i9;
     HEAP32[i9 + 24 >> 2] = i4;
     HEAP32[i9 + 12 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i9;
     break;
    }
    i2 = i6 - i9 << ((i2 | 0) == 31 ? 0 : 25 - (i2 >>> 1) | 0);
    i3 = HEAP32[i4 >> 2] | 0;
    while (1) {
     if ((HEAP32[i3 + 4 >> 2] & -8 | 0) == (i6 - i9 | 0)) {
      i13 = 216;
      break;
     }
     i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
     i1 = HEAP32[i4 >> 2] | 0;
     if (!i1) {
      i13 = 215;
      break;
     } else {
      i2 = i2 << 1;
      i3 = i1;
     }
    }
    if ((i13 | 0) == 215) {
     HEAP32[i4 >> 2] = i9;
     HEAP32[i9 + 24 >> 2] = i3;
     HEAP32[i9 + 12 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i9;
     break;
    } else if ((i13 | 0) == 216) {
     i11 = i3 + 8 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i13 + 12 >> 2] = i9;
     HEAP32[i11 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i13;
     HEAP32[i9 + 12 >> 2] = i3;
     HEAP32[i9 + 24 >> 2] = 0;
     break;
    }
   }
  } while (0);
  i1 = HEAP32[2395] | 0;
  if (i1 >>> 0 > i12 >>> 0) {
   i10 = i1 - i12 | 0;
   HEAP32[2395] = i10;
   i13 = HEAP32[2398] | 0;
   i11 = i13 + i12 | 0;
   HEAP32[2398] = i11;
   HEAP32[i11 + 4 >> 2] = i10 | 1;
   HEAP32[i13 + 4 >> 2] = i12 | 3;
   i13 = i13 + 8 | 0;
   STACKTOP = i14;
   return i13 | 0;
  }
 }
 HEAP32[2535] = 12;
 i13 = 0;
 STACKTOP = i14;
 return i13 | 0;
}

function __Z6createv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 1184 | 0;
 i7 = i16 + 1016 + 12 | 0;
 i3 = i16 + 1016 + 24 | 0;
 i10 = i16 + 1016 + 36 | 0;
 i4 = i16 + 1016 + 48 | 0;
 i15 = i16 + 1016 + 60 | 0;
 i8 = i16 + 848 + 12 | 0;
 i9 = i16 + 688 + 12 | 0;
 i11 = i16 + 528 + 12 | 0;
 i12 = i16 + 360 + 12 | 0;
 i13 = i16 + 200 + 12 | 0;
 i14 = i16 + 40 + 12 | 0;
 i6 = 99;
 while (1) {
  HEAP32[i16 + 1168 + 4 >> 2] = 0;
  HEAP32[i16 + 1168 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 1168 + 11 >> 0] = 3;
  HEAP8[i16 + 1168 >> 0] = HEAP8[4978] | 0;
  HEAP8[i16 + 1168 + 1 >> 0] = HEAP8[4979] | 0;
  HEAP8[i16 + 1168 + 2 >> 0] = HEAP8[4980] | 0;
  HEAP8[i16 + 1168 + 3 >> 0] = 0;
  HEAP32[i16 + 1016 + 4 >> 2] = 0;
  HEAP32[i16 + 1016 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 1016 + 11 >> 0] = 3;
  HEAP8[i16 + 1016 >> 0] = HEAP8[4982] | 0;
  HEAP8[i16 + 1016 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i16 + 1016 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i16 + 1016 + 3 >> 0] = 0;
  HEAP32[i16 + 1016 + 16 >> 2] = 0;
  HEAP32[i16 + 1016 + 16 + 4 >> 2] = 0;
  HEAP8[i7 + 11 >> 0] = 3;
  HEAP8[i7 >> 0] = HEAP8[4982] | 0;
  HEAP8[i7 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i7 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i7 + 3 >> 0] = 0;
  HEAP32[i16 + 1016 + 28 >> 2] = 0;
  HEAP32[i16 + 1016 + 28 + 4 >> 2] = 0;
  HEAP8[i3 + 11 >> 0] = 3;
  HEAP8[i3 >> 0] = HEAP8[4986] | 0;
  HEAP8[i3 + 1 >> 0] = HEAP8[4987] | 0;
  HEAP8[i3 + 2 >> 0] = HEAP8[4988] | 0;
  HEAP8[i3 + 3 >> 0] = 0;
  HEAP32[i16 + 1016 + 40 >> 2] = 0;
  HEAP32[i16 + 1016 + 40 + 4 >> 2] = 0;
  HEAP8[i10 + 11 >> 0] = 3;
  HEAP8[i10 >> 0] = HEAP8[4986] | 0;
  HEAP8[i10 + 1 >> 0] = HEAP8[4987] | 0;
  HEAP8[i10 + 2 >> 0] = HEAP8[4988] | 0;
  HEAP8[i10 + 3 >> 0] = 0;
  HEAP32[i16 + 1016 + 52 >> 2] = 0;
  HEAP32[i16 + 1016 + 52 + 4 >> 2] = 0;
  HEAP8[i4 + 11 >> 0] = 3;
  HEAP8[i4 >> 0] = HEAP8[4990] | 0;
  HEAP8[i4 + 1 >> 0] = HEAP8[4991] | 0;
  HEAP8[i4 + 2 >> 0] = HEAP8[4992] | 0;
  HEAP8[i4 + 3 >> 0] = 0;
  HEAP32[i16 + 1016 + 64 >> 2] = 0;
  HEAP32[i16 + 1016 + 64 + 4 >> 2] = 0;
  HEAP8[i15 + 11 >> 0] = 3;
  HEAP8[i15 >> 0] = HEAP8[4990] | 0;
  HEAP8[i15 + 1 >> 0] = HEAP8[4991] | 0;
  HEAP8[i15 + 2 >> 0] = HEAP8[4992] | 0;
  HEAP8[i15 + 3 >> 0] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i16 + 1088 | 0, i16 + 1016 | 0, 3);
  HEAP32[i16 + 996 >> 2] = 0;
  HEAP32[i16 + 996 + 4 >> 2] = 0;
  HEAP32[i16 + 996 + 8 >> 2] = 0;
  HEAP32[i16 + 996 + 12 >> 2] = 0;
  HEAPF32[i16 + 996 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i16 + 976 >> 2] = 0;
  HEAP32[i16 + 976 + 4 >> 2] = 0;
  HEAP32[i16 + 976 + 8 >> 2] = 0;
  HEAP32[i16 + 976 + 12 >> 2] = 0;
  HEAPF32[i16 + 976 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i16 + 1108 | 0, i16 + 1088 | 0, i16 + 996 | 0, i16 + 976 | 0);
  HEAP32[i16 + 952 + 4 >> 2] = 0;
  HEAP32[i16 + 952 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 952 + 11 >> 0] = 3;
  HEAP8[i16 + 952 >> 0] = HEAP8[4978] | 0;
  HEAP8[i16 + 952 + 1 >> 0] = HEAP8[4979] | 0;
  HEAP8[i16 + 952 + 2 >> 0] = HEAP8[4980] | 0;
  HEAP8[i16 + 952 + 3 >> 0] = 0;
  HEAP32[i16 + 848 + 4 >> 2] = 0;
  HEAP32[i16 + 848 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 848 + 11 >> 0] = 3;
  HEAP8[i16 + 848 >> 0] = HEAP8[4982] | 0;
  HEAP8[i16 + 848 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i16 + 848 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i16 + 848 + 3 >> 0] = 0;
  HEAP32[i16 + 848 + 16 >> 2] = 0;
  HEAP32[i16 + 848 + 16 + 4 >> 2] = 0;
  HEAP8[i8 + 11 >> 0] = 3;
  HEAP8[i8 >> 0] = HEAP8[4982] | 0;
  HEAP8[i8 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i8 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i8 + 3 >> 0] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i16 + 872 | 0, i16 + 848 | 0, 1);
  HEAP32[i16 + 824 >> 2] = 0;
  HEAP32[i16 + 824 + 4 >> 2] = 0;
  HEAP32[i16 + 824 + 8 >> 2] = 0;
  HEAP32[i16 + 824 + 12 >> 2] = 0;
  HEAPF32[i16 + 824 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i16 + 804 >> 2] = 0;
  HEAP32[i16 + 804 + 4 >> 2] = 0;
  HEAP32[i16 + 804 + 8 >> 2] = 0;
  HEAP32[i16 + 804 + 12 >> 2] = 0;
  HEAPF32[i16 + 804 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i16 + 892 | 0, i16 + 872 | 0, i16 + 824 | 0, i16 + 804 | 0);
  i18 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i18, i16 + 952 | 0, i16 + 892 | 0);
  HEAP32[i16 + 792 + 4 >> 2] = 0;
  HEAP32[i16 + 792 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 792 + 11 >> 0] = 3;
  HEAP8[i16 + 792 >> 0] = HEAP8[4978] | 0;
  HEAP8[i16 + 792 + 1 >> 0] = HEAP8[4979] | 0;
  HEAP8[i16 + 792 + 2 >> 0] = HEAP8[4980] | 0;
  HEAP8[i16 + 792 + 3 >> 0] = 0;
  HEAP32[i16 + 688 + 4 >> 2] = 0;
  HEAP32[i16 + 688 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 688 + 11 >> 0] = 3;
  HEAP8[i16 + 688 >> 0] = HEAP8[4982] | 0;
  HEAP8[i16 + 688 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i16 + 688 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i16 + 688 + 3 >> 0] = 0;
  HEAP32[i16 + 688 + 16 >> 2] = 0;
  HEAP32[i16 + 688 + 16 + 4 >> 2] = 0;
  HEAP8[i9 + 11 >> 0] = 3;
  HEAP8[i9 >> 0] = HEAP8[4982] | 0;
  HEAP8[i9 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i9 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i9 + 3 >> 0] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i16 + 712 | 0, i16 + 688 | 0, 1);
  HEAP32[i16 + 664 >> 2] = 0;
  HEAP32[i16 + 664 + 4 >> 2] = 0;
  HEAP32[i16 + 664 + 8 >> 2] = 0;
  HEAP32[i16 + 664 + 12 >> 2] = 0;
  HEAPF32[i16 + 664 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i16 + 644 >> 2] = 0;
  HEAP32[i16 + 644 + 4 >> 2] = 0;
  HEAP32[i16 + 644 + 8 >> 2] = 0;
  HEAP32[i16 + 644 + 12 >> 2] = 0;
  HEAPF32[i16 + 644 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i16 + 732 | 0, i16 + 712 | 0, i16 + 664 | 0, i16 + 644 | 0);
  i17 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i17, i16 + 792 | 0, i16 + 732 | 0);
  HEAP32[i16 + 632 + 4 >> 2] = 0;
  HEAP32[i16 + 632 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 632 + 11 >> 0] = 3;
  HEAP8[i16 + 632 >> 0] = HEAP8[4978] | 0;
  HEAP8[i16 + 632 + 1 >> 0] = HEAP8[4979] | 0;
  HEAP8[i16 + 632 + 2 >> 0] = HEAP8[4980] | 0;
  HEAP8[i16 + 632 + 3 >> 0] = 0;
  HEAP32[i16 + 528 + 4 >> 2] = 0;
  HEAP32[i16 + 528 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 528 + 11 >> 0] = 3;
  HEAP8[i16 + 528 >> 0] = HEAP8[4982] | 0;
  HEAP8[i16 + 528 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i16 + 528 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i16 + 528 + 3 >> 0] = 0;
  HEAP32[i16 + 528 + 16 >> 2] = 0;
  HEAP32[i16 + 528 + 16 + 4 >> 2] = 0;
  HEAP8[i11 + 11 >> 0] = 3;
  HEAP8[i11 >> 0] = HEAP8[4982] | 0;
  HEAP8[i11 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i11 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i11 + 3 >> 0] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i16 + 552 | 0, i16 + 528 | 0, 1);
  HEAP32[i16 + 508 >> 2] = 0;
  HEAP32[i16 + 508 + 4 >> 2] = 0;
  HEAP32[i16 + 508 + 8 >> 2] = 0;
  HEAP32[i16 + 508 + 12 >> 2] = 0;
  HEAPF32[i16 + 508 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i16 + 488 >> 2] = 0;
  HEAP32[i16 + 488 + 4 >> 2] = 0;
  HEAP32[i16 + 488 + 8 >> 2] = 0;
  HEAP32[i16 + 488 + 12 >> 2] = 0;
  HEAPF32[i16 + 488 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i16 + 572 | 0, i16 + 552 | 0, i16 + 508 | 0, i16 + 488 | 0);
  HEAP32[i16 + 464 + 4 >> 2] = 0;
  HEAP32[i16 + 464 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 464 + 11 >> 0] = 3;
  HEAP8[i16 + 464 >> 0] = HEAP8[4978] | 0;
  HEAP8[i16 + 464 + 1 >> 0] = HEAP8[4979] | 0;
  HEAP8[i16 + 464 + 2 >> 0] = HEAP8[4980] | 0;
  HEAP8[i16 + 464 + 3 >> 0] = 0;
  HEAP32[i16 + 360 + 4 >> 2] = 0;
  HEAP32[i16 + 360 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 360 + 11 >> 0] = 3;
  HEAP8[i16 + 360 >> 0] = HEAP8[4982] | 0;
  HEAP8[i16 + 360 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i16 + 360 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i16 + 360 + 3 >> 0] = 0;
  HEAP32[i16 + 360 + 16 >> 2] = 0;
  HEAP32[i16 + 360 + 16 + 4 >> 2] = 0;
  HEAP8[i12 + 11 >> 0] = 3;
  HEAP8[i12 >> 0] = HEAP8[4982] | 0;
  HEAP8[i12 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i12 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i12 + 3 >> 0] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i16 + 384 | 0, i16 + 360 | 0, 1);
  HEAP32[i16 + 336 >> 2] = 0;
  HEAP32[i16 + 336 + 4 >> 2] = 0;
  HEAP32[i16 + 336 + 8 >> 2] = 0;
  HEAP32[i16 + 336 + 12 >> 2] = 0;
  HEAPF32[i16 + 336 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i16 + 316 >> 2] = 0;
  HEAP32[i16 + 316 + 4 >> 2] = 0;
  HEAP32[i16 + 316 + 8 >> 2] = 0;
  HEAP32[i16 + 316 + 12 >> 2] = 0;
  HEAPF32[i16 + 316 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i16 + 404 | 0, i16 + 384 | 0, i16 + 336 | 0, i16 + 316 | 0);
  i19 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i19, i16 + 464 | 0, i16 + 404 | 0);
  HEAP32[i16 + 304 + 4 >> 2] = 0;
  HEAP32[i16 + 304 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 304 + 11 >> 0] = 3;
  HEAP8[i16 + 304 >> 0] = HEAP8[4978] | 0;
  HEAP8[i16 + 304 + 1 >> 0] = HEAP8[4979] | 0;
  HEAP8[i16 + 304 + 2 >> 0] = HEAP8[4980] | 0;
  HEAP8[i16 + 304 + 3 >> 0] = 0;
  HEAP32[i16 + 200 + 4 >> 2] = 0;
  HEAP32[i16 + 200 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 200 + 11 >> 0] = 3;
  HEAP8[i16 + 200 >> 0] = HEAP8[4982] | 0;
  HEAP8[i16 + 200 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i16 + 200 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i16 + 200 + 3 >> 0] = 0;
  HEAP32[i16 + 200 + 16 >> 2] = 0;
  HEAP32[i16 + 200 + 16 + 4 >> 2] = 0;
  HEAP8[i13 + 11 >> 0] = 3;
  HEAP8[i13 >> 0] = HEAP8[4982] | 0;
  HEAP8[i13 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i13 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i13 + 3 >> 0] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i16 + 224 | 0, i16 + 200 | 0, 1);
  HEAP32[i16 + 176 >> 2] = 0;
  HEAP32[i16 + 176 + 4 >> 2] = 0;
  HEAP32[i16 + 176 + 8 >> 2] = 0;
  HEAP32[i16 + 176 + 12 >> 2] = 0;
  HEAPF32[i16 + 176 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i16 + 156 >> 2] = 0;
  HEAP32[i16 + 156 + 4 >> 2] = 0;
  HEAP32[i16 + 156 + 8 >> 2] = 0;
  HEAP32[i16 + 156 + 12 >> 2] = 0;
  HEAPF32[i16 + 156 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i16 + 244 | 0, i16 + 224 | 0, i16 + 176 | 0, i16 + 156 | 0);
  i2 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i2, i16 + 304 | 0, i16 + 244 | 0);
  HEAP32[i16 + 144 + 4 >> 2] = 0;
  HEAP32[i16 + 144 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 144 + 11 >> 0] = 3;
  HEAP8[i16 + 144 >> 0] = HEAP8[4978] | 0;
  HEAP8[i16 + 144 + 1 >> 0] = HEAP8[4979] | 0;
  HEAP8[i16 + 144 + 2 >> 0] = HEAP8[4980] | 0;
  HEAP8[i16 + 144 + 3 >> 0] = 0;
  HEAP32[i16 + 40 + 4 >> 2] = 0;
  HEAP32[i16 + 40 + 4 + 4 >> 2] = 0;
  HEAP8[i16 + 40 + 11 >> 0] = 3;
  HEAP8[i16 + 40 >> 0] = HEAP8[4982] | 0;
  HEAP8[i16 + 40 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i16 + 40 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i16 + 40 + 3 >> 0] = 0;
  HEAP32[i16 + 40 + 16 >> 2] = 0;
  HEAP32[i16 + 40 + 16 + 4 >> 2] = 0;
  HEAP8[i14 + 11 >> 0] = 3;
  HEAP8[i14 >> 0] = HEAP8[4982] | 0;
  HEAP8[i14 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i14 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i14 + 3 >> 0] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i16 + 64 | 0, i16 + 40 | 0, 1);
  HEAP32[i16 + 20 >> 2] = 0;
  HEAP32[i16 + 20 + 4 >> 2] = 0;
  HEAP32[i16 + 20 + 8 >> 2] = 0;
  HEAP32[i16 + 20 + 12 >> 2] = 0;
  HEAPF32[i16 + 20 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i16 >> 2] = 0;
  HEAP32[i16 + 4 >> 2] = 0;
  HEAP32[i16 + 8 >> 2] = 0;
  HEAP32[i16 + 12 >> 2] = 0;
  HEAPF32[i16 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i16 + 84 | 0, i16 + 64 | 0, i16 + 20 | 0, i16);
  i5 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i5, i16 + 144 | 0, i16 + 84 | 0);
  i1 = __Znwj(12) | 0;
  HEAP32[i16 + 476 >> 2] = i1;
  HEAP32[i16 + 476 + 8 >> 2] = i1 + 12;
  HEAP32[i1 >> 2] = i19;
  HEAP32[i1 + 4 >> 2] = i2;
  HEAP32[i1 + 8 >> 2] = i5;
  HEAP32[i16 + 476 + 4 >> 2] = i1 + 12;
  i5 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i5, i16 + 632 | 0, i16 + 572 | 0, i16 + 476 | 0);
  i2 = __Znwj(12) | 0;
  HEAP32[i16 + 964 >> 2] = i2;
  HEAP32[i16 + 964 + 8 >> 2] = i2 + 12;
  HEAP32[i2 >> 2] = i18;
  HEAP32[i2 + 4 >> 2] = i17;
  HEAP32[i2 + 8 >> 2] = i5;
  HEAP32[i16 + 964 + 4 >> 2] = i2 + 12;
  i5 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i5, i16 + 1168 | 0, i16 + 1108 | 0, i16 + 964 | 0);
  if (i2 | 0) {
   HEAP32[i16 + 964 + 4 >> 2] = i2;
   __ZdlPv(i2);
  }
  if (i1 | 0) {
   HEAP32[i16 + 476 + 4 >> 2] = i1;
   __ZdlPv(i1);
  }
  __ZN6asmdom4DataD2Ev(i16 + 84 | 0);
  HEAP32[i16 >> 2] = 0;
  HEAP32[i16 + 20 >> 2] = 0;
  i1 = HEAP32[i16 + 64 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i16 + 64 >> 2] | 0;
  HEAP32[i16 + 64 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i14 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i14 >> 2] | 0);
  if ((HEAP8[i16 + 40 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i16 + 40 >> 2] | 0);
  __ZN6asmdom4DataD2Ev(i16 + 244 | 0);
  HEAP32[i16 + 156 >> 2] = 0;
  HEAP32[i16 + 176 >> 2] = 0;
  i1 = HEAP32[i16 + 224 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i16 + 224 >> 2] | 0;
  HEAP32[i16 + 224 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i13 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i13 >> 2] | 0);
  if ((HEAP8[i16 + 200 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i16 + 200 >> 2] | 0);
  __ZN6asmdom4DataD2Ev(i16 + 404 | 0);
  HEAP32[i16 + 316 >> 2] = 0;
  HEAP32[i16 + 336 >> 2] = 0;
  i1 = HEAP32[i16 + 384 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i16 + 384 >> 2] | 0;
  HEAP32[i16 + 384 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i12 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i12 >> 2] | 0);
  if ((HEAP8[i16 + 360 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i16 + 360 >> 2] | 0);
  __ZN6asmdom4DataD2Ev(i16 + 572 | 0);
  HEAP32[i16 + 488 >> 2] = 0;
  HEAP32[i16 + 508 >> 2] = 0;
  i1 = HEAP32[i16 + 552 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i16 + 552 >> 2] | 0;
  HEAP32[i16 + 552 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i11 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i11 >> 2] | 0);
  if ((HEAP8[i16 + 528 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i16 + 528 >> 2] | 0);
  __ZN6asmdom4DataD2Ev(i16 + 732 | 0);
  HEAP32[i16 + 644 >> 2] = 0;
  HEAP32[i16 + 664 >> 2] = 0;
  i1 = HEAP32[i16 + 712 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i16 + 712 >> 2] | 0;
  HEAP32[i16 + 712 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i9 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i9 >> 2] | 0);
  if ((HEAP8[i16 + 688 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i16 + 688 >> 2] | 0);
  __ZN6asmdom4DataD2Ev(i16 + 892 | 0);
  HEAP32[i16 + 804 >> 2] = 0;
  HEAP32[i16 + 824 >> 2] = 0;
  i1 = HEAP32[i16 + 872 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i16 + 872 >> 2] | 0;
  HEAP32[i16 + 872 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 >> 2] | 0);
  if ((HEAP8[i16 + 848 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i16 + 848 >> 2] | 0);
  __ZN6asmdom4DataD2Ev(i16 + 1108 | 0);
  HEAP32[i16 + 976 >> 2] = 0;
  HEAP32[i16 + 996 >> 2] = 0;
  i1 = HEAP32[i16 + 1088 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i16 + 1088 >> 2] | 0;
  HEAP32[i16 + 1088 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i15 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i15 >> 2] | 0);
  if ((HEAP8[i4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 >> 2] | 0);
  if ((HEAP8[i10 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 >> 2] | 0);
  if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
  if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
  if ((HEAP8[i16 + 1016 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i16 + 1016 >> 2] | 0);
  __ZN6asmdom5VNodeD2Ev(i5);
  __ZdlPv(i5);
  if (!i6) break; else i6 = i6 + -1 | 0;
 }
 STACKTOP = i16;
 return;
}
function __Z24patchWithoutChangesSetupv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 496 | 0;
 i9 = __emval_get_global(4949) | 0;
 i8 = __emval_new_cstring(4958) | 0;
 HEAP32[i10 + 476 >> 2] = i8;
 __ZN10emscripten8internal12MethodCallerINS_3valEJS2_EE4callEPNS0_7_EM_VALEPKcOS2_(i10 + 488 | 0, i9, i10 + 476 | 0);
 __emval_decref(i8 | 0);
 __emval_decref(i9 | 0);
 i9 = i10 + 476 + 4 | 0;
 i8 = i10 + 476 + 8 | 0;
 i5 = __Znwj(400) | 0;
 HEAP32[i10 + 476 >> 2] = i5;
 HEAP32[i9 >> 2] = i5;
 HEAP32[i8 >> 2] = i5 + 400;
 i5 = i10 + 248 + 12 | 0;
 i6 = i10 + 56 + 12 | 0;
 i4 = 0;
 do {
  HEAP32[i10 + 404 >> 2] = 0;
  HEAP32[i10 + 404 + 4 >> 2] = 0;
  HEAP32[i10 + 404 + 8 >> 2] = 0;
  HEAP8[i10 + 404 + 11 >> 0] = 4;
  HEAP32[i10 + 404 >> 2] = 1851879539;
  HEAP8[i10 + 404 + 4 >> 0] = 0;
  __ZNSt3__29to_stringEi(i10 + 224 | 0, i4);
  HEAP32[i10 + 248 >> 2] = 0;
  HEAP32[i10 + 248 + 4 >> 2] = 0;
  HEAP32[i10 + 248 + 8 >> 2] = 0;
  HEAP8[i10 + 248 + 11 >> 0] = 1;
  HEAP8[i10 + 248 >> 0] = 101;
  HEAP8[i10 + 248 + 1 >> 0] = 0;
  HEAP32[i5 >> 2] = HEAP32[i10 + 224 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i10 + 224 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i10 + 224 + 8 >> 2];
  HEAP32[i10 + 224 >> 2] = 0;
  HEAP32[i10 + 224 + 4 >> 2] = 0;
  HEAP32[i10 + 224 + 8 >> 2] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 272 | 0, i10 + 248 | 0, 1);
  HEAP32[i10 + 204 >> 2] = 0;
  HEAP32[i10 + 204 + 4 >> 2] = 0;
  HEAP32[i10 + 204 + 8 >> 2] = 0;
  HEAP32[i10 + 204 + 12 >> 2] = 0;
  HEAPF32[i10 + 204 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i10 + 184 >> 2] = 0;
  HEAP32[i10 + 184 + 4 >> 2] = 0;
  HEAP32[i10 + 184 + 8 >> 2] = 0;
  HEAP32[i10 + 184 + 12 >> 2] = 0;
  HEAPF32[i10 + 184 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 344 | 0, i10 + 272 | 0, i10 + 204 | 0, i10 + 184 | 0);
  HEAP32[i10 + 160 >> 2] = 0;
  HEAP32[i10 + 160 + 4 >> 2] = 0;
  HEAP32[i10 + 160 + 8 >> 2] = 0;
  HEAP8[i10 + 160 + 11 >> 0] = 4;
  HEAP32[i10 + 160 >> 2] = 1851879539;
  HEAP8[i10 + 160 + 4 >> 0] = 0;
  __ZNSt3__29to_stringEi(i10 + 40 | 0, i4 + -3 | 0);
  HEAP32[i10 + 56 >> 2] = 0;
  HEAP32[i10 + 56 + 4 >> 2] = 0;
  HEAP32[i10 + 56 + 8 >> 2] = 0;
  HEAP8[i10 + 56 + 11 >> 0] = 1;
  HEAP8[i10 + 56 >> 0] = 101;
  HEAP8[i10 + 56 + 1 >> 0] = 0;
  HEAP32[i6 >> 2] = HEAP32[i10 + 40 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i10 + 40 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i10 + 40 + 8 >> 2];
  HEAP32[i10 + 40 >> 2] = 0;
  HEAP32[i10 + 40 + 4 >> 2] = 0;
  HEAP32[i10 + 40 + 8 >> 2] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 80 | 0, i10 + 56 | 0, 1);
  HEAP32[i10 + 20 >> 2] = 0;
  HEAP32[i10 + 20 + 4 >> 2] = 0;
  HEAP32[i10 + 20 + 8 >> 2] = 0;
  HEAP32[i10 + 20 + 12 >> 2] = 0;
  HEAPF32[i10 + 20 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i10 + 8 >> 2] = 0;
  HEAP32[i10 + 12 >> 2] = 0;
  HEAPF32[i10 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 100 | 0, i10 + 80 | 0, i10 + 20 | 0, i10);
  i3 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i3, i10 + 160 | 0, i10 + 100 | 0);
  i2 = __Znwj(4) | 0;
  HEAP32[i10 + 172 >> 2] = i2;
  HEAP32[i10 + 172 + 8 >> 2] = i2 + 4;
  HEAP32[i2 >> 2] = i3;
  HEAP32[i10 + 172 + 4 >> 2] = i2 + 4;
  i3 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i3, i10 + 404 | 0, i10 + 344 | 0, i10 + 172 | 0);
  HEAP32[i10 + 464 >> 2] = i3;
  i1 = HEAP32[i9 >> 2] | 0;
  if (i1 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
   HEAP32[i1 >> 2] = i3;
   HEAP32[i9 >> 2] = i1 + 4;
  } else __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i10 + 476 | 0, i10 + 464 | 0);
  if (i2 | 0) {
   HEAP32[i10 + 172 + 4 >> 2] = i2;
   __ZdlPv(i2);
  }
  __ZN6asmdom4DataD2Ev(i10 + 100 | 0);
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 20 >> 2] = 0;
  i1 = HEAP32[i10 + 80 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i10 + 80 >> 2] | 0;
  HEAP32[i10 + 80 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
  if ((HEAP8[i10 + 56 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 56 >> 2] | 0);
  __ZN6asmdom4DataD2Ev(i10 + 344 | 0);
  HEAP32[i10 + 184 >> 2] = 0;
  HEAP32[i10 + 204 >> 2] = 0;
  i1 = HEAP32[i10 + 272 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i10 + 272 >> 2] | 0;
  HEAP32[i10 + 272 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
  if ((HEAP8[i10 + 248 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 248 >> 2] | 0);
  i4 = i4 + 1 | 0;
 } while ((i4 | 0) < 100);
 HEAP32[i10 + 464 + 4 >> 2] = 0;
 HEAP32[i10 + 464 + 4 + 4 >> 2] = 0;
 HEAP8[i10 + 464 + 11 >> 0] = 3;
 HEAP8[i10 + 464 >> 0] = HEAP8[4978] | 0;
 HEAP8[i10 + 464 + 1 >> 0] = HEAP8[4979] | 0;
 HEAP8[i10 + 464 + 2 >> 0] = HEAP8[4980] | 0;
 HEAP8[i10 + 464 + 3 >> 0] = 0;
 HEAP32[i10 + 272 + 4 >> 2] = 0;
 HEAP32[i10 + 272 + 4 + 4 >> 2] = 0;
 HEAP8[i10 + 272 + 11 >> 0] = 3;
 HEAP8[i10 + 272 >> 0] = HEAP8[4982] | 0;
 HEAP8[i10 + 272 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i10 + 272 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i10 + 272 + 3 >> 0] = 0;
 i5 = i10 + 272 + 12 | 0;
 HEAP32[i10 + 272 + 16 >> 2] = 0;
 HEAP32[i10 + 272 + 16 + 4 >> 2] = 0;
 HEAP8[i5 + 11 >> 0] = 3;
 HEAP8[i5 >> 0] = HEAP8[4982] | 0;
 HEAP8[i5 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i5 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i5 + 3 >> 0] = 0;
 i3 = i10 + 272 + 24 | 0;
 HEAP32[i10 + 272 + 28 >> 2] = 0;
 HEAP32[i10 + 272 + 28 + 4 >> 2] = 0;
 HEAP8[i3 + 11 >> 0] = 3;
 HEAP8[i3 >> 0] = HEAP8[4986] | 0;
 HEAP8[i3 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i3 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i3 + 3 >> 0] = 0;
 i6 = i10 + 272 + 36 | 0;
 HEAP32[i10 + 272 + 40 >> 2] = 0;
 HEAP32[i10 + 272 + 40 + 4 >> 2] = 0;
 HEAP8[i6 + 11 >> 0] = 3;
 HEAP8[i6 >> 0] = HEAP8[4986] | 0;
 HEAP8[i6 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i6 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i6 + 3 >> 0] = 0;
 i4 = i10 + 272 + 48 | 0;
 HEAP32[i10 + 272 + 52 >> 2] = 0;
 HEAP32[i10 + 272 + 52 + 4 >> 2] = 0;
 HEAP8[i4 + 11 >> 0] = 3;
 HEAP8[i4 >> 0] = HEAP8[4990] | 0;
 HEAP8[i4 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i4 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i4 + 3 >> 0] = 0;
 i7 = i10 + 272 + 60 | 0;
 HEAP32[i10 + 272 + 64 >> 2] = 0;
 HEAP32[i10 + 272 + 64 + 4 >> 2] = 0;
 HEAP8[i7 + 11 >> 0] = 3;
 HEAP8[i7 >> 0] = HEAP8[4990] | 0;
 HEAP8[i7 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i7 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i7 + 3 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 344 | 0, i10 + 272 | 0, 3);
 HEAP32[i10 + 248 >> 2] = 0;
 HEAP32[i10 + 248 + 4 >> 2] = 0;
 HEAP32[i10 + 248 + 8 >> 2] = 0;
 HEAP32[i10 + 248 + 12 >> 2] = 0;
 HEAPF32[i10 + 248 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i10 + 224 >> 2] = 0;
 HEAP32[i10 + 224 + 4 >> 2] = 0;
 HEAP32[i10 + 224 + 8 >> 2] = 0;
 HEAP32[i10 + 224 + 12 >> 2] = 0;
 HEAPF32[i10 + 224 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 404 | 0, i10 + 344 | 0, i10 + 248 | 0, i10 + 224 | 0);
 i1 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i1, i10 + 464 | 0, i10 + 404 | 0, i10 + 476 | 0);
 HEAP32[2385] = i1;
 __ZN6asmdom4DataD2Ev(i10 + 404 | 0);
 HEAP32[i10 + 224 >> 2] = 0;
 HEAP32[i10 + 248 >> 2] = 0;
 i1 = HEAP32[i10 + 344 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i10 + 344 >> 2] | 0;
 HEAP32[i10 + 344 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
 if ((HEAP8[i4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 >> 2] | 0);
 if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
 if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
 if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
 if ((HEAP8[i10 + 272 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 272 >> 2] | 0);
 __ZN6asmdom5patchERKN10emscripten3valEPNS_5VNodeE(i10 + 488 | 0, HEAP32[2385] | 0);
 i2 = HEAP32[i10 + 476 >> 2] | 0;
 if (i2 | 0) {
  i1 = HEAP32[i9 >> 2] | 0;
  if ((i1 | 0) != (i2 | 0)) HEAP32[i9 >> 2] = i1 + (~((i1 + -4 - i2 | 0) >>> 2) << 2);
  __ZdlPv(i2);
  HEAP32[i8 >> 2] = 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 + 476 >> 2] = 0;
 }
 i6 = __Znwj(400) | 0;
 HEAP32[i10 + 476 >> 2] = i6;
 HEAP32[i9 >> 2] = i6;
 HEAP32[i8 >> 2] = i6 + 400;
 i6 = i10 + 248 + 12 | 0;
 i5 = i10 + 56 + 12 | 0;
 i4 = 0;
 do {
  HEAP32[i10 + 404 >> 2] = 0;
  HEAP32[i10 + 404 + 4 >> 2] = 0;
  HEAP32[i10 + 404 + 8 >> 2] = 0;
  HEAP8[i10 + 404 + 11 >> 0] = 4;
  HEAP32[i10 + 404 >> 2] = 1851879539;
  HEAP8[i10 + 404 + 4 >> 0] = 0;
  __ZNSt3__29to_stringEi(i10 + 224 | 0, i4);
  HEAP32[i10 + 248 >> 2] = 0;
  HEAP32[i10 + 248 + 4 >> 2] = 0;
  HEAP32[i10 + 248 + 8 >> 2] = 0;
  HEAP8[i10 + 248 + 11 >> 0] = 1;
  HEAP8[i10 + 248 >> 0] = 101;
  HEAP8[i10 + 248 + 1 >> 0] = 0;
  HEAP32[i6 >> 2] = HEAP32[i10 + 224 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i10 + 224 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i10 + 224 + 8 >> 2];
  HEAP32[i10 + 224 >> 2] = 0;
  HEAP32[i10 + 224 + 4 >> 2] = 0;
  HEAP32[i10 + 224 + 8 >> 2] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 272 | 0, i10 + 248 | 0, 1);
  HEAP32[i10 + 204 >> 2] = 0;
  HEAP32[i10 + 204 + 4 >> 2] = 0;
  HEAP32[i10 + 204 + 8 >> 2] = 0;
  HEAP32[i10 + 204 + 12 >> 2] = 0;
  HEAPF32[i10 + 204 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i10 + 184 >> 2] = 0;
  HEAP32[i10 + 184 + 4 >> 2] = 0;
  HEAP32[i10 + 184 + 8 >> 2] = 0;
  HEAP32[i10 + 184 + 12 >> 2] = 0;
  HEAPF32[i10 + 184 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 344 | 0, i10 + 272 | 0, i10 + 204 | 0, i10 + 184 | 0);
  HEAP32[i10 + 160 >> 2] = 0;
  HEAP32[i10 + 160 + 4 >> 2] = 0;
  HEAP32[i10 + 160 + 8 >> 2] = 0;
  HEAP8[i10 + 160 + 11 >> 0] = 4;
  HEAP32[i10 + 160 >> 2] = 1851879539;
  HEAP8[i10 + 160 + 4 >> 0] = 0;
  __ZNSt3__29to_stringEi(i10 + 40 | 0, i4 + -3 | 0);
  HEAP32[i10 + 56 >> 2] = 0;
  HEAP32[i10 + 56 + 4 >> 2] = 0;
  HEAP32[i10 + 56 + 8 >> 2] = 0;
  HEAP8[i10 + 56 + 11 >> 0] = 1;
  HEAP8[i10 + 56 >> 0] = 101;
  HEAP8[i10 + 56 + 1 >> 0] = 0;
  HEAP32[i5 >> 2] = HEAP32[i10 + 40 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i10 + 40 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i10 + 40 + 8 >> 2];
  HEAP32[i10 + 40 >> 2] = 0;
  HEAP32[i10 + 40 + 4 >> 2] = 0;
  HEAP32[i10 + 40 + 8 >> 2] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 80 | 0, i10 + 56 | 0, 1);
  HEAP32[i10 + 20 >> 2] = 0;
  HEAP32[i10 + 20 + 4 >> 2] = 0;
  HEAP32[i10 + 20 + 8 >> 2] = 0;
  HEAP32[i10 + 20 + 12 >> 2] = 0;
  HEAPF32[i10 + 20 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i10 + 8 >> 2] = 0;
  HEAP32[i10 + 12 >> 2] = 0;
  HEAPF32[i10 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 100 | 0, i10 + 80 | 0, i10 + 20 | 0, i10);
  i3 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i3, i10 + 160 | 0, i10 + 100 | 0);
  i2 = __Znwj(4) | 0;
  HEAP32[i10 + 172 >> 2] = i2;
  HEAP32[i10 + 172 + 8 >> 2] = i2 + 4;
  HEAP32[i2 >> 2] = i3;
  HEAP32[i10 + 172 + 4 >> 2] = i2 + 4;
  i3 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i3, i10 + 404 | 0, i10 + 344 | 0, i10 + 172 | 0);
  HEAP32[i10 + 464 >> 2] = i3;
  i1 = HEAP32[i9 >> 2] | 0;
  if (i1 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
   HEAP32[i1 >> 2] = i3;
   HEAP32[i9 >> 2] = i1 + 4;
  } else __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i10 + 476 | 0, i10 + 464 | 0);
  if (i2 | 0) {
   HEAP32[i10 + 172 + 4 >> 2] = i2;
   __ZdlPv(i2);
  }
  __ZN6asmdom4DataD2Ev(i10 + 100 | 0);
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 20 >> 2] = 0;
  i1 = HEAP32[i10 + 80 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i10 + 80 >> 2] | 0;
  HEAP32[i10 + 80 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
  if ((HEAP8[i10 + 56 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 56 >> 2] | 0);
  __ZN6asmdom4DataD2Ev(i10 + 344 | 0);
  HEAP32[i10 + 184 >> 2] = 0;
  HEAP32[i10 + 204 >> 2] = 0;
  i1 = HEAP32[i10 + 272 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i10 + 272 >> 2] | 0;
  HEAP32[i10 + 272 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
  if ((HEAP8[i10 + 248 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 248 >> 2] | 0);
  i4 = i4 + 1 | 0;
 } while ((i4 | 0) < 100);
 HEAP32[i10 + 464 + 4 >> 2] = 0;
 HEAP32[i10 + 464 + 4 + 4 >> 2] = 0;
 HEAP8[i10 + 464 + 11 >> 0] = 3;
 HEAP8[i10 + 464 >> 0] = HEAP8[4978] | 0;
 HEAP8[i10 + 464 + 1 >> 0] = HEAP8[4979] | 0;
 HEAP8[i10 + 464 + 2 >> 0] = HEAP8[4980] | 0;
 HEAP8[i10 + 464 + 3 >> 0] = 0;
 HEAP32[i10 + 272 + 4 >> 2] = 0;
 HEAP32[i10 + 272 + 4 + 4 >> 2] = 0;
 HEAP8[i10 + 272 + 11 >> 0] = 3;
 HEAP8[i10 + 272 >> 0] = HEAP8[4982] | 0;
 HEAP8[i10 + 272 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i10 + 272 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i10 + 272 + 3 >> 0] = 0;
 i5 = i10 + 272 + 12 | 0;
 HEAP32[i10 + 272 + 16 >> 2] = 0;
 HEAP32[i10 + 272 + 16 + 4 >> 2] = 0;
 HEAP8[i5 + 11 >> 0] = 3;
 HEAP8[i5 >> 0] = HEAP8[4982] | 0;
 HEAP8[i5 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i5 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i5 + 3 >> 0] = 0;
 i3 = i10 + 272 + 24 | 0;
 HEAP32[i10 + 272 + 28 >> 2] = 0;
 HEAP32[i10 + 272 + 28 + 4 >> 2] = 0;
 HEAP8[i3 + 11 >> 0] = 3;
 HEAP8[i3 >> 0] = HEAP8[4986] | 0;
 HEAP8[i3 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i3 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i3 + 3 >> 0] = 0;
 i6 = i10 + 272 + 36 | 0;
 HEAP32[i10 + 272 + 40 >> 2] = 0;
 HEAP32[i10 + 272 + 40 + 4 >> 2] = 0;
 HEAP8[i6 + 11 >> 0] = 3;
 HEAP8[i6 >> 0] = HEAP8[4986] | 0;
 HEAP8[i6 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i6 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i6 + 3 >> 0] = 0;
 i4 = i10 + 272 + 48 | 0;
 HEAP32[i10 + 272 + 52 >> 2] = 0;
 HEAP32[i10 + 272 + 52 + 4 >> 2] = 0;
 HEAP8[i4 + 11 >> 0] = 3;
 HEAP8[i4 >> 0] = HEAP8[4990] | 0;
 HEAP8[i4 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i4 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i4 + 3 >> 0] = 0;
 i7 = i10 + 272 + 60 | 0;
 HEAP32[i10 + 272 + 64 >> 2] = 0;
 HEAP32[i10 + 272 + 64 + 4 >> 2] = 0;
 HEAP8[i7 + 11 >> 0] = 3;
 HEAP8[i7 >> 0] = HEAP8[4990] | 0;
 HEAP8[i7 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i7 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i7 + 3 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 344 | 0, i10 + 272 | 0, 3);
 HEAP32[i10 + 248 >> 2] = 0;
 HEAP32[i10 + 248 + 4 >> 2] = 0;
 HEAP32[i10 + 248 + 8 >> 2] = 0;
 HEAP32[i10 + 248 + 12 >> 2] = 0;
 HEAPF32[i10 + 248 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i10 + 224 >> 2] = 0;
 HEAP32[i10 + 224 + 4 >> 2] = 0;
 HEAP32[i10 + 224 + 8 >> 2] = 0;
 HEAP32[i10 + 224 + 12 >> 2] = 0;
 HEAPF32[i10 + 224 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 404 | 0, i10 + 344 | 0, i10 + 248 | 0, i10 + 224 | 0);
 i1 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i1, i10 + 464 | 0, i10 + 404 | 0, i10 + 476 | 0);
 HEAP32[2386] = i1;
 __ZN6asmdom4DataD2Ev(i10 + 404 | 0);
 HEAP32[i10 + 224 >> 2] = 0;
 HEAP32[i10 + 248 >> 2] = 0;
 i1 = HEAP32[i10 + 344 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i10 + 344 >> 2] | 0;
 HEAP32[i10 + 344 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
 if ((HEAP8[i4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 >> 2] | 0);
 if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
 if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
 if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
 if ((HEAP8[i10 + 272 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 272 >> 2] | 0);
 i2 = HEAP32[i10 + 476 >> 2] | 0;
 if (!i2) {
  i9 = HEAP32[i10 + 488 >> 2] | 0;
  __emval_decref(i9 | 0);
  STACKTOP = i10;
  return;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) != (i2 | 0)) HEAP32[i9 >> 2] = i1 + (~((i1 + -4 - i2 | 0) >>> 2) << 2);
 __ZdlPv(i2);
 i9 = HEAP32[i10 + 488 >> 2] | 0;
 __emval_decref(i9 | 0);
 STACKTOP = i10;
 return;
}

function __Z21patchWithChangesSetupv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 560 | 0;
 i9 = __emval_get_global(4949) | 0;
 i8 = __emval_new_cstring(4958) | 0;
 HEAP32[i10 + 532 >> 2] = i8;
 __ZN10emscripten8internal12MethodCallerINS_3valEJS2_EE4callEPNS0_7_EM_VALEPKcOS2_(i10 + 544 | 0, i9, i10 + 532 | 0);
 __emval_decref(i8 | 0);
 __emval_decref(i9 | 0);
 i9 = i10 + 532 + 4 | 0;
 i8 = i10 + 532 + 8 | 0;
 i5 = __Znwj(400) | 0;
 HEAP32[i10 + 532 >> 2] = i5;
 HEAP32[i9 >> 2] = i5;
 HEAP32[i8 >> 2] = i5 + 400;
 i5 = i10 + 304 + 12 | 0;
 i6 = i10 + 64 + 12 | 0;
 i4 = 0;
 do {
  HEAP32[i10 + 460 >> 2] = 0;
  HEAP32[i10 + 460 + 4 >> 2] = 0;
  HEAP32[i10 + 460 + 8 >> 2] = 0;
  HEAP8[i10 + 460 + 11 >> 0] = 4;
  HEAP32[i10 + 460 >> 2] = 1851879539;
  HEAP8[i10 + 460 + 4 >> 0] = 0;
  __ZNSt3__29to_stringEi(i10 + 284 | 0, i4);
  HEAP32[i10 + 304 >> 2] = 0;
  HEAP32[i10 + 304 + 4 >> 2] = 0;
  HEAP32[i10 + 304 + 8 >> 2] = 0;
  HEAP8[i10 + 304 + 11 >> 0] = 1;
  HEAP8[i10 + 304 >> 0] = 101;
  HEAP8[i10 + 304 + 1 >> 0] = 0;
  HEAP32[i5 >> 2] = HEAP32[i10 + 284 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i10 + 284 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i10 + 284 + 8 >> 2];
  HEAP32[i10 + 284 >> 2] = 0;
  HEAP32[i10 + 284 + 4 >> 2] = 0;
  HEAP32[i10 + 284 + 8 >> 2] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 328 | 0, i10 + 304 | 0, 1);
  HEAP32[i10 + 264 >> 2] = 0;
  HEAP32[i10 + 264 + 4 >> 2] = 0;
  HEAP32[i10 + 264 + 8 >> 2] = 0;
  HEAP32[i10 + 264 + 12 >> 2] = 0;
  HEAPF32[i10 + 264 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i10 + 244 >> 2] = 0;
  HEAP32[i10 + 244 + 4 >> 2] = 0;
  HEAP32[i10 + 244 + 8 >> 2] = 0;
  HEAP32[i10 + 244 + 12 >> 2] = 0;
  HEAPF32[i10 + 244 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 400 | 0, i10 + 328 | 0, i10 + 264 | 0, i10 + 244 | 0);
  HEAP32[i10 + 172 >> 2] = 0;
  HEAP32[i10 + 172 + 4 >> 2] = 0;
  HEAP32[i10 + 172 + 8 >> 2] = 0;
  HEAP8[i10 + 172 + 11 >> 0] = 4;
  HEAP32[i10 + 172 >> 2] = 1851879539;
  HEAP8[i10 + 172 + 4 >> 0] = 0;
  __ZNSt3__29to_stringEi(i10 + 40 | 0, i4 + -1 | 0);
  HEAP32[i10 + 64 >> 2] = 0;
  HEAP32[i10 + 64 + 4 >> 2] = 0;
  HEAP32[i10 + 64 + 8 >> 2] = 0;
  HEAP8[i10 + 64 + 11 >> 0] = 1;
  HEAP8[i10 + 64 >> 0] = 101;
  HEAP8[i10 + 64 + 1 >> 0] = 0;
  HEAP32[i6 >> 2] = HEAP32[i10 + 40 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i10 + 40 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i10 + 40 + 8 >> 2];
  HEAP32[i10 + 40 >> 2] = 0;
  HEAP32[i10 + 40 + 4 >> 2] = 0;
  HEAP32[i10 + 40 + 8 >> 2] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 88 | 0, i10 + 64 | 0, 1);
  HEAP32[i10 + 20 >> 2] = 0;
  HEAP32[i10 + 20 + 4 >> 2] = 0;
  HEAP32[i10 + 20 + 8 >> 2] = 0;
  HEAP32[i10 + 20 + 12 >> 2] = 0;
  HEAPF32[i10 + 20 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i10 + 8 >> 2] = 0;
  HEAP32[i10 + 12 >> 2] = 0;
  HEAPF32[i10 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 112 | 0, i10 + 88 | 0, i10 + 20 | 0, i10);
  i3 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i3, i10 + 172 | 0, i10 + 112 | 0);
  i2 = __Znwj(4) | 0;
  HEAP32[i10 + 232 >> 2] = i2;
  HEAP32[i10 + 232 + 8 >> 2] = i2 + 4;
  HEAP32[i2 >> 2] = i3;
  HEAP32[i10 + 232 + 4 >> 2] = i2 + 4;
  i3 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i3, i10 + 460 | 0, i10 + 400 | 0, i10 + 232 | 0);
  HEAP32[i10 + 520 >> 2] = i3;
  i1 = HEAP32[i9 >> 2] | 0;
  if (i1 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
   HEAP32[i1 >> 2] = i3;
   HEAP32[i9 >> 2] = i1 + 4;
  } else __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i10 + 532 | 0, i10 + 520 | 0);
  if (i2 | 0) {
   HEAP32[i10 + 232 + 4 >> 2] = i2;
   __ZdlPv(i2);
  }
  __ZN6asmdom4DataD2Ev(i10 + 112 | 0);
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 20 >> 2] = 0;
  i1 = HEAP32[i10 + 88 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i10 + 88 >> 2] | 0;
  HEAP32[i10 + 88 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
  if ((HEAP8[i10 + 64 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 64 >> 2] | 0);
  __ZN6asmdom4DataD2Ev(i10 + 400 | 0);
  HEAP32[i10 + 244 >> 2] = 0;
  HEAP32[i10 + 264 >> 2] = 0;
  i1 = HEAP32[i10 + 328 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i10 + 328 >> 2] | 0;
  HEAP32[i10 + 328 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
  if ((HEAP8[i10 + 304 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 304 >> 2] | 0);
  i4 = i4 + 1 | 0;
 } while ((i4 | 0) < 100);
 HEAP32[i10 + 520 + 4 >> 2] = 0;
 HEAP32[i10 + 520 + 4 + 4 >> 2] = 0;
 HEAP8[i10 + 520 + 11 >> 0] = 3;
 HEAP8[i10 + 520 >> 0] = HEAP8[4978] | 0;
 HEAP8[i10 + 520 + 1 >> 0] = HEAP8[4979] | 0;
 HEAP8[i10 + 520 + 2 >> 0] = HEAP8[4980] | 0;
 HEAP8[i10 + 520 + 3 >> 0] = 0;
 HEAP32[i10 + 328 + 4 >> 2] = 0;
 HEAP32[i10 + 328 + 4 + 4 >> 2] = 0;
 HEAP8[i10 + 328 + 11 >> 0] = 3;
 HEAP8[i10 + 328 >> 0] = HEAP8[4982] | 0;
 HEAP8[i10 + 328 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i10 + 328 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i10 + 328 + 3 >> 0] = 0;
 i5 = i10 + 328 + 12 | 0;
 HEAP32[i10 + 328 + 16 >> 2] = 0;
 HEAP32[i10 + 328 + 16 + 4 >> 2] = 0;
 HEAP8[i5 + 11 >> 0] = 3;
 HEAP8[i5 >> 0] = HEAP8[4982] | 0;
 HEAP8[i5 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i5 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i5 + 3 >> 0] = 0;
 i3 = i10 + 328 + 24 | 0;
 HEAP32[i10 + 328 + 28 >> 2] = 0;
 HEAP32[i10 + 328 + 28 + 4 >> 2] = 0;
 HEAP8[i3 + 11 >> 0] = 3;
 HEAP8[i3 >> 0] = HEAP8[4986] | 0;
 HEAP8[i3 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i3 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i3 + 3 >> 0] = 0;
 i6 = i10 + 328 + 36 | 0;
 HEAP32[i10 + 328 + 40 >> 2] = 0;
 HEAP32[i10 + 328 + 40 + 4 >> 2] = 0;
 HEAP8[i6 + 11 >> 0] = 3;
 HEAP8[i6 >> 0] = HEAP8[4986] | 0;
 HEAP8[i6 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i6 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i6 + 3 >> 0] = 0;
 i4 = i10 + 328 + 48 | 0;
 HEAP32[i10 + 328 + 52 >> 2] = 0;
 HEAP32[i10 + 328 + 52 + 4 >> 2] = 0;
 HEAP8[i4 + 11 >> 0] = 3;
 HEAP8[i4 >> 0] = HEAP8[4990] | 0;
 HEAP8[i4 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i4 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i4 + 3 >> 0] = 0;
 i7 = i10 + 328 + 60 | 0;
 HEAP32[i10 + 328 + 64 >> 2] = 0;
 HEAP32[i10 + 328 + 64 + 4 >> 2] = 0;
 HEAP8[i7 + 11 >> 0] = 3;
 HEAP8[i7 >> 0] = HEAP8[4990] | 0;
 HEAP8[i7 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i7 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i7 + 3 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 400 | 0, i10 + 328 | 0, 3);
 HEAP32[i10 + 304 >> 2] = 0;
 HEAP32[i10 + 304 + 4 >> 2] = 0;
 HEAP32[i10 + 304 + 8 >> 2] = 0;
 HEAP32[i10 + 304 + 12 >> 2] = 0;
 HEAPF32[i10 + 304 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i10 + 284 >> 2] = 0;
 HEAP32[i10 + 284 + 4 >> 2] = 0;
 HEAP32[i10 + 284 + 8 >> 2] = 0;
 HEAP32[i10 + 284 + 12 >> 2] = 0;
 HEAPF32[i10 + 284 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 460 | 0, i10 + 400 | 0, i10 + 304 | 0, i10 + 284 | 0);
 i1 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i1, i10 + 520 | 0, i10 + 460 | 0, i10 + 532 | 0);
 HEAP32[2387] = i1;
 __ZN6asmdom4DataD2Ev(i10 + 460 | 0);
 HEAP32[i10 + 284 >> 2] = 0;
 HEAP32[i10 + 304 >> 2] = 0;
 i1 = HEAP32[i10 + 400 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i10 + 400 >> 2] | 0;
 HEAP32[i10 + 400 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
 if ((HEAP8[i4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 >> 2] | 0);
 if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
 if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
 if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
 if ((HEAP8[i10 + 328 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 328 >> 2] | 0);
 __ZN6asmdom5patchERKN10emscripten3valEPNS_5VNodeE(i10 + 544 | 0, HEAP32[2387] | 0);
 i2 = HEAP32[i10 + 532 >> 2] | 0;
 if (i2 | 0) {
  i1 = HEAP32[i9 >> 2] | 0;
  if ((i1 | 0) != (i2 | 0)) HEAP32[i9 >> 2] = i1 + (~((i1 + -4 - i2 | 0) >>> 2) << 2);
  __ZdlPv(i2);
  HEAP32[i8 >> 2] = 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 + 532 >> 2] = 0;
 }
 i6 = __Znwj(400) | 0;
 HEAP32[i10 + 532 >> 2] = i6;
 HEAP32[i9 >> 2] = i6;
 HEAP32[i8 >> 2] = i6 + 400;
 i6 = i10 + 304 + 12 | 0;
 i5 = i10 + 88 + 12 | 0;
 i4 = 0;
 do {
  HEAP32[i10 + 460 >> 2] = 0;
  HEAP32[i10 + 460 + 4 >> 2] = 0;
  HEAP32[i10 + 460 + 8 >> 2] = 0;
  HEAP8[i10 + 460 + 11 >> 0] = 4;
  HEAP32[i10 + 460 >> 2] = 1851879539;
  HEAP8[i10 + 460 + 4 >> 0] = 0;
  HEAP32[i10 + 304 >> 2] = 0;
  HEAP32[i10 + 304 + 4 >> 2] = 0;
  HEAP32[i10 + 304 + 8 >> 2] = 0;
  HEAP8[i10 + 304 + 11 >> 0] = 1;
  HEAP8[i10 + 304 >> 0] = 101;
  HEAP8[i10 + 304 + 1 >> 0] = 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  HEAP32[i6 + 8 >> 2] = 0;
  HEAP8[i6 + 11 >> 0] = 2;
  HEAP16[i6 >> 1] = 14130;
  HEAP8[i6 + 2 >> 0] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 328 | 0, i10 + 304 | 0, 1);
  HEAP32[i10 + 284 >> 2] = 0;
  HEAP32[i10 + 284 + 4 >> 2] = 0;
  HEAP32[i10 + 284 + 8 >> 2] = 0;
  HEAP32[i10 + 284 + 12 >> 2] = 0;
  HEAPF32[i10 + 284 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i10 + 264 >> 2] = 0;
  HEAP32[i10 + 264 + 4 >> 2] = 0;
  HEAP32[i10 + 264 + 8 >> 2] = 0;
  HEAP32[i10 + 264 + 12 >> 2] = 0;
  HEAPF32[i10 + 264 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 400 | 0, i10 + 328 | 0, i10 + 284 | 0, i10 + 264 | 0);
  HEAP32[i10 + 232 >> 2] = 0;
  HEAP32[i10 + 232 + 4 >> 2] = 0;
  HEAP32[i10 + 232 + 8 >> 2] = 0;
  HEAP8[i10 + 232 + 11 >> 0] = 4;
  HEAP32[i10 + 232 >> 2] = 1851879539;
  HEAP8[i10 + 232 + 4 >> 0] = 0;
  HEAP32[i10 + 88 >> 2] = 0;
  HEAP32[i10 + 88 + 4 >> 2] = 0;
  HEAP32[i10 + 88 + 8 >> 2] = 0;
  HEAP8[i10 + 88 + 11 >> 0] = 1;
  HEAP8[i10 + 88 >> 0] = 101;
  HEAP8[i10 + 88 + 1 >> 0] = 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  HEAP32[i5 + 8 >> 2] = 0;
  HEAP8[i5 + 11 >> 0] = 2;
  HEAP16[i5 >> 1] = 14130;
  HEAP8[i5 + 2 >> 0] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 112 | 0, i10 + 88 | 0, 1);
  HEAP32[i10 + 64 >> 2] = 0;
  HEAP32[i10 + 64 + 4 >> 2] = 0;
  HEAP32[i10 + 64 + 8 >> 2] = 0;
  HEAP32[i10 + 64 + 12 >> 2] = 0;
  HEAPF32[i10 + 64 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i10 + 40 >> 2] = 0;
  HEAP32[i10 + 40 + 4 >> 2] = 0;
  HEAP32[i10 + 40 + 8 >> 2] = 0;
  HEAP32[i10 + 40 + 12 >> 2] = 0;
  HEAPF32[i10 + 40 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 172 | 0, i10 + 112 | 0, i10 + 64 | 0, i10 + 40 | 0);
  i3 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i3, i10 + 232 | 0, i10 + 172 | 0);
  i2 = __Znwj(4) | 0;
  HEAP32[i10 + 244 >> 2] = i2;
  HEAP32[i10 + 244 + 8 >> 2] = i2 + 4;
  HEAP32[i2 >> 2] = i3;
  HEAP32[i10 + 244 + 4 >> 2] = i2 + 4;
  i3 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i3, i10 + 460 | 0, i10 + 400 | 0, i10 + 244 | 0);
  HEAP32[i10 + 520 >> 2] = i3;
  i1 = HEAP32[i9 >> 2] | 0;
  if (i1 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
   HEAP32[i1 >> 2] = i3;
   HEAP32[i9 >> 2] = i1 + 4;
  } else __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i10 + 532 | 0, i10 + 520 | 0);
  if (i2 | 0) {
   HEAP32[i10 + 244 + 4 >> 2] = i2;
   __ZdlPv(i2);
  }
  __ZN6asmdom4DataD2Ev(i10 + 172 | 0);
  HEAP32[i10 + 40 >> 2] = 0;
  HEAP32[i10 + 64 >> 2] = 0;
  i1 = HEAP32[i10 + 112 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i10 + 112 >> 2] | 0;
  HEAP32[i10 + 112 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
  if ((HEAP8[i10 + 88 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 88 >> 2] | 0);
  __ZN6asmdom4DataD2Ev(i10 + 400 | 0);
  HEAP32[i10 + 264 >> 2] = 0;
  HEAP32[i10 + 284 >> 2] = 0;
  i1 = HEAP32[i10 + 328 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i10 + 328 >> 2] | 0;
  HEAP32[i10 + 328 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
  if ((HEAP8[i10 + 304 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 304 >> 2] | 0);
  i4 = i4 + 1 | 0;
 } while ((i4 | 0) < 100);
 HEAP32[i10 + 520 + 4 >> 2] = 0;
 HEAP32[i10 + 520 + 4 + 4 >> 2] = 0;
 HEAP8[i10 + 520 + 11 >> 0] = 3;
 HEAP8[i10 + 520 >> 0] = HEAP8[4978] | 0;
 HEAP8[i10 + 520 + 1 >> 0] = HEAP8[4979] | 0;
 HEAP8[i10 + 520 + 2 >> 0] = HEAP8[4980] | 0;
 HEAP8[i10 + 520 + 3 >> 0] = 0;
 HEAP32[i10 + 328 + 4 >> 2] = 0;
 HEAP32[i10 + 328 + 4 + 4 >> 2] = 0;
 HEAP8[i10 + 328 + 11 >> 0] = 3;
 HEAP8[i10 + 328 >> 0] = HEAP8[4982] | 0;
 HEAP8[i10 + 328 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i10 + 328 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i10 + 328 + 3 >> 0] = 0;
 i5 = i10 + 328 + 12 | 0;
 HEAP32[i10 + 328 + 16 >> 2] = 0;
 HEAP32[i10 + 328 + 16 + 4 >> 2] = 0;
 HEAP8[i5 + 11 >> 0] = 3;
 HEAP8[i5 >> 0] = HEAP8[4982] | 0;
 HEAP8[i5 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i5 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i5 + 3 >> 0] = 0;
 i3 = i10 + 328 + 24 | 0;
 HEAP32[i10 + 328 + 28 >> 2] = 0;
 HEAP32[i10 + 328 + 28 + 4 >> 2] = 0;
 HEAP8[i3 + 11 >> 0] = 3;
 HEAP8[i3 >> 0] = HEAP8[4986] | 0;
 HEAP8[i3 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i3 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i3 + 3 >> 0] = 0;
 i6 = i10 + 328 + 36 | 0;
 HEAP32[i10 + 328 + 40 >> 2] = 0;
 HEAP32[i10 + 328 + 40 + 4 >> 2] = 0;
 HEAP8[i6 + 11 >> 0] = 3;
 HEAP8[i6 >> 0] = HEAP8[4986] | 0;
 HEAP8[i6 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i6 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i6 + 3 >> 0] = 0;
 i4 = i10 + 328 + 48 | 0;
 HEAP32[i10 + 328 + 52 >> 2] = 0;
 HEAP32[i10 + 328 + 52 + 4 >> 2] = 0;
 HEAP8[i4 + 11 >> 0] = 3;
 HEAP8[i4 >> 0] = HEAP8[4990] | 0;
 HEAP8[i4 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i4 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i4 + 3 >> 0] = 0;
 i7 = i10 + 328 + 60 | 0;
 HEAP32[i10 + 328 + 64 >> 2] = 0;
 HEAP32[i10 + 328 + 64 + 4 >> 2] = 0;
 HEAP8[i7 + 11 >> 0] = 3;
 HEAP8[i7 >> 0] = HEAP8[4990] | 0;
 HEAP8[i7 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i7 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i7 + 3 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i10 + 400 | 0, i10 + 328 | 0, 3);
 HEAP32[i10 + 304 >> 2] = 0;
 HEAP32[i10 + 304 + 4 >> 2] = 0;
 HEAP32[i10 + 304 + 8 >> 2] = 0;
 HEAP32[i10 + 304 + 12 >> 2] = 0;
 HEAPF32[i10 + 304 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i10 + 284 >> 2] = 0;
 HEAP32[i10 + 284 + 4 >> 2] = 0;
 HEAP32[i10 + 284 + 8 >> 2] = 0;
 HEAP32[i10 + 284 + 12 >> 2] = 0;
 HEAPF32[i10 + 284 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i10 + 460 | 0, i10 + 400 | 0, i10 + 304 | 0, i10 + 284 | 0);
 i1 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i1, i10 + 520 | 0, i10 + 460 | 0, i10 + 532 | 0);
 HEAP32[2388] = i1;
 __ZN6asmdom4DataD2Ev(i10 + 460 | 0);
 HEAP32[i10 + 284 >> 2] = 0;
 HEAP32[i10 + 304 >> 2] = 0;
 i1 = HEAP32[i10 + 400 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i10 + 400 >> 2] | 0;
 HEAP32[i10 + 400 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
 if ((HEAP8[i4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 >> 2] | 0);
 if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
 if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
 if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
 if ((HEAP8[i10 + 328 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 328 >> 2] | 0);
 i2 = HEAP32[i10 + 532 >> 2] | 0;
 if (!i2) {
  i9 = HEAP32[i10 + 544 >> 2] | 0;
  __emval_decref(i9 | 0);
  STACKTOP = i10;
  return;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) != (i2 | 0)) HEAP32[i9 >> 2] = i1 + (~((i1 + -4 - i2 | 0) >>> 2) << 2);
 __ZdlPv(i2);
 i9 = HEAP32[i10 + 544 >> 2] | 0;
 __emval_decref(i9 | 0);
 STACKTOP = i10;
 return;
}

function __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i6, i26) {
 i6 = i6 | 0;
 i26 = i26 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i27 = 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 HEAP32[i26 + 96 >> 2] = HEAP32[i6 + 96 >> 2];
 __ZN6asmdom9diffAttrsEPNS_5VNodeES1_(i6, i26);
 __ZN6asmdom9diffPropsEPNS_5VNodeES1_(i6, i26);
 __ZN6asmdom13diffCallbacksEPNS_5VNodeES1_(i6, i26);
 i5 = HEAP8[i26 + 24 + 11 >> 0] | 0;
 if (i5 << 24 >> 24 < 0) i1 = HEAP32[i26 + 28 >> 2] | 0; else i1 = i5 & 255;
 if (i1 | 0) {
  i3 = i5 << 24 >> 24 < 0 ? HEAP32[i26 + 28 >> 2] | 0 : i5 & 255;
  i1 = HEAP8[i6 + 24 + 11 >> 0] | 0;
  L7 : do if ((i3 | 0) == ((i1 << 24 >> 24 < 0 ? HEAP32[i6 + 28 >> 2] | 0 : i1 & 255) | 0)) {
   i2 = HEAP32[i26 + 24 >> 2] | 0;
   i4 = i5 << 24 >> 24 < 0 ? i2 : i26 + 24 | 0;
   i1 = i1 << 24 >> 24 < 0 ? HEAP32[i6 + 24 >> 2] | 0 : i6 + 24 | 0;
   if (i5 << 24 >> 24 < 0) {
    if (!i3) {
     STACKTOP = i27;
     return;
    }
    if (!(_memcmp(i4, i1, i3) | 0)) {
     STACKTOP = i27;
     return;
    } else {
     i1 = HEAP32[i26 + 96 >> 2] | 0;
     break;
    }
   }
   if (!i3) {
    STACKTOP = i27;
    return;
   }
   if ((i2 & 255) << 24 >> 24 == (HEAP8[i1 >> 0] | 0)) {
    i2 = i5 & 255;
    i3 = i26 + 24 | 0;
   } else {
    i1 = HEAP32[i26 + 96 >> 2] | 0;
    i2 = i26 + 24 | 0;
    break;
   }
   while (1) {
    i2 = i2 + -1 | 0;
    i3 = i3 + 1 | 0;
    if (!i2) break;
    i1 = i1 + 1 | 0;
    if ((HEAP8[i3 >> 0] | 0) != (HEAP8[i1 >> 0] | 0)) {
     i18 = 136;
     break L7;
    }
   }
   STACKTOP = i27;
   return;
  } else i18 = 136; while (0);
  do if ((i18 | 0) == 136) {
   i1 = HEAP32[i26 + 96 >> 2] | 0;
   if (i5 << 24 >> 24 < 0) {
    i2 = HEAP32[i26 + 24 >> 2] | 0;
    break;
   } else {
    i2 = i26 + 24 | 0;
    break;
   }
  } while (0);
  _emscripten_asm_const_iii(16, i1 | 0, i2 | 0) | 0;
  STACKTOP = i27;
  return;
 }
 i5 = HEAP32[i26 + 100 >> 2] | 0;
 i3 = HEAP32[i26 + 104 >> 2] | 0;
 i4 = HEAP32[i6 + 104 >> 2] | 0;
 i2 = HEAP32[i6 + 100 >> 2] | 0;
 if ((i5 | 0) == (i3 | 0)) {
  if ((i2 | 0) != (i4 | 0)) {
   _emscripten_asm_const_ii(14, HEAP32[(HEAP32[i2 >> 2] | 0) + 96 >> 2] | 0) | 0;
   if (!((i4 - i2 >> 2) + -1 | 0)) {
    STACKTOP = i27;
    return;
   } else i1 = 1;
   do {
    _emscripten_asm_const_ii(14, HEAP32[(HEAP32[(HEAP32[i6 + 100 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 96 >> 2] | 0) | 0;
    i1 = i1 + 1 | 0;
   } while (i1 >>> 0 <= ((i4 - i2 >> 2) + -1 | 0) >>> 0);
   STACKTOP = i27;
   return;
  }
  i1 = HEAP8[i6 + 24 + 11 >> 0] | 0;
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i6 + 28 >> 2] | 0; else i1 = i1 & 255;
  if (!i1) {
   STACKTOP = i27;
   return;
  }
  _emscripten_asm_const_ii(15, HEAP32[i26 + 96 >> 2] | 0) | 0;
  STACKTOP = i27;
  return;
 }
 if ((i2 | 0) == (i4 | 0)) {
  i1 = HEAP8[i6 + 24 + 11 >> 0] | 0;
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i6 + 28 >> 2] | 0; else i1 = i1 & 255;
  if (!i1) {
   i1 = i3;
   i2 = i5;
   i3 = i5;
  } else {
   _emscripten_asm_const_ii(15, HEAP32[i26 + 96 >> 2] | 0) | 0;
   i3 = HEAP32[i26 + 100 >> 2] | 0;
   i1 = HEAP32[i26 + 104 >> 2] | 0;
   i2 = i3;
  }
  i4 = HEAP32[i26 + 96 >> 2] | 0;
  i2 = (i1 - i2 >> 2) + -1 | 0;
  _emscripten_asm_const_iiii(13, i4 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[i3 >> 2] | 0) | 0, 0) | 0;
  if (!i2) {
   STACKTOP = i27;
   return;
  } else i1 = 1;
  do {
   _emscripten_asm_const_iiii(13, i4 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[(HEAP32[i26 + 100 >> 2] | 0) + (i1 << 2) >> 2] | 0) | 0, 0) | 0;
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 <= i2 >>> 0);
  STACKTOP = i27;
  return;
 }
 i25 = HEAP32[i26 + 96 >> 2] | 0;
 if (!(i4 - i2 >> 2)) {
  i24 = 0;
  i1 = 0;
  i2 = 0;
  i23 = 0;
 } else {
  if (i4 - i2 >> 2 >>> 0 > 1073741823) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i3 = __Znwj(i4 - i2 | 0) | 0;
  i1 = HEAP32[i6 + 100 >> 2] | 0;
  i2 = (HEAP32[i6 + 104 >> 2] | 0) - i1 | 0;
  if ((i2 | 0) > 0) {
   _memcpy(i3 | 0, i1 | 0, i2 | 0) | 0;
   i24 = i3;
   i1 = i3 + (i2 >>> 2 << 2) | 0;
   i2 = i3;
   i23 = i3;
  } else {
   i24 = i3;
   i1 = i3;
   i2 = i3;
   i23 = i3;
  }
 }
 i7 = i1 - i2 | 0;
 i1 = HEAP32[i26 + 100 >> 2] | 0;
 i4 = (HEAP32[i26 + 104 >> 2] | 0) - i1 | 0;
 L76 : do if ((i7 | 0) < 4 | (i4 | 0) < 4) {
  i11 = i1;
  i10 = i1;
  i12 = 0;
  i3 = i1;
  i8 = i1;
  i6 = (i7 | 0) < 4;
  i5 = (i4 | 0) < 4;
  i9 = (i4 >> 2) + -1 | 0;
  i2 = 0;
  i4 = (i7 >> 2) + -1 | 0;
  i7 = 0;
  i1 = 0;
 } else {
  i15 = HEAP32[i1 >> 2] | 0;
  i12 = i15;
  i3 = i1;
  i8 = i1;
  i10 = i1;
  i11 = i1;
  i6 = 0;
  i5 = i1;
  i20 = i1;
  i9 = (i4 >> 2) + -1 | 0;
  i14 = HEAP32[i1 + ((i4 >> 2) + -1 << 2) >> 2] | 0;
  i21 = 0;
  i22 = (i7 >> 2) + -1 | 0;
  i16 = HEAP32[i2 + ((i7 >> 2) + -1 << 2) >> 2] | 0;
  i7 = 0;
  i1 = 0;
  i13 = HEAP32[i2 >> 2] | 0;
  L78 : while (1) {
   L80 : do if (!i13) {
    i13 = i1 + 1 | 0;
    i18 = i5;
    i19 = i20;
    i17 = i6;
    i2 = i21;
    i4 = i22;
    i1 = i13;
    i13 = HEAP32[i23 + (i13 << 2) >> 2] | 0;
   } else {
    if (!i16) {
     i16 = i22 + -1 | 0;
     i18 = i5;
     i19 = i20;
     i17 = i6;
     i2 = i21;
     i4 = i16;
     i16 = HEAP32[i23 + (i16 << 2) >> 2] | 0;
     break;
    }
    if (!i15) {
     i2 = i21 + 1 | 0;
     i15 = HEAP32[i5 + (i2 << 2) >> 2] | 0;
     i18 = i5;
     i19 = i5;
     i12 = i15;
     i17 = i6;
     i4 = i22;
     break;
    }
    if (!i14) {
     i14 = i9 + -1 | 0;
     i18 = i5;
     i19 = i20;
     i17 = i6;
     i9 = i14;
     i14 = HEAP32[i20 + (i14 << 2) >> 2] | 0;
     i2 = i21;
     i4 = i22;
     break;
    }
    if (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i13, i15) | 0) {
     __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i13, i15);
     i13 = i1 + 1 | 0;
     i2 = i21 + 1 | 0;
     i19 = HEAP32[i26 + 100 >> 2] | 0;
     i15 = HEAP32[i19 + (i2 << 2) >> 2] | 0;
     i3 = i19;
     i8 = i19;
     i10 = i19;
     i11 = i19;
     i18 = i19;
     i12 = i15;
     i17 = i6;
     i4 = i22;
     i1 = i13;
     i13 = HEAP32[i23 + (i13 << 2) >> 2] | 0;
     break;
    }
    if (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i16, i14) | 0) {
     __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i16, i14);
     i16 = i22 + -1 | 0;
     i14 = i9 + -1 | 0;
     i2 = HEAP32[i26 + 100 >> 2] | 0;
     i3 = i2;
     i8 = i2;
     i10 = i2;
     i11 = i2;
     i18 = i2;
     i19 = i2;
     i17 = i6;
     i9 = i14;
     i14 = HEAP32[i2 + (i14 << 2) >> 2] | 0;
     i2 = i21;
     i4 = i16;
     i16 = HEAP32[i23 + (i16 << 2) >> 2] | 0;
     break;
    }
    if (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i13, i14) | 0) {
     __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i13, i14);
     _emscripten_asm_const_iiii(11, i25 | 0, HEAP32[i13 + 96 >> 2] | 0, HEAP32[i16 + 96 >> 2] | 0) | 0;
     i13 = i1 + 1 | 0;
     i14 = i9 + -1 | 0;
     i2 = HEAP32[i26 + 100 >> 2] | 0;
     i3 = i2;
     i8 = i2;
     i10 = i2;
     i11 = i2;
     i18 = i2;
     i19 = i2;
     i17 = i6;
     i9 = i14;
     i14 = HEAP32[i2 + (i14 << 2) >> 2] | 0;
     i2 = i21;
     i4 = i22;
     i1 = i13;
     i13 = HEAP32[i23 + (i13 << 2) >> 2] | 0;
     break;
    }
    if (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i16, i15) | 0) {
     __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i16, i15);
     _emscripten_asm_const_iiii(12, i25 | 0, HEAP32[i16 + 96 >> 2] | 0, HEAP32[i13 + 96 >> 2] | 0) | 0;
     i16 = i22 + -1 | 0;
     i2 = i21 + 1 | 0;
     i19 = HEAP32[i26 + 100 >> 2] | 0;
     i15 = HEAP32[i19 + (i2 << 2) >> 2] | 0;
     i3 = i19;
     i8 = i19;
     i10 = i19;
     i11 = i19;
     i18 = i19;
     i12 = i15;
     i17 = i6;
     i4 = i16;
     i16 = HEAP32[i23 + (i16 << 2) >> 2] | 0;
     break;
    }
    if (!i7) {
     i10 = __Znwj(12) | 0;
     HEAP32[i10 + 4 >> 2] = 0;
     HEAP32[i10 + 8 >> 2] = 0;
     HEAP32[i10 >> 2] = i10 + 4;
     if ((i1 | 0) > (i22 | 0)) {
      i17 = i10;
      i20 = i10;
     } else {
      i8 = i1;
      while (1) {
       i3 = HEAP32[i23 + (i8 << 2) >> 2] | 0;
       i2 = HEAP8[i3 + 12 + 11 >> 0] | 0;
       if (i2 << 24 >> 24 < 0) i2 = HEAP32[i3 + 16 >> 2] | 0; else i2 = i2 & 255;
       if (i2 | 0) {
        __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i27, i3 + 12 | 0);
        HEAP32[i27 + 12 >> 2] = i8;
        i4 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i10, i27 + 16 | 0, i27) | 0;
        do if (!(HEAP32[i4 >> 2] | 0)) {
         i2 = __Znwj(32) | 0;
         HEAP32[i2 + 16 >> 2] = HEAP32[i27 >> 2];
         HEAP32[i2 + 16 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
         HEAP32[i2 + 16 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
         HEAP32[i27 >> 2] = 0;
         HEAP32[i27 + 4 >> 2] = 0;
         HEAP32[i27 + 8 >> 2] = 0;
         HEAP32[i2 + 28 >> 2] = HEAP32[i27 + 12 >> 2];
         i3 = HEAP32[i27 + 16 >> 2] | 0;
         HEAP32[i2 >> 2] = 0;
         HEAP32[i2 + 4 >> 2] = 0;
         HEAP32[i2 + 8 >> 2] = i3;
         HEAP32[i4 >> 2] = i2;
         i3 = HEAP32[HEAP32[i10 >> 2] >> 2] | 0;
         if (i3) {
          HEAP32[i10 >> 2] = i3;
          i2 = HEAP32[i4 >> 2] | 0;
         }
         i5 = HEAP32[i10 + 4 >> 2] | 0;
         i20 = (i2 | 0) == (i5 | 0);
         HEAP8[i2 + 12 >> 0] = i20 & 1;
         L120 : do if (!i20) {
          while (1) {
           i6 = i2 + 8 | 0;
           i7 = HEAP32[i6 >> 2] | 0;
           if (HEAP8[i7 + 12 >> 0] | 0) break L120;
           i4 = HEAP32[i7 + 8 >> 2] | 0;
           i3 = HEAP32[i4 >> 2] | 0;
           if ((i3 | 0) == (i7 | 0)) {
            i3 = HEAP32[i4 + 4 >> 2] | 0;
            if (!i3) {
             i18 = 47;
             break;
            }
            if (!(HEAP8[i3 + 12 >> 0] | 0)) i2 = i3 + 12 | 0; else {
             i18 = 47;
             break;
            }
           } else {
            if (!i3) {
             i18 = 56;
             break;
            }
            if (!(HEAP8[i3 + 12 >> 0] | 0)) i2 = i3 + 12 | 0; else {
             i18 = 56;
             break;
            }
           }
           HEAP8[i7 + 12 >> 0] = 1;
           HEAP8[i4 + 12 >> 0] = (i4 | 0) == (i5 | 0) & 1;
           HEAP8[i2 >> 0] = 1;
           if ((i4 | 0) == (i5 | 0)) break L120; else i2 = i4;
          }
          if ((i18 | 0) == 47) {
           if ((HEAP32[i7 >> 2] | 0) == (i2 | 0)) i2 = i7; else {
            i3 = HEAP32[i7 + 4 >> 2] | 0;
            i2 = HEAP32[i3 >> 2] | 0;
            HEAP32[i7 + 4 >> 2] = i2;
            if (!i2) i2 = i4; else {
             HEAP32[i2 + 8 >> 2] = i7;
             i2 = HEAP32[i7 + 8 >> 2] | 0;
            }
            HEAP32[i3 + 8 >> 2] = i2;
            i2 = HEAP32[i7 + 8 >> 2] | 0;
            HEAP32[((HEAP32[i2 >> 2] | 0) == (i7 | 0) ? i2 : i2 + 4 | 0) >> 2] = i3;
            HEAP32[i3 >> 2] = i7;
            HEAP32[i7 + 8 >> 2] = i3;
            i2 = i3;
            i4 = HEAP32[i3 + 8 >> 2] | 0;
           }
           HEAP8[i2 + 12 >> 0] = 1;
           HEAP8[i4 + 12 >> 0] = 0;
           i2 = HEAP32[i4 >> 2] | 0;
           i3 = HEAP32[i2 + 4 >> 2] | 0;
           HEAP32[i4 >> 2] = i3;
           if (i3 | 0) HEAP32[i3 + 8 >> 2] = i4;
           i20 = i4 + 8 | 0;
           HEAP32[i2 + 8 >> 2] = HEAP32[i20 >> 2];
           i19 = HEAP32[i20 >> 2] | 0;
           HEAP32[((HEAP32[i19 >> 2] | 0) == (i4 | 0) ? i19 : i19 + 4 | 0) >> 2] = i2;
           HEAP32[i2 + 4 >> 2] = i4;
           HEAP32[i20 >> 2] = i2;
           break;
          } else if ((i18 | 0) == 56) {
           if ((HEAP32[i7 >> 2] | 0) == (i2 | 0)) {
            i5 = i2 + 4 | 0;
            i3 = HEAP32[i5 >> 2] | 0;
            HEAP32[i7 >> 2] = i3;
            if (i3) {
             HEAP32[i3 + 8 >> 2] = i7;
             i4 = HEAP32[i7 + 8 >> 2] | 0;
            }
            HEAP32[i6 >> 2] = i4;
            i4 = HEAP32[i7 + 8 >> 2] | 0;
            HEAP32[((HEAP32[i4 >> 2] | 0) == (i7 | 0) ? i4 : i4 + 4 | 0) >> 2] = i2;
            HEAP32[i5 >> 2] = i7;
            HEAP32[i7 + 8 >> 2] = i2;
            i4 = HEAP32[i6 >> 2] | 0;
           } else i2 = i7;
           HEAP8[i2 + 12 >> 0] = 1;
           HEAP8[i4 + 12 >> 0] = 0;
           i20 = i4 + 4 | 0;
           i2 = HEAP32[i20 >> 2] | 0;
           i3 = HEAP32[i2 >> 2] | 0;
           HEAP32[i20 >> 2] = i3;
           if (i3 | 0) HEAP32[i3 + 8 >> 2] = i4;
           i20 = i4 + 8 | 0;
           HEAP32[i2 + 8 >> 2] = HEAP32[i20 >> 2];
           i19 = HEAP32[i20 >> 2] | 0;
           HEAP32[((HEAP32[i19 >> 2] | 0) == (i4 | 0) ? i19 : i19 + 4 | 0) >> 2] = i2;
           HEAP32[i2 >> 2] = i4;
           HEAP32[i20 >> 2] = i2;
           break;
          }
         } while (0);
         HEAP32[i10 + 8 >> 2] = (HEAP32[i10 + 8 >> 2] | 0) + 1;
        } else {
         if ((HEAP8[i27 + 11 >> 0] | 0) >= 0) break;
         __ZdlPv(HEAP32[i27 >> 2] | 0);
        } while (0);
       }
       if ((i8 | 0) < (i22 | 0)) i8 = i8 + 1 | 0; else {
        i17 = i10;
        i20 = i10;
        break;
       }
      }
     }
    } else {
     i17 = i6;
     i20 = i7;
    }
    i10 = i15 + 12 | 0;
    i2 = HEAP32[i20 + 4 >> 2] | 0;
    L157 : do if (i2 | 0) {
     i7 = HEAP8[i10 + 11 >> 0] | 0;
     i8 = i7 << 24 >> 24 < 0 ? HEAP32[i15 + 16 >> 2] | 0 : i7 & 255;
     i7 = i7 << 24 >> 24 < 0 ? HEAP32[i10 >> 2] | 0 : i10;
     L159 : while (1) {
      i5 = i2 + 16 | 0;
      i4 = HEAP8[i5 + 11 >> 0] | 0;
      i6 = i4 << 24 >> 24 < 0 ? HEAP32[i2 + 20 >> 2] | 0 : i4 & 255;
      i3 = i6 >>> 0 < i8 >>> 0 ? i6 : i8;
      do if (!i3) i18 = 72; else {
       i3 = _memcmp(i7, i4 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i5, i3) | 0;
       if (!i3) {
        i18 = 72;
        break;
       }
       if ((i3 | 0) < 0) i18 = 74; else i18 = 75;
      } while (0);
      if ((i18 | 0) == 72) if (i8 >>> 0 < i6 >>> 0) i18 = 74; else i18 = 75;
      if ((i18 | 0) != 74) if ((i18 | 0) == 75) {
       i18 = 0;
       i3 = i8 >>> 0 < i6 >>> 0 ? i8 : i6;
       do if (!i3) i18 = 77; else {
        i3 = _memcmp(i4 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i5, i7, i3) | 0;
        if (!i3) {
         i18 = 77;
         break;
        }
        if ((i3 | 0) >= 0) break L159;
       } while (0);
       if ((i18 | 0) == 77) {
        i18 = 0;
        if (i6 >>> 0 >= i8 >>> 0) break;
       }
       i2 = i2 + 4 | 0;
      }
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) break L157;
     }
     i2 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i20, i27 + 16 | 0, i10) | 0;
     i2 = HEAP32[i2 >> 2] | 0;
     if (!i2) {
      i18 = 83;
      break L78;
     }
     i7 = HEAP32[i23 + (HEAP32[i2 + 28 >> 2] << 2) >> 2] | 0;
     i5 = HEAP8[i7 + 11 >> 0] | 0;
     i6 = i5 << 24 >> 24 < 0 ? HEAP32[i7 + 4 >> 2] | 0 : i5 & 255;
     i2 = HEAP8[i12 + 11 >> 0] | 0;
     L178 : do if ((i6 | 0) == ((i2 << 24 >> 24 < 0 ? HEAP32[i15 + 4 >> 2] | 0 : i2 & 255) | 0)) {
      i3 = HEAP32[i7 >> 2] | 0;
      i4 = i5 << 24 >> 24 < 0 ? i3 : i7;
      i2 = i2 << 24 >> 24 < 0 ? HEAP32[i15 >> 2] | 0 : i15;
      L180 : do if (i5 << 24 >> 24 < 0) {
       if (!i6) break;
       if (_memcmp(i4, i2, i6) | 0) {
        i18 = 92;
        break L178;
       }
      } else {
       if (!i6) break;
       if ((i3 & 255) << 24 >> 24 == (HEAP8[i2 >> 0] | 0)) {
        i3 = i5 & 255;
        i4 = i7;
       } else {
        i18 = 92;
        break L178;
       }
       while (1) {
        i3 = i3 + -1 | 0;
        i4 = i4 + 1 | 0;
        if (!i3) break L180;
        i2 = i2 + 1 | 0;
        if ((HEAP8[i4 >> 0] | 0) != (HEAP8[i2 >> 0] | 0)) {
         i18 = 92;
         break L178;
        }
       }
      } while (0);
      __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i7, i15);
      i2 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i20, i27 + 16 | 0, i10) | 0;
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i18 = 94;
       break L78;
      }
      HEAP32[i23 + (HEAP32[i2 + 28 >> 2] << 2) >> 2] = 0;
      _emscripten_asm_const_iiii(12, i25 | 0, HEAP32[i7 + 96 >> 2] | 0, HEAP32[i13 + 96 >> 2] | 0) | 0;
     } else i18 = 92; while (0);
     if ((i18 | 0) == 92) {
      i19 = __ZN6asmdom9createElmEPNS_5VNodeE(i15) | 0;
      _emscripten_asm_const_iiii(12, i25 | 0, i19 | 0, HEAP32[i13 + 96 >> 2] | 0) | 0;
     }
     i2 = i21 + 1 | 0;
     i19 = HEAP32[i26 + 100 >> 2] | 0;
     i15 = HEAP32[i19 + (i2 << 2) >> 2] | 0;
     i3 = i19;
     i8 = i19;
     i10 = i19;
     i11 = i19;
     i18 = i19;
     i12 = i15;
     i4 = i22;
     i7 = i20;
     break L80;
    } while (0);
    i2 = __ZN6asmdom9createElmEPNS_5VNodeE(i15) | 0;
    _emscripten_asm_const_iiii(12, i25 | 0, i2 | 0, HEAP32[i13 + 96 >> 2] | 0) | 0;
    i2 = i21 + 1 | 0;
    i19 = HEAP32[i26 + 100 >> 2] | 0;
    i15 = HEAP32[i19 + (i2 << 2) >> 2] | 0;
    i3 = i19;
    i8 = i19;
    i10 = i19;
    i11 = i19;
    i18 = i19;
    i12 = i15;
    i4 = i22;
    i7 = i20;
   } while (0);
   i6 = (i1 | 0) > (i4 | 0);
   i5 = (i2 | 0) > (i9 | 0);
   if (i5 | i6) {
    i12 = i17;
    break L76;
   } else {
    i6 = i17;
    i5 = i18;
    i20 = i19;
    i21 = i2;
    i22 = i4;
   }
  }
  if ((i18 | 0) == 83) {
   i27 = ___cxa_allocate_exception(8) | 0;
   __ZNSt11logic_errorC2EPKc(i27, 4166);
   HEAP32[i27 >> 2] = 2324;
   ___cxa_throw(i27 | 0, 1320, 8);
  } else if ((i18 | 0) == 94) {
   i27 = ___cxa_allocate_exception(8) | 0;
   __ZNSt11logic_errorC2EPKc(i27, 4166);
   HEAP32[i27 >> 2] = 2324;
   ___cxa_throw(i27 | 0, 1320, 8);
  }
 } while (0);
 L199 : do if (i6) {
  i1 = i9 + 1 | 0;
  i5 = i2 >>> 0 > i9 >>> 0;
  if (i1 >>> 0 > (((HEAP32[i26 + 104 >> 2] | 0) - i11 >> 2) + -1 | 0) >>> 0) {
   if (i5) break;
   while (1) {
    i1 = i2 + 1 | 0;
    _emscripten_asm_const_iiii(13, i25 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[i3 + (i2 << 2) >> 2] | 0) | 0, 0) | 0;
    if (i1 >>> 0 > i9 >>> 0) break L199;
    i3 = HEAP32[i26 + 100 >> 2] | 0;
    i2 = i1;
   }
  } else {
   i4 = HEAP32[(HEAP32[i10 + (i1 << 2) >> 2] | 0) + 96 >> 2] | 0;
   if (i5) break; else i3 = i8;
   while (1) {
    i1 = i2 + 1 | 0;
    _emscripten_asm_const_iiii(13, i25 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[i3 + (i2 << 2) >> 2] | 0) | 0, i4 | 0) | 0;
    if (i1 >>> 0 > i9 >>> 0) break L199;
    i3 = HEAP32[i26 + 100 >> 2] | 0;
    i2 = i1;
   }
  }
 } else if (!(i1 >>> 0 > i4 >>> 0 | i5 ^ 1)) do {
  _emscripten_asm_const_ii(14, HEAP32[(HEAP32[i23 + (i1 << 2) >> 2] | 0) + 96 >> 2] | 0) | 0;
  i1 = i1 + 1 | 0;
 } while (i1 >>> 0 <= i4 >>> 0); while (0);
 if (i7 | 0) {
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i7 + 4 >> 2] | 0);
  __ZdlPv(i12);
 }
 if (!i23) {
  STACKTOP = i27;
  return;
 }
 __ZdlPv(i24);
 STACKTOP = i27;
 return;
}

function __ZNSt3__212__next_primeEj(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 L1 : do if (i1 >>> 0 < 212) {
  i1 = __ZNSt3__213__lower_boundIRNS_6__lessIjjEEPKjjEET0_S6_S6_RKT1_T_(1808, 2e3, i1) | 0;
  i1 = HEAP32[i1 >> 2] | 0;
 } else {
  i6 = (__ZNSt3__213__lower_boundIRNS_6__lessIjjEEPKjjEET0_S6_S6_RKT1_T_(2e3, 2192, i1 - (((i1 >>> 0) / 210 | 0) * 210 | 0) | 0) | 0) - 2e3 >> 2;
  i7 = (i1 >>> 0) / 210 | 0;
  i2 = ((i1 >>> 0) / 210 | 0) * 210 | 0;
  i4 = 0;
  while (1) {
   i1 = (HEAP32[2e3 + (i6 << 2) >> 2] | 0) + i2 | 0;
   i3 = 5;
   while (1) {
    if (i3 >>> 0 >= 47) {
     i5 = 211;
     i3 = i4;
     i8 = 8;
     break;
    }
    i2 = HEAP32[1808 + (i3 << 2) >> 2] | 0;
    if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) break L1;
    if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
     i1 = i4;
     break;
    } else i3 = i3 + 1 | 0;
   }
   L10 : do if ((i8 | 0) == 8) {
    L11 : while (1) {
     i8 = 0;
     i2 = (i1 >>> 0) / (i5 >>> 0) | 0;
     do if (i2 >>> 0 < i5 >>> 0) {
      i4 = 1;
      i2 = i5;
      i3 = i1;
     } else if ((i1 | 0) == (Math_imul(i2, i5) | 0)) {
      i4 = 9;
      i2 = i5;
     } else {
      i2 = i5 + 10 | 0;
      if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
       i4 = 1;
       i3 = i1;
      } else if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) i4 = 9; else {
       i2 = i5 + 12 | 0;
       if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
        i4 = 1;
        i3 = i1;
       } else if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) i4 = 9; else {
        i2 = i5 + 16 | 0;
        if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
         i4 = 1;
         i3 = i1;
        } else if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) i4 = 9; else {
         i2 = i5 + 18 | 0;
         if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
          i4 = 1;
          i3 = i1;
         } else if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) i4 = 9; else {
          i2 = i5 + 22 | 0;
          if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
           i4 = 1;
           i3 = i1;
          } else if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) i4 = 9; else {
           i2 = i5 + 28 | 0;
           if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
            i4 = 1;
            i3 = i1;
           } else if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) i4 = 9; else {
            i2 = i5 + 30 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 36 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 40 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 42 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 46 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 52 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 58 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 60 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 66 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 70 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 72 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 78 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 82 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 88 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 96 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 100 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 102 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 106 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 108 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 112 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 120 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 126 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 130 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 136 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 138 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 142 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 148 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 150 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 156 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 162 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 166 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 168 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 172 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 178 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 180 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 186 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 190 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 192 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 196 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 198 | 0;
            if (((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0) {
             i4 = 1;
             i3 = i1;
             break;
            }
            if ((i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0)) {
             i4 = 9;
             break;
            }
            i2 = i5 + 208 | 0;
            i9 = ((i1 >>> 0) / (i2 >>> 0) | 0) >>> 0 < i2 >>> 0;
            i10 = (i1 | 0) == (Math_imul((i1 >>> 0) / (i2 >>> 0) | 0, i2) | 0);
            i4 = i9 ? 1 : i10 ? 9 : 0;
            i2 = i9 | i10 ? i2 : i5 + 210 | 0;
            i3 = i9 ? i1 : i3;
           }
          }
         }
        }
       }
      }
     } while (0);
     switch (i4 & 15) {
     case 9:
      {
       i1 = i3;
       break L10;
      }
     case 0:
      {
       i5 = i2;
       i8 = 8;
       break;
      }
     default:
      break L11;
     }
    }
    if (!i4) i1 = i3; else {
     i1 = i3;
     break L1;
    }
   } while (0);
   i4 = i6 + 1 | 0;
   i2 = ((i4 | 0) == 48 & 1) + i7 | 0;
   i6 = (i4 | 0) == 48 ? 0 : i4;
   i7 = i2;
   i2 = i2 * 210 | 0;
   i4 = i1;
  }
 } while (0);
 return i1 | 0;
}

function _printf_core(i16, i1, i17, i18, i19) {
 i16 = i16 | 0;
 i1 = i1 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i20 = 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 HEAP32[i20 + 16 >> 2] = i1;
 i15 = i20 + 24 + 40 | 0;
 i8 = i1;
 i1 = 0;
 i2 = 0;
 i5 = 0;
 L1 : while (1) {
  do if ((i1 | 0) > -1) if ((i2 | 0) > (2147483647 - i1 | 0)) {
   HEAP32[2535] = 75;
   i1 = -1;
   break;
  } else {
   i1 = i2 + i1 | 0;
   break;
  } while (0);
  i2 = HEAP8[i8 >> 0] | 0;
  if (!(i2 << 24 >> 24)) {
   i14 = 87;
   break;
  } else i3 = i8;
  L9 : while (1) {
   switch (i2 << 24 >> 24) {
   case 37:
    {
     i2 = i3;
     i14 = 9;
     break L9;
    }
   case 0:
    {
     i2 = i3;
     break L9;
    }
   default:
    {}
   }
   i13 = i3 + 1 | 0;
   HEAP32[i20 + 16 >> 2] = i13;
   i2 = HEAP8[i13 >> 0] | 0;
   i3 = i13;
  }
  L12 : do if ((i14 | 0) == 9) while (1) {
   i14 = 0;
   if ((HEAP8[i2 + 1 >> 0] | 0) != 37) break L12;
   i3 = i3 + 1 | 0;
   i2 = i2 + 2 | 0;
   HEAP32[i20 + 16 >> 2] = i2;
   if ((HEAP8[i2 >> 0] | 0) == 37) i14 = 9; else break;
  } while (0);
  i3 = i3 - i8 | 0;
  if (i16 | 0) _out(i16, i8, i3);
  if (i3 | 0) {
   i8 = i2;
   i2 = i3;
   continue;
  }
  i4 = i2 + 1 | 0;
  i3 = (HEAP8[i4 >> 0] | 0) + -48 | 0;
  if (i3 >>> 0 < 10) {
   i13 = (HEAP8[i2 + 2 >> 0] | 0) == 36;
   i10 = i13 ? i3 : -1;
   i7 = i13 ? 1 : i5;
   i4 = i13 ? i2 + 3 | 0 : i4;
  } else {
   i10 = -1;
   i7 = i5;
  }
  HEAP32[i20 + 16 >> 2] = i4;
  i2 = HEAP8[i4 >> 0] | 0;
  L24 : do if (((i2 << 24 >> 24) + -32 | 0) >>> 0 < 32) {
   i6 = i2;
   i5 = 0;
   i3 = (i2 << 24 >> 24) + -32 | 0;
   while (1) {
    i2 = 1 << i3;
    if (!(i2 & 75913)) {
     i2 = i6;
     i6 = i5;
     break L24;
    }
    i5 = i5 | i2;
    i4 = i4 + 1 | 0;
    HEAP32[i20 + 16 >> 2] = i4;
    i2 = HEAP8[i4 >> 0] | 0;
    i3 = (i2 << 24 >> 24) + -32 | 0;
    if (i3 >>> 0 >= 32) {
     i6 = i5;
     break;
    } else i6 = i2;
   }
  } else i6 = 0; while (0);
  if (i2 << 24 >> 24 == 42) {
   i3 = i4 + 1 | 0;
   i2 = (HEAP8[i3 >> 0] | 0) + -48 | 0;
   if (i2 >>> 0 < 10) if ((HEAP8[i4 + 2 >> 0] | 0) == 36) {
    HEAP32[i19 + (i2 << 2) >> 2] = 10;
    i5 = 1;
    i2 = i4 + 3 | 0;
    i3 = HEAP32[i18 + ((HEAP8[i3 >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else i14 = 23; else i14 = 23;
   if ((i14 | 0) == 23) {
    i14 = 0;
    if (i7 | 0) {
     i1 = -1;
     break;
    }
    if (i16 | 0) {
     i5 = (HEAP32[i17 >> 2] | 0) + (4 - 1) & ~(4 - 1);
     i13 = HEAP32[i5 >> 2] | 0;
     HEAP32[i17 >> 2] = i5 + 4;
     i5 = 0;
     i2 = i3;
     i3 = i13;
    } else {
     i5 = 0;
     i2 = i3;
     i3 = 0;
    }
   }
   HEAP32[i20 + 16 >> 2] = i2;
   i12 = (i3 | 0) < 0;
   i4 = i2;
   i9 = i12 ? i6 | 8192 : i6;
   i13 = i5;
   i12 = i12 ? 0 - i3 | 0 : i3;
  } else {
   i2 = _getint(i20 + 16 | 0) | 0;
   if ((i2 | 0) < 0) {
    i1 = -1;
    break;
   }
   i4 = HEAP32[i20 + 16 >> 2] | 0;
   i9 = i6;
   i13 = i7;
   i12 = i2;
  }
  do if ((HEAP8[i4 >> 0] | 0) == 46) {
   i2 = i4 + 1 | 0;
   if ((HEAP8[i2 >> 0] | 0) != 42) {
    HEAP32[i20 + 16 >> 2] = i2;
    i6 = _getint(i20 + 16 | 0) | 0;
    i2 = HEAP32[i20 + 16 >> 2] | 0;
    break;
   }
   i2 = i4 + 2 | 0;
   i3 = (HEAP8[i2 >> 0] | 0) + -48 | 0;
   if (i3 >>> 0 < 10) if ((HEAP8[i4 + 3 >> 0] | 0) == 36) {
    HEAP32[i19 + (i3 << 2) >> 2] = 10;
    i6 = HEAP32[i18 + ((HEAP8[i2 >> 0] | 0) + -48 << 3) >> 2] | 0;
    i2 = i4 + 4 | 0;
    HEAP32[i20 + 16 >> 2] = i2;
    break;
   }
   if (i13 | 0) {
    i1 = -1;
    break L1;
   }
   if (i16 | 0) {
    i11 = (HEAP32[i17 >> 2] | 0) + (4 - 1) & ~(4 - 1);
    i3 = HEAP32[i11 >> 2] | 0;
    HEAP32[i17 >> 2] = i11 + 4;
   } else i3 = 0;
   HEAP32[i20 + 16 >> 2] = i2;
   i6 = i3;
  } else {
   i2 = i4;
   i6 = -1;
  } while (0);
  i7 = 0;
  while (1) {
   if (((HEAP8[i2 >> 0] | 0) + -65 | 0) >>> 0 > 57) {
    i1 = -1;
    break L1;
   }
   i11 = i2 + 1 | 0;
   HEAP32[i20 + 16 >> 2] = i11;
   i3 = HEAP8[(HEAP8[i2 >> 0] | 0) + -65 + (6234 + (i7 * 58 | 0)) >> 0] | 0;
   if (((i3 & 255) + -1 | 0) >>> 0 < 8) {
    i2 = i11;
    i7 = i3 & 255;
   } else break;
  }
  if (!(i3 << 24 >> 24)) {
   i1 = -1;
   break;
  }
  i4 = (i10 | 0) > -1;
  do if (i3 << 24 >> 24 == 19) if (i4) {
   i1 = -1;
   break L1;
  } else i14 = 49; else {
   if (i4) {
    HEAP32[i19 + (i10 << 2) >> 2] = i3 & 255;
    i10 = i18 + (i10 << 3) | 0;
    i14 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i20 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i20 + 4 >> 2] = i14;
    i14 = 49;
    break;
   }
   if (!i16) {
    i1 = 0;
    break L1;
   }
   _pop_arg(i20, i3 & 255, i17);
  } while (0);
  if ((i14 | 0) == 49) {
   i14 = 0;
   if (!i16) {
    i8 = i11;
    i2 = 0;
    i5 = i13;
    continue;
   }
  }
  i5 = HEAP8[i2 >> 0] | 0;
  i5 = (i7 | 0) != 0 & (i5 & 15 | 0) == 3 ? i5 & -33 : i5;
  i3 = i9 & -65537;
  i10 = (i9 & 8192 | 0) == 0 ? i9 : i3;
  L71 : do switch (i5 | 0) {
  case 110:
   switch ((i7 & 255) << 24 >> 24) {
   case 0:
    {
     HEAP32[HEAP32[i20 >> 2] >> 2] = i1;
     i8 = i11;
     i2 = 0;
     i5 = i13;
     continue L1;
    }
   case 1:
    {
     HEAP32[HEAP32[i20 >> 2] >> 2] = i1;
     i8 = i11;
     i2 = 0;
     i5 = i13;
     continue L1;
    }
   case 2:
    {
     i8 = HEAP32[i20 >> 2] | 0;
     HEAP32[i8 >> 2] = i1;
     HEAP32[i8 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i8 = i11;
     i2 = 0;
     i5 = i13;
     continue L1;
    }
   case 3:
    {
     HEAP16[HEAP32[i20 >> 2] >> 1] = i1;
     i8 = i11;
     i2 = 0;
     i5 = i13;
     continue L1;
    }
   case 4:
    {
     HEAP8[HEAP32[i20 >> 2] >> 0] = i1;
     i8 = i11;
     i2 = 0;
     i5 = i13;
     continue L1;
    }
   case 6:
    {
     HEAP32[HEAP32[i20 >> 2] >> 2] = i1;
     i8 = i11;
     i2 = 0;
     i5 = i13;
     continue L1;
    }
   case 7:
    {
     i8 = HEAP32[i20 >> 2] | 0;
     HEAP32[i8 >> 2] = i1;
     HEAP32[i8 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i8 = i11;
     i2 = 0;
     i5 = i13;
     continue L1;
    }
   default:
    {
     i8 = i11;
     i2 = 0;
     i5 = i13;
     continue L1;
    }
   }
  case 112:
   {
    i2 = i10 | 8;
    i3 = i6 >>> 0 > 8 ? i6 : 8;
    i5 = 120;
    i14 = 61;
    break;
   }
  case 88:
  case 120:
   {
    i2 = i10;
    i3 = i6;
    i14 = 61;
    break;
   }
  case 111:
   {
    i8 = HEAP32[i20 >> 2] | 0;
    i9 = HEAP32[i20 + 4 >> 2] | 0;
    i3 = _fmt_o(i8, i9, i15) | 0;
    i7 = i3;
    i2 = i10;
    i3 = (i10 & 8 | 0) == 0 | (i6 | 0) > (i15 - i3 | 0) ? i6 : i15 - i3 + 1 | 0;
    i4 = 0;
    i6 = 6698;
    i14 = 67;
    break;
   }
  case 105:
  case 100:
   {
    i2 = HEAP32[i20 >> 2] | 0;
    i3 = HEAP32[i20 + 4 >> 2] | 0;
    if ((i3 | 0) < 0) {
     i2 = _i64Subtract(0, 0, i2 | 0, i3 | 0) | 0;
     i3 = tempRet0;
     HEAP32[i20 >> 2] = i2;
     HEAP32[i20 + 4 >> 2] = i3;
     i4 = 1;
     i5 = 6698;
     i14 = 66;
     break L71;
    } else {
     i4 = (i10 & 2049 | 0) != 0 & 1;
     i5 = (i10 & 2048 | 0) == 0 ? ((i10 & 1 | 0) == 0 ? 6698 : 6700) : 6699;
     i14 = 66;
     break L71;
    }
   }
  case 117:
   {
    i2 = HEAP32[i20 >> 2] | 0;
    i3 = HEAP32[i20 + 4 >> 2] | 0;
    i4 = 0;
    i5 = 6698;
    i14 = 66;
    break;
   }
  case 99:
   {
    HEAP8[i20 + 24 + 39 >> 0] = HEAP32[i20 >> 2];
    i8 = i20 + 24 + 39 | 0;
    i7 = i3;
    i5 = 1;
    i4 = 0;
    i3 = 6698;
    i2 = i15;
    break;
   }
  case 109:
   {
    i2 = _strerror(HEAP32[2535] | 0) | 0;
    i14 = 71;
    break;
   }
  case 115:
   {
    i2 = HEAP32[i20 >> 2] | 0;
    i2 = i2 | 0 ? i2 : 8651;
    i14 = 71;
    break;
   }
  case 67:
   {
    HEAP32[i20 + 8 >> 2] = HEAP32[i20 >> 2];
    HEAP32[i20 + 8 + 4 >> 2] = 0;
    HEAP32[i20 >> 2] = i20 + 8;
    i2 = i20 + 8 | 0;
    i6 = -1;
    i14 = 75;
    break;
   }
  case 83:
   {
    i2 = HEAP32[i20 >> 2] | 0;
    if (!i6) {
     _pad_684(i16, 32, i12, 0, i10);
     i2 = 0;
     i14 = 84;
    } else i14 = 75;
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    i8 = i11;
    i2 = _fmt_fp(i16, +HEAPF64[i20 >> 3], i12, i6, i10, i5) | 0;
    i5 = i13;
    continue L1;
   }
  default:
   {
    i7 = i10;
    i5 = i6;
    i4 = 0;
    i3 = 6698;
    i2 = i15;
   }
  } while (0);
  L95 : do if ((i14 | 0) == 61) {
   i8 = HEAP32[i20 >> 2] | 0;
   i9 = HEAP32[i20 + 4 >> 2] | 0;
   i7 = _fmt_x(i8, i9, i15, i5 & 32) | 0;
   i6 = (i2 & 8 | 0) == 0 | (i8 | 0) == 0 & (i9 | 0) == 0;
   i4 = i6 ? 0 : 2;
   i6 = i6 ? 6698 : 6698 + (i5 >> 4) | 0;
   i14 = 67;
  } else if ((i14 | 0) == 66) {
   i8 = i2;
   i9 = i3;
   i7 = _fmt_u(i2, i3, i15) | 0;
   i2 = i10;
   i3 = i6;
   i6 = i5;
   i14 = 67;
  } else if ((i14 | 0) == 71) {
   i14 = 0;
   i10 = _memchr(i2, i6) | 0;
   i8 = i2;
   i7 = i3;
   i5 = (i10 | 0) == 0 ? i6 : i10 - i2 | 0;
   i4 = 0;
   i3 = 6698;
   i2 = (i10 | 0) == 0 ? i2 + i6 | 0 : i10;
  } else if ((i14 | 0) == 75) {
   i14 = 0;
   i4 = 0;
   i3 = 0;
   i7 = i2;
   while (1) {
    i5 = HEAP32[i7 >> 2] | 0;
    if (!i5) break;
    i3 = _wctomb(i20 + 20 | 0, i5) | 0;
    if ((i3 | 0) < 0 | i3 >>> 0 > (i6 - i4 | 0) >>> 0) break;
    i4 = i3 + i4 | 0;
    if (i6 >>> 0 > i4 >>> 0) i7 = i7 + 4 | 0; else break;
   }
   if ((i3 | 0) < 0) {
    i1 = -1;
    break L1;
   }
   _pad_684(i16, 32, i12, i4, i10);
   if (!i4) {
    i2 = 0;
    i14 = 84;
   } else {
    i5 = 0;
    while (1) {
     i3 = HEAP32[i2 >> 2] | 0;
     if (!i3) {
      i2 = i4;
      i14 = 84;
      break L95;
     }
     i3 = _wctomb(i20 + 20 | 0, i3) | 0;
     i5 = i3 + i5 | 0;
     if ((i5 | 0) > (i4 | 0)) {
      i2 = i4;
      i14 = 84;
      break L95;
     }
     _out(i16, i20 + 20 | 0, i3);
     if (i5 >>> 0 >= i4 >>> 0) {
      i2 = i4;
      i14 = 84;
      break;
     } else i2 = i2 + 4 | 0;
    }
   }
  } while (0);
  if ((i14 | 0) == 67) {
   i14 = 0;
   i5 = (i8 | 0) != 0 | (i9 | 0) != 0;
   i10 = i5 | (i3 | 0) != 0;
   i5 = i15 - i7 + ((i5 ^ 1) & 1) | 0;
   i8 = i10 ? i7 : i15;
   i7 = (i3 | 0) > -1 ? i2 & -65537 : i2;
   i5 = i10 ? ((i3 | 0) > (i5 | 0) ? i3 : i5) : i3;
   i3 = i6;
   i2 = i15;
  } else if ((i14 | 0) == 84) {
   i14 = 0;
   _pad_684(i16, 32, i12, i2, i10 ^ 8192);
   i8 = i11;
   i2 = (i12 | 0) > (i2 | 0) ? i12 : i2;
   i5 = i13;
   continue;
  }
  i10 = i2 - i8 | 0;
  i9 = (i5 | 0) < (i10 | 0) ? i10 : i5;
  i5 = i9 + i4 | 0;
  i2 = (i12 | 0) < (i5 | 0) ? i5 : i12;
  _pad_684(i16, 32, i2, i5, i7);
  _out(i16, i3, i4);
  _pad_684(i16, 48, i2, i5, i7 ^ 65536);
  _pad_684(i16, 48, i9, i10, 0);
  _out(i16, i8, i10);
  _pad_684(i16, 32, i2, i5, i7 ^ 8192);
  i8 = i11;
  i5 = i13;
 }
 L114 : do if ((i14 | 0) == 87) if (!i16) if (!i5) i1 = 0; else {
  i1 = 1;
  while (1) {
   i2 = HEAP32[i19 + (i1 << 2) >> 2] | 0;
   if (!i2) break;
   _pop_arg(i18 + (i1 << 3) | 0, i2, i17);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= 10) {
    i1 = 1;
    break L114;
   }
  }
  while (1) {
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= 10) {
    i1 = 1;
    break L114;
   }
   if (HEAP32[i19 + (i1 << 2) >> 2] | 0) {
    i1 = -1;
    break;
   }
  }
 } while (0);
 STACKTOP = i20;
 return i1 | 0;
}

function __Z22patchWithAdditionSetupv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i8 = __emval_get_global(4949) | 0;
 i6 = __emval_new_cstring(4958) | 0;
 HEAP32[i9 + 204 >> 2] = i6;
 __ZN10emscripten8internal12MethodCallerINS_3valEJS2_EE4callEPNS0_7_EM_VALEPKcOS2_(i9 + 216 | 0, i8, i9 + 204 | 0);
 __emval_decref(i6 | 0);
 __emval_decref(i8 | 0);
 i8 = i9 + 204 + 4 | 0;
 i6 = __Znwj(400) | 0;
 HEAP32[i9 + 204 >> 2] = i6;
 HEAP32[i8 >> 2] = i6;
 HEAP32[i9 + 204 + 8 >> 2] = i6 + 400;
 i6 = 0;
 do {
  HEAP32[i9 + 132 >> 2] = 0;
  HEAP32[i9 + 132 + 4 >> 2] = 0;
  HEAP32[i9 + 132 + 8 >> 2] = 0;
  HEAP8[i9 + 132 + 11 >> 0] = 4;
  HEAP32[i9 + 132 >> 2] = 1851879539;
  HEAP8[i9 + 132 + 4 >> 0] = 0;
  HEAP32[i9 + 112 >> 2] = 0;
  HEAP32[i9 + 112 + 4 >> 2] = 0;
  HEAP32[i9 + 112 + 8 >> 2] = 0;
  HEAP8[i9 + 112 + 11 >> 0] = 4;
  HEAP32[i9 + 112 >> 2] = 1851879539;
  HEAP8[i9 + 112 + 4 >> 0] = 0;
  i1 = __Znwj(112) | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1, i9 + 112 | 0);
  i3 = i1 + 12 | 0;
  i4 = i3 + 40 | 0;
  do {
   HEAP32[i3 >> 2] = 0;
   i3 = i3 + 4 | 0;
  } while ((i3 | 0) < (i4 | 0));
  HEAPF32[i1 + 52 >> 2] = Math_fround(1.0);
  HEAP32[i1 + 56 >> 2] = 0;
  HEAP32[i1 + 56 + 4 >> 2] = 0;
  HEAP32[i1 + 56 + 8 >> 2] = 0;
  HEAP32[i1 + 56 + 12 >> 2] = 0;
  HEAPF32[i1 + 72 >> 2] = Math_fround(1.0);
  HEAP32[i1 + 76 >> 2] = 0;
  HEAP32[i1 + 76 + 4 >> 2] = 0;
  HEAP32[i1 + 76 + 8 >> 2] = 0;
  HEAP32[i1 + 76 + 12 >> 2] = 0;
  HEAPF32[i1 + 92 >> 2] = Math_fround(1.0);
  HEAP32[i1 + 100 >> 2] = 0;
  HEAP32[i1 + 104 >> 2] = 0;
  HEAP32[i1 + 108 >> 2] = 0;
  i5 = __Znwj(4) | 0;
  HEAP32[i5 >> 2] = i1;
  i2 = __Znwj(112) | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2, i9 + 132 | 0);
  i3 = i2 + 12 | 0;
  i4 = i3 + 40 | 0;
  do {
   HEAP32[i3 >> 2] = 0;
   i3 = i3 + 4 | 0;
  } while ((i3 | 0) < (i4 | 0));
  HEAPF32[i2 + 52 >> 2] = Math_fround(1.0);
  HEAP32[i2 + 56 >> 2] = 0;
  HEAP32[i2 + 56 + 4 >> 2] = 0;
  HEAP32[i2 + 56 + 8 >> 2] = 0;
  HEAP32[i2 + 56 + 12 >> 2] = 0;
  HEAPF32[i2 + 72 >> 2] = Math_fround(1.0);
  HEAP32[i2 + 76 >> 2] = 0;
  HEAP32[i2 + 76 + 4 >> 2] = 0;
  HEAP32[i2 + 76 + 8 >> 2] = 0;
  HEAP32[i2 + 76 + 12 >> 2] = 0;
  HEAPF32[i2 + 92 >> 2] = Math_fround(1.0);
  HEAP32[i2 + 100 >> 2] = 0;
  HEAP32[i2 + 104 >> 2] = 0;
  HEAP32[i2 + 108 >> 2] = 0;
  i1 = __Znwj(4) | 0;
  HEAP32[i2 + 104 >> 2] = i1;
  HEAP32[i2 + 100 >> 2] = i1;
  HEAP32[i2 + 108 >> 2] = i1 + 4;
  HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i2 + 104 >> 2] = i1 + 4;
  __ZN6asmdom5VNode11adjustVNodeEv(i2);
  HEAP32[i9 + 192 >> 2] = i2;
  i1 = HEAP32[i8 >> 2] | 0;
  if (i1 >>> 0 < (HEAP32[i9 + 204 + 8 >> 2] | 0) >>> 0) {
   HEAP32[i1 >> 2] = i2;
   HEAP32[i8 >> 2] = i1 + 4;
  } else __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i9 + 204 | 0, i9 + 192 | 0);
  if (i5 | 0) __ZdlPv(i5);
  i6 = i6 + 1 | 0;
 } while ((i6 | 0) < 100);
 HEAP32[i9 + 192 + 4 >> 2] = 0;
 HEAP32[i9 + 192 + 4 + 4 >> 2] = 0;
 HEAP8[i9 + 192 + 11 >> 0] = 3;
 HEAP8[i9 + 192 >> 0] = HEAP8[4978] | 0;
 HEAP8[i9 + 192 + 1 >> 0] = HEAP8[4979] | 0;
 HEAP8[i9 + 192 + 2 >> 0] = HEAP8[4980] | 0;
 HEAP8[i9 + 192 + 3 >> 0] = 0;
 HEAP32[i9 + 40 + 4 >> 2] = 0;
 HEAP32[i9 + 40 + 4 + 4 >> 2] = 0;
 HEAP8[i9 + 40 + 11 >> 0] = 3;
 HEAP8[i9 + 40 >> 0] = HEAP8[4982] | 0;
 HEAP8[i9 + 40 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i9 + 40 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i9 + 40 + 3 >> 0] = 0;
 i5 = i9 + 40 + 12 | 0;
 HEAP32[i9 + 40 + 16 >> 2] = 0;
 HEAP32[i9 + 40 + 16 + 4 >> 2] = 0;
 HEAP8[i5 + 11 >> 0] = 3;
 HEAP8[i5 >> 0] = HEAP8[4982] | 0;
 HEAP8[i5 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i5 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i5 + 3 >> 0] = 0;
 i3 = i9 + 40 + 24 | 0;
 HEAP32[i9 + 40 + 28 >> 2] = 0;
 HEAP32[i9 + 40 + 28 + 4 >> 2] = 0;
 HEAP8[i3 + 11 >> 0] = 3;
 HEAP8[i3 >> 0] = HEAP8[4986] | 0;
 HEAP8[i3 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i3 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i3 + 3 >> 0] = 0;
 i6 = i9 + 40 + 36 | 0;
 HEAP32[i9 + 40 + 40 >> 2] = 0;
 HEAP32[i9 + 40 + 40 + 4 >> 2] = 0;
 HEAP8[i6 + 11 >> 0] = 3;
 HEAP8[i6 >> 0] = HEAP8[4986] | 0;
 HEAP8[i6 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i6 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i6 + 3 >> 0] = 0;
 i4 = i9 + 40 + 48 | 0;
 HEAP32[i9 + 40 + 52 >> 2] = 0;
 HEAP32[i9 + 40 + 52 + 4 >> 2] = 0;
 HEAP8[i4 + 11 >> 0] = 3;
 HEAP8[i4 >> 0] = HEAP8[4990] | 0;
 HEAP8[i4 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i4 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i4 + 3 >> 0] = 0;
 i7 = i9 + 40 + 60 | 0;
 HEAP32[i9 + 40 + 64 >> 2] = 0;
 HEAP32[i9 + 40 + 64 + 4 >> 2] = 0;
 HEAP8[i7 + 11 >> 0] = 3;
 HEAP8[i7 >> 0] = HEAP8[4990] | 0;
 HEAP8[i7 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i7 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i7 + 3 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i9 + 112 | 0, i9 + 40 | 0, 3);
 HEAP32[i9 + 20 >> 2] = 0;
 HEAP32[i9 + 20 + 4 >> 2] = 0;
 HEAP32[i9 + 20 + 8 >> 2] = 0;
 HEAP32[i9 + 20 + 12 >> 2] = 0;
 HEAPF32[i9 + 20 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = 0;
 HEAP32[i9 + 12 >> 2] = 0;
 HEAPF32[i9 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i9 + 132 | 0, i9 + 112 | 0, i9 + 20 | 0, i9);
 i1 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i1, i9 + 192 | 0, i9 + 132 | 0, i9 + 204 | 0);
 HEAP32[2389] = i1;
 __ZN6asmdom4DataD2Ev(i9 + 132 | 0);
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 20 >> 2] = 0;
 i1 = HEAP32[i9 + 112 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i9 + 112 >> 2] | 0;
 HEAP32[i9 + 112 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
 if ((HEAP8[i4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 >> 2] | 0);
 if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
 if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
 if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
 if ((HEAP8[i9 + 40 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i9 + 40 >> 2] | 0);
 __ZN6asmdom5patchERKN10emscripten3valEPNS_5VNodeE(i9 + 216 | 0, HEAP32[2389] | 0);
 HEAP32[i9 + 192 + 4 >> 2] = 0;
 HEAP32[i9 + 192 + 4 + 4 >> 2] = 0;
 HEAP8[i9 + 192 + 11 >> 0] = 3;
 HEAP8[i9 + 192 >> 0] = HEAP8[4978] | 0;
 HEAP8[i9 + 192 + 1 >> 0] = HEAP8[4979] | 0;
 HEAP8[i9 + 192 + 2 >> 0] = HEAP8[4980] | 0;
 HEAP8[i9 + 192 + 3 >> 0] = 0;
 HEAP32[i9 + 40 + 4 >> 2] = 0;
 HEAP32[i9 + 40 + 4 + 4 >> 2] = 0;
 HEAP8[i9 + 40 + 11 >> 0] = 3;
 HEAP8[i9 + 40 >> 0] = HEAP8[4982] | 0;
 HEAP8[i9 + 40 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i9 + 40 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i9 + 40 + 3 >> 0] = 0;
 i5 = i9 + 40 + 12 | 0;
 HEAP32[i9 + 40 + 16 >> 2] = 0;
 HEAP32[i9 + 40 + 16 + 4 >> 2] = 0;
 HEAP8[i5 + 11 >> 0] = 3;
 HEAP8[i5 >> 0] = HEAP8[4982] | 0;
 HEAP8[i5 + 1 >> 0] = HEAP8[4983] | 0;
 HEAP8[i5 + 2 >> 0] = HEAP8[4984] | 0;
 HEAP8[i5 + 3 >> 0] = 0;
 i3 = i9 + 40 + 24 | 0;
 HEAP32[i9 + 40 + 28 >> 2] = 0;
 HEAP32[i9 + 40 + 28 + 4 >> 2] = 0;
 HEAP8[i3 + 11 >> 0] = 3;
 HEAP8[i3 >> 0] = HEAP8[4986] | 0;
 HEAP8[i3 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i3 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i3 + 3 >> 0] = 0;
 i6 = i9 + 40 + 36 | 0;
 HEAP32[i9 + 40 + 40 >> 2] = 0;
 HEAP32[i9 + 40 + 40 + 4 >> 2] = 0;
 HEAP8[i6 + 11 >> 0] = 3;
 HEAP8[i6 >> 0] = HEAP8[4986] | 0;
 HEAP8[i6 + 1 >> 0] = HEAP8[4987] | 0;
 HEAP8[i6 + 2 >> 0] = HEAP8[4988] | 0;
 HEAP8[i6 + 3 >> 0] = 0;
 i4 = i9 + 40 + 48 | 0;
 HEAP32[i9 + 40 + 52 >> 2] = 0;
 HEAP32[i9 + 40 + 52 + 4 >> 2] = 0;
 HEAP8[i4 + 11 >> 0] = 3;
 HEAP8[i4 >> 0] = HEAP8[4990] | 0;
 HEAP8[i4 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i4 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i4 + 3 >> 0] = 0;
 i7 = i9 + 40 + 60 | 0;
 HEAP32[i9 + 40 + 64 >> 2] = 0;
 HEAP32[i9 + 40 + 64 + 4 >> 2] = 0;
 HEAP8[i7 + 11 >> 0] = 3;
 HEAP8[i7 >> 0] = HEAP8[4990] | 0;
 HEAP8[i7 + 1 >> 0] = HEAP8[4991] | 0;
 HEAP8[i7 + 2 >> 0] = HEAP8[4992] | 0;
 HEAP8[i7 + 3 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i9 + 112 | 0, i9 + 40 | 0, 3);
 HEAP32[i9 + 20 >> 2] = 0;
 HEAP32[i9 + 20 + 4 >> 2] = 0;
 HEAP32[i9 + 20 + 8 >> 2] = 0;
 HEAP32[i9 + 20 + 12 >> 2] = 0;
 HEAPF32[i9 + 20 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = 0;
 HEAP32[i9 + 12 >> 2] = 0;
 HEAPF32[i9 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i9 + 132 | 0, i9 + 112 | 0, i9 + 20 | 0, i9);
 i1 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i1, i9 + 192 | 0, i9 + 132 | 0);
 HEAP32[2390] = i1;
 __ZN6asmdom4DataD2Ev(i9 + 132 | 0);
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 20 >> 2] = 0;
 i1 = HEAP32[i9 + 112 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i9 + 112 >> 2] | 0;
 HEAP32[i9 + 112 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
 if ((HEAP8[i4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 >> 2] | 0);
 if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
 if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
 if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
 if ((HEAP8[i9 + 40 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i9 + 40 >> 2] | 0);
 i2 = HEAP32[i9 + 204 >> 2] | 0;
 if (!i2) {
  i8 = HEAP32[i9 + 216 >> 2] | 0;
  __emval_decref(i8 | 0);
  STACKTOP = i9;
  return;
 }
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) != (i2 | 0)) HEAP32[i8 >> 2] = i1 + (~((i1 + -4 - i2 | 0) >>> 2) << 2);
 __ZdlPv(i2);
 i8 = HEAP32[i9 + 216 >> 2] | 0;
 __emval_decref(i8 | 0);
 STACKTOP = i9;
 return;
}

function _fmt_fp(i21, d4, i23, i8, i22, i15) {
 i21 = i21 | 0;
 d4 = +d4;
 i23 = i23 | 0;
 i8 = i8 | 0;
 i22 = i22 | 0;
 i15 = i15 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, d7 = 0.0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i24 = 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 560 | 0;
 i20 = i24 + 524 | 0;
 HEAP32[i24 >> 2] = 0;
 i19 = i24 + 512 + 12 | 0;
 ___DOUBLE_BITS_685(d4) | 0;
 if ((tempRet0 | 0) < 0) {
  i17 = 1;
  i16 = 6708;
  d4 = -d4;
 } else {
  i17 = (i22 & 2049 | 0) != 0 & 1;
  i16 = (i22 & 2048 | 0) == 0 ? ((i22 & 1 | 0) == 0 ? 6709 : 6714) : 6711;
 }
 ___DOUBLE_BITS_685(d4) | 0;
 i18 = tempRet0 & 2146435072;
 do if (i18 >>> 0 < 2146435072 | (i18 | 0) == 2146435072 & 0 < 0) {
  d7 = +_frexpl(d4, i24) * 2.0;
  if (d7 != 0.0) HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + -1;
  if ((i15 | 32 | 0) == 97) {
   i6 = (i15 & 32 | 0) == 0 ? i16 : i16 + 9 | 0;
   i5 = i17 | 2;
   do if (i8 >>> 0 > 11 | (12 - i8 | 0) == 0) d4 = d7; else {
    i1 = 12 - i8 | 0;
    d4 = 8.0;
    do {
     i1 = i1 + -1 | 0;
     d4 = d4 * 16.0;
    } while ((i1 | 0) != 0);
    if ((HEAP8[i6 >> 0] | 0) == 45) {
     d4 = -(d4 + (-d7 - d4));
     break;
    } else {
     d4 = d7 + d4 - d4;
     break;
    }
   } while (0);
   i2 = HEAP32[i24 >> 2] | 0;
   i1 = (i2 | 0) < 0 ? 0 - i2 | 0 : i2;
   i1 = _fmt_u(i1, ((i1 | 0) < 0) << 31 >> 31, i19) | 0;
   if ((i1 | 0) == (i19 | 0)) {
    HEAP8[i24 + 512 + 11 >> 0] = 48;
    i1 = i24 + 512 + 11 | 0;
   }
   HEAP8[i1 + -1 >> 0] = (i2 >> 31 & 2) + 43;
   i3 = i1 + -2 | 0;
   HEAP8[i3 >> 0] = i15 + 15;
   i2 = i24 + 524 | 0;
   while (1) {
    i18 = ~~d4;
    i1 = i2 + 1 | 0;
    HEAP8[i2 >> 0] = HEAPU8[6739 + i18 >> 0] | i15 & 32;
    d4 = (d4 - +(i18 | 0)) * 16.0;
    if ((i1 - i20 | 0) == 1) if (!((i22 & 8 | 0) == 0 & ((i8 | 0) < 1 & d4 == 0.0))) {
     HEAP8[i1 >> 0] = 46;
     i1 = i2 + 2 | 0;
    }
    if (!(d4 != 0.0)) break; else i2 = i1;
   }
   i20 = i1 - i20 | 0;
   i1 = (i8 | 0) != 0 & (i20 + -2 | 0) < (i8 | 0) ? i8 + 2 | 0 : i20;
   _pad_684(i21, 32, i23, i19 - i3 + i5 + i1 | 0, i22);
   _out(i21, i6, i5);
   _pad_684(i21, 48, i23, i19 - i3 + i5 + i1 | 0, i22 ^ 65536);
   _out(i21, i24 + 524 | 0, i20);
   _pad_684(i21, 48, i1 - i20 | 0, 0, 0);
   _out(i21, i3, i19 - i3 | 0);
   _pad_684(i21, 32, i23, i19 - i3 + i5 + i1 | 0, i22 ^ 8192);
   i1 = i19 - i3 + i5 + i1 | 0;
   break;
  }
  i2 = (i8 | 0) < 0 ? 6 : i8;
  if (d7 != 0.0) {
   i3 = (HEAP32[i24 >> 2] | 0) + -28 | 0;
   HEAP32[i24 >> 2] = i3;
   d4 = d7 * 268435456.0;
  } else {
   i3 = HEAP32[i24 >> 2] | 0;
   d4 = d7;
  }
  i18 = (i3 | 0) < 0 ? i24 + 8 | 0 : i24 + 8 + 288 | 0;
  i5 = i18;
  do {
   i14 = ~~d4 >>> 0;
   HEAP32[i5 >> 2] = i14;
   i5 = i5 + 4 | 0;
   d4 = (d4 - +(i14 >>> 0)) * 1.0e9;
  } while (d4 != 0.0);
  if ((i3 | 0) > 0) {
   i1 = i18;
   do {
    i8 = (i3 | 0) < 29 ? i3 : 29;
    i3 = i5 + -4 | 0;
    if (i3 >>> 0 >= i1 >>> 0) {
     i6 = 0;
     do {
      i13 = _bitshift64Shl(HEAP32[i3 >> 2] | 0, 0, i8 | 0) | 0;
      i13 = _i64Add(i13 | 0, tempRet0 | 0, i6 | 0, 0) | 0;
      i14 = tempRet0;
      i12 = ___uremdi3(i13 | 0, i14 | 0, 1e9, 0) | 0;
      HEAP32[i3 >> 2] = i12;
      i6 = ___udivdi3(i13 | 0, i14 | 0, 1e9, 0) | 0;
      i3 = i3 + -4 | 0;
     } while (i3 >>> 0 >= i1 >>> 0);
     if (i6) {
      i1 = i1 + -4 | 0;
      HEAP32[i1 >> 2] = i6;
     }
    }
    while (1) {
     if (i5 >>> 0 <= i1 >>> 0) break;
     i3 = i5 + -4 | 0;
     if (!(HEAP32[i3 >> 2] | 0)) i5 = i3; else break;
    }
    i3 = (HEAP32[i24 >> 2] | 0) - i8 | 0;
    HEAP32[i24 >> 2] = i3;
   } while ((i3 | 0) > 0);
  } else i1 = i18;
  if ((i3 | 0) < 0) {
   do {
    i8 = 0 - i3 | 0;
    i8 = (i8 | 0) < 9 ? i8 : 9;
    if (i1 >>> 0 < i5 >>> 0) {
     i6 = 0;
     i3 = i1;
     do {
      i14 = HEAP32[i3 >> 2] | 0;
      HEAP32[i3 >> 2] = (i14 >>> i8) + i6;
      i6 = Math_imul(i14 & (1 << i8) + -1, 1e9 >>> i8) | 0;
      i3 = i3 + 4 | 0;
     } while (i3 >>> 0 < i5 >>> 0);
     i1 = (HEAP32[i1 >> 2] | 0) == 0 ? i1 + 4 | 0 : i1;
     if (!i6) i3 = i5; else {
      HEAP32[i5 >> 2] = i6;
      i3 = i5 + 4 | 0;
     }
    } else {
     i1 = (HEAP32[i1 >> 2] | 0) == 0 ? i1 + 4 | 0 : i1;
     i3 = i5;
    }
    i5 = (i15 | 32 | 0) == 102 ? i18 : i1;
    i5 = (i3 - i5 >> 2 | 0) > (((i2 + 25 | 0) / 9 | 0) + 1 | 0) ? i5 + (((i2 + 25 | 0) / 9 | 0) + 1 << 2) | 0 : i3;
    i3 = (HEAP32[i24 >> 2] | 0) + i8 | 0;
    HEAP32[i24 >> 2] = i3;
   } while ((i3 | 0) < 0);
   i11 = i5;
  } else i11 = i5;
  if (i1 >>> 0 < i11 >>> 0) {
   i3 = (i18 - i1 >> 2) * 9 | 0;
   i6 = HEAP32[i1 >> 2] | 0;
   if (i6 >>> 0 < 10) i5 = i3; else {
    i5 = 10;
    do {
     i5 = i5 * 10 | 0;
     i3 = i3 + 1 | 0;
    } while (i6 >>> 0 >= i5 >>> 0);
    i5 = i3;
   }
  } else i5 = 0;
  i8 = i2 - ((i15 | 32 | 0) != 102 ? i5 : 0) + (((i2 | 0) != 0 & (i15 | 32 | 0) == 103) << 31 >> 31) | 0;
  if ((i8 | 0) < (((i11 - i18 >> 2) * 9 | 0) + -9 | 0)) {
   i3 = i18 + 4 + (((i8 + 9216 | 0) / 9 | 0) + -1024 << 2) | 0;
   if ((((i8 + 9216 | 0) % 9 | 0) + 1 | 0) < 9) {
    i6 = 10;
    i8 = ((i8 + 9216 | 0) % 9 | 0) + 1 | 0;
    do {
     i6 = i6 * 10 | 0;
     i8 = i8 + 1 | 0;
    } while ((i8 | 0) != 9);
   } else i6 = 10;
   i9 = HEAP32[i3 >> 2] | 0;
   i10 = (i9 >>> 0) % (i6 >>> 0) | 0;
   i8 = (i3 + 4 | 0) == (i11 | 0);
   if (!(i8 & (i10 | 0) == 0)) {
    d7 = (((i9 >>> 0) / (i6 >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
    i14 = (i6 | 0) / 2 | 0;
    d4 = i10 >>> 0 < i14 >>> 0 ? .5 : i8 & (i10 | 0) == (i14 | 0) ? 1.0 : 1.5;
    if (i17) {
     i14 = (HEAP8[i16 >> 0] | 0) == 45;
     d7 = i14 ? -d7 : d7;
     d4 = i14 ? -d4 : d4;
    }
    HEAP32[i3 >> 2] = i9 - i10;
    if (d7 + d4 != d7) {
     i14 = i9 - i10 + i6 | 0;
     HEAP32[i3 >> 2] = i14;
     if (i14 >>> 0 > 999999999) while (1) {
      i5 = i3 + -4 | 0;
      HEAP32[i3 >> 2] = 0;
      if (i5 >>> 0 < i1 >>> 0) {
       i1 = i1 + -4 | 0;
       HEAP32[i1 >> 2] = 0;
      }
      i14 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
      HEAP32[i5 >> 2] = i14;
      if (i14 >>> 0 > 999999999) i3 = i5; else {
       i3 = i5;
       break;
      }
     }
     i5 = (i18 - i1 >> 2) * 9 | 0;
     i8 = HEAP32[i1 >> 2] | 0;
     if (i8 >>> 0 >= 10) {
      i6 = 10;
      do {
       i6 = i6 * 10 | 0;
       i5 = i5 + 1 | 0;
      } while (i8 >>> 0 >= i6 >>> 0);
     }
    }
   }
   i13 = i3 + 4 | 0;
   i14 = i1;
   i1 = i11 >>> 0 > i13 >>> 0 ? i13 : i11;
  } else {
   i14 = i1;
   i1 = i11;
  }
  i13 = i1;
  while (1) {
   if (i13 >>> 0 <= i14 >>> 0) {
    i12 = 0;
    break;
   }
   i1 = i13 + -4 | 0;
   if (!(HEAP32[i1 >> 2] | 0)) i13 = i1; else {
    i12 = 1;
    break;
   }
  }
  i9 = 0 - i5 | 0;
  do if ((i15 | 32 | 0) == 103) {
   i11 = (i5 | 0) > -5 ? ((((i2 | 0) != 0 ^ 1) & 1) + i2 | 0) > (i5 | 0) : 0;
   i8 = (i11 ? -1 : -2) + i15 | 0;
   i2 = (((i2 | 0) != 0 ^ 1) & 1) + i2 + -1 + (i11 ? i9 : 0) | 0;
   if (!(i22 & 8)) {
    if (i12) {
     i3 = HEAP32[i13 + -4 >> 2] | 0;
     if (!i3) i1 = 9; else if (!((i3 >>> 0) % 10 | 0)) {
      i6 = 10;
      i1 = 0;
      do {
       i6 = i6 * 10 | 0;
       i1 = i1 + 1 | 0;
      } while (!((i3 >>> 0) % (i6 >>> 0) | 0 | 0));
     } else i1 = 0;
    } else i1 = 9;
    i3 = ((i13 - i18 >> 2) * 9 | 0) + -9 | 0;
    if ((i8 | 32 | 0) == 102) {
     i3 = i3 - i1 | 0;
     i3 = (i3 | 0) > 0 ? i3 : 0;
     i10 = 0;
     i2 = (i2 | 0) < (i3 | 0) ? i2 : i3;
     i3 = i8;
     break;
    } else {
     i3 = i3 + i5 - i1 | 0;
     i3 = (i3 | 0) > 0 ? i3 : 0;
     i10 = 0;
     i2 = (i2 | 0) < (i3 | 0) ? i2 : i3;
     i3 = i8;
     break;
    }
   } else {
    i10 = i22 & 8;
    i3 = i8;
   }
  } else {
   i10 = i22 & 8;
   i3 = i15;
  } while (0);
  i8 = i2 | i10;
  i6 = (i3 | 32 | 0) == 102;
  if (i6) {
   i11 = 0;
   i1 = (i5 | 0) > 0 ? i5 : 0;
  } else {
   i1 = (i5 | 0) < 0 ? i9 : i5;
   i1 = _fmt_u(i1, ((i1 | 0) < 0) << 31 >> 31, i19) | 0;
   if ((i19 - i1 | 0) < 2) do {
    i1 = i1 + -1 | 0;
    HEAP8[i1 >> 0] = 48;
   } while ((i19 - i1 | 0) < 2);
   HEAP8[i1 + -1 >> 0] = (i5 >> 31 & 2) + 43;
   i1 = i1 + -2 | 0;
   HEAP8[i1 >> 0] = i3;
   i11 = i1;
   i1 = i19 - i1 | 0;
  }
  i1 = i17 + 1 + i2 + ((i8 | 0) != 0 & 1) + i1 | 0;
  _pad_684(i21, 32, i23, i1, i22);
  _out(i21, i16, i17);
  _pad_684(i21, 48, i23, i1, i22 ^ 65536);
  if (i6) {
   i6 = i14 >>> 0 > i18 >>> 0 ? i18 : i14;
   i5 = i6;
   do {
    i3 = _fmt_u(HEAP32[i5 >> 2] | 0, 0, i24 + 524 + 9 | 0) | 0;
    if ((i5 | 0) == (i6 | 0)) {
     if ((i3 | 0) == (i24 + 524 + 9 | 0)) {
      HEAP8[i24 + 524 + 8 >> 0] = 48;
      i3 = i24 + 524 + 8 | 0;
     }
    } else if (i3 >>> 0 > (i24 + 524 | 0) >>> 0) {
     _memset(i24 + 524 | 0, 48, i3 - i20 | 0) | 0;
     do i3 = i3 + -1 | 0; while (i3 >>> 0 > (i24 + 524 | 0) >>> 0);
    }
    _out(i21, i3, i24 + 524 + 9 - i3 | 0);
    i5 = i5 + 4 | 0;
   } while (i5 >>> 0 <= i18 >>> 0);
   if (i8 | 0) _out(i21, 9369, 1);
   if ((i2 | 0) > 0 & i5 >>> 0 < i13 >>> 0) while (1) {
    i3 = _fmt_u(HEAP32[i5 >> 2] | 0, 0, i24 + 524 + 9 | 0) | 0;
    if (i3 >>> 0 > (i24 + 524 | 0) >>> 0) {
     _memset(i24 + 524 | 0, 48, i3 - i20 | 0) | 0;
     do i3 = i3 + -1 | 0; while (i3 >>> 0 > (i24 + 524 | 0) >>> 0);
    }
    _out(i21, i3, (i2 | 0) < 9 ? i2 : 9);
    i5 = i5 + 4 | 0;
    i3 = i2 + -9 | 0;
    if (!((i2 | 0) > 9 & i5 >>> 0 < i13 >>> 0)) {
     i2 = i3;
     break;
    } else i2 = i3;
   }
   _pad_684(i21, 48, i2 + 9 | 0, 9, 0);
  } else {
   i9 = i12 ? i13 : i14 + 4 | 0;
   if ((i2 | 0) > -1) {
    i8 = (i10 | 0) == 0;
    i6 = i14;
    do {
     i3 = _fmt_u(HEAP32[i6 >> 2] | 0, 0, i24 + 524 + 9 | 0) | 0;
     if ((i3 | 0) == (i24 + 524 + 9 | 0)) {
      HEAP8[i24 + 524 + 8 >> 0] = 48;
      i3 = i24 + 524 + 8 | 0;
     }
     do if ((i6 | 0) == (i14 | 0)) {
      i5 = i3 + 1 | 0;
      _out(i21, i3, 1);
      if (i8 & (i2 | 0) < 1) {
       i3 = i5;
       break;
      }
      _out(i21, 9369, 1);
      i3 = i5;
     } else {
      if (i3 >>> 0 <= (i24 + 524 | 0) >>> 0) break;
      _memset(i24 + 524 | 0, 48, i3 + (0 - i20) | 0) | 0;
      do i3 = i3 + -1 | 0; while (i3 >>> 0 > (i24 + 524 | 0) >>> 0);
     } while (0);
     i18 = i24 + 524 + 9 - i3 | 0;
     _out(i21, i3, (i2 | 0) > (i18 | 0) ? i18 : i2);
     i2 = i2 - i18 | 0;
     i6 = i6 + 4 | 0;
    } while (i6 >>> 0 < i9 >>> 0 & (i2 | 0) > -1);
   }
   _pad_684(i21, 48, i2 + 18 | 0, 18, 0);
   _out(i21, i11, i19 - i11 | 0);
  }
  _pad_684(i21, 32, i23, i1, i22 ^ 8192);
 } else {
  i1 = i17 + 3 | 0;
  _pad_684(i21, 32, i23, i1, i22 & -65537);
  _out(i21, i16, i17);
  _out(i21, d4 != d4 | 0.0 != 0.0 ? (i15 & 32 | 0 ? 8647 : 6735) : i15 & 32 | 0 ? 6727 : 6731, 3);
  _pad_684(i21, 32, i23, i1, i22 ^ 8192);
 } while (0);
 STACKTOP = i24;
 return ((i1 | 0) < (i23 | 0) ? i23 : i1) | 0;
}

function __ZN6asmdom9diffAttrsEPNS_5VNodeES1_(i16, i17) {
 i16 = i16 | 0;
 i17 = i17 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, f5 = f0, i6 = 0, f7 = f0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, f18 = f0;
 if (!(HEAP32[i16 + 48 >> 2] | 0)) if (!(HEAP32[i17 + 48 >> 2] | 0)) return;
 i1 = HEAP32[i16 + 44 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1 + 8 | 0;
  if (!(__ZNKSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_21__hash_const_iteratorIPNS_11__hash_nodeIS8_PvEEEERKT_(i17 + 36 | 0, i2) | 0)) {
   if ((HEAP8[i2 + 11 >> 0] | 0) < 0) i2 = HEAP32[i2 >> 2] | 0;
   _emscripten_asm_const_iii(0, HEAP32[i17 + 96 >> 2] | 0, i2 | 0) | 0;
  }
  i1 = HEAP32[i1 >> 2] | 0;
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i17 + 44 >> 2] | 0;
 if (!i1) return;
 do {
  i14 = i1;
  L22 : do if (!(__ZNKSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_21__hash_const_iteratorIPNS_11__hash_nodeIS8_PvEEEERKT_(i16 + 36 | 0, i14 + 8 | 0) | 0)) {
   i4 = HEAP8[i14 + 20 + 11 >> 0] | 0;
   i3 = HEAP32[i14 + 24 >> 2] | 0;
   i8 = i14 + 20 + 11 | 0;
   i2 = i14 + 20 | 0;
   i15 = 85;
  } else {
   i11 = HEAP8[i14 + 8 + 11 >> 0] | 0;
   i12 = i11 << 24 >> 24 < 0 ? HEAP32[i14 + 8 >> 2] | 0 : i14 + 8 | 0;
   i11 = i11 << 24 >> 24 < 0 ? HEAP32[i14 + 12 >> 2] | 0 : i11 & 255;
   if (i11 >>> 0 > 3) {
    i3 = i12;
    i2 = i11;
    i4 = i11;
    while (1) {
     i13 = Math_imul(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, 1540483477) | 0;
     i2 = (Math_imul(i13 >>> 24 ^ i13, 1540483477) | 0) ^ (Math_imul(i2, 1540483477) | 0);
     i4 = i4 + -4 | 0;
     if (i4 >>> 0 <= 3) break; else i3 = i3 + 4 | 0;
    }
    i4 = i12 + ((i11 + -4 & -4) + 4) | 0;
    i3 = i11 + -4 - (i11 + -4 & -4) | 0;
   } else {
    i4 = i12;
    i2 = i11;
    i3 = i11;
   }
   switch (i3 | 0) {
   case 3:
    {
     i2 = HEAPU8[i4 + 2 >> 0] << 16 ^ i2;
     i15 = 20;
     break;
    }
   case 2:
    {
     i15 = 20;
     break;
    }
   case 1:
    {
     i15 = 21;
     break;
    }
   default:
    {}
   }
   if ((i15 | 0) == 20) {
    i2 = HEAPU8[i4 + 1 >> 0] << 8 ^ i2;
    i15 = 21;
   }
   if ((i15 | 0) == 21) {
    i15 = 0;
    i2 = Math_imul(HEAPU8[i4 >> 0] ^ i2, 1540483477) | 0;
   }
   i13 = Math_imul(i2 >>> 13 ^ i2, 1540483477) | 0;
   i10 = HEAP32[i16 + 40 >> 2] | 0;
   L37 : do if (!i10) {
    i2 = 0;
    i15 = 62;
   } else {
    if (!(i10 + -1 & i10)) i2 = (i13 >>> 15 ^ i13) & i10 + -1; else if ((i13 >>> 15 ^ i13) >>> 0 < i10 >>> 0) i2 = i13 >>> 15 ^ i13; else i2 = ((i13 >>> 15 ^ i13) >>> 0) % (i10 >>> 0) | 0;
    i3 = HEAP32[(HEAP32[i16 + 36 >> 2] | 0) + (i2 << 2) >> 2] | 0;
    if (!i3) i15 = 62; else {
     i3 = HEAP32[i3 >> 2] | 0;
     if (!i3) i15 = 62; else {
      if (!(i10 + -1 & i10)) {
       if (!i11) while (1) {
        i12 = HEAP32[i3 + 4 >> 2] | 0;
        if (!((i12 | 0) == (i13 >>> 15 ^ i13 | 0) | (i12 & i10 + -1 | 0) == (i2 | 0))) {
         i15 = 62;
         break L37;
        }
        i12 = HEAP8[i3 + 8 + 11 >> 0] | 0;
        if (!((i12 << 24 >> 24 < 0 ? HEAP32[i3 + 12 >> 2] | 0 : i12 & 255) | 0)) {
         i2 = i3;
         break L37;
        }
        i3 = HEAP32[i3 >> 2] | 0;
        if (!i3) {
         i15 = 62;
         break L37;
        }
       }
       while (1) {
        i9 = HEAP32[i3 + 4 >> 2] | 0;
        if (!((i9 | 0) == (i13 >>> 15 ^ i13 | 0) | (i9 & i10 + -1 | 0) == (i2 | 0))) {
         i15 = 62;
         break L37;
        }
        i9 = i3 + 8 | 0;
        i4 = HEAP8[i9 + 11 >> 0] | 0;
        do if (((i4 << 24 >> 24 < 0 ? HEAP32[i3 + 12 >> 2] | 0 : i4 & 255) | 0) == (i11 | 0)) {
         i6 = HEAP32[i9 >> 2] | 0;
         if (i4 << 24 >> 24 < 0) if (!(_memcmp(i6, i12, i11) | 0)) {
          i2 = i3;
          break L37;
         } else break;
         if ((i6 & 255) << 24 >> 24 != (HEAP8[i12 >> 0] | 0)) break;
         i8 = i4 & 255;
         i4 = i9;
         i6 = i12;
         do {
          i8 = i8 + -1 | 0;
          i4 = i4 + 1 | 0;
          if (!i8) {
           i2 = i3;
           break L37;
          }
          i6 = i6 + 1 | 0;
         } while ((HEAP8[i4 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
        } while (0);
        i3 = HEAP32[i3 >> 2] | 0;
        if (!i3) {
         i15 = 62;
         break L37;
        }
       }
      }
      if (!i11) while (1) {
       i4 = HEAP32[i3 + 4 >> 2] | 0;
       if ((i4 | 0) != (i13 >>> 15 ^ i13 | 0)) {
        if (i4 >>> 0 >= i10 >>> 0) i4 = (i4 >>> 0) % (i10 >>> 0) | 0;
        if ((i4 | 0) != (i2 | 0)) {
         i15 = 62;
         break L37;
        }
       }
       i12 = HEAP8[i3 + 8 + 11 >> 0] | 0;
       if (!((i12 << 24 >> 24 < 0 ? HEAP32[i3 + 12 >> 2] | 0 : i12 & 255) | 0)) {
        i2 = i3;
        break L37;
       }
       i3 = HEAP32[i3 >> 2] | 0;
       if (!i3) {
        i15 = 62;
        break L37;
       }
      }
      while (1) {
       i4 = HEAP32[i3 + 4 >> 2] | 0;
       if ((i4 | 0) != (i13 >>> 15 ^ i13 | 0)) {
        if (i4 >>> 0 >= i10 >>> 0) i4 = (i4 >>> 0) % (i10 >>> 0) | 0;
        if ((i4 | 0) != (i2 | 0)) {
         i15 = 62;
         break L37;
        }
       }
       i9 = i3 + 8 | 0;
       i4 = HEAP8[i9 + 11 >> 0] | 0;
       do if (((i4 << 24 >> 24 < 0 ? HEAP32[i3 + 12 >> 2] | 0 : i4 & 255) | 0) == (i11 | 0)) {
        i6 = HEAP32[i9 >> 2] | 0;
        if (i4 << 24 >> 24 < 0) if (!(_memcmp(i6, i12, i11) | 0)) {
         i2 = i3;
         break L37;
        } else break;
        if ((i6 & 255) << 24 >> 24 == (HEAP8[i12 >> 0] | 0)) {
         i8 = i4 & 255;
         i4 = i9;
         i6 = i12;
         do {
          i8 = i8 + -1 | 0;
          i4 = i4 + 1 | 0;
          if (!i8) {
           i2 = i3;
           break L37;
          }
          i6 = i6 + 1 | 0;
         } while ((HEAP8[i4 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
        }
       } while (0);
       i3 = HEAP32[i3 >> 2] | 0;
       if (!i3) {
        i15 = 62;
        break;
       }
      }
     }
    }
   } while (0);
   if ((i15 | 0) == 62) {
    i15 = 0;
    i6 = __Znwj(32) | 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i6 + 8 | 0, i14 + 8 | 0);
    HEAP32[i6 + 20 >> 2] = 0;
    HEAP32[i6 + 20 + 4 >> 2] = 0;
    HEAP32[i6 + 20 + 8 >> 2] = 0;
    HEAP32[i6 + 4 >> 2] = i13 >>> 15 ^ i13;
    HEAP32[i6 >> 2] = 0;
    f7 = Math_fround(((HEAP32[i16 + 48 >> 2] | 0) + 1 | 0) >>> 0);
    f18 = Math_fround(i10 >>> 0);
    f5 = Math_fround(HEAPF32[i16 + 52 >> 2]);
    do if ((i10 | 0) == 0 | f7 > Math_fround(f18 * f5)) {
     i2 = ~~Math_fround(Math_ceil(Math_fround(f7 / f5))) >>> 0;
     __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE6rehashEj(i16 + 36 | 0, ((i10 >>> 0 < 3 | (i10 + -1 & i10 | 0) != 0) & 1 | i10 << 1) >>> 0 < i2 >>> 0 ? i2 : (i10 >>> 0 < 3 | (i10 + -1 & i10 | 0) != 0) & 1 | i10 << 1);
     i2 = HEAP32[i16 + 40 >> 2] | 0;
     if (!(i2 + -1 & i2)) {
      i4 = i2;
      i2 = i2 + -1 & (i13 >>> 15 ^ i13);
      break;
     }
     if ((i13 >>> 15 ^ i13) >>> 0 < i2 >>> 0) {
      i4 = i2;
      i2 = i13 >>> 15 ^ i13;
     } else {
      i4 = i2;
      i2 = ((i13 >>> 15 ^ i13) >>> 0) % (i2 >>> 0) | 0;
     }
    } else i4 = i10; while (0);
    i3 = (HEAP32[i16 + 36 >> 2] | 0) + (i2 << 2) | 0;
    i2 = HEAP32[i3 >> 2] | 0;
    if (!i2) {
     HEAP32[i6 >> 2] = HEAP32[i16 + 44 >> 2];
     HEAP32[i16 + 44 >> 2] = i6;
     HEAP32[i3 >> 2] = i16 + 44;
     i2 = HEAP32[i6 >> 2] | 0;
     if (i2 | 0) {
      i2 = HEAP32[i2 + 4 >> 2] | 0;
      i3 = i4 + -1 | 0;
      if (!(i3 & i4)) i2 = i2 & i3; else if (i2 >>> 0 >= i4 >>> 0) i2 = (i2 >>> 0) % (i4 >>> 0) | 0;
      i2 = (HEAP32[i16 + 36 >> 2] | 0) + (i2 << 2) | 0;
      i15 = 75;
     }
    } else {
     HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
     i15 = 75;
    }
    if ((i15 | 0) == 75) {
     i15 = 0;
     HEAP32[i2 >> 2] = i6;
    }
    HEAP32[i16 + 48 >> 2] = (HEAP32[i16 + 48 >> 2] | 0) + 1;
    i2 = i6;
   }
   i6 = i2 + 20 | 0;
   i12 = HEAP8[i6 + 11 >> 0] | 0;
   i10 = i12 << 24 >> 24 < 0 ? HEAP32[i2 + 24 >> 2] | 0 : i12 & 255;
   i8 = i14 + 20 + 11 | 0;
   i4 = HEAP8[i8 >> 0] | 0;
   i3 = HEAP32[i14 + 24 >> 2] | 0;
   if ((i10 | 0) == ((i4 << 24 >> 24 < 0 ? i3 : i4 & 255) | 0)) {
    i9 = HEAP32[i6 >> 2] | 0;
    i11 = i12 << 24 >> 24 < 0 ? i9 : i6;
    i2 = i4 << 24 >> 24 < 0 ? HEAP32[i14 + 20 >> 2] | 0 : i14 + 20 | 0;
    if (i12 << 24 >> 24 < 0) {
     if (!i10) break;
     if (!(_memcmp(i11, i2, i10) | 0)) break; else {
      i2 = i14 + 20 | 0;
      i15 = 85;
      break;
     }
    }
    if (i10 | 0) if ((i9 & 255) << 24 >> 24 == (HEAP8[i2 >> 0] | 0)) {
     i9 = i12 & 255;
     while (1) {
      i9 = i9 + -1 | 0;
      i6 = i6 + 1 | 0;
      if (!i9) break L22;
      i2 = i2 + 1 | 0;
      if ((HEAP8[i6 >> 0] | 0) != (HEAP8[i2 >> 0] | 0)) {
       i2 = i14 + 20 | 0;
       i15 = 85;
       break;
      }
     }
    } else {
     i2 = i14 + 20 | 0;
     i15 = 85;
    }
   } else {
    i2 = i14 + 20 | 0;
    i15 = 85;
   }
  } while (0);
  do if ((i15 | 0) == 85) {
   i15 = 0;
   if (((i4 << 24 >> 24 < 0 ? i3 : i4 & 255) | 0) == 5) i3 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i2, 9383, 5) | 0) == 0; else i3 = 0;
   i4 = HEAP32[i17 + 96 >> 2] | 0;
   if ((HEAP8[i14 + 8 + 11 >> 0] | 0) < 0) i6 = HEAP32[i14 + 8 >> 2] | 0; else i6 = i14 + 8 | 0;
   if (i3) {
    _emscripten_asm_const_iii(0, i4 | 0, i6 | 0) | 0;
    break;
   }
   if ((HEAP8[i8 >> 0] | 0) < 0) i2 = HEAP32[i14 + 20 >> 2] | 0;
   _emscripten_asm_const_iiii(1, i4 | 0, i6 | 0, i2 | 0) | 0;
  } while (0);
  i1 = HEAP32[i1 >> 2] | 0;
 } while ((i1 | 0) != 0);
 return;
}

function __ZN6asmdom9diffPropsEPNS_5VNodeES1_(i15, i3) {
 i15 = i15 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i16 = 0, i17 = 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (!(HEAP32[i15 + 68 >> 2] | 0)) if (!(HEAP32[i3 + 68 >> 2] | 0)) {
  STACKTOP = i17;
  return;
 }
 i1 = __emval_get_global(2829) | 0;
 i11 = __emval_new_cstring(2836) | 0;
 i13 = __emval_get_property(i1 | 0, i11 | 0) | 0;
 __emval_decref(i11 | 0);
 i11 = __emval_new_cstring(2850) | 0;
 i12 = __emval_get_property(i13 | 0, i11 | 0) | 0;
 __emval_decref(i11 | 0);
 HEAP32[i17 >> 2] = HEAP32[i3 + 96 >> 2];
 i11 = __emval_take_value(1440, i17 | 0) | 0;
 i14 = __emval_get_property(i12 | 0, i11 | 0) | 0;
 __emval_decref(i11 | 0);
 __emval_decref(i12 | 0);
 __emval_decref(i13 | 0);
 __emval_decref(i1 | 0);
 i1 = HEAP32[i15 + 64 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1 + 8 | 0;
  if (!(__ZNKSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_22__unordered_map_hasherIS7_SA_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SA_NS_8equal_toIS7_EELb1EEENS5_ISA_EEE4findIS7_EENS_21__hash_const_iteratorIPNS_11__hash_nodeISA_PvEEEERKT_(i3 + 56 | 0, i2) | 0)) {
   if ((HEAP8[i2 + 11 >> 0] | 0) < 0) i2 = HEAP32[i2 >> 2] | 0;
   i13 = __emval_new_cstring(i2 | 0) | 0;
   __emval_set_property(i14 | 0, i13 | 0, 1);
   __emval_decref(i13 | 0);
   __emval_decref(1);
  }
  i1 = HEAP32[i1 >> 2] | 0;
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i3 + 64 >> 2] | 0;
 L17 : do if (i1 | 0) {
  L19 : while (1) {
   i13 = i1;
   i12 = i13 + 8 + 11 | 0;
   do if (!(__ZNKSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_22__unordered_map_hasherIS7_SA_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SA_NS_8equal_toIS7_EELb1EEENS5_ISA_EEE4findIS7_EENS_21__hash_const_iteratorIPNS_11__hash_nodeISA_PvEEEERKT_(i15 + 56 | 0, i13 + 8 | 0) | 0)) i16 = 75; else {
    i10 = HEAP8[i12 >> 0] | 0;
    i11 = i10 << 24 >> 24 < 0 ? HEAP32[i13 + 8 >> 2] | 0 : i13 + 8 | 0;
    i10 = i10 << 24 >> 24 < 0 ? HEAP32[i13 + 12 >> 2] | 0 : i10 & 255;
    if (i10 >>> 0 > 3) {
     i3 = i11;
     i2 = i10;
     i4 = i10;
     while (1) {
      i9 = Math_imul(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, 1540483477) | 0;
      i2 = (Math_imul(i9 >>> 24 ^ i9, 1540483477) | 0) ^ (Math_imul(i2, 1540483477) | 0);
      i4 = i4 + -4 | 0;
      if (i4 >>> 0 <= 3) break; else i3 = i3 + 4 | 0;
     }
     i4 = i11 + ((i10 + -4 & -4) + 4) | 0;
     i3 = i10 + -4 - (i10 + -4 & -4) | 0;
    } else {
     i4 = i11;
     i2 = i10;
     i3 = i10;
    }
    switch (i3 | 0) {
    case 3:
     {
      i2 = HEAPU8[i4 + 2 >> 0] << 16 ^ i2;
      i16 = 20;
      break;
     }
    case 2:
     {
      i16 = 20;
      break;
     }
    case 1:
     {
      i16 = 21;
      break;
     }
    default:
     {}
    }
    if ((i16 | 0) == 20) {
     i2 = HEAPU8[i4 + 1 >> 0] << 8 ^ i2;
     i16 = 21;
    }
    if ((i16 | 0) == 21) {
     i16 = 0;
     i2 = Math_imul(HEAPU8[i4 >> 0] ^ i2, 1540483477) | 0;
    }
    i9 = Math_imul(i2 >>> 13 ^ i2, 1540483477) | 0;
    i7 = HEAP32[i15 + 60 >> 2] | 0;
    if (!i7) {
     i16 = 65;
     break L19;
    }
    if (!(i7 + -1 & i7)) i8 = (i9 >>> 15 ^ i9) & i7 + -1; else if ((i9 >>> 15 ^ i9) >>> 0 < i7 >>> 0) i8 = i9 >>> 15 ^ i9; else i8 = ((i9 >>> 15 ^ i9) >>> 0) % (i7 >>> 0) | 0;
    i2 = HEAP32[(HEAP32[i15 + 56 >> 2] | 0) + (i8 << 2) >> 2] | 0;
    if (!i2) {
     i16 = 65;
     break L19;
    }
    i2 = HEAP32[i2 >> 2] | 0;
    if (!i2) {
     i16 = 65;
     break L19;
    }
    L43 : do if (!(i7 + -1 & i7)) {
     if (!i10) while (1) {
      i3 = HEAP32[i2 + 4 >> 2] | 0;
      if (!((i3 | 0) == (i9 >>> 15 ^ i9 | 0) | (i3 & i7 + -1 | 0) == (i8 | 0))) {
       i16 = 65;
       break L19;
      }
      if ((i3 | 0) == (i9 >>> 15 ^ i9 | 0)) {
       i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
       if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L43;
      }
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i16 = 65;
       break L19;
      }
     }
     while (1) {
      i3 = HEAP32[i2 + 4 >> 2] | 0;
      if (!((i3 | 0) == (i9 >>> 15 ^ i9 | 0) | (i3 & i7 + -1 | 0) == (i8 | 0))) {
       i16 = 65;
       break L19;
      }
      do if ((i3 | 0) == (i9 >>> 15 ^ i9 | 0)) {
       i6 = i2 + 8 | 0;
       i3 = HEAP8[i6 + 11 >> 0] | 0;
       if (((i3 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i3 & 255) | 0) == (i10 | 0)) {
        i4 = HEAP32[i6 >> 2] | 0;
        if (i3 << 24 >> 24 < 0) if (!(_memcmp(i4, i11, i10) | 0)) break L43; else break;
        if ((i4 & 255) << 24 >> 24 != (HEAP8[i11 >> 0] | 0)) break;
        i5 = i3 & 255;
        i3 = i6;
        i4 = i11;
        do {
         i5 = i5 + -1 | 0;
         i3 = i3 + 1 | 0;
         if (!i5) {
          i16 = 64;
          break L43;
         }
         i4 = i4 + 1 | 0;
        } while ((HEAP8[i3 >> 0] | 0) == (HEAP8[i4 >> 0] | 0));
       }
      } while (0);
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i16 = 65;
       break L19;
      }
     }
    } else {
     if (!i10) while (1) {
      i3 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i3 | 0) == (i9 >>> 15 ^ i9 | 0)) {
       i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
       if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L43;
      } else {
       if (i3 >>> 0 >= i7 >>> 0) i3 = (i3 >>> 0) % (i7 >>> 0) | 0;
       if ((i3 | 0) != (i8 | 0)) {
        i16 = 65;
        break L19;
       }
      }
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i16 = 65;
       break L19;
      }
     }
     while (1) {
      i3 = HEAP32[i2 + 4 >> 2] | 0;
      do if ((i3 | 0) == (i9 >>> 15 ^ i9 | 0)) {
       i6 = i2 + 8 | 0;
       i3 = HEAP8[i6 + 11 >> 0] | 0;
       if (((i3 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i3 & 255) | 0) == (i10 | 0)) {
        i4 = HEAP32[i6 >> 2] | 0;
        if (i3 << 24 >> 24 < 0) if (!(_memcmp(i4, i11, i10) | 0)) break L43; else break;
        if ((i4 & 255) << 24 >> 24 != (HEAP8[i11 >> 0] | 0)) break;
        i5 = i3 & 255;
        i3 = i6;
        i4 = i11;
        do {
         i5 = i5 + -1 | 0;
         i3 = i3 + 1 | 0;
         if (!i5) {
          i16 = 64;
          break L43;
         }
         i4 = i4 + 1 | 0;
        } while ((HEAP8[i3 >> 0] | 0) == (HEAP8[i4 >> 0] | 0));
       }
      } else {
       if (i3 >>> 0 >= i7 >>> 0) i3 = (i3 >>> 0) % (i7 >>> 0) | 0;
       if ((i3 | 0) != (i8 | 0)) {
        i16 = 65;
        break L19;
       }
      } while (0);
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i16 = 65;
       break L19;
      }
     }
    } while (0);
    if ((i16 | 0) == 64) {
     i16 = 0;
     if (!i2) {
      i16 = 65;
      break L19;
     }
    }
    if (__emval_strictly_equals(HEAP32[i13 + 20 >> 2] | 0, HEAP32[i2 + 20 >> 2] | 0) | 0) {
     i2 = HEAP8[i12 >> 0] | 0;
     i3 = HEAP32[i13 + 12 >> 2] | 0;
     if (((i2 << 24 >> 24 < 0 ? i3 : i2 & 255) | 0) == 5) {
      if (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i13 + 8 | 0, 2889, 5) | 0) {
       i2 = HEAP8[i12 >> 0] | 0;
       i3 = HEAP32[i13 + 12 >> 2] | 0;
       i16 = 70;
      }
     } else i16 = 70;
     if ((i16 | 0) == 70) {
      i16 = 0;
      if (((i2 << 24 >> 24 < 0 ? i3 : i2 & 255) | 0) != 7) break;
      if (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i13 + 8 | 0, 2895, 7) | 0) break;
     }
     if ((HEAP8[i12 >> 0] | 0) < 0) i2 = HEAP32[i13 + 8 >> 2] | 0; else i2 = i13 + 8 | 0;
     i11 = __emval_new_cstring(i2 | 0) | 0;
     i10 = __emval_get_property(i14 | 0, i11 | 0) | 0;
     __emval_decref(i11 | 0);
     i11 = __emval_strictly_equals(HEAP32[i13 + 20 >> 2] | 0, i10 | 0) | 0;
     __emval_decref(i10 | 0);
     if (!i11) i16 = 75;
    } else i16 = 75;
   } while (0);
   if ((i16 | 0) == 75) {
    i16 = 0;
    if ((HEAP8[i12 >> 0] | 0) < 0) i2 = HEAP32[i13 + 8 >> 2] | 0; else i2 = i13 + 8 | 0;
    i12 = __emval_new_cstring(i2 | 0) | 0;
    __emval_set_property(i14 | 0, i12 | 0, HEAP32[i13 + 20 >> 2] | 0);
    __emval_decref(i12 | 0);
   }
   i1 = HEAP32[i1 >> 2] | 0;
   if (!i1) break L17;
  }
  if ((i16 | 0) == 65) {
   i17 = ___cxa_allocate_exception(8) | 0;
   __ZNSt11logic_errorC2EPKc(i17, 2856);
   HEAP32[i17 >> 2] = 2324;
   ___cxa_throw(i17 | 0, 1320, 8);
  }
 } while (0);
 __emval_decref(i14 | 0);
 STACKTOP = i17;
 return;
}

function __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ERKSK_(i17, i1) {
 i17 = i17 | 0;
 i1 = i1 | 0;
 var i2 = 0, f3 = f0, f4 = f0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, f18 = f0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 HEAP32[i17 + 8 >> 2] = 0;
 HEAP32[i17 + 12 >> 2] = 0;
 HEAP32[i17 + 16 >> 2] = HEAP32[i1 + 16 >> 2];
 __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_22__unordered_map_hasherIS7_SD_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SD_NS_8equal_toIS7_EELb1EEENS5_ISD_EEE6rehashEj(i17, HEAP32[i1 + 4 >> 2] | 0);
 i1 = HEAP32[i1 + 8 >> 2] | 0;
 if (!i1) return;
 i14 = i1;
 i15 = i1;
 while (1) {
  i13 = i14 + 8 | 0;
  i10 = HEAP8[i13 + 11 >> 0] | 0;
  i11 = i10 << 24 >> 24 < 0 ? HEAP32[i13 >> 2] | 0 : i13;
  i10 = i10 << 24 >> 24 < 0 ? HEAP32[i14 + 12 >> 2] | 0 : i10 & 255;
  if (i10 >>> 0 > 3) {
   i2 = i11;
   i1 = i10;
   i5 = i10;
   while (1) {
    i12 = Math_imul(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, 1540483477) | 0;
    i1 = (Math_imul(i12 >>> 24 ^ i12, 1540483477) | 0) ^ (Math_imul(i1, 1540483477) | 0);
    i5 = i5 + -4 | 0;
    if (i5 >>> 0 <= 3) break; else i2 = i2 + 4 | 0;
   }
   i5 = i11 + ((i10 + -4 & -4) + 4) | 0;
   i2 = i10 + -4 - (i10 + -4 & -4) | 0;
  } else {
   i5 = i11;
   i1 = i10;
   i2 = i10;
  }
  switch (i2 | 0) {
  case 3:
   {
    i1 = HEAPU8[i5 + 2 >> 0] << 16 ^ i1;
    i16 = 8;
    break;
   }
  case 2:
   {
    i16 = 8;
    break;
   }
  case 1:
   {
    i16 = 9;
    break;
   }
  default:
   {}
  }
  if ((i16 | 0) == 8) {
   i1 = HEAPU8[i5 + 1 >> 0] << 8 ^ i1;
   i16 = 9;
  }
  if ((i16 | 0) == 9) {
   i16 = 0;
   i1 = Math_imul(HEAPU8[i5 >> 0] ^ i1, 1540483477) | 0;
  }
  i12 = Math_imul(i1 >>> 13 ^ i1, 1540483477) | 0;
  i9 = HEAP32[i17 + 4 >> 2] | 0;
  L18 : do if (!i9) {
   i1 = 0;
   i16 = 50;
  } else {
   if (!(i9 + -1 & i9)) i1 = (i12 >>> 15 ^ i12) & i9 + -1; else if ((i12 >>> 15 ^ i12) >>> 0 < i9 >>> 0) i1 = i12 >>> 15 ^ i12; else i1 = ((i12 >>> 15 ^ i12) >>> 0) % (i9 >>> 0) | 0;
   i2 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i1 << 2) >> 2] | 0;
   if (!i2) i16 = 50; else {
    i2 = HEAP32[i2 >> 2] | 0;
    if (!i2) i16 = 50; else {
     if (!(i9 + -1 & i9)) {
      if (!i10) while (1) {
       i11 = HEAP32[i2 + 4 >> 2] | 0;
       if (!((i11 | 0) == (i12 >>> 15 ^ i12 | 0) | (i11 & i9 + -1 | 0) == (i1 | 0))) {
        i16 = 50;
        break L18;
       }
       i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
       if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L18;
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i16 = 50;
        break L18;
       }
      }
      while (1) {
       i8 = HEAP32[i2 + 4 >> 2] | 0;
       if (!((i8 | 0) == (i12 >>> 15 ^ i12 | 0) | (i8 & i9 + -1 | 0) == (i1 | 0))) {
        i16 = 50;
        break L18;
       }
       i8 = i2 + 8 | 0;
       i5 = HEAP8[i8 + 11 >> 0] | 0;
       do if (((i5 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i5 & 255) | 0) == (i10 | 0)) {
        i6 = HEAP32[i8 >> 2] | 0;
        if (i5 << 24 >> 24 < 0) if (!(_memcmp(i6, i11, i10) | 0)) break L18; else break;
        if ((i6 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
         i7 = i5 & 255;
         i5 = i8;
         i6 = i11;
         do {
          i7 = i7 + -1 | 0;
          i5 = i5 + 1 | 0;
          if (!i7) break L18;
          i6 = i6 + 1 | 0;
         } while ((HEAP8[i5 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
        }
       } while (0);
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i16 = 50;
        break L18;
       }
      }
     }
     if (!i10) while (1) {
      i5 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i5 | 0) != (i12 >>> 15 ^ i12 | 0)) {
       if (i5 >>> 0 >= i9 >>> 0) i5 = (i5 >>> 0) % (i9 >>> 0) | 0;
       if ((i5 | 0) != (i1 | 0)) {
        i16 = 50;
        break L18;
       }
      }
      i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
      if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L18;
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i16 = 50;
       break L18;
      }
     }
     while (1) {
      i5 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i5 | 0) != (i12 >>> 15 ^ i12 | 0)) {
       if (i5 >>> 0 >= i9 >>> 0) i5 = (i5 >>> 0) % (i9 >>> 0) | 0;
       if ((i5 | 0) != (i1 | 0)) {
        i16 = 50;
        break L18;
       }
      }
      i8 = i2 + 8 | 0;
      i5 = HEAP8[i8 + 11 >> 0] | 0;
      do if (((i5 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i5 & 255) | 0) == (i10 | 0)) {
       i6 = HEAP32[i8 >> 2] | 0;
       if (i5 << 24 >> 24 < 0) if (!(_memcmp(i6, i11, i10) | 0)) break L18; else break;
       if ((i6 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
        i7 = i5 & 255;
        i5 = i8;
        i6 = i11;
        do {
         i7 = i7 + -1 | 0;
         i5 = i5 + 1 | 0;
         if (!i7) break L18;
         i6 = i6 + 1 | 0;
        } while ((HEAP8[i5 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
       }
      } while (0);
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i16 = 50;
       break;
      }
     }
    }
   }
  } while (0);
  if ((i16 | 0) == 50) {
   i16 = 0;
   i6 = __Znwj(48) | 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i6 + 8 | 0, i13);
   i2 = HEAP32[i14 + 40 >> 2] | 0;
   do if (!i2) HEAP32[i6 + 40 >> 2] = 0; else if ((i2 | 0) == (i14 + 24 | 0)) {
    HEAP32[i6 + 40 >> 2] = i6 + 24;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 0](i2, i6 + 24 | 0);
    break;
   } else {
    i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 3](i2) | 0;
    HEAP32[i6 + 40 >> 2] = i14;
    break;
   } while (0);
   HEAP32[i6 + 4 >> 2] = i12 >>> 15 ^ i12;
   HEAP32[i6 >> 2] = 0;
   f4 = Math_fround(((HEAP32[i17 + 12 >> 2] | 0) + 1 | 0) >>> 0);
   f18 = Math_fround(i9 >>> 0);
   f3 = Math_fround(HEAPF32[i17 + 16 >> 2]);
   do if ((i9 | 0) == 0 | f4 > Math_fround(f18 * f3)) {
    i1 = ~~Math_fround(Math_ceil(Math_fround(f4 / f3))) >>> 0;
    __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_22__unordered_map_hasherIS7_SD_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SD_NS_8equal_toIS7_EELb1EEENS5_ISD_EEE6rehashEj(i17, ((i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1) >>> 0 < i1 >>> 0 ? i1 : (i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1);
    i1 = HEAP32[i17 + 4 >> 2] | 0;
    if (!(i1 + -1 & i1)) {
     i5 = i1;
     i1 = i1 + -1 & (i12 >>> 15 ^ i12);
     break;
    }
    if ((i12 >>> 15 ^ i12) >>> 0 < i1 >>> 0) {
     i5 = i1;
     i1 = i12 >>> 15 ^ i12;
    } else {
     i5 = i1;
     i1 = ((i12 >>> 15 ^ i12) >>> 0) % (i1 >>> 0) | 0;
    }
   } else i5 = i9; while (0);
   i2 = (HEAP32[i17 >> 2] | 0) + (i1 << 2) | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   if (!i1) {
    HEAP32[i6 >> 2] = HEAP32[i17 + 8 >> 2];
    HEAP32[i17 + 8 >> 2] = i6;
    HEAP32[i2 >> 2] = i17 + 8;
    i1 = HEAP32[i6 >> 2] | 0;
    if (i1 | 0) {
     i1 = HEAP32[i1 + 4 >> 2] | 0;
     i2 = i5 + -1 | 0;
     if (!(i2 & i5)) i1 = i1 & i2; else if (i1 >>> 0 >= i5 >>> 0) i1 = (i1 >>> 0) % (i5 >>> 0) | 0;
     i1 = (HEAP32[i17 >> 2] | 0) + (i1 << 2) | 0;
     i16 = 68;
    }
   } else {
    HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
    i16 = 68;
   }
   if ((i16 | 0) == 68) {
    i16 = 0;
    HEAP32[i1 >> 2] = i6;
   }
   HEAP32[i17 + 12 >> 2] = (HEAP32[i17 + 12 >> 2] | 0) + 1;
  }
  i1 = HEAP32[i15 >> 2] | 0;
  if (!i1) break; else {
   i14 = i1;
   i15 = i1;
  }
 }
 return;
}

function __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S8_EEEEEC2ERKSH_(i17, i1) {
 i17 = i17 | 0;
 i1 = i1 | 0;
 var i2 = 0, f3 = f0, f4 = f0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, f18 = f0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 HEAP32[i17 + 8 >> 2] = 0;
 HEAP32[i17 + 12 >> 2] = 0;
 HEAP32[i17 + 16 >> 2] = HEAP32[i1 + 16 >> 2];
 __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_22__unordered_map_hasherIS7_SA_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SA_NS_8equal_toIS7_EELb1EEENS5_ISA_EEE6rehashEj(i17, HEAP32[i1 + 4 >> 2] | 0);
 i1 = HEAP32[i1 + 8 >> 2] | 0;
 if (!i1) return;
 i14 = i1;
 i15 = i1;
 while (1) {
  i13 = i14 + 8 | 0;
  i10 = HEAP8[i13 + 11 >> 0] | 0;
  i11 = i10 << 24 >> 24 < 0 ? HEAP32[i13 >> 2] | 0 : i13;
  i10 = i10 << 24 >> 24 < 0 ? HEAP32[i14 + 12 >> 2] | 0 : i10 & 255;
  if (i10 >>> 0 > 3) {
   i2 = i11;
   i1 = i10;
   i5 = i10;
   while (1) {
    i12 = Math_imul(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, 1540483477) | 0;
    i1 = (Math_imul(i12 >>> 24 ^ i12, 1540483477) | 0) ^ (Math_imul(i1, 1540483477) | 0);
    i5 = i5 + -4 | 0;
    if (i5 >>> 0 <= 3) break; else i2 = i2 + 4 | 0;
   }
   i5 = i11 + ((i10 + -4 & -4) + 4) | 0;
   i2 = i10 + -4 - (i10 + -4 & -4) | 0;
  } else {
   i5 = i11;
   i1 = i10;
   i2 = i10;
  }
  switch (i2 | 0) {
  case 3:
   {
    i1 = HEAPU8[i5 + 2 >> 0] << 16 ^ i1;
    i16 = 8;
    break;
   }
  case 2:
   {
    i16 = 8;
    break;
   }
  case 1:
   {
    i16 = 9;
    break;
   }
  default:
   {}
  }
  if ((i16 | 0) == 8) {
   i1 = HEAPU8[i5 + 1 >> 0] << 8 ^ i1;
   i16 = 9;
  }
  if ((i16 | 0) == 9) {
   i16 = 0;
   i1 = Math_imul(HEAPU8[i5 >> 0] ^ i1, 1540483477) | 0;
  }
  i12 = Math_imul(i1 >>> 13 ^ i1, 1540483477) | 0;
  i9 = HEAP32[i17 + 4 >> 2] | 0;
  L18 : do if (!i9) {
   i1 = 0;
   i16 = 50;
  } else {
   if (!(i9 + -1 & i9)) i1 = (i12 >>> 15 ^ i12) & i9 + -1; else if ((i12 >>> 15 ^ i12) >>> 0 < i9 >>> 0) i1 = i12 >>> 15 ^ i12; else i1 = ((i12 >>> 15 ^ i12) >>> 0) % (i9 >>> 0) | 0;
   i2 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i1 << 2) >> 2] | 0;
   if (!i2) i16 = 50; else {
    i2 = HEAP32[i2 >> 2] | 0;
    if (!i2) i16 = 50; else {
     if (!(i9 + -1 & i9)) {
      if (!i10) while (1) {
       i11 = HEAP32[i2 + 4 >> 2] | 0;
       if (!((i11 | 0) == (i12 >>> 15 ^ i12 | 0) | (i11 & i9 + -1 | 0) == (i1 | 0))) {
        i16 = 50;
        break L18;
       }
       i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
       if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L18;
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i16 = 50;
        break L18;
       }
      }
      while (1) {
       i8 = HEAP32[i2 + 4 >> 2] | 0;
       if (!((i8 | 0) == (i12 >>> 15 ^ i12 | 0) | (i8 & i9 + -1 | 0) == (i1 | 0))) {
        i16 = 50;
        break L18;
       }
       i8 = i2 + 8 | 0;
       i5 = HEAP8[i8 + 11 >> 0] | 0;
       do if (((i5 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i5 & 255) | 0) == (i10 | 0)) {
        i6 = HEAP32[i8 >> 2] | 0;
        if (i5 << 24 >> 24 < 0) if (!(_memcmp(i6, i11, i10) | 0)) break L18; else break;
        if ((i6 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
         i7 = i5 & 255;
         i5 = i8;
         i6 = i11;
         do {
          i7 = i7 + -1 | 0;
          i5 = i5 + 1 | 0;
          if (!i7) break L18;
          i6 = i6 + 1 | 0;
         } while ((HEAP8[i5 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
        }
       } while (0);
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i16 = 50;
        break L18;
       }
      }
     }
     if (!i10) while (1) {
      i5 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i5 | 0) != (i12 >>> 15 ^ i12 | 0)) {
       if (i5 >>> 0 >= i9 >>> 0) i5 = (i5 >>> 0) % (i9 >>> 0) | 0;
       if ((i5 | 0) != (i1 | 0)) {
        i16 = 50;
        break L18;
       }
      }
      i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
      if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L18;
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i16 = 50;
       break L18;
      }
     }
     while (1) {
      i5 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i5 | 0) != (i12 >>> 15 ^ i12 | 0)) {
       if (i5 >>> 0 >= i9 >>> 0) i5 = (i5 >>> 0) % (i9 >>> 0) | 0;
       if ((i5 | 0) != (i1 | 0)) {
        i16 = 50;
        break L18;
       }
      }
      i8 = i2 + 8 | 0;
      i5 = HEAP8[i8 + 11 >> 0] | 0;
      do if (((i5 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i5 & 255) | 0) == (i10 | 0)) {
       i6 = HEAP32[i8 >> 2] | 0;
       if (i5 << 24 >> 24 < 0) if (!(_memcmp(i6, i11, i10) | 0)) break L18; else break;
       if ((i6 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
        i7 = i5 & 255;
        i5 = i8;
        i6 = i11;
        do {
         i7 = i7 + -1 | 0;
         i5 = i5 + 1 | 0;
         if (!i7) break L18;
         i6 = i6 + 1 | 0;
        } while ((HEAP8[i5 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
       }
      } while (0);
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i16 = 50;
       break;
      }
     }
    }
   }
  } while (0);
  if ((i16 | 0) == 50) {
   i16 = 0;
   i6 = __Znwj(24) | 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i6 + 8 | 0, i13);
   i14 = HEAP32[i14 + 20 >> 2] | 0;
   HEAP32[i6 + 20 >> 2] = i14;
   __emval_incref(i14 | 0);
   HEAP32[i6 + 4 >> 2] = i12 >>> 15 ^ i12;
   HEAP32[i6 >> 2] = 0;
   f4 = Math_fround(((HEAP32[i17 + 12 >> 2] | 0) + 1 | 0) >>> 0);
   f18 = Math_fround(i9 >>> 0);
   f3 = Math_fround(HEAPF32[i17 + 16 >> 2]);
   do if ((i9 | 0) == 0 | f4 > Math_fround(f18 * f3)) {
    i1 = ~~Math_fround(Math_ceil(Math_fround(f4 / f3))) >>> 0;
    __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_22__unordered_map_hasherIS7_SA_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SA_NS_8equal_toIS7_EELb1EEENS5_ISA_EEE6rehashEj(i17, ((i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1) >>> 0 < i1 >>> 0 ? i1 : (i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1);
    i1 = HEAP32[i17 + 4 >> 2] | 0;
    if (!(i1 + -1 & i1)) {
     i5 = i1;
     i1 = i1 + -1 & (i12 >>> 15 ^ i12);
     break;
    }
    if ((i12 >>> 15 ^ i12) >>> 0 < i1 >>> 0) {
     i5 = i1;
     i1 = i12 >>> 15 ^ i12;
    } else {
     i5 = i1;
     i1 = ((i12 >>> 15 ^ i12) >>> 0) % (i1 >>> 0) | 0;
    }
   } else i5 = i9; while (0);
   i2 = (HEAP32[i17 >> 2] | 0) + (i1 << 2) | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   if (!i1) {
    HEAP32[i6 >> 2] = HEAP32[i17 + 8 >> 2];
    HEAP32[i17 + 8 >> 2] = i6;
    HEAP32[i2 >> 2] = i17 + 8;
    i1 = HEAP32[i6 >> 2] | 0;
    if (i1 | 0) {
     i1 = HEAP32[i1 + 4 >> 2] | 0;
     i2 = i5 + -1 | 0;
     if (!(i2 & i5)) i1 = i1 & i2; else if (i1 >>> 0 >= i5 >>> 0) i1 = (i1 >>> 0) % (i5 >>> 0) | 0;
     i1 = (HEAP32[i17 >> 2] | 0) + (i1 << 2) | 0;
     i16 = 63;
    }
   } else {
    HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
    i16 = 63;
   }
   if ((i16 | 0) == 63) {
    i16 = 0;
    HEAP32[i1 >> 2] = i6;
   }
   HEAP32[i17 + 12 >> 2] = (HEAP32[i17 + 12 >> 2] | 0) + 1;
  }
  i1 = HEAP32[i15 >> 2] | 0;
  if (!i1) break; else {
   i14 = i1;
   i15 = i1;
  }
 }
 return;
}

function _free(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if (!i1) return;
 i2 = HEAP32[2396] | 0;
 i3 = HEAP32[i1 + -4 >> 2] | 0;
 i10 = i1 + -8 + (i3 & -8) | 0;
 do if (!(i3 & 1)) {
  i4 = HEAP32[i1 + -8 >> 2] | 0;
  if (!(i3 & 3)) return;
  i6 = i1 + -8 + (0 - i4) | 0;
  i7 = i4 + (i3 & -8) | 0;
  if (i6 >>> 0 < i2 >>> 0) return;
  if ((i6 | 0) == (HEAP32[2397] | 0)) {
   i1 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i1 & 3 | 0) != 3) {
    i8 = i6;
    i9 = i6;
    i2 = i7;
    break;
   }
   HEAP32[2394] = i7;
   HEAP32[i10 + 4 >> 2] = i1 & -2;
   HEAP32[i6 + 4 >> 2] = i7 | 1;
   HEAP32[i6 + i7 >> 2] = i7;
   return;
  }
  if (i4 >>> 0 < 256) {
   i1 = HEAP32[i6 + 8 >> 2] | 0;
   i2 = HEAP32[i6 + 12 >> 2] | 0;
   if ((i2 | 0) == (i1 | 0)) {
    HEAP32[2392] = HEAP32[2392] & ~(1 << (i4 >>> 3));
    i8 = i6;
    i9 = i6;
    i2 = i7;
    break;
   } else {
    HEAP32[i1 + 12 >> 2] = i2;
    HEAP32[i2 + 8 >> 2] = i1;
    i8 = i6;
    i9 = i6;
    i2 = i7;
    break;
   }
  }
  i5 = HEAP32[i6 + 24 >> 2] | 0;
  i1 = HEAP32[i6 + 12 >> 2] | 0;
  do if ((i1 | 0) == (i6 | 0)) {
   i1 = HEAP32[i6 + 16 + 4 >> 2] | 0;
   if (!i1) {
    i1 = HEAP32[i6 + 16 >> 2] | 0;
    if (!i1) {
     i1 = 0;
     break;
    } else i4 = i6 + 16 | 0;
   } else i4 = i6 + 16 + 4 | 0;
   while (1) {
    i3 = i1 + 20 | 0;
    i2 = HEAP32[i3 >> 2] | 0;
    if (i2 | 0) {
     i1 = i2;
     i4 = i3;
     continue;
    }
    i3 = i1 + 16 | 0;
    i2 = HEAP32[i3 >> 2] | 0;
    if (!i2) break; else {
     i1 = i2;
     i4 = i3;
    }
   }
   HEAP32[i4 >> 2] = 0;
  } else {
   i9 = HEAP32[i6 + 8 >> 2] | 0;
   HEAP32[i9 + 12 >> 2] = i1;
   HEAP32[i1 + 8 >> 2] = i9;
  } while (0);
  if (!i5) {
   i8 = i6;
   i9 = i6;
   i2 = i7;
  } else {
   i2 = HEAP32[i6 + 28 >> 2] | 0;
   i3 = (i1 | 0) == 0;
   if ((i6 | 0) == (HEAP32[9872 + (i2 << 2) >> 2] | 0)) {
    HEAP32[9872 + (i2 << 2) >> 2] = i1;
    if (i3) {
     HEAP32[2393] = HEAP32[2393] & ~(1 << i2);
     i8 = i6;
     i9 = i6;
     i2 = i7;
     break;
    }
   } else {
    HEAP32[i5 + 16 + (((HEAP32[i5 + 16 >> 2] | 0) != (i6 | 0) & 1) << 2) >> 2] = i1;
    if (i3) {
     i8 = i6;
     i9 = i6;
     i2 = i7;
     break;
    }
   }
   HEAP32[i1 + 24 >> 2] = i5;
   i2 = HEAP32[i6 + 16 >> 2] | 0;
   if (i2 | 0) {
    HEAP32[i1 + 16 >> 2] = i2;
    HEAP32[i2 + 24 >> 2] = i1;
   }
   i2 = HEAP32[i6 + 16 + 4 >> 2] | 0;
   if (!i2) {
    i8 = i6;
    i9 = i6;
    i2 = i7;
   } else {
    HEAP32[i1 + 20 >> 2] = i2;
    HEAP32[i2 + 24 >> 2] = i1;
    i8 = i6;
    i9 = i6;
    i2 = i7;
   }
  }
 } else {
  i8 = i1 + -8 | 0;
  i9 = i1 + -8 | 0;
  i2 = i3 & -8;
 } while (0);
 if (i8 >>> 0 >= i10 >>> 0) return;
 i3 = HEAP32[i10 + 4 >> 2] | 0;
 if (!(i3 & 1)) return;
 if (!(i3 & 2)) {
  i1 = HEAP32[2397] | 0;
  if ((i10 | 0) == (HEAP32[2398] | 0)) {
   i10 = (HEAP32[2395] | 0) + i2 | 0;
   HEAP32[2395] = i10;
   HEAP32[2398] = i9;
   HEAP32[i9 + 4 >> 2] = i10 | 1;
   if ((i9 | 0) != (i1 | 0)) return;
   HEAP32[2397] = 0;
   HEAP32[2394] = 0;
   return;
  }
  if ((i10 | 0) == (i1 | 0)) {
   i10 = (HEAP32[2394] | 0) + i2 | 0;
   HEAP32[2394] = i10;
   HEAP32[2397] = i8;
   HEAP32[i9 + 4 >> 2] = i10 | 1;
   HEAP32[i8 + i10 >> 2] = i10;
   return;
  }
  i5 = (i3 & -8) + i2 | 0;
  do if (i3 >>> 0 < 256) {
   i2 = HEAP32[i10 + 8 >> 2] | 0;
   i1 = HEAP32[i10 + 12 >> 2] | 0;
   if ((i1 | 0) == (i2 | 0)) {
    HEAP32[2392] = HEAP32[2392] & ~(1 << (i3 >>> 3));
    break;
   } else {
    HEAP32[i2 + 12 >> 2] = i1;
    HEAP32[i1 + 8 >> 2] = i2;
    break;
   }
  } else {
   i6 = HEAP32[i10 + 24 >> 2] | 0;
   i1 = HEAP32[i10 + 12 >> 2] | 0;
   do if ((i1 | 0) == (i10 | 0)) {
    i1 = HEAP32[i10 + 16 + 4 >> 2] | 0;
    if (!i1) {
     i1 = HEAP32[i10 + 16 >> 2] | 0;
     if (!i1) {
      i3 = 0;
      break;
     } else i4 = i10 + 16 | 0;
    } else i4 = i10 + 16 + 4 | 0;
    while (1) {
     i3 = i1 + 20 | 0;
     i2 = HEAP32[i3 >> 2] | 0;
     if (i2 | 0) {
      i1 = i2;
      i4 = i3;
      continue;
     }
     i3 = i1 + 16 | 0;
     i2 = HEAP32[i3 >> 2] | 0;
     if (!i2) break; else {
      i1 = i2;
      i4 = i3;
     }
    }
    HEAP32[i4 >> 2] = 0;
    i3 = i1;
   } else {
    i3 = HEAP32[i10 + 8 >> 2] | 0;
    HEAP32[i3 + 12 >> 2] = i1;
    HEAP32[i1 + 8 >> 2] = i3;
    i3 = i1;
   } while (0);
   if (i6 | 0) {
    i1 = HEAP32[i10 + 28 >> 2] | 0;
    i2 = (i3 | 0) == 0;
    if ((i10 | 0) == (HEAP32[9872 + (i1 << 2) >> 2] | 0)) {
     HEAP32[9872 + (i1 << 2) >> 2] = i3;
     if (i2) {
      HEAP32[2393] = HEAP32[2393] & ~(1 << i1);
      break;
     }
    } else {
     HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i10 | 0) & 1) << 2) >> 2] = i3;
     if (i2) break;
    }
    HEAP32[i3 + 24 >> 2] = i6;
    i1 = HEAP32[i10 + 16 >> 2] | 0;
    if (i1 | 0) {
     HEAP32[i3 + 16 >> 2] = i1;
     HEAP32[i1 + 24 >> 2] = i3;
    }
    i1 = HEAP32[i10 + 16 + 4 >> 2] | 0;
    if (i1 | 0) {
     HEAP32[i3 + 20 >> 2] = i1;
     HEAP32[i1 + 24 >> 2] = i3;
    }
   }
  } while (0);
  HEAP32[i9 + 4 >> 2] = i5 | 1;
  HEAP32[i8 + i5 >> 2] = i5;
  if ((i9 | 0) == (HEAP32[2397] | 0)) {
   HEAP32[2394] = i5;
   return;
  }
 } else {
  HEAP32[i10 + 4 >> 2] = i3 & -2;
  HEAP32[i9 + 4 >> 2] = i2 | 1;
  HEAP32[i8 + i2 >> 2] = i2;
  i5 = i2;
 }
 i3 = i5 >>> 3;
 if (i5 >>> 0 < 256) {
  i1 = HEAP32[2392] | 0;
  if (!(i1 & 1 << i3)) {
   HEAP32[2392] = i1 | 1 << i3;
   i1 = 9608 + (i3 << 1 << 2) + 8 | 0;
   i2 = 9608 + (i3 << 1 << 2) | 0;
  } else {
   i1 = 9608 + (i3 << 1 << 2) + 8 | 0;
   i2 = HEAP32[9608 + (i3 << 1 << 2) + 8 >> 2] | 0;
  }
  HEAP32[i1 >> 2] = i9;
  HEAP32[i2 + 12 >> 2] = i9;
  HEAP32[i9 + 8 >> 2] = i2;
  HEAP32[i9 + 12 >> 2] = 9608 + (i3 << 1 << 2);
  return;
 }
 i1 = i5 >>> 8;
 if (!i1) i2 = 0; else if (i5 >>> 0 > 16777215) i2 = 31; else {
  i2 = i1 << ((i1 + 1048320 | 0) >>> 16 & 8) << (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4);
  i2 = 14 - (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4 | (i1 + 1048320 | 0) >>> 16 & 8 | (i2 + 245760 | 0) >>> 16 & 2) + (i2 << ((i2 + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
  i2 = i5 >>> (i2 + 7 | 0) & 1 | i2 << 1;
 }
 i4 = 9872 + (i2 << 2) | 0;
 HEAP32[i9 + 28 >> 2] = i2;
 HEAP32[i9 + 20 >> 2] = 0;
 HEAP32[i9 + 16 >> 2] = 0;
 i1 = HEAP32[2393] | 0;
 i3 = 1 << i2;
 do if (!(i1 & i3)) {
  HEAP32[2393] = i1 | i3;
  HEAP32[i4 >> 2] = i9;
  HEAP32[i9 + 24 >> 2] = i4;
  HEAP32[i9 + 12 >> 2] = i9;
  HEAP32[i9 + 8 >> 2] = i9;
 } else {
  i2 = i5 << ((i2 | 0) == 31 ? 0 : 25 - (i2 >>> 1) | 0);
  i3 = HEAP32[i4 >> 2] | 0;
  while (1) {
   if ((HEAP32[i3 + 4 >> 2] & -8 | 0) == (i5 | 0)) {
    i1 = 73;
    break;
   }
   i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
   i1 = HEAP32[i4 >> 2] | 0;
   if (!i1) {
    i1 = 72;
    break;
   } else {
    i2 = i2 << 1;
    i3 = i1;
   }
  }
  if ((i1 | 0) == 72) {
   HEAP32[i4 >> 2] = i9;
   HEAP32[i9 + 24 >> 2] = i3;
   HEAP32[i9 + 12 >> 2] = i9;
   HEAP32[i9 + 8 >> 2] = i9;
   break;
  } else if ((i1 | 0) == 73) {
   i8 = i3 + 8 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i10 + 12 >> 2] = i9;
   HEAP32[i8 >> 2] = i9;
   HEAP32[i9 + 8 >> 2] = i10;
   HEAP32[i9 + 12 >> 2] = i3;
   HEAP32[i9 + 24 >> 2] = 0;
   break;
  }
 } while (0);
 i10 = (HEAP32[2400] | 0) + -1 | 0;
 HEAP32[2400] = i10;
 if (!i10) i1 = 10024; else return;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break; else i1 = i1 + 8 | 0;
 }
 HEAP32[2400] = -1;
 return;
}

function __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ERKSF_(i17, i1) {
 i17 = i17 | 0;
 i1 = i1 | 0;
 var i2 = 0, f3 = f0, f4 = f0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, f18 = f0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 HEAP32[i17 + 8 >> 2] = 0;
 HEAP32[i17 + 12 >> 2] = 0;
 HEAP32[i17 + 16 >> 2] = HEAP32[i1 + 16 >> 2];
 __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE6rehashEj(i17, HEAP32[i1 + 4 >> 2] | 0);
 i1 = HEAP32[i1 + 8 >> 2] | 0;
 if (!i1) return;
 i14 = i1;
 i15 = i1;
 while (1) {
  i13 = i14 + 8 | 0;
  i10 = HEAP8[i13 + 11 >> 0] | 0;
  i11 = i10 << 24 >> 24 < 0 ? HEAP32[i13 >> 2] | 0 : i13;
  i10 = i10 << 24 >> 24 < 0 ? HEAP32[i14 + 12 >> 2] | 0 : i10 & 255;
  if (i10 >>> 0 > 3) {
   i2 = i11;
   i1 = i10;
   i5 = i10;
   while (1) {
    i12 = Math_imul(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, 1540483477) | 0;
    i1 = (Math_imul(i12 >>> 24 ^ i12, 1540483477) | 0) ^ (Math_imul(i1, 1540483477) | 0);
    i5 = i5 + -4 | 0;
    if (i5 >>> 0 <= 3) break; else i2 = i2 + 4 | 0;
   }
   i5 = i11 + ((i10 + -4 & -4) + 4) | 0;
   i2 = i10 + -4 - (i10 + -4 & -4) | 0;
  } else {
   i5 = i11;
   i1 = i10;
   i2 = i10;
  }
  switch (i2 | 0) {
  case 3:
   {
    i1 = HEAPU8[i5 + 2 >> 0] << 16 ^ i1;
    i16 = 8;
    break;
   }
  case 2:
   {
    i16 = 8;
    break;
   }
  case 1:
   {
    i16 = 9;
    break;
   }
  default:
   {}
  }
  if ((i16 | 0) == 8) {
   i1 = HEAPU8[i5 + 1 >> 0] << 8 ^ i1;
   i16 = 9;
  }
  if ((i16 | 0) == 9) {
   i16 = 0;
   i1 = Math_imul(HEAPU8[i5 >> 0] ^ i1, 1540483477) | 0;
  }
  i12 = Math_imul(i1 >>> 13 ^ i1, 1540483477) | 0;
  i9 = HEAP32[i17 + 4 >> 2] | 0;
  L18 : do if (!i9) {
   i1 = 0;
   i16 = 50;
  } else {
   if (!(i9 + -1 & i9)) i1 = (i12 >>> 15 ^ i12) & i9 + -1; else if ((i12 >>> 15 ^ i12) >>> 0 < i9 >>> 0) i1 = i12 >>> 15 ^ i12; else i1 = ((i12 >>> 15 ^ i12) >>> 0) % (i9 >>> 0) | 0;
   i2 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i1 << 2) >> 2] | 0;
   if (!i2) i16 = 50; else {
    i2 = HEAP32[i2 >> 2] | 0;
    if (!i2) i16 = 50; else {
     if (!(i9 + -1 & i9)) {
      if (!i10) while (1) {
       i11 = HEAP32[i2 + 4 >> 2] | 0;
       if (!((i11 | 0) == (i12 >>> 15 ^ i12 | 0) | (i11 & i9 + -1 | 0) == (i1 | 0))) {
        i16 = 50;
        break L18;
       }
       i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
       if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L18;
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i16 = 50;
        break L18;
       }
      }
      while (1) {
       i8 = HEAP32[i2 + 4 >> 2] | 0;
       if (!((i8 | 0) == (i12 >>> 15 ^ i12 | 0) | (i8 & i9 + -1 | 0) == (i1 | 0))) {
        i16 = 50;
        break L18;
       }
       i8 = i2 + 8 | 0;
       i5 = HEAP8[i8 + 11 >> 0] | 0;
       do if (((i5 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i5 & 255) | 0) == (i10 | 0)) {
        i6 = HEAP32[i8 >> 2] | 0;
        if (i5 << 24 >> 24 < 0) if (!(_memcmp(i6, i11, i10) | 0)) break L18; else break;
        if ((i6 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
         i7 = i5 & 255;
         i5 = i8;
         i6 = i11;
         do {
          i7 = i7 + -1 | 0;
          i5 = i5 + 1 | 0;
          if (!i7) break L18;
          i6 = i6 + 1 | 0;
         } while ((HEAP8[i5 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
        }
       } while (0);
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i16 = 50;
        break L18;
       }
      }
     }
     if (!i10) while (1) {
      i5 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i5 | 0) != (i12 >>> 15 ^ i12 | 0)) {
       if (i5 >>> 0 >= i9 >>> 0) i5 = (i5 >>> 0) % (i9 >>> 0) | 0;
       if ((i5 | 0) != (i1 | 0)) {
        i16 = 50;
        break L18;
       }
      }
      i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
      if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L18;
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i16 = 50;
       break L18;
      }
     }
     while (1) {
      i5 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i5 | 0) != (i12 >>> 15 ^ i12 | 0)) {
       if (i5 >>> 0 >= i9 >>> 0) i5 = (i5 >>> 0) % (i9 >>> 0) | 0;
       if ((i5 | 0) != (i1 | 0)) {
        i16 = 50;
        break L18;
       }
      }
      i8 = i2 + 8 | 0;
      i5 = HEAP8[i8 + 11 >> 0] | 0;
      do if (((i5 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i5 & 255) | 0) == (i10 | 0)) {
       i6 = HEAP32[i8 >> 2] | 0;
       if (i5 << 24 >> 24 < 0) if (!(_memcmp(i6, i11, i10) | 0)) break L18; else break;
       if ((i6 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
        i7 = i5 & 255;
        i5 = i8;
        i6 = i11;
        do {
         i7 = i7 + -1 | 0;
         i5 = i5 + 1 | 0;
         if (!i7) break L18;
         i6 = i6 + 1 | 0;
        } while ((HEAP8[i5 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
       }
      } while (0);
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i16 = 50;
       break;
      }
     }
    }
   }
  } while (0);
  if ((i16 | 0) == 50) {
   i16 = 0;
   i6 = __Znwj(32) | 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i6 + 8 | 0, i13);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i6 + 20 | 0, i14 + 20 | 0);
   HEAP32[i6 + 4 >> 2] = i12 >>> 15 ^ i12;
   HEAP32[i6 >> 2] = 0;
   f4 = Math_fround(((HEAP32[i17 + 12 >> 2] | 0) + 1 | 0) >>> 0);
   f18 = Math_fround(i9 >>> 0);
   f3 = Math_fround(HEAPF32[i17 + 16 >> 2]);
   do if ((i9 | 0) == 0 | f4 > Math_fround(f18 * f3)) {
    i1 = ~~Math_fround(Math_ceil(Math_fround(f4 / f3))) >>> 0;
    __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE6rehashEj(i17, ((i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1) >>> 0 < i1 >>> 0 ? i1 : (i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1);
    i1 = HEAP32[i17 + 4 >> 2] | 0;
    if (!(i1 + -1 & i1)) {
     i5 = i1;
     i1 = i1 + -1 & (i12 >>> 15 ^ i12);
     break;
    }
    if ((i12 >>> 15 ^ i12) >>> 0 < i1 >>> 0) {
     i5 = i1;
     i1 = i12 >>> 15 ^ i12;
    } else {
     i5 = i1;
     i1 = ((i12 >>> 15 ^ i12) >>> 0) % (i1 >>> 0) | 0;
    }
   } else i5 = i9; while (0);
   i2 = (HEAP32[i17 >> 2] | 0) + (i1 << 2) | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   if (!i1) {
    HEAP32[i6 >> 2] = HEAP32[i17 + 8 >> 2];
    HEAP32[i17 + 8 >> 2] = i6;
    HEAP32[i2 >> 2] = i17 + 8;
    i1 = HEAP32[i6 >> 2] | 0;
    if (i1 | 0) {
     i1 = HEAP32[i1 + 4 >> 2] | 0;
     i2 = i5 + -1 | 0;
     if (!(i2 & i5)) i1 = i1 & i2; else if (i1 >>> 0 >= i5 >>> 0) i1 = (i1 >>> 0) % (i5 >>> 0) | 0;
     i1 = (HEAP32[i17 >> 2] | 0) + (i1 << 2) | 0;
     i16 = 63;
    }
   } else {
    HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
    i16 = 63;
   }
   if ((i16 | 0) == 63) {
    i16 = 0;
    HEAP32[i1 >> 2] = i6;
   }
   HEAP32[i17 + 12 >> 2] = (HEAP32[i17 + 12 >> 2] | 0) + 1;
  }
  i1 = HEAP32[i15 >> 2] | 0;
  if (!i1) break; else {
   i14 = i1;
   i15 = i1;
  }
 }
 return;
}

function __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEixEOS6_(i18, i15) {
 i18 = i18 | 0;
 i15 = i15 | 0;
 var i1 = 0, i2 = 0, f3 = f0, f4 = f0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i16 = 0, i17 = 0, f19 = f0;
 i12 = HEAP8[i15 + 11 >> 0] | 0;
 i13 = i12 << 24 >> 24 < 0 ? HEAP32[i15 >> 2] | 0 : i15;
 i12 = i12 << 24 >> 24 < 0 ? HEAP32[i15 + 4 >> 2] | 0 : i12 & 255;
 if (i12 >>> 0 > 3) {
  i2 = i13;
  i7 = i12;
  i5 = i12;
  while (1) {
   i14 = Math_imul(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, 1540483477) | 0;
   i7 = (Math_imul(i14 >>> 24 ^ i14, 1540483477) | 0) ^ (Math_imul(i7, 1540483477) | 0);
   i5 = i5 + -4 | 0;
   if (i5 >>> 0 <= 3) break; else i2 = i2 + 4 | 0;
  }
  i6 = i13 + ((i12 + -4 & -4) + 4) | 0;
  i2 = i7;
  i5 = i12 + -4 - (i12 + -4 & -4) | 0;
 } else {
  i6 = i13;
  i2 = i12;
  i5 = i12;
 }
 switch (i5 | 0) {
 case 3:
  {
   i8 = HEAPU8[i6 + 2 >> 0] << 16 ^ i2;
   i17 = 6;
   break;
  }
 case 2:
  {
   i8 = i2;
   i17 = 6;
   break;
  }
 case 1:
  {
   i9 = i2;
   i17 = 7;
   break;
  }
 default:
  i10 = i2;
 }
 if ((i17 | 0) == 6) {
  i9 = HEAPU8[i6 + 1 >> 0] << 8 ^ i8;
  i17 = 7;
 }
 if ((i17 | 0) == 7) i10 = Math_imul(HEAPU8[i6 >> 0] ^ i9, 1540483477) | 0;
 i14 = Math_imul(i10 >>> 13 ^ i10, 1540483477) | 0;
 i11 = HEAP32[i18 + 4 >> 2] | 0;
 L13 : do if (!i11) i1 = 0; else {
  if (!(i11 + -1 & i11)) i10 = (i14 >>> 15 ^ i14) & i11 + -1; else if ((i14 >>> 15 ^ i14) >>> 0 < i11 >>> 0) i10 = i14 >>> 15 ^ i14; else i10 = ((i14 >>> 15 ^ i14) >>> 0) % (i11 >>> 0) | 0;
  i2 = HEAP32[(HEAP32[i18 >> 2] | 0) + (i10 << 2) >> 2] | 0;
  if (!i2) i1 = i10; else {
   i2 = HEAP32[i2 >> 2] | 0;
   if (!i2) i1 = i10; else {
    if (!(i11 + -1 & i11)) {
     if (!i12) {
      i1 = i2;
      while (1) {
       i13 = HEAP32[i1 + 4 >> 2] | 0;
       if (!((i13 | 0) == (i14 >>> 15 ^ i14 | 0) | (i13 & i11 + -1 | 0) == (i10 | 0))) {
        i1 = i10;
        break L13;
       }
       i13 = HEAP8[i1 + 8 + 11 >> 0] | 0;
       if (!((i13 << 24 >> 24 < 0 ? HEAP32[i1 + 12 >> 2] | 0 : i13 & 255) | 0)) {
        i5 = i1;
        break;
       }
       i1 = HEAP32[i1 >> 2] | 0;
       if (!i1) {
        i1 = i10;
        break L13;
       }
      }
      i18 = i5 + 20 | 0;
      return i18 | 0;
     } else i5 = i2;
     L30 : while (1) {
      i9 = HEAP32[i5 + 4 >> 2] | 0;
      if (!((i9 | 0) == (i14 >>> 15 ^ i14 | 0) | (i9 & i11 + -1 | 0) == (i10 | 0))) {
       i1 = i10;
       break L13;
      }
      i9 = i5 + 8 | 0;
      i6 = HEAP8[i9 + 11 >> 0] | 0;
      do if (((i6 << 24 >> 24 < 0 ? HEAP32[i5 + 12 >> 2] | 0 : i6 & 255) | 0) == (i12 | 0)) {
       i7 = HEAP32[i9 >> 2] | 0;
       if (i6 << 24 >> 24 < 0) if (!(_memcmp(i7, i13, i12) | 0)) {
        i17 = 63;
        break L30;
       } else break;
       if ((i7 & 255) << 24 >> 24 == (HEAP8[i13 >> 0] | 0)) {
        i8 = i6 & 255;
        i6 = i9;
        i7 = i13;
        do {
         i8 = i8 + -1 | 0;
         i6 = i6 + 1 | 0;
         if (!i8) {
          i17 = 63;
          break L30;
         }
         i7 = i7 + 1 | 0;
        } while ((HEAP8[i6 >> 0] | 0) == (HEAP8[i7 >> 0] | 0));
       }
      } while (0);
      i5 = HEAP32[i5 >> 2] | 0;
      if (!i5) {
       i1 = i10;
       break L13;
      }
     }
     if ((i17 | 0) == 63) {
      i18 = i5 + 20 | 0;
      return i18 | 0;
     }
    }
    if (!i12) {
     while (1) {
      i1 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i1 | 0) != (i14 >>> 15 ^ i14 | 0)) {
       if (i1 >>> 0 >= i11 >>> 0) i1 = (i1 >>> 0) % (i11 >>> 0) | 0;
       if ((i1 | 0) != (i10 | 0)) {
        i1 = i10;
        break L13;
       }
      }
      i13 = HEAP8[i2 + 8 + 11 >> 0] | 0;
      if (!((i13 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i13 & 255) | 0)) {
       i5 = i2;
       break;
      }
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i1 = i10;
       break L13;
      }
     }
     i18 = i5 + 20 | 0;
     return i18 | 0;
    }
    L58 : while (1) {
     i5 = HEAP32[i2 + 4 >> 2] | 0;
     if ((i5 | 0) != (i14 >>> 15 ^ i14 | 0)) {
      if (i5 >>> 0 >= i11 >>> 0) i5 = (i5 >>> 0) % (i11 >>> 0) | 0;
      if ((i5 | 0) != (i10 | 0)) {
       i1 = i10;
       break L13;
      }
     }
     i8 = i2 + 8 | 0;
     i5 = HEAP8[i8 + 11 >> 0] | 0;
     do if (((i5 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i5 & 255) | 0) == (i12 | 0)) {
      i6 = HEAP32[i8 >> 2] | 0;
      if (i5 << 24 >> 24 < 0) if (!(_memcmp(i6, i13, i12) | 0)) {
       i5 = i2;
       i17 = 63;
       break L58;
      } else break;
      if ((i6 & 255) << 24 >> 24 == (HEAP8[i13 >> 0] | 0)) {
       i7 = i5 & 255;
       i5 = i8;
       i6 = i13;
       do {
        i7 = i7 + -1 | 0;
        i5 = i5 + 1 | 0;
        if (!i7) {
         i5 = i2;
         i17 = 63;
         break L58;
        }
        i6 = i6 + 1 | 0;
       } while ((HEAP8[i5 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
      }
     } while (0);
     i2 = HEAP32[i2 >> 2] | 0;
     if (!i2) {
      i1 = i10;
      break L13;
     }
    }
    if ((i17 | 0) == 63) {
     i18 = i5 + 20 | 0;
     return i18 | 0;
    }
   }
  }
 } while (0);
 i6 = __Znwj(32) | 0;
 HEAP32[i6 + 8 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i6 + 8 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i6 + 8 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i15 >> 2] = 0;
 HEAP32[i15 + 4 >> 2] = 0;
 HEAP32[i15 + 8 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 HEAP32[i6 + 20 + 4 >> 2] = 0;
 HEAP32[i6 + 20 + 8 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = i14 >>> 15 ^ i14;
 HEAP32[i6 >> 2] = 0;
 f4 = Math_fround(((HEAP32[i18 + 12 >> 2] | 0) + 1 | 0) >>> 0);
 f19 = Math_fround(i11 >>> 0);
 f3 = Math_fround(HEAPF32[i18 + 16 >> 2]);
 do if ((i11 | 0) == 0 | f4 > Math_fround(f19 * f3)) {
  i1 = ~~Math_fround(Math_ceil(Math_fround(f4 / f3))) >>> 0;
  __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE6rehashEj(i18, ((i11 >>> 0 < 3 | (i11 + -1 & i11 | 0) != 0) & 1 | i11 << 1) >>> 0 < i1 >>> 0 ? i1 : (i11 >>> 0 < 3 | (i11 + -1 & i11 | 0) != 0) & 1 | i11 << 1);
  i1 = HEAP32[i18 + 4 >> 2] | 0;
  if (!(i1 + -1 & i1)) {
   i5 = i1;
   i1 = i1 + -1 & (i14 >>> 15 ^ i14);
   break;
  }
  if ((i14 >>> 15 ^ i14) >>> 0 < i1 >>> 0) {
   i5 = i1;
   i1 = i14 >>> 15 ^ i14;
  } else {
   i5 = i1;
   i1 = ((i14 >>> 15 ^ i14) >>> 0) % (i1 >>> 0) | 0;
  }
 } else i5 = i11; while (0);
 i2 = (HEAP32[i18 >> 2] | 0) + (i1 << 2) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if (!i1) {
  HEAP32[i6 >> 2] = HEAP32[i18 + 8 >> 2];
  HEAP32[i18 + 8 >> 2] = i6;
  HEAP32[i2 >> 2] = i18 + 8;
  i1 = HEAP32[i6 >> 2] | 0;
  if (i1 | 0) {
   i1 = HEAP32[i1 + 4 >> 2] | 0;
   i2 = i5 + -1 | 0;
   if (!(i2 & i5)) i1 = i1 & i2; else if (i1 >>> 0 >= i5 >>> 0) i1 = (i1 >>> 0) % (i5 >>> 0) | 0;
   i16 = (HEAP32[i18 >> 2] | 0) + (i1 << 2) | 0;
   i17 = 61;
  }
 } else {
  HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
  i16 = i1;
  i17 = 61;
 }
 if ((i17 | 0) == 61) HEAP32[i16 >> 2] = i6;
 HEAP32[i18 + 12 >> 2] = (HEAP32[i18 + 12 >> 2] | 0) + 1;
 i18 = i6;
 i18 = i18 + 20 | 0;
 return i18 | 0;
}

function __ZN6asmdom16functionCallbackERKjRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEN10emscripten3valE(i17, i1, i13, i16) {
 i17 = i17 | 0;
 i1 = i1 | 0;
 i13 = i13 | 0;
 i16 = i16 | 0;
 var i2 = 0, i3 = 0, f4 = f0, f5 = f0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i14 = 0, i15 = 0, i18 = 0, f19 = f0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = HEAP32[i1 >> 2] | 0;
 i10 = HEAP8[i13 + 11 >> 0] | 0;
 i11 = i10 << 24 >> 24 < 0 ? HEAP32[i13 >> 2] | 0 : i13;
 i10 = i10 << 24 >> 24 < 0 ? HEAP32[i13 + 4 >> 2] | 0 : i10 & 255;
 if (i10 >>> 0 > 3) {
  i2 = i11;
  i1 = i10;
  i3 = i10;
  while (1) {
   i12 = Math_imul(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, 1540483477) | 0;
   i1 = (Math_imul(i12 >>> 24 ^ i12, 1540483477) | 0) ^ (Math_imul(i1, 1540483477) | 0);
   i3 = i3 + -4 | 0;
   if (i3 >>> 0 <= 3) break; else i2 = i2 + 4 | 0;
  }
  i3 = i11 + ((i10 + -4 & -4) + 4) | 0;
  i2 = i10 + -4 - (i10 + -4 & -4) | 0;
 } else {
  i3 = i11;
  i1 = i10;
  i2 = i10;
 }
 switch (i2 | 0) {
 case 3:
  {
   i1 = HEAPU8[i3 + 2 >> 0] << 16 ^ i1;
   i14 = 6;
   break;
  }
 case 2:
  {
   i14 = 6;
   break;
  }
 case 1:
  {
   i14 = 7;
   break;
  }
 default:
  {}
 }
 if ((i14 | 0) == 6) {
  i1 = HEAPU8[i3 + 1 >> 0] << 8 ^ i1;
  i14 = 7;
 }
 if ((i14 | 0) == 7) i1 = Math_imul(HEAPU8[i3 >> 0] ^ i1, 1540483477) | 0;
 i12 = Math_imul(i1 >>> 13 ^ i1, 1540483477) | 0;
 i9 = HEAP32[i15 + 80 >> 2] | 0;
 L13 : do if (!i9) {
  i2 = 0;
  i14 = 48;
 } else {
  if (!(i9 + -1 & i9)) i2 = (i12 >>> 15 ^ i12) & i9 + -1; else if ((i12 >>> 15 ^ i12) >>> 0 < i9 >>> 0) i2 = i12 >>> 15 ^ i12; else i2 = ((i12 >>> 15 ^ i12) >>> 0) % (i9 >>> 0) | 0;
  i1 = HEAP32[(HEAP32[i15 + 76 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  if (!i1) i14 = 48; else {
   i1 = HEAP32[i1 >> 2] | 0;
   if (!i1) i14 = 48; else {
    if (!(i9 + -1 & i9)) {
     if (!i10) while (1) {
      i11 = HEAP32[i1 + 4 >> 2] | 0;
      if (!((i11 | 0) == (i12 >>> 15 ^ i12 | 0) | (i11 & i9 + -1 | 0) == (i2 | 0))) {
       i14 = 48;
       break L13;
      }
      i11 = HEAP8[i1 + 8 + 11 >> 0] | 0;
      if (!((i11 << 24 >> 24 < 0 ? HEAP32[i1 + 12 >> 2] | 0 : i11 & 255) | 0)) break L13;
      i1 = HEAP32[i1 >> 2] | 0;
      if (!i1) {
       i14 = 48;
       break L13;
      }
     }
     while (1) {
      i8 = HEAP32[i1 + 4 >> 2] | 0;
      if (!((i8 | 0) == (i12 >>> 15 ^ i12 | 0) | (i8 & i9 + -1 | 0) == (i2 | 0))) {
       i14 = 48;
       break L13;
      }
      i8 = i1 + 8 | 0;
      i3 = HEAP8[i8 + 11 >> 0] | 0;
      do if (((i3 << 24 >> 24 < 0 ? HEAP32[i1 + 12 >> 2] | 0 : i3 & 255) | 0) == (i10 | 0)) {
       i6 = HEAP32[i8 >> 2] | 0;
       if (i3 << 24 >> 24 < 0) if (!(_memcmp(i6, i11, i10) | 0)) break L13; else break;
       if ((i6 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
        i7 = i3 & 255;
        i3 = i8;
        i6 = i11;
        do {
         i7 = i7 + -1 | 0;
         i3 = i3 + 1 | 0;
         if (!i7) break L13;
         i6 = i6 + 1 | 0;
        } while ((HEAP8[i3 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
       }
      } while (0);
      i1 = HEAP32[i1 >> 2] | 0;
      if (!i1) {
       i14 = 48;
       break L13;
      }
     }
    }
    if (!i10) while (1) {
     i3 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i3 | 0) != (i12 >>> 15 ^ i12 | 0)) {
      if (i3 >>> 0 >= i9 >>> 0) i3 = (i3 >>> 0) % (i9 >>> 0) | 0;
      if ((i3 | 0) != (i2 | 0)) {
       i14 = 48;
       break L13;
      }
     }
     i11 = HEAP8[i1 + 8 + 11 >> 0] | 0;
     if (!((i11 << 24 >> 24 < 0 ? HEAP32[i1 + 12 >> 2] | 0 : i11 & 255) | 0)) break L13;
     i1 = HEAP32[i1 >> 2] | 0;
     if (!i1) {
      i14 = 48;
      break L13;
     }
    }
    while (1) {
     i3 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i3 | 0) != (i12 >>> 15 ^ i12 | 0)) {
      if (i3 >>> 0 >= i9 >>> 0) i3 = (i3 >>> 0) % (i9 >>> 0) | 0;
      if ((i3 | 0) != (i2 | 0)) {
       i14 = 48;
       break L13;
      }
     }
     i8 = i1 + 8 | 0;
     i3 = HEAP8[i8 + 11 >> 0] | 0;
     do if (((i3 << 24 >> 24 < 0 ? HEAP32[i1 + 12 >> 2] | 0 : i3 & 255) | 0) == (i10 | 0)) {
      i6 = HEAP32[i8 >> 2] | 0;
      if (i3 << 24 >> 24 < 0) if (!(_memcmp(i6, i11, i10) | 0)) break L13; else break;
      if ((i6 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
       i7 = i3 & 255;
       i3 = i8;
       i6 = i11;
       do {
        i7 = i7 + -1 | 0;
        i3 = i3 + 1 | 0;
        if (!i7) break L13;
        i6 = i6 + 1 | 0;
       } while ((HEAP8[i3 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
      }
     } while (0);
     i1 = HEAP32[i1 >> 2] | 0;
     if (!i1) {
      i14 = 48;
      break;
     }
    }
   }
  }
 } while (0);
 if ((i14 | 0) == 48) {
  i1 = __Znwj(48) | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1 + 8 | 0, i13);
  HEAP32[i1 + 40 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = i12 >>> 15 ^ i12;
  HEAP32[i1 >> 2] = 0;
  f5 = Math_fround(((HEAP32[i15 + 88 >> 2] | 0) + 1 | 0) >>> 0);
  f19 = Math_fround(i9 >>> 0);
  f4 = Math_fround(HEAPF32[i15 + 92 >> 2]);
  do if ((i9 | 0) == 0 | f5 > Math_fround(f19 * f4)) {
   i2 = ~~Math_fround(Math_ceil(Math_fround(f5 / f4))) >>> 0;
   __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_22__unordered_map_hasherIS7_SD_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SD_NS_8equal_toIS7_EELb1EEENS5_ISD_EEE6rehashEj(i15 + 76 | 0, ((i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1) >>> 0 < i2 >>> 0 ? i2 : (i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1);
   i2 = HEAP32[i15 + 80 >> 2] | 0;
   if (!(i2 + -1 & i2)) {
    i6 = i2;
    i2 = i2 + -1 & (i12 >>> 15 ^ i12);
    break;
   }
   if ((i12 >>> 15 ^ i12) >>> 0 < i2 >>> 0) {
    i6 = i2;
    i2 = i12 >>> 15 ^ i12;
   } else {
    i6 = i2;
    i2 = ((i12 >>> 15 ^ i12) >>> 0) % (i2 >>> 0) | 0;
   }
  } else i6 = i9; while (0);
  i3 = (HEAP32[i15 + 76 >> 2] | 0) + (i2 << 2) | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  if (!i2) {
   HEAP32[i1 >> 2] = HEAP32[i15 + 84 >> 2];
   HEAP32[i15 + 84 >> 2] = i1;
   HEAP32[i3 >> 2] = i15 + 84;
   i2 = HEAP32[i1 >> 2] | 0;
   if (i2 | 0) {
    i2 = HEAP32[i2 + 4 >> 2] | 0;
    i3 = i6 + -1 | 0;
    if (!(i3 & i6)) i2 = i2 & i3; else if (i2 >>> 0 >= i6 >>> 0) i2 = (i2 >>> 0) % (i6 >>> 0) | 0;
    i2 = (HEAP32[i15 + 76 >> 2] | 0) + (i2 << 2) | 0;
    i14 = 61;
   }
  } else {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i14 = 61;
  }
  if ((i14 | 0) == 61) HEAP32[i2 >> 2] = i1;
  HEAP32[i15 + 88 >> 2] = (HEAP32[i15 + 88 >> 2] | 0) + 1;
 }
 i16 = HEAP32[i16 >> 2] | 0;
 HEAP32[i18 + 8 >> 2] = i16;
 __emval_incref(i16 | 0);
 i1 = HEAP32[i1 + 40 >> 2] | 0;
 if (!i1) {
  i18 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i18 >> 2] = 1528;
  ___cxa_throw(i18 | 0, 1024, 1);
 } else {
  i16 = (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 0](i1, i18 + 8 | 0) | 0) & 1;
  HEAP32[i18 >> 2] = i16;
  i16 = __emval_take_value(1392, i18 | 0) | 0;
  HEAP32[i17 >> 2] = i16;
  __emval_decref(HEAP32[i18 + 8 >> 2] | 0);
  STACKTOP = i18;
  return;
 }
}

function __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i17, i15, i16) {
 i17 = i17 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 var i1 = 0, i2 = 0, i3 = 0, f4 = f0, f5 = f0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, f18 = f0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 HEAP32[i17 + 8 >> 2] = 0;
 HEAP32[i17 + 12 >> 2] = 0;
 HEAPF32[i17 + 16 >> 2] = Math_fround(1.0);
 if (!i16) return;
 i14 = i15;
 do {
  i10 = HEAP8[i14 + 11 >> 0] | 0;
  i11 = i10 << 24 >> 24 < 0 ? HEAP32[i14 >> 2] | 0 : i14;
  i10 = i10 << 24 >> 24 < 0 ? HEAP32[i14 + 4 >> 2] | 0 : i10 & 255;
  if (i10 >>> 0 > 3) {
   i2 = i11;
   i1 = i10;
   i3 = i10;
   while (1) {
    i12 = Math_imul(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, 1540483477) | 0;
    i1 = (Math_imul(i12 >>> 24 ^ i12, 1540483477) | 0) ^ (Math_imul(i1, 1540483477) | 0);
    i3 = i3 + -4 | 0;
    if (i3 >>> 0 <= 3) break; else i2 = i2 + 4 | 0;
   }
   i3 = i11 + ((i10 + -4 & -4) + 4) | 0;
   i2 = i10 + -4 - (i10 + -4 & -4) | 0;
  } else {
   i3 = i11;
   i1 = i10;
   i2 = i10;
  }
  switch (i2 | 0) {
  case 3:
   {
    i1 = HEAPU8[i3 + 2 >> 0] << 16 ^ i1;
    i13 = 8;
    break;
   }
  case 2:
   {
    i13 = 8;
    break;
   }
  case 1:
   {
    i13 = 9;
    break;
   }
  default:
   {}
  }
  if ((i13 | 0) == 8) {
   i1 = HEAPU8[i3 + 1 >> 0] << 8 ^ i1;
   i13 = 9;
  }
  if ((i13 | 0) == 9) {
   i13 = 0;
   i1 = Math_imul(HEAPU8[i3 >> 0] ^ i1, 1540483477) | 0;
  }
  i12 = Math_imul(i1 >>> 13 ^ i1, 1540483477) | 0;
  i9 = HEAP32[i17 + 4 >> 2] | 0;
  L18 : do if (!i9) {
   i1 = 0;
   i13 = 50;
  } else {
   if (!(i9 + -1 & i9)) i1 = (i12 >>> 15 ^ i12) & i9 + -1; else if ((i12 >>> 15 ^ i12) >>> 0 < i9 >>> 0) i1 = i12 >>> 15 ^ i12; else i1 = ((i12 >>> 15 ^ i12) >>> 0) % (i9 >>> 0) | 0;
   i2 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i1 << 2) >> 2] | 0;
   if (!i2) i13 = 50; else {
    i2 = HEAP32[i2 >> 2] | 0;
    if (!i2) i13 = 50; else {
     if (!(i9 + -1 & i9)) {
      if (!i10) while (1) {
       i11 = HEAP32[i2 + 4 >> 2] | 0;
       if (!((i11 | 0) == (i12 >>> 15 ^ i12 | 0) | (i11 & i9 + -1 | 0) == (i1 | 0))) {
        i13 = 50;
        break L18;
       }
       i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
       if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L18;
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i13 = 50;
        break L18;
       }
      }
      while (1) {
       i8 = HEAP32[i2 + 4 >> 2] | 0;
       if (!((i8 | 0) == (i12 >>> 15 ^ i12 | 0) | (i8 & i9 + -1 | 0) == (i1 | 0))) {
        i13 = 50;
        break L18;
       }
       i8 = i2 + 8 | 0;
       i3 = HEAP8[i8 + 11 >> 0] | 0;
       do if (((i3 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i3 & 255) | 0) == (i10 | 0)) {
        i6 = HEAP32[i8 >> 2] | 0;
        if (i3 << 24 >> 24 < 0) if (!(_memcmp(i6, i11, i10) | 0)) break L18; else break;
        if ((i6 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
         i7 = i3 & 255;
         i3 = i8;
         i6 = i11;
         do {
          i7 = i7 + -1 | 0;
          i3 = i3 + 1 | 0;
          if (!i7) break L18;
          i6 = i6 + 1 | 0;
         } while ((HEAP8[i3 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
        }
       } while (0);
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i13 = 50;
        break L18;
       }
      }
     }
     if (!i10) while (1) {
      i3 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i3 | 0) != (i12 >>> 15 ^ i12 | 0)) {
       if (i3 >>> 0 >= i9 >>> 0) i3 = (i3 >>> 0) % (i9 >>> 0) | 0;
       if ((i3 | 0) != (i1 | 0)) {
        i13 = 50;
        break L18;
       }
      }
      i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
      if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L18;
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i13 = 50;
       break L18;
      }
     }
     while (1) {
      i3 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i3 | 0) != (i12 >>> 15 ^ i12 | 0)) {
       if (i3 >>> 0 >= i9 >>> 0) i3 = (i3 >>> 0) % (i9 >>> 0) | 0;
       if ((i3 | 0) != (i1 | 0)) {
        i13 = 50;
        break L18;
       }
      }
      i8 = i2 + 8 | 0;
      i3 = HEAP8[i8 + 11 >> 0] | 0;
      do if (((i3 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i3 & 255) | 0) == (i10 | 0)) {
       i6 = HEAP32[i8 >> 2] | 0;
       if (i3 << 24 >> 24 < 0) if (!(_memcmp(i6, i11, i10) | 0)) break L18; else break;
       if ((i6 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
        i7 = i3 & 255;
        i3 = i8;
        i6 = i11;
        do {
         i7 = i7 + -1 | 0;
         i3 = i3 + 1 | 0;
         if (!i7) break L18;
         i6 = i6 + 1 | 0;
        } while ((HEAP8[i3 >> 0] | 0) == (HEAP8[i6 >> 0] | 0));
       }
      } while (0);
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i13 = 50;
       break;
      }
     }
    }
   }
  } while (0);
  if ((i13 | 0) == 50) {
   i13 = 0;
   i6 = __Znwj(32) | 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i6 + 8 | 0, i14);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i6 + 20 | 0, i14 + 12 | 0);
   HEAP32[i6 + 4 >> 2] = i12 >>> 15 ^ i12;
   HEAP32[i6 >> 2] = 0;
   f5 = Math_fround(((HEAP32[i17 + 12 >> 2] | 0) + 1 | 0) >>> 0);
   f18 = Math_fround(i9 >>> 0);
   f4 = Math_fround(HEAPF32[i17 + 16 >> 2]);
   do if ((i9 | 0) == 0 | f5 > Math_fround(f18 * f4)) {
    i1 = ~~Math_fround(Math_ceil(Math_fround(f5 / f4))) >>> 0;
    __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE6rehashEj(i17, ((i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1) >>> 0 < i1 >>> 0 ? i1 : (i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1);
    i1 = HEAP32[i17 + 4 >> 2] | 0;
    if (!(i1 + -1 & i1)) {
     i3 = i1;
     i1 = i1 + -1 & (i12 >>> 15 ^ i12);
     break;
    }
    if ((i12 >>> 15 ^ i12) >>> 0 < i1 >>> 0) {
     i3 = i1;
     i1 = i12 >>> 15 ^ i12;
    } else {
     i3 = i1;
     i1 = ((i12 >>> 15 ^ i12) >>> 0) % (i1 >>> 0) | 0;
    }
   } else i3 = i9; while (0);
   i2 = (HEAP32[i17 >> 2] | 0) + (i1 << 2) | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   if (!i1) {
    HEAP32[i6 >> 2] = HEAP32[i17 + 8 >> 2];
    HEAP32[i17 + 8 >> 2] = i6;
    HEAP32[i2 >> 2] = i17 + 8;
    i1 = HEAP32[i6 >> 2] | 0;
    if (i1 | 0) {
     i1 = HEAP32[i1 + 4 >> 2] | 0;
     i2 = i3 + -1 | 0;
     if (!(i2 & i3)) i1 = i1 & i2; else if (i1 >>> 0 >= i3 >>> 0) i1 = (i1 >>> 0) % (i3 >>> 0) | 0;
     i1 = (HEAP32[i17 >> 2] | 0) + (i1 << 2) | 0;
     i13 = 63;
    }
   } else {
    HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
    i13 = 63;
   }
   if ((i13 | 0) == 63) {
    i13 = 0;
    HEAP32[i1 >> 2] = i6;
   }
   HEAP32[i17 + 12 >> 2] = (HEAP32[i17 + 12 >> 2] | 0) + 1;
  }
  i14 = i14 + 24 | 0;
 } while ((i14 | 0) != (i15 + (i16 * 24 | 0) | 0));
 return;
}

function __ZN6asmdom13diffCallbacksEPNS_5VNodeES1_(i1, i16) {
 i1 = i1 | 0;
 i16 = i16 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 if (!(HEAP32[i1 + 88 >> 2] | 0)) if (!(HEAP32[i16 + 88 >> 2] | 0)) return;
 _emscripten_asm_const_ii(2, HEAP32[i16 + 96 >> 2] | 0) | 0;
 i1 = HEAP32[i1 + 84 >> 2] | 0;
 L5 : do if (i1 | 0) while (1) {
  i12 = i1;
  i13 = HEAP8[i12 + 8 + 11 >> 0] | 0;
  i14 = HEAP32[i12 + 8 >> 2] | 0;
  i11 = i13 << 24 >> 24 < 0 ? i14 : i12 + 8 | 0;
  i10 = i13 << 24 >> 24 < 0 ? HEAP32[i12 + 12 >> 2] | 0 : i13 & 255;
  if (i10 >>> 0 > 3) {
   i3 = i11;
   i2 = i10;
   i4 = i10;
   while (1) {
    i9 = Math_imul(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, 1540483477) | 0;
    i2 = (Math_imul(i9 >>> 24 ^ i9, 1540483477) | 0) ^ (Math_imul(i2, 1540483477) | 0);
    i4 = i4 + -4 | 0;
    if (i4 >>> 0 <= 3) break; else i3 = i3 + 4 | 0;
   }
   i4 = i11 + ((i10 + -4 & -4) + 4) | 0;
   i3 = i10 + -4 - (i10 + -4 & -4) | 0;
  } else {
   i4 = i11;
   i2 = i10;
   i3 = i10;
  }
  switch (i3 | 0) {
  case 3:
   {
    i2 = HEAPU8[i4 + 2 >> 0] << 16 ^ i2;
    i15 = 12;
    break;
   }
  case 2:
   {
    i15 = 12;
    break;
   }
  case 1:
   {
    i15 = 13;
    break;
   }
  default:
   {}
  }
  if ((i15 | 0) == 12) {
   i2 = HEAPU8[i4 + 1 >> 0] << 8 ^ i2;
   i15 = 13;
  }
  if ((i15 | 0) == 13) {
   i15 = 0;
   i2 = Math_imul(HEAPU8[i4 >> 0] ^ i2, 1540483477) | 0;
  }
  i9 = Math_imul(i2 >>> 13 ^ i2, 1540483477) | 0;
  i7 = HEAP32[i16 + 80 >> 2] | 0;
  L21 : do if (!i7) i15 = 57; else {
   if (!(i7 + -1 & i7)) i8 = (i9 >>> 15 ^ i9) & i7 + -1; else if ((i9 >>> 15 ^ i9) >>> 0 < i7 >>> 0) i8 = i9 >>> 15 ^ i9; else i8 = ((i9 >>> 15 ^ i9) >>> 0) % (i7 >>> 0) | 0;
   i2 = HEAP32[(HEAP32[i16 + 76 >> 2] | 0) + (i8 << 2) >> 2] | 0;
   if (!i2) i15 = 57; else {
    i2 = HEAP32[i2 >> 2] | 0;
    if (!i2) i15 = 57; else {
     L30 : do if (!(i7 + -1 & i7)) {
      if (!i10) while (1) {
       i3 = HEAP32[i2 + 4 >> 2] | 0;
       if (!((i9 >>> 15 ^ i9 | 0) == (i3 | 0) | (i3 & i7 + -1 | 0) == (i8 | 0))) {
        i15 = 57;
        break L21;
       }
       if ((i9 >>> 15 ^ i9 | 0) == (i3 | 0)) {
        i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
        if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L21;
       }
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i15 = 57;
        break L21;
       }
      }
      while (1) {
       i3 = HEAP32[i2 + 4 >> 2] | 0;
       if (!((i9 >>> 15 ^ i9 | 0) == (i3 | 0) | (i3 & i7 + -1 | 0) == (i8 | 0))) {
        i15 = 57;
        break L21;
       }
       do if ((i9 >>> 15 ^ i9 | 0) == (i3 | 0)) {
        i6 = i2 + 8 | 0;
        i3 = HEAP8[i6 + 11 >> 0] | 0;
        if (((i3 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i3 & 255) | 0) == (i10 | 0)) {
         i4 = HEAP32[i6 >> 2] | 0;
         if (i3 << 24 >> 24 < 0) if (!(_memcmp(i4, i11, i10) | 0)) break L21; else break;
         if ((i4 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
          i5 = i3 & 255;
          i3 = i6;
          i4 = i11;
          do {
           i5 = i5 + -1 | 0;
           i3 = i3 + 1 | 0;
           if (!i5) break L30;
           i4 = i4 + 1 | 0;
          } while ((HEAP8[i3 >> 0] | 0) == (HEAP8[i4 >> 0] | 0));
         }
        }
       } while (0);
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i15 = 57;
        break L21;
       }
      }
     } else {
      if (!i10) while (1) {
       i3 = HEAP32[i2 + 4 >> 2] | 0;
       if ((i9 >>> 15 ^ i9 | 0) == (i3 | 0)) {
        i11 = HEAP8[i2 + 8 + 11 >> 0] | 0;
        if (!((i11 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i11 & 255) | 0)) break L21;
       } else {
        if (i3 >>> 0 >= i7 >>> 0) i3 = (i3 >>> 0) % (i7 >>> 0) | 0;
        if ((i3 | 0) != (i8 | 0)) {
         i15 = 57;
         break L21;
        }
       }
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i15 = 57;
        break L21;
       }
      }
      while (1) {
       i3 = HEAP32[i2 + 4 >> 2] | 0;
       do if ((i9 >>> 15 ^ i9 | 0) == (i3 | 0)) {
        i6 = i2 + 8 | 0;
        i3 = HEAP8[i6 + 11 >> 0] | 0;
        if (((i3 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i3 & 255) | 0) == (i10 | 0)) {
         i4 = HEAP32[i6 >> 2] | 0;
         if (i3 << 24 >> 24 < 0) if (!(_memcmp(i4, i11, i10) | 0)) break L21; else break;
         if ((i4 & 255) << 24 >> 24 == (HEAP8[i11 >> 0] | 0)) {
          i5 = i3 & 255;
          i3 = i6;
          i4 = i11;
          do {
           i5 = i5 + -1 | 0;
           i3 = i3 + 1 | 0;
           if (!i5) break L30;
           i4 = i4 + 1 | 0;
          } while ((HEAP8[i3 >> 0] | 0) == (HEAP8[i4 >> 0] | 0));
         }
        }
       } else {
        if (i3 >>> 0 >= i7 >>> 0) i3 = (i3 >>> 0) % (i7 >>> 0) | 0;
        if ((i3 | 0) != (i8 | 0)) {
         i15 = 57;
         break L21;
        }
       } while (0);
       i2 = HEAP32[i2 >> 2] | 0;
       if (!i2) {
        i15 = 57;
        break L21;
       }
      }
     } while (0);
     if (!i2) i15 = 57;
    }
   }
  } while (0);
  if ((i15 | 0) == 57) {
   i15 = 0;
   _emscripten_asm_const_iii(3, HEAP32[i16 + 96 >> 2] | 0, (i13 << 24 >> 24 < 0 ? i14 : i12 + 8 | 0) | 0) | 0;
  }
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break L5;
 } while (0);
 i1 = HEAP32[i16 + 84 >> 2] | 0;
 if (!i1) return;
 do {
  i2 = i1 + 8 | 0;
  if ((HEAP8[i2 + 11 >> 0] | 0) < 0) i2 = HEAP32[i2 >> 2] | 0;
  _emscripten_asm_const_iiii(4, i16 | 0, HEAP32[i16 + 96 >> 2] | 0, i2 | 0) | 0;
  i1 = HEAP32[i1 >> 2] | 0;
 } while ((i1 | 0) != 0);
 return;
}

function _main() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 if (!(HEAP8[9504] | 0)) if (___cxa_guard_acquire(9504) | 0) {
  HEAP8[10152] = 1;
  HEAP8[10153] = 0;
 }
 HEAP8[10152] = 0;
 HEAP8[10153] = 1;
 _emscripten_asm_const_v(18);
 i11 = i12 + 248 + 4 | 0;
 i7 = __Znwj(4e4) | 0;
 HEAP32[i12 + 248 >> 2] = i7;
 HEAP32[i11 >> 2] = i7;
 HEAP32[i12 + 248 + 8 >> 2] = i7 + 4e4;
 i7 = i12 + 56 + 12 | 0;
 i3 = i12 + 56 + 24 | 0;
 i10 = i12 + 56 + 36 | 0;
 i4 = i12 + 56 + 48 | 0;
 i8 = i12 + 56 + 60 | 0;
 i5 = i12 + 56 + 72 | 0;
 i9 = i12 + 56 + 84 | 0;
 i6 = 0;
 do {
  HEAP32[i12 + 232 >> 2] = 0;
  HEAP32[i12 + 232 + 4 >> 2] = 0;
  HEAP32[i12 + 232 + 8 >> 2] = 0;
  HEAP8[i12 + 232 + 11 >> 0] = 4;
  HEAP32[i12 + 232 >> 2] = 1851879539;
  HEAP8[i12 + 232 + 4 >> 0] = 0;
  HEAP32[i12 + 56 + 4 >> 2] = 0;
  HEAP32[i12 + 56 + 4 + 4 >> 2] = 0;
  HEAP8[i12 + 56 + 11 >> 0] = 3;
  HEAP8[i12 + 56 >> 0] = HEAP8[4982] | 0;
  HEAP8[i12 + 56 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i12 + 56 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i12 + 56 + 3 >> 0] = 0;
  HEAP32[i12 + 56 + 16 >> 2] = 0;
  HEAP32[i12 + 56 + 16 + 4 >> 2] = 0;
  HEAP8[i7 + 11 >> 0] = 3;
  HEAP8[i7 >> 0] = HEAP8[4982] | 0;
  HEAP8[i7 + 1 >> 0] = HEAP8[4983] | 0;
  HEAP8[i7 + 2 >> 0] = HEAP8[4984] | 0;
  HEAP8[i7 + 3 >> 0] = 0;
  HEAP32[i12 + 56 + 28 >> 2] = 0;
  HEAP32[i12 + 56 + 28 + 4 >> 2] = 0;
  HEAP8[i3 + 11 >> 0] = 3;
  HEAP8[i3 >> 0] = HEAP8[4986] | 0;
  HEAP8[i3 + 1 >> 0] = HEAP8[4987] | 0;
  HEAP8[i3 + 2 >> 0] = HEAP8[4988] | 0;
  HEAP8[i3 + 3 >> 0] = 0;
  HEAP32[i12 + 56 + 40 >> 2] = 0;
  HEAP32[i12 + 56 + 40 + 4 >> 2] = 0;
  HEAP8[i10 + 11 >> 0] = 3;
  HEAP8[i10 >> 0] = HEAP8[4986] | 0;
  HEAP8[i10 + 1 >> 0] = HEAP8[4987] | 0;
  HEAP8[i10 + 2 >> 0] = HEAP8[4988] | 0;
  HEAP8[i10 + 3 >> 0] = 0;
  HEAP32[i12 + 56 + 52 >> 2] = 0;
  HEAP32[i12 + 56 + 52 + 4 >> 2] = 0;
  HEAP8[i4 + 11 >> 0] = 3;
  HEAP8[i4 >> 0] = HEAP8[4990] | 0;
  HEAP8[i4 + 1 >> 0] = HEAP8[4991] | 0;
  HEAP8[i4 + 2 >> 0] = HEAP8[4992] | 0;
  HEAP8[i4 + 3 >> 0] = 0;
  HEAP32[i12 + 56 + 64 >> 2] = 0;
  HEAP32[i12 + 56 + 64 + 4 >> 2] = 0;
  HEAP8[i8 + 11 >> 0] = 3;
  HEAP8[i8 >> 0] = HEAP8[4990] | 0;
  HEAP8[i8 + 1 >> 0] = HEAP8[4991] | 0;
  HEAP8[i8 + 2 >> 0] = HEAP8[4992] | 0;
  HEAP8[i8 + 3 >> 0] = 0;
  __ZNSt3__29to_stringEi(i12 + 40 | 0, i6);
  HEAP32[i5 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  HEAP32[i5 + 8 >> 2] = 0;
  HEAP8[i5 + 11 >> 0] = 1;
  HEAP8[i5 >> 0] = 101;
  HEAP8[i5 + 1 >> 0] = 0;
  HEAP32[i9 >> 2] = HEAP32[i12 + 40 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i12 + 40 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i12 + 40 + 8 >> 2];
  HEAP32[i12 + 40 >> 2] = 0;
  HEAP32[i12 + 40 + 4 >> 2] = 0;
  HEAP32[i12 + 40 + 8 >> 2] = 0;
  __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i12 + 152 | 0, i12 + 56 | 0, 4);
  HEAP32[i12 + 20 >> 2] = 0;
  HEAP32[i12 + 20 + 4 >> 2] = 0;
  HEAP32[i12 + 20 + 8 >> 2] = 0;
  HEAP32[i12 + 20 + 12 >> 2] = 0;
  HEAPF32[i12 + 20 + 16 >> 2] = Math_fround(1.0);
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  HEAP32[i12 + 8 >> 2] = 0;
  HEAP32[i12 + 12 >> 2] = 0;
  HEAPF32[i12 + 16 >> 2] = Math_fround(1.0);
  __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i12 + 172 | 0, i12 + 152 | 0, i12 + 20 | 0, i12);
  i2 = __Znwj(112) | 0;
  __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i2, i12 + 232 | 0, i12 + 172 | 0);
  HEAP32[i12 + 244 >> 2] = i2;
  i1 = HEAP32[i11 >> 2] | 0;
  if (i1 >>> 0 < (HEAP32[i12 + 248 + 8 >> 2] | 0) >>> 0) {
   HEAP32[i1 >> 2] = i2;
   HEAP32[i11 >> 2] = i1 + 4;
  } else __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i12 + 248 | 0, i12 + 244 | 0);
  __ZN6asmdom4DataD2Ev(i12 + 172 | 0);
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 20 >> 2] = 0;
  i1 = HEAP32[i12 + 152 + 8 >> 2] | 0;
  if (i1 | 0) do {
   i2 = i1;
   i1 = HEAP32[i1 >> 2] | 0;
   if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
   if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
   __ZdlPv(i2);
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i12 + 152 >> 2] | 0;
  HEAP32[i12 + 152 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  if ((HEAP8[i9 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i9 >> 2] | 0);
  if ((HEAP8[i5 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
  if ((HEAP8[i8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 >> 2] | 0);
  if ((HEAP8[i4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 >> 2] | 0);
  if ((HEAP8[i10 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 >> 2] | 0);
  if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
  if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
  if ((HEAP8[i12 + 56 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i12 + 56 >> 2] | 0);
  i6 = i6 + 1 | 0;
 } while ((i6 | 0) < 1e4);
 i3 = HEAP32[i12 + 248 >> 2] | 0;
 i2 = 0;
 do {
  i1 = HEAP32[i3 + (i2 << 2) >> 2] | 0;
  if (i1 | 0) {
   __ZN6asmdom5VNodeD2Ev(i1);
   __ZdlPv(i1);
  }
  i2 = i2 + 1 | 0;
 } while ((i2 | 0) != 1e4);
 if (!i3) {
  STACKTOP = i12;
  return 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) != (i3 | 0)) HEAP32[i11 >> 2] = i1 + (~((i1 + -4 - i3 | 0) >>> 2) << 2);
 __ZdlPv(i3);
 STACKTOP = i12;
 return 0;
}

function __ZN6asmdom9createElmEPNS_5VNodeE(i10) {
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i1 = HEAP8[i10 + 11 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) i2 = HEAP32[i10 + 4 >> 2] | 0; else i2 = i1 & 255;
 if (!i2) {
  if ((HEAP8[i10 + 24 + 11 >> 0] | 0) < 0) i1 = HEAP32[i10 + 24 >> 2] | 0; else i1 = i10 + 24 | 0;
  i9 = _emscripten_asm_const_ii(5, i1 | 0) | 0;
  HEAP32[i10 + 96 >> 2] = i9;
  i10 = i10 + 96 | 0;
  i10 = HEAP32[i10 >> 2] | 0;
  STACKTOP = i11;
  return i10 | 0;
 }
 if (((i1 << 24 >> 24 < 0 ? HEAP32[i10 + 4 >> 2] | 0 : i1 & 255) | 0) == 1) if (!(__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i10, 9367, 1) | 0)) {
  if ((HEAP8[i10 + 24 + 11 >> 0] | 0) < 0) i1 = HEAP32[i10 + 24 >> 2] | 0; else i1 = i10 + 24 | 0;
  i9 = _emscripten_asm_const_ii(6, i1 | 0) | 0;
  HEAP32[i10 + 96 >> 2] = i9;
  i10 = i10 + 96 | 0;
  i10 = HEAP32[i10 >> 2] | 0;
  STACKTOP = i11;
  return i10 | 0;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i11 + 4 >> 2] = 0;
 HEAP32[i11 + 8 >> 2] = 0;
 HEAP8[i11 + 11 >> 0] = 2;
 HEAP16[i11 >> 1] = 29550;
 HEAP8[i11 + 2 >> 0] = 0;
 if (!(__ZNKSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_21__hash_const_iteratorIPNS_11__hash_nodeIS8_PvEEEERKT_(i10 + 36 | 0, i11) | 0)) {
  if ((HEAP8[i10 + 11 >> 0] | 0) < 0) i1 = HEAP32[i10 >> 2] | 0; else i1 = i10;
  i9 = _emscripten_asm_const_ii(8, i1 | 0) | 0;
  HEAP32[i10 + 96 >> 2] = i9;
 } else {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  HEAP32[i11 + 8 >> 2] = 0;
  HEAP8[i11 + 11 >> 0] = 2;
  HEAP16[i11 >> 1] = 29550;
  HEAP8[i11 + 2 >> 0] = 0;
  i1 = __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEixEOS6_(i10 + 36 | 0, i11) | 0;
  if ((HEAP8[i10 + 11 >> 0] | 0) < 0) i2 = HEAP32[i10 >> 2] | 0; else i2 = i10;
  i9 = _emscripten_asm_const_iii(7, ((HEAP8[i1 + 11 >> 0] | 0) < 0 ? HEAP32[i1 >> 2] | 0 : i1) | 0, i2 | 0) | 0;
  HEAP32[i10 + 96 >> 2] = i9;
  if ((HEAP8[i11 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i11 >> 2] | 0);
  HEAP32[i11 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  HEAP32[i11 + 8 >> 2] = 0;
  HEAP8[i11 + 11 >> 0] = 2;
  HEAP16[i11 >> 1] = 29550;
  HEAP8[i11 + 2 >> 0] = 0;
  i9 = __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_15__hash_iteratorIPNS_11__hash_nodeIS8_PvEEEERKT_(i10 + 36 | 0, i11) | 0;
  if (i9 | 0) {
   i5 = HEAP32[i10 + 40 >> 2] | 0;
   i1 = HEAP32[i9 + 4 >> 2] | 0;
   i7 = (i5 + -1 & i5 | 0) == 0;
   if (i7) i6 = i5 + -1 & i1; else if (i1 >>> 0 < i5 >>> 0) i6 = i1; else i6 = (i1 >>> 0) % (i5 >>> 0) | 0;
   i2 = (HEAP32[i10 + 36 >> 2] | 0) + (i6 << 2) | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   while (1) {
    i1 = HEAP32[i8 >> 2] | 0;
    if ((i1 | 0) == (i9 | 0)) break; else i8 = i1;
   }
   if ((i8 | 0) == (i10 + 44 | 0)) i4 = 35; else {
    i1 = HEAP32[i8 + 4 >> 2] | 0;
    if (i7) i1 = i1 & i5 + -1; else if (i1 >>> 0 >= i5 >>> 0) i1 = (i1 >>> 0) % (i5 >>> 0) | 0;
    if ((i1 | 0) == (i6 | 0)) i3 = i9; else i4 = 35;
   }
   do if ((i4 | 0) == 35) {
    i1 = HEAP32[i9 >> 2] | 0;
    if (i1 | 0) {
     i1 = HEAP32[i1 + 4 >> 2] | 0;
     if (i7) i1 = i1 & i5 + -1; else if (i1 >>> 0 >= i5 >>> 0) i1 = (i1 >>> 0) % (i5 >>> 0) | 0;
     if ((i1 | 0) == (i6 | 0)) {
      i3 = i9;
      break;
     }
    }
    HEAP32[i2 >> 2] = 0;
    i3 = i9;
   } while (0);
   i1 = HEAP32[i3 >> 2] | 0;
   if (i1) {
    i2 = HEAP32[i1 + 4 >> 2] | 0;
    if (i7) i2 = i2 & i5 + -1; else if (i2 >>> 0 >= i5 >>> 0) i2 = (i2 >>> 0) % (i5 >>> 0) | 0;
    if ((i2 | 0) != (i6 | 0)) {
     HEAP32[(HEAP32[i10 + 36 >> 2] | 0) + (i2 << 2) >> 2] = i8;
     i1 = HEAP32[i9 >> 2] | 0;
    }
   }
   HEAP32[i8 >> 2] = i1;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i10 + 48 >> 2] = (HEAP32[i10 + 48 >> 2] | 0) + -1;
   if ((HEAP8[i9 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i9 + 20 >> 2] | 0);
   if ((HEAP8[i9 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i9 + 8 >> 2] | 0);
   __ZdlPv(i9);
  }
 }
 i1 = HEAP32[2383] | 0;
 __ZN6asmdom9diffAttrsEPNS_5VNodeES1_(i1, i10);
 __ZN6asmdom9diffPropsEPNS_5VNodeES1_(i1, i10);
 __ZN6asmdom13diffCallbacksEPNS_5VNodeES1_(i1, i10);
 i1 = HEAP32[i10 + 100 >> 2] | 0;
 if ((i1 | 0) != (HEAP32[i10 + 104 >> 2] | 0)) {
  i2 = 0;
  do {
   i9 = HEAP32[i10 + 96 >> 2] | 0;
   _emscripten_asm_const_iii(9, i9 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[i1 + (i2 << 2) >> 2] | 0) | 0) | 0;
   i2 = i2 + 1 | 0;
   i1 = HEAP32[i10 + 100 >> 2] | 0;
  } while ((i2 | 0) != ((HEAP32[i10 + 104 >> 2] | 0) - i1 >> 2 | 0));
  i1 = i10 + 96 | 0;
  i10 = HEAP32[i1 >> 2] | 0;
  STACKTOP = i11;
  return i10 | 0;
 }
 i1 = HEAP8[i10 + 24 + 11 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) i2 = HEAP32[i10 + 28 >> 2] | 0; else i2 = i1 & 255;
 if (!i2) {
  i10 = i10 + 96 | 0;
  i10 = HEAP32[i10 >> 2] | 0;
  STACKTOP = i11;
  return i10 | 0;
 }
 if (i1 << 24 >> 24 < 0) i1 = HEAP32[i10 + 24 >> 2] | 0; else i1 = i10 + 24 | 0;
 _emscripten_asm_const_iii(10, HEAP32[i10 + 96 >> 2] | 0, i1 | 0) | 0;
 i10 = i10 + 96 | 0;
 i10 = HEAP32[i10 >> 2] | 0;
 STACKTOP = i11;
 return i10 | 0;
}

function __ZN6asmdom5patchERKN10emscripten3valEPNS_5VNodeE(i9, i10) {
 i9 = i9 | 0;
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i11 = 0, d12 = 0.0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 i2 = __emval_new_cstring(4346) | 0;
 i3 = __emval_get_property(i3 | 0, i2 | 0) | 0;
 __emval_decref(i2 | 0);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_(i11 + 176 | 0, i3);
 __emval_decref(i3 | 0);
 i3 = HEAP8[i11 + 176 + 11 >> 0] | 0;
 i2 = i3 << 24 >> 24 < 0 ? HEAP32[i11 + 176 >> 2] | 0 : i11 + 176 | 0;
 i3 = i3 << 24 >> 24 < 0 ? HEAP32[i11 + 176 + 4 >> 2] | 0 : i3 & 255;
 if (i3 | 0) {
  i1 = i2;
  do {
   i8 = (_tolower(HEAP8[i1 >> 0] | 0) | 0) & 255;
   HEAP8[i1 >> 0] = i8;
   i1 = i1 + 1 | 0;
  } while ((i1 | 0) != (i2 + i3 | 0));
 }
 i4 = HEAP32[i9 >> 2] | 0;
 i6 = __emval_new_cstring(9441) | 0;
 i4 = __emval_get_property(i4 | 0, i6 | 0) | 0;
 __emval_decref(i6 | 0);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_(i11 + 112 | 0, i4);
 HEAP32[i11 + 128 >> 2] = 0;
 HEAP32[i11 + 128 + 4 >> 2] = 0;
 HEAP32[i11 + 128 + 8 >> 2] = 0;
 HEAP8[i11 + 128 + 11 >> 0] = 2;
 HEAP16[i11 + 128 >> 1] = 25705;
 HEAP8[i11 + 128 + 2 >> 0] = 0;
 i6 = i11 + 128 + 12 | 0;
 HEAP32[i6 >> 2] = HEAP32[i11 + 112 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i11 + 112 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i11 + 112 + 8 >> 2];
 HEAP32[i11 + 112 >> 2] = 0;
 HEAP32[i11 + 112 + 4 >> 2] = 0;
 HEAP32[i11 + 112 + 8 >> 2] = 0;
 i3 = i11 + 128 + 24 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 i7 = __emval_new_cstring(4354) | 0;
 i5 = __emval_get_property(i5 | 0, i7 | 0) | 0;
 __emval_decref(i7 | 0);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_(i11 + 100 | 0, i5);
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP8[i3 + 11 >> 0] = 5;
 HEAP8[i3 >> 0] = HEAP8[4364] | 0;
 HEAP8[i3 + 1 >> 0] = HEAP8[4365] | 0;
 HEAP8[i3 + 2 >> 0] = HEAP8[4366] | 0;
 HEAP8[i3 + 3 >> 0] = HEAP8[4367] | 0;
 HEAP8[i3 + 4 >> 0] = HEAP8[4368] | 0;
 HEAP8[i3 + 5 >> 0] = 0;
 i7 = i11 + 128 + 36 | 0;
 HEAP32[i7 >> 2] = HEAP32[i11 + 100 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i11 + 100 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i11 + 100 + 8 >> 2];
 HEAP32[i11 + 100 >> 2] = 0;
 HEAP32[i11 + 100 + 4 >> 2] = 0;
 HEAP32[i11 + 100 + 8 >> 2] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i11 + 188 | 0, i11 + 128 | 0, 2);
 HEAP32[i11 + 80 >> 2] = 0;
 HEAP32[i11 + 80 + 4 >> 2] = 0;
 HEAP32[i11 + 80 + 8 >> 2] = 0;
 HEAP32[i11 + 80 + 12 >> 2] = 0;
 HEAPF32[i11 + 80 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i11 + 60 >> 2] = 0;
 HEAP32[i11 + 60 + 4 >> 2] = 0;
 HEAP32[i11 + 60 + 8 >> 2] = 0;
 HEAP32[i11 + 60 + 12 >> 2] = 0;
 HEAPF32[i11 + 60 + 16 >> 2] = Math_fround(1.0);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ERKSF_(i11, i11 + 188 | 0);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S8_EEEEEC2ERKSH_(i11 + 20 | 0, i11 + 80 | 0);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ERKSK_(i11 + 40 | 0, i11 + 60 | 0);
 i8 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i8, i11 + 176 | 0, i11);
 __ZN6asmdom4DataD2Ev(i11);
 HEAP32[i11 + 60 >> 2] = 0;
 HEAP32[i11 + 80 >> 2] = 0;
 i1 = HEAP32[i11 + 188 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i11 + 188 >> 2] | 0;
 HEAP32[i11 + 188 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
 if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
 if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
 if ((HEAP8[i11 + 128 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i11 + 128 >> 2] | 0);
 __emval_decref(i5 | 0);
 __emval_decref(i4 | 0);
 i1 = __emval_get_global(2829) | 0;
 i7 = __emval_new_cstring(2836) | 0;
 i2 = __emval_get_property(i1 | 0, i7 | 0) | 0;
 __emval_decref(i7 | 0);
 i7 = __emval_new_cstring(4370) | 0;
 i3 = __emval_get_property(i2 | 0, i7 | 0) | 0;
 __emval_decref(i7 | 0);
 if (!(HEAP8[9512] | 0)) if (___cxa_guard_acquire(9512) | 0) {
  i7 = __emval_get_method_caller(2, 1540) | 0;
  HEAP32[2384] = i7;
 }
 i7 = HEAP32[2384] | 0;
 __emval_incref(HEAP32[i9 >> 2] | 0);
 HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
 d12 = +__emval_call_method(i7 | 0, i3 | 0, 4377, i11 + 188 | 0, i11 | 0);
 __emval_run_destructors(HEAP32[i11 + 188 >> 2] | 0);
 HEAP32[i8 + 96 >> 2] = ~~d12;
 __emval_decref(i3 | 0);
 __emval_decref(i2 | 0);
 __emval_decref(i1 | 0);
 __ZN6asmdom5patchEPNS_5VNodeES1_(i8, i10);
 if ((HEAP8[i11 + 176 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i11;
  return;
 }
 __ZdlPv(HEAP32[i11 + 176 >> 2] | 0);
 STACKTOP = i11;
 return;
}

function __ZNKSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_22__unordered_map_hasherIS7_SA_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SA_NS_8equal_toIS7_EELb1EEENS5_ISA_EEE4findIS7_EENS_21__hash_const_iteratorIPNS_11__hash_nodeISA_PvEEEERKT_(i8, i1) {
 i8 = i8 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i12 = HEAP8[i1 + 11 >> 0] | 0;
 i14 = i12 << 24 >> 24 < 0 ? HEAP32[i1 >> 2] | 0 : i1;
 i12 = i12 << 24 >> 24 < 0 ? HEAP32[i1 + 4 >> 2] | 0 : i12 & 255;
 if (i12 >>> 0 > 3) {
  i1 = i14;
  i4 = i12;
  i2 = i12;
  while (1) {
   i11 = Math_imul(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, 1540483477) | 0;
   i4 = (Math_imul(i11 >>> 24 ^ i11, 1540483477) | 0) ^ (Math_imul(i4, 1540483477) | 0);
   i2 = i2 + -4 | 0;
   if (i2 >>> 0 <= 3) break; else i1 = i1 + 4 | 0;
  }
  i3 = i14 + ((i12 + -4 & -4) + 4) | 0;
  i1 = i4;
  i2 = i12 + -4 - (i12 + -4 & -4) | 0;
 } else {
  i3 = i14;
  i1 = i12;
  i2 = i12;
 }
 switch (i2 | 0) {
 case 3:
  {
   i5 = HEAPU8[i3 + 2 >> 0] << 16 ^ i1;
   i9 = 6;
   break;
  }
 case 2:
  {
   i5 = i1;
   i9 = 6;
   break;
  }
 case 1:
  {
   i6 = i1;
   i9 = 7;
   break;
  }
 default:
  i7 = i1;
 }
 if ((i9 | 0) == 6) {
  i6 = HEAPU8[i3 + 1 >> 0] << 8 ^ i5;
  i9 = 7;
 }
 if ((i9 | 0) == 7) i7 = Math_imul(HEAPU8[i3 >> 0] ^ i6, 1540483477) | 0;
 i11 = Math_imul(i7 >>> 13 ^ i7, 1540483477) | 0;
 i6 = HEAP32[i8 + 4 >> 2] | 0;
 if (!i6) {
  i14 = 0;
  return i14 | 0;
 }
 if (!(i6 + -1 & i6)) i7 = (i11 >>> 15 ^ i11) & i6 + -1; else if ((i11 >>> 15 ^ i11) >>> 0 < i6 >>> 0) i7 = i11 >>> 15 ^ i11; else i7 = ((i11 >>> 15 ^ i11) >>> 0) % (i6 >>> 0) | 0;
 i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i7 << 2) >> 2] | 0;
 if (!i1) {
  i14 = 0;
  return i14 | 0;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if (!i2) {
  i14 = 0;
  return i14 | 0;
 }
 if (!(i6 + -1 & i6)) {
  if (!i12) {
   i3 = i2;
   while (1) {
    i1 = HEAP32[i3 + 4 >> 2] | 0;
    if (!((i11 >>> 15 ^ i11 | 0) == (i1 | 0) | (i1 & i6 + -1 | 0) == (i7 | 0))) {
     i3 = 0;
     i9 = 50;
     break;
    }
    if ((i11 >>> 15 ^ i11 | 0) == (i1 | 0)) {
     i9 = HEAP8[i3 + 8 + 11 >> 0] | 0;
     if (!((i9 << 24 >> 24 < 0 ? HEAP32[i3 + 12 >> 2] | 0 : i9 & 255) | 0)) {
      i9 = 50;
      break;
     }
    }
    i3 = HEAP32[i3 >> 2] | 0;
    if (!i3) {
     i3 = 0;
     i9 = 50;
     break;
    }
   }
   if ((i9 | 0) == 50) return i3 | 0;
  } else i10 = i2;
  L40 : while (1) {
   i1 = HEAP32[i10 + 4 >> 2] | 0;
   if (!((i11 >>> 15 ^ i11 | 0) == (i1 | 0) | (i1 & i6 + -1 | 0) == (i7 | 0))) {
    i3 = 0;
    i9 = 50;
    break;
   }
   do if ((i11 >>> 15 ^ i11 | 0) == (i1 | 0)) {
    i5 = i10 + 8 | 0;
    i1 = HEAP8[i5 + 11 >> 0] | 0;
    if (((i1 << 24 >> 24 < 0 ? HEAP32[i10 + 12 >> 2] | 0 : i1 & 255) | 0) == (i12 | 0)) {
     i3 = HEAP32[i5 >> 2] | 0;
     if (i1 << 24 >> 24 < 0) if (!(_memcmp(i3, i14, i12) | 0)) {
      i3 = i10;
      i9 = 50;
      break L40;
     } else break;
     if ((i3 & 255) << 24 >> 24 == (HEAP8[i14 >> 0] | 0)) {
      i4 = i1 & 255;
      i1 = i5;
      i3 = i14;
      do {
       i4 = i4 + -1 | 0;
       i1 = i1 + 1 | 0;
       if (!i4) {
        i3 = i10;
        i9 = 50;
        break L40;
       }
       i3 = i3 + 1 | 0;
      } while ((HEAP8[i1 >> 0] | 0) == (HEAP8[i3 >> 0] | 0));
     }
    }
   } while (0);
   i10 = HEAP32[i10 >> 2] | 0;
   if (!i10) {
    i3 = 0;
    i9 = 50;
    break;
   }
  }
  if ((i9 | 0) == 50) return i3 | 0;
 }
 if (!i12) {
  while (1) {
   i1 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i11 >>> 15 ^ i11 | 0) == (i1 | 0)) {
    i10 = HEAP8[i2 + 8 + 11 >> 0] | 0;
    if (!((i10 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i10 & 255) | 0)) {
     i3 = i2;
     i9 = 50;
     break;
    }
   } else {
    if (i1 >>> 0 >= i6 >>> 0) i1 = (i1 >>> 0) % (i6 >>> 0) | 0;
    if ((i1 | 0) != (i7 | 0)) {
     i3 = 0;
     i9 = 50;
     break;
    }
   }
   i2 = HEAP32[i2 >> 2] | 0;
   if (!i2) {
    i3 = 0;
    i9 = 50;
    break;
   }
  }
  if ((i9 | 0) == 50) return i3 | 0;
 } else i13 = i2;
 L74 : while (1) {
  i1 = HEAP32[i13 + 4 >> 2] | 0;
  do if ((i11 >>> 15 ^ i11 | 0) == (i1 | 0)) {
   i4 = i13 + 8 | 0;
   i1 = HEAP8[i4 + 11 >> 0] | 0;
   if (((i1 << 24 >> 24 < 0 ? HEAP32[i13 + 12 >> 2] | 0 : i1 & 255) | 0) == (i12 | 0)) {
    i2 = HEAP32[i4 >> 2] | 0;
    if (i1 << 24 >> 24 < 0) if (!(_memcmp(i2, i14, i12) | 0)) {
     i3 = i13;
     i9 = 50;
     break L74;
    } else break;
    if ((i2 & 255) << 24 >> 24 == (HEAP8[i14 >> 0] | 0)) {
     i3 = i1 & 255;
     i1 = i4;
     i2 = i14;
     do {
      i3 = i3 + -1 | 0;
      i1 = i1 + 1 | 0;
      if (!i3) {
       i3 = i13;
       i9 = 50;
       break L74;
      }
      i2 = i2 + 1 | 0;
     } while ((HEAP8[i1 >> 0] | 0) == (HEAP8[i2 >> 0] | 0));
    }
   }
  } else {
   if (i1 >>> 0 >= i6 >>> 0) i1 = (i1 >>> 0) % (i6 >>> 0) | 0;
   if ((i1 | 0) != (i7 | 0)) {
    i3 = 0;
    i9 = 50;
    break L74;
   }
  } while (0);
  i13 = HEAP32[i13 >> 2] | 0;
  if (!i13) {
   i3 = 0;
   i9 = 50;
   break;
  }
 }
 if ((i9 | 0) == 50) return i3 | 0;
 return 0;
}

function __ZNKSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_21__hash_const_iteratorIPNS_11__hash_nodeIS8_PvEEEERKT_(i8, i1) {
 i8 = i8 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i12 = HEAP8[i1 + 11 >> 0] | 0;
 i14 = i12 << 24 >> 24 < 0 ? HEAP32[i1 >> 2] | 0 : i1;
 i12 = i12 << 24 >> 24 < 0 ? HEAP32[i1 + 4 >> 2] | 0 : i12 & 255;
 if (i12 >>> 0 > 3) {
  i1 = i14;
  i4 = i12;
  i2 = i12;
  while (1) {
   i11 = Math_imul(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, 1540483477) | 0;
   i4 = (Math_imul(i11 >>> 24 ^ i11, 1540483477) | 0) ^ (Math_imul(i4, 1540483477) | 0);
   i2 = i2 + -4 | 0;
   if (i2 >>> 0 <= 3) break; else i1 = i1 + 4 | 0;
  }
  i3 = i14 + ((i12 + -4 & -4) + 4) | 0;
  i1 = i4;
  i2 = i12 + -4 - (i12 + -4 & -4) | 0;
 } else {
  i3 = i14;
  i1 = i12;
  i2 = i12;
 }
 switch (i2 | 0) {
 case 3:
  {
   i5 = HEAPU8[i3 + 2 >> 0] << 16 ^ i1;
   i9 = 6;
   break;
  }
 case 2:
  {
   i5 = i1;
   i9 = 6;
   break;
  }
 case 1:
  {
   i6 = i1;
   i9 = 7;
   break;
  }
 default:
  i7 = i1;
 }
 if ((i9 | 0) == 6) {
  i6 = HEAPU8[i3 + 1 >> 0] << 8 ^ i5;
  i9 = 7;
 }
 if ((i9 | 0) == 7) i7 = Math_imul(HEAPU8[i3 >> 0] ^ i6, 1540483477) | 0;
 i11 = Math_imul(i7 >>> 13 ^ i7, 1540483477) | 0;
 i6 = HEAP32[i8 + 4 >> 2] | 0;
 if (!i6) {
  i14 = 0;
  return i14 | 0;
 }
 if (!(i6 + -1 & i6)) i7 = (i11 >>> 15 ^ i11) & i6 + -1; else if ((i11 >>> 15 ^ i11) >>> 0 < i6 >>> 0) i7 = i11 >>> 15 ^ i11; else i7 = ((i11 >>> 15 ^ i11) >>> 0) % (i6 >>> 0) | 0;
 i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i7 << 2) >> 2] | 0;
 if (!i1) {
  i14 = 0;
  return i14 | 0;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if (!i2) {
  i14 = 0;
  return i14 | 0;
 }
 if (!(i6 + -1 & i6)) {
  if (!i12) {
   i3 = i2;
   while (1) {
    i1 = HEAP32[i3 + 4 >> 2] | 0;
    if (!((i11 >>> 15 ^ i11 | 0) == (i1 | 0) | (i1 & i6 + -1 | 0) == (i7 | 0))) {
     i3 = 0;
     i9 = 50;
     break;
    }
    if ((i11 >>> 15 ^ i11 | 0) == (i1 | 0)) {
     i9 = HEAP8[i3 + 8 + 11 >> 0] | 0;
     if (!((i9 << 24 >> 24 < 0 ? HEAP32[i3 + 12 >> 2] | 0 : i9 & 255) | 0)) {
      i9 = 50;
      break;
     }
    }
    i3 = HEAP32[i3 >> 2] | 0;
    if (!i3) {
     i3 = 0;
     i9 = 50;
     break;
    }
   }
   if ((i9 | 0) == 50) return i3 | 0;
  } else i10 = i2;
  L40 : while (1) {
   i1 = HEAP32[i10 + 4 >> 2] | 0;
   if (!((i11 >>> 15 ^ i11 | 0) == (i1 | 0) | (i1 & i6 + -1 | 0) == (i7 | 0))) {
    i3 = 0;
    i9 = 50;
    break;
   }
   do if ((i11 >>> 15 ^ i11 | 0) == (i1 | 0)) {
    i5 = i10 + 8 | 0;
    i1 = HEAP8[i5 + 11 >> 0] | 0;
    if (((i1 << 24 >> 24 < 0 ? HEAP32[i10 + 12 >> 2] | 0 : i1 & 255) | 0) == (i12 | 0)) {
     i3 = HEAP32[i5 >> 2] | 0;
     if (i1 << 24 >> 24 < 0) if (!(_memcmp(i3, i14, i12) | 0)) {
      i3 = i10;
      i9 = 50;
      break L40;
     } else break;
     if ((i3 & 255) << 24 >> 24 == (HEAP8[i14 >> 0] | 0)) {
      i4 = i1 & 255;
      i1 = i5;
      i3 = i14;
      do {
       i4 = i4 + -1 | 0;
       i1 = i1 + 1 | 0;
       if (!i4) {
        i3 = i10;
        i9 = 50;
        break L40;
       }
       i3 = i3 + 1 | 0;
      } while ((HEAP8[i1 >> 0] | 0) == (HEAP8[i3 >> 0] | 0));
     }
    }
   } while (0);
   i10 = HEAP32[i10 >> 2] | 0;
   if (!i10) {
    i3 = 0;
    i9 = 50;
    break;
   }
  }
  if ((i9 | 0) == 50) return i3 | 0;
 }
 if (!i12) {
  while (1) {
   i1 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i11 >>> 15 ^ i11 | 0) == (i1 | 0)) {
    i10 = HEAP8[i2 + 8 + 11 >> 0] | 0;
    if (!((i10 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i10 & 255) | 0)) {
     i3 = i2;
     i9 = 50;
     break;
    }
   } else {
    if (i1 >>> 0 >= i6 >>> 0) i1 = (i1 >>> 0) % (i6 >>> 0) | 0;
    if ((i1 | 0) != (i7 | 0)) {
     i3 = 0;
     i9 = 50;
     break;
    }
   }
   i2 = HEAP32[i2 >> 2] | 0;
   if (!i2) {
    i3 = 0;
    i9 = 50;
    break;
   }
  }
  if ((i9 | 0) == 50) return i3 | 0;
 } else i13 = i2;
 L74 : while (1) {
  i1 = HEAP32[i13 + 4 >> 2] | 0;
  do if ((i11 >>> 15 ^ i11 | 0) == (i1 | 0)) {
   i4 = i13 + 8 | 0;
   i1 = HEAP8[i4 + 11 >> 0] | 0;
   if (((i1 << 24 >> 24 < 0 ? HEAP32[i13 + 12 >> 2] | 0 : i1 & 255) | 0) == (i12 | 0)) {
    i2 = HEAP32[i4 >> 2] | 0;
    if (i1 << 24 >> 24 < 0) if (!(_memcmp(i2, i14, i12) | 0)) {
     i3 = i13;
     i9 = 50;
     break L74;
    } else break;
    if ((i2 & 255) << 24 >> 24 == (HEAP8[i14 >> 0] | 0)) {
     i3 = i1 & 255;
     i1 = i4;
     i2 = i14;
     do {
      i3 = i3 + -1 | 0;
      i1 = i1 + 1 | 0;
      if (!i3) {
       i3 = i13;
       i9 = 50;
       break L74;
      }
      i2 = i2 + 1 | 0;
     } while ((HEAP8[i1 >> 0] | 0) == (HEAP8[i2 >> 0] | 0));
    }
   }
  } else {
   if (i1 >>> 0 >= i6 >>> 0) i1 = (i1 >>> 0) % (i6 >>> 0) | 0;
   if ((i1 | 0) != (i7 | 0)) {
    i3 = 0;
    i9 = 50;
    break L74;
   }
  } while (0);
  i13 = HEAP32[i13 >> 2] | 0;
  if (!i13) {
   i3 = 0;
   i9 = 50;
   break;
  }
 }
 if ((i9 | 0) == 50) return i3 | 0;
 return 0;
}

function __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_15__hash_iteratorIPNS_11__hash_nodeIS8_PvEEEERKT_(i8, i1) {
 i8 = i8 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i12 = HEAP8[i1 + 11 >> 0] | 0;
 i14 = i12 << 24 >> 24 < 0 ? HEAP32[i1 >> 2] | 0 : i1;
 i12 = i12 << 24 >> 24 < 0 ? HEAP32[i1 + 4 >> 2] | 0 : i12 & 255;
 if (i12 >>> 0 > 3) {
  i1 = i14;
  i4 = i12;
  i2 = i12;
  while (1) {
   i11 = Math_imul(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, 1540483477) | 0;
   i4 = (Math_imul(i11 >>> 24 ^ i11, 1540483477) | 0) ^ (Math_imul(i4, 1540483477) | 0);
   i2 = i2 + -4 | 0;
   if (i2 >>> 0 <= 3) break; else i1 = i1 + 4 | 0;
  }
  i3 = i14 + ((i12 + -4 & -4) + 4) | 0;
  i1 = i4;
  i2 = i12 + -4 - (i12 + -4 & -4) | 0;
 } else {
  i3 = i14;
  i1 = i12;
  i2 = i12;
 }
 switch (i2 | 0) {
 case 3:
  {
   i5 = HEAPU8[i3 + 2 >> 0] << 16 ^ i1;
   i9 = 6;
   break;
  }
 case 2:
  {
   i5 = i1;
   i9 = 6;
   break;
  }
 case 1:
  {
   i6 = i1;
   i9 = 7;
   break;
  }
 default:
  i7 = i1;
 }
 if ((i9 | 0) == 6) {
  i6 = HEAPU8[i3 + 1 >> 0] << 8 ^ i5;
  i9 = 7;
 }
 if ((i9 | 0) == 7) i7 = Math_imul(HEAPU8[i3 >> 0] ^ i6, 1540483477) | 0;
 i11 = Math_imul(i7 >>> 13 ^ i7, 1540483477) | 0;
 i6 = HEAP32[i8 + 4 >> 2] | 0;
 if (!i6) {
  i14 = 0;
  return i14 | 0;
 }
 if (!(i6 + -1 & i6)) i7 = (i11 >>> 15 ^ i11) & i6 + -1; else if ((i11 >>> 15 ^ i11) >>> 0 < i6 >>> 0) i7 = i11 >>> 15 ^ i11; else i7 = ((i11 >>> 15 ^ i11) >>> 0) % (i6 >>> 0) | 0;
 i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i7 << 2) >> 2] | 0;
 if (!i1) {
  i14 = 0;
  return i14 | 0;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if (!i2) {
  i14 = 0;
  return i14 | 0;
 }
 if (!(i6 + -1 & i6)) {
  if (!i12) {
   i3 = i2;
   while (1) {
    i1 = HEAP32[i3 + 4 >> 2] | 0;
    if (!((i1 | 0) == (i11 >>> 15 ^ i11 | 0) | (i1 & i6 + -1 | 0) == (i7 | 0))) {
     i3 = 0;
     i9 = 50;
     break;
    }
    if ((i1 | 0) == (i11 >>> 15 ^ i11 | 0)) {
     i9 = HEAP8[i3 + 8 + 11 >> 0] | 0;
     if (!((i9 << 24 >> 24 < 0 ? HEAP32[i3 + 12 >> 2] | 0 : i9 & 255) | 0)) {
      i9 = 50;
      break;
     }
    }
    i3 = HEAP32[i3 >> 2] | 0;
    if (!i3) {
     i3 = 0;
     i9 = 50;
     break;
    }
   }
   if ((i9 | 0) == 50) return i3 | 0;
  } else i10 = i2;
  L40 : while (1) {
   i1 = HEAP32[i10 + 4 >> 2] | 0;
   if (!((i1 | 0) == (i11 >>> 15 ^ i11 | 0) | (i1 & i6 + -1 | 0) == (i7 | 0))) {
    i3 = 0;
    i9 = 50;
    break;
   }
   do if ((i1 | 0) == (i11 >>> 15 ^ i11 | 0)) {
    i5 = i10 + 8 | 0;
    i1 = HEAP8[i5 + 11 >> 0] | 0;
    if (((i1 << 24 >> 24 < 0 ? HEAP32[i10 + 12 >> 2] | 0 : i1 & 255) | 0) == (i12 | 0)) {
     i3 = HEAP32[i5 >> 2] | 0;
     if (i1 << 24 >> 24 < 0) if (!(_memcmp(i3, i14, i12) | 0)) {
      i3 = i10;
      i9 = 50;
      break L40;
     } else break;
     if ((i3 & 255) << 24 >> 24 == (HEAP8[i14 >> 0] | 0)) {
      i4 = i1 & 255;
      i1 = i5;
      i3 = i14;
      do {
       i4 = i4 + -1 | 0;
       i1 = i1 + 1 | 0;
       if (!i4) {
        i3 = i10;
        i9 = 50;
        break L40;
       }
       i3 = i3 + 1 | 0;
      } while ((HEAP8[i1 >> 0] | 0) == (HEAP8[i3 >> 0] | 0));
     }
    }
   } while (0);
   i10 = HEAP32[i10 >> 2] | 0;
   if (!i10) {
    i3 = 0;
    i9 = 50;
    break;
   }
  }
  if ((i9 | 0) == 50) return i3 | 0;
 }
 if (!i12) {
  while (1) {
   i1 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i1 | 0) == (i11 >>> 15 ^ i11 | 0)) {
    i10 = HEAP8[i2 + 8 + 11 >> 0] | 0;
    if (!((i10 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i10 & 255) | 0)) {
     i3 = i2;
     i9 = 50;
     break;
    }
   } else {
    if (i1 >>> 0 >= i6 >>> 0) i1 = (i1 >>> 0) % (i6 >>> 0) | 0;
    if ((i1 | 0) != (i7 | 0)) {
     i3 = 0;
     i9 = 50;
     break;
    }
   }
   i2 = HEAP32[i2 >> 2] | 0;
   if (!i2) {
    i3 = 0;
    i9 = 50;
    break;
   }
  }
  if ((i9 | 0) == 50) return i3 | 0;
 } else i13 = i2;
 L74 : while (1) {
  i1 = HEAP32[i13 + 4 >> 2] | 0;
  do if ((i1 | 0) == (i11 >>> 15 ^ i11 | 0)) {
   i4 = i13 + 8 | 0;
   i1 = HEAP8[i4 + 11 >> 0] | 0;
   if (((i1 << 24 >> 24 < 0 ? HEAP32[i13 + 12 >> 2] | 0 : i1 & 255) | 0) == (i12 | 0)) {
    i2 = HEAP32[i4 >> 2] | 0;
    if (i1 << 24 >> 24 < 0) if (!(_memcmp(i2, i14, i12) | 0)) {
     i3 = i13;
     i9 = 50;
     break L74;
    } else break;
    if ((i2 & 255) << 24 >> 24 == (HEAP8[i14 >> 0] | 0)) {
     i3 = i1 & 255;
     i1 = i4;
     i2 = i14;
     do {
      i3 = i3 + -1 | 0;
      i1 = i1 + 1 | 0;
      if (!i3) {
       i3 = i13;
       i9 = 50;
       break L74;
      }
      i2 = i2 + 1 | 0;
     } while ((HEAP8[i1 >> 0] | 0) == (HEAP8[i2 >> 0] | 0));
    }
   }
  } else {
   if (i1 >>> 0 >= i6 >>> 0) i1 = (i1 >>> 0) % (i6 >>> 0) | 0;
   if ((i1 | 0) != (i7 | 0)) {
    i3 = 0;
    i9 = 50;
    break L74;
   }
  } while (0);
  i13 = HEAP32[i13 >> 2] | 0;
  if (!i13) {
   i3 = 0;
   i9 = 50;
   break;
  }
 }
 if ((i9 | 0) == 50) return i3 | 0;
 return 0;
}

function __ZN6asmdom5VNode11adjustVNodeEv(i9) {
 i9 = i9 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 + 4 + 4 >> 2] = 0;
 HEAP8[i10 + 11 >> 0] = 3;
 HEAP8[i10 >> 0] = HEAP8[2616] | 0;
 HEAP8[i10 + 1 >> 0] = HEAP8[2617] | 0;
 HEAP8[i10 + 2 >> 0] = HEAP8[2618] | 0;
 HEAP8[i10 + 3 >> 0] = 0;
 if (__ZNKSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_21__hash_const_iteratorIPNS_11__hash_nodeIS8_PvEEEERKT_(i9 + 36 | 0, i10) | 0) {
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i10 + 4 + 4 >> 2] = 0;
  HEAP8[i10 + 11 >> 0] = 3;
  HEAP8[i10 >> 0] = HEAP8[2616] | 0;
  HEAP8[i10 + 1 >> 0] = HEAP8[2617] | 0;
  HEAP8[i10 + 2 >> 0] = HEAP8[2618] | 0;
  HEAP8[i10 + 3 >> 0] = 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i9 + 12 | 0, __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEixEOS6_(i9 + 36 | 0, i10) | 0) | 0;
  if ((HEAP8[i10 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 >> 2] | 0);
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i10 + 4 + 4 >> 2] = 0;
  HEAP8[i10 + 11 >> 0] = 3;
  HEAP8[i10 >> 0] = HEAP8[2616] | 0;
  HEAP8[i10 + 1 >> 0] = HEAP8[2617] | 0;
  HEAP8[i10 + 2 >> 0] = HEAP8[2618] | 0;
  HEAP8[i10 + 3 >> 0] = 0;
  i8 = __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_15__hash_iteratorIPNS_11__hash_nodeIS8_PvEEEERKT_(i9 + 36 | 0, i10) | 0;
  if (i8 | 0) {
   i4 = HEAP32[i9 + 40 >> 2] | 0;
   i1 = HEAP32[i8 + 4 >> 2] | 0;
   i6 = (i4 + -1 & i4 | 0) == 0;
   if (i6) i5 = i4 + -1 & i1; else if (i1 >>> 0 < i4 >>> 0) i5 = i1; else i5 = (i1 >>> 0) % (i4 >>> 0) | 0;
   i3 = (HEAP32[i9 + 36 >> 2] | 0) + (i5 << 2) | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   while (1) {
    i1 = HEAP32[i7 >> 2] | 0;
    if ((i1 | 0) == (i8 | 0)) break; else i7 = i1;
   }
   if ((i7 | 0) == (i9 + 44 | 0)) i2 = 18; else {
    i1 = HEAP32[i7 + 4 >> 2] | 0;
    if (i6) i1 = i1 & i4 + -1; else if (i1 >>> 0 >= i4 >>> 0) i1 = (i1 >>> 0) % (i4 >>> 0) | 0;
    if ((i1 | 0) == (i5 | 0)) i3 = i8; else i2 = 18;
   }
   do if ((i2 | 0) == 18) {
    i1 = HEAP32[i8 >> 2] | 0;
    if (i1 | 0) {
     i1 = HEAP32[i1 + 4 >> 2] | 0;
     if (i6) i1 = i1 & i4 + -1; else if (i1 >>> 0 >= i4 >>> 0) i1 = (i1 >>> 0) % (i4 >>> 0) | 0;
     if ((i1 | 0) == (i5 | 0)) {
      i3 = i8;
      break;
     }
    }
    HEAP32[i3 >> 2] = 0;
    i3 = i8;
   } while (0);
   i1 = HEAP32[i3 >> 2] | 0;
   if (i1) {
    i2 = HEAP32[i1 + 4 >> 2] | 0;
    if (i6) i2 = i2 & i4 + -1; else if (i2 >>> 0 >= i4 >>> 0) i2 = (i2 >>> 0) % (i4 >>> 0) | 0;
    if ((i2 | 0) != (i5 | 0)) {
     HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + (i2 << 2) >> 2] = i7;
     i1 = HEAP32[i8 >> 2] | 0;
    }
   }
   HEAP32[i7 >> 2] = i1;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i9 + 48 >> 2] = (HEAP32[i9 + 48 >> 2] | 0) + -1;
   if ((HEAP8[i8 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 + 20 >> 2] | 0);
   if ((HEAP8[i8 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 + 8 >> 2] | 0);
   __ZdlPv(i8);
  }
 }
 i2 = (HEAP8[i9 + 11 >> 0] | 0) < 0;
 if (i2) i1 = HEAP32[i9 >> 2] | 0; else i1 = i9;
 if ((HEAP8[i1 >> 0] | 0) == 115) {
  if (i2) i1 = HEAP32[i9 >> 2] | 0; else i1 = i9;
  if ((HEAP8[i1 + 1 >> 0] | 0) == 118) {
   if (i2) i1 = HEAP32[i9 >> 2] | 0; else i1 = i9;
   if ((HEAP8[i1 + 2 >> 0] | 0) == 103) __ZN6asmdom5addNSEPNS_5VNodeE(i9);
  }
 }
 i1 = HEAP32[i9 + 100 >> 2] | 0;
 i5 = HEAP32[i9 + 104 >> 2] | 0;
 L69 : do if ((i1 | 0) != (i5 | 0)) {
  do {
   if (!(HEAP32[i1 >> 2] | 0)) break L69;
   i1 = i1 + 4 | 0;
  } while ((i1 | 0) != (i5 | 0));
  STACKTOP = i10;
  return;
 } while (0);
 if ((i1 | 0) == (i5 | 0)) {
  STACKTOP = i10;
  return;
 }
 i2 = i1 + 4 | 0;
 if ((i2 | 0) == (i5 | 0)) i2 = i5; else {
  i4 = i1;
  while (1) {
   i3 = HEAP32[i2 >> 2] | 0;
   if (!i3) i3 = i4; else {
    HEAP32[i4 >> 2] = i3;
    i1 = i4 + 4 | 0;
    i3 = i1;
   }
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i5 | 0)) break; else i4 = i3;
  }
  i2 = HEAP32[i9 + 104 >> 2] | 0;
 }
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i10;
  return;
 }
 HEAP32[i9 + 104 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
 STACKTOP = i10;
 return;
}

function __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_22__unordered_map_hasherIS7_SD_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SD_NS_8equal_toIS7_EELb1EEENS5_ISD_EEE8__rehashEj(i15, i14) {
 i15 = i15 | 0;
 i14 = i14 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if (!i14) {
  i1 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  HEAP32[i15 + 4 >> 2] = 0;
  return;
 }
 if (i14 >>> 0 > 1073741823) {
  i15 = ___cxa_allocate_exception(8) | 0;
  __ZNSt11logic_errorC2EPKc(i15, 4994);
  HEAP32[i15 >> 2] = 2304;
  ___cxa_throw(i15 | 0, 1304, 8);
 }
 i13 = __Znwj(i14 << 2) | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i13;
 if (i1 | 0) __ZdlPv(i1);
 HEAP32[i15 + 4 >> 2] = i14;
 i1 = 0;
 do {
  HEAP32[(HEAP32[i15 >> 2] | 0) + (i1 << 2) >> 2] = 0;
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != (i14 | 0));
 i3 = HEAP32[i15 + 8 >> 2] | 0;
 if (!i3) return;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if (!(i14 + -1 & i14)) i1 = i1 & i14 + -1; else if (i1 >>> 0 >= i14 >>> 0) i1 = (i1 >>> 0) % (i14 >>> 0) | 0;
 HEAP32[(HEAP32[i15 >> 2] | 0) + (i1 << 2) >> 2] = i15 + 8;
 i2 = HEAP32[i3 >> 2] | 0;
 if (!i2) return; else {
  i4 = i3;
  i5 = i2;
  i2 = i3;
 }
 L27 : while (1) {
  i13 = i4;
  i3 = i5;
  i12 = i2;
  L29 : while (1) {
   i2 = i3;
   while (1) {
    i3 = HEAP32[i2 + 4 >> 2] | 0;
    if (!(i14 + -1 & i14)) i3 = i3 & i14 + -1; else if (i3 >>> 0 >= i14 >>> 0) i3 = (i3 >>> 0) % (i14 >>> 0) | 0;
    if ((i3 | 0) == (i1 | 0)) break;
    i4 = (HEAP32[i15 >> 2] | 0) + (i3 << 2) | 0;
    if (!(HEAP32[i4 >> 2] | 0)) break L29;
    i4 = HEAP32[i2 >> 2] | 0;
    L40 : do if (!i4) i4 = i2; else {
     i10 = i2 + 8 | 0;
     i9 = HEAP8[i10 + 11 >> 0] | 0;
     i11 = i9 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i9 & 255;
     if (i9 << 24 >> 24 < 0) {
      if (!i11) {
       i5 = i2;
       while (1) {
        i11 = HEAP8[i4 + 8 + 11 >> 0] | 0;
        if ((i11 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i11 & 255) | 0) {
         i4 = i5;
         break L40;
        }
        i5 = HEAP32[i4 >> 2] | 0;
        if (!i5) break L40; else {
         i11 = i4;
         i4 = i5;
         i5 = i11;
        }
       }
      } else i6 = i2;
      while (1) {
       i7 = i4 + 8 | 0;
       i5 = HEAP8[i7 + 11 >> 0] | 0;
       if ((i11 | 0) != ((i5 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i5 & 255) | 0)) {
        i4 = i6;
        break L40;
       }
       if (_memcmp(HEAP32[i10 >> 2] | 0, i5 << 24 >> 24 < 0 ? HEAP32[i7 >> 2] | 0 : i7, i11) | 0) {
        i4 = i6;
        break L40;
       }
       i5 = HEAP32[i4 >> 2] | 0;
       if (!i5) break L40; else {
        i6 = i4;
        i4 = i5;
       }
      }
     }
     if (!i11) {
      i5 = i2;
      while (1) {
       i11 = HEAP8[i4 + 8 + 11 >> 0] | 0;
       if ((i11 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i11 & 255) | 0) {
        i4 = i5;
        break L40;
       }
       i5 = HEAP32[i4 >> 2] | 0;
       if (!i5) break L40; else {
        i11 = i4;
        i4 = i5;
        i5 = i11;
       }
      }
     }
     i8 = i2;
     while (1) {
      i6 = i4 + 8 | 0;
      i5 = HEAP8[i6 + 11 >> 0] | 0;
      if ((i11 | 0) != ((i5 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i5 & 255) | 0)) {
       i4 = i8;
       break L40;
      }
      i5 = i5 << 24 >> 24 < 0 ? HEAP32[i6 >> 2] | 0 : i6;
      if ((HEAP32[i10 >> 2] & 255) << 24 >> 24 == (HEAP8[i5 >> 0] | 0)) {
       i6 = i9 & 255;
       i7 = i10;
      } else {
       i4 = i8;
       break L40;
      }
      while (1) {
       i6 = i6 + -1 | 0;
       i7 = i7 + 1 | 0;
       if (!i6) break;
       i5 = i5 + 1 | 0;
       if ((HEAP8[i7 >> 0] | 0) != (HEAP8[i5 >> 0] | 0)) {
        i4 = i8;
        break L40;
       }
      }
      i5 = HEAP32[i4 >> 2] | 0;
      if (!i5) break; else {
       i8 = i4;
       i4 = i5;
      }
     }
    } while (0);
    HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i4 >> 2] = HEAP32[HEAP32[(HEAP32[i15 >> 2] | 0) + (i3 << 2) >> 2] >> 2];
    HEAP32[HEAP32[(HEAP32[i15 >> 2] | 0) + (i3 << 2) >> 2] >> 2] = i2;
    i2 = HEAP32[i13 >> 2] | 0;
    if (!i2) {
     i1 = 45;
     break L27;
    }
   }
   i3 = HEAP32[i2 >> 2] | 0;
   if (!i3) {
    i1 = 45;
    break L27;
   } else {
    i13 = i2;
    i12 = i2;
   }
  }
  HEAP32[i4 >> 2] = i12;
  i5 = HEAP32[i2 >> 2] | 0;
  if (!i5) {
   i1 = 45;
   break;
  } else {
   i4 = i2;
   i1 = i3;
  }
 }
 if ((i1 | 0) == 45) return;
}

function __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_22__unordered_map_hasherIS7_SA_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SA_NS_8equal_toIS7_EELb1EEENS5_ISA_EEE8__rehashEj(i15, i14) {
 i15 = i15 | 0;
 i14 = i14 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if (!i14) {
  i1 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  HEAP32[i15 + 4 >> 2] = 0;
  return;
 }
 if (i14 >>> 0 > 1073741823) {
  i15 = ___cxa_allocate_exception(8) | 0;
  __ZNSt11logic_errorC2EPKc(i15, 4994);
  HEAP32[i15 >> 2] = 2304;
  ___cxa_throw(i15 | 0, 1304, 8);
 }
 i13 = __Znwj(i14 << 2) | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i13;
 if (i1 | 0) __ZdlPv(i1);
 HEAP32[i15 + 4 >> 2] = i14;
 i1 = 0;
 do {
  HEAP32[(HEAP32[i15 >> 2] | 0) + (i1 << 2) >> 2] = 0;
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != (i14 | 0));
 i3 = HEAP32[i15 + 8 >> 2] | 0;
 if (!i3) return;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if (!(i14 + -1 & i14)) i1 = i1 & i14 + -1; else if (i1 >>> 0 >= i14 >>> 0) i1 = (i1 >>> 0) % (i14 >>> 0) | 0;
 HEAP32[(HEAP32[i15 >> 2] | 0) + (i1 << 2) >> 2] = i15 + 8;
 i2 = HEAP32[i3 >> 2] | 0;
 if (!i2) return; else {
  i4 = i3;
  i5 = i2;
  i2 = i3;
 }
 L27 : while (1) {
  i13 = i4;
  i3 = i5;
  i12 = i2;
  L29 : while (1) {
   i2 = i3;
   while (1) {
    i3 = HEAP32[i2 + 4 >> 2] | 0;
    if (!(i14 + -1 & i14)) i3 = i3 & i14 + -1; else if (i3 >>> 0 >= i14 >>> 0) i3 = (i3 >>> 0) % (i14 >>> 0) | 0;
    if ((i3 | 0) == (i1 | 0)) break;
    i4 = (HEAP32[i15 >> 2] | 0) + (i3 << 2) | 0;
    if (!(HEAP32[i4 >> 2] | 0)) break L29;
    i4 = HEAP32[i2 >> 2] | 0;
    L40 : do if (!i4) i4 = i2; else {
     i10 = i2 + 8 | 0;
     i9 = HEAP8[i10 + 11 >> 0] | 0;
     i11 = i9 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i9 & 255;
     if (i9 << 24 >> 24 < 0) {
      if (!i11) {
       i5 = i2;
       while (1) {
        i11 = HEAP8[i4 + 8 + 11 >> 0] | 0;
        if ((i11 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i11 & 255) | 0) {
         i4 = i5;
         break L40;
        }
        i5 = HEAP32[i4 >> 2] | 0;
        if (!i5) break L40; else {
         i11 = i4;
         i4 = i5;
         i5 = i11;
        }
       }
      } else i6 = i2;
      while (1) {
       i7 = i4 + 8 | 0;
       i5 = HEAP8[i7 + 11 >> 0] | 0;
       if ((i11 | 0) != ((i5 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i5 & 255) | 0)) {
        i4 = i6;
        break L40;
       }
       if (_memcmp(HEAP32[i10 >> 2] | 0, i5 << 24 >> 24 < 0 ? HEAP32[i7 >> 2] | 0 : i7, i11) | 0) {
        i4 = i6;
        break L40;
       }
       i5 = HEAP32[i4 >> 2] | 0;
       if (!i5) break L40; else {
        i6 = i4;
        i4 = i5;
       }
      }
     }
     if (!i11) {
      i5 = i2;
      while (1) {
       i11 = HEAP8[i4 + 8 + 11 >> 0] | 0;
       if ((i11 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i11 & 255) | 0) {
        i4 = i5;
        break L40;
       }
       i5 = HEAP32[i4 >> 2] | 0;
       if (!i5) break L40; else {
        i11 = i4;
        i4 = i5;
        i5 = i11;
       }
      }
     }
     i8 = i2;
     while (1) {
      i6 = i4 + 8 | 0;
      i5 = HEAP8[i6 + 11 >> 0] | 0;
      if ((i11 | 0) != ((i5 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i5 & 255) | 0)) {
       i4 = i8;
       break L40;
      }
      i5 = i5 << 24 >> 24 < 0 ? HEAP32[i6 >> 2] | 0 : i6;
      if ((HEAP32[i10 >> 2] & 255) << 24 >> 24 == (HEAP8[i5 >> 0] | 0)) {
       i6 = i9 & 255;
       i7 = i10;
      } else {
       i4 = i8;
       break L40;
      }
      while (1) {
       i6 = i6 + -1 | 0;
       i7 = i7 + 1 | 0;
       if (!i6) break;
       i5 = i5 + 1 | 0;
       if ((HEAP8[i7 >> 0] | 0) != (HEAP8[i5 >> 0] | 0)) {
        i4 = i8;
        break L40;
       }
      }
      i5 = HEAP32[i4 >> 2] | 0;
      if (!i5) break; else {
       i8 = i4;
       i4 = i5;
      }
     }
    } while (0);
    HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i4 >> 2] = HEAP32[HEAP32[(HEAP32[i15 >> 2] | 0) + (i3 << 2) >> 2] >> 2];
    HEAP32[HEAP32[(HEAP32[i15 >> 2] | 0) + (i3 << 2) >> 2] >> 2] = i2;
    i2 = HEAP32[i13 >> 2] | 0;
    if (!i2) {
     i1 = 45;
     break L27;
    }
   }
   i3 = HEAP32[i2 >> 2] | 0;
   if (!i3) {
    i1 = 45;
    break L27;
   } else {
    i13 = i2;
    i12 = i2;
   }
  }
  HEAP32[i4 >> 2] = i12;
  i5 = HEAP32[i2 >> 2] | 0;
  if (!i5) {
   i1 = 45;
   break;
  } else {
   i4 = i2;
   i1 = i3;
  }
 }
 if ((i1 | 0) == 45) return;
}

function __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE8__rehashEj(i15, i14) {
 i15 = i15 | 0;
 i14 = i14 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if (!i14) {
  i1 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  if (i1 | 0) __ZdlPv(i1);
  HEAP32[i15 + 4 >> 2] = 0;
  return;
 }
 if (i14 >>> 0 > 1073741823) {
  i15 = ___cxa_allocate_exception(8) | 0;
  __ZNSt11logic_errorC2EPKc(i15, 4994);
  HEAP32[i15 >> 2] = 2304;
  ___cxa_throw(i15 | 0, 1304, 8);
 }
 i13 = __Znwj(i14 << 2) | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i13;
 if (i1 | 0) __ZdlPv(i1);
 HEAP32[i15 + 4 >> 2] = i14;
 i1 = 0;
 do {
  HEAP32[(HEAP32[i15 >> 2] | 0) + (i1 << 2) >> 2] = 0;
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != (i14 | 0));
 i3 = HEAP32[i15 + 8 >> 2] | 0;
 if (!i3) return;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if (!(i14 + -1 & i14)) i1 = i1 & i14 + -1; else if (i1 >>> 0 >= i14 >>> 0) i1 = (i1 >>> 0) % (i14 >>> 0) | 0;
 HEAP32[(HEAP32[i15 >> 2] | 0) + (i1 << 2) >> 2] = i15 + 8;
 i2 = HEAP32[i3 >> 2] | 0;
 if (!i2) return; else {
  i4 = i3;
  i5 = i2;
  i2 = i3;
 }
 L27 : while (1) {
  i13 = i4;
  i3 = i5;
  i12 = i2;
  L29 : while (1) {
   i2 = i3;
   while (1) {
    i3 = HEAP32[i2 + 4 >> 2] | 0;
    if (!(i14 + -1 & i14)) i3 = i3 & i14 + -1; else if (i3 >>> 0 >= i14 >>> 0) i3 = (i3 >>> 0) % (i14 >>> 0) | 0;
    if ((i3 | 0) == (i1 | 0)) break;
    i4 = (HEAP32[i15 >> 2] | 0) + (i3 << 2) | 0;
    if (!(HEAP32[i4 >> 2] | 0)) break L29;
    i4 = HEAP32[i2 >> 2] | 0;
    L40 : do if (!i4) i4 = i2; else {
     i10 = i2 + 8 | 0;
     i9 = HEAP8[i10 + 11 >> 0] | 0;
     i11 = i9 << 24 >> 24 < 0 ? HEAP32[i2 + 12 >> 2] | 0 : i9 & 255;
     if (i9 << 24 >> 24 < 0) {
      if (!i11) {
       i5 = i2;
       while (1) {
        i11 = HEAP8[i4 + 8 + 11 >> 0] | 0;
        if ((i11 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i11 & 255) | 0) {
         i4 = i5;
         break L40;
        }
        i5 = HEAP32[i4 >> 2] | 0;
        if (!i5) break L40; else {
         i11 = i4;
         i4 = i5;
         i5 = i11;
        }
       }
      } else i6 = i2;
      while (1) {
       i7 = i4 + 8 | 0;
       i5 = HEAP8[i7 + 11 >> 0] | 0;
       if ((i11 | 0) != ((i5 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i5 & 255) | 0)) {
        i4 = i6;
        break L40;
       }
       if (_memcmp(HEAP32[i10 >> 2] | 0, i5 << 24 >> 24 < 0 ? HEAP32[i7 >> 2] | 0 : i7, i11) | 0) {
        i4 = i6;
        break L40;
       }
       i5 = HEAP32[i4 >> 2] | 0;
       if (!i5) break L40; else {
        i6 = i4;
        i4 = i5;
       }
      }
     }
     if (!i11) {
      i5 = i2;
      while (1) {
       i11 = HEAP8[i4 + 8 + 11 >> 0] | 0;
       if ((i11 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i11 & 255) | 0) {
        i4 = i5;
        break L40;
       }
       i5 = HEAP32[i4 >> 2] | 0;
       if (!i5) break L40; else {
        i11 = i4;
        i4 = i5;
        i5 = i11;
       }
      }
     }
     i8 = i2;
     while (1) {
      i6 = i4 + 8 | 0;
      i5 = HEAP8[i6 + 11 >> 0] | 0;
      if ((i11 | 0) != ((i5 << 24 >> 24 < 0 ? HEAP32[i4 + 12 >> 2] | 0 : i5 & 255) | 0)) {
       i4 = i8;
       break L40;
      }
      i5 = i5 << 24 >> 24 < 0 ? HEAP32[i6 >> 2] | 0 : i6;
      if ((HEAP32[i10 >> 2] & 255) << 24 >> 24 == (HEAP8[i5 >> 0] | 0)) {
       i6 = i9 & 255;
       i7 = i10;
      } else {
       i4 = i8;
       break L40;
      }
      while (1) {
       i6 = i6 + -1 | 0;
       i7 = i7 + 1 | 0;
       if (!i6) break;
       i5 = i5 + 1 | 0;
       if ((HEAP8[i7 >> 0] | 0) != (HEAP8[i5 >> 0] | 0)) {
        i4 = i8;
        break L40;
       }
      }
      i5 = HEAP32[i4 >> 2] | 0;
      if (!i5) break; else {
       i8 = i4;
       i4 = i5;
      }
     }
    } while (0);
    HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i4 >> 2] = HEAP32[HEAP32[(HEAP32[i15 >> 2] | 0) + (i3 << 2) >> 2] >> 2];
    HEAP32[HEAP32[(HEAP32[i15 >> 2] | 0) + (i3 << 2) >> 2] >> 2] = i2;
    i2 = HEAP32[i13 >> 2] | 0;
    if (!i2) {
     i1 = 45;
     break L27;
    }
   }
   i3 = HEAP32[i2 >> 2] | 0;
   if (!i3) {
    i1 = 45;
    break L27;
   } else {
    i13 = i2;
    i12 = i2;
   }
  }
  HEAP32[i4 >> 2] = i12;
  i5 = HEAP32[i2 >> 2] | 0;
  if (!i5) {
   i1 = 45;
   break;
  } else {
   i4 = i2;
   i1 = i3;
  }
 }
 if ((i1 | 0) == 45) return;
}

function ___udivmoddi4(i3, i5, i11, i12, i13) {
 i3 = i3 | 0;
 i5 = i5 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i14 = 0, i15 = 0;
 if (!i5) if (!i12) {
  if (i13 | 0) {
   HEAP32[i13 >> 2] = (i3 >>> 0) % (i11 >>> 0);
   HEAP32[i13 + 4 >> 2] = 0;
  }
  i12 = 0;
  i13 = (i3 >>> 0) / (i11 >>> 0) >>> 0;
  return (tempRet0 = i12, i13) | 0;
 } else {
  if (!i13) {
   i12 = 0;
   i13 = 0;
   return (tempRet0 = i12, i13) | 0;
  }
  HEAP32[i13 >> 2] = i3 | 0;
  HEAP32[i13 + 4 >> 2] = i5 & 0;
  i12 = 0;
  i13 = 0;
  return (tempRet0 = i12, i13) | 0;
 }
 do if (!i11) {
  if (!i12) {
   if (i13 | 0) {
    HEAP32[i13 >> 2] = (i5 >>> 0) % (i11 >>> 0);
    HEAP32[i13 + 4 >> 2] = 0;
   }
   i12 = 0;
   i13 = (i5 >>> 0) / (i11 >>> 0) >>> 0;
   return (tempRet0 = i12, i13) | 0;
  }
  if (!i3) {
   if (i13 | 0) {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i13 + 4 >> 2] = (i5 >>> 0) % (i12 >>> 0);
   }
   i11 = 0;
   i13 = (i5 >>> 0) / (i12 >>> 0) >>> 0;
   return (tempRet0 = i11, i13) | 0;
  }
  if (!(i12 - 1 & i12)) {
   if (i13 | 0) {
    HEAP32[i13 >> 2] = i3 | 0;
    HEAP32[i13 + 4 >> 2] = i12 - 1 & i5 | i5 & 0;
   }
   i11 = 0;
   i13 = i5 >>> ((_llvm_cttz_i32(i12 | 0) | 0) >>> 0);
   return (tempRet0 = i11, i13) | 0;
  }
  i2 = (Math_clz32(i12 | 0) | 0) - (Math_clz32(i5 | 0) | 0) | 0;
  if (i2 >>> 0 <= 30) {
   i10 = i2 + 1 | 0;
   i4 = i5 << 31 - i2 | i3 >>> ((i2 + 1 | 0) >>> 0);
   i9 = i5 >>> ((i2 + 1 | 0) >>> 0);
   i1 = 0;
   i2 = i3 << 31 - i2;
   break;
  }
  if (!i13) {
   i12 = 0;
   i13 = 0;
   return (tempRet0 = i12, i13) | 0;
  }
  HEAP32[i13 >> 2] = i3 | 0;
  HEAP32[i13 + 4 >> 2] = i5 | i5 & 0;
  i12 = 0;
  i13 = 0;
  return (tempRet0 = i12, i13) | 0;
 } else {
  if (i12 | 0) {
   i2 = (Math_clz32(i12 | 0) | 0) - (Math_clz32(i5 | 0) | 0) | 0;
   if (i2 >>> 0 <= 31) {
    i10 = i2 + 1 | 0;
    i4 = i3 >>> ((i2 + 1 | 0) >>> 0) & i2 - 31 >> 31 | i5 << 31 - i2;
    i9 = i5 >>> ((i2 + 1 | 0) >>> 0) & i2 - 31 >> 31;
    i1 = 0;
    i2 = i3 << 31 - i2;
    break;
   }
   if (!i13) {
    i12 = 0;
    i13 = 0;
    return (tempRet0 = i12, i13) | 0;
   }
   HEAP32[i13 >> 2] = i3 | 0;
   HEAP32[i13 + 4 >> 2] = i5 | i5 & 0;
   i12 = 0;
   i13 = 0;
   return (tempRet0 = i12, i13) | 0;
  }
  if (i11 - 1 & i11 | 0) {
   i2 = (Math_clz32(i11 | 0) | 0) + 33 - (Math_clz32(i5 | 0) | 0) | 0;
   i10 = i2;
   i4 = 32 - i2 - 1 >> 31 & i5 >>> ((i2 - 32 | 0) >>> 0) | (i5 << 32 - i2 | i3 >>> (i2 >>> 0)) & i2 - 32 >> 31;
   i9 = i2 - 32 >> 31 & i5 >>> (i2 >>> 0);
   i1 = i3 << 64 - i2 & 32 - i2 >> 31;
   i2 = (i5 << 64 - i2 | i3 >>> ((i2 - 32 | 0) >>> 0)) & 32 - i2 >> 31 | i3 << 32 - i2 & i2 - 33 >> 31;
   break;
  }
  if (i13 | 0) {
   HEAP32[i13 >> 2] = i11 - 1 & i3;
   HEAP32[i13 + 4 >> 2] = 0;
  }
  if ((i11 | 0) == 1) {
   i12 = i5 | i5 & 0;
   i13 = i3 | 0 | 0;
   return (tempRet0 = i12, i13) | 0;
  } else {
   i13 = _llvm_cttz_i32(i11 | 0) | 0;
   i12 = i5 >>> (i13 >>> 0) | 0;
   i13 = i5 << 32 - i13 | i3 >>> (i13 >>> 0) | 0;
   return (tempRet0 = i12, i13) | 0;
  }
 } while (0);
 if (!i10) {
  i6 = i2;
  i5 = i9;
  i3 = 0;
  i2 = 0;
 } else {
  i7 = _i64Add(i11 | 0 | 0, i12 | i12 & 0 | 0, -1, -1) | 0;
  i8 = tempRet0;
  i6 = i2;
  i5 = i9;
  i3 = i10;
  i2 = 0;
  do {
   i15 = i6;
   i6 = i1 >>> 31 | i6 << 1;
   i1 = i2 | i1 << 1;
   i15 = i4 << 1 | i15 >>> 31 | 0;
   i14 = i4 >>> 31 | i5 << 1 | 0;
   _i64Subtract(i7 | 0, i8 | 0, i15 | 0, i14 | 0) | 0;
   i10 = tempRet0;
   i9 = i10 >> 31 | ((i10 | 0) < 0 ? -1 : 0) << 1;
   i2 = i9 & 1;
   i4 = _i64Subtract(i15 | 0, i14 | 0, i9 & (i11 | 0) | 0, (((i10 | 0) < 0 ? -1 : 0) >> 31 | ((i10 | 0) < 0 ? -1 : 0) << 1) & (i12 | i12 & 0) | 0) | 0;
   i5 = tempRet0;
   i3 = i3 - 1 | 0;
  } while ((i3 | 0) != 0);
  i3 = 0;
 }
 if (i13 | 0) {
  HEAP32[i13 >> 2] = i4;
  HEAP32[i13 + 4 >> 2] = i5;
 }
 i14 = (i1 | 0) >>> 31 | i6 << 1 | (0 << 1 | i1 >>> 31) & 0 | i3;
 i15 = (i1 << 1 | 0 >>> 31) & -2 | i2;
 return (tempRet0 = i14, i15) | 0;
}

function __ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib(i5, i8, i7, i3, i6) {
 i5 = i5 | 0;
 i8 = i8 | 0;
 i7 = i7 | 0;
 i3 = i3 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i4 = 0;
 L1 : do if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i5, HEAP32[i8 + 8 >> 2] | 0) | 0) __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(i8, i7, i3); else {
  if (!(__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i5, HEAP32[i8 >> 2] | 0) | 0)) {
   i2 = HEAP32[i5 + 12 >> 2] | 0;
   __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib(i5 + 16 | 0, i8, i7, i3, i6);
   if ((i2 | 0) <= 1) break;
   i1 = HEAP32[i5 + 8 >> 2] | 0;
   if (!(i1 & 2)) if ((HEAP32[i8 + 36 >> 2] | 0) == 1) i1 = i5 + 24 | 0; else {
    if (!(i1 & 1)) {
     i1 = i5 + 24 | 0;
     while (1) {
      if (HEAP8[i8 + 54 >> 0] | 0) break L1;
      if ((HEAP32[i8 + 36 >> 2] | 0) == 1) break L1;
      __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib(i1, i8, i7, i3, i6);
      i1 = i1 + 8 | 0;
      if (i1 >>> 0 >= (i5 + 16 + (i2 << 3) | 0) >>> 0) break L1;
     }
    } else i1 = i5 + 24 | 0;
    while (1) {
     if (HEAP8[i8 + 54 >> 0] | 0) break L1;
     if ((HEAP32[i8 + 36 >> 2] | 0) == 1) if ((HEAP32[i8 + 24 >> 2] | 0) == 1) break L1;
     __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib(i1, i8, i7, i3, i6);
     i1 = i1 + 8 | 0;
     if (i1 >>> 0 >= (i5 + 16 + (i2 << 3) | 0) >>> 0) break L1;
    }
   } else i1 = i5 + 24 | 0;
   while (1) {
    if (HEAP8[i8 + 54 >> 0] | 0) break L1;
    __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib(i1, i8, i7, i3, i6);
    i1 = i1 + 8 | 0;
    if (i1 >>> 0 >= (i5 + 16 + (i2 << 3) | 0) >>> 0) break L1;
   }
  }
  if ((HEAP32[i8 + 16 >> 2] | 0) != (i7 | 0)) if ((HEAP32[i8 + 20 >> 2] | 0) != (i7 | 0)) {
   HEAP32[i8 + 32 >> 2] = i3;
   if ((HEAP32[i8 + 44 >> 2] | 0) == 4) break;
   i3 = HEAP32[i5 + 12 >> 2] | 0;
   L29 : do if ((i3 | 0) > 0) {
    i2 = 0;
    i1 = 0;
    i4 = i5 + 16 | 0;
    L30 : do {
     HEAP8[i8 + 52 >> 0] = 0;
     HEAP8[i8 + 53 >> 0] = 0;
     __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib(i4, i8, i7, i7, 1, i6);
     if (HEAP8[i8 + 54 >> 0] | 0) break;
     do if (HEAP8[i8 + 53 >> 0] | 0) {
      if (!(HEAP8[i8 + 52 >> 0] | 0)) if (!(HEAP32[i5 + 8 >> 2] & 1)) {
       i1 = 1;
       break L30;
      } else {
       i1 = 1;
       break;
      }
      if ((HEAP32[i8 + 24 >> 2] | 0) == 1) {
       i2 = 22;
       break L29;
      }
      if (!(HEAP32[i5 + 8 >> 2] & 2)) {
       i2 = 22;
       break L29;
      } else {
       i2 = 1;
       i1 = 1;
      }
     } while (0);
     i4 = i4 + 8 | 0;
    } while (i4 >>> 0 < (i5 + 16 + (i3 << 3) | 0) >>> 0);
    if (i2) i2 = 21; else i2 = 18;
   } else {
    i1 = 0;
    i2 = 18;
   } while (0);
   if ((i2 | 0) == 18) {
    HEAP32[i8 + 20 >> 2] = i7;
    HEAP32[i8 + 40 >> 2] = (HEAP32[i8 + 40 >> 2] | 0) + 1;
    if ((HEAP32[i8 + 36 >> 2] | 0) == 1) if ((HEAP32[i8 + 24 >> 2] | 0) == 2) {
     HEAP8[i8 + 54 >> 0] = 1;
     if (i1) i2 = 22; else i1 = 4;
    } else i2 = 21; else i2 = 21;
   }
   if ((i2 | 0) == 21) if (i1) i2 = 22; else i1 = 4;
   if ((i2 | 0) == 22) i1 = 3;
   HEAP32[i8 + 44 >> 2] = i1;
   break;
  }
  if ((i3 | 0) == 1) HEAP32[i8 + 32 >> 2] = 1;
 } while (0);
 return;
}

function _pop_arg(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, d6 = 0.0;
 L1 : do if (i3 >>> 0 <= 20) do switch (i3 | 0) {
 case 9:
  {
   i4 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i3 = HEAP32[i4 >> 2] | 0;
   HEAP32[i1 >> 2] = i4 + 4;
   HEAP32[i2 >> 2] = i3;
   break L1;
  }
 case 10:
  {
   i3 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i1 >> 2] = i3 + 4;
   HEAP32[i2 >> 2] = i4;
   HEAP32[i2 + 4 >> 2] = ((i4 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 11:
  {
   i3 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i1 >> 2] = i3 + 4;
   HEAP32[i2 >> 2] = i4;
   HEAP32[i2 + 4 >> 2] = 0;
   break L1;
  }
 case 12:
  {
   i5 = (HEAP32[i1 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   i3 = HEAP32[i5 >> 2] | 0;
   i4 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = i5 + 8;
   HEAP32[i2 >> 2] = i3;
   HEAP32[i2 + 4 >> 2] = i4;
   break L1;
  }
 case 13:
  {
   i4 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i1 >> 2] = i4 + 4;
   HEAP32[i2 >> 2] = (i5 & 65535) << 16 >> 16;
   HEAP32[i2 + 4 >> 2] = (((i5 & 65535) << 16 >> 16 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 14:
  {
   i4 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i1 >> 2] = i4 + 4;
   HEAP32[i2 >> 2] = i5 & 65535;
   HEAP32[i2 + 4 >> 2] = 0;
   break L1;
  }
 case 15:
  {
   i4 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i1 >> 2] = i4 + 4;
   HEAP32[i2 >> 2] = (i5 & 255) << 24 >> 24;
   HEAP32[i2 + 4 >> 2] = (((i5 & 255) << 24 >> 24 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 16:
  {
   i4 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i1 >> 2] = i4 + 4;
   HEAP32[i2 >> 2] = i5 & 255;
   HEAP32[i2 + 4 >> 2] = 0;
   break L1;
  }
 case 17:
  {
   i5 = (HEAP32[i1 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   d6 = +HEAPF64[i5 >> 3];
   HEAP32[i1 >> 2] = i5 + 8;
   HEAPF64[i2 >> 3] = d6;
   break L1;
  }
 case 18:
  {
   i5 = (HEAP32[i1 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   d6 = +HEAPF64[i5 >> 3];
   HEAP32[i1 >> 2] = i5 + 8;
   HEAPF64[i2 >> 3] = d6;
   break L1;
  }
 default:
  break L1;
 } while (0); while (0);
 return;
}

function __ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i2, i7) {
 i2 = i2 | 0;
 i7 = i7 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP8[i2 + 12 + 11 >> 0] | 0;
 i5 = i3 << 24 >> 24 < 0 ? HEAP32[i2 + 16 >> 2] | 0 : i3 & 255;
 i1 = HEAP8[i7 + 12 + 11 >> 0] | 0;
 if ((i5 | 0) != ((i1 << 24 >> 24 < 0 ? HEAP32[i7 + 16 >> 2] | 0 : i1 & 255) | 0)) {
  i7 = 0;
  return i7 | 0;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 i6 = i3 << 24 >> 24 < 0 ? i4 : i2 + 12 | 0;
 i1 = i1 << 24 >> 24 < 0 ? HEAP32[i7 + 12 >> 2] | 0 : i7 + 12 | 0;
 L4 : do if (i3 << 24 >> 24 < 0) {
  if (i5 | 0) if (_memcmp(i6, i1, i5) | 0) {
   i7 = 0;
   return i7 | 0;
  }
 } else if (i5 | 0) {
  if ((i4 & 255) << 24 >> 24 == (HEAP8[i1 >> 0] | 0)) {
   i3 = i3 & 255;
   i4 = i2 + 12 | 0;
  } else {
   i7 = 0;
   return i7 | 0;
  }
  while (1) {
   i3 = i3 + -1 | 0;
   i4 = i4 + 1 | 0;
   if (!i3) break L4;
   i1 = i1 + 1 | 0;
   if ((HEAP8[i4 >> 0] | 0) != (HEAP8[i1 >> 0] | 0)) {
    i1 = 0;
    break;
   }
  }
  return i1 | 0;
 } while (0);
 i3 = HEAP8[i2 + 11 >> 0] | 0;
 i6 = i3 << 24 >> 24 < 0 ? HEAP32[i2 + 4 >> 2] | 0 : i3 & 255;
 i1 = HEAP8[i7 + 11 >> 0] | 0;
 if ((i6 | 0) != ((i1 << 24 >> 24 < 0 ? HEAP32[i7 + 4 >> 2] | 0 : i1 & 255) | 0)) {
  i7 = 0;
  return i7 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i3 << 24 >> 24 < 0 ? i4 : i2;
 i1 = i1 << 24 >> 24 < 0 ? HEAP32[i7 >> 2] | 0 : i7;
 if (i3 << 24 >> 24 < 0) {
  if (!i6) {
   i7 = 1;
   return i7 | 0;
  }
  i7 = (_memcmp(i5, i1, i6) | 0) == 0;
  return i7 | 0;
 }
 if (!i6) {
  i7 = 1;
  return i7 | 0;
 }
 if ((i4 & 255) << 24 >> 24 == (HEAP8[i1 >> 0] | 0)) i3 = i3 & 255; else {
  i7 = 0;
  return i7 | 0;
 }
 while (1) {
  i3 = i3 + -1 | 0;
  i2 = i2 + 1 | 0;
  if (!i3) {
   i1 = 1;
   i2 = 17;
   break;
  }
  i1 = i1 + 1 | 0;
  if ((HEAP8[i2 >> 0] | 0) != (HEAP8[i1 >> 0] | 0)) {
   i1 = 0;
   i2 = 17;
   break;
  }
 }
 if ((i2 | 0) == 17) return i1 | 0;
 return 0;
}

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i3, i9, i1) {
 i3 = i3 | 0;
 i9 = i9 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 if (!i2) {
  HEAP32[i9 >> 2] = i3 + 4;
  i10 = i3 + 4 | 0;
  return i10 | 0;
 }
 i8 = HEAP8[i1 + 11 >> 0] | 0;
 i10 = i8 << 24 >> 24 < 0 ? HEAP32[i1 + 4 >> 2] | 0 : i8 & 255;
 i8 = i8 << 24 >> 24 < 0 ? HEAP32[i1 >> 2] | 0 : i1;
 i3 = i3 + 4 | 0;
 while (1) {
  i5 = i2 + 16 | 0;
  i4 = HEAP8[i5 + 11 >> 0] | 0;
  i6 = i4 << 24 >> 24 < 0 ? HEAP32[i2 + 20 >> 2] | 0 : i4 & 255;
  i1 = i6 >>> 0 < i10 >>> 0 ? i6 : i10;
  if (!i1) i7 = 6; else {
   i1 = _memcmp(i8, i4 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i5, i1) | 0;
   if (!i1) i7 = 6; else if ((i1 | 0) < 0) i7 = 8; else i7 = 10;
  }
  if ((i7 | 0) == 6) if (i10 >>> 0 < i6 >>> 0) i7 = 8; else i7 = 10;
  if ((i7 | 0) == 8) {
   i1 = HEAP32[i2 >> 2] | 0;
   if (!i1) {
    i7 = 9;
    break;
   } else i3 = i2;
  } else if ((i7 | 0) == 10) {
   i7 = 0;
   i1 = i10 >>> 0 < i6 >>> 0 ? i10 : i6;
   if (!i1) i7 = 12; else {
    i1 = _memcmp(i4 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i5, i8, i1) | 0;
    if (!i1) i7 = 12; else if ((i1 | 0) >= 0) {
     i7 = 16;
     break;
    }
   }
   if ((i7 | 0) == 12) if (i6 >>> 0 >= i10 >>> 0) {
    i7 = 16;
    break;
   }
   i3 = i2 + 4 | 0;
   i1 = HEAP32[i3 >> 2] | 0;
   if (!i1) {
    i7 = 15;
    break;
   }
  }
  i2 = i1;
 }
 if ((i7 | 0) == 9) {
  HEAP32[i9 >> 2] = i2;
  i10 = i2;
  return i10 | 0;
 } else if ((i7 | 0) == 15) {
  HEAP32[i9 >> 2] = i2;
  i10 = i3;
  return i10 | 0;
 } else if ((i7 | 0) == 16) {
  HEAP32[i9 >> 2] = i2;
  i10 = i3;
  return i10 | 0;
 }
 return 0;
}

function _memcpy(i3, i6, i1) {
 i3 = i3 | 0;
 i6 = i6 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) >= 8192) return _emscripten_memcpy_big(i3 | 0, i6 | 0, i1 | 0) | 0;
 i5 = i3 | 0;
 i4 = i3 + i1 | 0;
 if ((i3 & 3) == (i6 & 3)) {
  while (i3 & 3) {
   if (!i1) return i5 | 0;
   HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
   i3 = i3 + 1 | 0;
   i6 = i6 + 1 | 0;
   i1 = i1 - 1 | 0;
  }
  i1 = i4 & -4 | 0;
  i2 = i1 - 64 | 0;
  while ((i3 | 0) <= (i2 | 0)) {
   HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i3 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i3 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i3 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i3 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i3 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i3 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i3 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i3 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i3 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i3 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   HEAP32[i3 + 48 >> 2] = HEAP32[i6 + 48 >> 2];
   HEAP32[i3 + 52 >> 2] = HEAP32[i6 + 52 >> 2];
   HEAP32[i3 + 56 >> 2] = HEAP32[i6 + 56 >> 2];
   HEAP32[i3 + 60 >> 2] = HEAP32[i6 + 60 >> 2];
   i3 = i3 + 64 | 0;
   i6 = i6 + 64 | 0;
  }
  while ((i3 | 0) < (i1 | 0)) {
   HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
   i3 = i3 + 4 | 0;
   i6 = i6 + 4 | 0;
  }
 } else {
  i1 = i4 - 4 | 0;
  while ((i3 | 0) < (i1 | 0)) {
   HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
   HEAP8[i3 + 1 >> 0] = HEAP8[i6 + 1 >> 0] | 0;
   HEAP8[i3 + 2 >> 0] = HEAP8[i6 + 2 >> 0] | 0;
   HEAP8[i3 + 3 >> 0] = HEAP8[i6 + 3 >> 0] | 0;
   i3 = i3 + 4 | 0;
   i6 = i6 + 4 | 0;
  }
 }
 while ((i3 | 0) < (i4 | 0)) {
  HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
  i3 = i3 + 1 | 0;
  i6 = i6 + 1 | 0;
 }
 return i5 | 0;
}

function __GLOBAL__sub_I_bind_cpp() {
 __embind_register_void(1384, 9444);
 __embind_register_bool(1392, 9449, 1, 1, 0);
 __embind_register_integer(1400, 9389, 1, -128, 127);
 __embind_register_integer(1416, 9394, 1, -128, 127);
 __embind_register_integer(1408, 9406, 1, 0, 255);
 __embind_register_integer(1424, 9420, 2, -32768, 32767);
 __embind_register_integer(1432, 9426, 2, 0, 65535);
 __embind_register_integer(1440, 9454, 4, -2147483648, 2147483647);
 __embind_register_integer(1448, 9458, 4, 0, -1);
 __embind_register_integer(1456, 9471, 4, -2147483648, 2147483647);
 __embind_register_integer(1464, 9476, 4, 0, -1);
 __embind_register_float(1472, 9490, 4);
 __embind_register_float(1480, 9496, 8);
 __embind_register_std_string(1048, 9371);
 __embind_register_std_string(1080, 5062);
 __embind_register_std_wstring(1104, 4, 5095);
 __embind_register_emval(1040, 5108);
 __embind_register_memory_view(1128, 0, 5124);
 __embind_register_memory_view(1136, 0, 5154);
 __embind_register_memory_view(1144, 1, 5191);
 __embind_register_memory_view(1152, 2, 5230);
 __embind_register_memory_view(1160, 3, 5261);
 __embind_register_memory_view(1168, 4, 5301);
 __embind_register_memory_view(1176, 5, 5330);
 __embind_register_memory_view(1184, 4, 5368);
 __embind_register_memory_view(1192, 5, 5398);
 __embind_register_memory_view(1136, 0, 5437);
 __embind_register_memory_view(1144, 1, 5469);
 __embind_register_memory_view(1152, 2, 5502);
 __embind_register_memory_view(1160, 3, 5535);
 __embind_register_memory_view(1168, 4, 5569);
 __embind_register_memory_view(1176, 5, 5602);
 __embind_register_memory_view(1200, 6, 5636);
 __embind_register_memory_view(1208, 7, 5667);
 __embind_register_memory_view(1216, 7, 5699);
 return;
}

function ___stdio_write(i6, i2, i1) {
 i6 = i6 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = HEAP32[i6 + 28 >> 2] | 0;
 HEAP32[i8 + 32 >> 2] = i5;
 i5 = (HEAP32[i6 + 20 >> 2] | 0) - i5 | 0;
 HEAP32[i8 + 32 + 4 >> 2] = i5;
 HEAP32[i8 + 32 + 8 >> 2] = i2;
 HEAP32[i8 + 32 + 12 >> 2] = i1;
 HEAP32[i8 >> 2] = HEAP32[i6 + 60 >> 2];
 HEAP32[i8 + 4 >> 2] = i8 + 32;
 HEAP32[i8 + 8 >> 2] = 2;
 i2 = ___syscall_ret(___syscall146(146, i8 | 0) | 0) | 0;
 L1 : do if ((i5 + i1 | 0) == (i2 | 0)) i7 = 3; else {
  i3 = i8 + 32 | 0;
  i4 = 2;
  i5 = i5 + i1 | 0;
  while (1) {
   if ((i2 | 0) < 0) break;
   i5 = i5 - i2 | 0;
   i9 = HEAP32[i3 + 4 >> 2] | 0;
   i10 = i2 >>> 0 > i9 >>> 0;
   i3 = i10 ? i3 + 8 | 0 : i3;
   i4 = (i10 << 31 >> 31) + i4 | 0;
   i9 = i2 - (i10 ? i9 : 0) | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i9;
   HEAP32[i3 + 4 >> 2] = (HEAP32[i3 + 4 >> 2] | 0) - i9;
   HEAP32[i8 + 16 >> 2] = HEAP32[i6 + 60 >> 2];
   HEAP32[i8 + 16 + 4 >> 2] = i3;
   HEAP32[i8 + 16 + 8 >> 2] = i4;
   i2 = ___syscall_ret(___syscall146(146, i8 + 16 | 0) | 0) | 0;
   if ((i5 | 0) == (i2 | 0)) {
    i7 = 3;
    break L1;
   }
  }
  HEAP32[i6 + 16 >> 2] = 0;
  HEAP32[i6 + 28 >> 2] = 0;
  HEAP32[i6 + 20 >> 2] = 0;
  HEAP32[i6 >> 2] = HEAP32[i6 >> 2] | 32;
  if ((i4 | 0) == 2) i1 = 0; else i1 = i1 - (HEAP32[i3 + 4 >> 2] | 0) | 0;
 } while (0);
 if ((i7 | 0) == 3) {
  i10 = HEAP32[i6 + 44 >> 2] | 0;
  HEAP32[i6 + 16 >> 2] = i10 + (HEAP32[i6 + 48 >> 2] | 0);
  HEAP32[i6 + 28 >> 2] = i10;
  HEAP32[i6 + 20 >> 2] = i10;
 }
 STACKTOP = i8;
 return i1 | 0;
}

function __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_22__unordered_map_hasherIS7_SD_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SD_NS_8equal_toIS7_EELb1EEENS5_ISD_EEE6rehashEj(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, f5 = f0;
 if ((i1 | 0) == 1) i1 = 2; else if (i1 + -1 & i1) i1 = __ZNSt3__212__next_primeEj(i1) | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 if (i1 >>> 0 > i3 >>> 0) {
  __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_22__unordered_map_hasherIS7_SD_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SD_NS_8equal_toIS7_EELb1EEENS5_ISD_EEE8__rehashEj(i4, i1);
  return;
 }
 if (i1 >>> 0 >= i3 >>> 0) return;
 f5 = Math_fround((HEAP32[i4 + 12 >> 2] | 0) >>> 0);
 i2 = ~~Math_fround(Math_ceil(Math_fround(f5 / Math_fround(HEAPF32[i4 + 16 >> 2])))) >>> 0;
 if (i3 >>> 0 > 2 & (i3 + -1 & i3 | 0) == 0) i2 = 1 << 32 - (Math_clz32(i2 + -1 | 0) | 0); else i2 = __ZNSt3__212__next_primeEj(i2) | 0;
 i1 = i1 >>> 0 < i2 >>> 0 ? i2 : i1;
 if (i1 >>> 0 >= i3 >>> 0) return;
 __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_22__unordered_map_hasherIS7_SD_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SD_NS_8equal_toIS7_EELb1EEENS5_ISD_EEE8__rehashEj(i4, i1);
 return;
}

function ___mo_lookup(i11, i12, i8) {
 i11 = i11 | 0;
 i12 = i12 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0;
 i10 = (HEAP32[i11 >> 2] | 0) + 1794895138 | 0;
 i1 = _swapc(HEAP32[i11 + 8 >> 2] | 0, i10) | 0;
 i7 = _swapc(HEAP32[i11 + 12 >> 2] | 0, i10) | 0;
 i9 = _swapc(HEAP32[i11 + 16 >> 2] | 0, i10) | 0;
 L1 : do if (i1 >>> 0 < i12 >>> 2 >>> 0) if (i7 >>> 0 < (i12 - (i1 << 2) | 0) >>> 0 & i9 >>> 0 < (i12 - (i1 << 2) | 0) >>> 0) if (!((i9 | i7) & 3)) {
  i6 = 0;
  while (1) {
   i4 = i1 >>> 1;
   i5 = i6 + i4 | 0;
   i2 = _swapc(HEAP32[i11 + ((i5 << 1) + (i7 >>> 2) << 2) >> 2] | 0, i10) | 0;
   i3 = _swapc(HEAP32[i11 + ((i5 << 1) + (i7 >>> 2) + 1 << 2) >> 2] | 0, i10) | 0;
   if (!(i3 >>> 0 < i12 >>> 0 & i2 >>> 0 < (i12 - i3 | 0) >>> 0)) {
    i1 = 0;
    break L1;
   }
   if (HEAP8[i11 + (i3 + i2) >> 0] | 0) {
    i1 = 0;
    break L1;
   }
   i2 = _strcmp(i8, i11 + i3 | 0) | 0;
   if (!i2) break;
   if ((i1 | 0) == 1) {
    i1 = 0;
    break L1;
   } else {
    i6 = (i2 | 0) < 0 ? i6 : i5;
    i1 = (i2 | 0) < 0 ? i4 : i1 - i4 | 0;
   }
  }
  i2 = _swapc(HEAP32[i11 + ((i5 << 1) + (i9 >>> 2) << 2) >> 2] | 0, i10) | 0;
  i1 = _swapc(HEAP32[i11 + ((i5 << 1) + (i9 >>> 2) + 1 << 2) >> 2] | 0, i10) | 0;
  if (i1 >>> 0 < i12 >>> 0 & i2 >>> 0 < (i12 - i1 | 0) >>> 0) i1 = (HEAP8[i11 + (i1 + i2) >> 0] | 0) == 0 ? i11 + i1 | 0 : 0; else i1 = 0;
 } else i1 = 0; else i1 = 0; else i1 = 0; while (0);
 return i1 | 0;
}

function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib(i2, i5, i4, i1, i3) {
 i2 = i2 | 0;
 i5 = i5 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i6 = 0;
 do if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i2, HEAP32[i5 + 8 >> 2] | 0) | 0) __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(i5, i4, i1); else {
  if (!(__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i2, HEAP32[i5 >> 2] | 0) | 0)) {
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 3](i6, i5, i4, i1, i3);
   break;
  }
  if ((HEAP32[i5 + 16 >> 2] | 0) != (i4 | 0)) if ((HEAP32[i5 + 20 >> 2] | 0) != (i4 | 0)) {
   HEAP32[i5 + 32 >> 2] = i1;
   if ((HEAP32[i5 + 44 >> 2] | 0) == 4) break;
   HEAP8[i5 + 52 >> 0] = 0;
   HEAP8[i5 + 53 >> 0] = 0;
   i2 = HEAP32[i2 + 8 >> 2] | 0;
   FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 3](i2, i5, i4, i4, 1, i3);
   if (!(HEAP8[i5 + 53 >> 0] | 0)) {
    i1 = 4;
    i6 = 11;
   } else if (!(HEAP8[i5 + 52 >> 0] | 0)) {
    i1 = 3;
    i6 = 11;
   } else i1 = 3;
   if ((i6 | 0) == 11) {
    HEAP32[i5 + 20 >> 2] = i4;
    HEAP32[i5 + 40 >> 2] = (HEAP32[i5 + 40 >> 2] | 0) + 1;
    if ((HEAP32[i5 + 36 >> 2] | 0) == 1) if ((HEAP32[i5 + 24 >> 2] | 0) == 2) HEAP8[i5 + 54 >> 0] = 1;
   }
   HEAP32[i5 + 44 >> 2] = i1;
   break;
  }
  if ((i1 | 0) == 1) HEAP32[i5 + 32 >> 2] = 1;
 } while (0);
 return;
}

function __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_22__unordered_map_hasherIS7_SA_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SA_NS_8equal_toIS7_EELb1EEENS5_ISA_EEE6rehashEj(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, f5 = f0;
 if ((i1 | 0) == 1) i1 = 2; else if (i1 + -1 & i1) i1 = __ZNSt3__212__next_primeEj(i1) | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 if (i1 >>> 0 > i3 >>> 0) {
  __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_22__unordered_map_hasherIS7_SA_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SA_NS_8equal_toIS7_EELb1EEENS5_ISA_EEE8__rehashEj(i4, i1);
  return;
 }
 if (i1 >>> 0 >= i3 >>> 0) return;
 f5 = Math_fround((HEAP32[i4 + 12 >> 2] | 0) >>> 0);
 i2 = ~~Math_fround(Math_ceil(Math_fround(f5 / Math_fround(HEAPF32[i4 + 16 >> 2])))) >>> 0;
 if (i3 >>> 0 > 2 & (i3 + -1 & i3 | 0) == 0) i2 = 1 << 32 - (Math_clz32(i2 + -1 | 0) | 0); else i2 = __ZNSt3__212__next_primeEj(i2) | 0;
 i1 = i1 >>> 0 < i2 >>> 0 ? i2 : i1;
 if (i1 >>> 0 >= i3 >>> 0) return;
 __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_22__unordered_map_hasherIS7_SA_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SA_NS_8equal_toIS7_EELb1EEENS5_ISA_EEE8__rehashEj(i4, i1);
 return;
}

function __ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib(i9, i6, i5, i4, i8, i10) {
 i9 = i9 | 0;
 i6 = i6 | 0;
 i5 = i5 | 0;
 i4 = i4 | 0;
 i8 = i8 | 0;
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i7 = 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i9, HEAP32[i6 + 8 >> 2] | 0) | 0) __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(i6, i5, i4, i8); else {
  i1 = HEAP8[i6 + 52 >> 0] | 0;
  i2 = HEAP8[i6 + 53 >> 0] | 0;
  i3 = HEAP32[i9 + 12 >> 2] | 0;
  HEAP8[i6 + 52 >> 0] = 0;
  HEAP8[i6 + 53 >> 0] = 0;
  __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib(i9 + 16 | 0, i6, i5, i4, i8, i10);
  L4 : do if ((i3 | 0) > 1) {
   i7 = i9 + 24 | 0;
   do {
    if (HEAP8[i6 + 54 >> 0] | 0) break L4;
    if (!(HEAP8[i6 + 52 >> 0] | 0)) {
     if (HEAP8[i6 + 53 >> 0] | 0) if (!(HEAP32[i9 + 8 >> 2] & 1)) break L4;
    } else {
     if ((HEAP32[i6 + 24 >> 2] | 0) == 1) break L4;
     if (!(HEAP32[i9 + 8 >> 2] & 2)) break L4;
    }
    HEAP8[i6 + 52 >> 0] = 0;
    HEAP8[i6 + 53 >> 0] = 0;
    __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib(i7, i6, i5, i4, i8, i10);
    i7 = i7 + 8 | 0;
   } while (i7 >>> 0 < (i9 + 16 + (i3 << 3) | 0) >>> 0);
  } while (0);
  HEAP8[i6 + 52 >> 0] = i1;
  HEAP8[i6 + 53 >> 0] = i2;
 }
 return;
}

function ___dynamic_cast(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i2 + (HEAP32[i4 + -8 >> 2] | 0) | 0;
 i4 = HEAP32[i4 + -4 >> 2] | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i6 + 4 >> 2] = i2;
 HEAP32[i6 + 8 >> 2] = 1248;
 i1 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i4, i1) | 0;
 i2 = i6 + 12 | 0;
 i3 = i2 + 40 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP16[i6 + 12 + 40 >> 1] = 0;
 HEAP8[i6 + 12 + 42 >> 0] = 0;
 L1 : do if (i1) {
  HEAP32[i6 + 48 >> 2] = 1;
  FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 3](i4, i6, i5, i5, 1, 0);
  i1 = (HEAP32[i6 + 24 >> 2] | 0) == 1 ? i5 : 0;
 } else {
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 3](i4, i6, i5, 1, 0);
  switch (HEAP32[i6 + 36 >> 2] | 0) {
  case 0:
   {
    i1 = ((HEAP32[i6 + 40 >> 2] | 0) == 1 ? (HEAP32[i6 + 28 >> 2] | 0) == 1 : 0) & (HEAP32[i6 + 32 >> 2] | 0) == 1 ? HEAP32[i6 + 20 >> 2] | 0 : 0;
    break L1;
   }
  case 1:
   break;
  default:
   {
    i1 = 0;
    break L1;
   }
  }
  if ((HEAP32[i6 + 24 >> 2] | 0) != 1) if (!(((HEAP32[i6 + 40 >> 2] | 0) == 0 ? (HEAP32[i6 + 28 >> 2] | 0) == 1 : 0) & (HEAP32[i6 + 32 >> 2] | 0) == 1)) {
   i1 = 0;
   break;
  }
  i1 = HEAP32[i6 + 16 >> 2] | 0;
 } while (0);
 STACKTOP = i6;
 return i1 | 0;
}

function __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE6rehashEj(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, f5 = f0;
 if ((i1 | 0) == 1) i1 = 2; else if (i1 + -1 & i1) i1 = __ZNSt3__212__next_primeEj(i1) | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 if (i1 >>> 0 > i3 >>> 0) {
  __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE8__rehashEj(i4, i1);
  return;
 }
 if (i1 >>> 0 >= i3 >>> 0) return;
 f5 = Math_fround((HEAP32[i4 + 12 >> 2] | 0) >>> 0);
 i2 = ~~Math_fround(Math_ceil(Math_fround(f5 / Math_fround(HEAPF32[i4 + 16 >> 2])))) >>> 0;
 if (i3 >>> 0 > 2 & (i3 + -1 & i3 | 0) == 0) i2 = 1 << 32 - (Math_clz32(i2 + -1 | 0) | 0); else i2 = __ZNSt3__212__next_primeEj(i2) | 0;
 i1 = i1 >>> 0 < i2 >>> 0 ? i2 : i1;
 if (i1 >>> 0 >= i3 >>> 0) return;
 __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE8__rehashEj(i4, i1);
 return;
}

function __ZN10emscripten8internal7InvokerINS_3valEJRKjRKNSt3__212basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEES2_EE6invokeEPFS2_S4_SD_S2_EjPNS0_11BindingTypeISB_EUt_EPNS0_7_EM_VALE(i5, i1, i3, i4) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i2 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 HEAP32[i7 + 16 >> 2] = i1;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 4 + 4 >> 2] = 0;
 HEAP32[i7 + 4 + 8 >> 2] = 0;
 if (i2 >>> 0 > 4294967279) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if (i2 >>> 0 < 11) {
  HEAP8[i7 + 4 + 11 >> 0] = i2;
  if (!i2) i1 = i7 + 4 | 0; else {
   i1 = i7 + 4 | 0;
   i6 = 6;
  }
 } else {
  i1 = __Znwj(i2 + 16 & -16) | 0;
  HEAP32[i7 + 4 >> 2] = i1;
  HEAP32[i7 + 4 + 8 >> 2] = i2 + 16 & -16 | -2147483648;
  HEAP32[i7 + 4 + 4 >> 2] = i2;
  i6 = 6;
 }
 if ((i6 | 0) == 6) _memcpy(i1 | 0, i3 + 4 | 0, i2 | 0) | 0;
 HEAP8[i1 + i2 >> 0] = 0;
 HEAP32[i7 >> 2] = i4;
 FUNCTION_TABLE_viiii[i5 & 7](i7 + 20 | 0, i7 + 16 | 0, i7 + 4 | 0, i7);
 __emval_incref(HEAP32[i7 + 20 >> 2] | 0);
 i1 = HEAP32[i7 + 20 >> 2] | 0;
 __emval_decref(i1 | 0);
 __emval_decref(HEAP32[i7 >> 2] | 0);
 if ((HEAP8[i7 + 4 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i7;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i7 + 4 >> 2] | 0);
 STACKTOP = i7;
 return i1 | 0;
}

function __ZN6asmdom4DataD2Ev(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = HEAP32[i4 + 48 >> 2] | 0;
 if (i1 | 0) do {
  i3 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  i2 = HEAP32[i3 + 40 >> 2] | 0;
  if ((i2 | 0) == (i3 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 15](i2); else if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 15](i2);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i4 + 40 >> 2] | 0;
 HEAP32[i4 + 40 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i4 + 28 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  __emval_decref(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i4 + 20 >> 2] | 0;
 HEAP32[i4 + 20 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i4 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if (!i1) return;
 __ZdlPv(i1);
 return;
}

function _vfprintf(i5, i4, i1) {
 i5 = i5 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i2 = i6 + 80 | 0;
 i3 = i2 + 40 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP32[i6 + 120 >> 2] = HEAP32[i1 >> 2];
 if ((_printf_core(0, i4, i6 + 120 | 0, i6, i6 + 80 | 0) | 0) < 0) i1 = -1; else {
  i3 = HEAP32[i5 >> 2] | 0;
  if ((HEAP8[i5 + 74 >> 0] | 0) < 1) HEAP32[i5 >> 2] = i3 & -33;
  if (!(HEAP32[i5 + 48 >> 2] | 0)) {
   i2 = HEAP32[i5 + 44 >> 2] | 0;
   HEAP32[i5 + 44 >> 2] = i6 + 136;
   HEAP32[i5 + 28 >> 2] = i6 + 136;
   HEAP32[i5 + 20 >> 2] = i6 + 136;
   HEAP32[i5 + 48 >> 2] = 80;
   HEAP32[i5 + 16 >> 2] = i6 + 136 + 80;
   i1 = _printf_core(i5, i4, i6 + 120 | 0, i6, i6 + 80 | 0) | 0;
   if (i2) {
    FUNCTION_TABLE_iiii[HEAP32[i5 + 36 >> 2] & 7](i5, 0, 0) | 0;
    i1 = (HEAP32[i5 + 20 >> 2] | 0) == 0 ? -1 : i1;
    HEAP32[i5 + 44 >> 2] = i2;
    HEAP32[i5 + 48 >> 2] = 0;
    HEAP32[i5 + 16 >> 2] = 0;
    HEAP32[i5 + 28 >> 2] = 0;
    HEAP32[i5 + 20 >> 2] = 0;
   }
  } else i1 = _printf_core(i5, i4, i6 + 120 | 0, i6, i6 + 80 | 0) | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i4 | i3 & 32;
  i1 = (i4 & 32 | 0) == 0 ? i1 : -1;
 }
 STACKTOP = i6;
 return i1 | 0;
}

function __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i5, i2, i1, i4) {
 i5 = i5 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i3 = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5, i2);
 HEAP32[i5 + 12 >> 2] = 0;
 HEAP32[i5 + 12 + 4 >> 2] = 0;
 HEAP32[i5 + 12 + 8 >> 2] = 0;
 HEAP32[i5 + 12 + 12 >> 2] = 0;
 HEAP32[i5 + 12 + 16 >> 2] = 0;
 HEAP32[i5 + 12 + 20 >> 2] = 0;
 __ZN6asmdom4DataC2ERKS0_(i5 + 36 | 0, i1);
 HEAP32[i5 + 100 >> 2] = 0;
 HEAP32[i5 + 104 >> 2] = 0;
 HEAP32[i5 + 108 >> 2] = 0;
 i1 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i4 >> 2] | 0) | 0;
 if (!(i1 >> 2)) {
  __ZN6asmdom5VNode11adjustVNodeEv(i5);
  return;
 }
 if (i1 >> 2 >>> 0 > 1073741823) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
 i3 = __Znwj(i1) | 0;
 HEAP32[i5 + 104 >> 2] = i3;
 HEAP32[i5 + 100 >> 2] = i3;
 HEAP32[i5 + 108 >> 2] = i3 + (i1 >> 2 << 2);
 i2 = HEAP32[i4 >> 2] | 0;
 i1 = (HEAP32[i4 + 4 >> 2] | 0) - i2 | 0;
 if ((i1 | 0) <= 0) {
  __ZN6asmdom5VNode11adjustVNodeEv(i5);
  return;
 }
 _memcpy(i3 | 0, i2 | 0, i1 | 0) | 0;
 HEAP32[i5 + 104 >> 2] = i3 + (i1 >>> 2 << 2);
 __ZN6asmdom5VNode11adjustVNodeEv(i5);
 return;
}

function __ZN6asmdom5addNSEPNS_5VNodeE(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 HEAP8[i4 + 11 >> 0] = 2;
 HEAP16[i4 >> 1] = 29550;
 HEAP8[i4 + 2 >> 0] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc(__ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEixEOS6_(i3 + 36 | 0, i4) | 0) | 0;
 if ((HEAP8[i4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 >> 2] | 0);
 i2 = HEAP8[i3 + 11 >> 0] | 0;
 if (((i2 << 24 >> 24 < 0 ? HEAP32[i3 + 4 >> 2] | 0 : i2 & 255) | 0) == 13) if (!(__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i3, 2602, 13) | 0)) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i3 + 100 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[i3 + 104 >> 2] | 0)) {
  STACKTOP = i4;
  return;
 }
 i2 = 0;
 do {
  __ZN6asmdom5addNSEPNS_5VNodeE(HEAP32[i1 + (i2 << 2) >> 2] | 0);
  i2 = i2 + 1 | 0;
  i1 = HEAP32[i3 + 100 >> 2] | 0;
 } while ((i2 | 0) != ((HEAP32[i3 + 104 >> 2] | 0) - i1 >> 2 | 0));
 STACKTOP = i4;
 return;
}

function __ZL25default_terminate_handlerv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i1 = ___cxa_get_globals_fast() | 0;
 if (i1 | 0) {
  i3 = HEAP32[i1 >> 2] | 0;
  if (i3 | 0) {
   i1 = HEAP32[i3 + 48 >> 2] | 0;
   i2 = HEAP32[i3 + 48 + 4 >> 2] | 0;
   if (!((i1 & -256 | 0) == 1126902528 & (i2 | 0) == 1129074247)) {
    HEAP32[i4 + 24 >> 2] = 8797;
    _abort_message(8747, i4 + 24 | 0);
   }
   if ((i1 | 0) == 1126902529 & (i2 | 0) == 1129074247) i1 = HEAP32[i3 + 44 >> 2] | 0; else i1 = i3 + 80 | 0;
   HEAP32[i4 + 36 >> 2] = i1;
   i3 = HEAP32[i3 >> 2] | 0;
   i1 = HEAP32[i3 + 4 >> 2] | 0;
   if (__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(1224, i3, i4 + 36 | 0) | 0) {
    i3 = HEAP32[i4 + 36 >> 2] | 0;
    i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 3](i3) | 0;
    HEAP32[i4 >> 2] = 8797;
    HEAP32[i4 + 4 >> 2] = i1;
    HEAP32[i4 + 8 >> 2] = i3;
    _abort_message(8661, i4);
   } else {
    HEAP32[i4 + 16 >> 2] = 8797;
    HEAP32[i4 + 16 + 4 >> 2] = i1;
    _abort_message(8706, i4 + 16 | 0);
   }
  }
 }
 _abort_message(8785, i4 + 32 | 0);
}

function __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i7, i3) {
 i7 = i7 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i6 = (HEAP32[i7 + 4 >> 2] | 0) - i2 | 0;
 if (((i6 >> 2) + 1 | 0) >>> 0 > 1073741823) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
 i1 = (HEAP32[i7 + 8 >> 2] | 0) - i2 | 0;
 i1 = i1 >> 2 >>> 0 < 536870911 ? (i1 >> 1 >>> 0 < ((i6 >> 2) + 1 | 0) >>> 0 ? (i6 >> 2) + 1 | 0 : i1 >> 1) : 1073741823;
 do if (!i1) i5 = 0; else if (i1 >>> 0 > 1073741823) {
  i7 = ___cxa_allocate_exception(8) | 0;
  __ZNSt11logic_errorC2EPKc(i7, 4994);
  HEAP32[i7 >> 2] = 2304;
  ___cxa_throw(i7 | 0, 1304, 8);
 } else {
  i5 = __Znwj(i1 << 2) | 0;
  break;
 } while (0);
 i4 = i5 + (i6 >> 2 << 2) | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 if ((i6 | 0) > 0) _memcpy(i4 + (0 - (i6 >> 2) << 2) | 0, i2 | 0, i6 | 0) | 0;
 HEAP32[i7 >> 2] = i4 + (0 - (i6 >> 2) << 2);
 HEAP32[i7 + 4 >> 2] = i4 + 4;
 HEAP32[i7 + 8 >> 2] = i5 + (i1 << 2);
 if (!i2) return;
 __ZdlPv(i2);
 return;
}

function __ZNSt3__212_GLOBAL__N_19as_stringINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPFiPcjPKczEiEET_T0_SD_PKNSD_10value_typeET1_(i4, i5, i3) {
 i4 = i4 | 0;
 i5 = i5 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i1 = HEAP8[i5 + 11 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) i2 = HEAP32[i5 + 4 >> 2] | 0; else i2 = i1 & 255;
 while (1) {
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i5 >> 2] | 0; else i1 = i5;
  HEAP32[i6 >> 2] = i3;
  i1 = _snprintf(i1, i2 + 1 | 0, 0, i6) | 0;
  if ((i1 | 0) > -1) if (i1 >>> 0 > i2 >>> 0) i2 = i1; else break; else i2 = i2 << 1 | 1;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i5, i2);
  i1 = HEAP8[i5 + 11 >> 0] | 0;
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i5, i1);
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 0;
 STACKTOP = i6;
 return;
}

function _memchr(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0;
 L1 : do if ((i3 | 0) != 0 & (i1 & 3 | 0) != 0) {
  i2 = i3;
  while (1) {
   if (!(HEAP8[i1 >> 0] | 0)) break L1;
   i1 = i1 + 1 | 0;
   i3 = i2 + -1 | 0;
   if ((i3 | 0) != 0 & (i1 & 3 | 0) != 0) i2 = i3; else {
    i2 = i3;
    i3 = (i3 | 0) != 0;
    i4 = 4;
    break;
   }
  }
 } else {
  i2 = i3;
  i3 = (i3 | 0) != 0;
  i4 = 4;
 } while (0);
 L5 : do if ((i4 | 0) == 4) if (i3) {
  if (HEAP8[i1 >> 0] | 0) {
   L9 : do if (i2 >>> 0 > 3) while (1) {
    i3 = HEAP32[i1 >> 2] | 0;
    if ((i3 & -2139062144 ^ -2139062144) & i3 + -16843009 | 0) break;
    i1 = i1 + 4 | 0;
    i2 = i2 + -4 | 0;
    if (i2 >>> 0 <= 3) {
     i4 = 10;
     break L9;
    }
   } else i4 = 10; while (0);
   if ((i4 | 0) == 10) if (!i2) {
    i2 = 0;
    break;
   }
   while (1) {
    if (!(HEAP8[i1 >> 0] | 0)) break L5;
    i1 = i1 + 1 | 0;
    i2 = i2 + -1 | 0;
    if (!i2) {
     i2 = 0;
     break;
    }
   }
  }
 } else i2 = 0; while (0);
 return (i2 | 0 ? i1 : 0) | 0;
}

function __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d5 = 0.0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 d5 = +__emval_as(i1 | 0, 1048, i6 | 0);
 i2 = HEAP32[i6 >> 2] | 0;
 i3 = HEAP32[~~d5 >>> 0 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 if (i3 >>> 0 > 4294967279) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if (i3 >>> 0 < 11) {
  HEAP8[i4 + 11 >> 0] = i3;
  if (!i3) {
   i4 = i4 + i3 | 0;
   HEAP8[i4 >> 0] = 0;
   __emval_run_destructors(i2 | 0);
   STACKTOP = i6;
   return;
  } else i1 = i4;
 } else {
  i1 = __Znwj(i3 + 16 & -16) | 0;
  HEAP32[i4 >> 2] = i1;
  HEAP32[i4 + 8 >> 2] = i3 + 16 & -16 | -2147483648;
  HEAP32[i4 + 4 >> 2] = i3;
 }
 _memcpy(i1 | 0, (~~d5 >>> 0) + 4 | 0, i3 | 0) | 0;
 i4 = i1;
 i4 = i4 + i3 | 0;
 HEAP8[i4 >> 0] = 0;
 __emval_run_destructors(i2 | 0);
 STACKTOP = i6;
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(i9, i5, i1, i6, i4, i3, i7) {
 i9 = i9 | 0;
 i5 = i5 | 0;
 i1 = i1 | 0;
 i6 = i6 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 i7 = i7 | 0;
 var i2 = 0, i8 = 0;
 if ((-18 - i5 | 0) >>> 0 < i1 >>> 0) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if ((HEAP8[i9 + 11 >> 0] | 0) < 0) i8 = HEAP32[i9 >> 2] | 0; else i8 = i9;
 if (i5 >>> 0 < 2147483623) {
  i2 = (i1 + i5 | 0) >>> 0 < i5 << 1 >>> 0 ? i5 << 1 : i1 + i5 | 0;
  i2 = i2 >>> 0 < 11 ? 11 : i2 + 16 & -16;
 } else i2 = -17;
 i1 = __Znwj(i2) | 0;
 if (i3 | 0) __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1, i7, i3) | 0;
 if (i6 - i4 | 0) __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1 + i3 | 0, i8 + i4 | 0, i6 - i4 | 0) | 0;
 if ((i5 | 0) != 10) __ZdlPv(i8);
 HEAP32[i9 >> 2] = i1;
 HEAP32[i9 + 8 >> 2] = i2 | -2147483648;
 HEAP32[i9 + 4 >> 2] = i6 - i4 + i3;
 __ZNSt3__211char_traitsIcE6assignERcRKc(i1 + (i6 - i4 + i3) | 0, 0);
 return;
}

function _memset(i3, i4, i2) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i1 = 0, i5 = 0;
 i1 = i3 + i2 | 0;
 i4 = i4 & 255;
 if ((i2 | 0) >= 67) {
  while (i3 & 3) {
   HEAP8[i3 >> 0] = i4;
   i3 = i3 + 1 | 0;
  }
  i5 = i4 | i4 << 8 | i4 << 16 | i4 << 24;
  while ((i3 | 0) <= ((i1 & -4) - 64 | 0)) {
   HEAP32[i3 >> 2] = i5;
   HEAP32[i3 + 4 >> 2] = i5;
   HEAP32[i3 + 8 >> 2] = i5;
   HEAP32[i3 + 12 >> 2] = i5;
   HEAP32[i3 + 16 >> 2] = i5;
   HEAP32[i3 + 20 >> 2] = i5;
   HEAP32[i3 + 24 >> 2] = i5;
   HEAP32[i3 + 28 >> 2] = i5;
   HEAP32[i3 + 32 >> 2] = i5;
   HEAP32[i3 + 36 >> 2] = i5;
   HEAP32[i3 + 40 >> 2] = i5;
   HEAP32[i3 + 44 >> 2] = i5;
   HEAP32[i3 + 48 >> 2] = i5;
   HEAP32[i3 + 52 >> 2] = i5;
   HEAP32[i3 + 56 >> 2] = i5;
   HEAP32[i3 + 60 >> 2] = i5;
   i3 = i3 + 64 | 0;
  }
  while ((i3 | 0) < (i1 & -4 | 0)) {
   HEAP32[i3 >> 2] = i5;
   i3 = i3 + 4 | 0;
  }
 }
 while ((i3 | 0) < (i1 | 0)) {
  HEAP8[i3 >> 0] = i4;
  i3 = i3 + 1 | 0;
 }
 return i1 - i2 | 0;
}

function ___fwritex(i1, i5, i6) {
 i1 = i1 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 if (!i2) {
  if (!(___towrite(i6) | 0)) {
   i2 = HEAP32[i6 + 16 >> 2] | 0;
   i3 = 5;
  }
 } else i3 = 5;
 L5 : do if ((i3 | 0) == 5) {
  i3 = HEAP32[i6 + 20 >> 2] | 0;
  if ((i2 - i3 | 0) >>> 0 < i5 >>> 0) {
   FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 7](i6, i1, i5) | 0;
   break;
  }
  L10 : do if ((HEAP8[i6 + 75 >> 0] | 0) > -1) {
   i4 = i5;
   while (1) {
    if (!i4) {
     i2 = i5;
     break L10;
    }
    i2 = i4 + -1 | 0;
    if ((HEAP8[i1 + i2 >> 0] | 0) == 10) break; else i4 = i2;
   }
   if ((FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 7](i6, i1, i4) | 0) >>> 0 < i4 >>> 0) break L5;
   i3 = HEAP32[i6 + 20 >> 2] | 0;
   i2 = i5 - i4 | 0;
   i1 = i1 + i4 | 0;
  } else i2 = i5; while (0);
  _memcpy(i3 | 0, i1 | 0, i2 | 0) | 0;
  HEAP32[i6 + 20 >> 2] = (HEAP32[i6 + 20 >> 2] | 0) + i2;
 } while (0);
 return;
}

function _wcrtomb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 do if (!i1) i1 = 1; else {
  if (i2 >>> 0 < 128) {
   HEAP8[i1 >> 0] = i2;
   i1 = 1;
   break;
  }
  if (!(HEAP32[2526] | 0)) if ((i2 & -128 | 0) == 57216) {
   HEAP8[i1 >> 0] = i2;
   i1 = 1;
   break;
  } else {
   HEAP32[2535] = 84;
   i1 = -1;
   break;
  }
  if (i2 >>> 0 < 2048) {
   HEAP8[i1 >> 0] = i2 >>> 6 | 192;
   HEAP8[i1 + 1 >> 0] = i2 & 63 | 128;
   i1 = 2;
   break;
  }
  if (i2 >>> 0 < 55296 | (i2 & -8192 | 0) == 57344) {
   HEAP8[i1 >> 0] = i2 >>> 12 | 224;
   HEAP8[i1 + 1 >> 0] = i2 >>> 6 & 63 | 128;
   HEAP8[i1 + 2 >> 0] = i2 & 63 | 128;
   i1 = 3;
   break;
  }
  if ((i2 + -65536 | 0) >>> 0 < 1048576) {
   HEAP8[i1 >> 0] = i2 >>> 18 | 240;
   HEAP8[i1 + 1 >> 0] = i2 >>> 12 & 63 | 128;
   HEAP8[i1 + 2 >> 0] = i2 >>> 6 & 63 | 128;
   HEAP8[i1 + 3 >> 0] = i2 & 63 | 128;
   i1 = 4;
   break;
  } else {
   HEAP32[2535] = 84;
   i1 = -1;
   break;
  }
 } while (0);
 return i1 | 0;
}

function __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i4, i1, i3, i2) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ERKSF_(i4, i1);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S8_EEEEEC2ERKSH_(i4 + 20 | 0, i3);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ERKSK_(i4 + 40 | 0, i2);
 return;
}

function _vsnprintf(i1, i2, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i8;
 i4 = 1684;
 i5 = i3 + 124 | 0;
 do {
  HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
  i3 = i3 + 4 | 0;
  i4 = i4 + 4 | 0;
 } while ((i3 | 0) < (i5 | 0));
 if ((i2 + -1 | 0) >>> 0 > 2147483646) if (!i2) {
  i2 = 1;
  i1 = i8 + 124 | 0;
  i7 = 4;
 } else {
  HEAP32[2535] = 75;
  i1 = -1;
 } else i7 = 4;
 if ((i7 | 0) == 4) {
  i7 = -2 - i1 | 0;
  i7 = i2 >>> 0 > i7 >>> 0 ? i7 : i2;
  HEAP32[i8 + 48 >> 2] = i7;
  HEAP32[i8 + 20 >> 2] = i1;
  HEAP32[i8 + 44 >> 2] = i1;
  i1 = i1 + i7 | 0;
  HEAP32[i8 + 16 >> 2] = i1;
  HEAP32[i8 + 28 >> 2] = i1;
  i1 = _vfprintf(i8, 8658, i6) | 0;
  if (i7) {
   i7 = HEAP32[i8 + 20 >> 2] | 0;
   HEAP8[i7 + (((i7 | 0) == (HEAP32[i8 + 16 >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 STACKTOP = i8;
 return i1 | 0;
}

function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib(i4, i2, i1, i3, i5) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 i5 = i5 | 0;
 do if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i4, HEAP32[i2 + 8 >> 2] | 0) | 0) __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(i2, i1, i3); else if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i4, HEAP32[i2 >> 2] | 0) | 0) {
  if ((HEAP32[i2 + 16 >> 2] | 0) != (i1 | 0)) if ((HEAP32[i2 + 20 >> 2] | 0) != (i1 | 0)) {
   HEAP32[i2 + 32 >> 2] = i3;
   HEAP32[i2 + 20 >> 2] = i1;
   HEAP32[i2 + 40 >> 2] = (HEAP32[i2 + 40 >> 2] | 0) + 1;
   if ((HEAP32[i2 + 36 >> 2] | 0) == 1) if ((HEAP32[i2 + 24 >> 2] | 0) == 2) HEAP8[i2 + 54 >> 0] = 1;
   HEAP32[i2 + 44 >> 2] = 4;
   break;
  }
  if ((i3 | 0) == 1) HEAP32[i2 + 32 >> 2] = 1;
 } while (0);
 return;
}

function __ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi(i6, i3, i2, i5) {
 i6 = i6 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 i5 = i5 | 0;
 var i1 = 0, i4 = 0;
 L1 : do if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i6, HEAP32[i3 + 8 >> 2] | 0) | 0) __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(i3, i2, i5); else {
  i1 = HEAP32[i6 + 12 >> 2] | 0;
  __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi(i6 + 16 | 0, i3, i2, i5);
  if ((i1 | 0) > 1) {
   i4 = i6 + 24 | 0;
   do {
    __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi(i4, i3, i2, i5);
    if (HEAP8[i3 + 54 >> 0] | 0) break L1;
    i4 = i4 + 8 | 0;
   } while (i4 >>> 0 < (i6 + 16 + (i1 << 3) | 0) >>> 0);
  }
 } while (0);
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 if ((HEAP8[i2 + 11 >> 0] | 0) < 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  i2 = HEAP32[i2 + 4 >> 2] | 0;
  if (i2 >>> 0 > 4294967279) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  if (i2 >>> 0 < 11) HEAP8[i1 + 11 >> 0] = i2; else {
   i4 = __Znwj(i2 + 16 & -16) | 0;
   HEAP32[i1 >> 2] = i4;
   HEAP32[i1 + 8 >> 2] = i2 + 16 & -16 | -2147483648;
   HEAP32[i1 + 4 >> 2] = i2;
   i1 = i4;
  }
  __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1, i3, i2) | 0;
  __ZNSt3__211char_traitsIcE6assignERcRKc(i1 + i2 | 0, 0);
 } else {
  HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 }
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj(i5, i4, i3) {
 i5 = i5 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i1 = HEAP8[i5 + 11 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) i2 = (HEAP32[i5 + 8 >> 2] & 2147483647) + -1 | 0; else i2 = 10;
 do if (i2 >>> 0 < i3 >>> 0) {
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i5 + 4 >> 2] | 0; else i1 = i1 & 255;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(i5, i2, i3 - i2 | 0, i1, i1, i3, i4);
 } else {
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i5 >> 2] | 0; else i1 = i5;
  __ZNSt3__211char_traitsIcE4moveEPcPKcj(i1, i4, i3) | 0;
  __ZNSt3__211char_traitsIcE6assignERcRKc(i1 + i3 | 0, 0);
  if ((HEAP8[i5 + 11 >> 0] | 0) < 0) {
   HEAP32[i5 + 4 >> 2] = i3;
   break;
  } else {
   HEAP8[i5 + 11 >> 0] = i3;
   break;
  }
 } while (0);
 return i5 | 0;
}

function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(i5, i1, i4) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i5, i1) | 0) i1 = 1; else if (!i1) i1 = 0; else {
  i1 = ___dynamic_cast(i1, 1232) | 0;
  if (!i1) i1 = 0; else {
   i2 = i6 + 4 | 0;
   i3 = i2 + 52 | 0;
   do {
    HEAP32[i2 >> 2] = 0;
    i2 = i2 + 4 | 0;
   } while ((i2 | 0) < (i3 | 0));
   HEAP32[i6 >> 2] = i1;
   HEAP32[i6 + 8 >> 2] = i5;
   HEAP32[i6 + 12 >> 2] = -1;
   HEAP32[i6 + 48 >> 2] = 1;
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 7](i1, i6, HEAP32[i4 >> 2] | 0, 1);
   if ((HEAP32[i6 + 24 >> 2] | 0) == 1) {
    HEAP32[i4 >> 2] = HEAP32[i6 + 16 >> 2];
    i1 = 1;
   } else i1 = 0;
  }
 }
 STACKTOP = i6;
 return i1 | 0;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc(i6, i3) {
 i6 = i6 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0;
 if (i3 | 0) {
  i1 = HEAP8[i6 + 11 >> 0] | 0;
  if (i1 << 24 >> 24 < 0) {
   i5 = HEAP32[i6 + 4 >> 2] | 0;
   i2 = (HEAP32[i6 + 8 >> 2] & 2147483647) + -1 | 0;
  } else {
   i5 = i1 & 255;
   i2 = 10;
  }
  i4 = i5 + i3 | 0;
  if ((i2 - i5 | 0) >>> 0 < i3 >>> 0) {
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj(i6, i2, i4 - i2 | 0, i5, i5);
   i1 = HEAP8[i6 + 11 >> 0] | 0;
  }
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i6 >> 2] | 0; else i1 = i6;
  __ZNSt3__211char_traitsIcE6assignEPcjc(i1 + i5 | 0, i3) | 0;
  if ((HEAP8[i6 + 11 >> 0] | 0) < 0) HEAP32[i6 + 4 >> 2] = i4; else HEAP8[i6 + 11 >> 0] = i4;
  __ZNSt3__211char_traitsIcE6assignERcRKc(i1 + i4 | 0, 0);
 }
 return i6 | 0;
}

function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(i4, i2, i1, i3) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 HEAP8[i4 + 53 >> 0] = 1;
 do if ((HEAP32[i4 + 4 >> 2] | 0) == (i1 | 0)) {
  HEAP8[i4 + 52 >> 0] = 1;
  i1 = HEAP32[i4 + 16 >> 2] | 0;
  if (!i1) {
   HEAP32[i4 + 16 >> 2] = i2;
   HEAP32[i4 + 24 >> 2] = i3;
   HEAP32[i4 + 36 >> 2] = 1;
   if (!((i3 | 0) == 1 ? (HEAP32[i4 + 48 >> 2] | 0) == 1 : 0)) break;
   HEAP8[i4 + 54 >> 0] = 1;
   break;
  }
  if ((i1 | 0) != (i2 | 0)) {
   HEAP32[i4 + 36 >> 2] = (HEAP32[i4 + 36 >> 2] | 0) + 1;
   HEAP8[i4 + 54 >> 0] = 1;
   break;
  }
  i1 = HEAP32[i4 + 24 >> 2] | 0;
  if ((i1 | 0) == 2) {
   HEAP32[i4 + 24 >> 2] = i3;
   i1 = i3;
  }
  if ((i1 | 0) == 1 ? (HEAP32[i4 + 48 >> 2] | 0) == 1 : 0) HEAP8[i4 + 54 >> 0] = 1;
 } while (0);
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj(i7, i4, i1, i5, i3) {
 i7 = i7 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 i3 = i3 | 0;
 var i2 = 0, i6 = 0;
 if ((-17 - i4 | 0) >>> 0 < i1 >>> 0) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if ((HEAP8[i7 + 11 >> 0] | 0) < 0) i6 = HEAP32[i7 >> 2] | 0; else i6 = i7;
 if (i4 >>> 0 < 2147483623) {
  i2 = (i1 + i4 | 0) >>> 0 < i4 << 1 >>> 0 ? i4 << 1 : i1 + i4 | 0;
  i2 = i2 >>> 0 < 11 ? 11 : i2 + 16 & -16;
 } else i2 = -17;
 i1 = __Znwj(i2) | 0;
 if (i3 | 0) __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1, i6, i3) | 0;
 if (i5 - i3 | 0) __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1 + i3 | 0, i6 + i3 | 0, i5 - i3 | 0) | 0;
 if ((i4 | 0) != 10) __ZdlPv(i6);
 HEAP32[i7 >> 2] = i1;
 HEAP32[i7 + 8 >> 2] = i2 | -2147483648;
 return;
}

function __ZN6asmdom5patchEPNS_5VNodeES1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(HEAP8[9504] | 0)) if (!(___cxa_guard_acquire(9504) | 0)) i3 = 4; else {
  HEAP8[10152] = 1;
  HEAP8[10153] = 0;
  i3 = 5;
 } else i3 = 4;
 if ((i3 | 0) == 4) if (!(HEAP8[10153] | 0)) i3 = 5; else if ((i1 | 0) == (i2 | 0)) return;
 if ((i3 | 0) == 5) {
  i3 = HEAP32[2382] | 0;
  if ((i3 | 0) != (i1 | 0) & (i3 | 0) != 0 | (i1 | 0) == (i2 | 0)) return;
 }
 HEAP32[2382] = i2;
 if (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i1, i2) | 0) __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i1, i2); else {
  i3 = __ZN6asmdom9createElmEPNS_5VNodeE(i2) | 0;
  _emscripten_asm_const_iii(17, i3 | 0, HEAP32[i1 + 96 >> 2] | 0) | 0;
 }
 if ((i1 | 0) == 0 | (HEAP8[10152] | 0) == 0) return;
 __ZN6asmdom5VNodeD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function __ZN6asmdom5VNodeD2Ev(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = HEAP32[i4 + 100 >> 2] | 0;
 i2 = (HEAP32[i4 + 104 >> 2] | 0) - i1 >> 2;
 if (i2) {
  i3 = i2;
  do {
   i3 = i3 + -1 | 0;
   i2 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
   if (i2) {
    __ZN6asmdom5VNodeD2Ev(i2);
    __ZdlPv(i2);
    i1 = HEAP32[i4 + 100 >> 2] | 0;
   }
  } while ((i3 | 0) != 0);
 }
 if (i1 | 0) {
  i2 = HEAP32[i4 + 104 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) HEAP32[i4 + 104 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 }
 __ZN6asmdom4DataD2Ev(i4 + 36 | 0);
 if ((HEAP8[i4 + 24 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 + 24 >> 2] | 0);
 if ((HEAP8[i4 + 12 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 + 12 >> 2] | 0);
 if ((HEAP8[i4 + 11 >> 0] | 0) >= 0) return;
 __ZdlPv(HEAP32[i4 >> 2] | 0);
 return;
}

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i1) {
 i1 = i1 | 0;
 if (!i1) return;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i1 >> 2] | 0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i1 + 4 >> 2] | 0);
 if ((HEAP8[i1 + 16 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 + 16 >> 2] | 0);
 __ZdlPv(i1);
 return;
}

function __GLOBAL__sub_I_asm_dom_cpp() {
 var i1 = 0, i2 = 0, i3 = 0;
 __embind_register_function(2404, 4, 1504, 2421, 1, 4);
 i1 = __Znwj(112) | 0;
 i2 = i1;
 i3 = i2 + 52 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAPF32[i1 + 52 >> 2] = Math_fround(1.0);
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 56 + 4 >> 2] = 0;
 HEAP32[i1 + 56 + 8 >> 2] = 0;
 HEAP32[i1 + 56 + 12 >> 2] = 0;
 HEAPF32[i1 + 72 >> 2] = Math_fround(1.0);
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 76 + 4 >> 2] = 0;
 HEAP32[i1 + 76 + 8 >> 2] = 0;
 HEAP32[i1 + 76 + 12 >> 2] = 0;
 HEAPF32[i1 + 92 >> 2] = Math_fround(1.0);
 HEAP32[i1 + 100 >> 2] = 0;
 HEAP32[i1 + 104 >> 2] = 0;
 HEAP32[i1 + 108 >> 2] = 0;
 HEAP32[2383] = i1;
 return;
}

function _frexp(d1, i5) {
 d1 = +d1;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i4 = _bitshift64Lshr(i2 | 0, i3 | 0, 52) | 0;
 switch (i4 & 2047) {
 case 0:
  {
   if (d1 != 0.0) {
    d1 = +_frexp(d1 * 18446744073709551616.0, i5);
    i2 = (HEAP32[i5 >> 2] | 0) + -64 | 0;
   } else i2 = 0;
   HEAP32[i5 >> 2] = i2;
   break;
  }
 case 2047:
  break;
 default:
  {
   HEAP32[i5 >> 2] = (i4 & 2047) + -1022;
   HEAP32[tempDoublePtr >> 2] = i2;
   HEAP32[tempDoublePtr + 4 >> 2] = i3 & -2146435073 | 1071644672;
   d1 = +HEAPF64[tempDoublePtr >> 3];
  }
 }
 return +d1;
}

function __ZN6asmdom4DataC2ERKS0_(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ERKSF_(i2, i1);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S8_EEEEEC2ERKSH_(i2 + 20 | 0, i1 + 20 | 0);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ERKSK_(i2 + 40 | 0, i1 + 40 | 0);
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i4, i2) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 i1 = HEAP8[i4 + 11 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) i3 = HEAP32[i4 + 4 >> 2] | 0; else i3 = i1 & 255;
 do if (i3 >>> 0 < i2 >>> 0) __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc(i4, i2 - i3 | 0) | 0; else if (i1 << 24 >> 24 < 0) {
  __ZNSt3__211char_traitsIcE6assignERcRKc((HEAP32[i4 >> 2] | 0) + i2 | 0, 0);
  HEAP32[i4 + 4 >> 2] = i2;
  break;
 } else {
  __ZNSt3__211char_traitsIcE6assignERcRKc(i4 + i2 | 0, 0);
  HEAP8[i4 + 11 >> 0] = i2;
  break;
 } while (0);
 return;
}

function __ZN10emscripten8internal12MethodCallerINS_3valEJS2_EE4callEPNS0_7_EM_VALEPKcOS2_(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0, d6 = 0.0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (!(HEAP8[9520] | 0)) if (___cxa_guard_acquire(9520) | 0) {
  i5 = __emval_get_method_caller(2, 1552) | 0;
  HEAP32[2391] = i5;
 }
 i5 = HEAP32[2391] | 0;
 __emval_incref(HEAP32[i2 >> 2] | 0);
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 d6 = +__emval_call_method(i5 | 0, i3 | 0, 4963, i4 + 8 | 0, i4 | 0);
 i5 = HEAP32[i4 + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = ~~d6 >>> 0;
 __emval_run_destructors(i5 | 0);
 STACKTOP = i4;
 return;
}

function __ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i2, i3, i4) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i1 = 0, i5 = 0;
 i1 = HEAP8[i2 + 11 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) i5 = HEAP32[i2 + 4 >> 2] | 0; else i5 = i1 & 255;
 if ((i4 | 0) == -1) __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
 if (i1 << 24 >> 24 < 0) i1 = HEAP32[i2 >> 2] | 0; else i1 = i2;
 i2 = i5 >>> 0 > i4 >>> 0;
 i1 = __ZNSt3__211char_traitsIcE7compareEPKcS3_j(i1, i3, i2 ? i4 : i5) | 0;
 if (!i1) return (i5 >>> 0 < i4 >>> 0 ? -1 : i2 & 1) | 0; else return i1 | 0;
 return 0;
}

function __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i3, i2);
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 + 12 + 4 >> 2] = 0;
 HEAP32[i3 + 12 + 8 >> 2] = 0;
 HEAP32[i3 + 12 + 12 >> 2] = 0;
 HEAP32[i3 + 12 + 16 >> 2] = 0;
 HEAP32[i3 + 12 + 20 >> 2] = 0;
 __ZN6asmdom4DataC2ERKS0_(i3 + 36 | 0, i1);
 HEAP32[i3 + 100 >> 2] = 0;
 HEAP32[i3 + 104 >> 2] = 0;
 HEAP32[i3 + 108 >> 2] = 0;
 __ZN6asmdom5VNode11adjustVNodeEv(i3);
 return;
}

function ___overflow() {
 var i1 = 0, i2 = 0, i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP8[i3 >> 0] = 10;
 i1 = HEAP32[394] | 0;
 if (!i1) if (!(___towrite(1560) | 0)) {
  i1 = HEAP32[394] | 0;
  i2 = 4;
 } else i1 = -1; else i2 = 4;
 do if ((i2 | 0) == 4) {
  i2 = HEAP32[395] | 0;
  if (!(i2 >>> 0 >= i1 >>> 0 | (HEAP8[1635] | 0) == 10)) {
   HEAP32[395] = i2 + 1;
   HEAP8[i2 >> 0] = 10;
   i1 = 10;
   break;
  }
  if ((FUNCTION_TABLE_iiii[HEAP32[1596 >> 2] & 7](1560, i3, 1) | 0) == 1) i1 = HEAPU8[i3 >> 0] | 0; else i1 = -1;
 } while (0);
 STACKTOP = i3;
 return i1 | 0;
}

function ___strerror_l(i2, i4) {
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i1 = 0, i3 = 0;
 i1 = 0;
 while (1) {
  if ((HEAPU8[6755 + i1 >> 0] | 0) == (i2 | 0)) {
   i3 = 2;
   break;
  }
  i1 = i1 + 1 | 0;
  if ((i1 | 0) == 87) {
   i1 = 87;
   i2 = 6843;
   i3 = 5;
   break;
  }
 }
 if ((i3 | 0) == 2) if (!i1) i1 = 6843; else {
  i2 = 6843;
  i3 = 5;
 }
 if ((i3 | 0) == 5) while (1) {
  do {
   i3 = i2;
   i2 = i2 + 1 | 0;
  } while ((HEAP8[i3 >> 0] | 0) != 0);
  i1 = i1 + -1 | 0;
  if (!i1) {
   i1 = i2;
   break;
  } else i3 = 5;
 }
 return ___lctrans(i1, HEAP32[i4 + 20 >> 2] | 0) | 0;
}

function _strlen(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 L1 : do if (!(i4 & 3)) {
  i1 = i4;
  i3 = 4;
 } else {
  i1 = i4;
  i2 = i4;
  while (1) {
   if (!(HEAP8[i2 >> 0] | 0)) break L1;
   i2 = i2 + 1 | 0;
   i1 = i2;
   if (!(i1 & 3)) {
    i1 = i2;
    i3 = 4;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) == 4) {
  while (1) {
   i2 = HEAP32[i1 >> 2] | 0;
   if (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009)) i1 = i1 + 4 | 0; else break;
  }
  if ((i2 & 255) << 24 >> 24) do i1 = i1 + 1 | 0; while ((HEAP8[i1 >> 0] | 0) != 0);
 }
 return i1 - i4 | 0;
}

function _fmt_u(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i4 = 0;
 if (i3 >>> 0 > 0 | (i3 | 0) == 0 & i2 >>> 0 > 4294967295) while (1) {
  i4 = ___uremdi3(i2 | 0, i3 | 0, 10, 0) | 0;
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = i4 & 255 | 48;
  i4 = i2;
  i2 = ___udivdi3(i2 | 0, i3 | 0, 10, 0) | 0;
  if (!(i3 >>> 0 > 9 | (i3 | 0) == 9 & i4 >>> 0 > 4294967295)) break; else i3 = tempRet0;
 }
 if (i2) while (1) {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = (i2 >>> 0) % 10 | 0 | 48;
  if (i2 >>> 0 < 10) break; else i2 = (i2 >>> 0) / 10 | 0;
 }
 return i1 | 0;
}

function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(i3, i2, i4) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i1 = 0;
 i1 = HEAP32[i3 + 16 >> 2] | 0;
 do if (!i1) {
  HEAP32[i3 + 16 >> 2] = i2;
  HEAP32[i3 + 24 >> 2] = i4;
  HEAP32[i3 + 36 >> 2] = 1;
 } else {
  if ((i1 | 0) != (i2 | 0)) {
   HEAP32[i3 + 36 >> 2] = (HEAP32[i3 + 36 >> 2] | 0) + 1;
   HEAP32[i3 + 24 >> 2] = 2;
   HEAP8[i3 + 54 >> 0] = 1;
   break;
  }
  if ((HEAP32[i3 + 24 >> 2] | 0) == 2) HEAP32[i3 + 24 >> 2] = i4;
 } while (0);
 return;
}

function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib(i5, i3, i2, i1, i4, i6) {
 i5 = i5 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 i6 = i6 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i5, HEAP32[i3 + 8 >> 2] | 0) | 0) __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(i3, i2, i1, i4); else {
  i5 = HEAP32[i5 + 8 >> 2] | 0;
  FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 3](i5, i3, i2, i1, i4, i6);
 }
 return;
}

function _pad_684(i5, i1, i4, i3, i2) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 if ((i4 | 0) > (i3 | 0) & (i2 & 73728 | 0) == 0) {
  _memset(i6 | 0, i1 | 0, ((i4 - i3 | 0) >>> 0 < 256 ? i4 - i3 | 0 : 256) | 0) | 0;
  if ((i4 - i3 | 0) >>> 0 > 255) {
   i1 = i4 - i3 | 0;
   do {
    _out(i5, i6, 256);
    i1 = i1 + -256 | 0;
   } while (i1 >>> 0 > 255);
   i1 = i4 - i3 & 255;
  } else i1 = i4 - i3 | 0;
  _out(i5, i6, i1);
 }
 STACKTOP = i6;
 return;
}

function __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib(i7, i4, i3, i2, i6, i8) {
 i7 = i7 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 i8 = i8 | 0;
 var i1 = 0, i5 = 0;
 i1 = HEAP32[i7 + 4 >> 2] | 0;
 if (!(i1 & 1)) i5 = i1 >> 8; else i5 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 >> 8) >> 2] | 0;
 i7 = HEAP32[i7 >> 2] | 0;
 FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 3](i7, i4, i3, i2 + i5 | 0, i1 & 2 | 0 ? i6 : 2, i8);
 return;
}

function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi(i4, i2, i1, i3) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i4, HEAP32[i2 + 8 >> 2] | 0) | 0) __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(i2, i1, i3); else {
  i4 = HEAP32[i4 + 8 >> 2] | 0;
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 28 >> 2] & 7](i4, i2, i1, i3);
 }
 return;
}

function __ZNSt3__29to_stringEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZNKSt3__212_GLOBAL__N_114initial_stringINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiLb0EEclEv(i3);
 __ZNSt3__212_GLOBAL__N_19as_stringINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPFiPcjPKczEiEET_T0_SD_PKNSD_10value_typeET1_(i1, i3, i2);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i3);
 STACKTOP = i3;
 return;
}

function __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib(i6, i3, i2, i5, i7) {
 i6 = i6 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 i5 = i5 | 0;
 i7 = i7 | 0;
 var i1 = 0, i4 = 0;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if (!(i1 & 1)) i4 = i1 >> 8; else i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 >> 8) >> 2] | 0;
 i6 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 3](i6, i3, i2 + i4 | 0, i1 & 2 | 0 ? i5 : 2, i7);
 return;
}

function _fputc() {
 var i1 = 0;
 i1 = (HEAP8[1635] | 0) == 10;
 do if ((HEAP32[409] | 0) < 0) {
  if (!i1) {
   i1 = HEAP32[395] | 0;
   if (i1 >>> 0 < (HEAP32[394] | 0) >>> 0) {
    HEAP32[395] = i1 + 1;
    HEAP8[i1 >> 0] = 10;
    break;
   }
  }
  ___overflow() | 0;
 } else {
  if (!i1) {
   i1 = HEAP32[395] | 0;
   if (i1 >>> 0 < (HEAP32[394] | 0) >>> 0) {
    HEAP32[395] = i1 + 1;
    HEAP8[i1 >> 0] = 10;
    break;
   }
  }
  ___overflow() | 0;
 } while (0);
 return;
}

function __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi(i6, i3, i2, i5) {
 i6 = i6 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 i5 = i5 | 0;
 var i1 = 0, i4 = 0;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if (!(i1 & 1)) i4 = i1 >> 8; else i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 >> 8) >> 2] | 0;
 i6 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] & 7](i6, i3, i2 + i4 | 0, i1 & 2 | 0 ? i5 : 2);
 return;
}

function ___stdio_seek(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 + 60 >> 2];
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = i2;
 HEAP32[i4 + 12 >> 2] = i4 + 20;
 HEAP32[i4 + 16 >> 2] = i3;
 if ((___syscall_ret(___syscall140(140, i4 | 0) | 0) | 0) < 0) {
  HEAP32[i4 + 20 >> 2] = -1;
  i1 = -1;
 } else i1 = HEAP32[i4 + 20 >> 2] | 0;
 STACKTOP = i4;
 return i1 | 0;
}

function _sbrk(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i3 = i1 + 15 & -16 | 0;
 i2 = HEAP32[DYNAMICTOP_PTR >> 2] | 0;
 i1 = i2 + i3 | 0;
 if ((i3 | 0) > 0 & (i1 | 0) < (i2 | 0) | (i1 | 0) < 0) {
  abortOnCannotGrowMemory() | 0;
  ___setErrNo(12);
  return -1;
 }
 HEAP32[DYNAMICTOP_PTR >> 2] = i1;
 if ((i1 | 0) > (getTotalMemory() | 0)) if (!(enlargeMemory() | 0)) {
  HEAP32[DYNAMICTOP_PTR >> 2] = i2;
  ___setErrNo(12);
  return -1;
 }
 return i2 | 0;
}

function __ZNSt3__213__lower_boundIRNS_6__lessIjjEEPKjjEET0_S6_S6_RKT1_T_(i1, i2, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i3 = 0, i5 = 0, i6 = 0;
 if (i2 - i1 >> 2) {
  i3 = i1;
  i2 = i2 - i1 >> 2;
  while (1) {
   i6 = (i2 | 0) / 2 | 0;
   i1 = i3 + (i6 << 2) | 0;
   i5 = (HEAP32[i1 >> 2] | 0) >>> 0 < i4 >>> 0;
   i2 = i5 ? i2 + -1 - i6 | 0 : i6;
   i1 = i5 ? i1 + 4 | 0 : i3;
   if (!i2) break; else i3 = i1;
  }
 }
 return i1 | 0;
}

function ___towrite(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP8[i2 + 74 >> 0] | 0;
 HEAP8[i2 + 74 >> 0] = i1 + 255 | i1;
 i1 = HEAP32[i2 >> 2] | 0;
 if (!(i1 & 8)) {
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  i1 = HEAP32[i2 + 44 >> 2] | 0;
  HEAP32[i2 + 28 >> 2] = i1;
  HEAP32[i2 + 20 >> 2] = i1;
  HEAP32[i2 + 16 >> 2] = i1 + (HEAP32[i2 + 48 >> 2] | 0);
  i1 = 0;
 } else {
  HEAP32[i2 >> 2] = i1 | 32;
  i1 = -1;
 }
 return i1 | 0;
}

function __GLOBAL__sub_I_index_cpp() {
 __embind_register_function(4814, 1, 1548, 4821, 14, 2);
 __embind_register_function(4824, 1, 1548, 4821, 14, 3);
 __embind_register_function(4849, 1, 1548, 4821, 14, 4);
 __embind_register_function(4869, 1, 1548, 4821, 14, 5);
 __embind_register_function(4891, 1, 1548, 4821, 14, 6);
 __embind_register_function(4908, 1, 1548, 4821, 14, 7);
 __embind_register_function(4931, 1, 1548, 4821, 14, 8);
 return;
}

function _memcmp(i1, i5, i2) {
 i1 = i1 | 0;
 i5 = i5 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 L1 : do if (!i2) i1 = 0; else {
  while (1) {
   i3 = HEAP8[i1 >> 0] | 0;
   i4 = HEAP8[i5 >> 0] | 0;
   if (i3 << 24 >> 24 != i4 << 24 >> 24) break;
   i2 = i2 + -1 | 0;
   if (!i2) {
    i1 = 0;
    break L1;
   } else {
    i1 = i1 + 1 | 0;
    i5 = i5 + 1 | 0;
   }
  }
  i1 = (i3 & 255) - (i4 & 255) | 0;
 } while (0);
 return i1 | 0;
}

function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib(i5, i3, i2, i1, i4, i6) {
 i5 = i5 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 i6 = i6 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i5, HEAP32[i3 + 8 >> 2] | 0) | 0) __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(i3, i2, i1, i4);
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 if ((i2 | 0) != (i1 | 0)) {
  i3 = HEAP8[i1 + 11 >> 0] | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj(i2, i3 << 24 >> 24 < 0 ? HEAP32[i1 >> 2] | 0 : i1, i3 << 24 >> 24 < 0 ? HEAP32[i1 + 4 >> 2] | 0 : i3 & 255) | 0;
 }
 return i2 | 0;
}

function _strcmp(i3, i4) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i1 = 0, i2 = 0;
 i1 = HEAP8[i3 >> 0] | 0;
 i2 = HEAP8[i4 >> 0] | 0;
 if (!(i1 << 24 >> 24 == 0 ? 1 : i1 << 24 >> 24 != i2 << 24 >> 24)) do {
  i3 = i3 + 1 | 0;
  i4 = i4 + 1 | 0;
  i1 = HEAP8[i3 >> 0] | 0;
  i2 = HEAP8[i4 >> 0] | 0;
 } while (!(i1 << 24 >> 24 == 0 ? 1 : i1 << 24 >> 24 != i2 << 24 >> 24));
 return (i1 & 255) - (i2 & 255) | 0;
}

function __ZNSt3__218__libcpp_refstringC2EPKc(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0;
 i4 = _strlen(i1) | 0;
 i3 = __Znwj(i4 + 13 | 0) | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i3 + 8 >> 2] = 0;
 i3 = __ZNSt3__215__refstring_imp12_GLOBAL__N_113data_from_repEPNS1_9_Rep_baseE(i3) | 0;
 _memcpy(i3 | 0, i1 | 0, i4 + 1 | 0) | 0;
 HEAP32[i2 >> 2] = i3;
 return;
}

function _memmove(i1, i4, i2) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i4 | 0) < (i1 | 0) & (i1 | 0) < (i4 + i2 | 0)) {
  i3 = i1;
  i4 = i4 + i2 | 0;
  i1 = i1 + i2 | 0;
  while ((i2 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i4 = i4 - 1 | 0;
   i2 = i2 - 1 | 0;
   HEAP8[i1 >> 0] = HEAP8[i4 >> 0] | 0;
  }
  i1 = i3;
 } else _memcpy(i1, i4, i2) | 0;
 return i1 | 0;
}

function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi(i4, i2, i1, i3) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i4, HEAP32[i2 + 8 >> 2] | 0) | 0) __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(i2, i1, i3);
 return;
}

function _getint(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i2 = (HEAP8[i1 >> 0] | 0) + -48 | 0;
 if (i2 >>> 0 < 10) {
  i3 = i1;
  i1 = 0;
  do {
   i1 = (i1 * 10 | 0) + i2 | 0;
   i3 = i3 + 1 | 0;
   HEAP32[i4 >> 2] = i3;
   i2 = (HEAP8[i3 >> 0] | 0) + -48 | 0;
  } while (i2 >>> 0 < 10);
 } else i1 = 0;
 return i1 | 0;
}

function __ZSt9terminatev() {
 var i1 = 0;
 i1 = ___cxa_get_globals_fast() | 0;
 if (i1 | 0) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (i1 | 0) if ((HEAP32[i1 + 48 >> 2] & -256 | 0) == 1126902528 ? (HEAP32[i1 + 48 + 4 >> 2] | 0) == 1129074247 : 0) __ZSt11__terminatePFvvE(HEAP32[i1 + 12 >> 2] | 0);
 }
 __ZSt11__terminatePFvvE(__ZSt13get_terminatev() | 0);
}

function ___cxa_can_catch(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 i1 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 7](i1, i2, i4) | 0;
 if (i1) HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i4;
 return i1 & 1 | 0;
}

function _fmt_x(i2, i3, i1, i4) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 if (!((i2 | 0) == 0 & (i3 | 0) == 0)) do {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = HEAPU8[6739 + (i2 & 15) >> 0] | 0 | i4;
  i2 = _bitshift64Lshr(i2 | 0, i3 | 0, 4) | 0;
  i3 = tempRet0;
 } while (!((i2 | 0) == 0 & (i3 | 0) == 0));
 return i1 | 0;
}

function __Z19patchWithoutChangesv() {
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = HEAP32[2385] | 0;
 i2 = HEAP32[2386] | 0;
 i3 = 100;
 do {
  i3 = i3 + -1 | 0;
  __ZN6asmdom5patchEPNS_5VNodeES1_(i1, i2);
  i2 = HEAP32[2385] | 0;
  i1 = HEAP32[2386] | 0;
  HEAP32[2385] = i1;
  HEAP32[2386] = i2;
 } while ((i3 | 0) != 0);
 return;
}

function __Z17patchWithAdditionv() {
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = HEAP32[2389] | 0;
 i2 = HEAP32[2390] | 0;
 i3 = 100;
 do {
  i3 = i3 + -1 | 0;
  __ZN6asmdom5patchEPNS_5VNodeES1_(i1, i2);
  i2 = HEAP32[2389] | 0;
  i1 = HEAP32[2390] | 0;
  HEAP32[2389] = i1;
  HEAP32[2390] = i2;
 } while ((i3 | 0) != 0);
 return;
}

function __Z16patchWithChangesv() {
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = HEAP32[2387] | 0;
 i2 = HEAP32[2388] | 0;
 i3 = 100;
 do {
  i3 = i3 + -1 | 0;
  __ZN6asmdom5patchEPNS_5VNodeES1_(i1, i2);
  i2 = HEAP32[2387] | 0;
  i1 = HEAP32[2388] | 0;
  HEAP32[2387] = i1;
  HEAP32[2388] = i2;
 } while ((i3 | 0) != 0);
 return;
}

function _sn_write(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0;
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 i4 = (HEAP32[i1 + 16 >> 2] | 0) - i5 | 0;
 i4 = i4 >>> 0 > i2 >>> 0 ? i2 : i4;
 _memcpy(i5 | 0, i3 | 0, i4 | 0) | 0;
 HEAP32[i1 + 20 >> 2] = (HEAP32[i1 + 20 >> 2] | 0) + i4;
 return i2 | 0;
}

function __Znwj(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (i1 | 0) == 0 ? 1 : i1;
 i1 = _malloc(i2) | 0;
 L1 : do if (!i1) do {
  i1 = __ZSt15get_new_handlerv() | 0;
  if (!i1) {
   i1 = 0;
   break L1;
  }
  FUNCTION_TABLE_v[i1 & 15]();
  i1 = _malloc(i2) | 0;
 } while (!(i1 | 0)); while (0);
 return i1 | 0;
}

function __ZNKSt3__212_GLOBAL__N_114initial_stringINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiLb0EEclEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i1, 10);
 return;
}

function _fmt_o(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 if (!((i2 | 0) == 0 & (i3 | 0) == 0)) do {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = i2 & 7 | 48;
  i2 = _bitshift64Lshr(i2 | 0, i3 | 0, 3) | 0;
  i3 = tempRet0;
 } while (!((i2 | 0) == 0 & (i3 | 0) == 0));
 return i1 | 0;
}

function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i5 | 0) | 0;
 STACKTOP = i5;
 return (tempRet0 = HEAP32[i5 + 4 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0;
}

function __ZNSt3__218__libcpp_refstringD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i1 = __ZNSt3__215__refstring_imp12_GLOBAL__N_113rep_from_dataEPKc_366(HEAP32[i1 >> 2] | 0) | 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i2 + -1;
 if ((i2 + -1 | 0) < 0) __ZdlPv(i1);
 return;
}

function __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(i2, i1, i3) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 + 4 >> 2] | 0) == (i1 | 0)) if ((HEAP32[i2 + 28 >> 2] | 0) != 1) HEAP32[i2 + 28 >> 2] = i3;
 return;
}

function ___cxa_get_globals_fast() {
 var i1 = 0, i2 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (!(_pthread_once(10128, 9) | 0)) {
  i2 = _pthread_getspecific(HEAP32[2533] | 0) | 0;
  STACKTOP = i1;
  return i2 | 0;
 } else _abort_message(8936, i1);
 return 0;
}

function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 _free(i1);
 if (!(_pthread_setspecific(HEAP32[2533] | 0, 0) | 0)) {
  STACKTOP = i2;
  return;
 } else _abort_message(9035, i2);
}

function ___stdio_close(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i1 = _dummy_570(HEAP32[i1 + 60 >> 2] | 0) | 0;
 HEAP32[i2 >> 2] = i1;
 i1 = ___syscall_ret(___syscall6(6, i2 | 0) | 0) | 0;
 STACKTOP = i2;
 return i1 | 0;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc(i1) {
 i1 = i1 | 0;
 return __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj(i1, 2575, __ZNSt3__211char_traitsIcE6lengthEPKc() | 0) | 0;
}

function dynCall_viiiiii(i7, i1, i2, i3, i4, i5, i6) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiiii[i7 & 3](i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}

function _bitshift64Shl(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 << i1 | (i3 & (1 << i1) - 1 << 32 - i1) >>> 32 - i1;
  return i3 << i1;
 }
 tempRet0 = i3 << i1 - 32;
 return 0;
}

function _snprintf(i3, i2, i1, i4) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i1 >> 2] = i4;
 i4 = _vsnprintf(i3, i2, i1) | 0;
 STACKTOP = i1;
 return i4 | 0;
}

function _bitshift64Lshr(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 >>> i1;
  return i3 >>> i1 | (i2 & (1 << i1) - 1) << 32 - i1;
 }
 tempRet0 = 0;
 return i2 >>> i1 - 32 | 0;
}

function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var i1 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (!(_pthread_key_create(10132, 15) | 0)) {
  STACKTOP = i1;
  return;
 } else _abort_message(8985, i1);
}

function runPostSets() {}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i4 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i4, i1 - i3 >>> 0 | 0) | 0;
}

function __ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 return __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i2, i3) | 0;
}

function dynCall_viiiii(i6, i1, i2, i3, i4, i5) {
 i6 = i6 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiiii[i6 & 3](i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}

function _abort_message(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i3 >> 2] = i2;
 _vfprintf(1560, i1, i3) | 0;
 _fputc();
 _abort();
}

function ___DOUBLE_BITS_685(d1) {
 d1 = +d1;
 var i2 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 tempRet0 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 return i2 | 0;
}

function ___strdup(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = (_strlen(i3) | 0) + 1 | 0;
 i1 = _malloc(i2) | 0;
 if (!i1) i1 = 0; else _memcpy(i1 | 0, i3 | 0, i2 | 0) | 0;
 return i1 | 0;
}

function ___lctrans_impl(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 if (!i1) i1 = 0; else i1 = ___mo_lookup(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, i2) | 0;
 return (i1 | 0 ? i1 : i2) | 0;
}

function dynCall_iiiii(i5, i1, i2, i3, i4) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiiii[i5 & 1](i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return (tempRet0 = i2 + i4 + (i1 + i3 >>> 0 >>> 0 < i1 >>> 0 | 0) >>> 0, i1 + i3 >>> 0 | 0) | 0;
}

function dynCall_viiii(i5, i1, i2, i3, i4) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viiii[i5 & 7](i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}

function __ZNSt3__211char_traitsIcE7compareEPKcS3_j(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 if (!i1) i1 = 0; else i1 = _memcmp(i2, i3, i1) | 0;
 return i1 | 0;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 >> 2] | 0);
 return;
}

function __ZNSt3__211char_traitsIcE4moveEPcPKcj(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 if (i1 | 0) _memmove(i2 | 0, i3 | 0, i1 | 0) | 0;
 return i2 | 0;
}

function __ZSt11__terminatePFvvE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
 _abort_message(9088, i2);
}

function __ZNSt3__211char_traitsIcE4copyEPcPKcj(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 if (i1 | 0) _memcpy(i2 | 0, i3 | 0, i1 | 0) | 0;
 return i2 | 0;
}

function __ZNSt11logic_errorC2EPKc(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i2 >> 2] = 2284;
 __ZNSt3__218__libcpp_refstringC2EPKc(i2 + 4 | 0, i1);
 return;
}

function dynCall_iiii(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iiii[i4 & 7](i1 | 0, i2 | 0, i3 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 15 & -16;
 return i2 | 0;
}

function ___cxa_guard_acquire(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 >> 0] | 0) == 1) i1 = 0; else {
  HEAP8[i1 >> 0] = 1;
  i1 = 1;
 }
 return i1 | 0;
}

function __ZNSt3__211char_traitsIcE6assignEPcjc(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 if (i1 | 0) _memset(i2 | 0, 0, i1 | 0) | 0;
 return i2 | 0;
}

function _swapc(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 i3 = _llvm_bswap_i32(i2 | 0) | 0;
 return ((i1 | 0) == 0 ? i2 : i3) | 0;
}

function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
}

function ___cxa_is_pointer_type(i1) {
 i1 = i1 | 0;
 if (!i1) i1 = 0; else i1 = (___dynamic_cast(i1, 1352) | 0) != 0;
 return i1 & 1 | 0;
}

function __ZNSt11logic_errorD2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2284;
 __ZNSt3__218__libcpp_refstringD2Ev(i1 + 4 | 0);
 return;
}

function _llvm_bswap_i32(i1) {
 i1 = i1 | 0;
 return (i1 & 255) << 24 | (i1 >> 8 & 255) << 16 | (i1 >> 16 & 255) << 8 | i1 >>> 24 | 0;
}

function __ZNKSt11logic_error4whatEv(i1) {
 i1 = i1 | 0;
 return __ZNKSt3__218__libcpp_refstring5c_strEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
}

function dynCall_iii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_iii[i3 & 0](i1 | 0, i2 | 0) | 0;
}

function b7(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(7);
}

function _out(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 if (!(HEAP32[i1 >> 2] & 32)) ___fwritex(i3, i2, i1);
 return;
}

function ___syscall_ret(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 > 4294963200) {
  HEAP32[2535] = 0 - i1;
  i1 = -1;
 }
 return i1 | 0;
}

function __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (i1 | 0) == (i2 | 0) | 0;
}

function __ZNSt3__215__refstring_imp12_GLOBAL__N_113data_from_repEPNS1_9_Rep_baseE(i1) {
 i1 = i1 | 0;
 return i1 + 12 | 0;
}

function dynCall_vii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[i3 & 0](i1 | 0, i2 | 0);
}

function _wctomb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!i1) i1 = 0; else i1 = _wcrtomb(i1, i2) | 0;
 return i1 | 0;
}

function __ZN10emscripten8internal7InvokerIvJEE6invokeEPFvvE(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
 return;
}

function __ZNSt3__211char_traitsIcE6assignERcRKc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 >> 0] = i2;
 return;
}

function __ZNSt3__215__refstring_imp12_GLOBAL__N_113rep_from_dataEPKc_366(i1) {
 i1 = i1 | 0;
 return i1 + -12 | 0;
}

function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!__THREW__) {
  __THREW__ = i1;
  threwValue = i2;
 }
}

function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}

function _tolower(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (_isupper(i1) | 0) == 0;
 return (i2 ? i1 : i1 | 32) | 0;
}

function __ZSt15get_new_handlerv() {
 var i1 = 0;
 i1 = HEAP32[2534] | 0;
 HEAP32[2534] = i1 + 0;
 return i1 | 0;
}

function __ZSt13get_terminatev() {
 var i1 = 0;
 i1 = HEAP32[548] | 0;
 HEAP32[548] = i1 + 0;
 return i1 | 0;
}

function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
 return 0;
}

function ___clang_call_terminate(i1) {
 i1 = i1 | 0;
 ___cxa_begin_catch(i1 | 0) | 0;
 __ZSt9terminatev();
}

function __ZNSt12out_of_rangeD0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt11logic_errorD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function __ZNSt12length_errorD0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt11logic_errorD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function __ZNSt11logic_errorD0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt11logic_errorD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function dynCall_ii(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[i2 & 3](i1 | 0) | 0;
}

function establishStackSpace(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 STACKTOP = i1;
 STACK_MAX = i2;
}

function __ZN10__cxxabiv123__fundamental_type_infoD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}

function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function dynCall_vi(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 FUNCTION_TABLE_vi[i2 & 15](i1 | 0);
}

function ___lctrans(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ___lctrans_impl(i2, i1) | 0;
}

function __ZN10__cxxabiv120__si_class_type_infoD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function ___getTypeName(i1) {
 i1 = i1 | 0;
 return ___strdup(HEAP32[i1 + 4 >> 2] | 0) | 0;
}

function __ZN10__cxxabiv117__class_type_infoD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}

function __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv() {
 _abort();
}

function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv() {
 _abort();
}

function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv() {
 _abort();
}

function __ZNSt3__217bad_function_callD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNKSt3__218__libcpp_refstring5c_strEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}

function __ZNK10__cxxabiv116__shim_type_info5noop2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNK10__cxxabiv116__shim_type_info5noop1Ev(i1) {
 i1 = i1 | 0;
 return;
}

function _frexpl(d2, i1) {
 d2 = +d2;
 i1 = i1 | 0;
 return +(+_frexp(d2, i1));
}

function _strerror(i1) {
 i1 = i1 | 0;
 return ___strerror_l(i1, 10104) | 0;
}

function _isupper(i1) {
 i1 = i1 | 0;
 return (i1 + -65 | 0) >>> 0 < 26 | 0;
}

function __ZN10__cxxabiv116__shim_type_infoD2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}

function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
}

function __ZNKSt9exception4whatEv(i1) {
 i1 = i1 | 0;
 return 9128;
}

function __ZNSt3__211char_traitsIcE6lengthEPKc() {
 return 26;
}

function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
}

function __ZNSt9exceptionD2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}

function __ZdlPv(i1) {
 i1 = i1 | 0;
 _free(i1);
 return;
}

function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}

function _emscripten_get_global_libc() {
 return 10064;
}

function _dummy_570(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}

function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}

function getTempRet0() {
 return tempRet0 | 0;
}

function stackSave() {
 return STACKTOP | 0;
}

function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}

function b5() {
 abort(5);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,_sn_write,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,b0,b0];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib];
var FUNCTION_TABLE_vi = [b2,__ZNSt9exceptionD2Ev,__ZNSt3__217bad_function_callD0Ev,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt11logic_errorD2Ev,__ZNSt11logic_errorD0Ev,__ZNSt12length_errorD0Ev,__ZNSt12out_of_rangeD0Ev,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,__ZN10emscripten8internal7InvokerIvJEE6invokeEPFvvE,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv];
var FUNCTION_TABLE_vii = [b3];
var FUNCTION_TABLE_ii = [b4,__ZNKSt9exception4whatEv,___stdio_close,__ZNKSt11logic_error4whatEv];
var FUNCTION_TABLE_v = [b5,__ZL25default_terminate_handlerv,__Z6createv,__Z24patchWithoutChangesSetupv,__Z19patchWithoutChangesv,__Z21patchWithChangesSetupv,__Z16patchWithChangesv,__Z22patchWithAdditionSetupv,__Z17patchWithAdditionv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b5,b5,b5,b5,b5,b5];
var FUNCTION_TABLE_iiiii = [b6,__ZN10emscripten8internal7InvokerINS_3valEJRKjRKNSt3__212basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEES2_EE6invokeEPFS2_S4_SD_S2_EjPNS0_11BindingTypeISB_EUt_EPNS0_7_EM_VALE];
var FUNCTION_TABLE_viiiiii = [b7,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib];
var FUNCTION_TABLE_iii = [b8];
var FUNCTION_TABLE_viiii = [b9,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZN6asmdom16functionCallbackERKjRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEN10emscripten3valE,b9,b9,b9];

  return { _llvm_bswap_i32: _llvm_bswap_i32, _main: _main, _i64Subtract: _i64Subtract, ___udivdi3: ___udivdi3, setThrew: setThrew, _bitshift64Lshr: _bitshift64Lshr, _bitshift64Shl: _bitshift64Shl, dynCall_viiii: dynCall_viiii, dynCall_iiiii: dynCall_iiiii, ___cxa_is_pointer_type: ___cxa_is_pointer_type, dynCall_iii: dynCall_iii, _memset: _memset, _sbrk: _sbrk, _memcpy: _memcpy, stackAlloc: stackAlloc, dynCall_vii: dynCall_vii, ___uremdi3: ___uremdi3, dynCall_vi: dynCall_vi, __GLOBAL__sub_I_asm_dom_cpp: __GLOBAL__sub_I_asm_dom_cpp, getTempRet0: getTempRet0, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, ___udivmoddi4: ___udivmoddi4, setTempRet0: setTempRet0, _i64Add: _i64Add, dynCall_iiii: dynCall_iiii, _emscripten_get_global_libc: _emscripten_get_global_libc, ___getTypeName: ___getTypeName, dynCall_ii: dynCall_ii, __GLOBAL__sub_I_index_cpp: __GLOBAL__sub_I_index_cpp, stackSave: stackSave, dynCall_viiiii: dynCall_viiiii, ___cxa_can_catch: ___cxa_can_catch, _free: _free, runPostSets: runPostSets, dynCall_viiiiii: dynCall_viiiiii, establishStackSpace: establishStackSpace, _memmove: _memmove, stackRestore: stackRestore, _malloc: _malloc, _emscripten_replace_memory: _emscripten_replace_memory, dynCall_v: dynCall_v };
})
;