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

function __ZNK5VNode12get_childrenEv($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$09 = 0, $$in = 0, $$pre = 0, $$pre10 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,0);
 $2 = ((($0)) + 4|0);
 store4($2,0);
 $3 = ((($0)) + 8|0);
 store4($3,0);
 $4 = ((($1)) + 100|0);
 $5 = ((($1)) + 104|0);
 $6 = load4($5);
 $7 = load4($4);
 $8 = ($6|0)==($7|0);
 if ($8) {
  return;
 }
 $9 = ((($0)) + 8|0);
 $$09 = 0;$$in = $7;$14 = 0;$15 = 0;
 while(1) {
  $10 = $$in;
  $11 = (($10) + ($$09<<2)|0);
  $12 = load4($11);
  $13 = ($14|0)==($15|0);
  if ($13) {
   __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE21__push_back_slow_pathIRKS1_EEvOT_($0,$12);
  } else {
   __ZN5VNodeC2ERKS_($14,$12);
   $16 = ((($14)) + 112|0);
   store4($2,$16);
  }
  $17 = (($$09) + 1)|0;
  $18 = load4($5);
  $19 = load4($4);
  $20 = (($18) - ($19))|0;
  $21 = $20 >> 2;
  $22 = ($17>>>0)<($21>>>0);
  if (!($22)) {
   break;
  }
  $$pre = load4($2);
  $$pre10 = load4($9);
  $$09 = $17;$$in = $19;$14 = $$pre;$15 = $$pre10;
 }
 return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE9push_backERKS1_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = ((($0)) + 8|0);
 $5 = load4($4);
 $6 = ($3|0)==($5|0);
 if ($6) {
  __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE21__push_back_slow_pathIRKS1_EEvOT_($0,$1);
  return;
 } else {
  __ZN5VNodeC2ERKS_($3,$1);
  $7 = load4($2);
  $8 = ((($7)) + 112|0);
  store4($2,$8);
  return;
 }
}
function __ZN5VNode12set_childrenENSt3__26vectorIS_NS0_9allocatorIS_EEEE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __Z7tagNameN10emscripten3valE($0,$$0$0$val) {
 $0 = $0|0;
 $$0$0$val = $$0$0$val|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (__emval_new_cstring((2894|0))|0);
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
     $15 = load4(10072);
     $16 = (($15) + 0)|0;
     store4(10072,$16);
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
 $2 = (__emval_new_cstring((2902|0))|0);
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
 $1 = (__emval_new_cstring((2902|0))|0);
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
  if (((((2923) & 3)|0)==(0))) {
   $$015$lcssa$i = 2923;
   label = 4;
  } else {
   $$01518$i = 2923;$77 = (2923);
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
 $$014$i = (($$pn$i) - (2923))|0;
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
   $$01318$i = $29;$$01417$i = $$sroa$speculated19$i;$$019$i = 2923;
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
   if (((((2933) & 3)|0)==(0))) {
    $$015$lcssa$i17 = 2933;
    label = 18;
   } else {
    $$01518$i15 = 2933;$78 = (2933);
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
  $$014$i26 = (($$pn$i25) - (2933))|0;
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
    $$01318$i10 = $29;$$01417$i11 = $$sroa$speculated19$i3;$$019$i9 = 2933;
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
function __Z5addNSP5VNode($0) {
 $0 = $0|0;
 var $$$i = 0, $$0$i = 0, $$01318$i = 0, $$014$i = 0, $$01417$i = 0, $$015$lcssa$i = 0, $$01518$i = 0, $$017$off041$i = 0, $$017$off042$i = 0, $$017$off047$i = 0, $$018$off039$i = 0, $$018$off046$i = 0, $$019$i = 0, $$01937$i = 0, $$01938$i = 0, $$01945$i = 0, $$02035$i = 0, $$02036$i = 0, $$02044$i = 0, $$1$lcssa$i = 0;
 var $$lcssa$i = 0, $$lcssa$i8 = 0, $$phitmp$i$i = 0, $$pn$i = 0, $$pn29$i = 0, $$pr = 0, $$pre = 0, $$pre$i = 0, $$sroa$0$0$$sroa_idx = 0, $$sroa$7$0$$sroa_idx6 = 0, $$sroa$8$0$$sroa_idx9 = 0, $$sroa$speculated19$i = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0;
 var $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0;
 var $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $phitmp$i$i = 0, $phitmp$i22$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 84|0);
 $2 = (_malloc(32)|0);
 $3 = ($2|0)==(0|0);
 L1: do {
  if ($3) {
   while(1) {
    $4 = load4(10072);
    $5 = (($4) + 0)|0;
    store4(10072,$5);
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
 ; store8($$lcssa$i,load8(2938,1),1); store8($$lcssa$i+8 | 0,load8(2938+8 | 0,1),1); store8($$lcssa$i+16 | 0,load8(2938+16 | 0,1),1); store2($$lcssa$i+24 | 0,load2(2938+24 | 0,1),1);
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
   $109 = 1;$23 = 0;$27 = $phitmp$i$i;$43 = $$pr;
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
  $109 = 0;$23 = $20;$27 = 10;$43 = $21;
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
     if ($109) {
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
        $32 = load4(10072);
        $33 = (($32) + 0)|0;
        store4(10072,$33);
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
     if ($109) {
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
  if (((((2965) & 3)|0)==(0))) {
   $$015$lcssa$i = 2965;
   label = 30;
  } else {
   $$01518$i = 2965;$110 = (2965);
   while(1) {
    $52 = load1($$01518$i);
    $53 = ($52<<24>>24)==(0);
    if ($53) {
     $$pn$i = $110;
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
     $$01518$i = $54;$110 = $55;
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
 $$014$i = (($$pn$i) - (2965))|0;
 $70 = ((($0)) + 11|0);
 $71 = load1($70);
 $72 = ($71<<24>>24)<(0);
 if ($72) {
  $73 = ((($0)) + 4|0);
  $74 = load4($73);
  $79 = $74;
 } else {
  $75 = $71&255;
  $79 = $75;
 }
 $76 = ($$014$i|0)==(-1);
 if ($76) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
  // unreachable;
 }
 if ($72) {
  $77 = load4($0);
  $111 = $77;
 } else {
  $111 = $0;
 }
 $78 = ($79>>>0)>($$014$i>>>0);
 $$sroa$speculated19$i = $78 ? $$014$i : $79;
 $80 = ($$sroa$speculated19$i|0)==(0);
 L65: do {
  if ($80) {
   label = 46;
  } else {
   $$01318$i = $111;$$01417$i = $$sroa$speculated19$i;$$019$i = 2965;
   while(1) {
    $81 = load1($$01318$i);
    $82 = load1($$019$i);
    $83 = ($81<<24>>24)==($82<<24>>24);
    if (!($83)) {
     break L65;
    }
    $84 = (($$01417$i) + -1)|0;
    $85 = ((($$01318$i)) + 1|0);
    $86 = ((($$019$i)) + 1|0);
    $87 = ($84|0)==(0);
    if ($87) {
     label = 46;
     break;
    } else {
     $$01318$i = $85;$$01417$i = $84;$$019$i = $86;
    }
   }
  }
 } while(0);
 if ((label|0) == 46) {
  $88 = ($79>>>0)>=($$014$i>>>0);
  $89 = $78 ^ 1;
  $or$cond = $88 & $89;
  if ($or$cond) {
   return;
  }
 }
 $90 = ((($0)) + 100|0);
 $91 = load4($90);
 $92 = ((($0)) + 104|0);
 $93 = load4($92);
 $94 = ($91|0)==($93|0);
 if ($94) {
  return;
 }
 $95 = $91;
 $96 = $93;
 $97 = (($96) - ($95))|0;
 $98 = $97 >> 2;
 $99 = ($98|0)==(0);
 if ($99) {
  return;
 }
 $100 = (($98) + -1)|0;
 $101 = (($91) + ($100<<2)|0);
 $102 = load4($101);
 __Z5addNSP5VNode($102);
 $103 = ($100|0)==(0);
 if ($103) {
  return;
 } else {
  $105 = $100;
 }
 while(1) {
  $$pre = load4($90);
  $104 = (($105) + -1)|0;
  $106 = (($$pre) + ($104<<2)|0);
  $107 = load4($106);
  __Z5addNSP5VNode($107);
  $108 = ($104|0)==(0);
  if ($108) {
   break;
  } else {
   $105 = $104;
  }
 }
 return;
}
function __Z4_h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0) {
 $0 = $0|0;
 var $$$i = 0, $$$i8 = 0, $$lcssa$i = 0, $$lcssa$i14 = 0, $$lcssa$i6 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i10 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0;
 var $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0;
 var $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0;
 var $147 = 0, $148 = 0, $149 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i3 = 0, $phitmp$i11 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $1 = (_malloc(112)|0);
 $2 = ($1|0)==(0|0);
 L1: do {
  if ($2) {
   while(1) {
    $3 = load4(10072);
    $4 = (($3) + 0)|0;
    store4(10072,$4);
    $5 = ($3|0)==(0);
    if ($5) {
     $$lcssa$i = 0;
     break L1;
    }
    $6 = $3;
    FUNCTION_TABLE_v[$6 & 3]();
    $7 = (_malloc(112)|0);
    $8 = ($7|0)==(0|0);
    if (!($8)) {
     $$lcssa$i = $7;
     break;
    }
   }
  } else {
   $$lcssa$i = $1;
  }
 } while(0);
 $9 = ((($$lcssa$i)) + 36|0);
 $10 = ((($$lcssa$i)) + 40|0);
 store4($10,0);
 $11 = ((($$lcssa$i)) + 44|0);
 store4($11,0);
 ; store8($$lcssa$i,i64_const(0,0),4); store8($$lcssa$i+8|0,i64_const(0,0),4); store8($$lcssa$i+16|0,i64_const(0,0),4); store8($$lcssa$i+24|0,i64_const(0,0),4); store4($$lcssa$i+32|0,0,4);
 store4($9,$10);
 $12 = ((($$lcssa$i)) + 48|0);
 $13 = ((($$lcssa$i)) + 52|0);
 store4($13,0);
 $14 = ((($$lcssa$i)) + 56|0);
 store4($14,0);
 store4($12,$13);
 $15 = ((($$lcssa$i)) + 60|0);
 $16 = ((($$lcssa$i)) + 64|0);
 store4($16,0);
 $17 = ((($$lcssa$i)) + 68|0);
 store4($17,0);
 store4($15,$16);
 $18 = ((($$lcssa$i)) + 72|0);
 ; store8($18,i64_const(0,0),4); store8($18+8|0,i64_const(0,0),4); store8($18+16|0,i64_const(0,0),4);
 $19 = ((($$lcssa$i)) + 96|0);
 store4($19,(1));
 $20 = ((($$lcssa$i)) + 100|0);
 store4($20,0);
 $21 = ((($$lcssa$i)) + 104|0);
 store4($21,0);
 $22 = ((($$lcssa$i)) + 108|0);
 store4($22,0);
 $23 = ($$lcssa$i|0)==($0|0);
 do {
  if (!($23)) {
   $24 = ((($0)) + 11|0);
   $25 = load1($24);
   $26 = ($25<<24>>24)<(0);
   $27 = load4($0);
   $28 = $26 ? $27 : $0;
   $29 = ((($0)) + 4|0);
   $30 = load4($29);
   $31 = $25&255;
   $32 = $26 ? $30 : $31;
   $33 = ((($$lcssa$i)) + 11|0);
   $34 = ($32>>>0)>(10);
   if (!($34)) {
    $35 = ($32|0)==(0);
    if (!($35)) {
     _memmove(($$lcssa$i|0),($28|0),($32|0))|0;
    }
    $36 = (($$lcssa$i) + ($32)|0);
    store1($36,0);
    $37 = load1($33);
    $38 = ($37<<24>>24)<(0);
    if ($38) {
     $39 = ((($$lcssa$i)) + 4|0);
     store4($39,$32);
     break;
    } else {
     $40 = $32&255;
     store1($33,$40);
     break;
    }
   }
   $41 = (($32) + -10)|0;
   $42 = ($41>>>0)>(4294967268);
   if ($42) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $43 = ($32>>>0)<(20);
   $$sroa$speculated$i = $43 ? 20 : $32;
   $44 = ($$sroa$speculated$i>>>0)<(11);
   $45 = (($$sroa$speculated$i) + 16)|0;
   $46 = $45 & -16;
   $phitmp$i = $44 ? 11 : $46;
   $47 = ($phitmp$i|0)==(0);
   $$$i = $47 ? 1 : $phitmp$i;
   $48 = (_malloc($$$i)|0);
   $49 = ($48|0)==(0|0);
   L20: do {
    if ($49) {
     while(1) {
      $50 = load4(10072);
      $51 = (($50) + 0)|0;
      store4(10072,$51);
      $52 = ($50|0)==(0);
      if ($52) {
       $$lcssa$i6 = 0;
       break L20;
      }
      $53 = $50;
      FUNCTION_TABLE_v[$53 & 3]();
      $54 = (_malloc($$$i)|0);
      $55 = ($54|0)==(0|0);
      if (!($55)) {
       $$lcssa$i6 = $54;
       break;
      }
     }
    } else {
     $$lcssa$i6 = $48;
    }
   } while(0);
   _memcpy(($$lcssa$i6|0),($28|0),($32|0))|0;
   store4($$lcssa$i,$$lcssa$i6);
   $56 = $phitmp$i | -2147483648;
   $57 = ((($$lcssa$i)) + 8|0);
   store4($57,$56);
   $58 = ((($$lcssa$i)) + 4|0);
   store4($58,$32);
   $59 = (($$lcssa$i6) + ($32)|0);
   store1($59,0);
  }
 } while(0);
 $60 = ((($$lcssa$i)) + 12|0);
 $61 = ((($$lcssa$i)) + 83|0);
 $62 = load1($61);
 $63 = ($62<<24>>24)<(0);
 $64 = load4($18);
 $65 = $63 ? $64 : $18;
 $66 = ((($$lcssa$i)) + 76|0);
 $67 = load4($66);
 $68 = $62&255;
 $69 = $63 ? $67 : $68;
 $70 = ((($$lcssa$i)) + 23|0);
 $71 = load1($70);
 $72 = ($71<<24>>24)<(0);
 if ($72) {
  $73 = ((($$lcssa$i)) + 20|0);
  $74 = load4($73);
  $75 = $74 & 2147483647;
  $phitmp$i$i3 = (($75) + -1)|0;
  $77 = $phitmp$i$i3;
 } else {
  $77 = 10;
 }
 $76 = ($69>>>0)>($77>>>0);
 do {
  if ($76) {
   $86 = (($69) - ($77))|0;
   $87 = (-18 - ($77))|0;
   $88 = ($87>>>0)<($86>>>0);
   if ($88) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($72) {
    $89 = load4($60);
    $108 = $89;
   } else {
    $108 = $60;
   }
   $90 = ($77>>>0)<(2147483623);
   if ($90) {
    $91 = $77 << 1;
    $92 = ($69>>>0)<($91>>>0);
    $$sroa$speculated$i10 = $92 ? $91 : $69;
    $93 = ($$sroa$speculated$i10>>>0)<(11);
    $94 = (($$sroa$speculated$i10) + 16)|0;
    $95 = $94 & -16;
    $phitmp$i11 = $93 ? 11 : $95;
    $97 = $phitmp$i11;
   } else {
    $97 = -17;
   }
   $96 = ($97|0)==(0);
   $$$i8 = $96 ? 1 : $97;
   $98 = (_malloc($$$i8)|0);
   $99 = ($98|0)==(0|0);
   L40: do {
    if ($99) {
     while(1) {
      $100 = load4(10072);
      $101 = (($100) + 0)|0;
      store4(10072,$101);
      $102 = ($100|0)==(0);
      if ($102) {
       $$lcssa$i14 = 0;
       break L40;
      }
      $103 = $100;
      FUNCTION_TABLE_v[$103 & 3]();
      $104 = (_malloc($$$i8)|0);
      $105 = ($104|0)==(0|0);
      if (!($105)) {
       $$lcssa$i14 = $104;
       break;
      }
     }
    } else {
     $$lcssa$i14 = $98;
    }
   } while(0);
   $106 = ($69|0)==(0);
   if (!($106)) {
    _memcpy(($$lcssa$i14|0),($65|0),($69|0))|0;
   }
   $107 = ($77|0)==(10);
   if (!($107)) {
    _free($108);
   }
   store4($60,$$lcssa$i14);
   $109 = $97 | -2147483648;
   $110 = ((($$lcssa$i)) + 20|0);
   store4($110,$109);
   $111 = ((($$lcssa$i)) + 16|0);
   store4($111,$69);
   $112 = (($$lcssa$i14) + ($69)|0);
   store1($112,0);
  } else {
   if ($72) {
    $78 = load4($60);
    $80 = $78;
   } else {
    $80 = $60;
   }
   $79 = ($69|0)==(0);
   if (!($79)) {
    _memmove(($80|0),($65|0),($69|0))|0;
   }
   $81 = (($80) + ($69)|0);
   store1($81,0);
   $82 = load1($70);
   $83 = ($82<<24>>24)<(0);
   if ($83) {
    $84 = ((($$lcssa$i)) + 16|0);
    store4($84,$69);
    break;
   } else {
    $85 = $69&255;
    store1($70,$85);
    break;
   }
  }
 } while(0);
 $113 = ((($$lcssa$i)) + 11|0);
 $114 = load1($113);
 $115 = ($114<<24>>24)<(0);
 if ($115) {
  $116 = ((($$lcssa$i)) + 4|0);
  $117 = load4($116);
  $120 = $117;
 } else {
  $118 = $114&255;
  $120 = $118;
 }
 $119 = ($120>>>0)>(2);
 if (!($119)) {
  return ($$lcssa$i|0);
 }
 if ($115) {
  $121 = load4($$lcssa$i);
  $123 = $121;
 } else {
  $123 = $$lcssa$i;
 }
 $122 = load1($123);
 $124 = ($122<<24>>24)==(115);
 if (!($124)) {
  return ($$lcssa$i|0);
 }
 if ($115) {
  $125 = load4($$lcssa$i);
  $127 = $125;
 } else {
  $127 = $$lcssa$i;
 }
 $126 = ((($127)) + 1|0);
 $128 = load1($126);
 $129 = ($128<<24>>24)==(118);
 if (!($129)) {
  return ($$lcssa$i|0);
 }
 if ($115) {
  $130 = load4($$lcssa$i);
  $132 = $130;
 } else {
  $132 = $$lcssa$i;
 }
 $131 = ((($132)) + 2|0);
 $133 = load1($131);
 $134 = ($133<<24>>24)==(103);
 if (!($134)) {
  return ($$lcssa$i|0);
 }
 if ($115) {
  $135 = ((($$lcssa$i)) + 4|0);
  $136 = load4($135);
  $139 = $136;
 } else {
  $137 = $114&255;
  $139 = $137;
 }
 $138 = ($139|0)==(3);
 if (!($138)) {
  if ($115) {
   $140 = load4($$lcssa$i);
   $142 = $140;
  } else {
   $142 = $$lcssa$i;
  }
  $141 = ((($142)) + 3|0);
  $143 = load1($141);
  $144 = ($143<<24>>24)==(46);
  if (!($144)) {
   if ($115) {
    $145 = load4($$lcssa$i);
    $147 = $145;
   } else {
    $147 = $$lcssa$i;
   }
   $146 = ((($147)) + 3|0);
   $148 = load1($146);
   $149 = ($148<<24>>24)==(35);
   if (!($149)) {
    return ($$lcssa$i|0);
   }
  }
 }
 __Z5addNSP5VNode($$lcssa$i);
 return ($$lcssa$i|0);
}
function __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0) {
 $0 = $0|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 ; store8($1,i64_const(0,0),4); store4($1+8|0,0,4);
 $2 = ((($0)) + 11|0);
 $3 = load1($2);
 $4 = ($3<<24>>24)<(0);
 if ($4) {
  $5 = load4($0);
  $6 = ((($0)) + 4|0);
  $7 = load4($6);
  $8 = ($7>>>0)>(4294967279);
  if ($8) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $9 = ($7>>>0)<(11);
  if ($9) {
   $24 = $7&255;
   $25 = ((($1)) + 11|0);
   store1($25,$24);
   $26 = ($7|0)==(0);
   if ($26) {
    $$017$i = $1;
   } else {
    $$016$i = $1;
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
      $15 = load4(10072);
      $16 = (($15) + 0)|0;
      store4(10072,$16);
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
   store4($1,$$lcssa$i);
   $21 = $11 | -2147483648;
   $22 = ((($1)) + 8|0);
   store4($22,$21);
   $23 = ((($1)) + 4|0);
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
  ; store8($1,load8($0,4),4); store4($1+8 | 0,load4($0+8 | 0,4),4);
 }
 $28 = (__Z4_h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($1)|0);
 $29 = $28;
 $30 = ((($1)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 if (!($32)) {
  STACKTOP = sp;return ($29|0);
 }
 $33 = load4($1);
 _free($33);
 STACKTOP = sp;return ($29|0);
}
function __Z4h_tiNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEb($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i16 = 0, $$$i8 = 0, $$lcssa$i = 0, $$lcssa$i14 = 0, $$lcssa$i22 = 0, $$lcssa$i6 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i11 = 0, $$sroa$speculated$i24 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0;
 var $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0;
 var $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0;
 var $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0;
 var $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0;
 var $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i17 = 0;
 var $phitmp$i12 = 0, $phitmp$i25 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (_malloc(112)|0);
 $3 = ($2|0)==(0|0);
 L1: do {
  if ($3) {
   while(1) {
    $4 = load4(10072);
    $5 = (($4) + 0)|0;
    store4(10072,$5);
    $6 = ($4|0)==(0);
    if ($6) {
     $$lcssa$i = 0;
     break L1;
    }
    $7 = $4;
    FUNCTION_TABLE_v[$7 & 3]();
    $8 = (_malloc(112)|0);
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
 $10 = ((($$lcssa$i)) + 36|0);
 $11 = ((($$lcssa$i)) + 40|0);
 store4($11,0);
 $12 = ((($$lcssa$i)) + 44|0);
 store4($12,0);
 ; store8($$lcssa$i,i64_const(0,0),4); store8($$lcssa$i+8|0,i64_const(0,0),4); store8($$lcssa$i+16|0,i64_const(0,0),4); store8($$lcssa$i+24|0,i64_const(0,0),4); store4($$lcssa$i+32|0,0,4);
 store4($10,$11);
 $13 = ((($$lcssa$i)) + 48|0);
 $14 = ((($$lcssa$i)) + 52|0);
 store4($14,0);
 $15 = ((($$lcssa$i)) + 56|0);
 store4($15,0);
 store4($13,$14);
 $16 = ((($$lcssa$i)) + 60|0);
 $17 = ((($$lcssa$i)) + 64|0);
 store4($17,0);
 $18 = ((($$lcssa$i)) + 68|0);
 store4($18,0);
 store4($16,$17);
 $19 = ((($$lcssa$i)) + 72|0);
 ; store8($19,i64_const(0,0),4); store8($19+8|0,i64_const(0,0),4); store8($19+16|0,i64_const(0,0),4);
 $20 = ((($$lcssa$i)) + 96|0);
 store4($20,(1));
 $21 = ((($$lcssa$i)) + 100|0);
 store4($21,0);
 $22 = ((($$lcssa$i)) + 104|0);
 store4($22,0);
 $23 = ((($$lcssa$i)) + 108|0);
 store4($23,0);
 do {
  if ($1) {
   $24 = ((($$lcssa$i)) + 24|0);
   $25 = ($24|0)==($0|0);
   if (!($25)) {
    $26 = ((($0)) + 11|0);
    $27 = load1($26);
    $28 = ($27<<24>>24)<(0);
    $29 = load4($0);
    $30 = $28 ? $29 : $0;
    $31 = ((($0)) + 4|0);
    $32 = load4($31);
    $33 = $27&255;
    $34 = $28 ? $32 : $33;
    $35 = ((($$lcssa$i)) + 35|0);
    $36 = ($34>>>0)>(10);
    if (!($36)) {
     $37 = ($34|0)==(0);
     if (!($37)) {
      _memmove(($24|0),($30|0),($34|0))|0;
     }
     $38 = (($24) + ($34)|0);
     store1($38,0);
     $39 = load1($35);
     $40 = ($39<<24>>24)<(0);
     if ($40) {
      $41 = ((($$lcssa$i)) + 28|0);
      store4($41,$34);
      break;
     } else {
      $42 = $34&255;
      store1($35,$42);
      break;
     }
    }
    $43 = (($34) + -10)|0;
    $44 = ($43>>>0)>(4294967268);
    if ($44) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $45 = ($34>>>0)<(20);
    $$sroa$speculated$i = $45 ? 20 : $34;
    $46 = ($$sroa$speculated$i>>>0)<(11);
    $47 = (($$sroa$speculated$i) + 16)|0;
    $48 = $47 & -16;
    $phitmp$i = $46 ? 11 : $48;
    $49 = ($phitmp$i|0)==(0);
    $$$i = $49 ? 1 : $phitmp$i;
    $50 = (_malloc($$$i)|0);
    $51 = ($50|0)==(0|0);
    L21: do {
     if ($51) {
      while(1) {
       $52 = load4(10072);
       $53 = (($52) + 0)|0;
       store4(10072,$53);
       $54 = ($52|0)==(0);
       if ($54) {
        $$lcssa$i6 = 0;
        break L21;
       }
       $55 = $52;
       FUNCTION_TABLE_v[$55 & 3]();
       $56 = (_malloc($$$i)|0);
       $57 = ($56|0)==(0|0);
       if (!($57)) {
        $$lcssa$i6 = $56;
        break;
       }
      }
     } else {
      $$lcssa$i6 = $50;
     }
    } while(0);
    _memcpy(($$lcssa$i6|0),($30|0),($34|0))|0;
    store4($24,$$lcssa$i6);
    $58 = $phitmp$i | -2147483648;
    $59 = ((($$lcssa$i)) + 32|0);
    store4($59,$58);
    $60 = ((($$lcssa$i)) + 28|0);
    store4($60,$34);
    $61 = (($$lcssa$i6) + ($34)|0);
    store1($61,0);
   }
  } else {
   $62 = ($$lcssa$i|0)==($0|0);
   if (!($62)) {
    $63 = ((($0)) + 11|0);
    $64 = load1($63);
    $65 = ($64<<24>>24)<(0);
    $66 = load4($0);
    $67 = $65 ? $66 : $0;
    $68 = ((($0)) + 4|0);
    $69 = load4($68);
    $70 = $64&255;
    $71 = $65 ? $69 : $70;
    $72 = ((($$lcssa$i)) + 11|0);
    $73 = ($71>>>0)>(10);
    if (!($73)) {
     $74 = ($71|0)==(0);
     if (!($74)) {
      _memmove(($$lcssa$i|0),($67|0),($71|0))|0;
     }
     $75 = (($$lcssa$i) + ($71)|0);
     store1($75,0);
     $76 = load1($72);
     $77 = ($76<<24>>24)<(0);
     if ($77) {
      $78 = ((($$lcssa$i)) + 4|0);
      store4($78,$71);
      break;
     } else {
      $79 = $71&255;
      store1($72,$79);
      break;
     }
    }
    $80 = (($71) + -10)|0;
    $81 = ($80>>>0)>(4294967268);
    if ($81) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $82 = ($71>>>0)<(20);
    $$sroa$speculated$i11 = $82 ? 20 : $71;
    $83 = ($$sroa$speculated$i11>>>0)<(11);
    $84 = (($$sroa$speculated$i11) + 16)|0;
    $85 = $84 & -16;
    $phitmp$i12 = $83 ? 11 : $85;
    $86 = ($phitmp$i12|0)==(0);
    $$$i8 = $86 ? 1 : $phitmp$i12;
    $87 = (_malloc($$$i8)|0);
    $88 = ($87|0)==(0|0);
    L40: do {
     if ($88) {
      while(1) {
       $89 = load4(10072);
       $90 = (($89) + 0)|0;
       store4(10072,$90);
       $91 = ($89|0)==(0);
       if ($91) {
        $$lcssa$i14 = 0;
        break L40;
       }
       $92 = $89;
       FUNCTION_TABLE_v[$92 & 3]();
       $93 = (_malloc($$$i8)|0);
       $94 = ($93|0)==(0|0);
       if (!($94)) {
        $$lcssa$i14 = $93;
        break;
       }
      }
     } else {
      $$lcssa$i14 = $87;
     }
    } while(0);
    _memcpy(($$lcssa$i14|0),($67|0),($71|0))|0;
    store4($$lcssa$i,$$lcssa$i14);
    $95 = $phitmp$i12 | -2147483648;
    $96 = ((($$lcssa$i)) + 8|0);
    store4($96,$95);
    $97 = ((($$lcssa$i)) + 4|0);
    store4($97,$71);
    $98 = (($$lcssa$i14) + ($71)|0);
    store1($98,0);
   }
  }
 } while(0);
 $99 = ((($$lcssa$i)) + 12|0);
 $100 = ((($$lcssa$i)) + 83|0);
 $101 = load1($100);
 $102 = ($101<<24>>24)<(0);
 $103 = load4($19);
 $104 = $102 ? $103 : $19;
 $105 = ((($$lcssa$i)) + 76|0);
 $106 = load4($105);
 $107 = $101&255;
 $108 = $102 ? $106 : $107;
 $109 = ((($$lcssa$i)) + 23|0);
 $110 = load1($109);
 $111 = ($110<<24>>24)<(0);
 if ($111) {
  $112 = ((($$lcssa$i)) + 20|0);
  $113 = load4($112);
  $114 = $113 & 2147483647;
  $phitmp$i$i17 = (($114) + -1)|0;
  $116 = $phitmp$i$i17;
 } else {
  $116 = 10;
 }
 $115 = ($108>>>0)>($116>>>0);
 do {
  if ($115) {
   $125 = (($108) - ($116))|0;
   $126 = (-18 - ($116))|0;
   $127 = ($126>>>0)<($125>>>0);
   if ($127) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($111) {
    $128 = load4($99);
    $147 = $128;
   } else {
    $147 = $99;
   }
   $129 = ($116>>>0)<(2147483623);
   if ($129) {
    $130 = $116 << 1;
    $131 = ($108>>>0)<($130>>>0);
    $$sroa$speculated$i24 = $131 ? $130 : $108;
    $132 = ($$sroa$speculated$i24>>>0)<(11);
    $133 = (($$sroa$speculated$i24) + 16)|0;
    $134 = $133 & -16;
    $phitmp$i25 = $132 ? 11 : $134;
    $136 = $phitmp$i25;
   } else {
    $136 = -17;
   }
   $135 = ($136|0)==(0);
   $$$i16 = $135 ? 1 : $136;
   $137 = (_malloc($$$i16)|0);
   $138 = ($137|0)==(0|0);
   L60: do {
    if ($138) {
     while(1) {
      $139 = load4(10072);
      $140 = (($139) + 0)|0;
      store4(10072,$140);
      $141 = ($139|0)==(0);
      if ($141) {
       $$lcssa$i22 = 0;
       break L60;
      }
      $142 = $139;
      FUNCTION_TABLE_v[$142 & 3]();
      $143 = (_malloc($$$i16)|0);
      $144 = ($143|0)==(0|0);
      if (!($144)) {
       $$lcssa$i22 = $143;
       break;
      }
     }
    } else {
     $$lcssa$i22 = $137;
    }
   } while(0);
   $145 = ($108|0)==(0);
   if (!($145)) {
    _memcpy(($$lcssa$i22|0),($104|0),($108|0))|0;
   }
   $146 = ($116|0)==(10);
   if (!($146)) {
    _free($147);
   }
   store4($99,$$lcssa$i22);
   $148 = $136 | -2147483648;
   $149 = ((($$lcssa$i)) + 20|0);
   store4($149,$148);
   $150 = ((($$lcssa$i)) + 16|0);
   store4($150,$108);
   $151 = (($$lcssa$i22) + ($108)|0);
   store1($151,0);
  } else {
   if ($111) {
    $117 = load4($99);
    $119 = $117;
   } else {
    $119 = $99;
   }
   $118 = ($108|0)==(0);
   if (!($118)) {
    _memmove(($119|0),($104|0),($108|0))|0;
   }
   $120 = (($119) + ($108)|0);
   store1($120,0);
   $121 = load1($109);
   $122 = ($121<<24>>24)<(0);
   if ($122) {
    $123 = ((($$lcssa$i)) + 16|0);
    store4($123,$108);
    break;
   } else {
    $124 = $108&255;
    store1($109,$124);
    break;
   }
  }
 } while(0);
 $152 = ((($$lcssa$i)) + 11|0);
 $153 = load1($152);
 $154 = ($153<<24>>24)<(0);
 if ($154) {
  $155 = ((($$lcssa$i)) + 4|0);
  $156 = load4($155);
  $159 = $156;
 } else {
  $157 = $153&255;
  $159 = $157;
 }
 $158 = ($159>>>0)>(2);
 if (!($158)) {
  $189 = $$lcssa$i;
  return ($189|0);
 }
 if ($154) {
  $160 = load4($$lcssa$i);
  $162 = $160;
 } else {
  $162 = $$lcssa$i;
 }
 $161 = load1($162);
 $163 = ($161<<24>>24)==(115);
 if (!($163)) {
  $189 = $$lcssa$i;
  return ($189|0);
 }
 if ($154) {
  $164 = load4($$lcssa$i);
  $166 = $164;
 } else {
  $166 = $$lcssa$i;
 }
 $165 = ((($166)) + 1|0);
 $167 = load1($165);
 $168 = ($167<<24>>24)==(118);
 if (!($168)) {
  $189 = $$lcssa$i;
  return ($189|0);
 }
 if ($154) {
  $169 = load4($$lcssa$i);
  $171 = $169;
 } else {
  $171 = $$lcssa$i;
 }
 $170 = ((($171)) + 2|0);
 $172 = load1($170);
 $173 = ($172<<24>>24)==(103);
 if (!($173)) {
  $189 = $$lcssa$i;
  return ($189|0);
 }
 if ($154) {
  $174 = ((($$lcssa$i)) + 4|0);
  $175 = load4($174);
  $178 = $175;
 } else {
  $176 = $153&255;
  $178 = $176;
 }
 $177 = ($178|0)==(3);
 if (!($177)) {
  if ($154) {
   $179 = load4($$lcssa$i);
   $181 = $179;
  } else {
   $181 = $$lcssa$i;
  }
  $180 = ((($181)) + 3|0);
  $182 = load1($180);
  $183 = ($182<<24>>24)==(46);
  if (!($183)) {
   if ($154) {
    $184 = load4($$lcssa$i);
    $186 = $184;
   } else {
    $186 = $$lcssa$i;
   }
   $185 = ((($186)) + 3|0);
   $187 = load1($185);
   $188 = ($187<<24>>24)==(35);
   if (!($188)) {
    $189 = $$lcssa$i;
    return ($189|0);
   }
  }
 }
 __Z5addNSP5VNode($$lcssa$i);
 $189 = $$lcssa$i;
 return ($189|0);
}
function __Z4h_snNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i2 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0;
 var $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0;
 var $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = sp + 12|0;
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $4 = ((($0)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 if ($6) {
  $7 = load4($0);
  $8 = ((($0)) + 4|0);
  $9 = load4($8);
  $10 = ($9>>>0)>(4294967279);
  if ($10) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $11 = ($9>>>0)<(11);
  if ($11) {
   $26 = $9&255;
   $27 = ((($2)) + 11|0);
   store1($27,$26);
   $28 = ($9|0)==(0);
   if ($28) {
    $$017$i = $2;
   } else {
    $$016$i = $2;
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
      $17 = load4(10072);
      $18 = (($17) + 0)|0;
      store4(10072,$18);
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
   store4($2,$$lcssa$i);
   $23 = $13 | -2147483648;
   $24 = ((($2)) + 8|0);
   store4($24,$23);
   $25 = ((($2)) + 4|0);
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
  ; store8($2,load8($0,4),4); store4($2+8 | 0,load4($0+8 | 0,4),4);
 }
 $30 = (__Z4_h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($2)|0);
 $31 = ((($2)) + 11|0);
 $32 = load1($31);
 $33 = ($32<<24>>24)<(0);
 if ($33) {
  $34 = load4($2);
  _free($34);
 }
 $35 = $1;
 store4($3,$35);
 $36 = ((($30)) + 104|0);
 $37 = load4($36);
 $38 = ((($30)) + 108|0);
 $39 = load4($38);
 $40 = ($37>>>0)<($39>>>0);
 if ($40) {
  store4($37,$1);
  $41 = load4($36);
  $42 = ((($41)) + 4|0);
  store4($36,$42);
 } else {
  $43 = ((($30)) + 100|0);
  __ZNSt3__26vectorIP5VNodeNS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_($43,$3);
 }
 $44 = ((($30)) + 12|0);
 $45 = ((($30)) + 72|0);
 $46 = ((($45)) + 11|0);
 $47 = load1($46);
 $48 = ($47<<24>>24)<(0);
 $49 = load4($45);
 $50 = $48 ? $49 : $45;
 $51 = ((($30)) + 76|0);
 $52 = load4($51);
 $53 = $47&255;
 $54 = $48 ? $52 : $53;
 $55 = ((($44)) + 11|0);
 $56 = load1($55);
 $57 = ($56<<24>>24)<(0);
 if ($57) {
  $58 = ((($30)) + 20|0);
  $59 = load4($58);
  $60 = $59 & 2147483647;
  $phitmp$i$i = (($60) + -1)|0;
  $62 = $phitmp$i$i;
 } else {
  $62 = 10;
 }
 $61 = ($54>>>0)>($62>>>0);
 do {
  if ($61) {
   $71 = (($54) - ($62))|0;
   $72 = (-18 - ($62))|0;
   $73 = ($72>>>0)<($71>>>0);
   if ($73) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($57) {
    $74 = load4($44);
    $93 = $74;
   } else {
    $93 = $44;
   }
   $75 = ($62>>>0)<(2147483623);
   if ($75) {
    $76 = $62 << 1;
    $77 = ($54>>>0)<($76>>>0);
    $$sroa$speculated$i = $77 ? $76 : $54;
    $78 = ($$sroa$speculated$i>>>0)<(11);
    $79 = (($$sroa$speculated$i) + 16)|0;
    $80 = $79 & -16;
    $phitmp$i = $78 ? 11 : $80;
    $82 = $phitmp$i;
   } else {
    $82 = -17;
   }
   $81 = ($82|0)==(0);
   $$$i2 = $81 ? 1 : $82;
   $83 = (_malloc($$$i2)|0);
   $84 = ($83|0)==(0|0);
   L41: do {
    if ($84) {
     while(1) {
      $85 = load4(10072);
      $86 = (($85) + 0)|0;
      store4(10072,$86);
      $87 = ($85|0)==(0);
      if ($87) {
       $$lcssa$i8 = 0;
       break L41;
      }
      $88 = $85;
      FUNCTION_TABLE_v[$88 & 3]();
      $89 = (_malloc($$$i2)|0);
      $90 = ($89|0)==(0|0);
      if (!($90)) {
       $$lcssa$i8 = $89;
       break;
      }
     }
    } else {
     $$lcssa$i8 = $83;
    }
   } while(0);
   $91 = ($54|0)==(0);
   if (!($91)) {
    _memcpy(($$lcssa$i8|0),($50|0),($54|0))|0;
   }
   $92 = ($62|0)==(10);
   if (!($92)) {
    _free($93);
   }
   store4($44,$$lcssa$i8);
   $94 = $82 | -2147483648;
   $95 = ((($30)) + 20|0);
   store4($95,$94);
   $96 = ((($30)) + 16|0);
   store4($96,$54);
   $97 = (($$lcssa$i8) + ($54)|0);
   store1($97,0);
  } else {
   if ($57) {
    $63 = load4($44);
    $65 = $63;
   } else {
    $65 = $44;
   }
   $64 = ($54|0)==(0);
   if (!($64)) {
    _memmove(($65|0),($50|0),($54|0))|0;
   }
   $66 = (($65) + ($54)|0);
   store1($66,0);
   $67 = load1($55);
   $68 = ($67<<24>>24)<(0);
   if ($68) {
    $69 = ((($30)) + 16|0);
    store4($69,$54);
    break;
   } else {
    $70 = $54&255;
    store1($55,$70);
    break;
   }
  }
 } while(0);
 $98 = ((($30)) + 11|0);
 $99 = load1($98);
 $100 = ($99<<24>>24)<(0);
 if ($100) {
  $101 = ((($30)) + 4|0);
  $102 = load4($101);
  $105 = $102;
 } else {
  $103 = $99&255;
  $105 = $103;
 }
 $104 = ($105>>>0)>(2);
 if (!($104)) {
  $135 = $30;
  STACKTOP = sp;return ($135|0);
 }
 if ($100) {
  $106 = load4($30);
  $108 = $106;
 } else {
  $108 = $30;
 }
 $107 = load1($108);
 $109 = ($107<<24>>24)==(115);
 if (!($109)) {
  $135 = $30;
  STACKTOP = sp;return ($135|0);
 }
 if ($100) {
  $110 = load4($30);
  $112 = $110;
 } else {
  $112 = $30;
 }
 $111 = ((($112)) + 1|0);
 $113 = load1($111);
 $114 = ($113<<24>>24)==(118);
 if (!($114)) {
  $135 = $30;
  STACKTOP = sp;return ($135|0);
 }
 if ($100) {
  $115 = load4($30);
  $117 = $115;
 } else {
  $117 = $30;
 }
 $116 = ((($117)) + 2|0);
 $118 = load1($116);
 $119 = ($118<<24>>24)==(103);
 if (!($119)) {
  $135 = $30;
  STACKTOP = sp;return ($135|0);
 }
 if ($100) {
  $120 = ((($30)) + 4|0);
  $121 = load4($120);
  $124 = $121;
 } else {
  $122 = $99&255;
  $124 = $122;
 }
 $123 = ($124|0)==(3);
 if (!($123)) {
  if ($100) {
   $125 = load4($30);
   $127 = $125;
  } else {
   $127 = $30;
  }
  $126 = ((($127)) + 3|0);
  $128 = load1($126);
  $129 = ($128<<24>>24)==(46);
  if (!($129)) {
   if ($100) {
    $130 = load4($30);
    $132 = $130;
   } else {
    $132 = $30;
   }
   $131 = ((($132)) + 3|0);
   $133 = load1($131);
   $134 = ($133<<24>>24)==(35);
   if (!($134)) {
    $135 = $30;
    STACKTOP = sp;return ($135|0);
   }
  }
 }
 __Z5addNSP5VNode($30);
 $135 = $30;
 STACKTOP = sp;return ($135|0);
}
function __Z4h_stNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i2 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $9 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $3 = ((($0)) + 11|0);
 $4 = load1($3);
 $5 = ($4<<24>>24)<(0);
 if ($5) {
  $6 = load4($0);
  $7 = ((($0)) + 4|0);
  $8 = load4($7);
  $9 = ($8>>>0)>(4294967279);
  if ($9) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $10 = ($8>>>0)<(11);
  if ($10) {
   $25 = $8&255;
   $26 = ((($2)) + 11|0);
   store1($26,$25);
   $27 = ($8|0)==(0);
   if ($27) {
    $$017$i = $2;
   } else {
    $$016$i = $2;
    label = 11;
   }
  } else {
   $11 = (($8) + 16)|0;
   $12 = $11 & -16;
   $13 = ($12|0)==(0);
   $$$i = $13 ? 1 : $12;
   $14 = (_malloc($$$i)|0);
   $15 = ($14|0)==(0|0);
   L9: do {
    if ($15) {
     while(1) {
      $16 = load4(10072);
      $17 = (($16) + 0)|0;
      store4(10072,$17);
      $18 = ($16|0)==(0);
      if ($18) {
       $$lcssa$i = 0;
       break L9;
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
   store4($2,$$lcssa$i);
   $22 = $12 | -2147483648;
   $23 = ((($2)) + 8|0);
   store4($23,$22);
   $24 = ((($2)) + 4|0);
   store4($24,$8);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($6|0),($8|0))|0;
   $$017$i = $$016$i;
  }
  $28 = (($$017$i) + ($8)|0);
  store1($28,0);
 } else {
  ; store8($2,load8($0,4),4); store4($2+8 | 0,load4($0+8 | 0,4),4);
 }
 $29 = (__Z4_h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($2)|0);
 $30 = ((($2)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 if ($32) {
  $33 = load4($2);
  _free($33);
 }
 $34 = ((($29)) + 24|0);
 $35 = ($34|0)==($1|0);
 if ($35) {
  $88 = $29;
  STACKTOP = sp;return ($88|0);
 }
 $36 = ((($1)) + 11|0);
 $37 = load1($36);
 $38 = ($37<<24>>24)<(0);
 $39 = load4($1);
 $40 = $38 ? $39 : $1;
 $41 = ((($1)) + 4|0);
 $42 = load4($41);
 $43 = $37&255;
 $44 = $38 ? $42 : $43;
 $45 = ((($34)) + 11|0);
 $46 = load1($45);
 $47 = ($46<<24>>24)<(0);
 if ($47) {
  $48 = ((($29)) + 32|0);
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
   $59 = ((($29)) + 28|0);
   store4($59,$44);
   $88 = $29;
   STACKTOP = sp;return ($88|0);
  } else {
   $60 = $44&255;
   store1($45,$60);
   $88 = $29;
   STACKTOP = sp;return ($88|0);
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
    $75 = load4(10072);
    $76 = (($75) + 0)|0;
    store4(10072,$76);
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
 $85 = ((($29)) + 32|0);
 store4($85,$84);
 $86 = ((($29)) + 28|0);
 store4($86,$44);
 $87 = (($$lcssa$i8) + ($44)|0);
 store1($87,0);
 $88 = $29;
 STACKTOP = sp;return ($88|0);
}
function __Z5_h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i10 = 0, $$$i2 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i17 = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i11 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0;
 var $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0;
 var $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0;
 var $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0;
 var $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $phitmp$i$i4 = 0, $phitmp$i12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $3 = ((($0)) + 11|0);
 $4 = load1($3);
 $5 = ($4<<24>>24)<(0);
 if ($5) {
  $6 = load4($0);
  $7 = ((($0)) + 4|0);
  $8 = load4($7);
  $9 = ($8>>>0)>(4294967279);
  if ($9) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $10 = ($8>>>0)<(11);
  if ($10) {
   $25 = $8&255;
   $26 = ((($2)) + 11|0);
   store1($26,$25);
   $27 = ($8|0)==(0);
   if ($27) {
    $$017$i = $2;
   } else {
    $$016$i = $2;
    label = 11;
   }
  } else {
   $11 = (($8) + 16)|0;
   $12 = $11 & -16;
   $13 = ($12|0)==(0);
   $$$i = $13 ? 1 : $12;
   $14 = (_malloc($$$i)|0);
   $15 = ($14|0)==(0|0);
   L9: do {
    if ($15) {
     while(1) {
      $16 = load4(10072);
      $17 = (($16) + 0)|0;
      store4(10072,$17);
      $18 = ($16|0)==(0);
      if ($18) {
       $$lcssa$i = 0;
       break L9;
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
   store4($2,$$lcssa$i);
   $22 = $12 | -2147483648;
   $23 = ((($2)) + 8|0);
   store4($23,$22);
   $24 = ((($2)) + 4|0);
   store4($24,$8);
   $$016$i = $$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($$016$i|0),($6|0),($8|0))|0;
   $$017$i = $$016$i;
  }
  $28 = (($$017$i) + ($8)|0);
  store1($28,0);
 } else {
  ; store8($2,load8($0,4),4); store4($2+8 | 0,load4($0+8 | 0,4),4);
 }
 $29 = (__Z4_h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($2)|0);
 $30 = ((($2)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 if ($32) {
  $33 = load4($2);
  _free($33);
 }
 $34 = ((($29)) + 36|0);
 $35 = ($34|0)==($1|0);
 if (!($35)) {
  $36 = load4($1);
  $37 = ((($1)) + 4|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($34,$36,$37);
  $38 = ((($29)) + 48|0);
  $39 = ((($1)) + 12|0);
  $40 = load4($39);
  $41 = ((($1)) + 16|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($38,$40,$41);
  $42 = ((($29)) + 60|0);
  $43 = ((($1)) + 24|0);
  $44 = load4($43);
  $45 = ((($1)) + 28|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($42,$44,$45);
 }
 $46 = ((($29)) + 72|0);
 $47 = ((($1)) + 36|0);
 $48 = ($46|0)==($47|0);
 do {
  if (!($48)) {
   $49 = ((($47)) + 11|0);
   $50 = load1($49);
   $51 = ($50<<24>>24)<(0);
   $52 = load4($47);
   $53 = $51 ? $52 : $47;
   $54 = ((($1)) + 40|0);
   $55 = load4($54);
   $56 = $50&255;
   $57 = $51 ? $55 : $56;
   $58 = ((($46)) + 11|0);
   $59 = load1($58);
   $60 = ($59<<24>>24)<(0);
   if ($60) {
    $61 = ((($29)) + 80|0);
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
     $72 = ((($29)) + 76|0);
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
      $88 = load4(10072);
      $89 = (($88) + 0)|0;
      store4(10072,$89);
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
   $98 = ((($29)) + 80|0);
   store4($98,$97);
   $99 = ((($29)) + 76|0);
   store4($99,$57);
   $100 = (($$lcssa$i8) + ($57)|0);
   store1($100,0);
  }
 } while(0);
 $101 = ((($29)) + 84|0);
 $102 = ((($1)) + 48|0);
 $103 = ($101|0)==($102|0);
 if ($103) {
  STACKTOP = sp;return ($29|0);
 }
 $104 = ((($102)) + 11|0);
 $105 = load1($104);
 $106 = ($105<<24>>24)<(0);
 $107 = load4($102);
 $108 = $106 ? $107 : $102;
 $109 = ((($1)) + 52|0);
 $110 = load4($109);
 $111 = $105&255;
 $112 = $106 ? $110 : $111;
 $113 = ((($101)) + 11|0);
 $114 = load1($113);
 $115 = ($114<<24>>24)<(0);
 if ($115) {
  $116 = ((($29)) + 92|0);
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
   $127 = ((($29)) + 88|0);
   store4($127,$112);
   STACKTOP = sp;return ($29|0);
  } else {
   $128 = $112&255;
   store1($113,$128);
   STACKTOP = sp;return ($29|0);
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
    $143 = load4(10072);
    $144 = (($143) + 0)|0;
    store4(10072,$144);
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
 $153 = ((($29)) + 92|0);
 store4($153,$152);
 $154 = ((($29)) + 88|0);
 store4($154,$112);
 $155 = (($$lcssa$i17) + ($112)|0);
 store1($155,0);
 STACKTOP = sp;return ($29|0);
}
function __Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $2 = sp + 60|0;
 $3 = sp;
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $4 = ((($0)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 if ($6) {
  $7 = load4($0);
  $8 = ((($0)) + 4|0);
  $9 = load4($8);
  $10 = ($9>>>0)>(4294967279);
  if ($10) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $11 = ($9>>>0)<(11);
  if ($11) {
   $26 = $9&255;
   $27 = ((($2)) + 11|0);
   store1($27,$26);
   $28 = ($9|0)==(0);
   if ($28) {
    $$017$i = $2;
   } else {
    $$016$i = $2;
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
      $17 = load4(10072);
      $18 = (($17) + 0)|0;
      store4(10072,$18);
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
   store4($2,$$lcssa$i);
   $23 = $13 | -2147483648;
   $24 = ((($2)) + 8|0);
   store4($24,$23);
   $25 = ((($2)) + 4|0);
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
  ; store8($2,load8($0,4),4); store4($2+8 | 0,load4($0+8 | 0,4),4);
 }
 __ZN9VNodeDataC2ERKS_($3,$1);
 $30 = (__Z5_h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($2,$3)|0);
 $31 = $30;
 $32 = ((($3)) + 48|0);
 $33 = ((($32)) + 11|0);
 $34 = load1($33);
 $35 = ($34<<24>>24)<(0);
 if ($35) {
  $36 = load4($32);
  _free($36);
 }
 $37 = ((($3)) + 36|0);
 $38 = ((($37)) + 11|0);
 $39 = load1($38);
 $40 = ($39<<24>>24)<(0);
 if ($40) {
  $41 = load4($37);
  _free($41);
 }
 $42 = ((($3)) + 28|0);
 $43 = load4($42);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($43);
 $44 = ((($3)) + 16|0);
 $45 = load4($44);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($45);
 $46 = ((($3)) + 4|0);
 $47 = load4($46);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($47);
 $48 = ((($2)) + 11|0);
 $49 = load1($48);
 $50 = ($49<<24>>24)<(0);
 if (!($50)) {
  STACKTOP = sp;return ($31|0);
 }
 $51 = load4($2);
 _free($51);
 STACKTOP = sp;return ($31|0);
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
      $78 = load4(10072);
      $79 = (($78) + 0)|0;
      store4(10072,$79);
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
     $106 = load4(10072);
     $107 = (($106) + 0)|0;
     store4(10072,$107);
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
function __Z4h_scNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_6vectorIjNS3_IjEEEE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i2 = 0, $$010 = 0, $$016$i = 0, $$017$i = 0, $$in = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0;
 var $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0;
 var $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0;
 var $146 = 0, $147 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = sp + 12|0;
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $4 = ((($0)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 if ($6) {
  $7 = load4($0);
  $8 = ((($0)) + 4|0);
  $9 = load4($8);
  $10 = ($9>>>0)>(4294967279);
  if ($10) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $11 = ($9>>>0)<(11);
  if ($11) {
   $26 = $9&255;
   $27 = ((($2)) + 11|0);
   store1($27,$26);
   $28 = ($9|0)==(0);
   if ($28) {
    $$017$i = $2;
   } else {
    $$016$i = $2;
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
      $17 = load4(10072);
      $18 = (($17) + 0)|0;
      store4(10072,$18);
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
   store4($2,$$lcssa$i);
   $23 = $13 | -2147483648;
   $24 = ((($2)) + 8|0);
   store4($24,$23);
   $25 = ((($2)) + 4|0);
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
  ; store8($2,load8($0,4),4); store4($2+8 | 0,load4($0+8 | 0,4),4);
 }
 $30 = (__Z4_h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($2)|0);
 $31 = ((($2)) + 11|0);
 $32 = load1($31);
 $33 = ($32<<24>>24)<(0);
 if ($33) {
  $34 = load4($2);
  _free($34);
 }
 $35 = ((($1)) + 4|0);
 $36 = load4($35);
 $37 = load4($1);
 $38 = ($36|0)==($37|0);
 if (!($38)) {
  $39 = ((($30)) + 104|0);
  $40 = ((($30)) + 108|0);
  $41 = ((($30)) + 100|0);
  $$010 = 0;$$in = $37;
  while(1) {
   $134 = $$in;
   $135 = (($134) + ($$010<<2)|0);
   $136 = load4($135);
   store4($3,$136);
   $137 = load4($39);
   $138 = load4($40);
   $139 = ($137>>>0)<($138>>>0);
   if ($139) {
    store4($137,$136);
    $140 = load4($39);
    $141 = ((($140)) + 4|0);
    store4($39,$141);
   } else {
    __ZNSt3__26vectorIP5VNodeNS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_($41,$3);
   }
   $142 = (($$010) + 1)|0;
   $143 = load4($35);
   $144 = load4($1);
   $145 = (($143) - ($144))|0;
   $146 = $145 >> 2;
   $147 = ($142>>>0)<($146>>>0);
   if ($147) {
    $$010 = $142;$$in = $144;
   } else {
    break;
   }
  }
 }
 $42 = ((($30)) + 12|0);
 $43 = ((($30)) + 72|0);
 $44 = ((($43)) + 11|0);
 $45 = load1($44);
 $46 = ($45<<24>>24)<(0);
 $47 = load4($43);
 $48 = $46 ? $47 : $43;
 $49 = ((($30)) + 76|0);
 $50 = load4($49);
 $51 = $45&255;
 $52 = $46 ? $50 : $51;
 $53 = ((($42)) + 11|0);
 $54 = load1($53);
 $55 = ($54<<24>>24)<(0);
 if ($55) {
  $56 = ((($30)) + 20|0);
  $57 = load4($56);
  $58 = $57 & 2147483647;
  $phitmp$i$i = (($58) + -1)|0;
  $60 = $phitmp$i$i;
 } else {
  $60 = 10;
 }
 $59 = ($52>>>0)>($60>>>0);
 do {
  if ($59) {
   $69 = (($52) - ($60))|0;
   $70 = (-18 - ($60))|0;
   $71 = ($70>>>0)<($69>>>0);
   if ($71) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($55) {
    $72 = load4($42);
    $91 = $72;
   } else {
    $91 = $42;
   }
   $73 = ($60>>>0)<(2147483623);
   if ($73) {
    $74 = $60 << 1;
    $75 = ($52>>>0)<($74>>>0);
    $$sroa$speculated$i = $75 ? $74 : $52;
    $76 = ($$sroa$speculated$i>>>0)<(11);
    $77 = (($$sroa$speculated$i) + 16)|0;
    $78 = $77 & -16;
    $phitmp$i = $76 ? 11 : $78;
    $80 = $phitmp$i;
   } else {
    $80 = -17;
   }
   $79 = ($80|0)==(0);
   $$$i2 = $79 ? 1 : $80;
   $81 = (_malloc($$$i2)|0);
   $82 = ($81|0)==(0|0);
   L46: do {
    if ($82) {
     while(1) {
      $83 = load4(10072);
      $84 = (($83) + 0)|0;
      store4(10072,$84);
      $85 = ($83|0)==(0);
      if ($85) {
       $$lcssa$i8 = 0;
       break L46;
      }
      $86 = $83;
      FUNCTION_TABLE_v[$86 & 3]();
      $87 = (_malloc($$$i2)|0);
      $88 = ($87|0)==(0|0);
      if (!($88)) {
       $$lcssa$i8 = $87;
       break;
      }
     }
    } else {
     $$lcssa$i8 = $81;
    }
   } while(0);
   $89 = ($52|0)==(0);
   if (!($89)) {
    _memcpy(($$lcssa$i8|0),($48|0),($52|0))|0;
   }
   $90 = ($60|0)==(10);
   if (!($90)) {
    _free($91);
   }
   store4($42,$$lcssa$i8);
   $92 = $80 | -2147483648;
   $93 = ((($30)) + 20|0);
   store4($93,$92);
   $94 = ((($30)) + 16|0);
   store4($94,$52);
   $95 = (($$lcssa$i8) + ($52)|0);
   store1($95,0);
  } else {
   if ($55) {
    $61 = load4($42);
    $63 = $61;
   } else {
    $63 = $42;
   }
   $62 = ($52|0)==(0);
   if (!($62)) {
    _memmove(($63|0),($48|0),($52|0))|0;
   }
   $64 = (($63) + ($52)|0);
   store1($64,0);
   $65 = load1($53);
   $66 = ($65<<24>>24)<(0);
   if ($66) {
    $67 = ((($30)) + 16|0);
    store4($67,$52);
    break;
   } else {
    $68 = $52&255;
    store1($53,$68);
    break;
   }
  }
 } while(0);
 $96 = ((($30)) + 11|0);
 $97 = load1($96);
 $98 = ($97<<24>>24)<(0);
 if ($98) {
  $99 = ((($30)) + 4|0);
  $100 = load4($99);
  $103 = $100;
 } else {
  $101 = $97&255;
  $103 = $101;
 }
 $102 = ($103>>>0)>(2);
 if (!($102)) {
  $133 = $30;
  STACKTOP = sp;return ($133|0);
 }
 if ($98) {
  $104 = load4($30);
  $106 = $104;
 } else {
  $106 = $30;
 }
 $105 = load1($106);
 $107 = ($105<<24>>24)==(115);
 if (!($107)) {
  $133 = $30;
  STACKTOP = sp;return ($133|0);
 }
 if ($98) {
  $108 = load4($30);
  $110 = $108;
 } else {
  $110 = $30;
 }
 $109 = ((($110)) + 1|0);
 $111 = load1($109);
 $112 = ($111<<24>>24)==(118);
 if (!($112)) {
  $133 = $30;
  STACKTOP = sp;return ($133|0);
 }
 if ($98) {
  $113 = load4($30);
  $115 = $113;
 } else {
  $115 = $30;
 }
 $114 = ((($115)) + 2|0);
 $116 = load1($114);
 $117 = ($116<<24>>24)==(103);
 if (!($117)) {
  $133 = $30;
  STACKTOP = sp;return ($133|0);
 }
 if ($98) {
  $118 = ((($30)) + 4|0);
  $119 = load4($118);
  $122 = $119;
 } else {
  $120 = $97&255;
  $122 = $120;
 }
 $121 = ($122|0)==(3);
 if (!($121)) {
  if ($98) {
   $123 = load4($30);
   $125 = $123;
  } else {
   $125 = $30;
  }
  $124 = ((($125)) + 3|0);
  $126 = load1($124);
  $127 = ($126<<24>>24)==(46);
  if (!($127)) {
   if ($98) {
    $128 = load4($30);
    $130 = $128;
   } else {
    $130 = $30;
   }
   $129 = ((($130)) + 3|0);
   $131 = load1($129);
   $132 = ($131<<24>>24)==(35);
   if (!($132)) {
    $133 = $30;
    STACKTOP = sp;return ($133|0);
   }
  }
 }
 __Z5addNSP5VNode($30);
 $133 = $30;
 STACKTOP = sp;return ($133|0);
}
function __ZNKSt3__26vectorIjNS_9allocatorIjEEE4sizeEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 4|0);
 $2 = load4($1);
 $3 = load4($0);
 $4 = (($2) - ($3))|0;
 $5 = $4 >> 2;
 return ($5|0);
}
function __Z5h_sdnNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataj($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i2 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0;
 var $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0;
 var $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0;
 var $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $3 = sp + 60|0;
 $4 = sp;
 $5 = sp + 72|0;
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $6 = ((($0)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 if ($8) {
  $9 = load4($0);
  $10 = ((($0)) + 4|0);
  $11 = load4($10);
  $12 = ($11>>>0)>(4294967279);
  if ($12) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $13 = ($11>>>0)<(11);
  if ($13) {
   $28 = $11&255;
   $29 = ((($3)) + 11|0);
   store1($29,$28);
   $30 = ($11|0)==(0);
   if ($30) {
    $$017$i = $3;
   } else {
    $$016$i = $3;
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
      $19 = load4(10072);
      $20 = (($19) + 0)|0;
      store4(10072,$20);
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
   store4($3,$$lcssa$i);
   $25 = $15 | -2147483648;
   $26 = ((($3)) + 8|0);
   store4($26,$25);
   $27 = ((($3)) + 4|0);
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
  ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
 }
 __ZN9VNodeDataC2ERKS_($4,$1);
 $32 = (__Z5_h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($3,$4)|0);
 $33 = ((($4)) + 48|0);
 $34 = ((($33)) + 11|0);
 $35 = load1($34);
 $36 = ($35<<24>>24)<(0);
 if ($36) {
  $37 = load4($33);
  _free($37);
 }
 $38 = ((($4)) + 36|0);
 $39 = ((($38)) + 11|0);
 $40 = load1($39);
 $41 = ($40<<24>>24)<(0);
 if ($41) {
  $42 = load4($38);
  _free($42);
 }
 $43 = ((($4)) + 28|0);
 $44 = load4($43);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($44);
 $45 = ((($4)) + 16|0);
 $46 = load4($45);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($46);
 $47 = ((($4)) + 4|0);
 $48 = load4($47);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($48);
 $49 = ((($3)) + 11|0);
 $50 = load1($49);
 $51 = ($50<<24>>24)<(0);
 if ($51) {
  $52 = load4($3);
  _free($52);
 }
 $53 = $2;
 store4($5,$53);
 $54 = ((($32)) + 104|0);
 $55 = load4($54);
 $56 = ((($32)) + 108|0);
 $57 = load4($56);
 $58 = ($55>>>0)<($57>>>0);
 if ($58) {
  store4($55,$2);
  $59 = load4($54);
  $60 = ((($59)) + 4|0);
  store4($54,$60);
 } else {
  $61 = ((($32)) + 100|0);
  __ZNSt3__26vectorIP5VNodeNS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_($61,$5);
 }
 $62 = ((($32)) + 12|0);
 $63 = ((($32)) + 72|0);
 $64 = ((($63)) + 11|0);
 $65 = load1($64);
 $66 = ($65<<24>>24)<(0);
 $67 = load4($63);
 $68 = $66 ? $67 : $63;
 $69 = ((($32)) + 76|0);
 $70 = load4($69);
 $71 = $65&255;
 $72 = $66 ? $70 : $71;
 $73 = ((($62)) + 11|0);
 $74 = load1($73);
 $75 = ($74<<24>>24)<(0);
 if ($75) {
  $76 = ((($32)) + 20|0);
  $77 = load4($76);
  $78 = $77 & 2147483647;
  $phitmp$i$i = (($78) + -1)|0;
  $80 = $phitmp$i$i;
 } else {
  $80 = 10;
 }
 $79 = ($72>>>0)>($80>>>0);
 do {
  if ($79) {
   $89 = (($72) - ($80))|0;
   $90 = (-18 - ($80))|0;
   $91 = ($90>>>0)<($89>>>0);
   if ($91) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($75) {
    $92 = load4($62);
    $111 = $92;
   } else {
    $111 = $62;
   }
   $93 = ($80>>>0)<(2147483623);
   if ($93) {
    $94 = $80 << 1;
    $95 = ($72>>>0)<($94>>>0);
    $$sroa$speculated$i = $95 ? $94 : $72;
    $96 = ($$sroa$speculated$i>>>0)<(11);
    $97 = (($$sroa$speculated$i) + 16)|0;
    $98 = $97 & -16;
    $phitmp$i = $96 ? 11 : $98;
    $100 = $phitmp$i;
   } else {
    $100 = -17;
   }
   $99 = ($100|0)==(0);
   $$$i2 = $99 ? 1 : $100;
   $101 = (_malloc($$$i2)|0);
   $102 = ($101|0)==(0|0);
   L47: do {
    if ($102) {
     while(1) {
      $103 = load4(10072);
      $104 = (($103) + 0)|0;
      store4(10072,$104);
      $105 = ($103|0)==(0);
      if ($105) {
       $$lcssa$i8 = 0;
       break L47;
      }
      $106 = $103;
      FUNCTION_TABLE_v[$106 & 3]();
      $107 = (_malloc($$$i2)|0);
      $108 = ($107|0)==(0|0);
      if (!($108)) {
       $$lcssa$i8 = $107;
       break;
      }
     }
    } else {
     $$lcssa$i8 = $101;
    }
   } while(0);
   $109 = ($72|0)==(0);
   if (!($109)) {
    _memcpy(($$lcssa$i8|0),($68|0),($72|0))|0;
   }
   $110 = ($80|0)==(10);
   if (!($110)) {
    _free($111);
   }
   store4($62,$$lcssa$i8);
   $112 = $100 | -2147483648;
   $113 = ((($32)) + 20|0);
   store4($113,$112);
   $114 = ((($32)) + 16|0);
   store4($114,$72);
   $115 = (($$lcssa$i8) + ($72)|0);
   store1($115,0);
  } else {
   if ($75) {
    $81 = load4($62);
    $83 = $81;
   } else {
    $83 = $62;
   }
   $82 = ($72|0)==(0);
   if (!($82)) {
    _memmove(($83|0),($68|0),($72|0))|0;
   }
   $84 = (($83) + ($72)|0);
   store1($84,0);
   $85 = load1($73);
   $86 = ($85<<24>>24)<(0);
   if ($86) {
    $87 = ((($32)) + 16|0);
    store4($87,$72);
    break;
   } else {
    $88 = $72&255;
    store1($73,$88);
    break;
   }
  }
 } while(0);
 $116 = ((($32)) + 11|0);
 $117 = load1($116);
 $118 = ($117<<24>>24)<(0);
 if ($118) {
  $119 = ((($32)) + 4|0);
  $120 = load4($119);
  $123 = $120;
 } else {
  $121 = $117&255;
  $123 = $121;
 }
 $122 = ($123>>>0)>(2);
 if (!($122)) {
  $153 = $32;
  STACKTOP = sp;return ($153|0);
 }
 if ($118) {
  $124 = load4($32);
  $126 = $124;
 } else {
  $126 = $32;
 }
 $125 = load1($126);
 $127 = ($125<<24>>24)==(115);
 if (!($127)) {
  $153 = $32;
  STACKTOP = sp;return ($153|0);
 }
 if ($118) {
  $128 = load4($32);
  $130 = $128;
 } else {
  $130 = $32;
 }
 $129 = ((($130)) + 1|0);
 $131 = load1($129);
 $132 = ($131<<24>>24)==(118);
 if (!($132)) {
  $153 = $32;
  STACKTOP = sp;return ($153|0);
 }
 if ($118) {
  $133 = load4($32);
  $135 = $133;
 } else {
  $135 = $32;
 }
 $134 = ((($135)) + 2|0);
 $136 = load1($134);
 $137 = ($136<<24>>24)==(103);
 if (!($137)) {
  $153 = $32;
  STACKTOP = sp;return ($153|0);
 }
 if ($118) {
  $138 = ((($32)) + 4|0);
  $139 = load4($138);
  $142 = $139;
 } else {
  $140 = $117&255;
  $142 = $140;
 }
 $141 = ($142|0)==(3);
 do {
  if (!($141)) {
   if ($118) {
    $143 = load4($32);
    $145 = $143;
   } else {
    $145 = $32;
   }
   $144 = ((($145)) + 3|0);
   $146 = load1($144);
   $147 = ($146<<24>>24)==(46);
   if (!($147)) {
    if ($118) {
     $148 = load4($32);
     $150 = $148;
    } else {
     $150 = $32;
    }
    $149 = ((($150)) + 3|0);
    $151 = load1($149);
    $152 = ($151<<24>>24)==(35);
    if ($152) {
     break;
    }
    $153 = $32;
    STACKTOP = sp;return ($153|0);
   }
  }
 } while(0);
 __Z5addNSP5VNode($32);
 $153 = $32;
 STACKTOP = sp;return ($153|0);
}
function __Z5h_sdtNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataS5_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i2 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0;
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $3 = sp + 60|0;
 $4 = sp;
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $5 = ((($0)) + 11|0);
 $6 = load1($5);
 $7 = ($6<<24>>24)<(0);
 if ($7) {
  $8 = load4($0);
  $9 = ((($0)) + 4|0);
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
      $18 = load4(10072);
      $19 = (($18) + 0)|0;
      store4(10072,$19);
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
  ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
 }
 __ZN9VNodeDataC2ERKS_($4,$1);
 $31 = (__Z5_h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($3,$4)|0);
 $32 = ((($4)) + 48|0);
 $33 = ((($32)) + 11|0);
 $34 = load1($33);
 $35 = ($34<<24>>24)<(0);
 if ($35) {
  $36 = load4($32);
  _free($36);
 }
 $37 = ((($4)) + 36|0);
 $38 = ((($37)) + 11|0);
 $39 = load1($38);
 $40 = ($39<<24>>24)<(0);
 if ($40) {
  $41 = load4($37);
  _free($41);
 }
 $42 = ((($4)) + 28|0);
 $43 = load4($42);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($43);
 $44 = ((($4)) + 16|0);
 $45 = load4($44);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($45);
 $46 = ((($4)) + 4|0);
 $47 = load4($46);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($47);
 $48 = ((($3)) + 11|0);
 $49 = load1($48);
 $50 = ($49<<24>>24)<(0);
 if ($50) {
  $51 = load4($3);
  _free($51);
 }
 $52 = ((($31)) + 24|0);
 $53 = ($52|0)==($2|0);
 if ($53) {
  $106 = $31;
  STACKTOP = sp;return ($106|0);
 }
 $54 = ((($2)) + 11|0);
 $55 = load1($54);
 $56 = ($55<<24>>24)<(0);
 $57 = load4($2);
 $58 = $56 ? $57 : $2;
 $59 = ((($2)) + 4|0);
 $60 = load4($59);
 $61 = $55&255;
 $62 = $56 ? $60 : $61;
 $63 = ((($52)) + 11|0);
 $64 = load1($63);
 $65 = ($64<<24>>24)<(0);
 if ($65) {
  $66 = ((($31)) + 32|0);
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
   $77 = ((($31)) + 28|0);
   store4($77,$62);
   $106 = $31;
   STACKTOP = sp;return ($106|0);
  } else {
   $78 = $62&255;
   store1($63,$78);
   $106 = $31;
   STACKTOP = sp;return ($106|0);
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
    $93 = load4(10072);
    $94 = (($93) + 0)|0;
    store4(10072,$94);
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
 $103 = ((($31)) + 32|0);
 store4($103,$102);
 $104 = ((($31)) + 28|0);
 store4($104,$62);
 $105 = (($$lcssa$i8) + ($62)|0);
 store1($105,0);
 $106 = $31;
 STACKTOP = sp;return ($106|0);
}
function __Z5h_sdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataNS_6vectorIjNS3_IjEEEE($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i2 = 0, $$012 = 0, $$016$i = 0, $$017$i = 0, $$in = 0, $$lcssa$i = 0, $$lcssa$i8 = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0;
 var $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0;
 var $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0;
 var $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0;
 var $164 = 0, $165 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0;
 var $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $3 = sp + 60|0;
 $4 = sp;
 $5 = sp + 72|0;
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $6 = ((($0)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 if ($8) {
  $9 = load4($0);
  $10 = ((($0)) + 4|0);
  $11 = load4($10);
  $12 = ($11>>>0)>(4294967279);
  if ($12) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $13 = ($11>>>0)<(11);
  if ($13) {
   $28 = $11&255;
   $29 = ((($3)) + 11|0);
   store1($29,$28);
   $30 = ($11|0)==(0);
   if ($30) {
    $$017$i = $3;
   } else {
    $$016$i = $3;
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
      $19 = load4(10072);
      $20 = (($19) + 0)|0;
      store4(10072,$20);
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
   store4($3,$$lcssa$i);
   $25 = $15 | -2147483648;
   $26 = ((($3)) + 8|0);
   store4($26,$25);
   $27 = ((($3)) + 4|0);
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
  ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
 }
 __ZN9VNodeDataC2ERKS_($4,$1);
 $32 = (__Z5_h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($3,$4)|0);
 $33 = ((($4)) + 48|0);
 $34 = ((($33)) + 11|0);
 $35 = load1($34);
 $36 = ($35<<24>>24)<(0);
 if ($36) {
  $37 = load4($33);
  _free($37);
 }
 $38 = ((($4)) + 36|0);
 $39 = ((($38)) + 11|0);
 $40 = load1($39);
 $41 = ($40<<24>>24)<(0);
 if ($41) {
  $42 = load4($38);
  _free($42);
 }
 $43 = ((($4)) + 28|0);
 $44 = load4($43);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($44);
 $45 = ((($4)) + 16|0);
 $46 = load4($45);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($46);
 $47 = ((($4)) + 4|0);
 $48 = load4($47);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($48);
 $49 = ((($3)) + 11|0);
 $50 = load1($49);
 $51 = ($50<<24>>24)<(0);
 if ($51) {
  $52 = load4($3);
  _free($52);
 }
 $53 = ((($2)) + 4|0);
 $54 = load4($53);
 $55 = load4($2);
 $56 = ($54|0)==($55|0);
 if (!($56)) {
  $57 = ((($32)) + 104|0);
  $58 = ((($32)) + 108|0);
  $59 = ((($32)) + 100|0);
  $$012 = 0;$$in = $55;
  while(1) {
   $152 = $$in;
   $153 = (($152) + ($$012<<2)|0);
   $154 = load4($153);
   store4($5,$154);
   $155 = load4($57);
   $156 = load4($58);
   $157 = ($155>>>0)<($156>>>0);
   if ($157) {
    store4($155,$154);
    $158 = load4($57);
    $159 = ((($158)) + 4|0);
    store4($57,$159);
   } else {
    __ZNSt3__26vectorIP5VNodeNS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_($59,$5);
   }
   $160 = (($$012) + 1)|0;
   $161 = load4($53);
   $162 = load4($2);
   $163 = (($161) - ($162))|0;
   $164 = $163 >> 2;
   $165 = ($160>>>0)<($164>>>0);
   if ($165) {
    $$012 = $160;$$in = $162;
   } else {
    break;
   }
  }
 }
 $60 = ((($32)) + 12|0);
 $61 = ((($32)) + 72|0);
 $62 = ((($61)) + 11|0);
 $63 = load1($62);
 $64 = ($63<<24>>24)<(0);
 $65 = load4($61);
 $66 = $64 ? $65 : $61;
 $67 = ((($32)) + 76|0);
 $68 = load4($67);
 $69 = $63&255;
 $70 = $64 ? $68 : $69;
 $71 = ((($60)) + 11|0);
 $72 = load1($71);
 $73 = ($72<<24>>24)<(0);
 if ($73) {
  $74 = ((($32)) + 20|0);
  $75 = load4($74);
  $76 = $75 & 2147483647;
  $phitmp$i$i = (($76) + -1)|0;
  $78 = $phitmp$i$i;
 } else {
  $78 = 10;
 }
 $77 = ($70>>>0)>($78>>>0);
 do {
  if ($77) {
   $87 = (($70) - ($78))|0;
   $88 = (-18 - ($78))|0;
   $89 = ($88>>>0)<($87>>>0);
   if ($89) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($73) {
    $90 = load4($60);
    $109 = $90;
   } else {
    $109 = $60;
   }
   $91 = ($78>>>0)<(2147483623);
   if ($91) {
    $92 = $78 << 1;
    $93 = ($70>>>0)<($92>>>0);
    $$sroa$speculated$i = $93 ? $92 : $70;
    $94 = ($$sroa$speculated$i>>>0)<(11);
    $95 = (($$sroa$speculated$i) + 16)|0;
    $96 = $95 & -16;
    $phitmp$i = $94 ? 11 : $96;
    $98 = $phitmp$i;
   } else {
    $98 = -17;
   }
   $97 = ($98|0)==(0);
   $$$i2 = $97 ? 1 : $98;
   $99 = (_malloc($$$i2)|0);
   $100 = ($99|0)==(0|0);
   L52: do {
    if ($100) {
     while(1) {
      $101 = load4(10072);
      $102 = (($101) + 0)|0;
      store4(10072,$102);
      $103 = ($101|0)==(0);
      if ($103) {
       $$lcssa$i8 = 0;
       break L52;
      }
      $104 = $101;
      FUNCTION_TABLE_v[$104 & 3]();
      $105 = (_malloc($$$i2)|0);
      $106 = ($105|0)==(0|0);
      if (!($106)) {
       $$lcssa$i8 = $105;
       break;
      }
     }
    } else {
     $$lcssa$i8 = $99;
    }
   } while(0);
   $107 = ($70|0)==(0);
   if (!($107)) {
    _memcpy(($$lcssa$i8|0),($66|0),($70|0))|0;
   }
   $108 = ($78|0)==(10);
   if (!($108)) {
    _free($109);
   }
   store4($60,$$lcssa$i8);
   $110 = $98 | -2147483648;
   $111 = ((($32)) + 20|0);
   store4($111,$110);
   $112 = ((($32)) + 16|0);
   store4($112,$70);
   $113 = (($$lcssa$i8) + ($70)|0);
   store1($113,0);
  } else {
   if ($73) {
    $79 = load4($60);
    $81 = $79;
   } else {
    $81 = $60;
   }
   $80 = ($70|0)==(0);
   if (!($80)) {
    _memmove(($81|0),($66|0),($70|0))|0;
   }
   $82 = (($81) + ($70)|0);
   store1($82,0);
   $83 = load1($71);
   $84 = ($83<<24>>24)<(0);
   if ($84) {
    $85 = ((($32)) + 16|0);
    store4($85,$70);
    break;
   } else {
    $86 = $70&255;
    store1($71,$86);
    break;
   }
  }
 } while(0);
 $114 = ((($32)) + 11|0);
 $115 = load1($114);
 $116 = ($115<<24>>24)<(0);
 if ($116) {
  $117 = ((($32)) + 4|0);
  $118 = load4($117);
  $121 = $118;
 } else {
  $119 = $115&255;
  $121 = $119;
 }
 $120 = ($121>>>0)>(2);
 if (!($120)) {
  $151 = $32;
  STACKTOP = sp;return ($151|0);
 }
 if ($116) {
  $122 = load4($32);
  $124 = $122;
 } else {
  $124 = $32;
 }
 $123 = load1($124);
 $125 = ($123<<24>>24)==(115);
 if (!($125)) {
  $151 = $32;
  STACKTOP = sp;return ($151|0);
 }
 if ($116) {
  $126 = load4($32);
  $128 = $126;
 } else {
  $128 = $32;
 }
 $127 = ((($128)) + 1|0);
 $129 = load1($127);
 $130 = ($129<<24>>24)==(118);
 if (!($130)) {
  $151 = $32;
  STACKTOP = sp;return ($151|0);
 }
 if ($116) {
  $131 = load4($32);
  $133 = $131;
 } else {
  $133 = $32;
 }
 $132 = ((($133)) + 2|0);
 $134 = load1($132);
 $135 = ($134<<24>>24)==(103);
 if (!($135)) {
  $151 = $32;
  STACKTOP = sp;return ($151|0);
 }
 if ($116) {
  $136 = ((($32)) + 4|0);
  $137 = load4($136);
  $140 = $137;
 } else {
  $138 = $115&255;
  $140 = $138;
 }
 $139 = ($140|0)==(3);
 do {
  if (!($139)) {
   if ($116) {
    $141 = load4($32);
    $143 = $141;
   } else {
    $143 = $32;
   }
   $142 = ((($143)) + 3|0);
   $144 = load1($142);
   $145 = ($144<<24>>24)==(46);
   if (!($145)) {
    if ($116) {
     $146 = load4($32);
     $148 = $146;
    } else {
     $148 = $32;
    }
    $147 = ((($148)) + 3|0);
    $149 = load1($147);
    $150 = ($149<<24>>24)==(35);
    if ($150) {
     break;
    }
    $151 = $32;
    STACKTOP = sp;return ($151|0);
   }
  }
 } while(0);
 __Z5addNSP5VNode($32);
 $151 = $32;
 STACKTOP = sp;return ($151|0);
}
function __Z6h_stdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_9VNodeDataNS_6vectorIjNS3_IjEEEE($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$$i$i = 0, $$$i1$i = 0, $$$i17 = 0, $$$i25 = 0, $$$i9 = 0, $$$i9$i = 0, $$016$i = 0, $$016$i$i = 0, $$016$i3 = 0, $$016$i3$i = 0, $$017$i = 0, $$017$i$i = 0, $$017$i4 = 0, $$017$i4$i = 0, $$035 = 0, $$in = 0, $$lcssa$i = 0, $$lcssa$i$i = 0, $$lcssa$i15 = 0;
 var $$lcssa$i15$i = 0, $$lcssa$i23 = 0, $$lcssa$i23$ph = 0, $$lcssa$i31 = 0, $$lcssa$i7 = 0, $$lcssa$i7$i = 0, $$pre = 0, $$pre34 = 0, $$pre35 = 0, $$pre36 = 0, $$sroa$0$0 = 0, $$sroa$5$0 = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0;
 var $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0;
 var $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0;
 var $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0;
 var $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0;
 var $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0;
 var $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0;
 var $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0;
 var $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0;
 var $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0;
 var $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0;
 var $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0;
 var $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $scevgep$i$i$i25 = 0, $scevgep4$i$i$i26 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0;
 $4 = sp + 88|0;
 $5 = sp + 84|0;
 $6 = sp + 72|0;
 $7 = sp + 60|0;
 $8 = sp;
 store4($4,0);
 $9 = ((($4)) + 4|0);
 store4($9,0);
 $10 = ((($4)) + 8|0);
 store4($10,0);
 $11 = ((($3)) + 4|0);
 $12 = load4($11);
 $13 = load4($3);
 $14 = ($12|0)==($13|0);
 L1: do {
  if (!($14)) {
   $15 = ((($4)) + 8|0);
   $$035 = 0;$$in = $13;$80 = 0;$81 = 0;
   while(1) {
    $76 = $$in;
    $77 = (($76) + ($$035<<2)|0);
    $78 = load4($77);
    store4($5,$78);
    $79 = ($80>>>0)<($81>>>0);
    if ($79) {
     store4($80,$78);
     $82 = ((($80)) + 4|0);
     store4($9,$82);
    } else {
     __ZNSt3__26vectorIP5VNodeNS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_($4,$5);
    }
    $83 = (($$035) + 1)|0;
    $84 = load4($11);
    $85 = load4($3);
    $86 = (($84) - ($85))|0;
    $87 = $86 >> 2;
    $88 = ($83>>>0)<($87>>>0);
    if (!($88)) {
     break L1;
    }
    $$pre = load4($9);
    $$pre36 = load4($15);
    $$035 = $83;$$in = $85;$80 = $$pre;$81 = $$pre36;
   }
  }
 } while(0);
 $16 = (_malloc(112)|0);
 $17 = ($16|0)==(0|0);
 L11: do {
  if ($17) {
   while(1) {
    $18 = load4(10072);
    $19 = (($18) + 0)|0;
    store4(10072,$19);
    $20 = ($18|0)==(0);
    if ($20) {
     $$lcssa$i = 0;
     break L11;
    }
    $21 = $18;
    FUNCTION_TABLE_v[$21 & 3]();
    $22 = (_malloc(112)|0);
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
 ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
 $24 = ((($0)) + 11|0);
 $25 = load1($24);
 $26 = ($25<<24>>24)<(0);
 if ($26) {
  $27 = load4($0);
  $28 = ((($0)) + 4|0);
  $29 = load4($28);
  $30 = ($29>>>0)>(4294967279);
  if ($30) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $31 = ($29>>>0)<(11);
  if ($31) {
   $46 = $29&255;
   $47 = ((($6)) + 11|0);
   store1($47,$46);
   $48 = ($29|0)==(0);
   if ($48) {
    $$017$i = $6;
   } else {
    $$016$i = $6;
    label = 16;
   }
  } else {
   $32 = (($29) + 16)|0;
   $33 = $32 & -16;
   $34 = ($33|0)==(0);
   $$$i = $34 ? 1 : $33;
   $35 = (_malloc($$$i)|0);
   $36 = ($35|0)==(0|0);
   L24: do {
    if ($36) {
     while(1) {
      $37 = load4(10072);
      $38 = (($37) + 0)|0;
      store4(10072,$38);
      $39 = ($37|0)==(0);
      if ($39) {
       $$lcssa$i7 = 0;
       break L24;
      }
      $40 = $37;
      FUNCTION_TABLE_v[$40 & 3]();
      $41 = (_malloc($$$i)|0);
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
   store4($6,$$lcssa$i7);
   $43 = $33 | -2147483648;
   $44 = ((($6)) + 8|0);
   store4($44,$43);
   $45 = ((($6)) + 4|0);
   store4($45,$29);
   $$016$i = $$lcssa$i7;
   label = 16;
  }
  if ((label|0) == 16) {
   _memcpy(($$016$i|0),($27|0),($29|0))|0;
   $$017$i = $$016$i;
  }
  $49 = (($$017$i) + ($29)|0);
  store1($49,0);
 } else {
  ; store8($6,load8($0,4),4); store4($6+8 | 0,load4($0+8 | 0,4),4);
 }
 ; store8($7,i64_const(0,0),4); store4($7+8|0,0,4);
 $50 = ((($1)) + 11|0);
 $51 = load1($50);
 $52 = ($51<<24>>24)<(0);
 if ($52) {
  $53 = load4($1);
  $54 = ((($1)) + 4|0);
  $55 = load4($54);
  $56 = ($55>>>0)>(4294967279);
  if ($56) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $57 = ($55>>>0)<(11);
  if ($57) {
   $72 = $55&255;
   $73 = ((($7)) + 11|0);
   store1($73,$72);
   $74 = ($55|0)==(0);
   if ($74) {
    $$017$i4 = $7;
   } else {
    $$016$i3 = $7;
    label = 28;
   }
  } else {
   $58 = (($55) + 16)|0;
   $59 = $58 & -16;
   $60 = ($59|0)==(0);
   $$$i9 = $60 ? 1 : $59;
   $61 = (_malloc($$$i9)|0);
   $62 = ($61|0)==(0|0);
   L42: do {
    if ($62) {
     while(1) {
      $63 = load4(10072);
      $64 = (($63) + 0)|0;
      store4(10072,$64);
      $65 = ($63|0)==(0);
      if ($65) {
       $$lcssa$i15 = 0;
       break L42;
      }
      $66 = $63;
      FUNCTION_TABLE_v[$66 & 3]();
      $67 = (_malloc($$$i9)|0);
      $68 = ($67|0)==(0|0);
      if (!($68)) {
       $$lcssa$i15 = $67;
       break;
      }
     }
    } else {
     $$lcssa$i15 = $61;
    }
   } while(0);
   store4($7,$$lcssa$i15);
   $69 = $59 | -2147483648;
   $70 = ((($7)) + 8|0);
   store4($70,$69);
   $71 = ((($7)) + 4|0);
   store4($71,$55);
   $$016$i3 = $$lcssa$i15;
   label = 28;
  }
  if ((label|0) == 28) {
   _memcpy(($$016$i3|0),($53|0),($55|0))|0;
   $$017$i4 = $$016$i3;
  }
  $75 = (($$017$i4) + ($55)|0);
  store1($75,0);
 } else {
  ; store8($7,load8($1,4),4); store4($7+8 | 0,load4($1+8 | 0,4),4);
 }
 __ZN9VNodeDataC2ERKS_($8,$2);
 $89 = load4($9);
 $90 = load4($4);
 $91 = (($89) - ($90))|0;
 $92 = $91 >> 2;
 $93 = ($92|0)==(0);
 $94 = $90;
 if ($93) {
  $$sroa$0$0 = 0;$$sroa$5$0 = 0;
 } else {
  $95 = ($92>>>0)>(1073741823);
  if ($95) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $96 = ($91|0)==(0);
  $$$i17 = $96 ? 1 : $91;
  $97 = (_malloc($$$i17)|0);
  $98 = ($97|0)==(0|0);
  if ($98) {
   while(1) {
    $99 = load4(10072);
    $100 = (($99) + 0)|0;
    store4(10072,$100);
    $101 = ($99|0)==(0);
    if ($101) {
     $$lcssa$i23$ph = 0;
     break;
    }
    $102 = $99;
    FUNCTION_TABLE_v[$102 & 3]();
    $103 = (_malloc($$$i17)|0);
    $104 = ($103|0)==(0|0);
    if (!($104)) {
     $$lcssa$i23$ph = $103;
     break;
    }
   }
   $$pre34 = load4($4);
   $$pre35 = load4($9);
   $$lcssa$i23 = $$lcssa$i23$ph;$107 = $$pre34;$109 = $$pre35;
  } else {
   $$lcssa$i23 = $97;$107 = $94;$109 = $89;
  }
  $105 = $$lcssa$i23;
  $106 = $107;
  $108 = (($109) - ($106))|0;
  $110 = ($108|0)>(0);
  if ($110) {
   $111 = $108 >> 2;
   $112 = (($$lcssa$i23) + ($111<<2)|0);
   _memcpy(($$lcssa$i23|0),($107|0),($108|0))|0;
   $113 = $112;
   $$sroa$0$0 = $105;$$sroa$5$0 = $113;
  } else {
   $$sroa$0$0 = $105;$$sroa$5$0 = $105;
  }
 }
 ; store8($$lcssa$i,i64_const(0,0),4); store4($$lcssa$i+8|0,0,4);
 $114 = ((($6)) + 11|0);
 $115 = load1($114);
 $116 = ($115<<24>>24)<(0);
 if ($116) {
  $117 = load4($6);
  $118 = ((($6)) + 4|0);
  $119 = load4($118);
  $120 = ($119>>>0)>(4294967279);
  if ($120) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $121 = ($119>>>0)<(11);
  if ($121) {
   $136 = $119&255;
   $137 = ((($$lcssa$i)) + 11|0);
   store1($137,$136);
   $138 = ($119|0)==(0);
   if ($138) {
    $$017$i$i = $$lcssa$i;
   } else {
    $$016$i$i = $$lcssa$i;
    label = 54;
   }
  } else {
   $122 = (($119) + 16)|0;
   $123 = $122 & -16;
   $124 = ($123|0)==(0);
   $$$i$i = $124 ? 1 : $123;
   $125 = (_malloc($$$i$i)|0);
   $126 = ($125|0)==(0|0);
   L73: do {
    if ($126) {
     while(1) {
      $127 = load4(10072);
      $128 = (($127) + 0)|0;
      store4(10072,$128);
      $129 = ($127|0)==(0);
      if ($129) {
       $$lcssa$i$i = 0;
       break L73;
      }
      $130 = $127;
      FUNCTION_TABLE_v[$130 & 3]();
      $131 = (_malloc($$$i$i)|0);
      $132 = ($131|0)==(0|0);
      if (!($132)) {
       $$lcssa$i$i = $131;
       break;
      }
     }
    } else {
     $$lcssa$i$i = $125;
    }
   } while(0);
   store4($$lcssa$i,$$lcssa$i$i);
   $133 = $123 | -2147483648;
   $134 = ((($$lcssa$i)) + 8|0);
   store4($134,$133);
   $135 = ((($$lcssa$i)) + 4|0);
   store4($135,$119);
   $$016$i$i = $$lcssa$i$i;
   label = 54;
  }
  if ((label|0) == 54) {
   _memcpy(($$016$i$i|0),($117|0),($119|0))|0;
   $$017$i$i = $$016$i$i;
  }
  $139 = (($$017$i$i) + ($119)|0);
  store1($139,0);
 } else {
  ; store8($$lcssa$i,load8($6,4),4); store4($$lcssa$i+8 | 0,load4($6+8 | 0,4),4);
 }
 $140 = ((($$lcssa$i)) + 12|0);
 $141 = ((($$lcssa$i)) + 24|0);
 $142 = ((($7)) + 11|0);
 ; store8($140,i64_const(0,0),4); store8($140+8|0,i64_const(0,0),4); store8($140+16|0,i64_const(0,0),4);
 $143 = load1($142);
 $144 = ($143<<24>>24)<(0);
 if ($144) {
  $145 = load4($7);
  $146 = ((($7)) + 4|0);
  $147 = load4($146);
  $148 = ($147>>>0)>(4294967279);
  if ($148) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $149 = ($147>>>0)<(11);
  if ($149) {
   $164 = $147&255;
   $165 = ((($$lcssa$i)) + 35|0);
   store1($165,$164);
   $166 = ($147|0)==(0);
   if ($166) {
    $$017$i4$i = $141;
   } else {
    $$016$i3$i = $141;
    label = 66;
   }
  } else {
   $150 = (($147) + 16)|0;
   $151 = $150 & -16;
   $152 = ($151|0)==(0);
   $$$i1$i = $152 ? 1 : $151;
   $153 = (_malloc($$$i1$i)|0);
   $154 = ($153|0)==(0|0);
   L91: do {
    if ($154) {
     while(1) {
      $155 = load4(10072);
      $156 = (($155) + 0)|0;
      store4(10072,$156);
      $157 = ($155|0)==(0);
      if ($157) {
       $$lcssa$i7$i = 0;
       break L91;
      }
      $158 = $155;
      FUNCTION_TABLE_v[$158 & 3]();
      $159 = (_malloc($$$i1$i)|0);
      $160 = ($159|0)==(0|0);
      if (!($160)) {
       $$lcssa$i7$i = $159;
       break;
      }
     }
    } else {
     $$lcssa$i7$i = $153;
    }
   } while(0);
   store4($141,$$lcssa$i7$i);
   $161 = $151 | -2147483648;
   $162 = ((($$lcssa$i)) + 32|0);
   store4($162,$161);
   $163 = ((($$lcssa$i)) + 28|0);
   store4($163,$147);
   $$016$i3$i = $$lcssa$i7$i;
   label = 66;
  }
  if ((label|0) == 66) {
   _memcpy(($$016$i3$i|0),($145|0),($147|0))|0;
   $$017$i4$i = $$016$i3$i;
  }
  $167 = (($$017$i4$i) + ($147)|0);
  store1($167,0);
 } else {
  ; store8($141,load8($7,4),4); store4($141+8 | 0,load4($7+8 | 0,4),4);
 }
 $168 = ((($$lcssa$i)) + 36|0);
 __ZN9VNodeDataC2ERKS_($168,$8);
 $169 = ((($$lcssa$i)) + 96|0);
 store4($169,(1));
 $170 = ((($$lcssa$i)) + 100|0);
 store4($170,0);
 $171 = ((($$lcssa$i)) + 104|0);
 store4($171,0);
 $172 = ((($$lcssa$i)) + 108|0);
 store4($172,0);
 $173 = (($$sroa$5$0) - ($$sroa$0$0))|0;
 $174 = $173 >> 2;
 $175 = ($174|0)==(0);
 if (!($175)) {
  $176 = ($174>>>0)>(1073741823);
  if ($176) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $177 = ($173|0)==(0);
  $$$i9$i = $177 ? 1 : $173;
  $178 = (_malloc($$$i9$i)|0);
  $179 = ($178|0)==(0|0);
  L106: do {
   if ($179) {
    while(1) {
     $180 = load4(10072);
     $181 = (($180) + 0)|0;
     store4(10072,$181);
     $182 = ($180|0)==(0);
     if ($182) {
      $$lcssa$i15$i = 0;
      break L106;
     }
     $183 = $180;
     FUNCTION_TABLE_v[$183 & 3]();
     $184 = (_malloc($$$i9$i)|0);
     $185 = ($184|0)==(0|0);
     if (!($185)) {
      $$lcssa$i15$i = $184;
      break;
     }
    }
   } else {
    $$lcssa$i15$i = $178;
   }
  } while(0);
  store4($171,$$lcssa$i15$i);
  store4($170,$$lcssa$i15$i);
  $186 = (($$lcssa$i15$i) + ($174<<2)|0);
  store4($172,$186);
  $187 = (($$sroa$5$0) - ($$sroa$0$0))|0;
  $188 = ($187|0)>(0);
  if ($188) {
   $189 = $187 >> 2;
   $190 = (($$lcssa$i15$i) + ($189<<2)|0);
   $191 = $$sroa$0$0;
   _memcpy(($$lcssa$i15$i|0),($191|0),($187|0))|0;
   store4($171,$190);
  }
 }
 $192 = ($$sroa$0$0|0)==(0);
 if (!($192)) {
  $193 = $$sroa$0$0;
  _free($193);
 }
 $194 = ((($8)) + 48|0);
 $195 = ((($194)) + 11|0);
 $196 = load1($195);
 $197 = ($196<<24>>24)<(0);
 if ($197) {
  $198 = load4($194);
  _free($198);
 }
 $199 = ((($8)) + 36|0);
 $200 = ((($199)) + 11|0);
 $201 = load1($200);
 $202 = ($201<<24>>24)<(0);
 if ($202) {
  $203 = load4($199);
  _free($203);
 }
 $204 = ((($8)) + 28|0);
 $205 = load4($204);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($205);
 $206 = ((($8)) + 16|0);
 $207 = load4($206);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($207);
 $208 = ((($8)) + 4|0);
 $209 = load4($208);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($209);
 $210 = load1($142);
 $211 = ($210<<24>>24)<(0);
 if ($211) {
  $212 = load4($7);
  _free($212);
 }
 $213 = load1($114);
 $214 = ($213<<24>>24)<(0);
 if ($214) {
  $215 = load4($6);
  _free($215);
 }
 $216 = ((($$lcssa$i)) + 72|0);
 $217 = ((($$lcssa$i)) + 83|0);
 $218 = load1($217);
 $219 = ($218<<24>>24)<(0);
 $220 = load4($216);
 $221 = $219 ? $220 : $216;
 $222 = ((($$lcssa$i)) + 76|0);
 $223 = load4($222);
 $224 = $218&255;
 $225 = $219 ? $223 : $224;
 $226 = ((($$lcssa$i)) + 23|0);
 $227 = load1($226);
 $228 = ($227<<24>>24)<(0);
 if ($228) {
  $229 = ((($$lcssa$i)) + 20|0);
  $230 = load4($229);
  $231 = $230 & 2147483647;
  $phitmp$i$i = (($231) + -1)|0;
  $233 = $phitmp$i$i;
 } else {
  $233 = 10;
 }
 $232 = ($225>>>0)>($233>>>0);
 do {
  if ($232) {
   $242 = (($225) - ($233))|0;
   $243 = (-18 - ($233))|0;
   $244 = ($243>>>0)<($242>>>0);
   if ($244) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($228) {
    $245 = load4($140);
    $264 = $245;
   } else {
    $264 = $140;
   }
   $246 = ($233>>>0)<(2147483623);
   if ($246) {
    $247 = $233 << 1;
    $248 = ($225>>>0)<($247>>>0);
    $$sroa$speculated$i = $248 ? $247 : $225;
    $249 = ($$sroa$speculated$i>>>0)<(11);
    $250 = (($$sroa$speculated$i) + 16)|0;
    $251 = $250 & -16;
    $phitmp$i = $249 ? 11 : $251;
    $253 = $phitmp$i;
   } else {
    $253 = -17;
   }
   $252 = ($253|0)==(0);
   $$$i25 = $252 ? 1 : $253;
   $254 = (_malloc($$$i25)|0);
   $255 = ($254|0)==(0|0);
   L142: do {
    if ($255) {
     while(1) {
      $256 = load4(10072);
      $257 = (($256) + 0)|0;
      store4(10072,$257);
      $258 = ($256|0)==(0);
      if ($258) {
       $$lcssa$i31 = 0;
       break L142;
      }
      $259 = $256;
      FUNCTION_TABLE_v[$259 & 3]();
      $260 = (_malloc($$$i25)|0);
      $261 = ($260|0)==(0|0);
      if (!($261)) {
       $$lcssa$i31 = $260;
       break;
      }
     }
    } else {
     $$lcssa$i31 = $254;
    }
   } while(0);
   $262 = ($225|0)==(0);
   if (!($262)) {
    _memcpy(($$lcssa$i31|0),($221|0),($225|0))|0;
   }
   $263 = ($233|0)==(10);
   if (!($263)) {
    _free($264);
   }
   store4($140,$$lcssa$i31);
   $265 = $253 | -2147483648;
   $266 = ((($$lcssa$i)) + 20|0);
   store4($266,$265);
   $267 = ((($$lcssa$i)) + 16|0);
   store4($267,$225);
   $268 = (($$lcssa$i31) + ($225)|0);
   store1($268,0);
  } else {
   if ($228) {
    $234 = load4($140);
    $236 = $234;
   } else {
    $236 = $140;
   }
   $235 = ($225|0)==(0);
   if (!($235)) {
    _memmove(($236|0),($221|0),($225|0))|0;
   }
   $237 = (($236) + ($225)|0);
   store1($237,0);
   $238 = load1($226);
   $239 = ($238<<24>>24)<(0);
   if ($239) {
    $240 = ((($$lcssa$i)) + 16|0);
    store4($240,$225);
    break;
   } else {
    $241 = $225&255;
    store1($226,$241);
    break;
   }
  }
 } while(0);
 $269 = ((($$lcssa$i)) + 11|0);
 $270 = load1($269);
 $271 = ($270<<24>>24)<(0);
 if ($271) {
  $272 = ((($$lcssa$i)) + 4|0);
  $273 = load4($272);
  $276 = $273;
 } else {
  $274 = $270&255;
  $276 = $274;
 }
 $275 = ($276>>>0)>(2);
 L168: do {
  if ($275) {
   if ($271) {
    $277 = load4($$lcssa$i);
    $279 = $277;
   } else {
    $279 = $$lcssa$i;
   }
   $278 = load1($279);
   $280 = ($278<<24>>24)==(115);
   if ($280) {
    if ($271) {
     $281 = load4($$lcssa$i);
     $283 = $281;
    } else {
     $283 = $$lcssa$i;
    }
    $282 = ((($283)) + 1|0);
    $284 = load1($282);
    $285 = ($284<<24>>24)==(118);
    if (!($285)) {
     break;
    }
    if ($271) {
     $286 = load4($$lcssa$i);
     $288 = $286;
    } else {
     $288 = $$lcssa$i;
    }
    $287 = ((($288)) + 2|0);
    $289 = load1($287);
    $290 = ($289<<24>>24)==(103);
    if (!($290)) {
     break;
    }
    if ($271) {
     $291 = ((($$lcssa$i)) + 4|0);
     $292 = load4($291);
     $295 = $292;
    } else {
     $293 = $270&255;
     $295 = $293;
    }
    $294 = ($295|0)==(3);
    do {
     if (!($294)) {
      if ($271) {
       $296 = load4($$lcssa$i);
       $298 = $296;
      } else {
       $298 = $$lcssa$i;
      }
      $297 = ((($298)) + 3|0);
      $299 = load1($297);
      $300 = ($299<<24>>24)==(46);
      if ($300) {
       break;
      }
      if ($271) {
       $301 = load4($$lcssa$i);
       $303 = $301;
      } else {
       $303 = $$lcssa$i;
      }
      $302 = ((($303)) + 3|0);
      $304 = load1($302);
      $305 = ($304<<24>>24)==(35);
      if (!($305)) {
       break L168;
      }
     }
    } while(0);
    __Z5addNSP5VNode($$lcssa$i);
   }
  }
 } while(0);
 $306 = $$lcssa$i;
 $307 = load4($4);
 $308 = ($307|0)==(0|0);
 $309 = $307;
 if ($308) {
  STACKTOP = sp;return ($306|0);
 }
 $310 = load4($9);
 $311 = ($310|0)==($307|0);
 if (!($311)) {
  $scevgep$i$i$i25 = ((($310)) + -4|0);
  $312 = $scevgep$i$i$i25;
  $313 = (($312) - ($309))|0;
  $314 = $313 >>> 2;
  $315 = $314 ^ -1;
  $scevgep4$i$i$i26 = (($310) + ($315<<2)|0);
  store4($9,$scevgep4$i$i$i26);
 }
 _free($307);
 STACKTOP = sp;return ($306|0);
}
function __Z8getVNodej($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = $1;
 __ZN5VNodeC2ERKS_($0,$2);
 return;
}
function __ZN5VNodeC2ERKS_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i1 = 0, $$$i17 = 0, $$$i9 = 0, $$016$i = 0, $$016$i3 = 0, $$016$i8 = 0, $$017$i = 0, $$017$i4 = 0, $$017$i9 = 0, $$lcssa$i = 0, $$lcssa$i15 = 0, $$lcssa$i23 = 0, $$lcssa$i7 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0;
 var $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0;
 var $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0;
 var $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0;
 var $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
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
      $15 = load4(10072);
      $16 = (($15) + 0)|0;
      store4(10072,$16);
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
    $$017$i4 = $28;
   } else {
    $$016$i3 = $28;
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
      $43 = load4(10072);
      $44 = (($43) + 0)|0;
      store4(10072,$44);
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
   $$016$i3 = $$lcssa$i7;
   label = 23;
  }
  if ((label|0) == 23) {
   _memcpy(($$016$i3|0),($33|0),($35|0))|0;
   $$017$i4 = $$016$i3;
  }
  $55 = (($$017$i4) + ($35)|0);
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
 if ($60) {
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
    $$017$i9 = $56;
   } else {
    $$016$i8 = $56;
    label = 35;
   }
  } else {
   $66 = (($63) + 16)|0;
   $67 = $66 & -16;
   $68 = ($67|0)==(0);
   $$$i9 = $68 ? 1 : $67;
   $69 = (_malloc($$$i9)|0);
   $70 = ($69|0)==(0|0);
   L45: do {
    if ($70) {
     while(1) {
      $71 = load4(10072);
      $72 = (($71) + 0)|0;
      store4(10072,$72);
      $73 = ($71|0)==(0);
      if ($73) {
       $$lcssa$i15 = 0;
       break L45;
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
   $$016$i8 = $$lcssa$i15;
   label = 35;
  }
  if ((label|0) == 35) {
   _memcpy(($$016$i8|0),($61|0),($63|0))|0;
   $$017$i9 = $$016$i8;
  }
  $83 = (($$017$i9) + ($63)|0);
  store1($83,0);
 } else {
  ; store8($56,load8($57,4),4); store4($56+8 | 0,load4($57+8 | 0,4),4);
 }
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
 store4($89,0);
 $91 = ((($0)) + 104|0);
 store4($91,0);
 $92 = ((($0)) + 108|0);
 store4($92,0);
 $93 = ((($1)) + 104|0);
 $94 = load4($93);
 $95 = load4($90);
 $96 = (($94) - ($95))|0;
 $97 = $96 >> 2;
 $98 = ($97|0)==(0);
 if ($98) {
  return;
 }
 $99 = ($97>>>0)>(1073741823);
 if ($99) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $100 = ($96|0)==(0);
 $$$i17 = $100 ? 1 : $96;
 $101 = (_malloc($$$i17)|0);
 $102 = ($101|0)==(0|0);
 L61: do {
  if ($102) {
   while(1) {
    $103 = load4(10072);
    $104 = (($103) + 0)|0;
    store4(10072,$104);
    $105 = ($103|0)==(0);
    if ($105) {
     $$lcssa$i23 = 0;
     break L61;
    }
    $106 = $103;
    FUNCTION_TABLE_v[$106 & 3]();
    $107 = (_malloc($$$i17)|0);
    $108 = ($107|0)==(0|0);
    if (!($108)) {
     $$lcssa$i23 = $107;
     break;
    }
   }
  } else {
   $$lcssa$i23 = $101;
  }
 } while(0);
 store4($91,$$lcssa$i23);
 store4($89,$$lcssa$i23);
 $109 = (($$lcssa$i23) + ($97<<2)|0);
 $110 = ((($0)) + 108|0);
 store4($110,$109);
 $111 = load4($90);
 $112 = load4($93);
 $113 = $111;
 $114 = (($112) - ($113))|0;
 $115 = ($114|0)>(0);
 if (!($115)) {
  return;
 }
 $116 = $114 >> 2;
 $117 = (($$lcssa$i23) + ($116<<2)|0);
 _memcpy(($$lcssa$i23|0),($111|0),($114|0))|0;
 store4($91,$117);
 return;
}
function __Z11deleteVNodeP5VNode($0) {
 $0 = $0|0;
 var $$cast = 0, $$in = 0, $$lcssa = 0, $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $scevgep$i$i$i = 0, $scevgep4$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 100|0);
 $2 = ((($0)) + 104|0);
 $3 = load4($2);
 $4 = load4($1);
 $5 = (($3) - ($4))|0;
 $6 = $5 >> 2;
 $7 = ($6|0)==(0);
 $$cast = $4;
 $8 = $3;
 if ($7) {
  $$lcssa = $$cast;$10 = $8;
 } else {
  $$in = $6;$18 = $$cast;
  while(1) {
   $16 = (($$in) + -1)|0;
   $17 = (($18) + ($16<<2)|0);
   $19 = load4($17);
   __Z11deleteVNodeP5VNode($19);
   $20 = load4($1);
   $21 = (($20) + ($16<<2)|0);
   store4($21,0);
   $22 = ($16|0)==(0);
   $23 = load4($1);
   if ($22) {
    break;
   } else {
    $$in = $16;$18 = $23;
   }
  }
  $$pre = load4($2);
  $$lcssa = $23;$10 = $$pre;
 }
 $9 = ($10|0)==($$lcssa|0);
 if ($9) {
  __ZN5VNodeD2Ev($0);
  _free($0);
  return;
 }
 $11 = $$lcssa;
 $scevgep$i$i$i = ((($10)) + -4|0);
 $12 = $scevgep$i$i$i;
 $13 = (($12) - ($11))|0;
 $14 = $13 >>> 2;
 $15 = $14 ^ -1;
 $scevgep4$i$i$i = (($10) + ($15<<2)|0);
 store4($2,$scevgep4$i$i$i);
 __ZN5VNodeD2Ev($0);
 _free($0);
 return;
}
function __ZN5VNodeD2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $scevgep$i$i$i = 0, $scevgep4$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 100|0);
 $2 = load4($1);
 $3 = ($2|0)==(0|0);
 $4 = $2;
 if (!($3)) {
  $5 = ((($0)) + 104|0);
  $6 = load4($5);
  $7 = ($6|0)==($2|0);
  if (!($7)) {
   $scevgep$i$i$i = ((($6)) + -4|0);
   $8 = $scevgep$i$i$i;
   $9 = (($8) - ($4))|0;
   $10 = $9 >>> 2;
   $11 = $10 ^ -1;
   $scevgep4$i$i$i = (($6) + ($11<<2)|0);
   store4($5,$scevgep4$i$i$i);
  }
  _free($2);
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
function __Z14deleteVNodePtrj($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0;
 __Z11deleteVNodeP5VNode($1);
 return;
}
function __Z7toVNodeN10emscripten3valE($0) {
 $0 = $0|0;
 var $$$$i = 0, $$$i = 0, $$$i100 = 0, $$$i109 = 0, $$$i17 = 0, $$$i26 = 0, $$$i39 = 0, $$$i48 = 0, $$$i57 = 0, $$$i8 = 0, $$$i83 = 0, $$0$i = 0, $$0$i152 = 0, $$0$i158 = 0, $$0$i171 = 0, $$0$i31 = 0, $$01318$i = 0, $$01318$i64 = 0, $$01318$i77 = 0, $$014$i = 0;
 var $$014$i165 = 0, $$014$i178 = 0, $$01417$i = 0, $$01417$i65 = 0, $$01417$i78 = 0, $$015$lcssa$i = 0, $$015$lcssa$i156 = 0, $$015$lcssa$i169 = 0, $$01518$i = 0, $$01518$i154 = 0, $$01518$i167 = 0, $$016$i = 0, $$017$i = 0, $$017$off041$i = 0, $$017$off041$i116 = 0, $$017$off041$i142 = 0, $$017$off042$i = 0, $$017$off042$i109 = 0, $$017$off042$i135 = 0, $$017$off047$i = 0;
 var $$017$off047$i112 = 0, $$017$off047$i138 = 0, $$018$i = 0, $$018$i29 = 0, $$018$off039$i = 0, $$018$off039$i117 = 0, $$018$off039$i143 = 0, $$018$off046$i = 0, $$018$off046$i113 = 0, $$018$off046$i139 = 0, $$019$i = 0, $$019$i25 = 0, $$019$i28 = 0, $$019$i63 = 0, $$019$i76 = 0, $$01937$i = 0, $$01937$i118 = 0, $$01937$i144 = 0, $$01938$i = 0, $$01938$i110 = 0;
 var $$01938$i136 = 0, $$01945$i = 0, $$01945$i114 = 0, $$01945$i140 = 0, $$0197500 = 0, $$02035$i = 0, $$02035$i119 = 0, $$02035$i145 = 0, $$02036$i = 0, $$02036$i111 = 0, $$02036$i137 = 0, $$02044$i = 0, $$02044$i115 = 0, $$02044$i141 = 0, $$1$lcssa$i = 0, $$1$lcssa$i162 = 0, $$1$lcssa$i175 = 0, $$1198499 = 0, $$cast = 0, $$lcssa$i = 0;
 var $$lcssa$i106 = 0, $$lcssa$i115 = 0, $$lcssa$i14 = 0, $$lcssa$i23 = 0, $$lcssa$i32 = 0, $$lcssa$i45 = 0, $$lcssa$i54 = 0, $$lcssa$i63 = 0, $$lcssa$i71 = 0, $$lcssa$i89 = 0, $$phitmp$i$i = 0, $$phitmp$i$i104 = 0, $$phitmp$i$i130 = 0, $$pn$i = 0, $$pn$i153 = 0, $$pn$i164 = 0, $$pn$i177 = 0, $$pn$i30 = 0, $$pn29$i = 0, $$pn29$i159 = 0;
 var $$pn29$i172 = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i$i$i$i$i = 0, $$pre$i160 = 0, $$pre$i173 = 0, $$pre$i35 = 0, $$pre396 = 0, $$pre671 = 0, $$pre672 = 0, $$pre673 = 0, $$pre677 = 0, $$pre678 = 0, $$sroa$8$0$$sroa_raw_idx = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i14 = 0, $$sroa$speculated$i3 = 0, $$sroa$speculated$i34 = 0, $$sroa$speculated$i47 = 0, $$sroa$speculated19$i = 0;
 var $$sroa$speculated19$i57 = 0, $$sroa$speculated19$i70 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0;
 var $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0;
 var $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0;
 var $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0;
 var $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0;
 var $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0;
 var $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0;
 var $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0;
 var $241 = 0, $242 = 0.0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0;
 var $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0;
 var $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0;
 var $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0;
 var $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0.0, $330 = 0;
 var $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0;
 var $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0;
 var $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0;
 var $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0;
 var $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0.0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0;
 var $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0;
 var $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0;
 var $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0;
 var $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0;
 var $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0;
 var $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0;
 var $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0;
 var $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0;
 var $566 = 0, $567 = 0.0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0;
 var $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0.0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0;
 var $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0;
 var $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0;
 var $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0.0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0;
 var $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0;
 var $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0;
 var $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0;
 var $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0;
 var $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0;
 var $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0;
 var $or$cond197 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $phitmp$i$i125 = 0, $phitmp$i$i39 = 0, $phitmp$i$i6 = 0, $phitmp$i$i87 = 0, $phitmp$i$i99 = 0, $phitmp$i15 = 0, $phitmp$i22$i = 0, $phitmp$i22$i103 = 0, $phitmp$i22$i129 = 0, $phitmp$i35 = 0, $phitmp$i4 = 0, $phitmp$i48 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $1 = sp;
 $2 = sp + 64|0;
 $3 = sp + 76|0;
 $4 = sp + 24|0;
 $5 = sp + 52|0;
 $6 = sp + 12|0;
 $7 = sp + 48|0;
 $8 = (_malloc(112)|0);
 $9 = ($8|0)==(0|0);
 L1: do {
  if ($9) {
   while(1) {
    $10 = load4(10072);
    $11 = (($10) + 0)|0;
    store4(10072,$11);
    $12 = ($10|0)==(0);
    if ($12) {
     $$lcssa$i = 0;
     break L1;
    }
    $13 = $10;
    FUNCTION_TABLE_v[$13 & 3]();
    $14 = (_malloc(112)|0);
    $15 = ($14|0)==(0|0);
    if (!($15)) {
     $$lcssa$i = $14;
     break;
    }
   }
  } else {
   $$lcssa$i = $8;
  }
 } while(0);
 $16 = ((($$lcssa$i)) + 36|0);
 $17 = ((($$lcssa$i)) + 40|0);
 store4($17,0);
 $18 = ((($$lcssa$i)) + 44|0);
 store4($18,0);
 ; store8($$lcssa$i,i64_const(0,0),4); store8($$lcssa$i+8|0,i64_const(0,0),4); store8($$lcssa$i+16|0,i64_const(0,0),4); store8($$lcssa$i+24|0,i64_const(0,0),4); store4($$lcssa$i+32|0,0,4);
 store4($16,$17);
 $19 = ((($$lcssa$i)) + 48|0);
 $20 = ((($$lcssa$i)) + 52|0);
 store4($20,0);
 $21 = ((($$lcssa$i)) + 56|0);
 store4($21,0);
 store4($19,$20);
 $22 = ((($$lcssa$i)) + 60|0);
 $23 = ((($$lcssa$i)) + 64|0);
 store4($23,0);
 $24 = ((($$lcssa$i)) + 68|0);
 store4($24,0);
 store4($22,$23);
 $25 = ((($$lcssa$i)) + 72|0);
 ; store8($25,i64_const(0,0),4); store8($25+8|0,i64_const(0,0),4); store8($25+16|0,i64_const(0,0),4);
 $26 = ((($$lcssa$i)) + 96|0);
 store4($26,(1));
 $27 = ((($$lcssa$i)) + 100|0);
 store4($27,0);
 $28 = ((($$lcssa$i)) + 104|0);
 store4($28,0);
 $29 = ((($$lcssa$i)) + 108|0);
 store4($29,0);
 $30 = load4($0);
 __emval_incref(($30|0));
 $31 = (__emval_new_cstring((2914|0))|0);
 $32 = (__emval_get_property(($30|0),($31|0))|0);
 __emval_decref(($31|0));
 $33 = (+__emval_as(($32|0),(1744|0),($1|0)));
 $34 = load4($1);
 __emval_run_destructors(($34|0));
 __emval_decref(($32|0));
 __emval_decref(($30|0));
 $35 = (~~(($33)));
 $36 = ($35|0)==(1);
 if (!($36)) {
  $588 = load4($0);
  __emval_incref(($588|0));
  $589 = (__emval_new_cstring((2914|0))|0);
  $590 = (__emval_get_property(($588|0),($589|0))|0);
  __emval_decref(($589|0));
  $591 = (+__emval_as(($590|0),(1744|0),($1|0)));
  $592 = load4($1);
  __emval_run_destructors(($592|0));
  __emval_decref(($590|0));
  __emval_decref(($588|0));
  $593 = (~~(($591)));
  $594 = ($593|0)==(3);
  $595 = load4($0);
  __emval_incref(($595|0));
  if ($594) {
   $596 = load4($26);
   __emval_decref(($596|0));
   $597 = load4($0);
   store4($26,$597);
   $$cast = $597;
   __emval_incref(($$cast|0));
   __Z14getTextContentN10emscripten3valE($1,$$cast);
   $598 = ((($$lcssa$i)) + 24|0);
   $599 = ((($$lcssa$i)) + 35|0);
   $600 = load1($599);
   $601 = ($600<<24>>24)<(0);
   if ($601) {
    $602 = load4($598);
    store1($602,0);
    $603 = ((($$lcssa$i)) + 28|0);
    store4($603,0);
    $$pre672 = load1($599);
    $604 = ($$pre672<<24>>24)<(0);
    if ($604) {
     $605 = ((($$lcssa$i)) + 32|0);
     $606 = load4($605);
     $607 = $606 & 2147483647;
     $phitmp$i$i87 = (($607) + -1)|0;
     $611 = 0;$615 = $phitmp$i$i87;$631 = $$pre672;$735 = 1;
    } else {
     $609 = $$pre672;
     label = 236;
    }
   } else {
    store1($598,0);
    store1($599,0);
    $609 = 0;
    label = 236;
   }
   if ((label|0) == 236) {
    $608 = $609&255;
    $611 = $608;$615 = 10;$631 = $609;$735 = 0;
   }
   $610 = ($611>>>0)<(11);
   $612 = (($611) + 16)|0;
   $613 = $612 & 496;
   $phitmp$i22$i = (($613) + -1)|0;
   $$phitmp$i$i = $610 ? 10 : $phitmp$i22$i;
   $614 = ($$phitmp$i$i|0)==($615|0);
   do {
    if (!($614)) {
     if ($610) {
      $627 = load4($598);
      if ($735) {
       $$017$off042$i = 0;$$01938$i = $627;$$02036$i = $598;
       label = 245;
      } else {
       $$017$off047$i = 0;$$018$off046$i = 1;$$01945$i = $627;$$02044$i = $598;
       label = 246;
      }
     } else {
      $616 = (($$phitmp$i$i) + 1)|0;
      $617 = ($616|0)==(0);
      $$$i83 = $617 ? 1 : $616;
      $618 = (_malloc($$$i83)|0);
      $619 = ($618|0)==(0|0);
      L22: do {
       if ($619) {
        while(1) {
         $620 = load4(10072);
         $621 = (($620) + 0)|0;
         store4(10072,$621);
         $622 = ($620|0)==(0);
         if ($622) {
          $$lcssa$i89 = 0;
          break L22;
         }
         $623 = $620;
         FUNCTION_TABLE_v[$623 & 3]();
         $624 = (_malloc($$$i83)|0);
         $625 = ($624|0)==(0|0);
         if (!($625)) {
          $$lcssa$i89 = $624;
          break;
         }
        }
       } else {
        $$lcssa$i89 = $618;
       }
      } while(0);
      if ($735) {
       $626 = load4($598);
       $$017$off042$i = 1;$$01938$i = $626;$$02036$i = $$lcssa$i89;
       label = 245;
      } else {
       $$017$off047$i = 1;$$018$off046$i = 0;$$01945$i = $598;$$02044$i = $$lcssa$i89;
       label = 246;
      }
     }
     if ((label|0) == 245) {
      $628 = ((($$lcssa$i)) + 28|0);
      $629 = load4($628);
      $$017$off041$i = $$017$off042$i;$$018$off039$i = 1;$$01937$i = $$01938$i;$$02035$i = $$02036$i;$633 = $629;
     }
     else if ((label|0) == 246) {
      $630 = $631&255;
      $$017$off041$i = $$017$off047$i;$$018$off039$i = $$018$off046$i;$$01937$i = $$01945$i;$$02035$i = $$02044$i;$633 = $630;
     }
     $632 = (($633) + 1)|0;
     $634 = ($632|0)==(0);
     if (!($634)) {
      _memcpy(($$02035$i|0),($$01937$i|0),($632|0))|0;
     }
     if ($$018$off039$i) {
      _free($$01937$i);
     }
     if ($$017$off041$i) {
      $635 = (($$phitmp$i$i) + 1)|0;
      $636 = $635 | -2147483648;
      $637 = ((($$lcssa$i)) + 32|0);
      store4($637,$636);
      $638 = ((($$lcssa$i)) + 28|0);
      store4($638,$611);
      store4($598,$$02035$i);
      break;
     } else {
      $639 = $611&255;
      store1($599,$639);
      break;
     }
    }
   } while(0);
   ; store8($598,load8($1,4),4); store4($598+8 | 0,load4($1+8 | 0,4),4);
   ; store8($1,i64_const(0,0),4); store4($1+8|0,0,4);
   __emval_decref(($$cast|0));
   STACKTOP = sp;return ($$lcssa$i|0);
  }
  $640 = (__emval_new_cstring((2914|0))|0);
  $641 = (__emval_get_property(($595|0),($640|0))|0);
  __emval_decref(($640|0));
  $642 = (+__emval_as(($641|0),(1744|0),($1|0)));
  $643 = load4($1);
  __emval_run_destructors(($643|0));
  __emval_decref(($641|0));
  __emval_decref(($595|0));
  $644 = (~~(($642)));
  $645 = ($644|0)==(8);
  if (!($645)) {
   STACKTOP = sp;return ($$lcssa$i|0);
  }
  ; store4($1,0,4); store2($1+4|0,0,2); store1($1+6|0,0,1);
  $646 = ((($$lcssa$i)) + 11|0);
  $647 = load1($646);
  $648 = ($647<<24>>24)<(0);
  if ($648) {
   $649 = load4($$lcssa$i);
   store1($649,0);
   $650 = ((($$lcssa$i)) + 4|0);
   store4($650,0);
   $$pre = load1($646);
   $651 = ($$pre<<24>>24)<(0);
   if ($651) {
    $652 = ((($$lcssa$i)) + 8|0);
    $653 = load4($652);
    $654 = $653 & 2147483647;
    $phitmp$i$i99 = (($654) + -1)|0;
    $658 = 0;$662 = $phitmp$i$i99;$678 = $$pre;$736 = 1;
   } else {
    $656 = $$pre;
    label = 260;
   }
  } else {
   store1($$lcssa$i,0);
   store1($646,0);
   $656 = 0;
   label = 260;
  }
  if ((label|0) == 260) {
   $655 = $656&255;
   $658 = $655;$662 = 10;$678 = $656;$736 = 0;
  }
  $657 = ($658>>>0)<(11);
  $659 = (($658) + 16)|0;
  $660 = $659 & 496;
  $phitmp$i22$i103 = (($660) + -1)|0;
  $$phitmp$i$i104 = $657 ? 10 : $phitmp$i22$i103;
  $661 = ($$phitmp$i$i104|0)==($662|0);
  do {
   if (!($661)) {
    if ($657) {
     $674 = load4($$lcssa$i);
     if ($736) {
      $$017$off042$i109 = 0;$$01938$i110 = $674;$$02036$i111 = $$lcssa$i;
      label = 269;
     } else {
      $$017$off047$i112 = 0;$$018$off046$i113 = 1;$$01945$i114 = $674;$$02044$i115 = $$lcssa$i;
      label = 270;
     }
    } else {
     $663 = (($$phitmp$i$i104) + 1)|0;
     $664 = ($663|0)==(0);
     $$$i100 = $664 ? 1 : $663;
     $665 = (_malloc($$$i100)|0);
     $666 = ($665|0)==(0|0);
     L59: do {
      if ($666) {
       while(1) {
        $667 = load4(10072);
        $668 = (($667) + 0)|0;
        store4(10072,$668);
        $669 = ($667|0)==(0);
        if ($669) {
         $$lcssa$i106 = 0;
         break L59;
        }
        $670 = $667;
        FUNCTION_TABLE_v[$670 & 3]();
        $671 = (_malloc($$$i100)|0);
        $672 = ($671|0)==(0|0);
        if (!($672)) {
         $$lcssa$i106 = $671;
         break;
        }
       }
      } else {
       $$lcssa$i106 = $665;
      }
     } while(0);
     if ($736) {
      $673 = load4($$lcssa$i);
      $$017$off042$i109 = 1;$$01938$i110 = $673;$$02036$i111 = $$lcssa$i106;
      label = 269;
     } else {
      $$017$off047$i112 = 1;$$018$off046$i113 = 0;$$01945$i114 = $$lcssa$i;$$02044$i115 = $$lcssa$i106;
      label = 270;
     }
    }
    if ((label|0) == 269) {
     $675 = ((($$lcssa$i)) + 4|0);
     $676 = load4($675);
     $$017$off041$i116 = $$017$off042$i109;$$018$off039$i117 = 1;$$01937$i118 = $$01938$i110;$$02035$i119 = $$02036$i111;$680 = $676;
    }
    else if ((label|0) == 270) {
     $677 = $678&255;
     $$017$off041$i116 = $$017$off047$i112;$$018$off039$i117 = $$018$off046$i113;$$01937$i118 = $$01945$i114;$$02035$i119 = $$02044$i115;$680 = $677;
    }
    $679 = (($680) + 1)|0;
    $681 = ($679|0)==(0);
    if (!($681)) {
     _memcpy(($$02035$i119|0),($$01937$i118|0),($679|0))|0;
    }
    if ($$018$off039$i117) {
     _free($$01937$i118);
    }
    if ($$017$off041$i116) {
     $682 = (($$phitmp$i$i104) + 1)|0;
     $683 = $682 | -2147483648;
     $684 = ((($$lcssa$i)) + 8|0);
     store4($684,$683);
     $685 = ((($$lcssa$i)) + 4|0);
     store4($685,$658);
     store4($$lcssa$i,$$02035$i119);
     break;
    } else {
     $686 = $658&255;
     store1($646,$686);
     break;
    }
   }
  } while(0);
  store4($$lcssa$i,(33));
  $$sroa$8$0$$sroa_raw_idx = ((($$lcssa$i)) + 4|0);
  ; store4($$sroa$8$0$$sroa_raw_idx,load4($1,4),4); store2($$sroa$8$0$$sroa_raw_idx+4 | 0,load2($1+4 | 0,2),2); store1($$sroa$8$0$$sroa_raw_idx+6 | 0,load1($1+6 | 0,1),1);
  store1($646,1);
  $687 = load4($0);
  __emval_incref(($687|0));
  __Z14getTextContentN10emscripten3valE($1,$687);
  $688 = ((($$lcssa$i)) + 24|0);
  $689 = ((($$lcssa$i)) + 35|0);
  $690 = load1($689);
  $691 = ($690<<24>>24)<(0);
  if ($691) {
   $692 = load4($688);
   store1($692,0);
   $693 = ((($$lcssa$i)) + 28|0);
   store4($693,0);
   $$pre671 = load1($689);
   $694 = ($$pre671<<24>>24)<(0);
   if ($694) {
    $695 = ((($$lcssa$i)) + 32|0);
    $696 = load4($695);
    $697 = $696 & 2147483647;
    $phitmp$i$i125 = (($697) + -1)|0;
    $701 = 0;$705 = $phitmp$i$i125;$721 = $$pre671;$737 = 1;
   } else {
    $699 = $$pre671;
    label = 282;
   }
  } else {
   store1($688,0);
   store1($689,0);
   $699 = 0;
   label = 282;
  }
  if ((label|0) == 282) {
   $698 = $699&255;
   $701 = $698;$705 = 10;$721 = $699;$737 = 0;
  }
  $700 = ($701>>>0)<(11);
  $702 = (($701) + 16)|0;
  $703 = $702 & 496;
  $phitmp$i22$i129 = (($703) + -1)|0;
  $$phitmp$i$i130 = $700 ? 10 : $phitmp$i22$i129;
  $704 = ($$phitmp$i$i130|0)==($705|0);
  do {
   if (!($704)) {
    if ($700) {
     $717 = load4($688);
     if ($737) {
      $$017$off042$i135 = 0;$$01938$i136 = $717;$$02036$i137 = $688;
      label = 291;
     } else {
      $$017$off047$i138 = 0;$$018$off046$i139 = 1;$$01945$i140 = $717;$$02044$i141 = $688;
      label = 292;
     }
    } else {
     $706 = (($$phitmp$i$i130) + 1)|0;
     $707 = ($706|0)==(0);
     $$$i109 = $707 ? 1 : $706;
     $708 = (_malloc($$$i109)|0);
     $709 = ($708|0)==(0|0);
     L91: do {
      if ($709) {
       while(1) {
        $710 = load4(10072);
        $711 = (($710) + 0)|0;
        store4(10072,$711);
        $712 = ($710|0)==(0);
        if ($712) {
         $$lcssa$i115 = 0;
         break L91;
        }
        $713 = $710;
        FUNCTION_TABLE_v[$713 & 3]();
        $714 = (_malloc($$$i109)|0);
        $715 = ($714|0)==(0|0);
        if (!($715)) {
         $$lcssa$i115 = $714;
         break;
        }
       }
      } else {
       $$lcssa$i115 = $708;
      }
     } while(0);
     if ($737) {
      $716 = load4($688);
      $$017$off042$i135 = 1;$$01938$i136 = $716;$$02036$i137 = $$lcssa$i115;
      label = 291;
     } else {
      $$017$off047$i138 = 1;$$018$off046$i139 = 0;$$01945$i140 = $688;$$02044$i141 = $$lcssa$i115;
      label = 292;
     }
    }
    if ((label|0) == 291) {
     $718 = ((($$lcssa$i)) + 28|0);
     $719 = load4($718);
     $$017$off041$i142 = $$017$off042$i135;$$018$off039$i143 = 1;$$01937$i144 = $$01938$i136;$$02035$i145 = $$02036$i137;$723 = $719;
    }
    else if ((label|0) == 292) {
     $720 = $721&255;
     $$017$off041$i142 = $$017$off047$i138;$$018$off039$i143 = $$018$off046$i139;$$01937$i144 = $$01945$i140;$$02035$i145 = $$02044$i141;$723 = $720;
    }
    $722 = (($723) + 1)|0;
    $724 = ($722|0)==(0);
    if (!($724)) {
     _memcpy(($$02035$i145|0),($$01937$i144|0),($722|0))|0;
    }
    if ($$018$off039$i143) {
     _free($$01937$i144);
    }
    if ($$017$off041$i142) {
     $725 = (($$phitmp$i$i130) + 1)|0;
     $726 = $725 | -2147483648;
     $727 = ((($$lcssa$i)) + 32|0);
     store4($727,$726);
     $728 = ((($$lcssa$i)) + 28|0);
     store4($728,$701);
     store4($688,$$02035$i145);
     break;
    } else {
     $729 = $701&255;
     store1($689,$729);
     break;
    }
   }
  } while(0);
  ; store8($688,load8($1,4),4); store4($688+8 | 0,load4($1+8 | 0,4),4);
  ; store8($1,i64_const(0,0),4); store4($1+8|0,0,4);
  __emval_decref(($687|0));
  STACKTOP = sp;return ($$lcssa$i|0);
 }
 $37 = load4($0);
 __emval_incref(($37|0));
 __Z7tagNameN10emscripten3valE($1,$37);
 $38 = ((($1)) + 11|0);
 $39 = load1($38);
 $40 = ($39<<24>>24)<(0);
 $41 = load4($1);
 $42 = $40 ? $41 : $1;
 $43 = ((($1)) + 4|0);
 $44 = load4($43);
 $45 = $39&255;
 $46 = $40 ? $44 : $45;
 $47 = ((($$lcssa$i)) + 11|0);
 $48 = load1($47);
 $49 = ($48<<24>>24)<(0);
 if ($49) {
  $50 = ((($$lcssa$i)) + 8|0);
  $51 = load4($50);
  $52 = $51 & 2147483647;
  $phitmp$i$i = (($52) + -1)|0;
  $53 = ((($$lcssa$i)) + 4|0);
  $54 = load4($53);
  $57 = $phitmp$i$i;$58 = $54;
 } else {
  $55 = $48&255;
  $57 = 10;$58 = $55;
 }
 $56 = (($57) - ($58))|0;
 $59 = ($56>>>0)<($46>>>0);
 if ($59) {
  $70 = (($46) - ($57))|0;
  $71 = (($70) + ($58))|0;
  $72 = (-18 - ($57))|0;
  $73 = ($72>>>0)<($71>>>0);
  if ($73) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  if ($49) {
   $74 = load4($$lcssa$i);
   $93 = $74;
  } else {
   $93 = $$lcssa$i;
  }
  $75 = ($57>>>0)<(2147483623);
  if ($75) {
   $76 = (($58) + ($46))|0;
   $77 = $57 << 1;
   $78 = ($76>>>0)<($77>>>0);
   $$sroa$speculated$i = $78 ? $77 : $76;
   $79 = ($$sroa$speculated$i>>>0)<(11);
   $80 = (($$sroa$speculated$i) + 16)|0;
   $81 = $80 & -16;
   $phitmp$i = $79 ? 11 : $81;
   $83 = $phitmp$i;
  } else {
   $83 = -17;
  }
  $82 = ($83|0)==(0);
  $$$i8 = $82 ? 1 : $83;
  $84 = (_malloc($$$i8)|0);
  $85 = ($84|0)==(0|0);
  L128: do {
   if ($85) {
    while(1) {
     $86 = load4(10072);
     $87 = (($86) + 0)|0;
     store4(10072,$87);
     $88 = ($86|0)==(0);
     if ($88) {
      $$lcssa$i14 = 0;
      break L128;
     }
     $89 = $86;
     FUNCTION_TABLE_v[$89 & 3]();
     $90 = (_malloc($$$i8)|0);
     $91 = ($90|0)==(0|0);
     if (!($91)) {
      $$lcssa$i14 = $90;
      break;
     }
    }
   } else {
    $$lcssa$i14 = $84;
   }
  } while(0);
  $92 = ($58|0)==(0);
  if (!($92)) {
   _memcpy(($$lcssa$i14|0),($93|0),($58|0))|0;
  }
  $94 = ($46|0)==(0);
  if (!($94)) {
   $95 = (($$lcssa$i14) + ($58)|0);
   _memcpy(($95|0),($42|0),($46|0))|0;
  }
  $96 = ($57|0)==(10);
  if (!($96)) {
   _free($93);
  }
  store4($$lcssa$i,$$lcssa$i14);
  $97 = $83 | -2147483648;
  $98 = ((($$lcssa$i)) + 8|0);
  store4($98,$97);
  $99 = (($58) + ($46))|0;
  $100 = ((($$lcssa$i)) + 4|0);
  store4($100,$99);
  $101 = (($$lcssa$i14) + ($99)|0);
  store1($101,0);
 } else {
  $60 = ($46|0)==(0);
  if (!($60)) {
   if ($49) {
    $61 = load4($$lcssa$i);
    $63 = $61;
   } else {
    $63 = $$lcssa$i;
   }
   $62 = (($63) + ($58)|0);
   _memcpy(($62|0),($42|0),($46|0))|0;
   $64 = (($58) + ($46))|0;
   $65 = load1($47);
   $66 = ($65<<24>>24)<(0);
   if ($66) {
    $67 = ((($$lcssa$i)) + 4|0);
    store4($67,$64);
   } else {
    $68 = $64&255;
    store1($47,$68);
   }
   $69 = (($63) + ($64)|0);
   store1($69,0);
  }
 }
 $102 = load1($38);
 $103 = ($102<<24>>24)<(0);
 if ($103) {
  $104 = load4($1);
  _free($104);
 }
 __emval_decref(($37|0));
 $105 = load4($0);
 $106 = (__emval_new_cstring((9376|0))|0);
 $107 = (__emval_get_property(($105|0),($106|0))|0);
 __emval_decref(($106|0));
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($3,$107);
 $108 = ((($3)) + 11|0);
 $109 = load1($108);
 $110 = ((($3)) + 4|0);
 $111 = load4($110);
 $112 = ($109<<24>>24)<(0);
 if ($112) {
  $113 = load4($3);
  _free($113);
 }
 __emval_decref(($107|0));
 $114 = $109&255;
 $115 = $112 ? $111 : $114;
 $116 = ($115|0)==(0);
 if (!($116)) {
  $117 = load1($47);
  $118 = ($117<<24>>24)<(0);
  if ($118) {
   $120 = ((($$lcssa$i)) + 8|0);
   $121 = load4($120);
   $122 = $121 & 2147483647;
   $123 = (($122) + -1)|0;
   $124 = ((($$lcssa$i)) + 4|0);
   $125 = load4($124);
   $$018$i = $125;$$019$i = $123;
  } else {
   $119 = $117&255;
   $$018$i = $119;$$019$i = 10;
  }
  $126 = ($$018$i|0)==($$019$i|0);
  do {
   if ($126) {
    if ($118) {
     $127 = load4($$lcssa$i);
     $146 = $127;
    } else {
     $146 = $$lcssa$i;
    }
    $128 = ($$019$i>>>0)<(2147483623);
    if ($128) {
     $129 = (($$019$i) + 1)|0;
     $130 = $$019$i << 1;
     $131 = ($129>>>0)<($130>>>0);
     $$sroa$speculated$i3 = $131 ? $130 : $129;
     $132 = ($$sroa$speculated$i3>>>0)<(11);
     $133 = (($$sroa$speculated$i3) + 16)|0;
     $134 = $133 & -16;
     $phitmp$i4 = $132 ? 11 : $134;
     $136 = $phitmp$i4;
    } else {
     $136 = -17;
    }
    $135 = ($136|0)==(0);
    $$$i17 = $135 ? 1 : $136;
    $137 = (_malloc($$$i17)|0);
    $138 = ($137|0)==(0|0);
    L172: do {
     if ($138) {
      while(1) {
       $139 = load4(10072);
       $140 = (($139) + 0)|0;
       store4(10072,$140);
       $141 = ($139|0)==(0);
       if ($141) {
        $$lcssa$i23 = 0;
        break L172;
       }
       $142 = $139;
       FUNCTION_TABLE_v[$142 & 3]();
       $143 = (_malloc($$$i17)|0);
       $144 = ($143|0)==(0|0);
       if (!($144)) {
        $$lcssa$i23 = $143;
        break;
       }
      }
     } else {
      $$lcssa$i23 = $137;
     }
    } while(0);
    $145 = ($$019$i|0)==(0);
    if ($145) {
     label = 50;
    } else {
     _memcpy(($$lcssa$i23|0),($146|0),($$019$i|0))|0;
     $147 = ($$019$i|0)==(10);
     if (!($147)) {
      label = 50;
     }
    }
    if ((label|0) == 50) {
     _free($146);
    }
    store4($$lcssa$i,$$lcssa$i23);
    $148 = $136 | -2147483648;
    $149 = ((($$lcssa$i)) + 8|0);
    store4($149,$148);
    $730 = $$lcssa$i23;
    label = 55;
   } else {
    if ($118) {
     $$pre673 = load4($$lcssa$i);
     $730 = $$pre673;
     label = 55;
     break;
    } else {
     $150 = (($$018$i) + 1)|0;
     $151 = $150&255;
     store1($47,$151);
     $$pn$i = $$lcssa$i;
     break;
    }
   }
  } while(0);
  if ((label|0) == 55) {
   $152 = (($$018$i) + 1)|0;
   $153 = ((($$lcssa$i)) + 4|0);
   store4($153,$152);
   $$pn$i = $730;
  }
  $$0$i = (($$pn$i) + ($$018$i)|0);
  store1($$0$i,35);
  $154 = ((($$0$i)) + 1|0);
  store1($154,0);
  $155 = load4($0);
  $156 = (__emval_new_cstring((9376|0))|0);
  $157 = (__emval_get_property(($155|0),($156|0))|0);
  __emval_decref(($156|0));
  __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($1,$157);
  $158 = ((($1)) + 11|0);
  $159 = load1($158);
  $160 = ($159<<24>>24)<(0);
  $161 = load4($1);
  $162 = $160 ? $161 : $1;
  $163 = ((($1)) + 4|0);
  $164 = load4($163);
  $165 = $159&255;
  $166 = $160 ? $164 : $165;
  $167 = load1($47);
  $168 = ($167<<24>>24)<(0);
  if ($168) {
   $169 = ((($$lcssa$i)) + 8|0);
   $170 = load4($169);
   $171 = $170 & 2147483647;
   $phitmp$i$i6 = (($171) + -1)|0;
   $172 = ((($$lcssa$i)) + 4|0);
   $173 = load4($172);
   $176 = $phitmp$i$i6;$177 = $173;
  } else {
   $174 = $167&255;
   $176 = 10;$177 = $174;
  }
  $175 = (($176) - ($177))|0;
  $178 = ($175>>>0)<($166>>>0);
  if ($178) {
   $189 = (($166) - ($176))|0;
   $190 = (($189) + ($177))|0;
   $191 = (-18 - ($176))|0;
   $192 = ($191>>>0)<($190>>>0);
   if ($192) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($168) {
    $193 = load4($$lcssa$i);
    $212 = $193;
   } else {
    $212 = $$lcssa$i;
   }
   $194 = ($176>>>0)<(2147483623);
   if ($194) {
    $195 = (($177) + ($166))|0;
    $196 = $176 << 1;
    $197 = ($195>>>0)<($196>>>0);
    $$sroa$speculated$i14 = $197 ? $196 : $195;
    $198 = ($$sroa$speculated$i14>>>0)<(11);
    $199 = (($$sroa$speculated$i14) + 16)|0;
    $200 = $199 & -16;
    $phitmp$i15 = $198 ? 11 : $200;
    $202 = $phitmp$i15;
   } else {
    $202 = -17;
   }
   $201 = ($202|0)==(0);
   $$$i26 = $201 ? 1 : $202;
   $203 = (_malloc($$$i26)|0);
   $204 = ($203|0)==(0|0);
   L204: do {
    if ($204) {
     while(1) {
      $205 = load4(10072);
      $206 = (($205) + 0)|0;
      store4(10072,$206);
      $207 = ($205|0)==(0);
      if ($207) {
       $$lcssa$i32 = 0;
       break L204;
      }
      $208 = $205;
      FUNCTION_TABLE_v[$208 & 3]();
      $209 = (_malloc($$$i26)|0);
      $210 = ($209|0)==(0|0);
      if (!($210)) {
       $$lcssa$i32 = $209;
       break;
      }
     }
    } else {
     $$lcssa$i32 = $203;
    }
   } while(0);
   $211 = ($177|0)==(0);
   if (!($211)) {
    _memcpy(($$lcssa$i32|0),($212|0),($177|0))|0;
   }
   $213 = ($166|0)==(0);
   if (!($213)) {
    $214 = (($$lcssa$i32) + ($177)|0);
    _memcpy(($214|0),($162|0),($166|0))|0;
   }
   $215 = ($176|0)==(10);
   if (!($215)) {
    _free($212);
   }
   store4($$lcssa$i,$$lcssa$i32);
   $216 = $202 | -2147483648;
   $217 = ((($$lcssa$i)) + 8|0);
   store4($217,$216);
   $218 = (($177) + ($166))|0;
   $219 = ((($$lcssa$i)) + 4|0);
   store4($219,$218);
   $220 = (($$lcssa$i32) + ($218)|0);
   store1($220,0);
  } else {
   $179 = ($166|0)==(0);
   if (!($179)) {
    if ($168) {
     $180 = load4($$lcssa$i);
     $182 = $180;
    } else {
     $182 = $$lcssa$i;
    }
    $181 = (($182) + ($177)|0);
    _memcpy(($181|0),($162|0),($166|0))|0;
    $183 = (($177) + ($166))|0;
    $184 = load1($47);
    $185 = ($184<<24>>24)<(0);
    if ($185) {
     $186 = ((($$lcssa$i)) + 4|0);
     store4($186,$183);
    } else {
     $187 = $183&255;
     store1($47,$187);
    }
    $188 = (($182) + ($183)|0);
    store1($188,0);
   }
  }
  $221 = load1($158);
  $222 = ($221<<24>>24)<(0);
  if ($222) {
   $223 = load4($1);
   _free($223);
  }
  __emval_decref(($157|0));
 }
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $224 = ((($4)) + 11|0);
 store1($224,5);
 ; store4($4,load4(3078,1),1); store1($4+4 | 0,load1(3078+4 | 0,1),1);
 $225 = ((($4)) + 5|0);
 store1($225,0);
 $226 = load4($0);
 $227 = load1(9520);
 $228 = ($227<<24>>24)==(0);
 if ($228) {
  store1(9520,1);
  $229 = (__emval_get_method_caller(2,(2220|0))|0);
  store4(9560,$229);
  $241 = $229;
 } else {
  $$pre$i35 = load4(9560);
  $241 = $$pre$i35;
 }
 $230 = load1($224);
 $231 = ($230<<24>>24)<(0);
 $232 = ((($4)) + 4|0);
 $233 = load4($232);
 $234 = $230&255;
 $235 = $231 ? $233 : $234;
 $236 = (($235) + 4)|0;
 $237 = (_malloc($236)|0);
 store4($237,$235);
 $238 = ((($237)) + 4|0);
 $239 = load4($4);
 $240 = $231 ? $239 : $4;
 _memcpy(($238|0),($240|0),($235|0))|0;
 store4($1,$237);
 $242 = (+__emval_call_method(($241|0),($226|0),(3065|0),($2|0),($1|0)));
 $243 = load4($2);
 __emval_run_destructors(($243|0));
 $244 = (~~(($242))>>>0);
 $245 = $244;
 if ($231) {
  _free($239);
 }
 $246 = (__emval_typeof(($245|0))|0);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($5,$246);
 L239: do {
  if (((((3084) & 3)|0)==(0))) {
   $$015$lcssa$i = 3084;
   label = 94;
  } else {
   $$01518$i = 3084;$731 = (3084);
   while(1) {
    $247 = load1($$01518$i);
    $248 = ($247<<24>>24)==(0);
    if ($248) {
     $$pn$i153 = $731;
     break L239;
    }
    $249 = ((($$01518$i)) + 1|0);
    $250 = $249;
    $251 = $250 & 3;
    $252 = ($251|0)==(0);
    if ($252) {
     $$015$lcssa$i = $249;
     label = 94;
     break;
    } else {
     $$01518$i = $249;$731 = $250;
    }
   }
  }
 } while(0);
 if ((label|0) == 94) {
  $$0$i152 = $$015$lcssa$i;
  while(1) {
   $253 = load4($$0$i152);
   $254 = (($253) + -16843009)|0;
   $255 = $253 & -2139062144;
   $256 = $255 ^ -2139062144;
   $257 = $256 & $254;
   $258 = ($257|0)==(0);
   $259 = ((($$0$i152)) + 4|0);
   if ($258) {
    $$0$i152 = $259;
   } else {
    break;
   }
  }
  $260 = $253&255;
  $261 = ($260<<24>>24)==(0);
  if ($261) {
   $$1$lcssa$i = $$0$i152;
  } else {
   $$pn29$i = $$0$i152;
   while(1) {
    $262 = ((($$pn29$i)) + 1|0);
    $$pre$i = load1($262);
    $263 = ($$pre$i<<24>>24)==(0);
    if ($263) {
     $$1$lcssa$i = $262;
     break;
    } else {
     $$pn29$i = $262;
    }
   }
  }
  $264 = $$1$lcssa$i;
  $$pn$i153 = $264;
 }
 $$014$i = (($$pn$i153) - (3084))|0;
 $265 = ((($5)) + 11|0);
 $266 = load1($265);
 $267 = ($266<<24>>24)<(0);
 $268 = ((($5)) + 4|0);
 $269 = load4($268);
 $270 = $266&255;
 $271 = $267 ? $269 : $270;
 $272 = ($$014$i|0)==(-1);
 if ($272) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
  // unreachable;
 }
 $273 = load4($5);
 $274 = ($271>>>0)>($$014$i>>>0);
 $$sroa$speculated19$i = $274 ? $$014$i : $271;
 $275 = ($$sroa$speculated19$i|0)==(0);
 L256: do {
  if ($275) {
   label = 106;
  } else {
   $276 = $267 ? $273 : $5;
   $$01318$i = $276;$$01417$i = $$sroa$speculated19$i;$$019$i25 = 3084;
   while(1) {
    $277 = load1($$01318$i);
    $278 = load1($$019$i25);
    $279 = ($277<<24>>24)==($278<<24>>24);
    if (!($279)) {
     break;
    }
    $280 = (($$01417$i) + -1)|0;
    $281 = ((($$01318$i)) + 1|0);
    $282 = ((($$019$i25)) + 1|0);
    $283 = ($280|0)==(0);
    if ($283) {
     label = 106;
     break L256;
    } else {
     $$01318$i = $281;$$01417$i = $280;$$019$i25 = $282;
    }
   }
   $284 = $277&255;
   $285 = $278&255;
   $286 = (($284) - ($285))|0;
   $287 = ($286|0)==(0);
   if ($287) {
    label = 106;
   } else {
    $290 = $286;
   }
  }
 } while(0);
 if ((label|0) == 106) {
  $288 = ($271>>>0)<($$014$i>>>0);
  $$$i = $274&1;
  $$$$i = $288 ? -1 : $$$i;
  $290 = $$$$i;
 }
 if ($267) {
  _free($273);
 }
 __emval_decref(($246|0));
 $289 = ($290|0)==(0);
 do {
  if ($289) {
   $291 = load1($47);
   $292 = ($291<<24>>24)<(0);
   if ($292) {
    $294 = ((($$lcssa$i)) + 8|0);
    $295 = load4($294);
    $296 = $295 & 2147483647;
    $297 = (($296) + -1)|0;
    $298 = ((($$lcssa$i)) + 4|0);
    $299 = load4($298);
    $$018$i29 = $299;$$019$i28 = $297;
   } else {
    $293 = $291&255;
    $$018$i29 = $293;$$019$i28 = 10;
   }
   $300 = ($$018$i29|0)==($$019$i28|0);
   do {
    if ($300) {
     if ($292) {
      $301 = load4($$lcssa$i);
      $320 = $301;
     } else {
      $320 = $$lcssa$i;
     }
     $302 = ($$019$i28>>>0)<(2147483623);
     if ($302) {
      $303 = (($$019$i28) + 1)|0;
      $304 = $$019$i28 << 1;
      $305 = ($303>>>0)<($304>>>0);
      $$sroa$speculated$i34 = $305 ? $304 : $303;
      $306 = ($$sroa$speculated$i34>>>0)<(11);
      $307 = (($$sroa$speculated$i34) + 16)|0;
      $308 = $307 & -16;
      $phitmp$i35 = $306 ? 11 : $308;
      $310 = $phitmp$i35;
     } else {
      $310 = -17;
     }
     $309 = ($310|0)==(0);
     $$$i39 = $309 ? 1 : $310;
     $311 = (_malloc($$$i39)|0);
     $312 = ($311|0)==(0|0);
     L282: do {
      if ($312) {
       while(1) {
        $313 = load4(10072);
        $314 = (($313) + 0)|0;
        store4(10072,$314);
        $315 = ($313|0)==(0);
        if ($315) {
         $$lcssa$i45 = 0;
         break L282;
        }
        $316 = $313;
        FUNCTION_TABLE_v[$316 & 3]();
        $317 = (_malloc($$$i39)|0);
        $318 = ($317|0)==(0|0);
        if (!($318)) {
         $$lcssa$i45 = $317;
         break;
        }
       }
      } else {
       $$lcssa$i45 = $311;
      }
     } while(0);
     $319 = ($$019$i28|0)==(0);
     if ($319) {
      label = 123;
     } else {
      _memcpy(($$lcssa$i45|0),($320|0),($$019$i28|0))|0;
      $321 = ($$019$i28|0)==(10);
      if (!($321)) {
       label = 123;
      }
     }
     if ((label|0) == 123) {
      _free($320);
     }
     store4($$lcssa$i,$$lcssa$i45);
     $322 = $310 | -2147483648;
     $323 = ((($$lcssa$i)) + 8|0);
     store4($323,$322);
     $732 = $$lcssa$i45;
     label = 128;
    } else {
     if ($292) {
      $$pre677 = load4($$lcssa$i);
      $732 = $$pre677;
      label = 128;
      break;
     } else {
      $324 = (($$018$i29) + 1)|0;
      $325 = $324&255;
      store1($47,$325);
      $$pn$i30 = $$lcssa$i;
      break;
     }
    }
   } while(0);
   if ((label|0) == 128) {
    $326 = (($$018$i29) + 1)|0;
    $327 = ((($$lcssa$i)) + 4|0);
    store4($327,$326);
    $$pn$i30 = $732;
   }
   $$0$i31 = (($$pn$i30) + ($$018$i29)|0);
   store1($$0$i31,46);
   $328 = ((($$0$i31)) + 1|0);
   store1($328,0);
   __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($1,$245);
   $329 = ((($1)) + 11|0);
   $330 = load1($329);
   $331 = ($330<<24>>24)<(0);
   $332 = load4($1);
   $333 = $331 ? $332 : $1;
   $334 = ((($1)) + 4|0);
   $335 = load4($334);
   $336 = $330&255;
   $337 = $331 ? $335 : $336;
   $338 = load1($47);
   $339 = ($338<<24>>24)<(0);
   if ($339) {
    $340 = ((($$lcssa$i)) + 8|0);
    $341 = load4($340);
    $342 = $341 & 2147483647;
    $phitmp$i$i39 = (($342) + -1)|0;
    $343 = ((($$lcssa$i)) + 4|0);
    $344 = load4($343);
    $347 = $phitmp$i$i39;$348 = $344;
   } else {
    $345 = $338&255;
    $347 = 10;$348 = $345;
   }
   $346 = (($347) - ($348))|0;
   $349 = ($346>>>0)<($337>>>0);
   do {
    if ($349) {
     $360 = (($337) - ($347))|0;
     $361 = (($360) + ($348))|0;
     $362 = (-18 - ($347))|0;
     $363 = ($362>>>0)<($361>>>0);
     if ($363) {
      __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
      // unreachable;
     }
     if ($339) {
      $364 = load4($$lcssa$i);
      $383 = $364;
     } else {
      $383 = $$lcssa$i;
     }
     $365 = ($347>>>0)<(2147483623);
     if ($365) {
      $366 = (($348) + ($337))|0;
      $367 = $347 << 1;
      $368 = ($366>>>0)<($367>>>0);
      $$sroa$speculated$i47 = $368 ? $367 : $366;
      $369 = ($$sroa$speculated$i47>>>0)<(11);
      $370 = (($$sroa$speculated$i47) + 16)|0;
      $371 = $370 & -16;
      $phitmp$i48 = $369 ? 11 : $371;
      $373 = $phitmp$i48;
     } else {
      $373 = -17;
     }
     $372 = ($373|0)==(0);
     $$$i48 = $372 ? 1 : $373;
     $374 = (_malloc($$$i48)|0);
     $375 = ($374|0)==(0|0);
     L314: do {
      if ($375) {
       while(1) {
        $376 = load4(10072);
        $377 = (($376) + 0)|0;
        store4(10072,$377);
        $378 = ($376|0)==(0);
        if ($378) {
         $$lcssa$i54 = 0;
         break L314;
        }
        $379 = $376;
        FUNCTION_TABLE_v[$379 & 3]();
        $380 = (_malloc($$$i48)|0);
        $381 = ($380|0)==(0|0);
        if (!($381)) {
         $$lcssa$i54 = $380;
         break;
        }
       }
      } else {
       $$lcssa$i54 = $374;
      }
     } while(0);
     $382 = ($348|0)==(0);
     if (!($382)) {
      _memcpy(($$lcssa$i54|0),($383|0),($348|0))|0;
     }
     $384 = ($337|0)==(0);
     if (!($384)) {
      $385 = (($$lcssa$i54) + ($348)|0);
      _memcpy(($385|0),($333|0),($337|0))|0;
     }
     $386 = ($347|0)==(10);
     if (!($386)) {
      _free($383);
     }
     store4($$lcssa$i,$$lcssa$i54);
     $387 = $373 | -2147483648;
     $388 = ((($$lcssa$i)) + 8|0);
     store4($388,$387);
     $389 = (($348) + ($337))|0;
     $390 = ((($$lcssa$i)) + 4|0);
     store4($390,$389);
     $391 = (($$lcssa$i54) + ($389)|0);
     store1($391,0);
    } else {
     $350 = ($337|0)==(0);
     if ($350) {
      break;
     }
     if ($339) {
      $351 = load4($$lcssa$i);
      $353 = $351;
     } else {
      $353 = $$lcssa$i;
     }
     $352 = (($353) + ($348)|0);
     _memcpy(($352|0),($333|0),($337|0))|0;
     $354 = (($348) + ($337))|0;
     $355 = load1($47);
     $356 = ($355<<24>>24)<(0);
     if ($356) {
      $357 = ((($$lcssa$i)) + 4|0);
      store4($357,$354);
     } else {
      $358 = $354&255;
      store1($47,$358);
     }
     $359 = (($353) + ($354)|0);
     store1($359,0);
    }
   } while(0);
   $392 = load1($329);
   $393 = ($392<<24>>24)<(0);
   if ($393) {
    $394 = load4($1);
    _free($394);
   }
   $395 = load1($47);
   $396 = ($395<<24>>24)<(0);
   if ($396) {
    $397 = load4($$lcssa$i);
    $398 = ((($$lcssa$i)) + 4|0);
    $399 = load4($398);
    $402 = $397;$403 = $399;
   } else {
    $400 = $395&255;
    $402 = $$lcssa$i;$403 = $400;
   }
   $401 = (($402) + ($403)|0);
   $404 = ($403|0)==(0);
   if ($404) {
    break;
   } else {
    $406 = $402;
   }
   while(1) {
    $405 = load1($406);
    $407 = ($405<<24>>24)==(32);
    if ($407) {
     store1($406,46);
    }
    $408 = ((($406)) + 1|0);
    $409 = ($408|0)==($401|0);
    if ($409) {
     break;
    } else {
     $406 = $408;
    }
   }
  }
 } while(0);
 $410 = load4($0);
 $411 = (__emval_new_cstring((3091|0))|0);
 $412 = (__emval_get_property(($410|0),($411|0))|0);
 __emval_decref(($411|0));
 $413 = (__emval_new_cstring((3102|0))|0);
 $414 = (__emval_get_property(($412|0),($413|0))|0);
 __emval_decref(($413|0));
 $415 = (+__emval_as(($414|0),(1744|0),($1|0)));
 $416 = load4($1);
 __emval_run_destructors(($416|0));
 $417 = (~~(($415)));
 __emval_decref(($414|0));
 __emval_decref(($412|0));
 $418 = ($417|0)>(0);
 L351: do {
  if ($418) {
   $419 = ((($4)) + 12|0);
   $420 = ((($2)) + 11|0);
   $421 = ((($2)) + 4|0);
   $422 = ((($4)) + 11|0);
   $423 = ((($4)) + 8|0);
   $424 = ((($4)) + 4|0);
   $425 = ((($419)) + 11|0);
   $426 = ((($6)) + 11|0);
   $$0197500 = 0;
   L353: while(1) {
    $427 = load4($0);
    $428 = (__emval_new_cstring((3091|0))|0);
    $429 = (__emval_get_property(($427|0),($428|0))|0);
    __emval_decref(($428|0));
    store4($1,$$0197500);
    $430 = (__emval_take_value((1744|0),($1|0))|0);
    $431 = (__emval_get_property(($429|0),($430|0))|0);
    __emval_decref(($430|0));
    $432 = (__emval_new_cstring((3109|0))|0);
    $433 = (__emval_get_property(($431|0),($432|0))|0);
    __emval_decref(($432|0));
    __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($2,$433);
    __emval_decref(($433|0));
    __emval_decref(($431|0));
    __emval_decref(($429|0));
    L355: do {
     if (((((9376) & 3)|0)==(0))) {
      $$015$lcssa$i156 = 9376;
      label = 170;
     } else {
      $$01518$i154 = 9376;$733 = (9376);
      while(1) {
       $434 = load1($$01518$i154);
       $435 = ($434<<24>>24)==(0);
       if ($435) {
        $$pn$i164 = $733;
        break L355;
       }
       $436 = ((($$01518$i154)) + 1|0);
       $437 = $436;
       $438 = $437 & 3;
       $439 = ($438|0)==(0);
       if ($439) {
        $$015$lcssa$i156 = $436;
        label = 170;
        break;
       } else {
        $$01518$i154 = $436;$733 = $437;
       }
      }
     }
    } while(0);
    if ((label|0) == 170) {
     label = 0;
     $$0$i158 = $$015$lcssa$i156;
     while(1) {
      $440 = load4($$0$i158);
      $441 = (($440) + -16843009)|0;
      $442 = $440 & -2139062144;
      $443 = $442 ^ -2139062144;
      $444 = $443 & $441;
      $445 = ($444|0)==(0);
      $446 = ((($$0$i158)) + 4|0);
      if ($445) {
       $$0$i158 = $446;
      } else {
       break;
      }
     }
     $447 = $440&255;
     $448 = ($447<<24>>24)==(0);
     if ($448) {
      $$1$lcssa$i162 = $$0$i158;
     } else {
      $$pn29$i159 = $$0$i158;
      while(1) {
       $449 = ((($$pn29$i159)) + 1|0);
       $$pre$i160 = load1($449);
       $450 = ($$pre$i160<<24>>24)==(0);
       if ($450) {
        $$1$lcssa$i162 = $449;
        break;
       } else {
        $$pn29$i159 = $449;
       }
      }
     }
     $451 = $$1$lcssa$i162;
     $$pn$i164 = $451;
    }
    $$014$i165 = (($$pn$i164) - (9376))|0;
    $452 = load1($420);
    $453 = ($452<<24>>24)<(0);
    $454 = load4($421);
    $455 = $452&255;
    $456 = $453 ? $454 : $455;
    $457 = ($$014$i165|0)==(-1);
    if ($457) {
     label = 176;
     break;
    }
    $458 = load4($2);
    $459 = $453 ? $458 : $2;
    $460 = ($456>>>0)>($$014$i165>>>0);
    $$sroa$speculated19$i57 = $460 ? $$014$i165 : $456;
    $461 = ($$sroa$speculated19$i57|0)==(0);
    L370: do {
     if ($461) {
      label = 180;
     } else {
      $$01318$i64 = $459;$$01417$i65 = $$sroa$speculated19$i57;$$019$i63 = 9376;
      while(1) {
       $462 = load1($$01318$i64);
       $463 = load1($$019$i63);
       $464 = ($462<<24>>24)==($463<<24>>24);
       if (!($464)) {
        label = 181;
        break L370;
       }
       $465 = (($$01417$i65) + -1)|0;
       $466 = ((($$01318$i64)) + 1|0);
       $467 = ((($$019$i63)) + 1|0);
       $468 = ($465|0)==(0);
       if ($468) {
        label = 180;
        break;
       } else {
        $$01318$i64 = $466;$$01417$i65 = $465;$$019$i63 = $467;
       }
      }
     }
    } while(0);
    if ((label|0) == 180) {
     label = 0;
     $469 = ($456>>>0)>=($$014$i165>>>0);
     $470 = $460 ^ 1;
     $or$cond = $469 & $470;
     if ($or$cond) {
      $558 = $452;
     } else {
      label = 181;
     }
    }
    do {
     if ((label|0) == 181) {
      label = 0;
      L378: do {
       if (((((3078) & 3)|0)==(0))) {
        $$015$lcssa$i169 = 3078;
        label = 184;
       } else {
        $$01518$i167 = 3078;$734 = (3078);
        while(1) {
         $471 = load1($$01518$i167);
         $472 = ($471<<24>>24)==(0);
         if ($472) {
          $$pn$i177 = $734;
          break L378;
         }
         $473 = ((($$01518$i167)) + 1|0);
         $474 = $473;
         $475 = $474 & 3;
         $476 = ($475|0)==(0);
         if ($476) {
          $$015$lcssa$i169 = $473;
          label = 184;
          break;
         } else {
          $$01518$i167 = $473;$734 = $474;
         }
        }
       }
      } while(0);
      if ((label|0) == 184) {
       label = 0;
       $$0$i171 = $$015$lcssa$i169;
       while(1) {
        $477 = load4($$0$i171);
        $478 = (($477) + -16843009)|0;
        $479 = $477 & -2139062144;
        $480 = $479 ^ -2139062144;
        $481 = $480 & $478;
        $482 = ($481|0)==(0);
        $483 = ((($$0$i171)) + 4|0);
        if ($482) {
         $$0$i171 = $483;
        } else {
         break;
        }
       }
       $484 = $477&255;
       $485 = ($484<<24>>24)==(0);
       if ($485) {
        $$1$lcssa$i175 = $$0$i171;
       } else {
        $$pn29$i172 = $$0$i171;
        while(1) {
         $486 = ((($$pn29$i172)) + 1|0);
         $$pre$i173 = load1($486);
         $487 = ($$pre$i173<<24>>24)==(0);
         if ($487) {
          $$1$lcssa$i175 = $486;
          break;
         } else {
          $$pn29$i172 = $486;
         }
        }
       }
       $488 = $$1$lcssa$i175;
       $$pn$i177 = $488;
      }
      $$014$i178 = (($$pn$i177) - (3078))|0;
      $489 = ($$014$i178|0)==(-1);
      if ($489) {
       label = 190;
       break L353;
      }
      $490 = ($456>>>0)>($$014$i178>>>0);
      $$sroa$speculated19$i70 = $490 ? $$014$i178 : $456;
      $491 = ($$sroa$speculated19$i70|0)==(0);
      L393: do {
       if ($491) {
        label = 194;
       } else {
        $$01318$i77 = $459;$$01417$i78 = $$sroa$speculated19$i70;$$019$i76 = 3078;
        while(1) {
         $492 = load1($$01318$i77);
         $493 = load1($$019$i76);
         $494 = ($492<<24>>24)==($493<<24>>24);
         if (!($494)) {
          break L393;
         }
         $495 = (($$01417$i78) + -1)|0;
         $496 = ((($$01318$i77)) + 1|0);
         $497 = ((($$019$i76)) + 1|0);
         $498 = ($495|0)==(0);
         if ($498) {
          label = 194;
          break;
         } else {
          $$01318$i77 = $496;$$01417$i78 = $495;$$019$i76 = $497;
         }
        }
       }
      } while(0);
      if ((label|0) == 194) {
       label = 0;
       $499 = ($456>>>0)>=($$014$i178>>>0);
       $500 = $490 ^ 1;
       $or$cond197 = $499 & $500;
       if ($or$cond197) {
        $558 = $452;
        break;
       }
      }
      $501 = load4($0);
      $502 = (__emval_new_cstring((3091|0))|0);
      $503 = (__emval_get_property(($501|0),($502|0))|0);
      __emval_decref(($502|0));
      store4($1,$$0197500);
      $504 = (__emval_take_value((1744|0),($1|0))|0);
      $505 = (__emval_get_property(($503|0),($504|0))|0);
      __emval_decref(($504|0));
      $506 = (__emval_new_cstring((3118|0))|0);
      $507 = (__emval_get_property(($505|0),($506|0))|0);
      __emval_decref(($506|0));
      __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($6,$507);
      ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
      if ($453) {
       $508 = ($454>>>0)>(4294967279);
       if ($508) {
        label = 198;
        break L353;
       }
       $509 = ($454>>>0)<(11);
       if ($509) {
        $522 = $454&255;
        store1($422,$522);
        $523 = ($454|0)==(0);
        if ($523) {
         $$017$i = $4;
        } else {
         $$016$i = $4;
         label = 205;
        }
       } else {
        $510 = (($454) + 16)|0;
        $511 = $510 & -16;
        $512 = ($511|0)==(0);
        $$$i57 = $512 ? 1 : $511;
        $513 = (_malloc($$$i57)|0);
        $514 = ($513|0)==(0|0);
        L406: do {
         if ($514) {
          while(1) {
           $515 = load4(10072);
           $516 = (($515) + 0)|0;
           store4(10072,$516);
           $517 = ($515|0)==(0);
           if ($517) {
            $$lcssa$i63 = 0;
            break L406;
           }
           $518 = $515;
           FUNCTION_TABLE_v[$518 & 3]();
           $519 = (_malloc($$$i57)|0);
           $520 = ($519|0)==(0|0);
           if (!($520)) {
            $$lcssa$i63 = $519;
            break;
           }
          }
         } else {
          $$lcssa$i63 = $513;
         }
        } while(0);
        store4($4,$$lcssa$i63);
        $521 = $511 | -2147483648;
        store4($423,$521);
        store4($424,$454);
        $$016$i = $$lcssa$i63;
        label = 205;
       }
       if ((label|0) == 205) {
        label = 0;
        _memcpy(($$016$i|0),($458|0),($454|0))|0;
        $$017$i = $$016$i;
       }
       $524 = (($$017$i) + ($454)|0);
       store1($524,0);
      } else {
       ; store8($4,load8($2,4),4); store4($4+8 | 0,load4($2+8 | 0,4),4);
      }
      ; store8($419,load8($6,4),4); store4($419+8 | 0,load4($6+8 | 0,4),4);
      ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
      $525 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($19,$1,$4)|0);
      $526 = load4($525);
      $527 = ($526|0)==(0|0);
      do {
       if ($527) {
        $528 = (_malloc(40)|0);
        $529 = ($528|0)==(0|0);
        L418: do {
         if ($529) {
          while(1) {
           $530 = load4(10072);
           $531 = (($530) + 0)|0;
           store4(10072,$531);
           $532 = ($530|0)==(0);
           if ($532) {
            $$lcssa$i71 = 0;
            break L418;
           }
           $533 = $530;
           FUNCTION_TABLE_v[$533 & 3]();
           $534 = (_malloc(40)|0);
           $535 = ($534|0)==(0|0);
           if (!($535)) {
            $$lcssa$i71 = $534;
            break;
           }
          }
         } else {
          $$lcssa$i71 = $528;
         }
        } while(0);
        $536 = ((($$lcssa$i71)) + 16|0);
        ; store8($536,load8($4,4),4); store4($536+8 | 0,load4($4+8 | 0,4),4);
        ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
        $537 = ((($$lcssa$i71)) + 28|0);
        ; store8($537,load8($419,4),4); store4($537+8 | 0,load4($419+8 | 0,4),4);
        ; store8($419,i64_const(0,0),4); store4($419+8|0,0,4);
        $538 = load4($1);
        store4($$lcssa$i71,0);
        $539 = ((($$lcssa$i71)) + 4|0);
        store4($539,0);
        $540 = ((($$lcssa$i71)) + 8|0);
        store4($540,$538);
        store4($525,$$lcssa$i71);
        $541 = load4($19);
        $542 = load4($541);
        $543 = ($542|0)==(0|0);
        if ($543) {
         $546 = $$lcssa$i71;
        } else {
         $544 = $542;
         store4($19,$544);
         $$pre$i$i$i$i$i$i = load4($525);
         $546 = $$pre$i$i$i$i$i$i;
        }
        $545 = load4($20);
        __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($545,$546);
        $547 = load4($21);
        $548 = (($547) + 1)|0;
        store4($21,$548);
       } else {
        $$pre396 = load1($425);
        $549 = ($$pre396<<24>>24)<(0);
        if (!($549)) {
         break;
        }
        $550 = load4($419);
        _free($550);
       }
      } while(0);
      $551 = load1($422);
      $552 = ($551<<24>>24)<(0);
      if ($552) {
       $553 = load4($4);
       _free($553);
      }
      $554 = load1($426);
      $555 = ($554<<24>>24)<(0);
      if ($555) {
       $556 = load4($6);
       _free($556);
      }
      __emval_decref(($507|0));
      __emval_decref(($505|0));
      __emval_decref(($503|0));
      $$pre678 = load1($420);
      $558 = $$pre678;
     }
    } while(0);
    $557 = ($558<<24>>24)<(0);
    if ($557) {
     $559 = load4($2);
     _free($559);
    }
    $560 = (($$0197500) + 1)|0;
    $561 = ($560|0)<($417|0);
    if ($561) {
     $$0197500 = $560;
    } else {
     break L351;
    }
   }
   if ((label|0) == 176) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
    // unreachable;
   }
   else if ((label|0) == 190) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
    // unreachable;
   }
   else if ((label|0) == 198) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
  }
 } while(0);
 $562 = load4($0);
 $563 = (__emval_new_cstring((3128|0))|0);
 $564 = (__emval_get_property(($562|0),($563|0))|0);
 __emval_decref(($563|0));
 $565 = (__emval_new_cstring((3102|0))|0);
 $566 = (__emval_get_property(($564|0),($565|0))|0);
 __emval_decref(($565|0));
 $567 = (+__emval_as(($566|0),(1744|0),($1|0)));
 $568 = load4($1);
 __emval_run_destructors(($568|0));
 $569 = (~~(($567)));
 __emval_decref(($566|0));
 __emval_decref(($564|0));
 $570 = ($569|0)>(0);
 if ($570) {
  $$1198499 = 0;
  while(1) {
   $571 = load4($0);
   $572 = (__emval_new_cstring((3128|0))|0);
   $573 = (__emval_get_property(($571|0),($572|0))|0);
   __emval_decref(($572|0));
   store4($1,$$1198499);
   $574 = (__emval_take_value((1744|0),($1|0))|0);
   $575 = (__emval_get_property(($573|0),($574|0))|0);
   __emval_decref(($574|0));
   store4($7,$575);
   $576 = (__Z7toVNodeN10emscripten3valE($7)|0);
   store4($2,$576);
   $577 = load4($28);
   $578 = load4($29);
   $579 = ($577>>>0)<($578>>>0);
   if ($579) {
    $580 = $576;
    store4($577,$580);
    $581 = load4($28);
    $582 = ((($581)) + 4|0);
    store4($28,$582);
   } else {
    __ZNSt3__26vectorIP5VNodeNS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_($27,$2);
   }
   __emval_decref(($575|0));
   __emval_decref(($573|0));
   $583 = (($$1198499) + 1)|0;
   $584 = ($583|0)<($569|0);
   if ($584) {
    $$1198499 = $583;
   } else {
    break;
   }
  }
 }
 $585 = load4($0);
 __emval_incref(($585|0));
 $586 = load4($26);
 __emval_decref(($586|0));
 $587 = load4($0);
 store4($26,$587);
 __emval_decref(($245|0));
 STACKTOP = sp;return ($$lcssa$i|0);
}
function __Z10toVNodePtrN10emscripten3valE($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = load4($0);
 store4($1,$2);
 __emval_incref(($2|0));
 $3 = (__Z7toVNodeN10emscripten3valE($1)|0);
 __emval_decref(($2|0));
 $4 = $3;
 STACKTOP = sp;return ($4|0);
}
function __Z9sameVnodeP5VNodeS0_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$$i9 = 0, $$$i8 = 0, $$01318$i = 0, $$01318$i2 = 0, $$01417$i = 0, $$01417$i3 = 0, $$019$i = 0, $$019$i1 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i5 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 12|0);
 $3 = ((($1)) + 12|0);
 $4 = ((($2)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 if ($6) {
  $7 = ((($0)) + 16|0);
  $8 = load4($7);
  $19 = $8;
 } else {
  $9 = $5&255;
  $19 = $9;
 }
 $10 = ((($3)) + 11|0);
 $11 = load1($10);
 $12 = ($11<<24>>24)<(0);
 $13 = ((($1)) + 16|0);
 $14 = load4($13);
 $15 = $11&255;
 $16 = $12 ? $14 : $15;
 if ($6) {
  $17 = load4($2);
  $66 = $17;
 } else {
  $66 = $2;
 }
 $18 = ($16>>>0)<($19>>>0);
 $$sroa$speculated$i = $18 ? $16 : $19;
 $20 = ($$sroa$speculated$i|0)==(0);
 L9: do {
  if (!($20)) {
   $21 = load4($3);
   $22 = $12 ? $21 : $3;
   $$01318$i = $66;$$01417$i = $$sroa$speculated$i;$$019$i = $22;
   while(1) {
    $23 = load1($$01318$i);
    $24 = load1($$019$i);
    $25 = ($23<<24>>24)==($24<<24>>24);
    if (!($25)) {
     $65 = 0;
     break;
    }
    $26 = (($$01417$i) + -1)|0;
    $27 = ((($$01318$i)) + 1|0);
    $28 = ((($$019$i)) + 1|0);
    $29 = ($26|0)==(0);
    if ($29) {
     break L9;
    } else {
     $$01318$i = $27;$$01417$i = $26;$$019$i = $28;
    }
   }
   return ($65|0);
  }
 } while(0);
 $30 = ($19>>>0)>=($16>>>0);
 $31 = $18 ^ 1;
 $or$cond = $30 & $31;
 if (!($or$cond)) {
  $65 = 0;
  return ($65|0);
 }
 $32 = ((($0)) + 11|0);
 $33 = load1($32);
 $34 = ($33<<24>>24)<(0);
 if ($34) {
  $35 = ((($0)) + 4|0);
  $36 = load4($35);
  $47 = $36;
 } else {
  $37 = $33&255;
  $47 = $37;
 }
 $38 = ((($1)) + 11|0);
 $39 = load1($38);
 $40 = ($39<<24>>24)<(0);
 $41 = ((($1)) + 4|0);
 $42 = load4($41);
 $43 = $39&255;
 $44 = $40 ? $42 : $43;
 if ($34) {
  $45 = load4($0);
  $67 = $45;
 } else {
  $67 = $0;
 }
 $46 = ($44>>>0)<($47>>>0);
 $$sroa$speculated$i5 = $46 ? $44 : $47;
 $48 = ($$sroa$speculated$i5|0)==(0);
 L27: do {
  if ($48) {
   label = 23;
  } else {
   $49 = load4($1);
   $50 = $40 ? $49 : $1;
   $$01318$i2 = $67;$$01417$i3 = $$sroa$speculated$i5;$$019$i1 = $50;
   while(1) {
    $51 = load1($$01318$i2);
    $52 = load1($$019$i1);
    $53 = ($51<<24>>24)==($52<<24>>24);
    if (!($53)) {
     break;
    }
    $54 = (($$01417$i3) + -1)|0;
    $55 = ((($$01318$i2)) + 1|0);
    $56 = ((($$019$i1)) + 1|0);
    $57 = ($54|0)==(0);
    if ($57) {
     label = 23;
     break L27;
    } else {
     $$01318$i2 = $55;$$01417$i3 = $54;$$019$i1 = $56;
    }
   }
   $58 = $51&255;
   $59 = $52&255;
   $60 = (($58) - ($59))|0;
   $61 = ($60|0)==(0);
   if ($61) {
    label = 23;
   } else {
    $64 = $60;
   }
  }
 } while(0);
 if ((label|0) == 23) {
  $62 = ($47>>>0)<($44>>>0);
  $$$i8 = $46&1;
  $$$$i9 = $62 ? -1 : $$$i8;
  $64 = $$$$i9;
 }
 $63 = ($64|0)==(0);
 $65 = $63;
 return ($65|0);
}
function __Z9createElmP5VNodeNSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$$i14 = 0, $$$i23 = 0, $$$i32 = 0, $$$i41 = 0, $$$i5 = 0, $$$i54 = 0, $$$i63 = 0, $$$i72 = 0, $$$i81 = 0, $$$i90 = 0, $$0$i$i = 0, $$0$i$i13 = 0, $$0$i107 = 0, $$01318$i = 0, $$014$i = 0, $$01417$i = 0, $$015$lcssa$i = 0, $$01518$i = 0, $$016$i = 0;
 var $$016$i46 = 0, $$016$i5 = 0, $$016$i51 = 0, $$016$i56 = 0, $$016$i61 = 0, $$016$i66 = 0, $$016$i76 = 0, $$016$i90 = 0, $$016$i98 = 0, $$017$i = 0, $$017$i47 = 0, $$017$i52 = 0, $$017$i57 = 0, $$017$i6 = 0, $$017$i62 = 0, $$017$i67 = 0, $$017$i77 = 0, $$017$i91 = 0, $$017$i99 = 0, $$019$i = 0;
 var $$0226 = 0, $$035$lcssa$i199 = 0, $$035$lcssa$i23201 = 0, $$03555$i = 0, $$03555$i19 = 0, $$036$lcssa$i198 = 0, $$036$lcssa$i22200 = 0, $$03654$i = 0, $$03654$i20 = 0, $$046$i = 0, $$046$i29 = 0, $$060 = 0, $$063 = 0, $$1$i$i = 0, $$1$i$i14 = 0, $$1$lcssa$i = 0, $$13745$i = 0, $$13745$i30 = 0, $$140$i = 0, $$140$i36 = 0;
 var $$2$i = 0, $$2$i40 = 0, $$23839$i = 0, $$23839$i37 = 0, $$3$i = 0, $$3$i39 = 0, $$in = 0, $$lcssa$i = 0, $$lcssa$i11 = 0, $$lcssa$i20 = 0, $$lcssa$i29 = 0, $$lcssa$i38 = 0, $$lcssa$i47 = 0, $$lcssa$i60 = 0, $$lcssa$i69 = 0, $$lcssa$i78 = 0, $$lcssa$i87 = 0, $$lcssa$i96 = 0, $$pn$i = 0, $$pn29$i = 0;
 var $$pre = 0, $$pre$i = 0, $$pre$i108 = 0, $$pre$i26 = 0, $$pre$i50 = 0, $$pre$phi189Z2D = 0, $$pre$phi193Z2D = 0, $$pre184 = 0, $$pre185 = 0, $$pre186 = 0, $$pre188$pre$phiZZ2D = 0, $$pre192$pre$phiZZ2D = 0, $$pre195 = 0, $$pre197 = 0, $$pre240 = 0, $$sink = 0, $$sroa$speculated = 0, $$sroa$speculated$i43 = 0, $$sroa$speculated$i73 = 0, $$sroa$speculated19$i = 0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0;
 var $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0;
 var $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0;
 var $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0;
 var $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0;
 var $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0;
 var $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0;
 var $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0;
 var $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0.0, $367 = 0, $368 = 0, $369 = 0, $37 = 0;
 var $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0;
 var $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0;
 var $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0;
 var $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0;
 var $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0;
 var $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0;
 var $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0;
 var $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0;
 var $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0;
 var $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0;
 var $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0;
 var $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0;
 var $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0;
 var $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0;
 var $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0;
 var $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond$i = 0, $or$cond$i21 = 0, $scevgep$i$i$i = 0, $scevgep4$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $2 = sp;
 $3 = sp + 112|0;
 $4 = sp + 100|0;
 $5 = sp + 88|0;
 $6 = sp + 52|0;
 $7 = sp + 76|0;
 $8 = sp + 64|0;
 $9 = sp + 40|0;
 $10 = sp + 28|0;
 $11 = sp + 16|0;
 L1: do {
  if (((((3139) & 3)|0)==(0))) {
   $$015$lcssa$i = 3139;
   label = 4;
  } else {
   $$01518$i = 3139;$647 = (3139);
   while(1) {
    $12 = load1($$01518$i);
    $13 = ($12<<24>>24)==(0);
    if ($13) {
     $$pn$i = $647;
     break L1;
    }
    $14 = ((($$01518$i)) + 1|0);
    $15 = $14;
    $16 = $15 & 3;
    $17 = ($16|0)==(0);
    if ($17) {
     $$015$lcssa$i = $14;
     label = 4;
     break;
    } else {
     $$01518$i = $14;$647 = $15;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $$0$i107 = $$015$lcssa$i;
  while(1) {
   $18 = load4($$0$i107);
   $19 = (($18) + -16843009)|0;
   $20 = $18 & -2139062144;
   $21 = $20 ^ -2139062144;
   $22 = $21 & $19;
   $23 = ($22|0)==(0);
   $24 = ((($$0$i107)) + 4|0);
   if ($23) {
    $$0$i107 = $24;
   } else {
    break;
   }
  }
  $25 = $18&255;
  $26 = ($25<<24>>24)==(0);
  if ($26) {
   $$1$lcssa$i = $$0$i107;
  } else {
   $$pn29$i = $$0$i107;
   while(1) {
    $27 = ((($$pn29$i)) + 1|0);
    $$pre$i108 = load1($27);
    $28 = ($$pre$i108<<24>>24)==(0);
    if ($28) {
     $$1$lcssa$i = $27;
     break;
    } else {
     $$pn29$i = $27;
    }
   }
  }
  $29 = $$1$lcssa$i;
  $$pn$i = $29;
 }
 $$014$i = (($$pn$i) - (3139))|0;
 $30 = ((($0)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 if ($32) {
  $33 = ((($0)) + 4|0);
  $34 = load4($33);
  $39 = $34;
 } else {
  $35 = $31&255;
  $39 = $35;
 }
 $36 = ($$014$i|0)==(-1);
 if ($36) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
  // unreachable;
 }
 if ($32) {
  $37 = load4($0);
  $648 = $37;
 } else {
  $648 = $0;
 }
 $38 = ($39>>>0)>($$014$i>>>0);
 $$sroa$speculated19$i = $38 ? $$014$i : $39;
 $40 = ($$sroa$speculated19$i|0)==(0);
 L26: do {
  if ($40) {
   label = 20;
  } else {
   $$01318$i = $648;$$01417$i = $$sroa$speculated19$i;$$019$i = 3139;
   while(1) {
    $41 = load1($$01318$i);
    $42 = load1($$019$i);
    $43 = ($41<<24>>24)==($42<<24>>24);
    if (!($43)) {
     break L26;
    }
    $44 = (($$01417$i) + -1)|0;
    $45 = ((($$01318$i)) + 1|0);
    $46 = ((($$019$i)) + 1|0);
    $47 = ($44|0)==(0);
    if ($47) {
     label = 20;
     break;
    } else {
     $$01318$i = $45;$$01417$i = $44;$$019$i = $46;
    }
   }
  }
 } while(0);
 if ((label|0) == 20) {
  $48 = ($39>>>0)>=($$014$i>>>0);
  $49 = $38 ^ 1;
  $or$cond = $48 & $49;
  if ($or$cond) {
   $50 = ((($0)) + 24|0);
   ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
   $51 = ((($50)) + 11|0);
   $52 = load1($51);
   $53 = ($52<<24>>24)<(0);
   if ($53) {
    $54 = load4($50);
    $55 = ((($0)) + 28|0);
    $56 = load4($55);
    $57 = ($56>>>0)>(4294967279);
    if ($57) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $58 = ($56>>>0)<(11);
    if ($58) {
     $73 = $56&255;
     $74 = ((($4)) + 11|0);
     store1($74,$73);
     $75 = ($56|0)==(0);
     if ($75) {
      $$017$i = $4;
     } else {
      $$016$i = $4;
      label = 31;
     }
    } else {
     $59 = (($56) + 16)|0;
     $60 = $59 & -16;
     $61 = ($60|0)==(0);
     $$$i = $61 ? 1 : $60;
     $62 = (_malloc($$$i)|0);
     $63 = ($62|0)==(0|0);
     L41: do {
      if ($63) {
       while(1) {
        $64 = load4(10072);
        $65 = (($64) + 0)|0;
        store4(10072,$65);
        $66 = ($64|0)==(0);
        if ($66) {
         $$lcssa$i = 0;
         break L41;
        }
        $67 = $64;
        FUNCTION_TABLE_v[$67 & 3]();
        $68 = (_malloc($$$i)|0);
        $69 = ($68|0)==(0|0);
        if (!($69)) {
         $$lcssa$i = $68;
         break;
        }
       }
      } else {
       $$lcssa$i = $62;
      }
     } while(0);
     store4($4,$$lcssa$i);
     $70 = $60 | -2147483648;
     $71 = ((($4)) + 8|0);
     store4($71,$70);
     $72 = ((($4)) + 4|0);
     store4($72,$56);
     $$016$i = $$lcssa$i;
     label = 31;
    }
    if ((label|0) == 31) {
     _memcpy(($$016$i|0),($54|0),($56|0))|0;
     $$017$i = $$016$i;
    }
    $76 = (($$017$i) + ($56)|0);
    store1($76,0);
   } else {
    ; store8($4,load8($50,4),4); store4($4+8 | 0,load4($50+8 | 0,4),4);
   }
   $77 = load4(10076);
   $78 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($77,2820,$4)|0);
   $79 = ((($0)) + 96|0);
   $80 = load4($79);
   __emval_decref(($80|0));
   $81 = $78;
   store4($79,$81);
   __emval_decref((0|0));
   $82 = ((($4)) + 11|0);
   $83 = load1($82);
   $84 = ($83<<24>>24)<(0);
   if (!($84)) {
    $645 = ((($0)) + 96|0);
    $646 = load4($645);
    __emval_incref(($646|0));
    STACKTOP = sp;return ($646|0);
   }
   $85 = load4($4);
   _free($85);
   $645 = ((($0)) + 96|0);
   $646 = load4($645);
   __emval_incref(($646|0));
   STACKTOP = sp;return ($646|0);
  }
 }
 if ($32) {
  $86 = ((($0)) + 4|0);
  $87 = load4($86);
  $90 = $87;
 } else {
  $88 = $31&255;
  $90 = $88;
 }
 $89 = ($90|0)==(0);
 if ($89) {
  $91 = ((($0)) + 24|0);
  ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
  $92 = ((($91)) + 11|0);
  $93 = load1($92);
  $94 = ($93<<24>>24)<(0);
  if ($94) {
   $95 = load4($91);
   $96 = ((($0)) + 28|0);
   $97 = load4($96);
   $98 = ($97>>>0)>(4294967279);
   if ($98) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $99 = ($97>>>0)<(11);
   if ($99) {
    $114 = $97&255;
    $115 = ((($5)) + 11|0);
    store1($115,$114);
    $116 = ($97|0)==(0);
    if ($116) {
     $$017$i6 = $5;
    } else {
     $$016$i5 = $5;
     label = 49;
    }
   } else {
    $100 = (($97) + 16)|0;
    $101 = $100 & -16;
    $102 = ($101|0)==(0);
    $$$i5 = $102 ? 1 : $101;
    $103 = (_malloc($$$i5)|0);
    $104 = ($103|0)==(0|0);
    L70: do {
     if ($104) {
      while(1) {
       $105 = load4(10072);
       $106 = (($105) + 0)|0;
       store4(10072,$106);
       $107 = ($105|0)==(0);
       if ($107) {
        $$lcssa$i11 = 0;
        break L70;
       }
       $108 = $105;
       FUNCTION_TABLE_v[$108 & 3]();
       $109 = (_malloc($$$i5)|0);
       $110 = ($109|0)==(0|0);
       if (!($110)) {
        $$lcssa$i11 = $109;
        break;
       }
      }
     } else {
      $$lcssa$i11 = $103;
     }
    } while(0);
    store4($5,$$lcssa$i11);
    $111 = $101 | -2147483648;
    $112 = ((($5)) + 8|0);
    store4($112,$111);
    $113 = ((($5)) + 4|0);
    store4($113,$97);
    $$016$i5 = $$lcssa$i11;
    label = 49;
   }
   if ((label|0) == 49) {
    _memcpy(($$016$i5|0),($95|0),($97|0))|0;
    $$017$i6 = $$016$i5;
   }
   $117 = (($$017$i6) + ($97)|0);
   store1($117,0);
  } else {
   ; store8($5,load8($91,4),4); store4($5+8 | 0,load4($91+8 | 0,4),4);
  }
  $118 = load4(10076);
  $119 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($118,2805,$5)|0);
  $120 = ((($0)) + 96|0);
  $121 = load4($120);
  __emval_decref(($121|0));
  $122 = $119;
  store4($120,$122);
  __emval_decref((0|0));
  $123 = ((($5)) + 11|0);
  $124 = load1($123);
  $125 = ($124<<24>>24)<(0);
  if (!($125)) {
   $645 = ((($0)) + 96|0);
   $646 = load4($645);
   __emval_incref(($646|0));
   STACKTOP = sp;return ($646|0);
  }
  $126 = load4($5);
  _free($126);
  $645 = ((($0)) + 96|0);
  $646 = load4($645);
  __emval_incref(($646|0));
  STACKTOP = sp;return ($646|0);
 }
 if ($32) {
  $127 = load4($0);
  $128 = ((($0)) + 4|0);
  $129 = load4($128);
  $132 = $129;$134 = $127;
 } else {
  $130 = $31&255;
  $132 = $130;$134 = $0;
 }
 $131 = ($132|0)==(0);
 if ($131) {
  $$1$i$i = -1;
 } else {
  $133 = $134;
  $135 = $133 & 3;
  $136 = ($135|0)==(0);
  L91: do {
   if ($136) {
    $$035$lcssa$i199 = $134;$$036$lcssa$i198 = $132;
    label = 61;
   } else {
    $$03555$i = $134;$$03654$i = $132;
    while(1) {
     $137 = load1($$03555$i);
     $138 = ($137<<24>>24)==(35);
     if ($138) {
      $$2$i = $$03555$i;$$3$i = $$03654$i;
      break L91;
     }
     $139 = ((($$03555$i)) + 1|0);
     $140 = (($$03654$i) + -1)|0;
     $141 = $139;
     $142 = $141 & 3;
     $143 = ($142|0)!=(0);
     $144 = ($140|0)!=(0);
     $or$cond$i = $144 & $143;
     if ($or$cond$i) {
      $$03555$i = $139;$$03654$i = $140;
     } else {
      break;
     }
    }
    if ($144) {
     $$035$lcssa$i199 = $139;$$036$lcssa$i198 = $140;
     label = 61;
    } else {
     $$2$i = $139;$$3$i = 0;
    }
   }
  } while(0);
  L96: do {
   if ((label|0) == 61) {
    $$pre$i = load1($$035$lcssa$i199);
    $145 = ($$pre$i<<24>>24)==(35);
    if ($145) {
     $$2$i = $$035$lcssa$i199;$$3$i = $$036$lcssa$i198;
    } else {
     $146 = ($$036$lcssa$i198>>>0)>(3);
     do {
      if ($146) {
       $$046$i = $$035$lcssa$i199;$$13745$i = $$036$lcssa$i198;
       while(1) {
        $147 = load4($$046$i);
        $148 = $147 ^ 589505315;
        $149 = (($148) + -16843009)|0;
        $150 = $147 & -2139062144;
        $151 = $150 ^ -2139062144;
        $152 = $151 & $149;
        $153 = ($152|0)==(0);
        if (!($153)) {
         label = 65;
         break;
        }
        $154 = ((($$046$i)) + 4|0);
        $155 = (($$13745$i) + -4)|0;
        $156 = ($155>>>0)>(3);
        if ($156) {
         $$046$i = $154;$$13745$i = $155;
        } else {
         label = 67;
         break;
        }
       }
       if ((label|0) == 65) {
        $$140$i = $$046$i;$$23839$i = $$13745$i;
        break;
       }
       else if ((label|0) == 67) {
        $157 = ($155|0)==(0);
        if ($157) {
         $$2$i = $154;$$3$i = 0;
         break L96;
        } else {
         $$140$i = $154;$$23839$i = $155;
         break;
        }
       }
      } else {
       $$140$i = $$035$lcssa$i199;$$23839$i = $$036$lcssa$i198;
      }
     } while(0);
     while(1) {
      $158 = load1($$140$i);
      $159 = ($158<<24>>24)==(35);
      if ($159) {
       $$2$i = $$140$i;$$3$i = $$23839$i;
       break L96;
      }
      $160 = ((($$140$i)) + 1|0);
      $161 = (($$23839$i) + -1)|0;
      $162 = ($161|0)==(0);
      if ($162) {
       $$2$i = $160;$$3$i = 0;
       break;
      } else {
       $$140$i = $160;$$23839$i = $161;
      }
     }
    }
   }
  } while(0);
  $163 = ($$3$i|0)!=(0);
  $164 = $163 ? $$2$i : 0;
  $165 = ($164|0)==(0|0);
  $166 = $164;
  $167 = (($166) - ($133))|0;
  $$0$i$i = $165 ? -1 : $167;
  $$1$i$i = $$0$i$i;
 }
 if ($32) {
  $168 = load4($0);
  $169 = ((($0)) + 4|0);
  $170 = load4($169);
  $173 = $170;$175 = $168;
 } else {
  $171 = $31&255;
  $173 = $171;$175 = $0;
 }
 $172 = ($173>>>0)>($$1$i$i>>>0);
 if ($172) {
  $174 = (($175) + ($$1$i$i)|0);
  $176 = (($173) - ($$1$i$i))|0;
  $177 = ($176|0)==(0);
  if ($177) {
   $210 = 0;
  } else {
   $178 = $174;
   $179 = $178 & 3;
   $180 = ($179|0)==(0);
   L120: do {
    if ($180) {
     $$035$lcssa$i23201 = $174;$$036$lcssa$i22200 = $176;
     label = 80;
    } else {
     $$03555$i19 = $174;$$03654$i20 = $176;
     while(1) {
      $181 = load1($$03555$i19);
      $182 = ($181<<24>>24)==(46);
      if ($182) {
       $$2$i40 = $$03555$i19;$$3$i39 = $$03654$i20;
       break L120;
      }
      $183 = ((($$03555$i19)) + 1|0);
      $184 = (($$03654$i20) + -1)|0;
      $185 = $183;
      $186 = $185 & 3;
      $187 = ($186|0)!=(0);
      $188 = ($184|0)!=(0);
      $or$cond$i21 = $188 & $187;
      if ($or$cond$i21) {
       $$03555$i19 = $183;$$03654$i20 = $184;
      } else {
       break;
      }
     }
     if ($188) {
      $$035$lcssa$i23201 = $183;$$036$lcssa$i22200 = $184;
      label = 80;
     } else {
      $$2$i40 = $183;$$3$i39 = 0;
     }
    }
   } while(0);
   L125: do {
    if ((label|0) == 80) {
     $$pre$i26 = load1($$035$lcssa$i23201);
     $189 = ($$pre$i26<<24>>24)==(46);
     if ($189) {
      $$2$i40 = $$035$lcssa$i23201;$$3$i39 = $$036$lcssa$i22200;
     } else {
      $190 = ($$036$lcssa$i22200>>>0)>(3);
      do {
       if ($190) {
        $$046$i29 = $$035$lcssa$i23201;$$13745$i30 = $$036$lcssa$i22200;
        while(1) {
         $191 = load4($$046$i29);
         $192 = $191 ^ 774778414;
         $193 = (($192) + -16843009)|0;
         $194 = $191 & -2139062144;
         $195 = $194 ^ -2139062144;
         $196 = $195 & $193;
         $197 = ($196|0)==(0);
         if (!($197)) {
          label = 84;
          break;
         }
         $198 = ((($$046$i29)) + 4|0);
         $199 = (($$13745$i30) + -4)|0;
         $200 = ($199>>>0)>(3);
         if ($200) {
          $$046$i29 = $198;$$13745$i30 = $199;
         } else {
          label = 86;
          break;
         }
        }
        if ((label|0) == 84) {
         $$140$i36 = $$046$i29;$$23839$i37 = $$13745$i30;
         break;
        }
        else if ((label|0) == 86) {
         $201 = ($199|0)==(0);
         if ($201) {
          $$2$i40 = $198;$$3$i39 = 0;
          break L125;
         } else {
          $$140$i36 = $198;$$23839$i37 = $199;
          break;
         }
        }
       } else {
        $$140$i36 = $$035$lcssa$i23201;$$23839$i37 = $$036$lcssa$i22200;
       }
      } while(0);
      while(1) {
       $202 = load1($$140$i36);
       $203 = ($202<<24>>24)==(46);
       if ($203) {
        $$2$i40 = $$140$i36;$$3$i39 = $$23839$i37;
        break L125;
       }
       $204 = ((($$140$i36)) + 1|0);
       $205 = (($$23839$i37) + -1)|0;
       $206 = ($205|0)==(0);
       if ($206) {
        $$2$i40 = $204;$$3$i39 = 0;
        break;
       } else {
        $$140$i36 = $204;$$23839$i37 = $205;
       }
      }
     }
    }
   } while(0);
   $207 = ($$3$i39|0)!=(0);
   $208 = $207 ? $$2$i40 : 0;
   $210 = $208;
  }
  $209 = ($210|0)==(0|0);
  $211 = $210;
  $212 = $175;
  $213 = (($211) - ($212))|0;
  $$0$i$i13 = $209 ? -1 : $213;
  $$1$i$i14 = $$0$i$i13;
 } else {
  $$1$i$i14 = -1;
 }
 $214 = ($$1$i$i|0)==(-1);
 do {
  if ($214) {
   if ($32) {
    $215 = ((($0)) + 4|0);
    $216 = load4($215);
    $226 = $216;
    break;
   } else {
    $217 = $31&255;
    $226 = $217;
    break;
   }
  } else {
   $226 = $$1$i$i;
  }
 } while(0);
 $218 = ($$1$i$i14|0)!=(-1);
 do {
  if ($218) {
   $225 = $$1$i$i14;
  } else {
   if ($32) {
    $219 = ((($0)) + 4|0);
    $220 = load4($219);
    $225 = $220;
    break;
   } else {
    $221 = $31&255;
    $225 = $221;
    break;
   }
  }
 } while(0);
 $222 = $$1$i$i14 & $$1$i$i;
 $223 = ($222|0)==(-1);
 do {
  if ($223) {
   ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
   if (!($32)) {
    ; store8($6,load8($0,4),4); store4($6+8 | 0,load4($0+8 | 0,4),4);
    break;
   }
   $254 = load4($0);
   $255 = ((($0)) + 4|0);
   $256 = load4($255);
   $257 = ($256>>>0)>(4294967279);
   if ($257) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $258 = ($256>>>0)<(11);
   if ($258) {
    $273 = $256&255;
    $274 = ((($6)) + 11|0);
    store1($274,$273);
    $275 = ($256|0)==(0);
    if ($275) {
     $$017$i52 = $6;
    } else {
     $$016$i51 = $6;
     label = 120;
    }
   } else {
    $259 = (($256) + 16)|0;
    $260 = $259 & -16;
    $261 = ($260|0)==(0);
    $$$i23 = $261 ? 1 : $260;
    $262 = (_malloc($$$i23)|0);
    $263 = ($262|0)==(0|0);
    L165: do {
     if ($263) {
      while(1) {
       $264 = load4(10072);
       $265 = (($264) + 0)|0;
       store4(10072,$265);
       $266 = ($264|0)==(0);
       if ($266) {
        $$lcssa$i29 = 0;
        break L165;
       }
       $267 = $264;
       FUNCTION_TABLE_v[$267 & 3]();
       $268 = (_malloc($$$i23)|0);
       $269 = ($268|0)==(0|0);
       if (!($269)) {
        $$lcssa$i29 = $268;
        break;
       }
      }
     } else {
      $$lcssa$i29 = $262;
     }
    } while(0);
    store4($6,$$lcssa$i29);
    $270 = $260 | -2147483648;
    $271 = ((($6)) + 8|0);
    store4($271,$270);
    $272 = ((($6)) + 4|0);
    store4($272,$256);
    $$016$i51 = $$lcssa$i29;
    label = 120;
   }
   if ((label|0) == 120) {
    _memcpy(($$016$i51|0),($254|0),($256|0))|0;
    $$017$i52 = $$016$i51;
   }
   $276 = (($$017$i52) + ($256)|0);
   store1($276,0);
  } else {
   $224 = ($225|0)<($226|0);
   $$sroa$speculated = $224 ? $225 : $226;
   ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
   $227 = ((($0)) + 4|0);
   $228 = load4($227);
   $229 = $31&255;
   $230 = $32 ? $228 : $229;
   $231 = load4($0);
   $232 = $32 ? $231 : $0;
   $233 = ($230>>>0)<($$sroa$speculated>>>0);
   $$sroa$speculated$i43 = $233 ? $230 : $$sroa$speculated;
   $234 = ($$sroa$speculated$i43>>>0)>(4294967279);
   if ($234) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $235 = ($$sroa$speculated$i43>>>0)<(11);
   if ($235) {
    $250 = $$sroa$speculated$i43&255;
    $251 = ((($6)) + 11|0);
    store1($251,$250);
    $252 = ($$sroa$speculated$i43|0)==(0);
    if ($252) {
     $$017$i47 = $6;
    } else {
     $$016$i46 = $6;
     label = 108;
    }
   } else {
    $236 = (($$sroa$speculated$i43) + 16)|0;
    $237 = $236 & -16;
    $238 = ($237|0)==(0);
    $$$i14 = $238 ? 1 : $237;
    $239 = (_malloc($$$i14)|0);
    $240 = ($239|0)==(0|0);
    L180: do {
     if ($240) {
      while(1) {
       $241 = load4(10072);
       $242 = (($241) + 0)|0;
       store4(10072,$242);
       $243 = ($241|0)==(0);
       if ($243) {
        $$lcssa$i20 = 0;
        break L180;
       }
       $244 = $241;
       FUNCTION_TABLE_v[$244 & 3]();
       $245 = (_malloc($$$i14)|0);
       $246 = ($245|0)==(0|0);
       if (!($246)) {
        $$lcssa$i20 = $245;
        break;
       }
      }
     } else {
      $$lcssa$i20 = $239;
     }
    } while(0);
    store4($6,$$lcssa$i20);
    $247 = $237 | -2147483648;
    $248 = ((($6)) + 8|0);
    store4($248,$247);
    $249 = ((($6)) + 4|0);
    store4($249,$$sroa$speculated$i43);
    $$016$i46 = $$lcssa$i20;
    label = 108;
   }
   if ((label|0) == 108) {
    _memcpy(($$016$i46|0),($232|0),($$sroa$speculated$i43|0))|0;
    $$017$i47 = $$016$i46;
   }
   $253 = (($$017$i47) + ($$sroa$speculated$i43)|0);
   store1($253,0);
  }
 } while(0);
 $277 = ((($0)) + 96|0);
 $278 = ((($0)) + 84|0);
 $279 = ((($278)) + 11|0);
 $280 = load1($279);
 $281 = ($280<<24>>24)<(0);
 if ($281) {
  $282 = ((($0)) + 88|0);
  $283 = load4($282);
  $286 = $283;
 } else {
  $284 = $280&255;
  $286 = $284;
 }
 $285 = ($286|0)==(0);
 if ($285) {
  ; store8($9,i64_const(0,0),4); store4($9+8|0,0,4);
  $370 = ((($6)) + 11|0);
  $371 = load1($370);
  $372 = ($371<<24>>24)<(0);
  if ($372) {
   $373 = load4($6);
   $374 = ((($6)) + 4|0);
   $375 = load4($374);
   $376 = ($375>>>0)>(4294967279);
   if ($376) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $377 = ($375>>>0)<(11);
   if ($377) {
    $392 = $375&255;
    $393 = ((($9)) + 11|0);
    store1($393,$392);
    $394 = ($375|0)==(0);
    if ($394) {
     $$017$i67 = $9;
    } else {
     $$016$i66 = $9;
     label = 164;
    }
   } else {
    $378 = (($375) + 16)|0;
    $379 = $378 & -16;
    $380 = ($379|0)==(0);
    $$$i54 = $380 ? 1 : $379;
    $381 = (_malloc($$$i54)|0);
    $382 = ($381|0)==(0|0);
    L203: do {
     if ($382) {
      while(1) {
       $383 = load4(10072);
       $384 = (($383) + 0)|0;
       store4(10072,$384);
       $385 = ($383|0)==(0);
       if ($385) {
        $$lcssa$i60 = 0;
        break L203;
       }
       $386 = $383;
       FUNCTION_TABLE_v[$386 & 3]();
       $387 = (_malloc($$$i54)|0);
       $388 = ($387|0)==(0|0);
       if (!($388)) {
        $$lcssa$i60 = $387;
        break;
       }
      }
     } else {
      $$lcssa$i60 = $381;
     }
    } while(0);
    store4($9,$$lcssa$i60);
    $389 = $379 | -2147483648;
    $390 = ((($9)) + 8|0);
    store4($390,$389);
    $391 = ((($9)) + 4|0);
    store4($391,$375);
    $$016$i66 = $$lcssa$i60;
    label = 164;
   }
   if ((label|0) == 164) {
    _memcpy(($$016$i66|0),($373|0),($375|0))|0;
    $$017$i67 = $$016$i66;
   }
   $395 = (($$017$i67) + ($375)|0);
   store1($395,0);
  } else {
   ; store8($9,load8($6,4),4); store4($9+8 | 0,load4($6+8 | 0,4),4);
  }
  $396 = load4(10076);
  $397 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($396,2775,$9)|0);
  $$060 = 1;$$063 = 0;$$sink = $397;
 } else {
  ; store8($7,i64_const(0,0),4); store4($7+8|0,0,4);
  if ($281) {
   $287 = load4($278);
   $288 = ((($0)) + 88|0);
   $289 = load4($288);
   $290 = ($289>>>0)>(4294967279);
   if ($290) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $291 = ($289>>>0)<(11);
   if ($291) {
    $306 = $289&255;
    $307 = ((($7)) + 11|0);
    store1($307,$306);
    $308 = ($289|0)==(0);
    if ($308) {
     $$017$i57 = $7;
    } else {
     $$016$i56 = $7;
     label = 136;
    }
   } else {
    $292 = (($289) + 16)|0;
    $293 = $292 & -16;
    $294 = ($293|0)==(0);
    $$$i32 = $294 ? 1 : $293;
    $295 = (_malloc($$$i32)|0);
    $296 = ($295|0)==(0|0);
    L222: do {
     if ($296) {
      while(1) {
       $297 = load4(10072);
       $298 = (($297) + 0)|0;
       store4(10072,$298);
       $299 = ($297|0)==(0);
       if ($299) {
        $$lcssa$i38 = 0;
        break L222;
       }
       $300 = $297;
       FUNCTION_TABLE_v[$300 & 3]();
       $301 = (_malloc($$$i32)|0);
       $302 = ($301|0)==(0|0);
       if (!($302)) {
        $$lcssa$i38 = $301;
        break;
       }
      }
     } else {
      $$lcssa$i38 = $295;
     }
    } while(0);
    store4($7,$$lcssa$i38);
    $303 = $293 | -2147483648;
    $304 = ((($7)) + 8|0);
    store4($304,$303);
    $305 = ((($7)) + 4|0);
    store4($305,$289);
    $$016$i56 = $$lcssa$i38;
    label = 136;
   }
   if ((label|0) == 136) {
    _memcpy(($$016$i56|0),($287|0),($289|0))|0;
    $$017$i57 = $$016$i56;
   }
   $309 = (($$017$i57) + ($289)|0);
   store1($309,0);
  } else {
   ; store8($7,load8($278,4),4); store4($7+8 | 0,load4($278+8 | 0,4),4);
  }
  ; store8($8,i64_const(0,0),4); store4($8+8|0,0,4);
  $310 = ((($6)) + 11|0);
  $311 = load1($310);
  $312 = ($311<<24>>24)<(0);
  if ($312) {
   $313 = load4($6);
   $314 = ((($6)) + 4|0);
   $315 = load4($314);
   $316 = ($315>>>0)>(4294967279);
   if ($316) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $317 = ($315>>>0)<(11);
   if ($317) {
    $332 = $315&255;
    $333 = ((($8)) + 11|0);
    store1($333,$332);
    $334 = ($315|0)==(0);
    if ($334) {
     $$017$i62 = $8;
    } else {
     $$016$i61 = $8;
     label = 148;
    }
   } else {
    $318 = (($315) + 16)|0;
    $319 = $318 & -16;
    $320 = ($319|0)==(0);
    $$$i41 = $320 ? 1 : $319;
    $321 = (_malloc($$$i41)|0);
    $322 = ($321|0)==(0|0);
    L240: do {
     if ($322) {
      while(1) {
       $323 = load4(10072);
       $324 = (($323) + 0)|0;
       store4(10072,$324);
       $325 = ($323|0)==(0);
       if ($325) {
        $$lcssa$i47 = 0;
        break L240;
       }
       $326 = $323;
       FUNCTION_TABLE_v[$326 & 3]();
       $327 = (_malloc($$$i41)|0);
       $328 = ($327|0)==(0|0);
       if (!($328)) {
        $$lcssa$i47 = $327;
        break;
       }
      }
     } else {
      $$lcssa$i47 = $321;
     }
    } while(0);
    store4($8,$$lcssa$i47);
    $329 = $319 | -2147483648;
    $330 = ((($8)) + 8|0);
    store4($330,$329);
    $331 = ((($8)) + 4|0);
    store4($331,$315);
    $$016$i61 = $$lcssa$i47;
    label = 148;
   }
   if ((label|0) == 148) {
    _memcpy(($$016$i61|0),($313|0),($315|0))|0;
    $$017$i62 = $$016$i61;
   }
   $335 = (($$017$i62) + ($315)|0);
   store1($335,0);
  } else {
   ; store8($8,load8($6,4),4); store4($8+8 | 0,load4($6+8 | 0,4),4);
  }
  $336 = load4(10076);
  $337 = load1(9496);
  $338 = ($337<<24>>24)==(0);
  if ($338) {
   store1(9496,1);
   $339 = (__emval_get_method_caller(3,(2036|0))|0);
   store4(9548,$339);
   $365 = $339;
  } else {
   $$pre$i50 = load4(9548);
   $365 = $$pre$i50;
  }
  $340 = ((($7)) + 11|0);
  $341 = load1($340);
  $342 = ($341<<24>>24)<(0);
  $343 = ((($7)) + 4|0);
  $344 = load4($343);
  $345 = $341&255;
  $346 = $342 ? $344 : $345;
  $347 = (($346) + 4)|0;
  $348 = (_malloc($347)|0);
  store4($348,$346);
  $349 = ((($348)) + 4|0);
  $350 = load4($7);
  $351 = $342 ? $350 : $7;
  _memcpy(($349|0),($351|0),($346|0))|0;
  store4($2,$348);
  $352 = ((($2)) + 8|0);
  $353 = ((($8)) + 11|0);
  $354 = load1($353);
  $355 = ($354<<24>>24)<(0);
  $356 = ((($8)) + 4|0);
  $357 = load4($356);
  $358 = $354&255;
  $359 = $355 ? $357 : $358;
  $360 = (($359) + 4)|0;
  $361 = (_malloc($360)|0);
  store4($361,$359);
  $362 = ((($361)) + 4|0);
  $363 = load4($8);
  $364 = $355 ? $363 : $8;
  _memcpy(($362|0),($364|0),($359|0))|0;
  store4($352,$361);
  $366 = (+__emval_call_method(($365|0),($336|0),(2789|0),($3|0),($2|0)));
  $367 = load4($3);
  __emval_run_destructors(($367|0));
  $368 = (~~(($366))>>>0);
  $369 = $368;
  $$060 = 0;$$063 = 1;$$sink = $369;
 }
 $398 = load4($277);
 __emval_decref(($398|0));
 $399 = $$sink;
 store4($277,$399);
 __emval_decref((0|0));
 if ($$060) {
  $400 = ((($9)) + 11|0);
  $401 = load1($400);
  $402 = ($401<<24>>24)<(0);
  if ($402) {
   $403 = load4($9);
   _free($403);
  }
 }
 do {
  if ($$063) {
   $404 = ((($8)) + 11|0);
   $405 = load1($404);
   $406 = ($405<<24>>24)<(0);
   if ($406) {
    $407 = load4($8);
    _free($407);
   }
   $408 = ((($7)) + 11|0);
   $409 = load1($408);
   $410 = ($409<<24>>24)<(0);
   if (!($410)) {
    break;
   }
   $411 = load4($7);
   _free($411);
  }
 } while(0);
 $412 = ($226|0)<($225|0);
 if ($412) {
  $413 = (($226) + 1)|0;
  ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
  $414 = load1($30);
  $415 = ($414<<24>>24)<(0);
  $416 = ((($0)) + 4|0);
  $417 = load4($416);
  $418 = $414&255;
  $419 = $415 ? $417 : $418;
  $420 = ($419>>>0)<($413>>>0);
  if ($420) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
   // unreachable;
  }
  $421 = load4($0);
  $422 = $415 ? $421 : $0;
  $423 = (($422) + ($413)|0);
  $424 = (($419) - ($413))|0;
  $425 = ($424>>>0)<($225>>>0);
  $$sroa$speculated$i73 = $425 ? $424 : $225;
  $426 = ($$sroa$speculated$i73>>>0)>(4294967279);
  if ($426) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $427 = ($$sroa$speculated$i73>>>0)<(11);
  if ($427) {
   $442 = $$sroa$speculated$i73&255;
   $443 = ((($3)) + 11|0);
   store1($443,$442);
   $444 = ($$sroa$speculated$i73|0)==(0);
   if ($444) {
    $$017$i77 = $3;$$pre$phi189Z2D = $443;
   } else {
    $$016$i76 = $3;$$pre188$pre$phiZZ2D = $443;
    label = 186;
   }
  } else {
   $428 = (($$sroa$speculated$i73) + 16)|0;
   $429 = $428 & -16;
   $430 = ($429|0)==(0);
   $$$i63 = $430 ? 1 : $429;
   $431 = (_malloc($$$i63)|0);
   $432 = ($431|0)==(0|0);
   L277: do {
    if ($432) {
     while(1) {
      $433 = load4(10072);
      $434 = (($433) + 0)|0;
      store4(10072,$434);
      $435 = ($433|0)==(0);
      if ($435) {
       $$lcssa$i69 = 0;
       break L277;
      }
      $436 = $433;
      FUNCTION_TABLE_v[$436 & 3]();
      $437 = (_malloc($$$i63)|0);
      $438 = ($437|0)==(0|0);
      if (!($438)) {
       $$lcssa$i69 = $437;
       break;
      }
     }
    } else {
     $$lcssa$i69 = $431;
    }
   } while(0);
   store4($3,$$lcssa$i69);
   $439 = $429 | -2147483648;
   $440 = ((($3)) + 8|0);
   store4($440,$439);
   $441 = ((($3)) + 4|0);
   store4($441,$$sroa$speculated$i73);
   $$pre197 = ((($3)) + 11|0);
   $$016$i76 = $$lcssa$i69;$$pre188$pre$phiZZ2D = $$pre197;
   label = 186;
  }
  if ((label|0) == 186) {
   _memcpy(($$016$i76|0),($423|0),($$sroa$speculated$i73|0))|0;
   $$017$i77 = $$016$i76;$$pre$phi189Z2D = $$pre188$pre$phiZZ2D;
  }
  $445 = (($$017$i77) + ($$sroa$speculated$i73)|0);
  store1($445,0);
  $446 = load1($$pre$phi189Z2D);
  $447 = ($446<<24>>24)<(0);
  $448 = ((($3)) + 4|0);
  $449 = load4($448);
  $450 = $446&255;
  $451 = $447 ? $449 : $450;
  $452 = (($451) + 4)|0;
  $453 = (_malloc($452)|0);
  store4($453,$451);
  $454 = ((($453)) + 4|0);
  $455 = load4($3);
  $456 = $447 ? $455 : $3;
  _memcpy(($454|0),($456|0),($451|0))|0;
  store4($2,$453);
  $457 = (__emval_take_value((1080|0),($2|0))|0);
  $458 = load4($277);
  $459 = (__emval_new_cstring((9376|0))|0);
  __emval_set_property(($458|0),($459|0),($457|0));
  __emval_decref(($459|0));
  __emval_decref(($457|0));
  $460 = load1($$pre$phi189Z2D);
  $461 = ($460<<24>>24)<(0);
  if ($461) {
   _free($455);
  }
 }
 if ($218) {
  $462 = (($225) + 1)|0;
  ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
  $463 = load1($30);
  $464 = ($463<<24>>24)<(0);
  $465 = ((($0)) + 4|0);
  $466 = load4($465);
  $467 = $463&255;
  $468 = $464 ? $466 : $467;
  $469 = ($468>>>0)<($462>>>0);
  if ($469) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
   // unreachable;
  }
  $470 = load4($0);
  $471 = $464 ? $470 : $0;
  $472 = (($471) + ($462)|0);
  $473 = (($468) - ($462))|0;
  $474 = ($473>>>0)>(4294967279);
  if ($474) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $475 = ($473>>>0)<(11);
  if ($475) {
   $490 = $473&255;
   $491 = ((($3)) + 11|0);
   store1($491,$490);
   $492 = ($473|0)==(0);
   if ($492) {
    $$017$i91 = $3;$$pre$phi193Z2D = $491;
   } else {
    $$016$i90 = $3;$$pre192$pre$phiZZ2D = $491;
    label = 201;
   }
  } else {
   $476 = (($473) + 16)|0;
   $477 = $476 & -16;
   $478 = ($477|0)==(0);
   $$$i72 = $478 ? 1 : $477;
   $479 = (_malloc($$$i72)|0);
   $480 = ($479|0)==(0|0);
   L300: do {
    if ($480) {
     while(1) {
      $481 = load4(10072);
      $482 = (($481) + 0)|0;
      store4(10072,$482);
      $483 = ($481|0)==(0);
      if ($483) {
       $$lcssa$i78 = 0;
       break L300;
      }
      $484 = $481;
      FUNCTION_TABLE_v[$484 & 3]();
      $485 = (_malloc($$$i72)|0);
      $486 = ($485|0)==(0|0);
      if (!($486)) {
       $$lcssa$i78 = $485;
       break;
      }
     }
    } else {
     $$lcssa$i78 = $479;
    }
   } while(0);
   store4($3,$$lcssa$i78);
   $487 = $477 | -2147483648;
   $488 = ((($3)) + 8|0);
   store4($488,$487);
   $489 = ((($3)) + 4|0);
   store4($489,$473);
   $$pre195 = ((($3)) + 11|0);
   $$016$i90 = $$lcssa$i78;$$pre192$pre$phiZZ2D = $$pre195;
   label = 201;
  }
  if ((label|0) == 201) {
   _memcpy(($$016$i90|0),($472|0),($473|0))|0;
   $$017$i91 = $$016$i90;$$pre$phi193Z2D = $$pre192$pre$phiZZ2D;
  }
  $493 = (($$017$i91) + ($473)|0);
  store1($493,0);
  $494 = load1($$pre$phi193Z2D);
  $495 = ($494<<24>>24)<(0);
  $496 = load4($3);
  $497 = ((($3)) + 4|0);
  $498 = load4($497);
  $499 = $494&255;
  $500 = $495 ? $496 : $3;
  $501 = $495 ? $498 : $499;
  $502 = (($500) + ($501)|0);
  $503 = ($501|0)==(0);
  if ($503) {
   $510 = $494;$513 = $498;
  } else {
   $505 = $500;
   while(1) {
    $504 = load1($505);
    $506 = ($504<<24>>24)==(46);
    if ($506) {
     store1($505,32);
    }
    $507 = ((($505)) + 1|0);
    $508 = ($507|0)==($502|0);
    if ($508) {
     break;
    } else {
     $505 = $507;
    }
   }
   $$pre = load1($$pre$phi193Z2D);
   $$pre184 = load4($497);
   $510 = $$pre;$513 = $$pre184;
  }
  $509 = ($510<<24>>24)<(0);
  $511 = $510&255;
  $512 = $509 ? $513 : $511;
  $514 = (($512) + 4)|0;
  $515 = (_malloc($514)|0);
  store4($515,$512);
  $516 = ((($515)) + 4|0);
  $517 = load4($3);
  $518 = $509 ? $517 : $3;
  _memcpy(($516|0),($518|0),($512|0))|0;
  store4($2,$515);
  $519 = (__emval_take_value((1080|0),($2|0))|0);
  $520 = load4($277);
  $521 = (__emval_new_cstring((3149|0))|0);
  __emval_set_property(($520|0),($521|0),($519|0));
  __emval_decref(($521|0));
  __emval_decref(($519|0));
  $522 = load1($$pre$phi193Z2D);
  $523 = ($522<<24>>24)<(0);
  if ($523) {
   $524 = load4($3);
   _free($524);
  }
 }
 $525 = load4((9536));
 $526 = load4(9532);
 $527 = (($525) - ($526))|0;
 $528 = ($527|0)==(0);
 L320: do {
  if (!($528)) {
   $529 = $526;
   $530 = (($527|0) / 40)&-1;
   $$in = $530;$542 = $529;
   while(1) {
    $540 = (($$in) + -1)|0;
    $541 = (((($542) + (($540*40)|0)|0)) + 8|0);
    $543 = load4($541);
    $544 = ($543|0)==(0|0);
    if (!($544)) {
     $545 = load4(9528);
     FUNCTION_TABLE_vii[$543 & 7]($545,$0);
    }
    $546 = ($540|0)==(0);
    if ($546) {
     break L320;
    }
    $$pre240 = load4(9532);
    $$in = $540;$542 = $$pre240;
   }
  }
 } while(0);
 $531 = ((($0)) + 100|0);
 $532 = load4($531);
 $533 = ((($0)) + 104|0);
 $534 = load4($533);
 $535 = ($532|0)==($534|0);
 L329: do {
  if ($535) {
   $595 = ((($0)) + 24|0);
   $596 = ((($595)) + 11|0);
   $597 = load1($596);
   $598 = ($597<<24>>24)<(0);
   if ($598) {
    $599 = ((($0)) + 28|0);
    $600 = load4($599);
    $603 = $600;
   } else {
    $601 = $597&255;
    $603 = $601;
   }
   $602 = ($603|0)==(0);
   if ($602) {
    break;
   }
   $604 = load4($277);
   __emval_incref(($604|0));
   ; store8($11,i64_const(0,0),4); store4($11+8|0,0,4);
   $605 = load1($596);
   $606 = ($605<<24>>24)<(0);
   if ($606) {
    $607 = load4($595);
    $608 = ((($0)) + 28|0);
    $609 = load4($608);
    $610 = ($609>>>0)>(4294967279);
    if ($610) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $611 = ($609>>>0)<(11);
    if ($611) {
     $626 = $609&255;
     $627 = ((($11)) + 11|0);
     store1($627,$626);
     $628 = ($609|0)==(0);
     if ($628) {
      $$017$i99 = $11;
     } else {
      $$016$i98 = $11;
      label = 248;
     }
    } else {
     $612 = (($609) + 16)|0;
     $613 = $612 & -16;
     $614 = ($613|0)==(0);
     $$$i90 = $614 ? 1 : $613;
     $615 = (_malloc($$$i90)|0);
     $616 = ($615|0)==(0|0);
     L344: do {
      if ($616) {
       while(1) {
        $617 = load4(10072);
        $618 = (($617) + 0)|0;
        store4(10072,$618);
        $619 = ($617|0)==(0);
        if ($619) {
         $$lcssa$i96 = 0;
         break L344;
        }
        $620 = $617;
        FUNCTION_TABLE_v[$620 & 3]();
        $621 = (_malloc($$$i90)|0);
        $622 = ($621|0)==(0|0);
        if (!($622)) {
         $$lcssa$i96 = $621;
         break;
        }
       }
      } else {
       $$lcssa$i96 = $615;
      }
     } while(0);
     store4($11,$$lcssa$i96);
     $623 = $613 | -2147483648;
     $624 = ((($11)) + 8|0);
     store4($624,$623);
     $625 = ((($11)) + 4|0);
     store4($625,$609);
     $$016$i98 = $$lcssa$i96;
     label = 248;
    }
    if ((label|0) == 248) {
     _memcpy(($$016$i98|0),($607|0),($609|0))|0;
     $$017$i99 = $$016$i98;
    }
    $629 = (($$017$i99) + ($609)|0);
    store1($629,0);
   } else {
    ; store8($11,load8($595,4),4); store4($11+8 | 0,load4($595+8 | 0,4),4);
   }
   $630 = load4(10076);
   $631 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($630,2805,$11)|0);
   $632 = $631;
   $633 = load1(9512);
   $634 = ($633<<24>>24)==(0);
   if ($634) {
    store1(9512,1);
    $635 = (__emval_get_method_caller(2,(2060|0))|0);
    store4(9556,$635);
    $636 = $635;
   } else {
    $$pre186 = load4(9556);
    $636 = $$pre186;
   }
   __emval_incref(($631|0));
   store4($2,$632);
   __emval_call_void_method(($636|0),($604|0),(2859|0),($2|0));
   __emval_decref(($631|0));
   $637 = ((($11)) + 11|0);
   $638 = load1($637);
   $639 = ($638<<24>>24)<(0);
   if ($639) {
    $640 = load4($11);
    _free($640);
   }
   __emval_decref(($604|0));
  } else {
   $536 = ((($10)) + 4|0);
   $537 = ((($10)) + 8|0);
   $538 = ((($1)) + 4|0);
   $539 = ((($10)) + 8|0);
   $$0226 = 0;
   L362: while(1) {
    $547 = load4($277);
    __emval_incref(($547|0));
    $548 = load4($531);
    $549 = (($548) + ($$0226<<2)|0);
    $550 = load4($549);
    store4($10,0);
    store4($536,0);
    store4($537,0);
    $551 = load4($538);
    $552 = load4($1);
    $553 = (($551) - ($552))|0;
    $554 = $553 >> 2;
    $555 = ($554|0)==(0);
    do {
     if (!($555)) {
      $556 = ($554>>>0)>(1073741823);
      if ($556) {
       break L362;
      }
      $557 = ($553|0)==(0);
      $$$i81 = $557 ? 1 : $553;
      $558 = (_malloc($$$i81)|0);
      $559 = ($558|0)==(0|0);
      L367: do {
       if ($559) {
        while(1) {
         $560 = load4(10072);
         $561 = (($560) + 0)|0;
         store4(10072,$561);
         $562 = ($560|0)==(0);
         if ($562) {
          $$lcssa$i87 = 0;
          break L367;
         }
         $563 = $560;
         FUNCTION_TABLE_v[$563 & 3]();
         $564 = (_malloc($$$i81)|0);
         $565 = ($564|0)==(0|0);
         if (!($565)) {
          $$lcssa$i87 = $564;
          break;
         }
        }
       } else {
        $$lcssa$i87 = $558;
       }
      } while(0);
      store4($536,$$lcssa$i87);
      store4($10,$$lcssa$i87);
      $566 = (($$lcssa$i87) + ($554<<2)|0);
      store4($539,$566);
      $567 = load4($1);
      $568 = load4($538);
      $569 = $567;
      $570 = (($568) - ($569))|0;
      $571 = ($570|0)>(0);
      if (!($571)) {
       break;
      }
      $572 = $570 >> 2;
      $573 = (($$lcssa$i87) + ($572<<2)|0);
      _memcpy(($$lcssa$i87|0),($567|0),($570|0))|0;
      store4($536,$573);
     }
    } while(0);
    $574 = (__Z9createElmP5VNodeNSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($550,$10)|0);
    $575 = $574;
    $576 = load1(9512);
    $577 = ($576<<24>>24)==(0);
    if ($577) {
     store1(9512,1);
     $578 = (__emval_get_method_caller(2,(2060|0))|0);
     store4(9556,$578);
     $579 = $578;
    } else {
     $$pre185 = load4(9556);
     $579 = $$pre185;
    }
    __emval_incref(($574|0));
    store4($2,$575);
    __emval_call_void_method(($579|0),($547|0),(2859|0),($2|0));
    __emval_decref(($574|0));
    $580 = load4($10);
    $581 = ($580|0)==(0|0);
    $582 = $580;
    if (!($581)) {
     $583 = load4($536);
     $584 = ($583|0)==($580|0);
     if (!($584)) {
      $scevgep$i$i$i = ((($583)) + -4|0);
      $585 = $scevgep$i$i$i;
      $586 = (($585) - ($582))|0;
      $587 = $586 >>> 2;
      $588 = $587 ^ -1;
      $scevgep4$i$i$i = (($583) + ($588<<2)|0);
      store4($536,$scevgep4$i$i$i);
     }
     _free($580);
    }
    __emval_decref(($547|0));
    $589 = (($$0226) + 1)|0;
    $590 = load4($533);
    $591 = load4($531);
    $592 = (($590) - ($591))|0;
    $593 = $592 >> 2;
    $594 = ($589|0)==($593|0);
    if ($594) {
     break L329;
    } else {
     $$0226 = $589;
    }
   }
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
 } while(0);
 $641 = ((($6)) + 11|0);
 $642 = load1($641);
 $643 = ($642<<24>>24)<(0);
 if ($643) {
  $644 = load4($6);
  _free($644);
 }
 $645 = ((($0)) + 96|0);
 $646 = load4($645);
 __emval_incref(($646|0));
 STACKTOP = sp;return ($646|0);
}
function __Z9addVnodesN10emscripten3valES0_NSt3__26vectorIP5VNodeNS1_9allocatorIS4_EEEEjjS7_($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$$i = 0, $$0837 = 0, $$lcssa$i = 0, $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $scevgep$i$i$i = 0, $scevgep4$i$i$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $6 = sp;
 $7 = sp + 16|0;
 $8 = ($3>>>0)>($4>>>0);
 if ($8) {
  STACKTOP = sp;return;
 }
 $9 = ((($7)) + 4|0);
 $10 = ((($7)) + 8|0);
 $11 = ((($5)) + 4|0);
 $12 = ((($6)) + 8|0);
 $13 = ((($7)) + 8|0);
 $$0837 = $3;
 while(1) {
  $14 = load4($0);
  __emval_incref(($14|0));
  $15 = load4($2);
  $16 = (($15) + ($$0837<<2)|0);
  $17 = load4($16);
  store4($7,0);
  store4($9,0);
  store4($10,0);
  $18 = load4($11);
  $19 = load4($5);
  $20 = (($18) - ($19))|0;
  $21 = $20 >> 2;
  $22 = ($21|0)==(0);
  if (!($22)) {
   $23 = ($21>>>0)>(1073741823);
   if ($23) {
    label = 5;
    break;
   }
   $24 = ($20|0)==(0);
   $$$i = $24 ? 1 : $20;
   $25 = (_malloc($$$i)|0);
   $26 = ($25|0)==(0|0);
   L9: do {
    if ($26) {
     while(1) {
      $27 = load4(10072);
      $28 = (($27) + 0)|0;
      store4(10072,$28);
      $29 = ($27|0)==(0);
      if ($29) {
       $$lcssa$i = 0;
       break L9;
      }
      $30 = $27;
      FUNCTION_TABLE_v[$30 & 3]();
      $31 = (_malloc($$$i)|0);
      $32 = ($31|0)==(0|0);
      if (!($32)) {
       $$lcssa$i = $31;
       break;
      }
     }
    } else {
     $$lcssa$i = $25;
    }
   } while(0);
   store4($9,$$lcssa$i);
   store4($7,$$lcssa$i);
   $33 = (($$lcssa$i) + ($21<<2)|0);
   store4($13,$33);
   $34 = load4($5);
   $35 = load4($11);
   $36 = $34;
   $37 = (($35) - ($36))|0;
   $38 = ($37|0)>(0);
   if ($38) {
    $39 = $37 >> 2;
    $40 = (($$lcssa$i) + ($39<<2)|0);
    _memcpy(($$lcssa$i|0),($34|0),($37|0))|0;
    store4($9,$40);
   }
  }
  $41 = (__Z9createElmP5VNodeNSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($17,$7)|0);
  $42 = $41;
  $43 = load4($1);
  $44 = $43;
  __emval_incref(($43|0));
  $45 = load1(9504);
  $46 = ($45<<24>>24)==(0);
  if ($46) {
   store1(9504,1);
   $47 = (__emval_get_method_caller(3,(2048|0))|0);
   store4(9552,$47);
   $48 = $47;
  } else {
   $$pre$i = load4(9552);
   $48 = $$pre$i;
  }
  __emval_incref(($41|0));
  store4($6,$42);
  __emval_incref(($43|0));
  store4($12,$44);
  __emval_call_void_method(($48|0),($14|0),(2834|0),($6|0));
  __emval_decref(($43|0));
  __emval_decref(($41|0));
  $49 = load4($7);
  $50 = ($49|0)==(0|0);
  $51 = $49;
  if (!($50)) {
   $52 = load4($9);
   $53 = ($52|0)==($49|0);
   if (!($53)) {
    $scevgep$i$i$i = ((($52)) + -4|0);
    $54 = $scevgep$i$i$i;
    $55 = (($54) - ($51))|0;
    $56 = $55 >>> 2;
    $57 = $56 ^ -1;
    $scevgep4$i$i$i = (($52) + ($57<<2)|0);
    store4($9,$scevgep4$i$i$i);
   }
   _free($49);
  }
  __emval_decref(($14|0));
  $58 = (($$0837) + 1)|0;
  $59 = ($58>>>0)>($4>>>0);
  if ($59) {
   label = 19;
   break;
  } else {
   $$0837 = $58;
  }
 }
 if ((label|0) == 5) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 19) {
  STACKTOP = sp;return;
 }
}
function __Z17invokeDestroyHookP5VNode($0) {
 $0 = $0|0;
 var $$013 = 0, $$in = 0, $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = load4((9536));
 $2 = load4(9532);
 $3 = (($1) - ($2))|0;
 $4 = ($3|0)==(0);
 L1: do {
  if (!($4)) {
   $5 = $2;
   $6 = (($3|0) / 40)&-1;
   $$in = $6;$14 = $5;
   while(1) {
    $12 = (($$in) + -1)|0;
    $13 = (((($14) + (($12*40)|0)|0)) + 28|0);
    $15 = load4($13);
    $16 = ($15|0)==(0|0);
    if (!($16)) {
     FUNCTION_TABLE_vi[$15 & 31]($0);
    }
    $17 = ($12|0)==(0);
    if ($17) {
     break L1;
    }
    $$pre = load4(9532);
    $$in = $12;$14 = $$pre;
   }
  }
 } while(0);
 $7 = ((($0)) + 100|0);
 $8 = load4($7);
 $9 = ((($0)) + 104|0);
 $10 = load4($9);
 $11 = ($8|0)==($10|0);
 if ($11) {
  return;
 }
 $$013 = 0;$19 = $8;
 while(1) {
  $18 = (($19) + ($$013<<2)|0);
  $20 = load4($18);
  __Z17invokeDestroyHookP5VNode($20);
  $21 = (($$013) + 1)|0;
  $22 = load4($9);
  $23 = load4($7);
  $24 = (($22) - ($23))|0;
  $25 = $24 >> 2;
  $26 = ($21>>>0)<($25>>>0);
  $27 = $23;
  if ($26) {
   $$013 = $21;$19 = $27;
  } else {
   break;
  }
 }
 return;
}
function __Z12removeVnodesN10emscripten3valENSt3__26vectorIP5VNodeNS1_9allocatorIS4_EEEEjj($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$01663 = 0, $$in = 0, $$pre = 0, $$pre15 = 0, $$pre19 = 0, $$pre74 = 0, $$sroa_idx5$i$i = 0, $$sroa_idx8$i$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0;
 var $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0;
 var $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $4 = sp + 72|0;
 $5 = sp + 48|0;
 $6 = sp + 24|0;
 $7 = sp + 92|0;
 $8 = sp + 88|0;
 $9 = sp;
 $10 = ((($6)) + 16|0);
 store4($10,0);
 $11 = ($2>>>0)>($3>>>0);
 do {
  if ($11) {
   $116 = 0;
  } else {
   $12 = $8;
   $13 = $7;
   $14 = ((($5)) + 16|0);
   $$sroa_idx5$i$i = ((($5)) + 4|0);
   $$sroa_idx8$i$i = ((($5)) + 8|0);
   $15 = ((($9)) + 16|0);
   $$01663 = $2;
   while(1) {
    $16 = load4($1);
    $17 = (($16) + ($$01663<<2)|0);
    $18 = load4($17);
    store4($7,$18);
    $19 = ((($18)) + 11|0);
    $20 = load1($19);
    $21 = ($20<<24>>24)<(0);
    if ($21) {
     $22 = ((($18)) + 4|0);
     $23 = load4($22);
     $26 = $23;
    } else {
     $24 = $20&255;
     $26 = $24;
    }
    $25 = ($26|0)==(0);
    if ($25) {
     $102 = load4($0);
     __emval_incref(($102|0));
     $103 = load4($1);
     $104 = (($103) + ($$01663<<2)|0);
     $105 = load4($104);
     $106 = ((($105)) + 96|0);
     $107 = load4($106);
     $108 = $107;
     __emval_incref(($107|0));
     $109 = load1(9512);
     $110 = ($109<<24>>24)==(0);
     if ($110) {
      store1(9512,1);
      $111 = (__emval_get_method_caller(2,(2060|0))|0);
      store4(9556,$111);
      $112 = $111;
     } else {
      $$pre19 = load4(9556);
      $112 = $$pre19;
     }
     __emval_incref(($107|0));
     store4($4,$108);
     __emval_call_void_method(($112|0),($102|0),(2847|0),($4|0));
     __emval_decref(($107|0));
     __emval_decref(($102|0));
    } else {
     __Z17invokeDestroyHookP5VNode($18);
     store4($8,1);
     store4($5,(2244));
     store4($$sroa_idx5$i$i,$12);
     store4($$sroa_idx8$i$i,$13);
     store4($14,$5);
     $27 = load4($10);
     $28 = ($27|0)==($6|0);
     if ($28) {
      __ZNKSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE7__cloneEPNS0_6__baseISC_EE($5,$4);
      $29 = load4($14);
      $30 = load4($29);
      $31 = ((($30)) + 16|0);
      $32 = load4($31);
      FUNCTION_TABLE_vi[$32 & 31]($29);
      store4($14,0);
      $33 = load4($10);
      $34 = load4($33);
      $35 = ((($34)) + 12|0);
      $36 = load4($35);
      FUNCTION_TABLE_vii[$36 & 7]($33,$5);
      $37 = load4($10);
      $38 = load4($37);
      $39 = ((($38)) + 16|0);
      $40 = load4($39);
      FUNCTION_TABLE_vi[$40 & 31]($37);
      store4($10,0);
      store4($14,$5);
      $41 = load4($4);
      $42 = ((($41)) + 12|0);
      $43 = load4($42);
      FUNCTION_TABLE_vii[$43 & 7]($4,$6);
      $44 = load4($4);
      $45 = ((($44)) + 16|0);
      $46 = load4($45);
      FUNCTION_TABLE_vi[$46 & 31]($4);
      store4($10,$6);
      $$pre15 = load4($14);
      $54 = $$pre15;
     } else {
      __ZNKSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE7__cloneEPNS0_6__baseISC_EE($5,$6);
      $47 = load4($14);
      $48 = load4($47);
      $49 = ((($48)) + 16|0);
      $50 = load4($49);
      FUNCTION_TABLE_vi[$50 & 31]($47);
      $51 = load4($10);
      store4($14,$51);
      store4($10,$6);
      $52 = $51;
      $54 = $52;
     }
     $53 = ($54|0)==($5|0);
     if ($53) {
      $55 = load4($54);
      $56 = ((($55)) + 16|0);
      $57 = load4($56);
      FUNCTION_TABLE_vi[$57 & 31]($54);
     } else {
      $58 = ($54|0)==(0|0);
      if (!($58)) {
       $59 = load4($54);
       $60 = ((($59)) + 20|0);
       $61 = load4($60);
       FUNCTION_TABLE_vi[$61 & 31]($54);
      }
     }
     $62 = load4((9536));
     $63 = load4(9532);
     $64 = (($62) - ($63))|0;
     $65 = ($64|0)==(0);
     L25: do {
      if (!($65)) {
       $66 = $63;
       $67 = (($64|0) / 40)&-1;
       $$in = $67;$76 = $66;
       while(1) {
        $74 = (($$in) + -1)|0;
        $75 = (((($76) + (($74*40)|0)|0)) + 32|0);
        $77 = load4($75);
        $78 = ($77|0)==(0|0);
        do {
         if (!($78)) {
          $80 = load4($8);
          $81 = (($80) + 1)|0;
          store4($8,$81);
          $82 = load4($7);
          $83 = load4($10);
          $84 = ($83|0)==(0|0);
          do {
           if ($84) {
            store4($15,0);
           } else {
            $85 = ($83|0)==($6|0);
            if ($85) {
             store4($15,$9);
             $86 = load4($83);
             $87 = ((($86)) + 12|0);
             $88 = load4($87);
             FUNCTION_TABLE_vii[$88 & 7]($83,$9);
             break;
            } else {
             $89 = load4($83);
             $90 = ((($89)) + 8|0);
             $91 = load4($90);
             $92 = (FUNCTION_TABLE_ii[$91 & 31]($83)|0);
             store4($15,$92);
             break;
            }
           }
          } while(0);
          FUNCTION_TABLE_vii[$77 & 7]($82,$9);
          $93 = load4($15);
          $94 = ($93|0)==($9|0);
          if ($94) {
           $95 = load4($93);
           $96 = ((($95)) + 16|0);
           $97 = load4($96);
           FUNCTION_TABLE_vi[$97 & 31]($93);
           break;
          }
          $98 = ($93|0)==(0|0);
          if (!($98)) {
           $99 = load4($93);
           $100 = ((($99)) + 20|0);
           $101 = load4($100);
           FUNCTION_TABLE_vi[$101 & 31]($93);
          }
         }
        } while(0);
        $79 = ($74|0)==(0);
        if ($79) {
         break L25;
        }
        $$pre = load4(9532);
        $$in = $74;$76 = $$pre;
       }
      }
     } while(0);
     $68 = load4($10);
     $69 = ($68|0)==(0|0);
     if ($69) {
      label = 17;
      break;
     }
     $71 = load4($68);
     $72 = ((($71)) + 24|0);
     $73 = load4($72);
     FUNCTION_TABLE_vi[$73 & 31]($68);
    }
    $113 = (($$01663) + 1)|0;
    $114 = ($113>>>0)>($3>>>0);
    if ($114) {
     label = 36;
     break;
    } else {
     $$01663 = $113;
    }
   }
   if ((label|0) == 17) {
    $70 = (___cxa_allocate_exception(4)|0);
    store4($70,(2288));
    ___cxa_throw(($70|0),(1392|0),(6|0));
    // unreachable;
   }
   else if ((label|0) == 36) {
    $$pre74 = load4($10);
    $116 = $$pre74;
    break;
   }
  }
 } while(0);
 $115 = ($116|0)==($6|0);
 if ($115) {
  $117 = load4($116);
  $118 = ((($117)) + 16|0);
  $119 = load4($118);
  FUNCTION_TABLE_vi[$119 & 31]($116);
  STACKTOP = sp;return;
 }
 $120 = ($116|0)==(0|0);
 if ($120) {
  STACKTOP = sp;return;
 }
 $121 = load4($116);
 $122 = ((($121)) + 20|0);
 $123 = load4($122);
 FUNCTION_TABLE_vi[$123 & 31]($116);
 STACKTOP = sp;return;
}
function __Z10patchVnodeP5VNodeS0_NSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i10 = 0, $$$i10$i = 0, $$$i18 = 0, $$$i2 = 0, $$$i26 = 0, $$$i26$i = 0, $$$i34 = 0, $$$i42 = 0, $$$i50 = 0, $$$i59$i = 0, $$$i67$i = 0, $$0$i$i = 0, $$0$in$be$i$i = 0, $$0106$lcssa$i = 0, $$0106$ph$be$i = 0, $$0106$ph327646$i = 0, $$0106$ph667$i = 0, $$0106628$i = 0, $$0107$ph326645$i = 0;
 var $$0107$ph666$i = 0, $$0107627$i = 0, $$0108$ph$be$i = 0, $$0108$ph$be$in$i = 0, $$0108$ph664$i = 0, $$0109$ph$be$i = 0, $$0109$ph324644$i = 0, $$0109$ph663$i = 0, $$011$i$i = 0, $$0110$ph$be$i = 0, $$0110$ph323643$i = 0, $$0110$ph662$i = 0, $$0110626$i = 0, $$0111$lcssa$i = 0, $$0111$ph322642$i = 0, $$0111$ph661$i = 0, $$0111625$i = 0, $$0112$ph$be$i = 0, $$0112$ph321$lcssa495$i = 0, $$0112$ph321641$i = 0;
 var $$0112$ph660$i = 0, $$0113$ph$be$i = 0, $$0113$ph$lcssa623$i = 0, $$0113$ph659$i = 0, $$01318$i = 0, $$01318$i$i = 0, $$01318$i$i$i = 0, $$01318$i2$i$i = 0, $$01417$i = 0, $$01417$i$i = 0, $$01417$i$i$i = 0, $$01417$i3$i$i = 0, $$016$i = 0, $$016$i23 = 0, $$017$i = 0, $$017$i24 = 0, $$017$off041$i$i = 0, $$017$off042$i$i = 0, $$017$off047$i$i = 0, $$018$off039$i$i = 0;
 var $$018$off046$i$i = 0, $$019$i = 0, $$019$i$i = 0, $$019$i$i$i = 0, $$019$i1$i$i = 0, $$01937$i$i = 0, $$01938$i$i = 0, $$01945$i$i = 0, $$02035$i$i = 0, $$02036$i$i = 0, $$02044$i$i = 0, $$021$i$i = 0, $$022$i$i = 0, $$in = 0, $$lcssa$i = 0, $$lcssa$i$i = 0, $$lcssa$i16 = 0, $$lcssa$i16$i = 0, $$lcssa$i24 = 0, $$lcssa$i24$i = 0;
 var $$lcssa$i32 = 0, $$lcssa$i32$i = 0, $$lcssa$i40 = 0, $$lcssa$i41$i = 0, $$lcssa$i48 = 0, $$lcssa$i49$i = 0, $$lcssa$i56 = 0, $$lcssa$i57$i = 0, $$lcssa$i65$i = 0, $$lcssa$i73$i = 0, $$lcssa$i8 = 0, $$lcssa$i8$i = 0, $$lcssa$i81$i = 0, $$lcssa$i89$i = 0, $$lcssa370$i = 0, $$lcssa386$i = 0, $$phitmp$i$i$i = 0, $$pr$i = 0, $$pre = 0, $$pre$i$i = 0;
 var $$pre$i14$i = 0, $$pre$i29$i = 0, $$pre$i42$i = 0, $$pre$i56$i = 0, $$pre115 = 0, $$sroa$0113$0 = 0, $$sroa$0139$0 = 0, $$sroa$066$0 = 0, $$sroa$079$0$$sroa_idx$i = 0, $$sroa$099$0 = 0, $$sroa$14$0 = 0, $$sroa$15$0 = 0, $$sroa$20$0 = 0, $$sroa$7$0$$sroa_idx$i = 0, $$sroa$786$0$$sroa_raw_idx$i = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i13$i$i = 0, $10 = 0;
 var $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0;
 var $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0;
 var $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0;
 var $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0;
 var $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0;
 var $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0;
 var $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0;
 var $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0;
 var $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0;
 var $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0;
 var $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0;
 var $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0;
 var $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0;
 var $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0;
 var $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0;
 var $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0;
 var $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0;
 var $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0;
 var $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0;
 var $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0;
 var $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0;
 var $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0;
 var $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0;
 var $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0;
 var $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0;
 var $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0;
 var $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0;
 var $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0;
 var $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0;
 var $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0;
 var $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0;
 var $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0;
 var $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0;
 var $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0;
 var $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0;
 var $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0;
 var $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0;
 var $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0;
 var $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0;
 var $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0;
 var $822 = 0, $823 = 0, $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0;
 var $840 = 0, $841 = 0, $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0;
 var $859 = 0, $86 = 0, $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0;
 var $877 = 0, $878 = 0, $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0;
 var $895 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond$i = 0, $or$cond316$i = 0, $or$cond624$i = 0, $or$cond624640$i = 0, $phitmp$i$i$i = 0, $phitmp$i22$i$i = 0, $scevgep$i$i$i$i = 0;
 var $scevgep$i$i$i119$i = 0, $scevgep$i$i$i134$i = 0, $scevgep$i$i$i156$i = 0, $scevgep$i$i$i200$i = 0, $scevgep$i$i$i223$i = 0, $scevgep$i$i$i237$i = 0, $scevgep$i$i$i242$i = 0, $scevgep$i$i$i273$i = 0, $scevgep$i$i$i278$i = 0, $scevgep$i$i$i70 = 0, $scevgep$i$i$i75 = 0, $scevgep$i$i$i94 = 0, $scevgep4$i$i$i$i = 0, $scevgep4$i$i$i120$i = 0, $scevgep4$i$i$i135$i = 0, $scevgep4$i$i$i157$i = 0, $scevgep4$i$i$i201$i = 0, $scevgep4$i$i$i224$i = 0, $scevgep4$i$i$i238$i = 0, $scevgep4$i$i$i243$i = 0;
 var $scevgep4$i$i$i274$i = 0, $scevgep4$i$i$i279$i = 0, $scevgep4$i$i$i71 = 0, $scevgep4$i$i$i76 = 0, $scevgep4$i$i$i95 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 272|0;
 $3 = sp;
 $4 = sp + 256|0;
 $5 = sp + 244|0;
 $6 = sp + 232|0;
 $7 = sp + 220|0;
 $8 = sp + 208|0;
 $9 = sp + 196|0;
 $10 = sp + 184|0;
 $11 = sp + 160|0;
 $12 = sp + 144|0;
 $13 = sp + 132|0;
 $14 = sp + 112|0;
 $15 = sp + 96|0;
 $16 = sp + 80|0;
 $17 = sp + 44|0;
 $18 = sp + 40|0;
 $19 = sp + 16|0;
 $20 = sp + 172|0;
 $21 = sp + 156|0;
 $22 = sp + 128|0;
 $23 = sp + 116|0;
 $24 = sp + 100|0;
 $25 = sp + 92|0;
 $26 = sp + 68|0;
 $27 = sp + 56|0;
 $28 = sp + 28|0;
 $29 = ($0|0)==($1|0);
 if ($29) {
  STACKTOP = sp;return;
 }
 $30 = load4((9536));
 $31 = load4(9532);
 $32 = (($30) - ($31))|0;
 $33 = ($32|0)==(0);
 L4: do {
  if (!($33)) {
   $34 = $31;
   $35 = (($32|0) / 40)&-1;
   $$in = $35;$47 = $34;
   while(1) {
    $45 = (($$in) + -1)|0;
    $46 = (((($47) + (($45*40)|0)|0)) + 20|0);
    $48 = load4($46);
    $49 = ($48|0)==(0|0);
    if (!($49)) {
     FUNCTION_TABLE_vii[$48 & 7]($0,$1);
    }
    $50 = ($45|0)==(0);
    if ($50) {
     break L4;
    }
    $$pre = load4(9532);
    $$in = $45;$47 = $$pre;
   }
  }
 } while(0);
 $36 = ((($1)) + 24|0);
 $37 = ((($36)) + 11|0);
 $38 = load1($37);
 $39 = ($38<<24>>24)<(0);
 if ($39) {
  $40 = ((($1)) + 28|0);
  $41 = load4($40);
  $44 = $41;
 } else {
  $42 = $38&255;
  $44 = $42;
 }
 $43 = ($44|0)==(0);
 if (!($43)) {
  $836 = ((($0)) + 24|0);
  if ($39) {
   $837 = ((($1)) + 28|0);
   $838 = load4($837);
   $849 = $838;
  } else {
   $839 = $38&255;
   $849 = $839;
  }
  $840 = ((($836)) + 11|0);
  $841 = load1($840);
  $842 = ($841<<24>>24)<(0);
  $843 = ((($0)) + 28|0);
  $844 = load4($843);
  $845 = $841&255;
  $846 = $842 ? $844 : $845;
  if ($39) {
   $847 = load4($36);
   $895 = $847;
  } else {
   $895 = $36;
  }
  $848 = ($846>>>0)<($849>>>0);
  $$sroa$speculated$i = $848 ? $846 : $849;
  $850 = ($$sroa$speculated$i|0)==(0);
  L27: do {
   if ($850) {
    label = 346;
   } else {
    $851 = load4($836);
    $852 = $842 ? $851 : $836;
    $$01318$i = $895;$$01417$i = $$sroa$speculated$i;$$019$i = $852;
    while(1) {
     $853 = load1($$01318$i);
     $854 = load1($$019$i);
     $855 = ($853<<24>>24)==($854<<24>>24);
     if (!($855)) {
      break L27;
     }
     $856 = (($$01417$i) + -1)|0;
     $857 = ((($$01318$i)) + 1|0);
     $858 = ((($$019$i)) + 1|0);
     $859 = ($856|0)==(0);
     if ($859) {
      label = 346;
      break;
     } else {
      $$01318$i = $857;$$01417$i = $856;$$019$i = $858;
     }
    }
   }
  } while(0);
  if ((label|0) == 346) {
   $860 = ($849>>>0)>=($846>>>0);
   $861 = $848 ^ 1;
   $or$cond = $860 & $861;
   if ($or$cond) {
    STACKTOP = sp;return;
   }
  }
  $862 = ((($1)) + 96|0);
  $863 = load4($862);
  __emval_incref(($863|0));
  ; store8($28,i64_const(0,0),4); store4($28+8|0,0,4);
  $864 = load1($37);
  $865 = ($864<<24>>24)<(0);
  if ($865) {
   $866 = load4($36);
   $867 = ((($1)) + 28|0);
   $868 = load4($867);
   $869 = ($868>>>0)>(4294967279);
   if ($869) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $870 = ($868>>>0)<(11);
   if ($870) {
    $885 = $868&255;
    $886 = ((($28)) + 11|0);
    store1($886,$885);
    $887 = ($868|0)==(0);
    if ($887) {
     $$017$i24 = $28;
    } else {
     $$016$i23 = $28;
     label = 357;
    }
   } else {
    $871 = (($868) + 16)|0;
    $872 = $871 & -16;
    $873 = ($872|0)==(0);
    $$$i18 = $873 ? 1 : $872;
    $874 = (_malloc($$$i18)|0);
    $875 = ($874|0)==(0|0);
    L44: do {
     if ($875) {
      while(1) {
       $876 = load4(10072);
       $877 = (($876) + 0)|0;
       store4(10072,$877);
       $878 = ($876|0)==(0);
       if ($878) {
        $$lcssa$i24 = 0;
        break L44;
       }
       $879 = $876;
       FUNCTION_TABLE_v[$879 & 3]();
       $880 = (_malloc($$$i18)|0);
       $881 = ($880|0)==(0|0);
       if (!($881)) {
        $$lcssa$i24 = $880;
        break;
       }
      }
     } else {
      $$lcssa$i24 = $874;
     }
    } while(0);
    store4($28,$$lcssa$i24);
    $882 = $872 | -2147483648;
    $883 = ((($28)) + 8|0);
    store4($883,$882);
    $884 = ((($28)) + 4|0);
    store4($884,$868);
    $$016$i23 = $$lcssa$i24;
    label = 357;
   }
   if ((label|0) == 357) {
    _memcpy(($$016$i23|0),($866|0),($868|0))|0;
    $$017$i24 = $$016$i23;
   }
   $888 = (($$017$i24) + ($868)|0);
   store1($888,0);
  } else {
   ; store8($28,load8($36,4),4); store4($28+8 | 0,load4($36+8 | 0,4),4);
  }
  __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($863,$28);
  $889 = ((($28)) + 11|0);
  $890 = load1($889);
  $891 = ($890<<24>>24)<(0);
  if ($891) {
   $892 = load4($28);
   _free($892);
  }
  __emval_decref(($863|0));
  STACKTOP = sp;return;
 }
 $51 = ((($1)) + 100|0);
 $52 = load4($51);
 $53 = ((($1)) + 104|0);
 $54 = load4($53);
 $55 = ($52|0)==($54|0);
 $56 = ((($0)) + 100|0);
 $57 = load4($56);
 $58 = ((($0)) + 104|0);
 $59 = load4($58);
 $60 = ($57|0)==($59|0);
 if ($55) {
  if (!($60)) {
   $754 = ((($1)) + 96|0);
   $755 = load4($754);
   store4($25,$755);
   __emval_incref(($755|0));
   store4($26,0);
   $756 = ((($26)) + 4|0);
   store4($756,0);
   $757 = ((($26)) + 8|0);
   store4($757,0);
   $758 = load4($58);
   $759 = load4($56);
   $760 = (($758) - ($759))|0;
   $761 = $760 >> 2;
   $762 = ($761|0)==(0);
   if ($762) {
    $783 = $758;$784 = $759;$788 = 0;$791 = 0;
   } else {
    $763 = ($761>>>0)>(1073741823);
    if ($763) {
     __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $764 = ($760|0)==(0);
    $$$i42 = $764 ? 1 : $760;
    $765 = (_malloc($$$i42)|0);
    $766 = ($765|0)==(0|0);
    L68: do {
     if ($766) {
      while(1) {
       $767 = load4(10072);
       $768 = (($767) + 0)|0;
       store4(10072,$768);
       $769 = ($767|0)==(0);
       if ($769) {
        $$lcssa$i48 = 0;
        break L68;
       }
       $770 = $767;
       FUNCTION_TABLE_v[$770 & 3]();
       $771 = (_malloc($$$i42)|0);
       $772 = ($771|0)==(0|0);
       if (!($772)) {
        $$lcssa$i48 = $771;
        break;
       }
      }
     } else {
      $$lcssa$i48 = $765;
     }
    } while(0);
    store4($756,$$lcssa$i48);
    store4($26,$$lcssa$i48);
    $773 = (($$lcssa$i48) + ($761<<2)|0);
    $774 = ((($26)) + 8|0);
    store4($774,$773);
    $775 = load4($56);
    $776 = load4($58);
    $777 = $775;
    $778 = (($776) - ($777))|0;
    $779 = ($778|0)>(0);
    if ($779) {
     $780 = $778 >> 2;
     $781 = (($$lcssa$i48) + ($780<<2)|0);
     _memcpy(($$lcssa$i48|0),($775|0),($778|0))|0;
     store4($756,$781);
     $783 = $776;$784 = $777;$788 = $$lcssa$i48;$791 = $781;
    } else {
     $783 = $776;$784 = $777;$788 = $$lcssa$i48;$791 = $$lcssa$i48;
    }
   }
   $782 = (($783) - ($784))|0;
   $785 = $782 >> 2;
   $786 = (($785) + -1)|0;
   __Z12removeVnodesN10emscripten3valENSt3__26vectorIP5VNodeNS1_9allocatorIS4_EEEEjj($25,$26,0,$786);
   $787 = ($788|0)==(0|0);
   $789 = $788;
   if (!($787)) {
    $790 = ($791|0)==($788|0);
    if (!($790)) {
     $scevgep$i$i$i94 = ((($791)) + -4|0);
     $792 = $scevgep$i$i$i94;
     $793 = (($792) - ($789))|0;
     $794 = $793 >>> 2;
     $795 = $794 ^ -1;
     $scevgep4$i$i$i95 = (($791) + ($795<<2)|0);
     store4($756,$scevgep4$i$i$i95);
    }
    _free($788);
   }
   __emval_decref(($755|0));
   STACKTOP = sp;return;
  }
  $796 = ((($0)) + 24|0);
  $797 = ((($796)) + 11|0);
  $798 = load1($797);
  $799 = ($798<<24>>24)<(0);
  if ($799) {
   $800 = ((($0)) + 28|0);
   $801 = load4($800);
   $804 = $801;
  } else {
   $802 = $798&255;
   $804 = $802;
  }
  $803 = ($804|0)==(0);
  if ($803) {
   STACKTOP = sp;return;
  }
  $805 = ((($1)) + 96|0);
  $806 = load4($805);
  __emval_incref(($806|0));
  ; store8($27,i64_const(0,0),4); store4($27+8|0,0,4);
  $807 = load1($797);
  $808 = ($807<<24>>24)<(0);
  if ($808) {
   $809 = load4($796);
   $810 = ((($0)) + 28|0);
   $811 = load4($810);
   $812 = ($811>>>0)>(4294967279);
   if ($812) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $813 = ($811>>>0)<(11);
   if ($813) {
    $828 = $811&255;
    $829 = ((($27)) + 11|0);
    store1($829,$828);
    $830 = ($811|0)==(0);
    if ($830) {
     $$017$i = $27;
    } else {
     $$016$i = $27;
     label = 331;
    }
   } else {
    $814 = (($811) + 16)|0;
    $815 = $814 & -16;
    $816 = ($815|0)==(0);
    $$$i50 = $816 ? 1 : $815;
    $817 = (_malloc($$$i50)|0);
    $818 = ($817|0)==(0|0);
    L98: do {
     if ($818) {
      while(1) {
       $819 = load4(10072);
       $820 = (($819) + 0)|0;
       store4(10072,$820);
       $821 = ($819|0)==(0);
       if ($821) {
        $$lcssa$i56 = 0;
        break L98;
       }
       $822 = $819;
       FUNCTION_TABLE_v[$822 & 3]();
       $823 = (_malloc($$$i50)|0);
       $824 = ($823|0)==(0|0);
       if (!($824)) {
        $$lcssa$i56 = $823;
        break;
       }
      }
     } else {
      $$lcssa$i56 = $817;
     }
    } while(0);
    store4($27,$$lcssa$i56);
    $825 = $815 | -2147483648;
    $826 = ((($27)) + 8|0);
    store4($826,$825);
    $827 = ((($27)) + 4|0);
    store4($827,$811);
    $$016$i = $$lcssa$i56;
    label = 331;
   }
   if ((label|0) == 331) {
    _memcpy(($$016$i|0),($809|0),($811|0))|0;
    $$017$i = $$016$i;
   }
   $831 = (($$017$i) + ($811)|0);
   store1($831,0);
  } else {
   ; store8($27,load8($796,4),4); store4($27+8 | 0,load4($796+8 | 0,4),4);
  }
  __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($806,$27);
  $832 = ((($27)) + 11|0);
  $833 = load1($832);
  $834 = ($833<<24>>24)<(0);
  if ($834) {
   $835 = load4($27);
   _free($835);
  }
  __emval_decref(($806|0));
  STACKTOP = sp;return;
 }
 if ($60) {
  $667 = ((($0)) + 24|0);
  $668 = ((($667)) + 11|0);
  $669 = load1($668);
  $670 = ($669<<24>>24)<(0);
  if ($670) {
   $671 = ((($0)) + 28|0);
   $672 = load4($671);
   $675 = $672;
  } else {
   $673 = $669&255;
   $675 = $673;
  }
  $674 = ($675|0)==(0);
  $$pre115 = ((($1)) + 96|0);
  if (!($674)) {
   $676 = load4($$pre115);
   __emval_incref(($676|0));
   ; store8($20,i64_const(0,0),4); store4($20+8|0,0,4);
   __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($676,$20);
   __emval_decref(($676|0));
  }
  $677 = load4($$pre115);
  store4($21,$677);
  __emval_incref(($677|0));
  store4($22,(2));
  store4($23,0);
  $678 = ((($23)) + 4|0);
  store4($678,0);
  $679 = ((($23)) + 8|0);
  store4($679,0);
  $680 = load4($53);
  $681 = load4($51);
  $682 = (($680) - ($681))|0;
  $683 = $682 >> 2;
  $684 = ($683|0)==(0);
  if ($684) {
   $732 = $680;$733 = $681;
  } else {
   $685 = ($683>>>0)>(1073741823);
   if ($685) {
    __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $686 = ($682|0)==(0);
   $$$i26 = $686 ? 1 : $682;
   $687 = (_malloc($$$i26)|0);
   $688 = ($687|0)==(0|0);
   L127: do {
    if ($688) {
     while(1) {
      $689 = load4(10072);
      $690 = (($689) + 0)|0;
      store4(10072,$690);
      $691 = ($689|0)==(0);
      if ($691) {
       $$lcssa$i32 = 0;
       break L127;
      }
      $692 = $689;
      FUNCTION_TABLE_v[$692 & 3]();
      $693 = (_malloc($$$i26)|0);
      $694 = ($693|0)==(0|0);
      if (!($694)) {
       $$lcssa$i32 = $693;
       break;
      }
     }
    } else {
     $$lcssa$i32 = $687;
    }
   } while(0);
   store4($678,$$lcssa$i32);
   store4($23,$$lcssa$i32);
   $695 = (($$lcssa$i32) + ($683<<2)|0);
   $696 = ((($23)) + 8|0);
   store4($696,$695);
   $697 = load4($51);
   $698 = load4($53);
   $699 = $697;
   $700 = (($698) - ($699))|0;
   $701 = ($700|0)>(0);
   if ($701) {
    $702 = $700 >> 2;
    $703 = (($$lcssa$i32) + ($702<<2)|0);
    _memcpy(($$lcssa$i32|0),($697|0),($700|0))|0;
    store4($678,$703);
    $732 = $698;$733 = $699;
   } else {
    $732 = $698;$733 = $699;
   }
  }
  store4($24,0);
  $704 = ((($24)) + 4|0);
  store4($704,0);
  $705 = ((($24)) + 8|0);
  store4($705,0);
  $706 = ((($2)) + 4|0);
  $707 = load4($706);
  $708 = load4($2);
  $709 = (($707) - ($708))|0;
  $710 = $709 >> 2;
  $711 = ($710|0)==(0);
  if ($711) {
   $740 = 0;
  } else {
   $712 = ($710>>>0)>(1073741823);
   if ($712) {
    __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   $713 = ($709|0)==(0);
   $$$i34 = $713 ? 1 : $709;
   $714 = (_malloc($$$i34)|0);
   $715 = ($714|0)==(0|0);
   L139: do {
    if ($715) {
     while(1) {
      $716 = load4(10072);
      $717 = (($716) + 0)|0;
      store4(10072,$717);
      $718 = ($716|0)==(0);
      if ($718) {
       $$lcssa$i40 = 0;
       break L139;
      }
      $719 = $716;
      FUNCTION_TABLE_v[$719 & 3]();
      $720 = (_malloc($$$i34)|0);
      $721 = ($720|0)==(0|0);
      if (!($721)) {
       $$lcssa$i40 = $720;
       break;
      }
     }
    } else {
     $$lcssa$i40 = $714;
    }
   } while(0);
   store4($704,$$lcssa$i40);
   store4($24,$$lcssa$i40);
   $722 = (($$lcssa$i40) + ($710<<2)|0);
   $723 = ((($24)) + 8|0);
   store4($723,$722);
   $724 = load4($2);
   $725 = load4($706);
   $726 = $724;
   $727 = (($725) - ($726))|0;
   $728 = ($727|0)>(0);
   if ($728) {
    $729 = $727 >> 2;
    $730 = (($$lcssa$i40) + ($729<<2)|0);
    _memcpy(($$lcssa$i40|0),($724|0),($727|0))|0;
    store4($704,$730);
    $740 = $730;
   } else {
    $740 = $$lcssa$i40;
   }
  }
  $731 = (($732) - ($733))|0;
  $734 = $731 >> 2;
  $735 = (($734) + -1)|0;
  __Z9addVnodesN10emscripten3valES0_NSt3__26vectorIP5VNodeNS1_9allocatorIS4_EEEEjjS7_($21,$22,$23,0,$735,$24);
  $736 = load4($24);
  $737 = ($736|0)==(0|0);
  $738 = $736;
  if (!($737)) {
   $739 = ($740|0)==($736|0);
   if (!($739)) {
    $scevgep$i$i$i70 = ((($740)) + -4|0);
    $741 = $scevgep$i$i$i70;
    $742 = (($741) - ($738))|0;
    $743 = $742 >>> 2;
    $744 = $743 ^ -1;
    $scevgep4$i$i$i71 = (($740) + ($744<<2)|0);
    store4($704,$scevgep4$i$i$i71);
   }
   _free($736);
  }
  $745 = load4($23);
  $746 = ($745|0)==(0|0);
  $747 = $745;
  if (!($746)) {
   $748 = load4($678);
   $749 = ($748|0)==($745|0);
   if (!($749)) {
    $scevgep$i$i$i75 = ((($748)) + -4|0);
    $750 = $scevgep$i$i$i75;
    $751 = (($750) - ($747))|0;
    $752 = $751 >>> 2;
    $753 = $752 ^ -1;
    $scevgep4$i$i$i76 = (($748) + ($753<<2)|0);
    store4($678,$scevgep4$i$i$i76);
   }
   _free($745);
  }
  __emval_decref(((2)|0));
  __emval_decref(($677|0));
  STACKTOP = sp;return;
 }
 $61 = ((($1)) + 96|0);
 $62 = load4($61);
 __emval_incref(($62|0));
 $63 = load4($58);
 $64 = load4($56);
 $65 = (($63) - ($64))|0;
 $66 = $65 >> 2;
 $67 = ($66|0)==(0);
 if ($67) {
  $$sroa$0113$0 = 0;$$sroa$15$0 = 0;
 } else {
  $68 = ($66>>>0)>(1073741823);
  if ($68) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $69 = ($65|0)==(0);
  $$$i = $69 ? 1 : $65;
  $70 = (_malloc($$$i)|0);
  $71 = ($70|0)==(0|0);
  L165: do {
   if ($71) {
    while(1) {
     $72 = load4(10072);
     $73 = (($72) + 0)|0;
     store4(10072,$73);
     $74 = ($72|0)==(0);
     if ($74) {
      $$lcssa$i = 0;
      break L165;
     }
     $75 = $72;
     FUNCTION_TABLE_v[$75 & 3]();
     $76 = (_malloc($$$i)|0);
     $77 = ($76|0)==(0|0);
     if (!($77)) {
      $$lcssa$i = $76;
      break;
     }
    }
   } else {
    $$lcssa$i = $70;
   }
  } while(0);
  $78 = $$lcssa$i;
  $79 = load4($56);
  $80 = load4($58);
  $81 = $79;
  $82 = (($80) - ($81))|0;
  $83 = ($82|0)>(0);
  if ($83) {
   $84 = $82 >> 2;
   $85 = (($$lcssa$i) + ($84<<2)|0);
   _memcpy(($$lcssa$i|0),($79|0),($82|0))|0;
   $86 = $85;
   $$sroa$0113$0 = $78;$$sroa$15$0 = $86;
  } else {
   $$sroa$0113$0 = $78;$$sroa$15$0 = $78;
  }
 }
 $87 = load4($53);
 $88 = load4($51);
 $89 = (($87) - ($88))|0;
 $90 = $89 >> 2;
 $91 = ($90|0)==(0);
 if ($91) {
  $$sroa$099$0 = 0;$$sroa$14$0 = 0;
 } else {
  $92 = ($90>>>0)>(1073741823);
  if ($92) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $93 = ($89|0)==(0);
  $$$i2 = $93 ? 1 : $89;
  $94 = (_malloc($$$i2)|0);
  $95 = ($94|0)==(0|0);
  L177: do {
   if ($95) {
    while(1) {
     $96 = load4(10072);
     $97 = (($96) + 0)|0;
     store4(10072,$97);
     $98 = ($96|0)==(0);
     if ($98) {
      $$lcssa$i8 = 0;
      break L177;
     }
     $99 = $96;
     FUNCTION_TABLE_v[$99 & 3]();
     $100 = (_malloc($$$i2)|0);
     $101 = ($100|0)==(0|0);
     if (!($101)) {
      $$lcssa$i8 = $100;
      break;
     }
    }
   } else {
    $$lcssa$i8 = $94;
   }
  } while(0);
  $102 = $$lcssa$i8;
  $103 = load4($51);
  $104 = load4($53);
  $105 = $103;
  $106 = (($104) - ($105))|0;
  $107 = ($106|0)>(0);
  if ($107) {
   $108 = $106 >> 2;
   $109 = (($$lcssa$i8) + ($108<<2)|0);
   _memcpy(($$lcssa$i8|0),($103|0),($106|0))|0;
   $110 = $109;
   $$sroa$099$0 = $102;$$sroa$14$0 = $110;
  } else {
   $$sroa$099$0 = $102;$$sroa$14$0 = $102;
  }
 }
 $111 = ((($2)) + 4|0);
 $112 = load4($111);
 $113 = load4($2);
 $114 = (($112) - ($113))|0;
 $115 = $114 >> 2;
 $116 = ($115|0)==(0);
 if ($116) {
  $$sroa$066$0 = 0;$$sroa$20$0 = 0;
 } else {
  $117 = ($115>>>0)>(1073741823);
  if ($117) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $118 = ($114|0)==(0);
  $$$i10 = $118 ? 1 : $114;
  $119 = (_malloc($$$i10)|0);
  $120 = ($119|0)==(0|0);
  L189: do {
   if ($120) {
    while(1) {
     $121 = load4(10072);
     $122 = (($121) + 0)|0;
     store4(10072,$122);
     $123 = ($121|0)==(0);
     if ($123) {
      $$lcssa$i16 = 0;
      break L189;
     }
     $124 = $121;
     FUNCTION_TABLE_v[$124 & 3]();
     $125 = (_malloc($$$i10)|0);
     $126 = ($125|0)==(0|0);
     if (!($126)) {
      $$lcssa$i16 = $125;
      break;
     }
    }
   } else {
    $$lcssa$i16 = $119;
   }
  } while(0);
  $127 = $$lcssa$i16;
  $128 = load4($2);
  $129 = load4($111);
  $130 = $128;
  $131 = (($129) - ($130))|0;
  $132 = ($131|0)>(0);
  if ($132) {
   $133 = $131 >> 2;
   $134 = (($$lcssa$i16) + ($133<<2)|0);
   _memcpy(($$lcssa$i16|0),($128|0),($131|0))|0;
   $135 = $134;
   $$sroa$066$0 = $127;$$sroa$20$0 = $135;
  } else {
   $$sroa$066$0 = $127;$$sroa$20$0 = $127;
  }
 }
 $136 = (($$sroa$15$0) - ($$sroa$0113$0))|0;
 $137 = $136 >> 2;
 $138 = (($137) + -1)|0;
 $139 = (($$sroa$14$0) - ($$sroa$099$0))|0;
 $140 = $139 >> 2;
 $141 = (($140) + -1)|0;
 $142 = $$sroa$0113$0;
 $143 = load4($142);
 $144 = (($142) + ($138<<2)|0);
 $145 = load4($144);
 $146 = $$sroa$099$0;
 $147 = load4($146);
 $148 = (($146) + ($141<<2)|0);
 $149 = load4($148);
 $150 = ((($5)) + 4|0);
 store4($150,0);
 $151 = ((($5)) + 8|0);
 store4($151,0);
 $152 = ((($5)) + 4|0);
 store4($5,$152);
 $153 = ((($8)) + 4|0);
 $154 = ((($7)) + 4|0);
 $155 = ((($6)) + 4|0);
 $156 = ((($9)) + 4|0);
 $157 = ((($10)) + 4|0);
 $158 = ((($10)) + 8|0);
 $159 = ((($10)) + 4|0);
 $160 = ((($11)) + 4|0);
 $161 = ((($13)) + 4|0);
 $162 = ((($12)) + 4|0);
 $163 = ((($8)) + 8|0);
 $164 = ((($3)) + 8|0);
 $165 = ((($8)) + 8|0);
 $166 = ((($7)) + 8|0);
 $167 = ((($7)) + 8|0);
 $168 = ((($6)) + 8|0);
 $169 = ((($6)) + 8|0);
 $170 = ((($9)) + 8|0);
 $171 = ((($3)) + 8|0);
 $172 = ((($9)) + 8|0);
 $173 = ((($11)) + 8|0);
 $174 = ((($3)) + 8|0);
 $175 = ((($11)) + 8|0);
 $176 = ((($13)) + 8|0);
 $177 = ((($3)) + 8|0);
 $178 = ((($13)) + 8|0);
 $179 = ((($12)) + 8|0);
 $180 = ((($3)) + 8|0);
 $181 = ((($12)) + 8|0);
 $182 = (($$sroa$20$0) - ($$sroa$066$0))|0;
 $183 = $182 >> 2;
 $184 = ($183|0)==(0);
 $185 = ($183>>>0)>(1073741823);
 $186 = ($182|0)==(0);
 $$$i10$i = $186 ? 1 : $182;
 $187 = (($$sroa$20$0) - ($$sroa$066$0))|0;
 $188 = ($187|0)>(0);
 $189 = $187 >> 2;
 $190 = $$sroa$066$0;
 $191 = ($137|0)==(0);
 $192 = ($137>>>0)>(1073741823);
 $193 = ($136|0)==(0);
 $$$i26$i = $193 ? 1 : $136;
 $194 = (($$sroa$15$0) - ($$sroa$0113$0))|0;
 $195 = ($194|0)>(0);
 $196 = $194 >> 2;
 $197 = $$sroa$0113$0;
 $$0106$ph667$i = 0;$$0107$ph666$i = $149;$$0108$ph664$i = $147;$$0109$ph663$i = $145;$$0110$ph662$i = $143;$$0111$ph661$i = $141;$$0112$ph660$i = $138;$$0113$ph659$i = 0;
 L196: while(1) {
  $$0106$ph327646$i = $$0106$ph667$i;$$0107$ph326645$i = $$0107$ph666$i;$$0109$ph324644$i = $$0109$ph663$i;$$0110$ph323643$i = $$0110$ph662$i;$$0111$ph322642$i = $$0111$ph661$i;$$0112$ph321641$i = $$0112$ph660$i;
  L198: while(1) {
   $198 = ((($$0109$ph324644$i)) + 96|0);
   $$0106628$i = $$0106$ph327646$i;$$0107627$i = $$0107$ph326645$i;$$0110626$i = $$0110$ph323643$i;$$0111625$i = $$0111$ph322642$i;
   while(1) {
    $199 = (__Z9sameVnodeP5VNodeS0_($$0110626$i,$$0108$ph664$i)|0);
    if ($199) {
     label = 42;
     break L198;
    }
    $226 = (__Z9sameVnodeP5VNodeS0_($$0109$ph324644$i,$$0107627$i)|0);
    if ($226) {
     break;
    }
    $254 = (__Z9sameVnodeP5VNodeS0_($$0110626$i,$$0107627$i)|0);
    if (!($254)) {
     label = 87;
     break L198;
    }
    store4($8,0);
    store4($153,0);
    store4($163,0);
    if ($184) {
     $269 = 0;
    } else {
     if ($185) {
      label = 73;
      break L196;
     }
     $255 = (_malloc($$$i10$i)|0);
     $256 = ($255|0)==(0|0);
     L208: do {
      if ($256) {
       while(1) {
        $257 = load4(10072);
        $258 = (($257) + 0)|0;
        store4(10072,$258);
        $259 = ($257|0)==(0);
        if ($259) {
         $$lcssa$i16$i = 0;
         break L208;
        }
        $260 = $257;
        FUNCTION_TABLE_v[$260 & 3]();
        $261 = (_malloc($$$i10$i)|0);
        $262 = ($261|0)==(0|0);
        if (!($262)) {
         $$lcssa$i16$i = $261;
         break;
        }
       }
      } else {
       $$lcssa$i16$i = $255;
      }
     } while(0);
     store4($153,$$lcssa$i16$i);
     store4($8,$$lcssa$i16$i);
     $263 = (($$lcssa$i16$i) + ($183<<2)|0);
     store4($165,$263);
     if ($188) {
      $264 = (($$lcssa$i16$i) + ($189<<2)|0);
      _memcpy(($$lcssa$i16$i|0),($190|0),($187|0))|0;
      store4($153,$264);
      $269 = $264;
     } else {
      $269 = $$lcssa$i16$i;
     }
    }
    __Z10patchVnodeP5VNodeS0_NSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($$0110626$i,$$0107627$i,$8);
    $265 = load4($8);
    $266 = ($265|0)==(0|0);
    $267 = $265;
    if (!($266)) {
     $268 = ($269|0)==($265|0);
     if (!($268)) {
      $scevgep$i$i$i134$i = ((($269)) + -4|0);
      $270 = $scevgep$i$i$i134$i;
      $271 = (($270) - ($267))|0;
      $272 = $271 >>> 2;
      $273 = $272 ^ -1;
      $scevgep4$i$i$i135$i = (($269) + ($273<<2)|0);
      store4($153,$scevgep4$i$i$i135$i);
     }
     _free($265);
    }
    __emval_incref(($62|0));
    $274 = ((($$0110626$i)) + 96|0);
    $275 = load4($274);
    $276 = $275;
    __emval_incref(($275|0));
    $277 = load4($198);
    __emval_incref(($277|0));
    $278 = (__emval_new_cstring((2882|0))|0);
    $279 = (__emval_get_property(($277|0),($278|0))|0);
    __emval_decref(($278|0));
    $280 = $279;
    $281 = load1(9504);
    $282 = ($281<<24>>24)==(0);
    if ($282) {
     store1(9504,1);
     $283 = (__emval_get_method_caller(3,(2048|0))|0);
     store4(9552,$283);
     $284 = $283;
    } else {
     $$pre$i$i = load4(9552);
     $284 = $$pre$i$i;
    }
    __emval_incref(($275|0));
    store4($3,$276);
    __emval_incref(($279|0));
    store4($164,$280);
    __emval_call_void_method(($284|0),($62|0),(2834|0),($3|0));
    __emval_decref(($279|0));
    __emval_decref(($277|0));
    __emval_decref(($275|0));
    __emval_decref(($62|0));
    $285 = (($$0106628$i) + 1)|0;
    $286 = (($142) + ($285<<2)|0);
    $287 = load4($286);
    $288 = (($$0111625$i) + -1)|0;
    $289 = (($146) + ($288<<2)|0);
    $290 = load4($289);
    $291 = ($285>>>0)>($$0112$ph321641$i>>>0);
    $292 = ($$0113$ph659$i>>>0)>($288>>>0);
    $or$cond$i = $291 | $292;
    if ($or$cond$i) {
     $$0106$lcssa$i = $285;$$0111$lcssa$i = $288;$$0112$ph321$lcssa495$i = $$0112$ph321641$i;$$0113$ph$lcssa623$i = $$0113$ph659$i;$$lcssa370$i = $292;$$lcssa386$i = $291;
     label = 226;
     break L196;
    } else {
     $$0106628$i = $285;$$0107627$i = $290;$$0110626$i = $287;$$0111625$i = $288;
    }
   }
   store4($7,0);
   store4($154,0);
   store4($166,0);
   if ($184) {
    $241 = 0;
   } else {
    if ($185) {
     label = 59;
     break L196;
    }
    $227 = (_malloc($$$i10$i)|0);
    $228 = ($227|0)==(0|0);
    L229: do {
     if ($228) {
      while(1) {
       $229 = load4(10072);
       $230 = (($229) + 0)|0;
       store4(10072,$230);
       $231 = ($229|0)==(0);
       if ($231) {
        $$lcssa$i8$i = 0;
        break L229;
       }
       $232 = $229;
       FUNCTION_TABLE_v[$232 & 3]();
       $233 = (_malloc($$$i10$i)|0);
       $234 = ($233|0)==(0|0);
       if (!($234)) {
        $$lcssa$i8$i = $233;
        break;
       }
      }
     } else {
      $$lcssa$i8$i = $227;
     }
    } while(0);
    store4($154,$$lcssa$i8$i);
    store4($7,$$lcssa$i8$i);
    $235 = (($$lcssa$i8$i) + ($183<<2)|0);
    store4($167,$235);
    if ($188) {
     $236 = (($$lcssa$i8$i) + ($189<<2)|0);
     _memcpy(($$lcssa$i8$i|0),($190|0),($187|0))|0;
     store4($154,$236);
     $241 = $236;
    } else {
     $241 = $$lcssa$i8$i;
    }
   }
   __Z10patchVnodeP5VNodeS0_NSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($$0109$ph324644$i,$$0107627$i,$7);
   $237 = load4($7);
   $238 = ($237|0)==(0|0);
   $239 = $237;
   if (!($238)) {
    $240 = ($241|0)==($237|0);
    if (!($240)) {
     $scevgep$i$i$i119$i = ((($241)) + -4|0);
     $242 = $scevgep$i$i$i119$i;
     $243 = (($242) - ($239))|0;
     $244 = $243 >>> 2;
     $245 = $244 ^ -1;
     $scevgep4$i$i$i120$i = (($241) + ($245<<2)|0);
     store4($154,$scevgep4$i$i$i120$i);
    }
    _free($237);
   }
   $246 = (($$0112$ph321641$i) + -1)|0;
   $247 = (($142) + ($246<<2)|0);
   $248 = load4($247);
   $249 = (($$0111625$i) + -1)|0;
   $250 = (($146) + ($249<<2)|0);
   $251 = load4($250);
   $252 = ($$0106628$i>>>0)>($246>>>0);
   $253 = ($$0113$ph659$i>>>0)>($249>>>0);
   $or$cond624$i = $252 | $253;
   if ($or$cond624$i) {
    $$0106$lcssa$i = $$0106628$i;$$0111$lcssa$i = $249;$$0112$ph321$lcssa495$i = $246;$$0113$ph$lcssa623$i = $$0113$ph659$i;$$lcssa370$i = $253;$$lcssa386$i = $252;
    label = 226;
    break L196;
   } else {
    $$0106$ph327646$i = $$0106628$i;$$0107$ph326645$i = $251;$$0109$ph324644$i = $248;$$0110$ph323643$i = $$0110626$i;$$0111$ph322642$i = $249;$$0112$ph321641$i = $246;
   }
  }
  L242: do {
   if ((label|0) == 42) {
    label = 0;
    store4($6,0);
    store4($155,0);
    store4($168,0);
    if ($184) {
     $214 = 0;
    } else {
     if ($185) {
      label = 44;
      break L196;
     }
     $200 = (_malloc($$$i10$i)|0);
     $201 = ($200|0)==(0|0);
     L247: do {
      if ($201) {
       while(1) {
        $202 = load4(10072);
        $203 = (($202) + 0)|0;
        store4(10072,$203);
        $204 = ($202|0)==(0);
        if ($204) {
         $$lcssa$i$i = 0;
         break L247;
        }
        $205 = $202;
        FUNCTION_TABLE_v[$205 & 3]();
        $206 = (_malloc($$$i10$i)|0);
        $207 = ($206|0)==(0|0);
        if (!($207)) {
         $$lcssa$i$i = $206;
         break;
        }
       }
      } else {
       $$lcssa$i$i = $200;
      }
     } while(0);
     store4($155,$$lcssa$i$i);
     store4($6,$$lcssa$i$i);
     $208 = (($$lcssa$i$i) + ($183<<2)|0);
     store4($169,$208);
     if ($188) {
      $209 = (($$lcssa$i$i) + ($189<<2)|0);
      _memcpy(($$lcssa$i$i|0),($190|0),($187|0))|0;
      store4($155,$209);
      $214 = $209;
     } else {
      $214 = $$lcssa$i$i;
     }
    }
    __Z10patchVnodeP5VNodeS0_NSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($$0110626$i,$$0108$ph664$i,$6);
    $210 = load4($6);
    $211 = ($210|0)==(0|0);
    $212 = $210;
    if (!($211)) {
     $213 = ($214|0)==($210|0);
     if (!($213)) {
      $scevgep$i$i$i$i = ((($214)) + -4|0);
      $215 = $scevgep$i$i$i$i;
      $216 = (($215) - ($212))|0;
      $217 = $216 >>> 2;
      $218 = $217 ^ -1;
      $scevgep4$i$i$i$i = (($214) + ($218<<2)|0);
      store4($155,$scevgep4$i$i$i$i);
     }
     _free($210);
    }
    $219 = (($$0106628$i) + 1)|0;
    $220 = (($142) + ($219<<2)|0);
    $221 = load4($220);
    $222 = (($$0113$ph659$i) + 1)|0;
    $223 = (($146) + ($222<<2)|0);
    $$0106$ph$be$i = $219;$$0108$ph$be$in$i = $223;$$0109$ph$be$i = $$0109$ph324644$i;$$0110$ph$be$i = $221;$$0112$ph$be$i = $$0112$ph321641$i;$$0113$ph$be$i = $222;
   }
   else if ((label|0) == 87) {
    label = 0;
    $293 = (__Z9sameVnodeP5VNodeS0_($$0109$ph324644$i,$$0108$ph664$i)|0);
    if ($293) {
     store4($9,0);
     store4($156,0);
     store4($170,0);
     if ($184) {
      $308 = 0;
     } else {
      if ($185) {
       label = 90;
       break L196;
      }
      $294 = (_malloc($$$i10$i)|0);
      $295 = ($294|0)==(0|0);
      L266: do {
       if ($295) {
        while(1) {
         $296 = load4(10072);
         $297 = (($296) + 0)|0;
         store4(10072,$297);
         $298 = ($296|0)==(0);
         if ($298) {
          $$lcssa$i24$i = 0;
          break L266;
         }
         $299 = $296;
         FUNCTION_TABLE_v[$299 & 3]();
         $300 = (_malloc($$$i10$i)|0);
         $301 = ($300|0)==(0|0);
         if (!($301)) {
          $$lcssa$i24$i = $300;
          break;
         }
        }
       } else {
        $$lcssa$i24$i = $294;
       }
      } while(0);
      store4($156,$$lcssa$i24$i);
      store4($9,$$lcssa$i24$i);
      $302 = (($$lcssa$i24$i) + ($183<<2)|0);
      store4($172,$302);
      if ($188) {
       $303 = (($$lcssa$i24$i) + ($189<<2)|0);
       _memcpy(($$lcssa$i24$i|0),($190|0),($187|0))|0;
       store4($156,$303);
       $308 = $303;
      } else {
       $308 = $$lcssa$i24$i;
      }
     }
     __Z10patchVnodeP5VNodeS0_NSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($$0109$ph324644$i,$$0108$ph664$i,$9);
     $304 = load4($9);
     $305 = ($304|0)==(0|0);
     $306 = $304;
     if (!($305)) {
      $307 = ($308|0)==($304|0);
      if (!($307)) {
       $scevgep$i$i$i156$i = ((($308)) + -4|0);
       $309 = $scevgep$i$i$i156$i;
       $310 = (($309) - ($306))|0;
       $311 = $310 >>> 2;
       $312 = $311 ^ -1;
       $scevgep4$i$i$i157$i = (($308) + ($312<<2)|0);
       store4($156,$scevgep4$i$i$i157$i);
      }
      _free($304);
     }
     __emval_incref(($62|0));
     $313 = load4($198);
     $314 = $313;
     __emval_incref(($313|0));
     $315 = ((($$0110626$i)) + 96|0);
     $316 = load4($315);
     $317 = $316;
     __emval_incref(($316|0));
     $318 = load1(9504);
     $319 = ($318<<24>>24)==(0);
     if ($319) {
      store1(9504,1);
      $320 = (__emval_get_method_caller(3,(2048|0))|0);
      store4(9552,$320);
      $321 = $320;
     } else {
      $$pre$i14$i = load4(9552);
      $321 = $$pre$i14$i;
     }
     __emval_incref(($313|0));
     store4($3,$314);
     __emval_incref(($316|0));
     store4($171,$317);
     __emval_call_void_method(($321|0),($62|0),(2834|0),($3|0));
     __emval_decref(($316|0));
     __emval_decref(($313|0));
     __emval_decref(($62|0));
     $322 = (($$0112$ph321641$i) + -1)|0;
     $323 = (($142) + ($322<<2)|0);
     $324 = load4($323);
     $325 = (($$0113$ph659$i) + 1)|0;
     $326 = (($146) + ($325<<2)|0);
     $$0106$ph$be$i = $$0106628$i;$$0108$ph$be$in$i = $326;$$0109$ph$be$i = $324;$$0110$ph$be$i = $$0110626$i;$$0112$ph$be$i = $322;$$0113$ph$be$i = $325;
     break;
    }
    $327 = load4($151);
    $328 = ($327|0)==(0);
    if ($328) {
     if ($191) {
      $$sroa$0139$0 = 0;
     } else {
      if ($192) {
       label = 107;
       break L196;
      }
      $329 = (_malloc($$$i26$i)|0);
      $330 = ($329|0)==(0|0);
      L289: do {
       if ($330) {
        while(1) {
         $331 = load4(10072);
         $332 = (($331) + 0)|0;
         store4(10072,$332);
         $333 = ($331|0)==(0);
         if ($333) {
          $$lcssa$i32$i = 0;
          break L289;
         }
         $334 = $331;
         FUNCTION_TABLE_v[$334 & 3]();
         $335 = (_malloc($$$i26$i)|0);
         $336 = ($335|0)==(0|0);
         if (!($336)) {
          $$lcssa$i32$i = $335;
          break;
         }
        }
       } else {
        $$lcssa$i32$i = $329;
       }
      } while(0);
      if ($195) {
       _memcpy(($$lcssa$i32$i|0),($197|0),($194|0))|0;
       $$sroa$0139$0 = $$lcssa$i32$i;
      } else {
       $$sroa$0139$0 = $$lcssa$i32$i;
      }
     }
     store4($157,0);
     store4($158,0);
     store4($10,$159);
     $$011$i$i = $$0106628$i;
     while(1) {
      $337 = (($$sroa$0139$0) + ($$011$i$i<<2)|0);
      $338 = load4($337);
      $339 = ((($338)) + 12|0);
      $340 = ((($339)) + 11|0);
      $341 = load1($340);
      $342 = ($341<<24>>24)<(0);
      if ($342) {
       $343 = ((($338)) + 16|0);
       $344 = load4($343);
       $347 = $344;
      } else {
       $345 = $341&255;
       $347 = $345;
      }
      $346 = ($347|0)==(0);
      if (!($346)) {
       store4($3,$339);
       __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($4,$10,$339,$3);
       $348 = load4($4);
       $349 = ((($348)) + 28|0);
       store4($349,$$011$i$i);
      }
      $350 = (($$011$i$i) + 1)|0;
      $351 = ($350>>>0)>($$0112$ph321641$i>>>0);
      if ($351) {
       break;
      } else {
       $$011$i$i = $350;
      }
     }
     $352 = load4($152);
     __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($352);
     $353 = load4($10);
     store4($5,$353);
     $354 = load4($159);
     store4($152,$354);
     $355 = load4($158);
     store4($151,$355);
     $356 = ($355|0)==(0);
     if ($356) {
      $357 = $354;
      store4($5,$152);
      $360 = $357;
     } else {
      $358 = $354;
      $359 = ((($358)) + 8|0);
      store4($359,$152);
      store4($10,$159);
      store4($159,0);
      store4($158,0);
      $360 = 0;
     }
     __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($360);
     _free($$sroa$0139$0);
    }
    $361 = ((($$0108$ph664$i)) + 12|0);
    $$021$i$i = load4($152);
    $362 = ($$021$i$i|0)==(0|0);
    L311: do {
     if (!($362)) {
      $363 = ((($361)) + 11|0);
      $364 = load1($363);
      $365 = ($364<<24>>24)<(0);
      $366 = ((($$0108$ph664$i)) + 16|0);
      $367 = load4($366);
      $368 = $364&255;
      $369 = $365 ? $367 : $368;
      $370 = load4($361);
      $371 = $365 ? $370 : $361;
      $$022$i$i = $$021$i$i;
      L313: while(1) {
       $372 = ((($$022$i$i)) + 16|0);
       $373 = ((($372)) + 11|0);
       $374 = load1($373);
       $375 = ($374<<24>>24)<(0);
       $376 = ((($$022$i$i)) + 20|0);
       $377 = load4($376);
       $378 = $374&255;
       $379 = $375 ? $377 : $378;
       $380 = ($379>>>0)<($369>>>0);
       $$sroa$speculated$i$i$i$i13$i$i = $380 ? $379 : $369;
       $381 = ($$sroa$speculated$i$i$i$i13$i$i|0)==(0);
       L315: do {
        if ($381) {
         label = 131;
        } else {
         $382 = load4($372);
         $383 = $375 ? $382 : $372;
         $$01318$i$i$i = $371;$$01417$i$i$i = $$sroa$speculated$i$i$i$i13$i$i;$$019$i$i$i = $383;
         while(1) {
          $384 = load1($$01318$i$i$i);
          $385 = load1($$019$i$i$i);
          $386 = ($384<<24>>24)==($385<<24>>24);
          if (!($386)) {
           break;
          }
          $387 = (($$01417$i$i$i) + -1)|0;
          $388 = ((($$01318$i$i$i)) + 1|0);
          $389 = ((($$019$i$i$i)) + 1|0);
          $390 = ($387|0)==(0);
          if ($390) {
           label = 131;
           break L315;
          } else {
           $$01318$i$i$i = $388;$$01417$i$i$i = $387;$$019$i$i$i = $389;
          }
         }
         $391 = $384&255;
         $392 = $385&255;
         $393 = (($391) - ($392))|0;
         $394 = ($393|0)==(0);
         if ($394) {
          label = 131;
         } else {
          $396 = ($393|0)<(0);
          if ($396) {
           label = 133;
          } else {
           label = 134;
          }
         }
        }
       } while(0);
       if ((label|0) == 131) {
        label = 0;
        $395 = ($369>>>0)<($379>>>0);
        if ($395) {
         label = 133;
        } else {
         label = 134;
        }
       }
       if ((label|0) == 133) {
        label = 0;
        $$0$in$be$i$i = $$022$i$i;
       }
       else if ((label|0) == 134) {
        label = 0;
        $397 = ($369>>>0)<($379>>>0);
        $$sroa$speculated$i$i$i$i$i$i = $397 ? $369 : $379;
        $398 = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
        L327: do {
         if ($398) {
          label = 139;
         } else {
          $399 = load4($372);
          $400 = $375 ? $399 : $372;
          $$01318$i2$i$i = $400;$$01417$i3$i$i = $$sroa$speculated$i$i$i$i$i$i;$$019$i1$i$i = $371;
          while(1) {
           $401 = load1($$01318$i2$i$i);
           $402 = load1($$019$i1$i$i);
           $403 = ($401<<24>>24)==($402<<24>>24);
           if (!($403)) {
            break;
           }
           $404 = (($$01417$i3$i$i) + -1)|0;
           $405 = ((($$01318$i2$i$i)) + 1|0);
           $406 = ((($$019$i1$i$i)) + 1|0);
           $407 = ($404|0)==(0);
           if ($407) {
            label = 139;
            break L327;
           } else {
            $$01318$i2$i$i = $405;$$01417$i3$i$i = $404;$$019$i1$i$i = $406;
           }
          }
          $408 = $401&255;
          $409 = $402&255;
          $410 = (($408) - ($409))|0;
          $411 = ($410|0)==(0);
          if ($411) {
           label = 139;
           break;
          }
          $412 = ($410|0)<(0);
          if (!($412)) {
           break L313;
          }
         }
        } while(0);
        if ((label|0) == 139) {
         label = 0;
         if (!($380)) {
          break;
         }
        }
        $413 = ((($$022$i$i)) + 4|0);
        $$0$in$be$i$i = $413;
       }
       $$0$i$i = load4($$0$in$be$i$i);
       $414 = ($$0$i$i|0)==(0|0);
       if ($414) {
        break L311;
       } else {
        $$022$i$i = $$0$i$i;
       }
      }
      store4($3,$361);
      __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($4,$5,$361,$3);
      $445 = load4($4);
      $446 = ((($445)) + 28|0);
      $447 = load4($446);
      $448 = (($142) + ($447<<2)|0);
      $449 = load4($448);
      $450 = ((($449)) + 11|0);
      $451 = load1($450);
      $452 = ($451<<24>>24)<(0);
      if ($452) {
       $453 = ((($449)) + 4|0);
       $454 = load4($453);
       $465 = $454;
      } else {
       $455 = $451&255;
       $465 = $455;
      }
      $456 = ((($$0108$ph664$i)) + 11|0);
      $457 = load1($456);
      $458 = ($457<<24>>24)<(0);
      $459 = ((($$0108$ph664$i)) + 4|0);
      $460 = load4($459);
      $461 = $457&255;
      $462 = $458 ? $460 : $461;
      if ($452) {
       $463 = load4($449);
       $893 = $463;
      } else {
       $893 = $449;
      }
      $464 = ($462>>>0)<($465>>>0);
      $$sroa$speculated$i$i = $464 ? $462 : $465;
      $466 = ($$sroa$speculated$i$i|0)==(0);
      L347: do {
       if ($466) {
        label = 169;
       } else {
        $467 = load4($$0108$ph664$i);
        $468 = $458 ? $467 : $$0108$ph664$i;
        $$01318$i$i = $893;$$01417$i$i = $$sroa$speculated$i$i;$$019$i$i = $468;
        while(1) {
         $469 = load1($$01318$i$i);
         $470 = load1($$019$i$i);
         $471 = ($469<<24>>24)==($470<<24>>24);
         if (!($471)) {
          label = 170;
          break L347;
         }
         $472 = (($$01417$i$i) + -1)|0;
         $473 = ((($$01318$i$i)) + 1|0);
         $474 = ((($$019$i$i)) + 1|0);
         $475 = ($472|0)==(0);
         if ($475) {
          label = 169;
          break;
         } else {
          $$01318$i$i = $473;$$01417$i$i = $472;$$019$i$i = $474;
         }
        }
       }
      } while(0);
      if ((label|0) == 169) {
       label = 0;
       $476 = ($465>>>0)>=($462>>>0);
       $477 = $464 ^ 1;
       $or$cond316$i = $476 & $477;
       if ($or$cond316$i) {
        store4($13,0);
        store4($161,0);
        store4($176,0);
        do {
         if ($184) {
          $520 = 0;
         } else {
          if ($185) {
           label = 188;
           break L196;
          }
          $506 = (_malloc($$$i10$i)|0);
          $507 = ($506|0)==(0|0);
          L358: do {
           if ($507) {
            while(1) {
             $508 = load4(10072);
             $509 = (($508) + 0)|0;
             store4(10072,$509);
             $510 = ($508|0)==(0);
             if ($510) {
              $$lcssa$i57$i = 0;
              break L358;
             }
             $511 = $508;
             FUNCTION_TABLE_v[$511 & 3]();
             $512 = (_malloc($$$i10$i)|0);
             $513 = ($512|0)==(0|0);
             if (!($513)) {
              $$lcssa$i57$i = $512;
              break;
             }
            }
           } else {
            $$lcssa$i57$i = $506;
           }
          } while(0);
          store4($161,$$lcssa$i57$i);
          store4($13,$$lcssa$i57$i);
          $514 = (($$lcssa$i57$i) + ($183<<2)|0);
          store4($178,$514);
          if (!($188)) {
           $520 = $$lcssa$i57$i;
           break;
          }
          $515 = (($$lcssa$i57$i) + ($189<<2)|0);
          _memcpy(($$lcssa$i57$i|0),($190|0),($187|0))|0;
          store4($161,$515);
          $520 = $515;
         }
        } while(0);
        __Z10patchVnodeP5VNodeS0_NSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($449,$$0108$ph664$i,$13);
        $516 = load4($13);
        $517 = ($516|0)==(0|0);
        $518 = $516;
        if (!($517)) {
         $519 = ($520|0)==($516|0);
         if (!($519)) {
          $scevgep$i$i$i242$i = ((($520)) + -4|0);
          $521 = $scevgep$i$i$i242$i;
          $522 = (($521) - ($518))|0;
          $523 = $522 >>> 2;
          $524 = $523 ^ -1;
          $scevgep4$i$i$i243$i = (($520) + ($524<<2)|0);
          store4($161,$scevgep4$i$i$i243$i);
         }
         _free($516);
        }
        store4($3,$361);
        __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($4,$5,$361,$3);
        $525 = load4($4);
        $526 = ((($525)) + 28|0);
        $527 = load4($526);
        $528 = (($142) + ($527<<2)|0);
        $529 = load4($528);
        ; store4($3,0,4); store2($3+4|0,0,2); store1($3+6|0,0,1);
        $530 = ((($529)) + 12|0);
        $531 = ((($530)) + 11|0);
        $532 = load1($531);
        $533 = ($532<<24>>24)<(0);
        do {
         if ($533) {
          $534 = load4($530);
          store1($534,0);
          $535 = ((($529)) + 16|0);
          store4($535,0);
          $$pr$i = load1($531);
          $536 = ($$pr$i<<24>>24)<(0);
          if (!($536)) {
           $541 = $$pr$i;
           label = 202;
           break;
          }
          $537 = ((($529)) + 20|0);
          $538 = load4($537);
          $539 = $538 & 2147483647;
          $phitmp$i$i$i = (($539) + -1)|0;
          $543 = 0;$547 = $phitmp$i$i$i;$563 = $$pr$i;$894 = 1;
         } else {
          store1($530,0);
          store1($531,0);
          $541 = 0;
          label = 202;
         }
        } while(0);
        if ((label|0) == 202) {
         label = 0;
         $540 = $541&255;
         $543 = $540;$547 = 10;$563 = $541;$894 = 0;
        }
        $542 = ($543>>>0)<(11);
        $544 = (($543) + 16)|0;
        $545 = $544 & 496;
        $phitmp$i22$i$i = (($545) + -1)|0;
        $$phitmp$i$i$i = $542 ? 10 : $phitmp$i22$i$i;
        $546 = ($$phitmp$i$i$i|0)==($547|0);
        do {
         if (!($546)) {
          do {
           if ($542) {
            $559 = load4($530);
            if ($894) {
             $$017$off042$i$i = 0;$$01938$i$i = $559;$$02036$i$i = $530;
             label = 212;
            } else {
             $$017$off047$i$i = 0;$$018$off046$i$i = 1;$$01945$i$i = $559;$$02044$i$i = $530;
             label = 213;
            }
           } else {
            $548 = (($$phitmp$i$i$i) + 1)|0;
            $549 = ($548|0)==(0);
            $$$i59$i = $549 ? 1 : $548;
            $550 = (_malloc($$$i59$i)|0);
            $551 = ($550|0)==(0|0);
            L383: do {
             if ($551) {
              while(1) {
               $552 = load4(10072);
               $553 = (($552) + 0)|0;
               store4(10072,$553);
               $554 = ($552|0)==(0);
               if ($554) {
                $$lcssa$i65$i = 0;
                break L383;
               }
               $555 = $552;
               FUNCTION_TABLE_v[$555 & 3]();
               $556 = (_malloc($$$i59$i)|0);
               $557 = ($556|0)==(0|0);
               if (!($557)) {
                $$lcssa$i65$i = $556;
                break;
               }
              }
             } else {
              $$lcssa$i65$i = $550;
             }
            } while(0);
            if ($894) {
             $558 = load4($530);
             $$017$off042$i$i = 1;$$01938$i$i = $558;$$02036$i$i = $$lcssa$i65$i;
             label = 212;
             break;
            } else {
             $$017$off047$i$i = 1;$$018$off046$i$i = 0;$$01945$i$i = $530;$$02044$i$i = $$lcssa$i65$i;
             label = 213;
             break;
            }
           }
          } while(0);
          if ((label|0) == 212) {
           label = 0;
           $560 = ((($529)) + 16|0);
           $561 = load4($560);
           $$017$off041$i$i = $$017$off042$i$i;$$018$off039$i$i = 1;$$01937$i$i = $$01938$i$i;$$02035$i$i = $$02036$i$i;$565 = $561;
          }
          else if ((label|0) == 213) {
           label = 0;
           $562 = $563&255;
           $$017$off041$i$i = $$017$off047$i$i;$$018$off039$i$i = $$018$off046$i$i;$$01937$i$i = $$01945$i$i;$$02035$i$i = $$02044$i$i;$565 = $562;
          }
          $564 = (($565) + 1)|0;
          $566 = ($564|0)==(0);
          if (!($566)) {
           _memcpy(($$02035$i$i|0),($$01937$i$i|0),($564|0))|0;
          }
          if ($$018$off039$i$i) {
           _free($$01937$i$i);
          }
          if ($$017$off041$i$i) {
           $567 = (($$phitmp$i$i$i) + 1)|0;
           $568 = $567 | -2147483648;
           $569 = ((($529)) + 20|0);
           store4($569,$568);
           $570 = ((($529)) + 16|0);
           store4($570,$543);
           store4($530,$$02035$i$i);
           break;
          } else {
           $571 = $543&255;
           store1($531,$571);
           break;
          }
         }
        } while(0);
        $$sroa$079$0$$sroa_idx$i = ((($529)) + 12|0);
        store4($$sroa$079$0$$sroa_idx$i,0);
        $$sroa$7$0$$sroa_idx$i = ((($529)) + 16|0);
        ; store4($$sroa$7$0$$sroa_idx$i,load4($3,4),4); store2($$sroa$7$0$$sroa_idx$i+4 | 0,load2($3+4 | 0,2),2); store1($$sroa$7$0$$sroa_idx$i+6 | 0,load1($3+6 | 0,1),1);
        $$sroa$786$0$$sroa_raw_idx$i = ((($529)) + 23|0);
        store1($$sroa$786$0$$sroa_raw_idx$i,0);
        __emval_incref(($62|0));
        $572 = ((($449)) + 96|0);
        $573 = load4($572);
        $574 = $573;
        __emval_incref(($573|0));
        $575 = ((($$0110626$i)) + 96|0);
        $576 = load4($575);
        $577 = $576;
        __emval_incref(($576|0));
        $578 = load1(9504);
        $579 = ($578<<24>>24)==(0);
        if ($579) {
         store1(9504,1);
         $580 = (__emval_get_method_caller(3,(2048|0))|0);
         store4(9552,$580);
         $581 = $580;
        } else {
         $$pre$i56$i = load4(9552);
         $581 = $$pre$i56$i;
        }
        __emval_incref(($573|0));
        store4($3,$574);
        __emval_incref(($576|0));
        store4($177,$577);
        __emval_call_void_method(($581|0),($62|0),(2834|0),($3|0));
        __emval_decref(($576|0));
        __emval_decref(($573|0));
        __emval_decref(($62|0));
       } else {
        label = 170;
       }
      }
      if ((label|0) == 170) {
       label = 0;
       __emval_incref(($62|0));
       store4($12,0);
       store4($162,0);
       store4($179,0);
       do {
        if (!($184)) {
         if ($185) {
          label = 172;
          break L196;
         }
         $478 = (_malloc($$$i10$i)|0);
         $479 = ($478|0)==(0|0);
         L414: do {
          if ($479) {
           while(1) {
            $480 = load4(10072);
            $481 = (($480) + 0)|0;
            store4(10072,$481);
            $482 = ($480|0)==(0);
            if ($482) {
             $$lcssa$i49$i = 0;
             break L414;
            }
            $483 = $480;
            FUNCTION_TABLE_v[$483 & 3]();
            $484 = (_malloc($$$i10$i)|0);
            $485 = ($484|0)==(0|0);
            if (!($485)) {
             $$lcssa$i49$i = $484;
             break;
            }
           }
          } else {
           $$lcssa$i49$i = $478;
          }
         } while(0);
         store4($162,$$lcssa$i49$i);
         store4($12,$$lcssa$i49$i);
         $486 = (($$lcssa$i49$i) + ($183<<2)|0);
         store4($181,$486);
         if (!($188)) {
          break;
         }
         $487 = (($$lcssa$i49$i) + ($189<<2)|0);
         _memcpy(($$lcssa$i49$i|0),($190|0),($187|0))|0;
         store4($162,$487);
        }
       } while(0);
       $488 = (__Z9createElmP5VNodeNSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($$0108$ph664$i,$12)|0);
       $489 = $488;
       $490 = ((($$0110626$i)) + 96|0);
       $491 = load4($490);
       $492 = $491;
       __emval_incref(($491|0));
       $493 = load1(9504);
       $494 = ($493<<24>>24)==(0);
       if ($494) {
        store1(9504,1);
        $495 = (__emval_get_method_caller(3,(2048|0))|0);
        store4(9552,$495);
        $496 = $495;
       } else {
        $$pre$i42$i = load4(9552);
        $496 = $$pre$i42$i;
       }
       __emval_incref(($488|0));
       store4($3,$489);
       __emval_incref(($491|0));
       store4($180,$492);
       __emval_call_void_method(($496|0),($62|0),(2834|0),($3|0));
       __emval_decref(($491|0));
       __emval_decref(($488|0));
       $497 = load4($12);
       $498 = ($497|0)==(0|0);
       $499 = $497;
       if (!($498)) {
        $500 = load4($162);
        $501 = ($500|0)==($497|0);
        if (!($501)) {
         $scevgep$i$i$i223$i = ((($500)) + -4|0);
         $502 = $scevgep$i$i$i223$i;
         $503 = (($502) - ($499))|0;
         $504 = $503 >>> 2;
         $505 = $504 ^ -1;
         $scevgep4$i$i$i224$i = (($500) + ($505<<2)|0);
         store4($162,$scevgep4$i$i$i224$i);
        }
        _free($497);
       }
       __emval_decref(($62|0));
      }
      $582 = (($$0113$ph659$i) + 1)|0;
      $583 = (($146) + ($582<<2)|0);
      $$0106$ph$be$i = $$0106628$i;$$0108$ph$be$in$i = $583;$$0109$ph$be$i = $$0109$ph324644$i;$$0110$ph$be$i = $$0110626$i;$$0112$ph$be$i = $$0112$ph321641$i;$$0113$ph$be$i = $582;
      break L242;
     }
    } while(0);
    __emval_incref(($62|0));
    store4($11,0);
    store4($160,0);
    store4($173,0);
    if (!($184)) {
     if ($185) {
      label = 145;
      break L196;
     }
     $415 = (_malloc($$$i10$i)|0);
     $416 = ($415|0)==(0|0);
     L436: do {
      if ($416) {
       while(1) {
        $417 = load4(10072);
        $418 = (($417) + 0)|0;
        store4(10072,$418);
        $419 = ($417|0)==(0);
        if ($419) {
         $$lcssa$i41$i = 0;
         break L436;
        }
        $420 = $417;
        FUNCTION_TABLE_v[$420 & 3]();
        $421 = (_malloc($$$i10$i)|0);
        $422 = ($421|0)==(0|0);
        if (!($422)) {
         $$lcssa$i41$i = $421;
         break;
        }
       }
      } else {
       $$lcssa$i41$i = $415;
      }
     } while(0);
     store4($160,$$lcssa$i41$i);
     store4($11,$$lcssa$i41$i);
     $423 = (($$lcssa$i41$i) + ($183<<2)|0);
     store4($175,$423);
     if ($188) {
      $424 = (($$lcssa$i41$i) + ($189<<2)|0);
      _memcpy(($$lcssa$i41$i|0),($190|0),($187|0))|0;
      store4($160,$424);
     }
    }
    $425 = (__Z9createElmP5VNodeNSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($$0108$ph664$i,$11)|0);
    $426 = $425;
    $427 = ((($$0110626$i)) + 96|0);
    $428 = load4($427);
    $429 = $428;
    __emval_incref(($428|0));
    $430 = load1(9504);
    $431 = ($430<<24>>24)==(0);
    if ($431) {
     store1(9504,1);
     $432 = (__emval_get_method_caller(3,(2048|0))|0);
     store4(9552,$432);
     $433 = $432;
    } else {
     $$pre$i29$i = load4(9552);
     $433 = $$pre$i29$i;
    }
    __emval_incref(($425|0));
    store4($3,$426);
    __emval_incref(($428|0));
    store4($174,$429);
    __emval_call_void_method(($433|0),($62|0),(2834|0),($3|0));
    __emval_decref(($428|0));
    __emval_decref(($425|0));
    $434 = load4($11);
    $435 = ($434|0)==(0|0);
    $436 = $434;
    if (!($435)) {
     $437 = load4($160);
     $438 = ($437|0)==($434|0);
     if (!($438)) {
      $scevgep$i$i$i200$i = ((($437)) + -4|0);
      $439 = $scevgep$i$i$i200$i;
      $440 = (($439) - ($436))|0;
      $441 = $440 >>> 2;
      $442 = $441 ^ -1;
      $scevgep4$i$i$i201$i = (($437) + ($442<<2)|0);
      store4($160,$scevgep4$i$i$i201$i);
     }
     _free($434);
    }
    __emval_decref(($62|0));
    $443 = (($$0113$ph659$i) + 1)|0;
    $444 = (($146) + ($443<<2)|0);
    $$0106$ph$be$i = $$0106628$i;$$0108$ph$be$in$i = $444;$$0109$ph$be$i = $$0109$ph324644$i;$$0110$ph$be$i = $$0110626$i;$$0112$ph$be$i = $$0112$ph321641$i;$$0113$ph$be$i = $443;
   }
  } while(0);
  $$0108$ph$be$i = load4($$0108$ph$be$in$i);
  $224 = ($$0106$ph$be$i>>>0)>($$0112$ph$be$i>>>0);
  $225 = ($$0113$ph$be$i>>>0)>($$0111625$i>>>0);
  $or$cond624640$i = $225 | $224;
  if ($or$cond624640$i) {
   $$0106$lcssa$i = $$0106$ph$be$i;$$0111$lcssa$i = $$0111625$i;$$0112$ph321$lcssa495$i = $$0112$ph$be$i;$$0113$ph$lcssa623$i = $$0113$ph$be$i;$$lcssa370$i = $225;$$lcssa386$i = $224;
   label = 226;
   break;
  } else {
   $$0106$ph667$i = $$0106$ph$be$i;$$0107$ph666$i = $$0107627$i;$$0108$ph664$i = $$0108$ph$be$i;$$0109$ph663$i = $$0109$ph$be$i;$$0110$ph662$i = $$0110$ph$be$i;$$0111$ph661$i = $$0111625$i;$$0112$ph660$i = $$0112$ph$be$i;$$0113$ph659$i = $$0113$ph$be$i;
  }
 }
 if ((label|0) == 44) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 59) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 73) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 90) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 107) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 145) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 172) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 188) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 else if ((label|0) == 226) {
  if ($$lcssa386$i) {
   store4($14,$62);
   __emval_incref(($62|0));
   $584 = (($$0111$lcssa$i) + 1)|0;
   $585 = (($146) + ($584<<2)|0);
   $586 = load4($585);
   $587 = ((($586)) + 96|0);
   $588 = load4($587);
   store4($15,$588);
   __emval_incref(($588|0));
   store4($16,0);
   $589 = ((($16)) + 4|0);
   store4($589,0);
   $590 = ((($16)) + 8|0);
   store4($590,0);
   $591 = ($140|0)==(0);
   if (!($591)) {
    $592 = ($140>>>0)>(1073741823);
    if ($592) {
     __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $593 = ($139|0)==(0);
    $$$i67$i = $593 ? 1 : $139;
    $594 = (_malloc($$$i67$i)|0);
    $595 = ($594|0)==(0|0);
    L463: do {
     if ($595) {
      while(1) {
       $596 = load4(10072);
       $597 = (($596) + 0)|0;
       store4(10072,$597);
       $598 = ($596|0)==(0);
       if ($598) {
        $$lcssa$i73$i = 0;
        break L463;
       }
       $599 = $596;
       FUNCTION_TABLE_v[$599 & 3]();
       $600 = (_malloc($$$i67$i)|0);
       $601 = ($600|0)==(0|0);
       if (!($601)) {
        $$lcssa$i73$i = $600;
        break;
       }
      }
     } else {
      $$lcssa$i73$i = $594;
     }
    } while(0);
    store4($589,$$lcssa$i73$i);
    store4($16,$$lcssa$i73$i);
    $602 = (($$lcssa$i73$i) + ($140<<2)|0);
    $603 = ((($16)) + 8|0);
    store4($603,$602);
    $604 = (($$sroa$14$0) - ($$sroa$099$0))|0;
    $605 = ($604|0)>(0);
    if ($605) {
     $606 = $604 >> 2;
     $607 = (($$lcssa$i73$i) + ($606<<2)|0);
     $608 = $$sroa$099$0;
     _memcpy(($$lcssa$i73$i|0),($608|0),($604|0))|0;
     store4($589,$607);
    }
   }
   store4($17,0);
   $609 = ((($17)) + 4|0);
   store4($609,0);
   $610 = ((($17)) + 8|0);
   store4($610,0);
   if ($184) {
    $626 = 0;
   } else {
    if ($185) {
     __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    $611 = (_malloc($$$i10$i)|0);
    $612 = ($611|0)==(0|0);
    L475: do {
     if ($612) {
      while(1) {
       $613 = load4(10072);
       $614 = (($613) + 0)|0;
       store4(10072,$614);
       $615 = ($613|0)==(0);
       if ($615) {
        $$lcssa$i81$i = 0;
        break L475;
       }
       $616 = $613;
       FUNCTION_TABLE_v[$616 & 3]();
       $617 = (_malloc($$$i10$i)|0);
       $618 = ($617|0)==(0|0);
       if (!($618)) {
        $$lcssa$i81$i = $617;
        break;
       }
      }
     } else {
      $$lcssa$i81$i = $611;
     }
    } while(0);
    store4($609,$$lcssa$i81$i);
    store4($17,$$lcssa$i81$i);
    $619 = (($$lcssa$i81$i) + ($183<<2)|0);
    $620 = ((($17)) + 8|0);
    store4($620,$619);
    if ($188) {
     $621 = (($$lcssa$i81$i) + ($189<<2)|0);
     _memcpy(($$lcssa$i81$i|0),($190|0),($187|0))|0;
     store4($609,$621);
     $626 = $621;
    } else {
     $626 = $$lcssa$i81$i;
    }
   }
   __Z9addVnodesN10emscripten3valES0_NSt3__26vectorIP5VNodeNS1_9allocatorIS4_EEEEjjS7_($14,$15,$16,$$0113$ph$lcssa623$i,$$0111$lcssa$i,$17);
   $622 = load4($17);
   $623 = ($622|0)==(0|0);
   $624 = $622;
   if (!($623)) {
    $625 = ($626|0)==($622|0);
    if (!($625)) {
     $scevgep$i$i$i273$i = ((($626)) + -4|0);
     $627 = $scevgep$i$i$i273$i;
     $628 = (($627) - ($624))|0;
     $629 = $628 >>> 2;
     $630 = $629 ^ -1;
     $scevgep4$i$i$i274$i = (($626) + ($630<<2)|0);
     store4($609,$scevgep4$i$i$i274$i);
    }
    _free($622);
   }
   $631 = load4($16);
   $632 = ($631|0)==(0|0);
   $633 = $631;
   if (!($632)) {
    $634 = load4($589);
    $635 = ($634|0)==($631|0);
    if (!($635)) {
     $scevgep$i$i$i278$i = ((($634)) + -4|0);
     $636 = $scevgep$i$i$i278$i;
     $637 = (($636) - ($633))|0;
     $638 = $637 >>> 2;
     $639 = $638 ^ -1;
     $scevgep4$i$i$i279$i = (($634) + ($639<<2)|0);
     store4($589,$scevgep4$i$i$i279$i);
    }
    _free($631);
   }
   __emval_decref(($588|0));
   __emval_decref(($62|0));
  } else {
   if ($$lcssa370$i) {
    store4($18,$62);
    __emval_incref(($62|0));
    store4($19,0);
    $640 = ((($19)) + 4|0);
    store4($640,0);
    $641 = ((($19)) + 8|0);
    store4($641,0);
    if ($191) {
     $657 = 0;
    } else {
     if ($192) {
      __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
      // unreachable;
     }
     $642 = (_malloc($$$i26$i)|0);
     $643 = ($642|0)==(0|0);
     L501: do {
      if ($643) {
       while(1) {
        $644 = load4(10072);
        $645 = (($644) + 0)|0;
        store4(10072,$645);
        $646 = ($644|0)==(0);
        if ($646) {
         $$lcssa$i89$i = 0;
         break L501;
        }
        $647 = $644;
        FUNCTION_TABLE_v[$647 & 3]();
        $648 = (_malloc($$$i26$i)|0);
        $649 = ($648|0)==(0|0);
        if (!($649)) {
         $$lcssa$i89$i = $648;
         break;
        }
       }
      } else {
       $$lcssa$i89$i = $642;
      }
     } while(0);
     store4($640,$$lcssa$i89$i);
     store4($19,$$lcssa$i89$i);
     $650 = (($$lcssa$i89$i) + ($137<<2)|0);
     $651 = ((($19)) + 8|0);
     store4($651,$650);
     if ($195) {
      $652 = (($$lcssa$i89$i) + ($196<<2)|0);
      _memcpy(($$lcssa$i89$i|0),($197|0),($194|0))|0;
      store4($640,$652);
      $657 = $652;
     } else {
      $657 = $$lcssa$i89$i;
     }
    }
    __Z12removeVnodesN10emscripten3valENSt3__26vectorIP5VNodeNS1_9allocatorIS4_EEEEjj($18,$19,$$0106$lcssa$i,$$0112$ph321$lcssa495$i);
    $653 = load4($19);
    $654 = ($653|0)==(0|0);
    $655 = $653;
    if (!($654)) {
     $656 = ($657|0)==($653|0);
     if (!($656)) {
      $scevgep$i$i$i237$i = ((($657)) + -4|0);
      $658 = $scevgep$i$i$i237$i;
      $659 = (($658) - ($655))|0;
      $660 = $659 >>> 2;
      $661 = $660 ^ -1;
      $scevgep4$i$i$i238$i = (($657) + ($661<<2)|0);
      store4($640,$scevgep4$i$i$i238$i);
     }
     _free($653);
    }
    __emval_decref(($62|0));
   }
  }
  $662 = load4($152);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($662);
  $663 = ($$sroa$066$0|0)==(0);
  if (!($663)) {
   _free($190);
  }
  $664 = ($$sroa$099$0|0)==(0);
  if (!($664)) {
   $665 = $$sroa$099$0;
   _free($665);
  }
  $666 = ($$sroa$0113$0|0)==(0);
  if (!($666)) {
   _free($197);
  }
  __emval_decref(($62|0));
  STACKTOP = sp;return;
 }
}
function __Z11patch_vnodeP5VNodeS0_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$in = 0, $$in134 = 0, $$lcssa$i = 0, $$lcssa$i6 = 0, $$pre = 0, $$pre$i = 0, $$pre136 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $2 = sp;
 $3 = sp + 44|0;
 $4 = sp + 32|0;
 $5 = sp + 28|0;
 $6 = sp + 16|0;
 $7 = load4((9536));
 $8 = load4(9532);
 $9 = (($7) - ($8))|0;
 $10 = ($9|0)==(0);
 L1: do {
  if (!($10)) {
   $11 = $8;
   $12 = (($9|0) / 40)&-1;
   $$in = $12;$16 = $11;
   while(1) {
    $14 = (($$in) + -1)|0;
    $15 = (($16) + (($14*40)|0)|0);
    $17 = load4($15);
    $18 = ($17|0)==(0|0);
    if (!($18)) {
     FUNCTION_TABLE_v[$17 & 3]();
    }
    $19 = ($14|0)==(0);
    if ($19) {
     break L1;
    }
    $$pre = load4(9532);
    $$in = $14;$16 = $$pre;
   }
  }
 } while(0);
 $13 = (__Z9sameVnodeP5VNodeS0_($0,$1)|0);
 if ($13) {
  store4($3,0);
  $20 = ((($3)) + 4|0);
  store4($20,0);
  $21 = ((($3)) + 8|0);
  store4($21,0);
  __Z10patchVnodeP5VNodeS0_NSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($0,$1,$3);
 } else {
  $22 = ((($0)) + 96|0);
  $23 = load4($22);
  __emval_incref(($23|0));
  $24 = (__emval_new_cstring((2871|0))|0);
  $25 = (__emval_get_property(($23|0),($24|0))|0);
  __emval_decref(($24|0));
  __emval_decref(($23|0));
  store4($4,0);
  $26 = ((($4)) + 4|0);
  store4($26,0);
  $27 = ((($4)) + 8|0);
  store4($27,0);
  $28 = (__Z9createElmP5VNodeNSt3__26vectorIS0_NS1_9allocatorIS0_EEEE($1,$4)|0);
  __emval_decref(($28|0));
  __emval_incref(($25|0));
  $29 = (__Z9isDefinedN10emscripten3valE($25)|0);
  __emval_decref(($25|0));
  if ($29) {
   __emval_incref(($25|0));
   $30 = ((($1)) + 96|0);
   $31 = load4($30);
   $32 = $31;
   __emval_incref(($31|0));
   $33 = load4($22);
   __emval_incref(($33|0));
   $34 = (__emval_new_cstring((2882|0))|0);
   $35 = (__emval_get_property(($33|0),($34|0))|0);
   __emval_decref(($34|0));
   $36 = $35;
   $37 = load1(9504);
   $38 = ($37<<24>>24)==(0);
   if ($38) {
    store1(9504,1);
    $39 = (__emval_get_method_caller(3,(2048|0))|0);
    store4(9552,$39);
    $41 = $39;
   } else {
    $$pre$i = load4(9552);
    $41 = $$pre$i;
   }
   __emval_incref(($31|0));
   store4($2,$32);
   __emval_incref(($35|0));
   $40 = ((($2)) + 8|0);
   store4($40,$36);
   __emval_call_void_method(($41|0),($25|0),(2834|0),($2|0));
   __emval_decref(($35|0));
   __emval_decref(($33|0));
   __emval_decref(($31|0));
   __emval_decref(($25|0));
   $42 = (_malloc(4)|0);
   $43 = ($42|0)==(0|0);
   L19: do {
    if ($43) {
     while(1) {
      $44 = load4(10072);
      $45 = (($44) + 0)|0;
      store4(10072,$45);
      $46 = ($44|0)==(0);
      if ($46) {
       $$lcssa$i = 0;
       break L19;
      }
      $47 = $44;
      FUNCTION_TABLE_v[$47 & 3]();
      $48 = (_malloc(4)|0);
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
   $50 = $0;
   store4($$lcssa$i,$50);
   store4($5,$25);
   __emval_incref(($25|0));
   $51 = ((($6)) + 4|0);
   $52 = (_malloc(4)|0);
   $53 = ($52|0)==(0|0);
   L24: do {
    if ($53) {
     while(1) {
      $54 = load4(10072);
      $55 = (($54) + 0)|0;
      store4(10072,$55);
      $56 = ($54|0)==(0);
      if ($56) {
       $$lcssa$i6 = 0;
       break L24;
      }
      $57 = $54;
      FUNCTION_TABLE_v[$57 & 3]();
      $58 = (_malloc(4)|0);
      $59 = ($58|0)==(0|0);
      if (!($59)) {
       $$lcssa$i6 = $58;
       break;
      }
     }
    } else {
     $$lcssa$i6 = $52;
    }
   } while(0);
   store4($6,$$lcssa$i6);
   $60 = ((($$lcssa$i6)) + 4|0);
   $61 = ((($6)) + 8|0);
   store4($61,$60);
   $62 = load4($$lcssa$i);
   store4($$lcssa$i6,$62);
   store4($51,$60);
   __Z12removeVnodesN10emscripten3valENSt3__26vectorIP5VNodeNS1_9allocatorIS4_EEEEjj($5,$6,0,0);
   $63 = ($$lcssa$i6|0)==(0|0);
   if (!($63)) {
    store4($51,$$lcssa$i6);
    _free($$lcssa$i6);
   }
   __emval_decref(($25|0));
   $64 = ($$lcssa$i|0)==(0|0);
   if (!($64)) {
    _free($$lcssa$i);
   }
  }
  __emval_decref(($25|0));
 }
 $65 = load4((9536));
 $66 = load4(9532);
 $67 = (($65) - ($66))|0;
 $68 = ($67|0)==(0);
 if ($68) {
  STACKTOP = sp;return ($1|0);
 }
 $69 = $66;
 $70 = (($67|0) / 40)&-1;
 $$in134 = $70;$73 = $69;
 while(1) {
  $71 = (($$in134) + -1)|0;
  $72 = (((($73) + (($71*40)|0)|0)) + 36|0);
  $74 = load4($72);
  $75 = ($74|0)==(0|0);
  if (!($75)) {
   FUNCTION_TABLE_v[$74 & 3]();
  }
  $76 = ($71|0)==(0);
  if ($76) {
   break;
  }
  $$pre136 = load4(9532);
  $$in134 = $71;$73 = $$pre136;
 }
 STACKTOP = sp;return ($1|0);
}
function __Z14patch_vnodePtrjj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = $0;
 $3 = $1;
 $4 = (__Z11patch_vnodeP5VNodeS0_($2,$3)|0);
 $5 = $4;
 return ($5|0);
}
function __Z16patch_elementPtrN10emscripten3valEj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i$i$i = 0, $$$i11$i$i = 0, $$$i19$i$i = 0, $$$i27$i$i = 0, $$$i35$i$i = 0, $$0$i$i$i = 0, $$0$i1$i$i = 0, $$0$i24$i$i = 0, $$018$i$i$i = 0, $$018$i22$i$i = 0, $$019$i$i$i = 0, $$019$i21$i$i = 0, $$lcssa$i$i$i = 0, $$lcssa$i17$i$i = 0, $$lcssa$i25$i$i = 0, $$lcssa$i33$i$i = 0, $$lcssa$i41$i$i = 0, $$lcssa$i9$i$i = 0, $$pn$i$i$i = 0, $$pn$i23$i$i = 0;
 var $$pre$i$i = 0, $$pre52$i$i = 0, $$sroa$045$0$i$i = 0, $$sroa$speculated$i$i$i = 0, $$sroa$speculated$i14$i$i = 0, $$sroa$speculated$i27$i$i = 0, $$sroa$speculated$i3$i$i = 0, $$sroa$speculated$i40$i$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0;
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
 var $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0;
 var $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i$i$i = 0, $phitmp$i$i$i$i = 0;
 var $phitmp$i$i32$i$i = 0, $phitmp$i$i6$i$i = 0, $phitmp$i15$i$i = 0, $phitmp$i28$i$i = 0, $phitmp$i4$i$i = 0, $phitmp$i41$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = load4($0);
 __emval_incref(($3|0));
 $4 = $1;
 $5 = $3;
 __emval_incref(($3|0));
 $6 = (_malloc(112)|0);
 $7 = ($6|0)==(0|0);
 L1: do {
  if ($7) {
   while(1) {
    $8 = load4(10072);
    $9 = (($8) + 0)|0;
    store4(10072,$9);
    $10 = ($8|0)==(0);
    if ($10) {
     $$lcssa$i$i$i = 0;
     break L1;
    }
    $11 = $8;
    FUNCTION_TABLE_v[$11 & 3]();
    $12 = (_malloc(112)|0);
    $13 = ($12|0)==(0|0);
    if (!($13)) {
     $$lcssa$i$i$i = $12;
     break;
    }
   }
  } else {
   $$lcssa$i$i$i = $6;
  }
 } while(0);
 $14 = ((($$lcssa$i$i$i)) + 36|0);
 $15 = ((($$lcssa$i$i$i)) + 40|0);
 store4($15,0);
 $16 = ((($$lcssa$i$i$i)) + 44|0);
 store4($16,0);
 ; store8($$lcssa$i$i$i,i64_const(0,0),4); store8($$lcssa$i$i$i+8|0,i64_const(0,0),4); store8($$lcssa$i$i$i+16|0,i64_const(0,0),4); store8($$lcssa$i$i$i+24|0,i64_const(0,0),4); store4($$lcssa$i$i$i+32|0,0,4);
 store4($14,$15);
 $17 = ((($$lcssa$i$i$i)) + 48|0);
 $18 = ((($$lcssa$i$i$i)) + 52|0);
 store4($18,0);
 $19 = ((($$lcssa$i$i$i)) + 56|0);
 store4($19,0);
 store4($17,$18);
 $20 = ((($$lcssa$i$i$i)) + 60|0);
 $21 = ((($$lcssa$i$i$i)) + 64|0);
 store4($21,0);
 $22 = ((($$lcssa$i$i$i)) + 68|0);
 store4($22,0);
 store4($20,$21);
 $23 = ((($$lcssa$i$i$i)) + 72|0);
 ; store8($23,i64_const(0,0),4); store8($23+8|0,i64_const(0,0),4); store8($23+16|0,i64_const(0,0),4);
 $24 = ((($$lcssa$i$i$i)) + 96|0);
 store4($24,(1));
 $25 = ((($$lcssa$i$i$i)) + 100|0);
 store4($25,0);
 $26 = ((($$lcssa$i$i$i)) + 104|0);
 store4($26,0);
 $27 = ((($$lcssa$i$i$i)) + 108|0);
 store4($27,0);
 __emval_incref(($3|0));
 $28 = load4($24);
 __emval_decref(($28|0));
 store4($24,$5);
 __emval_incref(($3|0));
 __Z7tagNameN10emscripten3valE($2,$3);
 $29 = ((($2)) + 11|0);
 $30 = load1($29);
 $31 = ($30<<24>>24)<(0);
 $32 = load4($2);
 $33 = $31 ? $32 : $2;
 $34 = ((($2)) + 4|0);
 $35 = load4($34);
 $36 = $30&255;
 $37 = $31 ? $35 : $36;
 $38 = ((($$lcssa$i$i$i)) + 11|0);
 $39 = load1($38);
 $40 = ($39<<24>>24)<(0);
 if ($40) {
  $41 = ((($$lcssa$i$i$i)) + 8|0);
  $42 = load4($41);
  $43 = $42 & 2147483647;
  $phitmp$i$i$i$i = (($43) + -1)|0;
  $44 = ((($$lcssa$i$i$i)) + 4|0);
  $45 = load4($44);
  $48 = $phitmp$i$i$i$i;$49 = $45;
 } else {
  $46 = $39&255;
  $48 = 10;$49 = $46;
 }
 $47 = (($48) - ($49))|0;
 $50 = ($47>>>0)<($37>>>0);
 if ($50) {
  $61 = (($37) - ($48))|0;
  $62 = (($61) + ($49))|0;
  $63 = (-18 - ($48))|0;
  $64 = ($63>>>0)<($62>>>0);
  if ($64) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  if ($40) {
   $65 = load4($$lcssa$i$i$i);
   $84 = $65;
  } else {
   $84 = $$lcssa$i$i$i;
  }
  $66 = ($48>>>0)<(2147483623);
  if ($66) {
   $67 = (($49) + ($37))|0;
   $68 = $48 << 1;
   $69 = ($67>>>0)<($68>>>0);
   $$sroa$speculated$i$i$i = $69 ? $68 : $67;
   $70 = ($$sroa$speculated$i$i$i>>>0)<(11);
   $71 = (($$sroa$speculated$i$i$i) + 16)|0;
   $72 = $71 & -16;
   $phitmp$i$i$i = $70 ? 11 : $72;
   $74 = $phitmp$i$i$i;
  } else {
   $74 = -17;
  }
  $73 = ($74|0)==(0);
  $$$i$i$i = $73 ? 1 : $74;
  $75 = (_malloc($$$i$i$i)|0);
  $76 = ($75|0)==(0|0);
  L21: do {
   if ($76) {
    while(1) {
     $77 = load4(10072);
     $78 = (($77) + 0)|0;
     store4(10072,$78);
     $79 = ($77|0)==(0);
     if ($79) {
      $$lcssa$i9$i$i = 0;
      break L21;
     }
     $80 = $77;
     FUNCTION_TABLE_v[$80 & 3]();
     $81 = (_malloc($$$i$i$i)|0);
     $82 = ($81|0)==(0|0);
     if (!($82)) {
      $$lcssa$i9$i$i = $81;
      break;
     }
    }
   } else {
    $$lcssa$i9$i$i = $75;
   }
  } while(0);
  $83 = ($49|0)==(0);
  if (!($83)) {
   _memcpy(($$lcssa$i9$i$i|0),($84|0),($49|0))|0;
  }
  $85 = ($37|0)==(0);
  if (!($85)) {
   $86 = (($$lcssa$i9$i$i) + ($49)|0);
   _memcpy(($86|0),($33|0),($37|0))|0;
  }
  $87 = ($48|0)==(10);
  if (!($87)) {
   _free($84);
  }
  store4($$lcssa$i$i$i,$$lcssa$i9$i$i);
  $88 = $74 | -2147483648;
  $89 = ((($$lcssa$i$i$i)) + 8|0);
  store4($89,$88);
  $90 = (($49) + ($37))|0;
  $91 = ((($$lcssa$i$i$i)) + 4|0);
  store4($91,$90);
  $92 = (($$lcssa$i9$i$i) + ($90)|0);
  store1($92,0);
 } else {
  $51 = ($37|0)==(0);
  if (!($51)) {
   if ($40) {
    $52 = load4($$lcssa$i$i$i);
    $54 = $52;
   } else {
    $54 = $$lcssa$i$i$i;
   }
   $53 = (($54) + ($49)|0);
   _memcpy(($53|0),($33|0),($37|0))|0;
   $55 = (($49) + ($37))|0;
   $56 = load1($38);
   $57 = ($56<<24>>24)<(0);
   if ($57) {
    $58 = ((($$lcssa$i$i$i)) + 4|0);
    store4($58,$55);
   } else {
    $59 = $55&255;
    store1($38,$59);
   }
   $60 = (($54) + ($55)|0);
   store1($60,0);
  }
 }
 $93 = load1($29);
 $94 = ($93<<24>>24)<(0);
 if ($94) {
  $95 = load4($2);
  _free($95);
 }
 __emval_decref(($3|0));
 $96 = load1($38);
 $97 = ($96<<24>>24)<(0);
 if ($97) {
  $100 = load4($$lcssa$i$i$i);
  $101 = ((($$lcssa$i$i$i)) + 4|0);
  $102 = load4($101);
  $103 = (($100) + ($102)|0);
  $105 = $100;$106 = $103;
 } else {
  $98 = $96&255;
  $99 = (($$lcssa$i$i$i) + ($98)|0);
  $105 = $$lcssa$i$i$i;$106 = $99;
 }
 $104 = ($105|0)==($106|0);
 if (!($104)) {
  $$sroa$045$0$i$i = $105;
  while(1) {
   $107 = load1($$sroa$045$0$i$i);
   $108 = $107 << 24 >> 24;
   $109 = (($108) + -65)|0;
   $110 = ($109>>>0)<(26);
   $111 = $108 | 32;
   $$0$i$i$i = $110 ? $111 : $108;
   $112 = $$0$i$i$i&255;
   store1($$sroa$045$0$i$i,$112);
   $113 = ((($$sroa$045$0$i$i)) + 1|0);
   $114 = ($113|0)==($106|0);
   if ($114) {
    break;
   } else {
    $$sroa$045$0$i$i = $113;
   }
  }
 }
 $115 = (__emval_new_cstring((9376|0))|0);
 $116 = (__emval_get_property(($3|0),($115|0))|0);
 __emval_decref(($115|0));
 $117 = (__Z9isDefinedN10emscripten3valE($116)|0);
 __emval_decref(($116|0));
 if ($117) {
  $118 = load1($38);
  $119 = ($118<<24>>24)<(0);
  if ($119) {
   $121 = ((($$lcssa$i$i$i)) + 8|0);
   $122 = load4($121);
   $123 = $122 & 2147483647;
   $124 = (($123) + -1)|0;
   $125 = ((($$lcssa$i$i$i)) + 4|0);
   $126 = load4($125);
   $$018$i$i$i = $126;$$019$i$i$i = $124;
  } else {
   $120 = $118&255;
   $$018$i$i$i = $120;$$019$i$i$i = 10;
  }
  $127 = ($$018$i$i$i|0)==($$019$i$i$i|0);
  do {
   if ($127) {
    if ($119) {
     $128 = load4($$lcssa$i$i$i);
     $147 = $128;
    } else {
     $147 = $$lcssa$i$i$i;
    }
    $129 = ($$019$i$i$i>>>0)<(2147483623);
    if ($129) {
     $130 = (($$019$i$i$i) + 1)|0;
     $131 = $$019$i$i$i << 1;
     $132 = ($130>>>0)<($131>>>0);
     $$sroa$speculated$i3$i$i = $132 ? $131 : $130;
     $133 = ($$sroa$speculated$i3$i$i>>>0)<(11);
     $134 = (($$sroa$speculated$i3$i$i) + 16)|0;
     $135 = $134 & -16;
     $phitmp$i4$i$i = $133 ? 11 : $135;
     $137 = $phitmp$i4$i$i;
    } else {
     $137 = -17;
    }
    $136 = ($137|0)==(0);
    $$$i11$i$i = $136 ? 1 : $137;
    $138 = (_malloc($$$i11$i$i)|0);
    $139 = ($138|0)==(0|0);
    L70: do {
     if ($139) {
      while(1) {
       $140 = load4(10072);
       $141 = (($140) + 0)|0;
       store4(10072,$141);
       $142 = ($140|0)==(0);
       if ($142) {
        $$lcssa$i17$i$i = 0;
        break L70;
       }
       $143 = $140;
       FUNCTION_TABLE_v[$143 & 3]();
       $144 = (_malloc($$$i11$i$i)|0);
       $145 = ($144|0)==(0|0);
       if (!($145)) {
        $$lcssa$i17$i$i = $144;
        break;
       }
      }
     } else {
      $$lcssa$i17$i$i = $138;
     }
    } while(0);
    $146 = ($$019$i$i$i|0)==(0);
    if ($146) {
     label = 52;
    } else {
     _memcpy(($$lcssa$i17$i$i|0),($147|0),($$019$i$i$i|0))|0;
     $148 = ($$019$i$i$i|0)==(10);
     if (!($148)) {
      label = 52;
     }
    }
    if ((label|0) == 52) {
     _free($147);
    }
    store4($$lcssa$i$i$i,$$lcssa$i17$i$i);
    $149 = $137 | -2147483648;
    $150 = ((($$lcssa$i$i$i)) + 8|0);
    store4($150,$149);
    $350 = $$lcssa$i17$i$i;
    label = 57;
   } else {
    if ($119) {
     $$pre$i$i = load4($$lcssa$i$i$i);
     $350 = $$pre$i$i;
     label = 57;
     break;
    } else {
     $151 = (($$018$i$i$i) + 1)|0;
     $152 = $151&255;
     store1($38,$152);
     $$pn$i$i$i = $$lcssa$i$i$i;
     break;
    }
   }
  } while(0);
  if ((label|0) == 57) {
   $153 = (($$018$i$i$i) + 1)|0;
   $154 = ((($$lcssa$i$i$i)) + 4|0);
   store4($154,$153);
   $$pn$i$i$i = $350;
  }
  $$0$i1$i$i = (($$pn$i$i$i) + ($$018$i$i$i)|0);
  store1($$0$i1$i$i,35);
  $155 = ((($$0$i1$i$i)) + 1|0);
  store1($155,0);
  $156 = (__emval_new_cstring((9376|0))|0);
  $157 = (__emval_get_property(($3|0),($156|0))|0);
  __emval_decref(($156|0));
  __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($2,$157);
  $158 = ((($2)) + 11|0);
  $159 = load1($158);
  $160 = ($159<<24>>24)<(0);
  $161 = load4($2);
  $162 = $160 ? $161 : $2;
  $163 = ((($2)) + 4|0);
  $164 = load4($163);
  $165 = $159&255;
  $166 = $160 ? $164 : $165;
  $167 = load1($38);
  $168 = ($167<<24>>24)<(0);
  if ($168) {
   $169 = ((($$lcssa$i$i$i)) + 8|0);
   $170 = load4($169);
   $171 = $170 & 2147483647;
   $phitmp$i$i6$i$i = (($171) + -1)|0;
   $172 = ((($$lcssa$i$i$i)) + 4|0);
   $173 = load4($172);
   $176 = $phitmp$i$i6$i$i;$177 = $173;
  } else {
   $174 = $167&255;
   $176 = 10;$177 = $174;
  }
  $175 = (($176) - ($177))|0;
  $178 = ($175>>>0)<($166>>>0);
  if ($178) {
   $189 = (($166) - ($176))|0;
   $190 = (($189) + ($177))|0;
   $191 = (-18 - ($176))|0;
   $192 = ($191>>>0)<($190>>>0);
   if ($192) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($168) {
    $193 = load4($$lcssa$i$i$i);
    $212 = $193;
   } else {
    $212 = $$lcssa$i$i$i;
   }
   $194 = ($176>>>0)<(2147483623);
   if ($194) {
    $195 = (($177) + ($166))|0;
    $196 = $176 << 1;
    $197 = ($195>>>0)<($196>>>0);
    $$sroa$speculated$i14$i$i = $197 ? $196 : $195;
    $198 = ($$sroa$speculated$i14$i$i>>>0)<(11);
    $199 = (($$sroa$speculated$i14$i$i) + 16)|0;
    $200 = $199 & -16;
    $phitmp$i15$i$i = $198 ? 11 : $200;
    $202 = $phitmp$i15$i$i;
   } else {
    $202 = -17;
   }
   $201 = ($202|0)==(0);
   $$$i19$i$i = $201 ? 1 : $202;
   $203 = (_malloc($$$i19$i$i)|0);
   $204 = ($203|0)==(0|0);
   L102: do {
    if ($204) {
     while(1) {
      $205 = load4(10072);
      $206 = (($205) + 0)|0;
      store4(10072,$206);
      $207 = ($205|0)==(0);
      if ($207) {
       $$lcssa$i25$i$i = 0;
       break L102;
      }
      $208 = $205;
      FUNCTION_TABLE_v[$208 & 3]();
      $209 = (_malloc($$$i19$i$i)|0);
      $210 = ($209|0)==(0|0);
      if (!($210)) {
       $$lcssa$i25$i$i = $209;
       break;
      }
     }
    } else {
     $$lcssa$i25$i$i = $203;
    }
   } while(0);
   $211 = ($177|0)==(0);
   if (!($211)) {
    _memcpy(($$lcssa$i25$i$i|0),($212|0),($177|0))|0;
   }
   $213 = ($166|0)==(0);
   if (!($213)) {
    $214 = (($$lcssa$i25$i$i) + ($177)|0);
    _memcpy(($214|0),($162|0),($166|0))|0;
   }
   $215 = ($176|0)==(10);
   if (!($215)) {
    _free($212);
   }
   store4($$lcssa$i$i$i,$$lcssa$i25$i$i);
   $216 = $202 | -2147483648;
   $217 = ((($$lcssa$i$i$i)) + 8|0);
   store4($217,$216);
   $218 = (($177) + ($166))|0;
   $219 = ((($$lcssa$i$i$i)) + 4|0);
   store4($219,$218);
   $220 = (($$lcssa$i25$i$i) + ($218)|0);
   store1($220,0);
  } else {
   $179 = ($166|0)==(0);
   if (!($179)) {
    if ($168) {
     $180 = load4($$lcssa$i$i$i);
     $182 = $180;
    } else {
     $182 = $$lcssa$i$i$i;
    }
    $181 = (($182) + ($177)|0);
    _memcpy(($181|0),($162|0),($166|0))|0;
    $183 = (($177) + ($166))|0;
    $184 = load1($38);
    $185 = ($184<<24>>24)<(0);
    if ($185) {
     $186 = ((($$lcssa$i$i$i)) + 4|0);
     store4($186,$183);
    } else {
     $187 = $183&255;
     store1($38,$187);
    }
    $188 = (($182) + ($183)|0);
    store1($188,0);
   }
  }
  $221 = load1($158);
  $222 = ($221<<24>>24)<(0);
  if ($222) {
   $223 = load4($2);
   _free($223);
  }
  __emval_decref(($157|0));
 }
 $224 = (__emval_new_cstring((3149|0))|0);
 $225 = (__emval_get_property(($3|0),($224|0))|0);
 __emval_decref(($224|0));
 $226 = (__Z9isDefinedN10emscripten3valE($225)|0);
 __emval_decref(($225|0));
 if (!($226)) {
  __emval_decref(($3|0));
  $348 = (__Z11patch_vnodeP5VNodeS0_($$lcssa$i$i$i,$4)|0);
  __emval_decref(($3|0));
  $349 = $348;
  STACKTOP = sp;return ($349|0);
 }
 $227 = load1($38);
 $228 = ($227<<24>>24)<(0);
 if ($228) {
  $230 = ((($$lcssa$i$i$i)) + 8|0);
  $231 = load4($230);
  $232 = $231 & 2147483647;
  $233 = (($232) + -1)|0;
  $234 = ((($$lcssa$i$i$i)) + 4|0);
  $235 = load4($234);
  $$018$i22$i$i = $235;$$019$i21$i$i = $233;
 } else {
  $229 = $227&255;
  $$018$i22$i$i = $229;$$019$i21$i$i = 10;
 }
 $236 = ($$018$i22$i$i|0)==($$019$i21$i$i|0);
 do {
  if ($236) {
   if ($228) {
    $237 = load4($$lcssa$i$i$i);
    $256 = $237;
   } else {
    $256 = $$lcssa$i$i$i;
   }
   $238 = ($$019$i21$i$i>>>0)<(2147483623);
   if ($238) {
    $239 = (($$019$i21$i$i) + 1)|0;
    $240 = $$019$i21$i$i << 1;
    $241 = ($239>>>0)<($240>>>0);
    $$sroa$speculated$i27$i$i = $241 ? $240 : $239;
    $242 = ($$sroa$speculated$i27$i$i>>>0)<(11);
    $243 = (($$sroa$speculated$i27$i$i) + 16)|0;
    $244 = $243 & -16;
    $phitmp$i28$i$i = $242 ? 11 : $244;
    $246 = $phitmp$i28$i$i;
   } else {
    $246 = -17;
   }
   $245 = ($246|0)==(0);
   $$$i27$i$i = $245 ? 1 : $246;
   $247 = (_malloc($$$i27$i$i)|0);
   $248 = ($247|0)==(0|0);
   L145: do {
    if ($248) {
     while(1) {
      $249 = load4(10072);
      $250 = (($249) + 0)|0;
      store4(10072,$250);
      $251 = ($249|0)==(0);
      if ($251) {
       $$lcssa$i33$i$i = 0;
       break L145;
      }
      $252 = $249;
      FUNCTION_TABLE_v[$252 & 3]();
      $253 = (_malloc($$$i27$i$i)|0);
      $254 = ($253|0)==(0|0);
      if (!($254)) {
       $$lcssa$i33$i$i = $253;
       break;
      }
     }
    } else {
     $$lcssa$i33$i$i = $247;
    }
   } while(0);
   $255 = ($$019$i21$i$i|0)==(0);
   if ($255) {
    label = 102;
   } else {
    _memcpy(($$lcssa$i33$i$i|0),($256|0),($$019$i21$i$i|0))|0;
    $257 = ($$019$i21$i$i|0)==(10);
    if (!($257)) {
     label = 102;
    }
   }
   if ((label|0) == 102) {
    _free($256);
   }
   store4($$lcssa$i$i$i,$$lcssa$i33$i$i);
   $258 = $246 | -2147483648;
   $259 = ((($$lcssa$i$i$i)) + 8|0);
   store4($259,$258);
   $351 = $$lcssa$i33$i$i;
   label = 107;
  } else {
   if ($228) {
    $$pre52$i$i = load4($$lcssa$i$i$i);
    $351 = $$pre52$i$i;
    label = 107;
    break;
   } else {
    $260 = (($$018$i22$i$i) + 1)|0;
    $261 = $260&255;
    store1($38,$261);
    $$pn$i23$i$i = $$lcssa$i$i$i;
    break;
   }
  }
 } while(0);
 if ((label|0) == 107) {
  $262 = (($$018$i22$i$i) + 1)|0;
  $263 = ((($$lcssa$i$i$i)) + 4|0);
  store4($263,$262);
  $$pn$i23$i$i = $351;
 }
 $$0$i24$i$i = (($$pn$i23$i$i) + ($$018$i22$i$i)|0);
 store1($$0$i24$i$i,46);
 $264 = ((($$0$i24$i$i)) + 1|0);
 store1($264,0);
 $265 = (__emval_new_cstring((3149|0))|0);
 $266 = (__emval_get_property(($3|0),($265|0))|0);
 __emval_decref(($265|0));
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($2,$266);
 $267 = ((($2)) + 11|0);
 $268 = load1($267);
 $269 = ($268<<24>>24)<(0);
 $270 = load4($2);
 $271 = $269 ? $270 : $2;
 $272 = ((($2)) + 4|0);
 $273 = load4($272);
 $274 = $268&255;
 $275 = $269 ? $273 : $274;
 $276 = load1($38);
 $277 = ($276<<24>>24)<(0);
 if ($277) {
  $278 = ((($$lcssa$i$i$i)) + 8|0);
  $279 = load4($278);
  $280 = $279 & 2147483647;
  $phitmp$i$i32$i$i = (($280) + -1)|0;
  $281 = ((($$lcssa$i$i$i)) + 4|0);
  $282 = load4($281);
  $285 = $phitmp$i$i32$i$i;$286 = $282;
 } else {
  $283 = $276&255;
  $285 = 10;$286 = $283;
 }
 $284 = (($285) - ($286))|0;
 $287 = ($284>>>0)<($275>>>0);
 if ($287) {
  $298 = (($275) - ($285))|0;
  $299 = (($298) + ($286))|0;
  $300 = (-18 - ($285))|0;
  $301 = ($300>>>0)<($299>>>0);
  if ($301) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  if ($277) {
   $302 = load4($$lcssa$i$i$i);
   $321 = $302;
  } else {
   $321 = $$lcssa$i$i$i;
  }
  $303 = ($285>>>0)<(2147483623);
  if ($303) {
   $304 = (($286) + ($275))|0;
   $305 = $285 << 1;
   $306 = ($304>>>0)<($305>>>0);
   $$sroa$speculated$i40$i$i = $306 ? $305 : $304;
   $307 = ($$sroa$speculated$i40$i$i>>>0)<(11);
   $308 = (($$sroa$speculated$i40$i$i) + 16)|0;
   $309 = $308 & -16;
   $phitmp$i41$i$i = $307 ? 11 : $309;
   $311 = $phitmp$i41$i$i;
  } else {
   $311 = -17;
  }
  $310 = ($311|0)==(0);
  $$$i35$i$i = $310 ? 1 : $311;
  $312 = (_malloc($$$i35$i$i)|0);
  $313 = ($312|0)==(0|0);
  L177: do {
   if ($313) {
    while(1) {
     $314 = load4(10072);
     $315 = (($314) + 0)|0;
     store4(10072,$315);
     $316 = ($314|0)==(0);
     if ($316) {
      $$lcssa$i41$i$i = 0;
      break L177;
     }
     $317 = $314;
     FUNCTION_TABLE_v[$317 & 3]();
     $318 = (_malloc($$$i35$i$i)|0);
     $319 = ($318|0)==(0|0);
     if (!($319)) {
      $$lcssa$i41$i$i = $318;
      break;
     }
    }
   } else {
    $$lcssa$i41$i$i = $312;
   }
  } while(0);
  $320 = ($286|0)==(0);
  if (!($320)) {
   _memcpy(($$lcssa$i41$i$i|0),($321|0),($286|0))|0;
  }
  $322 = ($275|0)==(0);
  if (!($322)) {
   $323 = (($$lcssa$i41$i$i) + ($286)|0);
   _memcpy(($323|0),($271|0),($275|0))|0;
  }
  $324 = ($285|0)==(10);
  if (!($324)) {
   _free($321);
  }
  store4($$lcssa$i$i$i,$$lcssa$i41$i$i);
  $325 = $311 | -2147483648;
  $326 = ((($$lcssa$i$i$i)) + 8|0);
  store4($326,$325);
  $327 = (($286) + ($275))|0;
  $328 = ((($$lcssa$i$i$i)) + 4|0);
  store4($328,$327);
  $329 = (($$lcssa$i41$i$i) + ($327)|0);
  store1($329,0);
 } else {
  $288 = ($275|0)==(0);
  if (!($288)) {
   if ($277) {
    $289 = load4($$lcssa$i$i$i);
    $291 = $289;
   } else {
    $291 = $$lcssa$i$i$i;
   }
   $290 = (($291) + ($286)|0);
   _memcpy(($290|0),($271|0),($275|0))|0;
   $292 = (($286) + ($275))|0;
   $293 = load1($38);
   $294 = ($293<<24>>24)<(0);
   if ($294) {
    $295 = ((($$lcssa$i$i$i)) + 4|0);
    store4($295,$292);
   } else {
    $296 = $292&255;
    store1($38,$296);
   }
   $297 = (($291) + ($292)|0);
   store1($297,0);
  }
 }
 $330 = load1($267);
 $331 = ($330<<24>>24)<(0);
 if ($331) {
  $332 = load4($2);
  _free($332);
 }
 __emval_decref(($266|0));
 $333 = load1($38);
 $334 = ($333<<24>>24)<(0);
 if ($334) {
  $335 = load4($$lcssa$i$i$i);
  $336 = ((($$lcssa$i$i$i)) + 4|0);
  $337 = load4($336);
  $340 = $335;$341 = $337;
 } else {
  $338 = $333&255;
  $340 = $$lcssa$i$i$i;$341 = $338;
 }
 $339 = (($340) + ($341)|0);
 $342 = ($341|0)==(0);
 if ($342) {
  __emval_decref(($3|0));
  $348 = (__Z11patch_vnodeP5VNodeS0_($$lcssa$i$i$i,$4)|0);
  __emval_decref(($3|0));
  $349 = $348;
  STACKTOP = sp;return ($349|0);
 } else {
  $344 = $340;
 }
 while(1) {
  $343 = load1($344);
  $345 = ($343<<24>>24)==(32);
  if ($345) {
   store1($344,46);
  }
  $346 = ((($344)) + 1|0);
  $347 = ($346|0)==($339|0);
  if ($347) {
   break;
  } else {
   $344 = $346;
  }
 }
 __emval_decref(($3|0));
 $348 = (__Z11patch_vnodeP5VNodeS0_($$lcssa$i$i$i,$4)|0);
 __emval_decref(($3|0));
 $349 = $348;
 STACKTOP = sp;return ($349|0);
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var $1 = 0, $10 = i64(), $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = i64(), $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 (___cxa_begin_catch(($0|0))|0);
 $1 = (_pthread_once((10064|0),(2|0))|0);
 $2 = ($1|0)==(0);
 if (!($2)) {
  _abort_message(8964,$vararg_buffer);
  // unreachable;
 }
 $3 = load4(10068);
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
 $14 = load4(2436);
 $15 = (($14) + 0)|0;
 store4(2436,$15);
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
            $60 = load4(10072);
            $61 = (($60) + 0)|0;
            store4(10072,$61);
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
          $114 = load4(10072);
          $115 = (($114) + 0)|0;
          store4(10072,$115);
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
     $221 = load4(10072);
     $222 = (($221) + 0)|0;
     store4(10072,$222);
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
       $241 = load4(10072);
       $242 = (($241) + 0)|0;
       store4(10072,$242);
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
       $269 = load4(10072);
       $270 = (($269) + 0)|0;
       store4(10072,$270);
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
          $60 = load4(10072);
          $61 = (($60) + 0)|0;
          store4(10072,$61);
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
     $170 = load4(10072);
     $171 = (($170) + 0)|0;
     store4(10072,$171);
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
       $190 = load4(10072);
       $191 = (($190) + 0)|0;
       store4(10072,$191);
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
    $150 = load4(10072);
    $151 = (($150) + 0)|0;
    store4(10072,$151);
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
      $170 = load4(10072);
      $171 = (($170) + 0)|0;
      store4(10072,$171);
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
      $198 = load4(10072);
      $199 = (($198) + 0)|0;
      store4(10072,$199);
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
    $150 = load4(10072);
    $151 = (($150) + 0)|0;
    store4(10072,$151);
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
      $170 = load4(10072);
      $171 = (($170) + 0)|0;
      store4(10072,$171);
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
     $9 = load4(10072);
     $10 = (($9) + 0)|0;
     store4(10072,$10);
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
       $29 = load4(10072);
       $30 = (($29) + 0)|0;
       store4(10072,$30);
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
    $97 = load4(10072);
    $98 = (($97) + 0)|0;
    store4(10072,$98);
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
    $2 = load4(10072);
    $3 = (($2) + 0)|0;
    store4(10072,$3);
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
 $11 = (FUNCTION_TABLE_ii[$10 & 31]($3)|0);
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
     $14 = load4(10072);
     $15 = (($14) + 0)|0;
     store4(10072,$15);
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
 $27 = (FUNCTION_TABLE_iii[$4 & 31]($1,$3)|0);
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
     $16 = load4(10072);
     $17 = (($16) + 0)|0;
     store4(10072,$17);
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
     $38 = load4(10072);
     $39 = (($38) + 0)|0;
     store4(10072,$39);
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
 FUNCTION_TABLE_viii[$6 & 15]($1,$4,$5);
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
 $74 = (__emval_take_value((1696|0),($2|0))|0);
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
    $10 = load4(10072);
    $11 = (($10) + 0)|0;
    store4(10072,$11);
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
      $30 = load4(10072);
      $31 = (($30) + 0)|0;
      store4(10072,$31);
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
    $2 = load4(10072);
    $3 = (($2) + 0)|0;
    store4(10072,$3);
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
 $11 = (FUNCTION_TABLE_ii[$10 & 31]($3)|0);
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
     $14 = load4(10072);
     $15 = (($14) + 0)|0;
     store4(10072,$15);
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
 $27 = (FUNCTION_TABLE_iii[$4 & 31]($1,$3)|0);
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
     $16 = load4(10072);
     $17 = (($16) + 0)|0;
     store4(10072,$17);
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
 FUNCTION_TABLE_viii[$6 & 15]($1,$4,$5);
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
    $2 = load4(10072);
    $3 = (($2) + 0)|0;
    store4(10072,$3);
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
     $15 = load4(10072);
     $16 = (($15) + 0)|0;
     store4(10072,$16);
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
     $49 = load4(10072);
     $50 = (($49) + 0)|0;
     store4(10072,$50);
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
    $6 = load4(10072);
    $7 = (($6) + 0)|0;
    store4(10072,$7);
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
    $6 = load4(10072);
    $7 = (($6) + 0)|0;
    store4(10072,$7);
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
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE21__push_back_slow_pathIRKS1_EEvOT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$0$i = 0, $$06$i$i = 0, $$lcssa$i = 0, $$pre$i = 0, $$pre40 = 0, $$sroa$7$0 = 0, $$sroa$speculated$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = load4($0);
 $5 = (($3) - ($4))|0;
 $6 = (($5|0) / 112)&-1;
 $7 = (($6) + 1)|0;
 $8 = ($7>>>0)>(38347922);
 if ($8) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $9 = ((($0)) + 8|0);
 $10 = load4($9);
 $11 = (($10) - ($4))|0;
 $12 = (($11|0) / 112)&-1;
 $13 = ($12>>>0)<(19173961);
 $14 = $12 << 1;
 $15 = ($14>>>0)<($7>>>0);
 $$sroa$speculated$i = $15 ? $7 : $14;
 $$0$i = $13 ? $$sroa$speculated$i : 38347922;
 $16 = ($$0$i|0)==(0);
 if ($16) {
  $30 = 0;
 } else {
  $17 = ($$0$i>>>0)>(38347922);
  if ($17) {
   $18 = (___cxa_allocate_exception(4)|0);
   store4($18,(2528));
   ___cxa_throw(($18|0),(1616|0),(13|0));
   // unreachable;
  }
  $19 = ($$0$i*112)|0;
  $20 = ($19|0)==(0);
  $$$i = $20 ? 1 : $19;
  $21 = (_malloc($$$i)|0);
  $22 = ($21|0)==(0|0);
  L9: do {
   if ($22) {
    while(1) {
     $23 = load4(10072);
     $24 = (($23) + 0)|0;
     store4(10072,$24);
     $25 = ($23|0)==(0);
     if ($25) {
      $$lcssa$i = 0;
      break L9;
     }
     $26 = $23;
     FUNCTION_TABLE_v[$26 & 3]();
     $27 = (_malloc($$$i)|0);
     $28 = ($27|0)==(0|0);
     if (!($28)) {
      $$lcssa$i = $27;
      break;
     }
    }
   } else {
    $$lcssa$i = $21;
   }
  } while(0);
  $30 = $$lcssa$i;
 }
 $29 = (($30) + (($6*112)|0)|0);
 $31 = $29;
 $32 = (($30) + (($$0$i*112)|0)|0);
 $33 = $32;
 __ZN5VNodeC2ERKS_($29,$1);
 $34 = ((($29)) + 112|0);
 $35 = $34;
 $36 = load4($0);
 $37 = load4($2);
 $38 = ($37|0)==($36|0);
 if ($38) {
  $39 = $36;
  $47 = $31;$49 = $39;$51 = $36;
 } else {
  $$06$i$i = $37;$$sroa$7$0 = $31;$41 = $29;
  while(1) {
   $40 = ((($41)) + -112|0);
   $42 = ((($$06$i$i)) + -112|0);
   __ZN5VNodeC2ERKS_($40,$42);
   $43 = $$sroa$7$0;
   $44 = ((($43)) + -112|0);
   $45 = $44;
   $46 = ($42|0)==($36|0);
   if ($46) {
    break;
   } else {
    $$06$i$i = $42;$$sroa$7$0 = $45;$41 = $44;
   }
  }
  $$pre$i = load4($0);
  $$pre40 = load4($2);
  $47 = $45;$49 = $$pre$i;$51 = $$pre40;
 }
 store4($0,$47);
 store4($2,$35);
 store4($9,$33);
 $48 = $49;
 $50 = ($51|0)==($48|0);
 if (!($50)) {
  $53 = $51;
  while(1) {
   $52 = ((($53)) + -112|0);
   __ZN5VNodeD2Ev($52);
   $54 = ($52|0)==($48|0);
   if ($54) {
    break;
   } else {
    $53 = $52;
   }
  }
 }
 $55 = ($49|0)==(0);
 if ($55) {
  return;
 }
 $56 = $49;
 _free($56);
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
function __ZN10emscripten8internal15raw_constructorI5VNodeJEEEPT_DpNS0_11BindingTypeIT0_E8WireTypeE() {
 var $$lcssa$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_malloc(112)|0);
 $1 = ($0|0)==(0|0);
 L1: do {
  if ($1) {
   while(1) {
    $2 = load4(10072);
    $3 = (($2) + 0)|0;
    store4(10072,$3);
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
     $15 = load4(10072);
     $16 = (($15) + 0)|0;
     store4(10072,$16);
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
     $49 = load4(10072);
     $50 = (($49) + 0)|0;
     store4(10072,$50);
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
    $6 = load4(10072);
    $7 = (($6) + 0)|0;
    store4(10072,$7);
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
      $58 = load4(10072);
      $59 = (($58) + 0)|0;
      store4(10072,$59);
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
    $113 = load4(10072);
    $114 = (($113) + 0)|0;
    store4(10072,$114);
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
function __ZN10emscripten8internal12GetterPolicyIM5VNodeKFNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEvEE3getIS2_EEPS7_RKS9_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$elt3 = 0, $$lcssa$i = 0, $$unpack = 0, $$unpack4 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
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
 } else {
  $7 = load4($4);
  $8 = (($7) + ($$unpack)|0);
  $9 = load4($8);
  $11 = $9;
 }
 FUNCTION_TABLE_vii[$11 & 7]($2,$4);
 $12 = (_malloc(12)|0);
 $13 = ($12|0)==(0|0);
 L5: do {
  if ($13) {
   while(1) {
    $14 = load4(10072);
    $15 = (($14) + 0)|0;
    store4(10072,$15);
    $16 = ($14|0)==(0);
    if ($16) {
     $$lcssa$i = 0;
     break L5;
    }
    $17 = $14;
    FUNCTION_TABLE_v[$17 & 3]();
    $18 = (_malloc(12)|0);
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
 $20 = ((($$lcssa$i)) + 4|0);
 $21 = ((($$lcssa$i)) + 8|0);
 $22 = load4($2);
 store4($$lcssa$i,$22);
 $23 = ((($2)) + 4|0);
 $24 = load4($23);
 store4($20,$24);
 $25 = ((($2)) + 8|0);
 $26 = load4($25);
 store4($21,$26);
 STACKTOP = sp;return ($$lcssa$i|0);
}
function __ZN10emscripten8internal12SetterPolicyIM5VNodeFvNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEEE3setIS2_EEvRKS9_RT_PS7_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$07$i$i$i = 0, $$elt4 = 0, $$lcssa$i$i = 0, $$pre$i8 = 0, $$unpack = 0, $$unpack5 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $$unpack = load4($0);
 $$elt4 = ((($0)) + 4|0);
 $$unpack5 = load4($$elt4);
 $4 = $$unpack5 >> 1;
 $5 = (($1) + ($4)|0);
 $6 = $$unpack5 & 1;
 $7 = ($6|0)==(0);
 if ($7) {
  $11 = $$unpack;
  $39 = $11;
 } else {
  $8 = load4($5);
  $9 = (($8) + ($$unpack)|0);
  $10 = load4($9);
  $39 = $10;
 }
 store4($3,0);
 $12 = ((($3)) + 4|0);
 store4($12,0);
 $13 = ((($3)) + 8|0);
 store4($13,0);
 $14 = ((($2)) + 4|0);
 $15 = load4($14);
 $16 = load4($2);
 $17 = (($15) - ($16))|0;
 $18 = (($17|0) / 112)&-1;
 $19 = ($17|0)==(0);
 if (!($19)) {
  $20 = ($18>>>0)>(38347922);
  if ($20) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $21 = (_malloc($17)|0);
  $22 = ($21|0)==(0|0);
  L10: do {
   if ($22) {
    while(1) {
     $23 = load4(10072);
     $24 = (($23) + 0)|0;
     store4(10072,$24);
     $25 = ($23|0)==(0);
     if ($25) {
      $$lcssa$i$i = 0;
      break L10;
     }
     $26 = $23;
     FUNCTION_TABLE_v[$26 & 3]();
     $27 = (_malloc($17)|0);
     $28 = ($27|0)==(0|0);
     if (!($28)) {
      $$lcssa$i$i = $27;
      break;
     }
    }
   } else {
    $$lcssa$i$i = $21;
   }
  } while(0);
  store4($12,$$lcssa$i$i);
  store4($3,$$lcssa$i$i);
  $29 = (($$lcssa$i$i) + (($18*112)|0)|0);
  $30 = ((($3)) + 8|0);
  store4($30,$29);
  $31 = load4($2);
  $32 = load4($14);
  $33 = ($31|0)==($32|0);
  if (!($33)) {
   $$07$i$i$i = $31;$34 = $$lcssa$i$i;
   while(1) {
    __ZN5VNodeC2ERKS_($34,$$07$i$i$i);
    $35 = ((($$07$i$i$i)) + 112|0);
    $36 = load4($12);
    $37 = ((($36)) + 112|0);
    store4($12,$37);
    $38 = ($35|0)==($32|0);
    if ($38) {
     break;
    } else {
     $$07$i$i$i = $35;$34 = $37;
    }
   }
  }
 }
 FUNCTION_TABLE_vii[$39 & 7]($5,$3);
 $40 = load4($3);
 $41 = ($40|0)==(0|0);
 if ($41) {
  STACKTOP = sp;return;
 }
 $42 = load4($12);
 $43 = ($42|0)==($40|0);
 if ($43) {
  $48 = $40;
 } else {
  $45 = $42;
  while(1) {
   $44 = ((($45)) + -112|0);
   store4($12,$44);
   __ZN5VNodeD2Ev($44);
   $46 = load4($12);
   $47 = ($46|0)==($40|0);
   if ($47) {
    break;
   } else {
    $45 = $46;
   }
  }
  $$pre$i8 = load4($3);
  $48 = $$pre$i8;
 }
 _free($48);
 STACKTOP = sp;return;
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
   store4($30,(2528));
   ___cxa_throw(($30|0),(1616|0),(13|0));
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
     $35 = load4(10072);
     $36 = (($35) + 0)|0;
     store4(10072,$36);
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
    $13 = load4(10072);
    $14 = (($13) + 0)|0;
    store4(10072,$14);
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
 var $$$i$i = 0, $$$i$i$i = 0, $$$i10$i = 0, $$$i19$i = 0, $$$i2$i = 0, $$$i27$i = 0, $$$i35$i = 0, $$0$i$i$i = 0, $$02$val$cast = 0, $$lcssa$i$i = 0, $$lcssa$i$i$i = 0, $$lcssa$i17$i = 0, $$lcssa$i25$i = 0, $$lcssa$i33$i = 0, $$lcssa$i8$i = 0, $$sroa$speculated$i$i = 0, $$sroa$speculated$i$i$i = 0, $$sroa$speculated$i11$i = 0, $$sroa$speculated$i25$i = 0, $$sroa$speculated$i39$i = 0;
 var $$sroa$speculated$i53$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0;
 var $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0;
 var $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0;
 var $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0;
 var $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0;
 var $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0;
 var $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0;
 var $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0;
 var $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0;
 var $96 = 0, $97 = 0, $98 = 0, $99 = 0, $phitmp$i$i = 0, $phitmp$i$i$i = 0, $phitmp$i$i18$i = 0, $phitmp$i$i32$i = 0, $phitmp$i$i4$i = 0, $phitmp$i$i46$i = 0, $phitmp$i12$i = 0, $phitmp$i26$i = 0, $phitmp$i40$i = 0, $phitmp$i54$i = 0, $scevgep$i$i$i$i = 0, $scevgep$i$i$i$i$i$i = 0, $scevgep4$i$i$i$i = 0, $scevgep4$i$i$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp + 4|0;
 $4 = sp;
 $5 = load4($0);
 $6 = (($5) + (($1*112)|0)|0);
 $7 = ($6|0)==($2|0);
 do {
  if ($7) {
  } else {
   $8 = ((($2)) + 11|0);
   $9 = load1($8);
   $10 = ($9<<24>>24)<(0);
   $11 = load4($2);
   $12 = $10 ? $11 : $2;
   $13 = ((($2)) + 4|0);
   $14 = load4($13);
   $15 = $9&255;
   $16 = $10 ? $14 : $15;
   $17 = ((($6)) + 11|0);
   $18 = load1($17);
   $19 = ($18<<24>>24)<(0);
   if ($19) {
    $20 = (((($5) + (($1*112)|0)|0)) + 8|0);
    $21 = load4($20);
    $22 = $21 & 2147483647;
    $phitmp$i$i$i = (($22) + -1)|0;
    $24 = $phitmp$i$i$i;
   } else {
    $24 = 10;
   }
   $23 = ($16>>>0)>($24>>>0);
   do {
    if ($23) {
     $33 = (($16) - ($24))|0;
     $34 = (-18 - ($24))|0;
     $35 = ($34>>>0)<($33>>>0);
     if ($35) {
      __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
      // unreachable;
     }
     if ($19) {
      $36 = load4($6);
      $55 = $36;
     } else {
      $55 = $6;
     }
     $37 = ($24>>>0)<(2147483623);
     if ($37) {
      $38 = $24 << 1;
      $39 = ($16>>>0)<($38>>>0);
      $$sroa$speculated$i$i = $39 ? $38 : $16;
      $40 = ($$sroa$speculated$i$i>>>0)<(11);
      $41 = (($$sroa$speculated$i$i) + 16)|0;
      $42 = $41 & -16;
      $phitmp$i$i = $40 ? 11 : $42;
      $44 = $phitmp$i$i;
     } else {
      $44 = -17;
     }
     $43 = ($44|0)==(0);
     $$$i$i = $43 ? 1 : $44;
     $45 = (_malloc($$$i$i)|0);
     $46 = ($45|0)==(0|0);
     L19: do {
      if ($46) {
       while(1) {
        $47 = load4(10072);
        $48 = (($47) + 0)|0;
        store4(10072,$48);
        $49 = ($47|0)==(0);
        if ($49) {
         $$lcssa$i$i = 0;
         break L19;
        }
        $50 = $47;
        FUNCTION_TABLE_v[$50 & 3]();
        $51 = (_malloc($$$i$i)|0);
        $52 = ($51|0)==(0|0);
        if (!($52)) {
         $$lcssa$i$i = $51;
         break;
        }
       }
      } else {
       $$lcssa$i$i = $45;
      }
     } while(0);
     $53 = ($16|0)==(0);
     if (!($53)) {
      _memcpy(($$lcssa$i$i|0),($12|0),($16|0))|0;
     }
     $54 = ($24|0)==(10);
     if (!($54)) {
      _free($55);
     }
     store4($6,$$lcssa$i$i);
     $56 = $44 | -2147483648;
     $57 = (((($5) + (($1*112)|0)|0)) + 8|0);
     store4($57,$56);
     $58 = (((($5) + (($1*112)|0)|0)) + 4|0);
     store4($58,$16);
     $59 = (($$lcssa$i$i) + ($16)|0);
     store1($59,0);
    } else {
     if ($19) {
      $25 = load4($6);
      $27 = $25;
     } else {
      $27 = $6;
     }
     $26 = ($16|0)==(0);
     if (!($26)) {
      _memmove(($27|0),($12|0),($16|0))|0;
     }
     $28 = (($27) + ($16)|0);
     store1($28,0);
     $29 = load1($17);
     $30 = ($29<<24>>24)<(0);
     if ($30) {
      $31 = (((($5) + (($1*112)|0)|0)) + 4|0);
      store4($31,$16);
      break;
     } else {
      $32 = $16&255;
      store1($17,$32);
      break;
     }
    }
   } while(0);
   $60 = (((($5) + (($1*112)|0)|0)) + 12|0);
   $61 = ((($2)) + 12|0);
   $62 = ((($61)) + 11|0);
   $63 = load1($62);
   $64 = ($63<<24>>24)<(0);
   $65 = load4($61);
   $66 = $64 ? $65 : $61;
   $67 = ((($2)) + 16|0);
   $68 = load4($67);
   $69 = $63&255;
   $70 = $64 ? $68 : $69;
   $71 = ((($60)) + 11|0);
   $72 = load1($71);
   $73 = ($72<<24>>24)<(0);
   if ($73) {
    $74 = (((($5) + (($1*112)|0)|0)) + 20|0);
    $75 = load4($74);
    $76 = $75 & 2147483647;
    $phitmp$i$i4$i = (($76) + -1)|0;
    $78 = $phitmp$i$i4$i;
   } else {
    $78 = 10;
   }
   $77 = ($70>>>0)>($78>>>0);
   do {
    if ($77) {
     $87 = (($70) - ($78))|0;
     $88 = (-18 - ($78))|0;
     $89 = ($88>>>0)<($87>>>0);
     if ($89) {
      __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
      // unreachable;
     }
     if ($73) {
      $90 = load4($60);
      $109 = $90;
     } else {
      $109 = $60;
     }
     $91 = ($78>>>0)<(2147483623);
     if ($91) {
      $92 = $78 << 1;
      $93 = ($70>>>0)<($92>>>0);
      $$sroa$speculated$i11$i = $93 ? $92 : $70;
      $94 = ($$sroa$speculated$i11$i>>>0)<(11);
      $95 = (($$sroa$speculated$i11$i) + 16)|0;
      $96 = $95 & -16;
      $phitmp$i12$i = $94 ? 11 : $96;
      $98 = $phitmp$i12$i;
     } else {
      $98 = -17;
     }
     $97 = ($98|0)==(0);
     $$$i2$i = $97 ? 1 : $98;
     $99 = (_malloc($$$i2$i)|0);
     $100 = ($99|0)==(0|0);
     L57: do {
      if ($100) {
       while(1) {
        $101 = load4(10072);
        $102 = (($101) + 0)|0;
        store4(10072,$102);
        $103 = ($101|0)==(0);
        if ($103) {
         $$lcssa$i8$i = 0;
         break L57;
        }
        $104 = $101;
        FUNCTION_TABLE_v[$104 & 3]();
        $105 = (_malloc($$$i2$i)|0);
        $106 = ($105|0)==(0|0);
        if (!($106)) {
         $$lcssa$i8$i = $105;
         break;
        }
       }
      } else {
       $$lcssa$i8$i = $99;
      }
     } while(0);
     $107 = ($70|0)==(0);
     if (!($107)) {
      _memcpy(($$lcssa$i8$i|0),($66|0),($70|0))|0;
     }
     $108 = ($78|0)==(10);
     if (!($108)) {
      _free($109);
     }
     store4($60,$$lcssa$i8$i);
     $110 = $98 | -2147483648;
     $111 = (((($5) + (($1*112)|0)|0)) + 20|0);
     store4($111,$110);
     $112 = (((($5) + (($1*112)|0)|0)) + 16|0);
     store4($112,$70);
     $113 = (($$lcssa$i8$i) + ($70)|0);
     store1($113,0);
    } else {
     if ($73) {
      $79 = load4($60);
      $81 = $79;
     } else {
      $81 = $60;
     }
     $80 = ($70|0)==(0);
     if (!($80)) {
      _memmove(($81|0),($66|0),($70|0))|0;
     }
     $82 = (($81) + ($70)|0);
     store1($82,0);
     $83 = load1($71);
     $84 = ($83<<24>>24)<(0);
     if ($84) {
      $85 = (((($5) + (($1*112)|0)|0)) + 16|0);
      store4($85,$70);
      break;
     } else {
      $86 = $70&255;
      store1($71,$86);
      break;
     }
    }
   } while(0);
   $114 = (((($5) + (($1*112)|0)|0)) + 24|0);
   $115 = ((($2)) + 24|0);
   $116 = ((($115)) + 11|0);
   $117 = load1($116);
   $118 = ($117<<24>>24)<(0);
   $119 = load4($115);
   $120 = $118 ? $119 : $115;
   $121 = ((($2)) + 28|0);
   $122 = load4($121);
   $123 = $117&255;
   $124 = $118 ? $122 : $123;
   $125 = ((($114)) + 11|0);
   $126 = load1($125);
   $127 = ($126<<24>>24)<(0);
   if ($127) {
    $128 = (((($5) + (($1*112)|0)|0)) + 32|0);
    $129 = load4($128);
    $130 = $129 & 2147483647;
    $phitmp$i$i18$i = (($130) + -1)|0;
    $132 = $phitmp$i$i18$i;
   } else {
    $132 = 10;
   }
   $131 = ($124>>>0)>($132>>>0);
   if ($131) {
    $141 = (($124) - ($132))|0;
    $142 = (-18 - ($132))|0;
    $143 = ($142>>>0)<($141>>>0);
    if ($143) {
     __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
     // unreachable;
    }
    if ($127) {
     $144 = load4($114);
     $163 = $144;
    } else {
     $163 = $114;
    }
    $145 = ($132>>>0)<(2147483623);
    if ($145) {
     $146 = $132 << 1;
     $147 = ($124>>>0)<($146>>>0);
     $$sroa$speculated$i25$i = $147 ? $146 : $124;
     $148 = ($$sroa$speculated$i25$i>>>0)<(11);
     $149 = (($$sroa$speculated$i25$i) + 16)|0;
     $150 = $149 & -16;
     $phitmp$i26$i = $148 ? 11 : $150;
     $152 = $phitmp$i26$i;
    } else {
     $152 = -17;
    }
    $151 = ($152|0)==(0);
    $$$i10$i = $151 ? 1 : $152;
    $153 = (_malloc($$$i10$i)|0);
    $154 = ($153|0)==(0|0);
    L95: do {
     if ($154) {
      while(1) {
       $155 = load4(10072);
       $156 = (($155) + 0)|0;
       store4(10072,$156);
       $157 = ($155|0)==(0);
       if ($157) {
        $$lcssa$i17$i = 0;
        break L95;
       }
       $158 = $155;
       FUNCTION_TABLE_v[$158 & 3]();
       $159 = (_malloc($$$i10$i)|0);
       $160 = ($159|0)==(0|0);
       if (!($160)) {
        $$lcssa$i17$i = $159;
        break;
       }
      }
     } else {
      $$lcssa$i17$i = $153;
     }
    } while(0);
    $161 = ($124|0)==(0);
    if (!($161)) {
     _memcpy(($$lcssa$i17$i|0),($120|0),($124|0))|0;
    }
    $162 = ($132|0)==(10);
    if (!($162)) {
     _free($163);
    }
    store4($114,$$lcssa$i17$i);
    $164 = $152 | -2147483648;
    $165 = (((($5) + (($1*112)|0)|0)) + 32|0);
    store4($165,$164);
    $166 = (((($5) + (($1*112)|0)|0)) + 28|0);
    store4($166,$124);
    $167 = (($$lcssa$i17$i) + ($124)|0);
    store1($167,0);
    $364 = $4;$365 = $3;
   } else {
    if ($127) {
     $133 = load4($114);
     $135 = $133;
    } else {
     $135 = $114;
    }
    $134 = ($124|0)==(0);
    if (!($134)) {
     _memmove(($135|0),($120|0),($124|0))|0;
    }
    $136 = (($135) + ($124)|0);
    store1($136,0);
    $137 = load1($125);
    $138 = ($137<<24>>24)<(0);
    if ($138) {
     $139 = (((($5) + (($1*112)|0)|0)) + 28|0);
     store4($139,$124);
    } else {
     $140 = $124&255;
     store1($125,$140);
    }
    $364 = $4;$365 = $3;
   }
   $168 = ((($2)) + 36|0);
   $169 = (((($5) + (($1*112)|0)|0)) + 36|0);
   $170 = load4($168);
   store4($3,$170);
   $171 = ((($2)) + 40|0);
   store4($4,$171);
   $$02$val$cast = $170;
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($169,$$02$val$cast,$171);
   $172 = (((($5) + (($1*112)|0)|0)) + 48|0);
   $173 = ((($2)) + 48|0);
   $174 = load4($173);
   $175 = ((($2)) + 52|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($172,$174,$175);
   $176 = (((($5) + (($1*112)|0)|0)) + 60|0);
   $177 = ((($2)) + 60|0);
   $178 = load4($177);
   $179 = ((($2)) + 64|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($176,$178,$179);
   $180 = (((($5) + (($1*112)|0)|0)) + 72|0);
   $181 = ((($2)) + 72|0);
   $182 = ((($181)) + 11|0);
   $183 = load1($182);
   $184 = ($183<<24>>24)<(0);
   $185 = load4($181);
   $186 = $184 ? $185 : $181;
   $187 = ((($2)) + 76|0);
   $188 = load4($187);
   $189 = $183&255;
   $190 = $184 ? $188 : $189;
   $191 = ((($180)) + 11|0);
   $192 = load1($191);
   $193 = ($192<<24>>24)<(0);
   if ($193) {
    $194 = (((($5) + (($1*112)|0)|0)) + 80|0);
    $195 = load4($194);
    $196 = $195 & 2147483647;
    $phitmp$i$i32$i = (($196) + -1)|0;
    $198 = $phitmp$i$i32$i;
   } else {
    $198 = 10;
   }
   $197 = ($190>>>0)>($198>>>0);
   do {
    if ($197) {
     $207 = (($190) - ($198))|0;
     $208 = (-18 - ($198))|0;
     $209 = ($208>>>0)<($207>>>0);
     if ($209) {
      __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
      // unreachable;
     }
     if ($193) {
      $210 = load4($180);
      $229 = $210;
     } else {
      $229 = $180;
     }
     $211 = ($198>>>0)<(2147483623);
     if ($211) {
      $212 = $198 << 1;
      $213 = ($190>>>0)<($212>>>0);
      $$sroa$speculated$i39$i = $213 ? $212 : $190;
      $214 = ($$sroa$speculated$i39$i>>>0)<(11);
      $215 = (($$sroa$speculated$i39$i) + 16)|0;
      $216 = $215 & -16;
      $phitmp$i40$i = $214 ? 11 : $216;
      $218 = $phitmp$i40$i;
     } else {
      $218 = -17;
     }
     $217 = ($218|0)==(0);
     $$$i19$i = $217 ? 1 : $218;
     $219 = (_malloc($$$i19$i)|0);
     $220 = ($219|0)==(0|0);
     L134: do {
      if ($220) {
       while(1) {
        $221 = load4(10072);
        $222 = (($221) + 0)|0;
        store4(10072,$222);
        $223 = ($221|0)==(0);
        if ($223) {
         $$lcssa$i25$i = 0;
         break L134;
        }
        $224 = $221;
        FUNCTION_TABLE_v[$224 & 3]();
        $225 = (_malloc($$$i19$i)|0);
        $226 = ($225|0)==(0|0);
        if (!($226)) {
         $$lcssa$i25$i = $225;
         break;
        }
       }
      } else {
       $$lcssa$i25$i = $219;
      }
     } while(0);
     $227 = ($190|0)==(0);
     if (!($227)) {
      _memcpy(($$lcssa$i25$i|0),($186|0),($190|0))|0;
     }
     $228 = ($198|0)==(10);
     if (!($228)) {
      _free($229);
     }
     store4($180,$$lcssa$i25$i);
     $230 = $218 | -2147483648;
     $231 = (((($5) + (($1*112)|0)|0)) + 80|0);
     store4($231,$230);
     $232 = (((($5) + (($1*112)|0)|0)) + 76|0);
     store4($232,$190);
     $233 = (($$lcssa$i25$i) + ($190)|0);
     store1($233,0);
    } else {
     if ($193) {
      $199 = load4($180);
      $201 = $199;
     } else {
      $201 = $180;
     }
     $200 = ($190|0)==(0);
     if (!($200)) {
      _memmove(($201|0),($186|0),($190|0))|0;
     }
     $202 = (($201) + ($190)|0);
     store1($202,0);
     $203 = load1($191);
     $204 = ($203<<24>>24)<(0);
     if ($204) {
      $205 = (((($5) + (($1*112)|0)|0)) + 76|0);
      store4($205,$190);
      break;
     } else {
      $206 = $190&255;
      store1($191,$206);
      break;
     }
    }
   } while(0);
   $234 = (((($5) + (($1*112)|0)|0)) + 84|0);
   $235 = ((($2)) + 84|0);
   $236 = ((($235)) + 11|0);
   $237 = load1($236);
   $238 = ($237<<24>>24)<(0);
   $239 = load4($235);
   $240 = $238 ? $239 : $235;
   $241 = ((($2)) + 88|0);
   $242 = load4($241);
   $243 = $237&255;
   $244 = $238 ? $242 : $243;
   $245 = ((($234)) + 11|0);
   $246 = load1($245);
   $247 = ($246<<24>>24)<(0);
   if ($247) {
    $248 = (((($5) + (($1*112)|0)|0)) + 92|0);
    $249 = load4($248);
    $250 = $249 & 2147483647;
    $phitmp$i$i46$i = (($250) + -1)|0;
    $252 = $phitmp$i$i46$i;
   } else {
    $252 = 10;
   }
   $251 = ($244>>>0)>($252>>>0);
   if (!($251)) {
    if ($247) {
     $253 = load4($234);
     $255 = $253;
    } else {
     $255 = $234;
    }
    $254 = ($244|0)==(0);
    if (!($254)) {
     _memmove(($255|0),($240|0),($244|0))|0;
    }
    $256 = (($255) + ($244)|0);
    store1($256,0);
    $257 = load1($245);
    $258 = ($257<<24>>24)<(0);
    if ($258) {
     $259 = (((($5) + (($1*112)|0)|0)) + 88|0);
     store4($259,$244);
     break;
    } else {
     $260 = $244&255;
     store1($245,$260);
     break;
    }
   }
   $261 = (($244) - ($252))|0;
   $262 = (-18 - ($252))|0;
   $263 = ($262>>>0)<($261>>>0);
   if ($263) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($247) {
    $264 = load4($234);
    $283 = $264;
   } else {
    $283 = $234;
   }
   $265 = ($252>>>0)<(2147483623);
   if ($265) {
    $266 = $252 << 1;
    $267 = ($244>>>0)<($266>>>0);
    $$sroa$speculated$i53$i = $267 ? $266 : $244;
    $268 = ($$sroa$speculated$i53$i>>>0)<(11);
    $269 = (($$sroa$speculated$i53$i) + 16)|0;
    $270 = $269 & -16;
    $phitmp$i54$i = $268 ? 11 : $270;
    $272 = $phitmp$i54$i;
   } else {
    $272 = -17;
   }
   $271 = ($272|0)==(0);
   $$$i27$i = $271 ? 1 : $272;
   $273 = (_malloc($$$i27$i)|0);
   $274 = ($273|0)==(0|0);
   L183: do {
    if ($274) {
     while(1) {
      $275 = load4(10072);
      $276 = (($275) + 0)|0;
      store4(10072,$276);
      $277 = ($275|0)==(0);
      if ($277) {
       $$lcssa$i33$i = 0;
       break L183;
      }
      $278 = $275;
      FUNCTION_TABLE_v[$278 & 3]();
      $279 = (_malloc($$$i27$i)|0);
      $280 = ($279|0)==(0|0);
      if (!($280)) {
       $$lcssa$i33$i = $279;
       break;
      }
     }
    } else {
     $$lcssa$i33$i = $273;
    }
   } while(0);
   $281 = ($244|0)==(0);
   if (!($281)) {
    _memcpy(($$lcssa$i33$i|0),($240|0),($244|0))|0;
   }
   $282 = ($252|0)==(10);
   if (!($282)) {
    _free($283);
   }
   store4($234,$$lcssa$i33$i);
   $284 = $272 | -2147483648;
   $285 = (((($5) + (($1*112)|0)|0)) + 92|0);
   store4($285,$284);
   $286 = (((($5) + (($1*112)|0)|0)) + 88|0);
   store4($286,$244);
   $287 = (($$lcssa$i33$i) + ($244)|0);
   store1($287,0);
  }
 } while(0);
 $288 = (((($5) + (($1*112)|0)|0)) + 96|0);
 $289 = ((($2)) + 96|0);
 $290 = load4($289);
 __emval_incref(($290|0));
 $291 = load4($288);
 __emval_decref(($291|0));
 $292 = load4($289);
 store4($288,$292);
 if ($7) {
  STACKTOP = sp;return 1;
 }
 $293 = (((($5) + (($1*112)|0)|0)) + 100|0);
 $294 = ((($2)) + 100|0);
 $295 = load4($294);
 $296 = ((($2)) + 104|0);
 $297 = load4($296);
 $298 = $297;
 $299 = $295;
 $300 = (($298) - ($299))|0;
 $301 = $300 >> 2;
 $302 = (((($5) + (($1*112)|0)|0)) + 108|0);
 $303 = load4($302);
 $304 = load4($293);
 $305 = (($303) - ($304))|0;
 $306 = $305 >> 2;
 $307 = ($301>>>0)>($306>>>0);
 $308 = $304;
 if (!($307)) {
  $309 = (((($5) + (($1*112)|0)|0)) + 104|0);
  $310 = load4($309);
  $311 = (($310) - ($304))|0;
  $312 = $311 >> 2;
  $313 = ($301>>>0)>($312>>>0);
  $314 = (($295) + ($312<<2)|0);
  $$$i35$i = $313 ? $314 : $297;
  $315 = $$$i35$i;
  $316 = (($315) - ($299))|0;
  $317 = $316 >> 2;
  $318 = ($317|0)==(0);
  if (!($318)) {
   $319 = $304;
   _memmove(($319|0),($295|0),($316|0))|0;
  }
  $320 = (($308) + ($317<<2)|0);
  if ($313) {
   $321 = (($298) - ($315))|0;
   $322 = ($321|0)>(0);
   if (!($322)) {
    STACKTOP = sp;return 1;
   }
   $323 = $321 >> 2;
   $324 = load4($309);
   _memcpy(($324|0),($$$i35$i|0),($321|0))|0;
   $325 = load4($309);
   $326 = (($325) + ($323<<2)|0);
   store4($309,$326);
   STACKTOP = sp;return 1;
  } else {
   $327 = load4($309);
   $328 = ($327|0)==($320|0);
   if ($328) {
    STACKTOP = sp;return 1;
   }
   $329 = $320;
   $scevgep$i$i$i$i = ((($327)) + -4|0);
   $330 = $scevgep$i$i$i$i;
   $331 = (($330) - ($329))|0;
   $332 = $331 >>> 2;
   $333 = $332 ^ -1;
   $scevgep4$i$i$i$i = (($327) + ($333<<2)|0);
   store4($309,$scevgep4$i$i$i$i);
   STACKTOP = sp;return 1;
  }
 }
 $334 = ($304|0)==(0);
 $335 = $304;
 if ($334) {
  $345 = $303;
 } else {
  $336 = (((($5) + (($1*112)|0)|0)) + 104|0);
  $337 = load4($336);
  $338 = ($337|0)==($308|0);
  if (!($338)) {
   $scevgep$i$i$i$i$i$i = ((($337)) + -4|0);
   $339 = $scevgep$i$i$i$i$i$i;
   $340 = (($339) - ($304))|0;
   $341 = $340 >>> 2;
   $342 = $341 ^ -1;
   $scevgep4$i$i$i$i$i$i = (($337) + ($342<<2)|0);
   store4($336,$scevgep4$i$i$i$i$i$i);
  }
  _free($335);
  store4($302,0);
  store4($336,0);
  store4($293,0);
  $345 = 0;
 }
 $343 = ($301>>>0)>(1073741823);
 if ($343) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $344 = $345 >> 2;
 $346 = ($344>>>0)<(536870911);
 $347 = $345 >> 1;
 $348 = ($347>>>0)<($301>>>0);
 $$sroa$speculated$i$i$i = $348 ? $301 : $347;
 $$0$i$i$i = $346 ? $$sroa$speculated$i$i$i : 1073741823;
 $349 = ($$0$i$i$i>>>0)>(1073741823);
 if ($349) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $350 = $$0$i$i$i << 2;
 $351 = ($350|0)==(0);
 $$$i$i$i = $351 ? 1 : $350;
 $352 = (_malloc($$$i$i$i)|0);
 $353 = ($352|0)==(0|0);
 L227: do {
  if ($353) {
   while(1) {
    $354 = load4(10072);
    $355 = (($354) + 0)|0;
    store4(10072,$355);
    $356 = ($354|0)==(0);
    if ($356) {
     $$lcssa$i$i$i = 0;
     break L227;
    }
    $357 = $354;
    FUNCTION_TABLE_v[$357 & 3]();
    $358 = (_malloc($$$i$i$i)|0);
    $359 = ($358|0)==(0|0);
    if (!($359)) {
     $$lcssa$i$i$i = $358;
     break;
    }
   }
  } else {
   $$lcssa$i$i$i = $352;
  }
 } while(0);
 $360 = (((($5) + (($1*112)|0)|0)) + 104|0);
 store4($360,$$lcssa$i$i$i);
 store4($293,$$lcssa$i$i$i);
 $361 = (($$lcssa$i$i$i) + ($$0$i$i$i<<2)|0);
 store4($302,$361);
 $362 = ($300|0)>(0);
 if (!($362)) {
  STACKTOP = sp;return 1;
 }
 $363 = (($$lcssa$i$i$i) + ($301<<2)|0);
 _memcpy(($$lcssa$i$i$i|0),($295|0),($300|0))|0;
 store4($360,$363);
 STACKTOP = sp;return 1;
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
    $2 = load4(10072);
    $3 = (($2) + 0)|0;
    store4(10072,$3);
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
  FUNCTION_TABLE_vii[$11 & 7]($4,$2);
  return;
 } else {
  $7 = load4($4);
  $8 = (($7) + ($$unpack)|0);
  $9 = load4($8);
  $11 = $9;
  FUNCTION_TABLE_vii[$11 & 7]($4,$2);
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
  FUNCTION_TABLE_viii[$12 & 15]($5,$2,$3);
  return;
 } else {
  $8 = load4($5);
  $9 = (($8) + ($$unpack)|0);
  $10 = load4($9);
  $12 = $10;
  FUNCTION_TABLE_viii[$12 & 15]($5,$2,$3);
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
 $11 = (FUNCTION_TABLE_ii[$10 & 31]($3)|0);
 return ($11|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorI5VNodeNS3_9allocatorIS5_EEEEjES2_SA_JjEE6invokeEPSC_PS8_j($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (FUNCTION_TABLE_iii[$3 & 31]($1,$2)|0);
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
function __ZNSt3__26vectorIjNS_9allocatorIjEEE9push_backERKj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i$i = 0, $$0$i$i = 0, $$lcssa$i$i = 0, $$sroa$speculated$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = ((($0)) + 8|0);
 $5 = load4($4);
 $6 = ($3|0)==($5|0);
 $7 = $5;
 if (!($6)) {
  $8 = load4($1);
  store4($3,$8);
  $9 = ((($3)) + 4|0);
  store4($2,$9);
  return;
 }
 $10 = $3;
 $11 = load4($0);
 $12 = (($10) - ($11))|0;
 $13 = $12 >> 2;
 $14 = (($13) + 1)|0;
 $15 = ($14>>>0)>(1073741823);
 if ($15) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $16 = (($7) - ($11))|0;
 $17 = $16 >> 2;
 $18 = ($17>>>0)<(536870911);
 $19 = $16 >> 1;
 $20 = ($19>>>0)<($14>>>0);
 $$sroa$speculated$i$i = $20 ? $14 : $19;
 $$0$i$i = $18 ? $$sroa$speculated$i$i : 1073741823;
 $21 = ($$0$i$i|0)==(0);
 if ($21) {
  $35 = 0;
 } else {
  $22 = ($$0$i$i>>>0)>(1073741823);
  if ($22) {
   $23 = (___cxa_allocate_exception(4)|0);
   store4($23,(2528));
   ___cxa_throw(($23|0),(1616|0),(13|0));
   // unreachable;
  }
  $24 = $$0$i$i << 2;
  $25 = ($24|0)==(0);
  $$$i$i = $25 ? 1 : $24;
  $26 = (_malloc($$$i$i)|0);
  $27 = ($26|0)==(0|0);
  L13: do {
   if ($27) {
    while(1) {
     $28 = load4(10072);
     $29 = (($28) + 0)|0;
     store4(10072,$29);
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
 $34 = (($35) + ($13<<2)|0);
 $36 = (($35) + ($$0$i$i<<2)|0);
 $37 = $36;
 $38 = load4($1);
 store4($34,$38);
 $39 = ((($34)) + 4|0);
 $40 = $39;
 $41 = (0 - ($13))|0;
 $42 = (($34) + ($41<<2)|0);
 $43 = $42;
 $44 = ($12|0)>(0);
 if ($44) {
  $45 = $11;
  _memcpy(($42|0),($45|0),($12|0))|0;
 }
 store4($0,$43);
 store4($2,$40);
 store4($4,$37);
 $46 = ($11|0)==(0);
 if ($46) {
  return;
 }
 $47 = $11;
 _free($47);
 return;
}
function __ZNSt3__26vectorIjNS_9allocatorIjEEE6resizeEjRKj($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i$i = 0, $$0$i$i = 0, $$0$i12$i = 0, $$0$i14$i = 0, $$lcssa$i$i = 0, $$sroa$speculated$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $7 = 0, $8 = 0, $9 = 0, $scevgep$i$i = 0, $scevgep$i$i1 = 0, $scevgep$i13$i = 0, $scevgep4$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = load4($0);
 $6 = (($4) - ($5))|0;
 $7 = $6 >> 2;
 $8 = ($7>>>0)<($1>>>0);
 $9 = $5;
 $10 = $4;
 if (!($8)) {
  $58 = ($7>>>0)>($1>>>0);
  if (!($58)) {
   return;
  }
  $59 = (($9) + ($1<<2)|0);
  $60 = ($10|0)==($59|0);
  if ($60) {
   return;
  }
  $61 = $59;
  $scevgep$i$i = ((($10)) + -4|0);
  $62 = $scevgep$i$i;
  $63 = (($62) - ($61))|0;
  $64 = $63 >>> 2;
  $65 = $64 ^ -1;
  $scevgep4$i$i = (($10) + ($65<<2)|0);
  store4($3,$scevgep4$i$i);
  return;
 }
 $11 = (($1) - ($7))|0;
 $12 = ((($0)) + 8|0);
 $13 = load4($12);
 $14 = (($13) - ($4))|0;
 $15 = $14 >> 2;
 $16 = ($15>>>0)<($11>>>0);
 if (!($16)) {
  $$0$i$i = $11;$18 = $10;
  while(1) {
   $17 = load4($2);
   store4($18,$17);
   $19 = ((($18)) + 4|0);
   $20 = (($$0$i$i) + -1)|0;
   $21 = ($20|0)==(0);
   if ($21) {
    break;
   } else {
    $$0$i$i = $20;$18 = $19;
   }
  }
  $scevgep$i$i1 = (($10) + ($11<<2)|0);
  store4($3,$scevgep$i$i1);
  return;
 }
 $22 = ($1>>>0)>(1073741823);
 if ($22) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $23 = (($13) - ($5))|0;
 $24 = $23 >> 2;
 $25 = ($24>>>0)<(536870911);
 $26 = $23 >> 1;
 $27 = ($26>>>0)<($1>>>0);
 $$sroa$speculated$i$i = $27 ? $1 : $26;
 $$0$i14$i = $25 ? $$sroa$speculated$i$i : 1073741823;
 $28 = ($$0$i14$i|0)==(0);
 if ($28) {
  $42 = 0;
 } else {
  $29 = ($$0$i14$i>>>0)>(1073741823);
  if ($29) {
   $30 = (___cxa_allocate_exception(4)|0);
   store4($30,(2528));
   ___cxa_throw(($30|0),(1616|0),(13|0));
   // unreachable;
  }
  $31 = $$0$i14$i << 2;
  $32 = ($31|0)==(0);
  $$$i$i = $32 ? 1 : $31;
  $33 = (_malloc($$$i$i)|0);
  $34 = ($33|0)==(0|0);
  L25: do {
   if ($34) {
    while(1) {
     $35 = load4(10072);
     $36 = (($35) + 0)|0;
     store4(10072,$36);
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
 $41 = (($42) + ($7<<2)|0);
 $$0$i12$i = $11;$44 = $41;
 while(1) {
  $43 = load4($2);
  store4($44,$43);
  $45 = ((($44)) + 4|0);
  $46 = (($$0$i12$i) + -1)|0;
  $47 = ($46|0)==(0);
  if ($47) {
   break;
  } else {
   $$0$i12$i = $46;$44 = $45;
  }
 }
 $48 = (($42) + ($$0$i14$i<<2)|0);
 $49 = $48;
 $scevgep$i13$i = (($41) + ($11<<2)|0);
 $50 = $scevgep$i13$i;
 $51 = (0 - ($7))|0;
 $52 = (($41) + ($51<<2)|0);
 $53 = $52;
 $54 = ($6|0)>(0);
 if ($54) {
  $55 = $5;
  _memcpy(($52|0),($55|0),($6|0))|0;
 }
 store4($0,$53);
 store4($3,$50);
 store4($12,$49);
 $56 = ($5|0)==(0);
 if ($56) {
  return;
 }
 $57 = $5;
 _free($57);
 return;
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3getERKS6_j($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$sroa$0$0 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = load4($0);
 $6 = (($4) - ($5))|0;
 $7 = $6 >> 2;
 $8 = ($7>>>0)>($1>>>0);
 if (!($8)) {
  $$sroa$0$0 = (1);
  STACKTOP = sp;return ($$sroa$0$0|0);
 }
 $9 = $5;
 $10 = (($9) + ($1<<2)|0);
 $11 = load4($10);
 store4($2,$11);
 $12 = (__emval_take_value((1752|0),($2|0))|0);
 $$sroa$0$0 = $12;
 STACKTOP = sp;return ($$sroa$0$0|0);
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3setERS6_jRKj($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($2);
 $4 = load4($0);
 $5 = (($4) + ($1<<2)|0);
 store4($5,$3);
 return 1;
}
function __ZN10emscripten8internal13getActualTypeINSt3__26vectorIjNS2_9allocatorIjEEEEEEPKvPT_($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1304|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__26vectorIjNS2_9allocatorIjEEEEEEvPT_($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $scevgep$i$i$i = 0, $scevgep4$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = load4($0);
 $3 = ($2|0)==(0|0);
 $4 = $2;
 if (!($3)) {
  $5 = ((($0)) + 4|0);
  $6 = load4($5);
  $7 = ($6|0)==($2|0);
  if (!($7)) {
   $scevgep$i$i$i = ((($6)) + -4|0);
   $8 = $scevgep$i$i$i;
   $9 = (($8) - ($4))|0;
   $10 = $9 >>> 2;
   $11 = $10 ^ -1;
   $scevgep4$i$i$i = (($6) + ($11<<2)|0);
   store4($5,$scevgep4$i$i$i);
  }
  _free($2);
 }
 _free($0);
 return;
}
function __ZN10emscripten8internal12operator_newINSt3__26vectorIjNS2_9allocatorIjEEEEJEEEPT_DpOT0_() {
 var $$lcssa$i = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_malloc(12)|0);
 $1 = ($0|0)==(0|0);
 L1: do {
  if ($1) {
   while(1) {
    $2 = load4(10072);
    $3 = (($2) + 0)|0;
    store4(10072,$3);
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
function __ZN10emscripten8internal7InvokerIPNSt3__26vectorIjNS2_9allocatorIjEEEEJEE6invokeEPFS7_vE($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (FUNCTION_TABLE_i[$0 & 7]()|0);
 return ($1|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvRKjEvPS6_JS8_EE6invokeERKSA_SB_j($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$elt2 = 0, $$unpack = 0, $$unpack3 = 0, $10 = 0, $11 = 0, $12 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $$unpack = load4($0);
 $$elt2 = ((($0)) + 4|0);
 $$unpack3 = load4($$elt2);
 $4 = $$unpack3 >> 1;
 $5 = (($1) + ($4)|0);
 $6 = $$unpack3 & 1;
 $7 = ($6|0)==(0);
 if ($7) {
  $11 = $$unpack;
  $12 = $11;
 } else {
  $8 = load4($5);
  $9 = (($8) + ($$unpack)|0);
  $10 = load4($9);
  $12 = $10;
 }
 store4($3,$2);
 FUNCTION_TABLE_vii[$12 & 7]($5,$3);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvjRKjEvPS6_JjS8_EE6invokeERKSA_SB_jj($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$elt3 = 0, $$unpack = 0, $$unpack4 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $4 = sp;
 $$unpack = load4($0);
 $$elt3 = ((($0)) + 4|0);
 $$unpack4 = load4($$elt3);
 $5 = $$unpack4 >> 1;
 $6 = (($1) + ($5)|0);
 $7 = $$unpack4 & 1;
 $8 = ($7|0)==(0);
 if ($8) {
  $12 = $$unpack;
  $13 = $12;
 } else {
  $9 = load4($6);
  $10 = (($9) + ($$unpack)|0);
  $11 = load4($10);
  $13 = $11;
 }
 store4($4,$3);
 FUNCTION_TABLE_viii[$13 & 15]($6,$2,$4);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEKFjvEjPKS6_JEE6invokeERKS8_SA_($0,$1) {
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
 $11 = (FUNCTION_TABLE_ii[$10 & 31]($3)|0);
 return ($11|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorIjNS3_9allocatorIjEEEEjES2_S9_JjEE6invokeEPSB_PS7_j($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (FUNCTION_TABLE_iii[$3 & 31]($1,$2)|0);
 __emval_incref(($4|0));
 __emval_decref(($4|0));
 return ($4|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorIjNS2_9allocatorIjEEEEjRKjEbS7_JjS9_EE6invokeEPSB_PS6_jj($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $4 = sp;
 $5 = load4($0);
 store4($4,$3);
 $6 = (FUNCTION_TABLE_iiii[$5 & 31]($1,$2,$4)|0);
 STACKTOP = sp;return ($6|0);
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
 $5 = load1(9488);
 $6 = ($5<<24>>24)==(0);
 if ($6) {
  store1(9488,1);
  $7 = (__emval_get_method_caller(2,(2028|0))|0);
  store4(9544,$7);
  $20 = $7;
 } else {
  $$pre = load4(9544);
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
function __ZNSt3__26vectorIP5VNodeNS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$0$i = 0, $$lcssa$i = 0, $$sroa$speculated$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = load4($0);
 $5 = (($3) - ($4))|0;
 $6 = $5 >> 2;
 $7 = (($6) + 1)|0;
 $8 = ($7>>>0)>(1073741823);
 if ($8) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $9 = ((($0)) + 8|0);
 $10 = load4($9);
 $11 = (($10) - ($4))|0;
 $12 = $11 >> 2;
 $13 = ($12>>>0)<(536870911);
 $14 = $11 >> 1;
 $15 = ($14>>>0)<($7>>>0);
 $$sroa$speculated$i = $15 ? $7 : $14;
 $$0$i = $13 ? $$sroa$speculated$i : 1073741823;
 $16 = ($$0$i|0)==(0);
 if ($16) {
  $30 = 0;
 } else {
  $17 = ($$0$i>>>0)>(1073741823);
  if ($17) {
   $18 = (___cxa_allocate_exception(4)|0);
   store4($18,(2528));
   ___cxa_throw(($18|0),(1616|0),(13|0));
   // unreachable;
  }
  $19 = $$0$i << 2;
  $20 = ($19|0)==(0);
  $$$i = $20 ? 1 : $19;
  $21 = (_malloc($$$i)|0);
  $22 = ($21|0)==(0|0);
  L9: do {
   if ($22) {
    while(1) {
     $23 = load4(10072);
     $24 = (($23) + 0)|0;
     store4(10072,$24);
     $25 = ($23|0)==(0);
     if ($25) {
      $$lcssa$i = 0;
      break L9;
     }
     $26 = $23;
     FUNCTION_TABLE_v[$26 & 3]();
     $27 = (_malloc($$$i)|0);
     $28 = ($27|0)==(0|0);
     if (!($28)) {
      $$lcssa$i = $27;
      break;
     }
    }
   } else {
    $$lcssa$i = $21;
   }
  } while(0);
  $30 = $$lcssa$i;
 }
 $29 = (($30) + ($6<<2)|0);
 $31 = (($30) + ($$0$i<<2)|0);
 $32 = $31;
 $33 = load4($1);
 store4($29,$33);
 $34 = ((($29)) + 4|0);
 $35 = $34;
 $36 = (0 - ($6))|0;
 $37 = (($29) + ($36<<2)|0);
 $38 = $37;
 $39 = ($5|0)>(0);
 if ($39) {
  $40 = $4;
  _memcpy(($37|0),($40|0),($5|0))|0;
 }
 store4($0,$38);
 store4($2,$35);
 store4($9,$32);
 $41 = ($4|0)==(0);
 if ($41) {
  return;
 }
 $42 = $4;
 _free($42);
 return;
}
function __ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEE6invokeEPFjS8_EPNS0_11BindingTypeIS8_EUt_E($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = ((($1)) + 4|0);
 $4 = load4($1);
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $5 = ($4>>>0)>(4294967279);
 if ($5) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $6 = ($4>>>0)<(11);
 if ($6) {
  $21 = $4&255;
  $22 = ((($2)) + 11|0);
  store1($22,$21);
  $23 = ($4|0)==(0);
  if ($23) {
   $$017$i = $2;
  } else {
   $$016$i = $2;
   label = 9;
  }
 } else {
  $7 = (($4) + 16)|0;
  $8 = $7 & -16;
  $9 = ($8|0)==(0);
  $$$i = $9 ? 1 : $8;
  $10 = (_malloc($$$i)|0);
  $11 = ($10|0)==(0|0);
  L7: do {
   if ($11) {
    while(1) {
     $12 = load4(10072);
     $13 = (($12) + 0)|0;
     store4(10072,$13);
     $14 = ($12|0)==(0);
     if ($14) {
      $$lcssa$i = 0;
      break L7;
     }
     $15 = $12;
     FUNCTION_TABLE_v[$15 & 3]();
     $16 = (_malloc($$$i)|0);
     $17 = ($16|0)==(0|0);
     if (!($17)) {
      $$lcssa$i = $16;
      break;
     }
    }
   } else {
    $$lcssa$i = $10;
   }
  } while(0);
  store4($2,$$lcssa$i);
  $18 = $8 | -2147483648;
  $19 = ((($2)) + 8|0);
  store4($19,$18);
  $20 = ((($2)) + 4|0);
  store4($20,$4);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($3|0),($4|0))|0;
  $$017$i = $$016$i;
 }
 $24 = (($$017$i) + ($4)|0);
 store1($24,0);
 $25 = (FUNCTION_TABLE_ii[$0 & 31]($2)|0);
 $26 = ((($2)) + 11|0);
 $27 = load1($26);
 $28 = ($27<<24>>24)<(0);
 if (!($28)) {
  STACKTOP = sp;return ($25|0);
 }
 $29 = load4($2);
 _free($29);
 STACKTOP = sp;return ($25|0);
}
function __ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbEE6invokeEPFjS8_bEPNS0_11BindingTypeIS8_EUt_Eb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
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
     $13 = load4(10072);
     $14 = (($13) + 0)|0;
     store4(10072,$14);
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
 $26 = (FUNCTION_TABLE_iii[$0 & 31]($3,$2)|0);
 $27 = ((($3)) + 11|0);
 $28 = load1($27);
 $29 = ($28<<24>>24)<(0);
 if (!($29)) {
  STACKTOP = sp;return ($26|0);
 }
 $30 = load4($3);
 _free($30);
 STACKTOP = sp;return ($26|0);
}
function __ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEjEE6invokeEPFjS8_jEPNS0_11BindingTypeIS8_EUt_Ej($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
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
     $13 = load4(10072);
     $14 = (($13) + 0)|0;
     store4(10072,$14);
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
 $26 = (FUNCTION_TABLE_iii[$0 & 31]($3,$2)|0);
 $27 = ((($3)) + 11|0);
 $28 = load1($27);
 $29 = ($28<<24>>24)<(0);
 if (!($29)) {
  STACKTOP = sp;return ($26|0);
 }
 $30 = load4($3);
 _free($30);
 STACKTOP = sp;return ($26|0);
}
function __ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES8_EE6invokeEPFjS8_S8_EPNS0_11BindingTypeIS8_EUt_ESF_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i1 = 0, $$016$i = 0, $$016$i2 = 0, $$017$i = 0, $$017$i3 = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $3 = sp + 12|0;
 $4 = sp;
 $5 = ((($1)) + 4|0);
 $6 = load4($1);
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
     $14 = load4(10072);
     $15 = (($14) + 0)|0;
     store4(10072,$15);
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
 $27 = ((($2)) + 4|0);
 $28 = load4($2);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $29 = ($28>>>0)>(4294967279);
 if ($29) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $30 = ($28>>>0)<(11);
 if ($30) {
  $45 = $28&255;
  $46 = ((($4)) + 11|0);
  store1($46,$45);
  $47 = ($28|0)==(0);
  if ($47) {
   $$017$i3 = $4;
  } else {
   $$016$i2 = $4;
   label = 18;
  }
 } else {
  $31 = (($28) + 16)|0;
  $32 = $31 & -16;
  $33 = ($32|0)==(0);
  $$$i1 = $33 ? 1 : $32;
  $34 = (_malloc($$$i1)|0);
  $35 = ($34|0)==(0|0);
  L21: do {
   if ($35) {
    while(1) {
     $36 = load4(10072);
     $37 = (($36) + 0)|0;
     store4(10072,$37);
     $38 = ($36|0)==(0);
     if ($38) {
      $$lcssa$i7 = 0;
      break L21;
     }
     $39 = $36;
     FUNCTION_TABLE_v[$39 & 3]();
     $40 = (_malloc($$$i1)|0);
     $41 = ($40|0)==(0|0);
     if (!($41)) {
      $$lcssa$i7 = $40;
      break;
     }
    }
   } else {
    $$lcssa$i7 = $34;
   }
  } while(0);
  store4($4,$$lcssa$i7);
  $42 = $32 | -2147483648;
  $43 = ((($4)) + 8|0);
  store4($43,$42);
  $44 = ((($4)) + 4|0);
  store4($44,$28);
  $$016$i2 = $$lcssa$i7;
  label = 18;
 }
 if ((label|0) == 18) {
  _memcpy(($$016$i2|0),($27|0),($28|0))|0;
  $$017$i3 = $$016$i2;
 }
 $48 = (($$017$i3) + ($28)|0);
 store1($48,0);
 $49 = (FUNCTION_TABLE_iii[$0 & 31]($3,$4)|0);
 $50 = ((($4)) + 11|0);
 $51 = load1($50);
 $52 = ($51<<24>>24)<(0);
 if ($52) {
  $53 = load4($4);
  _free($53);
 }
 $54 = ((($3)) + 11|0);
 $55 = load1($54);
 $56 = ($55<<24>>24)<(0);
 if (!($56)) {
  STACKTOP = sp;return ($49|0);
 }
 $57 = load4($3);
 _free($57);
 STACKTOP = sp;return ($49|0);
}
function __ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE9VNodeDataEE6invokeEPFjS8_S9_EPNS0_11BindingTypeIS8_EUt_EPS9_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $3 = sp + 60|0;
 $4 = sp;
 $5 = ((($1)) + 4|0);
 $6 = load4($1);
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
     $14 = load4(10072);
     $15 = (($14) + 0)|0;
     store4(10072,$15);
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
 __ZN9VNodeDataC2ERKS_($4,$2);
 $27 = (FUNCTION_TABLE_iii[$0 & 31]($3,$4)|0);
 $28 = ((($4)) + 48|0);
 $29 = ((($28)) + 11|0);
 $30 = load1($29);
 $31 = ($30<<24>>24)<(0);
 if ($31) {
  $32 = load4($28);
  _free($32);
 }
 $33 = ((($4)) + 36|0);
 $34 = ((($33)) + 11|0);
 $35 = load1($34);
 $36 = ($35<<24>>24)<(0);
 if ($36) {
  $37 = load4($33);
  _free($37);
 }
 $38 = ((($4)) + 28|0);
 $39 = load4($38);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($39);
 $40 = ((($4)) + 16|0);
 $41 = load4($40);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($41);
 $42 = ((($4)) + 4|0);
 $43 = load4($42);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($43);
 $44 = ((($3)) + 11|0);
 $45 = load1($44);
 $46 = ($45<<24>>24)<(0);
 if (!($46)) {
  STACKTOP = sp;return ($27|0);
 }
 $47 = load4($3);
 _free($47);
 STACKTOP = sp;return ($27|0);
}
function __ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEENS2_6vectorIjNS6_IjEEEEEE6invokeEPFjS8_SB_EPNS0_11BindingTypeIS8_EUt_EPSB_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$$i1 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $7 = 0, $8 = 0, $9 = 0, $scevgep$i$i$i5 = 0, $scevgep4$i$i$i6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $3 = sp + 12|0;
 $4 = sp;
 $5 = ((($1)) + 4|0);
 $6 = load4($1);
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
     $14 = load4(10072);
     $15 = (($14) + 0)|0;
     store4(10072,$15);
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
 store4($4,0);
 $27 = ((($4)) + 4|0);
 store4($27,0);
 $28 = ((($4)) + 8|0);
 store4($28,0);
 $29 = ((($2)) + 4|0);
 $30 = load4($29);
 $31 = load4($2);
 $32 = (($30) - ($31))|0;
 $33 = $32 >> 2;
 $34 = ($33|0)==(0);
 if (!($34)) {
  $35 = ($33>>>0)>(1073741823);
  if ($35) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $36 = ($32|0)==(0);
  $$$i1 = $36 ? 1 : $32;
  $37 = (_malloc($$$i1)|0);
  $38 = ($37|0)==(0|0);
  L20: do {
   if ($38) {
    while(1) {
     $39 = load4(10072);
     $40 = (($39) + 0)|0;
     store4(10072,$40);
     $41 = ($39|0)==(0);
     if ($41) {
      $$lcssa$i7 = 0;
      break L20;
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
  store4($27,$$lcssa$i7);
  store4($4,$$lcssa$i7);
  $45 = (($$lcssa$i7) + ($33<<2)|0);
  $46 = ((($4)) + 8|0);
  store4($46,$45);
  $47 = load4($2);
  $48 = load4($29);
  $49 = $47;
  $50 = (($48) - ($49))|0;
  $51 = ($50|0)>(0);
  if ($51) {
   $52 = $50 >> 2;
   $53 = (($$lcssa$i7) + ($52<<2)|0);
   _memcpy(($$lcssa$i7|0),($47|0),($50|0))|0;
   store4($27,$53);
  }
 }
 $54 = (FUNCTION_TABLE_iii[$0 & 31]($3,$4)|0);
 $55 = load4($4);
 $56 = ($55|0)==(0|0);
 $57 = $55;
 if (!($56)) {
  $58 = load4($27);
  $59 = ($58|0)==($55|0);
  if (!($59)) {
   $scevgep$i$i$i5 = ((($58)) + -4|0);
   $60 = $scevgep$i$i$i5;
   $61 = (($60) - ($57))|0;
   $62 = $61 >>> 2;
   $63 = $62 ^ -1;
   $scevgep4$i$i$i6 = (($58) + ($63<<2)|0);
   store4($27,$scevgep4$i$i$i6);
  }
  _free($55);
 }
 $64 = ((($3)) + 11|0);
 $65 = load1($64);
 $66 = ($65<<24>>24)<(0);
 if (!($66)) {
  STACKTOP = sp;return ($54|0);
 }
 $67 = load4($3);
 _free($67);
 STACKTOP = sp;return ($54|0);
}
function __ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE9VNodeDatajEE6invokeEPFjS8_S9_jEPNS0_11BindingTypeIS8_EUt_EPS9_j($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
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
     $15 = load4(10072);
     $16 = (($15) + 0)|0;
     store4(10072,$16);
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
 $28 = (FUNCTION_TABLE_iiii[$0 & 31]($4,$5,$3)|0);
 $29 = ((($5)) + 48|0);
 $30 = ((($29)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 if ($32) {
  $33 = load4($29);
  _free($33);
 }
 $34 = ((($5)) + 36|0);
 $35 = ((($34)) + 11|0);
 $36 = load1($35);
 $37 = ($36<<24>>24)<(0);
 if ($37) {
  $38 = load4($34);
  _free($38);
 }
 $39 = ((($5)) + 28|0);
 $40 = load4($39);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($40);
 $41 = ((($5)) + 16|0);
 $42 = load4($41);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($42);
 $43 = ((($5)) + 4|0);
 $44 = load4($43);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($44);
 $45 = ((($4)) + 11|0);
 $46 = load1($45);
 $47 = ($46<<24>>24)<(0);
 if (!($47)) {
  STACKTOP = sp;return ($28|0);
 }
 $48 = load4($4);
 _free($48);
 STACKTOP = sp;return ($28|0);
}
function __ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE9VNodeDataS8_EE6invokeEPFjS8_S9_S8_EPNS0_11BindingTypeIS8_EUt_EPS9_SG_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$$i1 = 0, $$016$i = 0, $$016$i2 = 0, $$017$i = 0, $$017$i3 = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $4 = sp + 72|0;
 $5 = sp + 12|0;
 $6 = sp;
 $7 = ((($1)) + 4|0);
 $8 = load4($1);
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
     $16 = load4(10072);
     $17 = (($16) + 0)|0;
     store4(10072,$17);
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
 __ZN9VNodeDataC2ERKS_($5,$2);
 $29 = ((($3)) + 4|0);
 $30 = load4($3);
 ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
 $31 = ($30>>>0)>(4294967279);
 if ($31) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $32 = ($30>>>0)<(11);
 if ($32) {
  $47 = $30&255;
  $48 = ((($6)) + 11|0);
  store1($48,$47);
  $49 = ($30|0)==(0);
  if ($49) {
   $$017$i3 = $6;
  } else {
   $$016$i2 = $6;
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
     $38 = load4(10072);
     $39 = (($38) + 0)|0;
     store4(10072,$39);
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
  store4($6,$$lcssa$i7);
  $44 = $34 | -2147483648;
  $45 = ((($6)) + 8|0);
  store4($45,$44);
  $46 = ((($6)) + 4|0);
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
 $51 = (FUNCTION_TABLE_iiii[$0 & 31]($4,$5,$6)|0);
 $52 = ((($6)) + 11|0);
 $53 = load1($52);
 $54 = ($53<<24>>24)<(0);
 if ($54) {
  $55 = load4($6);
  _free($55);
 }
 $56 = ((($5)) + 48|0);
 $57 = ((($56)) + 11|0);
 $58 = load1($57);
 $59 = ($58<<24>>24)<(0);
 if ($59) {
  $60 = load4($56);
  _free($60);
 }
 $61 = ((($5)) + 36|0);
 $62 = ((($61)) + 11|0);
 $63 = load1($62);
 $64 = ($63<<24>>24)<(0);
 if ($64) {
  $65 = load4($61);
  _free($65);
 }
 $66 = ((($5)) + 28|0);
 $67 = load4($66);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($67);
 $68 = ((($5)) + 16|0);
 $69 = load4($68);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($69);
 $70 = ((($5)) + 4|0);
 $71 = load4($70);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($71);
 $72 = ((($4)) + 11|0);
 $73 = load1($72);
 $74 = ($73<<24>>24)<(0);
 if (!($74)) {
  STACKTOP = sp;return ($51|0);
 }
 $75 = load4($4);
 _free($75);
 STACKTOP = sp;return ($51|0);
}
function __ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE9VNodeDataNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjS8_S9_SC_EPNS0_11BindingTypeIS8_EUt_EPS9_PSC_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$i = 0, $$$i1 = 0, $$016$i = 0, $$017$i = 0, $$lcssa$i = 0, $$lcssa$i7 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0;
 var $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $9 = 0, $scevgep$i$i$i = 0, $scevgep4$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $4 = sp + 72|0;
 $5 = sp + 12|0;
 $6 = sp;
 $7 = ((($1)) + 4|0);
 $8 = load4($1);
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
     $16 = load4(10072);
     $17 = (($16) + 0)|0;
     store4(10072,$17);
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
 __ZN9VNodeDataC2ERKS_($5,$2);
 store4($6,0);
 $29 = ((($6)) + 4|0);
 store4($29,0);
 $30 = ((($6)) + 8|0);
 store4($30,0);
 $31 = ((($3)) + 4|0);
 $32 = load4($31);
 $33 = load4($3);
 $34 = (($32) - ($33))|0;
 $35 = $34 >> 2;
 $36 = ($35|0)==(0);
 if (!($36)) {
  $37 = ($35>>>0)>(1073741823);
  if ($37) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $38 = ($34|0)==(0);
  $$$i1 = $38 ? 1 : $34;
  $39 = (_malloc($$$i1)|0);
  $40 = ($39|0)==(0|0);
  L20: do {
   if ($40) {
    while(1) {
     $41 = load4(10072);
     $42 = (($41) + 0)|0;
     store4(10072,$42);
     $43 = ($41|0)==(0);
     if ($43) {
      $$lcssa$i7 = 0;
      break L20;
     }
     $44 = $41;
     FUNCTION_TABLE_v[$44 & 3]();
     $45 = (_malloc($$$i1)|0);
     $46 = ($45|0)==(0|0);
     if (!($46)) {
      $$lcssa$i7 = $45;
      break;
     }
    }
   } else {
    $$lcssa$i7 = $39;
   }
  } while(0);
  store4($29,$$lcssa$i7);
  store4($6,$$lcssa$i7);
  $47 = (($$lcssa$i7) + ($35<<2)|0);
  $48 = ((($6)) + 8|0);
  store4($48,$47);
  $49 = load4($3);
  $50 = load4($31);
  $51 = $49;
  $52 = (($50) - ($51))|0;
  $53 = ($52|0)>(0);
  if ($53) {
   $54 = $52 >> 2;
   $55 = (($$lcssa$i7) + ($54<<2)|0);
   _memcpy(($$lcssa$i7|0),($49|0),($52|0))|0;
   store4($29,$55);
  }
 }
 $56 = (FUNCTION_TABLE_iiii[$0 & 31]($4,$5,$6)|0);
 $57 = load4($6);
 $58 = ($57|0)==(0|0);
 $59 = $57;
 if (!($58)) {
  $60 = load4($29);
  $61 = ($60|0)==($57|0);
  if (!($61)) {
   $scevgep$i$i$i = ((($60)) + -4|0);
   $62 = $scevgep$i$i$i;
   $63 = (($62) - ($59))|0;
   $64 = $63 >>> 2;
   $65 = $64 ^ -1;
   $scevgep4$i$i$i = (($60) + ($65<<2)|0);
   store4($29,$scevgep4$i$i$i);
  }
  _free($57);
 }
 $66 = ((($5)) + 48|0);
 $67 = ((($66)) + 11|0);
 $68 = load1($67);
 $69 = ($68<<24>>24)<(0);
 if ($69) {
  $70 = load4($66);
  _free($70);
 }
 $71 = ((($5)) + 36|0);
 $72 = ((($71)) + 11|0);
 $73 = load1($72);
 $74 = ($73<<24>>24)<(0);
 if ($74) {
  $75 = load4($71);
  _free($75);
 }
 $76 = ((($5)) + 28|0);
 $77 = load4($76);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($77);
 $78 = ((($5)) + 16|0);
 $79 = load4($78);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($79);
 $80 = ((($5)) + 4|0);
 $81 = load4($80);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($81);
 $82 = ((($4)) + 11|0);
 $83 = load1($82);
 $84 = ($83<<24>>24)<(0);
 if (!($84)) {
  STACKTOP = sp;return ($56|0);
 }
 $85 = load4($4);
 _free($85);
 STACKTOP = sp;return ($56|0);
}
function __ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES8_9VNodeDataNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjS8_S8_S9_SC_EPNS0_11BindingTypeIS8_EUt_ESJ_PS9_PSC_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$$i = 0, $$$i1 = 0, $$$i9 = 0, $$016$i = 0, $$016$i2 = 0, $$017$i = 0, $$017$i3 = 0, $$lcssa$i = 0, $$lcssa$i15 = 0, $$lcssa$i7 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0;
 var $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0;
 var $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $scevgep$i$i$i = 0;
 var $scevgep4$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $5 = sp + 84|0;
 $6 = sp + 72|0;
 $7 = sp + 12|0;
 $8 = sp;
 $9 = ((($1)) + 4|0);
 $10 = load4($1);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $11 = ($10>>>0)>(4294967279);
 if ($11) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $12 = ($10>>>0)<(11);
 if ($12) {
  $27 = $10&255;
  $28 = ((($5)) + 11|0);
  store1($28,$27);
  $29 = ($10|0)==(0);
  if ($29) {
   $$017$i = $5;
  } else {
   $$016$i = $5;
   label = 9;
  }
 } else {
  $13 = (($10) + 16)|0;
  $14 = $13 & -16;
  $15 = ($14|0)==(0);
  $$$i = $15 ? 1 : $14;
  $16 = (_malloc($$$i)|0);
  $17 = ($16|0)==(0|0);
  L7: do {
   if ($17) {
    while(1) {
     $18 = load4(10072);
     $19 = (($18) + 0)|0;
     store4(10072,$19);
     $20 = ($18|0)==(0);
     if ($20) {
      $$lcssa$i = 0;
      break L7;
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
  store4($5,$$lcssa$i);
  $24 = $14 | -2147483648;
  $25 = ((($5)) + 8|0);
  store4($25,$24);
  $26 = ((($5)) + 4|0);
  store4($26,$10);
  $$016$i = $$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($$016$i|0),($9|0),($10|0))|0;
  $$017$i = $$016$i;
 }
 $30 = (($$017$i) + ($10)|0);
 store1($30,0);
 $31 = ((($2)) + 4|0);
 $32 = load4($2);
 ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
 $33 = ($32>>>0)>(4294967279);
 if ($33) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $34 = ($32>>>0)<(11);
 if ($34) {
  $49 = $32&255;
  $50 = ((($6)) + 11|0);
  store1($50,$49);
  $51 = ($32|0)==(0);
  if ($51) {
   $$017$i3 = $6;
  } else {
   $$016$i2 = $6;
   label = 18;
  }
 } else {
  $35 = (($32) + 16)|0;
  $36 = $35 & -16;
  $37 = ($36|0)==(0);
  $$$i1 = $37 ? 1 : $36;
  $38 = (_malloc($$$i1)|0);
  $39 = ($38|0)==(0|0);
  L21: do {
   if ($39) {
    while(1) {
     $40 = load4(10072);
     $41 = (($40) + 0)|0;
     store4(10072,$41);
     $42 = ($40|0)==(0);
     if ($42) {
      $$lcssa$i7 = 0;
      break L21;
     }
     $43 = $40;
     FUNCTION_TABLE_v[$43 & 3]();
     $44 = (_malloc($$$i1)|0);
     $45 = ($44|0)==(0|0);
     if (!($45)) {
      $$lcssa$i7 = $44;
      break;
     }
    }
   } else {
    $$lcssa$i7 = $38;
   }
  } while(0);
  store4($6,$$lcssa$i7);
  $46 = $36 | -2147483648;
  $47 = ((($6)) + 8|0);
  store4($47,$46);
  $48 = ((($6)) + 4|0);
  store4($48,$32);
  $$016$i2 = $$lcssa$i7;
  label = 18;
 }
 if ((label|0) == 18) {
  _memcpy(($$016$i2|0),($31|0),($32|0))|0;
  $$017$i3 = $$016$i2;
 }
 $52 = (($$017$i3) + ($32)|0);
 store1($52,0);
 __ZN9VNodeDataC2ERKS_($7,$3);
 store4($8,0);
 $53 = ((($8)) + 4|0);
 store4($53,0);
 $54 = ((($8)) + 8|0);
 store4($54,0);
 $55 = ((($4)) + 4|0);
 $56 = load4($55);
 $57 = load4($4);
 $58 = (($56) - ($57))|0;
 $59 = $58 >> 2;
 $60 = ($59|0)==(0);
 if (!($60)) {
  $61 = ($59>>>0)>(1073741823);
  if ($61) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $62 = ($58|0)==(0);
  $$$i9 = $62 ? 1 : $58;
  $63 = (_malloc($$$i9)|0);
  $64 = ($63|0)==(0|0);
  L34: do {
   if ($64) {
    while(1) {
     $65 = load4(10072);
     $66 = (($65) + 0)|0;
     store4(10072,$66);
     $67 = ($65|0)==(0);
     if ($67) {
      $$lcssa$i15 = 0;
      break L34;
     }
     $68 = $65;
     FUNCTION_TABLE_v[$68 & 3]();
     $69 = (_malloc($$$i9)|0);
     $70 = ($69|0)==(0|0);
     if (!($70)) {
      $$lcssa$i15 = $69;
      break;
     }
    }
   } else {
    $$lcssa$i15 = $63;
   }
  } while(0);
  store4($53,$$lcssa$i15);
  store4($8,$$lcssa$i15);
  $71 = (($$lcssa$i15) + ($59<<2)|0);
  $72 = ((($8)) + 8|0);
  store4($72,$71);
  $73 = load4($4);
  $74 = load4($55);
  $75 = $73;
  $76 = (($74) - ($75))|0;
  $77 = ($76|0)>(0);
  if ($77) {
   $78 = $76 >> 2;
   $79 = (($$lcssa$i15) + ($78<<2)|0);
   _memcpy(($$lcssa$i15|0),($73|0),($76|0))|0;
   store4($53,$79);
  }
 }
 $80 = (FUNCTION_TABLE_iiiii[$0 & 7]($5,$6,$7,$8)|0);
 $81 = load4($8);
 $82 = ($81|0)==(0|0);
 $83 = $81;
 if (!($82)) {
  $84 = load4($53);
  $85 = ($84|0)==($81|0);
  if (!($85)) {
   $scevgep$i$i$i = ((($84)) + -4|0);
   $86 = $scevgep$i$i$i;
   $87 = (($86) - ($83))|0;
   $88 = $87 >>> 2;
   $89 = $88 ^ -1;
   $scevgep4$i$i$i = (($84) + ($89<<2)|0);
   store4($53,$scevgep4$i$i$i);
  }
  _free($81);
 }
 $90 = ((($7)) + 48|0);
 $91 = ((($90)) + 11|0);
 $92 = load1($91);
 $93 = ($92<<24>>24)<(0);
 if ($93) {
  $94 = load4($90);
  _free($94);
 }
 $95 = ((($7)) + 36|0);
 $96 = ((($95)) + 11|0);
 $97 = load1($96);
 $98 = ($97<<24>>24)<(0);
 if ($98) {
  $99 = load4($95);
  _free($99);
 }
 $100 = ((($7)) + 28|0);
 $101 = load4($100);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($101);
 $102 = ((($7)) + 16|0);
 $103 = load4($102);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($103);
 $104 = ((($7)) + 4|0);
 $105 = load4($104);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($105);
 $106 = ((($6)) + 11|0);
 $107 = load1($106);
 $108 = ($107<<24>>24)<(0);
 if ($108) {
  $109 = load4($6);
  _free($109);
 }
 $110 = ((($5)) + 11|0);
 $111 = load1($110);
 $112 = ($111<<24>>24)<(0);
 if (!($112)) {
  STACKTOP = sp;return ($80|0);
 }
 $113 = load4($5);
 _free($113);
 STACKTOP = sp;return ($80|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJjEE6invokeEPFS2_jEj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$lcssa$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0;
 $2 = sp;
 FUNCTION_TABLE_vii[$0 & 7]($2,$1);
 $3 = (_malloc(112)|0);
 $4 = ($3|0)==(0|0);
 L1: do {
  if ($4) {
   while(1) {
    $5 = load4(10072);
    $6 = (($5) + 0)|0;
    store4(10072,$6);
    $7 = ($5|0)==(0);
    if ($7) {
     $$lcssa$i = 0;
     break L1;
    }
    $8 = $5;
    FUNCTION_TABLE_v[$8 & 3]();
    $9 = (_malloc(112)|0);
    $10 = ($9|0)==(0|0);
    if (!($10)) {
     $$lcssa$i = $9;
     break;
    }
   }
  } else {
   $$lcssa$i = $3;
  }
 } while(0);
 ; store8($$lcssa$i,load8($2,4),4); store4($$lcssa$i+8 | 0,load4($2+8 | 0,4),4);
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $11 = ((($$lcssa$i)) + 12|0);
 $12 = ((($2)) + 12|0);
 ; store8($11,load8($12,4),4); store4($11+8 | 0,load4($12+8 | 0,4),4);
 ; store8($12,i64_const(0,0),4); store4($12+8|0,0,4);
 $13 = ((($$lcssa$i)) + 24|0);
 $14 = ((($2)) + 24|0);
 ; store8($13,load8($14,4),4); store4($13+8 | 0,load4($14+8 | 0,4),4);
 ; store8($14,i64_const(0,0),4); store4($14+8|0,0,4);
 $15 = ((($$lcssa$i)) + 36|0);
 $16 = ((($2)) + 36|0);
 $17 = load4($16);
 store4($15,$17);
 $18 = ((($$lcssa$i)) + 40|0);
 $19 = ((($2)) + 40|0);
 $20 = load4($19);
 store4($18,$20);
 $21 = ((($2)) + 44|0);
 $22 = ((($$lcssa$i)) + 44|0);
 $23 = load4($21);
 store4($22,$23);
 $24 = ($23|0)==(0);
 if ($24) {
  store4($15,$18);
 } else {
  $25 = $20;
  $26 = ((($25)) + 8|0);
  store4($26,$18);
  $27 = ((($2)) + 40|0);
  store4($16,$27);
  store4($27,0);
  store4($21,0);
 }
 $28 = ((($$lcssa$i)) + 48|0);
 $29 = ((($2)) + 48|0);
 $30 = load4($29);
 store4($28,$30);
 $31 = ((($$lcssa$i)) + 52|0);
 $32 = ((($2)) + 52|0);
 $33 = load4($32);
 store4($31,$33);
 $34 = ((($2)) + 56|0);
 $35 = ((($$lcssa$i)) + 56|0);
 $36 = load4($34);
 store4($35,$36);
 $37 = ($36|0)==(0);
 if ($37) {
  store4($28,$31);
 } else {
  $38 = $33;
  $39 = ((($38)) + 8|0);
  store4($39,$31);
  $40 = ((($2)) + 52|0);
  store4($29,$40);
  store4($40,0);
  store4($34,0);
 }
 $41 = ((($$lcssa$i)) + 60|0);
 $42 = ((($2)) + 60|0);
 $43 = load4($42);
 store4($41,$43);
 $44 = ((($$lcssa$i)) + 64|0);
 $45 = ((($2)) + 64|0);
 $46 = load4($45);
 store4($44,$46);
 $47 = ((($2)) + 68|0);
 $48 = ((($$lcssa$i)) + 68|0);
 $49 = load4($47);
 store4($48,$49);
 $50 = ($49|0)==(0);
 if ($50) {
  store4($41,$44);
 } else {
  $51 = $46;
  $52 = ((($51)) + 8|0);
  store4($52,$44);
  $53 = ((($2)) + 64|0);
  store4($42,$53);
  store4($53,0);
  store4($47,0);
 }
 $54 = ((($$lcssa$i)) + 72|0);
 $55 = ((($2)) + 72|0);
 ; store8($54,load8($55,4),4); store4($54+8 | 0,load4($55+8 | 0,4),4);
 ; store8($55,i64_const(0,0),4); store4($55+8|0,0,4);
 $56 = ((($$lcssa$i)) + 84|0);
 $57 = ((($2)) + 84|0);
 ; store8($56,load8($57,4),4); store4($56+8 | 0,load4($57+8 | 0,4),4);
 ; store8($57,i64_const(0,0),4); store4($57+8|0,0,4);
 $58 = ((($$lcssa$i)) + 96|0);
 $59 = ((($2)) + 96|0);
 $60 = load4($59);
 store4($58,$60);
 store4($59,0);
 $61 = ((($$lcssa$i)) + 100|0);
 $62 = ((($2)) + 100|0);
 $63 = ((($$lcssa$i)) + 104|0);
 $64 = ((($$lcssa$i)) + 108|0);
 $65 = load4($62);
 store4($61,$65);
 $66 = ((($2)) + 104|0);
 $67 = load4($66);
 store4($63,$67);
 $68 = ((($2)) + 108|0);
 $69 = load4($68);
 store4($64,$69);
 store4($68,0);
 store4($66,0);
 store4($62,0);
 __ZN5VNodeD2Ev($2);
 STACKTOP = sp;return ($$lcssa$i|0);
}
function __ZN10emscripten8internal7InvokerIvJjEE6invokeEPFvjEj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 FUNCTION_TABLE_vi[$0 & 31]($1);
 return;
}
function __ZN10emscripten8internal7InvokerIjJNS_3valEEE6invokeEPFjS2_EPNS0_7_EM_VALE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 store4($2,$1);
 $3 = (FUNCTION_TABLE_ii[$0 & 31]($2)|0);
 $4 = load4($2);
 __emval_decref(($4|0));
 STACKTOP = sp;return ($3|0);
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
    $70 = load4(10072);
    $71 = (($70) + 0)|0;
    store4(10072,$71);
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
      $91 = load4(10072);
      $92 = (($91) + 0)|0;
      store4(10072,$92);
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
function __ZNSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEED0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZNKSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE7__cloneEv($0) {
 $0 = $0|0;
 var $$lcssa$i = 0, $1 = 0, $10 = i64(), $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (_malloc(12)|0);
 $2 = ($1|0)==(0|0);
 if ($2) {
  while(1) {
   $3 = load4(10072);
   $4 = (($3) + 0)|0;
   store4(10072,$4);
   $5 = $3;
   FUNCTION_TABLE_v[$5 & 3]();
   $6 = (_malloc(12)|0);
   $7 = ($6|0)==(0|0);
   if (!($7)) {
    $$lcssa$i = $6;
    break;
   }
  }
 } else {
  $$lcssa$i = $1;
 }
 $8 = ((($0)) + 4|0);
 store4($$lcssa$i,(2244));
 $9 = ((($$lcssa$i)) + 4|0);
 $10 = load8($8,4);
 store8($9,$10,4);
 return ($$lcssa$i|0);
}
function __ZNKSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE7__cloneEPNS0_6__baseISC_EE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 store4($1,(2244));
 $3 = ((($1)) + 4|0);
 $4 = load8($2,4);
 store8($3,$4,4);
 return;
}
function __ZNSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE7destroyEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE18destroy_deallocateEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZNSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEEclEv($0) {
 $0 = $0|0;
 var $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = load4($3);
 $5 = (($4) + -1)|0;
 store4($3,$5);
 $6 = ($5|0)==(0);
 if (!($6)) {
  STACKTOP = sp;return;
 }
 $7 = ((($0)) + 8|0);
 $8 = load4($7);
 $9 = load4($8);
 $10 = ((($9)) + 96|0);
 $11 = load4($10);
 __emval_incref(($11|0));
 $12 = (__emval_new_cstring((2871|0))|0);
 $13 = (__emval_get_property(($11|0),($12|0))|0);
 __emval_decref(($12|0));
 $14 = load4($7);
 $15 = load4($14);
 $16 = ((($15)) + 96|0);
 $17 = load4($16);
 $18 = $17;
 __emval_incref(($17|0));
 $19 = load1(9512);
 $20 = ($19<<24>>24)==(0);
 if ($20) {
  store1(9512,1);
  $21 = (__emval_get_method_caller(2,(2060|0))|0);
  store4(9556,$21);
  $22 = $21;
 } else {
  $$pre = load4(9556);
  $22 = $$pre;
 }
 __emval_incref(($17|0));
 store4($1,$18);
 __emval_call_void_method(($22|0),($13|0),(2847|0),($1|0));
 __emval_decref(($17|0));
 __emval_decref(($13|0));
 __emval_decref(($11|0));
 STACKTOP = sp;return;
}
function __ZNKSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE6targetERKSt9type_info($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($1)) + 4|0);
 $3 = load4($2);
 $4 = ($3|0)==(4643|0);
 $5 = ((($0)) + 4|0);
 $$0 = $4 ? $5 : 0;
 return ($$0|0);
}
function __ZNKSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE11target_typeEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1384|0);
}
function __ZNSt3__210__function6__baseIFvvEED2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt3__217bad_function_callD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZN10emscripten8internal7InvokerIjJjjEE6invokeEPFjjjEjj($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = (FUNCTION_TABLE_iii[$0 & 31]($1,$2)|0);
 return ($3|0);
}
function __ZN10emscripten8internal7InvokerIjJNS_3valEjEE6invokeEPFjS2_jEPNS0_7_EM_VALEj($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 store4($3,$1);
 $4 = (FUNCTION_TABLE_iii[$0 & 31]($3,$2)|0);
 $5 = load4($3);
 __emval_decref(($5|0));
 STACKTOP = sp;return ($4|0);
}
function __GLOBAL__sub_I_app_cpp() {
 var $$lcssa$i = 0, $$lcssa$i$i = 0, $$lcssa$i$i$i = 0, $$lcssa$i$i$i15 = 0, $$lcssa$i$i6 = 0, $$lcssa$i$i6$i = 0, $$lcssa$i$i85$i = 0, $$lcssa$i13$i = 0, $$lcssa$i13$i$i = 0, $$lcssa$i13$i$i29 = 0, $$lcssa$i13$i103$i = 0, $$lcssa$i13$i22$i = 0, $$lcssa$i20$i = 0, $$lcssa$i20$i$i = 0, $$lcssa$i20$i112$i = 0, $$lcssa$i27$i = 0, $$lcssa$i27$i$i = 0, $$lcssa$i27$i119$i = 0, $$lcssa$i28$i = 0, $$lcssa$i34$i = 0;
 var $$lcssa$i35 = 0, $$lcssa$i35$i = 0, $$lcssa$i41$i = 0, $$lcssa$i42$i = 0, $$lcssa$i48$i = 0, $$lcssa$i49$i = 0, $$lcssa$i55$i = 0, $$lcssa$i56$i = 0, $$lcssa$i6$i = 0, $$lcssa$i6$i$i = 0, $$lcssa$i6$i$i22 = 0, $$lcssa$i6$i15$i = 0, $$lcssa$i6$i94$i = 0, $$lcssa$i62$i = 0, $$lcssa$i63$i = 0, $$lcssa$i69$i = 0, $$lcssa$i70$i = 0, $$lcssa$i76$i = 0, $$lcssa$i77$i = 0, $$lcssa$i84$i = 0;
 var $$repack4$i$i$i$i = 0, $$repack4$i$i$i$i9 = 0, $$repack4$i$i$i79$i = 0, $$repack4$i$i$i8$i = 0, $$repack4$i$i$i87$i = 0, $$repack4$i$i28$i$i = 0, $$repack4$i$i28$i96$i = 0, $$repack4$i$i34$i$i = 0, $$repack4$i$i34$i105$i = 0, $$repack4$i$i40$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0;
 var $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0;
 var $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0;
 var $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0;
 var $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0;
 var $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0;
 var $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0;
 var $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0;
 var $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0;
 var $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0;
 var $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0;
 var $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0;
 var $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0;
 var $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0;
 var $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0;
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_class((1024|0),(1032|0),(1048|0),(0|0),(3548|0),(6|0),(3551|0),(0|0),(3551|0),(0|0),(2636|0),(3553|0),(18|0));
 __embind_register_class_constructor((1024|0),1,(1808|0),(3548|0),(7|0),(1|0));
 $0 = (_malloc(8)|0);
 $1 = ($0|0)==(0|0);
 L1: do {
  if ($1) {
   while(1) {
    $2 = load4(10072);
    $3 = (($2) + 0)|0;
    store4(10072,$3);
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
 store4($$lcssa$i$i$i,(8));
 $$repack4$i$i$i$i = ((($$lcssa$i$i$i)) + 4|0);
 store4($$repack4$i$i$i$i,0);
 __embind_register_class_function((1024|0),(3187|0),2,(1812|0),(3556|0),(2|0),($$lcssa$i$i$i|0),0);
 $8 = (_malloc(4)|0);
 $9 = ($8|0)==(0|0);
 L6: do {
  if ($9) {
   while(1) {
    $10 = load4(10072);
    $11 = (($10) + 0)|0;
    store4(10072,$11);
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
 store4($$lcssa$i6$i$i,(3));
 __embind_register_class_function((1024|0),(3192|0),3,(1820|0),(3680|0),(6|0),($$lcssa$i6$i$i|0),0);
 $16 = (_malloc(4)|0);
 $17 = ($16|0)==(0|0);
 L11: do {
  if ($17) {
   while(1) {
    $18 = load4(10072);
    $19 = (($18) + 0)|0;
    store4(10072,$19);
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
 __embind_register_class_function((1024|0),(3196|0),4,(1832|0),(3685|0),(4|0),($$lcssa$i13$i$i|0),0);
 __embind_register_class((1104|0),(1112|0),(1128|0),(0|0),(3548|0),(9|0),(3551|0),(0|0),(3551|0),(0|0),(2652|0),(3553|0),(19|0));
 __embind_register_class_constructor((1104|0),1,(1848|0),(3548|0),(10|0),(2|0));
 $24 = (_malloc(8)|0);
 $25 = ($24|0)==(0|0);
 L16: do {
  if ($25) {
   while(1) {
    $26 = load4(10072);
    $27 = (($26) + 0)|0;
    store4(10072,$27);
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
 store4($$lcssa$i$i6$i,(11));
 $$repack4$i$i$i8$i = ((($$lcssa$i$i6$i)) + 4|0);
 store4($$repack4$i$i$i8$i,0);
 __embind_register_class_function((1104|0),(3187|0),2,(1852|0),(3556|0),(4|0),($$lcssa$i$i6$i|0),0);
 $32 = (_malloc(4)|0);
 $33 = ($32|0)==(0|0);
 L21: do {
  if ($33) {
   while(1) {
    $34 = load4(10072);
    $35 = (($34) + 0)|0;
    store4(10072,$35);
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
 store4($$lcssa$i6$i15$i,(5));
 __embind_register_class_function((1104|0),(3192|0),3,(1860|0),(3680|0),(7|0),($$lcssa$i6$i15$i|0),0);
 $40 = (_malloc(4)|0);
 $41 = ($40|0)==(0|0);
 L26: do {
  if ($41) {
   while(1) {
    $42 = load4(10072);
    $43 = (($42) + 0)|0;
    store4(10072,$43);
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
 __embind_register_class_function((1104|0),(3196|0),4,(1872|0),(3685|0),(5|0),($$lcssa$i13$i22$i|0),0);
 __embind_register_class((1144|0),(1152|0),(1168|0),(0|0),(3548|0),(12|0),(3551|0),(0|0),(3551|0),(0|0),(2666|0),(3553|0),(20|0));
 __embind_register_class_constructor((1144|0),1,(1888|0),(3548|0),(13|0),(3|0));
 $48 = (_malloc(4)|0);
 $49 = ($48|0)==(0|0);
 L31: do {
  if ($49) {
   while(1) {
    $50 = load4(10072);
    $51 = (($50) + 0)|0;
    store4(10072,$51);
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
    $58 = load4(10072);
    $59 = (($58) + 0)|0;
    store4(10072,$59);
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
 __embind_register_class_property((1144|0),(2676|0),(1080|0),(3556|0),(6|0),($$lcssa$i$i|0),(1080|0),(4063|0),(3|0),($$lcssa$i28$i|0));
 $64 = (_malloc(4)|0);
 $65 = ($64|0)==(0|0);
 L41: do {
  if ($65) {
   while(1) {
    $66 = load4(10072);
    $67 = (($66) + 0)|0;
    store4(10072,$67);
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
    $74 = load4(10072);
    $75 = (($74) + 0)|0;
    store4(10072,$75);
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
 __embind_register_class_property((1144|0),(2680|0),(1080|0),(3556|0),(6|0),($$lcssa$i35$i|0),(1080|0),(4063|0),(3|0),($$lcssa$i42$i|0));
 $80 = (_malloc(4)|0);
 $81 = ($80|0)==(0|0);
 L51: do {
  if ($81) {
   while(1) {
    $82 = load4(10072);
    $83 = (($82) + 0)|0;
    store4(10072,$83);
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
    $90 = load4(10072);
    $91 = (($90) + 0)|0;
    store4(10072,$91);
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
 __embind_register_class_property((1144|0),(2683|0),(1024|0),(3556|0),(7|0),($$lcssa$i49$i|0),(1024|0),(4063|0),(4|0),($$lcssa$i56$i|0));
 $96 = (_malloc(4)|0);
 $97 = ($96|0)==(0|0);
 L61: do {
  if ($97) {
   while(1) {
    $98 = load4(10072);
    $99 = (($98) + 0)|0;
    store4(10072,$99);
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
    $106 = load4(10072);
    $107 = (($106) + 0)|0;
    store4(10072,$107);
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
 __embind_register_class_property((1144|0),(2689|0),(1024|0),(3556|0),(7|0),($$lcssa$i63$i|0),(1024|0),(4063|0),(4|0),($$lcssa$i70$i|0));
 $112 = (_malloc(4)|0);
 $113 = ($112|0)==(0|0);
 L71: do {
  if ($113) {
   while(1) {
    $114 = load4(10072);
    $115 = (($114) + 0)|0;
    store4(10072,$115);
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
    $122 = load4(10072);
    $123 = (($122) + 0)|0;
    store4(10072,$123);
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
 __embind_register_class_property((1144|0),(2695|0),(1104|0),(3556|0),(8|0),($$lcssa$i77$i|0),(1104|0),(4063|0),(5|0),($$lcssa$i84$i|0));
 __embind_register_value_object((1184|0),(2706|0),(4075|0),(4|0),(3553|0),(21|0));
 $128 = (_malloc(4)|0);
 $129 = ($128|0)==(0|0);
 L81: do {
  if ($129) {
   while(1) {
    $130 = load4(10072);
    $131 = (($130) + 0)|0;
    store4(10072,$131);
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
    $138 = load4(10072);
    $139 = (($138) + 0)|0;
    store4(10072,$139);
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
 __embind_register_value_object_field((1184|0),(2712|0),(1080|0),(3556|0),(9|0),($$lcssa$i$i6|0),(1080|0),(4063|0),(6|0),($$lcssa$i6$i|0));
 $144 = (_malloc(4)|0);
 $145 = ($144|0)==(0|0);
 L91: do {
  if ($145) {
   while(1) {
    $146 = load4(10072);
    $147 = (($146) + 0)|0;
    store4(10072,$147);
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
    $154 = load4(10072);
    $155 = (($154) + 0)|0;
    store4(10072,$155);
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
 __embind_register_value_object_field((1184|0),(2676|0),(1080|0),(3556|0),(9|0),($$lcssa$i13$i|0),(1080|0),(4063|0),(6|0),($$lcssa$i20$i|0));
 $160 = (_malloc(4)|0);
 $161 = ($160|0)==(0|0);
 L101: do {
  if ($161) {
   while(1) {
    $162 = load4(10072);
    $163 = (($162) + 0)|0;
    store4(10072,$163);
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
    $170 = load4(10072);
    $171 = (($170) + 0)|0;
    store4(10072,$171);
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
 __embind_register_value_object_field((1184|0),(2716|0),(1080|0),(3556|0),(9|0),($$lcssa$i27$i|0),(1080|0),(4063|0),(6|0),($$lcssa$i34$i|0));
 $176 = (_malloc(4)|0);
 $177 = ($176|0)==(0|0);
 L111: do {
  if ($177) {
   while(1) {
    $178 = load4(10072);
    $179 = (($178) + 0)|0;
    store4(10072,$179);
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
    $186 = load4(10072);
    $187 = (($186) + 0)|0;
    store4(10072,$187);
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
 __embind_register_value_object_field((1184|0),(2721|0),(1144|0),(3556|0),(10|0),($$lcssa$i41$i|0),(1144|0),(4063|0),(7|0),($$lcssa$i48$i|0));
 $192 = (_malloc(4)|0);
 $193 = ($192|0)==(0|0);
 L121: do {
  if ($193) {
   while(1) {
    $194 = load4(10072);
    $195 = (($194) + 0)|0;
    store4(10072,$195);
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
    $202 = load4(10072);
    $203 = (($202) + 0)|0;
    store4(10072,$203);
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
 __embind_register_value_object_field((1184|0),(2726|0),(1064|0),(3556|0),(11|0),($$lcssa$i55$i|0),(1064|0),(4063|0),(8|0),($$lcssa$i62$i|0));
 $208 = (_malloc(8)|0);
 $209 = ($208|0)==(0|0);
 L131: do {
  if ($209) {
   while(1) {
    $210 = load4(10072);
    $211 = (($210) + 0)|0;
    store4(10072,$211);
    $212 = ($210|0)==(0);
    if ($212) {
     $$lcssa$i69$i = 0;
     break L131;
    }
    $213 = $210;
    FUNCTION_TABLE_v[$213 & 3]();
    $214 = (_malloc(8)|0);
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
 store4($$lcssa$i69$i,(2));
 $$repack4$i$i40$i$i = ((($$lcssa$i69$i)) + 4|0);
 store4($$repack4$i$i40$i$i,0);
 $216 = (_malloc(8)|0);
 $217 = ($216|0)==(0|0);
 L136: do {
  if ($217) {
   while(1) {
    $218 = load4(10072);
    $219 = (($218) + 0)|0;
    store4(10072,$219);
    $220 = ($218|0)==(0);
    if ($220) {
     $$lcssa$i76$i = 0;
     break L136;
    }
    $221 = $218;
    FUNCTION_TABLE_v[$221 & 3]();
    $222 = (_malloc(8)|0);
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
 store4($$lcssa$i76$i,(3));
 $$repack4$i$i$i$i9 = ((($$lcssa$i76$i)) + 4|0);
 store4($$repack4$i$i$i$i9,0);
 __embind_register_value_object_field((1184|0),(2730|0),(1224|0),(3556|0),(12|0),($$lcssa$i69$i|0),(1224|0),(4063|0),(9|0),($$lcssa$i76$i|0));
 __embind_finalize_value_object((1184|0));
 __embind_register_class((1224|0),(1248|0),(1264|0),(0|0),(3548|0),(14|0),(3551|0),(0|0),(3551|0),(0|0),(2739|0),(3553|0),(22|0));
 __embind_register_class_constructor((1224|0),1,(1892|0),(3548|0),(15|0),(5|0));
 $224 = (_malloc(8)|0);
 $225 = ($224|0)==(0|0);
 L141: do {
  if ($225) {
   while(1) {
    $226 = load4(10072);
    $227 = (($226) + 0)|0;
    store4(10072,$227);
    $228 = ($226|0)==(0);
    if ($228) {
     $$lcssa$i$i$i15 = 0;
     break L141;
    }
    $229 = $226;
    FUNCTION_TABLE_v[$229 & 3]();
    $230 = (_malloc(8)|0);
    $231 = ($230|0)==(0|0);
    if (!($231)) {
     $$lcssa$i$i$i15 = $230;
     break;
    }
   }
  } else {
   $$lcssa$i$i$i15 = $224;
  }
 } while(0);
 store4($$lcssa$i$i$i15,(4));
 $$repack4$i$i$i79$i = ((($$lcssa$i$i$i15)) + 4|0);
 store4($$repack4$i$i$i79$i,0);
 __embind_register_class_function((1224|0),(4208|0),3,(1896|0),(4063|0),(10|0),($$lcssa$i$i$i15|0),0);
 $232 = (_malloc(8)|0);
 $233 = ($232|0)==(0|0);
 L146: do {
  if ($233) {
   while(1) {
    $234 = load4(10072);
    $235 = (($234) + 0)|0;
    store4(10072,$235);
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
 __embind_register_class_function((1224|0),(4218|0),4,(1908|0),(3685|0),(6|0),($$lcssa$i6$i$i22|0),0);
 $240 = (_malloc(8)|0);
 $241 = ($240|0)==(0|0);
 L151: do {
  if ($241) {
   while(1) {
    $242 = load4(10072);
    $243 = (($242) + 0)|0;
    store4(10072,$243);
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
 store4($$lcssa$i13$i$i29,(16));
 $$repack4$i$i34$i$i = ((($$lcssa$i13$i$i29)) + 4|0);
 store4($$repack4$i$i34$i$i,0);
 __embind_register_class_function((1224|0),(3187|0),2,(1924|0),(3556|0),(13|0),($$lcssa$i13$i$i29|0),0);
 $248 = (_malloc(4)|0);
 $249 = ($248|0)==(0|0);
 L156: do {
  if ($249) {
   while(1) {
    $250 = load4(10072);
    $251 = (($250) + 0)|0;
    store4(10072,$251);
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
 store4($$lcssa$i20$i$i,(14));
 __embind_register_class_function((1224|0),(3192|0),3,(1932|0),(3680|0),(8|0),($$lcssa$i20$i$i|0),0);
 $256 = (_malloc(4)|0);
 $257 = ($256|0)==(0|0);
 L161: do {
  if ($257) {
   while(1) {
    $258 = load4(10072);
    $259 = (($258) + 0)|0;
    store4(10072,$259);
    $260 = ($258|0)==(0);
    if ($260) {
     $$lcssa$i27$i$i = 0;
     break L161;
    }
    $261 = $258;
    FUNCTION_TABLE_v[$261 & 3]();
    $262 = (_malloc(4)|0);
    $263 = ($262|0)==(0|0);
    if (!($263)) {
     $$lcssa$i27$i$i = $262;
     break;
    }
   }
  } else {
   $$lcssa$i27$i$i = $256;
  }
 } while(0);
 store4($$lcssa$i27$i$i,(9));
 __embind_register_class_function((1224|0),(3196|0),4,(1944|0),(4314|0),(1|0),($$lcssa$i27$i$i|0),0);
 __embind_register_class((1304|0),(1328|0),(1344|0),(0|0),(3548|0),(17|0),(3551|0),(0|0),(3551|0),(0|0),(2751|0),(3553|0),(23|0));
 __embind_register_class_constructor((1304|0),1,(1960|0),(3548|0),(18|0),(6|0));
 $264 = (_malloc(8)|0);
 $265 = ($264|0)==(0|0);
 L166: do {
  if ($265) {
   while(1) {
    $266 = load4(10072);
    $267 = (($266) + 0)|0;
    store4(10072,$267);
    $268 = ($266|0)==(0);
    if ($268) {
     $$lcssa$i$i85$i = 0;
     break L166;
    }
    $269 = $266;
    FUNCTION_TABLE_v[$269 & 3]();
    $270 = (_malloc(8)|0);
    $271 = ($270|0)==(0|0);
    if (!($271)) {
     $$lcssa$i$i85$i = $270;
     break;
    }
   }
  } else {
   $$lcssa$i$i85$i = $264;
  }
 } while(0);
 store4($$lcssa$i$i85$i,(5));
 $$repack4$i$i$i87$i = ((($$lcssa$i$i85$i)) + 4|0);
 store4($$repack4$i$i$i87$i,0);
 __embind_register_class_function((1304|0),(4208|0),3,(1964|0),(4063|0),(12|0),($$lcssa$i$i85$i|0),0);
 $272 = (_malloc(8)|0);
 $273 = ($272|0)==(0|0);
 L171: do {
  if ($273) {
   while(1) {
    $274 = load4(10072);
    $275 = (($274) + 0)|0;
    store4(10072,$275);
    $276 = ($274|0)==(0);
    if ($276) {
     $$lcssa$i6$i94$i = 0;
     break L171;
    }
    $277 = $274;
    FUNCTION_TABLE_v[$277 & 3]();
    $278 = (_malloc(8)|0);
    $279 = ($278|0)==(0|0);
    if (!($279)) {
     $$lcssa$i6$i94$i = $278;
     break;
    }
   }
  } else {
   $$lcssa$i6$i94$i = $272;
  }
 } while(0);
 store4($$lcssa$i6$i94$i,(13));
 $$repack4$i$i28$i96$i = ((($$lcssa$i6$i94$i)) + 4|0);
 store4($$repack4$i$i28$i96$i,0);
 __embind_register_class_function((1304|0),(4218|0),4,(1976|0),(3685|0),(7|0),($$lcssa$i6$i94$i|0),0);
 $280 = (_malloc(8)|0);
 $281 = ($280|0)==(0|0);
 L176: do {
  if ($281) {
   while(1) {
    $282 = load4(10072);
    $283 = (($282) + 0)|0;
    store4(10072,$283);
    $284 = ($282|0)==(0);
    if ($284) {
     $$lcssa$i13$i103$i = 0;
     break L176;
    }
    $285 = $282;
    FUNCTION_TABLE_v[$285 & 3]();
    $286 = (_malloc(8)|0);
    $287 = ($286|0)==(0|0);
    if (!($287)) {
     $$lcssa$i13$i103$i = $286;
     break;
    }
   }
  } else {
   $$lcssa$i13$i103$i = $280;
  }
 } while(0);
 store4($$lcssa$i13$i103$i,(19));
 $$repack4$i$i34$i105$i = ((($$lcssa$i13$i103$i)) + 4|0);
 store4($$repack4$i$i34$i105$i,0);
 __embind_register_class_function((1304|0),(3187|0),2,(1992|0),(3556|0),(15|0),($$lcssa$i13$i103$i|0),0);
 $288 = (_malloc(4)|0);
 $289 = ($288|0)==(0|0);
 L181: do {
  if ($289) {
   while(1) {
    $290 = load4(10072);
    $291 = (($290) + 0)|0;
    store4(10072,$291);
    $292 = ($290|0)==(0);
    if ($292) {
     $$lcssa$i20$i112$i = 0;
     break L181;
    }
    $293 = $290;
    FUNCTION_TABLE_v[$293 & 3]();
    $294 = (_malloc(4)|0);
    $295 = ($294|0)==(0|0);
    if (!($295)) {
     $$lcssa$i20$i112$i = $294;
     break;
    }
   }
  } else {
   $$lcssa$i20$i112$i = $288;
  }
 } while(0);
 store4($$lcssa$i20$i112$i,(16));
 __embind_register_class_function((1304|0),(3192|0),3,(2000|0),(3680|0),(10|0),($$lcssa$i20$i112$i|0),0);
 $296 = (_malloc(4)|0);
 $297 = ($296|0)==(0|0);
 L186: do {
  if ($297) {
   while(1) {
    $298 = load4(10072);
    $299 = (($298) + 0)|0;
    store4(10072,$299);
    $300 = ($298|0)==(0);
    if ($300) {
     $$lcssa$i27$i119$i = 0;
     break L186;
    }
    $301 = $298;
    FUNCTION_TABLE_v[$301 & 3]();
    $302 = (_malloc(4)|0);
    $303 = ($302|0)==(0|0);
    if (!($303)) {
     $$lcssa$i27$i119$i = $302;
     break;
    }
   }
  } else {
   $$lcssa$i27$i119$i = $296;
  }
 } while(0);
 store4($$lcssa$i27$i119$i,(11));
 __embind_register_class_function((1304|0),(3196|0),4,(2012|0),(4314|0),(2|0),($$lcssa$i27$i119$i|0),0);
 $304 = (__emval_get_global((2766|0))|0);
 store4(10076,$304);
 __embind_register_function((2979|0),2,(2068|0),(3556|0),(17|0),(20|0));
 __embind_register_function((2984|0),3,(2076|0),(3680|0),(12|0),(18|0));
 __embind_register_function((2990|0),3,(2088|0),(3680|0),(13|0),(19|0));
 __embind_register_function((2996|0),3,(2100|0),(3680|0),(14|0),(20|0));
 __embind_register_function((3002|0),3,(2112|0),(3680|0),(15|0),(21|0));
 __embind_register_function((3008|0),3,(2124|0),(3680|0),(16|0),(22|0));
 __embind_register_function((3014|0),4,(2136|0),(4314|0),(3|0),(17|0));
 __embind_register_function((3021|0),4,(2152|0),(4314|0),(4|0),(18|0));
 __embind_register_function((3028|0),4,(2168|0),(4314|0),(5|0),(19|0));
 __embind_register_function((3035|0),5,(2184|0),(4475|0),(1|0),(6|0));
 __embind_register_function((3043|0),2,(2204|0),(3556|0),(23|0),(6|0));
 __embind_register_function((3053|0),2,(2212|0),(4482|0),(7|0),(24|0));
 __embind_register_function((3141|0),2,(2228|0),(3556|0),(24|0),(21|0));
 $305 = (_malloc(112)|0);
 $306 = ($305|0)==(0|0);
 L191: do {
  if ($306) {
   while(1) {
    $307 = load4(10072);
    $308 = (($307) + 0)|0;
    store4(10072,$308);
    $309 = ($307|0)==(0);
    if ($309) {
     $$lcssa$i = 0;
     break L191;
    }
    $310 = $307;
    FUNCTION_TABLE_v[$310 & 3]();
    $311 = (_malloc(112)|0);
    $312 = ($311|0)==(0|0);
    if (!($312)) {
     $$lcssa$i = $311;
     break;
    }
   }
  } else {
   $$lcssa$i = $305;
  }
 } while(0);
 $313 = ((($$lcssa$i)) + 36|0);
 $314 = ((($$lcssa$i)) + 40|0);
 store4($314,0);
 $315 = ((($$lcssa$i)) + 44|0);
 store4($315,0);
 ; store8($$lcssa$i,i64_const(0,0),4); store8($$lcssa$i+8|0,i64_const(0,0),4); store8($$lcssa$i+16|0,i64_const(0,0),4); store8($$lcssa$i+24|0,i64_const(0,0),4); store4($$lcssa$i+32|0,0,4);
 store4($313,$314);
 $316 = ((($$lcssa$i)) + 48|0);
 $317 = ((($$lcssa$i)) + 52|0);
 store4($317,0);
 $318 = ((($$lcssa$i)) + 56|0);
 store4($318,0);
 store4($316,$317);
 $319 = ((($$lcssa$i)) + 60|0);
 $320 = ((($$lcssa$i)) + 64|0);
 store4($320,0);
 $321 = ((($$lcssa$i)) + 68|0);
 store4($321,0);
 store4($319,$320);
 $322 = ((($$lcssa$i)) + 72|0);
 ; store8($322,i64_const(0,0),4); store8($322+8|0,i64_const(0,0),4); store8($322+16|0,i64_const(0,0),4);
 $323 = ((($$lcssa$i)) + 96|0);
 store4($323,(1));
 $324 = ((($$lcssa$i)) + 100|0);
 store4($324,0);
 $325 = ((($$lcssa$i)) + 104|0);
 store4($325,0);
 $326 = ((($$lcssa$i)) + 108|0);
 store4($326,0);
 store4(9528,$$lcssa$i);
 $327 = (_malloc(80)|0);
 $328 = ($327|0)==(0|0);
 if (!($328)) {
  $$lcssa$i35 = $327;
  store4(9532,$$lcssa$i35);
  $335 = ((($$lcssa$i35)) + 80|0);
  store4((9540),$335);
  ; store8($$lcssa$i35,i64_const(0,0),4); store8($$lcssa$i35+8|0,i64_const(0,0),4); store8($$lcssa$i35+16|0,i64_const(0,0),4); store8($$lcssa$i35+24|0,i64_const(0,0),4); store8($$lcssa$i35+32|0,i64_const(0,0),4); store8($$lcssa$i35+40|0,i64_const(0,0),4); store8($$lcssa$i35+48|0,i64_const(0,0),4); store8($$lcssa$i35+56|0,i64_const(0,0),4); store8($$lcssa$i35+64|0,i64_const(0,0),4); store8($$lcssa$i35+72|0,i64_const(0,0),4);
  store4((9536),$335);
  __embind_register_function((3159|0),3,(2300|0),(3680|0),(20|0),(25|0));
  __embind_register_function((3172|0),3,(2312|0),(3680|0),(21|0),(26|0));
  return;
 }
 while(1) {
  $329 = load4(10072);
  $330 = (($329) + 0)|0;
  store4(10072,$330);
  $331 = ($329|0)==(0);
  if ($331) {
   $$lcssa$i35 = 0;
   label = 121;
   break;
  }
  $332 = $329;
  FUNCTION_TABLE_v[$332 & 3]();
  $333 = (_malloc(80)|0);
  $334 = ($333|0)==(0|0);
  if (!($334)) {
   $$lcssa$i35 = $333;
   label = 121;
   break;
  }
 }
 if ((label|0) == 121) {
  store4(9532,$$lcssa$i35);
  $335 = ((($$lcssa$i35)) + 80|0);
  store4((9540),$335);
  ; store8($$lcssa$i35,i64_const(0,0),4); store8($$lcssa$i35+8|0,i64_const(0,0),4); store8($$lcssa$i35+16|0,i64_const(0,0),4); store8($$lcssa$i35+24|0,i64_const(0,0),4); store8($$lcssa$i35+32|0,i64_const(0,0),4); store8($$lcssa$i35+40|0,i64_const(0,0),4); store8($$lcssa$i35+48|0,i64_const(0,0),4); store8($$lcssa$i35+56|0,i64_const(0,0),4); store8($$lcssa$i35+64|0,i64_const(0,0),4); store8($$lcssa$i35+72|0,i64_const(0,0),4);
  store4((9536),$335);
  __embind_register_function((3159|0),3,(2300|0),(3680|0),(20|0),(25|0));
  __embind_register_function((3172|0),3,(2312|0),(3680|0),(21|0),(26|0));
  return;
 }
}
function __GLOBAL__sub_I_bind_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_void((1680|0),(4756|0));
 __embind_register_bool((1696|0),(4761|0),1,1,0);
 __embind_register_integer((1704|0),(4766|0),1,-128,127);
 __embind_register_integer((1720|0),(9391|0),1,-128,127);
 __embind_register_integer((1712|0),(9403|0),1,0,255);
 __embind_register_integer((1728|0),(9417|0),2,-32768,32767);
 __embind_register_integer((1736|0),(9423|0),2,0,65535);
 __embind_register_integer((1744|0),(9440|0),4,-2147483648,2147483647);
 __embind_register_integer((1752|0),(9444|0),4,0,-1);
 __embind_register_integer((1760|0),(4771|0),4,-2147483648,2147483647);
 __embind_register_integer((1768|0),(9457|0),4,0,-1);
 __embind_register_float((1776|0),(9471|0),4);
 __embind_register_float((1784|0),(9477|0),8);
 __embind_register_std_string((1080|0),(9379|0));
 __embind_register_std_string((1408|0),(4776|0));
 __embind_register_std_wstring((1432|0),4,(4809|0));
 __embind_register_emval((1064|0),(4822|0));
 __embind_register_memory_view((1456|0),0,(4838|0));
 __embind_register_memory_view((1464|0),0,(4868|0));
 __embind_register_memory_view((1472|0),1,(4905|0));
 __embind_register_memory_view((1480|0),2,(4944|0));
 __embind_register_memory_view((1488|0),3,(4975|0));
 __embind_register_memory_view((1496|0),4,(5015|0));
 __embind_register_memory_view((1504|0),5,(5044|0));
 __embind_register_memory_view((1512|0),4,(5082|0));
 __embind_register_memory_view((1520|0),5,(5112|0));
 __embind_register_memory_view((1464|0),0,(5151|0));
 __embind_register_memory_view((1472|0),1,(5183|0));
 __embind_register_memory_view((1480|0),2,(5216|0));
 __embind_register_memory_view((1488|0),3,(5249|0));
 __embind_register_memory_view((1496|0),4,(5283|0));
 __embind_register_memory_view((1504|0),5,(5316|0));
 __embind_register_memory_view((1528|0),6,(5350|0));
 __embind_register_memory_view((1536|0),7,(5381|0));
 __embind_register_memory_view((1544|0),7,(5413|0));
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
  store4(9564,$5);
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
   store4(9564,$18);
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
  store4(9564,$8);
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
     store4(9564,75);
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
   $146 = ((5948 + (($$0252*58)|0)|0) + ($143)|0);
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
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 6428;$$2256 = $$0254;$$4266 = $$1263$;
     label = 76;
    } else {
     $208 = $$0$lcssa$i300;
     $209 = (($15) - ($208))|0;
     $210 = ($$0254|0)>($209|0);
     $211 = (($209) + 1)|0;
     $$0254$ = $210 ? $$0254 : $211;
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 6428;$$2256 = $$0254$;$$4266 = $$1263$;
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
     $$0232 = 1;$$0237 = 6428;$219 = $214;
     label = 75;
     break L74;
    }
    $215 = $$1263$ & 2048;
    $216 = ($215|0)==(0);
    $217 = $$1263$ & 1;
    if ($216) {
     $218 = ($217|0)==(0);
     $$ = $218 ? 6428 : (6430);
     $$0232 = $217;$$0237 = $$;$219 = $212;
     label = 75;
    } else {
     $$0232 = 1;$$0237 = (6429);$219 = $212;
     label = 75;
    }
    break;
   }
   case 117:  {
    $$pre456 = load8($9);
    $$0232 = 0;$$0237 = 6428;$219 = $$pre456;
    label = 75;
    break;
   }
   case 99:  {
    $232 = load8($9);
    $233 = i64_trunc($232)&255;
    store1($16,$233);
    $$2 = $16;$$2234 = 0;$$2239 = 6428;$$2251 = $14;$$5 = 1;$$6268 = $165;
    break;
   }
   case 109:  {
    $234 = load4(9564);
    $$015$i = 0;
    while(1) {
     $236 = (6476 + ($$015$i)|0);
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
      $$01113$i = 6564;$$114$i = 87;
      break;
     } else {
      $$015$i = $240;
     }
    }
    if ((label|0) == 80) {
     label = 0;
     $235 = ($$015$i|0)==(0);
     if ($235) {
      $$1 = 6564;
      label = 87;
      break L74;
     } else {
      $$01113$i = 6564;$$114$i = $$015$i;
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
    $249 = $248 ? $247 : 6438;
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
     $$0471$i = $315;$$0520$i = 1;$$0522$i = 6445;
    } else {
     $316 = $$1263$ & 2048;
     $317 = ($316|0)==(0);
     $318 = $$1263$ & 1;
     if ($317) {
      $319 = ($318|0)==(0);
      $$$i = $319 ? (6446) : (6451);
      $$0471$i = $312;$$0520$i = $318;$$0522$i = $$$i;
     } else {
      $$0471$i = $312;$$0520$i = 1;$$0522$i = (6448);
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
        $382 = (6412 + ($381)|0);
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
          ___fwritex(9438,1,$0);
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
            ___fwritex(9438,1,$0);
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
      $325 = $324 ? 6464 : 6468;
      $326 = ($$0471$i != $$0471$i) | (0.0 != 0.0);
      $327 = $324 ? 8368 : 6472;
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
    $$2 = $$0321;$$2234 = 0;$$2239 = 6428;$$2251 = $14;$$5 = $$0254;$$6268 = $$1263$;
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
      $184 = (6412 + ($183)|0);
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
    $197 = (6428 + ($196)|0);
    $$332 = $or$cond282 ? 6428 : $197;
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
    $$2 = $$1;$$2234 = 0;$$2239 = 6428;$$2251 = $$1250;$$5 = $$3257;$$6268 = $165;
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
    store4(9564,84);
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
 $1 = load4((2340));
 $2 = ($1|0)==(0|0);
 if ($2) {
  $3 = (___towrite(2324)|0);
  $4 = ($3|0)==(0);
  if ($4) {
   $$pre = load4((2340));
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
   $5 = load4((2344));
   $6 = ($5>>>0)>=($7>>>0);
   $8 = load1((2399));
   $9 = ($8<<24>>24)==(10);
   $or$cond = $6 | $9;
   if (!($or$cond)) {
    $10 = ((($5)) + 1|0);
    store4((2344),$10);
    store1($5,10);
    $$0 = 10;
    break;
   }
   $11 = load4((2360));
   $12 = (FUNCTION_TABLE_iiii[$11 & 31](2324,$0,1)|0);
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
   $8 = load4(9568);
   $9 = $8 >>> $7;
   $10 = $9 & 3;
   $11 = ($10|0)==(0);
   if (!($11)) {
    $12 = $9 & 1;
    $13 = $12 ^ 1;
    $14 = (($13) + ($7))|0;
    $15 = $14 << 1;
    $16 = (9608 + ($15<<2)|0);
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
      store4(9568,$24);
     } else {
      $25 = load4((9584));
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
   $37 = load4((9576));
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
     $69 = (9608 + ($68<<2)|0);
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
       store4(9568,$77);
       $98 = $77;
      } else {
       $78 = load4((9584));
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
      $92 = load4((9588));
      $93 = $37 >>> 3;
      $94 = $93 << 1;
      $95 = (9608 + ($94<<2)|0);
      $96 = 1 << $93;
      $97 = $98 & $96;
      $99 = ($97|0)==(0);
      if ($99) {
       $100 = $98 | $96;
       store4(9568,$100);
       $$pre = ((($95)) + 8|0);
       $$0199 = $95;$$pre$phiZ2D = $$pre;
      } else {
       $101 = ((($95)) + 8|0);
       $102 = load4($101);
       $103 = load4((9584));
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
     store4((9576),$84);
     store4((9588),$87);
     $$0 = $72;
     STACKTOP = sp;return ($$0|0);
    }
    $108 = load4((9572));
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
     $133 = (9872 + ($132<<2)|0);
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
     $151 = load4((9584));
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
       $185 = (9872 + ($184<<2)|0);
       $186 = load4($185);
       $187 = ($$0190$i|0)==($186|0);
       if ($187) {
        store4($185,$$3$i);
        $cond$i = ($$3$i|0)==(0|0);
        if ($cond$i) {
         $188 = 1 << $184;
         $189 = $188 ^ -1;
         $190 = $108 & $189;
         store4((9572),$190);
         break;
        }
       } else {
        $191 = load4((9584));
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
       $198 = load4((9584));
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
        $210 = load4((9584));
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
       $228 = load4((9588));
       $229 = $37 >>> 3;
       $230 = $229 << 1;
       $231 = (9608 + ($230<<2)|0);
       $232 = 1 << $229;
       $233 = $232 & $8;
       $234 = ($233|0)==(0);
       if ($234) {
        $235 = $232 | $8;
        store4(9568,$235);
        $$pre$i = ((($231)) + 8|0);
        $$0187$i = $231;$$pre$phi$iZ2D = $$pre$i;
       } else {
        $236 = ((($231)) + 8|0);
        $237 = load4($236);
        $238 = load4((9584));
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
      store4((9576),$$0191$i);
      store4((9588),$153);
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
    $247 = load4((9572));
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
     $275 = (9872 + ($$0356$i<<2)|0);
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
       $329 = (9872 + ($328<<2)|0);
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
      $344 = load4((9576));
      $345 = (($344) - ($246))|0;
      $346 = ($$4349$lcssa$i>>>0)<($345>>>0);
      if ($346) {
       $347 = load4((9584));
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
         $381 = (9872 + ($380<<2)|0);
         $382 = load4($381);
         $383 = ($$4$lcssa$i|0)==($382|0);
         if ($383) {
          store4($381,$$3370$i);
          $cond$i204 = ($$3370$i|0)==(0|0);
          if ($cond$i204) {
           $384 = 1 << $380;
           $385 = $384 ^ -1;
           $386 = $247 & $385;
           store4((9572),$386);
           $470 = $386;
           break;
          }
         } else {
          $387 = load4((9584));
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
         $394 = load4((9584));
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
          $406 = load4((9584));
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
          $426 = (9608 + ($425<<2)|0);
          $427 = load4(9568);
          $428 = 1 << $423;
          $429 = $427 & $428;
          $430 = ($429|0)==(0);
          if ($430) {
           $431 = $427 | $428;
           store4(9568,$431);
           $$pre$i205 = ((($426)) + 8|0);
           $$0366$i = $426;$$pre$phi$i206Z2D = $$pre$i205;
          } else {
           $432 = ((($426)) + 8|0);
           $433 = load4($432);
           $434 = load4((9584));
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
         $464 = (9872 + ($$0359$i<<2)|0);
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
          store4((9572),$472);
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
          $491 = load4((9584));
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
          $498 = load4((9584));
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
 $506 = load4((9576));
 $507 = ($506>>>0)<($$0197>>>0);
 if (!($507)) {
  $508 = (($506) - ($$0197))|0;
  $509 = load4((9588));
  $510 = ($508>>>0)>(15);
  if ($510) {
   $511 = (($509) + ($$0197)|0);
   store4((9588),$511);
   store4((9576),$508);
   $512 = $508 | 1;
   $513 = ((($511)) + 4|0);
   store4($513,$512);
   $514 = (($511) + ($508)|0);
   store4($514,$508);
   $515 = $$0197 | 3;
   $516 = ((($509)) + 4|0);
   store4($516,$515);
  } else {
   store4((9576),0);
   store4((9588),0);
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
 $524 = load4((9580));
 $525 = ($524>>>0)>($$0197>>>0);
 if ($525) {
  $526 = (($524) - ($$0197))|0;
  store4((9580),$526);
  $527 = load4((9592));
  $528 = (($527) + ($$0197)|0);
  store4((9592),$528);
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
 $534 = load4(10040);
 $535 = ($534|0)==(0);
 if ($535) {
  store4((10048),4096);
  store4((10044),4096);
  store4((10052),-1);
  store4((10056),-1);
  store4((10060),0);
  store4((10012),0);
  $536 = $1;
  $537 = $536 & -16;
  $538 = $537 ^ 1431655768;
  store4($1,$538);
  store4(10040,$538);
  $542 = 4096;
 } else {
  $$pre$i208 = load4((10048));
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
 $546 = load4((10008));
 $547 = ($546|0)==(0);
 if (!($547)) {
  $548 = load4((10000));
  $549 = (($548) + ($544))|0;
  $550 = ($549>>>0)<=($548>>>0);
  $551 = ($549>>>0)>($546>>>0);
  $or$cond1$i210 = $550 | $551;
  if ($or$cond1$i210) {
   $$0 = 0;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $552 = load4((10012));
 $553 = $552 & 4;
 $554 = ($553|0)==(0);
 L255: do {
  if ($554) {
   $555 = load4((9592));
   $556 = ($555|0)==(0|0);
   L257: do {
    if ($556) {
     label = 172;
    } else {
     $$0$i17$i = (10016);
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
      $569 = load4((10044));
      $570 = (($569) + -1)|0;
      $571 = $570 & $568;
      $572 = ($571|0)==(0);
      $573 = (($570) + ($568))|0;
      $574 = (0 - ($569))|0;
      $575 = $573 & $574;
      $576 = (($575) - ($568))|0;
      $577 = $572 ? 0 : $576;
      $$$i = (($577) + ($544))|0;
      $578 = load4((10000));
      $579 = (($$$i) + ($578))|0;
      $580 = ($$$i>>>0)>($$0197>>>0);
      $581 = ($$$i>>>0)<(2147483647);
      $or$cond$i211 = $580 & $581;
      if ($or$cond$i211) {
       $582 = load4((10008));
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
       $601 = load4((10048));
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
   $611 = load4((10012));
   $612 = $611 | 4;
   store4((10012),$612);
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
  $623 = load4((10000));
  $624 = (($623) + ($$723947$i))|0;
  store4((10000),$624);
  $625 = load4((10004));
  $626 = ($624>>>0)>($625>>>0);
  if ($626) {
   store4((10004),$624);
  }
  $627 = load4((9592));
  $628 = ($627|0)==(0|0);
  do {
   if ($628) {
    $629 = load4((9584));
    $630 = ($629|0)==(0|0);
    $631 = ($$748$i>>>0)<($629>>>0);
    $or$cond12$i = $630 | $631;
    if ($or$cond12$i) {
     store4((9584),$$748$i);
    }
    store4((10016),$$748$i);
    store4((10020),$$723947$i);
    store4((10028),0);
    $632 = load4(10040);
    store4((9604),$632);
    store4((9600),-1);
    $$01$i$i = 0;
    while(1) {
     $633 = $$01$i$i << 1;
     $634 = (9608 + ($633<<2)|0);
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
    store4((9592),$646);
    store4((9580),$647);
    $648 = $647 | 1;
    $649 = ((($646)) + 4|0);
    store4($649,$648);
    $650 = (($646) + ($647)|0);
    $651 = ((($650)) + 4|0);
    store4($651,40);
    $652 = load4((10056));
    store4((9596),$652);
   } else {
    $$024370$i = (10016);
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
       $668 = load4((9580));
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
       store4((9592),$676);
       store4((9580),$678);
       $679 = $678 | 1;
       $680 = ((($676)) + 4|0);
       store4($680,$679);
       $681 = (($676) + ($678)|0);
       $682 = ((($681)) + 4|0);
       store4($682,40);
       $683 = load4((10056));
       store4((9596),$683);
       break;
      }
     }
    }
    $684 = load4((9584));
    $685 = ($$748$i>>>0)<($684>>>0);
    if ($685) {
     store4((9584),$$748$i);
     $749 = $$748$i;
    } else {
     $749 = $684;
    }
    $686 = (($$748$i) + ($$723947$i)|0);
    $$124469$i = (10016);
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
      $$0$i$i$i = (10016);
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
        $723 = load4((9580));
        $724 = (($723) + ($719))|0;
        store4((9580),$724);
        store4((9592),$718);
        $725 = $724 | 1;
        $726 = ((($718)) + 4|0);
        store4($726,$725);
       } else {
        $727 = load4((9588));
        $728 = ($714|0)==($727|0);
        if ($728) {
         $729 = load4((9576));
         $730 = (($729) + ($719))|0;
         store4((9576),$730);
         store4((9588),$718);
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
           $746 = (9608 + ($745<<2)|0);
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
            $756 = load4(9568);
            $757 = $756 & $755;
            store4(9568,$757);
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
           $794 = (9872 + ($793<<2)|0);
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
             $799 = load4((9572));
             $800 = $799 & $798;
             store4((9572),$800);
             break L326;
            } else {
             $801 = load4((9584));
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
           $808 = load4((9584));
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
           $820 = load4((9584));
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
         $835 = (9608 + ($834<<2)|0);
         $836 = load4(9568);
         $837 = 1 << $832;
         $838 = $836 & $837;
         $839 = ($838|0)==(0);
         do {
          if ($839) {
           $840 = $836 | $837;
           store4(9568,$840);
           $$pre$i19$i = ((($835)) + 8|0);
           $$0294$i$i = $835;$$pre$phi$i20$iZ2D = $$pre$i19$i;
          } else {
           $841 = ((($835)) + 8|0);
           $842 = load4($841);
           $843 = load4((9584));
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
        $873 = (9872 + ($$0295$i$i<<2)|0);
        $874 = ((($718)) + 28|0);
        store4($874,$$0295$i$i);
        $875 = ((($718)) + 16|0);
        $876 = ((($875)) + 4|0);
        store4($876,0);
        store4($875,0);
        $877 = load4((9572));
        $878 = 1 << $$0295$i$i;
        $879 = $877 & $878;
        $880 = ($879|0)==(0);
        if ($880) {
         $881 = $877 | $878;
         store4((9572),$881);
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
         $900 = load4((9584));
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
         $907 = load4((9584));
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
      $$0$i$i$i = (10016);
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
    store4((9592),$944);
    store4((9580),$945);
    $946 = $945 | 1;
    $947 = ((($944)) + 4|0);
    store4($947,$946);
    $948 = (($944) + ($945)|0);
    $949 = ((($948)) + 4|0);
    store4($949,40);
    $950 = load4((10056));
    store4((9596),$950);
    $951 = ((($933)) + 4|0);
    store4($951,27);
    ; store8($934,load8((10016),4),4); store8($934+8 | 0,load8((10016)+8 | 0,4),4);
    store4((10016),$$748$i);
    store4((10020),$$723947$i);
    store4((10028),0);
    store4((10024),$934);
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
      $966 = (9608 + ($965<<2)|0);
      $967 = load4(9568);
      $968 = 1 << $963;
      $969 = $967 & $968;
      $970 = ($969|0)==(0);
      if ($970) {
       $971 = $967 | $968;
       store4(9568,$971);
       $$pre$i$i = ((($966)) + 8|0);
       $$0211$i$i = $966;$$pre$phi$i$iZ2D = $$pre$i$i;
      } else {
       $972 = ((($966)) + 8|0);
       $973 = load4($972);
       $974 = load4((9584));
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
     $1004 = (9872 + ($$0212$i$i<<2)|0);
     $1005 = ((($627)) + 28|0);
     store4($1005,$$0212$i$i);
     $1006 = ((($627)) + 20|0);
     store4($1006,0);
     store4($931,0);
     $1007 = load4((9572));
     $1008 = 1 << $$0212$i$i;
     $1009 = $1007 & $1008;
     $1010 = ($1009|0)==(0);
     if ($1010) {
      $1011 = $1007 | $1008;
      store4((9572),$1011);
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
      $1030 = load4((9584));
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
      $1037 = load4((9584));
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
  $1045 = load4((9580));
  $1046 = ($1045>>>0)>($$0197>>>0);
  if ($1046) {
   $1047 = (($1045) - ($$0197))|0;
   store4((9580),$1047);
   $1048 = load4((9592));
   $1049 = (($1048) + ($$0197)|0);
   store4((9592),$1049);
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
 store4(9564,12);
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
 $3 = load4((9584));
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
   $19 = load4((9588));
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
    store4((9576),$17);
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
    $28 = (9608 + ($27<<2)|0);
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
     $37 = load4(9568);
     $38 = $37 & $36;
     store4(9568,$38);
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
    $75 = (9872 + ($74<<2)|0);
    $76 = load4($75);
    $77 = ($16|0)==($76|0);
    if ($77) {
     store4($75,$$3);
     $cond418 = ($$3|0)==(0|0);
     if ($cond418) {
      $78 = 1 << $74;
      $79 = $78 ^ -1;
      $80 = load4((9572));
      $81 = $80 & $79;
      store4((9572),$81);
      $$1 = $16;$$1380 = $17;
      break;
     }
    } else {
     $82 = load4((9584));
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
    $89 = load4((9584));
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
     $101 = load4((9584));
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
  $120 = load4((9592));
  $121 = ($10|0)==($120|0);
  if ($121) {
   $122 = load4((9580));
   $123 = (($122) + ($$1380))|0;
   store4((9580),$123);
   store4((9592),$$1);
   $124 = $123 | 1;
   $125 = ((($$1)) + 4|0);
   store4($125,$124);
   $126 = load4((9588));
   $127 = ($$1|0)==($126|0);
   if (!($127)) {
    return;
   }
   store4((9588),0);
   store4((9576),0);
   return;
  }
  $128 = load4((9588));
  $129 = ($10|0)==($128|0);
  if ($129) {
   $130 = load4((9576));
   $131 = (($130) + ($$1380))|0;
   store4((9576),$131);
   store4((9588),$$1);
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
    $144 = (9608 + ($143<<2)|0);
    $145 = ($140|0)==($144|0);
    if (!($145)) {
     $146 = load4((9584));
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
     $154 = load4(9568);
     $155 = $154 & $153;
     store4(9568,$155);
     break;
    }
    $156 = ($142|0)==($144|0);
    if ($156) {
     $$pre438 = ((($142)) + 8|0);
     $$pre$phi439Z2D = $$pre438;
    } else {
     $157 = load4((9584));
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
      $190 = load4((9584));
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
      $170 = load4((9584));
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
     $195 = (9872 + ($194<<2)|0);
     $196 = load4($195);
     $197 = ($10|0)==($196|0);
     if ($197) {
      store4($195,$$3398);
      $cond419 = ($$3398|0)==(0|0);
      if ($cond419) {
       $198 = 1 << $194;
       $199 = $198 ^ -1;
       $200 = load4((9572));
       $201 = $200 & $199;
       store4((9572),$201);
       break;
      }
     } else {
      $202 = load4((9584));
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
     $209 = load4((9584));
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
      $221 = load4((9584));
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
  $228 = load4((9588));
  $229 = ($$1|0)==($228|0);
  if ($229) {
   store4((9576),$136);
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
  $237 = (9608 + ($236<<2)|0);
  $238 = load4(9568);
  $239 = 1 << $234;
  $240 = $238 & $239;
  $241 = ($240|0)==(0);
  if ($241) {
   $242 = $238 | $239;
   store4(9568,$242);
   $$pre = ((($237)) + 8|0);
   $$0401 = $237;$$pre$phiZ2D = $$pre;
  } else {
   $243 = ((($237)) + 8|0);
   $244 = load4($243);
   $245 = load4((9584));
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
 $275 = (9872 + ($$0394<<2)|0);
 $276 = ((($$1)) + 28|0);
 store4($276,$$0394);
 $277 = ((($$1)) + 16|0);
 $278 = ((($$1)) + 20|0);
 store4($278,0);
 store4($277,0);
 $279 = load4((9572));
 $280 = 1 << $$0394;
 $281 = $279 & $280;
 $282 = ($281|0)==(0);
 do {
  if ($282) {
   $283 = $279 | $280;
   store4((9572),$283);
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
    $302 = load4((9584));
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
    $309 = load4((9584));
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
 $316 = load4((9600));
 $317 = (($316) + -1)|0;
 store4((9600),$317);
 $318 = ($317|0)==(0);
 if ($318) {
  $$0211$in$i = (10024);
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
 store4((9600),-1);
 return;
}
function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((8372|0),(8395|0),304,(8618|0));
 // unreachable;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((8492|0),(8521|0),1183,(8618|0));
 // unreachable;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((8639|0),(8521|0),1194,(8668|0));
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
 $1 = (_pthread_once((10064|0),(2|0))|0);
 $2 = ($1|0)==(0);
 if (!($2)) {
  _abort_message(8964,$vararg_buffer);
  // unreachable;
 }
 $3 = load4(10068);
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
    store4($vararg_buffer9,8825);
    _abort_message(8775,$vararg_buffer9);
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
   $20 = (__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(1552,$17,$0)|0);
   if ($20) {
    $21 = load4($0);
    $22 = load4($21);
    $23 = ((($22)) + 8|0);
    $24 = load4($23);
    $25 = (FUNCTION_TABLE_ii[$24 & 31]($21)|0);
    store4($vararg_buffer1,8825);
    $vararg_ptr3 = ((($vararg_buffer1)) + 4|0);
    store4($vararg_ptr3,$19);
    $vararg_ptr4 = ((($vararg_buffer1)) + 8|0);
    store4($vararg_ptr4,$25);
    _abort_message(8689,$vararg_buffer1);
    // unreachable;
   } else {
    store4($vararg_buffer5,8825);
    $vararg_ptr8 = ((($vararg_buffer5)) + 4|0);
    store4($vararg_ptr8,$19);
    _abort_message(8734,$vararg_buffer5);
    // unreachable;
   }
  }
 }
 _abort_message(8813,$vararg_buffer12);
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
  $8 = load4(2324);
  $9 = $8 & 32;
  $10 = load1((2398));
  $11 = ($10<<24>>24)<(1);
  if ($11) {
   $12 = $8 & -33;
   store4(2324,$12);
  }
  $13 = load4((2372));
  $14 = ($13|0)==(0);
  if ($14) {
   $15 = load4((2368));
   store4((2368),$4);
   store4((2352),$4);
   store4((2344),$4);
   store4((2372),80);
   $16 = ((($4)) + 80|0);
   store4((2340),$16);
   (_printf_core(2324,$0,$1,$3,$2)|0);
   $17 = ($15|0)==(0|0);
   if (!($17)) {
    $18 = load4((2360));
    (FUNCTION_TABLE_iiii[$18 & 31](2324,0,0)|0);
    store4((2368),$15);
    store4((2372),0);
    store4((2340),0);
    store4((2352),0);
    store4((2344),0);
   }
  } else {
   (_printf_core(2324,$0,$1,$3,$2)|0);
  }
  $19 = load4(2324);
  $20 = $19 | $9;
  store4(2324,$20);
 }
 $21 = load4((2400));
 $22 = ($21|0)<(0);
 $23 = load1((2399));
 $24 = ($23<<24>>24)==(10);
 do {
  if ($22) {
   if (!($24)) {
    $25 = load4((2344));
    $26 = load4((2340));
    $27 = ($25>>>0)<($26>>>0);
    if ($27) {
     $28 = ((($25)) + 1|0);
     store4((2344),$28);
     store1($25,10);
     break;
    }
   }
   (___overflow()|0);
  } else {
   if (!($24)) {
    $29 = load4((2344));
    $30 = load4((2340));
    $31 = ($29>>>0)<($30>>>0);
    if ($31) {
     $32 = ((($29)) + 1|0);
     store4((2344),$32);
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
   $6 = (___dynamic_cast($1,1560)|0);
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
    FUNCTION_TABLE_viiii[$14 & 7]($6,$3,$15,1);
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
 store4($10,1576);
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
   FUNCTION_TABLE_viiiii[$28 & 3]($8,$2,$6,1,0);
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
    FUNCTION_TABLE_viiiii[$53 & 3]($50,$1,$2,$3,$4);
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
  FUNCTION_TABLE_viiii[$11 & 7]($8,$1,$2,$3);
 }
 return;
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $0 = 0, $1 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $0 = (_pthread_key_create((10068|0),(25|0))|0);
 $1 = ($0|0)==(0);
 if ($1) {
  STACKTOP = sp;return;
 } else {
  _abort_message(9013,$vararg_buffer);
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
 $1 = load4(10068);
 $2 = (_pthread_setspecific(($1|0),(0|0))|0);
 $3 = ($2|0)==(0);
 if ($3) {
  STACKTOP = sp;return;
 } else {
  _abort_message(9063,$vararg_buffer);
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
 _abort_message(9116,$vararg_buffer);
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
 return (9156|0);
}
function __ZNSt9exceptionD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNKSt9exception4whatEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (9184|0);
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
 $7 = ($1|0)==(1688|0);
 $$$i = $6 | $7;
 if ($$$i) {
  $$4 = 1;
 } else {
  $8 = ($1|0)==(0|0);
  if ($8) {
   $$4 = 0;
  } else {
   $9 = (___dynamic_cast($1,1648)|0);
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
     $23 = ($19|0)==(1680|0);
     $or$cond = $23 | $22;
     if ($or$cond) {
      $$4 = 1;
     } else {
      $24 = ($19|0)==(0|0);
      if ($24) {
       $$4 = 0;
      } else {
       $25 = (___dynamic_cast($19,1560)|0);
       $26 = ($25|0)==(0|0);
       if ($26) {
        $$4 = 0;
       } else {
        $27 = load4($20);
        $28 = ($27|0)==(0|0);
        if ($28) {
         $$4 = 0;
        } else {
         $29 = (___dynamic_cast($27,1560)|0);
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
          FUNCTION_TABLE_viiii[$37 & 7]($29,$3,$38,1);
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
 FUNCTION_TABLE_viiii[$15 & 7]($12,$1,$16,$19);
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
 FUNCTION_TABLE_viiiii[$16 & 3]($13,$1,$17,$20,$4);
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
  $2 = (___dynamic_cast($0,1648)|0);
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
  FUNCTION_TABLE_viiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0);
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
  FUNCTION_TABLE_vii[index&7](a1|0,a2|0);
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&31](a1|0)|0;
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&15](a1|0,a2|0,a3|0);
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
  return FUNCTION_TABLE_iii[index&31](a1|0,a2|0)|0;
}


function dynCall_iiiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  return FUNCTION_TABLE_iiiiii[index&1](a1|0,a2|0,a3|0,a4|0,a5|0)|0;
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&7](a1|0,a2|0,a3|0,a4|0);
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
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorI5VNodeNS3_9allocatorIS5_EEEEjES2_SA_JjEE6invokeEPSC_PS8_j,__ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3setERS7_jRKS4_,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorIjNS3_9allocatorIjEEEEjES2_S9_JjEE6invokeEPSB_PS7_j,__ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3setERS6_jRKj,__ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbEE6invokeEPFjS8_bEPNS0_11BindingTypeIS8_EUt_Eb,__ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEjEE6invokeEPFjS8_jEPNS0_11BindingTypeIS8_EUt_Ej,__ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES8_EE6invokeEPFjS8_S8_EPNS0_11BindingTypeIS8_EUt_ESF_,__ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE9VNodeDataEE6invokeEPFjS8_S9_EPNS0_11BindingTypeIS8_EUt_EPS9_,__ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEENS2_6vectorIjNS6_IjEEEEEE6invokeEPFjS8_SB_EPNS0_11BindingTypeIS8_EUt_EPSB_,__Z5h_sdnNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataj,__Z5h_sdtNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataS5_,__Z5h_sdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataNS_6vectorIjNS3_IjEEEE,__ZN10emscripten8internal7InvokerIjJjjEE6invokeEPFjjjEjj,__ZN10emscripten8internal7InvokerIjJNS_3valEjEE6invokeEPFjS2_jEPNS0_7_EM_VALEj,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib];
var FUNCTION_TABLE_i = [b2,__ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newI9VNodeDataJEEEPT_DpOT0_,__ZN10emscripten8internal15raw_constructorI5VNodeJEEEPT_DpNS0_11BindingTypeIT0_E8WireTypeE,__ZN10emscripten8internal12operator_newINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newINSt3__26vectorIjNS2_9allocatorIjEEEEJEEEPT_DpOT0_,b2];
var FUNCTION_TABLE_vi = [b3,__ZNSt3__210__function6__baseIFvvEED2Ev,__ZNSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEED0Ev,__ZNSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE7destroyEv,__ZNSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE18destroy_deallocateEv,__ZNSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEEclEv,__ZNSt9exceptionD2Ev,__ZNSt3__217bad_function_callD0Ev,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,__ZN10__cxxabiv119__pointer_type_infoD0Ev,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,__ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEEEvPT_,__ZN10emscripten8internal14raw_destructorI9VNodeDataEEvPT_,__ZN10emscripten8internal14raw_destructorI5VNodeEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__26vectorIjNS2_9allocatorIjEEEEEEvPT_,__Z14deleteVNodePtrj,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b3,b3,b3
,b3,b3,b3];
var FUNCTION_TABLE_vii = [b4,__ZNKSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE7__cloneEPNS0_6__baseISC_EE,__ZNK5VNode12get_childrenEv,__ZN5VNode12set_childrenENSt3__26vectorIS_NS0_9allocatorIS_EEEE,__ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE9push_backERKS1_,__ZNSt3__26vectorIjNS_9allocatorIjEEE9push_backERKj,__Z8getVNodej,__ZN10emscripten8internal7InvokerIvJjEE6invokeEPFvjEj];
var FUNCTION_TABLE_ii = [b5,__ZNKSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE7__cloneEv,__ZNKSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE11target_typeEv,__ZNKSt9exception4whatEv,___stdio_close,__ZNKSt9bad_alloc4whatEv,__ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE,__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv,__ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEJEE6invokeEPFSH_vE,__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbNS_4lessIS6_EENS4_INS_4pairIKS6_bEEEEE4sizeEv,__ZN10emscripten8internal13getActualTypeI9VNodeDataEEPKvPT_,__ZN10emscripten8internal7InvokerIP9VNodeDataJEE6invokeEPFS3_vE,__ZN10emscripten8internal13getActualTypeINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEE6invokeEPFS8_vE,__ZNKSt3__26vectorI5VNodeNS_9allocatorIS1_EEE4sizeEv,__ZN10emscripten8internal13getActualTypeINSt3__26vectorIjNS2_9allocatorIjEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__26vectorIjNS2_9allocatorIjEEEEJEE6invokeEPFS7_vE,__ZNKSt3__26vectorIjNS_9allocatorIjEEE4sizeEv,__Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE,__Z10toVNodePtrN10emscripten3valE,b5,b5,b5,b5,b5,b5,b5
,b5,b5,b5];
var FUNCTION_TABLE_viii = [b6,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEE3setERSG_RSD_RKb,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEEE7setWireIS2_EEvRKMS2_SH_RT_PSH_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEEE7setWireIS2_EEvRKMS2_SH_RT_PSH_,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E,__ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7setWireIS2_EEvRKMS2_S3_RT_PS3_,__ZN10emscripten8internal12MemberAccessI5VNodeNS_3valEE7setWireIS2_EEvRKMS2_S3_RT_PNS0_7_EM_VALE,__ZN10emscripten8internal12SetterPolicyIM5VNodeFvNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEEE3setIS2_EEvRKS9_RT_PS7_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvRKS4_EvPS7_JS9_EE6invokeERKSB_SC_PS4_,__ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6resizeEjRKS1_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvRKjEvPS6_JS8_EE6invokeERKSA_SB_j,__ZNSt3__26vectorIjNS_9allocatorIjEEE6resizeEjRKj,b6,b6];
var FUNCTION_TABLE_v = [b7,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b7];
var FUNCTION_TABLE_iiiii = [b8,__ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEjRKS4_EbS8_JjSA_EE6invokeEPSC_PS7_jPS4_,__ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorIjNS2_9allocatorIjEEEEjRKjEbS7_JjS9_EE6invokeEPSB_PS6_jj,__ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE9VNodeDatajEE6invokeEPFjS8_S9_jEPNS0_11BindingTypeIS8_EUt_EPS9_j,__ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE9VNodeDataS8_EE6invokeEPFjS8_S9_S8_EPNS0_11BindingTypeIS8_EUt_EPS9_SG_,__ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE9VNodeDataNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjS8_S9_SC_EPNS0_11BindingTypeIS8_EUt_EPS9_PSC_,__Z6h_stdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_9VNodeDataNS_6vectorIjNS3_IjEEEE,b8];
var FUNCTION_TABLE_viiiiii = [b9,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib];
var FUNCTION_TABLE_iii = [b10,__ZNKSt3__210__function6__funcIZ12removeVnodesN10emscripten3valENS_6vectorIP5VNodeNS_9allocatorIS6_EEEEjjE3__0NS7_ISA_EEFvvEE6targetERKSt9type_info,__ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_,__ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEE3getERKSG_RSD_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEEE7getWireIS2_EEPSH_RKMS2_SH_RKT_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEEE7getWireIS2_EEPSH_RKMS2_SH_RKT_,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_,__ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7getWireIS2_EEPS3_RKMS2_S3_RKT_,__ZN10emscripten8internal12MemberAccessI5VNodeNS_3valEE7getWireIS2_EEPNS0_7_EM_VALERKMS2_S3_RKT_,__ZN10emscripten8internal12GetterPolicyIM5VNodeKFNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEvEE3getIS2_EEPS7_RKS9_RKT_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEKFjvEjPKS7_JEE6invokeERKS9_SB_,__ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3getERKS7_j,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEKFjvEjPKS6_JEE6invokeERKS8_SA_,__ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3getERKS6_j,__ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEE6invokeEPFjS8_EPNS0_11BindingTypeIS8_EUt_E,__Z4h_tiNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEb,__Z4h_snNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEj,__Z4h_stNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_,__Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData,__Z4h_scNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_6vectorIjNS3_IjEEEE,__ZN10emscripten8internal7InvokerI5VNodeJjEE6invokeEPFS2_jEj,__ZN10emscripten8internal7InvokerIjJNS_3valEEE6invokeEPFjS2_EPNS0_7_EM_VALE,__Z14patch_vnodePtrjj,__Z16patch_elementPtrN10emscripten3valEj,b10,b10
,b10,b10,b10];
var FUNCTION_TABLE_iiiiii = [b11,__ZN10emscripten8internal7InvokerIjJNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES8_9VNodeDataNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjS8_S8_S9_SC_EPNS0_11BindingTypeIS8_EUt_ESJ_PS9_PSC_];
var FUNCTION_TABLE_viiii = [b12,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_,__ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEERSD_RKbEvSH_JSI_SK_EE6invokeEPSM_PSG_PNS0_11BindingTypeIS9_EUt_Eb,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvjRKS4_EvPS7_JjS9_EE6invokeERKSB_SC_jPS4_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvjRKjEvPS6_JjS8_EE6invokeERKSA_SB_jj];

  return { _sbrk: _sbrk, ___cxa_can_catch: ___cxa_can_catch, _free: _free, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _memmove: _memmove, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, ___getTypeName: ___getTypeName, __GLOBAL__sub_I_app_cpp: __GLOBAL__sub_I_app_cpp, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, runPostSets: runPostSets, _emscripten_replace_memory: _emscripten_replace_memory, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setTempRet0: setTempRet0, getTempRet0: getTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_i: dynCall_i, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
;