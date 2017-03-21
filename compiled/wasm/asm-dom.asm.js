Module["asm"] =  (function(global, env, buffer) {
  'almost asm';
  
  
  var Int8View = global.Int8Array;
  var Int16View = global.Int16Array;
  var Int32View = global.Int32Array;
  var Uint8View = global.Uint8Array;
  var Uint16View = global.Uint16Array;
  var Uint32View = global.Uint32Array;
  var Float32View = global.Float32Array;
  var Float64View = global.Float64Array;
  var HEAP8 = new Int8View(buffer);
  var HEAP16 = new Int16View(buffer);
  var HEAP32 = new Int32View(buffer);
  var HEAPU8 = new Uint8View(buffer);
  var HEAPU16 = new Uint16View(buffer);
  var HEAPU32 = new Uint32View(buffer);
  var HEAPF32 = new Float32View(buffer);
  var HEAPF64 = new Float64View(buffer);
  var byteLength = global.byteLength;


  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;

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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var floatReadValueFromPointer=env.floatReadValueFromPointer;
  var simpleReadValueFromPointer=env.simpleReadValueFromPointer;
  var __emval_call_void_method=env.__emval_call_void_method;
  var throwInternalError=env.throwInternalError;
  var get_first_emval=env.get_first_emval;
  var upcastPointer=env.upcastPointer;
  var getLiveInheritedInstances=env.getLiveInheritedInstances;
  var ___assert_fail=env.___assert_fail;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var ClassHandle=env.ClassHandle;
  var getShiftFromSize=env.getShiftFromSize;
  var __emval_get_property=env.__emval_get_property;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var runDestructor=env.runDestructor;
  var throwInstanceAlreadyDeleted=env.throwInstanceAlreadyDeleted;
  var RegisteredPointer_fromWireType=env.RegisteredPointer_fromWireType;
  var __emval_get_global=env.__emval_get_global;
  var init_RegisteredPointer=env.init_RegisteredPointer;
  var ClassHandle_isAliasOf=env.ClassHandle_isAliasOf;
  var flushPendingDeletes=env.flushPendingDeletes;
  var makeClassHandle=env.makeClassHandle;
  var whenDependentTypesAreResolved=env.whenDependentTypesAreResolved;
  var __embind_register_class_constructor=env.__embind_register_class_constructor;
  var __emval_allocateDestructors=env.__emval_allocateDestructors;
  var init_ClassHandle=env.init_ClassHandle;
  var ___syscall140=env.___syscall140;
  var ClassHandle_clone=env.ClassHandle_clone;
  var ___syscall146=env.___syscall146;
  var throwBindingError=env.throwBindingError;
  var RegisteredClass=env.RegisteredClass;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var __embind_register_value_object_field=env.__embind_register_value_object_field;
  var embind_init_charCodes=env.embind_init_charCodes;
  var __emval_as=env.__emval_as;
  var ___setErrNo=env.___setErrNo;
  var __embind_register_bool=env.__embind_register_bool;
  var ___resumeException=env.___resumeException;
  var createNamedFunction=env.createNamedFunction;
  var __embind_register_class_property=env.__embind_register_class_property;
  var __embind_register_emval=env.__embind_register_emval;
  var __embind_finalize_value_object=env.__embind_finalize_value_object;
  var __emval_decref=env.__emval_decref;
  var _pthread_once=env._pthread_once;
  var init_embind=env.init_embind;
  var constNoSmartPtrRawPointerToWireType=env.constNoSmartPtrRawPointerToWireType;
  var __emval_addMethodCaller=env.__emval_addMethodCaller;
  var heap32VectorToArray=env.heap32VectorToArray;
  var __emval_lookupTypes=env.__emval_lookupTypes;
  var __emval_call_method=env.__emval_call_method;
  var __emval_run_destructors=env.__emval_run_destructors;
  var ClassHandle_delete=env.ClassHandle_delete;
  var RegisteredPointer_destructor=env.RegisteredPointer_destructor;
  var ___syscall6=env.___syscall6;
  var ensureOverloadTable=env.ensureOverloadTable;
  var new_=env.new_;
  var downcastPointer=env.downcastPointer;
  var replacePublicSymbol=env.replacePublicSymbol;
  var __embind_register_class=env.__embind_register_class;
  var ClassHandle_deleteLater=env.ClassHandle_deleteLater;
  var RegisteredPointer_deleteObject=env.RegisteredPointer_deleteObject;
  var ClassHandle_isDeleted=env.ClassHandle_isDeleted;
  var __embind_register_integer=env.__embind_register_integer;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var __emval_take_value=env.__emval_take_value;
  var __embind_register_value_object=env.__embind_register_value_object;
  var _embind_repr=env._embind_repr;
  var _pthread_getspecific=env._pthread_getspecific;
  var __embind_register_class_function=env.__embind_register_class_function;
  var RegisteredPointer=env.RegisteredPointer;
  var craftInvokerFunction=env.craftInvokerFunction;
  var runDestructors=env.runDestructors;
  var requireRegisteredType=env.requireRegisteredType;
  var makeLegalFunctionName=env.makeLegalFunctionName;
  var _pthread_key_create=env._pthread_key_create;
  var __emval_set_property=env.__emval_set_property;
  var _pthread_setspecific=env._pthread_setspecific;
  var init_emval=env.init_emval;
  var shallowCopyInternalPointer=env.shallowCopyInternalPointer;
  var nonConstNoSmartPtrRawPointerToWireType=env.nonConstNoSmartPtrRawPointerToWireType;
  var _abort=env._abort;
  var requireHandle=env.requireHandle;
  var getTypeName=env.getTypeName;
  var validateThis=env.validateThis;
  var exposePublicSymbol=env.exposePublicSymbol;
  var __embind_register_std_string=env.__embind_register_std_string;
  var __emval_get_method_caller=env.__emval_get_method_caller;
  var __embind_register_memory_view=env.__embind_register_memory_view;
  var getInheritedInstance=env.getInheritedInstance;
  var __emval_typeof=env.__emval_typeof;
  var setDelayFunction=env.setDelayFunction;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var extendError=env.extendError;
  var __embind_register_void=env.__embind_register_void;
  var __embind_register_function=env.__embind_register_function;
  var RegisteredPointer_getPointee=env.RegisteredPointer_getPointee;
  var __emval_register=env.__emval_register;
  var __embind_register_std_wstring=env.__embind_register_std_wstring;
  var getStringOrSymbol=env.getStringOrSymbol;
  var __emval_incref=env.__emval_incref;
  var throwUnboundTypeError=env.throwUnboundTypeError;
  var readLatin1String=env.readLatin1String;
  var getBasestPointer=env.getBasestPointer;
  var getInheritedInstanceCount=env.getInheritedInstanceCount;
  var __embind_register_float=env.__embind_register_float;
  var integerReadValueFromPointer=env.integerReadValueFromPointer;
  var emval_get_global=env.emval_get_global;
  var genericPointerToWireType=env.genericPointerToWireType;
  var registerType=env.registerType;
  var ___cxa_throw=env.___cxa_throw;
  var __emval_new_cstring=env.__emval_new_cstring;
  var count_emval_handles=env.count_emval_handles;
  var requireFunction=env.requireFunction;
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

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;

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

function __Z7tagNameN10emscripten3valE($0,$$0$0$val) {
 $0 = $0|0;
 $$0$0$val = $$0$0$val|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (__emval_new_cstring((2603|0))|0);
 $2 = (__emval_get_property(($$0$0$val|0),($1|0))|0);
 __emval_decref(($1|0));
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($0,$2);
 __emval_decref(($2|0));
 return;
}
function __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($0,$$0$0$val) {
 $0 = $0|0;
 $$0$0$val = $$0$0$val|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0.0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = (+__emval_as(($$0$0$val|0),(1080|0),($1|0)));
 $3 = load4($1);
 $4 = (~~(($2))>>>0);
 $5 = $4;
 $6 = ((($5)) + 4|0);
 $7 = load4($5);
 ; store8($0,i64_const(0,0),4); store4($0+8|0,0,4);
 $8 = ($7>>>0)>(4294967279);
 if ($8) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $9 = ($7>>>0)<(11);
 if ($9) {
  $24 = $7&255;
  $25 = ((($0)) + 11|0);
  store1($25,$24);
  $26 = ($7|0)==(0);
  if ($26) {
   $$017$i = $0;
   $27 = (($$017$i) + ($7)|0);
   store1($27,0);
   __emval_run_destructors(($3|0));
   STACKTOP = sp;return;
  } else {
   $$016$i = $0;
  }
 } else {
  $10 = (($7) + 16)|0;
  $11 = $10 & -16;
  $12 = ($11|0)==(0);
  $$$i = $12 ? 1 : $11;
  $13 = (_malloc($$$i)|0);
  $14 = ($13|0)==(0|0);
  L8: do {
   if ($14) {
    while(1) {
     $15 = load4(9296);
     $16 = (($15) + 0)|0;
     store4(9296,$16);
     $17 = ($15|0)==(0);
     if ($17) {
      $$lcssa$i = 0;
      break L8;
     }
     $18 = $15;
     FUNCTION_TABLE_v[$18 & 3]();
     $19 = (_malloc($$$i)|0);
     $20 = ($19|0)==(0|0);
     if (!($20)) {
      $$lcssa$i = $19;
      break;
     }
    }
   } else {
    $$lcssa$i = $13;
   }
  } while(0);
  store4($0,$$lcssa$i);
  $21 = $11 | -2147483648;
  $22 = ((($0)) + 8|0);
  store4($22,$21);
  $23 = ((($0)) + 4|0);
  store4($23,$7);
  $$016$i = $$lcssa$i;
 }
 _memcpy(($$016$i|0),($6|0),($7|0))|0;
 $$017$i = $$016$i;
 $27 = (($$017$i) + ($7)|0);
 store1($27,0);
 __emval_run_destructors(($3|0));
 STACKTOP = sp;return;
}
function __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($$0$0$val,$0) {
 $$0$0$val = $$0$0$val|0;
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = (__emval_new_cstring((2611|0))|0);
 $3 = ((($0)) + 11|0);
 $4 = load1($3);
 $5 = ($4<<24>>24)<(0);
 $6 = ((($0)) + 4|0);
 $7 = load4($6);
 $8 = $4&255;
 $9 = $5 ? $7 : $8;
 $10 = (($9) + 4)|0;
 $11 = (_malloc($10)|0);
 store4($11,$9);
 $12 = ((($11)) + 4|0);
 $13 = load4($0);
 $14 = $5 ? $13 : $0;
 _memcpy(($12|0),($14|0),($9|0))|0;
 store4($1,$11);
 $15 = (__emval_take_value((1080|0),($1|0))|0);
 __emval_set_property(($$0$0$val|0),($2|0),($15|0));
 __emval_decref(($15|0));
 __emval_decref(($2|0));
 STACKTOP = sp;return;
}
function __Z14getTextContentN10emscripten3valE($0,$$0$0$val) {
 $0 = $0|0;
 $$0$0$val = $$0$0$val|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (__emval_new_cstring((2611|0))|0);
 $2 = (__emval_get_property(($$0$0$val|0),($1|0))|0);
 __emval_decref(($1|0));
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($0,$2);
 __emval_decref(($2|0));
 return;
}
function __Z9isDefinedN10emscripten3valE($$0$0$val) {
 $$0$0$val = $$0$0$val|0;
 var $$$$i6 = 0, $$$i5 = 0, $$0$i = 0, $$0$i19 = 0, $$01318$i = 0, $$01318$i10 = 0, $$014$i = 0, $$014$i26 = 0, $$01417$i = 0, $$01417$i11 = 0, $$015$lcssa$i = 0, $$015$lcssa$i17 = 0, $$01518$i = 0, $$01518$i15 = 0, $$019$i = 0, $$019$i9 = 0, $$1$lcssa$i = 0, $$1$lcssa$i23 = 0, $$pn$i = 0, $$pn$i25 = 0;
 var $$pn29$i = 0, $$pn29$i20 = 0, $$pre$i = 0, $$pre$i21 = 0, $$sroa$speculated19$i = 0, $$sroa$speculated19$i3 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0;
 var $76 = 0, $77 = 0, $78 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $0 = sp;
 $1 = (__emval_typeof(($$0$0$val|0))|0);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($0,$1);
 __emval_decref(($1|0));
 L1: do {
  if (((((2632) & 3)|0)==(0))) {
   $$015$lcssa$i = 2632;
   label = 4;
  } else {
   $$01518$i = 2632;$77 = (2632);
   while(1) {
    $2 = load1($$01518$i);
    $3 = ($2<<24>>24)==(0);
    if ($3) {
     $$pn$i = $77;
     break L1;
    }
    $4 = ((($$01518$i)) + 1|0);
    $5 = $4;
    $6 = $5 & 3;
    $7 = ($6|0)==(0);
    if ($7) {
     $$015$lcssa$i = $4;
     label = 4;
     break;
    } else {
     $$01518$i = $4;$77 = $5;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $$0$i = $$015$lcssa$i;
  while(1) {
   $8 = load4($$0$i);
   $9 = (($8) + -16843009)|0;
   $10 = $8 & -2139062144;
   $11 = $10 ^ -2139062144;
   $12 = $11 & $9;
   $13 = ($12|0)==(0);
   $14 = ((($$0$i)) + 4|0);
   if ($13) {
    $$0$i = $14;
   } else {
    break;
   }
  }
  $15 = $8&255;
  $16 = ($15<<24>>24)==(0);
  if ($16) {
   $$1$lcssa$i = $$0$i;
  } else {
   $$pn29$i = $$0$i;
   while(1) {
    $17 = ((($$pn29$i)) + 1|0);
    $$pre$i = load1($17);
    $18 = ($$pre$i<<24>>24)==(0);
    if ($18) {
     $$1$lcssa$i = $17;
     break;
    } else {
     $$pn29$i = $17;
    }
   }
  }
  $19 = $$1$lcssa$i;
  $$pn$i = $19;
 }
 $$014$i = (($$pn$i) - (2632))|0;
 $20 = ((($0)) + 11|0);
 $21 = load1($20);
 $22 = ($21<<24>>24)<(0);
 $23 = ((($0)) + 4|0);
 $24 = load4($23);
 $25 = $21&255;
 $26 = $22 ? $24 : $25;
 $27 = ($$014$i|0)==(-1);
 if ($27) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
  // unreachable;
 }
 $28 = load4($0);
 $29 = $22 ? $28 : $0;
 $30 = ($26>>>0)>($$014$i>>>0);
 $$sroa$speculated19$i = $30 ? $$014$i : $26;
 $31 = ($$sroa$speculated19$i|0)==(0);
 L18: do {
  if ($31) {
   label = 14;
  } else {
   $$01318$i = $29;$$01417$i = $$sroa$speculated19$i;$$019$i = 2632;
   while(1) {
    $32 = load1($$01318$i);
    $33 = load1($$019$i);
    $34 = ($32<<24>>24)==($33<<24>>24);
    if (!($34)) {
     label = 15;
     break L18;
    }
    $35 = (($$01417$i) + -1)|0;
    $36 = ((($$01318$i)) + 1|0);
    $37 = ((($$019$i)) + 1|0);
    $38 = ($35|0)==(0);
    if ($38) {
     label = 14;
     break;
    } else {
     $$01318$i = $36;$$01417$i = $35;$$019$i = $37;
    }
   }
  }
 } while(0);
 if ((label|0) == 14) {
  $39 = ($26>>>0)>=($$014$i>>>0);
  $40 = $30 ^ 1;
  $or$cond = $39 & $40;
  if ($or$cond) {
   $76 = 0;
  } else {
   label = 15;
  }
 }
 if ((label|0) == 15) {
  L26: do {
   if (((((2642) & 3)|0)==(0))) {
    $$015$lcssa$i17 = 2642;
    label = 18;
   } else {
    $$01518$i15 = 2642;$78 = (2642);
    while(1) {
     $41 = load1($$01518$i15);
     $42 = ($41<<24>>24)==(0);
     if ($42) {
      $$pn$i25 = $78;
      break L26;
     }
     $43 = ((($$01518$i15)) + 1|0);
     $44 = $43;
     $45 = $44 & 3;
     $46 = ($45|0)==(0);
     if ($46) {
      $$015$lcssa$i17 = $43;
      label = 18;
      break;
     } else {
      $$01518$i15 = $43;$78 = $44;
     }
    }
   }
  } while(0);
  if ((label|0) == 18) {
   $$0$i19 = $$015$lcssa$i17;
   while(1) {
    $47 = load4($$0$i19);
    $48 = (($47) + -16843009)|0;
    $49 = $47 & -2139062144;
    $50 = $49 ^ -2139062144;
    $51 = $50 & $48;
    $52 = ($51|0)==(0);
    $53 = ((($$0$i19)) + 4|0);
    if ($52) {
     $$0$i19 = $53;
    } else {
     break;
    }
   }
   $54 = $47&255;
   $55 = ($54<<24>>24)==(0);
   if ($55) {
    $$1$lcssa$i23 = $$0$i19;
   } else {
    $$pn29$i20 = $$0$i19;
    while(1) {
     $56 = ((($$pn29$i20)) + 1|0);
     $$pre$i21 = load1($56);
     $57 = ($$pre$i21<<24>>24)==(0);
     if ($57) {
      $$1$lcssa$i23 = $56;
      break;
     } else {
      $$pn29$i20 = $56;
     }
    }
   }
   $58 = $$1$lcssa$i23;
   $$pn$i25 = $58;
  }
  $$014$i26 = (($$pn$i25) - (2642))|0;
  $59 = ($$014$i26|0)==(-1);
  if ($59) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
   // unreachable;
  }
  $60 = ($26>>>0)>($$014$i26>>>0);
  $$sroa$speculated19$i3 = $60 ? $$014$i26 : $26;
  $61 = ($$sroa$speculated19$i3|0)==(0);
  L43: do {
   if ($61) {
    label = 29;
   } else {
    $$01318$i10 = $29;$$01417$i11 = $$sroa$speculated19$i3;$$019$i9 = 2642;
    while(1) {
     $62 = load1($$01318$i10);
     $63 = load1($$019$i9);
     $64 = ($62<<24>>24)==($63<<24>>24);
     if (!($64)) {
      break;
     }
     $65 = (($$01417$i11) + -1)|0;
     $66 = ((($$01318$i10)) + 1|0);
     $67 = ((($$019$i9)) + 1|0);
     $68 = ($65|0)==(0);
     if ($68) {
      label = 29;
      break L43;
     } else {
      $$01318$i10 = $66;$$01417$i11 = $65;$$019$i9 = $67;
     }
    }
    $69 = $62&255;
    $70 = $63&255;
    $71 = (($69) - ($70))|0;
    $72 = ($71|0)==(0);
    if ($72) {
     label = 29;
    } else {
     $75 = $71;
    }
   }
  } while(0);
  if ((label|0) == 29) {
   $73 = ($26>>>0)<($$014$i26>>>0);
   $$$i5 = $60&1;
   $$$$i6 = $73 ? -1 : $$$i5;
   $75 = $$$$i6;
  }
  $74 = ($75|0)!=(0);
  $76 = $74;
 }
 if (!($22)) {
  STACKTOP = sp;return ($76|0);
 }
 _free($28);
 STACKTOP = sp;return ($76|0);
}
function __Z5addNSR5VNode($0) {
 $0 = $0|0;
 var $$$i = 0, $$0$i = 0, $$01318$i = 0, $$014$i = 0, $$01417$i = 0, $$015$lcssa$i = 0, $$01518$i = 0, $$017$off041$i = 0, $$017$off042$i = 0, $$017$off047$i = 0, $$018$off039$i = 0, $$018$off046$i = 0, $$019$i = 0, $$01937$i = 0, $$01938$i = 0, $$01945$i = 0, $$02035$i = 0, $$02036$i = 0, $$02044$i = 0, $$1$lcssa$i = 0;
 var $$lcssa$i = 0, $$lcssa$i8 = 0, $$phitmp$i$i = 0, $$pn$i = 0, $$pn29$i = 0, $$pr = 0, $$pre = 0, $$pre$i = 0, $$sroa$0$0$$sroa_idx = 0, $$sroa$7$0$$sroa_idx6 = 0, $$sroa$8$0$$sroa_idx9 = 0, $$sroa$speculated19$i = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0;
 var $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $or$cond = 0, $phitmp$i$i = 0, $phitmp$i22$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 84|0);
 $2 = (_malloc(32)|0);
 $3 = ($2|0)==(0|0);
 L1: do {
  if ($3) {
   while(1) {
    $4 = load4(9296);
    $5 = (($4) + 0)|0;
    store4(9296,$5);
    $6 = ($4|0)==(0);
    if ($6) {
     $$lcssa$i = 0;
     break L1;
    }
    $7 = $4;
    FUNCTION_TABLE_v[$7 & 3]();
    $8 = (_malloc(32)|0);
    $9 = ($8|0)==(0|0);
    if (!($9)) {
     $$lcssa$i = $8;
     break;
    }
   }
  } else {
   $$lcssa$i = $2;
  }
 } while(0);
 ; store8($$lcssa$i,load8(2647,1),1); store8($$lcssa$i+8 | 0,load8(2647+8 | 0,1),1); store8($$lcssa$i+16 | 0,load8(2647+16 | 0,1),1); store2($$lcssa$i+24 | 0,load2(2647+24 | 0,1),1);
 $10 = ((($$lcssa$i)) + 26|0);
 store1($10,0);
 $11 = ((($1)) + 11|0);
 $12 = load1($11);
 $13 = ($12<<24>>24)<(0);
 if ($13) {
  $14 = load4($1);
  store1($14,0);
  $15 = ((($0)) + 88|0);
  store4($15,0);
  $$pr = load1($11);
  $16 = ($$pr<<24>>24)<(0);
  if ($16) {
   $17 = ((($0)) + 92|0);
   $18 = load4($17);
   $19 = $18 & 2147483647;
   $phitmp$i$i = (($19) + -1)|0;
   $108 = 1;$23 = 0;$27 = $phitmp$i$i;$43 = $$pr;
  } else {
   $21 = $$pr;
   label = 8;
  }
 } else {
  store1($1,0);
  store1($11,0);
  $21 = 0;
  label = 8;
 }
 if ((label|0) == 8) {
  $20 = $21&255;
  $108 = 0;$23 = $20;$27 = 10;$43 = $21;
 }
 $22 = ($23>>>0)<(11);
 $24 = (($23) + 16)|0;
 $25 = $24 & 496;
 $phitmp$i22$i = (($25) + -1)|0;
 $$phitmp$i$i = $22 ? 10 : $phitmp$i22$i;
 $26 = ($$phitmp$i$i|0)==($27|0);
 do {
  if (!($26)) {
   do {
    if ($22) {
     $39 = load4($1);
     if ($108) {
      $$017$off042$i = 0;$$01938$i = $39;$$02036$i = $1;
      label = 18;
     } else {
      $$017$off047$i = 0;$$018$off046$i = 1;$$01945$i = $39;$$02044$i = $1;
      label = 19;
     }
    } else {
     $28 = (($$phitmp$i$i) + 1)|0;
     $29 = ($28|0)==(0);
     $$$i = $29 ? 1 : $28;
     $30 = (_malloc($$$i)|0);
     $31 = ($30|0)==(0|0);
     L18: do {
      if ($31) {
       while(1) {
        $32 = load4(9296);
        $33 = (($32) + 0)|0;
        store4(9296,$33);
        $34 = ($32|0)==(0);
        if ($34) {
         $$lcssa$i8 = 0;
         break L18;
        }
        $35 = $32;
        FUNCTION_TABLE_v[$35 & 3]();
        $36 = (_malloc($$$i)|0);
        $37 = ($36|0)==(0|0);
        if (!($37)) {
         $$lcssa$i8 = $36;
         break;
        }
       }
      } else {
       $$lcssa$i8 = $30;
      }
     } while(0);
     if ($108) {
      $38 = load4($1);
      $$017$off042$i = 1;$$01938$i = $38;$$02036$i = $$lcssa$i8;
      label = 18;
      break;
     } else {
      $$017$off047$i = 1;$$018$off046$i = 0;$$01945$i = $1;$$02044$i = $$lcssa$i8;
      label = 19;
      break;
     }
    }
   } while(0);
   if ((label|0) == 18) {
    $40 = ((($0)) + 88|0);
    $41 = load4($40);
    $$017$off041$i = $$017$off042$i;$$018$off039$i = 1;$$01937$i = $$01938$i;$$02035$i = $$02036$i;$45 = $41;
   }
   else if ((label|0) == 19) {
    $42 = $43&255;
    $$017$off041$i = $$017$off047$i;$$018$off039$i = $$018$off046$i;$$01937$i = $$01945$i;$$02035$i = $$02044$i;$45 = $42;
   }
   $44 = (($45) + 1)|0;
   $46 = ($44|0)==(0);
   if (!($46)) {
    _memcpy(($$02035$i|0),($$01937$i|0),($44|0))|0;
   }
   if ($$018$off039$i) {
    _free($$01937$i);
   }
   if ($$017$off041$i) {
    $47 = (($$phitmp$i$i) + 1)|0;
    $48 = $47 | -2147483648;
    $49 = ((($0)) + 92|0);
    store4($49,$48);
    $50 = ((($0)) + 88|0);
    store4($50,$23);
    store4($1,$$02035$i);
    break;
   } else {
    $51 = $23&255;
    store1($11,$51);
    break;
   }
  }
 } while(0);
 $$sroa$0$0$$sroa_idx = ((($0)) + 84|0);
 store4($$sroa$0$0$$sroa_idx,$$lcssa$i);
 $$sroa$7$0$$sroa_idx6 = ((($0)) + 88|0);
 store4($$sroa$7$0$$sroa_idx6,26);
 $$sroa$8$0$$sroa_idx9 = ((($0)) + 92|0);
 store4($$sroa$8$0$$sroa_idx9,-2147483616);
 L40: do {
  if (((((2674) & 3)|0)==(0))) {
   $$015$lcssa$i = 2674;
   label = 30;
  } else {
   $$01518$i = 2674;$109 = (2674);
   while(1) {
    $52 = load1($$01518$i);
    $53 = ($52<<24>>24)==(0);
    if ($53) {
     $$pn$i = $109;
     break L40;
    }
    $54 = ((($$01518$i)) + 1|0);
    $55 = $54;
    $56 = $55 & 3;
    $57 = ($56|0)==(0);
    if ($57) {
     $$015$lcssa$i = $54;
     label = 30;
     break;
    } else {
     $$01518$i = $54;$109 = $55;
    }
   }
  }
 } while(0);
 if ((label|0) == 30) {
  $$0$i = $$015$lcssa$i;
  while(1) {
   $58 = load4($$0$i);
   $59 = (($58) + -16843009)|0;
   $60 = $58 & -2139062144;
   $61 = $60 ^ -2139062144;
   $62 = $61 & $59;
   $63 = ($62|0)==(0);
   $64 = ((($$0$i)) + 4|0);
   if ($63) {
    $$0$i = $64;
   } else {
    break;
   }
  }
  $65 = $58&255;
  $66 = ($65<<24>>24)==(0);
  if ($66) {
   $$1$lcssa$i = $$0$i;
  } else {
   $$pn29$i = $$0$i;
   while(1) {
    $67 = ((($$pn29$i)) + 1|0);
    $$pre$i = load1($67);
    $68 = ($$pre$i<<24>>24)==(0);
    if ($68) {
     $$1$lcssa$i = $67;
     break;
    } else {
     $$pn29$i = $67;
    }
   }
  }
  $69 = $$1$lcssa$i;
  $$pn$i = $69;
 }
 $$014$i = (($$pn$i) - (2674))|0;
 $70 = ((($0)) + 11|0);
 $71 = load1($70);
 $72 = ($71<<24>>24)<(0);
 $73 = ((($0)) + 4|0);
 $74 = load4($73);
 $75 = $71&255;
 $76 = $72 ? $74 : $75;
 $77 = ($$014$i|0)==(-1);
 if ($77) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
  // unreachable;
 }
 $78 = ($76>>>0)>($$014$i>>>0);
 $$sroa$speculated19$i = $78 ? $$014$i : $76;
 $79 = ($$sroa$speculated19$i|0)==(0);
 L57: do {
  if ($79) {
   label = 41;
  } else {
   $80 = load4($0);
   $81 = $72 ? $80 : $0;
   $$01318$i = $81;$$01417$i = $$sroa$speculated19$i;$$019$i = 2674;
   while(1) {
    $82 = load1($$01318$i);
    $83 = load1($$019$i);
    $84 = ($82<<24>>24)==($83<<24>>24);
    if (!($84)) {
     break L57;
    }
    $85 = (($$01417$i) + -1)|0;
    $86 = ((($$01318$i)) + 1|0);
    $87 = ((($$019$i)) + 1|0);
    $88 = ($85|0)==(0);
    if ($88) {
     label = 41;
     break;
    } else {
     $$01318$i = $86;$$01417$i = $85;$$019$i = $87;
    }
   }
  }
 } while(0);
 if ((label|0) == 41) {
  $89 = ($76>>>0)>=($$014$i>>>0);
  $90 = $78 ^ 1;
  $or$cond = $89 & $90;
  if ($or$cond) {
   return;
  }
 }
 $91 = ((($0)) + 100|0);
 $92 = load4($91);
 $93 = ((($0)) + 104|0);
 $94 = load4($93);
 $95 = ($92|0)==($94|0);
 if ($95) {
  return;
 }
 $96 = $92;
 $97 = $94;
 $98 = (($97) - ($96))|0;
 $99 = ($98|0)==(0);
 if ($99) {
  return;
 }
 $100 = (($98|0) / 112)&-1;
 $101 = (($100) + -1)|0;
 $102 = (($92) + (($101*112)|0)|0);
 __Z5addNSR5VNode($102);
 $103 = ($101|0)==(0);
 if ($103) {
  return;
 } else {
  $105 = $101;
 }
 while(1) {
  $$pre = load4($91);
  $104 = (($105) + -1)|0;
  $106 = (($$pre) + (($104*112)|0)|0);
  __Z5addNSR5VNode($106);
  $107 = ($104|0)==(0);
  if ($107) {
   break;
  } else {
   $105 = $104;
  }
 }
 return;
}
function __ZNKSt3__26vectorI5VNodeNS_9allocatorIS1_EEE4sizeEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 4|0);
 $2 = load4($1);
 $3 = load4($0);
 $4 = (($2) - ($3))|0;
 $5 = (($4|0) / 112)&-1;
 return ($5|0);
}
function __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i1 = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i10 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0;
 var $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0;
 var $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0;
 var $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0;
 var $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0;
 var $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0;
 var $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i3 = 0, $phitmp$i11 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 36|0);
 $3 = ((($0)) + 40|0);
 store4($3,0);
 $4 = ((($0)) + 44|0);
 store4($4,0);
 $5 = ((($0)) + 40|0);
 ; store8($0,i64_const(0,0),4); store8($0+8|0,i64_const(0,0),4); store8($0+16|0,i64_const(0,0),4); store8($0+24|0,i64_const(0,0),4); store4($0+32|0,0,4);
 store4($2,$5);
 $6 = ((($0)) + 48|0);
 $7 = ((($0)) + 52|0);
 store4($7,0);
 $8 = ((($0)) + 56|0);
 store4($8,0);
 $9 = ((($0)) + 52|0);
 store4($6,$9);
 $10 = ((($0)) + 60|0);
 $11 = ((($0)) + 64|0);
 store4($11,0);
 $12 = ((($0)) + 68|0);
 store4($12,0);
 $13 = ((($0)) + 64|0);
 store4($10,$13);
 $14 = ((($0)) + 72|0);
 ; store8($14,i64_const(0,0),4); store8($14+8|0,i64_const(0,0),4); store8($14+16|0,i64_const(0,0),4);
 $15 = ((($0)) + 96|0);
 store4($15,(1));
 $16 = ((($0)) + 100|0);
 store4($16,0);
 $17 = ((($0)) + 104|0);
 store4($17,0);
 $18 = ((($0)) + 108|0);
 store4($18,0);
 $19 = ($0|0)==($1|0);
 do {
  if (!($19)) {
   $20 = ((($1)) + 11|0);
   $21 = load1($20);
   $22 = ($21<<24>>24)<(0);
   $23 = load4($1);
   $24 = $22 ? $23 : $1;
   $25 = ((($1)) + 4|0);
   $26 = load4($25);
   $27 = $21&255;
   $28 = $22 ? $26 : $27;
   $29 = ((($0)) + 11|0);
   $30 = ($28>>>0)>(10);
   if (!($30)) {
    $31 = ($28|0)==(0);
    if (!($31)) {
     _memmove(($0|0),($24|0),($28|0))|0;
    }
    $32 = (($0) + ($28)|0);
    store1($32,0);
    $33 = load1($29);
    $34 = ($33<<24>>24)<(0);
    if ($34) {
     $35 = ((($0)) + 4|0);
     store4($35,$28);
     break;
    } else {
     $36 = $28&255;
     store1($29,$36);
     break;
    }
   }
   $37 = (($28) + -10)|0;
   $38 = ($37>>>0)>(4294967268);
   if ($38) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $39 = ($28>>>0)<(20);
   $$sroa$speculated$i = $39 ? 20 : $28;
   $40 = ($$sroa$speculated$i>>>0)<(11);
   $41 = (($$sroa$speculated$i) + 16)|0;
   $42 = $41 & -16;
   $phitmp$i = $40 ? 11 : $42;
   $43 = ($phitmp$i|0)==(0);
   $$$i = $43 ? 1 : $phitmp$i;
   $44 = (_malloc($$$i)|0);
   $45 = ($44|0)==(0|0);
   L15: do {
    if ($45) {
     while(1) {
      $46 = load4(9296);
      $47 = (($46) + 0)|0;
      store4(9296,$47);
      $48 = ($46|0)==(0);
      if ($48) {
       $$lcssa$i = 0;
       break L15;
      }
      $49 = $46;
      FUNCTION_TABLE_v[$49 & 3]();
      $50 = (_malloc($$$i)|0);
      $51 = ($50|0)==(0|0);
      if (!($51)) {
       $$lcssa$i = $50;
       break;
      }
     }
    } else {
     $$lcssa$i = $44;
    }
   } while(0);
   _memcpy(($$lcssa$i|0),($24|0),($28|0))|0;
   store4($0,$$lcssa$i);
   $52 = $phitmp$i | -2147483648;
   $53 = ((($0)) + 8|0);
   store4($53,$52);
   $54 = ((($0)) + 4|0);
   store4($54,$28);
   $55 = (($$lcssa$i) + ($28)|0);
   store1($55,0);
  }
 } while(0);
 $56 = ((($0)) + 12|0);
 $57 = ((($14)) + 11|0);
 $58 = load1($57);
 $59 = ($58<<24>>24)<(0);
 $60 = load4($14);
 $61 = $59 ? $60 : $14;
 $62 = ((($0)) + 76|0);
 $63 = load4($62);
 $64 = $58&255;
 $65 = $59 ? $63 : $64;
 $66 = ((($56)) + 11|0);
 $67 = load1($66);
 $68 = ($67<<24>>24)<(0);
 if ($68) {
  $69 = ((($0)) + 20|0);
  $70 = load4($69);
  $71 = $70 & 2147483647;
  $phitmp$i$i3 = (($71) + -1)|0;
  $73 = $phitmp$i$i3;
 } else {
  $73 = 10;
 }
 $72 = ($65>>>0)>($73>>>0);
 do {
  if ($72) {
   $82 = (($65) - ($73))|0;
   $83 = (-18 - ($73))|0;
   $84 = ($83>>>0)<($82>>>0);
   if ($84) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($68) {
    $85 = load4($56);
    $104 = $85;
   } else {
    $104 = $56;
   }
   $86 = ($73>>>0)<(2147483623);
   if ($86) {
    $87 = $73 << 1;
    $88 = ($65>>>0)<($87>>>0);
    $$sroa$speculated$i10 = $88 ? $87 : $65;
    $89 = ($$sroa$speculated$i10>>>0)<(11);
    $90 = (($$sroa$speculated$i10) + 16)|0;
    $91 = $90 & -16;
    $phitmp$i11 = $89 ? 11 : $91;
    $93 = $phitmp$i11;
   } else {
    $93 = -17;
   }
   $92 = ($93|0)==(0);
   $$$i1 = $92 ? 1 : $93;
   $94 = (_malloc($$$i1)|0);
   $95 = ($94|0)==(0|0);
   L36: do {
    if ($95) {
     while(1) {
      $96 = load4(9296);
      $97 = (($96) + 0)|0;
      store4(9296,$97);
      $98 = ($96|0)==(0);
      if ($98) {
       $$lcssa$i7 = 0;
       break L36;
      }
      $99 = $96;
      FUNCTION_TABLE_v[$99 & 3]();
      $100 = (_malloc($$$i1)|0);
      $101 = ($100|0)==(0|0);
      if (!($101)) {
       $$lcssa$i7 = $100;
       break;
      }
     }
    } else {
     $$lcssa$i7 = $94;
    }
   } while(0);
   $102 = ($65|0)==(0);
   if (!($102)) {
    _memcpy(($$lcssa$i7|0),($61|0),($65|0))|0;
   }
   $103 = ($73|0)==(10);
   if (!($103)) {
    _free($104);
   }
   store4($56,$$lcssa$i7);
   $105 = $93 | -2147483648;
   $106 = ((($0)) + 20|0);
   store4($106,$105);
   $107 = ((($0)) + 16|0);
   store4($107,$65);
   $108 = (($$lcssa$i7) + ($65)|0);
   store1($108,0);
  } else {
   if ($68) {
    $74 = load4($56);
    $76 = $74;
   } else {
    $76 = $56;
   }
   $75 = ($65|0)==(0);
   if (!($75)) {
    _memmove(($76|0),($61|0),($65|0))|0;
   }
   $77 = (($76) + ($65)|0);
   store1($77,0);
   $78 = load1($66);
   $79 = ($78<<24>>24)<(0);
   if ($79) {
    $80 = ((($0)) + 16|0);
    store4($80,$65);
    break;
   } else {
    $81 = $65&255;
    store1($66,$81);
    break;
   }
  }
 } while(0);
 $109 = ((($0)) + 11|0);
 $110 = load1($109);
 $111 = ($110<<24>>24)<(0);
 $112 = ((($0)) + 4|0);
 $113 = load4($112);
 $114 = $110&255;
 $115 = $111 ? $113 : $114;
 $116 = ($115>>>0)>(2);
 if (!($116)) {
  return;
 }
 $117 = load4($0);
 $118 = $111 ? $117 : $0;
 $119 = load1($118);
 $120 = ($119<<24>>24)==(115);
 if (!($120)) {
  return;
 }
 $121 = ((($118)) + 1|0);
 $122 = load1($121);
 $123 = ($122<<24>>24)==(118);
 if (!($123)) {
  return;
 }
 $124 = ((($118)) + 2|0);
 $125 = load1($124);
 $126 = ($125<<24>>24)==(103);
 if (!($126)) {
  return;
 }
 $127 = ($115|0)==(3);
 L71: do {
  if (!($127)) {
   $128 = ((($118)) + 3|0);
   $129 = load1($128);
   switch ($129<<24>>24) {
   case 35: case 46:  {
    break L71;
    break;
   }
   default: {
   }
   }
   return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 return;
}
function __ZN5VNodeD2Ev($0) {
 $0 = $0|0;
 var $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 100|0);
 $2 = load4($1);
 $3 = ($2|0)==(0|0);
 if (!($3)) {
  $4 = ((($0)) + 104|0);
  $5 = load4($4);
  $6 = ($5|0)==($2|0);
  if ($6) {
   $11 = $2;
  } else {
   $8 = $5;
   while(1) {
    $7 = ((($8)) + -112|0);
    store4($4,$7);
    __ZN5VNodeD2Ev($7);
    $9 = load4($4);
    $10 = ($9|0)==($2|0);
    if ($10) {
     break;
    } else {
     $8 = $9;
    }
   }
   $$pre = load4($1);
   $11 = $$pre;
  }
  _free($11);
 }
 $12 = ((($0)) + 96|0);
 $13 = load4($12);
 __emval_decref(($13|0));
 $14 = ((($0)) + 84|0);
 $15 = ((($14)) + 11|0);
 $16 = load1($15);
 $17 = ($16<<24>>24)<(0);
 if ($17) {
  $18 = load4($14);
  _free($18);
 }
 $19 = ((($0)) + 72|0);
 $20 = ((($19)) + 11|0);
 $21 = load1($20);
 $22 = ($21<<24>>24)<(0);
 if ($22) {
  $23 = load4($19);
  _free($23);
 }
 $24 = ((($0)) + 64|0);
 $25 = load4($24);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($25);
 $26 = ((($0)) + 52|0);
 $27 = load4($26);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($27);
 $28 = ((($0)) + 40|0);
 $29 = load4($28);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($29);
 $30 = ((($0)) + 24|0);
 $31 = ((($30)) + 11|0);
 $32 = load1($31);
 $33 = ($32<<24>>24)<(0);
 if ($33) {
  $34 = load4($30);
  _free($34);
 }
 $35 = ((($0)) + 12|0);
 $36 = ((($35)) + 11|0);
 $37 = load1($36);
 $38 = ($37<<24>>24)<(0);
 if ($38) {
  $39 = load4($35);
  _free($39);
 }
 $40 = ((($0)) + 11|0);
 $41 = load1($40);
 $42 = ($41<<24>>24)<(0);
 if (!($42)) {
  return;
 }
 $43 = load4($0);
 _free($43);
 return;
}
function __Z4h_tiNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i1 = 0, $$$i9 = 0, $$lcssa$i = 0, $$lcssa$i15 = 0, $$lcssa$i7 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i11 = 0, $$sroa$speculated$i24 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0;
 var $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0;
 var $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0;
 var $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0;
 var $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i17 = 0, $phitmp$i12 = 0, $phitmp$i25 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 36|0);
 $4 = ((($0)) + 40|0);
 store4($4,0);
 $5 = ((($0)) + 44|0);
 store4($5,0);
 $6 = ((($0)) + 40|0);
 ; store8($0,i64_const(0,0),4); store8($0+8|0,i64_const(0,0),4); store8($0+16|0,i64_const(0,0),4); store8($0+24|0,i64_const(0,0),4); store4($0+32|0,0,4);
 store4($3,$6);
 $7 = ((($0)) + 48|0);
 $8 = ((($0)) + 52|0);
 store4($8,0);
 $9 = ((($0)) + 56|0);
 store4($9,0);
 $10 = ((($0)) + 52|0);
 store4($7,$10);
 $11 = ((($0)) + 60|0);
 $12 = ((($0)) + 64|0);
 store4($12,0);
 $13 = ((($0)) + 68|0);
 store4($13,0);
 $14 = ((($0)) + 64|0);
 store4($11,$14);
 $15 = ((($0)) + 72|0);
 ; store8($15,i64_const(0,0),4); store8($15+8|0,i64_const(0,0),4); store8($15+16|0,i64_const(0,0),4);
 $16 = ((($0)) + 96|0);
 store4($16,(1));
 $17 = ((($0)) + 100|0);
 store4($17,0);
 $18 = ((($0)) + 104|0);
 store4($18,0);
 $19 = ((($0)) + 108|0);
 store4($19,0);
 do {
  if ($2) {
   $20 = ((($0)) + 24|0);
   $21 = ($20|0)==($1|0);
   if (!($21)) {
    $22 = ((($1)) + 11|0);
    $23 = load1($22);
    $24 = ($23<<24>>24)<(0);
    $25 = load4($1);
    $26 = $24 ? $25 : $1;
    $27 = ((($1)) + 4|0);
    $28 = load4($27);
    $29 = $23&255;
    $30 = $24 ? $28 : $29;
    $31 = ((($20)) + 11|0);
    $32 = ($30>>>0)>(10);
    if (!($32)) {
     $33 = ($30|0)==(0);
     if (!($33)) {
      _memmove(($20|0),($26|0),($30|0))|0;
     }
     $34 = (($20) + ($30)|0);
     store1($34,0);
     $35 = load1($31);
     $36 = ($35<<24>>24)<(0);
     if ($36) {
      $37 = ((($0)) + 28|0);
      store4($37,$30);
      break;
     } else {
      $38 = $30&255;
      store1($31,$38);
      break;
     }
    }
    $39 = (($30) + -10)|0;
    $40 = ($39>>>0)>(4294967268);
    if ($40) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $41 = ($30>>>0)<(20);
    $$sroa$speculated$i = $41 ? 20 : $30;
    $42 = ($$sroa$speculated$i>>>0)<(11);
    $43 = (($$sroa$speculated$i) + 16)|0;
    $44 = $43 & -16;
    $phitmp$i = $42 ? 11 : $44;
    $45 = ($phitmp$i|0)==(0);
    $$$i = $45 ? 1 : $phitmp$i;
    $46 = (_malloc($$$i)|0);
    $47 = ($46|0)==(0|0);
    L16: do {
     if ($47) {
      while(1) {
       $48 = load4(9296);
       $49 = (($48) + 0)|0;
       store4(9296,$49);
       $50 = ($48|0)==(0);
       if ($50) {
        $$lcssa$i = 0;
        break L16;
       }
       $51 = $48;
       FUNCTION_TABLE_v[$51 & 3]();
       $52 = (_malloc($$$i)|0);
       $53 = ($52|0)==(0|0);
       if (!($53)) {
        $$lcssa$i = $52;
        break;
       }
      }
     } else {
      $$lcssa$i = $46;
     }
    } while(0);
    _memcpy(($$lcssa$i|0),($26|0),($30|0))|0;
    store4($20,$$lcssa$i);
    $54 = $phitmp$i | -2147483648;
    $55 = ((($0)) + 32|0);
    store4($55,$54);
    $56 = ((($0)) + 28|0);
    store4($56,$30);
    $57 = (($$lcssa$i) + ($30)|0);
    store1($57,0);
   }
  } else {
   $58 = ($0|0)==($1|0);
   if (!($58)) {
    $59 = ((($1)) + 11|0);
    $60 = load1($59);
    $61 = ($60<<24>>24)<(0);
    $62 = load4($1);
    $63 = $61 ? $62 : $1;
    $64 = ((($1)) + 4|0);
    $65 = load4($64);
    $66 = $60&255;
    $67 = $61 ? $65 : $66;
    $68 = ((($0)) + 11|0);
    $69 = ($67>>>0)>(10);
    if (!($69)) {
     $70 = ($67|0)==(0);
     if (!($70)) {
      _memmove(($0|0),($63|0),($67|0))|0;
     }
     $71 = (($0) + ($67)|0);
     store1($71,0);
     $72 = load1($68);
     $73 = ($72<<24>>24)<(0);
     if ($73) {
      $74 = ((($0)) + 4|0);
      store4($74,$67);
      break;
     } else {
      $75 = $67&255;
      store1($68,$75);
      break;
     }
    }
    $76 = (($67) + -10)|0;
    $77 = ($76>>>0)>(4294967268);
    if ($77) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $78 = ($67>>>0)<(20);
    $$sroa$speculated$i11 = $78 ? 20 : $67;
    $79 = ($$sroa$speculated$i11>>>0)<(11);
    $80 = (($$sroa$speculated$i11) + 16)|0;
    $81 = $80 & -16;
    $phitmp$i12 = $79 ? 11 : $81;
    $82 = ($phitmp$i12|0)==(0);
    $$$i1 = $82 ? 1 : $phitmp$i12;
    $83 = (_malloc($$$i1)|0);
    $84 = ($83|0)==(0|0);
    L35: do {
     if ($84) {
      while(1) {
       $85 = load4(9296);
       $86 = (($85) + 0)|0;
       store4(9296,$86);
       $87 = ($85|0)==(0);
       if ($87) {
        $$lcssa$i7 = 0;
        break L35;
       }
       $88 = $85;
       FUNCTION_TABLE_v[$88 & 3]();
       $89 = (_malloc($$$i1)|0);
       $90 = ($89|0)==(0|0);
       if (!($90)) {
        $$lcssa$i7 = $89;
        break;
       }
      }
     } else {
      $$lcssa$i7 = $83;
     }
    } while(0);
    _memcpy(($$lcssa$i7|0),($63|0),($67|0))|0;
    store4($0,$$lcssa$i7);
    $91 = $phitmp$i12 | -2147483648;
    $92 = ((($0)) + 8|0);
    store4($92,$91);
    $93 = ((($0)) + 4|0);
    store4($93,$67);
    $94 = (($$lcssa$i7) + ($67)|0);
    store1($94,0);
   }
  }
 } while(0);
 $95 = ((($0)) + 12|0);
 $96 = ((($15)) + 11|0);
 $97 = load1($96);
 $98 = ($97<<24>>24)<(0);
 $99 = load4($15);
 $100 = $98 ? $99 : $15;
 $101 = ((($0)) + 76|0);
 $102 = load4($101);
 $103 = $97&255;
 $104 = $98 ? $102 : $103;
 $105 = ((($95)) + 11|0);
 $106 = load1($105);
 $107 = ($106<<24>>24)<(0);
 if ($107) {
  $108 = ((($0)) + 20|0);
  $109 = load4($108);
  $110 = $109 & 2147483647;
  $phitmp$i$i17 = (($110) + -1)|0;
  $112 = $phitmp$i$i17;
 } else {
  $112 = 10;
 }
 $111 = ($104>>>0)>($112>>>0);
 do {
  if ($111) {
   $121 = (($104) - ($112))|0;
   $122 = (-18 - ($112))|0;
   $123 = ($122>>>0)<($121>>>0);
   if ($123) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($107) {
    $124 = load4($95);
    $143 = $124;
   } else {
    $143 = $95;
   }
   $125 = ($112>>>0)<(2147483623);
   if ($125) {
    $126 = $112 << 1;
    $127 = ($104>>>0)<($126>>>0);
    $$sroa$speculated$i24 = $127 ? $126 : $104;
    $128 = ($$sroa$speculated$i24>>>0)<(11);
    $129 = (($$sroa$speculated$i24) + 16)|0;
    $130 = $129 & -16;
    $phitmp$i25 = $128 ? 11 : $130;
    $132 = $phitmp$i25;
   } else {
    $132 = -17;
   }
   $131 = ($132|0)==(0);
   $$$i9 = $131 ? 1 : $132;
   $133 = (_malloc($$$i9)|0);
   $134 = ($133|0)==(0|0);
   L56: do {
    if ($134) {
     while(1) {
      $135 = load4(9296);
      $136 = (($135) + 0)|0;
      store4(9296,$136);
      $137 = ($135|0)==(0);
      if ($137) {
       $$lcssa$i15 = 0;
       break L56;
      }
      $138 = $135;
      FUNCTION_TABLE_v[$138 & 3]();
      $139 = (_malloc($$$i9)|0);
      $140 = ($139|0)==(0|0);
      if (!($140)) {
       $$lcssa$i15 = $139;
       break;
      }
     }
    } else {
     $$lcssa$i15 = $133;
    }
   } while(0);
   $141 = ($104|0)==(0);
   if (!($141)) {
    _memcpy(($$lcssa$i15|0),($100|0),($104|0))|0;
   }
   $142 = ($112|0)==(10);
   if (!($142)) {
    _free($143);
   }
   store4($95,$$lcssa$i15);
   $144 = $132 | -2147483648;
   $145 = ((($0)) + 20|0);
   store4($145,$144);
   $146 = ((($0)) + 16|0);
   store4($146,$104);
   $147 = (($$lcssa$i15) + ($104)|0);
   store1($147,0);
  } else {
   if ($107) {
    $113 = load4($95);
    $115 = $113;
   } else {
    $115 = $95;
   }
   $114 = ($104|0)==(0);
   if (!($114)) {
    _memmove(($115|0),($100|0),($104|0))|0;
   }
   $116 = (($115) + ($104)|0);
   store1($116,0);
   $117 = load1($105);
   $118 = ($117<<24>>24)<(0);
   if ($118) {
    $119 = ((($0)) + 16|0);
    store4($119,$104);
    break;
   } else {
    $120 = $104&255;
    store1($105,$120);
    break;
   }
  }
 } while(0);
 $148 = ((($0)) + 11|0);
 $149 = load1($148);
 $150 = ($149<<24>>24)<(0);
 $151 = ((($0)) + 4|0);
 $152 = load4($151);
 $153 = $149&255;
 $154 = $150 ? $152 : $153;
 $155 = ($154>>>0)>(2);
 if (!($155)) {
  return;
 }
 $156 = load4($0);
 $157 = $150 ? $156 : $0;
 $158 = load1($157);
 $159 = ($158<<24>>24)==(115);
 if (!($159)) {
  return;
 }
 $160 = ((($157)) + 1|0);
 $161 = load1($160);
 $162 = ($161<<24>>24)==(118);
 if (!($162)) {
  return;
 }
 $163 = ((($157)) + 2|0);
 $164 = load1($163);
 $165 = ($164<<24>>24)==(103);
 if (!($165)) {
  return;
 }
 $166 = ($154|0)==(3);
 L91: do {
  if (!($166)) {
   $167 = ((($157)) + 3|0);
   $168 = load1($167);
   switch ($168<<24>>24) {
   case 35: case 46:  {
    break L91;
    break;
   }
   default: {
   }
   }
   return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 return;
}
function __Z4h_snNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE5VNode($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i9 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i15 = 0, $$lcssa$i7 = 0, $$pre$i$i$i = 0, $$pre$i$i6 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi9$i$iZ2D = 0, $$pre8$i$i = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0;
 var $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0;
 var $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0;
 var $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $3 = sp;
 $4 = sp + 16|0;
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $5 = ((($1)) + 11|0);
 $6 = load1($5);
 $7 = ($6<<24>>24)<(0);
 if ($7) {
  $8 = load4($1);
  $9 = ((($1)) + 4|0);
  $10 = load4($9);
  $11 = ($10>>>0)>(4294967279);
  if ($11) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $12 = ($10>>>0)<(11);
  if ($12) {
   $27 = $10&255;
   $28 = ((($3)) + 11|0);
   store1($28,$27);
   $29 = ($10|0)==(0);
   if ($29) {
    $$017$i = $3;
   } else {
    $$016$i = $3;
    label = 11;
   }
  } else {
   $13 = (($10) + 16)|0;
   $14 = $13 & -16;
   $15 = ($14|0)==(0);
   $$$i = $15 ? 1 : $14;
   $16 = (_malloc($$$i)|0);
   $17 = ($16|0)==(0|0);
   L9: do {
    if ($17) {
     while(1) {
      $18 = load4(9296);
      $19 = (($18) + 0)|0;
      store4(9296,$19);
      $20 = ($18|0)==(0);
      if ($20) {
       $$lcssa$i = 0;
       break L9;
      }
      $21 = $18;
      FUNCTION_TABLE_v[$21 & 3]();
      $22 = (_malloc($$$i)|0);
      $23 = ($22|0)==(0|0);
      if (!($23)) {
       $$lcssa$i = $22;
       break;
      }
     }
    } else {
     $$lcssa$i = $16;
    }
   } while(0);
   store4($3,$$lcssa$i);
   $24 = $14 | -2147483648;
   $25 = ((($3)) + 8|0);
   store4($25,$24);
   $26 = ((($3)) + 4|0);
   store4($26,$10);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($8|0),($10|0))|0;
   $$017$i = $$016$i;
  }
  $30 = (($$017$i) + ($10)|0);
  store1($30,0);
 } else {
  ; store8($3,load8($1,4),4); store4($3+8 | 0,load4($1+8 | 0,4),4);
 }
 __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0,$3);
 $31 = ((($3)) + 11|0);
 $32 = load1($31);
 $33 = ($32<<24>>24)<(0);
 if ($33) {
  $34 = load4($3);
  _free($34);
 }
 $35 = ((($0)) + 100|0);
 __ZN5VNodeC2ERKS_($4,$2);
 $36 = (_malloc(112)|0);
 $37 = ($36|0)==(0|0);
 L22: do {
  if ($37) {
   while(1) {
    $38 = load4(9296);
    $39 = (($38) + 0)|0;
    store4(9296,$39);
    $40 = ($38|0)==(0);
    if ($40) {
     $$lcssa$i7 = 0;
     break L22;
    }
    $41 = $38;
    FUNCTION_TABLE_v[$41 & 3]();
    $42 = (_malloc(112)|0);
    $43 = ($42|0)==(0|0);
    if (!($43)) {
     $$lcssa$i7 = $42;
     break;
    }
   }
  } else {
   $$lcssa$i7 = $36;
  }
 } while(0);
 $44 = ((($$lcssa$i7)) + 112|0);
 $45 = $$lcssa$i7;
 $46 = $44;
 __ZN5VNodeC2ERKS_($$lcssa$i7,$4);
 $47 = load4($35);
 $48 = ($47|0)==(0|0);
 if ($48) {
  $$pre$i$i6 = ((($0)) + 104|0);
  $$pre8$i$i = ((($0)) + 108|0);
  $$pre$phi$i$iZ2D = $$pre$i$i6;$$pre$phi9$i$iZ2D = $$pre8$i$i;
 } else {
  $49 = ((($0)) + 104|0);
  $50 = load4($49);
  $51 = ($50|0)==($47|0);
  if ($51) {
   $56 = $47;
  } else {
   $53 = $50;
   while(1) {
    $52 = ((($53)) + -112|0);
    store4($49,$52);
    __ZN5VNodeD2Ev($52);
    $54 = load4($49);
    $55 = ($54|0)==($47|0);
    if ($55) {
     break;
    } else {
     $53 = $54;
    }
   }
   $$pre$i$i$i = load4($35);
   $56 = $$pre$i$i$i;
  }
  _free($56);
  $57 = ((($0)) + 108|0);
  store4($57,0);
  store4($49,0);
  store4($35,0);
  $$pre$phi$i$iZ2D = $49;$$pre$phi9$i$iZ2D = $57;
 }
 store4($35,$45);
 store4($$pre$phi$i$iZ2D,$46);
 store4($$pre$phi9$i$iZ2D,$46);
 __ZN5VNodeD2Ev($4);
 $58 = ((($0)) + 12|0);
 $59 = ((($0)) + 72|0);
 $60 = ((($59)) + 11|0);
 $61 = load1($60);
 $62 = ($61<<24>>24)<(0);
 $63 = load4($59);
 $64 = $62 ? $63 : $59;
 $65 = ((($0)) + 76|0);
 $66 = load4($65);
 $67 = $61&255;
 $68 = $62 ? $66 : $67;
 $69 = ((($58)) + 11|0);
 $70 = load1($69);
 $71 = ($70<<24>>24)<(0);
 if ($71) {
  $72 = ((($0)) + 20|0);
  $73 = load4($72);
  $74 = $73 & 2147483647;
  $phitmp$i$i = (($74) + -1)|0;
  $76 = $phitmp$i$i;
 } else {
  $76 = 10;
 }
 $75 = ($68>>>0)>($76>>>0);
 do {
  if ($75) {
   $85 = (($68) - ($76))|0;
   $86 = (-18 - ($76))|0;
   $87 = ($86>>>0)<($85>>>0);
   if ($87) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($71) {
    $88 = load4($58);
    $107 = $88;
   } else {
    $107 = $58;
   }
   $89 = ($76>>>0)<(2147483623);
   if ($89) {
    $90 = $76 << 1;
    $91 = ($68>>>0)<($90>>>0);
    $$sroa$speculated$i = $91 ? $90 : $68;
    $92 = ($$sroa$speculated$i>>>0)<(11);
    $93 = (($$sroa$speculated$i) + 16)|0;
    $94 = $93 & -16;
    $phitmp$i = $92 ? 11 : $94;
    $96 = $phitmp$i;
   } else {
    $96 = -17;
   }
   $95 = ($96|0)==(0);
   $$$i9 = $95 ? 1 : $96;
   $97 = (_malloc($$$i9)|0);
   $98 = ($97|0)==(0|0);
   L51: do {
    if ($98) {
     while(1) {
      $99 = load4(9296);
      $100 = (($99) + 0)|0;
      store4(9296,$100);
      $101 = ($99|0)==(0);
      if ($101) {
       $$lcssa$i15 = 0;
       break L51;
      }
      $102 = $99;
      FUNCTION_TABLE_v[$102 & 3]();
      $103 = (_malloc($$$i9)|0);
      $104 = ($103|0)==(0|0);
      if (!($104)) {
       $$lcssa$i15 = $103;
       break;
      }
     }
    } else {
     $$lcssa$i15 = $97;
    }
   } while(0);
   $105 = ($68|0)==(0);
   if (!($105)) {
    _memcpy(($$lcssa$i15|0),($64|0),($68|0))|0;
   }
   $106 = ($76|0)==(10);
   if (!($106)) {
    _free($107);
   }
   store4($58,$$lcssa$i15);
   $108 = $96 | -2147483648;
   $109 = ((($0)) + 20|0);
   store4($109,$108);
   $110 = ((($0)) + 16|0);
   store4($110,$68);
   $111 = (($$lcssa$i15) + ($68)|0);
   store1($111,0);
  } else {
   if ($71) {
    $77 = load4($58);
    $79 = $77;
   } else {
    $79 = $58;
   }
   $78 = ($68|0)==(0);
   if (!($78)) {
    _memmove(($79|0),($64|0),($68|0))|0;
   }
   $80 = (($79) + ($68)|0);
   store1($80,0);
   $81 = load1($69);
   $82 = ($81<<24>>24)<(0);
   if ($82) {
    $83 = ((($0)) + 16|0);
    store4($83,$68);
    break;
   } else {
    $84 = $68&255;
    store1($69,$84);
    break;
   }
  }
 } while(0);
 $112 = ((($0)) + 11|0);
 $113 = load1($112);
 $114 = ($113<<24>>24)<(0);
 $115 = ((($0)) + 4|0);
 $116 = load4($115);
 $117 = $113&255;
 $118 = $114 ? $116 : $117;
 $119 = ($118>>>0)>(2);
 if (!($119)) {
  STACKTOP = sp;return;
 }
 $120 = load4($0);
 $121 = $114 ? $120 : $0;
 $122 = load1($121);
 $123 = ($122<<24>>24)==(115);
 if (!($123)) {
  STACKTOP = sp;return;
 }
 $124 = ((($121)) + 1|0);
 $125 = load1($124);
 $126 = ($125<<24>>24)==(118);
 if (!($126)) {
  STACKTOP = sp;return;
 }
 $127 = ((($121)) + 2|0);
 $128 = load1($127);
 $129 = ($128<<24>>24)==(103);
 if (!($129)) {
  STACKTOP = sp;return;
 }
 $130 = ($118|0)==(3);
 L86: do {
  if (!($130)) {
   $131 = ((($121)) + 3|0);
   $132 = load1($131);
   switch ($132<<24>>24) {
   case 35: case 46:  {
    break L86;
    break;
   }
   default: {
   }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 STACKTOP = sp;return;
}
function __ZN5VNodeC2ERKS_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i1 = 0, $$$i9 = 0, $$016$i = 0, $$016$i12 = 0, $$016$i8 = 0, $$017$i = 0, $$017$i13 = 0, $$017$i9 = 0, $$lcssa$i = 0, $$lcssa$i15 = 0, $$lcssa$i7 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0;
 var $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0;
 var $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0;
 var $90 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 ; store8($0,i64_const(0,0),4); store4($0+8|0,0,4);
 $2 = ((($1)) + 11|0);
 $3 = load1($2);
 $4 = ($3<<24>>24)<(0);
 if ($4) {
  $5 = load4($1);
  $6 = ((($1)) + 4|0);
  $7 = load4($6);
  $8 = ($7>>>0)>(4294967279);
  if ($8) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $9 = ($7>>>0)<(11);
  if ($9) {
   $24 = $7&255;
   $25 = ((($0)) + 11|0);
   store1($25,$24);
   $26 = ($7|0)==(0);
   if ($26) {
    $$017$i = $0;
   } else {
    $$016$i = $0;
    label = 11;
   }
  } else {
   $10 = (($7) + 16)|0;
   $11 = $10 & -16;
   $12 = ($11|0)==(0);
   $$$i = $12 ? 1 : $11;
   $13 = (_malloc($$$i)|0);
   $14 = ($13|0)==(0|0);
   L9: do {
    if ($14) {
     while(1) {
      $15 = load4(9296);
      $16 = (($15) + 0)|0;
      store4(9296,$16);
      $17 = ($15|0)==(0);
      if ($17) {
       $$lcssa$i = 0;
       break L9;
      }
      $18 = $15;
      FUNCTION_TABLE_v[$18 & 3]();
      $19 = (_malloc($$$i)|0);
      $20 = ($19|0)==(0|0);
      if (!($20)) {
       $$lcssa$i = $19;
       break;
      }
     }
    } else {
     $$lcssa$i = $13;
    }
   } while(0);
   store4($0,$$lcssa$i);
   $21 = $11 | -2147483648;
   $22 = ((($0)) + 8|0);
   store4($22,$21);
   $23 = ((($0)) + 4|0);
   store4($23,$7);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($5|0),($7|0))|0;
   $$017$i = $$016$i;
  }
  $27 = (($$017$i) + ($7)|0);
  store1($27,0);
 } else {
  ; store8($0,load8($1,4),4); store4($0+8 | 0,load4($1+8 | 0,4),4);
 }
 $28 = ((($0)) + 12|0);
 $29 = ((($1)) + 12|0);
 ; store8($28,i64_const(0,0),4); store4($28+8|0,0,4);
 $30 = ((($29)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 if ($32) {
  $33 = load4($29);
  $34 = ((($1)) + 16|0);
  $35 = load4($34);
  $36 = ($35>>>0)>(4294967279);
  if ($36) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $37 = ($35>>>0)<(11);
  if ($37) {
   $52 = $35&255;
   $53 = ((($28)) + 11|0);
   store1($53,$52);
   $54 = ($35|0)==(0);
   if ($54) {
    $$017$i9 = $28;
   } else {
    $$016$i8 = $28;
    label = 23;
   }
  } else {
   $38 = (($35) + 16)|0;
   $39 = $38 & -16;
   $40 = ($39|0)==(0);
   $$$i1 = $40 ? 1 : $39;
   $41 = (_malloc($$$i1)|0);
   $42 = ($41|0)==(0|0);
   L27: do {
    if ($42) {
     while(1) {
      $43 = load4(9296);
      $44 = (($43) + 0)|0;
      store4(9296,$44);
      $45 = ($43|0)==(0);
      if ($45) {
       $$lcssa$i7 = 0;
       break L27;
      }
      $46 = $43;
      FUNCTION_TABLE_v[$46 & 3]();
      $47 = (_malloc($$$i1)|0);
      $48 = ($47|0)==(0|0);
      if (!($48)) {
       $$lcssa$i7 = $47;
       break;
      }
     }
    } else {
     $$lcssa$i7 = $41;
    }
   } while(0);
   store4($28,$$lcssa$i7);
   $49 = $39 | -2147483648;
   $50 = ((($0)) + 20|0);
   store4($50,$49);
   $51 = ((($0)) + 16|0);
   store4($51,$35);
   $$016$i8 = $$lcssa$i7;
   label = 23;
  }
  if ((label|0) == 23) {
   _memcpy(($$016$i8|0),($33|0),($35|0))|0;
   $$017$i9 = $$016$i8;
  }
  $55 = (($$017$i9) + ($35)|0);
  store1($55,0);
 } else {
  ; store8($28,load8($29,4),4); store4($28+8 | 0,load4($29+8 | 0,4),4);
 }
 $56 = ((($0)) + 24|0);
 $57 = ((($1)) + 24|0);
 ; store8($56,i64_const(0,0),4); store4($56+8|0,0,4);
 $58 = ((($57)) + 11|0);
 $59 = load1($58);
 $60 = ($59<<24>>24)<(0);
 if (!($60)) {
  ; store8($56,load8($57,4),4); store4($56+8 | 0,load4($57+8 | 0,4),4);
  $84 = ((($0)) + 36|0);
  $85 = ((($1)) + 36|0);
  __ZN9VNodeDataC2ERKS_($84,$85);
  $86 = ((($0)) + 96|0);
  $87 = ((($1)) + 96|0);
  $88 = load4($87);
  store4($86,$88);
  __emval_incref(($88|0));
  $89 = ((($0)) + 100|0);
  $90 = ((($1)) + 100|0);
  __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($89,$90);
  return;
 }
 $61 = load4($57);
 $62 = ((($1)) + 28|0);
 $63 = load4($62);
 $64 = ($63>>>0)>(4294967279);
 if ($64) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $65 = ($63>>>0)<(11);
 if ($65) {
  $80 = $63&255;
  $81 = ((($56)) + 11|0);
  store1($81,$80);
  $82 = ($63|0)==(0);
  if ($82) {
   $$017$i13 = $56;
  } else {
   $$016$i12 = $56;
   label = 35;
  }
 } else {
  $66 = (($63) + 16)|0;
  $67 = $66 & -16;
  $68 = ($67|0)==(0);
  $$$i9 = $68 ? 1 : $67;
  $69 = (_malloc($$$i9)|0);
  $70 = ($69|0)==(0|0);
  L47: do {
   if ($70) {
    while(1) {
     $71 = load4(9296);
     $72 = (($71) + 0)|0;
     store4(9296,$72);
     $73 = ($71|0)==(0);
     if ($73) {
      $$lcssa$i15 = 0;
      break L47;
     }
     $74 = $71;
     FUNCTION_TABLE_v[$74 & 3]();
     $75 = (_malloc($$$i9)|0);
     $76 = ($75|0)==(0|0);
     if (!($76)) {
      $$lcssa$i15 = $75;
      break;
     }
    }
   } else {
    $$lcssa$i15 = $69;
   }
  } while(0);
  store4($56,$$lcssa$i15);
  $77 = $67 | -2147483648;
  $78 = ((($0)) + 32|0);
  store4($78,$77);
  $79 = ((($0)) + 28|0);
  store4($79,$63);
  $$016$i12 = $$lcssa$i15;
  label = 35;
 }
 if ((label|0) == 35) {
  _memcpy(($$016$i12|0),($61|0),($63|0))|0;
  $$017$i13 = $$016$i12;
 }
 $83 = (($$017$i13) + ($63)|0);
 store1($83,0);
 $84 = ((($0)) + 36|0);
 $85 = ((($1)) + 36|0);
 __ZN9VNodeDataC2ERKS_($84,$85);
 $86 = ((($0)) + 96|0);
 $87 = ((($1)) + 96|0);
 $88 = load4($87);
 store4($86,$88);
 __emval_incref(($88|0));
 $89 = ((($0)) + 100|0);
 $90 = ((($1)) + 100|0);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($89,$90);
 return;
}
function __Z4h_stNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i2 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $9 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $4 = ((($1)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 if ($6) {
  $7 = load4($1);
  $8 = ((($1)) + 4|0);
  $9 = load4($8);
  $10 = ($9>>>0)>(4294967279);
  if ($10) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $11 = ($9>>>0)<(11);
  if ($11) {
   $26 = $9&255;
   $27 = ((($3)) + 11|0);
   store1($27,$26);
   $28 = ($9|0)==(0);
   if ($28) {
    $$017$i = $3;
   } else {
    $$016$i = $3;
    label = 11;
   }
  } else {
   $12 = (($9) + 16)|0;
   $13 = $12 & -16;
   $14 = ($13|0)==(0);
   $$$i = $14 ? 1 : $13;
   $15 = (_malloc($$$i)|0);
   $16 = ($15|0)==(0|0);
   L9: do {
    if ($16) {
     while(1) {
      $17 = load4(9296);
      $18 = (($17) + 0)|0;
      store4(9296,$18);
      $19 = ($17|0)==(0);
      if ($19) {
       $$lcssa$i = 0;
       break L9;
      }
      $20 = $17;
      FUNCTION_TABLE_v[$20 & 3]();
      $21 = (_malloc($$$i)|0);
      $22 = ($21|0)==(0|0);
      if (!($22)) {
       $$lcssa$i = $21;
       break;
      }
     }
    } else {
     $$lcssa$i = $15;
    }
   } while(0);
   store4($3,$$lcssa$i);
   $23 = $13 | -2147483648;
   $24 = ((($3)) + 8|0);
   store4($24,$23);
   $25 = ((($3)) + 4|0);
   store4($25,$9);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($7|0),($9|0))|0;
   $$017$i = $$016$i;
  }
  $29 = (($$017$i) + ($9)|0);
  store1($29,0);
 } else {
  ; store8($3,load8($1,4),4); store4($3+8 | 0,load4($1+8 | 0,4),4);
 }
 __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0,$3);
 $30 = ((($3)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 if ($32) {
  $33 = load4($3);
  _free($33);
 }
 $34 = ((($0)) + 24|0);
 $35 = ($34|0)==($2|0);
 if ($35) {
  STACKTOP = sp;return;
 }
 $36 = ((($2)) + 11|0);
 $37 = load1($36);
 $38 = ($37<<24>>24)<(0);
 $39 = load4($2);
 $40 = $38 ? $39 : $2;
 $41 = ((($2)) + 4|0);
 $42 = load4($41);
 $43 = $37&255;
 $44 = $38 ? $42 : $43;
 $45 = ((($34)) + 11|0);
 $46 = load1($45);
 $47 = ($46<<24>>24)<(0);
 if ($47) {
  $48 = ((($0)) + 32|0);
  $49 = load4($48);
  $50 = $49 & 2147483647;
  $phitmp$i$i = (($50) + -1)|0;
  $52 = $phitmp$i$i;
 } else {
  $52 = 10;
 }
 $51 = ($44>>>0)>($52>>>0);
 if (!($51)) {
  if ($47) {
   $53 = load4($34);
   $55 = $53;
  } else {
   $55 = $34;
  }
  $54 = ($44|0)==(0);
  if (!($54)) {
   _memmove(($55|0),($40|0),($44|0))|0;
  }
  $56 = (($55) + ($44)|0);
  store1($56,0);
  $57 = load1($45);
  $58 = ($57<<24>>24)<(0);
  if ($58) {
   $59 = ((($0)) + 28|0);
   store4($59,$44);
   STACKTOP = sp;return;
  } else {
   $60 = $44&255;
   store1($45,$60);
   STACKTOP = sp;return;
  }
 }
 $61 = (($44) - ($52))|0;
 $62 = (-18 - ($52))|0;
 $63 = ($62>>>0)<($61>>>0);
 if ($63) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 if ($47) {
  $64 = load4($34);
  $83 = $64;
 } else {
  $83 = $34;
 }
 $65 = ($52>>>0)<(2147483623);
 if ($65) {
  $66 = $52 << 1;
  $67 = ($44>>>0)<($66>>>0);
  $$sroa$speculated$i = $67 ? $66 : $44;
  $68 = ($$sroa$speculated$i>>>0)<(11);
  $69 = (($$sroa$speculated$i) + 16)|0;
  $70 = $69 & -16;
  $phitmp$i = $68 ? 11 : $70;
  $72 = $phitmp$i;
 } else {
  $72 = -17;
 }
 $71 = ($72|0)==(0);
 $$$i2 = $71 ? 1 : $72;
 $73 = (_malloc($$$i2)|0);
 $74 = ($73|0)==(0|0);
 L53: do {
  if ($74) {
   while(1) {
    $75 = load4(9296);
    $76 = (($75) + 0)|0;
    store4(9296,$76);
    $77 = ($75|0)==(0);
    if ($77) {
     $$lcssa$i8 = 0;
     break L53;
    }
    $78 = $75;
    FUNCTION_TABLE_v[$78 & 3]();
    $79 = (_malloc($$$i2)|0);
    $80 = ($79|0)==(0|0);
    if (!($80)) {
     $$lcssa$i8 = $79;
     break;
    }
   }
  } else {
   $$lcssa$i8 = $73;
  }
 } while(0);
 $81 = ($44|0)==(0);
 if (!($81)) {
  _memcpy(($$lcssa$i8|0),($40|0),($44|0))|0;
 }
 $82 = ($52|0)==(10);
 if (!($82)) {
  _free($83);
 }
 store4($34,$$lcssa$i8);
 $84 = $72 | -2147483648;
 $85 = ((($0)) + 32|0);
 store4($85,$84);
 $86 = ((($0)) + 28|0);
 store4($86,$44);
 $87 = (($$lcssa$i8) + ($44)|0);
 store1($87,0);
 STACKTOP = sp;return;
}
function __Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i10 = 0, $$$i2 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i17 = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i11 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0;
 var $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0;
 var $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0;
 var $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0;
 var $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $phitmp$i$i4 = 0, $phitmp$i12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $4 = ((($1)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 if ($6) {
  $7 = load4($1);
  $8 = ((($1)) + 4|0);
  $9 = load4($8);
  $10 = ($9>>>0)>(4294967279);
  if ($10) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $11 = ($9>>>0)<(11);
  if ($11) {
   $26 = $9&255;
   $27 = ((($3)) + 11|0);
   store1($27,$26);
   $28 = ($9|0)==(0);
   if ($28) {
    $$017$i = $3;
   } else {
    $$016$i = $3;
    label = 11;
   }
  } else {
   $12 = (($9) + 16)|0;
   $13 = $12 & -16;
   $14 = ($13|0)==(0);
   $$$i = $14 ? 1 : $13;
   $15 = (_malloc($$$i)|0);
   $16 = ($15|0)==(0|0);
   L9: do {
    if ($16) {
     while(1) {
      $17 = load4(9296);
      $18 = (($17) + 0)|0;
      store4(9296,$18);
      $19 = ($17|0)==(0);
      if ($19) {
       $$lcssa$i = 0;
       break L9;
      }
      $20 = $17;
      FUNCTION_TABLE_v[$20 & 3]();
      $21 = (_malloc($$$i)|0);
      $22 = ($21|0)==(0|0);
      if (!($22)) {
       $$lcssa$i = $21;
       break;
      }
     }
    } else {
     $$lcssa$i = $15;
    }
   } while(0);
   store4($3,$$lcssa$i);
   $23 = $13 | -2147483648;
   $24 = ((($3)) + 8|0);
   store4($24,$23);
   $25 = ((($3)) + 4|0);
   store4($25,$9);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($7|0),($9|0))|0;
   $$017$i = $$016$i;
  }
  $29 = (($$017$i) + ($9)|0);
  store1($29,0);
 } else {
  ; store8($3,load8($1,4),4); store4($3+8 | 0,load4($1+8 | 0,4),4);
 }
 __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0,$3);
 $30 = ((($3)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 if ($32) {
  $33 = load4($3);
  _free($33);
 }
 $34 = ((($0)) + 36|0);
 $35 = ($34|0)==($2|0);
 if (!($35)) {
  $36 = load4($2);
  $37 = ((($2)) + 4|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($34,$36,$37);
  $38 = ((($0)) + 48|0);
  $39 = ((($2)) + 12|0);
  $40 = load4($39);
  $41 = ((($2)) + 16|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($38,$40,$41);
  $42 = ((($0)) + 60|0);
  $43 = ((($2)) + 24|0);
  $44 = load4($43);
  $45 = ((($2)) + 28|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($42,$44,$45);
 }
 $46 = ((($0)) + 72|0);
 $47 = ((($2)) + 36|0);
 $48 = ($46|0)==($47|0);
 do {
  if (!($48)) {
   $49 = ((($47)) + 11|0);
   $50 = load1($49);
   $51 = ($50<<24>>24)<(0);
   $52 = load4($47);
   $53 = $51 ? $52 : $47;
   $54 = ((($2)) + 40|0);
   $55 = load4($54);
   $56 = $50&255;
   $57 = $51 ? $55 : $56;
   $58 = ((($46)) + 11|0);
   $59 = load1($58);
   $60 = ($59<<24>>24)<(0);
   if ($60) {
    $61 = ((($0)) + 80|0);
    $62 = load4($61);
    $63 = $62 & 2147483647;
    $phitmp$i$i = (($63) + -1)|0;
    $65 = $phitmp$i$i;
   } else {
    $65 = 10;
   }
   $64 = ($57>>>0)>($65>>>0);
   if (!($64)) {
    if ($60) {
     $66 = load4($46);
     $68 = $66;
    } else {
     $68 = $46;
    }
    $67 = ($57|0)==(0);
    if (!($67)) {
     _memmove(($68|0),($53|0),($57|0))|0;
    }
    $69 = (($68) + ($57)|0);
    store1($69,0);
    $70 = load1($58);
    $71 = ($70<<24>>24)<(0);
    if ($71) {
     $72 = ((($0)) + 76|0);
     store4($72,$57);
     break;
    } else {
     $73 = $57&255;
     store1($58,$73);
     break;
    }
   }
   $74 = (($57) - ($65))|0;
   $75 = (-18 - ($65))|0;
   $76 = ($75>>>0)<($74>>>0);
   if ($76) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($60) {
    $77 = load4($46);
    $96 = $77;
   } else {
    $96 = $46;
   }
   $78 = ($65>>>0)<(2147483623);
   if ($78) {
    $79 = $65 << 1;
    $80 = ($57>>>0)<($79>>>0);
    $$sroa$speculated$i = $80 ? $79 : $57;
    $81 = ($$sroa$speculated$i>>>0)<(11);
    $82 = (($$sroa$speculated$i) + 16)|0;
    $83 = $82 & -16;
    $phitmp$i = $81 ? 11 : $83;
    $85 = $phitmp$i;
   } else {
    $85 = -17;
   }
   $84 = ($85|0)==(0);
   $$$i2 = $84 ? 1 : $85;
   $86 = (_malloc($$$i2)|0);
   $87 = ($86|0)==(0|0);
   L53: do {
    if ($87) {
     while(1) {
      $88 = load4(9296);
      $89 = (($88) + 0)|0;
      store4(9296,$89);
      $90 = ($88|0)==(0);
      if ($90) {
       $$lcssa$i8 = 0;
       break L53;
      }
      $91 = $88;
      FUNCTION_TABLE_v[$91 & 3]();
      $92 = (_malloc($$$i2)|0);
      $93 = ($92|0)==(0|0);
      if (!($93)) {
       $$lcssa$i8 = $92;
       break;
      }
     }
    } else {
     $$lcssa$i8 = $86;
    }
   } while(0);
   $94 = ($57|0)==(0);
   if (!($94)) {
    _memcpy(($$lcssa$i8|0),($53|0),($57|0))|0;
   }
   $95 = ($65|0)==(10);
   if (!($95)) {
    _free($96);
   }
   store4($46,$$lcssa$i8);
   $97 = $85 | -2147483648;
   $98 = ((($0)) + 80|0);
   store4($98,$97);
   $99 = ((($0)) + 76|0);
   store4($99,$57);
   $100 = (($$lcssa$i8) + ($57)|0);
   store1($100,0);
  }
 } while(0);
 $101 = ((($0)) + 84|0);
 $102 = ((($2)) + 48|0);
 $103 = ($101|0)==($102|0);
 if ($103) {
  STACKTOP = sp;return;
 }
 $104 = ((($102)) + 11|0);
 $105 = load1($104);
 $106 = ($105<<24>>24)<(0);
 $107 = load4($102);
 $108 = $106 ? $107 : $102;
 $109 = ((($2)) + 52|0);
 $110 = load4($109);
 $111 = $105&255;
 $112 = $106 ? $110 : $111;
 $113 = ((($101)) + 11|0);
 $114 = load1($113);
 $115 = ($114<<24>>24)<(0);
 if ($115) {
  $116 = ((($0)) + 92|0);
  $117 = load4($116);
  $118 = $117 & 2147483647;
  $phitmp$i$i4 = (($118) + -1)|0;
  $120 = $phitmp$i$i4;
 } else {
  $120 = 10;
 }
 $119 = ($112>>>0)>($120>>>0);
 if (!($119)) {
  if ($115) {
   $121 = load4($101);
   $123 = $121;
  } else {
   $123 = $101;
  }
  $122 = ($112|0)==(0);
  if (!($122)) {
   _memmove(($123|0),($108|0),($112|0))|0;
  }
  $124 = (($123) + ($112)|0);
  store1($124,0);
  $125 = load1($113);
  $126 = ($125<<24>>24)<(0);
  if ($126) {
   $127 = ((($0)) + 88|0);
   store4($127,$112);
   STACKTOP = sp;return;
  } else {
   $128 = $112&255;
   store1($113,$128);
   STACKTOP = sp;return;
  }
 }
 $129 = (($112) - ($120))|0;
 $130 = (-18 - ($120))|0;
 $131 = ($130>>>0)<($129>>>0);
 if ($131) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 if ($115) {
  $132 = load4($101);
  $151 = $132;
 } else {
  $151 = $101;
 }
 $133 = ($120>>>0)<(2147483623);
 if ($133) {
  $134 = $120 << 1;
  $135 = ($112>>>0)<($134>>>0);
  $$sroa$speculated$i11 = $135 ? $134 : $112;
  $136 = ($$sroa$speculated$i11>>>0)<(11);
  $137 = (($$sroa$speculated$i11) + 16)|0;
  $138 = $137 & -16;
  $phitmp$i12 = $136 ? 11 : $138;
  $140 = $phitmp$i12;
 } else {
  $140 = -17;
 }
 $139 = ($140|0)==(0);
 $$$i10 = $139 ? 1 : $140;
 $141 = (_malloc($$$i10)|0);
 $142 = ($141|0)==(0|0);
 L96: do {
  if ($142) {
   while(1) {
    $143 = load4(9296);
    $144 = (($143) + 0)|0;
    store4(9296,$144);
    $145 = ($143|0)==(0);
    if ($145) {
     $$lcssa$i17 = 0;
     break L96;
    }
    $146 = $143;
    FUNCTION_TABLE_v[$146 & 3]();
    $147 = (_malloc($$$i10)|0);
    $148 = ($147|0)==(0|0);
    if (!($148)) {
     $$lcssa$i17 = $147;
     break;
    }
   }
  } else {
   $$lcssa$i17 = $141;
  }
 } while(0);
 $149 = ($112|0)==(0);
 if (!($149)) {
  _memcpy(($$lcssa$i17|0),($108|0),($112|0))|0;
 }
 $150 = ($120|0)==(10);
 if (!($150)) {
  _free($151);
 }
 store4($101,$$lcssa$i17);
 $152 = $140 | -2147483648;
 $153 = ((($0)) + 92|0);
 store4($153,$152);
 $154 = ((($0)) + 88|0);
 store4($154,$112);
 $155 = (($$lcssa$i17) + ($112)|0);
 store1($155,0);
 STACKTOP = sp;return;
}
function __Z4h_scNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_6vectorI5VNodeNS3_IS7_EEEE($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i2 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0;
 var $111 = 0, $112 = 0, $113 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $4 = ((($1)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 if ($6) {
  $7 = load4($1);
  $8 = ((($1)) + 4|0);
  $9 = load4($8);
  $10 = ($9>>>0)>(4294967279);
  if ($10) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $11 = ($9>>>0)<(11);
  if ($11) {
   $26 = $9&255;
   $27 = ((($3)) + 11|0);
   store1($27,$26);
   $28 = ($9|0)==(0);
   if ($28) {
    $$017$i = $3;
   } else {
    $$016$i = $3;
    label = 11;
   }
  } else {
   $12 = (($9) + 16)|0;
   $13 = $12 & -16;
   $14 = ($13|0)==(0);
   $$$i = $14 ? 1 : $13;
   $15 = (_malloc($$$i)|0);
   $16 = ($15|0)==(0|0);
   L9: do {
    if ($16) {
     while(1) {
      $17 = load4(9296);
      $18 = (($17) + 0)|0;
      store4(9296,$18);
      $19 = ($17|0)==(0);
      if ($19) {
       $$lcssa$i = 0;
       break L9;
      }
      $20 = $17;
      FUNCTION_TABLE_v[$20 & 3]();
      $21 = (_malloc($$$i)|0);
      $22 = ($21|0)==(0|0);
      if (!($22)) {
       $$lcssa$i = $21;
       break;
      }
     }
    } else {
     $$lcssa$i = $15;
    }
   } while(0);
   store4($3,$$lcssa$i);
   $23 = $13 | -2147483648;
   $24 = ((($3)) + 8|0);
   store4($24,$23);
   $25 = ((($3)) + 4|0);
   store4($25,$9);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($7|0),($9|0))|0;
   $$017$i = $$016$i;
  }
  $29 = (($$017$i) + ($9)|0);
  store1($29,0);
 } else {
  ; store8($3,load8($1,4),4); store4($3+8 | 0,load4($1+8 | 0,4),4);
 }
 __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0,$3);
 $30 = ((($3)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 if ($32) {
  $33 = load4($3);
  _free($33);
 }
 $34 = ((($0)) + 100|0);
 $35 = ($34|0)==($2|0);
 if (!($35)) {
  $36 = load4($2);
  $37 = ((($2)) + 4|0);
  $38 = load4($37);
  __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($34,$36,$38);
 }
 $39 = ((($0)) + 12|0);
 $40 = ((($0)) + 72|0);
 $41 = ((($40)) + 11|0);
 $42 = load1($41);
 $43 = ($42<<24>>24)<(0);
 $44 = load4($40);
 $45 = $43 ? $44 : $40;
 $46 = ((($0)) + 76|0);
 $47 = load4($46);
 $48 = $42&255;
 $49 = $43 ? $47 : $48;
 $50 = ((($39)) + 11|0);
 $51 = load1($50);
 $52 = ($51<<24>>24)<(0);
 if ($52) {
  $53 = ((($0)) + 20|0);
  $54 = load4($53);
  $55 = $54 & 2147483647;
  $phitmp$i$i = (($55) + -1)|0;
  $57 = $phitmp$i$i;
 } else {
  $57 = 10;
 }
 $56 = ($49>>>0)>($57>>>0);
 do {
  if ($56) {
   $66 = (($49) - ($57))|0;
   $67 = (-18 - ($57))|0;
   $68 = ($67>>>0)<($66>>>0);
   if ($68) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($52) {
    $69 = load4($39);
    $88 = $69;
   } else {
    $88 = $39;
   }
   $70 = ($57>>>0)<(2147483623);
   if ($70) {
    $71 = $57 << 1;
    $72 = ($49>>>0)<($71>>>0);
    $$sroa$speculated$i = $72 ? $71 : $49;
    $73 = ($$sroa$speculated$i>>>0)<(11);
    $74 = (($$sroa$speculated$i) + 16)|0;
    $75 = $74 & -16;
    $phitmp$i = $73 ? 11 : $75;
    $77 = $phitmp$i;
   } else {
    $77 = -17;
   }
   $76 = ($77|0)==(0);
   $$$i2 = $76 ? 1 : $77;
   $78 = (_malloc($$$i2)|0);
   $79 = ($78|0)==(0|0);
   L40: do {
    if ($79) {
     while(1) {
      $80 = load4(9296);
      $81 = (($80) + 0)|0;
      store4(9296,$81);
      $82 = ($80|0)==(0);
      if ($82) {
       $$lcssa$i8 = 0;
       break L40;
      }
      $83 = $80;
      FUNCTION_TABLE_v[$83 & 3]();
      $84 = (_malloc($$$i2)|0);
      $85 = ($84|0)==(0|0);
      if (!($85)) {
       $$lcssa$i8 = $84;
       break;
      }
     }
    } else {
     $$lcssa$i8 = $78;
    }
   } while(0);
   $86 = ($49|0)==(0);
   if (!($86)) {
    _memcpy(($$lcssa$i8|0),($45|0),($49|0))|0;
   }
   $87 = ($57|0)==(10);
   if (!($87)) {
    _free($88);
   }
   store4($39,$$lcssa$i8);
   $89 = $77 | -2147483648;
   $90 = ((($0)) + 20|0);
   store4($90,$89);
   $91 = ((($0)) + 16|0);
   store4($91,$49);
   $92 = (($$lcssa$i8) + ($49)|0);
   store1($92,0);
  } else {
   if ($52) {
    $58 = load4($39);
    $60 = $58;
   } else {
    $60 = $39;
   }
   $59 = ($49|0)==(0);
   if (!($59)) {
    _memmove(($60|0),($45|0),($49|0))|0;
   }
   $61 = (($60) + ($49)|0);
   store1($61,0);
   $62 = load1($50);
   $63 = ($62<<24>>24)<(0);
   if ($63) {
    $64 = ((($0)) + 16|0);
    store4($64,$49);
    break;
   } else {
    $65 = $49&255;
    store1($50,$65);
    break;
   }
  }
 } while(0);
 $93 = ((($0)) + 11|0);
 $94 = load1($93);
 $95 = ($94<<24>>24)<(0);
 $96 = ((($0)) + 4|0);
 $97 = load4($96);
 $98 = $94&255;
 $99 = $95 ? $97 : $98;
 $100 = ($99>>>0)>(2);
 if (!($100)) {
  STACKTOP = sp;return;
 }
 $101 = load4($0);
 $102 = $95 ? $101 : $0;
 $103 = load1($102);
 $104 = ($103<<24>>24)==(115);
 if (!($104)) {
  STACKTOP = sp;return;
 }
 $105 = ((($102)) + 1|0);
 $106 = load1($105);
 $107 = ($106<<24>>24)==(118);
 if (!($107)) {
  STACKTOP = sp;return;
 }
 $108 = ((($102)) + 2|0);
 $109 = load1($108);
 $110 = ($109<<24>>24)==(103);
 if (!($110)) {
  STACKTOP = sp;return;
 }
 $111 = ($99|0)==(3);
 L75: do {
  if (!($111)) {
   $112 = ((($102)) + 3|0);
   $113 = load1($112);
   switch ($113<<24>>24) {
   case 35: case 46:  {
    break L75;
    break;
   }
   default: {
   }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 STACKTOP = sp;return;
}
function __Z5h_sdnNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData5VNode($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$$i9 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i15 = 0, $$lcssa$i7 = 0, $$pre$i$i$i = 0, $$pre$i$i7 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi9$i$iZ2D = 0, $$pre8$i$i = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0;
 var $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0;
 var $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0;
 var $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 192|0;
 $4 = sp + 60|0;
 $5 = sp;
 $6 = sp + 72|0;
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $7 = ((($1)) + 11|0);
 $8 = load1($7);
 $9 = ($8<<24>>24)<(0);
 if ($9) {
  $10 = load4($1);
  $11 = ((($1)) + 4|0);
  $12 = load4($11);
  $13 = ($12>>>0)>(4294967279);
  if ($13) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $14 = ($12>>>0)<(11);
  if ($14) {
   $29 = $12&255;
   $30 = ((($4)) + 11|0);
   store1($30,$29);
   $31 = ($12|0)==(0);
   if ($31) {
    $$017$i = $4;
   } else {
    $$016$i = $4;
    label = 11;
   }
  } else {
   $15 = (($12) + 16)|0;
   $16 = $15 & -16;
   $17 = ($16|0)==(0);
   $$$i = $17 ? 1 : $16;
   $18 = (_malloc($$$i)|0);
   $19 = ($18|0)==(0|0);
   L9: do {
    if ($19) {
     while(1) {
      $20 = load4(9296);
      $21 = (($20) + 0)|0;
      store4(9296,$21);
      $22 = ($20|0)==(0);
      if ($22) {
       $$lcssa$i = 0;
       break L9;
      }
      $23 = $20;
      FUNCTION_TABLE_v[$23 & 3]();
      $24 = (_malloc($$$i)|0);
      $25 = ($24|0)==(0|0);
      if (!($25)) {
       $$lcssa$i = $24;
       break;
      }
     }
    } else {
     $$lcssa$i = $18;
    }
   } while(0);
   store4($4,$$lcssa$i);
   $26 = $16 | -2147483648;
   $27 = ((($4)) + 8|0);
   store4($27,$26);
   $28 = ((($4)) + 4|0);
   store4($28,$12);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($10|0),($12|0))|0;
   $$017$i = $$016$i;
  }
  $32 = (($$017$i) + ($12)|0);
  store1($32,0);
 } else {
  ; store8($4,load8($1,4),4); store4($4+8 | 0,load4($1+8 | 0,4),4);
 }
 __ZN9VNodeDataC2ERKS_($5,$2);
 __Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($0,$4,$5);
 $33 = ((($5)) + 48|0);
 $34 = ((($33)) + 11|0);
 $35 = load1($34);
 $36 = ($35<<24>>24)<(0);
 if ($36) {
  $37 = load4($33);
  _free($37);
 }
 $38 = ((($5)) + 36|0);
 $39 = ((($38)) + 11|0);
 $40 = load1($39);
 $41 = ($40<<24>>24)<(0);
 if ($41) {
  $42 = load4($38);
  _free($42);
 }
 $43 = ((($5)) + 28|0);
 $44 = load4($43);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($44);
 $45 = ((($5)) + 16|0);
 $46 = load4($45);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($46);
 $47 = ((($5)) + 4|0);
 $48 = load4($47);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($48);
 $49 = ((($4)) + 11|0);
 $50 = load1($49);
 $51 = ($50<<24>>24)<(0);
 if ($51) {
  $52 = load4($4);
  _free($52);
 }
 $53 = ((($0)) + 100|0);
 __ZN5VNodeC2ERKS_($6,$3);
 $54 = (_malloc(112)|0);
 $55 = ($54|0)==(0|0);
 L28: do {
  if ($55) {
   while(1) {
    $56 = load4(9296);
    $57 = (($56) + 0)|0;
    store4(9296,$57);
    $58 = ($56|0)==(0);
    if ($58) {
     $$lcssa$i7 = 0;
     break L28;
    }
    $59 = $56;
    FUNCTION_TABLE_v[$59 & 3]();
    $60 = (_malloc(112)|0);
    $61 = ($60|0)==(0|0);
    if (!($61)) {
     $$lcssa$i7 = $60;
     break;
    }
   }
  } else {
   $$lcssa$i7 = $54;
  }
 } while(0);
 $62 = ((($$lcssa$i7)) + 112|0);
 $63 = $$lcssa$i7;
 $64 = $62;
 __ZN5VNodeC2ERKS_($$lcssa$i7,$6);
 $65 = load4($53);
 $66 = ($65|0)==(0|0);
 if ($66) {
  $$pre$i$i7 = ((($0)) + 104|0);
  $$pre8$i$i = ((($0)) + 108|0);
  $$pre$phi$i$iZ2D = $$pre$i$i7;$$pre$phi9$i$iZ2D = $$pre8$i$i;
 } else {
  $67 = ((($0)) + 104|0);
  $68 = load4($67);
  $69 = ($68|0)==($65|0);
  if ($69) {
   $74 = $65;
  } else {
   $71 = $68;
   while(1) {
    $70 = ((($71)) + -112|0);
    store4($67,$70);
    __ZN5VNodeD2Ev($70);
    $72 = load4($67);
    $73 = ($72|0)==($65|0);
    if ($73) {
     break;
    } else {
     $71 = $72;
    }
   }
   $$pre$i$i$i = load4($53);
   $74 = $$pre$i$i$i;
  }
  _free($74);
  $75 = ((($0)) + 108|0);
  store4($75,0);
  store4($67,0);
  store4($53,0);
  $$pre$phi$i$iZ2D = $67;$$pre$phi9$i$iZ2D = $75;
 }
 store4($53,$63);
 store4($$pre$phi$i$iZ2D,$64);
 store4($$pre$phi9$i$iZ2D,$64);
 __ZN5VNodeD2Ev($6);
 $76 = ((($0)) + 12|0);
 $77 = ((($0)) + 72|0);
 $78 = ((($77)) + 11|0);
 $79 = load1($78);
 $80 = ($79<<24>>24)<(0);
 $81 = load4($77);
 $82 = $80 ? $81 : $77;
 $83 = ((($0)) + 76|0);
 $84 = load4($83);
 $85 = $79&255;
 $86 = $80 ? $84 : $85;
 $87 = ((($76)) + 11|0);
 $88 = load1($87);
 $89 = ($88<<24>>24)<(0);
 if ($89) {
  $90 = ((($0)) + 20|0);
  $91 = load4($90);
  $92 = $91 & 2147483647;
  $phitmp$i$i = (($92) + -1)|0;
  $94 = $phitmp$i$i;
 } else {
  $94 = 10;
 }
 $93 = ($86>>>0)>($94>>>0);
 do {
  if ($93) {
   $103 = (($86) - ($94))|0;
   $104 = (-18 - ($94))|0;
   $105 = ($104>>>0)<($103>>>0);
   if ($105) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($89) {
    $106 = load4($76);
    $125 = $106;
   } else {
    $125 = $76;
   }
   $107 = ($94>>>0)<(2147483623);
   if ($107) {
    $108 = $94 << 1;
    $109 = ($86>>>0)<($108>>>0);
    $$sroa$speculated$i = $109 ? $108 : $86;
    $110 = ($$sroa$speculated$i>>>0)<(11);
    $111 = (($$sroa$speculated$i) + 16)|0;
    $112 = $111 & -16;
    $phitmp$i = $110 ? 11 : $112;
    $114 = $phitmp$i;
   } else {
    $114 = -17;
   }
   $113 = ($114|0)==(0);
   $$$i9 = $113 ? 1 : $114;
   $115 = (_malloc($$$i9)|0);
   $116 = ($115|0)==(0|0);
   L57: do {
    if ($116) {
     while(1) {
      $117 = load4(9296);
      $118 = (($117) + 0)|0;
      store4(9296,$118);
      $119 = ($117|0)==(0);
      if ($119) {
       $$lcssa$i15 = 0;
       break L57;
      }
      $120 = $117;
      FUNCTION_TABLE_v[$120 & 3]();
      $121 = (_malloc($$$i9)|0);
      $122 = ($121|0)==(0|0);
      if (!($122)) {
       $$lcssa$i15 = $121;
       break;
      }
     }
    } else {
     $$lcssa$i15 = $115;
    }
   } while(0);
   $123 = ($86|0)==(0);
   if (!($123)) {
    _memcpy(($$lcssa$i15|0),($82|0),($86|0))|0;
   }
   $124 = ($94|0)==(10);
   if (!($124)) {
    _free($125);
   }
   store4($76,$$lcssa$i15);
   $126 = $114 | -2147483648;
   $127 = ((($0)) + 20|0);
   store4($127,$126);
   $128 = ((($0)) + 16|0);
   store4($128,$86);
   $129 = (($$lcssa$i15) + ($86)|0);
   store1($129,0);
  } else {
   if ($89) {
    $95 = load4($76);
    $97 = $95;
   } else {
    $97 = $76;
   }
   $96 = ($86|0)==(0);
   if (!($96)) {
    _memmove(($97|0),($82|0),($86|0))|0;
   }
   $98 = (($97) + ($86)|0);
   store1($98,0);
   $99 = load1($87);
   $100 = ($99<<24>>24)<(0);
   if ($100) {
    $101 = ((($0)) + 16|0);
    store4($101,$86);
    break;
   } else {
    $102 = $86&255;
    store1($87,$102);
    break;
   }
  }
 } while(0);
 $130 = ((($0)) + 11|0);
 $131 = load1($130);
 $132 = ($131<<24>>24)<(0);
 $133 = ((($0)) + 4|0);
 $134 = load4($133);
 $135 = $131&255;
 $136 = $132 ? $134 : $135;
 $137 = ($136>>>0)>(2);
 if (!($137)) {
  STACKTOP = sp;return;
 }
 $138 = load4($0);
 $139 = $132 ? $138 : $0;
 $140 = load1($139);
 $141 = ($140<<24>>24)==(115);
 if (!($141)) {
  STACKTOP = sp;return;
 }
 $142 = ((($139)) + 1|0);
 $143 = load1($142);
 $144 = ($143<<24>>24)==(118);
 if (!($144)) {
  STACKTOP = sp;return;
 }
 $145 = ((($139)) + 2|0);
 $146 = load1($145);
 $147 = ($146<<24>>24)==(103);
 if (!($147)) {
  STACKTOP = sp;return;
 }
 $148 = ($136|0)==(3);
 L92: do {
  if (!($148)) {
   $149 = ((($139)) + 3|0);
   $150 = load1($149);
   switch ($150<<24>>24) {
   case 35: case 46:  {
    break L92;
    break;
   }
   default: {
   }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 STACKTOP = sp;return;
}
function __ZN9VNodeDataC2ERKS_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i1 = 0, $$0$i$i$i$i$i = 0, $$0$i$i$i$i$i$i = 0, $$0$i$i$i$i$i$i12 = 0, $$0$i$i$i$i$i$i23 = 0, $$0$i$i$i$i$i14 = 0, $$0$i$i$i$i$i25 = 0, $$016$i = 0, $$016$i3 = 0, $$017$i = 0, $$017$i4 = 0, $$05$i$i$i$i$i = 0, $$05$i$i$i$i$i17 = 0, $$05$i$i$i$i$i28 = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $10 = 0, $100 = 0, $101 = 0;
 var $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $12 = 0, $13 = 0;
 var $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0;
 var $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0;
 var $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0;
 var $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0;
 var $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 store4($2,0);
 $3 = ((($0)) + 8|0);
 store4($3,0);
 $4 = ((($0)) + 4|0);
 store4($0,$4);
 $5 = load4($1);
 $6 = ((($1)) + 4|0);
 $7 = ($5|0)==($6|0);
 if (!($7)) {
  $11 = $5;$9 = $5;
  while(1) {
   $8 = ((($9)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($0,$4,$8,$8);
   $10 = ((($11)) + 4|0);
   $12 = load4($10);
   $13 = ($12|0)==(0|0);
   if ($13) {
    $$0$i$i$i$i$i = $11;
    while(1) {
     $16 = ((($$0$i$i$i$i$i)) + 8|0);
     $17 = load4($16);
     $18 = load4($17);
     $19 = ($18|0)==($$0$i$i$i$i$i|0);
     if ($19) {
      $$05$i$i$i$i$i = $17;
      break;
     } else {
      $$0$i$i$i$i$i = $17;
     }
    }
   } else {
    $$0$i$i$i$i$i$i = $12;
    while(1) {
     $14 = load4($$0$i$i$i$i$i$i);
     $15 = ($14|0)==(0|0);
     if ($15) {
      $$05$i$i$i$i$i = $$0$i$i$i$i$i$i;
      break;
     } else {
      $$0$i$i$i$i$i$i = $14;
     }
    }
   }
   $20 = ($$05$i$i$i$i$i|0)==($6|0);
   if ($20) {
    break;
   } else {
    $11 = $$05$i$i$i$i$i;$9 = $$05$i$i$i$i$i;
   }
  }
 }
 $21 = ((($0)) + 12|0);
 $22 = ((($0)) + 16|0);
 store4($22,0);
 $23 = ((($0)) + 20|0);
 store4($23,0);
 $24 = ((($0)) + 16|0);
 store4($21,$24);
 $25 = ((($1)) + 12|0);
 $26 = load4($25);
 $27 = ((($1)) + 16|0);
 $28 = ($26|0)==($27|0);
 if (!($28)) {
  $30 = $26;$32 = $26;
  while(1) {
   $29 = ((($30)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($21,$24,$29,$29);
   $31 = ((($32)) + 4|0);
   $33 = load4($31);
   $34 = ($33|0)==(0|0);
   if ($34) {
    $$0$i$i$i$i$i14 = $32;
    while(1) {
     $37 = ((($$0$i$i$i$i$i14)) + 8|0);
     $38 = load4($37);
     $39 = load4($38);
     $40 = ($39|0)==($$0$i$i$i$i$i14|0);
     if ($40) {
      $$05$i$i$i$i$i17 = $38;
      break;
     } else {
      $$0$i$i$i$i$i14 = $38;
     }
    }
   } else {
    $$0$i$i$i$i$i$i12 = $33;
    while(1) {
     $35 = load4($$0$i$i$i$i$i$i12);
     $36 = ($35|0)==(0|0);
     if ($36) {
      $$05$i$i$i$i$i17 = $$0$i$i$i$i$i$i12;
      break;
     } else {
      $$0$i$i$i$i$i$i12 = $35;
     }
    }
   }
   $41 = ($$05$i$i$i$i$i17|0)==($27|0);
   if ($41) {
    break;
   } else {
    $30 = $$05$i$i$i$i$i17;$32 = $$05$i$i$i$i$i17;
   }
  }
 }
 $42 = ((($0)) + 24|0);
 $43 = ((($0)) + 28|0);
 store4($43,0);
 $44 = ((($0)) + 32|0);
 store4($44,0);
 $45 = ((($0)) + 28|0);
 store4($42,$45);
 $46 = ((($1)) + 24|0);
 $47 = load4($46);
 $48 = ((($1)) + 28|0);
 $49 = ($47|0)==($48|0);
 if (!($49)) {
  $51 = $47;$53 = $47;
  while(1) {
   $50 = ((($51)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_bEEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($42,$45,$50,$50);
   $52 = ((($53)) + 4|0);
   $54 = load4($52);
   $55 = ($54|0)==(0|0);
   if ($55) {
    $$0$i$i$i$i$i25 = $53;
    while(1) {
     $58 = ((($$0$i$i$i$i$i25)) + 8|0);
     $59 = load4($58);
     $60 = load4($59);
     $61 = ($60|0)==($$0$i$i$i$i$i25|0);
     if ($61) {
      $$05$i$i$i$i$i28 = $59;
      break;
     } else {
      $$0$i$i$i$i$i25 = $59;
     }
    }
   } else {
    $$0$i$i$i$i$i$i23 = $54;
    while(1) {
     $56 = load4($$0$i$i$i$i$i$i23);
     $57 = ($56|0)==(0|0);
     if ($57) {
      $$05$i$i$i$i$i28 = $$0$i$i$i$i$i$i23;
      break;
     } else {
      $$0$i$i$i$i$i$i23 = $56;
     }
    }
   }
   $62 = ($$05$i$i$i$i$i28|0)==($48|0);
   if ($62) {
    break;
   } else {
    $51 = $$05$i$i$i$i$i28;$53 = $$05$i$i$i$i$i28;
   }
  }
 }
 $63 = ((($0)) + 36|0);
 $64 = ((($1)) + 36|0);
 ; store8($63,i64_const(0,0),4); store4($63+8|0,0,4);
 $65 = ((($64)) + 11|0);
 $66 = load1($65);
 $67 = ($66<<24>>24)<(0);
 if ($67) {
  $68 = load4($64);
  $69 = ((($1)) + 40|0);
  $70 = load4($69);
  $71 = ($70>>>0)>(4294967279);
  if ($71) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $72 = ($70>>>0)<(11);
  if ($72) {
   $87 = $70&255;
   $88 = ((($63)) + 11|0);
   store1($88,$87);
   $89 = ($70|0)==(0);
   if ($89) {
    $$017$i = $63;
   } else {
    $$016$i = $63;
    label = 29;
   }
  } else {
   $73 = (($70) + 16)|0;
   $74 = $73 & -16;
   $75 = ($74|0)==(0);
   $$$i = $75 ? 1 : $74;
   $76 = (_malloc($$$i)|0);
   $77 = ($76|0)==(0|0);
   L42: do {
    if ($77) {
     while(1) {
      $78 = load4(9296);
      $79 = (($78) + 0)|0;
      store4(9296,$79);
      $80 = ($78|0)==(0);
      if ($80) {
       $$lcssa$i = 0;
       break L42;
      }
      $81 = $78;
      FUNCTION_TABLE_v[$81 & 3]();
      $82 = (_malloc($$$i)|0);
      $83 = ($82|0)==(0|0);
      if (!($83)) {
       $$lcssa$i = $82;
       break;
      }
     }
    } else {
     $$lcssa$i = $76;
    }
   } while(0);
   store4($63,$$lcssa$i);
   $84 = $74 | -2147483648;
   $85 = ((($0)) + 44|0);
   store4($85,$84);
   $86 = ((($0)) + 40|0);
   store4($86,$70);
   $$016$i = $$lcssa$i;
   label = 29;
  }
  if ((label|0) == 29) {
   _memcpy(($$016$i|0),($68|0),($70|0))|0;
   $$017$i = $$016$i;
  }
  $90 = (($$017$i) + ($70)|0);
  store1($90,0);
 } else {
  ; store8($63,load8($64,4),4); store4($63+8 | 0,load4($64+8 | 0,4),4);
 }
 $91 = ((($0)) + 48|0);
 $92 = ((($1)) + 48|0);
 ; store8($91,i64_const(0,0),4); store4($91+8|0,0,4);
 $93 = ((($92)) + 11|0);
 $94 = load1($93);
 $95 = ($94<<24>>24)<(0);
 if (!($95)) {
  ; store8($91,load8($92,4),4); store4($91+8 | 0,load4($92+8 | 0,4),4);
  return;
 }
 $96 = load4($92);
 $97 = ((($1)) + 52|0);
 $98 = load4($97);
 $99 = ($98>>>0)>(4294967279);
 if ($99) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $100 = ($98>>>0)<(11);
 if ($100) {
  $115 = $98&255;
  $116 = ((($91)) + 11|0);
  store1($116,$115);
  $117 = ($98|0)==(0);
  if ($117) {
   $$017$i4 = $91;
  } else {
   $$016$i3 = $91;
   label = 41;
  }
 } else {
  $101 = (($98) + 16)|0;
  $102 = $101 & -16;
  $103 = ($102|0)==(0);
  $$$i1 = $103 ? 1 : $102;
  $104 = (_malloc($$$i1)|0);
  $105 = ($104|0)==(0|0);
  L62: do {
   if ($105) {
    while(1) {
     $106 = load4(9296);
     $107 = (($106) + 0)|0;
     store4(9296,$107);
     $108 = ($106|0)==(0);
     if ($108) {
      $$lcssa$i7 = 0;
      break L62;
     }
     $109 = $106;
     FUNCTION_TABLE_v[$109 & 3]();
     $110 = (_malloc($$$i1)|0);
     $111 = ($110|0)==(0|0);
     if (!($111)) {
      $$lcssa$i7 = $110;
      break;
     }
    }
   } else {
    $$lcssa$i7 = $104;
   }
  } while(0);
  store4($91,$$lcssa$i7);
  $112 = $102 | -2147483648;
  $113 = ((($0)) + 56|0);
  store4($113,$112);
  $114 = ((($0)) + 52|0);
  store4($114,$98);
  $$016$i3 = $$lcssa$i7;
  label = 41;
 }
 if ((label|0) == 41) {
  _memcpy(($$016$i3|0),($96|0),($98|0))|0;
  $$017$i4 = $$016$i3;
 }
 $118 = (($$017$i4) + ($98)|0);
 store1($118,0);
 return;
}
function __Z5h_sdtNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataS5_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$$i2 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
 var $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0;
 var $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0;
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0;
 var $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0;
 var $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $4 = sp + 60|0;
 $5 = sp;
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $6 = ((($1)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 if ($8) {
  $9 = load4($1);
  $10 = ((($1)) + 4|0);
  $11 = load4($10);
  $12 = ($11>>>0)>(4294967279);
  if ($12) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $13 = ($11>>>0)<(11);
  if ($13) {
   $28 = $11&255;
   $29 = ((($4)) + 11|0);
   store1($29,$28);
   $30 = ($11|0)==(0);
   if ($30) {
    $$017$i = $4;
   } else {
    $$016$i = $4;
    label = 11;
   }
  } else {
   $14 = (($11) + 16)|0;
   $15 = $14 & -16;
   $16 = ($15|0)==(0);
   $$$i = $16 ? 1 : $15;
   $17 = (_malloc($$$i)|0);
   $18 = ($17|0)==(0|0);
   L9: do {
    if ($18) {
     while(1) {
      $19 = load4(9296);
      $20 = (($19) + 0)|0;
      store4(9296,$20);
      $21 = ($19|0)==(0);
      if ($21) {
       $$lcssa$i = 0;
       break L9;
      }
      $22 = $19;
      FUNCTION_TABLE_v[$22 & 3]();
      $23 = (_malloc($$$i)|0);
      $24 = ($23|0)==(0|0);
      if (!($24)) {
       $$lcssa$i = $23;
       break;
      }
     }
    } else {
     $$lcssa$i = $17;
    }
   } while(0);
   store4($4,$$lcssa$i);
   $25 = $15 | -2147483648;
   $26 = ((($4)) + 8|0);
   store4($26,$25);
   $27 = ((($4)) + 4|0);
   store4($27,$11);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($9|0),($11|0))|0;
   $$017$i = $$016$i;
  }
  $31 = (($$017$i) + ($11)|0);
  store1($31,0);
 } else {
  ; store8($4,load8($1,4),4); store4($4+8 | 0,load4($1+8 | 0,4),4);
 }
 __ZN9VNodeDataC2ERKS_($5,$2);
 __Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($0,$4,$5);
 $32 = ((($5)) + 48|0);
 $33 = ((($32)) + 11|0);
 $34 = load1($33);
 $35 = ($34<<24>>24)<(0);
 if ($35) {
  $36 = load4($32);
  _free($36);
 }
 $37 = ((($5)) + 36|0);
 $38 = ((($37)) + 11|0);
 $39 = load1($38);
 $40 = ($39<<24>>24)<(0);
 if ($40) {
  $41 = load4($37);
  _free($41);
 }
 $42 = ((($5)) + 28|0);
 $43 = load4($42);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($43);
 $44 = ((($5)) + 16|0);
 $45 = load4($44);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($45);
 $46 = ((($5)) + 4|0);
 $47 = load4($46);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($47);
 $48 = ((($4)) + 11|0);
 $49 = load1($48);
 $50 = ($49<<24>>24)<(0);
 if ($50) {
  $51 = load4($4);
  _free($51);
 }
 $52 = ((($0)) + 24|0);
 $53 = ($52|0)==($3|0);
 if ($53) {
  STACKTOP = sp;return;
 }
 $54 = ((($3)) + 11|0);
 $55 = load1($54);
 $56 = ($55<<24>>24)<(0);
 $57 = load4($3);
 $58 = $56 ? $57 : $3;
 $59 = ((($3)) + 4|0);
 $60 = load4($59);
 $61 = $55&255;
 $62 = $56 ? $60 : $61;
 $63 = ((($52)) + 11|0);
 $64 = load1($63);
 $65 = ($64<<24>>24)<(0);
 if ($65) {
  $66 = ((($0)) + 32|0);
  $67 = load4($66);
  $68 = $67 & 2147483647;
  $phitmp$i$i = (($68) + -1)|0;
  $70 = $phitmp$i$i;
 } else {
  $70 = 10;
 }
 $69 = ($62>>>0)>($70>>>0);
 if (!($69)) {
  if ($65) {
   $71 = load4($52);
   $73 = $71;
  } else {
   $73 = $52;
  }
  $72 = ($62|0)==(0);
  if (!($72)) {
   _memmove(($73|0),($58|0),($62|0))|0;
  }
  $74 = (($73) + ($62)|0);
  store1($74,0);
  $75 = load1($63);
  $76 = ($75<<24>>24)<(0);
  if ($76) {
   $77 = ((($0)) + 28|0);
   store4($77,$62);
   STACKTOP = sp;return;
  } else {
   $78 = $62&255;
   store1($63,$78);
   STACKTOP = sp;return;
  }
 }
 $79 = (($62) - ($70))|0;
 $80 = (-18 - ($70))|0;
 $81 = ($80>>>0)<($79>>>0);
 if ($81) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 if ($65) {
  $82 = load4($52);
  $101 = $82;
 } else {
  $101 = $52;
 }
 $83 = ($70>>>0)<(2147483623);
 if ($83) {
  $84 = $70 << 1;
  $85 = ($62>>>0)<($84>>>0);
  $$sroa$speculated$i = $85 ? $84 : $62;
  $86 = ($$sroa$speculated$i>>>0)<(11);
  $87 = (($$sroa$speculated$i) + 16)|0;
  $88 = $87 & -16;
  $phitmp$i = $86 ? 11 : $88;
  $90 = $phitmp$i;
 } else {
  $90 = -17;
 }
 $89 = ($90|0)==(0);
 $$$i2 = $89 ? 1 : $90;
 $91 = (_malloc($$$i2)|0);
 $92 = ($91|0)==(0|0);
 L59: do {
  if ($92) {
   while(1) {
    $93 = load4(9296);
    $94 = (($93) + 0)|0;
    store4(9296,$94);
    $95 = ($93|0)==(0);
    if ($95) {
     $$lcssa$i8 = 0;
     break L59;
    }
    $96 = $93;
    FUNCTION_TABLE_v[$96 & 3]();
    $97 = (_malloc($$$i2)|0);
    $98 = ($97|0)==(0|0);
    if (!($98)) {
     $$lcssa$i8 = $97;
     break;
    }
   }
  } else {
   $$lcssa$i8 = $91;
  }
 } while(0);
 $99 = ($62|0)==(0);
 if (!($99)) {
  _memcpy(($$lcssa$i8|0),($58|0),($62|0))|0;
 }
 $100 = ($70|0)==(10);
 if (!($100)) {
  _free($101);
 }
 store4($52,$$lcssa$i8);
 $102 = $90 | -2147483648;
 $103 = ((($0)) + 32|0);
 store4($103,$102);
 $104 = ((($0)) + 28|0);
 store4($104,$62);
 $105 = (($$lcssa$i8) + ($62)|0);
 store1($105,0);
 STACKTOP = sp;return;
}
function __Z5h_sdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataNS_6vectorI5VNodeNS3_IS8_EEEE($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$$i2 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0;
 var $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0;
 var $13 = 0, $130 = 0, $131 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $4 = sp + 60|0;
 $5 = sp;
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $6 = ((($1)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 if ($8) {
  $9 = load4($1);
  $10 = ((($1)) + 4|0);
  $11 = load4($10);
  $12 = ($11>>>0)>(4294967279);
  if ($12) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $13 = ($11>>>0)<(11);
  if ($13) {
   $28 = $11&255;
   $29 = ((($4)) + 11|0);
   store1($29,$28);
   $30 = ($11|0)==(0);
   if ($30) {
    $$017$i = $4;
   } else {
    $$016$i = $4;
    label = 11;
   }
  } else {
   $14 = (($11) + 16)|0;
   $15 = $14 & -16;
   $16 = ($15|0)==(0);
   $$$i = $16 ? 1 : $15;
   $17 = (_malloc($$$i)|0);
   $18 = ($17|0)==(0|0);
   L9: do {
    if ($18) {
     while(1) {
      $19 = load4(9296);
      $20 = (($19) + 0)|0;
      store4(9296,$20);
      $21 = ($19|0)==(0);
      if ($21) {
       $$lcssa$i = 0;
       break L9;
      }
      $22 = $19;
      FUNCTION_TABLE_v[$22 & 3]();
      $23 = (_malloc($$$i)|0);
      $24 = ($23|0)==(0|0);
      if (!($24)) {
       $$lcssa$i = $23;
       break;
      }
     }
    } else {
     $$lcssa$i = $17;
    }
   } while(0);
   store4($4,$$lcssa$i);
   $25 = $15 | -2147483648;
   $26 = ((($4)) + 8|0);
   store4($26,$25);
   $27 = ((($4)) + 4|0);
   store4($27,$11);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($9|0),($11|0))|0;
   $$017$i = $$016$i;
  }
  $31 = (($$017$i) + ($11)|0);
  store1($31,0);
 } else {
  ; store8($4,load8($1,4),4); store4($4+8 | 0,load4($1+8 | 0,4),4);
 }
 __ZN9VNodeDataC2ERKS_($5,$2);
 __Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($0,$4,$5);
 $32 = ((($5)) + 48|0);
 $33 = ((($32)) + 11|0);
 $34 = load1($33);
 $35 = ($34<<24>>24)<(0);
 if ($35) {
  $36 = load4($32);
  _free($36);
 }
 $37 = ((($5)) + 36|0);
 $38 = ((($37)) + 11|0);
 $39 = load1($38);
 $40 = ($39<<24>>24)<(0);
 if ($40) {
  $41 = load4($37);
  _free($41);
 }
 $42 = ((($5)) + 28|0);
 $43 = load4($42);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($43);
 $44 = ((($5)) + 16|0);
 $45 = load4($44);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($45);
 $46 = ((($5)) + 4|0);
 $47 = load4($46);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($47);
 $48 = ((($4)) + 11|0);
 $49 = load1($48);
 $50 = ($49<<24>>24)<(0);
 if ($50) {
  $51 = load4($4);
  _free($51);
 }
 $52 = ((($0)) + 100|0);
 $53 = ($52|0)==($3|0);
 if (!($53)) {
  $54 = load4($3);
  $55 = ((($3)) + 4|0);
  $56 = load4($55);
  __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($52,$54,$56);
 }
 $57 = ((($0)) + 12|0);
 $58 = ((($0)) + 72|0);
 $59 = ((($58)) + 11|0);
 $60 = load1($59);
 $61 = ($60<<24>>24)<(0);
 $62 = load4($58);
 $63 = $61 ? $62 : $58;
 $64 = ((($0)) + 76|0);
 $65 = load4($64);
 $66 = $60&255;
 $67 = $61 ? $65 : $66;
 $68 = ((($57)) + 11|0);
 $69 = load1($68);
 $70 = ($69<<24>>24)<(0);
 if ($70) {
  $71 = ((($0)) + 20|0);
  $72 = load4($71);
  $73 = $72 & 2147483647;
  $phitmp$i$i = (($73) + -1)|0;
  $75 = $phitmp$i$i;
 } else {
  $75 = 10;
 }
 $74 = ($67>>>0)>($75>>>0);
 do {
  if ($74) {
   $84 = (($67) - ($75))|0;
   $85 = (-18 - ($75))|0;
   $86 = ($85>>>0)<($84>>>0);
   if ($86) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($70) {
    $87 = load4($57);
    $106 = $87;
   } else {
    $106 = $57;
   }
   $88 = ($75>>>0)<(2147483623);
   if ($88) {
    $89 = $75 << 1;
    $90 = ($67>>>0)<($89>>>0);
    $$sroa$speculated$i = $90 ? $89 : $67;
    $91 = ($$sroa$speculated$i>>>0)<(11);
    $92 = (($$sroa$speculated$i) + 16)|0;
    $93 = $92 & -16;
    $phitmp$i = $91 ? 11 : $93;
    $95 = $phitmp$i;
   } else {
    $95 = -17;
   }
   $94 = ($95|0)==(0);
   $$$i2 = $94 ? 1 : $95;
   $96 = (_malloc($$$i2)|0);
   $97 = ($96|0)==(0|0);
   L46: do {
    if ($97) {
     while(1) {
      $98 = load4(9296);
      $99 = (($98) + 0)|0;
      store4(9296,$99);
      $100 = ($98|0)==(0);
      if ($100) {
       $$lcssa$i8 = 0;
       break L46;
      }
      $101 = $98;
      FUNCTION_TABLE_v[$101 & 3]();
      $102 = (_malloc($$$i2)|0);
      $103 = ($102|0)==(0|0);
      if (!($103)) {
       $$lcssa$i8 = $102;
       break;
      }
     }
    } else {
     $$lcssa$i8 = $96;
    }
   } while(0);
   $104 = ($67|0)==(0);
   if (!($104)) {
    _memcpy(($$lcssa$i8|0),($63|0),($67|0))|0;
   }
   $105 = ($75|0)==(10);
   if (!($105)) {
    _free($106);
   }
   store4($57,$$lcssa$i8);
   $107 = $95 | -2147483648;
   $108 = ((($0)) + 20|0);
   store4($108,$107);
   $109 = ((($0)) + 16|0);
   store4($109,$67);
   $110 = (($$lcssa$i8) + ($67)|0);
   store1($110,0);
  } else {
   if ($70) {
    $76 = load4($57);
    $78 = $76;
   } else {
    $78 = $57;
   }
   $77 = ($67|0)==(0);
   if (!($77)) {
    _memmove(($78|0),($63|0),($67|0))|0;
   }
   $79 = (($78) + ($67)|0);
   store1($79,0);
   $80 = load1($68);
   $81 = ($80<<24>>24)<(0);
   if ($81) {
    $82 = ((($0)) + 16|0);
    store4($82,$67);
    break;
   } else {
    $83 = $67&255;
    store1($68,$83);
    break;
   }
  }
 } while(0);
 $111 = ((($0)) + 11|0);
 $112 = load1($111);
 $113 = ($112<<24>>24)<(0);
 $114 = ((($0)) + 4|0);
 $115 = load4($114);
 $116 = $112&255;
 $117 = $113 ? $115 : $116;
 $118 = ($117>>>0)>(2);
 if (!($118)) {
  STACKTOP = sp;return;
 }
 $119 = load4($0);
 $120 = $113 ? $119 : $0;
 $121 = load1($120);
 $122 = ($121<<24>>24)==(115);
 if (!($122)) {
  STACKTOP = sp;return;
 }
 $123 = ((($120)) + 1|0);
 $124 = load1($123);
 $125 = ($124<<24>>24)==(118);
 if (!($125)) {
  STACKTOP = sp;return;
 }
 $126 = ((($120)) + 2|0);
 $127 = load1($126);
 $128 = ($127<<24>>24)==(103);
 if (!($128)) {
  STACKTOP = sp;return;
 }
 $129 = ($117|0)==(3);
 L81: do {
  if (!($129)) {
   $130 = ((($120)) + 3|0);
   $131 = load1($130);
   switch ($131<<24>>24) {
   case 35: case 46:  {
    break L81;
    break;
   }
   default: {
   }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 STACKTOP = sp;return;
}
function __Z6h_stdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_9VNodeDataNS_6vectorI5VNodeNS3_IS8_EEEE($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$$i = 0, $$$i$i = 0, $$$i1$i = 0, $$$i11 = 0, $$$i3 = 0, $$016$i = 0, $$016$i$i = 0, $$016$i3 = 0, $$016$i3$i = 0, $$017$i = 0, $$017$i$i = 0, $$017$i4 = 0, $$017$i4$i = 0, $$lcssa$i = 0, $$lcssa$i$i = 0, $$lcssa$i17 = 0, $$lcssa$i7$i = 0, $$lcssa$i9 = 0, $$pre$i = 0, $$sroa$speculated$i = 0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0;
 var $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $5 = sp + 84|0;
 $6 = sp + 72|0;
 $7 = sp + 12|0;
 $8 = sp;
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $9 = ((($1)) + 11|0);
 $10 = load1($9);
 $11 = ($10<<24>>24)<(0);
 if ($11) {
  $12 = load4($1);
  $13 = ((($1)) + 4|0);
  $14 = load4($13);
  $15 = ($14>>>0)>(4294967279);
  if ($15) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $16 = ($14>>>0)<(11);
  if ($16) {
   $31 = $14&255;
   $32 = ((($5)) + 11|0);
   store1($32,$31);
   $33 = ($14|0)==(0);
   if ($33) {
    $$017$i = $5;
   } else {
    $$016$i = $5;
    label = 11;
   }
  } else {
   $17 = (($14) + 16)|0;
   $18 = $17 & -16;
   $19 = ($18|0)==(0);
   $$$i = $19 ? 1 : $18;
   $20 = (_malloc($$$i)|0);
   $21 = ($20|0)==(0|0);
   L9: do {
    if ($21) {
     while(1) {
      $22 = load4(9296);
      $23 = (($22) + 0)|0;
      store4(9296,$23);
      $24 = ($22|0)==(0);
      if ($24) {
       $$lcssa$i = 0;
       break L9;
      }
      $25 = $22;
      FUNCTION_TABLE_v[$25 & 3]();
      $26 = (_malloc($$$i)|0);
      $27 = ($26|0)==(0|0);
      if (!($27)) {
       $$lcssa$i = $26;
       break;
      }
     }
    } else {
     $$lcssa$i = $20;
    }
   } while(0);
   store4($5,$$lcssa$i);
   $28 = $18 | -2147483648;
   $29 = ((($5)) + 8|0);
   store4($29,$28);
   $30 = ((($5)) + 4|0);
   store4($30,$14);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($12|0),($14|0))|0;
   $$017$i = $$016$i;
  }
  $34 = (($$017$i) + ($14)|0);
  store1($34,0);
 } else {
  ; store8($5,load8($1,4),4); store4($5+8 | 0,load4($1+8 | 0,4),4);
 }
 ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
 $35 = ((($2)) + 11|0);
 $36 = load1($35);
 $37 = ($36<<24>>24)<(0);
 if ($37) {
  $38 = load4($2);
  $39 = ((($2)) + 4|0);
  $40 = load4($39);
  $41 = ($40>>>0)>(4294967279);
  if ($41) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $42 = ($40>>>0)<(11);
  if ($42) {
   $57 = $40&255;
   $58 = ((($6)) + 11|0);
   store1($58,$57);
   $59 = ($40|0)==(0);
   if ($59) {
    $$017$i4 = $6;
   } else {
    $$016$i3 = $6;
    label = 23;
   }
  } else {
   $43 = (($40) + 16)|0;
   $44 = $43 & -16;
   $45 = ($44|0)==(0);
   $$$i3 = $45 ? 1 : $44;
   $46 = (_malloc($$$i3)|0);
   $47 = ($46|0)==(0|0);
   L27: do {
    if ($47) {
     while(1) {
      $48 = load4(9296);
      $49 = (($48) + 0)|0;
      store4(9296,$49);
      $50 = ($48|0)==(0);
      if ($50) {
       $$lcssa$i9 = 0;
       break L27;
      }
      $51 = $48;
      FUNCTION_TABLE_v[$51 & 3]();
      $52 = (_malloc($$$i3)|0);
      $53 = ($52|0)==(0|0);
      if (!($53)) {
       $$lcssa$i9 = $52;
       break;
      }
     }
    } else {
     $$lcssa$i9 = $46;
    }
   } while(0);
   store4($6,$$lcssa$i9);
   $54 = $44 | -2147483648;
   $55 = ((($6)) + 8|0);
   store4($55,$54);
   $56 = ((($6)) + 4|0);
   store4($56,$40);
   $$016$i3 = $$lcssa$i9;
   label = 23;
  }
  if ((label|0) == 23) {
   _memcpy(($$016$i3|0),($38|0),($40|0))|0;
   $$017$i4 = $$016$i3;
  }
  $60 = (($$017$i4) + ($40)|0);
  store1($60,0);
 } else {
  ; store8($6,load8($2,4),4); store4($6+8 | 0,load4($2+8 | 0,4),4);
 }
 __ZN9VNodeDataC2ERKS_($7,$3);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($8,$4);
 ; store8($0,i64_const(0,0),4); store4($0+8|0,0,4);
 $61 = ((($5)) + 11|0);
 $62 = load1($61);
 $63 = ($62<<24>>24)<(0);
 if ($63) {
  $64 = load4($5);
  $65 = ((($5)) + 4|0);
  $66 = load4($65);
  $67 = ($66>>>0)>(4294967279);
  if ($67) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $68 = ($66>>>0)<(11);
  if ($68) {
   $83 = $66&255;
   $84 = ((($0)) + 11|0);
   store1($84,$83);
   $85 = ($66|0)==(0);
   if ($85) {
    $$017$i$i = $0;
   } else {
    $$016$i$i = $0;
    label = 35;
   }
  } else {
   $69 = (($66) + 16)|0;
   $70 = $69 & -16;
   $71 = ($70|0)==(0);
   $$$i$i = $71 ? 1 : $70;
   $72 = (_malloc($$$i$i)|0);
   $73 = ($72|0)==(0|0);
   L45: do {
    if ($73) {
     while(1) {
      $74 = load4(9296);
      $75 = (($74) + 0)|0;
      store4(9296,$75);
      $76 = ($74|0)==(0);
      if ($76) {
       $$lcssa$i$i = 0;
       break L45;
      }
      $77 = $74;
      FUNCTION_TABLE_v[$77 & 3]();
      $78 = (_malloc($$$i$i)|0);
      $79 = ($78|0)==(0|0);
      if (!($79)) {
       $$lcssa$i$i = $78;
       break;
      }
     }
    } else {
     $$lcssa$i$i = $72;
    }
   } while(0);
   store4($0,$$lcssa$i$i);
   $80 = $70 | -2147483648;
   $81 = ((($0)) + 8|0);
   store4($81,$80);
   $82 = ((($0)) + 4|0);
   store4($82,$66);
   $$016$i$i = $$lcssa$i$i;
   label = 35;
  }
  if ((label|0) == 35) {
   _memcpy(($$016$i$i|0),($64|0),($66|0))|0;
   $$017$i$i = $$016$i$i;
  }
  $86 = (($$017$i$i) + ($66)|0);
  store1($86,0);
 } else {
  ; store8($0,load8($5,4),4); store4($0+8 | 0,load4($5+8 | 0,4),4);
 }
 $87 = ((($0)) + 12|0);
 $88 = ((($0)) + 24|0);
 $89 = ((($6)) + 11|0);
 ; store8($87,i64_const(0,0),4); store8($87+8|0,i64_const(0,0),4); store8($87+16|0,i64_const(0,0),4);
 $90 = load1($89);
 $91 = ($90<<24>>24)<(0);
 if ($91) {
  $92 = load4($6);
  $93 = ((($6)) + 4|0);
  $94 = load4($93);
  $95 = ($94>>>0)>(4294967279);
  if ($95) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $96 = ($94>>>0)<(11);
  if ($96) {
   $111 = $94&255;
   $112 = ((($88)) + 11|0);
   store1($112,$111);
   $113 = ($94|0)==(0);
   if ($113) {
    $$017$i4$i = $88;
   } else {
    $$016$i3$i = $88;
    label = 47;
   }
  } else {
   $97 = (($94) + 16)|0;
   $98 = $97 & -16;
   $99 = ($98|0)==(0);
   $$$i1$i = $99 ? 1 : $98;
   $100 = (_malloc($$$i1$i)|0);
   $101 = ($100|0)==(0|0);
   L63: do {
    if ($101) {
     while(1) {
      $102 = load4(9296);
      $103 = (($102) + 0)|0;
      store4(9296,$103);
      $104 = ($102|0)==(0);
      if ($104) {
       $$lcssa$i7$i = 0;
       break L63;
      }
      $105 = $102;
      FUNCTION_TABLE_v[$105 & 3]();
      $106 = (_malloc($$$i1$i)|0);
      $107 = ($106|0)==(0|0);
      if (!($107)) {
       $$lcssa$i7$i = $106;
       break;
      }
     }
    } else {
     $$lcssa$i7$i = $100;
    }
   } while(0);
   store4($88,$$lcssa$i7$i);
   $108 = $98 | -2147483648;
   $109 = ((($0)) + 32|0);
   store4($109,$108);
   $110 = ((($0)) + 28|0);
   store4($110,$94);
   $$016$i3$i = $$lcssa$i7$i;
   label = 47;
  }
  if ((label|0) == 47) {
   _memcpy(($$016$i3$i|0),($92|0),($94|0))|0;
   $$017$i4$i = $$016$i3$i;
  }
  $114 = (($$017$i4$i) + ($94)|0);
  store1($114,0);
 } else {
  ; store8($88,load8($6,4),4); store4($88+8 | 0,load4($6+8 | 0,4),4);
 }
 $115 = ((($0)) + 36|0);
 __ZN9VNodeDataC2ERKS_($115,$7);
 $116 = ((($0)) + 96|0);
 store4($116,(1));
 $117 = ((($0)) + 100|0);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($117,$8);
 $118 = load4($8);
 $119 = ($118|0)==(0|0);
 if (!($119)) {
  $120 = ((($8)) + 4|0);
  $121 = load4($120);
  $122 = ($121|0)==($118|0);
  if ($122) {
   $126 = $118;
  } else {
   $124 = $121;
   while(1) {
    $123 = ((($124)) + -112|0);
    store4($120,$123);
    __ZN5VNodeD2Ev($123);
    $125 = ($123|0)==($118|0);
    if ($125) {
     break;
    } else {
     $124 = $123;
    }
   }
   $$pre$i = load4($8);
   $126 = $$pre$i;
  }
  _free($126);
 }
 $127 = ((($7)) + 48|0);
 $128 = ((($127)) + 11|0);
 $129 = load1($128);
 $130 = ($129<<24>>24)<(0);
 if ($130) {
  $131 = load4($127);
  _free($131);
 }
 $132 = ((($7)) + 36|0);
 $133 = ((($132)) + 11|0);
 $134 = load1($133);
 $135 = ($134<<24>>24)<(0);
 if ($135) {
  $136 = load4($132);
  _free($136);
 }
 $137 = ((($7)) + 28|0);
 $138 = load4($137);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($138);
 $139 = ((($7)) + 16|0);
 $140 = load4($139);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($140);
 $141 = ((($7)) + 4|0);
 $142 = load4($141);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($142);
 $143 = load1($89);
 $144 = ($143<<24>>24)<(0);
 if ($144) {
  $145 = load4($6);
  _free($145);
 }
 $146 = load1($61);
 $147 = ($146<<24>>24)<(0);
 if ($147) {
  $148 = load4($5);
  _free($148);
 }
 $149 = ((($0)) + 72|0);
 $150 = ((($149)) + 11|0);
 $151 = load1($150);
 $152 = ($151<<24>>24)<(0);
 $153 = load4($149);
 $154 = $152 ? $153 : $149;
 $155 = ((($0)) + 76|0);
 $156 = load4($155);
 $157 = $151&255;
 $158 = $152 ? $156 : $157;
 $159 = ((($87)) + 11|0);
 $160 = load1($159);
 $161 = ($160<<24>>24)<(0);
 if ($161) {
  $162 = ((($0)) + 20|0);
  $163 = load4($162);
  $164 = $163 & 2147483647;
  $phitmp$i$i = (($164) + -1)|0;
  $166 = $phitmp$i$i;
 } else {
  $166 = 10;
 }
 $165 = ($158>>>0)>($166>>>0);
 do {
  if ($165) {
   $175 = (($158) - ($166))|0;
   $176 = (-18 - ($166))|0;
   $177 = ($176>>>0)<($175>>>0);
   if ($177) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($161) {
    $178 = load4($87);
    $197 = $178;
   } else {
    $197 = $87;
   }
   $179 = ($166>>>0)<(2147483623);
   if ($179) {
    $180 = $166 << 1;
    $181 = ($158>>>0)<($180>>>0);
    $$sroa$speculated$i = $181 ? $180 : $158;
    $182 = ($$sroa$speculated$i>>>0)<(11);
    $183 = (($$sroa$speculated$i) + 16)|0;
    $184 = $183 & -16;
    $phitmp$i = $182 ? 11 : $184;
    $186 = $phitmp$i;
   } else {
    $186 = -17;
   }
   $185 = ($186|0)==(0);
   $$$i11 = $185 ? 1 : $186;
   $187 = (_malloc($$$i11)|0);
   $188 = ($187|0)==(0|0);
   L107: do {
    if ($188) {
     while(1) {
      $189 = load4(9296);
      $190 = (($189) + 0)|0;
      store4(9296,$190);
      $191 = ($189|0)==(0);
      if ($191) {
       $$lcssa$i17 = 0;
       break L107;
      }
      $192 = $189;
      FUNCTION_TABLE_v[$192 & 3]();
      $193 = (_malloc($$$i11)|0);
      $194 = ($193|0)==(0|0);
      if (!($194)) {
       $$lcssa$i17 = $193;
       break;
      }
     }
    } else {
     $$lcssa$i17 = $187;
    }
   } while(0);
   $195 = ($158|0)==(0);
   if (!($195)) {
    _memcpy(($$lcssa$i17|0),($154|0),($158|0))|0;
   }
   $196 = ($166|0)==(10);
   if (!($196)) {
    _free($197);
   }
   store4($87,$$lcssa$i17);
   $198 = $186 | -2147483648;
   $199 = ((($0)) + 20|0);
   store4($199,$198);
   $200 = ((($0)) + 16|0);
   store4($200,$158);
   $201 = (($$lcssa$i17) + ($158)|0);
   store1($201,0);
  } else {
   if ($161) {
    $167 = load4($87);
    $169 = $167;
   } else {
    $169 = $87;
   }
   $168 = ($158|0)==(0);
   if (!($168)) {
    _memmove(($169|0),($154|0),($158|0))|0;
   }
   $170 = (($169) + ($158)|0);
   store1($170,0);
   $171 = load1($159);
   $172 = ($171<<24>>24)<(0);
   if ($172) {
    $173 = ((($0)) + 16|0);
    store4($173,$158);
    break;
   } else {
    $174 = $158&255;
    store1($159,$174);
    break;
   }
  }
 } while(0);
 $202 = ((($0)) + 11|0);
 $203 = load1($202);
 $204 = ($203<<24>>24)<(0);
 $205 = ((($0)) + 4|0);
 $206 = load4($205);
 $207 = $203&255;
 $208 = $204 ? $206 : $207;
 $209 = ($208>>>0)>(2);
 if (!($209)) {
  STACKTOP = sp;return;
 }
 $210 = load4($0);
 $211 = $204 ? $210 : $0;
 $212 = load1($211);
 $213 = ($212<<24>>24)==(115);
 if (!($213)) {
  STACKTOP = sp;return;
 }
 $214 = ((($211)) + 1|0);
 $215 = load1($214);
 $216 = ($215<<24>>24)==(118);
 if (!($216)) {
  STACKTOP = sp;return;
 }
 $217 = ((($211)) + 2|0);
 $218 = load1($217);
 $219 = ($218<<24>>24)==(103);
 if (!($219)) {
  STACKTOP = sp;return;
 }
 $220 = ($208|0)==(3);
 L141: do {
  if (!($220)) {
   $221 = ((($211)) + 3|0);
   $222 = load1($221);
   switch ($222<<24>>24) {
   case 35: case 46:  {
    break L141;
    break;
   }
   default: {
   }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$i19 = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,0);
 $2 = ((($0)) + 4|0);
 store4($2,0);
 $3 = ((($0)) + 8|0);
 store4($3,0);
 $4 = ((($1)) + 4|0);
 $5 = load4($4);
 $6 = load4($1);
 $7 = (($5) - ($6))|0;
 $8 = (($7|0) / 112)&-1;
 $9 = ($7|0)==(0);
 if ($9) {
  return;
 }
 $10 = ($8>>>0)>(38347922);
 if ($10) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $11 = (_malloc($7)|0);
 $12 = ($11|0)==(0|0);
 L7: do {
  if ($12) {
   while(1) {
    $13 = load4(9296);
    $14 = (($13) + 0)|0;
    store4(9296,$14);
    $15 = ($13|0)==(0);
    if ($15) {
     $$lcssa$i = 0;
     break L7;
    }
    $16 = $13;
    FUNCTION_TABLE_v[$16 & 3]();
    $17 = (_malloc($7)|0);
    $18 = ($17|0)==(0|0);
    if (!($18)) {
     $$lcssa$i = $17;
     break;
    }
   }
  } else {
   $$lcssa$i = $11;
  }
 } while(0);
 store4($2,$$lcssa$i);
 store4($0,$$lcssa$i);
 $19 = (($$lcssa$i) + (($8*112)|0)|0);
 $20 = ((($0)) + 8|0);
 store4($20,$19);
 $21 = load4($1);
 $22 = load4($4);
 $23 = ($21|0)==($22|0);
 if ($23) {
  return;
 } else {
  $$0$i19 = $21;$24 = $$lcssa$i;
 }
 while(1) {
  __ZN5VNodeC2ERKS_($24,$$0$i19);
  $25 = ((($$0$i19)) + 112|0);
  $26 = load4($2);
  $27 = ((($26)) + 112|0);
  store4($2,$27);
  $28 = ($25|0)==($22|0);
  if ($28) {
   break;
  } else {
   $$0$i19 = $25;$24 = $27;
  }
 }
 return;
}
function __Z8to_VNodeN10emscripten3valE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$$i = 0, $$$i = 0, $$$i$i = 0, $$$i104 = 0, $$$i17 = 0, $$$i30 = 0, $$$i39 = 0, $$$i4 = 0, $$$i48 = 0, $$$i79 = 0, $$$i8 = 0, $$$i95 = 0, $$0$i = 0, $$0$i$i = 0, $$0$i152 = 0, $$0$i158 = 0, $$0$i171 = 0, $$0$i31 = 0, $$01318$i = 0, $$01318$i64 = 0;
 var $$01318$i77 = 0, $$014$i = 0, $$014$i165 = 0, $$014$i178 = 0, $$01417$i = 0, $$01417$i65 = 0, $$01417$i78 = 0, $$015$lcssa$i = 0, $$015$lcssa$i156 = 0, $$015$lcssa$i169 = 0, $$01518$i = 0, $$01518$i154 = 0, $$01518$i167 = 0, $$016$i = 0, $$017$i = 0, $$017$off041$i = 0, $$017$off041$i116 = 0, $$017$off041$i142 = 0, $$017$off042$i = 0, $$017$off042$i109 = 0;
 var $$017$off042$i135 = 0, $$017$off047$i = 0, $$017$off047$i112 = 0, $$017$off047$i138 = 0, $$018$i = 0, $$018$i29 = 0, $$018$off039$i = 0, $$018$off039$i117 = 0, $$018$off039$i143 = 0, $$018$off046$i = 0, $$018$off046$i113 = 0, $$018$off046$i139 = 0, $$019$i = 0, $$019$i25 = 0, $$019$i28 = 0, $$019$i63 = 0, $$019$i76 = 0, $$01937$i = 0, $$01937$i118 = 0, $$01937$i144 = 0;
 var $$01938$i = 0, $$01938$i110 = 0, $$01938$i136 = 0, $$01945$i = 0, $$01945$i114 = 0, $$01945$i140 = 0, $$02035$i = 0, $$02035$i119 = 0, $$02035$i145 = 0, $$02036$i = 0, $$02036$i111 = 0, $$02036$i137 = 0, $$02044$i = 0, $$02044$i115 = 0, $$02044$i141 = 0, $$0217525 = 0, $$06$i$i$i = 0, $$1$lcssa$i = 0, $$1$lcssa$i162 = 0, $$1$lcssa$i175 = 0;
 var $$1218524 = 0, $$add$i = 0, $$in$i = 0, $$lcssa$i = 0, $$lcssa$i$i = 0, $$lcssa$i101 = 0, $$lcssa$i110 = 0, $$lcssa$i14 = 0, $$lcssa$i23 = 0, $$lcssa$i36 = 0, $$lcssa$i45 = 0, $$lcssa$i54 = 0, $$lcssa$i62 = 0, $$lcssa$i85 = 0, $$phitmp$i$i = 0, $$phitmp$i$i104 = 0, $$phitmp$i$i130 = 0, $$pn$i = 0, $$pn$i153 = 0, $$pn$i164 = 0;
 var $$pn$i177 = 0, $$pn$i30 = 0, $$pn29$i = 0, $$pn29$i159 = 0, $$pn29$i172 = 0, $$pr = 0, $$pr197 = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i$i$i$i$i$i = 0, $$pre$i160 = 0, $$pre$i173 = 0, $$pre$i26 = 0, $$pre414 = 0, $$pre415 = 0, $$pre416 = 0, $$pre417 = 0, $$pre45$i = 0, $$pre680 = 0;
 var $$pre684 = 0, $$pre685 = 0, $$ptr39$i = 0, $$sroa$7$0$idx$i = 0, $$sroa$8$0$$sroa_idx = 0, $$sroa$8186$0$$sroa_raw_idx = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i$i = 0, $$sroa$speculated$i14 = 0, $$sroa$speculated$i3 = 0, $$sroa$speculated$i34 = 0, $$sroa$speculated$i47 = 0, $$sroa$speculated19$i = 0, $$sroa$speculated19$i57 = 0, $$sroa$speculated19$i70 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0;
 var $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0;
 var $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0;
 var $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0;
 var $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0;
 var $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0;
 var $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0;
 var $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0;
 var $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0.0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0;
 var $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0;
 var $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0;
 var $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0.0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0;
 var $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0;
 var $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0;
 var $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0;
 var $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0;
 var $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0;
 var $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0;
 var $410 = 0, $411 = 0.0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0;
 var $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0;
 var $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0;
 var $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0;
 var $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0;
 var $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0;
 var $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0;
 var $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0;
 var $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0.0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0;
 var $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0;
 var $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0;
 var $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0;
 var $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0;
 var $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0;
 var $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0;
 var $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0;
 var $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0;
 var $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0;
 var $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0.0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0;
 var $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0;
 var $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0;
 var $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0.0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0;
 var $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0, $824 = 0;
 var $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0, $842 = 0;
 var $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0, $860 = 0;
 var $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0, $879 = 0;
 var $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0;
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond198 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $phitmp$i$i125 = 0, $phitmp$i$i39 = 0, $phitmp$i$i6 = 0, $phitmp$i$i87 = 0, $phitmp$i$i99 = 0, $phitmp$i15 = 0, $phitmp$i22$i = 0, $phitmp$i22$i103 = 0, $phitmp$i22$i129 = 0, $phitmp$i35 = 0;
 var $phitmp$i4 = 0, $phitmp$i48 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 192|0;
 $2 = sp;
 $3 = sp + 64|0;
 $4 = sp + 176|0;
 $5 = sp + 24|0;
 $6 = sp + 52|0;
 $7 = sp + 12|0;
 $8 = sp + 48|0;
 $9 = ((($0)) + 36|0);
 $10 = ((($0)) + 40|0);
 store4($10,0);
 $11 = ((($0)) + 44|0);
 store4($11,0);
 $12 = ((($0)) + 40|0);
 ; store8($0,i64_const(0,0),4); store8($0+8|0,i64_const(0,0),4); store8($0+16|0,i64_const(0,0),4); store8($0+24|0,i64_const(0,0),4); store4($0+32|0,0,4);
 store4($9,$12);
 $13 = ((($0)) + 48|0);
 $14 = ((($0)) + 52|0);
 store4($14,0);
 $15 = ((($0)) + 56|0);
 store4($15,0);
 $16 = ((($0)) + 52|0);
 store4($13,$16);
 $17 = ((($0)) + 60|0);
 $18 = ((($0)) + 64|0);
 store4($18,0);
 $19 = ((($0)) + 68|0);
 store4($19,0);
 $20 = ((($0)) + 64|0);
 store4($17,$20);
 $21 = ((($0)) + 72|0);
 ; store8($21,i64_const(0,0),4); store8($21+8|0,i64_const(0,0),4); store8($21+16|0,i64_const(0,0),4);
 $22 = ((($0)) + 96|0);
 store4($22,(1));
 $23 = ((($0)) + 100|0);
 store4($23,0);
 $24 = ((($0)) + 104|0);
 store4($24,0);
 $25 = ((($0)) + 108|0);
 store4($25,0);
 $26 = load4($1);
 __emval_incref(($26|0));
 $27 = (__emval_new_cstring((2623|0))|0);
 $28 = (__emval_get_property(($26|0),($27|0))|0);
 __emval_decref(($27|0));
 $29 = (+__emval_as(($28|0),(1616|0),($2|0)));
 $30 = load4($2);
 __emval_run_destructors(($30|0));
 __emval_decref(($28|0));
 __emval_decref(($26|0));
 $31 = (~~(($29)));
 $32 = ($31|0)==(1);
 if (!($32)) {
  $740 = load4($1);
  __emval_incref(($740|0));
  $741 = (__emval_new_cstring((2623|0))|0);
  $742 = (__emval_get_property(($740|0),($741|0))|0);
  __emval_decref(($741|0));
  $743 = (+__emval_as(($742|0),(1616|0),($2|0)));
  $744 = load4($2);
  __emval_run_destructors(($744|0));
  __emval_decref(($742|0));
  __emval_decref(($740|0));
  $745 = (~~(($743)));
  $746 = ($745|0)==(3);
  if ($746) {
   $747 = ((($0)) + 96|0);
   $748 = load4($1);
   __emval_incref(($748|0));
   $749 = load4($747);
   __emval_decref(($749|0));
   $750 = load4($1);
   store4($747,$750);
   $751 = ((($0)) + 24|0);
   $752 = $750;
   __emval_incref(($752|0));
   __Z14getTextContentN10emscripten3valE($2,$752);
   $753 = ((($751)) + 11|0);
   $754 = load1($753);
   $755 = ($754<<24>>24)<(0);
   if ($755) {
    $756 = load4($751);
    store1($756,0);
    $757 = ((($0)) + 28|0);
    store4($757,0);
    $$pr = load1($753);
    $758 = ($$pr<<24>>24)<(0);
    if ($758) {
     $759 = ((($0)) + 32|0);
     $760 = load4($759);
     $761 = $760 & 2147483647;
     $phitmp$i$i87 = (($761) + -1)|0;
     $765 = 0;$769 = $phitmp$i$i87;$785 = $$pr;$890 = 1;
    } else {
     $763 = $$pr;
     label = 267;
    }
   } else {
    store1($751,0);
    store1($753,0);
    $763 = 0;
    label = 267;
   }
   if ((label|0) == 267) {
    $762 = $763&255;
    $765 = $762;$769 = 10;$785 = $763;$890 = 0;
   }
   $764 = ($765>>>0)<(11);
   $766 = (($765) + 16)|0;
   $767 = $766 & 496;
   $phitmp$i22$i = (($767) + -1)|0;
   $$phitmp$i$i = $764 ? 10 : $phitmp$i22$i;
   $768 = ($$phitmp$i$i|0)==($769|0);
   do {
    if (!($768)) {
     do {
      if ($764) {
       $781 = load4($751);
       if ($890) {
        $$017$off042$i = 0;$$01938$i = $781;$$02036$i = $751;
        label = 277;
       } else {
        $$017$off047$i = 0;$$018$off046$i = 1;$$01945$i = $781;$$02044$i = $751;
        label = 278;
       }
      } else {
       $770 = (($$phitmp$i$i) + 1)|0;
       $771 = ($770|0)==(0);
       $$$i79 = $771 ? 1 : $770;
       $772 = (_malloc($$$i79)|0);
       $773 = ($772|0)==(0|0);
       L17: do {
        if ($773) {
         while(1) {
          $774 = load4(9296);
          $775 = (($774) + 0)|0;
          store4(9296,$775);
          $776 = ($774|0)==(0);
          if ($776) {
           $$lcssa$i85 = 0;
           break L17;
          }
          $777 = $774;
          FUNCTION_TABLE_v[$777 & 3]();
          $778 = (_malloc($$$i79)|0);
          $779 = ($778|0)==(0|0);
          if (!($779)) {
           $$lcssa$i85 = $778;
           break;
          }
         }
        } else {
         $$lcssa$i85 = $772;
        }
       } while(0);
       if ($890) {
        $780 = load4($751);
        $$017$off042$i = 1;$$01938$i = $780;$$02036$i = $$lcssa$i85;
        label = 277;
        break;
       } else {
        $$017$off047$i = 1;$$018$off046$i = 0;$$01945$i = $751;$$02044$i = $$lcssa$i85;
        label = 278;
        break;
       }
      }
     } while(0);
     if ((label|0) == 277) {
      $782 = ((($0)) + 28|0);
      $783 = load4($782);
      $$017$off041$i = $$017$off042$i;$$018$off039$i = 1;$$01937$i = $$01938$i;$$02035$i = $$02036$i;$787 = $783;
     }
     else if ((label|0) == 278) {
      $784 = $785&255;
      $$017$off041$i = $$017$off047$i;$$018$off039$i = $$018$off046$i;$$01937$i = $$01945$i;$$02035$i = $$02044$i;$787 = $784;
     }
     $786 = (($787) + 1)|0;
     $788 = ($786|0)==(0);
     if (!($788)) {
      _memcpy(($$02035$i|0),($$01937$i|0),($786|0))|0;
     }
     if ($$018$off039$i) {
      _free($$01937$i);
     }
     if ($$017$off041$i) {
      $789 = (($$phitmp$i$i) + 1)|0;
      $790 = $789 | -2147483648;
      $791 = ((($0)) + 32|0);
      store4($791,$790);
      $792 = ((($0)) + 28|0);
      store4($792,$765);
      store4($751,$$02035$i);
      break;
     } else {
      $793 = $765&255;
      store1($753,$793);
      break;
     }
    }
   } while(0);
   ; store8($751,load8($2,4),4); store4($751+8 | 0,load4($2+8 | 0,4),4);
   ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
   __emval_decref(($752|0));
   STACKTOP = sp;return;
  }
  $794 = load4($1);
  __emval_incref(($794|0));
  $795 = (__emval_new_cstring((2623|0))|0);
  $796 = (__emval_get_property(($794|0),($795|0))|0);
  __emval_decref(($795|0));
  $797 = (+__emval_as(($796|0),(1616|0),($2|0)));
  $798 = load4($2);
  __emval_run_destructors(($798|0));
  __emval_decref(($796|0));
  __emval_decref(($794|0));
  $799 = (~~(($797)));
  $800 = ($799|0)==(8);
  if (!($800)) {
   STACKTOP = sp;return;
  }
  ; store4($2,0,4); store2($2+4|0,0,2); store1($2+6|0,0,1);
  $801 = ((($0)) + 11|0);
  $802 = load1($801);
  $803 = ($802<<24>>24)<(0);
  if ($803) {
   $804 = load4($0);
   store1($804,0);
   $805 = ((($0)) + 4|0);
   store4($805,0);
   $$pre = load1($801);
   $806 = ($$pre<<24>>24)<(0);
   if ($806) {
    $807 = ((($0)) + 8|0);
    $808 = load4($807);
    $809 = $808 & 2147483647;
    $phitmp$i$i99 = (($809) + -1)|0;
    $813 = 0;$817 = $phitmp$i$i99;$833 = $$pre;$891 = 1;
   } else {
    $811 = $$pre;
    label = 292;
   }
  } else {
   store1($0,0);
   store1($801,0);
   $811 = 0;
   label = 292;
  }
  if ((label|0) == 292) {
   $810 = $811&255;
   $813 = $810;$817 = 10;$833 = $811;$891 = 0;
  }
  $812 = ($813>>>0)<(11);
  $814 = (($813) + 16)|0;
  $815 = $814 & 496;
  $phitmp$i22$i103 = (($815) + -1)|0;
  $$phitmp$i$i104 = $812 ? 10 : $phitmp$i22$i103;
  $816 = ($$phitmp$i$i104|0)==($817|0);
  do {
   if (!($816)) {
    if ($812) {
     $829 = load4($0);
     if ($891) {
      $$017$off042$i109 = 0;$$01938$i110 = $829;$$02036$i111 = $0;
      label = 301;
     } else {
      $$017$off047$i112 = 0;$$018$off046$i113 = 1;$$01945$i114 = $829;$$02044$i115 = $0;
      label = 302;
     }
    } else {
     $818 = (($$phitmp$i$i104) + 1)|0;
     $819 = ($818|0)==(0);
     $$$i95 = $819 ? 1 : $818;
     $820 = (_malloc($$$i95)|0);
     $821 = ($820|0)==(0|0);
     L56: do {
      if ($821) {
       while(1) {
        $822 = load4(9296);
        $823 = (($822) + 0)|0;
        store4(9296,$823);
        $824 = ($822|0)==(0);
        if ($824) {
         $$lcssa$i101 = 0;
         break L56;
        }
        $825 = $822;
        FUNCTION_TABLE_v[$825 & 3]();
        $826 = (_malloc($$$i95)|0);
        $827 = ($826|0)==(0|0);
        if (!($827)) {
         $$lcssa$i101 = $826;
         break;
        }
       }
      } else {
       $$lcssa$i101 = $820;
      }
     } while(0);
     if ($891) {
      $828 = load4($0);
      $$017$off042$i109 = 1;$$01938$i110 = $828;$$02036$i111 = $$lcssa$i101;
      label = 301;
     } else {
      $$017$off047$i112 = 1;$$018$off046$i113 = 0;$$01945$i114 = $0;$$02044$i115 = $$lcssa$i101;
      label = 302;
     }
    }
    if ((label|0) == 301) {
     $830 = ((($0)) + 4|0);
     $831 = load4($830);
     $$017$off041$i116 = $$017$off042$i109;$$018$off039$i117 = 1;$$01937$i118 = $$01938$i110;$$02035$i119 = $$02036$i111;$835 = $831;
    }
    else if ((label|0) == 302) {
     $832 = $833&255;
     $$017$off041$i116 = $$017$off047$i112;$$018$off039$i117 = $$018$off046$i113;$$01937$i118 = $$01945$i114;$$02035$i119 = $$02044$i115;$835 = $832;
    }
    $834 = (($835) + 1)|0;
    $836 = ($834|0)==(0);
    if (!($836)) {
     _memcpy(($$02035$i119|0),($$01937$i118|0),($834|0))|0;
    }
    if ($$018$off039$i117) {
     _free($$01937$i118);
    }
    if ($$017$off041$i116) {
     $837 = (($$phitmp$i$i104) + 1)|0;
     $838 = $837 | -2147483648;
     $839 = ((($0)) + 8|0);
     store4($839,$838);
     $840 = ((($0)) + 4|0);
     store4($840,$813);
     store4($0,$$02035$i119);
     break;
    } else {
     $841 = $813&255;
     store1($801,$841);
     break;
    }
   }
  } while(0);
  store4($0,(33));
  $$sroa$8$0$$sroa_idx = ((($0)) + 4|0);
  ; store4($$sroa$8$0$$sroa_idx,load4($2,4),4); store2($$sroa$8$0$$sroa_idx+4 | 0,load2($2+4 | 0,2),2); store1($$sroa$8$0$$sroa_idx+6 | 0,load1($2+6 | 0,1),1);
  $$sroa$8186$0$$sroa_raw_idx = ((($0)) + 11|0);
  store1($$sroa$8186$0$$sroa_raw_idx,1);
  $842 = ((($0)) + 24|0);
  $843 = load4($1);
  __emval_incref(($843|0));
  __Z14getTextContentN10emscripten3valE($2,$843);
  $844 = ((($842)) + 11|0);
  $845 = load1($844);
  $846 = ($845<<24>>24)<(0);
  if ($846) {
   $847 = load4($842);
   store1($847,0);
   $848 = ((($0)) + 28|0);
   store4($848,0);
   $$pr197 = load1($844);
   $849 = ($$pr197<<24>>24)<(0);
   if ($849) {
    $850 = ((($0)) + 32|0);
    $851 = load4($850);
    $852 = $851 & 2147483647;
    $phitmp$i$i125 = (($852) + -1)|0;
    $856 = 0;$860 = $phitmp$i$i125;$876 = $$pr197;$892 = 1;
   } else {
    $854 = $$pr197;
    label = 314;
   }
  } else {
   store1($842,0);
   store1($844,0);
   $854 = 0;
   label = 314;
  }
  if ((label|0) == 314) {
   $853 = $854&255;
   $856 = $853;$860 = 10;$876 = $854;$892 = 0;
  }
  $855 = ($856>>>0)<(11);
  $857 = (($856) + 16)|0;
  $858 = $857 & 496;
  $phitmp$i22$i129 = (($858) + -1)|0;
  $$phitmp$i$i130 = $855 ? 10 : $phitmp$i22$i129;
  $859 = ($$phitmp$i$i130|0)==($860|0);
  do {
   if (!($859)) {
    do {
     if ($855) {
      $872 = load4($842);
      if ($892) {
       $$017$off042$i135 = 0;$$01938$i136 = $872;$$02036$i137 = $842;
       label = 324;
      } else {
       $$017$off047$i138 = 0;$$018$off046$i139 = 1;$$01945$i140 = $872;$$02044$i141 = $842;
       label = 325;
      }
     } else {
      $861 = (($$phitmp$i$i130) + 1)|0;
      $862 = ($861|0)==(0);
      $$$i104 = $862 ? 1 : $861;
      $863 = (_malloc($$$i104)|0);
      $864 = ($863|0)==(0|0);
      L88: do {
       if ($864) {
        while(1) {
         $865 = load4(9296);
         $866 = (($865) + 0)|0;
         store4(9296,$866);
         $867 = ($865|0)==(0);
         if ($867) {
          $$lcssa$i110 = 0;
          break L88;
         }
         $868 = $865;
         FUNCTION_TABLE_v[$868 & 3]();
         $869 = (_malloc($$$i104)|0);
         $870 = ($869|0)==(0|0);
         if (!($870)) {
          $$lcssa$i110 = $869;
          break;
         }
        }
       } else {
        $$lcssa$i110 = $863;
       }
      } while(0);
      if ($892) {
       $871 = load4($842);
       $$017$off042$i135 = 1;$$01938$i136 = $871;$$02036$i137 = $$lcssa$i110;
       label = 324;
       break;
      } else {
       $$017$off047$i138 = 1;$$018$off046$i139 = 0;$$01945$i140 = $842;$$02044$i141 = $$lcssa$i110;
       label = 325;
       break;
      }
     }
    } while(0);
    if ((label|0) == 324) {
     $873 = ((($0)) + 28|0);
     $874 = load4($873);
     $$017$off041$i142 = $$017$off042$i135;$$018$off039$i143 = 1;$$01937$i144 = $$01938$i136;$$02035$i145 = $$02036$i137;$878 = $874;
    }
    else if ((label|0) == 325) {
     $875 = $876&255;
     $$017$off041$i142 = $$017$off047$i138;$$018$off039$i143 = $$018$off046$i139;$$01937$i144 = $$01945$i140;$$02035$i145 = $$02044$i141;$878 = $875;
    }
    $877 = (($878) + 1)|0;
    $879 = ($877|0)==(0);
    if (!($879)) {
     _memcpy(($$02035$i145|0),($$01937$i144|0),($877|0))|0;
    }
    if ($$018$off039$i143) {
     _free($$01937$i144);
    }
    if ($$017$off041$i142) {
     $880 = (($$phitmp$i$i130) + 1)|0;
     $881 = $880 | -2147483648;
     $882 = ((($0)) + 32|0);
     store4($882,$881);
     $883 = ((($0)) + 28|0);
     store4($883,$856);
     store4($842,$$02035$i145);
     break;
    } else {
     $884 = $856&255;
     store1($844,$884);
     break;
    }
   }
  } while(0);
  ; store8($842,load8($2,4),4); store4($842+8 | 0,load4($2+8 | 0,4),4);
  ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
  __emval_decref(($843|0));
  STACKTOP = sp;return;
 }
 $33 = load4($1);
 __emval_incref(($33|0));
 __Z7tagNameN10emscripten3valE($2,$33);
 $34 = ((($2)) + 11|0);
 $35 = load1($34);
 $36 = ($35<<24>>24)<(0);
 $37 = load4($2);
 $38 = $36 ? $37 : $2;
 $39 = ((($2)) + 4|0);
 $40 = load4($39);
 $41 = $35&255;
 $42 = $36 ? $40 : $41;
 $43 = ((($0)) + 11|0);
 $44 = load1($43);
 $45 = ($44<<24>>24)<(0);
 if ($45) {
  $46 = ((($0)) + 8|0);
  $47 = load4($46);
  $48 = $47 & 2147483647;
  $phitmp$i$i = (($48) + -1)|0;
  $49 = ((($0)) + 4|0);
  $50 = load4($49);
  $53 = $phitmp$i$i;$54 = $50;
 } else {
  $51 = $44&255;
  $53 = 10;$54 = $51;
 }
 $52 = (($53) - ($54))|0;
 $55 = ($52>>>0)<($42>>>0);
 if ($55) {
  $66 = (($42) - ($53))|0;
  $67 = (($66) + ($54))|0;
  $68 = (-18 - ($53))|0;
  $69 = ($68>>>0)<($67>>>0);
  if ($69) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  if ($45) {
   $70 = load4($0);
   $89 = $70;
  } else {
   $89 = $0;
  }
  $71 = ($53>>>0)<(2147483623);
  if ($71) {
   $72 = (($54) + ($42))|0;
   $73 = $53 << 1;
   $74 = ($72>>>0)<($73>>>0);
   $$sroa$speculated$i = $74 ? $73 : $72;
   $75 = ($$sroa$speculated$i>>>0)<(11);
   $76 = (($$sroa$speculated$i) + 16)|0;
   $77 = $76 & -16;
   $phitmp$i = $75 ? 11 : $77;
   $79 = $phitmp$i;
  } else {
   $79 = -17;
  }
  $78 = ($79|0)==(0);
  $$$i4 = $78 ? 1 : $79;
  $80 = (_malloc($$$i4)|0);
  $81 = ($80|0)==(0|0);
  L127: do {
   if ($81) {
    while(1) {
     $82 = load4(9296);
     $83 = (($82) + 0)|0;
     store4(9296,$83);
     $84 = ($82|0)==(0);
     if ($84) {
      $$lcssa$i = 0;
      break L127;
     }
     $85 = $82;
     FUNCTION_TABLE_v[$85 & 3]();
     $86 = (_malloc($$$i4)|0);
     $87 = ($86|0)==(0|0);
     if (!($87)) {
      $$lcssa$i = $86;
      break;
     }
    }
   } else {
    $$lcssa$i = $80;
   }
  } while(0);
  $88 = ($54|0)==(0);
  if (!($88)) {
   _memcpy(($$lcssa$i|0),($89|0),($54|0))|0;
  }
  $90 = ($42|0)==(0);
  if (!($90)) {
   $91 = (($$lcssa$i) + ($54)|0);
   _memcpy(($91|0),($38|0),($42|0))|0;
  }
  $92 = ($53|0)==(10);
  if (!($92)) {
   _free($89);
  }
  store4($0,$$lcssa$i);
  $93 = $79 | -2147483648;
  $94 = ((($0)) + 8|0);
  store4($94,$93);
  $95 = (($54) + ($42))|0;
  $96 = ((($0)) + 4|0);
  store4($96,$95);
  $97 = (($$lcssa$i) + ($95)|0);
  store1($97,0);
  $$pre414 = load1($34);
  $99 = $$pre414;
 } else {
  $56 = ($42|0)==(0);
  if ($56) {
   $99 = $35;
  } else {
   if ($45) {
    $57 = load4($0);
    $59 = $57;
   } else {
    $59 = $0;
   }
   $58 = (($59) + ($54)|0);
   _memcpy(($58|0),($38|0),($42|0))|0;
   $60 = (($54) + ($42))|0;
   $61 = load1($43);
   $62 = ($61<<24>>24)<(0);
   if ($62) {
    $63 = ((($0)) + 4|0);
    store4($63,$60);
   } else {
    $64 = $60&255;
    store1($43,$64);
   }
   $65 = (($59) + ($60)|0);
   store1($65,0);
   $99 = $35;
  }
 }
 $98 = ($99<<24>>24)<(0);
 if ($98) {
  $100 = load4($2);
  _free($100);
 }
 __emval_decref(($33|0));
 $101 = load4($1);
 $102 = (__emval_new_cstring((8619|0))|0);
 $103 = (__emval_get_property(($101|0),($102|0))|0);
 __emval_decref(($102|0));
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($4,$103);
 $104 = ((($4)) + 11|0);
 $105 = load1($104);
 $106 = ((($4)) + 4|0);
 $107 = load4($106);
 $108 = ($105<<24>>24)<(0);
 if ($108) {
  $109 = load4($4);
  _free($109);
 }
 __emval_decref(($103|0));
 $110 = $105&255;
 $111 = $108 ? $107 : $110;
 $112 = ($111|0)==(0);
 if (!($112)) {
  $113 = load1($43);
  $114 = ($113<<24>>24)<(0);
  if ($114) {
   $116 = ((($0)) + 8|0);
   $117 = load4($116);
   $118 = $117 & 2147483647;
   $119 = (($118) + -1)|0;
   $120 = ((($0)) + 4|0);
   $121 = load4($120);
   $$018$i = $121;$$019$i = $119;
  } else {
   $115 = $113&255;
   $$018$i = $115;$$019$i = 10;
  }
  $122 = ($$018$i|0)==($$019$i|0);
  do {
   if ($122) {
    if ($114) {
     $123 = load4($0);
     $142 = $123;
    } else {
     $142 = $0;
    }
    $124 = ($$019$i>>>0)<(2147483623);
    if ($124) {
     $125 = (($$019$i) + 1)|0;
     $126 = $$019$i << 1;
     $127 = ($125>>>0)<($126>>>0);
     $$sroa$speculated$i3 = $127 ? $126 : $125;
     $128 = ($$sroa$speculated$i3>>>0)<(11);
     $129 = (($$sroa$speculated$i3) + 16)|0;
     $130 = $129 & -16;
     $phitmp$i4 = $128 ? 11 : $130;
     $132 = $phitmp$i4;
    } else {
     $132 = -17;
    }
    $131 = ($132|0)==(0);
    $$$i8 = $131 ? 1 : $132;
    $133 = (_malloc($$$i8)|0);
    $134 = ($133|0)==(0|0);
    L171: do {
     if ($134) {
      while(1) {
       $135 = load4(9296);
       $136 = (($135) + 0)|0;
       store4(9296,$136);
       $137 = ($135|0)==(0);
       if ($137) {
        $$lcssa$i14 = 0;
        break L171;
       }
       $138 = $135;
       FUNCTION_TABLE_v[$138 & 3]();
       $139 = (_malloc($$$i8)|0);
       $140 = ($139|0)==(0|0);
       if (!($140)) {
        $$lcssa$i14 = $139;
        break;
       }
      }
     } else {
      $$lcssa$i14 = $133;
     }
    } while(0);
    $141 = ($$019$i|0)==(0);
    if ($141) {
     label = 47;
    } else {
     _memcpy(($$lcssa$i14|0),($142|0),($$019$i|0))|0;
     $143 = ($$019$i|0)==(10);
     if (!($143)) {
      label = 47;
     }
    }
    if ((label|0) == 47) {
     _free($142);
    }
    store4($0,$$lcssa$i14);
    $144 = $132 | -2147483648;
    $145 = ((($0)) + 8|0);
    store4($145,$144);
    $885 = $$lcssa$i14;
    label = 52;
   } else {
    if ($114) {
     $$pre680 = load4($0);
     $885 = $$pre680;
     label = 52;
     break;
    } else {
     $146 = (($$018$i) + 1)|0;
     $147 = $146&255;
     store1($43,$147);
     $$pn$i = $0;
     break;
    }
   }
  } while(0);
  if ((label|0) == 52) {
   $148 = (($$018$i) + 1)|0;
   $149 = ((($0)) + 4|0);
   store4($149,$148);
   $$pn$i = $885;
  }
  $$0$i = (($$pn$i) + ($$018$i)|0);
  store1($$0$i,35);
  $150 = ((($$0$i)) + 1|0);
  store1($150,0);
  $151 = load4($1);
  $152 = (__emval_new_cstring((8619|0))|0);
  $153 = (__emval_get_property(($151|0),($152|0))|0);
  __emval_decref(($152|0));
  __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($2,$153);
  $154 = ((($2)) + 11|0);
  $155 = load1($154);
  $156 = ($155<<24>>24)<(0);
  $157 = load4($2);
  $158 = $156 ? $157 : $2;
  $159 = ((($2)) + 4|0);
  $160 = load4($159);
  $161 = $155&255;
  $162 = $156 ? $160 : $161;
  $163 = load1($43);
  $164 = ($163<<24>>24)<(0);
  if ($164) {
   $165 = ((($0)) + 8|0);
   $166 = load4($165);
   $167 = $166 & 2147483647;
   $phitmp$i$i6 = (($167) + -1)|0;
   $168 = ((($0)) + 4|0);
   $169 = load4($168);
   $172 = $phitmp$i$i6;$173 = $169;
  } else {
   $170 = $163&255;
   $172 = 10;$173 = $170;
  }
  $171 = (($172) - ($173))|0;
  $174 = ($171>>>0)<($162>>>0);
  if ($174) {
   $185 = (($162) - ($172))|0;
   $186 = (($185) + ($173))|0;
   $187 = (-18 - ($172))|0;
   $188 = ($187>>>0)<($186>>>0);
   if ($188) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($164) {
    $189 = load4($0);
    $208 = $189;
   } else {
    $208 = $0;
   }
   $190 = ($172>>>0)<(2147483623);
   if ($190) {
    $191 = (($173) + ($162))|0;
    $192 = $172 << 1;
    $193 = ($191>>>0)<($192>>>0);
    $$sroa$speculated$i14 = $193 ? $192 : $191;
    $194 = ($$sroa$speculated$i14>>>0)<(11);
    $195 = (($$sroa$speculated$i14) + 16)|0;
    $196 = $195 & -16;
    $phitmp$i15 = $194 ? 11 : $196;
    $198 = $phitmp$i15;
   } else {
    $198 = -17;
   }
   $197 = ($198|0)==(0);
   $$$i17 = $197 ? 1 : $198;
   $199 = (_malloc($$$i17)|0);
   $200 = ($199|0)==(0|0);
   L203: do {
    if ($200) {
     while(1) {
      $201 = load4(9296);
      $202 = (($201) + 0)|0;
      store4(9296,$202);
      $203 = ($201|0)==(0);
      if ($203) {
       $$lcssa$i23 = 0;
       break L203;
      }
      $204 = $201;
      FUNCTION_TABLE_v[$204 & 3]();
      $205 = (_malloc($$$i17)|0);
      $206 = ($205|0)==(0|0);
      if (!($206)) {
       $$lcssa$i23 = $205;
       break;
      }
     }
    } else {
     $$lcssa$i23 = $199;
    }
   } while(0);
   $207 = ($173|0)==(0);
   if (!($207)) {
    _memcpy(($$lcssa$i23|0),($208|0),($173|0))|0;
   }
   $209 = ($162|0)==(0);
   if (!($209)) {
    $210 = (($$lcssa$i23) + ($173)|0);
    _memcpy(($210|0),($158|0),($162|0))|0;
   }
   $211 = ($172|0)==(10);
   if (!($211)) {
    _free($208);
   }
   store4($0,$$lcssa$i23);
   $212 = $198 | -2147483648;
   $213 = ((($0)) + 8|0);
   store4($213,$212);
   $214 = (($173) + ($162))|0;
   $215 = ((($0)) + 4|0);
   store4($215,$214);
   $216 = (($$lcssa$i23) + ($214)|0);
   store1($216,0);
   $$pre415 = load1($154);
   $218 = $$pre415;
  } else {
   $175 = ($162|0)==(0);
   if ($175) {
    $218 = $155;
   } else {
    if ($164) {
     $176 = load4($0);
     $178 = $176;
    } else {
     $178 = $0;
    }
    $177 = (($178) + ($173)|0);
    _memcpy(($177|0),($158|0),($162|0))|0;
    $179 = (($173) + ($162))|0;
    $180 = load1($43);
    $181 = ($180<<24>>24)<(0);
    if ($181) {
     $182 = ((($0)) + 4|0);
     store4($182,$179);
    } else {
     $183 = $179&255;
     store1($43,$183);
    }
    $184 = (($178) + ($179)|0);
    store1($184,0);
    $218 = $155;
   }
  }
  $217 = ($218<<24>>24)<(0);
  if ($217) {
   $219 = load4($2);
   _free($219);
  }
  __emval_decref(($153|0));
 }
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $220 = ((($5)) + 11|0);
 store1($220,5);
 ; store4($5,load4(2765,1),1); store1($5+4 | 0,load1(2765+4 | 0,1),1);
 $221 = ((($5)) + 5|0);
 store1($221,0);
 $222 = load4($1);
 $223 = load1(8760);
 $224 = ($223<<24>>24)==(0);
 if ($224) {
  store1(8760,1);
  $225 = (__emval_get_method_caller(2,(2008|0))|0);
  store4(8784,$225);
  $237 = $225;
 } else {
  $$pre$i26 = load4(8784);
  $237 = $$pre$i26;
 }
 $226 = load1($220);
 $227 = ($226<<24>>24)<(0);
 $228 = ((($5)) + 4|0);
 $229 = load4($228);
 $230 = $226&255;
 $231 = $227 ? $229 : $230;
 $232 = (($231) + 4)|0;
 $233 = (_malloc($232)|0);
 store4($233,$231);
 $234 = ((($233)) + 4|0);
 $235 = load4($5);
 $236 = $227 ? $235 : $5;
 _memcpy(($234|0),($236|0),($231|0))|0;
 store4($2,$233);
 $238 = (+__emval_call_method(($237|0),($222|0),(2752|0),($3|0),($2|0)));
 $239 = load4($3);
 __emval_run_destructors(($239|0));
 $240 = (~~(($238))>>>0);
 $241 = $240;
 if ($227) {
  _free($235);
 }
 $242 = (__emval_typeof(($241|0))|0);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($6,$242);
 L238: do {
  if (((((2771) & 3)|0)==(0))) {
   $$015$lcssa$i = 2771;
   label = 91;
  } else {
   $$01518$i = 2771;$886 = (2771);
   while(1) {
    $243 = load1($$01518$i);
    $244 = ($243<<24>>24)==(0);
    if ($244) {
     $$pn$i153 = $886;
     break L238;
    }
    $245 = ((($$01518$i)) + 1|0);
    $246 = $245;
    $247 = $246 & 3;
    $248 = ($247|0)==(0);
    if ($248) {
     $$015$lcssa$i = $245;
     label = 91;
     break;
    } else {
     $$01518$i = $245;$886 = $246;
    }
   }
  }
 } while(0);
 if ((label|0) == 91) {
  $$0$i152 = $$015$lcssa$i;
  while(1) {
   $249 = load4($$0$i152);
   $250 = (($249) + -16843009)|0;
   $251 = $249 & -2139062144;
   $252 = $251 ^ -2139062144;
   $253 = $252 & $250;
   $254 = ($253|0)==(0);
   $255 = ((($$0$i152)) + 4|0);
   if ($254) {
    $$0$i152 = $255;
   } else {
    break;
   }
  }
  $256 = $249&255;
  $257 = ($256<<24>>24)==(0);
  if ($257) {
   $$1$lcssa$i = $$0$i152;
  } else {
   $$pn29$i = $$0$i152;
   while(1) {
    $258 = ((($$pn29$i)) + 1|0);
    $$pre$i = load1($258);
    $259 = ($$pre$i<<24>>24)==(0);
    if ($259) {
     $$1$lcssa$i = $258;
     break;
    } else {
     $$pn29$i = $258;
    }
   }
  }
  $260 = $$1$lcssa$i;
  $$pn$i153 = $260;
 }
 $$014$i = (($$pn$i153) - (2771))|0;
 $261 = ((($6)) + 11|0);
 $262 = load1($261);
 $263 = ($262<<24>>24)<(0);
 $264 = ((($6)) + 4|0);
 $265 = load4($264);
 $266 = $262&255;
 $267 = $263 ? $265 : $266;
 $268 = ($$014$i|0)==(-1);
 if ($268) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
  // unreachable;
 }
 $269 = load4($6);
 $270 = ($267>>>0)>($$014$i>>>0);
 $$sroa$speculated19$i = $270 ? $$014$i : $267;
 $271 = ($$sroa$speculated19$i|0)==(0);
 L255: do {
  if ($271) {
   label = 103;
  } else {
   $272 = $263 ? $269 : $6;
   $$01318$i = $272;$$01417$i = $$sroa$speculated19$i;$$019$i25 = 2771;
   while(1) {
    $273 = load1($$01318$i);
    $274 = load1($$019$i25);
    $275 = ($273<<24>>24)==($274<<24>>24);
    if (!($275)) {
     break;
    }
    $276 = (($$01417$i) + -1)|0;
    $277 = ((($$01318$i)) + 1|0);
    $278 = ((($$019$i25)) + 1|0);
    $279 = ($276|0)==(0);
    if ($279) {
     label = 103;
     break L255;
    } else {
     $$01318$i = $277;$$01417$i = $276;$$019$i25 = $278;
    }
   }
   $280 = $273&255;
   $281 = $274&255;
   $282 = (($280) - ($281))|0;
   $283 = ($282|0)==(0);
   if ($283) {
    label = 103;
   } else {
    $286 = $282;
   }
  }
 } while(0);
 if ((label|0) == 103) {
  $284 = ($267>>>0)<($$014$i>>>0);
  $$$i = $270&1;
  $$$$i = $284 ? -1 : $$$i;
  $286 = $$$$i;
 }
 if ($263) {
  _free($269);
 }
 __emval_decref(($242|0));
 $285 = ($286|0)==(0);
 do {
  if ($285) {
   $287 = load1($43);
   $288 = ($287<<24>>24)<(0);
   if ($288) {
    $290 = ((($0)) + 8|0);
    $291 = load4($290);
    $292 = $291 & 2147483647;
    $293 = (($292) + -1)|0;
    $294 = ((($0)) + 4|0);
    $295 = load4($294);
    $$018$i29 = $295;$$019$i28 = $293;
   } else {
    $289 = $287&255;
    $$018$i29 = $289;$$019$i28 = 10;
   }
   $296 = ($$018$i29|0)==($$019$i28|0);
   do {
    if ($296) {
     if ($288) {
      $297 = load4($0);
      $316 = $297;
     } else {
      $316 = $0;
     }
     $298 = ($$019$i28>>>0)<(2147483623);
     if ($298) {
      $299 = (($$019$i28) + 1)|0;
      $300 = $$019$i28 << 1;
      $301 = ($299>>>0)<($300>>>0);
      $$sroa$speculated$i34 = $301 ? $300 : $299;
      $302 = ($$sroa$speculated$i34>>>0)<(11);
      $303 = (($$sroa$speculated$i34) + 16)|0;
      $304 = $303 & -16;
      $phitmp$i35 = $302 ? 11 : $304;
      $306 = $phitmp$i35;
     } else {
      $306 = -17;
     }
     $305 = ($306|0)==(0);
     $$$i30 = $305 ? 1 : $306;
     $307 = (_malloc($$$i30)|0);
     $308 = ($307|0)==(0|0);
     L281: do {
      if ($308) {
       while(1) {
        $309 = load4(9296);
        $310 = (($309) + 0)|0;
        store4(9296,$310);
        $311 = ($309|0)==(0);
        if ($311) {
         $$lcssa$i36 = 0;
         break L281;
        }
        $312 = $309;
        FUNCTION_TABLE_v[$312 & 3]();
        $313 = (_malloc($$$i30)|0);
        $314 = ($313|0)==(0|0);
        if (!($314)) {
         $$lcssa$i36 = $313;
         break;
        }
       }
      } else {
       $$lcssa$i36 = $307;
      }
     } while(0);
     $315 = ($$019$i28|0)==(0);
     if ($315) {
      label = 120;
     } else {
      _memcpy(($$lcssa$i36|0),($316|0),($$019$i28|0))|0;
      $317 = ($$019$i28|0)==(10);
      if (!($317)) {
       label = 120;
      }
     }
     if ((label|0) == 120) {
      _free($316);
     }
     store4($0,$$lcssa$i36);
     $318 = $306 | -2147483648;
     $319 = ((($0)) + 8|0);
     store4($319,$318);
     $887 = $$lcssa$i36;
     label = 125;
    } else {
     if ($288) {
      $$pre684 = load4($0);
      $887 = $$pre684;
      label = 125;
      break;
     } else {
      $320 = (($$018$i29) + 1)|0;
      $321 = $320&255;
      store1($43,$321);
      $$pn$i30 = $0;
      break;
     }
    }
   } while(0);
   if ((label|0) == 125) {
    $322 = (($$018$i29) + 1)|0;
    $323 = ((($0)) + 4|0);
    store4($323,$322);
    $$pn$i30 = $887;
   }
   $$0$i31 = (($$pn$i30) + ($$018$i29)|0);
   store1($$0$i31,46);
   $324 = ((($$0$i31)) + 1|0);
   store1($324,0);
   __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($2,$241);
   $325 = ((($2)) + 11|0);
   $326 = load1($325);
   $327 = ($326<<24>>24)<(0);
   $328 = load4($2);
   $329 = $327 ? $328 : $2;
   $330 = ((($2)) + 4|0);
   $331 = load4($330);
   $332 = $326&255;
   $333 = $327 ? $331 : $332;
   $334 = load1($43);
   $335 = ($334<<24>>24)<(0);
   if ($335) {
    $336 = ((($0)) + 8|0);
    $337 = load4($336);
    $338 = $337 & 2147483647;
    $phitmp$i$i39 = (($338) + -1)|0;
    $339 = ((($0)) + 4|0);
    $340 = load4($339);
    $343 = $phitmp$i$i39;$344 = $340;
   } else {
    $341 = $334&255;
    $343 = 10;$344 = $341;
   }
   $342 = (($343) - ($344))|0;
   $345 = ($342>>>0)<($333>>>0);
   if ($345) {
    $356 = (($333) - ($343))|0;
    $357 = (($356) + ($344))|0;
    $358 = (-18 - ($343))|0;
    $359 = ($358>>>0)<($357>>>0);
    if ($359) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    if ($335) {
     $360 = load4($0);
     $379 = $360;
    } else {
     $379 = $0;
    }
    $361 = ($343>>>0)<(2147483623);
    if ($361) {
     $362 = (($344) + ($333))|0;
     $363 = $343 << 1;
     $364 = ($362>>>0)<($363>>>0);
     $$sroa$speculated$i47 = $364 ? $363 : $362;
     $365 = ($$sroa$speculated$i47>>>0)<(11);
     $366 = (($$sroa$speculated$i47) + 16)|0;
     $367 = $366 & -16;
     $phitmp$i48 = $365 ? 11 : $367;
     $369 = $phitmp$i48;
    } else {
     $369 = -17;
    }
    $368 = ($369|0)==(0);
    $$$i39 = $368 ? 1 : $369;
    $370 = (_malloc($$$i39)|0);
    $371 = ($370|0)==(0|0);
    L313: do {
     if ($371) {
      while(1) {
       $372 = load4(9296);
       $373 = (($372) + 0)|0;
       store4(9296,$373);
       $374 = ($372|0)==(0);
       if ($374) {
        $$lcssa$i45 = 0;
        break L313;
       }
       $375 = $372;
       FUNCTION_TABLE_v[$375 & 3]();
       $376 = (_malloc($$$i39)|0);
       $377 = ($376|0)==(0|0);
       if (!($377)) {
        $$lcssa$i45 = $376;
        break;
       }
      }
     } else {
      $$lcssa$i45 = $370;
     }
    } while(0);
    $378 = ($344|0)==(0);
    if (!($378)) {
     _memcpy(($$lcssa$i45|0),($379|0),($344|0))|0;
    }
    $380 = ($333|0)==(0);
    if (!($380)) {
     $381 = (($$lcssa$i45) + ($344)|0);
     _memcpy(($381|0),($329|0),($333|0))|0;
    }
    $382 = ($343|0)==(10);
    if (!($382)) {
     _free($379);
    }
    store4($0,$$lcssa$i45);
    $383 = $369 | -2147483648;
    $384 = ((($0)) + 8|0);
    store4($384,$383);
    $385 = (($344) + ($333))|0;
    $386 = ((($0)) + 4|0);
    store4($386,$385);
    $387 = (($$lcssa$i45) + ($385)|0);
    store1($387,0);
    $$pre416 = load1($325);
    $389 = $$pre416;
   } else {
    $346 = ($333|0)==(0);
    if ($346) {
     $389 = $326;
    } else {
     if ($335) {
      $347 = load4($0);
      $349 = $347;
     } else {
      $349 = $0;
     }
     $348 = (($349) + ($344)|0);
     _memcpy(($348|0),($329|0),($333|0))|0;
     $350 = (($344) + ($333))|0;
     $351 = load1($43);
     $352 = ($351<<24>>24)<(0);
     if ($352) {
      $353 = ((($0)) + 4|0);
      store4($353,$350);
     } else {
      $354 = $350&255;
      store1($43,$354);
     }
     $355 = (($349) + ($350)|0);
     store1($355,0);
     $389 = $326;
    }
   }
   $388 = ($389<<24>>24)<(0);
   if ($388) {
    $390 = load4($2);
    _free($390);
   }
   $391 = load1($43);
   $392 = ($391<<24>>24)<(0);
   if ($392) {
    $393 = load4($0);
    $394 = ((($0)) + 4|0);
    $395 = load4($394);
    $398 = $393;$399 = $395;
   } else {
    $396 = $391&255;
    $398 = $0;$399 = $396;
   }
   $397 = (($398) + ($399)|0);
   $400 = ($399|0)==(0);
   if ($400) {
    break;
   } else {
    $402 = $398;
   }
   while(1) {
    $401 = load1($402);
    $403 = ($401<<24>>24)==(32);
    if ($403) {
     store1($402,46);
    }
    $404 = ((($402)) + 1|0);
    $405 = ($404|0)==($397|0);
    if ($405) {
     break;
    } else {
     $402 = $404;
    }
   }
  }
 } while(0);
 $406 = load4($1);
 $407 = (__emval_new_cstring((2778|0))|0);
 $408 = (__emval_get_property(($406|0),($407|0))|0);
 __emval_decref(($407|0));
 $409 = (__emval_new_cstring((2789|0))|0);
 $410 = (__emval_get_property(($408|0),($409|0))|0);
 __emval_decref(($409|0));
 $411 = (+__emval_as(($410|0),(1616|0),($2|0)));
 $412 = load4($2);
 __emval_run_destructors(($412|0));
 $413 = (~~(($411)));
 __emval_decref(($410|0));
 __emval_decref(($408|0));
 $414 = ($413|0)>(0);
 L350: do {
  if ($414) {
   $415 = ((($5)) + 12|0);
   $416 = ((($3)) + 11|0);
   $417 = ((($3)) + 4|0);
   $418 = ((($5)) + 11|0);
   $419 = ((($5)) + 8|0);
   $420 = ((($5)) + 4|0);
   $421 = ((($415)) + 11|0);
   $422 = ((($7)) + 11|0);
   $$0217525 = 0;
   L352: while(1) {
    $423 = load4($1);
    $424 = (__emval_new_cstring((2778|0))|0);
    $425 = (__emval_get_property(($423|0),($424|0))|0);
    __emval_decref(($424|0));
    store4($2,$$0217525);
    $426 = (__emval_take_value((1616|0),($2|0))|0);
    $427 = (__emval_get_property(($425|0),($426|0))|0);
    __emval_decref(($426|0));
    $428 = (__emval_new_cstring((2796|0))|0);
    $429 = (__emval_get_property(($427|0),($428|0))|0);
    __emval_decref(($428|0));
    __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($3,$429);
    __emval_decref(($429|0));
    __emval_decref(($427|0));
    __emval_decref(($425|0));
    L354: do {
     if (((((8619) & 3)|0)==(0))) {
      $$015$lcssa$i156 = 8619;
      label = 167;
     } else {
      $$01518$i154 = 8619;$888 = (8619);
      while(1) {
       $430 = load1($$01518$i154);
       $431 = ($430<<24>>24)==(0);
       if ($431) {
        $$pn$i164 = $888;
        break L354;
       }
       $432 = ((($$01518$i154)) + 1|0);
       $433 = $432;
       $434 = $433 & 3;
       $435 = ($434|0)==(0);
       if ($435) {
        $$015$lcssa$i156 = $432;
        label = 167;
        break;
       } else {
        $$01518$i154 = $432;$888 = $433;
       }
      }
     }
    } while(0);
    if ((label|0) == 167) {
     label = 0;
     $$0$i158 = $$015$lcssa$i156;
     while(1) {
      $436 = load4($$0$i158);
      $437 = (($436) + -16843009)|0;
      $438 = $436 & -2139062144;
      $439 = $438 ^ -2139062144;
      $440 = $439 & $437;
      $441 = ($440|0)==(0);
      $442 = ((($$0$i158)) + 4|0);
      if ($441) {
       $$0$i158 = $442;
      } else {
       break;
      }
     }
     $443 = $436&255;
     $444 = ($443<<24>>24)==(0);
     if ($444) {
      $$1$lcssa$i162 = $$0$i158;
     } else {
      $$pn29$i159 = $$0$i158;
      while(1) {
       $445 = ((($$pn29$i159)) + 1|0);
       $$pre$i160 = load1($445);
       $446 = ($$pre$i160<<24>>24)==(0);
       if ($446) {
        $$1$lcssa$i162 = $445;
        break;
       } else {
        $$pn29$i159 = $445;
       }
      }
     }
     $447 = $$1$lcssa$i162;
     $$pn$i164 = $447;
    }
    $$014$i165 = (($$pn$i164) - (8619))|0;
    $448 = load1($416);
    $449 = ($448<<24>>24)<(0);
    $450 = load4($417);
    $451 = $448&255;
    $452 = $449 ? $450 : $451;
    $453 = ($$014$i165|0)==(-1);
    if ($453) {
     label = 173;
     break;
    }
    $454 = load4($3);
    $455 = $449 ? $454 : $3;
    $456 = ($452>>>0)>($$014$i165>>>0);
    $$sroa$speculated19$i57 = $456 ? $$014$i165 : $452;
    $457 = ($$sroa$speculated19$i57|0)==(0);
    L369: do {
     if ($457) {
      label = 177;
     } else {
      $$01318$i64 = $455;$$01417$i65 = $$sroa$speculated19$i57;$$019$i63 = 8619;
      while(1) {
       $458 = load1($$01318$i64);
       $459 = load1($$019$i63);
       $460 = ($458<<24>>24)==($459<<24>>24);
       if (!($460)) {
        label = 178;
        break L369;
       }
       $461 = (($$01417$i65) + -1)|0;
       $462 = ((($$01318$i64)) + 1|0);
       $463 = ((($$019$i63)) + 1|0);
       $464 = ($461|0)==(0);
       if ($464) {
        label = 177;
        break;
       } else {
        $$01318$i64 = $462;$$01417$i65 = $461;$$019$i63 = $463;
       }
      }
     }
    } while(0);
    if ((label|0) == 177) {
     label = 0;
     $465 = ($452>>>0)>=($$014$i165>>>0);
     $466 = $456 ^ 1;
     $or$cond = $465 & $466;
     if ($or$cond) {
      $554 = $448;
     } else {
      label = 178;
     }
    }
    do {
     if ((label|0) == 178) {
      label = 0;
      L377: do {
       if (((((2765) & 3)|0)==(0))) {
        $$015$lcssa$i169 = 2765;
        label = 181;
       } else {
        $$01518$i167 = 2765;$889 = (2765);
        while(1) {
         $467 = load1($$01518$i167);
         $468 = ($467<<24>>24)==(0);
         if ($468) {
          $$pn$i177 = $889;
          break L377;
         }
         $469 = ((($$01518$i167)) + 1|0);
         $470 = $469;
         $471 = $470 & 3;
         $472 = ($471|0)==(0);
         if ($472) {
          $$015$lcssa$i169 = $469;
          label = 181;
          break;
         } else {
          $$01518$i167 = $469;$889 = $470;
         }
        }
       }
      } while(0);
      if ((label|0) == 181) {
       label = 0;
       $$0$i171 = $$015$lcssa$i169;
       while(1) {
        $473 = load4($$0$i171);
        $474 = (($473) + -16843009)|0;
        $475 = $473 & -2139062144;
        $476 = $475 ^ -2139062144;
        $477 = $476 & $474;
        $478 = ($477|0)==(0);
        $479 = ((($$0$i171)) + 4|0);
        if ($478) {
         $$0$i171 = $479;
        } else {
         break;
        }
       }
       $480 = $473&255;
       $481 = ($480<<24>>24)==(0);
       if ($481) {
        $$1$lcssa$i175 = $$0$i171;
       } else {
        $$pn29$i172 = $$0$i171;
        while(1) {
         $482 = ((($$pn29$i172)) + 1|0);
         $$pre$i173 = load1($482);
         $483 = ($$pre$i173<<24>>24)==(0);
         if ($483) {
          $$1$lcssa$i175 = $482;
          break;
         } else {
          $$pn29$i172 = $482;
         }
        }
       }
       $484 = $$1$lcssa$i175;
       $$pn$i177 = $484;
      }
      $$014$i178 = (($$pn$i177) - (2765))|0;
      $485 = ($$014$i178|0)==(-1);
      if ($485) {
       label = 187;
       break L352;
      }
      $486 = ($452>>>0)>($$014$i178>>>0);
      $$sroa$speculated19$i70 = $486 ? $$014$i178 : $452;
      $487 = ($$sroa$speculated19$i70|0)==(0);
      L392: do {
       if ($487) {
        label = 191;
       } else {
        $$01318$i77 = $455;$$01417$i78 = $$sroa$speculated19$i70;$$019$i76 = 2765;
        while(1) {
         $488 = load1($$01318$i77);
         $489 = load1($$019$i76);
         $490 = ($488<<24>>24)==($489<<24>>24);
         if (!($490)) {
          break L392;
         }
         $491 = (($$01417$i78) + -1)|0;
         $492 = ((($$01318$i77)) + 1|0);
         $493 = ((($$019$i76)) + 1|0);
         $494 = ($491|0)==(0);
         if ($494) {
          label = 191;
          break;
         } else {
          $$01318$i77 = $492;$$01417$i78 = $491;$$019$i76 = $493;
         }
        }
       }
      } while(0);
      if ((label|0) == 191) {
       label = 0;
       $495 = ($452>>>0)>=($$014$i178>>>0);
       $496 = $486 ^ 1;
       $or$cond198 = $495 & $496;
       if ($or$cond198) {
        $554 = $448;
        break;
       }
      }
      $497 = load4($1);
      $498 = (__emval_new_cstring((2778|0))|0);
      $499 = (__emval_get_property(($497|0),($498|0))|0);
      __emval_decref(($498|0));
      store4($2,$$0217525);
      $500 = (__emval_take_value((1616|0),($2|0))|0);
      $501 = (__emval_get_property(($499|0),($500|0))|0);
      __emval_decref(($500|0));
      $502 = (__emval_new_cstring((2805|0))|0);
      $503 = (__emval_get_property(($501|0),($502|0))|0);
      __emval_decref(($502|0));
      __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($7,$503);
      ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
      if ($449) {
       $504 = ($450>>>0)>(4294967279);
       if ($504) {
        label = 195;
        break L352;
       }
       $505 = ($450>>>0)<(11);
       if ($505) {
        $518 = $450&255;
        store1($418,$518);
        $519 = ($450|0)==(0);
        if ($519) {
         $$017$i = $5;
        } else {
         $$016$i = $5;
         label = 202;
        }
       } else {
        $506 = (($450) + 16)|0;
        $507 = $506 & -16;
        $508 = ($507|0)==(0);
        $$$i48 = $508 ? 1 : $507;
        $509 = (_malloc($$$i48)|0);
        $510 = ($509|0)==(0|0);
        L405: do {
         if ($510) {
          while(1) {
           $511 = load4(9296);
           $512 = (($511) + 0)|0;
           store4(9296,$512);
           $513 = ($511|0)==(0);
           if ($513) {
            $$lcssa$i54 = 0;
            break L405;
           }
           $514 = $511;
           FUNCTION_TABLE_v[$514 & 3]();
           $515 = (_malloc($$$i48)|0);
           $516 = ($515|0)==(0|0);
           if (!($516)) {
            $$lcssa$i54 = $515;
            break;
           }
          }
         } else {
          $$lcssa$i54 = $509;
         }
        } while(0);
        store4($5,$$lcssa$i54);
        $517 = $507 | -2147483648;
        store4($419,$517);
        store4($420,$450);
        $$016$i = $$lcssa$i54;
        label = 202;
       }
       if ((label|0) == 202) {
        label = 0;
        _memcpy(($$016$i|0),($454|0),($450|0))|0;
        $$017$i = $$016$i;
       }
       $520 = (($$017$i) + ($450)|0);
       store1($520,0);
      } else {
       ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
      }
      ; store8($415,load8($7,4),4); store4($415+8 | 0,load4($7+8 | 0,4),4);
      ; store8($7,i64_const(0,0),4); store4($7+8|0,0,4);
      $521 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($13,$2,$5)|0);
      $522 = load4($521);
      $523 = ($522|0)==(0|0);
      do {
       if ($523) {
        $524 = (_malloc(40)|0);
        $525 = ($524|0)==(0|0);
        L417: do {
         if ($525) {
          while(1) {
           $526 = load4(9296);
           $527 = (($526) + 0)|0;
           store4(9296,$527);
           $528 = ($526|0)==(0);
           if ($528) {
            $$lcssa$i62 = 0;
            break L417;
           }
           $529 = $526;
           FUNCTION_TABLE_v[$529 & 3]();
           $530 = (_malloc(40)|0);
           $531 = ($530|0)==(0|0);
           if (!($531)) {
            $$lcssa$i62 = $530;
            break;
           }
          }
         } else {
          $$lcssa$i62 = $524;
         }
        } while(0);
        $532 = ((($$lcssa$i62)) + 16|0);
        ; store8($532,load8($5,4),4); store4($532+8 | 0,load4($5+8 | 0,4),4);
        ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
        $533 = ((($$lcssa$i62)) + 28|0);
        ; store8($533,load8($415,4),4); store4($533+8 | 0,load4($415+8 | 0,4),4);
        ; store8($415,i64_const(0,0),4); store4($415+8|0,0,4);
        $534 = load4($2);
        store4($$lcssa$i62,0);
        $535 = ((($$lcssa$i62)) + 4|0);
        store4($535,0);
        $536 = ((($$lcssa$i62)) + 8|0);
        store4($536,$534);
        store4($521,$$lcssa$i62);
        $537 = load4($13);
        $538 = load4($537);
        $539 = ($538|0)==(0|0);
        if ($539) {
         $542 = $$lcssa$i62;
        } else {
         $540 = $538;
         store4($13,$540);
         $$pre$i$i$i$i$i$i = load4($521);
         $542 = $$pre$i$i$i$i$i$i;
        }
        $541 = load4($14);
        __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($541,$542);
        $543 = load4($15);
        $544 = (($543) + 1)|0;
        store4($15,$544);
       } else {
        $$pre417 = load1($421);
        $545 = ($$pre417<<24>>24)<(0);
        if (!($545)) {
         break;
        }
        $546 = load4($415);
        _free($546);
       }
      } while(0);
      $547 = load1($418);
      $548 = ($547<<24>>24)<(0);
      if ($548) {
       $549 = load4($5);
       _free($549);
      }
      $550 = load1($422);
      $551 = ($550<<24>>24)<(0);
      if ($551) {
       $552 = load4($7);
       _free($552);
      }
      __emval_decref(($503|0));
      __emval_decref(($501|0));
      __emval_decref(($499|0));
      $$pre685 = load1($416);
      $554 = $$pre685;
     }
    } while(0);
    $553 = ($554<<24>>24)<(0);
    if ($553) {
     $555 = load4($3);
     _free($555);
    }
    $556 = (($$0217525) + 1)|0;
    $557 = ($556|0)<($413|0);
    if ($557) {
     $$0217525 = $556;
    } else {
     break L350;
    }
   }
   if ((label|0) == 173) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
    // unreachable;
   }
   else if ((label|0) == 187) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
    // unreachable;
   }
   else if ((label|0) == 195) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
  }
 } while(0);
 $558 = load4($1);
 $559 = (__emval_new_cstring((2815|0))|0);
 $560 = (__emval_get_property(($558|0),($559|0))|0);
 __emval_decref(($559|0));
 $561 = (__emval_new_cstring((2789|0))|0);
 $562 = (__emval_get_property(($560|0),($561|0))|0);
 __emval_decref(($561|0));
 $563 = (+__emval_as(($562|0),(1616|0),($2|0)));
 $564 = load4($2);
 __emval_run_destructors(($564|0));
 $565 = (~~(($563)));
 __emval_decref(($562|0));
 __emval_decref(($560|0));
 $566 = ($565|0)>(0);
 L443: do {
  if ($566) {
   $567 = ((($0)) + 100|0);
   $568 = ((($0)) + 108|0);
   $569 = ((($3)) + 12|0);
   $570 = ((($3)) + 24|0);
   $571 = ((($3)) + 36|0);
   $572 = ((($3)) + 40|0);
   $573 = ((($3)) + 44|0);
   $574 = ((($3)) + 48|0);
   $575 = ((($3)) + 52|0);
   $576 = ((($3)) + 56|0);
   $577 = ((($3)) + 60|0);
   $578 = ((($3)) + 64|0);
   $579 = ((($3)) + 68|0);
   $580 = ((($3)) + 72|0);
   $581 = ((($3)) + 84|0);
   $582 = ((($3)) + 96|0);
   $583 = ((($3)) + 100|0);
   $584 = ((($3)) + 104|0);
   $585 = ((($3)) + 108|0);
   $586 = ((($3)) + 64|0);
   $587 = ((($3)) + 52|0);
   $588 = ((($3)) + 40|0);
   $$1218524 = 0;
   L445: while(1) {
    $589 = load4($1);
    $590 = (__emval_new_cstring((2815|0))|0);
    $591 = (__emval_get_property(($589|0),($590|0))|0);
    __emval_decref(($590|0));
    store4($2,$$1218524);
    $592 = (__emval_take_value((1616|0),($2|0))|0);
    $593 = (__emval_get_property(($591|0),($592|0))|0);
    __emval_decref(($592|0));
    store4($8,$593);
    __Z8to_VNodeN10emscripten3valE($3,$8);
    $594 = load4($24);
    $595 = load4($568);
    $596 = ($594>>>0)<($595>>>0);
    $597 = $595;
    do {
     if ($596) {
      ; store8($594,load8($3,4),4); store4($594+8 | 0,load4($3+8 | 0,4),4);
      ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
      $598 = ((($594)) + 12|0);
      ; store8($598,load8($569,4),4); store4($598+8 | 0,load4($569+8 | 0,4),4);
      ; store8($569,i64_const(0,0),4); store4($569+8|0,0,4);
      $599 = ((($594)) + 24|0);
      ; store8($599,load8($570,4),4); store4($599+8 | 0,load4($570+8 | 0,4),4);
      ; store8($570,i64_const(0,0),4); store4($570+8|0,0,4);
      $600 = ((($594)) + 36|0);
      $601 = load4($571);
      store4($600,$601);
      $602 = ((($594)) + 40|0);
      $603 = load4($572);
      store4($602,$603);
      $604 = ((($594)) + 44|0);
      $605 = load4($573);
      store4($604,$605);
      $606 = ($605|0)==(0);
      $607 = ((($594)) + 40|0);
      if ($606) {
       store4($600,$607);
      } else {
       $608 = $603;
       $609 = ((($608)) + 8|0);
       store4($609,$607);
       store4($571,$588);
       store4($588,0);
       store4($573,0);
      }
      $610 = ((($594)) + 48|0);
      $611 = load4($574);
      store4($610,$611);
      $612 = ((($594)) + 52|0);
      $613 = load4($575);
      store4($612,$613);
      $614 = ((($594)) + 56|0);
      $615 = load4($576);
      store4($614,$615);
      $616 = ($615|0)==(0);
      $617 = ((($594)) + 52|0);
      if ($616) {
       store4($610,$617);
      } else {
       $618 = $613;
       $619 = ((($618)) + 8|0);
       store4($619,$617);
       store4($574,$587);
       store4($587,0);
       store4($576,0);
      }
      $620 = ((($594)) + 60|0);
      $621 = load4($577);
      store4($620,$621);
      $622 = ((($594)) + 64|0);
      $623 = load4($578);
      store4($622,$623);
      $624 = ((($594)) + 68|0);
      $625 = load4($579);
      store4($624,$625);
      $626 = ($625|0)==(0);
      $627 = ((($594)) + 64|0);
      if ($626) {
       store4($620,$627);
      } else {
       $628 = $623;
       $629 = ((($628)) + 8|0);
       store4($629,$627);
       store4($577,$586);
       store4($586,0);
       store4($579,0);
      }
      $630 = ((($594)) + 72|0);
      ; store8($630,load8($580,4),4); store4($630+8 | 0,load4($580+8 | 0,4),4);
      ; store8($580,i64_const(0,0),4); store4($580+8|0,0,4);
      $631 = ((($594)) + 84|0);
      ; store8($631,load8($581,4),4); store4($631+8 | 0,load4($581+8 | 0,4),4);
      ; store8($581,i64_const(0,0),4); store4($581+8|0,0,4);
      $632 = ((($594)) + 96|0);
      $633 = load4($582);
      store4($632,$633);
      store4($582,0);
      $634 = ((($594)) + 100|0);
      store4($634,0);
      $635 = ((($594)) + 104|0);
      store4($635,0);
      $636 = ((($594)) + 108|0);
      store4($636,0);
      $637 = load4($583);
      store4($634,$637);
      $638 = load4($584);
      store4($635,$638);
      $639 = load4($585);
      $640 = ((($594)) + 108|0);
      store4($640,$639);
      store4($585,0);
      store4($584,0);
      store4($583,0);
      $641 = load4($24);
      $642 = ((($641)) + 112|0);
      store4($24,$642);
     } else {
      $643 = $594;
      $644 = load4($567);
      $645 = (($643) - ($644))|0;
      $646 = (($645|0) / 112)&-1;
      $647 = (($646) + 1)|0;
      $648 = ($647>>>0)>(38347922);
      if ($648) {
       label = 235;
       break L445;
      }
      $649 = (($597) - ($644))|0;
      $650 = (($649|0) / 112)&-1;
      $651 = ($650>>>0)<(19173961);
      $652 = $650 << 1;
      $653 = ($652>>>0)<($647>>>0);
      $$sroa$speculated$i$i = $653 ? $647 : $652;
      $$0$i$i = $651 ? $$sroa$speculated$i$i : 38347922;
      $654 = ($$0$i$i|0)==(0);
      if ($654) {
       $668 = 0;
      } else {
       $655 = ($$0$i$i>>>0)>(38347922);
       if ($655) {
        label = 238;
        break L445;
       }
       $657 = ($$0$i$i*112)|0;
       $658 = ($657|0)==(0);
       $$$i$i = $658 ? 1 : $657;
       $659 = (_malloc($$$i$i)|0);
       $660 = ($659|0)==(0|0);
       L466: do {
        if ($660) {
         while(1) {
          $661 = load4(9296);
          $662 = (($661) + 0)|0;
          store4(9296,$662);
          $663 = ($661|0)==(0);
          if ($663) {
           $$lcssa$i$i = 0;
           break L466;
          }
          $664 = $661;
          FUNCTION_TABLE_v[$664 & 3]();
          $665 = (_malloc($$$i$i)|0);
          $666 = ($665|0)==(0|0);
          if (!($666)) {
           $$lcssa$i$i = $665;
           break;
          }
         }
        } else {
         $$lcssa$i$i = $659;
        }
       } while(0);
       $668 = $$lcssa$i$i;
      }
      $667 = (($668) + (($646*112)|0)|0);
      $669 = (($668) + (($$0$i$i*112)|0)|0);
      $670 = $669;
      ; store8($667,load8($3,4),4); store4($667+8 | 0,load4($3+8 | 0,4),4);
      ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
      $671 = (((($668) + (($646*112)|0)|0)) + 12|0);
      ; store8($671,load8($569,4),4); store4($671+8 | 0,load4($569+8 | 0,4),4);
      ; store8($569,i64_const(0,0),4); store4($569+8|0,0,4);
      $672 = (((($668) + (($646*112)|0)|0)) + 24|0);
      ; store8($672,load8($570,4),4); store4($672+8 | 0,load4($570+8 | 0,4),4);
      ; store8($570,i64_const(0,0),4); store4($570+8|0,0,4);
      $673 = (((($668) + (($646*112)|0)|0)) + 36|0);
      $674 = load4($571);
      store4($673,$674);
      $675 = (((($668) + (($646*112)|0)|0)) + 40|0);
      $676 = load4($572);
      store4($675,$676);
      $677 = (((($668) + (($646*112)|0)|0)) + 44|0);
      $678 = load4($573);
      store4($677,$678);
      $679 = ($678|0)==(0);
      $680 = (((($668) + (($646*112)|0)|0)) + 40|0);
      if ($679) {
       store4($673,$680);
      } else {
       $681 = $676;
       $682 = ((($681)) + 8|0);
       store4($682,$680);
       store4($571,$588);
       store4($588,0);
       store4($573,0);
      }
      $683 = (((($668) + (($646*112)|0)|0)) + 48|0);
      $684 = load4($574);
      store4($683,$684);
      $685 = (((($668) + (($646*112)|0)|0)) + 52|0);
      $686 = load4($575);
      store4($685,$686);
      $687 = (((($668) + (($646*112)|0)|0)) + 56|0);
      $688 = load4($576);
      store4($687,$688);
      $689 = ($688|0)==(0);
      $690 = (((($668) + (($646*112)|0)|0)) + 52|0);
      if ($689) {
       store4($683,$690);
      } else {
       $691 = $686;
       $692 = ((($691)) + 8|0);
       store4($692,$690);
       store4($574,$587);
       store4($587,0);
       store4($576,0);
      }
      $693 = (((($668) + (($646*112)|0)|0)) + 60|0);
      $694 = load4($577);
      store4($693,$694);
      $695 = (((($668) + (($646*112)|0)|0)) + 64|0);
      $696 = load4($578);
      store4($695,$696);
      $697 = (((($668) + (($646*112)|0)|0)) + 68|0);
      $698 = load4($579);
      store4($697,$698);
      $699 = ($698|0)==(0);
      $700 = (((($668) + (($646*112)|0)|0)) + 64|0);
      if ($699) {
       store4($693,$700);
      } else {
       $701 = $696;
       $702 = ((($701)) + 8|0);
       store4($702,$700);
       store4($577,$586);
       store4($586,0);
       store4($579,0);
      }
      $703 = (((($668) + (($646*112)|0)|0)) + 72|0);
      ; store8($703,load8($580,4),4); store4($703+8 | 0,load4($580+8 | 0,4),4);
      ; store8($580,i64_const(0,0),4); store4($580+8|0,0,4);
      $704 = (((($668) + (($646*112)|0)|0)) + 84|0);
      ; store8($704,load8($581,4),4); store4($704+8 | 0,load4($581+8 | 0,4),4);
      ; store8($581,i64_const(0,0),4); store4($581+8|0,0,4);
      $705 = (((($668) + (($646*112)|0)|0)) + 96|0);
      $706 = load4($582);
      store4($705,$706);
      store4($582,0);
      $707 = (((($668) + (($646*112)|0)|0)) + 100|0);
      $708 = (((($668) + (($646*112)|0)|0)) + 104|0);
      $709 = (((($668) + (($646*112)|0)|0)) + 108|0);
      store4($709,0);
      $710 = load4($583);
      store4($707,$710);
      $711 = load4($584);
      store4($708,$711);
      $712 = load4($585);
      $713 = (((($668) + (($646*112)|0)|0)) + 108|0);
      store4($713,$712);
      store4($585,0);
      store4($584,0);
      store4($583,0);
      $714 = ((($667)) + 112|0);
      $715 = $714;
      $716 = load4($567);
      $717 = load4($24);
      $718 = ($717|0)==($716|0);
      if ($718) {
       $719 = $716;
       $$in$i = $667;$726 = $719;$728 = $716;
      } else {
       $$06$i$i$i = $717;$$sroa$7$0$idx$i = 0;$721 = $667;
       while(1) {
        $720 = ((($721)) + -112|0);
        $722 = ((($$06$i$i$i)) + -112|0);
        __ZN5VNodeC2ERKS_($720,$722);
        $$add$i = (($$sroa$7$0$idx$i) + -1)|0;
        $$ptr39$i = (($667) + (($$add$i*112)|0)|0);
        $723 = ($722|0)==($716|0);
        if ($723) {
         break;
        } else {
         $$06$i$i$i = $722;$$sroa$7$0$idx$i = $$add$i;$721 = $$ptr39$i;
        }
       }
       $$pre$i$i = load4($567);
       $$pre45$i = load4($24);
       $$in$i = $$ptr39$i;$726 = $$pre$i$i;$728 = $$pre45$i;
      }
      $724 = $$in$i;
      store4($567,$724);
      store4($24,$715);
      store4($568,$670);
      $725 = $726;
      $727 = ($728|0)==($725|0);
      if (!($727)) {
       $730 = $728;
       while(1) {
        $729 = ((($730)) + -112|0);
        __ZN5VNodeD2Ev($729);
        $731 = ($729|0)==($725|0);
        if ($731) {
         break;
        } else {
         $730 = $729;
        }
       }
      }
      $732 = ($726|0)==(0);
      if ($732) {
       break;
      }
      $733 = $726;
      _free($733);
     }
    } while(0);
    __ZN5VNodeD2Ev($3);
    __emval_decref(($593|0));
    __emval_decref(($591|0));
    $734 = (($$1218524) + 1)|0;
    $735 = ($734|0)<($565|0);
    if ($735) {
     $$1218524 = $734;
    } else {
     break L443;
    }
   }
   if ((label|0) == 235) {
    __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   else if ((label|0) == 238) {
    $656 = (___cxa_allocate_exception(4)|0);
    store4($656,(2252));
    ___cxa_throw(($656|0),(1488|0),(6|0));
    // unreachable;
   }
  }
 } while(0);
 $736 = ((($0)) + 96|0);
 $737 = load4($1);
 __emval_incref(($737|0));
 $738 = load4($736);
 __emval_decref(($738|0));
 $739 = load4($1);
 store4($736,$739);
 __emval_decref(($241|0));
 STACKTOP = sp;return;
}
function __Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($0) {
 $0 = $0|0;
 var $$$i = 0, $$$i14 = 0, $$$i23 = 0, $$$i32 = 0, $$$i41 = 0, $$$i5 = 0, $$$i54 = 0, $$$i63 = 0, $$$i72 = 0, $$$i81 = 0, $$0$i$i = 0, $$0$i$i13 = 0, $$0$i107 = 0, $$01318$i = 0, $$014$i = 0, $$01417$i = 0, $$015$lcssa$i = 0, $$01518$i = 0, $$016$i = 0, $$016$i46 = 0;
 var $$016$i5 = 0, $$016$i51 = 0, $$016$i56 = 0, $$016$i61 = 0, $$016$i66 = 0, $$016$i76 = 0, $$016$i90 = 0, $$016$i98 = 0, $$017$i = 0, $$017$i47 = 0, $$017$i52 = 0, $$017$i57 = 0, $$017$i6 = 0, $$017$i62 = 0, $$017$i67 = 0, $$017$i77 = 0, $$017$i91 = 0, $$017$i99 = 0, $$019$i = 0, $$0212 = 0;
 var $$035$lcssa$i197 = 0, $$035$lcssa$i23199 = 0, $$03555$i = 0, $$03555$i19 = 0, $$036$lcssa$i196 = 0, $$036$lcssa$i22198 = 0, $$03654$i = 0, $$03654$i20 = 0, $$046$i = 0, $$046$i29 = 0, $$053 = 0, $$056 = 0, $$1$i$i14 = 0, $$1$lcssa$i = 0, $$13745$i = 0, $$13745$i30 = 0, $$140$i = 0, $$140$i36 = 0, $$2$i = 0, $$2$i40 = 0;
 var $$23839$i = 0, $$23839$i37 = 0, $$3$i = 0, $$3$i39 = 0, $$lcssa$i = 0, $$lcssa$i11 = 0, $$lcssa$i20 = 0, $$lcssa$i29 = 0, $$lcssa$i38 = 0, $$lcssa$i47 = 0, $$lcssa$i60 = 0, $$lcssa$i69 = 0, $$lcssa$i78 = 0, $$lcssa$i87 = 0, $$pn$i = 0, $$pn29$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i108 = 0, $$pre$i26 = 0;
 var $$pre$i50 = 0, $$pre$phi187Z2D = 0, $$pre$phi191Z2D = 0, $$pre182 = 0, $$pre183 = 0, $$pre184 = 0, $$pre186$pre$phiZZ2D = 0, $$pre190$pre$phiZZ2D = 0, $$pre193 = 0, $$pre195 = 0, $$sink = 0, $$sroa$speculated = 0, $$sroa$speculated$i43 = 0, $$sroa$speculated$i73 = 0, $$sroa$speculated19$i = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0;
 var $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0;
 var $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0;
 var $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0;
 var $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0;
 var $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0;
 var $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0;
 var $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0;
 var $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0;
 var $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0;
 var $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0;
 var $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0;
 var $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0;
 var $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0.0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0;
 var $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0;
 var $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0;
 var $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0;
 var $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0;
 var $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0;
 var $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0;
 var $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0;
 var $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0;
 var $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0;
 var $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0;
 var $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0;
 var $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0;
 var $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0;
 var $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0;
 var $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond$i = 0, $or$cond$i21 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0;
 $1 = sp;
 $2 = sp + 100|0;
 $3 = sp + 88|0;
 $4 = sp + 76|0;
 $5 = sp + 52|0;
 $6 = sp + 64|0;
 $7 = sp + 40|0;
 $8 = sp + 28|0;
 $9 = sp + 16|0;
 L1: do {
  if (((((2826) & 3)|0)==(0))) {
   $$015$lcssa$i = 2826;
   label = 4;
  } else {
   $$01518$i = 2826;$558 = (2826);
   while(1) {
    $10 = load1($$01518$i);
    $11 = ($10<<24>>24)==(0);
    if ($11) {
     $$pn$i = $558;
     break L1;
    }
    $12 = ((($$01518$i)) + 1|0);
    $13 = $12;
    $14 = $13 & 3;
    $15 = ($14|0)==(0);
    if ($15) {
     $$015$lcssa$i = $12;
     label = 4;
     break;
    } else {
     $$01518$i = $12;$558 = $13;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $$0$i107 = $$015$lcssa$i;
  while(1) {
   $16 = load4($$0$i107);
   $17 = (($16) + -16843009)|0;
   $18 = $16 & -2139062144;
   $19 = $18 ^ -2139062144;
   $20 = $19 & $17;
   $21 = ($20|0)==(0);
   $22 = ((($$0$i107)) + 4|0);
   if ($21) {
    $$0$i107 = $22;
   } else {
    break;
   }
  }
  $23 = $16&255;
  $24 = ($23<<24>>24)==(0);
  if ($24) {
   $$1$lcssa$i = $$0$i107;
  } else {
   $$pn29$i = $$0$i107;
   while(1) {
    $25 = ((($$pn29$i)) + 1|0);
    $$pre$i108 = load1($25);
    $26 = ($$pre$i108<<24>>24)==(0);
    if ($26) {
     $$1$lcssa$i = $25;
     break;
    } else {
     $$pn29$i = $25;
    }
   }
  }
  $27 = $$1$lcssa$i;
  $$pn$i = $27;
 }
 $$014$i = (($$pn$i) - (2826))|0;
 $28 = ((($0)) + 11|0);
 $29 = load1($28);
 $30 = ($29<<24>>24)<(0);
 $31 = ((($0)) + 4|0);
 $32 = load4($31);
 $33 = $29&255;
 $34 = $30 ? $32 : $33;
 $35 = ($$014$i|0)==(-1);
 if ($35) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
  // unreachable;
 }
 $36 = load4($0);
 $37 = $30 ? $36 : $0;
 $38 = ($34>>>0)>($$014$i>>>0);
 $$sroa$speculated19$i = $38 ? $$014$i : $34;
 $39 = ($$sroa$speculated19$i|0)==(0);
 L18: do {
  if ($39) {
   label = 14;
  } else {
   $$01318$i = $37;$$01417$i = $$sroa$speculated19$i;$$019$i = 2826;
   while(1) {
    $40 = load1($$01318$i);
    $41 = load1($$019$i);
    $42 = ($40<<24>>24)==($41<<24>>24);
    if (!($42)) {
     break L18;
    }
    $43 = (($$01417$i) + -1)|0;
    $44 = ((($$01318$i)) + 1|0);
    $45 = ((($$019$i)) + 1|0);
    $46 = ($43|0)==(0);
    if ($46) {
     label = 14;
     break;
    } else {
     $$01318$i = $44;$$01417$i = $43;$$019$i = $45;
    }
   }
  }
 } while(0);
 if ((label|0) == 14) {
  $47 = ($34>>>0)>=($$014$i>>>0);
  $48 = $38 ^ 1;
  $or$cond = $47 & $48;
  if ($or$cond) {
   $49 = ((($0)) + 24|0);
   ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
   $50 = ((($49)) + 11|0);
   $51 = load1($50);
   $52 = ($51<<24>>24)<(0);
   if ($52) {
    $53 = load4($49);
    $54 = ((($0)) + 28|0);
    $55 = load4($54);
    $56 = ($55>>>0)>(4294967279);
    if ($56) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $57 = ($55>>>0)<(11);
    if ($57) {
     $72 = $55&255;
     $73 = ((($3)) + 11|0);
     store1($73,$72);
     $74 = ($55|0)==(0);
     if ($74) {
      $$017$i = $3;
     } else {
      $$016$i = $3;
      label = 25;
     }
    } else {
     $58 = (($55) + 16)|0;
     $59 = $58 & -16;
     $60 = ($59|0)==(0);
     $$$i = $60 ? 1 : $59;
     $61 = (_malloc($$$i)|0);
     $62 = ($61|0)==(0|0);
     L33: do {
      if ($62) {
       while(1) {
        $63 = load4(9296);
        $64 = (($63) + 0)|0;
        store4(9296,$64);
        $65 = ($63|0)==(0);
        if ($65) {
         $$lcssa$i = 0;
         break L33;
        }
        $66 = $63;
        FUNCTION_TABLE_v[$66 & 3]();
        $67 = (_malloc($$$i)|0);
        $68 = ($67|0)==(0|0);
        if (!($68)) {
         $$lcssa$i = $67;
         break;
        }
       }
      } else {
       $$lcssa$i = $61;
      }
     } while(0);
     store4($3,$$lcssa$i);
     $69 = $59 | -2147483648;
     $70 = ((($3)) + 8|0);
     store4($70,$69);
     $71 = ((($3)) + 4|0);
     store4($71,$55);
     $$016$i = $$lcssa$i;
     label = 25;
    }
    if ((label|0) == 25) {
     _memcpy(($$016$i|0),($53|0),($55|0))|0;
     $$017$i = $$016$i;
    }
    $75 = (($$017$i) + ($55)|0);
    store1($75,0);
   } else {
    ; store8($3,load8($49,4),4); store4($3+8 | 0,load4($49+8 | 0,4),4);
   }
   $76 = load4(9300);
   $77 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($76,2529,$3)|0);
   $78 = ((($0)) + 96|0);
   $79 = load4($78);
   __emval_decref(($79|0));
   $80 = $77;
   store4($78,$80);
   __emval_decref((0|0));
   $81 = ((($3)) + 11|0);
   $82 = load1($81);
   $83 = ($82<<24>>24)<(0);
   if (!($83)) {
    $556 = ((($0)) + 96|0);
    $557 = load4($556);
    __emval_incref(($557|0));
    STACKTOP = sp;return ($557|0);
   }
   $84 = load4($3);
   _free($84);
   $556 = ((($0)) + 96|0);
   $557 = load4($556);
   __emval_incref(($557|0));
   STACKTOP = sp;return ($557|0);
  }
 }
 $85 = ($34|0)==(0);
 if ($85) {
  $86 = ((($0)) + 24|0);
  ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
  $87 = ((($86)) + 11|0);
  $88 = load1($87);
  $89 = ($88<<24>>24)<(0);
  if ($89) {
   $90 = load4($86);
   $91 = ((($0)) + 28|0);
   $92 = load4($91);
   $93 = ($92>>>0)>(4294967279);
   if ($93) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $94 = ($92>>>0)<(11);
   if ($94) {
    $109 = $92&255;
    $110 = ((($4)) + 11|0);
    store1($110,$109);
    $111 = ($92|0)==(0);
    if ($111) {
     $$017$i6 = $4;
    } else {
     $$016$i5 = $4;
     label = 40;
    }
   } else {
    $95 = (($92) + 16)|0;
    $96 = $95 & -16;
    $97 = ($96|0)==(0);
    $$$i5 = $97 ? 1 : $96;
    $98 = (_malloc($$$i5)|0);
    $99 = ($98|0)==(0|0);
    L58: do {
     if ($99) {
      while(1) {
       $100 = load4(9296);
       $101 = (($100) + 0)|0;
       store4(9296,$101);
       $102 = ($100|0)==(0);
       if ($102) {
        $$lcssa$i11 = 0;
        break L58;
       }
       $103 = $100;
       FUNCTION_TABLE_v[$103 & 3]();
       $104 = (_malloc($$$i5)|0);
       $105 = ($104|0)==(0|0);
       if (!($105)) {
        $$lcssa$i11 = $104;
        break;
       }
      }
     } else {
      $$lcssa$i11 = $98;
     }
    } while(0);
    store4($4,$$lcssa$i11);
    $106 = $96 | -2147483648;
    $107 = ((($4)) + 8|0);
    store4($107,$106);
    $108 = ((($4)) + 4|0);
    store4($108,$92);
    $$016$i5 = $$lcssa$i11;
    label = 40;
   }
   if ((label|0) == 40) {
    _memcpy(($$016$i5|0),($90|0),($92|0))|0;
    $$017$i6 = $$016$i5;
   }
   $112 = (($$017$i6) + ($92)|0);
   store1($112,0);
  } else {
   ; store8($4,load8($86,4),4); store4($4+8 | 0,load4($86+8 | 0,4),4);
  }
  $113 = load4(9300);
  $114 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($113,2514,$4)|0);
  $115 = ((($0)) + 96|0);
  $116 = load4($115);
  __emval_decref(($116|0));
  $117 = $114;
  store4($115,$117);
  __emval_decref((0|0));
  $118 = ((($4)) + 11|0);
  $119 = load1($118);
  $120 = ($119<<24>>24)<(0);
  if (!($120)) {
   $556 = ((($0)) + 96|0);
   $557 = load4($556);
   __emval_incref(($557|0));
   STACKTOP = sp;return ($557|0);
  }
  $121 = load4($4);
  _free($121);
  $556 = ((($0)) + 96|0);
  $557 = load4($556);
  __emval_incref(($557|0));
  STACKTOP = sp;return ($557|0);
 }
 $122 = $37;
 $123 = $122 & 3;
 $124 = ($123|0)==(0);
 L73: do {
  if ($124) {
   $$035$lcssa$i197 = $37;$$036$lcssa$i196 = $34;
   label = 48;
  } else {
   $$03555$i = $37;$$03654$i = $34;
   while(1) {
    $125 = load1($$03555$i);
    $126 = ($125<<24>>24)==(35);
    if ($126) {
     $$2$i = $$03555$i;$$3$i = $$03654$i;
     break L73;
    }
    $127 = ((($$03555$i)) + 1|0);
    $128 = (($$03654$i) + -1)|0;
    $129 = $127;
    $130 = $129 & 3;
    $131 = ($130|0)!=(0);
    $132 = ($128|0)!=(0);
    $or$cond$i = $132 & $131;
    if ($or$cond$i) {
     $$03555$i = $127;$$03654$i = $128;
    } else {
     break;
    }
   }
   if ($132) {
    $$035$lcssa$i197 = $127;$$036$lcssa$i196 = $128;
    label = 48;
   } else {
    $$2$i = $127;$$3$i = 0;
   }
  }
 } while(0);
 L78: do {
  if ((label|0) == 48) {
   $$pre$i = load1($$035$lcssa$i197);
   $133 = ($$pre$i<<24>>24)==(35);
   if ($133) {
    $$2$i = $$035$lcssa$i197;$$3$i = $$036$lcssa$i196;
   } else {
    $134 = ($$036$lcssa$i196>>>0)>(3);
    do {
     if ($134) {
      $$046$i = $$035$lcssa$i197;$$13745$i = $$036$lcssa$i196;
      while(1) {
       $135 = load4($$046$i);
       $136 = $135 ^ 589505315;
       $137 = (($136) + -16843009)|0;
       $138 = $135 & -2139062144;
       $139 = $138 ^ -2139062144;
       $140 = $139 & $137;
       $141 = ($140|0)==(0);
       if (!($141)) {
        label = 52;
        break;
       }
       $142 = ((($$046$i)) + 4|0);
       $143 = (($$13745$i) + -4)|0;
       $144 = ($143>>>0)>(3);
       if ($144) {
        $$046$i = $142;$$13745$i = $143;
       } else {
        label = 54;
        break;
       }
      }
      if ((label|0) == 52) {
       $$140$i = $$046$i;$$23839$i = $$13745$i;
       break;
      }
      else if ((label|0) == 54) {
       $145 = ($143|0)==(0);
       if ($145) {
        $$2$i = $142;$$3$i = 0;
        break L78;
       } else {
        $$140$i = $142;$$23839$i = $143;
        break;
       }
      }
     } else {
      $$140$i = $$035$lcssa$i197;$$23839$i = $$036$lcssa$i196;
     }
    } while(0);
    while(1) {
     $146 = load1($$140$i);
     $147 = ($146<<24>>24)==(35);
     if ($147) {
      $$2$i = $$140$i;$$3$i = $$23839$i;
      break L78;
     }
     $148 = ((($$140$i)) + 1|0);
     $149 = (($$23839$i) + -1)|0;
     $150 = ($149|0)==(0);
     if ($150) {
      $$2$i = $148;$$3$i = 0;
      break;
     } else {
      $$140$i = $148;$$23839$i = $149;
     }
    }
   }
  }
 } while(0);
 $151 = ($$3$i|0)!=(0);
 $152 = $151 ? $$2$i : 0;
 $153 = ($152|0)==(0|0);
 $154 = $152;
 $155 = (($154) - ($122))|0;
 $$0$i$i = $153 ? -1 : $155;
 $156 = ($34>>>0)>($$0$i$i>>>0);
 if ($156) {
  $157 = (($37) + ($$0$i$i)|0);
  $158 = (($34) - ($$0$i$i))|0;
  $159 = ($158|0)==(0);
  if ($159) {
   $192 = 0;
  } else {
   $160 = $157;
   $161 = $160 & 3;
   $162 = ($161|0)==(0);
   L97: do {
    if ($162) {
     $$035$lcssa$i23199 = $157;$$036$lcssa$i22198 = $158;
     label = 63;
    } else {
     $$03555$i19 = $157;$$03654$i20 = $158;
     while(1) {
      $163 = load1($$03555$i19);
      $164 = ($163<<24>>24)==(46);
      if ($164) {
       $$2$i40 = $$03555$i19;$$3$i39 = $$03654$i20;
       break L97;
      }
      $165 = ((($$03555$i19)) + 1|0);
      $166 = (($$03654$i20) + -1)|0;
      $167 = $165;
      $168 = $167 & 3;
      $169 = ($168|0)!=(0);
      $170 = ($166|0)!=(0);
      $or$cond$i21 = $170 & $169;
      if ($or$cond$i21) {
       $$03555$i19 = $165;$$03654$i20 = $166;
      } else {
       break;
      }
     }
     if ($170) {
      $$035$lcssa$i23199 = $165;$$036$lcssa$i22198 = $166;
      label = 63;
     } else {
      $$2$i40 = $165;$$3$i39 = 0;
     }
    }
   } while(0);
   L102: do {
    if ((label|0) == 63) {
     $$pre$i26 = load1($$035$lcssa$i23199);
     $171 = ($$pre$i26<<24>>24)==(46);
     if ($171) {
      $$2$i40 = $$035$lcssa$i23199;$$3$i39 = $$036$lcssa$i22198;
     } else {
      $172 = ($$036$lcssa$i22198>>>0)>(3);
      do {
       if ($172) {
        $$046$i29 = $$035$lcssa$i23199;$$13745$i30 = $$036$lcssa$i22198;
        while(1) {
         $173 = load4($$046$i29);
         $174 = $173 ^ 774778414;
         $175 = (($174) + -16843009)|0;
         $176 = $173 & -2139062144;
         $177 = $176 ^ -2139062144;
         $178 = $177 & $175;
         $179 = ($178|0)==(0);
         if (!($179)) {
          label = 67;
          break;
         }
         $180 = ((($$046$i29)) + 4|0);
         $181 = (($$13745$i30) + -4)|0;
         $182 = ($181>>>0)>(3);
         if ($182) {
          $$046$i29 = $180;$$13745$i30 = $181;
         } else {
          label = 69;
          break;
         }
        }
        if ((label|0) == 67) {
         $$140$i36 = $$046$i29;$$23839$i37 = $$13745$i30;
         break;
        }
        else if ((label|0) == 69) {
         $183 = ($181|0)==(0);
         if ($183) {
          $$2$i40 = $180;$$3$i39 = 0;
          break L102;
         } else {
          $$140$i36 = $180;$$23839$i37 = $181;
          break;
         }
        }
       } else {
        $$140$i36 = $$035$lcssa$i23199;$$23839$i37 = $$036$lcssa$i22198;
       }
      } while(0);
      while(1) {
       $184 = load1($$140$i36);
       $185 = ($184<<24>>24)==(46);
       if ($185) {
        $$2$i40 = $$140$i36;$$3$i39 = $$23839$i37;
        break L102;
       }
       $186 = ((($$140$i36)) + 1|0);
       $187 = (($$23839$i37) + -1)|0;
       $188 = ($187|0)==(0);
       if ($188) {
        $$2$i40 = $186;$$3$i39 = 0;
        break;
       } else {
        $$140$i36 = $186;$$23839$i37 = $187;
       }
      }
     }
    }
   } while(0);
   $189 = ($$3$i39|0)!=(0);
   $190 = $189 ? $$2$i40 : 0;
   $192 = $190;
  }
  $191 = ($192|0)==(0|0);
  $193 = $192;
  $194 = (($193) - ($122))|0;
  $$0$i$i13 = $191 ? -1 : $194;
  $$1$i$i14 = $$0$i$i13;
 } else {
  $$1$i$i14 = -1;
 }
 $195 = ($$0$i$i|0)==(-1);
 $196 = $195 ? $34 : $$0$i$i;
 $197 = ($$1$i$i14|0)!=(-1);
 $198 = $197 ? $$1$i$i14 : $34;
 $199 = $$1$i$i14 & $$0$i$i;
 $200 = ($199|0)==(-1);
 do {
  if ($200) {
   ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
   if (!($30)) {
    ; store8($5,load8($0,4),4); store4($5+8 | 0,load4($0+8 | 0,4),4);
    break;
   }
   $223 = ($32>>>0)>(4294967279);
   if ($223) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $224 = ($32>>>0)<(11);
   if ($224) {
    $239 = $32&255;
    $240 = ((($5)) + 11|0);
    store1($240,$239);
    $241 = ($32|0)==(0);
    if ($241) {
     $$017$i52 = $5;
    } else {
     $$016$i51 = $5;
     label = 95;
    }
   } else {
    $225 = (($32) + 16)|0;
    $226 = $225 & -16;
    $227 = ($226|0)==(0);
    $$$i23 = $227 ? 1 : $226;
    $228 = (_malloc($$$i23)|0);
    $229 = ($228|0)==(0|0);
    L130: do {
     if ($229) {
      while(1) {
       $230 = load4(9296);
       $231 = (($230) + 0)|0;
       store4(9296,$231);
       $232 = ($230|0)==(0);
       if ($232) {
        $$lcssa$i29 = 0;
        break L130;
       }
       $233 = $230;
       FUNCTION_TABLE_v[$233 & 3]();
       $234 = (_malloc($$$i23)|0);
       $235 = ($234|0)==(0|0);
       if (!($235)) {
        $$lcssa$i29 = $234;
        break;
       }
      }
     } else {
      $$lcssa$i29 = $228;
     }
    } while(0);
    store4($5,$$lcssa$i29);
    $236 = $226 | -2147483648;
    $237 = ((($5)) + 8|0);
    store4($237,$236);
    $238 = ((($5)) + 4|0);
    store4($238,$32);
    $$016$i51 = $$lcssa$i29;
    label = 95;
   }
   if ((label|0) == 95) {
    _memcpy(($$016$i51|0),($36|0),($32|0))|0;
    $$017$i52 = $$016$i51;
   }
   $242 = (($$017$i52) + ($32)|0);
   store1($242,0);
  } else {
   $201 = ($198|0)<($196|0);
   $$sroa$speculated = $201 ? $198 : $196;
   ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
   $202 = ($34>>>0)<($$sroa$speculated>>>0);
   $$sroa$speculated$i43 = $202 ? $34 : $$sroa$speculated;
   $203 = ($$sroa$speculated$i43>>>0)>(4294967279);
   if ($203) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $204 = ($$sroa$speculated$i43>>>0)<(11);
   if ($204) {
    $219 = $$sroa$speculated$i43&255;
    $220 = ((($5)) + 11|0);
    store1($220,$219);
    $221 = ($$sroa$speculated$i43|0)==(0);
    if ($221) {
     $$017$i47 = $5;
    } else {
     $$016$i46 = $5;
     label = 83;
    }
   } else {
    $205 = (($$sroa$speculated$i43) + 16)|0;
    $206 = $205 & -16;
    $207 = ($206|0)==(0);
    $$$i14 = $207 ? 1 : $206;
    $208 = (_malloc($$$i14)|0);
    $209 = ($208|0)==(0|0);
    L145: do {
     if ($209) {
      while(1) {
       $210 = load4(9296);
       $211 = (($210) + 0)|0;
       store4(9296,$211);
       $212 = ($210|0)==(0);
       if ($212) {
        $$lcssa$i20 = 0;
        break L145;
       }
       $213 = $210;
       FUNCTION_TABLE_v[$213 & 3]();
       $214 = (_malloc($$$i14)|0);
       $215 = ($214|0)==(0|0);
       if (!($215)) {
        $$lcssa$i20 = $214;
        break;
       }
      }
     } else {
      $$lcssa$i20 = $208;
     }
    } while(0);
    store4($5,$$lcssa$i20);
    $216 = $206 | -2147483648;
    $217 = ((($5)) + 8|0);
    store4($217,$216);
    $218 = ((($5)) + 4|0);
    store4($218,$$sroa$speculated$i43);
    $$016$i46 = $$lcssa$i20;
    label = 83;
   }
   if ((label|0) == 83) {
    _memcpy(($$016$i46|0),($37|0),($$sroa$speculated$i43|0))|0;
    $$017$i47 = $$016$i46;
   }
   $222 = (($$017$i47) + ($$sroa$speculated$i43)|0);
   store1($222,0);
  }
 } while(0);
 $243 = ((($0)) + 96|0);
 $244 = ((($0)) + 84|0);
 $245 = ((($244)) + 11|0);
 $246 = load1($245);
 $247 = ($246<<24>>24)<(0);
 $248 = ((($0)) + 88|0);
 $249 = load4($248);
 $250 = $246&255;
 $251 = $247 ? $249 : $250;
 $252 = ($251|0)==(0);
 if ($252) {
  ; store8($8,i64_const(0,0),4); store4($8+8|0,0,4);
  $334 = ((($5)) + 11|0);
  $335 = load1($334);
  $336 = ($335<<24>>24)<(0);
  if ($336) {
   $337 = load4($5);
   $338 = ((($5)) + 4|0);
   $339 = load4($338);
   $340 = ($339>>>0)>(4294967279);
   if ($340) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $341 = ($339>>>0)<(11);
   if ($341) {
    $356 = $339&255;
    $357 = ((($8)) + 11|0);
    store1($357,$356);
    $358 = ($339|0)==(0);
    if ($358) {
     $$017$i67 = $8;
    } else {
     $$016$i66 = $8;
     label = 136;
    }
   } else {
    $342 = (($339) + 16)|0;
    $343 = $342 & -16;
    $344 = ($343|0)==(0);
    $$$i54 = $344 ? 1 : $343;
    $345 = (_malloc($$$i54)|0);
    $346 = ($345|0)==(0|0);
    L164: do {
     if ($346) {
      while(1) {
       $347 = load4(9296);
       $348 = (($347) + 0)|0;
       store4(9296,$348);
       $349 = ($347|0)==(0);
       if ($349) {
        $$lcssa$i60 = 0;
        break L164;
       }
       $350 = $347;
       FUNCTION_TABLE_v[$350 & 3]();
       $351 = (_malloc($$$i54)|0);
       $352 = ($351|0)==(0|0);
       if (!($352)) {
        $$lcssa$i60 = $351;
        break;
       }
      }
     } else {
      $$lcssa$i60 = $345;
     }
    } while(0);
    store4($8,$$lcssa$i60);
    $353 = $343 | -2147483648;
    $354 = ((($8)) + 8|0);
    store4($354,$353);
    $355 = ((($8)) + 4|0);
    store4($355,$339);
    $$016$i66 = $$lcssa$i60;
    label = 136;
   }
   if ((label|0) == 136) {
    _memcpy(($$016$i66|0),($337|0),($339|0))|0;
    $$017$i67 = $$016$i66;
   }
   $359 = (($$017$i67) + ($339)|0);
   store1($359,0);
  } else {
   ; store8($8,load8($5,4),4); store4($8+8 | 0,load4($5+8 | 0,4),4);
  }
  $360 = load4(9300);
  $361 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($360,2484,$8)|0);
  $$053 = 1;$$056 = 0;$$sink = $361;
 } else {
  ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
  if ($247) {
   $253 = load4($244);
   $254 = ($249>>>0)>(4294967279);
   if ($254) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $255 = ($249>>>0)<(11);
   if ($255) {
    $270 = $249&255;
    $271 = ((($6)) + 11|0);
    store1($271,$270);
    $272 = ($249|0)==(0);
    if ($272) {
     $$017$i57 = $6;
    } else {
     $$016$i56 = $6;
     label = 108;
    }
   } else {
    $256 = (($249) + 16)|0;
    $257 = $256 & -16;
    $258 = ($257|0)==(0);
    $$$i32 = $258 ? 1 : $257;
    $259 = (_malloc($$$i32)|0);
    $260 = ($259|0)==(0|0);
    L183: do {
     if ($260) {
      while(1) {
       $261 = load4(9296);
       $262 = (($261) + 0)|0;
       store4(9296,$262);
       $263 = ($261|0)==(0);
       if ($263) {
        $$lcssa$i38 = 0;
        break L183;
       }
       $264 = $261;
       FUNCTION_TABLE_v[$264 & 3]();
       $265 = (_malloc($$$i32)|0);
       $266 = ($265|0)==(0|0);
       if (!($266)) {
        $$lcssa$i38 = $265;
        break;
       }
      }
     } else {
      $$lcssa$i38 = $259;
     }
    } while(0);
    store4($6,$$lcssa$i38);
    $267 = $257 | -2147483648;
    $268 = ((($6)) + 8|0);
    store4($268,$267);
    $269 = ((($6)) + 4|0);
    store4($269,$249);
    $$016$i56 = $$lcssa$i38;
    label = 108;
   }
   if ((label|0) == 108) {
    _memcpy(($$016$i56|0),($253|0),($249|0))|0;
    $$017$i57 = $$016$i56;
   }
   $273 = (($$017$i57) + ($249)|0);
   store1($273,0);
  } else {
   ; store8($6,load8($244,4),4); store4($6+8 | 0,load4($244+8 | 0,4),4);
  }
  ; store8($7,i64_const(0,0),4); store4($7+8|0,0,4);
  $274 = ((($5)) + 11|0);
  $275 = load1($274);
  $276 = ($275<<24>>24)<(0);
  if ($276) {
   $277 = load4($5);
   $278 = ((($5)) + 4|0);
   $279 = load4($278);
   $280 = ($279>>>0)>(4294967279);
   if ($280) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $281 = ($279>>>0)<(11);
   if ($281) {
    $296 = $279&255;
    $297 = ((($7)) + 11|0);
    store1($297,$296);
    $298 = ($279|0)==(0);
    if ($298) {
     $$017$i62 = $7;
    } else {
     $$016$i61 = $7;
     label = 120;
    }
   } else {
    $282 = (($279) + 16)|0;
    $283 = $282 & -16;
    $284 = ($283|0)==(0);
    $$$i41 = $284 ? 1 : $283;
    $285 = (_malloc($$$i41)|0);
    $286 = ($285|0)==(0|0);
    L201: do {
     if ($286) {
      while(1) {
       $287 = load4(9296);
       $288 = (($287) + 0)|0;
       store4(9296,$288);
       $289 = ($287|0)==(0);
       if ($289) {
        $$lcssa$i47 = 0;
        break L201;
       }
       $290 = $287;
       FUNCTION_TABLE_v[$290 & 3]();
       $291 = (_malloc($$$i41)|0);
       $292 = ($291|0)==(0|0);
       if (!($292)) {
        $$lcssa$i47 = $291;
        break;
       }
      }
     } else {
      $$lcssa$i47 = $285;
     }
    } while(0);
    store4($7,$$lcssa$i47);
    $293 = $283 | -2147483648;
    $294 = ((($7)) + 8|0);
    store4($294,$293);
    $295 = ((($7)) + 4|0);
    store4($295,$279);
    $$016$i61 = $$lcssa$i47;
    label = 120;
   }
   if ((label|0) == 120) {
    _memcpy(($$016$i61|0),($277|0),($279|0))|0;
    $$017$i62 = $$016$i61;
   }
   $299 = (($$017$i62) + ($279)|0);
   store1($299,0);
  } else {
   ; store8($7,load8($5,4),4); store4($7+8 | 0,load4($5+8 | 0,4),4);
  }
  $300 = load4(9300);
  $301 = load1(8736);
  $302 = ($301<<24>>24)==(0);
  if ($302) {
   store1(8736,1);
   $303 = (__emval_get_method_caller(3,(1840|0))|0);
   store4(8772,$303);
   $329 = $303;
  } else {
   $$pre$i50 = load4(8772);
   $329 = $$pre$i50;
  }
  $304 = ((($6)) + 11|0);
  $305 = load1($304);
  $306 = ($305<<24>>24)<(0);
  $307 = ((($6)) + 4|0);
  $308 = load4($307);
  $309 = $305&255;
  $310 = $306 ? $308 : $309;
  $311 = (($310) + 4)|0;
  $312 = (_malloc($311)|0);
  store4($312,$310);
  $313 = ((($312)) + 4|0);
  $314 = load4($6);
  $315 = $306 ? $314 : $6;
  _memcpy(($313|0),($315|0),($310|0))|0;
  store4($1,$312);
  $316 = ((($1)) + 8|0);
  $317 = ((($7)) + 11|0);
  $318 = load1($317);
  $319 = ($318<<24>>24)<(0);
  $320 = ((($7)) + 4|0);
  $321 = load4($320);
  $322 = $318&255;
  $323 = $319 ? $321 : $322;
  $324 = (($323) + 4)|0;
  $325 = (_malloc($324)|0);
  store4($325,$323);
  $326 = ((($325)) + 4|0);
  $327 = load4($7);
  $328 = $319 ? $327 : $7;
  _memcpy(($326|0),($328|0),($323|0))|0;
  store4($316,$325);
  $330 = (+__emval_call_method(($329|0),($300|0),(2498|0),($2|0),($1|0)));
  $331 = load4($2);
  __emval_run_destructors(($331|0));
  $332 = (~~(($330))>>>0);
  $333 = $332;
  $$053 = 0;$$056 = 1;$$sink = $333;
 }
 $362 = load4($243);
 __emval_decref(($362|0));
 $363 = $$sink;
 store4($243,$363);
 __emval_decref((0|0));
 if ($$053) {
  $364 = ((($8)) + 11|0);
  $365 = load1($364);
  $366 = ($365<<24>>24)<(0);
  if ($366) {
   $367 = load4($8);
   _free($367);
  }
 }
 if ($$056) {
  $368 = ((($7)) + 11|0);
  $369 = load1($368);
  $370 = ($369<<24>>24)<(0);
  if ($370) {
   $371 = load4($7);
   _free($371);
  }
  $372 = ((($6)) + 11|0);
  $373 = load1($372);
  $374 = ($373<<24>>24)<(0);
  if ($374) {
   $375 = load4($6);
   _free($375);
  }
 }
 $376 = ($196|0)<($198|0);
 if ($376) {
  $377 = (($196) + 1)|0;
  ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
  $378 = load1($28);
  $379 = ($378<<24>>24)<(0);
  $380 = load4($31);
  $381 = $378&255;
  $382 = $379 ? $380 : $381;
  $383 = ($382>>>0)<($377>>>0);
  if ($383) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
   // unreachable;
  }
  $384 = load4($0);
  $385 = $379 ? $384 : $0;
  $386 = (($385) + ($377)|0);
  $387 = (($382) - ($377))|0;
  $388 = ($387>>>0)<($198>>>0);
  $$sroa$speculated$i73 = $388 ? $387 : $198;
  $389 = ($$sroa$speculated$i73>>>0)>(4294967279);
  if ($389) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $390 = ($$sroa$speculated$i73>>>0)<(11);
  if ($390) {
   $405 = $$sroa$speculated$i73&255;
   $406 = ((($2)) + 11|0);
   store1($406,$405);
   $407 = ($$sroa$speculated$i73|0)==(0);
   if ($407) {
    $$017$i77 = $2;$$pre$phi187Z2D = $406;
   } else {
    $$016$i76 = $2;$$pre186$pre$phiZZ2D = $406;
    label = 158;
   }
  } else {
   $391 = (($$sroa$speculated$i73) + 16)|0;
   $392 = $391 & -16;
   $393 = ($392|0)==(0);
   $$$i63 = $393 ? 1 : $392;
   $394 = (_malloc($$$i63)|0);
   $395 = ($394|0)==(0|0);
   L238: do {
    if ($395) {
     while(1) {
      $396 = load4(9296);
      $397 = (($396) + 0)|0;
      store4(9296,$397);
      $398 = ($396|0)==(0);
      if ($398) {
       $$lcssa$i69 = 0;
       break L238;
      }
      $399 = $396;
      FUNCTION_TABLE_v[$399 & 3]();
      $400 = (_malloc($$$i63)|0);
      $401 = ($400|0)==(0|0);
      if (!($401)) {
       $$lcssa$i69 = $400;
       break;
      }
     }
    } else {
     $$lcssa$i69 = $394;
    }
   } while(0);
   store4($2,$$lcssa$i69);
   $402 = $392 | -2147483648;
   $403 = ((($2)) + 8|0);
   store4($403,$402);
   $404 = ((($2)) + 4|0);
   store4($404,$$sroa$speculated$i73);
   $$pre195 = ((($2)) + 11|0);
   $$016$i76 = $$lcssa$i69;$$pre186$pre$phiZZ2D = $$pre195;
   label = 158;
  }
  if ((label|0) == 158) {
   _memcpy(($$016$i76|0),($386|0),($$sroa$speculated$i73|0))|0;
   $$017$i77 = $$016$i76;$$pre$phi187Z2D = $$pre186$pre$phiZZ2D;
  }
  $408 = (($$017$i77) + ($$sroa$speculated$i73)|0);
  store1($408,0);
  $409 = load1($$pre$phi187Z2D);
  $410 = ($409<<24>>24)<(0);
  $411 = ((($2)) + 4|0);
  $412 = load4($411);
  $413 = $409&255;
  $414 = $410 ? $412 : $413;
  $415 = (($414) + 4)|0;
  $416 = (_malloc($415)|0);
  store4($416,$414);
  $417 = ((($416)) + 4|0);
  $418 = load4($2);
  $419 = $410 ? $418 : $2;
  _memcpy(($417|0),($419|0),($414|0))|0;
  store4($1,$416);
  $420 = (__emval_take_value((1080|0),($1|0))|0);
  $421 = load4($243);
  $422 = (__emval_new_cstring((8619|0))|0);
  __emval_set_property(($421|0),($422|0),($420|0));
  __emval_decref(($422|0));
  __emval_decref(($420|0));
  $423 = load1($$pre$phi187Z2D);
  $424 = ($423<<24>>24)<(0);
  if ($424) {
   _free($418);
  }
 }
 if ($197) {
  $425 = (($198) + 1)|0;
  ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
  $426 = load1($28);
  $427 = ($426<<24>>24)<(0);
  $428 = load4($31);
  $429 = $426&255;
  $430 = $427 ? $428 : $429;
  $431 = ($430>>>0)<($425>>>0);
  if ($431) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
   // unreachable;
  }
  $432 = load4($0);
  $433 = $427 ? $432 : $0;
  $434 = (($433) + ($425)|0);
  $435 = (($430) - ($425))|0;
  $436 = ($435>>>0)>(4294967279);
  if ($436) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $437 = ($435>>>0)<(11);
  if ($437) {
   $452 = $435&255;
   $453 = ((($2)) + 11|0);
   store1($453,$452);
   $454 = ($435|0)==(0);
   if ($454) {
    $$017$i91 = $2;$$pre$phi191Z2D = $453;
   } else {
    $$016$i90 = $2;$$pre190$pre$phiZZ2D = $453;
    label = 173;
   }
  } else {
   $438 = (($435) + 16)|0;
   $439 = $438 & -16;
   $440 = ($439|0)==(0);
   $$$i72 = $440 ? 1 : $439;
   $441 = (_malloc($$$i72)|0);
   $442 = ($441|0)==(0|0);
   L261: do {
    if ($442) {
     while(1) {
      $443 = load4(9296);
      $444 = (($443) + 0)|0;
      store4(9296,$444);
      $445 = ($443|0)==(0);
      if ($445) {
       $$lcssa$i78 = 0;
       break L261;
      }
      $446 = $443;
      FUNCTION_TABLE_v[$446 & 3]();
      $447 = (_malloc($$$i72)|0);
      $448 = ($447|0)==(0|0);
      if (!($448)) {
       $$lcssa$i78 = $447;
       break;
      }
     }
    } else {
     $$lcssa$i78 = $441;
    }
   } while(0);
   store4($2,$$lcssa$i78);
   $449 = $439 | -2147483648;
   $450 = ((($2)) + 8|0);
   store4($450,$449);
   $451 = ((($2)) + 4|0);
   store4($451,$435);
   $$pre193 = ((($2)) + 11|0);
   $$016$i90 = $$lcssa$i78;$$pre190$pre$phiZZ2D = $$pre193;
   label = 173;
  }
  if ((label|0) == 173) {
   _memcpy(($$016$i90|0),($434|0),($435|0))|0;
   $$017$i91 = $$016$i90;$$pre$phi191Z2D = $$pre190$pre$phiZZ2D;
  }
  $455 = (($$017$i91) + ($435)|0);
  store1($455,0);
  $456 = load1($$pre$phi191Z2D);
  $457 = ($456<<24>>24)<(0);
  $458 = load4($2);
  $459 = ((($2)) + 4|0);
  $460 = load4($459);
  $461 = $456&255;
  $462 = $457 ? $458 : $2;
  $463 = $457 ? $460 : $461;
  $464 = (($462) + ($463)|0);
  $465 = ($463|0)==(0);
  if ($465) {
   $472 = $456;$475 = $460;
  } else {
   $467 = $462;
   while(1) {
    $466 = load1($467);
    $468 = ($466<<24>>24)==(46);
    if ($468) {
     store1($467,32);
    }
    $469 = ((($467)) + 1|0);
    $470 = ($469|0)==($464|0);
    if ($470) {
     break;
    } else {
     $467 = $469;
    }
   }
   $$pre = load1($$pre$phi191Z2D);
   $$pre182 = load4($459);
   $472 = $$pre;$475 = $$pre182;
  }
  $471 = ($472<<24>>24)<(0);
  $473 = $472&255;
  $474 = $471 ? $475 : $473;
  $476 = (($474) + 4)|0;
  $477 = (_malloc($476)|0);
  store4($477,$474);
  $478 = ((($477)) + 4|0);
  $479 = load4($2);
  $480 = $471 ? $479 : $2;
  _memcpy(($478|0),($480|0),($474|0))|0;
  store4($1,$477);
  $481 = (__emval_take_value((1080|0),($1|0))|0);
  $482 = load4($243);
  $483 = (__emval_new_cstring((2836|0))|0);
  __emval_set_property(($482|0),($483|0),($481|0));
  __emval_decref(($483|0));
  __emval_decref(($481|0));
  $484 = load1($$pre$phi191Z2D);
  $485 = ($484<<24>>24)<(0);
  if ($485) {
   $486 = load4($2);
   _free($486);
  }
 }
 $487 = ((($0)) + 100|0);
 $488 = load4($487);
 $489 = ((($0)) + 104|0);
 $490 = load4($489);
 $491 = ($488|0)==($490|0);
 if ($491) {
  $507 = ((($0)) + 24|0);
  $508 = ((($507)) + 11|0);
  $509 = load1($508);
  $510 = ($509<<24>>24)<(0);
  $511 = ((($0)) + 28|0);
  $512 = load4($511);
  $513 = $509&255;
  $514 = $510 ? $512 : $513;
  $515 = ($514|0)==(0);
  if (!($515)) {
   $516 = load4($243);
   __emval_incref(($516|0));
   ; store8($9,i64_const(0,0),4); store4($9+8|0,0,4);
   $517 = load1($508);
   $518 = ($517<<24>>24)<(0);
   if ($518) {
    $519 = load4($507);
    $520 = load4($511);
    $521 = ($520>>>0)>(4294967279);
    if ($521) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $522 = ($520>>>0)<(11);
    if ($522) {
     $537 = $520&255;
     $538 = ((($9)) + 11|0);
     store1($538,$537);
     $539 = ($520|0)==(0);
     if ($539) {
      $$017$i99 = $9;
     } else {
      $$016$i98 = $9;
      label = 199;
     }
    } else {
     $523 = (($520) + 16)|0;
     $524 = $523 & -16;
     $525 = ($524|0)==(0);
     $$$i81 = $525 ? 1 : $524;
     $526 = (_malloc($$$i81)|0);
     $527 = ($526|0)==(0|0);
     L292: do {
      if ($527) {
       while(1) {
        $528 = load4(9296);
        $529 = (($528) + 0)|0;
        store4(9296,$529);
        $530 = ($528|0)==(0);
        if ($530) {
         $$lcssa$i87 = 0;
         break L292;
        }
        $531 = $528;
        FUNCTION_TABLE_v[$531 & 3]();
        $532 = (_malloc($$$i81)|0);
        $533 = ($532|0)==(0|0);
        if (!($533)) {
         $$lcssa$i87 = $532;
         break;
        }
       }
      } else {
       $$lcssa$i87 = $526;
      }
     } while(0);
     store4($9,$$lcssa$i87);
     $534 = $524 | -2147483648;
     $535 = ((($9)) + 8|0);
     store4($535,$534);
     $536 = ((($9)) + 4|0);
     store4($536,$520);
     $$016$i98 = $$lcssa$i87;
     label = 199;
    }
    if ((label|0) == 199) {
     _memcpy(($$016$i98|0),($519|0),($520|0))|0;
     $$017$i99 = $$016$i98;
    }
    $540 = (($$017$i99) + ($520)|0);
    store1($540,0);
   } else {
    ; store8($9,load8($507,4),4); store4($9+8 | 0,load4($507+8 | 0,4),4);
   }
   $541 = load4(9300);
   $542 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($541,2514,$9)|0);
   $543 = $542;
   $544 = load1(8752);
   $545 = ($544<<24>>24)==(0);
   if ($545) {
    store1(8752,1);
    $546 = (__emval_get_method_caller(2,(1864|0))|0);
    store4(8780,$546);
    $547 = $546;
   } else {
    $$pre184 = load4(8780);
    $547 = $$pre184;
   }
   __emval_incref(($542|0));
   store4($1,$543);
   __emval_call_void_method(($547|0),($516|0),(2568|0),($1|0));
   __emval_decref(($542|0));
   $548 = ((($9)) + 11|0);
   $549 = load1($548);
   $550 = ($549<<24>>24)<(0);
   if ($550) {
    $551 = load4($9);
    _free($551);
   }
   __emval_decref(($516|0));
  }
 } else {
  $$0212 = 0;
  while(1) {
   $492 = load4($243);
   __emval_incref(($492|0));
   $493 = load4($487);
   $494 = (($493) + (($$0212*112)|0)|0);
   $495 = (__Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($494)|0);
   $496 = $495;
   $497 = load1(8752);
   $498 = ($497<<24>>24)==(0);
   if ($498) {
    store1(8752,1);
    $499 = (__emval_get_method_caller(2,(1864|0))|0);
    store4(8780,$499);
    $500 = $499;
   } else {
    $$pre183 = load4(8780);
    $500 = $$pre183;
   }
   __emval_incref(($495|0));
   store4($1,$496);
   __emval_call_void_method(($500|0),($492|0),(2568|0),($1|0));
   __emval_decref(($495|0));
   __emval_decref(($492|0));
   $501 = (($$0212) + 1)|0;
   $502 = load4($489);
   $503 = load4($487);
   $504 = (($502) - ($503))|0;
   $505 = (($504|0) / 112)&-1;
   $506 = ($501|0)==($505|0);
   if ($506) {
    break;
   } else {
    $$0212 = $501;
   }
  }
 }
 $552 = ((($5)) + 11|0);
 $553 = load1($552);
 $554 = ($553<<24>>24)<(0);
 if ($554) {
  $555 = load4($5);
  _free($555);
 }
 $556 = ((($0)) + 96|0);
 $557 = load4($556);
 __emval_incref(($557|0));
 STACKTOP = sp;return ($557|0);
}
function __Z9addVnodesN10emscripten3valES0_RNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjjS7_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0932 = 0, $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $5 = sp;
 $6 = ($3>>>0)>($4>>>0);
 if ($6) {
  STACKTOP = sp;return;
 }
 $7 = ((($5)) + 8|0);
 $$0932 = $3;
 while(1) {
  $8 = load4($0);
  __emval_incref(($8|0));
  $9 = load4($2);
  $10 = (($9) + (($$0932*112)|0)|0);
  $11 = (__Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($10)|0);
  $12 = $11;
  $13 = load4($1);
  $14 = $13;
  __emval_incref(($13|0));
  $15 = load1(8744);
  $16 = ($15<<24>>24)==(0);
  if ($16) {
   store1(8744,1);
   $17 = (__emval_get_method_caller(3,(1852|0))|0);
   store4(8776,$17);
   $18 = $17;
  } else {
   $$pre$i = load4(8776);
   $18 = $$pre$i;
  }
  __emval_incref(($11|0));
  store4($5,$12);
  __emval_incref(($13|0));
  store4($7,$14);
  __emval_call_void_method(($18|0),($8|0),(2543|0),($5|0));
  __emval_decref(($13|0));
  __emval_decref(($11|0));
  __emval_decref(($8|0));
  $19 = (($$0932) + 1)|0;
  $20 = ($19>>>0)>($4>>>0);
  if ($20) {
   break;
  } else {
   $$0932 = $19;
  }
 }
 STACKTOP = sp;return;
}
function __Z12removeVnodesN10emscripten3valERNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjj($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0726 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $4 = sp;
 $5 = ($2>>>0)>($3>>>0);
 if ($5) {
  STACKTOP = sp;return;
 }
 $$0726 = $2;
 while(1) {
  $6 = load4($0);
  __emval_incref(($6|0));
  $7 = load4($1);
  $8 = (((($7) + (($$0726*112)|0)|0)) + 96|0);
  $9 = load4($8);
  $10 = $9;
  __emval_incref(($9|0));
  $11 = load1(8752);
  $12 = ($11<<24>>24)==(0);
  if ($12) {
   store1(8752,1);
   $13 = (__emval_get_method_caller(2,(1864|0))|0);
   store4(8780,$13);
   $14 = $13;
  } else {
   $$pre = load4(8780);
   $14 = $$pre;
  }
  __emval_incref(($9|0));
  store4($4,$10);
  __emval_call_void_method(($14|0),($6|0),(2556|0),($4|0));
  __emval_decref(($9|0));
  __emval_decref(($6|0));
  $15 = (($$0726) + 1)|0;
  $16 = ($15>>>0)>($3>>>0);
  if ($16) {
   break;
  } else {
   $$0726 = $15;
  }
 }
 STACKTOP = sp;return;
}
function __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$$i5$i$i = 0, $$$$i5$i20$i = 0, $$$$i5$i44$i = 0, $$$$i5$i72$i = 0, $$$i = 0, $$$i$i = 0, $$$i2 = 0, $$$i5$i$i = 0, $$$i5$i20$i = 0, $$$i5$i44$i = 0, $$$i5$i72$i = 0, $$0$i$i = 0, $$0$in$be$i$i = 0, $$013$i$i = 0, $$01318$i = 0, $$01318$i$i = 0, $$01318$i$i$i = 0, $$01318$i$i3$i = 0, $$01318$i$i30$i = 0, $$01318$i$i58$i = 0;
 var $$01318$i$i6$i = 0, $$01318$i2$i$i = 0, $$01318$i2$i16$i = 0, $$01318$i2$i40$i = 0, $$01318$i2$i68$i = 0, $$01318$i2$i7$i = 0, $$01417$i = 0, $$01417$i$i = 0, $$01417$i$i$i = 0, $$01417$i$i31$i = 0, $$01417$i$i4$i = 0, $$01417$i$i59$i = 0, $$01417$i$i7$i = 0, $$01417$i3$i$i = 0, $$01417$i3$i17$i = 0, $$01417$i3$i41$i = 0, $$01417$i3$i69$i = 0, $$01417$i3$i8$i = 0, $$016$i = 0, $$016$i8 = 0;
 var $$017$i = 0, $$017$i9 = 0, $$017$off041$i$i = 0, $$017$off042$i$i = 0, $$017$off047$i$i = 0, $$018$off039$i$i = 0, $$018$off046$i$i = 0, $$019$i = 0, $$019$i$i = 0, $$019$i$i$i = 0, $$019$i$i2$i = 0, $$019$i$i29$i = 0, $$019$i$i5$i = 0, $$019$i$i57$i = 0, $$019$i1$i$i = 0, $$019$i1$i15$i = 0, $$019$i1$i39$i = 0, $$019$i1$i6$i = 0, $$019$i1$i67$i = 0, $$01937$i$i = 0;
 var $$01938$i$i = 0, $$01945$i$i = 0, $$02035$i$i = 0, $$02036$i$i = 0, $$02044$i$i = 0, $$021$i$i = 0, $$022$i$i = 0, $$086$i = 0, $$086$ph$i = 0, $$086$ph194$i = 0, $$087$i = 0, $$087$ph$i = 0, $$087$ph193$i = 0, $$088$ph$i = 0, $$088$ph192$i = 0, $$089$ph$i = 0, $$lcssa$i = 0, $$lcssa$i$i = 0, $$lcssa$i8 = 0, $$phitmp$i$i$i = 0;
 var $$pr$i = 0, $$pre$i$i = 0, $$pre$i107$i = 0, $$pre$i77$i = 0, $$pre$i86$i = 0, $$pre$i96$i = 0, $$pre46 = 0, $$sroa$7$0$$sroa_idx$i = 0, $$sroa$7128$0$$sroa_raw_idx$i = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i$i = 0, $$sroa$speculated$i$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i13$i$i = 0, $$sroa$speculated$i$i2$i = 0, $$sroa$speculated$i$i26$i = 0, $$sroa$speculated$i$i54$i = 0, $$sroa$speculated$i2$i$i = 0, $$sroa$speculated$i2$i12$i = 0, $$sroa$speculated$i2$i36$i = 0;
 var $$sroa$speculated$i2$i64$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0;
 var $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0;
 var $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0;
 var $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0;
 var $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0;
 var $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0;
 var $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0;
 var $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0;
 var $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0;
 var $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0;
 var $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0;
 var $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0;
 var $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0;
 var $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0;
 var $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0;
 var $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0;
 var $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0;
 var $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0;
 var $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0;
 var $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0;
 var $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0;
 var $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0;
 var $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0;
 var $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0;
 var $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0;
 var $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0;
 var $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0;
 var $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0;
 var $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0;
 var $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond$i = 0, $or$cond$i$i = 0, $or$cond$i33$i = 0, $or$cond$i61$i = 0, $or$cond$i9$i = 0, $or$cond187$i = 0, $phitmp$i$i$i = 0, $phitmp$i22$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1584|0;
 $2 = sp;
 $3 = sp + 1576|0;
 $4 = sp + 1464|0;
 $5 = sp + 1352|0;
 $6 = sp + 1240|0;
 $7 = sp + 1128|0;
 $8 = sp + 1112|0;
 $9 = sp + 1000|0;
 $10 = sp + 888|0;
 $11 = sp + 776|0;
 $12 = sp + 664|0;
 $13 = sp + 536|0;
 $14 = sp + 424|0;
 $15 = sp + 304|0;
 $16 = sp + 184|0;
 $17 = sp + 64|0;
 $18 = sp + 40|0;
 $19 = sp + 24|0;
 $20 = sp + 20|0;
 $21 = sp + 16|0;
 $22 = sp + 648|0;
 $23 = sp + 416|0;
 $24 = sp + 296|0;
 $25 = sp + 176|0;
 $26 = sp + 52|0;
 $27 = sp + 28|0;
 $28 = ((($1)) + 24|0);
 $29 = ((($28)) + 11|0);
 $30 = load1($29);
 $31 = ($30<<24>>24)<(0);
 $32 = ((($1)) + 28|0);
 $33 = load4($32);
 $34 = $30&255;
 $35 = $31 ? $33 : $34;
 $36 = ($35|0)==(0);
 if (!($36)) {
  $655 = ((($0)) + 24|0);
  $656 = ((($655)) + 11|0);
  $657 = load1($656);
  $658 = ($657<<24>>24)<(0);
  $659 = ((($0)) + 28|0);
  $660 = load4($659);
  $661 = $657&255;
  $662 = $658 ? $660 : $661;
  $663 = ($662>>>0)<($35>>>0);
  $$sroa$speculated$i = $663 ? $662 : $35;
  $664 = ($$sroa$speculated$i|0)==(0);
  L3: do {
   if ($664) {
    label = 176;
   } else {
    $665 = load4($28);
    $666 = $31 ? $665 : $28;
    $667 = load4($655);
    $668 = $658 ? $667 : $655;
    $$01318$i = $666;$$01417$i = $$sroa$speculated$i;$$019$i = $668;
    while(1) {
     $669 = load1($$01318$i);
     $670 = load1($$019$i);
     $671 = ($669<<24>>24)==($670<<24>>24);
     if (!($671)) {
      break L3;
     }
     $672 = (($$01417$i) + -1)|0;
     $673 = ((($$01318$i)) + 1|0);
     $674 = ((($$019$i)) + 1|0);
     $675 = ($672|0)==(0);
     if ($675) {
      label = 176;
      break;
     } else {
      $$01318$i = $673;$$01417$i = $672;$$019$i = $674;
     }
    }
   }
  } while(0);
  if ((label|0) == 176) {
   $676 = ($35>>>0)>=($662>>>0);
   $677 = $663 ^ 1;
   $or$cond = $676 & $677;
   if ($or$cond) {
    STACKTOP = sp;return;
   }
  }
  $678 = ((($1)) + 96|0);
  $679 = load4($678);
  __emval_incref(($679|0));
  ; store8($27,i64_const(0,0),4); store4($27+8|0,0,4);
  $680 = load1($29);
  $681 = ($680<<24>>24)<(0);
  if ($681) {
   $682 = load4($28);
   $683 = load4($32);
   $684 = ($683>>>0)>(4294967279);
   if ($684) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $685 = ($683>>>0)<(11);
   if ($685) {
    $700 = $683&255;
    $701 = ((($27)) + 11|0);
    store1($701,$700);
    $702 = ($683|0)==(0);
    if ($702) {
     $$017$i9 = $27;
    } else {
     $$016$i8 = $27;
     label = 187;
    }
   } else {
    $686 = (($683) + 16)|0;
    $687 = $686 & -16;
    $688 = ($687|0)==(0);
    $$$i = $688 ? 1 : $687;
    $689 = (_malloc($$$i)|0);
    $690 = ($689|0)==(0|0);
    L20: do {
     if ($690) {
      while(1) {
       $691 = load4(9296);
       $692 = (($691) + 0)|0;
       store4(9296,$692);
       $693 = ($691|0)==(0);
       if ($693) {
        $$lcssa$i = 0;
        break L20;
       }
       $694 = $691;
       FUNCTION_TABLE_v[$694 & 3]();
       $695 = (_malloc($$$i)|0);
       $696 = ($695|0)==(0|0);
       if (!($696)) {
        $$lcssa$i = $695;
        break;
       }
      }
     } else {
      $$lcssa$i = $689;
     }
    } while(0);
    store4($27,$$lcssa$i);
    $697 = $687 | -2147483648;
    $698 = ((($27)) + 8|0);
    store4($698,$697);
    $699 = ((($27)) + 4|0);
    store4($699,$683);
    $$016$i8 = $$lcssa$i;
    label = 187;
   }
   if ((label|0) == 187) {
    _memcpy(($$016$i8|0),($682|0),($683|0))|0;
    $$017$i9 = $$016$i8;
   }
   $703 = (($$017$i9) + ($683)|0);
   store1($703,0);
  } else {
   ; store8($27,load8($28,4),4); store4($27+8 | 0,load4($28+8 | 0,4),4);
  }
  __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($679,$27);
  $704 = ((($27)) + 11|0);
  $705 = load1($704);
  $706 = ($705<<24>>24)<(0);
  if ($706) {
   $707 = load4($27);
   _free($707);
  }
  __emval_decref(($679|0));
  STACKTOP = sp;return;
 }
 $37 = ((($1)) + 100|0);
 $38 = load4($37);
 $39 = ((($1)) + 104|0);
 $40 = load4($39);
 $41 = ($38|0)==($40|0);
 $42 = ((($0)) + 100|0);
 $43 = load4($42);
 $44 = ((($0)) + 104|0);
 $45 = load4($44);
 $46 = ($43|0)==($45|0);
 if ($41) {
  if (!($46)) {
   $609 = ((($1)) + 96|0);
   $610 = load4($609);
   store4($25,$610);
   __emval_incref(($610|0));
   $611 = load4($44);
   $612 = load4($42);
   $613 = (($611) - ($612))|0;
   $614 = (($613|0) / 112)&-1;
   $615 = (($614) + -1)|0;
   __Z12removeVnodesN10emscripten3valERNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjj($25,$42,0,$615);
   __emval_decref(($610|0));
   STACKTOP = sp;return;
  }
  $616 = ((($0)) + 24|0);
  $617 = ((($616)) + 11|0);
  $618 = load1($617);
  $619 = ($618<<24>>24)<(0);
  $620 = ((($0)) + 28|0);
  $621 = load4($620);
  $622 = $618&255;
  $623 = $619 ? $621 : $622;
  $624 = ($623|0)==(0);
  if ($624) {
   STACKTOP = sp;return;
  }
  $625 = ((($1)) + 96|0);
  $626 = load4($625);
  __emval_incref(($626|0));
  ; store8($26,i64_const(0,0),4); store4($26+8|0,0,4);
  $627 = load1($617);
  $628 = ($627<<24>>24)<(0);
  if ($628) {
   $629 = load4($616);
   $630 = load4($620);
   $631 = ($630>>>0)>(4294967279);
   if ($631) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $632 = ($630>>>0)<(11);
   if ($632) {
    $647 = $630&255;
    $648 = ((($26)) + 11|0);
    store1($648,$647);
    $649 = ($630|0)==(0);
    if ($649) {
     $$017$i = $26;
    } else {
     $$016$i = $26;
     label = 167;
    }
   } else {
    $633 = (($630) + 16)|0;
    $634 = $633 & -16;
    $635 = ($634|0)==(0);
    $$$i2 = $635 ? 1 : $634;
    $636 = (_malloc($$$i2)|0);
    $637 = ($636|0)==(0|0);
    L52: do {
     if ($637) {
      while(1) {
       $638 = load4(9296);
       $639 = (($638) + 0)|0;
       store4(9296,$639);
       $640 = ($638|0)==(0);
       if ($640) {
        $$lcssa$i8 = 0;
        break L52;
       }
       $641 = $638;
       FUNCTION_TABLE_v[$641 & 3]();
       $642 = (_malloc($$$i2)|0);
       $643 = ($642|0)==(0|0);
       if (!($643)) {
        $$lcssa$i8 = $642;
        break;
       }
      }
     } else {
      $$lcssa$i8 = $636;
     }
    } while(0);
    store4($26,$$lcssa$i8);
    $644 = $634 | -2147483648;
    $645 = ((($26)) + 8|0);
    store4($645,$644);
    $646 = ((($26)) + 4|0);
    store4($646,$630);
    $$016$i = $$lcssa$i8;
    label = 167;
   }
   if ((label|0) == 167) {
    _memcpy(($$016$i|0),($629|0),($630|0))|0;
    $$017$i = $$016$i;
   }
   $650 = (($$017$i) + ($630)|0);
   store1($650,0);
  } else {
   ; store8($26,load8($616,4),4); store4($26+8 | 0,load4($616+8 | 0,4),4);
  }
  __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($626,$26);
  $651 = ((($26)) + 11|0);
  $652 = load1($651);
  $653 = ($652<<24>>24)<(0);
  if ($653) {
   $654 = load4($26);
   _free($654);
  }
  __emval_decref(($626|0));
  STACKTOP = sp;return;
 }
 if ($46) {
  $593 = ((($0)) + 24|0);
  $594 = ((($593)) + 11|0);
  $595 = load1($594);
  $596 = ($595<<24>>24)<(0);
  $597 = ((($0)) + 28|0);
  $598 = load4($597);
  $599 = $595&255;
  $600 = $596 ? $598 : $599;
  $601 = ($600|0)==(0);
  $$pre46 = ((($1)) + 96|0);
  if (!($601)) {
   $602 = load4($$pre46);
   __emval_incref(($602|0));
   ; store8($22,i64_const(0,0),4); store4($22+8|0,0,4);
   __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($602,$22);
   __emval_decref(($602|0));
  }
  $603 = load4($$pre46);
  store4($23,$603);
  __emval_incref(($603|0));
  store4($24,(2));
  $604 = load4($39);
  $605 = load4($37);
  $606 = (($604) - ($605))|0;
  $607 = (($606|0) / 112)&-1;
  $608 = (($607) + -1)|0;
  __Z9addVnodesN10emscripten3valES0_RNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjjS7_($23,$24,$37,0,$608);
  __emval_decref(((2)|0));
  __emval_decref(($603|0));
  STACKTOP = sp;return;
 }
 $47 = ((($1)) + 96|0);
 $48 = load4($47);
 __emval_incref(($48|0));
 $49 = load4($44);
 $50 = load4($42);
 $51 = (($49) - ($50))|0;
 $52 = (($51|0) / 112)&-1;
 $53 = (($52) + -1)|0;
 $54 = load4($39);
 $55 = load4($37);
 $56 = (($54) - ($55))|0;
 $57 = (($56|0) / 112)&-1;
 $58 = (($57) + -1)|0;
 $59 = $50;
 __ZN5VNodeC2ERKS_($4,$59);
 $60 = load4($42);
 $61 = (($60) + (($53*112)|0)|0);
 __ZN5VNodeC2ERKS_($5,$61);
 $62 = load4($37);
 __ZN5VNodeC2ERKS_($6,$62);
 $63 = load4($37);
 $64 = (($63) + (($58*112)|0)|0);
 __ZN5VNodeC2ERKS_($7,$64);
 $65 = ((($8)) + 4|0);
 store4($65,0);
 $66 = ((($8)) + 8|0);
 store4($66,0);
 $67 = ((($8)) + 4|0);
 store4($8,$67);
 $68 = ((($9)) + 36|0);
 $69 = ((($9)) + 40|0);
 store4($69,0);
 $70 = ((($9)) + 44|0);
 store4($70,0);
 $71 = ((($9)) + 40|0);
 ; store8($9,i64_const(0,0),4); store8($9+8|0,i64_const(0,0),4); store8($9+16|0,i64_const(0,0),4); store8($9+24|0,i64_const(0,0),4); store4($9+32|0,0,4);
 store4($68,$71);
 $72 = ((($9)) + 48|0);
 $73 = ((($9)) + 52|0);
 store4($73,0);
 $74 = ((($9)) + 56|0);
 store4($74,0);
 $75 = ((($9)) + 52|0);
 store4($72,$75);
 $76 = ((($9)) + 60|0);
 $77 = ((($9)) + 64|0);
 store4($77,0);
 $78 = ((($9)) + 68|0);
 store4($78,0);
 $79 = ((($9)) + 64|0);
 store4($76,$79);
 $80 = ((($9)) + 72|0);
 ; store8($80,i64_const(0,0),4); store8($80+8|0,i64_const(0,0),4); store8($80+16|0,i64_const(0,0),4);
 $81 = ((($9)) + 96|0);
 store4($81,(1));
 $82 = ((($9)) + 100|0);
 store4($82,0);
 $83 = ((($9)) + 104|0);
 store4($83,0);
 $84 = ((($9)) + 108|0);
 store4($84,0);
 $85 = ((($5)) + 96|0);
 $86 = ((($4)) + 96|0);
 $87 = ((($18)) + 4|0);
 $88 = ((($18)) + 8|0);
 $89 = ((($18)) + 4|0);
 $90 = ((($6)) + 12|0);
 $91 = ((($9)) + 11|0);
 $92 = ((($9)) + 4|0);
 $93 = ((($6)) + 11|0);
 $94 = ((($6)) + 4|0);
 $95 = ((($10)) + 12|0);
 $96 = ((($11)) + 12|0);
 $97 = ((($95)) + 11|0);
 $98 = ((($10)) + 16|0);
 $99 = ((($96)) + 11|0);
 $100 = ((($11)) + 16|0);
 $101 = ((($10)) + 11|0);
 $102 = ((($10)) + 4|0);
 $103 = ((($11)) + 11|0);
 $104 = ((($11)) + 4|0);
 $105 = ((($12)) + 12|0);
 $106 = ((($13)) + 12|0);
 $107 = ((($105)) + 11|0);
 $108 = ((($12)) + 16|0);
 $109 = ((($106)) + 11|0);
 $110 = ((($13)) + 16|0);
 $111 = ((($12)) + 11|0);
 $112 = ((($12)) + 4|0);
 $113 = ((($13)) + 11|0);
 $114 = ((($13)) + 4|0);
 $115 = ((($14)) + 12|0);
 $116 = ((($15)) + 12|0);
 $117 = ((($115)) + 11|0);
 $118 = ((($14)) + 16|0);
 $119 = ((($116)) + 11|0);
 $120 = ((($15)) + 16|0);
 $121 = ((($14)) + 11|0);
 $122 = ((($14)) + 4|0);
 $123 = ((($15)) + 11|0);
 $124 = ((($15)) + 4|0);
 $125 = ((($16)) + 12|0);
 $126 = ((($17)) + 12|0);
 $127 = ((($125)) + 11|0);
 $128 = ((($16)) + 16|0);
 $129 = ((($126)) + 11|0);
 $130 = ((($17)) + 16|0);
 $131 = ((($16)) + 11|0);
 $132 = ((($16)) + 4|0);
 $133 = ((($17)) + 11|0);
 $134 = ((($17)) + 4|0);
 $135 = ((($2)) + 8|0);
 $136 = ((($2)) + 8|0);
 $137 = ((($2)) + 8|0);
 $138 = ((($2)) + 8|0);
 $139 = ((($2)) + 8|0);
 $140 = ((($90)) + 11|0);
 $141 = ((($6)) + 16|0);
 $$086$ph$i = $58;$$087$ph$i = $53;$$088$ph$i = 0;$$089$ph$i = 0;
 L74: while(1) {
  $$086$ph194$i = $$086$ph$i;$$087$ph193$i = $$087$ph$i;$$088$ph192$i = $$088$ph$i;
  L76: while(1) {
   $$086$i = $$086$ph194$i;$$087$i = $$087$ph193$i;
   L78: while(1) {
    $142 = ($$089$ph$i>>>0)>($$087$i>>>0);
    $143 = ($$088$ph192$i>>>0)>($$086$i>>>0);
    $or$cond$i = $142 | $143;
    if ($or$cond$i) {
     break L74;
    }
    __ZN5VNodeC2ERKS_($10,$4);
    __ZN5VNodeC2ERKS_($11,$6);
    $144 = load1($97);
    $145 = ($144<<24>>24)<(0);
    $146 = load4($98);
    $147 = $144&255;
    $148 = $145 ? $146 : $147;
    $149 = load1($99);
    $150 = ($149<<24>>24)<(0);
    $151 = load4($100);
    $152 = $149&255;
    $153 = $150 ? $151 : $152;
    $154 = ($153>>>0)<($148>>>0);
    $$sroa$speculated$i$i$i = $154 ? $153 : $148;
    $155 = ($$sroa$speculated$i$i$i|0)==(0);
    L81: do {
     if ($155) {
      label = 12;
     } else {
      $156 = load4($95);
      $157 = $145 ? $156 : $95;
      $158 = load4($96);
      $159 = $150 ? $158 : $96;
      $$01318$i$i$i = $157;$$01417$i$i$i = $$sroa$speculated$i$i$i;$$019$i$i$i = $159;
      while(1) {
       $160 = load1($$01318$i$i$i);
       $161 = load1($$019$i$i$i);
       $162 = ($160<<24>>24)==($161<<24>>24);
       if (!($162)) {
        break;
       }
       $163 = (($$01417$i$i$i) + -1)|0;
       $164 = ((($$01318$i$i$i)) + 1|0);
       $165 = ((($$019$i$i$i)) + 1|0);
       $166 = ($163|0)==(0);
       if ($166) {
        label = 12;
        break L81;
       } else {
        $$01318$i$i$i = $164;$$01417$i$i$i = $163;$$019$i$i$i = $165;
       }
      }
      __ZN5VNodeD2Ev($11);
      __ZN5VNodeD2Ev($10);
     }
    } while(0);
    do {
     if ((label|0) == 12) {
      label = 0;
      $167 = ($148>>>0)>=($153>>>0);
      $168 = $154 ^ 1;
      $or$cond$i$i = $167 & $168;
      if (!($or$cond$i$i)) {
       __ZN5VNodeD2Ev($11);
       __ZN5VNodeD2Ev($10);
       break;
      }
      $169 = load1($101);
      $170 = ($169<<24>>24)<(0);
      $171 = load4($102);
      $172 = $169&255;
      $173 = $170 ? $171 : $172;
      $174 = load1($103);
      $175 = ($174<<24>>24)<(0);
      $176 = load4($104);
      $177 = $174&255;
      $178 = $175 ? $176 : $177;
      $179 = ($178>>>0)<($173>>>0);
      $$sroa$speculated$i2$i$i = $179 ? $178 : $173;
      $180 = ($$sroa$speculated$i2$i$i|0)==(0);
      L92: do {
       if ($180) {
        label = 18;
       } else {
        $181 = load4($10);
        $182 = $170 ? $181 : $10;
        $183 = load4($11);
        $184 = $175 ? $183 : $11;
        $$01318$i2$i$i = $182;$$01417$i3$i$i = $$sroa$speculated$i2$i$i;$$019$i1$i$i = $184;
        while(1) {
         $185 = load1($$01318$i2$i$i);
         $186 = load1($$019$i1$i$i);
         $187 = ($185<<24>>24)==($186<<24>>24);
         if (!($187)) {
          break;
         }
         $188 = (($$01417$i3$i$i) + -1)|0;
         $189 = ((($$01318$i2$i$i)) + 1|0);
         $190 = ((($$019$i1$i$i)) + 1|0);
         $191 = ($188|0)==(0);
         if ($191) {
          label = 18;
          break L92;
         } else {
          $$01318$i2$i$i = $189;$$01417$i3$i$i = $188;$$019$i1$i$i = $190;
         }
        }
        $192 = $185&255;
        $193 = $186&255;
        $194 = (($192) - ($193))|0;
        $195 = ($194|0)==(0);
        if ($195) {
         label = 18;
        } else {
         $198 = $194;
        }
       }
      } while(0);
      if ((label|0) == 18) {
       label = 0;
       $196 = ($173>>>0)<($178>>>0);
       $$$i5$i$i = $179&1;
       $$$$i5$i$i = $196 ? -1 : $$$i5$i$i;
       $198 = $$$$i5$i$i;
      }
      $197 = ($198|0)==(0);
      __ZN5VNodeD2Ev($11);
      __ZN5VNodeD2Ev($10);
      if ($197) {
       label = 20;
       break L76;
      }
     }
    } while(0);
    __ZN5VNodeC2ERKS_($12,$5);
    __ZN5VNodeC2ERKS_($13,$7);
    $205 = load1($107);
    $206 = ($205<<24>>24)<(0);
    $207 = load4($108);
    $208 = $205&255;
    $209 = $206 ? $207 : $208;
    $210 = load1($109);
    $211 = ($210<<24>>24)<(0);
    $212 = load4($110);
    $213 = $210&255;
    $214 = $211 ? $212 : $213;
    $215 = ($214>>>0)<($209>>>0);
    $$sroa$speculated$i$i2$i = $215 ? $214 : $209;
    $216 = ($$sroa$speculated$i$i2$i|0)==(0);
    if (!($216)) {
     $217 = load4($105);
     $218 = $206 ? $217 : $105;
     $219 = load4($106);
     $220 = $211 ? $219 : $106;
     $$01318$i$i6$i = $218;$$01417$i$i7$i = $$sroa$speculated$i$i2$i;$$019$i$i5$i = $220;
     while(1) {
      $221 = load1($$01318$i$i6$i);
      $222 = load1($$019$i$i5$i);
      $223 = ($221<<24>>24)==($222<<24>>24);
      if (!($223)) {
       label = 37;
       break L78;
      }
      $224 = (($$01417$i$i7$i) + -1)|0;
      $225 = ((($$01318$i$i6$i)) + 1|0);
      $226 = ((($$019$i$i5$i)) + 1|0);
      $227 = ($224|0)==(0);
      if ($227) {
       break;
      } else {
       $$01318$i$i6$i = $225;$$01417$i$i7$i = $224;$$019$i$i5$i = $226;
      }
     }
    }
    $228 = ($209>>>0)>=($214>>>0);
    $229 = $215 ^ 1;
    $or$cond$i9$i = $228 & $229;
    if (!($or$cond$i9$i)) {
     label = 36;
     break;
    }
    $230 = load1($111);
    $231 = ($230<<24>>24)<(0);
    $232 = load4($112);
    $233 = $230&255;
    $234 = $231 ? $232 : $233;
    $235 = load1($113);
    $236 = ($235<<24>>24)<(0);
    $237 = load4($114);
    $238 = $235&255;
    $239 = $236 ? $237 : $238;
    $240 = ($239>>>0)<($234>>>0);
    $$sroa$speculated$i2$i12$i = $240 ? $239 : $234;
    $241 = ($$sroa$speculated$i2$i12$i|0)==(0);
    L109: do {
     if ($241) {
      label = 33;
     } else {
      $242 = load4($12);
      $243 = $231 ? $242 : $12;
      $244 = load4($13);
      $245 = $236 ? $244 : $13;
      $$01318$i2$i16$i = $243;$$01417$i3$i17$i = $$sroa$speculated$i2$i12$i;$$019$i1$i15$i = $245;
      while(1) {
       $246 = load1($$01318$i2$i16$i);
       $247 = load1($$019$i1$i15$i);
       $248 = ($246<<24>>24)==($247<<24>>24);
       if (!($248)) {
        break;
       }
       $249 = (($$01417$i3$i17$i) + -1)|0;
       $250 = ((($$01318$i2$i16$i)) + 1|0);
       $251 = ((($$019$i1$i15$i)) + 1|0);
       $252 = ($249|0)==(0);
       if ($252) {
        label = 33;
        break L109;
       } else {
        $$01318$i2$i16$i = $250;$$01417$i3$i17$i = $249;$$019$i1$i15$i = $251;
       }
      }
      $253 = $246&255;
      $254 = $247&255;
      $255 = (($253) - ($254))|0;
      $256 = ($255|0)==(0);
      if ($256) {
       label = 33;
      } else {
       $259 = $255;
      }
     }
    } while(0);
    if ((label|0) == 33) {
     label = 0;
     $257 = ($234>>>0)<($239>>>0);
     $$$i5$i20$i = $240&1;
     $$$$i5$i20$i = $257 ? -1 : $$$i5$i20$i;
     $259 = $$$$i5$i20$i;
    }
    $258 = ($259|0)==(0);
    __ZN5VNodeD2Ev($13);
    __ZN5VNodeD2Ev($12);
    if (!($258)) {
     break;
    }
    __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($5,$7);
    $260 = (($$087$i) + -1)|0;
    $261 = load4($42);
    $262 = (($261) + (($260*112)|0)|0);
    __ZN5VNodeaSERKS_($5,$262);
    $263 = (($$086$i) + -1)|0;
    $264 = load4($37);
    $265 = (($264) + (($263*112)|0)|0);
    __ZN5VNodeaSERKS_($7,$265);
    $$086$i = $263;$$087$i = $260;
   }
   if ((label|0) == 36) {
    label = 0;
    __ZN5VNodeD2Ev($13);
    __ZN5VNodeD2Ev($12);
   }
   else if ((label|0) == 37) {
    label = 0;
    __ZN5VNodeD2Ev($13);
    __ZN5VNodeD2Ev($12);
   }
   __ZN5VNodeC2ERKS_($14,$4);
   __ZN5VNodeC2ERKS_($15,$7);
   $266 = load1($117);
   $267 = ($266<<24>>24)<(0);
   $268 = load4($118);
   $269 = $266&255;
   $270 = $267 ? $268 : $269;
   $271 = load1($119);
   $272 = ($271<<24>>24)<(0);
   $273 = load4($120);
   $274 = $271&255;
   $275 = $272 ? $273 : $274;
   $276 = ($275>>>0)<($270>>>0);
   $$sroa$speculated$i$i26$i = $276 ? $275 : $270;
   $277 = ($$sroa$speculated$i$i26$i|0)==(0);
   L123: do {
    if ($277) {
     label = 42;
    } else {
     $278 = load4($115);
     $279 = $267 ? $278 : $115;
     $280 = load4($116);
     $281 = $272 ? $280 : $116;
     $$01318$i$i30$i = $279;$$01417$i$i31$i = $$sroa$speculated$i$i26$i;$$019$i$i29$i = $281;
     while(1) {
      $282 = load1($$01318$i$i30$i);
      $283 = load1($$019$i$i29$i);
      $284 = ($282<<24>>24)==($283<<24>>24);
      if (!($284)) {
       break;
      }
      $285 = (($$01417$i$i31$i) + -1)|0;
      $286 = ((($$01318$i$i30$i)) + 1|0);
      $287 = ((($$019$i$i29$i)) + 1|0);
      $288 = ($285|0)==(0);
      if ($288) {
       label = 42;
       break L123;
      } else {
       $$01318$i$i30$i = $286;$$01417$i$i31$i = $285;$$019$i$i29$i = $287;
      }
     }
     __ZN5VNodeD2Ev($15);
     __ZN5VNodeD2Ev($14);
    }
   } while(0);
   do {
    if ((label|0) == 42) {
     label = 0;
     $289 = ($270>>>0)>=($275>>>0);
     $290 = $276 ^ 1;
     $or$cond$i33$i = $289 & $290;
     if (!($or$cond$i33$i)) {
      __ZN5VNodeD2Ev($15);
      __ZN5VNodeD2Ev($14);
      break;
     }
     $291 = load1($121);
     $292 = ($291<<24>>24)<(0);
     $293 = load4($122);
     $294 = $291&255;
     $295 = $292 ? $293 : $294;
     $296 = load1($123);
     $297 = ($296<<24>>24)<(0);
     $298 = load4($124);
     $299 = $296&255;
     $300 = $297 ? $298 : $299;
     $301 = ($300>>>0)<($295>>>0);
     $$sroa$speculated$i2$i36$i = $301 ? $300 : $295;
     $302 = ($$sroa$speculated$i2$i36$i|0)==(0);
     L134: do {
      if ($302) {
       label = 48;
      } else {
       $303 = load4($14);
       $304 = $292 ? $303 : $14;
       $305 = load4($15);
       $306 = $297 ? $305 : $15;
       $$01318$i2$i40$i = $304;$$01417$i3$i41$i = $$sroa$speculated$i2$i36$i;$$019$i1$i39$i = $306;
       while(1) {
        $307 = load1($$01318$i2$i40$i);
        $308 = load1($$019$i1$i39$i);
        $309 = ($307<<24>>24)==($308<<24>>24);
        if (!($309)) {
         break;
        }
        $310 = (($$01417$i3$i41$i) + -1)|0;
        $311 = ((($$01318$i2$i40$i)) + 1|0);
        $312 = ((($$019$i1$i39$i)) + 1|0);
        $313 = ($310|0)==(0);
        if ($313) {
         label = 48;
         break L134;
        } else {
         $$01318$i2$i40$i = $311;$$01417$i3$i41$i = $310;$$019$i1$i39$i = $312;
        }
       }
       $314 = $307&255;
       $315 = $308&255;
       $316 = (($314) - ($315))|0;
       $317 = ($316|0)==(0);
       if ($317) {
        label = 48;
       } else {
        $320 = $316;
       }
      }
     } while(0);
     if ((label|0) == 48) {
      label = 0;
      $318 = ($295>>>0)<($300>>>0);
      $$$i5$i44$i = $301&1;
      $$$$i5$i44$i = $318 ? -1 : $$$i5$i44$i;
      $320 = $$$$i5$i44$i;
     }
     $319 = ($320|0)==(0);
     __ZN5VNodeD2Ev($15);
     __ZN5VNodeD2Ev($14);
     if ($319) {
      break L76;
     }
    }
   } while(0);
   __ZN5VNodeC2ERKS_($16,$5);
   __ZN5VNodeC2ERKS_($17,$6);
   $337 = load1($127);
   $338 = ($337<<24>>24)<(0);
   $339 = load4($128);
   $340 = $337&255;
   $341 = $338 ? $339 : $340;
   $342 = load1($129);
   $343 = ($342<<24>>24)<(0);
   $344 = load4($130);
   $345 = $342&255;
   $346 = $343 ? $344 : $345;
   $347 = ($346>>>0)<($341>>>0);
   $$sroa$speculated$i$i54$i = $347 ? $346 : $341;
   $348 = ($$sroa$speculated$i$i54$i|0)==(0);
   L144: do {
    if ($348) {
     label = 60;
    } else {
     $349 = load4($125);
     $350 = $338 ? $349 : $125;
     $351 = load4($126);
     $352 = $343 ? $351 : $126;
     $$01318$i$i58$i = $350;$$01417$i$i59$i = $$sroa$speculated$i$i54$i;$$019$i$i57$i = $352;
     while(1) {
      $353 = load1($$01318$i$i58$i);
      $354 = load1($$019$i$i57$i);
      $355 = ($353<<24>>24)==($354<<24>>24);
      if (!($355)) {
       break;
      }
      $356 = (($$01417$i$i59$i) + -1)|0;
      $357 = ((($$01318$i$i58$i)) + 1|0);
      $358 = ((($$019$i$i57$i)) + 1|0);
      $359 = ($356|0)==(0);
      if ($359) {
       label = 60;
       break L144;
      } else {
       $$01318$i$i58$i = $357;$$01417$i$i59$i = $356;$$019$i$i57$i = $358;
      }
     }
     __ZN5VNodeD2Ev($17);
     __ZN5VNodeD2Ev($16);
    }
   } while(0);
   do {
    if ((label|0) == 60) {
     label = 0;
     $360 = ($341>>>0)>=($346>>>0);
     $361 = $347 ^ 1;
     $or$cond$i61$i = $360 & $361;
     if (!($or$cond$i61$i)) {
      __ZN5VNodeD2Ev($17);
      __ZN5VNodeD2Ev($16);
      break;
     }
     $362 = load1($131);
     $363 = ($362<<24>>24)<(0);
     $364 = load4($132);
     $365 = $362&255;
     $366 = $363 ? $364 : $365;
     $367 = load1($133);
     $368 = ($367<<24>>24)<(0);
     $369 = load4($134);
     $370 = $367&255;
     $371 = $368 ? $369 : $370;
     $372 = ($371>>>0)<($366>>>0);
     $$sroa$speculated$i2$i64$i = $372 ? $371 : $366;
     $373 = ($$sroa$speculated$i2$i64$i|0)==(0);
     L155: do {
      if ($373) {
       label = 66;
      } else {
       $374 = load4($16);
       $375 = $363 ? $374 : $16;
       $376 = load4($17);
       $377 = $368 ? $376 : $17;
       $$01318$i2$i68$i = $375;$$01417$i3$i69$i = $$sroa$speculated$i2$i64$i;$$019$i1$i67$i = $377;
       while(1) {
        $378 = load1($$01318$i2$i68$i);
        $379 = load1($$019$i1$i67$i);
        $380 = ($378<<24>>24)==($379<<24>>24);
        if (!($380)) {
         break;
        }
        $381 = (($$01417$i3$i69$i) + -1)|0;
        $382 = ((($$01318$i2$i68$i)) + 1|0);
        $383 = ((($$019$i1$i67$i)) + 1|0);
        $384 = ($381|0)==(0);
        if ($384) {
         label = 66;
         break L155;
        } else {
         $$01318$i2$i68$i = $382;$$01417$i3$i69$i = $381;$$019$i1$i67$i = $383;
        }
       }
       $385 = $378&255;
       $386 = $379&255;
       $387 = (($385) - ($386))|0;
       $388 = ($387|0)==(0);
       if ($388) {
        label = 66;
       } else {
        $391 = $387;
       }
      }
     } while(0);
     if ((label|0) == 66) {
      label = 0;
      $389 = ($366>>>0)<($371>>>0);
      $$$i5$i72$i = $372&1;
      $$$$i5$i72$i = $389 ? -1 : $$$i5$i72$i;
      $391 = $$$$i5$i72$i;
     }
     $390 = ($391|0)==(0);
     __ZN5VNodeD2Ev($17);
     __ZN5VNodeD2Ev($16);
     if ($390) {
      __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($5,$6);
      __emval_incref(($48|0));
      $392 = load4($85);
      $393 = $392;
      __emval_incref(($392|0));
      $394 = load4($86);
      $395 = $394;
      __emval_incref(($394|0));
      $396 = load1(8744);
      $397 = ($396<<24>>24)==(0);
      if ($397) {
       store1(8744,1);
       $398 = (__emval_get_method_caller(3,(1852|0))|0);
       store4(8776,$398);
       $399 = $398;
      } else {
       $$pre$i77$i = load4(8776);
       $399 = $$pre$i77$i;
      }
      __emval_incref(($392|0));
      store4($2,$393);
      __emval_incref(($394|0));
      store4($135,$395);
      __emval_call_void_method(($399|0),($48|0),(2543|0),($2|0));
      __emval_decref(($394|0));
      __emval_decref(($392|0));
      __emval_decref(($48|0));
      $400 = (($$087$i) + -1)|0;
      $401 = load4($42);
      $402 = (($401) + (($400*112)|0)|0);
      __ZN5VNodeaSERKS_($5,$402);
      $403 = (($$088$ph192$i) + 1)|0;
      $404 = load4($37);
      $405 = (($404) + (($403*112)|0)|0);
      __ZN5VNodeaSERKS_($6,$405);
      $$086$ph194$i = $$086$i;$$087$ph193$i = $400;$$088$ph192$i = $403;
      continue L76;
     }
    }
   } while(0);
   $406 = load4($66);
   $407 = ($406|0)==(0);
   if ($407) {
    store4($87,0);
    store4($88,0);
    store4($18,$89);
    $$013$i$i = $$089$ph$i;
    while(1) {
     $408 = load4($42);
     $409 = (((($408) + (($$013$i$i*112)|0)|0)) + 12|0);
     $410 = ((($409)) + 11|0);
     $411 = load1($410);
     $412 = ($411<<24>>24)<(0);
     if ($412) {
      $413 = (((($408) + (($$013$i$i*112)|0)|0)) + 16|0);
      $414 = load4($413);
      $417 = $414;
     } else {
      $415 = $411&255;
      $417 = $415;
     }
     $416 = ($417|0)==(0);
     if (!($416)) {
      store4($2,$409);
      __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($3,$18,$409,$2);
      $418 = load4($3);
      $419 = ((($418)) + 28|0);
      store4($419,$$013$i$i);
     }
     $420 = (($$013$i$i) + 1)|0;
     $421 = ($420>>>0)>($$087$i>>>0);
     if ($421) {
      break;
     } else {
      $$013$i$i = $420;
     }
    }
    $422 = load4($67);
    __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($422);
    $423 = load4($18);
    store4($8,$423);
    $424 = load4($89);
    store4($67,$424);
    $425 = load4($88);
    store4($66,$425);
    $426 = ($425|0)==(0);
    if ($426) {
     $427 = $424;
     store4($8,$67);
     $430 = $427;
    } else {
     $428 = $424;
     $429 = ((($428)) + 8|0);
     store4($429,$67);
     store4($18,$89);
     store4($89,0);
     store4($88,0);
     $430 = 0;
    }
    __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($430);
   }
   $$021$i$i = load4($67);
   $431 = ($$021$i$i|0)==(0|0);
   L187: do {
    if (!($431)) {
     $432 = load1($140);
     $433 = ($432<<24>>24)<(0);
     $434 = load4($141);
     $435 = $432&255;
     $436 = $433 ? $434 : $435;
     $437 = load4($90);
     $438 = $433 ? $437 : $90;
     $$022$i$i = $$021$i$i;
     L189: while(1) {
      $439 = ((($$022$i$i)) + 16|0);
      $440 = ((($439)) + 11|0);
      $441 = load1($440);
      $442 = ($441<<24>>24)<(0);
      $443 = ((($$022$i$i)) + 20|0);
      $444 = load4($443);
      $445 = $441&255;
      $446 = $442 ? $444 : $445;
      $447 = ($446>>>0)<($436>>>0);
      $$sroa$speculated$i$i$i$i13$i$i = $447 ? $446 : $436;
      $448 = ($$sroa$speculated$i$i$i$i13$i$i|0)==(0);
      L191: do {
       if ($448) {
        label = 93;
       } else {
        $449 = load4($439);
        $450 = $442 ? $449 : $439;
        $$01318$i$i3$i = $438;$$01417$i$i4$i = $$sroa$speculated$i$i$i$i13$i$i;$$019$i$i2$i = $450;
        while(1) {
         $451 = load1($$01318$i$i3$i);
         $452 = load1($$019$i$i2$i);
         $453 = ($451<<24>>24)==($452<<24>>24);
         if (!($453)) {
          break;
         }
         $454 = (($$01417$i$i4$i) + -1)|0;
         $455 = ((($$01318$i$i3$i)) + 1|0);
         $456 = ((($$019$i$i2$i)) + 1|0);
         $457 = ($454|0)==(0);
         if ($457) {
          label = 93;
          break L191;
         } else {
          $$01318$i$i3$i = $455;$$01417$i$i4$i = $454;$$019$i$i2$i = $456;
         }
        }
        $458 = $451&255;
        $459 = $452&255;
        $460 = (($458) - ($459))|0;
        $461 = ($460|0)==(0);
        if ($461) {
         label = 93;
        } else {
         $463 = ($460|0)<(0);
         if ($463) {
          label = 95;
         } else {
          label = 96;
         }
        }
       }
      } while(0);
      if ((label|0) == 93) {
       label = 0;
       $462 = ($436>>>0)<($446>>>0);
       if ($462) {
        label = 95;
       } else {
        label = 96;
       }
      }
      if ((label|0) == 95) {
       label = 0;
       $$0$in$be$i$i = $$022$i$i;
      }
      else if ((label|0) == 96) {
       label = 0;
       $464 = ($436>>>0)<($446>>>0);
       $$sroa$speculated$i$i$i$i$i$i = $464 ? $436 : $446;
       $465 = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
       L203: do {
        if ($465) {
         label = 101;
        } else {
         $466 = load4($439);
         $467 = $442 ? $466 : $439;
         $$01318$i2$i7$i = $467;$$01417$i3$i8$i = $$sroa$speculated$i$i$i$i$i$i;$$019$i1$i6$i = $438;
         while(1) {
          $468 = load1($$01318$i2$i7$i);
          $469 = load1($$019$i1$i6$i);
          $470 = ($468<<24>>24)==($469<<24>>24);
          if (!($470)) {
           break;
          }
          $471 = (($$01417$i3$i8$i) + -1)|0;
          $472 = ((($$01318$i2$i7$i)) + 1|0);
          $473 = ((($$019$i1$i6$i)) + 1|0);
          $474 = ($471|0)==(0);
          if ($474) {
           label = 101;
           break L203;
          } else {
           $$01318$i2$i7$i = $472;$$01417$i3$i8$i = $471;$$019$i1$i6$i = $473;
          }
         }
         $475 = $468&255;
         $476 = $469&255;
         $477 = (($475) - ($476))|0;
         $478 = ($477|0)==(0);
         if ($478) {
          label = 101;
         } else {
          $479 = ($477|0)<(0);
          if (!($479)) {
           break L189;
          }
         }
        }
       } while(0);
       if ((label|0) == 101) {
        label = 0;
        if (!($447)) {
         break;
        }
       }
       $480 = ((($$022$i$i)) + 4|0);
       $$0$in$be$i$i = $480;
      }
      $$0$i$i = load4($$0$in$be$i$i);
      $481 = ($$0$i$i|0)==(0|0);
      if ($481) {
       break L187;
      } else {
       $$022$i$i = $$0$i$i;
      }
     }
     store4($2,$90);
     __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($3,$8,$90,$2);
     $493 = load4($3);
     $494 = ((($493)) + 28|0);
     $495 = load4($494);
     $496 = load4($42);
     $497 = (($496) + (($495*112)|0)|0);
     __ZN5VNodeaSERKS_($9,$497);
     $498 = load1($91);
     $499 = ($498<<24>>24)<(0);
     $500 = load4($92);
     $501 = $498&255;
     $502 = $499 ? $500 : $501;
     $503 = load1($93);
     $504 = ($503<<24>>24)<(0);
     $505 = load4($94);
     $506 = $503&255;
     $507 = $504 ? $505 : $506;
     $508 = ($507>>>0)<($502>>>0);
     $$sroa$speculated$i$i = $508 ? $507 : $502;
     $509 = ($$sroa$speculated$i$i|0)==(0);
     L215: do {
      if ($509) {
       label = 113;
      } else {
       $510 = load4($9);
       $511 = $499 ? $510 : $9;
       $512 = load4($6);
       $513 = $504 ? $512 : $6;
       $$01318$i$i = $511;$$01417$i$i = $$sroa$speculated$i$i;$$019$i$i = $513;
       while(1) {
        $514 = load1($$01318$i$i);
        $515 = load1($$019$i$i);
        $516 = ($514<<24>>24)==($515<<24>>24);
        if (!($516)) {
         label = 114;
         break L215;
        }
        $517 = (($$01417$i$i) + -1)|0;
        $518 = ((($$01318$i$i)) + 1|0);
        $519 = ((($$019$i$i)) + 1|0);
        $520 = ($517|0)==(0);
        if ($520) {
         label = 113;
         break;
        } else {
         $$01318$i$i = $518;$$01417$i$i = $517;$$019$i$i = $519;
        }
       }
      }
     } while(0);
     if ((label|0) == 113) {
      label = 0;
      $521 = ($502>>>0)>=($507>>>0);
      $522 = $508 ^ 1;
      $or$cond187$i = $521 & $522;
      if ($or$cond187$i) {
       __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($9,$6);
       store4($2,$90);
       __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($3,$8,$90,$2);
       $531 = load4($3);
       $532 = ((($531)) + 28|0);
       $533 = load4($532);
       $534 = load4($42);
       ; store4($2,0,4); store2($2+4|0,0,2); store1($2+6|0,0,1);
       $535 = (((($534) + (($533*112)|0)|0)) + 12|0);
       $536 = ((($535)) + 11|0);
       $537 = load1($536);
       $538 = ($537<<24>>24)<(0);
       if ($538) {
        $539 = load4($535);
        store1($539,0);
        $540 = (((($534) + (($533*112)|0)|0)) + 16|0);
        store4($540,0);
        $$pr$i = load1($536);
        $541 = ($$pr$i<<24>>24)<(0);
        if ($541) {
         $542 = (((($534) + (($533*112)|0)|0)) + 20|0);
         $543 = load4($542);
         $544 = $543 & 2147483647;
         $phitmp$i$i$i = (($544) + -1)|0;
         $548 = 0;$552 = $phitmp$i$i$i;$568 = $$pr$i;$708 = 1;
        } else {
         $546 = $$pr$i;
         label = 122;
        }
       } else {
        store1($535,0);
        store1($536,0);
        $546 = 0;
        label = 122;
       }
       if ((label|0) == 122) {
        label = 0;
        $545 = $546&255;
        $548 = $545;$552 = 10;$568 = $546;$708 = 0;
       }
       $547 = ($548>>>0)<(11);
       $549 = (($548) + 16)|0;
       $550 = $549 & 496;
       $phitmp$i22$i$i = (($550) + -1)|0;
       $$phitmp$i$i$i = $547 ? 10 : $phitmp$i22$i$i;
       $551 = ($$phitmp$i$i$i|0)==($552|0);
       do {
        if (!($551)) {
         do {
          if ($547) {
           $564 = load4($535);
           if ($708) {
            $$017$off042$i$i = 0;$$01938$i$i = $564;$$02036$i$i = $535;
            label = 132;
           } else {
            $$017$off047$i$i = 0;$$018$off046$i$i = 1;$$01945$i$i = $564;$$02044$i$i = $535;
            label = 133;
           }
          } else {
           $553 = (($$phitmp$i$i$i) + 1)|0;
           $554 = ($553|0)==(0);
           $$$i$i = $554 ? 1 : $553;
           $555 = (_malloc($$$i$i)|0);
           $556 = ($555|0)==(0|0);
           L235: do {
            if ($556) {
             while(1) {
              $557 = load4(9296);
              $558 = (($557) + 0)|0;
              store4(9296,$558);
              $559 = ($557|0)==(0);
              if ($559) {
               $$lcssa$i$i = 0;
               break L235;
              }
              $560 = $557;
              FUNCTION_TABLE_v[$560 & 3]();
              $561 = (_malloc($$$i$i)|0);
              $562 = ($561|0)==(0|0);
              if (!($562)) {
               $$lcssa$i$i = $561;
               break;
              }
             }
            } else {
             $$lcssa$i$i = $555;
            }
           } while(0);
           if ($708) {
            $563 = load4($535);
            $$017$off042$i$i = 1;$$01938$i$i = $563;$$02036$i$i = $$lcssa$i$i;
            label = 132;
            break;
           } else {
            $$017$off047$i$i = 1;$$018$off046$i$i = 0;$$01945$i$i = $535;$$02044$i$i = $$lcssa$i$i;
            label = 133;
            break;
           }
          }
         } while(0);
         if ((label|0) == 132) {
          label = 0;
          $565 = (((($534) + (($533*112)|0)|0)) + 16|0);
          $566 = load4($565);
          $$017$off041$i$i = $$017$off042$i$i;$$018$off039$i$i = 1;$$01937$i$i = $$01938$i$i;$$02035$i$i = $$02036$i$i;$570 = $566;
         }
         else if ((label|0) == 133) {
          label = 0;
          $567 = $568&255;
          $$017$off041$i$i = $$017$off047$i$i;$$018$off039$i$i = $$018$off046$i$i;$$01937$i$i = $$01945$i$i;$$02035$i$i = $$02044$i$i;$570 = $567;
         }
         $569 = (($570) + 1)|0;
         $571 = ($569|0)==(0);
         if (!($571)) {
          _memcpy(($$02035$i$i|0),($$01937$i$i|0),($569|0))|0;
         }
         if ($$018$off039$i$i) {
          _free($$01937$i$i);
         }
         if ($$017$off041$i$i) {
          $572 = (($$phitmp$i$i$i) + 1)|0;
          $573 = $572 | -2147483648;
          $574 = (((($534) + (($533*112)|0)|0)) + 20|0);
          store4($574,$573);
          $575 = (((($534) + (($533*112)|0)|0)) + 16|0);
          store4($575,$548);
          store4($535,$$02035$i$i);
          break;
         } else {
          $576 = $548&255;
          store1($536,$576);
          break;
         }
        }
       } while(0);
       store4($535,0);
       $$sroa$7$0$$sroa_idx$i = (((($534) + (($533*112)|0)|0)) + 16|0);
       ; store4($$sroa$7$0$$sroa_idx$i,load4($2,4),4); store2($$sroa$7$0$$sroa_idx$i+4 | 0,load2($2+4 | 0,2),2); store1($$sroa$7$0$$sroa_idx$i+6 | 0,load1($2+6 | 0,1),1);
       $$sroa$7128$0$$sroa_raw_idx$i = ((($535)) + 11|0);
       store1($$sroa$7128$0$$sroa_raw_idx$i,0);
       __emval_incref(($48|0));
       $577 = load4($81);
       $578 = $577;
       __emval_incref(($577|0));
       $579 = load4($86);
       $580 = $579;
       __emval_incref(($579|0));
       $581 = load1(8744);
       $582 = ($581<<24>>24)==(0);
       if ($582) {
        store1(8744,1);
        $583 = (__emval_get_method_caller(3,(1852|0))|0);
        store4(8776,$583);
        $584 = $583;
       } else {
        $$pre$i107$i = load4(8776);
        $584 = $$pre$i107$i;
       }
       __emval_incref(($577|0));
       store4($2,$578);
       __emval_incref(($579|0));
       store4($137,$580);
       __emval_call_void_method(($584|0),($48|0),(2543|0),($2|0));
       __emval_decref(($579|0));
       __emval_decref(($577|0));
       __emval_decref(($48|0));
      } else {
       label = 114;
      }
     }
     if ((label|0) == 114) {
      label = 0;
      __emval_incref(($48|0));
      $523 = (__Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($6)|0);
      $524 = $523;
      $525 = load4($86);
      $526 = $525;
      __emval_incref(($525|0));
      $527 = load1(8744);
      $528 = ($527<<24>>24)==(0);
      if ($528) {
       store1(8744,1);
       $529 = (__emval_get_method_caller(3,(1852|0))|0);
       store4(8776,$529);
       $530 = $529;
      } else {
       $$pre$i96$i = load4(8776);
       $530 = $$pre$i96$i;
      }
      __emval_incref(($523|0));
      store4($2,$524);
      __emval_incref(($525|0));
      store4($138,$526);
      __emval_call_void_method(($530|0),($48|0),(2543|0),($2|0));
      __emval_decref(($525|0));
      __emval_decref(($523|0));
      __emval_decref(($48|0));
     }
     $585 = (($$088$ph192$i) + 1)|0;
     $586 = load4($37);
     $587 = (($586) + (($585*112)|0)|0);
     __ZN5VNodeaSERKS_($6,$587);
     $$086$ph194$i = $$086$i;$$087$ph193$i = $$087$i;$$088$ph192$i = $585;
     continue L76;
    }
   } while(0);
   __emval_incref(($48|0));
   $482 = (__Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($6)|0);
   $483 = $482;
   $484 = load4($86);
   $485 = $484;
   __emval_incref(($484|0));
   $486 = load1(8744);
   $487 = ($486<<24>>24)==(0);
   if ($487) {
    store1(8744,1);
    $488 = (__emval_get_method_caller(3,(1852|0))|0);
    store4(8776,$488);
    $489 = $488;
   } else {
    $$pre$i86$i = load4(8776);
    $489 = $$pre$i86$i;
   }
   __emval_incref(($482|0));
   store4($2,$483);
   __emval_incref(($484|0));
   store4($136,$485);
   __emval_call_void_method(($489|0),($48|0),(2543|0),($2|0));
   __emval_decref(($484|0));
   __emval_decref(($482|0));
   __emval_decref(($48|0));
   $490 = (($$088$ph192$i) + 1)|0;
   $491 = load4($37);
   $492 = (($491) + (($490*112)|0)|0);
   __ZN5VNodeaSERKS_($6,$492);
   $$086$ph194$i = $$086$i;$$087$ph193$i = $$087$i;$$088$ph192$i = $490;
  }
  if ((label|0) == 20) {
   label = 0;
   __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($4,$6);
   $199 = (($$089$ph$i) + 1)|0;
   $200 = load4($42);
   $201 = (($200) + (($199*112)|0)|0);
   __ZN5VNodeaSERKS_($4,$201);
   $202 = (($$088$ph192$i) + 1)|0;
   $203 = load4($37);
   $204 = (($203) + (($202*112)|0)|0);
   __ZN5VNodeaSERKS_($6,$204);
   $$086$ph$i = $$086$i;$$087$ph$i = $$087$i;$$088$ph$i = $202;$$089$ph$i = $199;
   continue;
  }
  __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($4,$7);
  __emval_incref(($48|0));
  $321 = load4($86);
  $322 = $321;
  __emval_incref(($321|0));
  $323 = load4($85);
  __emval_incref(($323|0));
  $324 = (__emval_new_cstring((2591|0))|0);
  $325 = (__emval_get_property(($323|0),($324|0))|0);
  __emval_decref(($324|0));
  $326 = $325;
  $327 = load1(8744);
  $328 = ($327<<24>>24)==(0);
  if ($328) {
   store1(8744,1);
   $329 = (__emval_get_method_caller(3,(1852|0))|0);
   store4(8776,$329);
   $330 = $329;
  } else {
   $$pre$i$i = load4(8776);
   $330 = $$pre$i$i;
  }
  __emval_incref(($321|0));
  store4($2,$322);
  __emval_incref(($325|0));
  store4($139,$326);
  __emval_call_void_method(($330|0),($48|0),(2543|0),($2|0));
  __emval_decref(($325|0));
  __emval_decref(($323|0));
  __emval_decref(($321|0));
  __emval_decref(($48|0));
  $331 = (($$089$ph$i) + 1)|0;
  $332 = load4($42);
  $333 = (($332) + (($331*112)|0)|0);
  __ZN5VNodeaSERKS_($4,$333);
  $334 = (($$086$i) + -1)|0;
  $335 = load4($37);
  $336 = (($335) + (($334*112)|0)|0);
  __ZN5VNodeaSERKS_($7,$336);
  $$086$ph$i = $334;$$087$ph$i = $$087$i;$$088$ph$i = $$088$ph192$i;$$089$ph$i = $331;
 }
 if ($142) {
  store4($19,$48);
  __emval_incref(($48|0));
  $588 = (($$086$i) + 1)|0;
  $589 = load4($37);
  $590 = (((($589) + (($588*112)|0)|0)) + 96|0);
  $591 = load4($590);
  store4($20,$591);
  __emval_incref(($591|0));
  __Z9addVnodesN10emscripten3valES0_RNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjjS7_($19,$20,$37,$$088$ph192$i,$$086$i);
  __emval_decref(($591|0));
  __emval_decref(($48|0));
 } else {
  if ($143) {
   store4($21,$48);
   __emval_incref(($48|0));
   __Z12removeVnodesN10emscripten3valERNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjj($21,$42,$$089$ph$i,$$087$i);
   __emval_decref(($48|0));
  }
 }
 __ZN5VNodeD2Ev($9);
 $592 = load4($67);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($592);
 __ZN5VNodeD2Ev($7);
 __ZN5VNodeD2Ev($6);
 __ZN5VNodeD2Ev($5);
 __ZN5VNodeD2Ev($4);
 __emval_decref(($48|0));
 STACKTOP = sp;return;
}
function __ZN5VNodeaSERKS_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i10 = 0, $$$i18 = 0, $$$i2 = 0, $$$i26 = 0, $$035$val$cast = 0, $$lcssa$i = 0, $$lcssa$i16 = 0, $$lcssa$i24 = 0, $$lcssa$i32 = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i35 = 0, $$sroa$speculated$i41 = 0, $$sroa$speculated$i47 = 0, $$sroa$speculated$i53 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0;
 var $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0;
 var $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0;
 var $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0;
 var $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0;
 var $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0;
 var $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0;
 var $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0;
 var $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0;
 var $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0;
 var $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0;
 var $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $phitmp$i$i15 = 0, $phitmp$i$i21 = 0, $phitmp$i$i27 = 0, $phitmp$i$i9 = 0, $phitmp$i36 = 0, $phitmp$i42 = 0, $phitmp$i48 = 0;
 var $phitmp$i54 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp + 4|0;
 $3 = sp;
 $4 = ($0|0)==($1|0);
 do {
  if ($4) {
  } else {
   $5 = ((($1)) + 11|0);
   $6 = load1($5);
   $7 = ($6<<24>>24)<(0);
   $8 = load4($1);
   $9 = $7 ? $8 : $1;
   $10 = ((($1)) + 4|0);
   $11 = load4($10);
   $12 = $6&255;
   $13 = $7 ? $11 : $12;
   $14 = ((($0)) + 11|0);
   $15 = load1($14);
   $16 = ($15<<24>>24)<(0);
   if ($16) {
    $17 = ((($0)) + 8|0);
    $18 = load4($17);
    $19 = $18 & 2147483647;
    $phitmp$i$i = (($19) + -1)|0;
    $21 = $phitmp$i$i;
   } else {
    $21 = 10;
   }
   $20 = ($13>>>0)>($21>>>0);
   do {
    if ($20) {
     $30 = (($13) - ($21))|0;
     $31 = (-18 - ($21))|0;
     $32 = ($31>>>0)<($30>>>0);
     if ($32) {
      __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
      // unreachable;
     }
     if ($16) {
      $33 = load4($0);
      $52 = $33;
     } else {
      $52 = $0;
     }
     $34 = ($21>>>0)<(2147483623);
     if ($34) {
      $35 = $21 << 1;
      $36 = ($13>>>0)<($35>>>0);
      $$sroa$speculated$i = $36 ? $35 : $13;
      $37 = ($$sroa$speculated$i>>>0)<(11);
      $38 = (($$sroa$speculated$i) + 16)|0;
      $39 = $38 & -16;
      $phitmp$i = $37 ? 11 : $39;
      $41 = $phitmp$i;
     } else {
      $41 = -17;
     }
     $40 = ($41|0)==(0);
     $$$i = $40 ? 1 : $41;
     $42 = (_malloc($$$i)|0);
     $43 = ($42|0)==(0|0);
     L19: do {
      if ($43) {
       while(1) {
        $44 = load4(9296);
        $45 = (($44) + 0)|0;
        store4(9296,$45);
        $46 = ($44|0)==(0);
        if ($46) {
         $$lcssa$i = 0;
         break L19;
        }
        $47 = $44;
        FUNCTION_TABLE_v[$47 & 3]();
        $48 = (_malloc($$$i)|0);
        $49 = ($48|0)==(0|0);
        if (!($49)) {
         $$lcssa$i = $48;
         break;
        }
       }
      } else {
       $$lcssa$i = $42;
      }
     } while(0);
     $50 = ($13|0)==(0);
     if (!($50)) {
      _memcpy(($$lcssa$i|0),($9|0),($13|0))|0;
     }
     $51 = ($21|0)==(10);
     if (!($51)) {
      _free($52);
     }
     store4($0,$$lcssa$i);
     $53 = $41 | -2147483648;
     $54 = ((($0)) + 8|0);
     store4($54,$53);
     $55 = ((($0)) + 4|0);
     store4($55,$13);
     $56 = (($$lcssa$i) + ($13)|0);
     store1($56,0);
    } else {
     if ($16) {
      $22 = load4($0);
      $24 = $22;
     } else {
      $24 = $0;
     }
     $23 = ($13|0)==(0);
     if (!($23)) {
      _memmove(($24|0),($9|0),($13|0))|0;
     }
     $25 = (($24) + ($13)|0);
     store1($25,0);
     $26 = load1($14);
     $27 = ($26<<24>>24)<(0);
     if ($27) {
      $28 = ((($0)) + 4|0);
      store4($28,$13);
      break;
     } else {
      $29 = $13&255;
      store1($14,$29);
      break;
     }
    }
   } while(0);
   $57 = ((($0)) + 12|0);
   $58 = ((($1)) + 12|0);
   $59 = ((($58)) + 11|0);
   $60 = load1($59);
   $61 = ($60<<24>>24)<(0);
   $62 = load4($58);
   $63 = $61 ? $62 : $58;
   $64 = ((($1)) + 16|0);
   $65 = load4($64);
   $66 = $60&255;
   $67 = $61 ? $65 : $66;
   $68 = ((($57)) + 11|0);
   $69 = load1($68);
   $70 = ($69<<24>>24)<(0);
   if ($70) {
    $71 = ((($0)) + 20|0);
    $72 = load4($71);
    $73 = $72 & 2147483647;
    $phitmp$i$i9 = (($73) + -1)|0;
    $75 = $phitmp$i$i9;
   } else {
    $75 = 10;
   }
   $74 = ($67>>>0)>($75>>>0);
   do {
    if ($74) {
     $84 = (($67) - ($75))|0;
     $85 = (-18 - ($75))|0;
     $86 = ($85>>>0)<($84>>>0);
     if ($86) {
      __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
      // unreachable;
     }
     if ($70) {
      $87 = load4($57);
      $106 = $87;
     } else {
      $106 = $57;
     }
     $88 = ($75>>>0)<(2147483623);
     if ($88) {
      $89 = $75 << 1;
      $90 = ($67>>>0)<($89>>>0);
      $$sroa$speculated$i35 = $90 ? $89 : $67;
      $91 = ($$sroa$speculated$i35>>>0)<(11);
      $92 = (($$sroa$speculated$i35) + 16)|0;
      $93 = $92 & -16;
      $phitmp$i36 = $91 ? 11 : $93;
      $95 = $phitmp$i36;
     } else {
      $95 = -17;
     }
     $94 = ($95|0)==(0);
     $$$i2 = $94 ? 1 : $95;
     $96 = (_malloc($$$i2)|0);
     $97 = ($96|0)==(0|0);
     L57: do {
      if ($97) {
       while(1) {
        $98 = load4(9296);
        $99 = (($98) + 0)|0;
        store4(9296,$99);
        $100 = ($98|0)==(0);
        if ($100) {
         $$lcssa$i8 = 0;
         break L57;
        }
        $101 = $98;
        FUNCTION_TABLE_v[$101 & 3]();
        $102 = (_malloc($$$i2)|0);
        $103 = ($102|0)==(0|0);
        if (!($103)) {
         $$lcssa$i8 = $102;
         break;
        }
       }
      } else {
       $$lcssa$i8 = $96;
      }
     } while(0);
     $104 = ($67|0)==(0);
     if (!($104)) {
      _memcpy(($$lcssa$i8|0),($63|0),($67|0))|0;
     }
     $105 = ($75|0)==(10);
     if (!($105)) {
      _free($106);
     }
     store4($57,$$lcssa$i8);
     $107 = $95 | -2147483648;
     $108 = ((($0)) + 20|0);
     store4($108,$107);
     $109 = ((($0)) + 16|0);
     store4($109,$67);
     $110 = (($$lcssa$i8) + ($67)|0);
     store1($110,0);
    } else {
     if ($70) {
      $76 = load4($57);
      $78 = $76;
     } else {
      $78 = $57;
     }
     $77 = ($67|0)==(0);
     if (!($77)) {
      _memmove(($78|0),($63|0),($67|0))|0;
     }
     $79 = (($78) + ($67)|0);
     store1($79,0);
     $80 = load1($68);
     $81 = ($80<<24>>24)<(0);
     if ($81) {
      $82 = ((($0)) + 16|0);
      store4($82,$67);
      break;
     } else {
      $83 = $67&255;
      store1($68,$83);
      break;
     }
    }
   } while(0);
   $111 = ((($0)) + 24|0);
   $112 = ((($1)) + 24|0);
   $113 = ((($112)) + 11|0);
   $114 = load1($113);
   $115 = ($114<<24>>24)<(0);
   $116 = load4($112);
   $117 = $115 ? $116 : $112;
   $118 = ((($1)) + 28|0);
   $119 = load4($118);
   $120 = $114&255;
   $121 = $115 ? $119 : $120;
   $122 = ((($111)) + 11|0);
   $123 = load1($122);
   $124 = ($123<<24>>24)<(0);
   if ($124) {
    $125 = ((($0)) + 32|0);
    $126 = load4($125);
    $127 = $126 & 2147483647;
    $phitmp$i$i15 = (($127) + -1)|0;
    $129 = $phitmp$i$i15;
   } else {
    $129 = 10;
   }
   $128 = ($121>>>0)>($129>>>0);
   if ($128) {
    $138 = (($121) - ($129))|0;
    $139 = (-18 - ($129))|0;
    $140 = ($139>>>0)<($138>>>0);
    if ($140) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    if ($124) {
     $141 = load4($111);
     $160 = $141;
    } else {
     $160 = $111;
    }
    $142 = ($129>>>0)<(2147483623);
    if ($142) {
     $143 = $129 << 1;
     $144 = ($121>>>0)<($143>>>0);
     $$sroa$speculated$i41 = $144 ? $143 : $121;
     $145 = ($$sroa$speculated$i41>>>0)<(11);
     $146 = (($$sroa$speculated$i41) + 16)|0;
     $147 = $146 & -16;
     $phitmp$i42 = $145 ? 11 : $147;
     $149 = $phitmp$i42;
    } else {
     $149 = -17;
    }
    $148 = ($149|0)==(0);
    $$$i10 = $148 ? 1 : $149;
    $150 = (_malloc($$$i10)|0);
    $151 = ($150|0)==(0|0);
    L95: do {
     if ($151) {
      while(1) {
       $152 = load4(9296);
       $153 = (($152) + 0)|0;
       store4(9296,$153);
       $154 = ($152|0)==(0);
       if ($154) {
        $$lcssa$i16 = 0;
        break L95;
       }
       $155 = $152;
       FUNCTION_TABLE_v[$155 & 3]();
       $156 = (_malloc($$$i10)|0);
       $157 = ($156|0)==(0|0);
       if (!($157)) {
        $$lcssa$i16 = $156;
        break;
       }
      }
     } else {
      $$lcssa$i16 = $150;
     }
    } while(0);
    $158 = ($121|0)==(0);
    if (!($158)) {
     _memcpy(($$lcssa$i16|0),($117|0),($121|0))|0;
    }
    $159 = ($129|0)==(10);
    if (!($159)) {
     _free($160);
    }
    store4($111,$$lcssa$i16);
    $161 = $149 | -2147483648;
    $162 = ((($0)) + 32|0);
    store4($162,$161);
    $163 = ((($0)) + 28|0);
    store4($163,$121);
    $164 = (($$lcssa$i16) + ($121)|0);
    store1($164,0);
    $295 = $3;$296 = $2;
   } else {
    if ($124) {
     $130 = load4($111);
     $132 = $130;
    } else {
     $132 = $111;
    }
    $131 = ($121|0)==(0);
    if (!($131)) {
     _memmove(($132|0),($117|0),($121|0))|0;
    }
    $133 = (($132) + ($121)|0);
    store1($133,0);
    $134 = load1($122);
    $135 = ($134<<24>>24)<(0);
    if ($135) {
     $136 = ((($0)) + 28|0);
     store4($136,$121);
    } else {
     $137 = $121&255;
     store1($122,$137);
    }
    $295 = $3;$296 = $2;
   }
   $165 = ((($1)) + 36|0);
   $166 = ((($0)) + 36|0);
   $167 = load4($165);
   store4($2,$167);
   $168 = ((($1)) + 40|0);
   store4($3,$168);
   $$035$val$cast = $167;
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($166,$$035$val$cast,$168);
   $169 = ((($0)) + 48|0);
   $170 = ((($1)) + 48|0);
   $171 = load4($170);
   $172 = ((($1)) + 52|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($169,$171,$172);
   $173 = ((($0)) + 60|0);
   $174 = ((($1)) + 60|0);
   $175 = load4($174);
   $176 = ((($1)) + 64|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($173,$175,$176);
   $177 = ((($0)) + 72|0);
   $178 = ((($1)) + 72|0);
   $179 = ((($178)) + 11|0);
   $180 = load1($179);
   $181 = ($180<<24>>24)<(0);
   $182 = load4($178);
   $183 = $181 ? $182 : $178;
   $184 = ((($1)) + 76|0);
   $185 = load4($184);
   $186 = $180&255;
   $187 = $181 ? $185 : $186;
   $188 = ((($177)) + 11|0);
   $189 = load1($188);
   $190 = ($189<<24>>24)<(0);
   if ($190) {
    $191 = ((($0)) + 80|0);
    $192 = load4($191);
    $193 = $192 & 2147483647;
    $phitmp$i$i21 = (($193) + -1)|0;
    $195 = $phitmp$i$i21;
   } else {
    $195 = 10;
   }
   $194 = ($187>>>0)>($195>>>0);
   do {
    if ($194) {
     $204 = (($187) - ($195))|0;
     $205 = (-18 - ($195))|0;
     $206 = ($205>>>0)<($204>>>0);
     if ($206) {
      __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
      // unreachable;
     }
     if ($190) {
      $207 = load4($177);
      $226 = $207;
     } else {
      $226 = $177;
     }
     $208 = ($195>>>0)<(2147483623);
     if ($208) {
      $209 = $195 << 1;
      $210 = ($187>>>0)<($209>>>0);
      $$sroa$speculated$i47 = $210 ? $209 : $187;
      $211 = ($$sroa$speculated$i47>>>0)<(11);
      $212 = (($$sroa$speculated$i47) + 16)|0;
      $213 = $212 & -16;
      $phitmp$i48 = $211 ? 11 : $213;
      $215 = $phitmp$i48;
     } else {
      $215 = -17;
     }
     $214 = ($215|0)==(0);
     $$$i18 = $214 ? 1 : $215;
     $216 = (_malloc($$$i18)|0);
     $217 = ($216|0)==(0|0);
     L134: do {
      if ($217) {
       while(1) {
        $218 = load4(9296);
        $219 = (($218) + 0)|0;
        store4(9296,$219);
        $220 = ($218|0)==(0);
        if ($220) {
         $$lcssa$i24 = 0;
         break L134;
        }
        $221 = $218;
        FUNCTION_TABLE_v[$221 & 3]();
        $222 = (_malloc($$$i18)|0);
        $223 = ($222|0)==(0|0);
        if (!($223)) {
         $$lcssa$i24 = $222;
         break;
        }
       }
      } else {
       $$lcssa$i24 = $216;
      }
     } while(0);
     $224 = ($187|0)==(0);
     if (!($224)) {
      _memcpy(($$lcssa$i24|0),($183|0),($187|0))|0;
     }
     $225 = ($195|0)==(10);
     if (!($225)) {
      _free($226);
     }
     store4($177,$$lcssa$i24);
     $227 = $215 | -2147483648;
     $228 = ((($0)) + 80|0);
     store4($228,$227);
     $229 = ((($0)) + 76|0);
     store4($229,$187);
     $230 = (($$lcssa$i24) + ($187)|0);
     store1($230,0);
    } else {
     if ($190) {
      $196 = load4($177);
      $198 = $196;
     } else {
      $198 = $177;
     }
     $197 = ($187|0)==(0);
     if (!($197)) {
      _memmove(($198|0),($183|0),($187|0))|0;
     }
     $199 = (($198) + ($187)|0);
     store1($199,0);
     $200 = load1($188);
     $201 = ($200<<24>>24)<(0);
     if ($201) {
      $202 = ((($0)) + 76|0);
      store4($202,$187);
      break;
     } else {
      $203 = $187&255;
      store1($188,$203);
      break;
     }
    }
   } while(0);
   $231 = ((($0)) + 84|0);
   $232 = ((($1)) + 84|0);
   $233 = ((($232)) + 11|0);
   $234 = load1($233);
   $235 = ($234<<24>>24)<(0);
   $236 = load4($232);
   $237 = $235 ? $236 : $232;
   $238 = ((($1)) + 88|0);
   $239 = load4($238);
   $240 = $234&255;
   $241 = $235 ? $239 : $240;
   $242 = ((($231)) + 11|0);
   $243 = load1($242);
   $244 = ($243<<24>>24)<(0);
   if ($244) {
    $245 = ((($0)) + 92|0);
    $246 = load4($245);
    $247 = $246 & 2147483647;
    $phitmp$i$i27 = (($247) + -1)|0;
    $249 = $phitmp$i$i27;
   } else {
    $249 = 10;
   }
   $248 = ($241>>>0)>($249>>>0);
   if (!($248)) {
    if ($244) {
     $250 = load4($231);
     $252 = $250;
    } else {
     $252 = $231;
    }
    $251 = ($241|0)==(0);
    if (!($251)) {
     _memmove(($252|0),($237|0),($241|0))|0;
    }
    $253 = (($252) + ($241)|0);
    store1($253,0);
    $254 = load1($242);
    $255 = ($254<<24>>24)<(0);
    if ($255) {
     $256 = ((($0)) + 88|0);
     store4($256,$241);
     break;
    } else {
     $257 = $241&255;
     store1($242,$257);
     break;
    }
   }
   $258 = (($241) - ($249))|0;
   $259 = (-18 - ($249))|0;
   $260 = ($259>>>0)<($258>>>0);
   if ($260) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($244) {
    $261 = load4($231);
    $280 = $261;
   } else {
    $280 = $231;
   }
   $262 = ($249>>>0)<(2147483623);
   if ($262) {
    $263 = $249 << 1;
    $264 = ($241>>>0)<($263>>>0);
    $$sroa$speculated$i53 = $264 ? $263 : $241;
    $265 = ($$sroa$speculated$i53>>>0)<(11);
    $266 = (($$sroa$speculated$i53) + 16)|0;
    $267 = $266 & -16;
    $phitmp$i54 = $265 ? 11 : $267;
    $269 = $phitmp$i54;
   } else {
    $269 = -17;
   }
   $268 = ($269|0)==(0);
   $$$i26 = $268 ? 1 : $269;
   $270 = (_malloc($$$i26)|0);
   $271 = ($270|0)==(0|0);
   L183: do {
    if ($271) {
     while(1) {
      $272 = load4(9296);
      $273 = (($272) + 0)|0;
      store4(9296,$273);
      $274 = ($272|0)==(0);
      if ($274) {
       $$lcssa$i32 = 0;
       break L183;
      }
      $275 = $272;
      FUNCTION_TABLE_v[$275 & 3]();
      $276 = (_malloc($$$i26)|0);
      $277 = ($276|0)==(0|0);
      if (!($277)) {
       $$lcssa$i32 = $276;
       break;
      }
     }
    } else {
     $$lcssa$i32 = $270;
    }
   } while(0);
   $278 = ($241|0)==(0);
   if (!($278)) {
    _memcpy(($$lcssa$i32|0),($237|0),($241|0))|0;
   }
   $279 = ($249|0)==(10);
   if (!($279)) {
    _free($280);
   }
   store4($231,$$lcssa$i32);
   $281 = $269 | -2147483648;
   $282 = ((($0)) + 92|0);
   store4($282,$281);
   $283 = ((($0)) + 88|0);
   store4($283,$241);
   $284 = (($$lcssa$i32) + ($241)|0);
   store1($284,0);
  }
 } while(0);
 $285 = ((($0)) + 96|0);
 $286 = ((($1)) + 96|0);
 $287 = load4($286);
 __emval_incref(($287|0));
 $288 = load4($285);
 __emval_decref(($288|0));
 $289 = load4($286);
 store4($285,$289);
 if ($4) {
  STACKTOP = sp;return;
 }
 $290 = ((($0)) + 100|0);
 $291 = ((($1)) + 100|0);
 $292 = load4($291);
 $293 = ((($1)) + 104|0);
 $294 = load4($293);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($290,$292,$294);
 STACKTOP = sp;return;
}
function __Z11patch_vnodeR5VNodeS0_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$$i5$i = 0, $$$i5$i = 0, $$01318$i$i = 0, $$01318$i2$i = 0, $$01417$i$i = 0, $$01417$i3$i = 0, $$019$i$i = 0, $$019$i1$i = 0, $$lcssa$i = 0, $$pre$i = 0, $$sroa$speculated$i$i = 0, $$sroa$speculated$i2$i = 0, $10 = 0, $100 = 0, $101 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0;
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 368|0;
 $3 = sp;
 $4 = sp + 248|0;
 $5 = sp + 24|0;
 $6 = sp + 136|0;
 $7 = sp + 16|0;
 __ZN5VNodeC2ERKS_($4,$1);
 __ZN5VNodeC2ERKS_($5,$2);
 $8 = ((($4)) + 12|0);
 $9 = ((($5)) + 12|0);
 $10 = ((($8)) + 11|0);
 $11 = load1($10);
 $12 = ($11<<24>>24)<(0);
 $13 = ((($4)) + 16|0);
 $14 = load4($13);
 $15 = $11&255;
 $16 = $12 ? $14 : $15;
 $17 = ((($9)) + 11|0);
 $18 = load1($17);
 $19 = ($18<<24>>24)<(0);
 $20 = ((($5)) + 16|0);
 $21 = load4($20);
 $22 = $18&255;
 $23 = $19 ? $21 : $22;
 $24 = ($23>>>0)<($16>>>0);
 $$sroa$speculated$i$i = $24 ? $23 : $16;
 $25 = ($$sroa$speculated$i$i|0)==(0);
 L1: do {
  if ($25) {
   label = 5;
  } else {
   $26 = load4($8);
   $27 = $12 ? $26 : $8;
   $28 = load4($9);
   $29 = $19 ? $28 : $9;
   $$01318$i$i = $27;$$01417$i$i = $$sroa$speculated$i$i;$$019$i$i = $29;
   while(1) {
    $30 = load1($$01318$i$i);
    $31 = load1($$019$i$i);
    $32 = ($30<<24>>24)==($31<<24>>24);
    if (!($32)) {
     break;
    }
    $33 = (($$01417$i$i) + -1)|0;
    $34 = ((($$01318$i$i)) + 1|0);
    $35 = ((($$019$i$i)) + 1|0);
    $36 = ($33|0)==(0);
    if ($36) {
     label = 5;
     break L1;
    } else {
     $$01318$i$i = $34;$$01417$i$i = $33;$$019$i$i = $35;
    }
   }
   __ZN5VNodeD2Ev($5);
   __ZN5VNodeD2Ev($4);
  }
 } while(0);
 do {
  if ((label|0) == 5) {
   $37 = ($16>>>0)>=($23>>>0);
   $38 = $24 ^ 1;
   $or$cond$i = $37 & $38;
   if (!($or$cond$i)) {
    __ZN5VNodeD2Ev($5);
    __ZN5VNodeD2Ev($4);
    break;
   }
   $39 = ((($4)) + 11|0);
   $40 = load1($39);
   $41 = ($40<<24>>24)<(0);
   $42 = ((($4)) + 4|0);
   $43 = load4($42);
   $44 = $40&255;
   $45 = $41 ? $43 : $44;
   $46 = ((($5)) + 11|0);
   $47 = load1($46);
   $48 = ($47<<24>>24)<(0);
   $49 = ((($5)) + 4|0);
   $50 = load4($49);
   $51 = $47&255;
   $52 = $48 ? $50 : $51;
   $53 = ($52>>>0)<($45>>>0);
   $$sroa$speculated$i2$i = $53 ? $52 : $45;
   $54 = ($$sroa$speculated$i2$i|0)==(0);
   L12: do {
    if ($54) {
     label = 11;
    } else {
     $55 = load4($4);
     $56 = $41 ? $55 : $4;
     $57 = load4($5);
     $58 = $48 ? $57 : $5;
     $$01318$i2$i = $56;$$01417$i3$i = $$sroa$speculated$i2$i;$$019$i1$i = $58;
     while(1) {
      $59 = load1($$01318$i2$i);
      $60 = load1($$019$i1$i);
      $61 = ($59<<24>>24)==($60<<24>>24);
      if (!($61)) {
       break;
      }
      $62 = (($$01417$i3$i) + -1)|0;
      $63 = ((($$01318$i2$i)) + 1|0);
      $64 = ((($$019$i1$i)) + 1|0);
      $65 = ($62|0)==(0);
      if ($65) {
       label = 11;
       break L12;
      } else {
       $$01318$i2$i = $63;$$01417$i3$i = $62;$$019$i1$i = $64;
      }
     }
     $66 = $59&255;
     $67 = $60&255;
     $68 = (($66) - ($67))|0;
     $69 = ($68|0)==(0);
     if ($69) {
      label = 11;
     } else {
      $72 = $68;
     }
    }
   } while(0);
   if ((label|0) == 11) {
    $70 = ($45>>>0)<($52>>>0);
    $$$i5$i = $53&1;
    $$$$i5$i = $70 ? -1 : $$$i5$i;
    $72 = $$$$i5$i;
   }
   $71 = ($72|0)==(0);
   __ZN5VNodeD2Ev($5);
   __ZN5VNodeD2Ev($4);
   if ($71) {
    __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($1,$2);
    __ZN5VNodeC2ERKS_($0,$2);
    STACKTOP = sp;return;
   }
  }
 } while(0);
 $73 = ((($1)) + 96|0);
 $74 = load4($73);
 __emval_incref(($74|0));
 $75 = (__emval_new_cstring((2580|0))|0);
 $76 = (__emval_get_property(($74|0),($75|0))|0);
 __emval_decref(($75|0));
 __emval_decref(($74|0));
 $77 = (__Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($2)|0);
 __emval_decref(($77|0));
 __emval_incref(($76|0));
 $78 = (__Z9isDefinedN10emscripten3valE($76)|0);
 __emval_decref(($76|0));
 if ($78) {
  __emval_incref(($76|0));
  $79 = ((($2)) + 96|0);
  $80 = load4($79);
  $81 = $80;
  __emval_incref(($80|0));
  $82 = load4($73);
  __emval_incref(($82|0));
  $83 = (__emval_new_cstring((2591|0))|0);
  $84 = (__emval_get_property(($82|0),($83|0))|0);
  __emval_decref(($83|0));
  $85 = $84;
  $86 = load1(8744);
  $87 = ($86<<24>>24)==(0);
  if ($87) {
   store1(8744,1);
   $88 = (__emval_get_method_caller(3,(1852|0))|0);
   store4(8776,$88);
   $90 = $88;
  } else {
   $$pre$i = load4(8776);
   $90 = $$pre$i;
  }
  __emval_incref(($80|0));
  store4($3,$81);
  __emval_incref(($84|0));
  $89 = ((($3)) + 8|0);
  store4($89,$85);
  __emval_call_void_method(($90|0),($76|0),(2543|0),($3|0));
  __emval_decref(($84|0));
  __emval_decref(($82|0));
  __emval_decref(($80|0));
  __emval_decref(($76|0));
  __ZN5VNodeC2ERKS_($6,$1);
  $91 = ((($3)) + 4|0);
  $92 = (_malloc(112)|0);
  $93 = ($92|0)==(0|0);
  L30: do {
   if ($93) {
    while(1) {
     $94 = load4(9296);
     $95 = (($94) + 0)|0;
     store4(9296,$95);
     $96 = ($94|0)==(0);
     if ($96) {
      $$lcssa$i = 0;
      break L30;
     }
     $97 = $94;
     FUNCTION_TABLE_v[$97 & 3]();
     $98 = (_malloc(112)|0);
     $99 = ($98|0)==(0|0);
     if (!($99)) {
      $$lcssa$i = $98;
      break;
     }
    }
   } else {
    $$lcssa$i = $92;
   }
  } while(0);
  store4($91,$$lcssa$i);
  store4($3,$$lcssa$i);
  $100 = ((($$lcssa$i)) + 112|0);
  $101 = ((($3)) + 8|0);
  store4($101,$100);
  __ZN5VNodeC2ERKS_($$lcssa$i,$6);
  store4($91,$100);
  __ZN5VNodeD2Ev($6);
  store4($7,$76);
  __emval_incref(($76|0));
  __Z12removeVnodesN10emscripten3valERNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjj($7,$3,0,0);
  __emval_decref(($76|0));
  __ZN5VNodeD2Ev($$lcssa$i);
  _free($$lcssa$i);
 }
 __emval_decref(($76|0));
 __ZN5VNodeC2ERKS_($0,$2);
 STACKTOP = sp;return;
}
function __Z13patch_elementN10emscripten3valER5VNode($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i$i = 0, $$$i11$i = 0, $$$i19$i = 0, $$$i27$i = 0, $$$i3$i = 0, $$0$i$i = 0, $$0$i1$i = 0, $$0$i24$i = 0, $$018$i$i = 0, $$018$i22$i = 0, $$019$i$i = 0, $$019$i21$i = 0, $$lcssa$i$i = 0, $$lcssa$i17$i = 0, $$lcssa$i25$i = 0, $$lcssa$i33$i = 0, $$lcssa$i9$i = 0, $$pn$i$i = 0, $$pn$i23$i = 0, $$pre = 0;
 var $$pre$i = 0, $$pre17 = 0, $$pre18 = 0, $$pre52$i = 0, $$sroa$052$0$i = 0, $$sroa$speculated$i$i = 0, $$sroa$speculated$i14$i = 0, $$sroa$speculated$i27$i = 0, $$sroa$speculated$i3$i = 0, $$sroa$speculated$i40$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0;
 var $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0;
 var $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0;
 var $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0;
 var $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0;
 var $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0;
 var $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0;
 var $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0;
 var $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0;
 var $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0;
 var $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0;
 var $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0;
 var $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0;
 var $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0;
 var $344 = 0, $345 = 0, $346 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0;
 var $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0;
 var $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0;
 var $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i$i = 0, $phitmp$i$i$i = 0, $phitmp$i$i32$i = 0, $phitmp$i$i6$i = 0, $phitmp$i15$i = 0, $phitmp$i28$i = 0;
 var $phitmp$i4$i = 0, $phitmp$i41$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $3 = sp + 112|0;
 $4 = sp;
 $5 = load4($1);
 $6 = $5;
 __emval_incref(($5|0));
 $7 = ((($4)) + 36|0);
 $8 = ((($4)) + 40|0);
 store4($8,0);
 $9 = ((($4)) + 44|0);
 store4($9,0);
 $10 = ((($4)) + 40|0);
 ; store8($4,i64_const(0,0),4); store8($4+8|0,i64_const(0,0),4); store8($4+16|0,i64_const(0,0),4); store8($4+24|0,i64_const(0,0),4); store4($4+32|0,0,4);
 store4($7,$10);
 $11 = ((($4)) + 48|0);
 $12 = ((($4)) + 52|0);
 store4($12,0);
 $13 = ((($4)) + 56|0);
 store4($13,0);
 $14 = ((($4)) + 52|0);
 store4($11,$14);
 $15 = ((($4)) + 60|0);
 $16 = ((($4)) + 64|0);
 store4($16,0);
 $17 = ((($4)) + 68|0);
 store4($17,0);
 $18 = ((($4)) + 64|0);
 store4($15,$18);
 $19 = ((($4)) + 72|0);
 ; store8($19,i64_const(0,0),4); store8($19+8|0,i64_const(0,0),4); store8($19+16|0,i64_const(0,0),4);
 $20 = ((($4)) + 96|0);
 store4($20,(1));
 $21 = ((($4)) + 100|0);
 store4($21,0);
 $22 = ((($4)) + 104|0);
 store4($22,0);
 $23 = ((($4)) + 108|0);
 store4($23,0);
 $24 = ((($4)) + 96|0);
 __emval_incref(($5|0));
 $25 = load4($24);
 __emval_decref(($25|0));
 store4($24,$6);
 __emval_incref(($5|0));
 __Z7tagNameN10emscripten3valE($3,$5);
 $26 = ((($3)) + 11|0);
 $27 = load1($26);
 $28 = ($27<<24>>24)<(0);
 $29 = load4($3);
 $30 = $28 ? $29 : $3;
 $31 = ((($3)) + 4|0);
 $32 = load4($31);
 $33 = $27&255;
 $34 = $28 ? $32 : $33;
 $35 = ((($4)) + 11|0);
 $36 = load1($35);
 $37 = ($36<<24>>24)<(0);
 if ($37) {
  $38 = ((($4)) + 8|0);
  $39 = load4($38);
  $40 = $39 & 2147483647;
  $phitmp$i$i$i = (($40) + -1)|0;
  $41 = ((($4)) + 4|0);
  $42 = load4($41);
  $45 = $phitmp$i$i$i;$46 = $42;
 } else {
  $43 = $36&255;
  $45 = 10;$46 = $43;
 }
 $44 = (($45) - ($46))|0;
 $47 = ($44>>>0)<($34>>>0);
 if ($47) {
  $58 = (($34) - ($45))|0;
  $59 = (($58) + ($46))|0;
  $60 = (-18 - ($45))|0;
  $61 = ($60>>>0)<($59>>>0);
  if ($61) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $62 = load4($4);
  $63 = $37 ? $62 : $4;
  $64 = ($45>>>0)<(2147483623);
  if ($64) {
   $65 = (($46) + ($34))|0;
   $66 = $45 << 1;
   $67 = ($65>>>0)<($66>>>0);
   $$sroa$speculated$i$i = $67 ? $66 : $65;
   $68 = ($$sroa$speculated$i$i>>>0)<(11);
   $69 = (($$sroa$speculated$i$i) + 16)|0;
   $70 = $69 & -16;
   $phitmp$i$i = $68 ? 11 : $70;
   $72 = $phitmp$i$i;
  } else {
   $72 = -17;
  }
  $71 = ($72|0)==(0);
  $$$i$i = $71 ? 1 : $72;
  $73 = (_malloc($$$i$i)|0);
  $74 = ($73|0)==(0|0);
  L13: do {
   if ($74) {
    while(1) {
     $75 = load4(9296);
     $76 = (($75) + 0)|0;
     store4(9296,$76);
     $77 = ($75|0)==(0);
     if ($77) {
      $$lcssa$i$i = 0;
      break L13;
     }
     $78 = $75;
     FUNCTION_TABLE_v[$78 & 3]();
     $79 = (_malloc($$$i$i)|0);
     $80 = ($79|0)==(0|0);
     if (!($80)) {
      $$lcssa$i$i = $79;
      break;
     }
    }
   } else {
    $$lcssa$i$i = $73;
   }
  } while(0);
  $81 = ($46|0)==(0);
  if (!($81)) {
   _memcpy(($$lcssa$i$i|0),($63|0),($46|0))|0;
  }
  $82 = ($34|0)==(0);
  if (!($82)) {
   $83 = (($$lcssa$i$i) + ($46)|0);
   _memcpy(($83|0),($30|0),($34|0))|0;
  }
  $84 = ($45|0)==(10);
  if (!($84)) {
   _free($63);
  }
  store4($4,$$lcssa$i$i);
  $85 = $72 | -2147483648;
  $86 = ((($4)) + 8|0);
  store4($86,$85);
  $87 = (($46) + ($34))|0;
  $88 = ((($4)) + 4|0);
  store4($88,$87);
  $89 = (($$lcssa$i$i) + ($87)|0);
  store1($89,0);
  $$pre = load1($26);
  $91 = $$pre;
 } else {
  $48 = ($34|0)==(0);
  if ($48) {
   $91 = $27;
  } else {
   $49 = load4($4);
   $50 = $37 ? $49 : $4;
   $51 = (($50) + ($46)|0);
   _memcpy(($51|0),($30|0),($34|0))|0;
   $52 = (($46) + ($34))|0;
   $53 = load1($35);
   $54 = ($53<<24>>24)<(0);
   if ($54) {
    $55 = ((($4)) + 4|0);
    store4($55,$52);
   } else {
    $56 = $52&255;
    store1($35,$56);
   }
   $57 = (($50) + ($52)|0);
   store1($57,0);
   $91 = $27;
  }
 }
 $90 = ($91<<24>>24)<(0);
 if ($90) {
  $92 = load4($3);
  _free($92);
 }
 __emval_decref(($5|0));
 $93 = load1($35);
 $94 = ($93<<24>>24)<(0);
 $95 = load4($4);
 $96 = ((($4)) + 4|0);
 $97 = load4($96);
 $98 = (($95) + ($97)|0);
 $99 = $93&255;
 $100 = (($4) + ($99)|0);
 $101 = $94 ? $98 : $100;
 $102 = $94 ? $95 : $4;
 $103 = ($102|0)==($101|0);
 if (!($103)) {
  $$sroa$052$0$i = $102;
  while(1) {
   $104 = load1($$sroa$052$0$i);
   $105 = $104 << 24 >> 24;
   $106 = (($105) + -65)|0;
   $107 = ($106>>>0)<(26);
   $108 = $105 | 32;
   $$0$i$i = $107 ? $108 : $105;
   $109 = $$0$i$i&255;
   store1($$sroa$052$0$i,$109);
   $110 = ((($$sroa$052$0$i)) + 1|0);
   $111 = ($110|0)==($101|0);
   if ($111) {
    break;
   } else {
    $$sroa$052$0$i = $110;
   }
  }
 }
 $112 = (__emval_new_cstring((8619|0))|0);
 $113 = (__emval_get_property(($5|0),($112|0))|0);
 __emval_decref(($112|0));
 $114 = (__Z9isDefinedN10emscripten3valE($113)|0);
 __emval_decref(($113|0));
 if ($114) {
  $115 = load1($35);
  $116 = ($115<<24>>24)<(0);
  if ($116) {
   $118 = ((($4)) + 8|0);
   $119 = load4($118);
   $120 = $119 & 2147483647;
   $121 = (($120) + -1)|0;
   $122 = ((($4)) + 4|0);
   $123 = load4($122);
   $$018$i$i = $123;$$019$i$i = $121;
  } else {
   $117 = $115&255;
   $$018$i$i = $117;$$019$i$i = 10;
  }
  $124 = ($$018$i$i|0)==($$019$i$i|0);
  do {
   if ($124) {
    $125 = load4($4);
    $126 = $116 ? $125 : $4;
    $127 = ($$019$i$i>>>0)<(2147483623);
    if ($127) {
     $128 = (($$019$i$i) + 1)|0;
     $129 = $$019$i$i << 1;
     $130 = ($128>>>0)<($129>>>0);
     $$sroa$speculated$i3$i = $130 ? $129 : $128;
     $131 = ($$sroa$speculated$i3$i>>>0)<(11);
     $132 = (($$sroa$speculated$i3$i) + 16)|0;
     $133 = $132 & -16;
     $phitmp$i4$i = $131 ? 11 : $133;
     $135 = $phitmp$i4$i;
    } else {
     $135 = -17;
    }
    $134 = ($135|0)==(0);
    $$$i3$i = $134 ? 1 : $135;
    $136 = (_malloc($$$i3$i)|0);
    $137 = ($136|0)==(0|0);
    L52: do {
     if ($137) {
      while(1) {
       $138 = load4(9296);
       $139 = (($138) + 0)|0;
       store4(9296,$139);
       $140 = ($138|0)==(0);
       if ($140) {
        $$lcssa$i9$i = 0;
        break L52;
       }
       $141 = $138;
       FUNCTION_TABLE_v[$141 & 3]();
       $142 = (_malloc($$$i3$i)|0);
       $143 = ($142|0)==(0|0);
       if (!($143)) {
        $$lcssa$i9$i = $142;
        break;
       }
      }
     } else {
      $$lcssa$i9$i = $136;
     }
    } while(0);
    $144 = ($$019$i$i|0)==(0);
    if ($144) {
     label = 40;
    } else {
     _memcpy(($$lcssa$i9$i|0),($126|0),($$019$i$i|0))|0;
     $145 = ($$019$i$i|0)==(10);
     if (!($145)) {
      label = 40;
     }
    }
    if ((label|0) == 40) {
     _free($126);
    }
    store4($4,$$lcssa$i9$i);
    $146 = $135 | -2147483648;
    $147 = ((($4)) + 8|0);
    store4($147,$146);
    $345 = $$lcssa$i9$i;
    label = 45;
   } else {
    if ($116) {
     $$pre$i = load4($4);
     $345 = $$pre$i;
     label = 45;
     break;
    } else {
     $148 = (($$018$i$i) + 1)|0;
     $149 = $148&255;
     store1($35,$149);
     $$pn$i$i = $4;
     break;
    }
   }
  } while(0);
  if ((label|0) == 45) {
   $150 = (($$018$i$i) + 1)|0;
   $151 = ((($4)) + 4|0);
   store4($151,$150);
   $$pn$i$i = $345;
  }
  $$0$i1$i = (($$pn$i$i) + ($$018$i$i)|0);
  store1($$0$i1$i,35);
  $152 = ((($$0$i1$i)) + 1|0);
  store1($152,0);
  $153 = (__emval_new_cstring((8619|0))|0);
  $154 = (__emval_get_property(($5|0),($153|0))|0);
  __emval_decref(($153|0));
  __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($3,$154);
  $155 = ((($3)) + 11|0);
  $156 = load1($155);
  $157 = ($156<<24>>24)<(0);
  $158 = load4($3);
  $159 = $157 ? $158 : $3;
  $160 = ((($3)) + 4|0);
  $161 = load4($160);
  $162 = $156&255;
  $163 = $157 ? $161 : $162;
  $164 = load1($35);
  $165 = ($164<<24>>24)<(0);
  if ($165) {
   $166 = ((($4)) + 8|0);
   $167 = load4($166);
   $168 = $167 & 2147483647;
   $phitmp$i$i6$i = (($168) + -1)|0;
   $169 = ((($4)) + 4|0);
   $170 = load4($169);
   $173 = $phitmp$i$i6$i;$174 = $170;
  } else {
   $171 = $164&255;
   $173 = 10;$174 = $171;
  }
  $172 = (($173) - ($174))|0;
  $175 = ($172>>>0)<($163>>>0);
  if ($175) {
   $186 = (($163) - ($173))|0;
   $187 = (($186) + ($174))|0;
   $188 = (-18 - ($173))|0;
   $189 = ($188>>>0)<($187>>>0);
   if ($189) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $190 = load4($4);
   $191 = $165 ? $190 : $4;
   $192 = ($173>>>0)<(2147483623);
   if ($192) {
    $193 = (($174) + ($163))|0;
    $194 = $173 << 1;
    $195 = ($193>>>0)<($194>>>0);
    $$sroa$speculated$i14$i = $195 ? $194 : $193;
    $196 = ($$sroa$speculated$i14$i>>>0)<(11);
    $197 = (($$sroa$speculated$i14$i) + 16)|0;
    $198 = $197 & -16;
    $phitmp$i15$i = $196 ? 11 : $198;
    $200 = $phitmp$i15$i;
   } else {
    $200 = -17;
   }
   $199 = ($200|0)==(0);
   $$$i11$i = $199 ? 1 : $200;
   $201 = (_malloc($$$i11$i)|0);
   $202 = ($201|0)==(0|0);
   L81: do {
    if ($202) {
     while(1) {
      $203 = load4(9296);
      $204 = (($203) + 0)|0;
      store4(9296,$204);
      $205 = ($203|0)==(0);
      if ($205) {
       $$lcssa$i17$i = 0;
       break L81;
      }
      $206 = $203;
      FUNCTION_TABLE_v[$206 & 3]();
      $207 = (_malloc($$$i11$i)|0);
      $208 = ($207|0)==(0|0);
      if (!($208)) {
       $$lcssa$i17$i = $207;
       break;
      }
     }
    } else {
     $$lcssa$i17$i = $201;
    }
   } while(0);
   $209 = ($174|0)==(0);
   if (!($209)) {
    _memcpy(($$lcssa$i17$i|0),($191|0),($174|0))|0;
   }
   $210 = ($163|0)==(0);
   if (!($210)) {
    $211 = (($$lcssa$i17$i) + ($174)|0);
    _memcpy(($211|0),($159|0),($163|0))|0;
   }
   $212 = ($173|0)==(10);
   if (!($212)) {
    _free($191);
   }
   store4($4,$$lcssa$i17$i);
   $213 = $200 | -2147483648;
   $214 = ((($4)) + 8|0);
   store4($214,$213);
   $215 = (($174) + ($163))|0;
   $216 = ((($4)) + 4|0);
   store4($216,$215);
   $217 = (($$lcssa$i17$i) + ($215)|0);
   store1($217,0);
   $$pre17 = load1($155);
   $219 = $$pre17;
  } else {
   $176 = ($163|0)==(0);
   if ($176) {
    $219 = $156;
   } else {
    $177 = load4($4);
    $178 = $165 ? $177 : $4;
    $179 = (($178) + ($174)|0);
    _memcpy(($179|0),($159|0),($163|0))|0;
    $180 = (($174) + ($163))|0;
    $181 = load1($35);
    $182 = ($181<<24>>24)<(0);
    if ($182) {
     $183 = ((($4)) + 4|0);
     store4($183,$180);
    } else {
     $184 = $180&255;
     store1($35,$184);
    }
    $185 = (($178) + ($180)|0);
    store1($185,0);
    $219 = $156;
   }
  }
  $218 = ($219<<24>>24)<(0);
  if ($218) {
   $220 = load4($3);
   _free($220);
  }
  __emval_decref(($154|0));
 }
 $221 = (__emval_new_cstring((2836|0))|0);
 $222 = (__emval_get_property(($5|0),($221|0))|0);
 __emval_decref(($221|0));
 $223 = (__Z9isDefinedN10emscripten3valE($222)|0);
 __emval_decref(($222|0));
 if (!($223)) {
  __emval_decref(($5|0));
  __Z11patch_vnodeR5VNodeS0_($0,$4,$2);
  __ZN5VNodeD2Ev($4);
  STACKTOP = sp;return;
 }
 $224 = load1($35);
 $225 = ($224<<24>>24)<(0);
 if ($225) {
  $227 = ((($4)) + 8|0);
  $228 = load4($227);
  $229 = $228 & 2147483647;
  $230 = (($229) + -1)|0;
  $231 = ((($4)) + 4|0);
  $232 = load4($231);
  $$018$i22$i = $232;$$019$i21$i = $230;
 } else {
  $226 = $224&255;
  $$018$i22$i = $226;$$019$i21$i = 10;
 }
 $233 = ($$018$i22$i|0)==($$019$i21$i|0);
 do {
  if ($233) {
   $234 = load4($4);
   $235 = $225 ? $234 : $4;
   $236 = ($$019$i21$i>>>0)<(2147483623);
   if ($236) {
    $237 = (($$019$i21$i) + 1)|0;
    $238 = $$019$i21$i << 1;
    $239 = ($237>>>0)<($238>>>0);
    $$sroa$speculated$i27$i = $239 ? $238 : $237;
    $240 = ($$sroa$speculated$i27$i>>>0)<(11);
    $241 = (($$sroa$speculated$i27$i) + 16)|0;
    $242 = $241 & -16;
    $phitmp$i28$i = $240 ? 11 : $242;
    $244 = $phitmp$i28$i;
   } else {
    $244 = -17;
   }
   $243 = ($244|0)==(0);
   $$$i19$i = $243 ? 1 : $244;
   $245 = (_malloc($$$i19$i)|0);
   $246 = ($245|0)==(0|0);
   L118: do {
    if ($246) {
     while(1) {
      $247 = load4(9296);
      $248 = (($247) + 0)|0;
      store4(9296,$248);
      $249 = ($247|0)==(0);
      if ($249) {
       $$lcssa$i25$i = 0;
       break L118;
      }
      $250 = $247;
      FUNCTION_TABLE_v[$250 & 3]();
      $251 = (_malloc($$$i19$i)|0);
      $252 = ($251|0)==(0|0);
      if (!($252)) {
       $$lcssa$i25$i = $251;
       break;
      }
     }
    } else {
     $$lcssa$i25$i = $245;
    }
   } while(0);
   $253 = ($$019$i21$i|0)==(0);
   if ($253) {
    label = 84;
   } else {
    _memcpy(($$lcssa$i25$i|0),($235|0),($$019$i21$i|0))|0;
    $254 = ($$019$i21$i|0)==(10);
    if (!($254)) {
     label = 84;
    }
   }
   if ((label|0) == 84) {
    _free($235);
   }
   store4($4,$$lcssa$i25$i);
   $255 = $244 | -2147483648;
   $256 = ((($4)) + 8|0);
   store4($256,$255);
   $346 = $$lcssa$i25$i;
   label = 89;
  } else {
   if ($225) {
    $$pre52$i = load4($4);
    $346 = $$pre52$i;
    label = 89;
    break;
   } else {
    $257 = (($$018$i22$i) + 1)|0;
    $258 = $257&255;
    store1($35,$258);
    $$pn$i23$i = $4;
    break;
   }
  }
 } while(0);
 if ((label|0) == 89) {
  $259 = (($$018$i22$i) + 1)|0;
  $260 = ((($4)) + 4|0);
  store4($260,$259);
  $$pn$i23$i = $346;
 }
 $$0$i24$i = (($$pn$i23$i) + ($$018$i22$i)|0);
 store1($$0$i24$i,46);
 $261 = ((($$0$i24$i)) + 1|0);
 store1($261,0);
 $262 = (__emval_new_cstring((2836|0))|0);
 $263 = (__emval_get_property(($5|0),($262|0))|0);
 __emval_decref(($262|0));
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($3,$263);
 $264 = ((($3)) + 11|0);
 $265 = load1($264);
 $266 = ($265<<24>>24)<(0);
 $267 = load4($3);
 $268 = $266 ? $267 : $3;
 $269 = ((($3)) + 4|0);
 $270 = load4($269);
 $271 = $265&255;
 $272 = $266 ? $270 : $271;
 $273 = load1($35);
 $274 = ($273<<24>>24)<(0);
 if ($274) {
  $275 = ((($4)) + 8|0);
  $276 = load4($275);
  $277 = $276 & 2147483647;
  $phitmp$i$i32$i = (($277) + -1)|0;
  $278 = ((($4)) + 4|0);
  $279 = load4($278);
  $282 = $phitmp$i$i32$i;$283 = $279;
 } else {
  $280 = $273&255;
  $282 = 10;$283 = $280;
 }
 $281 = (($282) - ($283))|0;
 $284 = ($281>>>0)<($272>>>0);
 if ($284) {
  $295 = (($272) - ($282))|0;
  $296 = (($295) + ($283))|0;
  $297 = (-18 - ($282))|0;
  $298 = ($297>>>0)<($296>>>0);
  if ($298) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $299 = load4($4);
  $300 = $274 ? $299 : $4;
  $301 = ($282>>>0)<(2147483623);
  if ($301) {
   $302 = (($283) + ($272))|0;
   $303 = $282 << 1;
   $304 = ($302>>>0)<($303>>>0);
   $$sroa$speculated$i40$i = $304 ? $303 : $302;
   $305 = ($$sroa$speculated$i40$i>>>0)<(11);
   $306 = (($$sroa$speculated$i40$i) + 16)|0;
   $307 = $306 & -16;
   $phitmp$i41$i = $305 ? 11 : $307;
   $309 = $phitmp$i41$i;
  } else {
   $309 = -17;
  }
  $308 = ($309|0)==(0);
  $$$i27$i = $308 ? 1 : $309;
  $310 = (_malloc($$$i27$i)|0);
  $311 = ($310|0)==(0|0);
  L147: do {
   if ($311) {
    while(1) {
     $312 = load4(9296);
     $313 = (($312) + 0)|0;
     store4(9296,$313);
     $314 = ($312|0)==(0);
     if ($314) {
      $$lcssa$i33$i = 0;
      break L147;
     }
     $315 = $312;
     FUNCTION_TABLE_v[$315 & 3]();
     $316 = (_malloc($$$i27$i)|0);
     $317 = ($316|0)==(0|0);
     if (!($317)) {
      $$lcssa$i33$i = $316;
      break;
     }
    }
   } else {
    $$lcssa$i33$i = $310;
   }
  } while(0);
  $318 = ($283|0)==(0);
  if (!($318)) {
   _memcpy(($$lcssa$i33$i|0),($300|0),($283|0))|0;
  }
  $319 = ($272|0)==(0);
  if (!($319)) {
   $320 = (($$lcssa$i33$i) + ($283)|0);
   _memcpy(($320|0),($268|0),($272|0))|0;
  }
  $321 = ($282|0)==(10);
  if (!($321)) {
   _free($300);
  }
  store4($4,$$lcssa$i33$i);
  $322 = $309 | -2147483648;
  $323 = ((($4)) + 8|0);
  store4($323,$322);
  $324 = (($283) + ($272))|0;
  $325 = ((($4)) + 4|0);
  store4($325,$324);
  $326 = (($$lcssa$i33$i) + ($324)|0);
  store1($326,0);
  $$pre18 = load1($264);
  $328 = $$pre18;
 } else {
  $285 = ($272|0)==(0);
  if ($285) {
   $328 = $265;
  } else {
   $286 = load4($4);
   $287 = $274 ? $286 : $4;
   $288 = (($287) + ($283)|0);
   _memcpy(($288|0),($268|0),($272|0))|0;
   $289 = (($283) + ($272))|0;
   $290 = load1($35);
   $291 = ($290<<24>>24)<(0);
   if ($291) {
    $292 = ((($4)) + 4|0);
    store4($292,$289);
   } else {
    $293 = $289&255;
    store1($35,$293);
   }
   $294 = (($287) + ($289)|0);
   store1($294,0);
   $328 = $265;
  }
 }
 $327 = ($328<<24>>24)<(0);
 if ($327) {
  $329 = load4($3);
  _free($329);
 }
 __emval_decref(($263|0));
 $330 = load1($35);
 $331 = ($330<<24>>24)<(0);
 $332 = load4($4);
 $333 = ((($4)) + 4|0);
 $334 = load4($333);
 $335 = $330&255;
 $336 = $331 ? $332 : $4;
 $337 = $331 ? $334 : $335;
 $338 = (($336) + ($337)|0);
 $339 = ($337|0)==(0);
 if ($339) {
  __emval_decref(($5|0));
  __Z11patch_vnodeR5VNodeS0_($0,$4,$2);
  __ZN5VNodeD2Ev($4);
  STACKTOP = sp;return;
 } else {
  $341 = $336;
 }
 while(1) {
  $340 = load1($341);
  $342 = ($340<<24>>24)==(32);
  if ($342) {
   store1($341,46);
  }
  $343 = ((($341)) + 1|0);
  $344 = ($343|0)==($338|0);
  if ($344) {
   break;
  } else {
   $341 = $343;
  }
 }
 __emval_decref(($5|0));
 __Z11patch_vnodeR5VNodeS0_($0,$4,$2);
 __ZN5VNodeD2Ev($4);
 STACKTOP = sp;return;
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var $1 = 0, $10 = i64(), $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = i64(), $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 (___cxa_begin_catch(($0|0))|0);
 $1 = (_pthread_once((9288|0),(2|0))|0);
 $2 = ($1|0)==(0);
 if (!($2)) {
  _abort_message(8222,$vararg_buffer);
  // unreachable;
 }
 $3 = load4(9292);
 $4 = (_pthread_getspecific(($3|0))|0);
 $5 = ($4|0)==(0|0);
 if (!($5)) {
  $6 = load4($4);
  $7 = ($6|0)==(0|0);
  if (!($7)) {
   $8 = ((($6)) + 48|0);
   $9 = load8($8);
   $10 = i64_and($9,i64_const(4294967040,4294967295));
   $11 = i64_eq($10,i64_const(1126902528,1129074247));
   if ($11) {
    $12 = ((($6)) + 12|0);
    $13 = load4($12);
    __ZSt11__terminatePFvvE($13);
    // unreachable;
   }
  }
 }
 $14 = load4(2160);
 $15 = (($14) + 0)|0;
 store4(2160,$15);
 $16 = $14;
 __ZSt11__terminatePFvvE($16);
 // unreachable;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($0,$$01,$$03) {
 $0 = $0|0;
 $$01 = $$01|0;
 $$03 = $$03|0;
 var $$$i = 0, $$$i$i = 0, $$$i1 = 0, $$$i4 = 0, $$$i9$i = 0, $$0$i = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i$i$i24 = 0, $$0$i$i13 = 0, $$0$i$i22 = 0, $$0$i$i26 = 0, $$0$i10$i = 0, $$0$i15 = 0, $$0$i23 = 0, $$01318$i = 0, $$01318$i$i = 0, $$01417$i = 0, $$01417$i$i = 0, $$015$i = 0;
 var $$015$i$i = 0, $$016$i$i = 0, $$016$i3$i = 0, $$017$i$i = 0, $$017$i4$i = 0, $$019$i = 0, $$019$i$i = 0, $$041 = 0, $$05$i$i = 0, $$05$i$i29 = 0, $$2$lcssa = 0, $$lcssa$i = 0, $$lcssa$i$i = 0, $$lcssa$i10 = 0, $$lcssa$i15$i = 0, $$lcssa$i7$i = 0, $$pre$i$i = 0, $$pre$i$i16 = 0, $$sink$i = 0, $$sink$i$i = 0;
 var $$sroa$0$0 = 0, $$sroa$0$06 = 0, $$sroa$0$1 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0, $$sroa$speculated$i11 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0;
 var $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0;
 var $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0;
 var $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0;
 var $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0;
 var $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0;
 var $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0;
 var $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0;
 var $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0;
 var $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0;
 var $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0;
 var $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0;
 var $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0;
 var $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0;
 var $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0;
 var $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0;
 var $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $phitmp$i$i4 = 0, $phitmp$i12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 8|0);
 $2 = load4($1);
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $$sroa$0$1 = $$01;
  } else {
   $4 = load4($0);
   $5 = ((($0)) + 4|0);
   store4($0,$5);
   $6 = load4($5);
   $7 = ((($6)) + 8|0);
   store4($7,0);
   store4($5,0);
   store4($1,0);
   $8 = ((($4)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==(0|0);
   $$$i = $10 ? $4 : $9;
   $11 = ($$$i|0)==(0|0);
   if ($11) {
    $$sroa$0$1 = $$01;
   } else {
    $12 = $5;
    $13 = ((($0)) + 4|0);
    $$041 = $$$i;$$sroa$0$06 = $$01;$200 = $$01;
    L4: while(1) {
     $14 = ($$sroa$0$06|0)==($$03|0);
     if ($14) {
      label = 5;
      break;
     }
     $18 = ((($$041)) + 16|0);
     $19 = ((($$sroa$0$06)) + 16|0);
     $20 = ($$041|0)==($$sroa$0$06|0);
     do {
      if (!($20)) {
       $21 = ((($19)) + 11|0);
       $22 = load1($21);
       $23 = ($22<<24>>24)<(0);
       $24 = load4($19);
       $25 = $23 ? $24 : $19;
       $26 = ((($$sroa$0$06)) + 20|0);
       $27 = load4($26);
       $28 = $22&255;
       $29 = $23 ? $27 : $28;
       $30 = ((($18)) + 11|0);
       $31 = load1($30);
       $32 = ($31<<24>>24)<(0);
       if ($32) {
        $33 = ((($$041)) + 24|0);
        $34 = load4($33);
        $35 = $34 & 2147483647;
        $phitmp$i$i = (($35) + -1)|0;
        $37 = $phitmp$i$i;
       } else {
        $37 = 10;
       }
       $36 = ($29>>>0)>($37>>>0);
       do {
        if ($36) {
         $46 = (($29) - ($37))|0;
         $47 = (-18 - ($37))|0;
         $48 = ($47>>>0)<($46>>>0);
         if ($48) {
          label = 19;
          break L4;
         }
         if ($32) {
          $49 = load4($18);
          $68 = $49;
         } else {
          $68 = $18;
         }
         $50 = ($37>>>0)<(2147483623);
         if ($50) {
          $51 = $37 << 1;
          $52 = ($29>>>0)<($51>>>0);
          $$sroa$speculated$i = $52 ? $51 : $29;
          $53 = ($$sroa$speculated$i>>>0)<(11);
          $54 = (($$sroa$speculated$i) + 16)|0;
          $55 = $54 & -16;
          $phitmp$i = $53 ? 11 : $55;
          $57 = $phitmp$i;
         } else {
          $57 = -17;
         }
         $56 = ($57|0)==(0);
         $$$i1 = $56 ? 1 : $57;
         $58 = (_malloc($$$i1)|0);
         $59 = ($58|0)==(0|0);
         L22: do {
          if ($59) {
           while(1) {
            $60 = load4(9296);
            $61 = (($60) + 0)|0;
            store4(9296,$61);
            $62 = ($60|0)==(0);
            if ($62) {
             $$lcssa$i = 0;
             break L22;
            }
            $63 = $60;
            FUNCTION_TABLE_v[$63 & 3]();
            $64 = (_malloc($$$i1)|0);
            $65 = ($64|0)==(0|0);
            if (!($65)) {
             $$lcssa$i = $64;
             break;
            }
           }
          } else {
           $$lcssa$i = $58;
          }
         } while(0);
         $66 = ($29|0)==(0);
         if (!($66)) {
          _memcpy(($$lcssa$i|0),($25|0),($29|0))|0;
         }
         $67 = ($37|0)==(10);
         if (!($67)) {
          _free($68);
         }
         store4($18,$$lcssa$i);
         $69 = $57 | -2147483648;
         $70 = ((($$041)) + 24|0);
         store4($70,$69);
         $71 = ((($$041)) + 20|0);
         store4($71,$29);
         $72 = (($$lcssa$i) + ($29)|0);
         store1($72,0);
        } else {
         if ($32) {
          $38 = load4($18);
          $40 = $38;
         } else {
          $40 = $18;
         }
         $39 = ($29|0)==(0);
         if (!($39)) {
          _memmove(($40|0),($25|0),($29|0))|0;
         }
         $41 = (($40) + ($29)|0);
         store1($41,0);
         $42 = load1($30);
         $43 = ($42<<24>>24)<(0);
         if ($43) {
          $44 = ((($$041)) + 20|0);
          store4($44,$29);
          break;
         } else {
          $45 = $29&255;
          store1($30,$45);
          break;
         }
        }
       } while(0);
       $73 = ((($$041)) + 28|0);
       $74 = ((($$sroa$0$06)) + 28|0);
       $75 = ((($74)) + 11|0);
       $76 = load1($75);
       $77 = ($76<<24>>24)<(0);
       $78 = load4($74);
       $79 = $77 ? $78 : $74;
       $80 = ((($$sroa$0$06)) + 32|0);
       $81 = load4($80);
       $82 = $76&255;
       $83 = $77 ? $81 : $82;
       $84 = ((($73)) + 11|0);
       $85 = load1($84);
       $86 = ($85<<24>>24)<(0);
       if ($86) {
        $87 = ((($$041)) + 36|0);
        $88 = load4($87);
        $89 = $88 & 2147483647;
        $phitmp$i$i4 = (($89) + -1)|0;
        $91 = $phitmp$i$i4;
       } else {
        $91 = 10;
       }
       $90 = ($83>>>0)>($91>>>0);
       if (!($90)) {
        if ($86) {
         $92 = load4($73);
         $94 = $92;
        } else {
         $94 = $73;
        }
        $93 = ($83|0)==(0);
        if (!($93)) {
         _memmove(($94|0),($79|0),($83|0))|0;
        }
        $95 = (($94) + ($83)|0);
        store1($95,0);
        $96 = load1($84);
        $97 = ($96<<24>>24)<(0);
        if ($97) {
         $98 = ((($$041)) + 32|0);
         store4($98,$83);
         break;
        } else {
         $99 = $83&255;
         store1($84,$99);
         break;
        }
       }
       $100 = (($83) - ($91))|0;
       $101 = (-18 - ($91))|0;
       $102 = ($101>>>0)<($100>>>0);
       if ($102) {
        label = 45;
        break L4;
       }
       if ($86) {
        $103 = load4($73);
        $122 = $103;
       } else {
        $122 = $73;
       }
       $104 = ($91>>>0)<(2147483623);
       if ($104) {
        $105 = $91 << 1;
        $106 = ($83>>>0)<($105>>>0);
        $$sroa$speculated$i11 = $106 ? $105 : $83;
        $107 = ($$sroa$speculated$i11>>>0)<(11);
        $108 = (($$sroa$speculated$i11) + 16)|0;
        $109 = $108 & -16;
        $phitmp$i12 = $107 ? 11 : $109;
        $111 = $phitmp$i12;
       } else {
        $111 = -17;
       }
       $110 = ($111|0)==(0);
       $$$i4 = $110 ? 1 : $111;
       $112 = (_malloc($$$i4)|0);
       $113 = ($112|0)==(0|0);
       L69: do {
        if ($113) {
         while(1) {
          $114 = load4(9296);
          $115 = (($114) + 0)|0;
          store4(9296,$115);
          $116 = ($114|0)==(0);
          if ($116) {
           $$lcssa$i10 = 0;
           break L69;
          }
          $117 = $114;
          FUNCTION_TABLE_v[$117 & 3]();
          $118 = (_malloc($$$i4)|0);
          $119 = ($118|0)==(0|0);
          if (!($119)) {
           $$lcssa$i10 = $118;
           break;
          }
         }
        } else {
         $$lcssa$i10 = $112;
        }
       } while(0);
       $120 = ($83|0)==(0);
       if (!($120)) {
        _memcpy(($$lcssa$i10|0),($79|0),($83|0))|0;
       }
       $121 = ($91|0)==(10);
       if (!($121)) {
        _free($122);
       }
       store4($73,$$lcssa$i10);
       $123 = $111 | -2147483648;
       $124 = ((($$041)) + 36|0);
       store4($124,$123);
       $125 = ((($$041)) + 32|0);
       store4($125,$83);
       $126 = (($$lcssa$i10) + ($83)|0);
       store1($126,0);
      }
     } while(0);
     $127 = ((($$041)) + 8|0);
     $128 = load4($127);
     $129 = ($128|0)==(0|0);
     do {
      if ($129) {
       $$0$i = 0;
      } else {
       $130 = load4($128);
       $131 = ($130|0)==($$041|0);
       if ($131) {
        store4($128,0);
        $132 = ((($128)) + 4|0);
        $133 = load4($132);
        $134 = ($133|0)==(0|0);
        if ($134) {
         $$0$i = $128;
         break;
        } else {
         $$0$i10$i = $133;
        }
        while(1) {
         $135 = load4($$0$i10$i);
         $136 = ($135|0)==(0|0);
         if (!($136)) {
          $$0$i10$i = $135;
          continue;
         }
         $137 = ((($$0$i10$i)) + 4|0);
         $138 = load4($137);
         $139 = ($138|0)==(0|0);
         if ($139) {
          break;
         } else {
          $$0$i10$i = $138;
         }
        }
        $$0$i = $$0$i10$i;
        break;
       } else {
        $140 = ((($128)) + 4|0);
        store4($140,0);
        $141 = ($130|0)==(0|0);
        if ($141) {
         $$0$i = $128;
         break;
        } else {
         $$0$i$i22 = $130;
        }
        while(1) {
         $142 = load4($$0$i$i22);
         $143 = ($142|0)==(0|0);
         if (!($143)) {
          $$0$i$i22 = $142;
          continue;
         }
         $144 = ((($$0$i$i22)) + 4|0);
         $145 = load4($144);
         $146 = ($145|0)==(0|0);
         if ($146) {
          break;
         } else {
          $$0$i$i22 = $145;
         }
        }
        $$0$i = $$0$i$i22;
        break;
       }
      }
     } while(0);
     $147 = load4($5);
     $148 = ($147|0)==(0|0);
     do {
      if ($148) {
       $$015$i = $5;$$sroa$0$0 = $12;
      } else {
       $149 = ((($18)) + 11|0);
       $150 = load1($149);
       $151 = ($150<<24>>24)<(0);
       $152 = ((($$041)) + 20|0);
       $153 = load4($152);
       $154 = $150&255;
       $155 = $151 ? $153 : $154;
       $156 = load4($18);
       $157 = $151 ? $156 : $18;
       $$0$i23 = $147;
       while(1) {
        $158 = ((($$0$i23)) + 16|0);
        $159 = ((($158)) + 11|0);
        $160 = load1($159);
        $161 = ($160<<24>>24)<(0);
        $162 = ((($$0$i23)) + 20|0);
        $163 = load4($162);
        $164 = $160&255;
        $165 = $161 ? $163 : $164;
        $166 = ($165>>>0)<($155>>>0);
        $$sroa$speculated$i$i$i$i$i = $166 ? $165 : $155;
        $167 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
        L99: do {
         if ($167) {
          label = 76;
         } else {
          $168 = load4($158);
          $169 = $161 ? $168 : $158;
          $$01318$i = $157;$$01417$i = $$sroa$speculated$i$i$i$i$i;$$019$i = $169;
          while(1) {
           $170 = load1($$01318$i);
           $171 = load1($$019$i);
           $172 = ($170<<24>>24)==($171<<24>>24);
           if (!($172)) {
            break;
           }
           $173 = (($$01417$i) + -1)|0;
           $174 = ((($$01318$i)) + 1|0);
           $175 = ((($$019$i)) + 1|0);
           $176 = ($173|0)==(0);
           if ($176) {
            label = 76;
            break L99;
           } else {
            $$01318$i = $174;$$01417$i = $173;$$019$i = $175;
           }
          }
          $177 = $170&255;
          $178 = $171&255;
          $179 = (($177) - ($178))|0;
          $180 = ($179|0)==(0);
          if ($180) {
           label = 76;
          } else {
           $182 = ($179|0)<(0);
           if ($182) {
            label = 78;
           } else {
            label = 80;
           }
          }
         }
        } while(0);
        if ((label|0) == 76) {
         label = 0;
         $181 = ($155>>>0)<($165>>>0);
         if ($181) {
          label = 78;
         } else {
          label = 80;
         }
        }
        if ((label|0) == 78) {
         label = 0;
         $183 = load4($$0$i23);
         $184 = ($183|0)==(0|0);
         if ($184) {
          label = 79;
          break;
         } else {
          $$sink$i = $183;
         }
        }
        else if ((label|0) == 80) {
         label = 0;
         $186 = ((($$0$i23)) + 4|0);
         $187 = load4($186);
         $188 = ($187|0)==(0|0);
         if ($188) {
          label = 82;
          break;
         } else {
          $$sink$i = $187;
         }
        }
        $$0$i23 = $$sink$i;
       }
       if ((label|0) == 79) {
        label = 0;
        $185 = $$0$i23;
        $$015$i = $$0$i23;$$sroa$0$0 = $185;
        break;
       }
       else if ((label|0) == 82) {
        label = 0;
        $189 = $$0$i23;
        $$015$i = $186;$$sroa$0$0 = $189;
        break;
       }
      }
     } while(0);
     store4($$041,0);
     $190 = ((($$041)) + 4|0);
     store4($190,0);
     store4($127,$$sroa$0$0);
     store4($$015$i,$$041);
     $191 = load4($0);
     $192 = load4($191);
     $193 = ($192|0)==(0|0);
     if ($193) {
      $196 = $$041;
     } else {
      $194 = $192;
      store4($0,$194);
      $$pre$i$i = load4($$015$i);
      $196 = $$pre$i$i;
     }
     $195 = load4($13);
     __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($195,$196);
     $197 = load4($1);
     $198 = (($197) + 1)|0;
     store4($1,$198);
     $199 = ((($200)) + 4|0);
     $201 = load4($199);
     $202 = ($201|0)==(0|0);
     if ($202) {
      $$0$i$i26 = $200;
      while(1) {
       $205 = ((($$0$i$i26)) + 8|0);
       $206 = load4($205);
       $207 = load4($206);
       $208 = ($207|0)==($$0$i$i26|0);
       if ($208) {
        $$05$i$i29 = $206;
        break;
       } else {
        $$0$i$i26 = $206;
       }
      }
     } else {
      $$0$i$i$i24 = $201;
      while(1) {
       $203 = load4($$0$i$i$i24);
       $204 = ($203|0)==(0|0);
       if ($204) {
        $$05$i$i29 = $$0$i$i$i24;
        break;
       } else {
        $$0$i$i$i24 = $203;
       }
      }
     }
     $209 = ($$0$i|0)==(0|0);
     if ($209) {
      $$sroa$0$1 = $$05$i$i29;
      break L1;
     } else {
      $$041 = $$0$i;$$sroa$0$06 = $$05$i$i29;$200 = $$05$i$i29;
     }
    }
    if ((label|0) == 5) {
     $15 = ((($$041)) + 8|0);
     $16 = load4($15);
     $17 = ($16|0)==(0|0);
     if ($17) {
      $$2$lcssa = $$041;
     } else {
      $211 = $16;
      while(1) {
       $210 = ((($211)) + 8|0);
       $212 = load4($210);
       $213 = ($212|0)==(0|0);
       if ($213) {
        break;
       } else {
        $211 = $212;
       }
      }
      $$2$lcssa = $211;
     }
     __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($$2$lcssa);
     $$sroa$0$1 = $$sroa$0$06;
     break;
    }
    else if ((label|0) == 19) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    else if ((label|0) == 45) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
   }
  }
 } while(0);
 $214 = ($$sroa$0$1|0)==($$03|0);
 if ($214) {
  return;
 }
 $215 = ((($0)) + 4|0);
 $216 = ((($0)) + 4|0);
 $218 = $$sroa$0$1;$334 = $$sroa$0$1;
 while(1) {
  $217 = ((($218)) + 16|0);
  $219 = (_malloc(40)|0);
  $220 = ($219|0)==(0|0);
  L140: do {
   if ($220) {
    while(1) {
     $221 = load4(9296);
     $222 = (($221) + 0)|0;
     store4(9296,$222);
     $223 = ($221|0)==(0);
     if ($223) {
      $$lcssa$i$i = 0;
      break L140;
     }
     $224 = $221;
     FUNCTION_TABLE_v[$224 & 3]();
     $225 = (_malloc(40)|0);
     $226 = ($225|0)==(0|0);
     if (!($226)) {
      $$lcssa$i$i = $225;
      break;
     }
    }
   } else {
    $$lcssa$i$i = $219;
   }
  } while(0);
  $227 = ((($$lcssa$i$i)) + 16|0);
  ; store8($227,i64_const(0,0),4); store4($227+8|0,0,4);
  $228 = ((($217)) + 11|0);
  $229 = load1($228);
  $230 = ($229<<24>>24)<(0);
  if ($230) {
   $231 = load4($217);
   $232 = ((($218)) + 20|0);
   $233 = load4($232);
   $234 = ($233>>>0)>(4294967279);
   if ($234) {
    label = 100;
    break;
   }
   $235 = ($233>>>0)<(11);
   if ($235) {
    $250 = $233&255;
    $251 = ((($$lcssa$i$i)) + 27|0);
    store1($251,$250);
    $252 = ($233|0)==(0);
    if ($252) {
     $$017$i$i = $227;
    } else {
     $$016$i$i = $227;
     label = 107;
    }
   } else {
    $236 = (($233) + 16)|0;
    $237 = $236 & -16;
    $238 = ($237|0)==(0);
    $$$i$i = $238 ? 1 : $237;
    $239 = (_malloc($$$i$i)|0);
    $240 = ($239|0)==(0|0);
    L151: do {
     if ($240) {
      while(1) {
       $241 = load4(9296);
       $242 = (($241) + 0)|0;
       store4(9296,$242);
       $243 = ($241|0)==(0);
       if ($243) {
        $$lcssa$i7$i = 0;
        break L151;
       }
       $244 = $241;
       FUNCTION_TABLE_v[$244 & 3]();
       $245 = (_malloc($$$i$i)|0);
       $246 = ($245|0)==(0|0);
       if (!($246)) {
        $$lcssa$i7$i = $245;
        break;
       }
      }
     } else {
      $$lcssa$i7$i = $239;
     }
    } while(0);
    store4($227,$$lcssa$i7$i);
    $247 = $237 | -2147483648;
    $248 = ((($$lcssa$i$i)) + 24|0);
    store4($248,$247);
    $249 = ((($$lcssa$i$i)) + 20|0);
    store4($249,$233);
    $$016$i$i = $$lcssa$i7$i;
    label = 107;
   }
   if ((label|0) == 107) {
    label = 0;
    _memcpy(($$016$i$i|0),($231|0),($233|0))|0;
    $$017$i$i = $$016$i$i;
   }
   $253 = (($$017$i$i) + ($233)|0);
   store1($253,0);
  } else {
   ; store8($227,load8($217,4),4); store4($227+8 | 0,load4($217+8 | 0,4),4);
  }
  $254 = ((($$lcssa$i$i)) + 28|0);
  $255 = ((($218)) + 28|0);
  ; store8($254,i64_const(0,0),4); store4($254+8|0,0,4);
  $256 = ((($255)) + 11|0);
  $257 = load1($256);
  $258 = ($257<<24>>24)<(0);
  if ($258) {
   $259 = load4($255);
   $260 = ((($218)) + 32|0);
   $261 = load4($260);
   $262 = ($261>>>0)>(4294967279);
   if ($262) {
    label = 112;
    break;
   }
   $263 = ($261>>>0)<(11);
   if ($263) {
    $278 = $261&255;
    $279 = ((($$lcssa$i$i)) + 39|0);
    store1($279,$278);
    $280 = ($261|0)==(0);
    if ($280) {
     $$017$i4$i = $254;
    } else {
     $$016$i3$i = $254;
     label = 119;
    }
   } else {
    $264 = (($261) + 16)|0;
    $265 = $264 & -16;
    $266 = ($265|0)==(0);
    $$$i9$i = $266 ? 1 : $265;
    $267 = (_malloc($$$i9$i)|0);
    $268 = ($267|0)==(0|0);
    L167: do {
     if ($268) {
      while(1) {
       $269 = load4(9296);
       $270 = (($269) + 0)|0;
       store4(9296,$270);
       $271 = ($269|0)==(0);
       if ($271) {
        $$lcssa$i15$i = 0;
        break L167;
       }
       $272 = $269;
       FUNCTION_TABLE_v[$272 & 3]();
       $273 = (_malloc($$$i9$i)|0);
       $274 = ($273|0)==(0|0);
       if (!($274)) {
        $$lcssa$i15$i = $273;
        break;
       }
      }
     } else {
      $$lcssa$i15$i = $267;
     }
    } while(0);
    store4($254,$$lcssa$i15$i);
    $275 = $265 | -2147483648;
    $276 = ((($$lcssa$i$i)) + 36|0);
    store4($276,$275);
    $277 = ((($$lcssa$i$i)) + 32|0);
    store4($277,$261);
    $$016$i3$i = $$lcssa$i15$i;
    label = 119;
   }
   if ((label|0) == 119) {
    label = 0;
    _memcpy(($$016$i3$i|0),($259|0),($261|0))|0;
    $$017$i4$i = $$016$i3$i;
   }
   $281 = (($$017$i4$i) + ($261)|0);
   store1($281,0);
  } else {
   ; store8($254,load8($255,4),4); store4($254+8 | 0,load4($255+8 | 0,4),4);
  }
  $282 = load4($215);
  $283 = ($282|0)==(0|0);
  do {
   if ($283) {
    $$0$i15 = $215;$$015$i$i = $215;
   } else {
    $284 = ((($$lcssa$i$i)) + 27|0);
    $285 = load1($284);
    $286 = ($285<<24>>24)<(0);
    $287 = ((($$lcssa$i$i)) + 20|0);
    $288 = load4($287);
    $289 = $285&255;
    $290 = $286 ? $288 : $289;
    $291 = load4($227);
    $292 = $286 ? $291 : $227;
    $$0$i$i13 = $282;
    while(1) {
     $293 = ((($$0$i$i13)) + 16|0);
     $294 = ((($293)) + 11|0);
     $295 = load1($294);
     $296 = ($295<<24>>24)<(0);
     $297 = ((($$0$i$i13)) + 20|0);
     $298 = load4($297);
     $299 = $295&255;
     $300 = $296 ? $298 : $299;
     $301 = ($300>>>0)<($290>>>0);
     $$sroa$speculated$i$i$i$i$i$i = $301 ? $300 : $290;
     $302 = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
     L181: do {
      if ($302) {
       label = 128;
      } else {
       $303 = load4($293);
       $304 = $296 ? $303 : $293;
       $$01318$i$i = $292;$$01417$i$i = $$sroa$speculated$i$i$i$i$i$i;$$019$i$i = $304;
       while(1) {
        $305 = load1($$01318$i$i);
        $306 = load1($$019$i$i);
        $307 = ($305<<24>>24)==($306<<24>>24);
        if (!($307)) {
         break;
        }
        $308 = (($$01417$i$i) + -1)|0;
        $309 = ((($$01318$i$i)) + 1|0);
        $310 = ((($$019$i$i)) + 1|0);
        $311 = ($308|0)==(0);
        if ($311) {
         label = 128;
         break L181;
        } else {
         $$01318$i$i = $309;$$01417$i$i = $308;$$019$i$i = $310;
        }
       }
       $312 = $305&255;
       $313 = $306&255;
       $314 = (($312) - ($313))|0;
       $315 = ($314|0)==(0);
       if ($315) {
        label = 128;
       } else {
        $317 = ($314|0)<(0);
        if ($317) {
         label = 130;
        } else {
         label = 132;
        }
       }
      }
     } while(0);
     if ((label|0) == 128) {
      label = 0;
      $316 = ($290>>>0)<($300>>>0);
      if ($316) {
       label = 130;
      } else {
       label = 132;
      }
     }
     if ((label|0) == 130) {
      label = 0;
      $318 = load4($$0$i$i13);
      $319 = ($318|0)==(0|0);
      if ($319) {
       label = 131;
       break;
      } else {
       $$sink$i$i = $318;
      }
     }
     else if ((label|0) == 132) {
      label = 0;
      $320 = ((($$0$i$i13)) + 4|0);
      $321 = load4($320);
      $322 = ($321|0)==(0|0);
      if ($322) {
       label = 134;
       break;
      } else {
       $$sink$i$i = $321;
      }
     }
     $$0$i$i13 = $$sink$i$i;
    }
    if ((label|0) == 131) {
     label = 0;
     $$0$i15 = $$0$i$i13;$$015$i$i = $$0$i$i13;
     break;
    }
    else if ((label|0) == 134) {
     label = 0;
     $$0$i15 = $$0$i$i13;$$015$i$i = $320;
     break;
    }
   }
  } while(0);
  store4($$lcssa$i$i,0);
  $323 = ((($$lcssa$i$i)) + 4|0);
  store4($323,0);
  $324 = ((($$lcssa$i$i)) + 8|0);
  store4($324,$$0$i15);
  store4($$015$i$i,$$lcssa$i$i);
  $325 = load4($0);
  $326 = load4($325);
  $327 = ($326|0)==(0|0);
  if ($327) {
   $330 = $$lcssa$i$i;
  } else {
   $328 = $326;
   store4($0,$328);
   $$pre$i$i16 = load4($$015$i$i);
   $330 = $$pre$i$i16;
  }
  $329 = load4($216);
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($329,$330);
  $331 = load4($1);
  $332 = (($331) + 1)|0;
  store4($1,$332);
  $333 = ((($334)) + 4|0);
  $335 = load4($333);
  $336 = ($335|0)==(0|0);
  if ($336) {
   $$0$i$i = $334;
   while(1) {
    $339 = ((($$0$i$i)) + 8|0);
    $340 = load4($339);
    $341 = load4($340);
    $342 = ($341|0)==($$0$i$i|0);
    if ($342) {
     $$05$i$i = $340;
     break;
    } else {
     $$0$i$i = $340;
    }
   }
  } else {
   $$0$i$i$i = $335;
   while(1) {
    $337 = load4($$0$i$i$i);
    $338 = ($337|0)==(0|0);
    if ($338) {
     $$05$i$i = $$0$i$i$i;
     break;
    } else {
     $$0$i$i$i = $337;
    }
   }
  }
  $343 = ($$05$i$i|0)==($$03|0);
  if ($343) {
   label = 141;
   break;
  } else {
   $218 = $$05$i$i;$334 = $$05$i$i;
  }
 }
 if ((label|0) == 100) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 112) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 141) {
  return;
 }
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = load4($0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($2);
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($4);
 $5 = ((($0)) + 28|0);
 $6 = ((($5)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 if ($8) {
  $9 = load4($5);
  _free($9);
 }
 $10 = ((($0)) + 16|0);
 $11 = ((($10)) + 11|0);
 $12 = load1($11);
 $13 = ($12<<24>>24)<(0);
 if (!($13)) {
  _free($0);
  return;
 }
 $14 = load4($10);
 _free($14);
 _free($0);
 return;
}
function __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$056 = 0, $$pre = 0, $$pre62 = 0, $$pre64 = 0, $$pre65 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==($0|0);
 $3 = ((($1)) + 12|0);
 $4 = $2&1;
 store1($3,$4);
 if ($2) {
  return;
 } else {
  $$056 = $1;
 }
 while(1) {
  $5 = ((($$056)) + 8|0);
  $6 = load4($5);
  $7 = ((($6)) + 12|0);
  $8 = load1($7);
  $9 = ($8<<24>>24)==(0);
  if (!($9)) {
   label = 37;
   break;
  }
  $10 = ((($6)) + 8|0);
  $11 = load4($10);
  $12 = load4($11);
  $13 = ($12|0)==($6|0);
  if ($13) {
   $14 = ((($11)) + 4|0);
   $15 = load4($14);
   $16 = ($15|0)==(0|0);
   if ($16) {
    label = 8;
    break;
   }
   $17 = ((($15)) + 12|0);
   $18 = load1($17);
   $19 = ($18<<24>>24)==(0);
   if (!($19)) {
    label = 8;
    break;
   }
   store1($7,1);
   $20 = ($11|0)==($0|0);
   $21 = ((($11)) + 12|0);
   $22 = $20&1;
   store1($21,$22);
   store1($17,1);
  } else {
   $54 = ($12|0)==(0|0);
   if ($54) {
    label = 24;
    break;
   }
   $55 = ((($12)) + 12|0);
   $56 = load1($55);
   $57 = ($56<<24>>24)==(0);
   if (!($57)) {
    label = 24;
    break;
   }
   store1($7,1);
   $58 = ($11|0)==($0|0);
   $59 = ((($11)) + 12|0);
   $60 = $58&1;
   store1($59,$60);
   store1($55,1);
  }
  $23 = ($11|0)==($0|0);
  if ($23) {
   label = 37;
   break;
  } else {
   $$056 = $11;
  }
 }
 if ((label|0) == 8) {
  $24 = load4($6);
  $25 = ($24|0)==($$056|0);
  if ($25) {
   $39 = $6;$41 = $11;
  } else {
   $26 = $11;
   $27 = ((($6)) + 4|0);
   $28 = load4($27);
   $29 = load4($28);
   store4($27,$29);
   $30 = ($29|0)==(0|0);
   if ($30) {
    $33 = $26;
   } else {
    $31 = ((($29)) + 8|0);
    store4($31,$6);
    $$pre64 = load4($10);
    $33 = $$pre64;
   }
   $32 = ((($28)) + 8|0);
   store4($32,$33);
   $34 = load4($10);
   $35 = load4($34);
   $36 = ($35|0)==($6|0);
   if ($36) {
    store4($34,$28);
   } else {
    $37 = ((($34)) + 4|0);
    store4($37,$28);
   }
   store4($28,$6);
   store4($10,$28);
   $$pre65 = load4($32);
   $39 = $28;$41 = $$pre65;
  }
  $38 = ((($39)) + 12|0);
  store1($38,1);
  $40 = ((($41)) + 12|0);
  store1($40,0);
  $42 = load4($41);
  $43 = ((($42)) + 4|0);
  $44 = load4($43);
  store4($41,$44);
  $45 = ($44|0)==(0|0);
  if (!($45)) {
   $46 = ((($44)) + 8|0);
   store4($46,$41);
  }
  $47 = ((($41)) + 8|0);
  $48 = load4($47);
  $49 = ((($42)) + 8|0);
  store4($49,$48);
  $50 = load4($47);
  $51 = load4($50);
  $52 = ($51|0)==($41|0);
  if ($52) {
   store4($50,$42);
  } else {
   $53 = ((($50)) + 4|0);
   store4($53,$42);
  }
  store4($43,$41);
  store4($47,$42);
  return;
 }
 else if ((label|0) == 24) {
  $61 = load4($6);
  $62 = ($61|0)==($$056|0);
  if ($62) {
   $63 = $11;
   $64 = ((($$056)) + 4|0);
   $65 = load4($64);
   store4($6,$65);
   $66 = ($65|0)==(0|0);
   if ($66) {
    $68 = $63;
   } else {
    $67 = ((($65)) + 8|0);
    store4($67,$6);
    $$pre = load4($10);
    $68 = $$pre;
   }
   store4($5,$68);
   $69 = load4($10);
   $70 = load4($69);
   $71 = ($70|0)==($6|0);
   if ($71) {
    store4($69,$$056);
   } else {
    $72 = ((($69)) + 4|0);
    store4($72,$$056);
   }
   store4($64,$6);
   store4($10,$$056);
   $$pre62 = load4($5);
   $74 = $$056;$76 = $$pre62;
  } else {
   $74 = $6;$76 = $11;
  }
  $73 = ((($74)) + 12|0);
  store1($73,1);
  $75 = ((($76)) + 12|0);
  store1($75,0);
  $77 = ((($76)) + 4|0);
  $78 = load4($77);
  $79 = load4($78);
  store4($77,$79);
  $80 = ($79|0)==(0|0);
  if (!($80)) {
   $81 = ((($79)) + 8|0);
   store4($81,$76);
  }
  $82 = ((($76)) + 8|0);
  $83 = load4($82);
  $84 = ((($78)) + 8|0);
  store4($84,$83);
  $85 = load4($82);
  $86 = load4($85);
  $87 = ($86|0)==($76|0);
  if ($87) {
   store4($85,$78);
  } else {
   $88 = ((($85)) + 4|0);
   store4($88,$78);
  }
  store4($78,$76);
  store4($82,$78);
  return;
 }
 else if ((label|0) == 37) {
  return;
 }
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($0,$$01,$$03) {
 $0 = $0|0;
 $$01 = $$01|0;
 $$03 = $$03|0;
 var $$$i = 0, $$$i$i = 0, $$$i1 = 0, $$0$i = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i$i$i22 = 0, $$0$i$i21 = 0, $$0$i$i24 = 0, $$0$i$i5 = 0, $$0$i10$i = 0, $$0$i29 = 0, $$0$i7 = 0, $$01318$i = 0, $$01318$i$i = 0, $$01417$i = 0, $$01417$i$i = 0, $$015$i = 0, $$015$i$i = 0, $$016$i$i = 0;
 var $$017$i$i = 0, $$019$i = 0, $$019$i$i = 0, $$040 = 0, $$05$i$i = 0, $$05$i$i27 = 0, $$2$lcssa = 0, $$lcssa$i = 0, $$lcssa$i$i = 0, $$lcssa$i7$i = 0, $$pre$i$i = 0, $$pre$i$i8 = 0, $$sink$i = 0, $$sink$i$i = 0, $$sroa$0$0 = 0, $$sroa$0$06 = 0, $$sroa$0$1 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0;
 var $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0;
 var $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0;
 var $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0;
 var $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 8|0);
 $2 = load4($1);
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $$sroa$0$1 = $$01;
  } else {
   $4 = load4($0);
   $5 = ((($0)) + 4|0);
   store4($0,$5);
   $6 = load4($5);
   $7 = ((($6)) + 8|0);
   store4($7,0);
   store4($5,0);
   store4($1,0);
   $8 = ((($4)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==(0|0);
   $$$i = $10 ? $4 : $9;
   $11 = ($$$i|0)==(0|0);
   if ($11) {
    $$sroa$0$1 = $$01;
   } else {
    $12 = $5;
    $13 = ((($0)) + 4|0);
    $$040 = $$$i;$$sroa$0$06 = $$01;$149 = $$01;
    L4: while(1) {
     $14 = ($$sroa$0$06|0)==($$03|0);
     if ($14) {
      break;
     }
     $18 = ((($$040)) + 16|0);
     $19 = ((($$sroa$0$06)) + 16|0);
     $20 = ($$040|0)==($$sroa$0$06|0);
     do {
      if (!($20)) {
       $21 = ((($19)) + 11|0);
       $22 = load1($21);
       $23 = ($22<<24>>24)<(0);
       $24 = load4($19);
       $25 = $23 ? $24 : $19;
       $26 = ((($$sroa$0$06)) + 20|0);
       $27 = load4($26);
       $28 = $22&255;
       $29 = $23 ? $27 : $28;
       $30 = ((($18)) + 11|0);
       $31 = load1($30);
       $32 = ($31<<24>>24)<(0);
       if ($32) {
        $33 = ((($$040)) + 24|0);
        $34 = load4($33);
        $35 = $34 & 2147483647;
        $phitmp$i$i = (($35) + -1)|0;
        $37 = $phitmp$i$i;
       } else {
        $37 = 10;
       }
       $36 = ($29>>>0)>($37>>>0);
       if (!($36)) {
        if ($32) {
         $38 = load4($18);
         $40 = $38;
        } else {
         $40 = $18;
        }
        $39 = ($29|0)==(0);
        if (!($39)) {
         _memmove(($40|0),($25|0),($29|0))|0;
        }
        $41 = (($40) + ($29)|0);
        store1($41,0);
        $42 = load1($30);
        $43 = ($42<<24>>24)<(0);
        if ($43) {
         $44 = ((($$040)) + 20|0);
         store4($44,$29);
         break;
        } else {
         $45 = $29&255;
         store1($30,$45);
         break;
        }
       }
       $46 = (($29) - ($37))|0;
       $47 = (-18 - ($37))|0;
       $48 = ($47>>>0)<($46>>>0);
       if ($48) {
        label = 19;
        break L4;
       }
       if ($32) {
        $49 = load4($18);
        $68 = $49;
       } else {
        $68 = $18;
       }
       $50 = ($37>>>0)<(2147483623);
       if ($50) {
        $51 = $37 << 1;
        $52 = ($29>>>0)<($51>>>0);
        $$sroa$speculated$i = $52 ? $51 : $29;
        $53 = ($$sroa$speculated$i>>>0)<(11);
        $54 = (($$sroa$speculated$i) + 16)|0;
        $55 = $54 & -16;
        $phitmp$i = $53 ? 11 : $55;
        $57 = $phitmp$i;
       } else {
        $57 = -17;
       }
       $56 = ($57|0)==(0);
       $$$i1 = $56 ? 1 : $57;
       $58 = (_malloc($$$i1)|0);
       $59 = ($58|0)==(0|0);
       L33: do {
        if ($59) {
         while(1) {
          $60 = load4(9296);
          $61 = (($60) + 0)|0;
          store4(9296,$61);
          $62 = ($60|0)==(0);
          if ($62) {
           $$lcssa$i = 0;
           break L33;
          }
          $63 = $60;
          FUNCTION_TABLE_v[$63 & 3]();
          $64 = (_malloc($$$i1)|0);
          $65 = ($64|0)==(0|0);
          if (!($65)) {
           $$lcssa$i = $64;
           break;
          }
         }
        } else {
         $$lcssa$i = $58;
        }
       } while(0);
       $66 = ($29|0)==(0);
       if (!($66)) {
        _memcpy(($$lcssa$i|0),($25|0),($29|0))|0;
       }
       $67 = ($37|0)==(10);
       if (!($67)) {
        _free($68);
       }
       store4($18,$$lcssa$i);
       $69 = $57 | -2147483648;
       $70 = ((($$040)) + 24|0);
       store4($70,$69);
       $71 = ((($$040)) + 20|0);
       store4($71,$29);
       $72 = (($$lcssa$i) + ($29)|0);
       store1($72,0);
      }
     } while(0);
     $73 = ((($$sroa$0$06)) + 28|0);
     $74 = load1($73);
     $75 = ((($$040)) + 28|0);
     store1($75,$74);
     $76 = ((($$040)) + 8|0);
     $77 = load4($76);
     $78 = ($77|0)==(0|0);
     do {
      if ($78) {
       $$0$i = 0;
      } else {
       $79 = load4($77);
       $80 = ($79|0)==($$040|0);
       if ($80) {
        store4($77,0);
        $81 = ((($77)) + 4|0);
        $82 = load4($81);
        $83 = ($82|0)==(0|0);
        if ($83) {
         $$0$i = $77;
         break;
        } else {
         $$0$i10$i = $82;
        }
        while(1) {
         $84 = load4($$0$i10$i);
         $85 = ($84|0)==(0|0);
         if (!($85)) {
          $$0$i10$i = $84;
          continue;
         }
         $86 = ((($$0$i10$i)) + 4|0);
         $87 = load4($86);
         $88 = ($87|0)==(0|0);
         if ($88) {
          break;
         } else {
          $$0$i10$i = $87;
         }
        }
        $$0$i = $$0$i10$i;
        break;
       } else {
        $89 = ((($77)) + 4|0);
        store4($89,0);
        $90 = ($79|0)==(0|0);
        if ($90) {
         $$0$i = $77;
         break;
        } else {
         $$0$i$i21 = $79;
        }
        while(1) {
         $91 = load4($$0$i$i21);
         $92 = ($91|0)==(0|0);
         if (!($92)) {
          $$0$i$i21 = $91;
          continue;
         }
         $93 = ((($$0$i$i21)) + 4|0);
         $94 = load4($93);
         $95 = ($94|0)==(0|0);
         if ($95) {
          break;
         } else {
          $$0$i$i21 = $94;
         }
        }
        $$0$i = $$0$i$i21;
        break;
       }
      }
     } while(0);
     $96 = load4($5);
     $97 = ($96|0)==(0|0);
     do {
      if ($97) {
       $$015$i = $5;$$sroa$0$0 = $12;
      } else {
       $98 = ((($18)) + 11|0);
       $99 = load1($98);
       $100 = ($99<<24>>24)<(0);
       $101 = ((($$040)) + 20|0);
       $102 = load4($101);
       $103 = $99&255;
       $104 = $100 ? $102 : $103;
       $105 = load4($18);
       $106 = $100 ? $105 : $18;
       $$0$i29 = $96;
       while(1) {
        $107 = ((($$0$i29)) + 16|0);
        $108 = ((($107)) + 11|0);
        $109 = load1($108);
        $110 = ($109<<24>>24)<(0);
        $111 = ((($$0$i29)) + 20|0);
        $112 = load4($111);
        $113 = $109&255;
        $114 = $110 ? $112 : $113;
        $115 = ($114>>>0)<($104>>>0);
        $$sroa$speculated$i$i$i$i$i = $115 ? $114 : $104;
        $116 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
        L63: do {
         if ($116) {
          label = 50;
         } else {
          $117 = load4($107);
          $118 = $110 ? $117 : $107;
          $$01318$i = $106;$$01417$i = $$sroa$speculated$i$i$i$i$i;$$019$i = $118;
          while(1) {
           $119 = load1($$01318$i);
           $120 = load1($$019$i);
           $121 = ($119<<24>>24)==($120<<24>>24);
           if (!($121)) {
            break;
           }
           $122 = (($$01417$i) + -1)|0;
           $123 = ((($$01318$i)) + 1|0);
           $124 = ((($$019$i)) + 1|0);
           $125 = ($122|0)==(0);
           if ($125) {
            label = 50;
            break L63;
           } else {
            $$01318$i = $123;$$01417$i = $122;$$019$i = $124;
           }
          }
          $126 = $119&255;
          $127 = $120&255;
          $128 = (($126) - ($127))|0;
          $129 = ($128|0)==(0);
          if ($129) {
           label = 50;
          } else {
           $131 = ($128|0)<(0);
           if ($131) {
            label = 52;
           } else {
            label = 54;
           }
          }
         }
        } while(0);
        if ((label|0) == 50) {
         label = 0;
         $130 = ($104>>>0)<($114>>>0);
         if ($130) {
          label = 52;
         } else {
          label = 54;
         }
        }
        if ((label|0) == 52) {
         label = 0;
         $132 = load4($$0$i29);
         $133 = ($132|0)==(0|0);
         if ($133) {
          label = 53;
          break;
         } else {
          $$sink$i = $132;
         }
        }
        else if ((label|0) == 54) {
         label = 0;
         $135 = ((($$0$i29)) + 4|0);
         $136 = load4($135);
         $137 = ($136|0)==(0|0);
         if ($137) {
          label = 56;
          break;
         } else {
          $$sink$i = $136;
         }
        }
        $$0$i29 = $$sink$i;
       }
       if ((label|0) == 53) {
        label = 0;
        $134 = $$0$i29;
        $$015$i = $$0$i29;$$sroa$0$0 = $134;
        break;
       }
       else if ((label|0) == 56) {
        label = 0;
        $138 = $$0$i29;
        $$015$i = $135;$$sroa$0$0 = $138;
        break;
       }
      }
     } while(0);
     store4($$040,0);
     $139 = ((($$040)) + 4|0);
     store4($139,0);
     store4($76,$$sroa$0$0);
     store4($$015$i,$$040);
     $140 = load4($0);
     $141 = load4($140);
     $142 = ($141|0)==(0|0);
     if ($142) {
      $145 = $$040;
     } else {
      $143 = $141;
      store4($0,$143);
      $$pre$i$i = load4($$015$i);
      $145 = $$pre$i$i;
     }
     $144 = load4($13);
     __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($144,$145);
     $146 = load4($1);
     $147 = (($146) + 1)|0;
     store4($1,$147);
     $148 = ((($149)) + 4|0);
     $150 = load4($148);
     $151 = ($150|0)==(0|0);
     if ($151) {
      $$0$i$i24 = $149;
      while(1) {
       $154 = ((($$0$i$i24)) + 8|0);
       $155 = load4($154);
       $156 = load4($155);
       $157 = ($156|0)==($$0$i$i24|0);
       if ($157) {
        $$05$i$i27 = $155;
        break;
       } else {
        $$0$i$i24 = $155;
       }
      }
     } else {
      $$0$i$i$i22 = $150;
      while(1) {
       $152 = load4($$0$i$i$i22);
       $153 = ($152|0)==(0|0);
       if ($153) {
        $$05$i$i27 = $$0$i$i$i22;
        break;
       } else {
        $$0$i$i$i22 = $152;
       }
      }
     }
     $158 = ($$0$i|0)==(0|0);
     if ($158) {
      $$sroa$0$1 = $$05$i$i27;
      break L1;
     } else {
      $$040 = $$0$i;$$sroa$0$06 = $$05$i$i27;$149 = $$05$i$i27;
     }
    }
    if ((label|0) == 19) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $15 = ((($$040)) + 8|0);
    $16 = load4($15);
    $17 = ($16|0)==(0|0);
    if ($17) {
     $$2$lcssa = $$040;
    } else {
     $160 = $16;
     while(1) {
      $159 = ((($160)) + 8|0);
      $161 = load4($159);
      $162 = ($161|0)==(0|0);
      if ($162) {
       break;
      } else {
       $160 = $161;
      }
     }
     $$2$lcssa = $160;
    }
    __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($$2$lcssa);
    $$sroa$0$1 = $$sroa$0$06;
   }
  }
 } while(0);
 $163 = ($$sroa$0$1|0)==($$03|0);
 if ($163) {
  return;
 }
 $164 = ((($0)) + 4|0);
 $165 = ((($0)) + 4|0);
 $167 = $$sroa$0$1;$258 = $$sroa$0$1;
 while(1) {
  $166 = ((($167)) + 16|0);
  $168 = (_malloc(32)|0);
  $169 = ($168|0)==(0|0);
  L103: do {
   if ($169) {
    while(1) {
     $170 = load4(9296);
     $171 = (($170) + 0)|0;
     store4(9296,$171);
     $172 = ($170|0)==(0);
     if ($172) {
      $$lcssa$i$i = 0;
      break L103;
     }
     $173 = $170;
     FUNCTION_TABLE_v[$173 & 3]();
     $174 = (_malloc(32)|0);
     $175 = ($174|0)==(0|0);
     if (!($175)) {
      $$lcssa$i$i = $174;
      break;
     }
    }
   } else {
    $$lcssa$i$i = $168;
   }
  } while(0);
  $176 = ((($$lcssa$i$i)) + 16|0);
  ; store8($176,i64_const(0,0),4); store4($176+8|0,0,4);
  $177 = ((($166)) + 11|0);
  $178 = load1($177);
  $179 = ($178<<24>>24)<(0);
  if ($179) {
   $180 = load4($166);
   $181 = ((($167)) + 20|0);
   $182 = load4($181);
   $183 = ($182>>>0)>(4294967279);
   if ($183) {
    label = 74;
    break;
   }
   $184 = ($182>>>0)<(11);
   if ($184) {
    $199 = $182&255;
    $200 = ((($$lcssa$i$i)) + 27|0);
    store1($200,$199);
    $201 = ($182|0)==(0);
    if ($201) {
     $$017$i$i = $176;
    } else {
     $$016$i$i = $176;
     label = 81;
    }
   } else {
    $185 = (($182) + 16)|0;
    $186 = $185 & -16;
    $187 = ($186|0)==(0);
    $$$i$i = $187 ? 1 : $186;
    $188 = (_malloc($$$i$i)|0);
    $189 = ($188|0)==(0|0);
    L114: do {
     if ($189) {
      while(1) {
       $190 = load4(9296);
       $191 = (($190) + 0)|0;
       store4(9296,$191);
       $192 = ($190|0)==(0);
       if ($192) {
        $$lcssa$i7$i = 0;
        break L114;
       }
       $193 = $190;
       FUNCTION_TABLE_v[$193 & 3]();
       $194 = (_malloc($$$i$i)|0);
       $195 = ($194|0)==(0|0);
       if (!($195)) {
        $$lcssa$i7$i = $194;
        break;
       }
      }
     } else {
      $$lcssa$i7$i = $188;
     }
    } while(0);
    store4($176,$$lcssa$i7$i);
    $196 = $186 | -2147483648;
    $197 = ((($$lcssa$i$i)) + 24|0);
    store4($197,$196);
    $198 = ((($$lcssa$i$i)) + 20|0);
    store4($198,$182);
    $$016$i$i = $$lcssa$i7$i;
    label = 81;
   }
   if ((label|0) == 81) {
    label = 0;
    _memcpy(($$016$i$i|0),($180|0),($182|0))|0;
    $$017$i$i = $$016$i$i;
   }
   $202 = (($$017$i$i) + ($182)|0);
   store1($202,0);
  } else {
   ; store8($176,load8($166,4),4); store4($176+8 | 0,load4($166+8 | 0,4),4);
  }
  $203 = ((($$lcssa$i$i)) + 28|0);
  $204 = ((($167)) + 28|0);
  $205 = load1($204);
  store1($203,$205);
  $206 = load4($164);
  $207 = ($206|0)==(0|0);
  do {
   if ($207) {
    $$0$i7 = $164;$$015$i$i = $164;
   } else {
    $208 = ((($$lcssa$i$i)) + 27|0);
    $209 = load1($208);
    $210 = ($209<<24>>24)<(0);
    $211 = ((($$lcssa$i$i)) + 20|0);
    $212 = load4($211);
    $213 = $209&255;
    $214 = $210 ? $212 : $213;
    $215 = load4($176);
    $216 = $210 ? $215 : $176;
    $$0$i$i5 = $206;
    while(1) {
     $217 = ((($$0$i$i5)) + 16|0);
     $218 = ((($217)) + 11|0);
     $219 = load1($218);
     $220 = ($219<<24>>24)<(0);
     $221 = ((($$0$i$i5)) + 20|0);
     $222 = load4($221);
     $223 = $219&255;
     $224 = $220 ? $222 : $223;
     $225 = ($224>>>0)<($214>>>0);
     $$sroa$speculated$i$i$i$i$i$i = $225 ? $224 : $214;
     $226 = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
     L128: do {
      if ($226) {
       label = 90;
      } else {
       $227 = load4($217);
       $228 = $220 ? $227 : $217;
       $$01318$i$i = $216;$$01417$i$i = $$sroa$speculated$i$i$i$i$i$i;$$019$i$i = $228;
       while(1) {
        $229 = load1($$01318$i$i);
        $230 = load1($$019$i$i);
        $231 = ($229<<24>>24)==($230<<24>>24);
        if (!($231)) {
         break;
        }
        $232 = (($$01417$i$i) + -1)|0;
        $233 = ((($$01318$i$i)) + 1|0);
        $234 = ((($$019$i$i)) + 1|0);
        $235 = ($232|0)==(0);
        if ($235) {
         label = 90;
         break L128;
        } else {
         $$01318$i$i = $233;$$01417$i$i = $232;$$019$i$i = $234;
        }
       }
       $236 = $229&255;
       $237 = $230&255;
       $238 = (($236) - ($237))|0;
       $239 = ($238|0)==(0);
       if ($239) {
        label = 90;
       } else {
        $241 = ($238|0)<(0);
        if ($241) {
         label = 92;
        } else {
         label = 94;
        }
       }
      }
     } while(0);
     if ((label|0) == 90) {
      label = 0;
      $240 = ($214>>>0)<($224>>>0);
      if ($240) {
       label = 92;
      } else {
       label = 94;
      }
     }
     if ((label|0) == 92) {
      label = 0;
      $242 = load4($$0$i$i5);
      $243 = ($242|0)==(0|0);
      if ($243) {
       label = 93;
       break;
      } else {
       $$sink$i$i = $242;
      }
     }
     else if ((label|0) == 94) {
      label = 0;
      $244 = ((($$0$i$i5)) + 4|0);
      $245 = load4($244);
      $246 = ($245|0)==(0|0);
      if ($246) {
       label = 96;
       break;
      } else {
       $$sink$i$i = $245;
      }
     }
     $$0$i$i5 = $$sink$i$i;
    }
    if ((label|0) == 93) {
     label = 0;
     $$0$i7 = $$0$i$i5;$$015$i$i = $$0$i$i5;
     break;
    }
    else if ((label|0) == 96) {
     label = 0;
     $$0$i7 = $$0$i$i5;$$015$i$i = $244;
     break;
    }
   }
  } while(0);
  store4($$lcssa$i$i,0);
  $247 = ((($$lcssa$i$i)) + 4|0);
  store4($247,0);
  $248 = ((($$lcssa$i$i)) + 8|0);
  store4($248,$$0$i7);
  store4($$015$i$i,$$lcssa$i$i);
  $249 = load4($0);
  $250 = load4($249);
  $251 = ($250|0)==(0|0);
  if ($251) {
   $254 = $$lcssa$i$i;
  } else {
   $252 = $250;
   store4($0,$252);
   $$pre$i$i8 = load4($$015$i$i);
   $254 = $$pre$i$i8;
  }
  $253 = load4($165);
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($253,$254);
  $255 = load4($1);
  $256 = (($255) + 1)|0;
  store4($1,$256);
  $257 = ((($258)) + 4|0);
  $259 = load4($257);
  $260 = ($259|0)==(0|0);
  if ($260) {
   $$0$i$i = $258;
   while(1) {
    $263 = ((($$0$i$i)) + 8|0);
    $264 = load4($263);
    $265 = load4($264);
    $266 = ($265|0)==($$0$i$i|0);
    if ($266) {
     $$05$i$i = $264;
     break;
    } else {
     $$0$i$i = $264;
    }
   }
  } else {
   $$0$i$i$i = $259;
   while(1) {
    $261 = load4($$0$i$i$i);
    $262 = ($261|0)==(0|0);
    if ($262) {
     $$05$i$i = $$0$i$i$i;
     break;
    } else {
     $$0$i$i$i = $261;
    }
   }
  }
  $267 = ($$05$i$i|0)==($$03|0);
  if ($267) {
   label = 103;
   break;
  } else {
   $167 = $$05$i$i;$258 = $$05$i$i;
  }
 }
 if ((label|0) == 74) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 103) {
  return;
 }
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = load4($0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($2);
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($4);
 $5 = ((($0)) + 16|0);
 $6 = ((($5)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 if (!($8)) {
  _free($0);
  return;
 }
 $9 = load4($5);
 _free($9);
 _free($0);
 return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($0,$$01,$1,$2) {
 $0 = $0|0;
 $$01 = $$01|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i10 = 0, $$0$i$i$i = 0, $$0$i$i$i$i = 0, $$0$i$i$i$i$i$i = 0, $$0$i$i$i$i$i$i$i = 0, $$01318$i$i = 0, $$01318$i12$i = 0, $$01318$i2$i = 0, $$01318$i7$i = 0, $$01417$i$i = 0, $$01417$i13$i = 0, $$01417$i3$i = 0, $$01417$i8$i = 0, $$016$i = 0, $$016$i3 = 0, $$017$i = 0, $$017$i4 = 0, $$019$i$i = 0, $$019$i1$i = 0;
 var $$019$i11$i = 0, $$019$i6$i = 0, $$05$i$i$i = 0, $$05$i$i$i$i$i$i = 0, $$2$i = 0, $$lcssa$i = 0, $$lcssa$i16 = 0, $$lcssa$i8 = 0, $$pre$i = 0, $$pre$i1 = 0, $$sroa$051$0$i = 0, $$sroa$speculated$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i22$i = 0, $$sroa$speculated$i$i$i$i27$i = 0, $$sroa$speculated$i$i$i$i33$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0;
 var $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0;
 var $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0;
 var $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0;
 var $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0;
 var $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0;
 var $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0;
 var $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = ((($0)) + 4|0);
 $5 = ($4|0)==($$01|0);
 $6 = $$01;
 L1: do {
  if ($5) {
   label = 9;
  } else {
   $7 = ((($$01)) + 16|0);
   $8 = ((($1)) + 11|0);
   $9 = load1($8);
   $10 = ($9<<24>>24)<(0);
   $11 = ((($1)) + 4|0);
   $12 = load4($11);
   $13 = $9&255;
   $14 = $10 ? $12 : $13;
   $15 = ((($7)) + 11|0);
   $16 = load1($15);
   $17 = ($16<<24>>24)<(0);
   $18 = ((($$01)) + 20|0);
   $19 = load4($18);
   $20 = $16&255;
   $21 = $17 ? $19 : $20;
   $22 = ($21>>>0)<($14>>>0);
   $$sroa$speculated$i$i$i$i33$i = $22 ? $21 : $14;
   $23 = ($$sroa$speculated$i$i$i$i33$i|0)==(0);
   L3: do {
    if ($23) {
     label = 7;
    } else {
     $24 = load4($1);
     $25 = $10 ? $24 : $1;
     $26 = load4($7);
     $27 = $17 ? $26 : $7;
     $$01318$i$i = $25;$$01417$i$i = $$sroa$speculated$i$i$i$i33$i;$$019$i$i = $27;
     while(1) {
      $28 = load1($$01318$i$i);
      $29 = load1($$019$i$i);
      $30 = ($28<<24>>24)==($29<<24>>24);
      if (!($30)) {
       break;
      }
      $31 = (($$01417$i$i) + -1)|0;
      $32 = ((($$01318$i$i)) + 1|0);
      $33 = ((($$019$i$i)) + 1|0);
      $34 = ($31|0)==(0);
      if ($34) {
       label = 7;
       break L3;
      } else {
       $$01318$i$i = $32;$$01417$i$i = $31;$$019$i$i = $33;
      }
     }
     $35 = $28&255;
     $36 = $29&255;
     $37 = (($35) - ($36))|0;
     $38 = ($37|0)==(0);
     if ($38) {
      label = 7;
     } else {
      $40 = ($37|0)<(0);
      if ($40) {
       label = 9;
       break L1;
      }
     }
    }
   } while(0);
   if ((label|0) == 7) {
    $39 = ($14>>>0)<($21>>>0);
    if ($39) {
     label = 9;
     break;
    }
   }
   $90 = ($14>>>0)<($21>>>0);
   $$sroa$speculated$i$i$i$i22$i = $90 ? $14 : $21;
   $91 = ($$sroa$speculated$i$i$i$i22$i|0)==(0);
   L13: do {
    if ($91) {
     label = 29;
    } else {
     $92 = load4($7);
     $93 = $17 ? $92 : $7;
     $94 = load4($1);
     $95 = $10 ? $94 : $1;
     $$01318$i12$i = $93;$$01417$i13$i = $$sroa$speculated$i$i$i$i22$i;$$019$i11$i = $95;
     while(1) {
      $96 = load1($$01318$i12$i);
      $97 = load1($$019$i11$i);
      $98 = ($96<<24>>24)==($97<<24>>24);
      if (!($98)) {
       break;
      }
      $99 = (($$01417$i13$i) + -1)|0;
      $100 = ((($$01318$i12$i)) + 1|0);
      $101 = ((($$019$i11$i)) + 1|0);
      $102 = ($99|0)==(0);
      if ($102) {
       label = 29;
       break L13;
      } else {
       $$01318$i12$i = $100;$$01417$i13$i = $99;$$019$i11$i = $101;
      }
     }
     $103 = $96&255;
     $104 = $97&255;
     $105 = (($103) - ($104))|0;
     $106 = ($105|0)==(0);
     if ($106) {
      label = 29;
     } else {
      $107 = ($105|0)<(0);
      if (!($107)) {
       label = 46;
      }
     }
    }
   } while(0);
   if ((label|0) == 29) {
    if (!($22)) {
     label = 46;
    }
   }
   if ((label|0) == 46) {
    store4($3,$6);
    $$2$i = $3;
    break;
   }
   $108 = ((($$01)) + 4|0);
   $109 = load4($108);
   $110 = ($109|0)==(0|0);
   if ($110) {
    $$0$i$i$i$i$i$i = $$01;
    while(1) {
     $113 = ((($$0$i$i$i$i$i$i)) + 8|0);
     $114 = load4($113);
     $115 = load4($114);
     $116 = ($115|0)==($$0$i$i$i$i$i$i|0);
     if ($116) {
      $$05$i$i$i$i$i$i = $114;
      break;
     } else {
      $$0$i$i$i$i$i$i = $114;
     }
    }
   } else {
    $$0$i$i$i$i$i$i$i = $109;
    while(1) {
     $111 = load4($$0$i$i$i$i$i$i$i);
     $112 = ($111|0)==(0|0);
     if ($112) {
      $$05$i$i$i$i$i$i = $$0$i$i$i$i$i$i$i;
      break;
     } else {
      $$0$i$i$i$i$i$i$i = $111;
     }
    }
   }
   $117 = ($$05$i$i$i$i$i$i|0)==($4|0);
   L31: do {
    if (!($117)) {
     $118 = ((($$05$i$i$i$i$i$i)) + 16|0);
     $119 = ((($118)) + 11|0);
     $120 = load1($119);
     $121 = ($120<<24>>24)<(0);
     $122 = ((($$05$i$i$i$i$i$i)) + 20|0);
     $123 = load4($122);
     $124 = $120&255;
     $125 = $121 ? $123 : $124;
     $126 = ($125>>>0)<($14>>>0);
     $$sroa$speculated$i$i$i$i$i = $126 ? $125 : $14;
     $127 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
     L33: do {
      if ($127) {
       label = 40;
      } else {
       $128 = load4($1);
       $129 = $10 ? $128 : $1;
       $130 = load4($118);
       $131 = $121 ? $130 : $118;
       $$01318$i7$i = $129;$$01417$i8$i = $$sroa$speculated$i$i$i$i$i;$$019$i6$i = $131;
       while(1) {
        $132 = load1($$01318$i7$i);
        $133 = load1($$019$i6$i);
        $134 = ($132<<24>>24)==($133<<24>>24);
        if (!($134)) {
         break;
        }
        $135 = (($$01417$i8$i) + -1)|0;
        $136 = ((($$01318$i7$i)) + 1|0);
        $137 = ((($$019$i6$i)) + 1|0);
        $138 = ($135|0)==(0);
        if ($138) {
         label = 40;
         break L33;
        } else {
         $$01318$i7$i = $136;$$01417$i8$i = $135;$$019$i6$i = $137;
        }
       }
       $139 = $132&255;
       $140 = $133&255;
       $141 = (($139) - ($140))|0;
       $142 = ($141|0)==(0);
       if ($142) {
        label = 40;
       } else {
        $144 = ($141|0)<(0);
        if ($144) {
         break L31;
        }
       }
      }
     } while(0);
     if ((label|0) == 40) {
      $143 = ($14>>>0)<($125>>>0);
      if ($143) {
       break;
      }
     }
     $145 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$3,$1)|0);
     $$2$i = $145;
     break L1;
    }
   } while(0);
   if ($110) {
    store4($3,$$01);
    $$2$i = $108;
    break;
   } else {
    store4($3,$$05$i$i$i$i$i$i);
    $$2$i = $$05$i$i$i$i$i$i;
    break;
   }
  }
 } while(0);
 L47: do {
  if ((label|0) == 9) {
   $41 = load4($0);
   $42 = ($41|0)==($$01|0);
   $$pre$i1 = load4($$01);
   L49: do {
    if ($42) {
     $$sroa$051$0$i = $6;
    } else {
     $43 = ($$pre$i1|0)==(0|0);
     if ($43) {
      $$0$i$i$i = $$01;
      while(1) {
       $47 = ((($$0$i$i$i)) + 8|0);
       $48 = load4($47);
       $49 = load4($48);
       $50 = ($49|0)==($$0$i$i$i|0);
       if ($50) {
        $$0$i$i$i = $48;
       } else {
        $$05$i$i$i = $48;
        break;
       }
      }
     } else {
      $$0$i$i$i$i = $$pre$i1;
      while(1) {
       $44 = ((($$0$i$i$i$i)) + 4|0);
       $45 = load4($44);
       $46 = ($45|0)==(0|0);
       if ($46) {
        $$05$i$i$i = $$0$i$i$i$i;
        break;
       } else {
        $$0$i$i$i$i = $45;
       }
      }
     }
     $51 = $$05$i$i$i;
     $52 = ((($$05$i$i$i)) + 16|0);
     $53 = ((($52)) + 11|0);
     $54 = load1($53);
     $55 = ($54<<24>>24)<(0);
     $56 = ((($$05$i$i$i)) + 20|0);
     $57 = load4($56);
     $58 = $54&255;
     $59 = $55 ? $57 : $58;
     $60 = ((($1)) + 11|0);
     $61 = load1($60);
     $62 = ($61<<24>>24)<(0);
     $63 = ((($1)) + 4|0);
     $64 = load4($63);
     $65 = $61&255;
     $66 = $62 ? $64 : $65;
     $67 = ($66>>>0)<($59>>>0);
     $$sroa$speculated$i$i$i$i27$i = $67 ? $66 : $59;
     $68 = ($$sroa$speculated$i$i$i$i27$i|0)==(0);
     L57: do {
      if ($68) {
       label = 18;
      } else {
       $69 = load4($52);
       $70 = $55 ? $69 : $52;
       $71 = load4($1);
       $72 = $62 ? $71 : $1;
       $$01318$i2$i = $70;$$01417$i3$i = $$sroa$speculated$i$i$i$i27$i;$$019$i1$i = $72;
       while(1) {
        $73 = load1($$01318$i2$i);
        $74 = load1($$019$i1$i);
        $75 = ($73<<24>>24)==($74<<24>>24);
        if (!($75)) {
         break;
        }
        $76 = (($$01417$i3$i) + -1)|0;
        $77 = ((($$01318$i2$i)) + 1|0);
        $78 = ((($$019$i1$i)) + 1|0);
        $79 = ($76|0)==(0);
        if ($79) {
         label = 18;
         break L57;
        } else {
         $$01318$i2$i = $77;$$01417$i3$i = $76;$$019$i1$i = $78;
        }
       }
       $80 = $73&255;
       $81 = $74&255;
       $82 = (($80) - ($81))|0;
       $83 = ($82|0)==(0);
       if ($83) {
        label = 18;
       } else {
        $85 = ($82|0)<(0);
        if ($85) {
         $$sroa$051$0$i = $51;
         break L49;
        }
       }
      }
     } while(0);
     if ((label|0) == 18) {
      $84 = ($59>>>0)<($66>>>0);
      if ($84) {
       $$sroa$051$0$i = $51;
       break;
      }
     }
     $89 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$3,$1)|0);
     $$2$i = $89;
     break L47;
    }
   } while(0);
   $86 = ($$pre$i1|0)==(0|0);
   if ($86) {
    store4($3,$$01);
    $$2$i = $$01;
    break;
   } else {
    $87 = $$sroa$051$0$i;
    store4($3,$87);
    $88 = ((($87)) + 4|0);
    $$2$i = $88;
    break;
   }
  }
 } while(0);
 $146 = load4($$2$i);
 $147 = ($146|0)==(0|0);
 if (!($147)) {
  STACKTOP = sp;return;
 }
 $148 = (_malloc(40)|0);
 $149 = ($148|0)==(0|0);
 L75: do {
  if ($149) {
   while(1) {
    $150 = load4(9296);
    $151 = (($150) + 0)|0;
    store4(9296,$151);
    $152 = ($150|0)==(0);
    if ($152) {
     $$lcssa$i = 0;
     break L75;
    }
    $153 = $150;
    FUNCTION_TABLE_v[$153 & 3]();
    $154 = (_malloc(40)|0);
    $155 = ($154|0)==(0|0);
    if (!($155)) {
     $$lcssa$i = $154;
     break;
    }
   }
  } else {
   $$lcssa$i = $148;
  }
 } while(0);
 $156 = ((($$lcssa$i)) + 16|0);
 ; store8($156,i64_const(0,0),4); store4($156+8|0,0,4);
 $157 = ((($2)) + 11|0);
 $158 = load1($157);
 $159 = ($158<<24>>24)<(0);
 if ($159) {
  $160 = load4($2);
  $161 = ((($2)) + 4|0);
  $162 = load4($161);
  $163 = ($162>>>0)>(4294967279);
  if ($163) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $164 = ($162>>>0)<(11);
  if ($164) {
   $179 = $162&255;
   $180 = ((($$lcssa$i)) + 27|0);
   store1($180,$179);
   $181 = ($162|0)==(0);
   if ($181) {
    $$017$i = $156;
   } else {
    $$016$i = $156;
    label = 61;
   }
  } else {
   $165 = (($162) + 16)|0;
   $166 = $165 & -16;
   $167 = ($166|0)==(0);
   $$$i = $167 ? 1 : $166;
   $168 = (_malloc($$$i)|0);
   $169 = ($168|0)==(0|0);
   L88: do {
    if ($169) {
     while(1) {
      $170 = load4(9296);
      $171 = (($170) + 0)|0;
      store4(9296,$171);
      $172 = ($170|0)==(0);
      if ($172) {
       $$lcssa$i8 = 0;
       break L88;
      }
      $173 = $170;
      FUNCTION_TABLE_v[$173 & 3]();
      $174 = (_malloc($$$i)|0);
      $175 = ($174|0)==(0|0);
      if (!($175)) {
       $$lcssa$i8 = $174;
       break;
      }
     }
    } else {
     $$lcssa$i8 = $168;
    }
   } while(0);
   store4($156,$$lcssa$i8);
   $176 = $166 | -2147483648;
   $177 = ((($$lcssa$i)) + 24|0);
   store4($177,$176);
   $178 = ((($$lcssa$i)) + 20|0);
   store4($178,$162);
   $$016$i = $$lcssa$i8;
   label = 61;
  }
  if ((label|0) == 61) {
   _memcpy(($$016$i|0),($160|0),($162|0))|0;
   $$017$i = $$016$i;
  }
  $182 = (($$017$i) + ($162)|0);
  store1($182,0);
 } else {
  ; store8($156,load8($2,4),4); store4($156+8 | 0,load4($2+8 | 0,4),4);
 }
 $183 = ((($$lcssa$i)) + 28|0);
 $184 = ((($2)) + 12|0);
 ; store8($183,i64_const(0,0),4); store4($183+8|0,0,4);
 $185 = ((($184)) + 11|0);
 $186 = load1($185);
 $187 = ($186<<24>>24)<(0);
 if ($187) {
  $188 = load4($184);
  $189 = ((($2)) + 16|0);
  $190 = load4($189);
  $191 = ($190>>>0)>(4294967279);
  if ($191) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $192 = ($190>>>0)<(11);
  if ($192) {
   $207 = $190&255;
   $208 = ((($$lcssa$i)) + 39|0);
   store1($208,$207);
   $209 = ($190|0)==(0);
   if ($209) {
    $$017$i4 = $183;
   } else {
    $$016$i3 = $183;
    label = 73;
   }
  } else {
   $193 = (($190) + 16)|0;
   $194 = $193 & -16;
   $195 = ($194|0)==(0);
   $$$i10 = $195 ? 1 : $194;
   $196 = (_malloc($$$i10)|0);
   $197 = ($196|0)==(0|0);
   L106: do {
    if ($197) {
     while(1) {
      $198 = load4(9296);
      $199 = (($198) + 0)|0;
      store4(9296,$199);
      $200 = ($198|0)==(0);
      if ($200) {
       $$lcssa$i16 = 0;
       break L106;
      }
      $201 = $198;
      FUNCTION_TABLE_v[$201 & 3]();
      $202 = (_malloc($$$i10)|0);
      $203 = ($202|0)==(0|0);
      if (!($203)) {
       $$lcssa$i16 = $202;
       break;
      }
     }
    } else {
     $$lcssa$i16 = $196;
    }
   } while(0);
   store4($183,$$lcssa$i16);
   $204 = $194 | -2147483648;
   $205 = ((($$lcssa$i)) + 36|0);
   store4($205,$204);
   $206 = ((($$lcssa$i)) + 32|0);
   store4($206,$190);
   $$016$i3 = $$lcssa$i16;
   label = 73;
  }
  if ((label|0) == 73) {
   _memcpy(($$016$i3|0),($188|0),($190|0))|0;
   $$017$i4 = $$016$i3;
  }
  $210 = (($$017$i4) + ($190)|0);
  store1($210,0);
 } else {
  ; store8($183,load8($184,4),4); store4($183+8 | 0,load4($184+8 | 0,4),4);
 }
 $211 = load4($3);
 store4($$lcssa$i,0);
 $212 = ((($$lcssa$i)) + 4|0);
 store4($212,0);
 $213 = ((($$lcssa$i)) + 8|0);
 store4($213,$211);
 store4($$2$i,$$lcssa$i);
 $214 = load4($0);
 $215 = load4($214);
 $216 = ($215|0)==(0|0);
 if ($216) {
  $220 = $$lcssa$i;
 } else {
  $217 = $215;
  store4($0,$217);
  $$pre$i = load4($$2$i);
  $220 = $$pre$i;
 }
 $218 = ((($0)) + 4|0);
 $219 = load4($218);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($219,$220);
 $221 = ((($0)) + 8|0);
 $222 = load4($221);
 $223 = (($222) + 1)|0;
 store4($221,$223);
 STACKTOP = sp;return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$01318$i = 0, $$01318$i2 = 0, $$01417$i = 0, $$01417$i3 = 0, $$019$i = 0, $$019$i1 = 0, $$020 = 0, $$sink = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i21 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
 var $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  store4($1,$3);
  $$020 = $3;
  return ($$020|0);
 }
 $6 = ((($2)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 $9 = ((($2)) + 4|0);
 $10 = load4($9);
 $11 = $7&255;
 $12 = $8 ? $10 : $11;
 $13 = load4($2);
 $14 = $8 ? $13 : $2;
 $$0 = $4;
 L5: while(1) {
  $15 = ((($$0)) + 16|0);
  $16 = ((($15)) + 11|0);
  $17 = load1($16);
  $18 = ($17<<24>>24)<(0);
  $19 = ((($$0)) + 20|0);
  $20 = load4($19);
  $21 = $17&255;
  $22 = $18 ? $20 : $21;
  $23 = ($22>>>0)<($12>>>0);
  $$sroa$speculated$i$i$i$i21 = $23 ? $22 : $12;
  $24 = ($$sroa$speculated$i$i$i$i21|0)==(0);
  L7: do {
   if ($24) {
    label = 8;
   } else {
    $25 = load4($15);
    $26 = $18 ? $25 : $15;
    $$01318$i = $14;$$01417$i = $$sroa$speculated$i$i$i$i21;$$019$i = $26;
    while(1) {
     $27 = load1($$01318$i);
     $28 = load1($$019$i);
     $29 = ($27<<24>>24)==($28<<24>>24);
     if (!($29)) {
      break;
     }
     $30 = (($$01417$i) + -1)|0;
     $31 = ((($$01318$i)) + 1|0);
     $32 = ((($$019$i)) + 1|0);
     $33 = ($30|0)==(0);
     if ($33) {
      label = 8;
      break L7;
     } else {
      $$01318$i = $31;$$01417$i = $30;$$019$i = $32;
     }
    }
    $34 = $27&255;
    $35 = $28&255;
    $36 = (($34) - ($35))|0;
    $37 = ($36|0)==(0);
    if ($37) {
     label = 8;
    } else {
     $39 = ($36|0)<(0);
     if ($39) {
      label = 10;
     } else {
      label = 12;
     }
    }
   }
  } while(0);
  if ((label|0) == 8) {
   label = 0;
   $38 = ($12>>>0)<($22>>>0);
   if ($38) {
    label = 10;
   } else {
    label = 12;
   }
  }
  if ((label|0) == 10) {
   label = 0;
   $40 = load4($$0);
   $41 = ($40|0)==(0|0);
   if ($41) {
    label = 11;
    break;
   } else {
    $$sink = $40;
   }
  }
  else if ((label|0) == 12) {
   label = 0;
   $42 = ($12>>>0)<($22>>>0);
   $$sroa$speculated$i$i$i$i = $42 ? $12 : $22;
   $43 = ($$sroa$speculated$i$i$i$i|0)==(0);
   L19: do {
    if ($43) {
     label = 17;
    } else {
     $44 = load4($15);
     $45 = $18 ? $44 : $15;
     $$01318$i2 = $45;$$01417$i3 = $$sroa$speculated$i$i$i$i;$$019$i1 = $14;
     while(1) {
      $46 = load1($$01318$i2);
      $47 = load1($$019$i1);
      $48 = ($46<<24>>24)==($47<<24>>24);
      if (!($48)) {
       break;
      }
      $49 = (($$01417$i3) + -1)|0;
      $50 = ((($$01318$i2)) + 1|0);
      $51 = ((($$019$i1)) + 1|0);
      $52 = ($49|0)==(0);
      if ($52) {
       label = 17;
       break L19;
      } else {
       $$01318$i2 = $50;$$01417$i3 = $49;$$019$i1 = $51;
      }
     }
     $53 = $46&255;
     $54 = $47&255;
     $55 = (($53) - ($54))|0;
     $56 = ($55|0)==(0);
     if ($56) {
      label = 17;
     } else {
      $57 = ($55|0)<(0);
      if (!($57)) {
       label = 22;
       break L5;
      }
     }
    }
   } while(0);
   if ((label|0) == 17) {
    label = 0;
    if (!($23)) {
     label = 22;
     break;
    }
   }
   $58 = ((($$0)) + 4|0);
   $59 = load4($58);
   $60 = ($59|0)==(0|0);
   if ($60) {
    label = 21;
    break;
   } else {
    $$sink = $59;
   }
  }
  $$0 = $$sink;
 }
 if ((label|0) == 11) {
  store4($1,$$0);
  $$020 = $$0;
  return ($$020|0);
 }
 else if ((label|0) == 21) {
  store4($1,$$0);
  $$020 = $58;
  return ($$020|0);
 }
 else if ((label|0) == 22) {
  store4($1,$$0);
  $$020 = $1;
  return ($$020|0);
 }
 return (0)|0;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_bEEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($0,$$01,$1,$2) {
 $0 = $0|0;
 $$01 = $$01|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$0$i$i$i = 0, $$0$i$i$i$i = 0, $$0$i$i$i$i$i$i = 0, $$0$i$i$i$i$i$i$i = 0, $$01318$i$i = 0, $$01318$i12$i = 0, $$01318$i2$i = 0, $$01318$i7$i = 0, $$01417$i$i = 0, $$01417$i13$i = 0, $$01417$i3$i = 0, $$01417$i8$i = 0, $$016$i = 0, $$017$i = 0, $$019$i$i = 0, $$019$i1$i = 0, $$019$i11$i = 0, $$019$i6$i = 0, $$05$i$i$i = 0;
 var $$05$i$i$i$i$i$i = 0, $$2$i = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$pre$i = 0, $$pre$i1 = 0, $$sroa$051$0$i = 0, $$sroa$speculated$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i22$i = 0, $$sroa$speculated$i$i$i$i27$i = 0, $$sroa$speculated$i$i$i$i33$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0;
 var $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0;
 var $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0;
 var $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0;
 var $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0;
 var $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = ((($0)) + 4|0);
 $5 = ($4|0)==($$01|0);
 $6 = $$01;
 L1: do {
  if ($5) {
   label = 9;
  } else {
   $7 = ((($$01)) + 16|0);
   $8 = ((($1)) + 11|0);
   $9 = load1($8);
   $10 = ($9<<24>>24)<(0);
   $11 = ((($1)) + 4|0);
   $12 = load4($11);
   $13 = $9&255;
   $14 = $10 ? $12 : $13;
   $15 = ((($7)) + 11|0);
   $16 = load1($15);
   $17 = ($16<<24>>24)<(0);
   $18 = ((($$01)) + 20|0);
   $19 = load4($18);
   $20 = $16&255;
   $21 = $17 ? $19 : $20;
   $22 = ($21>>>0)<($14>>>0);
   $$sroa$speculated$i$i$i$i33$i = $22 ? $21 : $14;
   $23 = ($$sroa$speculated$i$i$i$i33$i|0)==(0);
   L3: do {
    if ($23) {
     label = 7;
    } else {
     $24 = load4($1);
     $25 = $10 ? $24 : $1;
     $26 = load4($7);
     $27 = $17 ? $26 : $7;
     $$01318$i$i = $25;$$01417$i$i = $$sroa$speculated$i$i$i$i33$i;$$019$i$i = $27;
     while(1) {
      $28 = load1($$01318$i$i);
      $29 = load1($$019$i$i);
      $30 = ($28<<24>>24)==($29<<24>>24);
      if (!($30)) {
       break;
      }
      $31 = (($$01417$i$i) + -1)|0;
      $32 = ((($$01318$i$i)) + 1|0);
      $33 = ((($$019$i$i)) + 1|0);
      $34 = ($31|0)==(0);
      if ($34) {
       label = 7;
       break L3;
      } else {
       $$01318$i$i = $32;$$01417$i$i = $31;$$019$i$i = $33;
      }
     }
     $35 = $28&255;
     $36 = $29&255;
     $37 = (($35) - ($36))|0;
     $38 = ($37|0)==(0);
     if ($38) {
      label = 7;
     } else {
      $40 = ($37|0)<(0);
      if ($40) {
       label = 9;
       break L1;
      }
     }
    }
   } while(0);
   if ((label|0) == 7) {
    $39 = ($14>>>0)<($21>>>0);
    if ($39) {
     label = 9;
     break;
    }
   }
   $90 = ($14>>>0)<($21>>>0);
   $$sroa$speculated$i$i$i$i22$i = $90 ? $14 : $21;
   $91 = ($$sroa$speculated$i$i$i$i22$i|0)==(0);
   L13: do {
    if ($91) {
     label = 29;
    } else {
     $92 = load4($7);
     $93 = $17 ? $92 : $7;
     $94 = load4($1);
     $95 = $10 ? $94 : $1;
     $$01318$i12$i = $93;$$01417$i13$i = $$sroa$speculated$i$i$i$i22$i;$$019$i11$i = $95;
     while(1) {
      $96 = load1($$01318$i12$i);
      $97 = load1($$019$i11$i);
      $98 = ($96<<24>>24)==($97<<24>>24);
      if (!($98)) {
       break;
      }
      $99 = (($$01417$i13$i) + -1)|0;
      $100 = ((($$01318$i12$i)) + 1|0);
      $101 = ((($$019$i11$i)) + 1|0);
      $102 = ($99|0)==(0);
      if ($102) {
       label = 29;
       break L13;
      } else {
       $$01318$i12$i = $100;$$01417$i13$i = $99;$$019$i11$i = $101;
      }
     }
     $103 = $96&255;
     $104 = $97&255;
     $105 = (($103) - ($104))|0;
     $106 = ($105|0)==(0);
     if ($106) {
      label = 29;
     } else {
      $107 = ($105|0)<(0);
      if (!($107)) {
       label = 46;
      }
     }
    }
   } while(0);
   if ((label|0) == 29) {
    if (!($22)) {
     label = 46;
    }
   }
   if ((label|0) == 46) {
    store4($3,$6);
    $$2$i = $3;
    break;
   }
   $108 = ((($$01)) + 4|0);
   $109 = load4($108);
   $110 = ($109|0)==(0|0);
   if ($110) {
    $$0$i$i$i$i$i$i = $$01;
    while(1) {
     $113 = ((($$0$i$i$i$i$i$i)) + 8|0);
     $114 = load4($113);
     $115 = load4($114);
     $116 = ($115|0)==($$0$i$i$i$i$i$i|0);
     if ($116) {
      $$05$i$i$i$i$i$i = $114;
      break;
     } else {
      $$0$i$i$i$i$i$i = $114;
     }
    }
   } else {
    $$0$i$i$i$i$i$i$i = $109;
    while(1) {
     $111 = load4($$0$i$i$i$i$i$i$i);
     $112 = ($111|0)==(0|0);
     if ($112) {
      $$05$i$i$i$i$i$i = $$0$i$i$i$i$i$i$i;
      break;
     } else {
      $$0$i$i$i$i$i$i$i = $111;
     }
    }
   }
   $117 = ($$05$i$i$i$i$i$i|0)==($4|0);
   L31: do {
    if (!($117)) {
     $118 = ((($$05$i$i$i$i$i$i)) + 16|0);
     $119 = ((($118)) + 11|0);
     $120 = load1($119);
     $121 = ($120<<24>>24)<(0);
     $122 = ((($$05$i$i$i$i$i$i)) + 20|0);
     $123 = load4($122);
     $124 = $120&255;
     $125 = $121 ? $123 : $124;
     $126 = ($125>>>0)<($14>>>0);
     $$sroa$speculated$i$i$i$i$i = $126 ? $125 : $14;
     $127 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
     L33: do {
      if ($127) {
       label = 40;
      } else {
       $128 = load4($1);
       $129 = $10 ? $128 : $1;
       $130 = load4($118);
       $131 = $121 ? $130 : $118;
       $$01318$i7$i = $129;$$01417$i8$i = $$sroa$speculated$i$i$i$i$i;$$019$i6$i = $131;
       while(1) {
        $132 = load1($$01318$i7$i);
        $133 = load1($$019$i6$i);
        $134 = ($132<<24>>24)==($133<<24>>24);
        if (!($134)) {
         break;
        }
        $135 = (($$01417$i8$i) + -1)|0;
        $136 = ((($$01318$i7$i)) + 1|0);
        $137 = ((($$019$i6$i)) + 1|0);
        $138 = ($135|0)==(0);
        if ($138) {
         label = 40;
         break L33;
        } else {
         $$01318$i7$i = $136;$$01417$i8$i = $135;$$019$i6$i = $137;
        }
       }
       $139 = $132&255;
       $140 = $133&255;
       $141 = (($139) - ($140))|0;
       $142 = ($141|0)==(0);
       if ($142) {
        label = 40;
       } else {
        $144 = ($141|0)<(0);
        if ($144) {
         break L31;
        }
       }
      }
     } while(0);
     if ((label|0) == 40) {
      $143 = ($14>>>0)<($125>>>0);
      if ($143) {
       break;
      }
     }
     $145 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$3,$1)|0);
     $$2$i = $145;
     break L1;
    }
   } while(0);
   if ($110) {
    store4($3,$$01);
    $$2$i = $108;
    break;
   } else {
    store4($3,$$05$i$i$i$i$i$i);
    $$2$i = $$05$i$i$i$i$i$i;
    break;
   }
  }
 } while(0);
 L47: do {
  if ((label|0) == 9) {
   $41 = load4($0);
   $42 = ($41|0)==($$01|0);
   $$pre$i1 = load4($$01);
   L49: do {
    if ($42) {
     $$sroa$051$0$i = $6;
    } else {
     $43 = ($$pre$i1|0)==(0|0);
     if ($43) {
      $$0$i$i$i = $$01;
      while(1) {
       $47 = ((($$0$i$i$i)) + 8|0);
       $48 = load4($47);
       $49 = load4($48);
       $50 = ($49|0)==($$0$i$i$i|0);
       if ($50) {
        $$0$i$i$i = $48;
       } else {
        $$05$i$i$i = $48;
        break;
       }
      }
     } else {
      $$0$i$i$i$i = $$pre$i1;
      while(1) {
       $44 = ((($$0$i$i$i$i)) + 4|0);
       $45 = load4($44);
       $46 = ($45|0)==(0|0);
       if ($46) {
        $$05$i$i$i = $$0$i$i$i$i;
        break;
       } else {
        $$0$i$i$i$i = $45;
       }
      }
     }
     $51 = $$05$i$i$i;
     $52 = ((($$05$i$i$i)) + 16|0);
     $53 = ((($52)) + 11|0);
     $54 = load1($53);
     $55 = ($54<<24>>24)<(0);
     $56 = ((($$05$i$i$i)) + 20|0);
     $57 = load4($56);
     $58 = $54&255;
     $59 = $55 ? $57 : $58;
     $60 = ((($1)) + 11|0);
     $61 = load1($60);
     $62 = ($61<<24>>24)<(0);
     $63 = ((($1)) + 4|0);
     $64 = load4($63);
     $65 = $61&255;
     $66 = $62 ? $64 : $65;
     $67 = ($66>>>0)<($59>>>0);
     $$sroa$speculated$i$i$i$i27$i = $67 ? $66 : $59;
     $68 = ($$sroa$speculated$i$i$i$i27$i|0)==(0);
     L57: do {
      if ($68) {
       label = 18;
      } else {
       $69 = load4($52);
       $70 = $55 ? $69 : $52;
       $71 = load4($1);
       $72 = $62 ? $71 : $1;
       $$01318$i2$i = $70;$$01417$i3$i = $$sroa$speculated$i$i$i$i27$i;$$019$i1$i = $72;
       while(1) {
        $73 = load1($$01318$i2$i);
        $74 = load1($$019$i1$i);
        $75 = ($73<<24>>24)==($74<<24>>24);
        if (!($75)) {
         break;
        }
        $76 = (($$01417$i3$i) + -1)|0;
        $77 = ((($$01318$i2$i)) + 1|0);
        $78 = ((($$019$i1$i)) + 1|0);
        $79 = ($76|0)==(0);
        if ($79) {
         label = 18;
         break L57;
        } else {
         $$01318$i2$i = $77;$$01417$i3$i = $76;$$019$i1$i = $78;
        }
       }
       $80 = $73&255;
       $81 = $74&255;
       $82 = (($80) - ($81))|0;
       $83 = ($82|0)==(0);
       if ($83) {
        label = 18;
       } else {
        $85 = ($82|0)<(0);
        if ($85) {
         $$sroa$051$0$i = $51;
         break L49;
        }
       }
      }
     } while(0);
     if ((label|0) == 18) {
      $84 = ($59>>>0)<($66>>>0);
      if ($84) {
       $$sroa$051$0$i = $51;
       break;
      }
     }
     $89 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$3,$1)|0);
     $$2$i = $89;
     break L47;
    }
   } while(0);
   $86 = ($$pre$i1|0)==(0|0);
   if ($86) {
    store4($3,$$01);
    $$2$i = $$01;
    break;
   } else {
    $87 = $$sroa$051$0$i;
    store4($3,$87);
    $88 = ((($87)) + 4|0);
    $$2$i = $88;
    break;
   }
  }
 } while(0);
 $146 = load4($$2$i);
 $147 = ($146|0)==(0|0);
 if (!($147)) {
  STACKTOP = sp;return;
 }
 $148 = (_malloc(32)|0);
 $149 = ($148|0)==(0|0);
 L75: do {
  if ($149) {
   while(1) {
    $150 = load4(9296);
    $151 = (($150) + 0)|0;
    store4(9296,$151);
    $152 = ($150|0)==(0);
    if ($152) {
     $$lcssa$i = 0;
     break L75;
    }
    $153 = $150;
    FUNCTION_TABLE_v[$153 & 3]();
    $154 = (_malloc(32)|0);
    $155 = ($154|0)==(0|0);
    if (!($155)) {
     $$lcssa$i = $154;
     break;
    }
   }
  } else {
   $$lcssa$i = $148;
  }
 } while(0);
 $156 = ((($$lcssa$i)) + 16|0);
 ; store8($156,i64_const(0,0),4); store4($156+8|0,0,4);
 $157 = ((($2)) + 11|0);
 $158 = load1($157);
 $159 = ($158<<24>>24)<(0);
 if ($159) {
  $160 = load4($2);
  $161 = ((($2)) + 4|0);
  $162 = load4($161);
  $163 = ($162>>>0)>(4294967279);
  if ($163) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $164 = ($162>>>0)<(11);
  if ($164) {
   $179 = $162&255;
   $180 = ((($$lcssa$i)) + 27|0);
   store1($180,$179);
   $181 = ($162|0)==(0);
   if ($181) {
    $$017$i = $156;
   } else {
    $$016$i = $156;
    label = 61;
   }
  } else {
   $165 = (($162) + 16)|0;
   $166 = $165 & -16;
   $167 = ($166|0)==(0);
   $$$i = $167 ? 1 : $166;
   $168 = (_malloc($$$i)|0);
   $169 = ($168|0)==(0|0);
   L88: do {
    if ($169) {
     while(1) {
      $170 = load4(9296);
      $171 = (($170) + 0)|0;
      store4(9296,$171);
      $172 = ($170|0)==(0);
      if ($172) {
       $$lcssa$i8 = 0;
       break L88;
      }
      $173 = $170;
      FUNCTION_TABLE_v[$173 & 3]();
      $174 = (_malloc($$$i)|0);
      $175 = ($174|0)==(0|0);
      if (!($175)) {
       $$lcssa$i8 = $174;
       break;
      }
     }
    } else {
     $$lcssa$i8 = $168;
    }
   } while(0);
   store4($156,$$lcssa$i8);
   $176 = $166 | -2147483648;
   $177 = ((($$lcssa$i)) + 24|0);
   store4($177,$176);
   $178 = ((($$lcssa$i)) + 20|0);
   store4($178,$162);
   $$016$i = $$lcssa$i8;
   label = 61;
  }
  if ((label|0) == 61) {
   _memcpy(($$016$i|0),($160|0),($162|0))|0;
   $$017$i = $$016$i;
  }
  $182 = (($$017$i) + ($162)|0);
  store1($182,0);
 } else {
  ; store8($156,load8($2,4),4); store4($156+8 | 0,load4($2+8 | 0,4),4);
 }
 $183 = ((($$lcssa$i)) + 28|0);
 $184 = ((($2)) + 12|0);
 $185 = load1($184);
 store1($183,$185);
 $186 = load4($3);
 store4($$lcssa$i,0);
 $187 = ((($$lcssa$i)) + 4|0);
 store4($187,0);
 $188 = ((($$lcssa$i)) + 8|0);
 store4($188,$186);
 store4($$2$i,$$lcssa$i);
 $189 = load4($0);
 $190 = load4($189);
 $191 = ($190|0)==(0|0);
 if ($191) {
  $195 = $$lcssa$i;
 } else {
  $192 = $190;
  store4($0,$192);
  $$pre$i = load4($$2$i);
  $195 = $$pre$i;
 }
 $193 = ((($0)) + 4|0);
 $194 = load4($193);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($194,$195);
 $196 = ((($0)) + 8|0);
 $197 = load4($196);
 $198 = (($197) + 1)|0;
 store4($196,$198);
 STACKTOP = sp;return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$01318$i = 0, $$01318$i2 = 0, $$01417$i = 0, $$01417$i3 = 0, $$019$i = 0, $$019$i1 = 0, $$020 = 0, $$sink = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i21 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
 var $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  store4($1,$3);
  $$020 = $3;
  return ($$020|0);
 }
 $6 = ((($2)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 $9 = ((($2)) + 4|0);
 $10 = load4($9);
 $11 = $7&255;
 $12 = $8 ? $10 : $11;
 $13 = load4($2);
 $14 = $8 ? $13 : $2;
 $$0 = $4;
 L5: while(1) {
  $15 = ((($$0)) + 16|0);
  $16 = ((($15)) + 11|0);
  $17 = load1($16);
  $18 = ($17<<24>>24)<(0);
  $19 = ((($$0)) + 20|0);
  $20 = load4($19);
  $21 = $17&255;
  $22 = $18 ? $20 : $21;
  $23 = ($22>>>0)<($12>>>0);
  $$sroa$speculated$i$i$i$i21 = $23 ? $22 : $12;
  $24 = ($$sroa$speculated$i$i$i$i21|0)==(0);
  L7: do {
   if ($24) {
    label = 8;
   } else {
    $25 = load4($15);
    $26 = $18 ? $25 : $15;
    $$01318$i = $14;$$01417$i = $$sroa$speculated$i$i$i$i21;$$019$i = $26;
    while(1) {
     $27 = load1($$01318$i);
     $28 = load1($$019$i);
     $29 = ($27<<24>>24)==($28<<24>>24);
     if (!($29)) {
      break;
     }
     $30 = (($$01417$i) + -1)|0;
     $31 = ((($$01318$i)) + 1|0);
     $32 = ((($$019$i)) + 1|0);
     $33 = ($30|0)==(0);
     if ($33) {
      label = 8;
      break L7;
     } else {
      $$01318$i = $31;$$01417$i = $30;$$019$i = $32;
     }
    }
    $34 = $27&255;
    $35 = $28&255;
    $36 = (($34) - ($35))|0;
    $37 = ($36|0)==(0);
    if ($37) {
     label = 8;
    } else {
     $39 = ($36|0)<(0);
     if ($39) {
      label = 10;
     } else {
      label = 12;
     }
    }
   }
  } while(0);
  if ((label|0) == 8) {
   label = 0;
   $38 = ($12>>>0)<($22>>>0);
   if ($38) {
    label = 10;
   } else {
    label = 12;
   }
  }
  if ((label|0) == 10) {
   label = 0;
   $40 = load4($$0);
   $41 = ($40|0)==(0|0);
   if ($41) {
    label = 11;
    break;
   } else {
    $$sink = $40;
   }
  }
  else if ((label|0) == 12) {
   label = 0;
   $42 = ($12>>>0)<($22>>>0);
   $$sroa$speculated$i$i$i$i = $42 ? $12 : $22;
   $43 = ($$sroa$speculated$i$i$i$i|0)==(0);
   L19: do {
    if ($43) {
     label = 17;
    } else {
     $44 = load4($15);
     $45 = $18 ? $44 : $15;
     $$01318$i2 = $45;$$01417$i3 = $$sroa$speculated$i$i$i$i;$$019$i1 = $14;
     while(1) {
      $46 = load1($$01318$i2);
      $47 = load1($$019$i1);
      $48 = ($46<<24>>24)==($47<<24>>24);
      if (!($48)) {
       break;
      }
      $49 = (($$01417$i3) + -1)|0;
      $50 = ((($$01318$i2)) + 1|0);
      $51 = ((($$019$i1)) + 1|0);
      $52 = ($49|0)==(0);
      if ($52) {
       label = 17;
       break L19;
      } else {
       $$01318$i2 = $50;$$01417$i3 = $49;$$019$i1 = $51;
      }
     }
     $53 = $46&255;
     $54 = $47&255;
     $55 = (($53) - ($54))|0;
     $56 = ($55|0)==(0);
     if ($56) {
      label = 17;
     } else {
      $57 = ($55|0)<(0);
      if (!($57)) {
       label = 22;
       break L5;
      }
     }
    }
   } while(0);
   if ((label|0) == 17) {
    label = 0;
    if (!($23)) {
     label = 22;
     break;
    }
   }
   $58 = ((($$0)) + 4|0);
   $59 = load4($58);
   $60 = ($59|0)==(0|0);
   if ($60) {
    label = 21;
    break;
   } else {
    $$sink = $59;
   }
  }
  $$0 = $$sink;
 }
 if ((label|0) == 11) {
  store4($1,$$0);
  $$020 = $$0;
  return ($$020|0);
 }
 else if ((label|0) == 21) {
  store4($1,$$0);
  $$020 = $58;
  return ($$020|0);
 }
 else if ((label|0) == 22) {
  store4($1,$$0);
  $$020 = $1;
  return ($$020|0);
 }
 return (0)|0;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = load4($0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($2);
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($4);
 $5 = ((($0)) + 16|0);
 $6 = ((($5)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 if (!($8)) {
  _free($0);
  return;
 }
 $9 = load4($5);
 _free($9);
 _free($0);
 return;
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 8|0);
 $2 = load4($1);
 return ($2|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$ph$lcssa$i$i = 0, $$0$ph14$i$i = 0, $$01318$i$i = 0, $$01318$i3$i = 0, $$01417$i$i = 0, $$01417$i4$i = 0, $$019$i$i = 0, $$019$i2$i = 0, $$07$ph13$i$i = 0, $$0710$i$i = 0, $$sroa$07$0 = 0, $$sroa$speculated$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
 var $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  $$sroa$07$0 = (1);
  STACKTOP = sp;return ($$sroa$07$0|0);
 }
 $6 = ((($1)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 $9 = ((($1)) + 4|0);
 $10 = load4($9);
 $11 = $7&255;
 $12 = $8 ? $10 : $11;
 $13 = load4($1);
 $14 = $8 ? $13 : $1;
 $$0$ph14$i$i = $3;$$07$ph13$i$i = $4;
 L4: while(1) {
  $$0710$i$i = $$07$ph13$i$i;
  L6: while(1) {
   $15 = ((($$0710$i$i)) + 16|0);
   $16 = ((($15)) + 11|0);
   $17 = load1($16);
   $18 = ($17<<24>>24)<(0);
   $19 = ((($$0710$i$i)) + 20|0);
   $20 = load4($19);
   $21 = $17&255;
   $22 = $18 ? $20 : $21;
   $23 = ($12>>>0)<($22>>>0);
   $$sroa$speculated$i$i$i$i$i$i = $23 ? $12 : $22;
   $24 = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
   L8: do {
    if ($24) {
     label = 9;
    } else {
     $25 = load4($15);
     $26 = $18 ? $25 : $15;
     $$01318$i$i = $26;$$01417$i$i = $$sroa$speculated$i$i$i$i$i$i;$$019$i$i = $14;
     while(1) {
      $27 = load1($$01318$i$i);
      $28 = load1($$019$i$i);
      $29 = ($27<<24>>24)==($28<<24>>24);
      if (!($29)) {
       break;
      }
      $30 = (($$01417$i$i) + -1)|0;
      $31 = ((($$01318$i$i)) + 1|0);
      $32 = ((($$019$i$i)) + 1|0);
      $33 = ($30|0)==(0);
      if ($33) {
       label = 9;
       break L8;
      } else {
       $$01318$i$i = $31;$$01417$i$i = $30;$$019$i$i = $32;
      }
     }
     $34 = $27&255;
     $35 = $28&255;
     $36 = (($34) - ($35))|0;
     $37 = ($36|0)==(0);
     if ($37) {
      label = 9;
     } else {
      $39 = ($36|0)<(0);
      if (!($39)) {
       break L6;
      }
     }
    }
   } while(0);
   if ((label|0) == 9) {
    label = 0;
    $38 = ($22>>>0)<($12>>>0);
    if (!($38)) {
     break;
    }
   }
   $42 = ((($$0710$i$i)) + 4|0);
   $43 = load4($42);
   $44 = ($43|0)==(0|0);
   if ($44) {
    $$0$ph$lcssa$i$i = $$0$ph14$i$i;
    break L4;
   } else {
    $$0710$i$i = $43;
   }
  }
  $40 = load4($$0710$i$i);
  $41 = ($40|0)==(0|0);
  if ($41) {
   $$0$ph$lcssa$i$i = $$0710$i$i;
   break;
  } else {
   $$0$ph14$i$i = $$0710$i$i;$$07$ph13$i$i = $40;
  }
 }
 $45 = ($$0$ph$lcssa$i$i|0)==($3|0);
 if ($45) {
  $$sroa$07$0 = (1);
  STACKTOP = sp;return ($$sroa$07$0|0);
 }
 $46 = ((($$0$ph$lcssa$i$i)) + 16|0);
 $47 = ((($46)) + 11|0);
 $48 = load1($47);
 $49 = ($48<<24>>24)<(0);
 $50 = ((($$0$ph$lcssa$i$i)) + 20|0);
 $51 = load4($50);
 $52 = $48&255;
 $53 = $49 ? $51 : $52;
 $54 = ($53>>>0)<($12>>>0);
 $$sroa$speculated$i$i$i$i$i = $54 ? $53 : $12;
 $55 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
 L23: do {
  if ($55) {
   label = 19;
  } else {
   $56 = load4($46);
   $57 = $49 ? $56 : $46;
   $$01318$i3$i = $14;$$01417$i4$i = $$sroa$speculated$i$i$i$i$i;$$019$i2$i = $57;
   while(1) {
    $58 = load1($$01318$i3$i);
    $59 = load1($$019$i2$i);
    $60 = ($58<<24>>24)==($59<<24>>24);
    if (!($60)) {
     break;
    }
    $61 = (($$01417$i4$i) + -1)|0;
    $62 = ((($$01318$i3$i)) + 1|0);
    $63 = ((($$019$i2$i)) + 1|0);
    $64 = ($61|0)==(0);
    if ($64) {
     label = 19;
     break L23;
    } else {
     $$01318$i3$i = $62;$$01417$i4$i = $61;$$019$i2$i = $63;
    }
   }
   $65 = $58&255;
   $66 = $59&255;
   $67 = (($65) - ($66))|0;
   $68 = ($67|0)==(0);
   if ($68) {
    label = 19;
   } else {
    $70 = ($67|0)<(0);
    if ($70) {
     $$sroa$07$0 = (1);
     STACKTOP = sp;return ($$sroa$07$0|0);
    }
   }
  }
 } while(0);
 if ((label|0) == 19) {
  $69 = ($12>>>0)<($53>>>0);
  if ($69) {
   $$sroa$07$0 = (1);
   STACKTOP = sp;return ($$sroa$07$0|0);
  }
 }
 $71 = ((($$0$ph$lcssa$i$i)) + 28|0);
 $72 = ((($71)) + 11|0);
 $73 = load1($72);
 $74 = ($73<<24>>24)<(0);
 $75 = ((($$0$ph$lcssa$i$i)) + 32|0);
 $76 = load4($75);
 $77 = $73&255;
 $78 = $74 ? $76 : $77;
 $79 = (($78) + 4)|0;
 $80 = (_malloc($79)|0);
 store4($80,$78);
 $81 = ((($80)) + 4|0);
 $82 = load4($71);
 $83 = $74 ? $82 : $71;
 _memcpy(($81|0),($83|0),($78|0))|0;
 store4($2,$80);
 $84 = (__emval_take_value((1080|0),($2|0))|0);
 $$sroa$07$0 = $84;
 STACKTOP = sp;return ($$sroa$07$0|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i$i = 0, $$0$i = 0, $$016$i$i = 0, $$017$i$i = 0, $$lcssa$i = 0, $$lcssa$i$i = 0, $$lcssa$i6$i = 0, $$pre$i$i = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0;
 var $109 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$3,$1)|0);
 $5 = load4($4);
 $6 = ($5|0)==(0|0);
 if ($6) {
  $7 = (_malloc(40)|0);
  $8 = ($7|0)==(0|0);
  L3: do {
   if ($8) {
    while(1) {
     $9 = load4(9296);
     $10 = (($9) + 0)|0;
     store4(9296,$10);
     $11 = ($9|0)==(0);
     if ($11) {
      $$lcssa$i$i = 0;
      break L3;
     }
     $12 = $9;
     FUNCTION_TABLE_v[$12 & 3]();
     $13 = (_malloc(40)|0);
     $14 = ($13|0)==(0|0);
     if (!($14)) {
      $$lcssa$i$i = $13;
      break;
     }
    }
   } else {
    $$lcssa$i$i = $7;
   }
  } while(0);
  $15 = ((($$lcssa$i$i)) + 16|0);
  ; store8($15,i64_const(0,0),4); store4($15+8|0,0,4);
  $16 = ((($1)) + 11|0);
  $17 = load1($16);
  $18 = ($17<<24>>24)<(0);
  if ($18) {
   $19 = load4($1);
   $20 = ((($1)) + 4|0);
   $21 = load4($20);
   $22 = ($21>>>0)>(4294967279);
   if ($22) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $23 = ($21>>>0)<(11);
   if ($23) {
    $38 = $21&255;
    $39 = ((($$lcssa$i$i)) + 27|0);
    store1($39,$38);
    $40 = ($21|0)==(0);
    if ($40) {
     $$017$i$i = $15;
    } else {
     $$016$i$i = $15;
     label = 15;
    }
   } else {
    $24 = (($21) + 16)|0;
    $25 = $24 & -16;
    $26 = ($25|0)==(0);
    $$$i$i = $26 ? 1 : $25;
    $27 = (_malloc($$$i$i)|0);
    $28 = ($27|0)==(0|0);
    L16: do {
     if ($28) {
      while(1) {
       $29 = load4(9296);
       $30 = (($29) + 0)|0;
       store4(9296,$30);
       $31 = ($29|0)==(0);
       if ($31) {
        $$lcssa$i6$i = 0;
        break L16;
       }
       $32 = $29;
       FUNCTION_TABLE_v[$32 & 3]();
       $33 = (_malloc($$$i$i)|0);
       $34 = ($33|0)==(0|0);
       if (!($34)) {
        $$lcssa$i6$i = $33;
        break;
       }
      }
     } else {
      $$lcssa$i6$i = $27;
     }
    } while(0);
    store4($15,$$lcssa$i6$i);
    $35 = $25 | -2147483648;
    $36 = ((($$lcssa$i$i)) + 24|0);
    store4($36,$35);
    $37 = ((($$lcssa$i$i)) + 20|0);
    store4($37,$21);
    $$016$i$i = $$lcssa$i6$i;
    label = 15;
   }
   if ((label|0) == 15) {
    _memcpy(($$016$i$i|0),($19|0),($21|0))|0;
    $$017$i$i = $$016$i$i;
   }
   $41 = (($$017$i$i) + ($21)|0);
   store1($41,0);
  } else {
   ; store8($15,load8($1,4),4); store4($15+8 | 0,load4($1+8 | 0,4),4);
  }
  $42 = ((($$lcssa$i$i)) + 28|0);
  ; store8($42,i64_const(0,0),4); store4($42+8|0,0,4);
  $43 = load4($3);
  store4($$lcssa$i$i,0);
  $44 = ((($$lcssa$i$i)) + 4|0);
  store4($44,0);
  $45 = ((($$lcssa$i$i)) + 8|0);
  store4($45,$43);
  store4($4,$$lcssa$i$i);
  $46 = load4($0);
  $47 = load4($46);
  $48 = ($47|0)==(0|0);
  if ($48) {
   $52 = $$lcssa$i$i;
  } else {
   $49 = $47;
   store4($0,$49);
   $$pre$i$i = load4($4);
   $52 = $$pre$i$i;
  }
  $50 = ((($0)) + 4|0);
  $51 = load4($50);
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($51,$52);
  $53 = ((($0)) + 8|0);
  $54 = load4($53);
  $55 = (($54) + 1)|0;
  store4($53,$55);
  $$0$i = $$lcssa$i$i;
 } else {
  $$0$i = $5;
 }
 $56 = ((($$0$i)) + 28|0);
 $57 = ($56|0)==($2|0);
 if ($57) {
  STACKTOP = sp;return;
 }
 $58 = ((($2)) + 11|0);
 $59 = load1($58);
 $60 = ($59<<24>>24)<(0);
 $61 = load4($2);
 $62 = $60 ? $61 : $2;
 $63 = ((($2)) + 4|0);
 $64 = load4($63);
 $65 = $59&255;
 $66 = $60 ? $64 : $65;
 $67 = ((($56)) + 11|0);
 $68 = load1($67);
 $69 = ($68<<24>>24)<(0);
 if ($69) {
  $70 = ((($$0$i)) + 36|0);
  $71 = load4($70);
  $72 = $71 & 2147483647;
  $phitmp$i$i = (($72) + -1)|0;
  $74 = $phitmp$i$i;
 } else {
  $74 = 10;
 }
 $73 = ($66>>>0)>($74>>>0);
 if (!($73)) {
  if ($69) {
   $75 = load4($56);
   $77 = $75;
  } else {
   $77 = $56;
  }
  $76 = ($66|0)==(0);
  if (!($76)) {
   _memmove(($77|0),($62|0),($66|0))|0;
  }
  $78 = (($77) + ($66)|0);
  store1($78,0);
  $79 = load1($67);
  $80 = ($79<<24>>24)<(0);
  if ($80) {
   $81 = ((($$0$i)) + 32|0);
   store4($81,$66);
   STACKTOP = sp;return;
  } else {
   $82 = $66&255;
   store1($67,$82);
   STACKTOP = sp;return;
  }
 }
 $83 = (($66) - ($74))|0;
 $84 = (-18 - ($74))|0;
 $85 = ($84>>>0)<($83>>>0);
 if ($85) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 if ($69) {
  $86 = load4($56);
  $105 = $86;
 } else {
  $105 = $56;
 }
 $87 = ($74>>>0)<(2147483623);
 if ($87) {
  $88 = $74 << 1;
  $89 = ($66>>>0)<($88>>>0);
  $$sroa$speculated$i = $89 ? $88 : $66;
  $90 = ($$sroa$speculated$i>>>0)<(11);
  $91 = (($$sroa$speculated$i) + 16)|0;
  $92 = $91 & -16;
  $phitmp$i = $90 ? 11 : $92;
  $94 = $phitmp$i;
 } else {
  $94 = -17;
 }
 $93 = ($94|0)==(0);
 $$$i = $93 ? 1 : $94;
 $95 = (_malloc($$$i)|0);
 $96 = ($95|0)==(0|0);
 L61: do {
  if ($96) {
   while(1) {
    $97 = load4(9296);
    $98 = (($97) + 0)|0;
    store4(9296,$98);
    $99 = ($97|0)==(0);
    if ($99) {
     $$lcssa$i = 0;
     break L61;
    }
    $100 = $97;
    FUNCTION_TABLE_v[$100 & 3]();
    $101 = (_malloc($$$i)|0);
    $102 = ($101|0)==(0|0);
    if (!($102)) {
     $$lcssa$i = $101;
     break;
    }
   }
  } else {
   $$lcssa$i = $95;
  }
 } while(0);
 $103 = ($66|0)==(0);
 if (!($103)) {
  _memcpy(($$lcssa$i|0),($62|0),($66|0))|0;
 }
 $104 = ($74|0)==(10);
 if (!($104)) {
  _free($105);
 }
 store4($56,$$lcssa$i);
 $106 = $94 | -2147483648;
 $107 = ((($$0$i)) + 36|0);
 store4($107,$106);
 $108 = ((($$0$i)) + 32|0);
 store4($108,$66);
 $109 = (($$lcssa$i) + ($66)|0);
 store1($109,0);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1024|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($3);
 _free($0);
 return;
}
function __ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_() {
 var $$lcssa$i = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_malloc(12)|0);
 $1 = ($0|0)==(0|0);
 L1: do {
  if ($1) {
   while(1) {
    $2 = load4(9296);
    $3 = (($2) + 0)|0;
    store4(9296,$3);
    $4 = ($2|0)==(0);
    if ($4) {
     $$lcssa$i = 0;
     break L1;
    }
    $5 = $2;
    FUNCTION_TABLE_v[$5 & 3]();
    $6 = (_malloc(12)|0);
    $7 = ($6|0)==(0|0);
    if (!($7)) {
     $$lcssa$i = $6;
     break;
    }
   }
  } else {
   $$lcssa$i = $0;
  }
 } while(0);
 $8 = ((($$lcssa$i)) + 4|0);
 store4($8,0);
 $9 = ((($$lcssa$i)) + 8|0);
 store4($9,0);
 store4($$lcssa$i,$8);
 return ($$lcssa$i|0);
}
function __ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (FUNCTION_TABLE_i[$0 & 7]()|0);
 return ($1|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$elt2 = 0, $$unpack = 0, $$unpack3 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($0);
 $$elt2 = ((($0)) + 4|0);
 $$unpack3 = load4($$elt2);
 $2 = $$unpack3 >> 1;
 $3 = (($1) + ($2)|0);
 $4 = $$unpack3 & 1;
 $5 = ($4|0)==(0);
 if ($5) {
  $9 = $$unpack;
  $10 = $9;
 } else {
  $6 = load4($3);
  $7 = (($6) + ($$unpack)|0);
  $8 = load4($7);
  $10 = $8;
 }
 $11 = (FUNCTION_TABLE_ii[$10 & 15]($3)|0);
 return ($11|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($0);
 $5 = ((($2)) + 4|0);
 $6 = load4($2);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $7 = ($6>>>0)>(4294967279);
 if ($7) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $8 = ($6>>>0)<(11);
 if ($8) {
  $23 = $6&255;
  $24 = ((($3)) + 11|0);
  store1($24,$23);
  $25 = ($6|0)==(0);
  if ($25) {
   $$017$i = $3;
  } else {
   $$016$i = $3;
   label = 9;
  }
 } else {
  $9 = (($6) + 16)|0;
  $10 = $9 & -16;
  $11 = ($10|0)==(0);
  $$$i = $11 ? 1 : $10;
  $12 = (_malloc($$$i)|0);
  $13 = ($12|0)==(0|0);
  L7: do {
   if ($13) {
    while(1) {
     $14 = load4(9296);
     $15 = (($14) + 0)|0;
     store4(9296,$15);
     $16 = ($14|0)==(0);
     if ($16) {
      $$lcssa$i = 0;
      break L7;
     }
     $17 = $14;
     FUNCTION_TABLE_v[$17 & 3]();
     $18 = (_malloc($$$i)|0);
     $19 = ($18|0)==(0|0);
     if (!($19)) {
      $$lcssa$i = $18;
      break;
     }
    }
   } else {
    $$lcssa$i = $12;
   }
  } while(0);
  store4($3,$$lcssa$i);
  $20 = $10 | -2147483648;
  $21 = ((($3)) + 8|0);
  store4($21,$20);
  $22 = ((($3)) + 4|0);
  store4($22,$6);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($5|0),($6|0))|0;
  $$017$i = $$016$i;
 }
 $26 = (($$017$i) + ($6)|0);
 store1($26,0);
 $27 = (FUNCTION_TABLE_iii[$4 & 15]($1,$3)|0);
 __emval_incref(($27|0));
 __emval_decref(($27|0));
 $28 = ((($3)) + 11|0);
 $29 = load1($28);
 $30 = ($29<<24>>24)<(0);
 if (!($30)) {
  STACKTOP = sp;return ($27|0);
 }
 $31 = load4($3);
 _free($31);
 STACKTOP = sp;return ($27|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$$i1 = 0, $$016$i = 0, $$016$i2 = 0, $$017$i = 0, $$017$i3 = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $4 = sp + 12|0;
 $5 = sp;
 $6 = load4($0);
 $7 = ((($2)) + 4|0);
 $8 = load4($2);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $9 = ($8>>>0)>(4294967279);
 if ($9) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $10 = ($8>>>0)<(11);
 if ($10) {
  $25 = $8&255;
  $26 = ((($4)) + 11|0);
  store1($26,$25);
  $27 = ($8|0)==(0);
  if ($27) {
   $$017$i = $4;
  } else {
   $$016$i = $4;
   label = 9;
  }
 } else {
  $11 = (($8) + 16)|0;
  $12 = $11 & -16;
  $13 = ($12|0)==(0);
  $$$i = $13 ? 1 : $12;
  $14 = (_malloc($$$i)|0);
  $15 = ($14|0)==(0|0);
  L7: do {
   if ($15) {
    while(1) {
     $16 = load4(9296);
     $17 = (($16) + 0)|0;
     store4(9296,$17);
     $18 = ($16|0)==(0);
     if ($18) {
      $$lcssa$i = 0;
      break L7;
     }
     $19 = $16;
     FUNCTION_TABLE_v[$19 & 3]();
     $20 = (_malloc($$$i)|0);
     $21 = ($20|0)==(0|0);
     if (!($21)) {
      $$lcssa$i = $20;
      break;
     }
    }
   } else {
    $$lcssa$i = $14;
   }
  } while(0);
  store4($4,$$lcssa$i);
  $22 = $12 | -2147483648;
  $23 = ((($4)) + 8|0);
  store4($23,$22);
  $24 = ((($4)) + 4|0);
  store4($24,$8);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($7|0),($8|0))|0;
  $$017$i = $$016$i;
 }
 $28 = (($$017$i) + ($8)|0);
 store1($28,0);
 $29 = ((($3)) + 4|0);
 $30 = load4($3);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $31 = ($30>>>0)>(4294967279);
 if ($31) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $32 = ($30>>>0)<(11);
 if ($32) {
  $47 = $30&255;
  $48 = ((($5)) + 11|0);
  store1($48,$47);
  $49 = ($30|0)==(0);
  if ($49) {
   $$017$i3 = $5;
  } else {
   $$016$i2 = $5;
   label = 18;
  }
 } else {
  $33 = (($30) + 16)|0;
  $34 = $33 & -16;
  $35 = ($34|0)==(0);
  $$$i1 = $35 ? 1 : $34;
  $36 = (_malloc($$$i1)|0);
  $37 = ($36|0)==(0|0);
  L21: do {
   if ($37) {
    while(1) {
     $38 = load4(9296);
     $39 = (($38) + 0)|0;
     store4(9296,$39);
     $40 = ($38|0)==(0);
     if ($40) {
      $$lcssa$i7 = 0;
      break L21;
     }
     $41 = $38;
     FUNCTION_TABLE_v[$41 & 3]();
     $42 = (_malloc($$$i1)|0);
     $43 = ($42|0)==(0|0);
     if (!($43)) {
      $$lcssa$i7 = $42;
      break;
     }
    }
   } else {
    $$lcssa$i7 = $36;
   }
  } while(0);
  store4($5,$$lcssa$i7);
  $44 = $34 | -2147483648;
  $45 = ((($5)) + 8|0);
  store4($45,$44);
  $46 = ((($5)) + 4|0);
  store4($46,$30);
  $$016$i2 = $$lcssa$i7;
  label = 18;
 }
 if ((label|0) == 18) {
  _memcpy(($$016$i2|0),($29|0),($30|0))|0;
  $$017$i3 = $$016$i2;
 }
 $50 = (($$017$i3) + ($30)|0);
 store1($50,0);
 FUNCTION_TABLE_viii[$6 & 31]($1,$4,$5);
 $51 = ((($5)) + 11|0);
 $52 = load1($51);
 $53 = ($52<<24>>24)<(0);
 if ($53) {
  $54 = load4($5);
  _free($54);
 }
 $55 = ((($4)) + 11|0);
 $56 = load1($55);
 $57 = ($56<<24>>24)<(0);
 if (!($57)) {
  STACKTOP = sp;return;
 }
 $58 = load4($4);
 _free($58);
 STACKTOP = sp;return;
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbNS_4lessIS6_EENS4_INS_4pairIKS6_bEEEEE4sizeEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 8|0);
 $2 = load4($1);
 return ($2|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEE3getERKSG_RSD_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$ph$lcssa$i$i = 0, $$0$ph14$i$i = 0, $$01318$i$i = 0, $$01318$i3$i = 0, $$01417$i$i = 0, $$01417$i4$i = 0, $$019$i$i = 0, $$019$i2$i = 0, $$07$ph13$i$i = 0, $$0710$i$i = 0, $$sroa$07$0 = 0, $$sroa$speculated$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
 var $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  $$sroa$07$0 = (1);
  STACKTOP = sp;return ($$sroa$07$0|0);
 }
 $6 = ((($1)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 $9 = ((($1)) + 4|0);
 $10 = load4($9);
 $11 = $7&255;
 $12 = $8 ? $10 : $11;
 $13 = load4($1);
 $14 = $8 ? $13 : $1;
 $$0$ph14$i$i = $3;$$07$ph13$i$i = $4;
 L4: while(1) {
  $$0710$i$i = $$07$ph13$i$i;
  L6: while(1) {
   $15 = ((($$0710$i$i)) + 16|0);
   $16 = ((($15)) + 11|0);
   $17 = load1($16);
   $18 = ($17<<24>>24)<(0);
   $19 = ((($$0710$i$i)) + 20|0);
   $20 = load4($19);
   $21 = $17&255;
   $22 = $18 ? $20 : $21;
   $23 = ($12>>>0)<($22>>>0);
   $$sroa$speculated$i$i$i$i$i$i = $23 ? $12 : $22;
   $24 = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
   L8: do {
    if ($24) {
     label = 9;
    } else {
     $25 = load4($15);
     $26 = $18 ? $25 : $15;
     $$01318$i$i = $26;$$01417$i$i = $$sroa$speculated$i$i$i$i$i$i;$$019$i$i = $14;
     while(1) {
      $27 = load1($$01318$i$i);
      $28 = load1($$019$i$i);
      $29 = ($27<<24>>24)==($28<<24>>24);
      if (!($29)) {
       break;
      }
      $30 = (($$01417$i$i) + -1)|0;
      $31 = ((($$01318$i$i)) + 1|0);
      $32 = ((($$019$i$i)) + 1|0);
      $33 = ($30|0)==(0);
      if ($33) {
       label = 9;
       break L8;
      } else {
       $$01318$i$i = $31;$$01417$i$i = $30;$$019$i$i = $32;
      }
     }
     $34 = $27&255;
     $35 = $28&255;
     $36 = (($34) - ($35))|0;
     $37 = ($36|0)==(0);
     if ($37) {
      label = 9;
     } else {
      $39 = ($36|0)<(0);
      if (!($39)) {
       break L6;
      }
     }
    }
   } while(0);
   if ((label|0) == 9) {
    label = 0;
    $38 = ($22>>>0)<($12>>>0);
    if (!($38)) {
     break;
    }
   }
   $42 = ((($$0710$i$i)) + 4|0);
   $43 = load4($42);
   $44 = ($43|0)==(0|0);
   if ($44) {
    $$0$ph$lcssa$i$i = $$0$ph14$i$i;
    break L4;
   } else {
    $$0710$i$i = $43;
   }
  }
  $40 = load4($$0710$i$i);
  $41 = ($40|0)==(0|0);
  if ($41) {
   $$0$ph$lcssa$i$i = $$0710$i$i;
   break;
  } else {
   $$0$ph14$i$i = $$0710$i$i;$$07$ph13$i$i = $40;
  }
 }
 $45 = ($$0$ph$lcssa$i$i|0)==($3|0);
 if ($45) {
  $$sroa$07$0 = (1);
  STACKTOP = sp;return ($$sroa$07$0|0);
 }
 $46 = ((($$0$ph$lcssa$i$i)) + 16|0);
 $47 = ((($46)) + 11|0);
 $48 = load1($47);
 $49 = ($48<<24>>24)<(0);
 $50 = ((($$0$ph$lcssa$i$i)) + 20|0);
 $51 = load4($50);
 $52 = $48&255;
 $53 = $49 ? $51 : $52;
 $54 = ($53>>>0)<($12>>>0);
 $$sroa$speculated$i$i$i$i$i = $54 ? $53 : $12;
 $55 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
 L23: do {
  if ($55) {
   label = 19;
  } else {
   $56 = load4($46);
   $57 = $49 ? $56 : $46;
   $$01318$i3$i = $14;$$01417$i4$i = $$sroa$speculated$i$i$i$i$i;$$019$i2$i = $57;
   while(1) {
    $58 = load1($$01318$i3$i);
    $59 = load1($$019$i2$i);
    $60 = ($58<<24>>24)==($59<<24>>24);
    if (!($60)) {
     break;
    }
    $61 = (($$01417$i4$i) + -1)|0;
    $62 = ((($$01318$i3$i)) + 1|0);
    $63 = ((($$019$i2$i)) + 1|0);
    $64 = ($61|0)==(0);
    if ($64) {
     label = 19;
     break L23;
    } else {
     $$01318$i3$i = $62;$$01417$i4$i = $61;$$019$i2$i = $63;
    }
   }
   $65 = $58&255;
   $66 = $59&255;
   $67 = (($65) - ($66))|0;
   $68 = ($67|0)==(0);
   if ($68) {
    label = 19;
   } else {
    $70 = ($67|0)<(0);
    if ($70) {
     $$sroa$07$0 = (1);
     STACKTOP = sp;return ($$sroa$07$0|0);
    }
   }
  }
 } while(0);
 if ((label|0) == 19) {
  $69 = ($12>>>0)<($53>>>0);
  if ($69) {
   $$sroa$07$0 = (1);
   STACKTOP = sp;return ($$sroa$07$0|0);
  }
 }
 $71 = ((($$0$ph$lcssa$i$i)) + 28|0);
 $72 = load1($71);
 $73 = $72&255;
 store4($2,$73);
 $74 = (__emval_take_value((1568|0),($2|0))|0);
 $$sroa$07$0 = $74;
 STACKTOP = sp;return ($$sroa$07$0|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEE3setERSG_RSD_RKb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i$i = 0, $$0$i = 0, $$016$i$i = 0, $$017$i$i = 0, $$lcssa$i$i = 0, $$lcssa$i6$i = 0, $$pre$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load1($2);
 $5 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$3,$1)|0);
 $6 = load4($5);
 $7 = ($6|0)==(0|0);
 if (!($7)) {
  $$0$i = $6;
  $57 = ((($$0$i)) + 28|0);
  store1($57,$4);
  STACKTOP = sp;return;
 }
 $8 = (_malloc(32)|0);
 $9 = ($8|0)==(0|0);
 L4: do {
  if ($9) {
   while(1) {
    $10 = load4(9296);
    $11 = (($10) + 0)|0;
    store4(9296,$11);
    $12 = ($10|0)==(0);
    if ($12) {
     $$lcssa$i$i = 0;
     break L4;
    }
    $13 = $10;
    FUNCTION_TABLE_v[$13 & 3]();
    $14 = (_malloc(32)|0);
    $15 = ($14|0)==(0|0);
    if (!($15)) {
     $$lcssa$i$i = $14;
     break;
    }
   }
  } else {
   $$lcssa$i$i = $8;
  }
 } while(0);
 $16 = ((($$lcssa$i$i)) + 16|0);
 ; store8($16,i64_const(0,0),4); store4($16+8|0,0,4);
 $17 = ((($1)) + 11|0);
 $18 = load1($17);
 $19 = ($18<<24>>24)<(0);
 if ($19) {
  $20 = load4($1);
  $21 = ((($1)) + 4|0);
  $22 = load4($21);
  $23 = ($22>>>0)>(4294967279);
  if ($23) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $24 = ($22>>>0)<(11);
  if ($24) {
   $39 = $22&255;
   $40 = ((($$lcssa$i$i)) + 27|0);
   store1($40,$39);
   $41 = ($22|0)==(0);
   if ($41) {
    $$017$i$i = $16;
   } else {
    $$016$i$i = $16;
    label = 15;
   }
  } else {
   $25 = (($22) + 16)|0;
   $26 = $25 & -16;
   $27 = ($26|0)==(0);
   $$$i$i = $27 ? 1 : $26;
   $28 = (_malloc($$$i$i)|0);
   $29 = ($28|0)==(0|0);
   L17: do {
    if ($29) {
     while(1) {
      $30 = load4(9296);
      $31 = (($30) + 0)|0;
      store4(9296,$31);
      $32 = ($30|0)==(0);
      if ($32) {
       $$lcssa$i6$i = 0;
       break L17;
      }
      $33 = $30;
      FUNCTION_TABLE_v[$33 & 3]();
      $34 = (_malloc($$$i$i)|0);
      $35 = ($34|0)==(0|0);
      if (!($35)) {
       $$lcssa$i6$i = $34;
       break;
      }
     }
    } else {
     $$lcssa$i6$i = $28;
    }
   } while(0);
   store4($16,$$lcssa$i6$i);
   $36 = $26 | -2147483648;
   $37 = ((($$lcssa$i$i)) + 24|0);
   store4($37,$36);
   $38 = ((($$lcssa$i$i)) + 20|0);
   store4($38,$22);
   $$016$i$i = $$lcssa$i6$i;
   label = 15;
  }
  if ((label|0) == 15) {
   _memcpy(($$016$i$i|0),($20|0),($22|0))|0;
   $$017$i$i = $$016$i$i;
  }
  $42 = (($$017$i$i) + ($22)|0);
  store1($42,0);
 } else {
  ; store8($16,load8($1,4),4); store4($16+8 | 0,load4($1+8 | 0,4),4);
 }
 $43 = ((($$lcssa$i$i)) + 28|0);
 store1($43,0);
 $44 = load4($3);
 store4($$lcssa$i$i,0);
 $45 = ((($$lcssa$i$i)) + 4|0);
 store4($45,0);
 $46 = ((($$lcssa$i$i)) + 8|0);
 store4($46,$44);
 store4($5,$$lcssa$i$i);
 $47 = load4($0);
 $48 = load4($47);
 $49 = ($48|0)==(0|0);
 if ($49) {
  $53 = $$lcssa$i$i;
 } else {
  $50 = $48;
  store4($0,$50);
  $$pre$i$i = load4($5);
  $53 = $$pre$i$i;
 }
 $51 = ((($0)) + 4|0);
 $52 = load4($51);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($52,$53);
 $54 = ((($0)) + 8|0);
 $55 = load4($54);
 $56 = (($55) + 1)|0;
 store4($54,$56);
 $$0$i = $$lcssa$i$i;
 $57 = ((($$0$i)) + 28|0);
 store1($57,$4);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEEEPKvPT_($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1104|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEEEvPT_($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($3);
 _free($0);
 return;
}
function __ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEJEEEPT_DpOT0_() {
 var $$lcssa$i = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_malloc(12)|0);
 $1 = ($0|0)==(0|0);
 L1: do {
  if ($1) {
   while(1) {
    $2 = load4(9296);
    $3 = (($2) + 0)|0;
    store4(9296,$3);
    $4 = ($2|0)==(0);
    if ($4) {
     $$lcssa$i = 0;
     break L1;
    }
    $5 = $2;
    FUNCTION_TABLE_v[$5 & 3]();
    $6 = (_malloc(12)|0);
    $7 = ($6|0)==(0|0);
    if (!($7)) {
     $$lcssa$i = $6;
     break;
    }
   }
  } else {
   $$lcssa$i = $0;
  }
 } while(0);
 $8 = ((($$lcssa$i)) + 4|0);
 store4($8,0);
 $9 = ((($$lcssa$i)) + 8|0);
 store4($9,0);
 store4($$lcssa$i,$8);
 return ($$lcssa$i|0);
}
function __ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEJEE6invokeEPFSH_vE($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (FUNCTION_TABLE_i[$0 & 7]()|0);
 return ($1|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$elt2 = 0, $$unpack = 0, $$unpack3 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($0);
 $$elt2 = ((($0)) + 4|0);
 $$unpack3 = load4($$elt2);
 $2 = $$unpack3 >> 1;
 $3 = (($1) + ($2)|0);
 $4 = $$unpack3 & 1;
 $5 = ($4|0)==(0);
 if ($5) {
  $9 = $$unpack;
  $10 = $9;
 } else {
  $6 = load4($3);
  $7 = (($6) + ($$unpack)|0);
  $8 = load4($7);
  $10 = $8;
 }
 $11 = (FUNCTION_TABLE_ii[$10 & 15]($3)|0);
 return ($11|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($0);
 $5 = ((($2)) + 4|0);
 $6 = load4($2);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $7 = ($6>>>0)>(4294967279);
 if ($7) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $8 = ($6>>>0)<(11);
 if ($8) {
  $23 = $6&255;
  $24 = ((($3)) + 11|0);
  store1($24,$23);
  $25 = ($6|0)==(0);
  if ($25) {
   $$017$i = $3;
  } else {
   $$016$i = $3;
   label = 9;
  }
 } else {
  $9 = (($6) + 16)|0;
  $10 = $9 & -16;
  $11 = ($10|0)==(0);
  $$$i = $11 ? 1 : $10;
  $12 = (_malloc($$$i)|0);
  $13 = ($12|0)==(0|0);
  L7: do {
   if ($13) {
    while(1) {
     $14 = load4(9296);
     $15 = (($14) + 0)|0;
     store4(9296,$15);
     $16 = ($14|0)==(0);
     if ($16) {
      $$lcssa$i = 0;
      break L7;
     }
     $17 = $14;
     FUNCTION_TABLE_v[$17 & 3]();
     $18 = (_malloc($$$i)|0);
     $19 = ($18|0)==(0|0);
     if (!($19)) {
      $$lcssa$i = $18;
      break;
     }
    }
   } else {
    $$lcssa$i = $12;
   }
  } while(0);
  store4($3,$$lcssa$i);
  $20 = $10 | -2147483648;
  $21 = ((($3)) + 8|0);
  store4($21,$20);
  $22 = ((($3)) + 4|0);
  store4($22,$6);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($5|0),($6|0))|0;
  $$017$i = $$016$i;
 }
 $26 = (($$017$i) + ($6)|0);
 store1($26,0);
 $27 = (FUNCTION_TABLE_iii[$4 & 15]($1,$3)|0);
 __emval_incref(($27|0));
 __emval_decref(($27|0));
 $28 = ((($3)) + 11|0);
 $29 = load1($28);
 $30 = ($29<<24>>24)<(0);
 if (!($30)) {
  STACKTOP = sp;return ($27|0);
 }
 $31 = load4($3);
 _free($31);
 STACKTOP = sp;return ($27|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEERSD_RKbEvSH_JSI_SK_EE6invokeEPSM_PSG_PNS0_11BindingTypeIS9_EUt_Eb($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $4 = sp;
 $5 = sp + 12|0;
 $6 = load4($0);
 $7 = ((($2)) + 4|0);
 $8 = load4($2);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $9 = ($8>>>0)>(4294967279);
 if ($9) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $10 = ($8>>>0)<(11);
 if ($10) {
  $25 = $8&255;
  $26 = ((($4)) + 11|0);
  store1($26,$25);
  $27 = ($8|0)==(0);
  if ($27) {
   $$017$i = $4;
  } else {
   $$016$i = $4;
   label = 9;
  }
 } else {
  $11 = (($8) + 16)|0;
  $12 = $11 & -16;
  $13 = ($12|0)==(0);
  $$$i = $13 ? 1 : $12;
  $14 = (_malloc($$$i)|0);
  $15 = ($14|0)==(0|0);
  L7: do {
   if ($15) {
    while(1) {
     $16 = load4(9296);
     $17 = (($16) + 0)|0;
     store4(9296,$17);
     $18 = ($16|0)==(0);
     if ($18) {
      $$lcssa$i = 0;
      break L7;
     }
     $19 = $16;
     FUNCTION_TABLE_v[$19 & 3]();
     $20 = (_malloc($$$i)|0);
     $21 = ($20|0)==(0|0);
     if (!($21)) {
      $$lcssa$i = $20;
      break;
     }
    }
   } else {
    $$lcssa$i = $14;
   }
  } while(0);
  store4($4,$$lcssa$i);
  $22 = $12 | -2147483648;
  $23 = ((($4)) + 8|0);
  store4($23,$22);
  $24 = ((($4)) + 4|0);
  store4($24,$8);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($7|0),($8|0))|0;
  $$017$i = $$016$i;
 }
 $28 = (($$017$i) + ($8)|0);
 store1($28,0);
 $29 = $3&1;
 store1($5,$29);
 FUNCTION_TABLE_viii[$6 & 31]($1,$4,$5);
 $30 = ((($4)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 if (!($32)) {
  STACKTOP = sp;return;
 }
 $33 = load4($4);
 _free($33);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13getActualTypeI9VNodeDataEEPKvPT_($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1144|0);
}
function __ZN10emscripten8internal14raw_destructorI9VNodeDataEEvPT_($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + 48|0);
 $3 = ((($2)) + 11|0);
 $4 = load1($3);
 $5 = ($4<<24>>24)<(0);
 if ($5) {
  $6 = load4($2);
  _free($6);
 }
 $7 = ((($0)) + 36|0);
 $8 = ((($7)) + 11|0);
 $9 = load1($8);
 $10 = ($9<<24>>24)<(0);
 if ($10) {
  $11 = load4($7);
  _free($11);
 }
 $12 = ((($0)) + 28|0);
 $13 = load4($12);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($13);
 $14 = ((($0)) + 16|0);
 $15 = load4($14);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($15);
 $16 = ((($0)) + 4|0);
 $17 = load4($16);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($17);
 _free($0);
 return;
}
function __ZN10emscripten8internal12operator_newI9VNodeDataJEEEPT_DpOT0_() {
 var $$lcssa$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_malloc(60)|0);
 $1 = ($0|0)==(0|0);
 L1: do {
  if ($1) {
   while(1) {
    $2 = load4(9296);
    $3 = (($2) + 0)|0;
    store4(9296,$3);
    $4 = ($2|0)==(0);
    if ($4) {
     $$lcssa$i = 0;
     break L1;
    }
    $5 = $2;
    FUNCTION_TABLE_v[$5 & 3]();
    $6 = (_malloc(60)|0);
    $7 = ($6|0)==(0|0);
    if (!($7)) {
     $$lcssa$i = $6;
     break;
    }
   }
  } else {
   $$lcssa$i = $0;
  }
 } while(0);
 $8 = ((($$lcssa$i)) + 4|0);
 store4($8,0);
 $9 = ((($$lcssa$i)) + 8|0);
 store4($9,0);
 store4($$lcssa$i,$8);
 $10 = ((($$lcssa$i)) + 12|0);
 $11 = ((($$lcssa$i)) + 16|0);
 store4($11,0);
 $12 = ((($$lcssa$i)) + 20|0);
 store4($12,0);
 store4($10,$11);
 $13 = ((($$lcssa$i)) + 24|0);
 $14 = ((($$lcssa$i)) + 28|0);
 store4($14,0);
 $15 = ((($$lcssa$i)) + 32|0);
 store4($15,0);
 store4($13,$14);
 $16 = ((($$lcssa$i)) + 36|0);
 ; store8($16,i64_const(0,0),4); store8($16+8|0,i64_const(0,0),4); store8($16+16|0,i64_const(0,0),4);
 return ($$lcssa$i|0);
}
function __ZN10emscripten8internal7InvokerIP9VNodeDataJEE6invokeEPFS3_vE($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (FUNCTION_TABLE_i[$0 & 7]()|0);
 return ($1|0);
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = ((($3)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 $7 = ((($3)) + 4|0);
 $8 = load4($7);
 $9 = $5&255;
 $10 = $6 ? $8 : $9;
 $11 = (($10) + 4)|0;
 $12 = (_malloc($11)|0);
 store4($12,$10);
 $13 = ((($12)) + 4|0);
 $14 = load4($3);
 $15 = $6 ? $14 : $3;
 _memcpy(($13|0),($15|0),($10|0))|0;
 return ($12|0);
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i1 = 0, $$016$i = 0, $$017$i = 0, $$017$off041$i = 0, $$017$off042$i = 0, $$017$off047$i = 0, $$018$off039$i = 0, $$018$off046$i = 0, $$01937$i = 0, $$01938$i = 0, $$01945$i = 0, $$02035$i = 0, $$02036$i = 0, $$02044$i = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $$phitmp$i$i = 0, $$pre = 0, $10 = 0;
 var $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp$i$i = 0, $phitmp$i22$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($0);
 $5 = (($1) + ($4)|0);
 $6 = ((($2)) + 4|0);
 $7 = load4($2);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $8 = ($7>>>0)>(4294967279);
 if ($8) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $9 = ($7>>>0)<(11);
 if ($9) {
  $24 = $7&255;
  $25 = ((($3)) + 11|0);
  store1($25,$24);
  $26 = ($7|0)==(0);
  if ($26) {
   $$017$i = $3;
  } else {
   $$016$i = $3;
   label = 9;
  }
 } else {
  $10 = (($7) + 16)|0;
  $11 = $10 & -16;
  $12 = ($11|0)==(0);
  $$$i = $12 ? 1 : $11;
  $13 = (_malloc($$$i)|0);
  $14 = ($13|0)==(0|0);
  L7: do {
   if ($14) {
    while(1) {
     $15 = load4(9296);
     $16 = (($15) + 0)|0;
     store4(9296,$16);
     $17 = ($15|0)==(0);
     if ($17) {
      $$lcssa$i = 0;
      break L7;
     }
     $18 = $15;
     FUNCTION_TABLE_v[$18 & 3]();
     $19 = (_malloc($$$i)|0);
     $20 = ($19|0)==(0|0);
     if (!($20)) {
      $$lcssa$i = $19;
      break;
     }
    }
   } else {
    $$lcssa$i = $13;
   }
  } while(0);
  store4($3,$$lcssa$i);
  $21 = $11 | -2147483648;
  $22 = ((($3)) + 8|0);
  store4($22,$21);
  $23 = ((($3)) + 4|0);
  store4($23,$7);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($6|0),($7|0))|0;
  $$017$i = $$016$i;
 }
 $27 = (($$017$i) + ($7)|0);
 store1($27,0);
 $28 = ((($5)) + 11|0);
 $29 = load1($28);
 $30 = ($29<<24>>24)<(0);
 if ($30) {
  $31 = load4($5);
  store1($31,0);
  $32 = ((($5)) + 4|0);
  store4($32,0);
  $$pre = load1($28);
  $33 = ($$pre<<24>>24)<(0);
  if ($33) {
   $34 = ((($5)) + 8|0);
   $35 = load4($34);
   $36 = $35 & 2147483647;
   $phitmp$i$i = (($36) + -1)|0;
   $40 = 0;$44 = $phitmp$i$i;$60 = $$pre;$69 = 1;
  } else {
   $38 = $$pre;
   label = 14;
  }
 } else {
  store1($5,0);
  store1($28,0);
  $38 = 0;
  label = 14;
 }
 if ((label|0) == 14) {
  $37 = $38&255;
  $40 = $37;$44 = 10;$60 = $38;$69 = 0;
 }
 $39 = ($40>>>0)<(11);
 $41 = (($40) + 16)|0;
 $42 = $41 & 496;
 $phitmp$i22$i = (($42) + -1)|0;
 $$phitmp$i$i = $39 ? 10 : $phitmp$i22$i;
 $43 = ($$phitmp$i$i|0)==($44|0);
 if ($43) {
  ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
  STACKTOP = sp;return;
 }
 if ($39) {
  $56 = load4($5);
  if ($69) {
   $$017$off042$i = 0;$$01938$i = $56;$$02036$i = $5;
   label = 23;
  } else {
   $$017$off047$i = 0;$$018$off046$i = 1;$$01945$i = $56;$$02044$i = $5;
   label = 24;
  }
 } else {
  $45 = (($$phitmp$i$i) + 1)|0;
  $46 = ($45|0)==(0);
  $$$i1 = $46 ? 1 : $45;
  $47 = (_malloc($$$i1)|0);
  $48 = ($47|0)==(0|0);
  L28: do {
   if ($48) {
    while(1) {
     $49 = load4(9296);
     $50 = (($49) + 0)|0;
     store4(9296,$50);
     $51 = ($49|0)==(0);
     if ($51) {
      $$lcssa$i7 = 0;
      break L28;
     }
     $52 = $49;
     FUNCTION_TABLE_v[$52 & 3]();
     $53 = (_malloc($$$i1)|0);
     $54 = ($53|0)==(0|0);
     if (!($54)) {
      $$lcssa$i7 = $53;
      break;
     }
    }
   } else {
    $$lcssa$i7 = $47;
   }
  } while(0);
  if ($69) {
   $55 = load4($5);
   $$017$off042$i = 1;$$01938$i = $55;$$02036$i = $$lcssa$i7;
   label = 23;
  } else {
   $$017$off047$i = 1;$$018$off046$i = 0;$$01945$i = $5;$$02044$i = $$lcssa$i7;
   label = 24;
  }
 }
 if ((label|0) == 23) {
  $57 = ((($5)) + 4|0);
  $58 = load4($57);
  $$017$off041$i = $$017$off042$i;$$018$off039$i = 1;$$01937$i = $$01938$i;$$02035$i = $$02036$i;$62 = $58;
 }
 else if ((label|0) == 24) {
  $59 = $60&255;
  $$017$off041$i = $$017$off047$i;$$018$off039$i = $$018$off046$i;$$01937$i = $$01945$i;$$02035$i = $$02044$i;$62 = $59;
 }
 $61 = (($62) + 1)|0;
 $63 = ($61|0)==(0);
 if (!($63)) {
  _memcpy(($$02035$i|0),($$01937$i|0),($61|0))|0;
 }
 if ($$018$off039$i) {
  _free($$01937$i);
 }
 if ($$017$off041$i) {
  $64 = (($$phitmp$i$i) + 1)|0;
  $65 = $64 | -2147483648;
  $66 = ((($5)) + 8|0);
  store4($66,$65);
  $67 = ((($5)) + 4|0);
  store4($67,$40);
  store4($5,$$02035$i);
  ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
  STACKTOP = sp;return;
 } else {
  $68 = $40&255;
  store1($28,$68);
  ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
  STACKTOP = sp;return;
 }
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEEE7getWireIS2_EEPSH_RKMS2_SH_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$i$i$i$i$i$i = 0, $$0$i$i$i$i$i$i$i = 0, $$05$i$i$i$i$i$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = (_malloc(12)|0);
 $5 = ($4|0)==(0|0);
 L1: do {
  if ($5) {
   while(1) {
    $6 = load4(9296);
    $7 = (($6) + 0)|0;
    store4(9296,$7);
    $8 = ($6|0)==(0);
    if ($8) {
     $$lcssa$i = 0;
     break L1;
    }
    $9 = $6;
    FUNCTION_TABLE_v[$9 & 3]();
    $10 = (_malloc(12)|0);
    $11 = ($10|0)==(0|0);
    if (!($11)) {
     $$lcssa$i = $10;
     break;
    }
   }
  } else {
   $$lcssa$i = $4;
  }
 } while(0);
 $12 = ((($$lcssa$i)) + 4|0);
 store4($12,0);
 $13 = ((($$lcssa$i)) + 8|0);
 store4($13,0);
 store4($$lcssa$i,$12);
 $14 = load4($3);
 $15 = ((($3)) + 4|0);
 $16 = ($14|0)==($15|0);
 if ($16) {
  return ($$lcssa$i|0);
 }
 $18 = $14;$20 = $14;
 while(1) {
  $17 = ((($18)) + 16|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($$lcssa$i,$12,$17,$17);
  $19 = ((($20)) + 4|0);
  $21 = load4($19);
  $22 = ($21|0)==(0|0);
  if ($22) {
   $$0$i$i$i$i$i$i = $20;
   while(1) {
    $25 = ((($$0$i$i$i$i$i$i)) + 8|0);
    $26 = load4($25);
    $27 = load4($26);
    $28 = ($27|0)==($$0$i$i$i$i$i$i|0);
    if ($28) {
     $$05$i$i$i$i$i$i = $26;
     break;
    } else {
     $$0$i$i$i$i$i$i = $26;
    }
   }
  } else {
   $$0$i$i$i$i$i$i$i = $21;
   while(1) {
    $23 = load4($$0$i$i$i$i$i$i$i);
    $24 = ($23|0)==(0|0);
    if ($24) {
     $$05$i$i$i$i$i$i = $$0$i$i$i$i$i$i$i;
     break;
    } else {
     $$0$i$i$i$i$i$i$i = $23;
    }
   }
  }
  $29 = ($$05$i$i$i$i$i$i|0)==($15|0);
  if ($29) {
   break;
  } else {
   $18 = $$05$i$i$i$i$i$i;$20 = $$05$i$i$i$i$i$i;
  }
 }
 return ($$lcssa$i|0);
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEEE7setWireIS2_EEvRKMS2_SH_RT_PSH_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (($1) + ($3)|0);
 $5 = ($4|0)==($2|0);
 if ($5) {
  return;
 }
 $6 = load4($2);
 $7 = ((($2)) + 4|0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($4,$6,$7);
 return;
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEEE7getWireIS2_EEPSH_RKMS2_SH_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$i$i$i$i$i$i = 0, $$0$i$i$i$i$i$i$i = 0, $$05$i$i$i$i$i$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = (_malloc(12)|0);
 $5 = ($4|0)==(0|0);
 L1: do {
  if ($5) {
   while(1) {
    $6 = load4(9296);
    $7 = (($6) + 0)|0;
    store4(9296,$7);
    $8 = ($6|0)==(0);
    if ($8) {
     $$lcssa$i = 0;
     break L1;
    }
    $9 = $6;
    FUNCTION_TABLE_v[$9 & 3]();
    $10 = (_malloc(12)|0);
    $11 = ($10|0)==(0|0);
    if (!($11)) {
     $$lcssa$i = $10;
     break;
    }
   }
  } else {
   $$lcssa$i = $4;
  }
 } while(0);
 $12 = ((($$lcssa$i)) + 4|0);
 store4($12,0);
 $13 = ((($$lcssa$i)) + 8|0);
 store4($13,0);
 store4($$lcssa$i,$12);
 $14 = load4($3);
 $15 = ((($3)) + 4|0);
 $16 = ($14|0)==($15|0);
 if ($16) {
  return ($$lcssa$i|0);
 }
 $18 = $14;$20 = $14;
 while(1) {
  $17 = ((($18)) + 16|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_bEEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($$lcssa$i,$12,$17,$17);
  $19 = ((($20)) + 4|0);
  $21 = load4($19);
  $22 = ($21|0)==(0|0);
  if ($22) {
   $$0$i$i$i$i$i$i = $20;
   while(1) {
    $25 = ((($$0$i$i$i$i$i$i)) + 8|0);
    $26 = load4($25);
    $27 = load4($26);
    $28 = ($27|0)==($$0$i$i$i$i$i$i|0);
    if ($28) {
     $$05$i$i$i$i$i$i = $26;
     break;
    } else {
     $$0$i$i$i$i$i$i = $26;
    }
   }
  } else {
   $$0$i$i$i$i$i$i$i = $21;
   while(1) {
    $23 = load4($$0$i$i$i$i$i$i$i);
    $24 = ($23|0)==(0|0);
    if ($24) {
     $$05$i$i$i$i$i$i = $$0$i$i$i$i$i$i$i;
     break;
    } else {
     $$0$i$i$i$i$i$i$i = $23;
    }
   }
  }
  $29 = ($$05$i$i$i$i$i$i|0)==($15|0);
  if ($29) {
   break;
  } else {
   $18 = $$05$i$i$i$i$i$i;$20 = $$05$i$i$i$i$i$i;
  }
 }
 return ($$lcssa$i|0);
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEEE7setWireIS2_EEvRKMS2_SH_RT_PSH_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (($1) + ($3)|0);
 $5 = ($4|0)==($2|0);
 if ($5) {
  return;
 }
 $6 = load4($2);
 $7 = ((($2)) + 4|0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($4,$6,$7);
 return;
}
function __ZN10emscripten8internal15raw_constructorI5VNodeJEEEPT_DpNS0_11BindingTypeIT0_E8WireTypeE() {
 var $$lcssa$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_malloc(112)|0);
 $1 = ($0|0)==(0|0);
 L1: do {
  if ($1) {
   while(1) {
    $2 = load4(9296);
    $3 = (($2) + 0)|0;
    store4(9296,$3);
    $4 = ($2|0)==(0);
    if ($4) {
     $$lcssa$i = 0;
     break L1;
    }
    $5 = $2;
    FUNCTION_TABLE_v[$5 & 3]();
    $6 = (_malloc(112)|0);
    $7 = ($6|0)==(0|0);
    if (!($7)) {
     $$lcssa$i = $6;
     break;
    }
   }
  } else {
   $$lcssa$i = $0;
  }
 } while(0);
 $8 = ((($$lcssa$i)) + 36|0);
 $9 = ((($$lcssa$i)) + 40|0);
 store4($9,0);
 $10 = ((($$lcssa$i)) + 44|0);
 store4($10,0);
 ; store8($$lcssa$i,i64_const(0,0),4); store8($$lcssa$i+8|0,i64_const(0,0),4); store8($$lcssa$i+16|0,i64_const(0,0),4); store8($$lcssa$i+24|0,i64_const(0,0),4); store4($$lcssa$i+32|0,0,4);
 store4($8,$9);
 $11 = ((($$lcssa$i)) + 48|0);
 $12 = ((($$lcssa$i)) + 52|0);
 store4($12,0);
 $13 = ((($$lcssa$i)) + 56|0);
 store4($13,0);
 store4($11,$12);
 $14 = ((($$lcssa$i)) + 60|0);
 $15 = ((($$lcssa$i)) + 64|0);
 store4($15,0);
 $16 = ((($$lcssa$i)) + 68|0);
 store4($16,0);
 store4($14,$15);
 $17 = ((($$lcssa$i)) + 72|0);
 ; store8($17,i64_const(0,0),4); store8($17+8|0,i64_const(0,0),4); store8($17+16|0,i64_const(0,0),4);
 $18 = ((($$lcssa$i)) + 96|0);
 store4($18,(1));
 $19 = ((($$lcssa$i)) + 100|0);
 store4($19,0);
 $20 = ((($$lcssa$i)) + 104|0);
 store4($20,0);
 $21 = ((($$lcssa$i)) + 108|0);
 store4($21,0);
 return ($$lcssa$i|0);
}
function __ZN10emscripten8internal14raw_destructorI5VNodeEEvPT_($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 __ZN5VNodeD2Ev($0);
 _free($0);
 return;
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = ((($3)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 $7 = ((($3)) + 4|0);
 $8 = load4($7);
 $9 = $5&255;
 $10 = $6 ? $8 : $9;
 $11 = (($10) + 4)|0;
 $12 = (_malloc($11)|0);
 store4($12,$10);
 $13 = ((($12)) + 4|0);
 $14 = load4($3);
 $15 = $6 ? $14 : $3;
 _memcpy(($13|0),($15|0),($10|0))|0;
 return ($12|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i1 = 0, $$016$i = 0, $$017$i = 0, $$017$off041$i = 0, $$017$off042$i = 0, $$017$off047$i = 0, $$018$off039$i = 0, $$018$off046$i = 0, $$01937$i = 0, $$01938$i = 0, $$01945$i = 0, $$02035$i = 0, $$02036$i = 0, $$02044$i = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $$phitmp$i$i = 0, $$pre = 0, $10 = 0;
 var $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp$i$i = 0, $phitmp$i22$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($0);
 $5 = (($1) + ($4)|0);
 $6 = ((($2)) + 4|0);
 $7 = load4($2);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $8 = ($7>>>0)>(4294967279);
 if ($8) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $9 = ($7>>>0)<(11);
 if ($9) {
  $24 = $7&255;
  $25 = ((($3)) + 11|0);
  store1($25,$24);
  $26 = ($7|0)==(0);
  if ($26) {
   $$017$i = $3;
  } else {
   $$016$i = $3;
   label = 9;
  }
 } else {
  $10 = (($7) + 16)|0;
  $11 = $10 & -16;
  $12 = ($11|0)==(0);
  $$$i = $12 ? 1 : $11;
  $13 = (_malloc($$$i)|0);
  $14 = ($13|0)==(0|0);
  L7: do {
   if ($14) {
    while(1) {
     $15 = load4(9296);
     $16 = (($15) + 0)|0;
     store4(9296,$16);
     $17 = ($15|0)==(0);
     if ($17) {
      $$lcssa$i = 0;
      break L7;
     }
     $18 = $15;
     FUNCTION_TABLE_v[$18 & 3]();
     $19 = (_malloc($$$i)|0);
     $20 = ($19|0)==(0|0);
     if (!($20)) {
      $$lcssa$i = $19;
      break;
     }
    }
   } else {
    $$lcssa$i = $13;
   }
  } while(0);
  store4($3,$$lcssa$i);
  $21 = $11 | -2147483648;
  $22 = ((($3)) + 8|0);
  store4($22,$21);
  $23 = ((($3)) + 4|0);
  store4($23,$7);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($6|0),($7|0))|0;
  $$017$i = $$016$i;
 }
 $27 = (($$017$i) + ($7)|0);
 store1($27,0);
 $28 = ((($5)) + 11|0);
 $29 = load1($28);
 $30 = ($29<<24>>24)<(0);
 if ($30) {
  $31 = load4($5);
  store1($31,0);
  $32 = ((($5)) + 4|0);
  store4($32,0);
  $$pre = load1($28);
  $33 = ($$pre<<24>>24)<(0);
  if ($33) {
   $34 = ((($5)) + 8|0);
   $35 = load4($34);
   $36 = $35 & 2147483647;
   $phitmp$i$i = (($36) + -1)|0;
   $40 = 0;$44 = $phitmp$i$i;$60 = $$pre;$69 = 1;
  } else {
   $38 = $$pre;
   label = 14;
  }
 } else {
  store1($5,0);
  store1($28,0);
  $38 = 0;
  label = 14;
 }
 if ((label|0) == 14) {
  $37 = $38&255;
  $40 = $37;$44 = 10;$60 = $38;$69 = 0;
 }
 $39 = ($40>>>0)<(11);
 $41 = (($40) + 16)|0;
 $42 = $41 & 496;
 $phitmp$i22$i = (($42) + -1)|0;
 $$phitmp$i$i = $39 ? 10 : $phitmp$i22$i;
 $43 = ($$phitmp$i$i|0)==($44|0);
 if ($43) {
  ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
  STACKTOP = sp;return;
 }
 if ($39) {
  $56 = load4($5);
  if ($69) {
   $$017$off042$i = 0;$$01938$i = $56;$$02036$i = $5;
   label = 23;
  } else {
   $$017$off047$i = 0;$$018$off046$i = 1;$$01945$i = $56;$$02044$i = $5;
   label = 24;
  }
 } else {
  $45 = (($$phitmp$i$i) + 1)|0;
  $46 = ($45|0)==(0);
  $$$i1 = $46 ? 1 : $45;
  $47 = (_malloc($$$i1)|0);
  $48 = ($47|0)==(0|0);
  L28: do {
   if ($48) {
    while(1) {
     $49 = load4(9296);
     $50 = (($49) + 0)|0;
     store4(9296,$50);
     $51 = ($49|0)==(0);
     if ($51) {
      $$lcssa$i7 = 0;
      break L28;
     }
     $52 = $49;
     FUNCTION_TABLE_v[$52 & 3]();
     $53 = (_malloc($$$i1)|0);
     $54 = ($53|0)==(0|0);
     if (!($54)) {
      $$lcssa$i7 = $53;
      break;
     }
    }
   } else {
    $$lcssa$i7 = $47;
   }
  } while(0);
  if ($69) {
   $55 = load4($5);
   $$017$off042$i = 1;$$01938$i = $55;$$02036$i = $$lcssa$i7;
   label = 23;
  } else {
   $$017$off047$i = 1;$$018$off046$i = 0;$$01945$i = $5;$$02044$i = $$lcssa$i7;
   label = 24;
  }
 }
 if ((label|0) == 23) {
  $57 = ((($5)) + 4|0);
  $58 = load4($57);
  $$017$off041$i = $$017$off042$i;$$018$off039$i = 1;$$01937$i = $$01938$i;$$02035$i = $$02036$i;$62 = $58;
 }
 else if ((label|0) == 24) {
  $59 = $60&255;
  $$017$off041$i = $$017$off047$i;$$018$off039$i = $$018$off046$i;$$01937$i = $$01945$i;$$02035$i = $$02044$i;$62 = $59;
 }
 $61 = (($62) + 1)|0;
 $63 = ($61|0)==(0);
 if (!($63)) {
  _memcpy(($$02035$i|0),($$01937$i|0),($61|0))|0;
 }
 if ($$018$off039$i) {
  _free($$01937$i);
 }
 if ($$017$off041$i) {
  $64 = (($$phitmp$i$i) + 1)|0;
  $65 = $64 | -2147483648;
  $66 = ((($5)) + 8|0);
  store4($66,$65);
  $67 = ((($5)) + 4|0);
  store4($67,$40);
  store4($5,$$02035$i);
  ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
  STACKTOP = sp;return;
 } else {
  $68 = $40&255;
  store1($28,$68);
  ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
  STACKTOP = sp;return;
 }
}
function __ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7getWireIS2_EEPS3_RKMS2_S3_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$lcssa$i = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = (_malloc(60)|0);
 $5 = ($4|0)==(0|0);
 L1: do {
  if ($5) {
   while(1) {
    $6 = load4(9296);
    $7 = (($6) + 0)|0;
    store4(9296,$7);
    $8 = ($6|0)==(0);
    if ($8) {
     $$lcssa$i = 0;
     break L1;
    }
    $9 = $6;
    FUNCTION_TABLE_v[$9 & 3]();
    $10 = (_malloc(60)|0);
    $11 = ($10|0)==(0|0);
    if (!($11)) {
     $$lcssa$i = $10;
     break;
    }
   }
  } else {
   $$lcssa$i = $4;
  }
 } while(0);
 __ZN9VNodeDataC2ERKS_($$lcssa$i,$3);
 return ($$lcssa$i|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7setWireIS2_EEvRKMS2_S3_RT_PS3_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i2 = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i11 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0;
 var $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0;
 var $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0;
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0;
 var $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0;
 var $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $phitmp$i$i4 = 0, $phitmp$i12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (($1) + ($3)|0);
 $5 = ($4|0)==($2|0);
 if (!($5)) {
  $6 = load4($2);
  $7 = ((($2)) + 4|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($4,$6,$7);
  $8 = ((($4)) + 12|0);
  $9 = ((($2)) + 12|0);
  $10 = load4($9);
  $11 = ((($2)) + 16|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($8,$10,$11);
  $12 = ((($4)) + 24|0);
  $13 = ((($2)) + 24|0);
  $14 = load4($13);
  $15 = ((($2)) + 28|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($12,$14,$15);
 }
 $16 = ((($4)) + 36|0);
 $17 = ((($2)) + 36|0);
 $18 = ($16|0)==($17|0);
 do {
  if (!($18)) {
   $19 = ((($17)) + 11|0);
   $20 = load1($19);
   $21 = ($20<<24>>24)<(0);
   $22 = load4($17);
   $23 = $21 ? $22 : $17;
   $24 = ((($2)) + 40|0);
   $25 = load4($24);
   $26 = $20&255;
   $27 = $21 ? $25 : $26;
   $28 = ((($16)) + 11|0);
   $29 = load1($28);
   $30 = ($29<<24>>24)<(0);
   if ($30) {
    $31 = ((($16)) + 8|0);
    $32 = load4($31);
    $33 = $32 & 2147483647;
    $phitmp$i$i = (($33) + -1)|0;
    $35 = $phitmp$i$i;
   } else {
    $35 = 10;
   }
   $34 = ($27>>>0)>($35>>>0);
   if (!($34)) {
    if ($30) {
     $36 = load4($16);
     $38 = $36;
    } else {
     $38 = $16;
    }
    $37 = ($27|0)==(0);
    if (!($37)) {
     _memmove(($38|0),($23|0),($27|0))|0;
    }
    $39 = (($38) + ($27)|0);
    store1($39,0);
    $40 = load1($28);
    $41 = ($40<<24>>24)<(0);
    if ($41) {
     $42 = ((($16)) + 4|0);
     store4($42,$27);
     break;
    } else {
     $43 = $27&255;
     store1($28,$43);
     break;
    }
   }
   $44 = (($27) - ($35))|0;
   $45 = (-18 - ($35))|0;
   $46 = ($45>>>0)<($44>>>0);
   if ($46) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($30) {
    $47 = load4($16);
    $66 = $47;
   } else {
    $66 = $16;
   }
   $48 = ($35>>>0)<(2147483623);
   if ($48) {
    $49 = $35 << 1;
    $50 = ($27>>>0)<($49>>>0);
    $$sroa$speculated$i = $50 ? $49 : $27;
    $51 = ($$sroa$speculated$i>>>0)<(11);
    $52 = (($$sroa$speculated$i) + 16)|0;
    $53 = $52 & -16;
    $phitmp$i = $51 ? 11 : $53;
    $55 = $phitmp$i;
   } else {
    $55 = -17;
   }
   $54 = ($55|0)==(0);
   $$$i = $54 ? 1 : $55;
   $56 = (_malloc($$$i)|0);
   $57 = ($56|0)==(0|0);
   L30: do {
    if ($57) {
     while(1) {
      $58 = load4(9296);
      $59 = (($58) + 0)|0;
      store4(9296,$59);
      $60 = ($58|0)==(0);
      if ($60) {
       $$lcssa$i = 0;
       break L30;
      }
      $61 = $58;
      FUNCTION_TABLE_v[$61 & 3]();
      $62 = (_malloc($$$i)|0);
      $63 = ($62|0)==(0|0);
      if (!($63)) {
       $$lcssa$i = $62;
       break;
      }
     }
    } else {
     $$lcssa$i = $56;
    }
   } while(0);
   $64 = ($27|0)==(0);
   if (!($64)) {
    _memcpy(($$lcssa$i|0),($23|0),($27|0))|0;
   }
   $65 = ($35|0)==(10);
   if (!($65)) {
    _free($66);
   }
   store4($16,$$lcssa$i);
   $67 = $55 | -2147483648;
   $68 = ((($16)) + 8|0);
   store4($68,$67);
   $69 = ((($16)) + 4|0);
   store4($69,$27);
   $70 = (($$lcssa$i) + ($27)|0);
   store1($70,0);
  }
 } while(0);
 $71 = ((($4)) + 48|0);
 $72 = ((($2)) + 48|0);
 $73 = ($71|0)==($72|0);
 if ($73) {
  return;
 }
 $74 = ((($72)) + 11|0);
 $75 = load1($74);
 $76 = ($75<<24>>24)<(0);
 $77 = load4($72);
 $78 = $76 ? $77 : $72;
 $79 = ((($2)) + 52|0);
 $80 = load4($79);
 $81 = $75&255;
 $82 = $76 ? $80 : $81;
 $83 = ((($71)) + 11|0);
 $84 = load1($83);
 $85 = ($84<<24>>24)<(0);
 if ($85) {
  $86 = ((($71)) + 8|0);
  $87 = load4($86);
  $88 = $87 & 2147483647;
  $phitmp$i$i4 = (($88) + -1)|0;
  $90 = $phitmp$i$i4;
 } else {
  $90 = 10;
 }
 $89 = ($82>>>0)>($90>>>0);
 if (!($89)) {
  if ($85) {
   $91 = load4($71);
   $93 = $91;
  } else {
   $93 = $71;
  }
  $92 = ($82|0)==(0);
  if (!($92)) {
   _memmove(($93|0),($78|0),($82|0))|0;
  }
  $94 = (($93) + ($82)|0);
  store1($94,0);
  $95 = load1($83);
  $96 = ($95<<24>>24)<(0);
  if ($96) {
   $97 = ((($71)) + 4|0);
   store4($97,$82);
   return;
  } else {
   $98 = $82&255;
   store1($83,$98);
   return;
  }
 }
 $99 = (($82) - ($90))|0;
 $100 = (-18 - ($90))|0;
 $101 = ($100>>>0)<($99>>>0);
 if ($101) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 if ($85) {
  $102 = load4($71);
  $121 = $102;
 } else {
  $121 = $71;
 }
 $103 = ($90>>>0)<(2147483623);
 if ($103) {
  $104 = $90 << 1;
  $105 = ($82>>>0)<($104>>>0);
  $$sroa$speculated$i11 = $105 ? $104 : $82;
  $106 = ($$sroa$speculated$i11>>>0)<(11);
  $107 = (($$sroa$speculated$i11) + 16)|0;
  $108 = $107 & -16;
  $phitmp$i12 = $106 ? 11 : $108;
  $110 = $phitmp$i12;
 } else {
  $110 = -17;
 }
 $109 = ($110|0)==(0);
 $$$i2 = $109 ? 1 : $110;
 $111 = (_malloc($$$i2)|0);
 $112 = ($111|0)==(0|0);
 L71: do {
  if ($112) {
   while(1) {
    $113 = load4(9296);
    $114 = (($113) + 0)|0;
    store4(9296,$114);
    $115 = ($113|0)==(0);
    if ($115) {
     $$lcssa$i8 = 0;
     break L71;
    }
    $116 = $113;
    FUNCTION_TABLE_v[$116 & 3]();
    $117 = (_malloc($$$i2)|0);
    $118 = ($117|0)==(0|0);
    if (!($118)) {
     $$lcssa$i8 = $117;
     break;
    }
   }
  } else {
   $$lcssa$i8 = $111;
  }
 } while(0);
 $119 = ($82|0)==(0);
 if (!($119)) {
  _memcpy(($$lcssa$i8|0),($78|0),($82|0))|0;
 }
 $120 = ($90|0)==(10);
 if (!($120)) {
  _free($121);
 }
 store4($71,$$lcssa$i8);
 $122 = $110 | -2147483648;
 $123 = ((($71)) + 8|0);
 store4($123,$122);
 $124 = ((($71)) + 4|0);
 store4($124,$82);
 $125 = (($$lcssa$i8) + ($82)|0);
 store1($125,0);
 return;
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNS_3valEE7getWireIS2_EEPNS0_7_EM_VALERKMS2_S3_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = load4($3);
 __emval_incref(($4|0));
 $5 = load4($3);
 return ($5|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNS_3valEE7setWireIS2_EEvRKMS2_S3_RT_PNS0_7_EM_VALE($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (($1) + ($3)|0);
 $5 = load4($4);
 __emval_decref(($5|0));
 $6 = $2;
 store4($4,$6);
 __emval_decref((0|0));
 return;
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7getWireIS2_EEPS7_RKMS2_S7_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$lcssa$i = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = (_malloc(12)|0);
 $5 = ($4|0)==(0|0);
 L1: do {
  if ($5) {
   while(1) {
    $6 = load4(9296);
    $7 = (($6) + 0)|0;
    store4(9296,$7);
    $8 = ($6|0)==(0);
    if ($8) {
     $$lcssa$i = 0;
     break L1;
    }
    $9 = $6;
    FUNCTION_TABLE_v[$9 & 3]();
    $10 = (_malloc(12)|0);
    $11 = ($10|0)==(0|0);
    if (!($11)) {
     $$lcssa$i = $10;
     break;
    }
   }
  } else {
   $$lcssa$i = $4;
  }
 } while(0);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($$lcssa$i,$3);
 return ($$lcssa$i|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7setWireIS2_EEvRKMS2_S7_RT_PS7_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (($1) + ($3)|0);
 $5 = ($4|0)==($2|0);
 if ($5) {
  return;
 }
 $6 = load4($2);
 $7 = ((($2)) + 4|0);
 $8 = load4($7);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($4,$6,$8);
 return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE9push_backERKS1_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i$i = 0, $$0$i$i = 0, $$06$i$i$i = 0, $$lcssa$i$i = 0, $$pre$i$i = 0, $$pre40$i = 0, $$sroa$7$0$i = 0, $$sroa$speculated$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = ((($0)) + 8|0);
 $5 = load4($4);
 $6 = ($3|0)==($5|0);
 $7 = $5;
 if (!($6)) {
  __ZN5VNodeC2ERKS_($3,$1);
  $8 = load4($2);
  $9 = ((($8)) + 112|0);
  store4($2,$9);
  return;
 }
 $10 = $3;
 $11 = load4($0);
 $12 = (($10) - ($11))|0;
 $13 = (($12|0) / 112)&-1;
 $14 = (($13) + 1)|0;
 $15 = ($14>>>0)>(38347922);
 if ($15) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $16 = (($7) - ($11))|0;
 $17 = (($16|0) / 112)&-1;
 $18 = ($17>>>0)<(19173961);
 $19 = $17 << 1;
 $20 = ($19>>>0)<($14>>>0);
 $$sroa$speculated$i$i = $20 ? $14 : $19;
 $$0$i$i = $18 ? $$sroa$speculated$i$i : 38347922;
 $21 = ($$0$i$i|0)==(0);
 if ($21) {
  $35 = 0;
 } else {
  $22 = ($$0$i$i>>>0)>(38347922);
  if ($22) {
   $23 = (___cxa_allocate_exception(4)|0);
   store4($23,(2252));
   ___cxa_throw(($23|0),(1488|0),(6|0));
   // unreachable;
  }
  $24 = ($$0$i$i*112)|0;
  $25 = ($24|0)==(0);
  $$$i$i = $25 ? 1 : $24;
  $26 = (_malloc($$$i$i)|0);
  $27 = ($26|0)==(0|0);
  L13: do {
   if ($27) {
    while(1) {
     $28 = load4(9296);
     $29 = (($28) + 0)|0;
     store4(9296,$29);
     $30 = ($28|0)==(0);
     if ($30) {
      $$lcssa$i$i = 0;
      break L13;
     }
     $31 = $28;
     FUNCTION_TABLE_v[$31 & 3]();
     $32 = (_malloc($$$i$i)|0);
     $33 = ($32|0)==(0|0);
     if (!($33)) {
      $$lcssa$i$i = $32;
      break;
     }
    }
   } else {
    $$lcssa$i$i = $26;
   }
  } while(0);
  $35 = $$lcssa$i$i;
 }
 $34 = (($35) + (($13*112)|0)|0);
 $36 = $34;
 $37 = (($35) + (($$0$i$i*112)|0)|0);
 $38 = $37;
 __ZN5VNodeC2ERKS_($34,$1);
 $39 = ((($34)) + 112|0);
 $40 = $39;
 $41 = load4($0);
 $42 = load4($2);
 $43 = ($42|0)==($41|0);
 if ($43) {
  $44 = $41;
  $52 = $36;$54 = $44;$56 = $41;
 } else {
  $$06$i$i$i = $42;$$sroa$7$0$i = $36;$46 = $34;
  while(1) {
   $45 = ((($46)) + -112|0);
   $47 = ((($$06$i$i$i)) + -112|0);
   __ZN5VNodeC2ERKS_($45,$47);
   $48 = $$sroa$7$0$i;
   $49 = ((($48)) + -112|0);
   $50 = $49;
   $51 = ($47|0)==($41|0);
   if ($51) {
    break;
   } else {
    $$06$i$i$i = $47;$$sroa$7$0$i = $50;$46 = $49;
   }
  }
  $$pre$i$i = load4($0);
  $$pre40$i = load4($2);
  $52 = $50;$54 = $$pre$i$i;$56 = $$pre40$i;
 }
 store4($0,$52);
 store4($2,$40);
 store4($4,$38);
 $53 = $54;
 $55 = ($56|0)==($53|0);
 if (!($55)) {
  $58 = $56;
  while(1) {
   $57 = ((($58)) + -112|0);
   __ZN5VNodeD2Ev($57);
   $59 = ($57|0)==($53|0);
   if ($59) {
    break;
   } else {
    $58 = $57;
   }
  }
 }
 $60 = ($54|0)==(0);
 if ($60) {
  return;
 }
 $61 = $54;
 _free($61);
 return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6resizeEjRKS1_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i$i = 0, $$0$i$i = 0, $$0$i14$i = 0, $$0$i16$i = 0, $$06$i$i$i = 0, $$lcssa$i$i = 0, $$pre$i17$i = 0, $$pre53$i = 0, $$sroa$16$0$i = 0, $$sroa$7$0$i = 0, $$sroa$speculated$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
 var $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = load4($0);
 $6 = (($4) - ($5))|0;
 $7 = (($6|0) / 112)&-1;
 $8 = ($7>>>0)<($1>>>0);
 $9 = $5;
 $10 = $4;
 if (!($8)) {
  $73 = ($7>>>0)>($1>>>0);
  if (!($73)) {
   return;
  }
  $74 = (($9) + (($1*112)|0)|0);
  $75 = ($10|0)==($74|0);
  if ($75) {
   return;
  } else {
   $77 = $10;
  }
  while(1) {
   $76 = ((($77)) + -112|0);
   store4($3,$76);
   __ZN5VNodeD2Ev($76);
   $78 = load4($3);
   $79 = ($78|0)==($74|0);
   if ($79) {
    break;
   } else {
    $77 = $78;
   }
  }
  return;
 }
 $11 = (($1) - ($7))|0;
 $12 = ((($0)) + 8|0);
 $13 = load4($12);
 $14 = (($13) - ($4))|0;
 $15 = (($14|0) / 112)&-1;
 $16 = ($15>>>0)<($11>>>0);
 if (!($16)) {
  $$0$i$i = $11;$17 = $10;
  while(1) {
   __ZN5VNodeC2ERKS_($17,$2);
   $18 = load4($3);
   $19 = ((($18)) + 112|0);
   store4($3,$19);
   $20 = (($$0$i$i) + -1)|0;
   $21 = ($20|0)==(0);
   if ($21) {
    break;
   } else {
    $$0$i$i = $20;$17 = $19;
   }
  }
  return;
 }
 $22 = ($1>>>0)>(38347922);
 if ($22) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $23 = (($13) - ($5))|0;
 $24 = (($23|0) / 112)&-1;
 $25 = ($24>>>0)<(19173961);
 $26 = $24 << 1;
 $27 = ($26>>>0)<($1>>>0);
 $$sroa$speculated$i$i = $27 ? $1 : $26;
 $$0$i14$i = $25 ? $$sroa$speculated$i$i : 38347922;
 $28 = ($$0$i14$i|0)==(0);
 if ($28) {
  $42 = 0;
 } else {
  $29 = ($$0$i14$i>>>0)>(38347922);
  if ($29) {
   $30 = (___cxa_allocate_exception(4)|0);
   store4($30,(2252));
   ___cxa_throw(($30|0),(1488|0),(6|0));
   // unreachable;
  }
  $31 = ($$0$i14$i*112)|0;
  $32 = ($31|0)==(0);
  $$$i$i = $32 ? 1 : $31;
  $33 = (_malloc($$$i$i)|0);
  $34 = ($33|0)==(0|0);
  L25: do {
   if ($34) {
    while(1) {
     $35 = load4(9296);
     $36 = (($35) + 0)|0;
     store4(9296,$36);
     $37 = ($35|0)==(0);
     if ($37) {
      $$lcssa$i$i = 0;
      break L25;
     }
     $38 = $35;
     FUNCTION_TABLE_v[$38 & 3]();
     $39 = (_malloc($$$i$i)|0);
     $40 = ($39|0)==(0|0);
     if (!($40)) {
      $$lcssa$i$i = $39;
      break;
     }
    }
   } else {
    $$lcssa$i$i = $33;
   }
  } while(0);
  $42 = $$lcssa$i$i;
 }
 $41 = (($42) + (($7*112)|0)|0);
 $43 = $41;
 $44 = (($42) + (($$0$i14$i*112)|0)|0);
 $45 = $44;
 $$0$i16$i = $11;$$sroa$16$0$i = $43;$46 = $41;
 while(1) {
  __ZN5VNodeC2ERKS_($46,$2);
  $47 = $$sroa$16$0$i;
  $48 = ((($47)) + 112|0);
  $49 = $48;
  $50 = (($$0$i16$i) + -1)|0;
  $51 = ($50|0)==(0);
  if ($51) {
   break;
  } else {
   $$0$i16$i = $50;$$sroa$16$0$i = $49;$46 = $48;
  }
 }
 $52 = load4($0);
 $53 = load4($3);
 $54 = ($53|0)==($52|0);
 if ($54) {
  $55 = $52;
  $63 = $43;$65 = $55;$67 = $52;
 } else {
  $$06$i$i$i = $53;$$sroa$7$0$i = $43;$57 = $41;
  while(1) {
   $56 = ((($57)) + -112|0);
   $58 = ((($$06$i$i$i)) + -112|0);
   __ZN5VNodeC2ERKS_($56,$58);
   $59 = $$sroa$7$0$i;
   $60 = ((($59)) + -112|0);
   $61 = $60;
   $62 = ($58|0)==($52|0);
   if ($62) {
    break;
   } else {
    $$06$i$i$i = $58;$$sroa$7$0$i = $61;$57 = $60;
   }
  }
  $$pre$i17$i = load4($0);
  $$pre53$i = load4($3);
  $63 = $61;$65 = $$pre$i17$i;$67 = $$pre53$i;
 }
 store4($0,$63);
 store4($3,$49);
 store4($12,$45);
 $64 = $65;
 $66 = ($67|0)==($64|0);
 if (!($66)) {
  $69 = $67;
  while(1) {
   $68 = ((($69)) + -112|0);
   __ZN5VNodeD2Ev($68);
   $70 = ($68|0)==($64|0);
   if ($70) {
    break;
   } else {
    $69 = $68;
   }
  }
 }
 $71 = ($65|0)==(0);
 if ($71) {
  return;
 }
 $72 = $65;
 _free($72);
 return;
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3getERKS7_j($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$lcssa$i = 0, $$sroa$0$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = load4($0);
 $6 = (($4) - ($5))|0;
 $7 = (($6|0) / 112)&-1;
 $8 = ($7>>>0)>($1>>>0);
 if (!($8)) {
  $$sroa$0$0 = (1);
  STACKTOP = sp;return ($$sroa$0$0|0);
 }
 $9 = $5;
 $10 = (($9) + (($1*112)|0)|0);
 $11 = (_malloc(112)|0);
 $12 = ($11|0)==(0|0);
 L4: do {
  if ($12) {
   while(1) {
    $13 = load4(9296);
    $14 = (($13) + 0)|0;
    store4(9296,$14);
    $15 = ($13|0)==(0);
    if ($15) {
     $$lcssa$i = 0;
     break L4;
    }
    $16 = $13;
    FUNCTION_TABLE_v[$16 & 3]();
    $17 = (_malloc(112)|0);
    $18 = ($17|0)==(0|0);
    if (!($18)) {
     $$lcssa$i = $17;
     break;
    }
   }
  } else {
   $$lcssa$i = $11;
  }
 } while(0);
 __ZN5VNodeC2ERKS_($$lcssa$i,$10);
 store4($2,$$lcssa$i);
 $19 = (__emval_take_value((1184|0),($2|0))|0);
 $$sroa$0$0 = $19;
 STACKTOP = sp;return ($$sroa$0$0|0);
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3setERS7_jRKS4_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (($3) + (($1*112)|0)|0);
 __ZN5VNodeaSERKS_($4,$2);
 return 1;
}
function __ZN10emscripten8internal13getActualTypeINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEPKvPT_($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1224|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEvPT_($0) {
 $0 = $0|0;
 var $$pre$i = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = load4($0);
 $3 = ($2|0)==(0|0);
 if (!($3)) {
  $4 = ((($0)) + 4|0);
  $5 = load4($4);
  $6 = ($5|0)==($2|0);
  if ($6) {
   $11 = $2;
  } else {
   $8 = $5;
   while(1) {
    $7 = ((($8)) + -112|0);
    store4($4,$7);
    __ZN5VNodeD2Ev($7);
    $9 = load4($4);
    $10 = ($9|0)==($2|0);
    if ($10) {
     break;
    } else {
     $8 = $9;
    }
   }
   $$pre$i = load4($0);
   $11 = $$pre$i;
  }
  _free($11);
 }
 _free($0);
 return;
}
function __ZN10emscripten8internal12operator_newINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEEEPT_DpOT0_() {
 var $$lcssa$i = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_malloc(12)|0);
 $1 = ($0|0)==(0|0);
 L1: do {
  if ($1) {
   while(1) {
    $2 = load4(9296);
    $3 = (($2) + 0)|0;
    store4(9296,$3);
    $4 = ($2|0)==(0);
    if ($4) {
     $$lcssa$i = 0;
     break L1;
    }
    $5 = $2;
    FUNCTION_TABLE_v[$5 & 3]();
    $6 = (_malloc(12)|0);
    $7 = ($6|0)==(0|0);
    if (!($7)) {
     $$lcssa$i = $6;
     break;
    }
   }
  } else {
   $$lcssa$i = $0;
  }
 } while(0);
 store4($$lcssa$i,0);
 $8 = ((($$lcssa$i)) + 4|0);
 store4($8,0);
 $9 = ((($$lcssa$i)) + 8|0);
 store4($9,0);
 return ($$lcssa$i|0);
}
function __ZN10emscripten8internal7InvokerIPNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEE6invokeEPFS8_vE($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (FUNCTION_TABLE_i[$0 & 7]()|0);
 return ($1|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvRKS4_EvPS7_JS9_EE6invokeERKSB_SC_PS4_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$elt3 = 0, $$unpack = 0, $$unpack4 = 0, $10 = 0, $11 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($0);
 $$elt3 = ((($0)) + 4|0);
 $$unpack4 = load4($$elt3);
 $3 = $$unpack4 >> 1;
 $4 = (($1) + ($3)|0);
 $5 = $$unpack4 & 1;
 $6 = ($5|0)==(0);
 if ($6) {
  $10 = $$unpack;
  $11 = $10;
  FUNCTION_TABLE_vii[$11 & 3]($4,$2);
  return;
 } else {
  $7 = load4($4);
  $8 = (($7) + ($$unpack)|0);
  $9 = load4($8);
  $11 = $9;
  FUNCTION_TABLE_vii[$11 & 3]($4,$2);
  return;
 }
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvjRKS4_EvPS7_JjS9_EE6invokeERKSB_SC_jPS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$elt3 = 0, $$unpack = 0, $$unpack4 = 0, $10 = 0, $11 = 0, $12 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($0);
 $$elt3 = ((($0)) + 4|0);
 $$unpack4 = load4($$elt3);
 $4 = $$unpack4 >> 1;
 $5 = (($1) + ($4)|0);
 $6 = $$unpack4 & 1;
 $7 = ($6|0)==(0);
 if ($7) {
  $11 = $$unpack;
  $12 = $11;
  FUNCTION_TABLE_viii[$12 & 31]($5,$2,$3);
  return;
 } else {
  $8 = load4($5);
  $9 = (($8) + ($$unpack)|0);
  $10 = load4($9);
  $12 = $10;
  FUNCTION_TABLE_viii[$12 & 31]($5,$2,$3);
  return;
 }
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEKFjvEjPKS7_JEE6invokeERKS9_SB_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$elt2 = 0, $$unpack = 0, $$unpack3 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($0);
 $$elt2 = ((($0)) + 4|0);
 $$unpack3 = load4($$elt2);
 $2 = $$unpack3 >> 1;
 $3 = (($1) + ($2)|0);
 $4 = $$unpack3 & 1;
 $5 = ($4|0)==(0);
 if ($5) {
  $9 = $$unpack;
  $10 = $9;
 } else {
  $6 = load4($3);
  $7 = (($6) + ($$unpack)|0);
  $8 = load4($7);
  $10 = $8;
 }
 $11 = (FUNCTION_TABLE_ii[$10 & 15]($3)|0);
 return ($11|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorI5VNodeNS3_9allocatorIS5_EEEEjES2_SA_JjEE6invokeEPSC_PS8_j($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (FUNCTION_TABLE_iii[$3 & 15]($1,$2)|0);
 __emval_incref(($4|0));
 __emval_decref(($4|0));
 return ($4|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEjRKS4_EbS8_JjSA_EE6invokeEPSC_PS7_jPS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = load4($0);
 $5 = (FUNCTION_TABLE_iiii[$4 & 31]($1,$2,$3)|0);
 return ($5|0);
}
function __ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0.0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = sp + 8|0;
 $5 = load1(8728);
 $6 = ($5<<24>>24)==(0);
 if ($6) {
  store1(8728,1);
  $7 = (__emval_get_method_caller(2,(1832|0))|0);
  store4(8768,$7);
  $20 = $7;
 } else {
  $$pre = load4(8768);
  $20 = $$pre;
 }
 $8 = ((($2)) + 11|0);
 $9 = load1($8);
 $10 = ($9<<24>>24)<(0);
 $11 = ((($2)) + 4|0);
 $12 = load4($11);
 $13 = $9&255;
 $14 = $10 ? $12 : $13;
 $15 = (($14) + 4)|0;
 $16 = (_malloc($15)|0);
 store4($16,$14);
 $17 = ((($16)) + 4|0);
 $18 = load4($2);
 $19 = $10 ? $18 : $2;
 _memcpy(($17|0),($19|0),($14|0))|0;
 store4($3,$16);
 $21 = (+__emval_call_method(($20|0),($0|0),($1|0),($4|0),($3|0)));
 $22 = load4($4);
 __emval_run_destructors(($22|0));
 $23 = (~~(($21))>>>0);
 $24 = $23;
 STACKTOP = sp;return ($24|0);
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$$i = 0, $$0$i = 0, $$0$i24$lcssa = 0, $$0$i2432 = 0, $$0$i7$i = 0, $$0$i7$i20 = 0, $$06$i31 = 0, $$lcssa$i = 0, $$pre$i18 = 0, $$pre$i23 = 0, $$sroa$speculated$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0;
 var $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0;
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $2;
 $4 = $1;
 $5 = (($3) - ($4))|0;
 $6 = (($5|0) / 112)&-1;
 $7 = ((($0)) + 8|0);
 $8 = load4($7);
 $9 = load4($0);
 $10 = (($8) - ($9))|0;
 $11 = (($10|0) / 112)&-1;
 $12 = ($6>>>0)>($11>>>0);
 $13 = $9;
 if (!($12)) {
  $14 = ((($0)) + 4|0);
  $15 = load4($14);
  $16 = (($15) - ($9))|0;
  $17 = (($16|0) / 112)&-1;
  $18 = ($6>>>0)>($17>>>0);
  $19 = (($1) + (($17*112)|0)|0);
  $$ = $18 ? $19 : $2;
  $20 = ($$|0)==($1|0);
  if ($20) {
   $$0$i24$lcssa = $13;
  } else {
   $$0$i2432 = $13;$$06$i31 = $1;
   while(1) {
    __ZN5VNodeaSERKS_($$0$i2432,$$06$i31);
    $21 = ((($$06$i31)) + 112|0);
    $22 = ((($$0$i2432)) + 112|0);
    $23 = ($21|0)==($$|0);
    if ($23) {
     $$0$i24$lcssa = $22;
     break;
    } else {
     $$0$i2432 = $22;$$06$i31 = $21;
    }
   }
  }
  if (!($18)) {
   $30 = load4($14);
   $31 = ($30|0)==($$0$i24$lcssa|0);
   if ($31) {
    return;
   } else {
    $33 = $30;
   }
   while(1) {
    $32 = ((($33)) + -112|0);
    store4($14,$32);
    __ZN5VNodeD2Ev($32);
    $34 = load4($14);
    $35 = ($34|0)==($$0$i24$lcssa|0);
    if ($35) {
     break;
    } else {
     $33 = $34;
    }
   }
   return;
  }
  $24 = ($$|0)==($2|0);
  if ($24) {
   return;
  }
  $$pre$i18 = load4($14);
  $$0$i7$i20 = $19;$25 = $$pre$i18;
  while(1) {
   __ZN5VNodeC2ERKS_($25,$$0$i7$i20);
   $26 = ((($$0$i7$i20)) + 112|0);
   $27 = load4($14);
   $28 = ((($27)) + 112|0);
   store4($14,$28);
   $29 = ($26|0)==($2|0);
   if ($29) {
    break;
   } else {
    $$0$i7$i20 = $26;$25 = $28;
   }
  }
  return;
 }
 $36 = ($9|0)==(0);
 if ($36) {
  $48 = $8;
 } else {
  $37 = $9;
  $38 = ((($0)) + 4|0);
  $39 = load4($38);
  $40 = ($39|0)==($13|0);
  if ($40) {
   $45 = $37;
  } else {
   $42 = $39;
   while(1) {
    $41 = ((($42)) + -112|0);
    store4($38,$41);
    __ZN5VNodeD2Ev($41);
    $43 = load4($38);
    $44 = ($43|0)==($13|0);
    if ($44) {
     break;
    } else {
     $42 = $43;
    }
   }
   $$pre$i23 = load4($0);
   $45 = $$pre$i23;
  }
  _free($45);
  store4($7,0);
  store4($38,0);
  store4($0,0);
  $48 = 0;
 }
 $46 = ($6>>>0)>(38347922);
 if ($46) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $47 = (($48|0) / 112)&-1;
 $49 = ($47>>>0)<(19173961);
 $50 = $47 << 1;
 $51 = ($50>>>0)<($6>>>0);
 $$sroa$speculated$i = $51 ? $6 : $50;
 $$0$i = $49 ? $$sroa$speculated$i : 38347922;
 $52 = ($$0$i>>>0)>(38347922);
 if ($52) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $53 = ($$0$i*112)|0;
 $54 = ($53|0)==(0);
 $$$i = $54 ? 1 : $53;
 $55 = (_malloc($$$i)|0);
 $56 = ($55|0)==(0|0);
 L36: do {
  if ($56) {
   while(1) {
    $57 = load4(9296);
    $58 = (($57) + 0)|0;
    store4(9296,$58);
    $59 = ($57|0)==(0);
    if ($59) {
     $$lcssa$i = 0;
     break L36;
    }
    $60 = $57;
    FUNCTION_TABLE_v[$60 & 3]();
    $61 = (_malloc($$$i)|0);
    $62 = ($61|0)==(0|0);
    if (!($62)) {
     $$lcssa$i = $61;
     break;
    }
   }
  } else {
   $$lcssa$i = $55;
  }
 } while(0);
 $63 = ((($0)) + 4|0);
 store4($63,$$lcssa$i);
 store4($0,$$lcssa$i);
 $64 = (($$lcssa$i) + (($$0$i*112)|0)|0);
 store4($7,$64);
 $65 = ($1|0)==($2|0);
 if ($65) {
  return;
 } else {
  $$0$i7$i = $1;$66 = $$lcssa$i;
 }
 while(1) {
  __ZN5VNodeC2ERKS_($66,$$0$i7$i);
  $67 = ((($$0$i7$i)) + 112|0);
  $68 = load4($63);
  $69 = ((($68)) + 112|0);
  store4($63,$69);
  $70 = ($67|0)==($2|0);
  if ($70) {
   break;
  } else {
   $$0$i7$i = $67;$66 = $69;
  }
 }
 return;
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE6invokeEPFS2_S9_EPNS0_11BindingTypeIS9_EUt_E($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i6 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $2 = sp + 16|0;
 $3 = sp;
 $4 = ((($1)) + 4|0);
 $5 = load4($1);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $6 = ($5>>>0)>(4294967279);
 if ($6) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $7 = ($5>>>0)<(11);
 if ($7) {
  $22 = $5&255;
  $23 = ((($3)) + 11|0);
  store1($23,$22);
  $24 = ($5|0)==(0);
  if ($24) {
   $$017$i = $3;
  } else {
   $$016$i = $3;
   label = 9;
  }
 } else {
  $8 = (($5) + 16)|0;
  $9 = $8 & -16;
  $10 = ($9|0)==(0);
  $$$i = $10 ? 1 : $9;
  $11 = (_malloc($$$i)|0);
  $12 = ($11|0)==(0|0);
  L7: do {
   if ($12) {
    while(1) {
     $13 = load4(9296);
     $14 = (($13) + 0)|0;
     store4(9296,$14);
     $15 = ($13|0)==(0);
     if ($15) {
      $$lcssa$i = 0;
      break L7;
     }
     $16 = $13;
     FUNCTION_TABLE_v[$16 & 3]();
     $17 = (_malloc($$$i)|0);
     $18 = ($17|0)==(0|0);
     if (!($18)) {
      $$lcssa$i = $17;
      break;
     }
    }
   } else {
    $$lcssa$i = $11;
   }
  } while(0);
  store4($3,$$lcssa$i);
  $19 = $9 | -2147483648;
  $20 = ((($3)) + 8|0);
  store4($20,$19);
  $21 = ((($3)) + 4|0);
  store4($21,$5);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($4|0),($5|0))|0;
  $$017$i = $$016$i;
 }
 $25 = (($$017$i) + ($5)|0);
 store1($25,0);
 FUNCTION_TABLE_vii[$0 & 3]($2,$3);
 $26 = (_malloc(112)|0);
 $27 = ($26|0)==(0|0);
 L15: do {
  if ($27) {
   while(1) {
    $28 = load4(9296);
    $29 = (($28) + 0)|0;
    store4(9296,$29);
    $30 = ($28|0)==(0);
    if ($30) {
     $$lcssa$i6 = 0;
     break L15;
    }
    $31 = $28;
    FUNCTION_TABLE_v[$31 & 3]();
    $32 = (_malloc(112)|0);
    $33 = ($32|0)==(0|0);
    if (!($33)) {
     $$lcssa$i6 = $32;
     break;
    }
   }
  } else {
   $$lcssa$i6 = $26;
  }
 } while(0);
 ; store8($$lcssa$i6,load8($2,4),4); store4($$lcssa$i6+8 | 0,load4($2+8 | 0,4),4);
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $34 = ((($$lcssa$i6)) + 12|0);
 $35 = ((($2)) + 12|0);
 ; store8($34,load8($35,4),4); store4($34+8 | 0,load4($35+8 | 0,4),4);
 ; store8($35,i64_const(0,0),4); store4($35+8|0,0,4);
 $36 = ((($$lcssa$i6)) + 24|0);
 $37 = ((($2)) + 24|0);
 ; store8($36,load8($37,4),4); store4($36+8 | 0,load4($37+8 | 0,4),4);
 ; store8($37,i64_const(0,0),4); store4($37+8|0,0,4);
 $38 = ((($$lcssa$i6)) + 36|0);
 $39 = ((($2)) + 36|0);
 $40 = load4($39);
 store4($38,$40);
 $41 = ((($$lcssa$i6)) + 40|0);
 $42 = ((($2)) + 40|0);
 $43 = load4($42);
 store4($41,$43);
 $44 = ((($2)) + 44|0);
 $45 = ((($$lcssa$i6)) + 44|0);
 $46 = load4($44);
 store4($45,$46);
 $47 = ($46|0)==(0);
 if ($47) {
  store4($38,$41);
 } else {
  $48 = $43;
  $49 = ((($48)) + 8|0);
  store4($49,$41);
  $50 = ((($2)) + 40|0);
  store4($39,$50);
  store4($50,0);
  store4($44,0);
 }
 $51 = ((($$lcssa$i6)) + 48|0);
 $52 = ((($2)) + 48|0);
 $53 = load4($52);
 store4($51,$53);
 $54 = ((($$lcssa$i6)) + 52|0);
 $55 = ((($2)) + 52|0);
 $56 = load4($55);
 store4($54,$56);
 $57 = ((($2)) + 56|0);
 $58 = ((($$lcssa$i6)) + 56|0);
 $59 = load4($57);
 store4($58,$59);
 $60 = ($59|0)==(0);
 if ($60) {
  store4($51,$54);
 } else {
  $61 = $56;
  $62 = ((($61)) + 8|0);
  store4($62,$54);
  $63 = ((($2)) + 52|0);
  store4($52,$63);
  store4($63,0);
  store4($57,0);
 }
 $64 = ((($$lcssa$i6)) + 60|0);
 $65 = ((($2)) + 60|0);
 $66 = load4($65);
 store4($64,$66);
 $67 = ((($$lcssa$i6)) + 64|0);
 $68 = ((($2)) + 64|0);
 $69 = load4($68);
 store4($67,$69);
 $70 = ((($2)) + 68|0);
 $71 = ((($$lcssa$i6)) + 68|0);
 $72 = load4($70);
 store4($71,$72);
 $73 = ($72|0)==(0);
 if ($73) {
  store4($64,$67);
 } else {
  $74 = $69;
  $75 = ((($74)) + 8|0);
  store4($75,$67);
  $76 = ((($2)) + 64|0);
  store4($65,$76);
  store4($76,0);
  store4($70,0);
 }
 $77 = ((($$lcssa$i6)) + 72|0);
 $78 = ((($2)) + 72|0);
 ; store8($77,load8($78,4),4); store4($77+8 | 0,load4($78+8 | 0,4),4);
 ; store8($78,i64_const(0,0),4); store4($78+8|0,0,4);
 $79 = ((($$lcssa$i6)) + 84|0);
 $80 = ((($2)) + 84|0);
 ; store8($79,load8($80,4),4); store4($79+8 | 0,load4($80+8 | 0,4),4);
 ; store8($80,i64_const(0,0),4); store4($80+8|0,0,4);
 $81 = ((($$lcssa$i6)) + 96|0);
 $82 = ((($2)) + 96|0);
 $83 = load4($82);
 store4($81,$83);
 store4($82,0);
 $84 = ((($$lcssa$i6)) + 100|0);
 $85 = ((($2)) + 100|0);
 $86 = ((($$lcssa$i6)) + 104|0);
 $87 = ((($$lcssa$i6)) + 108|0);
 $88 = load4($85);
 store4($84,$88);
 $89 = ((($2)) + 104|0);
 $90 = load4($89);
 store4($86,$90);
 $91 = ((($2)) + 108|0);
 $92 = load4($91);
 store4($87,$92);
 store4($91,0);
 store4($89,0);
 store4($85,0);
 __ZN5VNodeD2Ev($2);
 $93 = ((($3)) + 11|0);
 $94 = load1($93);
 $95 = ($94<<24>>24)<(0);
 if (!($95)) {
  STACKTOP = sp;return ($$lcssa$i6|0);
 }
 $96 = load4($3);
 _free($96);
 STACKTOP = sp;return ($$lcssa$i6|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbEE6invokeEPFS2_S9_bEPNS0_11BindingTypeIS9_EUt_Eb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i6 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0;
 var $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $3 = sp + 16|0;
 $4 = sp;
 $5 = ((($1)) + 4|0);
 $6 = load4($1);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $7 = ($6>>>0)>(4294967279);
 if ($7) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $8 = ($6>>>0)<(11);
 if ($8) {
  $23 = $6&255;
  $24 = ((($4)) + 11|0);
  store1($24,$23);
  $25 = ($6|0)==(0);
  if ($25) {
   $$017$i = $4;
  } else {
   $$016$i = $4;
   label = 9;
  }
 } else {
  $9 = (($6) + 16)|0;
  $10 = $9 & -16;
  $11 = ($10|0)==(0);
  $$$i = $11 ? 1 : $10;
  $12 = (_malloc($$$i)|0);
  $13 = ($12|0)==(0|0);
  L7: do {
   if ($13) {
    while(1) {
     $14 = load4(9296);
     $15 = (($14) + 0)|0;
     store4(9296,$15);
     $16 = ($14|0)==(0);
     if ($16) {
      $$lcssa$i = 0;
      break L7;
     }
     $17 = $14;
     FUNCTION_TABLE_v[$17 & 3]();
     $18 = (_malloc($$$i)|0);
     $19 = ($18|0)==(0|0);
     if (!($19)) {
      $$lcssa$i = $18;
      break;
     }
    }
   } else {
    $$lcssa$i = $12;
   }
  } while(0);
  store4($4,$$lcssa$i);
  $20 = $10 | -2147483648;
  $21 = ((($4)) + 8|0);
  store4($21,$20);
  $22 = ((($4)) + 4|0);
  store4($22,$6);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($5|0),($6|0))|0;
  $$017$i = $$016$i;
 }
 $26 = (($$017$i) + ($6)|0);
 store1($26,0);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$2);
 $27 = (_malloc(112)|0);
 $28 = ($27|0)==(0|0);
 L15: do {
  if ($28) {
   while(1) {
    $29 = load4(9296);
    $30 = (($29) + 0)|0;
    store4(9296,$30);
    $31 = ($29|0)==(0);
    if ($31) {
     $$lcssa$i6 = 0;
     break L15;
    }
    $32 = $29;
    FUNCTION_TABLE_v[$32 & 3]();
    $33 = (_malloc(112)|0);
    $34 = ($33|0)==(0|0);
    if (!($34)) {
     $$lcssa$i6 = $33;
     break;
    }
   }
  } else {
   $$lcssa$i6 = $27;
  }
 } while(0);
 ; store8($$lcssa$i6,load8($3,4),4); store4($$lcssa$i6+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $35 = ((($$lcssa$i6)) + 12|0);
 $36 = ((($3)) + 12|0);
 ; store8($35,load8($36,4),4); store4($35+8 | 0,load4($36+8 | 0,4),4);
 ; store8($36,i64_const(0,0),4); store4($36+8|0,0,4);
 $37 = ((($$lcssa$i6)) + 24|0);
 $38 = ((($3)) + 24|0);
 ; store8($37,load8($38,4),4); store4($37+8 | 0,load4($38+8 | 0,4),4);
 ; store8($38,i64_const(0,0),4); store4($38+8|0,0,4);
 $39 = ((($$lcssa$i6)) + 36|0);
 $40 = ((($3)) + 36|0);
 $41 = load4($40);
 store4($39,$41);
 $42 = ((($$lcssa$i6)) + 40|0);
 $43 = ((($3)) + 40|0);
 $44 = load4($43);
 store4($42,$44);
 $45 = ((($3)) + 44|0);
 $46 = ((($$lcssa$i6)) + 44|0);
 $47 = load4($45);
 store4($46,$47);
 $48 = ($47|0)==(0);
 if ($48) {
  store4($39,$42);
 } else {
  $49 = $44;
  $50 = ((($49)) + 8|0);
  store4($50,$42);
  $51 = ((($3)) + 40|0);
  store4($40,$51);
  store4($51,0);
  store4($45,0);
 }
 $52 = ((($$lcssa$i6)) + 48|0);
 $53 = ((($3)) + 48|0);
 $54 = load4($53);
 store4($52,$54);
 $55 = ((($$lcssa$i6)) + 52|0);
 $56 = ((($3)) + 52|0);
 $57 = load4($56);
 store4($55,$57);
 $58 = ((($3)) + 56|0);
 $59 = ((($$lcssa$i6)) + 56|0);
 $60 = load4($58);
 store4($59,$60);
 $61 = ($60|0)==(0);
 if ($61) {
  store4($52,$55);
 } else {
  $62 = $57;
  $63 = ((($62)) + 8|0);
  store4($63,$55);
  $64 = ((($3)) + 52|0);
  store4($53,$64);
  store4($64,0);
  store4($58,0);
 }
 $65 = ((($$lcssa$i6)) + 60|0);
 $66 = ((($3)) + 60|0);
 $67 = load4($66);
 store4($65,$67);
 $68 = ((($$lcssa$i6)) + 64|0);
 $69 = ((($3)) + 64|0);
 $70 = load4($69);
 store4($68,$70);
 $71 = ((($3)) + 68|0);
 $72 = ((($$lcssa$i6)) + 68|0);
 $73 = load4($71);
 store4($72,$73);
 $74 = ($73|0)==(0);
 if ($74) {
  store4($65,$68);
 } else {
  $75 = $70;
  $76 = ((($75)) + 8|0);
  store4($76,$68);
  $77 = ((($3)) + 64|0);
  store4($66,$77);
  store4($77,0);
  store4($71,0);
 }
 $78 = ((($$lcssa$i6)) + 72|0);
 $79 = ((($3)) + 72|0);
 ; store8($78,load8($79,4),4); store4($78+8 | 0,load4($79+8 | 0,4),4);
 ; store8($79,i64_const(0,0),4); store4($79+8|0,0,4);
 $80 = ((($$lcssa$i6)) + 84|0);
 $81 = ((($3)) + 84|0);
 ; store8($80,load8($81,4),4); store4($80+8 | 0,load4($81+8 | 0,4),4);
 ; store8($81,i64_const(0,0),4); store4($81+8|0,0,4);
 $82 = ((($$lcssa$i6)) + 96|0);
 $83 = ((($3)) + 96|0);
 $84 = load4($83);
 store4($82,$84);
 store4($83,0);
 $85 = ((($$lcssa$i6)) + 100|0);
 $86 = ((($3)) + 100|0);
 $87 = ((($$lcssa$i6)) + 104|0);
 $88 = ((($$lcssa$i6)) + 108|0);
 $89 = load4($86);
 store4($85,$89);
 $90 = ((($3)) + 104|0);
 $91 = load4($90);
 store4($87,$91);
 $92 = ((($3)) + 108|0);
 $93 = load4($92);
 store4($88,$93);
 store4($92,0);
 store4($90,0);
 store4($86,0);
 __ZN5VNodeD2Ev($3);
 $94 = ((($4)) + 11|0);
 $95 = load1($94);
 $96 = ($95<<24>>24)<(0);
 if (!($96)) {
  STACKTOP = sp;return ($$lcssa$i6|0);
 }
 $97 = load4($4);
 _free($97);
 STACKTOP = sp;return ($$lcssa$i6|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES2_EE6invokeEPFS2_S9_S2_EPNS0_11BindingTypeIS9_EUt_EPS2_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i6 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0;
 var $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0;
 var $98 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 240|0;
 $3 = sp + 128|0;
 $4 = sp + 112|0;
 $5 = sp;
 $6 = ((($1)) + 4|0);
 $7 = load4($1);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $8 = ($7>>>0)>(4294967279);
 if ($8) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $9 = ($7>>>0)<(11);
 if ($9) {
  $24 = $7&255;
  $25 = ((($4)) + 11|0);
  store1($25,$24);
  $26 = ($7|0)==(0);
  if ($26) {
   $$017$i = $4;
  } else {
   $$016$i = $4;
   label = 9;
  }
 } else {
  $10 = (($7) + 16)|0;
  $11 = $10 & -16;
  $12 = ($11|0)==(0);
  $$$i = $12 ? 1 : $11;
  $13 = (_malloc($$$i)|0);
  $14 = ($13|0)==(0|0);
  L7: do {
   if ($14) {
    while(1) {
     $15 = load4(9296);
     $16 = (($15) + 0)|0;
     store4(9296,$16);
     $17 = ($15|0)==(0);
     if ($17) {
      $$lcssa$i = 0;
      break L7;
     }
     $18 = $15;
     FUNCTION_TABLE_v[$18 & 3]();
     $19 = (_malloc($$$i)|0);
     $20 = ($19|0)==(0|0);
     if (!($20)) {
      $$lcssa$i = $19;
      break;
     }
    }
   } else {
    $$lcssa$i = $13;
   }
  } while(0);
  store4($4,$$lcssa$i);
  $21 = $11 | -2147483648;
  $22 = ((($4)) + 8|0);
  store4($22,$21);
  $23 = ((($4)) + 4|0);
  store4($23,$7);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($6|0),($7|0))|0;
  $$017$i = $$016$i;
 }
 $27 = (($$017$i) + ($7)|0);
 store1($27,0);
 __ZN5VNodeC2ERKS_($5,$2);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$5);
 $28 = (_malloc(112)|0);
 $29 = ($28|0)==(0|0);
 L15: do {
  if ($29) {
   while(1) {
    $30 = load4(9296);
    $31 = (($30) + 0)|0;
    store4(9296,$31);
    $32 = ($30|0)==(0);
    if ($32) {
     $$lcssa$i6 = 0;
     break L15;
    }
    $33 = $30;
    FUNCTION_TABLE_v[$33 & 3]();
    $34 = (_malloc(112)|0);
    $35 = ($34|0)==(0|0);
    if (!($35)) {
     $$lcssa$i6 = $34;
     break;
    }
   }
  } else {
   $$lcssa$i6 = $28;
  }
 } while(0);
 ; store8($$lcssa$i6,load8($3,4),4); store4($$lcssa$i6+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $36 = ((($$lcssa$i6)) + 12|0);
 $37 = ((($3)) + 12|0);
 ; store8($36,load8($37,4),4); store4($36+8 | 0,load4($37+8 | 0,4),4);
 ; store8($37,i64_const(0,0),4); store4($37+8|0,0,4);
 $38 = ((($$lcssa$i6)) + 24|0);
 $39 = ((($3)) + 24|0);
 ; store8($38,load8($39,4),4); store4($38+8 | 0,load4($39+8 | 0,4),4);
 ; store8($39,i64_const(0,0),4); store4($39+8|0,0,4);
 $40 = ((($$lcssa$i6)) + 36|0);
 $41 = ((($3)) + 36|0);
 $42 = load4($41);
 store4($40,$42);
 $43 = ((($$lcssa$i6)) + 40|0);
 $44 = ((($3)) + 40|0);
 $45 = load4($44);
 store4($43,$45);
 $46 = ((($3)) + 44|0);
 $47 = ((($$lcssa$i6)) + 44|0);
 $48 = load4($46);
 store4($47,$48);
 $49 = ($48|0)==(0);
 if ($49) {
  store4($40,$43);
 } else {
  $50 = $45;
  $51 = ((($50)) + 8|0);
  store4($51,$43);
  $52 = ((($3)) + 40|0);
  store4($41,$52);
  store4($52,0);
  store4($46,0);
 }
 $53 = ((($$lcssa$i6)) + 48|0);
 $54 = ((($3)) + 48|0);
 $55 = load4($54);
 store4($53,$55);
 $56 = ((($$lcssa$i6)) + 52|0);
 $57 = ((($3)) + 52|0);
 $58 = load4($57);
 store4($56,$58);
 $59 = ((($3)) + 56|0);
 $60 = ((($$lcssa$i6)) + 56|0);
 $61 = load4($59);
 store4($60,$61);
 $62 = ($61|0)==(0);
 if ($62) {
  store4($53,$56);
 } else {
  $63 = $58;
  $64 = ((($63)) + 8|0);
  store4($64,$56);
  $65 = ((($3)) + 52|0);
  store4($54,$65);
  store4($65,0);
  store4($59,0);
 }
 $66 = ((($$lcssa$i6)) + 60|0);
 $67 = ((($3)) + 60|0);
 $68 = load4($67);
 store4($66,$68);
 $69 = ((($$lcssa$i6)) + 64|0);
 $70 = ((($3)) + 64|0);
 $71 = load4($70);
 store4($69,$71);
 $72 = ((($3)) + 68|0);
 $73 = ((($$lcssa$i6)) + 68|0);
 $74 = load4($72);
 store4($73,$74);
 $75 = ($74|0)==(0);
 if ($75) {
  store4($66,$69);
 } else {
  $76 = $71;
  $77 = ((($76)) + 8|0);
  store4($77,$69);
  $78 = ((($3)) + 64|0);
  store4($67,$78);
  store4($78,0);
  store4($72,0);
 }
 $79 = ((($$lcssa$i6)) + 72|0);
 $80 = ((($3)) + 72|0);
 ; store8($79,load8($80,4),4); store4($79+8 | 0,load4($80+8 | 0,4),4);
 ; store8($80,i64_const(0,0),4); store4($80+8|0,0,4);
 $81 = ((($$lcssa$i6)) + 84|0);
 $82 = ((($3)) + 84|0);
 ; store8($81,load8($82,4),4); store4($81+8 | 0,load4($82+8 | 0,4),4);
 ; store8($82,i64_const(0,0),4); store4($82+8|0,0,4);
 $83 = ((($$lcssa$i6)) + 96|0);
 $84 = ((($3)) + 96|0);
 $85 = load4($84);
 store4($83,$85);
 store4($84,0);
 $86 = ((($$lcssa$i6)) + 100|0);
 $87 = ((($3)) + 100|0);
 $88 = ((($$lcssa$i6)) + 104|0);
 $89 = ((($$lcssa$i6)) + 108|0);
 $90 = load4($87);
 store4($86,$90);
 $91 = ((($3)) + 104|0);
 $92 = load4($91);
 store4($88,$92);
 $93 = ((($3)) + 108|0);
 $94 = load4($93);
 store4($89,$94);
 store4($93,0);
 store4($91,0);
 store4($87,0);
 __ZN5VNodeD2Ev($3);
 __ZN5VNodeD2Ev($5);
 $95 = ((($4)) + 11|0);
 $96 = load1($95);
 $97 = ($96<<24>>24)<(0);
 if (!($97)) {
  STACKTOP = sp;return ($$lcssa$i6|0);
 }
 $98 = load4($4);
 _free($98);
 STACKTOP = sp;return ($$lcssa$i6|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES9_EE6invokeEPFS2_S9_S9_EPNS0_11BindingTypeIS9_EUt_ESG_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i1 = 0, $$016$i = 0, $$016$i2 = 0, $$017$i = 0, $$017$i3 = 0, $$lcssa$i = 0, $$lcssa$i14 = 0, $$lcssa$i7 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0;
 var $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $13 = 0, $14 = 0, $15 = 0;
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0;
 $3 = sp + 24|0;
 $4 = sp + 12|0;
 $5 = sp;
 $6 = ((($1)) + 4|0);
 $7 = load4($1);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $8 = ($7>>>0)>(4294967279);
 if ($8) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $9 = ($7>>>0)<(11);
 if ($9) {
  $24 = $7&255;
  $25 = ((($4)) + 11|0);
  store1($25,$24);
  $26 = ($7|0)==(0);
  if ($26) {
   $$017$i = $4;
  } else {
   $$016$i = $4;
   label = 9;
  }
 } else {
  $10 = (($7) + 16)|0;
  $11 = $10 & -16;
  $12 = ($11|0)==(0);
  $$$i = $12 ? 1 : $11;
  $13 = (_malloc($$$i)|0);
  $14 = ($13|0)==(0|0);
  L7: do {
   if ($14) {
    while(1) {
     $15 = load4(9296);
     $16 = (($15) + 0)|0;
     store4(9296,$16);
     $17 = ($15|0)==(0);
     if ($17) {
      $$lcssa$i = 0;
      break L7;
     }
     $18 = $15;
     FUNCTION_TABLE_v[$18 & 3]();
     $19 = (_malloc($$$i)|0);
     $20 = ($19|0)==(0|0);
     if (!($20)) {
      $$lcssa$i = $19;
      break;
     }
    }
   } else {
    $$lcssa$i = $13;
   }
  } while(0);
  store4($4,$$lcssa$i);
  $21 = $11 | -2147483648;
  $22 = ((($4)) + 8|0);
  store4($22,$21);
  $23 = ((($4)) + 4|0);
  store4($23,$7);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($6|0),($7|0))|0;
  $$017$i = $$016$i;
 }
 $27 = (($$017$i) + ($7)|0);
 store1($27,0);
 $28 = ((($2)) + 4|0);
 $29 = load4($2);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $30 = ($29>>>0)>(4294967279);
 if ($30) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $31 = ($29>>>0)<(11);
 if ($31) {
  $46 = $29&255;
  $47 = ((($5)) + 11|0);
  store1($47,$46);
  $48 = ($29|0)==(0);
  if ($48) {
   $$017$i3 = $5;
  } else {
   $$016$i2 = $5;
   label = 18;
  }
 } else {
  $32 = (($29) + 16)|0;
  $33 = $32 & -16;
  $34 = ($33|0)==(0);
  $$$i1 = $34 ? 1 : $33;
  $35 = (_malloc($$$i1)|0);
  $36 = ($35|0)==(0|0);
  L21: do {
   if ($36) {
    while(1) {
     $37 = load4(9296);
     $38 = (($37) + 0)|0;
     store4(9296,$38);
     $39 = ($37|0)==(0);
     if ($39) {
      $$lcssa$i7 = 0;
      break L21;
     }
     $40 = $37;
     FUNCTION_TABLE_v[$40 & 3]();
     $41 = (_malloc($$$i1)|0);
     $42 = ($41|0)==(0|0);
     if (!($42)) {
      $$lcssa$i7 = $41;
      break;
     }
    }
   } else {
    $$lcssa$i7 = $35;
   }
  } while(0);
  store4($5,$$lcssa$i7);
  $43 = $33 | -2147483648;
  $44 = ((($5)) + 8|0);
  store4($44,$43);
  $45 = ((($5)) + 4|0);
  store4($45,$29);
  $$016$i2 = $$lcssa$i7;
  label = 18;
 }
 if ((label|0) == 18) {
  _memcpy(($$016$i2|0),($28|0),($29|0))|0;
  $$017$i3 = $$016$i2;
 }
 $49 = (($$017$i3) + ($29)|0);
 store1($49,0);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$5);
 $50 = (_malloc(112)|0);
 $51 = ($50|0)==(0|0);
 L29: do {
  if ($51) {
   while(1) {
    $52 = load4(9296);
    $53 = (($52) + 0)|0;
    store4(9296,$53);
    $54 = ($52|0)==(0);
    if ($54) {
     $$lcssa$i14 = 0;
     break L29;
    }
    $55 = $52;
    FUNCTION_TABLE_v[$55 & 3]();
    $56 = (_malloc(112)|0);
    $57 = ($56|0)==(0|0);
    if (!($57)) {
     $$lcssa$i14 = $56;
     break;
    }
   }
  } else {
   $$lcssa$i14 = $50;
  }
 } while(0);
 ; store8($$lcssa$i14,load8($3,4),4); store4($$lcssa$i14+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $58 = ((($$lcssa$i14)) + 12|0);
 $59 = ((($3)) + 12|0);
 ; store8($58,load8($59,4),4); store4($58+8 | 0,load4($59+8 | 0,4),4);
 ; store8($59,i64_const(0,0),4); store4($59+8|0,0,4);
 $60 = ((($$lcssa$i14)) + 24|0);
 $61 = ((($3)) + 24|0);
 ; store8($60,load8($61,4),4); store4($60+8 | 0,load4($61+8 | 0,4),4);
 ; store8($61,i64_const(0,0),4); store4($61+8|0,0,4);
 $62 = ((($$lcssa$i14)) + 36|0);
 $63 = ((($3)) + 36|0);
 $64 = load4($63);
 store4($62,$64);
 $65 = ((($$lcssa$i14)) + 40|0);
 $66 = ((($3)) + 40|0);
 $67 = load4($66);
 store4($65,$67);
 $68 = ((($3)) + 44|0);
 $69 = ((($$lcssa$i14)) + 44|0);
 $70 = load4($68);
 store4($69,$70);
 $71 = ($70|0)==(0);
 if ($71) {
  store4($62,$65);
 } else {
  $72 = $67;
  $73 = ((($72)) + 8|0);
  store4($73,$65);
  $74 = ((($3)) + 40|0);
  store4($63,$74);
  store4($74,0);
  store4($68,0);
 }
 $75 = ((($$lcssa$i14)) + 48|0);
 $76 = ((($3)) + 48|0);
 $77 = load4($76);
 store4($75,$77);
 $78 = ((($$lcssa$i14)) + 52|0);
 $79 = ((($3)) + 52|0);
 $80 = load4($79);
 store4($78,$80);
 $81 = ((($3)) + 56|0);
 $82 = ((($$lcssa$i14)) + 56|0);
 $83 = load4($81);
 store4($82,$83);
 $84 = ($83|0)==(0);
 if ($84) {
  store4($75,$78);
 } else {
  $85 = $80;
  $86 = ((($85)) + 8|0);
  store4($86,$78);
  $87 = ((($3)) + 52|0);
  store4($76,$87);
  store4($87,0);
  store4($81,0);
 }
 $88 = ((($$lcssa$i14)) + 60|0);
 $89 = ((($3)) + 60|0);
 $90 = load4($89);
 store4($88,$90);
 $91 = ((($$lcssa$i14)) + 64|0);
 $92 = ((($3)) + 64|0);
 $93 = load4($92);
 store4($91,$93);
 $94 = ((($3)) + 68|0);
 $95 = ((($$lcssa$i14)) + 68|0);
 $96 = load4($94);
 store4($95,$96);
 $97 = ($96|0)==(0);
 if ($97) {
  store4($88,$91);
 } else {
  $98 = $93;
  $99 = ((($98)) + 8|0);
  store4($99,$91);
  $100 = ((($3)) + 64|0);
  store4($89,$100);
  store4($100,0);
  store4($94,0);
 }
 $101 = ((($$lcssa$i14)) + 72|0);
 $102 = ((($3)) + 72|0);
 ; store8($101,load8($102,4),4); store4($101+8 | 0,load4($102+8 | 0,4),4);
 ; store8($102,i64_const(0,0),4); store4($102+8|0,0,4);
 $103 = ((($$lcssa$i14)) + 84|0);
 $104 = ((($3)) + 84|0);
 ; store8($103,load8($104,4),4); store4($103+8 | 0,load4($104+8 | 0,4),4);
 ; store8($104,i64_const(0,0),4); store4($104+8|0,0,4);
 $105 = ((($$lcssa$i14)) + 96|0);
 $106 = ((($3)) + 96|0);
 $107 = load4($106);
 store4($105,$107);
 store4($106,0);
 $108 = ((($$lcssa$i14)) + 100|0);
 $109 = ((($3)) + 100|0);
 $110 = ((($$lcssa$i14)) + 104|0);
 $111 = ((($$lcssa$i14)) + 108|0);
 $112 = load4($109);
 store4($108,$112);
 $113 = ((($3)) + 104|0);
 $114 = load4($113);
 store4($110,$114);
 $115 = ((($3)) + 108|0);
 $116 = load4($115);
 store4($111,$116);
 store4($115,0);
 store4($113,0);
 store4($109,0);
 __ZN5VNodeD2Ev($3);
 $117 = ((($5)) + 11|0);
 $118 = load1($117);
 $119 = ($118<<24>>24)<(0);
 if ($119) {
  $120 = load4($5);
  _free($120);
 }
 $121 = ((($4)) + 11|0);
 $122 = load1($121);
 $123 = ($122<<24>>24)<(0);
 if (!($123)) {
  STACKTOP = sp;return ($$lcssa$i14|0);
 }
 $124 = load4($4);
 _free($124);
 STACKTOP = sp;return ($$lcssa$i14|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataEE6invokeEPFS2_S9_SA_EPNS0_11BindingTypeIS9_EUt_EPSA_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i6 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0;
 var $113 = 0, $114 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 192|0;
 $3 = sp + 72|0;
 $4 = sp + 60|0;
 $5 = sp;
 $6 = ((($1)) + 4|0);
 $7 = load4($1);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $8 = ($7>>>0)>(4294967279);
 if ($8) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $9 = ($7>>>0)<(11);
 if ($9) {
  $24 = $7&255;
  $25 = ((($4)) + 11|0);
  store1($25,$24);
  $26 = ($7|0)==(0);
  if ($26) {
   $$017$i = $4;
  } else {
   $$016$i = $4;
   label = 9;
  }
 } else {
  $10 = (($7) + 16)|0;
  $11 = $10 & -16;
  $12 = ($11|0)==(0);
  $$$i = $12 ? 1 : $11;
  $13 = (_malloc($$$i)|0);
  $14 = ($13|0)==(0|0);
  L7: do {
   if ($14) {
    while(1) {
     $15 = load4(9296);
     $16 = (($15) + 0)|0;
     store4(9296,$16);
     $17 = ($15|0)==(0);
     if ($17) {
      $$lcssa$i = 0;
      break L7;
     }
     $18 = $15;
     FUNCTION_TABLE_v[$18 & 3]();
     $19 = (_malloc($$$i)|0);
     $20 = ($19|0)==(0|0);
     if (!($20)) {
      $$lcssa$i = $19;
      break;
     }
    }
   } else {
    $$lcssa$i = $13;
   }
  } while(0);
  store4($4,$$lcssa$i);
  $21 = $11 | -2147483648;
  $22 = ((($4)) + 8|0);
  store4($22,$21);
  $23 = ((($4)) + 4|0);
  store4($23,$7);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($6|0),($7|0))|0;
  $$017$i = $$016$i;
 }
 $27 = (($$017$i) + ($7)|0);
 store1($27,0);
 __ZN9VNodeDataC2ERKS_($5,$2);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$5);
 $28 = (_malloc(112)|0);
 $29 = ($28|0)==(0|0);
 L15: do {
  if ($29) {
   while(1) {
    $30 = load4(9296);
    $31 = (($30) + 0)|0;
    store4(9296,$31);
    $32 = ($30|0)==(0);
    if ($32) {
     $$lcssa$i6 = 0;
     break L15;
    }
    $33 = $30;
    FUNCTION_TABLE_v[$33 & 3]();
    $34 = (_malloc(112)|0);
    $35 = ($34|0)==(0|0);
    if (!($35)) {
     $$lcssa$i6 = $34;
     break;
    }
   }
  } else {
   $$lcssa$i6 = $28;
  }
 } while(0);
 ; store8($$lcssa$i6,load8($3,4),4); store4($$lcssa$i6+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $36 = ((($$lcssa$i6)) + 12|0);
 $37 = ((($3)) + 12|0);
 ; store8($36,load8($37,4),4); store4($36+8 | 0,load4($37+8 | 0,4),4);
 ; store8($37,i64_const(0,0),4); store4($37+8|0,0,4);
 $38 = ((($$lcssa$i6)) + 24|0);
 $39 = ((($3)) + 24|0);
 ; store8($38,load8($39,4),4); store4($38+8 | 0,load4($39+8 | 0,4),4);
 ; store8($39,i64_const(0,0),4); store4($39+8|0,0,4);
 $40 = ((($$lcssa$i6)) + 36|0);
 $41 = ((($3)) + 36|0);
 $42 = load4($41);
 store4($40,$42);
 $43 = ((($$lcssa$i6)) + 40|0);
 $44 = ((($3)) + 40|0);
 $45 = load4($44);
 store4($43,$45);
 $46 = ((($3)) + 44|0);
 $47 = ((($$lcssa$i6)) + 44|0);
 $48 = load4($46);
 store4($47,$48);
 $49 = ($48|0)==(0);
 if ($49) {
  store4($40,$43);
 } else {
  $50 = $45;
  $51 = ((($50)) + 8|0);
  store4($51,$43);
  $52 = ((($3)) + 40|0);
  store4($41,$52);
  store4($52,0);
  store4($46,0);
 }
 $53 = ((($$lcssa$i6)) + 48|0);
 $54 = ((($3)) + 48|0);
 $55 = load4($54);
 store4($53,$55);
 $56 = ((($$lcssa$i6)) + 52|0);
 $57 = ((($3)) + 52|0);
 $58 = load4($57);
 store4($56,$58);
 $59 = ((($3)) + 56|0);
 $60 = ((($$lcssa$i6)) + 56|0);
 $61 = load4($59);
 store4($60,$61);
 $62 = ($61|0)==(0);
 if ($62) {
  store4($53,$56);
 } else {
  $63 = $58;
  $64 = ((($63)) + 8|0);
  store4($64,$56);
  $65 = ((($3)) + 52|0);
  store4($54,$65);
  store4($65,0);
  store4($59,0);
 }
 $66 = ((($$lcssa$i6)) + 60|0);
 $67 = ((($3)) + 60|0);
 $68 = load4($67);
 store4($66,$68);
 $69 = ((($$lcssa$i6)) + 64|0);
 $70 = ((($3)) + 64|0);
 $71 = load4($70);
 store4($69,$71);
 $72 = ((($3)) + 68|0);
 $73 = ((($$lcssa$i6)) + 68|0);
 $74 = load4($72);
 store4($73,$74);
 $75 = ($74|0)==(0);
 if ($75) {
  store4($66,$69);
 } else {
  $76 = $71;
  $77 = ((($76)) + 8|0);
  store4($77,$69);
  $78 = ((($3)) + 64|0);
  store4($67,$78);
  store4($78,0);
  store4($72,0);
 }
 $79 = ((($$lcssa$i6)) + 72|0);
 $80 = ((($3)) + 72|0);
 ; store8($79,load8($80,4),4); store4($79+8 | 0,load4($80+8 | 0,4),4);
 ; store8($80,i64_const(0,0),4); store4($80+8|0,0,4);
 $81 = ((($$lcssa$i6)) + 84|0);
 $82 = ((($3)) + 84|0);
 ; store8($81,load8($82,4),4); store4($81+8 | 0,load4($82+8 | 0,4),4);
 ; store8($82,i64_const(0,0),4); store4($82+8|0,0,4);
 $83 = ((($$lcssa$i6)) + 96|0);
 $84 = ((($3)) + 96|0);
 $85 = load4($84);
 store4($83,$85);
 store4($84,0);
 $86 = ((($$lcssa$i6)) + 100|0);
 $87 = ((($3)) + 100|0);
 $88 = ((($$lcssa$i6)) + 104|0);
 $89 = ((($$lcssa$i6)) + 108|0);
 $90 = load4($87);
 store4($86,$90);
 $91 = ((($3)) + 104|0);
 $92 = load4($91);
 store4($88,$92);
 $93 = ((($3)) + 108|0);
 $94 = load4($93);
 store4($89,$94);
 store4($93,0);
 store4($91,0);
 store4($87,0);
 __ZN5VNodeD2Ev($3);
 $95 = ((($5)) + 48|0);
 $96 = ((($95)) + 11|0);
 $97 = load1($96);
 $98 = ($97<<24>>24)<(0);
 if ($98) {
  $99 = load4($95);
  _free($99);
 }
 $100 = ((($5)) + 36|0);
 $101 = ((($100)) + 11|0);
 $102 = load1($101);
 $103 = ($102<<24>>24)<(0);
 if ($103) {
  $104 = load4($100);
  _free($104);
 }
 $105 = ((($5)) + 28|0);
 $106 = load4($105);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($106);
 $107 = ((($5)) + 16|0);
 $108 = load4($107);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($108);
 $109 = ((($5)) + 4|0);
 $110 = load4($109);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($110);
 $111 = ((($4)) + 11|0);
 $112 = load1($111);
 $113 = ($112<<24>>24)<(0);
 if (!($113)) {
  STACKTOP = sp;return ($$lcssa$i6|0);
 }
 $114 = load4($4);
 _free($114);
 STACKTOP = sp;return ($$lcssa$i6|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_SC_EPNS0_11BindingTypeIS9_EUt_EPSC_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $$pre$i9 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
 var $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0;
 var $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0;
 $3 = sp + 24|0;
 $4 = sp + 12|0;
 $5 = sp;
 $6 = ((($1)) + 4|0);
 $7 = load4($1);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $8 = ($7>>>0)>(4294967279);
 if ($8) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $9 = ($7>>>0)<(11);
 if ($9) {
  $24 = $7&255;
  $25 = ((($4)) + 11|0);
  store1($25,$24);
  $26 = ($7|0)==(0);
  if ($26) {
   $$017$i = $4;
  } else {
   $$016$i = $4;
   label = 9;
  }
 } else {
  $10 = (($7) + 16)|0;
  $11 = $10 & -16;
  $12 = ($11|0)==(0);
  $$$i = $12 ? 1 : $11;
  $13 = (_malloc($$$i)|0);
  $14 = ($13|0)==(0|0);
  L7: do {
   if ($14) {
    while(1) {
     $15 = load4(9296);
     $16 = (($15) + 0)|0;
     store4(9296,$16);
     $17 = ($15|0)==(0);
     if ($17) {
      $$lcssa$i = 0;
      break L7;
     }
     $18 = $15;
     FUNCTION_TABLE_v[$18 & 3]();
     $19 = (_malloc($$$i)|0);
     $20 = ($19|0)==(0|0);
     if (!($20)) {
      $$lcssa$i = $19;
      break;
     }
    }
   } else {
    $$lcssa$i = $13;
   }
  } while(0);
  store4($4,$$lcssa$i);
  $21 = $11 | -2147483648;
  $22 = ((($4)) + 8|0);
  store4($22,$21);
  $23 = ((($4)) + 4|0);
  store4($23,$7);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($6|0),($7|0))|0;
  $$017$i = $$016$i;
 }
 $27 = (($$017$i) + ($7)|0);
 store1($27,0);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($5,$2);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$5);
 $28 = (_malloc(112)|0);
 $29 = ($28|0)==(0|0);
 L15: do {
  if ($29) {
   while(1) {
    $30 = load4(9296);
    $31 = (($30) + 0)|0;
    store4(9296,$31);
    $32 = ($30|0)==(0);
    if ($32) {
     $$lcssa$i7 = 0;
     break L15;
    }
    $33 = $30;
    FUNCTION_TABLE_v[$33 & 3]();
    $34 = (_malloc(112)|0);
    $35 = ($34|0)==(0|0);
    if (!($35)) {
     $$lcssa$i7 = $34;
     break;
    }
   }
  } else {
   $$lcssa$i7 = $28;
  }
 } while(0);
 ; store8($$lcssa$i7,load8($3,4),4); store4($$lcssa$i7+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $36 = ((($$lcssa$i7)) + 12|0);
 $37 = ((($3)) + 12|0);
 ; store8($36,load8($37,4),4); store4($36+8 | 0,load4($37+8 | 0,4),4);
 ; store8($37,i64_const(0,0),4); store4($37+8|0,0,4);
 $38 = ((($$lcssa$i7)) + 24|0);
 $39 = ((($3)) + 24|0);
 ; store8($38,load8($39,4),4); store4($38+8 | 0,load4($39+8 | 0,4),4);
 ; store8($39,i64_const(0,0),4); store4($39+8|0,0,4);
 $40 = ((($$lcssa$i7)) + 36|0);
 $41 = ((($3)) + 36|0);
 $42 = load4($41);
 store4($40,$42);
 $43 = ((($$lcssa$i7)) + 40|0);
 $44 = ((($3)) + 40|0);
 $45 = load4($44);
 store4($43,$45);
 $46 = ((($3)) + 44|0);
 $47 = ((($$lcssa$i7)) + 44|0);
 $48 = load4($46);
 store4($47,$48);
 $49 = ($48|0)==(0);
 if ($49) {
  store4($40,$43);
 } else {
  $50 = $45;
  $51 = ((($50)) + 8|0);
  store4($51,$43);
  $52 = ((($3)) + 40|0);
  store4($41,$52);
  store4($52,0);
  store4($46,0);
 }
 $53 = ((($$lcssa$i7)) + 48|0);
 $54 = ((($3)) + 48|0);
 $55 = load4($54);
 store4($53,$55);
 $56 = ((($$lcssa$i7)) + 52|0);
 $57 = ((($3)) + 52|0);
 $58 = load4($57);
 store4($56,$58);
 $59 = ((($3)) + 56|0);
 $60 = ((($$lcssa$i7)) + 56|0);
 $61 = load4($59);
 store4($60,$61);
 $62 = ($61|0)==(0);
 if ($62) {
  store4($53,$56);
 } else {
  $63 = $58;
  $64 = ((($63)) + 8|0);
  store4($64,$56);
  $65 = ((($3)) + 52|0);
  store4($54,$65);
  store4($65,0);
  store4($59,0);
 }
 $66 = ((($$lcssa$i7)) + 60|0);
 $67 = ((($3)) + 60|0);
 $68 = load4($67);
 store4($66,$68);
 $69 = ((($$lcssa$i7)) + 64|0);
 $70 = ((($3)) + 64|0);
 $71 = load4($70);
 store4($69,$71);
 $72 = ((($3)) + 68|0);
 $73 = ((($$lcssa$i7)) + 68|0);
 $74 = load4($72);
 store4($73,$74);
 $75 = ($74|0)==(0);
 if ($75) {
  store4($66,$69);
 } else {
  $76 = $71;
  $77 = ((($76)) + 8|0);
  store4($77,$69);
  $78 = ((($3)) + 64|0);
  store4($67,$78);
  store4($78,0);
  store4($72,0);
 }
 $79 = ((($$lcssa$i7)) + 72|0);
 $80 = ((($3)) + 72|0);
 ; store8($79,load8($80,4),4); store4($79+8 | 0,load4($80+8 | 0,4),4);
 ; store8($80,i64_const(0,0),4); store4($80+8|0,0,4);
 $81 = ((($$lcssa$i7)) + 84|0);
 $82 = ((($3)) + 84|0);
 ; store8($81,load8($82,4),4); store4($81+8 | 0,load4($82+8 | 0,4),4);
 ; store8($82,i64_const(0,0),4); store4($82+8|0,0,4);
 $83 = ((($$lcssa$i7)) + 96|0);
 $84 = ((($3)) + 96|0);
 $85 = load4($84);
 store4($83,$85);
 store4($84,0);
 $86 = ((($$lcssa$i7)) + 100|0);
 $87 = ((($3)) + 100|0);
 $88 = ((($$lcssa$i7)) + 104|0);
 $89 = ((($$lcssa$i7)) + 108|0);
 $90 = load4($87);
 store4($86,$90);
 $91 = ((($3)) + 104|0);
 $92 = load4($91);
 store4($88,$92);
 $93 = ((($3)) + 108|0);
 $94 = load4($93);
 store4($89,$94);
 store4($93,0);
 store4($91,0);
 store4($87,0);
 __ZN5VNodeD2Ev($3);
 $95 = load4($5);
 $96 = ($95|0)==(0|0);
 if (!($96)) {
  $97 = ((($5)) + 4|0);
  $98 = load4($97);
  $99 = ($98|0)==($95|0);
  if ($99) {
   $104 = $95;
  } else {
   $101 = $98;
   while(1) {
    $100 = ((($101)) + -112|0);
    store4($97,$100);
    __ZN5VNodeD2Ev($100);
    $102 = load4($97);
    $103 = ($102|0)==($95|0);
    if ($103) {
     break;
    } else {
     $101 = $102;
    }
   }
   $$pre$i9 = load4($5);
   $104 = $$pre$i9;
  }
  _free($104);
 }
 $105 = ((($4)) + 11|0);
 $106 = load1($105);
 $107 = ($106<<24>>24)<(0);
 if (!($107)) {
  STACKTOP = sp;return ($$lcssa$i7|0);
 }
 $108 = load4($4);
 _free($108);
 STACKTOP = sp;return ($$lcssa$i7|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataS2_EE6invokeEPFS2_S9_SA_S2_EPNS0_11BindingTypeIS9_EUt_EPSA_PS2_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i6 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0;
 var $113 = 0, $114 = 0, $115 = 0, $116 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 304|0;
 $4 = sp + 184|0;
 $5 = sp + 172|0;
 $6 = sp + 112|0;
 $7 = sp;
 $8 = ((($1)) + 4|0);
 $9 = load4($1);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $10 = ($9>>>0)>(4294967279);
 if ($10) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $11 = ($9>>>0)<(11);
 if ($11) {
  $26 = $9&255;
  $27 = ((($5)) + 11|0);
  store1($27,$26);
  $28 = ($9|0)==(0);
  if ($28) {
   $$017$i = $5;
  } else {
   $$016$i = $5;
   label = 9;
  }
 } else {
  $12 = (($9) + 16)|0;
  $13 = $12 & -16;
  $14 = ($13|0)==(0);
  $$$i = $14 ? 1 : $13;
  $15 = (_malloc($$$i)|0);
  $16 = ($15|0)==(0|0);
  L7: do {
   if ($16) {
    while(1) {
     $17 = load4(9296);
     $18 = (($17) + 0)|0;
     store4(9296,$18);
     $19 = ($17|0)==(0);
     if ($19) {
      $$lcssa$i = 0;
      break L7;
     }
     $20 = $17;
     FUNCTION_TABLE_v[$20 & 3]();
     $21 = (_malloc($$$i)|0);
     $22 = ($21|0)==(0|0);
     if (!($22)) {
      $$lcssa$i = $21;
      break;
     }
    }
   } else {
    $$lcssa$i = $15;
   }
  } while(0);
  store4($5,$$lcssa$i);
  $23 = $13 | -2147483648;
  $24 = ((($5)) + 8|0);
  store4($24,$23);
  $25 = ((($5)) + 4|0);
  store4($25,$9);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($8|0),($9|0))|0;
  $$017$i = $$016$i;
 }
 $29 = (($$017$i) + ($9)|0);
 store1($29,0);
 __ZN9VNodeDataC2ERKS_($6,$2);
 __ZN5VNodeC2ERKS_($7,$3);
 FUNCTION_TABLE_viiii[$0 & 15]($4,$5,$6,$7);
 $30 = (_malloc(112)|0);
 $31 = ($30|0)==(0|0);
 L15: do {
  if ($31) {
   while(1) {
    $32 = load4(9296);
    $33 = (($32) + 0)|0;
    store4(9296,$33);
    $34 = ($32|0)==(0);
    if ($34) {
     $$lcssa$i6 = 0;
     break L15;
    }
    $35 = $32;
    FUNCTION_TABLE_v[$35 & 3]();
    $36 = (_malloc(112)|0);
    $37 = ($36|0)==(0|0);
    if (!($37)) {
     $$lcssa$i6 = $36;
     break;
    }
   }
  } else {
   $$lcssa$i6 = $30;
  }
 } while(0);
 ; store8($$lcssa$i6,load8($4,4),4); store4($$lcssa$i6+8 | 0,load4($4+8 | 0,4),4);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $38 = ((($$lcssa$i6)) + 12|0);
 $39 = ((($4)) + 12|0);
 ; store8($38,load8($39,4),4); store4($38+8 | 0,load4($39+8 | 0,4),4);
 ; store8($39,i64_const(0,0),4); store4($39+8|0,0,4);
 $40 = ((($$lcssa$i6)) + 24|0);
 $41 = ((($4)) + 24|0);
 ; store8($40,load8($41,4),4); store4($40+8 | 0,load4($41+8 | 0,4),4);
 ; store8($41,i64_const(0,0),4); store4($41+8|0,0,4);
 $42 = ((($$lcssa$i6)) + 36|0);
 $43 = ((($4)) + 36|0);
 $44 = load4($43);
 store4($42,$44);
 $45 = ((($$lcssa$i6)) + 40|0);
 $46 = ((($4)) + 40|0);
 $47 = load4($46);
 store4($45,$47);
 $48 = ((($4)) + 44|0);
 $49 = ((($$lcssa$i6)) + 44|0);
 $50 = load4($48);
 store4($49,$50);
 $51 = ($50|0)==(0);
 if ($51) {
  store4($42,$45);
 } else {
  $52 = $47;
  $53 = ((($52)) + 8|0);
  store4($53,$45);
  $54 = ((($4)) + 40|0);
  store4($43,$54);
  store4($54,0);
  store4($48,0);
 }
 $55 = ((($$lcssa$i6)) + 48|0);
 $56 = ((($4)) + 48|0);
 $57 = load4($56);
 store4($55,$57);
 $58 = ((($$lcssa$i6)) + 52|0);
 $59 = ((($4)) + 52|0);
 $60 = load4($59);
 store4($58,$60);
 $61 = ((($4)) + 56|0);
 $62 = ((($$lcssa$i6)) + 56|0);
 $63 = load4($61);
 store4($62,$63);
 $64 = ($63|0)==(0);
 if ($64) {
  store4($55,$58);
 } else {
  $65 = $60;
  $66 = ((($65)) + 8|0);
  store4($66,$58);
  $67 = ((($4)) + 52|0);
  store4($56,$67);
  store4($67,0);
  store4($61,0);
 }
 $68 = ((($$lcssa$i6)) + 60|0);
 $69 = ((($4)) + 60|0);
 $70 = load4($69);
 store4($68,$70);
 $71 = ((($$lcssa$i6)) + 64|0);
 $72 = ((($4)) + 64|0);
 $73 = load4($72);
 store4($71,$73);
 $74 = ((($4)) + 68|0);
 $75 = ((($$lcssa$i6)) + 68|0);
 $76 = load4($74);
 store4($75,$76);
 $77 = ($76|0)==(0);
 if ($77) {
  store4($68,$71);
 } else {
  $78 = $73;
  $79 = ((($78)) + 8|0);
  store4($79,$71);
  $80 = ((($4)) + 64|0);
  store4($69,$80);
  store4($80,0);
  store4($74,0);
 }
 $81 = ((($$lcssa$i6)) + 72|0);
 $82 = ((($4)) + 72|0);
 ; store8($81,load8($82,4),4); store4($81+8 | 0,load4($82+8 | 0,4),4);
 ; store8($82,i64_const(0,0),4); store4($82+8|0,0,4);
 $83 = ((($$lcssa$i6)) + 84|0);
 $84 = ((($4)) + 84|0);
 ; store8($83,load8($84,4),4); store4($83+8 | 0,load4($84+8 | 0,4),4);
 ; store8($84,i64_const(0,0),4); store4($84+8|0,0,4);
 $85 = ((($$lcssa$i6)) + 96|0);
 $86 = ((($4)) + 96|0);
 $87 = load4($86);
 store4($85,$87);
 store4($86,0);
 $88 = ((($$lcssa$i6)) + 100|0);
 $89 = ((($4)) + 100|0);
 $90 = ((($$lcssa$i6)) + 104|0);
 $91 = ((($$lcssa$i6)) + 108|0);
 $92 = load4($89);
 store4($88,$92);
 $93 = ((($4)) + 104|0);
 $94 = load4($93);
 store4($90,$94);
 $95 = ((($4)) + 108|0);
 $96 = load4($95);
 store4($91,$96);
 store4($95,0);
 store4($93,0);
 store4($89,0);
 __ZN5VNodeD2Ev($4);
 __ZN5VNodeD2Ev($7);
 $97 = ((($6)) + 48|0);
 $98 = ((($97)) + 11|0);
 $99 = load1($98);
 $100 = ($99<<24>>24)<(0);
 if ($100) {
  $101 = load4($97);
  _free($101);
 }
 $102 = ((($6)) + 36|0);
 $103 = ((($102)) + 11|0);
 $104 = load1($103);
 $105 = ($104<<24>>24)<(0);
 if ($105) {
  $106 = load4($102);
  _free($106);
 }
 $107 = ((($6)) + 28|0);
 $108 = load4($107);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($108);
 $109 = ((($6)) + 16|0);
 $110 = load4($109);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($110);
 $111 = ((($6)) + 4|0);
 $112 = load4($111);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($112);
 $113 = ((($5)) + 11|0);
 $114 = load1($113);
 $115 = ($114<<24>>24)<(0);
 if (!($115)) {
  STACKTOP = sp;return ($$lcssa$i6|0);
 }
 $116 = load4($5);
 _free($116);
 STACKTOP = sp;return ($$lcssa$i6|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataS9_EE6invokeEPFS2_S9_SA_S9_EPNS0_11BindingTypeIS9_EUt_EPSA_SH_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$$i1 = 0, $$016$i = 0, $$016$i2 = 0, $$017$i = 0, $$017$i3 = 0, $$lcssa$i = 0, $$lcssa$i14 = 0, $$lcssa$i7 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0;
 var $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0;
 var $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0;
 var $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 208|0;
 $4 = sp + 88|0;
 $5 = sp + 72|0;
 $6 = sp + 12|0;
 $7 = sp;
 $8 = ((($1)) + 4|0);
 $9 = load4($1);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $10 = ($9>>>0)>(4294967279);
 if ($10) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $11 = ($9>>>0)<(11);
 if ($11) {
  $26 = $9&255;
  $27 = ((($5)) + 11|0);
  store1($27,$26);
  $28 = ($9|0)==(0);
  if ($28) {
   $$017$i = $5;
  } else {
   $$016$i = $5;
   label = 9;
  }
 } else {
  $12 = (($9) + 16)|0;
  $13 = $12 & -16;
  $14 = ($13|0)==(0);
  $$$i = $14 ? 1 : $13;
  $15 = (_malloc($$$i)|0);
  $16 = ($15|0)==(0|0);
  L7: do {
   if ($16) {
    while(1) {
     $17 = load4(9296);
     $18 = (($17) + 0)|0;
     store4(9296,$18);
     $19 = ($17|0)==(0);
     if ($19) {
      $$lcssa$i = 0;
      break L7;
     }
     $20 = $17;
     FUNCTION_TABLE_v[$20 & 3]();
     $21 = (_malloc($$$i)|0);
     $22 = ($21|0)==(0|0);
     if (!($22)) {
      $$lcssa$i = $21;
      break;
     }
    }
   } else {
    $$lcssa$i = $15;
   }
  } while(0);
  store4($5,$$lcssa$i);
  $23 = $13 | -2147483648;
  $24 = ((($5)) + 8|0);
  store4($24,$23);
  $25 = ((($5)) + 4|0);
  store4($25,$9);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($8|0),($9|0))|0;
  $$017$i = $$016$i;
 }
 $29 = (($$017$i) + ($9)|0);
 store1($29,0);
 __ZN9VNodeDataC2ERKS_($6,$2);
 $30 = ((($3)) + 4|0);
 $31 = load4($3);
 ; store8($7,i64_const(0,0),4); store4($7+8|0,0,4);
 $32 = ($31>>>0)>(4294967279);
 if ($32) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $33 = ($31>>>0)<(11);
 if ($33) {
  $48 = $31&255;
  $49 = ((($7)) + 11|0);
  store1($49,$48);
  $50 = ($31|0)==(0);
  if ($50) {
   $$017$i3 = $7;
  } else {
   $$016$i2 = $7;
   label = 18;
  }
 } else {
  $34 = (($31) + 16)|0;
  $35 = $34 & -16;
  $36 = ($35|0)==(0);
  $$$i1 = $36 ? 1 : $35;
  $37 = (_malloc($$$i1)|0);
  $38 = ($37|0)==(0|0);
  L21: do {
   if ($38) {
    while(1) {
     $39 = load4(9296);
     $40 = (($39) + 0)|0;
     store4(9296,$40);
     $41 = ($39|0)==(0);
     if ($41) {
      $$lcssa$i7 = 0;
      break L21;
     }
     $42 = $39;
     FUNCTION_TABLE_v[$42 & 3]();
     $43 = (_malloc($$$i1)|0);
     $44 = ($43|0)==(0|0);
     if (!($44)) {
      $$lcssa$i7 = $43;
      break;
     }
    }
   } else {
    $$lcssa$i7 = $37;
   }
  } while(0);
  store4($7,$$lcssa$i7);
  $45 = $35 | -2147483648;
  $46 = ((($7)) + 8|0);
  store4($46,$45);
  $47 = ((($7)) + 4|0);
  store4($47,$31);
  $$016$i2 = $$lcssa$i7;
  label = 18;
 }
 if ((label|0) == 18) {
  _memcpy(($$016$i2|0),($30|0),($31|0))|0;
  $$017$i3 = $$016$i2;
 }
 $51 = (($$017$i3) + ($31)|0);
 store1($51,0);
 FUNCTION_TABLE_viiii[$0 & 15]($4,$5,$6,$7);
 $52 = (_malloc(112)|0);
 $53 = ($52|0)==(0|0);
 L29: do {
  if ($53) {
   while(1) {
    $54 = load4(9296);
    $55 = (($54) + 0)|0;
    store4(9296,$55);
    $56 = ($54|0)==(0);
    if ($56) {
     $$lcssa$i14 = 0;
     break L29;
    }
    $57 = $54;
    FUNCTION_TABLE_v[$57 & 3]();
    $58 = (_malloc(112)|0);
    $59 = ($58|0)==(0|0);
    if (!($59)) {
     $$lcssa$i14 = $58;
     break;
    }
   }
  } else {
   $$lcssa$i14 = $52;
  }
 } while(0);
 ; store8($$lcssa$i14,load8($4,4),4); store4($$lcssa$i14+8 | 0,load4($4+8 | 0,4),4);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $60 = ((($$lcssa$i14)) + 12|0);
 $61 = ((($4)) + 12|0);
 ; store8($60,load8($61,4),4); store4($60+8 | 0,load4($61+8 | 0,4),4);
 ; store8($61,i64_const(0,0),4); store4($61+8|0,0,4);
 $62 = ((($$lcssa$i14)) + 24|0);
 $63 = ((($4)) + 24|0);
 ; store8($62,load8($63,4),4); store4($62+8 | 0,load4($63+8 | 0,4),4);
 ; store8($63,i64_const(0,0),4); store4($63+8|0,0,4);
 $64 = ((($$lcssa$i14)) + 36|0);
 $65 = ((($4)) + 36|0);
 $66 = load4($65);
 store4($64,$66);
 $67 = ((($$lcssa$i14)) + 40|0);
 $68 = ((($4)) + 40|0);
 $69 = load4($68);
 store4($67,$69);
 $70 = ((($4)) + 44|0);
 $71 = ((($$lcssa$i14)) + 44|0);
 $72 = load4($70);
 store4($71,$72);
 $73 = ($72|0)==(0);
 if ($73) {
  store4($64,$67);
 } else {
  $74 = $69;
  $75 = ((($74)) + 8|0);
  store4($75,$67);
  $76 = ((($4)) + 40|0);
  store4($65,$76);
  store4($76,0);
  store4($70,0);
 }
 $77 = ((($$lcssa$i14)) + 48|0);
 $78 = ((($4)) + 48|0);
 $79 = load4($78);
 store4($77,$79);
 $80 = ((($$lcssa$i14)) + 52|0);
 $81 = ((($4)) + 52|0);
 $82 = load4($81);
 store4($80,$82);
 $83 = ((($4)) + 56|0);
 $84 = ((($$lcssa$i14)) + 56|0);
 $85 = load4($83);
 store4($84,$85);
 $86 = ($85|0)==(0);
 if ($86) {
  store4($77,$80);
 } else {
  $87 = $82;
  $88 = ((($87)) + 8|0);
  store4($88,$80);
  $89 = ((($4)) + 52|0);
  store4($78,$89);
  store4($89,0);
  store4($83,0);
 }
 $90 = ((($$lcssa$i14)) + 60|0);
 $91 = ((($4)) + 60|0);
 $92 = load4($91);
 store4($90,$92);
 $93 = ((($$lcssa$i14)) + 64|0);
 $94 = ((($4)) + 64|0);
 $95 = load4($94);
 store4($93,$95);
 $96 = ((($4)) + 68|0);
 $97 = ((($$lcssa$i14)) + 68|0);
 $98 = load4($96);
 store4($97,$98);
 $99 = ($98|0)==(0);
 if ($99) {
  store4($90,$93);
 } else {
  $100 = $95;
  $101 = ((($100)) + 8|0);
  store4($101,$93);
  $102 = ((($4)) + 64|0);
  store4($91,$102);
  store4($102,0);
  store4($96,0);
 }
 $103 = ((($$lcssa$i14)) + 72|0);
 $104 = ((($4)) + 72|0);
 ; store8($103,load8($104,4),4); store4($103+8 | 0,load4($104+8 | 0,4),4);
 ; store8($104,i64_const(0,0),4); store4($104+8|0,0,4);
 $105 = ((($$lcssa$i14)) + 84|0);
 $106 = ((($4)) + 84|0);
 ; store8($105,load8($106,4),4); store4($105+8 | 0,load4($106+8 | 0,4),4);
 ; store8($106,i64_const(0,0),4); store4($106+8|0,0,4);
 $107 = ((($$lcssa$i14)) + 96|0);
 $108 = ((($4)) + 96|0);
 $109 = load4($108);
 store4($107,$109);
 store4($108,0);
 $110 = ((($$lcssa$i14)) + 100|0);
 $111 = ((($4)) + 100|0);
 $112 = ((($$lcssa$i14)) + 104|0);
 $113 = ((($$lcssa$i14)) + 108|0);
 $114 = load4($111);
 store4($110,$114);
 $115 = ((($4)) + 104|0);
 $116 = load4($115);
 store4($112,$116);
 $117 = ((($4)) + 108|0);
 $118 = load4($117);
 store4($113,$118);
 store4($117,0);
 store4($115,0);
 store4($111,0);
 __ZN5VNodeD2Ev($4);
 $119 = ((($7)) + 11|0);
 $120 = load1($119);
 $121 = ($120<<24>>24)<(0);
 if ($121) {
  $122 = load4($7);
  _free($122);
 }
 $123 = ((($6)) + 48|0);
 $124 = ((($123)) + 11|0);
 $125 = load1($124);
 $126 = ($125<<24>>24)<(0);
 if ($126) {
  $127 = load4($123);
  _free($127);
 }
 $128 = ((($6)) + 36|0);
 $129 = ((($128)) + 11|0);
 $130 = load1($129);
 $131 = ($130<<24>>24)<(0);
 if ($131) {
  $132 = load4($128);
  _free($132);
 }
 $133 = ((($6)) + 28|0);
 $134 = load4($133);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($134);
 $135 = ((($6)) + 16|0);
 $136 = load4($135);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($136);
 $137 = ((($6)) + 4|0);
 $138 = load4($137);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($138);
 $139 = ((($5)) + 11|0);
 $140 = load1($139);
 $141 = ($140<<24>>24)<(0);
 if (!($141)) {
  STACKTOP = sp;return ($$lcssa$i14|0);
 }
 $142 = load4($5);
 _free($142);
 STACKTOP = sp;return ($$lcssa$i14|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataNS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_SA_SD_EPNS0_11BindingTypeIS9_EUt_EPSA_PSD_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $$pre$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0;
 var $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
 var $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0;
 var $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0;
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0;
 var $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0;
 var $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 208|0;
 $4 = sp + 88|0;
 $5 = sp + 72|0;
 $6 = sp + 12|0;
 $7 = sp;
 $8 = ((($1)) + 4|0);
 $9 = load4($1);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $10 = ($9>>>0)>(4294967279);
 if ($10) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $11 = ($9>>>0)<(11);
 if ($11) {
  $26 = $9&255;
  $27 = ((($5)) + 11|0);
  store1($27,$26);
  $28 = ($9|0)==(0);
  if ($28) {
   $$017$i = $5;
  } else {
   $$016$i = $5;
   label = 9;
  }
 } else {
  $12 = (($9) + 16)|0;
  $13 = $12 & -16;
  $14 = ($13|0)==(0);
  $$$i = $14 ? 1 : $13;
  $15 = (_malloc($$$i)|0);
  $16 = ($15|0)==(0|0);
  L7: do {
   if ($16) {
    while(1) {
     $17 = load4(9296);
     $18 = (($17) + 0)|0;
     store4(9296,$18);
     $19 = ($17|0)==(0);
     if ($19) {
      $$lcssa$i = 0;
      break L7;
     }
     $20 = $17;
     FUNCTION_TABLE_v[$20 & 3]();
     $21 = (_malloc($$$i)|0);
     $22 = ($21|0)==(0|0);
     if (!($22)) {
      $$lcssa$i = $21;
      break;
     }
    }
   } else {
    $$lcssa$i = $15;
   }
  } while(0);
  store4($5,$$lcssa$i);
  $23 = $13 | -2147483648;
  $24 = ((($5)) + 8|0);
  store4($24,$23);
  $25 = ((($5)) + 4|0);
  store4($25,$9);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($8|0),($9|0))|0;
  $$017$i = $$016$i;
 }
 $29 = (($$017$i) + ($9)|0);
 store1($29,0);
 __ZN9VNodeDataC2ERKS_($6,$2);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($7,$3);
 FUNCTION_TABLE_viiii[$0 & 15]($4,$5,$6,$7);
 $30 = (_malloc(112)|0);
 $31 = ($30|0)==(0|0);
 L15: do {
  if ($31) {
   while(1) {
    $32 = load4(9296);
    $33 = (($32) + 0)|0;
    store4(9296,$33);
    $34 = ($32|0)==(0);
    if ($34) {
     $$lcssa$i7 = 0;
     break L15;
    }
    $35 = $32;
    FUNCTION_TABLE_v[$35 & 3]();
    $36 = (_malloc(112)|0);
    $37 = ($36|0)==(0|0);
    if (!($37)) {
     $$lcssa$i7 = $36;
     break;
    }
   }
  } else {
   $$lcssa$i7 = $30;
  }
 } while(0);
 ; store8($$lcssa$i7,load8($4,4),4); store4($$lcssa$i7+8 | 0,load4($4+8 | 0,4),4);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $38 = ((($$lcssa$i7)) + 12|0);
 $39 = ((($4)) + 12|0);
 ; store8($38,load8($39,4),4); store4($38+8 | 0,load4($39+8 | 0,4),4);
 ; store8($39,i64_const(0,0),4); store4($39+8|0,0,4);
 $40 = ((($$lcssa$i7)) + 24|0);
 $41 = ((($4)) + 24|0);
 ; store8($40,load8($41,4),4); store4($40+8 | 0,load4($41+8 | 0,4),4);
 ; store8($41,i64_const(0,0),4); store4($41+8|0,0,4);
 $42 = ((($$lcssa$i7)) + 36|0);
 $43 = ((($4)) + 36|0);
 $44 = load4($43);
 store4($42,$44);
 $45 = ((($$lcssa$i7)) + 40|0);
 $46 = ((($4)) + 40|0);
 $47 = load4($46);
 store4($45,$47);
 $48 = ((($4)) + 44|0);
 $49 = ((($$lcssa$i7)) + 44|0);
 $50 = load4($48);
 store4($49,$50);
 $51 = ($50|0)==(0);
 if ($51) {
  store4($42,$45);
 } else {
  $52 = $47;
  $53 = ((($52)) + 8|0);
  store4($53,$45);
  $54 = ((($4)) + 40|0);
  store4($43,$54);
  store4($54,0);
  store4($48,0);
 }
 $55 = ((($$lcssa$i7)) + 48|0);
 $56 = ((($4)) + 48|0);
 $57 = load4($56);
 store4($55,$57);
 $58 = ((($$lcssa$i7)) + 52|0);
 $59 = ((($4)) + 52|0);
 $60 = load4($59);
 store4($58,$60);
 $61 = ((($4)) + 56|0);
 $62 = ((($$lcssa$i7)) + 56|0);
 $63 = load4($61);
 store4($62,$63);
 $64 = ($63|0)==(0);
 if ($64) {
  store4($55,$58);
 } else {
  $65 = $60;
  $66 = ((($65)) + 8|0);
  store4($66,$58);
  $67 = ((($4)) + 52|0);
  store4($56,$67);
  store4($67,0);
  store4($61,0);
 }
 $68 = ((($$lcssa$i7)) + 60|0);
 $69 = ((($4)) + 60|0);
 $70 = load4($69);
 store4($68,$70);
 $71 = ((($$lcssa$i7)) + 64|0);
 $72 = ((($4)) + 64|0);
 $73 = load4($72);
 store4($71,$73);
 $74 = ((($4)) + 68|0);
 $75 = ((($$lcssa$i7)) + 68|0);
 $76 = load4($74);
 store4($75,$76);
 $77 = ($76|0)==(0);
 if ($77) {
  store4($68,$71);
 } else {
  $78 = $73;
  $79 = ((($78)) + 8|0);
  store4($79,$71);
  $80 = ((($4)) + 64|0);
  store4($69,$80);
  store4($80,0);
  store4($74,0);
 }
 $81 = ((($$lcssa$i7)) + 72|0);
 $82 = ((($4)) + 72|0);
 ; store8($81,load8($82,4),4); store4($81+8 | 0,load4($82+8 | 0,4),4);
 ; store8($82,i64_const(0,0),4); store4($82+8|0,0,4);
 $83 = ((($$lcssa$i7)) + 84|0);
 $84 = ((($4)) + 84|0);
 ; store8($83,load8($84,4),4); store4($83+8 | 0,load4($84+8 | 0,4),4);
 ; store8($84,i64_const(0,0),4); store4($84+8|0,0,4);
 $85 = ((($$lcssa$i7)) + 96|0);
 $86 = ((($4)) + 96|0);
 $87 = load4($86);
 store4($85,$87);
 store4($86,0);
 $88 = ((($$lcssa$i7)) + 100|0);
 $89 = ((($4)) + 100|0);
 $90 = ((($$lcssa$i7)) + 104|0);
 $91 = ((($$lcssa$i7)) + 108|0);
 $92 = load4($89);
 store4($88,$92);
 $93 = ((($4)) + 104|0);
 $94 = load4($93);
 store4($90,$94);
 $95 = ((($4)) + 108|0);
 $96 = load4($95);
 store4($91,$96);
 store4($95,0);
 store4($93,0);
 store4($89,0);
 __ZN5VNodeD2Ev($4);
 $97 = load4($7);
 $98 = ($97|0)==(0|0);
 if (!($98)) {
  $99 = ((($7)) + 4|0);
  $100 = load4($99);
  $101 = ($100|0)==($97|0);
  if ($101) {
   $106 = $97;
  } else {
   $103 = $100;
   while(1) {
    $102 = ((($103)) + -112|0);
    store4($99,$102);
    __ZN5VNodeD2Ev($102);
    $104 = load4($99);
    $105 = ($104|0)==($97|0);
    if ($105) {
     break;
    } else {
     $103 = $104;
    }
   }
   $$pre$i = load4($7);
   $106 = $$pre$i;
  }
  _free($106);
 }
 $107 = ((($6)) + 48|0);
 $108 = ((($107)) + 11|0);
 $109 = load1($108);
 $110 = ($109<<24>>24)<(0);
 if ($110) {
  $111 = load4($107);
  _free($111);
 }
 $112 = ((($6)) + 36|0);
 $113 = ((($112)) + 11|0);
 $114 = load1($113);
 $115 = ($114<<24>>24)<(0);
 if ($115) {
  $116 = load4($112);
  _free($116);
 }
 $117 = ((($6)) + 28|0);
 $118 = load4($117);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($118);
 $119 = ((($6)) + 16|0);
 $120 = load4($119);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($120);
 $121 = ((($6)) + 4|0);
 $122 = load4($121);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($122);
 $123 = ((($5)) + 11|0);
 $124 = load1($123);
 $125 = ($124<<24>>24)<(0);
 if (!($125)) {
  STACKTOP = sp;return ($$lcssa$i7|0);
 }
 $126 = load4($5);
 _free($126);
 STACKTOP = sp;return ($$lcssa$i7|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES9_9VNodeDataNS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_S9_SA_SD_EPNS0_11BindingTypeIS9_EUt_ESK_PSA_PSD_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$$i = 0, $$$i2 = 0, $$016$i = 0, $$016$i2 = 0, $$017$i = 0, $$017$i3 = 0, $$lcssa$i = 0, $$lcssa$i16 = 0, $$lcssa$i8 = 0, $$pre$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0;
 var $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0;
 var $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0;
 var $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 208|0;
 $5 = sp + 96|0;
 $6 = sp + 84|0;
 $7 = sp + 72|0;
 $8 = sp + 12|0;
 $9 = sp;
 $10 = ((($1)) + 4|0);
 $11 = load4($1);
 ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
 $12 = ($11>>>0)>(4294967279);
 if ($12) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $13 = ($11>>>0)<(11);
 if ($13) {
  $28 = $11&255;
  $29 = ((($6)) + 11|0);
  store1($29,$28);
  $30 = ($11|0)==(0);
  if ($30) {
   $$017$i = $6;
  } else {
   $$016$i = $6;
   label = 9;
  }
 } else {
  $14 = (($11) + 16)|0;
  $15 = $14 & -16;
  $16 = ($15|0)==(0);
  $$$i = $16 ? 1 : $15;
  $17 = (_malloc($$$i)|0);
  $18 = ($17|0)==(0|0);
  L7: do {
   if ($18) {
    while(1) {
     $19 = load4(9296);
     $20 = (($19) + 0)|0;
     store4(9296,$20);
     $21 = ($19|0)==(0);
     if ($21) {
      $$lcssa$i = 0;
      break L7;
     }
     $22 = $19;
     FUNCTION_TABLE_v[$22 & 3]();
     $23 = (_malloc($$$i)|0);
     $24 = ($23|0)==(0|0);
     if (!($24)) {
      $$lcssa$i = $23;
      break;
     }
    }
   } else {
    $$lcssa$i = $17;
   }
  } while(0);
  store4($6,$$lcssa$i);
  $25 = $15 | -2147483648;
  $26 = ((($6)) + 8|0);
  store4($26,$25);
  $27 = ((($6)) + 4|0);
  store4($27,$11);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($10|0),($11|0))|0;
  $$017$i = $$016$i;
 }
 $31 = (($$017$i) + ($11)|0);
 store1($31,0);
 $32 = ((($2)) + 4|0);
 $33 = load4($2);
 ; store8($7,i64_const(0,0),4); store4($7+8|0,0,4);
 $34 = ($33>>>0)>(4294967279);
 if ($34) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $35 = ($33>>>0)<(11);
 if ($35) {
  $50 = $33&255;
  $51 = ((($7)) + 11|0);
  store1($51,$50);
  $52 = ($33|0)==(0);
  if ($52) {
   $$017$i3 = $7;
  } else {
   $$016$i2 = $7;
   label = 18;
  }
 } else {
  $36 = (($33) + 16)|0;
  $37 = $36 & -16;
  $38 = ($37|0)==(0);
  $$$i2 = $38 ? 1 : $37;
  $39 = (_malloc($$$i2)|0);
  $40 = ($39|0)==(0|0);
  L21: do {
   if ($40) {
    while(1) {
     $41 = load4(9296);
     $42 = (($41) + 0)|0;
     store4(9296,$42);
     $43 = ($41|0)==(0);
     if ($43) {
      $$lcssa$i8 = 0;
      break L21;
     }
     $44 = $41;
     FUNCTION_TABLE_v[$44 & 3]();
     $45 = (_malloc($$$i2)|0);
     $46 = ($45|0)==(0|0);
     if (!($46)) {
      $$lcssa$i8 = $45;
      break;
     }
    }
   } else {
    $$lcssa$i8 = $39;
   }
  } while(0);
  store4($7,$$lcssa$i8);
  $47 = $37 | -2147483648;
  $48 = ((($7)) + 8|0);
  store4($48,$47);
  $49 = ((($7)) + 4|0);
  store4($49,$33);
  $$016$i2 = $$lcssa$i8;
  label = 18;
 }
 if ((label|0) == 18) {
  _memcpy(($$016$i2|0),($32|0),($33|0))|0;
  $$017$i3 = $$016$i2;
 }
 $53 = (($$017$i3) + ($33)|0);
 store1($53,0);
 __ZN9VNodeDataC2ERKS_($8,$3);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($9,$4);
 FUNCTION_TABLE_viiiii[$0 & 7]($5,$6,$7,$8,$9);
 $54 = (_malloc(112)|0);
 $55 = ($54|0)==(0|0);
 L29: do {
  if ($55) {
   while(1) {
    $56 = load4(9296);
    $57 = (($56) + 0)|0;
    store4(9296,$57);
    $58 = ($56|0)==(0);
    if ($58) {
     $$lcssa$i16 = 0;
     break L29;
    }
    $59 = $56;
    FUNCTION_TABLE_v[$59 & 3]();
    $60 = (_malloc(112)|0);
    $61 = ($60|0)==(0|0);
    if (!($61)) {
     $$lcssa$i16 = $60;
     break;
    }
   }
  } else {
   $$lcssa$i16 = $54;
  }
 } while(0);
 ; store8($$lcssa$i16,load8($5,4),4); store4($$lcssa$i16+8 | 0,load4($5+8 | 0,4),4);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $62 = ((($$lcssa$i16)) + 12|0);
 $63 = ((($5)) + 12|0);
 ; store8($62,load8($63,4),4); store4($62+8 | 0,load4($63+8 | 0,4),4);
 ; store8($63,i64_const(0,0),4); store4($63+8|0,0,4);
 $64 = ((($$lcssa$i16)) + 24|0);
 $65 = ((($5)) + 24|0);
 ; store8($64,load8($65,4),4); store4($64+8 | 0,load4($65+8 | 0,4),4);
 ; store8($65,i64_const(0,0),4); store4($65+8|0,0,4);
 $66 = ((($$lcssa$i16)) + 36|0);
 $67 = ((($5)) + 36|0);
 $68 = load4($67);
 store4($66,$68);
 $69 = ((($$lcssa$i16)) + 40|0);
 $70 = ((($5)) + 40|0);
 $71 = load4($70);
 store4($69,$71);
 $72 = ((($5)) + 44|0);
 $73 = ((($$lcssa$i16)) + 44|0);
 $74 = load4($72);
 store4($73,$74);
 $75 = ($74|0)==(0);
 if ($75) {
  store4($66,$69);
 } else {
  $76 = $71;
  $77 = ((($76)) + 8|0);
  store4($77,$69);
  $78 = ((($5)) + 40|0);
  store4($67,$78);
  store4($78,0);
  store4($72,0);
 }
 $79 = ((($$lcssa$i16)) + 48|0);
 $80 = ((($5)) + 48|0);
 $81 = load4($80);
 store4($79,$81);
 $82 = ((($$lcssa$i16)) + 52|0);
 $83 = ((($5)) + 52|0);
 $84 = load4($83);
 store4($82,$84);
 $85 = ((($5)) + 56|0);
 $86 = ((($$lcssa$i16)) + 56|0);
 $87 = load4($85);
 store4($86,$87);
 $88 = ($87|0)==(0);
 if ($88) {
  store4($79,$82);
 } else {
  $89 = $84;
  $90 = ((($89)) + 8|0);
  store4($90,$82);
  $91 = ((($5)) + 52|0);
  store4($80,$91);
  store4($91,0);
  store4($85,0);
 }
 $92 = ((($$lcssa$i16)) + 60|0);
 $93 = ((($5)) + 60|0);
 $94 = load4($93);
 store4($92,$94);
 $95 = ((($$lcssa$i16)) + 64|0);
 $96 = ((($5)) + 64|0);
 $97 = load4($96);
 store4($95,$97);
 $98 = ((($5)) + 68|0);
 $99 = ((($$lcssa$i16)) + 68|0);
 $100 = load4($98);
 store4($99,$100);
 $101 = ($100|0)==(0);
 if ($101) {
  store4($92,$95);
 } else {
  $102 = $97;
  $103 = ((($102)) + 8|0);
  store4($103,$95);
  $104 = ((($5)) + 64|0);
  store4($93,$104);
  store4($104,0);
  store4($98,0);
 }
 $105 = ((($$lcssa$i16)) + 72|0);
 $106 = ((($5)) + 72|0);
 ; store8($105,load8($106,4),4); store4($105+8 | 0,load4($106+8 | 0,4),4);
 ; store8($106,i64_const(0,0),4); store4($106+8|0,0,4);
 $107 = ((($$lcssa$i16)) + 84|0);
 $108 = ((($5)) + 84|0);
 ; store8($107,load8($108,4),4); store4($107+8 | 0,load4($108+8 | 0,4),4);
 ; store8($108,i64_const(0,0),4); store4($108+8|0,0,4);
 $109 = ((($$lcssa$i16)) + 96|0);
 $110 = ((($5)) + 96|0);
 $111 = load4($110);
 store4($109,$111);
 store4($110,0);
 $112 = ((($$lcssa$i16)) + 100|0);
 $113 = ((($5)) + 100|0);
 $114 = ((($$lcssa$i16)) + 104|0);
 $115 = ((($$lcssa$i16)) + 108|0);
 $116 = load4($113);
 store4($112,$116);
 $117 = ((($5)) + 104|0);
 $118 = load4($117);
 store4($114,$118);
 $119 = ((($5)) + 108|0);
 $120 = load4($119);
 store4($115,$120);
 store4($119,0);
 store4($117,0);
 store4($113,0);
 __ZN5VNodeD2Ev($5);
 $121 = load4($9);
 $122 = ($121|0)==(0|0);
 if (!($122)) {
  $123 = ((($9)) + 4|0);
  $124 = load4($123);
  $125 = ($124|0)==($121|0);
  if ($125) {
   $130 = $121;
  } else {
   $127 = $124;
   while(1) {
    $126 = ((($127)) + -112|0);
    store4($123,$126);
    __ZN5VNodeD2Ev($126);
    $128 = load4($123);
    $129 = ($128|0)==($121|0);
    if ($129) {
     break;
    } else {
     $127 = $128;
    }
   }
   $$pre$i = load4($9);
   $130 = $$pre$i;
  }
  _free($130);
 }
 $131 = ((($8)) + 48|0);
 $132 = ((($131)) + 11|0);
 $133 = load1($132);
 $134 = ($133<<24>>24)<(0);
 if ($134) {
  $135 = load4($131);
  _free($135);
 }
 $136 = ((($8)) + 36|0);
 $137 = ((($136)) + 11|0);
 $138 = load1($137);
 $139 = ($138<<24>>24)<(0);
 if ($139) {
  $140 = load4($136);
  _free($140);
 }
 $141 = ((($8)) + 28|0);
 $142 = load4($141);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($142);
 $143 = ((($8)) + 16|0);
 $144 = load4($143);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($144);
 $145 = ((($8)) + 4|0);
 $146 = load4($145);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($146);
 $147 = ((($7)) + 11|0);
 $148 = load1($147);
 $149 = ($148<<24>>24)<(0);
 if ($149) {
  $150 = load4($7);
  _free($150);
 }
 $151 = ((($6)) + 11|0);
 $152 = load1($151);
 $153 = ($152<<24>>24)<(0);
 if (!($153)) {
  STACKTOP = sp;return ($$lcssa$i16|0);
 }
 $154 = load4($6);
 _free($154);
 STACKTOP = sp;return ($$lcssa$i16|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNS_3valEEE6invokeEPFS2_S3_EPNS0_7_EM_VALE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $2 = sp + 8|0;
 $3 = sp;
 store4($3,$1);
 FUNCTION_TABLE_vii[$0 & 3]($2,$3);
 $4 = (_malloc(112)|0);
 $5 = ($4|0)==(0|0);
 L1: do {
  if ($5) {
   while(1) {
    $6 = load4(9296);
    $7 = (($6) + 0)|0;
    store4(9296,$7);
    $8 = ($6|0)==(0);
    if ($8) {
     $$lcssa$i = 0;
     break L1;
    }
    $9 = $6;
    FUNCTION_TABLE_v[$9 & 3]();
    $10 = (_malloc(112)|0);
    $11 = ($10|0)==(0|0);
    if (!($11)) {
     $$lcssa$i = $10;
     break;
    }
   }
  } else {
   $$lcssa$i = $4;
  }
 } while(0);
 ; store8($$lcssa$i,load8($2,4),4); store4($$lcssa$i+8 | 0,load4($2+8 | 0,4),4);
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $12 = ((($$lcssa$i)) + 12|0);
 $13 = ((($2)) + 12|0);
 ; store8($12,load8($13,4),4); store4($12+8 | 0,load4($13+8 | 0,4),4);
 ; store8($13,i64_const(0,0),4); store4($13+8|0,0,4);
 $14 = ((($$lcssa$i)) + 24|0);
 $15 = ((($2)) + 24|0);
 ; store8($14,load8($15,4),4); store4($14+8 | 0,load4($15+8 | 0,4),4);
 ; store8($15,i64_const(0,0),4); store4($15+8|0,0,4);
 $16 = ((($$lcssa$i)) + 36|0);
 $17 = ((($2)) + 36|0);
 $18 = load4($17);
 store4($16,$18);
 $19 = ((($$lcssa$i)) + 40|0);
 $20 = ((($2)) + 40|0);
 $21 = load4($20);
 store4($19,$21);
 $22 = ((($2)) + 44|0);
 $23 = ((($$lcssa$i)) + 44|0);
 $24 = load4($22);
 store4($23,$24);
 $25 = ($24|0)==(0);
 if ($25) {
  store4($16,$19);
 } else {
  $26 = $21;
  $27 = ((($26)) + 8|0);
  store4($27,$19);
  $28 = ((($2)) + 40|0);
  store4($17,$28);
  store4($28,0);
  store4($22,0);
 }
 $29 = ((($$lcssa$i)) + 48|0);
 $30 = ((($2)) + 48|0);
 $31 = load4($30);
 store4($29,$31);
 $32 = ((($$lcssa$i)) + 52|0);
 $33 = ((($2)) + 52|0);
 $34 = load4($33);
 store4($32,$34);
 $35 = ((($2)) + 56|0);
 $36 = ((($$lcssa$i)) + 56|0);
 $37 = load4($35);
 store4($36,$37);
 $38 = ($37|0)==(0);
 if ($38) {
  store4($29,$32);
 } else {
  $39 = $34;
  $40 = ((($39)) + 8|0);
  store4($40,$32);
  $41 = ((($2)) + 52|0);
  store4($30,$41);
  store4($41,0);
  store4($35,0);
 }
 $42 = ((($$lcssa$i)) + 60|0);
 $43 = ((($2)) + 60|0);
 $44 = load4($43);
 store4($42,$44);
 $45 = ((($$lcssa$i)) + 64|0);
 $46 = ((($2)) + 64|0);
 $47 = load4($46);
 store4($45,$47);
 $48 = ((($2)) + 68|0);
 $49 = ((($$lcssa$i)) + 68|0);
 $50 = load4($48);
 store4($49,$50);
 $51 = ($50|0)==(0);
 if ($51) {
  store4($42,$45);
 } else {
  $52 = $47;
  $53 = ((($52)) + 8|0);
  store4($53,$45);
  $54 = ((($2)) + 64|0);
  store4($43,$54);
  store4($54,0);
  store4($48,0);
 }
 $55 = ((($$lcssa$i)) + 72|0);
 $56 = ((($2)) + 72|0);
 ; store8($55,load8($56,4),4); store4($55+8 | 0,load4($56+8 | 0,4),4);
 ; store8($56,i64_const(0,0),4); store4($56+8|0,0,4);
 $57 = ((($$lcssa$i)) + 84|0);
 $58 = ((($2)) + 84|0);
 ; store8($57,load8($58,4),4); store4($57+8 | 0,load4($58+8 | 0,4),4);
 ; store8($58,i64_const(0,0),4); store4($58+8|0,0,4);
 $59 = ((($$lcssa$i)) + 96|0);
 $60 = ((($2)) + 96|0);
 $61 = load4($60);
 store4($59,$61);
 store4($60,0);
 $62 = ((($$lcssa$i)) + 100|0);
 $63 = ((($2)) + 100|0);
 $64 = ((($$lcssa$i)) + 104|0);
 $65 = ((($$lcssa$i)) + 108|0);
 $66 = load4($63);
 store4($62,$66);
 $67 = ((($2)) + 104|0);
 $68 = load4($67);
 store4($64,$68);
 $69 = ((($2)) + 108|0);
 $70 = load4($69);
 store4($65,$70);
 store4($69,0);
 store4($67,0);
 store4($63,0);
 __ZN5VNodeD2Ev($2);
 $71 = load4($3);
 __emval_decref(($71|0));
 STACKTOP = sp;return ($$lcssa$i|0);
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$0 = 0, $$0$i = 0, $$01318$i$i = 0, $$01318$i2$i = 0, $$01417$i$i = 0, $$01417$i3$i = 0, $$016$i = 0, $$017$i = 0, $$019 = 0, $$019$i$i = 0, $$019$i1$i = 0, $$020$i = 0, $$lcssa$i = 0, $$lcssa$i6 = 0, $$pre$i = 0, $$sink$i = 0, $$sroa$0 = 0, $$sroa$0$0$$sroa$0$0$ = 0, $$sroa$speculated$i$i$i$i$i = 0;
 var $$sroa$speculated$i$i$i$i21$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $$sroa$0 = sp;
 $4 = ((($1)) + 4|0);
 $5 = load4($4);
 $6 = ($5|0)==(0|0);
 do {
  if ($6) {
   $65 = $4;
   store4($$sroa$0,$65);
   $$020$i = $4;
  } else {
   $7 = ((($2)) + 11|0);
   $8 = load1($7);
   $9 = ($8<<24>>24)<(0);
   $10 = ((($2)) + 4|0);
   $11 = load4($10);
   $12 = $8&255;
   $13 = $9 ? $11 : $12;
   $14 = load4($2);
   $15 = $9 ? $14 : $2;
   $$0$i = $5;
   L4: while(1) {
    $16 = ((($$0$i)) + 16|0);
    $17 = ((($16)) + 11|0);
    $18 = load1($17);
    $19 = ($18<<24>>24)<(0);
    $20 = ((($$0$i)) + 20|0);
    $21 = load4($20);
    $22 = $18&255;
    $23 = $19 ? $21 : $22;
    $24 = ($23>>>0)<($13>>>0);
    $$sroa$speculated$i$i$i$i21$i = $24 ? $23 : $13;
    $25 = ($$sroa$speculated$i$i$i$i21$i|0)==(0);
    L6: do {
     if ($25) {
      label = 8;
     } else {
      $26 = load4($16);
      $27 = $19 ? $26 : $16;
      $$01318$i$i = $15;$$01417$i$i = $$sroa$speculated$i$i$i$i21$i;$$019$i$i = $27;
      while(1) {
       $28 = load1($$01318$i$i);
       $29 = load1($$019$i$i);
       $30 = ($28<<24>>24)==($29<<24>>24);
       if (!($30)) {
        break;
       }
       $31 = (($$01417$i$i) + -1)|0;
       $32 = ((($$01318$i$i)) + 1|0);
       $33 = ((($$019$i$i)) + 1|0);
       $34 = ($31|0)==(0);
       if ($34) {
        label = 8;
        break L6;
       } else {
        $$01318$i$i = $32;$$01417$i$i = $31;$$019$i$i = $33;
       }
      }
      $35 = $28&255;
      $36 = $29&255;
      $37 = (($35) - ($36))|0;
      $38 = ($37|0)==(0);
      if ($38) {
       label = 8;
      } else {
       $40 = ($37|0)<(0);
       if ($40) {
        label = 10;
       } else {
        label = 12;
       }
      }
     }
    } while(0);
    if ((label|0) == 8) {
     label = 0;
     $39 = ($13>>>0)<($23>>>0);
     if ($39) {
      label = 10;
     } else {
      label = 12;
     }
    }
    if ((label|0) == 10) {
     label = 0;
     $41 = load4($$0$i);
     $42 = ($41|0)==(0|0);
     if ($42) {
      label = 11;
      break;
     } else {
      $$sink$i = $41;
     }
    }
    else if ((label|0) == 12) {
     label = 0;
     $44 = ($13>>>0)<($23>>>0);
     $$sroa$speculated$i$i$i$i$i = $44 ? $13 : $23;
     $45 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
     L18: do {
      if ($45) {
       label = 17;
      } else {
       $46 = load4($16);
       $47 = $19 ? $46 : $16;
       $$01318$i2$i = $47;$$01417$i3$i = $$sroa$speculated$i$i$i$i$i;$$019$i1$i = $15;
       while(1) {
        $48 = load1($$01318$i2$i);
        $49 = load1($$019$i1$i);
        $50 = ($48<<24>>24)==($49<<24>>24);
        if (!($50)) {
         break;
        }
        $51 = (($$01417$i3$i) + -1)|0;
        $52 = ((($$01318$i2$i)) + 1|0);
        $53 = ((($$019$i1$i)) + 1|0);
        $54 = ($51|0)==(0);
        if ($54) {
         label = 17;
         break L18;
        } else {
         $$01318$i2$i = $52;$$01417$i3$i = $51;$$019$i1$i = $53;
        }
       }
       $55 = $48&255;
       $56 = $49&255;
       $57 = (($55) - ($56))|0;
       $58 = ($57|0)==(0);
       if ($58) {
        label = 17;
       } else {
        $59 = ($57|0)<(0);
        if (!($59)) {
         label = 22;
         break L4;
        }
       }
      }
     } while(0);
     if ((label|0) == 17) {
      label = 0;
      if (!($24)) {
       label = 22;
       break;
      }
     }
     $60 = ((($$0$i)) + 4|0);
     $61 = load4($60);
     $62 = ($61|0)==(0|0);
     if ($62) {
      label = 21;
      break;
     } else {
      $$sink$i = $61;
     }
    }
    $$0$i = $$sink$i;
   }
   if ((label|0) == 11) {
    $43 = $$0$i;
    store4($$sroa$0,$43);
    $$020$i = $$0$i;
    break;
   }
   else if ((label|0) == 21) {
    $63 = $$0$i;
    store4($$sroa$0,$63);
    $$020$i = $60;
    break;
   }
   else if ((label|0) == 22) {
    $64 = $$0$i;
    store4($$sroa$0,$64);
    $$020$i = $$sroa$0;
    break;
   }
  }
 } while(0);
 $66 = load4($$020$i);
 $67 = ($66|0)==(0|0);
 if (!($67)) {
  $$0 = $66;$$019 = 0;
  $117 = $$0;
  store4($0,$117);
  $118 = ((($0)) + 4|0);
  store1($118,$$019);
  STACKTOP = sp;return;
 }
 $68 = (_malloc(32)|0);
 $69 = ($68|0)==(0|0);
 L37: do {
  if ($69) {
   while(1) {
    $70 = load4(9296);
    $71 = (($70) + 0)|0;
    store4(9296,$71);
    $72 = ($70|0)==(0);
    if ($72) {
     $$lcssa$i = 0;
     break L37;
    }
    $73 = $70;
    FUNCTION_TABLE_v[$73 & 3]();
    $74 = (_malloc(32)|0);
    $75 = ($74|0)==(0|0);
    if (!($75)) {
     $$lcssa$i = $74;
     break;
    }
   }
  } else {
   $$lcssa$i = $68;
  }
 } while(0);
 $76 = load4($3);
 $77 = ((($$lcssa$i)) + 16|0);
 ; store8($77,i64_const(0,0),4); store4($77+8|0,0,4);
 $78 = ((($76)) + 11|0);
 $79 = load1($78);
 $80 = ($79<<24>>24)<(0);
 if ($80) {
  $81 = load4($76);
  $82 = ((($76)) + 4|0);
  $83 = load4($82);
  $84 = ($83>>>0)>(4294967279);
  if ($84) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $85 = ($83>>>0)<(11);
  if ($85) {
   $100 = $83&255;
   $101 = ((($$lcssa$i)) + 27|0);
   store1($101,$100);
   $102 = ($83|0)==(0);
   if ($102) {
    $$017$i = $77;
   } else {
    $$016$i = $77;
    label = 38;
   }
  } else {
   $86 = (($83) + 16)|0;
   $87 = $86 & -16;
   $88 = ($87|0)==(0);
   $$$i = $88 ? 1 : $87;
   $89 = (_malloc($$$i)|0);
   $90 = ($89|0)==(0|0);
   L50: do {
    if ($90) {
     while(1) {
      $91 = load4(9296);
      $92 = (($91) + 0)|0;
      store4(9296,$92);
      $93 = ($91|0)==(0);
      if ($93) {
       $$lcssa$i6 = 0;
       break L50;
      }
      $94 = $91;
      FUNCTION_TABLE_v[$94 & 3]();
      $95 = (_malloc($$$i)|0);
      $96 = ($95|0)==(0|0);
      if (!($96)) {
       $$lcssa$i6 = $95;
       break;
      }
     }
    } else {
     $$lcssa$i6 = $89;
    }
   } while(0);
   store4($77,$$lcssa$i6);
   $97 = $87 | -2147483648;
   $98 = ((($$lcssa$i)) + 24|0);
   store4($98,$97);
   $99 = ((($$lcssa$i)) + 20|0);
   store4($99,$83);
   $$016$i = $$lcssa$i6;
   label = 38;
  }
  if ((label|0) == 38) {
   _memcpy(($$016$i|0),($81|0),($83|0))|0;
   $$017$i = $$016$i;
  }
  $103 = (($$017$i) + ($83)|0);
  store1($103,0);
 } else {
  ; store8($77,load8($76,4),4); store4($77+8 | 0,load4($76+8 | 0,4),4);
 }
 $104 = ((($$lcssa$i)) + 28|0);
 store4($104,0);
 $$sroa$0$0$$sroa$0$0$ = load4($$sroa$0);
 store4($$lcssa$i,0);
 $105 = ((($$lcssa$i)) + 4|0);
 store4($105,0);
 $106 = ((($$lcssa$i)) + 8|0);
 store4($106,$$sroa$0$0$$sroa$0$0$);
 store4($$020$i,$$lcssa$i);
 $107 = load4($1);
 $108 = load4($107);
 $109 = ($108|0)==(0|0);
 if ($109) {
  $113 = $$lcssa$i;
 } else {
  $110 = $108;
  store4($1,$110);
  $$pre$i = load4($$020$i);
  $113 = $$pre$i;
 }
 $111 = ((($1)) + 4|0);
 $112 = load4($111);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($112,$113);
 $114 = ((($1)) + 8|0);
 $115 = load4($114);
 $116 = (($115) + 1)|0;
 store4($114,$116);
 $$0 = $$lcssa$i;$$019 = 1;
 $117 = $$0;
 store4($0,$117);
 $118 = ((($0)) + 4|0);
 store1($118,$$019);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal7InvokerI5VNodeJRS2_S3_EE6invokeEPFS2_S3_S3_EPS2_S7_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0;
 $3 = sp;
 FUNCTION_TABLE_viii[$0 & 31]($3,$1,$2);
 $4 = (_malloc(112)|0);
 $5 = ($4|0)==(0|0);
 L1: do {
  if ($5) {
   while(1) {
    $6 = load4(9296);
    $7 = (($6) + 0)|0;
    store4(9296,$7);
    $8 = ($6|0)==(0);
    if ($8) {
     $$lcssa$i = 0;
     break L1;
    }
    $9 = $6;
    FUNCTION_TABLE_v[$9 & 3]();
    $10 = (_malloc(112)|0);
    $11 = ($10|0)==(0|0);
    if (!($11)) {
     $$lcssa$i = $10;
     break;
    }
   }
  } else {
   $$lcssa$i = $4;
  }
 } while(0);
 ; store8($$lcssa$i,load8($3,4),4); store4($$lcssa$i+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $12 = ((($$lcssa$i)) + 12|0);
 $13 = ((($3)) + 12|0);
 ; store8($12,load8($13,4),4); store4($12+8 | 0,load4($13+8 | 0,4),4);
 ; store8($13,i64_const(0,0),4); store4($13+8|0,0,4);
 $14 = ((($$lcssa$i)) + 24|0);
 $15 = ((($3)) + 24|0);
 ; store8($14,load8($15,4),4); store4($14+8 | 0,load4($15+8 | 0,4),4);
 ; store8($15,i64_const(0,0),4); store4($15+8|0,0,4);
 $16 = ((($$lcssa$i)) + 36|0);
 $17 = ((($3)) + 36|0);
 $18 = load4($17);
 store4($16,$18);
 $19 = ((($$lcssa$i)) + 40|0);
 $20 = ((($3)) + 40|0);
 $21 = load4($20);
 store4($19,$21);
 $22 = ((($3)) + 44|0);
 $23 = ((($$lcssa$i)) + 44|0);
 $24 = load4($22);
 store4($23,$24);
 $25 = ($24|0)==(0);
 if ($25) {
  store4($16,$19);
 } else {
  $26 = $21;
  $27 = ((($26)) + 8|0);
  store4($27,$19);
  $28 = ((($3)) + 40|0);
  store4($17,$28);
  store4($28,0);
  store4($22,0);
 }
 $29 = ((($$lcssa$i)) + 48|0);
 $30 = ((($3)) + 48|0);
 $31 = load4($30);
 store4($29,$31);
 $32 = ((($$lcssa$i)) + 52|0);
 $33 = ((($3)) + 52|0);
 $34 = load4($33);
 store4($32,$34);
 $35 = ((($3)) + 56|0);
 $36 = ((($$lcssa$i)) + 56|0);
 $37 = load4($35);
 store4($36,$37);
 $38 = ($37|0)==(0);
 if ($38) {
  store4($29,$32);
 } else {
  $39 = $34;
  $40 = ((($39)) + 8|0);
  store4($40,$32);
  $41 = ((($3)) + 52|0);
  store4($30,$41);
  store4($41,0);
  store4($35,0);
 }
 $42 = ((($$lcssa$i)) + 60|0);
 $43 = ((($3)) + 60|0);
 $44 = load4($43);
 store4($42,$44);
 $45 = ((($$lcssa$i)) + 64|0);
 $46 = ((($3)) + 64|0);
 $47 = load4($46);
 store4($45,$47);
 $48 = ((($3)) + 68|0);
 $49 = ((($$lcssa$i)) + 68|0);
 $50 = load4($48);
 store4($49,$50);
 $51 = ($50|0)==(0);
 if ($51) {
  store4($42,$45);
 } else {
  $52 = $47;
  $53 = ((($52)) + 8|0);
  store4($53,$45);
  $54 = ((($3)) + 64|0);
  store4($43,$54);
  store4($54,0);
  store4($48,0);
 }
 $55 = ((($$lcssa$i)) + 72|0);
 $56 = ((($3)) + 72|0);
 ; store8($55,load8($56,4),4); store4($55+8 | 0,load4($56+8 | 0,4),4);
 ; store8($56,i64_const(0,0),4); store4($56+8|0,0,4);
 $57 = ((($$lcssa$i)) + 84|0);
 $58 = ((($3)) + 84|0);
 ; store8($57,load8($58,4),4); store4($57+8 | 0,load4($58+8 | 0,4),4);
 ; store8($58,i64_const(0,0),4); store4($58+8|0,0,4);
 $59 = ((($$lcssa$i)) + 96|0);
 $60 = ((($3)) + 96|0);
 $61 = load4($60);
 store4($59,$61);
 store4($60,0);
 $62 = ((($$lcssa$i)) + 100|0);
 $63 = ((($3)) + 100|0);
 $64 = ((($$lcssa$i)) + 104|0);
 $65 = ((($$lcssa$i)) + 108|0);
 $66 = load4($63);
 store4($62,$66);
 $67 = ((($3)) + 104|0);
 $68 = load4($67);
 store4($64,$68);
 $69 = ((($3)) + 108|0);
 $70 = load4($69);
 store4($65,$70);
 store4($69,0);
 store4($67,0);
 store4($63,0);
 __ZN5VNodeD2Ev($3);
 STACKTOP = sp;return ($$lcssa$i|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNS_3valERS2_EE6invokeEPFS2_S3_S4_EPNS0_7_EM_VALEPS2_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $3 = sp + 8|0;
 $4 = sp;
 store4($4,$1);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$2);
 $5 = (_malloc(112)|0);
 $6 = ($5|0)==(0|0);
 L1: do {
  if ($6) {
   while(1) {
    $7 = load4(9296);
    $8 = (($7) + 0)|0;
    store4(9296,$8);
    $9 = ($7|0)==(0);
    if ($9) {
     $$lcssa$i = 0;
     break L1;
    }
    $10 = $7;
    FUNCTION_TABLE_v[$10 & 3]();
    $11 = (_malloc(112)|0);
    $12 = ($11|0)==(0|0);
    if (!($12)) {
     $$lcssa$i = $11;
     break;
    }
   }
  } else {
   $$lcssa$i = $5;
  }
 } while(0);
 ; store8($$lcssa$i,load8($3,4),4); store4($$lcssa$i+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $13 = ((($$lcssa$i)) + 12|0);
 $14 = ((($3)) + 12|0);
 ; store8($13,load8($14,4),4); store4($13+8 | 0,load4($14+8 | 0,4),4);
 ; store8($14,i64_const(0,0),4); store4($14+8|0,0,4);
 $15 = ((($$lcssa$i)) + 24|0);
 $16 = ((($3)) + 24|0);
 ; store8($15,load8($16,4),4); store4($15+8 | 0,load4($16+8 | 0,4),4);
 ; store8($16,i64_const(0,0),4); store4($16+8|0,0,4);
 $17 = ((($$lcssa$i)) + 36|0);
 $18 = ((($3)) + 36|0);
 $19 = load4($18);
 store4($17,$19);
 $20 = ((($$lcssa$i)) + 40|0);
 $21 = ((($3)) + 40|0);
 $22 = load4($21);
 store4($20,$22);
 $23 = ((($3)) + 44|0);
 $24 = ((($$lcssa$i)) + 44|0);
 $25 = load4($23);
 store4($24,$25);
 $26 = ($25|0)==(0);
 if ($26) {
  store4($17,$20);
 } else {
  $27 = $22;
  $28 = ((($27)) + 8|0);
  store4($28,$20);
  $29 = ((($3)) + 40|0);
  store4($18,$29);
  store4($29,0);
  store4($23,0);
 }
 $30 = ((($$lcssa$i)) + 48|0);
 $31 = ((($3)) + 48|0);
 $32 = load4($31);
 store4($30,$32);
 $33 = ((($$lcssa$i)) + 52|0);
 $34 = ((($3)) + 52|0);
 $35 = load4($34);
 store4($33,$35);
 $36 = ((($3)) + 56|0);
 $37 = ((($$lcssa$i)) + 56|0);
 $38 = load4($36);
 store4($37,$38);
 $39 = ($38|0)==(0);
 if ($39) {
  store4($30,$33);
 } else {
  $40 = $35;
  $41 = ((($40)) + 8|0);
  store4($41,$33);
  $42 = ((($3)) + 52|0);
  store4($31,$42);
  store4($42,0);
  store4($36,0);
 }
 $43 = ((($$lcssa$i)) + 60|0);
 $44 = ((($3)) + 60|0);
 $45 = load4($44);
 store4($43,$45);
 $46 = ((($$lcssa$i)) + 64|0);
 $47 = ((($3)) + 64|0);
 $48 = load4($47);
 store4($46,$48);
 $49 = ((($3)) + 68|0);
 $50 = ((($$lcssa$i)) + 68|0);
 $51 = load4($49);
 store4($50,$51);
 $52 = ($51|0)==(0);
 if ($52) {
  store4($43,$46);
 } else {
  $53 = $48;
  $54 = ((($53)) + 8|0);
  store4($54,$46);
  $55 = ((($3)) + 64|0);
  store4($44,$55);
  store4($55,0);
  store4($49,0);
 }
 $56 = ((($$lcssa$i)) + 72|0);
 $57 = ((($3)) + 72|0);
 ; store8($56,load8($57,4),4); store4($56+8 | 0,load4($57+8 | 0,4),4);
 ; store8($57,i64_const(0,0),4); store4($57+8|0,0,4);
 $58 = ((($$lcssa$i)) + 84|0);
 $59 = ((($3)) + 84|0);
 ; store8($58,load8($59,4),4); store4($58+8 | 0,load4($59+8 | 0,4),4);
 ; store8($59,i64_const(0,0),4); store4($59+8|0,0,4);
 $60 = ((($$lcssa$i)) + 96|0);
 $61 = ((($3)) + 96|0);
 $62 = load4($61);
 store4($60,$62);
 store4($61,0);
 $63 = ((($$lcssa$i)) + 100|0);
 $64 = ((($3)) + 100|0);
 $65 = ((($$lcssa$i)) + 104|0);
 $66 = ((($$lcssa$i)) + 108|0);
 $67 = load4($64);
 store4($63,$67);
 $68 = ((($3)) + 104|0);
 $69 = load4($68);
 store4($65,$69);
 $70 = ((($3)) + 108|0);
 $71 = load4($70);
 store4($66,$71);
 store4($70,0);
 store4($68,0);
 store4($64,0);
 __ZN5VNodeD2Ev($3);
 $72 = load4($4);
 __emval_decref(($72|0));
 STACKTOP = sp;return ($$lcssa$i|0);
}
function __GLOBAL__sub_I_app_cpp() {
 var $$lcssa$i$i = 0, $$lcssa$i$i$i = 0, $$lcssa$i$i$i13 = 0, $$lcssa$i$i6 = 0, $$lcssa$i$i6$i = 0, $$lcssa$i13$i = 0, $$lcssa$i13$i$i = 0, $$lcssa$i13$i$i29 = 0, $$lcssa$i13$i22$i = 0, $$lcssa$i20$i = 0, $$lcssa$i20$i$i = 0, $$lcssa$i27$i = 0, $$lcssa$i27$i$i = 0, $$lcssa$i28$i = 0, $$lcssa$i34$i = 0, $$lcssa$i35$i = 0, $$lcssa$i41$i = 0, $$lcssa$i42$i = 0, $$lcssa$i48$i = 0, $$lcssa$i49$i = 0;
 var $$lcssa$i55$i = 0, $$lcssa$i56$i = 0, $$lcssa$i6$i = 0, $$lcssa$i6$i$i = 0, $$lcssa$i6$i$i22 = 0, $$lcssa$i6$i15$i = 0, $$lcssa$i62$i = 0, $$lcssa$i63$i = 0, $$lcssa$i69$i = 0, $$lcssa$i70$i = 0, $$lcssa$i76$i = 0, $$lcssa$i77$i = 0, $$lcssa$i84$i = 0, $$repack4$i$i$i$i = 0, $$repack4$i$i$i$i15 = 0, $$repack4$i$i$i8$i = 0, $$repack4$i$i28$i$i = 0, $$repack4$i$i34$i$i = 0, $0 = 0, $1 = 0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0;
 var $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0;
 var $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0;
 var $262 = 0, $263 = 0, $264 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0;
 var $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_class((1024|0),(1032|0),(1048|0),(0|0),(3235|0),(3|0),(3238|0),(0|0),(3238|0),(0|0),(2360|0),(3240|0),(11|0));
 __embind_register_class_constructor((1024|0),1,(1680|0),(3235|0),(4|0),(1|0));
 $0 = (_malloc(8)|0);
 $1 = ($0|0)==(0|0);
 L1: do {
  if ($1) {
   while(1) {
    $2 = load4(9296);
    $3 = (($2) + 0)|0;
    store4(9296,$3);
    $4 = ($2|0)==(0);
    if ($4) {
     $$lcssa$i$i$i = 0;
     break L1;
    }
    $5 = $2;
    FUNCTION_TABLE_v[$5 & 3]();
    $6 = (_malloc(8)|0);
    $7 = ($6|0)==(0|0);
    if (!($7)) {
     $$lcssa$i$i$i = $6;
     break;
    }
   }
  } else {
   $$lcssa$i$i$i = $0;
  }
 } while(0);
 store4($$lcssa$i$i$i,(5));
 $$repack4$i$i$i$i = ((($$lcssa$i$i$i)) + 4|0);
 store4($$repack4$i$i$i$i,0);
 __embind_register_class_function((1024|0),(2874|0),2,(1684|0),(3243|0),(1|0),($$lcssa$i$i$i|0),0);
 $8 = (_malloc(4)|0);
 $9 = ($8|0)==(0|0);
 L6: do {
  if ($9) {
   while(1) {
    $10 = load4(9296);
    $11 = (($10) + 0)|0;
    store4(9296,$11);
    $12 = ($10|0)==(0);
    if ($12) {
     $$lcssa$i6$i$i = 0;
     break L6;
    }
    $13 = $10;
    FUNCTION_TABLE_v[$13 & 3]();
    $14 = (_malloc(4)|0);
    $15 = ($14|0)==(0|0);
    if (!($15)) {
     $$lcssa$i6$i$i = $14;
     break;
    }
   }
  } else {
   $$lcssa$i6$i$i = $8;
  }
 } while(0);
 store4($$lcssa$i6$i$i,(2));
 __embind_register_class_function((1024|0),(2879|0),3,(1692|0),(3367|0),(6|0),($$lcssa$i6$i$i|0),0);
 $16 = (_malloc(4)|0);
 $17 = ($16|0)==(0|0);
 L11: do {
  if ($17) {
   while(1) {
    $18 = load4(9296);
    $19 = (($18) + 0)|0;
    store4(9296,$19);
    $20 = ($18|0)==(0);
    if ($20) {
     $$lcssa$i13$i$i = 0;
     break L11;
    }
    $21 = $18;
    FUNCTION_TABLE_v[$21 & 3]();
    $22 = (_malloc(4)|0);
    $23 = ($22|0)==(0|0);
    if (!($23)) {
     $$lcssa$i13$i$i = $22;
     break;
    }
   }
  } else {
   $$lcssa$i13$i$i = $16;
  }
 } while(0);
 store4($$lcssa$i13$i$i,(1));
 __embind_register_class_function((1024|0),(2883|0),4,(1704|0),(3372|0),(4|0),($$lcssa$i13$i$i|0),0);
 __embind_register_class((1104|0),(1112|0),(1128|0),(0|0),(3235|0),(6|0),(3238|0),(0|0),(3238|0),(0|0),(2376|0),(3240|0),(12|0));
 __embind_register_class_constructor((1104|0),1,(1720|0),(3235|0),(7|0),(2|0));
 $24 = (_malloc(8)|0);
 $25 = ($24|0)==(0|0);
 L16: do {
  if ($25) {
   while(1) {
    $26 = load4(9296);
    $27 = (($26) + 0)|0;
    store4(9296,$27);
    $28 = ($26|0)==(0);
    if ($28) {
     $$lcssa$i$i6$i = 0;
     break L16;
    }
    $29 = $26;
    FUNCTION_TABLE_v[$29 & 3]();
    $30 = (_malloc(8)|0);
    $31 = ($30|0)==(0|0);
    if (!($31)) {
     $$lcssa$i$i6$i = $30;
     break;
    }
   }
  } else {
   $$lcssa$i$i6$i = $24;
  }
 } while(0);
 store4($$lcssa$i$i6$i,(8));
 $$repack4$i$i$i8$i = ((($$lcssa$i$i6$i)) + 4|0);
 store4($$repack4$i$i$i8$i,0);
 __embind_register_class_function((1104|0),(2874|0),2,(1724|0),(3243|0),(3|0),($$lcssa$i$i6$i|0),0);
 $32 = (_malloc(4)|0);
 $33 = ($32|0)==(0|0);
 L21: do {
  if ($33) {
   while(1) {
    $34 = load4(9296);
    $35 = (($34) + 0)|0;
    store4(9296,$35);
    $36 = ($34|0)==(0);
    if ($36) {
     $$lcssa$i6$i15$i = 0;
     break L21;
    }
    $37 = $34;
    FUNCTION_TABLE_v[$37 & 3]();
    $38 = (_malloc(4)|0);
    $39 = ($38|0)==(0|0);
    if (!($39)) {
     $$lcssa$i6$i15$i = $38;
     break;
    }
   }
  } else {
   $$lcssa$i6$i15$i = $32;
  }
 } while(0);
 store4($$lcssa$i6$i15$i,(4));
 __embind_register_class_function((1104|0),(2879|0),3,(1732|0),(3367|0),(7|0),($$lcssa$i6$i15$i|0),0);
 $40 = (_malloc(4)|0);
 $41 = ($40|0)==(0|0);
 L26: do {
  if ($41) {
   while(1) {
    $42 = load4(9296);
    $43 = (($42) + 0)|0;
    store4(9296,$43);
    $44 = ($42|0)==(0);
    if ($44) {
     $$lcssa$i13$i22$i = 0;
     break L26;
    }
    $45 = $42;
    FUNCTION_TABLE_v[$45 & 3]();
    $46 = (_malloc(4)|0);
    $47 = ($46|0)==(0|0);
    if (!($47)) {
     $$lcssa$i13$i22$i = $46;
     break;
    }
   }
  } else {
   $$lcssa$i13$i22$i = $40;
  }
 } while(0);
 store4($$lcssa$i13$i22$i,(2));
 __embind_register_class_function((1104|0),(2883|0),4,(1744|0),(3372|0),(5|0),($$lcssa$i13$i22$i|0),0);
 __embind_register_class((1144|0),(1152|0),(1168|0),(0|0),(3235|0),(9|0),(3238|0),(0|0),(3238|0),(0|0),(2390|0),(3240|0),(13|0));
 __embind_register_class_constructor((1144|0),1,(1760|0),(3235|0),(10|0),(3|0));
 $48 = (_malloc(4)|0);
 $49 = ($48|0)==(0|0);
 L31: do {
  if ($49) {
   while(1) {
    $50 = load4(9296);
    $51 = (($50) + 0)|0;
    store4(9296,$51);
    $52 = ($50|0)==(0);
    if ($52) {
     $$lcssa$i$i = 0;
     break L31;
    }
    $53 = $50;
    FUNCTION_TABLE_v[$53 & 3]();
    $54 = (_malloc(4)|0);
    $55 = ($54|0)==(0|0);
    if (!($55)) {
     $$lcssa$i$i = $54;
     break;
    }
   }
  } else {
   $$lcssa$i$i = $48;
  }
 } while(0);
 store4($$lcssa$i$i,36);
 $56 = (_malloc(4)|0);
 $57 = ($56|0)==(0|0);
 L36: do {
  if ($57) {
   while(1) {
    $58 = load4(9296);
    $59 = (($58) + 0)|0;
    store4(9296,$59);
    $60 = ($58|0)==(0);
    if ($60) {
     $$lcssa$i28$i = 0;
     break L36;
    }
    $61 = $58;
    FUNCTION_TABLE_v[$61 & 3]();
    $62 = (_malloc(4)|0);
    $63 = ($62|0)==(0|0);
    if (!($63)) {
     $$lcssa$i28$i = $62;
     break;
    }
   }
  } else {
   $$lcssa$i28$i = $56;
  }
 } while(0);
 store4($$lcssa$i28$i,36);
 __embind_register_class_property((1144|0),(2400|0),(1080|0),(3243|0),(5|0),($$lcssa$i$i|0),(1080|0),(3750|0),(3|0),($$lcssa$i28$i|0));
 $64 = (_malloc(4)|0);
 $65 = ($64|0)==(0|0);
 L41: do {
  if ($65) {
   while(1) {
    $66 = load4(9296);
    $67 = (($66) + 0)|0;
    store4(9296,$67);
    $68 = ($66|0)==(0);
    if ($68) {
     $$lcssa$i35$i = 0;
     break L41;
    }
    $69 = $66;
    FUNCTION_TABLE_v[$69 & 3]();
    $70 = (_malloc(4)|0);
    $71 = ($70|0)==(0|0);
    if (!($71)) {
     $$lcssa$i35$i = $70;
     break;
    }
   }
  } else {
   $$lcssa$i35$i = $64;
  }
 } while(0);
 store4($$lcssa$i35$i,48);
 $72 = (_malloc(4)|0);
 $73 = ($72|0)==(0|0);
 L46: do {
  if ($73) {
   while(1) {
    $74 = load4(9296);
    $75 = (($74) + 0)|0;
    store4(9296,$75);
    $76 = ($74|0)==(0);
    if ($76) {
     $$lcssa$i42$i = 0;
     break L46;
    }
    $77 = $74;
    FUNCTION_TABLE_v[$77 & 3]();
    $78 = (_malloc(4)|0);
    $79 = ($78|0)==(0|0);
    if (!($79)) {
     $$lcssa$i42$i = $78;
     break;
    }
   }
  } else {
   $$lcssa$i42$i = $72;
  }
 } while(0);
 store4($$lcssa$i42$i,48);
 __embind_register_class_property((1144|0),(2404|0),(1080|0),(3243|0),(5|0),($$lcssa$i35$i|0),(1080|0),(3750|0),(3|0),($$lcssa$i42$i|0));
 $80 = (_malloc(4)|0);
 $81 = ($80|0)==(0|0);
 L51: do {
  if ($81) {
   while(1) {
    $82 = load4(9296);
    $83 = (($82) + 0)|0;
    store4(9296,$83);
    $84 = ($82|0)==(0);
    if ($84) {
     $$lcssa$i49$i = 0;
     break L51;
    }
    $85 = $82;
    FUNCTION_TABLE_v[$85 & 3]();
    $86 = (_malloc(4)|0);
    $87 = ($86|0)==(0|0);
    if (!($87)) {
     $$lcssa$i49$i = $86;
     break;
    }
   }
  } else {
   $$lcssa$i49$i = $80;
  }
 } while(0);
 store4($$lcssa$i49$i,12);
 $88 = (_malloc(4)|0);
 $89 = ($88|0)==(0|0);
 L56: do {
  if ($89) {
   while(1) {
    $90 = load4(9296);
    $91 = (($90) + 0)|0;
    store4(9296,$91);
    $92 = ($90|0)==(0);
    if ($92) {
     $$lcssa$i56$i = 0;
     break L56;
    }
    $93 = $90;
    FUNCTION_TABLE_v[$93 & 3]();
    $94 = (_malloc(4)|0);
    $95 = ($94|0)==(0|0);
    if (!($95)) {
     $$lcssa$i56$i = $94;
     break;
    }
   }
  } else {
   $$lcssa$i56$i = $88;
  }
 } while(0);
 store4($$lcssa$i56$i,12);
 __embind_register_class_property((1144|0),(2407|0),(1024|0),(3243|0),(6|0),($$lcssa$i49$i|0),(1024|0),(3750|0),(4|0),($$lcssa$i56$i|0));
 $96 = (_malloc(4)|0);
 $97 = ($96|0)==(0|0);
 L61: do {
  if ($97) {
   while(1) {
    $98 = load4(9296);
    $99 = (($98) + 0)|0;
    store4(9296,$99);
    $100 = ($98|0)==(0);
    if ($100) {
     $$lcssa$i63$i = 0;
     break L61;
    }
    $101 = $98;
    FUNCTION_TABLE_v[$101 & 3]();
    $102 = (_malloc(4)|0);
    $103 = ($102|0)==(0|0);
    if (!($103)) {
     $$lcssa$i63$i = $102;
     break;
    }
   }
  } else {
   $$lcssa$i63$i = $96;
  }
 } while(0);
 store4($$lcssa$i63$i,0);
 $104 = (_malloc(4)|0);
 $105 = ($104|0)==(0|0);
 L66: do {
  if ($105) {
   while(1) {
    $106 = load4(9296);
    $107 = (($106) + 0)|0;
    store4(9296,$107);
    $108 = ($106|0)==(0);
    if ($108) {
     $$lcssa$i70$i = 0;
     break L66;
    }
    $109 = $106;
    FUNCTION_TABLE_v[$109 & 3]();
    $110 = (_malloc(4)|0);
    $111 = ($110|0)==(0|0);
    if (!($111)) {
     $$lcssa$i70$i = $110;
     break;
    }
   }
  } else {
   $$lcssa$i70$i = $104;
  }
 } while(0);
 store4($$lcssa$i70$i,0);
 __embind_register_class_property((1144|0),(2413|0),(1024|0),(3243|0),(6|0),($$lcssa$i63$i|0),(1024|0),(3750|0),(4|0),($$lcssa$i70$i|0));
 $112 = (_malloc(4)|0);
 $113 = ($112|0)==(0|0);
 L71: do {
  if ($113) {
   while(1) {
    $114 = load4(9296);
    $115 = (($114) + 0)|0;
    store4(9296,$115);
    $116 = ($114|0)==(0);
    if ($116) {
     $$lcssa$i77$i = 0;
     break L71;
    }
    $117 = $114;
    FUNCTION_TABLE_v[$117 & 3]();
    $118 = (_malloc(4)|0);
    $119 = ($118|0)==(0|0);
    if (!($119)) {
     $$lcssa$i77$i = $118;
     break;
    }
   }
  } else {
   $$lcssa$i77$i = $112;
  }
 } while(0);
 store4($$lcssa$i77$i,24);
 $120 = (_malloc(4)|0);
 $121 = ($120|0)==(0|0);
 L76: do {
  if ($121) {
   while(1) {
    $122 = load4(9296);
    $123 = (($122) + 0)|0;
    store4(9296,$123);
    $124 = ($122|0)==(0);
    if ($124) {
     $$lcssa$i84$i = 0;
     break L76;
    }
    $125 = $122;
    FUNCTION_TABLE_v[$125 & 3]();
    $126 = (_malloc(4)|0);
    $127 = ($126|0)==(0|0);
    if (!($127)) {
     $$lcssa$i84$i = $126;
     break;
    }
   }
  } else {
   $$lcssa$i84$i = $120;
  }
 } while(0);
 store4($$lcssa$i84$i,24);
 __embind_register_class_property((1144|0),(2419|0),(1104|0),(3243|0),(7|0),($$lcssa$i77$i|0),(1104|0),(3750|0),(5|0),($$lcssa$i84$i|0));
 __embind_register_value_object((1184|0),(2430|0),(3762|0),(4|0),(3240|0),(14|0));
 $128 = (_malloc(4)|0);
 $129 = ($128|0)==(0|0);
 L81: do {
  if ($129) {
   while(1) {
    $130 = load4(9296);
    $131 = (($130) + 0)|0;
    store4(9296,$131);
    $132 = ($130|0)==(0);
    if ($132) {
     $$lcssa$i$i6 = 0;
     break L81;
    }
    $133 = $130;
    FUNCTION_TABLE_v[$133 & 3]();
    $134 = (_malloc(4)|0);
    $135 = ($134|0)==(0|0);
    if (!($135)) {
     $$lcssa$i$i6 = $134;
     break;
    }
   }
  } else {
   $$lcssa$i$i6 = $128;
  }
 } while(0);
 store4($$lcssa$i$i6,0);
 $136 = (_malloc(4)|0);
 $137 = ($136|0)==(0|0);
 L86: do {
  if ($137) {
   while(1) {
    $138 = load4(9296);
    $139 = (($138) + 0)|0;
    store4(9296,$139);
    $140 = ($138|0)==(0);
    if ($140) {
     $$lcssa$i6$i = 0;
     break L86;
    }
    $141 = $138;
    FUNCTION_TABLE_v[$141 & 3]();
    $142 = (_malloc(4)|0);
    $143 = ($142|0)==(0|0);
    if (!($143)) {
     $$lcssa$i6$i = $142;
     break;
    }
   }
  } else {
   $$lcssa$i6$i = $136;
  }
 } while(0);
 store4($$lcssa$i6$i,0);
 __embind_register_value_object_field((1184|0),(2436|0),(1080|0),(3243|0),(8|0),($$lcssa$i$i6|0),(1080|0),(3750|0),(6|0),($$lcssa$i6$i|0));
 $144 = (_malloc(4)|0);
 $145 = ($144|0)==(0|0);
 L91: do {
  if ($145) {
   while(1) {
    $146 = load4(9296);
    $147 = (($146) + 0)|0;
    store4(9296,$147);
    $148 = ($146|0)==(0);
    if ($148) {
     $$lcssa$i13$i = 0;
     break L91;
    }
    $149 = $146;
    FUNCTION_TABLE_v[$149 & 3]();
    $150 = (_malloc(4)|0);
    $151 = ($150|0)==(0|0);
    if (!($151)) {
     $$lcssa$i13$i = $150;
     break;
    }
   }
  } else {
   $$lcssa$i13$i = $144;
  }
 } while(0);
 store4($$lcssa$i13$i,12);
 $152 = (_malloc(4)|0);
 $153 = ($152|0)==(0|0);
 L96: do {
  if ($153) {
   while(1) {
    $154 = load4(9296);
    $155 = (($154) + 0)|0;
    store4(9296,$155);
    $156 = ($154|0)==(0);
    if ($156) {
     $$lcssa$i20$i = 0;
     break L96;
    }
    $157 = $154;
    FUNCTION_TABLE_v[$157 & 3]();
    $158 = (_malloc(4)|0);
    $159 = ($158|0)==(0|0);
    if (!($159)) {
     $$lcssa$i20$i = $158;
     break;
    }
   }
  } else {
   $$lcssa$i20$i = $152;
  }
 } while(0);
 store4($$lcssa$i20$i,12);
 __embind_register_value_object_field((1184|0),(2400|0),(1080|0),(3243|0),(8|0),($$lcssa$i13$i|0),(1080|0),(3750|0),(6|0),($$lcssa$i20$i|0));
 $160 = (_malloc(4)|0);
 $161 = ($160|0)==(0|0);
 L101: do {
  if ($161) {
   while(1) {
    $162 = load4(9296);
    $163 = (($162) + 0)|0;
    store4(9296,$163);
    $164 = ($162|0)==(0);
    if ($164) {
     $$lcssa$i27$i = 0;
     break L101;
    }
    $165 = $162;
    FUNCTION_TABLE_v[$165 & 3]();
    $166 = (_malloc(4)|0);
    $167 = ($166|0)==(0|0);
    if (!($167)) {
     $$lcssa$i27$i = $166;
     break;
    }
   }
  } else {
   $$lcssa$i27$i = $160;
  }
 } while(0);
 store4($$lcssa$i27$i,24);
 $168 = (_malloc(4)|0);
 $169 = ($168|0)==(0|0);
 L106: do {
  if ($169) {
   while(1) {
    $170 = load4(9296);
    $171 = (($170) + 0)|0;
    store4(9296,$171);
    $172 = ($170|0)==(0);
    if ($172) {
     $$lcssa$i34$i = 0;
     break L106;
    }
    $173 = $170;
    FUNCTION_TABLE_v[$173 & 3]();
    $174 = (_malloc(4)|0);
    $175 = ($174|0)==(0|0);
    if (!($175)) {
     $$lcssa$i34$i = $174;
     break;
    }
   }
  } else {
   $$lcssa$i34$i = $168;
  }
 } while(0);
 store4($$lcssa$i34$i,24);
 __embind_register_value_object_field((1184|0),(2440|0),(1080|0),(3243|0),(8|0),($$lcssa$i27$i|0),(1080|0),(3750|0),(6|0),($$lcssa$i34$i|0));
 $176 = (_malloc(4)|0);
 $177 = ($176|0)==(0|0);
 L111: do {
  if ($177) {
   while(1) {
    $178 = load4(9296);
    $179 = (($178) + 0)|0;
    store4(9296,$179);
    $180 = ($178|0)==(0);
    if ($180) {
     $$lcssa$i41$i = 0;
     break L111;
    }
    $181 = $178;
    FUNCTION_TABLE_v[$181 & 3]();
    $182 = (_malloc(4)|0);
    $183 = ($182|0)==(0|0);
    if (!($183)) {
     $$lcssa$i41$i = $182;
     break;
    }
   }
  } else {
   $$lcssa$i41$i = $176;
  }
 } while(0);
 store4($$lcssa$i41$i,36);
 $184 = (_malloc(4)|0);
 $185 = ($184|0)==(0|0);
 L116: do {
  if ($185) {
   while(1) {
    $186 = load4(9296);
    $187 = (($186) + 0)|0;
    store4(9296,$187);
    $188 = ($186|0)==(0);
    if ($188) {
     $$lcssa$i48$i = 0;
     break L116;
    }
    $189 = $186;
    FUNCTION_TABLE_v[$189 & 3]();
    $190 = (_malloc(4)|0);
    $191 = ($190|0)==(0|0);
    if (!($191)) {
     $$lcssa$i48$i = $190;
     break;
    }
   }
  } else {
   $$lcssa$i48$i = $184;
  }
 } while(0);
 store4($$lcssa$i48$i,36);
 __embind_register_value_object_field((1184|0),(2445|0),(1144|0),(3243|0),(9|0),($$lcssa$i41$i|0),(1144|0),(3750|0),(7|0),($$lcssa$i48$i|0));
 $192 = (_malloc(4)|0);
 $193 = ($192|0)==(0|0);
 L121: do {
  if ($193) {
   while(1) {
    $194 = load4(9296);
    $195 = (($194) + 0)|0;
    store4(9296,$195);
    $196 = ($194|0)==(0);
    if ($196) {
     $$lcssa$i55$i = 0;
     break L121;
    }
    $197 = $194;
    FUNCTION_TABLE_v[$197 & 3]();
    $198 = (_malloc(4)|0);
    $199 = ($198|0)==(0|0);
    if (!($199)) {
     $$lcssa$i55$i = $198;
     break;
    }
   }
  } else {
   $$lcssa$i55$i = $192;
  }
 } while(0);
 store4($$lcssa$i55$i,96);
 $200 = (_malloc(4)|0);
 $201 = ($200|0)==(0|0);
 L126: do {
  if ($201) {
   while(1) {
    $202 = load4(9296);
    $203 = (($202) + 0)|0;
    store4(9296,$203);
    $204 = ($202|0)==(0);
    if ($204) {
     $$lcssa$i62$i = 0;
     break L126;
    }
    $205 = $202;
    FUNCTION_TABLE_v[$205 & 3]();
    $206 = (_malloc(4)|0);
    $207 = ($206|0)==(0|0);
    if (!($207)) {
     $$lcssa$i62$i = $206;
     break;
    }
   }
  } else {
   $$lcssa$i62$i = $200;
  }
 } while(0);
 store4($$lcssa$i62$i,96);
 __embind_register_value_object_field((1184|0),(2450|0),(1064|0),(3243|0),(10|0),($$lcssa$i55$i|0),(1064|0),(3750|0),(8|0),($$lcssa$i62$i|0));
 $208 = (_malloc(4)|0);
 $209 = ($208|0)==(0|0);
 L131: do {
  if ($209) {
   while(1) {
    $210 = load4(9296);
    $211 = (($210) + 0)|0;
    store4(9296,$211);
    $212 = ($210|0)==(0);
    if ($212) {
     $$lcssa$i69$i = 0;
     break L131;
    }
    $213 = $210;
    FUNCTION_TABLE_v[$213 & 3]();
    $214 = (_malloc(4)|0);
    $215 = ($214|0)==(0|0);
    if (!($215)) {
     $$lcssa$i69$i = $214;
     break;
    }
   }
  } else {
   $$lcssa$i69$i = $208;
  }
 } while(0);
 store4($$lcssa$i69$i,100);
 $216 = (_malloc(4)|0);
 $217 = ($216|0)==(0|0);
 L136: do {
  if ($217) {
   while(1) {
    $218 = load4(9296);
    $219 = (($218) + 0)|0;
    store4(9296,$219);
    $220 = ($218|0)==(0);
    if ($220) {
     $$lcssa$i76$i = 0;
     break L136;
    }
    $221 = $218;
    FUNCTION_TABLE_v[$221 & 3]();
    $222 = (_malloc(4)|0);
    $223 = ($222|0)==(0|0);
    if (!($223)) {
     $$lcssa$i76$i = $222;
     break;
    }
   }
  } else {
   $$lcssa$i76$i = $216;
  }
 } while(0);
 store4($$lcssa$i76$i,100);
 __embind_register_value_object_field((1184|0),(2454|0),(1224|0),(3243|0),(11|0),($$lcssa$i69$i|0),(1224|0),(3750|0),(9|0),($$lcssa$i76$i|0));
 __embind_finalize_value_object((1184|0));
 __embind_register_class((1224|0),(1248|0),(1264|0),(0|0),(3235|0),(11|0),(3238|0),(0|0),(3238|0),(0|0),(2463|0),(3240|0),(15|0));
 __embind_register_class_constructor((1224|0),1,(1764|0),(3235|0),(12|0),(5|0));
 $224 = (_malloc(8)|0);
 $225 = ($224|0)==(0|0);
 L141: do {
  if ($225) {
   while(1) {
    $226 = load4(9296);
    $227 = (($226) + 0)|0;
    store4(9296,$227);
    $228 = ($226|0)==(0);
    if ($228) {
     $$lcssa$i$i$i13 = 0;
     break L141;
    }
    $229 = $226;
    FUNCTION_TABLE_v[$229 & 3]();
    $230 = (_malloc(8)|0);
    $231 = ($230|0)==(0|0);
    if (!($231)) {
     $$lcssa$i$i$i13 = $230;
     break;
    }
   }
  } else {
   $$lcssa$i$i$i13 = $224;
  }
 } while(0);
 store4($$lcssa$i$i$i13,(1));
 $$repack4$i$i$i$i15 = ((($$lcssa$i$i$i13)) + 4|0);
 store4($$repack4$i$i$i$i15,0);
 __embind_register_class_function((1224|0),(3895|0),3,(1768|0),(3750|0),(10|0),($$lcssa$i$i$i13|0),0);
 $232 = (_malloc(8)|0);
 $233 = ($232|0)==(0|0);
 L146: do {
  if ($233) {
   while(1) {
    $234 = load4(9296);
    $235 = (($234) + 0)|0;
    store4(9296,$235);
    $236 = ($234|0)==(0);
    if ($236) {
     $$lcssa$i6$i$i22 = 0;
     break L146;
    }
    $237 = $234;
    FUNCTION_TABLE_v[$237 & 3]();
    $238 = (_malloc(8)|0);
    $239 = ($238|0)==(0|0);
    if (!($239)) {
     $$lcssa$i6$i$i22 = $238;
     break;
    }
   }
  } else {
   $$lcssa$i6$i$i22 = $232;
  }
 } while(0);
 store4($$lcssa$i6$i$i22,(11));
 $$repack4$i$i28$i$i = ((($$lcssa$i6$i$i22)) + 4|0);
 store4($$repack4$i$i28$i$i,0);
 __embind_register_class_function((1224|0),(3905|0),4,(1780|0),(3372|0),(6|0),($$lcssa$i6$i$i22|0),0);
 $240 = (_malloc(8)|0);
 $241 = ($240|0)==(0|0);
 L151: do {
  if ($241) {
   while(1) {
    $242 = load4(9296);
    $243 = (($242) + 0)|0;
    store4(9296,$243);
    $244 = ($242|0)==(0);
    if ($244) {
     $$lcssa$i13$i$i29 = 0;
     break L151;
    }
    $245 = $242;
    FUNCTION_TABLE_v[$245 & 3]();
    $246 = (_malloc(8)|0);
    $247 = ($246|0)==(0|0);
    if (!($247)) {
     $$lcssa$i13$i$i29 = $246;
     break;
    }
   }
  } else {
   $$lcssa$i13$i$i29 = $240;
  }
 } while(0);
 store4($$lcssa$i13$i$i29,(13));
 $$repack4$i$i34$i$i = ((($$lcssa$i13$i$i29)) + 4|0);
 store4($$repack4$i$i34$i$i,0);
 __embind_register_class_function((1224|0),(2874|0),2,(1796|0),(3243|0),(12|0),($$lcssa$i13$i$i29|0),0);
 $248 = (_malloc(4)|0);
 $249 = ($248|0)==(0|0);
 L156: do {
  if ($249) {
   while(1) {
    $250 = load4(9296);
    $251 = (($250) + 0)|0;
    store4(9296,$251);
    $252 = ($250|0)==(0);
    if ($252) {
     $$lcssa$i20$i$i = 0;
     break L156;
    }
    $253 = $250;
    FUNCTION_TABLE_v[$253 & 3]();
    $254 = (_malloc(4)|0);
    $255 = ($254|0)==(0|0);
    if (!($255)) {
     $$lcssa$i20$i$i = $254;
     break;
    }
   }
  } else {
   $$lcssa$i20$i$i = $248;
  }
 } while(0);
 store4($$lcssa$i20$i$i,(13));
 __embind_register_class_function((1224|0),(2879|0),3,(1804|0),(3367|0),(8|0),($$lcssa$i20$i$i|0),0);
 $256 = (_malloc(4)|0);
 $257 = ($256|0)==(0|0);
 if (!($257)) {
  $$lcssa$i27$i$i = $256;
  store4($$lcssa$i27$i$i,(9));
  __embind_register_class_function((1224|0),(2883|0),4,(1816|0),(4001|0),(1|0),($$lcssa$i27$i$i|0),0);
  $264 = (__emval_get_global((2475|0))|0);
  store4(9300,$264);
  __embind_register_function((2688|0),2,(1872|0),(3243|0),(14|0),(2|0));
  __embind_register_function((2693|0),3,(1880|0),(3367|0),(10|0),(12|0));
  __embind_register_function((2699|0),3,(1892|0),(3367|0),(11|0),(13|0));
  __embind_register_function((2705|0),3,(1904|0),(3367|0),(12|0),(14|0));
  __embind_register_function((2711|0),3,(1916|0),(3367|0),(13|0),(15|0));
  __embind_register_function((2717|0),3,(1928|0),(3367|0),(14|0),(16|0));
  __embind_register_function((2723|0),4,(1940|0),(4001|0),(2|0),(7|0));
  __embind_register_function((2730|0),4,(1956|0),(4001|0),(3|0),(8|0));
  __embind_register_function((2737|0),4,(1972|0),(4001|0),(4|0),(9|0));
  __embind_register_function((2744|0),5,(1988|0),(4007|0),(1|0),(4|0));
  __embind_register_function((2828|0),2,(2016|0),(3243|0),(15|0),(3|0));
  __embind_register_function((2846|0),3,(2024|0),(3367|0),(15|0),(17|0));
  __embind_register_function((2859|0),3,(2036|0),(3367|0),(16|0),(18|0));
  return;
 }
 while(1) {
  $258 = load4(9296);
  $259 = (($258) + 0)|0;
  store4(9296,$259);
  $260 = ($258|0)==(0);
  if ($260) {
   $$lcssa$i27$i$i = 0;
   label = 100;
   break;
  }
  $261 = $258;
  FUNCTION_TABLE_v[$261 & 3]();
  $262 = (_malloc(4)|0);
  $263 = ($262|0)==(0|0);
  if (!($263)) {
   $$lcssa$i27$i$i = $262;
   label = 100;
   break;
  }
 }
 if ((label|0) == 100) {
  store4($$lcssa$i27$i$i,(9));
  __embind_register_class_function((1224|0),(2883|0),4,(1816|0),(4001|0),(1|0),($$lcssa$i27$i$i|0),0);
  $264 = (__emval_get_global((2475|0))|0);
  store4(9300,$264);
  __embind_register_function((2688|0),2,(1872|0),(3243|0),(14|0),(2|0));
  __embind_register_function((2693|0),3,(1880|0),(3367|0),(10|0),(12|0));
  __embind_register_function((2699|0),3,(1892|0),(3367|0),(11|0),(13|0));
  __embind_register_function((2705|0),3,(1904|0),(3367|0),(12|0),(14|0));
  __embind_register_function((2711|0),3,(1916|0),(3367|0),(13|0),(15|0));
  __embind_register_function((2717|0),3,(1928|0),(3367|0),(14|0),(16|0));
  __embind_register_function((2723|0),4,(1940|0),(4001|0),(2|0),(7|0));
  __embind_register_function((2730|0),4,(1956|0),(4001|0),(3|0),(8|0));
  __embind_register_function((2737|0),4,(1972|0),(4001|0),(4|0),(9|0));
  __embind_register_function((2744|0),5,(1988|0),(4007|0),(1|0),(4|0));
  __embind_register_function((2828|0),2,(2016|0),(3243|0),(15|0),(3|0));
  __embind_register_function((2846|0),3,(2024|0),(3367|0),(15|0),(17|0));
  __embind_register_function((2859|0),3,(2036|0),(3367|0),(16|0),(18|0));
  return;
 }
}
function __GLOBAL__sub_I_bind_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_void((1552|0),(4014|0));
 __embind_register_bool((1568|0),(4019|0),1,1,0);
 __embind_register_integer((1576|0),(4024|0),1,-128,127);
 __embind_register_integer((1592|0),(8634|0),1,-128,127);
 __embind_register_integer((1584|0),(8646|0),1,0,255);
 __embind_register_integer((1600|0),(8660|0),2,-32768,32767);
 __embind_register_integer((1608|0),(8666|0),2,0,65535);
 __embind_register_integer((1616|0),(8683|0),4,-2147483648,2147483647);
 __embind_register_integer((1624|0),(8687|0),4,0,-1);
 __embind_register_integer((1632|0),(4029|0),4,-2147483648,2147483647);
 __embind_register_integer((1640|0),(8700|0),4,0,-1);
 __embind_register_float((1648|0),(8714|0),4);
 __embind_register_float((1656|0),(8720|0),8);
 __embind_register_std_string((1080|0),(8622|0));
 __embind_register_std_string((1280|0),(4034|0));
 __embind_register_std_wstring((1304|0),4,(4067|0));
 __embind_register_emval((1064|0),(4080|0));
 __embind_register_memory_view((1328|0),0,(4096|0));
 __embind_register_memory_view((1336|0),0,(4126|0));
 __embind_register_memory_view((1344|0),1,(4163|0));
 __embind_register_memory_view((1352|0),2,(4202|0));
 __embind_register_memory_view((1360|0),3,(4233|0));
 __embind_register_memory_view((1368|0),4,(4273|0));
 __embind_register_memory_view((1376|0),5,(4302|0));
 __embind_register_memory_view((1384|0),4,(4340|0));
 __embind_register_memory_view((1392|0),5,(4370|0));
 __embind_register_memory_view((1336|0),0,(4409|0));
 __embind_register_memory_view((1344|0),1,(4441|0));
 __embind_register_memory_view((1352|0),2,(4474|0));
 __embind_register_memory_view((1360|0),3,(4507|0));
 __embind_register_memory_view((1368|0),4,(4541|0));
 __embind_register_memory_view((1376|0),5,(4574|0));
 __embind_register_memory_view((1400|0),6,(4608|0));
 __embind_register_memory_view((1408|0),7,(4639|0));
 __embind_register_memory_view((1416|0),7,(4671|0));
 return;
}
function ___getTypeName($0) {
 $0 = $0|0;
 var $$0$i = 0, $$0$i$i = 0, $$014$i$i = 0, $$015$lcssa$i$i = 0, $$01518$i$i = 0, $$1$lcssa$i$i = 0, $$pn$i$i = 0, $$pn29$i$i = 0, $$pre$i$i = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 4|0);
 $2 = load4($1);
 $3 = $2;
 $4 = $3 & 3;
 $5 = ($4|0)==(0);
 L1: do {
  if ($5) {
   $$015$lcssa$i$i = $2;
   label = 4;
  } else {
   $$01518$i$i = $2;$27 = $3;
   while(1) {
    $6 = load1($$01518$i$i);
    $7 = ($6<<24>>24)==(0);
    if ($7) {
     $$pn$i$i = $27;
     break L1;
    }
    $8 = ((($$01518$i$i)) + 1|0);
    $9 = $8;
    $10 = $9 & 3;
    $11 = ($10|0)==(0);
    if ($11) {
     $$015$lcssa$i$i = $8;
     label = 4;
     break;
    } else {
     $$01518$i$i = $8;$27 = $9;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $$0$i$i = $$015$lcssa$i$i;
  while(1) {
   $12 = load4($$0$i$i);
   $13 = (($12) + -16843009)|0;
   $14 = $12 & -2139062144;
   $15 = $14 ^ -2139062144;
   $16 = $15 & $13;
   $17 = ($16|0)==(0);
   $18 = ((($$0$i$i)) + 4|0);
   if ($17) {
    $$0$i$i = $18;
   } else {
    break;
   }
  }
  $19 = $12&255;
  $20 = ($19<<24>>24)==(0);
  if ($20) {
   $$1$lcssa$i$i = $$0$i$i;
  } else {
   $$pn29$i$i = $$0$i$i;
   while(1) {
    $21 = ((($$pn29$i$i)) + 1|0);
    $$pre$i$i = load1($21);
    $22 = ($$pre$i$i<<24>>24)==(0);
    if ($22) {
     $$1$lcssa$i$i = $21;
     break;
    } else {
     $$pn29$i$i = $21;
    }
   }
  }
  $23 = $$1$lcssa$i$i;
  $$pn$i$i = $23;
 }
 $$014$i$i = (($$pn$i$i) - ($3))|0;
 $24 = (($$014$i$i) + 1)|0;
 $25 = (_malloc($24)|0);
 $26 = ($25|0)==(0|0);
 if ($26) {
  $$0$i = 0;
  return ($$0$i|0);
 }
 _memcpy(($25|0),($2|0),($24|0))|0;
 $$0$i = $25;
 return ($$0$i|0);
}
function ___stdio_close($0) {
 $0 = $0|0;
 var $$0$i = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $1 = ((($0)) + 60|0);
 $2 = load4($1);
 store4($vararg_buffer,$2);
 $3 = (___syscall6(6,($vararg_buffer|0))|0);
 $4 = ($3>>>0)>(4294963200);
 if ($4) {
  $5 = (0 - ($3))|0;
  store4(8788,$5);
  $$0$i = -1;
 } else {
  $$0$i = $3;
 }
 STACKTOP = sp;return ($$0$i|0);
}
function ___stdio_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$056 = 0, $$058 = 0, $$059 = 0, $$061 = 0, $$1 = 0, $$157 = 0, $$160 = 0, $$phi$trans$insert = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $3 = sp + 16|0;
 $4 = ((($0)) + 28|0);
 $5 = load4($4);
 store4($3,$5);
 $6 = ((($3)) + 4|0);
 $7 = ((($0)) + 20|0);
 $8 = load4($7);
 $9 = (($8) - ($5))|0;
 store4($6,$9);
 $10 = ((($3)) + 8|0);
 store4($10,$1);
 $11 = ((($3)) + 12|0);
 store4($11,$2);
 $12 = (($9) + ($2))|0;
 $13 = ((($0)) + 60|0);
 $14 = ((($0)) + 44|0);
 $$056 = 2;$$058 = $12;$$059 = $3;
 while(1) {
  $15 = load4($13);
  store4($vararg_buffer,$15);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,$$059);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,$$056);
  $16 = (___syscall146(146,($vararg_buffer|0))|0);
  $17 = ($16>>>0)>(4294963200);
  if ($17) {
   $18 = (0 - ($16))|0;
   store4(8788,$18);
   $$0 = -1;
  } else {
   $$0 = $16;
  }
  $19 = ($$058|0)==($$0|0);
  if ($19) {
   label = 5;
   break;
  }
  $26 = ($$0|0)<(0);
  if ($26) {
   label = 7;
   break;
  }
  $34 = (($$058) - ($$0))|0;
  $35 = ((($$059)) + 4|0);
  $36 = load4($35);
  $37 = ($$0>>>0)>($36>>>0);
  if ($37) {
   $38 = load4($14);
   store4($4,$38);
   store4($7,$38);
   $39 = (($$0) - ($36))|0;
   $40 = ((($$059)) + 8|0);
   $41 = (($$056) + -1)|0;
   $$phi$trans$insert = ((($$059)) + 12|0);
   $$pre = load4($$phi$trans$insert);
   $$1 = $39;$$157 = $41;$$160 = $40;$49 = $$pre;
  } else {
   $42 = ($$056|0)==(2);
   if ($42) {
    $43 = load4($4);
    $44 = (($43) + ($$0)|0);
    store4($4,$44);
    $$1 = $$0;$$157 = 2;$$160 = $$059;$49 = $36;
   } else {
    $$1 = $$0;$$157 = $$056;$$160 = $$059;$49 = $36;
   }
  }
  $45 = load4($$160);
  $46 = (($45) + ($$1)|0);
  store4($$160,$46);
  $47 = ((($$160)) + 4|0);
  $48 = (($49) - ($$1))|0;
  store4($47,$48);
  $$056 = $$157;$$058 = $34;$$059 = $$160;
 }
 if ((label|0) == 5) {
  $20 = load4($14);
  $21 = ((($0)) + 48|0);
  $22 = load4($21);
  $23 = (($20) + ($22)|0);
  $24 = ((($0)) + 16|0);
  store4($24,$23);
  $25 = $20;
  store4($4,$25);
  store4($7,$25);
  $$061 = $2;
 }
 else if ((label|0) == 7) {
  $27 = ((($0)) + 16|0);
  store4($27,0);
  store4($4,0);
  store4($7,0);
  $28 = load4($0);
  $29 = $28 | 32;
  store4($0,$29);
  $30 = ($$056|0)==(2);
  if ($30) {
   $$061 = 0;
  } else {
   $31 = ((($$059)) + 4|0);
   $32 = load4($31);
   $33 = (($2) - ($32))|0;
   $$061 = $33;
  }
 }
 STACKTOP = sp;return ($$061|0);
}
function ___stdio_seek($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre = 0, $10 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $3 = sp + 20|0;
 $4 = ((($0)) + 60|0);
 $5 = load4($4);
 store4($vararg_buffer,$5);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$1);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$3);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$2);
 $6 = (___syscall140(140,($vararg_buffer|0))|0);
 $7 = ($6>>>0)>(4294963200);
 if ($7) {
  $8 = (0 - ($6))|0;
  store4(8788,$8);
  label = 5;
 } else {
  $9 = ($6|0)<(0);
  if ($9) {
   label = 5;
  } else {
   $$pre = load4($3);
   $10 = $$pre;
  }
 }
 if ((label|0) == 5) {
  store4($3,-1);
  $10 = -1;
 }
 STACKTOP = sp;return ($10|0);
}
function _printf_core($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$$0259 = 0, $$$0262 = 0, $$$0269 = 0, $$$3484$i = 0, $$$3484705$i = 0, $$$3484706$i = 0, $$$3501$i = 0, $$$4266 = 0, $$$4502$i = 0, $$$5 = 0, $$$i = 0, $$0 = 0, $$0$i = 0, $$0$lcssa$i = 0, $$0$lcssa$i300 = 0, $$0$tr$i = 0, $$01113$i = 0, $$015$i = 0, $$0228 = 0;
 var $$0229396 = 0, $$0232 = 0, $$0235 = 0, $$0237 = 0, $$0240$lcssa = 0, $$0240$lcssa460 = 0, $$0240395 = 0, $$0243 = 0, $$0247 = 0, $$0249$lcssa = 0, $$0249383 = 0, $$0252 = 0, $$0253 = 0, $$0254 = 0, $$0254$ = 0, $$0259 = 0, $$0262342 = 0, $$0262390 = 0, $$0269 = 0, $$0269$phi = 0;
 var $$0321 = 0, $$035$lcssa$i = 0, $$03555$i = 0, $$036$lcssa$i = 0, $$03654$i = 0, $$045$i = i64(), $$046$i = 0, $$0463$lcssa$i = 0, $$0463594$i = 0, $$0464603$i = 0, $$0466$i = 0.0, $$0470$i = 0, $$0471$i = 0.0, $$0479$i = 0, $$0487652$i = 0, $$0488$i = 0, $$0488663$i = 0, $$0488665$i = 0, $$0496$$9$i = 0, $$0497664$i = 0;
 var $$0498$i = 0, $$05$lcssa$i = 0, $$0509592$i = 0.0, $$0510$i = 0, $$0511$i = 0, $$0514647$i = 0, $$0520$i = 0, $$0522$$i = 0, $$0522$i = 0, $$0524$i = 0, $$0526$i = 0, $$0528$i = 0, $$0528639$i = 0, $$0528641$i = 0, $$0531646$i = 0, $$056$i = 0, $$06$i = 0, $$06$i290 = 0, $$06$i298 = 0, $$07$i = i64();
 var $$1 = 0, $$112$i = 0, $$114$i = 0, $$1230407 = 0, $$1233 = 0, $$1236 = 0, $$1238 = 0, $$1241406 = 0, $$1244394 = 0, $$1248 = 0, $$1250 = 0, $$1255 = 0, $$1260 = 0, $$1263 = 0, $$1263$ = 0, $$1270 = 0, $$1322 = 0, $$137$lcssa$i = 0, $$13745$i = 0, $$140$i = 0;
 var $$1465$i = 0, $$1467$i = 0.0, $$1469$i = 0.0, $$1472$i = 0.0, $$1480$i = 0, $$1482$lcssa$i = 0, $$1482671$i = 0, $$1489651$i = 0, $$1499$lcssa$i = 0, $$1499670$i = 0, $$1508593$i = 0, $$1512$lcssa$i = 0, $$1512617$i = 0, $$1515$i = 0, $$1521$i = 0, $$1525$i = 0, $$1527$i = 0, $$1529624$i = 0, $$1532$lcssa$i = 0, $$1532640$i = 0;
 var $$1607$i = 0, $$2 = 0, $$2$i = 0, $$2$i7 = 0, $$2234 = 0, $$2239 = 0, $$2242381 = 0, $$2245 = 0, $$2251 = 0, $$2256 = 0, $$2256$ = 0, $$2261 = 0, $$2271 = 0, $$2323$lcssa = 0, $$2323382 = 0, $$23839$i = 0, $$2473$i = 0.0, $$2476$$545$i = 0, $$2476$$547$i = 0, $$2476$i = 0;
 var $$2483$ph$i = 0, $$2490$lcssa$i = 0, $$2490632$i = 0, $$2500$i = 0, $$2513$i = 0, $$2516628$i = 0, $$2530$i = 0, $$2533627$i = 0, $$3$i = 0.0, $$3$i6 = 0, $$3257 = 0, $$3265 = 0, $$3272 = 0, $$331 = 0, $$332 = 0, $$333 = 0, $$3477$i = 0, $$3484$lcssa$i = 0, $$3484658$i = 0, $$3501$lcssa$i = 0;
 var $$3501657$i = 0, $$3534623$i = 0, $$4$i = 0.0, $$4258458 = 0, $$4266 = 0, $$4325 = 0, $$4478$lcssa$i = 0, $$4478600$i = 0, $$4492$i = 0, $$4502$i = 0, $$4518$i = 0, $$5 = 0, $$5$lcssa$i = 0, $$537$i = 0, $$538$$i = 0, $$538$i = 0, $$541$i = 0.0, $$544$i = 0, $$546$i = 0, $$5486$lcssa$i = 0;
 var $$5486633$i = 0, $$5493606$i = 0, $$5519$ph$i = 0, $$553$i = 0, $$554$i = 0, $$557$i = 0.0, $$5611$i = 0, $$6 = 0, $$6$i = 0, $$6268 = 0, $$6494599$i = 0, $$7 = 0, $$7495610$i = 0, $$7505$$i = 0, $$7505$i = 0, $$7505$ph$i = 0, $$8$i = 0, $$9$ph$i = 0, $$in = 0, $$lcssa$i = 0;
 var $$lcssa683$i = 0, $$neg$i = 0, $$neg572$i = 0, $$phi$trans$insert = 0, $$pn$i = 0, $$pr = 0, $$pr$i = 0, $$pr571$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i4 = 0, $$pre$phi704$iZ2D = 0, $$pre452 = 0, $$pre453 = 0, $$pre454 = 0, $$pre456 = i64(), $$pre457 = i64(), $$pre697$i = 0, $$pre700$i = 0, $$pre703$i = 0;
 var $$pre86 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = i64(), $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = i64(), $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = i64(), $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = i64(), $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = i64(), $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = i64(), $191 = 0, $192 = 0, $193 = i64(), $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = i64(), $199 = 0, $20 = 0, $200 = i64(), $201 = i64(), $202 = 0, $203 = 0, $204 = i64(), $205 = 0, $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = i64(), $213 = 0, $214 = i64(), $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = i64(), $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = i64(), $224 = 0, $225 = 0;
 var $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = i64(), $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0;
 var $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0;
 var $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0;
 var $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = i64(), $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0;
 var $299 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0.0, $313 = i64(), $314 = 0, $315 = 0.0, $316 = 0;
 var $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = i64(), $321 = i64(), $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0;
 var $335 = 0, $336 = 0, $337 = 0, $338 = 0.0, $339 = 0.0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0;
 var $353 = 0, $354 = 0.0, $355 = 0, $356 = 0, $357 = 0, $358 = 0.0, $359 = 0.0, $36 = 0, $360 = 0.0, $361 = 0.0, $362 = 0.0, $363 = 0.0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = i64(), $369 = 0, $37 = 0, $370 = 0;
 var $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0.0, $389 = 0.0;
 var $39 = 0, $390 = 0.0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0;
 var $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0.0, $422 = 0, $423 = 0, $424 = 0, $425 = 0;
 var $426 = 0, $427 = 0.0, $428 = 0.0, $429 = 0.0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = i64(), $437 = 0, $438 = i64(), $439 = i64(), $44 = 0, $440 = i64(), $441 = i64(), $442 = i64(), $443 = 0;
 var $444 = i64(), $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0;
 var $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0;
 var $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0;
 var $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0;
 var $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0;
 var $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0.0, $541 = 0.0, $542 = 0, $543 = 0.0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0;
 var $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0;
 var $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0;
 var $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0;
 var $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = i64(), $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0;
 var $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = i64(), $639 = 0, $64 = 0, $640 = 0, $641 = 0;
 var $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0;
 var $660 = 0, $661 = 0, $662 = i64(), $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0;
 var $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = i64(), $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0;
 var $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0;
 var $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0;
 var $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = i64(), $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded12 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded16 = 0, $expanded4 = 0, $expanded5 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $expanded9 = 0;
 var $isdigit = 0, $isdigit$i = 0, $isdigit$i292 = 0, $isdigit275 = 0, $isdigit277 = 0, $isdigit5$i = 0, $isdigit5$i288 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$i = 0, $isdigittmp$i291 = 0, $isdigittmp274 = 0, $isdigittmp276 = 0, $isdigittmp4$i = 0, $isdigittmp4$i287 = 0, $isdigittmp7$i = 0, $isdigittmp7$i289 = 0, $notlhs$i = 0, $notrhs$i = 0, $or$cond = 0;
 var $or$cond$i = 0, $or$cond$i2 = 0, $or$cond280 = 0, $or$cond282 = 0, $or$cond285 = 0, $or$cond3$not$i = 0, $or$cond412 = 0, $or$cond53$i = 0, $or$cond540$i = 0, $or$cond543$i = 0, $or$cond552$i = 0, $or$cond6$i = 0, $scevgep694$i = 0, $scevgep694695$i = 0, $storemerge = 0, $storemerge273345 = 0, $storemerge273389 = 0, $storemerge278 = 0, $sum = 0, $trunc = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0;
 $5 = sp + 24|0;
 $6 = sp + 16|0;
 $7 = sp + 588|0;
 $8 = sp + 576|0;
 $9 = sp;
 $10 = sp + 536|0;
 $11 = sp + 8|0;
 $12 = sp + 528|0;
 $13 = ($0|0)!=(0|0);
 $14 = ((($10)) + 40|0);
 $15 = $14;
 $16 = ((($10)) + 39|0);
 $17 = ((($11)) + 4|0);
 $18 = $7;
 $19 = (0 - ($18))|0;
 $20 = ((($8)) + 12|0);
 $21 = ((($8)) + 11|0);
 $22 = $20;
 $23 = (($22) - ($18))|0;
 $24 = (-2 - ($18))|0;
 $25 = (($22) + 2)|0;
 $26 = ((($5)) + 288|0);
 $27 = ((($7)) + 9|0);
 $28 = $27;
 $29 = ((($7)) + 8|0);
 $$0243 = 0;$$0247 = 0;$$0269 = 0;$$0321 = $1;
 L1: while(1) {
  $30 = ($$0247|0)>(-1);
  do {
   if ($30) {
    $31 = (2147483647 - ($$0247))|0;
    $32 = ($$0243|0)>($31|0);
    if ($32) {
     store4(8788,75);
     $$1248 = -1;
     break;
    } else {
     $33 = (($$0243) + ($$0247))|0;
     $$1248 = $33;
     break;
    }
   } else {
    $$1248 = $$0247;
   }
  } while(0);
  $34 = load1($$0321);
  $35 = ($34<<24>>24)==(0);
  if ($35) {
   label = 261;
   break;
  } else {
   $$1322 = $$0321;$36 = $34;
  }
  L9: while(1) {
   switch ($36<<24>>24) {
   case 37:  {
    $$0249383 = $$1322;$$2323382 = $$1322;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $$0249$lcssa = $$1322;$$2323$lcssa = $$1322;
    break L9;
    break;
   }
   default: {
   }
   }
   $37 = ((($$1322)) + 1|0);
   $$pre = load1($37);
   $$1322 = $37;$36 = $$pre;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $38 = ((($$2323382)) + 1|0);
     $39 = load1($38);
     $40 = ($39<<24>>24)==(37);
     if (!($40)) {
      $$0249$lcssa = $$0249383;$$2323$lcssa = $$2323382;
      break L12;
     }
     $41 = ((($$0249383)) + 1|0);
     $42 = ((($$2323382)) + 2|0);
     $43 = load1($42);
     $44 = ($43<<24>>24)==(37);
     if ($44) {
      $$0249383 = $41;$$2323382 = $42;
      label = 9;
     } else {
      $$0249$lcssa = $41;$$2323$lcssa = $42;
      break;
     }
    }
   }
  } while(0);
  $45 = $$0249$lcssa;
  $46 = $$0321;
  $47 = (($45) - ($46))|0;
  if ($13) {
   $48 = load4($0);
   $49 = $48 & 32;
   $50 = ($49|0)==(0);
   if ($50) {
    ___fwritex($$0321,$47,$0);
   }
  }
  $51 = ($47|0)==(0);
  if (!($51)) {
   $$0269$phi = $$0269;$$0243 = $47;$$0247 = $$1248;$$0321 = $$2323$lcssa;$$0269 = $$0269$phi;
   continue;
  }
  $52 = ((($$2323$lcssa)) + 1|0);
  $53 = load1($52);
  $54 = $53 << 24 >> 24;
  $isdigittmp = (($54) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $55 = ((($$2323$lcssa)) + 2|0);
   $56 = load1($55);
   $57 = ($56<<24>>24)==(36);
   $58 = ((($$2323$lcssa)) + 3|0);
   $$331 = $57 ? $58 : $52;
   $$$0269 = $57 ? 1 : $$0269;
   $isdigittmp$ = $57 ? $isdigittmp : -1;
   $$pre452 = load1($$331);
   $$0253 = $isdigittmp$;$$1270 = $$$0269;$60 = $$pre452;$storemerge = $$331;
  } else {
   $$0253 = -1;$$1270 = $$0269;$60 = $53;$storemerge = $52;
  }
  $59 = $60 << 24 >> 24;
  $61 = (($59) + -32)|0;
  $62 = ($61>>>0)<(32);
  L25: do {
   if ($62) {
    $$0262390 = 0;$64 = $61;$68 = $60;$storemerge273389 = $storemerge;
    while(1) {
     $63 = 1 << $64;
     $65 = $63 & 75913;
     $66 = ($65|0)==(0);
     if ($66) {
      $$0262342 = $$0262390;$78 = $68;$storemerge273345 = $storemerge273389;
      break L25;
     }
     $67 = $68 << 24 >> 24;
     $69 = (($67) + -32)|0;
     $70 = 1 << $69;
     $71 = $70 | $$0262390;
     $72 = ((($storemerge273389)) + 1|0);
     $73 = load1($72);
     $74 = $73 << 24 >> 24;
     $75 = (($74) + -32)|0;
     $76 = ($75>>>0)<(32);
     if ($76) {
      $$0262390 = $71;$64 = $75;$68 = $73;$storemerge273389 = $72;
     } else {
      $$0262342 = $71;$78 = $73;$storemerge273345 = $72;
      break;
     }
    }
   } else {
    $$0262342 = 0;$78 = $60;$storemerge273345 = $storemerge;
   }
  } while(0);
  $77 = ($78<<24>>24)==(42);
  do {
   if ($77) {
    $79 = ((($storemerge273345)) + 1|0);
    $80 = load1($79);
    $81 = $80 << 24 >> 24;
    $isdigittmp276 = (($81) + -48)|0;
    $isdigit277 = ($isdigittmp276>>>0)<(10);
    if ($isdigit277) {
     $82 = ((($storemerge273345)) + 2|0);
     $83 = load1($82);
     $84 = ($83<<24>>24)==(36);
     if ($84) {
      $85 = (($4) + ($isdigittmp276<<2)|0);
      store4($85,10);
      $86 = load1($79);
      $87 = $86 << 24 >> 24;
      $88 = (($87) + -48)|0;
      $89 = (($3) + ($88<<3)|0);
      $90 = load8($89);
      $91 = i64_trunc($90);
      $92 = ((($storemerge273345)) + 3|0);
      $$0259 = $91;$$2271 = 1;$storemerge278 = $92;
     } else {
      label = 24;
     }
    } else {
     label = 24;
    }
    if ((label|0) == 24) {
     label = 0;
     $93 = ($$1270|0)==(0);
     if (!($93)) {
      $$0 = -1;
      break L1;
     }
     if (!($13)) {
      $$1260 = 0;$$1263 = $$0262342;$$3272 = 0;$$4325 = $79;$$pr = $80;
      break;
     }
     $arglist_current = load4($2);
     $94 = $arglist_current;
     $expanded5 = ((0) + 4|0);
     $expanded4 = $expanded5;
     $expanded = (($expanded4) - 1)|0;
     $95 = (($94) + ($expanded))|0;
     $expanded9 = ((0) + 4|0);
     $expanded8 = $expanded9;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $96 = $95 & $expanded6;
     $97 = $96;
     $98 = load4($97);
     $arglist_next = ((($97)) + 4|0);
     store4($2,$arglist_next);
     $$0259 = $98;$$2271 = 0;$storemerge278 = $79;
    }
    $99 = ($$0259|0)<(0);
    $100 = $$0262342 | 8192;
    $101 = (0 - ($$0259))|0;
    $$$0262 = $99 ? $100 : $$0262342;
    $$$0259 = $99 ? $101 : $$0259;
    $$pre453 = load1($storemerge278);
    $$1260 = $$$0259;$$1263 = $$$0262;$$3272 = $$2271;$$4325 = $storemerge278;$$pr = $$pre453;
   } else {
    $102 = $78 << 24 >> 24;
    $isdigittmp4$i = (($102) + -48)|0;
    $isdigit5$i = ($isdigittmp4$i>>>0)<(10);
    if ($isdigit5$i) {
     $$06$i = 0;$106 = $storemerge273345;$isdigittmp7$i = $isdigittmp4$i;
     while(1) {
      $103 = ($$06$i*10)|0;
      $104 = (($103) + ($isdigittmp7$i))|0;
      $105 = ((($106)) + 1|0);
      $107 = load1($105);
      $108 = $107 << 24 >> 24;
      $isdigittmp$i = (($108) + -48)|0;
      $isdigit$i = ($isdigittmp$i>>>0)<(10);
      if ($isdigit$i) {
       $$06$i = $104;$106 = $105;$isdigittmp7$i = $isdigittmp$i;
      } else {
       break;
      }
     }
     $109 = ($104|0)<(0);
     if ($109) {
      $$0 = -1;
      break L1;
     } else {
      $$1260 = $104;$$1263 = $$0262342;$$3272 = $$1270;$$4325 = $105;$$pr = $107;
     }
    } else {
     $$1260 = 0;$$1263 = $$0262342;$$3272 = $$1270;$$4325 = $storemerge273345;$$pr = $78;
    }
   }
  } while(0);
  $110 = ($$pr<<24>>24)==(46);
  L45: do {
   if ($110) {
    $111 = ((($$4325)) + 1|0);
    $112 = load1($111);
    $113 = ($112<<24>>24)==(42);
    if (!($113)) {
     $134 = $112 << 24 >> 24;
     $isdigittmp4$i287 = (($134) + -48)|0;
     $isdigit5$i288 = ($isdigittmp4$i287>>>0)<(10);
     if ($isdigit5$i288) {
      $$06$i290 = 0;$138 = $111;$isdigittmp7$i289 = $isdigittmp4$i287;
     } else {
      $$0254 = 0;$$6 = $111;
      break;
     }
     while(1) {
      $135 = ($$06$i290*10)|0;
      $136 = (($135) + ($isdigittmp7$i289))|0;
      $137 = ((($138)) + 1|0);
      $139 = load1($137);
      $140 = $139 << 24 >> 24;
      $isdigittmp$i291 = (($140) + -48)|0;
      $isdigit$i292 = ($isdigittmp$i291>>>0)<(10);
      if ($isdigit$i292) {
       $$06$i290 = $136;$138 = $137;$isdigittmp7$i289 = $isdigittmp$i291;
      } else {
       $$0254 = $136;$$6 = $137;
       break L45;
      }
     }
    }
    $114 = ((($$4325)) + 2|0);
    $115 = load1($114);
    $116 = $115 << 24 >> 24;
    $isdigittmp274 = (($116) + -48)|0;
    $isdigit275 = ($isdigittmp274>>>0)<(10);
    if ($isdigit275) {
     $117 = ((($$4325)) + 3|0);
     $118 = load1($117);
     $119 = ($118<<24>>24)==(36);
     if ($119) {
      $120 = (($4) + ($isdigittmp274<<2)|0);
      store4($120,10);
      $121 = load1($114);
      $122 = $121 << 24 >> 24;
      $123 = (($122) + -48)|0;
      $124 = (($3) + ($123<<3)|0);
      $125 = load8($124);
      $126 = i64_trunc($125);
      $127 = ((($$4325)) + 4|0);
      $$0254 = $126;$$6 = $127;
      break;
     }
    }
    $128 = ($$3272|0)==(0);
    if (!($128)) {
     $$0 = -1;
     break L1;
    }
    if ($13) {
     $arglist_current2 = load4($2);
     $129 = $arglist_current2;
     $expanded12 = ((0) + 4|0);
     $expanded11 = $expanded12;
     $expanded10 = (($expanded11) - 1)|0;
     $130 = (($129) + ($expanded10))|0;
     $expanded16 = ((0) + 4|0);
     $expanded15 = $expanded16;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $131 = $130 & $expanded13;
     $132 = $131;
     $133 = load4($132);
     $arglist_next3 = ((($132)) + 4|0);
     store4($2,$arglist_next3);
     $$0254 = $133;$$6 = $114;
    } else {
     $$0254 = 0;$$6 = $114;
    }
   } else {
    $$0254 = -1;$$6 = $$4325;
   }
  } while(0);
  $$0252 = 0;$$7 = $$6;
  while(1) {
   $141 = load1($$7);
   $142 = $141 << 24 >> 24;
   $143 = (($142) + -65)|0;
   $144 = ($143>>>0)>(57);
   if ($144) {
    $$0 = -1;
    break L1;
   }
   $145 = ((($$7)) + 1|0);
   $146 = ((5206 + (($$0252*58)|0)|0) + ($143)|0);
   $147 = load1($146);
   $148 = $147&255;
   $149 = (($148) + -1)|0;
   $150 = ($149>>>0)<(8);
   if ($150) {
    $$0252 = $148;$$7 = $145;
   } else {
    break;
   }
  }
  $151 = ($147<<24>>24)==(0);
  if ($151) {
   $$0 = -1;
   break;
  }
  $152 = ($147<<24>>24)==(19);
  $153 = ($$0253|0)>(-1);
  do {
   if ($152) {
    if ($153) {
     $$0 = -1;
     break L1;
    } else {
     label = 51;
    }
   } else {
    if ($153) {
     $154 = (($4) + ($$0253<<2)|0);
     store4($154,$148);
     $155 = (($3) + ($$0253<<3)|0);
     $156 = load8($155);
     store8($9,$156);
     label = 51;
     break;
    }
    if (!($13)) {
     $$0 = 0;
     break L1;
    }
    _pop_arg($9,$148,$2);
   }
  } while(0);
  if ((label|0) == 51) {
   label = 0;
   if (!($13)) {
    $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
    continue;
   }
  }
  $157 = load1($$7);
  $158 = $157 << 24 >> 24;
  $159 = ($$0252|0)!=(0);
  $160 = $158 & 15;
  $161 = ($160|0)==(3);
  $or$cond280 = $159 & $161;
  $162 = $158 & -33;
  $$0235 = $or$cond280 ? $162 : $158;
  $163 = $$1263 & 8192;
  $164 = ($163|0)==(0);
  $165 = $$1263 & -65537;
  $$1263$ = $164 ? $$1263 : $165;
  L74: do {
   switch ($$0235|0) {
   case 110:  {
    $trunc = $$0252&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $166 = load4($9);
     store4($166,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
     continue L1;
     break;
    }
    case 1:  {
     $167 = load4($9);
     store4($167,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
     continue L1;
     break;
    }
    case 2:  {
     $168 = i64_sext($$1248);
     $169 = load4($9);
     store8($169,$168);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
     continue L1;
     break;
    }
    case 3:  {
     $170 = $$1248&65535;
     $171 = load4($9);
     store2($171,$170);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
     continue L1;
     break;
    }
    case 4:  {
     $172 = $$1248&255;
     $173 = load4($9);
     store1($173,$172);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
     continue L1;
     break;
    }
    case 6:  {
     $174 = load4($9);
     store4($174,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
     continue L1;
     break;
    }
    case 7:  {
     $175 = i64_sext($$1248);
     $176 = load4($9);
     store8($176,$175);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
     continue L1;
     break;
    }
    default: {
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $177 = ($$0254>>>0)>(8);
    $178 = $177 ? $$0254 : 8;
    $179 = $$1263$ | 8;
    $$1236 = 120;$$1255 = $178;$$3265 = $179;
    label = 63;
    break;
   }
   case 88: case 120:  {
    $$1236 = $$0235;$$1255 = $$0254;$$3265 = $$1263$;
    label = 63;
    break;
   }
   case 111:  {
    $198 = load8($9);
    $199 = i64_eq($198,i64_const(0,0));
    if ($199) {
     $$0$lcssa$i300 = $14;
    } else {
     $$045$i = $198;$$06$i298 = $14;
     while(1) {
      $200 = i64_and($$045$i,i64_const(7,0));
      $201 = i64_or($200,i64_const(48,0));
      $202 = i64_trunc($201)&255;
      $203 = ((($$06$i298)) + -1|0);
      store1($203,$202);
      $204 = i64_lshr($$045$i,i64_const(3,0));
      $205 = i64_eq($204,i64_const(0,0));
      if ($205) {
       $$0$lcssa$i300 = $203;
       break;
      } else {
       $$045$i = $204;$$06$i298 = $203;
      }
     }
    }
    $206 = $$1263$ & 8;
    $207 = ($206|0)==(0);
    if ($207) {
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 5686;$$2256 = $$0254;$$4266 = $$1263$;
     label = 76;
    } else {
     $208 = $$0$lcssa$i300;
     $209 = (($15) - ($208))|0;
     $210 = ($$0254|0)>($209|0);
     $211 = (($209) + 1)|0;
     $$0254$ = $210 ? $$0254 : $211;
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 5686;$$2256 = $$0254$;$$4266 = $$1263$;
     label = 76;
    }
    break;
   }
   case 105: case 100:  {
    $212 = load8($9);
    $213 = i64_slt($212,i64_const(0,0));
    if ($213) {
     $214 = i64_sub(i64_const(0,0),$212);
     store8($9,$214);
     $$0232 = 1;$$0237 = 5686;$219 = $214;
     label = 75;
     break L74;
    }
    $215 = $$1263$ & 2048;
    $216 = ($215|0)==(0);
    $217 = $$1263$ & 1;
    if ($216) {
     $218 = ($217|0)==(0);
     $$ = $218 ? 5686 : (5688);
     $$0232 = $217;$$0237 = $$;$219 = $212;
     label = 75;
    } else {
     $$0232 = 1;$$0237 = (5687);$219 = $212;
     label = 75;
    }
    break;
   }
   case 117:  {
    $$pre456 = load8($9);
    $$0232 = 0;$$0237 = 5686;$219 = $$pre456;
    label = 75;
    break;
   }
   case 99:  {
    $232 = load8($9);
    $233 = i64_trunc($232)&255;
    store1($16,$233);
    $$2 = $16;$$2234 = 0;$$2239 = 5686;$$2251 = $14;$$5 = 1;$$6268 = $165;
    break;
   }
   case 109:  {
    $234 = load4(8788);
    $$015$i = 0;
    while(1) {
     $236 = (5734 + ($$015$i)|0);
     $237 = load1($236);
     $238 = $237&255;
     $239 = ($238|0)==($234|0);
     if ($239) {
      label = 80;
      break;
     }
     $240 = (($$015$i) + 1)|0;
     $241 = ($240|0)==(87);
     if ($241) {
      $$01113$i = 5822;$$114$i = 87;
      break;
     } else {
      $$015$i = $240;
     }
    }
    if ((label|0) == 80) {
     label = 0;
     $235 = ($$015$i|0)==(0);
     if ($235) {
      $$1 = 5822;
      label = 87;
      break L74;
     } else {
      $$01113$i = 5822;$$114$i = $$015$i;
     }
    }
    while(1) {
     $$112$i = $$01113$i;
     while(1) {
      $242 = load1($$112$i);
      $243 = ($242<<24>>24)==(0);
      $244 = ((($$112$i)) + 1|0);
      if ($243) {
       break;
      } else {
       $$112$i = $244;
      }
     }
     $245 = (($$114$i) + -1)|0;
     $246 = ($245|0)==(0);
     if ($246) {
      $$1 = $244;
      label = 87;
      break;
     } else {
      $$01113$i = $244;$$114$i = $245;
     }
    }
    break;
   }
   case 115:  {
    $247 = load4($9);
    $248 = ($247|0)!=(0|0);
    $249 = $248 ? $247 : 5696;
    $$1 = $249;
    label = 87;
    break;
   }
   case 67:  {
    $285 = load8($9);
    $286 = i64_trunc($285);
    store4($11,$286);
    store4($17,0);
    store4($9,$11);
    $$4258458 = -1;$744 = $11;
    label = 103;
    break;
   }
   case 83:  {
    $$pre454 = load4($9);
    $287 = ($$0254|0)==(0);
    if ($287) {
     _pad($0,32,$$1260,0,$$1263$);
     $$0240$lcssa460 = 0;
     label = 114;
    } else {
     $$4258458 = $$0254;$744 = $$pre454;
     label = 103;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $312 = loadd($9);
    store4($6,0);
    $313 = i64_bc2i($312);
    $314 = i64_slt($313,i64_const(0,0));
    if ($314) {
     $315 = -$312;
     $$0471$i = $315;$$0520$i = 1;$$0522$i = 5703;
    } else {
     $316 = $$1263$ & 2048;
     $317 = ($316|0)==(0);
     $318 = $$1263$ & 1;
     if ($317) {
      $319 = ($318|0)==(0);
      $$$i = $319 ? (5704) : (5709);
      $$0471$i = $312;$$0520$i = $318;$$0522$i = $$$i;
     } else {
      $$0471$i = $312;$$0520$i = 1;$$0522$i = (5706);
     }
    }
    $320 = i64_bc2i($$0471$i);
    $321 = i64_and($320,i64_const(0,2146435072));
    $322 = i64_ult($321,i64_const(0,2146435072));
    do {
     if ($322) {
      $338 = (+_frexp($$0471$i,$6));
      $339 = $338 * 2.0;
      $340 = $339 != 0.0;
      if ($340) {
       $341 = load4($6);
       $342 = (($341) + -1)|0;
       store4($6,$342);
      }
      $343 = $$0235 | 32;
      $344 = ($343|0)==(97);
      if ($344) {
       $345 = $$0235 & 32;
       $346 = ($345|0)==(0);
       $347 = ((($$0522$i)) + 9|0);
       $$0522$$i = $346 ? $$0522$i : $347;
       $348 = $$0520$i | 2;
       $349 = ($$0254>>>0)>(11);
       $350 = (12 - ($$0254))|0;
       $351 = ($350|0)==(0);
       $352 = $349 | $351;
       do {
        if ($352) {
         $$1472$i = $339;
        } else {
         $$0509592$i = 8.0;$$1508593$i = $350;
         while(1) {
          $353 = (($$1508593$i) + -1)|0;
          $354 = $$0509592$i * 16.0;
          $355 = ($353|0)==(0);
          if ($355) {
           break;
          } else {
           $$0509592$i = $354;$$1508593$i = $353;
          }
         }
         $356 = load1($$0522$$i);
         $357 = ($356<<24>>24)==(45);
         if ($357) {
          $358 = -$339;
          $359 = $358 - $354;
          $360 = $354 + $359;
          $361 = -$360;
          $$1472$i = $361;
          break;
         } else {
          $362 = $339 + $354;
          $363 = $362 - $354;
          $$1472$i = $363;
          break;
         }
        }
       } while(0);
       $364 = load4($6);
       $365 = ($364|0)<(0);
       $366 = (0 - ($364))|0;
       $367 = $365 ? $366 : $364;
       $368 = i64_sext($367);
       $369 = (_fmt_u($368,$20)|0);
       $370 = ($369|0)==($20|0);
       if ($370) {
        store1($21,48);
        $$0511$i = $21;
       } else {
        $$0511$i = $369;
       }
       $371 = $364 >> 31;
       $372 = $371 & 2;
       $373 = (($372) + 43)|0;
       $374 = $373&255;
       $375 = ((($$0511$i)) + -1|0);
       store1($375,$374);
       $376 = (($$0235) + 15)|0;
       $377 = $376&255;
       $378 = ((($$0511$i)) + -2|0);
       store1($378,$377);
       $notrhs$i = ($$0254|0)<(1);
       $379 = $$1263$ & 8;
       $380 = ($379|0)==(0);
       $$0524$i = $7;$$2473$i = $$1472$i;
       while(1) {
        $381 = (~~(($$2473$i)));
        $382 = (5670 + ($381)|0);
        $383 = load1($382);
        $384 = $383&255;
        $385 = $384 | $345;
        $386 = $385&255;
        $387 = ((($$0524$i)) + 1|0);
        store1($$0524$i,$386);
        $388 = (+($381|0));
        $389 = $$2473$i - $388;
        $390 = $389 * 16.0;
        $391 = $387;
        $392 = (($391) - ($18))|0;
        $393 = ($392|0)==(1);
        do {
         if ($393) {
          $notlhs$i = $390 == 0.0;
          $or$cond3$not$i = $notrhs$i & $notlhs$i;
          $or$cond$i = $380 & $or$cond3$not$i;
          if ($or$cond$i) {
           $$1525$i = $387;
           break;
          }
          $394 = ((($$0524$i)) + 2|0);
          store1($387,46);
          $$1525$i = $394;
         } else {
          $$1525$i = $387;
         }
        } while(0);
        $395 = $390 != 0.0;
        if ($395) {
         $$0524$i = $$1525$i;$$2473$i = $390;
        } else {
         break;
        }
       }
       $396 = ($$0254|0)!=(0);
       $$pre700$i = $$1525$i;
       $397 = (($24) + ($$pre700$i))|0;
       $398 = ($397|0)<($$0254|0);
       $or$cond412 = $396 & $398;
       $399 = $378;
       $400 = (($25) + ($$0254))|0;
       $401 = (($400) - ($399))|0;
       $402 = (($23) - ($399))|0;
       $403 = (($402) + ($$pre700$i))|0;
       $$0526$i = $or$cond412 ? $401 : $403;
       $404 = (($$0526$i) + ($348))|0;
       _pad($0,32,$$1260,$404,$$1263$);
       $405 = load4($0);
       $406 = $405 & 32;
       $407 = ($406|0)==(0);
       if ($407) {
        ___fwritex($$0522$$i,$348,$0);
       }
       $408 = $$1263$ ^ 65536;
       _pad($0,48,$$1260,$404,$408);
       $409 = (($$pre700$i) - ($18))|0;
       $410 = load4($0);
       $411 = $410 & 32;
       $412 = ($411|0)==(0);
       if ($412) {
        ___fwritex($7,$409,$0);
       }
       $413 = (($22) - ($399))|0;
       $sum = (($409) + ($413))|0;
       $414 = (($$0526$i) - ($sum))|0;
       _pad($0,48,$414,0,0);
       $415 = load4($0);
       $416 = $415 & 32;
       $417 = ($416|0)==(0);
       if ($417) {
        ___fwritex($378,$413,$0);
       }
       $418 = $$1263$ ^ 8192;
       _pad($0,32,$$1260,$404,$418);
       $419 = ($404|0)<($$1260|0);
       $$537$i = $419 ? $$1260 : $404;
       $$0470$i = $$537$i;
       break;
      }
      $420 = ($$0254|0)<(0);
      $$538$i = $420 ? 6 : $$0254;
      if ($340) {
       $421 = $339 * 268435456.0;
       $422 = load4($6);
       $423 = (($422) + -28)|0;
       store4($6,$423);
       $$3$i = $421;$$pr$i = $423;
      } else {
       $$pre697$i = load4($6);
       $$3$i = $339;$$pr$i = $$pre697$i;
      }
      $424 = ($$pr$i|0)<(0);
      $$554$i = $424 ? $5 : $26;
      $$0498$i = $$554$i;$$4$i = $$3$i;
      while(1) {
       $425 = (~~(($$4$i))>>>0);
       store4($$0498$i,$425);
       $426 = ((($$0498$i)) + 4|0);
       $427 = (+($425>>>0));
       $428 = $$4$i - $427;
       $429 = $428 * 1.0E+9;
       $430 = $429 != 0.0;
       if ($430) {
        $$0498$i = $426;$$4$i = $429;
       } else {
        break;
       }
      }
      $431 = ($$pr$i|0)>(0);
      if ($431) {
       $$1482671$i = $$554$i;$$1499670$i = $426;$433 = $$pr$i;
       while(1) {
        $432 = ($433|0)>(29);
        $434 = $432 ? 29 : $433;
        $$0488663$i = ((($$1499670$i)) + -4|0);
        $435 = ($$0488663$i>>>0)<($$1482671$i>>>0);
        do {
         if ($435) {
          $$2483$ph$i = $$1482671$i;
         } else {
          $436 = i64_zext($434>>>0);
          $$0488665$i = $$0488663$i;$$0497664$i = 0;
          while(1) {
           $437 = load4($$0488665$i);
           $438 = i64_zext($437>>>0);
           $439 = i64_shl($438,$436);
           $440 = i64_zext($$0497664$i>>>0);
           $441 = i64_add($439,$440);
           $442 = i64_urem($441,i64_const(1000000000,0));
           $443 = i64_trunc($442);
           store4($$0488665$i,$443);
           $444 = i64_udiv($441,i64_const(1000000000,0));
           $445 = i64_trunc($444);
           $$0488$i = ((($$0488665$i)) + -4|0);
           $446 = ($$0488$i>>>0)<($$1482671$i>>>0);
           if ($446) {
            break;
           } else {
            $$0488665$i = $$0488$i;$$0497664$i = $445;
           }
          }
          $447 = ($445|0)==(0);
          if ($447) {
           $$2483$ph$i = $$1482671$i;
           break;
          }
          $448 = ((($$1482671$i)) + -4|0);
          store4($448,$445);
          $$2483$ph$i = $448;
         }
        } while(0);
        $$2500$i = $$1499670$i;
        while(1) {
         $449 = ($$2500$i>>>0)>($$2483$ph$i>>>0);
         if (!($449)) {
          break;
         }
         $450 = ((($$2500$i)) + -4|0);
         $451 = load4($450);
         $452 = ($451|0)==(0);
         if ($452) {
          $$2500$i = $450;
         } else {
          break;
         }
        }
        $453 = load4($6);
        $454 = (($453) - ($434))|0;
        store4($6,$454);
        $455 = ($454|0)>(0);
        if ($455) {
         $$1482671$i = $$2483$ph$i;$$1499670$i = $$2500$i;$433 = $454;
        } else {
         $$1482$lcssa$i = $$2483$ph$i;$$1499$lcssa$i = $$2500$i;$$pr571$i = $454;
         break;
        }
       }
      } else {
       $$1482$lcssa$i = $$554$i;$$1499$lcssa$i = $426;$$pr571$i = $$pr$i;
      }
      $456 = ($$pr571$i|0)<(0);
      if ($456) {
       $457 = (($$538$i) + 25)|0;
       $458 = (($457|0) / 9)&-1;
       $459 = (($458) + 1)|0;
       $460 = ($343|0)==(102);
       $$3484658$i = $$1482$lcssa$i;$$3501657$i = $$1499$lcssa$i;$462 = $$pr571$i;
       while(1) {
        $461 = (0 - ($462))|0;
        $463 = ($461|0)>(9);
        $464 = $463 ? 9 : $461;
        $465 = ($$3484658$i>>>0)<($$3501657$i>>>0);
        do {
         if ($465) {
          $469 = 1 << $464;
          $470 = (($469) + -1)|0;
          $471 = 1000000000 >>> $464;
          $$0487652$i = 0;$$1489651$i = $$3484658$i;
          while(1) {
           $472 = load4($$1489651$i);
           $473 = $472 & $470;
           $474 = $472 >>> $464;
           $475 = (($474) + ($$0487652$i))|0;
           store4($$1489651$i,$475);
           $476 = Math_imul($473, $471)|0;
           $477 = ((($$1489651$i)) + 4|0);
           $478 = ($477>>>0)<($$3501657$i>>>0);
           if ($478) {
            $$0487652$i = $476;$$1489651$i = $477;
           } else {
            break;
           }
          }
          $479 = load4($$3484658$i);
          $480 = ($479|0)==(0);
          $481 = ((($$3484658$i)) + 4|0);
          $$$3484$i = $480 ? $481 : $$3484658$i;
          $482 = ($476|0)==(0);
          if ($482) {
           $$$3484706$i = $$$3484$i;$$4502$i = $$3501657$i;
           break;
          }
          $483 = ((($$3501657$i)) + 4|0);
          store4($$3501657$i,$476);
          $$$3484706$i = $$$3484$i;$$4502$i = $483;
         } else {
          $466 = load4($$3484658$i);
          $467 = ($466|0)==(0);
          $468 = ((($$3484658$i)) + 4|0);
          $$$3484705$i = $467 ? $468 : $$3484658$i;
          $$$3484706$i = $$$3484705$i;$$4502$i = $$3501657$i;
         }
        } while(0);
        $484 = $460 ? $$554$i : $$$3484706$i;
        $485 = $$4502$i;
        $486 = $484;
        $487 = (($485) - ($486))|0;
        $488 = $487 >> 2;
        $489 = ($488|0)>($459|0);
        $490 = (($484) + ($459<<2)|0);
        $$$4502$i = $489 ? $490 : $$4502$i;
        $491 = load4($6);
        $492 = (($491) + ($464))|0;
        store4($6,$492);
        $493 = ($492|0)<(0);
        if ($493) {
         $$3484658$i = $$$3484706$i;$$3501657$i = $$$4502$i;$462 = $492;
        } else {
         $$3484$lcssa$i = $$$3484706$i;$$3501$lcssa$i = $$$4502$i;
         break;
        }
       }
      } else {
       $$3484$lcssa$i = $$1482$lcssa$i;$$3501$lcssa$i = $$1499$lcssa$i;
      }
      $494 = ($$3484$lcssa$i>>>0)<($$3501$lcssa$i>>>0);
      $495 = $$554$i;
      do {
       if ($494) {
        $496 = $$3484$lcssa$i;
        $497 = (($495) - ($496))|0;
        $498 = $497 >> 2;
        $499 = ($498*9)|0;
        $500 = load4($$3484$lcssa$i);
        $501 = ($500>>>0)<(10);
        if ($501) {
         $$1515$i = $499;
         break;
        } else {
         $$0514647$i = $499;$$0531646$i = 10;
        }
        while(1) {
         $502 = ($$0531646$i*10)|0;
         $503 = (($$0514647$i) + 1)|0;
         $504 = ($500>>>0)<($502>>>0);
         if ($504) {
          $$1515$i = $503;
          break;
         } else {
          $$0514647$i = $503;$$0531646$i = $502;
         }
        }
       } else {
        $$1515$i = 0;
       }
      } while(0);
      $505 = ($343|0)!=(102);
      $506 = $505 ? $$1515$i : 0;
      $507 = (($$538$i) - ($506))|0;
      $508 = ($343|0)==(103);
      $509 = ($$538$i|0)!=(0);
      $510 = $509 & $508;
      $$neg$i = $510 << 31 >> 31;
      $511 = (($507) + ($$neg$i))|0;
      $512 = $$3501$lcssa$i;
      $513 = (($512) - ($495))|0;
      $514 = $513 >> 2;
      $515 = ($514*9)|0;
      $516 = (($515) + -9)|0;
      $517 = ($511|0)<($516|0);
      if ($517) {
       $518 = ((($$554$i)) + 4|0);
       $519 = (($511) + 9216)|0;
       $520 = (($519|0) / 9)&-1;
       $521 = (($520) + -1024)|0;
       $522 = (($518) + ($521<<2)|0);
       $523 = (($519|0) % 9)&-1;
       $$0528639$i = (($523) + 1)|0;
       $524 = ($$0528639$i|0)<(9);
       if ($524) {
        $$0528641$i = $$0528639$i;$$1532640$i = 10;
        while(1) {
         $525 = ($$1532640$i*10)|0;
         $$0528$i = (($$0528641$i) + 1)|0;
         $exitcond$i = ($$0528$i|0)==(9);
         if ($exitcond$i) {
          $$1532$lcssa$i = $525;
          break;
         } else {
          $$0528641$i = $$0528$i;$$1532640$i = $525;
         }
        }
       } else {
        $$1532$lcssa$i = 10;
       }
       $526 = load4($522);
       $527 = (($526>>>0) % ($$1532$lcssa$i>>>0))&-1;
       $528 = ($527|0)==(0);
       $529 = ((($522)) + 4|0);
       $530 = ($529|0)==($$3501$lcssa$i|0);
       $or$cond540$i = $530 & $528;
       do {
        if ($or$cond540$i) {
         $$4492$i = $522;$$4518$i = $$1515$i;$$8$i = $$3484$lcssa$i;
        } else {
         $531 = (($526>>>0) / ($$1532$lcssa$i>>>0))&-1;
         $532 = $531 & 1;
         $533 = ($532|0)==(0);
         $$541$i = $533 ? 9007199254740992.0 : 9007199254740994.0;
         $534 = (($$1532$lcssa$i|0) / 2)&-1;
         $535 = ($527>>>0)<($534>>>0);
         if ($535) {
          $$0466$i = 0.5;
         } else {
          $536 = ($527|0)==($534|0);
          $or$cond543$i = $530 & $536;
          $$557$i = $or$cond543$i ? 1.0 : 1.5;
          $$0466$i = $$557$i;
         }
         $537 = ($$0520$i|0)==(0);
         do {
          if ($537) {
           $$1467$i = $$0466$i;$$1469$i = $$541$i;
          } else {
           $538 = load1($$0522$i);
           $539 = ($538<<24>>24)==(45);
           if (!($539)) {
            $$1467$i = $$0466$i;$$1469$i = $$541$i;
            break;
           }
           $540 = -$$541$i;
           $541 = -$$0466$i;
           $$1467$i = $541;$$1469$i = $540;
          }
         } while(0);
         $542 = (($526) - ($527))|0;
         store4($522,$542);
         $543 = $$1469$i + $$1467$i;
         $544 = $543 != $$1469$i;
         if (!($544)) {
          $$4492$i = $522;$$4518$i = $$1515$i;$$8$i = $$3484$lcssa$i;
          break;
         }
         $545 = (($542) + ($$1532$lcssa$i))|0;
         store4($522,$545);
         $546 = ($545>>>0)>(999999999);
         if ($546) {
          $$2490632$i = $522;$$5486633$i = $$3484$lcssa$i;
          while(1) {
           $547 = ((($$2490632$i)) + -4|0);
           store4($$2490632$i,0);
           $548 = ($547>>>0)<($$5486633$i>>>0);
           if ($548) {
            $549 = ((($$5486633$i)) + -4|0);
            store4($549,0);
            $$6$i = $549;
           } else {
            $$6$i = $$5486633$i;
           }
           $550 = load4($547);
           $551 = (($550) + 1)|0;
           store4($547,$551);
           $552 = ($551>>>0)>(999999999);
           if ($552) {
            $$2490632$i = $547;$$5486633$i = $$6$i;
           } else {
            $$2490$lcssa$i = $547;$$5486$lcssa$i = $$6$i;
            break;
           }
          }
         } else {
          $$2490$lcssa$i = $522;$$5486$lcssa$i = $$3484$lcssa$i;
         }
         $553 = $$5486$lcssa$i;
         $554 = (($495) - ($553))|0;
         $555 = $554 >> 2;
         $556 = ($555*9)|0;
         $557 = load4($$5486$lcssa$i);
         $558 = ($557>>>0)<(10);
         if ($558) {
          $$4492$i = $$2490$lcssa$i;$$4518$i = $556;$$8$i = $$5486$lcssa$i;
          break;
         } else {
          $$2516628$i = $556;$$2533627$i = 10;
         }
         while(1) {
          $559 = ($$2533627$i*10)|0;
          $560 = (($$2516628$i) + 1)|0;
          $561 = ($557>>>0)<($559>>>0);
          if ($561) {
           $$4492$i = $$2490$lcssa$i;$$4518$i = $560;$$8$i = $$5486$lcssa$i;
           break;
          } else {
           $$2516628$i = $560;$$2533627$i = $559;
          }
         }
        }
       } while(0);
       $562 = ((($$4492$i)) + 4|0);
       $563 = ($$3501$lcssa$i>>>0)>($562>>>0);
       $$$3501$i = $563 ? $562 : $$3501$lcssa$i;
       $$5519$ph$i = $$4518$i;$$7505$ph$i = $$$3501$i;$$9$ph$i = $$8$i;
      } else {
       $$5519$ph$i = $$1515$i;$$7505$ph$i = $$3501$lcssa$i;$$9$ph$i = $$3484$lcssa$i;
      }
      $564 = (0 - ($$5519$ph$i))|0;
      $$7505$i = $$7505$ph$i;
      while(1) {
       $565 = ($$7505$i>>>0)>($$9$ph$i>>>0);
       if (!($565)) {
        $$lcssa683$i = 0;
        break;
       }
       $566 = ((($$7505$i)) + -4|0);
       $567 = load4($566);
       $568 = ($567|0)==(0);
       if ($568) {
        $$7505$i = $566;
       } else {
        $$lcssa683$i = 1;
        break;
       }
      }
      do {
       if ($508) {
        $569 = $509&1;
        $570 = $569 ^ 1;
        $$538$$i = (($570) + ($$538$i))|0;
        $571 = ($$538$$i|0)>($$5519$ph$i|0);
        $572 = ($$5519$ph$i|0)>(-5);
        $or$cond6$i = $571 & $572;
        if ($or$cond6$i) {
         $573 = (($$0235) + -1)|0;
         $$neg572$i = (($$538$$i) + -1)|0;
         $574 = (($$neg572$i) - ($$5519$ph$i))|0;
         $$0479$i = $573;$$2476$i = $574;
        } else {
         $575 = (($$0235) + -2)|0;
         $576 = (($$538$$i) + -1)|0;
         $$0479$i = $575;$$2476$i = $576;
        }
        $577 = $$1263$ & 8;
        $578 = ($577|0)==(0);
        if (!($578)) {
         $$1480$i = $$0479$i;$$3477$i = $$2476$i;$$pre$phi704$iZ2D = $577;
         break;
        }
        do {
         if ($$lcssa683$i) {
          $579 = ((($$7505$i)) + -4|0);
          $580 = load4($579);
          $581 = ($580|0)==(0);
          if ($581) {
           $$2530$i = 9;
           break;
          }
          $582 = (($580>>>0) % 10)&-1;
          $583 = ($582|0)==(0);
          if ($583) {
           $$1529624$i = 0;$$3534623$i = 10;
          } else {
           $$2530$i = 0;
           break;
          }
          while(1) {
           $584 = ($$3534623$i*10)|0;
           $585 = (($$1529624$i) + 1)|0;
           $586 = (($580>>>0) % ($584>>>0))&-1;
           $587 = ($586|0)==(0);
           if ($587) {
            $$1529624$i = $585;$$3534623$i = $584;
           } else {
            $$2530$i = $585;
            break;
           }
          }
         } else {
          $$2530$i = 9;
         }
        } while(0);
        $588 = $$0479$i | 32;
        $589 = ($588|0)==(102);
        $590 = $$7505$i;
        $591 = (($590) - ($495))|0;
        $592 = $591 >> 2;
        $593 = ($592*9)|0;
        $594 = (($593) + -9)|0;
        if ($589) {
         $595 = (($594) - ($$2530$i))|0;
         $596 = ($595|0)<(0);
         $$544$i = $596 ? 0 : $595;
         $597 = ($$2476$i|0)<($$544$i|0);
         $$2476$$545$i = $597 ? $$2476$i : $$544$i;
         $$1480$i = $$0479$i;$$3477$i = $$2476$$545$i;$$pre$phi704$iZ2D = 0;
         break;
        } else {
         $598 = (($594) + ($$5519$ph$i))|0;
         $599 = (($598) - ($$2530$i))|0;
         $600 = ($599|0)<(0);
         $$546$i = $600 ? 0 : $599;
         $601 = ($$2476$i|0)<($$546$i|0);
         $$2476$$547$i = $601 ? $$2476$i : $$546$i;
         $$1480$i = $$0479$i;$$3477$i = $$2476$$547$i;$$pre$phi704$iZ2D = 0;
         break;
        }
       } else {
        $$pre703$i = $$1263$ & 8;
        $$1480$i = $$0235;$$3477$i = $$538$i;$$pre$phi704$iZ2D = $$pre703$i;
       }
      } while(0);
      $602 = $$3477$i | $$pre$phi704$iZ2D;
      $603 = ($602|0)!=(0);
      $604 = $603&1;
      $605 = $$1480$i | 32;
      $606 = ($605|0)==(102);
      if ($606) {
       $607 = ($$5519$ph$i|0)>(0);
       $608 = $607 ? $$5519$ph$i : 0;
       $$2513$i = 0;$$pn$i = $608;
      } else {
       $609 = ($$5519$ph$i|0)<(0);
       $610 = $609 ? $564 : $$5519$ph$i;
       $611 = i64_sext($610);
       $612 = (_fmt_u($611,$20)|0);
       $613 = $612;
       $614 = (($22) - ($613))|0;
       $615 = ($614|0)<(2);
       if ($615) {
        $$1512617$i = $612;
        while(1) {
         $616 = ((($$1512617$i)) + -1|0);
         store1($616,48);
         $617 = $616;
         $618 = (($22) - ($617))|0;
         $619 = ($618|0)<(2);
         if ($619) {
          $$1512617$i = $616;
         } else {
          $$1512$lcssa$i = $616;
          break;
         }
        }
       } else {
        $$1512$lcssa$i = $612;
       }
       $620 = $$5519$ph$i >> 31;
       $621 = $620 & 2;
       $622 = (($621) + 43)|0;
       $623 = $622&255;
       $624 = ((($$1512$lcssa$i)) + -1|0);
       store1($624,$623);
       $625 = $$1480$i&255;
       $626 = ((($$1512$lcssa$i)) + -2|0);
       store1($626,$625);
       $627 = $626;
       $628 = (($22) - ($627))|0;
       $$2513$i = $626;$$pn$i = $628;
      }
      $629 = (($$0520$i) + 1)|0;
      $630 = (($629) + ($$3477$i))|0;
      $$1527$i = (($630) + ($604))|0;
      $631 = (($$1527$i) + ($$pn$i))|0;
      _pad($0,32,$$1260,$631,$$1263$);
      $632 = load4($0);
      $633 = $632 & 32;
      $634 = ($633|0)==(0);
      if ($634) {
       ___fwritex($$0522$i,$$0520$i,$0);
      }
      $635 = $$1263$ ^ 65536;
      _pad($0,48,$$1260,$631,$635);
      do {
       if ($606) {
        $636 = ($$9$ph$i>>>0)>($$554$i>>>0);
        $$0496$$9$i = $636 ? $$554$i : $$9$ph$i;
        $$5493606$i = $$0496$$9$i;
        while(1) {
         $637 = load4($$5493606$i);
         $638 = i64_zext($637>>>0);
         $639 = (_fmt_u($638,$27)|0);
         $640 = ($$5493606$i|0)==($$0496$$9$i|0);
         do {
          if ($640) {
           $646 = ($639|0)==($27|0);
           if (!($646)) {
            $$1465$i = $639;
            break;
           }
           store1($29,48);
           $$1465$i = $29;
          } else {
           $641 = ($639>>>0)>($7>>>0);
           if (!($641)) {
            $$1465$i = $639;
            break;
           }
           $642 = $639;
           $643 = (($642) - ($18))|0;
           _memset(($7|0),48,($643|0))|0;
           $$0464603$i = $639;
           while(1) {
            $644 = ((($$0464603$i)) + -1|0);
            $645 = ($644>>>0)>($7>>>0);
            if ($645) {
             $$0464603$i = $644;
            } else {
             $$1465$i = $644;
             break;
            }
           }
          }
         } while(0);
         $647 = load4($0);
         $648 = $647 & 32;
         $649 = ($648|0)==(0);
         if ($649) {
          $650 = $$1465$i;
          $651 = (($28) - ($650))|0;
          ___fwritex($$1465$i,$651,$0);
         }
         $652 = ((($$5493606$i)) + 4|0);
         $653 = ($652>>>0)>($$554$i>>>0);
         if ($653) {
          break;
         } else {
          $$5493606$i = $652;
         }
        }
        $654 = ($602|0)==(0);
        do {
         if (!($654)) {
          $655 = load4($0);
          $656 = $655 & 32;
          $657 = ($656|0)==(0);
          if (!($657)) {
           break;
          }
          ___fwritex(8681,1,$0);
         }
        } while(0);
        $658 = ($652>>>0)<($$7505$i>>>0);
        $659 = ($$3477$i|0)>(0);
        $660 = $659 & $658;
        if ($660) {
         $$4478600$i = $$3477$i;$$6494599$i = $652;
         while(1) {
          $661 = load4($$6494599$i);
          $662 = i64_zext($661>>>0);
          $663 = (_fmt_u($662,$27)|0);
          $664 = ($663>>>0)>($7>>>0);
          if ($664) {
           $665 = $663;
           $666 = (($665) - ($18))|0;
           _memset(($7|0),48,($666|0))|0;
           $$0463594$i = $663;
           while(1) {
            $667 = ((($$0463594$i)) + -1|0);
            $668 = ($667>>>0)>($7>>>0);
            if ($668) {
             $$0463594$i = $667;
            } else {
             $$0463$lcssa$i = $667;
             break;
            }
           }
          } else {
           $$0463$lcssa$i = $663;
          }
          $669 = load4($0);
          $670 = $669 & 32;
          $671 = ($670|0)==(0);
          if ($671) {
           $672 = ($$4478600$i|0)>(9);
           $673 = $672 ? 9 : $$4478600$i;
           ___fwritex($$0463$lcssa$i,$673,$0);
          }
          $674 = ((($$6494599$i)) + 4|0);
          $675 = (($$4478600$i) + -9)|0;
          $676 = ($674>>>0)<($$7505$i>>>0);
          $677 = ($$4478600$i|0)>(9);
          $678 = $677 & $676;
          if ($678) {
           $$4478600$i = $675;$$6494599$i = $674;
          } else {
           $$4478$lcssa$i = $675;
           break;
          }
         }
        } else {
         $$4478$lcssa$i = $$3477$i;
        }
        $679 = (($$4478$lcssa$i) + 9)|0;
        _pad($0,48,$679,9,0);
       } else {
        $680 = ((($$9$ph$i)) + 4|0);
        $$7505$$i = $$lcssa683$i ? $$7505$i : $680;
        $681 = ($$3477$i|0)>(-1);
        if ($681) {
         $682 = ($$pre$phi704$iZ2D|0)==(0);
         $$5611$i = $$3477$i;$$7495610$i = $$9$ph$i;
         while(1) {
          $683 = load4($$7495610$i);
          $684 = i64_zext($683>>>0);
          $685 = (_fmt_u($684,$27)|0);
          $686 = ($685|0)==($27|0);
          if ($686) {
           store1($29,48);
           $$0$i = $29;
          } else {
           $$0$i = $685;
          }
          $687 = ($$7495610$i|0)==($$9$ph$i|0);
          do {
           if ($687) {
            $691 = ((($$0$i)) + 1|0);
            $692 = load4($0);
            $693 = $692 & 32;
            $694 = ($693|0)==(0);
            if ($694) {
             ___fwritex($$0$i,1,$0);
            }
            $695 = ($$5611$i|0)<(1);
            $or$cond552$i = $682 & $695;
            if ($or$cond552$i) {
             $$2$i = $691;
             break;
            }
            $696 = load4($0);
            $697 = $696 & 32;
            $698 = ($697|0)==(0);
            if (!($698)) {
             $$2$i = $691;
             break;
            }
            ___fwritex(8681,1,$0);
            $$2$i = $691;
           } else {
            $688 = ($$0$i>>>0)>($7>>>0);
            if (!($688)) {
             $$2$i = $$0$i;
             break;
            }
            $scevgep694$i = (($$0$i) + ($19)|0);
            $scevgep694695$i = $scevgep694$i;
            _memset(($7|0),48,($scevgep694695$i|0))|0;
            $$1607$i = $$0$i;
            while(1) {
             $689 = ((($$1607$i)) + -1|0);
             $690 = ($689>>>0)>($7>>>0);
             if ($690) {
              $$1607$i = $689;
             } else {
              $$2$i = $689;
              break;
             }
            }
           }
          } while(0);
          $699 = $$2$i;
          $700 = (($28) - ($699))|0;
          $701 = load4($0);
          $702 = $701 & 32;
          $703 = ($702|0)==(0);
          if ($703) {
           $704 = ($$5611$i|0)>($700|0);
           $705 = $704 ? $700 : $$5611$i;
           ___fwritex($$2$i,$705,$0);
          }
          $706 = (($$5611$i) - ($700))|0;
          $707 = ((($$7495610$i)) + 4|0);
          $708 = ($707>>>0)<($$7505$$i>>>0);
          $709 = ($706|0)>(-1);
          $710 = $708 & $709;
          if ($710) {
           $$5611$i = $706;$$7495610$i = $707;
          } else {
           $$5$lcssa$i = $706;
           break;
          }
         }
        } else {
         $$5$lcssa$i = $$3477$i;
        }
        $711 = (($$5$lcssa$i) + 18)|0;
        _pad($0,48,$711,18,0);
        $712 = load4($0);
        $713 = $712 & 32;
        $714 = ($713|0)==(0);
        if (!($714)) {
         break;
        }
        $715 = $$2513$i;
        $716 = (($22) - ($715))|0;
        ___fwritex($$2513$i,$716,$0);
       }
      } while(0);
      $717 = $$1263$ ^ 8192;
      _pad($0,32,$$1260,$631,$717);
      $718 = ($631|0)<($$1260|0);
      $$553$i = $718 ? $$1260 : $631;
      $$0470$i = $$553$i;
     } else {
      $323 = $$0235 & 32;
      $324 = ($323|0)!=(0);
      $325 = $324 ? 5722 : 5726;
      $326 = ($$0471$i != $$0471$i) | (0.0 != 0.0);
      $327 = $324 ? 7626 : 5730;
      $$1521$i = $326 ? 0 : $$0520$i;
      $$0510$i = $326 ? $327 : $325;
      $328 = (($$1521$i) + 3)|0;
      _pad($0,32,$$1260,$328,$165);
      $329 = load4($0);
      $330 = $329 & 32;
      $331 = ($330|0)==(0);
      if ($331) {
       ___fwritex($$0522$i,$$1521$i,$0);
       $$pre$i = load4($0);
       $333 = $$pre$i;
      } else {
       $333 = $329;
      }
      $332 = $333 & 32;
      $334 = ($332|0)==(0);
      if ($334) {
       ___fwritex($$0510$i,3,$0);
      }
      $335 = $$1263$ ^ 8192;
      _pad($0,32,$$1260,$328,$335);
      $336 = ($328|0)<($$1260|0);
      $337 = $336 ? $$1260 : $328;
      $$0470$i = $337;
     }
    } while(0);
    $$0243 = $$0470$i;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
    continue L1;
    break;
   }
   default: {
    $$2 = $$0321;$$2234 = 0;$$2239 = 5686;$$2251 = $14;$$5 = $$0254;$$6268 = $$1263$;
   }
   }
  } while(0);
  L320: do {
   if ((label|0) == 63) {
    label = 0;
    $180 = load8($9);
    $181 = $$1236 & 32;
    $182 = i64_eq($180,i64_const(0,0));
    if ($182) {
     $$05$lcssa$i = $14;$193 = i64_const(0,0);
    } else {
     $$056$i = $14;$$07$i = $180;
     while(1) {
      $$0$tr$i = i64_trunc($$07$i);
      $183 = $$0$tr$i & 15;
      $184 = (5670 + ($183)|0);
      $185 = load1($184);
      $186 = $185&255;
      $187 = $186 | $181;
      $188 = $187&255;
      $189 = ((($$056$i)) + -1|0);
      store1($189,$188);
      $190 = i64_lshr($$07$i,i64_const(4,0));
      $191 = i64_eq($190,i64_const(0,0));
      if ($191) {
       break;
      } else {
       $$056$i = $189;$$07$i = $190;
      }
     }
     $$pre457 = load8($9);
     $$05$lcssa$i = $189;$193 = $$pre457;
    }
    $192 = i64_eq($193,i64_const(0,0));
    $194 = $$3265 & 8;
    $195 = ($194|0)==(0);
    $or$cond282 = $195 | $192;
    $196 = $$1236 >> 4;
    $197 = (5686 + ($196)|0);
    $$332 = $or$cond282 ? 5686 : $197;
    $$333 = $or$cond282 ? 0 : 2;
    $$0228 = $$05$lcssa$i;$$1233 = $$333;$$1238 = $$332;$$2256 = $$1255;$$4266 = $$3265;
    label = 76;
   }
   else if ((label|0) == 75) {
    label = 0;
    $220 = (_fmt_u($219,$14)|0);
    $$0228 = $220;$$1233 = $$0232;$$1238 = $$0237;$$2256 = $$0254;$$4266 = $$1263$;
    label = 76;
   }
   else if ((label|0) == 87) {
    label = 0;
    $250 = $$1;
    $251 = $250 & 3;
    $252 = ($251|0)!=(0);
    $253 = ($$0254|0)!=(0);
    $or$cond53$i = $253 & $252;
    L329: do {
     if ($or$cond53$i) {
      $$03555$i = $$1;$$03654$i = $$0254;
      while(1) {
       $254 = load1($$03555$i);
       $255 = ($254<<24>>24)==(0);
       if ($255) {
        $$2$i7 = $$03555$i;$$3$i6 = $$03654$i;
        break L329;
       }
       $256 = ((($$03555$i)) + 1|0);
       $257 = (($$03654$i) + -1)|0;
       $258 = $256;
       $259 = $258 & 3;
       $260 = ($259|0)!=(0);
       $261 = ($257|0)!=(0);
       $or$cond$i2 = $261 & $260;
       if ($or$cond$i2) {
        $$03555$i = $256;$$03654$i = $257;
       } else {
        $$035$lcssa$i = $256;$$036$lcssa$i = $257;$$lcssa$i = $261;
        label = 90;
        break;
       }
      }
     } else {
      $$035$lcssa$i = $$1;$$036$lcssa$i = $$0254;$$lcssa$i = $253;
      label = 90;
     }
    } while(0);
    L333: do {
     if ((label|0) == 90) {
      label = 0;
      if ($$lcssa$i) {
       $$pre$i4 = load1($$035$lcssa$i);
       $262 = ($$pre$i4<<24>>24)==(0);
       if ($262) {
        $$2$i7 = $$035$lcssa$i;$$3$i6 = $$036$lcssa$i;
       } else {
        $263 = ($$036$lcssa$i>>>0)>(3);
        L337: do {
         if ($263) {
          $$046$i = $$035$lcssa$i;$$13745$i = $$036$lcssa$i;
          while(1) {
           $264 = load4($$046$i);
           $265 = (($264) + -16843009)|0;
           $266 = $264 & -2139062144;
           $267 = $266 ^ -2139062144;
           $268 = $267 & $265;
           $269 = ($268|0)==(0);
           if (!($269)) {
            break;
           }
           $270 = ((($$046$i)) + 4|0);
           $271 = (($$13745$i) + -4)|0;
           $272 = ($271>>>0)>(3);
           if ($272) {
            $$046$i = $270;$$13745$i = $271;
           } else {
            $$0$lcssa$i = $270;$$137$lcssa$i = $271;
            label = 96;
            break L337;
           }
          }
          $$140$i = $$046$i;$$23839$i = $$13745$i;
         } else {
          $$0$lcssa$i = $$035$lcssa$i;$$137$lcssa$i = $$036$lcssa$i;
          label = 96;
         }
        } while(0);
        if ((label|0) == 96) {
         label = 0;
         $273 = ($$137$lcssa$i|0)==(0);
         if ($273) {
          $$2$i7 = $$0$lcssa$i;$$3$i6 = 0;
          break;
         } else {
          $$140$i = $$0$lcssa$i;$$23839$i = $$137$lcssa$i;
         }
        }
        while(1) {
         $274 = load1($$140$i);
         $275 = ($274<<24>>24)==(0);
         if ($275) {
          $$2$i7 = $$140$i;$$3$i6 = $$23839$i;
          break L333;
         }
         $276 = ((($$140$i)) + 1|0);
         $277 = (($$23839$i) + -1)|0;
         $278 = ($277|0)==(0);
         if ($278) {
          $$2$i7 = $276;$$3$i6 = 0;
          break;
         } else {
          $$140$i = $276;$$23839$i = $277;
         }
        }
       }
      } else {
       $$2$i7 = $$035$lcssa$i;$$3$i6 = 0;
      }
     }
    } while(0);
    $279 = ($$3$i6|0)!=(0);
    $280 = $279 ? $$2$i7 : 0;
    $281 = ($280|0)==(0|0);
    $282 = $280;
    $283 = (($282) - ($250))|0;
    $284 = (($$1) + ($$0254)|0);
    $$3257 = $281 ? $$0254 : $283;
    $$1250 = $281 ? $284 : $280;
    $$2 = $$1;$$2234 = 0;$$2239 = 5686;$$2251 = $$1250;$$5 = $$3257;$$6268 = $165;
   }
   else if ((label|0) == 103) {
    label = 0;
    $$0229396 = $744;$$0240395 = 0;$$1244394 = 0;
    while(1) {
     $288 = load4($$0229396);
     $289 = ($288|0)==(0);
     if ($289) {
      $$0240$lcssa = $$0240395;$$2245 = $$1244394;
      break;
     }
     $290 = (_wcrtomb($12,$288)|0);
     $291 = ($290|0)<(0);
     $292 = (($$4258458) - ($$0240395))|0;
     $293 = ($290>>>0)>($292>>>0);
     $or$cond285 = $291 | $293;
     if ($or$cond285) {
      $$0240$lcssa = $$0240395;$$2245 = $290;
      break;
     }
     $294 = ((($$0229396)) + 4|0);
     $295 = (($290) + ($$0240395))|0;
     $296 = ($$4258458>>>0)>($295>>>0);
     if ($296) {
      $$0229396 = $294;$$0240395 = $295;$$1244394 = $290;
     } else {
      $$0240$lcssa = $295;$$2245 = $290;
      break;
     }
    }
    $297 = ($$2245|0)<(0);
    if ($297) {
     $$0 = -1;
     break L1;
    }
    _pad($0,32,$$1260,$$0240$lcssa,$$1263$);
    $298 = ($$0240$lcssa|0)==(0);
    if ($298) {
     $$0240$lcssa460 = 0;
     label = 114;
    } else {
     $$1230407 = $744;$$1241406 = 0;
     while(1) {
      $299 = load4($$1230407);
      $300 = ($299|0)==(0);
      if ($300) {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 114;
       break L320;
      }
      $301 = ((($$1230407)) + 4|0);
      $302 = (_wcrtomb($12,$299)|0);
      $303 = (($302) + ($$1241406))|0;
      $304 = ($303|0)>($$0240$lcssa|0);
      if ($304) {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 114;
       break L320;
      }
      $305 = load4($0);
      $306 = $305 & 32;
      $307 = ($306|0)==(0);
      if ($307) {
       ___fwritex($12,$302,$0);
      }
      $308 = ($303>>>0)<($$0240$lcssa>>>0);
      if ($308) {
       $$1230407 = $301;$$1241406 = $303;
      } else {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 114;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 114) {
   label = 0;
   $309 = $$1263$ ^ 8192;
   _pad($0,32,$$1260,$$0240$lcssa460,$309);
   $310 = ($$1260|0)>($$0240$lcssa460|0);
   $311 = $310 ? $$1260 : $$0240$lcssa460;
   $$0243 = $311;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
   continue;
  }
  if ((label|0) == 76) {
   label = 0;
   $221 = ($$2256|0)>(-1);
   $222 = $$4266 & -65537;
   $$$4266 = $221 ? $222 : $$4266;
   $223 = load8($9);
   $224 = i64_ne($223,i64_const(0,0));
   $225 = ($$2256|0)!=(0);
   $or$cond = $225 | $224;
   if ($or$cond) {
    $226 = $$0228;
    $227 = (($15) - ($226))|0;
    $228 = $224&1;
    $229 = $228 ^ 1;
    $230 = (($229) + ($227))|0;
    $231 = ($$2256|0)>($230|0);
    $$2256$ = $231 ? $$2256 : $230;
    $$2 = $$0228;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $14;$$5 = $$2256$;$$6268 = $$$4266;
   } else {
    $$2 = $14;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $14;$$5 = 0;$$6268 = $$$4266;
   }
  }
  $719 = $$2251;
  $720 = $$2;
  $721 = (($719) - ($720))|0;
  $722 = ($$5|0)<($721|0);
  $$$5 = $722 ? $721 : $$5;
  $723 = (($$$5) + ($$2234))|0;
  $724 = ($$1260|0)<($723|0);
  $$2261 = $724 ? $723 : $$1260;
  _pad($0,32,$$2261,$723,$$6268);
  $725 = load4($0);
  $726 = $725 & 32;
  $727 = ($726|0)==(0);
  if ($727) {
   ___fwritex($$2239,$$2234,$0);
  }
  $728 = $$6268 ^ 65536;
  _pad($0,48,$$2261,$723,$728);
  _pad($0,48,$$$5,$721,0);
  $729 = load4($0);
  $730 = $729 & 32;
  $731 = ($730|0)==(0);
  if ($731) {
   ___fwritex($$2,$721,$0);
  }
  $732 = $$6268 ^ 8192;
  _pad($0,32,$$2261,$723,$732);
  $$0243 = $$2261;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $145;
 }
 L374: do {
  if ((label|0) == 261) {
   $733 = ($0|0)==(0|0);
   if ($733) {
    $734 = ($$0269|0)==(0);
    if ($734) {
     $$0 = 0;
    } else {
     $$2242381 = 1;
     while(1) {
      $735 = (($4) + ($$2242381<<2)|0);
      $736 = load4($735);
      $737 = ($736|0)==(0);
      if ($737) {
       $$in = $$2242381;
       break;
      }
      $738 = (($3) + ($$2242381<<3)|0);
      _pop_arg($738,$736,$2);
      $739 = (($$2242381) + 1)|0;
      $740 = ($739|0)<(10);
      if ($740) {
       $$2242381 = $739;
      } else {
       $$0 = 1;
       break L374;
      }
     }
     while(1) {
      $741 = (($$in) + 1)|0;
      $742 = ($741|0)<(10);
      if (!($742)) {
       $$0 = 1;
       break L374;
      }
      $$phi$trans$insert = (($4) + ($741<<2)|0);
      $$pre86 = load4($$phi$trans$insert);
      $743 = ($$pre86|0)==(0);
      if ($743) {
       $$in = $741;
      } else {
       $$0 = -1;
       break;
      }
     }
    }
   } else {
    $$0 = $$1248;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function ___fwritex($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$033 = 0, $$034 = 0, $$pre = 0, $$pre38 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($2)) + 16|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  $7 = (___towrite($2)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   $$pre = load4($3);
   $12 = $$pre;
   label = 5;
  }
 } else {
  $6 = $4;
  $12 = $6;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $9 = ((($2)) + 20|0);
   $10 = load4($9);
   $11 = (($12) - ($10))|0;
   $13 = ($11>>>0)<($1>>>0);
   $14 = $10;
   if ($13) {
    $15 = ((($2)) + 36|0);
    $16 = load4($15);
    (FUNCTION_TABLE_iiii[$16 & 31]($2,$0,$1)|0);
    break;
   }
   $17 = ((($2)) + 75|0);
   $18 = load1($17);
   $19 = ($18<<24>>24)>(-1);
   L10: do {
    if ($19) {
     $$0 = $1;
     while(1) {
      $20 = ($$0|0)==(0);
      if ($20) {
       $$033 = $1;$$034 = $0;$31 = $14;
       break L10;
      }
      $21 = (($$0) + -1)|0;
      $22 = (($0) + ($21)|0);
      $23 = load1($22);
      $24 = ($23<<24>>24)==(10);
      if ($24) {
       break;
      } else {
       $$0 = $21;
      }
     }
     $25 = ((($2)) + 36|0);
     $26 = load4($25);
     $27 = (FUNCTION_TABLE_iiii[$26 & 31]($2,$0,$$0)|0);
     $28 = ($27>>>0)<($$0>>>0);
     if ($28) {
      break L5;
     }
     $29 = (($0) + ($$0)|0);
     $30 = (($1) - ($$0))|0;
     $$pre38 = load4($9);
     $$033 = $30;$$034 = $29;$31 = $$pre38;
    } else {
     $$033 = $1;$$034 = $0;$31 = $14;
    }
   } while(0);
   _memcpy(($31|0),($$034|0),($$033|0))|0;
   $32 = load4($9);
   $33 = (($32) + ($$033)|0);
   store4($9,$33);
  }
 } while(0);
 return;
}
function _pop_arg($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$mask = 0, $$mask31 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = i64(), $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = i64(), $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = i64(), $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = i64(), $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = i64(), $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = i64();
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = i64(), $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0.0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0.0, $7 = 0, $8 = 0;
 var $9 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0;
 var $arglist_next9 = 0, $expanded = 0, $expanded28 = 0, $expanded29 = 0, $expanded30 = 0, $expanded31 = 0, $expanded32 = 0, $expanded33 = 0, $expanded34 = 0, $expanded35 = 0, $expanded36 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded40 = 0, $expanded41 = 0, $expanded42 = 0, $expanded43 = 0, $expanded44 = 0, $expanded45 = 0;
 var $expanded46 = 0, $expanded47 = 0, $expanded48 = 0, $expanded49 = 0, $expanded50 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded54 = 0, $expanded55 = 0, $expanded56 = 0, $expanded57 = 0, $expanded58 = 0, $expanded59 = 0, $expanded60 = 0, $expanded61 = 0, $expanded62 = 0, $expanded63 = 0, $expanded64 = 0, $expanded65 = 0;
 var $expanded66 = 0, $expanded67 = 0, $expanded68 = 0, $expanded69 = 0, $expanded70 = 0, $expanded71 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded75 = 0, $expanded76 = 0, $expanded77 = 0, $expanded78 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded82 = 0, $expanded83 = 0, $expanded84 = 0, $expanded85 = 0;
 var $expanded86 = 0, $expanded87 = 0, $expanded88 = 0, $expanded89 = 0, $expanded90 = 0, $expanded91 = 0, $expanded92 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, $expanded96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1>>>0)>(20);
 L1: do {
  if (!($3)) {
   do {
    switch ($1|0) {
    case 9:  {
     $arglist_current = load4($2);
     $4 = $arglist_current;
     $expanded29 = ((0) + 4|0);
     $expanded28 = $expanded29;
     $expanded = (($expanded28) - 1)|0;
     $5 = (($4) + ($expanded))|0;
     $expanded33 = ((0) + 4|0);
     $expanded32 = $expanded33;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $6 = $5 & $expanded30;
     $7 = $6;
     $8 = load4($7);
     $arglist_next = ((($7)) + 4|0);
     store4($2,$arglist_next);
     store4($0,$8);
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = load4($2);
     $9 = $arglist_current2;
     $expanded36 = ((0) + 4|0);
     $expanded35 = $expanded36;
     $expanded34 = (($expanded35) - 1)|0;
     $10 = (($9) + ($expanded34))|0;
     $expanded40 = ((0) + 4|0);
     $expanded39 = $expanded40;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $11 = $10 & $expanded37;
     $12 = $11;
     $13 = load4($12);
     $arglist_next3 = ((($12)) + 4|0);
     store4($2,$arglist_next3);
     $14 = i64_sext($13);
     store8($0,$14);
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = load4($2);
     $15 = $arglist_current5;
     $expanded43 = ((0) + 4|0);
     $expanded42 = $expanded43;
     $expanded41 = (($expanded42) - 1)|0;
     $16 = (($15) + ($expanded41))|0;
     $expanded47 = ((0) + 4|0);
     $expanded46 = $expanded47;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $17 = $16 & $expanded44;
     $18 = $17;
     $19 = load4($18);
     $arglist_next6 = ((($18)) + 4|0);
     store4($2,$arglist_next6);
     $20 = i64_zext($19>>>0);
     store8($0,$20);
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = load4($2);
     $21 = $arglist_current8;
     $expanded50 = ((0) + 8|0);
     $expanded49 = $expanded50;
     $expanded48 = (($expanded49) - 1)|0;
     $22 = (($21) + ($expanded48))|0;
     $expanded54 = ((0) + 8|0);
     $expanded53 = $expanded54;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $23 = $22 & $expanded51;
     $24 = $23;
     $25 = load8($24);
     $arglist_next9 = ((($24)) + 8|0);
     store4($2,$arglist_next9);
     store8($0,$25);
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = load4($2);
     $26 = $arglist_current11;
     $expanded57 = ((0) + 4|0);
     $expanded56 = $expanded57;
     $expanded55 = (($expanded56) - 1)|0;
     $27 = (($26) + ($expanded55))|0;
     $expanded61 = ((0) + 4|0);
     $expanded60 = $expanded61;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $28 = $27 & $expanded58;
     $29 = $28;
     $30 = load4($29);
     $arglist_next12 = ((($29)) + 4|0);
     store4($2,$arglist_next12);
     $31 = $30&65535;
     $32 = i64_sext($31 << 16 >> 16);
     store8($0,$32);
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = load4($2);
     $33 = $arglist_current14;
     $expanded64 = ((0) + 4|0);
     $expanded63 = $expanded64;
     $expanded62 = (($expanded63) - 1)|0;
     $34 = (($33) + ($expanded62))|0;
     $expanded68 = ((0) + 4|0);
     $expanded67 = $expanded68;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $35 = $34 & $expanded65;
     $36 = $35;
     $37 = load4($36);
     $arglist_next15 = ((($36)) + 4|0);
     store4($2,$arglist_next15);
     $$mask31 = $37 & 65535;
     $38 = i64_zext($$mask31>>>0);
     store8($0,$38);
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = load4($2);
     $39 = $arglist_current17;
     $expanded71 = ((0) + 4|0);
     $expanded70 = $expanded71;
     $expanded69 = (($expanded70) - 1)|0;
     $40 = (($39) + ($expanded69))|0;
     $expanded75 = ((0) + 4|0);
     $expanded74 = $expanded75;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $41 = $40 & $expanded72;
     $42 = $41;
     $43 = load4($42);
     $arglist_next18 = ((($42)) + 4|0);
     store4($2,$arglist_next18);
     $44 = $43&255;
     $45 = i64_sext($44 << 24 >> 24);
     store8($0,$45);
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = load4($2);
     $46 = $arglist_current20;
     $expanded78 = ((0) + 4|0);
     $expanded77 = $expanded78;
     $expanded76 = (($expanded77) - 1)|0;
     $47 = (($46) + ($expanded76))|0;
     $expanded82 = ((0) + 4|0);
     $expanded81 = $expanded82;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $48 = $47 & $expanded79;
     $49 = $48;
     $50 = load4($49);
     $arglist_next21 = ((($49)) + 4|0);
     store4($2,$arglist_next21);
     $$mask = $50 & 255;
     $51 = i64_zext($$mask>>>0);
     store8($0,$51);
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = load4($2);
     $52 = $arglist_current23;
     $expanded85 = ((0) + 8|0);
     $expanded84 = $expanded85;
     $expanded83 = (($expanded84) - 1)|0;
     $53 = (($52) + ($expanded83))|0;
     $expanded89 = ((0) + 8|0);
     $expanded88 = $expanded89;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $54 = $53 & $expanded86;
     $55 = $54;
     $56 = loadd($55);
     $arglist_next24 = ((($55)) + 8|0);
     store4($2,$arglist_next24);
     stored($0,$56);
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = load4($2);
     $57 = $arglist_current26;
     $expanded92 = ((0) + 8|0);
     $expanded91 = $expanded92;
     $expanded90 = (($expanded91) - 1)|0;
     $58 = (($57) + ($expanded90))|0;
     $expanded96 = ((0) + 8|0);
     $expanded95 = $expanded96;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $59 = $58 & $expanded93;
     $60 = $59;
     $61 = loadd($60);
     $arglist_next27 = ((($60)) + 8|0);
     store4($2,$arglist_next27);
     stored($0,$61);
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
function _fmt_u($0,$1) {
 $0 = i64($0);
 $1 = $1|0;
 var $$010$lcssa$off0 = 0, $$01013 = i64(), $$012 = 0, $$09$lcssa = 0, $$0914 = 0, $$1$lcssa = 0, $$111 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = i64(), $4 = i64(), $5 = 0, $6 = 0, $7 = i64(), $8 = 0;
 var $9 = 0, $extract$t = 0, $extract$t20 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = i64_ugt($0,i64_const(4294967295,0));
 $extract$t = i64_trunc($0);
 if ($2) {
  $$01013 = $0;$$0914 = $1;
  while(1) {
   $3 = i64_urem($$01013,i64_const(10,0));
   $4 = i64_or($3,i64_const(48,0));
   $5 = i64_trunc($4)&255;
   $6 = ((($$0914)) + -1|0);
   store1($6,$5);
   $7 = i64_udiv($$01013,i64_const(10,0));
   $8 = i64_ugt($$01013,i64_const(4294967295,9));
   if ($8) {
    $$01013 = $7;$$0914 = $6;
   } else {
    break;
   }
  }
  $extract$t20 = i64_trunc($7);
  $$010$lcssa$off0 = $extract$t20;$$09$lcssa = $6;
 } else {
  $$010$lcssa$off0 = $extract$t;$$09$lcssa = $1;
 }
 $9 = ($$010$lcssa$off0|0)==(0);
 if ($9) {
  $$1$lcssa = $$09$lcssa;
 } else {
  $$012 = $$010$lcssa$off0;$$111 = $$09$lcssa;
  while(1) {
   $10 = (($$012>>>0) % 10)&-1;
   $11 = $10 | 48;
   $12 = $11&255;
   $13 = ((($$111)) + -1|0);
   store1($13,$12);
   $14 = (($$012>>>0) / 10)&-1;
   $15 = ($$012>>>0)<(10);
   if ($15) {
    $$1$lcssa = $13;
    break;
   } else {
    $$012 = $14;$$111 = $13;
   }
  }
 }
 return ($$1$lcssa|0);
}
function _pad($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0$lcssa16 = 0, $$012 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $5 = sp;
 $6 = $4 & 73728;
 $7 = ($6|0)==(0);
 $8 = ($2|0)>($3|0);
 $or$cond = $8 & $7;
 do {
  if ($or$cond) {
   $9 = (($2) - ($3))|0;
   $10 = ($9>>>0)>(256);
   $11 = $10 ? 256 : $9;
   _memset(($5|0),($1|0),($11|0))|0;
   $12 = ($9>>>0)>(255);
   $13 = load4($0);
   $14 = $13 & 32;
   $15 = ($14|0)==(0);
   if ($12) {
    $$012 = $9;$22 = $13;$23 = $15;
    while(1) {
     if ($23) {
      ___fwritex($5,256,$0);
      $$pre = load4($0);
      $19 = $$pre;
     } else {
      $19 = $22;
     }
     $16 = (($$012) + -256)|0;
     $17 = ($16>>>0)>(255);
     $18 = $19 & 32;
     $20 = ($18|0)==(0);
     if ($17) {
      $$012 = $16;$22 = $19;$23 = $20;
     } else {
      break;
     }
    }
    $21 = $9 & 255;
    if ($20) {
     $$0$lcssa16 = $21;
    } else {
     break;
    }
   } else {
    if ($15) {
     $$0$lcssa16 = $9;
    } else {
     break;
    }
   }
   ___fwritex($5,$$0$lcssa16,$0);
  }
 } while(0);
 STACKTOP = sp;return;
}
function _frexp($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $$0 = 0.0, $$016 = 0.0, $$tr = 0, $10 = 0, $11 = i64(), $12 = i64(), $13 = 0.0, $2 = i64(), $3 = i64(), $4 = 0, $5 = 0.0, $6 = 0.0, $7 = 0, $8 = 0, $9 = 0, $storemerge = 0, $trunc = 0, $trunc$clear = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = i64_bc2i($0);
 $3 = i64_lshr($2,i64_const(52,0));
 $trunc = i64_trunc($3)&65535;
 $trunc$clear = $trunc & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $4 = $0 != 0.0;
  if ($4) {
   $5 = $0 * 1.8446744073709552E+19;
   $6 = (+_frexp($5,$1));
   $7 = load4($1);
   $8 = (($7) + -64)|0;
   $$016 = $6;$storemerge = $8;
  } else {
   $$016 = $0;$storemerge = 0;
  }
  store4($1,$storemerge);
  $$0 = $$016;
  break;
 }
 case 2047:  {
  $$0 = $0;
  break;
 }
 default: {
  $$tr = i64_trunc($3);
  $9 = $$tr & 2047;
  $10 = (($9) + -1022)|0;
  store4($1,$10);
  $11 = i64_and($2,i64_const(4294967295,2148532223));
  $12 = i64_or($11,i64_const(0,1071644672));
  $13 = i64_bc2d($12);
  $$0 = $13;
 }
 }
 return (+$$0);
}
function _wcrtomb($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0|0)==(0|0);
 do {
  if ($2) {
   $$0 = 1;
  } else {
   $3 = ($1>>>0)<(128);
   if ($3) {
    $4 = $1&255;
    store1($0,$4);
    $$0 = 1;
    break;
   }
   $5 = ($1>>>0)<(2048);
   if ($5) {
    $6 = $1 >>> 6;
    $7 = $6 | 192;
    $8 = $7&255;
    $9 = ((($0)) + 1|0);
    store1($0,$8);
    $10 = $1 & 63;
    $11 = $10 | 128;
    $12 = $11&255;
    store1($9,$12);
    $$0 = 2;
    break;
   }
   $13 = ($1>>>0)<(55296);
   $14 = $1 & -8192;
   $15 = ($14|0)==(57344);
   $or$cond = $13 | $15;
   if ($or$cond) {
    $16 = $1 >>> 12;
    $17 = $16 | 224;
    $18 = $17&255;
    $19 = ((($0)) + 1|0);
    store1($0,$18);
    $20 = $1 >>> 6;
    $21 = $20 & 63;
    $22 = $21 | 128;
    $23 = $22&255;
    $24 = ((($0)) + 2|0);
    store1($19,$23);
    $25 = $1 & 63;
    $26 = $25 | 128;
    $27 = $26&255;
    store1($24,$27);
    $$0 = 3;
    break;
   }
   $28 = (($1) + -65536)|0;
   $29 = ($28>>>0)<(1048576);
   if ($29) {
    $30 = $1 >>> 18;
    $31 = $30 | 240;
    $32 = $31&255;
    $33 = ((($0)) + 1|0);
    store1($0,$32);
    $34 = $1 >>> 12;
    $35 = $34 & 63;
    $36 = $35 | 128;
    $37 = $36&255;
    $38 = ((($0)) + 2|0);
    store1($33,$37);
    $39 = $1 >>> 6;
    $40 = $39 & 63;
    $41 = $40 | 128;
    $42 = $41&255;
    $43 = ((($0)) + 3|0);
    store1($38,$42);
    $44 = $1 & 63;
    $45 = $44 | 128;
    $46 = $45&255;
    store1($43,$46);
    $$0 = 4;
    break;
   } else {
    store4(8788,84);
    $$0 = -1;
    break;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___towrite($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 74|0);
 $2 = load1($1);
 $3 = $2 << 24 >> 24;
 $4 = (($3) + 255)|0;
 $5 = $4 | $3;
 $6 = $5&255;
 store1($1,$6);
 $7 = load4($0);
 $8 = $7 & 8;
 $9 = ($8|0)==(0);
 if ($9) {
  $11 = ((($0)) + 8|0);
  store4($11,0);
  $12 = ((($0)) + 4|0);
  store4($12,0);
  $13 = ((($0)) + 44|0);
  $14 = load4($13);
  $15 = ((($0)) + 28|0);
  store4($15,$14);
  $16 = ((($0)) + 20|0);
  store4($16,$14);
  $17 = $14;
  $18 = ((($0)) + 48|0);
  $19 = load4($18);
  $20 = (($17) + ($19)|0);
  $21 = ((($0)) + 16|0);
  store4($21,$20);
  $$0 = 0;
 } else {
  $10 = $7 | 32;
  store4($0,$10);
  $$0 = -1;
 }
 return ($$0|0);
}
function ___overflow() {
 var $$0 = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $0 = sp;
 store1($0,10);
 $1 = load4((2064));
 $2 = ($1|0)==(0|0);
 if ($2) {
  $3 = (___towrite(2048)|0);
  $4 = ($3|0)==(0);
  if ($4) {
   $$pre = load4((2064));
   $7 = $$pre;
   label = 4;
  } else {
   $$0 = -1;
  }
 } else {
  $7 = $1;
  label = 4;
 }
 do {
  if ((label|0) == 4) {
   $5 = load4((2068));
   $6 = ($5>>>0)>=($7>>>0);
   $8 = load1((2123));
   $9 = ($8<<24>>24)==(10);
   $or$cond = $6 | $9;
   if (!($or$cond)) {
    $10 = ((($5)) + 1|0);
    store4((2068),$10);
    store1($5,10);
    $$0 = 10;
    break;
   }
   $11 = load4((2084));
   $12 = (FUNCTION_TABLE_iiii[$11 & 31](2048,$0,1)|0);
   $13 = ($12|0)==(1);
   if ($13) {
    $14 = load1($0);
    $15 = $14&255;
    $$0 = $15;
   } else {
    $$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function _malloc($0) {
 $0 = $0|0;
 var $$$0190$i = 0, $$$0191$i = 0, $$$4349$i = 0, $$$i = 0, $$0 = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i17$i = 0, $$0$i18$i = 0, $$01$i$i = 0, $$0187$i = 0, $$0189$i = 0, $$0190$i = 0, $$0191$i = 0, $$0197 = 0, $$0199 = 0, $$0206$i$i = 0, $$0207$i$i = 0, $$0211$i$i = 0, $$0212$i$i = 0;
 var $$024370$i = 0, $$0286$i$i = 0, $$0287$i$i = 0, $$0288$i$i = 0, $$0294$i$i = 0, $$0295$i$i = 0, $$0340$i = 0, $$0342$i = 0, $$0343$i = 0, $$0345$i = 0, $$0351$i = 0, $$0356$i = 0, $$0357$$i = 0, $$0357$i = 0, $$0359$i = 0, $$0360$i = 0, $$0366$i = 0, $$1194$i = 0, $$1196$i = 0, $$124469$i = 0;
 var $$1290$i$i = 0, $$1292$i$i = 0, $$1341$i = 0, $$1346$i = 0, $$1361$i = 0, $$1368$i = 0, $$1372$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2353$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i201 = 0, $$3348$i = 0, $$3370$i = 0, $$4$lcssa$i = 0, $$413$i = 0, $$4349$lcssa$i = 0, $$434912$i = 0, $$4355$$4$i = 0;
 var $$4355$ph$i = 0, $$435511$i = 0, $$5256$i = 0, $$723947$i = 0, $$748$i = 0, $$not$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i19$i = 0, $$pre$i205 = 0, $$pre$i208 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i20$iZ2D = 0, $$pre$phi$i206Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi10$i$iZ2D = 0, $$pre$phiZ2D = 0, $$pre9$i$i = 0, $1 = 0;
 var $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0, $1008 = 0, $1009 = 0, $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0;
 var $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0, $1026 = 0, $1027 = 0, $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0;
 var $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0, $1044 = 0, $1045 = 0, $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0;
 var $1053 = 0, $1054 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0;
 var $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0;
 var $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0;
 var $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0;
 var $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0;
 var $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0;
 var $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0;
 var $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0;
 var $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0;
 var $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0;
 var $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0;
 var $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0;
 var $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0;
 var $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0;
 var $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0;
 var $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0;
 var $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0;
 var $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0;
 var $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0;
 var $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0;
 var $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0;
 var $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0;
 var $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0;
 var $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0;
 var $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0;
 var $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0;
 var $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0;
 var $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0;
 var $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0;
 var $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0;
 var $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0;
 var $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0;
 var $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0;
 var $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0;
 var $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0;
 var $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0;
 var $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0;
 var $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0;
 var $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0;
 var $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0, $824 = 0;
 var $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0, $842 = 0;
 var $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0, $860 = 0;
 var $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0, $879 = 0;
 var $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0, $897 = 0;
 var $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0, $914 = 0;
 var $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0, $932 = 0;
 var $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0, $950 = 0;
 var $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0, $969 = 0;
 var $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0, $987 = 0;
 var $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $cond$i = 0, $cond$i$i = 0, $cond$i204 = 0, $exitcond$i$i = 0, $not$$i$i = 0, $not$$i22$i = 0, $not$7$i = 0;
 var $or$cond$i = 0, $or$cond$i211 = 0, $or$cond1$i = 0, $or$cond1$i210 = 0, $or$cond10$i = 0, $or$cond11$i = 0, $or$cond12$i = 0, $or$cond2$i = 0, $or$cond5$i = 0, $or$cond50$i = 0, $or$cond7$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = ($0>>>0)<(245);
 do {
  if ($2) {
   $3 = ($0>>>0)<(11);
   $4 = (($0) + 11)|0;
   $5 = $4 & -8;
   $6 = $3 ? 16 : $5;
   $7 = $6 >>> 3;
   $8 = load4(8792);
   $9 = $8 >>> $7;
   $10 = $9 & 3;
   $11 = ($10|0)==(0);
   if (!($11)) {
    $12 = $9 & 1;
    $13 = $12 ^ 1;
    $14 = (($13) + ($7))|0;
    $15 = $14 << 1;
    $16 = (8832 + ($15<<2)|0);
    $17 = ((($16)) + 8|0);
    $18 = load4($17);
    $19 = ((($18)) + 8|0);
    $20 = load4($19);
    $21 = ($16|0)==($20|0);
    do {
     if ($21) {
      $22 = 1 << $14;
      $23 = $22 ^ -1;
      $24 = $8 & $23;
      store4(8792,$24);
     } else {
      $25 = load4((8808));
      $26 = ($20>>>0)<($25>>>0);
      if ($26) {
       _abort();
       // unreachable;
      }
      $27 = ((($20)) + 12|0);
      $28 = load4($27);
      $29 = ($28|0)==($18|0);
      if ($29) {
       store4($27,$16);
       store4($17,$20);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $30 = $14 << 3;
    $31 = $30 | 3;
    $32 = ((($18)) + 4|0);
    store4($32,$31);
    $33 = (($18) + ($30)|0);
    $34 = ((($33)) + 4|0);
    $35 = load4($34);
    $36 = $35 | 1;
    store4($34,$36);
    $$0 = $19;
    STACKTOP = sp;return ($$0|0);
   }
   $37 = load4((8800));
   $38 = ($6>>>0)>($37>>>0);
   if ($38) {
    $39 = ($9|0)==(0);
    if (!($39)) {
     $40 = $9 << $7;
     $41 = 2 << $7;
     $42 = (0 - ($41))|0;
     $43 = $41 | $42;
     $44 = $40 & $43;
     $45 = (0 - ($44))|0;
     $46 = $44 & $45;
     $47 = (($46) + -1)|0;
     $48 = $47 >>> 12;
     $49 = $48 & 16;
     $50 = $47 >>> $49;
     $51 = $50 >>> 5;
     $52 = $51 & 8;
     $53 = $52 | $49;
     $54 = $50 >>> $52;
     $55 = $54 >>> 2;
     $56 = $55 & 4;
     $57 = $53 | $56;
     $58 = $54 >>> $56;
     $59 = $58 >>> 1;
     $60 = $59 & 2;
     $61 = $57 | $60;
     $62 = $58 >>> $60;
     $63 = $62 >>> 1;
     $64 = $63 & 1;
     $65 = $61 | $64;
     $66 = $62 >>> $64;
     $67 = (($65) + ($66))|0;
     $68 = $67 << 1;
     $69 = (8832 + ($68<<2)|0);
     $70 = ((($69)) + 8|0);
     $71 = load4($70);
     $72 = ((($71)) + 8|0);
     $73 = load4($72);
     $74 = ($69|0)==($73|0);
     do {
      if ($74) {
       $75 = 1 << $67;
       $76 = $75 ^ -1;
       $77 = $8 & $76;
       store4(8792,$77);
       $98 = $77;
      } else {
       $78 = load4((8808));
       $79 = ($73>>>0)<($78>>>0);
       if ($79) {
        _abort();
        // unreachable;
       }
       $80 = ((($73)) + 12|0);
       $81 = load4($80);
       $82 = ($81|0)==($71|0);
       if ($82) {
        store4($80,$69);
        store4($70,$73);
        $98 = $8;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $83 = $67 << 3;
     $84 = (($83) - ($6))|0;
     $85 = $6 | 3;
     $86 = ((($71)) + 4|0);
     store4($86,$85);
     $87 = (($71) + ($6)|0);
     $88 = $84 | 1;
     $89 = ((($87)) + 4|0);
     store4($89,$88);
     $90 = (($87) + ($84)|0);
     store4($90,$84);
     $91 = ($37|0)==(0);
     if (!($91)) {
      $92 = load4((8812));
      $93 = $37 >>> 3;
      $94 = $93 << 1;
      $95 = (8832 + ($94<<2)|0);
      $96 = 1 << $93;
      $97 = $98 & $96;
      $99 = ($97|0)==(0);
      if ($99) {
       $100 = $98 | $96;
       store4(8792,$100);
       $$pre = ((($95)) + 8|0);
       $$0199 = $95;$$pre$phiZ2D = $$pre;
      } else {
       $101 = ((($95)) + 8|0);
       $102 = load4($101);
       $103 = load4((8808));
       $104 = ($102>>>0)<($103>>>0);
       if ($104) {
        _abort();
        // unreachable;
       } else {
        $$0199 = $102;$$pre$phiZ2D = $101;
       }
      }
      store4($$pre$phiZ2D,$92);
      $105 = ((($$0199)) + 12|0);
      store4($105,$92);
      $106 = ((($92)) + 8|0);
      store4($106,$$0199);
      $107 = ((($92)) + 12|0);
      store4($107,$95);
     }
     store4((8800),$84);
     store4((8812),$87);
     $$0 = $72;
     STACKTOP = sp;return ($$0|0);
    }
    $108 = load4((8796));
    $109 = ($108|0)==(0);
    if ($109) {
     $$0197 = $6;
    } else {
     $110 = (0 - ($108))|0;
     $111 = $108 & $110;
     $112 = (($111) + -1)|0;
     $113 = $112 >>> 12;
     $114 = $113 & 16;
     $115 = $112 >>> $114;
     $116 = $115 >>> 5;
     $117 = $116 & 8;
     $118 = $117 | $114;
     $119 = $115 >>> $117;
     $120 = $119 >>> 2;
     $121 = $120 & 4;
     $122 = $118 | $121;
     $123 = $119 >>> $121;
     $124 = $123 >>> 1;
     $125 = $124 & 2;
     $126 = $122 | $125;
     $127 = $123 >>> $125;
     $128 = $127 >>> 1;
     $129 = $128 & 1;
     $130 = $126 | $129;
     $131 = $127 >>> $129;
     $132 = (($130) + ($131))|0;
     $133 = (9096 + ($132<<2)|0);
     $134 = load4($133);
     $135 = ((($134)) + 4|0);
     $136 = load4($135);
     $137 = $136 & -8;
     $138 = (($137) - ($6))|0;
     $$0189$i = $134;$$0190$i = $134;$$0191$i = $138;
     while(1) {
      $139 = ((($$0189$i)) + 16|0);
      $140 = load4($139);
      $141 = ($140|0)==(0|0);
      if ($141) {
       $142 = ((($$0189$i)) + 20|0);
       $143 = load4($142);
       $144 = ($143|0)==(0|0);
       if ($144) {
        break;
       } else {
        $146 = $143;
       }
      } else {
       $146 = $140;
      }
      $145 = ((($146)) + 4|0);
      $147 = load4($145);
      $148 = $147 & -8;
      $149 = (($148) - ($6))|0;
      $150 = ($149>>>0)<($$0191$i>>>0);
      $$$0191$i = $150 ? $149 : $$0191$i;
      $$$0190$i = $150 ? $146 : $$0190$i;
      $$0189$i = $146;$$0190$i = $$$0190$i;$$0191$i = $$$0191$i;
     }
     $151 = load4((8808));
     $152 = ($$0190$i>>>0)<($151>>>0);
     if ($152) {
      _abort();
      // unreachable;
     }
     $153 = (($$0190$i) + ($6)|0);
     $154 = ($$0190$i>>>0)<($153>>>0);
     if (!($154)) {
      _abort();
      // unreachable;
     }
     $155 = ((($$0190$i)) + 24|0);
     $156 = load4($155);
     $157 = ((($$0190$i)) + 12|0);
     $158 = load4($157);
     $159 = ($158|0)==($$0190$i|0);
     do {
      if ($159) {
       $169 = ((($$0190$i)) + 20|0);
       $170 = load4($169);
       $171 = ($170|0)==(0|0);
       if ($171) {
        $172 = ((($$0190$i)) + 16|0);
        $173 = load4($172);
        $174 = ($173|0)==(0|0);
        if ($174) {
         $$3$i = 0;
         break;
        } else {
         $$1194$i = $173;$$1196$i = $172;
        }
       } else {
        $$1194$i = $170;$$1196$i = $169;
       }
       while(1) {
        $175 = ((($$1194$i)) + 20|0);
        $176 = load4($175);
        $177 = ($176|0)==(0|0);
        if (!($177)) {
         $$1194$i = $176;$$1196$i = $175;
         continue;
        }
        $178 = ((($$1194$i)) + 16|0);
        $179 = load4($178);
        $180 = ($179|0)==(0|0);
        if ($180) {
         break;
        } else {
         $$1194$i = $179;$$1196$i = $178;
        }
       }
       $181 = ($$1196$i>>>0)<($151>>>0);
       if ($181) {
        _abort();
        // unreachable;
       } else {
        store4($$1196$i,0);
        $$3$i = $$1194$i;
        break;
       }
      } else {
       $160 = ((($$0190$i)) + 8|0);
       $161 = load4($160);
       $162 = ($161>>>0)<($151>>>0);
       if ($162) {
        _abort();
        // unreachable;
       }
       $163 = ((($161)) + 12|0);
       $164 = load4($163);
       $165 = ($164|0)==($$0190$i|0);
       if (!($165)) {
        _abort();
        // unreachable;
       }
       $166 = ((($158)) + 8|0);
       $167 = load4($166);
       $168 = ($167|0)==($$0190$i|0);
       if ($168) {
        store4($163,$158);
        store4($166,$161);
        $$3$i = $158;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $182 = ($156|0)==(0|0);
     do {
      if (!($182)) {
       $183 = ((($$0190$i)) + 28|0);
       $184 = load4($183);
       $185 = (9096 + ($184<<2)|0);
       $186 = load4($185);
       $187 = ($$0190$i|0)==($186|0);
       if ($187) {
        store4($185,$$3$i);
        $cond$i = ($$3$i|0)==(0|0);
        if ($cond$i) {
         $188 = 1 << $184;
         $189 = $188 ^ -1;
         $190 = $108 & $189;
         store4((8796),$190);
         break;
        }
       } else {
        $191 = load4((8808));
        $192 = ($156>>>0)<($191>>>0);
        if ($192) {
         _abort();
         // unreachable;
        }
        $193 = ((($156)) + 16|0);
        $194 = load4($193);
        $195 = ($194|0)==($$0190$i|0);
        if ($195) {
         store4($193,$$3$i);
        } else {
         $196 = ((($156)) + 20|0);
         store4($196,$$3$i);
        }
        $197 = ($$3$i|0)==(0|0);
        if ($197) {
         break;
        }
       }
       $198 = load4((8808));
       $199 = ($$3$i>>>0)<($198>>>0);
       if ($199) {
        _abort();
        // unreachable;
       }
       $200 = ((($$3$i)) + 24|0);
       store4($200,$156);
       $201 = ((($$0190$i)) + 16|0);
       $202 = load4($201);
       $203 = ($202|0)==(0|0);
       do {
        if (!($203)) {
         $204 = ($202>>>0)<($198>>>0);
         if ($204) {
          _abort();
          // unreachable;
         } else {
          $205 = ((($$3$i)) + 16|0);
          store4($205,$202);
          $206 = ((($202)) + 24|0);
          store4($206,$$3$i);
          break;
         }
        }
       } while(0);
       $207 = ((($$0190$i)) + 20|0);
       $208 = load4($207);
       $209 = ($208|0)==(0|0);
       if (!($209)) {
        $210 = load4((8808));
        $211 = ($208>>>0)<($210>>>0);
        if ($211) {
         _abort();
         // unreachable;
        } else {
         $212 = ((($$3$i)) + 20|0);
         store4($212,$208);
         $213 = ((($208)) + 24|0);
         store4($213,$$3$i);
         break;
        }
       }
      }
     } while(0);
     $214 = ($$0191$i>>>0)<(16);
     if ($214) {
      $215 = (($$0191$i) + ($6))|0;
      $216 = $215 | 3;
      $217 = ((($$0190$i)) + 4|0);
      store4($217,$216);
      $218 = (($$0190$i) + ($215)|0);
      $219 = ((($218)) + 4|0);
      $220 = load4($219);
      $221 = $220 | 1;
      store4($219,$221);
     } else {
      $222 = $6 | 3;
      $223 = ((($$0190$i)) + 4|0);
      store4($223,$222);
      $224 = $$0191$i | 1;
      $225 = ((($153)) + 4|0);
      store4($225,$224);
      $226 = (($153) + ($$0191$i)|0);
      store4($226,$$0191$i);
      $227 = ($37|0)==(0);
      if (!($227)) {
       $228 = load4((8812));
       $229 = $37 >>> 3;
       $230 = $229 << 1;
       $231 = (8832 + ($230<<2)|0);
       $232 = 1 << $229;
       $233 = $232 & $8;
       $234 = ($233|0)==(0);
       if ($234) {
        $235 = $232 | $8;
        store4(8792,$235);
        $$pre$i = ((($231)) + 8|0);
        $$0187$i = $231;$$pre$phi$iZ2D = $$pre$i;
       } else {
        $236 = ((($231)) + 8|0);
        $237 = load4($236);
        $238 = load4((8808));
        $239 = ($237>>>0)<($238>>>0);
        if ($239) {
         _abort();
         // unreachable;
        } else {
         $$0187$i = $237;$$pre$phi$iZ2D = $236;
        }
       }
       store4($$pre$phi$iZ2D,$228);
       $240 = ((($$0187$i)) + 12|0);
       store4($240,$228);
       $241 = ((($228)) + 8|0);
       store4($241,$$0187$i);
       $242 = ((($228)) + 12|0);
       store4($242,$231);
      }
      store4((8800),$$0191$i);
      store4((8812),$153);
     }
     $243 = ((($$0190$i)) + 8|0);
     $$0 = $243;
     STACKTOP = sp;return ($$0|0);
    }
   } else {
    $$0197 = $6;
   }
  } else {
   $244 = ($0>>>0)>(4294967231);
   if ($244) {
    $$0197 = -1;
   } else {
    $245 = (($0) + 11)|0;
    $246 = $245 & -8;
    $247 = load4((8796));
    $248 = ($247|0)==(0);
    if ($248) {
     $$0197 = $246;
    } else {
     $249 = (0 - ($246))|0;
     $250 = $245 >>> 8;
     $251 = ($250|0)==(0);
     if ($251) {
      $$0356$i = 0;
     } else {
      $252 = ($246>>>0)>(16777215);
      if ($252) {
       $$0356$i = 31;
      } else {
       $253 = (($250) + 1048320)|0;
       $254 = $253 >>> 16;
       $255 = $254 & 8;
       $256 = $250 << $255;
       $257 = (($256) + 520192)|0;
       $258 = $257 >>> 16;
       $259 = $258 & 4;
       $260 = $259 | $255;
       $261 = $256 << $259;
       $262 = (($261) + 245760)|0;
       $263 = $262 >>> 16;
       $264 = $263 & 2;
       $265 = $260 | $264;
       $266 = (14 - ($265))|0;
       $267 = $261 << $264;
       $268 = $267 >>> 15;
       $269 = (($266) + ($268))|0;
       $270 = $269 << 1;
       $271 = (($269) + 7)|0;
       $272 = $246 >>> $271;
       $273 = $272 & 1;
       $274 = $273 | $270;
       $$0356$i = $274;
      }
     }
     $275 = (9096 + ($$0356$i<<2)|0);
     $276 = load4($275);
     $277 = ($276|0)==(0|0);
     L123: do {
      if ($277) {
       $$2353$i = 0;$$3$i201 = 0;$$3348$i = $249;
       label = 86;
      } else {
       $278 = ($$0356$i|0)==(31);
       $279 = $$0356$i >>> 1;
       $280 = (25 - ($279))|0;
       $281 = $278 ? 0 : $280;
       $282 = $246 << $281;
       $$0340$i = 0;$$0345$i = $249;$$0351$i = $276;$$0357$i = $282;$$0360$i = 0;
       while(1) {
        $283 = ((($$0351$i)) + 4|0);
        $284 = load4($283);
        $285 = $284 & -8;
        $286 = (($285) - ($246))|0;
        $287 = ($286>>>0)<($$0345$i>>>0);
        if ($287) {
         $288 = ($286|0)==(0);
         if ($288) {
          $$413$i = $$0351$i;$$434912$i = 0;$$435511$i = $$0351$i;
          label = 90;
          break L123;
         } else {
          $$1341$i = $$0351$i;$$1346$i = $286;
         }
        } else {
         $$1341$i = $$0340$i;$$1346$i = $$0345$i;
        }
        $289 = ((($$0351$i)) + 20|0);
        $290 = load4($289);
        $291 = $$0357$i >>> 31;
        $292 = (((($$0351$i)) + 16|0) + ($291<<2)|0);
        $293 = load4($292);
        $294 = ($290|0)==(0|0);
        $295 = ($290|0)==($293|0);
        $or$cond1$i = $294 | $295;
        $$1361$i = $or$cond1$i ? $$0360$i : $290;
        $296 = ($293|0)==(0|0);
        $297 = $296&1;
        $298 = $297 ^ 1;
        $$0357$$i = $$0357$i << $298;
        if ($296) {
         $$2353$i = $$1361$i;$$3$i201 = $$1341$i;$$3348$i = $$1346$i;
         label = 86;
         break;
        } else {
         $$0340$i = $$1341$i;$$0345$i = $$1346$i;$$0351$i = $293;$$0357$i = $$0357$$i;$$0360$i = $$1361$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 86) {
      $299 = ($$2353$i|0)==(0|0);
      $300 = ($$3$i201|0)==(0|0);
      $or$cond$i = $299 & $300;
      if ($or$cond$i) {
       $301 = 2 << $$0356$i;
       $302 = (0 - ($301))|0;
       $303 = $301 | $302;
       $304 = $303 & $247;
       $305 = ($304|0)==(0);
       if ($305) {
        $$0197 = $246;
        break;
       }
       $306 = (0 - ($304))|0;
       $307 = $304 & $306;
       $308 = (($307) + -1)|0;
       $309 = $308 >>> 12;
       $310 = $309 & 16;
       $311 = $308 >>> $310;
       $312 = $311 >>> 5;
       $313 = $312 & 8;
       $314 = $313 | $310;
       $315 = $311 >>> $313;
       $316 = $315 >>> 2;
       $317 = $316 & 4;
       $318 = $314 | $317;
       $319 = $315 >>> $317;
       $320 = $319 >>> 1;
       $321 = $320 & 2;
       $322 = $318 | $321;
       $323 = $319 >>> $321;
       $324 = $323 >>> 1;
       $325 = $324 & 1;
       $326 = $322 | $325;
       $327 = $323 >>> $325;
       $328 = (($326) + ($327))|0;
       $329 = (9096 + ($328<<2)|0);
       $330 = load4($329);
       $$4355$ph$i = $330;
      } else {
       $$4355$ph$i = $$2353$i;
      }
      $331 = ($$4355$ph$i|0)==(0|0);
      if ($331) {
       $$4$lcssa$i = $$3$i201;$$4349$lcssa$i = $$3348$i;
      } else {
       $$413$i = $$3$i201;$$434912$i = $$3348$i;$$435511$i = $$4355$ph$i;
       label = 90;
      }
     }
     if ((label|0) == 90) {
      while(1) {
       label = 0;
       $332 = ((($$435511$i)) + 4|0);
       $333 = load4($332);
       $334 = $333 & -8;
       $335 = (($334) - ($246))|0;
       $336 = ($335>>>0)<($$434912$i>>>0);
       $$$4349$i = $336 ? $335 : $$434912$i;
       $$4355$$4$i = $336 ? $$435511$i : $$413$i;
       $337 = ((($$435511$i)) + 16|0);
       $338 = load4($337);
       $339 = ($338|0)==(0|0);
       if (!($339)) {
        $$413$i = $$4355$$4$i;$$434912$i = $$$4349$i;$$435511$i = $338;
        label = 90;
        continue;
       }
       $340 = ((($$435511$i)) + 20|0);
       $341 = load4($340);
       $342 = ($341|0)==(0|0);
       if ($342) {
        $$4$lcssa$i = $$4355$$4$i;$$4349$lcssa$i = $$$4349$i;
        break;
       } else {
        $$413$i = $$4355$$4$i;$$434912$i = $$$4349$i;$$435511$i = $341;
        label = 90;
       }
      }
     }
     $343 = ($$4$lcssa$i|0)==(0|0);
     if ($343) {
      $$0197 = $246;
     } else {
      $344 = load4((8800));
      $345 = (($344) - ($246))|0;
      $346 = ($$4349$lcssa$i>>>0)<($345>>>0);
      if ($346) {
       $347 = load4((8808));
       $348 = ($$4$lcssa$i>>>0)<($347>>>0);
       if ($348) {
        _abort();
        // unreachable;
       }
       $349 = (($$4$lcssa$i) + ($246)|0);
       $350 = ($$4$lcssa$i>>>0)<($349>>>0);
       if (!($350)) {
        _abort();
        // unreachable;
       }
       $351 = ((($$4$lcssa$i)) + 24|0);
       $352 = load4($351);
       $353 = ((($$4$lcssa$i)) + 12|0);
       $354 = load4($353);
       $355 = ($354|0)==($$4$lcssa$i|0);
       do {
        if ($355) {
         $365 = ((($$4$lcssa$i)) + 20|0);
         $366 = load4($365);
         $367 = ($366|0)==(0|0);
         if ($367) {
          $368 = ((($$4$lcssa$i)) + 16|0);
          $369 = load4($368);
          $370 = ($369|0)==(0|0);
          if ($370) {
           $$3370$i = 0;
           break;
          } else {
           $$1368$i = $369;$$1372$i = $368;
          }
         } else {
          $$1368$i = $366;$$1372$i = $365;
         }
         while(1) {
          $371 = ((($$1368$i)) + 20|0);
          $372 = load4($371);
          $373 = ($372|0)==(0|0);
          if (!($373)) {
           $$1368$i = $372;$$1372$i = $371;
           continue;
          }
          $374 = ((($$1368$i)) + 16|0);
          $375 = load4($374);
          $376 = ($375|0)==(0|0);
          if ($376) {
           break;
          } else {
           $$1368$i = $375;$$1372$i = $374;
          }
         }
         $377 = ($$1372$i>>>0)<($347>>>0);
         if ($377) {
          _abort();
          // unreachable;
         } else {
          store4($$1372$i,0);
          $$3370$i = $$1368$i;
          break;
         }
        } else {
         $356 = ((($$4$lcssa$i)) + 8|0);
         $357 = load4($356);
         $358 = ($357>>>0)<($347>>>0);
         if ($358) {
          _abort();
          // unreachable;
         }
         $359 = ((($357)) + 12|0);
         $360 = load4($359);
         $361 = ($360|0)==($$4$lcssa$i|0);
         if (!($361)) {
          _abort();
          // unreachable;
         }
         $362 = ((($354)) + 8|0);
         $363 = load4($362);
         $364 = ($363|0)==($$4$lcssa$i|0);
         if ($364) {
          store4($359,$354);
          store4($362,$357);
          $$3370$i = $354;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $378 = ($352|0)==(0|0);
       do {
        if ($378) {
         $470 = $247;
        } else {
         $379 = ((($$4$lcssa$i)) + 28|0);
         $380 = load4($379);
         $381 = (9096 + ($380<<2)|0);
         $382 = load4($381);
         $383 = ($$4$lcssa$i|0)==($382|0);
         if ($383) {
          store4($381,$$3370$i);
          $cond$i204 = ($$3370$i|0)==(0|0);
          if ($cond$i204) {
           $384 = 1 << $380;
           $385 = $384 ^ -1;
           $386 = $247 & $385;
           store4((8796),$386);
           $470 = $386;
           break;
          }
         } else {
          $387 = load4((8808));
          $388 = ($352>>>0)<($387>>>0);
          if ($388) {
           _abort();
           // unreachable;
          }
          $389 = ((($352)) + 16|0);
          $390 = load4($389);
          $391 = ($390|0)==($$4$lcssa$i|0);
          if ($391) {
           store4($389,$$3370$i);
          } else {
           $392 = ((($352)) + 20|0);
           store4($392,$$3370$i);
          }
          $393 = ($$3370$i|0)==(0|0);
          if ($393) {
           $470 = $247;
           break;
          }
         }
         $394 = load4((8808));
         $395 = ($$3370$i>>>0)<($394>>>0);
         if ($395) {
          _abort();
          // unreachable;
         }
         $396 = ((($$3370$i)) + 24|0);
         store4($396,$352);
         $397 = ((($$4$lcssa$i)) + 16|0);
         $398 = load4($397);
         $399 = ($398|0)==(0|0);
         do {
          if (!($399)) {
           $400 = ($398>>>0)<($394>>>0);
           if ($400) {
            _abort();
            // unreachable;
           } else {
            $401 = ((($$3370$i)) + 16|0);
            store4($401,$398);
            $402 = ((($398)) + 24|0);
            store4($402,$$3370$i);
            break;
           }
          }
         } while(0);
         $403 = ((($$4$lcssa$i)) + 20|0);
         $404 = load4($403);
         $405 = ($404|0)==(0|0);
         if ($405) {
          $470 = $247;
         } else {
          $406 = load4((8808));
          $407 = ($404>>>0)<($406>>>0);
          if ($407) {
           _abort();
           // unreachable;
          } else {
           $408 = ((($$3370$i)) + 20|0);
           store4($408,$404);
           $409 = ((($404)) + 24|0);
           store4($409,$$3370$i);
           $470 = $247;
           break;
          }
         }
        }
       } while(0);
       $410 = ($$4349$lcssa$i>>>0)<(16);
       do {
        if ($410) {
         $411 = (($$4349$lcssa$i) + ($246))|0;
         $412 = $411 | 3;
         $413 = ((($$4$lcssa$i)) + 4|0);
         store4($413,$412);
         $414 = (($$4$lcssa$i) + ($411)|0);
         $415 = ((($414)) + 4|0);
         $416 = load4($415);
         $417 = $416 | 1;
         store4($415,$417);
        } else {
         $418 = $246 | 3;
         $419 = ((($$4$lcssa$i)) + 4|0);
         store4($419,$418);
         $420 = $$4349$lcssa$i | 1;
         $421 = ((($349)) + 4|0);
         store4($421,$420);
         $422 = (($349) + ($$4349$lcssa$i)|0);
         store4($422,$$4349$lcssa$i);
         $423 = $$4349$lcssa$i >>> 3;
         $424 = ($$4349$lcssa$i>>>0)<(256);
         if ($424) {
          $425 = $423 << 1;
          $426 = (8832 + ($425<<2)|0);
          $427 = load4(8792);
          $428 = 1 << $423;
          $429 = $427 & $428;
          $430 = ($429|0)==(0);
          if ($430) {
           $431 = $427 | $428;
           store4(8792,$431);
           $$pre$i205 = ((($426)) + 8|0);
           $$0366$i = $426;$$pre$phi$i206Z2D = $$pre$i205;
          } else {
           $432 = ((($426)) + 8|0);
           $433 = load4($432);
           $434 = load4((8808));
           $435 = ($433>>>0)<($434>>>0);
           if ($435) {
            _abort();
            // unreachable;
           } else {
            $$0366$i = $433;$$pre$phi$i206Z2D = $432;
           }
          }
          store4($$pre$phi$i206Z2D,$349);
          $436 = ((($$0366$i)) + 12|0);
          store4($436,$349);
          $437 = ((($349)) + 8|0);
          store4($437,$$0366$i);
          $438 = ((($349)) + 12|0);
          store4($438,$426);
          break;
         }
         $439 = $$4349$lcssa$i >>> 8;
         $440 = ($439|0)==(0);
         if ($440) {
          $$0359$i = 0;
         } else {
          $441 = ($$4349$lcssa$i>>>0)>(16777215);
          if ($441) {
           $$0359$i = 31;
          } else {
           $442 = (($439) + 1048320)|0;
           $443 = $442 >>> 16;
           $444 = $443 & 8;
           $445 = $439 << $444;
           $446 = (($445) + 520192)|0;
           $447 = $446 >>> 16;
           $448 = $447 & 4;
           $449 = $448 | $444;
           $450 = $445 << $448;
           $451 = (($450) + 245760)|0;
           $452 = $451 >>> 16;
           $453 = $452 & 2;
           $454 = $449 | $453;
           $455 = (14 - ($454))|0;
           $456 = $450 << $453;
           $457 = $456 >>> 15;
           $458 = (($455) + ($457))|0;
           $459 = $458 << 1;
           $460 = (($458) + 7)|0;
           $461 = $$4349$lcssa$i >>> $460;
           $462 = $461 & 1;
           $463 = $462 | $459;
           $$0359$i = $463;
          }
         }
         $464 = (9096 + ($$0359$i<<2)|0);
         $465 = ((($349)) + 28|0);
         store4($465,$$0359$i);
         $466 = ((($349)) + 16|0);
         $467 = ((($466)) + 4|0);
         store4($467,0);
         store4($466,0);
         $468 = 1 << $$0359$i;
         $469 = $468 & $470;
         $471 = ($469|0)==(0);
         if ($471) {
          $472 = $468 | $470;
          store4((8796),$472);
          store4($464,$349);
          $473 = ((($349)) + 24|0);
          store4($473,$464);
          $474 = ((($349)) + 12|0);
          store4($474,$349);
          $475 = ((($349)) + 8|0);
          store4($475,$349);
          break;
         }
         $476 = load4($464);
         $477 = ($$0359$i|0)==(31);
         $478 = $$0359$i >>> 1;
         $479 = (25 - ($478))|0;
         $480 = $477 ? 0 : $479;
         $481 = $$4349$lcssa$i << $480;
         $$0342$i = $481;$$0343$i = $476;
         while(1) {
          $482 = ((($$0343$i)) + 4|0);
          $483 = load4($482);
          $484 = $483 & -8;
          $485 = ($484|0)==($$4349$lcssa$i|0);
          if ($485) {
           label = 148;
           break;
          }
          $486 = $$0342$i >>> 31;
          $487 = (((($$0343$i)) + 16|0) + ($486<<2)|0);
          $488 = $$0342$i << 1;
          $489 = load4($487);
          $490 = ($489|0)==(0|0);
          if ($490) {
           label = 145;
           break;
          } else {
           $$0342$i = $488;$$0343$i = $489;
          }
         }
         if ((label|0) == 145) {
          $491 = load4((8808));
          $492 = ($487>>>0)<($491>>>0);
          if ($492) {
           _abort();
           // unreachable;
          } else {
           store4($487,$349);
           $493 = ((($349)) + 24|0);
           store4($493,$$0343$i);
           $494 = ((($349)) + 12|0);
           store4($494,$349);
           $495 = ((($349)) + 8|0);
           store4($495,$349);
           break;
          }
         }
         else if ((label|0) == 148) {
          $496 = ((($$0343$i)) + 8|0);
          $497 = load4($496);
          $498 = load4((8808));
          $499 = ($497>>>0)>=($498>>>0);
          $not$7$i = ($$0343$i>>>0)>=($498>>>0);
          $500 = $499 & $not$7$i;
          if ($500) {
           $501 = ((($497)) + 12|0);
           store4($501,$349);
           store4($496,$349);
           $502 = ((($349)) + 8|0);
           store4($502,$497);
           $503 = ((($349)) + 12|0);
           store4($503,$$0343$i);
           $504 = ((($349)) + 24|0);
           store4($504,0);
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $505 = ((($$4$lcssa$i)) + 8|0);
       $$0 = $505;
       STACKTOP = sp;return ($$0|0);
      } else {
       $$0197 = $246;
      }
     }
    }
   }
  }
 } while(0);
 $506 = load4((8800));
 $507 = ($506>>>0)<($$0197>>>0);
 if (!($507)) {
  $508 = (($506) - ($$0197))|0;
  $509 = load4((8812));
  $510 = ($508>>>0)>(15);
  if ($510) {
   $511 = (($509) + ($$0197)|0);
   store4((8812),$511);
   store4((8800),$508);
   $512 = $508 | 1;
   $513 = ((($511)) + 4|0);
   store4($513,$512);
   $514 = (($511) + ($508)|0);
   store4($514,$508);
   $515 = $$0197 | 3;
   $516 = ((($509)) + 4|0);
   store4($516,$515);
  } else {
   store4((8800),0);
   store4((8812),0);
   $517 = $506 | 3;
   $518 = ((($509)) + 4|0);
   store4($518,$517);
   $519 = (($509) + ($506)|0);
   $520 = ((($519)) + 4|0);
   $521 = load4($520);
   $522 = $521 | 1;
   store4($520,$522);
  }
  $523 = ((($509)) + 8|0);
  $$0 = $523;
  STACKTOP = sp;return ($$0|0);
 }
 $524 = load4((8804));
 $525 = ($524>>>0)>($$0197>>>0);
 if ($525) {
  $526 = (($524) - ($$0197))|0;
  store4((8804),$526);
  $527 = load4((8816));
  $528 = (($527) + ($$0197)|0);
  store4((8816),$528);
  $529 = $526 | 1;
  $530 = ((($528)) + 4|0);
  store4($530,$529);
  $531 = $$0197 | 3;
  $532 = ((($527)) + 4|0);
  store4($532,$531);
  $533 = ((($527)) + 8|0);
  $$0 = $533;
  STACKTOP = sp;return ($$0|0);
 }
 $534 = load4(9264);
 $535 = ($534|0)==(0);
 if ($535) {
  store4((9272),4096);
  store4((9268),4096);
  store4((9276),-1);
  store4((9280),-1);
  store4((9284),0);
  store4((9236),0);
  $536 = $1;
  $537 = $536 & -16;
  $538 = $537 ^ 1431655768;
  store4($1,$538);
  store4(9264,$538);
  $542 = 4096;
 } else {
  $$pre$i208 = load4((9272));
  $542 = $$pre$i208;
 }
 $539 = (($$0197) + 48)|0;
 $540 = (($$0197) + 47)|0;
 $541 = (($542) + ($540))|0;
 $543 = (0 - ($542))|0;
 $544 = $541 & $543;
 $545 = ($544>>>0)>($$0197>>>0);
 if (!($545)) {
  $$0 = 0;
  STACKTOP = sp;return ($$0|0);
 }
 $546 = load4((9232));
 $547 = ($546|0)==(0);
 if (!($547)) {
  $548 = load4((9224));
  $549 = (($548) + ($544))|0;
  $550 = ($549>>>0)<=($548>>>0);
  $551 = ($549>>>0)>($546>>>0);
  $or$cond1$i210 = $550 | $551;
  if ($or$cond1$i210) {
   $$0 = 0;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $552 = load4((9236));
 $553 = $552 & 4;
 $554 = ($553|0)==(0);
 L255: do {
  if ($554) {
   $555 = load4((8816));
   $556 = ($555|0)==(0|0);
   L257: do {
    if ($556) {
     label = 172;
    } else {
     $$0$i17$i = (9240);
     while(1) {
      $557 = load4($$0$i17$i);
      $558 = ($557>>>0)>($555>>>0);
      if (!($558)) {
       $559 = ((($$0$i17$i)) + 4|0);
       $560 = load4($559);
       $561 = (($557) + ($560)|0);
       $562 = ($561>>>0)>($555>>>0);
       if ($562) {
        break;
       }
      }
      $563 = ((($$0$i17$i)) + 8|0);
      $564 = load4($563);
      $565 = ($564|0)==(0|0);
      if ($565) {
       label = 172;
       break L257;
      } else {
       $$0$i17$i = $564;
      }
     }
     $588 = (($541) - ($524))|0;
     $589 = $588 & $543;
     $590 = ($589>>>0)<(2147483647);
     if ($590) {
      $591 = (_sbrk(($589|0))|0);
      $592 = load4($$0$i17$i);
      $593 = load4($559);
      $594 = (($592) + ($593)|0);
      $595 = ($591|0)==($594|0);
      if ($595) {
       $596 = ($591|0)==((-1)|0);
       if (!($596)) {
        $$723947$i = $589;$$748$i = $591;
        label = 190;
        break L255;
       }
      } else {
       $$2247$ph$i = $591;$$2253$ph$i = $589;
       label = 180;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 172) {
     $566 = (_sbrk(0)|0);
     $567 = ($566|0)==((-1)|0);
     if (!($567)) {
      $568 = $566;
      $569 = load4((9268));
      $570 = (($569) + -1)|0;
      $571 = $570 & $568;
      $572 = ($571|0)==(0);
      $573 = (($570) + ($568))|0;
      $574 = (0 - ($569))|0;
      $575 = $573 & $574;
      $576 = (($575) - ($568))|0;
      $577 = $572 ? 0 : $576;
      $$$i = (($577) + ($544))|0;
      $578 = load4((9224));
      $579 = (($$$i) + ($578))|0;
      $580 = ($$$i>>>0)>($$0197>>>0);
      $581 = ($$$i>>>0)<(2147483647);
      $or$cond$i211 = $580 & $581;
      if ($or$cond$i211) {
       $582 = load4((9232));
       $583 = ($582|0)==(0);
       if (!($583)) {
        $584 = ($579>>>0)<=($578>>>0);
        $585 = ($579>>>0)>($582>>>0);
        $or$cond2$i = $584 | $585;
        if ($or$cond2$i) {
         break;
        }
       }
       $586 = (_sbrk(($$$i|0))|0);
       $587 = ($586|0)==($566|0);
       if ($587) {
        $$723947$i = $$$i;$$748$i = $566;
        label = 190;
        break L255;
       } else {
        $$2247$ph$i = $586;$$2253$ph$i = $$$i;
        label = 180;
       }
      }
     }
    }
   } while(0);
   L274: do {
    if ((label|0) == 180) {
     $597 = (0 - ($$2253$ph$i))|0;
     $598 = ($$2247$ph$i|0)!=((-1)|0);
     $599 = ($$2253$ph$i>>>0)<(2147483647);
     $or$cond7$i = $599 & $598;
     $600 = ($539>>>0)>($$2253$ph$i>>>0);
     $or$cond10$i = $600 & $or$cond7$i;
     do {
      if ($or$cond10$i) {
       $601 = load4((9272));
       $602 = (($540) - ($$2253$ph$i))|0;
       $603 = (($602) + ($601))|0;
       $604 = (0 - ($601))|0;
       $605 = $603 & $604;
       $606 = ($605>>>0)<(2147483647);
       if ($606) {
        $607 = (_sbrk(($605|0))|0);
        $608 = ($607|0)==((-1)|0);
        if ($608) {
         (_sbrk(($597|0))|0);
         break L274;
        } else {
         $609 = (($605) + ($$2253$ph$i))|0;
         $$5256$i = $609;
         break;
        }
       } else {
        $$5256$i = $$2253$ph$i;
       }
      } else {
       $$5256$i = $$2253$ph$i;
      }
     } while(0);
     $610 = ($$2247$ph$i|0)==((-1)|0);
     if (!($610)) {
      $$723947$i = $$5256$i;$$748$i = $$2247$ph$i;
      label = 190;
      break L255;
     }
    }
   } while(0);
   $611 = load4((9236));
   $612 = $611 | 4;
   store4((9236),$612);
   label = 187;
  } else {
   label = 187;
  }
 } while(0);
 if ((label|0) == 187) {
  $613 = ($544>>>0)<(2147483647);
  if ($613) {
   $614 = (_sbrk(($544|0))|0);
   $615 = (_sbrk(0)|0);
   $616 = ($614|0)!=((-1)|0);
   $617 = ($615|0)!=((-1)|0);
   $or$cond5$i = $616 & $617;
   $618 = ($614>>>0)<($615>>>0);
   $or$cond11$i = $618 & $or$cond5$i;
   if ($or$cond11$i) {
    $619 = $615;
    $620 = $614;
    $621 = (($619) - ($620))|0;
    $622 = (($$0197) + 40)|0;
    $$not$i = ($621>>>0)>($622>>>0);
    if ($$not$i) {
     $$723947$i = $621;$$748$i = $614;
     label = 190;
    }
   }
  }
 }
 if ((label|0) == 190) {
  $623 = load4((9224));
  $624 = (($623) + ($$723947$i))|0;
  store4((9224),$624);
  $625 = load4((9228));
  $626 = ($624>>>0)>($625>>>0);
  if ($626) {
   store4((9228),$624);
  }
  $627 = load4((8816));
  $628 = ($627|0)==(0|0);
  do {
   if ($628) {
    $629 = load4((8808));
    $630 = ($629|0)==(0|0);
    $631 = ($$748$i>>>0)<($629>>>0);
    $or$cond12$i = $630 | $631;
    if ($or$cond12$i) {
     store4((8808),$$748$i);
    }
    store4((9240),$$748$i);
    store4((9244),$$723947$i);
    store4((9252),0);
    $632 = load4(9264);
    store4((8828),$632);
    store4((8824),-1);
    $$01$i$i = 0;
    while(1) {
     $633 = $$01$i$i << 1;
     $634 = (8832 + ($633<<2)|0);
     $635 = ((($634)) + 12|0);
     store4($635,$634);
     $636 = ((($634)) + 8|0);
     store4($636,$634);
     $637 = (($$01$i$i) + 1)|0;
     $exitcond$i$i = ($637|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $$01$i$i = $637;
     }
    }
    $638 = (($$723947$i) + -40)|0;
    $639 = ((($$748$i)) + 8|0);
    $640 = $639;
    $641 = $640 & 7;
    $642 = ($641|0)==(0);
    $643 = (0 - ($640))|0;
    $644 = $643 & 7;
    $645 = $642 ? 0 : $644;
    $646 = (($$748$i) + ($645)|0);
    $647 = (($638) - ($645))|0;
    store4((8816),$646);
    store4((8804),$647);
    $648 = $647 | 1;
    $649 = ((($646)) + 4|0);
    store4($649,$648);
    $650 = (($646) + ($647)|0);
    $651 = ((($650)) + 4|0);
    store4($651,40);
    $652 = load4((9280));
    store4((8820),$652);
   } else {
    $$024370$i = (9240);
    while(1) {
     $653 = load4($$024370$i);
     $654 = ((($$024370$i)) + 4|0);
     $655 = load4($654);
     $656 = (($653) + ($655)|0);
     $657 = ($$748$i|0)==($656|0);
     if ($657) {
      label = 200;
      break;
     }
     $658 = ((($$024370$i)) + 8|0);
     $659 = load4($658);
     $660 = ($659|0)==(0|0);
     if ($660) {
      break;
     } else {
      $$024370$i = $659;
     }
    }
    if ((label|0) == 200) {
     $661 = ((($$024370$i)) + 12|0);
     $662 = load4($661);
     $663 = $662 & 8;
     $664 = ($663|0)==(0);
     if ($664) {
      $665 = ($627>>>0)>=($653>>>0);
      $666 = ($627>>>0)<($$748$i>>>0);
      $or$cond50$i = $666 & $665;
      if ($or$cond50$i) {
       $667 = (($655) + ($$723947$i))|0;
       store4($654,$667);
       $668 = load4((8804));
       $669 = ((($627)) + 8|0);
       $670 = $669;
       $671 = $670 & 7;
       $672 = ($671|0)==(0);
       $673 = (0 - ($670))|0;
       $674 = $673 & 7;
       $675 = $672 ? 0 : $674;
       $676 = (($627) + ($675)|0);
       $677 = (($$723947$i) - ($675))|0;
       $678 = (($668) + ($677))|0;
       store4((8816),$676);
       store4((8804),$678);
       $679 = $678 | 1;
       $680 = ((($676)) + 4|0);
       store4($680,$679);
       $681 = (($676) + ($678)|0);
       $682 = ((($681)) + 4|0);
       store4($682,40);
       $683 = load4((9280));
       store4((8820),$683);
       break;
      }
     }
    }
    $684 = load4((8808));
    $685 = ($$748$i>>>0)<($684>>>0);
    if ($685) {
     store4((8808),$$748$i);
     $749 = $$748$i;
    } else {
     $749 = $684;
    }
    $686 = (($$748$i) + ($$723947$i)|0);
    $$124469$i = (9240);
    while(1) {
     $687 = load4($$124469$i);
     $688 = ($687|0)==($686|0);
     if ($688) {
      label = 208;
      break;
     }
     $689 = ((($$124469$i)) + 8|0);
     $690 = load4($689);
     $691 = ($690|0)==(0|0);
     if ($691) {
      $$0$i$i$i = (9240);
      break;
     } else {
      $$124469$i = $690;
     }
    }
    if ((label|0) == 208) {
     $692 = ((($$124469$i)) + 12|0);
     $693 = load4($692);
     $694 = $693 & 8;
     $695 = ($694|0)==(0);
     if ($695) {
      store4($$124469$i,$$748$i);
      $696 = ((($$124469$i)) + 4|0);
      $697 = load4($696);
      $698 = (($697) + ($$723947$i))|0;
      store4($696,$698);
      $699 = ((($$748$i)) + 8|0);
      $700 = $699;
      $701 = $700 & 7;
      $702 = ($701|0)==(0);
      $703 = (0 - ($700))|0;
      $704 = $703 & 7;
      $705 = $702 ? 0 : $704;
      $706 = (($$748$i) + ($705)|0);
      $707 = ((($686)) + 8|0);
      $708 = $707;
      $709 = $708 & 7;
      $710 = ($709|0)==(0);
      $711 = (0 - ($708))|0;
      $712 = $711 & 7;
      $713 = $710 ? 0 : $712;
      $714 = (($686) + ($713)|0);
      $715 = $714;
      $716 = $706;
      $717 = (($715) - ($716))|0;
      $718 = (($706) + ($$0197)|0);
      $719 = (($717) - ($$0197))|0;
      $720 = $$0197 | 3;
      $721 = ((($706)) + 4|0);
      store4($721,$720);
      $722 = ($714|0)==($627|0);
      do {
       if ($722) {
        $723 = load4((8804));
        $724 = (($723) + ($719))|0;
        store4((8804),$724);
        store4((8816),$718);
        $725 = $724 | 1;
        $726 = ((($718)) + 4|0);
        store4($726,$725);
       } else {
        $727 = load4((8812));
        $728 = ($714|0)==($727|0);
        if ($728) {
         $729 = load4((8800));
         $730 = (($729) + ($719))|0;
         store4((8800),$730);
         store4((8812),$718);
         $731 = $730 | 1;
         $732 = ((($718)) + 4|0);
         store4($732,$731);
         $733 = (($718) + ($730)|0);
         store4($733,$730);
         break;
        }
        $734 = ((($714)) + 4|0);
        $735 = load4($734);
        $736 = $735 & 3;
        $737 = ($736|0)==(1);
        if ($737) {
         $738 = $735 & -8;
         $739 = $735 >>> 3;
         $740 = ($735>>>0)<(256);
         L326: do {
          if ($740) {
           $741 = ((($714)) + 8|0);
           $742 = load4($741);
           $743 = ((($714)) + 12|0);
           $744 = load4($743);
           $745 = $739 << 1;
           $746 = (8832 + ($745<<2)|0);
           $747 = ($742|0)==($746|0);
           do {
            if (!($747)) {
             $748 = ($742>>>0)<($749>>>0);
             if ($748) {
              _abort();
              // unreachable;
             }
             $750 = ((($742)) + 12|0);
             $751 = load4($750);
             $752 = ($751|0)==($714|0);
             if ($752) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $753 = ($744|0)==($742|0);
           if ($753) {
            $754 = 1 << $739;
            $755 = $754 ^ -1;
            $756 = load4(8792);
            $757 = $756 & $755;
            store4(8792,$757);
            break;
           }
           $758 = ($744|0)==($746|0);
           do {
            if ($758) {
             $$pre9$i$i = ((($744)) + 8|0);
             $$pre$phi10$i$iZ2D = $$pre9$i$i;
            } else {
             $759 = ($744>>>0)<($749>>>0);
             if ($759) {
              _abort();
              // unreachable;
             }
             $760 = ((($744)) + 8|0);
             $761 = load4($760);
             $762 = ($761|0)==($714|0);
             if ($762) {
              $$pre$phi10$i$iZ2D = $760;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $763 = ((($742)) + 12|0);
           store4($763,$744);
           store4($$pre$phi10$i$iZ2D,$742);
          } else {
           $764 = ((($714)) + 24|0);
           $765 = load4($764);
           $766 = ((($714)) + 12|0);
           $767 = load4($766);
           $768 = ($767|0)==($714|0);
           do {
            if ($768) {
             $778 = ((($714)) + 16|0);
             $779 = ((($778)) + 4|0);
             $780 = load4($779);
             $781 = ($780|0)==(0|0);
             if ($781) {
              $782 = load4($778);
              $783 = ($782|0)==(0|0);
              if ($783) {
               $$3$i$i = 0;
               break;
              } else {
               $$1290$i$i = $782;$$1292$i$i = $778;
              }
             } else {
              $$1290$i$i = $780;$$1292$i$i = $779;
             }
             while(1) {
              $784 = ((($$1290$i$i)) + 20|0);
              $785 = load4($784);
              $786 = ($785|0)==(0|0);
              if (!($786)) {
               $$1290$i$i = $785;$$1292$i$i = $784;
               continue;
              }
              $787 = ((($$1290$i$i)) + 16|0);
              $788 = load4($787);
              $789 = ($788|0)==(0|0);
              if ($789) {
               break;
              } else {
               $$1290$i$i = $788;$$1292$i$i = $787;
              }
             }
             $790 = ($$1292$i$i>>>0)<($749>>>0);
             if ($790) {
              _abort();
              // unreachable;
             } else {
              store4($$1292$i$i,0);
              $$3$i$i = $$1290$i$i;
              break;
             }
            } else {
             $769 = ((($714)) + 8|0);
             $770 = load4($769);
             $771 = ($770>>>0)<($749>>>0);
             if ($771) {
              _abort();
              // unreachable;
             }
             $772 = ((($770)) + 12|0);
             $773 = load4($772);
             $774 = ($773|0)==($714|0);
             if (!($774)) {
              _abort();
              // unreachable;
             }
             $775 = ((($767)) + 8|0);
             $776 = load4($775);
             $777 = ($776|0)==($714|0);
             if ($777) {
              store4($772,$767);
              store4($775,$770);
              $$3$i$i = $767;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $791 = ($765|0)==(0|0);
           if ($791) {
            break;
           }
           $792 = ((($714)) + 28|0);
           $793 = load4($792);
           $794 = (9096 + ($793<<2)|0);
           $795 = load4($794);
           $796 = ($714|0)==($795|0);
           do {
            if ($796) {
             store4($794,$$3$i$i);
             $cond$i$i = ($$3$i$i|0)==(0|0);
             if (!($cond$i$i)) {
              break;
             }
             $797 = 1 << $793;
             $798 = $797 ^ -1;
             $799 = load4((8796));
             $800 = $799 & $798;
             store4((8796),$800);
             break L326;
            } else {
             $801 = load4((8808));
             $802 = ($765>>>0)<($801>>>0);
             if ($802) {
              _abort();
              // unreachable;
             }
             $803 = ((($765)) + 16|0);
             $804 = load4($803);
             $805 = ($804|0)==($714|0);
             if ($805) {
              store4($803,$$3$i$i);
             } else {
              $806 = ((($765)) + 20|0);
              store4($806,$$3$i$i);
             }
             $807 = ($$3$i$i|0)==(0|0);
             if ($807) {
              break L326;
             }
            }
           } while(0);
           $808 = load4((8808));
           $809 = ($$3$i$i>>>0)<($808>>>0);
           if ($809) {
            _abort();
            // unreachable;
           }
           $810 = ((($$3$i$i)) + 24|0);
           store4($810,$765);
           $811 = ((($714)) + 16|0);
           $812 = load4($811);
           $813 = ($812|0)==(0|0);
           do {
            if (!($813)) {
             $814 = ($812>>>0)<($808>>>0);
             if ($814) {
              _abort();
              // unreachable;
             } else {
              $815 = ((($$3$i$i)) + 16|0);
              store4($815,$812);
              $816 = ((($812)) + 24|0);
              store4($816,$$3$i$i);
              break;
             }
            }
           } while(0);
           $817 = ((($811)) + 4|0);
           $818 = load4($817);
           $819 = ($818|0)==(0|0);
           if ($819) {
            break;
           }
           $820 = load4((8808));
           $821 = ($818>>>0)<($820>>>0);
           if ($821) {
            _abort();
            // unreachable;
           } else {
            $822 = ((($$3$i$i)) + 20|0);
            store4($822,$818);
            $823 = ((($818)) + 24|0);
            store4($823,$$3$i$i);
            break;
           }
          }
         } while(0);
         $824 = (($714) + ($738)|0);
         $825 = (($738) + ($719))|0;
         $$0$i18$i = $824;$$0286$i$i = $825;
        } else {
         $$0$i18$i = $714;$$0286$i$i = $719;
        }
        $826 = ((($$0$i18$i)) + 4|0);
        $827 = load4($826);
        $828 = $827 & -2;
        store4($826,$828);
        $829 = $$0286$i$i | 1;
        $830 = ((($718)) + 4|0);
        store4($830,$829);
        $831 = (($718) + ($$0286$i$i)|0);
        store4($831,$$0286$i$i);
        $832 = $$0286$i$i >>> 3;
        $833 = ($$0286$i$i>>>0)<(256);
        if ($833) {
         $834 = $832 << 1;
         $835 = (8832 + ($834<<2)|0);
         $836 = load4(8792);
         $837 = 1 << $832;
         $838 = $836 & $837;
         $839 = ($838|0)==(0);
         do {
          if ($839) {
           $840 = $836 | $837;
           store4(8792,$840);
           $$pre$i19$i = ((($835)) + 8|0);
           $$0294$i$i = $835;$$pre$phi$i20$iZ2D = $$pre$i19$i;
          } else {
           $841 = ((($835)) + 8|0);
           $842 = load4($841);
           $843 = load4((8808));
           $844 = ($842>>>0)<($843>>>0);
           if (!($844)) {
            $$0294$i$i = $842;$$pre$phi$i20$iZ2D = $841;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         store4($$pre$phi$i20$iZ2D,$718);
         $845 = ((($$0294$i$i)) + 12|0);
         store4($845,$718);
         $846 = ((($718)) + 8|0);
         store4($846,$$0294$i$i);
         $847 = ((($718)) + 12|0);
         store4($847,$835);
         break;
        }
        $848 = $$0286$i$i >>> 8;
        $849 = ($848|0)==(0);
        do {
         if ($849) {
          $$0295$i$i = 0;
         } else {
          $850 = ($$0286$i$i>>>0)>(16777215);
          if ($850) {
           $$0295$i$i = 31;
           break;
          }
          $851 = (($848) + 1048320)|0;
          $852 = $851 >>> 16;
          $853 = $852 & 8;
          $854 = $848 << $853;
          $855 = (($854) + 520192)|0;
          $856 = $855 >>> 16;
          $857 = $856 & 4;
          $858 = $857 | $853;
          $859 = $854 << $857;
          $860 = (($859) + 245760)|0;
          $861 = $860 >>> 16;
          $862 = $861 & 2;
          $863 = $858 | $862;
          $864 = (14 - ($863))|0;
          $865 = $859 << $862;
          $866 = $865 >>> 15;
          $867 = (($864) + ($866))|0;
          $868 = $867 << 1;
          $869 = (($867) + 7)|0;
          $870 = $$0286$i$i >>> $869;
          $871 = $870 & 1;
          $872 = $871 | $868;
          $$0295$i$i = $872;
         }
        } while(0);
        $873 = (9096 + ($$0295$i$i<<2)|0);
        $874 = ((($718)) + 28|0);
        store4($874,$$0295$i$i);
        $875 = ((($718)) + 16|0);
        $876 = ((($875)) + 4|0);
        store4($876,0);
        store4($875,0);
        $877 = load4((8796));
        $878 = 1 << $$0295$i$i;
        $879 = $877 & $878;
        $880 = ($879|0)==(0);
        if ($880) {
         $881 = $877 | $878;
         store4((8796),$881);
         store4($873,$718);
         $882 = ((($718)) + 24|0);
         store4($882,$873);
         $883 = ((($718)) + 12|0);
         store4($883,$718);
         $884 = ((($718)) + 8|0);
         store4($884,$718);
         break;
        }
        $885 = load4($873);
        $886 = ($$0295$i$i|0)==(31);
        $887 = $$0295$i$i >>> 1;
        $888 = (25 - ($887))|0;
        $889 = $886 ? 0 : $888;
        $890 = $$0286$i$i << $889;
        $$0287$i$i = $890;$$0288$i$i = $885;
        while(1) {
         $891 = ((($$0288$i$i)) + 4|0);
         $892 = load4($891);
         $893 = $892 & -8;
         $894 = ($893|0)==($$0286$i$i|0);
         if ($894) {
          label = 278;
          break;
         }
         $895 = $$0287$i$i >>> 31;
         $896 = (((($$0288$i$i)) + 16|0) + ($895<<2)|0);
         $897 = $$0287$i$i << 1;
         $898 = load4($896);
         $899 = ($898|0)==(0|0);
         if ($899) {
          label = 275;
          break;
         } else {
          $$0287$i$i = $897;$$0288$i$i = $898;
         }
        }
        if ((label|0) == 275) {
         $900 = load4((8808));
         $901 = ($896>>>0)<($900>>>0);
         if ($901) {
          _abort();
          // unreachable;
         } else {
          store4($896,$718);
          $902 = ((($718)) + 24|0);
          store4($902,$$0288$i$i);
          $903 = ((($718)) + 12|0);
          store4($903,$718);
          $904 = ((($718)) + 8|0);
          store4($904,$718);
          break;
         }
        }
        else if ((label|0) == 278) {
         $905 = ((($$0288$i$i)) + 8|0);
         $906 = load4($905);
         $907 = load4((8808));
         $908 = ($906>>>0)>=($907>>>0);
         $not$$i22$i = ($$0288$i$i>>>0)>=($907>>>0);
         $909 = $908 & $not$$i22$i;
         if ($909) {
          $910 = ((($906)) + 12|0);
          store4($910,$718);
          store4($905,$718);
          $911 = ((($718)) + 8|0);
          store4($911,$906);
          $912 = ((($718)) + 12|0);
          store4($912,$$0288$i$i);
          $913 = ((($718)) + 24|0);
          store4($913,0);
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $1044 = ((($706)) + 8|0);
      $$0 = $1044;
      STACKTOP = sp;return ($$0|0);
     } else {
      $$0$i$i$i = (9240);
     }
    }
    while(1) {
     $914 = load4($$0$i$i$i);
     $915 = ($914>>>0)>($627>>>0);
     if (!($915)) {
      $916 = ((($$0$i$i$i)) + 4|0);
      $917 = load4($916);
      $918 = (($914) + ($917)|0);
      $919 = ($918>>>0)>($627>>>0);
      if ($919) {
       break;
      }
     }
     $920 = ((($$0$i$i$i)) + 8|0);
     $921 = load4($920);
     $$0$i$i$i = $921;
    }
    $922 = ((($918)) + -47|0);
    $923 = ((($922)) + 8|0);
    $924 = $923;
    $925 = $924 & 7;
    $926 = ($925|0)==(0);
    $927 = (0 - ($924))|0;
    $928 = $927 & 7;
    $929 = $926 ? 0 : $928;
    $930 = (($922) + ($929)|0);
    $931 = ((($627)) + 16|0);
    $932 = ($930>>>0)<($931>>>0);
    $933 = $932 ? $627 : $930;
    $934 = ((($933)) + 8|0);
    $935 = ((($933)) + 24|0);
    $936 = (($$723947$i) + -40)|0;
    $937 = ((($$748$i)) + 8|0);
    $938 = $937;
    $939 = $938 & 7;
    $940 = ($939|0)==(0);
    $941 = (0 - ($938))|0;
    $942 = $941 & 7;
    $943 = $940 ? 0 : $942;
    $944 = (($$748$i) + ($943)|0);
    $945 = (($936) - ($943))|0;
    store4((8816),$944);
    store4((8804),$945);
    $946 = $945 | 1;
    $947 = ((($944)) + 4|0);
    store4($947,$946);
    $948 = (($944) + ($945)|0);
    $949 = ((($948)) + 4|0);
    store4($949,40);
    $950 = load4((9280));
    store4((8820),$950);
    $951 = ((($933)) + 4|0);
    store4($951,27);
    ; store8($934,load8((9240),4),4); store8($934+8 | 0,load8((9240)+8 | 0,4),4);
    store4((9240),$$748$i);
    store4((9244),$$723947$i);
    store4((9252),0);
    store4((9248),$934);
    $$0$i$i = $935;
    while(1) {
     $952 = ((($$0$i$i)) + 4|0);
     store4($952,7);
     $953 = ((($952)) + 4|0);
     $954 = ($953>>>0)<($918>>>0);
     if ($954) {
      $$0$i$i = $952;
     } else {
      break;
     }
    }
    $955 = ($933|0)==($627|0);
    if (!($955)) {
     $956 = $933;
     $957 = $627;
     $958 = (($956) - ($957))|0;
     $959 = load4($951);
     $960 = $959 & -2;
     store4($951,$960);
     $961 = $958 | 1;
     $962 = ((($627)) + 4|0);
     store4($962,$961);
     store4($933,$958);
     $963 = $958 >>> 3;
     $964 = ($958>>>0)<(256);
     if ($964) {
      $965 = $963 << 1;
      $966 = (8832 + ($965<<2)|0);
      $967 = load4(8792);
      $968 = 1 << $963;
      $969 = $967 & $968;
      $970 = ($969|0)==(0);
      if ($970) {
       $971 = $967 | $968;
       store4(8792,$971);
       $$pre$i$i = ((($966)) + 8|0);
       $$0211$i$i = $966;$$pre$phi$i$iZ2D = $$pre$i$i;
      } else {
       $972 = ((($966)) + 8|0);
       $973 = load4($972);
       $974 = load4((8808));
       $975 = ($973>>>0)<($974>>>0);
       if ($975) {
        _abort();
        // unreachable;
       } else {
        $$0211$i$i = $973;$$pre$phi$i$iZ2D = $972;
       }
      }
      store4($$pre$phi$i$iZ2D,$627);
      $976 = ((($$0211$i$i)) + 12|0);
      store4($976,$627);
      $977 = ((($627)) + 8|0);
      store4($977,$$0211$i$i);
      $978 = ((($627)) + 12|0);
      store4($978,$966);
      break;
     }
     $979 = $958 >>> 8;
     $980 = ($979|0)==(0);
     if ($980) {
      $$0212$i$i = 0;
     } else {
      $981 = ($958>>>0)>(16777215);
      if ($981) {
       $$0212$i$i = 31;
      } else {
       $982 = (($979) + 1048320)|0;
       $983 = $982 >>> 16;
       $984 = $983 & 8;
       $985 = $979 << $984;
       $986 = (($985) + 520192)|0;
       $987 = $986 >>> 16;
       $988 = $987 & 4;
       $989 = $988 | $984;
       $990 = $985 << $988;
       $991 = (($990) + 245760)|0;
       $992 = $991 >>> 16;
       $993 = $992 & 2;
       $994 = $989 | $993;
       $995 = (14 - ($994))|0;
       $996 = $990 << $993;
       $997 = $996 >>> 15;
       $998 = (($995) + ($997))|0;
       $999 = $998 << 1;
       $1000 = (($998) + 7)|0;
       $1001 = $958 >>> $1000;
       $1002 = $1001 & 1;
       $1003 = $1002 | $999;
       $$0212$i$i = $1003;
      }
     }
     $1004 = (9096 + ($$0212$i$i<<2)|0);
     $1005 = ((($627)) + 28|0);
     store4($1005,$$0212$i$i);
     $1006 = ((($627)) + 20|0);
     store4($1006,0);
     store4($931,0);
     $1007 = load4((8796));
     $1008 = 1 << $$0212$i$i;
     $1009 = $1007 & $1008;
     $1010 = ($1009|0)==(0);
     if ($1010) {
      $1011 = $1007 | $1008;
      store4((8796),$1011);
      store4($1004,$627);
      $1012 = ((($627)) + 24|0);
      store4($1012,$1004);
      $1013 = ((($627)) + 12|0);
      store4($1013,$627);
      $1014 = ((($627)) + 8|0);
      store4($1014,$627);
      break;
     }
     $1015 = load4($1004);
     $1016 = ($$0212$i$i|0)==(31);
     $1017 = $$0212$i$i >>> 1;
     $1018 = (25 - ($1017))|0;
     $1019 = $1016 ? 0 : $1018;
     $1020 = $958 << $1019;
     $$0206$i$i = $1020;$$0207$i$i = $1015;
     while(1) {
      $1021 = ((($$0207$i$i)) + 4|0);
      $1022 = load4($1021);
      $1023 = $1022 & -8;
      $1024 = ($1023|0)==($958|0);
      if ($1024) {
       label = 304;
       break;
      }
      $1025 = $$0206$i$i >>> 31;
      $1026 = (((($$0207$i$i)) + 16|0) + ($1025<<2)|0);
      $1027 = $$0206$i$i << 1;
      $1028 = load4($1026);
      $1029 = ($1028|0)==(0|0);
      if ($1029) {
       label = 301;
       break;
      } else {
       $$0206$i$i = $1027;$$0207$i$i = $1028;
      }
     }
     if ((label|0) == 301) {
      $1030 = load4((8808));
      $1031 = ($1026>>>0)<($1030>>>0);
      if ($1031) {
       _abort();
       // unreachable;
      } else {
       store4($1026,$627);
       $1032 = ((($627)) + 24|0);
       store4($1032,$$0207$i$i);
       $1033 = ((($627)) + 12|0);
       store4($1033,$627);
       $1034 = ((($627)) + 8|0);
       store4($1034,$627);
       break;
      }
     }
     else if ((label|0) == 304) {
      $1035 = ((($$0207$i$i)) + 8|0);
      $1036 = load4($1035);
      $1037 = load4((8808));
      $1038 = ($1036>>>0)>=($1037>>>0);
      $not$$i$i = ($$0207$i$i>>>0)>=($1037>>>0);
      $1039 = $1038 & $not$$i$i;
      if ($1039) {
       $1040 = ((($1036)) + 12|0);
       store4($1040,$627);
       store4($1035,$627);
       $1041 = ((($627)) + 8|0);
       store4($1041,$1036);
       $1042 = ((($627)) + 12|0);
       store4($1042,$$0207$i$i);
       $1043 = ((($627)) + 24|0);
       store4($1043,0);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $1045 = load4((8804));
  $1046 = ($1045>>>0)>($$0197>>>0);
  if ($1046) {
   $1047 = (($1045) - ($$0197))|0;
   store4((8804),$1047);
   $1048 = load4((8816));
   $1049 = (($1048) + ($$0197)|0);
   store4((8816),$1049);
   $1050 = $1047 | 1;
   $1051 = ((($1049)) + 4|0);
   store4($1051,$1050);
   $1052 = $$0197 | 3;
   $1053 = ((($1048)) + 4|0);
   store4($1053,$1052);
   $1054 = ((($1048)) + 8|0);
   $$0 = $1054;
   STACKTOP = sp;return ($$0|0);
  }
 }
 store4(8788,12);
 $$0 = 0;
 STACKTOP = sp;return ($$0|0);
}
function _free($0) {
 $0 = $0|0;
 var $$0211$i = 0, $$0211$in$i = 0, $$0381 = 0, $$0382 = 0, $$0394 = 0, $$0401 = 0, $$1 = 0, $$1380 = 0, $$1385 = 0, $$1388 = 0, $$1396 = 0, $$1400 = 0, $$2 = 0, $$3 = 0, $$3398 = 0, $$pre = 0, $$pre$phi439Z2D = 0, $$pre$phi441Z2D = 0, $$pre$phiZ2D = 0, $$pre438 = 0;
 var $$pre440 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0;
 var $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0;
 var $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0;
 var $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0;
 var $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0;
 var $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0;
 var $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $cond418 = 0, $cond419 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + -8|0);
 $3 = load4((8808));
 $4 = ($2>>>0)<($3>>>0);
 if ($4) {
  _abort();
  // unreachable;
 }
 $5 = ((($0)) + -4|0);
 $6 = load4($5);
 $7 = $6 & 3;
 $8 = ($7|0)==(1);
 if ($8) {
  _abort();
  // unreachable;
 }
 $9 = $6 & -8;
 $10 = (($2) + ($9)|0);
 $11 = $6 & 1;
 $12 = ($11|0)==(0);
 do {
  if ($12) {
   $13 = load4($2);
   $14 = ($7|0)==(0);
   if ($14) {
    return;
   }
   $15 = (0 - ($13))|0;
   $16 = (($2) + ($15)|0);
   $17 = (($13) + ($9))|0;
   $18 = ($16>>>0)<($3>>>0);
   if ($18) {
    _abort();
    // unreachable;
   }
   $19 = load4((8812));
   $20 = ($16|0)==($19|0);
   if ($20) {
    $105 = ((($10)) + 4|0);
    $106 = load4($105);
    $107 = $106 & 3;
    $108 = ($107|0)==(3);
    if (!($108)) {
     $$1 = $16;$$1380 = $17;
     break;
    }
    store4((8800),$17);
    $109 = $106 & -2;
    store4($105,$109);
    $110 = $17 | 1;
    $111 = ((($16)) + 4|0);
    store4($111,$110);
    $112 = (($16) + ($17)|0);
    store4($112,$17);
    return;
   }
   $21 = $13 >>> 3;
   $22 = ($13>>>0)<(256);
   if ($22) {
    $23 = ((($16)) + 8|0);
    $24 = load4($23);
    $25 = ((($16)) + 12|0);
    $26 = load4($25);
    $27 = $21 << 1;
    $28 = (8832 + ($27<<2)|0);
    $29 = ($24|0)==($28|0);
    if (!($29)) {
     $30 = ($24>>>0)<($3>>>0);
     if ($30) {
      _abort();
      // unreachable;
     }
     $31 = ((($24)) + 12|0);
     $32 = load4($31);
     $33 = ($32|0)==($16|0);
     if (!($33)) {
      _abort();
      // unreachable;
     }
    }
    $34 = ($26|0)==($24|0);
    if ($34) {
     $35 = 1 << $21;
     $36 = $35 ^ -1;
     $37 = load4(8792);
     $38 = $37 & $36;
     store4(8792,$38);
     $$1 = $16;$$1380 = $17;
     break;
    }
    $39 = ($26|0)==($28|0);
    if ($39) {
     $$pre440 = ((($26)) + 8|0);
     $$pre$phi441Z2D = $$pre440;
    } else {
     $40 = ($26>>>0)<($3>>>0);
     if ($40) {
      _abort();
      // unreachable;
     }
     $41 = ((($26)) + 8|0);
     $42 = load4($41);
     $43 = ($42|0)==($16|0);
     if ($43) {
      $$pre$phi441Z2D = $41;
     } else {
      _abort();
      // unreachable;
     }
    }
    $44 = ((($24)) + 12|0);
    store4($44,$26);
    store4($$pre$phi441Z2D,$24);
    $$1 = $16;$$1380 = $17;
    break;
   }
   $45 = ((($16)) + 24|0);
   $46 = load4($45);
   $47 = ((($16)) + 12|0);
   $48 = load4($47);
   $49 = ($48|0)==($16|0);
   do {
    if ($49) {
     $59 = ((($16)) + 16|0);
     $60 = ((($59)) + 4|0);
     $61 = load4($60);
     $62 = ($61|0)==(0|0);
     if ($62) {
      $63 = load4($59);
      $64 = ($63|0)==(0|0);
      if ($64) {
       $$3 = 0;
       break;
      } else {
       $$1385 = $63;$$1388 = $59;
      }
     } else {
      $$1385 = $61;$$1388 = $60;
     }
     while(1) {
      $65 = ((($$1385)) + 20|0);
      $66 = load4($65);
      $67 = ($66|0)==(0|0);
      if (!($67)) {
       $$1385 = $66;$$1388 = $65;
       continue;
      }
      $68 = ((($$1385)) + 16|0);
      $69 = load4($68);
      $70 = ($69|0)==(0|0);
      if ($70) {
       break;
      } else {
       $$1385 = $69;$$1388 = $68;
      }
     }
     $71 = ($$1388>>>0)<($3>>>0);
     if ($71) {
      _abort();
      // unreachable;
     } else {
      store4($$1388,0);
      $$3 = $$1385;
      break;
     }
    } else {
     $50 = ((($16)) + 8|0);
     $51 = load4($50);
     $52 = ($51>>>0)<($3>>>0);
     if ($52) {
      _abort();
      // unreachable;
     }
     $53 = ((($51)) + 12|0);
     $54 = load4($53);
     $55 = ($54|0)==($16|0);
     if (!($55)) {
      _abort();
      // unreachable;
     }
     $56 = ((($48)) + 8|0);
     $57 = load4($56);
     $58 = ($57|0)==($16|0);
     if ($58) {
      store4($53,$48);
      store4($56,$51);
      $$3 = $48;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $72 = ($46|0)==(0|0);
   if ($72) {
    $$1 = $16;$$1380 = $17;
   } else {
    $73 = ((($16)) + 28|0);
    $74 = load4($73);
    $75 = (9096 + ($74<<2)|0);
    $76 = load4($75);
    $77 = ($16|0)==($76|0);
    if ($77) {
     store4($75,$$3);
     $cond418 = ($$3|0)==(0|0);
     if ($cond418) {
      $78 = 1 << $74;
      $79 = $78 ^ -1;
      $80 = load4((8796));
      $81 = $80 & $79;
      store4((8796),$81);
      $$1 = $16;$$1380 = $17;
      break;
     }
    } else {
     $82 = load4((8808));
     $83 = ($46>>>0)<($82>>>0);
     if ($83) {
      _abort();
      // unreachable;
     }
     $84 = ((($46)) + 16|0);
     $85 = load4($84);
     $86 = ($85|0)==($16|0);
     if ($86) {
      store4($84,$$3);
     } else {
      $87 = ((($46)) + 20|0);
      store4($87,$$3);
     }
     $88 = ($$3|0)==(0|0);
     if ($88) {
      $$1 = $16;$$1380 = $17;
      break;
     }
    }
    $89 = load4((8808));
    $90 = ($$3>>>0)<($89>>>0);
    if ($90) {
     _abort();
     // unreachable;
    }
    $91 = ((($$3)) + 24|0);
    store4($91,$46);
    $92 = ((($16)) + 16|0);
    $93 = load4($92);
    $94 = ($93|0)==(0|0);
    do {
     if (!($94)) {
      $95 = ($93>>>0)<($89>>>0);
      if ($95) {
       _abort();
       // unreachable;
      } else {
       $96 = ((($$3)) + 16|0);
       store4($96,$93);
       $97 = ((($93)) + 24|0);
       store4($97,$$3);
       break;
      }
     }
    } while(0);
    $98 = ((($92)) + 4|0);
    $99 = load4($98);
    $100 = ($99|0)==(0|0);
    if ($100) {
     $$1 = $16;$$1380 = $17;
    } else {
     $101 = load4((8808));
     $102 = ($99>>>0)<($101>>>0);
     if ($102) {
      _abort();
      // unreachable;
     } else {
      $103 = ((($$3)) + 20|0);
      store4($103,$99);
      $104 = ((($99)) + 24|0);
      store4($104,$$3);
      $$1 = $16;$$1380 = $17;
      break;
     }
    }
   }
  } else {
   $$1 = $2;$$1380 = $9;
  }
 } while(0);
 $113 = ($$1>>>0)<($10>>>0);
 if (!($113)) {
  _abort();
  // unreachable;
 }
 $114 = ((($10)) + 4|0);
 $115 = load4($114);
 $116 = $115 & 1;
 $117 = ($116|0)==(0);
 if ($117) {
  _abort();
  // unreachable;
 }
 $118 = $115 & 2;
 $119 = ($118|0)==(0);
 if ($119) {
  $120 = load4((8816));
  $121 = ($10|0)==($120|0);
  if ($121) {
   $122 = load4((8804));
   $123 = (($122) + ($$1380))|0;
   store4((8804),$123);
   store4((8816),$$1);
   $124 = $123 | 1;
   $125 = ((($$1)) + 4|0);
   store4($125,$124);
   $126 = load4((8812));
   $127 = ($$1|0)==($126|0);
   if (!($127)) {
    return;
   }
   store4((8812),0);
   store4((8800),0);
   return;
  }
  $128 = load4((8812));
  $129 = ($10|0)==($128|0);
  if ($129) {
   $130 = load4((8800));
   $131 = (($130) + ($$1380))|0;
   store4((8800),$131);
   store4((8812),$$1);
   $132 = $131 | 1;
   $133 = ((($$1)) + 4|0);
   store4($133,$132);
   $134 = (($$1) + ($131)|0);
   store4($134,$131);
   return;
  }
  $135 = $115 & -8;
  $136 = (($135) + ($$1380))|0;
  $137 = $115 >>> 3;
  $138 = ($115>>>0)<(256);
  do {
   if ($138) {
    $139 = ((($10)) + 8|0);
    $140 = load4($139);
    $141 = ((($10)) + 12|0);
    $142 = load4($141);
    $143 = $137 << 1;
    $144 = (8832 + ($143<<2)|0);
    $145 = ($140|0)==($144|0);
    if (!($145)) {
     $146 = load4((8808));
     $147 = ($140>>>0)<($146>>>0);
     if ($147) {
      _abort();
      // unreachable;
     }
     $148 = ((($140)) + 12|0);
     $149 = load4($148);
     $150 = ($149|0)==($10|0);
     if (!($150)) {
      _abort();
      // unreachable;
     }
    }
    $151 = ($142|0)==($140|0);
    if ($151) {
     $152 = 1 << $137;
     $153 = $152 ^ -1;
     $154 = load4(8792);
     $155 = $154 & $153;
     store4(8792,$155);
     break;
    }
    $156 = ($142|0)==($144|0);
    if ($156) {
     $$pre438 = ((($142)) + 8|0);
     $$pre$phi439Z2D = $$pre438;
    } else {
     $157 = load4((8808));
     $158 = ($142>>>0)<($157>>>0);
     if ($158) {
      _abort();
      // unreachable;
     }
     $159 = ((($142)) + 8|0);
     $160 = load4($159);
     $161 = ($160|0)==($10|0);
     if ($161) {
      $$pre$phi439Z2D = $159;
     } else {
      _abort();
      // unreachable;
     }
    }
    $162 = ((($140)) + 12|0);
    store4($162,$142);
    store4($$pre$phi439Z2D,$140);
   } else {
    $163 = ((($10)) + 24|0);
    $164 = load4($163);
    $165 = ((($10)) + 12|0);
    $166 = load4($165);
    $167 = ($166|0)==($10|0);
    do {
     if ($167) {
      $178 = ((($10)) + 16|0);
      $179 = ((($178)) + 4|0);
      $180 = load4($179);
      $181 = ($180|0)==(0|0);
      if ($181) {
       $182 = load4($178);
       $183 = ($182|0)==(0|0);
       if ($183) {
        $$3398 = 0;
        break;
       } else {
        $$1396 = $182;$$1400 = $178;
       }
      } else {
       $$1396 = $180;$$1400 = $179;
      }
      while(1) {
       $184 = ((($$1396)) + 20|0);
       $185 = load4($184);
       $186 = ($185|0)==(0|0);
       if (!($186)) {
        $$1396 = $185;$$1400 = $184;
        continue;
       }
       $187 = ((($$1396)) + 16|0);
       $188 = load4($187);
       $189 = ($188|0)==(0|0);
       if ($189) {
        break;
       } else {
        $$1396 = $188;$$1400 = $187;
       }
      }
      $190 = load4((8808));
      $191 = ($$1400>>>0)<($190>>>0);
      if ($191) {
       _abort();
       // unreachable;
      } else {
       store4($$1400,0);
       $$3398 = $$1396;
       break;
      }
     } else {
      $168 = ((($10)) + 8|0);
      $169 = load4($168);
      $170 = load4((8808));
      $171 = ($169>>>0)<($170>>>0);
      if ($171) {
       _abort();
       // unreachable;
      }
      $172 = ((($169)) + 12|0);
      $173 = load4($172);
      $174 = ($173|0)==($10|0);
      if (!($174)) {
       _abort();
       // unreachable;
      }
      $175 = ((($166)) + 8|0);
      $176 = load4($175);
      $177 = ($176|0)==($10|0);
      if ($177) {
       store4($172,$166);
       store4($175,$169);
       $$3398 = $166;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $192 = ($164|0)==(0|0);
    if (!($192)) {
     $193 = ((($10)) + 28|0);
     $194 = load4($193);
     $195 = (9096 + ($194<<2)|0);
     $196 = load4($195);
     $197 = ($10|0)==($196|0);
     if ($197) {
      store4($195,$$3398);
      $cond419 = ($$3398|0)==(0|0);
      if ($cond419) {
       $198 = 1 << $194;
       $199 = $198 ^ -1;
       $200 = load4((8796));
       $201 = $200 & $199;
       store4((8796),$201);
       break;
      }
     } else {
      $202 = load4((8808));
      $203 = ($164>>>0)<($202>>>0);
      if ($203) {
       _abort();
       // unreachable;
      }
      $204 = ((($164)) + 16|0);
      $205 = load4($204);
      $206 = ($205|0)==($10|0);
      if ($206) {
       store4($204,$$3398);
      } else {
       $207 = ((($164)) + 20|0);
       store4($207,$$3398);
      }
      $208 = ($$3398|0)==(0|0);
      if ($208) {
       break;
      }
     }
     $209 = load4((8808));
     $210 = ($$3398>>>0)<($209>>>0);
     if ($210) {
      _abort();
      // unreachable;
     }
     $211 = ((($$3398)) + 24|0);
     store4($211,$164);
     $212 = ((($10)) + 16|0);
     $213 = load4($212);
     $214 = ($213|0)==(0|0);
     do {
      if (!($214)) {
       $215 = ($213>>>0)<($209>>>0);
       if ($215) {
        _abort();
        // unreachable;
       } else {
        $216 = ((($$3398)) + 16|0);
        store4($216,$213);
        $217 = ((($213)) + 24|0);
        store4($217,$$3398);
        break;
       }
      }
     } while(0);
     $218 = ((($212)) + 4|0);
     $219 = load4($218);
     $220 = ($219|0)==(0|0);
     if (!($220)) {
      $221 = load4((8808));
      $222 = ($219>>>0)<($221>>>0);
      if ($222) {
       _abort();
       // unreachable;
      } else {
       $223 = ((($$3398)) + 20|0);
       store4($223,$219);
       $224 = ((($219)) + 24|0);
       store4($224,$$3398);
       break;
      }
     }
    }
   }
  } while(0);
  $225 = $136 | 1;
  $226 = ((($$1)) + 4|0);
  store4($226,$225);
  $227 = (($$1) + ($136)|0);
  store4($227,$136);
  $228 = load4((8812));
  $229 = ($$1|0)==($228|0);
  if ($229) {
   store4((8800),$136);
   return;
  } else {
   $$2 = $136;
  }
 } else {
  $230 = $115 & -2;
  store4($114,$230);
  $231 = $$1380 | 1;
  $232 = ((($$1)) + 4|0);
  store4($232,$231);
  $233 = (($$1) + ($$1380)|0);
  store4($233,$$1380);
  $$2 = $$1380;
 }
 $234 = $$2 >>> 3;
 $235 = ($$2>>>0)<(256);
 if ($235) {
  $236 = $234 << 1;
  $237 = (8832 + ($236<<2)|0);
  $238 = load4(8792);
  $239 = 1 << $234;
  $240 = $238 & $239;
  $241 = ($240|0)==(0);
  if ($241) {
   $242 = $238 | $239;
   store4(8792,$242);
   $$pre = ((($237)) + 8|0);
   $$0401 = $237;$$pre$phiZ2D = $$pre;
  } else {
   $243 = ((($237)) + 8|0);
   $244 = load4($243);
   $245 = load4((8808));
   $246 = ($244>>>0)<($245>>>0);
   if ($246) {
    _abort();
    // unreachable;
   } else {
    $$0401 = $244;$$pre$phiZ2D = $243;
   }
  }
  store4($$pre$phiZ2D,$$1);
  $247 = ((($$0401)) + 12|0);
  store4($247,$$1);
  $248 = ((($$1)) + 8|0);
  store4($248,$$0401);
  $249 = ((($$1)) + 12|0);
  store4($249,$237);
  return;
 }
 $250 = $$2 >>> 8;
 $251 = ($250|0)==(0);
 if ($251) {
  $$0394 = 0;
 } else {
  $252 = ($$2>>>0)>(16777215);
  if ($252) {
   $$0394 = 31;
  } else {
   $253 = (($250) + 1048320)|0;
   $254 = $253 >>> 16;
   $255 = $254 & 8;
   $256 = $250 << $255;
   $257 = (($256) + 520192)|0;
   $258 = $257 >>> 16;
   $259 = $258 & 4;
   $260 = $259 | $255;
   $261 = $256 << $259;
   $262 = (($261) + 245760)|0;
   $263 = $262 >>> 16;
   $264 = $263 & 2;
   $265 = $260 | $264;
   $266 = (14 - ($265))|0;
   $267 = $261 << $264;
   $268 = $267 >>> 15;
   $269 = (($266) + ($268))|0;
   $270 = $269 << 1;
   $271 = (($269) + 7)|0;
   $272 = $$2 >>> $271;
   $273 = $272 & 1;
   $274 = $273 | $270;
   $$0394 = $274;
  }
 }
 $275 = (9096 + ($$0394<<2)|0);
 $276 = ((($$1)) + 28|0);
 store4($276,$$0394);
 $277 = ((($$1)) + 16|0);
 $278 = ((($$1)) + 20|0);
 store4($278,0);
 store4($277,0);
 $279 = load4((8796));
 $280 = 1 << $$0394;
 $281 = $279 & $280;
 $282 = ($281|0)==(0);
 do {
  if ($282) {
   $283 = $279 | $280;
   store4((8796),$283);
   store4($275,$$1);
   $284 = ((($$1)) + 24|0);
   store4($284,$275);
   $285 = ((($$1)) + 12|0);
   store4($285,$$1);
   $286 = ((($$1)) + 8|0);
   store4($286,$$1);
  } else {
   $287 = load4($275);
   $288 = ($$0394|0)==(31);
   $289 = $$0394 >>> 1;
   $290 = (25 - ($289))|0;
   $291 = $288 ? 0 : $290;
   $292 = $$2 << $291;
   $$0381 = $292;$$0382 = $287;
   while(1) {
    $293 = ((($$0382)) + 4|0);
    $294 = load4($293);
    $295 = $294 & -8;
    $296 = ($295|0)==($$2|0);
    if ($296) {
     label = 130;
     break;
    }
    $297 = $$0381 >>> 31;
    $298 = (((($$0382)) + 16|0) + ($297<<2)|0);
    $299 = $$0381 << 1;
    $300 = load4($298);
    $301 = ($300|0)==(0|0);
    if ($301) {
     label = 127;
     break;
    } else {
     $$0381 = $299;$$0382 = $300;
    }
   }
   if ((label|0) == 127) {
    $302 = load4((8808));
    $303 = ($298>>>0)<($302>>>0);
    if ($303) {
     _abort();
     // unreachable;
    } else {
     store4($298,$$1);
     $304 = ((($$1)) + 24|0);
     store4($304,$$0382);
     $305 = ((($$1)) + 12|0);
     store4($305,$$1);
     $306 = ((($$1)) + 8|0);
     store4($306,$$1);
     break;
    }
   }
   else if ((label|0) == 130) {
    $307 = ((($$0382)) + 8|0);
    $308 = load4($307);
    $309 = load4((8808));
    $310 = ($308>>>0)>=($309>>>0);
    $not$ = ($$0382>>>0)>=($309>>>0);
    $311 = $310 & $not$;
    if ($311) {
     $312 = ((($308)) + 12|0);
     store4($312,$$1);
     store4($307,$$1);
     $313 = ((($$1)) + 8|0);
     store4($313,$308);
     $314 = ((($$1)) + 12|0);
     store4($314,$$0382);
     $315 = ((($$1)) + 24|0);
     store4($315,0);
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $316 = load4((8824));
 $317 = (($316) + -1)|0;
 store4((8824),$317);
 $318 = ($317|0)==(0);
 if ($318) {
  $$0211$in$i = (9248);
 } else {
  return;
 }
 while(1) {
  $$0211$i = load4($$0211$in$i);
  $319 = ($$0211$i|0)==(0|0);
  $320 = ((($$0211$i)) + 8|0);
  if ($319) {
   break;
  } else {
   $$0211$in$i = $320;
  }
 }
 store4((8824),-1);
 return;
}
function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((7630|0),(7653|0),304,(7876|0));
 // unreachable;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((7750|0),(7779|0),1183,(7876|0));
 // unreachable;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((7897|0),(7779|0),1194,(7926|0));
 // unreachable;
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = 0, $10 = i64(), $11 = i64(), $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer12 = 0, $vararg_buffer5 = 0, $vararg_buffer9 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, $vararg_ptr8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer12 = sp + 40|0;
 $vararg_buffer9 = sp + 32|0;
 $vararg_buffer5 = sp + 24|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $0 = sp + 44|0;
 $1 = (_pthread_once((9288|0),(2|0))|0);
 $2 = ($1|0)==(0);
 if (!($2)) {
  _abort_message(8222,$vararg_buffer);
  // unreachable;
 }
 $3 = load4(9292);
 $4 = (_pthread_getspecific(($3|0))|0);
 $5 = ($4|0)==(0|0);
 if (!($5)) {
  $6 = load4($4);
  $7 = ($6|0)==(0|0);
  if (!($7)) {
   $8 = ((($6)) + 80|0);
   $9 = ((($6)) + 48|0);
   $10 = load8($9);
   $11 = i64_and($10,i64_const(4294967040,4294967295));
   $12 = i64_eq($11,i64_const(1126902528,1129074247));
   if (!($12)) {
    store4($vararg_buffer9,8083);
    _abort_message(8033,$vararg_buffer9);
    // unreachable;
   }
   $13 = i64_eq($10,i64_const(1126902529,1129074247));
   if ($13) {
    $14 = ((($6)) + 44|0);
    $15 = load4($14);
    $16 = $15;
   } else {
    $16 = $8;
   }
   store4($0,$16);
   $17 = load4($6);
   $18 = ((($17)) + 4|0);
   $19 = load4($18);
   $20 = (__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(1424,$17,$0)|0);
   if ($20) {
    $21 = load4($0);
    $22 = load4($21);
    $23 = ((($22)) + 8|0);
    $24 = load4($23);
    $25 = (FUNCTION_TABLE_ii[$24 & 15]($21)|0);
    store4($vararg_buffer1,8083);
    $vararg_ptr3 = ((($vararg_buffer1)) + 4|0);
    store4($vararg_ptr3,$19);
    $vararg_ptr4 = ((($vararg_buffer1)) + 8|0);
    store4($vararg_ptr4,$25);
    _abort_message(7947,$vararg_buffer1);
    // unreachable;
   } else {
    store4($vararg_buffer5,8083);
    $vararg_ptr8 = ((($vararg_buffer5)) + 4|0);
    store4($vararg_ptr8,$19);
    _abort_message(7992,$vararg_buffer5);
    // unreachable;
   }
  }
 }
 _abort_message(8071,$vararg_buffer12);
 // unreachable;
}
function _abort_message($0,$varargs) {
 $0 = $0|0;
 $varargs = $varargs|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vacopy_currentptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 240|0;
 $1 = sp + 136|0;
 $2 = sp + 96|0;
 $3 = sp;
 $4 = sp + 152|0;
 $5 = sp + 80|0;
 store4($5,$varargs);
 ; store8($2,i64_const(0,0),4); store8($2+8|0,i64_const(0,0),4); store8($2+16|0,i64_const(0,0),4); store8($2+24|0,i64_const(0,0),4); store8($2+32|0,i64_const(0,0),4);
 $vacopy_currentptr = load4($5);
 store4($1,$vacopy_currentptr);
 $6 = (_printf_core(0,$0,$1,$3,$2)|0);
 $7 = ($6|0)<(0);
 if ($7) {
 } else {
  $8 = load4(2048);
  $9 = $8 & 32;
  $10 = load1((2122));
  $11 = ($10<<24>>24)<(1);
  if ($11) {
   $12 = $8 & -33;
   store4(2048,$12);
  }
  $13 = load4((2096));
  $14 = ($13|0)==(0);
  if ($14) {
   $15 = load4((2092));
   store4((2092),$4);
   store4((2076),$4);
   store4((2068),$4);
   store4((2096),80);
   $16 = ((($4)) + 80|0);
   store4((2064),$16);
   (_printf_core(2048,$0,$1,$3,$2)|0);
   $17 = ($15|0)==(0|0);
   if (!($17)) {
    $18 = load4((2084));
    (FUNCTION_TABLE_iiii[$18 & 31](2048,0,0)|0);
    store4((2092),$15);
    store4((2096),0);
    store4((2064),0);
    store4((2076),0);
    store4((2068),0);
   }
  } else {
   (_printf_core(2048,$0,$1,$3,$2)|0);
  }
  $19 = load4(2048);
  $20 = $19 | $9;
  store4(2048,$20);
 }
 $21 = load4((2124));
 $22 = ($21|0)<(0);
 $23 = load1((2123));
 $24 = ($23<<24>>24)==(10);
 do {
  if ($22) {
   if (!($24)) {
    $25 = load4((2068));
    $26 = load4((2064));
    $27 = ($25>>>0)<($26>>>0);
    if ($27) {
     $28 = ((($25)) + 1|0);
     store4((2068),$28);
     store1($25,10);
     break;
    }
   }
   (___overflow()|0);
  } else {
   if (!($24)) {
    $29 = load4((2068));
    $30 = load4((2064));
    $31 = ($29>>>0)<($30>>>0);
    if ($31) {
     $32 = ((($29)) + 1|0);
     store4((2068),$32);
     store1($29,10);
     break;
    }
   }
   (___overflow()|0);
  }
 } while(0);
 _abort();
 // unreachable;
}
function __ZN10__cxxabiv116__shim_type_infoD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv117__class_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$2 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $3 = sp;
 $4 = ($0|0)==($1|0);
 if ($4) {
  $$2 = 1;
 } else {
  $5 = ($1|0)==(0|0);
  if ($5) {
   $$2 = 0;
  } else {
   $6 = (___dynamic_cast($1,1432)|0);
   $7 = ($6|0)==(0|0);
   if ($7) {
    $$2 = 0;
   } else {
    $8 = ((($3)) + 4|0);
    ; store8($8,i64_const(0,0),4); store8($8+8|0,i64_const(0,0),4); store8($8+16|0,i64_const(0,0),4); store8($8+24|0,i64_const(0,0),4); store8($8+32|0,i64_const(0,0),4); store8($8+40|0,i64_const(0,0),4); store4($8+48|0,0,4);
    store4($3,$6);
    $9 = ((($3)) + 8|0);
    store4($9,$0);
    $10 = ((($3)) + 12|0);
    store4($10,-1);
    $11 = ((($3)) + 48|0);
    store4($11,1);
    $12 = load4($6);
    $13 = ((($12)) + 28|0);
    $14 = load4($13);
    $15 = load4($2);
    FUNCTION_TABLE_viiii[$14 & 15]($6,$3,$15,1);
    $16 = ((($3)) + 24|0);
    $17 = load4($16);
    $18 = ($17|0)==(1);
    if ($18) {
     $19 = ((($3)) + 16|0);
     $20 = load4($19);
     store4($2,$20);
     $$0 = 1;
    } else {
     $$0 = 0;
    }
    $$2 = $$0;
   }
  }
 }
 STACKTOP = sp;return ($$2|0);
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 8|0);
 $7 = load4($6);
 $8 = ($0|0)==($7|0);
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($1,$2,$3,$4);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 8|0);
 $6 = load4($5);
 $7 = ($0|0)==($6|0);
 do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==($2|0);
   if ($10) {
    $11 = ((($1)) + 28|0);
    $12 = load4($11);
    $13 = ($12|0)==(1);
    if (!($13)) {
     store4($11,$3);
    }
   }
  } else {
   $14 = load4($1);
   $15 = ($0|0)==($14|0);
   if ($15) {
    $16 = ((($1)) + 16|0);
    $17 = load4($16);
    $18 = ($17|0)==($2|0);
    if (!($18)) {
     $19 = ((($1)) + 20|0);
     $20 = load4($19);
     $21 = ($20|0)==($2|0);
     if (!($21)) {
      $24 = ((($1)) + 32|0);
      store4($24,$3);
      store4($19,$2);
      $25 = ((($1)) + 40|0);
      $26 = load4($25);
      $27 = (($26) + 1)|0;
      store4($25,$27);
      $28 = ((($1)) + 36|0);
      $29 = load4($28);
      $30 = ($29|0)==(1);
      if ($30) {
       $31 = ((($1)) + 24|0);
       $32 = load4($31);
       $33 = ($32|0)==(2);
       if ($33) {
        $34 = ((($1)) + 54|0);
        store1($34,1);
       }
      }
      $35 = ((($1)) + 44|0);
      store4($35,4);
      break;
     }
    }
    $22 = ($3|0)==(1);
    if ($22) {
     $23 = ((($1)) + 32|0);
     store4($23,1);
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 8|0);
 $5 = load4($4);
 $6 = ($0|0)==($5|0);
 if ($6) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($1,$2,$3);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 16|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 do {
  if ($5) {
   store4($3,$1);
   $6 = ((($0)) + 24|0);
   store4($6,$2);
   $7 = ((($0)) + 36|0);
   store4($7,1);
  } else {
   $8 = ($4|0)==($1|0);
   if (!($8)) {
    $12 = ((($0)) + 36|0);
    $13 = load4($12);
    $14 = (($13) + 1)|0;
    store4($12,$14);
    $15 = ((($0)) + 24|0);
    store4($15,2);
    $16 = ((($0)) + 54|0);
    store1($16,1);
    break;
   }
   $9 = ((($0)) + 24|0);
   $10 = load4($9);
   $11 = ($10|0)==(2);
   if ($11) {
    store4($9,$2);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond22 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($0)) + 53|0);
 store1($4,1);
 $5 = ((($0)) + 4|0);
 $6 = load4($5);
 $7 = ($6|0)==($2|0);
 do {
  if ($7) {
   $8 = ((($0)) + 52|0);
   store1($8,1);
   $9 = ((($0)) + 16|0);
   $10 = load4($9);
   $11 = ($10|0)==(0|0);
   if ($11) {
    store4($9,$1);
    $12 = ((($0)) + 24|0);
    store4($12,$3);
    $13 = ((($0)) + 36|0);
    store4($13,1);
    $14 = ((($0)) + 48|0);
    $15 = load4($14);
    $16 = ($15|0)==(1);
    $17 = ($3|0)==(1);
    $or$cond = $17 & $16;
    if (!($or$cond)) {
     break;
    }
    $18 = ((($0)) + 54|0);
    store1($18,1);
    break;
   }
   $19 = ($10|0)==($1|0);
   if (!($19)) {
    $29 = ((($0)) + 36|0);
    $30 = load4($29);
    $31 = (($30) + 1)|0;
    store4($29,$31);
    $32 = ((($0)) + 54|0);
    store1($32,1);
    break;
   }
   $20 = ((($0)) + 24|0);
   $21 = load4($20);
   $22 = ($21|0)==(2);
   if ($22) {
    store4($20,$3);
    $27 = $3;
   } else {
    $27 = $21;
   }
   $23 = ((($0)) + 48|0);
   $24 = load4($23);
   $25 = ($24|0)==(1);
   $26 = ($27|0)==(1);
   $or$cond22 = $26 & $25;
   if ($or$cond22) {
    $28 = ((($0)) + 54|0);
    store1($28,1);
   }
  }
 } while(0);
 return;
}
function ___dynamic_cast($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$ = 0, $$0 = 0, $$33 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond28 = 0, $or$cond30 = 0, $or$cond32 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $2 = sp;
 $3 = load4($0);
 $4 = ((($3)) + -8|0);
 $5 = load4($4);
 $6 = (($0) + ($5)|0);
 $7 = ((($3)) + -4|0);
 $8 = load4($7);
 store4($2,$1);
 $9 = ((($2)) + 4|0);
 store4($9,$0);
 $10 = ((($2)) + 8|0);
 store4($10,1448);
 $11 = ((($2)) + 12|0);
 $12 = ((($2)) + 16|0);
 $13 = ((($2)) + 20|0);
 $14 = ((($2)) + 24|0);
 $15 = ((($2)) + 28|0);
 $16 = ((($2)) + 32|0);
 $17 = ((($2)) + 40|0);
 $18 = ($8|0)==($1|0);
 ; store8($11,i64_const(0,0),4); store8($11+8|0,i64_const(0,0),4); store8($11+16|0,i64_const(0,0),4); store8($11+24|0,i64_const(0,0),4); store8($11+32|0,i64_const(0,0),4); store2($11+40|0,0,2); store1($11+42|0,0,1);
 L1: do {
  if ($18) {
   $19 = ((($2)) + 48|0);
   store4($19,1);
   $20 = load4($1);
   $21 = ((($20)) + 20|0);
   $22 = load4($21);
   FUNCTION_TABLE_viiiiii[$22 & 3]($1,$2,$6,$6,1,0);
   $23 = load4($14);
   $24 = ($23|0)==(1);
   $$ = $24 ? $6 : 0;
   $$0 = $$;
  } else {
   $25 = ((($2)) + 36|0);
   $26 = load4($8);
   $27 = ((($26)) + 24|0);
   $28 = load4($27);
   FUNCTION_TABLE_viiiii[$28 & 7]($8,$2,$6,1,0);
   $29 = load4($25);
   switch ($29|0) {
   case 0:  {
    $30 = load4($17);
    $31 = ($30|0)==(1);
    $32 = load4($15);
    $33 = ($32|0)==(1);
    $or$cond = $31 & $33;
    $34 = load4($16);
    $35 = ($34|0)==(1);
    $or$cond28 = $or$cond & $35;
    $36 = load4($13);
    $$33 = $or$cond28 ? $36 : 0;
    $$0 = $$33;
    break L1;
    break;
   }
   case 1:  {
    break;
   }
   default: {
    $$0 = 0;
    break L1;
   }
   }
   $37 = load4($14);
   $38 = ($37|0)==(1);
   if (!($38)) {
    $39 = load4($17);
    $40 = ($39|0)==(0);
    $41 = load4($15);
    $42 = ($41|0)==(1);
    $or$cond30 = $40 & $42;
    $43 = load4($16);
    $44 = ($43|0)==(1);
    $or$cond32 = $or$cond30 & $44;
    if (!($or$cond32)) {
     $$0 = 0;
     break;
    }
   }
   $45 = load4($12);
   $$0 = $45;
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 8|0);
 $7 = load4($6);
 $8 = ($0|0)==($7|0);
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($1,$2,$3,$4);
 } else {
  $9 = ((($0)) + 8|0);
  $10 = load4($9);
  $11 = load4($10);
  $12 = ((($11)) + 20|0);
  $13 = load4($12);
  FUNCTION_TABLE_viiiiii[$13 & 3]($10,$1,$2,$3,$4,$5);
 }
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$037$off039 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 8|0);
 $6 = load4($5);
 $7 = ($0|0)==($6|0);
 do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==($2|0);
   if ($10) {
    $11 = ((($1)) + 28|0);
    $12 = load4($11);
    $13 = ($12|0)==(1);
    if (!($13)) {
     store4($11,$3);
    }
   }
  } else {
   $14 = load4($1);
   $15 = ($0|0)==($14|0);
   if (!($15)) {
    $49 = ((($0)) + 8|0);
    $50 = load4($49);
    $51 = load4($50);
    $52 = ((($51)) + 24|0);
    $53 = load4($52);
    FUNCTION_TABLE_viiiii[$53 & 7]($50,$1,$2,$3,$4);
    break;
   }
   $16 = ((($1)) + 16|0);
   $17 = load4($16);
   $18 = ($17|0)==($2|0);
   if (!($18)) {
    $19 = ((($1)) + 20|0);
    $20 = load4($19);
    $21 = ($20|0)==($2|0);
    if (!($21)) {
     $24 = ((($1)) + 32|0);
     store4($24,$3);
     $25 = ((($1)) + 44|0);
     $26 = load4($25);
     $27 = ($26|0)==(4);
     if ($27) {
      break;
     }
     $28 = ((($1)) + 52|0);
     store1($28,0);
     $29 = ((($1)) + 53|0);
     store1($29,0);
     $30 = ((($0)) + 8|0);
     $31 = load4($30);
     $32 = load4($31);
     $33 = ((($32)) + 20|0);
     $34 = load4($33);
     FUNCTION_TABLE_viiiiii[$34 & 3]($31,$1,$2,$2,1,$4);
     $35 = load1($29);
     $36 = ($35<<24>>24)==(0);
     if ($36) {
      $$037$off039 = 0;
      label = 13;
     } else {
      $37 = load1($28);
      $not$ = ($37<<24>>24)==(0);
      if ($not$) {
       $$037$off039 = 1;
       label = 13;
      } else {
       label = 17;
      }
     }
     do {
      if ((label|0) == 13) {
       store4($19,$2);
       $38 = ((($1)) + 40|0);
       $39 = load4($38);
       $40 = (($39) + 1)|0;
       store4($38,$40);
       $41 = ((($1)) + 36|0);
       $42 = load4($41);
       $43 = ($42|0)==(1);
       if ($43) {
        $44 = ((($1)) + 24|0);
        $45 = load4($44);
        $46 = ($45|0)==(2);
        if ($46) {
         $47 = ((($1)) + 54|0);
         store1($47,1);
         if ($$037$off039) {
          label = 17;
          break;
         } else {
          $48 = 4;
          break;
         }
        }
       }
       if ($$037$off039) {
        label = 17;
       } else {
        $48 = 4;
       }
      }
     } while(0);
     if ((label|0) == 17) {
      $48 = 3;
     }
     store4($25,$48);
     break;
    }
   }
   $22 = ($3|0)==(1);
   if ($22) {
    $23 = ((($1)) + 32|0);
    store4($23,1);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 8|0);
 $5 = load4($4);
 $6 = ($0|0)==($5|0);
 if ($6) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($1,$2,$3);
 } else {
  $7 = ((($0)) + 8|0);
  $8 = load4($7);
  $9 = load4($8);
  $10 = ((($9)) + 28|0);
  $11 = load4($10);
  FUNCTION_TABLE_viiii[$11 & 15]($8,$1,$2,$3);
 }
 return;
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $0 = 0, $1 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $0 = (_pthread_key_create((9292|0),(16|0))|0);
 $1 = ($0|0)==(0);
 if ($1) {
  STACKTOP = sp;return;
 } else {
  _abort_message(8271,$vararg_buffer);
  // unreachable;
 }
}
function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 _free($0);
 $1 = load4(9292);
 $2 = (_pthread_setspecific(($1|0),(0|0))|0);
 $3 = ($2|0)==(0);
 if ($3) {
  STACKTOP = sp;return;
 } else {
  _abort_message(8321,$vararg_buffer);
  // unreachable;
 }
}
function __ZSt11__terminatePFvvE($0) {
 $0 = $0|0;
 var $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 FUNCTION_TABLE_v[$0 & 3]();
 _abort_message(8374,$vararg_buffer);
 // unreachable;
}
function __ZNSt9bad_allocD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9bad_allocD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZNKSt9bad_alloc4whatEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (8414|0);
}
function __ZN10__cxxabiv123__fundamental_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($0|0)==($1|0);
 return ($3|0);
}
function __ZN10__cxxabiv119__pointer_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$0 = 0, $$4 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $3 = sp;
 $4 = load4($2);
 $5 = load4($4);
 store4($2,$5);
 $6 = ($0|0)==($1|0);
 $7 = ($1|0)==(1560|0);
 $$$i = $6 | $7;
 if ($$$i) {
  $$4 = 1;
 } else {
  $8 = ($1|0)==(0|0);
  if ($8) {
   $$4 = 0;
  } else {
   $9 = (___dynamic_cast($1,1520)|0);
   $10 = ($9|0)==(0|0);
   if ($10) {
    $$4 = 0;
   } else {
    $11 = ((($9)) + 8|0);
    $12 = load4($11);
    $13 = ((($0)) + 8|0);
    $14 = load4($13);
    $15 = $14 ^ -1;
    $16 = $12 & $15;
    $17 = ($16|0)==(0);
    if ($17) {
     $18 = ((($0)) + 12|0);
     $19 = load4($18);
     $20 = ((($9)) + 12|0);
     $21 = load4($20);
     $22 = ($19|0)==($21|0);
     $23 = ($19|0)==(1552|0);
     $or$cond = $23 | $22;
     if ($or$cond) {
      $$4 = 1;
     } else {
      $24 = ($19|0)==(0|0);
      if ($24) {
       $$4 = 0;
      } else {
       $25 = (___dynamic_cast($19,1432)|0);
       $26 = ($25|0)==(0|0);
       if ($26) {
        $$4 = 0;
       } else {
        $27 = load4($20);
        $28 = ($27|0)==(0|0);
        if ($28) {
         $$4 = 0;
        } else {
         $29 = (___dynamic_cast($27,1432)|0);
         $30 = ($29|0)==(0|0);
         if ($30) {
          $$4 = 0;
         } else {
          $31 = ((($3)) + 4|0);
          ; store8($31,i64_const(0,0),4); store8($31+8|0,i64_const(0,0),4); store8($31+16|0,i64_const(0,0),4); store8($31+24|0,i64_const(0,0),4); store8($31+32|0,i64_const(0,0),4); store8($31+40|0,i64_const(0,0),4); store4($31+48|0,0,4);
          store4($3,$29);
          $32 = ((($3)) + 8|0);
          store4($32,$25);
          $33 = ((($3)) + 12|0);
          store4($33,-1);
          $34 = ((($3)) + 48|0);
          store4($34,1);
          $35 = load4($29);
          $36 = ((($35)) + 28|0);
          $37 = load4($36);
          $38 = load4($2);
          FUNCTION_TABLE_viiii[$37 & 15]($29,$3,$38,1);
          $39 = ((($3)) + 24|0);
          $40 = load4($39);
          $41 = ($40|0)==(1);
          if ($41) {
           $42 = ((($3)) + 16|0);
           $43 = load4($42);
           store4($2,$43);
           $$0 = 1;
          } else {
           $$0 = 0;
          }
          $$4 = $$0;
         }
        }
       }
      }
     }
    } else {
     $$4 = 0;
    }
   }
  }
 }
 STACKTOP = sp;return ($$4|0);
}
function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 8|0);
 $7 = load4($6);
 $8 = ($0|0)==($7|0);
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($1,$2,$3,$4);
 } else {
  $9 = ((($1)) + 52|0);
  $10 = load2($9);
  $11 = $10&255;
  $12 = ((($1)) + 53|0);
  $13 = ($10&65535) >>> 8;
  $14 = $13&255;
  $15 = ((($0)) + 16|0);
  $16 = ((($0)) + 12|0);
  $17 = load4($16);
  $18 = (((($0)) + 16|0) + ($17<<3)|0);
  store1($9,0);
  store1($12,0);
  __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($15,$1,$2,$3,$4,$5);
  $19 = ($17|0)>(1);
  L4: do {
   if ($19) {
    $20 = ((($0)) + 24|0);
    $21 = ((($1)) + 24|0);
    $22 = ((($0)) + 8|0);
    $23 = ((($1)) + 54|0);
    $$0 = $20;
    while(1) {
     $24 = load1($23);
     $25 = ($24<<24>>24)==(0);
     if (!($25)) {
      break L4;
     }
     $26 = load2($9);
     $27 = $26&255;
     $28 = ($27<<24>>24)==(0);
     if ($28) {
      $34 = ($26&65535)<(256);
      if (!($34)) {
       $35 = load4($22);
       $36 = $35 & 1;
       $37 = ($36|0)==(0);
       if ($37) {
        break L4;
       }
      }
     } else {
      $29 = load4($21);
      $30 = ($29|0)==(1);
      if ($30) {
       break L4;
      }
      $31 = load4($22);
      $32 = $31 & 2;
      $33 = ($32|0)==(0);
      if ($33) {
       break L4;
      }
     }
     store1($9,0);
     store1($12,0);
     __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($$0,$1,$2,$3,$4,$5);
     $38 = ((($$0)) + 8|0);
     $39 = ($38>>>0)<($18>>>0);
     if ($39) {
      $$0 = $38;
     } else {
      break;
     }
    }
   }
  } while(0);
  store1($9,$11);
  store1($12,$14);
 }
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0 = 0, $$081$off06 = 0, $$0845 = 0, $$085$off0$lcssa = 0, $$085$off04 = 0, $$1 = 0, $$182$off0 = 0, $$186$off0 = 0, $$2 = 0, $$283$off0 = 0, $$283$off016 = 0, $$283$off017 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 8|0);
 $6 = load4($5);
 $7 = ($0|0)==($6|0);
 L1: do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==($2|0);
   if ($10) {
    $11 = ((($1)) + 28|0);
    $12 = load4($11);
    $13 = ($12|0)==(1);
    if (!($13)) {
     store4($11,$3);
    }
   }
  } else {
   $14 = load4($1);
   $15 = ($0|0)==($14|0);
   if (!($15)) {
    $63 = ((($0)) + 16|0);
    $64 = ((($0)) + 12|0);
    $65 = load4($64);
    $66 = (((($0)) + 16|0) + ($65<<3)|0);
    __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($63,$1,$2,$3,$4);
    $67 = ((($0)) + 24|0);
    $68 = ($65|0)>(1);
    if (!($68)) {
     break;
    }
    $69 = ((($0)) + 8|0);
    $70 = load4($69);
    $71 = $70 & 2;
    $72 = ($71|0)==(0);
    if ($72) {
     $73 = ((($1)) + 36|0);
     $74 = load4($73);
     $75 = ($74|0)==(1);
     if (!($75)) {
      $81 = $70 & 1;
      $82 = ($81|0)==(0);
      if ($82) {
       $85 = ((($1)) + 54|0);
       $$2 = $67;
       while(1) {
        $94 = load1($85);
        $95 = ($94<<24>>24)==(0);
        if (!($95)) {
         break L1;
        }
        $96 = load4($73);
        $97 = ($96|0)==(1);
        if ($97) {
         break L1;
        }
        __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($$2,$1,$2,$3,$4);
        $98 = ((($$2)) + 8|0);
        $99 = ($98>>>0)<($66>>>0);
        if ($99) {
         $$2 = $98;
        } else {
         break L1;
        }
       }
      }
      $83 = ((($1)) + 24|0);
      $84 = ((($1)) + 54|0);
      $$1 = $67;
      while(1) {
       $86 = load1($84);
       $87 = ($86<<24>>24)==(0);
       if (!($87)) {
        break L1;
       }
       $88 = load4($73);
       $89 = ($88|0)==(1);
       if ($89) {
        $90 = load4($83);
        $91 = ($90|0)==(1);
        if ($91) {
         break L1;
        }
       }
       __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($$1,$1,$2,$3,$4);
       $92 = ((($$1)) + 8|0);
       $93 = ($92>>>0)<($66>>>0);
       if ($93) {
        $$1 = $92;
       } else {
        break L1;
       }
      }
     }
    }
    $76 = ((($1)) + 54|0);
    $$0 = $67;
    while(1) {
     $77 = load1($76);
     $78 = ($77<<24>>24)==(0);
     if (!($78)) {
      break L1;
     }
     __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($$0,$1,$2,$3,$4);
     $79 = ((($$0)) + 8|0);
     $80 = ($79>>>0)<($66>>>0);
     if ($80) {
      $$0 = $79;
     } else {
      break L1;
     }
    }
   }
   $16 = ((($1)) + 16|0);
   $17 = load4($16);
   $18 = ($17|0)==($2|0);
   if (!($18)) {
    $19 = ((($1)) + 20|0);
    $20 = load4($19);
    $21 = ($20|0)==($2|0);
    if (!($21)) {
     $24 = ((($1)) + 32|0);
     store4($24,$3);
     $25 = ((($1)) + 44|0);
     $26 = load4($25);
     $27 = ($26|0)==(4);
     if ($27) {
      break;
     }
     $28 = ((($0)) + 12|0);
     $29 = load4($28);
     $30 = (((($0)) + 16|0) + ($29<<3)|0);
     $31 = ((($1)) + 52|0);
     $32 = ((($1)) + 53|0);
     $33 = ((($1)) + 54|0);
     $34 = ((($0)) + 8|0);
     $35 = ((($1)) + 24|0);
     $36 = ($29|0)>(0);
     L34: do {
      if ($36) {
       $37 = ((($0)) + 16|0);
       $$081$off06 = 0;$$0845 = $37;$$085$off04 = 0;
       L36: while(1) {
        store1($31,0);
        store1($32,0);
        __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($$0845,$1,$2,$2,1,$4);
        $38 = load1($33);
        $39 = ($38<<24>>24)==(0);
        if (!($39)) {
         $$085$off0$lcssa = $$085$off04;$$283$off0 = $$081$off06;
         break;
        }
        $40 = load1($32);
        $41 = ($40<<24>>24)==(0);
        do {
         if ($41) {
          $$182$off0 = $$081$off06;$$186$off0 = $$085$off04;
         } else {
          $42 = load1($31);
          $43 = ($42<<24>>24)==(0);
          if ($43) {
           $49 = load4($34);
           $50 = $49 & 1;
           $51 = ($50|0)==(0);
           if ($51) {
            $$085$off0$lcssa = $$085$off04;$$283$off0 = 1;
            break L36;
           } else {
            $$182$off0 = 1;$$186$off0 = $$085$off04;
            break;
           }
          }
          $44 = load4($35);
          $45 = ($44|0)==(1);
          if ($45) {
           label = 25;
           break L34;
          }
          $46 = load4($34);
          $47 = $46 & 2;
          $48 = ($47|0)==(0);
          if ($48) {
           label = 25;
           break L34;
          } else {
           $$182$off0 = 1;$$186$off0 = 1;
          }
         }
        } while(0);
        $52 = ((($$0845)) + 8|0);
        $53 = ($52>>>0)<($30>>>0);
        if ($53) {
         $$081$off06 = $$182$off0;$$0845 = $52;$$085$off04 = $$186$off0;
        } else {
         $$085$off0$lcssa = $$186$off0;$$283$off0 = $$182$off0;
         break;
        }
       }
       if ($$085$off0$lcssa) {
        $$283$off017 = $$283$off0;
        label = 24;
       } else {
        $$283$off016 = $$283$off0;
        label = 21;
       }
      } else {
       $$283$off016 = 0;
       label = 21;
      }
     } while(0);
     if ((label|0) == 21) {
      store4($19,$2);
      $54 = ((($1)) + 40|0);
      $55 = load4($54);
      $56 = (($55) + 1)|0;
      store4($54,$56);
      $57 = ((($1)) + 36|0);
      $58 = load4($57);
      $59 = ($58|0)==(1);
      if ($59) {
       $60 = load4($35);
       $61 = ($60|0)==(2);
       if ($61) {
        store1($33,1);
        if ($$283$off016) {
         label = 25;
        } else {
         $62 = 4;
        }
       } else {
        $$283$off017 = $$283$off016;
        label = 24;
       }
      } else {
       $$283$off017 = $$283$off016;
       label = 24;
      }
     }
     if ((label|0) == 24) {
      if ($$283$off017) {
       label = 25;
      } else {
       $62 = 4;
      }
     }
     if ((label|0) == 25) {
      $62 = 3;
     }
     store4($25,$62);
     break;
    }
   }
   $22 = ($3|0)==(1);
   if ($22) {
    $23 = ((($1)) + 32|0);
    store4($23,1);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 8|0);
 $5 = load4($4);
 $6 = ($0|0)==($5|0);
 L1: do {
  if ($6) {
   __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($1,$2,$3);
  } else {
   $7 = ((($0)) + 16|0);
   $8 = ((($0)) + 12|0);
   $9 = load4($8);
   $10 = (((($0)) + 16|0) + ($9<<3)|0);
   __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($7,$1,$2,$3);
   $11 = ($9|0)>(1);
   if ($11) {
    $12 = ((($0)) + 24|0);
    $13 = ((($1)) + 54|0);
    $$0 = $12;
    while(1) {
     __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($$0,$1,$2,$3);
     $14 = load1($13);
     $15 = ($14<<24>>24)==(0);
     if (!($15)) {
      break L1;
     }
     $16 = ((($$0)) + 8|0);
     $17 = ($16>>>0)<($10>>>0);
     if ($17) {
      $$0 = $16;
     } else {
      break;
     }
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($0)) + 4|0);
 $5 = load4($4);
 $6 = $5 >> 8;
 $7 = $5 & 1;
 $8 = ($7|0)==(0);
 if ($8) {
  $$0 = $6;
 } else {
  $9 = load4($2);
  $10 = (($9) + ($6)|0);
  $11 = load4($10);
  $$0 = $11;
 }
 $12 = load4($0);
 $13 = load4($12);
 $14 = ((($13)) + 28|0);
 $15 = load4($14);
 $16 = (($2) + ($$0)|0);
 $17 = $5 & 2;
 $18 = ($17|0)!=(0);
 $19 = $18 ? $3 : 2;
 FUNCTION_TABLE_viiii[$15 & 15]($12,$1,$16,$19);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($0)) + 4|0);
 $7 = load4($6);
 $8 = $7 >> 8;
 $9 = $7 & 1;
 $10 = ($9|0)==(0);
 if ($10) {
  $$0 = $8;
 } else {
  $11 = load4($3);
  $12 = (($11) + ($8)|0);
  $13 = load4($12);
  $$0 = $13;
 }
 $14 = load4($0);
 $15 = load4($14);
 $16 = ((($15)) + 20|0);
 $17 = load4($16);
 $18 = (($3) + ($$0)|0);
 $19 = $7 & 2;
 $20 = ($19|0)!=(0);
 $21 = $20 ? $4 : 2;
 FUNCTION_TABLE_viiiiii[$17 & 3]($14,$1,$2,$18,$21,$5);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($0)) + 4|0);
 $6 = load4($5);
 $7 = $6 >> 8;
 $8 = $6 & 1;
 $9 = ($8|0)==(0);
 if ($9) {
  $$0 = $7;
 } else {
  $10 = load4($2);
  $11 = (($10) + ($7)|0);
  $12 = load4($11);
  $$0 = $12;
 }
 $13 = load4($0);
 $14 = load4($13);
 $15 = ((($14)) + 24|0);
 $16 = load4($15);
 $17 = (($2) + ($$0)|0);
 $18 = $6 & 2;
 $19 = ($18|0)!=(0);
 $20 = $19 ? $3 : 2;
 FUNCTION_TABLE_viiiii[$16 & 7]($13,$1,$17,$20,$4);
 return;
}
function ___cxa_can_catch($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($2);
 store4($3,$4);
 $5 = load4($0);
 $6 = ((($5)) + 16|0);
 $7 = load4($6);
 $8 = (FUNCTION_TABLE_iiii[$7 & 31]($0,$1,$3)|0);
 $9 = $8&1;
 if ($8) {
  $10 = load4($3);
  store4($2,$10);
 }
 STACKTOP = sp;return ($9|0);
}
function ___cxa_is_pointer_type($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  $4 = 0;
 } else {
  $2 = (___dynamic_cast($0,1520)|0);
  $phitmp = ($2|0)!=(0|0);
  $4 = $phitmp;
 }
 $3 = $4&1;
 return ($3|0);
}
function runPostSets() {
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0;
    end = (ptr + num)|0;

    value = value & 0xff;
    if ((num|0) >= 67 /* 64 bytes for an unrolled loop + 3 bytes for unaligned head*/) {
      while ((ptr&3) != 0) {
        HEAP8[((ptr)>>0)]=value;
        ptr = (ptr+1)|0;
      }

      aligned_end = (end & -4)|0;
      block_aligned_end = (aligned_end - 64)|0;
      value4 = value | (value << 8) | (value << 16) | (value << 24);

      while((ptr|0) <= (block_aligned_end|0)) {
        HEAP32[((ptr)>>2)]=value4;
        HEAP32[(((ptr)+(4))>>2)]=value4;
        HEAP32[(((ptr)+(8))>>2)]=value4;
        HEAP32[(((ptr)+(12))>>2)]=value4;
        HEAP32[(((ptr)+(16))>>2)]=value4;
        HEAP32[(((ptr)+(20))>>2)]=value4;
        HEAP32[(((ptr)+(24))>>2)]=value4;
        HEAP32[(((ptr)+(28))>>2)]=value4;
        HEAP32[(((ptr)+(32))>>2)]=value4;
        HEAP32[(((ptr)+(36))>>2)]=value4;
        HEAP32[(((ptr)+(40))>>2)]=value4;
        HEAP32[(((ptr)+(44))>>2)]=value4;
        HEAP32[(((ptr)+(48))>>2)]=value4;
        HEAP32[(((ptr)+(52))>>2)]=value4;
        HEAP32[(((ptr)+(56))>>2)]=value4;
        HEAP32[(((ptr)+(60))>>2)]=value4;
        ptr = (ptr + 64)|0;
      }

      while ((ptr|0) < (aligned_end|0) ) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    // The remaining bytes.
    while ((ptr|0) < (end|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (end-num)|0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    var aligned_dest_end = 0;
    var block_aligned_dest_end = 0;
    var dest_end = 0;
    // Test against a benchmarked cutoff limit for when HEAPU8.set() becomes faster to use.
    if ((num|0) >=
      8192
    ) {
      return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    }

    ret = dest|0;
    dest_end = (dest + num)|0;
    if ((dest&3) == (src&3)) {
      // The initial unaligned < 4-byte front.
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      aligned_dest_end = (dest_end & -4)|0;
      block_aligned_dest_end = (aligned_dest_end - 64)|0;
      while ((dest|0) <= (block_aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        HEAP32[(((dest)+(4))>>2)]=((HEAP32[(((src)+(4))>>2)])|0);
        HEAP32[(((dest)+(8))>>2)]=((HEAP32[(((src)+(8))>>2)])|0);
        HEAP32[(((dest)+(12))>>2)]=((HEAP32[(((src)+(12))>>2)])|0);
        HEAP32[(((dest)+(16))>>2)]=((HEAP32[(((src)+(16))>>2)])|0);
        HEAP32[(((dest)+(20))>>2)]=((HEAP32[(((src)+(20))>>2)])|0);
        HEAP32[(((dest)+(24))>>2)]=((HEAP32[(((src)+(24))>>2)])|0);
        HEAP32[(((dest)+(28))>>2)]=((HEAP32[(((src)+(28))>>2)])|0);
        HEAP32[(((dest)+(32))>>2)]=((HEAP32[(((src)+(32))>>2)])|0);
        HEAP32[(((dest)+(36))>>2)]=((HEAP32[(((src)+(36))>>2)])|0);
        HEAP32[(((dest)+(40))>>2)]=((HEAP32[(((src)+(40))>>2)])|0);
        HEAP32[(((dest)+(44))>>2)]=((HEAP32[(((src)+(44))>>2)])|0);
        HEAP32[(((dest)+(48))>>2)]=((HEAP32[(((src)+(48))>>2)])|0);
        HEAP32[(((dest)+(52))>>2)]=((HEAP32[(((src)+(52))>>2)])|0);
        HEAP32[(((dest)+(56))>>2)]=((HEAP32[(((src)+(56))>>2)])|0);
        HEAP32[(((dest)+(60))>>2)]=((HEAP32[(((src)+(60))>>2)])|0);
        dest = (dest+64)|0;
        src = (src+64)|0;
      }
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    } else {
      // In the unaligned copy case, unroll a bit as well.
      aligned_dest_end = (dest_end - 4)|0;
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        HEAP8[(((dest)+(1))>>0)]=((HEAP8[(((src)+(1))>>0)])|0);
        HEAP8[(((dest)+(2))>>0)]=((HEAP8[(((src)+(2))>>0)])|0);
        HEAP8[(((dest)+(3))>>0)]=((HEAP8[(((src)+(3))>>0)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    }
    // The remaining unaligned < 4 byte tail.
    while ((dest|0) < (dest_end|0)) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
    }
    return ret|0;
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
function _memmove(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if (((src|0) < (dest|0)) & ((dest|0) < ((src + num)|0))) {
      // Unlikely case: Copy backwards in a safe manner
      ret = dest;
      src = (src + num)|0;
      dest = (dest + num)|0;
      while ((num|0) > 0) {
        dest = (dest - 1)|0;
        src = (src - 1)|0;
        num = (num - 1)|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      }
      dest = ret;
    } else {
      _memcpy(dest, src, num) | 0;
    }
    return dest | 0;
}

  
function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&31](a1|0,a2|0,a3|0)|0;
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&7](a1|0,a2|0,a3|0,a4|0,a5|0);
}


function dynCall_i(index) {
  index = index|0;
  
  return FUNCTION_TABLE_i[index&7]()|0;
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&31](a1|0);
}


function dynCall_vii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  FUNCTION_TABLE_vii[index&3](a1|0,a2|0);
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&15](a1|0)|0;
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&31](a1|0,a2|0,a3|0);
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&3]();
}


function dynCall_iiiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  return FUNCTION_TABLE_iiiii[index&7](a1|0,a2|0,a3|0,a4|0)|0;
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_iii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  return FUNCTION_TABLE_iii[index&15](a1|0,a2|0)|0;
}


function dynCall_iiiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  return FUNCTION_TABLE_iiiiii[index&1](a1|0,a2|0,a3|0,a4|0,a5|0)|0;
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&15](a1|0,a2|0,a3|0,a4|0);
}

function b0(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(0);return 0;
}
function b1(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; abort(1);
}
function b2() {
 ; abort(2);return 0;
}
function b3(p0) {
 p0 = p0|0; abort(3);
}
function b4(p0,p1) {
 p0 = p0|0;p1 = p1|0; abort(4);
}
function b5(p0) {
 p0 = p0|0; abort(5);return 0;
}
function b6(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(6);
}
function b7() {
 ; abort(7);
}
function b8(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; abort(8);return 0;
}
function b9(p0,p1,p2,p3,p4,p5) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0; abort(9);
}
function b10(p0,p1) {
 p0 = p0|0;p1 = p1|0; abort(10);return 0;
}
function b11(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; abort(11);return 0;
}
function b12(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; abort(12);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorI5VNodeNS3_9allocatorIS5_EEEEjES2_SA_JjEE6invokeEPSC_PS8_j,__ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3setERS7_jRKS4_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbEE6invokeEPFS2_S9_bEPNS0_11BindingTypeIS9_EUt_Eb,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES2_EE6invokeEPFS2_S9_S2_EPNS0_11BindingTypeIS9_EUt_EPS2_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES9_EE6invokeEPFS2_S9_S9_EPNS0_11BindingTypeIS9_EUt_ESG_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataEE6invokeEPFS2_S9_SA_EPNS0_11BindingTypeIS9_EUt_EPSA_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_SC_EPNS0_11BindingTypeIS9_EUt_EPSC_,__ZN10emscripten8internal7InvokerI5VNodeJRS2_S3_EE6invokeEPFS2_S3_S3_EPS2_S7_,__ZN10emscripten8internal7InvokerI5VNodeJNS_3valERS2_EE6invokeEPFS2_S3_S4_EPNS0_7_EM_VALEPS2_,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__Z6h_stdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_9VNodeDataNS_6vectorI5VNodeNS3_IS8_EEEE,b1,b1,b1];
var FUNCTION_TABLE_i = [b2,__ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newI9VNodeDataJEEEPT_DpOT0_,__ZN10emscripten8internal15raw_constructorI5VNodeJEEEPT_DpNS0_11BindingTypeIT0_E8WireTypeE,__ZN10emscripten8internal12operator_newINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEEEPT_DpOT0_,b2,b2];
var FUNCTION_TABLE_vi = [b3,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,__ZN10__cxxabiv119__pointer_type_infoD0Ev,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,__ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEEEvPT_,__ZN10emscripten8internal14raw_destructorI9VNodeDataEEvPT_,__ZN10emscripten8internal14raw_destructorI5VNodeEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEvPT_,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3];
var FUNCTION_TABLE_vii = [b4,__ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE9push_backERKS1_,__Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE,__Z8to_VNodeN10emscripten3valE];
var FUNCTION_TABLE_ii = [b5,___stdio_close,__ZNKSt9bad_alloc4whatEv,__ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE,__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv,__ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEJEE6invokeEPFSH_vE,__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbNS_4lessIS6_EENS4_INS_4pairIKS6_bEEEEE4sizeEv,__ZN10emscripten8internal13getActualTypeI9VNodeDataEEPKvPT_,__ZN10emscripten8internal7InvokerIP9VNodeDataJEE6invokeEPFS3_vE,__ZN10emscripten8internal13getActualTypeINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEE6invokeEPFS8_vE,__ZNKSt3__26vectorI5VNodeNS_9allocatorIS1_EEE4sizeEv,b5,b5];
var FUNCTION_TABLE_viii = [b6,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEE3setERSG_RSD_RKb,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEEE7setWireIS2_EEvRKMS2_SH_RT_PSH_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEEE7setWireIS2_EEvRKMS2_SH_RT_PSH_,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E,__ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7setWireIS2_EEvRKMS2_S3_RT_PS3_,__ZN10emscripten8internal12MemberAccessI5VNodeNS_3valEE7setWireIS2_EEvRKMS2_S3_RT_PNS0_7_EM_VALE,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7setWireIS2_EEvRKMS2_S7_RT_PS7_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvRKS4_EvPS7_JS9_EE6invokeERKSB_SC_PS4_,__ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6resizeEjRKS1_,__Z4h_tiNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEb,__Z4h_snNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE5VNode,__Z4h_stNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_,__Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData,__Z4h_scNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_6vectorI5VNodeNS3_IS7_EEEE,__Z11patch_vnodeR5VNodeS0_,__Z13patch_elementN10emscripten3valER5VNode,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
,b6,b6,b6];
var FUNCTION_TABLE_v = [b7,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b7];
var FUNCTION_TABLE_iiiii = [b8,__ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEjRKS4_EbS8_JjSA_EE6invokeEPSC_PS7_jPS4_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataS2_EE6invokeEPFS2_S9_SA_S2_EPNS0_11BindingTypeIS9_EUt_EPSA_PS2_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataS9_EE6invokeEPFS2_S9_SA_S9_EPNS0_11BindingTypeIS9_EUt_EPSA_SH_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataNS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_SA_SD_EPNS0_11BindingTypeIS9_EUt_EPSA_PSD_,b8,b8,b8];
var FUNCTION_TABLE_viiiiii = [b9,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib];
var FUNCTION_TABLE_iii = [b10,__ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_,__ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEE3getERKSG_RSD_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEEE7getWireIS2_EEPSH_RKMS2_SH_RKT_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEEE7getWireIS2_EEPSH_RKMS2_SH_RKT_,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_,__ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7getWireIS2_EEPS3_RKMS2_S3_RKT_,__ZN10emscripten8internal12MemberAccessI5VNodeNS_3valEE7getWireIS2_EEPNS0_7_EM_VALERKMS2_S3_RKT_,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7getWireIS2_EEPS7_RKMS2_S7_RKT_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEKFjvEjPKS7_JEE6invokeERKS9_SB_,__ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3getERKS7_j,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE6invokeEPFS2_S9_EPNS0_11BindingTypeIS9_EUt_E,__ZN10emscripten8internal7InvokerI5VNodeJNS_3valEEE6invokeEPFS2_S3_EPNS0_7_EM_VALE];
var FUNCTION_TABLE_iiiiii = [b11,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES9_9VNodeDataNS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_S9_SA_SD_EPNS0_11BindingTypeIS9_EUt_ESK_PSA_PSD_];
var FUNCTION_TABLE_viiii = [b12,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_,__ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEERSD_RKbEvSH_JSI_SK_EE6invokeEPSM_PSG_PNS0_11BindingTypeIS9_EUt_Eb,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvjRKS4_EvPS7_JjS9_EE6invokeERKSB_SC_jPS4_,__Z5h_sdnNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData5VNode,__Z5h_sdtNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataS5_,__Z5h_sdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataNS_6vectorI5VNodeNS3_IS8_EEEE,b12,b12,b12,b12,b12,b12];

  return { _sbrk: _sbrk, ___cxa_can_catch: ___cxa_can_catch, _free: _free, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _memmove: _memmove, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, ___getTypeName: ___getTypeName, __GLOBAL__sub_I_app_cpp: __GLOBAL__sub_I_app_cpp, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, runPostSets: runPostSets, _emscripten_replace_memory: _emscripten_replace_memory, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setTempRet0: setTempRet0, getTempRet0: getTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_i: dynCall_i, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
;