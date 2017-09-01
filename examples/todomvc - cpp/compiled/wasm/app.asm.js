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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiiiiiii=env.invoke_iiiiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _pthread_getspecific=env._pthread_getspecific;
  var ___lock=env.___lock;
  var floatReadValueFromPointer=env.floatReadValueFromPointer;
  var simpleReadValueFromPointer=env.simpleReadValueFromPointer;
  var __emval_call_void_method=env.__emval_call_void_method;
  var ___resumeException=env.___resumeException;
  var _pthread_key_create=env._pthread_key_create;
  var __embind_register_memory_view=env.__embind_register_memory_view;
  var throwInternalError=env.throwInternalError;
  var get_first_emval=env.get_first_emval;
  var _abort=env._abort;
  var __emval_addMethodCaller=env.__emval_addMethodCaller;
  var requireHandle=env.requireHandle;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var ___unlock=env.___unlock;
  var extendError=env.extendError;
  var init_emval=env.init_emval;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var ___buildEnvironment=env.___buildEnvironment;
  var _emscripten_asm_const_ii=env._emscripten_asm_const_ii;
  var getShiftFromSize=env.getShiftFromSize;
  var __emval_get_property=env.__emval_get_property;
  var ___syscall91=env.___syscall91;
  var __emval_as=env.__emval_as;
  var _llvm_cttz_i32=env._llvm_cttz_i32;
  var ___setErrNo=env.___setErrNo;
  var __emval_register=env.__emval_register;
  var __embind_register_void=env.__embind_register_void;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var __embind_register_bool=env.__embind_register_bool;
  var _emscripten_asm_const_v=env._emscripten_asm_const_v;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var __emval_incref=env.__emval_incref;
  var _embind_repr=env._embind_repr;
  var __embind_register_std_wstring=env.__embind_register_std_wstring;
  var __emval_get_global=env.__emval_get_global;
  var createNamedFunction=env.createNamedFunction;
  var ___cxa_throw=env.___cxa_throw;
  var embind_init_charCodes=env.embind_init_charCodes;
  var __emval_take_value=env.__emval_take_value;
  var readLatin1String=env.readLatin1String;
  var getStringOrSymbol=env.getStringOrSymbol;
  var throwUnboundTypeError=env.throwUnboundTypeError;
  var craftInvokerFunction=env.craftInvokerFunction;
  var __embind_register_integer=env.__embind_register_integer;
  var _pthread_once=env._pthread_once;
  var __emval_decref=env.__emval_decref;
  var _getenv=env._getenv;
  var exposePublicSymbol=env.exposePublicSymbol;
  var runDestructors=env.runDestructors;
  var requireRegisteredType=env.requireRegisteredType;
  var makeLegalFunctionName=env.makeLegalFunctionName;
  var ___map_file=env.___map_file;
  var integerReadValueFromPointer=env.integerReadValueFromPointer;
  var __emval_set_property=env.__emval_set_property;
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
  var __embind_register_emval=env.__embind_register_emval;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var requireFunction=env.requireFunction;
  var __embind_register_float=env.__embind_register_float;
  var new_=env.new_;
  var ___syscall140=env.___syscall140;
  var getTypeName=env.getTypeName;
  var _pthread_setspecific=env._pthread_setspecific;
  var __embind_register_std_string=env.__embind_register_std_string;
  var replacePublicSymbol=env.replacePublicSymbol;
  var count_emval_handles=env.count_emval_handles;
  var ___syscall146=env.___syscall146;
  var __emval_get_method_caller=env.__emval_get_method_caller;
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
function __ZN7todomvc5todos4viewENS0_5TodosENSt3__28functionIFvNS3_IFS1_S1_EEEEEE(i30, i31) {
 i30 = i30 | 0;
 i31 = i31 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i49 = STACKTOP;
 STACKTOP = STACKTOP + 3008 | 0;
 i1 = HEAP32[i30 + 16 >> 2] | 0;
 i4 = HEAP32[i30 + 20 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) i16 = 0; else {
  i3 = i1;
  i2 = 0;
  do {
   i2 = ((HEAP8[i3 + 16 >> 0] | 0) == 0 & 1) + i2 | 0;
   i3 = i3 + 32 | 0;
  } while ((i3 | 0) != (i4 | 0));
  i16 = i2;
 }
 i2 = HEAP32[i30 + 28 >> 2] | 0;
 if ((i2 | 0) == 2) if (!(i4 - i1 >> 5)) {
  i48 = 0;
  i1 = 0;
 } else {
  if (i4 - i1 >> 5 >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i5 = __Znwj(i4 - i1 | 0) | 0;
  i1 = HEAP32[i30 + 16 >> 2] | 0;
  i3 = HEAP32[i30 + 20 >> 2] | 0;
  if ((i1 | 0) == (i3 | 0)) {
   i48 = i5;
   i1 = i5;
  } else {
   i4 = i5;
   i2 = i1;
   i1 = i5;
   do {
    HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4 + 4 | 0, i2 + 4 | 0);
    HEAP16[i4 + 16 >> 1] = HEAP16[i2 + 16 >> 1] | 0;
    __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i4 + 20 | 0, i2 + 20 | 0);
    i2 = i2 + 32 | 0;
    i4 = i1 + 32 | 0;
    i1 = i4;
   } while ((i2 | 0) != (i3 | 0));
   i48 = i5;
  }
 } else {
  HEAP32[i49 + 360 >> 2] = 0;
  i6 = i49 + 360 + 4 | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i49 + 360 + 8 >> 2] = 0;
  if ((i4 | 0) == (i1 | 0)) {
   i1 = 0;
   i2 = 0;
  } else {
   i3 = 0;
   while (1) {
    L18 : do switch (i2 | 0) {
    case 0:
     {
      i4 = i1 + (i3 << 5) | 0;
      i5 = i1 + (i3 << 5) + 16 | 0;
      if (HEAP8[i5 >> 0] | 0) {
       i2 = HEAP32[i6 >> 2] | 0;
       if ((i2 | 0) == (HEAP32[i49 + 360 + 8 >> 2] | 0)) {
        __ZNSt3__26vectorIN7todomvc4task4TaskENS_9allocatorIS3_EEE21__push_back_slow_pathIRKS3_EEvOT_(i49 + 360 | 0, i4);
        break L18;
       } else {
        HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
        __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + (i3 << 5) + 4 | 0);
        HEAP16[i2 + 16 >> 1] = HEAP16[i5 >> 1] | 0;
        __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + (i3 << 5) + 20 | 0);
        HEAP32[i6 >> 2] = i2 + 32;
        break L18;
       }
      }
      break;
     }
    case 1:
     {
      i4 = i1 + (i3 << 5) | 0;
      i5 = i1 + (i3 << 5) + 16 | 0;
      if (!(HEAP8[i5 >> 0] | 0)) {
       i2 = HEAP32[i6 >> 2] | 0;
       if ((i2 | 0) == (HEAP32[i49 + 360 + 8 >> 2] | 0)) {
        __ZNSt3__26vectorIN7todomvc4task4TaskENS_9allocatorIS3_EEE21__push_back_slow_pathIRKS3_EEvOT_(i49 + 360 | 0, i4);
        break L18;
       } else {
        HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
        __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + (i3 << 5) + 4 | 0);
        HEAP16[i2 + 16 >> 1] = HEAP16[i5 >> 1] | 0;
        __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + (i3 << 5) + 20 | 0);
        HEAP32[i6 >> 2] = i2 + 32;
        break L18;
       }
      }
      break;
     }
    default:
     {}
    } while (0);
    i3 = i3 + 1 | 0;
    i1 = HEAP32[i30 + 16 >> 2] | 0;
    if (i3 >>> 0 >= (HEAP32[i30 + 20 >> 2] | 0) - i1 >> 5 >>> 0) break;
    i2 = HEAP32[i30 + 28 >> 2] | 0;
   }
   i1 = HEAP32[i6 >> 2] | 0;
   i2 = HEAP32[i49 + 360 >> 2] | 0;
  }
  i48 = i2;
 }
 HEAP32[i49 + 2956 >> 2] = 0;
 i47 = i49 + 2956 + 4 | 0;
 HEAP32[i47 >> 2] = 0;
 HEAP32[i49 + 2956 + 8 >> 2] = 0;
 L34 : do if ((i1 | 0) != (i48 | 0)) {
  i14 = i49 + 360 + 4 | 0;
  i9 = i49 + 280 + 16 | 0;
  i15 = i49 + 280 + 28 | 0;
  i11 = i49 + 280 + 44 | 0;
  i10 = i49 + 232 + 16 | 0;
  i8 = i48;
  i13 = i1 - i48 >> 5;
  i4 = 0;
  i5 = 0;
  i12 = 0;
  while (1) {
   HEAP32[i49 + 360 >> 2] = HEAP32[i8 + (i12 << 5) >> 2];
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i14, i8 + (i12 << 5) + 4 | 0);
   HEAP16[i49 + 360 + 16 >> 1] = HEAP16[i8 + (i12 << 5) + 16 >> 1] | 0;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i49 + 360 + 20 | 0, i8 + (i12 << 5) + 20 | 0);
   HEAP32[i49 + 2968 >> 2] = HEAP32[i49 + 360 >> 2];
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i49 + 2968 + 4 | 0, i14);
   HEAP16[i49 + 2968 + 16 >> 1] = HEAP16[i49 + 360 + 16 >> 1] | 0;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i49 + 2968 + 20 | 0, i49 + 360 + 20 | 0);
   i2 = HEAP32[i31 + 16 >> 2] | 0;
   do if (!i2) HEAP32[i9 >> 2] = 0; else if ((i2 | 0) == (i31 | 0)) {
    HEAP32[i9 >> 2] = i49 + 280;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i49 + 280 | 0);
    break;
   } else {
    i46 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2) | 0;
    HEAP32[i9 >> 2] = i46;
    break;
   } while (0);
   HEAP32[i49 + 280 + 24 >> 2] = HEAP32[i49 + 360 >> 2];
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i15, i14);
   HEAP16[i49 + 280 + 40 >> 1] = HEAP16[i49 + 360 + 16 >> 1] | 0;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i11, i49 + 360 + 20 | 0);
   HEAP32[i49 + 336 + 16 >> 2] = 0;
   i3 = __Znwj(64) | 0;
   HEAP32[i3 >> 2] = 2396;
   i2 = HEAP32[i9 >> 2] | 0;
   do if (!i2) HEAP32[i3 + 24 >> 2] = 0; else if ((i2 | 0) == (i49 + 280 | 0)) {
    HEAP32[i3 + 24 >> 2] = i3 + 8;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i3 + 8 | 0);
    break;
   } else {
    HEAP32[i3 + 24 >> 2] = i2;
    HEAP32[i9 >> 2] = 0;
    break;
   } while (0);
   HEAP32[i3 + 32 >> 2] = HEAP32[i49 + 280 + 24 >> 2];
   HEAP32[i3 + 36 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i3 + 36 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
   HEAP32[i3 + 36 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
   HEAP32[i15 >> 2] = 0;
   HEAP32[i15 + 4 >> 2] = 0;
   HEAP32[i15 + 8 >> 2] = 0;
   HEAP16[i3 + 48 >> 1] = HEAP16[i49 + 280 + 40 >> 1] | 0;
   HEAP32[i3 + 52 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i3 + 52 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i3 + 52 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i11 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
   HEAP32[i11 + 8 >> 2] = 0;
   HEAP32[i49 + 336 + 16 >> 2] = i3;
   i2 = HEAP32[i31 + 16 >> 2] | 0;
   do if (!i2) HEAP32[i10 >> 2] = 0; else if ((i2 | 0) == (i31 | 0)) {
    HEAP32[i10 >> 2] = i49 + 232;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i49 + 232 | 0);
    break;
   } else {
    i46 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2) | 0;
    HEAP32[i10 >> 2] = i46;
    break;
   } while (0);
   HEAP32[i49 + 256 + 16 >> 2] = 0;
   i3 = __Znwj(32) | 0;
   HEAP32[i3 >> 2] = 2440;
   i2 = HEAP32[i10 >> 2] | 0;
   do if (!i2) HEAP32[i3 + 24 >> 2] = 0; else if ((i2 | 0) == (i49 + 232 | 0)) {
    HEAP32[i3 + 24 >> 2] = i3 + 8;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i3 + 8 | 0);
    break;
   } else {
    HEAP32[i3 + 24 >> 2] = i2;
    HEAP32[i10 >> 2] = 0;
    break;
   } while (0);
   HEAP32[i49 + 256 + 16 >> 2] = i3;
   i7 = __ZN7todomvc4task4viewENS0_4TaskENSt3__28functionIFvNS3_IFS1_S1_EEEEEENS3_IFviEEE(i49 + 2968 | 0, i49 + 336 | 0, i49 + 256 | 0) | 0;
   i2 = HEAP32[i49 + 2956 + 8 >> 2] | 0;
   if (i4 >>> 0 < i2 >>> 0) {
    HEAP32[i4 >> 2] = i7;
    i3 = (HEAP32[i47 >> 2] | 0) + 4 | 0;
    HEAP32[i47 >> 2] = i3;
    i5 = i3;
   } else {
    i6 = HEAP32[i49 + 2956 >> 2] | 0;
    i5 = i5 - i6 | 0;
    if (((i5 >> 2) + 1 | 0) >>> 0 > 1073741823) {
     i33 = 50;
     break;
    }
    i2 = i2 - i6 >> 2 >>> 0 < 536870911 ? (i2 - i6 >> 1 >>> 0 < ((i5 >> 2) + 1 | 0) >>> 0 ? (i5 >> 2) + 1 | 0 : i2 - i6 >> 1) : 1073741823;
    if (!i2) i3 = 0; else {
     if (i2 >>> 0 > 1073741823) {
      i33 = 53;
      break;
     }
     i3 = __Znwj(i2 << 2) | 0;
    }
    i4 = i3 + (i5 >> 2 << 2) | 0;
    HEAP32[i4 >> 2] = i7;
    if ((i5 | 0) > 0) _memcpy(i4 + (0 - (i5 >> 2) << 2) | 0, i6 | 0, i5 | 0) | 0;
    HEAP32[i49 + 2956 >> 2] = i4 + (0 - (i5 >> 2) << 2);
    HEAP32[i47 >> 2] = i4 + 4;
    HEAP32[i49 + 2956 + 8 >> 2] = i3 + (i2 << 2);
    if (!i6) {
     i5 = i4 + 4 | 0;
     i3 = i4 + 4 | 0;
    } else {
     __ZdlPv(i6);
     i5 = i4 + 4 | 0;
     i3 = i4 + 4 | 0;
    }
   }
   i2 = HEAP32[i49 + 256 + 16 >> 2] | 0;
   if ((i2 | 0) == (i49 + 256 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
   i2 = HEAP32[i10 >> 2] | 0;
   if ((i2 | 0) == (i49 + 232 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
   i2 = HEAP32[i49 + 336 + 16 >> 2] | 0;
   if ((i2 | 0) == (i49 + 336 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
   if ((HEAP8[i49 + 280 + 52 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i11 >> 2] | 0);
   if ((HEAP8[i15 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i15 >> 2] | 0);
   i2 = HEAP32[i9 >> 2] | 0;
   if ((i2 | 0) == (i49 + 280 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
   if ((HEAP8[i49 + 2968 + 28 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2968 + 20 >> 2] | 0);
   if ((HEAP8[i49 + 2968 + 4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2968 + 4 >> 2] | 0);
   if ((HEAP8[i49 + 360 + 28 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 360 + 20 >> 2] | 0);
   if ((HEAP8[i14 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i14 >> 2] | 0);
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= i13 >>> 0) break L34; else i4 = i3;
  }
  if ((i33 | 0) == 50) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(); else if ((i33 | 0) == 53) {
   i49 = ___cxa_allocate_exception(8) | 0;
   __ZNSt11logic_errorC2EPKc(i49, 8697);
   HEAP32[i49 >> 2] = 4420;
   ___cxa_throw(i49 | 0, 2008, 95);
  }
 } while (0);
 HEAP32[i49 + 2944 + 8 >> 2] = 0;
 HEAP8[i49 + 2944 + 11 >> 0] = 7;
 HEAP8[i49 + 2944 >> 0] = HEAP8[7251] | 0;
 HEAP8[i49 + 2944 + 1 >> 0] = HEAP8[7252] | 0;
 HEAP8[i49 + 2944 + 2 >> 0] = HEAP8[7253] | 0;
 HEAP8[i49 + 2944 + 3 >> 0] = HEAP8[7254] | 0;
 HEAP8[i49 + 2944 + 4 >> 0] = HEAP8[7255] | 0;
 HEAP8[i49 + 2944 + 5 >> 0] = HEAP8[7256] | 0;
 HEAP8[i49 + 2944 + 6 >> 0] = HEAP8[7257] | 0;
 HEAP8[i49 + 2944 + 7 >> 0] = 0;
 HEAP32[i49 + 2840 >> 2] = 0;
 HEAP32[i49 + 2840 + 4 >> 2] = 0;
 HEAP32[i49 + 2840 + 8 >> 2] = 0;
 HEAP8[i49 + 2840 + 11 >> 0] = 5;
 HEAP8[i49 + 2840 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 2840 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 2840 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 2840 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 2840 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 2840 + 5 >> 0] = 0;
 i46 = i49 + 2840 + 12 | 0;
 HEAP32[i49 + 2840 + 20 >> 2] = 0;
 HEAP8[i46 + 11 >> 0] = 7;
 HEAP8[i46 >> 0] = HEAP8[7265] | 0;
 HEAP8[i46 + 1 >> 0] = HEAP8[7266] | 0;
 HEAP8[i46 + 2 >> 0] = HEAP8[7267] | 0;
 HEAP8[i46 + 3 >> 0] = HEAP8[7268] | 0;
 HEAP8[i46 + 4 >> 0] = HEAP8[7269] | 0;
 HEAP8[i46 + 5 >> 0] = HEAP8[7270] | 0;
 HEAP8[i46 + 6 >> 0] = HEAP8[7271] | 0;
 HEAP8[i46 + 7 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 2864 | 0, i49 + 2840 | 0, 1);
 HEAP32[i49 + 192 + 8 >> 2] = 0;
 HEAP8[i49 + 192 + 11 >> 0] = 7;
 HEAP8[i49 + 192 >> 0] = HEAP8[7273] | 0;
 HEAP8[i49 + 192 + 1 >> 0] = HEAP8[7274] | 0;
 HEAP8[i49 + 192 + 2 >> 0] = HEAP8[7275] | 0;
 HEAP8[i49 + 192 + 3 >> 0] = HEAP8[7276] | 0;
 HEAP8[i49 + 192 + 4 >> 0] = HEAP8[7277] | 0;
 HEAP8[i49 + 192 + 5 >> 0] = HEAP8[7278] | 0;
 HEAP8[i49 + 192 + 6 >> 0] = HEAP8[7279] | 0;
 HEAP8[i49 + 192 + 7 >> 0] = 0;
 HEAP32[i49 + 192 + 16 >> 2] = 2484;
 HEAP32[i49 + 192 + 20 >> 2] = 55;
 HEAP32[i49 + 192 + 32 >> 2] = i49 + 192 + 16;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ESt16initializer_listISI_E(i49 + 2816 | 0, i49 + 192 | 0, 1);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_NS1_8functionIFbN10emscripten3valEEEESA_SC_NS6_INSD_ISE_SO_EEEEEE(i49 + 2884 | 0, i49 + 2864 | 0, i49 + 2816 | 0);
 HEAP32[i49 + 2792 >> 2] = 0;
 HEAP32[i49 + 2792 + 4 >> 2] = 0;
 HEAP32[i49 + 2792 + 8 >> 2] = 0;
 HEAP8[i49 + 2792 + 11 >> 0] = 6;
 HEAP8[i49 + 2792 >> 0] = HEAP8[7281] | 0;
 HEAP8[i49 + 2792 + 1 >> 0] = HEAP8[7282] | 0;
 HEAP8[i49 + 2792 + 2 >> 0] = HEAP8[7283] | 0;
 HEAP8[i49 + 2792 + 3 >> 0] = HEAP8[7284] | 0;
 HEAP8[i49 + 2792 + 4 >> 0] = HEAP8[7285] | 0;
 HEAP8[i49 + 2792 + 5 >> 0] = HEAP8[7286] | 0;
 HEAP8[i49 + 2792 + 6 >> 0] = 0;
 HEAP32[i49 + 2688 >> 2] = 0;
 HEAP32[i49 + 2688 + 4 >> 2] = 0;
 HEAP32[i49 + 2688 + 8 >> 2] = 0;
 HEAP8[i49 + 2688 + 11 >> 0] = 5;
 HEAP8[i49 + 2688 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 2688 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 2688 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 2688 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 2688 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 2688 + 5 >> 0] = 0;
 i45 = i49 + 2688 + 12 | 0;
 HEAP32[i45 >> 2] = 0;
 HEAP32[i45 + 4 >> 2] = 0;
 HEAP32[i45 + 8 >> 2] = 0;
 HEAP8[i45 + 11 >> 0] = 6;
 HEAP8[i45 >> 0] = HEAP8[7281] | 0;
 HEAP8[i45 + 1 >> 0] = HEAP8[7282] | 0;
 HEAP8[i45 + 2 >> 0] = HEAP8[7283] | 0;
 HEAP8[i45 + 3 >> 0] = HEAP8[7284] | 0;
 HEAP8[i45 + 4 >> 0] = HEAP8[7285] | 0;
 HEAP8[i45 + 5 >> 0] = HEAP8[7286] | 0;
 HEAP8[i45 + 6 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 2712 | 0, i49 + 2688 | 0, 1);
 HEAP32[i49 + 2668 >> 2] = 0;
 HEAP32[i49 + 2668 + 4 >> 2] = 0;
 HEAP32[i49 + 2668 + 8 >> 2] = 0;
 HEAP32[i49 + 2668 + 12 >> 2] = 0;
 HEAPF32[i49 + 2668 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i49 + 2648 >> 2] = 0;
 HEAP32[i49 + 2648 + 4 >> 2] = 0;
 HEAP32[i49 + 2648 + 8 >> 2] = 0;
 HEAP32[i49 + 2648 + 12 >> 2] = 0;
 HEAPF32[i49 + 2648 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 2732 | 0, i49 + 2712 | 0, i49 + 2668 | 0, i49 + 2648 | 0);
 HEAP32[i49 + 2624 >> 2] = 0;
 HEAP32[i49 + 2624 + 4 >> 2] = 0;
 HEAP32[i49 + 2624 + 8 >> 2] = 0;
 HEAP8[i49 + 2624 + 11 >> 0] = 2;
 HEAP16[i49 + 2624 >> 1] = 12648;
 HEAP8[i49 + 2624 + 2 >> 0] = 0;
 HEAP32[i49 + 2612 >> 2] = 0;
 HEAP32[i49 + 2612 + 4 >> 2] = 0;
 HEAP32[i49 + 2612 + 8 >> 2] = 0;
 HEAP8[i49 + 2612 + 11 >> 0] = 5;
 HEAP8[i49 + 2612 >> 0] = HEAP8[7288] | 0;
 HEAP8[i49 + 2612 + 1 >> 0] = HEAP8[7289] | 0;
 HEAP8[i49 + 2612 + 2 >> 0] = HEAP8[7290] | 0;
 HEAP8[i49 + 2612 + 3 >> 0] = HEAP8[7291] | 0;
 HEAP8[i49 + 2612 + 4 >> 0] = HEAP8[7292] | 0;
 HEAP8[i49 + 2612 + 5 >> 0] = 0;
 i5 = __Znwj(112) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5, i49 + 2624 | 0);
 HEAP32[i5 + 12 >> 2] = 0;
 HEAP32[i5 + 12 + 4 >> 2] = 0;
 HEAP32[i5 + 12 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5 + 24 | 0, i49 + 2612 | 0);
 HEAP32[i5 + 36 >> 2] = 0;
 HEAP32[i5 + 36 + 4 >> 2] = 0;
 HEAP32[i5 + 36 + 8 >> 2] = 0;
 HEAP32[i5 + 36 + 12 >> 2] = 0;
 HEAPF32[i5 + 52 >> 2] = Math_fround(1.0);
 HEAP32[i5 + 56 >> 2] = 0;
 HEAP32[i5 + 56 + 4 >> 2] = 0;
 HEAP32[i5 + 56 + 8 >> 2] = 0;
 HEAP32[i5 + 56 + 12 >> 2] = 0;
 HEAPF32[i5 + 72 >> 2] = Math_fround(1.0);
 HEAP32[i5 + 76 >> 2] = 0;
 HEAP32[i5 + 76 + 4 >> 2] = 0;
 HEAP32[i5 + 76 + 8 >> 2] = 0;
 HEAP32[i5 + 76 + 12 >> 2] = 0;
 HEAPF32[i5 + 92 >> 2] = Math_fround(1.0);
 HEAP32[i5 + 100 >> 2] = 0;
 HEAP32[i5 + 104 >> 2] = 0;
 HEAP32[i5 + 108 >> 2] = 0;
 HEAP32[i49 + 2600 >> 2] = 0;
 HEAP32[i49 + 2600 + 4 >> 2] = 0;
 HEAP32[i49 + 2600 + 8 >> 2] = 0;
 HEAP8[i49 + 2600 + 11 >> 0] = 5;
 HEAP8[i49 + 2600 >> 0] = HEAP8[7294] | 0;
 HEAP8[i49 + 2600 + 1 >> 0] = HEAP8[7295] | 0;
 HEAP8[i49 + 2600 + 2 >> 0] = HEAP8[7296] | 0;
 HEAP8[i49 + 2600 + 3 >> 0] = HEAP8[7297] | 0;
 HEAP8[i49 + 2600 + 4 >> 0] = HEAP8[7298] | 0;
 HEAP8[i49 + 2600 + 5 >> 0] = 0;
 HEAP32[i49 + 2448 >> 2] = 0;
 HEAP32[i49 + 2448 + 4 >> 2] = 0;
 HEAP32[i49 + 2448 + 8 >> 2] = 0;
 HEAP8[i49 + 2448 + 11 >> 0] = 2;
 HEAP16[i49 + 2448 >> 1] = 25705;
 HEAP8[i49 + 2448 + 2 >> 0] = 0;
 i43 = i49 + 2448 + 12 | 0;
 HEAP32[i43 >> 2] = 0;
 HEAP32[i43 + 4 >> 2] = 0;
 HEAP32[i43 + 8 >> 2] = 0;
 HEAP8[i43 + 11 >> 0] = 8;
 HEAP32[i43 >> 2] = 762799470;
 HEAP32[i43 + 4 >> 2] = 1868853108;
 HEAP8[i49 + 2448 + 20 >> 0] = 0;
 i41 = i49 + 2448 + 24 | 0;
 HEAP32[i41 >> 2] = 0;
 HEAP32[i41 + 4 >> 2] = 0;
 HEAP32[i41 + 8 >> 2] = 0;
 HEAP8[i41 + 11 >> 0] = 5;
 HEAP8[i41 >> 0] = HEAP8[7259] | 0;
 HEAP8[i41 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i41 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i41 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i41 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i41 + 5 >> 0] = 0;
 i44 = i49 + 2448 + 36 | 0;
 HEAP32[i44 >> 2] = 0;
 HEAP32[i44 + 4 >> 2] = 0;
 HEAP32[i44 + 8 >> 2] = 0;
 HEAP8[i44 + 11 >> 0] = 8;
 HEAP32[i44 >> 2] = 762799470;
 HEAP32[i44 + 4 >> 2] = 1868853108;
 HEAP8[i49 + 2448 + 44 >> 0] = 0;
 i42 = i49 + 2448 + 48 | 0;
 HEAP32[i42 >> 2] = 0;
 HEAP32[i42 + 4 >> 2] = 0;
 HEAP32[i42 + 8 >> 2] = 0;
 i2 = __Znwj(16) | 0;
 HEAP32[i42 >> 2] = i2;
 HEAP32[i49 + 2448 + 56 >> 2] = -2147483632;
 HEAP32[i49 + 2448 + 52 >> 2] = 11;
 i7 = i2;
 i3 = 7300;
 i8 = i7 + 11 | 0;
 do {
  HEAP8[i7 >> 0] = HEAP8[i3 >> 0] | 0;
  i7 = i7 + 1 | 0;
  i3 = i3 + 1 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP8[i2 + 11 >> 0] = 0;
 i40 = i49 + 2448 + 60 | 0;
 HEAP32[i40 >> 2] = 0;
 HEAP32[i40 + 4 >> 2] = 0;
 HEAP32[i40 + 8 >> 2] = 0;
 i2 = __Znwj(32) | 0;
 HEAP32[i40 >> 2] = i2;
 HEAP32[i49 + 2448 + 68 >> 2] = -2147483616;
 HEAP32[i49 + 2448 + 64 >> 2] = 22;
 i7 = i2;
 i3 = 7312;
 i8 = i7 + 22 | 0;
 do {
  HEAP8[i7 >> 0] = HEAP8[i3 >> 0] | 0;
  i7 = i7 + 1 | 0;
  i3 = i3 + 1 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP8[i2 + 22 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 2520 | 0, i49 + 2448 | 0, 3);
 i38 = HEAP8[i30 + 4 + 11 >> 0] | 0;
 i39 = i38 << 24 >> 24 < 0 ? HEAP32[i30 + 8 >> 2] | 0 : i38 & 255;
 i2 = _malloc(i39 + 4 | 0) | 0;
 HEAP32[i2 >> 2] = i39;
 _memcpy(i2 + 4 | 0, (i38 << 24 >> 24 < 0 ? HEAP32[i30 + 4 >> 2] | 0 : i30 + 4 | 0) | 0, i39 | 0) | 0;
 HEAP32[i49 + 360 >> 2] = i2;
 i2 = __emval_take_value(1048, i49 + 360 | 0) | 0;
 HEAP32[i49 + 2408 >> 2] = 0;
 HEAP32[i49 + 2408 + 4 >> 2] = 0;
 HEAP32[i49 + 2408 + 8 >> 2] = 0;
 HEAP8[i49 + 2408 + 11 >> 0] = 5;
 HEAP8[i49 + 2408 >> 0] = HEAP8[7335] | 0;
 HEAP8[i49 + 2408 + 1 >> 0] = HEAP8[7336] | 0;
 HEAP8[i49 + 2408 + 2 >> 0] = HEAP8[7337] | 0;
 HEAP8[i49 + 2408 + 3 >> 0] = HEAP8[7338] | 0;
 HEAP8[i49 + 2408 + 4 >> 0] = HEAP8[7339] | 0;
 HEAP8[i49 + 2408 + 5 >> 0] = 0;
 HEAP32[i49 + 2408 + 12 >> 2] = i2;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S8_EEEEEC2ESt16initializer_listISF_E(i49 + 2424 | 0, i49 + 2408 | 0, 1);
 i2 = HEAP32[i31 + 16 >> 2] | 0;
 do if (!i2) {
  HEAP32[i49 + 128 + 16 >> 2] = 0;
  i2 = 0;
  i39 = i49 + 128 + 16 | 0;
 } else if ((i2 | 0) == (i31 | 0)) {
  HEAP32[i49 + 128 + 16 >> 2] = i49 + 128;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i49 + 128 | 0);
  i2 = HEAP32[i49 + 128 + 16 >> 2] | 0;
  i39 = i49 + 128 + 16 | 0;
  break;
 } else {
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2) | 0;
  HEAP32[i49 + 128 + 16 >> 2] = i2;
  i39 = i49 + 128 + 16 | 0;
  break;
 } while (0);
 HEAP32[i49 + 152 >> 2] = 0;
 HEAP32[i49 + 152 + 4 >> 2] = 0;
 HEAP32[i49 + 152 + 8 >> 2] = 0;
 HEAP8[i49 + 152 + 11 >> 0] = 9;
 i7 = i49 + 152 | 0;
 i3 = 7341;
 i8 = i7 + 9 | 0;
 do {
  HEAP8[i7 >> 0] = HEAP8[i3 >> 0] | 0;
  i7 = i7 + 1 | 0;
  i3 = i3 + 1 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP8[i49 + 152 + 9 >> 0] = 0;
 do if (!i2) {
  HEAP32[i49 + 360 + 16 >> 2] = 0;
  i2 = i49 + 360 + 16 | 0;
 } else if ((i2 | 0) == (i49 + 128 | 0)) {
  HEAP32[i49 + 360 + 16 >> 2] = i49 + 360;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i49 + 360 | 0);
  i2 = i49 + 360 + 16 | 0;
  break;
 } else {
  HEAP32[i49 + 360 + 16 >> 2] = i2;
  HEAP32[i39 >> 2] = 0;
  i2 = i49 + 360 + 16 | 0;
  break;
 } while (0);
 HEAP32[i49 + 152 + 32 >> 2] = 0;
 i4 = __Znwj(32) | 0;
 HEAP32[i4 >> 2] = 2528;
 i3 = HEAP32[i2 >> 2] | 0;
 do if (!i3) {
  i2 = i4 + 24 | 0;
  i33 = 102;
 } else {
  if ((i3 | 0) != (i49 + 360 | 0)) {
   HEAP32[i4 + 24 >> 2] = i3;
   i33 = 102;
   break;
  }
  HEAP32[i4 + 24 >> 2] = i4 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i4 + 8 | 0);
  i2 = HEAP32[i2 >> 2] | 0;
  HEAP32[i49 + 152 + 32 >> 2] = i4;
  if ((i2 | 0) == (i49 + 360 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2);
   break;
  }
  if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
 } while (0);
 if ((i33 | 0) == 102) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i49 + 152 + 32 >> 2] = i4;
 }
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ESt16initializer_listISI_E(i49 + 2388 | 0, i49 + 152 | 0, 1);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 2540 | 0, i49 + 2520 | 0, i49 + 2424 | 0, i49 + 2388 | 0);
 i14 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i14, i49 + 2600 | 0, i49 + 2540 | 0);
 i38 = __Znwj(8) | 0;
 HEAP32[i49 + 2636 >> 2] = i38;
 HEAP32[i49 + 2636 + 8 >> 2] = i38 + 8;
 HEAP32[i38 >> 2] = i5;
 HEAP32[i38 + 4 >> 2] = i14;
 HEAP32[i49 + 2636 + 4 >> 2] = i38 + 8;
 i14 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i14, i49 + 2792 | 0, i49 + 2732 | 0, i49 + 2636 | 0);
 HEAP32[i49 + 2376 + 8 >> 2] = 0;
 HEAP8[i49 + 2376 + 11 >> 0] = 7;
 HEAP8[i49 + 2376 >> 0] = HEAP8[7251] | 0;
 HEAP8[i49 + 2376 + 1 >> 0] = HEAP8[7252] | 0;
 HEAP8[i49 + 2376 + 2 >> 0] = HEAP8[7253] | 0;
 HEAP8[i49 + 2376 + 3 >> 0] = HEAP8[7254] | 0;
 HEAP8[i49 + 2376 + 4 >> 0] = HEAP8[7255] | 0;
 HEAP8[i49 + 2376 + 5 >> 0] = HEAP8[7256] | 0;
 HEAP8[i49 + 2376 + 6 >> 0] = HEAP8[7257] | 0;
 HEAP8[i49 + 2376 + 7 >> 0] = 0;
 HEAP32[i49 + 2248 >> 2] = 0;
 HEAP32[i49 + 2248 + 4 >> 2] = 0;
 HEAP32[i49 + 2248 + 8 >> 2] = 0;
 HEAP8[i49 + 2248 + 11 >> 0] = 5;
 HEAP8[i49 + 2248 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 2248 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 2248 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 2248 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 2248 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 2248 + 5 >> 0] = 0;
 i37 = i49 + 2248 + 12 | 0;
 HEAP32[i37 >> 2] = 0;
 HEAP32[i37 + 4 >> 2] = 0;
 HEAP32[i37 + 8 >> 2] = 0;
 HEAP8[i37 + 11 >> 0] = 4;
 HEAP32[i37 >> 2] = 1852399981;
 HEAP8[i49 + 2248 + 16 >> 0] = 0;
 i36 = i49 + 2248 + 24 | 0;
 i7 = (HEAP32[i30 + 20 >> 2] | 0) != (HEAP32[i30 + 16 >> 2] | 0);
 HEAP32[i49 + 2224 >> 2] = 0;
 HEAP32[i49 + 2224 + 4 >> 2] = 0;
 HEAP32[i49 + 2224 + 8 >> 2] = 0;
 i3 = i7 ? 5 : 4;
 HEAP8[i49 + 2224 + 11 >> 0] = i3;
 _memcpy(i49 + 2224 | 0, (i7 ? 7351 : 7357) | 0, i3 | 0) | 0;
 HEAP8[i49 + 2224 + i3 >> 0] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEjPKc(i49 + 2224 | 0, 7362) | 0;
 i3 = HEAP32[i49 + 2224 >> 2] | 0;
 HEAP32[i49 + 2236 >> 2] = HEAP32[i49 + 2224 + 4 >> 2];
 HEAP16[i49 + 2236 + 4 >> 1] = HEAP16[i49 + 2224 + 4 + 4 >> 1] | 0;
 HEAP8[i49 + 2236 + 6 >> 0] = HEAP8[i49 + 2224 + 4 + 6 >> 0] | 0;
 i7 = HEAP8[i49 + 2224 + 11 >> 0] | 0;
 HEAP32[i49 + 2224 >> 2] = 0;
 HEAP32[i49 + 2224 + 4 >> 2] = 0;
 HEAP32[i49 + 2224 + 8 >> 2] = 0;
 HEAP32[i36 >> 2] = 0;
 HEAP32[i36 + 4 >> 2] = 0;
 HEAP32[i36 + 8 >> 2] = 0;
 HEAP8[i36 + 11 >> 0] = 5;
 HEAP8[i36 >> 0] = HEAP8[7372] | 0;
 HEAP8[i36 + 1 >> 0] = HEAP8[7373] | 0;
 HEAP8[i36 + 2 >> 0] = HEAP8[7374] | 0;
 HEAP8[i36 + 3 >> 0] = HEAP8[7375] | 0;
 HEAP8[i36 + 4 >> 0] = HEAP8[7376] | 0;
 HEAP8[i36 + 5 >> 0] = 0;
 HEAP32[i49 + 2248 + 36 >> 2] = i3;
 HEAP32[i49 + 2248 + 40 >> 2] = HEAP32[i49 + 2236 >> 2];
 HEAP16[i49 + 2248 + 40 + 4 >> 1] = HEAP16[i49 + 2236 + 4 >> 1] | 0;
 HEAP8[i49 + 2248 + 40 + 6 >> 0] = HEAP8[i49 + 2236 + 6 >> 0] | 0;
 HEAP8[i49 + 2248 + 47 >> 0] = i7;
 HEAP32[i49 + 2236 >> 2] = 0;
 HEAP16[i49 + 2236 + 4 >> 1] = 0;
 HEAP8[i49 + 2236 + 6 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 2296 | 0, i49 + 2248 | 0, 2);
 HEAP32[i49 + 2204 >> 2] = 0;
 HEAP32[i49 + 2204 + 4 >> 2] = 0;
 HEAP32[i49 + 2204 + 8 >> 2] = 0;
 HEAP32[i49 + 2204 + 12 >> 2] = 0;
 HEAPF32[i49 + 2204 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i49 + 2184 >> 2] = 0;
 HEAP32[i49 + 2184 + 4 >> 2] = 0;
 HEAP32[i49 + 2184 + 8 >> 2] = 0;
 HEAP32[i49 + 2184 + 12 >> 2] = 0;
 HEAPF32[i49 + 2184 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 2316 | 0, i49 + 2296 | 0, i49 + 2204 | 0, i49 + 2184 | 0);
 HEAP32[i49 + 2160 >> 2] = 0;
 HEAP32[i49 + 2160 + 4 >> 2] = 0;
 HEAP32[i49 + 2160 + 8 >> 2] = 0;
 HEAP8[i49 + 2160 + 11 >> 0] = 5;
 HEAP8[i49 + 2160 >> 0] = HEAP8[7294] | 0;
 HEAP8[i49 + 2160 + 1 >> 0] = HEAP8[7295] | 0;
 HEAP8[i49 + 2160 + 2 >> 0] = HEAP8[7296] | 0;
 HEAP8[i49 + 2160 + 3 >> 0] = HEAP8[7297] | 0;
 HEAP8[i49 + 2160 + 4 >> 0] = HEAP8[7298] | 0;
 HEAP8[i49 + 2160 + 5 >> 0] = 0;
 HEAP32[i49 + 2032 >> 2] = 0;
 HEAP32[i49 + 2032 + 4 >> 2] = 0;
 HEAP32[i49 + 2032 + 8 >> 2] = 0;
 HEAP8[i49 + 2032 + 11 >> 0] = 5;
 HEAP8[i49 + 2032 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 2032 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 2032 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 2032 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 2032 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 2032 + 5 >> 0] = 0;
 HEAP8[i49 + 2032 + 12 + 11 >> 0] = 10;
 i7 = i49 + 2032 + 12 | 0;
 i3 = 7378;
 i8 = i7 + 10 | 0;
 do {
  HEAP8[i7 >> 0] = HEAP8[i3 >> 0] | 0;
  i7 = i7 + 1 | 0;
  i3 = i3 + 1 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP8[i49 + 2032 + 12 + 10 >> 0] = 0;
 i34 = i49 + 2032 + 24 | 0;
 HEAP32[i34 >> 2] = 0;
 HEAP32[i34 + 4 >> 2] = 0;
 HEAP32[i34 + 8 >> 2] = 0;
 HEAP8[i34 + 11 >> 0] = 4;
 HEAP32[i34 >> 2] = 1701869940;
 HEAP8[i49 + 2032 + 28 >> 0] = 0;
 i35 = i49 + 2032 + 36 | 0;
 HEAP32[i35 >> 2] = 0;
 HEAP32[i35 + 4 >> 2] = 0;
 HEAP32[i35 + 8 >> 2] = 0;
 HEAP8[i35 + 11 >> 0] = 8;
 HEAP32[i35 >> 2] = 1667590243;
 HEAP32[i35 + 4 >> 2] = 2020565611;
 HEAP8[i49 + 2032 + 44 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 2080 | 0, i49 + 2032 | 0, 2);
 HEAP32[i49 + 360 >> 2] = (i16 | 0) == 0 & 1;
 i2 = __emval_take_value(2120, i49 + 360 | 0) | 0;
 HEAP32[i49 + 1992 + 8 >> 2] = 0;
 HEAP8[i49 + 1992 + 11 >> 0] = 7;
 HEAP8[i49 + 1992 >> 0] = HEAP8[7389] | 0;
 HEAP8[i49 + 1992 + 1 >> 0] = HEAP8[7390] | 0;
 HEAP8[i49 + 1992 + 2 >> 0] = HEAP8[7391] | 0;
 HEAP8[i49 + 1992 + 3 >> 0] = HEAP8[7392] | 0;
 HEAP8[i49 + 1992 + 4 >> 0] = HEAP8[7393] | 0;
 HEAP8[i49 + 1992 + 5 >> 0] = HEAP8[7394] | 0;
 HEAP8[i49 + 1992 + 6 >> 0] = HEAP8[7395] | 0;
 HEAP8[i49 + 1992 + 7 >> 0] = 0;
 HEAP32[i49 + 1992 + 12 >> 2] = i2;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S8_EEEEEC2ESt16initializer_listISF_E(i49 + 2008 | 0, i49 + 1992 | 0, 1);
 i2 = HEAP32[i31 + 16 >> 2] | 0;
 do if (!i2) {
  HEAP32[i49 + 64 + 16 >> 2] = 0;
  i2 = 0;
  i32 = i49 + 64 + 16 | 0;
 } else if ((i2 | 0) == (i31 | 0)) {
  HEAP32[i49 + 64 + 16 >> 2] = i49 + 64;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i49 + 64 | 0);
  i2 = HEAP32[i49 + 64 + 16 >> 2] | 0;
  i32 = i49 + 64 + 16 | 0;
  break;
 } else {
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2) | 0;
  HEAP32[i49 + 64 + 16 >> 2] = i2;
  i32 = i49 + 64 + 16 | 0;
  break;
 } while (0);
 HEAP32[i49 + 88 + 8 >> 2] = 0;
 HEAP8[i49 + 88 + 11 >> 0] = 7;
 HEAP8[i49 + 88 >> 0] = HEAP8[7273] | 0;
 HEAP8[i49 + 88 + 1 >> 0] = HEAP8[7274] | 0;
 HEAP8[i49 + 88 + 2 >> 0] = HEAP8[7275] | 0;
 HEAP8[i49 + 88 + 3 >> 0] = HEAP8[7276] | 0;
 HEAP8[i49 + 88 + 4 >> 0] = HEAP8[7277] | 0;
 HEAP8[i49 + 88 + 5 >> 0] = HEAP8[7278] | 0;
 HEAP8[i49 + 88 + 6 >> 0] = HEAP8[7279] | 0;
 HEAP8[i49 + 88 + 7 >> 0] = 0;
 do if (!i2) {
  HEAP32[i49 + 360 + 16 >> 2] = 0;
  i2 = i49 + 360 + 16 | 0;
 } else if ((i2 | 0) == (i49 + 64 | 0)) {
  HEAP32[i49 + 360 + 16 >> 2] = i49 + 360;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i49 + 360 | 0);
  i2 = i49 + 360 + 16 | 0;
  break;
 } else {
  HEAP32[i49 + 360 + 16 >> 2] = i2;
  HEAP32[i32 >> 2] = 0;
  i2 = i49 + 360 + 16 | 0;
  break;
 } while (0);
 HEAP32[i49 + 88 + 32 >> 2] = 0;
 i4 = __Znwj(32) | 0;
 HEAP32[i4 >> 2] = 2572;
 i3 = HEAP32[i2 >> 2] | 0;
 do if (!i3) {
  i2 = i4 + 24 | 0;
  i33 = 121;
 } else {
  if ((i3 | 0) != (i49 + 360 | 0)) {
   HEAP32[i4 + 24 >> 2] = i3;
   i33 = 121;
   break;
  }
  HEAP32[i4 + 24 >> 2] = i4 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i4 + 8 | 0);
  i2 = HEAP32[i2 >> 2] | 0;
  HEAP32[i49 + 88 + 32 >> 2] = i4;
  if ((i2 | 0) == (i49 + 360 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2);
   break;
  }
  if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
 } while (0);
 if ((i33 | 0) == 121) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i49 + 88 + 32 >> 2] = i4;
 }
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ESt16initializer_listISI_E(i49 + 1972 | 0, i49 + 88 | 0, 1);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 2100 | 0, i49 + 2080 | 0, i49 + 2008 | 0, i49 + 1972 | 0);
 i2 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i2, i49 + 2160 | 0, i49 + 2100 | 0);
 HEAP32[i49 + 1960 >> 2] = 0;
 HEAP32[i49 + 1960 + 4 >> 2] = 0;
 HEAP32[i49 + 1960 + 8 >> 2] = 0;
 HEAP8[i49 + 1960 + 11 >> 0] = 2;
 HEAP16[i49 + 1960 >> 1] = 27765;
 HEAP8[i49 + 1960 + 2 >> 0] = 0;
 HEAP32[i49 + 1856 >> 2] = 0;
 HEAP32[i49 + 1856 + 4 >> 2] = 0;
 HEAP32[i49 + 1856 + 8 >> 2] = 0;
 HEAP8[i49 + 1856 + 11 >> 0] = 5;
 HEAP8[i49 + 1856 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 1856 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 1856 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 1856 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 1856 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 1856 + 5 >> 0] = 0;
 i29 = i49 + 1856 + 12 | 0;
 HEAP32[i29 >> 2] = 0;
 HEAP32[i29 + 4 >> 2] = 0;
 HEAP32[i29 + 8 >> 2] = 0;
 HEAP8[i29 + 11 >> 0] = 9;
 i7 = i29;
 i3 = 7397;
 i8 = i7 + 9 | 0;
 do {
  HEAP8[i7 >> 0] = HEAP8[i3 >> 0] | 0;
  i7 = i7 + 1 | 0;
  i3 = i3 + 1 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP8[i29 + 9 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 1880 | 0, i49 + 1856 | 0, 1);
 HEAP32[i49 + 1832 >> 2] = 0;
 HEAP32[i49 + 1832 + 4 >> 2] = 0;
 HEAP32[i49 + 1832 + 8 >> 2] = 0;
 HEAP32[i49 + 1832 + 12 >> 2] = 0;
 HEAPF32[i49 + 1832 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i49 + 1812 >> 2] = 0;
 HEAP32[i49 + 1812 + 4 >> 2] = 0;
 HEAP32[i49 + 1812 + 8 >> 2] = 0;
 HEAP32[i49 + 1812 + 12 >> 2] = 0;
 HEAPF32[i49 + 1812 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 1900 | 0, i49 + 1880 | 0, i49 + 1832 | 0, i49 + 1812 | 0);
 i12 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i12, i49 + 1960 | 0, i49 + 1900 | 0, i49 + 2956 | 0);
 i28 = __Znwj(8) | 0;
 HEAP32[i49 + 2172 >> 2] = i28;
 HEAP32[i49 + 2172 + 8 >> 2] = i28 + 8;
 HEAP32[i28 >> 2] = i2;
 HEAP32[i28 + 4 >> 2] = i12;
 HEAP32[i49 + 2172 + 4 >> 2] = i28 + 8;
 i12 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i12, i49 + 2376 | 0, i49 + 2316 | 0, i49 + 2172 | 0);
 HEAP32[i49 + 1800 >> 2] = 0;
 HEAP32[i49 + 1800 + 4 >> 2] = 0;
 HEAP32[i49 + 1800 + 8 >> 2] = 0;
 HEAP8[i49 + 1800 + 11 >> 0] = 6;
 HEAP8[i49 + 1800 >> 0] = HEAP8[7407] | 0;
 HEAP8[i49 + 1800 + 1 >> 0] = HEAP8[7408] | 0;
 HEAP8[i49 + 1800 + 2 >> 0] = HEAP8[7409] | 0;
 HEAP8[i49 + 1800 + 3 >> 0] = HEAP8[7410] | 0;
 HEAP8[i49 + 1800 + 4 >> 0] = HEAP8[7411] | 0;
 HEAP8[i49 + 1800 + 5 >> 0] = HEAP8[7412] | 0;
 HEAP8[i49 + 1800 + 6 >> 0] = 0;
 HEAP32[i49 + 1672 >> 2] = 0;
 HEAP32[i49 + 1672 + 4 >> 2] = 0;
 HEAP32[i49 + 1672 + 8 >> 2] = 0;
 HEAP8[i49 + 1672 + 11 >> 0] = 5;
 HEAP8[i49 + 1672 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 1672 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 1672 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 1672 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 1672 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 1672 + 5 >> 0] = 0;
 i27 = i49 + 1672 + 12 | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i27 + 4 >> 2] = 0;
 HEAP32[i27 + 8 >> 2] = 0;
 HEAP8[i27 + 11 >> 0] = 6;
 HEAP8[i27 >> 0] = HEAP8[7407] | 0;
 HEAP8[i27 + 1 >> 0] = HEAP8[7408] | 0;
 HEAP8[i27 + 2 >> 0] = HEAP8[7409] | 0;
 HEAP8[i27 + 3 >> 0] = HEAP8[7410] | 0;
 HEAP8[i27 + 4 >> 0] = HEAP8[7411] | 0;
 HEAP8[i27 + 5 >> 0] = HEAP8[7412] | 0;
 HEAP8[i27 + 6 >> 0] = 0;
 i26 = i49 + 1672 + 24 | 0;
 i7 = (HEAP32[i30 + 20 >> 2] | 0) != (HEAP32[i30 + 16 >> 2] | 0);
 HEAP32[i49 + 1648 >> 2] = 0;
 HEAP32[i49 + 1648 + 4 >> 2] = 0;
 HEAP32[i49 + 1648 + 8 >> 2] = 0;
 i3 = i7 ? 5 : 4;
 HEAP8[i49 + 1648 + 11 >> 0] = i3;
 _memcpy(i49 + 1648 | 0, (i7 ? 7351 : 7357) | 0, i3 | 0) | 0;
 HEAP8[i49 + 1648 + i3 >> 0] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEjPKc(i49 + 1648 | 0, 7362) | 0;
 i3 = HEAP32[i49 + 1648 >> 2] | 0;
 HEAP32[i49 + 1660 >> 2] = HEAP32[i49 + 1648 + 4 >> 2];
 HEAP16[i49 + 1660 + 4 >> 1] = HEAP16[i49 + 1648 + 4 + 4 >> 1] | 0;
 HEAP8[i49 + 1660 + 6 >> 0] = HEAP8[i49 + 1648 + 4 + 6 >> 0] | 0;
 i7 = HEAP8[i49 + 1648 + 11 >> 0] | 0;
 HEAP32[i49 + 1648 >> 2] = 0;
 HEAP32[i49 + 1648 + 4 >> 2] = 0;
 HEAP32[i49 + 1648 + 8 >> 2] = 0;
 HEAP32[i26 >> 2] = 0;
 HEAP32[i26 + 4 >> 2] = 0;
 HEAP32[i26 + 8 >> 2] = 0;
 HEAP8[i26 + 11 >> 0] = 5;
 HEAP8[i26 >> 0] = HEAP8[7372] | 0;
 HEAP8[i26 + 1 >> 0] = HEAP8[7373] | 0;
 HEAP8[i26 + 2 >> 0] = HEAP8[7374] | 0;
 HEAP8[i26 + 3 >> 0] = HEAP8[7375] | 0;
 HEAP8[i26 + 4 >> 0] = HEAP8[7376] | 0;
 HEAP8[i26 + 5 >> 0] = 0;
 HEAP32[i49 + 1672 + 36 >> 2] = i3;
 HEAP32[i49 + 1672 + 40 >> 2] = HEAP32[i49 + 1660 >> 2];
 HEAP16[i49 + 1672 + 40 + 4 >> 1] = HEAP16[i49 + 1660 + 4 >> 1] | 0;
 HEAP8[i49 + 1672 + 40 + 6 >> 0] = HEAP8[i49 + 1660 + 6 >> 0] | 0;
 HEAP8[i49 + 1672 + 47 >> 0] = i7;
 HEAP32[i49 + 1660 >> 2] = 0;
 HEAP16[i49 + 1660 + 4 >> 1] = 0;
 HEAP8[i49 + 1660 + 6 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 1720 | 0, i49 + 1672 | 0, 2);
 HEAP32[i49 + 1628 >> 2] = 0;
 HEAP32[i49 + 1628 + 4 >> 2] = 0;
 HEAP32[i49 + 1628 + 8 >> 2] = 0;
 HEAP32[i49 + 1628 + 12 >> 2] = 0;
 HEAPF32[i49 + 1628 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i49 + 1608 >> 2] = 0;
 HEAP32[i49 + 1608 + 4 >> 2] = 0;
 HEAP32[i49 + 1608 + 8 >> 2] = 0;
 HEAP32[i49 + 1608 + 12 >> 2] = 0;
 HEAPF32[i49 + 1608 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 1740 | 0, i49 + 1720 | 0, i49 + 1628 | 0, i49 + 1608 | 0);
 HEAP32[i49 + 1584 >> 2] = 0;
 HEAP32[i49 + 1584 + 4 >> 2] = 0;
 HEAP32[i49 + 1584 + 8 >> 2] = 0;
 HEAP8[i49 + 1584 + 11 >> 0] = 4;
 HEAP32[i49 + 1584 >> 2] = 1851879539;
 HEAP8[i49 + 1584 + 4 >> 0] = 0;
 HEAP32[i49 + 1480 >> 2] = 0;
 HEAP32[i49 + 1480 + 4 >> 2] = 0;
 HEAP32[i49 + 1480 + 8 >> 2] = 0;
 HEAP8[i49 + 1480 + 11 >> 0] = 5;
 HEAP8[i49 + 1480 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 1480 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 1480 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 1480 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 1480 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 1480 + 5 >> 0] = 0;
 HEAP8[i49 + 1480 + 12 + 11 >> 0] = 10;
 i7 = i49 + 1480 + 12 | 0;
 i3 = 7414;
 i8 = i7 + 10 | 0;
 do {
  HEAP8[i7 >> 0] = HEAP8[i3 >> 0] | 0;
  i7 = i7 + 1 | 0;
  i3 = i3 + 1 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP8[i49 + 1480 + 12 + 10 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 1504 | 0, i49 + 1480 | 0, 1);
 HEAP32[i49 + 1456 >> 2] = 0;
 HEAP32[i49 + 1456 + 4 >> 2] = 0;
 HEAP32[i49 + 1456 + 8 >> 2] = 0;
 HEAP32[i49 + 1456 + 12 >> 2] = 0;
 HEAPF32[i49 + 1456 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i49 + 1436 >> 2] = 0;
 HEAP32[i49 + 1436 + 4 >> 2] = 0;
 HEAP32[i49 + 1436 + 8 >> 2] = 0;
 HEAP32[i49 + 1436 + 12 >> 2] = 0;
 HEAPF32[i49 + 1436 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 1524 | 0, i49 + 1504 | 0, i49 + 1456 | 0, i49 + 1436 | 0);
 HEAP32[i49 + 1412 >> 2] = 0;
 HEAP32[i49 + 1412 + 4 >> 2] = 0;
 HEAP32[i49 + 1412 + 8 >> 2] = 0;
 HEAP8[i49 + 1412 + 11 >> 0] = 6;
 HEAP8[i49 + 1412 >> 0] = HEAP8[7425] | 0;
 HEAP8[i49 + 1412 + 1 >> 0] = HEAP8[7426] | 0;
 HEAP8[i49 + 1412 + 2 >> 0] = HEAP8[7427] | 0;
 HEAP8[i49 + 1412 + 3 >> 0] = HEAP8[7428] | 0;
 HEAP8[i49 + 1412 + 4 >> 0] = HEAP8[7429] | 0;
 HEAP8[i49 + 1412 + 5 >> 0] = HEAP8[7430] | 0;
 HEAP8[i49 + 1412 + 6 >> 0] = 0;
 __ZNSt3__29to_stringEi(i49 + 1400 | 0, i16);
 i3 = __Znwj(112) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i3, i49 + 1412 | 0);
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 + 12 + 4 >> 2] = 0;
 HEAP32[i3 + 12 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i3 + 24 | 0, i49 + 1400 | 0);
 HEAP32[i3 + 36 >> 2] = 0;
 HEAP32[i3 + 36 + 4 >> 2] = 0;
 HEAP32[i3 + 36 + 8 >> 2] = 0;
 HEAP32[i3 + 36 + 12 >> 2] = 0;
 HEAPF32[i3 + 52 >> 2] = Math_fround(1.0);
 HEAP32[i3 + 56 >> 2] = 0;
 HEAP32[i3 + 56 + 4 >> 2] = 0;
 HEAP32[i3 + 56 + 8 >> 2] = 0;
 HEAP32[i3 + 56 + 12 >> 2] = 0;
 HEAPF32[i3 + 72 >> 2] = Math_fround(1.0);
 HEAP32[i3 + 76 >> 2] = 0;
 HEAP32[i3 + 76 + 4 >> 2] = 0;
 HEAP32[i3 + 76 + 8 >> 2] = 0;
 HEAP32[i3 + 76 + 12 >> 2] = 0;
 HEAPF32[i3 + 92 >> 2] = Math_fround(1.0);
 HEAP32[i3 + 100 >> 2] = 0;
 HEAP32[i3 + 104 >> 2] = 0;
 HEAP32[i3 + 108 >> 2] = 0;
 i2 = (i16 | 0) == 1;
 HEAP32[i49 + 1364 >> 2] = 0;
 HEAP32[i49 + 1364 + 4 >> 2] = 0;
 HEAP32[i49 + 1364 + 8 >> 2] = 0;
 HEAP8[i49 + 1364 + 11 >> 0] = (i2 ^ 1) & 1;
 if (!i2) _memcpy(i49 + 1364 | 0, 16969, (i2 ^ 1) & 1 | 0) | 0;
 HEAP8[i49 + 1364 + ((i2 ^ 1) & 1) >> 0] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEjPKc(i49 + 1364 | 0, 7432) | 0;
 HEAP32[i49 + 1376 >> 2] = HEAP32[i49 + 1364 >> 2];
 HEAP32[i49 + 1376 + 4 >> 2] = HEAP32[i49 + 1364 + 4 >> 2];
 HEAP32[i49 + 1376 + 8 >> 2] = HEAP32[i49 + 1364 + 8 >> 2];
 HEAP32[i49 + 1364 >> 2] = 0;
 HEAP32[i49 + 1364 + 4 >> 2] = 0;
 HEAP32[i49 + 1364 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKc(i49 + 1376 | 0) | 0;
 HEAP32[i49 + 1388 >> 2] = HEAP32[i49 + 1376 >> 2];
 HEAP32[i49 + 1388 + 4 >> 2] = HEAP32[i49 + 1376 + 4 >> 2];
 HEAP32[i49 + 1388 + 8 >> 2] = HEAP32[i49 + 1376 + 8 >> 2];
 HEAP32[i49 + 1376 >> 2] = 0;
 HEAP32[i49 + 1376 + 4 >> 2] = 0;
 HEAP32[i49 + 1376 + 8 >> 2] = 0;
 i2 = __Znwj(112) | 0;
 i7 = i2;
 i8 = i7 + 52 | 0;
 do {
  HEAP32[i7 >> 2] = 0;
  i7 = i7 + 4 | 0;
 } while ((i7 | 0) < (i8 | 0));
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
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i2 + 24 | 0, i49 + 1388 | 0) | 0;
 i25 = __Znwj(8) | 0;
 HEAP32[i49 + 1424 >> 2] = i25;
 HEAP32[i49 + 1424 + 8 >> 2] = i25 + 8;
 HEAP32[i25 >> 2] = i3;
 HEAP32[i25 + 4 >> 2] = i2;
 HEAP32[i49 + 1424 + 4 >> 2] = i25 + 8;
 i9 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i9, i49 + 1584 | 0, i49 + 1524 | 0, i49 + 1424 | 0);
 HEAP32[i49 + 1352 >> 2] = 0;
 HEAP32[i49 + 1352 + 4 >> 2] = 0;
 HEAP32[i49 + 1352 + 8 >> 2] = 0;
 HEAP8[i49 + 1352 + 11 >> 0] = 2;
 HEAP16[i49 + 1352 >> 1] = 27765;
 HEAP8[i49 + 1352 + 2 >> 0] = 0;
 HEAP32[i49 + 1248 >> 2] = 0;
 HEAP32[i49 + 1248 + 4 >> 2] = 0;
 HEAP32[i49 + 1248 + 8 >> 2] = 0;
 HEAP8[i49 + 1248 + 11 >> 0] = 5;
 HEAP8[i49 + 1248 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 1248 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 1248 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 1248 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 1248 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 1248 + 5 >> 0] = 0;
 i24 = i49 + 1248 + 12 | 0;
 HEAP32[i49 + 1248 + 20 >> 2] = 0;
 HEAP8[i24 + 11 >> 0] = 7;
 HEAP8[i24 >> 0] = HEAP8[7444] | 0;
 HEAP8[i24 + 1 >> 0] = HEAP8[7445] | 0;
 HEAP8[i24 + 2 >> 0] = HEAP8[7446] | 0;
 HEAP8[i24 + 3 >> 0] = HEAP8[7447] | 0;
 HEAP8[i24 + 4 >> 0] = HEAP8[7448] | 0;
 HEAP8[i24 + 5 >> 0] = HEAP8[7449] | 0;
 HEAP8[i24 + 6 >> 0] = HEAP8[7450] | 0;
 HEAP8[i24 + 7 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 1272 | 0, i49 + 1248 | 0, 1);
 HEAP32[i49 + 1224 >> 2] = 0;
 HEAP32[i49 + 1224 + 4 >> 2] = 0;
 HEAP32[i49 + 1224 + 8 >> 2] = 0;
 HEAP32[i49 + 1224 + 12 >> 2] = 0;
 HEAPF32[i49 + 1224 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i49 + 1204 >> 2] = 0;
 HEAP32[i49 + 1204 + 4 >> 2] = 0;
 HEAP32[i49 + 1204 + 8 >> 2] = 0;
 HEAP32[i49 + 1204 + 12 >> 2] = 0;
 HEAPF32[i49 + 1204 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 1292 | 0, i49 + 1272 | 0, i49 + 1224 | 0, i49 + 1204 | 0);
 HEAP32[i49 + 1180 >> 2] = 0;
 HEAP32[i49 + 1180 + 4 >> 2] = 0;
 HEAP32[i49 + 1180 + 8 >> 2] = 0;
 HEAP8[i49 + 1180 + 11 >> 0] = 2;
 HEAP16[i49 + 1180 >> 1] = 26988;
 HEAP8[i49 + 1180 + 2 >> 0] = 0;
 HEAP32[i49 + 1168 >> 2] = 0;
 HEAP32[i49 + 1168 + 4 >> 2] = 0;
 HEAP32[i49 + 1168 + 8 >> 2] = 0;
 HEAP8[i49 + 1168 + 11 >> 0] = 1;
 HEAP8[i49 + 1168 >> 0] = 97;
 HEAP8[i49 + 1168 + 1 >> 0] = 0;
 i22 = (HEAP32[i30 + 28 >> 2] | 0) == 2;
 HEAP32[i49 + 1040 >> 2] = 0;
 HEAP32[i49 + 1040 + 4 >> 2] = 0;
 HEAP32[i49 + 1040 + 8 >> 2] = 0;
 HEAP8[i49 + 1040 + 11 >> 0] = 5;
 HEAP8[i49 + 1040 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 1040 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 1040 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 1040 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 1040 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 1040 + 5 >> 0] = 0;
 i23 = i49 + 1040 + 12 | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i23 + 4 >> 2] = 0;
 HEAP32[i23 + 8 >> 2] = 0;
 i2 = i22 ? 8 : 0;
 HEAP8[i23 + 11 >> 0] = i2;
 if (i22) _memcpy(i23 | 0, 7452, i2 | 0) | 0;
 HEAP8[i23 + i2 >> 0] = 0;
 i21 = i49 + 1040 + 24 | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i21 + 4 >> 2] = 0;
 HEAP32[i21 + 8 >> 2] = 0;
 HEAP8[i21 + 11 >> 0] = 4;
 HEAP32[i21 >> 2] = 1717924456;
 HEAP8[i49 + 1040 + 28 >> 0] = 0;
 i22 = i49 + 1040 + 36 | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i22 + 4 >> 2] = 0;
 HEAP32[i22 + 8 >> 2] = 0;
 HEAP8[i22 + 11 >> 0] = 2;
 HEAP16[i22 >> 1] = 12067;
 HEAP8[i22 + 2 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 1088 | 0, i49 + 1040 | 0, 2);
 HEAP32[i49 + 1016 >> 2] = 0;
 HEAP32[i49 + 1016 + 4 >> 2] = 0;
 HEAP32[i49 + 1016 + 8 >> 2] = 0;
 HEAP32[i49 + 1016 + 12 >> 2] = 0;
 HEAPF32[i49 + 1016 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i49 + 996 >> 2] = 0;
 HEAP32[i49 + 996 + 4 >> 2] = 0;
 HEAP32[i49 + 996 + 8 >> 2] = 0;
 HEAP32[i49 + 996 + 12 >> 2] = 0;
 HEAPF32[i49 + 996 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 1108 | 0, i49 + 1088 | 0, i49 + 1016 | 0, i49 + 996 | 0);
 HEAP32[i49 + 984 + 4 >> 2] = 0;
 HEAP32[i49 + 984 + 4 + 4 >> 2] = 0;
 HEAP8[i49 + 984 + 11 >> 0] = 3;
 HEAP8[i49 + 984 >> 0] = HEAP8[7461] | 0;
 HEAP8[i49 + 984 + 1 >> 0] = HEAP8[7462] | 0;
 HEAP8[i49 + 984 + 2 >> 0] = HEAP8[7463] | 0;
 HEAP8[i49 + 984 + 3 >> 0] = 0;
 i2 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataES9_(i2, i49 + 1168 | 0, i49 + 1108 | 0, i49 + 984 | 0);
 i5 = __Znwj(112) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5, i49 + 1180 | 0);
 i7 = i5 + 12 | 0;
 i8 = i7 + 40 | 0;
 do {
  HEAP32[i7 >> 2] = 0;
  i7 = i7 + 4 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAPF32[i5 + 52 >> 2] = Math_fround(1.0);
 HEAP32[i5 + 56 >> 2] = 0;
 HEAP32[i5 + 56 + 4 >> 2] = 0;
 HEAP32[i5 + 56 + 8 >> 2] = 0;
 HEAP32[i5 + 56 + 12 >> 2] = 0;
 HEAPF32[i5 + 72 >> 2] = Math_fround(1.0);
 HEAP32[i5 + 76 >> 2] = 0;
 HEAP32[i5 + 76 + 4 >> 2] = 0;
 HEAP32[i5 + 76 + 8 >> 2] = 0;
 HEAP32[i5 + 76 + 12 >> 2] = 0;
 HEAPF32[i5 + 92 >> 2] = Math_fround(1.0);
 HEAP32[i5 + 100 >> 2] = 0;
 HEAP32[i5 + 104 >> 2] = 0;
 HEAP32[i5 + 108 >> 2] = 0;
 i19 = __Znwj(4) | 0;
 HEAP32[i5 + 100 >> 2] = i19;
 HEAP32[i5 + 108 >> 2] = i19 + 4;
 HEAP32[i19 >> 2] = i2;
 HEAP32[i5 + 104 >> 2] = i19 + 4;
 HEAP32[i49 + 972 >> 2] = 0;
 HEAP32[i49 + 972 + 4 >> 2] = 0;
 HEAP32[i49 + 972 + 8 >> 2] = 0;
 HEAP8[i49 + 972 + 11 >> 0] = 2;
 HEAP16[i49 + 972 >> 1] = 26988;
 HEAP8[i49 + 972 + 2 >> 0] = 0;
 HEAP32[i49 + 960 >> 2] = 0;
 HEAP32[i49 + 960 + 4 >> 2] = 0;
 HEAP32[i49 + 960 + 8 >> 2] = 0;
 HEAP8[i49 + 960 + 11 >> 0] = 1;
 HEAP8[i49 + 960 >> 0] = 97;
 HEAP8[i49 + 960 + 1 >> 0] = 0;
 i19 = (HEAP32[i30 + 28 >> 2] | 0) == 1;
 HEAP32[i49 + 832 >> 2] = 0;
 HEAP32[i49 + 832 + 4 >> 2] = 0;
 HEAP32[i49 + 832 + 8 >> 2] = 0;
 HEAP8[i49 + 832 + 11 >> 0] = 5;
 HEAP8[i49 + 832 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 832 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 832 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 832 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 832 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 832 + 5 >> 0] = 0;
 i20 = i49 + 832 + 12 | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 i2 = i19 ? 8 : 0;
 HEAP8[i20 + 11 >> 0] = i2;
 if (i19) _memcpy(i20 | 0, 7452, i2 | 0) | 0;
 HEAP8[i20 + i2 >> 0] = 0;
 i18 = i49 + 832 + 24 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i18 + 4 >> 2] = 0;
 HEAP32[i18 + 8 >> 2] = 0;
 HEAP8[i18 + 11 >> 0] = 4;
 HEAP32[i18 >> 2] = 1717924456;
 HEAP8[i49 + 832 + 28 >> 0] = 0;
 i19 = i49 + 832 + 36 | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = 0;
 HEAP32[i19 + 8 >> 2] = 0;
 HEAP8[i19 + 11 >> 0] = 8;
 HEAP32[i19 >> 2] = 1667313443;
 HEAP32[i19 + 4 >> 2] = 1702259060;
 HEAP8[i49 + 832 + 44 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 880 | 0, i49 + 832 | 0, 2);
 HEAP32[i49 + 808 >> 2] = 0;
 HEAP32[i49 + 808 + 4 >> 2] = 0;
 HEAP32[i49 + 808 + 8 >> 2] = 0;
 HEAP32[i49 + 808 + 12 >> 2] = 0;
 HEAPF32[i49 + 808 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i49 + 788 >> 2] = 0;
 HEAP32[i49 + 788 + 4 >> 2] = 0;
 HEAP32[i49 + 788 + 8 >> 2] = 0;
 HEAP32[i49 + 788 + 12 >> 2] = 0;
 HEAPF32[i49 + 788 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 900 | 0, i49 + 880 | 0, i49 + 808 | 0, i49 + 788 | 0);
 HEAP32[i49 + 776 >> 2] = 0;
 HEAP32[i49 + 776 + 4 >> 2] = 0;
 HEAP32[i49 + 776 + 8 >> 2] = 0;
 HEAP8[i49 + 776 + 11 >> 0] = 6;
 HEAP8[i49 + 776 >> 0] = HEAP8[7465] | 0;
 HEAP8[i49 + 776 + 1 >> 0] = HEAP8[7466] | 0;
 HEAP8[i49 + 776 + 2 >> 0] = HEAP8[7467] | 0;
 HEAP8[i49 + 776 + 3 >> 0] = HEAP8[7468] | 0;
 HEAP8[i49 + 776 + 4 >> 0] = HEAP8[7469] | 0;
 HEAP8[i49 + 776 + 5 >> 0] = HEAP8[7470] | 0;
 HEAP8[i49 + 776 + 6 >> 0] = 0;
 i2 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataES9_(i2, i49 + 960 | 0, i49 + 900 | 0, i49 + 776 | 0);
 i4 = __Znwj(112) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4, i49 + 972 | 0);
 i7 = i4 + 12 | 0;
 i8 = i7 + 40 | 0;
 do {
  HEAP32[i7 >> 2] = 0;
  i7 = i7 + 4 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAPF32[i4 + 52 >> 2] = Math_fround(1.0);
 HEAP32[i4 + 56 >> 2] = 0;
 HEAP32[i4 + 56 + 4 >> 2] = 0;
 HEAP32[i4 + 56 + 8 >> 2] = 0;
 HEAP32[i4 + 56 + 12 >> 2] = 0;
 HEAPF32[i4 + 72 >> 2] = Math_fround(1.0);
 HEAP32[i4 + 76 >> 2] = 0;
 HEAP32[i4 + 76 + 4 >> 2] = 0;
 HEAP32[i4 + 76 + 8 >> 2] = 0;
 HEAP32[i4 + 76 + 12 >> 2] = 0;
 HEAPF32[i4 + 92 >> 2] = Math_fround(1.0);
 HEAP32[i4 + 100 >> 2] = 0;
 HEAP32[i4 + 104 >> 2] = 0;
 HEAP32[i4 + 108 >> 2] = 0;
 i16 = __Znwj(4) | 0;
 HEAP32[i4 + 100 >> 2] = i16;
 HEAP32[i4 + 108 >> 2] = i16 + 4;
 HEAP32[i16 >> 2] = i2;
 HEAP32[i4 + 104 >> 2] = i16 + 4;
 HEAP32[i49 + 764 >> 2] = 0;
 HEAP32[i49 + 764 + 4 >> 2] = 0;
 HEAP32[i49 + 764 + 8 >> 2] = 0;
 HEAP8[i49 + 764 + 11 >> 0] = 2;
 HEAP16[i49 + 764 >> 1] = 26988;
 HEAP8[i49 + 764 + 2 >> 0] = 0;
 HEAP32[i49 + 752 >> 2] = 0;
 HEAP32[i49 + 752 + 4 >> 2] = 0;
 HEAP32[i49 + 752 + 8 >> 2] = 0;
 HEAP8[i49 + 752 + 11 >> 0] = 1;
 HEAP8[i49 + 752 >> 0] = 97;
 HEAP8[i49 + 752 + 1 >> 0] = 0;
 i16 = (HEAP32[i30 + 28 >> 2] | 0) == 0;
 HEAP32[i49 + 624 >> 2] = 0;
 HEAP32[i49 + 624 + 4 >> 2] = 0;
 HEAP32[i49 + 624 + 8 >> 2] = 0;
 HEAP8[i49 + 624 + 11 >> 0] = 5;
 HEAP8[i49 + 624 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 624 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 624 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 624 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 624 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 624 + 5 >> 0] = 0;
 i17 = i49 + 624 + 12 | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 HEAP32[i17 + 8 >> 2] = 0;
 i2 = i16 ? 8 : 0;
 HEAP8[i17 + 11 >> 0] = i2;
 if (i16) _memcpy(i17 | 0, 7452, i2 | 0) | 0;
 HEAP8[i17 + i2 >> 0] = 0;
 i15 = i49 + 624 + 24 | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i15 + 4 >> 2] = 0;
 HEAP32[i15 + 8 >> 2] = 0;
 HEAP8[i15 + 11 >> 0] = 4;
 HEAP32[i15 >> 2] = 1717924456;
 HEAP8[i49 + 624 + 28 >> 0] = 0;
 i16 = i49 + 624 + 36 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i16 + 4 >> 2] = 0;
 HEAP32[i16 + 8 >> 2] = 0;
 i2 = __Znwj(16) | 0;
 HEAP32[i16 >> 2] = i2;
 HEAP32[i49 + 624 + 44 >> 2] = -2147483632;
 HEAP32[i49 + 624 + 40 >> 2] = 11;
 i7 = i2;
 i3 = 7472;
 i8 = i7 + 11 | 0;
 do {
  HEAP8[i7 >> 0] = HEAP8[i3 >> 0] | 0;
  i7 = i7 + 1 | 0;
  i3 = i3 + 1 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP8[i2 + 11 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 672 | 0, i49 + 624 | 0, 2);
 HEAP32[i49 + 604 >> 2] = 0;
 HEAP32[i49 + 604 + 4 >> 2] = 0;
 HEAP32[i49 + 604 + 8 >> 2] = 0;
 HEAP32[i49 + 604 + 12 >> 2] = 0;
 HEAPF32[i49 + 604 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i49 + 584 >> 2] = 0;
 HEAP32[i49 + 584 + 4 >> 2] = 0;
 HEAP32[i49 + 584 + 8 >> 2] = 0;
 HEAP32[i49 + 584 + 12 >> 2] = 0;
 HEAPF32[i49 + 584 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i49 + 692 | 0, i49 + 672 | 0, i49 + 604 | 0, i49 + 584 | 0);
 HEAP32[i49 + 572 >> 2] = 0;
 HEAP32[i49 + 572 + 4 >> 2] = 0;
 HEAP32[i49 + 572 + 8 >> 2] = 0;
 HEAP8[i49 + 572 + 11 >> 0] = 9;
 i7 = i49 + 572 | 0;
 i3 = 7484;
 i8 = i7 + 9 | 0;
 do {
  HEAP8[i7 >> 0] = HEAP8[i3 >> 0] | 0;
  i7 = i7 + 1 | 0;
  i3 = i3 + 1 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP8[i49 + 572 + 9 >> 0] = 0;
 i2 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataES9_(i2, i49 + 752 | 0, i49 + 692 | 0, i49 + 572 | 0);
 i3 = __Znwj(112) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i3, i49 + 764 | 0);
 i7 = i3 + 12 | 0;
 i8 = i7 + 40 | 0;
 do {
  HEAP32[i7 >> 2] = 0;
  i7 = i7 + 4 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAPF32[i3 + 52 >> 2] = Math_fround(1.0);
 HEAP32[i3 + 56 >> 2] = 0;
 HEAP32[i3 + 56 + 4 >> 2] = 0;
 HEAP32[i3 + 56 + 8 >> 2] = 0;
 HEAP32[i3 + 56 + 12 >> 2] = 0;
 HEAPF32[i3 + 72 >> 2] = Math_fround(1.0);
 HEAP32[i3 + 76 >> 2] = 0;
 HEAP32[i3 + 76 + 4 >> 2] = 0;
 HEAP32[i3 + 76 + 8 >> 2] = 0;
 HEAP32[i3 + 76 + 12 >> 2] = 0;
 HEAPF32[i3 + 92 >> 2] = Math_fround(1.0);
 HEAP32[i3 + 100 >> 2] = 0;
 HEAP32[i3 + 104 >> 2] = 0;
 HEAP32[i3 + 108 >> 2] = 0;
 i13 = __Znwj(4) | 0;
 HEAP32[i3 + 100 >> 2] = i13;
 HEAP32[i3 + 108 >> 2] = i13 + 4;
 HEAP32[i13 >> 2] = i2;
 HEAP32[i3 + 104 >> 2] = i13 + 4;
 i13 = __Znwj(12) | 0;
 HEAP32[i49 + 1192 >> 2] = i13;
 HEAP32[i49 + 1192 + 8 >> 2] = i13 + 12;
 HEAP32[i13 >> 2] = i5;
 HEAP32[i13 + 4 >> 2] = i4;
 HEAP32[i13 + 8 >> 2] = i3;
 HEAP32[i49 + 1192 + 4 >> 2] = i13 + 12;
 i5 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i5, i49 + 1352 | 0, i49 + 1292 | 0, i49 + 1192 | 0);
 HEAP32[i49 + 560 >> 2] = 0;
 HEAP32[i49 + 560 + 4 >> 2] = 0;
 HEAP32[i49 + 560 + 8 >> 2] = 0;
 HEAP8[i49 + 560 + 11 >> 0] = 6;
 HEAP8[i49 + 560 >> 0] = HEAP8[7494] | 0;
 HEAP8[i49 + 560 + 1 >> 0] = HEAP8[7495] | 0;
 HEAP8[i49 + 560 + 2 >> 0] = HEAP8[7496] | 0;
 HEAP8[i49 + 560 + 3 >> 0] = HEAP8[7497] | 0;
 HEAP8[i49 + 560 + 4 >> 0] = HEAP8[7498] | 0;
 HEAP8[i49 + 560 + 5 >> 0] = HEAP8[7499] | 0;
 HEAP8[i49 + 560 + 6 >> 0] = 0;
 HEAP32[i49 + 432 >> 2] = 0;
 HEAP32[i49 + 432 + 4 >> 2] = 0;
 HEAP32[i49 + 432 + 8 >> 2] = 0;
 HEAP8[i49 + 432 + 11 >> 0] = 5;
 HEAP8[i49 + 432 >> 0] = HEAP8[7259] | 0;
 HEAP8[i49 + 432 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i49 + 432 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i49 + 432 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i49 + 432 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i49 + 432 + 5 >> 0] = 0;
 i11 = i49 + 432 + 12 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i11 + 4 >> 2] = 0;
 HEAP32[i11 + 8 >> 2] = 0;
 i2 = __Znwj(16) | 0;
 HEAP32[i11 >> 2] = i2;
 HEAP32[i49 + 432 + 20 >> 2] = -2147483632;
 HEAP32[i49 + 432 + 16 >> 2] = 15;
 i7 = i2;
 i3 = 7501;
 i8 = i7 + 15 | 0;
 do {
  HEAP8[i7 >> 0] = HEAP8[i3 >> 0] | 0;
  i7 = i7 + 1 | 0;
  i3 = i3 + 1 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP8[i2 + 15 >> 0] = 0;
 i10 = i49 + 432 + 24 | 0;
 i2 = (HEAP32[i30 + 20 >> 2] | 0) != (HEAP32[i30 + 16 >> 2] | 0);
 HEAP32[i49 + 412 >> 2] = 0;
 HEAP32[i49 + 412 + 4 >> 2] = 0;
 HEAP32[i49 + 412 + 8 >> 2] = 0;
 i30 = i2 ? 5 : 4;
 HEAP8[i49 + 412 + 11 >> 0] = i30;
 _memcpy(i49 + 412 | 0, (i2 ? 7351 : 7357) | 0, i30 | 0) | 0;
 HEAP8[i49 + 412 + i30 >> 0] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEjPKc(i49 + 412 | 0, 7362) | 0;
 i30 = HEAP32[i49 + 412 >> 2] | 0;
 HEAP32[i49 + 424 >> 2] = HEAP32[i49 + 412 + 4 >> 2];
 HEAP16[i49 + 424 + 4 >> 1] = HEAP16[i49 + 412 + 4 + 4 >> 1] | 0;
 HEAP8[i49 + 424 + 6 >> 0] = HEAP8[i49 + 412 + 4 + 6 >> 0] | 0;
 i2 = HEAP8[i49 + 412 + 11 >> 0] | 0;
 HEAP32[i49 + 412 >> 2] = 0;
 HEAP32[i49 + 412 + 4 >> 2] = 0;
 HEAP32[i49 + 412 + 8 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 + 8 >> 2] = 0;
 HEAP8[i10 + 11 >> 0] = 5;
 HEAP8[i10 >> 0] = HEAP8[7372] | 0;
 HEAP8[i10 + 1 >> 0] = HEAP8[7373] | 0;
 HEAP8[i10 + 2 >> 0] = HEAP8[7374] | 0;
 HEAP8[i10 + 3 >> 0] = HEAP8[7375] | 0;
 HEAP8[i10 + 4 >> 0] = HEAP8[7376] | 0;
 HEAP8[i10 + 5 >> 0] = 0;
 HEAP32[i49 + 432 + 36 >> 2] = i30;
 HEAP32[i49 + 432 + 40 >> 2] = HEAP32[i49 + 424 >> 2];
 HEAP16[i49 + 432 + 40 + 4 >> 1] = HEAP16[i49 + 424 + 4 >> 1] | 0;
 HEAP8[i49 + 432 + 40 + 6 >> 0] = HEAP8[i49 + 424 + 6 >> 0] | 0;
 HEAP8[i49 + 432 + 47 >> 0] = i2;
 HEAP32[i49 + 424 >> 2] = 0;
 HEAP16[i49 + 424 + 4 >> 1] = 0;
 HEAP8[i49 + 424 + 6 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i49 + 480 | 0, i49 + 432 | 0, 2);
 i2 = HEAP32[i31 + 16 >> 2] | 0;
 do if (!i2) {
  HEAP32[i49 + 16 >> 2] = 0;
  i2 = 0;
  i6 = i49 + 16 | 0;
 } else if ((i2 | 0) == (i31 | 0)) {
  HEAP32[i49 + 16 >> 2] = i49;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i49);
  i2 = HEAP32[i49 + 16 >> 2] | 0;
  i6 = i49 + 16 | 0;
  break;
 } else {
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2) | 0;
  HEAP32[i49 + 16 >> 2] = i2;
  i6 = i49 + 16 | 0;
  break;
 } while (0);
 HEAP32[i49 + 24 + 8 >> 2] = 0;
 HEAP8[i49 + 24 + 11 >> 0] = 7;
 HEAP8[i49 + 24 >> 0] = HEAP8[7273] | 0;
 HEAP8[i49 + 24 + 1 >> 0] = HEAP8[7274] | 0;
 HEAP8[i49 + 24 + 2 >> 0] = HEAP8[7275] | 0;
 HEAP8[i49 + 24 + 3 >> 0] = HEAP8[7276] | 0;
 HEAP8[i49 + 24 + 4 >> 0] = HEAP8[7277] | 0;
 HEAP8[i49 + 24 + 5 >> 0] = HEAP8[7278] | 0;
 HEAP8[i49 + 24 + 6 >> 0] = HEAP8[7279] | 0;
 HEAP8[i49 + 24 + 7 >> 0] = 0;
 do if (!i2) {
  HEAP32[i49 + 360 + 16 >> 2] = 0;
  i2 = i49 + 360 + 16 | 0;
 } else if ((i2 | 0) == (i49 | 0)) {
  HEAP32[i49 + 360 + 16 >> 2] = i49 + 360;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i49 + 360 | 0);
  i2 = i49 + 360 + 16 | 0;
  break;
 } else {
  HEAP32[i49 + 360 + 16 >> 2] = i2;
  HEAP32[i6 >> 2] = 0;
  i2 = i49 + 360 + 16 | 0;
  break;
 } while (0);
 HEAP32[i49 + 24 + 32 >> 2] = 0;
 i4 = __Znwj(32) | 0;
 HEAP32[i4 >> 2] = 2616;
 i3 = HEAP32[i2 >> 2] | 0;
 do if (!i3) {
  i2 = i4 + 24 | 0;
  i33 = 148;
 } else {
  if ((i3 | 0) != (i49 + 360 | 0)) {
   HEAP32[i4 + 24 >> 2] = i3;
   i33 = 148;
   break;
  }
  HEAP32[i4 + 24 >> 2] = i4 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i4 + 8 | 0);
  i2 = HEAP32[i2 >> 2] | 0;
  HEAP32[i49 + 24 + 32 >> 2] = i4;
  if ((i2 | 0) == (i49 + 360 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2);
   break;
  }
  if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
 } while (0);
 if ((i33 | 0) == 148) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i49 + 24 + 32 >> 2] = i4;
 }
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ESt16initializer_listISI_E(i49 + 392 | 0, i49 + 24 | 0, 1);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_NS1_8functionIFbN10emscripten3valEEEESA_SC_NS6_INSD_ISE_SO_EEEEEE(i49 + 500 | 0, i49 + 480 | 0, i49 + 392 | 0);
 i4 = __Znwj(16) | 0;
 HEAP32[i49 + 360 >> 2] = i4;
 HEAP32[i49 + 360 + 8 >> 2] = -2147483632;
 HEAP32[i49 + 360 + 4 >> 2] = 15;
 i7 = i4;
 i3 = 7517;
 i8 = i7 + 15 | 0;
 do {
  HEAP8[i7 >> 0] = HEAP8[i3 >> 0] | 0;
  i7 = i7 + 1 | 0;
  i3 = i3 + 1 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP8[i4 + 15 >> 0] = 0;
 i2 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataES9_(i2, i49 + 560 | 0, i49 + 500 | 0, i49 + 360 | 0);
 i3 = __Znwj(12) | 0;
 HEAP32[i49 + 1596 >> 2] = i3;
 HEAP32[i49 + 1596 + 8 >> 2] = i3 + 12;
 HEAP32[i3 >> 2] = i9;
 HEAP32[i3 + 4 >> 2] = i5;
 HEAP32[i3 + 8 >> 2] = i2;
 HEAP32[i49 + 1596 + 4 >> 2] = i3 + 12;
 i5 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i5, i49 + 1800 | 0, i49 + 1740 | 0, i49 + 1596 | 0);
 i2 = __Znwj(12) | 0;
 HEAP32[i49 + 2804 >> 2] = i2;
 HEAP32[i49 + 2804 + 8 >> 2] = i2 + 12;
 HEAP32[i2 >> 2] = i14;
 HEAP32[i2 + 4 >> 2] = i12;
 HEAP32[i2 + 8 >> 2] = i5;
 HEAP32[i49 + 2804 + 4 >> 2] = i2 + 12;
 i5 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i5, i49 + 2944 | 0, i49 + 2884 | 0, i49 + 2804 | 0);
 if (i2 | 0) {
  HEAP32[i49 + 2804 + 4 >> 2] = i2;
  __ZdlPv(i2);
 }
 if (i3 | 0) {
  HEAP32[i49 + 1596 + 4 >> 2] = i3;
  __ZdlPv(i3);
 }
 __ZdlPv(i4);
 __ZN6asmdom4DataD2Ev(i49 + 500 | 0);
 i2 = HEAP32[i49 + 392 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i4 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  i3 = HEAP32[i4 + 40 >> 2] | 0;
  do if ((i3 | 0) == (i4 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 127](i3); else {
   if (!i3) break;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 127](i3);
  } while (0);
  if ((HEAP8[i4 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 + 8 >> 2] | 0);
  __ZdlPv(i4);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 392 >> 2] | 0;
 HEAP32[i49 + 392 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 24 + 32 >> 2] | 0;
 do if ((i2 | 0) == (i49 + 24 + 16 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
  if (!i2) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
 } while (0);
 if ((HEAP8[i49 + 24 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 24 >> 2] | 0);
 i2 = HEAP32[i6 >> 2] | 0;
 do if ((i2 | 0) == (i49 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
  if (!i2) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
 } while (0);
 i2 = HEAP32[i49 + 480 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 480 >> 2] | 0;
 HEAP32[i49 + 480 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i49 + 432 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 432 + 36 >> 2] | 0);
 if ((HEAP8[i10 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 >> 2] | 0);
 if ((HEAP8[i11 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i11 >> 2] | 0);
 if ((HEAP8[i49 + 432 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 432 >> 2] | 0);
 if ((HEAP8[i49 + 412 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 412 >> 2] | 0);
 if (i13 | 0) {
  HEAP32[i49 + 1192 + 4 >> 2] = i13;
  __ZdlPv(i13);
 }
 __ZN6asmdom4DataD2Ev(i49 + 692 | 0);
 i2 = HEAP32[i49 + 584 >> 2] | 0;
 HEAP32[i49 + 584 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 604 >> 2] | 0;
 HEAP32[i49 + 604 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 672 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 672 >> 2] | 0;
 HEAP32[i49 + 672 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i16 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i16 >> 2] | 0);
 if ((HEAP8[i15 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i15 >> 2] | 0);
 if ((HEAP8[i17 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i17 >> 2] | 0);
 if ((HEAP8[i49 + 624 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 624 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i49 + 900 | 0);
 i2 = HEAP32[i49 + 788 >> 2] | 0;
 HEAP32[i49 + 788 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 808 >> 2] | 0;
 HEAP32[i49 + 808 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 880 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 880 >> 2] | 0;
 HEAP32[i49 + 880 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i19 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i19 >> 2] | 0);
 if ((HEAP8[i18 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i18 >> 2] | 0);
 if ((HEAP8[i20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i20 >> 2] | 0);
 if ((HEAP8[i49 + 832 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 832 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i49 + 1108 | 0);
 i2 = HEAP32[i49 + 996 >> 2] | 0;
 HEAP32[i49 + 996 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 1016 >> 2] | 0;
 HEAP32[i49 + 1016 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 1088 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 1088 >> 2] | 0;
 HEAP32[i49 + 1088 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i22 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i22 >> 2] | 0);
 if ((HEAP8[i21 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i21 >> 2] | 0);
 if ((HEAP8[i23 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i23 >> 2] | 0);
 if ((HEAP8[i49 + 1040 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1040 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i49 + 1292 | 0);
 i2 = HEAP32[i49 + 1204 >> 2] | 0;
 HEAP32[i49 + 1204 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 1224 >> 2] | 0;
 HEAP32[i49 + 1224 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 1272 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 1272 >> 2] | 0;
 HEAP32[i49 + 1272 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i24 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i24 >> 2] | 0);
 if ((HEAP8[i49 + 1248 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1248 >> 2] | 0);
 if (i25 | 0) {
  HEAP32[i49 + 1424 + 4 >> 2] = i25;
  __ZdlPv(i25);
 }
 if ((HEAP8[i49 + 1388 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1388 >> 2] | 0);
 if ((HEAP8[i49 + 1376 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1376 >> 2] | 0);
 if ((HEAP8[i49 + 1364 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1364 >> 2] | 0);
 if ((HEAP8[i49 + 1400 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1400 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i49 + 1524 | 0);
 i2 = HEAP32[i49 + 1436 >> 2] | 0;
 HEAP32[i49 + 1436 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 1456 >> 2] | 0;
 HEAP32[i49 + 1456 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 1504 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 1504 >> 2] | 0;
 HEAP32[i49 + 1504 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i49 + 1480 + 12 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1480 + 12 >> 2] | 0);
 if ((HEAP8[i49 + 1480 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1480 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i49 + 1740 | 0);
 i2 = HEAP32[i49 + 1608 >> 2] | 0;
 HEAP32[i49 + 1608 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 1628 >> 2] | 0;
 HEAP32[i49 + 1628 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 1720 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 1720 >> 2] | 0;
 HEAP32[i49 + 1720 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i49 + 1672 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1672 + 36 >> 2] | 0);
 if ((HEAP8[i26 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i26 >> 2] | 0);
 if ((HEAP8[i27 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i27 >> 2] | 0);
 if ((HEAP8[i49 + 1672 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1672 >> 2] | 0);
 if ((HEAP8[i49 + 1648 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1648 >> 2] | 0);
 if (i28 | 0) {
  HEAP32[i49 + 2172 + 4 >> 2] = i28;
  __ZdlPv(i28);
 }
 __ZN6asmdom4DataD2Ev(i49 + 1900 | 0);
 i2 = HEAP32[i49 + 1812 >> 2] | 0;
 HEAP32[i49 + 1812 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 1832 >> 2] | 0;
 HEAP32[i49 + 1832 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 1880 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 1880 >> 2] | 0;
 HEAP32[i49 + 1880 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i29 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 >> 2] | 0);
 if ((HEAP8[i49 + 1856 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1856 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i49 + 2100 | 0);
 i2 = HEAP32[i49 + 1972 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i4 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  i3 = HEAP32[i4 + 40 >> 2] | 0;
  do if ((i3 | 0) == (i4 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 127](i3); else {
   if (!i3) break;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 127](i3);
  } while (0);
  if ((HEAP8[i4 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 + 8 >> 2] | 0);
  __ZdlPv(i4);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 1972 >> 2] | 0;
 HEAP32[i49 + 1972 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 88 + 32 >> 2] | 0;
 do if ((i2 | 0) == (i49 + 88 + 16 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
  if (!i2) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
 } while (0);
 if ((HEAP8[i49 + 88 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 88 >> 2] | 0);
 i2 = HEAP32[i32 >> 2] | 0;
 do if ((i2 | 0) == (i49 + 64 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
  if (!i2) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
 } while (0);
 i2 = HEAP32[i49 + 2008 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  __emval_decref(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2008 >> 2] | 0;
 HEAP32[i49 + 2008 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 __emval_decref(HEAP32[i49 + 1992 + 12 >> 2] | 0);
 if ((HEAP8[i49 + 1992 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 1992 >> 2] | 0);
 __emval_decref(0);
 i2 = HEAP32[i49 + 2080 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2080 >> 2] | 0;
 HEAP32[i49 + 2080 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i35 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i35 >> 2] | 0);
 if ((HEAP8[i34 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i34 >> 2] | 0);
 if ((HEAP8[i49 + 2032 + 12 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2032 + 12 >> 2] | 0);
 if ((HEAP8[i49 + 2032 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2032 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i49 + 2316 | 0);
 i2 = HEAP32[i49 + 2184 >> 2] | 0;
 HEAP32[i49 + 2184 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 2204 >> 2] | 0;
 HEAP32[i49 + 2204 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 2296 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2296 >> 2] | 0;
 HEAP32[i49 + 2296 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i49 + 2248 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2248 + 36 >> 2] | 0);
 if ((HEAP8[i36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i36 >> 2] | 0);
 if ((HEAP8[i37 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i37 >> 2] | 0);
 if ((HEAP8[i49 + 2248 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2248 >> 2] | 0);
 if ((HEAP8[i49 + 2224 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2224 >> 2] | 0);
 if (i38 | 0) {
  HEAP32[i49 + 2636 + 4 >> 2] = i38;
  __ZdlPv(i38);
 }
 __ZN6asmdom4DataD2Ev(i49 + 2540 | 0);
 i2 = HEAP32[i49 + 2388 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i4 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  i3 = HEAP32[i4 + 40 >> 2] | 0;
  do if ((i3 | 0) == (i4 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 127](i3); else {
   if (!i3) break;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 127](i3);
  } while (0);
  if ((HEAP8[i4 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 + 8 >> 2] | 0);
  __ZdlPv(i4);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2388 >> 2] | 0;
 HEAP32[i49 + 2388 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 152 + 32 >> 2] | 0;
 do if ((i2 | 0) == (i49 + 152 + 16 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
  if (!i2) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
 } while (0);
 if ((HEAP8[i49 + 152 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 152 >> 2] | 0);
 i2 = HEAP32[i39 >> 2] | 0;
 do if ((i2 | 0) == (i49 + 128 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
  if (!i2) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
 } while (0);
 i2 = HEAP32[i49 + 2424 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  __emval_decref(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2424 >> 2] | 0;
 HEAP32[i49 + 2424 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 __emval_decref(HEAP32[i49 + 2408 + 12 >> 2] | 0);
 if ((HEAP8[i49 + 2408 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2408 >> 2] | 0);
 __emval_decref(0);
 i2 = HEAP32[i49 + 2520 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2520 >> 2] | 0;
 HEAP32[i49 + 2520 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i40 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i40 >> 2] | 0);
 if ((HEAP8[i42 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i42 >> 2] | 0);
 if ((HEAP8[i44 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i44 >> 2] | 0);
 if ((HEAP8[i41 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i41 >> 2] | 0);
 if ((HEAP8[i43 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i43 >> 2] | 0);
 if ((HEAP8[i49 + 2448 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2448 >> 2] | 0);
 if ((HEAP8[i49 + 2612 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2612 >> 2] | 0);
 if ((HEAP8[i49 + 2624 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2624 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i49 + 2732 | 0);
 i2 = HEAP32[i49 + 2648 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i4 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  i3 = HEAP32[i4 + 40 >> 2] | 0;
  do if ((i3 | 0) == (i4 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 127](i3); else {
   if (!i3) break;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 127](i3);
  } while (0);
  if ((HEAP8[i4 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 + 8 >> 2] | 0);
  __ZdlPv(i4);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2648 >> 2] | 0;
 HEAP32[i49 + 2648 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 2668 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  __emval_decref(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2668 >> 2] | 0;
 HEAP32[i49 + 2668 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 2712 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2712 >> 2] | 0;
 HEAP32[i49 + 2712 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i45 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i45 >> 2] | 0);
 if ((HEAP8[i49 + 2688 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2688 >> 2] | 0);
 if ((HEAP8[i49 + 2792 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2792 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i49 + 2884 | 0);
 i2 = HEAP32[i49 + 2816 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i4 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  i3 = HEAP32[i4 + 40 >> 2] | 0;
  do if ((i3 | 0) == (i4 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 127](i3); else {
   if (!i3) break;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 127](i3);
  } while (0);
  if ((HEAP8[i4 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 + 8 >> 2] | 0);
  __ZdlPv(i4);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2816 >> 2] | 0;
 HEAP32[i49 + 2816 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 i2 = HEAP32[i49 + 192 + 32 >> 2] | 0;
 do if ((i2 | 0) == (i49 + 192 + 16 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
  if (!i2) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
 } while (0);
 if ((HEAP8[i49 + 192 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 192 >> 2] | 0);
 i2 = HEAP32[i49 + 2864 + 8 >> 2] | 0;
 if (i2 | 0) do {
  i3 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
  if ((HEAP8[i3 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 20 >> 2] | 0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i49 + 2864 >> 2] | 0;
 HEAP32[i49 + 2864 >> 2] = 0;
 if (i2 | 0) __ZdlPv(i2);
 if ((HEAP8[i46 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i46 >> 2] | 0);
 if ((HEAP8[i49 + 2840 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2840 >> 2] | 0);
 if ((HEAP8[i49 + 2944 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i49 + 2944 >> 2] | 0);
 i2 = HEAP32[i49 + 2956 >> 2] | 0;
 if (i2 | 0) {
  i3 = HEAP32[i47 >> 2] | 0;
  if ((i3 | 0) != (i2 | 0)) HEAP32[i47 >> 2] = i3 + (~((i3 + -4 - i2 | 0) >>> 2) << 2);
  __ZdlPv(i2);
 }
 i3 = i48;
 if (!i48) {
  STACKTOP = i49;
  return i5 | 0;
 }
 if ((i1 | 0) != (i3 | 0)) do {
  if ((HEAP8[i1 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 + -12 >> 2] | 0);
  i2 = i1 + -28 | 0;
  i1 = i1 + -32 | 0;
  if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
 } while ((i1 | 0) != (i3 | 0));
 __ZdlPv(i48);
 STACKTOP = i49;
 return i5 | 0;
}

function __ZN7todomvc4task4viewENS0_4TaskENSt3__28functionIFvNS3_IFS1_S1_EEEEEENS3_IFviEEE(i12, i16, i7) {
 i12 = i12 | 0;
 i16 = i16 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i13 = 0, i14 = 0, i15 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 1456 | 0;
 HEAP32[i29 + 1416 >> 2] = 0;
 HEAP32[i29 + 1416 + 4 >> 2] = 0;
 HEAP32[i29 + 1416 + 8 >> 2] = 0;
 HEAP8[i29 + 1416 + 11 >> 0] = 2;
 HEAP16[i29 + 1416 >> 1] = 26988;
 HEAP8[i29 + 1416 + 2 >> 0] = 0;
 i6 = HEAP8[i12 + 17 >> 0] | 0;
 i2 = (HEAP8[i12 + 16 >> 0] | 0) != 0 & i6 << 24 >> 24 == 0 & 1;
 HEAP32[i29 + 1240 >> 2] = 0;
 HEAP32[i29 + 1240 + 4 >> 2] = 0;
 HEAP32[i29 + 1240 + 8 >> 2] = 0;
 HEAP8[i29 + 1240 + 11 >> 0] = 9;
 i3 = i29 + 1240 | 0;
 i4 = 7003;
 i5 = i3 + 9 | 0;
 do {
  HEAP8[i3 >> 0] = HEAP8[i4 >> 0] | 0;
  i3 = i3 + 1 | 0;
  i4 = i4 + 1 | 0;
 } while ((i3 | 0) < (i5 | 0));
 HEAP8[i29 + 1240 + 9 >> 0] = 0;
 HEAP8[i29 + 1240 + 12 >> 0] = i2;
 i4 = i29 + 1240 + 16 | 0;
 HEAP32[i29 + 1240 + 24 >> 2] = 0;
 HEAP8[i4 + 11 >> 0] = 7;
 HEAP8[i4 >> 0] = HEAP8[9346] | 0;
 HEAP8[i4 + 1 >> 0] = HEAP8[9347] | 0;
 HEAP8[i4 + 2 >> 0] = HEAP8[9348] | 0;
 HEAP8[i4 + 3 >> 0] = HEAP8[9349] | 0;
 HEAP8[i4 + 4 >> 0] = HEAP8[9350] | 0;
 HEAP8[i4 + 5 >> 0] = HEAP8[9351] | 0;
 HEAP8[i4 + 6 >> 0] = HEAP8[9352] | 0;
 HEAP8[i4 + 7 >> 0] = 0;
 HEAP8[i29 + 1240 + 28 >> 0] = i6;
 HEAP32[i29 + 1428 + 4 >> 2] = 0;
 i5 = i29 + 1428 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i28 = i29 + 1428 + 4 | 0;
 HEAP32[i29 + 1428 >> 2] = i28;
 i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_SH_EEiEERPNS_15__tree_end_nodeISJ_EESK_RKT_(i29 + 1428 | 0, i28, i29 + 352 | 0, i29 + 1440 | 0, i29 + 1240 | 0) | 0;
 if (!(HEAP32[i3 >> 2] | 0)) {
  i1 = __Znwj(32) | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1 + 16 | 0, i29 + 1240 | 0);
  HEAP8[i1 + 28 >> 0] = i2;
  i2 = HEAP32[i29 + 352 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = i2;
  HEAP32[i3 >> 2] = i1;
  i2 = HEAP32[HEAP32[i29 + 1428 >> 2] >> 2] | 0;
  if (i2) {
   HEAP32[i29 + 1428 >> 2] = i2;
   i1 = HEAP32[i3 >> 2] | 0;
  }
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i29 + 1428 + 4 >> 2] | 0, i1);
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_SH_EEiEERPNS_15__tree_end_nodeISJ_EESK_RKT_(i29 + 1428 | 0, i28, i29 + 352 | 0, i29 + 1440 | 0, i4) | 0;
 if (!(HEAP32[i3 >> 2] | 0)) {
  i1 = __Znwj(32) | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1 + 16 | 0, i4);
  HEAP8[i1 + 28 >> 0] = i6;
  i2 = HEAP32[i29 + 352 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = i2;
  HEAP32[i3 >> 2] = i1;
  i2 = HEAP32[HEAP32[i29 + 1428 >> 2] >> 2] | 0;
  if (i2) {
   HEAP32[i29 + 1428 >> 2] = i2;
   i1 = HEAP32[i3 >> 2] | 0;
  }
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i29 + 1428 + 4 >> 2] | 0, i1);
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i29 + 1272 >> 2] = 0;
 HEAP32[i29 + 1272 + 4 >> 2] = 0;
 HEAP32[i29 + 1272 + 8 >> 2] = 0;
 i1 = HEAP32[i29 + 1428 >> 2] | 0;
 if ((i1 | 0) != (i28 | 0)) do {
  if (HEAP8[i1 + 28 >> 0] | 0) {
   i26 = i1 + 16 | 0;
   i27 = HEAP8[i26 + 11 >> 0] | 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i29 + 1272 | 0, i27 << 24 >> 24 < 0 ? HEAP32[i26 >> 2] | 0 : i26, i27 << 24 >> 24 < 0 ? HEAP32[i1 + 20 >> 2] | 0 : i27 & 255) | 0;
  }
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if (!i2) {
   i2 = i1 + 8 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) i1 = i3; else do {
    i27 = HEAP32[i2 >> 2] | 0;
    i2 = i27 + 8 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
   } while ((HEAP32[i1 >> 2] | 0) != (i27 | 0));
  } else {
   i1 = i2;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
 } while ((i1 | 0) != (i28 | 0));
 HEAP32[i29 + 1288 >> 2] = 0;
 HEAP32[i29 + 1288 + 4 >> 2] = 0;
 HEAP32[i29 + 1288 + 8 >> 2] = 0;
 HEAP8[i29 + 1288 + 11 >> 0] = 5;
 HEAP8[i29 + 1288 >> 0] = HEAP8[7259] | 0;
 HEAP8[i29 + 1288 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i29 + 1288 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i29 + 1288 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i29 + 1288 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i29 + 1288 + 5 >> 0] = 0;
 i26 = i29 + 1288 + 12 | 0;
 HEAP32[i26 >> 2] = HEAP32[i29 + 1272 >> 2];
 HEAP32[i26 + 4 >> 2] = HEAP32[i29 + 1272 + 4 >> 2];
 HEAP32[i26 + 8 >> 2] = HEAP32[i29 + 1272 + 8 >> 2];
 HEAP32[i29 + 1272 >> 2] = 0;
 HEAP32[i29 + 1272 + 4 >> 2] = 0;
 HEAP32[i29 + 1272 + 8 >> 2] = 0;
 __ZNSt3__29to_stringEi(i29 + 1440 | 0, HEAP32[i12 >> 2] | 0);
 i25 = i29 + 1288 + 24 | 0;
 HEAP32[i29 + 1288 + 28 >> 2] = 0;
 HEAP32[i29 + 1288 + 28 + 4 >> 2] = 0;
 HEAP8[i25 + 11 >> 0] = 3;
 HEAP8[i25 >> 0] = HEAP8[9354] | 0;
 HEAP8[i25 + 1 >> 0] = HEAP8[9355] | 0;
 HEAP8[i25 + 2 >> 0] = HEAP8[9356] | 0;
 HEAP8[i25 + 3 >> 0] = 0;
 i27 = i29 + 1288 + 36 | 0;
 HEAP32[i27 >> 2] = HEAP32[i29 + 1440 >> 2];
 HEAP32[i27 + 4 >> 2] = HEAP32[i29 + 1440 + 4 >> 2];
 HEAP32[i27 + 8 >> 2] = HEAP32[i29 + 1440 + 8 >> 2];
 HEAP32[i29 + 1440 >> 2] = 0;
 HEAP32[i29 + 1440 + 4 >> 2] = 0;
 HEAP32[i29 + 1440 + 8 >> 2] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i29 + 1336 | 0, i29 + 1288 | 0, 2);
 HEAP32[i29 + 1220 >> 2] = 0;
 HEAP32[i29 + 1220 + 4 >> 2] = 0;
 HEAP32[i29 + 1220 + 8 >> 2] = 0;
 HEAP32[i29 + 1220 + 12 >> 2] = 0;
 HEAPF32[i29 + 1220 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i29 + 1200 >> 2] = 0;
 HEAP32[i29 + 1200 + 4 >> 2] = 0;
 HEAP32[i29 + 1200 + 8 >> 2] = 0;
 HEAP32[i29 + 1200 + 12 >> 2] = 0;
 HEAPF32[i29 + 1200 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i29 + 1356 | 0, i29 + 1336 | 0, i29 + 1220 | 0, i29 + 1200 | 0);
 HEAP32[i29 + 1176 + 4 >> 2] = 0;
 HEAP32[i29 + 1176 + 4 + 4 >> 2] = 0;
 HEAP8[i29 + 1176 + 11 >> 0] = 3;
 HEAP8[i29 + 1176 >> 0] = HEAP8[9358] | 0;
 HEAP8[i29 + 1176 + 1 >> 0] = HEAP8[9359] | 0;
 HEAP8[i29 + 1176 + 2 >> 0] = HEAP8[9360] | 0;
 HEAP8[i29 + 1176 + 3 >> 0] = 0;
 HEAP32[i29 + 1072 >> 2] = 0;
 HEAP32[i29 + 1072 + 4 >> 2] = 0;
 HEAP32[i29 + 1072 + 8 >> 2] = 0;
 HEAP8[i29 + 1072 + 11 >> 0] = 5;
 HEAP8[i29 + 1072 >> 0] = HEAP8[7259] | 0;
 HEAP8[i29 + 1072 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i29 + 1072 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i29 + 1072 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i29 + 1072 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i29 + 1072 + 5 >> 0] = 0;
 i24 = i29 + 1072 + 12 | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i24 + 4 >> 2] = 0;
 HEAP32[i24 + 8 >> 2] = 0;
 HEAP8[i24 + 11 >> 0] = 4;
 HEAP32[i24 >> 2] = 2003134838;
 HEAP8[i29 + 1072 + 16 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i29 + 1096 | 0, i29 + 1072 | 0, 1);
 HEAP32[i29 + 1052 >> 2] = 0;
 HEAP32[i29 + 1052 + 4 >> 2] = 0;
 HEAP32[i29 + 1052 + 8 >> 2] = 0;
 HEAP32[i29 + 1052 + 12 >> 2] = 0;
 HEAPF32[i29 + 1052 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i29 + 1032 >> 2] = 0;
 HEAP32[i29 + 1032 + 4 >> 2] = 0;
 HEAP32[i29 + 1032 + 8 >> 2] = 0;
 HEAP32[i29 + 1032 + 12 >> 2] = 0;
 HEAPF32[i29 + 1032 + 16 >> 2] = Math_fround(1.0);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i29 + 1116 | 0, i29 + 1096 | 0, i29 + 1052 | 0, i29 + 1032 | 0);
 HEAP32[i29 + 1008 >> 2] = 0;
 HEAP32[i29 + 1008 + 4 >> 2] = 0;
 HEAP32[i29 + 1008 + 8 >> 2] = 0;
 HEAP8[i29 + 1008 + 11 >> 0] = 5;
 HEAP8[i29 + 1008 >> 0] = HEAP8[7294] | 0;
 HEAP8[i29 + 1008 + 1 >> 0] = HEAP8[7295] | 0;
 HEAP8[i29 + 1008 + 2 >> 0] = HEAP8[7296] | 0;
 HEAP8[i29 + 1008 + 3 >> 0] = HEAP8[7297] | 0;
 HEAP8[i29 + 1008 + 4 >> 0] = HEAP8[7298] | 0;
 HEAP8[i29 + 1008 + 5 >> 0] = 0;
 HEAP32[i29 + 880 >> 2] = 0;
 HEAP32[i29 + 880 + 4 >> 2] = 0;
 HEAP32[i29 + 880 + 8 >> 2] = 0;
 HEAP8[i29 + 880 + 11 >> 0] = 4;
 HEAP32[i29 + 880 >> 2] = 1701869940;
 HEAP8[i29 + 880 + 4 >> 0] = 0;
 i22 = i29 + 880 + 12 | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i22 + 4 >> 2] = 0;
 HEAP32[i22 + 8 >> 2] = 0;
 HEAP8[i22 + 11 >> 0] = 8;
 HEAP32[i22 >> 2] = 1667590243;
 HEAP32[i22 + 4 >> 2] = 2020565611;
 HEAP8[i29 + 880 + 20 >> 0] = 0;
 i21 = i29 + 880 + 24 | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i21 + 4 >> 2] = 0;
 HEAP32[i21 + 8 >> 2] = 0;
 HEAP8[i21 + 11 >> 0] = 5;
 HEAP8[i21 >> 0] = HEAP8[7259] | 0;
 HEAP8[i21 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i21 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i21 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i21 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i21 + 5 >> 0] = 0;
 i23 = i29 + 880 + 36 | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i23 + 4 >> 2] = 0;
 HEAP32[i23 + 8 >> 2] = 0;
 HEAP8[i23 + 11 >> 0] = 6;
 HEAP8[i23 >> 0] = HEAP8[9362] | 0;
 HEAP8[i23 + 1 >> 0] = HEAP8[9363] | 0;
 HEAP8[i23 + 2 >> 0] = HEAP8[9364] | 0;
 HEAP8[i23 + 3 >> 0] = HEAP8[9365] | 0;
 HEAP8[i23 + 4 >> 0] = HEAP8[9366] | 0;
 HEAP8[i23 + 5 >> 0] = HEAP8[9367] | 0;
 HEAP8[i23 + 6 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i29 + 928 | 0, i29 + 880 | 0, 2);
 HEAP32[i29 + 352 >> 2] = HEAPU8[i12 + 16 >> 0];
 i1 = __emval_take_value(2120, i29 + 352 | 0) | 0;
 HEAP32[i29 + 840 + 8 >> 2] = 0;
 HEAP8[i29 + 840 + 11 >> 0] = 7;
 HEAP8[i29 + 840 >> 0] = HEAP8[7389] | 0;
 HEAP8[i29 + 840 + 1 >> 0] = HEAP8[7390] | 0;
 HEAP8[i29 + 840 + 2 >> 0] = HEAP8[7391] | 0;
 HEAP8[i29 + 840 + 3 >> 0] = HEAP8[7392] | 0;
 HEAP8[i29 + 840 + 4 >> 0] = HEAP8[7393] | 0;
 HEAP8[i29 + 840 + 5 >> 0] = HEAP8[7394] | 0;
 HEAP8[i29 + 840 + 6 >> 0] = HEAP8[7395] | 0;
 HEAP8[i29 + 840 + 7 >> 0] = 0;
 HEAP32[i29 + 840 + 12 >> 2] = i1;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S8_EEEEEC2ESt16initializer_listISF_E(i29 + 856 | 0, i29 + 840 | 0, 1);
 i1 = HEAP32[i16 + 16 >> 2] | 0;
 do if (!i1) {
  HEAP32[i29 + 288 + 16 >> 2] = 0;
  i1 = 0;
  i20 = i29 + 288 + 16 | 0;
 } else if ((i1 | 0) == (i16 | 0)) {
  HEAP32[i29 + 288 + 16 >> 2] = i29 + 288;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i29 + 288 | 0);
  i1 = HEAP32[i29 + 288 + 16 >> 2] | 0;
  i20 = i29 + 288 + 16 | 0;
  break;
 } else {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i29 + 288 + 16 >> 2] = i1;
  i20 = i29 + 288 + 16 | 0;
  break;
 } while (0);
 HEAP32[i29 + 312 + 8 >> 2] = 0;
 HEAP8[i29 + 312 + 11 >> 0] = 7;
 HEAP8[i29 + 312 >> 0] = HEAP8[7273] | 0;
 HEAP8[i29 + 312 + 1 >> 0] = HEAP8[7274] | 0;
 HEAP8[i29 + 312 + 2 >> 0] = HEAP8[7275] | 0;
 HEAP8[i29 + 312 + 3 >> 0] = HEAP8[7276] | 0;
 HEAP8[i29 + 312 + 4 >> 0] = HEAP8[7277] | 0;
 HEAP8[i29 + 312 + 5 >> 0] = HEAP8[7278] | 0;
 HEAP8[i29 + 312 + 6 >> 0] = HEAP8[7279] | 0;
 HEAP8[i29 + 312 + 7 >> 0] = 0;
 do if (!i1) {
  HEAP32[i29 + 352 + 16 >> 2] = 0;
  i1 = i29 + 352 + 16 | 0;
 } else if ((i1 | 0) == (i29 + 288 | 0)) {
  HEAP32[i29 + 352 + 16 >> 2] = i29 + 352;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i29 + 352 | 0);
  i1 = i29 + 352 + 16 | 0;
  break;
 } else {
  HEAP32[i29 + 352 + 16 >> 2] = i1;
  HEAP32[i20 >> 2] = 0;
  i1 = i29 + 352 + 16 | 0;
  break;
 } while (0);
 HEAP32[i29 + 312 + 32 >> 2] = 0;
 i3 = __Znwj(32) | 0;
 HEAP32[i3 >> 2] = 2892;
 i2 = HEAP32[i1 >> 2] | 0;
 do if (!i2) {
  i1 = i3 + 24 | 0;
  i18 = 32;
 } else {
  if ((i2 | 0) != (i29 + 352 | 0)) {
   HEAP32[i3 + 24 >> 2] = i2;
   i18 = 32;
   break;
  }
  HEAP32[i3 + 24 >> 2] = i3 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i3 + 8 | 0);
  i1 = HEAP32[i1 >> 2] | 0;
  HEAP32[i29 + 312 + 32 >> 2] = i3;
  if ((i1 | 0) == (i29 + 352 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
   break;
  }
  if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 if ((i18 | 0) == 32) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i29 + 312 + 32 >> 2] = i3;
 }
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ESt16initializer_listISI_E(i29 + 816 | 0, i29 + 312 | 0, 1);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i29 + 948 | 0, i29 + 928 | 0, i29 + 856 | 0, i29 + 816 | 0);
 i10 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i10, i29 + 1008 | 0, i29 + 948 | 0);
 HEAP32[i29 + 804 >> 2] = 0;
 HEAP32[i29 + 804 + 4 >> 2] = 0;
 HEAP32[i29 + 804 + 8 >> 2] = 0;
 HEAP8[i29 + 804 + 11 >> 0] = 5;
 HEAP8[i29 + 804 >> 0] = HEAP8[16130] | 0;
 HEAP8[i29 + 804 + 1 >> 0] = HEAP8[16131] | 0;
 HEAP8[i29 + 804 + 2 >> 0] = HEAP8[16132] | 0;
 HEAP8[i29 + 804 + 3 >> 0] = HEAP8[16133] | 0;
 HEAP8[i29 + 804 + 4 >> 0] = HEAP8[16134] | 0;
 HEAP8[i29 + 804 + 5 >> 0] = 0;
 i1 = HEAP32[i16 + 16 >> 2] | 0;
 do if (!i1) {
  HEAP32[i29 + 224 + 16 >> 2] = 0;
  i1 = 0;
  i19 = i29 + 224 + 16 | 0;
 } else if ((i1 | 0) == (i16 | 0)) {
  HEAP32[i29 + 224 + 16 >> 2] = i29 + 224;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i29 + 224 | 0);
  i1 = HEAP32[i29 + 224 + 16 >> 2] | 0;
  i19 = i29 + 224 + 16 | 0;
  break;
 } else {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i29 + 224 + 16 >> 2] = i1;
  i19 = i29 + 224 + 16 | 0;
  break;
 } while (0);
 HEAP8[i29 + 248 + 11 >> 0] = 10;
 i3 = i29 + 248 | 0;
 i4 = 9369;
 i5 = i3 + 10 | 0;
 do {
  HEAP8[i3 >> 0] = HEAP8[i4 >> 0] | 0;
  i3 = i3 + 1 | 0;
  i4 = i4 + 1 | 0;
 } while ((i3 | 0) < (i5 | 0));
 HEAP8[i29 + 248 + 10 >> 0] = 0;
 do if (!i1) {
  HEAP32[i29 + 352 + 16 >> 2] = 0;
  i1 = i29 + 352 + 16 | 0;
 } else if ((i1 | 0) == (i29 + 224 | 0)) {
  HEAP32[i29 + 352 + 16 >> 2] = i29 + 352;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i29 + 352 | 0);
  i1 = i29 + 352 + 16 | 0;
  break;
 } else {
  HEAP32[i29 + 352 + 16 >> 2] = i1;
  HEAP32[i19 >> 2] = 0;
  i1 = i29 + 352 + 16 | 0;
  break;
 } while (0);
 HEAP32[i29 + 248 + 32 >> 2] = 0;
 i3 = __Znwj(32) | 0;
 HEAP32[i3 >> 2] = 2936;
 i2 = HEAP32[i1 >> 2] | 0;
 do if (!i2) {
  i1 = i3 + 24 | 0;
  i18 = 51;
 } else {
  if ((i2 | 0) != (i29 + 352 | 0)) {
   HEAP32[i3 + 24 >> 2] = i2;
   i18 = 51;
   break;
  }
  HEAP32[i3 + 24 >> 2] = i3 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i3 + 8 | 0);
  i1 = HEAP32[i1 >> 2] | 0;
  HEAP32[i29 + 248 + 32 >> 2] = i3;
  if ((i1 | 0) == (i29 + 352 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
   break;
  }
  if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 if ((i18 | 0) == 51) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i29 + 248 + 32 >> 2] = i3;
 }
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ESt16initializer_listISI_E(i29 + 724 | 0, i29 + 248 | 0, 1);
 HEAP32[i29 + 744 >> 2] = 0;
 HEAP32[i29 + 744 + 4 >> 2] = 0;
 HEAP32[i29 + 744 + 8 >> 2] = 0;
 HEAP32[i29 + 744 + 12 >> 2] = 0;
 HEAPF32[i29 + 744 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i29 + 744 + 20 >> 2] = 0;
 HEAP32[i29 + 744 + 20 + 4 >> 2] = 0;
 HEAP32[i29 + 744 + 20 + 8 >> 2] = 0;
 HEAP32[i29 + 744 + 20 + 12 >> 2] = 0;
 HEAPF32[i29 + 744 + 36 >> 2] = Math_fround(1.0);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ERKSK_(i29 + 744 + 40 | 0, i29 + 724 | 0);
 i9 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataES9_(i9, i29 + 804 | 0, i29 + 744 | 0, i12 + 4 | 0);
 HEAP32[i29 + 712 >> 2] = 0;
 HEAP32[i29 + 712 + 4 >> 2] = 0;
 HEAP32[i29 + 712 + 8 >> 2] = 0;
 HEAP8[i29 + 712 + 11 >> 0] = 6;
 HEAP8[i29 + 712 >> 0] = HEAP8[7494] | 0;
 HEAP8[i29 + 712 + 1 >> 0] = HEAP8[7495] | 0;
 HEAP8[i29 + 712 + 2 >> 0] = HEAP8[7496] | 0;
 HEAP8[i29 + 712 + 3 >> 0] = HEAP8[7497] | 0;
 HEAP8[i29 + 712 + 4 >> 0] = HEAP8[7498] | 0;
 HEAP8[i29 + 712 + 5 >> 0] = HEAP8[7499] | 0;
 HEAP8[i29 + 712 + 6 >> 0] = 0;
 HEAP32[i29 + 608 >> 2] = 0;
 HEAP32[i29 + 608 + 4 >> 2] = 0;
 HEAP32[i29 + 608 + 8 >> 2] = 0;
 HEAP8[i29 + 608 + 11 >> 0] = 5;
 HEAP8[i29 + 608 >> 0] = HEAP8[7259] | 0;
 HEAP8[i29 + 608 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i29 + 608 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i29 + 608 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i29 + 608 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i29 + 608 + 5 >> 0] = 0;
 i17 = i29 + 608 + 12 | 0;
 HEAP32[i29 + 608 + 20 >> 2] = 0;
 HEAP8[i17 + 11 >> 0] = 7;
 HEAP8[i17 >> 0] = HEAP8[9380] | 0;
 HEAP8[i17 + 1 >> 0] = HEAP8[9381] | 0;
 HEAP8[i17 + 2 >> 0] = HEAP8[9382] | 0;
 HEAP8[i17 + 3 >> 0] = HEAP8[9383] | 0;
 HEAP8[i17 + 4 >> 0] = HEAP8[9384] | 0;
 HEAP8[i17 + 5 >> 0] = HEAP8[9385] | 0;
 HEAP8[i17 + 6 >> 0] = HEAP8[9386] | 0;
 HEAP8[i17 + 7 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i29 + 632 | 0, i29 + 608 | 0, 1);
 i1 = HEAP32[i7 + 16 >> 2] | 0;
 do if (!i1) {
  HEAP32[i29 + 128 + 16 >> 2] = 0;
  i13 = i29 + 128 + 16 | 0;
 } else if ((i1 | 0) == (i7 | 0)) {
  HEAP32[i29 + 128 + 16 >> 2] = i29 + 128;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i29 + 128 | 0);
  i13 = i29 + 128 + 16 | 0;
  break;
 } else {
  i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i29 + 128 + 16 >> 2] = i13;
  i13 = i29 + 128 + 16 | 0;
  break;
 } while (0);
 HEAP32[i29 + 128 + 24 >> 2] = HEAP32[i12 >> 2];
 i15 = i29 + 128 + 28 | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i15, i12 + 4 | 0);
 HEAP16[i29 + 128 + 40 >> 1] = HEAP16[i12 + 16 >> 1] | 0;
 i14 = i29 + 128 + 44 | 0;
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i14, i12 + 20 | 0);
 HEAP32[i29 + 184 + 8 >> 2] = 0;
 HEAP8[i29 + 184 + 11 >> 0] = 7;
 HEAP8[i29 + 184 >> 0] = HEAP8[7273] | 0;
 HEAP8[i29 + 184 + 1 >> 0] = HEAP8[7274] | 0;
 HEAP8[i29 + 184 + 2 >> 0] = HEAP8[7275] | 0;
 HEAP8[i29 + 184 + 3 >> 0] = HEAP8[7276] | 0;
 HEAP8[i29 + 184 + 4 >> 0] = HEAP8[7277] | 0;
 HEAP8[i29 + 184 + 5 >> 0] = HEAP8[7278] | 0;
 HEAP8[i29 + 184 + 6 >> 0] = HEAP8[7279] | 0;
 HEAP8[i29 + 184 + 7 >> 0] = 0;
 i1 = HEAP32[i13 >> 2] | 0;
 do if (!i1) {
  HEAP32[i29 + 352 + 16 >> 2] = 0;
  i2 = i29 + 352 + 16 | 0;
 } else if ((i1 | 0) == (i29 + 128 | 0)) {
  HEAP32[i29 + 352 + 16 >> 2] = i29 + 352;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i29 + 352 | 0);
  i2 = i29 + 352 + 16 | 0;
  break;
 } else {
  HEAP32[i29 + 352 + 16 >> 2] = i1;
  HEAP32[i13 >> 2] = 0;
  i2 = i29 + 352 + 16 | 0;
  break;
 } while (0);
 i3 = HEAP32[i29 + 128 + 24 >> 2] | 0;
 HEAP32[i29 + 352 + 24 >> 2] = i3;
 i8 = i29 + 352 + 28 | 0;
 HEAP32[i8 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i15 >> 2] = 0;
 HEAP32[i15 + 4 >> 2] = 0;
 HEAP32[i15 + 8 >> 2] = 0;
 i5 = HEAP16[i29 + 128 + 40 >> 1] | 0;
 HEAP16[i29 + 352 + 40 >> 1] = i5;
 i7 = i29 + 352 + 44 | 0;
 HEAP32[i7 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 HEAP32[i14 + 8 >> 2] = 0;
 HEAP32[i29 + 184 + 32 >> 2] = 0;
 i6 = __Znwj(64) | 0;
 HEAP32[i6 >> 2] = 2980;
 i1 = HEAP32[i2 >> 2] | 0;
 do if (!i1) {
  HEAP32[i6 + 24 >> 2] = 0;
  i4 = 0;
  i1 = i5;
  i2 = 0;
 } else if ((i1 | 0) == (i29 + 352 | 0)) {
  HEAP32[i6 + 24 >> 2] = i6 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i6 + 8 | 0);
  i2 = HEAP32[i2 >> 2] | 0;
  i4 = i2;
  i3 = HEAP32[i29 + 352 + 24 >> 2] | 0;
  i1 = HEAP16[i29 + 352 + 40 >> 1] | 0;
  break;
 } else {
  HEAP32[i6 + 24 >> 2] = i1;
  HEAP32[i2 >> 2] = 0;
  i4 = 0;
  i1 = i5;
  i2 = 0;
  break;
 } while (0);
 HEAP32[i6 + 32 >> 2] = i3;
 HEAP32[i6 + 36 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i6 + 36 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i6 + 36 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = 0;
 HEAP16[i6 + 48 >> 1] = i1;
 HEAP32[i6 + 52 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 52 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 52 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = 0;
 HEAP32[i29 + 184 + 32 >> 2] = i6;
 if ((i2 | 0) == (i29 + 352 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 127](i4); else if (i4 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 127](i4);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ESt16initializer_listISI_E(i29 + 588 | 0, i29 + 184 | 0, 1);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_NS1_8functionIFbN10emscripten3valEEEESA_SC_NS6_INSD_ISE_SO_EEEEEE(i29 + 652 | 0, i29 + 632 | 0, i29 + 588 | 0);
 i8 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i8, i29 + 712 | 0, i29 + 652 | 0);
 i11 = __Znwj(12) | 0;
 HEAP32[i29 + 1020 >> 2] = i11;
 HEAP32[i29 + 1020 + 8 >> 2] = i11 + 12;
 HEAP32[i11 >> 2] = i10;
 HEAP32[i11 + 4 >> 2] = i9;
 HEAP32[i11 + 8 >> 2] = i8;
 HEAP32[i29 + 1020 + 4 >> 2] = i11 + 12;
 i8 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i8, i29 + 1176 | 0, i29 + 1116 | 0, i29 + 1020 | 0);
 HEAP32[i29 + 576 >> 2] = 0;
 HEAP32[i29 + 576 + 4 >> 2] = 0;
 HEAP32[i29 + 576 + 8 >> 2] = 0;
 HEAP8[i29 + 576 + 11 >> 0] = 5;
 HEAP8[i29 + 576 >> 0] = HEAP8[7294] | 0;
 HEAP8[i29 + 576 + 1 >> 0] = HEAP8[7295] | 0;
 HEAP8[i29 + 576 + 2 >> 0] = HEAP8[7296] | 0;
 HEAP8[i29 + 576 + 3 >> 0] = HEAP8[7297] | 0;
 HEAP8[i29 + 576 + 4 >> 0] = HEAP8[7298] | 0;
 HEAP8[i29 + 576 + 5 >> 0] = 0;
 HEAP32[i29 + 472 >> 2] = 0;
 HEAP32[i29 + 472 + 4 >> 2] = 0;
 HEAP32[i29 + 472 + 8 >> 2] = 0;
 HEAP8[i29 + 472 + 11 >> 0] = 5;
 HEAP8[i29 + 472 >> 0] = HEAP8[7259] | 0;
 HEAP8[i29 + 472 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i29 + 472 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i29 + 472 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i29 + 472 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i29 + 472 + 5 >> 0] = 0;
 i10 = i29 + 472 + 12 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 + 8 >> 2] = 0;
 HEAP8[i10 + 11 >> 0] = 4;
 HEAP32[i10 >> 2] = 1953064037;
 HEAP8[i29 + 472 + 16 >> 0] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i29 + 496 | 0, i29 + 472 | 0, 1);
 i7 = HEAP8[i12 + 28 + 3 >> 0] | 0;
 i9 = i7 << 24 >> 24 < 0 ? HEAP32[i12 + 24 >> 2] | 0 : i7 & 255;
 i1 = _malloc((i9 << 2) + 4 | 0) | 0;
 HEAP32[i1 >> 2] = i9;
 _wmemcpy(i1 + 4 | 0, i7 << 24 >> 24 < 0 ? HEAP32[i12 + 20 >> 2] | 0 : i12 + 20 | 0, i9) | 0;
 HEAP32[i29 + 352 >> 2] = i1;
 i1 = __emval_take_value(1272, i29 + 352 | 0) | 0;
 HEAP32[i29 + 432 >> 2] = 0;
 HEAP32[i29 + 432 + 4 >> 2] = 0;
 HEAP32[i29 + 432 + 8 >> 2] = 0;
 HEAP8[i29 + 432 + 11 >> 0] = 5;
 HEAP8[i29 + 432 >> 0] = HEAP8[7335] | 0;
 HEAP8[i29 + 432 + 1 >> 0] = HEAP8[7336] | 0;
 HEAP8[i29 + 432 + 2 >> 0] = HEAP8[7337] | 0;
 HEAP8[i29 + 432 + 3 >> 0] = HEAP8[7338] | 0;
 HEAP8[i29 + 432 + 4 >> 0] = HEAP8[7339] | 0;
 HEAP8[i29 + 432 + 5 >> 0] = 0;
 HEAP32[i29 + 432 + 12 >> 2] = i1;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S8_EEEEEC2ESt16initializer_listISF_E(i29 + 448 | 0, i29 + 432 | 0, 1);
 i1 = HEAP32[i16 + 16 >> 2] | 0;
 do if (!i1) {
  HEAP32[i29 + 24 + 16 >> 2] = 0;
  i1 = 0;
  i9 = i29 + 24 + 16 | 0;
 } else if ((i1 | 0) == (i16 | 0)) {
  HEAP32[i29 + 24 + 16 >> 2] = i29 + 24;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i29 + 24 | 0);
  i1 = HEAP32[i29 + 24 + 16 >> 2] | 0;
  i9 = i29 + 24 + 16 | 0;
  break;
 } else {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i29 + 24 + 16 >> 2] = i1;
  i9 = i29 + 24 + 16 | 0;
  break;
 } while (0);
 HEAP32[i29 + 48 >> 2] = 0;
 HEAP32[i29 + 48 + 4 >> 2] = 0;
 HEAP32[i29 + 48 + 8 >> 2] = 0;
 HEAP8[i29 + 48 + 11 >> 0] = 6;
 HEAP8[i29 + 48 >> 0] = HEAP8[9388] | 0;
 HEAP8[i29 + 48 + 1 >> 0] = HEAP8[9389] | 0;
 HEAP8[i29 + 48 + 2 >> 0] = HEAP8[9390] | 0;
 HEAP8[i29 + 48 + 3 >> 0] = HEAP8[9391] | 0;
 HEAP8[i29 + 48 + 4 >> 0] = HEAP8[9392] | 0;
 HEAP8[i29 + 48 + 5 >> 0] = HEAP8[9393] | 0;
 HEAP8[i29 + 48 + 6 >> 0] = 0;
 do if (!i1) {
  HEAP32[i29 + 352 + 16 >> 2] = 0;
  i1 = i29 + 352 + 16 | 0;
 } else if ((i1 | 0) == (i29 + 24 | 0)) {
  HEAP32[i29 + 352 + 16 >> 2] = i29 + 352;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i29 + 352 | 0);
  i1 = i29 + 352 + 16 | 0;
  break;
 } else {
  HEAP32[i29 + 352 + 16 >> 2] = i1;
  HEAP32[i9 >> 2] = 0;
  i1 = i29 + 352 + 16 | 0;
  break;
 } while (0);
 HEAP32[i29 + 48 + 32 >> 2] = 0;
 i3 = __Znwj(32) | 0;
 HEAP32[i3 >> 2] = 3024;
 i2 = HEAP32[i1 >> 2] | 0;
 do if (!i2) {
  i1 = i3 + 24 | 0;
  i18 = 89;
 } else {
  if ((i2 | 0) != (i29 + 352 | 0)) {
   HEAP32[i3 + 24 >> 2] = i2;
   i18 = 89;
   break;
  }
  HEAP32[i3 + 24 >> 2] = i3 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i3 + 8 | 0);
  i1 = HEAP32[i1 >> 2] | 0;
  HEAP32[i29 + 48 + 32 >> 2] = i3;
  if ((i1 | 0) == (i29 + 352 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
   break;
  }
  if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 if ((i18 | 0) == 89) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i29 + 48 + 32 >> 2] = i3;
 }
 i1 = HEAP32[i16 + 16 >> 2] | 0;
 do if (!i1) {
  HEAP32[i29 + 16 >> 2] = 0;
  i1 = 0;
  i7 = i29 + 16 | 0;
 } else if ((i1 | 0) == (i16 | 0)) {
  HEAP32[i29 + 16 >> 2] = i29;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i29);
  i1 = HEAP32[i29 + 16 >> 2] | 0;
  i7 = i29 + 16 | 0;
  break;
 } else {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i29 + 16 >> 2] = i1;
  i7 = i29 + 16 | 0;
  break;
 } while (0);
 i6 = i29 + 48 + 40 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 HEAP8[i6 + 11 >> 0] = 9;
 i3 = i6;
 i4 = 7341;
 i5 = i3 + 9 | 0;
 do {
  HEAP8[i3 >> 0] = HEAP8[i4 >> 0] | 0;
  i3 = i3 + 1 | 0;
  i4 = i4 + 1 | 0;
 } while ((i3 | 0) < (i5 | 0));
 HEAP8[i6 + 9 >> 0] = 0;
 do if (!i1) {
  HEAP32[i29 + 352 + 16 >> 2] = 0;
  i1 = i29 + 352 + 16 | 0;
 } else if ((i1 | 0) == (i29 | 0)) {
  HEAP32[i29 + 352 + 16 >> 2] = i29 + 352;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i29 + 352 | 0);
  i1 = i29 + 352 + 16 | 0;
  break;
 } else {
  HEAP32[i29 + 352 + 16 >> 2] = i1;
  HEAP32[i7 >> 2] = 0;
  i1 = i29 + 352 + 16 | 0;
  break;
 } while (0);
 HEAP32[i29 + 48 + 72 >> 2] = 0;
 i3 = __Znwj(32) | 0;
 HEAP32[i3 >> 2] = 3068;
 i2 = HEAP32[i1 >> 2] | 0;
 do if (!i2) {
  i1 = i3 + 24 | 0;
  i18 = 108;
 } else {
  if ((i2 | 0) != (i29 + 352 | 0)) {
   HEAP32[i3 + 24 >> 2] = i2;
   i18 = 108;
   break;
  }
  HEAP32[i3 + 24 >> 2] = i3 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i3 + 8 | 0);
  i1 = HEAP32[i1 >> 2] | 0;
  HEAP32[i29 + 48 + 72 >> 2] = i3;
  if ((i1 | 0) == (i29 + 352 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
   break;
  }
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 if ((i18 | 0) == 108) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i29 + 48 + 72 >> 2] = i3;
 }
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ESt16initializer_listISI_E(i29 + 408 | 0, i29 + 48 | 0, 2);
 __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_N10emscripten3valESA_SC_NS6_INSD_ISE_SL_EEEEEERKNS2_IS8_NS1_8functionIFbSL_EEESA_SC_NS6_INSD_ISE_ST_EEEEEE(i29 + 516 | 0, i29 + 496 | 0, i29 + 448 | 0, i29 + 408 | 0);
 i4 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i4, i29 + 576 | 0, i29 + 516 | 0);
 i1 = __Znwj(8) | 0;
 HEAP32[i29 + 1188 >> 2] = i1;
 HEAP32[i29 + 1188 + 8 >> 2] = i1 + 8;
 HEAP32[i1 >> 2] = i8;
 HEAP32[i1 + 4 >> 2] = i4;
 HEAP32[i29 + 1188 + 4 >> 2] = i1 + 8;
 i4 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataERKNS1_6vectorIPS0_NS5_ISE_EEEE(i4, i29 + 1416 | 0, i29 + 1356 | 0, i29 + 1188 | 0);
 if (i1 | 0) {
  HEAP32[i29 + 1188 + 4 >> 2] = i1;
  __ZdlPv(i1);
 }
 __ZN6asmdom4DataD2Ev(i29 + 516 | 0);
 i1 = HEAP32[i29 + 408 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i3 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  i2 = HEAP32[i3 + 40 >> 2] | 0;
  do if ((i2 | 0) == (i3 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
   if (!i2) break;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
  } while (0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 408 >> 2] | 0;
 HEAP32[i29 + 408 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i29 + 48 + 72 >> 2] | 0;
 do if ((i1 | 0) == (i29 + 48 + 56 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else {
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
 i1 = HEAP32[i29 + 48 + 32 >> 2] | 0;
 do if ((i1 | 0) == (i29 + 48 + 16 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else {
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 if ((HEAP8[i29 + 48 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 48 >> 2] | 0);
 i1 = HEAP32[i7 >> 2] | 0;
 do if ((i1 | 0) == (i29 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else {
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 do if ((i1 | 0) == (i29 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else {
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 i1 = HEAP32[i29 + 448 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  __emval_decref(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 448 >> 2] | 0;
 HEAP32[i29 + 448 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 __emval_decref(HEAP32[i29 + 432 + 12 >> 2] | 0);
 if ((HEAP8[i29 + 432 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 432 >> 2] | 0);
 __emval_decref(0);
 i1 = HEAP32[i29 + 496 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 496 >> 2] | 0;
 HEAP32[i29 + 496 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i10 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 >> 2] | 0);
 if ((HEAP8[i29 + 472 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 472 >> 2] | 0);
 if (i11 | 0) {
  HEAP32[i29 + 1020 + 4 >> 2] = i11;
  __ZdlPv(i11);
 }
 __ZN6asmdom4DataD2Ev(i29 + 652 | 0);
 i1 = HEAP32[i29 + 588 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i3 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  i2 = HEAP32[i3 + 40 >> 2] | 0;
  do if ((i2 | 0) == (i3 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
   if (!i2) break;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
  } while (0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 588 >> 2] | 0;
 HEAP32[i29 + 588 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i29 + 184 + 32 >> 2] | 0;
 do if ((i1 | 0) == (i29 + 184 + 16 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else {
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 if ((HEAP8[i29 + 184 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 184 >> 2] | 0);
 if ((HEAP8[i29 + 128 + 52 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i14 >> 2] | 0);
 if ((HEAP8[i15 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i15 >> 2] | 0);
 i1 = HEAP32[i13 >> 2] | 0;
 do if ((i1 | 0) == (i29 + 128 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else {
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 i1 = HEAP32[i29 + 632 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 632 >> 2] | 0;
 HEAP32[i29 + 632 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i17 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i17 >> 2] | 0);
 if ((HEAP8[i29 + 608 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 608 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i29 + 744 | 0);
 i1 = HEAP32[i29 + 724 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i3 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  i2 = HEAP32[i3 + 40 >> 2] | 0;
  do if ((i2 | 0) == (i3 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
   if (!i2) break;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
  } while (0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 724 >> 2] | 0;
 HEAP32[i29 + 724 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i29 + 248 + 32 >> 2] | 0;
 do if ((i1 | 0) == (i29 + 248 + 16 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else {
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 if ((HEAP8[i29 + 248 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 248 >> 2] | 0);
 i1 = HEAP32[i19 >> 2] | 0;
 do if ((i1 | 0) == (i29 + 224 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else {
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 __ZN6asmdom4DataD2Ev(i29 + 948 | 0);
 i1 = HEAP32[i29 + 816 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i3 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  i2 = HEAP32[i3 + 40 >> 2] | 0;
  do if ((i2 | 0) == (i3 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else {
   if (!i2) break;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
  } while (0);
  if ((HEAP8[i3 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
  __ZdlPv(i3);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 816 >> 2] | 0;
 HEAP32[i29 + 816 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i29 + 312 + 32 >> 2] | 0;
 do if ((i1 | 0) == (i29 + 312 + 16 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else {
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 if ((HEAP8[i29 + 312 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 312 >> 2] | 0);
 i1 = HEAP32[i20 >> 2] | 0;
 do if ((i1 | 0) == (i29 + 288 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else {
  if (!i1) break;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 i1 = HEAP32[i29 + 856 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  __emval_decref(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 856 >> 2] | 0;
 HEAP32[i29 + 856 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 __emval_decref(HEAP32[i29 + 840 + 12 >> 2] | 0);
 if ((HEAP8[i29 + 840 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 840 >> 2] | 0);
 __emval_decref(0);
 i1 = HEAP32[i29 + 928 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 928 >> 2] | 0;
 HEAP32[i29 + 928 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i23 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i23 >> 2] | 0);
 if ((HEAP8[i21 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i21 >> 2] | 0);
 if ((HEAP8[i22 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i22 >> 2] | 0);
 if ((HEAP8[i29 + 880 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 880 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i29 + 1116 | 0);
 i1 = HEAP32[i29 + 1032 >> 2] | 0;
 HEAP32[i29 + 1032 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i29 + 1052 >> 2] | 0;
 HEAP32[i29 + 1052 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i29 + 1096 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 1096 >> 2] | 0;
 HEAP32[i29 + 1096 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i24 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i24 >> 2] | 0);
 if ((HEAP8[i29 + 1072 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 1072 >> 2] | 0);
 __ZN6asmdom4DataD2Ev(i29 + 1356 | 0);
 i1 = HEAP32[i29 + 1200 >> 2] | 0;
 HEAP32[i29 + 1200 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i29 + 1220 >> 2] | 0;
 HEAP32[i29 + 1220 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i29 + 1336 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i29 + 1336 >> 2] | 0;
 HEAP32[i29 + 1336 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i27 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i27 >> 2] | 0);
 if ((HEAP8[i25 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i25 >> 2] | 0);
 if ((HEAP8[i26 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i26 >> 2] | 0);
 if ((HEAP8[i29 + 1288 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i29 + 1288 >> 2] | 0);
 if ((HEAP8[i29 + 1272 + 11 >> 0] | 0) >= 0) {
  i28 = HEAP32[i28 >> 2] | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i28);
  STACKTOP = i29;
  return i4 | 0;
 }
 __ZdlPv(HEAP32[i29 + 1272 >> 2] | 0);
 i28 = HEAP32[i28 >> 2] | 0;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i28);
 STACKTOP = i29;
 return i4 | 0;
}

function _malloc(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 do if (i1 >>> 0 < 245) {
  i12 = i1 >>> 0 < 11 ? 16 : i1 + 11 & -8;
  i10 = HEAP32[4322] | 0;
  if (i10 >>> (i12 >>> 3) & 3 | 0) {
   i3 = 17328 + ((i10 >>> (i12 >>> 3) & 1 ^ 1) + (i12 >>> 3) << 1 << 2) | 0;
   i1 = HEAP32[i3 + 8 >> 2] | 0;
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i3 | 0) == (i2 | 0)) HEAP32[4322] = i10 & ~(1 << (i10 >>> (i12 >>> 3) & 1 ^ 1) + (i12 >>> 3)); else {
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
  i11 = HEAP32[4324] | 0;
  if (i12 >>> 0 > i11 >>> 0) {
   if (i10 >>> (i12 >>> 3) | 0) {
    i1 = i10 >>> (i12 >>> 3) << (i12 >>> 3) & (2 << (i12 >>> 3) | 0 - (2 << (i12 >>> 3)));
    i4 = ((i1 & 0 - i1) + -1 | 0) >>> (((i1 & 0 - i1) + -1 | 0) >>> 12 & 16);
    i5 = i4 >>> (i4 >>> 5 & 8) >>> (i4 >>> (i4 >>> 5 & 8) >>> 2 & 4);
    i5 = (i4 >>> 5 & 8 | ((i1 & 0 - i1) + -1 | 0) >>> 12 & 16 | i4 >>> (i4 >>> 5 & 8) >>> 2 & 4 | i5 >>> 1 & 2 | i5 >>> (i5 >>> 1 & 2) >>> 1 & 1) + (i5 >>> (i5 >>> 1 & 2) >>> (i5 >>> (i5 >>> 1 & 2) >>> 1 & 1)) | 0;
    i4 = HEAP32[17328 + (i5 << 1 << 2) + 8 >> 2] | 0;
    i1 = HEAP32[i4 + 8 >> 2] | 0;
    if ((17328 + (i5 << 1 << 2) | 0) == (i1 | 0)) {
     HEAP32[4322] = i10 & ~(1 << i5);
     i1 = i10 & ~(1 << i5);
    } else {
     HEAP32[i1 + 12 >> 2] = 17328 + (i5 << 1 << 2);
     HEAP32[17328 + (i5 << 1 << 2) + 8 >> 2] = i1;
     i1 = i10;
    }
    HEAP32[i4 + 4 >> 2] = i12 | 3;
    HEAP32[i4 + i12 + 4 >> 2] = (i5 << 3) - i12 | 1;
    HEAP32[i4 + i12 + ((i5 << 3) - i12) >> 2] = (i5 << 3) - i12;
    if (i11 | 0) {
     i3 = HEAP32[4327] | 0;
     if (!(i1 & 1 << (i11 >>> 3))) {
      HEAP32[4322] = i1 | 1 << (i11 >>> 3);
      i1 = 17328 + (i11 >>> 3 << 1 << 2) + 8 | 0;
      i2 = 17328 + (i11 >>> 3 << 1 << 2) | 0;
     } else {
      i1 = 17328 + (i11 >>> 3 << 1 << 2) + 8 | 0;
      i2 = HEAP32[17328 + (i11 >>> 3 << 1 << 2) + 8 >> 2] | 0;
     }
     HEAP32[i1 >> 2] = i3;
     HEAP32[i2 + 12 >> 2] = i3;
     HEAP32[i3 + 8 >> 2] = i2;
     HEAP32[i3 + 12 >> 2] = 17328 + (i11 >>> 3 << 1 << 2);
    }
    HEAP32[4324] = (i5 << 3) - i12;
    HEAP32[4327] = i4 + i12;
    i13 = i4 + 8 | 0;
    STACKTOP = i14;
    return i13 | 0;
   }
   i9 = HEAP32[4323] | 0;
   if (i9) {
    i2 = ((i9 & 0 - i9) + -1 | 0) >>> (((i9 & 0 - i9) + -1 | 0) >>> 12 & 16);
    i3 = i2 >>> (i2 >>> 5 & 8) >>> (i2 >>> (i2 >>> 5 & 8) >>> 2 & 4);
    i3 = HEAP32[17592 + ((i2 >>> 5 & 8 | ((i9 & 0 - i9) + -1 | 0) >>> 12 & 16 | i2 >>> (i2 >>> 5 & 8) >>> 2 & 4 | i3 >>> 1 & 2 | i3 >>> (i3 >>> 1 & 2) >>> 1 & 1) + (i3 >>> (i3 >>> 1 & 2) >>> (i3 >>> (i3 >>> 1 & 2) >>> 1 & 1)) << 2) >> 2] | 0;
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
      if ((i7 | 0) == (HEAP32[17592 + (i1 << 2) >> 2] | 0)) {
       HEAP32[17592 + (i1 << 2) >> 2] = i3;
       if (i2) {
        HEAP32[4323] = i9 & ~(1 << i1);
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
       i3 = HEAP32[4327] | 0;
       if (!(1 << (i11 >>> 3) & i10)) {
        HEAP32[4322] = 1 << (i11 >>> 3) | i10;
        i1 = 17328 + (i11 >>> 3 << 1 << 2) + 8 | 0;
        i2 = 17328 + (i11 >>> 3 << 1 << 2) | 0;
       } else {
        i1 = 17328 + (i11 >>> 3 << 1 << 2) + 8 | 0;
        i2 = HEAP32[17328 + (i11 >>> 3 << 1 << 2) + 8 >> 2] | 0;
       }
       HEAP32[i1 >> 2] = i3;
       HEAP32[i2 + 12 >> 2] = i3;
       HEAP32[i3 + 8 >> 2] = i2;
       HEAP32[i3 + 12 >> 2] = 17328 + (i11 >>> 3 << 1 << 2);
      }
      HEAP32[4324] = i8;
      HEAP32[4327] = i6;
     }
     i13 = i7 + 8 | 0;
     STACKTOP = i14;
     return i13 | 0;
    }
   }
  }
 } else if (i1 >>> 0 > 4294967231) i12 = -1; else {
  i12 = i1 + 11 & -8;
  i4 = HEAP32[4323] | 0;
  if (i4) {
   if (!((i1 + 11 | 0) >>> 8)) i9 = 0; else if (i12 >>> 0 > 16777215) i9 = 31; else {
    i9 = (i1 + 11 | 0) >>> 8 << ((((i1 + 11 | 0) >>> 8) + 1048320 | 0) >>> 16 & 8);
    i9 = 14 - ((i9 + 520192 | 0) >>> 16 & 4 | (((i1 + 11 | 0) >>> 8) + 1048320 | 0) >>> 16 & 8 | ((i9 << ((i9 + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) + (i9 << ((i9 + 520192 | 0) >>> 16 & 4) << (((i9 << ((i9 + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
    i9 = i12 >>> (i9 + 7 | 0) & 1 | i9 << 1;
   }
   i1 = HEAP32[17592 + (i9 << 2) >> 2] | 0;
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
     i1 = HEAP32[17592 + ((i11 >>> (i11 >>> 12 & 16) >>> 5 & 8 | i11 >>> 12 & 16 | i2 >>> 2 & 4 | i2 >>> (i2 >>> 2 & 4) >>> 1 & 2 | i1 >>> 1 & 1) + (i1 >>> (i1 >>> 1 & 1)) << 2) >> 2] | 0;
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
   if (i9) if (i7 >>> 0 < ((HEAP32[4324] | 0) - i12 | 0) >>> 0) {
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
     if ((i9 | 0) == (HEAP32[17592 + (i2 << 2) >> 2] | 0)) {
      HEAP32[17592 + (i2 << 2) >> 2] = i1;
      if (i3) {
       HEAP32[4323] = i4 & ~(1 << i2);
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
      i1 = HEAP32[4322] | 0;
      if (!(i1 & 1 << i3)) {
       HEAP32[4322] = i1 | 1 << i3;
       i1 = 17328 + (i3 << 1 << 2) + 8 | 0;
       i2 = 17328 + (i3 << 1 << 2) | 0;
      } else {
       i1 = 17328 + (i3 << 1 << 2) + 8 | 0;
       i2 = HEAP32[17328 + (i3 << 1 << 2) + 8 >> 2] | 0;
      }
      HEAP32[i1 >> 2] = i8;
      HEAP32[i2 + 12 >> 2] = i8;
      HEAP32[i8 + 8 >> 2] = i2;
      HEAP32[i8 + 12 >> 2] = 17328 + (i3 << 1 << 2);
      break;
     }
     i1 = i7 >>> 8;
     if (!i1) i1 = 0; else if (i7 >>> 0 > 16777215) i1 = 31; else {
      i13 = i1 << ((i1 + 1048320 | 0) >>> 16 & 8) << (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4);
      i1 = 14 - (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4 | (i1 + 1048320 | 0) >>> 16 & 8 | (i13 + 245760 | 0) >>> 16 & 2) + (i13 << ((i13 + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
      i1 = i7 >>> (i1 + 7 | 0) & 1 | i1 << 1;
     }
     i3 = 17592 + (i1 << 2) | 0;
     HEAP32[i8 + 28 >> 2] = i1;
     HEAP32[i8 + 16 + 4 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 0;
     i2 = 1 << i1;
     if (!(i2 & i4)) {
      HEAP32[4323] = i2 | i4;
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
 i3 = HEAP32[4324] | 0;
 if (i3 >>> 0 >= i12 >>> 0) {
  i2 = i3 - i12 | 0;
  i1 = HEAP32[4327] | 0;
  if (i2 >>> 0 > 15) {
   i13 = i1 + i12 | 0;
   HEAP32[4327] = i13;
   HEAP32[4324] = i2;
   HEAP32[i13 + 4 >> 2] = i2 | 1;
   HEAP32[i13 + i2 >> 2] = i2;
   HEAP32[i1 + 4 >> 2] = i12 | 3;
  } else {
   HEAP32[4324] = 0;
   HEAP32[4327] = 0;
   HEAP32[i1 + 4 >> 2] = i3 | 3;
   HEAP32[i1 + i3 + 4 >> 2] = HEAP32[i1 + i3 + 4 >> 2] | 1;
  }
  i13 = i1 + 8 | 0;
  STACKTOP = i14;
  return i13 | 0;
 }
 i5 = HEAP32[4325] | 0;
 if (i5 >>> 0 > i12 >>> 0) {
  i10 = i5 - i12 | 0;
  HEAP32[4325] = i10;
  i13 = HEAP32[4328] | 0;
  i11 = i13 + i12 | 0;
  HEAP32[4328] = i11;
  HEAP32[i11 + 4 >> 2] = i10 | 1;
  HEAP32[i13 + 4 >> 2] = i12 | 3;
  i13 = i13 + 8 | 0;
  STACKTOP = i14;
  return i13 | 0;
 }
 if (!(HEAP32[4440] | 0)) {
  HEAP32[4442] = 4096;
  HEAP32[4441] = 4096;
  HEAP32[4443] = -1;
  HEAP32[4444] = -1;
  HEAP32[4445] = 0;
  HEAP32[4433] = 0;
  HEAP32[i14 >> 2] = i14 & -16 ^ 1431655768;
  HEAP32[4440] = i14 & -16 ^ 1431655768;
  i1 = 4096;
 } else i1 = HEAP32[4442] | 0;
 i6 = i12 + 48 | 0;
 i7 = i12 + 47 | 0;
 i9 = i1 + i7 | 0;
 i8 = 0 - i1 | 0;
 if ((i9 & i8) >>> 0 <= i12 >>> 0) {
  i13 = 0;
  STACKTOP = i14;
  return i13 | 0;
 }
 i1 = HEAP32[4432] | 0;
 if (i1 | 0) {
  i11 = HEAP32[4430] | 0;
  if ((i11 + (i9 & i8) | 0) >>> 0 <= i11 >>> 0 ? 1 : (i11 + (i9 & i8) | 0) >>> 0 > i1 >>> 0) {
   i13 = 0;
   STACKTOP = i14;
   return i13 | 0;
  }
 }
 L167 : do if (!(HEAP32[4433] & 4)) {
  i3 = HEAP32[4328] | 0;
  L169 : do if (!i3) i13 = 118; else {
   i1 = 17736;
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
    i5 = HEAP32[4441] | 0;
    i5 = ((i5 + -1 & i3 | 0) == 0 ? 0 : (i5 + -1 + i3 & 0 - i5) - i3 | 0) + (i9 & i8) | 0;
    i1 = HEAP32[4430] | 0;
    if (i5 >>> 0 > i12 >>> 0 & i5 >>> 0 < 2147483647) {
     i2 = HEAP32[4432] | 0;
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
   i1 = HEAP32[4442] | 0;
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
  HEAP32[4433] = HEAP32[4433] | 4;
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
  i1 = (HEAP32[4430] | 0) + i5 | 0;
  HEAP32[4430] = i1;
  if (i1 >>> 0 > (HEAP32[4431] | 0) >>> 0) HEAP32[4431] = i1;
  i9 = HEAP32[4328] | 0;
  do if (!i9) {
   i13 = HEAP32[4326] | 0;
   if ((i13 | 0) == 0 | i7 >>> 0 < i13 >>> 0) HEAP32[4326] = i7;
   HEAP32[4434] = i7;
   HEAP32[4435] = i5;
   HEAP32[4437] = 0;
   HEAP32[4331] = HEAP32[4440];
   HEAP32[4330] = -1;
   i1 = 0;
   do {
    i13 = 17328 + (i1 << 1 << 2) | 0;
    HEAP32[i13 + 12 >> 2] = i13;
    HEAP32[i13 + 8 >> 2] = i13;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 32);
   i13 = i7 + 8 | 0;
   i13 = (i13 & 7 | 0) == 0 ? 0 : 0 - i13 & 7;
   i11 = i7 + i13 | 0;
   i13 = i5 + -40 - i13 | 0;
   HEAP32[4328] = i11;
   HEAP32[4325] = i13;
   HEAP32[i11 + 4 >> 2] = i13 | 1;
   HEAP32[i11 + i13 + 4 >> 2] = 40;
   HEAP32[4329] = HEAP32[4444];
  } else {
   i1 = 17736;
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
    i13 = (HEAP32[4325] | 0) + (i5 - i11) | 0;
    HEAP32[4328] = i9 + i11;
    HEAP32[4325] = i13;
    HEAP32[i9 + i11 + 4 >> 2] = i13 | 1;
    HEAP32[i9 + i11 + i13 + 4 >> 2] = 40;
    HEAP32[4329] = HEAP32[4444];
    break;
   }
   if (i7 >>> 0 < (HEAP32[4326] | 0) >>> 0) HEAP32[4326] = i7;
   i2 = i7 + i5 | 0;
   i1 = 17736;
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
     i13 = (HEAP32[4325] | 0) + i8 | 0;
     HEAP32[4325] = i13;
     HEAP32[4328] = i10;
     HEAP32[i10 + 4 >> 2] = i13 | 1;
    } else {
     if ((i1 | 0) == (HEAP32[4327] | 0)) {
      i13 = (HEAP32[4324] | 0) + i8 | 0;
      HEAP32[4324] = i13;
      HEAP32[4327] = i10;
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
        HEAP32[4322] = HEAP32[4322] & ~(1 << (i7 >>> 3));
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
       do if ((i1 | 0) == (HEAP32[17592 + (i3 << 2) >> 2] | 0)) {
        HEAP32[17592 + (i3 << 2) >> 2] = i2;
        if (!i4) break;
        HEAP32[4323] = HEAP32[4323] & ~(1 << i3);
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
      i1 = HEAP32[4322] | 0;
      if (!(i1 & 1 << i3)) {
       HEAP32[4322] = i1 | 1 << i3;
       i1 = 17328 + (i3 << 1 << 2) + 8 | 0;
       i2 = 17328 + (i3 << 1 << 2) | 0;
      } else {
       i1 = 17328 + (i3 << 1 << 2) + 8 | 0;
       i2 = HEAP32[17328 + (i3 << 1 << 2) + 8 >> 2] | 0;
      }
      HEAP32[i1 >> 2] = i10;
      HEAP32[i2 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i2;
      HEAP32[i10 + 12 >> 2] = 17328 + (i3 << 1 << 2);
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
     i4 = 17592 + (i2 << 2) | 0;
     HEAP32[i10 + 28 >> 2] = i2;
     HEAP32[i10 + 16 + 4 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 0;
     i1 = HEAP32[4323] | 0;
     i3 = 1 << i2;
     if (!(i1 & i3)) {
      HEAP32[4323] = i1 | i3;
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
   i2 = 17736;
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
   HEAP32[4328] = i13;
   HEAP32[4325] = i1;
   HEAP32[i13 + 4 >> 2] = i1 | 1;
   HEAP32[i13 + i1 + 4 >> 2] = 40;
   HEAP32[4329] = HEAP32[4444];
   HEAP32[i6 + 4 >> 2] = 27;
   HEAP32[i6 + 8 >> 2] = HEAP32[4434];
   HEAP32[i6 + 8 + 4 >> 2] = HEAP32[4435];
   HEAP32[i6 + 8 + 8 >> 2] = HEAP32[4436];
   HEAP32[i6 + 8 + 12 >> 2] = HEAP32[4437];
   HEAP32[4434] = i7;
   HEAP32[4435] = i5;
   HEAP32[4437] = 0;
   HEAP32[4436] = i6 + 8;
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
     i3 = 17328 + ((i6 - i9 | 0) >>> 3 << 1 << 2) | 0;
     i1 = HEAP32[4322] | 0;
     if (!(i1 & 1 << ((i6 - i9 | 0) >>> 3))) {
      HEAP32[4322] = i1 | 1 << ((i6 - i9 | 0) >>> 3);
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
    i4 = 17592 + (i2 << 2) | 0;
    HEAP32[i9 + 28 >> 2] = i2;
    HEAP32[i9 + 20 >> 2] = 0;
    HEAP32[i9 + 16 >> 2] = 0;
    i1 = HEAP32[4323] | 0;
    i3 = 1 << i2;
    if (!(i1 & i3)) {
     HEAP32[4323] = i1 | i3;
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
  i1 = HEAP32[4325] | 0;
  if (i1 >>> 0 > i12 >>> 0) {
   i10 = i1 - i12 | 0;
   HEAP32[4325] = i10;
   i13 = HEAP32[4328] | 0;
   i11 = i13 + i12 | 0;
   HEAP32[4328] = i11;
   HEAP32[i11 + 4 >> 2] = i10 | 1;
   HEAP32[i13 + 4 >> 2] = i12 | 3;
   i13 = i13 + 8 | 0;
   STACKTOP = i14;
   return i13 | 0;
  }
 }
 HEAP32[4478] = 12;
 i13 = 0;
 STACKTOP = i14;
 return i13 | 0;
}

function __ZNSt3__212__next_primeEj(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 L1 : do if (i1 >>> 0 < 212) {
  i1 = __ZNSt3__213__lower_boundIRNS_6__lessIjjEEPKjjEET0_S6_S6_RKT1_T_(3856, 4048, i1) | 0;
  i1 = HEAP32[i1 >> 2] | 0;
 } else {
  i6 = (__ZNSt3__213__lower_boundIRNS_6__lessIjjEEPKjjEET0_S6_S6_RKT1_T_(4048, 4240, i1 - (((i1 >>> 0) / 210 | 0) * 210 | 0) | 0) | 0) - 4048 >> 2;
  i7 = (i1 >>> 0) / 210 | 0;
  i2 = ((i1 >>> 0) / 210 | 0) * 210 | 0;
  i4 = 0;
  while (1) {
   i1 = (HEAP32[4048 + (i6 << 2) >> 2] | 0) + i2 | 0;
   i3 = 5;
   while (1) {
    if (i3 >>> 0 >= 47) {
     i5 = 211;
     i3 = i4;
     i8 = 8;
     break;
    }
    i2 = HEAP32[3856 + (i3 << 2) >> 2] | 0;
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
     i18 = 114;
     break L7;
    }
   }
   STACKTOP = i27;
   return;
  } else i18 = 114; while (0);
  do if ((i18 | 0) == 114) {
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
     i19 = HEAP32[i26 + 100 >> 2] | 0;
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
     i2 = HEAP32[i26 + 100 >> 2] | 0;
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
      _emscripten_asm_const_iiii(12, i25 | 0, HEAP32[i7 + 96 >> 2] | 0, HEAP32[i13 + 96 >> 2] | 0) | 0;
     } else i18 = 70; while (0);
     if ((i18 | 0) == 70) {
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
     i17 = i15;
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
   __ZNSt11logic_errorC2EPKc(i27, 6344);
   HEAP32[i27 >> 2] = 4440;
   ___cxa_throw(i27 | 0, 2024, 95);
  } else if ((i18 | 0) == 72) {
   i27 = ___cxa_allocate_exception(8) | 0;
   __ZNSt11logic_errorC2EPKc(i27, 6344);
   HEAP32[i27 >> 2] = 4440;
   ___cxa_throw(i27 | 0, 2024, 95);
  }
 } while (0);
 L168 : do if (i6) {
  i1 = i9 + 1 | 0;
  i5 = i2 >>> 0 > i9 >>> 0;
  if (i1 >>> 0 > (((HEAP32[i26 + 104 >> 2] | 0) - i11 >> 2) + -1 | 0) >>> 0) {
   if (i5) break;
   while (1) {
    i1 = i2 + 1 | 0;
    _emscripten_asm_const_iiii(13, i25 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[i3 + (i2 << 2) >> 2] | 0) | 0, 0) | 0;
    if (i1 >>> 0 > i9 >>> 0) break L168;
    i3 = HEAP32[i26 + 100 >> 2] | 0;
    i2 = i1;
   }
  } else {
   i4 = HEAP32[(HEAP32[i10 + (i1 << 2) >> 2] | 0) + 96 >> 2] | 0;
   if (i5) break; else i3 = i8;
   while (1) {
    i1 = i2 + 1 | 0;
    _emscripten_asm_const_iiii(13, i25 | 0, __ZN6asmdom9createElmEPNS_5VNodeE(HEAP32[i3 + (i2 << 2) >> 2] | 0) | 0, i4 | 0) | 0;
    if (i1 >>> 0 > i9 >>> 0) break L168;
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
   HEAP32[4478] = 75;
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
   i3 = HEAP8[(HEAP8[i2 >> 0] | 0) + -65 + (13602 + (i7 * 58 | 0)) >> 0] | 0;
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
    i6 = 14066;
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
     i5 = 14066;
     i14 = 66;
     break L71;
    } else {
     i4 = (i10 & 2049 | 0) != 0 & 1;
     i5 = (i10 & 2048 | 0) == 0 ? ((i10 & 1 | 0) == 0 ? 14066 : 14068) : 14067;
     i14 = 66;
     break L71;
    }
   }
  case 117:
   {
    i2 = HEAP32[i20 >> 2] | 0;
    i3 = HEAP32[i20 + 4 >> 2] | 0;
    i4 = 0;
    i5 = 14066;
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
    i3 = 14066;
    i2 = i15;
    break;
   }
  case 109:
   {
    i2 = _strerror(HEAP32[4478] | 0) | 0;
    i14 = 71;
    break;
   }
  case 115:
   {
    i2 = HEAP32[i20 >> 2] | 0;
    i2 = i2 | 0 ? i2 : 16136;
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
    i3 = 14066;
    i2 = i15;
   }
  } while (0);
  L95 : do if ((i14 | 0) == 61) {
   i8 = HEAP32[i20 >> 2] | 0;
   i9 = HEAP32[i20 + 4 >> 2] | 0;
   i7 = _fmt_x(i8, i9, i15, i5 & 32) | 0;
   i6 = (i2 & 8 | 0) == 0 | (i8 | 0) == 0 & (i9 | 0) == 0;
   i4 = i6 ? 0 : 2;
   i6 = i6 ? 14066 : 14066 + (i5 >> 4) | 0;
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
   i3 = 14066;
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
  i16 = 14076;
  d4 = -d4;
 } else {
  i17 = (i22 & 2049 | 0) != 0 & 1;
  i16 = (i22 & 2048 | 0) == 0 ? ((i22 & 1 | 0) == 0 ? 14077 : 14082) : 14079;
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
    HEAP8[i2 >> 0] = HEAPU8[14107 + i18 >> 0] | i15 & 32;
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
   if (i8 | 0) _out(i21, 17062, 1);
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
      _out(i21, 17062, 1);
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
  _out(i21, d4 != d4 | 0.0 != 0.0 ? (i15 & 32 | 0 ? 16015 : 14103) : i15 & 32 | 0 ? 14095 : 14099, 3);
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
   if (((i4 << 24 >> 24 < 0 ? i3 : i4 & 255) | 0) == 5) i3 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i2, 17076, 5) | 0) == 0; else i3 = 0;
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
function __ZNSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EEclEOS8_(i17, i1, i2) {
 i17 = i17 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i18 = 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 HEAP32[i18 + 8 >> 2] = HEAP32[i2 >> 2];
 i16 = i18 + 8 + 4 | 0;
 HEAP32[i16 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i16 + 4 >> 2] = HEAP32[i2 + 4 + 4 >> 2];
 HEAP32[i16 + 8 >> 2] = HEAP32[i2 + 4 + 8 >> 2];
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i2 + 4 + 4 >> 2] = 0;
 HEAP32[i2 + 4 + 8 >> 2] = 0;
 HEAP16[i18 + 8 + 16 >> 1] = HEAP16[i2 + 16 >> 1] | 0;
 i15 = i18 + 8 + 20 | 0;
 HEAP32[i15 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i2 + 20 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i2 + 20 + 8 >> 2];
 HEAP32[i2 + 20 >> 2] = 0;
 HEAP32[i2 + 20 + 4 >> 2] = 0;
 HEAP32[i2 + 20 + 8 >> 2] = 0;
 HEAP8[i18 + 8 + 17 >> 0] = 1;
 i14 = __Znwj(20) | 0;
 __ZNSt3__27codecvtIwc11__mbstate_tEC2Ej(i14);
 HEAP32[i14 + 12 >> 2] = 1114111;
 HEAP32[i14 + 16 >> 2] = 0;
 HEAP32[i14 >> 2] = 2836;
 i11 = HEAP8[i16 + 11 >> 0] | 0;
 i12 = i11 << 24 >> 24 < 0 ? HEAP32[i16 >> 2] | 0 : i16;
 i11 = i11 << 24 >> 24 < 0 ? HEAP32[i18 + 8 + 8 >> 2] | 0 : i11 & 255;
 if (!i14) {
  i18 = ___cxa_allocate_exception(8) | 0;
  __ZNSt13runtime_errorC2EPKc(i18, 10630);
  HEAP32[i18 >> 2] = 4460;
  ___cxa_throw(i18 | 0, 2040, 97);
 }
 HEAP32[i18 + 40 >> 2] = 0;
 HEAP32[i18 + 40 + 4 >> 2] = 0;
 HEAP32[i18 + 40 + 8 >> 2] = 0;
 if (i11 << 1 >>> 0 > 1073741807) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 do if (i11 << 1 >>> 0 < 2) {
  HEAP8[i18 + 40 + 8 + 3 >> 0] = i11 << 1;
  if (!i11) {
   HEAP32[i18 + 40 + (i11 << 1 << 2) >> 2] = 0;
   i3 = 65;
  } else {
   i1 = i18 + 40 | 0;
   i3 = 10;
  }
 } else if (((i11 << 1) + 4 & -4) >>> 0 > 1073741823) {
  i18 = ___cxa_allocate_exception(8) | 0;
  __ZNSt11logic_errorC2EPKc(i18, 8697);
  HEAP32[i18 >> 2] = 4420;
  ___cxa_throw(i18 | 0, 2008, 95);
 } else {
  i1 = __Znwj(((i11 << 1) + 4 & -4) << 2) | 0;
  HEAP32[i18 + 40 >> 2] = i1;
  HEAP32[i18 + 40 + 8 >> 2] = (i11 << 1) + 4 & -4 | -2147483648;
  HEAP32[i18 + 40 + 4 >> 2] = i11 << 1;
  i3 = 10;
  break;
 } while (0);
 L14 : do if ((i3 | 0) == 10) {
  _wmemset(i1, i11 << 1) | 0;
  HEAP32[i1 + (i11 << 1 << 2) >> 2] = 0;
  if (!i11) i3 = 65; else {
   i13 = i18 + 40 + 8 + 3 | 0;
   if ((HEAP8[i13 >> 0] | 0) < 0) i1 = (HEAP32[i18 + 40 + 8 >> 2] & 2147483647) + -1 | 0; else i1 = 1;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEjw(i18 + 40 | 0, i1);
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = 0;
   i1 = HEAP8[i13 >> 0] | 0;
   if (i1 << 24 >> 24 < 0) {
    i8 = i18 + 40 | 0;
    i7 = i18 + 40 + 4 | 0;
    i9 = i18 + 40 | 0;
    i3 = HEAP32[i18 + 40 >> 2] | 0;
    i1 = HEAP32[i18 + 40 + 4 >> 2] | 0;
   } else {
    i8 = i18 + 40 | 0;
    i7 = i18 + 40 + 4 | 0;
    i9 = i18 + 40 | 0;
    i3 = i18 + 40 | 0;
    i1 = i1 & 255;
   }
   i2 = i12;
   i6 = i3;
   i1 = i3 + (i1 << 2) | 0;
   L24 : while (1) {
    i1 = FUNCTION_TABLE_iiiiiiiii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 7](i14, i18, i2, i12 + i11 | 0, i18 + 56 | 0, i6, i1, i18 + 52 | 0) | 0;
    i10 = i2;
    if ((HEAP32[i18 + 56 >> 2] | 0) == (i2 | 0)) {
     i1 = 2;
     i3 = 59;
     break;
    }
    switch (i1 | 0) {
    case 3:
     {
      i3 = 19;
      break L24;
     }
    case 0:
     {
      i3 = 49;
      break L24;
     }
    case 1:
     break;
    default:
     {
      i3 = 59;
      break L24;
     }
    }
    if ((HEAP8[i13 >> 0] | 0) < 0) i1 = HEAP32[i8 >> 2] | 0; else i1 = i9;
    i3 = (HEAP32[i18 + 52 >> 2] | 0) - i1 | 0;
    __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEjw(i18 + 40 | 0, i3 >> 1);
    i1 = HEAP8[i13 >> 0] | 0;
    if (i1 << 24 >> 24 < 0) {
     i4 = HEAP32[i8 >> 2] | 0;
     i5 = HEAP32[i7 >> 2] | 0;
    } else {
     i4 = i9;
     i5 = i1 & 255;
    }
    i2 = HEAP32[i18 + 56 >> 2] | 0;
    if (i2 >>> 0 < (i12 + i11 | 0) >>> 0) {
     i6 = i4 + (i3 >> 2 << 2) | 0;
     i1 = i4 + (i5 << 2) | 0;
    } else {
     i3 = 58;
     break;
    }
   }
   do if ((i3 | 0) == 19) {
    if ((HEAP8[i13 >> 0] | 0) < 0) i1 = HEAP32[i8 >> 2] | 0; else i1 = i9;
    __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEjw(i18 + 40 | 0, i6 - i1 >> 2);
    i1 = HEAP8[i13 >> 0] | 0;
    if (i1 << 24 >> 24 < 0) {
     i3 = (HEAP32[i18 + 40 + 8 >> 2] & 2147483647) + -1 | 0;
     i5 = HEAP32[i18 + 40 + 4 >> 2] | 0;
    } else {
     i3 = 1;
     i5 = i1 & 255;
    }
    i6 = i12 + i11 - i10 >> 2;
    if (!i6) {
     i1 = 0;
     i3 = 59;
    } else {
     i9 = i1 << 24 >> 24 < 0 ? HEAP32[i18 + 40 >> 2] | 0 : i18 + 40 | 0;
     if (!(i9 >>> 0 <= i2 >>> 0 ? (i9 + ((i1 << 24 >> 24 < 0 ? HEAP32[i18 + 40 + 4 >> 2] | 0 : i1 & 255) << 2) | 0) >>> 0 > i2 >>> 0 : 0)) {
      if ((i3 - i5 | 0) >>> 0 < i6 >>> 0) {
       __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9__grow_byEjjjjjj(i18 + 40 | 0, i3, i5 + i6 - i3 | 0, i5, i5);
       i1 = HEAP8[i13 >> 0] | 0;
      }
      i4 = i1 << 24 >> 24 < 0;
      i3 = i4 ? HEAP32[i18 + 40 >> 2] | 0 : i18 + 40 | 0;
      i1 = i3 + (i5 << 2) | 0;
      if ((i2 | 0) != (i12 + i11 | 0)) {
       while (1) {
        HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
        i2 = i2 + 4 | 0;
        if ((i2 | 0) == (i12 + i11 | 0)) break; else i1 = i1 + 4 | 0;
       }
       i1 = i3 + (((i12 + i11 + -4 - i10 | 0) >>> 2) + 1 + i5 << 2) | 0;
      }
      HEAP32[i1 >> 2] = 0;
      i1 = i5 + i6 | 0;
      if (i4) {
       HEAP32[i18 + 40 + 4 >> 2] = i1;
       i1 = 0;
       i3 = 59;
       break;
      } else {
       HEAP8[i13 >> 0] = i1;
       i1 = 0;
       i3 = 59;
       break;
      }
     };
     HEAP32[i18 + 60 >> 2] = 0;
     HEAP32[i18 + 60 + 4 >> 2] = 0;
     HEAP32[i18 + 60 + 8 >> 2] = 0;
     if (i6 >>> 0 > 1073741807) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     do if (i6 >>> 0 < 2) {
      HEAP8[i18 + 60 + 8 + 3 >> 0] = i6;
      i5 = 1;
      i4 = i6 & 255;
      i1 = i18 + 60 | 0;
     } else if ((i6 + 4 & -4) >>> 0 > 1073741823) {
      i18 = ___cxa_allocate_exception(8) | 0;
      __ZNSt11logic_errorC2EPKc(i18, 8697);
      HEAP32[i18 >> 2] = 4420;
      ___cxa_throw(i18 | 0, 2008, 95);
     } else {
      i1 = __Znwj((i6 + 4 & -4) << 2) | 0;
      HEAP32[i18 + 60 >> 2] = i1;
      HEAP32[i18 + 60 + 8 >> 2] = i6 + 4 & -4 | -2147483648;
      HEAP32[i18 + 60 + 4 >> 2] = i6;
      i5 = (i6 + 4 & -4 | -2147483648) >>> 24 & 255;
      i4 = (i6 + 4 & -4 | -2147483648) >>> 24 & 255;
      break;
     } while (0);
     if ((i2 | 0) != (i12 + i11 | 0)) {
      i3 = i1;
      while (1) {
       HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
       i2 = i2 + 4 | 0;
       if ((i2 | 0) == (i12 + i11 | 0)) break; else i3 = i3 + 4 | 0;
      }
      i1 = i1 + (((i12 + i11 + -4 - i10 | 0) >>> 2) + 1 << 2) | 0;
     }
     HEAP32[i1 >> 2] = 0;
     i12 = i5 << 24 >> 24 < 0;
     i1 = HEAP32[i18 + 60 >> 2] | 0;
     __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendEPKwj(i18 + 40 | 0, i12 ? i1 : i18 + 60 | 0, i12 ? HEAP32[i18 + 60 + 4 >> 2] | 0 : i5 & 255) | 0;
     if (i4 << 24 >> 24 < 0) __ZdlPv(i1);
     i1 = 0;
     i3 = 59;
    }
   } else if ((i3 | 0) == 49) {
    if ((HEAP8[i13 >> 0] | 0) < 0) i1 = HEAP32[i8 >> 2] | 0; else i1 = i9;
    __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEjw(i18 + 40 | 0, (HEAP32[i18 + 52 >> 2] | 0) - i1 >> 2);
    i1 = 0;
    i3 = 59;
   } while (0);
   do if ((i3 | 0) == 59) if (!i1) if (!i14) break L14; else {
    i3 = 65;
    break L14;
   } else {
    i1 = HEAP8[i13 >> 0] | 0;
    break;
   } while (0);
   if (i1 << 24 >> 24 >= 0) {
    i18 = ___cxa_allocate_exception(8) | 0;
    __ZNSt13runtime_errorC2EPKc(i18, 10630);
    HEAP32[i18 >> 2] = 4460;
    ___cxa_throw(i18 | 0, 2040, 97);
   }
   __ZdlPv(HEAP32[i18 + 40 >> 2] | 0);
   i18 = ___cxa_allocate_exception(8) | 0;
   __ZNSt13runtime_errorC2EPKc(i18, 10630);
   HEAP32[i18 >> 2] = 4460;
   ___cxa_throw(i18 | 0, 2040, 97);
  }
 } while (0);
 if ((i3 | 0) == 65) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
 if ((HEAP8[i18 + 8 + 28 + 3 >> 0] | 0) < 0) {
  HEAP32[HEAP32[i15 >> 2] >> 2] = 0;
  HEAP32[i18 + 8 + 24 >> 2] = 0;
  __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7reserveEj(i15);
  HEAP32[i15 >> 2] = HEAP32[i18 + 40 >> 2];
  HEAP32[i15 + 4 >> 2] = HEAP32[i18 + 40 + 4 >> 2];
  HEAP32[i15 + 8 >> 2] = HEAP32[i18 + 40 + 8 >> 2];
  i13 = HEAP32[i18 + 8 >> 2] | 0;
  i14 = HEAP16[i18 + 8 + 16 >> 1] | 0;
  HEAP32[i17 >> 2] = i13;
  i13 = i17 + 4 | 0;
  HEAP32[i13 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
  HEAP32[i13 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
  HEAP32[i16 >> 2] = 0;
  HEAP32[i16 + 4 >> 2] = 0;
  HEAP32[i16 + 8 >> 2] = 0;
  i16 = i17 + 16 | 0;
  HEAP16[i16 >> 1] = i14;
  i17 = i17 + 20 | 0;
  HEAP32[i17 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
  STACKTOP = i18;
  return;
 } else {
  HEAP32[i15 >> 2] = 0;
  HEAP8[i18 + 8 + 28 + 3 >> 0] = 0;
  __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7reserveEj(i15);
  HEAP32[i15 >> 2] = HEAP32[i18 + 40 >> 2];
  HEAP32[i15 + 4 >> 2] = HEAP32[i18 + 40 + 4 >> 2];
  HEAP32[i15 + 8 >> 2] = HEAP32[i18 + 40 + 8 >> 2];
  i13 = HEAP32[i18 + 8 >> 2] | 0;
  i14 = HEAP16[i18 + 8 + 16 >> 1] | 0;
  HEAP32[i17 >> 2] = i13;
  i13 = i17 + 4 | 0;
  HEAP32[i13 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
  HEAP32[i13 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
  HEAP32[i16 >> 2] = 0;
  HEAP32[i16 + 4 >> 2] = 0;
  HEAP32[i16 + 8 >> 2] = 0;
  i16 = i17 + 16 | 0;
  HEAP16[i16 >> 1] = i14;
  i17 = i17 + 20 | 0;
  HEAP32[i17 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
  STACKTOP = i18;
  return;
 }
}

function __ZN7todomvc7helpers15wstring_to_utf8ERKNSt3__212basic_stringIwNS1_11char_traitsIwEENS1_9allocatorIwEEEE(i13, i1) {
 i13 = i13 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i9 = __Znwj(20) | 0;
 __ZNSt3__27codecvtIwc11__mbstate_tEC2Ej(i9);
 HEAP32[i9 + 12 >> 2] = 1114111;
 HEAP32[i9 + 16 >> 2] = 0;
 HEAP32[i9 >> 2] = 2836;
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
   __ZNSt13runtime_errorC2EPKc(i14, 8913);
   HEAP32[i14 >> 2] = 4460;
   ___cxa_throw(i14 | 0, 2040, 97);
  } else {
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i13, i14 + 8 | 0);
   i1 = HEAP32[i14 + 8 + 24 >> 2] | 0;
   break;
  }
 } while (0);
 if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 if ((HEAP8[i14 + 8 + 20 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i14 + 8 + 12 >> 2] | 0);
 if ((HEAP8[i14 + 8 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i14;
  return;
 }
 __ZdlPv(HEAP32[i14 + 8 >> 2] | 0);
 STACKTOP = i14;
 return;
}

function __ZNSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEEclEOSA_(i4, i2) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 do if (!i1) HEAP32[i8 + 16 >> 2] = 0; else if ((i1 | 0) == (i2 | 0)) {
  HEAP32[i8 + 16 >> 2] = i8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i8);
  break;
 } else {
  HEAP32[i8 + 16 >> 2] = i1;
  HEAP32[i2 + 16 >> 2] = 0;
  break;
 } while (0);
 HEAP32[i8 + 80 >> 2] = HEAP32[i4 + 4 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i8 + 80 + 4 | 0, i4 + 8 | 0);
 HEAP32[i8 + 80 + 16 >> 2] = 0;
 i5 = i8 + 80 + 20 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i8 + 80 + 24 >> 2] = 0;
 i1 = (HEAP32[i4 + 24 >> 2] | 0) - (HEAP32[i4 + 20 >> 2] | 0) | 0;
 if (i1 >> 5 | 0) {
  if (i1 >> 5 >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i2 = __Znwj(i1) | 0;
  HEAP32[i5 >> 2] = i2;
  HEAP32[i8 + 80 + 16 >> 2] = i2;
  HEAP32[i8 + 80 + 24 >> 2] = i2 + (i1 >> 5 << 5);
  i1 = HEAP32[i4 + 20 >> 2] | 0;
  i3 = HEAP32[i4 + 24 >> 2] | 0;
  if ((i1 | 0) != (i3 | 0)) do {
   HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
   HEAP16[i2 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + 20 | 0);
   i1 = i1 + 32 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   HEAP32[i5 >> 2] = i2;
  } while ((i1 | 0) != (i3 | 0));
 }
 HEAP32[i8 + 80 + 28 >> 2] = HEAP32[i4 + 32 >> 2];
 i1 = HEAP32[i8 + 16 >> 2] | 0;
 do if (!i1) HEAP32[i8 + 24 + 16 >> 2] = 0; else if ((i1 | 0) == (i8 | 0)) {
  HEAP32[i8 + 24 + 16 >> 2] = i8 + 24;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i8 + 24 | 0);
  break;
 } else {
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i8 + 24 + 16 >> 2] = i7;
  break;
 } while (0);
 HEAP32[i8 + 144 >> 2] = HEAP32[i8 + 80 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i8 + 144 + 4 | 0, i8 + 80 + 4 | 0);
 HEAP32[i8 + 144 + 16 >> 2] = 0;
 i4 = i8 + 144 + 20 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i8 + 144 + 24 >> 2] = 0;
 i1 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i8 + 80 + 16 >> 2] | 0) | 0;
 if (i1 >> 5 | 0) {
  if (i1 >> 5 >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i2 = __Znwj(i1) | 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i8 + 144 + 16 >> 2] = i2;
  HEAP32[i8 + 144 + 24 >> 2] = i2 + (i1 >> 5 << 5);
  i1 = HEAP32[i8 + 80 + 16 >> 2] | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  if ((i1 | 0) != (i3 | 0)) do {
   HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
   HEAP16[i2 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + 20 | 0);
   i1 = i1 + 32 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) + 32 | 0;
   HEAP32[i4 >> 2] = i2;
  } while ((i1 | 0) != (i3 | 0));
 }
 HEAP32[i8 + 144 + 28 >> 2] = HEAP32[i8 + 80 + 28 >> 2];
 i1 = HEAP32[i8 + 24 + 16 >> 2] | 0;
 if (!i1) {
  i8 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i8 >> 2] = 2272;
  ___cxa_throw(i8 | 0, 1024, 1);
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i8 + 112 | 0, i1, i8 + 144 | 0);
 i1 = HEAP32[i8 + 144 + 16 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i4 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i4 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i8 + 144 + 16 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i8 + 144 + 4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 + 144 + 4 >> 2] | 0);
 i1 = HEAP32[i8 + 24 + 16 >> 2] | 0;
 if ((i1 | 0) == (i8 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 i1 = HEAP32[i8 + 80 + 16 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i5 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i5 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i8 + 80 + 16 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i8 + 80 + 4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 + 80 + 4 >> 2] | 0);
 HEAP32[i8 + 48 >> 2] = HEAP32[i8 + 112 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i8 + 48 + 4 | 0, i8 + 112 + 4 | 0);
 HEAP32[i8 + 48 + 16 >> 2] = 0;
 i6 = i8 + 48 + 20 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i8 + 48 + 24 >> 2] = 0;
 i7 = i8 + 112 + 20 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 + 112 + 16 >> 2] | 0) | 0;
 if (i1 >> 5 | 0) {
  if (i1 >> 5 >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i2 = __Znwj(i1) | 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[i8 + 48 + 16 >> 2] = i2;
  HEAP32[i8 + 48 + 24 >> 2] = i2 + (i1 >> 5 << 5);
  i1 = HEAP32[i8 + 112 + 16 >> 2] | 0;
  i3 = HEAP32[i7 >> 2] | 0;
  if ((i1 | 0) != (i3 | 0)) do {
   HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
   HEAP16[i2 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + 20 | 0);
   i1 = i1 + 32 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   HEAP32[i6 >> 2] = i2;
  } while ((i1 | 0) != (i3 | 0));
 }
 HEAP32[i8 + 48 + 28 >> 2] = HEAP32[i8 + 112 + 28 >> 2];
 i5 = HEAP32[4319] | 0;
 HEAP32[i8 + 144 >> 2] = HEAP32[i8 + 48 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i8 + 144 + 4 | 0, i8 + 48 + 4 | 0);
 HEAP32[i8 + 144 + 16 >> 2] = 0;
 i4 = i8 + 144 + 20 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i8 + 144 + 24 >> 2] = 0;
 i1 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i8 + 48 + 16 >> 2] | 0) | 0;
 if (i1 >> 5 | 0) {
  if (i1 >> 5 >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i2 = __Znwj(i1) | 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i8 + 144 + 16 >> 2] = i2;
  HEAP32[i8 + 144 + 24 >> 2] = i2 + (i1 >> 5 << 5);
  i1 = HEAP32[i8 + 48 + 16 >> 2] | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  if ((i1 | 0) != (i3 | 0)) do {
   HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
   HEAP16[i2 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + 20 | 0);
   i1 = i1 + 32 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) + 32 | 0;
   HEAP32[i4 >> 2] = i2;
  } while ((i1 | 0) != (i3 | 0));
 }
 HEAP32[i8 + 144 + 28 >> 2] = HEAP32[i8 + 48 + 28 >> 2];
 i3 = __Z11beforePatchN7todomvc5todos5TodosE(i8 + 144 | 0) | 0;
 i1 = HEAP32[i8 + 144 + 16 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i4 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i4 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i8 + 144 + 16 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i8 + 144 + 4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 + 144 + 4 >> 2] | 0);
 if (__ZN6asmdom5patchEPNS_5VNodeES1_(i5, i3) | 0) _emscripten_asm_const_v(18);
 i1 = HEAP32[i8 + 48 + 16 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i6 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i6 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i8 + 48 + 16 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i8 + 48 + 4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 + 48 + 4 >> 2] | 0);
 i1 = HEAP32[i8 + 112 + 16 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i7 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i7 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i7 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i8 + 112 + 16 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i8 + 112 + 4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 + 112 + 4 >> 2] | 0);
 i1 = HEAP32[i8 + 16 >> 2] | 0;
 if ((i1 | 0) == (i8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  STACKTOP = i8;
  return;
 }
 if (!i1) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 STACKTOP = i8;
 return;
}

function _main() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = 0.0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 if (!(HEAP8[17200] | 0)) if (___cxa_guard_acquire(17200) | 0) HEAP8[17925] = 1;
 HEAP8[17925] = 1;
 _emscripten_asm_const_v(19);
 _emscripten_asm_const_v(20);
 i13 = i14 + 112 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i13 + 4 >> 2] = 0;
 HEAP32[i13 + 8 >> 2] = 0;
 HEAP32[i13 + 12 >> 2] = 0;
 HEAP32[i13 + 16 >> 2] = 0;
 HEAP32[i13 + 20 >> 2] = 0;
 HEAP32[i14 + 112 >> 2] = 1;
 HEAP32[i14 + 112 + 28 >> 2] = 2;
 i12 = __emval_get_global(12470) | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 HEAP32[i14 + 8 >> 2] = 0;
 HEAP8[i14 + 11 >> 0] = 8;
 HEAP32[i14 >> 2] = 1685025838;
 HEAP32[i14 + 4 >> 2] = 1886413167;
 HEAP8[i14 + 8 >> 0] = 0;
 if (!(HEAP8[17248] | 0)) if (___cxa_guard_acquire(17248) | 0) {
  i11 = __emval_get_method_caller(2, 3324) | 0;
  HEAP32[4321] = i11;
 }
 i11 = HEAP32[4321] | 0;
 i1 = HEAP8[i14 + 11 >> 0] | 0;
 i3 = i1 << 24 >> 24 < 0 ? HEAP32[i14 + 4 >> 2] | 0 : i1 & 255;
 i4 = _malloc(i3 + 4 | 0) | 0;
 HEAP32[i4 >> 2] = i3;
 _memcpy(i4 + 4 | 0, (i1 << 24 >> 24 < 0 ? HEAP32[i14 >> 2] | 0 : i14) | 0, i3 | 0) | 0;
 HEAP32[i14 + 16 >> 2] = i4;
 d10 = +__emval_call_method(i11 | 0, i12 | 0, 12479, i14 + 268 | 0, i14 + 16 | 0);
 i11 = ~~d10 >>> 0;
 __emval_run_destructors(HEAP32[i14 + 268 >> 2] | 0);
 HEAP32[i14 + 80 >> 2] = HEAP32[i14 + 112 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i14 + 80 + 4 | 0, i13);
 HEAP32[i14 + 80 + 16 >> 2] = 0;
 i4 = i14 + 80 + 20 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i14 + 80 + 24 >> 2] = 0;
 i3 = HEAP32[i14 + 112 + 20 >> 2] | 0;
 i1 = HEAP32[i14 + 112 + 16 >> 2] | 0;
 if (i3 - i1 >> 5 | 0) {
  if (i3 - i1 >> 5 >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i2 = __Znwj(i3 - i1 | 0) | 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i14 + 80 + 16 >> 2] = i2;
  HEAP32[i14 + 80 + 24 >> 2] = i2 + (i3 - i1 >> 5 << 5);
  if ((i1 | 0) != (i3 | 0)) do {
   HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
   HEAP16[i2 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + 20 | 0);
   i1 = i1 + 32 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) + 32 | 0;
   HEAP32[i4 >> 2] = i2;
  } while ((i1 | 0) != (i3 | 0));
 }
 HEAP32[i14 + 80 + 28 >> 2] = HEAP32[i14 + 112 + 28 >> 2];
 i9 = __Z11beforePatchN7todomvc5todos5TodosE(i14 + 80 | 0) | 0;
 i1 = HEAP32[i14 + 80 + 16 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i4 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i4 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i14 + 80 + 16 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i14 + 80 + 4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i14 + 80 + 4 >> 2] | 0);
 i2 = __emval_new_cstring(6524) | 0;
 i3 = __emval_get_property(i11 | 0, i2 | 0) | 0;
 __emval_decref(i2 | 0);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_(i14 + 256 | 0, i3);
 __emval_decref(i3 | 0);
 i3 = HEAP8[i14 + 256 + 11 >> 0] | 0;
 i2 = i3 << 24 >> 24 < 0 ? HEAP32[i14 + 256 >> 2] | 0 : i14 + 256 | 0;
 i3 = i3 << 24 >> 24 < 0 ? HEAP32[i14 + 256 + 4 >> 2] | 0 : i3 & 255;
 if (i3 | 0) {
  i1 = i2;
  do {
   i8 = (_tolower(HEAP8[i1 >> 0] | 0) | 0) & 255;
   HEAP8[i1 >> 0] = i8;
   i1 = i1 + 1 | 0;
  } while ((i1 | 0) != (i2 + i3 | 0));
 }
 i6 = __emval_new_cstring(17134) | 0;
 i4 = __emval_get_property(i11 | 0, i6 | 0) | 0;
 __emval_decref(i6 | 0);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_(i14 + 196 | 0, i4);
 HEAP32[i14 + 208 >> 2] = 0;
 HEAP32[i14 + 208 + 4 >> 2] = 0;
 HEAP32[i14 + 208 + 8 >> 2] = 0;
 HEAP8[i14 + 208 + 11 >> 0] = 2;
 HEAP16[i14 + 208 >> 1] = 25705;
 HEAP8[i14 + 208 + 2 >> 0] = 0;
 i6 = i14 + 208 + 12 | 0;
 HEAP32[i6 >> 2] = HEAP32[i14 + 196 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i14 + 196 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i14 + 196 + 8 >> 2];
 HEAP32[i14 + 196 >> 2] = 0;
 HEAP32[i14 + 196 + 4 >> 2] = 0;
 HEAP32[i14 + 196 + 8 >> 2] = 0;
 i3 = i14 + 208 + 24 | 0;
 i7 = __emval_new_cstring(6532) | 0;
 i5 = __emval_get_property(i11 | 0, i7 | 0) | 0;
 __emval_decref(i7 | 0);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_(i14 + 184 | 0, i5);
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP8[i3 + 11 >> 0] = 5;
 HEAP8[i3 >> 0] = HEAP8[7259] | 0;
 HEAP8[i3 + 1 >> 0] = HEAP8[7260] | 0;
 HEAP8[i3 + 2 >> 0] = HEAP8[7261] | 0;
 HEAP8[i3 + 3 >> 0] = HEAP8[7262] | 0;
 HEAP8[i3 + 4 >> 0] = HEAP8[7263] | 0;
 HEAP8[i3 + 5 >> 0] = 0;
 i7 = i14 + 208 + 36 | 0;
 HEAP32[i7 >> 2] = HEAP32[i14 + 184 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i14 + 184 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i14 + 184 + 8 >> 2];
 HEAP32[i14 + 184 >> 2] = 0;
 HEAP32[i14 + 184 + 4 >> 2] = 0;
 HEAP32[i14 + 184 + 8 >> 2] = 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ESt16initializer_listISD_E(i14 + 268 | 0, i14 + 208 | 0, 2);
 HEAP32[i14 + 164 >> 2] = 0;
 HEAP32[i14 + 164 + 4 >> 2] = 0;
 HEAP32[i14 + 164 + 8 >> 2] = 0;
 HEAP32[i14 + 164 + 12 >> 2] = 0;
 HEAPF32[i14 + 164 + 16 >> 2] = Math_fround(1.0);
 HEAP32[i14 + 144 >> 2] = 0;
 HEAP32[i14 + 144 + 4 >> 2] = 0;
 HEAP32[i14 + 144 + 8 >> 2] = 0;
 HEAP32[i14 + 144 + 12 >> 2] = 0;
 HEAPF32[i14 + 144 + 16 >> 2] = Math_fround(1.0);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ERKSF_(i14 + 16 | 0, i14 + 268 | 0);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S8_EEEEEC2ERKSH_(i14 + 16 + 20 | 0, i14 + 164 | 0);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ERKSK_(i14 + 16 + 40 | 0, i14 + 144 | 0);
 i8 = __Znwj(112) | 0;
 __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataE(i8, i14 + 256 | 0, i14 + 16 | 0);
 __ZN6asmdom4DataD2Ev(i14 + 16 | 0);
 HEAP32[i14 + 144 >> 2] = 0;
 HEAP32[i14 + 164 >> 2] = 0;
 i1 = HEAP32[i14 + 268 + 8 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  if ((HEAP8[i2 + 20 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 20 >> 2] | 0);
  if ((HEAP8[i2 + 8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 8 >> 2] | 0);
  __ZdlPv(i2);
 } while ((i1 | 0) != 0);
 i1 = HEAP32[i14 + 268 >> 2] | 0;
 HEAP32[i14 + 268 >> 2] = 0;
 if (i1 | 0) __ZdlPv(i1);
 if ((HEAP8[i7 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i7 >> 2] | 0);
 if ((HEAP8[i3 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i3 >> 2] | 0);
 if ((HEAP8[i6 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i6 >> 2] | 0);
 if ((HEAP8[i14 + 208 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i14 + 208 >> 2] | 0);
 __emval_decref(i5 | 0);
 __emval_decref(i4 | 0);
 i1 = __emval_get_global(5021) | 0;
 i7 = __emval_new_cstring(5028) | 0;
 i2 = __emval_get_property(i1 | 0, i7 | 0) | 0;
 __emval_decref(i7 | 0);
 i7 = __emval_new_cstring(6542) | 0;
 i3 = __emval_get_property(i2 | 0, i7 | 0) | 0;
 __emval_decref(i7 | 0);
 if (!(HEAP8[17208] | 0)) if (___cxa_guard_acquire(17208) | 0) {
  i7 = __emval_get_method_caller(2, 2284) | 0;
  HEAP32[4318] = i7;
 }
 i7 = HEAP32[4318] | 0;
 __emval_incref(i11 | 0);
 HEAP32[i14 + 16 >> 2] = ~~d10 >>> 0;
 d10 = +__emval_call_method(i7 | 0, i3 | 0, 6549, i14 + 268 | 0, i14 + 16 | 0);
 __emval_run_destructors(HEAP32[i14 + 268 >> 2] | 0);
 HEAP32[i8 + 96 >> 2] = ~~d10;
 __emval_decref(i3 | 0);
 __emval_decref(i2 | 0);
 __emval_decref(i1 | 0);
 i1 = __ZN6asmdom5patchEPNS_5VNodeES1_(i8, i9) | 0;
 if ((HEAP8[i14 + 256 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i14 + 256 >> 2] | 0);
 if (i1 | 0) _emscripten_asm_const_v(18);
 __emval_decref(i11 | 0);
 if ((HEAP8[i14 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i14 >> 2] | 0);
 __emval_decref(i12 | 0);
 i3 = HEAP32[i14 + 112 + 16 >> 2] | 0;
 if (i3 | 0) {
  i1 = HEAP32[i14 + 112 + 20 >> 2] | 0;
  if ((i1 | 0) != (i3 | 0)) {
   do {
    if ((HEAP8[i1 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 + -12 >> 2] | 0);
    i2 = i1 + -28 | 0;
    i1 = i1 + -32 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
   } while ((i1 | 0) != (i3 | 0));
   HEAP32[i14 + 112 + 20 >> 2] = i3;
  }
  __ZdlPv(i3);
 }
 if ((HEAP8[i13 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i14;
  return 0;
 }
 __ZdlPv(HEAP32[i13 >> 2] | 0);
 STACKTOP = i14;
 return 0;
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
 i1 = __emval_get_global(5021) | 0;
 i11 = __emval_new_cstring(5028) | 0;
 i13 = __emval_get_property(i1 | 0, i11 | 0) | 0;
 __emval_decref(i11 | 0);
 i11 = __emval_new_cstring(5042) | 0;
 i12 = __emval_get_property(i13 | 0, i11 | 0) | 0;
 __emval_decref(i11 | 0);
 HEAP32[i17 >> 2] = HEAP32[i3 + 96 >> 2];
 i11 = __emval_take_value(2168, i17 | 0) | 0;
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
      if (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i13 + 8 | 0, 7335, 5) | 0) {
       i2 = HEAP8[i12 >> 0] | 0;
       i3 = HEAP32[i13 + 12 >> 2] | 0;
       i16 = 70;
      }
     } else i16 = 70;
     if ((i16 | 0) == 70) {
      i16 = 0;
      if (((i2 << 24 >> 24 < 0 ? i3 : i2 & 255) | 0) != 7) break;
      if (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i13 + 8 | 0, 7389, 7) | 0) break;
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
   __ZNSt11logic_errorC2EPKc(i17, 5048);
   HEAP32[i17 >> 2] = 4440;
   ___cxa_throw(i17 | 0, 2024, 95);
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
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i6 + 24 | 0);
    break;
   } else {
    i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2) | 0;
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

function _free(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if (!i1) return;
 i2 = HEAP32[4326] | 0;
 i3 = HEAP32[i1 + -4 >> 2] | 0;
 i10 = i1 + -8 + (i3 & -8) | 0;
 do if (!(i3 & 1)) {
  i4 = HEAP32[i1 + -8 >> 2] | 0;
  if (!(i3 & 3)) return;
  i6 = i1 + -8 + (0 - i4) | 0;
  i7 = i4 + (i3 & -8) | 0;
  if (i6 >>> 0 < i2 >>> 0) return;
  if ((i6 | 0) == (HEAP32[4327] | 0)) {
   i1 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i1 & 3 | 0) != 3) {
    i8 = i6;
    i9 = i6;
    i2 = i7;
    break;
   }
   HEAP32[4324] = i7;
   HEAP32[i10 + 4 >> 2] = i1 & -2;
   HEAP32[i6 + 4 >> 2] = i7 | 1;
   HEAP32[i6 + i7 >> 2] = i7;
   return;
  }
  if (i4 >>> 0 < 256) {
   i1 = HEAP32[i6 + 8 >> 2] | 0;
   i2 = HEAP32[i6 + 12 >> 2] | 0;
   if ((i2 | 0) == (i1 | 0)) {
    HEAP32[4322] = HEAP32[4322] & ~(1 << (i4 >>> 3));
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
   if ((i6 | 0) == (HEAP32[17592 + (i2 << 2) >> 2] | 0)) {
    HEAP32[17592 + (i2 << 2) >> 2] = i1;
    if (i3) {
     HEAP32[4323] = HEAP32[4323] & ~(1 << i2);
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
  i1 = HEAP32[4327] | 0;
  if ((i10 | 0) == (HEAP32[4328] | 0)) {
   i10 = (HEAP32[4325] | 0) + i2 | 0;
   HEAP32[4325] = i10;
   HEAP32[4328] = i9;
   HEAP32[i9 + 4 >> 2] = i10 | 1;
   if ((i9 | 0) != (i1 | 0)) return;
   HEAP32[4327] = 0;
   HEAP32[4324] = 0;
   return;
  }
  if ((i10 | 0) == (i1 | 0)) {
   i10 = (HEAP32[4324] | 0) + i2 | 0;
   HEAP32[4324] = i10;
   HEAP32[4327] = i8;
   HEAP32[i9 + 4 >> 2] = i10 | 1;
   HEAP32[i8 + i10 >> 2] = i10;
   return;
  }
  i5 = (i3 & -8) + i2 | 0;
  do if (i3 >>> 0 < 256) {
   i2 = HEAP32[i10 + 8 >> 2] | 0;
   i1 = HEAP32[i10 + 12 >> 2] | 0;
   if ((i1 | 0) == (i2 | 0)) {
    HEAP32[4322] = HEAP32[4322] & ~(1 << (i3 >>> 3));
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
    if ((i10 | 0) == (HEAP32[17592 + (i1 << 2) >> 2] | 0)) {
     HEAP32[17592 + (i1 << 2) >> 2] = i3;
     if (i2) {
      HEAP32[4323] = HEAP32[4323] & ~(1 << i1);
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
  if ((i9 | 0) == (HEAP32[4327] | 0)) {
   HEAP32[4324] = i5;
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
  i1 = HEAP32[4322] | 0;
  if (!(i1 & 1 << i3)) {
   HEAP32[4322] = i1 | 1 << i3;
   i1 = 17328 + (i3 << 1 << 2) + 8 | 0;
   i2 = 17328 + (i3 << 1 << 2) | 0;
  } else {
   i1 = 17328 + (i3 << 1 << 2) + 8 | 0;
   i2 = HEAP32[17328 + (i3 << 1 << 2) + 8 >> 2] | 0;
  }
  HEAP32[i1 >> 2] = i9;
  HEAP32[i2 + 12 >> 2] = i9;
  HEAP32[i9 + 8 >> 2] = i2;
  HEAP32[i9 + 12 >> 2] = 17328 + (i3 << 1 << 2);
  return;
 }
 i1 = i5 >>> 8;
 if (!i1) i2 = 0; else if (i5 >>> 0 > 16777215) i2 = 31; else {
  i2 = i1 << ((i1 + 1048320 | 0) >>> 16 & 8) << (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4);
  i2 = 14 - (((i1 << ((i1 + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4 | (i1 + 1048320 | 0) >>> 16 & 8 | (i2 + 245760 | 0) >>> 16 & 2) + (i2 << ((i2 + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
  i2 = i5 >>> (i2 + 7 | 0) & 1 | i2 << 1;
 }
 i4 = 17592 + (i2 << 2) | 0;
 HEAP32[i9 + 28 >> 2] = i2;
 HEAP32[i9 + 20 >> 2] = 0;
 HEAP32[i9 + 16 >> 2] = 0;
 i1 = HEAP32[4323] | 0;
 i3 = 1 << i2;
 do if (!(i1 & i3)) {
  HEAP32[4323] = i1 | i3;
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
 i10 = (HEAP32[4330] | 0) + -1 | 0;
 HEAP32[4330] = i10;
 if (!i10) i1 = 17744; else return;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break; else i1 = i1 + 8 | 0;
 }
 HEAP32[4330] = -1;
 return;
}

function __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ESt16initializer_listISI_E(i17, i15, i16) {
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
   i6 = __Znwj(48) | 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i6 + 8 | 0, i14);
   i2 = HEAP32[i14 + 32 >> 2] | 0;
   do if (!i2) HEAP32[i6 + 40 >> 2] = 0; else if ((i2 | 0) == (i14 + 16 | 0)) {
    HEAP32[i6 + 40 >> 2] = i6 + 24;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2, i6 + 24 | 0);
    break;
   } else {
    i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2) | 0;
    HEAP32[i6 + 40 >> 2] = i11;
    break;
   } while (0);
   HEAP32[i6 + 4 >> 2] = i12 >>> 15 ^ i12;
   HEAP32[i6 >> 2] = 0;
   f5 = Math_fround(((HEAP32[i17 + 12 >> 2] | 0) + 1 | 0) >>> 0);
   f18 = Math_fround(i9 >>> 0);
   f4 = Math_fround(HEAPF32[i17 + 16 >> 2]);
   do if ((i9 | 0) == 0 | f5 > Math_fround(f18 * f4)) {
    i1 = ~~Math_fround(Math_ceil(Math_fround(f5 / f4))) >>> 0;
    __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_22__unordered_map_hasherIS7_SD_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SD_NS_8equal_toIS7_EELb1EEENS5_ISD_EEE6rehashEj(i17, ((i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1) >>> 0 < i1 >>> 0 ? i1 : (i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1);
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
     i13 = 68;
    }
   } else {
    HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
    i13 = 68;
   }
   if ((i13 | 0) == 68) {
    i13 = 0;
    HEAP32[i1 >> 2] = i6;
   }
   HEAP32[i17 + 12 >> 2] = (HEAP32[i17 + 12 >> 2] | 0) + 1;
  }
  i14 = i14 + 40 | 0;
 } while ((i14 | 0) != (i15 + (i16 * 40 | 0) | 0));
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

function __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S8_EEEEEC2ESt16initializer_listISF_E(i17, i15, i16) {
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
   i6 = __Znwj(24) | 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i6 + 8 | 0, i14);
   i11 = HEAP32[i14 + 12 >> 2] | 0;
   HEAP32[i6 + 20 >> 2] = i11;
   __emval_incref(i11 | 0);
   HEAP32[i6 + 4 >> 2] = i12 >>> 15 ^ i12;
   HEAP32[i6 >> 2] = 0;
   f5 = Math_fround(((HEAP32[i17 + 12 >> 2] | 0) + 1 | 0) >>> 0);
   f18 = Math_fround(i9 >>> 0);
   f4 = Math_fround(HEAPF32[i17 + 16 >> 2]);
   do if ((i9 | 0) == 0 | f5 > Math_fround(f18 * f4)) {
    i1 = ~~Math_fround(Math_ceil(Math_fround(f5 / f4))) >>> 0;
    __ZNSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_22__unordered_map_hasherIS7_SA_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_SA_NS_8equal_toIS7_EELb1EEENS5_ISA_EEE6rehashEj(i17, ((i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1) >>> 0 < i1 >>> 0 ? i1 : (i9 >>> 0 < 3 | (i9 + -1 & i9 | 0) != 0) & 1 | i9 << 1);
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
  i14 = i14 + 16 | 0;
 } while ((i14 | 0) != (i15 + (i16 << 4) | 0));
 return;
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
  HEAP32[i18 >> 2] = 2272;
  ___cxa_throw(i18 | 0, 1024, 1);
 } else {
  i16 = (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i18 + 8 | 0) | 0) & 1;
  HEAP32[i18 >> 2] = i16;
  i16 = __emval_take_value(2120, i18 | 0) | 0;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EEclEOSD_(i11, i2, i1) {
 i11 = i11 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 HEAP32[i12 >> 2] = i8;
 HEAP32[i12 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i12 + 4 + 4 >> 2] = HEAP32[i1 + 4 + 4 >> 2];
 HEAP32[i12 + 4 + 8 >> 2] = HEAP32[i1 + 4 + 8 >> 2];
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 8 >> 2] = 0;
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 HEAP32[i12 + 16 >> 2] = i4;
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 HEAP32[i12 + 20 >> 2] = i6;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i12 + 24 >> 2] = i3;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i12 + 28 >> 2] = HEAP32[i1 + 28 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i12 + 32 | 0, i2 + 4 | 0);
 i10 = i12 + 48 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 + 8 >> 2] = 0;
 i9 = i12 + 48 + 20 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = 0;
 HEAP32[i12 + 48 >> 2] = i8;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i10, i12 + 32 | 0) | 0;
 HEAP8[i12 + 48 + 16 >> 0] = 0;
 HEAP8[i12 + 48 + 17 >> 0] = 0;
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6assignEPKw(i9) | 0;
 if (i6 >>> 0 < i3 >>> 0) {
  HEAP32[i6 >> 2] = HEAP32[i12 + 48 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i6 + 4 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i6 + 4 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i10 + 8 >> 2] = 0;
  HEAP16[i6 + 16 >> 1] = HEAP16[i12 + 48 + 16 >> 1] | 0;
  HEAP32[i6 + 20 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i6 + 20 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i6 + 20 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  HEAP32[i9 + 8 >> 2] = 0;
  HEAP32[i12 + 20 >> 2] = (HEAP32[i12 + 20 >> 2] | 0) + 32;
 } else {
  if (((i6 - i4 >> 5) + 1 | 0) >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i2 = i3 - i4 >> 5 >>> 0 < 67108863 ? (i3 - i4 >> 4 >>> 0 < ((i6 - i4 >> 5) + 1 | 0) >>> 0 ? (i6 - i4 >> 5) + 1 | 0 : i3 - i4 >> 4) : 134217727;
  do if (!i2) {
   i1 = i6;
   i5 = i4;
   i3 = 0;
  } else if (i2 >>> 0 > 134217727) {
   i12 = ___cxa_allocate_exception(8) | 0;
   __ZNSt11logic_errorC2EPKc(i12, 8697);
   HEAP32[i12 >> 2] = 4420;
   ___cxa_throw(i12 | 0, 2008, 95);
  } else {
   i3 = __Znwj(i2 << 5) | 0;
   i1 = HEAP32[i12 + 20 >> 2] | 0;
   i5 = HEAP32[i12 + 16 >> 2] | 0;
   break;
  } while (0);
  i8 = i3 + (i6 - i4 >> 5 << 5) | 0;
  i7 = i3 + (i2 << 5) | 0;
  HEAP32[i8 >> 2] = HEAP32[i12 + 48 >> 2];
  i2 = i3 + (i6 - i4 >> 5 << 5) + 4 | 0;
  HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i10 + 8 >> 2] = 0;
  HEAP16[i3 + (i6 - i4 >> 5 << 5) + 16 >> 1] = HEAP16[i12 + 48 + 16 >> 1] | 0;
  i6 = i3 + (i6 - i4 >> 5 << 5) + 20 | 0;
  HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  HEAP32[i9 + 8 >> 2] = 0;
  if ((i1 | 0) == (i5 | 0)) {
   i2 = i8;
   i4 = i1;
  } else {
   i3 = i8;
   i2 = i8;
   do {
    i6 = i1;
    i1 = i1 + -32 | 0;
    HEAP32[i3 + -32 >> 2] = HEAP32[i1 >> 2];
    i4 = i3 + -28 | 0;
    HEAP32[i4 >> 2] = HEAP32[i6 + -28 >> 2];
    HEAP32[i4 + 4 >> 2] = HEAP32[i6 + -28 + 4 >> 2];
    HEAP32[i4 + 8 >> 2] = HEAP32[i6 + -28 + 8 >> 2];
    HEAP32[i6 + -28 >> 2] = 0;
    HEAP32[i6 + -28 + 4 >> 2] = 0;
    HEAP32[i6 + -28 + 8 >> 2] = 0;
    HEAP16[i3 + -16 >> 1] = HEAP16[i6 + -16 >> 1] | 0;
    i4 = i3 + -12 | 0;
    HEAP32[i4 >> 2] = HEAP32[i6 + -12 >> 2];
    HEAP32[i4 + 4 >> 2] = HEAP32[i6 + -12 + 4 >> 2];
    HEAP32[i4 + 8 >> 2] = HEAP32[i6 + -12 + 8 >> 2];
    HEAP32[i6 + -12 >> 2] = 0;
    HEAP32[i6 + -12 + 4 >> 2] = 0;
    HEAP32[i6 + -12 + 8 >> 2] = 0;
    i3 = i2 + -32 | 0;
    i2 = i3;
   } while ((i1 | 0) != (i5 | 0));
   i4 = HEAP32[i12 + 16 >> 2] | 0;
   i1 = HEAP32[i12 + 20 >> 2] | 0;
  }
  HEAP32[i12 + 16 >> 2] = i2;
  HEAP32[i12 + 20 >> 2] = i8 + 32;
  HEAP32[i12 + 24 >> 2] = i7;
  i3 = i4;
  if ((i1 | 0) != (i3 | 0)) do {
   if ((HEAP8[i1 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 + -12 >> 2] | 0);
   i2 = i1 + -28 | 0;
   i1 = i1 + -32 | 0;
   if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
  } while ((i1 | 0) != (i3 | 0));
  if (i4 | 0) __ZdlPv(i4);
  if ((HEAP8[i12 + 48 + 28 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i9 >> 2] | 0);
 }
 if ((HEAP8[i10 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 >> 2] | 0);
 if ((HEAP8[i12 + 32 + 11 >> 0] | 0) >= 0) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj(i12 + 4 | 0, 0, 0) | 0;
  i10 = HEAP32[i12 >> 2] | 0;
  i10 = i10 + 1 | 0;
  HEAP32[i12 >> 2] = i10;
  HEAP32[i11 >> 2] = i10;
  i10 = i11 + 4 | 0;
  HEAP32[i10 >> 2] = HEAP32[i12 + 4 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i12 + 4 + 4 >> 2];
  HEAP32[i10 + 8 >> 2] = HEAP32[i12 + 4 + 8 >> 2];
  HEAP32[i12 + 4 >> 2] = 0;
  HEAP32[i12 + 4 + 4 >> 2] = 0;
  HEAP32[i12 + 4 + 8 >> 2] = 0;
  i10 = i11 + 16 | 0;
  i9 = i11 + 20 | 0;
  i8 = HEAP32[i12 + 16 >> 2] | 0;
  HEAP32[i10 >> 2] = i8;
  i10 = HEAP32[i12 + 20 >> 2] | 0;
  HEAP32[i9 >> 2] = i10;
  i9 = HEAP32[i12 + 24 >> 2] | 0;
  i10 = i11 + 24 | 0;
  HEAP32[i10 >> 2] = i9;
  HEAP32[i12 + 24 >> 2] = 0;
  HEAP32[i12 + 20 >> 2] = 0;
  HEAP32[i12 + 16 >> 2] = 0;
  i11 = i11 + 28 | 0;
  i10 = HEAP32[i12 + 28 >> 2] | 0;
  HEAP32[i11 >> 2] = i10;
  STACKTOP = i12;
  return;
 }
 __ZdlPv(HEAP32[i12 + 32 >> 2] | 0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj(i12 + 4 | 0, 0, 0) | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 i10 = i10 + 1 | 0;
 HEAP32[i12 >> 2] = i10;
 HEAP32[i11 >> 2] = i10;
 i10 = i11 + 4 | 0;
 HEAP32[i10 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i12 + 4 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i12 + 4 + 8 >> 2];
 HEAP32[i12 + 4 >> 2] = 0;
 HEAP32[i12 + 4 + 4 >> 2] = 0;
 HEAP32[i12 + 4 + 8 >> 2] = 0;
 i10 = i11 + 16 | 0;
 i9 = i11 + 20 | 0;
 i8 = HEAP32[i12 + 16 >> 2] | 0;
 HEAP32[i10 >> 2] = i8;
 i10 = HEAP32[i12 + 20 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 i9 = HEAP32[i12 + 24 >> 2] | 0;
 i10 = i11 + 24 | 0;
 HEAP32[i10 >> 2] = i9;
 HEAP32[i12 + 24 >> 2] = 0;
 HEAP32[i12 + 20 >> 2] = 0;
 HEAP32[i12 + 16 >> 2] = 0;
 i11 = i11 + 28 | 0;
 i10 = HEAP32[i12 + 28 >> 2] | 0;
 HEAP32[i11 >> 2] = i10;
 STACKTOP = i12;
 return;
}

function __Z11beforePatchN7todomvc5todos5TodosE(i9) {
 i9 = i9 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 HEAP32[i10 + 80 >> 2] = HEAP32[i9 >> 2];
 i8 = i10 + 80 + 4 | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i8, i9 + 4 | 0);
 HEAP32[i10 + 80 + 16 >> 2] = 0;
 i7 = i10 + 80 + 20 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i10 + 80 + 24 >> 2] = 0;
 i5 = (HEAP32[i9 + 20 >> 2] | 0) - (HEAP32[i9 + 16 >> 2] | 0) | 0;
 if (!(i5 >> 5)) {
  i6 = 0;
  i2 = 0;
  i3 = 0;
  i1 = i10 + 80 + 24 | 0;
 } else {
  if (i5 >> 5 >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i4 = __Znwj(i5) | 0;
  HEAP32[i7 >> 2] = i4;
  HEAP32[i10 + 80 + 16 >> 2] = i4;
  HEAP32[i10 + 80 + 24 >> 2] = i4 + (i5 >> 5 << 5);
  i1 = HEAP32[i9 + 16 >> 2] | 0;
  i3 = HEAP32[i9 + 20 >> 2] | 0;
  if ((i1 | 0) == (i3 | 0)) {
   i6 = i4;
   i2 = i4;
   i3 = i4 + (i5 >> 5 << 5) | 0;
   i1 = i10 + 80 + 24 | 0;
  } else {
   i2 = i4;
   do {
    HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
    HEAP16[i2 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
    __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + 20 | 0);
    i1 = i1 + 32 | 0;
    i2 = (HEAP32[i7 >> 2] | 0) + 32 | 0;
    HEAP32[i7 >> 2] = i2;
   } while ((i1 | 0) != (i3 | 0));
   i6 = HEAP32[i10 + 80 + 16 >> 2] | 0;
   i3 = HEAP32[i10 + 80 + 24 >> 2] | 0;
   i1 = i10 + 80 + 24 | 0;
  }
 }
 i11 = HEAP32[i9 + 28 >> 2] | 0;
 HEAP32[i10 + 80 + 28 >> 2] = i11;
 i14 = HEAP32[i10 + 80 >> 2] | 0;
 i13 = HEAP32[i10 + 80 + 4 >> 2] | 0;
 HEAP32[i10 + 112 >> 2] = HEAP32[i10 + 80 + 8 >> 2];
 HEAP16[i10 + 112 + 4 >> 1] = HEAP16[i10 + 80 + 8 + 4 >> 1] | 0;
 HEAP8[i10 + 112 + 6 >> 0] = HEAP8[i10 + 80 + 8 + 6 >> 0] | 0;
 i12 = HEAP8[i10 + 80 + 15 >> 0] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i10 + 80 + 16 >> 2] = 0;
 i4 = i10 + 24 + 16 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = __Znwj(36) | 0;
 HEAP32[i5 >> 2] = 2352;
 HEAP32[i5 + 4 >> 2] = i14;
 HEAP32[i5 + 8 >> 2] = i13;
 HEAP32[i5 + 12 >> 2] = HEAP32[i10 + 112 >> 2];
 HEAP16[i5 + 12 + 4 >> 1] = HEAP16[i10 + 112 + 4 >> 1] | 0;
 HEAP8[i5 + 12 + 6 >> 0] = HEAP8[i10 + 112 + 6 >> 0] | 0;
 HEAP8[i5 + 19 >> 0] = i12;
 HEAP32[i10 + 112 >> 2] = 0;
 HEAP16[i10 + 112 + 4 >> 1] = 0;
 HEAP8[i10 + 112 + 6 >> 0] = 0;
 HEAP32[i5 + 20 >> 2] = i6;
 HEAP32[i5 + 24 >> 2] = i2;
 HEAP32[i5 + 28 >> 2] = i3;
 HEAP32[i5 + 32 >> 2] = i11;
 HEAP32[i4 >> 2] = i5;
 i1 = HEAP32[4308] | 0;
 if ((i1 | 0) == 17216) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[4304] | 0) + 12 >> 2] & 31](17216, i10 + 24 | 0);
  i1 = HEAP32[4308] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  HEAP32[4308] = HEAP32[i4 >> 2];
  HEAP32[i4 >> 2] = i10 + 24;
  i1 = i10 + 24 | 0;
 } else {
  HEAP32[i4 >> 2] = i1;
  HEAP32[4308] = i5;
 }
 if ((i1 | 0) == (i10 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 i1 = HEAP32[i10 + 80 + 16 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i7 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i7 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i7 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i10 + 80 + 16 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 >> 2] | 0);
 HEAP32[i10 + 48 >> 2] = HEAP32[i9 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i10 + 48 + 4 | 0, i9 + 4 | 0);
 HEAP32[i10 + 48 + 16 >> 2] = 0;
 i4 = i10 + 48 + 20 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i10 + 48 + 24 >> 2] = 0;
 i1 = (HEAP32[i9 + 20 >> 2] | 0) - (HEAP32[i9 + 16 >> 2] | 0) | 0;
 if (i1 >> 5 | 0) {
  if (i1 >> 5 >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  i2 = __Znwj(i1) | 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i10 + 48 + 16 >> 2] = i2;
  HEAP32[i10 + 48 + 24 >> 2] = i2 + (i1 >> 5 << 5);
  i1 = HEAP32[i9 + 16 >> 2] | 0;
  i3 = HEAP32[i9 + 20 >> 2] | 0;
  if ((i1 | 0) != (i3 | 0)) do {
   HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
   HEAP16[i2 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + 20 | 0);
   i1 = i1 + 32 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) + 32 | 0;
   HEAP32[i4 >> 2] = i2;
  } while ((i1 | 0) != (i3 | 0));
 }
 HEAP32[i10 + 48 + 28 >> 2] = HEAP32[i9 + 28 >> 2];
 i1 = HEAP32[4308] | 0;
 do if (!i1) HEAP32[i10 + 16 >> 2] = 0; else if ((i1 | 0) == 17216) {
  HEAP32[i10 + 16 >> 2] = i10;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[4304] | 0) + 12 >> 2] & 31](17216, i10);
  break;
 } else {
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i10 + 16 >> 2] = i14;
  break;
 } while (0);
 i1 = __ZN7todomvc5todos4viewENS0_5TodosENSt3__28functionIFvNS3_IFS1_S1_EEEEEE(i10 + 48 | 0, i10) | 0;
 HEAP32[4319] = i1;
 i1 = HEAP32[i10 + 16 >> 2] | 0;
 if ((i1 | 0) == (i10 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 i1 = HEAP32[i10 + 48 + 16 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i4 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i4 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i10 + 48 + 16 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i10 + 48 + 4 + 11 >> 0] | 0) >= 0) {
  i14 = HEAP32[4319] | 0;
  STACKTOP = i10;
  return i14 | 0;
 }
 __ZdlPv(HEAP32[i10 + 48 + 4 >> 2] | 0);
 i14 = HEAP32[4319] | 0;
 STACKTOP = i10;
 return i14 | 0;
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
 if (((i1 << 24 >> 24 < 0 ? HEAP32[i10 + 4 >> 2] | 0 : i1 & 255) | 0) == 1) if (!(__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i10, 17060, 1) | 0)) {
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
 i1 = HEAP32[4317] | 0;
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
  if (HEAP32[HEAP32[1149] >> 2] | 0) if (i5 | 0) {
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
    i3 = HEAP32[3404 + (i4 + -194 << 2) >> 2] | 0;
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
    i3 = HEAP32[3404 + (i4 + -194 << 2) >> 2] | 0;
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
  HEAP32[4478] = 84;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EEclEOSD_(i14, i17, i1) {
 i14 = i14 | 0;
 i17 = i17 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i15 = 0, i16 = 0, i18 = 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 i15 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i18 + 24 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP16[i18 + 24 + 4 >> 1] = HEAP16[i1 + 8 + 4 >> 1] | 0;
 HEAP8[i18 + 24 + 6 >> 0] = HEAP8[i1 + 8 + 6 >> 0] | 0;
 i16 = HEAP8[i1 + 15 >> 0] | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 8 >> 2] = 0;
 i11 = HEAP32[i1 + 16 >> 2] | 0;
 i12 = HEAP32[i1 + 20 >> 2] | 0;
 i13 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 i6 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i12 | 0) == (i11 | 0)) {
  HEAP32[i14 >> 2] = i10;
  i17 = i14 + 4 | 0;
  HEAP32[i17 >> 2] = i15;
  i17 = i14 + 8 | 0;
  HEAP32[i17 >> 2] = HEAP32[i18 + 24 >> 2];
  HEAP16[i17 + 4 >> 1] = HEAP16[i18 + 24 + 4 >> 1] | 0;
  HEAP8[i17 + 6 >> 0] = HEAP8[i18 + 24 + 6 >> 0] | 0;
  i17 = i14 + 15 | 0;
  HEAP8[i17 >> 0] = i16;
  i16 = i14 + 16 | 0;
  i17 = i14 + 20 | 0;
  HEAP32[i16 >> 2] = i11;
  HEAP32[i17 >> 2] = i12;
  i17 = i14 + 24 | 0;
  HEAP32[i17 >> 2] = i13;
  i17 = i14 + 28 | 0;
  HEAP32[i17 >> 2] = i6;
  STACKTOP = i18;
  return;
 }
 i9 = i18 + 64 + 4 | 0;
 i7 = i18 + 64 + 20 | 0;
 i8 = 0;
 do {
  i3 = i11 + (i8 << 5) | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  if ((i1 | 0) == (HEAP32[i17 + 32 >> 2] | 0)) {
   HEAP32[i18 + 32 >> 2] = i1;
   i4 = i11 + (i8 << 5) + 4 | 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i18 + 32 + 4 | 0, i4);
   i2 = i11 + (i8 << 5) + 16 | 0;
   HEAP16[i18 + 32 + 16 >> 1] = HEAP16[i2 >> 1] | 0;
   i5 = i11 + (i8 << 5) + 20 | 0;
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i18 + 32 + 20 | 0, i5);
   i1 = HEAP32[i17 + 24 >> 2] | 0;
   do if (!i1) HEAP32[i18 + 16 >> 2] = 0; else if ((i1 | 0) == (i17 + 8 | 0)) {
    HEAP32[i18 + 16 >> 2] = i18;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i18);
    break;
   } else {
    i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
    HEAP32[i18 + 16 >> 2] = i1;
    break;
   } while (0);
   __ZN7todomvc4task6updateENS0_4TaskENSt3__28functionIFS1_S1_EEE(i18 + 64 | 0, i18 + 32 | 0, i18);
   HEAP32[i3 >> 2] = HEAP32[i18 + 64 >> 2];
   if ((HEAP8[i4 + 11 >> 0] | 0) < 0) {
    HEAP8[HEAP32[i4 >> 2] >> 0] = 0;
    HEAP32[i11 + (i8 << 5) + 8 >> 2] = 0;
    i1 = i4;
   } else {
    HEAP8[i4 >> 0] = 0;
    HEAP8[i4 + 11 >> 0] = 0;
    i1 = i4;
   }
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj(i4);
   HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i1 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i1 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i9 >> 2] = 0;
   HEAP32[i9 + 4 >> 2] = 0;
   HEAP32[i9 + 8 >> 2] = 0;
   HEAP16[i2 >> 1] = HEAP16[i18 + 64 + 16 >> 1] | 0;
   i1 = i11 + (i8 << 5) + 28 + 3 | 0;
   if ((HEAP8[i1 >> 0] | 0) < 0) {
    HEAP32[HEAP32[i5 >> 2] >> 2] = 0;
    HEAP32[i11 + (i8 << 5) + 24 >> 2] = 0;
   } else {
    HEAP32[i5 >> 2] = 0;
    HEAP8[i1 >> 0] = 0;
   }
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7reserveEj(i5);
   HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   HEAP32[i7 + 8 >> 2] = 0;
   if ((HEAP8[i9 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i9 >> 2] | 0);
   i1 = HEAP32[i18 + 16 >> 2] | 0;
   if ((i1 | 0) == (i18 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
   if ((HEAP8[i18 + 32 + 28 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i18 + 32 + 20 >> 2] | 0);
   if ((HEAP8[i18 + 32 + 4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i18 + 32 + 4 >> 2] | 0);
  }
  i8 = i8 + 1 | 0;
 } while (i8 >>> 0 < i12 - i11 >> 5 >>> 0);
 HEAP32[i14 >> 2] = i10;
 i17 = i14 + 4 | 0;
 HEAP32[i17 >> 2] = i15;
 i17 = i14 + 8 | 0;
 HEAP32[i17 >> 2] = HEAP32[i18 + 24 >> 2];
 HEAP16[i17 + 4 >> 1] = HEAP16[i18 + 24 + 4 >> 1] | 0;
 HEAP8[i17 + 6 >> 0] = HEAP8[i18 + 24 + 6 >> 0] | 0;
 i17 = i14 + 15 | 0;
 HEAP8[i17 >> 0] = i16;
 i16 = i14 + 16 | 0;
 i17 = i14 + 20 | 0;
 HEAP32[i16 >> 2] = i11;
 HEAP32[i17 >> 2] = i12;
 i17 = i14 + 24 | 0;
 HEAP32[i17 >> 2] = i13;
 i17 = i14 + 28 | 0;
 HEAP32[i17 >> 2] = i6;
 STACKTOP = i18;
 return;
}

function __ZN6asmdom5VNode11adjustVNodeEv(i9) {
 i9 = i9 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 + 4 + 4 >> 2] = 0;
 HEAP8[i10 + 11 >> 0] = 3;
 HEAP8[i10 >> 0] = HEAP8[9354] | 0;
 HEAP8[i10 + 1 >> 0] = HEAP8[9355] | 0;
 HEAP8[i10 + 2 >> 0] = HEAP8[9356] | 0;
 HEAP8[i10 + 3 >> 0] = 0;
 if (__ZNKSt3__212__hash_tableINS_17__hash_value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_22__unordered_map_hasherIS7_S8_NS_4hashIS7_EELb1EEENS_21__unordered_map_equalIS7_S8_NS_8equal_toIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_21__hash_const_iteratorIPNS_11__hash_nodeIS8_PvEEEERKT_(i9 + 36 | 0, i10) | 0) {
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i10 + 4 + 4 >> 2] = 0;
  HEAP8[i10 + 11 >> 0] = 3;
  HEAP8[i10 >> 0] = HEAP8[9354] | 0;
  HEAP8[i10 + 1 >> 0] = HEAP8[9355] | 0;
  HEAP8[i10 + 2 >> 0] = HEAP8[9356] | 0;
  HEAP8[i10 + 3 >> 0] = 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i9 + 12 | 0, __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEixEOS6_(i9 + 36 | 0, i10) | 0) | 0;
  if ((HEAP8[i10 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i10 >> 2] | 0);
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i10 + 4 + 4 >> 2] = 0;
  HEAP8[i10 + 11 >> 0] = 3;
  HEAP8[i10 >> 0] = HEAP8[9354] | 0;
  HEAP8[i10 + 1 >> 0] = HEAP8[9355] | 0;
  HEAP8[i10 + 2 >> 0] = HEAP8[9356] | 0;
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
  __ZNSt11logic_errorC2EPKc(i15, 8697);
  HEAP32[i15 >> 2] = 4420;
  ___cxa_throw(i15 | 0, 2008, 95);
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
  __ZNSt11logic_errorC2EPKc(i15, 8697);
  HEAP32[i15 >> 2] = 4420;
  ___cxa_throw(i15 | 0, 2008, 95);
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
  __ZNSt11logic_errorC2EPKc(i15, 8697);
  HEAP32[i15 >> 2] = 4420;
  ___cxa_throw(i15 | 0, 2008, 95);
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EEclEOS8_(i13, i16, i1) {
 i13 = i13 | 0;
 i16 = i16 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i14 = 0, i15 = 0, i17 = 0, i18 = 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 i14 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i17 + 24 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP16[i17 + 24 + 4 >> 1] = HEAP16[i1 + 8 + 4 >> 1] | 0;
 HEAP8[i17 + 24 + 6 >> 0] = HEAP8[i1 + 8 + 6 >> 0] | 0;
 i15 = HEAP8[i1 + 15 >> 0] | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 8 >> 2] = 0;
 i10 = HEAP32[i1 + 16 >> 2] | 0;
 i11 = HEAP32[i1 + 20 >> 2] | 0;
 i12 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i11 | 0) == (i10 | 0)) {
  HEAP32[i13 >> 2] = i9;
  i16 = i13 + 4 | 0;
  HEAP32[i16 >> 2] = i14;
  i16 = i13 + 8 | 0;
  HEAP32[i16 >> 2] = HEAP32[i17 + 24 >> 2];
  HEAP16[i16 + 4 >> 1] = HEAP16[i17 + 24 + 4 >> 1] | 0;
  HEAP8[i16 + 6 >> 0] = HEAP8[i17 + 24 + 6 >> 0] | 0;
  i16 = i13 + 15 | 0;
  HEAP8[i16 >> 0] = i15;
  i15 = i13 + 16 | 0;
  i16 = i13 + 20 | 0;
  HEAP32[i15 >> 2] = i10;
  HEAP32[i16 >> 2] = i11;
  i16 = i13 + 24 | 0;
  HEAP32[i16 >> 2] = i12;
  i16 = i13 + 28 | 0;
  HEAP32[i16 >> 2] = i5;
  STACKTOP = i17;
  return;
 }
 i8 = i17 + 64 + 4 | 0;
 i6 = i17 + 64 + 20 | 0;
 i7 = 0;
 do {
  i1 = i10 + (i7 << 5) | 0;
  HEAP32[i17 + 32 >> 2] = HEAP32[i1 >> 2];
  i3 = i10 + (i7 << 5) + 4 | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i17 + 32 + 4 | 0, i3);
  i2 = i10 + (i7 << 5) + 16 | 0;
  HEAP16[i17 + 32 + 16 >> 1] = HEAP16[i2 >> 1] | 0;
  i4 = i10 + (i7 << 5) + 20 | 0;
  __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i17 + 32 + 20 | 0, i4);
  i18 = HEAP8[i16 + 4 >> 0] | 0;
  HEAP32[i17 >> 2] = 2748;
  HEAP8[i17 + 4 >> 0] = i18;
  HEAP32[i17 + 16 >> 2] = i17;
  __ZN7todomvc4task6updateENS0_4TaskENSt3__28functionIFS1_S1_EEE(i17 + 64 | 0, i17 + 32 | 0, i17);
  HEAP32[i1 >> 2] = HEAP32[i17 + 64 >> 2];
  if ((HEAP8[i3 + 11 >> 0] | 0) < 0) {
   HEAP8[HEAP32[i3 >> 2] >> 0] = 0;
   HEAP32[i10 + (i7 << 5) + 8 >> 2] = 0;
   i1 = i3;
  } else {
   HEAP8[i3 >> 0] = 0;
   HEAP8[i3 + 11 >> 0] = 0;
   i1 = i3;
  }
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj(i3);
  HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i8 >> 2] = 0;
  HEAP32[i8 + 4 >> 2] = 0;
  HEAP32[i8 + 8 >> 2] = 0;
  HEAP16[i2 >> 1] = HEAP16[i17 + 64 + 16 >> 1] | 0;
  i1 = i10 + (i7 << 5) + 28 + 3 | 0;
  if ((HEAP8[i1 >> 0] | 0) < 0) {
   HEAP32[HEAP32[i4 >> 2] >> 2] = 0;
   HEAP32[i10 + (i7 << 5) + 24 >> 2] = 0;
  } else {
   HEAP32[i4 >> 2] = 0;
   HEAP8[i1 >> 0] = 0;
  }
  __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7reserveEj(i4);
  HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i4 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i6 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  HEAP32[i6 + 8 >> 2] = 0;
  if ((HEAP8[i8 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i8 >> 2] | 0);
  i1 = HEAP32[i17 + 16 >> 2] | 0;
  if ((i1 | 0) == (i17 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
  if ((HEAP8[i17 + 32 + 28 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i17 + 32 + 20 >> 2] | 0);
  if ((HEAP8[i17 + 32 + 4 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i17 + 32 + 4 >> 2] | 0);
  i7 = i7 + 1 | 0;
 } while (i7 >>> 0 < i11 - i10 >> 5 >>> 0);
 HEAP32[i13 >> 2] = i9;
 i16 = i13 + 4 | 0;
 HEAP32[i16 >> 2] = i14;
 i16 = i13 + 8 | 0;
 HEAP32[i16 >> 2] = HEAP32[i17 + 24 >> 2];
 HEAP16[i16 + 4 >> 1] = HEAP16[i17 + 24 + 4 >> 1] | 0;
 HEAP8[i16 + 6 >> 0] = HEAP8[i17 + 24 + 6 >> 0] | 0;
 i16 = i13 + 15 | 0;
 HEAP8[i16 >> 0] = i15;
 i16 = i13 + 16 | 0;
 i18 = i13 + 20 | 0;
 HEAP32[i16 >> 2] = i10;
 HEAP32[i18 >> 2] = i11;
 i18 = i13 + 24 | 0;
 HEAP32[i18 >> 2] = i12;
 i18 = i13 + 28 | 0;
 HEAP32[i18 >> 2] = i5;
 STACKTOP = i17;
 return;
}

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_SH_EEiEERPNS_15__tree_end_nodeISJ_EESK_RKT_(i10, i12, i13, i3, i9) {
 i10 = i10 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i3 = i3 | 0;
 i9 = i9 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i11 = 0;
 do if ((i10 + 4 | 0) != (i12 | 0)) {
  i2 = HEAP8[i12 + 16 + 11 >> 0] | 0;
  i4 = i2 << 24 >> 24 < 0 ? HEAP32[i12 + 20 >> 2] | 0 : i2 & 255;
  i7 = HEAP8[i9 + 11 >> 0] | 0;
  i8 = i7 << 24 >> 24 < 0 ? HEAP32[i9 + 4 >> 2] | 0 : i7 & 255;
  i1 = i4 >>> 0 < i8 >>> 0 ? i4 : i8;
  if (!i1) i11 = 4; else {
   i1 = _memcmp(i7 << 24 >> 24 < 0 ? HEAP32[i9 >> 2] | 0 : i9, i2 << 24 >> 24 < 0 ? HEAP32[i12 + 16 >> 2] | 0 : i12 + 16 | 0, i1) | 0;
   if (!i1) i11 = 4; else if ((i1 | 0) < 0) break;
  }
  if ((i11 | 0) == 4) if (i8 >>> 0 < i4 >>> 0) break;
  i1 = i8 >>> 0 < i4 >>> 0 ? i8 : i4;
  if (!i1) i11 = 20; else {
   i1 = _memcmp(i2 << 24 >> 24 < 0 ? HEAP32[i12 + 16 >> 2] | 0 : i12 + 16 | 0, i7 << 24 >> 24 < 0 ? HEAP32[i9 >> 2] | 0 : i9, i1) | 0;
   if (!i1) i11 = 20; else if ((i1 | 0) >= 0) i11 = 36;
  }
  if ((i11 | 0) == 20) if (i4 >>> 0 >= i8 >>> 0) i11 = 36;
  if ((i11 | 0) == 36) {
   HEAP32[i13 >> 2] = i12;
   HEAP32[i3 >> 2] = i12;
   i13 = i3;
   return i13 | 0;
  }
  i6 = HEAP32[i12 + 4 >> 2] | 0;
  if (!i6) {
   i1 = HEAP32[i12 + 8 >> 2] | 0;
   if ((HEAP32[i1 >> 2] | 0) != (i12 | 0)) {
    i2 = i12 + 8 | 0;
    do {
     i5 = HEAP32[i2 >> 2] | 0;
     i2 = i5 + 8 | 0;
     i1 = HEAP32[i2 >> 2] | 0;
    } while ((HEAP32[i1 >> 2] | 0) != (i5 | 0));
   }
  } else {
   i1 = i6;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
  }
  do if ((i1 | 0) != (i10 + 4 | 0)) {
   i4 = i1 + 16 | 0;
   i3 = HEAP8[i4 + 11 >> 0] | 0;
   i5 = i3 << 24 >> 24 < 0 ? HEAP32[i1 + 20 >> 2] | 0 : i3 & 255;
   i2 = i5 >>> 0 < i8 >>> 0 ? i5 : i8;
   if (!i2) i11 = 30; else {
    i2 = _memcmp(i7 << 24 >> 24 < 0 ? HEAP32[i9 >> 2] | 0 : i9, i3 << 24 >> 24 < 0 ? HEAP32[i4 >> 2] | 0 : i4, i2) | 0;
    if (!i2) i11 = 30; else if ((i2 | 0) < 0) break;
   }
   if ((i11 | 0) == 30) if (i8 >>> 0 < i5 >>> 0) break;
   i13 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i10, i13, i9) | 0;
   return i13 | 0;
  } while (0);
  if (!i6) {
   HEAP32[i13 >> 2] = i12;
   i13 = i12 + 4 | 0;
   return i13 | 0;
  } else {
   HEAP32[i13 >> 2] = i1;
   i13 = i1;
   return i13 | 0;
  }
 } while (0);
 i8 = HEAP32[i12 >> 2] | 0;
 do if ((HEAP32[i10 >> 2] | 0) == (i12 | 0)) i1 = i12; else {
  if (!i8) {
   i2 = i12;
   while (1) {
    i1 = HEAP32[i2 + 8 >> 2] | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i2 | 0)) i2 = i1; else {
     i2 = i1;
     break;
    }
   }
  } else {
   i2 = i8;
   while (1) {
    i1 = HEAP32[i2 + 4 >> 2] | 0;
    if (!i1) break; else i2 = i1;
   }
  }
  i1 = i2;
  i5 = i2 + 16 | 0;
  i3 = HEAP8[i9 + 11 >> 0] | 0;
  i7 = i3 << 24 >> 24 < 0 ? HEAP32[i9 + 4 >> 2] | 0 : i3 & 255;
  i4 = HEAP8[i5 + 11 >> 0] | 0;
  i6 = i4 << 24 >> 24 < 0 ? HEAP32[i2 + 20 >> 2] | 0 : i4 & 255;
  i2 = i7 >>> 0 < i6 >>> 0 ? i7 : i6;
  if (!i2) i11 = 12; else {
   i2 = _memcmp(i4 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i5, i3 << 24 >> 24 < 0 ? HEAP32[i9 >> 2] | 0 : i9, i2) | 0;
   if (!i2) i11 = 12; else if ((i2 | 0) < 0) break;
  }
  if ((i11 | 0) == 12) if (i6 >>> 0 < i7 >>> 0) break;
  i13 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i10, i13, i9) | 0;
  return i13 | 0;
 } while (0);
 if (!i8) {
  HEAP32[i13 >> 2] = i12;
  i13 = i12;
  return i13 | 0;
 } else {
  i12 = i1;
  HEAP32[i13 >> 2] = i12;
  i13 = i12 + 4 | 0;
  return i13 | 0;
 }
 return 0;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEEclEOSG_(i7, i2) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 do if (!i1) {
  HEAP32[i10 + 16 >> 2] = 0;
  i1 = 0;
  i9 = i10 + 16 | 0;
 } else if ((i1 | 0) == (i2 | 0)) {
  HEAP32[i10 + 16 >> 2] = i10;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i10);
  i1 = HEAP32[i10 + 16 >> 2] | 0;
  i9 = i10 + 16 | 0;
  break;
 } else {
  HEAP32[i10 + 16 >> 2] = i1;
  HEAP32[i2 + 16 >> 2] = 0;
  i9 = i10 + 16 | 0;
  break;
 } while (0);
 i6 = HEAP32[i7 + 32 >> 2] | 0;
 do if (!i1) {
  HEAP32[i10 + 24 + 16 >> 2] = 0;
  i1 = i10 + 72 | 0;
  i2 = i10 + 24 + 16 | 0;
  i8 = 12;
 } else {
  if ((i1 | 0) == (i10 | 0)) {
   HEAP32[i10 + 24 + 16 >> 2] = i10 + 24;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i10 + 24 | 0);
   i1 = HEAP32[i10 + 24 + 16 >> 2] | 0;
   i2 = i10 + 24 + 16 | 0;
  } else {
   i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
   HEAP32[i10 + 24 + 16 >> 2] = i1;
   i2 = i10 + 24 + 16 | 0;
  }
  if (!i1) {
   i1 = i10 + 72 | 0;
   i8 = 12;
  } else if ((i1 | 0) == (i10 + 24 | 0)) {
   HEAP32[i10 + 72 + 16 >> 2] = i10 + 72;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i10 + 72 | 0);
   i4 = i10 + 72 | 0;
   i1 = i10 + 72 + 16 | 0;
   break;
  } else {
   i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
   HEAP32[i10 + 72 + 16 >> 2] = i4;
   i4 = i10 + 72 | 0;
   i1 = i10 + 72 + 16 | 0;
   break;
  }
 } while (0);
 if ((i8 | 0) == 12) {
  HEAP32[i10 + 72 + 16 >> 2] = 0;
  i4 = i1;
  i1 = i10 + 72 + 16 | 0;
 }
 HEAP32[i10 + 72 + 24 >> 2] = i6;
 HEAP32[i10 + 48 + 16 >> 2] = 0;
 i5 = __Znwj(40) | 0;
 HEAP32[i5 >> 2] = 3288;
 i3 = HEAP32[i1 >> 2] | 0;
 do if (!i3) {
  i1 = i5 + 24 | 0;
  i8 = 21;
 } else {
  if ((i3 | 0) != (i4 | 0)) {
   HEAP32[i5 + 24 >> 2] = i3;
   i8 = 21;
   break;
  }
  HEAP32[i5 + 24 >> 2] = i5 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i5 + 8 | 0);
  i1 = HEAP32[i1 >> 2] | 0;
  HEAP32[i5 + 32 >> 2] = HEAP32[i10 + 72 + 24 >> 2];
  HEAP32[i10 + 48 + 16 >> 2] = i5;
  if ((i1 | 0) == (i3 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 127](i3);
   break;
  }
  if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 } while (0);
 if ((i8 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i5 + 32 >> 2] = i6;
  HEAP32[i10 + 48 + 16 >> 2] = i5;
 }
 i1 = HEAP32[i7 + 24 >> 2] | 0;
 if (!i1) {
  i10 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i10 >> 2] = 2272;
  ___cxa_throw(i10 | 0, 1024, 1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i10 + 48 | 0);
 i1 = HEAP32[i10 + 48 + 16 >> 2] | 0;
 if ((i1 | 0) == (i10 + 48 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == (i10 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == (i10 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  STACKTOP = i10;
  return;
 }
 if (!i1) {
  STACKTOP = i10;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 STACKTOP = i10;
 return;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EEclEOS8_(i8, i6, i1) {
 i8 = i8 | 0;
 i6 = i6 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 HEAP32[i9 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i9 + 4 + 4 >> 2] = HEAP32[i1 + 4 + 4 >> 2];
 HEAP32[i9 + 4 + 8 >> 2] = HEAP32[i1 + 4 + 8 >> 2];
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 8 >> 2] = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 HEAP32[i9 + 16 >> 2] = i2;
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 HEAP32[i9 + 20 >> 2] = i7;
 HEAP32[i9 + 24 >> 2] = HEAP32[i1 + 24 >> 2];
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i9 + 28 >> 2] = HEAP32[i1 + 28 >> 2];
 L1 : do if ((i2 | 0) == (i7 | 0)) i3 = 5; else {
  i1 = HEAP32[i6 + 4 >> 2] | 0;
  while (1) {
   if ((HEAP32[i2 >> 2] | 0) == (i1 | 0)) {
    i3 = 5;
    break L1;
   }
   i2 = i2 + 32 | 0;
   if ((i2 | 0) == (i7 | 0)) {
    i2 = i7;
    i1 = i7;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) == 5) {
  i1 = i2;
  if ((i2 | 0) == (i7 | 0)) i2 = i7; else {
   i3 = i1;
   L8 : while (1) {
    i2 = HEAP32[i6 + 4 >> 2] | 0;
    do {
     i5 = i1;
     i1 = i5 + 32 | 0;
     if ((i5 + 32 | 0) == (i7 | 0)) break L8;
     i4 = HEAP32[i5 + 32 >> 2] | 0;
    } while ((i4 | 0) == (i2 | 0));
    HEAP32[i3 >> 2] = i4;
    if ((HEAP8[i3 + 4 + 11 >> 0] | 0) < 0) {
     HEAP8[HEAP32[i3 + 4 >> 2] >> 0] = 0;
     HEAP32[i3 + 8 >> 2] = 0;
     i2 = i3 + 4 | 0;
    } else {
     HEAP8[i3 + 4 >> 0] = 0;
     HEAP8[i3 + 4 + 11 >> 0] = 0;
     i2 = i3 + 4 | 0;
    }
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj(i3 + 4 | 0);
    HEAP32[i2 >> 2] = HEAP32[i5 + 36 >> 2];
    HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 36 + 4 >> 2];
    HEAP32[i2 + 8 >> 2] = HEAP32[i5 + 36 + 8 >> 2];
    HEAP32[i5 + 36 >> 2] = 0;
    HEAP32[i5 + 36 + 4 >> 2] = 0;
    HEAP32[i5 + 36 + 8 >> 2] = 0;
    HEAP16[i3 + 16 >> 1] = HEAP16[i5 + 48 >> 1] | 0;
    if ((HEAP8[i3 + 28 + 3 >> 0] | 0) < 0) {
     HEAP32[HEAP32[i3 + 20 >> 2] >> 2] = 0;
     HEAP32[i3 + 24 >> 2] = 0;
    } else {
     HEAP32[i3 + 20 >> 2] = 0;
     HEAP8[i3 + 28 + 3 >> 0] = 0;
    }
    __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7reserveEj(i3 + 20 | 0);
    HEAP32[i3 + 20 >> 2] = HEAP32[i5 + 52 >> 2];
    HEAP32[i3 + 20 + 4 >> 2] = HEAP32[i5 + 52 + 4 >> 2];
    HEAP32[i3 + 20 + 8 >> 2] = HEAP32[i5 + 52 + 8 >> 2];
    HEAP32[i5 + 52 >> 2] = 0;
    HEAP32[i5 + 52 + 4 >> 2] = 0;
    HEAP32[i5 + 52 + 8 >> 2] = 0;
    i3 = i3 + 32 | 0;
   }
   i2 = HEAP32[i9 + 20 >> 2] | 0;
   i1 = i3;
  }
 }
 __ZNSt3__26vectorIN7todomvc4task4TaskENS_9allocatorIS3_EEE5eraseENS_11__wrap_iterIPKS3_EESA_(i9 + 16 | 0, i1, i2);
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i8 + 4 + 4 >> 2] = HEAP32[i9 + 4 + 4 >> 2];
 HEAP32[i8 + 4 + 8 >> 2] = HEAP32[i9 + 4 + 8 >> 2];
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 4 + 4 >> 2] = 0;
 HEAP32[i9 + 4 + 8 >> 2] = 0;
 HEAP32[i8 + 16 >> 2] = HEAP32[i9 + 16 >> 2];
 HEAP32[i8 + 20 >> 2] = HEAP32[i9 + 20 >> 2];
 HEAP32[i8 + 24 >> 2] = HEAP32[i9 + 24 >> 2];
 HEAP32[i9 + 24 >> 2] = 0;
 HEAP32[i9 + 20 >> 2] = 0;
 HEAP32[i9 + 16 >> 2] = 0;
 HEAP32[i8 + 28 >> 2] = HEAP32[i9 + 28 >> 2];
 STACKTOP = i9;
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EEclEOS8_(i7, i1, i2) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i6 + 4 + 4 >> 2] = HEAP32[i2 + 4 + 4 >> 2];
 HEAP32[i6 + 4 + 8 >> 2] = HEAP32[i2 + 4 + 8 >> 2];
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i2 + 4 + 4 >> 2] = 0;
 HEAP32[i2 + 4 + 8 >> 2] = 0;
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i6 + 16 >> 2] = i1;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i6 + 20 >> 2] = i5;
 HEAP32[i6 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i2 + 24 >> 2] = 0;
 HEAP32[i2 + 20 >> 2] = 0;
 HEAP32[i2 + 16 >> 2] = 0;
 HEAP32[i6 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 L1 : do if ((i1 | 0) == (i5 | 0)) i4 = 4; else while (1) {
  if (HEAP8[i1 + 16 >> 0] | 0) {
   i4 = 4;
   break L1;
  }
  i1 = i1 + 32 | 0;
  if ((i1 | 0) == (i5 | 0)) {
   i3 = i5;
   i1 = i5;
   break;
  }
 } while (0);
 if ((i4 | 0) == 4) {
  i2 = i1;
  if ((i1 | 0) == (i5 | 0)) {
   i3 = i5;
   i1 = i2;
  } else {
   i1 = i2;
   L7 : while (1) {
    do {
     i4 = i2;
     i2 = i4 + 32 | 0;
     if ((i4 + 32 | 0) == (i5 | 0)) break L7;
    } while ((HEAP8[i4 + 48 >> 0] | 0) != 0);
    HEAP32[i1 >> 2] = HEAP32[i4 + 32 >> 2];
    if ((HEAP8[i1 + 4 + 11 >> 0] | 0) < 0) {
     HEAP8[HEAP32[i1 + 4 >> 2] >> 0] = 0;
     HEAP32[i1 + 8 >> 2] = 0;
     i3 = i1 + 4 | 0;
    } else {
     HEAP8[i1 + 4 >> 0] = 0;
     HEAP8[i1 + 4 + 11 >> 0] = 0;
     i3 = i1 + 4 | 0;
    }
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj(i1 + 4 | 0);
    HEAP32[i3 >> 2] = HEAP32[i4 + 36 >> 2];
    HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 36 + 4 >> 2];
    HEAP32[i3 + 8 >> 2] = HEAP32[i4 + 36 + 8 >> 2];
    HEAP32[i4 + 36 >> 2] = 0;
    HEAP32[i4 + 36 + 4 >> 2] = 0;
    HEAP32[i4 + 36 + 8 >> 2] = 0;
    HEAP16[i1 + 16 >> 1] = HEAP16[i4 + 48 >> 1] | 0;
    if ((HEAP8[i1 + 28 + 3 >> 0] | 0) < 0) {
     HEAP32[HEAP32[i1 + 20 >> 2] >> 2] = 0;
     HEAP32[i1 + 24 >> 2] = 0;
    } else {
     HEAP32[i1 + 20 >> 2] = 0;
     HEAP8[i1 + 28 + 3 >> 0] = 0;
    }
    __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7reserveEj(i1 + 20 | 0);
    HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 52 >> 2];
    HEAP32[i1 + 20 + 4 >> 2] = HEAP32[i4 + 52 + 4 >> 2];
    HEAP32[i1 + 20 + 8 >> 2] = HEAP32[i4 + 52 + 8 >> 2];
    HEAP32[i4 + 52 >> 2] = 0;
    HEAP32[i4 + 52 + 4 >> 2] = 0;
    HEAP32[i4 + 52 + 8 >> 2] = 0;
    i1 = i1 + 32 | 0;
   }
   i3 = HEAP32[i6 + 20 >> 2] | 0;
  }
 }
 __ZNSt3__26vectorIN7todomvc4task4TaskENS_9allocatorIS3_EEE5eraseENS_11__wrap_iterIPKS3_EESA_(i6 + 16 | 0, i1, i3);
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i7 + 4 + 4 >> 2] = HEAP32[i6 + 4 + 4 >> 2];
 HEAP32[i7 + 4 + 8 >> 2] = HEAP32[i6 + 4 + 8 >> 2];
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 4 + 4 >> 2] = 0;
 HEAP32[i6 + 4 + 8 >> 2] = 0;
 HEAP32[i7 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
 HEAP32[i7 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
 HEAP32[i7 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
 HEAP32[i6 + 24 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i7 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
 STACKTOP = i6;
 return;
}

function ___get_locale(i10, i1) {
 i10 = i10 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 do if (!(HEAP8[i1 >> 0] | 0)) {
  i1 = _getenv(16091) | 0;
  if (i1 | 0) if (HEAP8[i1 >> 0] | 0) break;
  i1 = _getenv(16019 + (i10 * 12 | 0) | 0) | 0;
  if (i1 | 0) if (HEAP8[i1 >> 0] | 0) break;
  i1 = _getenv(16098) | 0;
  if (i1 | 0) if (HEAP8[i1 >> 0] | 0) break;
  i1 = 16103;
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
  i1 = 16103;
  i9 = 15;
 } else if (!(HEAP8[i1 + i2 >> 0] | 0)) if (i3 << 24 >> 24 == 67) i9 = 15; else i9 = 16; else {
  i1 = 16103;
  i9 = 15;
 }
 if ((i9 | 0) == 15) if (!(HEAP8[i1 + 1 >> 0] | 0)) i9 = 18; else i9 = 16;
 L22 : do if ((i9 | 0) == 16) if (!(_strcmp(i1, 16103) | 0)) i9 = 18; else if (!(_strcmp(i1, 16111) | 0)) i9 = 18; else {
  i3 = HEAP32[4469] | 0;
  if (i3 | 0) do {
   if (!(_strcmp(i1, i3 + 8 | 0) | 0)) {
    i1 = i3;
    break L22;
   }
   i3 = HEAP32[i3 + 24 >> 2] | 0;
  } while ((i3 | 0) != 0);
  ___lock(17880);
  i3 = HEAP32[4469] | 0;
  L32 : do if (i3 | 0) {
   while (1) {
    if (!(_strcmp(i1, i3 + 8 | 0) | 0)) break;
    i3 = HEAP32[i3 + 24 >> 2] | 0;
    if (!i3) break L32;
   }
   ___unlock(17880);
   i1 = i3;
   break L22;
  } while (0);
  L39 : do if (!(HEAP32[4448] | 0)) {
   i3 = _getenv(16117) | 0;
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
     HEAP32[i4 + 24 >> 2] = HEAP32[4469];
     HEAP32[4469] = i4;
     i1 = i4;
     break;
    }
   }
  } else i9 = 41; while (0);
  if ((i9 | 0) == 41) {
   i3 = _malloc(28) | 0;
   if (!i3) i1 = i3; else {
    HEAP32[i3 >> 2] = 3360;
    HEAP32[i3 + 4 >> 2] = 20;
    _memcpy(i3 + 8 | 0, i1 | 0, i2 | 0) | 0;
    HEAP8[i3 + 8 + i2 >> 0] = 0;
    HEAP32[i3 + 24 >> 2] = HEAP32[4469];
    HEAP32[4469] = i3;
    i1 = i3;
   }
  }
  ___unlock(17880);
  i1 = (i10 | 0) == 0 & (i1 | 0) == 0 ? 3332 : i1;
 } while (0);
 do if ((i9 | 0) == 18) {
  if (!i10) if ((HEAP8[i1 + 1 >> 0] | 0) == 46) {
   i1 = 3332;
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

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEEclEOSG_(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = 0.0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = __emval_new_cstring(8364) | 0;
 i1 = __emval_get_property(i4 | 0, i6 | 0) | 0;
 __emval_decref(i6 | 0);
 i6 = __emval_new_cstring(7335) | 0;
 i2 = __emval_get_property(i1 | 0, i6 | 0) | 0;
 __emval_decref(i6 | 0);
 d7 = +__emval_as(i2 | 0, 1272, i5 + 60 | 0);
 i6 = HEAP32[i5 + 60 >> 2] | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i5 + 36 | 0, ~~d7 >>> 0);
 __emval_run_destructors(i6 | 0);
 __ZN7todomvc7helpers15wstring_to_utf8ERKNSt3__212basic_stringIwNS1_11char_traitsIwEENS1_9allocatorIwEEEE(i5 + 48 | 0, i5 + 36 | 0);
 if ((HEAP8[i5 + 36 + 8 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 + 36 >> 2] | 0);
 __emval_decref(i2 | 0);
 __emval_decref(i1 | 0);
 i6 = __emval_new_cstring(8590) | 0;
 i1 = __emval_get_property(i4 | 0, i6 | 0) | 0;
 __emval_decref(i6 | 0);
 d7 = +__emval_as(i1 | 0, 2168, i5 + 60 | 0);
 __emval_run_destructors(HEAP32[i5 + 60 >> 2] | 0);
 if ((~~d7 | 0) == 13) {
  i6 = HEAP8[i5 + 48 + 11 >> 0] | 0;
  i2 = HEAP32[i5 + 48 + 4 >> 2] | 0;
  __emval_decref(i1 | 0);
  if (!((i6 << 24 >> 24 < 0 ? i2 : i6 & 255) | 0)) i1 = i5 + 48 + 11 | 0; else {
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5 + 24 | 0, i5 + 48 | 0);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5 + 60 | 0, i5 + 24 | 0);
   i1 = __Znwj(16) | 0;
   HEAP32[i1 >> 2] = 3112;
   HEAP32[i1 + 4 >> 2] = HEAP32[i5 + 60 >> 2];
   HEAP32[i1 + 4 + 4 >> 2] = HEAP32[i5 + 60 + 4 >> 2];
   HEAP32[i1 + 4 + 8 >> 2] = HEAP32[i5 + 60 + 8 >> 2];
   HEAP32[i5 + 16 >> 2] = i1;
   i1 = HEAP32[i3 + 24 >> 2] | 0;
   if (!i1) {
    i6 = ___cxa_allocate_exception(4) | 0;
    HEAP32[i6 >> 2] = 2272;
    ___cxa_throw(i6 | 0, 1024, 1);
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i5);
   i1 = HEAP32[i5 + 16 >> 2] | 0;
   if ((i1 | 0) == (i5 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
   if ((HEAP8[i5 + 24 + 11 >> 0] | 0) < 0) {
    __ZdlPv(HEAP32[i5 + 24 >> 2] | 0);
    i1 = i5 + 48 + 11 | 0;
   } else i1 = i5 + 48 + 11 | 0;
  }
 } else {
  __emval_decref(i1 | 0);
  i1 = i5 + 48 + 11 | 0;
 }
 if ((HEAP8[i1 >> 0] | 0) >= 0) {
  __emval_decref(i4 | 0);
  STACKTOP = i5;
  return 1;
 }
 __ZdlPv(HEAP32[i5 + 48 >> 2] | 0);
 __emval_decref(i4 | 0);
 STACKTOP = i5;
 return 1;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEEclEOSE_(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = 0.0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = __emval_new_cstring(8364) | 0;
 i1 = __emval_get_property(i4 | 0, i6 | 0) | 0;
 __emval_decref(i6 | 0);
 i6 = __emval_new_cstring(7335) | 0;
 i2 = __emval_get_property(i1 | 0, i6 | 0) | 0;
 __emval_decref(i6 | 0);
 d7 = +__emval_as(i2 | 0, 1272, i5 + 60 | 0);
 i6 = HEAP32[i5 + 60 >> 2] | 0;
 __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE12fromWireTypeEPNS9_Ut_E(i5 + 36 | 0, ~~d7 >>> 0);
 __emval_run_destructors(i6 | 0);
 __ZN7todomvc7helpers15wstring_to_utf8ERKNSt3__212basic_stringIwNS1_11char_traitsIwEENS1_9allocatorIwEEEE(i5 + 48 | 0, i5 + 36 | 0);
 if ((HEAP8[i5 + 36 + 8 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i5 + 36 >> 2] | 0);
 __emval_decref(i2 | 0);
 __emval_decref(i1 | 0);
 i6 = __emval_new_cstring(8590) | 0;
 i1 = __emval_get_property(i4 | 0, i6 | 0) | 0;
 __emval_decref(i6 | 0);
 d7 = +__emval_as(i1 | 0, 2168, i5 + 60 | 0);
 __emval_run_destructors(HEAP32[i5 + 60 >> 2] | 0);
 if ((~~d7 | 0) == 13) {
  i6 = HEAP8[i5 + 48 + 11 >> 0] | 0;
  i2 = HEAP32[i5 + 48 + 4 >> 2] | 0;
  __emval_decref(i1 | 0);
  if (!((i6 << 24 >> 24 < 0 ? i2 : i6 & 255) | 0)) i1 = i5 + 48 + 11 | 0; else {
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5 + 24 | 0, i5 + 48 | 0);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5 + 60 | 0, i5 + 24 | 0);
   i1 = __Znwj(16) | 0;
   HEAP32[i1 >> 2] = 2792;
   HEAP32[i1 + 4 >> 2] = HEAP32[i5 + 60 >> 2];
   HEAP32[i1 + 4 + 4 >> 2] = HEAP32[i5 + 60 + 4 >> 2];
   HEAP32[i1 + 4 + 8 >> 2] = HEAP32[i5 + 60 + 8 >> 2];
   HEAP32[i5 + 16 >> 2] = i1;
   i1 = HEAP32[i3 + 24 >> 2] | 0;
   if (!i1) {
    i6 = ___cxa_allocate_exception(4) | 0;
    HEAP32[i6 >> 2] = 2272;
    ___cxa_throw(i6 | 0, 1024, 1);
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i5);
   i1 = HEAP32[i5 + 16 >> 2] | 0;
   if ((i1 | 0) == (i5 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1); else if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
   if ((HEAP8[i5 + 24 + 11 >> 0] | 0) < 0) {
    __ZdlPv(HEAP32[i5 + 24 >> 2] | 0);
    i1 = i5 + 48 + 11 | 0;
   } else i1 = i5 + 48 + 11 | 0;
  }
 } else {
  __emval_decref(i1 | 0);
  i1 = i5 + 48 + 11 | 0;
 }
 if ((HEAP8[i1 >> 0] | 0) >= 0) {
  __emval_decref(i4 | 0);
  STACKTOP = i5;
  return 1;
 }
 __ZdlPv(HEAP32[i5 + 48 >> 2] | 0);
 __emval_decref(i4 | 0);
 STACKTOP = i5;
 return 1;
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

function __ZNSt3__26vectorIN7todomvc4task4TaskENS_9allocatorIS3_EEE21__push_back_slow_pathIRKS3_EEvOT_(i8, i3) {
 i8 = i8 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0;
 i1 = HEAP32[i8 >> 2] | 0;
 i4 = (HEAP32[i8 + 4 >> 2] | 0) - i1 >> 5;
 if ((i4 + 1 | 0) >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
 i1 = (HEAP32[i8 + 8 >> 2] | 0) - i1 | 0;
 i1 = i1 >> 5 >>> 0 < 67108863 ? (i1 >> 4 >>> 0 < (i4 + 1 | 0) >>> 0 ? i4 + 1 | 0 : i1 >> 4) : 134217727;
 do if (!i1) i2 = 0; else if (i1 >>> 0 > 134217727) {
  i8 = ___cxa_allocate_exception(8) | 0;
  __ZNSt11logic_errorC2EPKc(i8, 8697);
  HEAP32[i8 >> 2] = 4420;
  ___cxa_throw(i8 | 0, 2008, 95);
 } else {
  i2 = __Znwj(i1 << 5) | 0;
  break;
 } while (0);
 i7 = i2 + (i4 << 5) | 0;
 i6 = i2 + (i1 << 5) | 0;
 HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + (i4 << 5) + 4 | 0, i3 + 4 | 0);
 HEAP16[i2 + (i4 << 5) + 16 >> 1] = HEAP16[i3 + 16 >> 1] | 0;
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + (i4 << 5) + 20 | 0, i3 + 20 | 0);
 i5 = HEAP32[i8 >> 2] | 0;
 i1 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i1 | 0) == (i5 | 0)) {
  i2 = i7;
  i4 = i5;
  i1 = i5;
 } else {
  i3 = i7;
  i2 = i7;
  do {
   i4 = i1;
   i1 = i1 + -32 | 0;
   HEAP32[i3 + -32 >> 2] = HEAP32[i1 >> 2];
   i9 = i3 + -28 | 0;
   HEAP32[i9 >> 2] = HEAP32[i4 + -28 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i4 + -28 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i4 + -28 + 8 >> 2];
   HEAP32[i4 + -28 >> 2] = 0;
   HEAP32[i4 + -28 + 4 >> 2] = 0;
   HEAP32[i4 + -28 + 8 >> 2] = 0;
   HEAP16[i3 + -16 >> 1] = HEAP16[i4 + -16 >> 1] | 0;
   i9 = i3 + -12 | 0;
   HEAP32[i9 >> 2] = HEAP32[i4 + -12 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i4 + -12 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i4 + -12 + 8 >> 2];
   HEAP32[i4 + -12 >> 2] = 0;
   HEAP32[i4 + -12 + 4 >> 2] = 0;
   HEAP32[i4 + -12 + 8 >> 2] = 0;
   i3 = i2 + -32 | 0;
   i2 = i3;
  } while ((i1 | 0) != (i5 | 0));
  i4 = HEAP32[i8 >> 2] | 0;
  i1 = HEAP32[i8 + 4 >> 2] | 0;
 }
 HEAP32[i8 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = i7 + 32;
 HEAP32[i8 + 8 >> 2] = i6;
 i3 = i4;
 if ((i1 | 0) != (i3 | 0)) do {
  if ((HEAP8[i1 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 + -12 >> 2] | 0);
  i2 = i1 + -28 | 0;
  i1 = i1 + -32 | 0;
  if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
 } while ((i1 | 0) != (i3 | 0));
 if (!i4) return;
 __ZdlPv(i4);
 return;
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

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEERPNS_15__tree_end_nodeISJ_EERKT_(i3, i9, i1) {
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

function __ZNSt3__26vectorIN7todomvc4task4TaskENS_9allocatorIS3_EEE5eraseENS_11__wrap_iterIPKS3_EESA_(i7, i2, i1) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == (i1 | 0)) return;
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 if ((i6 | 0) != (i1 | 0)) {
  do {
   HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
   i4 = i2 + 4 | 0;
   i5 = i1 + 4 | 0;
   if ((HEAP8[i4 + 11 >> 0] | 0) < 0) {
    HEAP8[HEAP32[i4 >> 2] >> 0] = 0;
    HEAP32[i2 + 8 >> 2] = 0;
    i3 = i4;
   } else {
    HEAP8[i4 >> 0] = 0;
    HEAP8[i4 + 11 >> 0] = 0;
    i3 = i4;
   }
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj(i4);
   HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   HEAP32[i3 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
   HEAP32[i5 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   HEAP32[i5 + 8 >> 2] = 0;
   HEAP16[i2 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
   i4 = i2 + 20 | 0;
   i5 = i1 + 20 | 0;
   i3 = i2 + 28 + 3 | 0;
   if ((HEAP8[i3 >> 0] | 0) < 0) {
    HEAP32[HEAP32[i4 >> 2] >> 2] = 0;
    HEAP32[i2 + 24 >> 2] = 0;
   } else {
    HEAP32[i4 >> 2] = 0;
    HEAP8[i3 >> 0] = 0;
   }
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7reserveEj(i4);
   HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   HEAP32[i4 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
   HEAP32[i5 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   HEAP32[i5 + 8 >> 2] = 0;
   i1 = i1 + 32 | 0;
   i2 = i2 + 32 | 0;
  } while ((i1 | 0) != (i6 | 0));
  i1 = HEAP32[i7 + 4 >> 2] | 0;
 }
 if ((i1 | 0) == (i2 | 0)) return;
 do {
  HEAP32[i7 + 4 >> 2] = i1 + -32;
  if ((HEAP8[i1 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 + -12 >> 2] | 0);
  i1 = i1 + -28 | 0;
  if ((HEAP8[i1 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 >> 2] | 0);
  i1 = HEAP32[i7 + 4 >> 2] | 0;
 } while ((i1 | 0) != (i2 | 0));
 return;
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

function __GLOBAL__sub_I_bind_cpp() {
 __embind_register_void(2104, 17137);
 __embind_register_bool(2120, 17142, 1, 1, 0);
 __embind_register_integer(2128, 17082, 1, -128, 127);
 __embind_register_integer(2144, 17087, 1, -128, 127);
 __embind_register_integer(2136, 17099, 1, 0, 255);
 __embind_register_integer(2152, 17113, 2, -32768, 32767);
 __embind_register_integer(2160, 17119, 2, 0, 65535);
 __embind_register_integer(2168, 17147, 4, -2147483648, 2147483647);
 __embind_register_integer(2176, 17151, 4, 0, -1);
 __embind_register_integer(2184, 17164, 4, -2147483648, 2147483647);
 __embind_register_integer(2192, 17169, 4, 0, -1);
 __embind_register_float(2200, 17183, 4);
 __embind_register_float(2208, 17189, 8);
 __embind_register_std_string(1048, 17064);
 __embind_register_std_string(1712, 12493);
 __embind_register_std_wstring(1272, 4, 12526);
 __embind_register_emval(1040, 12539);
 __embind_register_memory_view(1736, 0, 12555);
 __embind_register_memory_view(1744, 0, 12585);
 __embind_register_memory_view(1752, 1, 12622);
 __embind_register_memory_view(1760, 2, 12661);
 __embind_register_memory_view(1768, 3, 12692);
 __embind_register_memory_view(1776, 4, 12732);
 __embind_register_memory_view(1784, 5, 12761);
 __embind_register_memory_view(1792, 4, 12799);
 __embind_register_memory_view(1800, 5, 12829);
 __embind_register_memory_view(1744, 0, 12868);
 __embind_register_memory_view(1752, 1, 12900);
 __embind_register_memory_view(1760, 2, 12933);
 __embind_register_memory_view(1768, 3, 12966);
 __embind_register_memory_view(1776, 4, 13e3);
 __embind_register_memory_view(1784, 5, 13033);
 __embind_register_memory_view(1808, 6, 13067);
 __embind_register_memory_view(1816, 7, 13098);
 __embind_register_memory_view(1824, 7, 13130);
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

function _mbrtowc(i2, i3, i7, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i7 = i7 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = (i1 | 0) == 0 ? 17872 : i1;
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
    if (!(HEAP32[HEAP32[1149] >> 2] | 0)) {
     HEAP32[i5 >> 2] = i1 << 24 >> 24 & 57343;
     i1 = 1;
     break;
    }
    if (((i1 & 255) + -194 | 0) >>> 0 > 50) {
     i8 = 17;
     break;
    }
    i1 = HEAP32[3404 + ((i1 & 255) + -194 << 2) >> 2] | 0;
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
  HEAP32[4478] = 84;
  i1 = -1;
 }
 STACKTOP = i9;
 return i1 | 0;
}

function __ZNKSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE7__cloneEv(i5) {
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0;
 i4 = __Znwj(36) | 0;
 HEAP32[i4 >> 2] = 2352;
 HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4 + 8 | 0, i5 + 8 | 0);
 HEAP32[i4 + 20 >> 2] = 0;
 HEAP32[i4 + 24 >> 2] = 0;
 HEAP32[i4 + 28 >> 2] = 0;
 i1 = (HEAP32[i5 + 24 >> 2] | 0) - (HEAP32[i5 + 20 >> 2] | 0) | 0;
 if (!(i1 >> 5)) {
  i3 = i4 + 32 | 0;
  i5 = i5 + 32 | 0;
  i5 = HEAP32[i5 >> 2] | 0;
  HEAP32[i3 >> 2] = i5;
  return i4 | 0;
 }
 if (i1 >> 5 >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
 i2 = __Znwj(i1) | 0;
 HEAP32[i4 + 24 >> 2] = i2;
 HEAP32[i4 + 20 >> 2] = i2;
 HEAP32[i4 + 28 >> 2] = i2 + (i1 >> 5 << 5);
 i1 = HEAP32[i5 + 20 >> 2] | 0;
 i3 = HEAP32[i5 + 24 >> 2] | 0;
 if ((i1 | 0) == (i3 | 0)) {
  i3 = i4 + 32 | 0;
  i5 = i5 + 32 | 0;
  i5 = HEAP32[i5 >> 2] | 0;
  HEAP32[i3 >> 2] = i5;
  return i4 | 0;
 }
 do {
  HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
  HEAP16[i2 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
  __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + 20 | 0);
  i1 = i1 + 32 | 0;
  i2 = (HEAP32[i4 + 24 >> 2] | 0) + 32 | 0;
  HEAP32[i4 + 24 >> 2] = i2;
 } while ((i1 | 0) != (i3 | 0));
 i3 = i4 + 32 | 0;
 i5 = i5 + 32 | 0;
 i5 = HEAP32[i5 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 return i4 | 0;
}

function __ZNKSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE7__cloneEPNS0_6__baseISB_EE(i5, i4) {
 i5 = i5 | 0;
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 HEAP32[i4 >> 2] = 2352;
 HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4 + 8 | 0, i5 + 8 | 0);
 HEAP32[i4 + 20 >> 2] = 0;
 HEAP32[i4 + 24 >> 2] = 0;
 HEAP32[i4 + 28 >> 2] = 0;
 i1 = (HEAP32[i5 + 24 >> 2] | 0) - (HEAP32[i5 + 20 >> 2] | 0) | 0;
 if (!(i1 >> 5)) {
  i4 = i4 + 32 | 0;
  i5 = i5 + 32 | 0;
  i5 = HEAP32[i5 >> 2] | 0;
  HEAP32[i4 >> 2] = i5;
  return;
 }
 if (i1 >> 5 >>> 0 > 134217727) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
 i2 = __Znwj(i1) | 0;
 HEAP32[i4 + 24 >> 2] = i2;
 HEAP32[i4 + 20 >> 2] = i2;
 HEAP32[i4 + 28 >> 2] = i2 + (i1 >> 5 << 5);
 i1 = HEAP32[i5 + 20 >> 2] | 0;
 i3 = HEAP32[i5 + 24 >> 2] | 0;
 if ((i1 | 0) == (i3 | 0)) {
  i4 = i4 + 32 | 0;
  i5 = i5 + 32 | 0;
  i5 = HEAP32[i5 >> 2] | 0;
  HEAP32[i4 >> 2] = i5;
  return;
 }
 do {
  HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
  HEAP16[i2 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
  __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 20 | 0, i1 + 20 | 0);
  i1 = i1 + 32 | 0;
  i2 = (HEAP32[i4 + 24 >> 2] | 0) + 32 | 0;
  HEAP32[i4 + 24 >> 2] = i2;
 } while ((i1 | 0) != (i3 | 0));
 i4 = i4 + 32 | 0;
 i5 = i5 + 32 | 0;
 i5 = HEAP32[i5 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EEclEOSD_(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i4 + 4 + 4 >> 2] = HEAP32[i1 + 4 + 4 >> 2];
 HEAP32[i4 + 4 + 8 >> 2] = HEAP32[i1 + 4 + 8 >> 2];
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 8 >> 2] = 0;
 HEAP16[i4 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
 HEAP32[i4 + 20 >> 2] = HEAP32[i1 + 20 >> 2];
 HEAP32[i4 + 20 + 4 >> 2] = HEAP32[i1 + 20 + 4 >> 2];
 HEAP32[i4 + 20 + 8 >> 2] = HEAP32[i1 + 20 + 8 >> 2];
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 20 + 4 >> 2] = 0;
 HEAP32[i1 + 20 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i4 + 4 | 0, i3 + 4 | 0) | 0;
 HEAP8[i4 + 17 >> 0] = 0;
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6assignEPKw(i4 + 20 | 0) | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i2 + 4 + 4 >> 2] = HEAP32[i4 + 4 + 4 >> 2];
 HEAP32[i2 + 4 + 8 >> 2] = HEAP32[i4 + 4 + 8 >> 2];
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 4 + 4 >> 2] = 0;
 HEAP32[i4 + 4 + 8 >> 2] = 0;
 HEAP16[i2 + 16 >> 1] = HEAP16[i4 + 16 >> 1] | 0;
 HEAP32[i2 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i2 + 20 + 4 >> 2] = HEAP32[i4 + 20 + 4 >> 2];
 HEAP32[i2 + 20 + 8 >> 2] = HEAP32[i4 + 20 + 8 >> 2];
 STACKTOP = i4;
 return;
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
  i3 = ___dynamic_cast(i1, 2072) | 0;
  if (!i3) i1 = 0; else if (!(HEAP32[i3 + 8 >> 2] & ~HEAP32[i2 + 8 >> 2])) {
   i1 = HEAP32[i2 + 12 >> 2] | 0;
   if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, HEAP32[i3 + 12 >> 2] | 0) | 0) i1 = 1; else if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, 2104) | 0) i1 = 1; else if (!i1) i1 = 0; else {
    i4 = ___dynamic_cast(i1, 1920) | 0;
    if (!i4) i1 = 0; else {
     i1 = HEAP32[i3 + 12 >> 2] | 0;
     if (!i1) i1 = 0; else {
      i1 = ___dynamic_cast(i1, 1920) | 0;
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

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EEclEOS8_(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i4 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP16[i4 + 8 + 4 >> 1] = HEAP16[i1 + 8 + 4 >> 1] | 0;
 HEAP8[i4 + 8 + 6 >> 0] = HEAP8[i1 + 8 + 6 >> 0] | 0;
 i7 = HEAP8[i1 + 15 >> 0] | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 8 >> 2] = 0;
 i10 = HEAP16[i1 + 16 >> 1] | 0;
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 + 24 >> 2];
 HEAP16[i4 + 4 >> 1] = HEAP16[i1 + 24 + 4 >> 1] | 0;
 HEAP8[i4 + 6 >> 0] = HEAP8[i1 + 24 + 6 >> 0] | 0;
 i5 = HEAP8[i1 + 31 >> 0] | 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 20 + 4 >> 2] = 0;
 HEAP32[i1 + 20 + 8 >> 2] = 0;
 i3 = HEAPU8[i3 + 4 >> 0] | 0 | i10 & -256;
 HEAP32[i2 >> 2] = i9;
 HEAP32[i2 + 4 >> 2] = i8;
 HEAP32[i2 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP16[i2 + 8 + 4 >> 1] = HEAP16[i4 + 8 + 4 >> 1] | 0;
 HEAP8[i2 + 8 + 6 >> 0] = HEAP8[i4 + 8 + 6 >> 0] | 0;
 HEAP8[i2 + 15 >> 0] = i7;
 HEAP16[i2 + 16 >> 1] = i3;
 HEAP32[i2 + 20 >> 2] = i6;
 HEAP32[i2 + 24 >> 2] = HEAP32[i4 >> 2];
 HEAP16[i2 + 24 + 4 >> 1] = HEAP16[i4 + 4 >> 1] | 0;
 HEAP8[i2 + 24 + 6 >> 0] = HEAP8[i4 + 6 >> 0] | 0;
 HEAP8[i2 + 31 >> 0] = i5;
 STACKTOP = i4;
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
 HEAP32[i6 + 8 >> 2] = 1936;
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

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EEclEOS8_(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 4 + 4 >> 2] = HEAP32[i1 + 4 + 4 >> 2];
 HEAP32[i3 + 4 + 8 >> 2] = HEAP32[i1 + 4 + 8 >> 2];
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 8 >> 2] = 0;
 HEAP16[i3 + 16 >> 1] = HEAP16[i1 + 16 >> 1] | 0;
 HEAP32[i3 + 20 >> 2] = HEAP32[i1 + 20 >> 2];
 HEAP32[i3 + 20 + 4 >> 2] = HEAP32[i1 + 20 + 4 >> 2];
 HEAP32[i3 + 20 + 8 >> 2] = HEAP32[i1 + 20 + 8 >> 2];
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 20 + 4 >> 2] = 0;
 HEAP32[i1 + 20 + 8 >> 2] = 0;
 HEAP8[i3 + 17 >> 0] = 0;
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6assignEPKw(i3 + 20 | 0) | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i2 + 4 + 4 >> 2] = HEAP32[i3 + 4 + 4 >> 2];
 HEAP32[i2 + 4 + 8 >> 2] = HEAP32[i3 + 4 + 8 >> 2];
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 4 + 4 >> 2] = 0;
 HEAP32[i3 + 4 + 8 >> 2] = 0;
 HEAP16[i2 + 16 >> 1] = HEAP16[i3 + 16 >> 1] | 0;
 HEAP32[i2 + 20 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i2 + 20 + 4 >> 2] = HEAP32[i3 + 20 + 4 >> 2];
 HEAP32[i2 + 20 + 8 >> 2] = HEAP32[i3 + 20 + 8 >> 2];
 STACKTOP = i3;
 return;
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

function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7reserveEj(i7) {
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP8[i7 + 8 + 3 >> 0] | 0;
 if (i3 << 24 >> 24 < 0) {
  i6 = HEAP32[i7 + 4 >> 2] | 0;
  i2 = (HEAP32[i7 + 8 >> 2] & 2147483647) + -1 | 0;
 } else {
  i6 = i3 & 255;
  i2 = 1;
 }
 i1 = i6 >>> 0 < 2;
 i5 = i1 ? 1 : (i6 + 4 & -4) + -1 | 0;
 do if ((i5 | 0) != (i2 | 0)) {
  do if (i1) {
   i2 = HEAP32[i7 >> 2] | 0;
   if (i3 << 24 >> 24 < 0) {
    i1 = i7;
    i3 = 0;
    i4 = 12;
   } else {
    __ZNSt3__211char_traitsIwE4copyEPwPKwj(i7, i2, (i3 & 255) + 1 | 0);
    __ZdlPv(i2);
    i4 = 14;
   }
  } else {
   if ((i5 + 1 | 0) >>> 0 > 1073741823) _abort();
   i1 = __Znwj(i5 + 1 << 2) | 0;
   if (i3 << 24 >> 24 < 0) {
    i3 = 1;
    i2 = HEAP32[i7 >> 2] | 0;
    i4 = 12;
    break;
   } else {
    __ZNSt3__211char_traitsIwE4copyEPwPKwj(i1, i7, (i3 & 255) + 1 | 0);
    i4 = 13;
    break;
   }
  } while (0);
  if ((i4 | 0) == 12) {
   __ZNSt3__211char_traitsIwE4copyEPwPKwj(i1, i2, (HEAP32[i7 + 4 >> 2] | 0) + 1 | 0);
   __ZdlPv(i2);
   if (i3) i4 = 13; else i4 = 14;
  }
  if ((i4 | 0) == 13) {
   HEAP32[i7 + 8 >> 2] = i5 + 1 | -2147483648;
   HEAP32[i7 + 4 >> 2] = i6;
   HEAP32[i7 >> 2] = i1;
   break;
  } else if ((i4 | 0) == 14) {
   HEAP8[i7 + 8 + 3 >> 0] = i6;
   break;
  }
 } while (0);
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

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj(i7) {
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP8[i7 + 11 >> 0] | 0;
 if (i3 << 24 >> 24 < 0) {
  i6 = HEAP32[i7 + 4 >> 2] | 0;
  i2 = (HEAP32[i7 + 8 >> 2] & 2147483647) + -1 | 0;
 } else {
  i6 = i3 & 255;
  i2 = 10;
 }
 i1 = i6 >>> 0 < 11;
 i5 = i1 ? 10 : (i6 + 16 & -16) + -1 | 0;
 do if ((i5 | 0) != (i2 | 0)) {
  do if (i1) {
   i2 = HEAP32[i7 >> 2] | 0;
   if (i3 << 24 >> 24 < 0) {
    i1 = i7;
    i3 = 0;
    i4 = 10;
   } else {
    __ZNSt3__211char_traitsIcE4copyEPcPKcj(i7, i2, (i3 & 255) + 1 | 0) | 0;
    __ZdlPv(i2);
    i4 = 12;
   }
  } else {
   i1 = __Znwj(i5 + 1 | 0) | 0;
   if (i3 << 24 >> 24 < 0) {
    i3 = 1;
    i2 = HEAP32[i7 >> 2] | 0;
    i4 = 10;
    break;
   } else {
    __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1, i7, (i3 & 255) + 1 | 0) | 0;
    i4 = 11;
    break;
   }
  } while (0);
  if ((i4 | 0) == 10) {
   __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1, i2, (HEAP32[i7 + 4 >> 2] | 0) + 1 | 0) | 0;
   __ZdlPv(i2);
   if (i3) i4 = 11; else i4 = 12;
  }
  if ((i4 | 0) == 11) {
   HEAP32[i7 + 8 >> 2] = i5 + 1 | -2147483648;
   HEAP32[i7 + 4 >> 2] = i6;
   HEAP32[i7 >> 2] = i1;
   break;
  } else if ((i4 | 0) == 12) {
   HEAP8[i7 + 11 >> 0] = i6;
   break;
  }
 } while (0);
 return;
}

function __Z12onhashchangeNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i1 = HEAP8[i3 + 11 >> 0] | 0;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 if (((i1 << 24 >> 24 < 0 ? i2 : i1 & 255) | 0) == 9) if (!(__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i3, 7003, 9) | 0)) i1 = 0; else {
  i1 = HEAP8[i3 + 11 >> 0] | 0;
  i2 = HEAP32[i3 + 4 >> 2] | 0;
  i4 = 4;
 } else i4 = 4;
 if ((i4 | 0) == 4) if (((i1 << 24 >> 24 < 0 ? i2 : i1 & 255) | 0) == 6) {
  i1 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i3, 7013, 6) | 0) == 0;
  i1 = i1 ? 1 : 2;
 } else i1 = 2;
 HEAP32[i5 >> 2] = 2308;
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP32[i5 + 16 >> 2] = i5;
 i1 = HEAP32[4308] | 0;
 if (!i1) {
  i5 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i5 >> 2] = 2272;
  ___cxa_throw(i5 | 0, 1024, 1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i5);
 i1 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i1 | 0) == (i5 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  STACKTOP = i5;
  return;
 }
 if (!i1) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 STACKTOP = i5;
 return;
}

function __ZN6asmdom4DataD2Ev(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = HEAP32[i4 + 48 >> 2] | 0;
 if (i1 | 0) do {
  i3 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  i2 = HEAP32[i3 + 40 >> 2] | 0;
  if ((i2 | 0) == (i3 + 24 | 0)) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2); else if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
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

function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE21__grow_by_and_replaceEjjjjjjPKw(i10, i5, i1, i6, i3, i4, i2, i7) {
 i10 = i10 | 0;
 i5 = i5 | 0;
 i1 = i1 | 0;
 i6 = i6 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0;
 if ((1073741806 - i5 | 0) >>> 0 < i1 >>> 0) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if ((HEAP8[i10 + 8 + 3 >> 0] | 0) < 0) i9 = HEAP32[i10 >> 2] | 0; else i9 = i10;
 if (i5 >>> 0 < 536870887) {
  i1 = (i1 + i5 | 0) >>> 0 < i5 << 1 >>> 0 ? i5 << 1 : i1 + i5 | 0;
  i1 = i1 >>> 0 < 2 ? 2 : i1 + 4 & -4;
  if (i1 >>> 0 > 1073741823) _abort(); else i8 = i1;
 } else i8 = 1073741807;
 i1 = __Znwj(i8 << 2) | 0;
 if (i3 | 0) __ZNSt3__211char_traitsIwE4copyEPwPKwj(i1, i9, i3);
 if (i2 | 0) __ZNSt3__211char_traitsIwE4copyEPwPKwj(i1 + (i3 << 2) | 0, i7, i2);
 if (i6 - i4 - i3 | 0) __ZNSt3__211char_traitsIwE4copyEPwPKwj(i1 + (i3 << 2) + (i2 << 2) | 0, i9 + (i3 << 2) + (i4 << 2) | 0, i6 - i4 - i3 | 0);
 if ((i5 | 0) != 1) __ZdlPv(i9);
 HEAP32[i10 >> 2] = i1;
 HEAP32[i10 + 8 >> 2] = i8 | -2147483648;
 HEAP32[i10 + 4 >> 2] = i6 - i4 + i2;
 __ZNSt3__211char_traitsIwE6assignERwRKw(i1 + (i6 - i4 + i2 << 2) | 0, 0);
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
 if (((i2 << 24 >> 24 < 0 ? HEAP32[i3 + 4 >> 2] | 0 : i2 & 255) | 0) == 13) if (!(__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj(i3, 4798, 13) | 0)) {
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EEclEOS9_(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP16[i4 + 4 >> 1] = HEAP16[i1 + 8 + 4 >> 1] | 0;
 HEAP8[i4 + 6 >> 0] = HEAP8[i1 + 8 + 6 >> 0] | 0;
 i8 = HEAP8[i1 + 15 >> 0] | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 4 >> 2] = 0;
 HEAP32[i1 + 4 + 8 >> 2] = 0;
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 i3 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i10;
 HEAP32[i2 + 4 >> 2] = i9;
 HEAP32[i2 + 8 >> 2] = HEAP32[i4 >> 2];
 HEAP16[i2 + 8 + 4 >> 1] = HEAP16[i4 + 4 >> 1] | 0;
 HEAP8[i2 + 8 + 6 >> 0] = HEAP8[i4 + 6 >> 0] | 0;
 HEAP8[i2 + 15 >> 0] = i8;
 HEAP32[i2 + 16 >> 2] = i7;
 HEAP32[i2 + 20 >> 2] = i6;
 HEAP32[i2 + 24 >> 2] = i5;
 HEAP32[i2 + 28 >> 2] = i3;
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
    HEAP32[i4 + 24 >> 2] = 16416;
    _abort_message(16366, i4 + 24 | 0);
   }
   if ((i1 | 0) == 1126902529 & (i2 | 0) == 1129074247) i1 = HEAP32[i3 + 44 >> 2] | 0; else i1 = i3 + 80 | 0;
   HEAP32[i4 + 36 >> 2] = i1;
   i3 = HEAP32[i3 >> 2] | 0;
   i1 = HEAP32[i3 + 4 >> 2] | 0;
   if (__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(1912, i3, i4 + 36 | 0) | 0) {
    i3 = HEAP32[i4 + 36 >> 2] | 0;
    i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3) | 0;
    HEAP32[i4 >> 2] = 16416;
    HEAP32[i4 + 4 >> 2] = i1;
    HEAP32[i4 + 8 >> 2] = i3;
    _abort_message(16280, i4);
   } else {
    HEAP32[i4 + 16 >> 2] = 16416;
    HEAP32[i4 + 16 + 4 >> 2] = i1;
    _abort_message(16325, i4 + 16 | 0);
   }
  }
 }
 _abort_message(16404, i4 + 32 | 0);
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

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEEclEOSG_(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = (__ZN7todomvc4task13targetCheckedERN10emscripten3valE(i3) | 0) & 1;
 HEAP32[i4 >> 2] = 2748;
 HEAP8[i4 + 4 >> 0] = i1;
 HEAP32[i4 + 16 >> 2] = i4;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if (!i1) {
  i4 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i4 >> 2] = 2272;
  ___cxa_throw(i4 | 0, 1024, 1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i4);
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __emval_decref(i3 | 0);
  STACKTOP = i4;
  return 1;
 }
 if (!i1) {
  __emval_decref(i3 | 0);
  STACKTOP = i4;
  return 1;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __emval_decref(i3 | 0);
 STACKTOP = i4;
 return 1;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEEclEOSE_(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = (__ZN7todomvc4task13targetCheckedERN10emscripten3valE(i3) | 0) & 1;
 HEAP32[i4 >> 2] = 2704;
 HEAP8[i4 + 4 >> 0] = i1;
 HEAP32[i4 + 16 >> 2] = i4;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if (!i1) {
  i4 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i4 >> 2] = 2272;
  ___cxa_throw(i4 | 0, 1024, 1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i4);
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __emval_decref(i3 | 0);
  STACKTOP = i4;
  return 1;
 }
 if (!i1) {
  __emval_decref(i3 | 0);
  STACKTOP = i4;
  return 1;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __emval_decref(i3 | 0);
 STACKTOP = i4;
 return 1;
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

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEjPKcj(i7, i1, i5) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i6 = 0;
 i2 = HEAP8[i7 + 11 >> 0] | 0;
 if (i2 << 24 >> 24 < 0) {
  i4 = HEAP32[i7 + 4 >> 2] | 0;
  i3 = (HEAP32[i7 + 8 >> 2] & 2147483647) + -1 | 0;
 } else {
  i4 = i2 & 255;
  i3 = 10;
 }
 i6 = i4 + i5 | 0;
 if ((i3 - i4 | 0) >>> 0 < i5 >>> 0) __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(i7, i3, i6 - i3 | 0, i4, 0, 0, i5, i1); else if (i5 | 0) {
  if (i2 << 24 >> 24 < 0) i2 = HEAP32[i7 >> 2] | 0; else i2 = i7;
  if (i4) {
   __ZNSt3__211char_traitsIcE4moveEPcPKcj(i2 + i5 | 0, i2, i4) | 0;
   i1 = i2 >>> 0 <= i1 >>> 0 & (i2 + i4 | 0) >>> 0 > i1 >>> 0 ? i1 + i5 | 0 : i1;
  }
  __ZNSt3__211char_traitsIcE4moveEPcPKcj(i2, i1, i5) | 0;
  if ((HEAP8[i7 + 11 >> 0] | 0) < 0) HEAP32[i7 + 4 >> 2] = i6; else HEAP8[i7 + 11 >> 0] = i6;
  __ZNSt3__211char_traitsIcE6assignERcRKc(i2 + i6 | 0, 0);
 }
 return i7 | 0;
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
  __ZNSt11logic_errorC2EPKc(i3, 8697);
  HEAP32[i3 >> 2] = 4420;
  ___cxa_throw(i3 | 0, 2008, 95);
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

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEEclEOSG_(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i1 = HEAP32[i1 + 24 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = 3156;
 HEAP32[i4 + 16 >> 2] = i4;
 if (!i1) {
  i4 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i4 >> 2] = 2272;
  ___cxa_throw(i4 | 0, 1024, 1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i4);
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  i3 = i2;
  __emval_decref(i3 | 0);
  STACKTOP = i4;
  return 1;
 }
 if (!i1) {
  i3 = i2;
  __emval_decref(i3 | 0);
  STACKTOP = i4;
  return 1;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 i3 = i2;
 __emval_decref(i3 | 0);
 STACKTOP = i4;
 return 1;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEEclEOSG_(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i1 = HEAP32[i1 + 24 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = 3200;
 HEAP32[i4 + 16 >> 2] = i4;
 if (!i1) {
  i4 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i4 >> 2] = 2272;
  ___cxa_throw(i4 | 0, 1024, 1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i4);
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  i3 = i2;
  __emval_decref(i3 | 0);
  STACKTOP = i4;
  return 1;
 }
 if (!i1) {
  i3 = i2;
  __emval_decref(i3 | 0);
  STACKTOP = i4;
  return 1;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 i3 = i2;
 __emval_decref(i3 | 0);
 STACKTOP = i4;
 return 1;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEEclEOSE_(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i1 = HEAP32[i1 + 24 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = 2660;
 HEAP32[i4 + 16 >> 2] = i4;
 if (!i1) {
  i4 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i4 >> 2] = 2272;
  ___cxa_throw(i4 | 0, 1024, 1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i4);
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  i3 = i2;
  __emval_decref(i3 | 0);
  STACKTOP = i4;
  return 1;
 }
 if (!i1) {
  i3 = i2;
  __emval_decref(i3 | 0);
  STACKTOP = i4;
  return 1;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 i3 = i2;
 __emval_decref(i3 | 0);
 STACKTOP = i4;
 return 1;
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

function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 if ((HEAP8[i1 + 8 + 3 >> 0] | 0) < 0) {
  i2 = HEAP32[i1 >> 2] | 0;
  i1 = HEAP32[i1 + 4 >> 2] | 0;
  if (i1 >>> 0 > 1073741807) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  do if (i1 >>> 0 < 2) {
   HEAP8[i4 + 8 + 3 >> 0] = i1;
   i3 = i4;
  } else if ((i1 + 4 & -4) >>> 0 > 1073741823) _abort(); else {
   i3 = __Znwj((i1 + 4 & -4) << 2) | 0;
   HEAP32[i4 >> 2] = i3;
   HEAP32[i4 + 8 >> 2] = i1 + 4 & -4 | -2147483648;
   HEAP32[i4 + 4 >> 2] = i1;
   break;
  } while (0);
  __ZNSt3__211char_traitsIwE4copyEPwPKwj(i3, i2, i1);
  __ZNSt3__211char_traitsIwE6assignERwRKw(i3 + (i1 << 2) | 0, 0);
 } else {
  HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
  HEAP32[i4 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 }
 return;
}

function __ZN10emscripten8internal7InvokerIvJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEE6invokeEPFvS8_EPNS0_11BindingTypeIS8_EUt_E(i4, i2) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 if (i3 >>> 0 > 4294967279) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if (i3 >>> 0 < 11) {
  HEAP8[i6 + 11 >> 0] = i3;
  if (!i3) i1 = i6; else {
   i1 = i6;
   i5 = 6;
  }
 } else {
  i1 = __Znwj(i3 + 16 & -16) | 0;
  HEAP32[i6 >> 2] = i1;
  HEAP32[i6 + 8 >> 2] = i3 + 16 & -16 | -2147483648;
  HEAP32[i6 + 4 >> 2] = i3;
  i5 = 6;
 }
 if ((i5 | 0) == 6) _memcpy(i1 | 0, i2 + 4 | 0, i3 | 0) | 0;
 HEAP8[i1 + i3 >> 0] = 0;
 FUNCTION_TABLE_vi[i4 & 127](i6);
 if ((HEAP8[i6 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i6;
  return;
 }
 __ZdlPv(HEAP32[i6 >> 2] | 0);
 STACKTOP = i6;
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE7__cloneEPNS0_6__baseISH_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2396;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 do if (!i1) HEAP32[i2 + 24 >> 2] = 0; else if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i1 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  break;
 } else {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  break;
 } while (0);
 HEAP32[i2 + 32 >> 2] = HEAP32[i3 + 32 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 36 | 0, i3 + 36 | 0);
 HEAP16[i2 + 48 >> 1] = HEAP16[i3 + 48 >> 1] | 0;
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 52 | 0, i3 + 52 | 0);
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISH_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2980;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 do if (!i1) HEAP32[i2 + 24 >> 2] = 0; else if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i1 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  break;
 } else {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  break;
 } while (0);
 HEAP32[i2 + 32 >> 2] = HEAP32[i3 + 32 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 36 | 0, i3 + 36 | 0);
 HEAP16[i2 + 48 >> 1] = HEAP16[i3 + 48 >> 1] | 0;
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 52 | 0, i3 + 52 | 0);
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
  if (!(HEAP32[HEAP32[1149] >> 2] | 0)) if ((i2 & -128 | 0) == 57216) {
   HEAP8[i1 >> 0] = i2;
   i1 = 1;
   break;
  } else {
   HEAP32[4478] = 84;
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
   HEAP32[4478] = 84;
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

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(64) | 0;
 HEAP32[i2 >> 2] = 2396;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 do if (!i1) HEAP32[i2 + 24 >> 2] = 0; else if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  break;
 } else {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  break;
 } while (0);
 HEAP32[i2 + 32 >> 2] = HEAP32[i3 + 32 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 36 | 0, i3 + 36 | 0);
 HEAP16[i2 + 48 >> 1] = HEAP16[i3 + 48 >> 1] | 0;
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 52 | 0, i3 + 52 | 0);
 return i2 | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(64) | 0;
 HEAP32[i2 >> 2] = 2980;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 do if (!i1) HEAP32[i2 + 24 >> 2] = 0; else if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  break;
 } else {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  break;
 } while (0);
 HEAP32[i2 + 32 >> 2] = HEAP32[i3 + 32 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 36 | 0, i3 + 36 | 0);
 HEAP16[i2 + 48 >> 1] = HEAP16[i3 + 48 >> 1] | 0;
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i2 + 52 | 0, i3 + 52 | 0);
 return i2 | 0;
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
   if ((i1 | 0) == 0 | i2) i2 = ___get_locale(i3, i2 ? i6 : 17924) | 0; else i2 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
   i4 = ((i2 | 0) != 0 & 1) + i4 | 0;
   HEAP32[i7 + (i3 << 2) >> 2] = i2;
   i3 = i3 + 1 | 0;
  } while ((i3 | 0) != 6);
  switch (i4 | 0) {
  case 0:
   {
    i1 = 17848;
    break L1;
   }
  case 1:
   {
    if ((HEAP32[i7 >> 2] | 0) == 3332) {
     i1 = 3380;
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

function _vsnprintf(i1, i2, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i8;
 i4 = 3732;
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
  HEAP32[4478] = 75;
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
  i1 = _vfprintf(i8, 16277, i6) | 0;
  if (i7) {
   i7 = HEAP32[i8 + 20 >> 2] | 0;
   HEAP8[i7 + (((i7 | 0) == (HEAP32[i8 + 16 >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 STACKTOP = i8;
 return i1 | 0;
}

function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9__grow_byEjjjjjj(i7, i3, i1, i4, i2) {
 i7 = i7 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i5 = 0, i6 = 0;
 if ((1073741807 - i3 | 0) >>> 0 < i1 >>> 0) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
 if ((HEAP8[i7 + 8 + 3 >> 0] | 0) < 0) i6 = HEAP32[i7 >> 2] | 0; else i6 = i7;
 if (i3 >>> 0 < 536870887) {
  i1 = (i1 + i3 | 0) >>> 0 < i3 << 1 >>> 0 ? i3 << 1 : i1 + i3 | 0;
  i1 = i1 >>> 0 < 2 ? 2 : i1 + 4 & -4;
  if (i1 >>> 0 > 1073741823) _abort(); else i5 = i1;
 } else i5 = 1073741807;
 i1 = __Znwj(i5 << 2) | 0;
 if (i2 | 0) __ZNSt3__211char_traitsIwE4copyEPwPKwj(i1, i6, i2);
 if (i4 - i2 | 0) __ZNSt3__211char_traitsIwE4copyEPwPKwj(i1 + (i2 << 2) | 0, i6 + (i2 << 2) | 0, i4 - i2 | 0);
 if ((i3 | 0) != 1) __ZdlPv(i6);
 HEAP32[i7 >> 2] = i1;
 HEAP32[i7 + 8 >> 2] = i5 | -2147483648;
 return;
}

function __ZN7todomvc4task6updateENS0_4TaskENSt3__28functionIFS1_S1_EEE(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4 + 4 | 0, i2 + 4 | 0);
 HEAP16[i4 + 16 >> 1] = HEAP16[i2 + 16 >> 1] | 0;
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_(i4 + 20 | 0, i2 + 20 | 0);
 i1 = HEAP32[i1 + 16 >> 2] | 0;
 if (!i1) {
  i4 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i4 >> 2] = 2272;
  ___cxa_throw(i4 | 0, 1024, 1);
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i3, i1, i4);
 if ((HEAP8[i4 + 28 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i4 + 20 >> 2] | 0);
 if ((HEAP8[i4 + 4 + 11 >> 0] | 0) >= 0) {
  STACKTOP = i4;
  return;
 }
 __ZdlPv(HEAP32[i4 + 4 >> 2] | 0);
 STACKTOP = i4;
 return;
}

function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendEjw(i6, i3) {
 i6 = i6 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0;
 if (i3 | 0) {
  i1 = HEAP8[i6 + 8 + 3 >> 0] | 0;
  if (i1 << 24 >> 24 < 0) {
   i5 = HEAP32[i6 + 4 >> 2] | 0;
   i2 = (HEAP32[i6 + 8 >> 2] & 2147483647) + -1 | 0;
  } else {
   i5 = i1 & 255;
   i2 = 1;
  }
  i4 = i5 + i3 | 0;
  if ((i2 - i5 | 0) >>> 0 < i3 >>> 0) {
   __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9__grow_byEjjjjjj(i6, i2, i4 - i2 | 0, i5, i5);
   i1 = HEAP8[i6 + 8 + 3 >> 0] | 0;
  }
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i6 >> 2] | 0; else i1 = i6;
  __ZNSt3__211char_traitsIwE6assignEPwjw(i1 + (i5 << 2) | 0, i3);
  if ((HEAP8[i6 + 8 + 3 >> 0] | 0) < 0) HEAP32[i6 + 4 >> 2] = i4; else HEAP8[i6 + 8 + 3 >> 0] = i4;
  __ZNSt3__211char_traitsIwE6assignERwRKw(i1 + (i4 << 2) | 0, 0);
 }
 return i6 | 0;
}

function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendEPKwj(i7, i4, i3) {
 i7 = i7 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i5 = 0, i6 = 0;
 i1 = HEAP8[i7 + 8 + 3 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) {
  i6 = HEAP32[i7 + 4 >> 2] | 0;
  i2 = (HEAP32[i7 + 8 >> 2] & 2147483647) + -1 | 0;
 } else {
  i6 = i1 & 255;
  i2 = 1;
 }
 i5 = i6 + i3 | 0;
 if ((i2 - i6 | 0) >>> 0 < i3 >>> 0) __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE21__grow_by_and_replaceEjjjjjjPKw(i7, i2, i5 - i2 | 0, i6, i6, 0, i3, i4); else if (i3 | 0) {
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i7 >> 2] | 0; else i1 = i7;
  __ZNSt3__211char_traitsIwE4copyEPwPKwj(i1 + (i6 << 2) | 0, i4, i3);
  if ((HEAP8[i7 + 8 + 3 >> 0] | 0) < 0) HEAP32[i7 + 4 >> 2] = i5; else HEAP8[i7 + 8 + 3 >> 0] = i5;
  __ZNSt3__211char_traitsIwE6assignERwRKw(i1 + (i5 << 2) | 0, 0);
 }
 return i7 | 0;
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

function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6assignEPKwj(i5, i4, i3) {
 i5 = i5 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i1 = HEAP8[i5 + 8 + 3 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) i2 = (HEAP32[i5 + 8 >> 2] & 2147483647) + -1 | 0; else i2 = 1;
 do if (i2 >>> 0 < i3 >>> 0) {
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i5 + 4 >> 2] | 0; else i1 = i1 & 255;
  __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE21__grow_by_and_replaceEjjjjjjPKw(i5, i2, i3 - i2 | 0, i1, 0, i1, i3, i4);
 } else {
  if (i1 << 24 >> 24 < 0) i1 = HEAP32[i5 >> 2] | 0; else i1 = i5;
  __ZNSt3__211char_traitsIwE4moveEPwPKwj(i1, i4, i3);
  __ZNSt3__211char_traitsIwE6assignERwRKw(i1 + (i3 << 2) | 0, 0);
  if ((HEAP8[i5 + 8 + 3 >> 0] | 0) < 0) {
   HEAP32[i5 + 4 >> 2] = i3;
   break;
  } else {
   HEAP8[i5 + 8 + 3 >> 0] = i3;
   break;
  }
 } while (0);
 return i5 | 0;
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
  i1 = ___dynamic_cast(i1, 1920) | 0;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEEclEOi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i1 = HEAP32[i1 + 24 >> 2] | 0;
 i2 = HEAP32[i2 >> 2] | 0;
 HEAP32[i3 >> 2] = 3244;
 HEAP32[i3 + 4 >> 2] = i2;
 HEAP32[i3 + 16 >> 2] = i3;
 if (!i1) {
  i3 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i3 >> 2] = 2272;
  ___cxa_throw(i3 | 0, 1024, 1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i3);
 i1 = HEAP32[i3 + 16 >> 2] | 0;
 if ((i1 | 0) == (i3 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  STACKTOP = i3;
  return;
 }
 if (!i1) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 STACKTOP = i3;
 return;
}

function __ZN6asmdom4DataC2ERKNSt3__213unordered_mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4hashIS8_EENS1_8equal_toIS8_EENS6_INS1_4pairIKS8_S8_EEEEEERKNS2_IS8_NS1_8functionIFbN10emscripten3valEEEESA_SC_NS6_INSD_ISE_SO_EEEEEE(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_S6_EEEEEC2ERKSF_(i3, i1);
 HEAP32[i3 + 20 >> 2] = 0;
 HEAP32[i3 + 20 + 4 >> 2] = 0;
 HEAP32[i3 + 20 + 8 >> 2] = 0;
 HEAP32[i3 + 20 + 12 >> 2] = 0;
 HEAPF32[i3 + 36 >> 2] = Math_fround(1.0);
 __ZNSt3__213unordered_mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEENS_4hashIS6_EENS_8equal_toIS6_EENS4_INS_4pairIKS6_SB_EEEEEC2ERKSK_(i3 + 40 | 0, i2);
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

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i1) {
 i1 = i1 | 0;
 if (!i1) return;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i1 >> 2] | 0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(HEAP32[i1 + 4 >> 2] | 0);
 if ((HEAP8[i1 + 16 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 + 16 >> 2] | 0);
 __ZdlPv(i1);
 return;
}

function __ZNSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEED0Ev(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 HEAP32[i3 >> 2] = 2352;
 i1 = HEAP32[i3 + 20 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i3 + 24 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i3 + 24 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i3 + 24 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i3 + 20 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i3 + 8 + 11 >> 0] | 0) >= 0) {
  __ZdlPv(i3);
  return;
 }
 __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
 __ZdlPv(i3);
 return;
}

function __ZNSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE18destroy_deallocateEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i1 = HEAP32[i3 + 20 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i3 + 24 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i3 + 24 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i3 + 24 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i3 + 20 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i3 + 8 + 11 >> 0] | 0) >= 0) {
  __ZdlPv(i3);
  return;
 }
 __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
 __ZdlPv(i3);
 return;
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

function __ZNSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEED2Ev(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 HEAP32[i3 >> 2] = 2352;
 i1 = HEAP32[i3 + 20 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i3 + 24 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i3 + 24 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i3 + 24 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i3 + 20 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i3 + 8 + 11 >> 0] | 0) >= 0) return;
 __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
 return;
}

function __GLOBAL__sub_I_asm_dom_cpp() {
 var i1 = 0, i2 = 0, i3 = 0;
 __embind_register_function(4600, 4, 2248, 4617, 1, 4);
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
 HEAP32[4317] = i1;
 return;
}

function __ZN6asmdom5patchEPNS_5VNodeES1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(HEAP8[17200] | 0)) if (___cxa_guard_acquire(17200) | 0) HEAP8[17925] = 1;
 i3 = HEAP32[4316] | 0;
 if ((i3 | 0) != (i1 | 0) & (i3 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i1 | 0) == (i2 | 0)) {
  i3 = i1;
  return i3 | 0;
 }
 HEAP32[4316] = i2;
 if (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_(i1, i2) | 0) __ZN6asmdom10patchVNodeEPNS_5VNodeES1_(i1, i2); else {
  i3 = __ZN6asmdom9createElmEPNS_5VNodeE(i2) | 0;
  _emscripten_asm_const_iii(17, i3 | 0, HEAP32[i1 + 96 >> 2] | 0) | 0;
 }
 if ((i1 | 0) == 0 | (HEAP8[17925] | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 __ZN6asmdom5VNodeD2Ev(i1);
 __ZdlPv(i1);
 i3 = i2;
 return i3 | 0;
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

function __ZNSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE7destroyEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i1 = HEAP32[i3 + 20 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i3 + 24 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i3 + 24 >> 2] = i2 + -32;
    if ((HEAP8[i2 + -4 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + -12 >> 2] | 0);
    i2 = i2 + -28 | 0;
    if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 >> 2] | 0);
    i2 = HEAP32[i3 + 24 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i3 + 20 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 if ((HEAP8[i3 + 8 + 11 >> 0] | 0) >= 0) return;
 __ZdlPv(HEAP32[i3 + 8 >> 2] | 0);
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE7__cloneEPNS0_6__baseISE_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 3288;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 do if (!i1) HEAP32[i2 + 24 >> 2] = 0; else if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i1 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  break;
 } else {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  break;
 } while (0);
 HEAP32[i2 + 32 >> 2] = HEAP32[i3 + 32 >> 2];
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

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEEclEOSG_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i4 >> 2] = i5;
 if (!i3) {
  i5 = ___cxa_allocate_exception(4) | 0;
  HEAP32[i5 >> 2] = 2272;
  ___cxa_throw(i5 | 0, 1024, 1);
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 31](i3, i4);
  __emval_decref(i1 | 0);
  STACKTOP = i4;
  return 1;
 }
 return 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(40) | 0;
 HEAP32[i2 >> 2] = 3288;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 do if (!i1) HEAP32[i2 + 24 >> 2] = 0; else if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  break;
 } else {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  break;
 } while (0);
 HEAP32[i2 + 32 >> 2] = HEAP32[i3 + 32 >> 2];
 return i2 | 0;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2396;
 if ((HEAP8[i2 + 60 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 52 >> 2] | 0);
 if ((HEAP8[i2 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 36 >> 2] | 0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISH_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 3068;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i3 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i2 + 8 | 0);
  return;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return;
 }
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISH_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 3024;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i3 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i2 + 8 | 0);
  return;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return;
 }
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISH_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2936;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i3 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i2 + 8 | 0);
  return;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return;
 }
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISH_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2892;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i3 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i2 + 8 | 0);
  return;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return;
 }
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2980;
 if ((HEAP8[i2 + 60 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 52 >> 2] | 0);
 if ((HEAP8[i2 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 36 >> 2] | 0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEjw(i4, i2) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 i1 = HEAP8[i4 + 8 + 3 >> 0] | 0;
 if (i1 << 24 >> 24 < 0) i3 = HEAP32[i4 + 4 >> 2] | 0; else i3 = i1 & 255;
 do if (i3 >>> 0 < i2 >>> 0) __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendEjw(i4, i2 - i3 | 0) | 0; else if (i1 << 24 >> 24 < 0) {
  __ZNSt3__211char_traitsIwE6assignERwRKw((HEAP32[i4 >> 2] | 0) + (i2 << 2) | 0, 0);
  HEAP32[i4 + 4 >> 2] = i2;
  break;
 } else {
  __ZNSt3__211char_traitsIwE6assignERwRKw(i4 + (i2 << 2) | 0, 0);
  HEAP8[i4 + 8 + 3 >> 0] = i2;
  break;
 } while (0);
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(32) | 0;
 HEAP32[i2 >> 2] = 3068;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return i2 | 0;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  return i2 | 0;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return i2 | 0;
 }
 return 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(32) | 0;
 HEAP32[i2 >> 2] = 3024;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return i2 | 0;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  return i2 | 0;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return i2 | 0;
 }
 return 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(32) | 0;
 HEAP32[i2 >> 2] = 2936;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return i2 | 0;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  return i2 | 0;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return i2 | 0;
 }
 return 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(32) | 0;
 HEAP32[i2 >> 2] = 2892;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return i2 | 0;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  return i2 | 0;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return i2 | 0;
 }
 return 0;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 if ((HEAP8[i2 + 60 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 52 >> 2] | 0);
 if ((HEAP8[i2 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 36 >> 2] | 0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 if ((HEAP8[i2 + 60 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 52 >> 2] | 0);
 if ((HEAP8[i2 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 36 >> 2] | 0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISF_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2616;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i3 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i2 + 8 | 0);
  return;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return;
 }
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISF_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2572;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i3 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i2 + 8 | 0);
  return;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return;
 }
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISF_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2528;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i3 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i2 + 8 | 0);
  return;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return;
 }
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(32) | 0;
 HEAP32[i2 >> 2] = 2616;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return i2 | 0;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  return i2 | 0;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return i2 | 0;
 }
 return 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(32) | 0;
 HEAP32[i2 >> 2] = 2572;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return i2 | 0;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  return i2 | 0;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return i2 | 0;
 }
 return 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(32) | 0;
 HEAP32[i2 >> 2] = 2528;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return i2 | 0;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  return i2 | 0;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return i2 | 0;
 }
 return 0;
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

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE7__cloneEPNS0_6__baseISD_EE(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2440;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  i3 = HEAP32[i3 + 24 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i2 + 8 | 0);
  return;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return;
 }
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE7__cloneEv(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = __Znwj(32) | 0;
 HEAP32[i2 >> 2] = 2440;
 i1 = HEAP32[i3 + 24 >> 2] | 0;
 if (!i1) {
  HEAP32[i2 + 24 >> 2] = 0;
  return i2 | 0;
 }
 if ((i1 | 0) == (i3 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i2 + 8;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i2 + 8 | 0);
  return i2 | 0;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1) | 0;
  HEAP32[i2 + 24 >> 2] = i3;
  return i2 | 0;
 }
 return 0;
}

function __ZN6asmdom5VNodeC2ERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_4DataES9_(i4, i2, i1, i3) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4, i2);
 HEAP32[i4 + 12 >> 2] = 0;
 HEAP32[i4 + 12 + 4 >> 2] = 0;
 HEAP32[i4 + 12 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4 + 24 | 0, i3);
 __ZN6asmdom4DataC2ERKS0_(i4 + 36 | 0, i1);
 HEAP32[i4 + 100 >> 2] = 0;
 HEAP32[i4 + 104 >> 2] = 0;
 HEAP32[i4 + 108 >> 2] = 0;
 __ZN6asmdom5VNode11adjustVNodeEv(i4);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2396;
 if ((HEAP8[i2 + 60 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 52 >> 2] | 0);
 if ((HEAP8[i2 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 36 >> 2] | 0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2980;
 if ((HEAP8[i2 + 60 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 52 >> 2] | 0);
 if ((HEAP8[i2 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 36 >> 2] | 0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 if ((HEAP8[i2 + 60 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 52 >> 2] | 0);
 if ((HEAP8[i2 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 36 >> 2] | 0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 if ((HEAP8[i2 + 60 + 3 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 52 >> 2] | 0);
 if ((HEAP8[i2 + 36 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i2 + 36 >> 2] | 0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function ___overflow() {
 var i1 = 0, i2 = 0, i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP8[i3 >> 0] = 10;
 i1 = HEAP32[906] | 0;
 if (!i1) if (!(___towrite(3608) | 0)) {
  i1 = HEAP32[906] | 0;
  i2 = 4;
 } else i1 = -1; else i2 = 4;
 do if ((i2 | 0) == 4) {
  i2 = HEAP32[907] | 0;
  if (!(i2 >>> 0 >= i1 >>> 0 | (HEAP8[3683] | 0) == 10)) {
   HEAP32[907] = i2 + 1;
   HEAP8[i2 >> 0] = 10;
   i1 = 10;
   break;
  }
  if ((FUNCTION_TABLE_iiii[HEAP32[3644 >> 2] & 7](3608, i3, 1) | 0) == 1) i1 = HEAPU8[i3 >> 0] | 0; else i1 = -1;
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
  if ((HEAPU8[14123 + i1 >> 0] | 0) == (i2 | 0)) {
   i3 = 2;
   break;
  }
  i1 = i1 + 1 | 0;
  if ((i1 | 0) == 87) {
   i1 = 87;
   i2 = 14211;
   i3 = 5;
   break;
  }
 }
 if ((i3 | 0) == 2) if (!i1) i1 = 14211; else {
  i2 = 14211;
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

function __ZN7todomvc5todos7onClickEN10emscripten3valE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i1 = __emval_get_global(9207) | 0;
 i2 = __emval_new_cstring(9215) | 0;
 if (!(HEAP8[17240] | 0)) if (___cxa_guard_acquire(17240) | 0) {
  i4 = __emval_get_method_caller(2, 2876) | 0;
  HEAP32[4320] = i4;
 }
 i4 = HEAP32[4320] | 0;
 __emval_incref(i2 | 0);
 HEAP32[i3 >> 2] = i2;
 __emval_call_void_method(i4 | 0, i1 | 0, 9223, i3 | 0);
 __emval_decref(i2 | 0);
 __emval_decref(i1 | 0);
 STACKTOP = i3;
 return 1;
}

function __ZN7todomvc4task13targetCheckedERN10emscripten3valE(i1) {
 i1 = i1 | 0;
 var d2 = 0.0, i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = __emval_new_cstring(8364) | 0;
 i1 = __emval_get_property(i1 | 0, i5 | 0) | 0;
 __emval_decref(i5 | 0);
 i5 = __emval_new_cstring(7389) | 0;
 i4 = __emval_get_property(i1 | 0, i5 | 0) | 0;
 __emval_decref(i5 | 0);
 d2 = +__emval_as(i4 | 0, 2120, i3 | 0);
 __emval_run_destructors(HEAP32[i3 >> 2] | 0);
 __emval_decref(i4 | 0);
 __emval_decref(i1 | 0);
 STACKTOP = i3;
 return d2 != 0.0 | 0;
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

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 3068;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 3024;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2936;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2892;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2616;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2572;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2528;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 3288;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEED0Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2440;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE18destroy_deallocateEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  __ZdlPv(i2);
  return;
 }
 if (!i1) {
  __ZdlPv(i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 __ZdlPv(i2);
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
 i1 = (HEAP8[3683] | 0) == 10;
 do if ((HEAP32[921] | 0) < 0) {
  if (!i1) {
   i1 = HEAP32[907] | 0;
   if (i1 >>> 0 < (HEAP32[906] | 0) >>> 0) {
    HEAP32[907] = i1 + 1;
    HEAP8[i1 >> 0] = 10;
    break;
   }
  }
  ___overflow() | 0;
 } else {
  if (!i1) {
   i1 = HEAP32[907] | 0;
   if (i1 >>> 0 < (HEAP32[906] | 0) >>> 0) {
    HEAP32[907] = i1 + 1;
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

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 3068;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 3024;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2936;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2892;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2616;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2572;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2528;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 3288;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
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

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEED2Ev(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 HEAP32[i2 >> 2] = 2440;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
}

function _wmemmove(i4, i2, i1) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 if (i4 - i2 >> 2 >>> 0 < i1 >>> 0) do {
  i1 = i1 + -1 | 0;
  HEAP32[i4 + (i1 << 2) >> 2] = HEAP32[i2 + (i1 << 2) >> 2];
 } while ((i1 | 0) != 0); else if (i1 | 0) {
  i3 = i4;
  while (1) {
   i1 = i1 + -1 | 0;
   HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
   if (!i1) break; else {
    i3 = i3 + 4 | 0;
    i2 = i2 + 4 | 0;
   }
  }
 }
 return i4 | 0;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE7destroyEv(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == (i2 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1);
  return;
 }
 if (!i1) return;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 127](i1);
 return;
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

function __ZNSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_EclEOS3_(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = 0;
 i2 = FUNCTION_TABLE_ii[i2 & 63](i3) | 0;
 __emval_decref(HEAP32[i3 >> 2] | 0);
 STACKTOP = i3;
 return i2 | 0;
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

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE7__cloneEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __Znwj(16) | 0;
 HEAP32[i2 >> 2] = 3112;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
 return i2 | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE7__cloneEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __Znwj(16) | 0;
 HEAP32[i2 >> 2] = 2792;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i2 + 4 | 0, i1 + 4 | 0);
 return i2 | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE7__cloneEPNS0_6__baseISE_EE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 3112;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1 + 4 | 0, i2 + 4 | 0);
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE7__cloneEPNS0_6__baseISE_EE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2792;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1 + 4 | 0, i2 + 4 | 0);
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
 i1 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 7](i1, i2, i4) | 0;
 if (i1) HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i4;
 return i1 & 1 | 0;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EED0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 3112;
 if ((HEAP8[i1 + 4 + 11 >> 0] | 0) >= 0) {
  __ZdlPv(i1);
  return;
 }
 __ZdlPv(HEAP32[i1 + 4 >> 2] | 0);
 __ZdlPv(i1);
 return;
}

function _fmt_x(i2, i3, i1, i4) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 if (!((i2 | 0) == 0 & (i3 | 0) == 0)) do {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = HEAPU8[14107 + (i2 & 15) >> 0] | 0 | i4;
  i2 = _bitshift64Lshr(i2 | 0, i3 | 0, 4) | 0;
  i3 = tempRet0;
 } while (!((i2 | 0) == 0 & (i3 | 0) == 0));
 return i1 | 0;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EED0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2792;
 if ((HEAP8[i1 + 4 + 11 >> 0] | 0) >= 0) {
  __ZdlPv(i1);
  return;
 }
 __ZdlPv(HEAP32[i1 + 4 >> 2] | 0);
 __ZdlPv(i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE18destroy_deallocateEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 4 + 11 >> 0] | 0) >= 0) {
  __ZdlPv(i1);
  return;
 }
 __ZdlPv(HEAP32[i1 + 4 >> 2] | 0);
 __ZdlPv(i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE18destroy_deallocateEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 4 + 11 >> 0] | 0) >= 0) {
  __ZdlPv(i1);
  return;
 }
 __ZdlPv(HEAP32[i1 + 4 >> 2] | 0);
 __ZdlPv(i1);
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

function __ZNKSt3__212_GLOBAL__N_114initial_stringINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiLb0EEclEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(i1, 10);
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

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EED2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 3112;
 if ((HEAP8[i1 + 4 + 11 >> 0] | 0) >= 0) return;
 __ZdlPv(HEAP32[i1 + 4 >> 2] | 0);
 return;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EED2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2792;
 if ((HEAP8[i1 + 4 + 11 >> 0] | 0) >= 0) return;
 __ZdlPv(HEAP32[i1 + 4 >> 2] | 0);
 return;
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

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 9480 ? i2 + 4 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 11530 ? i2 + 8 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 10270 ? i2 + 8 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 10505 ? i2 + 8 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 10917 ? i2 + 8 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 9395 ? i2 + 8 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 9888 ? i2 + 8 | 0 : 0) | 0;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE7destroyEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 4 + 11 >> 0] | 0) >= 0) return;
 __ZdlPv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 8598 ? i2 + 4 | 0 : 0) | 0;
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
 i1 = __ZNSt3__215__refstring_imp12_GLOBAL__N_113rep_from_dataEPKc_432(HEAP32[i1 >> 2] | 0) | 0;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE7destroyEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 4 + 11 >> 0] | 0) >= 0) return;
 __ZdlPv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}

function __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(i2, i1, i3) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 + 4 >> 2] | 0) == (i1 | 0)) if ((HEAP32[i2 + 28 >> 2] | 0) != 1) HEAP32[i2 + 28 >> 2] = i3;
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE7__cloneEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __Znwj(8) | 0;
 HEAP32[i2 >> 2] = 2308;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 return i2 | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 7533 ? i2 + 8 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 7947 ? i2 + 8 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 8513 ? i2 + 8 | 0 : 0) | 0;
}

function __ZNK10__cxxabiv117__pbase_type_info9can_catchEPKNS_16__shim_type_infoERPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, i2) | 0) i1 = 1; else i1 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i2, 2112) | 0;
 return i1 | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 11607 ? i2 + 8 | 0 : 0) | 0;
}

function ___cxa_get_globals_fast() {
 var i1 = 0, i2 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (!(_pthread_once(17900, 2) | 0)) {
  i2 = _pthread_getspecific(HEAP32[4476] | 0) | 0;
  STACKTOP = i1;
  return i2 | 0;
 } else _abort_message(16555, i1);
 return 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE7__cloneEPNS0_6__baseISA_EE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2308;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEjPKc(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEjPKcj(i2, i1, __ZNSt3__211char_traitsIcE6lengthEPKc(i1) | 0) | 0;
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

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __Znwj(8) | 0;
 HEAP32[i2 >> 2] = 2704;
 HEAP8[i2 + 4 >> 0] = HEAP8[i1 + 4 >> 0] | 0;
 return i2 | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __Znwj(8) | 0;
 HEAP32[i2 >> 2] = 3244;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 return i2 | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 11152 ? i2 + 8 | 0 : 0) | 0;
}

function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 _free(i1);
 if (!(_pthread_setspecific(HEAP32[4476] | 0, 0) | 0)) {
  STACKTOP = i2;
  return;
 } else _abort_message(16654, i2);
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEPNS0_6__baseIS9_EE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2704;
 HEAP8[i1 + 4 >> 0] = HEAP8[i2 + 4 >> 0] | 0;
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __Znwj(8) | 0;
 HEAP32[i2 >> 2] = 2748;
 HEAP8[i2 + 4 >> 0] = HEAP8[i1 + 4 >> 0] | 0;
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

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEPNS0_6__baseIS9_EE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 3244;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 7020 ? i2 + 4 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEPNS0_6__baseIS9_EE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2748;
 HEAP8[i1 + 4 >> 0] = HEAP8[i2 + 4 >> 0] | 0;
 return;
}

function __ZNKSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 12046 ? i2 + 4 | 0 : 0) | 0;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc(i1) {
 i1 = i1 | 0;
 return __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj(i1, 4771, __ZNSt3__211char_traitsIcE6lengthEPKc(4771) | 0) | 0;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKc(i1) {
 i1 = i1 | 0;
 return __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i1, 7438, __ZNSt3__211char_traitsIcE6lengthEPKc(7438) | 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 8024 ? i2 + 4 | 0 : 0) | 0;
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

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 9973 ? i2 + 4 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 7610 ? i2 + 4 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 11229 ? i2 + 4 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 10590 ? i2 + 4 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 8066 ? i2 + 4 | 0 : 0) | 0;
}

function __ZNKSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E7__cloneEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __Znwj(8) | 0;
 HEAP32[i2 >> 2] = 2484;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 return i2 | 0;
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

function __ZNSt3__27codecvtIwc11__mbstate_tED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = 4248;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) != (__ZNSt3__26__clocEv() | 0)) _freelocale(HEAP32[i1 + 8 >> 2] | 0);
 return;
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

function __ZNKSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E7__cloneEPNS0_6__baseIS4_EE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2484;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 return;
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
 if (!(_pthread_key_create(17904, 107) | 0)) {
  STACKTOP = i1;
  return;
 } else _abort_message(16604, i1);
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

function _wmemset(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 if (i1 | 0) {
  i3 = i2;
  while (1) {
   i1 = i1 + -1 | 0;
   HEAP32[i3 >> 2] = 0;
   if (!i1) break; else i3 = i3 + 4 | 0;
  }
 }
 return i2 | 0;
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

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEPNS0_6__baseIS9_EE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 3156;
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEPNS0_6__baseIS9_EE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 2660;
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEPNS0_6__baseIS9_EE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 3200;
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1416;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1640;
}

function __ZNKSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E6targetERKSt9type_info(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) == 9227 ? i2 + 4 | 0 : 0) | 0;
}

function __ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 return __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i2, i3) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1392;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1440;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1488;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1512;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1560;
}

function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6assignEPKw(i1) {
 i1 = i1 | 0;
 return __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6assignEPKwj(i1, 17892, 0) | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1312;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEv(i1) {
 i1 = i1 | 0;
 i1 = __Znwj(8) | 0;
 HEAP32[i1 >> 2] = 3156;
 return i1 | 0;
}

function __ZNSt3__26__clocEv() {
 var i1 = 0;
 if (!(HEAP8[17256] | 0)) if (___cxa_guard_acquire(17256) | 0) {
  i1 = ___newlocale(2147483647, 16165, 0) | 0;
  HEAP32[4474] = i1;
 }
 return HEAP32[4474] | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEv(i1) {
 i1 = i1 | 0;
 i1 = __Znwj(8) | 0;
 HEAP32[i1 >> 2] = 2660;
 return i1 | 0;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEv(i1) {
 i1 = i1 | 0;
 i1 = __Znwj(8) | 0;
 HEAP32[i1 >> 2] = 3200;
 return i1 | 0;
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
 HEAP32[i1 >> 2] = 4248;
 i2 = __ZNSt3__26__clocEv() | 0;
 HEAP32[i1 + 8 >> 2] = i2;
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1128;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1184;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1264;
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

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1664;
}

function _abort_message(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i3 >> 2] = i2;
 _vfprintf(3608, i1, i3) | 0;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE18destroy_deallocateEv(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
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

function __ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1584;
}

function ___uselocale(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = HEAP32[1149] | 0;
 if (i2 | 0) HEAP32[1149] = (i2 | 0) == (-1 | 0) ? 17824 : i2;
 return ((i1 | 0) == 17824 ? -1 : i1) | 0;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE18destroy_deallocateEv(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE18destroy_deallocateEv(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function b7(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(7);
 return 0;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE18destroy_deallocateEv(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1096;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE18destroy_deallocateEv(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE18destroy_deallocateEv(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
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

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EED0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNKSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1696;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE18destroy_deallocateEv(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
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
 FUNCTION_TABLE_v[i1 & 3]();
 _abort_message(16707, i2);
}

function __ZNSt3__211char_traitsIcE4copyEPcPKcj(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 if (i1 | 0) _memcpy(i2 | 0, i3 | 0, i1 | 0) | 0;
 return i2 | 0;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE7destroyEv(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1208;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1464;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1152;
}

function __ZNSt3__26locale5facet16__on_zero_sharedEv(i1) {
 i1 = i1 | 0;
 if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EED0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNSt13runtime_errorC2EPKc(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i2 >> 2] = 4400;
 __ZNSt3__218__libcpp_refstringC2EPKc(i2 + 4 | 0, i1);
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1608;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1536;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EED0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EED0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNSt11logic_errorC2EPKc(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 HEAP32[i2 >> 2] = 4380;
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

function __ZNSt3__212codecvt_utf8IwLm1114111ELNS_12codecvt_modeE0EED0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt3__27codecvtIwc11__mbstate_tED2Ev(i1);
 __ZdlPv(i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EED0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EED0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNKSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1232;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EED0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE7destroyEv(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE7destroyEv(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE7destroyEv(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNK10__cxxabiv120__function_type_info9can_catchEPKNS_16__shim_type_infoERPv(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}

function __ZNSt3__211char_traitsIwE4moveEPwPKwj(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 if (i1 | 0) _wmemmove(i2, i3, i1) | 0;
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE7destroyEv(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE7destroyEv(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNSt3__211char_traitsIwE4copyEPwPKwj(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 if (i1 | 0) _wmemcpy(i2, i3, i1) | 0;
 return;
}

function dynCall_viii(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_viii[i4 & 15](i1 | 0, i2 | 0, i3 | 0);
}

function __ZNSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE7destroyEv(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E18destroy_deallocateEv(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
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
 if (!i1) i1 = 0; else i1 = (___dynamic_cast(i1, 2072) | 0) != 0;
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
 HEAP32[i1 >> 2] = 4400;
 __ZNSt3__218__libcpp_refstringD2Ev(i1 + 4 | 0);
 return;
}

function __ZNKSt13runtime_error4whatEv(i1) {
 i1 = i1 | 0;
 return __ZNKSt3__218__libcpp_refstring5c_strEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
}

function __ZNSt11logic_errorD2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 4380;
 __ZNSt3__218__libcpp_refstringD2Ev(i1 + 4 | 0);
 return;
}

function __ZNKSt3__214__codecvt_utf8IwE13do_max_lengthEv(i1) {
 i1 = i1 | 0;
 return ((HEAP32[i1 + 16 >> 2] & 4 | 0) == 0 ? 4 : 7) | 0;
}

function _llvm_bswap_i32(i1) {
 i1 = i1 | 0;
 return (i1 & 255) << 24 | (i1 >> 8 & 255) << 16 | (i1 >> 16 & 255) << 8 | i1 >>> 24 | 0;
}

function __ZNKSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E11target_typeEv(i1) {
 i1 = i1 | 0;
 return 1352;
}

function __ZNKSt11logic_error4whatEv(i1) {
 i1 = i1 | 0;
 return __ZNKSt3__218__libcpp_refstring5c_strEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
}

function dynCall_iii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_iii[i3 & 31](i1 | 0, i2 | 0) | 0;
}

function b9(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(9);
}

function _out(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 if (!(HEAP32[i1 >> 2] & 32)) ___fwritex(i3, i2, i1);
 return;
}

function __ZNSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_ED0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZNSt3__211char_traitsIwE6assignEPwjw(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 if (i1 | 0) _wmemset(i2, i1) | 0;
 return;
}

function ___syscall_ret(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 > 4294963200) {
  HEAP32[4478] = 0 - i1;
  i1 = -1;
 }
 return i1 | 0;
}

function b11(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(11);
 return 0;
}

function _mbrlen(i2, i1, i3) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 return _mbrtowc(0, i2, i1, i3 | 0 ? i3 : 17888) | 0;
}

function __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (i1 | 0) == (i2 | 0) | 0;
}

function __GLOBAL__sub_I_index_cpp() {
 HEAP32[4308] = 0;
 __embind_register_function(6986, 2, 2292, 6999, 26, 106);
 return;
}

function __ZNSt3__215__refstring_imp12_GLOBAL__N_113data_from_repEPNS1_9_Rep_baseE(i1) {
 i1 = i1 | 0;
 return i1 + 12 | 0;
}

function __ZNSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E7destroyEv(i1) {
 i1 = i1 | 0;
 return;
}

function dynCall_vii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[i3 & 31](i1 | 0, i2 | 0);
}

function _wctomb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!i1) i1 = 0; else i1 = _wcrtomb(i1, i2) | 0;
 return i1 | 0;
}

function ___loc_is_allocated(i1) {
 i1 = i1 | 0;
 return (i1 | 0) != 3380 & ((i1 | 0) != 0 & (i1 | 0) != 17848) & 1 | 0;
}

function __ZNSt3__211char_traitsIwE6assignERwRKw(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 return;
}

function __ZNSt3__211char_traitsIcE6assignERcRKc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 >> 0] = i2;
 return;
}

function __ZNSt3__215__refstring_imp12_GLOBAL__N_113rep_from_dataEPKc_432(i1) {
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
 i1 = HEAP32[4477] | 0;
 HEAP32[4477] = i1 + 0;
 return i1 | 0;
}

function __ZSt13get_terminatev() {
 var i1 = 0;
 i1 = HEAP32[1072] | 0;
 HEAP32[1072] = i1 + 0;
 return i1 | 0;
}

function __ZNSt13runtime_errorD0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt13runtime_errorD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
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
 return FUNCTION_TABLE_ii[i2 & 63](i1 | 0) | 0;
}

function __ZNSt11logic_errorD0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt11logic_errorD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function __ZNSt3__210__function6__baseIFN7todomvc5todos5TodosES4_EED2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function establishStackSpace(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 STACKTOP = i1;
 STACK_MAX = i2;
}

function b12(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(12);
}

function __ZNSt3__210__function6__baseIFN7todomvc4task4TaskES4_EED2Ev(i1) {
 i1 = i1 | 0;
 return;
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

function dynCall_vi(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 FUNCTION_TABLE_vi[i2 & 127](i1 | 0);
}

function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
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

function __ZNSt3__210__function6__baseIFbN10emscripten3valEEED2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function __ZN10__cxxabiv120__si_class_type_infoD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function __ZN10__cxxabiv120__function_type_infoD0Ev(i1) {
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

function __ZNSt3__211char_traitsIcE6lengthEPKc(i1) {
 i1 = i1 | 0;
 return _strlen(i1) | 0;
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
 return (HEAP32[HEAP32[1149] >> 2] | 0 ? 4 : 1) | 0;
}

function __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv() {
 _abort();
}

function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv() {
 _abort();
}

function _strerror(i1) {
 i1 = i1 | 0;
 return ___strerror_l(i1, HEAP32[1149] | 0) | 0;
}

function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv() {
 _abort();
}

function __ZNSt3__217bad_function_callD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
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

function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}

function _isupper(i1) {
 i1 = i1 | 0;
 return (i1 + -65 | 0) >>> 0 < 26 | 0;
}

function __ZN10__cxxabiv116__shim_type_infoD2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}

function __ZNKSt9exception4whatEv(i1) {
 i1 = i1 | 0;
 return 16747;
}

function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
 return 17784;
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

function b6() {
 abort(6);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,_sn_write,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv120__function_type_info9can_catchEPKNS_16__shim_type_infoERPv];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib];
var FUNCTION_TABLE_vi = [b2,__ZNSt9exceptionD2Ev,__ZNSt3__217bad_function_callD0Ev,__ZNSt3__210__function6__baseIFN7todomvc5todos5TodosES4_EED2Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EED0Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEED2Ev,__ZNSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEED0Ev,__ZNSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE7destroyEv,__ZNSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEED2Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEED0Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEED2Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEED0Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE18destroy_deallocateEv,__ZNSt3__210__function6__baseIFbN10emscripten3valEEED2Ev,__ZNSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_ED0Ev,__ZNSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E7destroyEv,__ZNSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEED2Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEED0Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEED2Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEED0Ev
,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEED2Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEED0Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EED0Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EED0Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE18destroy_deallocateEv,__ZNSt3__210__function6__baseIFN7todomvc4task4TaskES4_EED2Ev,__ZNSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EED0Ev,__ZNSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EED2Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EED0Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE18destroy_deallocateEv,__ZNSt3__27codecvtIwc11__mbstate_tED2Ev,__ZNSt3__212codecvt_utf8IwLm1114111ELNS_12codecvt_modeE0EED0Ev,__ZNSt3__26locale5facet16__on_zero_sharedEv,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEED2Ev,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEED0Ev,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEED2Ev,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEED0Ev,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE7destroyEv
,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEED2Ev,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEED0Ev,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEED2Ev,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEED0Ev,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEED2Ev,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEED0Ev,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EED2Ev,__ZNSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EED0Ev,__ZNSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EED0Ev,__ZNSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EED0Ev,__ZNSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EED0Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EED2Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EED0Ev,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE7destroyEv,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE18destroy_deallocateEv
,__ZNSt3__27codecvtIwc11__mbstate_tED0Ev,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt11logic_errorD2Ev,__ZNSt11logic_errorD0Ev,__ZNSt13runtime_errorD2Ev,__ZNSt13runtime_errorD0Ev,__ZNSt12length_errorD0Ev,__ZNSt12out_of_rangeD0Ev,__ZNSt11range_errorD0Ev,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,__ZN10__cxxabiv119__pointer_type_infoD0Ev,__ZN10__cxxabiv120__function_type_infoD0Ev,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,__Z12onhashchangeNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2];
var FUNCTION_TABLE_vii = [b3,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE7__cloneEPNS0_6__baseISA_EE,__ZNKSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE7__cloneEPNS0_6__baseISB_EE,__ZNSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEEclEOSA_,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE7__cloneEPNS0_6__baseISH_EE,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEEclEOSG_,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE7__cloneEPNS0_6__baseISD_EE,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEEclEOi,__ZNKSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E7__cloneEPNS0_6__baseIS4_EE,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISF_EE,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISF_EE,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISF_EE,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEPNS0_6__baseIS9_EE,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEPNS0_6__baseIS9_EE,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEPNS0_6__baseIS9_EE,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE7__cloneEPNS0_6__baseISE_EE,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISH_EE,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISH_EE,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISH_EE,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISH_EE,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEPNS0_6__baseISH_EE,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE7__cloneEPNS0_6__baseISE_EE,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEPNS0_6__baseIS9_EE,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEPNS0_6__baseIS9_EE,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEPNS0_6__baseIS9_EE,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE7__cloneEPNS0_6__baseISE_EE,__ZN10emscripten8internal7InvokerIvJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEE6invokeEPFvS8_EPNS0_11BindingTypeIS8_EUt_E,b3,b3
,b3,b3,b3];
var FUNCTION_TABLE_ii = [b4,__ZNKSt9exception4whatEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE11target_typeEv,__ZNKSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE7__cloneEv,__ZNKSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE11target_typeEv,__ZNKSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E7__cloneEv,__ZNKSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE11target_typeEv,__ZNKSt3__214__codecvt_utf8IwE11do_encodingEv,__ZNKSt3__214__codecvt_utf8IwE16do_always_noconvEv,__ZNKSt3__214__codecvt_utf8IwE13do_max_lengthEv
,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE11target_typeEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE7__cloneEv,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE11target_typeEv,___stdio_close,__ZNKSt3__27codecvtIwc11__mbstate_tE11do_encodingEv,__ZNKSt3__27codecvtIwc11__mbstate_tE16do_always_noconvEv,__ZNKSt3__27codecvtIwc11__mbstate_tE13do_max_lengthEv,__ZNKSt11logic_error4whatEv,__ZNKSt13runtime_error4whatEv,__ZN7todomvc5todos7onClickEN10emscripten3valE,b4,b4,b4
,b4,b4,b4,b4,b4];
var FUNCTION_TABLE_viii = [b5,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EEclEOS9_,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EEclEOS8_,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EEclEOS8_,__ZNSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EEclEOS8_,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EEclEOSD_,__ZNSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EEclEOSD_,__ZNSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EEclEOS8_,__ZNSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EEclEOS8_,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EEclEOS8_,__ZNSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EEclEOSD_,b5,b5,b5,b5,b5];
var FUNCTION_TABLE_v = [b6,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b6];
var FUNCTION_TABLE_iiiiiiiii = [b7,__ZNKSt3__214__codecvt_utf8IwE6do_outER11__mbstate_tPKwS5_RS5_PcS7_RS7_,__ZNKSt3__214__codecvt_utf8IwE5do_inER11__mbstate_tPKcS5_RS5_PwS7_RS7_,__ZNKSt3__27codecvtIwc11__mbstate_tE6do_outERS1_PKwS5_RS5_PcS7_RS7_,__ZNKSt3__27codecvtIwc11__mbstate_tE5do_inERS1_PKcS5_RS5_PwS7_RS7_,b7,b7,b7];
var FUNCTION_TABLE_iiiii = [b8,__ZN10emscripten8internal7InvokerINS_3valEJRKjRKNSt3__212basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEES2_EE6invokeEPFS2_S4_SD_S2_EjPNS0_11BindingTypeISB_EUt_EPNS0_7_EM_VALE];
var FUNCTION_TABLE_viiiiii = [b9,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib];
var FUNCTION_TABLE_iii = [b10,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6FilterENS3_10TodoFilterEE4__17NS_9allocatorIS6_EEFNS3_5TodosES9_EE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZ11beforePatchN7todomvc5todos5TodosEE3__0NS_9allocatorIS5_EEFvNS_8functionIFS4_S4_EEEEE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__20NS_9allocatorISA_EEFvNS5_IFNS2_4task4TaskESE_EEEEE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__21NS_9allocatorISA_EEFviEE6targetERKSt9type_info,__ZNSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_EclEOS3_,__ZNKSt3__210__function6__funcIPFbN10emscripten3valEENS_9allocatorIS5_EES4_E6targetERKSt9type_info,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEEclEOSE_,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__10NS_9allocatorISA_EEFbN10emscripten3valEEE6targetERKSt9type_info,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEEclEOSE_,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__11NS_9allocatorISA_EEFbN10emscripten3valEEE6targetERKSt9type_info,__ZNSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEEclEOSE_,__ZNKSt3__210__function6__funcIZN7todomvc5todos4viewENS3_5TodosENS_8functionIFvNS5_IFS4_S4_EEEEEEE4__12NS_9allocatorISA_EEFbN10emscripten3valEEE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action7ArchiveEvE4__15NS_9allocatorIS5_EEFNS3_5TodosES8_EE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action9ToggleAllEbE4__16NS_9allocatorIS5_EEFNS3_5TodosES8_EE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action6ToggleEbE3__6NS_9allocatorIS5_EEFNS3_4TaskES8_EE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action3AddENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE4__13NS8_ISB_EEFNS3_5TodosESD_EE6targetERKSt9type_info,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEEclEOSG_,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__1NS_9allocatorISC_EEFbN10emscripten3valEEE6targetERKSt9type_info,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEEclEOSG_,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__2NS_9allocatorISC_EEFbN10emscripten3valEEE6targetERKSt9type_info,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEEclEOSG_,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__3NS_9allocatorISC_EEFbN10emscripten3valEEE6targetERKSt9type_info,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEEclEOSG_,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__4NS_9allocatorISC_EEFbN10emscripten3valEEE6targetERKSt9type_info,__ZNSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEEclEOSG_,__ZNKSt3__210__function6__funcIZN7todomvc4task4viewENS3_4TaskENS_8functionIFvNS5_IFS4_S4_EEEEEENS5_IFviEEEE3__5NS_9allocatorISC_EEFbN10emscripten3valEEE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CommitEditENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEE3__8NS8_ISB_EEFNS3_4TaskESD_EE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action10CancelEditEvE3__9NS_9allocatorIS5_EEFNS3_4TaskES8_EE6targetERKSt9type_info
,__ZNKSt3__210__function6__funcIZN7todomvc4task6Action9StartEditEvE3__7NS_9allocatorIS5_EEFNS3_4TaskES8_EE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6RemoveEiE4__14NS_9allocatorIS5_EEFNS3_5TodosES8_EE6targetERKSt9type_info,__ZNKSt3__210__function6__funcIZN7todomvc5todos6Action6ModifyEiNS_8functionIFNS2_4task4TaskES7_EEEE4__18NS_9allocatorISA_EEFNS3_5TodosESD_EE6targetERKSt9type_info];
var FUNCTION_TABLE_iiiiii = [b11,__ZNKSt3__214__codecvt_utf8IwE10do_unshiftER11__mbstate_tPcS4_RS4_,__ZNKSt3__214__codecvt_utf8IwE9do_lengthER11__mbstate_tPKcS5_j,__ZNKSt3__27codecvtIwc11__mbstate_tE10do_unshiftERS1_PcS4_RS4_,__ZNKSt3__27codecvtIwc11__mbstate_tE9do_lengthERS1_PKcS5_j,b11,b11,b11];
var FUNCTION_TABLE_viiii = [b12,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZN6asmdom16functionCallbackERKjRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEN10emscripten3valE,b12,b12,b12];

  return { _llvm_bswap_i32: _llvm_bswap_i32, _main: _main, _i64Subtract: _i64Subtract, ___udivdi3: ___udivdi3, setThrew: setThrew, dynCall_viii: dynCall_viii, _bitshift64Lshr: _bitshift64Lshr, _bitshift64Shl: _bitshift64Shl, dynCall_viiii: dynCall_viiii, dynCall_iiiiiiiii: dynCall_iiiiiiiii, ___cxa_is_pointer_type: ___cxa_is_pointer_type, dynCall_iii: dynCall_iii, _memset: _memset, _sbrk: _sbrk, _memcpy: _memcpy, stackAlloc: stackAlloc, dynCall_vii: dynCall_vii, ___uremdi3: ___uremdi3, dynCall_vi: dynCall_vi, __GLOBAL__sub_I_asm_dom_cpp: __GLOBAL__sub_I_asm_dom_cpp, getTempRet0: getTempRet0, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, ___udivmoddi4: ___udivmoddi4, setTempRet0: setTempRet0, _i64Add: _i64Add, dynCall_iiii: dynCall_iiii, _emscripten_get_global_libc: _emscripten_get_global_libc, dynCall_iiiii: dynCall_iiiii, ___getTypeName: ___getTypeName, dynCall_ii: dynCall_ii, __GLOBAL__sub_I_index_cpp: __GLOBAL__sub_I_index_cpp, dynCall_iiiiii: dynCall_iiiiii, stackSave: stackSave, dynCall_viiiii: dynCall_viiiii, ___cxa_can_catch: ___cxa_can_catch, _free: _free, runPostSets: runPostSets, dynCall_viiiiii: dynCall_viiiiii, establishStackSpace: establishStackSpace, _memmove: _memmove, stackRestore: stackRestore, _malloc: _malloc, _emscripten_replace_memory: _emscripten_replace_memory, dynCall_v: dynCall_v };
})
;