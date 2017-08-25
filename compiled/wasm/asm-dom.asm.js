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
  var invoke_i=env.invoke_i;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiiiiiii=env.invoke_iiiiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var floatReadValueFromPointer=env.floatReadValueFromPointer;
  var simpleReadValueFromPointer=env.simpleReadValueFromPointer;
  var throwInternalError=env.throwInternalError;
  var get_first_emval=env.get_first_emval;
  var getLiveInheritedInstances=env.getLiveInheritedInstances;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var ClassHandle=env.ClassHandle;
  var _emscripten_asm_const_ii=env._emscripten_asm_const_ii;
  var getShiftFromSize=env.getShiftFromSize;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var runDestructor=env.runDestructor;
  var throwInstanceAlreadyDeleted=env.throwInstanceAlreadyDeleted;
  var __embind_register_std_string=env.__embind_register_std_string;
  var init_RegisteredPointer=env.init_RegisteredPointer;
  var __embind_register_class_function=env.__embind_register_class_function;
  var flushPendingDeletes=env.flushPendingDeletes;
  var makeClassHandle=env.makeClassHandle;
  var whenDependentTypesAreResolved=env.whenDependentTypesAreResolved;
  var __embind_register_class_constructor=env.__embind_register_class_constructor;
  var init_ClassHandle=env.init_ClassHandle;
  var ___syscall140=env.___syscall140;
  var ClassHandle_clone=env.ClassHandle_clone;
  var ___syscall146=env.___syscall146;
  var RegisteredClass=env.RegisteredClass;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var embind_init_charCodes=env.embind_init_charCodes;
  var _llvm_cttz_i32=env._llvm_cttz_i32;
  var ___setErrNo=env.___setErrNo;
  var __embind_register_bool=env.__embind_register_bool;
  var ___resumeException=env.___resumeException;
  var createNamedFunction=env.createNamedFunction;
  var ___syscall91=env.___syscall91;
  var __emval_take_value=env.__emval_take_value;
  var __emval_decref=env.__emval_decref;
  var _pthread_once=env._pthread_once;
  var __embind_register_class=env.__embind_register_class;
  var constNoSmartPtrRawPointerToWireType=env.constNoSmartPtrRawPointerToWireType;
  var heap32VectorToArray=env.heap32VectorToArray;
  var ClassHandle_delete=env.ClassHandle_delete;
  var RegisteredPointer_destructor=env.RegisteredPointer_destructor;
  var ___syscall6=env.___syscall6;
  var ensureOverloadTable=env.ensureOverloadTable;
  var __embind_register_emval=env.__embind_register_emval;
  var new_=env.new_;
  var downcastPointer=env.downcastPointer;
  var replacePublicSymbol=env.replacePublicSymbol;
  var init_embind=env.init_embind;
  var ClassHandle_deleteLater=env.ClassHandle_deleteLater;
  var RegisteredPointer_deleteObject=env.RegisteredPointer_deleteObject;
  var ClassHandle_isDeleted=env.ClassHandle_isDeleted;
  var __embind_register_integer=env.__embind_register_integer;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var ___buildEnvironment=env.___buildEnvironment;
  var _embind_repr=env._embind_repr;
  var _pthread_getspecific=env._pthread_getspecific;
  var RegisteredPointer=env.RegisteredPointer;
  var craftInvokerFunction=env.craftInvokerFunction;
  var _getenv=env._getenv;
  var runDestructors=env.runDestructors;
  var requireRegisteredType=env.requireRegisteredType;
  var makeLegalFunctionName=env.makeLegalFunctionName;
  var _pthread_key_create=env._pthread_key_create;
  var upcastPointer=env.upcastPointer;
  var init_emval=env.init_emval;
  var shallowCopyInternalPointer=env.shallowCopyInternalPointer;
  var _emscripten_asm_const_iii=env._emscripten_asm_const_iii;
  var nonConstNoSmartPtrRawPointerToWireType=env.nonConstNoSmartPtrRawPointerToWireType;
  var genericPointerToWireType=env.genericPointerToWireType;
  var _abort=env._abort;
  var throwBindingError=env.throwBindingError;
  var getTypeName=env.getTypeName;
  var exposePublicSymbol=env.exposePublicSymbol;
  var RegisteredPointer_fromWireType=env.RegisteredPointer_fromWireType;
  var ___lock=env.___lock;
  var __embind_register_memory_view=env.__embind_register_memory_view;
  var getInheritedInstance=env.getInheritedInstance;
  var setDelayFunction=env.setDelayFunction;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var extendError=env.extendError;
  var __embind_register_void=env.__embind_register_void;
  var __embind_register_function=env.__embind_register_function;
  var RegisteredPointer_getPointee=env.RegisteredPointer_getPointee;
  var __emval_register=env.__emval_register;
  var __embind_register_std_wstring=env.__embind_register_std_wstring;
  var ClassHandle_isAliasOf=env.ClassHandle_isAliasOf;
  var __emval_incref=env.__emval_incref;
  var throwUnboundTypeError=env.throwUnboundTypeError;
  var readLatin1String=env.readLatin1String;
  var getBasestPointer=env.getBasestPointer;
  var getInheritedInstanceCount=env.getInheritedInstanceCount;
  var __embind_register_float=env.__embind_register_float;
  var integerReadValueFromPointer=env.integerReadValueFromPointer;
  var ___unlock=env.___unlock;
  var _pthread_setspecific=env._pthread_setspecific;
  var _emscripten_asm_const_iiii=env._emscripten_asm_const_iiii;
  var registerType=env.registerType;
  var ___cxa_throw=env.___cxa_throw;
  var count_emval_handles=env.count_emval_handles;
  var requireFunction=env.requireFunction;
  var ___map_file=env.___map_file;
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
  i10 = HEAP32[2547] | 0;
  if (i10 >>> (i12 >>> 3) & 3 | 0) {
   i3 = 10228 + ((i10 >>> (i12 >>> 3) & 1 ^ 1) + (i12 >>> 3) << 1 << 2) | 0;
   i1 = HEAP32[i3 + 8 >> 2] | 0;
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i3 | 0) == (i2 | 0)) HEAP32[2547] = i10 & ~(1 << (i10 >>> (i12 >>> 3) & 1 ^ 1) + (i12 >>> 3)); else {
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
  i11 = HEAP32[2549] | 0;
  if (i12 >>> 0 > i11 >>> 0) {
   if (i10 >>> (i12 >>> 3) | 0) {
    i1 = i10 >>> (i12 >>> 3) << (i12 >>> 3) & (2 << (i12 >>> 3) | 0 - (2 << (i12 >>> 3)));
    i4 = ((i1 & 0 - i1) + -1 | 0) >>> (((i1 & 0 - i1) + -1 | 0) >>> 12 & 16);
    i5 = i4 >>> (i4 >>> 5 & 8) >>> (i4 >>> (i4 >>> 5 & 8) >>> 2 & 4);
    i5 = (i4 >>> 5 & 8 | ((i1 & 0 - i1) + -1 | 0) >>> 12 & 16 | i4 >>> (i4 >>> 5 & 8) >>> 2 & 4 | i5 >>> 1 & 2 | i5 >>> (i5 >>> 1 & 2) >>> 1 & 1) + (i5 >>> (i5 >>> 1 & 2) >>> (i5 >>> (i5 >>> 1 & 2) >>> 1 & 1)) | 0;
    i4 = HEAP32[10228 + (i5 << 1 << 2) + 8 >> 2] | 0;
    i1 = HEAP32[i4 + 8 >> 2] | 0;
    if ((10228 + (i5 << 1 << 2) | 0) == (i1 | 0)) {
     HEAP32[2547] = i10 & ~(1 << i5);
     i1 = i10 & ~(1 << i5);
    } else {
     HEAP32[i1 + 12 >> 2] = 10228 + (i5 << 1 << 2);
     HEAP32[10228 + (i5 << 1 << 2) + 8 >> 2] = i1;
     i1 = i10;
    }
    HEAP32[i4 + 4 >> 2] = i12 | 3;
    HEAP32[i4 + i12 + 4 >> 2] = (i5 << 3) - i12 | 1;
    HEAP32[i4 + i12 + ((i5 << 3) - i12) >> 2] = (i5 << 3) - i12;
    if (i11 | 0) {
     i3 = HEAP32[2552] | 0;
     if (!(i1 & 1 << (i11 >>> 3))) {
      HEAP32[2547] = i1 | 1 << (i11 >>> 3);
      i1 = 10228 + (i11 >>> 3 << 1 << 2) + 8 | 0;
      i2 = 10228 + (i11 >>> 3 << 1 << 2) | 0;
     } else {
      i1 = 10228 + (i11 >>> 3 << 1 << 2) + 8 | 0;
      i2 = HEAP32[10228 + (i11 >>> 3 << 1 << 2) + 8 >> 2] | 0;
     }
     HEAP32[i1 >> 2] = i3;
     HEAP32[i2 + 12 >> 2] = i3;
     HEAP32[i3 + 8 >> 2] = i2;
     HEAP32[i3 + 12 >> 2] = 10228 + (i11 >>> 3 << 1 << 2);
    }
    HEAP32[2549] = (i5 << 3) - i12;
    HEAP32[2552] = i4 + i12;
    i13 = i4 + 8 | 0;
    STACKTOP = i14;
    return i13 | 0;
   }
   i9 = HEAP32[2548] | 0;
   if (i9) {
    i2 = ((i9 & 0 - i9) + -1 | 0) >>> (((i9 & 0 - i9) + -1 | 0) >>> 12 & 16);
    i3 = i2 >>> (i2 >>> 5 & 8) >>> (i2 >>> (i2 >>> 5 & 8) >>> 2 & 4);
    i3 = HEAP32[10492 + ((i2 >>> 5 & 8 | ((i9 & 0 - i9) + -1 | 0) >>> 12 & 16 | i2 >>> (i2 >>> 5 & 8) >>> 2 & 4 | i3 >>> 1 & 2 | i3 >>> (i3 >>> 1 & 2) >>> 1 & 1) + (i3 >>> (i3 >>> 1 & 2) >>> (i3 >>> (i3 >>> 1 & 2) >>> 1 & 1)) << 2) >> 2] | 0;
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
      if ((i7 | 0) == (HEAP32[10492 + (i1 << 2) >> 2] | 0)) {
       HEAP32[10492 + (i1 << 2) >> 2] = i3;
       if (i2) {
        HEAP32[2548] = i9 & ~(1 << i1);
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
       i3 = HEAP32[2552] | 0;
       if (!(1 << (i11 >>> 3) & i10)) {
        HEAP32[2547] = 1 << (i11 >>> 3) | i10;
        i1 = 10228 + (i11 >>> 3 << 1 << 2) + 8 | 0;
        i2 = 10228 + (i11 >>> 3 << 1 << 2) | 0;
       } else {
        i1 = 10228 + (i11 >>> 3 << 1 << 2) + 8 | 0;
        i2 = HEAP32[10228 + (i11 >>> 3 << 1 << 2) + 8 >> 2] | 0;
       }
       HEAP32[i1 >> 2] = i3;
       HEAP32[i2 + 12 >> 2] = i3;
       HEAP32[i3 + 8 >> 2] = i2;
       HEAP32[i3 + 12 >> 2] = 10228 + (i11 >>> 3 << 1 << 2);
      }
      HEAP32[2549] = i8;
      HEAP32[2552] = i6;
     }
     i13 = i7 + 8 | 0;
     STACKTOP = i14;
     return i13 | 0;
    }
   }
  }
 } else if (i1 >>> 0 > 4294967231) i12 = -1; else {
  i12 = i1 + 11 & -8;
  i4 = HEAP32[2548] | 0;
  if (i4) {
   if (!((i1 + 11 | 0) >>> 8)) i9 = 0; else if (i12 >>> 0 > 16777215) i9 = 31; else {
    i9 = (i1 + 11 | 0) >>> 8 << ((((i1 + 11 | 0) >>> 8) + 1048320 | 0) >>> 16 & 8);
    i9 = 14 - ((i9 + 520192 | 0) >>> 16 & 4 | (((i1 + 11 | 0) >>> 8) + 1048320 | 0) >>> 16 & 8 | ((i9 << ((i9 + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) + (i9 << ((i9 + 520192 | 0) >>> 16 & 4) << (((i9 << ((i9 + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
    i9 = i12 >>> (i9 + 7 | 0) & 1 | i9 << 1;
   }
   i1 = HEAP32[10492 + (i9 << 2) >> 2] | 0;
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
     i1 = HEAP32[10492 + ((i11 >>> (i11 >>> 12 & 16) >>> 5 & 8 | i11 >>> 12 & 16 | i2 >>> 2 & 4 | i2 >>> (i2 >>> 2 & 4) >>> 1 & 2 | i1 >>> 1 & 1) + (i1 >>> (i1 >>> 1 & 1)) << 2) >> 2] | 0;
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
   if (i9) if (i7 >>> 0 < ((HEAP32[2549] | 0) - i12 | 0) >>> 0) {
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
     if ((i9 | 0) == (HEAP32[10492 + (i2 << 2) >> 2] | 0)) {
      HEAP32[10492 + (i2 << 2) >> 2] = i1;
      if (i3) {
       HEAP32[2548] = i4 & ~(1 << i2);
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
      i1 = HEAP32[2547] | 0;
      if (!(i1 & 1 << i3)) {
       HEAP32[2547] = i1 | 1 << i3;
       i1 = 10228 + (i3 << 1 << 2) + 8 | 0;
       i2 = 10228 + (i3 << 1 << 2) | 0;
      } else {
       i1 = 10228 + (i3 << 1 << 2) + 8 | 0;
       i2 = HEAP32[10228 + (i3 << 1 << 2) + 8 >> 2] | 0;
      }
      HEAP32[i1 >> 2] = i8;
      HEAP32[i2 + 12 >> 2] = i8;
      HEAP32[i8 + 8 >> 2] = i2;
      HEAP32[i8 + 12 >> 2] = 10228 + (i3 << 1 << 2);
      break;
     }
     i1 = i7 >>> 8;
     if (!i1) i1 = 0; else if (i7 >>> 0 > 16777215) i1 = 31; else {
      i13 = i1 << ((i1 + 1048320 | 0) >>> 16 & 8) << (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4);
      i1 = 14 - (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4 | (i1 + 1048320 | 0) >>> 16 & 8 | (i13 + 245760 | 0) >>> 16 & 2) + (i13 << ((i13 + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
      i1 = i7 >>> (i1 + 7 | 0) & 1 | i1 << 1;
     }
     i3 = 10492 + (i1 << 2) | 0;
     HEAP32[i8 + 28 >> 2] = i1;
     HEAP32[i8 + 16 + 4 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 0;
     i2 = 1 << i1;
     if (!(i2 & i4)) {
      HEAP32[2548] = i2 | i4;
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
 i3 = HEAP32[2549] | 0;
 if (i3 >>> 0 >= i12 >>> 0) {
  i2 = i3 - i12 | 0;
  i1 = HEAP32[2552] | 0;
  if (i2 >>> 0 > 15) {
   i13 = i1 + i12 | 0;
   HEAP32[2552] = i13;
   HEAP32[2549] = i2;
   HEAP32[i13 + 4 >> 2] = i2 | 1;
   HEAP32[i13 + i2 >> 2] = i2;
   HEAP32[i1 + 4 >> 2] = i12 | 3;
  } else {
   HEAP32[2549] = 0;
   HEAP32[2552] = 0;
   HEAP32[i1 + 4 >> 2] = i3 | 3;
   HEAP32[i1 + i3 + 4 >> 2] = HEAP32[i1 + i3 + 4 >> 2] | 1;
  }
  i13 = i1 + 8 | 0;
  STACKTOP = i14;
  return i13 | 0;
 }
 i5 = HEAP32[2550] | 0;
 if (i5 >>> 0 > i12 >>> 0) {
  i10 = i5 - i12 | 0;
  HEAP32[2550] = i10;
  i13 = HEAP32[2553] | 0;
  i11 = i13 + i12 | 0;
  HEAP32[2553] = i11;
  HEAP32[i11 + 4 >> 2] = i10 | 1;
  HEAP32[i13 + 4 >> 2] = i12 | 3;
  i13 = i13 + 8 | 0;
  STACKTOP = i14;
  return i13 | 0;
 }
 if (!(HEAP32[2665] | 0)) {
  HEAP32[2667] = 4096;
  HEAP32[2666] = 4096;
  HEAP32[2668] = -1;
  HEAP32[2669] = -1;
  HEAP32[2670] = 0;
  HEAP32[2658] = 0;
  HEAP32[i14 >> 2] = i14 & -16 ^ 1431655768;
  HEAP32[2665] = i14 & -16 ^ 1431655768;
  i1 = 4096;
 } else i1 = HEAP32[2667] | 0;
 i6 = i12 + 48 | 0;
 i7 = i12 + 47 | 0;
 i9 = i1 + i7 | 0;
 i8 = 0 - i1 | 0;
 if ((i9 & i8) >>> 0 <= i12 >>> 0) {
  i13 = 0;
  STACKTOP = i14;
  return i13 | 0;
 }
 i1 = HEAP32[2657] | 0;
 if (i1 | 0) {
  i11 = HEAP32[2655] | 0;
  if ((i11 + (i9 & i8) | 0) >>> 0 <= i11 >>> 0 ? 1 : (i11 + (i9 & i8) | 0) >>> 0 > i1 >>> 0) {
   i13 = 0;
   STACKTOP = i14;
   return i13 | 0;
  }
 }
 L167 : do if (!(HEAP32[2658] & 4)) {
  i3 = HEAP32[2553] | 0;
  L169 : do if (!i3) i13 = 118; else {
   i1 = 10636;
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
    i5 = HEAP32[2666] | 0;
    i5 = ((i5 + -1 & i3 | 0) == 0 ? 0 : (i5 + -1 + i3 & 0 - i5) - i3 | 0) + (i9 & i8) | 0;
    i1 = HEAP32[2655] | 0;
    if (i5 >>> 0 > i12 >>> 0 & i5 >>> 0 < 2147483647) {
     i2 = HEAP32[2657] | 0;
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
   i1 = HEAP32[2667] | 0;
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
  HEAP32[2658] = HEAP32[2658] | 4;
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
  i1 = (HEAP32[2655] | 0) + i5 | 0;
  HEAP32[2655] = i1;
  if (i1 >>> 0 > (HEAP32[2656] | 0) >>> 0) HEAP32[2656] = i1;
  i9 = HEAP32[2553] | 0;
  do if (!i9) {
   i13 = HEAP32[2551] | 0;
   if ((i13 | 0) == 0 | i7 >>> 0 < i13 >>> 0) HEAP32[2551] = i7;
   HEAP32[2659] = i7;
   HEAP32[2660] = i5;
   HEAP32[2662] = 0;
   HEAP32[2556] = HEAP32[2665];
   HEAP32[2555] = -1;
   i1 = 0;
   do {
    i13 = 10228 + (i1 << 1 << 2) | 0;
    HEAP32[i13 + 12 >> 2] = i13;
    HEAP32[i13 + 8 >> 2] = i13;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 32);
   i13 = i7 + 8 | 0;
   i13 = (i13 & 7 | 0) == 0 ? 0 : 0 - i13 & 7;
   i11 = i7 + i13 | 0;
   i13 = i5 + -40 - i13 | 0;
   HEAP32[2553] = i11;
   HEAP32[2550] = i13;
   HEAP32[i11 + 4 >> 2] = i13 | 1;
   HEAP32[i11 + i13 + 4 >> 2] = 40;
   HEAP32[2554] = HEAP32[2669];
  } else {
   i1 = 10636;
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
    i13 = (HEAP32[2550] | 0) + (i5 - i11) | 0;
    HEAP32[2553] = i9 + i11;
    HEAP32[2550] = i13;
    HEAP32[i9 + i11 + 4 >> 2] = i13 | 1;
    HEAP32[i9 + i11 + i13 + 4 >> 2] = 40;
    HEAP32[2554] = HEAP32[2669];
    break;
   }
   if (i7 >>> 0 < (HEAP32[2551] | 0) >>> 0) HEAP32[2551] = i7;
   i2 = i7 + i5 | 0;
   i1 = 10636;
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
     i13 = (HEAP32[2550] | 0) + i8 | 0;
     HEAP32[2550] = i13;
     HEAP32[2553] = i10;
     HEAP32[i10 + 4 >> 2] = i13 | 1;
    } else {
     if ((i1 | 0) == (HEAP32[2552] | 0)) {
      i13 = (HEAP32[2549] | 0) + i8 | 0;
      HEAP32[2549] = i13;
      HEAP32[2552] = i10;
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
        HEAP32[2547] = HEAP32[2547] & ~(1 << (i7 >>> 3));
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
       do if ((i1 | 0) == (HEAP32[10492 + (i3 << 2) >> 2] | 0)) {
        HEAP32[10492 + (i3 << 2) >> 2] = i2;
        if (!i4) break;
        HEAP32[2548] = HEAP32[2548] & ~(1 << i3);
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
      i1 = HEAP32[2547] | 0;
      if (!(i1 & 1 << i3)) {
       HEAP32[2547] = i1 | 1 << i3;
       i1 = 10228 + (i3 << 1 << 2) + 8 | 0;
       i2 = 10228 + (i3 << 1 << 2) | 0;
      } else {
       i1 = 10228 + (i3 << 1 << 2) + 8 | 0;
       i2 = HEAP32[10228 + (i3 << 1 << 2) + 8 >> 2] | 0;
      }
      HEAP32[i1 >> 2] = i10;
      HEAP32[i2 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i2;
      HEAP32[i10 + 12 >> 2] = 10228 + (i3 << 1 << 2);
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
     i4 = 10492 + (i2 << 2) | 0;
     HEAP32[i10 + 28 >> 2] = i2;
     HEAP32[i10 + 16 + 4 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 0;
     i1 = HEAP32[2548] | 0;
     i3 = 1 << i2;
     if (!(i1 & i3)) {
      HEAP32[2548] = i1 | i3;
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
   i2 = 10636;
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
   HEAP32[2553] = i13;
   HEAP32[2550] = i1;
   HEAP32[i13 + 4 >> 2] = i1 | 1;
   HEAP32[i13 + i1 + 4 >> 2] = 40;
   HEAP32[2554] = HEAP32[2669];
   HEAP32[i6 + 4 >> 2] = 27;
   HEAP32[i6 + 8 >> 2] = HEAP32[2659];
   HEAP32[i6 + 8 + 4 >> 2] = HEAP32[2660];
   HEAP32[i6 + 8 + 8 >> 2] = HEAP32[2661];
   HEAP32[i6 + 8 + 12 >> 2] = HEAP32[2662];
   HEAP32[2659] = i7;
   HEAP32[2660] = i5;
   HEAP32[2662] = 0;
   HEAP32[2661] = i6 + 8;
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
     i3 = 10228 + ((i6 - i9 | 0) >>> 3 << 1 << 2) | 0;
     i1 = HEAP32[2547] | 0;
     if (!(i1 & 1 << ((i6 - i9 | 0) >>> 3))) {
      HEAP32[2547] = i1 | 1 << ((i6 - i9 | 0) >>> 3);
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
    i4 = 10492 + (i2 << 2) | 0;
    HEAP32[i9 + 28 >> 2] = i2;
    HEAP32[i9 + 20 >> 2] = 0;
    HEAP32[i9 + 16 >> 2] = 0;
    i1 = HEAP32[2548] | 0;
    i3 = 1 << i2;
    if (!(i1 & i3)) {
     HEAP32[2548] = i1 | i3;
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
  i1 = HEAP32[2550] | 0;
  if (i1 >>> 0 > i12 >>> 0) {
   i10 = i1 - i12 | 0;
   HEAP32[2550] = i10;
   i13 = HEAP32[2553] | 0;
   i11 = i13 + i12 | 0;
   HEAP32[2553] = i11;
   HEAP32[i11 + 4 >> 2] = i10 | 1;
   HEAP32[i13 + 4 >> 2] = i12 | 3;
   i13 = i13 + 8 | 0;
   STACKTOP = i14;
   return i13 | 0;
  }
 }
 HEAP32[2702] = 12;
 i13 = 0;
 STACKTOP = i14;
 return i13 | 0;
}

function __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i6, i26) {
 i6 = i6 | 0;
 i26 = i26 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i27 = 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = HEAP32[i6 + 48 >> 2] | 0;
 HEAP32[i26 + 48 >> 2] = i5;
 _emscripten_asm_const_iiii(6, i6 | 0, i26 | 0, i5 | 0) | 0;
 __ZN6asmdom9diffAttrsEPNS_5VNodeES1_(i6, i26);
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
     i1 = HEAP32[i26 + 48 >> 2] | 0;
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
    i1 = HEAP32[i26 + 48 >> 2] | 0;
    i2 = i26 + 24 | 0;
    break;
   }
   while (1) {
    i2 = i2 + -1 | 0;
    i3 = i3 + 1 | 0;
    if (!i2) break;
    i1 = i1 + 1 | 0;
    if ((HEAP8[i3 >> 0] | 0) != (HEAP8[i1 >> 0] | 0)) {
     i18 = 114;
     break L7;
    }
   }
   STACKTOP = i27;
   return;
  } else i18 = 114; while (0);
  do if ((i18 | 0) == 114) {
   i1 = HEAP32[i26 + 48 >> 2] | 0;
   if (i5 << 24 >> 24 < 0) {
    i2 = HEAP32[i26 + 24 >> 2] | 0;
    break;
   } else {
    i2 = i26 + 24 | 0;
    break;
   }
  } while (0);
  _emscripten_asm_const_iii(14, i1 | 0, i2 | 0) | 0;
  STACKTOP = i27;
  return;
 }
 i5 = HEAP32[i26 + 52 >> 2] | 0;
 i4 = HEAP32[i26 + 56 >> 2] | 0;
 i2 = HEAP32[i6 + 56 >> 2] | 0;
 i3 = HEAP32[i6 + 52 >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  if ((i3 | 0) != (i2 | 0)) {
   _emscripten_asm_const_ii(12, HEAP32[(HEAP32[i3 >> 2] | 0) + 48 >> 2] | 0) | 0;
   if (!((i2 - i3 >> 2) + -1 | 0)) {
    STACKTOP = i27;
    return;
   } else i1 = 1;
   do {
    _emscripten_asm_const_ii(12, HEAP32[(HEAP32[(HEAP32[i6 + 52 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 48 >> 2] | 0) | 0;
    i1 = i1 + 1 | 0;
   } while (i1 >>> 0 <= ((i2 - i3 >> 2) + -1 | 0) >>> 0);
   STACKTOP = i27;
   return;
  }
  i1 = HEAP8[i6 + 24 + 11 >> 0] | 0;
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i6 + 28 >> 2] | 0; else i1 = i1 & 255;
  if (!i1) {
   STACKTOP = i27;
   return;
  }
  _emscripten_asm_const_ii(13, HEAP32[i26 + 48 >> 2] | 0) | 0;
  STACKTOP = i27;
  return;
 }
 if ((i3 | 0) == (i2 | 0)) {
  i1 = HEAP8[i6 + 24 + 11 >> 0] | 0;
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i6 + 28 >> 2] | 0; else i1 = i1 & 255;
  if (!i1) {
   i1 = i4;
   i2 = i5;
   i3 = i5;
  } else {
   _emscripten_asm_const_ii(13, HEAP32[i26 + 48 >> 2] | 0) | 0;
   i3 = HEAP32[i26 + 52 >> 2] | 0;
   i1 = HEAP32[i26 + 56 >> 2] | 0;
   i2 = i3;
  }
  i4 = HEAP32[i26 + 48 >> 2] | 0;
  i2 = (i1 - i2 >> 2) + -1 | 0;
  _emscripten_asm_const_iiii(11, i4 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[i3 >> 2] | 0) | 0, 0) | 0;
  if (!i2) {
   STACKTOP = i27;
   return;
  } else i1 = 1;
  do {
   _emscripten_asm_const_iiii(11, i4 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[(HEAP32[i26 + 52 >> 2] | 0) + (i1 << 2) >> 2] | 0) | 0, 0) | 0;
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 <= i2 >>> 0);
  STACKTOP = i27;
  return;
 }
 i25 = HEAP32[i26 + 48 >> 2] | 0;
 if (!(i2 - i3 >> 2)) {
  i24 = 0;
  i1 = 0;
  i2 = 0;
  i23 = 0;
 } else {
  if (i2 - i3 >> 2 >>> 0 > 1073741823) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i3 = __Znwj(i2 - i3 | 0) | 0;
  i1 = HEAP32[i6 + 52 >> 2] | 0;
  i2 = (HEAP32[i6 + 56 >> 2] | 0) - i1 | 0;
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
 i1 = HEAP32[i26 + 52 >> 2] | 0;
 i4 = (HEAP32[i26 + 56 >> 2] | 0) - i1 | 0;
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
  i3 = i1;
  i8 = i1;
  i10 = i1;
  i11 = i1;
  i12 = 0;
  i5 = i1;
  i6 = i1;
  i17 = i15;
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
    i19 = i6;
    i2 = i21;
    i4 = i22;
    i1 = i13;
    i13 = HEAP32[i23 + (i13 << 2) >> 2] | 0;
   } else {
    if (!i16) {
     i16 = i22 + -1 | 0;
     i18 = i5;
     i19 = i6;
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
     i17 = i15;
     i4 = i22;
     break;
    }
    if (!i14) {
     i14 = i9 + -1 | 0;
     i18 = i5;
     i19 = i6;
     i9 = i14;
     i14 = HEAP32[i6 + (i14 << 2) >> 2] | 0;
     i2 = i21;
     i4 = i22;
     break;
    }
    if (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i13, i15) | 0) {
     __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i13, i15);
     i13 = i1 + 1 | 0;
     i2 = i21 + 1 | 0;
     i19 = HEAP32[i26 + 52 >> 2] | 0;
     i15 = HEAP32[i19 + (i2 << 2) >> 2] | 0;
     i3 = i19;
     i8 = i19;
     i10 = i19;
     i11 = i19;
     i18 = i19;
     i17 = i15;
     i4 = i22;
     i1 = i13;
     i13 = HEAP32[i23 + (i13 << 2) >> 2] | 0;
     break;
    }
    if (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i16, i14) | 0) {
     __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i16, i14);
     i16 = i22 + -1 | 0;
     i14 = i9 + -1 | 0;
     i2 = HEAP32[i26 + 52 >> 2] | 0;
     i3 = i2;
     i8 = i2;
     i10 = i2;
     i11 = i2;
     i18 = i2;
     i19 = i2;
     i9 = i14;
     i14 = HEAP32[i2 + (i14 << 2) >> 2] | 0;
     i2 = i21;
     i4 = i16;
     i16 = HEAP32[i23 + (i16 << 2) >> 2] | 0;
     break;
    }
    if (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i13, i14) | 0) {
     __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i13, i14);
     _emscripten_asm_const_iiii(9, i25 | 0, HEAP32[i13 + 48 >> 2] | 0, HEAP32[i16 + 48 >> 2] | 0) | 0;
     i13 = i1 + 1 | 0;
     i14 = i9 + -1 | 0;
     i2 = HEAP32[i26 + 52 >> 2] | 0;
     i3 = i2;
     i8 = i2;
     i10 = i2;
     i11 = i2;
     i18 = i2;
     i19 = i2;
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
     _emscripten_asm_const_iiii(10, i25 | 0, HEAP32[i16 + 48 >> 2] | 0, HEAP32[i13 + 48 >> 2] | 0) | 0;
     i16 = i22 + -1 | 0;
     i2 = i21 + 1 | 0;
     i19 = HEAP32[i26 + 52 >> 2] | 0;
     i15 = HEAP32[i19 + (i2 << 2) >> 2] | 0;
     i3 = i19;
     i8 = i19;
     i10 = i19;
     i11 = i19;
     i18 = i19;
     i17 = i15;
     i4 = i16;
     i16 = HEAP32[i23 + (i16 << 2) >> 2] | 0;
     break;
    }
    if (!i7) {
     i6 = __Znwj(12) | 0;
     HEAP32[i6 + 4 >> 2] = 0;
     HEAP32[i6 + 8 >> 2] = 0;
     HEAP32[i6 >> 2] = i6 + 4;
     if ((i1 | 0) > (i22 | 0)) {
      i12 = i6;
      i20 = i6;
     } else {
      i5 = i1;
      while (1) {
       i3 = HEAP32[i23 + (i5 << 2) >> 2] | 0;
       i2 = HEAP8[i3 + 12 + 11 >> 0] | 0;
       if (i2 << 24 >> 24 < 0) i2 = HEAP32[i3 + 16 >> 2] | 0; else i2 = i2 & 255;
       if (i2 | 0) {
        __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i27, i3 + 12 | 0);
        HEAP32[i27 + 12 >> 2] = i5;
        i4 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i6, i27 + 16 | 0, i27) | 0;
        if (!(HEAP32[i4 >> 2] | 0)) {
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
         i3 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
         if (i3) {
          HEAP32[i6 >> 2] = i3;
          i2 = HEAP32[i4 >> 2] | 0;
         }
         __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i6 + 4 >> 2] | 0, i2);
         HEAP32[i6 + 8 >> 2] = (HEAP32[i6 + 8 >> 2] | 0) + 1;
        }
        if ((HEAP8[i27 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i27 >> 2] | 0);
       }
       if ((i5 | 0) < (i22 | 0)) i5 = i5 + 1 | 0; else {
        i12 = i6;
        i20 = i6;
        break;
       }
      }
     }
    } else i20 = i7;
    i10 = i15 + 12 | 0;
    i2 = HEAP32[i20 + 4 >> 2] | 0;
    L126 : do if (i2 | 0) {
     i7 = HEAP8[i10 + 11 >> 0] | 0;
     i8 = i7 << 24 >> 24 < 0 ? HEAP32[i15 + 16 >> 2] | 0 : i7 & 255;
     i7 = i7 << 24 >> 24 < 0 ? HEAP32[i10 >> 2] | 0 : i10;
     L128 : while (1) {
      i5 = i2 + 16 | 0;
      i4 = HEAP8[i5 + 11 >> 0] | 0;
      i6 = i4 << 24 >> 24 < 0 ? HEAP32[i2 + 20 >> 2] | 0 : i4 & 255;
      i3 = i6 >>> 0 < i8 >>> 0 ? i6 : i8;
      do if (!i3) i18 = 50; else {
       i3 = _memcmp(i7, i4 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i5, i3) | 0;
       if (!i3) {
        i18 = 50;
        break;
       }
       if ((i3 | 0) < 0) i18 = 52; else i18 = 53;
      } while (0);
      if ((i18 | 0) == 50) if (i8 >>> 0 < i6 >>> 0) i18 = 52; else i18 = 53;
      if ((i18 | 0) != 52) if ((i18 | 0) == 53) {
       i18 = 0;
       i3 = i8 >>> 0 < i6 >>> 0 ? i8 : i6;
       do if (!i3) i18 = 55; else {
        i3 = _memcmp(i4 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i5, i7, i3) | 0;
        if (!i3) {
         i18 = 55;
         break;
        }
        if ((i3 | 0) >= 0) break L128;
       } while (0);
       if ((i18 | 0) == 55) {
        i18 = 0;
        if (i6 >>> 0 >= i8 >>> 0) break;
       }
       i2 = i2 + 4 | 0;
      }
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) break L126;
     }
     i2 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i20, i27 + 16 | 0, i10) | 0;
     i2 = HEAP32[i2 >> 2] | 0;
     if (!i2) {
      i18 = 61;
      break L78;
     }
     i7 = HEAP32[i23 + (HEAP32[i2 + 28 >> 2] << 2) >> 2] | 0;
     i5 = HEAP8[i7 + 11 >> 0] | 0;
     i6 = i5 << 24 >> 24 < 0 ? HEAP32[i7 + 4 >> 2] | 0 : i5 & 255;
     i2 = HEAP8[i17 + 11 >> 0] | 0;
     L147 : do if ((i6 | 0) == ((i2 << 24 >> 24 < 0 ? HEAP32[i15 + 4 >> 2] | 0 : i2 & 255) | 0)) {
      i3 = HEAP32[i7 >> 2] | 0;
      i4 = i5 << 24 >> 24 < 0 ? i3 : i7;
      i2 = i2 << 24 >> 24 < 0 ? HEAP32[i15 >> 2] | 0 : i15;
      L149 : do if (i5 << 24 >> 24 < 0) {
       if (!i6) break;
       if (_memcmp(i4, i2, i6) | 0) {
        i18 = 70;
        break L147;
       }
      } else {
       if (!i6) break;
       if ((i3 & 255) << 24 >> 24 == (HEAP8[i2 >> 0] | 0)) {
        i3 = i5 & 255;
        i4 = i7;
       } else {
        i18 = 70;
        break L147;
       }
       while (1) {
        i3 = i3 + -1 | 0;
        i4 = i4 + 1 | 0;
        if (!i3) break L149;
        i2 = i2 + 1 | 0;
        if ((HEAP8[i4 >> 0] | 0) != (HEAP8[i2 >> 0] | 0)) {
         i18 = 70;
         break L147;
        }
       }
      } while (0);
      __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i7, i15);
      i2 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i20, i27 + 16 | 0, i10) | 0;
      i2 = HEAP32[i2 >> 2] | 0;
      if (!i2) {
       i18 = 72;
       break L78;
      }
      HEAP32[i23 + (HEAP32[i2 + 28 >> 2] << 2) >> 2] = 0;
      _emscripten_asm_const_iiii(10, i25 | 0, HEAP32[i7 + 48 >> 2] | 0, HEAP32[i13 + 48 >> 2] | 0) | 0;
     } else i18 = 70; while (0);
     if ((i18 | 0) == 70) {
      i19 = __ZN6asmdom9createElmEPNS_5VNodeE(i15) | 0;
      _emscripten_asm_const_iiii(10, i25 | 0, i19 | 0, HEAP32[i13 + 48 >> 2] | 0) | 0;
     }
     i2 = i21 + 1 | 0;
     i19 = HEAP32[i26 + 52 >> 2] | 0;
     i15 = HEAP32[i19 + (i2 << 2) >> 2] | 0;
     i3 = i19;
     i8 = i19;
     i10 = i19;
     i11 = i19;
     i18 = i19;
     i17 = i15;
     i4 = i22;
     i7 = i20;
     break L80;
    } while (0);
    i2 = __ZN6asmdom9createElmEPNS_5VNodeE(i15) | 0;
    _emscripten_asm_const_iiii(10, i25 | 0, i2 | 0, HEAP32[i13 + 48 >> 2] | 0) | 0;
    i2 = i21 + 1 | 0;
    i19 = HEAP32[i26 + 52 >> 2] | 0;
    i15 = HEAP32[i19 + (i2 << 2) >> 2] | 0;
    i3 = i19;
    i8 = i19;
    i10 = i19;
    i11 = i19;
    i18 = i19;
    i17 = i15;
    i4 = i22;
    i7 = i20;
   } while (0);
   i6 = (i1 | 0) > (i4 | 0);
   i5 = (i2 | 0) > (i9 | 0);
   if (i5 | i6) break L76; else {
    i5 = i18;
    i6 = i19;
    i21 = i2;
    i22 = i4;
   }
  }
  if ((i18 | 0) == 61) {
   i27 = ___cxa_allocate_exception(8) | 0;
   __ZNSt11logic_errorC2EPKc(i27, 4021);
   HEAP32[i27 >> 2] = 2668;
   ___cxa_throw(i27 | 0, 1544, 10);
  } else if ((i18 | 0) == 72) {
   i27 = ___cxa_allocate_exception(8) | 0;
   __ZNSt11logic_errorC2EPKc(i27, 4021);
   HEAP32[i27 >> 2] = 2668;
   ___cxa_throw(i27 | 0, 1544, 10);
  }
 } while (0);
 L168 : do if (i6) {
  i1 = i9 + 1 | 0;
  i5 = i2 >>> 0 > i9 >>> 0;
  if (i1 >>> 0 > (((HEAP32[i26 + 56 >> 2] | 0) - i11 >> 2) + -1 | 0) >>> 0) {
   if (i5) break;
   while (1) {
    i1 = i2 + 1 | 0;
    _emscripten_asm_const_iiii(11, i25 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[i3 + (i2 << 2) >> 2] | 0) | 0, 0) | 0;
    if (i1 >>> 0 > i9 >>> 0) break L168;
    i3 = HEAP32[i26 + 52 >> 2] | 0;
    i2 = i1;
   }
  } else {
   i4 = HEAP32[(HEAP32[i10 + (i1 << 2) >> 2] | 0) + 48 >> 2] | 0;
   if (i5) break; else i3 = i8;
   while (1) {
    i1 = i2 + 1 | 0;
    _emscripten_asm_const_iiii(11, i25 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[i3 + (i2 << 2) >> 2] | 0) | 0, i4 | 0) | 0;
    if (i1 >>> 0 > i9 >>> 0) break L168;
    i3 = HEAP32[i26 + 52 >> 2] | 0;
    i2 = i1;
   }
  }
 } else if (!(i1 >>> 0 > i4 >>> 0 | i5 ^ 1)) do {
  _emscripten_asm_const_ii(12, HEAP32[(HEAP32[i23 + (i1 << 2) >> 2] | 0) + 48 >> 2] | 0) | 0;
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
   HEAP32[2702] = 75;
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
   i3 = HEAP8[(HEAP8[i2 >> 0] | 0) + -65 + (6646 + (i7 * 58 | 0)) >> 0] | 0;
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
    i6 = 7110;
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
     i5 = 7110;
     i14 = 66;
     break L71;
    } else {
     i4 = (i10 & 2049 | 0) != 0 & 1;
     i5 = (i10 & 2048 | 0) == 0 ? ((i10 & 1 | 0) == 0 ? 7110 : 7112) : 7111;
     i14 = 66;
     break L71;
    }
   }
  case 117:
   {
    i2 = HEAP32[i20 >> 2] | 0;
    i3 = HEAP32[i20 + 4 >> 2] | 0;
    i4 = 0;
    i5 = 7110;
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
    i3 = 7110;
    i2 = i15;
    break;
   }
  case 109:
   {
    i2 = _strerror(HEAP32[2702] | 0) | 0;
    i14 = 71;
    break;
   }
  case 115:
   {
    i2 = HEAP32[i20 >> 2] | 0;
    i2 = i2 | 0 ? i2 : 9174;
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
    i3 = 7110;
    i2 = i15;
   }
  } while (0);
  L95 : do if ((i14 | 0) == 61) {
   i8 = HEAP32[i20 >> 2] | 0;
   i9 = HEAP32[i20 + 4 >> 2] | 0;
   i7 = _fmt_x(i8, i9, i15, i5 & 32) | 0;
   i6 = (i2 & 8 | 0) == 0 | (i8 | 0) == 0 & (i9 | 0) == 0;
   i4 = i6 ? 0 : 2;
   i6 = i6 ? 7110 : 7110 + (i5 >> 4) | 0;
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
   i3 = 7110;
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
  i16 = 7120;
  d4 = -d4;
 } else {
  i17 = (i22 & 2049 | 0) != 0 & 1;
  i16 = (i22 & 2048 | 0) == 0 ? ((i22 & 1 | 0) == 0 ? 7121 : 7126) : 7123;
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
    HEAP8[i2 >> 0] = HEAPU8[7151 + i18 >> 0] | i15 & 32;
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
   if (i8 | 0) _out(i21, 10045, 1);
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
      _out(i21, 10045, 1);
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
  _out(i21, d4 != d4 | 0.0 != 0.0 ? (i15 & 32 | 0 ? 9059 : 7147) : i15 & 32 | 0 ? 7139 : 7143, 3);
  _pad_684(i21, 32, i23, i1, i22 ^ 8192);
 } while (0);
 STACKTOP = i24;
 return ((i1 | 0) < (i23 | 0) ? i23 : i1) | 0;
}

function __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i13, i1) {
 i13 = i13 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i9 = __Znwj(20) | 0;
 __ZNSt3__27codecvtIwc11__mbstate_tEC2Ej(i9);
 HEAP32[i9 + 12 >> 2] = 1114111;
 HEAP32[i9 + 16 >> 2] = 0;
 HEAP32[i9 >> 2] = 1920;
 HEAP32[i14 + 8 >> 2] = 0;
 HEAP32[i14 + 8 + 4 >> 2] = 0;
 HEAP32[i14 + 8 + 8 >> 2] = 0;
 HEAP32[i14 + 8 + 12 >> 2] = 0;
 HEAP32[i14 + 8 + 16 >> 2] = 0;
 HEAP32[i14 + 8 + 20 >> 2] = 0;
 HEAP32[i14 + 8 + 24 >> 2] = i9;
 HEAP32[i14 + 8 + 28 >> 2] = 0;
 HEAP32[i14 + 8 + 28 + 4 >> 2] = 0;
 i10 = i14 + 8 + 36 | 0;
 i11 = HEAP8[i1 + 8 + 3 >> 0] | 0;
 i12 = i11 << 24 >> 24 < 0 ? HEAP32[i1 >> 2] | 0 : i1;
 i11 = i11 << 24 >> 24 < 0 ? HEAP32[i1 + 4 >> 2] | 0 : i11 & 255;
 HEAP32[i10 >> 2] = 0;
 L1 : do if (!i9) i4 = 86; else {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  HEAP32[i13 + 8 >> 2] = 0;
  if (i11 << 2 >> 1 >>> 0 > 4294967279) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  if (i11 << 2 >> 1 >>> 0 < 11) {
   HEAP8[i13 + 11 >> 0] = i11 << 2 >> 1;
   if (!(i11 << 2 >> 1)) i1 = i13; else {
    i1 = i13;
    i4 = 7;
   }
  } else {
   i1 = __Znwj((i11 << 2 >> 1) + 16 & -16) | 0;
   HEAP32[i13 >> 2] = i1;
   HEAP32[i13 + 8 >> 2] = (i11 << 2 >> 1) + 16 & -16 | -2147483648;
   HEAP32[i13 + 4 >> 2] = i11 << 2 >> 1;
   i4 = 7;
  }
  if ((i4 | 0) == 7) _memset(i1 | 0, 0, i11 << 2 >> 1 | 0) | 0;
  HEAP8[i1 + (i11 << 2 >> 1) >> 0] = 0;
  do if (!i11) {
   i6 = HEAP32[i14 + 8 + 28 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i14 + 8 + 28 >> 2];
   HEAP32[i14 + 4 >> 2] = i6;
   i6 = i14;
   i7 = i13 + 11 | 0;
   i4 = 62;
  } else {
   if ((HEAP8[i13 + 11 >> 0] | 0) < 0) i1 = (HEAP32[i13 + 8 >> 2] & 2147483647) + -1 | 0; else i1 = 10;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i13, i1);
   i1 = HEAP32[i14 + 8 + 28 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i14 + 8 + 28 >> 2];
   HEAP32[i14 + 4 >> 2] = i1;
   i1 = HEAP8[i13 + 11 >> 0] | 0;
   if (i1 << 24 >> 24 < 0) {
    i8 = i13 + 4 | 0;
    i3 = HEAP32[i13 >> 2] | 0;
    i1 = HEAP32[i13 + 4 >> 2] | 0;
   } else {
    i8 = i13 + 4 | 0;
    i3 = i13;
    i1 = i1 & 255;
   }
   i7 = HEAP32[i14 + 8 + 24 >> 2] | 0;
   i2 = i12;
   i5 = i3;
   i1 = i3 + i1 | 0;
   i6 = HEAP32[i10 >> 2] | 0;
   L22 : while (1) {
    i1 = FUNCTION_TABLE_iiiiiiiii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 7](i7, i14, i2, i12 + (i11 << 2) | 0, i14 + 52 | 0, i5, i1, i14 + 48 | 0) | 0;
    i4 = HEAP32[i14 + 52 >> 2] | 0;
    i9 = i2;
    i6 = (i4 - i9 >> 2) + i6 | 0;
    if ((i4 | 0) == (i2 | 0)) {
     i4 = 61;
     break;
    }
    switch (i1 | 0) {
    case 3:
     {
      i4 = 18;
      break L22;
     }
    case 0:
     {
      i4 = 50;
      break L22;
     }
    case 1:
     break;
    default:
     {
      i4 = 61;
      break L22;
     }
    }
    if ((HEAP8[i13 + 11 >> 0] | 0) < 0) i1 = HEAP32[i13 >> 2] | 0; else i1 = i13;
    i3 = (HEAP32[i14 + 48 >> 2] | 0) - i1 | 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i13, i3 << 1);
    i1 = HEAP8[i13 + 11 >> 0] | 0;
    if (i1 << 24 >> 24 < 0) {
     i4 = HEAP32[i13 >> 2] | 0;
     i1 = HEAP32[i8 >> 2] | 0;
    } else {
     i4 = i13;
     i1 = i1 & 255;
    }
    i2 = HEAP32[i14 + 52 >> 2] | 0;
    if (i2 >>> 0 >= (i12 + (i11 << 2) | 0) >>> 0) {
     i4 = 59;
     break;
    } else {
     i5 = i4 + i3 | 0;
     i1 = i4 + i1 | 0;
    }
   }
   if ((i4 | 0) == 18) {
    HEAP32[i10 >> 2] = i6;
    if ((HEAP8[i13 + 11 >> 0] | 0) < 0) i1 = HEAP32[i13 >> 2] | 0; else i1 = i13;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i13, i5 - i1 | 0);
    i1 = HEAP8[i13 + 11 >> 0] | 0;
    if (i1 << 24 >> 24 < 0) {
     i6 = HEAP32[i13 + 4 >> 2] | 0;
     i4 = (HEAP32[i13 + 8 >> 2] & 2147483647) + -1 | 0;
    } else {
     i6 = i1 & 255;
     i4 = 10;
    }
    i7 = i12 + (i11 << 2) - i9 | 0;
    do if (i7 | 0) {
     if (i1 << 24 >> 24 < 0) {
      i3 = HEAP32[i13 >> 2] | 0;
      i5 = HEAP32[i13 + 4 >> 2] | 0;
     } else {
      i3 = i13;
      i5 = i1 & 255;
     }
     if (i3 >>> 0 <= i2 >>> 0 & (i3 + i5 | 0) >>> 0 > i2 >>> 0) {
      HEAP32[i14 + 56 >> 2] = 0;
      HEAP32[i14 + 56 + 4 >> 2] = 0;
      HEAP32[i14 + 56 + 8 >> 2] = 0;
      if (i7 >>> 0 > 4294967279) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
      if (i7 >>> 0 < 11) {
       HEAP8[i14 + 56 + 11 >> 0] = i7;
       i1 = i14 + 56 | 0;
      } else {
       i1 = __Znwj(i7 + 16 & -16) | 0;
       HEAP32[i14 + 56 >> 2] = i1;
       HEAP32[i14 + 56 + 8 >> 2] = i7 + 16 & -16 | -2147483648;
       HEAP32[i14 + 56 + 4 >> 2] = i7;
      }
      if ((i2 | 0) != (i12 + (i11 << 2) | 0)) {
       i3 = i1;
       while (1) {
        HEAP8[i3 >> 0] = HEAP8[i2 >> 0] | 0;
        i2 = i2 + 1 | 0;
        if ((i2 | 0) == (i12 + (i11 << 2) | 0)) break; else i3 = i3 + 1 | 0;
       }
       i1 = i1 + i7 | 0;
      }
      HEAP8[i1 >> 0] = 0;
      i12 = HEAP8[i14 + 56 + 11 >> 0] | 0;
      i1 = HEAP32[i14 + 56 >> 2] | 0;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i13, i12 << 24 >> 24 < 0 ? i1 : i14 + 56 | 0, i12 << 24 >> 24 < 0 ? HEAP32[i14 + 56 + 4 >> 2] | 0 : i12 & 255) | 0;
      if (i12 << 24 >> 24 < 0) __ZdlPv(i1);
      break;
     } else {
      if ((i4 - i6 | 0) >>> 0 < i7 >>> 0) {
       __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj(i13, i4, i6 + i7 - i4 | 0, i6, i6);
       i1 = HEAP8[i13 + 11 >> 0] | 0;
      }
      if (i1 << 24 >> 24 < 0) i4 = HEAP32[i13 >> 2] | 0; else i4 = i13;
      i1 = i4 + i6 | 0;
      if ((i2 | 0) != (i12 + (i11 << 2) | 0)) {
       i3 = i6 - i9 | 0;
       while (1) {
        HEAP8[i1 >> 0] = HEAP8[i2 >> 0] | 0;
        i2 = i2 + 1 | 0;
        if ((i2 | 0) == (i12 + (i11 << 2) | 0)) break; else i1 = i1 + 1 | 0;
       }
       i1 = i4 + (i12 + (i11 << 2) + i3) | 0;
      }
      HEAP8[i1 >> 0] = 0;
      i1 = i6 + i7 | 0;
      if ((HEAP8[i13 + 11 >> 0] | 0) < 0) {
       HEAP32[i13 + 4 >> 2] = i1;
       break;
      } else {
       HEAP8[i13 + 11 >> 0] = i1;
       break;
      }
     }
    } while (0);
    i6 = i14;
    i7 = i13 + 11 | 0;
    i4 = 62;
    break;
   } else if ((i4 | 0) == 50) {
    HEAP32[i10 >> 2] = i6;
    if ((HEAP8[i13 + 11 >> 0] | 0) < 0) i1 = HEAP32[i13 >> 2] | 0; else i1 = i13;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i13, (HEAP32[i14 + 48 >> 2] | 0) - i1 | 0);
    i6 = i14;
    i7 = i13 + 11 | 0;
    i4 = 62;
    break;
   } else if ((i4 | 0) == 59) {
    HEAP32[i10 >> 2] = i6;
    i1 = i13 + 11 | 0;
    break;
   } else if ((i4 | 0) == 61) {
    HEAP32[i10 >> 2] = i6;
    i1 = i13 + 11 | 0;
    break;
   }
  } while (0);
  do if ((i4 | 0) == 62) {
   i1 = HEAP8[i7 >> 0] | 0;
   if (i1 << 24 >> 24 < 0) {
    i3 = HEAP32[i13 + 4 >> 2] | 0;
    i1 = (HEAP32[i13 + 8 >> 2] & 2147483647) + -1 | 0;
   } else {
    i3 = i1 & 255;
    i1 = 10;
   }
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i13, i1);
   i1 = HEAP8[i7 >> 0] | 0;
   if (i1 << 24 >> 24 < 0) {
    i2 = HEAP32[i13 >> 2] | 0;
    i5 = i13 + 4 | 0;
    i4 = HEAP32[i13 + 4 >> 2] | 0;
   } else {
    i2 = i13;
    i5 = i13 + 4 | 0;
    i4 = i1 & 255;
   }
   i2 = i2 + i3 | 0;
   i1 = HEAP32[i14 + 8 + 24 >> 2] | 0;
   i3 = i2;
   i2 = i2 + i4 | 0;
   L98 : while (1) {
    switch (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 7](i1, i14, i3, i2, i14 + 56 | 0) | 0) {
    case 3:
     {
      i4 = 70;
      break L98;
     }
    case 0:
     {
      i4 = 73;
      break L98;
     }
    case 1:
     break;
    default:
     {
      i4 = 82;
      break L98;
     }
    }
    if ((HEAP8[i7 >> 0] | 0) < 0) i2 = HEAP32[i13 >> 2] | 0; else i2 = i13;
    i3 = (HEAP32[i14 + 56 >> 2] | 0) - i2 | 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i13, i3 << 1);
    i2 = HEAP8[i7 >> 0] | 0;
    if (i2 << 24 >> 24 < 0) {
     i4 = HEAP32[i13 >> 2] | 0;
     i2 = HEAP32[i5 >> 2] | 0;
    } else {
     i4 = i13;
     i2 = i2 & 255;
    }
    i3 = i4 + i3 | 0;
    i2 = i4 + i2 | 0;
   }
   if ((i4 | 0) == 70) {
    if ((HEAP8[i7 >> 0] | 0) < 0) i2 = HEAP32[i13 >> 2] | 0; else i2 = i13;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i13, i3 - i2 | 0);
   } else if ((i4 | 0) == 73) {
    if ((HEAP8[i7 >> 0] | 0) < 0) i2 = HEAP32[i13 >> 2] | 0; else i2 = i13;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i13, (HEAP32[i14 + 56 >> 2] | 0) - i2 | 0);
   } else if ((i4 | 0) == 82) {
    i1 = i7;
    break;
   }
   break L1;
  } while (0);
  if ((HEAP8[i1 >> 0] | 0) < 0) {
   __ZdlPv(HEAP32[i13 >> 2] | 0);
   i4 = 86;
  } else i4 = 86;
 } while (0);
 do if ((i4 | 0) == 86) {
  i12 = HEAP8[i14 + 8 + 11 >> 0] | 0;
  if (!((i12 << 24 >> 24 < 0 ? HEAP32[i14 + 8 + 4 >> 2] | 0 : i12 & 255) | 0)) {
   i14 = ___cxa_allocate_exception(8) | 0;
   __ZNSt13runtime_errorC2EPKc(i14);
   HEAP32[i14 >> 2] = 2688;
   ___cxa_throw(i14 | 0, 1560, 12);
  } else {
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i13, i14 + 8 | 0);
   i1 = HEAP32[i14 + 8 + 24 >> 2] | 0;
   break;
  }
 } while (0);
 if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 if ((HEAP8[i14 + 8 + 20 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i14 + 8 + 12 >> 2] | 0);
 if ((HEAP8[i14 + 8 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i14;
  return;
 }
 __ZdlPv(HEAP32[i14 + 8 >> 2] | 0);
 STACKTOP = i14;
 return;
}

function _free(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if (!i1) return;
 i2 = HEAP32[2551] | 0;
 i3 = HEAP32[i1 + -4 >> 2] | 0;
 i10 = i1 + -8 + (i3 & -8) | 0;
 do if (!(i3 & 1)) {
  i4 = HEAP32[i1 + -8 >> 2] | 0;
  if (!(i3 & 3)) return;
  i6 = i1 + -8 + (0 - i4) | 0;
  i7 = i4 + (i3 & -8) | 0;
  if (i6 >>> 0 < i2 >>> 0) return;
  if ((i6 | 0) == (HEAP32[2552] | 0)) {
   i1 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i1 & 3 | 0) != 3) {
    i8 = i6;
    i9 = i6;
    i2 = i7;
    break;
   }
   HEAP32[2549] = i7;
   HEAP32[i10 + 4 >> 2] = i1 & -2;
   HEAP32[i6 + 4 >> 2] = i7 | 1;
   HEAP32[i6 + i7 >> 2] = i7;
   return;
  }
  if (i4 >>> 0 < 256) {
   i1 = HEAP32[i6 + 8 >> 2] | 0;
   i2 = HEAP32[i6 + 12 >> 2] | 0;
   if ((i2 | 0) == (i1 | 0)) {
    HEAP32[2547] = HEAP32[2547] & ~(1 << (i4 >>> 3));
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
   if ((i6 | 0) == (HEAP32[10492 + (i2 << 2) >> 2] | 0)) {
    HEAP32[10492 + (i2 << 2) >> 2] = i1;
    if (i3) {
     HEAP32[2548] = HEAP32[2548] & ~(1 << i2);
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
  i1 = HEAP32[2552] | 0;
  if ((i10 | 0) == (HEAP32[2553] | 0)) {
   i10 = (HEAP32[2550] | 0) + i2 | 0;
   HEAP32[2550] = i10;
   HEAP32[2553] = i9;
   HEAP32[i9 + 4 >> 2] = i10 | 1;
   if ((i9 | 0) != (i1 | 0)) return;
   HEAP32[2552] = 0;
   HEAP32[2549] = 0;
   return;
  }
  if ((i10 | 0) == (i1 | 0)) {
   i10 = (HEAP32[2549] | 0) + i2 | 0;
   HEAP32[2549] = i10;
   HEAP32[2552] = i8;
   HEAP32[i9 + 4 >> 2] = i10 | 1;
   HEAP32[i8 + i10 >> 2] = i10;
   return;
  }
  i5 = (i3 & -8) + i2 | 0;
  do if (i3 >>> 0 < 256) {
   i2 = HEAP32[i10 + 8 >> 2] | 0;
   i1 = HEAP32[i10 + 12 >> 2] | 0;
   if ((i1 | 0) == (i2 | 0)) {
    HEAP32[2547] = HEAP32[2547] & ~(1 << (i3 >>> 3));
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
    if ((i10 | 0) == (HEAP32[10492 + (i1 << 2) >> 2] | 0)) {
     HEAP32[10492 + (i1 << 2) >> 2] = i3;
     if (i2) {
      HEAP32[2548] = HEAP32[2548] & ~(1 << i1);
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
  if ((i9 | 0) == (HEAP32[2552] | 0)) {
   HEAP32[2549] = i5;
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
  i1 = HEAP32[2547] | 0;
  if (!(i1 & 1 << i3)) {
   HEAP32[2547] = i1 | 1 << i3;
   i1 = 10228 + (i3 << 1 << 2) + 8 | 0;
   i2 = 10228 + (i3 << 1 << 2) | 0;
  } else {
   i1 = 10228 + (i3 << 1 << 2) + 8 | 0;
   i2 = HEAP32[10228 + (i3 << 1 << 2) + 8 >> 2] | 0;
  }
  HEAP32[i1 >> 2] = i9;
  HEAP32[i2 + 12 >> 2] = i9;
  HEAP32[i9 + 8 >> 2] = i2;
  HEAP32[i9 + 12 >> 2] = 10228 + (i3 << 1 << 2);
  return;
 }
 i1 = i5 >>> 8;
 if (!i1) i2 = 0; else if (i5 >>> 0 > 16777215) i2 = 31; else {
  i2 = i1 << ((i1 + 1048320 | 0) >>> 16 & 8) << (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4);
  i2 = 14 - (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4 | (i1 + 1048320 | 0) >>> 16 & 8 | (i2 + 245760 | 0) >>> 16 & 2) + (i2 << ((i2 + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
  i2 = i5 >>> (i2 + 7 | 0) & 1 | i2 << 1;
 }
 i4 = 10492 + (i2 << 2) | 0;
 HEAP32[i9 + 28 >> 2] = i2;
 HEAP32[i9 + 20 >> 2] = 0;
 HEAP32[i9 + 16 >> 2] = 0;
 i1 = HEAP32[2548] | 0;
 i3 = 1 << i2;
 do if (!(i1 & i3)) {
  HEAP32[2548] = i1 | i3;
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
 i10 = (HEAP32[2555] | 0) + -1 | 0;
 HEAP32[2555] = i10;
 if (!i10) i1 = 10644; else return;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break; else i1 = i1 + 8 | 0;
 }
 HEAP32[2555] = -1;
 return;
}

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE5eraseENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEE(i3, i10) {
 i3 = i3 | 0;
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = HEAP32[i10 + 4 >> 2] | 0;
 if (!i1) {
  i1 = HEAP32[i10 + 8 >> 2] | 0;
  if ((HEAP32[i1 >> 2] | 0) != (i10 | 0)) {
   i2 = i10 + 8 | 0;
   do {
    i9 = HEAP32[i2 >> 2] | 0;
    i2 = i9 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i9 | 0));
  }
 } else while (1) {
  i2 = HEAP32[i1 >> 2] | 0;
  if (!i2) break; else i1 = i2;
 }
 if ((HEAP32[i3 >> 2] | 0) == (i10 | 0)) HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 8 >> 2] = (HEAP32[i3 + 8 >> 2] | 0) + -1;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if (!i1) {
  i1 = 0;
  i3 = i10;
 } else {
  i3 = HEAP32[i10 + 4 >> 2] | 0;
  if (!i3) i3 = i10; else while (1) {
   i1 = HEAP32[i3 >> 2] | 0;
   if (!i1) {
    i1 = 0;
    break;
   } else i3 = i1;
  }
 }
 i9 = i3 + 4 | 0;
 i8 = HEAP32[(i1 | 0 ? i3 : i9) >> 2] | 0;
 i7 = i3 + 8 | 0;
 if (i8 | 0) HEAP32[i8 + 8 >> 2] = HEAP32[i7 >> 2];
 i1 = HEAP32[i7 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == (i3 | 0)) {
  HEAP32[i1 >> 2] = i8;
  if ((i3 | 0) == (i2 | 0)) {
   i2 = i8;
   i4 = 0;
  } else i4 = HEAP32[i1 + 4 >> 2] | 0;
 } else HEAP32[i1 + 4 >> 2] = i8;
 i5 = i3 + 12 | 0;
 i6 = (HEAP8[i5 >> 0] | 0) != 0;
 if ((i3 | 0) != (i10 | 0)) {
  i1 = HEAP32[i10 + 8 >> 2] | 0;
  HEAP32[i7 >> 2] = i1;
  HEAP32[((HEAP32[HEAP32[i10 + 8 >> 2] >> 2] | 0) == (i10 | 0) ? i1 : i1 + 4 | 0) >> 2] = i3;
  i1 = HEAP32[i10 >> 2] | 0;
  HEAP32[i3 >> 2] = i1;
  HEAP32[i1 + 8 >> 2] = i3;
  i1 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = i1;
  if (i1 | 0) HEAP32[i1 + 8 >> 2] = i3;
  HEAP8[i5 >> 0] = HEAP8[i10 + 12 >> 0] | 0;
  i2 = (i2 | 0) == (i10 | 0) ? i3 : i2;
 }
 L31 : do if (i6 & (i2 | 0) != 0) {
  if (i8 | 0) {
   HEAP8[i8 + 12 >> 0] = 1;
   break;
  }
  while (1) {
   i5 = i4 + 8 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i1 = i4 + 12 | 0;
   i3 = (HEAP8[i1 >> 0] | 0) != 0;
   if ((HEAP32[i6 >> 2] | 0) == (i4 | 0)) {
    if (!i3) {
     HEAP8[i1 >> 0] = 1;
     HEAP8[i6 + 12 >> 0] = 0;
     i3 = i4 + 4 | 0;
     i1 = HEAP32[i3 >> 2] | 0;
     HEAP32[i6 >> 2] = i1;
     if (i1 | 0) HEAP32[i1 + 8 >> 2] = i6;
     HEAP32[i5 >> 2] = HEAP32[i6 + 8 >> 2];
     i9 = HEAP32[i6 + 8 >> 2] | 0;
     HEAP32[((HEAP32[i9 >> 2] | 0) == (i6 | 0) ? i9 : i9 + 4 | 0) >> 2] = i4;
     HEAP32[i3 >> 2] = i6;
     HEAP32[i6 + 8 >> 2] = i4;
     i2 = (i2 | 0) == (i6 | 0) ? i4 : i2;
     i4 = HEAP32[i6 >> 2] | 0;
    }
    i1 = HEAP32[i4 >> 2] | 0;
    if (i1 | 0) if (!(HEAP8[i1 + 12 >> 0] | 0)) {
     i2 = i1;
     i1 = i4;
     i6 = 60;
     break;
    }
    i3 = i4 + 4 | 0;
    i5 = HEAP32[i3 >> 2] | 0;
    if (i5 | 0) if (!(HEAP8[i5 + 12 >> 0] | 0)) {
     i6 = 55;
     break;
    }
    HEAP8[i4 + 12 >> 0] = 0;
    i1 = HEAP32[i4 + 8 >> 2] | 0;
    if ((i1 | 0) == (i2 | 0) | (HEAP8[i1 + 12 >> 0] | 0) == 0) {
     i6 = 54;
     break;
    }
   } else {
    if (!i3) {
     HEAP8[i1 >> 0] = 1;
     HEAP8[i6 + 12 >> 0] = 0;
     i1 = HEAP32[i6 + 4 >> 2] | 0;
     i3 = HEAP32[i1 >> 2] | 0;
     HEAP32[i6 + 4 >> 2] = i3;
     if (i3 | 0) HEAP32[i3 + 8 >> 2] = i6;
     HEAP32[i1 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
     i9 = HEAP32[i6 + 8 >> 2] | 0;
     HEAP32[((HEAP32[i9 >> 2] | 0) == (i6 | 0) ? i9 : i9 + 4 | 0) >> 2] = i1;
     HEAP32[i1 >> 2] = i6;
     HEAP32[i6 + 8 >> 2] = i1;
     i9 = HEAP32[i4 >> 2] | 0;
     i2 = (i2 | 0) == (i9 | 0) ? i4 : i2;
     i4 = HEAP32[i9 + 4 >> 2] | 0;
    }
    i3 = HEAP32[i4 >> 2] | 0;
    i1 = HEAP32[i4 + 4 >> 2] | 0;
    if (i3 | 0) if (!(HEAP8[i3 + 12 >> 0] | 0)) {
     i6 = 37;
     break;
    }
    if (i1 | 0) if (!(HEAP8[i1 + 12 >> 0] | 0)) {
     i2 = i1;
     i1 = i4;
     i6 = 42;
     break;
    }
    HEAP8[i4 + 12 >> 0] = 0;
    i1 = HEAP32[i4 + 8 >> 2] | 0;
    if ((i1 | 0) == (i2 | 0)) {
     i1 = i2;
     i6 = 36;
     break;
    }
    if (!(HEAP8[i1 + 12 >> 0] | 0)) {
     i6 = 36;
     break;
    }
   }
   i4 = HEAP32[i1 + 8 >> 2] | 0;
   i4 = HEAP32[((HEAP32[i4 >> 2] | 0) == (i1 | 0) ? i4 + 4 | 0 : i4) >> 2] | 0;
  }
  do if ((i6 | 0) == 36) {
   HEAP8[i1 + 12 >> 0] = 1;
   break L31;
  } else if ((i6 | 0) == 37) {
   if (i1 | 0) if (!(HEAP8[i1 + 12 >> 0] | 0)) {
    i2 = i1;
    i1 = i4;
    i6 = 42;
    break;
   }
   HEAP8[i3 + 12 >> 0] = 1;
   HEAP8[i4 + 12 >> 0] = 0;
   i1 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if (i1 | 0) HEAP32[i1 + 8 >> 2] = i4;
   i2 = i4 + 8 | 0;
   HEAP32[i3 + 8 >> 2] = HEAP32[i2 >> 2];
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[((HEAP32[i1 >> 2] | 0) == (i4 | 0) ? i1 : i1 + 4 | 0) >> 2] = i3;
   HEAP32[i3 + 4 >> 2] = i4;
   HEAP32[i2 >> 2] = i3;
   i2 = i4;
   i1 = i3;
   i6 = 42;
  } else if ((i6 | 0) == 54) {
   HEAP8[i1 + 12 >> 0] = 1;
   break L31;
  } else if ((i6 | 0) == 55) {
   if (i1 | 0) if (!(HEAP8[i1 + 12 >> 0] | 0)) {
    i2 = i1;
    i1 = i4;
    i6 = 60;
    break;
   }
   HEAP8[i5 + 12 >> 0] = 1;
   HEAP8[i4 + 12 >> 0] = 0;
   i1 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i1;
   if (i1 | 0) HEAP32[i1 + 8 >> 2] = i4;
   i2 = i4 + 8 | 0;
   HEAP32[i5 + 8 >> 2] = HEAP32[i2 >> 2];
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[((HEAP32[i1 >> 2] | 0) == (i4 | 0) ? i1 : i1 + 4 | 0) >> 2] = i5;
   HEAP32[i5 >> 2] = i4;
   HEAP32[i2 >> 2] = i5;
   i2 = i4;
   i1 = i5;
   i6 = 60;
  } while (0);
  if ((i6 | 0) == 42) {
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   HEAP8[i1 + 12 >> 0] = HEAP8[i3 + 12 >> 0] | 0;
   HEAP8[i3 + 12 >> 0] = 1;
   HEAP8[i2 + 12 >> 0] = 1;
   i1 = HEAP32[i3 + 4 >> 2] | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   HEAP32[i3 + 4 >> 2] = i2;
   if (i2 | 0) HEAP32[i2 + 8 >> 2] = i3;
   HEAP32[i1 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
   i9 = HEAP32[i3 + 8 >> 2] | 0;
   HEAP32[((HEAP32[i9 >> 2] | 0) == (i3 | 0) ? i9 : i9 + 4 | 0) >> 2] = i1;
   HEAP32[i1 >> 2] = i3;
   HEAP32[i3 + 8 >> 2] = i1;
   break;
  } else if ((i6 | 0) == 60) {
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   HEAP8[i1 + 12 >> 0] = HEAP8[i3 + 12 >> 0] | 0;
   HEAP8[i3 + 12 >> 0] = 1;
   HEAP8[i2 + 12 >> 0] = 1;
   i1 = HEAP32[i3 >> 2] | 0;
   i2 = HEAP32[i1 + 4 >> 2] | 0;
   HEAP32[i3 >> 2] = i2;
   if (i2 | 0) HEAP32[i2 + 8 >> 2] = i3;
   HEAP32[i1 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
   i9 = HEAP32[i3 + 8 >> 2] | 0;
   HEAP32[((HEAP32[i9 >> 2] | 0) == (i3 | 0) ? i9 : i9 + 4 | 0) >> 2] = i1;
   HEAP32[i1 + 4 >> 2] = i3;
   HEAP32[i3 + 8 >> 2] = i1;
   break;
  }
 } while (0);
 if ((HEAP8[i10 + 28 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 + 28 >> 2] | 0);
 if ((HEAP8[i10 + 16 + 11 >> 0] | 0) >= 0) {
  __ZdlPv(i10);
  return;
 }
 __ZdlPv(HEAP32[i10 + 16 >> 2] | 0);
 __ZdlPv(i10);
 return;
}

function _mbsrtowcs(i5, i9, i1, i4) {
 i5 = i5 | 0;
 i9 = i9 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i9 >> 2] | 0;
 if (!i4) i8 = 5; else {
  i3 = HEAP32[i4 >> 2] | 0;
  if (!i3) i8 = 5; else if (!i5) {
   i6 = i2;
   i4 = i1;
   i8 = 25;
  } else {
   HEAP32[i4 >> 2] = 0;
   i6 = i2;
   i7 = i1;
   i8 = 43;
  }
 }
 L5 : do if ((i8 | 0) == 5) {
  if (HEAP32[HEAP32[699] >> 2] | 0) if (i5 | 0) {
   i4 = i1;
   i8 = 15;
   break;
  } else {
   i3 = i1;
   i8 = 14;
   break;
  }
  if (!i5) {
   i1 = _strlen(i2) | 0;
   i8 = 60;
   break;
  }
  L13 : do if (i1) {
   i3 = i1;
   while (1) {
    i4 = HEAP8[i2 >> 0] | 0;
    if (!(i4 << 24 >> 24)) break;
    i2 = i2 + 1 | 0;
    HEAP32[i5 >> 2] = i4 << 24 >> 24 & 57343;
    i3 = i3 + -1 | 0;
    if (!i3) break L13; else i5 = i5 + 4 | 0;
   }
   HEAP32[i5 >> 2] = 0;
   HEAP32[i9 >> 2] = 0;
   i1 = i1 - i3 | 0;
   i8 = 60;
   break L5;
  } while (0);
  HEAP32[i9 >> 2] = i2;
  i8 = 60;
 } while (0);
 L19 : while (1) {
  L20 : do if ((i8 | 0) == 14) {
   i4 = i3;
   while (1) {
    i3 = HEAP8[i2 >> 0] | 0;
    if (((i3 & 255) + -1 | 0) >>> 0 < 127) if (!(i2 & 3)) {
     i3 = HEAP32[i2 >> 2] | 0;
     if (!((i3 + -16843009 | i3) & -2139062144)) {
      do {
       i2 = i2 + 4 | 0;
       i4 = i4 + -4 | 0;
       i3 = HEAP32[i2 >> 2] | 0;
      } while (!((i3 + -16843009 | i3) & -2139062144 | 0));
      i3 = i3 & 255;
      i7 = i4;
     } else {
      i3 = i3 & 255;
      i7 = i4;
     }
    } else i7 = i4; else i7 = i4;
    i4 = i3 & 255;
    if ((i4 + -1 | 0) >>> 0 >= 127) break;
    i2 = i2 + 1 | 0;
    i4 = i7 + -1 | 0;
   }
   if ((i4 + -194 | 0) >>> 0 > 50) {
    i4 = i7;
    i8 = 54;
   } else {
    i3 = HEAP32[2140 + (i4 + -194 << 2) >> 2] | 0;
    i6 = i2 + 1 | 0;
    i4 = i7;
    i8 = 25;
    continue L19;
   }
  } else if ((i8 | 0) == 15) {
   L22 : do if (i4) {
    while (1) {
     i3 = HEAP8[i2 >> 0] | 0;
     do if (((i3 & 255) + -1 | 0) >>> 0 < 127) if (i4 >>> 0 > 4 & (i2 & 3 | 0) == 0) {
      i7 = i2;
      while (1) {
       i2 = HEAP32[i7 >> 2] | 0;
       if ((i2 + -16843009 | i2) & -2139062144 | 0) {
        i8 = 38;
        break;
       }
       HEAP32[i5 >> 2] = i2 & 255;
       HEAP32[i5 + 4 >> 2] = HEAPU8[i7 + 1 >> 0];
       HEAP32[i5 + 8 >> 2] = HEAPU8[i7 + 2 >> 0];
       i2 = i7 + 4 | 0;
       i6 = i5 + 16 | 0;
       HEAP32[i5 + 12 >> 2] = HEAPU8[i7 + 3 >> 0];
       i4 = i4 + -4 | 0;
       if (i4 >>> 0 > 4) {
        i7 = i2;
        i5 = i6;
       } else {
        i8 = 37;
        break;
       }
      }
      if ((i8 | 0) == 37) {
       i3 = HEAP8[i2 >> 0] | 0;
       i7 = i4;
       i5 = i6;
       break;
      } else if ((i8 | 0) == 38) {
       i3 = i2 & 255;
       i2 = i7;
       i7 = i4;
       break;
      }
     } else i7 = i4; else i7 = i4; while (0);
     i4 = i3 & 255;
     if ((i4 + -1 | 0) >>> 0 >= 127) break;
     i2 = i2 + 1 | 0;
     HEAP32[i5 >> 2] = i4;
     i4 = i7 + -1 | 0;
     if (!i4) break L22; else i5 = i5 + 4 | 0;
    }
    if ((i4 + -194 | 0) >>> 0 > 50) {
     i4 = i7;
     i8 = 54;
     break L20;
    }
    i3 = HEAP32[2140 + (i4 + -194 << 2) >> 2] | 0;
    i6 = i2 + 1 | 0;
    i8 = 43;
    continue L19;
   } while (0);
   HEAP32[i9 >> 2] = i2;
   i8 = 60;
   continue L19;
  } else if ((i8 | 0) == 25) {
   i8 = (HEAPU8[i6 >> 0] | 0) >>> 3;
   if ((i8 + -16 | i8 + (i3 >> 26)) >>> 0 > 7) i8 = 52; else {
    i2 = i6 + 1 | 0;
    if (i3 & 33554432) {
     if ((HEAP8[i2 >> 0] & -64) << 24 >> 24 != -128) {
      i8 = 52;
      break;
     }
     i2 = i6 + 2 | 0;
     if (i3 & 524288) {
      if ((HEAP8[i2 >> 0] & -64) << 24 >> 24 != -128) {
       i8 = 52;
       break;
      }
      i2 = i6 + 3 | 0;
     }
    }
    i3 = i4 + -1 | 0;
    i8 = 14;
    continue L19;
   }
  } else if ((i8 | 0) == 43) {
   i8 = 0;
   i4 = HEAPU8[i6 >> 0] | 0;
   if (((i4 >>> 3) + -16 | (i4 >>> 3) + (i3 >> 26)) >>> 0 > 7) {
    i4 = i7;
    i8 = 52;
   } else {
    i2 = i6 + 1 | 0;
    i3 = i4 + -128 | i3 << 6;
    do if ((i3 | 0) < 0) {
     i4 = (HEAPU8[i2 >> 0] | 0) + -128 | 0;
     if (i4 >>> 0 > 63) {
      i2 = i6 + -1 | 0;
      i1 = i5;
      break L20;
     }
     i2 = i6 + 2 | 0;
     if ((i4 | i3 << 6 | 0) < 0) {
      i2 = (HEAPU8[i2 >> 0] | 0) + -128 | 0;
      if (i2 >>> 0 > 63) {
       i2 = i6 + -1 | 0;
       i1 = i5;
       break L20;
      } else {
       i3 = i2 | (i4 | i3 << 6) << 6;
       i2 = i6 + 3 | 0;
       break;
      }
     } else i3 = i4 | i3 << 6;
    } while (0);
    HEAP32[i5 >> 2] = i3;
    i4 = i7 + -1 | 0;
    i5 = i5 + 4 | 0;
    i8 = 15;
    continue L19;
   }
  } else if ((i8 | 0) == 60) return i1 | 0; while (0);
  if ((i8 | 0) == 52) {
   i8 = 0;
   i2 = i6 + -1 | 0;
   if (!i3) {
    i3 = HEAP8[i2 >> 0] | 0;
    i8 = 54;
   } else i1 = i5;
  }
  if ((i8 | 0) == 54) if (!(i3 << 24 >> 24)) {
   if (i5 | 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i9 >> 2] = 0;
   }
   i1 = i1 - i4 | 0;
   i8 = 60;
   continue;
  } else i1 = i5;
  HEAP32[2702] = 84;
  if (!i1) {
   i1 = -1;
   i8 = 60;
   continue;
  }
  HEAP32[i9 >> 2] = i2;
  i1 = -1;
  i8 = 60;
 }
 return 0;
}

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_(i13, i3, i10, i12) {
 i13 = i13 | 0;
 i3 = i3 | 0;
 i10 = i10 | 0;
 i12 = i12 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 L1 : do if ((i13 + 4 | 0) == (i3 | 0)) i11 = 6; else {
  i2 = HEAP8[i3 + 16 + 11 >> 0] | 0;
  i4 = i2 << 24 >> 24 < 0 ? HEAP32[i3 + 20 >> 2] | 0 : i2 & 255;
  i8 = HEAP8[i10 + 11 >> 0] | 0;
  i9 = i8 << 24 >> 24 < 0 ? HEAP32[i10 + 4 >> 2] | 0 : i8 & 255;
  i1 = i4 >>> 0 < i9 >>> 0 ? i4 : i9;
  if (!i1) i11 = 4; else {
   i1 = _memcmp(i8 << 24 >> 24 < 0 ? HEAP32[i10 >> 2] | 0 : i10, i2 << 24 >> 24 < 0 ? HEAP32[i3 + 16 >> 2] | 0 : i3 + 16 | 0, i1) | 0;
   if (!i1) i11 = 4; else if ((i1 | 0) < 0) {
    i11 = 6;
    break;
   }
  }
  if ((i11 | 0) == 4) if (i9 >>> 0 < i4 >>> 0) {
   i11 = 6;
   break;
  }
  i1 = i9 >>> 0 < i4 >>> 0 ? i9 : i4;
  if (!i1) i11 = 20; else {
   i1 = _memcmp(i2 << 24 >> 24 < 0 ? HEAP32[i3 + 16 >> 2] | 0 : i3 + 16 | 0, i8 << 24 >> 24 < 0 ? HEAP32[i10 >> 2] | 0 : i10, i1) | 0;
   if (!i1) i11 = 20; else if ((i1 | 0) >= 0) i11 = 36;
  }
  if ((i11 | 0) == 20) if (i4 >>> 0 >= i9 >>> 0) i11 = 36;
  if ((i11 | 0) == 36) {
   HEAP32[i14 + 4 >> 2] = i3;
   HEAP32[i14 >> 2] = i3;
   i3 = i14;
   break;
  }
  i7 = HEAP32[i3 + 4 >> 2] | 0;
  if (!i7) {
   i1 = HEAP32[i3 + 8 >> 2] | 0;
   if ((HEAP32[i1 >> 2] | 0) != (i3 | 0)) {
    i2 = i3 + 8 | 0;
    do {
     i6 = HEAP32[i2 >> 2] | 0;
     i2 = i6 + 8 | 0;
     i1 = HEAP32[i2 >> 2] | 0;
    } while ((HEAP32[i1 >> 2] | 0) != (i6 | 0));
   }
  } else {
   i1 = i7;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
  do if ((i1 | 0) != (i13 + 4 | 0)) {
   i5 = i1 + 16 | 0;
   i4 = HEAP8[i5 + 11 >> 0] | 0;
   i6 = i4 << 24 >> 24 < 0 ? HEAP32[i1 + 20 >> 2] | 0 : i4 & 255;
   i2 = i6 >>> 0 < i9 >>> 0 ? i6 : i9;
   if (!i2) i11 = 30; else {
    i2 = _memcmp(i8 << 24 >> 24 < 0 ? HEAP32[i10 >> 2] | 0 : i10, i4 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i5, i2) | 0;
    if (!i2) i11 = 30; else if ((i2 | 0) < 0) break;
   }
   if ((i11 | 0) == 30) if (i9 >>> 0 < i6 >>> 0) break;
   i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i13, i14 + 4 | 0, i10) | 0;
   break L1;
  } while (0);
  if (!i7) {
   HEAP32[i14 + 4 >> 2] = i3;
   i3 = i3 + 4 | 0;
   break;
  } else {
   HEAP32[i14 + 4 >> 2] = i1;
   i3 = i1;
   break;
  }
 } while (0);
 L37 : do if ((i11 | 0) == 6) {
  i9 = HEAP32[i3 >> 2] | 0;
  do if ((HEAP32[i13 >> 2] | 0) == (i3 | 0)) i1 = i3; else {
   if (!i9) {
    i2 = i3;
    while (1) {
     i1 = HEAP32[i2 + 8 >> 2] | 0;
     if ((HEAP32[i1 >> 2] | 0) == (i2 | 0)) i2 = i1; else {
      i2 = i1;
      break;
     }
    }
   } else {
    i2 = i9;
    while (1) {
     i1 = HEAP32[i2 + 4 >> 2] | 0;
     if (!i1) break; else i2 = i1;
    }
   }
   i1 = i2;
   i6 = i2 + 16 | 0;
   i4 = HEAP8[i10 + 11 >> 0] | 0;
   i8 = i4 << 24 >> 24 < 0 ? HEAP32[i10 + 4 >> 2] | 0 : i4 & 255;
   i5 = HEAP8[i6 + 11 >> 0] | 0;
   i7 = i5 << 24 >> 24 < 0 ? HEAP32[i2 + 20 >> 2] | 0 : i5 & 255;
   i2 = i8 >>> 0 < i7 >>> 0 ? i8 : i7;
   if (!i2) i11 = 12; else {
    i2 = _memcmp(i5 << 24 >> 24 < 0 ? HEAP32[i6 >> 2] | 0 : i6, i4 << 24 >> 24 < 0 ? HEAP32[i10 >> 2] | 0 : i10, i2) | 0;
    if (!i2) i11 = 12; else if ((i2 | 0) < 0) break;
   }
   if ((i11 | 0) == 12) if (i7 >>> 0 < i8 >>> 0) break;
   i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i13, i14 + 4 | 0, i10) | 0;
   break L37;
  } while (0);
  if (!i9) {
   HEAP32[i14 + 4 >> 2] = i3;
   break;
  } else {
   i3 = i1;
   HEAP32[i14 + 4 >> 2] = i3;
   i3 = i3 + 4 | 0;
   break;
  }
 } while (0);
 if (HEAP32[i3 >> 2] | 0) {
  STACKTOP = i14;
  return;
 }
 i1 = __Znwj(40) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1 + 16 | 0, i12);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1 + 28 | 0, i12 + 12 | 0);
 i2 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i3 >> 2] = i1;
 i2 = HEAP32[HEAP32[i13 >> 2] >> 2] | 0;
 if (i2) {
  HEAP32[i13 >> 2] = i2;
  i1 = HEAP32[i3 >> 2] | 0;
 }
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i13 + 4 >> 2] | 0, i1);
 HEAP32[i13 + 8 >> 2] = (HEAP32[i13 + 8 >> 2] | 0) + 1;
 STACKTOP = i14;
 return;
}

function __ZN6asmdom9createElmEPNS_5VNodeE(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i1 = HEAP8[i4 + 11 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) i2 = HEAP32[i4 + 4 >> 2] | 0; else i2 = i1 & 255;
 if (!i2) {
  if ((HEAP8[i4 + 24 + 11 >> 0] | 0) < 0) i1 = HEAP32[i4 + 24 >> 2] | 0; else i1 = i4 + 24 | 0;
  i3 = _emscripten_asm_const_ii(2, i1 | 0) | 0;
  HEAP32[i4 + 48 >> 2] = i3;
  i4 = i4 + 48 | 0;
  i4 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i5;
  return i4 | 0;
 }
 if (((i1 << 24 >> 24 < 0 ? HEAP32[i4 + 4 >> 2] | 0 : i1 & 255) | 0) == 1) if (!(__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i4, 10043, 1) | 0)) {
  if ((HEAP8[i4 + 24 + 11 >> 0] | 0) < 0) i1 = HEAP32[i4 + 24 >> 2] | 0; else i1 = i4 + 24 | 0;
  i3 = _emscripten_asm_const_ii(3, i1 | 0) | 0;
  HEAP32[i4 + 48 >> 2] = i3;
  i4 = i4 + 48 | 0;
  i4 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i5;
  return i4 | 0;
 }
 HEAP32[i5 + 12 >> 2] = 0;
 HEAP32[i5 + 12 + 4 >> 2] = 0;
 HEAP32[i5 + 12 + 8 >> 2] = 0;
 HEAP8[i5 + 12 + 11 >> 0] = 2;
 HEAP16[i5 + 12 >> 1] = 29550;
 HEAP8[i5 + 12 + 2 >> 0] = 0;
 if (!(__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_(i4 + 36 | 0, i5 + 12 | 0) | 0)) {
  if ((HEAP8[i4 + 11 >> 0] | 0) < 0) i1 = HEAP32[i4 >> 2] | 0; else i1 = i4;
  i2 = _emscripten_asm_const_ii(5, i1 | 0) | 0;
  HEAP32[i4 + 48 >> 2] = i2;
  i1 = i4 + 48 | 0;
 } else {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  HEAP32[i5 + 8 >> 2] = 0;
  HEAP8[i5 + 11 >> 0] = 2;
  HEAP16[i5 >> 1] = 29550;
  HEAP8[i5 + 2 >> 0] = 0;
  i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i4 + 36 | 0, i5 + 12 | 0, i5) | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  if (!i1) {
   i1 = __Znwj(40) | 0;
   HEAP32[i1 + 16 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i1 + 16 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   HEAP32[i1 + 16 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
   HEAP32[i5 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   HEAP32[i5 + 8 >> 2] = 0;
   HEAP32[i1 + 28 >> 2] = 0;
   HEAP32[i1 + 28 + 4 >> 2] = 0;
   HEAP32[i1 + 28 + 8 >> 2] = 0;
   i2 = HEAP32[i5 + 12 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = i2;
   HEAP32[i3 >> 2] = i1;
   i2 = HEAP32[HEAP32[i4 + 36 >> 2] >> 2] | 0;
   if (!i2) i2 = i1; else {
    HEAP32[i4 + 36 >> 2] = i2;
    i2 = HEAP32[i3 >> 2] | 0;
   }
   __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i4 + 40 >> 2] | 0, i2);
   HEAP32[i4 + 44 >> 2] = (HEAP32[i4 + 44 >> 2] | 0) + 1;
  }
  i1 = i1 + 28 | 0;
  if ((HEAP8[i1 + 11 >> 0] | 0) < 0) i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i4 + 11 >> 0] | 0) < 0) i2 = HEAP32[i4 >> 2] | 0; else i2 = i4;
  i1 = _emscripten_asm_const_iii(4, i1 | 0, i2 | 0) | 0;
  HEAP32[i4 + 48 >> 2] = i1;
  HEAP32[i5 + 12 >> 2] = 0;
  HEAP32[i5 + 12 + 4 >> 2] = 0;
  HEAP32[i5 + 12 + 8 >> 2] = 0;
  HEAP8[i5 + 12 + 11 >> 0] = 2;
  HEAP16[i5 + 12 >> 1] = 29550;
  HEAP8[i5 + 12 + 2 >> 0] = 0;
  i1 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEERKT_(i4 + 36 | 0, i5 + 12 | 0) | 0;
  if ((i1 | 0) != (i4 + 40 | 0)) __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE5eraseENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEE(i4 + 36 | 0, i1);
  i2 = HEAP32[i4 + 48 >> 2] | 0;
  i1 = i4 + 48 | 0;
 }
 i3 = HEAP32[2546] | 0;
 _emscripten_asm_const_iiii(6, i3 | 0, i4 | 0, i2 | 0) | 0;
 __ZN6asmdom9diffAttrsEPNS_5VNodeES1_(i3, i4);
 i2 = HEAP32[i4 + 52 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[i4 + 56 >> 2] | 0)) {
  i3 = 0;
  do {
   i6 = HEAP32[i1 >> 2] | 0;
   _emscripten_asm_const_iii(7, i6 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[i2 + (i3 << 2) >> 2] | 0) | 0) | 0;
   i3 = i3 + 1 | 0;
   i2 = HEAP32[i4 + 52 >> 2] | 0;
  } while ((i3 | 0) != ((HEAP32[i4 + 56 >> 2] | 0) - i2 >> 2 | 0));
  i6 = HEAP32[i1 >> 2] | 0;
  STACKTOP = i5;
  return i6 | 0;
 }
 i2 = HEAP8[i4 + 24 + 11 >> 0] | 0;
 if (i2 << 24 >> 24 < 0) i3 = HEAP32[i4 + 28 >> 2] | 0; else i3 = i2 & 255;
 if (!i3) {
  i6 = i1;
  i6 = HEAP32[i6 >> 2] | 0;
  STACKTOP = i5;
  return i6 | 0;
 }
 if (i2 << 24 >> 24 < 0) i2 = HEAP32[i4 + 24 >> 2] | 0; else i2 = i4 + 24 | 0;
 _emscripten_asm_const_iii(8, HEAP32[i1 >> 2] | 0, i2 | 0) | 0;
 i6 = i1;
 i6 = HEAP32[i6 >> 2] | 0;
 STACKTOP = i5;
 return i6 | 0;
}

function __Z5h_sdcRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEERKNS_6vectorIjNS3_IjEEEE(i6, i7, i5) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 HEAP32[i9 + 24 >> 2] = 0;
 i8 = i9 + 24 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 + 24 + 8 >> 2] = 0;
 i1 = HEAP32[i5 >> 2] | 0;
 L1 : do if ((HEAP32[i5 + 4 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  i4 = 0;
  i2 = 0;
  while (1) {
   i1 = HEAP32[i1 + (i2 << 2) >> 2] | 0;
   HEAP32[i9 + 12 >> 2] = i1;
   if (i3 >>> 0 < i4 >>> 0) {
    HEAP32[i3 >> 2] = i1;
    HEAP32[i8 >> 2] = i3 + 4;
   } else __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i9 + 24 | 0, i9 + 12 | 0);
   i2 = i2 + 1 | 0;
   i1 = HEAP32[i5 >> 2] | 0;
   if (i2 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) - i1 >> 2 >>> 0) break L1;
   i3 = HEAP32[i8 >> 2] | 0;
   i4 = HEAP32[i9 + 24 + 8 >> 2] | 0;
  }
 } while (0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i9 + 12 | 0, i6);
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = 0;
 HEAP32[i9 >> 2] = i9 + 4;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) != (i7 + 4 | 0)) do {
  i2 = i1 + 16 | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_(i9, i9 + 4 | 0, i2, i2);
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i6 = HEAP32[i2 >> 2] | 0;
    i2 = i6 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i6 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i7 + 4 | 0));
 i4 = __Znwj(64) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4, i9 + 12 | 0);
 HEAP32[i4 + 40 >> 2] = 0;
 HEAP32[i4 + 44 >> 2] = 0;
 HEAP32[i4 + 12 >> 2] = 0;
 HEAP32[i4 + 12 + 4 >> 2] = 0;
 HEAP32[i4 + 12 + 8 >> 2] = 0;
 HEAP32[i4 + 12 + 12 >> 2] = 0;
 HEAP32[i4 + 12 + 16 >> 2] = 0;
 HEAP32[i4 + 12 + 20 >> 2] = 0;
 HEAP32[i4 + 36 >> 2] = i4 + 40;
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) != (i9 + 4 | 0)) do {
  i2 = i1 + 16 | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_(i4 + 36 | 0, i4 + 40 | 0, i2, i2);
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i7 = HEAP32[i2 >> 2] | 0;
    i2 = i7 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i7 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i9 + 4 | 0));
 HEAP32[i4 + 52 >> 2] = 0;
 HEAP32[i4 + 56 >> 2] = 0;
 HEAP32[i4 + 60 >> 2] = 0;
 i1 = HEAP32[i8 >> 2] | 0;
 i2 = HEAP32[i9 + 24 >> 2] | 0;
 if (i1 - i2 >> 2 | 0) {
  if (i1 - i2 >> 2 >>> 0 > 1073741823) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i3 = __Znwj(i1 - i2 | 0) | 0;
  HEAP32[i4 + 56 >> 2] = i3;
  HEAP32[i4 + 52 >> 2] = i3;
  HEAP32[i4 + 60 >> 2] = i3 + (i1 - i2 >> 2 << 2);
  if ((i1 - i2 | 0) > 0) {
   _memcpy(i3 | 0, i2 | 0, i1 - i2 | 0) | 0;
   HEAP32[i4 + 56 >> 2] = i3 + ((i1 - i2 | 0) >>> 2 << 2);
  }
 }
 __ZN6asmdom5VNode11adjustVNodeEv(i4);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i9 + 4 >> 2] | 0);
 if ((HEAP8[i9 + 12 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i9 + 12 >> 2] | 0);
 if (!i2) {
  STACKTOP = i9;
  return i4 | 0;
 }
 if ((i1 | 0) != (i2 | 0)) HEAP32[i8 >> 2] = i1 + (~((i1 + -4 - i2 | 0) >>> 2) << 2);
 __ZdlPv(i2);
 STACKTOP = i9;
 return i4 | 0;
}

function __ZN6asmdom9diffAttrsEPNS_5VNodeES1_(i10, i11) {
 i10 = i10 | 0;
 i11 = i11 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i12 = 0, i13 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (!(HEAP32[i10 + 44 >> 2] | 0)) if (!(HEAP32[i11 + 44 >> 2] | 0)) {
  STACKTOP = i13;
  return;
 }
 i1 = HEAP32[i10 + 36 >> 2] | 0;
 if ((i1 | 0) != (i10 + 40 | 0)) do {
  i2 = i1 + 16 | 0;
  if (!(__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_(i11 + 36 | 0, i2) | 0)) {
   if ((HEAP8[i2 + 11 >> 0] | 0) < 0) i2 = HEAP32[i2 >> 2] | 0;
   _emscripten_asm_const_iii(0, HEAP32[i11 + 48 >> 2] | 0, i2 | 0) | 0;
  }
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i9 = HEAP32[i2 >> 2] | 0;
    i2 = i9 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i9 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i10 + 40 | 0));
 i1 = HEAP32[i11 + 36 >> 2] | 0;
 if ((i1 | 0) == (i11 + 40 | 0)) {
  STACKTOP = i13;
  return;
 }
 do {
  i9 = i1 + 16 | 0;
  L30 : do if (!(__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_(i10 + 36 | 0, i9) | 0)) i12 = 31; else {
   i4 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i10 + 36 | 0, i13, i9) | 0;
   i2 = HEAP32[i4 >> 2] | 0;
   if (!i2) {
    i2 = __Znwj(40) | 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 16 | 0, i9);
    HEAP32[i2 + 28 >> 2] = 0;
    HEAP32[i2 + 28 + 4 >> 2] = 0;
    HEAP32[i2 + 28 + 8 >> 2] = 0;
    i3 = HEAP32[i13 >> 2] | 0;
    HEAP32[i2 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    HEAP32[i2 + 8 >> 2] = i3;
    HEAP32[i4 >> 2] = i2;
    i3 = HEAP32[HEAP32[i10 + 36 >> 2] >> 2] | 0;
    if (!i3) i3 = i2; else {
     HEAP32[i10 + 36 >> 2] = i3;
     i3 = HEAP32[i4 >> 2] | 0;
    }
    __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i10 + 40 >> 2] | 0, i3);
    HEAP32[i10 + 44 >> 2] = (HEAP32[i10 + 44 >> 2] | 0) + 1;
   }
   i3 = i2 + 28 | 0;
   i7 = i1 + 28 | 0;
   i8 = HEAP8[i3 + 11 >> 0] | 0;
   i5 = i8 << 24 >> 24 < 0 ? HEAP32[i2 + 32 >> 2] | 0 : i8 & 255;
   i2 = HEAP8[i7 + 11 >> 0] | 0;
   if ((i5 | 0) == ((i2 << 24 >> 24 < 0 ? HEAP32[i1 + 32 >> 2] | 0 : i2 & 255) | 0)) {
    i4 = HEAP32[i3 >> 2] | 0;
    i6 = i8 << 24 >> 24 < 0 ? i4 : i3;
    i2 = i2 << 24 >> 24 < 0 ? HEAP32[i7 >> 2] | 0 : i7;
    if (i8 << 24 >> 24 < 0) {
     if (!i5) break;
     if (!(_memcmp(i6, i2, i5) | 0)) break; else {
      i12 = 31;
      break;
     }
    }
    if (i5 | 0) if ((i4 & 255) << 24 >> 24 == (HEAP8[i2 >> 0] | 0)) {
     i4 = i8 & 255;
     while (1) {
      i4 = i4 + -1 | 0;
      i3 = i3 + 1 | 0;
      if (!i4) break L30;
      i2 = i2 + 1 | 0;
      if ((HEAP8[i3 >> 0] | 0) != (HEAP8[i2 >> 0] | 0)) {
       i12 = 31;
       break;
      }
     }
    } else i12 = 31;
   } else i12 = 31;
  } while (0);
  if ((i12 | 0) == 31) {
   i12 = 0;
   if ((HEAP8[i9 + 11 >> 0] | 0) < 0) i3 = HEAP32[i9 >> 2] | 0; else i3 = i9;
   i2 = i1 + 28 | 0;
   if ((HEAP8[i2 + 11 >> 0] | 0) < 0) i2 = HEAP32[i2 >> 2] | 0;
   _emscripten_asm_const_iiii(1, HEAP32[i11 + 48 >> 2] | 0, i3 | 0, i2 | 0) | 0;
  }
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i9 = HEAP32[i2 >> 2] | 0;
    i2 = i9 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i9 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i11 + 40 | 0));
 STACKTOP = i13;
 return;
}

function __ZN6asmdom5VNode11adjustVNodeEv(i6) {
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 HEAP32[i7 + 12 + 4 >> 2] = 0;
 HEAP32[i7 + 12 + 4 + 4 >> 2] = 0;
 HEAP8[i7 + 12 + 11 >> 0] = 3;
 HEAP8[i7 + 12 >> 0] = HEAP8[2841] | 0;
 HEAP8[i7 + 12 + 1 >> 0] = HEAP8[2842] | 0;
 HEAP8[i7 + 12 + 2 >> 0] = HEAP8[2843] | 0;
 HEAP8[i7 + 12 + 3 >> 0] = 0;
 if (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_(i6 + 36 | 0, i7 + 12 | 0) | 0) {
  HEAP32[i7 + 4 >> 2] = 0;
  HEAP32[i7 + 4 + 4 >> 2] = 0;
  HEAP8[i7 + 11 >> 0] = 3;
  HEAP8[i7 >> 0] = HEAP8[2841] | 0;
  HEAP8[i7 + 1 >> 0] = HEAP8[2842] | 0;
  HEAP8[i7 + 2 >> 0] = HEAP8[2843] | 0;
  HEAP8[i7 + 3 >> 0] = 0;
  i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i6 + 36 | 0, i7 + 12 | 0, i7) | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  if (!i1) {
   i1 = __Znwj(40) | 0;
   HEAP32[i1 + 16 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i1 + 16 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   HEAP32[i1 + 16 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   HEAP32[i7 + 8 >> 2] = 0;
   HEAP32[i1 + 28 >> 2] = 0;
   HEAP32[i1 + 28 + 4 >> 2] = 0;
   HEAP32[i1 + 28 + 8 >> 2] = 0;
   i2 = HEAP32[i7 + 12 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = i2;
   HEAP32[i3 >> 2] = i1;
   i2 = HEAP32[HEAP32[i6 + 36 >> 2] >> 2] | 0;
   if (!i2) i2 = i1; else {
    HEAP32[i6 + 36 >> 2] = i2;
    i2 = HEAP32[i3 >> 2] | 0;
   }
   __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i6 + 40 >> 2] | 0, i2);
   HEAP32[i6 + 44 >> 2] = (HEAP32[i6 + 44 >> 2] | 0) + 1;
  }
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i6 + 12 | 0, i1 + 28 | 0) | 0;
  HEAP32[i7 + 12 + 4 >> 2] = 0;
  HEAP32[i7 + 12 + 4 + 4 >> 2] = 0;
  HEAP8[i7 + 12 + 11 >> 0] = 3;
  HEAP8[i7 + 12 >> 0] = HEAP8[2841] | 0;
  HEAP8[i7 + 12 + 1 >> 0] = HEAP8[2842] | 0;
  HEAP8[i7 + 12 + 2 >> 0] = HEAP8[2843] | 0;
  HEAP8[i7 + 12 + 3 >> 0] = 0;
  i1 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEERKT_(i6 + 36 | 0, i7 + 12 | 0) | 0;
  if ((i1 | 0) != (i6 + 40 | 0)) __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE5eraseENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEE(i6 + 36 | 0, i1);
 }
 i2 = (HEAP8[i6 + 11 >> 0] | 0) < 0;
 if (i2) i1 = HEAP32[i6 >> 2] | 0; else i1 = i6;
 if ((HEAP8[i1 >> 0] | 0) == 115) {
  if (i2) i1 = HEAP32[i6 >> 2] | 0; else i1 = i6;
  if ((HEAP8[i1 + 1 >> 0] | 0) == 118) {
   if (i2) i1 = HEAP32[i6 >> 2] | 0; else i1 = i6;
   if ((HEAP8[i1 + 2 >> 0] | 0) == 103) __ZN6asmdom5addNSEPNS_5VNodeE(i6);
  }
 }
 i1 = HEAP32[i6 + 52 >> 2] | 0;
 i5 = HEAP32[i6 + 56 >> 2] | 0;
 L30 : do if ((i1 | 0) != (i5 | 0)) {
  do {
   if (!(HEAP32[i1 >> 2] | 0)) break L30;
   i1 = i1 + 4 | 0;
  } while ((i1 | 0) != (i5 | 0));
  STACKTOP = i7;
  return;
 } while (0);
 if ((i1 | 0) == (i5 | 0)) {
  STACKTOP = i7;
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
  i2 = HEAP32[i6 + 56 >> 2] | 0;
 }
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i7;
  return;
 }
 HEAP32[i6 + 56 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
 STACKTOP = i7;
 return;
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

function __ZNSt3__2L12utf8_to_ucs4EPKhS1_RS1_PjS3_RS3_mNS_12codecvt_modeE(i1, i9, i10, i2, i11, i12, i8, i3) {
 i1 = i1 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i2 = i2 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i8 = i8 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i10 >> 2] = i1;
 HEAP32[i12 >> 2] = i2;
 i1 = HEAP32[i10 >> 2] | 0;
 if (i3 & 4) if ((i9 - i1 | 0) > 2) if ((HEAP8[i1 >> 0] | 0) == -17) if ((HEAP8[i1 + 1 >> 0] | 0) == -69) if ((HEAP8[i1 + 2 >> 0] | 0) == -65) {
  HEAP32[i10 >> 2] = i1 + 3;
  i1 = i1 + 3 | 0;
 }
 L8 : do if (i1 >>> 0 < i9 >>> 0) {
  i7 = HEAP32[i12 >> 2] | 0;
  i4 = i1;
  while (1) {
   if (i7 >>> 0 >= i11 >>> 0) {
    i1 = 1;
    break L8;
   }
   i6 = HEAP8[i4 >> 0] | 0;
   i3 = i4 + 1 | 0;
   do if (i6 << 24 >> 24 > -1) {
    if ((i6 & 255) >>> 0 > i8 >>> 0) {
     i1 = 2;
     break L8;
    }
    HEAP32[i7 >> 2] = i6 & 255;
    i1 = i3;
   } else {
    if ((i6 & 255) < 194) {
     i1 = 2;
     break L8;
    }
    i1 = i4 + 2 | 0;
    i2 = i9 - i4 | 0;
    if ((i6 & 255) < 224) {
     if ((i2 | 0) < 2) {
      i1 = 1;
      break L8;
     }
     i2 = HEAPU8[i3 >> 0] | 0;
     if ((i2 & 192 | 0) != 128) {
      i1 = 2;
      break L8;
     }
     if ((i2 & 63 | (i6 & 255) << 6 & 1984) >>> 0 > i8 >>> 0) {
      i1 = 2;
      break L8;
     }
     HEAP32[i7 >> 2] = i2 & 63 | (i6 & 255) << 6 & 1984;
     break;
    }
    i5 = i4 + 3 | 0;
    if ((i6 & 255) < 240) {
     if ((i2 | 0) < 3) {
      i1 = 1;
      break L8;
     }
     i2 = HEAP8[i1 >> 0] | 0;
     i1 = HEAPU8[i3 >> 0] | 0;
     switch (i6 << 24 >> 24) {
     case -32:
      {
       if ((i1 & 224 | 0) != 160) {
        i1 = 2;
        break L8;
       }
       break;
      }
     case -19:
      {
       if ((i1 & 224 | 0) != 128) {
        i1 = 2;
        break L8;
       }
       break;
      }
     default:
      if ((i1 & 192 | 0) != 128) {
       i1 = 2;
       break L8;
      }
     }
     if ((i2 & 192 | 0) != 128) {
      i1 = 2;
      break L8;
     }
     if ((i1 << 6 & 4032 | (i6 & 255) << 12 & 61440 | i2 & 63) >>> 0 > i8 >>> 0) {
      i1 = 2;
      break L8;
     }
     HEAP32[i7 >> 2] = i1 << 6 & 4032 | (i6 & 255) << 12 & 61440 | i2 & 63;
     i1 = i5;
     break;
    }
    if ((i6 & 255) >= 245) {
     i1 = 2;
     break L8;
    }
    if ((i2 | 0) < 4) {
     i1 = 1;
     break L8;
    }
    i3 = HEAP8[i3 >> 0] | 0;
    i2 = HEAP8[i1 >> 0] | 0;
    i1 = HEAP8[i5 >> 0] | 0;
    switch (i6 << 24 >> 24) {
    case -16:
     {
      if ((i3 + 112 & 255) >= 48) {
       i1 = 2;
       break L8;
      }
      break;
     }
    case -12:
     {
      if ((i3 & 240 | 0) != 128) {
       i1 = 2;
       break L8;
      }
      break;
     }
    default:
     if ((i3 & 192 | 0) != 128) {
      i1 = 2;
      break L8;
     }
    }
    if ((i2 & 192 | 0) != 128) {
     i1 = 2;
     break L8;
    }
    if ((i1 & 192 | 0) != 128) {
     i1 = 2;
     break L8;
    }
    if (((i3 & 255) << 12 & 258048 | (i6 & 255) << 18 & 1835008 | (i2 & 255) << 6 & 4032 | i1 & 63) >>> 0 > i8 >>> 0) {
     i1 = 2;
     break L8;
    }
    HEAP32[i7 >> 2] = (i3 & 255) << 12 & 258048 | (i6 & 255) << 18 & 1835008 | (i2 & 255) << 6 & 4032 | i1 & 63;
    i1 = i4 + 4 | 0;
   } while (0);
   HEAP32[i10 >> 2] = i1;
   i7 = (HEAP32[i12 >> 2] | 0) + 4 | 0;
   HEAP32[i12 >> 2] = i7;
   i4 = HEAP32[i10 >> 2] | 0;
   if (i4 >>> 0 >= i9 >>> 0) {
    i1 = 0;
    break;
   }
  }
 } else i1 = 0; while (0);
 return i1 | 0;
}

function __Z5h_sdtRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEES7_(i1, i4, i5) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i7 + 24 | 0, i1);
 HEAP32[i7 + 12 + 4 >> 2] = 0;
 HEAP32[i7 + 12 + 8 >> 2] = 0;
 i6 = i7 + 12 + 4 | 0;
 HEAP32[i7 + 12 >> 2] = i6;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != (i4 + 4 | 0)) do {
  i2 = i1 + 16 | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_(i7 + 12 | 0, i6, i2, i2);
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i3 = HEAP32[i2 >> 2] | 0;
    i2 = i3 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i3 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i4 + 4 | 0));
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i7, i5);
 i4 = __Znwj(64) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4, i7 + 24 | 0);
 HEAP32[i4 + 12 >> 2] = 0;
 HEAP32[i4 + 12 + 4 >> 2] = 0;
 HEAP32[i4 + 12 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4 + 24 | 0, i7);
 HEAP32[i4 + 40 >> 2] = 0;
 HEAP32[i4 + 44 >> 2] = 0;
 HEAP32[i4 + 36 >> 2] = i4 + 40;
 i1 = HEAP32[i7 + 12 >> 2] | 0;
 if ((i1 | 0) != (i6 | 0)) do {
  i2 = i1 + 16 | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_(i4 + 36 | 0, i4 + 40 | 0, i2, i2);
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i5 = HEAP32[i2 >> 2] | 0;
    i2 = i5 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i5 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i6 | 0));
 HEAP32[i4 + 52 >> 2] = 0;
 HEAP32[i4 + 56 >> 2] = 0;
 HEAP32[i4 + 60 >> 2] = 0;
 __ZN6asmdom5VNode11adjustVNodeEv(i4);
 if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i6 >> 2] | 0);
 if ((HEAP8[i7 + 24 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i7;
  return i4 | 0;
 }
 __ZdlPv(HEAP32[i7 + 24 >> 2] | 0);
 STACKTOP = i7;
 return i4 | 0;
}

function __Z5h_sdnRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEERKj(i1, i5, i4) {
 i1 = i1 | 0;
 i5 = i5 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i6 + 12 | 0, i1);
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 HEAP32[i6 >> 2] = i6 + 4;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) != (i5 + 4 | 0)) do {
  i2 = i1 + 16 | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_(i6, i6 + 4 | 0, i2, i2);
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i3 = HEAP32[i2 >> 2] | 0;
    i2 = i3 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i3 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i5 + 4 | 0));
 i4 = HEAP32[i4 >> 2] | 0;
 i5 = __Znwj(64) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5, i6 + 12 | 0);
 HEAP32[i5 + 40 >> 2] = 0;
 HEAP32[i5 + 44 >> 2] = 0;
 HEAP32[i5 + 12 >> 2] = 0;
 HEAP32[i5 + 12 + 4 >> 2] = 0;
 HEAP32[i5 + 12 + 8 >> 2] = 0;
 HEAP32[i5 + 12 + 12 >> 2] = 0;
 HEAP32[i5 + 12 + 16 >> 2] = 0;
 HEAP32[i5 + 12 + 20 >> 2] = 0;
 HEAP32[i5 + 36 >> 2] = i5 + 40;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) != (i6 + 4 | 0)) do {
  i2 = i1 + 16 | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_(i5 + 36 | 0, i5 + 40 | 0, i2, i2);
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i3 = HEAP32[i2 >> 2] | 0;
    i2 = i3 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i3 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i6 + 4 | 0));
 HEAP32[i5 + 52 >> 2] = 0;
 HEAP32[i5 + 56 >> 2] = 0;
 HEAP32[i5 + 60 >> 2] = 0;
 i3 = __Znwj(4) | 0;
 HEAP32[i5 + 52 >> 2] = i3;
 HEAP32[i5 + 60 >> 2] = i3 + 4;
 HEAP32[i3 >> 2] = i4;
 HEAP32[i5 + 56 >> 2] = i3 + 4;
 __ZN6asmdom5VNode11adjustVNodeEv(i5);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i6 + 4 >> 2] | 0);
 if ((HEAP8[i6 + 12 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i6;
  return i5 | 0;
 }
 __ZdlPv(HEAP32[i6 + 12 >> 2] | 0);
 STACKTOP = i6;
 return i5 | 0;
}

function ___get_locale(i10, i1) {
 i10 = i10 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 do if (!(HEAP8[i1 >> 0] | 0)) {
  i1 = _getenv(9135) | 0;
  if (i1 | 0) if (HEAP8[i1 >> 0] | 0) break;
  i1 = _getenv(9063 + (i10 * 12 | 0) | 0) | 0;
  if (i1 | 0) if (HEAP8[i1 >> 0] | 0) break;
  i1 = _getenv(9142) | 0;
  if (i1 | 0) if (HEAP8[i1 >> 0] | 0) break;
  i1 = 9147;
 } while (0);
 i2 = 0;
 L13 : do {
  switch (HEAP8[i1 + i2 >> 0] | 0) {
  case 47:
  case 0:
   break L13;
  default:
   {}
  }
  i2 = i2 + 1 | 0;
 } while (i2 >>> 0 < 15);
 i3 = HEAP8[i1 >> 0] | 0;
 if (i3 << 24 >> 24 == 46) {
  i1 = 9147;
  i9 = 15;
 } else if (!(HEAP8[i1 + i2 >> 0] | 0)) if (i3 << 24 >> 24 == 67) i9 = 15; else i9 = 16; else {
  i1 = 9147;
  i9 = 15;
 }
 if ((i9 | 0) == 15) if (!(HEAP8[i1 + 1 >> 0] | 0)) i9 = 18; else i9 = 16;
 L22 : do if ((i9 | 0) == 16) if (!(_strcmp(i1, 9147) | 0)) i9 = 18; else if (!(_strcmp(i1, 9155) | 0)) i9 = 18; else {
  i3 = HEAP32[2694] | 0;
  if (i3 | 0) do {
   if (!(_strcmp(i1, i3 + 8 | 0) | 0)) {
    i1 = i3;
    break L22;
   }
   i3 = HEAP32[i3 + 24 >> 2] | 0;
  } while ((i3 | 0) != 0);
  ___lock(10780);
  i3 = HEAP32[2694] | 0;
  L32 : do if (i3 | 0) {
   while (1) {
    if (!(_strcmp(i1, i3 + 8 | 0) | 0)) break;
    i3 = HEAP32[i3 + 24 >> 2] | 0;
    if (!i3) break L32;
   }
   ___unlock(10780);
   i1 = i3;
   break L22;
  } while (0);
  L39 : do if (!(HEAP32[2673] | 0)) {
   i3 = _getenv(9161) | 0;
   if (!i3) i9 = 41; else if (!(HEAP8[i3 >> 0] | 0)) i9 = 41; else {
    i8 = 254 - i2 | 0;
    i7 = i2 + 1 | 0;
    while (1) {
     i6 = ___strchrnul(i3) | 0;
     i4 = HEAP8[i6 >> 0] | 0;
     i5 = ((i4 << 24 >> 24 != 0) << 31 >> 31) + (i6 - i3) | 0;
     if (i5 >>> 0 < i8 >>> 0) {
      _memcpy(i11 + 8 | 0, i3 | 0, i5 | 0) | 0;
      HEAP8[i11 + 8 + i5 >> 0] = 47;
      _memcpy(i11 + 8 + i5 + 1 | 0, i1 | 0, i2 | 0) | 0;
      HEAP8[i11 + 8 + (i7 + i5) >> 0] = 0;
      i5 = ___map_file(i11 + 8 | 0, i11 | 0) | 0;
      if (i5 | 0) break;
      i3 = HEAP8[i6 >> 0] | 0;
     } else i3 = i4;
     i3 = i6 + (i3 << 24 >> 24 != 0 & 1) | 0;
     if (!(HEAP8[i3 >> 0] | 0)) {
      i9 = 41;
      break L39;
     }
    }
    i4 = _malloc(28) | 0;
    i3 = HEAP32[i11 >> 2] | 0;
    if (!i4) {
     ___munmap(i5, i3);
     i9 = 41;
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     HEAP32[i4 + 4 >> 2] = i3;
     _memcpy(i4 + 8 | 0, i1 | 0, i2 | 0) | 0;
     HEAP8[i4 + 8 + i2 >> 0] = 0;
     HEAP32[i4 + 24 >> 2] = HEAP32[2694];
     HEAP32[2694] = i4;
     i1 = i4;
     break;
    }
   }
  } else i9 = 41; while (0);
  if ((i9 | 0) == 41) {
   i3 = _malloc(28) | 0;
   if (!i3) i1 = i3; else {
    HEAP32[i3 >> 2] = 2096;
    HEAP32[i3 + 4 >> 2] = 20;
    _memcpy(i3 + 8 | 0, i1 | 0, i2 | 0) | 0;
    HEAP8[i3 + 8 + i2 >> 0] = 0;
    HEAP32[i3 + 24 >> 2] = HEAP32[2694];
    HEAP32[2694] = i3;
    i1 = i3;
   }
  }
  ___unlock(10780);
  i1 = (i10 | 0) == 0 & (i1 | 0) == 0 ? 2068 : i1;
 } while (0);
 do if ((i9 | 0) == 18) {
  if (!i10) if ((HEAP8[i1 + 1 >> 0] | 0) == 46) {
   i1 = 2068;
   break;
  }
  i1 = 0;
 } while (0);
 STACKTOP = i11;
 return i1 | 0;
}

function __ZNKSt3__27codecvtIwc11__mbstate_tE5do_inERS1_PKcS5_RS5_PwS7_RS7_(i9, i7, i1, i12, i11, i3, i8, i10) {
 i9 = i9 | 0;
 i7 = i7 | 0;
 i1 = i1 | 0;
 i12 = i12 | 0;
 i11 = i11 | 0;
 i3 = i3 | 0;
 i8 = i8 | 0;
 i10 = i10 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 L1 : do if ((i1 | 0) == (i12 | 0)) {
  HEAP32[i10 >> 2] = i3;
  HEAP32[i11 >> 2] = i1;
  i13 = 30;
 } else {
  i2 = i1;
  while (1) {
   if (!(HEAP8[i2 >> 0] | 0)) break;
   i2 = i2 + 1 | 0;
   if ((i2 | 0) == (i12 | 0)) {
    i2 = i12;
    break;
   }
  }
  HEAP32[i10 >> 2] = i3;
  HEAP32[i11 >> 2] = i1;
  if ((i3 | 0) == (i8 | 0)) i13 = 30; else {
   while (1) {
    i6 = HEAP32[i7 + 4 >> 2] | 0;
    HEAP32[i14 >> 2] = HEAP32[i7 >> 2];
    HEAP32[i14 + 4 >> 2] = i6;
    i6 = i2;
    i4 = ___uselocale(HEAP32[i9 + 8 >> 2] | 0) | 0;
    i5 = _mbsnrtowcs(i3, i11, i6 - i1 | 0, i8 - i3 >> 2, i7) | 0;
    if (i4 | 0) ___uselocale(i4) | 0;
    if ((i5 | 0) == -1) {
     i13 = 9;
     break;
    }
    i3 = (HEAP32[i10 >> 2] | 0) + (i5 << 2) | 0;
    HEAP32[i10 >> 2] = i3;
    i1 = HEAP32[i11 >> 2] | 0;
    if ((i3 | 0) == (i8 | 0)) {
     i13 = 27;
     break;
    }
    if ((i2 | 0) == (i12 | 0)) i2 = i12; else {
     i2 = ___uselocale(HEAP32[i9 + 8 >> 2] | 0) | 0;
     i1 = _mbrtowc(i3, i1, 1, i7) | 0;
     if (i2 | 0) ___uselocale(i2) | 0;
     if (i1 | 0) {
      i1 = 2;
      break;
     }
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 4;
     i1 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
     HEAP32[i11 >> 2] = i1;
     L20 : do if ((i1 | 0) == (i12 | 0)) i2 = i12; else {
      i2 = i1;
      while (1) {
       if (!(HEAP8[i2 >> 0] | 0)) break L20;
       i2 = i2 + 1 | 0;
       if ((i2 | 0) == (i12 | 0)) {
        i2 = i12;
        break;
       }
      }
     } while (0);
     i3 = HEAP32[i10 >> 2] | 0;
    }
    if ((i3 | 0) == (i8 | 0) | (i1 | 0) == (i12 | 0)) {
     i13 = 30;
     break L1;
    }
   }
   if ((i13 | 0) == 27) {
    i13 = 30;
    break;
   }
   L28 : do if ((i13 | 0) == 9) {
    HEAP32[i10 >> 2] = i3;
    L30 : do if ((i1 | 0) != (HEAP32[i11 >> 2] | 0)) {
     i2 = i3;
     L31 : while (1) {
      i3 = ___uselocale(HEAP32[i9 + 8 >> 2] | 0) | 0;
      i2 = _mbrtowc(i2, i1, i6 - i1 | 0, i14) | 0;
      if (i3 | 0) ___uselocale(i3) | 0;
      switch (i2 | 0) {
      case -1:
       {
        i13 = 14;
        break L31;
       }
      case -2:
       {
        i13 = 15;
        break L31;
       }
      case 0:
       {
        i2 = 1;
        break;
       }
      default:
       {}
      }
      i1 = i1 + i2 | 0;
      i2 = (HEAP32[i10 >> 2] | 0) + 4 | 0;
      HEAP32[i10 >> 2] = i2;
      if ((i1 | 0) == (HEAP32[i11 >> 2] | 0)) break L30;
     }
     if ((i13 | 0) == 14) {
      HEAP32[i11 >> 2] = i1;
      i1 = 2;
      break L28;
     } else if ((i13 | 0) == 15) {
      HEAP32[i11 >> 2] = i1;
      i1 = 1;
      break L28;
     }
    } while (0);
    HEAP32[i11 >> 2] = i1;
    i1 = (i1 | 0) != (i12 | 0) & 1;
   } while (0);
  }
 } while (0);
 if ((i13 | 0) == 30) i1 = (i1 | 0) != (i12 | 0) & 1;
 STACKTOP = i14;
 return i1 | 0;
}

function __ZNKSt3__27codecvtIwc11__mbstate_tE6do_outERS1_PKwS5_RS5_PcS7_RS7_(i8, i2, i1, i7, i10, i3, i6, i9) {
 i8 = i8 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i7 = i7 | 0;
 i10 = i10 | 0;
 i3 = i3 | 0;
 i6 = i6 | 0;
 i9 = i9 | 0;
 var i4 = 0, i5 = 0, i11 = 0, i12 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 L1 : do if ((i1 | 0) == (i7 | 0)) i2 = i1; else {
  i2 = i1;
  while (1) {
   if (!(HEAP32[i2 >> 2] | 0)) break L1;
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i7 | 0)) {
    i2 = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = i3;
 HEAP32[i10 >> 2] = i1;
 L6 : do if ((i3 | 0) == (i6 | 0) | (i1 | 0) == (i7 | 0)) i12 = 31; else {
  L7 : while (1) {
   i4 = ___uselocale(HEAP32[i8 + 8 >> 2] | 0) | 0;
   i5 = _wcsnrtombs(i3, i10, i2 - i1 >> 2, i6 - i3 | 0) | 0;
   if (i4 | 0) ___uselocale(i4) | 0;
   switch (i5 | 0) {
   case 0:
    {
     i1 = 1;
     break L6;
    }
   case -1:
    {
     i12 = 8;
     break L7;
    }
   default:
    {}
   }
   i3 = (HEAP32[i9 >> 2] | 0) + i5 | 0;
   HEAP32[i9 >> 2] = i3;
   if ((i3 | 0) == (i6 | 0)) {
    i12 = 30;
    break;
   }
   if ((i2 | 0) == (i7 | 0)) {
    i2 = i7;
    i1 = HEAP32[i10 >> 2] | 0;
   } else {
    i1 = ___uselocale(HEAP32[i8 + 8 >> 2] | 0) | 0;
    i2 = _wcrtomb(i11, 0) | 0;
    if (i1 | 0) ___uselocale(i1) | 0;
    if ((i2 | 0) == -1) {
     i1 = 2;
     i12 = 29;
     break;
    }
    i1 = HEAP32[i9 >> 2] | 0;
    if (i2 >>> 0 > (i6 - i1 | 0) >>> 0) {
     i1 = 1;
     i12 = 29;
     break;
    }
    if (i2 | 0) {
     i5 = HEAP8[i11 >> 0] | 0;
     HEAP32[i9 >> 2] = i1 + 1;
     HEAP8[i1 >> 0] = i5;
     if (i2 + -1 | 0) {
      i1 = i2 + -1 | 0;
      i2 = i11;
      do {
       i2 = i2 + 1 | 0;
       i5 = HEAP32[i9 >> 2] | 0;
       i4 = HEAP8[i2 >> 0] | 0;
       HEAP32[i9 >> 2] = i5 + 1;
       HEAP8[i5 >> 0] = i4;
       i1 = i1 + -1 | 0;
      } while ((i1 | 0) != 0);
     }
    }
    i1 = (HEAP32[i10 >> 2] | 0) + 4 | 0;
    HEAP32[i10 >> 2] = i1;
    L27 : do if ((i1 | 0) == (i7 | 0)) i2 = i7; else {
     i2 = i1;
     while (1) {
      if (!(HEAP32[i2 >> 2] | 0)) break L27;
      i2 = i2 + 4 | 0;
      if ((i2 | 0) == (i7 | 0)) {
       i2 = i7;
       break;
      }
     }
    } while (0);
    i3 = HEAP32[i9 >> 2] | 0;
   }
   if ((i3 | 0) == (i6 | 0) | (i1 | 0) == (i7 | 0)) {
    i12 = 31;
    break L6;
   }
  }
  if ((i12 | 0) == 8) {
   HEAP32[i9 >> 2] = i3;
   L36 : do if ((i1 | 0) != (HEAP32[i10 >> 2] | 0)) {
    i2 = i3;
    do {
     i7 = HEAP32[i1 >> 2] | 0;
     i3 = ___uselocale(HEAP32[i8 + 8 >> 2] | 0) | 0;
     i2 = _wcrtomb(i2, i7) | 0;
     if (i3 | 0) ___uselocale(i3) | 0;
     if ((i2 | 0) == -1) break L36;
     i2 = (HEAP32[i9 >> 2] | 0) + i2 | 0;
     HEAP32[i9 >> 2] = i2;
     i1 = i1 + 4 | 0;
    } while ((i1 | 0) != (HEAP32[i10 >> 2] | 0));
   } while (0);
   HEAP32[i10 >> 2] = i1;
   i1 = 2;
   break;
  } else if ((i12 | 0) == 29) break; else if ((i12 | 0) == 30) {
   i1 = HEAP32[i10 >> 2] | 0;
   i12 = 31;
   break;
  }
 } while (0);
 if ((i12 | 0) == 31) i1 = (i1 | 0) != (i7 | 0) & 1;
 STACKTOP = i11;
 return i1 | 0;
}

function __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i5 = 0, i6 = 0;
 HEAP8[i1 + 12 >> 0] = (i1 | 0) == (i4 | 0) & 1;
 if ((i1 | 0) == (i4 | 0)) return;
 while (1) {
  i5 = i1 + 8 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  if (HEAP8[i6 + 12 >> 0] | 0) {
   i2 = 23;
   break;
  }
  i3 = HEAP32[i6 + 8 >> 2] | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) == (i6 | 0)) {
   i2 = HEAP32[i3 + 4 >> 2] | 0;
   if (!i2) {
    i2 = 7;
    break;
   }
   if (!(HEAP8[i2 + 12 >> 0] | 0)) i1 = i2 + 12 | 0; else {
    i2 = 7;
    break;
   }
  } else {
   if (!i2) {
    i2 = 16;
    break;
   }
   if (!(HEAP8[i2 + 12 >> 0] | 0)) i1 = i2 + 12 | 0; else {
    i2 = 16;
    break;
   }
  }
  HEAP8[i6 + 12 >> 0] = 1;
  HEAP8[i3 + 12 >> 0] = (i3 | 0) == (i4 | 0) & 1;
  HEAP8[i1 >> 0] = 1;
  if ((i3 | 0) == (i4 | 0)) {
   i2 = 23;
   break;
  } else i1 = i3;
 }
 if ((i2 | 0) == 7) {
  if ((HEAP32[i6 >> 2] | 0) == (i1 | 0)) i1 = i6; else {
   i2 = HEAP32[i6 + 4 >> 2] | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i6 + 4 >> 2] = i1;
   if (!i1) i1 = i3; else {
    HEAP32[i1 + 8 >> 2] = i6;
    i1 = HEAP32[i6 + 8 >> 2] | 0;
   }
   HEAP32[i2 + 8 >> 2] = i1;
   i1 = HEAP32[i6 + 8 >> 2] | 0;
   HEAP32[((HEAP32[i1 >> 2] | 0) == (i6 | 0) ? i1 : i1 + 4 | 0) >> 2] = i2;
   HEAP32[i2 >> 2] = i6;
   HEAP32[i6 + 8 >> 2] = i2;
   i1 = i2;
   i3 = HEAP32[i2 + 8 >> 2] | 0;
  }
  HEAP8[i1 + 12 >> 0] = 1;
  HEAP8[i3 + 12 >> 0] = 0;
  i1 = HEAP32[i3 >> 2] | 0;
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  HEAP32[i3 >> 2] = i2;
  if (i2 | 0) HEAP32[i2 + 8 >> 2] = i3;
  i6 = i3 + 8 | 0;
  HEAP32[i1 + 8 >> 2] = HEAP32[i6 >> 2];
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[((HEAP32[i5 >> 2] | 0) == (i3 | 0) ? i5 : i5 + 4 | 0) >> 2] = i1;
  HEAP32[i1 + 4 >> 2] = i3;
  HEAP32[i6 >> 2] = i1;
  return;
 } else if ((i2 | 0) == 16) {
  if ((HEAP32[i6 >> 2] | 0) == (i1 | 0)) {
   i4 = i1 + 4 | 0;
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   if (i2) {
    HEAP32[i2 + 8 >> 2] = i6;
    i3 = HEAP32[i6 + 8 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i3;
   i3 = HEAP32[i6 + 8 >> 2] | 0;
   HEAP32[((HEAP32[i3 >> 2] | 0) == (i6 | 0) ? i3 : i3 + 4 | 0) >> 2] = i1;
   HEAP32[i4 >> 2] = i6;
   HEAP32[i6 + 8 >> 2] = i1;
   i3 = HEAP32[i5 >> 2] | 0;
  } else i1 = i6;
  HEAP8[i1 + 12 >> 0] = 1;
  HEAP8[i3 + 12 >> 0] = 0;
  i6 = i3 + 4 | 0;
  i1 = HEAP32[i6 >> 2] | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  if (i2 | 0) HEAP32[i2 + 8 >> 2] = i3;
  i6 = i3 + 8 | 0;
  HEAP32[i1 + 8 >> 2] = HEAP32[i6 >> 2];
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[((HEAP32[i5 >> 2] | 0) == (i3 | 0) ? i5 : i5 + 4 | 0) >> 2] = i1;
  HEAP32[i1 >> 2] = i3;
  HEAP32[i6 >> 2] = i1;
  return;
 } else if ((i2 | 0) == 23) return;
}

function __ZNSt3__2L19utf8_to_ucs4_lengthEPKhS1_jmNS_12codecvt_modeE(i13, i11, i12, i10, i1) {
 i13 = i13 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i10 = i10 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i11 - i13 | 0) > 2 & (i1 & 4 | 0) != 0) if ((HEAP8[i13 >> 0] | 0) == -17) if ((HEAP8[i13 + 1 >> 0] | 0) == -69) i2 = (HEAP8[i13 + 2 >> 0] | 0) == -65 ? i13 + 3 | 0 : i13; else i2 = i13; else i2 = i13; else i2 = i13;
 i1 = i2;
 L6 : do if ((i12 | 0) != 0 & i2 >>> 0 < i11 >>> 0) {
  i9 = 0;
  do {
   i8 = HEAP8[i2 >> 0] | 0;
   i4 = i2 + 1 | 0;
   do if (i8 << 24 >> 24 > -1) if ((i8 & 255) >>> 0 > i10 >>> 0) break L6; else i2 = i4; else {
    if ((i8 & 255) < 194) break L6;
    i6 = i2 + 2 | 0;
    i3 = i11 - i1 | 0;
    if ((i8 & 255) < 224) {
     if ((i3 | 0) < 2) break L6;
     i2 = HEAPU8[i4 >> 0] | 0;
     if ((i2 & 192 | 0) != 128) break L6;
     if ((i2 & 63 | (i8 & 255) << 6 & 1984) >>> 0 > i10 >>> 0) break L6; else {
      i2 = i6;
      break;
     }
    }
    i7 = i2 + 3 | 0;
    if ((i8 & 255) < 240) {
     if ((i3 | 0) < 3) break L6;
     i3 = HEAP8[i6 >> 0] | 0;
     i2 = HEAPU8[i4 >> 0] | 0;
     switch (i8 << 24 >> 24) {
     case -32:
      {
       if ((i2 & 224 | 0) != 160) break L6;
       break;
      }
     case -19:
      {
       if ((i2 & 224 | 0) != 128) break L6;
       break;
      }
     default:
      if ((i2 & 192 | 0) != 128) break L6;
     }
     if ((i3 & 192 | 0) != 128) break L6;
     if ((i2 << 6 & 4032 | (i8 & 255) << 12 & 61440 | i3 & 63) >>> 0 > i10 >>> 0) break L6; else {
      i2 = i7;
      break;
     }
    }
    if ((i3 | 0) < 4 | (i8 & 255) > 244) break L6;
    i5 = HEAP8[i4 >> 0] | 0;
    i4 = HEAP8[i6 >> 0] | 0;
    i3 = HEAP8[i7 >> 0] | 0;
    switch (i8 << 24 >> 24) {
    case -16:
     {
      if ((i5 + 112 & 255) >= 48) break L6;
      break;
     }
    case -12:
     {
      if ((i5 & 240 | 0) != 128) break L6;
      break;
     }
    default:
     if ((i5 & 192 | 0) != 128) break L6;
    }
    if ((i4 & 192 | 0) != 128) break L6;
    if ((i3 & 192 | 0) != 128) break L6;
    if (((i5 & 255) << 12 & 258048 | (i8 & 255) << 18 & 1835008 | (i4 & 255) << 6 & 4032 | i3 & 63) >>> 0 > i10 >>> 0) break L6; else i2 = i2 + 4 | 0;
   } while (0);
   i9 = i9 + 1 | 0;
   i1 = i2;
  } while (i9 >>> 0 < i12 >>> 0 & i2 >>> 0 < i11 >>> 0);
 } while (0);
 return i1 - i13 | 0;
}

function __ZNSt3__2L12ucs4_to_utf8EPKjS1_RS1_PhS3_RS3_mNS_12codecvt_modeE(i1, i6, i7, i3, i8, i9, i5, i2) {
 i1 = i1 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i3 = i3 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i5 = i5 | 0;
 i2 = i2 | 0;
 var i4 = 0;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i9 >> 2] = i3;
 if (!(i2 & 2)) i4 = 4; else if ((i8 - i3 | 0) < 3) i1 = 1; else {
  HEAP32[i9 >> 2] = i3 + 1;
  HEAP8[i3 >> 0] = -17;
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i4 + 1;
  HEAP8[i4 >> 0] = -69;
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i4 + 1;
  HEAP8[i4 >> 0] = -65;
  i4 = 4;
 }
 L4 : do if ((i4 | 0) == 4) {
  i1 = HEAP32[i7 >> 2] | 0;
  if (i1 >>> 0 < i6 >>> 0) while (1) {
   i2 = HEAP32[i1 >> 2] | 0;
   if (i2 >>> 0 > i5 >>> 0 | (i2 & -2048 | 0) == 55296) {
    i1 = 2;
    break L4;
   }
   do if (i2 >>> 0 < 128) {
    i1 = HEAP32[i9 >> 2] | 0;
    if ((i8 - i1 | 0) < 1) {
     i1 = 1;
     break L4;
    }
    HEAP32[i9 >> 2] = i1 + 1;
    HEAP8[i1 >> 0] = i2;
   } else {
    if (i2 >>> 0 < 2048) {
     i1 = HEAP32[i9 >> 2] | 0;
     if ((i8 - i1 | 0) < 2) {
      i1 = 1;
      break L4;
     }
     HEAP32[i9 >> 2] = i1 + 1;
     HEAP8[i1 >> 0] = i2 >>> 6 | 192;
     i4 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i4 + 1;
     HEAP8[i4 >> 0] = i2 & 63 | 128;
     break;
    }
    i1 = HEAP32[i9 >> 2] | 0;
    if (i2 >>> 0 < 65536) {
     if ((i8 - i1 | 0) < 3) {
      i1 = 1;
      break L4;
     }
     HEAP32[i9 >> 2] = i1 + 1;
     HEAP8[i1 >> 0] = i2 >>> 12 | 224;
     i4 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i4 + 1;
     HEAP8[i4 >> 0] = i2 >>> 6 & 63 | 128;
     i4 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i4 + 1;
     HEAP8[i4 >> 0] = i2 & 63 | 128;
     break;
    } else {
     if ((i8 - i1 | 0) < 4) {
      i1 = 1;
      break L4;
     }
     HEAP32[i9 >> 2] = i1 + 1;
     HEAP8[i1 >> 0] = i2 >>> 18 | 240;
     i4 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i4 + 1;
     HEAP8[i4 >> 0] = i2 >>> 12 & 63 | 128;
     i4 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i4 + 1;
     HEAP8[i4 >> 0] = i2 >>> 6 & 63 | 128;
     i4 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i4 + 1;
     HEAP8[i4 >> 0] = i2 & 63 | 128;
     break;
    }
   } while (0);
   i1 = (HEAP32[i7 >> 2] | 0) + 4 | 0;
   HEAP32[i7 >> 2] = i1;
   if (i1 >>> 0 >= i6 >>> 0) {
    i1 = 0;
    break;
   }
  } else i1 = 0;
 } while (0);
 return i1 | 0;
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

function __Z4h_scRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_6vectorIjNS3_IjEEEE(i6, i5) {
 i6 = i6 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 HEAP32[i8 + 12 >> 2] = 0;
 i7 = i8 + 12 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 + 12 + 8 >> 2] = 0;
 i1 = HEAP32[i5 >> 2] | 0;
 L1 : do if ((HEAP32[i5 + 4 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  i4 = 0;
  i2 = 0;
  while (1) {
   i1 = HEAP32[i1 + (i2 << 2) >> 2] | 0;
   HEAP32[i8 >> 2] = i1;
   if (i3 >>> 0 < i4 >>> 0) {
    HEAP32[i3 >> 2] = i1;
    HEAP32[i7 >> 2] = i3 + 4;
   } else __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i8 + 12 | 0, i8);
   i2 = i2 + 1 | 0;
   i1 = HEAP32[i5 >> 2] | 0;
   if (i2 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) - i1 >> 2 >>> 0) break L1;
   i3 = HEAP32[i7 >> 2] | 0;
   i4 = HEAP32[i8 + 12 + 8 >> 2] | 0;
  }
 } while (0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i8, i6);
 i3 = __Znwj(64) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i3, i8);
 HEAP32[i3 + 40 >> 2] = 0;
 HEAP32[i3 + 44 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 + 12 + 4 >> 2] = 0;
 HEAP32[i3 + 12 + 8 >> 2] = 0;
 HEAP32[i3 + 12 + 12 >> 2] = 0;
 HEAP32[i3 + 12 + 16 >> 2] = 0;
 HEAP32[i3 + 12 + 20 >> 2] = 0;
 HEAP32[i3 + 36 >> 2] = i3 + 40;
 HEAP32[i3 + 52 >> 2] = 0;
 HEAP32[i3 + 56 >> 2] = 0;
 HEAP32[i3 + 60 >> 2] = 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i2 = HEAP32[i8 + 12 >> 2] | 0;
 if (i1 - i2 >> 2 | 0) {
  if (i1 - i2 >> 2 >>> 0 > 1073741823) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i4 = __Znwj(i1 - i2 | 0) | 0;
  HEAP32[i3 + 56 >> 2] = i4;
  HEAP32[i3 + 52 >> 2] = i4;
  HEAP32[i3 + 60 >> 2] = i4 + (i1 - i2 >> 2 << 2);
  if ((i1 - i2 | 0) > 0) {
   _memcpy(i4 | 0, i2 | 0, i1 - i2 | 0) | 0;
   HEAP32[i3 + 56 >> 2] = i4 + ((i1 - i2 | 0) >>> 2 << 2);
  }
 }
 __ZN6asmdom5VNode11adjustVNodeEv(i3);
 if ((HEAP8[i8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 >> 2] | 0);
 if (!i2) {
  STACKTOP = i8;
  return i3 | 0;
 }
 if ((i1 | 0) != (i2 | 0)) HEAP32[i7 >> 2] = i1 + (~((i1 + -4 - i2 | 0) >>> 2) << 2);
 __ZdlPv(i2);
 STACKTOP = i8;
 return i3 | 0;
}

function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_(i9, i7, i1) {
 i9 = i9 | 0;
 i7 = i7 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 if (!i2) {
  i11 = 1;
  HEAP32[i9 >> 2] = i11;
  STACKTOP = i12;
  return;
 }
 i8 = HEAP8[i1 + 11 >> 0] | 0;
 i10 = i8 << 24 >> 24 < 0 ? HEAP32[i1 + 4 >> 2] | 0 : i8 & 255;
 i8 = i8 << 24 >> 24 < 0 ? HEAP32[i1 >> 2] | 0 : i1;
 i5 = i7 + 4 | 0;
 L4 : while (1) {
  i1 = i2;
  while (1) {
   i4 = i1 + 16 | 0;
   i3 = HEAP8[i4 + 11 >> 0] | 0;
   i6 = i3 << 24 >> 24 < 0 ? HEAP32[i1 + 20 >> 2] | 0 : i3 & 255;
   i2 = i10 >>> 0 < i6 >>> 0 ? i10 : i6;
   if (!i2) i11 = 6; else {
    i2 = _memcmp(i3 << 24 >> 24 < 0 ? HEAP32[i4 >> 2] | 0 : i4, i8, i2) | 0;
    if (!i2) i11 = 6; else if ((i2 | 0) >= 0) break;
   }
   if ((i11 | 0) == 6) {
    i11 = 0;
    if (i6 >>> 0 >= i10 >>> 0) break;
   }
   i1 = HEAP32[i1 + 4 >> 2] | 0;
   if (!i1) break L4;
  }
  i2 = HEAP32[i1 >> 2] | 0;
  if (!i2) {
   i5 = i1;
   break;
  } else i5 = i1;
 }
 if ((i5 | 0) == (i7 + 4 | 0)) {
  i11 = 1;
  HEAP32[i9 >> 2] = i11;
  STACKTOP = i12;
  return;
 }
 i3 = i5 + 16 | 0;
 i2 = HEAP8[i3 + 11 >> 0] | 0;
 i4 = i2 << 24 >> 24 < 0 ? HEAP32[i5 + 20 >> 2] | 0 : i2 & 255;
 i1 = i4 >>> 0 < i10 >>> 0 ? i4 : i10;
 if (!i1) i11 = 13; else {
  i1 = _memcmp(i8, i2 << 24 >> 24 < 0 ? HEAP32[i3 >> 2] | 0 : i3, i1) | 0;
  if (!i1) i11 = 13; else if ((i1 | 0) < 0) {
   i11 = 1;
   HEAP32[i9 >> 2] = i11;
   STACKTOP = i12;
   return;
  }
 }
 if ((i11 | 0) == 13) if (i10 >>> 0 < i4 >>> 0) {
  i11 = 1;
  HEAP32[i9 >> 2] = i11;
  STACKTOP = i12;
  return;
 }
 i8 = i5 + 28 | 0;
 i7 = HEAP8[i8 + 11 >> 0] | 0;
 i10 = i7 << 24 >> 24 < 0 ? HEAP32[i5 + 32 >> 2] | 0 : i7 & 255;
 i11 = _malloc(i10 + 4 | 0) | 0;
 HEAP32[i11 >> 2] = i10;
 _memcpy(i11 + 4 | 0, (i7 << 24 >> 24 < 0 ? HEAP32[i8 >> 2] | 0 : i8) | 0, i10 | 0) | 0;
 HEAP32[i12 >> 2] = i11;
 i11 = __emval_take_value(1032, i12 | 0) | 0;
 HEAP32[i9 >> 2] = i11;
 STACKTOP = i12;
 return;
}

function __GLOBAL__sub_I_index_cpp() {
 var i1 = 0;
 __embind_register_class(1104, 1200, 1216, 0, 5185, 10, 5188, 0, 5188, 0, 4586, 5190, 20);
 __embind_register_class_constructor(1104, 1, 2028, 5185, 11, 1);
 i1 = __Znwj(8) | 0;
 HEAP32[i1 >> 2] = 12;
 HEAP32[i1 + 4 >> 2] = 0;
 __embind_register_class_function(1104, 5216, 2, 2032, 4643, 1, i1 | 0, 0);
 i1 = __Znwj(4) | 0;
 HEAP32[i1 >> 2] = 1;
 __embind_register_class_function(1104, 5221, 3, 2040, 4670, 6, i1 | 0, 0);
 i1 = __Znwj(4) | 0;
 HEAP32[i1 >> 2] = 2;
 __embind_register_class_function(1104, 5225, 4, 2052, 5210, 4, i1 | 0, 0);
 __embind_register_class(1112, 1168, 1184, 0, 5185, 13, 5188, 0, 5188, 0, 4602, 5190, 21);
 __embind_register_class_constructor(1112, 1, 1960, 5185, 14, 2);
 i1 = __Znwj(8) | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 __embind_register_class_function(1112, 5193, 3, 1964, 4654, 3, i1 | 0, 0);
 i1 = __Znwj(8) | 0;
 HEAP32[i1 >> 2] = 4;
 HEAP32[i1 + 4 >> 2] = 0;
 __embind_register_class_function(1112, 5203, 4, 1976, 5210, 5, i1 | 0, 0);
 i1 = __Znwj(8) | 0;
 HEAP32[i1 >> 2] = 15;
 HEAP32[i1 + 4 >> 2] = 0;
 __embind_register_class_function(1112, 5216, 2, 1992, 4643, 2, i1 | 0, 0);
 i1 = __Znwj(4) | 0;
 HEAP32[i1 >> 2] = 5;
 __embind_register_class_function(1112, 5221, 3, 2e3, 4670, 7, i1 | 0, 0);
 i1 = __Znwj(4) | 0;
 HEAP32[i1 >> 2] = 8;
 __embind_register_class_function(1112, 5225, 4, 2012, 4706, 1, i1 | 0, 0);
 __embind_register_function(4617, 2, 1752, 4630, 2, 22);
 __embind_register_function(4634, 2, 1760, 4643, 3, 16);
 __embind_register_function(4647, 3, 1768, 4654, 6, 3);
 __embind_register_function(4659, 2, 1780, 4643, 4, 17);
 __embind_register_function(4664, 3, 1788, 4670, 9, 5);
 __embind_register_function(4675, 3, 1800, 4670, 10, 6);
 __embind_register_function(4681, 3, 1812, 4670, 11, 7);
 __embind_register_function(4687, 3, 1824, 4670, 12, 8);
 __embind_register_function(4693, 3, 1836, 4670, 13, 9);
 __embind_register_function(4699, 4, 1848, 4706, 2, 14);
 __embind_register_function(4712, 4, 1864, 4706, 3, 15);
 __embind_register_function(4719, 4, 1880, 4706, 4, 16);
 __embind_register_function(4726, 4, 1896, 4706, 5, 17);
 return;
}

function _wcsrtombs(i2, i6, i1) {
 i2 = i2 | 0;
 i6 = i6 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 L1 : do if (!i2) {
  i3 = HEAP32[i6 >> 2] | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  if (!i1) i1 = 0; else {
   i2 = 0;
   while (1) {
    if (i1 >>> 0 > 127) {
     i1 = _wcrtomb(i7, i1) | 0;
     if ((i1 | 0) == -1) {
      i1 = -1;
      break L1;
     }
    } else i1 = 1;
    i2 = i1 + i2 | 0;
    i3 = i3 + 4 | 0;
    i1 = HEAP32[i3 >> 2] | 0;
    if (!i1) {
     i1 = i2;
     break;
    }
   }
  }
 } else {
  L9 : do if (i1 >>> 0 > 3) {
   i4 = HEAP32[i6 >> 2] | 0;
   i3 = i1;
   i5 = i2;
   while (1) {
    i2 = HEAP32[i4 >> 2] | 0;
    if ((i2 + -1 | 0) >>> 0 > 126) {
     if (!i2) break;
     i2 = _wcrtomb(i5, i2) | 0;
     if ((i2 | 0) == -1) {
      i1 = -1;
      break L1;
     }
     i3 = i3 - i2 | 0;
     i2 = i5 + i2 | 0;
    } else {
     HEAP8[i5 >> 0] = i2;
     i4 = HEAP32[i6 >> 2] | 0;
     i3 = i3 + -1 | 0;
     i2 = i5 + 1 | 0;
    }
    i4 = i4 + 4 | 0;
    HEAP32[i6 >> 2] = i4;
    if (i3 >>> 0 <= 3) break L9; else i5 = i2;
   }
   HEAP8[i5 >> 0] = 0;
   HEAP32[i6 >> 2] = 0;
   i1 = i1 - i3 | 0;
   break L1;
  } else i3 = i1; while (0);
  if (i3) {
   i4 = HEAP32[i6 >> 2] | 0;
   i5 = i2;
   while (1) {
    i2 = HEAP32[i4 >> 2] | 0;
    if ((i2 + -1 | 0) >>> 0 > 126) {
     if (!i2) {
      i2 = 19;
      break;
     }
     i2 = _wcrtomb(i7, i2) | 0;
     if ((i2 | 0) == -1) {
      i1 = -1;
      break L1;
     }
     if (i3 >>> 0 < i2 >>> 0) {
      i2 = 22;
      break;
     }
     _wcrtomb(i5, HEAP32[i4 >> 2] | 0) | 0;
     i3 = i3 - i2 | 0;
     i2 = i5 + i2 | 0;
    } else {
     HEAP8[i5 >> 0] = i2;
     i4 = HEAP32[i6 >> 2] | 0;
     i3 = i3 + -1 | 0;
     i2 = i5 + 1 | 0;
    }
    i4 = i4 + 4 | 0;
    HEAP32[i6 >> 2] = i4;
    if (!i3) break L1; else i5 = i2;
   }
   if ((i2 | 0) == 19) {
    HEAP8[i5 >> 0] = 0;
    HEAP32[i6 >> 2] = 0;
    i1 = i1 - i3 | 0;
    break;
   } else if ((i2 | 0) == 22) {
    i1 = i1 - i3 | 0;
    break;
   }
  }
 } while (0);
 STACKTOP = i7;
 return i1 | 0;
}

function __ZN6asmdom5addNSEPNS_5VNodeE(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 0;
 HEAP8[i5 + 11 >> 0] = 2;
 HEAP16[i5 >> 1] = 29550;
 HEAP8[i5 + 2 >> 0] = 0;
 i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i4 + 36 | 0, i5 + 12 | 0, i5) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (!i1) {
  i1 = __Znwj(40) | 0;
  HEAP32[i1 + 16 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i1 + 16 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i1 + 16 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
  HEAP32[i5 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  HEAP32[i5 + 8 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  HEAP32[i1 + 28 + 4 >> 2] = 0;
  HEAP32[i1 + 28 + 8 >> 2] = 0;
  i2 = HEAP32[i5 + 12 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = i2;
  HEAP32[i3 >> 2] = i1;
  i2 = HEAP32[HEAP32[i4 + 36 >> 2] >> 2] | 0;
  if (!i2) i2 = i1; else {
   HEAP32[i4 + 36 >> 2] = i2;
   i2 = HEAP32[i3 >> 2] | 0;
  }
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i4 + 40 >> 2] | 0, i2);
  HEAP32[i4 + 44 >> 2] = (HEAP32[i4 + 44 >> 2] | 0) + 1;
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc(i1 + 28 | 0) | 0;
 i3 = HEAP8[i4 + 11 >> 0] | 0;
 if (((i3 << 24 >> 24 < 0 ? HEAP32[i4 + 4 >> 2] | 0 : i3 & 255) | 0) == 13) if (!(__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i4, 2827, 13) | 0)) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i4 + 52 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[i4 + 56 >> 2] | 0)) {
  STACKTOP = i5;
  return;
 }
 i2 = 0;
 do {
  __ZN6asmdom5addNSEPNS_5VNodeE(HEAP32[i1 + (i2 << 2) >> 2] | 0);
  i2 = i2 + 1 | 0;
  i1 = HEAP32[i4 + 52 >> 2] | 0;
 } while ((i2 | 0) != ((HEAP32[i4 + 56 >> 2] | 0) - i1 >> 2 | 0));
 STACKTOP = i5;
 return;
}

function __Z5h_elmRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEEi(i1, i4, i5) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i6 + 12 | 0, i1);
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 HEAP32[i6 >> 2] = i6 + 4;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != (i4 + 4 | 0)) do {
  i2 = i1 + 16 | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_(i6, i6 + 4 | 0, i2, i2);
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i3 = HEAP32[i2 >> 2] | 0;
    i2 = i3 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i3 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i4 + 4 | 0));
 i1 = __Znwj(64) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i1, i6 + 12 | 0, i6);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i6 + 4 >> 2] | 0);
 if ((HEAP8[i6 + 12 + 11 >> 0] | 0) >= 0) {
  i4 = i1 + 48 | 0;
  HEAP32[i4 >> 2] = i5;
  i5 = i1;
  STACKTOP = i6;
  return i5 | 0;
 }
 __ZdlPv(HEAP32[i6 + 12 >> 2] | 0);
 i4 = i1 + 48 | 0;
 HEAP32[i4 >> 2] = i5;
 i5 = i1;
 STACKTOP = i6;
 return i5 | 0;
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

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i3, i9, i1) {
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

function __ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_(i1, i6, i3, i5) {
 i1 = i1 | 0;
 i6 = i6 | 0;
 i3 = i3 | 0;
 i5 = i5 | 0;
 var i2 = 0, i4 = 0, i7 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i8 + 12 >> 2] = 0;
 HEAP32[i8 + 12 + 4 >> 2] = 0;
 HEAP32[i8 + 12 + 8 >> 2] = 0;
 if (i2 >>> 0 > 4294967279) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if (i2 >>> 0 < 11) {
  HEAP8[i8 + 12 + 11 >> 0] = i2;
  if (!i2) i1 = i8 + 12 | 0; else {
   i1 = i8 + 12 | 0;
   i7 = 6;
  }
 } else {
  i1 = __Znwj(i2 + 16 & -16) | 0;
  HEAP32[i8 + 12 >> 2] = i1;
  HEAP32[i8 + 12 + 8 >> 2] = i2 + 16 & -16 | -2147483648;
  HEAP32[i8 + 12 + 4 >> 2] = i2;
  i7 = 6;
 }
 if ((i7 | 0) == 6) _memcpy(i1 | 0, i3 + 4 | 0, i2 | 0) | 0;
 HEAP8[i1 + i2 >> 0] = 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = 0;
 if (i2 >>> 0 > 4294967279) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if (i2 >>> 0 < 11) {
  HEAP8[i8 + 11 >> 0] = i2;
  if (!i2) i1 = i8; else {
   i1 = i8;
   i7 = 12;
  }
 } else {
  i1 = __Znwj(i2 + 16 & -16) | 0;
  HEAP32[i8 >> 2] = i1;
  HEAP32[i8 + 8 >> 2] = i2 + 16 & -16 | -2147483648;
  HEAP32[i8 + 4 >> 2] = i2;
  i7 = 12;
 }
 if ((i7 | 0) == 12) _memcpy(i1 | 0, i5 + 4 | 0, i2 | 0) | 0;
 HEAP8[i1 + i2 >> 0] = 0;
 FUNCTION_TABLE_viii[i4 & 7](i6, i8 + 12 | 0, i8);
 if ((HEAP8[i8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 >> 2] | 0);
 if ((HEAP8[i8 + 12 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i8;
  return;
 }
 __ZdlPv(HEAP32[i8 + 12 >> 2] | 0);
 STACKTOP = i8;
 return;
}

function __Z4h_sdRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEE(i1, i4) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i5 + 12 | 0, i1);
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 0;
 HEAP32[i5 >> 2] = i5 + 4;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != (i4 + 4 | 0)) do {
  i2 = i1 + 16 | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_(i5, i5 + 4 | 0, i2, i2);
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i3 = HEAP32[i2 >> 2] | 0;
    i2 = i3 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i3 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i4 + 4 | 0));
 i1 = __Znwj(64) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i1, i5 + 12 | 0, i5);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i5 + 4 >> 2] | 0);
 if ((HEAP8[i5 + 12 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i5;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i5 + 12 >> 2] | 0);
 STACKTOP = i5;
 return i1 | 0;
}
function _mbsnrtowcs(i12, i11, i3, i1, i10) {
 i12 = i12 | 0;
 i11 = i11 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i10 = i10 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i13 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 1040 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i13 >> 2] = i6;
 i5 = i12 | 0 ? i1 : 256;
 i4 = i12 | 0 ? i12 : i13 + 8 | 0;
 L1 : do if ((i5 | 0) != 0 & (i6 | 0) != 0) {
  i2 = i6;
  i1 = 0;
  i7 = i3;
  i8 = i4;
  while (1) {
   i4 = i7 >>> 2;
   i3 = i4 >>> 0 >= i5 >>> 0;
   if (!(i7 >>> 0 > 131 | i3)) {
    i3 = i7;
    i4 = i8;
    break L1;
   }
   i2 = i3 ? i5 : i4;
   i3 = i7 - i2 | 0;
   i2 = _mbsrtowcs(i8, i13, i2, i10) | 0;
   if ((i2 | 0) == -1) break;
   i4 = (i8 | 0) == (i13 + 8 | 0);
   i5 = i5 - (i4 ? 0 : i2) | 0;
   i4 = i4 ? i8 : i8 + (i2 << 2) | 0;
   i1 = i2 + i1 | 0;
   i6 = HEAP32[i13 >> 2] | 0;
   if ((i5 | 0) != 0 & (i6 | 0) != 0) {
    i2 = i6;
    i7 = i3;
    i8 = i4;
   } else {
    i2 = i6;
    break L1;
   }
  }
  i6 = HEAP32[i13 >> 2] | 0;
  i2 = i6;
  i1 = -1;
  i5 = 0;
  i4 = i8;
 } else {
  i2 = i6;
  i1 = 0;
 } while (0);
 L8 : do if (i6) if ((i5 | 0) != 0 & (i3 | 0) != 0) {
  i2 = i6;
  i6 = i3;
  while (1) {
   i3 = _mbrtowc(i4, i2, i6, i10) | 0;
   if ((i3 + 2 | 0) >>> 0 < 3) break;
   i2 = i2 + i3 | 0;
   i6 = i6 - i3 | 0;
   i5 = i5 + -1 | 0;
   i1 = i1 + 1 | 0;
   if (!((i5 | 0) != 0 & (i6 | 0) != 0)) {
    i9 = 13;
    break;
   } else i4 = i4 + 4 | 0;
  }
  if ((i9 | 0) == 13) {
   HEAP32[i13 >> 2] = i2;
   break;
  }
  HEAP32[i13 >> 2] = i2;
  switch (i3 | 0) {
  case -1:
   {
    i1 = -1;
    break L8;
   }
  case 0:
   {
    HEAP32[i13 >> 2] = 0;
    i2 = 0;
    break L8;
   }
  default:
   {
    HEAP32[i10 >> 2] = 0;
    break L8;
   }
  }
 } while (0);
 if (i12 | 0) HEAP32[i11 >> 2] = i2;
 STACKTOP = i13;
 return i1 | 0;
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

function __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i5, i1, i4) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5, i1);
 HEAP32[i5 + 40 >> 2] = 0;
 HEAP32[i5 + 44 >> 2] = 0;
 HEAP32[i5 + 12 >> 2] = 0;
 HEAP32[i5 + 12 + 4 >> 2] = 0;
 HEAP32[i5 + 12 + 8 >> 2] = 0;
 HEAP32[i5 + 12 + 12 >> 2] = 0;
 HEAP32[i5 + 12 + 16 >> 2] = 0;
 HEAP32[i5 + 12 + 20 >> 2] = 0;
 HEAP32[i5 + 36 >> 2] = i5 + 40;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == (i4 + 4 | 0)) {
  i4 = i5 + 52 | 0;
  HEAP32[i4 >> 2] = 0;
  i4 = i5 + 56 | 0;
  HEAP32[i4 >> 2] = 0;
  i4 = i5 + 60 | 0;
  HEAP32[i4 >> 2] = 0;
  __ZN6asmdom5VNode11adjustVNodeEv(i5);
  return;
 }
 do {
  i2 = i1 + 16 | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_(i5 + 36 | 0, i5 + 40 | 0, i2, i2);
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i3 = HEAP32[i2 >> 2] | 0;
    i2 = i3 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i3 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i4 + 4 | 0));
 i4 = i5 + 52 | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i5 + 56 | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i5 + 60 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN6asmdom5VNode11adjustVNodeEv(i5);
 return;
}

function __GLOBAL__sub_I_bind_cpp() {
 __embind_register_void(1624, 10111);
 __embind_register_bool(1640, 10116, 1, 1, 0);
 __embind_register_integer(1648, 10059, 1, -128, 127);
 __embind_register_integer(1664, 10064, 1, -128, 127);
 __embind_register_integer(1656, 10076, 1, 0, 255);
 __embind_register_integer(1672, 10090, 2, -32768, 32767);
 __embind_register_integer(1680, 10096, 2, 0, 65535);
 __embind_register_integer(1688, 10121, 4, -2147483648, 2147483647);
 __embind_register_integer(1696, 10125, 4, 0, -1);
 __embind_register_integer(1704, 10138, 4, -2147483648, 2147483647);
 __embind_register_integer(1712, 10143, 4, 0, -1);
 __embind_register_float(1720, 10157, 4);
 __embind_register_float(1728, 10163, 8);
 __embind_register_std_string(1032, 10047);
 __embind_register_std_string(1232, 5537);
 __embind_register_std_wstring(1080, 4, 5570);
 __embind_register_emval(1024, 5583);
 __embind_register_memory_view(1256, 0, 5599);
 __embind_register_memory_view(1264, 0, 5629);
 __embind_register_memory_view(1272, 1, 5666);
 __embind_register_memory_view(1280, 2, 5705);
 __embind_register_memory_view(1288, 3, 5736);
 __embind_register_memory_view(1296, 4, 5776);
 __embind_register_memory_view(1304, 5, 5805);
 __embind_register_memory_view(1312, 4, 5843);
 __embind_register_memory_view(1320, 5, 5873);
 __embind_register_memory_view(1264, 0, 5912);
 __embind_register_memory_view(1272, 1, 5944);
 __embind_register_memory_view(1280, 2, 5977);
 __embind_register_memory_view(1288, 3, 6010);
 __embind_register_memory_view(1296, 4, 6044);
 __embind_register_memory_view(1304, 5, 6077);
 __embind_register_memory_view(1328, 6, 6111);
 __embind_register_memory_view(1336, 7, 6142);
 __embind_register_memory_view(1344, 7, 6174);
 return;
}

function _wcsnrtombs(i9, i10, i5, i1) {
 i9 = i9 | 0;
 i10 = i10 | 0;
 i5 = i5 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0, i11 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i11 >> 2] = i8;
 i3 = i9 | 0 ? i1 : 256;
 i4 = i9 | 0 ? i9 : i11 + 8 | 0;
 L1 : do if ((i3 | 0) != 0 & (i8 | 0) != 0) {
  i2 = i8;
  i1 = 0;
  i6 = i3;
  i7 = i5;
  i5 = i8;
  while (1) {
   i3 = i7 >>> 0 >= i6 >>> 0;
   if (!(i7 >>> 0 > 32 | i3)) {
    i3 = i5;
    break L1;
   }
   i2 = i3 ? i6 : i7;
   i7 = i7 - i2 | 0;
   i2 = _wcsrtombs(i4, i11, i2) | 0;
   if ((i2 | 0) == -1) break;
   i3 = (i4 | 0) == (i11 + 8 | 0);
   i6 = i6 - (i3 ? 0 : i2) | 0;
   i4 = i3 ? i4 : i4 + i2 | 0;
   i1 = i2 + i1 | 0;
   i3 = HEAP32[i11 >> 2] | 0;
   if ((i6 | 0) != 0 & (i3 | 0) != 0) {
    i2 = i3;
    i5 = i3;
   } else {
    i2 = i3;
    break L1;
   }
  }
  i3 = HEAP32[i11 >> 2] | 0;
  i2 = i3;
  i1 = -1;
  i6 = 0;
 } else {
  i2 = i8;
  i1 = 0;
  i6 = i3;
  i7 = i5;
  i3 = i8;
 } while (0);
 do if (i3) if ((i6 | 0) != 0 & (i7 | 0) != 0) {
  i2 = i3;
  i3 = i7;
  while (1) {
   i5 = _wcrtomb(i4, HEAP32[i2 >> 2] | 0) | 0;
   if ((i5 + 1 | 0) >>> 0 < 2) {
    i3 = 9;
    break;
   }
   i2 = i2 + 4 | 0;
   i3 = i3 + -1 | 0;
   i6 = i6 - i5 | 0;
   i1 = i5 + i1 | 0;
   if (!((i3 | 0) != 0 & (i6 | 0) != 0)) {
    i3 = 11;
    break;
   } else i4 = i4 + i5 | 0;
  }
  if ((i3 | 0) == 9) {
   i2 = (i5 | 0) == 0 ? 0 : i2;
   HEAP32[i11 >> 2] = i2;
   i1 = (i5 | 0) == 0 ? i1 : -1;
   break;
  } else if ((i3 | 0) == 11) {
   HEAP32[i11 >> 2] = i2;
   break;
  }
 } while (0);
 if (i9 | 0) HEAP32[i10 >> 2] = i2;
 STACKTOP = i11;
 return i1 | 0;
}

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEERKT_(i10, i1) {
 i10 = i10 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i10 + 4 >> 2] | 0;
 do if (i2 | 0) {
  i8 = HEAP8[i1 + 11 >> 0] | 0;
  i9 = i8 << 24 >> 24 < 0 ? HEAP32[i1 + 4 >> 2] | 0 : i8 & 255;
  i8 = i8 << 24 >> 24 < 0 ? HEAP32[i1 >> 2] | 0 : i1;
  i1 = i10 + 4 | 0;
  i3 = i2;
  L3 : while (1) {
   i2 = i3;
   while (1) {
    i5 = i2 + 16 | 0;
    i4 = HEAP8[i5 + 11 >> 0] | 0;
    i6 = i4 << 24 >> 24 < 0 ? HEAP32[i2 + 20 >> 2] | 0 : i4 & 255;
    i3 = i9 >>> 0 < i6 >>> 0 ? i9 : i6;
    if (!i3) i7 = 6; else {
     i3 = _memcmp(i4 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i5, i8, i3) | 0;
     if (!i3) i7 = 6; else if ((i3 | 0) >= 0) break;
    }
    if ((i7 | 0) == 6) {
     i7 = 0;
     if (i6 >>> 0 >= i9 >>> 0) break;
    }
    i2 = HEAP32[i2 + 4 >> 2] | 0;
    if (!i2) break L3;
   }
   i3 = HEAP32[i2 >> 2] | 0;
   if (!i3) {
    i1 = i2;
    break;
   } else i1 = i2;
  }
  if ((i1 | 0) != (i10 + 4 | 0)) {
   i4 = i1 + 16 | 0;
   i3 = HEAP8[i4 + 11 >> 0] | 0;
   i5 = i3 << 24 >> 24 < 0 ? HEAP32[i1 + 20 >> 2] | 0 : i3 & 255;
   i2 = i5 >>> 0 < i9 >>> 0 ? i5 : i9;
   if (i2 | 0) {
    i2 = _memcmp(i8, i3 << 24 >> 24 < 0 ? HEAP32[i4 >> 2] | 0 : i4, i2) | 0;
    if (i2 | 0) {
     if ((i2 | 0) < 0) break;
     return i1 | 0;
    }
   }
   if (i9 >>> 0 >= i5 >>> 0) {
    i10 = i1;
    return i10 | 0;
   }
  }
 } while (0);
 i10 = i10 + 4 | 0;
 return i10 | 0;
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

function __ZNSt3__26vectorIjNS_9allocatorIjEEE6resizeEjRKj(i11, i8, i9) {
 i11 = i11 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i10 = 0;
 i7 = HEAP32[i11 + 4 >> 2] | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 i10 = i7 - i6 >> 2;
 if (i10 >>> 0 >= i8 >>> 0) {
  if (i10 >>> 0 <= i8 >>> 0) return;
  if ((i7 | 0) == (i6 + (i8 << 2) | 0)) return;
  HEAP32[i11 + 4 >> 2] = i7 + (~((i7 + -4 - (i6 + (i8 << 2)) | 0) >>> 2) << 2);
  return;
 }
 i1 = HEAP32[i11 + 8 >> 2] | 0;
 if (i1 - i7 >> 2 >>> 0 >= (i8 - i10 | 0) >>> 0) {
  i1 = i7;
  i2 = i8 - i10 | 0;
  while (1) {
   HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
   i2 = i2 + -1 | 0;
   if (!i2) break; else i1 = i1 + 4 | 0;
  }
  HEAP32[i11 + 4 >> 2] = i7 + (i8 - i10 << 2);
  return;
 }
 if (i8 >>> 0 > 1073741823) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
 i1 = i1 - i6 >> 2 >>> 0 < 536870911 ? (i1 - i6 >> 1 >>> 0 < i8 >>> 0 ? i8 : i1 - i6 >> 1) : 1073741823;
 do if (!i1) i5 = 0; else if (i1 >>> 0 > 1073741823) {
  i11 = ___cxa_allocate_exception(8) | 0;
  __ZNSt11logic_errorC2EPKc(i11, 4822);
  HEAP32[i11 >> 2] = 2648;
  ___cxa_throw(i11 | 0, 1528, 10);
 } else {
  i5 = __Znwj(i1 << 2) | 0;
  break;
 } while (0);
 i4 = i5 + (i10 << 2) | 0;
 i2 = i4;
 i3 = i8 - i10 | 0;
 while (1) {
  HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
  i3 = i3 + -1 | 0;
  if (!i3) break; else i2 = i2 + 4 | 0;
 }
 if ((i7 - i6 | 0) > 0) _memcpy(i4 + (0 - i10 << 2) | 0, i6 | 0, i7 - i6 | 0) | 0;
 HEAP32[i11 >> 2] = i4 + (0 - i10 << 2);
 HEAP32[i11 + 4 >> 2] = i4 + (i8 - i10 << 2);
 HEAP32[i11 + 8 >> 2] = i5 + (i1 << 2);
 if (!i6) return;
 __ZdlPv(i6);
 return;
}

function _mbrtowc(i2, i3, i7, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i7 = i7 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = (i1 | 0) == 0 ? 10772 : i1;
 i1 = HEAP32[i6 >> 2] | 0;
 L1 : do if (!i3) if (!i1) i1 = 0; else i8 = 17; else {
  i5 = (i2 | 0) == 0 ? i9 : i2;
  if (!i7) i1 = -2; else {
   if (!i1) {
    i1 = HEAP8[i3 >> 0] | 0;
    if (i1 << 24 >> 24 > -1) {
     HEAP32[i5 >> 2] = i1 & 255;
     i1 = i1 << 24 >> 24 != 0 & 1;
     break;
    }
    if (!(HEAP32[HEAP32[699] >> 2] | 0)) {
     HEAP32[i5 >> 2] = i1 << 24 >> 24 & 57343;
     i1 = 1;
     break;
    }
    if (((i1 & 255) + -194 | 0) >>> 0 > 50) {
     i8 = 17;
     break;
    }
    i1 = HEAP32[2140 + ((i1 & 255) + -194 << 2) >> 2] | 0;
    if (i7 + -1 | 0) {
     i4 = i7 + -1 | 0;
     i3 = i3 + 1 | 0;
     i8 = 11;
    }
   } else {
    i4 = i7;
    i8 = 11;
   }
   L14 : do if ((i8 | 0) == 11) {
    i2 = HEAP8[i3 >> 0] | 0;
    if ((((i2 & 255) >>> 3) + -16 | ((i2 & 255) >>> 3) + (i1 >> 26)) >>> 0 > 7) {
     i8 = 17;
     break L1;
    }
    while (1) {
     i3 = i3 + 1 | 0;
     i1 = i1 << 6 | (i2 & 255) + -128;
     i4 = i4 + -1 | 0;
     if ((i1 | 0) >= 0) break;
     if (!i4) break L14;
     i2 = HEAP8[i3 >> 0] | 0;
     if ((i2 & -64) << 24 >> 24 != -128) {
      i8 = 17;
      break L1;
     }
    }
    HEAP32[i6 >> 2] = 0;
    HEAP32[i5 >> 2] = i1;
    i1 = i7 - i4 | 0;
    break L1;
   } while (0);
   HEAP32[i6 >> 2] = i1;
   i1 = -2;
  }
 } while (0);
 if ((i8 | 0) == 17) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[2702] = 84;
  i1 = -1;
 }
 STACKTOP = i9;
 return i1 | 0;
}

function __ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv(i2, i1, i5) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i3 = 0, i4 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 HEAP32[i5 >> 2] = HEAP32[HEAP32[i5 >> 2] >> 2];
 if (__ZNK10__cxxabiv117__pbase_type_info9can_catchEPKNS_16__shim_type_infoERPv(i2, i1) | 0) i1 = 1; else if (!i1) i1 = 0; else {
  i3 = ___dynamic_cast(i1, 1592) | 0;
  if (!i3) i1 = 0; else if (!(HEAP32[i3 + 8 >> 2] & ~HEAP32[i2 + 8 >> 2])) {
   i1 = HEAP32[i2 + 12 >> 2] | 0;
   if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, HEAP32[i3 + 12 >> 2] | 0) | 0) i1 = 1; else if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, 1624) | 0) i1 = 1; else if (!i1) i1 = 0; else {
    i4 = ___dynamic_cast(i1, 1440) | 0;
    if (!i4) i1 = 0; else {
     i1 = HEAP32[i3 + 12 >> 2] | 0;
     if (!i1) i1 = 0; else {
      i1 = ___dynamic_cast(i1, 1440) | 0;
      if (!i1) i1 = 0; else {
       i2 = i6 + 4 | 0;
       i3 = i2 + 52 | 0;
       do {
        HEAP32[i2 >> 2] = 0;
        i2 = i2 + 4 | 0;
       } while ((i2 | 0) < (i3 | 0));
       HEAP32[i6 >> 2] = i1;
       HEAP32[i6 + 8 >> 2] = i4;
       HEAP32[i6 + 12 >> 2] = -1;
       HEAP32[i6 + 48 >> 2] = 1;
       FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 7](i1, i6, HEAP32[i5 >> 2] | 0, 1);
       if ((HEAP32[i6 + 24 >> 2] | 0) == 1) {
        HEAP32[i5 >> 2] = HEAP32[i6 + 16 >> 2];
        i1 = 1;
       } else i1 = 0;
      }
     }
    }
   }
  } else i1 = 0;
 }
 STACKTOP = i6;
 return i1 | 0;
}

function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_(i5, i2, i6) {
 i5 = i5 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i5, i7, i2) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (i1 | 0) {
  i5 = i1;
  i5 = i5 + 28 | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i5, i6) | 0;
  STACKTOP = i7;
  return;
 }
 i4 = __Znwj(40) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4 + 16 | 0, i2);
 HEAP32[i4 + 28 >> 2] = 0;
 HEAP32[i4 + 28 + 4 >> 2] = 0;
 HEAP32[i4 + 28 + 8 >> 2] = 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = i1;
 HEAP32[i3 >> 2] = i4;
 i1 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
 if (!i1) i1 = i4; else {
  HEAP32[i5 >> 2] = i1;
  i1 = HEAP32[i3 >> 2] | 0;
 }
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i5 + 4 >> 2] | 0, i1);
 HEAP32[i5 + 8 >> 2] = (HEAP32[i5 + 8 >> 2] | 0) + 1;
 i5 = i4;
 i5 = i5 + 28 | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i5, i6) | 0;
 STACKTOP = i7;
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

function __ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = HEAP32[i1 + 4 >> 2] | 0;
 if (!i1) {
  i8 = 0;
  return i8 | 0;
 }
 i7 = HEAP8[i2 + 11 >> 0] | 0;
 i8 = i7 << 24 >> 24 < 0 ? HEAP32[i2 + 4 >> 2] | 0 : i7 & 255;
 i7 = i7 << 24 >> 24 < 0 ? HEAP32[i2 >> 2] | 0 : i2;
 while (1) {
  i4 = i1 + 16 | 0;
  i3 = HEAP8[i4 + 11 >> 0] | 0;
  i5 = i3 << 24 >> 24 < 0 ? HEAP32[i1 + 20 >> 2] | 0 : i3 & 255;
  i2 = i5 >>> 0 < i8 >>> 0 ? i5 : i8;
  if (!i2) i6 = 5; else {
   i2 = _memcmp(i7, i3 << 24 >> 24 < 0 ? HEAP32[i4 >> 2] | 0 : i4, i2) | 0;
   if (!i2) i6 = 5; else if ((i2 | 0) < 0) i6 = 7; else i6 = 8;
  }
  if ((i6 | 0) == 5) if (i8 >>> 0 < i5 >>> 0) i6 = 7; else i6 = 8;
  if ((i6 | 0) != 7) if ((i6 | 0) == 8) {
   i6 = 0;
   i2 = i8 >>> 0 < i5 >>> 0 ? i8 : i5;
   if (!i2) i6 = 10; else {
    i2 = _memcmp(i3 << 24 >> 24 < 0 ? HEAP32[i4 >> 2] | 0 : i4, i7, i2) | 0;
    if (!i2) i6 = 10; else if ((i2 | 0) >= 0) {
     i1 = 1;
     i6 = 14;
     break;
    }
   }
   if ((i6 | 0) == 10) if (i5 >>> 0 >= i8 >>> 0) {
    i1 = 1;
    i6 = 14;
    break;
   }
   i1 = i1 + 4 | 0;
  }
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) {
   i1 = 0;
   i6 = 14;
   break;
  }
 }
 if ((i6 | 0) == 14) return i1 | 0;
 return 0;
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
 HEAP32[i6 + 8 >> 2] = 1456;
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

function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E(i1, i5, i4) {
 i1 = i1 | 0;
 i5 = i5 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = 0;
 if (i3 >>> 0 > 4294967279) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if (i3 >>> 0 < 11) {
  HEAP8[i7 + 11 >> 0] = i3;
  if (!i3) i1 = i7; else {
   i1 = i7;
   i6 = 6;
  }
 } else {
  i1 = __Znwj(i3 + 16 & -16) | 0;
  HEAP32[i7 >> 2] = i1;
  HEAP32[i7 + 8 >> 2] = i3 + 16 & -16 | -2147483648;
  HEAP32[i7 + 4 >> 2] = i3;
  i6 = 6;
 }
 if ((i6 | 0) == 6) _memcpy(i1 | 0, i4 + 4 | 0, i3 | 0) | 0;
 HEAP8[i1 + i3 >> 0] = 0;
 FUNCTION_TABLE_viii[i2 & 7](i7 + 12 | 0, i5, i7);
 __emval_incref(HEAP32[i7 + 12 >> 2] | 0);
 i1 = HEAP32[i7 + 12 >> 2] | 0;
 __emval_decref(i1 | 0);
 if ((HEAP8[i7 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i7;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i7 >> 2] | 0);
 STACKTOP = i7;
 return i1 | 0;
}

function __ZNSt3__26vectorIjNS_9allocatorIjEEE9push_backERKj(i7, i6) {
 i7 = i7 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 i1 = HEAP32[i7 + 8 >> 2] | 0;
 if ((i4 | 0) != (i1 | 0)) {
  HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i7 + 4 >> 2] = i4 + 4;
  return;
 }
 i5 = HEAP32[i7 >> 2] | 0;
 if (((i4 - i5 >> 2) + 1 | 0) >>> 0 > 1073741823) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
 i1 = i1 - i5 >> 2 >>> 0 < 536870911 ? (i1 - i5 >> 1 >>> 0 < ((i4 - i5 >> 2) + 1 | 0) >>> 0 ? (i4 - i5 >> 2) + 1 | 0 : i1 - i5 >> 1) : 1073741823;
 do if (!i1) i3 = 0; else if (i1 >>> 0 > 1073741823) {
  i7 = ___cxa_allocate_exception(8) | 0;
  __ZNSt11logic_errorC2EPKc(i7, 4822);
  HEAP32[i7 >> 2] = 2648;
  ___cxa_throw(i7 | 0, 1528, 10);
 } else {
  i3 = __Znwj(i1 << 2) | 0;
  break;
 } while (0);
 i2 = i3 + (i4 - i5 >> 2 << 2) | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 if ((i4 - i5 | 0) > 0) _memcpy(i2 + (0 - (i4 - i5 >> 2) << 2) | 0, i5 | 0, i4 - i5 | 0) | 0;
 HEAP32[i7 >> 2] = i2 + (0 - (i4 - i5 >> 2) << 2);
 HEAP32[i7 + 4 >> 2] = i2 + 4;
 HEAP32[i7 + 8 >> 2] = i3 + (i1 << 2);
 if (!i5) return;
 __ZdlPv(i5);
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
    HEAP32[i4 + 24 >> 2] = 9451;
    _abort_message(9401, i4 + 24 | 0);
   }
   if ((i1 | 0) == 1126902529 & (i2 | 0) == 1129074247) i1 = HEAP32[i3 + 44 >> 2] | 0; else i1 = i3 + 80 | 0;
   HEAP32[i4 + 36 >> 2] = i1;
   i3 = HEAP32[i3 >> 2] | 0;
   i1 = HEAP32[i3 + 4 >> 2] | 0;
   if (__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(1432, i3, i4 + 36 | 0) | 0) {
    i3 = HEAP32[i4 + 36 >> 2] | 0;
    i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 31](i3) | 0;
    HEAP32[i4 >> 2] = 9451;
    HEAP32[i4 + 4 >> 2] = i1;
    HEAP32[i4 + 8 >> 2] = i3;
    _abort_message(9315, i4);
   } else {
    HEAP32[i4 + 16 >> 2] = 9451;
    HEAP32[i4 + 16 + 4 >> 2] = i1;
    _abort_message(9360, i4 + 16 | 0);
   }
  }
 }
 _abort_message(9439, i4 + 32 | 0);
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(i10, i6, i1, i7, i4, i5, i3, i8) {
 i10 = i10 | 0;
 i6 = i6 | 0;
 i1 = i1 | 0;
 i7 = i7 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i3 = i3 | 0;
 i8 = i8 | 0;
 var i2 = 0, i9 = 0;
 if ((-18 - i6 | 0) >>> 0 < i1 >>> 0) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if ((HEAP8[i10 + 11 >> 0] | 0) < 0) i9 = HEAP32[i10 >> 2] | 0; else i9 = i10;
 if (i6 >>> 0 < 2147483623) {
  i2 = (i1 + i6 | 0) >>> 0 < i6 << 1 >>> 0 ? i6 << 1 : i1 + i6 | 0;
  i2 = i2 >>> 0 < 11 ? 11 : i2 + 16 & -16;
 } else i2 = -17;
 i1 = __Znwj(i2) | 0;
 if (i4 | 0) __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1, i9, i4) | 0;
 if (i3 | 0) __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1 + i4 | 0, i8, i3) | 0;
 if (i7 - i5 - i4 | 0) __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1 + i4 + i3 | 0, i9 + i4 + i5 | 0, i7 - i5 - i4 | 0) | 0;
 if ((i6 | 0) != 10) __ZdlPv(i9);
 HEAP32[i10 >> 2] = i1;
 HEAP32[i10 + 8 >> 2] = i2 | -2147483648;
 HEAP32[i10 + 4 >> 2] = i7 - i5 + i3;
 __ZNSt3__211char_traitsIcE6assignERcRKc(i1 + (i7 - i5 + i3) | 0, 0);
 return;
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
  __ZNSt11logic_errorC2EPKc(i7, 4822);
  HEAP32[i7 >> 2] = 2648;
  ___cxa_throw(i7 | 0, 1528, 10);
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

function __Z4h_stRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEES7_(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i3 + 12 | 0, i2);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i3, i1);
 i1 = __Znwj(64) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1, i3 + 12 | 0);
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 12 + 4 >> 2] = 0;
 HEAP32[i1 + 12 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1 + 24 | 0, i3);
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i1 + 40;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
 if ((HEAP8[i3 + 12 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i3 + 12 >> 2] | 0);
 STACKTOP = i3;
 return i1 | 0;
}

function __Z4h_snRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKj(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i3, i2);
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = __Znwj(64) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1, i3);
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 12 + 4 >> 2] = 0;
 HEAP32[i1 + 12 + 8 >> 2] = 0;
 HEAP32[i1 + 12 + 12 >> 2] = 0;
 HEAP32[i1 + 12 + 16 >> 2] = 0;
 HEAP32[i1 + 12 + 20 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i1 + 40;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 i2 = __Znwj(4) | 0;
 HEAP32[i1 + 52 >> 2] = i2;
 HEAP32[i1 + 60 >> 2] = i2 + 4;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i1 + 56 >> 2] = i2 + 4;
 if ((HEAP8[i3 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i3 >> 2] | 0);
 STACKTOP = i3;
 return i1 | 0;
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

function _vfprintf(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i2 = i5 + 80 | 0;
 i3 = i2 + 40 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP32[i5 + 120 >> 2] = HEAP32[i1 >> 2];
 if ((_printf_core(0, i4, i5 + 120 | 0, i5, i5 + 80 | 0) | 0) >= 0) {
  i1 = HEAP32[586] | 0;
  if ((HEAP8[2418] | 0) < 1) HEAP32[586] = i1 & -33;
  if (!(HEAP32[598] | 0)) {
   i2 = HEAP32[597] | 0;
   HEAP32[597] = i5 + 136;
   HEAP32[593] = i5 + 136;
   HEAP32[591] = i5 + 136;
   HEAP32[598] = 80;
   HEAP32[590] = i5 + 136 + 80;
   _printf_core(2344, i4, i5 + 120 | 0, i5, i5 + 80 | 0) | 0;
   if (i2 | 0) {
    FUNCTION_TABLE_iiii[HEAP32[2380 >> 2] & 31](2344, 0, 0) | 0;
    HEAP32[597] = i2;
    HEAP32[598] = 0;
    HEAP32[590] = 0;
    HEAP32[593] = 0;
    HEAP32[591] = 0;
   }
  } else _printf_core(2344, i4, i5 + 120 | 0, i5, i5 + 80 | 0) | 0;
  HEAP32[586] = HEAP32[586] | i1 & 32;
 }
 STACKTOP = i5;
 return;
}

function __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 if (i2 >>> 0 > 1073741807) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 do if (i2 >>> 0 < 2) {
  HEAP8[i1 + 8 + 3 >> 0] = i2;
  if (!i2) {
   i3 = i1;
   i3 = i3 + (i2 << 2) | 0;
   HEAP32[i3 >> 2] = 0;
   return;
  }
 } else if ((i2 + 4 & -4) >>> 0 > 1073741823) {
  i3 = ___cxa_allocate_exception(8) | 0;
  __ZNSt11logic_errorC2EPKc(i3, 4822);
  HEAP32[i3 >> 2] = 2648;
  ___cxa_throw(i3 | 0, 1528, 10);
 } else {
  i4 = __Znwj((i2 + 4 & -4) << 2) | 0;
  HEAP32[i1 >> 2] = i4;
  HEAP32[i1 + 8 >> 2] = i2 + 4 & -4 | -2147483648;
  HEAP32[i1 + 4 >> 2] = i2;
  i1 = i4;
  break;
 } while (0);
 _wmemcpy(i1, i3 + 4 | 0, i2) | 0;
 i4 = i1;
 i4 = i4 + (i2 << 2) | 0;
 HEAP32[i4 >> 2] = 0;
 return;
}

function __ZNKSt3__27codecvtIwc11__mbstate_tE10do_unshiftERS1_PcS4_RS4_(i2, i1, i3, i4, i5) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i5 >> 2] = i3;
 i1 = ___uselocale(HEAP32[i2 + 8 >> 2] | 0) | 0;
 i2 = _wcrtomb(i6, 0) | 0;
 if (i1 | 0) ___uselocale(i1) | 0;
 switch (i2 | 0) {
 case 0:
 case -1:
  {
   i1 = 2;
   break;
  }
 default:
  {
   i1 = HEAP32[i5 >> 2] | 0;
   if ((i2 + -1 | 0) >>> 0 > (i4 - i1 | 0) >>> 0) i1 = 1; else if (!(i2 + -1 | 0)) i1 = 0; else {
    i4 = HEAP8[i6 >> 0] | 0;
    HEAP32[i5 >> 2] = i1 + 1;
    HEAP8[i1 >> 0] = i4;
    if (!(i2 + -2 | 0)) i1 = 0; else {
     i1 = i2 + -2 | 0;
     i2 = i6;
     do {
      i2 = i2 + 1 | 0;
      i4 = HEAP32[i5 >> 2] | 0;
      i3 = HEAP8[i2 >> 0] | 0;
      HEAP32[i5 >> 2] = i4 + 1;
      HEAP8[i4 >> 0] = i3;
      i1 = i1 + -1 | 0;
     } while ((i1 | 0) != 0);
     i1 = 0;
    }
   }
  }
 }
 STACKTOP = i6;
 return i1 | 0;
}

function __ZN6asmdom5VNodeD2Ev(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = HEAP32[i4 + 52 >> 2] | 0;
 i2 = (HEAP32[i4 + 56 >> 2] | 0) - i1 >> 2;
 if (i2) {
  i3 = i2;
  do {
   i3 = i3 + -1 | 0;
   i2 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
   if (i2) {
    __ZN6asmdom5VNodeD2Ev(i2);
    __ZdlPv(i2);
    i1 = HEAP32[i4 + 52 >> 2] | 0;
   }
  } while ((i3 | 0) != 0);
 }
 if (i1 | 0) {
  i2 = HEAP32[i4 + 56 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) HEAP32[i4 + 56 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 }
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i4 + 40 >> 2] | 0);
 if ((HEAP8[i4 + 24 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 + 24 >> 2] | 0);
 if ((HEAP8[i4 + 12 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 + 12 >> 2] | 0);
 if ((HEAP8[i4 + 11 >> 0] | 0) >= 0) return;
 __ZdlPv(HEAP32[i4 >> 2] | 0);
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

function _wcrtomb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 do if (!i1) i1 = 1; else {
  if (i2 >>> 0 < 128) {
   HEAP8[i1 >> 0] = i2;
   i1 = 1;
   break;
  }
  if (!(HEAP32[HEAP32[699] >> 2] | 0)) if ((i2 & -128 | 0) == 57216) {
   HEAP8[i1 >> 0] = i2;
   i1 = 1;
   break;
  } else {
   HEAP32[2702] = 84;
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
   HEAP32[2702] = 84;
   i1 = -1;
   break;
  }
 } while (0);
 return i1 | 0;
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
   FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 31](i6, i1, i5) | 0;
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
   if ((FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 31](i6, i1, i4) | 0) >>> 0 < i4 >>> 0) break L5;
   i3 = HEAP32[i6 + 20 >> 2] | 0;
   i2 = i5 - i4 | 0;
   i1 = i1 + i4 | 0;
  } else i2 = i5; while (0);
  _memcpy(i3 | 0, i1 | 0, i2 | 0) | 0;
  HEAP32[i6 + 20 >> 2] = (HEAP32[i6 + 20 >> 2] | 0) + i2;
 } while (0);
 return;
}

function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEESA_EE6invokeEPFjSA_SN_SA_EPNS0_11BindingTypeIS8_EUt_EPSL_SU_(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i5 + 12 | 0, i1);
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i5, i3);
 i1 = FUNCTION_TABLE_iiii[i4 & 31](i5 + 12 | 0, i2, i5) | 0;
 if ((HEAP8[i5 + 8 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 >> 2] | 0);
 if ((HEAP8[i5 + 12 + 8 + 3 >> 0] | 0) >= 0) {
  STACKTOP = i5;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i5 + 12 >> 2] | 0);
 STACKTOP = i5;
 return i1 | 0;
}

function ___newlocale(i5, i6, i1) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 L1 : do if (!(___loc_is_allocated(i1) | 0)) {
  i3 = 0;
  i4 = 0;
  do {
   i2 = (1 << i3 & i5 | 0) != 0;
   if ((i1 | 0) == 0 | i2) i2 = ___get_locale(i3, i2 ? i6 : 10820) | 0; else i2 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
   i4 = ((i2 | 0) != 0 & 1) + i4 | 0;
   HEAP32[i7 + (i3 << 2) >> 2] = i2;
   i3 = i3 + 1 | 0;
  } while ((i3 | 0) != 6);
  switch (i4 | 0) {
  case 0:
   {
    i1 = 10748;
    break L1;
   }
  case 1:
   {
    if ((HEAP32[i7 >> 2] | 0) == 2068) {
     i1 = 2116;
     break L1;
    }
    break;
   }
  default:
   {}
  }
 } else {
  i2 = 0;
  do {
   if (1 << i2 & i5 | 0) {
    i4 = ___get_locale(i2, i6) | 0;
    HEAP32[i1 + (i2 << 2) >> 2] = i4;
   }
   i2 = i2 + 1 | 0;
  } while ((i2 | 0) != 6);
 } while (0);
 STACKTOP = i7;
 return i1 | 0;
}

function __Z4h_tiRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEb(i1, i4) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i5, i1);
 i1 = __Znwj(64) | 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 i2 = i1;
 i3 = i2 + 36 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP32[i1 + 36 >> 2] = i1 + 40;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 if (i4) __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i1 + 24 | 0, i5) | 0; else __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i1, i5) | 0;
 if ((HEAP8[i5 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i5;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i5 >> 2] | 0);
 STACKTOP = i5;
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
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(i5, i2, i3 - i2 | 0, i1, 0, i1, i3, i4);
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

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i7, i4, i3) {
 i7 = i7 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i5 = 0, i6 = 0;
 i1 = HEAP8[i7 + 11 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) {
  i6 = HEAP32[i7 + 4 >> 2] | 0;
  i2 = (HEAP32[i7 + 8 >> 2] & 2147483647) + -1 | 0;
 } else {
  i6 = i1 & 255;
  i2 = 10;
 }
 i5 = i6 + i3 | 0;
 if ((i2 - i6 | 0) >>> 0 < i3 >>> 0) __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(i7, i2, i5 - i2 | 0, i6, i6, 0, i3, i4); else if (i3 | 0) {
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i7 >> 2] | 0; else i1 = i7;
  __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1 + i6 | 0, i4, i3) | 0;
  if ((HEAP8[i7 + 11 >> 0] | 0) < 0) HEAP32[i7 + 4 >> 2] = i5; else HEAP8[i7 + 11 >> 0] = i5;
  __ZNSt3__211char_traitsIcE6assignERcRKc(i1 + i5 | 0, 0);
 }
 return i7 | 0;
}

function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(i5, i1, i4) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i5, i1) | 0) i1 = 1; else if (!i1) i1 = 0; else {
  i1 = ___dynamic_cast(i1, 1440) | 0;
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

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i1) {
 i1 = i1 | 0;
 if (!i1) return;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i1 >> 2] | 0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i1 + 4 >> 2] | 0);
 if ((HEAP8[i1 + 28 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 + 28 >> 2] | 0);
 if ((HEAP8[i1 + 16 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 + 16 >> 2] | 0);
 __ZdlPv(i1);
 return;
}

function __Z3h_sRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE(i2, i1);
 i1 = __Znwj(64) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1, i2);
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 12 + 4 >> 2] = 0;
 HEAP32[i1 + 12 + 8 >> 2] = 0;
 HEAP32[i1 + 12 + 12 >> 2] = 0;
 HEAP32[i1 + 12 + 16 >> 2] = 0;
 HEAP32[i1 + 12 + 20 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i1 + 40;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 if ((HEAP8[i2 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i2;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i2 >> 2] | 0);
 STACKTOP = i2;
 return i1 | 0;
}

function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEESA_EE6invokeEPFjSA_SA_EPNS0_11BindingTypeIS8_EUt_ESH_(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i4 + 12 | 0, i1);
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i4, i2);
 i1 = FUNCTION_TABLE_iii[i3 & 15](i4 + 12 | 0, i4) | 0;
 if ((HEAP8[i4 + 8 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 >> 2] | 0);
 if ((HEAP8[i4 + 12 + 8 + 3 >> 0] | 0) >= 0) {
  STACKTOP = i4;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i4 + 12 >> 2] | 0);
 STACKTOP = i4;
 return i1 | 0;
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

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i1) {
 i1 = i1 | 0;
 if (!i1) return;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i1 >> 2] | 0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i1 + 4 >> 2] | 0);
 if ((HEAP8[i1 + 16 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 + 16 >> 2] | 0);
 __ZdlPv(i1);
 return;
}

function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEERKjEE6invokeEPFjSA_SN_SP_EPNS0_11BindingTypeIS8_EUt_EPSL_j(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i5 + 4 | 0, i1);
 HEAP32[i5 >> 2] = i3;
 i1 = FUNCTION_TABLE_iiii[i4 & 31](i5 + 4 | 0, i2, i5) | 0;
 if ((HEAP8[i5 + 4 + 8 + 3 >> 0] | 0) >= 0) {
  STACKTOP = i5;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i5 + 4 >> 2] | 0);
 STACKTOP = i5;
 return i1 | 0;
}

function ___strchrnul(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 L1 : do if (!(i1 & 3)) i2 = 4; else while (1) {
  switch (HEAP8[i1 >> 0] | 0) {
  case 0:
  case 58:
   break L1;
  default:
   {}
  }
  i1 = i1 + 1 | 0;
  if (!(i1 & 3)) {
   i2 = 4;
   break L1;
  }
 } while (0);
 L5 : do if ((i2 | 0) == 4) {
  i2 = HEAP32[i1 >> 2] | 0;
  L7 : do if (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009)) do {
   if ((i2 & -2139062144 ^ -2139062144) & (i2 ^ 976894522) + -16843009 | 0) break L7;
   i1 = i1 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
  } while (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009 | 0)); while (0);
  while (1) switch (HEAP8[i1 >> 0] | 0) {
  case 0:
  case 58:
   break L5;
  default:
   i1 = i1 + 1 | 0;
  }
 } while (0);
 return i1 | 0;
}

function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SN_SS_EPNS0_11BindingTypeIS8_EUt_EPSL_PSQ_(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i5, i1);
 i1 = FUNCTION_TABLE_iiii[i4 & 31](i5, i2, i3) | 0;
 if ((HEAP8[i5 + 8 + 3 >> 0] | 0) >= 0) {
  STACKTOP = i5;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i5 >> 2] | 0);
 STACKTOP = i5;
 return i1 | 0;
}

function __ZNKSt3__27codecvtIwc11__mbstate_tE9do_lengthERS1_PKcS5_j(i9, i8, i1, i6, i7) {
 i9 = i9 | 0;
 i8 = i8 | 0;
 i1 = i1 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 L1 : do if ((i1 | 0) == (i6 | 0) | (i7 | 0) == 0) i1 = 0; else {
  i4 = i1;
  i1 = 0;
  i5 = 0;
  while (1) {
   i3 = ___uselocale(HEAP32[i9 + 8 >> 2] | 0) | 0;
   i2 = _mbrlen(i4, i6 - i4 | 0, i8) | 0;
   if (i3 | 0) ___uselocale(i3) | 0;
   switch (i2 | 0) {
   case -2:
   case -1:
    break L1;
   case 0:
    {
     i2 = 1;
     break;
    }
   default:
    {}
   }
   i4 = i4 + i2 | 0;
   i1 = i2 + i1 | 0;
   i5 = i5 + 1 | 0;
   if ((i4 | 0) == (i6 | 0) | i5 >>> 0 >= i7 >>> 0) break L1;
  }
 } while (0);
 return i1 | 0;
}

function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEEiEE6invokeEPFjSA_SN_iEPNS0_11BindingTypeIS8_EUt_EPSL_i(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i5, i1);
 i1 = FUNCTION_TABLE_iiii[i4 & 31](i5, i2, i3) | 0;
 if ((HEAP8[i5 + 8 + 3 >> 0] | 0) >= 0) {
  STACKTOP = i5;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i5 >> 2] | 0);
 STACKTOP = i5;
 return i1 | 0;
}

function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEEEE6invokeEPFjSA_SN_EPNS0_11BindingTypeIS8_EUt_EPSL_(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i4, i1);
 i1 = FUNCTION_TABLE_iii[i3 & 15](i4, i2) | 0;
 if ((HEAP8[i4 + 8 + 3 >> 0] | 0) >= 0) {
  STACKTOP = i4;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i4 >> 2] | 0);
 STACKTOP = i4;
 return i1 | 0;
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

function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKjEE6invokeEPFjSA_SC_EPNS0_11BindingTypeIS8_EUt_Ej(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i4 + 4 | 0, i1);
 HEAP32[i4 >> 2] = i2;
 i1 = FUNCTION_TABLE_iii[i3 & 15](i4 + 4 | 0, i4) | 0;
 if ((HEAP8[i4 + 4 + 8 + 3 >> 0] | 0) >= 0) {
  STACKTOP = i4;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i4 + 4 >> 2] | 0);
 STACKTOP = i4;
 return i1 | 0;
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

function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SF_EPNS0_11BindingTypeIS8_EUt_EPSD_(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i4, i1);
 i1 = FUNCTION_TABLE_iii[i3 & 15](i4, i2) | 0;
 if ((HEAP8[i4 + 8 + 3 >> 0] | 0) >= 0) {
  STACKTOP = i4;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i4 >> 2] | 0);
 STACKTOP = i4;
 return i1 | 0;
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

function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEbEE6invokeEPFjSA_bEPNS0_11BindingTypeIS8_EUt_Eb(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i4, i1);
 i1 = FUNCTION_TABLE_iii[i3 & 15](i4, i2) | 0;
 if ((HEAP8[i4 + 8 + 3 >> 0] | 0) >= 0) {
  STACKTOP = i4;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i4 >> 2] | 0);
 STACKTOP = i4;
 return i1 | 0;
}

function ___overflow() {
 var i1 = 0, i2 = 0, i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP8[i3 >> 0] = 10;
 i1 = HEAP32[590] | 0;
 if (!i1) if (!(___towrite(2344) | 0)) {
  i1 = HEAP32[590] | 0;
  i2 = 4;
 } else i1 = -1; else i2 = 4;
 do if ((i2 | 0) == 4) {
  i2 = HEAP32[591] | 0;
  if (!(i2 >>> 0 >= i1 >>> 0 | (HEAP8[2419] | 0) == 10)) {
   HEAP32[591] = i2 + 1;
   HEAP8[i2 >> 0] = 10;
   i1 = 10;
   break;
  }
  if ((FUNCTION_TABLE_iiii[HEAP32[2380 >> 2] & 31](2344, i3, 1) | 0) == 1) i1 = HEAPU8[i3 >> 0] | 0; else i1 = -1;
 } while (0);
 STACKTOP = i3;
 return i1 | 0;
}

function __ZNKSt3__214__codecvt_utf8IwE6do_outER11__mbstate_tPKwS5_RS5_PcS7_RS7_(i5, i1, i2, i3, i4, i6, i7, i8) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 >> 2] = i6;
 i7 = __ZNSt3__2L12ucs4_to_utf8EPKjS1_RS1_PhS3_RS3_mNS_12codecvt_modeE(i2, i3, i1 + 4 | 0, i6, i7, i1, HEAP32[i5 + 12 >> 2] | 0, HEAP32[i5 + 16 >> 2] | 0) | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
 STACKTOP = i1;
 return i7 | 0;
}

function __ZNKSt3__214__codecvt_utf8IwE5do_inER11__mbstate_tPKcS5_RS5_PwS7_RS7_(i5, i1, i2, i3, i4, i6, i7, i8) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 >> 2] = i6;
 i7 = __ZNSt3__2L12utf8_to_ucs4EPKhS1_RS1_PjS3_RS3_mNS_12codecvt_modeE(i2, i3, i1 + 4 | 0, i6, i7, i1, HEAP32[i5 + 12 >> 2] | 0, HEAP32[i5 + 16 >> 2] | 0) | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
 STACKTOP = i1;
 return i7 | 0;
}

function ___strerror_l(i2, i4) {
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i1 = 0, i3 = 0;
 i1 = 0;
 while (1) {
  if ((HEAPU8[7167 + i1 >> 0] | 0) == (i2 | 0)) {
   i3 = 2;
   break;
  }
  i1 = i1 + 1 | 0;
  if ((i1 | 0) == 87) {
   i1 = 87;
   i2 = 7255;
   i3 = 5;
   break;
  }
 }
 if ((i3 | 0) == 2) if (!i1) i1 = 7255; else {
  i2 = 7255;
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

function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEEE6invokeEPFjSA_EPNS0_11BindingTypeIS8_EUt_E(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i3, i1);
 i1 = FUNCTION_TABLE_ii[i2 & 31](i3) | 0;
 if ((HEAP8[i3 + 8 + 3 >> 0] | 0) >= 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 __ZdlPv(HEAP32[i3 >> 2] | 0);
 STACKTOP = i3;
 return i1 | 0;
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

function __ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(i1 & 1)) {
  i3 = FUNCTION_TABLE_ii[i2 & 31](i3 + (i1 >> 1) | 0) | 0;
  return i3 | 0;
 } else {
  i2 = HEAP32[(HEAP32[i3 + (i1 >> 1) >> 2] | 0) + i2 >> 2] | 0;
  i3 = FUNCTION_TABLE_ii[i2 & 31](i3 + (i1 >> 1) | 0) | 0;
  return i3 | 0;
 }
 return 0;
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

function __ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3getERKS6_j(i2, i4, i3) {
 i2 = i2 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i1 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i4 + 4 >> 2] | 0) - i1 >> 2 >>> 0 <= i3 >>> 0) {
  i4 = 1;
  HEAP32[i2 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
 HEAP32[i5 >> 2] = HEAP32[i1 + (i3 << 2) >> 2];
 i4 = __emval_take_value(1696, i5 | 0) | 0;
 HEAP32[i2 >> 2] = i4;
 STACKTOP = i5;
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

function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvjRKjEvPS6_JjS8_EE6invokeERKSA_SB_jj(i2, i5, i3, i4) {
 i2 = i2 | 0;
 i5 = i5 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i1 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i2 + 4 >> 2] | 0;
 if (i2 & 1) i1 = HEAP32[(HEAP32[i5 + (i2 >> 1) >> 2] | 0) + i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 FUNCTION_TABLE_viii[i1 & 7](i5 + (i2 >> 1) | 0, i3, i6);
 STACKTOP = i6;
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

function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEKFjvEjPKS6_JEE6invokeERKS8_SA_(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(i1 & 1)) {
  i3 = FUNCTION_TABLE_ii[i2 & 31](i3 + (i1 >> 1) | 0) | 0;
  return i3 | 0;
 } else {
  i2 = HEAP32[(HEAP32[i3 + (i1 >> 1) >> 2] | 0) + i2 >> 2] | 0;
  i3 = FUNCTION_TABLE_ii[i2 & 31](i3 + (i1 >> 1) | 0) | 0;
  return i3 | 0;
 }
 return 0;
}

function _fputc() {
 var i1 = 0;
 i1 = (HEAP8[2419] | 0) == 10;
 do if ((HEAP32[605] | 0) < 0) {
  if (!i1) {
   i1 = HEAP32[591] | 0;
   if (i1 >>> 0 < (HEAP32[590] | 0) >>> 0) {
    HEAP32[591] = i1 + 1;
    HEAP8[i1 >> 0] = 10;
    break;
   }
  }
  ___overflow() | 0;
 } else {
  if (!i1) {
   i1 = HEAP32[591] | 0;
   if (i1 >>> 0 < (HEAP32[590] | 0) >>> 0) {
    HEAP32[591] = i1 + 1;
    HEAP8[i1 >> 0] = 10;
    break;
   }
  }
  ___overflow() | 0;
 } while (0);
 return;
}

function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvRKjEvPS6_JS8_EE6invokeERKSA_SB_j(i2, i4, i3) {
 i2 = i2 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i1 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i2 + 4 >> 2] | 0;
 if (i2 & 1) i1 = HEAP32[(HEAP32[i4 + (i2 >> 1) >> 2] | 0) + i1 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 FUNCTION_TABLE_vii[i1 & 3](i4 + (i2 >> 1) | 0, i5);
 STACKTOP = i5;
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

function __ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_(i1) {
 i1 = i1 | 0;
 if (!i1) return;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i1 + 4 >> 2] | 0);
 __ZdlPv(i1);
 return;
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

function __Z8patchPtrRKjS0_(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == (i1 | 0)) return;
 if (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i2, i1) | 0) {
  __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i2, i1);
  return;
 } else {
  i3 = __ZN6asmdom9createElmEPNS_5VNodeE(i1) | 0;
  _emscripten_asm_const_iii(15, i3 | 0, HEAP32[i2 + 48 >> 2] | 0) | 0;
  return;
 }
}

function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorIjNS3_9allocatorIjEEEEjES2_S9_JjEE6invokeEPSB_PS7_j(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 FUNCTION_TABLE_viii[HEAP32[i2 >> 2] & 7](i4, i3, i1);
 __emval_incref(HEAP32[i4 >> 2] | 0);
 i3 = HEAP32[i4 >> 2] | 0;
 __emval_decref(i3 | 0);
 STACKTOP = i4;
 return i3 | 0;
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

function __GLOBAL__sub_I_asm_dom_cpp() {
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = __Znwj(64) | 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 i2 = i1;
 i3 = i2 + 36 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP32[i1 + 36 >> 2] = i1 + 40;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP32[2546] = i1;
 return;
}

function __ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorIjNS2_9allocatorIjEEEEjRKjEbS7_JjS9_EE6invokeEPSB_PS6_jj(i3, i4, i1, i2) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = HEAP32[i3 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 i4 = FUNCTION_TABLE_iiii[i3 & 31](i4, i1, i5) | 0;
 STACKTOP = i5;
 return i4 | 0;
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

function __ZN10emscripten8internal14raw_destructorINSt3__26vectorIjNS2_9allocatorIjEEEEEEvPT_(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 if (!i3) return;
 i1 = HEAP32[i3 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) HEAP32[i3 + 4 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 }
 __ZdlPv(i3);
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

function __ZNKSt3__27codecvtIwc11__mbstate_tE11do_encodingEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = ___uselocale(HEAP32[i2 + 8 >> 2] | 0) | 0;
 if (i1 | 0) ___uselocale(i1) | 0;
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 if (!i1) return 1;
 i1 = ___uselocale(i1) | 0;
 i2 = ___ctype_get_mb_cur_max() | 0;
 if (i1 | 0) ___uselocale(i1) | 0;
 return (i2 | 0) == 1 | 0;
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
 i1 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 31](i1, i2, i4) | 0;
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
  HEAP8[i1 >> 0] = HEAPU8[7151 + (i2 & 15) >> 0] | 0 | i4;
  i2 = _bitshift64Lshr(i2 | 0, i3 | 0, 4) | 0;
  i3 = tempRet0;
 } while (!((i2 | 0) == 0 & (i3 | 0) == 0));
 return i1 | 0;
}

function __ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_() {
 var i1 = 0;
 i1 = __Znwj(12) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i1 + 4;
 return i1 | 0;
}

function __ZN10emscripten8internal7InvokerIvJRKjS3_EE6invokeEPFvS3_S3_Ejj(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i4 + 4 >> 2] = i1;
 HEAP32[i4 >> 2] = i2;
 FUNCTION_TABLE_vii[i3 & 3](i4 + 4 | 0, i4);
 STACKTOP = i4;
 return;
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
  FUNCTION_TABLE_v[i1 & 3]();
  i1 = _malloc(i2) | 0;
 } while (!(i1 | 0)); while (0);
 return i1 | 0;
}

function dynCall_iiiiiiiii(i9, i1, i2, i3, i4, i5, i6, i7, i8) {
 i9 = i9 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return FUNCTION_TABLE_iiiiiiiii[i9 & 7](i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0) | 0;
}

function __ZNKSt3__214__codecvt_utf8IwE9do_lengthER11__mbstate_tPKcS5_j(i5, i1, i2, i3, i4) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZNSt3__2L19utf8_to_ucs4_lengthEPKhS1_jmNS_12codecvt_modeE(i2, i3, i4, HEAP32[i5 + 12 >> 2] | 0, HEAP32[i5 + 16 >> 2] | 0) | 0;
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
 i1 = __ZNSt3__215__refstring_imp12_GLOBAL__N_113rep_from_dataEPKc_369(HEAP32[i1 >> 2] | 0) | 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i2 + -1;
 if ((i2 + -1 | 0) < 0) __ZdlPv(i1);
 return;
}

function _wmemcpy(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i4 = 0;
 if (i1 | 0) {
  i4 = i3;
  while (1) {
   i1 = i1 + -1 | 0;
   HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
   if (!i1) break; else {
    i4 = i4 + 4 | 0;
    i2 = i2 + 4 | 0;
   }
  }
 }
 return i3 | 0;
}

function __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(i2, i1, i3) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 + 4 >> 2] | 0) == (i1 | 0)) if ((HEAP32[i2 + 28 >> 2] | 0) != 1) HEAP32[i2 + 28 >> 2] = i3;
 return;
}

function __ZNK10__cxxabiv117__pbase_type_info9can_catchEPKNS_16__shim_type_infoERPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, i2) | 0) i1 = 1; else i1 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i2, 1632) | 0;
 return i1 | 0;
}

function ___cxa_get_globals_fast() {
 var i1 = 0, i2 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (!(_pthread_once(10796, 2) | 0)) {
  i2 = _pthread_getspecific(HEAP32[2700] | 0) | 0;
  STACKTOP = i1;
  return i2 | 0;
 } else _abort_message(9590, i1);
 return 0;
}

function __ZNKSt3__27codecvtIwc11__mbstate_tE13do_max_lengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i1 = HEAP32[i1 + 8 >> 2] | 0;
 if (!i1) i1 = 1; else {
  i2 = ___uselocale(i1) | 0;
  i1 = ___ctype_get_mb_cur_max() | 0;
  if (i2) ___uselocale(i2) | 0;
 }
 return i1 | 0;
}

function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 _free(i1);
 if (!(_pthread_setspecific(HEAP32[2700] | 0, 0) | 0)) {
  STACKTOP = i2;
  return;
 } else _abort_message(9689, i2);
}

function __ZN10emscripten8internal7InvokerIiJRKjEE6invokeEPFiS3_Ej(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i3 >> 2] = i1;
 i2 = FUNCTION_TABLE_ii[i2 & 31](i3) | 0;
 STACKTOP = i3;
 return i2 | 0;
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
 return __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj(i1, 2800, __ZNSt3__211char_traitsIcE6lengthEPKc() | 0) | 0;
}

function __ZN10emscripten8internal7InvokerIvJRKjEE6invokeEPFvS3_Ej(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i3 >> 2] = i1;
 FUNCTION_TABLE_vi[i2 & 31](i3);
 STACKTOP = i3;
 return;
}

function ___munmap(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = i1;
 ___syscall_ret(___syscall91(91, i3 | 0) | 0) | 0;
 STACKTOP = i3;
 return;
}

function __ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE(i1) {
 i1 = i1 | 0;
 return FUNCTION_TABLE_i[i1 & 3]() | 0;
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

function __ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3setERS6_jRKj(i2, i1, i3) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 << 2) >> 2] = HEAP32[i3 >> 2];
 return 1;
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

function __ZNSt3__27codecvtIwc11__mbstate_tED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = 2476;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) != (__ZNSt3__26__clocEv() | 0)) _freelocale(HEAP32[i1 + 8 >> 2] | 0);
 return;
}

function __ZN10emscripten8internal12operator_newINSt3__26vectorIjNS2_9allocatorIjEEEEJEEEPT_DpOT0_() {
 var i1 = 0;
 i1 = __Znwj(12) | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 return i1 | 0;
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
 if (!(_pthread_key_create(10800, 23) | 0)) {
  STACKTOP = i1;
  return;
 } else _abort_message(9639, i1);
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

function dynCall_iiiiii(i6, i1, i2, i3, i4, i5) {
 i6 = i6 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiiii[i6 & 7](i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}

function __ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 return __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i2, i3) | 0;
}

function __ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_(i1) {
 i1 = i1 | 0;
 return 1104;
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

function __ZNSt3__27codecvtIwc11__mbstate_tEC2Ej(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 + 4 >> 2] = -1;
 HEAP32[i1 >> 2] = 2476;
 i2 = __ZNSt3__26__clocEv() | 0;
 HEAP32[i1 + 8 >> 2] = i2;
 return;
}

function __ZNSt3__26__clocEv() {
 var i1 = 0;
 if (!(HEAP8[10176] | 0)) if (___cxa_guard_acquire() | 0) {
  i1 = ___newlocale(2147483647, 9203, 0) | 0;
  HEAP32[2698] = i1;
 }
 return HEAP32[2698] | 0;
}

function __ZNKSt3__214__codecvt_utf8IwE10do_unshiftER11__mbstate_tPcS4_RS4_(i3, i1, i4, i2, i5) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 i5 = i5 | 0;
 HEAP32[i5 >> 2] = i4;
 return 3;
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
 return FUNCTION_TABLE_iiiii[i5 & 7](i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return (tempRet0 = i2 + i4 + (i1 + i3 >>> 0 >>> 0 < i1 >>> 0 | 0) >>> 0, i1 + i3 >>> 0 | 0) | 0;
}

function _abort_message(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i3 >> 2] = i2;
 _vfprintf(i1, i3);
 _fputc();
 _abort();
}

function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}

function ___uselocale(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[699] | 0;
 if (i2 | 0) HEAP32[699] = (i2 | 0) == (-1 | 0) ? 10724 : i2;
 return ((i1 | 0) == 10724 ? -1 : i1) | 0;
}

function b8(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(8);
 return 0;
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

function __ZNSt3__211char_traitsIcE4moveEPcPKcj(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 if (i1 | 0) _memmove(i2 | 0, i3 | 0, i1 | 0) | 0;
 return i2 | 0;
}

function __ZNSt3__211char_traitsIcE4copyEPcPKcj(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 if (i1 | 0) _memcpy(i2 | 0, i3 | 0, i1 | 0) | 0;
 return i2 | 0;
}

function __ZSt11__terminatePFvvE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
 _abort_message(9742, i2);
}

function __ZNSt3__26locale5facet16__on_zero_sharedEv(i1) {
 i1 = i1 | 0;
 if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}

function dynCall_iiii(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iiii[i4 & 31](i1 | 0, i2 | 0, i3 | 0) | 0;
}

function __ZNSt11logic_errorC2EPKc(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i2 >> 2] = 2608;
 __ZNSt3__218__libcpp_refstringC2EPKc(i2 + 4 | 0, i1);
 return;
}

function __ZNSt3__212codecvt_utf8IwLm1114111ELNS_12codecvt_modeE0EED0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt3__27codecvtIwc11__mbstate_tED2Ev(i1);
 __ZdlPv(i1);
 return;
}

function __ZN10emscripten8internal7InvokerIPNSt3__26vectorIjNS2_9allocatorIjEEEEJEE6invokeEPFS7_vE(i1) {
 i1 = i1 | 0;
 return FUNCTION_TABLE_i[i1 & 3]() | 0;
}

function dynCall_viii(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_viii[i4 & 7](i1 | 0, i2 | 0, i3 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 15 & -16;
 return i2 | 0;
}

function __ZNSt13runtime_errorC2EPKc(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2628;
 __ZNSt3__218__libcpp_refstringC2EPKc(i1 + 4 | 0, 4733);
 return;
}

function __Z14deleteVNodePtrRKj(i1) {
 i1 = i1 | 0;
 i1 = HEAP32[i1 >> 2] | 0;
 if (!i1) return;
 __ZN6asmdom5VNodeD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function __ZNSt3__211char_traitsIcE6assignEPcjc(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 if (i1 | 0) _memset(i2 | 0, 0, i1 | 0) | 0;
 return i2 | 0;
}

function __ZNKSt3__26vectorIjNS_9allocatorIjEEE4sizeEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) >> 2 | 0;
}

function _swapc(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 i3 = _llvm_bswap_i32(i2 | 0) | 0;
 return ((i1 | 0) == 0 ? i2 : i3) | 0;
}

function ___cxa_guard_acquire() {
 var i1 = 0;
 if ((HEAP8[10176] | 0) == 1) i1 = 0; else {
  HEAP8[10176] = 1;
  i1 = 1;
 }
 return i1 | 0;
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
 if (!i1) i1 = 0; else i1 = (___dynamic_cast(i1, 1592) | 0) != 0;
 return i1 & 1 | 0;
}

function __ZNSt3__27codecvtIwc11__mbstate_tED0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt3__27codecvtIwc11__mbstate_tED2Ev(i1);
 __ZdlPv(i1);
 return;
}

function __ZNSt13runtime_errorD2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2628;
 __ZNSt3__218__libcpp_refstringD2Ev(i1 + 4 | 0);
 return;
}

function __ZNKSt13runtime_error4whatEv(i1) {
 i1 = i1 | 0;
 return __ZNKSt3__218__libcpp_refstring5c_strEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
}

function __ZNSt11logic_errorD2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2608;
 __ZNSt3__218__libcpp_refstringD2Ev(i1 + 4 | 0);
 return;
}

function __ZNKSt3__214__codecvt_utf8IwE13do_max_lengthEv(i1) {
 i1 = i1 | 0;
 return ((HEAP32[i1 + 16 >> 2] & 4 | 0) == 0 ? 4 : 7) | 0;
}

function b10(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(10);
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
 return FUNCTION_TABLE_iii[i3 & 15](i1 | 0, i2 | 0) | 0;
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
  HEAP32[2702] = 0 - i1;
  i1 = -1;
 }
 return i1 | 0;
}

function __ZN10emscripten8internal13getActualTypeINSt3__26vectorIjNS2_9allocatorIjEEEEEEPKvPT_(i1) {
 i1 = i1 | 0;
 return 1112;
}

function b12(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(12);
 return 0;
}

function _mbrlen(i2, i1, i3) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 return _mbrtowc(0, i2, i1, i3 | 0 ? i3 : 10788) | 0;
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
 FUNCTION_TABLE_vii[i3 & 3](i1 | 0, i2 | 0);
}

function _wctomb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!i1) i1 = 0; else i1 = _wcrtomb(i1, i2) | 0;
 return i1 | 0;
}

function ___loc_is_allocated(i1) {
 i1 = i1 | 0;
 return (i1 | 0) != 2116 & ((i1 | 0) != 0 & (i1 | 0) != 10748) & 1 | 0;
}

function __ZNSt3__211char_traitsIcE6assignERcRKc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 >> 0] = i2;
 return;
}

function __ZNSt3__215__refstring_imp12_GLOBAL__N_113rep_from_dataEPKc_369(i1) {
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

function __ZSt15get_new_handlerv() {
 var i1 = 0;
 i1 = HEAP32[2701] | 0;
 HEAP32[2701] = i1 + 0;
 return i1 | 0;
}

function __ZSt13get_terminatev() {
 var i1 = 0;
 i1 = HEAP32[629] | 0;
 HEAP32[629] = i1 + 0;
 return i1 | 0;
}

function __ZNSt13runtime_errorD0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt13runtime_errorD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
 return 0;
}

function __ZNSt11range_errorD0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt13runtime_errorD2Ev(i1);
 __ZdlPv(i1);
 return;
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

function dynCall_ii(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[i2 & 31](i1 | 0) | 0;
}

function __ZNSt11logic_errorD0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt11logic_errorD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function establishStackSpace(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 STACKTOP = i1;
 STACK_MAX = i2;
}

function b13(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(13);
}

function __ZN10__cxxabiv123__fundamental_type_infoD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNKSt3__27codecvtIwc11__mbstate_tE16do_always_noconvEv(i1) {
 i1 = i1 | 0;
 return 0;
}

function __Z7getNodeRKj(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] | 0;
}

function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function dynCall_vi(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 FUNCTION_TABLE_vi[i2 & 31](i1 | 0);
}

function _freelocale(i1) {
 i1 = i1 | 0;
 if (___loc_is_allocated(i1) | 0) _free(i1);
 return;
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

function __ZN10__cxxabiv119__pointer_type_infoD0Ev(i1) {
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

function __ZNKSt3__214__codecvt_utf8IwE16do_always_noconvEv(i1) {
 i1 = i1 | 0;
 return 0;
}

function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}

function ___ctype_get_mb_cur_max() {
 return (HEAP32[HEAP32[699] >> 2] | 0 ? 4 : 1) | 0;
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

function _strerror(i1) {
 i1 = i1 | 0;
 return ___strerror_l(i1, HEAP32[699] | 0) | 0;
}

function __ZNKSt3__214__codecvt_utf8IwE11do_encodingEv(i1) {
 i1 = i1 | 0;
 return 0;
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

function dynCall_i(i1) {
 i1 = i1 | 0;
 return FUNCTION_TABLE_i[i1 & 3]() | 0;
}

function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}

function __ZN10__cxxabiv116__shim_type_infoD2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}

function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}

function __ZNSt3__211char_traitsIcE6lengthEPKc() {
 return 26;
}

function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
 return 10684;
}

function _dummy_570(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}

function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}

function getTempRet0() {
 return tempRet0 | 0;
}

function stackSave() {
 return STACKTOP | 0;
}

function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}

function b2() {
 abort(2);
 return 0;
}

function b7() {
 abort(7);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorIjNS3_9allocatorIjEEEEjES2_S9_JjEE6invokeEPSB_PS7_j,__ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3setERS6_jRKj,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEbEE6invokeEPFjSA_bEPNS0_11BindingTypeIS8_EUt_Eb,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKjEE6invokeEPFjSA_SC_EPNS0_11BindingTypeIS8_EUt_Ej,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEESA_EE6invokeEPFjSA_SA_EPNS0_11BindingTypeIS8_EUt_ESH_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEEEE6invokeEPFjSA_SN_EPNS0_11BindingTypeIS8_EUt_EPSL_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SF_EPNS0_11BindingTypeIS8_EUt_EPSD_,__Z5h_sdnRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEERKj,__Z5h_sdtRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEES7_,__Z5h_sdcRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEERKNS_6vectorIjNS3_IjEEEE,__Z5h_elmRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEEi,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib];
var FUNCTION_TABLE_i = [b2,__ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newINSt3__26vectorIjNS2_9allocatorIjEEEEJEEEPT_DpOT0_,b2];
var FUNCTION_TABLE_vi = [b3,__ZNSt3__27codecvtIwc11__mbstate_tED2Ev,__ZNSt3__212codecvt_utf8IwLm1114111ELNS_12codecvt_modeE0EED0Ev,__ZNSt3__26locale5facet16__on_zero_sharedEv,__ZNSt3__27codecvtIwc11__mbstate_tED0Ev,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt11logic_errorD2Ev,__ZNSt11logic_errorD0Ev,__ZNSt13runtime_errorD2Ev,__ZNSt13runtime_errorD0Ev,__ZNSt12length_errorD0Ev,__ZNSt12out_of_rangeD0Ev,__ZNSt11range_errorD0Ev,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,__ZN10__cxxabiv119__pointer_type_infoD0Ev,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,__ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__26vectorIjNS2_9allocatorIjEEEEEEvPT_,__Z14deleteVNodePtrRKj,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b3,b3,b3,b3,b3
,b3,b3,b3];
var FUNCTION_TABLE_vii = [b4,__ZNSt3__26vectorIjNS_9allocatorIjEEE9push_backERKj,__ZN10emscripten8internal7InvokerIvJRKjEE6invokeEPFvS3_Ej,__Z8patchPtrRKjS0_];
var FUNCTION_TABLE_ii = [b5,__ZNKSt3__214__codecvt_utf8IwE11do_encodingEv,__ZNKSt3__214__codecvt_utf8IwE16do_always_noconvEv,__ZNKSt3__214__codecvt_utf8IwE13do_max_lengthEv,___stdio_close,__ZNKSt3__27codecvtIwc11__mbstate_tE11do_encodingEv,__ZNKSt3__27codecvtIwc11__mbstate_tE16do_always_noconvEv,__ZNKSt3__27codecvtIwc11__mbstate_tE13do_max_lengthEv,__ZNKSt11logic_error4whatEv,__ZNKSt13runtime_error4whatEv,__ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE,__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv,__ZN10emscripten8internal13getActualTypeINSt3__26vectorIjNS2_9allocatorIjEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__26vectorIjNS2_9allocatorIjEEEEJEE6invokeEPFS7_vE,__ZNKSt3__26vectorIjNS_9allocatorIjEEE4sizeEv,__Z7getNodeRKj,__Z3h_sRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
,b5,b5,b5];
var FUNCTION_TABLE_viii = [b6,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvRKjEvPS6_JS8_EE6invokeERKSA_SB_j,__ZNSt3__26vectorIjNS_9allocatorIjEEE6resizeEjRKj,__ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3getERKS6_j,__ZN10emscripten8internal7InvokerIvJRKjS3_EE6invokeEPFvS3_S3_Ejj,b6];
var FUNCTION_TABLE_v = [b7,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b7];
var FUNCTION_TABLE_iiiiiiiii = [b8,__ZNKSt3__214__codecvt_utf8IwE6do_outER11__mbstate_tPKwS5_RS5_PcS7_RS7_,__ZNKSt3__214__codecvt_utf8IwE5do_inER11__mbstate_tPKcS5_RS5_PwS7_RS7_,__ZNKSt3__27codecvtIwc11__mbstate_tE6do_outERS1_PKwS5_RS5_PcS7_RS7_,__ZNKSt3__27codecvtIwc11__mbstate_tE5do_inERS1_PKcS5_RS5_PwS7_RS7_,b8,b8,b8];
var FUNCTION_TABLE_iiiii = [b9,__ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorIjNS2_9allocatorIjEEEEjRKjEbS7_JjS9_EE6invokeEPSB_PS6_jj,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEERKjEE6invokeEPFjSA_SN_SP_EPNS0_11BindingTypeIS8_EUt_EPSL_j,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEESA_EE6invokeEPFjSA_SN_SA_EPNS0_11BindingTypeIS8_EUt_EPSL_SU_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SN_SS_EPNS0_11BindingTypeIS8_EUt_EPSL_PSQ_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEEiEE6invokeEPFjSA_SN_iEPNS0_11BindingTypeIS8_EUt_EPSL_i,b9,b9];
var FUNCTION_TABLE_viiiiii = [b10,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib];
var FUNCTION_TABLE_iii = [b11,__ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEKFjvEjPKS6_JEE6invokeERKS8_SA_,__ZN10emscripten8internal7InvokerIiJRKjEE6invokeEPFiS3_Ej,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEEE6invokeEPFjSA_EPNS0_11BindingTypeIS8_EUt_E,__Z4h_tiRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEb,__Z4h_snRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKj,__Z4h_stRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEES7_,__Z4h_sdRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEE,__Z4h_scRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_6vectorIjNS3_IjEEEE,b11,b11,b11,b11,b11,b11];
var FUNCTION_TABLE_iiiiii = [b12,__ZNKSt3__214__codecvt_utf8IwE10do_unshiftER11__mbstate_tPcS4_RS4_,__ZNKSt3__214__codecvt_utf8IwE9do_lengthER11__mbstate_tPKcS5_j,__ZNKSt3__27codecvtIwc11__mbstate_tE10do_unshiftERS1_PcS4_RS4_,__ZNKSt3__27codecvtIwc11__mbstate_tE9do_lengthERS1_PKcS5_j,b12,b12,b12];
var FUNCTION_TABLE_viiii = [b13,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvjRKjEvPS6_JjS8_EE6invokeERKSA_SB_jj,b13,b13];

  return { stackSave: stackSave, _i64Subtract: _i64Subtract, ___udivdi3: ___udivdi3, setThrew: setThrew, dynCall_viii: dynCall_viii, _bitshift64Lshr: _bitshift64Lshr, _bitshift64Shl: _bitshift64Shl, dynCall_viiii: dynCall_viiii, dynCall_iiiiiiiii: dynCall_iiiiiiiii, ___cxa_is_pointer_type: ___cxa_is_pointer_type, dynCall_iii: dynCall_iii, _memset: _memset, _sbrk: _sbrk, _memcpy: _memcpy, stackAlloc: stackAlloc, dynCall_vii: dynCall_vii, ___uremdi3: ___uremdi3, dynCall_vi: dynCall_vi, __GLOBAL__sub_I_asm_dom_cpp: __GLOBAL__sub_I_asm_dom_cpp, getTempRet0: getTempRet0, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, ___udivmoddi4: ___udivmoddi4, setTempRet0: setTempRet0, _i64Add: _i64Add, dynCall_iiii: dynCall_iiii, dynCall_ii: dynCall_ii, _emscripten_get_global_libc: _emscripten_get_global_libc, dynCall_iiiii: dynCall_iiiii, ___getTypeName: ___getTypeName, dynCall_i: dynCall_i, __GLOBAL__sub_I_index_cpp: __GLOBAL__sub_I_index_cpp, dynCall_iiiiii: dynCall_iiiiii, _llvm_bswap_i32: _llvm_bswap_i32, dynCall_viiiii: dynCall_viiiii, ___cxa_can_catch: ___cxa_can_catch, _free: _free, runPostSets: runPostSets, dynCall_viiiiii: dynCall_viiiiii, establishStackSpace: establishStackSpace, _memmove: _memmove, stackRestore: stackRestore, _malloc: _malloc, _emscripten_replace_memory: _emscripten_replace_memory, dynCall_v: dynCall_v };
})
;