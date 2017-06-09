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
  var invoke_viiii=env.invoke_viiii;
  var floatReadValueFromPointer=env.floatReadValueFromPointer;
  var simpleReadValueFromPointer=env.simpleReadValueFromPointer;
  var throwInternalError=env.throwInternalError;
  var get_first_emval=env.get_first_emval;
  var getLiveInheritedInstances=env.getLiveInheritedInstances;
  var ___assert_fail=env.___assert_fail;
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
  var ___setErrNo=env.___setErrNo;
  var __embind_register_bool=env.__embind_register_bool;
  var ___resumeException=env.___resumeException;
  var createNamedFunction=env.createNamedFunction;
  var __embind_register_emval=env.__embind_register_emval;
  var __emval_decref=env.__emval_decref;
  var _pthread_once=env._pthread_once;
  var __embind_register_class=env.__embind_register_class;
  var constNoSmartPtrRawPointerToWireType=env.constNoSmartPtrRawPointerToWireType;
  var heap32VectorToArray=env.heap32VectorToArray;
  var ClassHandle_delete=env.ClassHandle_delete;
  var RegisteredPointer_destructor=env.RegisteredPointer_destructor;
  var ___syscall6=env.___syscall6;
  var ensureOverloadTable=env.ensureOverloadTable;
  var new_=env.new_;
  var downcastPointer=env.downcastPointer;
  var replacePublicSymbol=env.replacePublicSymbol;
  var init_embind=env.init_embind;
  var ClassHandle_deleteLater=env.ClassHandle_deleteLater;
  var RegisteredPointer_deleteObject=env.RegisteredPointer_deleteObject;
  var ClassHandle_isDeleted=env.ClassHandle_isDeleted;
  var __embind_register_integer=env.__embind_register_integer;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var __emval_take_value=env.__emval_take_value;
  var _embind_repr=env._embind_repr;
  var _pthread_getspecific=env._pthread_getspecific;
  var RegisteredPointer=env.RegisteredPointer;
  var craftInvokerFunction=env.craftInvokerFunction;
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
  var _pthread_setspecific=env._pthread_setspecific;
  var _emscripten_asm_const_iiii=env._emscripten_asm_const_iiii;
  var registerType=env.registerType;
  var ___cxa_throw=env.___cxa_throw;
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

function __Z4diffP5VNodeS0_($oldVnode,$vnode) {
 $oldVnode = $oldVnode|0;
 $vnode = $vnode|0;
 var $$sroa$speculated$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__cc$i60 = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i64 = 0, $__first_$i$i$i$i34 = 0, $__parent$i = 0;
 var $__parent_$i$i$i$i = 0, $__parent_$i$i$i$i73 = 0, $__right_$i$i$i = 0, $__right_$i$i$i66 = 0, $__size_$i$i$i$i = 0, $__size_$i$i$i$i16 = 0, $__size_$i$i$i$i50 = 0, $__size_$i$i5$i = 0, $__size_$i3$i$i = 0, $__size_$i3$i7$i = 0, $__x$addr$0$i$i$i = 0, $__x$addr$0$i$i$i$i = 0, $__x$addr$0$i$i$i$i68 = 0, $__x$addr$0$i$i$i72 = 0, $call = 0, $call$i = 0, $call$i$i = 0, $call$i$i38 = 0, $call$i48 = 0, $call20 = 0;
 var $call58 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i31 = 0, $cmp$i$i$i$i70 = 0, $cmp$i$i$i67 = 0, $cmp$i32 = 0, $cmp$i35 = 0, $cmp$i39 = 0, $cmp$i5$i$i$i = 0, $cmp$i5$i$i$i75 = 0, $cmp40 = 0, $cmp49 = 0, $cmp8$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i$i$i22 = 0;
 var $cond$i$i$i30 = 0, $cond$i$i$i56 = 0, $cond$i$i22$i = 0, $cond$i11$i = 0, $conv$i$i$i = 0, $conv$i$i9$i = 0, $elm = 0, $exception$i = 0, $first = 0, $it$sroa$0$0100 = 0, $it$sroa$0$197 = 0, $lnot$i$i = 0, $lnot$i$i63 = 0, $lnot$i$i6396 = 0, $lnot$i$i99 = 0, $or$cond = 0, $props = 0, $props12 = 0, $retval$0$i$i$i = 0, $retval$0$i$i$i78 = 0;
 var $second = 0, $second$i = 0, $second56 = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i$i17 = 0, $tobool$i$i$i$i51 = 0, $tobool$i$i6$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $__parent$i = sp;
 $0 = $oldVnode;
 $1 = $vnode;
 $elm = ((($vnode)) + 48|0);
 $2 = load4($elm);
 $call = _emscripten_asm_const_iiii(0, ($0|0), ($1|0), ($2|0))|0;
 $props = ((($oldVnode)) + 36|0);
 $__first_$i$i$i$i = ((($oldVnode)) + 44|0);
 $3 = load4($__first_$i$i$i$i);
 $cmp$i = ($3|0)==(0);
 if ($cmp$i) {
  $__first_$i$i$i$i34 = ((($vnode)) + 44|0);
  $4 = load4($__first_$i$i$i$i34);
  $cmp$i35 = ($4|0)==(0);
  if ($cmp$i35) {
   STACKTOP = sp;return;
  }
 }
 $5 = load4($props);
 $__first_$i$i$i$i$i = ((($oldVnode)) + 40|0);
 $lnot$i$i99 = ($5|0)==($__first_$i$i$i$i$i|0);
 $props12 = ((($vnode)) + 36|0);
 if (!($lnot$i$i99)) {
  $9 = $5;$it$sroa$0$0100 = $5;
  while(1) {
   $first = ((($it$sroa$0$0100)) + 16|0);
   $call$i = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($props12,$first)|0);
   $cmp = ($call$i|0)==(0);
   if ($cmp) {
    $6 = load4($elm);
    $__size_$i$i$i$i50 = ((($first)) + 11|0);
    $7 = load1($__size_$i$i$i$i50);
    $tobool$i$i$i$i51 = ($7<<24>>24)<(0);
    if ($tobool$i$i$i$i51) {
     $8 = load4($first);
     $cond$i$i$i56 = $8;
    } else {
     $cond$i$i$i56 = $first;
    }
    $call20 = _emscripten_asm_const_iii(1, ($6|0), ($cond$i$i$i56|0))|0;
   }
   $__right_$i$i$i66 = ((($9)) + 4|0);
   $10 = load4($__right_$i$i$i66);
   $cmp$i$i$i67 = ($10|0)==(0|0);
   if ($cmp$i$i$i67) {
    $__x$addr$0$i$i$i72 = $9;
    while(1) {
     $__parent_$i$i$i$i73 = ((($__x$addr$0$i$i$i72)) + 8|0);
     $12 = load4($__parent_$i$i$i$i73);
     $13 = load4($12);
     $cmp$i5$i$i$i75 = ($13|0)==($__x$addr$0$i$i$i72|0);
     if ($cmp$i5$i$i$i75) {
      $retval$0$i$i$i78 = $12;
      break;
     } else {
      $__x$addr$0$i$i$i72 = $12;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i68 = $10;
    while(1) {
     $11 = load4($__x$addr$0$i$i$i$i68);
     $cmp$i$i$i$i70 = ($11|0)==(0|0);
     if ($cmp$i$i$i$i70) {
      $retval$0$i$i$i78 = $__x$addr$0$i$i$i$i68;
      break;
     } else {
      $__x$addr$0$i$i$i$i68 = $11;
     }
    }
   }
   $lnot$i$i = ($retval$0$i$i$i78|0)==($__first_$i$i$i$i$i|0);
   if ($lnot$i$i) {
    break;
   } else {
    $9 = $retval$0$i$i$i78;$it$sroa$0$0100 = $retval$0$i$i$i78;
   }
  }
 }
 $14 = load4($props12);
 $__first_$i$i$i$i$i64 = ((($vnode)) + 40|0);
 $lnot$i$i6396 = ($14|0)==($__first_$i$i$i$i$i64|0);
 if ($lnot$i$i6396) {
  STACKTOP = sp;return;
 }
 $28 = $14;$it$sroa$0$197 = $14;
 L26: while(1) {
  $__cc$i60 = ((($it$sroa$0$197)) + 16|0);
  $call$i48 = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($props,$__cc$i60)|0);
  $cmp40 = ($call$i48|0)==(0);
  do {
   if ($cmp40) {
    label = 27;
   } else {
    $call$i$i38 = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($props,$__parent$i,$__cc$i60)|0);
    $15 = load4($call$i$i38);
    $cmp$i39 = ($15|0)==(0|0);
    if ($cmp$i39) {
     label = 18;
     break L26;
    }
    $second$i = ((($15)) + 28|0);
    $second = ((($it$sroa$0$197)) + 28|0);
    $16 = ((($second$i)) + 11|0);
    $17 = load1($16);
    $tobool$i$i$i = ($17<<24>>24)<(0);
    if ($tobool$i$i$i) {
     $__size_$i3$i$i = ((($second$i)) + 4|0);
     $18 = load4($__size_$i3$i$i);
     $cond$i$i = $18;
    } else {
     $conv$i$i$i = $17&255;
     $cond$i$i = $conv$i$i$i;
    }
    $__size_$i$i5$i = ((($second)) + 11|0);
    $19 = load1($__size_$i$i5$i);
    $tobool$i$i6$i = ($19<<24>>24)<(0);
    $__size_$i3$i7$i = ((($it$sroa$0$197)) + 32|0);
    $20 = load4($__size_$i3$i7$i);
    $conv$i$i9$i = $19&255;
    $cond$i11$i = $tobool$i$i6$i ? $20 : $conv$i$i9$i;
    if ($tobool$i$i$i) {
     $21 = load4($second$i);
     $cond$i$i$i30 = $21;
    } else {
     $cond$i$i$i30 = $second$i;
    }
    $cmp$i$i$i$i31 = ($cond$i11$i>>>0)<($cond$i$i>>>0);
    $$sroa$speculated$i = $cmp$i$i$i$i31 ? $cond$i11$i : $cond$i$i;
    $cmp$i$i = ($$sroa$speculated$i|0)==(0);
    if (!($cmp$i$i)) {
     $22 = load4($second);
     $cond$i$i22$i = $tobool$i$i6$i ? $22 : $second;
     $call$i$i = (_memcmp($cond$i$i$i30,$cond$i$i22$i,$$sroa$speculated$i)|0);
     $cmp$i32 = ($call$i$i|0)==(0);
     if (!($cmp$i32)) {
      label = 27;
      break;
     }
    }
    $cmp8$i = ($cond$i$i>>>0)>=($cond$i11$i>>>0);
    $cmp49 = $cmp$i$i$i$i31 ^ 1;
    $or$cond = $cmp8$i & $cmp49;
    if (!($or$cond)) {
     label = 27;
    }
   }
  } while(0);
  if ((label|0) == 27) {
   label = 0;
   $23 = load4($elm);
   $__size_$i$i$i$i16 = ((($__cc$i60)) + 11|0);
   $24 = load1($__size_$i$i$i$i16);
   $tobool$i$i$i$i17 = ($24<<24>>24)<(0);
   if ($tobool$i$i$i$i17) {
    $25 = load4($__cc$i60);
    $cond$i$i$i22 = $25;
   } else {
    $cond$i$i$i22 = $__cc$i60;
   }
   $second56 = ((($it$sroa$0$197)) + 28|0);
   $__size_$i$i$i$i = ((($second56)) + 11|0);
   $26 = load1($__size_$i$i$i$i);
   $tobool$i$i$i$i = ($26<<24>>24)<(0);
   if ($tobool$i$i$i$i) {
    $27 = load4($second56);
    $cond$i$i$i = $27;
   } else {
    $cond$i$i$i = $second56;
   }
   $call58 = _emscripten_asm_const_iiii(2, ($23|0), ($cond$i$i$i22|0), ($cond$i$i$i|0))|0;
  }
  $__right_$i$i$i = ((($28)) + 4|0);
  $29 = load4($__right_$i$i$i);
  $cmp$i$i$i = ($29|0)==(0|0);
  if ($cmp$i$i$i) {
   $__x$addr$0$i$i$i = $28;
   while(1) {
    $__parent_$i$i$i$i = ((($__x$addr$0$i$i$i)) + 8|0);
    $31 = load4($__parent_$i$i$i$i);
    $32 = load4($31);
    $cmp$i5$i$i$i = ($32|0)==($__x$addr$0$i$i$i|0);
    if ($cmp$i5$i$i$i) {
     $retval$0$i$i$i = $31;
     break;
    } else {
     $__x$addr$0$i$i$i = $31;
    }
   }
  } else {
   $__x$addr$0$i$i$i$i = $29;
   while(1) {
    $30 = load4($__x$addr$0$i$i$i$i);
    $cmp$i$i$i$i = ($30|0)==(0|0);
    if ($cmp$i$i$i$i) {
     $retval$0$i$i$i = $__x$addr$0$i$i$i$i;
     break;
    } else {
     $__x$addr$0$i$i$i$i = $30;
    }
   }
  }
  $lnot$i$i63 = ($retval$0$i$i$i|0)==($__first_$i$i$i$i$i64|0);
  if ($lnot$i$i63) {
   label = 38;
   break;
  } else {
   $28 = $retval$0$i$i$i;$it$sroa$0$197 = $retval$0$i$i$i;
  }
 }
 if ((label|0) == 18) {
  $exception$i = (___cxa_allocate_exception(8)|0);
  __ZNSt11logic_errorC2EPKc($exception$i);
  store4($exception$i,(2176));
  ___cxa_throw(($exception$i|0),(1432|0),(8|0));
  // unreachable;
 }
 else if ((label|0) == 38) {
  STACKTOP = sp;return;
 }
}
function __Z11adjustVNodeP5VNode($vnode) {
 $vnode = $vnode|0;
 var $0 = 0, $__parent$i = 0, $call$i$i6 = 0, $call$i4 = 0, $cmp = 0, $cmp$i = 0, $exception$i = 0, $key = 0, $props = 0, $ref$tmp2 = 0, $second$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $__parent$i = sp + 12|0;
 $ref$tmp2 = sp;
 $props = ((($vnode)) + 36|0);
 ; store8($__parent$i,i64_const(0,0),4); store4($__parent$i+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($__parent$i,2618,3);
 $call$i4 = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($props,$__parent$i)|0);
 $cmp = ($call$i4|0)==(0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($__parent$i);
 if ($cmp) {
  STACKTOP = sp;return ($vnode|0);
 }
 ; store8($ref$tmp2,i64_const(0,0),4); store4($ref$tmp2+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp2,2618,3);
 $call$i$i6 = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($props,$__parent$i,$ref$tmp2)|0);
 $0 = load4($call$i$i6);
 $cmp$i = ($0|0)==(0|0);
 if ($cmp$i) {
  $exception$i = (___cxa_allocate_exception(8)|0);
  __ZNSt11logic_errorC2EPKc($exception$i);
  store4($exception$i,(2176));
  ___cxa_throw(($exception$i|0),(1432|0),(8|0));
  // unreachable;
 }
 $second$i = ((($0)) + 28|0);
 $key = ((($vnode)) + 12|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($key,$second$i)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp2);
 STACKTOP = sp;return ($vnode|0);
}
function __ZN5VNodeD2Ev($this) {
 $this = $this|0;
 var $$cast = 0, $$lcssa = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__end_$i = 0, $__first_$i$i$i$i$i$i = 0, $arrayidx$i = 0, $children = 0, $cmp$i = 0;
 var $cmp1$i$i$i = 0, $dec6 = 0, $dec6$in = 0, $isnull = 0, $key = 0, $scevgep$i$i$i = 0, $scevgep5$i$i$i = 0, $sub$ptr$div$i = 0, $sub$ptr$sub$i = 0, $text = 0, $tobool = 0, $tobool5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $children = ((($this)) + 52|0);
 $__end_$i = ((($this)) + 56|0);
 $0 = load4($__end_$i);
 $1 = load4($children);
 $sub$ptr$sub$i = (($0) - ($1))|0;
 $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
 $tobool5 = ($sub$ptr$div$i|0)==(0);
 $$cast = $1;
 if ($tobool5) {
  $$lcssa = $$cast;
 } else {
  $2 = $$cast;$dec6$in = $sub$ptr$div$i;
  while(1) {
   $dec6 = (($dec6$in) + -1)|0;
   $arrayidx$i = (($2) + ($dec6<<2)|0);
   $3 = load4($arrayidx$i);
   $isnull = ($3|0)==(0|0);
   if ($isnull) {
    $11 = $2;
   } else {
    __ZN5VNodeD2Ev($3);
    __ZdlPv($3);
    $$pre = load4($children);
    $11 = $$pre;
   }
   $tobool = ($dec6|0)==(0);
   if ($tobool) {
    $$lcssa = $11;
    break;
   } else {
    $2 = $11;$dec6$in = $dec6;
   }
  }
 }
 $cmp$i = ($$lcssa|0)==(0|0);
 if (!($cmp$i)) {
  $4 = load4($__end_$i);
  $cmp1$i$i$i = ($4|0)==($$lcssa|0);
  if (!($cmp1$i$i$i)) {
   $scevgep$i$i$i = ((($4)) + -4|0);
   $5 = $scevgep$i$i$i;
   $6 = $$lcssa;
   $7 = (($5) - ($6))|0;
   $8 = $7 >>> 2;
   $9 = $8 ^ -1;
   $scevgep5$i$i$i = (($4) + ($9<<2)|0);
   store4($__end_$i,$scevgep5$i$i$i);
  }
  __ZdlPv($$lcssa);
 }
 $__first_$i$i$i$i$i$i = ((($this)) + 40|0);
 $10 = load4($__first_$i$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($10);
 $text = ((($this)) + 24|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($text);
 $key = ((($this)) + 12|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($key);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($this);
 return;
}
function __Z3h_sRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($sel) {
 $sel = $sel|0;
 var $0 = 0, $__begin_$i$i$i$i = 0, $__end_$i$i$i$i = 0, $__end_cap_$i$i$i$i = 0, $__first_$i$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i$i = 0, $agg$tmp$i = 0, $call$i = 0, $call4$i = 0, $key$i$i = 0, $props$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $agg$tmp$i = sp;
 $call$i = (__Znwj(64)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp$i,$sel);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call$i,$agg$tmp$i);
 $key$i$i = ((($call$i)) + 12|0);
 $props$i$i = ((($call$i)) + 36|0);
 $__left_$i$i$i$i$i$i$i = ((($call$i)) + 40|0);
 store4($__left_$i$i$i$i$i$i$i,0);
 $__first_$i$i$i$i$i$i = ((($call$i)) + 44|0);
 store4($__first_$i$i$i$i$i$i,0);
 ; store8($key$i$i,i64_const(0,0),4); store8($key$i$i+8|0,i64_const(0,0),4); store8($key$i$i+16|0,i64_const(0,0),4);
 store4($props$i$i,$__left_$i$i$i$i$i$i$i);
 $__begin_$i$i$i$i = ((($call$i)) + 52|0);
 store4($__begin_$i$i$i$i,0);
 $__end_$i$i$i$i = ((($call$i)) + 56|0);
 store4($__end_$i$i$i$i,0);
 $__end_cap_$i$i$i$i = ((($call$i)) + 60|0);
 store4($__end_cap_$i$i$i$i,0);
 $call4$i = (__Z11adjustVNodeP5VNode($call$i)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp$i);
 $0 = $call4$i;
 STACKTOP = sp;return ($0|0);
}
function __Z4h_tiRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKb($text,$isText) {
 $text = $text|0;
 $isText = $isText|0;
 var $0 = 0, $1 = 0, $__begin_$i$i$i$i = 0, $__begin_$i$i$i8$i = 0, $__end_$i$i$i$i = 0, $__end_$i$i$i9$i = 0, $__end_cap_$i$i$i$i = 0, $__end_cap_$i$i$i10$i = 0, $__first_$i$i$i$i$i$i = 0, $__first_$i$i$i$i$i6$i = 0, $__left_$i$i$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i5$i = 0, $agg$tmp$i = 0, $agg$tmp6$i = 0, $call$i = 0, $call13$i = 0, $call4$i = 0, $key$i3$i = 0, $props$i$i = 0, $props$i4$i = 0;
 var $retval$0$i = 0, $text$i$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $agg$tmp$i = sp + 12|0;
 $agg$tmp6$i = sp;
 $0 = load1($isText);
 $tobool$i = ($0<<24>>24)==(0);
 $call$i = (__Znwj(64)|0);
 if ($tobool$i) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp6$i,$text);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call$i,$agg$tmp6$i);
  $key$i3$i = ((($call$i)) + 12|0);
  $props$i4$i = ((($call$i)) + 36|0);
  $__left_$i$i$i$i$i$i5$i = ((($call$i)) + 40|0);
  store4($__left_$i$i$i$i$i$i5$i,0);
  $__first_$i$i$i$i$i6$i = ((($call$i)) + 44|0);
  store4($__first_$i$i$i$i$i6$i,0);
  ; store8($key$i3$i,i64_const(0,0),4); store8($key$i3$i+8|0,i64_const(0,0),4); store8($key$i3$i+16|0,i64_const(0,0),4);
  store4($props$i4$i,$__left_$i$i$i$i$i$i5$i);
  $__begin_$i$i$i8$i = ((($call$i)) + 52|0);
  store4($__begin_$i$i$i8$i,0);
  $__end_$i$i$i9$i = ((($call$i)) + 56|0);
  store4($__end_$i$i$i9$i,0);
  $__end_cap_$i$i$i10$i = ((($call$i)) + 60|0);
  store4($__end_cap_$i$i$i10$i,0);
  $call13$i = (__Z11adjustVNodeP5VNode($call$i)|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp6$i);
  $retval$0$i = $call$i;
  $1 = $retval$0$i;
  STACKTOP = sp;return ($1|0);
 } else {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp$i,$text);
  $text$i$i = ((($call$i)) + 24|0);
  ; store8($call$i,i64_const(0,0),4); store8($call$i+8|0,i64_const(0,0),4); store8($call$i+16|0,i64_const(0,0),4);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($text$i$i,$agg$tmp$i);
  $props$i$i = ((($call$i)) + 36|0);
  $__left_$i$i$i$i$i$i$i = ((($call$i)) + 40|0);
  store4($__left_$i$i$i$i$i$i$i,0);
  $__first_$i$i$i$i$i$i = ((($call$i)) + 44|0);
  store4($__first_$i$i$i$i$i$i,0);
  store4($props$i$i,$__left_$i$i$i$i$i$i$i);
  $__begin_$i$i$i$i = ((($call$i)) + 52|0);
  store4($__begin_$i$i$i$i,0);
  $__end_$i$i$i$i = ((($call$i)) + 56|0);
  store4($__end_$i$i$i$i,0);
  $__end_cap_$i$i$i$i = ((($call$i)) + 60|0);
  store4($__end_cap_$i$i$i$i,0);
  $call4$i = (__Z11adjustVNodeP5VNode($call$i)|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp$i);
  $retval$0$i = $call$i;
  $1 = $retval$0$i;
  STACKTOP = sp;return ($1|0);
 }
 return (0)|0;
}
function __Z4h_snRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKj($sel,$node) {
 $sel = $sel|0;
 $node = $node|0;
 var $0 = 0, $1 = 0, $__end_$i$i$i$i = 0, $__end_cap_$i$i$i$i = 0, $__first_$i$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i$i = 0, $add$ptr$i9$i$i$i = 0, $agg$tmp$i = 0, $call$i = 0, $call$i$i$i$i11$i$i$i = 0, $call4$i = 0, $children$i$i = 0, $key$i$i = 0, $props$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $agg$tmp$i = sp;
 $0 = load4($node);
 $call$i = (__Znwj(64)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp$i,$sel);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call$i,$agg$tmp$i);
 $key$i$i = ((($call$i)) + 12|0);
 $props$i$i = ((($call$i)) + 36|0);
 $__left_$i$i$i$i$i$i$i = ((($call$i)) + 40|0);
 store4($__left_$i$i$i$i$i$i$i,0);
 $__first_$i$i$i$i$i$i = ((($call$i)) + 44|0);
 store4($__first_$i$i$i$i$i$i,0);
 ; store8($key$i$i,i64_const(0,0),4); store8($key$i$i+8|0,i64_const(0,0),4); store8($key$i$i+16|0,i64_const(0,0),4);
 store4($props$i$i,$__left_$i$i$i$i$i$i$i);
 $children$i$i = ((($call$i)) + 52|0);
 store4($children$i$i,0);
 $__end_$i$i$i$i = ((($call$i)) + 56|0);
 store4($__end_$i$i$i$i,0);
 $__end_cap_$i$i$i$i = ((($call$i)) + 60|0);
 store4($__end_cap_$i$i$i$i,0);
 $call$i$i$i$i11$i$i$i = (__Znwj(4)|0);
 store4($children$i$i,$call$i$i$i$i11$i$i$i);
 $add$ptr$i9$i$i$i = ((($call$i$i$i$i11$i$i$i)) + 4|0);
 store4($__end_cap_$i$i$i$i,$add$ptr$i9$i$i$i);
 store4($call$i$i$i$i11$i$i$i,$0);
 store4($__end_$i$i$i$i,$add$ptr$i9$i$i$i);
 $call4$i = (__Z11adjustVNodeP5VNode($call$i)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp$i);
 $1 = $call4$i;
 STACKTOP = sp;return ($1|0);
}
function __Z4h_stRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_($sel,$text) {
 $sel = $sel|0;
 $text = $text|0;
 var $0 = 0, $__begin_$i$i$i$i = 0, $__end_$i$i$i$i = 0, $__end_cap_$i$i$i$i = 0, $__first_$i$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i$i = 0, $agg$tmp$i = 0, $agg$tmp1$i = 0, $call$i = 0, $call7$i = 0, $key$i$i = 0, $props$i$i = 0, $text$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $agg$tmp$i = sp + 12|0;
 $agg$tmp1$i = sp;
 $call$i = (__Znwj(64)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp$i,$sel);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp1$i,$text);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call$i,$agg$tmp$i);
 $key$i$i = ((($call$i)) + 12|0);
 ; store8($key$i$i,i64_const(0,0),4); store4($key$i$i+8|0,0,4);
 $text$i$i = ((($call$i)) + 24|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($text$i$i,$agg$tmp1$i);
 $props$i$i = ((($call$i)) + 36|0);
 $__left_$i$i$i$i$i$i$i = ((($call$i)) + 40|0);
 store4($__left_$i$i$i$i$i$i$i,0);
 $__first_$i$i$i$i$i$i = ((($call$i)) + 44|0);
 store4($__first_$i$i$i$i$i$i,0);
 store4($props$i$i,$__left_$i$i$i$i$i$i$i);
 $__begin_$i$i$i$i = ((($call$i)) + 52|0);
 store4($__begin_$i$i$i$i,0);
 $__end_$i$i$i$i = ((($call$i)) + 56|0);
 store4($__end_$i$i$i$i,0);
 $__end_cap_$i$i$i$i = ((($call$i)) + 60|0);
 store4($__end_cap_$i$i$i$i,0);
 $call7$i = (__Z11adjustVNodeP5VNode($call$i)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp1$i);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp$i);
 $0 = $call7$i;
 STACKTOP = sp;return ($0|0);
}
function __Z4h_sdRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_3mapIS5_S5_NS_4lessIS5_EENS3_INS_4pairIS6_S5_EEEEEE($sel,$nodeProps) {
 $sel = $sel|0;
 $nodeProps = $nodeProps|0;
 var $$pre$phiZ2D = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i$i$i$i = 0, $__cc$i$i$i$i = 0, $__cc$i$i$i$i$i = 0;
 var $__end_$i$i$i$i = 0, $__end_cap_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i$i = 0, $__first_$i$i$i$i$i2$i = 0, $__first_$i$i$i$i$i6$i$i = 0, $__left_$i$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i1$i = 0, $__parent_$i$i$i$i$i$i$i = 0, $__parent_$i$i$i$i$i$i$i$i = 0, $__right_$i$i$i$i$i$i = 0, $__right_$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i4$i = 0, $agg$tmp$i = 0, $agg$tmp1$i = 0, $call$i = 0, $call7$i = 0;
 var $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i3$i = 0, $cmp$i5$i$i$i$i$i$i = 0, $cmp$i5$i$i$i$i$i$i$i = 0, $key$i$i = 0, $lnot$i$i$i$i$i = 0, $lnot$i$i$i$i$i$i = 0, $lnot$i$i7$i$i$i = 0, $lnot$i$i7$i$i$i$i = 0, $props$i$i = 0, $retval$0$i$i$i$i$i$i = 0, $retval$0$i$i$i$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $agg$tmp$i = sp + 12|0;
 $agg$tmp1$i = sp;
 $call$i = (__Znwj(64)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp$i,$sel);
 $__left_$i$i$i$i$i$i = ((($agg$tmp1$i)) + 4|0);
 store4($__left_$i$i$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($agg$tmp1$i)) + 8|0);
 store4($__first_$i$i$i$i$i,0);
 $__first_$i$i$i$i$i$i = ((($agg$tmp1$i)) + 4|0);
 store4($agg$tmp1$i,$__first_$i$i$i$i$i$i);
 $0 = load4($nodeProps);
 $__first_$i$i$i$i$i6$i$i = ((($nodeProps)) + 4|0);
 $lnot$i$i7$i$i$i = ($0|0)==($__first_$i$i$i$i$i6$i$i|0);
 if ($lnot$i$i7$i$i$i) {
  $$pre$phiZ2D = $__first_$i$i$i$i$i$i;
 } else {
  $1 = $0;$2 = $0;
  while(1) {
   $__cc$i$i$i$i = ((($1)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($agg$tmp1$i,$__first_$i$i$i$i$i$i,$__cc$i$i$i$i,$__cc$i$i$i$i);
   $__right_$i$i$i$i$i$i = ((($2)) + 4|0);
   $3 = load4($__right_$i$i$i$i$i$i);
   $cmp$i$i$i$i$i$i = ($3|0)==(0|0);
   if ($cmp$i$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i$i = $2;
    while(1) {
     $__parent_$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i)) + 8|0);
     $5 = load4($__parent_$i$i$i$i$i$i$i);
     $6 = load4($5);
     $cmp$i5$i$i$i$i$i$i = ($6|0)==($__x$addr$0$i$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $5;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $5;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i$i = $3;
    while(1) {
     $4 = load4($__x$addr$0$i$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i$i = ($4|0)==(0|0);
     if ($cmp$i$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i$i = $4;
     }
    }
   }
   $lnot$i$i$i$i$i = ($retval$0$i$i$i$i$i$i|0)==($__first_$i$i$i$i$i6$i$i|0);
   if ($lnot$i$i$i$i$i) {
    $$pre$phiZ2D = $__first_$i$i$i$i$i$i;
    break;
   } else {
    $1 = $retval$0$i$i$i$i$i$i;$2 = $retval$0$i$i$i$i$i$i;
   }
  }
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call$i,$agg$tmp$i);
 $key$i$i = ((($call$i)) + 12|0);
 $props$i$i = ((($call$i)) + 36|0);
 $__left_$i$i$i$i$i$i1$i = ((($call$i)) + 40|0);
 store4($__left_$i$i$i$i$i$i1$i,0);
 $__first_$i$i$i$i$i2$i = ((($call$i)) + 44|0);
 store4($__first_$i$i$i$i$i2$i,0);
 ; store8($key$i$i,i64_const(0,0),4); store8($key$i$i+8|0,i64_const(0,0),4); store8($key$i$i+16|0,i64_const(0,0),4);
 store4($props$i$i,$__left_$i$i$i$i$i$i1$i);
 $7 = load4($agg$tmp1$i);
 $lnot$i$i7$i$i$i$i = ($7|0)==($$pre$phiZ2D|0);
 if ($lnot$i$i7$i$i$i$i) {
  $__begin_$i$i$i$i = ((($call$i)) + 52|0);
  store4($__begin_$i$i$i$i,0);
  $__end_$i$i$i$i = ((($call$i)) + 56|0);
  store4($__end_$i$i$i$i,0);
  $__end_cap_$i$i$i$i = ((($call$i)) + 60|0);
  store4($__end_cap_$i$i$i$i,0);
  $call7$i = (__Z11adjustVNodeP5VNode($call$i)|0);
  $14 = load4($__first_$i$i$i$i$i$i);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($14);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp$i);
  $15 = $call7$i;
  STACKTOP = sp;return ($15|0);
 }
 $8 = $7;$9 = $7;
 while(1) {
  $__cc$i$i$i$i$i = ((($8)) + 16|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($props$i$i,$__left_$i$i$i$i$i$i1$i,$__cc$i$i$i$i$i,$__cc$i$i$i$i$i);
  $__right_$i$i$i$i$i$i$i = ((($9)) + 4|0);
  $10 = load4($__right_$i$i$i$i$i$i$i);
  $cmp$i$i$i$i$i$i3$i = ($10|0)==(0|0);
  if ($cmp$i$i$i$i$i$i3$i) {
   $__x$addr$0$i$i$i$i$i$i4$i = $9;
   while(1) {
    $__parent_$i$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i4$i)) + 8|0);
    $12 = load4($__parent_$i$i$i$i$i$i$i$i);
    $13 = load4($12);
    $cmp$i5$i$i$i$i$i$i$i = ($13|0)==($__x$addr$0$i$i$i$i$i$i4$i|0);
    if ($cmp$i5$i$i$i$i$i$i$i) {
     $retval$0$i$i$i$i$i$i$i = $12;
     break;
    } else {
     $__x$addr$0$i$i$i$i$i$i4$i = $12;
    }
   }
  } else {
   $__x$addr$0$i$i$i$i$i$i$i$i = $10;
   while(1) {
    $11 = load4($__x$addr$0$i$i$i$i$i$i$i$i);
    $cmp$i$i$i$i$i$i$i$i = ($11|0)==(0|0);
    if ($cmp$i$i$i$i$i$i$i$i) {
     $retval$0$i$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i$i;
     break;
    } else {
     $__x$addr$0$i$i$i$i$i$i$i$i = $11;
    }
   }
  }
  $lnot$i$i$i$i$i$i = ($retval$0$i$i$i$i$i$i$i|0)==($__first_$i$i$i$i$i$i|0);
  if ($lnot$i$i$i$i$i$i) {
   break;
  } else {
   $8 = $retval$0$i$i$i$i$i$i$i;$9 = $retval$0$i$i$i$i$i$i$i;
  }
 }
 $__begin_$i$i$i$i = ((($call$i)) + 52|0);
 store4($__begin_$i$i$i$i,0);
 $__end_$i$i$i$i = ((($call$i)) + 56|0);
 store4($__end_$i$i$i$i,0);
 $__end_cap_$i$i$i$i = ((($call$i)) + 60|0);
 store4($__end_cap_$i$i$i$i,0);
 $call7$i = (__Z11adjustVNodeP5VNode($call$i)|0);
 $14 = load4($__first_$i$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($14);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp$i);
 $15 = $call7$i;
 STACKTOP = sp;return ($15|0);
}
function __Z4h_scRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_6vectorIjNS3_IjEEEE($sel,$nodeChildren) {
 $sel = $sel|0;
 $nodeChildren = $nodeChildren|0;
 var $$in = 0, $$pre = 0, $$pre$phiZ2D = 0, $$pre11 = 0, $$pre13 = 0, $$pre24 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__end_$i = 0, $__end_$i$i = 0, $__end_$i13$i6$i = 0, $__end_cap_$i$i = 0, $__end_cap_$i14$i7$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i$i = 0;
 var $__left_$i$i$i$i$i$i$i = 0, $add$ptr$i$i$i$i = 0, $add$ptr$i$i$i24$i = 0, $add$ptr$i$i16$i = 0, $agg$tmp$i = 0, $agg$tmp1$i$sroa$0$0 = 0, $agg$tmp1$i$sroa$8$0 = 0, $arrayidx$i = 0, $call$i = 0, $call$i$i$i$i11$i$i = 0, $call$i$i$i$i11$i15$i = 0, $call7$i = 0, $children = 0, $children$i$i = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i21$i = 0, $cmp$i1$i = 0, $cmp$i11$i = 0;
 var $cmp$i18 = 0, $cmp$i7 = 0, $cmp$i8$i$i = 0, $cmp$i8$i12$i = 0, $cmp1$i$i$i9 = 0, $cmp22 = 0, $i$023 = 0, $inc = 0, $incdec$ptr$i = 0, $key$i$i = 0, $props$i$i = 0, $scevgep$i$i$i11 = 0, $scevgep5$i$i$i12 = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i$i = 0, $sub$ptr$div$i$i10$i = 0, $sub$ptr$div6$i$i$i$i = 0, $sub$ptr$div6$i$i$i23$i = 0, $sub$ptr$rhs$cast$i$i$i$i = 0, $sub$ptr$sub$i = 0;
 var $sub$ptr$sub$i$i$i = 0, $sub$ptr$sub$i$i$i$i = 0, $sub$ptr$sub$i$i9$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $agg$tmp$i = sp + 12|0;
 $children = sp;
 store4($children,0);
 $__end_$i$i = ((($children)) + 4|0);
 store4($__end_$i$i,0);
 $__end_cap_$i$i = ((($children)) + 8|0);
 store4($__end_cap_$i$i,0);
 $__end_$i = ((($nodeChildren)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($nodeChildren);
 $cmp22 = ($0|0)==($1|0);
 if ($cmp22) {
  $$pre$phiZ2D = $__end_$i$i;$26 = 0;$4 = 0;$5 = 0;$8 = 0;
 } else {
  $__first_$i$i$i$i = ((($children)) + 8|0);
  $$in = $1;$15 = 0;$16 = 0;$i$023 = 0;
  while(1) {
   $13 = $$in;
   $arrayidx$i = (($13) + ($i$023<<2)|0);
   $14 = load4($arrayidx$i);
   store4($agg$tmp$i,$14);
   $cmp$i18 = ($15>>>0)<($16>>>0);
   if ($cmp$i18) {
    store4($15,$14);
    $incdec$ptr$i = ((($15)) + 4|0);
    store4($__end_$i$i,$incdec$ptr$i);
   } else {
    __ZNSt3__26vectorIP5VNodeNS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_($children,$agg$tmp$i);
   }
   $inc = (($i$023) + 1)|0;
   $17 = load4($__end_$i);
   $18 = load4($nodeChildren);
   $sub$ptr$sub$i = (($17) - ($18))|0;
   $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
   $cmp = ($inc>>>0)<($sub$ptr$div$i>>>0);
   if (!($cmp)) {
    break;
   }
   $$pre = load4($__end_$i$i);
   $$pre24 = load4($__first_$i$i$i$i);
   $$in = $18;$15 = $$pre;$16 = $$pre24;$i$023 = $inc;
  }
  $$pre11 = load4($__end_$i$i);
  $$pre13 = load4($children);
  $2 = $$pre13;
  $3 = $$pre11;
  $$pre$phiZ2D = $__end_$i$i;$26 = $3;$4 = $$pre11;$5 = $$pre13;$8 = $2;
 }
 $call$i = (__Znwj(64)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp$i,$sel);
 $sub$ptr$sub$i$i$i = (($4) - ($5))|0;
 $sub$ptr$div$i$i$i = $sub$ptr$sub$i$i$i >> 2;
 $cmp$i1$i = ($sub$ptr$div$i$i$i|0)==(0);
 if ($cmp$i1$i) {
  $20 = $26;$agg$tmp1$i$sroa$0$0 = 0;$agg$tmp1$i$sroa$8$0 = 0;
 } else {
  $cmp$i8$i$i = ($sub$ptr$div$i$i$i>>>0)>(1073741823);
  if ($cmp$i8$i$i) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $call$i$i$i$i11$i$i = (__Znwj($sub$ptr$sub$i$i$i)|0);
  $6 = $call$i$i$i$i11$i$i;
  $7 = load4($$pre$phiZ2D);
  $sub$ptr$rhs$cast$i$i$i$i = $8;
  $sub$ptr$sub$i$i$i$i = (($7) - ($sub$ptr$rhs$cast$i$i$i$i))|0;
  $cmp$i$i$i$i = ($sub$ptr$sub$i$i$i$i|0)>(0);
  $9 = $7;
  if ($cmp$i$i$i$i) {
   $sub$ptr$div6$i$i$i$i = $sub$ptr$sub$i$i$i$i >>> 2;
   $add$ptr$i$i$i$i = (($call$i$i$i$i11$i$i) + ($sub$ptr$div6$i$i$i$i<<2)|0);
   _memcpy(($call$i$i$i$i11$i$i|0),($8|0),($sub$ptr$sub$i$i$i$i|0))|0;
   $10 = $add$ptr$i$i$i$i;
   $20 = $9;$agg$tmp1$i$sroa$0$0 = $6;$agg$tmp1$i$sroa$8$0 = $10;
  } else {
   $20 = $9;$agg$tmp1$i$sroa$0$0 = $6;$agg$tmp1$i$sroa$8$0 = $6;
  }
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call$i,$agg$tmp$i);
 $key$i$i = ((($call$i)) + 12|0);
 $props$i$i = ((($call$i)) + 36|0);
 $__left_$i$i$i$i$i$i$i = ((($call$i)) + 40|0);
 store4($__left_$i$i$i$i$i$i$i,0);
 $__first_$i$i$i$i$i$i = ((($call$i)) + 44|0);
 store4($__first_$i$i$i$i$i$i,0);
 ; store8($key$i$i,i64_const(0,0),4); store8($key$i$i+8|0,i64_const(0,0),4); store8($key$i$i+16|0,i64_const(0,0),4);
 store4($props$i$i,$__left_$i$i$i$i$i$i$i);
 $children$i$i = ((($call$i)) + 52|0);
 store4($children$i$i,0);
 $__end_$i13$i6$i = ((($call$i)) + 56|0);
 store4($__end_$i13$i6$i,0);
 $__end_cap_$i14$i7$i = ((($call$i)) + 60|0);
 store4($__end_cap_$i14$i7$i,0);
 $sub$ptr$sub$i$i9$i = (($agg$tmp1$i$sroa$8$0) - ($agg$tmp1$i$sroa$0$0))|0;
 $sub$ptr$div$i$i10$i = $sub$ptr$sub$i$i9$i >> 2;
 $cmp$i11$i = ($sub$ptr$div$i$i10$i|0)==(0);
 if (!($cmp$i11$i)) {
  $cmp$i8$i12$i = ($sub$ptr$div$i$i10$i>>>0)>(1073741823);
  if ($cmp$i8$i12$i) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $call$i$i$i$i11$i15$i = (__Znwj($sub$ptr$sub$i$i9$i)|0);
  store4($__end_$i13$i6$i,$call$i$i$i$i11$i15$i);
  store4($children$i$i,$call$i$i$i$i11$i15$i);
  $add$ptr$i$i16$i = (($call$i$i$i$i11$i15$i) + ($sub$ptr$div$i$i10$i<<2)|0);
  store4($__end_cap_$i14$i7$i,$add$ptr$i$i16$i);
  $cmp$i$i$i21$i = ($sub$ptr$sub$i$i9$i|0)>(0);
  if ($cmp$i$i$i21$i) {
   $sub$ptr$div6$i$i$i23$i = $sub$ptr$sub$i$i9$i >>> 2;
   $add$ptr$i$i$i24$i = (($call$i$i$i$i11$i15$i) + ($sub$ptr$div6$i$i$i23$i<<2)|0);
   $11 = $agg$tmp1$i$sroa$0$0;
   _memcpy(($call$i$i$i$i11$i15$i|0),($11|0),($sub$ptr$sub$i$i9$i|0))|0;
   store4($__end_$i13$i6$i,$add$ptr$i$i$i24$i);
  }
 }
 $call7$i = (__Z11adjustVNodeP5VNode($call$i)|0);
 $cmp$i$i = ($agg$tmp1$i$sroa$0$0|0)==(0);
 if (!($cmp$i$i)) {
  $12 = $agg$tmp1$i$sroa$0$0;
  __ZdlPv($12);
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp$i);
 $19 = $call7$i;
 $cmp$i7 = ($8|0)==(0|0);
 if ($cmp$i7) {
  STACKTOP = sp;return ($19|0);
 }
 $cmp1$i$i$i9 = ($20|0)==($8|0);
 if (!($cmp1$i$i$i9)) {
  $scevgep$i$i$i11 = ((($20)) + -4|0);
  $21 = $scevgep$i$i$i11;
  $22 = $8;
  $23 = (($21) - ($22))|0;
  $24 = $23 >>> 2;
  $25 = $24 ^ -1;
  $scevgep5$i$i$i12 = (($20) + ($25<<2)|0);
  store4($__end_$i$i,$scevgep5$i$i$i12);
 }
 __ZdlPv($8);
 STACKTOP = sp;return ($19|0);
}
function __ZNKSt3__26vectorIjNS_9allocatorIjEEE4sizeEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $__end_ = 0, $sub$ptr$div = 0, $sub$ptr$sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__end_ = ((($this)) + 4|0);
 $0 = load4($__end_);
 $1 = load4($this);
 $sub$ptr$sub = (($0) - ($1))|0;
 $sub$ptr$div = $sub$ptr$sub >> 2;
 return ($sub$ptr$div|0);
}
function __Z5h_sdnRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_3mapIS5_S5_NS_4lessIS5_EENS3_INS_4pairIS6_S5_EEEEEERKj($sel,$nodeProps,$node) {
 $sel = $sel|0;
 $nodeProps = $nodeProps|0;
 $node = $node|0;
 var $$pre$phiZ2D = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__cc$i$i$i = 0, $__cc$i$i$i$i = 0;
 var $__end_$i$i$i = 0, $__end_cap_$i$i$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i2 = 0, $__first_$i$i$i$i$i6$i = 0, $__left_$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i1 = 0, $__parent_$i$i$i$i$i$i = 0, $__parent_$i$i$i$i$i$i$i = 0, $__right_$i$i$i$i$i = 0, $__right_$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i4 = 0, $add$ptr$i9$i$i = 0, $agg$tmp = 0, $agg$tmp1 = 0, $call = 0;
 var $call$i$i$i$i11$i$i = 0, $call7 = 0, $children$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i3 = 0, $cmp$i5$i$i$i$i$i = 0, $cmp$i5$i$i$i$i$i$i = 0, $key$i = 0, $lnot$i$i$i$i = 0, $lnot$i$i$i$i$i = 0, $lnot$i$i7$i$i = 0, $lnot$i$i7$i$i$i = 0, $props$i = 0, $retval$0$i$i$i$i$i = 0, $retval$0$i$i$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $agg$tmp = sp + 12|0;
 $agg$tmp1 = sp;
 $call = (__Znwj(64)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp,$sel);
 $__left_$i$i$i$i$i = ((($agg$tmp1)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i = ((($agg$tmp1)) + 8|0);
 store4($__first_$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($agg$tmp1)) + 4|0);
 store4($agg$tmp1,$__first_$i$i$i$i$i);
 $0 = load4($nodeProps);
 $__first_$i$i$i$i$i6$i = ((($nodeProps)) + 4|0);
 $lnot$i$i7$i$i = ($0|0)==($__first_$i$i$i$i$i6$i|0);
 if ($lnot$i$i7$i$i) {
  $$pre$phiZ2D = $__first_$i$i$i$i$i;
 } else {
  $1 = $0;$2 = $0;
  while(1) {
   $__cc$i$i$i = ((($1)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($agg$tmp1,$__first_$i$i$i$i$i,$__cc$i$i$i,$__cc$i$i$i);
   $__right_$i$i$i$i$i = ((($2)) + 4|0);
   $3 = load4($__right_$i$i$i$i$i);
   $cmp$i$i$i$i$i = ($3|0)==(0|0);
   if ($cmp$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i = $2;
    while(1) {
     $__parent_$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i)) + 8|0);
     $5 = load4($__parent_$i$i$i$i$i$i);
     $6 = load4($5);
     $cmp$i5$i$i$i$i$i = ($6|0)==($__x$addr$0$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $5;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i = $5;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i = $3;
    while(1) {
     $4 = load4($__x$addr$0$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i = ($4|0)==(0|0);
     if ($cmp$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $4;
     }
    }
   }
   $lnot$i$i$i$i = ($retval$0$i$i$i$i$i|0)==($__first_$i$i$i$i$i6$i|0);
   if ($lnot$i$i$i$i) {
    $$pre$phiZ2D = $__first_$i$i$i$i$i;
    break;
   } else {
    $1 = $retval$0$i$i$i$i$i;$2 = $retval$0$i$i$i$i$i;
   }
  }
 }
 $7 = load4($node);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call,$agg$tmp);
 $key$i = ((($call)) + 12|0);
 $props$i = ((($call)) + 36|0);
 $__left_$i$i$i$i$i$i1 = ((($call)) + 40|0);
 store4($__left_$i$i$i$i$i$i1,0);
 $__first_$i$i$i$i$i2 = ((($call)) + 44|0);
 store4($__first_$i$i$i$i$i2,0);
 ; store8($key$i,i64_const(0,0),4); store8($key$i+8|0,i64_const(0,0),4); store8($key$i+16|0,i64_const(0,0),4);
 store4($props$i,$__left_$i$i$i$i$i$i1);
 $8 = load4($agg$tmp1);
 $lnot$i$i7$i$i$i = ($8|0)==($$pre$phiZ2D|0);
 if (!($lnot$i$i7$i$i$i)) {
  $10 = $8;$9 = $8;
  while(1) {
   $__cc$i$i$i$i = ((($9)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($props$i,$__left_$i$i$i$i$i$i1,$__cc$i$i$i$i,$__cc$i$i$i$i);
   $__right_$i$i$i$i$i$i = ((($10)) + 4|0);
   $11 = load4($__right_$i$i$i$i$i$i);
   $cmp$i$i$i$i$i$i3 = ($11|0)==(0|0);
   if ($cmp$i$i$i$i$i$i3) {
    $__x$addr$0$i$i$i$i$i$i4 = $10;
    while(1) {
     $__parent_$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i4)) + 8|0);
     $13 = load4($__parent_$i$i$i$i$i$i$i);
     $14 = load4($13);
     $cmp$i5$i$i$i$i$i$i = ($14|0)==($__x$addr$0$i$i$i$i$i$i4|0);
     if ($cmp$i5$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $13;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i4 = $13;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i$i = $11;
    while(1) {
     $12 = load4($__x$addr$0$i$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i$i = ($12|0)==(0|0);
     if ($cmp$i$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i$i = $12;
     }
    }
   }
   $lnot$i$i$i$i$i = ($retval$0$i$i$i$i$i$i|0)==($__first_$i$i$i$i$i|0);
   if ($lnot$i$i$i$i$i) {
    break;
   } else {
    $10 = $retval$0$i$i$i$i$i$i;$9 = $retval$0$i$i$i$i$i$i;
   }
  }
 }
 $children$i = ((($call)) + 52|0);
 store4($children$i,0);
 $__end_$i$i$i = ((($call)) + 56|0);
 store4($__end_$i$i$i,0);
 $__end_cap_$i$i$i = ((($call)) + 60|0);
 store4($__end_cap_$i$i$i,0);
 $call$i$i$i$i11$i$i = (__Znwj(4)|0);
 store4($children$i,$call$i$i$i$i11$i$i);
 $add$ptr$i9$i$i = ((($call$i$i$i$i11$i$i)) + 4|0);
 store4($__end_cap_$i$i$i,$add$ptr$i9$i$i);
 store4($call$i$i$i$i11$i$i,$7);
 store4($__end_$i$i$i,$add$ptr$i9$i$i);
 $call7 = (__Z11adjustVNodeP5VNode($call)|0);
 $15 = $call7;
 $16 = load4($__first_$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($16);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 STACKTOP = sp;return ($15|0);
}
function __Z5h_sdtRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_3mapIS5_S5_NS_4lessIS5_EENS3_INS_4pairIS6_S5_EEEEEES7_($sel,$nodeProps,$text) {
 $sel = $sel|0;
 $nodeProps = $nodeProps|0;
 $text = $text|0;
 var $$pre$phiZ2D = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i$i$i$i = 0, $__cc$i$i$i$i = 0, $__cc$i$i$i$i$i = 0;
 var $__end_$i$i$i$i = 0, $__end_cap_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i$i = 0, $__first_$i$i$i$i$i2$i = 0, $__first_$i$i$i$i$i6$i$i = 0, $__left_$i$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i1$i = 0, $__parent_$i$i$i$i$i$i$i = 0, $__parent_$i$i$i$i$i$i$i$i = 0, $__right_$i$i$i$i$i$i = 0, $__right_$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i4$i = 0, $agg$tmp$i = 0, $agg$tmp1$i = 0, $agg$tmp4$i = 0, $call$i = 0;
 var $call10$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i3$i = 0, $cmp$i5$i$i$i$i$i$i = 0, $cmp$i5$i$i$i$i$i$i$i = 0, $key$i$i = 0, $lnot$i$i$i$i$i = 0, $lnot$i$i$i$i$i$i = 0, $lnot$i$i7$i$i$i = 0, $lnot$i$i7$i$i$i$i = 0, $props$i$i = 0, $retval$0$i$i$i$i$i$i = 0, $retval$0$i$i$i$i$i$i$i = 0, $text$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $agg$tmp$i = sp + 24|0;
 $agg$tmp1$i = sp + 12|0;
 $agg$tmp4$i = sp;
 $call$i = (__Znwj(64)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp$i,$sel);
 $__left_$i$i$i$i$i$i = ((($agg$tmp1$i)) + 4|0);
 store4($__left_$i$i$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($agg$tmp1$i)) + 8|0);
 store4($__first_$i$i$i$i$i,0);
 $__first_$i$i$i$i$i$i = ((($agg$tmp1$i)) + 4|0);
 store4($agg$tmp1$i,$__first_$i$i$i$i$i$i);
 $0 = load4($nodeProps);
 $__first_$i$i$i$i$i6$i$i = ((($nodeProps)) + 4|0);
 $lnot$i$i7$i$i$i = ($0|0)==($__first_$i$i$i$i$i6$i$i|0);
 if ($lnot$i$i7$i$i$i) {
  $$pre$phiZ2D = $__first_$i$i$i$i$i$i;
 } else {
  $1 = $0;$2 = $0;
  while(1) {
   $__cc$i$i$i$i = ((($1)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($agg$tmp1$i,$__first_$i$i$i$i$i$i,$__cc$i$i$i$i,$__cc$i$i$i$i);
   $__right_$i$i$i$i$i$i = ((($2)) + 4|0);
   $3 = load4($__right_$i$i$i$i$i$i);
   $cmp$i$i$i$i$i$i = ($3|0)==(0|0);
   if ($cmp$i$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i$i = $2;
    while(1) {
     $__parent_$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i)) + 8|0);
     $5 = load4($__parent_$i$i$i$i$i$i$i);
     $6 = load4($5);
     $cmp$i5$i$i$i$i$i$i = ($6|0)==($__x$addr$0$i$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $5;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $5;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i$i = $3;
    while(1) {
     $4 = load4($__x$addr$0$i$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i$i = ($4|0)==(0|0);
     if ($cmp$i$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i$i = $4;
     }
    }
   }
   $lnot$i$i$i$i$i = ($retval$0$i$i$i$i$i$i|0)==($__first_$i$i$i$i$i6$i$i|0);
   if ($lnot$i$i$i$i$i) {
    $$pre$phiZ2D = $__first_$i$i$i$i$i$i;
    break;
   } else {
    $1 = $retval$0$i$i$i$i$i$i;$2 = $retval$0$i$i$i$i$i$i;
   }
  }
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp4$i,$text);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call$i,$agg$tmp$i);
 $key$i$i = ((($call$i)) + 12|0);
 ; store8($key$i$i,i64_const(0,0),4); store4($key$i$i+8|0,0,4);
 $text$i$i = ((($call$i)) + 24|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($text$i$i,$agg$tmp4$i);
 $props$i$i = ((($call$i)) + 36|0);
 $__left_$i$i$i$i$i$i1$i = ((($call$i)) + 40|0);
 store4($__left_$i$i$i$i$i$i1$i,0);
 $__first_$i$i$i$i$i2$i = ((($call$i)) + 44|0);
 store4($__first_$i$i$i$i$i2$i,0);
 store4($props$i$i,$__left_$i$i$i$i$i$i1$i);
 $7 = load4($agg$tmp1$i);
 $lnot$i$i7$i$i$i$i = ($7|0)==($$pre$phiZ2D|0);
 if ($lnot$i$i7$i$i$i$i) {
  $__begin_$i$i$i$i = ((($call$i)) + 52|0);
  store4($__begin_$i$i$i$i,0);
  $__end_$i$i$i$i = ((($call$i)) + 56|0);
  store4($__end_$i$i$i$i,0);
  $__end_cap_$i$i$i$i = ((($call$i)) + 60|0);
  store4($__end_cap_$i$i$i$i,0);
  $call10$i = (__Z11adjustVNodeP5VNode($call$i)|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp4$i);
  $14 = load4($__first_$i$i$i$i$i$i);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($14);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp$i);
  $15 = $call10$i;
  STACKTOP = sp;return ($15|0);
 }
 $8 = $7;$9 = $7;
 while(1) {
  $__cc$i$i$i$i$i = ((($8)) + 16|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($props$i$i,$__left_$i$i$i$i$i$i1$i,$__cc$i$i$i$i$i,$__cc$i$i$i$i$i);
  $__right_$i$i$i$i$i$i$i = ((($9)) + 4|0);
  $10 = load4($__right_$i$i$i$i$i$i$i);
  $cmp$i$i$i$i$i$i3$i = ($10|0)==(0|0);
  if ($cmp$i$i$i$i$i$i3$i) {
   $__x$addr$0$i$i$i$i$i$i4$i = $9;
   while(1) {
    $__parent_$i$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i4$i)) + 8|0);
    $12 = load4($__parent_$i$i$i$i$i$i$i$i);
    $13 = load4($12);
    $cmp$i5$i$i$i$i$i$i$i = ($13|0)==($__x$addr$0$i$i$i$i$i$i4$i|0);
    if ($cmp$i5$i$i$i$i$i$i$i) {
     $retval$0$i$i$i$i$i$i$i = $12;
     break;
    } else {
     $__x$addr$0$i$i$i$i$i$i4$i = $12;
    }
   }
  } else {
   $__x$addr$0$i$i$i$i$i$i$i$i = $10;
   while(1) {
    $11 = load4($__x$addr$0$i$i$i$i$i$i$i$i);
    $cmp$i$i$i$i$i$i$i$i = ($11|0)==(0|0);
    if ($cmp$i$i$i$i$i$i$i$i) {
     $retval$0$i$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i$i;
     break;
    } else {
     $__x$addr$0$i$i$i$i$i$i$i$i = $11;
    }
   }
  }
  $lnot$i$i$i$i$i$i = ($retval$0$i$i$i$i$i$i$i|0)==($__first_$i$i$i$i$i$i|0);
  if ($lnot$i$i$i$i$i$i) {
   break;
  } else {
   $8 = $retval$0$i$i$i$i$i$i$i;$9 = $retval$0$i$i$i$i$i$i$i;
  }
 }
 $__begin_$i$i$i$i = ((($call$i)) + 52|0);
 store4($__begin_$i$i$i$i,0);
 $__end_$i$i$i$i = ((($call$i)) + 56|0);
 store4($__end_$i$i$i$i,0);
 $__end_cap_$i$i$i$i = ((($call$i)) + 60|0);
 store4($__end_cap_$i$i$i$i,0);
 $call10$i = (__Z11adjustVNodeP5VNode($call$i)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp4$i);
 $14 = load4($__first_$i$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($14);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp$i);
 $15 = $call10$i;
 STACKTOP = sp;return ($15|0);
}
function __Z5h_sdcRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_3mapIS5_S5_NS_4lessIS5_EENS3_INS_4pairIS6_S5_EEEEEERKNS_6vectorIjNS3_IjEEEE($sel,$nodeProps,$nodeChildren) {
 $sel = $sel|0;
 $nodeProps = $nodeProps|0;
 $nodeChildren = $nodeChildren|0;
 var $$in = 0, $$pre = 0, $$pre24 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $__cc$i$i$i$i = 0, $__cc$i$i$i$i$i = 0, $__end_$i = 0, $__end_$i$i = 0, $__end_$i13$i$i$i = 0, $__end_cap_$i$i = 0, $__end_cap_$i14$i$i$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i$i = 0, $__first_$i$i$i$i$i6$i = 0, $__first_$i$i$i$i$i6$i$i = 0, $__left_$i$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i5$i = 0, $__parent_$i$i$i$i$i$i$i = 0, $__parent_$i$i$i$i$i$i$i$i = 0, $__right_$i$i$i$i$i$i = 0, $__right_$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0;
 var $__x$addr$0$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i8$i = 0, $add$ptr$i$i$i$i = 0, $add$ptr$i$i$i$i$i = 0, $add$ptr$i$i$i11$i = 0, $agg$tmp$i = 0, $agg$tmp1$i = 0, $agg$tmp4$i$sroa$0$0 = 0, $agg$tmp4$i$sroa$8$0 = 0, $arrayidx$i = 0, $call$i = 0, $call$i$i$i$i11$i$i = 0, $call$i$i$i$i11$i$i$i = 0, $call10$i = 0, $children = 0, $children$i$i = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i$i$i = 0;
 var $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i7$i = 0, $cmp$i1$i = 0, $cmp$i18 = 0, $cmp$i5$i$i$i$i$i$i = 0, $cmp$i5$i$i$i$i$i$i$i = 0, $cmp$i7 = 0, $cmp$i8$i$i = 0, $cmp$i8$i$i$i = 0, $cmp1$i$i$i9 = 0, $cmp22 = 0, $i$023 = 0, $inc = 0, $incdec$ptr$i = 0, $key$i$i = 0, $lnot$i$i$i$i$i = 0;
 var $lnot$i$i$i$i$i$i = 0, $lnot$i$i7$i$i$i = 0, $lnot$i$i7$i$i$i$i = 0, $props$i$i = 0, $retval$0$i$i$i$i$i$i = 0, $retval$0$i$i$i$i$i$i$i = 0, $scevgep$i$i$i11 = 0, $scevgep5$i$i$i12 = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i$i = 0, $sub$ptr$div$i$i$i$i = 0, $sub$ptr$div6$i$i$i$i = 0, $sub$ptr$div6$i$i$i$i$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i$i = 0, $sub$ptr$sub$i$i$i10$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $agg$tmp$i = sp + 24|0;
 $agg$tmp1$i = sp + 12|0;
 $children = sp;
 store4($children,0);
 $__end_$i$i = ((($children)) + 4|0);
 store4($__end_$i$i,0);
 $__end_cap_$i$i = ((($children)) + 8|0);
 store4($__end_cap_$i$i,0);
 $__end_$i = ((($nodeChildren)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($nodeChildren);
 $cmp22 = ($0|0)==($1|0);
 L1: do {
  if (!($cmp22)) {
   $__first_$i$i$i$i = ((($children)) + 8|0);
   $$in = $1;$27 = 0;$28 = 0;$i$023 = 0;
   while(1) {
    $25 = $$in;
    $arrayidx$i = (($25) + ($i$023<<2)|0);
    $26 = load4($arrayidx$i);
    store4($agg$tmp$i,$26);
    $cmp$i18 = ($27>>>0)<($28>>>0);
    if ($cmp$i18) {
     store4($27,$26);
     $incdec$ptr$i = ((($27)) + 4|0);
     store4($__end_$i$i,$incdec$ptr$i);
    } else {
     __ZNSt3__26vectorIP5VNodeNS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_($children,$agg$tmp$i);
    }
    $inc = (($i$023) + 1)|0;
    $29 = load4($__end_$i);
    $30 = load4($nodeChildren);
    $sub$ptr$sub$i = (($29) - ($30))|0;
    $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
    $cmp = ($inc>>>0)<($sub$ptr$div$i>>>0);
    if (!($cmp)) {
     break L1;
    }
    $$pre = load4($__end_$i$i);
    $$pre24 = load4($__first_$i$i$i$i);
    $$in = $30;$27 = $$pre;$28 = $$pre24;$i$023 = $inc;
   }
  }
 } while(0);
 $call$i = (__Znwj(64)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp$i,$sel);
 $__left_$i$i$i$i$i$i = ((($agg$tmp1$i)) + 4|0);
 store4($__left_$i$i$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($agg$tmp1$i)) + 8|0);
 store4($__first_$i$i$i$i$i,0);
 $__first_$i$i$i$i$i$i = ((($agg$tmp1$i)) + 4|0);
 store4($agg$tmp1$i,$__first_$i$i$i$i$i$i);
 $2 = load4($nodeProps);
 $__first_$i$i$i$i$i6$i$i = ((($nodeProps)) + 4|0);
 $lnot$i$i7$i$i$i = ($2|0)==($__first_$i$i$i$i$i6$i$i|0);
 if (!($lnot$i$i7$i$i$i)) {
  $3 = $2;$4 = $2;
  while(1) {
   $__cc$i$i$i$i = ((($3)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($agg$tmp1$i,$__first_$i$i$i$i$i$i,$__cc$i$i$i$i,$__cc$i$i$i$i);
   $__right_$i$i$i$i$i$i = ((($4)) + 4|0);
   $5 = load4($__right_$i$i$i$i$i$i);
   $cmp$i$i$i$i$i$i = ($5|0)==(0|0);
   if ($cmp$i$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i$i = $4;
    while(1) {
     $__parent_$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i)) + 8|0);
     $7 = load4($__parent_$i$i$i$i$i$i$i);
     $8 = load4($7);
     $cmp$i5$i$i$i$i$i$i = ($8|0)==($__x$addr$0$i$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $7;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $7;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i$i = $5;
    while(1) {
     $6 = load4($__x$addr$0$i$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i$i = ($6|0)==(0|0);
     if ($cmp$i$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i$i = $6;
     }
    }
   }
   $lnot$i$i$i$i$i = ($retval$0$i$i$i$i$i$i|0)==($__first_$i$i$i$i$i6$i$i|0);
   if ($lnot$i$i$i$i$i) {
    break;
   } else {
    $3 = $retval$0$i$i$i$i$i$i;$4 = $retval$0$i$i$i$i$i$i;
   }
  }
 }
 $9 = load4($__end_$i$i);
 $10 = load4($children);
 $sub$ptr$sub$i$i$i = (($9) - ($10))|0;
 $sub$ptr$div$i$i$i = $sub$ptr$sub$i$i$i >> 2;
 $cmp$i1$i = ($sub$ptr$div$i$i$i|0)==(0);
 $11 = $10;
 $12 = $9;
 if ($cmp$i1$i) {
  $agg$tmp4$i$sroa$0$0 = 0;$agg$tmp4$i$sroa$8$0 = 0;
 } else {
  $cmp$i8$i$i = ($sub$ptr$div$i$i$i>>>0)>(1073741823);
  if ($cmp$i8$i$i) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $call$i$i$i$i11$i$i = (__Znwj($sub$ptr$sub$i$i$i)|0);
  $13 = $call$i$i$i$i11$i$i;
  $cmp$i$i$i$i = ($sub$ptr$sub$i$i$i|0)>(0);
  if ($cmp$i$i$i$i) {
   $sub$ptr$div6$i$i$i$i = $sub$ptr$sub$i$i$i >>> 2;
   $add$ptr$i$i$i$i = (($call$i$i$i$i11$i$i) + ($sub$ptr$div6$i$i$i$i<<2)|0);
   $14 = $10;
   _memcpy(($call$i$i$i$i11$i$i|0),($14|0),($sub$ptr$sub$i$i$i|0))|0;
   $15 = $add$ptr$i$i$i$i;
   $agg$tmp4$i$sroa$0$0 = $13;$agg$tmp4$i$sroa$8$0 = $15;
  } else {
   $agg$tmp4$i$sroa$0$0 = $13;$agg$tmp4$i$sroa$8$0 = $13;
  }
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call$i,$agg$tmp$i);
 $key$i$i = ((($call$i)) + 12|0);
 $props$i$i = ((($call$i)) + 36|0);
 $__left_$i$i$i$i$i$i5$i = ((($call$i)) + 40|0);
 store4($__left_$i$i$i$i$i$i5$i,0);
 $__first_$i$i$i$i$i6$i = ((($call$i)) + 44|0);
 store4($__first_$i$i$i$i$i6$i,0);
 ; store8($key$i$i,i64_const(0,0),4); store8($key$i$i+8|0,i64_const(0,0),4); store8($key$i$i+16|0,i64_const(0,0),4);
 store4($props$i$i,$__left_$i$i$i$i$i$i5$i);
 $16 = load4($agg$tmp1$i);
 $lnot$i$i7$i$i$i$i = ($16|0)==($__first_$i$i$i$i$i$i|0);
 if (!($lnot$i$i7$i$i$i$i)) {
  $17 = $16;$18 = $16;
  while(1) {
   $__cc$i$i$i$i$i = ((($17)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($props$i$i,$__left_$i$i$i$i$i$i5$i,$__cc$i$i$i$i$i,$__cc$i$i$i$i$i);
   $__right_$i$i$i$i$i$i$i = ((($18)) + 4|0);
   $19 = load4($__right_$i$i$i$i$i$i$i);
   $cmp$i$i$i$i$i$i7$i = ($19|0)==(0|0);
   if ($cmp$i$i$i$i$i$i7$i) {
    $__x$addr$0$i$i$i$i$i$i8$i = $18;
    while(1) {
     $__parent_$i$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i8$i)) + 8|0);
     $21 = load4($__parent_$i$i$i$i$i$i$i$i);
     $22 = load4($21);
     $cmp$i5$i$i$i$i$i$i$i = ($22|0)==($__x$addr$0$i$i$i$i$i$i8$i|0);
     if ($cmp$i5$i$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i$i = $21;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i8$i = $21;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i$i$i = $19;
    while(1) {
     $20 = load4($__x$addr$0$i$i$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i$i$i = ($20|0)==(0|0);
     if ($cmp$i$i$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i$i$i = $20;
     }
    }
   }
   $lnot$i$i$i$i$i$i = ($retval$0$i$i$i$i$i$i$i|0)==($__first_$i$i$i$i$i$i|0);
   if ($lnot$i$i$i$i$i$i) {
    break;
   } else {
    $17 = $retval$0$i$i$i$i$i$i$i;$18 = $retval$0$i$i$i$i$i$i$i;
   }
  }
 }
 $children$i$i = ((($call$i)) + 52|0);
 store4($children$i$i,0);
 $__end_$i13$i$i$i = ((($call$i)) + 56|0);
 store4($__end_$i13$i$i$i,0);
 $__end_cap_$i14$i$i$i = ((($call$i)) + 60|0);
 store4($__end_cap_$i14$i$i$i,0);
 $sub$ptr$sub$i$i$i10$i = (($agg$tmp4$i$sroa$8$0) - ($agg$tmp4$i$sroa$0$0))|0;
 $sub$ptr$div$i$i$i$i = $sub$ptr$sub$i$i$i10$i >> 2;
 $cmp$i$i$i = ($sub$ptr$div$i$i$i$i|0)==(0);
 if (!($cmp$i$i$i)) {
  $cmp$i8$i$i$i = ($sub$ptr$div$i$i$i$i>>>0)>(1073741823);
  if ($cmp$i8$i$i$i) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $call$i$i$i$i11$i$i$i = (__Znwj($sub$ptr$sub$i$i$i10$i)|0);
  store4($__end_$i13$i$i$i,$call$i$i$i$i11$i$i$i);
  store4($children$i$i,$call$i$i$i$i11$i$i$i);
  $add$ptr$i$i$i11$i = (($call$i$i$i$i11$i$i$i) + ($sub$ptr$div$i$i$i$i<<2)|0);
  store4($__end_cap_$i14$i$i$i,$add$ptr$i$i$i11$i);
  $cmp$i$i$i$i$i = ($sub$ptr$sub$i$i$i10$i|0)>(0);
  if ($cmp$i$i$i$i$i) {
   $sub$ptr$div6$i$i$i$i$i = $sub$ptr$sub$i$i$i10$i >>> 2;
   $add$ptr$i$i$i$i$i = (($call$i$i$i$i11$i$i$i) + ($sub$ptr$div6$i$i$i$i$i<<2)|0);
   $23 = $agg$tmp4$i$sroa$0$0;
   _memcpy(($call$i$i$i$i11$i$i$i|0),($23|0),($sub$ptr$sub$i$i$i10$i|0))|0;
   store4($__end_$i13$i$i$i,$add$ptr$i$i$i$i$i);
  }
 }
 $call10$i = (__Z11adjustVNodeP5VNode($call$i)|0);
 $cmp$i$i = ($agg$tmp4$i$sroa$0$0|0)==(0);
 if (!($cmp$i$i)) {
  $24 = $agg$tmp4$i$sroa$0$0;
  __ZdlPv($24);
 }
 $31 = load4($__first_$i$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($31);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp$i);
 $32 = $call10$i;
 $cmp$i7 = ($10|0)==(0);
 $33 = $10;
 if ($cmp$i7) {
  STACKTOP = sp;return ($32|0);
 }
 $cmp1$i$i$i9 = ($12|0)==($11|0);
 if (!($cmp1$i$i$i9)) {
  $scevgep$i$i$i11 = ((($12)) + -4|0);
  $34 = $scevgep$i$i$i11;
  $35 = (($34) - ($10))|0;
  $36 = $35 >>> 2;
  $37 = $36 ^ -1;
  $scevgep5$i$i$i12 = (($12) + ($37<<2)|0);
  store4($__end_$i$i,$scevgep5$i$i$i12);
 }
 __ZdlPv($33);
 STACKTOP = sp;return ($32|0);
}
function __Z5h_elmRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_3mapIS5_S5_NS_4lessIS5_EENS3_INS_4pairIS6_S5_EEEEEEi($sel,$nodeProps,$elm) {
 $sel = $sel|0;
 $nodeProps = $nodeProps|0;
 $elm = $elm|0;
 var $$pre$phiZ2D = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i$i$i = 0, $__cc$i$i$i = 0, $__cc$i$i$i$i = 0;
 var $__end_$i$i$i = 0, $__end_cap_$i$i$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i2 = 0, $__first_$i$i$i$i$i6$i = 0, $__left_$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i1 = 0, $__parent_$i$i$i$i$i$i = 0, $__parent_$i$i$i$i$i$i$i = 0, $__right_$i$i$i$i$i = 0, $__right_$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i4 = 0, $agg$tmp = 0, $agg$tmp1 = 0, $call = 0, $call7 = 0;
 var $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i3 = 0, $cmp$i5$i$i$i$i$i = 0, $cmp$i5$i$i$i$i$i$i = 0, $elm9 = 0, $key$i = 0, $lnot$i$i$i$i = 0, $lnot$i$i$i$i$i = 0, $lnot$i$i7$i$i = 0, $lnot$i$i7$i$i$i = 0, $props$i = 0, $retval$0$i$i$i$i$i = 0, $retval$0$i$i$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $agg$tmp = sp + 12|0;
 $agg$tmp1 = sp;
 $call = (__Znwj(64)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$tmp,$sel);
 $__left_$i$i$i$i$i = ((($agg$tmp1)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i = ((($agg$tmp1)) + 8|0);
 store4($__first_$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($agg$tmp1)) + 4|0);
 store4($agg$tmp1,$__first_$i$i$i$i$i);
 $0 = load4($nodeProps);
 $__first_$i$i$i$i$i6$i = ((($nodeProps)) + 4|0);
 $lnot$i$i7$i$i = ($0|0)==($__first_$i$i$i$i$i6$i|0);
 if ($lnot$i$i7$i$i) {
  $$pre$phiZ2D = $__first_$i$i$i$i$i;
 } else {
  $1 = $0;$2 = $0;
  while(1) {
   $__cc$i$i$i = ((($1)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($agg$tmp1,$__first_$i$i$i$i$i,$__cc$i$i$i,$__cc$i$i$i);
   $__right_$i$i$i$i$i = ((($2)) + 4|0);
   $3 = load4($__right_$i$i$i$i$i);
   $cmp$i$i$i$i$i = ($3|0)==(0|0);
   if ($cmp$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i = $2;
    while(1) {
     $__parent_$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i)) + 8|0);
     $5 = load4($__parent_$i$i$i$i$i$i);
     $6 = load4($5);
     $cmp$i5$i$i$i$i$i = ($6|0)==($__x$addr$0$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $5;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i = $5;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i = $3;
    while(1) {
     $4 = load4($__x$addr$0$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i = ($4|0)==(0|0);
     if ($cmp$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $4;
     }
    }
   }
   $lnot$i$i$i$i = ($retval$0$i$i$i$i$i|0)==($__first_$i$i$i$i$i6$i|0);
   if ($lnot$i$i$i$i) {
    $$pre$phiZ2D = $__first_$i$i$i$i$i;
    break;
   } else {
    $1 = $retval$0$i$i$i$i$i;$2 = $retval$0$i$i$i$i$i;
   }
  }
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call,$agg$tmp);
 $key$i = ((($call)) + 12|0);
 $props$i = ((($call)) + 36|0);
 $__left_$i$i$i$i$i$i1 = ((($call)) + 40|0);
 store4($__left_$i$i$i$i$i$i1,0);
 $__first_$i$i$i$i$i2 = ((($call)) + 44|0);
 store4($__first_$i$i$i$i$i2,0);
 ; store8($key$i,i64_const(0,0),4); store8($key$i+8|0,i64_const(0,0),4); store8($key$i+16|0,i64_const(0,0),4);
 store4($props$i,$__left_$i$i$i$i$i$i1);
 $7 = load4($agg$tmp1);
 $lnot$i$i7$i$i$i = ($7|0)==($$pre$phiZ2D|0);
 if ($lnot$i$i7$i$i$i) {
  $__begin_$i$i$i = ((($call)) + 52|0);
  store4($__begin_$i$i$i,0);
  $__end_$i$i$i = ((($call)) + 56|0);
  store4($__end_$i$i$i,0);
  $__end_cap_$i$i$i = ((($call)) + 60|0);
  store4($__end_cap_$i$i$i,0);
  $call7 = (__Z11adjustVNodeP5VNode($call)|0);
  $14 = load4($__first_$i$i$i$i$i);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($14);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
  $elm9 = ((($call)) + 48|0);
  store4($elm9,$elm);
  $15 = $call7;
  STACKTOP = sp;return ($15|0);
 }
 $8 = $7;$9 = $7;
 while(1) {
  $__cc$i$i$i$i = ((($8)) + 16|0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($props$i,$__left_$i$i$i$i$i$i1,$__cc$i$i$i$i,$__cc$i$i$i$i);
  $__right_$i$i$i$i$i$i = ((($9)) + 4|0);
  $10 = load4($__right_$i$i$i$i$i$i);
  $cmp$i$i$i$i$i$i3 = ($10|0)==(0|0);
  if ($cmp$i$i$i$i$i$i3) {
   $__x$addr$0$i$i$i$i$i$i4 = $9;
   while(1) {
    $__parent_$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i4)) + 8|0);
    $12 = load4($__parent_$i$i$i$i$i$i$i);
    $13 = load4($12);
    $cmp$i5$i$i$i$i$i$i = ($13|0)==($__x$addr$0$i$i$i$i$i$i4|0);
    if ($cmp$i5$i$i$i$i$i$i) {
     $retval$0$i$i$i$i$i$i = $12;
     break;
    } else {
     $__x$addr$0$i$i$i$i$i$i4 = $12;
    }
   }
  } else {
   $__x$addr$0$i$i$i$i$i$i$i = $10;
   while(1) {
    $11 = load4($__x$addr$0$i$i$i$i$i$i$i);
    $cmp$i$i$i$i$i$i$i = ($11|0)==(0|0);
    if ($cmp$i$i$i$i$i$i$i) {
     $retval$0$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i;
     break;
    } else {
     $__x$addr$0$i$i$i$i$i$i$i = $11;
    }
   }
  }
  $lnot$i$i$i$i$i = ($retval$0$i$i$i$i$i$i|0)==($__first_$i$i$i$i$i|0);
  if ($lnot$i$i$i$i$i) {
   break;
  } else {
   $8 = $retval$0$i$i$i$i$i$i;$9 = $retval$0$i$i$i$i$i$i;
  }
 }
 $__begin_$i$i$i = ((($call)) + 52|0);
 store4($__begin_$i$i$i,0);
 $__end_$i$i$i = ((($call)) + 56|0);
 store4($__end_$i$i$i,0);
 $__end_cap_$i$i$i = ((($call)) + 60|0);
 store4($__end_cap_$i$i$i,0);
 $call7 = (__Z11adjustVNodeP5VNode($call)|0);
 $14 = load4($__first_$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($14);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 $elm9 = ((($call)) + 48|0);
 store4($elm9,$elm);
 $15 = $call7;
 STACKTOP = sp;return ($15|0);
}
function __Z14deleteVNodePtrRKj($vnodePtr) {
 $vnodePtr = $vnodePtr|0;
 var $0 = 0, $isnull$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($vnodePtr);
 $isnull$i = ($0|0)==(0|0);
 if ($isnull$i) {
  return;
 }
 __ZN5VNodeD2Ev($0);
 __ZdlPv($0);
 return;
}
function __Z14removeChildPtrRKjS0_($parent,$child) {
 $parent = $parent|0;
 $child = $child|0;
 var $$in$i = 0, $$in$i$i = 0, $$pre$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i$i = 0, $__end_$i14$i = 0;
 var $__new_last3$i$i$i$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $incdec$ptr$i$i$i$i = 0, $incdec$ptr$i19$i$i = 0, $incdec$ptr$i9$i$i = 0, $incdec$ptr$i920$i$i = 0, $lnot$i$i$i = 0, $lnot$i$i$i$i = 0, $lnot$i$i13$i = 0, $lnot$i12$i$i = 0, $lnot$i2$i$i$i = 0, $lnot$i21$i$i = 0, $retval$sroa$0$0$copyload$i$i = 0, $retval$sroa$0$0$copyload23$i$i = 0, $retval$sroa$0$0$copyload24$i$i = 0, $scevgep$i$i$i$i = 0, $scevgep5$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($parent);
 $1 = load4($child);
 $__begin_$i$i = ((($0)) + 52|0);
 $2 = load4($__begin_$i$i);
 $__end_$i14$i = ((($0)) + 56|0);
 $3 = load4($__end_$i14$i);
 $lnot$i2$i$i$i = ($2|0)==($3|0);
 L1: do {
  if ($lnot$i2$i$i$i) {
   $6 = $2;
  } else {
   $5 = $2;
   while(1) {
    $4 = load4($5);
    $cmp$i$i$i = ($4|0)==($1|0);
    if ($cmp$i$i$i) {
     $6 = $5;
     break L1;
    }
    $incdec$ptr$i$i$i$i = ((($5)) + 4|0);
    $lnot$i$i$i$i = ($incdec$ptr$i$i$i$i|0)==($3|0);
    if ($lnot$i$i$i$i) {
     break;
    } else {
     $5 = $incdec$ptr$i$i$i$i;
    }
   }
   return;
  }
 } while(0);
 $lnot$i12$i$i = ($6|0)==($3|0);
 if ($lnot$i12$i$i) {
  return;
 }
 $incdec$ptr$i920$i$i = ((($6)) + 4|0);
 $lnot$i21$i$i = ($incdec$ptr$i920$i$i|0)==($3|0);
 if ($lnot$i21$i$i) {
  $$in$i = $3;$retval$sroa$0$0$copyload$i$i = $6;
 } else {
  $$in$i$i = $incdec$ptr$i920$i$i;$9 = $6;$retval$sroa$0$0$copyload24$i$i = $6;
  while(1) {
   $7 = load4($$in$i$i);
   $cmp$i$i = ($7|0)==($1|0);
   if ($cmp$i$i) {
    $14 = $9;$retval$sroa$0$0$copyload23$i$i = $retval$sroa$0$0$copyload24$i$i;
   } else {
    $8 = $7;
    store4($9,$8);
    $incdec$ptr$i19$i$i = ((($9)) + 4|0);
    $14 = $incdec$ptr$i19$i$i;$retval$sroa$0$0$copyload23$i$i = $incdec$ptr$i19$i$i;
   }
   $incdec$ptr$i9$i$i = ((($$in$i$i)) + 4|0);
   $lnot$i$i13$i = ($incdec$ptr$i9$i$i|0)==($3|0);
   if ($lnot$i$i13$i) {
    break;
   } else {
    $$in$i$i = $incdec$ptr$i9$i$i;$9 = $14;$retval$sroa$0$0$copyload24$i$i = $retval$sroa$0$0$copyload23$i$i;
   }
  }
  $$pre$i = load4($__end_$i14$i);
  $$in$i = $$pre$i;$retval$sroa$0$0$copyload$i$i = $retval$sroa$0$0$copyload23$i$i;
 }
 $lnot$i$i$i = ($retval$sroa$0$0$copyload$i$i|0)==($$in$i|0);
 if ($lnot$i$i$i) {
  return;
 }
 $scevgep$i$i$i$i = ((($$in$i)) + -4|0);
 $10 = $scevgep$i$i$i$i;
 $__new_last3$i$i$i$i = $retval$sroa$0$0$copyload$i$i;
 $11 = (($10) - ($__new_last3$i$i$i$i))|0;
 $12 = $11 >>> 2;
 $13 = $12 ^ -1;
 $scevgep5$i$i$i$i = (($$in$i) + ($13<<2)|0);
 store4($__end_$i14$i,$scevgep5$i$i$i$i);
 return;
}
function __Z15replaceChildPtrRKjS0_S0_($parent,$oldChild,$newChild) {
 $parent = $parent|0;
 $oldChild = $oldChild|0;
 $newChild = $newChild|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $__begin_$i$i = 0, $__end_$i$i = 0, $cmp$i$i = 0, $incdec$ptr$i$i$i = 0, $lnot$i$i$i = 0, $lnot$i3$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($parent);
 $1 = load4($oldChild);
 $2 = load4($newChild);
 $__begin_$i$i = ((($0)) + 52|0);
 $3 = load4($__begin_$i$i);
 $__end_$i$i = ((($0)) + 56|0);
 $4 = load4($__end_$i$i);
 $lnot$i3$i$i = ($3|0)==($4|0);
 if ($lnot$i3$i$i) {
  return;
 } else {
  $6 = $3;
 }
 while(1) {
  $5 = load4($6);
  $cmp$i$i = ($5|0)==($1|0);
  if ($cmp$i$i) {
   store4($6,$2);
  }
  $incdec$ptr$i$i$i = ((($6)) + 4|0);
  $lnot$i$i$i = ($incdec$ptr$i$i$i|0)==($4|0);
  if ($lnot$i$i$i) {
   break;
  } else {
   $6 = $incdec$ptr$i$i$i;
  }
 }
 return;
}
function __Z7getNodeRKj($vnodePtr) {
 $vnodePtr = $vnodePtr|0;
 var $0 = 0, $1 = 0, $elm = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($vnodePtr);
 $elm = ((($0)) + 48|0);
 $1 = load4($elm);
 return ($1|0);
}
function __Z9sameVNodePK5VNodeS1_($vnode1,$vnode2) {
 $vnode1 = $vnode1|0;
 $vnode2 = $vnode2|0;
 var $$$$i37 = 0, $$$i36 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i26 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__size_$i$i$i = 0, $__size_$i$i$i6 = 0, $__size_$i$i5$i = 0;
 var $__size_$i$i5$i14 = 0, $__size_$i3$i$i = 0, $__size_$i3$i$i8 = 0, $__size_$i3$i7$i = 0, $__size_$i3$i7$i16 = 0, $call$i$i = 0, $call$i$i32 = 0, $call341 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i25 = 0, $cmp$i$i27 = 0, $cmp$i33 = 0, $cmp4 = 0, $cmp8$i = 0, $cmp8$i35 = 0, $cond$i$i = 0, $cond$i$i$i = 0;
 var $cond$i$i$i24 = 0, $cond$i$i12 = 0, $cond$i$i22$i = 0, $cond$i$i22$i31 = 0, $cond$i11$i = 0, $cond$i11$i18 = 0, $conv$i$i$i = 0, $conv$i$i$i10 = 0, $conv$i$i9$i = 0, $conv$i$i9$i17 = 0, $key = 0, $key1 = 0, $or$cond = 0, $tobool$i$i$i = 0, $tobool$i$i$i7 = 0, $tobool$i$i6$i = 0, $tobool$i$i6$i15 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $key = ((($vnode1)) + 12|0);
 $key1 = ((($vnode2)) + 12|0);
 $__size_$i$i$i = ((($key)) + 11|0);
 $0 = load1($__size_$i$i$i);
 $tobool$i$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i$i) {
  $__size_$i3$i$i = ((($vnode1)) + 16|0);
  $1 = load4($__size_$i3$i$i);
  $cond$i$i = $1;
 } else {
  $conv$i$i$i = $0&255;
  $cond$i$i = $conv$i$i$i;
 }
 $__size_$i$i5$i = ((($key1)) + 11|0);
 $2 = load1($__size_$i$i5$i);
 $tobool$i$i6$i = ($2<<24>>24)<(0);
 $__size_$i3$i7$i = ((($vnode2)) + 16|0);
 $3 = load4($__size_$i3$i7$i);
 $conv$i$i9$i = $2&255;
 $cond$i11$i = $tobool$i$i6$i ? $3 : $conv$i$i9$i;
 if ($tobool$i$i$i) {
  $4 = load4($key);
  $cond$i$i$i = $4;
 } else {
  $cond$i$i$i = $key;
 }
 $cmp$i$i$i$i = ($cond$i11$i>>>0)<($cond$i$i>>>0);
 $$sroa$speculated$i = $cmp$i$i$i$i ? $cond$i11$i : $cond$i$i;
 $cmp$i$i = ($$sroa$speculated$i|0)==(0);
 if (!($cmp$i$i)) {
  $5 = load4($key1);
  $cond$i$i22$i = $tobool$i$i6$i ? $5 : $key1;
  $call$i$i = (_memcmp($cond$i$i$i,$cond$i$i22$i,$$sroa$speculated$i)|0);
  $cmp$i = ($call$i$i|0)==(0);
  if (!($cmp$i)) {
   $12 = 0;
   return ($12|0);
  }
 }
 $cmp8$i = ($cond$i$i>>>0)>=($cond$i11$i>>>0);
 $cmp = $cmp$i$i$i$i ^ 1;
 $or$cond = $cmp8$i & $cmp;
 if (!($or$cond)) {
  $12 = 0;
  return ($12|0);
 }
 $__size_$i$i$i6 = ((($vnode1)) + 11|0);
 $6 = load1($__size_$i$i$i6);
 $tobool$i$i$i7 = ($6<<24>>24)<(0);
 if ($tobool$i$i$i7) {
  $__size_$i3$i$i8 = ((($vnode1)) + 4|0);
  $7 = load4($__size_$i3$i$i8);
  $cond$i$i12 = $7;
 } else {
  $conv$i$i$i10 = $6&255;
  $cond$i$i12 = $conv$i$i$i10;
 }
 $__size_$i$i5$i14 = ((($vnode2)) + 11|0);
 $8 = load1($__size_$i$i5$i14);
 $tobool$i$i6$i15 = ($8<<24>>24)<(0);
 $__size_$i3$i7$i16 = ((($vnode2)) + 4|0);
 $9 = load4($__size_$i3$i7$i16);
 $conv$i$i9$i17 = $8&255;
 $cond$i11$i18 = $tobool$i$i6$i15 ? $9 : $conv$i$i9$i17;
 if ($tobool$i$i$i7) {
  $10 = load4($vnode1);
  $cond$i$i$i24 = $10;
 } else {
  $cond$i$i$i24 = $vnode1;
 }
 $cmp$i$i$i$i25 = ($cond$i11$i18>>>0)<($cond$i$i12>>>0);
 $$sroa$speculated$i26 = $cmp$i$i$i$i25 ? $cond$i11$i18 : $cond$i$i12;
 $cmp$i$i27 = ($$sroa$speculated$i26|0)==(0);
 if ($cmp$i$i27) {
  label = 18;
 } else {
  $11 = load4($vnode2);
  $cond$i$i22$i31 = $tobool$i$i6$i15 ? $11 : $vnode2;
  $call$i$i32 = (_memcmp($cond$i$i$i24,$cond$i$i22$i31,$$sroa$speculated$i26)|0);
  $cmp$i33 = ($call$i$i32|0)==(0);
  if ($cmp$i33) {
   label = 18;
  } else {
   $call341 = $call$i$i32;
  }
 }
 if ((label|0) == 18) {
  $cmp8$i35 = ($cond$i$i12>>>0)<($cond$i11$i18>>>0);
  $$$i36 = $cmp$i$i$i$i25&1;
  $$$$i37 = $cmp8$i35 ? -1 : $$$i36;
  $call341 = $$$$i37;
 }
 $cmp4 = ($call341|0)==(0);
 $12 = $cmp4;
 return ($12|0);
}
function __Z9createElmP5VNode($vnode) {
 $vnode = $vnode|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__end_$i41 = 0, $__parent$i = 0, $__size_$i$i$i = 0, $__size_$i$i$i$i = 0, $__size_$i$i$i$i44 = 0, $__size_$i$i$i22 = 0, $__size_$i3$i$i = 0, $__size_$i3$i$i24 = 0, $arrayidx$i = 0, $call$i$i = 0, $call$i81 = 0;
 var $call2 = 0, $call23 = 0, $call28 = 0, $call38 = 0, $call39 = 0, $call4 = 0, $call47 = 0, $call8 = 0, $children = 0, $cmp = 0, $cmp$i = 0, $cmp$i29 = 0, $cmp$i42 = 0, $cmp$i79 = 0, $cmp12 = 0, $cmp34 = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i$i$i38 = 0, $cond$i$i$i50 = 0;
 var $cond$i$i$i59 = 0, $cond$i$i$i68 = 0, $cond$i$i$i77 = 0, $cond$i$i28 = 0, $conv$i$i$i = 0, $conv$i$i$i26 = 0, $elm = 0, $elm24 = 0, $elm29 = 0, $elm35 = 0, $elm52$pre$phiZ2D = 0, $elm9 = 0, $exception$i = 0, $i$086 = 0, $inc = 0, $props = 0, $ref$tmp15 = 0, $second$i = 0, $sub$ptr$div$i = 0, $sub$ptr$sub$i = 0;
 var $text = 0, $text41 = 0, $text6 = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i$i45 = 0, $tobool$i$i$i$i54 = 0, $tobool$i$i$i$i63 = 0, $tobool$i$i$i$i72 = 0, $tobool$i$i$i23 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $__parent$i = sp + 12|0;
 $ref$tmp15 = sp;
 $__size_$i$i$i = ((($vnode)) + 11|0);
 $0 = load1($__size_$i$i$i);
 $tobool$i$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i$i) {
  $__size_$i3$i$i = ((($vnode)) + 4|0);
  $1 = load4($__size_$i3$i$i);
  $cond$i$i = $1;
 } else {
  $conv$i$i$i = $0&255;
  $cond$i$i = $conv$i$i$i;
 }
 $cmp$i = ($cond$i$i|0)==(0);
 if ($cmp$i) {
  $text = ((($vnode)) + 24|0);
  $__size_$i$i$i$i = ((($text)) + 11|0);
  $2 = load1($__size_$i$i$i$i);
  $tobool$i$i$i$i = ($2<<24>>24)<(0);
  if ($tobool$i$i$i$i) {
   $3 = load4($text);
   $cond$i$i$i = $3;
  } else {
   $cond$i$i$i = $text;
  }
  $call2 = _emscripten_asm_const_ii(3, ($cond$i$i$i|0))|0;
  $elm = ((($vnode)) + 48|0);
  store4($elm,$call2);
  $elm52$pre$phiZ2D = $elm;
  $27 = load4($elm52$pre$phiZ2D);
  STACKTOP = sp;return ($27|0);
 }
 $call4 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($vnode)|0);
 $cmp = ($call4|0)==(0);
 if ($cmp) {
  $text6 = ((($vnode)) + 24|0);
  $__size_$i$i$i$i44 = ((($text6)) + 11|0);
  $4 = load1($__size_$i$i$i$i44);
  $tobool$i$i$i$i45 = ($4<<24>>24)<(0);
  if ($tobool$i$i$i$i45) {
   $5 = load4($text6);
   $cond$i$i$i50 = $5;
  } else {
   $cond$i$i$i50 = $text6;
  }
  $call8 = _emscripten_asm_const_ii(4, ($cond$i$i$i50|0))|0;
  $elm9 = ((($vnode)) + 48|0);
  store4($elm9,$call8);
  $elm52$pre$phiZ2D = $elm9;
  $27 = load4($elm52$pre$phiZ2D);
  STACKTOP = sp;return ($27|0);
 }
 $props = ((($vnode)) + 36|0);
 ; store8($__parent$i,i64_const(0,0),4); store4($__parent$i+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($__parent$i,2949,2);
 $call$i81 = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($props,$__parent$i)|0);
 $cmp12 = ($call$i81|0)==(0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($__parent$i);
 if ($cmp12) {
  $12 = load1($__size_$i$i$i);
  $tobool$i$i$i$i54 = ($12<<24>>24)<(0);
  if ($tobool$i$i$i$i54) {
   $13 = load4($vnode);
   $cond$i$i$i59 = $13;
  } else {
   $cond$i$i$i59 = $vnode;
  }
  $call28 = _emscripten_asm_const_ii(6, ($cond$i$i$i59|0))|0;
  $elm29 = ((($vnode)) + 48|0);
  store4($elm29,$call28);
 } else {
  ; store8($ref$tmp15,i64_const(0,0),4); store4($ref$tmp15+8|0,0,4);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp15,2949,2);
  $call$i$i = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($props,$__parent$i,$ref$tmp15)|0);
  $6 = load4($call$i$i);
  $cmp$i79 = ($6|0)==(0|0);
  if ($cmp$i79) {
   $exception$i = (___cxa_allocate_exception(8)|0);
   __ZNSt11logic_errorC2EPKc($exception$i);
   store4($exception$i,(2176));
   ___cxa_throw(($exception$i|0),(1432|0),(8|0));
   // unreachable;
  }
  $second$i = ((($6)) + 28|0);
  $7 = ((($second$i)) + 11|0);
  $8 = load1($7);
  $tobool$i$i$i$i72 = ($8<<24>>24)<(0);
  if ($tobool$i$i$i$i72) {
   $9 = load4($second$i);
   $cond$i$i$i77 = $9;
  } else {
   $cond$i$i$i77 = $second$i;
  }
  $10 = load1($__size_$i$i$i);
  $tobool$i$i$i$i63 = ($10<<24>>24)<(0);
  if ($tobool$i$i$i$i63) {
   $11 = load4($vnode);
   $cond$i$i$i68 = $11;
  } else {
   $cond$i$i$i68 = $vnode;
  }
  $call23 = _emscripten_asm_const_iii(5, ($cond$i$i$i77|0), ($cond$i$i$i68|0))|0;
  $elm24 = ((($vnode)) + 48|0);
  store4($elm24,$call23);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp15);
 }
 $14 = load4(9496);
 __Z4diffP5VNodeS0_($14,$vnode);
 $children = ((($vnode)) + 52|0);
 $15 = load4($children);
 $__end_$i41 = ((($vnode)) + 56|0);
 $16 = load4($__end_$i41);
 $cmp$i42 = ($15|0)==($16|0);
 if (!($cmp$i42)) {
  $elm35 = ((($vnode)) + 48|0);
  $18 = $15;$i$086 = 0;
  while(1) {
   $17 = load4($elm35);
   $arrayidx$i = (($18) + ($i$086<<2)|0);
   $19 = load4($arrayidx$i);
   $call38 = (__Z9createElmP5VNode($19)|0);
   $call39 = _emscripten_asm_const_iii(7, ($17|0), ($call38|0))|0;
   $inc = (($i$086) + 1)|0;
   $20 = load4($__end_$i41);
   $21 = load4($children);
   $sub$ptr$sub$i = (($20) - ($21))|0;
   $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
   $cmp34 = ($inc|0)==($sub$ptr$div$i|0);
   $22 = $21;
   if ($cmp34) {
    $elm52$pre$phiZ2D = $elm35;
    break;
   } else {
    $18 = $22;$i$086 = $inc;
   }
  }
  $27 = load4($elm52$pre$phiZ2D);
  STACKTOP = sp;return ($27|0);
 }
 $text41 = ((($vnode)) + 24|0);
 $__size_$i$i$i22 = ((($text41)) + 11|0);
 $23 = load1($__size_$i$i$i22);
 $tobool$i$i$i23 = ($23<<24>>24)<(0);
 if ($tobool$i$i$i23) {
  $__size_$i3$i$i24 = ((($vnode)) + 28|0);
  $24 = load4($__size_$i3$i$i24);
  $cond$i$i28 = $24;
 } else {
  $conv$i$i$i26 = $23&255;
  $cond$i$i28 = $conv$i$i$i26;
 }
 $cmp$i29 = ($cond$i$i28|0)==(0);
 $$pre = ((($vnode)) + 48|0);
 if ($cmp$i29) {
  $elm52$pre$phiZ2D = $$pre;
  $27 = load4($elm52$pre$phiZ2D);
  STACKTOP = sp;return ($27|0);
 }
 $25 = load4($$pre);
 if ($tobool$i$i$i23) {
  $26 = load4($text41);
  $cond$i$i$i38 = $26;
 } else {
  $cond$i$i$i38 = $text41;
 }
 $call47 = _emscripten_asm_const_iii(8, ($25|0), ($cond$i$i$i38|0))|0;
 $elm52$pre$phiZ2D = $$pre;
 $27 = load4($elm52$pre$phiZ2D);
 STACKTOP = sp;return ($27|0);
}
function __Z10patchVNodeP5VNodeS0_($oldVnode,$vnode) {
 $oldVnode = $oldVnode|0;
 $vnode = $vnode|0;
 var $$pre = 0, $$pre$i = 0, $$pre$i$i$i$i$i$i$i$i = 0, $$pre230$i = 0, $$pre83 = 0, $$pre84 = 0, $$pre85 = 0, $$sink$be$i$i = 0, $$sink$i$i$i = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i22$i$i = 0, $$sroa$speculated$i$i$i$i30$i$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0;
 var $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0;
 var $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0;
 var $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0;
 var $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $__begin_$i40 = 0, $__cc$i$i$i$i$i$i$i$i$i = 0, $__end_$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i$i = 0, $__first_$i$i$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i$i = 0, $__nd$0$i$i$i = 0, $__parent$i$i$i$i$i$i$i$sroa$0 = 0, $__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$ = 0, $__parent_$i$i$i$i$i$i$i$i = 0, $__right_$i$i$i$i$i$i$i$i = 0, $__size_$i$i$i = 0, $__size_$i$i$i$i = 0, $__size_$i$i$i$i$i = 0, $__size_$i$i$i$i$i$i10$i$i = 0, $__size_$i$i$i$i$i$i18$i$i$i = 0, $__size_$i$i$i29 = 0, $__size_$i$i$i54 = 0;
 var $__size_$i$i5$i = 0, $__size_$i$i5$i$i = 0, $__size_$i$i5$i$i$i$i16$i$i = 0, $__size_$i$i5$i$i$i$i24$i$i$i = 0, $__size_$i3$i$i = 0, $__size_$i3$i$i$i = 0, $__size_$i3$i$i$i$i = 0, $__size_$i3$i$i$i$i$i12$i$i = 0, $__size_$i3$i$i$i$i$i20$i$i$i = 0, $__size_$i3$i$i31 = 0, $__size_$i3$i$i56 = 0, $__size_$i3$i$i66 = 0, $__size_$i3$i7$i = 0, $__size_$i3$i7$i$i = 0, $__size_$i3$i7$i$i$i$i18$i$i = 0, $__size_$i3$i7$i$i$i$i26$i$i$i = 0, $__value_$i$i = 0, $__value_$i$i$i = 0, $add$i = 0, $arrayidx$i$i = 0;
 var $arrayidx$i$i$i = 0, $arrayidx$i$i1 = 0, $arrayidx$i$i130$i = 0, $arrayidx$i$i130245$i = 0, $arrayidx$i$i143$i = 0, $arrayidx$i$i143251$i = 0, $arrayidx$i$i2$i = 0, $arrayidx$i$i48 = 0, $arrayidx$i113$i = 0, $arrayidx$i115$i = 0, $arrayidx$i117$i = 0, $arrayidx$i119$i = 0, $arrayidx$i121$i = 0, $arrayidx$i123$i = 0, $arrayidx$i125$i = 0, $arrayidx$i136$i = 0, $arrayidx$i138$i = 0, $arrayidx$i151$i = 0, $arrayidx$i153$i = 0, $arrayidx$i155$i = 0;
 var $arrayidx$i157$i = 0, $arrayidx$i159$i = 0, $arrayidx$i162$i = 0, $arrayidx$i165$i = 0, $arrayidx$i183$i = 0, $arrayidx$i185$i = 0, $call$i$i = 0, $call$i$i$i = 0, $call$i$i$i$i$i$i$i = 0, $call$i$i$i$i$i$i$i$i = 0, $call$i$i$i$i$i$i$i$i$i7$i$i = 0, $call$i$i$i$i$i30$i$i = 0, $call$i$i$i$i$i38$i$i$i = 0, $call$i$i166$i = 0, $call$i$i173$i = 0, $call$i1$i = 0, $call1$i = 0, $call1$i$i = 0, $call1$i131$i = 0, $call1$i131246$i = 0;
 var $call1$i144$i = 0, $call1$i144252$i = 0, $call1$i49 = 0, $call1$i4993 = 0, $call1$i96 = 0, $call16 = 0, $call2$i = 0, $call2$i$i = 0, $call2$i145$i = 0, $call2$i145253$i = 0, $call2$i247$i = 0, $call2$i97 = 0, $call24$i = 0, $call31$i = 0, $call34 = 0, $call38$i = 0, $call41$i = 0, $call47 = 0, $call47$i = 0, $call51$i = 0;
 var $call62$i = 0, $call64$i = 0, $call75$i = 0, $call77$i = 0, $call84$i = 0, $children = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i21$i$i = 0, $cmp$i$i$i$i$i$i$i29$i$i$i = 0, $cmp$i$i$i$i$i$i13$i = 0;
 var $cmp$i$i$i$i$i$i2$i$i = 0, $cmp$i$i$i$i$i14$i = 0, $cmp$i$i$i$i$i23$i$i = 0, $cmp$i$i$i$i$i3$i$i = 0, $cmp$i$i$i$i$i31$i$i$i = 0, $cmp$i$i$i$i15$i = 0, $cmp$i$i$i$i31$i$i = 0, $cmp$i$i$i$i39$i$i$i = 0, $cmp$i$i$i38$i$i = 0, $cmp$i$i$i46$i$i$i = 0, $cmp$i$i10 = 0, $cmp$i$i7$i = 0, $cmp$i1$i$i = 0, $cmp$i11$i = 0, $cmp$i133$i = 0, $cmp$i133249$i = 0, $cmp$i147$i = 0, $cmp$i147255$i = 0, $cmp$i16$i = 0, $cmp$i163$i = 0;
 var $cmp$i167$i = 0, $cmp$i174$i = 0, $cmp$i21 = 0, $cmp$i36 = 0, $cmp$i39 = 0, $cmp$i3998 = 0, $cmp$i4 = 0, $cmp$i42 = 0, $cmp$i51 = 0, $cmp$i5194 = 0, $cmp$i61 = 0, $cmp$i71 = 0, $cmp$lcssa$i = 0, $cmp10$i = 0, $cmp101$i = 0, $cmp14$i = 0, $cmp14$i$i$i = 0, $cmp17$i$i = 0, $cmp19$i = 0, $cmp207$i = 0;
 var $cmp3$i$i = 0, $cmp3$i126$i = 0, $cmp47$i$i = 0, $cmp5$i$i$i = 0, $cmp7$i = 0, $cmp7$lcssa$i = 0, $cmp7$not$i = 0, $cmp7208$i = 0, $cmp73$i = 0, $cmp8$i = 0, $cmp8$i$i = 0, $cmp8$i$i$i$i33$i$i = 0, $cmp8$i$i$i$i41$i$i$i = 0, $cmp8$i2 = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i$i$i$i = 0, $cond$i$i$i$i$i$i$i$i = 0, $cond$i$i$i$i$i$i$i$i$i = 0, $cond$i$i$i$i$i14$i$i = 0;
 var $cond$i$i$i$i$i22$i$i$i = 0, $cond$i$i$i6$i = 0, $cond$i$i$i77 = 0, $cond$i$i$i9 = 0, $cond$i$i22$i = 0, $cond$i$i22$i$i = 0, $cond$i$i22$i$i$i$i$i$i = 0, $cond$i$i22$i$i$i$i$i$i$i = 0, $cond$i$i22$i$i$i$i29$i$i = 0, $cond$i$i22$i$i$i$i37$i$i$i = 0, $cond$i$i35 = 0, $cond$i$i60 = 0, $cond$i$i70 = 0, $cond$i11$i = 0, $cond$i11$i$i = 0, $cond$i11$i$i$i$i20$i$i = 0, $cond$i11$i$i$i$i28$i$i$i = 0, $conv$i$i$i = 0, $conv$i$i$i$i = 0, $conv$i$i$i$i$i = 0;
 var $conv$i$i$i$i$i$i13$i$i = 0, $conv$i$i$i$i$i$i21$i$i$i = 0, $conv$i$i$i33 = 0, $conv$i$i$i58 = 0, $conv$i$i$i68 = 0, $conv$i$i9$i = 0, $conv$i$i9$i$i = 0, $conv$i$i9$i$i$i$i19$i$i = 0, $conv$i$i9$i$i$i$i27$i$i$i = 0, $dec$i = 0, $dec21$i = 0, $dec33$i = 0, $dec35$i = 0, $dec44$i = 0, $dec52$i = 0, $elm = 0, $elm$i = 0, $elm$i$i = 0, $elm$i5 = 0, $elm$i92 = 0;
 var $elm1 = 0, $elm105$i = 0, $elm40$i = 0, $elm49$i = 0, $elm50$i = 0, $elm63$i = 0, $elm76$i = 0, $elm82$i = 0, $elm83$i = 0, $exception$i$i = 0, $exception$i175$i = 0, $inc$i = 0, $inc$i$i = 0, $inc$i$i$i$i$i$i$i$i = 0, $inc$i10$i = 0, $inc$i132$i = 0, $inc$i132248$i = 0, $inc$i132250$i = 0, $inc$i146$i = 0, $inc$i146254$i = 0;
 var $inc$i146256$i = 0, $inc$i3 = 0, $inc$i50 = 0, $inc$i5095 = 0, $inc$i99 = 0, $inc16$i = 0, $inc26$i = 0, $inc28$i = 0, $inc42$i = 0, $inc54$i = 0, $inc65$i = 0, $inc86$i = 0, $isnull$i = 0, $key$i = 0, $key$i$i = 0, $newEndIdx$0$be$i = 0, $newEndIdx$0$lcssa$i = 0, $newEndIdx$0212$i = 0, $newEndVnode$0$be$i = 0, $newEndVnode$0217$i = 0;
 var $newStartIdx$0$be$i = 0, $newStartIdx$0$lcssa$i = 0, $newStartIdx$0210$i = 0, $newStartVnode$0$be$i = 0, $newStartVnode$0215$i = 0, $oldEndIdx$0$be$i = 0, $oldEndIdx$0$lcssa$i = 0, $oldEndIdx$0211$i = 0, $oldEndVnode$0$be$i = 0, $oldEndVnode$0214$i = 0, $oldKeyToIdx$0$be$i = 0, $oldKeyToIdx$0$lcssa$i = 0, $oldKeyToIdx$0218$i = 0, $oldKeyToIdx$1$i = 0, $oldStartIdx$0$be$i = 0, $oldStartIdx$0$lcssa$i = 0, $oldStartIdx$0219$i = 0, $oldStartVnode$0$be$i = 0, $oldStartVnode$0213$i = 0, $or$cond = 0;
 var $or$cond$i = 0, $or$cond187$i = 0, $or$cond188$i = 0, $or$cond209$i = 0, $ref$tmp$i$i = 0, $retval$0$i$i$i = 0, $second$i$i = 0, $second$i$i$i$i$i$i$i$i$i$i$i$i = 0, $second$i$i10$i$i = 0, $second$i179$i = 0, $startIdx$addr$04$i$i = 0, $storemerge18$i$i = 0, $sub = 0, $sub$i = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$i109$i = 0, $sub$ptr$div$i171$i = 0, $sub$ptr$div$i45 = 0, $sub$ptr$sub$i = 0;
 var $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i108$i = 0, $sub$ptr$sub$i170$i = 0, $sub$ptr$sub$i44 = 0, $sub100$i = 0, $sub2$i = 0, $sub28 = 0, $text = 0, $text12 = 0, $text30 = 0, $text41 = 0, $tobool$i = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i$i$i = 0, $tobool$i$i$i$i$i$i11$i$i = 0, $tobool$i$i$i$i$i$i19$i$i$i = 0, $tobool$i$i$i30 = 0, $tobool$i$i$i55 = 0, $tobool$i$i6$i = 0;
 var $tobool$i$i6$i$i = 0, $tobool$i$i6$i$i$i$i17$i$i = 0, $tobool$i$i6$i$i$i$i25$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $__parent$i$i$i$i$i$i$i$sroa$0 = sp + 16|0;
 $ref$tmp$i$i = sp;
 $elm = ((($oldVnode)) + 48|0);
 $0 = load4($elm);
 $elm1 = ((($vnode)) + 48|0);
 store4($elm1,$0);
 __Z4diffP5VNodeS0_($oldVnode,$vnode);
 $text = ((($vnode)) + 24|0);
 $__size_$i$i$i = ((($text)) + 11|0);
 $1 = load1($__size_$i$i$i);
 $tobool$i$i$i = ($1<<24>>24)<(0);
 if ($tobool$i$i$i) {
  $__size_$i3$i$i = ((($vnode)) + 28|0);
  $2 = load4($__size_$i3$i$i);
  $cond$i$i = $2;
 } else {
  $conv$i$i$i = $1&255;
  $cond$i$i = $conv$i$i$i;
 }
 $cmp$i = ($cond$i$i|0)==(0);
 if (!($cmp$i)) {
  $text41 = ((($oldVnode)) + 24|0);
  if ($tobool$i$i$i) {
   $__size_$i3$i$i66 = ((($vnode)) + 28|0);
   $145 = load4($__size_$i3$i$i66);
   $cond$i$i70 = $145;
  } else {
   $conv$i$i$i68 = $1&255;
   $cond$i$i70 = $conv$i$i$i68;
  }
  $__size_$i$i5$i = ((($text41)) + 11|0);
  $146 = load1($__size_$i$i5$i);
  $tobool$i$i6$i = ($146<<24>>24)<(0);
  $__size_$i3$i7$i = ((($oldVnode)) + 28|0);
  $147 = load4($__size_$i3$i7$i);
  $conv$i$i9$i = $146&255;
  $cond$i11$i = $tobool$i$i6$i ? $147 : $conv$i$i9$i;
  if ($tobool$i$i$i) {
   $148 = load4($text);
   $cond$i$i$i = $148;
  } else {
   $cond$i$i$i = $text;
  }
  $cmp$i$i$i$i = ($cond$i11$i>>>0)<($cond$i$i70>>>0);
  $$sroa$speculated$i = $cmp$i$i$i$i ? $cond$i11$i : $cond$i$i70;
  $cmp$i$i = ($$sroa$speculated$i|0)==(0);
  if ($cmp$i$i) {
   label = 121;
  } else {
   $149 = load4($text41);
   $cond$i$i22$i = $tobool$i$i6$i ? $149 : $text41;
   $call$i$i = (_memcmp($cond$i$i$i,$cond$i$i22$i,$$sroa$speculated$i)|0);
   $cmp$i71 = ($call$i$i|0)==(0);
   if ($cmp$i71) {
    label = 121;
   }
  }
  if ((label|0) == 121) {
   $cmp8$i = ($cond$i$i70>>>0)>=($cond$i11$i>>>0);
   $cmp = $cmp$i$i$i$i ^ 1;
   $or$cond = $cmp8$i & $cmp;
   if ($or$cond) {
    STACKTOP = sp;return;
   }
  }
  $150 = load4($elm1);
  if ($tobool$i$i$i) {
   $151 = load4($text);
   $cond$i$i$i77 = $151;
  } else {
   $cond$i$i$i77 = $text;
  }
  $call47 = _emscripten_asm_const_iii(14, ($150|0), ($cond$i$i$i77|0))|0;
  STACKTOP = sp;return;
 }
 $children = ((($vnode)) + 52|0);
 $3 = load4($children);
 $__end_$i = ((($vnode)) + 56|0);
 $4 = load4($__end_$i);
 $cmp$i21 = ($3|0)==($4|0);
 $5 = $4;
 $6 = $3;
 $7 = ((($oldVnode)) + 56|0);
 $8 = load4($7);
 $9 = $8;
 $__begin_$i40 = ((($oldVnode)) + 52|0);
 $10 = load4($__begin_$i40);
 $cmp$i42 = ($10|0)==($8|0);
 if ($cmp$i21) {
  if (!($cmp$i42)) {
   $137 = $10;
   $sub$ptr$sub$i44 = (($9) - ($137))|0;
   $sub$ptr$div$i45 = $sub$ptr$sub$i44 >> 2;
   $sub28 = (($sub$ptr$div$i45) + -1)|0;
   $138 = load4($10);
   $elm$i92 = ((($138)) + 48|0);
   $139 = load4($elm$i92);
   $call1$i4993 = _emscripten_asm_const_ii(12, ($139|0))|0;
   $cmp$i5194 = ($sub28|0)==(0);
   if ($cmp$i5194) {
    STACKTOP = sp;return;
   } else {
    $inc$i5095 = 1;
   }
   while(1) {
    $$pre85 = load4($__begin_$i40);
    $arrayidx$i$i48 = (($$pre85) + ($inc$i5095<<2)|0);
    $140 = load4($arrayidx$i$i48);
    $elm$i = ((($140)) + 48|0);
    $141 = load4($elm$i);
    $call1$i49 = _emscripten_asm_const_ii(12, ($141|0))|0;
    $inc$i50 = (($inc$i5095) + 1)|0;
    $cmp$i51 = ($inc$i50>>>0)>($sub28>>>0);
    if ($cmp$i51) {
     break;
    } else {
     $inc$i5095 = $inc$i50;
    }
   }
   STACKTOP = sp;return;
  }
  $text30 = ((($oldVnode)) + 24|0);
  $__size_$i$i$i54 = ((($text30)) + 11|0);
  $142 = load1($__size_$i$i$i54);
  $tobool$i$i$i55 = ($142<<24>>24)<(0);
  if ($tobool$i$i$i55) {
   $__size_$i3$i$i56 = ((($oldVnode)) + 28|0);
   $143 = load4($__size_$i3$i$i56);
   $cond$i$i60 = $143;
  } else {
   $conv$i$i$i58 = $142&255;
   $cond$i$i60 = $conv$i$i$i58;
  }
  $cmp$i61 = ($cond$i$i60|0)==(0);
  if ($cmp$i61) {
   STACKTOP = sp;return;
  }
  $144 = load4($elm1);
  $call34 = _emscripten_asm_const_ii(13, ($144|0))|0;
  STACKTOP = sp;return;
 }
 if ($cmp$i42) {
  $text12 = ((($oldVnode)) + 24|0);
  $__size_$i$i$i29 = ((($text12)) + 11|0);
  $127 = load1($__size_$i$i$i29);
  $tobool$i$i$i30 = ($127<<24>>24)<(0);
  if ($tobool$i$i$i30) {
   $__size_$i3$i$i31 = ((($oldVnode)) + 28|0);
   $128 = load4($__size_$i3$i$i31);
   $cond$i$i35 = $128;
  } else {
   $conv$i$i$i33 = $127&255;
   $cond$i$i35 = $conv$i$i$i33;
  }
  $cmp$i36 = ($cond$i$i35|0)==(0);
  if ($cmp$i36) {
   $132 = $5;$133 = $6;$135 = $3;
  } else {
   $129 = load4($elm1);
   $call16 = _emscripten_asm_const_ii(13, ($129|0))|0;
   $$pre = load4($__end_$i);
   $$pre83 = load4($children);
   $130 = $$pre83;
   $132 = $$pre;$133 = $$pre83;$135 = $130;
  }
  $131 = load4($elm1);
  $sub$ptr$sub$i = (($132) - ($133))|0;
  $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
  $sub = (($sub$ptr$div$i) + -1)|0;
  $134 = load4($135);
  $call1$i96 = (__Z9createElmP5VNode($134)|0);
  $call2$i97 = _emscripten_asm_const_iiii(11, ($131|0), ($call1$i96|0), 0)|0;
  $cmp$i3998 = ($sub|0)==(0);
  if ($cmp$i3998) {
   STACKTOP = sp;return;
  } else {
   $inc$i99 = 1;
  }
  while(1) {
   $$pre84 = load4($children);
   $arrayidx$i$i = (($$pre84) + ($inc$i99<<2)|0);
   $136 = load4($arrayidx$i$i);
   $call1$i = (__Z9createElmP5VNode($136)|0);
   $call2$i = _emscripten_asm_const_iiii(11, ($131|0), ($call1$i|0), 0)|0;
   $inc$i = (($inc$i99) + 1)|0;
   $cmp$i39 = ($inc$i>>>0)>($sub>>>0);
   if ($cmp$i39) {
    break;
   } else {
    $inc$i99 = $inc$i;
   }
  }
  STACKTOP = sp;return;
 }
 $11 = $10;
 $12 = load4($elm1);
 $sub$ptr$sub$i$i = (($9) - ($11))|0;
 $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 2;
 $sub$i = (($sub$ptr$div$i$i) + -1)|0;
 $sub$ptr$sub$i108$i = (($5) - ($6))|0;
 $sub$ptr$div$i109$i = $sub$ptr$sub$i108$i >> 2;
 $sub2$i = (($sub$ptr$div$i109$i) + -1)|0;
 $cmp207$i = ($sub$ptr$sub$i$i|0)<(4);
 $cmp7208$i = ($sub$ptr$sub$i108$i|0)<(4);
 $or$cond209$i = $cmp207$i | $cmp7208$i;
 L61: do {
  if ($or$cond209$i) {
   $112 = $6;$113 = $3;$116 = $3;$119 = $3;$126 = 0;$cmp$lcssa$i = $cmp207$i;$cmp7$lcssa$i = $cmp7208$i;$newEndIdx$0$lcssa$i = $sub2$i;$newStartIdx$0$lcssa$i = 0;$oldEndIdx$0$lcssa$i = $sub$i;$oldKeyToIdx$0$lcssa$i = 0;$oldStartIdx$0$lcssa$i = 0;
  } else {
   $arrayidx$i113$i = (($3) + ($sub2$i<<2)|0);
   $13 = load4($arrayidx$i113$i);
   $14 = load4($3);
   $arrayidx$i$i1 = (($10) + ($sub$i<<2)|0);
   $15 = load4($arrayidx$i$i1);
   $16 = load4($10);
   $second$i$i10$i$i = ((($ref$tmp$i$i)) + 12|0);
   $__size_$i$i$i$i$i$i18$i$i$i = ((($ref$tmp$i$i)) + 11|0);
   $__size_$i3$i$i$i$i$i20$i$i$i = ((($ref$tmp$i$i)) + 4|0);
   $152 = $3;$153 = $3;$154 = $3;$155 = $6;$156 = 0;$21 = $3;$23 = $3;$97 = $14;$newEndIdx$0212$i = $sub2$i;$newEndVnode$0217$i = $13;$newStartIdx$0210$i = 0;$newStartVnode$0215$i = $14;$oldEndIdx$0211$i = $sub$i;$oldEndVnode$0214$i = $15;$oldKeyToIdx$0218$i = 0;$oldStartIdx$0219$i = 0;$oldStartVnode$0213$i = $16;
   L63: while(1) {
    $cmp8$i2 = ($oldStartVnode$0213$i|0)==(0|0);
    L65: do {
     if ($cmp8$i2) {
      $inc$i3 = (($oldStartIdx$0219$i) + 1)|0;
      $17 = load4($__begin_$i40);
      $arrayidx$i115$i = (($17) + ($inc$i3<<2)|0);
      $18 = load4($arrayidx$i115$i);
      $157 = $152;$158 = $153;$159 = $154;$160 = $155;$161 = $21;$162 = $23;$163 = $97;$164 = $156;$newEndIdx$0$be$i = $newEndIdx$0212$i;$newEndVnode$0$be$i = $newEndVnode$0217$i;$newStartIdx$0$be$i = $newStartIdx$0210$i;$newStartVnode$0$be$i = $newStartVnode$0215$i;$oldEndIdx$0$be$i = $oldEndIdx$0211$i;$oldEndVnode$0$be$i = $oldEndVnode$0214$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0218$i;$oldStartIdx$0$be$i = $inc$i3;$oldStartVnode$0$be$i = $18;
     } else {
      $cmp10$i = ($oldEndVnode$0214$i|0)==(0|0);
      if ($cmp10$i) {
       $dec$i = (($oldEndIdx$0211$i) + -1)|0;
       $19 = load4($__begin_$i40);
       $arrayidx$i117$i = (($19) + ($dec$i<<2)|0);
       $20 = load4($arrayidx$i117$i);
       $157 = $152;$158 = $153;$159 = $154;$160 = $155;$161 = $21;$162 = $23;$163 = $97;$164 = $156;$newEndIdx$0$be$i = $newEndIdx$0212$i;$newEndVnode$0$be$i = $newEndVnode$0217$i;$newStartIdx$0$be$i = $newStartIdx$0210$i;$newStartVnode$0$be$i = $newStartVnode$0215$i;$oldEndIdx$0$be$i = $dec$i;$oldEndVnode$0$be$i = $20;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0218$i;$oldStartIdx$0$be$i = $oldStartIdx$0219$i;$oldStartVnode$0$be$i = $oldStartVnode$0213$i;
       break;
      }
      $cmp14$i = ($newStartVnode$0215$i|0)==(0|0);
      if ($cmp14$i) {
       $inc16$i = (($newStartIdx$0210$i) + 1)|0;
       $arrayidx$i119$i = (($21) + ($inc16$i<<2)|0);
       $22 = load4($arrayidx$i119$i);
       $157 = $152;$158 = $153;$159 = $154;$160 = $155;$161 = $21;$162 = $21;$163 = $22;$164 = $156;$newEndIdx$0$be$i = $newEndIdx$0212$i;$newEndVnode$0$be$i = $newEndVnode$0217$i;$newStartIdx$0$be$i = $inc16$i;$newStartVnode$0$be$i = $22;$oldEndIdx$0$be$i = $oldEndIdx$0211$i;$oldEndVnode$0$be$i = $oldEndVnode$0214$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0218$i;$oldStartIdx$0$be$i = $oldStartIdx$0219$i;$oldStartVnode$0$be$i = $oldStartVnode$0213$i;
       break;
      }
      $cmp19$i = ($newEndVnode$0217$i|0)==(0|0);
      if ($cmp19$i) {
       $dec21$i = (($newEndIdx$0212$i) + -1)|0;
       $arrayidx$i121$i = (($23) + ($dec21$i<<2)|0);
       $24 = load4($arrayidx$i121$i);
       $157 = $152;$158 = $153;$159 = $154;$160 = $155;$161 = $21;$162 = $23;$163 = $97;$164 = $156;$newEndIdx$0$be$i = $dec21$i;$newEndVnode$0$be$i = $24;$newStartIdx$0$be$i = $newStartIdx$0210$i;$newStartVnode$0$be$i = $newStartVnode$0215$i;$oldEndIdx$0$be$i = $oldEndIdx$0211$i;$oldEndVnode$0$be$i = $oldEndVnode$0214$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0218$i;$oldStartIdx$0$be$i = $oldStartIdx$0219$i;$oldStartVnode$0$be$i = $oldStartVnode$0213$i;
       break;
      }
      $call24$i = (__Z9sameVNodePK5VNodeS1_($oldStartVnode$0213$i,$newStartVnode$0215$i)|0);
      if ($call24$i) {
       __Z10patchVNodeP5VNodeS0_($oldStartVnode$0213$i,$newStartVnode$0215$i);
       $inc26$i = (($oldStartIdx$0219$i) + 1)|0;
       $25 = load4($__begin_$i40);
       $arrayidx$i123$i = (($25) + ($inc26$i<<2)|0);
       $26 = load4($arrayidx$i123$i);
       $inc28$i = (($newStartIdx$0210$i) + 1)|0;
       $27 = load4($children);
       $arrayidx$i125$i = (($27) + ($inc28$i<<2)|0);
       $28 = load4($arrayidx$i125$i);
       $29 = $27;
       $157 = $27;$158 = $27;$159 = $27;$160 = $29;$161 = $27;$162 = $27;$163 = $28;$164 = $156;$newEndIdx$0$be$i = $newEndIdx$0212$i;$newEndVnode$0$be$i = $newEndVnode$0217$i;$newStartIdx$0$be$i = $inc28$i;$newStartVnode$0$be$i = $28;$oldEndIdx$0$be$i = $oldEndIdx$0211$i;$oldEndVnode$0$be$i = $oldEndVnode$0214$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0218$i;$oldStartIdx$0$be$i = $inc26$i;$oldStartVnode$0$be$i = $26;
       break;
      }
      $call31$i = (__Z9sameVNodePK5VNodeS1_($oldEndVnode$0214$i,$newEndVnode$0217$i)|0);
      if ($call31$i) {
       __Z10patchVNodeP5VNodeS0_($oldEndVnode$0214$i,$newEndVnode$0217$i);
       $dec33$i = (($oldEndIdx$0211$i) + -1)|0;
       $30 = load4($__begin_$i40);
       $arrayidx$i136$i = (($30) + ($dec33$i<<2)|0);
       $31 = load4($arrayidx$i136$i);
       $dec35$i = (($newEndIdx$0212$i) + -1)|0;
       $32 = load4($children);
       $arrayidx$i138$i = (($32) + ($dec35$i<<2)|0);
       $33 = load4($arrayidx$i138$i);
       $34 = $32;
       $157 = $32;$158 = $32;$159 = $32;$160 = $34;$161 = $32;$162 = $32;$163 = $97;$164 = $156;$newEndIdx$0$be$i = $dec35$i;$newEndVnode$0$be$i = $33;$newStartIdx$0$be$i = $newStartIdx$0210$i;$newStartVnode$0$be$i = $newStartVnode$0215$i;$oldEndIdx$0$be$i = $dec33$i;$oldEndVnode$0$be$i = $31;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0218$i;$oldStartIdx$0$be$i = $oldStartIdx$0219$i;$oldStartVnode$0$be$i = $oldStartVnode$0213$i;
       break;
      }
      $call38$i = (__Z9sameVNodePK5VNodeS1_($oldStartVnode$0213$i,$newEndVnode$0217$i)|0);
      if ($call38$i) {
       __Z10patchVNodeP5VNodeS0_($oldStartVnode$0213$i,$newEndVnode$0217$i);
       $elm$i5 = ((($oldStartVnode$0213$i)) + 48|0);
       $35 = load4($elm$i5);
       $elm40$i = ((($oldEndVnode$0214$i)) + 48|0);
       $36 = load4($elm40$i);
       $call41$i = _emscripten_asm_const_iiii(9, ($12|0), ($35|0), ($36|0))|0;
       $inc42$i = (($oldStartIdx$0219$i) + 1)|0;
       $37 = load4($__begin_$i40);
       $arrayidx$i151$i = (($37) + ($inc42$i<<2)|0);
       $38 = load4($arrayidx$i151$i);
       $dec44$i = (($newEndIdx$0212$i) + -1)|0;
       $39 = load4($children);
       $arrayidx$i153$i = (($39) + ($dec44$i<<2)|0);
       $40 = load4($arrayidx$i153$i);
       $41 = $39;
       $157 = $39;$158 = $39;$159 = $39;$160 = $41;$161 = $39;$162 = $39;$163 = $97;$164 = $156;$newEndIdx$0$be$i = $dec44$i;$newEndVnode$0$be$i = $40;$newStartIdx$0$be$i = $newStartIdx$0210$i;$newStartVnode$0$be$i = $newStartVnode$0215$i;$oldEndIdx$0$be$i = $oldEndIdx$0211$i;$oldEndVnode$0$be$i = $oldEndVnode$0214$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0218$i;$oldStartIdx$0$be$i = $inc42$i;$oldStartVnode$0$be$i = $38;
       break;
      }
      $call47$i = (__Z9sameVNodePK5VNodeS1_($oldEndVnode$0214$i,$newStartVnode$0215$i)|0);
      if ($call47$i) {
       __Z10patchVNodeP5VNodeS0_($oldEndVnode$0214$i,$newStartVnode$0215$i);
       $elm49$i = ((($oldEndVnode$0214$i)) + 48|0);
       $42 = load4($elm49$i);
       $elm50$i = ((($oldStartVnode$0213$i)) + 48|0);
       $43 = load4($elm50$i);
       $call51$i = _emscripten_asm_const_iiii(10, ($12|0), ($42|0), ($43|0))|0;
       $dec52$i = (($oldEndIdx$0211$i) + -1)|0;
       $44 = load4($__begin_$i40);
       $arrayidx$i157$i = (($44) + ($dec52$i<<2)|0);
       $45 = load4($arrayidx$i157$i);
       $inc54$i = (($newStartIdx$0210$i) + 1)|0;
       $46 = load4($children);
       $arrayidx$i159$i = (($46) + ($inc54$i<<2)|0);
       $47 = load4($arrayidx$i159$i);
       $48 = $46;
       $157 = $46;$158 = $46;$159 = $46;$160 = $48;$161 = $46;$162 = $46;$163 = $47;$164 = $156;$newEndIdx$0$be$i = $newEndIdx$0212$i;$newEndVnode$0$be$i = $newEndVnode$0217$i;$newStartIdx$0$be$i = $inc54$i;$newStartVnode$0$be$i = $47;$oldEndIdx$0$be$i = $dec52$i;$oldEndVnode$0$be$i = $45;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0218$i;$oldStartIdx$0$be$i = $oldStartIdx$0219$i;$oldStartVnode$0$be$i = $oldStartVnode$0213$i;
       break;
      }
      $tobool$i = ($oldKeyToIdx$0218$i|0)==(0|0);
      if ($tobool$i) {
       $call$i1$i = (__Znwj(12)|0);
       $__left_$i$i$i$i$i$i$i = ((($call$i1$i)) + 4|0);
       store4($__left_$i$i$i$i$i$i$i,0);
       $__first_$i$i$i$i$i$i = ((($call$i1$i)) + 8|0);
       store4($__first_$i$i$i$i$i$i,0);
       store4($call$i1$i,$__left_$i$i$i$i$i$i$i);
       $cmp17$i$i = ($oldStartIdx$0219$i|0)>($oldEndIdx$0211$i|0);
       if ($cmp17$i$i) {
        $165 = $call$i1$i;$oldKeyToIdx$1$i = $call$i1$i;
       } else {
        $49 = $__left_$i$i$i$i$i$i$i;
        $storemerge18$i$i = $oldStartIdx$0219$i;
        while(1) {
         $50 = load4($__begin_$i40);
         $arrayidx$i$i2$i = (($50) + ($storemerge18$i$i<<2)|0);
         $51 = load4($arrayidx$i$i2$i);
         $key$i$i = ((($51)) + 12|0);
         $__size_$i$i$i$i$i = ((($key$i$i)) + 11|0);
         $52 = load1($__size_$i$i$i$i$i);
         $tobool$i$i$i$i$i = ($52<<24>>24)<(0);
         if ($tobool$i$i$i$i$i) {
          $__size_$i3$i$i$i$i = ((($51)) + 16|0);
          $53 = load4($__size_$i3$i$i$i$i);
          $cond$i$i$i6$i = $53;
         } else {
          $conv$i$i$i$i$i = $52&255;
          $cond$i$i$i6$i = $conv$i$i$i$i$i;
         }
         $cmp$i$i7$i = ($cond$i$i$i6$i|0)==(0);
         if (!($cmp$i$i7$i)) {
          __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($ref$tmp$i$i,$key$i$i);
          store4($second$i$i10$i$i,$storemerge18$i$i);
          $54 = load4($__left_$i$i$i$i$i$i$i);
          $cmp$i1$i$i = ($54|0)==(0|0);
          do {
           if ($cmp$i1$i$i) {
            store4($__parent$i$i$i$i$i$i$i$sroa$0,$49);
            $__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$ = $49;$retval$0$i$i$i = $__left_$i$i$i$i$i$i$i;
           } else {
            $55 = load1($__size_$i$i$i$i$i$i18$i$i$i);
            $tobool$i$i$i$i$i$i19$i$i$i = ($55<<24>>24)<(0);
            $56 = load4($__size_$i3$i$i$i$i$i20$i$i$i);
            $conv$i$i$i$i$i$i21$i$i$i = $55&255;
            $cond$i$i$i$i$i22$i$i$i = $tobool$i$i$i$i$i$i19$i$i$i ? $56 : $conv$i$i$i$i$i$i21$i$i$i;
            $57 = load4($ref$tmp$i$i);
            $cond$i$i22$i$i$i$i$i$i$i = $tobool$i$i$i$i$i$i19$i$i$i ? $57 : $ref$tmp$i$i;
            $__nd$0$i$i$i = $54;
            L103: while(1) {
             $__value_$i$i$i = ((($__nd$0$i$i$i)) + 16|0);
             $__size_$i$i5$i$i$i$i24$i$i$i = ((($__value_$i$i$i)) + 11|0);
             $58 = load1($__size_$i$i5$i$i$i$i24$i$i$i);
             $tobool$i$i6$i$i$i$i25$i$i$i = ($58<<24>>24)<(0);
             $__size_$i3$i7$i$i$i$i26$i$i$i = ((($__nd$0$i$i$i)) + 20|0);
             $59 = load4($__size_$i3$i7$i$i$i$i26$i$i$i);
             $conv$i$i9$i$i$i$i27$i$i$i = $58&255;
             $cond$i11$i$i$i$i28$i$i$i = $tobool$i$i6$i$i$i$i25$i$i$i ? $59 : $conv$i$i9$i$i$i$i27$i$i$i;
             $cmp$i$i$i$i$i$i$i29$i$i$i = ($cond$i11$i$i$i$i28$i$i$i>>>0)<($cond$i$i$i$i$i22$i$i$i>>>0);
             $$sroa$speculated$i$i$i$i30$i$i$i = $cmp$i$i$i$i$i$i$i29$i$i$i ? $cond$i11$i$i$i$i28$i$i$i : $cond$i$i$i$i$i22$i$i$i;
             $cmp$i$i$i$i$i31$i$i$i = ($$sroa$speculated$i$i$i$i30$i$i$i|0)==(0);
             do {
              if ($cmp$i$i$i$i$i31$i$i$i) {
               label = 37;
              } else {
               $60 = load4($__value_$i$i$i);
               $cond$i$i22$i$i$i$i37$i$i$i = $tobool$i$i6$i$i$i$i25$i$i$i ? $60 : $__value_$i$i$i;
               $call$i$i$i$i$i38$i$i$i = (_memcmp($cond$i$i22$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i37$i$i$i,$$sroa$speculated$i$i$i$i30$i$i$i)|0);
               $cmp$i$i$i$i39$i$i$i = ($call$i$i$i$i$i38$i$i$i|0)==(0);
               if ($cmp$i$i$i$i39$i$i$i) {
                label = 37;
                break;
               }
               $cmp$i$i$i46$i$i$i = ($call$i$i$i$i$i38$i$i$i|0)<(0);
               if ($cmp$i$i$i46$i$i$i) {
                label = 39;
               } else {
                label = 41;
               }
              }
             } while(0);
             if ((label|0) == 37) {
              label = 0;
              $cmp8$i$i$i$i41$i$i$i = ($cond$i$i$i$i$i22$i$i$i>>>0)<($cond$i11$i$i$i$i28$i$i$i>>>0);
              if ($cmp8$i$i$i$i41$i$i$i) {
               label = 39;
              } else {
               label = 41;
              }
             }
             if ((label|0) == 39) {
              label = 0;
              $61 = load4($__nd$0$i$i$i);
              $cmp5$i$i$i = ($61|0)==(0|0);
              if ($cmp5$i$i$i) {
               label = 40;
               break;
              } else {
               $$sink$i$i$i = $61;
              }
             }
             else if ((label|0) == 41) {
              label = 0;
              $cmp$i$i$i$i$i$i$i$i$i$i = ($cond$i$i$i$i$i22$i$i$i>>>0)<($cond$i11$i$i$i$i28$i$i$i>>>0);
              $$sroa$speculated$i$i$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i$i$i ? $cond$i$i$i$i$i22$i$i$i : $cond$i11$i$i$i$i28$i$i$i;
              $cmp$i$i$i$i$i$i2$i$i = ($$sroa$speculated$i$i$i$i$i$i$i|0)==(0);
              do {
               if ($cmp$i$i$i$i$i$i2$i$i) {
                label = 43;
               } else {
                $63 = load4($__value_$i$i$i);
                $cond$i$i$i$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i25$i$i$i ? $63 : $__value_$i$i$i;
                $call$i$i$i$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i$i$i)|0);
                $cmp$i$i$i$i$i3$i$i = ($call$i$i$i$i$i$i$i$i|0)==(0);
                if ($cmp$i$i$i$i$i3$i$i) {
                 label = 43;
                 break;
                }
                $cmp$i$i$i$i$i$i = ($call$i$i$i$i$i$i$i$i|0)<(0);
                if (!($cmp$i$i$i$i$i$i)) {
                 label = 48;
                 break L103;
                }
               }
              } while(0);
              if ((label|0) == 43) {
               label = 0;
               if (!($cmp$i$i$i$i$i$i$i29$i$i$i)) {
                label = 48;
                break;
               }
              }
              $64 = ((($__nd$0$i$i$i)) + 4|0);
              $65 = load4($64);
              $cmp14$i$i$i = ($65|0)==(0|0);
              if ($cmp14$i$i$i) {
               label = 47;
               break;
              } else {
               $$sink$i$i$i = $65;
              }
             }
             $__nd$0$i$i$i = $$sink$i$i$i;
            }
            if ((label|0) == 40) {
             label = 0;
             $62 = $__nd$0$i$i$i;
             store4($__parent$i$i$i$i$i$i$i$sroa$0,$62);
             $__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$ = $62;$retval$0$i$i$i = $__nd$0$i$i$i;
             break;
            }
            else if ((label|0) == 47) {
             label = 0;
             $66 = $__nd$0$i$i$i;
             store4($__parent$i$i$i$i$i$i$i$sroa$0,$66);
             $__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$ = $66;$retval$0$i$i$i = $64;
             break;
            }
            else if ((label|0) == 48) {
             label = 0;
             $67 = $__nd$0$i$i$i;
             store4($__parent$i$i$i$i$i$i$i$sroa$0,$67);
             $__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$ = $67;$retval$0$i$i$i = $__parent$i$i$i$i$i$i$i$sroa$0;
             break;
            }
           }
          } while(0);
          $68 = load4($retval$0$i$i$i);
          $cmp$i$i$i$i$i$i$i = ($68|0)==(0|0);
          if ($cmp$i$i$i$i$i$i$i) {
           $call$i$i$i$i$i$i$i$i$i7$i$i = (__Znwj(32)|0);
           $__cc$i$i$i$i$i$i$i$i$i = ((($call$i$i$i$i$i$i$i$i$i7$i$i)) + 16|0);
           ; store8($__cc$i$i$i$i$i$i$i$i$i,load8($ref$tmp$i$i,4),4); store4($__cc$i$i$i$i$i$i$i$i$i+8 | 0,load4($ref$tmp$i$i+8 | 0,4),4);
           ; store8($ref$tmp$i$i,i64_const(0,0),4); store4($ref$tmp$i$i+8|0,0,4);
           $second$i$i$i$i$i$i$i$i$i$i$i$i = ((($call$i$i$i$i$i$i$i$i$i7$i$i)) + 28|0);
           $69 = load4($second$i$i10$i$i);
           store4($second$i$i$i$i$i$i$i$i$i$i$i$i,$69);
           store4($call$i$i$i$i$i$i$i$i$i7$i$i,0);
           $__right_$i$i$i$i$i$i$i$i = ((($call$i$i$i$i$i$i$i$i$i7$i$i)) + 4|0);
           store4($__right_$i$i$i$i$i$i$i$i,0);
           $__parent_$i$i$i$i$i$i$i$i = ((($call$i$i$i$i$i$i$i$i$i7$i$i)) + 8|0);
           store4($__parent_$i$i$i$i$i$i$i$i,$__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$);
           store4($retval$0$i$i$i,$call$i$i$i$i$i$i$i$i$i7$i$i);
           $70 = load4($call$i1$i);
           $71 = load4($70);
           $cmp$i$i$i$i$i$i$i$i = ($71|0)==(0|0);
           if ($cmp$i$i$i$i$i$i$i$i) {
            $74 = $call$i$i$i$i$i$i$i$i$i7$i$i;
           } else {
            $72 = $71;
            store4($call$i1$i,$72);
            $$pre$i$i$i$i$i$i$i$i = load4($retval$0$i$i$i);
            $74 = $$pre$i$i$i$i$i$i$i$i;
           }
           $73 = load4($__left_$i$i$i$i$i$i$i);
           __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($73,$74);
           $75 = load4($__first_$i$i$i$i$i$i);
           $inc$i$i$i$i$i$i$i$i = (($75) + 1)|0;
           store4($__first_$i$i$i$i$i$i,$inc$i$i$i$i$i$i$i$i);
          }
          __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp$i$i);
         }
         $inc$i10$i = (($storemerge18$i$i) + 1)|0;
         $cmp$i11$i = ($storemerge18$i$i|0)<($oldEndIdx$0211$i|0);
         if ($cmp$i11$i) {
          $storemerge18$i$i = $inc$i10$i;
         } else {
          $165 = $call$i1$i;$oldKeyToIdx$1$i = $call$i1$i;
          break;
         }
        }
       }
      } else {
       $165 = $156;$oldKeyToIdx$1$i = $oldKeyToIdx$0218$i;
      }
      $key$i = ((($newStartVnode$0215$i)) + 12|0);
      $__first_$i$i$i$i$i = ((($oldKeyToIdx$1$i)) + 4|0);
      $76 = load4($__first_$i$i$i$i$i);
      $cmp47$i$i = ($76|0)==(0|0);
      L133: do {
       if (!($cmp47$i$i)) {
        $__size_$i$i$i$i$i$i10$i$i = ((($key$i)) + 11|0);
        $77 = load1($__size_$i$i$i$i$i$i10$i$i);
        $tobool$i$i$i$i$i$i11$i$i = ($77<<24>>24)<(0);
        $__size_$i3$i$i$i$i$i12$i$i = ((($newStartVnode$0215$i)) + 16|0);
        $78 = load4($__size_$i3$i$i$i$i$i12$i$i);
        $conv$i$i$i$i$i$i13$i$i = $77&255;
        $cond$i$i$i$i$i14$i$i = $tobool$i$i$i$i$i$i11$i$i ? $78 : $conv$i$i$i$i$i$i13$i$i;
        $79 = load4($key$i);
        $cond$i$i22$i$i$i$i$i$i = $tobool$i$i$i$i$i$i11$i$i ? $79 : $key$i;
        $80 = $76;
        L135: while(1) {
         $__value_$i$i = ((($80)) + 16|0);
         $__size_$i$i5$i$i$i$i16$i$i = ((($__value_$i$i)) + 11|0);
         $81 = load1($__size_$i$i5$i$i$i$i16$i$i);
         $tobool$i$i6$i$i$i$i17$i$i = ($81<<24>>24)<(0);
         $__size_$i3$i7$i$i$i$i18$i$i = ((($80)) + 20|0);
         $82 = load4($__size_$i3$i7$i$i$i$i18$i$i);
         $conv$i$i9$i$i$i$i19$i$i = $81&255;
         $cond$i11$i$i$i$i20$i$i = $tobool$i$i6$i$i$i$i17$i$i ? $82 : $conv$i$i9$i$i$i$i19$i$i;
         $cmp$i$i$i$i$i$i$i21$i$i = ($cond$i11$i$i$i$i20$i$i>>>0)<($cond$i$i$i$i$i14$i$i>>>0);
         $$sroa$speculated$i$i$i$i22$i$i = $cmp$i$i$i$i$i$i$i21$i$i ? $cond$i11$i$i$i$i20$i$i : $cond$i$i$i$i$i14$i$i;
         $cmp$i$i$i$i$i23$i$i = ($$sroa$speculated$i$i$i$i22$i$i|0)==(0);
         do {
          if ($cmp$i$i$i$i$i23$i$i) {
           label = 60;
          } else {
           $83 = load4($__value_$i$i);
           $cond$i$i22$i$i$i$i29$i$i = $tobool$i$i6$i$i$i$i17$i$i ? $83 : $__value_$i$i;
           $call$i$i$i$i$i30$i$i = (_memcmp($cond$i$i22$i$i$i$i$i$i,$cond$i$i22$i$i$i$i29$i$i,$$sroa$speculated$i$i$i$i22$i$i)|0);
           $cmp$i$i$i$i31$i$i = ($call$i$i$i$i$i30$i$i|0)==(0);
           if ($cmp$i$i$i$i31$i$i) {
            label = 60;
            break;
           }
           $cmp$i$i$i38$i$i = ($call$i$i$i$i$i30$i$i|0)<(0);
           if ($cmp$i$i$i38$i$i) {
            label = 62;
           } else {
            label = 63;
           }
          }
         } while(0);
         if ((label|0) == 60) {
          label = 0;
          $cmp8$i$i$i$i33$i$i = ($cond$i$i$i$i$i14$i$i>>>0)<($cond$i11$i$i$i$i20$i$i>>>0);
          if ($cmp8$i$i$i$i33$i$i) {
           label = 62;
          } else {
           label = 63;
          }
         }
         if ((label|0) == 62) {
          label = 0;
          $$sink$be$i$i = $80;
         }
         else if ((label|0) == 63) {
          label = 0;
          $cmp$i$i$i$i$i$i$i$i$i = ($cond$i$i$i$i$i14$i$i>>>0)<($cond$i11$i$i$i$i20$i$i>>>0);
          $$sroa$speculated$i$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i$i ? $cond$i$i$i$i$i14$i$i : $cond$i11$i$i$i$i20$i$i;
          $cmp$i$i$i$i$i$i13$i = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
          do {
           if ($cmp$i$i$i$i$i$i13$i) {
            label = 65;
           } else {
            $84 = load4($__value_$i$i);
            $cond$i$i$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i17$i$i ? $84 : $__value_$i$i;
            $call$i$i$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i$i)|0);
            $cmp$i$i$i$i$i14$i = ($call$i$i$i$i$i$i$i|0)==(0);
            if ($cmp$i$i$i$i$i14$i) {
             label = 65;
             break;
            }
            $cmp$i$i$i$i15$i = ($call$i$i$i$i$i$i$i|0)<(0);
            if (!($cmp$i$i$i$i15$i)) {
             break L135;
            }
           }
          } while(0);
          if ((label|0) == 65) {
           label = 0;
           if (!($cmp$i$i$i$i$i$i$i21$i$i)) {
            break;
           }
          }
          $85 = ((($80)) + 4|0);
          $$sink$be$i$i = $85;
         }
         $86 = load4($$sink$be$i$i);
         $cmp$i16$i = ($86|0)==(0|0);
         if ($cmp$i16$i) {
          break L133;
         } else {
          $80 = $86;
         }
        }
        $call$i$i$i = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiNS_4lessIS6_EENS4_INS_4pairIKS6_iEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($oldKeyToIdx$1$i,$__parent$i$i$i$i$i$i$i$sroa$0,$key$i)|0);
        $91 = load4($call$i$i$i);
        $cmp$i163$i = ($91|0)==(0|0);
        if ($cmp$i163$i) {
         label = 71;
         break L63;
        }
        $second$i$i = ((($91)) + 28|0);
        $92 = load4($second$i$i);
        $93 = load4($__begin_$i40);
        $arrayidx$i165$i = (($93) + ($92<<2)|0);
        $94 = load4($arrayidx$i165$i);
        $__size_$i$i$i$i = ((($94)) + 11|0);
        $95 = load1($__size_$i$i$i$i);
        $tobool$i$i$i$i = ($95<<24>>24)<(0);
        if ($tobool$i$i$i$i) {
         $__size_$i3$i$i$i = ((($94)) + 4|0);
         $96 = load4($__size_$i3$i$i$i);
         $cond$i$i$i9 = $96;
        } else {
         $conv$i$i$i$i = $95&255;
         $cond$i$i$i9 = $conv$i$i$i$i;
        }
        $__size_$i$i5$i$i = ((($97)) + 11|0);
        $98 = load1($__size_$i$i5$i$i);
        $tobool$i$i6$i$i = ($98<<24>>24)<(0);
        $__size_$i3$i7$i$i = ((($newStartVnode$0215$i)) + 4|0);
        $99 = load4($__size_$i3$i7$i$i);
        $conv$i$i9$i$i = $98&255;
        $cond$i11$i$i = $tobool$i$i6$i$i ? $99 : $conv$i$i9$i$i;
        if ($tobool$i$i$i$i) {
         $100 = load4($94);
         $cond$i$i$i$i = $100;
        } else {
         $cond$i$i$i$i = $94;
        }
        $cmp$i$i$i$i$i = ($cond$i11$i$i>>>0)<($cond$i$i$i9>>>0);
        $$sroa$speculated$i$i = $cmp$i$i$i$i$i ? $cond$i11$i$i : $cond$i$i$i9;
        $cmp$i$i$i = ($$sroa$speculated$i$i|0)==(0);
        if ($cmp$i$i$i) {
         label = 80;
        } else {
         $101 = load4($newStartVnode$0215$i);
         $cond$i$i22$i$i = $tobool$i$i6$i$i ? $101 : $newStartVnode$0215$i;
         $call$i$i166$i = (_memcmp($cond$i$i$i$i,$cond$i$i22$i$i,$$sroa$speculated$i$i)|0);
         $cmp$i167$i = ($call$i$i166$i|0)==(0);
         if ($cmp$i167$i) {
          label = 80;
         } else {
          label = 81;
         }
        }
        do {
         if ((label|0) == 80) {
          label = 0;
          $cmp8$i$i = ($cond$i$i$i9>>>0)>=($cond$i11$i$i>>>0);
          $cmp73$i = $cmp$i$i$i$i$i ^ 1;
          $or$cond187$i = $cmp8$i$i & $cmp73$i;
          if (!($or$cond187$i)) {
           label = 81;
           break;
          }
          __Z10patchVNodeP5VNodeS0_($94,$newStartVnode$0215$i);
          $call$i$i173$i = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiNS_4lessIS6_EENS4_INS_4pairIKS6_iEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($oldKeyToIdx$1$i,$__parent$i$i$i$i$i$i$i$sroa$0,$key$i)|0);
          $103 = load4($call$i$i173$i);
          $cmp$i174$i = ($103|0)==(0|0);
          if ($cmp$i174$i) {
           label = 83;
           break L63;
          }
          $second$i179$i = ((($103)) + 28|0);
          $104 = load4($second$i179$i);
          $105 = load4($__begin_$i40);
          $arrayidx$i183$i = (($105) + ($104<<2)|0);
          store4($arrayidx$i183$i,0);
          $elm82$i = ((($94)) + 48|0);
          $106 = load4($elm82$i);
          $elm83$i = ((($oldStartVnode$0213$i)) + 48|0);
          $107 = load4($elm83$i);
          $call84$i = _emscripten_asm_const_iiii(10, ($12|0), ($106|0), ($107|0))|0;
         }
        } while(0);
        if ((label|0) == 81) {
         label = 0;
         $call75$i = (__Z9createElmP5VNode($newStartVnode$0215$i)|0);
         $elm76$i = ((($oldStartVnode$0213$i)) + 48|0);
         $102 = load4($elm76$i);
         $call77$i = _emscripten_asm_const_iiii(10, ($12|0), ($call75$i|0), ($102|0))|0;
        }
        $inc86$i = (($newStartIdx$0210$i) + 1)|0;
        $108 = load4($children);
        $arrayidx$i185$i = (($108) + ($inc86$i<<2)|0);
        $109 = load4($arrayidx$i185$i);
        $110 = $108;
        $157 = $108;$158 = $108;$159 = $108;$160 = $110;$161 = $108;$162 = $108;$163 = $109;$164 = $165;$newEndIdx$0$be$i = $newEndIdx$0212$i;$newEndVnode$0$be$i = $newEndVnode$0217$i;$newStartIdx$0$be$i = $inc86$i;$newStartVnode$0$be$i = $109;$oldEndIdx$0$be$i = $oldEndIdx$0211$i;$oldEndVnode$0$be$i = $oldEndVnode$0214$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$1$i;$oldStartIdx$0$be$i = $oldStartIdx$0219$i;$oldStartVnode$0$be$i = $oldStartVnode$0213$i;
        break L65;
       }
      } while(0);
      $call62$i = (__Z9createElmP5VNode($newStartVnode$0215$i)|0);
      $elm63$i = ((($oldStartVnode$0213$i)) + 48|0);
      $87 = load4($elm63$i);
      $call64$i = _emscripten_asm_const_iiii(10, ($12|0), ($call62$i|0), ($87|0))|0;
      $inc65$i = (($newStartIdx$0210$i) + 1)|0;
      $88 = load4($children);
      $arrayidx$i162$i = (($88) + ($inc65$i<<2)|0);
      $89 = load4($arrayidx$i162$i);
      $90 = $88;
      $157 = $88;$158 = $88;$159 = $88;$160 = $90;$161 = $88;$162 = $88;$163 = $89;$164 = $165;$newEndIdx$0$be$i = $newEndIdx$0212$i;$newEndVnode$0$be$i = $newEndVnode$0217$i;$newStartIdx$0$be$i = $inc65$i;$newStartVnode$0$be$i = $89;$oldEndIdx$0$be$i = $oldEndIdx$0211$i;$oldEndVnode$0$be$i = $oldEndVnode$0214$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$1$i;$oldStartIdx$0$be$i = $oldStartIdx$0219$i;$oldStartVnode$0$be$i = $oldStartVnode$0213$i;
     }
    } while(0);
    $cmp$i4 = ($oldStartIdx$0$be$i|0)>($oldEndIdx$0$be$i|0);
    $cmp7$i = ($newStartIdx$0$be$i|0)>($newEndIdx$0$be$i|0);
    $or$cond$i = $cmp7$i | $cmp$i4;
    if ($or$cond$i) {
     $112 = $160;$113 = $159;$116 = $158;$119 = $157;$126 = $164;$cmp$lcssa$i = $cmp$i4;$cmp7$lcssa$i = $cmp7$i;$newEndIdx$0$lcssa$i = $newEndIdx$0$be$i;$newStartIdx$0$lcssa$i = $newStartIdx$0$be$i;$oldEndIdx$0$lcssa$i = $oldEndIdx$0$be$i;$oldKeyToIdx$0$lcssa$i = $oldKeyToIdx$0$be$i;$oldStartIdx$0$lcssa$i = $oldStartIdx$0$be$i;
     break L61;
    } else {
     $152 = $157;$153 = $158;$154 = $159;$155 = $160;$156 = $164;$21 = $161;$23 = $162;$97 = $163;$newEndIdx$0212$i = $newEndIdx$0$be$i;$newEndVnode$0217$i = $newEndVnode$0$be$i;$newStartIdx$0210$i = $newStartIdx$0$be$i;$newStartVnode$0215$i = $newStartVnode$0$be$i;$oldEndIdx$0211$i = $oldEndIdx$0$be$i;$oldEndVnode$0214$i = $oldEndVnode$0$be$i;$oldKeyToIdx$0218$i = $oldKeyToIdx$0$be$i;$oldStartIdx$0219$i = $oldStartIdx$0$be$i;$oldStartVnode$0213$i = $oldStartVnode$0$be$i;
    }
   }
   if ((label|0) == 71) {
    $exception$i$i = (___cxa_allocate_exception(8)|0);
    __ZNSt11logic_errorC2EPKc($exception$i$i);
    store4($exception$i$i,(2176));
    ___cxa_throw(($exception$i$i|0),(1432|0),(8|0));
    // unreachable;
   }
   else if ((label|0) == 83) {
    $exception$i175$i = (___cxa_allocate_exception(8)|0);
    __ZNSt11logic_errorC2EPKc($exception$i175$i);
    store4($exception$i175$i,(2176));
    ___cxa_throw(($exception$i175$i|0),(1432|0),(8|0));
    // unreachable;
   }
  }
 } while(0);
 do {
  if ($cmp$lcssa$i) {
   $add$i = (($newEndIdx$0$lcssa$i) + 1)|0;
   $111 = load4($__end_$i);
   $sub$ptr$sub$i170$i = (($111) - ($112))|0;
   $sub$ptr$div$i171$i = $sub$ptr$sub$i170$i >> 2;
   $sub100$i = (($sub$ptr$div$i171$i) + -1)|0;
   $cmp101$i = ($add$i>>>0)>($sub100$i>>>0);
   $cmp3$i126$i = ($newStartIdx$0$lcssa$i>>>0)>($newEndIdx$0$lcssa$i>>>0);
   if ($cmp101$i) {
    if ($cmp3$i126$i) {
     break;
    }
    $arrayidx$i$i130245$i = (($119) + ($newStartIdx$0$lcssa$i<<2)|0);
    $120 = load4($arrayidx$i$i130245$i);
    $call1$i131246$i = (__Z9createElmP5VNode($120)|0);
    $call2$i247$i = _emscripten_asm_const_iiii(11, ($12|0), ($call1$i131246$i|0), 0)|0;
    $inc$i132248$i = (($newStartIdx$0$lcssa$i) + 1)|0;
    $cmp$i133249$i = ($inc$i132248$i>>>0)>($newEndIdx$0$lcssa$i>>>0);
    if ($cmp$i133249$i) {
     break;
    } else {
     $inc$i132250$i = $inc$i132248$i;
    }
    while(1) {
     $$pre230$i = load4($children);
     $arrayidx$i$i130$i = (($$pre230$i) + ($inc$i132250$i<<2)|0);
     $121 = load4($arrayidx$i$i130$i);
     $call1$i131$i = (__Z9createElmP5VNode($121)|0);
     $call2$i$i = _emscripten_asm_const_iiii(11, ($12|0), ($call1$i131$i|0), 0)|0;
     $inc$i132$i = (($inc$i132250$i) + 1)|0;
     $cmp$i133$i = ($inc$i132$i>>>0)>($newEndIdx$0$lcssa$i>>>0);
     if ($cmp$i133$i) {
      break;
     } else {
      $inc$i132250$i = $inc$i132$i;
     }
    }
   } else {
    $arrayidx$i155$i = (($113) + ($add$i<<2)|0);
    $114 = load4($arrayidx$i155$i);
    $elm105$i = ((($114)) + 48|0);
    $115 = load4($elm105$i);
    if ($cmp3$i126$i) {
     break;
    }
    $arrayidx$i$i143251$i = (($116) + ($newStartIdx$0$lcssa$i<<2)|0);
    $117 = load4($arrayidx$i$i143251$i);
    $call1$i144252$i = (__Z9createElmP5VNode($117)|0);
    $call2$i145253$i = _emscripten_asm_const_iiii(11, ($12|0), ($call1$i144252$i|0), ($115|0))|0;
    $inc$i146254$i = (($newStartIdx$0$lcssa$i) + 1)|0;
    $cmp$i147255$i = ($inc$i146254$i>>>0)>($newEndIdx$0$lcssa$i>>>0);
    if ($cmp$i147255$i) {
     break;
    } else {
     $inc$i146256$i = $inc$i146254$i;
    }
    while(1) {
     $$pre$i = load4($children);
     $arrayidx$i$i143$i = (($$pre$i) + ($inc$i146256$i<<2)|0);
     $118 = load4($arrayidx$i$i143$i);
     $call1$i144$i = (__Z9createElmP5VNode($118)|0);
     $call2$i145$i = _emscripten_asm_const_iiii(11, ($12|0), ($call1$i144$i|0), ($115|0))|0;
     $inc$i146$i = (($inc$i146256$i) + 1)|0;
     $cmp$i147$i = ($inc$i146$i>>>0)>($newEndIdx$0$lcssa$i>>>0);
     if ($cmp$i147$i) {
      break;
     } else {
      $inc$i146256$i = $inc$i146$i;
     }
    }
   }
  } else {
   $cmp7$not$i = $cmp7$lcssa$i ^ 1;
   $cmp3$i$i = ($oldStartIdx$0$lcssa$i>>>0)>($oldEndIdx$0$lcssa$i>>>0);
   $or$cond188$i = $cmp3$i$i | $cmp7$not$i;
   if (!($or$cond188$i)) {
    $startIdx$addr$04$i$i = $oldStartIdx$0$lcssa$i;
    while(1) {
     $122 = load4($__begin_$i40);
     $arrayidx$i$i$i = (($122) + ($startIdx$addr$04$i$i<<2)|0);
     $123 = load4($arrayidx$i$i$i);
     $elm$i$i = ((($123)) + 48|0);
     $124 = load4($elm$i$i);
     $call1$i$i = _emscripten_asm_const_ii(12, ($124|0))|0;
     $inc$i$i = (($startIdx$addr$04$i$i) + 1)|0;
     $cmp$i$i10 = ($inc$i$i>>>0)>($oldEndIdx$0$lcssa$i>>>0);
     if ($cmp$i$i10) {
      break;
     } else {
      $startIdx$addr$04$i$i = $inc$i$i;
     }
    }
   }
  }
 } while(0);
 $isnull$i = ($oldKeyToIdx$0$lcssa$i|0)==(0|0);
 if ($isnull$i) {
  STACKTOP = sp;return;
 }
 $__first_$i$i$i$i$i$i$i = ((($oldKeyToIdx$0$lcssa$i)) + 4|0);
 $125 = load4($__first_$i$i$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($125);
 __ZdlPv($126);
 STACKTOP = sp;return;
}
function __Z8patchPtrjj($oldVnode,$vnode) {
 $oldVnode = $oldVnode|0;
 $vnode = $vnode|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $call$i = 0, $call1$i = 0, $call6$i = 0, $call8$i = 0, $elm$i = 0, $elm4$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $oldVnode;
 $1 = $vnode;
 $call$i = (__Z9sameVNodePK5VNodeS1_($0,$1)|0);
 if ($call$i) {
  __Z10patchVNodeP5VNodeS0_($0,$1);
  return;
 }
 $elm$i = ((($0)) + 48|0);
 $2 = load4($elm$i);
 $call1$i = _emscripten_asm_const_ii(15, ($2|0))|0;
 (__Z9createElmP5VNode($1)|0);
 $tobool$i = ($call1$i|0)==(0);
 if ($tobool$i) {
  return;
 }
 $elm4$i = ((($1)) + 48|0);
 $3 = load4($elm4$i);
 $4 = load4($elm$i);
 $call6$i = _emscripten_asm_const_iiii(9, ($call1$i|0), ($3|0), ($4|0))|0;
 $5 = load4($elm$i);
 $call8$i = _emscripten_asm_const_ii(12, ($5|0))|0;
 return;
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___cxa_begin_catch(($0|0))|0);
 __ZSt9terminatev();
 // unreachable;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($__nd) {
 $__nd = $__nd|0;
 var $0 = 0, $1 = 0, $2 = 0, $cmp = 0, $first$i$i$i = 0, $second$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__nd|0)==(0|0);
 if ($cmp) {
  return;
 } else {
  $0 = load4($__nd);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0);
  $1 = ((($__nd)) + 4|0);
  $2 = load4($1);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($2);
  $second$i$i$i = ((($__nd)) + 28|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($second$i$i$i);
  $first$i$i$i = ((($__nd)) + 16|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($first$i$i$i);
  __ZdlPv($__nd);
  return;
 }
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($__nd) {
 $__nd = $__nd|0;
 var $0 = 0, $1 = 0, $2 = 0, $cmp = 0, $first$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__nd|0)==(0|0);
 if ($cmp) {
  return;
 } else {
  $0 = load4($__nd);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0);
  $1 = ((($__nd)) + 4|0);
  $2 = load4($1);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($2);
  $first$i$i$i = ((($__nd)) + 16|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($first$i$i$i);
  __ZdlPv($__nd);
  return;
 }
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($this,$__p$0,$__k,$__args) {
 $this = $this|0;
 $__p$0 = $__p$0|0;
 $__k = $__k|0;
 $__args = $__args|0;
 var $$pre$i = 0, $$pre$i2 = 0, $$sroa$speculated$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i106$i = 0, $$sroa$speculated$i$i$i$i39$i = 0, $$sroa$speculated$i$i$i$i75$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i6 = 0, $__left_7$i = 0, $__parent = 0, $__parent_$i = 0, $__parent_$i$i$i$i = 0, $__parent_$i$i$i$i$i$i$i = 0, $__prior$sroa$0$0$i = 0, $__right_$i = 0, $__right_$i$i$i$i = 0, $__right_$i5 = 0, $__size_$i$i$i$i$i$i63$i = 0, $__size_$i$i$i$i$i$i94$i = 0, $__size_$i$i5$i$i$i$i$i = 0, $__size_$i$i5$i$i$i$i100$i = 0, $__size_$i$i5$i$i$i$i69$i = 0;
 var $__size_$i3$i$i$i$i$i65$i = 0, $__size_$i3$i$i$i$i$i96$i = 0, $__size_$i3$i7$i$i$i$i$i = 0, $__size_$i3$i7$i$i$i$i102$i = 0, $__size_$i3$i7$i$i$i$i71$i = 0, $__value_$i$i = 0, $__value_$i125$i = 0, $__value_$i61$i = 0, $__x$addr$0$i$i$i = 0, $__x$addr$0$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i$i = 0, $call$i$i$i$i = 0, $call$i$i$i$i$i$i = 0, $call$i$i$i$i$i114$i = 0, $call$i$i$i$i$i47$i = 0, $call$i$i$i$i$i83$i = 0, $call22$i = 0, $call52$i = 0, $cmp = 0;
 var $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i105$i = 0, $cmp$i$i$i$i$i$i$i38$i = 0, $cmp$i$i$i$i$i$i$i74$i = 0, $cmp$i$i$i$i$i107$i = 0, $cmp$i$i$i$i$i25$i = 0, $cmp$i$i$i$i$i40$i = 0, $cmp$i$i$i$i$i76$i = 0, $cmp$i$i$i$i115$i = 0, $cmp$i$i$i$i48$i = 0, $cmp$i$i$i$i84$i = 0, $cmp$i$i$i122$i = 0, $cmp$i$i$i126$i = 0;
 var $cmp$i$i$i55$i = 0, $cmp$i$i$i91$i = 0, $cmp$i130$i = 0, $cmp$i21$i = 0, $cmp$i4 = 0, $cmp$i4$i$i$i = 0, $cmp$i5$i$i$i$i$i$i = 0, $cmp8$i$i$i$i$i = 0, $cmp8$i$i$i$i117$i = 0, $cmp8$i$i$i$i86$i = 0, $cond$i$i$i$i$i$i$i = 0, $cond$i$i$i$i$i$i110$i = 0, $cond$i$i$i$i$i$i43$i = 0, $cond$i$i$i$i$i$i79$i = 0, $cond$i$i$i$i$i67$i = 0, $cond$i$i$i$i$i98$i = 0, $cond$i$i22$i$i$i$i$i = 0, $cond$i$i22$i$i$i$i113$i = 0, $cond$i$i22$i$i$i$i46$i = 0, $cond$i$i22$i$i$i$i82$i = 0;
 var $cond$i11$i$i$i$i$i = 0, $cond$i11$i$i$i$i104$i = 0, $cond$i11$i$i$i$i73$i = 0, $conv$i$i$i$i$i$i66$i = 0, $conv$i$i$i$i$i$i97$i = 0, $conv$i$i9$i$i$i$i$i = 0, $conv$i$i9$i$i$i$i103$i = 0, $conv$i$i9$i$i$i$i72$i = 0, $first$i$i$i$i$i = 0, $inc$i = 0, $retval$0$i$i$i = 0, $retval$0$i$i$i$i$i$i = 0, $retval$2$i = 0, $second$i$i$i$i$i = 0, $second3$i$i$i$i$i = 0, $tobool$i$i$i$i$i$i64$i = 0, $tobool$i$i$i$i$i$i95$i = 0, $tobool$i$i6$i$i$i$i$i = 0, $tobool$i$i6$i$i$i$i101$i = 0, $tobool$i$i6$i$i$i$i70$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $__parent = sp;
 $__first_$i$i$i$i$i = ((($this)) + 4|0);
 $cmp$i$i = ($__first_$i$i$i$i$i|0)==($__p$0|0);
 $0 = $__p$0;
 L1: do {
  if ($cmp$i$i) {
   label = 6;
  } else {
   $__value_$i61$i = ((($__p$0)) + 16|0);
   $__size_$i$i$i$i$i$i94$i = ((($__k)) + 11|0);
   $1 = load1($__size_$i$i$i$i$i$i94$i);
   $tobool$i$i$i$i$i$i95$i = ($1<<24>>24)<(0);
   $__size_$i3$i$i$i$i$i96$i = ((($__k)) + 4|0);
   $2 = load4($__size_$i3$i$i$i$i$i96$i);
   $conv$i$i$i$i$i$i97$i = $1&255;
   $cond$i$i$i$i$i98$i = $tobool$i$i$i$i$i$i95$i ? $2 : $conv$i$i$i$i$i$i97$i;
   $__size_$i$i5$i$i$i$i100$i = ((($__value_$i61$i)) + 11|0);
   $3 = load1($__size_$i$i5$i$i$i$i100$i);
   $tobool$i$i6$i$i$i$i101$i = ($3<<24>>24)<(0);
   $__size_$i3$i7$i$i$i$i102$i = ((($__p$0)) + 20|0);
   $4 = load4($__size_$i3$i7$i$i$i$i102$i);
   $conv$i$i9$i$i$i$i103$i = $3&255;
   $cond$i11$i$i$i$i104$i = $tobool$i$i6$i$i$i$i101$i ? $4 : $conv$i$i9$i$i$i$i103$i;
   $cmp$i$i$i$i$i$i$i105$i = ($cond$i11$i$i$i$i104$i>>>0)<($cond$i$i$i$i$i98$i>>>0);
   $$sroa$speculated$i$i$i$i106$i = $cmp$i$i$i$i$i$i$i105$i ? $cond$i11$i$i$i$i104$i : $cond$i$i$i$i$i98$i;
   $cmp$i$i$i$i$i107$i = ($$sroa$speculated$i$i$i$i106$i|0)==(0);
   if ($cmp$i$i$i$i$i107$i) {
    label = 4;
   } else {
    $5 = load4($__k);
    $cond$i$i$i$i$i$i110$i = $tobool$i$i$i$i$i$i95$i ? $5 : $__k;
    $6 = load4($__value_$i61$i);
    $cond$i$i22$i$i$i$i113$i = $tobool$i$i6$i$i$i$i101$i ? $6 : $__value_$i61$i;
    $call$i$i$i$i$i114$i = (_memcmp($cond$i$i$i$i$i$i110$i,$cond$i$i22$i$i$i$i113$i,$$sroa$speculated$i$i$i$i106$i)|0);
    $cmp$i$i$i$i115$i = ($call$i$i$i$i$i114$i|0)==(0);
    if ($cmp$i$i$i$i115$i) {
     label = 4;
    } else {
     $cmp$i$i$i122$i = ($call$i$i$i$i$i114$i|0)<(0);
     if ($cmp$i$i$i122$i) {
      label = 6;
      break;
     }
    }
   }
   if ((label|0) == 4) {
    $cmp8$i$i$i$i117$i = ($cond$i$i$i$i$i98$i>>>0)<($cond$i11$i$i$i$i104$i>>>0);
    if ($cmp8$i$i$i$i117$i) {
     label = 6;
     break;
    }
   }
   $cmp$i$i$i$i$i$i$i38$i = ($cond$i$i$i$i$i98$i>>>0)<($cond$i11$i$i$i$i104$i>>>0);
   $$sroa$speculated$i$i$i$i39$i = $cmp$i$i$i$i$i$i$i38$i ? $cond$i$i$i$i$i98$i : $cond$i11$i$i$i$i104$i;
   $cmp$i$i$i$i$i40$i = ($$sroa$speculated$i$i$i$i39$i|0)==(0);
   if ($cmp$i$i$i$i$i40$i) {
    label = 20;
   } else {
    $19 = load4($__value_$i61$i);
    $cond$i$i$i$i$i$i43$i = $tobool$i$i6$i$i$i$i101$i ? $19 : $__value_$i61$i;
    $20 = load4($__k);
    $cond$i$i22$i$i$i$i46$i = $tobool$i$i$i$i$i$i95$i ? $20 : $__k;
    $call$i$i$i$i$i47$i = (_memcmp($cond$i$i$i$i$i$i43$i,$cond$i$i22$i$i$i$i46$i,$$sroa$speculated$i$i$i$i39$i)|0);
    $cmp$i$i$i$i48$i = ($call$i$i$i$i$i47$i|0)==(0);
    if ($cmp$i$i$i$i48$i) {
     label = 20;
    } else {
     $cmp$i$i$i55$i = ($call$i$i$i$i$i47$i|0)<(0);
     if (!($cmp$i$i$i55$i)) {
      label = 34;
     }
    }
   }
   if ((label|0) == 20) {
    if (!($cmp$i$i$i$i$i$i$i105$i)) {
     label = 34;
    }
   }
   if ((label|0) == 34) {
    store4($__parent,$0);
    $retval$2$i = $__parent;
    break;
   }
   $21 = ((($__p$0)) + 4|0);
   $22 = load4($21);
   $cmp$i$i$i$i$i25$i = ($22|0)==(0|0);
   if ($cmp$i$i$i$i$i25$i) {
    $__x$addr$0$i$i$i$i$i$i = $__p$0;
    while(1) {
     $__parent_$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i)) + 8|0);
     $24 = load4($__parent_$i$i$i$i$i$i$i);
     $25 = load4($24);
     $cmp$i5$i$i$i$i$i$i = ($25|0)==($__x$addr$0$i$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $24;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $24;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i$i = $22;
    while(1) {
     $23 = load4($__x$addr$0$i$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i$i = ($23|0)==(0|0);
     if ($cmp$i$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i$i = $23;
     }
    }
   }
   $cmp$i21$i = ($retval$0$i$i$i$i$i$i|0)==($__first_$i$i$i$i$i|0);
   do {
    if (!($cmp$i21$i)) {
     $__value_$i$i = ((($retval$0$i$i$i$i$i$i)) + 16|0);
     $__size_$i$i5$i$i$i$i$i = ((($__value_$i$i)) + 11|0);
     $26 = load1($__size_$i$i5$i$i$i$i$i);
     $tobool$i$i6$i$i$i$i$i = ($26<<24>>24)<(0);
     $__size_$i3$i7$i$i$i$i$i = ((($retval$0$i$i$i$i$i$i)) + 20|0);
     $27 = load4($__size_$i3$i7$i$i$i$i$i);
     $conv$i$i9$i$i$i$i$i = $26&255;
     $cond$i11$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i ? $27 : $conv$i$i9$i$i$i$i$i;
     $cmp$i$i$i$i$i$i$i$i = ($cond$i11$i$i$i$i$i>>>0)<($cond$i$i$i$i$i98$i>>>0);
     $$sroa$speculated$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i ? $cond$i11$i$i$i$i$i : $cond$i$i$i$i$i98$i;
     $cmp$i$i$i$i$i$i = ($$sroa$speculated$i$i$i$i$i|0)==(0);
     if ($cmp$i$i$i$i$i$i) {
      label = 28;
     } else {
      $28 = load4($__k);
      $cond$i$i$i$i$i$i$i = $tobool$i$i$i$i$i$i95$i ? $28 : $__k;
      $29 = load4($__value_$i$i);
      $cond$i$i22$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i ? $29 : $__value_$i$i;
      $call$i$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i)|0);
      $cmp$i$i$i$i$i = ($call$i$i$i$i$i$i|0)==(0);
      if ($cmp$i$i$i$i$i) {
       label = 28;
      } else {
       $cmp$i$i$i$i = ($call$i$i$i$i$i$i|0)<(0);
       if ($cmp$i$i$i$i) {
        break;
       }
      }
     }
     if ((label|0) == 28) {
      $cmp8$i$i$i$i$i = ($cond$i$i$i$i$i98$i>>>0)<($cond$i11$i$i$i$i$i>>>0);
      if ($cmp8$i$i$i$i$i) {
       break;
      }
     }
     $call52$i = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($this,$__parent,$__k)|0);
     $retval$2$i = $call52$i;
     break L1;
    }
   } while(0);
   if ($cmp$i$i$i$i$i25$i) {
    store4($__parent,$__p$0);
    $retval$2$i = $21;
    break;
   } else {
    store4($__parent,$retval$0$i$i$i$i$i$i);
    $retval$2$i = $retval$0$i$i$i$i$i$i;
    break;
   }
  }
 } while(0);
 L35: do {
  if ((label|0) == 6) {
   $7 = load4($this);
   $cmp$i130$i = ($7|0)==($__p$0|0);
   $$pre$i2 = load4($__p$0);
   do {
    if ($cmp$i130$i) {
     $__prior$sroa$0$0$i = $0;
    } else {
     $cmp$i$i$i = ($$pre$i2|0)==(0|0);
     if ($cmp$i$i$i) {
      $__x$addr$0$i$i$i = $__p$0;
      while(1) {
       $__parent_$i$i$i$i = ((($__x$addr$0$i$i$i)) + 8|0);
       $9 = load4($__parent_$i$i$i$i);
       $10 = load4($9);
       $cmp$i4$i$i$i = ($10|0)==($__x$addr$0$i$i$i|0);
       if ($cmp$i4$i$i$i) {
        $__x$addr$0$i$i$i = $9;
       } else {
        $retval$0$i$i$i = $9;
        break;
       }
      }
     } else {
      $__x$addr$0$i$i$i$i = $$pre$i2;
      while(1) {
       $__right_$i$i$i$i = ((($__x$addr$0$i$i$i$i)) + 4|0);
       $8 = load4($__right_$i$i$i$i);
       $cmp$i$i$i126$i = ($8|0)==(0|0);
       if ($cmp$i$i$i126$i) {
        $retval$0$i$i$i = $__x$addr$0$i$i$i$i;
        break;
       } else {
        $__x$addr$0$i$i$i$i = $8;
       }
      }
     }
     $11 = $retval$0$i$i$i;
     $__value_$i125$i = ((($retval$0$i$i$i)) + 16|0);
     $__size_$i$i$i$i$i$i63$i = ((($__value_$i125$i)) + 11|0);
     $12 = load1($__size_$i$i$i$i$i$i63$i);
     $tobool$i$i$i$i$i$i64$i = ($12<<24>>24)<(0);
     $__size_$i3$i$i$i$i$i65$i = ((($retval$0$i$i$i)) + 20|0);
     $13 = load4($__size_$i3$i$i$i$i$i65$i);
     $conv$i$i$i$i$i$i66$i = $12&255;
     $cond$i$i$i$i$i67$i = $tobool$i$i$i$i$i$i64$i ? $13 : $conv$i$i$i$i$i$i66$i;
     $__size_$i$i5$i$i$i$i69$i = ((($__k)) + 11|0);
     $14 = load1($__size_$i$i5$i$i$i$i69$i);
     $tobool$i$i6$i$i$i$i70$i = ($14<<24>>24)<(0);
     $__size_$i3$i7$i$i$i$i71$i = ((($__k)) + 4|0);
     $15 = load4($__size_$i3$i7$i$i$i$i71$i);
     $conv$i$i9$i$i$i$i72$i = $14&255;
     $cond$i11$i$i$i$i73$i = $tobool$i$i6$i$i$i$i70$i ? $15 : $conv$i$i9$i$i$i$i72$i;
     $cmp$i$i$i$i$i$i$i74$i = ($cond$i11$i$i$i$i73$i>>>0)<($cond$i$i$i$i$i67$i>>>0);
     $$sroa$speculated$i$i$i$i75$i = $cmp$i$i$i$i$i$i$i74$i ? $cond$i11$i$i$i$i73$i : $cond$i$i$i$i$i67$i;
     $cmp$i$i$i$i$i76$i = ($$sroa$speculated$i$i$i$i75$i|0)==(0);
     if ($cmp$i$i$i$i$i76$i) {
      label = 12;
     } else {
      $16 = load4($__value_$i125$i);
      $cond$i$i$i$i$i$i79$i = $tobool$i$i$i$i$i$i64$i ? $16 : $__value_$i125$i;
      $17 = load4($__k);
      $cond$i$i22$i$i$i$i82$i = $tobool$i$i6$i$i$i$i70$i ? $17 : $__k;
      $call$i$i$i$i$i83$i = (_memcmp($cond$i$i$i$i$i$i79$i,$cond$i$i22$i$i$i$i82$i,$$sroa$speculated$i$i$i$i75$i)|0);
      $cmp$i$i$i$i84$i = ($call$i$i$i$i$i83$i|0)==(0);
      if ($cmp$i$i$i$i84$i) {
       label = 12;
      } else {
       $cmp$i$i$i91$i = ($call$i$i$i$i$i83$i|0)<(0);
       if ($cmp$i$i$i91$i) {
        $__prior$sroa$0$0$i = $11;
        break;
       }
      }
     }
     if ((label|0) == 12) {
      $cmp8$i$i$i$i86$i = ($cond$i$i$i$i$i67$i>>>0)<($cond$i11$i$i$i$i73$i>>>0);
      if ($cmp8$i$i$i$i86$i) {
       $__prior$sroa$0$0$i = $11;
       break;
      }
     }
     $call22$i = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($this,$__parent,$__k)|0);
     $retval$2$i = $call22$i;
     break L35;
    }
   } while(0);
   $cmp$i4 = ($$pre$i2|0)==(0|0);
   if ($cmp$i4) {
    store4($__parent,$__p$0);
    $retval$2$i = $__p$0;
    break;
   } else {
    $18 = $__prior$sroa$0$0$i;
    store4($__parent,$18);
    $__right_$i5 = ((($18)) + 4|0);
    $retval$2$i = $__right_$i5;
    break;
   }
  }
 } while(0);
 $30 = load4($retval$2$i);
 $cmp = ($30|0)==(0|0);
 if (!($cmp)) {
  STACKTOP = sp;return;
 }
 $call$i$i$i$i = (__Znwj(40)|0);
 $first$i$i$i$i$i = ((($call$i$i$i$i)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($first$i$i$i$i$i,$__args);
 $second$i$i$i$i$i = ((($call$i$i$i$i)) + 28|0);
 $second3$i$i$i$i$i = ((($__args)) + 12|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($second$i$i$i$i$i,$second3$i$i$i$i$i);
 $31 = load4($__parent);
 store4($call$i$i$i$i,0);
 $__right_$i = ((($call$i$i$i$i)) + 4|0);
 store4($__right_$i,0);
 $__parent_$i = ((($call$i$i$i$i)) + 8|0);
 store4($__parent_$i,$31);
 store4($retval$2$i,$call$i$i$i$i);
 $32 = load4($this);
 $33 = load4($32);
 $cmp$i = ($33|0)==(0|0);
 if ($cmp$i) {
  $36 = $call$i$i$i$i;
 } else {
  $34 = $33;
  store4($this,$34);
  $$pre$i = load4($retval$2$i);
  $36 = $$pre$i;
 }
 $__left_7$i = ((($this)) + 4|0);
 $35 = load4($__left_7$i);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($35,$36);
 $__first_$i$i$i$i6 = ((($this)) + 8|0);
 $37 = load4($__first_$i$i$i$i6);
 $inc$i = (($37) + 1)|0;
 store4($__first_$i$i$i$i6,$inc$i);
 STACKTOP = sp;return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($this,$__parent,$__v) {
 $this = $this|0;
 $__parent = $__parent|0;
 $__v = $__v|0;
 var $$sink = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i30 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i = 0, $__nd$0 = 0, $__size_$i$i$i$i$i$i18 = 0, $__size_$i$i5$i$i$i$i24 = 0, $__size_$i3$i$i$i$i$i20 = 0, $__size_$i3$i7$i$i$i$i26 = 0;
 var $__value_ = 0, $call$i$i$i$i$i = 0, $call$i$i$i$i$i38 = 0, $cmp = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i29 = 0, $cmp$i$i$i$i$i31 = 0, $cmp$i$i$i$i39 = 0, $cmp$i$i$i46 = 0, $cmp14 = 0, $cmp5 = 0, $cmp8$i$i$i$i41 = 0, $cond$i$i$i$i$i$i = 0, $cond$i$i$i$i$i22 = 0, $cond$i$i22$i$i$i$i = 0, $cond$i$i22$i$i$i$i37 = 0, $cond$i11$i$i$i$i28 = 0;
 var $conv$i$i$i$i$i$i21 = 0, $conv$i$i9$i$i$i$i27 = 0, $retval$0 = 0, $tobool$i$i$i$i$i$i19 = 0, $tobool$i$i6$i$i$i$i25 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i$i = ((($this)) + 4|0);
 $0 = load4($__first_$i$i$i$i);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  store4($__parent,$__first_$i$i$i$i);
  $retval$0 = $__first_$i$i$i$i;
  return ($retval$0|0);
 }
 $__size_$i$i$i$i$i$i18 = ((($__v)) + 11|0);
 $1 = load1($__size_$i$i$i$i$i$i18);
 $tobool$i$i$i$i$i$i19 = ($1<<24>>24)<(0);
 $__size_$i3$i$i$i$i$i20 = ((($__v)) + 4|0);
 $2 = load4($__size_$i3$i$i$i$i$i20);
 $conv$i$i$i$i$i$i21 = $1&255;
 $cond$i$i$i$i$i22 = $tobool$i$i$i$i$i$i19 ? $2 : $conv$i$i$i$i$i$i21;
 $3 = load4($__v);
 $cond$i$i22$i$i$i$i = $tobool$i$i$i$i$i$i19 ? $3 : $__v;
 $__nd$0 = $0;
 while(1) {
  $__value_ = ((($__nd$0)) + 16|0);
  $__size_$i$i5$i$i$i$i24 = ((($__value_)) + 11|0);
  $4 = load1($__size_$i$i5$i$i$i$i24);
  $tobool$i$i6$i$i$i$i25 = ($4<<24>>24)<(0);
  $__size_$i3$i7$i$i$i$i26 = ((($__nd$0)) + 20|0);
  $5 = load4($__size_$i3$i7$i$i$i$i26);
  $conv$i$i9$i$i$i$i27 = $4&255;
  $cond$i11$i$i$i$i28 = $tobool$i$i6$i$i$i$i25 ? $5 : $conv$i$i9$i$i$i$i27;
  $cmp$i$i$i$i$i$i$i29 = ($cond$i11$i$i$i$i28>>>0)<($cond$i$i$i$i$i22>>>0);
  $$sroa$speculated$i$i$i$i30 = $cmp$i$i$i$i$i$i$i29 ? $cond$i11$i$i$i$i28 : $cond$i$i$i$i$i22;
  $cmp$i$i$i$i$i31 = ($$sroa$speculated$i$i$i$i30|0)==(0);
  if ($cmp$i$i$i$i$i31) {
   label = 5;
  } else {
   $6 = load4($__value_);
   $cond$i$i22$i$i$i$i37 = $tobool$i$i6$i$i$i$i25 ? $6 : $__value_;
   $call$i$i$i$i$i38 = (_memcmp($cond$i$i22$i$i$i$i,$cond$i$i22$i$i$i$i37,$$sroa$speculated$i$i$i$i30)|0);
   $cmp$i$i$i$i39 = ($call$i$i$i$i$i38|0)==(0);
   if ($cmp$i$i$i$i39) {
    label = 5;
   } else {
    $cmp$i$i$i46 = ($call$i$i$i$i$i38|0)<(0);
    if ($cmp$i$i$i46) {
     label = 7;
    } else {
     label = 9;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $cmp8$i$i$i$i41 = ($cond$i$i$i$i$i22>>>0)<($cond$i11$i$i$i$i28>>>0);
   if ($cmp8$i$i$i$i41) {
    label = 7;
   } else {
    label = 9;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $7 = load4($__nd$0);
   $cmp5 = ($7|0)==(0|0);
   if ($cmp5) {
    label = 8;
    break;
   } else {
    $$sink = $7;
   }
  }
  else if ((label|0) == 9) {
   label = 0;
   $cmp$i$i$i$i$i$i$i = ($cond$i$i$i$i$i22>>>0)<($cond$i11$i$i$i$i28>>>0);
   $$sroa$speculated$i$i$i$i = $cmp$i$i$i$i$i$i$i ? $cond$i$i$i$i$i22 : $cond$i11$i$i$i$i28;
   $cmp$i$i$i$i$i = ($$sroa$speculated$i$i$i$i|0)==(0);
   if ($cmp$i$i$i$i$i) {
    label = 11;
   } else {
    $8 = load4($__value_);
    $cond$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i25 ? $8 : $__value_;
    $call$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i,$cond$i$i22$i$i$i$i,$$sroa$speculated$i$i$i$i)|0);
    $cmp$i$i$i$i = ($call$i$i$i$i$i|0)==(0);
    if ($cmp$i$i$i$i) {
     label = 11;
    } else {
     $cmp$i$i$i = ($call$i$i$i$i$i|0)<(0);
     if (!($cmp$i$i$i)) {
      label = 16;
      break;
     }
    }
   }
   if ((label|0) == 11) {
    label = 0;
    if (!($cmp$i$i$i$i$i$i$i29)) {
     label = 16;
     break;
    }
   }
   $9 = ((($__nd$0)) + 4|0);
   $10 = load4($9);
   $cmp14 = ($10|0)==(0|0);
   if ($cmp14) {
    label = 15;
    break;
   } else {
    $$sink = $10;
   }
  }
  $__nd$0 = $$sink;
 }
 if ((label|0) == 8) {
  store4($__parent,$__nd$0);
  $retval$0 = $__nd$0;
  return ($retval$0|0);
 }
 else if ((label|0) == 15) {
  store4($__parent,$__nd$0);
  $retval$0 = $9;
  return ($retval$0|0);
 }
 else if ((label|0) == 16) {
  store4($__parent,$__nd$0);
  $retval$0 = $__parent;
  return ($retval$0|0);
 }
 return (0)|0;
}
function __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($__root,$__x) {
 $__root = $__root|0;
 $__x = $__x|0;
 var $$pre = 0, $$pre94 = 0, $$pre96 = 0, $$pre97 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $__is_black_ = 0, $__is_black_14 = 0, $__is_black_2 = 0, $__is_black_21 = 0, $__is_black_23 = 0, $__is_black_31 = 0, $__is_black_47 = 0, $__is_black_49 = 0, $__is_black_7 = 0, $__is_black_7$sink = 0, $__parent_ = 0, $__parent_$i = 0, $__parent_$i46 = 0, $__parent_$i50 = 0, $__parent_$i63 = 0, $__parent_$i74 = 0, $__parent_4$i = 0;
 var $__parent_4$i65 = 0, $__parent_5$i = 0, $__parent_5$i66 = 0, $__parent_5$i77 = 0, $__right_$i = 0, $__right_$i48 = 0, $__right_$i61 = 0, $__right_$i71 = 0, $__right_10$sink$i = 0, $__right_10$sink$i56 = 0, $__right_10$sink$i69 = 0, $__right_10$sink$i80 = 0, $__x$addr$089 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i55 = 0, $cmp$i$i68 = 0, $cmp$i$i79 = 0, $cmp$i45 = 0;
 var $cmp$i49 = 0, $cmp$i59 = 0, $cmp$i62 = 0, $cmp$i73 = 0, $cmp$i84 = 0, $cmp13 = 0, $cmp29 = 0, $cmp6 = 0, $frombool = 0, $frombool15 = 0, $lnot = 0, $tobool32 = 0, $tobool8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__x|0)==($__root|0);
 $__is_black_ = ((($__x)) + 12|0);
 $frombool = $cmp&1;
 store1($__is_black_,$frombool);
 if ($cmp) {
  return;
 } else {
  $__x$addr$089 = $__x;
 }
 while(1) {
  $__parent_ = ((($__x$addr$089)) + 8|0);
  $0 = load4($__parent_);
  $__is_black_2 = ((($0)) + 12|0);
  $1 = load1($__is_black_2);
  $lnot = ($1<<24>>24)==(0);
  if (!($lnot)) {
   label = 23;
   break;
  }
  $__parent_$i = ((($0)) + 8|0);
  $2 = load4($__parent_$i);
  $3 = load4($2);
  $cmp$i = ($3|0)==($0|0);
  if ($cmp$i) {
   $4 = ((($2)) + 4|0);
   $5 = load4($4);
   $cmp6 = ($5|0)==(0|0);
   if ($cmp6) {
    label = 7;
    break;
   }
   $__is_black_7 = ((($5)) + 12|0);
   $6 = load1($__is_black_7);
   $tobool8 = ($6<<24>>24)==(0);
   if ($tobool8) {
    $__is_black_7$sink = $__is_black_7;
   } else {
    label = 7;
    break;
   }
  } else {
   $cmp29 = ($3|0)==(0|0);
   if ($cmp29) {
    label = 16;
    break;
   }
   $__is_black_31 = ((($3)) + 12|0);
   $23 = load1($__is_black_31);
   $tobool32 = ($23<<24>>24)==(0);
   if ($tobool32) {
    $__is_black_7$sink = $__is_black_31;
   } else {
    label = 16;
    break;
   }
  }
  store1($__is_black_2,1);
  $cmp13 = ($2|0)==($__root|0);
  $__is_black_14 = ((($2)) + 12|0);
  $frombool15 = $cmp13&1;
  store1($__is_black_14,$frombool15);
  store1($__is_black_7$sink,1);
  if ($cmp13) {
   label = 23;
   break;
  } else {
   $__x$addr$089 = $2;
  }
 }
 if ((label|0) == 7) {
  $7 = load4($0);
  $cmp$i84 = ($7|0)==($__x$addr$089|0);
  if ($cmp$i84) {
   $15 = $0;$16 = $2;
  } else {
   $8 = $2;
   $__right_$i71 = ((($0)) + 4|0);
   $9 = load4($__right_$i71);
   $10 = load4($9);
   store4($__right_$i71,$10);
   $cmp$i73 = ($10|0)==(0|0);
   if ($cmp$i73) {
    $11 = $8;
   } else {
    $__parent_$i74 = ((($10)) + 8|0);
    store4($__parent_$i74,$0);
    $$pre96 = load4($__parent_$i);
    $11 = $$pre96;
   }
   $__parent_5$i77 = ((($9)) + 8|0);
   store4($__parent_5$i77,$11);
   $12 = load4($__parent_$i);
   $13 = load4($12);
   $cmp$i$i79 = ($13|0)==($0|0);
   $14 = ((($12)) + 4|0);
   $__right_10$sink$i80 = $cmp$i$i79 ? $12 : $14;
   store4($__right_10$sink$i80,$9);
   store4($9,$0);
   store4($__parent_$i,$9);
   $$pre97 = load4($__parent_5$i77);
   $15 = $9;$16 = $$pre97;
  }
  $__is_black_21 = ((($15)) + 12|0);
  store1($__is_black_21,1);
  $__is_black_23 = ((($16)) + 12|0);
  store1($__is_black_23,0);
  $17 = load4($16);
  $__right_$i61 = ((($17)) + 4|0);
  $18 = load4($__right_$i61);
  store4($16,$18);
  $cmp$i62 = ($18|0)==(0|0);
  if (!($cmp$i62)) {
   $__parent_$i63 = ((($18)) + 8|0);
   store4($__parent_$i63,$16);
  }
  $__parent_4$i65 = ((($16)) + 8|0);
  $19 = load4($__parent_4$i65);
  $__parent_5$i66 = ((($17)) + 8|0);
  store4($__parent_5$i66,$19);
  $20 = load4($__parent_4$i65);
  $21 = load4($20);
  $cmp$i$i68 = ($21|0)==($16|0);
  $22 = ((($20)) + 4|0);
  $__right_10$sink$i69 = $cmp$i$i68 ? $20 : $22;
  store4($__right_10$sink$i69,$17);
  store4($__right_$i61,$16);
  store4($__parent_4$i65,$17);
  return;
 }
 else if ((label|0) == 16) {
  $24 = load4($0);
  $cmp$i59 = ($24|0)==($__x$addr$089|0);
  if ($cmp$i59) {
   $25 = $2;
   $__right_$i48 = ((($__x$addr$089)) + 4|0);
   $26 = load4($__right_$i48);
   store4($0,$26);
   $cmp$i49 = ($26|0)==(0|0);
   if ($cmp$i49) {
    $27 = $25;
   } else {
    $__parent_$i50 = ((($26)) + 8|0);
    store4($__parent_$i50,$0);
    $$pre = load4($__parent_$i);
    $27 = $$pre;
   }
   store4($__parent_,$27);
   $28 = load4($__parent_$i);
   $29 = load4($28);
   $cmp$i$i55 = ($29|0)==($0|0);
   $30 = ((($28)) + 4|0);
   $__right_10$sink$i56 = $cmp$i$i55 ? $28 : $30;
   store4($__right_10$sink$i56,$__x$addr$089);
   store4($__right_$i48,$0);
   store4($__parent_$i,$__x$addr$089);
   $$pre94 = load4($__parent_);
   $31 = $__x$addr$089;$32 = $$pre94;
  } else {
   $31 = $0;$32 = $2;
  }
  $__is_black_47 = ((($31)) + 12|0);
  store1($__is_black_47,1);
  $__is_black_49 = ((($32)) + 12|0);
  store1($__is_black_49,0);
  $__right_$i = ((($32)) + 4|0);
  $33 = load4($__right_$i);
  $34 = load4($33);
  store4($__right_$i,$34);
  $cmp$i45 = ($34|0)==(0|0);
  if (!($cmp$i45)) {
   $__parent_$i46 = ((($34)) + 8|0);
   store4($__parent_$i46,$32);
  }
  $__parent_4$i = ((($32)) + 8|0);
  $35 = load4($__parent_4$i);
  $__parent_5$i = ((($33)) + 8|0);
  store4($__parent_5$i,$35);
  $36 = load4($__parent_4$i);
  $37 = load4($36);
  $cmp$i$i = ($37|0)==($32|0);
  $38 = ((($36)) + 4|0);
  $__right_10$sink$i = $cmp$i$i ? $36 : $38;
  store4($__right_10$sink$i,$33);
  store4($33,$32);
  store4($__parent_4$i,$33);
  return;
 }
 else if ((label|0) == 23) {
  return;
 }
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv($this) {
 $this = $this|0;
 var $0 = 0, $__first_$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i = ((($this)) + 8|0);
 $0 = load4($__first_$i$i$i);
 return ($0|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_($m,$k) {
 $m = $m|0;
 $k = $k|0;
 var $$sroa$speculated$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i$i1 = 0, $__result$addr$0$ph$lcssa$i$i = 0;
 var $__result$addr$0$ph14$i$i = 0, $__root$addr$0$ph13$i$i = 0, $__root$addr$09$i$i = 0, $__size_$i$i$i$i$i$i$i = 0, $__size_$i$i$i$i$i$i$i$i = 0, $__size_$i$i5$i$i$i$i$i = 0, $__size_$i$i5$i$i$i$i$i$i = 0, $__size_$i3$i$i$i$i$i$i = 0, $__size_$i3$i$i$i$i$i$i$i = 0, $__size_$i3$i7$i$i$i$i$i = 0, $__size_$i3$i7$i$i$i$i$i$i = 0, $__value_$i$i = 0, $__value_$i4$i = 0, $add$i$i$i$i = 0, $argv$i = 0, $call$i$i$i$i$i$i = 0, $call$i$i$i$i$i$i$i = 0, $call1$i$i$i$i = 0, $call4$i = 0, $cmp$i$i$i$i = 0;
 var $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i6$i = 0, $cmp$i$i$i$i7$i = 0, $cmp$i$i2 = 0, $cmp8$i$i = 0, $cmp8$i$i$i$i$i = 0, $cmp8$i$i$i$i$i$i = 0, $cmp812$i$i = 0, $cond$i$i$i$i$i$i = 0, $cond$i$i$i$i$i$i$i$i = 0, $cond$i$i$i$i$i$i5$i = 0, $cond$i$i21$i$i$i$i = 0, $cond$i$i22$i$i$i$i$i = 0, $cond$i$i22$i$i$i$i$i$i = 0, $cond$i11$i$i$i$i$i = 0, $cond$i11$i$i$i$i$i$i = 0;
 var $conv$i$i$i$i$i$i$i = 0, $conv$i$i$i$i$i$i$i$i = 0, $conv$i$i9$i$i$i$i$i = 0, $conv$i$i9$i$i$i$i$i$i = 0, $data$i$i$i$i = 0, $lnot$i$i = 0, $retval$sroa$0$0 = 0, $second = 0, $tobool$i$i$i$i$i$i$i = 0, $tobool$i$i$i$i$i$i$i$i = 0, $tobool$i$i6$i$i$i$i$i = 0, $tobool$i$i6$i$i$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $argv$i = sp;
 $__first_$i$i$i$i$i1 = ((($m)) + 4|0);
 $0 = load4($__first_$i$i$i$i$i1);
 $cmp812$i$i = ($0|0)==(0|0);
 if ($cmp812$i$i) {
  $retval$sroa$0$0 = (1);
  STACKTOP = sp;return ($retval$sroa$0$0|0);
 }
 $__size_$i$i5$i$i$i$i$i$i = ((($k)) + 11|0);
 $1 = load1($__size_$i$i5$i$i$i$i$i$i);
 $tobool$i$i6$i$i$i$i$i$i = ($1<<24>>24)<(0);
 $__size_$i3$i7$i$i$i$i$i$i = ((($k)) + 4|0);
 $2 = load4($__size_$i3$i7$i$i$i$i$i$i);
 $conv$i$i9$i$i$i$i$i$i = $1&255;
 $cond$i11$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i$i ? $2 : $conv$i$i9$i$i$i$i$i$i;
 $3 = load4($k);
 $cond$i$i22$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i$i ? $3 : $k;
 $__result$addr$0$ph14$i$i = $__first_$i$i$i$i$i1;$__root$addr$0$ph13$i$i = $0;
 L4: while(1) {
  $__root$addr$09$i$i = $__root$addr$0$ph13$i$i;
  while(1) {
   $__value_$i4$i = ((($__root$addr$09$i$i)) + 16|0);
   $__size_$i$i$i$i$i$i$i$i = ((($__value_$i4$i)) + 11|0);
   $4 = load1($__size_$i$i$i$i$i$i$i$i);
   $tobool$i$i$i$i$i$i$i$i = ($4<<24>>24)<(0);
   $__size_$i3$i$i$i$i$i$i$i = ((($__root$addr$09$i$i)) + 20|0);
   $5 = load4($__size_$i3$i$i$i$i$i$i$i);
   $conv$i$i$i$i$i$i$i$i = $4&255;
   $cond$i$i$i$i$i$i5$i = $tobool$i$i$i$i$i$i$i$i ? $5 : $conv$i$i$i$i$i$i$i$i;
   $cmp$i$i$i$i$i$i$i$i$i = ($cond$i11$i$i$i$i$i$i>>>0)<($cond$i$i$i$i$i$i5$i>>>0);
   $$sroa$speculated$i$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i$i ? $cond$i11$i$i$i$i$i$i : $cond$i$i$i$i$i$i5$i;
   $cmp$i$i$i$i$i$i$i = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
   if ($cmp$i$i$i$i$i$i$i) {
    label = 6;
   } else {
    $6 = load4($__value_$i4$i);
    $cond$i$i$i$i$i$i$i$i = $tobool$i$i$i$i$i$i$i$i ? $6 : $__value_$i4$i;
    $call$i$i$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i$i)|0);
    $cmp$i$i$i$i$i6$i = ($call$i$i$i$i$i$i$i|0)==(0);
    if ($cmp$i$i$i$i$i6$i) {
     label = 6;
    } else {
     $cmp$i$i$i$i7$i = ($call$i$i$i$i$i$i$i|0)<(0);
     if (!($cmp$i$i$i$i7$i)) {
      break;
     }
    }
   }
   if ((label|0) == 6) {
    label = 0;
    $cmp8$i$i$i$i$i$i = ($cond$i$i$i$i$i$i5$i>>>0)<($cond$i11$i$i$i$i$i$i>>>0);
    if (!($cmp8$i$i$i$i$i$i)) {
     break;
    }
   }
   $8 = ((($__root$addr$09$i$i)) + 4|0);
   $9 = load4($8);
   $cmp$i$i2 = ($9|0)==(0|0);
   if ($cmp$i$i2) {
    $__result$addr$0$ph$lcssa$i$i = $__result$addr$0$ph14$i$i;
    break L4;
   } else {
    $__root$addr$09$i$i = $9;
   }
  }
  $7 = load4($__root$addr$09$i$i);
  $cmp8$i$i = ($7|0)==(0|0);
  if ($cmp8$i$i) {
   $__result$addr$0$ph$lcssa$i$i = $__root$addr$09$i$i;
   break;
  } else {
   $__result$addr$0$ph14$i$i = $__root$addr$09$i$i;$__root$addr$0$ph13$i$i = $7;
  }
 }
 $lnot$i$i = ($__result$addr$0$ph$lcssa$i$i|0)==($__first_$i$i$i$i$i1|0);
 if ($lnot$i$i) {
  $retval$sroa$0$0 = (1);
  STACKTOP = sp;return ($retval$sroa$0$0|0);
 }
 $__value_$i$i = ((($__result$addr$0$ph$lcssa$i$i)) + 16|0);
 $__size_$i$i5$i$i$i$i$i = ((($__value_$i$i)) + 11|0);
 $10 = load1($__size_$i$i5$i$i$i$i$i);
 $tobool$i$i6$i$i$i$i$i = ($10<<24>>24)<(0);
 $__size_$i3$i7$i$i$i$i$i = ((($__result$addr$0$ph$lcssa$i$i)) + 20|0);
 $11 = load4($__size_$i3$i7$i$i$i$i$i);
 $conv$i$i9$i$i$i$i$i = $10&255;
 $cond$i11$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i ? $11 : $conv$i$i9$i$i$i$i$i;
 $cmp$i$i$i$i$i$i$i$i = ($cond$i11$i$i$i$i$i>>>0)<($cond$i11$i$i$i$i$i$i>>>0);
 $$sroa$speculated$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i ? $cond$i11$i$i$i$i$i : $cond$i11$i$i$i$i$i$i;
 $cmp$i$i$i$i$i$i = ($$sroa$speculated$i$i$i$i$i|0)==(0);
 if ($cmp$i$i$i$i$i$i) {
  label = 13;
 } else {
  $12 = load4($__value_$i$i);
  $cond$i$i22$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i ? $12 : $__value_$i$i;
  $call$i$i$i$i$i$i = (_memcmp($cond$i$i22$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i)|0);
  $cmp$i$i$i$i$i = ($call$i$i$i$i$i$i|0)==(0);
  if ($cmp$i$i$i$i$i) {
   label = 13;
  } else {
   $cmp$i$i$i$i = ($call$i$i$i$i$i$i|0)<(0);
   if ($cmp$i$i$i$i) {
    $retval$sroa$0$0 = (1);
    STACKTOP = sp;return ($retval$sroa$0$0|0);
   }
  }
 }
 if ((label|0) == 13) {
  $cmp8$i$i$i$i$i = ($cond$i11$i$i$i$i$i$i>>>0)<($cond$i11$i$i$i$i$i>>>0);
  if ($cmp8$i$i$i$i$i) {
   $retval$sroa$0$0 = (1);
   STACKTOP = sp;return ($retval$sroa$0$0|0);
  }
 }
 $second = ((($__result$addr$0$ph$lcssa$i$i)) + 28|0);
 $__size_$i$i$i$i$i$i$i = ((($second)) + 11|0);
 $13 = load1($__size_$i$i$i$i$i$i$i);
 $tobool$i$i$i$i$i$i$i = ($13<<24>>24)<(0);
 $__size_$i3$i$i$i$i$i$i = ((($__result$addr$0$ph$lcssa$i$i)) + 32|0);
 $14 = load4($__size_$i3$i$i$i$i$i$i);
 $conv$i$i$i$i$i$i$i = $13&255;
 $cond$i$i$i$i$i$i = $tobool$i$i$i$i$i$i$i ? $14 : $conv$i$i$i$i$i$i$i;
 $add$i$i$i$i = (($cond$i$i$i$i$i$i) + 4)|0;
 $call1$i$i$i$i = (_malloc($add$i$i$i$i)|0);
 store4($call1$i$i$i$i,$cond$i$i$i$i$i$i);
 $data$i$i$i$i = ((($call1$i$i$i$i)) + 4|0);
 $15 = load4($second);
 $cond$i$i21$i$i$i$i = $tobool$i$i$i$i$i$i$i ? $15 : $second;
 _memcpy(($data$i$i$i$i|0),($cond$i$i21$i$i$i$i|0),($cond$i$i$i$i$i$i|0))|0;
 store4($argv$i,$call1$i$i$i$i);
 $call4$i = (__emval_take_value((1080|0),($argv$i|0))|0);
 $retval$sroa$0$0 = $call4$i;
 STACKTOP = sp;return ($retval$sroa$0$0|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_($m,$k,$v) {
 $m = $m|0;
 $k = $k|0;
 $v = $v|0;
 var $$pre$i$i$i = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $__first_$i$i$i$i8$i$i = 0, $__left_7$i$i$i = 0, $__parent$i$i = 0, $__parent_$i$i$i = 0, $__r$0$i$i = 0, $__right_$i$i$i = 0, $call$i$i = 0, $call$i$i$i$i$i$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $first$i$i$i$i$i$i5$i$i = 0;
 var $inc$i$i$i = 0, $second$i = 0, $second$i$i$i$i$i$i6$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $__parent$i$i = sp;
 $call$i$i = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($m,$__parent$i$i,$k)|0);
 $0 = load4($call$i$i);
 $cmp$i$i = ($0|0)==(0|0);
 if (!($cmp$i$i)) {
  $__r$0$i$i = $0;
  $second$i = ((($__r$0$i$i)) + 28|0);
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($second$i,$v)|0);
  STACKTOP = sp;return;
 }
 $call$i$i$i$i$i$i = (__Znwj(40)|0);
 $first$i$i$i$i$i$i5$i$i = ((($call$i$i$i$i$i$i)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($first$i$i$i$i$i$i5$i$i,$k);
 $second$i$i$i$i$i$i6$i$i = ((($call$i$i$i$i$i$i)) + 28|0);
 ; store8($second$i$i$i$i$i$i6$i$i,i64_const(0,0),4); store4($second$i$i$i$i$i$i6$i$i+8|0,0,4);
 $1 = load4($__parent$i$i);
 store4($call$i$i$i$i$i$i,0);
 $__right_$i$i$i = ((($call$i$i$i$i$i$i)) + 4|0);
 store4($__right_$i$i$i,0);
 $__parent_$i$i$i = ((($call$i$i$i$i$i$i)) + 8|0);
 store4($__parent_$i$i$i,$1);
 store4($call$i$i,$call$i$i$i$i$i$i);
 $2 = load4($m);
 $3 = load4($2);
 $cmp$i$i$i = ($3|0)==(0|0);
 if ($cmp$i$i$i) {
  $6 = $call$i$i$i$i$i$i;
 } else {
  $4 = $3;
  store4($m,$4);
  $$pre$i$i$i = load4($call$i$i);
  $6 = $$pre$i$i$i;
 }
 $__left_7$i$i$i = ((($m)) + 4|0);
 $5 = load4($__left_7$i$i$i);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($5,$6);
 $__first_$i$i$i$i8$i$i = ((($m)) + 8|0);
 $7 = load4($__first_$i$i$i$i8$i$i);
 $inc$i$i$i = (($7) + 1)|0;
 store4($__first_$i$i$i$i8$i$i,$inc$i$i$i);
 $__r$0$i$i = $call$i$i$i$i$i$i;
 $second$i = ((($__r$0$i$i)) + 28|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($second$i,$v)|0);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1024|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_($ptr) {
 $ptr = $ptr|0;
 var $0 = 0, $__first_$i$i$i$i$i$i = 0, $isnull = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $isnull = ($ptr|0)==(0|0);
 if ($isnull) {
  return;
 }
 $__first_$i$i$i$i$i$i = ((($ptr)) + 4|0);
 $0 = load4($__first_$i$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0);
 __ZdlPv($ptr);
 return;
}
function __ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_() {
 var $__first_$i$i$i$i = 0, $__left_$i$i$i$i$i = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__Znwj(12)|0);
 $__left_$i$i$i$i$i = ((($call)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i = ((($call)) + 8|0);
 store4($__first_$i$i$i$i,0);
 store4($call,$__left_$i$i$i$i$i);
 return ($call|0);
}
function __ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE($fn) {
 $fn = $fn|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (FUNCTION_TABLE_i[$fn & 3]()|0);
 return ($call|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_($method,$wireThis) {
 $method = $method|0;
 $wireThis = $wireThis|0;
 var $$elt1 = 0, $$unpack = 0, $$unpack2 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $call1 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($method);
 $$elt1 = ((($method)) + 4|0);
 $$unpack2 = load4($$elt1);
 $memptr$adj$shifted = $$unpack2 >> 1;
 $0 = (($wireThis) + ($memptr$adj$shifted)|0);
 $1 = $$unpack2 & 1;
 $memptr$isvirtual = ($1|0)==(0);
 if ($memptr$isvirtual) {
  $memptr$nonvirtualfn = $$unpack;
  $3 = $memptr$nonvirtualfn;
  $call1 = (FUNCTION_TABLE_ii[$3 & 15]($0)|0);
  return ($call1|0);
 } else {
  $vtable = load4($0);
  $2 = (($vtable) + ($$unpack)|0);
  $memptr$virtualfn = load4($2);
  $3 = $memptr$virtualfn;
  $call1 = (FUNCTION_TABLE_ii[$3 & 15]($0)|0);
  return ($call1|0);
 }
 return (0)|0;
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E($function,$wireThis,$args) {
 $function = $function|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 var $0 = 0, $1 = 0, $arraydecay$i = 0, $call2 = 0, $ref$tmp1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp1 = sp;
 $0 = load4($function);
 $arraydecay$i = ((($args)) + 4|0);
 $1 = load4($args);
 ; store8($ref$tmp1,i64_const(0,0),4); store4($ref$tmp1+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp1,$arraydecay$i,$1);
 $call2 = (FUNCTION_TABLE_iii[$0 & 15]($wireThis,$ref$tmp1)|0);
 __emval_incref(($call2|0));
 __emval_decref(($call2|0));
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp1);
 STACKTOP = sp;return ($call2|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_($function,$wireThis,$args,$args1) {
 $function = $function|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $1 = 0, $2 = 0, $arraydecay$i = 0, $arraydecay$i1 = 0, $ref$tmp = 0, $ref$tmp3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $ref$tmp = sp + 12|0;
 $ref$tmp3 = sp;
 $0 = load4($function);
 $arraydecay$i = ((($args)) + 4|0);
 $1 = load4($args);
 ; store8($ref$tmp,i64_const(0,0),4); store4($ref$tmp+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp,$arraydecay$i,$1);
 $arraydecay$i1 = ((($args1)) + 4|0);
 $2 = load4($args1);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp3,$arraydecay$i1,$2);
 FUNCTION_TABLE_viii[$0 & 7]($wireThis,$ref$tmp,$ref$tmp3);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp3);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIjNS_9allocatorIjEEE9push_backERKj($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$sroa$speculated$$i$i = 0, $$sroa$speculated$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__end_ = 0, $__first_$i$i$i = 0, $add$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr5$i$i = 0;
 var $call$i$i$i$i$i = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i22$i = 0, $cmp3$i$i = 0, $cond$i$i = 0, $exception$i$i$i$i = 0, $idx$neg$i$i$i = 0, $incdec$ptr = 0, $incdec$ptr$i = 0, $mul$i$i = 0, $mul$i$i$i$i = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$i$i$i$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i$i$i$i = 0, $tobool$i12$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $__end_ = ((($this)) + 4|0);
 $0 = load4($__end_);
 $__first_$i$i$i = ((($this)) + 8|0);
 $1 = load4($__first_$i$i$i);
 $cmp = ($0|0)==($1|0);
 $2 = $1;
 if (!($cmp)) {
  $3 = load4($__x);
  store4($0,$3);
  $incdec$ptr = ((($0)) + 4|0);
  store4($__end_,$incdec$ptr);
  return;
 }
 $4 = $0;
 $5 = load4($this);
 $sub$ptr$sub$i$i = (($4) - ($5))|0;
 $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 2;
 $add$i = (($sub$ptr$div$i$i) + 1)|0;
 $cmp$i$i = ($add$i>>>0)>(1073741823);
 if ($cmp$i$i) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $sub$ptr$sub$i$i$i$i = (($2) - ($5))|0;
 $sub$ptr$div$i$i$i$i = $sub$ptr$sub$i$i$i$i >> 2;
 $cmp3$i$i = ($sub$ptr$div$i$i$i$i>>>0)<(536870911);
 $mul$i$i = $sub$ptr$sub$i$i$i$i >> 1;
 $cmp$i$i$i$i$i = ($mul$i$i>>>0)<($add$i>>>0);
 $$sroa$speculated$i$i = $cmp$i$i$i$i$i ? $add$i : $mul$i$i;
 $$sroa$speculated$$i$i = $cmp3$i$i ? $$sroa$speculated$i$i : 1073741823;
 $cmp$i22$i = ($$sroa$speculated$$i$i|0)==(0);
 do {
  if ($cmp$i22$i) {
   $cond$i$i = 0;
  } else {
   $cmp$i$i$i$i = ($$sroa$speculated$$i$i>>>0)>(1073741823);
   if ($cmp$i$i$i$i) {
    $exception$i$i$i$i = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($exception$i$i$i$i);
    ___cxa_throw(($exception$i$i$i$i|0),(1400|0),(6|0));
    // unreachable;
   } else {
    $mul$i$i$i$i = $$sroa$speculated$$i$i << 2;
    $call$i$i$i$i$i = (__Znwj($mul$i$i$i$i)|0);
    $cond$i$i = $call$i$i$i$i$i;
    break;
   }
  }
 } while(0);
 $add$ptr$i$i = (($cond$i$i) + ($sub$ptr$div$i$i<<2)|0);
 $add$ptr5$i$i = (($cond$i$i) + ($$sroa$speculated$$i$i<<2)|0);
 $6 = $add$ptr5$i$i;
 $7 = load4($__x);
 store4($add$ptr$i$i,$7);
 $incdec$ptr$i = ((($add$ptr$i$i)) + 4|0);
 $8 = $incdec$ptr$i;
 $idx$neg$i$i$i = (0 - ($sub$ptr$div$i$i))|0;
 $add$ptr$i$i$i = (($add$ptr$i$i) + ($idx$neg$i$i$i<<2)|0);
 $9 = $add$ptr$i$i$i;
 $cmp$i$i$i = ($sub$ptr$sub$i$i|0)>(0);
 if ($cmp$i$i$i) {
  $10 = $5;
  _memcpy(($add$ptr$i$i$i|0),($10|0),($sub$ptr$sub$i$i|0))|0;
 }
 store4($this,$9);
 store4($__end_,$8);
 store4($__first_$i$i$i,$6);
 $tobool$i12$i = ($5|0)==(0);
 if ($tobool$i12$i) {
  return;
 }
 $11 = $5;
 __ZdlPv($11);
 return;
}
function __ZNSt3__26vectorIjNS_9allocatorIjEEE6resizeEjRKj($this,$__sz,$__x) {
 $this = $this|0;
 $__sz = $__sz|0;
 $__x = $__x|0;
 var $$sroa$speculated$$i$i = 0, $$sroa$speculated$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $__end_$i = 0, $__first_$i$i$i$i = 0, $__n$addr$0$i$i = 0, $__n$addr$0$i22$i = 0, $__new_last3$i$i = 0, $add$ptr = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr5$i$i = 0, $call$i$i$i$i$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i25$i = 0, $cmp$i29$i = 0, $cmp$i35$i = 0, $cmp1$i$i = 0;
 var $cmp2 = 0, $cmp3$i$i = 0, $cond$i$i = 0, $dec$i$i = 0, $dec$i24$i = 0, $exception$i$i$i$i = 0, $idx$neg$i$i$i = 0, $incdec$ptr$i$i = 0, $incdec$ptr$i23$i = 0, $mul$i$i = 0, $mul$i$i$i$i = 0, $scevgep$i$i = 0, $scevgep$i$i4 = 0, $scevgep$i27$i = 0, $scevgep5$i$i = 0, $sub = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i$i$i = 0, $sub$ptr$div$i3 = 0, $sub$ptr$sub$i = 0;
 var $sub$ptr$sub$i$i$i$i = 0, $sub$ptr$sub$i2 = 0, $tobool$i15$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__end_$i = ((($this)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($this);
 $sub$ptr$sub$i = (($0) - ($1))|0;
 $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
 $cmp = ($sub$ptr$div$i>>>0)<($__sz>>>0);
 $2 = $1;
 $3 = $0;
 if (!($cmp)) {
  $cmp2 = ($sub$ptr$div$i>>>0)>($__sz>>>0);
  if (!($cmp2)) {
   return;
  }
  $add$ptr = (($2) + ($__sz<<2)|0);
  $cmp1$i$i = ($3|0)==($add$ptr|0);
  if ($cmp1$i$i) {
   return;
  }
  $scevgep$i$i = ((($3)) + -4|0);
  $14 = $scevgep$i$i;
  $__new_last3$i$i = $add$ptr;
  $15 = (($14) - ($__new_last3$i$i))|0;
  $16 = $15 >>> 2;
  $17 = $16 ^ -1;
  $scevgep5$i$i = (($3) + ($17<<2)|0);
  store4($__end_$i,$scevgep5$i$i);
  return;
 }
 $sub = (($__sz) - ($sub$ptr$div$i))|0;
 $__first_$i$i$i$i = ((($this)) + 8|0);
 $4 = load4($__first_$i$i$i$i);
 $sub$ptr$sub$i2 = (($4) - ($0))|0;
 $sub$ptr$div$i3 = $sub$ptr$sub$i2 >> 2;
 $cmp$i = ($sub$ptr$div$i3>>>0)<($sub>>>0);
 if (!($cmp$i)) {
  $6 = $3;$__n$addr$0$i$i = $sub;
  while(1) {
   $5 = load4($__x);
   store4($6,$5);
   $incdec$ptr$i$i = ((($6)) + 4|0);
   $dec$i$i = (($__n$addr$0$i$i) + -1)|0;
   $cmp$i$i = ($dec$i$i|0)==(0);
   if ($cmp$i$i) {
    break;
   } else {
    $6 = $incdec$ptr$i$i;$__n$addr$0$i$i = $dec$i$i;
   }
  }
  $scevgep$i$i4 = (($3) + ($sub<<2)|0);
  store4($__end_$i,$scevgep$i$i4);
  return;
 }
 $cmp$i35$i = ($__sz>>>0)>(1073741823);
 if ($cmp$i35$i) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $sub$ptr$sub$i$i$i$i = (($4) - ($1))|0;
 $sub$ptr$div$i$i$i$i = $sub$ptr$sub$i$i$i$i >> 2;
 $cmp3$i$i = ($sub$ptr$div$i$i$i$i>>>0)<(536870911);
 $mul$i$i = $sub$ptr$sub$i$i$i$i >> 1;
 $cmp$i$i$i$i$i = ($mul$i$i>>>0)<($__sz>>>0);
 $$sroa$speculated$i$i = $cmp$i$i$i$i$i ? $__sz : $mul$i$i;
 $$sroa$speculated$$i$i = $cmp3$i$i ? $$sroa$speculated$i$i : 1073741823;
 $cmp$i29$i = ($$sroa$speculated$$i$i|0)==(0);
 do {
  if ($cmp$i29$i) {
   $cond$i$i = 0;
  } else {
   $cmp$i$i$i$i = ($$sroa$speculated$$i$i>>>0)>(1073741823);
   if ($cmp$i$i$i$i) {
    $exception$i$i$i$i = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($exception$i$i$i$i);
    ___cxa_throw(($exception$i$i$i$i|0),(1400|0),(6|0));
    // unreachable;
   } else {
    $mul$i$i$i$i = $$sroa$speculated$$i$i << 2;
    $call$i$i$i$i$i = (__Znwj($mul$i$i$i$i)|0);
    $cond$i$i = $call$i$i$i$i$i;
    break;
   }
  }
 } while(0);
 $add$ptr$i$i = (($cond$i$i) + ($sub$ptr$div$i<<2)|0);
 $8 = $add$ptr$i$i;$__n$addr$0$i22$i = $sub;
 while(1) {
  $7 = load4($__x);
  store4($8,$7);
  $incdec$ptr$i23$i = ((($8)) + 4|0);
  $dec$i24$i = (($__n$addr$0$i22$i) + -1)|0;
  $cmp$i25$i = ($dec$i24$i|0)==(0);
  if ($cmp$i25$i) {
   break;
  } else {
   $8 = $incdec$ptr$i23$i;$__n$addr$0$i22$i = $dec$i24$i;
  }
 }
 $add$ptr5$i$i = (($cond$i$i) + ($$sroa$speculated$$i$i<<2)|0);
 $9 = $add$ptr5$i$i;
 $scevgep$i27$i = (($add$ptr$i$i) + ($sub<<2)|0);
 $10 = $scevgep$i27$i;
 $idx$neg$i$i$i = (0 - ($sub$ptr$div$i))|0;
 $add$ptr$i$i$i = (($add$ptr$i$i) + ($idx$neg$i$i$i<<2)|0);
 $11 = $add$ptr$i$i$i;
 $cmp$i$i$i = ($sub$ptr$sub$i|0)>(0);
 if ($cmp$i$i$i) {
  $12 = $1;
  _memcpy(($add$ptr$i$i$i|0),($12|0),($sub$ptr$sub$i|0))|0;
 }
 store4($this,$11);
 store4($__end_$i,$10);
 store4($__first_$i$i$i$i,$9);
 $tobool$i15$i = ($1|0)==(0);
 if ($tobool$i15$i) {
  return;
 }
 $13 = $1;
 __ZdlPv($13);
 return;
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3getERKS6_j($v,$index) {
 $v = $v|0;
 $index = $index|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $__end_$i = 0, $argv$i = 0, $arrayidx$i = 0, $call4$i = 0, $cmp = 0, $retval$sroa$0$0 = 0, $sub$ptr$div$i = 0, $sub$ptr$sub$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $argv$i = sp;
 $__end_$i = ((($v)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($v);
 $sub$ptr$sub$i = (($0) - ($1))|0;
 $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
 $cmp = ($sub$ptr$div$i>>>0)>($index>>>0);
 if (!($cmp)) {
  $retval$sroa$0$0 = (1);
  STACKTOP = sp;return ($retval$sroa$0$0|0);
 }
 $2 = $1;
 $arrayidx$i = (($2) + ($index<<2)|0);
 $3 = load4($arrayidx$i);
 store4($argv$i,$3);
 $call4$i = (__emval_take_value((1568|0),($argv$i|0))|0);
 $retval$sroa$0$0 = $call4$i;
 STACKTOP = sp;return ($retval$sroa$0$0|0);
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3setERS6_jRKj($v,$index,$value) {
 $v = $v|0;
 $index = $index|0;
 $value = $value|0;
 var $0 = 0, $1 = 0, $arrayidx$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($value);
 $1 = load4($v);
 $arrayidx$i = (($1) + ($index<<2)|0);
 store4($arrayidx$i,$0);
 return 1;
}
function __ZN10emscripten8internal13getActualTypeINSt3__26vectorIjNS2_9allocatorIjEEEEEEPKvPT_($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1136|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__26vectorIjNS2_9allocatorIjEEEEEEvPT_($ptr) {
 $ptr = $ptr|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $__end_$i$i$i = 0, $cmp$i = 0, $cmp1$i$i$i = 0, $isnull = 0, $scevgep$i$i$i = 0, $scevgep5$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $isnull = ($ptr|0)==(0|0);
 if ($isnull) {
  return;
 }
 $0 = load4($ptr);
 $cmp$i = ($0|0)==(0|0);
 if (!($cmp$i)) {
  $__end_$i$i$i = ((($ptr)) + 4|0);
  $1 = load4($__end_$i$i$i);
  $cmp1$i$i$i = ($1|0)==($0|0);
  if (!($cmp1$i$i$i)) {
   $scevgep$i$i$i = ((($1)) + -4|0);
   $2 = $scevgep$i$i$i;
   $3 = $0;
   $4 = (($2) - ($3))|0;
   $5 = $4 >>> 2;
   $6 = $5 ^ -1;
   $scevgep5$i$i$i = (($1) + ($6<<2)|0);
   store4($__end_$i$i$i,$scevgep5$i$i$i);
  }
  __ZdlPv($0);
 }
 __ZdlPv($ptr);
 return;
}
function __ZN10emscripten8internal12operator_newINSt3__26vectorIjNS2_9allocatorIjEEEEJEEEPT_DpOT0_() {
 var $__end_$i$i = 0, $__end_cap_$i$i = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__Znwj(12)|0);
 store4($call,0);
 $__end_$i$i = ((($call)) + 4|0);
 store4($__end_$i$i,0);
 $__end_cap_$i$i = ((($call)) + 8|0);
 store4($__end_cap_$i$i,0);
 return ($call|0);
}
function __ZN10emscripten8internal7InvokerIPNSt3__26vectorIjNS2_9allocatorIjEEEEJEE6invokeEPFS7_vE($fn) {
 $fn = $fn|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (FUNCTION_TABLE_i[$fn & 3]()|0);
 return ($call|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvRKjEvPS6_JS8_EE6invokeERKSA_SB_j($method,$wireThis,$args) {
 $method = $method|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 var $$elt1 = 0, $$unpack = 0, $$unpack2 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $ref$tmp = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 $$unpack = load4($method);
 $$elt1 = ((($method)) + 4|0);
 $$unpack2 = load4($$elt1);
 $memptr$adj$shifted = $$unpack2 >> 1;
 $0 = (($wireThis) + ($memptr$adj$shifted)|0);
 $1 = $$unpack2 & 1;
 $memptr$isvirtual = ($1|0)==(0);
 if ($memptr$isvirtual) {
  $memptr$nonvirtualfn = $$unpack;
  $3 = $memptr$nonvirtualfn;
 } else {
  $vtable = load4($0);
  $2 = (($vtable) + ($$unpack)|0);
  $memptr$virtualfn = load4($2);
  $3 = $memptr$virtualfn;
 }
 store4($ref$tmp,$args);
 FUNCTION_TABLE_vii[$3 & 7]($0,$ref$tmp);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvjRKjEvPS6_JjS8_EE6invokeERKSA_SB_jj($method,$wireThis,$args,$args1) {
 $method = $method|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $$elt1 = 0, $$unpack = 0, $$unpack2 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $ref$tmp = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 $$unpack = load4($method);
 $$elt1 = ((($method)) + 4|0);
 $$unpack2 = load4($$elt1);
 $memptr$adj$shifted = $$unpack2 >> 1;
 $0 = (($wireThis) + ($memptr$adj$shifted)|0);
 $1 = $$unpack2 & 1;
 $memptr$isvirtual = ($1|0)==(0);
 if ($memptr$isvirtual) {
  $memptr$nonvirtualfn = $$unpack;
  $3 = $memptr$nonvirtualfn;
 } else {
  $vtable = load4($0);
  $2 = (($vtable) + ($$unpack)|0);
  $memptr$virtualfn = load4($2);
  $3 = $memptr$virtualfn;
 }
 store4($ref$tmp,$args1);
 FUNCTION_TABLE_viii[$3 & 7]($0,$args,$ref$tmp);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEKFjvEjPKS6_JEE6invokeERKS8_SA_($method,$wireThis) {
 $method = $method|0;
 $wireThis = $wireThis|0;
 var $$elt1 = 0, $$unpack = 0, $$unpack2 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $call1 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($method);
 $$elt1 = ((($method)) + 4|0);
 $$unpack2 = load4($$elt1);
 $memptr$adj$shifted = $$unpack2 >> 1;
 $0 = (($wireThis) + ($memptr$adj$shifted)|0);
 $1 = $$unpack2 & 1;
 $memptr$isvirtual = ($1|0)==(0);
 if ($memptr$isvirtual) {
  $memptr$nonvirtualfn = $$unpack;
  $3 = $memptr$nonvirtualfn;
  $call1 = (FUNCTION_TABLE_ii[$3 & 15]($0)|0);
  return ($call1|0);
 } else {
  $vtable = load4($0);
  $2 = (($vtable) + ($$unpack)|0);
  $memptr$virtualfn = load4($2);
  $3 = $memptr$virtualfn;
  $call1 = (FUNCTION_TABLE_ii[$3 & 15]($0)|0);
  return ($call1|0);
 }
 return (0)|0;
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorIjNS3_9allocatorIjEEEEjES2_S9_JjEE6invokeEPSB_PS7_j($function,$wireThis,$args) {
 $function = $function|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 var $0 = 0, $call2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($function);
 $call2 = (FUNCTION_TABLE_iii[$0 & 15]($wireThis,$args)|0);
 __emval_incref(($call2|0));
 __emval_decref(($call2|0));
 return ($call2|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorIjNS2_9allocatorIjEEEEjRKjEbS7_JjS9_EE6invokeEPSB_PS6_jj($function,$wireThis,$args,$args1) {
 $function = $function|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $call5 = 0, $ref$tmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 $0 = load4($function);
 store4($ref$tmp,$args1);
 $call5 = (FUNCTION_TABLE_iiii[$0 & 31]($wireThis,$args,$ref$tmp)|0);
 STACKTOP = sp;return ($call5|0);
}
function __ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($this,$__k) {
 $this = $this|0;
 $__k = $__k|0;
 var $$sink$be = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i22 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i = 0, $__size_$i$i$i$i$i$i10 = 0, $__size_$i$i5$i$i$i$i16 = 0, $__size_$i3$i$i$i$i$i12 = 0, $__size_$i3$i7$i$i$i$i18 = 0, $__value_ = 0;
 var $call$i$i$i$i$i = 0, $call$i$i$i$i$i30 = 0, $cmp = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i21 = 0, $cmp$i$i$i$i$i23 = 0, $cmp$i$i$i$i31 = 0, $cmp$i$i$i38 = 0, $cmp47 = 0, $cmp8$i$i$i$i33 = 0, $cond$i$i$i$i$i$i = 0, $cond$i$i$i$i$i14 = 0, $cond$i$i22$i$i$i$i = 0, $cond$i$i22$i$i$i$i29 = 0, $cond$i11$i$i$i$i20 = 0, $conv$i$i$i$i$i$i13 = 0, $conv$i$i9$i$i$i$i19 = 0;
 var $retval$0 = 0, $tobool$i$i$i$i$i$i11 = 0, $tobool$i$i6$i$i$i$i17 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i = ((($this)) + 4|0);
 $0 = load4($__first_$i$i$i);
 $cmp47 = ($0|0)==(0|0);
 if ($cmp47) {
  $retval$0 = 0;
  return ($retval$0|0);
 }
 $__size_$i$i$i$i$i$i10 = ((($__k)) + 11|0);
 $1 = load1($__size_$i$i$i$i$i$i10);
 $tobool$i$i$i$i$i$i11 = ($1<<24>>24)<(0);
 $__size_$i3$i$i$i$i$i12 = ((($__k)) + 4|0);
 $2 = load4($__size_$i3$i$i$i$i$i12);
 $conv$i$i$i$i$i$i13 = $1&255;
 $cond$i$i$i$i$i14 = $tobool$i$i$i$i$i$i11 ? $2 : $conv$i$i$i$i$i$i13;
 $3 = load4($__k);
 $cond$i$i22$i$i$i$i = $tobool$i$i$i$i$i$i11 ? $3 : $__k;
 $4 = $0;
 while(1) {
  $__value_ = ((($4)) + 16|0);
  $__size_$i$i5$i$i$i$i16 = ((($__value_)) + 11|0);
  $5 = load1($__size_$i$i5$i$i$i$i16);
  $tobool$i$i6$i$i$i$i17 = ($5<<24>>24)<(0);
  $__size_$i3$i7$i$i$i$i18 = ((($4)) + 20|0);
  $6 = load4($__size_$i3$i7$i$i$i$i18);
  $conv$i$i9$i$i$i$i19 = $5&255;
  $cond$i11$i$i$i$i20 = $tobool$i$i6$i$i$i$i17 ? $6 : $conv$i$i9$i$i$i$i19;
  $cmp$i$i$i$i$i$i$i21 = ($cond$i11$i$i$i$i20>>>0)<($cond$i$i$i$i$i14>>>0);
  $$sroa$speculated$i$i$i$i22 = $cmp$i$i$i$i$i$i$i21 ? $cond$i11$i$i$i$i20 : $cond$i$i$i$i$i14;
  $cmp$i$i$i$i$i23 = ($$sroa$speculated$i$i$i$i22|0)==(0);
  if ($cmp$i$i$i$i$i23) {
   label = 5;
  } else {
   $7 = load4($__value_);
   $cond$i$i22$i$i$i$i29 = $tobool$i$i6$i$i$i$i17 ? $7 : $__value_;
   $call$i$i$i$i$i30 = (_memcmp($cond$i$i22$i$i$i$i,$cond$i$i22$i$i$i$i29,$$sroa$speculated$i$i$i$i22)|0);
   $cmp$i$i$i$i31 = ($call$i$i$i$i$i30|0)==(0);
   if ($cmp$i$i$i$i31) {
    label = 5;
   } else {
    $cmp$i$i$i38 = ($call$i$i$i$i$i30|0)<(0);
    if ($cmp$i$i$i38) {
     label = 7;
    } else {
     label = 8;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $cmp8$i$i$i$i33 = ($cond$i$i$i$i$i14>>>0)<($cond$i11$i$i$i$i20>>>0);
   if ($cmp8$i$i$i$i33) {
    label = 7;
   } else {
    label = 8;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $$sink$be = $4;
  }
  else if ((label|0) == 8) {
   label = 0;
   $cmp$i$i$i$i$i$i$i = ($cond$i$i$i$i$i14>>>0)<($cond$i11$i$i$i$i20>>>0);
   $$sroa$speculated$i$i$i$i = $cmp$i$i$i$i$i$i$i ? $cond$i$i$i$i$i14 : $cond$i11$i$i$i$i20;
   $cmp$i$i$i$i$i = ($$sroa$speculated$i$i$i$i|0)==(0);
   if ($cmp$i$i$i$i$i) {
    label = 10;
   } else {
    $8 = load4($__value_);
    $cond$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i17 ? $8 : $__value_;
    $call$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i,$cond$i$i22$i$i$i$i,$$sroa$speculated$i$i$i$i)|0);
    $cmp$i$i$i$i = ($call$i$i$i$i$i|0)==(0);
    if ($cmp$i$i$i$i) {
     label = 10;
    } else {
     $cmp$i$i$i = ($call$i$i$i$i$i|0)<(0);
     if (!($cmp$i$i$i)) {
      $retval$0 = 1;
      label = 14;
      break;
     }
    }
   }
   if ((label|0) == 10) {
    label = 0;
    if (!($cmp$i$i$i$i$i$i$i21)) {
     $retval$0 = 1;
     label = 14;
     break;
    }
   }
   $9 = ((($4)) + 4|0);
   $$sink$be = $9;
  }
  $10 = load4($$sink$be);
  $cmp = ($10|0)==(0|0);
  if ($cmp) {
   $retval$0 = 0;
   label = 14;
   break;
  } else {
   $4 = $10;
  }
 }
 if ((label|0) == 14) {
  return ($retval$0|0);
 }
 return (0)|0;
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($this,$__parent,$__k) {
 $this = $this|0;
 $__parent = $__parent|0;
 $__k = $__k|0;
 var $$sink = 0, $$sroa$speculated$i$i$i = 0, $$sroa$speculated$i$i$i30 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i = 0, $__nd$0 = 0, $__size_$i$i$i$i$i18 = 0, $__size_$i$i5$i$i$i24 = 0, $__size_$i3$i$i$i$i20 = 0, $__size_$i3$i7$i$i$i26 = 0;
 var $call$i$i$i$i = 0, $call$i$i$i$i38 = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i29 = 0, $cmp$i$i$i$i31 = 0, $cmp$i$i$i39 = 0, $cmp$i$i46 = 0, $cmp20 = 0, $cmp7 = 0, $cmp8$i$i$i41 = 0, $cond$i$i$i$i$i = 0, $cond$i$i$i$i22 = 0, $cond$i$i22$i$i$i = 0, $cond$i$i22$i$i$i37 = 0, $cond$i11$i$i$i28 = 0, $conv$i$i$i$i$i21 = 0;
 var $conv$i$i9$i$i$i27 = 0, $first = 0, $retval$0 = 0, $tobool$i$i$i$i$i19 = 0, $tobool$i$i6$i$i$i25 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i$i = ((($this)) + 4|0);
 $0 = load4($__first_$i$i$i$i);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  store4($__parent,$__first_$i$i$i$i);
  $retval$0 = $__first_$i$i$i$i;
  return ($retval$0|0);
 }
 $__size_$i$i$i$i$i18 = ((($__k)) + 11|0);
 $1 = load1($__size_$i$i$i$i$i18);
 $tobool$i$i$i$i$i19 = ($1<<24>>24)<(0);
 $__size_$i3$i$i$i$i20 = ((($__k)) + 4|0);
 $2 = load4($__size_$i3$i$i$i$i20);
 $conv$i$i$i$i$i21 = $1&255;
 $cond$i$i$i$i22 = $tobool$i$i$i$i$i19 ? $2 : $conv$i$i$i$i$i21;
 $3 = load4($__k);
 $cond$i$i22$i$i$i = $tobool$i$i$i$i$i19 ? $3 : $__k;
 $__nd$0 = $0;
 while(1) {
  $first = ((($__nd$0)) + 16|0);
  $__size_$i$i5$i$i$i24 = ((($first)) + 11|0);
  $4 = load1($__size_$i$i5$i$i$i24);
  $tobool$i$i6$i$i$i25 = ($4<<24>>24)<(0);
  $__size_$i3$i7$i$i$i26 = ((($__nd$0)) + 20|0);
  $5 = load4($__size_$i3$i7$i$i$i26);
  $conv$i$i9$i$i$i27 = $4&255;
  $cond$i11$i$i$i28 = $tobool$i$i6$i$i$i25 ? $5 : $conv$i$i9$i$i$i27;
  $cmp$i$i$i$i$i$i29 = ($cond$i11$i$i$i28>>>0)<($cond$i$i$i$i22>>>0);
  $$sroa$speculated$i$i$i30 = $cmp$i$i$i$i$i$i29 ? $cond$i11$i$i$i28 : $cond$i$i$i$i22;
  $cmp$i$i$i$i31 = ($$sroa$speculated$i$i$i30|0)==(0);
  if ($cmp$i$i$i$i31) {
   label = 5;
  } else {
   $6 = load4($first);
   $cond$i$i22$i$i$i37 = $tobool$i$i6$i$i$i25 ? $6 : $first;
   $call$i$i$i$i38 = (_memcmp($cond$i$i22$i$i$i,$cond$i$i22$i$i$i37,$$sroa$speculated$i$i$i30)|0);
   $cmp$i$i$i39 = ($call$i$i$i$i38|0)==(0);
   if ($cmp$i$i$i39) {
    label = 5;
   } else {
    $cmp$i$i46 = ($call$i$i$i$i38|0)<(0);
    if ($cmp$i$i46) {
     label = 7;
    } else {
     label = 9;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $cmp8$i$i$i41 = ($cond$i$i$i$i22>>>0)<($cond$i11$i$i$i28>>>0);
   if ($cmp8$i$i$i41) {
    label = 7;
   } else {
    label = 9;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $7 = load4($__nd$0);
   $cmp7 = ($7|0)==(0|0);
   if ($cmp7) {
    label = 8;
    break;
   } else {
    $$sink = $7;
   }
  }
  else if ((label|0) == 9) {
   label = 0;
   $cmp$i$i$i$i$i$i = ($cond$i$i$i$i22>>>0)<($cond$i11$i$i$i28>>>0);
   $$sroa$speculated$i$i$i = $cmp$i$i$i$i$i$i ? $cond$i$i$i$i22 : $cond$i11$i$i$i28;
   $cmp$i$i$i$i = ($$sroa$speculated$i$i$i|0)==(0);
   if ($cmp$i$i$i$i) {
    label = 11;
   } else {
    $8 = load4($first);
    $cond$i$i$i$i$i = $tobool$i$i6$i$i$i25 ? $8 : $first;
    $call$i$i$i$i = (_memcmp($cond$i$i$i$i$i,$cond$i$i22$i$i$i,$$sroa$speculated$i$i$i)|0);
    $cmp$i$i$i = ($call$i$i$i$i|0)==(0);
    if ($cmp$i$i$i) {
     label = 11;
    } else {
     $cmp$i$i = ($call$i$i$i$i|0)<(0);
     if (!($cmp$i$i)) {
      label = 16;
      break;
     }
    }
   }
   if ((label|0) == 11) {
    label = 0;
    if (!($cmp$i$i$i$i$i$i29)) {
     label = 16;
     break;
    }
   }
   $9 = ((($__nd$0)) + 4|0);
   $10 = load4($9);
   $cmp20 = ($10|0)==(0|0);
   if ($cmp20) {
    label = 15;
    break;
   } else {
    $$sink = $10;
   }
  }
  $__nd$0 = $$sink;
 }
 if ((label|0) == 8) {
  store4($__parent,$__nd$0);
  $retval$0 = $__nd$0;
  return ($retval$0|0);
 }
 else if ((label|0) == 15) {
  store4($__parent,$__nd$0);
  $retval$0 = $9;
  return ($retval$0|0);
 }
 else if ((label|0) == 16) {
  store4($__parent,$__nd$0);
  $retval$0 = $__parent;
  return ($retval$0|0);
 }
 return (0)|0;
}
function __ZNSt3__26vectorIP5VNodeNS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$sroa$speculated$$i = 0, $$sroa$speculated$i = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $__end_$i = 0, $__first_$i$i$i$i$i$i = 0, $add = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr5$i = 0, $call$i$i$i$i = 0, $cmp$i = 0, $cmp$i$i = 0;
 var $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i22 = 0, $cmp3$i = 0, $cond$i = 0, $exception$i$i$i = 0, $idx$neg$i$i = 0, $incdec$ptr = 0, $mul$i = 0, $mul$i$i$i = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i$i = 0, $tobool$i12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__end_$i = ((($this)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($this);
 $sub$ptr$sub$i = (($0) - ($1))|0;
 $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
 $add = (($sub$ptr$div$i) + 1)|0;
 $cmp$i = ($add>>>0)>(1073741823);
 if ($cmp$i) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $__first_$i$i$i$i$i$i = ((($this)) + 8|0);
 $2 = load4($__first_$i$i$i$i$i$i);
 $sub$ptr$sub$i$i$i = (($2) - ($1))|0;
 $sub$ptr$div$i$i$i = $sub$ptr$sub$i$i$i >> 2;
 $cmp3$i = ($sub$ptr$div$i$i$i>>>0)<(536870911);
 $mul$i = $sub$ptr$sub$i$i$i >> 1;
 $cmp$i$i$i$i = ($mul$i>>>0)<($add>>>0);
 $$sroa$speculated$i = $cmp$i$i$i$i ? $add : $mul$i;
 $$sroa$speculated$$i = $cmp3$i ? $$sroa$speculated$i : 1073741823;
 $cmp$i22 = ($$sroa$speculated$$i|0)==(0);
 do {
  if ($cmp$i22) {
   $cond$i = 0;
  } else {
   $cmp$i$i$i = ($$sroa$speculated$$i>>>0)>(1073741823);
   if ($cmp$i$i$i) {
    $exception$i$i$i = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($exception$i$i$i);
    ___cxa_throw(($exception$i$i$i|0),(1400|0),(6|0));
    // unreachable;
   } else {
    $mul$i$i$i = $$sroa$speculated$$i << 2;
    $call$i$i$i$i = (__Znwj($mul$i$i$i)|0);
    $cond$i = $call$i$i$i$i;
    break;
   }
  }
 } while(0);
 $add$ptr$i = (($cond$i) + ($sub$ptr$div$i<<2)|0);
 $add$ptr5$i = (($cond$i) + ($$sroa$speculated$$i<<2)|0);
 $3 = $add$ptr5$i;
 $4 = load4($__x);
 store4($add$ptr$i,$4);
 $incdec$ptr = ((($add$ptr$i)) + 4|0);
 $5 = $incdec$ptr;
 $idx$neg$i$i = (0 - ($sub$ptr$div$i))|0;
 $add$ptr$i$i = (($add$ptr$i) + ($idx$neg$i$i<<2)|0);
 $6 = $add$ptr$i$i;
 $cmp$i$i = ($sub$ptr$sub$i|0)>(0);
 if ($cmp$i$i) {
  $7 = $1;
  _memcpy(($add$ptr$i$i|0),($7|0),($sub$ptr$sub$i|0))|0;
 }
 store4($this,$6);
 store4($__end_$i,$5);
 store4($__first_$i$i$i$i$i$i,$3);
 $tobool$i12 = ($1|0)==(0);
 if ($tobool$i12) {
  return;
 }
 $8 = $1;
 __ZdlPv($8);
 return;
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEE6invokeEPFjSA_EPNS0_11BindingTypeIS8_EUt_E($fn,$args) {
 $fn = $fn|0;
 $args = $args|0;
 var $0 = 0, $arraydecay$i = 0, $call = 0, $ref$tmp1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp1 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp1,i64_const(0,0),4); store4($ref$tmp1+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp1,$arraydecay$i,$0);
 $call = (FUNCTION_TABLE_ii[$fn & 15]($ref$tmp1)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp1);
 STACKTOP = sp;return ($call|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKbEE6invokeEPFjSA_SC_EPNS0_11BindingTypeIS8_EUt_Eb($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $arraydecay$i = 0, $call7 = 0, $frombool5 = 0, $ref$tmp3 = 0, $ref$tmp4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp3 = sp;
 $ref$tmp4 = sp + 12|0;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp3,$arraydecay$i,$0);
 $frombool5 = $args1&1;
 store1($ref$tmp4,$frombool5);
 $call7 = (FUNCTION_TABLE_iii[$fn & 15]($ref$tmp3,$ref$tmp4)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp3);
 STACKTOP = sp;return ($call7|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKjEE6invokeEPFjSA_SC_EPNS0_11BindingTypeIS8_EUt_Ej($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $arraydecay$i = 0, $call6 = 0, $ref$tmp3 = 0, $ref$tmp4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp3 = sp + 4|0;
 $ref$tmp4 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp3,$arraydecay$i,$0);
 store4($ref$tmp4,$args1);
 $call6 = (FUNCTION_TABLE_iii[$fn & 15]($ref$tmp3,$ref$tmp4)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp3);
 STACKTOP = sp;return ($call6|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEESA_EE6invokeEPFjSA_SA_EPNS0_11BindingTypeIS8_EUt_ESH_($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $1 = 0, $arraydecay$i = 0, $arraydecay$i1 = 0, $call = 0, $ref$tmp3 = 0, $ref$tmp4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $ref$tmp3 = sp + 12|0;
 $ref$tmp4 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp3,$arraydecay$i,$0);
 $arraydecay$i1 = ((($args1)) + 4|0);
 $1 = load4($args1);
 ; store8($ref$tmp4,i64_const(0,0),4); store4($ref$tmp4+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp4,$arraydecay$i1,$1);
 $call = (FUNCTION_TABLE_iii[$fn & 15]($ref$tmp3,$ref$tmp4)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp3);
 STACKTOP = sp;return ($call|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_3mapIS8_S8_NS2_4lessIS8_EENS6_INS2_4pairIS9_S8_EEEEEEEE6invokeEPFjSA_SJ_EPNS0_11BindingTypeIS8_EUt_EPSH_($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $arraydecay$i = 0, $call5 = 0, $ref$tmp3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp3 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp3,$arraydecay$i,$0);
 $call5 = (FUNCTION_TABLE_iii[$fn & 15]($ref$tmp3,$args1)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp3);
 STACKTOP = sp;return ($call5|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SF_EPNS0_11BindingTypeIS8_EUt_EPSD_($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $arraydecay$i = 0, $call5 = 0, $ref$tmp3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp3 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp3,$arraydecay$i,$0);
 $call5 = (FUNCTION_TABLE_iii[$fn & 15]($ref$tmp3,$args1)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp3);
 STACKTOP = sp;return ($call5|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_3mapIS8_S8_NS2_4lessIS8_EENS6_INS2_4pairIS9_S8_EEEEEERKjEE6invokeEPFjSA_SJ_SL_EPNS0_11BindingTypeIS8_EUt_EPSH_j($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $0 = 0, $arraydecay$i = 0, $call11 = 0, $ref$tmp5 = 0, $ref$tmp6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp5 = sp + 4|0;
 $ref$tmp6 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp5,i64_const(0,0),4); store4($ref$tmp5+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp5,$arraydecay$i,$0);
 store4($ref$tmp6,$args3);
 $call11 = (FUNCTION_TABLE_iiii[$fn & 31]($ref$tmp5,$args1,$ref$tmp6)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp5);
 STACKTOP = sp;return ($call11|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_3mapIS8_S8_NS2_4lessIS8_EENS6_INS2_4pairIS9_S8_EEEEEESA_EE6invokeEPFjSA_SJ_SA_EPNS0_11BindingTypeIS8_EUt_EPSH_SQ_($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $0 = 0, $1 = 0, $arraydecay$i = 0, $arraydecay$i1 = 0, $call11 = 0, $ref$tmp5 = 0, $ref$tmp6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $ref$tmp5 = sp + 12|0;
 $ref$tmp6 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp5,i64_const(0,0),4); store4($ref$tmp5+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp5,$arraydecay$i,$0);
 $arraydecay$i1 = ((($args3)) + 4|0);
 $1 = load4($args3);
 ; store8($ref$tmp6,i64_const(0,0),4); store4($ref$tmp6+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp6,$arraydecay$i1,$1);
 $call11 = (FUNCTION_TABLE_iiii[$fn & 31]($ref$tmp5,$args1,$ref$tmp6)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp6);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp5);
 STACKTOP = sp;return ($call11|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_3mapIS8_S8_NS2_4lessIS8_EENS6_INS2_4pairIS9_S8_EEEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SJ_SO_EPNS0_11BindingTypeIS8_EUt_EPSH_PSM_($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $0 = 0, $arraydecay$i = 0, $call9 = 0, $ref$tmp5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp5 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp5,i64_const(0,0),4); store4($ref$tmp5+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp5,$arraydecay$i,$0);
 $call9 = (FUNCTION_TABLE_iiii[$fn & 31]($ref$tmp5,$args1,$args3)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp5);
 STACKTOP = sp;return ($call9|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_3mapIS8_S8_NS2_4lessIS8_EENS6_INS2_4pairIS9_S8_EEEEEEiEE6invokeEPFjSA_SJ_iEPNS0_11BindingTypeIS8_EUt_EPSH_i($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $0 = 0, $arraydecay$i = 0, $call9 = 0, $ref$tmp5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp5 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp5,i64_const(0,0),4); store4($ref$tmp5+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp5,$arraydecay$i,$0);
 $call9 = (FUNCTION_TABLE_iiii[$fn & 31]($ref$tmp5,$args1,$args3)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp5);
 STACKTOP = sp;return ($call9|0);
}
function __ZN10emscripten8internal7InvokerIvJRKjEE6invokeEPFvS3_Ej($fn,$args) {
 $fn = $fn|0;
 $args = $args|0;
 var $ref$tmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 store4($ref$tmp,$args);
 FUNCTION_TABLE_vi[$fn & 31]($ref$tmp);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal7InvokerIvJRKjS3_EE6invokeEPFvS3_S3_Ejj($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $ref$tmp = 0, $ref$tmp3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp + 4|0;
 $ref$tmp3 = sp;
 store4($ref$tmp,$args);
 store4($ref$tmp3,$args1);
 FUNCTION_TABLE_vii[$fn & 7]($ref$tmp,$ref$tmp3);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal7InvokerIvJRKjS3_S3_EE6invokeEPFvS3_S3_S3_Ejjj($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $ref$tmp = 0, $ref$tmp5 = 0, $ref$tmp7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp + 8|0;
 $ref$tmp5 = sp + 4|0;
 $ref$tmp7 = sp;
 store4($ref$tmp,$args);
 store4($ref$tmp5,$args1);
 store4($ref$tmp7,$args3);
 FUNCTION_TABLE_viii[$fn & 7]($ref$tmp,$ref$tmp5,$ref$tmp7);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal7InvokerIiJRKjEE6invokeEPFiS3_Ej($fn,$args) {
 $fn = $fn|0;
 $args = $args|0;
 var $call2 = 0, $ref$tmp1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp1 = sp;
 store4($ref$tmp1,$args);
 $call2 = (FUNCTION_TABLE_ii[$fn & 15]($ref$tmp1)|0);
 STACKTOP = sp;return ($call2|0);
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiNS_4lessIS6_EENS4_INS_4pairIKS6_iEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($this,$__parent,$__k) {
 $this = $this|0;
 $__parent = $__parent|0;
 $__k = $__k|0;
 var $$sink = 0, $$sroa$speculated$i$i$i = 0, $$sroa$speculated$i$i$i30 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i = 0, $__nd$0 = 0, $__size_$i$i$i$i$i18 = 0, $__size_$i$i5$i$i$i24 = 0, $__size_$i3$i$i$i$i20 = 0, $__size_$i3$i7$i$i$i26 = 0;
 var $call$i$i$i$i = 0, $call$i$i$i$i38 = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i29 = 0, $cmp$i$i$i$i31 = 0, $cmp$i$i$i39 = 0, $cmp$i$i46 = 0, $cmp20 = 0, $cmp7 = 0, $cmp8$i$i$i41 = 0, $cond$i$i$i$i$i = 0, $cond$i$i$i$i22 = 0, $cond$i$i22$i$i$i = 0, $cond$i$i22$i$i$i37 = 0, $cond$i11$i$i$i28 = 0, $conv$i$i$i$i$i21 = 0;
 var $conv$i$i9$i$i$i27 = 0, $first = 0, $retval$0 = 0, $tobool$i$i$i$i$i19 = 0, $tobool$i$i6$i$i$i25 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i$i = ((($this)) + 4|0);
 $0 = load4($__first_$i$i$i$i);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  store4($__parent,$__first_$i$i$i$i);
  $retval$0 = $__first_$i$i$i$i;
  return ($retval$0|0);
 }
 $__size_$i$i$i$i$i18 = ((($__k)) + 11|0);
 $1 = load1($__size_$i$i$i$i$i18);
 $tobool$i$i$i$i$i19 = ($1<<24>>24)<(0);
 $__size_$i3$i$i$i$i20 = ((($__k)) + 4|0);
 $2 = load4($__size_$i3$i$i$i$i20);
 $conv$i$i$i$i$i21 = $1&255;
 $cond$i$i$i$i22 = $tobool$i$i$i$i$i19 ? $2 : $conv$i$i$i$i$i21;
 $3 = load4($__k);
 $cond$i$i22$i$i$i = $tobool$i$i$i$i$i19 ? $3 : $__k;
 $__nd$0 = $0;
 while(1) {
  $first = ((($__nd$0)) + 16|0);
  $__size_$i$i5$i$i$i24 = ((($first)) + 11|0);
  $4 = load1($__size_$i$i5$i$i$i24);
  $tobool$i$i6$i$i$i25 = ($4<<24>>24)<(0);
  $__size_$i3$i7$i$i$i26 = ((($__nd$0)) + 20|0);
  $5 = load4($__size_$i3$i7$i$i$i26);
  $conv$i$i9$i$i$i27 = $4&255;
  $cond$i11$i$i$i28 = $tobool$i$i6$i$i$i25 ? $5 : $conv$i$i9$i$i$i27;
  $cmp$i$i$i$i$i$i29 = ($cond$i11$i$i$i28>>>0)<($cond$i$i$i$i22>>>0);
  $$sroa$speculated$i$i$i30 = $cmp$i$i$i$i$i$i29 ? $cond$i11$i$i$i28 : $cond$i$i$i$i22;
  $cmp$i$i$i$i31 = ($$sroa$speculated$i$i$i30|0)==(0);
  if ($cmp$i$i$i$i31) {
   label = 5;
  } else {
   $6 = load4($first);
   $cond$i$i22$i$i$i37 = $tobool$i$i6$i$i$i25 ? $6 : $first;
   $call$i$i$i$i38 = (_memcmp($cond$i$i22$i$i$i,$cond$i$i22$i$i$i37,$$sroa$speculated$i$i$i30)|0);
   $cmp$i$i$i39 = ($call$i$i$i$i38|0)==(0);
   if ($cmp$i$i$i39) {
    label = 5;
   } else {
    $cmp$i$i46 = ($call$i$i$i$i38|0)<(0);
    if ($cmp$i$i46) {
     label = 7;
    } else {
     label = 9;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $cmp8$i$i$i41 = ($cond$i$i$i$i22>>>0)<($cond$i11$i$i$i28>>>0);
   if ($cmp8$i$i$i41) {
    label = 7;
   } else {
    label = 9;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $7 = load4($__nd$0);
   $cmp7 = ($7|0)==(0|0);
   if ($cmp7) {
    label = 8;
    break;
   } else {
    $$sink = $7;
   }
  }
  else if ((label|0) == 9) {
   label = 0;
   $cmp$i$i$i$i$i$i = ($cond$i$i$i$i22>>>0)<($cond$i11$i$i$i28>>>0);
   $$sroa$speculated$i$i$i = $cmp$i$i$i$i$i$i ? $cond$i$i$i$i22 : $cond$i11$i$i$i28;
   $cmp$i$i$i$i = ($$sroa$speculated$i$i$i|0)==(0);
   if ($cmp$i$i$i$i) {
    label = 11;
   } else {
    $8 = load4($first);
    $cond$i$i$i$i$i = $tobool$i$i6$i$i$i25 ? $8 : $first;
    $call$i$i$i$i = (_memcmp($cond$i$i$i$i$i,$cond$i$i22$i$i$i,$$sroa$speculated$i$i$i)|0);
    $cmp$i$i$i = ($call$i$i$i$i|0)==(0);
    if ($cmp$i$i$i) {
     label = 11;
    } else {
     $cmp$i$i = ($call$i$i$i$i|0)<(0);
     if (!($cmp$i$i)) {
      label = 16;
      break;
     }
    }
   }
   if ((label|0) == 11) {
    label = 0;
    if (!($cmp$i$i$i$i$i$i29)) {
     label = 16;
     break;
    }
   }
   $9 = ((($__nd$0)) + 4|0);
   $10 = load4($9);
   $cmp20 = ($10|0)==(0|0);
   if ($cmp20) {
    label = 15;
    break;
   } else {
    $$sink = $10;
   }
  }
  $__nd$0 = $$sink;
 }
 if ((label|0) == 8) {
  store4($__parent,$__nd$0);
  $retval$0 = $__nd$0;
  return ($retval$0|0);
 }
 else if ((label|0) == 15) {
  store4($__parent,$__nd$0);
  $retval$0 = $9;
  return ($retval$0|0);
 }
 else if ((label|0) == 16) {
  store4($__parent,$__nd$0);
  $retval$0 = $__parent;
  return ($retval$0|0);
 }
 return (0)|0;
}
function __ZN10emscripten8internal7InvokerIvJjjEE6invokeEPFvjjEjj($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 FUNCTION_TABLE_vii[$fn & 7]($args,$args1);
 return;
}
function __GLOBAL__sub_I_asm_dom_cpp() {
 var $$repack4$i$i$i = 0, $$repack4$i$i$i3 = 0, $$repack4$i$i29$i = 0, $$repack4$i$i37$i = 0, $__begin_$i$i$i$i = 0, $__end_$i$i$i$i = 0, $__end_cap_$i$i$i$i = 0, $__first_$i$i$i$i$i$i = 0, $__left_$i$i$i$i$i$i$i = 0, $call$i = 0, $call$i$i$i = 0, $call$i$i$i1 = 0, $call$i$i2$i = 0, $call$i$i27$i = 0, $call$i$i3$i = 0, $call$i$i35$i = 0, $call$i$i38$i = 0, $call$i$i39$i = 0, $props$i$i = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 __embind_register_class((1024|0),(1032|0),(1048|0),(0|0),(4354|0),(4|0),(4357|0),(0|0),(4357|0),(0|0),(2284|0),(4359|0),(14|0));
 __embind_register_class_constructor((1024|0),1,(1624|0),(4354|0),(5|0),(1|0));
 $call$i$i$i = (__Znwj(8)|0);
 store4($call$i$i$i,(6));
 $$repack4$i$i$i = ((($call$i$i$i)) + 4|0);
 store4($$repack4$i$i$i,0);
 __embind_register_class_function((1024|0),(3993|0),2,(1628|0),(4362|0),(1|0),($call$i$i$i|0),0);
 $call$i$i2$i = (__Znwj(4)|0);
 store4($call$i$i2$i,(2));
 __embind_register_class_function((1024|0),(3998|0),3,(1636|0),(4486|0),(6|0),($call$i$i2$i|0),0);
 $call$i$i3$i = (__Znwj(4)|0);
 store4($call$i$i3$i,(1));
 __embind_register_class_function((1024|0),(4002|0),4,(1648|0),(4491|0),(4|0),($call$i$i3$i|0),0);
 __embind_register_class((1136|0),(1160|0),(1176|0),(0|0),(4354|0),(7|0),(4357|0),(0|0),(4357|0),(0|0),(2300|0),(4359|0),(15|0));
 __embind_register_class_constructor((1136|0),1,(1664|0),(4354|0),(8|0),(2|0));
 $call$i$i$i1 = (__Znwj(8)|0);
 store4($call$i$i$i1,(1));
 $$repack4$i$i$i3 = ((($call$i$i$i1)) + 4|0);
 store4($$repack4$i$i$i3,0);
 __embind_register_class_function((1136|0),(4497|0),3,(1668|0),(4706|0),(2|0),($call$i$i$i1|0),0);
 $call$i$i27$i = (__Znwj(8)|0);
 store4($call$i$i27$i,(3));
 $$repack4$i$i29$i = ((($call$i$i27$i)) + 4|0);
 store4($$repack4$i$i29$i,0);
 __embind_register_class_function((1136|0),(4507|0),4,(1680|0),(4491|0),(5|0),($call$i$i27$i|0),0);
 $call$i$i35$i = (__Znwj(8)|0);
 store4($call$i$i35$i,(9));
 $$repack4$i$i37$i = ((($call$i$i35$i)) + 4|0);
 store4($$repack4$i$i37$i,0);
 __embind_register_class_function((1136|0),(3993|0),2,(1696|0),(4362|0),(3|0),($call$i$i35$i|0),0);
 $call$i$i38$i = (__Znwj(4)|0);
 store4($call$i$i38$i,(4));
 __embind_register_class_function((1136|0),(3998|0),3,(1704|0),(4486|0),(7|0),($call$i$i38$i|0),0);
 $call$i$i39$i = (__Znwj(4)|0);
 store4($call$i$i39$i,(8));
 __embind_register_class_function((1136|0),(4002|0),4,(1716|0),(4711|0),(1|0),($call$i$i39$i|0),0);
 __embind_register_function((2622|0),2,(1732|0),(4362|0),(5|0),(10|0));
 __embind_register_function((2627|0),3,(1740|0),(4486|0),(9|0),(6|0));
 __embind_register_function((2633|0),3,(1752|0),(4486|0),(10|0),(7|0));
 __embind_register_function((2639|0),3,(1764|0),(4486|0),(11|0),(8|0));
 __embind_register_function((2645|0),3,(1776|0),(4486|0),(12|0),(9|0));
 __embind_register_function((2651|0),3,(1788|0),(4486|0),(13|0),(10|0));
 __embind_register_function((2657|0),4,(1800|0),(4711|0),(2|0),(14|0));
 __embind_register_function((2664|0),4,(1816|0),(4711|0),(3|0),(15|0));
 __embind_register_function((2671|0),4,(1832|0),(4711|0),(4|0),(16|0));
 __embind_register_function((2678|0),4,(1848|0),(4711|0),(5|0),(17|0));
 __embind_register_function((2685|0),2,(1864|0),(4741|0),(2|0),(16|0));
 __embind_register_function((2698|0),3,(1872|0),(4706|0),(4|0),(3|0));
 __embind_register_function((2710|0),4,(1884|0),(4491|0),(6|0),(5|0));
 __embind_register_function((2723|0),2,(1900|0),(4362|0),(11|0),(11|0));
 $call$i = (__Znwj(64)|0);
 $props$i$i = ((($call$i)) + 36|0);
 $__left_$i$i$i$i$i$i$i = ((($call$i)) + 40|0);
 store4($__left_$i$i$i$i$i$i$i,0);
 $__first_$i$i$i$i$i$i = ((($call$i)) + 44|0);
 store4($__first_$i$i$i$i$i$i,0);
 ; store8($call$i,i64_const(0,0),4); store8($call$i+8|0,i64_const(0,0),4); store8($call$i+16|0,i64_const(0,0),4); store8($call$i+24|0,i64_const(0,0),4); store4($call$i+32|0,0,4);
 store4($props$i$i,$__left_$i$i$i$i$i$i$i);
 $__begin_$i$i$i$i = ((($call$i)) + 52|0);
 store4($__begin_$i$i$i$i,0);
 $__end_$i$i$i$i = ((($call$i)) + 56|0);
 store4($__end_$i$i$i$i,0);
 $__end_cap_$i$i$i$i = ((($call$i)) + 60|0);
 store4($__end_cap_$i$i$i$i,0);
 store4(9496,$call$i);
 __embind_register_function((3986|0),3,(1908|0),(4706|0),(6|0),(4|0));
 return;
}
function __GLOBAL__sub_I_bind_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_void((1496|0),(9431|0));
 __embind_register_bool((1512|0),(9436|0),1,1,0);
 __embind_register_integer((1520|0),(9379|0),1,-128,127);
 __embind_register_integer((1536|0),(9384|0),1,-128,127);
 __embind_register_integer((1528|0),(9396|0),1,0,255);
 __embind_register_integer((1544|0),(9410|0),2,-32768,32767);
 __embind_register_integer((1552|0),(9416|0),2,0,65535);
 __embind_register_integer((1560|0),(9441|0),4,-2147483648,2147483647);
 __embind_register_integer((1568|0),(9445|0),4,0,-1);
 __embind_register_integer((1576|0),(9458|0),4,-2147483648,2147483647);
 __embind_register_integer((1584|0),(9463|0),4,0,-1);
 __embind_register_float((1592|0),(9477|0),4);
 __embind_register_float((1600|0),(9483|0),8);
 __embind_register_std_string((1080|0),(9367|0));
 __embind_register_std_string((1192|0),(4745|0));
 __embind_register_std_wstring((1216|0),4,(4778|0));
 __embind_register_emval((1064|0),(4791|0));
 __embind_register_memory_view((1240|0),0,(4807|0));
 __embind_register_memory_view((1248|0),0,(4837|0));
 __embind_register_memory_view((1256|0),1,(4874|0));
 __embind_register_memory_view((1264|0),2,(4913|0));
 __embind_register_memory_view((1272|0),3,(4944|0));
 __embind_register_memory_view((1280|0),4,(4984|0));
 __embind_register_memory_view((1288|0),5,(5013|0));
 __embind_register_memory_view((1296|0),4,(5051|0));
 __embind_register_memory_view((1304|0),5,(5081|0));
 __embind_register_memory_view((1248|0),0,(5120|0));
 __embind_register_memory_view((1256|0),1,(5152|0));
 __embind_register_memory_view((1264|0),2,(5185|0));
 __embind_register_memory_view((1272|0),3,(5218|0));
 __embind_register_memory_view((1280|0),4,(5252|0));
 __embind_register_memory_view((1288|0),5,(5285|0));
 __embind_register_memory_view((1312|0),6,(5319|0));
 __embind_register_memory_view((1320|0),7,(5350|0));
 __embind_register_memory_view((1328|0),7,(5382|0));
 return;
}
function ___getTypeName($ti) {
 $ti = $ti|0;
 var $0 = 0, $__type_name$i = 0, $call1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__type_name$i = ((($ti)) + 4|0);
 $0 = load4($__type_name$i);
 $call1 = (___strdup($0)|0);
 return ($call1|0);
}
function _emscripten_get_global_libc() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (9500|0);
}
function ___stdio_close($f) {
 $f = $f|0;
 var $0 = 0, $call = 0, $call1 = 0, $call2 = 0, $fd = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 $call = (_dummy_570($0)|0);
 store4($vararg_buffer,$call);
 $call1 = (___syscall6(6,($vararg_buffer|0))|0);
 $call2 = (___syscall_ret($call1)|0);
 STACKTOP = sp;return ($call2|0);
}
function ___stdio_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr32 = 0, $buf8 = 0, $buf_size = 0, $call = 0, $call40 = 0;
 var $call7 = 0, $call741 = 0, $call746 = 0, $cmp = 0, $cmp12 = 0, $cmp17 = 0, $cmp24 = 0, $cmp42 = 0, $cnt$0 = 0, $dec = 0, $fd = 0, $incdec$ptr = 0, $iov$043 = 0, $iov$1 = 0, $iov_base2 = 0, $iov_len = 0, $iov_len19 = 0, $iov_len23 = 0, $iov_len3 = 0, $iov_len36 = 0;
 var $iovcnt$045 = 0, $iovcnt$1 = 0, $iovs = 0, $or = 0, $rem$044 = 0, $retval$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub21 = 0, $sub28 = 0, $sub37 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, $wbase = 0, $wend = 0, $wend14 = 0;
 var $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $iovs = sp + 32|0;
 $wbase = ((($f)) + 28|0);
 $0 = load4($wbase);
 store4($iovs,$0);
 $iov_len = ((($iovs)) + 4|0);
 $wpos = ((($f)) + 20|0);
 $1 = load4($wpos);
 $sub$ptr$sub = (($1) - ($0))|0;
 store4($iov_len,$sub$ptr$sub);
 $iov_base2 = ((($iovs)) + 8|0);
 store4($iov_base2,$buf);
 $iov_len3 = ((($iovs)) + 12|0);
 store4($iov_len3,$len);
 $add = (($sub$ptr$sub) + ($len))|0;
 $fd = ((($f)) + 60|0);
 $2 = load4($fd);
 $3 = $iovs;
 store4($vararg_buffer,$2);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,$3);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,2);
 $call40 = (___syscall146(146,($vararg_buffer|0))|0);
 $call741 = (___syscall_ret($call40)|0);
 $cmp42 = ($add|0)==($call741|0);
 L1: do {
  if ($cmp42) {
   label = 3;
  } else {
   $call746 = $call741;$iov$043 = $iovs;$iovcnt$045 = 2;$rem$044 = $add;
   while(1) {
    $cmp12 = ($call746|0)<(0);
    if ($cmp12) {
     break;
    }
    $sub21 = (($rem$044) - ($call746))|0;
    $iov_len23 = ((($iov$043)) + 4|0);
    $8 = load4($iov_len23);
    $cmp24 = ($call746>>>0)>($8>>>0);
    $incdec$ptr = ((($iov$043)) + 8|0);
    $iov$1 = $cmp24 ? $incdec$ptr : $iov$043;
    $dec = $cmp24 << 31 >> 31;
    $iovcnt$1 = (($dec) + ($iovcnt$045))|0;
    $sub28 = $cmp24 ? $8 : 0;
    $cnt$0 = (($call746) - ($sub28))|0;
    $9 = load4($iov$1);
    $add$ptr32 = (($9) + ($cnt$0)|0);
    store4($iov$1,$add$ptr32);
    $iov_len36 = ((($iov$1)) + 4|0);
    $10 = load4($iov_len36);
    $sub37 = (($10) - ($cnt$0))|0;
    store4($iov_len36,$sub37);
    $11 = load4($fd);
    $12 = $iov$1;
    store4($vararg_buffer3,$11);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,$12);
    $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
    store4($vararg_ptr7,$iovcnt$1);
    $call = (___syscall146(146,($vararg_buffer3|0))|0);
    $call7 = (___syscall_ret($call)|0);
    $cmp = ($sub21|0)==($call7|0);
    if ($cmp) {
     label = 3;
     break L1;
    } else {
     $call746 = $call7;$iov$043 = $iov$1;$iovcnt$045 = $iovcnt$1;$rem$044 = $sub21;
    }
   }
   $wend14 = ((($f)) + 16|0);
   store4($wend14,0);
   store4($wbase,0);
   store4($wpos,0);
   $6 = load4($f);
   $or = $6 | 32;
   store4($f,$or);
   $cmp17 = ($iovcnt$045|0)==(2);
   if ($cmp17) {
    $retval$0 = 0;
   } else {
    $iov_len19 = ((($iov$043)) + 4|0);
    $7 = load4($iov_len19);
    $sub = (($len) - ($7))|0;
    $retval$0 = $sub;
   }
  }
 } while(0);
 if ((label|0) == 3) {
  $buf8 = ((($f)) + 44|0);
  $4 = load4($buf8);
  $buf_size = ((($f)) + 48|0);
  $5 = load4($buf_size);
  $add$ptr = (($4) + ($5)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  store4($wbase,$4);
  store4($wpos,$4);
  $retval$0 = $len;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___stdio_seek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $call = 0, $call1 = 0, $cmp = 0, $fd = 0, $ret = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $ret = sp + 20|0;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 $1 = $ret;
 store4($vararg_buffer,$0);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$off);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$1);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$whence);
 $call = (___syscall140(140,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 $cmp = ($call1|0)<(0);
 if ($cmp) {
  store4($ret,-1);
  $2 = -1;
 } else {
  $$pre = load4($ret);
  $2 = $$pre;
 }
 STACKTOP = sp;return ($2|0);
}
function ___syscall_ret($r) {
 $r = $r|0;
 var $cmp = 0, $retval$0 = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($r>>>0)>(4294963200);
 if ($cmp) {
  $sub = (0 - ($r))|0;
  store4(10072,$sub);
  $retval$0 = -1;
 } else {
  $retval$0 = $r;
 }
 return ($retval$0|0);
}
function _dummy_570($fd) {
 $fd = $fd|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return ($fd|0);
}
function _strcmp($l,$r) {
 $l = $l|0;
 $r = $r|0;
 var $$lcssa = 0, $$lcssa6 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $cmp = 0, $cmp7 = 0, $conv5 = 0, $conv6 = 0, $incdec$ptr = 0, $incdec$ptr4 = 0, $l$addr$010 = 0, $or$cond = 0, $or$cond9 = 0, $r$addr$011 = 0, $sub = 0, $tobool = 0, $tobool8 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $0 = load1($l);
 $1 = load1($r);
 $cmp7 = ($0<<24>>24)!=($1<<24>>24);
 $tobool8 = ($0<<24>>24)==(0);
 $or$cond9 = $tobool8 | $cmp7;
 if ($or$cond9) {
  $$lcssa = $1;$$lcssa6 = $0;
 } else {
  $l$addr$010 = $l;$r$addr$011 = $r;
  while(1) {
   $incdec$ptr = ((($l$addr$010)) + 1|0);
   $incdec$ptr4 = ((($r$addr$011)) + 1|0);
   $2 = load1($incdec$ptr);
   $3 = load1($incdec$ptr4);
   $cmp = ($2<<24>>24)!=($3<<24>>24);
   $tobool = ($2<<24>>24)==(0);
   $or$cond = $tobool | $cmp;
   if ($or$cond) {
    $$lcssa = $3;$$lcssa6 = $2;
    break;
   } else {
    $l$addr$010 = $incdec$ptr;$r$addr$011 = $incdec$ptr4;
   }
  }
 }
 $conv5 = $$lcssa6&255;
 $conv6 = $$lcssa&255;
 $sub = (($conv5) - ($conv6))|0;
 return ($sub|0);
}
function _memcmp($vl,$vr,$n) {
 $vl = $vl|0;
 $vr = $vr|0;
 $n = $n|0;
 var $0 = 0, $1 = 0, $cmp = 0, $cond = 0, $conv5 = 0, $conv6 = 0, $dec = 0, $incdec$ptr = 0, $incdec$ptr3 = 0, $l$012 = 0, $n$addr$011 = 0, $r$013 = 0, $sub = 0, $tobool = 0, $tobool10 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool10 = ($n|0)==(0);
 L1: do {
  if ($tobool10) {
   $cond = 0;
  } else {
   $l$012 = $vl;$n$addr$011 = $n;$r$013 = $vr;
   while(1) {
    $0 = load1($l$012);
    $1 = load1($r$013);
    $cmp = ($0<<24>>24)==($1<<24>>24);
    if (!($cmp)) {
     break;
    }
    $dec = (($n$addr$011) + -1)|0;
    $incdec$ptr = ((($l$012)) + 1|0);
    $incdec$ptr3 = ((($r$013)) + 1|0);
    $tobool = ($dec|0)==(0);
    if ($tobool) {
     $cond = 0;
     break L1;
    } else {
     $l$012 = $incdec$ptr;$n$addr$011 = $dec;$r$013 = $incdec$ptr3;
    }
   }
   $conv5 = $0&255;
   $conv6 = $1&255;
   $sub = (($conv5) - ($conv6))|0;
   $cond = $sub;
  }
 } while(0);
 return ($cond|0);
}
function _vfprintf($fmt,$ap) {
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add$ptr = 0, $and = 0, $and11 = 0, $ap2 = 0, $call = 0, $cmp = 0, $cmp7 = 0, $internal_buf = 0, $nl_arg = 0, $nl_type = 0, $or = 0, $tobool = 0, $tobool22 = 0;
 var $vacopy_currentptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0;
 $ap2 = sp + 120|0;
 $nl_type = sp + 80|0;
 $nl_arg = sp;
 $internal_buf = sp + 136|0;
 ; store8($nl_type,i64_const(0,0),4); store8($nl_type+8|0,i64_const(0,0),4); store8($nl_type+16|0,i64_const(0,0),4); store8($nl_type+24|0,i64_const(0,0),4); store8($nl_type+32|0,i64_const(0,0),4);
 $vacopy_currentptr = load4($ap);
 store4($ap2,$vacopy_currentptr);
 $call = (_printf_core(0,$fmt,$ap2,$nl_arg,$nl_type)|0);
 $cmp = ($call|0)<(0);
 if ($cmp) {
 } else {
  $0 = load4((1996));
  $1 = load4(1920);
  $and = $1 & 32;
  $2 = load1((1994));
  $cmp7 = ($2<<24>>24)<(1);
  if ($cmp7) {
   $and11 = $1 & -33;
   store4(1920,$and11);
  }
  $3 = load4((1968));
  $tobool = ($3|0)==(0);
  if ($tobool) {
   $4 = load4((1964));
   store4((1964),$internal_buf);
   store4((1948),$internal_buf);
   store4((1940),$internal_buf);
   store4((1968),80);
   $add$ptr = ((($internal_buf)) + 80|0);
   store4((1936),$add$ptr);
   (_printf_core(1920,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $tobool22 = ($4|0)==(0|0);
   if (!($tobool22)) {
    $5 = load4((1956));
    (FUNCTION_TABLE_iiii[$5 & 31](1920,0,0)|0);
    store4((1964),$4);
    store4((1968),0);
    store4((1936),0);
    store4((1948),0);
    store4((1940),0);
   }
  } else {
   (_printf_core(1920,$fmt,$ap2,$nl_arg,$nl_type)|0);
  }
  $6 = load4(1920);
  $or = $6 | $and;
  store4(1920,$or);
 }
 STACKTOP = sp;return;
}
function _printf_core($f,$fmt,$ap,$nl_arg,$nl_type) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 $nl_arg = $nl_arg|0;
 $nl_type = $nl_type|0;
 var $$ = 0, $$$ = 0, $$194$ = 0, $$197 = 0, $$add$ptr258 = 0, $$l10n$0 = 0, $$lcssa199 = 0, $$pre = 0, $$pre247 = 0, $$pre248 = 0, $$pre248$pre = 0, $$pre249 = 0, $$pre250 = i64(), $$pre35 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
 var $14 = 0, $15 = 0, $16 = i64(), $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = i64(), $29 = 0, $3 = 0, $30 = 0, $31 = 0;
 var $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = i64(), $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = i64(), $49 = i64(), $5 = 0;
 var $50 = 0, $51 = i64(), $52 = 0, $53 = i64(), $54 = i64(), $55 = i64(), $56 = 0, $57 = 0, $58 = i64(), $59 = 0, $6 = 0, $60 = 0, $61 = 0.0, $62 = 0, $63 = 0, $64 = 0, $7 = 0, $8 = 0, $9 = 0, $a$0 = 0;
 var $a$0$add$ptr206 = 0, $a$1 = 0, $a$2 = 0, $add = 0, $add$ptr = 0, $add$ptr139 = 0, $add$ptr206 = 0, $add$ptr258 = 0, $add$ptr341 = 0, $add$ptr360 = 0, $add$ptr43 = 0, $add$ptr43$arrayidx31 = 0, $add$ptr474 = 0, $add$ptr88 = 0, $add270 = 0, $add323 = 0, $add396 = 0, $add413 = 0, $add442 = 0, $and = 0;
 var $and211 = 0, $and215 = 0, $and217 = 0, $and220 = 0, $and250 = 0, $and255 = 0, $and264 = 0, $and290 = 0, $and295 = 0, $and310 = 0, $and310$fl$4 = 0, $arg = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $argpos$0 = 0, $arrayidx114 = 0, $arrayidx119 = 0, $arrayidx124 = 0;
 var $arrayidx132 = 0, $arrayidx16 = 0, $arrayidx174 = 0, $arrayidx193 = 0, $arrayidx31 = 0, $arrayidx35 = 0, $arrayidx371 = 0, $arrayidx470 = 0, $arrayidx482$phi$trans$insert = 0, $arrayidx68 = 0, $arrayidx73 = 0, $arrayidx81 = 0, $buf = 0, $call104 = 0, $call160 = 0, $call251 = 0, $call263 = 0, $call305 = 0, $call346 = 0, $call357 = 0;
 var $call385 = 0, $call412 = 0, $call430 = 0, $cmp = 0, $cmp1 = 0, $cmp105 = 0, $cmp111 = 0, $cmp116 = 0, $cmp126 = 0, $cmp13 = 0, $cmp166 = 0, $cmp177 = 0, $cmp18 = 0, $cmp182 = 0, $cmp185 = 0, $cmp212 = 0, $cmp241 = 0, $cmp271 = 0, $cmp283 = 0, $cmp307 = 0;
 var $cmp324 = 0, $cmp37 = 0, $cmp378 = 0, $cmp378227 = 0, $cmp386 = 0, $cmp391 = 0, $cmp398 = 0, $cmp405 = 0, $cmp405237 = 0, $cmp414 = 0, $cmp422 = 0, $cmp435 = 0, $cmp443 = 0, $cmp467 = 0, $cmp479 = 0, $cmp50 = 0, $cmp50217 = 0, $cmp65 = 0, $cmp75 = 0, $cmp97 = 0;
 var $cnt$0 = 0, $cnt$1 = 0, $cond149 = 0, $cond246 = 0, $cond355 = 0, $cond427 = 0, $conv120 = 0, $conv134 = 0, $conv138 = 0, $conv164 = 0, $conv172 = 0, $conv175 = 0, $conv208 = 0, $conv227 = i64(), $conv230 = 0, $conv233 = 0, $conv238 = i64(), $conv32 = 0, $conv340 = 0, $conv369 = 0;
 var $conv48 = 0, $conv48215 = 0, $conv69 = 0, $conv83 = 0, $conv87 = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded12 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded16 = 0, $expanded4 = 0, $expanded5 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $expanded9 = 0, $fl$0$lcssa = 0;
 var $fl$0219 = 0, $fl$1 = 0, $fl$1$and220 = 0, $fl$3 = 0, $fl$4 = 0, $fl$6 = 0, $i$0$lcssa = 0, $i$0$lcssa256 = 0, $i$0229 = 0, $i$1238 = 0, $i$2210 = 0, $i137 = 0, $i86 = 0, $inc = 0, $inc48971 = 0, $inc48971$in = 0, $incdec$ptr = 0, $incdec$ptr171 = 0, $incdec$ptr23 = 0, $incdec$ptr384 = 0;
 var $incdec$ptr411 = 0, $incdec$ptr62 = 0, $isdigit = 0, $isdigit188 = 0, $isdigit190 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp187 = 0, $isdigittmp189 = 0, $l$0 = 0, $l$1228 = 0, $l$2 = 0, $l10n$0 = 0, $l10n$0$phi = 0, $l10n$1 = 0, $l10n$2 = 0, $l10n$3 = 0, $lnot = 0, $lnot$ext = 0, $lnot484 = 0;
 var $mb = 0, $narrow = 0, $or = 0, $or$cond = 0, $or$cond192 = 0, $or$cond193 = 0, $or$cond195 = 0, $or100 = 0, $or100$fl$0 = 0, $or247 = 0, $p$0 = 0, $p$0$p$0$add270 = 0, $p$1 = 0, $p$2 = 0, $p$2$add323 = 0, $p$2$add323$p$2 = 0, $p$3 = 0, $p$4253 = 0, $p$5 = 0, $pl$0 = 0;
 var $pl$1 = 0, $pl$2 = 0, $prefix$0 = 0, $prefix$1 = 0, $prefix$2 = 0, $retval$0 = 0, $s = 0, $shl = 0, $shr = 0, $st$0 = 0, $storemerge = 0, $storemerge186218 = 0, $storemerge191 = 0, $sub = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast318 = 0, $sub$ptr$lhs$cast362 = 0, $sub$ptr$lhs$cast432 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast268 = 0;
 var $sub$ptr$rhs$cast319 = 0, $sub$ptr$rhs$cast363 = 0, $sub$ptr$rhs$cast433 = 0, $sub$ptr$sub = 0, $sub$ptr$sub269 = 0, $sub$ptr$sub320 = 0, $sub$ptr$sub364 = 0, $sub$ptr$sub434 = 0, $sub$ptr$sub434$p$5 = 0, $sub101 = 0, $sub101$w$0 = 0, $sub135 = 0, $sub165 = 0, $sub173 = 0, $sub176 = 0, $sub287 = i64(), $sub390 = 0, $sub49 = 0, $sub49216 = 0, $sub49220 = 0;
 var $sub84 = 0, $t$0 = 0, $t$1 = 0, $tobool = 0, $tobool141 = 0, $tobool179 = 0, $tobool209 = 0, $tobool218 = 0, $tobool25 = 0, $tobool253 = 0, $tobool256 = 0, $tobool265 = 0, $tobool28 = 0, $tobool291 = 0, $tobool296 = 0, $tobool313 = 0, $tobool315 = 0, $tobool350 = 0, $tobool358 = 0, $tobool381 = 0;
 var $tobool408 = 0, $tobool460 = 0, $tobool463 = 0, $tobool471 = 0, $tobool55 = 0, $tobool90 = 0, $trunc = 0, $w$0 = 0, $w$1 = 0, $w$2 = 0, $wc = 0, $ws$0230 = 0, $ws$1239 = 0, $xor = 0, $xor450 = 0, $xor458 = 0, $z$0$lcssa = 0, $z$0212 = 0, $z$1 = 0, $z$2 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $s = sp + 16|0;
 $arg = sp;
 $buf = sp + 24|0;
 $wc = sp + 8|0;
 $mb = sp + 20|0;
 store4($s,$fmt);
 $tobool25 = ($f|0)!=(0|0);
 $add$ptr206 = ((($buf)) + 40|0);
 $sub$ptr$lhs$cast318 = $add$ptr206;
 $add$ptr341 = ((($buf)) + 39|0);
 $arrayidx371 = ((($wc)) + 4|0);
 $1 = $fmt;$cnt$0 = 0;$l$0 = 0;$l10n$0 = 0;
 L1: while(1) {
  $cmp = ($cnt$0|0)>(-1);
  do {
   if ($cmp) {
    $sub = (2147483647 - ($cnt$0))|0;
    $cmp1 = ($l$0|0)>($sub|0);
    if ($cmp1) {
     store4(10072,75);
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
  $0 = load1($1);
  $tobool = ($0<<24>>24)==(0);
  if ($tobool) {
   label = 87;
   break;
  } else {
   $2 = $0;$3 = $1;
  }
  L9: while(1) {
   switch ($2<<24>>24) {
   case 37:  {
    $4 = $3;$z$0212 = $3;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $7 = $3;$z$0$lcssa = $3;
    break L9;
    break;
   }
   default: {
   }
   }
   $incdec$ptr = ((($3)) + 1|0);
   store4($s,$incdec$ptr);
   $$pre = load1($incdec$ptr);
   $2 = $$pre;$3 = $incdec$ptr;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $arrayidx16 = ((($4)) + 1|0);
     $5 = load1($arrayidx16);
     $cmp18 = ($5<<24>>24)==(37);
     if (!($cmp18)) {
      $7 = $4;$z$0$lcssa = $z$0212;
      break L12;
     }
     $incdec$ptr23 = ((($z$0212)) + 1|0);
     $add$ptr = ((($4)) + 2|0);
     store4($s,$add$ptr);
     $6 = load1($add$ptr);
     $cmp13 = ($6<<24>>24)==(37);
     if ($cmp13) {
      $4 = $add$ptr;$z$0212 = $incdec$ptr23;
      label = 9;
     } else {
      $7 = $add$ptr;$z$0$lcssa = $incdec$ptr23;
      break;
     }
    }
   }
  } while(0);
  $sub$ptr$lhs$cast = $z$0$lcssa;
  $sub$ptr$rhs$cast = $1;
  $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
  if ($tobool25) {
   _out($f,$1,$sub$ptr$sub);
  }
  $tobool28 = ($sub$ptr$sub|0)==(0);
  if (!($tobool28)) {
   $l10n$0$phi = $l10n$0;$1 = $7;$cnt$0 = $cnt$1;$l$0 = $sub$ptr$sub;$l10n$0 = $l10n$0$phi;
   continue;
  }
  $arrayidx31 = ((($7)) + 1|0);
  $8 = load1($arrayidx31);
  $conv32 = $8 << 24 >> 24;
  $isdigittmp = (($conv32) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $arrayidx35 = ((($7)) + 2|0);
   $9 = load1($arrayidx35);
   $cmp37 = ($9<<24>>24)==(36);
   $add$ptr43 = ((($7)) + 3|0);
   $add$ptr43$arrayidx31 = $cmp37 ? $add$ptr43 : $arrayidx31;
   $$l10n$0 = $cmp37 ? 1 : $l10n$0;
   $isdigittmp$ = $cmp37 ? $isdigittmp : -1;
   $argpos$0 = $isdigittmp$;$l10n$1 = $$l10n$0;$storemerge = $add$ptr43$arrayidx31;
  } else {
   $argpos$0 = -1;$l10n$1 = $l10n$0;$storemerge = $arrayidx31;
  }
  store4($s,$storemerge);
  $10 = load1($storemerge);
  $conv48215 = $10 << 24 >> 24;
  $sub49216 = (($conv48215) + -32)|0;
  $cmp50217 = ($sub49216>>>0)<(32);
  L24: do {
   if ($cmp50217) {
    $63 = $10;$fl$0219 = 0;$storemerge186218 = $storemerge;$sub49220 = $sub49216;
    while(1) {
     $shl = 1 << $sub49220;
     $and = $shl & 75913;
     $tobool55 = ($and|0)==(0);
     if ($tobool55) {
      $$lcssa199 = $63;$12 = $storemerge186218;$fl$0$lcssa = $fl$0219;
      break L24;
     }
     $or = $fl$0219 | $shl;
     $incdec$ptr62 = ((($storemerge186218)) + 1|0);
     store4($s,$incdec$ptr62);
     $11 = load1($incdec$ptr62);
     $conv48 = $11 << 24 >> 24;
     $sub49 = (($conv48) + -32)|0;
     $cmp50 = ($sub49>>>0)<(32);
     if ($cmp50) {
      $63 = $11;$fl$0219 = $or;$storemerge186218 = $incdec$ptr62;$sub49220 = $sub49;
     } else {
      $$lcssa199 = $11;$12 = $incdec$ptr62;$fl$0$lcssa = $or;
      break;
     }
    }
   } else {
    $$lcssa199 = $10;$12 = $storemerge;$fl$0$lcssa = 0;
   }
  } while(0);
  $cmp65 = ($$lcssa199<<24>>24)==(42);
  if ($cmp65) {
   $arrayidx68 = ((($12)) + 1|0);
   $13 = load1($arrayidx68);
   $conv69 = $13 << 24 >> 24;
   $isdigittmp189 = (($conv69) + -48)|0;
   $isdigit190 = ($isdigittmp189>>>0)<(10);
   if ($isdigit190) {
    $arrayidx73 = ((($12)) + 2|0);
    $14 = load1($arrayidx73);
    $cmp75 = ($14<<24>>24)==(36);
    if ($cmp75) {
     $arrayidx81 = (($nl_type) + ($isdigittmp189<<2)|0);
     store4($arrayidx81,10);
     $15 = load1($arrayidx68);
     $conv83 = $15 << 24 >> 24;
     $sub84 = (($conv83) + -48)|0;
     $i86 = (($nl_arg) + ($sub84<<3)|0);
     $16 = load8($i86);
     $conv87 = i64_trunc($16);
     $add$ptr88 = ((($12)) + 3|0);
     $l10n$2 = 1;$storemerge191 = $add$ptr88;$w$0 = $conv87;
    } else {
     label = 23;
    }
   } else {
    label = 23;
   }
   if ((label|0) == 23) {
    label = 0;
    $tobool90 = ($l10n$1|0)==(0);
    if (!($tobool90)) {
     $retval$0 = -1;
     break;
    }
    if ($tobool25) {
     $arglist_current = load4($ap);
     $17 = $arglist_current;
     $expanded5 = ((0) + 4|0);
     $expanded4 = $expanded5;
     $expanded = (($expanded4) - 1)|0;
     $18 = (($17) + ($expanded))|0;
     $expanded9 = ((0) + 4|0);
     $expanded8 = $expanded9;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $19 = $18 & $expanded6;
     $20 = $19;
     $21 = load4($20);
     $arglist_next = ((($20)) + 4|0);
     store4($ap,$arglist_next);
     $l10n$2 = 0;$storemerge191 = $arrayidx68;$w$0 = $21;
    } else {
     $l10n$2 = 0;$storemerge191 = $arrayidx68;$w$0 = 0;
    }
   }
   store4($s,$storemerge191);
   $cmp97 = ($w$0|0)<(0);
   $or100 = $fl$0$lcssa | 8192;
   $sub101 = (0 - ($w$0))|0;
   $or100$fl$0 = $cmp97 ? $or100 : $fl$0$lcssa;
   $sub101$w$0 = $cmp97 ? $sub101 : $w$0;
   $23 = $storemerge191;$fl$1 = $or100$fl$0;$l10n$3 = $l10n$2;$w$1 = $sub101$w$0;
  } else {
   $call104 = (_getint($s)|0);
   $cmp105 = ($call104|0)<(0);
   if ($cmp105) {
    $retval$0 = -1;
    break;
   }
   $$pre247 = load4($s);
   $23 = $$pre247;$fl$1 = $fl$0$lcssa;$l10n$3 = $l10n$1;$w$1 = $call104;
  }
  $22 = load1($23);
  $cmp111 = ($22<<24>>24)==(46);
  do {
   if ($cmp111) {
    $arrayidx114 = ((($23)) + 1|0);
    $24 = load1($arrayidx114);
    $cmp116 = ($24<<24>>24)==(42);
    if (!($cmp116)) {
     store4($s,$arrayidx114);
     $call160 = (_getint($s)|0);
     $$pre248$pre = load4($s);
     $$pre248 = $$pre248$pre;$p$0 = $call160;
     break;
    }
    $arrayidx119 = ((($23)) + 2|0);
    $25 = load1($arrayidx119);
    $conv120 = $25 << 24 >> 24;
    $isdigittmp187 = (($conv120) + -48)|0;
    $isdigit188 = ($isdigittmp187>>>0)<(10);
    if ($isdigit188) {
     $arrayidx124 = ((($23)) + 3|0);
     $26 = load1($arrayidx124);
     $cmp126 = ($26<<24>>24)==(36);
     if ($cmp126) {
      $arrayidx132 = (($nl_type) + ($isdigittmp187<<2)|0);
      store4($arrayidx132,10);
      $27 = load1($arrayidx119);
      $conv134 = $27 << 24 >> 24;
      $sub135 = (($conv134) + -48)|0;
      $i137 = (($nl_arg) + ($sub135<<3)|0);
      $28 = load8($i137);
      $conv138 = i64_trunc($28);
      $add$ptr139 = ((($23)) + 4|0);
      store4($s,$add$ptr139);
      $$pre248 = $add$ptr139;$p$0 = $conv138;
      break;
     }
    }
    $tobool141 = ($l10n$3|0)==(0);
    if (!($tobool141)) {
     $retval$0 = -1;
     break L1;
    }
    if ($tobool25) {
     $arglist_current2 = load4($ap);
     $29 = $arglist_current2;
     $expanded12 = ((0) + 4|0);
     $expanded11 = $expanded12;
     $expanded10 = (($expanded11) - 1)|0;
     $30 = (($29) + ($expanded10))|0;
     $expanded16 = ((0) + 4|0);
     $expanded15 = $expanded16;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $31 = $30 & $expanded13;
     $32 = $31;
     $33 = load4($32);
     $arglist_next3 = ((($32)) + 4|0);
     store4($ap,$arglist_next3);
     $cond149 = $33;
    } else {
     $cond149 = 0;
    }
    store4($s,$arrayidx119);
    $$pre248 = $arrayidx119;$p$0 = $cond149;
   } else {
    $$pre248 = $23;$p$0 = -1;
   }
  } while(0);
  $35 = $$pre248;$st$0 = 0;
  while(1) {
   $34 = load1($35);
   $conv164 = $34 << 24 >> 24;
   $sub165 = (($conv164) + -65)|0;
   $cmp166 = ($sub165>>>0)>(57);
   if ($cmp166) {
    $retval$0 = -1;
    break L1;
   }
   $incdec$ptr171 = ((($35)) + 1|0);
   store4($s,$incdec$ptr171);
   $36 = load1($35);
   $conv172 = $36 << 24 >> 24;
   $sub173 = (($conv172) + -65)|0;
   $arrayidx174 = ((5917 + (($st$0*58)|0)|0) + ($sub173)|0);
   $37 = load1($arrayidx174);
   $conv175 = $37&255;
   $sub176 = (($conv175) + -1)|0;
   $cmp177 = ($sub176>>>0)<(8);
   if ($cmp177) {
    $35 = $incdec$ptr171;$st$0 = $conv175;
   } else {
    break;
   }
  }
  $tobool179 = ($37<<24>>24)==(0);
  if ($tobool179) {
   $retval$0 = -1;
   break;
  }
  $cmp182 = ($37<<24>>24)==(19);
  $cmp185 = ($argpos$0|0)>(-1);
  do {
   if ($cmp182) {
    if ($cmp185) {
     $retval$0 = -1;
     break L1;
    } else {
     label = 49;
    }
   } else {
    if ($cmp185) {
     $arrayidx193 = (($nl_type) + ($argpos$0<<2)|0);
     store4($arrayidx193,$conv175);
     $38 = (($nl_arg) + ($argpos$0<<3)|0);
     $39 = load8($38);
     store8($arg,$39);
     label = 49;
     break;
    }
    if (!($tobool25)) {
     $retval$0 = 0;
     break L1;
    }
    _pop_arg($arg,$conv175,$ap);
   }
  } while(0);
  if ((label|0) == 49) {
   label = 0;
   if (!($tobool25)) {
    $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
    continue;
   }
  }
  $40 = load1($35);
  $conv208 = $40 << 24 >> 24;
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
  L71: do {
   switch ($t$0|0) {
   case 110:  {
    $trunc = $st$0&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $41 = load4($arg);
     store4($41,$cnt$1);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 1:  {
     $42 = load4($arg);
     store4($42,$cnt$1);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 2:  {
     $conv227 = i64_sext($cnt$1);
     $43 = load4($arg);
     store8($43,$conv227);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 3:  {
     $conv230 = $cnt$1&65535;
     $44 = load4($arg);
     store2($44,$conv230);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 4:  {
     $conv233 = $cnt$1&255;
     $45 = load4($arg);
     store1($45,$conv233);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 6:  {
     $46 = load4($arg);
     store4($46,$cnt$1);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 7:  {
     $conv238 = i64_sext($cnt$1);
     $47 = load4($arg);
     store8($47,$conv238);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    default: {
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
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
    label = 61;
    break;
   }
   case 88: case 120:  {
    $fl$3 = $fl$1$and220;$p$1 = $p$0;$t$1 = $t$0;
    label = 61;
    break;
   }
   case 111:  {
    $49 = load8($arg);
    $call263 = (_fmt_o($49,$add$ptr206)|0);
    $and264 = $fl$1$and220 & 8;
    $tobool265 = ($and264|0)==(0);
    $sub$ptr$rhs$cast268 = $call263;
    $sub$ptr$sub269 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast268))|0;
    $cmp271 = ($p$0|0)>($sub$ptr$sub269|0);
    $add270 = (($sub$ptr$sub269) + 1)|0;
    $50 = $tobool265 | $cmp271;
    $p$0$p$0$add270 = $50 ? $p$0 : $add270;
    $54 = $49;$a$0 = $call263;$fl$4 = $fl$1$and220;$p$2 = $p$0$p$0$add270;$pl$1 = 0;$prefix$1 = 6381;
    label = 67;
    break;
   }
   case 105: case 100:  {
    $51 = load8($arg);
    $cmp283 = i64_slt($51,i64_const(0,0));
    if ($cmp283) {
     $sub287 = i64_sub(i64_const(0,0),$51);
     store8($arg,$sub287);
     $53 = $sub287;$pl$0 = 1;$prefix$0 = 6381;
     label = 66;
     break L71;
    } else {
     $and290 = $fl$1$and220 & 2048;
     $tobool291 = ($and290|0)==(0);
     $and295 = $fl$1$and220 & 1;
     $tobool296 = ($and295|0)==(0);
     $$ = $tobool296 ? 6381 : (6383);
     $$$ = $tobool291 ? $$ : (6382);
     $52 = $fl$1$and220 & 2049;
     $narrow = ($52|0)!=(0);
     $$194$ = $narrow&1;
     $53 = $51;$pl$0 = $$194$;$prefix$0 = $$$;
     label = 66;
     break L71;
    }
    break;
   }
   case 117:  {
    $$pre250 = load8($arg);
    $53 = $$pre250;$pl$0 = 0;$prefix$0 = 6381;
    label = 66;
    break;
   }
   case 99:  {
    $55 = load8($arg);
    $conv340 = i64_trunc($55)&255;
    store1($add$ptr341,$conv340);
    $a$2 = $add$ptr341;$fl$6 = $and220;$p$5 = 1;$pl$2 = 0;$prefix$2 = 6381;$z$2 = $add$ptr206;
    break;
   }
   case 109:  {
    $56 = load4(10072);
    $call346 = (_strerror($56)|0);
    $a$1 = $call346;
    label = 71;
    break;
   }
   case 115:  {
    $57 = load4($arg);
    $tobool350 = ($57|0)!=(0|0);
    $cond355 = $tobool350 ? $57 : 8334;
    $a$1 = $cond355;
    label = 71;
    break;
   }
   case 67:  {
    $58 = load8($arg);
    $conv369 = i64_trunc($58);
    store4($wc,$conv369);
    store4($arrayidx371,0);
    store4($arg,$wc);
    $64 = $wc;$p$4253 = -1;
    label = 75;
    break;
   }
   case 83:  {
    $$pre249 = load4($arg);
    $cmp378227 = ($p$0|0)==(0);
    if ($cmp378227) {
     _pad_684($f,32,$w$1,0,$fl$1$and220);
     $i$0$lcssa256 = 0;
     label = 84;
    } else {
     $64 = $$pre249;$p$4253 = $p$0;
     label = 75;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $61 = loadd($arg);
    $call430 = (_fmt_fp($f,$61,$w$1,$p$0,$fl$1$and220,$t$0)|0);
    $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = $call430;$l10n$0 = $l10n$3;
    continue L1;
    break;
   }
   default: {
    $a$2 = $1;$fl$6 = $fl$1$and220;$p$5 = $p$0;$pl$2 = 0;$prefix$2 = 6381;$z$2 = $add$ptr206;
   }
   }
  } while(0);
  L95: do {
   if ((label|0) == 61) {
    label = 0;
    $48 = load8($arg);
    $and250 = $t$1 & 32;
    $call251 = (_fmt_x($48,$add$ptr206,$and250)|0);
    $tobool253 = i64_eq($48,i64_const(0,0));
    $and255 = $fl$3 & 8;
    $tobool256 = ($and255|0)==(0);
    $or$cond193 = $tobool256 | $tobool253;
    $shr = $t$1 >> 4;
    $add$ptr258 = (6381 + ($shr)|0);
    $$add$ptr258 = $or$cond193 ? 6381 : $add$ptr258;
    $$197 = $or$cond193 ? 0 : 2;
    $54 = $48;$a$0 = $call251;$fl$4 = $fl$3;$p$2 = $p$1;$pl$1 = $$197;$prefix$1 = $$add$ptr258;
    label = 67;
   }
   else if ((label|0) == 66) {
    label = 0;
    $call305 = (_fmt_u($53,$add$ptr206)|0);
    $54 = $53;$a$0 = $call305;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = $pl$0;$prefix$1 = $prefix$0;
    label = 67;
   }
   else if ((label|0) == 71) {
    label = 0;
    $call357 = (_memchr($a$1,$p$0)|0);
    $tobool358 = ($call357|0)==(0|0);
    $sub$ptr$lhs$cast362 = $call357;
    $sub$ptr$rhs$cast363 = $a$1;
    $sub$ptr$sub364 = (($sub$ptr$lhs$cast362) - ($sub$ptr$rhs$cast363))|0;
    $add$ptr360 = (($a$1) + ($p$0)|0);
    $p$3 = $tobool358 ? $p$0 : $sub$ptr$sub364;
    $z$1 = $tobool358 ? $add$ptr360 : $call357;
    $a$2 = $a$1;$fl$6 = $and220;$p$5 = $p$3;$pl$2 = 0;$prefix$2 = 6381;$z$2 = $z$1;
   }
   else if ((label|0) == 75) {
    label = 0;
    $i$0229 = 0;$l$1228 = 0;$ws$0230 = $64;
    while(1) {
     $59 = load4($ws$0230);
     $tobool381 = ($59|0)==(0);
     if ($tobool381) {
      $i$0$lcssa = $i$0229;$l$2 = $l$1228;
      break;
     }
     $call385 = (_wctomb($mb,$59)|0);
     $cmp386 = ($call385|0)<(0);
     $sub390 = (($p$4253) - ($i$0229))|0;
     $cmp391 = ($call385>>>0)>($sub390>>>0);
     $or$cond195 = $cmp386 | $cmp391;
     if ($or$cond195) {
      $i$0$lcssa = $i$0229;$l$2 = $call385;
      break;
     }
     $incdec$ptr384 = ((($ws$0230)) + 4|0);
     $add396 = (($call385) + ($i$0229))|0;
     $cmp378 = ($p$4253>>>0)>($add396>>>0);
     if ($cmp378) {
      $i$0229 = $add396;$l$1228 = $call385;$ws$0230 = $incdec$ptr384;
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
    _pad_684($f,32,$w$1,$i$0$lcssa,$fl$1$and220);
    $cmp405237 = ($i$0$lcssa|0)==(0);
    if ($cmp405237) {
     $i$0$lcssa256 = 0;
     label = 84;
    } else {
     $i$1238 = 0;$ws$1239 = $64;
     while(1) {
      $60 = load4($ws$1239);
      $tobool408 = ($60|0)==(0);
      if ($tobool408) {
       $i$0$lcssa256 = $i$0$lcssa;
       label = 84;
       break L95;
      }
      $call412 = (_wctomb($mb,$60)|0);
      $add413 = (($call412) + ($i$1238))|0;
      $cmp414 = ($add413|0)>($i$0$lcssa|0);
      if ($cmp414) {
       $i$0$lcssa256 = $i$0$lcssa;
       label = 84;
       break L95;
      }
      $incdec$ptr411 = ((($ws$1239)) + 4|0);
      _out($f,$mb,$call412);
      $cmp405 = ($add413>>>0)<($i$0$lcssa>>>0);
      if ($cmp405) {
       $i$1238 = $add413;$ws$1239 = $incdec$ptr411;
      } else {
       $i$0$lcssa256 = $i$0$lcssa;
       label = 84;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 67) {
   label = 0;
   $cmp307 = ($p$2|0)>(-1);
   $and310 = $fl$4 & -65537;
   $and310$fl$4 = $cmp307 ? $and310 : $fl$4;
   $tobool313 = i64_ne($54,i64_const(0,0));
   $tobool315 = ($p$2|0)!=(0);
   $or$cond = $tobool313 | $tobool315;
   $sub$ptr$rhs$cast319 = $a$0;
   $sub$ptr$sub320 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast319))|0;
   $lnot = $tobool313 ^ 1;
   $lnot$ext = $lnot&1;
   $add323 = (($sub$ptr$sub320) + ($lnot$ext))|0;
   $cmp324 = ($p$2|0)>($add323|0);
   $p$2$add323 = $cmp324 ? $p$2 : $add323;
   $p$2$add323$p$2 = $or$cond ? $p$2$add323 : $p$2;
   $a$0$add$ptr206 = $or$cond ? $a$0 : $add$ptr206;
   $a$2 = $a$0$add$ptr206;$fl$6 = $and310$fl$4;$p$5 = $p$2$add323$p$2;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $add$ptr206;
  }
  else if ((label|0) == 84) {
   label = 0;
   $xor = $fl$1$and220 ^ 8192;
   _pad_684($f,32,$w$1,$i$0$lcssa256,$xor);
   $cmp422 = ($w$1|0)>($i$0$lcssa256|0);
   $cond427 = $cmp422 ? $w$1 : $i$0$lcssa256;
   $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = $cond427;$l10n$0 = $l10n$3;
   continue;
  }
  $sub$ptr$lhs$cast432 = $z$2;
  $sub$ptr$rhs$cast433 = $a$2;
  $sub$ptr$sub434 = (($sub$ptr$lhs$cast432) - ($sub$ptr$rhs$cast433))|0;
  $cmp435 = ($p$5|0)<($sub$ptr$sub434|0);
  $sub$ptr$sub434$p$5 = $cmp435 ? $sub$ptr$sub434 : $p$5;
  $add442 = (($sub$ptr$sub434$p$5) + ($pl$2))|0;
  $cmp443 = ($w$1|0)<($add442|0);
  $w$2 = $cmp443 ? $add442 : $w$1;
  _pad_684($f,32,$w$2,$add442,$fl$6);
  _out($f,$prefix$2,$pl$2);
  $xor450 = $fl$6 ^ 65536;
  _pad_684($f,48,$w$2,$add442,$xor450);
  _pad_684($f,48,$sub$ptr$sub434$p$5,$sub$ptr$sub434,0);
  _out($f,$a$2,$sub$ptr$sub434);
  $xor458 = $fl$6 ^ 8192;
  _pad_684($f,32,$w$2,$add442,$xor458);
  $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = $w$2;$l10n$0 = $l10n$3;
 }
 L114: do {
  if ((label|0) == 87) {
   $tobool460 = ($f|0)==(0|0);
   if ($tobool460) {
    $tobool463 = ($l10n$0|0)==(0);
    if ($tobool463) {
     $retval$0 = 0;
    } else {
     $i$2210 = 1;
     while(1) {
      $arrayidx470 = (($nl_type) + ($i$2210<<2)|0);
      $62 = load4($arrayidx470);
      $tobool471 = ($62|0)==(0);
      if ($tobool471) {
       $inc48971$in = $i$2210;
       break;
      }
      $add$ptr474 = (($nl_arg) + ($i$2210<<3)|0);
      _pop_arg($add$ptr474,$62,$ap);
      $inc = (($i$2210) + 1)|0;
      $cmp467 = ($inc|0)<(10);
      if ($cmp467) {
       $i$2210 = $inc;
      } else {
       $retval$0 = 1;
       break L114;
      }
     }
     while(1) {
      $inc48971 = (($inc48971$in) + 1)|0;
      $cmp479 = ($inc48971|0)<(10);
      if (!($cmp479)) {
       $retval$0 = 1;
       break L114;
      }
      $arrayidx482$phi$trans$insert = (($nl_type) + ($inc48971<<2)|0);
      $$pre35 = load4($arrayidx482$phi$trans$insert);
      $lnot484 = ($$pre35|0)==(0);
      if ($lnot484) {
       $inc48971$in = $inc48971;
      } else {
       $retval$0 = -1;
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
function _out($f,$s,$l) {
 $f = $f|0;
 $s = $s|0;
 $l = $l|0;
 var $0 = 0, $and = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($f);
 $and = $0 & 32;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  ___fwritex($s,$l,$f);
 }
 return;
}
function _getint($s) {
 $s = $s|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $add = 0, $conv = 0, $conv4 = 0, $i$0$lcssa = 0, $i$07 = 0, $incdec$ptr = 0, $isdigit = 0, $isdigit6 = 0, $isdigittmp = 0, $isdigittmp5 = 0, $isdigittmp8 = 0, $mul = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($s);
 $1 = load1($0);
 $conv4 = $1 << 24 >> 24;
 $isdigittmp5 = (($conv4) + -48)|0;
 $isdigit6 = ($isdigittmp5>>>0)<(10);
 if ($isdigit6) {
  $2 = $0;$i$07 = 0;$isdigittmp8 = $isdigittmp5;
  while(1) {
   $mul = ($i$07*10)|0;
   $add = (($mul) + ($isdigittmp8))|0;
   $incdec$ptr = ((($2)) + 1|0);
   store4($s,$incdec$ptr);
   $3 = load1($incdec$ptr);
   $conv = $3 << 24 >> 24;
   $isdigittmp = (($conv) + -48)|0;
   $isdigit = ($isdigittmp>>>0)<(10);
   if ($isdigit) {
    $2 = $incdec$ptr;$i$07 = $add;$isdigittmp8 = $isdigittmp;
   } else {
    $i$0$lcssa = $add;
    break;
   }
  }
 } else {
  $i$0$lcssa = 0;
 }
 return ($i$0$lcssa|0);
}
function _pop_arg($arg,$type,$ap) {
 $arg = $arg|0;
 $type = $type|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = i64(), $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0.0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0.0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0;
 var $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $cmp = 0, $conv = i64(), $conv16 = 0, $conv17 = i64(), $conv22$mask = 0, $conv23 = i64(), $conv28 = 0, $conv29 = i64(), $conv34$mask = 0, $conv35 = i64();
 var $conv7 = i64(), $expanded = 0, $expanded28 = 0, $expanded29 = 0, $expanded30 = 0, $expanded31 = 0, $expanded32 = 0, $expanded33 = 0, $expanded34 = 0, $expanded35 = 0, $expanded36 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded40 = 0, $expanded41 = 0, $expanded42 = 0, $expanded43 = 0, $expanded44 = 0, $expanded45 = 0;
 var $expanded46 = 0, $expanded47 = 0, $expanded48 = 0, $expanded49 = 0, $expanded50 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded54 = 0, $expanded55 = 0, $expanded56 = 0, $expanded57 = 0, $expanded58 = 0, $expanded59 = 0, $expanded60 = 0, $expanded61 = 0, $expanded62 = 0, $expanded63 = 0, $expanded64 = 0, $expanded65 = 0;
 var $expanded66 = 0, $expanded67 = 0, $expanded68 = 0, $expanded69 = 0, $expanded70 = 0, $expanded71 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded75 = 0, $expanded76 = 0, $expanded77 = 0, $expanded78 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded82 = 0, $expanded83 = 0, $expanded84 = 0, $expanded85 = 0;
 var $expanded86 = 0, $expanded87 = 0, $expanded88 = 0, $expanded89 = 0, $expanded90 = 0, $expanded91 = 0, $expanded92 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, $expanded96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($type>>>0)>(20);
 L1: do {
  if (!($cmp)) {
   do {
    switch ($type|0) {
    case 9:  {
     $arglist_current = load4($ap);
     $0 = $arglist_current;
     $expanded29 = ((0) + 4|0);
     $expanded28 = $expanded29;
     $expanded = (($expanded28) - 1)|0;
     $1 = (($0) + ($expanded))|0;
     $expanded33 = ((0) + 4|0);
     $expanded32 = $expanded33;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $2 = $1 & $expanded30;
     $3 = $2;
     $4 = load4($3);
     $arglist_next = ((($3)) + 4|0);
     store4($ap,$arglist_next);
     store4($arg,$4);
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = load4($ap);
     $5 = $arglist_current2;
     $expanded36 = ((0) + 4|0);
     $expanded35 = $expanded36;
     $expanded34 = (($expanded35) - 1)|0;
     $6 = (($5) + ($expanded34))|0;
     $expanded40 = ((0) + 4|0);
     $expanded39 = $expanded40;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $7 = $6 & $expanded37;
     $8 = $7;
     $9 = load4($8);
     $arglist_next3 = ((($8)) + 4|0);
     store4($ap,$arglist_next3);
     $conv = i64_sext($9);
     store8($arg,$conv);
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = load4($ap);
     $10 = $arglist_current5;
     $expanded43 = ((0) + 4|0);
     $expanded42 = $expanded43;
     $expanded41 = (($expanded42) - 1)|0;
     $11 = (($10) + ($expanded41))|0;
     $expanded47 = ((0) + 4|0);
     $expanded46 = $expanded47;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $12 = $11 & $expanded44;
     $13 = $12;
     $14 = load4($13);
     $arglist_next6 = ((($13)) + 4|0);
     store4($ap,$arglist_next6);
     $conv7 = i64_zext($14>>>0);
     store8($arg,$conv7);
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = load4($ap);
     $15 = $arglist_current8;
     $expanded50 = ((0) + 8|0);
     $expanded49 = $expanded50;
     $expanded48 = (($expanded49) - 1)|0;
     $16 = (($15) + ($expanded48))|0;
     $expanded54 = ((0) + 8|0);
     $expanded53 = $expanded54;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $17 = $16 & $expanded51;
     $18 = $17;
     $19 = load8($18);
     $arglist_next9 = ((($18)) + 8|0);
     store4($ap,$arglist_next9);
     store8($arg,$19);
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = load4($ap);
     $20 = $arglist_current11;
     $expanded57 = ((0) + 4|0);
     $expanded56 = $expanded57;
     $expanded55 = (($expanded56) - 1)|0;
     $21 = (($20) + ($expanded55))|0;
     $expanded61 = ((0) + 4|0);
     $expanded60 = $expanded61;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $22 = $21 & $expanded58;
     $23 = $22;
     $24 = load4($23);
     $arglist_next12 = ((($23)) + 4|0);
     store4($ap,$arglist_next12);
     $conv16 = $24&65535;
     $conv17 = i64_sext($conv16 << 16 >> 16);
     store8($arg,$conv17);
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = load4($ap);
     $25 = $arglist_current14;
     $expanded64 = ((0) + 4|0);
     $expanded63 = $expanded64;
     $expanded62 = (($expanded63) - 1)|0;
     $26 = (($25) + ($expanded62))|0;
     $expanded68 = ((0) + 4|0);
     $expanded67 = $expanded68;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $27 = $26 & $expanded65;
     $28 = $27;
     $29 = load4($28);
     $arglist_next15 = ((($28)) + 4|0);
     store4($ap,$arglist_next15);
     $conv22$mask = $29 & 65535;
     $conv23 = i64_zext($conv22$mask>>>0);
     store8($arg,$conv23);
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = load4($ap);
     $30 = $arglist_current17;
     $expanded71 = ((0) + 4|0);
     $expanded70 = $expanded71;
     $expanded69 = (($expanded70) - 1)|0;
     $31 = (($30) + ($expanded69))|0;
     $expanded75 = ((0) + 4|0);
     $expanded74 = $expanded75;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $32 = $31 & $expanded72;
     $33 = $32;
     $34 = load4($33);
     $arglist_next18 = ((($33)) + 4|0);
     store4($ap,$arglist_next18);
     $conv28 = $34&255;
     $conv29 = i64_sext($conv28 << 24 >> 24);
     store8($arg,$conv29);
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = load4($ap);
     $35 = $arglist_current20;
     $expanded78 = ((0) + 4|0);
     $expanded77 = $expanded78;
     $expanded76 = (($expanded77) - 1)|0;
     $36 = (($35) + ($expanded76))|0;
     $expanded82 = ((0) + 4|0);
     $expanded81 = $expanded82;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $37 = $36 & $expanded79;
     $38 = $37;
     $39 = load4($38);
     $arglist_next21 = ((($38)) + 4|0);
     store4($ap,$arglist_next21);
     $conv34$mask = $39 & 255;
     $conv35 = i64_zext($conv34$mask>>>0);
     store8($arg,$conv35);
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = load4($ap);
     $40 = $arglist_current23;
     $expanded85 = ((0) + 8|0);
     $expanded84 = $expanded85;
     $expanded83 = (($expanded84) - 1)|0;
     $41 = (($40) + ($expanded83))|0;
     $expanded89 = ((0) + 8|0);
     $expanded88 = $expanded89;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $42 = $41 & $expanded86;
     $43 = $42;
     $44 = loadd($43);
     $arglist_next24 = ((($43)) + 8|0);
     store4($ap,$arglist_next24);
     stored($arg,$44);
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = load4($ap);
     $45 = $arglist_current26;
     $expanded92 = ((0) + 8|0);
     $expanded91 = $expanded92;
     $expanded90 = (($expanded91) - 1)|0;
     $46 = (($45) + ($expanded90))|0;
     $expanded96 = ((0) + 8|0);
     $expanded95 = $expanded96;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $47 = $46 & $expanded93;
     $48 = $47;
     $49 = loadd($48);
     $arglist_next27 = ((($48)) + 8|0);
     store4($ap,$arglist_next27);
     stored($arg,$49);
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
function _fmt_x($x,$s,$lower) {
 $x = i64($x);
 $s = $s|0;
 $lower = $lower|0;
 var $0 = 0, $1 = 0, $arrayidx = 0, $conv1 = 0, $conv4 = 0, $idxprom = 0, $incdec$ptr = 0, $or = 0, $s$addr$0$lcssa = 0, $s$addr$06 = 0, $shr = i64(), $tobool = 0, $tobool5 = 0, $x$addr$07 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $tobool5 = i64_eq($x,i64_const(0,0));
 if ($tobool5) {
  $s$addr$0$lcssa = $s;
 } else {
  $s$addr$06 = $s;$x$addr$07 = $x;
  while(1) {
   $0 = i64_trunc($x$addr$07);
   $idxprom = $0 & 15;
   $arrayidx = (6422 + ($idxprom)|0);
   $1 = load1($arrayidx);
   $conv4 = $1&255;
   $or = $conv4 | $lower;
   $conv1 = $or&255;
   $incdec$ptr = ((($s$addr$06)) + -1|0);
   store1($incdec$ptr,$conv1);
   $shr = i64_lshr($x$addr$07,i64_const(4,0));
   $tobool = i64_eq($shr,i64_const(0,0));
   if ($tobool) {
    $s$addr$0$lcssa = $incdec$ptr;
    break;
   } else {
    $s$addr$06 = $incdec$ptr;$x$addr$07 = $shr;
   }
  }
 }
 return ($s$addr$0$lcssa|0);
}
function _fmt_o($x,$s) {
 $x = i64($x);
 $s = $s|0;
 var $0 = 0, $1 = 0, $conv = 0, $incdec$ptr = 0, $s$addr$0$lcssa = 0, $s$addr$06 = 0, $shr = i64(), $tobool = 0, $tobool4 = 0, $x$addr$05 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $tobool4 = i64_eq($x,i64_const(0,0));
 if ($tobool4) {
  $s$addr$0$lcssa = $s;
 } else {
  $s$addr$06 = $s;$x$addr$05 = $x;
  while(1) {
   $0 = i64_trunc($x$addr$05)&255;
   $1 = $0 & 7;
   $conv = $1 | 48;
   $incdec$ptr = ((($s$addr$06)) + -1|0);
   store1($incdec$ptr,$conv);
   $shr = i64_lshr($x$addr$05,i64_const(3,0));
   $tobool = i64_eq($shr,i64_const(0,0));
   if ($tobool) {
    $s$addr$0$lcssa = $incdec$ptr;
    break;
   } else {
    $s$addr$06 = $incdec$ptr;$x$addr$05 = $shr;
   }
  }
 }
 return ($s$addr$0$lcssa|0);
}
function _fmt_u($x,$s) {
 $x = i64($x);
 $s = $s|0;
 var $0 = 0, $1 = 0, $add5 = 0, $cmp = 0, $cmp11 = 0, $conv = 0, $conv6 = 0, $div = i64(), $div9 = 0, $extract$t = 0, $extract$t16 = 0, $incdec$ptr = 0, $incdec$ptr7 = 0, $rem = i64(), $rem4 = 0, $s$addr$0$lcssa = 0, $s$addr$013 = 0, $s$addr$1$lcssa = 0, $s$addr$19 = 0, $tobool8 = 0;
 var $x$addr$0$lcssa$off0 = 0, $x$addr$012 = i64(), $y$010 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp11 = i64_ugt($x,i64_const(4294967295,0));
 $extract$t = i64_trunc($x);
 if ($cmp11) {
  $s$addr$013 = $s;$x$addr$012 = $x;
  while(1) {
   $rem = i64_urem($x$addr$012,i64_const(10,0));
   $0 = i64_trunc($rem)&255;
   $conv = $0 | 48;
   $incdec$ptr = ((($s$addr$013)) + -1|0);
   store1($incdec$ptr,$conv);
   $div = i64_udiv($x$addr$012,i64_const(10,0));
   $cmp = i64_ugt($x$addr$012,i64_const(4294967295,9));
   if ($cmp) {
    $s$addr$013 = $incdec$ptr;$x$addr$012 = $div;
   } else {
    break;
   }
  }
  $extract$t16 = i64_trunc($div);
  $s$addr$0$lcssa = $incdec$ptr;$x$addr$0$lcssa$off0 = $extract$t16;
 } else {
  $s$addr$0$lcssa = $s;$x$addr$0$lcssa$off0 = $extract$t;
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
   store1($incdec$ptr7,$conv6);
   $div9 = (($y$010>>>0) / 10)&-1;
   $1 = ($y$010>>>0)<(10);
   if ($1) {
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
 var $call1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call1 = (___strerror_l($e,(9540))|0);
 return ($call1|0);
}
function _memchr($src,$n) {
 $src = $src|0;
 $n = $n|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $and = 0, $and15 = 0, $and16 = 0, $and39 = 0, $cmp = 0, $cmp11 = 0, $cmp1132 = 0, $cmp28 = 0, $cmp8 = 0, $cond = 0, $dec = 0, $dec34 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0;
 var $incdec$ptr33 = 0, $lnot = 0, $n$addr$0$lcssa = 0, $n$addr$043 = 0, $n$addr$1$lcssa = 0, $n$addr$133 = 0, $n$addr$227 = 0, $n$addr$3 = 0, $neg = 0, $or$cond = 0, $or$cond42 = 0, $s$0$lcssa = 0, $s$044 = 0, $s$128 = 0, $s$2 = 0, $sub = 0, $sub22 = 0, $tobool = 0, $tobool2 = 0, $tobool2$lcssa = 0;
 var $tobool241 = 0, $tobool25 = 0, $tobool2526 = 0, $tobool36 = 0, $tobool40 = 0, $w$0$lcssa = 0, $w$034 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $src;
 $and39 = $0 & 3;
 $tobool40 = ($and39|0)!=(0);
 $tobool241 = ($n|0)!=(0);
 $or$cond42 = $tobool241 & $tobool40;
 L1: do {
  if ($or$cond42) {
   $n$addr$043 = $n;$s$044 = $src;
   while(1) {
    $1 = load1($s$044);
    $cmp = ($1<<24>>24)==(0);
    if ($cmp) {
     $n$addr$3 = $n$addr$043;$s$2 = $s$044;
     break L1;
    }
    $incdec$ptr = ((($s$044)) + 1|0);
    $dec = (($n$addr$043) + -1)|0;
    $2 = $incdec$ptr;
    $and = $2 & 3;
    $tobool = ($and|0)!=(0);
    $tobool2 = ($dec|0)!=(0);
    $or$cond = $tobool2 & $tobool;
    if ($or$cond) {
     $n$addr$043 = $dec;$s$044 = $incdec$ptr;
    } else {
     $n$addr$0$lcssa = $dec;$s$0$lcssa = $incdec$ptr;$tobool2$lcssa = $tobool2;
     label = 4;
     break;
    }
   }
  } else {
   $n$addr$0$lcssa = $n;$s$0$lcssa = $src;$tobool2$lcssa = $tobool241;
   label = 4;
  }
 } while(0);
 L5: do {
  if ((label|0) == 4) {
   if ($tobool2$lcssa) {
    $$pre = load1($s$0$lcssa);
    $cmp8 = ($$pre<<24>>24)==(0);
    if ($cmp8) {
     $n$addr$3 = $n$addr$0$lcssa;$s$2 = $s$0$lcssa;
    } else {
     $cmp1132 = ($n$addr$0$lcssa>>>0)>(3);
     L9: do {
      if ($cmp1132) {
       $n$addr$133 = $n$addr$0$lcssa;$w$034 = $s$0$lcssa;
       while(1) {
        $3 = load4($w$034);
        $sub = (($3) + -16843009)|0;
        $neg = $3 & -2139062144;
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
         label = 10;
         break L9;
        }
       }
       $n$addr$227 = $n$addr$133;$s$128 = $w$034;
      } else {
       $n$addr$1$lcssa = $n$addr$0$lcssa;$w$0$lcssa = $s$0$lcssa;
       label = 10;
      }
     } while(0);
     if ((label|0) == 10) {
      $tobool2526 = ($n$addr$1$lcssa|0)==(0);
      if ($tobool2526) {
       $n$addr$3 = 0;$s$2 = $w$0$lcssa;
       break;
      } else {
       $n$addr$227 = $n$addr$1$lcssa;$s$128 = $w$0$lcssa;
      }
     }
     while(1) {
      $4 = load1($s$128);
      $cmp28 = ($4<<24>>24)==(0);
      if ($cmp28) {
       $n$addr$3 = $n$addr$227;$s$2 = $s$128;
       break L5;
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
   } else {
    $n$addr$3 = 0;$s$2 = $s$0$lcssa;
   }
  }
 } while(0);
 $tobool36 = ($n$addr$3|0)!=(0);
 $cond = $tobool36 ? $s$2 : 0;
 return ($cond|0);
}
function _pad_684($f,$c,$w,$l,$fl) {
 $f = $f|0;
 $c = $c|0;
 $w = $w|0;
 $l = $l|0;
 $fl = $fl|0;
 var $0 = 0, $1 = 0, $and = 0, $cmp = 0, $cmp3 = 0, $cmp38 = 0, $cond = 0, $l$addr$0$lcssa = 0, $l$addr$09 = 0, $or$cond = 0, $pad = 0, $sub = 0, $sub6 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $pad = sp;
 $and = $fl & 73728;
 $tobool = ($and|0)==(0);
 $cmp = ($w|0)>($l|0);
 $or$cond = $cmp & $tobool;
 if ($or$cond) {
  $sub = (($w) - ($l))|0;
  $0 = ($sub>>>0)<(256);
  $cond = $0 ? $sub : 256;
  _memset(($pad|0),($c|0),($cond|0))|0;
  $cmp38 = ($sub>>>0)>(255);
  if ($cmp38) {
   $l$addr$09 = $sub;
   while(1) {
    _out($f,$pad,256);
    $sub6 = (($l$addr$09) + -256)|0;
    $cmp3 = ($sub6>>>0)>(255);
    if ($cmp3) {
     $l$addr$09 = $sub6;
    } else {
     break;
    }
   }
   $1 = $sub & 255;
   $l$addr$0$lcssa = $1;
  } else {
   $l$addr$0$lcssa = $sub;
  }
  _out($f,$pad,$l$addr$0$lcssa);
 }
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
  $call = (_wcrtomb($s,$wc)|0);
  $retval$0 = $call;
 }
 return ($retval$0|0);
}
function _fmt_fp($f,$y,$w,$p,$fl,$t) {
 $f = $f|0;
 $y = +$y;
 $w = $w|0;
 $p = $p|0;
 $fl = $fl|0;
 $t = $t|0;
 var $$ = 0, $$$ = 0, $$$405 = 0.0, $$394$ = 0, $$397 = 0.0, $$405 = 0.0, $$p = 0, $$p$inc468 = 0, $$pr = 0, $$pr407 = 0, $$pre = 0, $$pre487 = 0, $$sub514 = 0, $$sub562 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
 var $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0;
 var $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0;
 var $50 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $a$1$lcssa = 0, $a$1476 = 0, $a$2$ph = 0, $a$3$lcssa = 0, $a$3466 = 0, $a$5$lcssa = 0, $a$5448 = 0, $a$6 = 0, $a$8 = 0, $a$9$ph = 0, $add = 0, $add$ptr213 = 0, $add$ptr311 = 0, $add$ptr311$z$4 = 0, $add$ptr354 = 0;
 var $add$ptr358 = 0, $add$ptr373 = 0, $add$ptr442 = 0, $add$ptr442$z$3 = 0, $add$ptr65 = 0, $add$ptr671 = 0, $add$ptr742 = 0, $add$ptr756 = 0, $add113 = 0, $add150 = 0, $add150$pn = 0, $add165 = 0, $add240 = i64(), $add273 = 0, $add275 = 0, $add284 = 0, $add313 = 0, $add355 = 0, $add410 = 0.0, $add414 = 0;
 var $add477$neg = 0, $add561 = 0, $add608 = 0, $add612 = 0, $add620 = 0, $add653 = 0, $add653$sink406 = 0, $add67 = 0, $add737 = 0, $add810 = 0, $add87 = 0.0, $add90 = 0.0, $and = 0, $and12 = 0, $and134 = 0, $and27 = i64(), $and282 = 0, $and36 = 0, $and379 = 0, $and45 = 0;
 var $and483 = 0, $and610$pre$phiZ2D = 0, $and62 = 0, $arraydecay208$add$ptr213 = 0, $arrayidx = 0, $arrayidx117 = 0, $arrayidx251 = 0, $arrayidx453 = 0, $arrayidx489 = 0, $big = 0, $buf = 0, $call102 = 0, $call2 = i64(), $call26 = i64(), $call55 = 0.0, $call631 = 0, $call672 = 0, $call719 = 0, $call757 = 0, $carry$0471 = 0;
 var $carry262$0462 = 0, $cmp103 = 0, $cmp127 = 0, $cmp147 = 0, $cmp205 = 0, $cmp225 = 0, $cmp225474 = 0, $cmp235 = 0, $cmp235470 = 0, $cmp249 = 0, $cmp259 = 0, $cmp259464 = 0, $cmp277 = 0, $cmp277460 = 0, $cmp28 = 0, $cmp299 = 0, $cmp308 = 0, $cmp315 = 0, $cmp324 = 0, $cmp324456 = 0;
 var $cmp333 = 0, $cmp338 = 0, $cmp350 = 0, $cmp363452 = 0, $cmp374 = 0, $cmp38 = 0, $cmp385 = 0, $cmp390 = 0, $cmp403 = 0, $cmp411 = 0, $cmp416 = 0, $cmp416446 = 0, $cmp420 = 0, $cmp433 = 0, $cmp433442 = 0, $cmp443 = 0, $cmp450 = 0, $cmp450$lcssa = 0, $cmp470 = 0, $cmp473 = 0;
 var $cmp495 = 0, $cmp495438 = 0, $cmp505 = 0, $cmp528 = 0, $cmp577 = 0, $cmp59 = 0, $cmp614 = 0, $cmp617 = 0, $cmp623 = 0, $cmp636 = 0, $cmp636433 = 0, $cmp660 = 0, $cmp665 = 0, $cmp673 = 0, $cmp678 = 0, $cmp678419 = 0, $cmp68 = 0, $cmp686 = 0, $cmp707 = 0, $cmp707414 = 0;
 var $cmp710 = 0, $cmp710415 = 0, $cmp722 = 0, $cmp722411 = 0, $cmp745 = 0, $cmp748 = 0, $cmp748427 = 0, $cmp760 = 0, $cmp765 = 0, $cmp770 = 0, $cmp770423 = 0, $cmp777 = 0, $cmp790 = 0, $cmp818 = 0, $cmp82 = 0, $cmp94 = 0, $cond = 0, $cond100 = 0, $cond233 = 0, $cond271 = 0;
 var $cond304 = 0, $cond43 = 0, $cond629 = 0, $cond732 = 0, $cond800 = 0, $conv101 = i64(), $conv111 = 0, $conv114 = 0, $conv116 = 0, $conv118393 = 0, $conv121 = 0, $conv123 = 0.0, $conv216 = 0, $conv218 = 0.0, $conv238 = i64(), $conv239 = i64(), $conv241 = 0, $conv242 = 0, $conv630 = i64(), $conv644 = 0;
 var $conv646 = 0, $conv669 = i64(), $conv716 = i64(), $conv754 = i64(), $d$0 = 0, $d$0469 = 0, $d$0472 = 0, $d$1461 = 0, $d$4 = 0, $d$5422 = 0, $d$6416 = 0, $d$7428 = 0, $dec = 0, $dec78 = 0, $div = i64(), $div274 = 0, $div356 = 0, $div378 = 0, $div384 = 0, $e$0458 = 0;
 var $e$1 = 0, $e$2444 = 0, $e$4 = 0, $e$5$ph = 0, $e2 = 0, $ebuf0 = 0, $estr$0 = 0, $estr$1$lcssa = 0, $estr$1434 = 0, $estr$2 = 0, $exitcond = 0, $i$0457 = 0, $i$1$lcssa = 0, $i$1453 = 0, $i$2443 = 0, $i$3439 = 0, $inc = 0, $inc425 = 0, $inc438 = 0, $inc468 = 0;
 var $inc500 = 0, $incdec$ptr106 = 0, $incdec$ptr112 = 0, $incdec$ptr115 = 0, $incdec$ptr122 = 0, $incdec$ptr137 = 0, $incdec$ptr217 = 0, $incdec$ptr246 = 0, $incdec$ptr288 = 0, $incdec$ptr292 = 0, $incdec$ptr292$a$3 = 0, $incdec$ptr292$a$3492 = 0, $incdec$ptr292$a$3494 = 0, $incdec$ptr292491 = 0, $incdec$ptr296 = 0, $incdec$ptr419 = 0, $incdec$ptr419$sink$lcssa = 0, $incdec$ptr419$sink447 = 0, $incdec$ptr423 = 0, $incdec$ptr639 = 0;
 var $incdec$ptr645 = 0, $incdec$ptr647 = 0, $incdec$ptr681 = 0, $incdec$ptr689 = 0, $incdec$ptr698 = 0, $incdec$ptr725 = 0, $incdec$ptr734 = 0, $incdec$ptr763 = 0, $incdec$ptr773 = 0, $incdec$ptr776 = 0, $incdec$ptr808 = 0, $j$0 = 0, $j$0451 = 0, $j$0454 = 0, $j$1440 = 0, $j$2 = 0, $l$0 = 0, $l$1 = 0, $land$ext$neg = 0, $lnot = 0;
 var $lnot455 = 0, $lor$ext = 0, $mul = 0.0, $mul125 = 0.0, $mul202 = 0.0, $mul220 = 0.0, $mul286 = 0, $mul322 = 0, $mul328 = 0, $mul335 = 0, $mul349 = 0, $mul367 = 0, $mul406 = 0.0, $mul406$$397 = 0.0, $mul407 = 0.0, $mul407$$$405 = 0.0, $mul431 = 0, $mul437 = 0, $mul499 = 0, $mul513 = 0;
 var $mul80 = 0.0, $narrow = 0, $not$tobool341 = 0, $notlhs = 0, $notrhs = 0, $or = 0, $or$cond = 0, $or$cond1$not = 0, $or$cond2 = 0, $or$cond395 = 0, $or$cond396 = 0, $or$cond398 = 0, $or$cond402 = 0, $or120 = 0, $or504 = 0, $or613 = 0, $p$addr$2 = 0, $p$addr$2$$sub514399 = 0, $p$addr$2$$sub562400 = 0, $p$addr$3 = 0;
 var $p$addr$4$lcssa = 0, $p$addr$4417 = 0, $p$addr$5$lcssa = 0, $p$addr$5429 = 0, $pl$0 = 0, $prefix$0 = 0, $prefix$0$add$ptr65 = 0, $r$0$a$9 = 0, $re$1410 = 0, $rem = i64(), $rem360 = 0, $rem370 = 0, $rem494 = 0, $rem494437 = 0, $round$0409 = 0.0, $round377$1 = 0.0, $s$0 = 0, $s$1 = 0, $s35$0 = 0, $s668$0420 = 0;
 var $s668$1 = 0, $s715$0$lcssa = 0, $s715$0412 = 0, $s753$0 = 0, $s753$1424 = 0, $s753$2 = 0, $scevgep483 = 0, $scevgep483484 = 0, $sh_prom = i64(), $shl = i64(), $shl280 = 0, $shr283 = 0, $shr285 = 0, $small$1 = 0.0, $sub = 0.0, $sub$ptr$div = 0, $sub$ptr$div321 = 0, $sub$ptr$div347 = 0, $sub$ptr$div430 = 0, $sub$ptr$div511 = 0;
 var $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast143 = 0, $sub$ptr$lhs$cast151 = 0, $sub$ptr$lhs$cast305 = 0, $sub$ptr$lhs$cast318 = 0, $sub$ptr$lhs$cast344 = 0, $sub$ptr$lhs$cast508 = 0, $sub$ptr$lhs$cast633 = 0, $sub$ptr$lhs$cast694 = 0, $sub$ptr$lhs$cast787 = 0, $sub$ptr$lhs$cast811 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast152 = 0, $sub$ptr$rhs$cast306 = 0, $sub$ptr$rhs$cast319 = 0, $sub$ptr$rhs$cast428 = 0, $sub$ptr$rhs$cast634 = 0, $sub$ptr$rhs$cast634431 = 0, $sub$ptr$rhs$cast649 = 0, $sub$ptr$rhs$cast695 = 0;
 var $sub$ptr$rhs$cast788 = 0, $sub$ptr$rhs$cast812 = 0, $sub$ptr$sub = 0, $sub$ptr$sub145 = 0, $sub$ptr$sub153 = 0, $sub$ptr$sub307 = 0, $sub$ptr$sub320 = 0, $sub$ptr$sub346 = 0, $sub$ptr$sub429 = 0, $sub$ptr$sub510 = 0, $sub$ptr$sub635 = 0, $sub$ptr$sub635432 = 0, $sub$ptr$sub650 = 0, $sub$ptr$sub650$pn = 0, $sub$ptr$sub696 = 0, $sub$ptr$sub789 = 0, $sub$ptr$sub813 = 0, $sub124 = 0.0, $sub146 = 0, $sub181 = 0;
 var $sub203 = 0, $sub219 = 0.0, $sub256 = 0, $sub264 = 0, $sub281 = 0, $sub336 = 0, $sub343 = 0, $sub357 = 0, $sub409 = 0, $sub478$neg = 0, $sub514 = 0, $sub562 = 0, $sub626$le = 0, $sub735 = 0, $sub74 = 0, $sub806 = 0, $sub85 = 0.0, $sub86 = 0.0, $sub88 = 0.0, $sub91 = 0.0;
 var $sub97 = 0, $t$addr$0 = 0, $t$addr$0$v = 0, $t$addr$1 = 0, $tobool13 = 0, $tobool135 = 0, $tobool139 = 0, $tobool140 = 0, $tobool222 = 0, $tobool244 = 0, $tobool290 = 0, $tobool290490 = 0, $tobool294 = 0, $tobool341 = 0, $tobool37 = 0, $tobool371 = 0, $tobool380 = 0, $tobool400 = 0, $tobool484 = 0, $tobool490 = 0;
 var $tobool5 = 0, $tobool56 = 0, $tobool63 = 0, $tobool76 = 0, $tobool76488 = 0, $tobool781 = 0, $tobool79 = 0, $tobool9 = 0, $w$add653 = 0, $xor = 0, $xor167 = 0, $xor186 = 0, $xor655 = 0, $xor816 = 0, $y$addr$0 = 0.0, $y$addr$1 = 0.0, $y$addr$2 = 0.0, $y$addr$3 = 0.0, $y$addr$4 = 0.0, $z$0 = 0;
 var $z$1$lcssa = 0, $z$1475 = 0, $z$2 = 0, $z$3$lcssa = 0, $z$3465 = 0, $z$4 = 0, $z$7 = 0, $z$7$add$ptr742 = 0, $z$7$ph = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 560|0;
 $big = sp + 8|0;
 $e2 = sp;
 $buf = sp + 524|0;
 $sub$ptr$rhs$cast = $buf;
 $ebuf0 = sp + 512|0;
 store4($e2,0);
 $arrayidx = ((($ebuf0)) + 12|0);
 $call2 = (i64(___DOUBLE_BITS_685($y)));
 $tobool5 = i64_slt($call2,i64_const(0,0));
 if ($tobool5) {
  $sub = -$y;
  $pl$0 = 1;$prefix$0 = 6391;$y$addr$0 = $sub;
 } else {
  $and = $fl & 2048;
  $tobool9 = ($and|0)==(0);
  $and12 = $fl & 1;
  $tobool13 = ($and12|0)==(0);
  $$ = $tobool13 ? (6392) : (6397);
  $$$ = $tobool9 ? $$ : (6394);
  $0 = $fl & 2049;
  $narrow = ($0|0)!=(0);
  $$394$ = $narrow&1;
  $pl$0 = $$394$;$prefix$0 = $$$;$y$addr$0 = $y;
 }
 $call26 = (i64(___DOUBLE_BITS_685($y$addr$0)));
 $and27 = i64_and($call26,i64_const(0,2146435072));
 $cmp28 = i64_ult($and27,i64_const(0,2146435072));
 do {
  if ($cmp28) {
   $call55 = (+_frexpl($y$addr$0,$e2));
   $mul = $call55 * 2.0;
   $tobool56 = $mul != 0.0;
   if ($tobool56) {
    $1 = load4($e2);
    $dec = (($1) + -1)|0;
    store4($e2,$dec);
   }
   $or = $t | 32;
   $cmp59 = ($or|0)==(97);
   if ($cmp59) {
    $and62 = $t & 32;
    $tobool63 = ($and62|0)==(0);
    $add$ptr65 = ((($prefix$0)) + 9|0);
    $prefix$0$add$ptr65 = $tobool63 ? $prefix$0 : $add$ptr65;
    $add67 = $pl$0 | 2;
    $2 = ($p>>>0)>(11);
    $sub74 = (12 - ($p))|0;
    $tobool76488 = ($sub74|0)==(0);
    $tobool76 = $2 | $tobool76488;
    do {
     if ($tobool76) {
      $y$addr$1 = $mul;
     } else {
      $re$1410 = $sub74;$round$0409 = 8.0;
      while(1) {
       $dec78 = (($re$1410) + -1)|0;
       $mul80 = $round$0409 * 16.0;
       $tobool79 = ($dec78|0)==(0);
       if ($tobool79) {
        break;
       } else {
        $re$1410 = $dec78;$round$0409 = $mul80;
       }
      }
      $3 = load1($prefix$0$add$ptr65);
      $cmp82 = ($3<<24>>24)==(45);
      if ($cmp82) {
       $sub85 = -$mul;
       $sub86 = $sub85 - $mul80;
       $add87 = $mul80 + $sub86;
       $sub88 = -$add87;
       $y$addr$1 = $sub88;
       break;
      } else {
       $add90 = $mul + $mul80;
       $sub91 = $add90 - $mul80;
       $y$addr$1 = $sub91;
       break;
      }
     }
    } while(0);
    $4 = load4($e2);
    $cmp94 = ($4|0)<(0);
    $sub97 = (0 - ($4))|0;
    $cond100 = $cmp94 ? $sub97 : $4;
    $conv101 = i64_sext($cond100);
    $call102 = (_fmt_u($conv101,$arrayidx)|0);
    $cmp103 = ($call102|0)==($arrayidx|0);
    if ($cmp103) {
     $incdec$ptr106 = ((($ebuf0)) + 11|0);
     store1($incdec$ptr106,48);
     $estr$0 = $incdec$ptr106;
    } else {
     $estr$0 = $call102;
    }
    $5 = $4 >> 31;
    $6 = $5 & 2;
    $7 = (($6) + 43)|0;
    $conv111 = $7&255;
    $incdec$ptr112 = ((($estr$0)) + -1|0);
    store1($incdec$ptr112,$conv111);
    $add113 = (($t) + 15)|0;
    $conv114 = $add113&255;
    $incdec$ptr115 = ((($estr$0)) + -2|0);
    store1($incdec$ptr115,$conv114);
    $notrhs = ($p|0)<(1);
    $and134 = $fl & 8;
    $tobool135 = ($and134|0)==(0);
    $s$0 = $buf;$y$addr$2 = $y$addr$1;
    while(1) {
     $conv116 = (~~(($y$addr$2)));
     $arrayidx117 = (6422 + ($conv116)|0);
     $8 = load1($arrayidx117);
     $conv118393 = $8&255;
     $or120 = $conv118393 | $and62;
     $conv121 = $or120&255;
     $incdec$ptr122 = ((($s$0)) + 1|0);
     store1($s$0,$conv121);
     $conv123 = (+($conv116|0));
     $sub124 = $y$addr$2 - $conv123;
     $mul125 = $sub124 * 16.0;
     $sub$ptr$lhs$cast = $incdec$ptr122;
     $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
     $cmp127 = ($sub$ptr$sub|0)==(1);
     if ($cmp127) {
      $notlhs = $mul125 == 0.0;
      $or$cond1$not = $notrhs & $notlhs;
      $or$cond = $tobool135 & $or$cond1$not;
      if ($or$cond) {
       $s$1 = $incdec$ptr122;
      } else {
       $incdec$ptr137 = ((($s$0)) + 2|0);
       store1($incdec$ptr122,46);
       $s$1 = $incdec$ptr137;
      }
     } else {
      $s$1 = $incdec$ptr122;
     }
     $tobool139 = $mul125 != 0.0;
     if ($tobool139) {
      $s$0 = $s$1;$y$addr$2 = $mul125;
     } else {
      break;
     }
    }
    $tobool140 = ($p|0)!=(0);
    $sub$ptr$rhs$cast152 = $incdec$ptr115;
    $sub$ptr$lhs$cast151 = $arrayidx;
    $sub$ptr$lhs$cast143 = $s$1;
    $sub$ptr$sub145 = (($sub$ptr$lhs$cast143) - ($sub$ptr$rhs$cast))|0;
    $sub$ptr$sub153 = (($sub$ptr$lhs$cast151) - ($sub$ptr$rhs$cast152))|0;
    $sub146 = (($sub$ptr$sub145) + -2)|0;
    $cmp147 = ($sub146|0)<($p|0);
    $or$cond395 = $tobool140 & $cmp147;
    $add150 = (($p) + 2)|0;
    $add150$pn = $or$cond395 ? $add150 : $sub$ptr$sub145;
    $l$0 = (($sub$ptr$sub153) + ($add67))|0;
    $add165 = (($l$0) + ($add150$pn))|0;
    _pad_684($f,32,$w,$add165,$fl);
    _out($f,$prefix$0$add$ptr65,$add67);
    $xor167 = $fl ^ 65536;
    _pad_684($f,48,$w,$add165,$xor167);
    _out($f,$buf,$sub$ptr$sub145);
    $sub181 = (($add150$pn) - ($sub$ptr$sub145))|0;
    _pad_684($f,48,$sub181,0,0);
    _out($f,$incdec$ptr115,$sub$ptr$sub153);
    $xor186 = $fl ^ 8192;
    _pad_684($f,32,$w,$add165,$xor186);
    $add653$sink406 = $add165;
    break;
   }
   $cmp68 = ($p|0)<(0);
   $$p = $cmp68 ? 6 : $p;
   if ($tobool56) {
    $mul202 = $mul * 268435456.0;
    $9 = load4($e2);
    $sub203 = (($9) + -28)|0;
    store4($e2,$sub203);
    $$pr = $sub203;$y$addr$3 = $mul202;
   } else {
    $$pre = load4($e2);
    $$pr = $$pre;$y$addr$3 = $mul;
   }
   $cmp205 = ($$pr|0)<(0);
   $add$ptr213 = ((($big)) + 288|0);
   $arraydecay208$add$ptr213 = $cmp205 ? $big : $add$ptr213;
   $y$addr$4 = $y$addr$3;$z$0 = $arraydecay208$add$ptr213;
   while(1) {
    $conv216 = (~~(($y$addr$4))>>>0);
    store4($z$0,$conv216);
    $incdec$ptr217 = ((($z$0)) + 4|0);
    $conv218 = (+($conv216>>>0));
    $sub219 = $y$addr$4 - $conv218;
    $mul220 = $sub219 * 1.0E+9;
    $tobool222 = $mul220 != 0.0;
    if ($tobool222) {
     $y$addr$4 = $mul220;$z$0 = $incdec$ptr217;
    } else {
     break;
    }
   }
   $cmp225474 = ($$pr|0)>(0);
   if ($cmp225474) {
    $11 = $$pr;$a$1476 = $arraydecay208$add$ptr213;$z$1475 = $incdec$ptr217;
    while(1) {
     $10 = ($11|0)<(29);
     $cond233 = $10 ? $11 : 29;
     $d$0469 = ((($z$1475)) + -4|0);
     $cmp235470 = ($d$0469>>>0)<($a$1476>>>0);
     if ($cmp235470) {
      $a$2$ph = $a$1476;
     } else {
      $sh_prom = i64_zext($cond233>>>0);
      $carry$0471 = 0;$d$0472 = $d$0469;
      while(1) {
       $12 = load4($d$0472);
       $conv238 = i64_zext($12>>>0);
       $shl = i64_shl($conv238,$sh_prom);
       $conv239 = i64_zext($carry$0471>>>0);
       $add240 = i64_add($shl,$conv239);
       $rem = i64_urem($add240,i64_const(1000000000,0));
       $conv241 = i64_trunc($rem);
       store4($d$0472,$conv241);
       $div = i64_udiv($add240,i64_const(1000000000,0));
       $conv242 = i64_trunc($div);
       $d$0 = ((($d$0472)) + -4|0);
       $cmp235 = ($d$0>>>0)<($a$1476>>>0);
       if ($cmp235) {
        break;
       } else {
        $carry$0471 = $conv242;$d$0472 = $d$0;
       }
      }
      $tobool244 = ($conv242|0)==(0);
      if ($tobool244) {
       $a$2$ph = $a$1476;
      } else {
       $incdec$ptr246 = ((($a$1476)) + -4|0);
       store4($incdec$ptr246,$conv242);
       $a$2$ph = $incdec$ptr246;
      }
     }
     $z$2 = $z$1475;
     while(1) {
      $cmp249 = ($z$2>>>0)>($a$2$ph>>>0);
      if (!($cmp249)) {
       break;
      }
      $arrayidx251 = ((($z$2)) + -4|0);
      $13 = load4($arrayidx251);
      $lnot = ($13|0)==(0);
      if ($lnot) {
       $z$2 = $arrayidx251;
      } else {
       break;
      }
     }
     $14 = load4($e2);
     $sub256 = (($14) - ($cond233))|0;
     store4($e2,$sub256);
     $cmp225 = ($sub256|0)>(0);
     if ($cmp225) {
      $11 = $sub256;$a$1476 = $a$2$ph;$z$1475 = $z$2;
     } else {
      $$pr407 = $sub256;$a$1$lcssa = $a$2$ph;$z$1$lcssa = $z$2;
      break;
     }
    }
   } else {
    $$pr407 = $$pr;$a$1$lcssa = $arraydecay208$add$ptr213;$z$1$lcssa = $incdec$ptr217;
   }
   $cmp259464 = ($$pr407|0)<(0);
   if ($cmp259464) {
    $add273 = (($$p) + 25)|0;
    $div274 = (($add273|0) / 9)&-1;
    $add275 = (($div274) + 1)|0;
    $cmp299 = ($or|0)==(102);
    $15 = $$pr407;$a$3466 = $a$1$lcssa;$z$3465 = $z$1$lcssa;
    while(1) {
     $sub264 = (0 - ($15))|0;
     $16 = ($sub264|0)<(9);
     $cond271 = $16 ? $sub264 : 9;
     $cmp277460 = ($a$3466>>>0)<($z$3465>>>0);
     if ($cmp277460) {
      $shl280 = 1 << $cond271;
      $sub281 = (($shl280) + -1)|0;
      $shr285 = 1000000000 >>> $cond271;
      $carry262$0462 = 0;$d$1461 = $a$3466;
      while(1) {
       $18 = load4($d$1461);
       $and282 = $18 & $sub281;
       $shr283 = $18 >>> $cond271;
       $add284 = (($shr283) + ($carry262$0462))|0;
       store4($d$1461,$add284);
       $mul286 = Math_imul($and282, $shr285)|0;
       $incdec$ptr288 = ((($d$1461)) + 4|0);
       $cmp277 = ($incdec$ptr288>>>0)<($z$3465>>>0);
       if ($cmp277) {
        $carry262$0462 = $mul286;$d$1461 = $incdec$ptr288;
       } else {
        break;
       }
      }
      $19 = load4($a$3466);
      $tobool290 = ($19|0)==(0);
      $incdec$ptr292 = ((($a$3466)) + 4|0);
      $incdec$ptr292$a$3 = $tobool290 ? $incdec$ptr292 : $a$3466;
      $tobool294 = ($mul286|0)==(0);
      if ($tobool294) {
       $incdec$ptr292$a$3494 = $incdec$ptr292$a$3;$z$4 = $z$3465;
      } else {
       $incdec$ptr296 = ((($z$3465)) + 4|0);
       store4($z$3465,$mul286);
       $incdec$ptr292$a$3494 = $incdec$ptr292$a$3;$z$4 = $incdec$ptr296;
      }
     } else {
      $17 = load4($a$3466);
      $tobool290490 = ($17|0)==(0);
      $incdec$ptr292491 = ((($a$3466)) + 4|0);
      $incdec$ptr292$a$3492 = $tobool290490 ? $incdec$ptr292491 : $a$3466;
      $incdec$ptr292$a$3494 = $incdec$ptr292$a$3492;$z$4 = $z$3465;
     }
     $cond304 = $cmp299 ? $arraydecay208$add$ptr213 : $incdec$ptr292$a$3494;
     $sub$ptr$lhs$cast305 = $z$4;
     $sub$ptr$rhs$cast306 = $cond304;
     $sub$ptr$sub307 = (($sub$ptr$lhs$cast305) - ($sub$ptr$rhs$cast306))|0;
     $sub$ptr$div = $sub$ptr$sub307 >> 2;
     $cmp308 = ($sub$ptr$div|0)>($add275|0);
     $add$ptr311 = (($cond304) + ($add275<<2)|0);
     $add$ptr311$z$4 = $cmp308 ? $add$ptr311 : $z$4;
     $20 = load4($e2);
     $add313 = (($20) + ($cond271))|0;
     store4($e2,$add313);
     $cmp259 = ($add313|0)<(0);
     if ($cmp259) {
      $15 = $add313;$a$3466 = $incdec$ptr292$a$3494;$z$3465 = $add$ptr311$z$4;
     } else {
      $a$3$lcssa = $incdec$ptr292$a$3494;$z$3$lcssa = $add$ptr311$z$4;
      break;
     }
    }
   } else {
    $a$3$lcssa = $a$1$lcssa;$z$3$lcssa = $z$1$lcssa;
   }
   $cmp315 = ($a$3$lcssa>>>0)<($z$3$lcssa>>>0);
   $sub$ptr$lhs$cast318 = $arraydecay208$add$ptr213;
   if ($cmp315) {
    $sub$ptr$rhs$cast319 = $a$3$lcssa;
    $sub$ptr$sub320 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast319))|0;
    $sub$ptr$div321 = $sub$ptr$sub320 >> 2;
    $mul322 = ($sub$ptr$div321*9)|0;
    $21 = load4($a$3$lcssa);
    $cmp324456 = ($21>>>0)<(10);
    if ($cmp324456) {
     $e$1 = $mul322;
    } else {
     $e$0458 = $mul322;$i$0457 = 10;
     while(1) {
      $mul328 = ($i$0457*10)|0;
      $inc = (($e$0458) + 1)|0;
      $cmp324 = ($21>>>0)<($mul328>>>0);
      if ($cmp324) {
       $e$1 = $inc;
       break;
      } else {
       $e$0458 = $inc;$i$0457 = $mul328;
      }
     }
    }
   } else {
    $e$1 = 0;
   }
   $cmp333 = ($or|0)!=(102);
   $mul335 = $cmp333 ? $e$1 : 0;
   $sub336 = (($$p) - ($mul335))|0;
   $cmp338 = ($or|0)==(103);
   $tobool341 = ($$p|0)!=(0);
   $22 = $tobool341 & $cmp338;
   $land$ext$neg = $22 << 31 >> 31;
   $sub343 = (($sub336) + ($land$ext$neg))|0;
   $sub$ptr$lhs$cast344 = $z$3$lcssa;
   $sub$ptr$sub346 = (($sub$ptr$lhs$cast344) - ($sub$ptr$lhs$cast318))|0;
   $sub$ptr$div347 = $sub$ptr$sub346 >> 2;
   $23 = ($sub$ptr$div347*9)|0;
   $mul349 = (($23) + -9)|0;
   $cmp350 = ($sub343|0)<($mul349|0);
   if ($cmp350) {
    $add$ptr354 = ((($arraydecay208$add$ptr213)) + 4|0);
    $add355 = (($sub343) + 9216)|0;
    $div356 = (($add355|0) / 9)&-1;
    $sub357 = (($div356) + -1024)|0;
    $add$ptr358 = (($add$ptr354) + ($sub357<<2)|0);
    $rem360 = (($add355|0) % 9)&-1;
    $j$0451 = (($rem360) + 1)|0;
    $cmp363452 = ($j$0451|0)<(9);
    if ($cmp363452) {
     $i$1453 = 10;$j$0454 = $j$0451;
     while(1) {
      $mul367 = ($i$1453*10)|0;
      $j$0 = (($j$0454) + 1)|0;
      $exitcond = ($j$0|0)==(9);
      if ($exitcond) {
       $i$1$lcssa = $mul367;
       break;
      } else {
       $i$1453 = $mul367;$j$0454 = $j$0;
      }
     }
    } else {
     $i$1$lcssa = 10;
    }
    $24 = load4($add$ptr358);
    $rem370 = (($24>>>0) % ($i$1$lcssa>>>0))&-1;
    $tobool371 = ($rem370|0)==(0);
    $add$ptr373 = ((($add$ptr358)) + 4|0);
    $cmp374 = ($add$ptr373|0)==($z$3$lcssa|0);
    $or$cond396 = $cmp374 & $tobool371;
    if ($or$cond396) {
     $a$8 = $a$3$lcssa;$d$4 = $add$ptr358;$e$4 = $e$1;
    } else {
     $div378 = (($24>>>0) / ($i$1$lcssa>>>0))&-1;
     $and379 = $div378 & 1;
     $tobool380 = ($and379|0)==(0);
     $$397 = $tobool380 ? 9007199254740992.0 : 9007199254740994.0;
     $div384 = (($i$1$lcssa|0) / 2)&-1;
     $cmp385 = ($rem370>>>0)<($div384>>>0);
     $cmp390 = ($rem370|0)==($div384|0);
     $or$cond398 = $cmp374 & $cmp390;
     $$405 = $or$cond398 ? 1.0 : 1.5;
     $$$405 = $cmp385 ? 0.5 : $$405;
     $tobool400 = ($pl$0|0)==(0);
     if ($tobool400) {
      $round377$1 = $$397;$small$1 = $$$405;
     } else {
      $mul407 = -$$$405;
      $mul406 = -$$397;
      $25 = load1($prefix$0);
      $cmp403 = ($25<<24>>24)==(45);
      $mul406$$397 = $cmp403 ? $mul406 : $$397;
      $mul407$$$405 = $cmp403 ? $mul407 : $$$405;
      $round377$1 = $mul406$$397;$small$1 = $mul407$$$405;
     }
     $sub409 = (($24) - ($rem370))|0;
     store4($add$ptr358,$sub409);
     $add410 = $round377$1 + $small$1;
     $cmp411 = $add410 != $round377$1;
     if ($cmp411) {
      $add414 = (($sub409) + ($i$1$lcssa))|0;
      store4($add$ptr358,$add414);
      $cmp416446 = ($add414>>>0)>(999999999);
      if ($cmp416446) {
       $a$5448 = $a$3$lcssa;$incdec$ptr419$sink447 = $add$ptr358;
       while(1) {
        $incdec$ptr419 = ((($incdec$ptr419$sink447)) + -4|0);
        store4($incdec$ptr419$sink447,0);
        $cmp420 = ($incdec$ptr419>>>0)<($a$5448>>>0);
        if ($cmp420) {
         $incdec$ptr423 = ((($a$5448)) + -4|0);
         store4($incdec$ptr423,0);
         $a$6 = $incdec$ptr423;
        } else {
         $a$6 = $a$5448;
        }
        $26 = load4($incdec$ptr419);
        $inc425 = (($26) + 1)|0;
        store4($incdec$ptr419,$inc425);
        $cmp416 = ($inc425>>>0)>(999999999);
        if ($cmp416) {
         $a$5448 = $a$6;$incdec$ptr419$sink447 = $incdec$ptr419;
        } else {
         $a$5$lcssa = $a$6;$incdec$ptr419$sink$lcssa = $incdec$ptr419;
         break;
        }
       }
      } else {
       $a$5$lcssa = $a$3$lcssa;$incdec$ptr419$sink$lcssa = $add$ptr358;
      }
      $sub$ptr$rhs$cast428 = $a$5$lcssa;
      $sub$ptr$sub429 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast428))|0;
      $sub$ptr$div430 = $sub$ptr$sub429 >> 2;
      $mul431 = ($sub$ptr$div430*9)|0;
      $27 = load4($a$5$lcssa);
      $cmp433442 = ($27>>>0)<(10);
      if ($cmp433442) {
       $a$8 = $a$5$lcssa;$d$4 = $incdec$ptr419$sink$lcssa;$e$4 = $mul431;
      } else {
       $e$2444 = $mul431;$i$2443 = 10;
       while(1) {
        $mul437 = ($i$2443*10)|0;
        $inc438 = (($e$2444) + 1)|0;
        $cmp433 = ($27>>>0)<($mul437>>>0);
        if ($cmp433) {
         $a$8 = $a$5$lcssa;$d$4 = $incdec$ptr419$sink$lcssa;$e$4 = $inc438;
         break;
        } else {
         $e$2444 = $inc438;$i$2443 = $mul437;
        }
       }
      }
     } else {
      $a$8 = $a$3$lcssa;$d$4 = $add$ptr358;$e$4 = $e$1;
     }
    }
    $add$ptr442 = ((($d$4)) + 4|0);
    $cmp443 = ($z$3$lcssa>>>0)>($add$ptr442>>>0);
    $add$ptr442$z$3 = $cmp443 ? $add$ptr442 : $z$3$lcssa;
    $a$9$ph = $a$8;$e$5$ph = $e$4;$z$7$ph = $add$ptr442$z$3;
   } else {
    $a$9$ph = $a$3$lcssa;$e$5$ph = $e$1;$z$7$ph = $z$3$lcssa;
   }
   $z$7 = $z$7$ph;
   while(1) {
    $cmp450 = ($z$7>>>0)>($a$9$ph>>>0);
    if (!($cmp450)) {
     $cmp450$lcssa = 0;
     break;
    }
    $arrayidx453 = ((($z$7)) + -4|0);
    $28 = load4($arrayidx453);
    $lnot455 = ($28|0)==(0);
    if ($lnot455) {
     $z$7 = $arrayidx453;
    } else {
     $cmp450$lcssa = 1;
     break;
    }
   }
   $sub626$le = (0 - ($e$5$ph))|0;
   do {
    if ($cmp338) {
     $not$tobool341 = $tobool341 ^ 1;
     $inc468 = $not$tobool341&1;
     $$p$inc468 = (($inc468) + ($$p))|0;
     $cmp470 = ($$p$inc468|0)>($e$5$ph|0);
     $cmp473 = ($e$5$ph|0)>(-5);
     $or$cond2 = $cmp470 & $cmp473;
     $add477$neg = (($$p$inc468) + -1)|0;
     $t$addr$0$v = $or$cond2 ? -1 : -2;
     $t$addr$0 = (($t$addr$0$v) + ($t))|0;
     $sub478$neg = $or$cond2 ? $sub626$le : 0;
     $p$addr$2 = (($add477$neg) + ($sub478$neg))|0;
     $and483 = $fl & 8;
     $tobool484 = ($and483|0)==(0);
     if ($tobool484) {
      if ($cmp450$lcssa) {
       $arrayidx489 = ((($z$7)) + -4|0);
       $29 = load4($arrayidx489);
       $tobool490 = ($29|0)==(0);
       if ($tobool490) {
        $j$2 = 9;
       } else {
        $rem494437 = (($29>>>0) % 10)&-1;
        $cmp495438 = ($rem494437|0)==(0);
        if ($cmp495438) {
         $i$3439 = 10;$j$1440 = 0;
         while(1) {
          $mul499 = ($i$3439*10)|0;
          $inc500 = (($j$1440) + 1)|0;
          $rem494 = (($29>>>0) % ($mul499>>>0))&-1;
          $cmp495 = ($rem494|0)==(0);
          if ($cmp495) {
           $i$3439 = $mul499;$j$1440 = $inc500;
          } else {
           $j$2 = $inc500;
           break;
          }
         }
        } else {
         $j$2 = 0;
        }
       }
      } else {
       $j$2 = 9;
      }
      $or504 = $t$addr$0 | 32;
      $cmp505 = ($or504|0)==(102);
      $sub$ptr$lhs$cast508 = $z$7;
      $sub$ptr$sub510 = (($sub$ptr$lhs$cast508) - ($sub$ptr$lhs$cast318))|0;
      $sub$ptr$div511 = $sub$ptr$sub510 >> 2;
      $30 = ($sub$ptr$div511*9)|0;
      $mul513 = (($30) + -9)|0;
      if ($cmp505) {
       $sub514 = (($mul513) - ($j$2))|0;
       $31 = ($sub514|0)>(0);
       $$sub514 = $31 ? $sub514 : 0;
       $cmp528 = ($p$addr$2|0)<($$sub514|0);
       $p$addr$2$$sub514399 = $cmp528 ? $p$addr$2 : $$sub514;
       $and610$pre$phiZ2D = 0;$p$addr$3 = $p$addr$2$$sub514399;$t$addr$1 = $t$addr$0;
       break;
      } else {
       $add561 = (($mul513) + ($e$5$ph))|0;
       $sub562 = (($add561) - ($j$2))|0;
       $32 = ($sub562|0)>(0);
       $$sub562 = $32 ? $sub562 : 0;
       $cmp577 = ($p$addr$2|0)<($$sub562|0);
       $p$addr$2$$sub562400 = $cmp577 ? $p$addr$2 : $$sub562;
       $and610$pre$phiZ2D = 0;$p$addr$3 = $p$addr$2$$sub562400;$t$addr$1 = $t$addr$0;
       break;
      }
     } else {
      $and610$pre$phiZ2D = $and483;$p$addr$3 = $p$addr$2;$t$addr$1 = $t$addr$0;
     }
    } else {
     $$pre487 = $fl & 8;
     $and610$pre$phiZ2D = $$pre487;$p$addr$3 = $$p;$t$addr$1 = $t;
    }
   } while(0);
   $33 = $p$addr$3 | $and610$pre$phiZ2D;
   $34 = ($33|0)!=(0);
   $lor$ext = $34&1;
   $or613 = $t$addr$1 | 32;
   $cmp614 = ($or613|0)==(102);
   if ($cmp614) {
    $cmp617 = ($e$5$ph|0)>(0);
    $add620 = $cmp617 ? $e$5$ph : 0;
    $estr$2 = 0;$sub$ptr$sub650$pn = $add620;
   } else {
    $cmp623 = ($e$5$ph|0)<(0);
    $cond629 = $cmp623 ? $sub626$le : $e$5$ph;
    $conv630 = i64_sext($cond629);
    $call631 = (_fmt_u($conv630,$arrayidx)|0);
    $sub$ptr$lhs$cast633 = $arrayidx;
    $sub$ptr$rhs$cast634431 = $call631;
    $sub$ptr$sub635432 = (($sub$ptr$lhs$cast633) - ($sub$ptr$rhs$cast634431))|0;
    $cmp636433 = ($sub$ptr$sub635432|0)<(2);
    if ($cmp636433) {
     $estr$1434 = $call631;
     while(1) {
      $incdec$ptr639 = ((($estr$1434)) + -1|0);
      store1($incdec$ptr639,48);
      $sub$ptr$rhs$cast634 = $incdec$ptr639;
      $sub$ptr$sub635 = (($sub$ptr$lhs$cast633) - ($sub$ptr$rhs$cast634))|0;
      $cmp636 = ($sub$ptr$sub635|0)<(2);
      if ($cmp636) {
       $estr$1434 = $incdec$ptr639;
      } else {
       $estr$1$lcssa = $incdec$ptr639;
       break;
      }
     }
    } else {
     $estr$1$lcssa = $call631;
    }
    $35 = $e$5$ph >> 31;
    $36 = $35 & 2;
    $37 = (($36) + 43)|0;
    $conv644 = $37&255;
    $incdec$ptr645 = ((($estr$1$lcssa)) + -1|0);
    store1($incdec$ptr645,$conv644);
    $conv646 = $t$addr$1&255;
    $incdec$ptr647 = ((($estr$1$lcssa)) + -2|0);
    store1($incdec$ptr647,$conv646);
    $sub$ptr$rhs$cast649 = $incdec$ptr647;
    $sub$ptr$sub650 = (($sub$ptr$lhs$cast633) - ($sub$ptr$rhs$cast649))|0;
    $estr$2 = $incdec$ptr647;$sub$ptr$sub650$pn = $sub$ptr$sub650;
   }
   $add608 = (($pl$0) + 1)|0;
   $add612 = (($add608) + ($p$addr$3))|0;
   $l$1 = (($add612) + ($lor$ext))|0;
   $add653 = (($l$1) + ($sub$ptr$sub650$pn))|0;
   _pad_684($f,32,$w,$add653,$fl);
   _out($f,$prefix$0,$pl$0);
   $xor655 = $fl ^ 65536;
   _pad_684($f,48,$w,$add653,$xor655);
   if ($cmp614) {
    $cmp660 = ($a$9$ph>>>0)>($arraydecay208$add$ptr213>>>0);
    $r$0$a$9 = $cmp660 ? $arraydecay208$add$ptr213 : $a$9$ph;
    $add$ptr671 = ((($buf)) + 9|0);
    $sub$ptr$lhs$cast694 = $add$ptr671;
    $incdec$ptr689 = ((($buf)) + 8|0);
    $d$5422 = $r$0$a$9;
    while(1) {
     $38 = load4($d$5422);
     $conv669 = i64_zext($38>>>0);
     $call672 = (_fmt_u($conv669,$add$ptr671)|0);
     $cmp673 = ($d$5422|0)==($r$0$a$9|0);
     if ($cmp673) {
      $cmp686 = ($call672|0)==($add$ptr671|0);
      if ($cmp686) {
       store1($incdec$ptr689,48);
       $s668$1 = $incdec$ptr689;
      } else {
       $s668$1 = $call672;
      }
     } else {
      $cmp678419 = ($call672>>>0)>($buf>>>0);
      if ($cmp678419) {
       $39 = $call672;
       $40 = (($39) - ($sub$ptr$rhs$cast))|0;
       _memset(($buf|0),48,($40|0))|0;
       $s668$0420 = $call672;
       while(1) {
        $incdec$ptr681 = ((($s668$0420)) + -1|0);
        $cmp678 = ($incdec$ptr681>>>0)>($buf>>>0);
        if ($cmp678) {
         $s668$0420 = $incdec$ptr681;
        } else {
         $s668$1 = $incdec$ptr681;
         break;
        }
       }
      } else {
       $s668$1 = $call672;
      }
     }
     $sub$ptr$rhs$cast695 = $s668$1;
     $sub$ptr$sub696 = (($sub$ptr$lhs$cast694) - ($sub$ptr$rhs$cast695))|0;
     _out($f,$s668$1,$sub$ptr$sub696);
     $incdec$ptr698 = ((($d$5422)) + 4|0);
     $cmp665 = ($incdec$ptr698>>>0)>($arraydecay208$add$ptr213>>>0);
     if ($cmp665) {
      break;
     } else {
      $d$5422 = $incdec$ptr698;
     }
    }
    $41 = ($33|0)==(0);
    if (!($41)) {
     _out($f,9365,1);
    }
    $cmp707414 = ($incdec$ptr698>>>0)<($z$7>>>0);
    $cmp710415 = ($p$addr$3|0)>(0);
    $42 = $cmp710415 & $cmp707414;
    if ($42) {
     $d$6416 = $incdec$ptr698;$p$addr$4417 = $p$addr$3;
     while(1) {
      $43 = load4($d$6416);
      $conv716 = i64_zext($43>>>0);
      $call719 = (_fmt_u($conv716,$add$ptr671)|0);
      $cmp722411 = ($call719>>>0)>($buf>>>0);
      if ($cmp722411) {
       $44 = $call719;
       $45 = (($44) - ($sub$ptr$rhs$cast))|0;
       _memset(($buf|0),48,($45|0))|0;
       $s715$0412 = $call719;
       while(1) {
        $incdec$ptr725 = ((($s715$0412)) + -1|0);
        $cmp722 = ($incdec$ptr725>>>0)>($buf>>>0);
        if ($cmp722) {
         $s715$0412 = $incdec$ptr725;
        } else {
         $s715$0$lcssa = $incdec$ptr725;
         break;
        }
       }
      } else {
       $s715$0$lcssa = $call719;
      }
      $46 = ($p$addr$4417|0)<(9);
      $cond732 = $46 ? $p$addr$4417 : 9;
      _out($f,$s715$0$lcssa,$cond732);
      $incdec$ptr734 = ((($d$6416)) + 4|0);
      $sub735 = (($p$addr$4417) + -9)|0;
      $cmp707 = ($incdec$ptr734>>>0)<($z$7>>>0);
      $cmp710 = ($p$addr$4417|0)>(9);
      $47 = $cmp710 & $cmp707;
      if ($47) {
       $d$6416 = $incdec$ptr734;$p$addr$4417 = $sub735;
      } else {
       $p$addr$4$lcssa = $sub735;
       break;
      }
     }
    } else {
     $p$addr$4$lcssa = $p$addr$3;
    }
    $add737 = (($p$addr$4$lcssa) + 9)|0;
    _pad_684($f,48,$add737,9,0);
   } else {
    $add$ptr742 = ((($a$9$ph)) + 4|0);
    $z$7$add$ptr742 = $cmp450$lcssa ? $z$7 : $add$ptr742;
    $cmp748427 = ($p$addr$3|0)>(-1);
    if ($cmp748427) {
     $add$ptr756 = ((($buf)) + 9|0);
     $tobool781 = ($and610$pre$phiZ2D|0)==(0);
     $sub$ptr$lhs$cast787 = $add$ptr756;
     $48 = (0 - ($sub$ptr$rhs$cast))|0;
     $incdec$ptr763 = ((($buf)) + 8|0);
     $d$7428 = $a$9$ph;$p$addr$5429 = $p$addr$3;
     while(1) {
      $49 = load4($d$7428);
      $conv754 = i64_zext($49>>>0);
      $call757 = (_fmt_u($conv754,$add$ptr756)|0);
      $cmp760 = ($call757|0)==($add$ptr756|0);
      if ($cmp760) {
       store1($incdec$ptr763,48);
       $s753$0 = $incdec$ptr763;
      } else {
       $s753$0 = $call757;
      }
      $cmp765 = ($d$7428|0)==($a$9$ph|0);
      do {
       if ($cmp765) {
        $incdec$ptr776 = ((($s753$0)) + 1|0);
        _out($f,$s753$0,1);
        $cmp777 = ($p$addr$5429|0)<(1);
        $or$cond402 = $tobool781 & $cmp777;
        if ($or$cond402) {
         $s753$2 = $incdec$ptr776;
         break;
        }
        _out($f,9365,1);
        $s753$2 = $incdec$ptr776;
       } else {
        $cmp770423 = ($s753$0>>>0)>($buf>>>0);
        if (!($cmp770423)) {
         $s753$2 = $s753$0;
         break;
        }
        $scevgep483 = (($s753$0) + ($48)|0);
        $scevgep483484 = $scevgep483;
        _memset(($buf|0),48,($scevgep483484|0))|0;
        $s753$1424 = $s753$0;
        while(1) {
         $incdec$ptr773 = ((($s753$1424)) + -1|0);
         $cmp770 = ($incdec$ptr773>>>0)>($buf>>>0);
         if ($cmp770) {
          $s753$1424 = $incdec$ptr773;
         } else {
          $s753$2 = $incdec$ptr773;
          break;
         }
        }
       }
      } while(0);
      $sub$ptr$rhs$cast788 = $s753$2;
      $sub$ptr$sub789 = (($sub$ptr$lhs$cast787) - ($sub$ptr$rhs$cast788))|0;
      $cmp790 = ($p$addr$5429|0)>($sub$ptr$sub789|0);
      $cond800 = $cmp790 ? $sub$ptr$sub789 : $p$addr$5429;
      _out($f,$s753$2,$cond800);
      $sub806 = (($p$addr$5429) - ($sub$ptr$sub789))|0;
      $incdec$ptr808 = ((($d$7428)) + 4|0);
      $cmp745 = ($incdec$ptr808>>>0)<($z$7$add$ptr742>>>0);
      $cmp748 = ($sub806|0)>(-1);
      $50 = $cmp745 & $cmp748;
      if ($50) {
       $d$7428 = $incdec$ptr808;$p$addr$5429 = $sub806;
      } else {
       $p$addr$5$lcssa = $sub806;
       break;
      }
     }
    } else {
     $p$addr$5$lcssa = $p$addr$3;
    }
    $add810 = (($p$addr$5$lcssa) + 18)|0;
    _pad_684($f,48,$add810,18,0);
    $sub$ptr$lhs$cast811 = $arrayidx;
    $sub$ptr$rhs$cast812 = $estr$2;
    $sub$ptr$sub813 = (($sub$ptr$lhs$cast811) - ($sub$ptr$rhs$cast812))|0;
    _out($f,$estr$2,$sub$ptr$sub813);
   }
   $xor816 = $fl ^ 8192;
   _pad_684($f,32,$w,$add653,$xor816);
   $add653$sink406 = $add653;
  } else {
   $and36 = $t & 32;
   $tobool37 = ($and36|0)!=(0);
   $cond = $tobool37 ? 6410 : 6414;
   $cmp38 = ($y$addr$0 != $y$addr$0) | (0.0 != 0.0);
   $cond43 = $tobool37 ? 8330 : 6418;
   $s35$0 = $cmp38 ? $cond43 : $cond;
   $add = (($pl$0) + 3)|0;
   $and45 = $fl & -65537;
   _pad_684($f,32,$w,$add,$and45);
   _out($f,$prefix$0,$pl$0);
   _out($f,$s35$0,3);
   $xor = $fl ^ 8192;
   _pad_684($f,32,$w,$add,$xor);
   $add653$sink406 = $add;
  }
 } while(0);
 $cmp818 = ($add653$sink406|0)<($w|0);
 $w$add653 = $cmp818 ? $w : $add653$sink406;
 STACKTOP = sp;return ($w$add653|0);
}
function ___DOUBLE_BITS_685($__f) {
 $__f = +$__f;
 var $0 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($__f);
 return (i64($0));
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
 var $0 = i64(), $1 = 0, $2 = 0, $3 = 0.0, $and10 = i64(), $call = 0.0, $conv = 0, $mul = 0.0, $or = i64(), $retval$0 = 0.0, $shr = i64(), $storemerge = 0, $sub = 0, $sub8 = 0, $tobool1 = 0, $trunc = 0, $trunc$clear = 0, $x$addr$0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $shr = i64_lshr($0,i64_const(52,0));
 $trunc = i64_trunc($shr)&65535;
 $trunc$clear = $trunc & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $tobool1 = $x != 0.0;
  if ($tobool1) {
   $mul = $x * 1.8446744073709552E+19;
   $call = (+_frexp($mul,$e));
   $1 = load4($e);
   $sub = (($1) + -64)|0;
   $storemerge = $sub;$x$addr$0 = $call;
  } else {
   $storemerge = 0;$x$addr$0 = $x;
  }
  store4($e,$storemerge);
  $retval$0 = $x$addr$0;
  break;
 }
 case 2047:  {
  $retval$0 = $x;
  break;
 }
 default: {
  $2 = i64_trunc($shr);
  $conv = $2 & 2047;
  $sub8 = (($conv) + -1022)|0;
  store4($e,$sub8);
  $and10 = i64_and($0,i64_const(4294967295,2148532223));
  $or = i64_or($and10,i64_const(0,1071644672));
  $3 = i64_bc2d($or);
  $retval$0 = $3;
 }
 }
 return (+$retval$0);
}
function _wcrtomb($s,$wc) {
 $s = $s|0;
 $wc = $wc|0;
 var $0 = 0, $1 = 0, $2 = 0, $and = 0, $and32 = 0, $and36 = 0, $and49 = 0, $and54 = 0, $and58 = 0, $cmp = 0, $cmp14 = 0, $cmp21 = 0, $cmp24 = 0, $cmp41 = 0, $cmp7 = 0, $conv = 0, $conv12 = 0, $conv17 = 0, $conv19 = 0, $conv29 = 0;
 var $conv34 = 0, $conv38 = 0, $conv46 = 0, $conv51 = 0, $conv56 = 0, $conv60 = 0, $incdec$ptr = 0, $incdec$ptr30 = 0, $incdec$ptr35 = 0, $incdec$ptr47 = 0, $incdec$ptr52 = 0, $incdec$ptr57 = 0, $not$tobool2 = 0, $or = 0, $or$cond = 0, $or18 = 0, $or28 = 0, $or33 = 0, $or37 = 0, $or45 = 0;
 var $or50 = 0, $or55 = 0, $or59 = 0, $retval$0 = 0, $shr2729 = 0, $shr3130 = 0, $shr32 = 0, $shr4426 = 0, $shr4827 = 0, $shr5328 = 0, $sub40 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 do {
  if ($tobool) {
   $retval$0 = 1;
  } else {
   $cmp = ($wc>>>0)<(128);
   if ($cmp) {
    $conv = $wc&255;
    store1($s,$conv);
    $retval$0 = 1;
    break;
   }
   $0 = load4((9540));
   $not$tobool2 = ($0|0)==(0|0);
   if ($not$tobool2) {
    $1 = $wc & -128;
    $cmp7 = ($1|0)==(57216);
    if ($cmp7) {
     $conv12 = $wc&255;
     store1($s,$conv12);
     $retval$0 = 1;
     break;
    } else {
     store4(10072,84);
     $retval$0 = -1;
     break;
    }
   }
   $cmp14 = ($wc>>>0)<(2048);
   if ($cmp14) {
    $shr32 = $wc >>> 6;
    $or = $shr32 | 192;
    $conv17 = $or&255;
    $incdec$ptr = ((($s)) + 1|0);
    store1($s,$conv17);
    $and = $wc & 63;
    $or18 = $and | 128;
    $conv19 = $or18&255;
    store1($incdec$ptr,$conv19);
    $retval$0 = 2;
    break;
   }
   $cmp21 = ($wc>>>0)<(55296);
   $2 = $wc & -8192;
   $cmp24 = ($2|0)==(57344);
   $or$cond = $cmp21 | $cmp24;
   if ($or$cond) {
    $shr2729 = $wc >>> 12;
    $or28 = $shr2729 | 224;
    $conv29 = $or28&255;
    $incdec$ptr30 = ((($s)) + 1|0);
    store1($s,$conv29);
    $shr3130 = $wc >>> 6;
    $and32 = $shr3130 & 63;
    $or33 = $and32 | 128;
    $conv34 = $or33&255;
    $incdec$ptr35 = ((($s)) + 2|0);
    store1($incdec$ptr30,$conv34);
    $and36 = $wc & 63;
    $or37 = $and36 | 128;
    $conv38 = $or37&255;
    store1($incdec$ptr35,$conv38);
    $retval$0 = 3;
    break;
   }
   $sub40 = (($wc) + -65536)|0;
   $cmp41 = ($sub40>>>0)<(1048576);
   if ($cmp41) {
    $shr4426 = $wc >>> 18;
    $or45 = $shr4426 | 240;
    $conv46 = $or45&255;
    $incdec$ptr47 = ((($s)) + 1|0);
    store1($s,$conv46);
    $shr4827 = $wc >>> 12;
    $and49 = $shr4827 & 63;
    $or50 = $and49 | 128;
    $conv51 = $or50&255;
    $incdec$ptr52 = ((($s)) + 2|0);
    store1($incdec$ptr47,$conv51);
    $shr5328 = $wc >>> 6;
    $and54 = $shr5328 & 63;
    $or55 = $and54 | 128;
    $conv56 = $or55&255;
    $incdec$ptr57 = ((($s)) + 3|0);
    store1($incdec$ptr52,$conv56);
    $and58 = $wc & 63;
    $or59 = $and58 | 128;
    $conv60 = $or59&255;
    store1($incdec$ptr57,$conv60);
    $retval$0 = 4;
    break;
   } else {
    store4(10072,84);
    $retval$0 = -1;
    break;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function ___strerror_l($e,$loc) {
 $e = $e|0;
 $loc = $loc|0;
 var $0 = 0, $1 = 0, $2 = 0, $arrayidx = 0, $arrayidx15 = 0, $call = 0, $cmp = 0, $conv = 0, $dec = 0, $i$012 = 0, $i$111 = 0, $inc = 0, $incdec$ptr = 0, $s$0$lcssa = 0, $s$010 = 0, $s$1 = 0, $tobool = 0, $tobool5 = 0, $tobool59 = 0, $tobool8 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $i$012 = 0;
 while(1) {
  $arrayidx = (6438 + ($i$012)|0);
  $0 = load1($arrayidx);
  $conv = $0&255;
  $cmp = ($conv|0)==($e|0);
  if ($cmp) {
   label = 2;
   break;
  }
  $inc = (($i$012) + 1)|0;
  $tobool = ($inc|0)==(87);
  if ($tobool) {
   $i$111 = 87;$s$010 = 6526;
   label = 5;
   break;
  } else {
   $i$012 = $inc;
  }
 }
 if ((label|0) == 2) {
  $tobool59 = ($i$012|0)==(0);
  if ($tobool59) {
   $s$0$lcssa = 6526;
  } else {
   $i$111 = $i$012;$s$010 = 6526;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $s$1 = $s$010;
   while(1) {
    $1 = load1($s$1);
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
 $arrayidx15 = ((($loc)) + 20|0);
 $2 = load4($arrayidx15);
 $call = (___lctrans($s$0$lcssa,$2)|0);
 return ($call|0);
}
function ___lctrans($msg,$lm) {
 $msg = $msg|0;
 $lm = $lm|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___lctrans_impl($msg,$lm)|0);
 return ($call|0);
}
function ___lctrans_impl($msg,$lm) {
 $msg = $msg|0;
 $lm = $lm|0;
 var $0 = 0, $1 = 0, $call = 0, $cond = 0, $map_size = 0, $tobool = 0, $tobool1 = 0, $trans$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($lm|0)==(0|0);
 if ($tobool) {
  $trans$0 = 0;
 } else {
  $0 = load4($lm);
  $map_size = ((($lm)) + 4|0);
  $1 = load4($map_size);
  $call = (___mo_lookup($0,$1,$msg)|0);
  $trans$0 = $call;
 }
 $tobool1 = ($trans$0|0)!=(0|0);
 $cond = $tobool1 ? $trans$0 : $msg;
 return ($cond|0);
}
function ___mo_lookup($p,$size,$s) {
 $p = $p|0;
 $size = $size|0;
 $s = $s|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr65 = 0, $add$ptr65$ = 0, $add16 = 0, $add23 = 0, $add31 = 0, $add42 = 0, $add49 = 0, $add59 = 0;
 var $arrayidx = 0, $arrayidx1 = 0, $arrayidx17 = 0, $arrayidx24 = 0, $arrayidx3 = 0, $arrayidx32 = 0, $arrayidx43 = 0, $arrayidx50 = 0, $arrayidx60 = 0, $b$0 = 0, $b$1 = 0, $call = 0, $call18 = 0, $call2 = 0, $call25 = 0, $call36 = 0, $call4 = 0, $call44 = 0, $call51 = 0, $cmp = 0;
 var $cmp10 = 0, $cmp26 = 0, $cmp29 = 0, $cmp52 = 0, $cmp56 = 0, $cmp6 = 0, $cmp67 = 0, $cmp71 = 0, $div = 0, $div12 = 0, $div13 = 0, $div14 = 0, $mul = 0, $mul15 = 0, $n$0 = 0, $n$1 = 0, $or = 0, $or$cond = 0, $or$cond66 = 0, $or$cond67 = 0;
 var $rem = 0, $retval$4 = 0, $sub = 0, $sub28 = 0, $sub5 = 0, $sub55 = 0, $sub79 = 0, $tobool = 0, $tobool33 = 0, $tobool37 = 0, $tobool62 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($p);
 $sub = (($0) + 1794895138)|0;
 $arrayidx = ((($p)) + 8|0);
 $1 = load4($arrayidx);
 $call = (_swapc($1,$sub)|0);
 $arrayidx1 = ((($p)) + 12|0);
 $2 = load4($arrayidx1);
 $call2 = (_swapc($2,$sub)|0);
 $arrayidx3 = ((($p)) + 16|0);
 $3 = load4($arrayidx3);
 $call4 = (_swapc($3,$sub)|0);
 $div = $size >>> 2;
 $cmp = ($call>>>0)<($div>>>0);
 L1: do {
  if ($cmp) {
   $mul = $call << 2;
   $sub5 = (($size) - ($mul))|0;
   $cmp6 = ($call2>>>0)<($sub5>>>0);
   $cmp10 = ($call4>>>0)<($sub5>>>0);
   $or$cond = $cmp6 & $cmp10;
   if ($or$cond) {
    $or = $call4 | $call2;
    $rem = $or & 3;
    $tobool = ($rem|0)==(0);
    if ($tobool) {
     $div12 = $call2 >>> 2;
     $div13 = $call4 >>> 2;
     $b$0 = 0;$n$0 = $call;
     while(1) {
      $div14 = $n$0 >>> 1;
      $add = (($b$0) + ($div14))|0;
      $mul15 = $add << 1;
      $add16 = (($mul15) + ($div12))|0;
      $arrayidx17 = (($p) + ($add16<<2)|0);
      $4 = load4($arrayidx17);
      $call18 = (_swapc($4,$sub)|0);
      $add23 = (($add16) + 1)|0;
      $arrayidx24 = (($p) + ($add23<<2)|0);
      $5 = load4($arrayidx24);
      $call25 = (_swapc($5,$sub)|0);
      $cmp26 = ($call25>>>0)<($size>>>0);
      $sub28 = (($size) - ($call25))|0;
      $cmp29 = ($call18>>>0)<($sub28>>>0);
      $or$cond66 = $cmp26 & $cmp29;
      if (!($or$cond66)) {
       $retval$4 = 0;
       break L1;
      }
      $add31 = (($call25) + ($call18))|0;
      $arrayidx32 = (($p) + ($add31)|0);
      $6 = load1($arrayidx32);
      $tobool33 = ($6<<24>>24)==(0);
      if (!($tobool33)) {
       $retval$4 = 0;
       break L1;
      }
      $add$ptr = (($p) + ($call25)|0);
      $call36 = (_strcmp($s,$add$ptr)|0);
      $tobool37 = ($call36|0)==(0);
      if ($tobool37) {
       break;
      }
      $cmp67 = ($n$0|0)==(1);
      $cmp71 = ($call36|0)<(0);
      $sub79 = (($n$0) - ($div14))|0;
      $n$1 = $cmp71 ? $div14 : $sub79;
      $b$1 = $cmp71 ? $b$0 : $add;
      if ($cmp67) {
       $retval$4 = 0;
       break L1;
      } else {
       $b$0 = $b$1;$n$0 = $n$1;
      }
     }
     $add42 = (($mul15) + ($div13))|0;
     $arrayidx43 = (($p) + ($add42<<2)|0);
     $7 = load4($arrayidx43);
     $call44 = (_swapc($7,$sub)|0);
     $add49 = (($add42) + 1)|0;
     $arrayidx50 = (($p) + ($add49<<2)|0);
     $8 = load4($arrayidx50);
     $call51 = (_swapc($8,$sub)|0);
     $cmp52 = ($call51>>>0)<($size>>>0);
     $sub55 = (($size) - ($call51))|0;
     $cmp56 = ($call44>>>0)<($sub55>>>0);
     $or$cond67 = $cmp52 & $cmp56;
     if ($or$cond67) {
      $add59 = (($call51) + ($call44))|0;
      $arrayidx60 = (($p) + ($add59)|0);
      $add$ptr65 = (($p) + ($call51)|0);
      $9 = load1($arrayidx60);
      $tobool62 = ($9<<24>>24)==(0);
      $add$ptr65$ = $tobool62 ? $add$ptr65 : 0;
      $retval$4 = $add$ptr65$;
     } else {
      $retval$4 = 0;
     }
    } else {
     $retval$4 = 0;
    }
   } else {
    $retval$4 = 0;
   }
  } else {
   $retval$4 = 0;
  }
 } while(0);
 return ($retval$4|0);
}
function _swapc($x,$c) {
 $x = $x|0;
 $c = $c|0;
 var $or5 = 0, $tobool = 0, $x$or5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($c|0)==(0);
 $or5 = (_llvm_bswap_i32(($x|0))|0);
 $x$or5 = $tobool ? $x : $or5;
 return ($x$or5|0);
}
function ___fwritex($s,$l,$f) {
 $s = $s|0;
 $l = $l|0;
 $f = $f|0;
 var $$pre = 0, $$pre33 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr26 = 0, $arrayidx = 0, $call = 0, $call16 = 0, $cmp = 0, $cmp11 = 0;
 var $cmp17 = 0, $cmp6 = 0, $i$0 = 0, $l$addr$0 = 0, $l$addr$1 = 0, $lbf = 0, $s$addr$1 = 0, $sub = 0, $sub$ptr$sub = 0, $tobool = 0, $tobool1 = 0, $tobool9 = 0, $wend = 0, $wpos = 0, $write = 0, $write15 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $wend = ((($f)) + 16|0);
 $0 = load4($wend);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4($wend);
   $3 = $$pre;
   label = 5;
  }
 } else {
  $1 = $0;
  $3 = $1;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $wpos = ((($f)) + 20|0);
   $2 = load4($wpos);
   $sub$ptr$sub = (($3) - ($2))|0;
   $cmp = ($sub$ptr$sub>>>0)<($l>>>0);
   $4 = $2;
   if ($cmp) {
    $write = ((($f)) + 36|0);
    $5 = load4($write);
    (FUNCTION_TABLE_iiii[$5 & 31]($f,$s,$l)|0);
    break;
   }
   $lbf = ((($f)) + 75|0);
   $6 = load1($lbf);
   $cmp6 = ($6<<24>>24)>(-1);
   L10: do {
    if ($cmp6) {
     $i$0 = $l;
     while(1) {
      $tobool9 = ($i$0|0)==(0);
      if ($tobool9) {
       $9 = $4;$l$addr$1 = $l;$s$addr$1 = $s;
       break L10;
      }
      $sub = (($i$0) + -1)|0;
      $arrayidx = (($s) + ($sub)|0);
      $7 = load1($arrayidx);
      $cmp11 = ($7<<24>>24)==(10);
      if ($cmp11) {
       break;
      } else {
       $i$0 = $sub;
      }
     }
     $write15 = ((($f)) + 36|0);
     $8 = load4($write15);
     $call16 = (FUNCTION_TABLE_iiii[$8 & 31]($f,$s,$i$0)|0);
     $cmp17 = ($call16>>>0)<($i$0>>>0);
     if ($cmp17) {
      break L5;
     }
     $add$ptr = (($s) + ($i$0)|0);
     $l$addr$0 = (($l) - ($i$0))|0;
     $$pre33 = load4($wpos);
     $9 = $$pre33;$l$addr$1 = $l$addr$0;$s$addr$1 = $add$ptr;
    } else {
     $9 = $4;$l$addr$1 = $l;$s$addr$1 = $s;
    }
   } while(0);
   _memcpy(($9|0),($s$addr$1|0),($l$addr$1|0))|0;
   $10 = load4($wpos);
   $add$ptr26 = (($10) + ($l$addr$1)|0);
   store4($wpos,$add$ptr26);
  }
 } while(0);
 return;
}
function ___towrite($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $add$ptr = 0, $and = 0, $buf = 0, $buf_size = 0, $conv = 0, $conv3 = 0, $mode = 0, $or = 0, $or5 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $sub = 0, $tobool = 0, $wbase = 0, $wend = 0;
 var $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mode = ((($f)) + 74|0);
 $0 = load1($mode);
 $conv = $0 << 24 >> 24;
 $sub = (($conv) + 255)|0;
 $or = $sub | $conv;
 $conv3 = $or&255;
 store1($mode,$conv3);
 $1 = load4($f);
 $and = $1 & 8;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $rend = ((($f)) + 8|0);
  store4($rend,0);
  $rpos = ((($f)) + 4|0);
  store4($rpos,0);
  $buf = ((($f)) + 44|0);
  $2 = load4($buf);
  $wbase = ((($f)) + 28|0);
  store4($wbase,$2);
  $wpos = ((($f)) + 20|0);
  store4($wpos,$2);
  $buf_size = ((($f)) + 48|0);
  $3 = load4($buf_size);
  $add$ptr = (($2) + ($3)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  $retval$0 = 0;
 } else {
  $or5 = $1 | 32;
  store4($f,$or5);
  $retval$0 = -1;
 }
 return ($retval$0|0);
}
function _strlen($s) {
 $s = $s|0;
 var $$pn = 0, $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $and = 0, $and3 = 0, $incdec$ptr = 0, $incdec$ptr1323 = 0, $incdec$ptr7 = 0, $lnot = 0, $neg = 0, $rem = 0, $rem13 = 0, $s$addr$0$lcssa = 0, $s$addr$015 = 0, $s$addr$1$lcssa = 0;
 var $sub = 0, $sub$ptr$lhs$cast15 = 0, $sub$ptr$lhs$cast15$sink = 0, $sub$ptr$sub17 = 0, $tobool = 0, $tobool1 = 0, $tobool10 = 0, $tobool1021 = 0, $tobool14 = 0, $w$0 = 0, label = 0, sp = 0;
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
    $1 = load1($s$addr$015);
    $tobool1 = ($1<<24>>24)==(0);
    if ($tobool1) {
     $sub$ptr$lhs$cast15$sink = $5;
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
   $3 = load4($w$0);
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
   $$pn = $w$0;
   while(1) {
    $incdec$ptr1323 = ((($$pn)) + 1|0);
    $$pre = load1($incdec$ptr1323);
    $tobool10 = ($$pre<<24>>24)==(0);
    if ($tobool10) {
     $s$addr$1$lcssa = $incdec$ptr1323;
     break;
    } else {
     $$pn = $incdec$ptr1323;
    }
   }
  }
  $sub$ptr$lhs$cast15 = $s$addr$1$lcssa;
  $sub$ptr$lhs$cast15$sink = $sub$ptr$lhs$cast15;
 }
 $sub$ptr$sub17 = (($sub$ptr$lhs$cast15$sink) - ($0))|0;
 return ($sub$ptr$sub17|0);
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
function ___overflow() {
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $c = 0, $call = 0, $call13 = 0, $cmp = 0, $cmp14 = 0, $cmp7 = 0, $conv18 = 0, $incdec$ptr = 0, $or$cond = 0, $retval$0 = 0, $tobool = 0, $tobool1 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $c = sp;
 store1($c,10);
 $0 = load4((1936));
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite(1920)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4((1936));
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
   $1 = load4((1940));
   $cmp = ($1>>>0)>=($2>>>0);
   $3 = load1((1995));
   $cmp7 = ($3<<24>>24)==(10);
   $or$cond = $cmp | $cmp7;
   if (!($or$cond)) {
    $incdec$ptr = ((($1)) + 1|0);
    store4((1940),$incdec$ptr);
    store1($1,10);
    $retval$0 = 10;
    break;
   }
   $4 = load4((1956));
   $call13 = (FUNCTION_TABLE_iiii[$4 & 31](1920,$c,1)|0);
   $cmp14 = ($call13|0)==(1);
   if ($cmp14) {
    $5 = load1($c);
    $conv18 = $5&255;
    $retval$0 = $conv18;
   } else {
    $retval$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _fputc() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $cmp = 0, $cmp20 = 0, $cmp3 = 0, $cmp5 = 0, $incdec$ptr = 0, $incdec$ptr25 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4((1996));
 $cmp = ($0|0)<(0);
 $1 = load1((1995));
 $cmp3 = ($1<<24>>24)==(10);
 do {
  if ($cmp) {
   if (!($cmp3)) {
    $2 = load4((1940));
    $3 = load4((1936));
    $cmp5 = ($2>>>0)<($3>>>0);
    if ($cmp5) {
     $incdec$ptr = ((($2)) + 1|0);
     store4((1940),$incdec$ptr);
     store1($2,10);
     break;
    }
   }
   (___overflow()|0);
  } else {
   if (!($cmp3)) {
    $4 = load4((1940));
    $5 = load4((1936));
    $cmp20 = ($4>>>0)<($5>>>0);
    if ($cmp20) {
     $incdec$ptr25 = ((($4)) + 1|0);
     store4((1940),$incdec$ptr25);
     store1($4,10);
     break;
    }
   }
   (___overflow()|0);
  }
 } while(0);
 return;
}
function _malloc($bytes) {
 $bytes = $bytes|0;
 var $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i175 = 0, $$pre$i178 = 0, $$pre$i45$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i176Z2D = 0, $$pre$phi$i46$iZ2D = 0, $$pre$phi$iZ2D = 0, $$pre$phiZ2D = 0, $$pre5$i$i = 0, $$sink$i = 0, $$sink$i$i = 0, $$sink$i154 = 0, $$sink2$i = 0, $$sink2$i172 = 0, $$sink5$i = 0, $$v$0$i = 0, $0 = 0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F$0$i$i = 0, $F104$0 = 0, $F197$0$i = 0, $F224$0$i$i = 0, $F290$0$i = 0, $I252$0$i$i = 0, $I316$0$i = 0, $I57$0$i$i = 0, $K105$0$i$i = 0, $K305$0$i$i = 0, $K373$0$i = 0, $R$1$i = 0, $R$1$i$i = 0, $R$1$i165 = 0, $R$3$i = 0;
 var $R$3$i$i = 0, $R$3$i168 = 0, $RP$1$i = 0, $RP$1$i$i = 0, $RP$1$i164 = 0, $T$0$i = 0, $T$0$i$i = 0, $T$0$i47$i = 0, $add$i = 0, $add$i$i = 0, $add$i145 = 0, $add$i179 = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr$i158 = 0, $add$ptr$i16$i = 0, $add$ptr$i192 = 0, $add$ptr$i2$i$i = 0;
 var $add$ptr$i21$i = 0, $add$ptr$i49$i = 0, $add$ptr14$i$i = 0, $add$ptr15$i$i = 0, $add$ptr16$i$i = 0, $add$ptr166 = 0, $add$ptr169 = 0, $add$ptr17$i$i = 0, $add$ptr178 = 0, $add$ptr181$i = 0, $add$ptr182 = 0, $add$ptr189$i = 0, $add$ptr190$i = 0, $add$ptr193 = 0, $add$ptr199 = 0, $add$ptr2$i$i = 0, $add$ptr205$i$i = 0, $add$ptr212$i$i = 0, $add$ptr225$i = 0, $add$ptr227$i = 0;
 var $add$ptr24$i$i = 0, $add$ptr262$i = 0, $add$ptr269$i = 0, $add$ptr273$i = 0, $add$ptr282$i = 0, $add$ptr3$i$i = 0, $add$ptr30$i$i = 0, $add$ptr369$i$i = 0, $add$ptr4$i$i = 0, $add$ptr4$i$i$i = 0, $add$ptr4$i26$i = 0, $add$ptr4$i54$i = 0, $add$ptr441$i = 0, $add$ptr5$i$i = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i$i = 0, $add$ptr6$i58$i = 0, $add$ptr7$i$i = 0, $add$ptr81$i$i = 0, $add$ptr95 = 0;
 var $add$ptr98 = 0, $add10$i = 0, $add101$i = 0, $add110$i = 0, $add13$i = 0, $add14$i = 0, $add140$i = 0, $add144 = 0, $add150$i = 0, $add17$i = 0, $add17$i182 = 0, $add177$i = 0, $add18$i = 0, $add19$i = 0, $add2 = 0, $add20$i = 0, $add206$i$i = 0, $add212$i = 0, $add215$i = 0, $add22$i = 0;
 var $add246$i = 0, $add26$i$i = 0, $add268$i = 0, $add269$i$i = 0, $add274$i$i = 0, $add278$i$i = 0, $add280$i$i = 0, $add283$i$i = 0, $add337$i = 0, $add342$i = 0, $add346$i = 0, $add348$i = 0, $add351$i = 0, $add46$i = 0, $add50 = 0, $add51$i = 0, $add54 = 0, $add54$i = 0, $add58 = 0, $add62 = 0;
 var $add64 = 0, $add74$i$i = 0, $add77$i = 0, $add78$i = 0, $add79$i$i = 0, $add8 = 0, $add82$i = 0, $add83$i$i = 0, $add85$i$i = 0, $add86$i = 0, $add88$i$i = 0, $add9$i = 0, $add90$i = 0, $add92$i = 0, $and = 0, $and$i = 0, $and$i$i = 0, $and$i$i$i = 0, $and$i142 = 0, $and$i17$i = 0;
 var $and$i22$i = 0, $and$i50$i = 0, $and100$i = 0, $and103$i = 0, $and104$i = 0, $and106 = 0, $and11$add51$i = 0, $and11$i = 0, $and119$i$i = 0, $and12$i = 0, $and13$i = 0, $and13$i$i = 0, $and133$i$i = 0, $and14 = 0, $and145 = 0, $and17$i = 0, $and194$i = 0, $and194$i203 = 0, $and199$i = 0, $and209$i$i = 0;
 var $and21$i = 0, $and21$i148 = 0, $and227$i$i = 0, $and236$i = 0, $and264$i$i = 0, $and268$i$i = 0, $and273$i$i = 0, $and282$i$i = 0, $and29$i = 0, $and292$i = 0, $and295$i$i = 0, $and3$i = 0, $and3$i$i = 0, $and3$i$i$i = 0, $and3$i24$i = 0, $and3$i52$i = 0, $and30$i = 0, $and318$i$i = 0, $and32$i = 0, $and32$i$i = 0;
 var $and33$i$i = 0, $and331$i = 0, $and336$i = 0, $and341$i = 0, $and350$i = 0, $and363$i = 0, $and37$i$i = 0, $and387$i = 0, $and4 = 0, $and40$i$i = 0, $and41 = 0, $and42$i = 0, $and43 = 0, $and46 = 0, $and49 = 0, $and49$i = 0, $and49$i$i = 0, $and53 = 0, $and57 = 0, $and6$i = 0;
 var $and6$i$i = 0, $and6$i10$i = 0, $and6$i27$i = 0, $and61 = 0, $and64$i = 0, $and68$i = 0, $and69$i$i = 0, $and7 = 0, $and73$i = 0, $and73$i$i = 0, $and74 = 0, $and77$i = 0, $and78$i$i = 0, $and8$i = 0, $and80$i = 0, $and81$i = 0, $and85$i = 0, $and87$i$i = 0, $and89$i = 0, $and9$i = 0;
 var $and96$i$i = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i14$i = 0, $arrayidx$i149 = 0, $arrayidx$i37$i = 0, $arrayidx103 = 0, $arrayidx103$i$i = 0, $arrayidx106$i = 0, $arrayidx107$i$i = 0, $arrayidx113$i = 0, $arrayidx113$i155 = 0, $arrayidx121$i = 0, $arrayidx123$i$i = 0, $arrayidx126$i$i = 0, $arrayidx137$i = 0, $arrayidx143$i$i = 0, $arrayidx148$i = 0, $arrayidx151$i = 0;
 var $arrayidx151$i$i = 0, $arrayidx154$i = 0, $arrayidx155$i = 0, $arrayidx161$i = 0, $arrayidx165$i = 0, $arrayidx165$i166 = 0, $arrayidx178$i$i = 0, $arrayidx184$i = 0, $arrayidx184$i$i = 0, $arrayidx195$i$i = 0, $arrayidx196$i = 0, $arrayidx204$i = 0, $arrayidx212$i = 0, $arrayidx223$i$i = 0, $arrayidx228$i = 0, $arrayidx23$i = 0, $arrayidx233$i = 0, $arrayidx239$i = 0, $arrayidx245$i = 0, $arrayidx256$i = 0;
 var $arrayidx27$i = 0, $arrayidx276$i = 0, $arrayidx287$i$i = 0, $arrayidx289$i = 0, $arrayidx290$i$i = 0, $arrayidx325$i$i = 0, $arrayidx355$i = 0, $arrayidx358$i = 0, $arrayidx394$i = 0, $arrayidx40$i = 0, $arrayidx44$i = 0, $arrayidx61$i = 0, $arrayidx65$i = 0, $arrayidx66 = 0, $arrayidx71$i = 0, $arrayidx75$i = 0, $arrayidx91$i$i = 0, $arrayidx92$i$i = 0, $arrayidx94$i = 0, $arrayidx94$i153 = 0;
 var $arrayidx96$i$i = 0, $bk = 0, $bk$i = 0, $bk$i$i = 0, $bk$i160 = 0, $bk$i35$i = 0, $bk102$i$i = 0, $bk122 = 0, $bk124 = 0, $bk136$i = 0, $bk139$i$i = 0, $bk158$i$i = 0, $bk161$i$i = 0, $bk218$i = 0, $bk220$i = 0, $bk246$i$i = 0, $bk248$i$i = 0, $bk302$i$i = 0, $bk311$i = 0, $bk313$i = 0;
 var $bk338$i$i = 0, $bk357$i$i = 0, $bk360$i$i = 0, $bk370$i = 0, $bk407$i = 0, $bk429$i = 0, $bk43$i$i = 0, $bk432$i = 0, $bk47$i = 0, $bk55$i$i = 0, $bk67$i$i = 0, $bk74$i$i = 0, $bk78 = 0, $bk82$i$i = 0, $br$2$ph$i = 0, $call107$i = 0, $call131$i = 0, $call132$i = 0, $call37$i = 0, $call68$i = 0;
 var $call83$i = 0, $child$i$i = 0, $child166$i$i = 0, $child289$i$i = 0, $child357$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i11$i = 0, $cmp$i177 = 0, $cmp$i18$i = 0, $cmp$i23$i = 0, $cmp$i3$i$i = 0, $cmp$i51$i = 0, $cmp$i9$i = 0, $cmp1 = 0, $cmp1$i = 0, $cmp10 = 0, $cmp100$i$i = 0, $cmp102$i = 0;
 var $cmp104$i$i = 0, $cmp105$i = 0, $cmp106$i$i = 0, $cmp107$i = 0, $cmp108$i = 0, $cmp108$i$i = 0, $cmp112$i$i = 0, $cmp113 = 0, $cmp116$i = 0, $cmp118$i = 0, $cmp119$i = 0, $cmp12$i = 0, $cmp120$i$i = 0, $cmp120$i42$i = 0, $cmp121$i = 0, $cmp123$i = 0, $cmp124$i$i = 0, $cmp127$i = 0, $cmp128 = 0, $cmp128$i = 0;
 var $cmp128$i$i = 0, $cmp130$i = 0, $cmp133$i = 0, $cmp133$i$i = 0, $cmp133$i195 = 0, $cmp135$i = 0, $cmp137$i = 0, $cmp137$i$i = 0, $cmp137$i196 = 0, $cmp138$i = 0, $cmp139 = 0, $cmp140$i = 0, $cmp141$i = 0, $cmp142$i = 0, $cmp146 = 0, $cmp147$i = 0, $cmp14799$i = 0, $cmp15 = 0, $cmp15$i = 0, $cmp151$i = 0;
 var $cmp152$i = 0, $cmp153$i$i = 0, $cmp155$i = 0, $cmp156 = 0, $cmp156$i = 0, $cmp157$i = 0, $cmp159$i = 0, $cmp159$i198 = 0, $cmp16 = 0, $cmp160$i$i = 0, $cmp162 = 0, $cmp162$i = 0, $cmp162$i199 = 0, $cmp166$i = 0, $cmp168$i$i = 0, $cmp171$i = 0, $cmp172$i$i = 0, $cmp174$i = 0, $cmp180$i = 0, $cmp185$i = 0;
 var $cmp185$i$i = 0, $cmp186 = 0, $cmp186$i = 0, $cmp189$i$i = 0, $cmp19$i = 0, $cmp190$i = 0, $cmp191$i = 0, $cmp198$i = 0, $cmp2$i$i = 0, $cmp2$i$i$i = 0, $cmp20$i$i = 0, $cmp203$i = 0, $cmp208$i = 0, $cmp209$i = 0, $cmp21$i = 0, $cmp215$i$i = 0, $cmp218$i = 0, $cmp221$i = 0, $cmp224$i = 0, $cmp228$i = 0;
 var $cmp229$i = 0, $cmp233$i = 0, $cmp236$i$i = 0, $cmp24$i = 0, $cmp24$i$i = 0, $cmp246$i = 0, $cmp250$i = 0, $cmp254$i$i = 0, $cmp257$i = 0, $cmp258$i$i = 0, $cmp26$i = 0, $cmp265$i = 0, $cmp27$i$i = 0, $cmp28$i = 0, $cmp28$i$i = 0, $cmp284$i = 0, $cmp287$i = 0, $cmp29 = 0, $cmp3$i$i = 0, $cmp301$i = 0;
 var $cmp306$i$i = 0, $cmp31 = 0, $cmp319$i = 0, $cmp319$i$i = 0, $cmp32$i = 0, $cmp32$i184 = 0, $cmp323$i = 0, $cmp327$i$i = 0, $cmp33$i = 0, $cmp332$i$i = 0, $cmp34$i = 0, $cmp34$i$i = 0, $cmp35$i = 0, $cmp350$i$i = 0, $cmp36$i = 0, $cmp36$i$i = 0, $cmp374$i = 0, $cmp38$i = 0, $cmp38$i$i = 0, $cmp388$i = 0;
 var $cmp396$i = 0, $cmp40$i = 0, $cmp401$i = 0, $cmp41$i$i = 0, $cmp42$i$i = 0, $cmp422$i = 0, $cmp43$i = 0, $cmp44$i$i = 0, $cmp45$i = 0, $cmp45$i152 = 0, $cmp46$i = 0, $cmp46$i$i = 0, $cmp46$i38$i = 0, $cmp48$i = 0, $cmp49$i = 0, $cmp5 = 0, $cmp51$i = 0, $cmp54$i$i = 0, $cmp55$i = 0, $cmp55$i185 = 0;
 var $cmp57$i = 0, $cmp57$i$i = 0, $cmp57$i186 = 0, $cmp59$i$i = 0, $cmp60$i = 0, $cmp60$i$i = 0, $cmp62$i = 0, $cmp63$i = 0, $cmp63$i$i = 0, $cmp65$i = 0, $cmp66$i = 0, $cmp66$i189 = 0, $cmp69$i = 0, $cmp7$i$i = 0, $cmp70 = 0, $cmp72$i = 0, $cmp75$i$i = 0, $cmp76 = 0, $cmp76$i = 0, $cmp79 = 0;
 var $cmp81$i = 0, $cmp81$i$i = 0, $cmp81$i190 = 0, $cmp83$i$i = 0, $cmp85$i = 0, $cmp86$i$i = 0, $cmp89$i = 0, $cmp9$i$i = 0, $cmp90$i = 0, $cmp91$i = 0, $cmp93$i = 0, $cmp95$i = 0, $cmp96$i = 0, $cmp97$i = 0, $cmp97$i$i = 0, $cmp977$i = 0, $cmp99 = 0, $cond = 0, $cond$i = 0, $cond$i$i = 0;
 var $cond$i$i$i = 0, $cond$i150 = 0, $cond$i19$i = 0, $cond$i25$i = 0, $cond$i53$i = 0, $cond115$i$i = 0, $cond13$i$i = 0, $cond15$i$i = 0, $cond2$i$i = 0, $cond3$i = 0, $cond315$i$i = 0, $cond383$i = 0, $exitcond$i$i = 0, $fd$i = 0, $fd$i$i = 0, $fd$i161 = 0, $fd103$i$i = 0, $fd123 = 0, $fd139$i = 0, $fd140$i$i = 0;
 var $fd148$i$i = 0, $fd160$i$i = 0, $fd219$i = 0, $fd247$i$i = 0, $fd303$i$i = 0, $fd312$i = 0, $fd339$i$i = 0, $fd344$i$i = 0, $fd359$i$i = 0, $fd371$i = 0, $fd408$i = 0, $fd416$i = 0, $fd431$i = 0, $fd50$i = 0, $fd54$i$i = 0, $fd59$i$i = 0, $fd68$pre$phi$i$iZ2D = 0, $fd69 = 0, $fd78$i$i = 0, $fd85$i$i = 0;
 var $fd9 = 0, $head = 0, $head$i = 0, $head$i$i = 0, $head$i$i$i = 0, $head$i151 = 0, $head$i20$i = 0, $head$i31$i = 0, $head$i57$i = 0, $head118$i$i = 0, $head168 = 0, $head173 = 0, $head177 = 0, $head179 = 0, $head179$i = 0, $head182$i = 0, $head187$i = 0, $head189$i = 0, $head195 = 0, $head198 = 0;
 var $head208$i$i = 0, $head211$i$i = 0, $head23$i$i = 0, $head25 = 0, $head26$i$i = 0, $head265$i = 0, $head268$i = 0, $head271$i = 0, $head274$i = 0, $head279$i = 0, $head281$i = 0, $head29$i = 0, $head29$i$i = 0, $head317$i$i = 0, $head32$i$i = 0, $head34$i$i = 0, $head386$i = 0, $head7$i$i = 0, $head7$i$i$i = 0, $head7$i59$i = 0;
 var $head94 = 0, $head97 = 0, $head99$i = 0, $i$01$i$i = 0, $idx$0$i = 0, $inc$i$i = 0, $index$i = 0, $index$i$i = 0, $index$i169 = 0, $index$i43$i = 0, $index288$i$i = 0, $index356$i = 0, $magic$i$i = 0, $nb$0 = 0, $neg = 0, $neg$i = 0, $neg$i$i = 0, $neg$i170 = 0, $neg$i181 = 0, $neg103$i = 0;
 var $neg13 = 0, $neg132$i$i = 0, $neg48$i = 0, $neg73 = 0, $next$i = 0, $next$i$i = 0, $next$i$i$i = 0, $next231$i = 0, $not$cmp$i = 0, $not$cmp107$i = 0, $not$cmp114$i = 0, $not$cmp141$i = 0, $not$cmp144$i$i = 0, $not$cmp150$i$i = 0, $not$cmp205$i = 0, $not$cmp346$i$i = 0, $not$cmp4$i = 0, $not$cmp418$i = 0, $not$cmp494$i = 0, $oldfirst$0$i$i = 0;
 var $or$cond$i = 0, $or$cond$i187 = 0, $or$cond1$i = 0, $or$cond1$i183 = 0, $or$cond2$i = 0, $or$cond3$i = 0, $or$cond4$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond7$not$i = 0, $or$cond8$i = 0, $or$cond97$i = 0, $or$cond98$i = 0, $or$i = 0, $or$i$i = 0, $or$i$i$i = 0, $or$i194 = 0, $or$i56$i = 0, $or101$i$i = 0, $or110 = 0;
 var $or167 = 0, $or172 = 0, $or176 = 0, $or178$i = 0, $or180 = 0, $or183$i = 0, $or186$i = 0, $or188$i = 0, $or19$i$i = 0, $or194 = 0, $or197 = 0, $or204$i = 0, $or210$i$i = 0, $or22$i$i = 0, $or23 = 0, $or232$i$i = 0, $or26 = 0, $or264$i = 0, $or267$i = 0, $or270$i = 0;
 var $or275$i = 0, $or278$i = 0, $or28$i$i = 0, $or280$i = 0, $or297$i = 0, $or300$i$i = 0, $or33$i$i = 0, $or368$i = 0, $or40 = 0, $or44$i$i = 0, $or93 = 0, $or96 = 0, $parent$i = 0, $parent$i$i = 0, $parent$i159 = 0, $parent$i40$i = 0, $parent135$i = 0, $parent138$i$i = 0, $parent149$i = 0, $parent162$i$i = 0;
 var $parent165$i$i = 0, $parent166$i = 0, $parent179$i$i = 0, $parent196$i$i = 0, $parent226$i = 0, $parent240$i = 0, $parent257$i = 0, $parent301$i$i = 0, $parent337$i$i = 0, $parent361$i$i = 0, $parent369$i = 0, $parent406$i = 0, $parent433$i = 0, $qsize$0$i$i = 0, $retval$0 = 0, $rsize$0$i = 0, $rsize$0$lcssa$i = 0, $rsize$08$i = 0, $rsize$1$i = 0, $rsize$3$i = 0;
 var $rsize$4$lcssa$i = 0, $rsize$49$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sflags193$i = 0, $sflags235$i = 0, $shl = 0, $shl$i = 0, $shl$i$i = 0, $shl$i13$i = 0, $shl$i143 = 0, $shl$i36$i = 0, $shl102 = 0, $shl105 = 0, $shl116$i$i = 0, $shl12 = 0, $shl127$i$i = 0, $shl131$i$i = 0, $shl15$i = 0, $shl18$i = 0;
 var $shl192$i = 0, $shl195$i = 0, $shl198$i = 0, $shl22 = 0, $shl222$i$i = 0, $shl226$i$i = 0, $shl265$i$i = 0, $shl270$i$i = 0, $shl276$i$i = 0, $shl279$i$i = 0, $shl288$i = 0, $shl291$i = 0, $shl294$i$i = 0, $shl31$i = 0, $shl316$i$i = 0, $shl326$i$i = 0, $shl333$i = 0, $shl338$i = 0, $shl344$i = 0, $shl347$i = 0;
 var $shl35 = 0, $shl362$i = 0, $shl37 = 0, $shl384$i = 0, $shl39$i$i = 0, $shl395$i = 0, $shl48$i$i = 0, $shl52$i = 0, $shl60$i = 0, $shl65 = 0, $shl70$i$i = 0, $shl72 = 0, $shl75$i$i = 0, $shl81$i$i = 0, $shl84$i$i = 0, $shl9$i = 0, $shl90 = 0, $shl95$i$i = 0, $shr = 0, $shr$i = 0;
 var $shr$i$i = 0, $shr$i139 = 0, $shr$i34$i = 0, $shr101 = 0, $shr11$i = 0, $shr11$i146 = 0, $shr110$i$i = 0, $shr12$i = 0, $shr124$i$i = 0, $shr15$i = 0, $shr16$i = 0, $shr16$i147 = 0, $shr19$i = 0, $shr194$i = 0, $shr20$i = 0, $shr214$i$i = 0, $shr253$i$i = 0, $shr263$i$i = 0, $shr267$i$i = 0, $shr27$i = 0;
 var $shr272$i$i = 0, $shr277$i$i = 0, $shr281$i$i = 0, $shr283$i = 0, $shr3 = 0, $shr310$i$i = 0, $shr318$i = 0, $shr323$i$i = 0, $shr330$i = 0, $shr335$i = 0, $shr340$i = 0, $shr345$i = 0, $shr349$i = 0, $shr378$i = 0, $shr392$i = 0, $shr4$i = 0, $shr42$i = 0, $shr45 = 0, $shr47 = 0, $shr48 = 0;
 var $shr5$i = 0, $shr5$i141 = 0, $shr51 = 0, $shr52 = 0, $shr55 = 0, $shr56 = 0, $shr58$i$i = 0, $shr59 = 0, $shr60 = 0, $shr63 = 0, $shr68$i$i = 0, $shr7$i = 0, $shr7$i144 = 0, $shr72$i = 0, $shr72$i$i = 0, $shr75$i = 0, $shr76$i = 0, $shr77$i$i = 0, $shr79$i = 0, $shr8$i = 0;
 var $shr80$i = 0, $shr82$i$i = 0, $shr83$i = 0, $shr84$i = 0, $shr86$i$i = 0, $shr87$i = 0, $shr88$i = 0, $shr91$i = 0, $size$i$i = 0, $size$i$i$i = 0, $size188$i = 0, $size245$i = 0, $sizebits$0$i = 0, $sizebits$0$shl52$i = 0, $sp$0$i$i = 0, $sp$0$i$i$i = 0, $sp$0108$i = 0, $sp$1107$i = 0, $ssize$2$ph$i = 0, $sub = 0;
 var $sub$i = 0, $sub$i138 = 0, $sub$i180 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$lhs$cast$i28$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$rhs$cast$i29$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i30$i = 0, $sub$ptr$sub$tsize$4$i = 0, $sub10$i = 0, $sub101$i = 0, $sub101$rsize$4$i = 0, $sub112$i = 0, $sub113$i$i = 0, $sub118$i = 0, $sub14$i = 0;
 var $sub16$i$i = 0, $sub160 = 0, $sub172$i = 0, $sub18$i$i = 0, $sub190 = 0, $sub2$i = 0, $sub22$i = 0, $sub260$i = 0, $sub262$i$i = 0, $sub266$i$i = 0, $sub271$i$i = 0, $sub275$i$i = 0, $sub30$i = 0, $sub31$i = 0, $sub31$rsize$0$i = 0, $sub313$i$i = 0, $sub329$i = 0, $sub33$i = 0, $sub334$i = 0, $sub339$i = 0;
 var $sub343$i = 0, $sub381$i = 0, $sub4$i = 0, $sub41$i = 0, $sub42 = 0, $sub44 = 0, $sub5$i$i = 0, $sub5$i$i$i = 0, $sub5$i55$i = 0, $sub50$i = 0, $sub6$i = 0, $sub63$i = 0, $sub67$i = 0, $sub67$i$i = 0, $sub70$i = 0, $sub71$i$i = 0, $sub76$i$i = 0, $sub80$i$i = 0, $sub91 = 0, $sub99$i = 0;
 var $t$0$i = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$48$i = 0, $tbase$796$i = 0, $tobool$i$i = 0, $tobool107 = 0, $tobool195$i = 0, $tobool200$i = 0, $tobool228$i$i = 0, $tobool237$i = 0, $tobool293$i = 0, $tobool296$i$i = 0, $tobool30$i = 0, $tobool364$i = 0, $tobool97$i$i = 0, $tsize$2657583$i = 0, $tsize$4$i = 0, $tsize$795$i = 0;
 var $v$0$i = 0, $v$0$lcssa$i = 0, $v$09$i = 0, $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$4$ph$i = 0, $v$410$i = 0, $xor$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $magic$i$i = sp;
 $cmp = ($bytes>>>0)<(245);
 do {
  if ($cmp) {
   $cmp1 = ($bytes>>>0)<(11);
   $add2 = (($bytes) + 11)|0;
   $and = $add2 & -8;
   $cond = $cmp1 ? 16 : $and;
   $shr = $cond >>> 3;
   $0 = load4(9564);
   $shr3 = $0 >>> $shr;
   $and4 = $shr3 & 3;
   $cmp5 = ($and4|0)==(0);
   if (!($cmp5)) {
    $neg = $shr3 & 1;
    $and7 = $neg ^ 1;
    $add8 = (($and7) + ($shr))|0;
    $shl = $add8 << 1;
    $arrayidx = (9604 + ($shl<<2)|0);
    $1 = ((($arrayidx)) + 8|0);
    $2 = load4($1);
    $fd9 = ((($2)) + 8|0);
    $3 = load4($fd9);
    $cmp10 = ($arrayidx|0)==($3|0);
    do {
     if ($cmp10) {
      $shl12 = 1 << $add8;
      $neg13 = $shl12 ^ -1;
      $and14 = $0 & $neg13;
      store4(9564,$and14);
     } else {
      $4 = load4((9580));
      $cmp15 = ($3>>>0)<($4>>>0);
      if ($cmp15) {
       _abort();
       // unreachable;
      }
      $bk = ((($3)) + 12|0);
      $5 = load4($bk);
      $cmp16 = ($5|0)==($2|0);
      if ($cmp16) {
       store4($bk,$arrayidx);
       store4($1,$3);
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
    store4($head,$or23);
    $add$ptr = (($2) + ($shl22)|0);
    $head25 = ((($add$ptr)) + 4|0);
    $6 = load4($head25);
    $or26 = $6 | 1;
    store4($head25,$or26);
    $retval$0 = $fd9;
    STACKTOP = sp;return ($retval$0|0);
   }
   $7 = load4((9572));
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
     $arrayidx66 = (9604 + ($shl65<<2)|0);
     $8 = ((($arrayidx66)) + 8|0);
     $9 = load4($8);
     $fd69 = ((($9)) + 8|0);
     $10 = load4($fd69);
     $cmp70 = ($arrayidx66|0)==($10|0);
     do {
      if ($cmp70) {
       $shl72 = 1 << $add64;
       $neg73 = $shl72 ^ -1;
       $and74 = $0 & $neg73;
       store4(9564,$and74);
       $14 = $and74;
      } else {
       $11 = load4((9580));
       $cmp76 = ($10>>>0)<($11>>>0);
       if ($cmp76) {
        _abort();
        // unreachable;
       }
       $bk78 = ((($10)) + 12|0);
       $12 = load4($bk78);
       $cmp79 = ($12|0)==($9|0);
       if ($cmp79) {
        store4($bk78,$arrayidx66);
        store4($8,$10);
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
     store4($head94,$or93);
     $add$ptr95 = (($9) + ($cond)|0);
     $or96 = $sub91 | 1;
     $head97 = ((($add$ptr95)) + 4|0);
     store4($head97,$or96);
     $add$ptr98 = (($add$ptr95) + ($sub91)|0);
     store4($add$ptr98,$sub91);
     $cmp99 = ($7|0)==(0);
     if (!($cmp99)) {
      $13 = load4((9584));
      $shr101 = $7 >>> 3;
      $shl102 = $shr101 << 1;
      $arrayidx103 = (9604 + ($shl102<<2)|0);
      $shl105 = 1 << $shr101;
      $and106 = $14 & $shl105;
      $tobool107 = ($and106|0)==(0);
      if ($tobool107) {
       $or110 = $14 | $shl105;
       store4(9564,$or110);
       $$pre = ((($arrayidx103)) + 8|0);
       $$pre$phiZ2D = $$pre;$F104$0 = $arrayidx103;
      } else {
       $15 = ((($arrayidx103)) + 8|0);
       $16 = load4($15);
       $17 = load4((9580));
       $cmp113 = ($16>>>0)<($17>>>0);
       if ($cmp113) {
        _abort();
        // unreachable;
       } else {
        $$pre$phiZ2D = $15;$F104$0 = $16;
       }
      }
      store4($$pre$phiZ2D,$13);
      $bk122 = ((($F104$0)) + 12|0);
      store4($bk122,$13);
      $fd123 = ((($13)) + 8|0);
      store4($fd123,$F104$0);
      $bk124 = ((($13)) + 12|0);
      store4($bk124,$arrayidx103);
     }
     store4((9572),$sub91);
     store4((9584),$add$ptr95);
     $retval$0 = $fd69;
     STACKTOP = sp;return ($retval$0|0);
    }
    $18 = load4((9568));
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
     $arrayidx$i = (9868 + ($add20$i<<2)|0);
     $19 = load4($arrayidx$i);
     $head$i = ((($19)) + 4|0);
     $20 = load4($head$i);
     $and21$i = $20 & -8;
     $sub22$i = (($and21$i) - ($cond))|0;
     $arrayidx233$i = ((($19)) + 16|0);
     $21 = load4($arrayidx233$i);
     $not$cmp4$i = ($21|0)==(0|0);
     $$sink5$i = $not$cmp4$i&1;
     $arrayidx276$i = (((($19)) + 16|0) + ($$sink5$i<<2)|0);
     $22 = load4($arrayidx276$i);
     $cmp287$i = ($22|0)==(0|0);
     if ($cmp287$i) {
      $rsize$0$lcssa$i = $sub22$i;$v$0$lcssa$i = $19;
     } else {
      $23 = $22;$rsize$08$i = $sub22$i;$v$09$i = $19;
      while(1) {
       $head29$i = ((($23)) + 4|0);
       $24 = load4($head29$i);
       $and30$i = $24 & -8;
       $sub31$i = (($and30$i) - ($cond))|0;
       $cmp32$i = ($sub31$i>>>0)<($rsize$08$i>>>0);
       $sub31$rsize$0$i = $cmp32$i ? $sub31$i : $rsize$08$i;
       $$v$0$i = $cmp32$i ? $23 : $v$09$i;
       $arrayidx23$i = ((($23)) + 16|0);
       $25 = load4($arrayidx23$i);
       $not$cmp$i = ($25|0)==(0|0);
       $$sink$i = $not$cmp$i&1;
       $arrayidx27$i = (((($23)) + 16|0) + ($$sink$i<<2)|0);
       $26 = load4($arrayidx27$i);
       $cmp28$i = ($26|0)==(0|0);
       if ($cmp28$i) {
        $rsize$0$lcssa$i = $sub31$rsize$0$i;$v$0$lcssa$i = $$v$0$i;
        break;
       } else {
        $23 = $26;$rsize$08$i = $sub31$rsize$0$i;$v$09$i = $$v$0$i;
       }
      }
     }
     $27 = load4((9580));
     $cmp33$i = ($v$0$lcssa$i>>>0)<($27>>>0);
     if ($cmp33$i) {
      _abort();
      // unreachable;
     }
     $add$ptr$i = (($v$0$lcssa$i) + ($cond)|0);
     $cmp35$i = ($v$0$lcssa$i>>>0)<($add$ptr$i>>>0);
     if (!($cmp35$i)) {
      _abort();
      // unreachable;
     }
     $parent$i = ((($v$0$lcssa$i)) + 24|0);
     $28 = load4($parent$i);
     $bk$i = ((($v$0$lcssa$i)) + 12|0);
     $29 = load4($bk$i);
     $cmp40$i = ($29|0)==($v$0$lcssa$i|0);
     do {
      if ($cmp40$i) {
       $arrayidx61$i = ((($v$0$lcssa$i)) + 20|0);
       $33 = load4($arrayidx61$i);
       $cmp62$i = ($33|0)==(0|0);
       if ($cmp62$i) {
        $arrayidx65$i = ((($v$0$lcssa$i)) + 16|0);
        $34 = load4($arrayidx65$i);
        $cmp66$i = ($34|0)==(0|0);
        if ($cmp66$i) {
         $R$3$i = 0;
         break;
        } else {
         $R$1$i = $34;$RP$1$i = $arrayidx65$i;
        }
       } else {
        $R$1$i = $33;$RP$1$i = $arrayidx61$i;
       }
       while(1) {
        $arrayidx71$i = ((($R$1$i)) + 20|0);
        $35 = load4($arrayidx71$i);
        $cmp72$i = ($35|0)==(0|0);
        if (!($cmp72$i)) {
         $R$1$i = $35;$RP$1$i = $arrayidx71$i;
         continue;
        }
        $arrayidx75$i = ((($R$1$i)) + 16|0);
        $36 = load4($arrayidx75$i);
        $cmp76$i = ($36|0)==(0|0);
        if ($cmp76$i) {
         break;
        } else {
         $R$1$i = $36;$RP$1$i = $arrayidx75$i;
        }
       }
       $cmp81$i = ($RP$1$i>>>0)<($27>>>0);
       if ($cmp81$i) {
        _abort();
        // unreachable;
       } else {
        store4($RP$1$i,0);
        $R$3$i = $R$1$i;
        break;
       }
      } else {
       $fd$i = ((($v$0$lcssa$i)) + 8|0);
       $30 = load4($fd$i);
       $cmp45$i = ($30>>>0)<($27>>>0);
       if ($cmp45$i) {
        _abort();
        // unreachable;
       }
       $bk47$i = ((($30)) + 12|0);
       $31 = load4($bk47$i);
       $cmp48$i = ($31|0)==($v$0$lcssa$i|0);
       if (!($cmp48$i)) {
        _abort();
        // unreachable;
       }
       $fd50$i = ((($29)) + 8|0);
       $32 = load4($fd50$i);
       $cmp51$i = ($32|0)==($v$0$lcssa$i|0);
       if ($cmp51$i) {
        store4($bk47$i,$29);
        store4($fd50$i,$30);
        $R$3$i = $29;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $cmp90$i = ($28|0)==(0|0);
     L73: do {
      if (!($cmp90$i)) {
       $index$i = ((($v$0$lcssa$i)) + 28|0);
       $37 = load4($index$i);
       $arrayidx94$i = (9868 + ($37<<2)|0);
       $38 = load4($arrayidx94$i);
       $cmp95$i = ($v$0$lcssa$i|0)==($38|0);
       $cond$i = ($R$3$i|0)==(0|0);
       do {
        if ($cmp95$i) {
         store4($arrayidx94$i,$R$3$i);
         if ($cond$i) {
          $shl$i = 1 << $37;
          $neg$i = $shl$i ^ -1;
          $and103$i = $18 & $neg$i;
          store4((9568),$and103$i);
          break L73;
         }
        } else {
         $39 = load4((9580));
         $cmp107$i = ($28>>>0)<($39>>>0);
         if ($cmp107$i) {
          _abort();
          // unreachable;
         } else {
          $arrayidx113$i = ((($28)) + 16|0);
          $40 = load4($arrayidx113$i);
          $not$cmp114$i = ($40|0)!=($v$0$lcssa$i|0);
          $$sink2$i = $not$cmp114$i&1;
          $arrayidx121$i = (((($28)) + 16|0) + ($$sink2$i<<2)|0);
          store4($arrayidx121$i,$R$3$i);
          if ($cond$i) {
           break L73;
          } else {
           break;
          }
         }
        }
       } while(0);
       $41 = load4((9580));
       $cmp130$i = ($R$3$i>>>0)<($41>>>0);
       if ($cmp130$i) {
        _abort();
        // unreachable;
       }
       $parent135$i = ((($R$3$i)) + 24|0);
       store4($parent135$i,$28);
       $arrayidx137$i = ((($v$0$lcssa$i)) + 16|0);
       $42 = load4($arrayidx137$i);
       $cmp138$i = ($42|0)==(0|0);
       do {
        if (!($cmp138$i)) {
         $cmp142$i = ($42>>>0)<($41>>>0);
         if ($cmp142$i) {
          _abort();
          // unreachable;
         } else {
          $arrayidx148$i = ((($R$3$i)) + 16|0);
          store4($arrayidx148$i,$42);
          $parent149$i = ((($42)) + 24|0);
          store4($parent149$i,$R$3$i);
          break;
         }
        }
       } while(0);
       $arrayidx154$i = ((($v$0$lcssa$i)) + 20|0);
       $43 = load4($arrayidx154$i);
       $cmp155$i = ($43|0)==(0|0);
       if (!($cmp155$i)) {
        $44 = load4((9580));
        $cmp159$i = ($43>>>0)<($44>>>0);
        if ($cmp159$i) {
         _abort();
         // unreachable;
        } else {
         $arrayidx165$i = ((($R$3$i)) + 20|0);
         store4($arrayidx165$i,$43);
         $parent166$i = ((($43)) + 24|0);
         store4($parent166$i,$R$3$i);
         break;
        }
       }
      }
     } while(0);
     $cmp174$i = ($rsize$0$lcssa$i>>>0)<(16);
     if ($cmp174$i) {
      $add177$i = (($rsize$0$lcssa$i) + ($cond))|0;
      $or178$i = $add177$i | 3;
      $head179$i = ((($v$0$lcssa$i)) + 4|0);
      store4($head179$i,$or178$i);
      $add$ptr181$i = (($v$0$lcssa$i) + ($add177$i)|0);
      $head182$i = ((($add$ptr181$i)) + 4|0);
      $45 = load4($head182$i);
      $or183$i = $45 | 1;
      store4($head182$i,$or183$i);
     } else {
      $or186$i = $cond | 3;
      $head187$i = ((($v$0$lcssa$i)) + 4|0);
      store4($head187$i,$or186$i);
      $or188$i = $rsize$0$lcssa$i | 1;
      $head189$i = ((($add$ptr$i)) + 4|0);
      store4($head189$i,$or188$i);
      $add$ptr190$i = (($add$ptr$i) + ($rsize$0$lcssa$i)|0);
      store4($add$ptr190$i,$rsize$0$lcssa$i);
      $cmp191$i = ($7|0)==(0);
      if (!($cmp191$i)) {
       $46 = load4((9584));
       $shr194$i = $7 >>> 3;
       $shl195$i = $shr194$i << 1;
       $arrayidx196$i = (9604 + ($shl195$i<<2)|0);
       $shl198$i = 1 << $shr194$i;
       $and199$i = $shl198$i & $0;
       $tobool200$i = ($and199$i|0)==(0);
       if ($tobool200$i) {
        $or204$i = $shl198$i | $0;
        store4(9564,$or204$i);
        $$pre$i = ((($arrayidx196$i)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F197$0$i = $arrayidx196$i;
       } else {
        $47 = ((($arrayidx196$i)) + 8|0);
        $48 = load4($47);
        $49 = load4((9580));
        $cmp208$i = ($48>>>0)<($49>>>0);
        if ($cmp208$i) {
         _abort();
         // unreachable;
        } else {
         $$pre$phi$iZ2D = $47;$F197$0$i = $48;
        }
       }
       store4($$pre$phi$iZ2D,$46);
       $bk218$i = ((($F197$0$i)) + 12|0);
       store4($bk218$i,$46);
       $fd219$i = ((($46)) + 8|0);
       store4($fd219$i,$F197$0$i);
       $bk220$i = ((($46)) + 12|0);
       store4($bk220$i,$arrayidx196$i);
      }
      store4((9572),$rsize$0$lcssa$i);
      store4((9584),$add$ptr$i);
     }
     $add$ptr225$i = ((($v$0$lcssa$i)) + 8|0);
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
    $50 = load4((9568));
    $cmp146 = ($50|0)==(0);
    if ($cmp146) {
     $nb$0 = $and145;
    } else {
     $sub$i138 = (0 - ($and145))|0;
     $shr$i139 = $add144 >>> 8;
     $cmp$i = ($shr$i139|0)==(0);
     if ($cmp$i) {
      $idx$0$i = 0;
     } else {
      $cmp1$i = ($and145>>>0)>(16777215);
      if ($cmp1$i) {
       $idx$0$i = 31;
      } else {
       $sub4$i = (($shr$i139) + 1048320)|0;
       $shr5$i141 = $sub4$i >>> 16;
       $and$i142 = $shr5$i141 & 8;
       $shl$i143 = $shr$i139 << $and$i142;
       $sub6$i = (($shl$i143) + 520192)|0;
       $shr7$i144 = $sub6$i >>> 16;
       $and8$i = $shr7$i144 & 4;
       $add$i145 = $and8$i | $and$i142;
       $shl9$i = $shl$i143 << $and8$i;
       $sub10$i = (($shl9$i) + 245760)|0;
       $shr11$i146 = $sub10$i >>> 16;
       $and12$i = $shr11$i146 & 2;
       $add13$i = $add$i145 | $and12$i;
       $sub14$i = (14 - ($add13$i))|0;
       $shl15$i = $shl9$i << $and12$i;
       $shr16$i147 = $shl15$i >>> 15;
       $add17$i = (($sub14$i) + ($shr16$i147))|0;
       $shl18$i = $add17$i << 1;
       $add19$i = (($add17$i) + 7)|0;
       $shr20$i = $and145 >>> $add19$i;
       $and21$i148 = $shr20$i & 1;
       $add22$i = $and21$i148 | $shl18$i;
       $idx$0$i = $add22$i;
      }
     }
     $arrayidx$i149 = (9868 + ($idx$0$i<<2)|0);
     $51 = load4($arrayidx$i149);
     $cmp24$i = ($51|0)==(0|0);
     L117: do {
      if ($cmp24$i) {
       $rsize$3$i = $sub$i138;$t$2$i = 0;$v$3$i = 0;
       label = 81;
      } else {
       $cmp26$i = ($idx$0$i|0)==(31);
       $shr27$i = $idx$0$i >>> 1;
       $sub30$i = (25 - ($shr27$i))|0;
       $cond$i150 = $cmp26$i ? 0 : $sub30$i;
       $shl31$i = $and145 << $cond$i150;
       $rsize$0$i = $sub$i138;$rst$0$i = 0;$sizebits$0$i = $shl31$i;$t$0$i = $51;$v$0$i = 0;
       while(1) {
        $head$i151 = ((($t$0$i)) + 4|0);
        $52 = load4($head$i151);
        $and32$i = $52 & -8;
        $sub33$i = (($and32$i) - ($and145))|0;
        $cmp34$i = ($sub33$i>>>0)<($rsize$0$i>>>0);
        if ($cmp34$i) {
         $cmp36$i = ($sub33$i|0)==(0);
         if ($cmp36$i) {
          $rsize$49$i = 0;$t$48$i = $t$0$i;$v$410$i = $t$0$i;
          label = 85;
          break L117;
         } else {
          $rsize$1$i = $sub33$i;$v$1$i = $t$0$i;
         }
        } else {
         $rsize$1$i = $rsize$0$i;$v$1$i = $v$0$i;
        }
        $arrayidx40$i = ((($t$0$i)) + 20|0);
        $53 = load4($arrayidx40$i);
        $shr42$i = $sizebits$0$i >>> 31;
        $arrayidx44$i = (((($t$0$i)) + 16|0) + ($shr42$i<<2)|0);
        $54 = load4($arrayidx44$i);
        $cmp45$i152 = ($53|0)==(0|0);
        $cmp46$i = ($53|0)==($54|0);
        $or$cond1$i = $cmp45$i152 | $cmp46$i;
        $rst$1$i = $or$cond1$i ? $rst$0$i : $53;
        $cmp49$i = ($54|0)==(0|0);
        $not$cmp494$i = $cmp49$i ^ 1;
        $shl52$i = $not$cmp494$i&1;
        $sizebits$0$shl52$i = $sizebits$0$i << $shl52$i;
        if ($cmp49$i) {
         $rsize$3$i = $rsize$1$i;$t$2$i = $rst$1$i;$v$3$i = $v$1$i;
         label = 81;
         break;
        } else {
         $rsize$0$i = $rsize$1$i;$rst$0$i = $rst$1$i;$sizebits$0$i = $sizebits$0$shl52$i;$t$0$i = $54;$v$0$i = $v$1$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 81) {
      $cmp55$i = ($t$2$i|0)==(0|0);
      $cmp57$i = ($v$3$i|0)==(0|0);
      $or$cond$i = $cmp55$i & $cmp57$i;
      if ($or$cond$i) {
       $shl60$i = 2 << $idx$0$i;
       $sub63$i = (0 - ($shl60$i))|0;
       $or$i = $shl60$i | $sub63$i;
       $and64$i = $or$i & $50;
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
       $arrayidx94$i153 = (9868 + ($add92$i<<2)|0);
       $55 = load4($arrayidx94$i153);
       $t$4$ph$i = $55;$v$4$ph$i = 0;
      } else {
       $t$4$ph$i = $t$2$i;$v$4$ph$i = $v$3$i;
      }
      $cmp977$i = ($t$4$ph$i|0)==(0|0);
      if ($cmp977$i) {
       $rsize$4$lcssa$i = $rsize$3$i;$v$4$lcssa$i = $v$4$ph$i;
      } else {
       $rsize$49$i = $rsize$3$i;$t$48$i = $t$4$ph$i;$v$410$i = $v$4$ph$i;
       label = 85;
      }
     }
     if ((label|0) == 85) {
      while(1) {
       label = 0;
       $head99$i = ((($t$48$i)) + 4|0);
       $56 = load4($head99$i);
       $and100$i = $56 & -8;
       $sub101$i = (($and100$i) - ($and145))|0;
       $cmp102$i = ($sub101$i>>>0)<($rsize$49$i>>>0);
       $sub101$rsize$4$i = $cmp102$i ? $sub101$i : $rsize$49$i;
       $t$4$v$4$i = $cmp102$i ? $t$48$i : $v$410$i;
       $arrayidx106$i = ((($t$48$i)) + 16|0);
       $57 = load4($arrayidx106$i);
       $not$cmp107$i = ($57|0)==(0|0);
       $$sink$i154 = $not$cmp107$i&1;
       $arrayidx113$i155 = (((($t$48$i)) + 16|0) + ($$sink$i154<<2)|0);
       $58 = load4($arrayidx113$i155);
       $cmp97$i = ($58|0)==(0|0);
       if ($cmp97$i) {
        $rsize$4$lcssa$i = $sub101$rsize$4$i;$v$4$lcssa$i = $t$4$v$4$i;
        break;
       } else {
        $rsize$49$i = $sub101$rsize$4$i;$t$48$i = $58;$v$410$i = $t$4$v$4$i;
        label = 85;
       }
      }
     }
     $cmp116$i = ($v$4$lcssa$i|0)==(0|0);
     if ($cmp116$i) {
      $nb$0 = $and145;
     } else {
      $59 = load4((9572));
      $sub118$i = (($59) - ($and145))|0;
      $cmp119$i = ($rsize$4$lcssa$i>>>0)<($sub118$i>>>0);
      if ($cmp119$i) {
       $60 = load4((9580));
       $cmp121$i = ($v$4$lcssa$i>>>0)<($60>>>0);
       if ($cmp121$i) {
        _abort();
        // unreachable;
       }
       $add$ptr$i158 = (($v$4$lcssa$i) + ($and145)|0);
       $cmp123$i = ($v$4$lcssa$i>>>0)<($add$ptr$i158>>>0);
       if (!($cmp123$i)) {
        _abort();
        // unreachable;
       }
       $parent$i159 = ((($v$4$lcssa$i)) + 24|0);
       $61 = load4($parent$i159);
       $bk$i160 = ((($v$4$lcssa$i)) + 12|0);
       $62 = load4($bk$i160);
       $cmp128$i = ($62|0)==($v$4$lcssa$i|0);
       do {
        if ($cmp128$i) {
         $arrayidx151$i = ((($v$4$lcssa$i)) + 20|0);
         $66 = load4($arrayidx151$i);
         $cmp152$i = ($66|0)==(0|0);
         if ($cmp152$i) {
          $arrayidx155$i = ((($v$4$lcssa$i)) + 16|0);
          $67 = load4($arrayidx155$i);
          $cmp156$i = ($67|0)==(0|0);
          if ($cmp156$i) {
           $R$3$i168 = 0;
           break;
          } else {
           $R$1$i165 = $67;$RP$1$i164 = $arrayidx155$i;
          }
         } else {
          $R$1$i165 = $66;$RP$1$i164 = $arrayidx151$i;
         }
         while(1) {
          $arrayidx161$i = ((($R$1$i165)) + 20|0);
          $68 = load4($arrayidx161$i);
          $cmp162$i = ($68|0)==(0|0);
          if (!($cmp162$i)) {
           $R$1$i165 = $68;$RP$1$i164 = $arrayidx161$i;
           continue;
          }
          $arrayidx165$i166 = ((($R$1$i165)) + 16|0);
          $69 = load4($arrayidx165$i166);
          $cmp166$i = ($69|0)==(0|0);
          if ($cmp166$i) {
           break;
          } else {
           $R$1$i165 = $69;$RP$1$i164 = $arrayidx165$i166;
          }
         }
         $cmp171$i = ($RP$1$i164>>>0)<($60>>>0);
         if ($cmp171$i) {
          _abort();
          // unreachable;
         } else {
          store4($RP$1$i164,0);
          $R$3$i168 = $R$1$i165;
          break;
         }
        } else {
         $fd$i161 = ((($v$4$lcssa$i)) + 8|0);
         $63 = load4($fd$i161);
         $cmp133$i = ($63>>>0)<($60>>>0);
         if ($cmp133$i) {
          _abort();
          // unreachable;
         }
         $bk136$i = ((($63)) + 12|0);
         $64 = load4($bk136$i);
         $cmp137$i = ($64|0)==($v$4$lcssa$i|0);
         if (!($cmp137$i)) {
          _abort();
          // unreachable;
         }
         $fd139$i = ((($62)) + 8|0);
         $65 = load4($fd139$i);
         $cmp140$i = ($65|0)==($v$4$lcssa$i|0);
         if ($cmp140$i) {
          store4($bk136$i,$62);
          store4($fd139$i,$63);
          $R$3$i168 = $62;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $cmp180$i = ($61|0)==(0|0);
       L164: do {
        if ($cmp180$i) {
         $83 = $50;
        } else {
         $index$i169 = ((($v$4$lcssa$i)) + 28|0);
         $70 = load4($index$i169);
         $arrayidx184$i = (9868 + ($70<<2)|0);
         $71 = load4($arrayidx184$i);
         $cmp185$i = ($v$4$lcssa$i|0)==($71|0);
         $cond3$i = ($R$3$i168|0)==(0|0);
         do {
          if ($cmp185$i) {
           store4($arrayidx184$i,$R$3$i168);
           if ($cond3$i) {
            $shl192$i = 1 << $70;
            $neg$i170 = $shl192$i ^ -1;
            $and194$i = $50 & $neg$i170;
            store4((9568),$and194$i);
            $83 = $and194$i;
            break L164;
           }
          } else {
           $72 = load4((9580));
           $cmp198$i = ($61>>>0)<($72>>>0);
           if ($cmp198$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx204$i = ((($61)) + 16|0);
            $73 = load4($arrayidx204$i);
            $not$cmp205$i = ($73|0)!=($v$4$lcssa$i|0);
            $$sink2$i172 = $not$cmp205$i&1;
            $arrayidx212$i = (((($61)) + 16|0) + ($$sink2$i172<<2)|0);
            store4($arrayidx212$i,$R$3$i168);
            if ($cond3$i) {
             $83 = $50;
             break L164;
            } else {
             break;
            }
           }
          }
         } while(0);
         $74 = load4((9580));
         $cmp221$i = ($R$3$i168>>>0)<($74>>>0);
         if ($cmp221$i) {
          _abort();
          // unreachable;
         }
         $parent226$i = ((($R$3$i168)) + 24|0);
         store4($parent226$i,$61);
         $arrayidx228$i = ((($v$4$lcssa$i)) + 16|0);
         $75 = load4($arrayidx228$i);
         $cmp229$i = ($75|0)==(0|0);
         do {
          if (!($cmp229$i)) {
           $cmp233$i = ($75>>>0)<($74>>>0);
           if ($cmp233$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx239$i = ((($R$3$i168)) + 16|0);
            store4($arrayidx239$i,$75);
            $parent240$i = ((($75)) + 24|0);
            store4($parent240$i,$R$3$i168);
            break;
           }
          }
         } while(0);
         $arrayidx245$i = ((($v$4$lcssa$i)) + 20|0);
         $76 = load4($arrayidx245$i);
         $cmp246$i = ($76|0)==(0|0);
         if ($cmp246$i) {
          $83 = $50;
         } else {
          $77 = load4((9580));
          $cmp250$i = ($76>>>0)<($77>>>0);
          if ($cmp250$i) {
           _abort();
           // unreachable;
          } else {
           $arrayidx256$i = ((($R$3$i168)) + 20|0);
           store4($arrayidx256$i,$76);
           $parent257$i = ((($76)) + 24|0);
           store4($parent257$i,$R$3$i168);
           $83 = $50;
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
         store4($head271$i,$or270$i);
         $add$ptr273$i = (($v$4$lcssa$i) + ($add268$i)|0);
         $head274$i = ((($add$ptr273$i)) + 4|0);
         $78 = load4($head274$i);
         $or275$i = $78 | 1;
         store4($head274$i,$or275$i);
        } else {
         $or278$i = $and145 | 3;
         $head279$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head279$i,$or278$i);
         $or280$i = $rsize$4$lcssa$i | 1;
         $head281$i = ((($add$ptr$i158)) + 4|0);
         store4($head281$i,$or280$i);
         $add$ptr282$i = (($add$ptr$i158) + ($rsize$4$lcssa$i)|0);
         store4($add$ptr282$i,$rsize$4$lcssa$i);
         $shr283$i = $rsize$4$lcssa$i >>> 3;
         $cmp284$i = ($rsize$4$lcssa$i>>>0)<(256);
         if ($cmp284$i) {
          $shl288$i = $shr283$i << 1;
          $arrayidx289$i = (9604 + ($shl288$i<<2)|0);
          $79 = load4(9564);
          $shl291$i = 1 << $shr283$i;
          $and292$i = $79 & $shl291$i;
          $tobool293$i = ($and292$i|0)==(0);
          if ($tobool293$i) {
           $or297$i = $79 | $shl291$i;
           store4(9564,$or297$i);
           $$pre$i175 = ((($arrayidx289$i)) + 8|0);
           $$pre$phi$i176Z2D = $$pre$i175;$F290$0$i = $arrayidx289$i;
          } else {
           $80 = ((($arrayidx289$i)) + 8|0);
           $81 = load4($80);
           $82 = load4((9580));
           $cmp301$i = ($81>>>0)<($82>>>0);
           if ($cmp301$i) {
            _abort();
            // unreachable;
           } else {
            $$pre$phi$i176Z2D = $80;$F290$0$i = $81;
           }
          }
          store4($$pre$phi$i176Z2D,$add$ptr$i158);
          $bk311$i = ((($F290$0$i)) + 12|0);
          store4($bk311$i,$add$ptr$i158);
          $fd312$i = ((($add$ptr$i158)) + 8|0);
          store4($fd312$i,$F290$0$i);
          $bk313$i = ((($add$ptr$i158)) + 12|0);
          store4($bk313$i,$arrayidx289$i);
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
         $arrayidx355$i = (9868 + ($I316$0$i<<2)|0);
         $index356$i = ((($add$ptr$i158)) + 28|0);
         store4($index356$i,$I316$0$i);
         $child357$i = ((($add$ptr$i158)) + 16|0);
         $arrayidx358$i = ((($child357$i)) + 4|0);
         store4($arrayidx358$i,0);
         store4($child357$i,0);
         $shl362$i = 1 << $I316$0$i;
         $and363$i = $shl362$i & $83;
         $tobool364$i = ($and363$i|0)==(0);
         if ($tobool364$i) {
          $or368$i = $shl362$i | $83;
          store4((9568),$or368$i);
          store4($arrayidx355$i,$add$ptr$i158);
          $parent369$i = ((($add$ptr$i158)) + 24|0);
          store4($parent369$i,$arrayidx355$i);
          $bk370$i = ((($add$ptr$i158)) + 12|0);
          store4($bk370$i,$add$ptr$i158);
          $fd371$i = ((($add$ptr$i158)) + 8|0);
          store4($fd371$i,$add$ptr$i158);
          break;
         }
         $84 = load4($arrayidx355$i);
         $cmp374$i = ($I316$0$i|0)==(31);
         $shr378$i = $I316$0$i >>> 1;
         $sub381$i = (25 - ($shr378$i))|0;
         $cond383$i = $cmp374$i ? 0 : $sub381$i;
         $shl384$i = $rsize$4$lcssa$i << $cond383$i;
         $K373$0$i = $shl384$i;$T$0$i = $84;
         while(1) {
          $head386$i = ((($T$0$i)) + 4|0);
          $85 = load4($head386$i);
          $and387$i = $85 & -8;
          $cmp388$i = ($and387$i|0)==($rsize$4$lcssa$i|0);
          if ($cmp388$i) {
           label = 139;
           break;
          }
          $shr392$i = $K373$0$i >>> 31;
          $arrayidx394$i = (((($T$0$i)) + 16|0) + ($shr392$i<<2)|0);
          $shl395$i = $K373$0$i << 1;
          $86 = load4($arrayidx394$i);
          $cmp396$i = ($86|0)==(0|0);
          if ($cmp396$i) {
           label = 136;
           break;
          } else {
           $K373$0$i = $shl395$i;$T$0$i = $86;
          }
         }
         if ((label|0) == 136) {
          $87 = load4((9580));
          $cmp401$i = ($arrayidx394$i>>>0)<($87>>>0);
          if ($cmp401$i) {
           _abort();
           // unreachable;
          } else {
           store4($arrayidx394$i,$add$ptr$i158);
           $parent406$i = ((($add$ptr$i158)) + 24|0);
           store4($parent406$i,$T$0$i);
           $bk407$i = ((($add$ptr$i158)) + 12|0);
           store4($bk407$i,$add$ptr$i158);
           $fd408$i = ((($add$ptr$i158)) + 8|0);
           store4($fd408$i,$add$ptr$i158);
           break;
          }
         }
         else if ((label|0) == 139) {
          $fd416$i = ((($T$0$i)) + 8|0);
          $88 = load4($fd416$i);
          $89 = load4((9580));
          $cmp422$i = ($88>>>0)>=($89>>>0);
          $not$cmp418$i = ($T$0$i>>>0)>=($89>>>0);
          $90 = $cmp422$i & $not$cmp418$i;
          if ($90) {
           $bk429$i = ((($88)) + 12|0);
           store4($bk429$i,$add$ptr$i158);
           store4($fd416$i,$add$ptr$i158);
           $fd431$i = ((($add$ptr$i158)) + 8|0);
           store4($fd431$i,$88);
           $bk432$i = ((($add$ptr$i158)) + 12|0);
           store4($bk432$i,$T$0$i);
           $parent433$i = ((($add$ptr$i158)) + 24|0);
           store4($parent433$i,0);
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
 $91 = load4((9572));
 $cmp156 = ($91>>>0)<($nb$0>>>0);
 if (!($cmp156)) {
  $sub160 = (($91) - ($nb$0))|0;
  $92 = load4((9584));
  $cmp162 = ($sub160>>>0)>(15);
  if ($cmp162) {
   $add$ptr166 = (($92) + ($nb$0)|0);
   store4((9584),$add$ptr166);
   store4((9572),$sub160);
   $or167 = $sub160 | 1;
   $head168 = ((($add$ptr166)) + 4|0);
   store4($head168,$or167);
   $add$ptr169 = (($add$ptr166) + ($sub160)|0);
   store4($add$ptr169,$sub160);
   $or172 = $nb$0 | 3;
   $head173 = ((($92)) + 4|0);
   store4($head173,$or172);
  } else {
   store4((9572),0);
   store4((9584),0);
   $or176 = $91 | 3;
   $head177 = ((($92)) + 4|0);
   store4($head177,$or176);
   $add$ptr178 = (($92) + ($91)|0);
   $head179 = ((($add$ptr178)) + 4|0);
   $93 = load4($head179);
   $or180 = $93 | 1;
   store4($head179,$or180);
  }
  $add$ptr182 = ((($92)) + 8|0);
  $retval$0 = $add$ptr182;
  STACKTOP = sp;return ($retval$0|0);
 }
 $94 = load4((9576));
 $cmp186 = ($94>>>0)>($nb$0>>>0);
 if ($cmp186) {
  $sub190 = (($94) - ($nb$0))|0;
  store4((9576),$sub190);
  $95 = load4((9588));
  $add$ptr193 = (($95) + ($nb$0)|0);
  store4((9588),$add$ptr193);
  $or194 = $sub190 | 1;
  $head195 = ((($add$ptr193)) + 4|0);
  store4($head195,$or194);
  $or197 = $nb$0 | 3;
  $head198 = ((($95)) + 4|0);
  store4($head198,$or197);
  $add$ptr199 = ((($95)) + 8|0);
  $retval$0 = $add$ptr199;
  STACKTOP = sp;return ($retval$0|0);
 }
 $96 = load4(10036);
 $cmp$i177 = ($96|0)==(0);
 if ($cmp$i177) {
  store4((10044),4096);
  store4((10040),4096);
  store4((10048),-1);
  store4((10052),-1);
  store4((10056),0);
  store4((10008),0);
  $97 = $magic$i$i;
  $xor$i$i = $97 & -16;
  $and6$i$i = $xor$i$i ^ 1431655768;
  store4($magic$i$i,$and6$i$i);
  store4(10036,$and6$i$i);
  $98 = 4096;
 } else {
  $$pre$i178 = load4((10044));
  $98 = $$pre$i178;
 }
 $add$i179 = (($nb$0) + 48)|0;
 $sub$i180 = (($nb$0) + 47)|0;
 $add9$i = (($98) + ($sub$i180))|0;
 $neg$i181 = (0 - ($98))|0;
 $and11$i = $add9$i & $neg$i181;
 $cmp12$i = ($and11$i>>>0)>($nb$0>>>0);
 if (!($cmp12$i)) {
  $retval$0 = 0;
  STACKTOP = sp;return ($retval$0|0);
 }
 $99 = load4((10004));
 $cmp15$i = ($99|0)==(0);
 if (!($cmp15$i)) {
  $100 = load4((9996));
  $add17$i182 = (($100) + ($and11$i))|0;
  $cmp19$i = ($add17$i182>>>0)<=($100>>>0);
  $cmp21$i = ($add17$i182>>>0)>($99>>>0);
  $or$cond1$i183 = $cmp19$i | $cmp21$i;
  if ($or$cond1$i183) {
   $retval$0 = 0;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $101 = load4((10008));
 $and29$i = $101 & 4;
 $tobool30$i = ($and29$i|0)==(0);
 L244: do {
  if ($tobool30$i) {
   $102 = load4((9588));
   $cmp32$i184 = ($102|0)==(0|0);
   L246: do {
    if ($cmp32$i184) {
     label = 163;
    } else {
     $sp$0$i$i = (10012);
     while(1) {
      $103 = load4($sp$0$i$i);
      $cmp$i11$i = ($103>>>0)>($102>>>0);
      if (!($cmp$i11$i)) {
       $size$i$i = ((($sp$0$i$i)) + 4|0);
       $104 = load4($size$i$i);
       $add$ptr$i$i = (($103) + ($104)|0);
       $cmp2$i$i = ($add$ptr$i$i>>>0)>($102>>>0);
       if ($cmp2$i$i) {
        break;
       }
      }
      $next$i$i = ((($sp$0$i$i)) + 8|0);
      $105 = load4($next$i$i);
      $cmp3$i$i = ($105|0)==(0|0);
      if ($cmp3$i$i) {
       label = 163;
       break L246;
      } else {
       $sp$0$i$i = $105;
      }
     }
     $add77$i = (($add9$i) - ($94))|0;
     $and80$i = $add77$i & $neg$i181;
     $cmp81$i190 = ($and80$i>>>0)<(2147483647);
     if ($cmp81$i190) {
      $call83$i = (_sbrk(($and80$i|0))|0);
      $110 = load4($sp$0$i$i);
      $111 = load4($size$i$i);
      $add$ptr$i192 = (($110) + ($111)|0);
      $cmp85$i = ($call83$i|0)==($add$ptr$i192|0);
      if ($cmp85$i) {
       $cmp89$i = ($call83$i|0)==((-1)|0);
       if ($cmp89$i) {
        $tsize$2657583$i = $and80$i;
       } else {
        $tbase$796$i = $call83$i;$tsize$795$i = $and80$i;
        label = 180;
        break L244;
       }
      } else {
       $br$2$ph$i = $call83$i;$ssize$2$ph$i = $and80$i;
       label = 171;
      }
     } else {
      $tsize$2657583$i = 0;
     }
    }
   } while(0);
   do {
    if ((label|0) == 163) {
     $call37$i = (_sbrk(0)|0);
     $cmp38$i = ($call37$i|0)==((-1)|0);
     if ($cmp38$i) {
      $tsize$2657583$i = 0;
     } else {
      $106 = $call37$i;
      $107 = load4((10040));
      $sub41$i = (($107) + -1)|0;
      $and42$i = $sub41$i & $106;
      $cmp43$i = ($and42$i|0)==(0);
      $add46$i = (($sub41$i) + ($106))|0;
      $neg48$i = (0 - ($107))|0;
      $and49$i = $add46$i & $neg48$i;
      $sub50$i = (($and49$i) - ($106))|0;
      $add51$i = $cmp43$i ? 0 : $sub50$i;
      $and11$add51$i = (($add51$i) + ($and11$i))|0;
      $108 = load4((9996));
      $add54$i = (($and11$add51$i) + ($108))|0;
      $cmp55$i185 = ($and11$add51$i>>>0)>($nb$0>>>0);
      $cmp57$i186 = ($and11$add51$i>>>0)<(2147483647);
      $or$cond$i187 = $cmp55$i185 & $cmp57$i186;
      if ($or$cond$i187) {
       $109 = load4((10004));
       $cmp60$i = ($109|0)==(0);
       if (!($cmp60$i)) {
        $cmp63$i = ($add54$i>>>0)<=($108>>>0);
        $cmp66$i189 = ($add54$i>>>0)>($109>>>0);
        $or$cond2$i = $cmp63$i | $cmp66$i189;
        if ($or$cond2$i) {
         $tsize$2657583$i = 0;
         break;
        }
       }
       $call68$i = (_sbrk(($and11$add51$i|0))|0);
       $cmp69$i = ($call68$i|0)==($call37$i|0);
       if ($cmp69$i) {
        $tbase$796$i = $call37$i;$tsize$795$i = $and11$add51$i;
        label = 180;
        break L244;
       } else {
        $br$2$ph$i = $call68$i;$ssize$2$ph$i = $and11$add51$i;
        label = 171;
       }
      } else {
       $tsize$2657583$i = 0;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 171) {
     $sub112$i = (0 - ($ssize$2$ph$i))|0;
     $cmp91$i = ($br$2$ph$i|0)!=((-1)|0);
     $cmp93$i = ($ssize$2$ph$i>>>0)<(2147483647);
     $or$cond5$i = $cmp93$i & $cmp91$i;
     $cmp96$i = ($add$i179>>>0)>($ssize$2$ph$i>>>0);
     $or$cond3$i = $cmp96$i & $or$cond5$i;
     if (!($or$cond3$i)) {
      $cmp118$i = ($br$2$ph$i|0)==((-1)|0);
      if ($cmp118$i) {
       $tsize$2657583$i = 0;
       break;
      } else {
       $tbase$796$i = $br$2$ph$i;$tsize$795$i = $ssize$2$ph$i;
       label = 180;
       break L244;
      }
     }
     $112 = load4((10044));
     $sub99$i = (($sub$i180) - ($ssize$2$ph$i))|0;
     $add101$i = (($sub99$i) + ($112))|0;
     $neg103$i = (0 - ($112))|0;
     $and104$i = $add101$i & $neg103$i;
     $cmp105$i = ($and104$i>>>0)<(2147483647);
     if (!($cmp105$i)) {
      $tbase$796$i = $br$2$ph$i;$tsize$795$i = $ssize$2$ph$i;
      label = 180;
      break L244;
     }
     $call107$i = (_sbrk(($and104$i|0))|0);
     $cmp108$i = ($call107$i|0)==((-1)|0);
     if ($cmp108$i) {
      (_sbrk(($sub112$i|0))|0);
      $tsize$2657583$i = 0;
      break;
     } else {
      $add110$i = (($and104$i) + ($ssize$2$ph$i))|0;
      $tbase$796$i = $br$2$ph$i;$tsize$795$i = $add110$i;
      label = 180;
      break L244;
     }
    }
   } while(0);
   $113 = load4((10008));
   $or$i194 = $113 | 4;
   store4((10008),$or$i194);
   $tsize$4$i = $tsize$2657583$i;
   label = 178;
  } else {
   $tsize$4$i = 0;
   label = 178;
  }
 } while(0);
 if ((label|0) == 178) {
  $cmp127$i = ($and11$i>>>0)<(2147483647);
  if ($cmp127$i) {
   $call131$i = (_sbrk(($and11$i|0))|0);
   $call132$i = (_sbrk(0)|0);
   $cmp133$i195 = ($call131$i|0)!=((-1)|0);
   $cmp135$i = ($call132$i|0)!=((-1)|0);
   $or$cond4$i = $cmp133$i195 & $cmp135$i;
   $cmp137$i196 = ($call131$i>>>0)<($call132$i>>>0);
   $or$cond7$i = $cmp137$i196 & $or$cond4$i;
   $sub$ptr$lhs$cast$i = $call132$i;
   $sub$ptr$rhs$cast$i = $call131$i;
   $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
   $add140$i = (($nb$0) + 40)|0;
   $cmp141$i = ($sub$ptr$sub$i>>>0)>($add140$i>>>0);
   $sub$ptr$sub$tsize$4$i = $cmp141$i ? $sub$ptr$sub$i : $tsize$4$i;
   $or$cond7$not$i = $or$cond7$i ^ 1;
   $cmp14799$i = ($call131$i|0)==((-1)|0);
   $not$cmp141$i = $cmp141$i ^ 1;
   $cmp147$i = $cmp14799$i | $not$cmp141$i;
   $or$cond97$i = $cmp147$i | $or$cond7$not$i;
   if (!($or$cond97$i)) {
    $tbase$796$i = $call131$i;$tsize$795$i = $sub$ptr$sub$tsize$4$i;
    label = 180;
   }
  }
 }
 if ((label|0) == 180) {
  $114 = load4((9996));
  $add150$i = (($114) + ($tsize$795$i))|0;
  store4((9996),$add150$i);
  $115 = load4((10000));
  $cmp151$i = ($add150$i>>>0)>($115>>>0);
  if ($cmp151$i) {
   store4((10000),$add150$i);
  }
  $116 = load4((9588));
  $cmp157$i = ($116|0)==(0|0);
  do {
   if ($cmp157$i) {
    $117 = load4((9580));
    $cmp159$i198 = ($117|0)==(0|0);
    $cmp162$i199 = ($tbase$796$i>>>0)<($117>>>0);
    $or$cond8$i = $cmp159$i198 | $cmp162$i199;
    if ($or$cond8$i) {
     store4((9580),$tbase$796$i);
    }
    store4((10012),$tbase$796$i);
    store4((10016),$tsize$795$i);
    store4((10024),0);
    $118 = load4(10036);
    store4((9600),$118);
    store4((9596),-1);
    $i$01$i$i = 0;
    while(1) {
     $shl$i13$i = $i$01$i$i << 1;
     $arrayidx$i14$i = (9604 + ($shl$i13$i<<2)|0);
     $119 = ((($arrayidx$i14$i)) + 12|0);
     store4($119,$arrayidx$i14$i);
     $120 = ((($arrayidx$i14$i)) + 8|0);
     store4($120,$arrayidx$i14$i);
     $inc$i$i = (($i$01$i$i) + 1)|0;
     $exitcond$i$i = ($inc$i$i|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $i$01$i$i = $inc$i$i;
     }
    }
    $sub172$i = (($tsize$795$i) + -40)|0;
    $add$ptr$i16$i = ((($tbase$796$i)) + 8|0);
    $121 = $add$ptr$i16$i;
    $and$i17$i = $121 & 7;
    $cmp$i18$i = ($and$i17$i|0)==(0);
    $122 = (0 - ($121))|0;
    $and3$i$i = $122 & 7;
    $cond$i19$i = $cmp$i18$i ? 0 : $and3$i$i;
    $add$ptr4$i$i = (($tbase$796$i) + ($cond$i19$i)|0);
    $sub5$i$i = (($sub172$i) - ($cond$i19$i))|0;
    store4((9588),$add$ptr4$i$i);
    store4((9576),$sub5$i$i);
    $or$i$i = $sub5$i$i | 1;
    $head$i20$i = ((($add$ptr4$i$i)) + 4|0);
    store4($head$i20$i,$or$i$i);
    $add$ptr6$i$i = (($add$ptr4$i$i) + ($sub5$i$i)|0);
    $head7$i$i = ((($add$ptr6$i$i)) + 4|0);
    store4($head7$i$i,40);
    $123 = load4((10052));
    store4((9592),$123);
   } else {
    $sp$0108$i = (10012);
    while(1) {
     $124 = load4($sp$0108$i);
     $size188$i = ((($sp$0108$i)) + 4|0);
     $125 = load4($size188$i);
     $add$ptr189$i = (($124) + ($125)|0);
     $cmp190$i = ($tbase$796$i|0)==($add$ptr189$i|0);
     if ($cmp190$i) {
      label = 190;
      break;
     }
     $next$i = ((($sp$0108$i)) + 8|0);
     $126 = load4($next$i);
     $cmp186$i = ($126|0)==(0|0);
     if ($cmp186$i) {
      break;
     } else {
      $sp$0108$i = $126;
     }
    }
    if ((label|0) == 190) {
     $sflags193$i = ((($sp$0108$i)) + 12|0);
     $127 = load4($sflags193$i);
     $and194$i203 = $127 & 8;
     $tobool195$i = ($and194$i203|0)==(0);
     if ($tobool195$i) {
      $cmp203$i = ($116>>>0)>=($124>>>0);
      $cmp209$i = ($116>>>0)<($tbase$796$i>>>0);
      $or$cond98$i = $cmp209$i & $cmp203$i;
      if ($or$cond98$i) {
       $add212$i = (($125) + ($tsize$795$i))|0;
       store4($size188$i,$add212$i);
       $128 = load4((9576));
       $add$ptr$i49$i = ((($116)) + 8|0);
       $129 = $add$ptr$i49$i;
       $and$i50$i = $129 & 7;
       $cmp$i51$i = ($and$i50$i|0)==(0);
       $130 = (0 - ($129))|0;
       $and3$i52$i = $130 & 7;
       $cond$i53$i = $cmp$i51$i ? 0 : $and3$i52$i;
       $add$ptr4$i54$i = (($116) + ($cond$i53$i)|0);
       $add215$i = (($tsize$795$i) - ($cond$i53$i))|0;
       $sub5$i55$i = (($128) + ($add215$i))|0;
       store4((9588),$add$ptr4$i54$i);
       store4((9576),$sub5$i55$i);
       $or$i56$i = $sub5$i55$i | 1;
       $head$i57$i = ((($add$ptr4$i54$i)) + 4|0);
       store4($head$i57$i,$or$i56$i);
       $add$ptr6$i58$i = (($add$ptr4$i54$i) + ($sub5$i55$i)|0);
       $head7$i59$i = ((($add$ptr6$i58$i)) + 4|0);
       store4($head7$i59$i,40);
       $131 = load4((10052));
       store4((9592),$131);
       break;
      }
     }
    }
    $132 = load4((9580));
    $cmp218$i = ($tbase$796$i>>>0)<($132>>>0);
    if ($cmp218$i) {
     store4((9580),$tbase$796$i);
     $147 = $tbase$796$i;
    } else {
     $147 = $132;
    }
    $add$ptr227$i = (($tbase$796$i) + ($tsize$795$i)|0);
    $sp$1107$i = (10012);
    while(1) {
     $133 = load4($sp$1107$i);
     $cmp228$i = ($133|0)==($add$ptr227$i|0);
     if ($cmp228$i) {
      label = 198;
      break;
     }
     $next231$i = ((($sp$1107$i)) + 8|0);
     $134 = load4($next231$i);
     $cmp224$i = ($134|0)==(0|0);
     if ($cmp224$i) {
      break;
     } else {
      $sp$1107$i = $134;
     }
    }
    if ((label|0) == 198) {
     $sflags235$i = ((($sp$1107$i)) + 12|0);
     $135 = load4($sflags235$i);
     $and236$i = $135 & 8;
     $tobool237$i = ($and236$i|0)==(0);
     if ($tobool237$i) {
      store4($sp$1107$i,$tbase$796$i);
      $size245$i = ((($sp$1107$i)) + 4|0);
      $136 = load4($size245$i);
      $add246$i = (($136) + ($tsize$795$i))|0;
      store4($size245$i,$add246$i);
      $add$ptr$i21$i = ((($tbase$796$i)) + 8|0);
      $137 = $add$ptr$i21$i;
      $and$i22$i = $137 & 7;
      $cmp$i23$i = ($and$i22$i|0)==(0);
      $138 = (0 - ($137))|0;
      $and3$i24$i = $138 & 7;
      $cond$i25$i = $cmp$i23$i ? 0 : $and3$i24$i;
      $add$ptr4$i26$i = (($tbase$796$i) + ($cond$i25$i)|0);
      $add$ptr5$i$i = ((($add$ptr227$i)) + 8|0);
      $139 = $add$ptr5$i$i;
      $and6$i27$i = $139 & 7;
      $cmp7$i$i = ($and6$i27$i|0)==(0);
      $140 = (0 - ($139))|0;
      $and13$i$i = $140 & 7;
      $cond15$i$i = $cmp7$i$i ? 0 : $and13$i$i;
      $add$ptr16$i$i = (($add$ptr227$i) + ($cond15$i$i)|0);
      $sub$ptr$lhs$cast$i28$i = $add$ptr16$i$i;
      $sub$ptr$rhs$cast$i29$i = $add$ptr4$i26$i;
      $sub$ptr$sub$i30$i = (($sub$ptr$lhs$cast$i28$i) - ($sub$ptr$rhs$cast$i29$i))|0;
      $add$ptr17$i$i = (($add$ptr4$i26$i) + ($nb$0)|0);
      $sub18$i$i = (($sub$ptr$sub$i30$i) - ($nb$0))|0;
      $or19$i$i = $nb$0 | 3;
      $head$i31$i = ((($add$ptr4$i26$i)) + 4|0);
      store4($head$i31$i,$or19$i$i);
      $cmp20$i$i = ($add$ptr16$i$i|0)==($116|0);
      do {
       if ($cmp20$i$i) {
        $141 = load4((9576));
        $add$i$i = (($141) + ($sub18$i$i))|0;
        store4((9576),$add$i$i);
        store4((9588),$add$ptr17$i$i);
        $or22$i$i = $add$i$i | 1;
        $head23$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head23$i$i,$or22$i$i);
       } else {
        $142 = load4((9584));
        $cmp24$i$i = ($add$ptr16$i$i|0)==($142|0);
        if ($cmp24$i$i) {
         $143 = load4((9572));
         $add26$i$i = (($143) + ($sub18$i$i))|0;
         store4((9572),$add26$i$i);
         store4((9584),$add$ptr17$i$i);
         $or28$i$i = $add26$i$i | 1;
         $head29$i$i = ((($add$ptr17$i$i)) + 4|0);
         store4($head29$i$i,$or28$i$i);
         $add$ptr30$i$i = (($add$ptr17$i$i) + ($add26$i$i)|0);
         store4($add$ptr30$i$i,$add26$i$i);
         break;
        }
        $head32$i$i = ((($add$ptr16$i$i)) + 4|0);
        $144 = load4($head32$i$i);
        $and33$i$i = $144 & 3;
        $cmp34$i$i = ($and33$i$i|0)==(1);
        if ($cmp34$i$i) {
         $and37$i$i = $144 & -8;
         $shr$i34$i = $144 >>> 3;
         $cmp38$i$i = ($144>>>0)<(256);
         L314: do {
          if ($cmp38$i$i) {
           $fd$i$i = ((($add$ptr16$i$i)) + 8|0);
           $145 = load4($fd$i$i);
           $bk$i35$i = ((($add$ptr16$i$i)) + 12|0);
           $146 = load4($bk$i35$i);
           $shl$i36$i = $shr$i34$i << 1;
           $arrayidx$i37$i = (9604 + ($shl$i36$i<<2)|0);
           $cmp41$i$i = ($145|0)==($arrayidx$i37$i|0);
           do {
            if (!($cmp41$i$i)) {
             $cmp42$i$i = ($145>>>0)<($147>>>0);
             if ($cmp42$i$i) {
              _abort();
              // unreachable;
             }
             $bk43$i$i = ((($145)) + 12|0);
             $148 = load4($bk43$i$i);
             $cmp44$i$i = ($148|0)==($add$ptr16$i$i|0);
             if ($cmp44$i$i) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $cmp46$i38$i = ($146|0)==($145|0);
           if ($cmp46$i38$i) {
            $shl48$i$i = 1 << $shr$i34$i;
            $neg$i$i = $shl48$i$i ^ -1;
            $149 = load4(9564);
            $and49$i$i = $149 & $neg$i$i;
            store4(9564,$and49$i$i);
            break;
           }
           $cmp54$i$i = ($146|0)==($arrayidx$i37$i|0);
           do {
            if ($cmp54$i$i) {
             $$pre5$i$i = ((($146)) + 8|0);
             $fd68$pre$phi$i$iZ2D = $$pre5$i$i;
            } else {
             $cmp57$i$i = ($146>>>0)<($147>>>0);
             if ($cmp57$i$i) {
              _abort();
              // unreachable;
             }
             $fd59$i$i = ((($146)) + 8|0);
             $150 = load4($fd59$i$i);
             $cmp60$i$i = ($150|0)==($add$ptr16$i$i|0);
             if ($cmp60$i$i) {
              $fd68$pre$phi$i$iZ2D = $fd59$i$i;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $bk67$i$i = ((($145)) + 12|0);
           store4($bk67$i$i,$146);
           store4($fd68$pre$phi$i$iZ2D,$145);
          } else {
           $parent$i40$i = ((($add$ptr16$i$i)) + 24|0);
           $151 = load4($parent$i40$i);
           $bk74$i$i = ((($add$ptr16$i$i)) + 12|0);
           $152 = load4($bk74$i$i);
           $cmp75$i$i = ($152|0)==($add$ptr16$i$i|0);
           do {
            if ($cmp75$i$i) {
             $child$i$i = ((($add$ptr16$i$i)) + 16|0);
             $arrayidx96$i$i = ((($child$i$i)) + 4|0);
             $156 = load4($arrayidx96$i$i);
             $cmp97$i$i = ($156|0)==(0|0);
             if ($cmp97$i$i) {
              $157 = load4($child$i$i);
              $cmp100$i$i = ($157|0)==(0|0);
              if ($cmp100$i$i) {
               $R$3$i$i = 0;
               break;
              } else {
               $R$1$i$i = $157;$RP$1$i$i = $child$i$i;
              }
             } else {
              $R$1$i$i = $156;$RP$1$i$i = $arrayidx96$i$i;
             }
             while(1) {
              $arrayidx103$i$i = ((($R$1$i$i)) + 20|0);
              $158 = load4($arrayidx103$i$i);
              $cmp104$i$i = ($158|0)==(0|0);
              if (!($cmp104$i$i)) {
               $R$1$i$i = $158;$RP$1$i$i = $arrayidx103$i$i;
               continue;
              }
              $arrayidx107$i$i = ((($R$1$i$i)) + 16|0);
              $159 = load4($arrayidx107$i$i);
              $cmp108$i$i = ($159|0)==(0|0);
              if ($cmp108$i$i) {
               break;
              } else {
               $R$1$i$i = $159;$RP$1$i$i = $arrayidx107$i$i;
              }
             }
             $cmp112$i$i = ($RP$1$i$i>>>0)<($147>>>0);
             if ($cmp112$i$i) {
              _abort();
              // unreachable;
             } else {
              store4($RP$1$i$i,0);
              $R$3$i$i = $R$1$i$i;
              break;
             }
            } else {
             $fd78$i$i = ((($add$ptr16$i$i)) + 8|0);
             $153 = load4($fd78$i$i);
             $cmp81$i$i = ($153>>>0)<($147>>>0);
             if ($cmp81$i$i) {
              _abort();
              // unreachable;
             }
             $bk82$i$i = ((($153)) + 12|0);
             $154 = load4($bk82$i$i);
             $cmp83$i$i = ($154|0)==($add$ptr16$i$i|0);
             if (!($cmp83$i$i)) {
              _abort();
              // unreachable;
             }
             $fd85$i$i = ((($152)) + 8|0);
             $155 = load4($fd85$i$i);
             $cmp86$i$i = ($155|0)==($add$ptr16$i$i|0);
             if ($cmp86$i$i) {
              store4($bk82$i$i,$152);
              store4($fd85$i$i,$153);
              $R$3$i$i = $152;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $cmp120$i42$i = ($151|0)==(0|0);
           if ($cmp120$i42$i) {
            break;
           }
           $index$i43$i = ((($add$ptr16$i$i)) + 28|0);
           $160 = load4($index$i43$i);
           $arrayidx123$i$i = (9868 + ($160<<2)|0);
           $161 = load4($arrayidx123$i$i);
           $cmp124$i$i = ($add$ptr16$i$i|0)==($161|0);
           $cond2$i$i = ($R$3$i$i|0)==(0|0);
           do {
            if ($cmp124$i$i) {
             store4($arrayidx123$i$i,$R$3$i$i);
             if (!($cond2$i$i)) {
              break;
             }
             $shl131$i$i = 1 << $160;
             $neg132$i$i = $shl131$i$i ^ -1;
             $162 = load4((9568));
             $and133$i$i = $162 & $neg132$i$i;
             store4((9568),$and133$i$i);
             break L314;
            } else {
             $163 = load4((9580));
             $cmp137$i$i = ($151>>>0)<($163>>>0);
             if ($cmp137$i$i) {
              _abort();
              // unreachable;
             } else {
              $arrayidx143$i$i = ((($151)) + 16|0);
              $164 = load4($arrayidx143$i$i);
              $not$cmp144$i$i = ($164|0)!=($add$ptr16$i$i|0);
              $$sink$i$i = $not$cmp144$i$i&1;
              $arrayidx151$i$i = (((($151)) + 16|0) + ($$sink$i$i<<2)|0);
              store4($arrayidx151$i$i,$R$3$i$i);
              if ($cond2$i$i) {
               break L314;
              } else {
               break;
              }
             }
            }
           } while(0);
           $165 = load4((9580));
           $cmp160$i$i = ($R$3$i$i>>>0)<($165>>>0);
           if ($cmp160$i$i) {
            _abort();
            // unreachable;
           }
           $parent165$i$i = ((($R$3$i$i)) + 24|0);
           store4($parent165$i$i,$151);
           $child166$i$i = ((($add$ptr16$i$i)) + 16|0);
           $166 = load4($child166$i$i);
           $cmp168$i$i = ($166|0)==(0|0);
           do {
            if (!($cmp168$i$i)) {
             $cmp172$i$i = ($166>>>0)<($165>>>0);
             if ($cmp172$i$i) {
              _abort();
              // unreachable;
             } else {
              $arrayidx178$i$i = ((($R$3$i$i)) + 16|0);
              store4($arrayidx178$i$i,$166);
              $parent179$i$i = ((($166)) + 24|0);
              store4($parent179$i$i,$R$3$i$i);
              break;
             }
            }
           } while(0);
           $arrayidx184$i$i = ((($child166$i$i)) + 4|0);
           $167 = load4($arrayidx184$i$i);
           $cmp185$i$i = ($167|0)==(0|0);
           if ($cmp185$i$i) {
            break;
           }
           $168 = load4((9580));
           $cmp189$i$i = ($167>>>0)<($168>>>0);
           if ($cmp189$i$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx195$i$i = ((($R$3$i$i)) + 20|0);
            store4($arrayidx195$i$i,$167);
            $parent196$i$i = ((($167)) + 24|0);
            store4($parent196$i$i,$R$3$i$i);
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
        $169 = load4($head208$i$i);
        $and209$i$i = $169 & -2;
        store4($head208$i$i,$and209$i$i);
        $or210$i$i = $qsize$0$i$i | 1;
        $head211$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head211$i$i,$or210$i$i);
        $add$ptr212$i$i = (($add$ptr17$i$i) + ($qsize$0$i$i)|0);
        store4($add$ptr212$i$i,$qsize$0$i$i);
        $shr214$i$i = $qsize$0$i$i >>> 3;
        $cmp215$i$i = ($qsize$0$i$i>>>0)<(256);
        if ($cmp215$i$i) {
         $shl222$i$i = $shr214$i$i << 1;
         $arrayidx223$i$i = (9604 + ($shl222$i$i<<2)|0);
         $170 = load4(9564);
         $shl226$i$i = 1 << $shr214$i$i;
         $and227$i$i = $170 & $shl226$i$i;
         $tobool228$i$i = ($and227$i$i|0)==(0);
         do {
          if ($tobool228$i$i) {
           $or232$i$i = $170 | $shl226$i$i;
           store4(9564,$or232$i$i);
           $$pre$i45$i = ((($arrayidx223$i$i)) + 8|0);
           $$pre$phi$i46$iZ2D = $$pre$i45$i;$F224$0$i$i = $arrayidx223$i$i;
          } else {
           $171 = ((($arrayidx223$i$i)) + 8|0);
           $172 = load4($171);
           $173 = load4((9580));
           $cmp236$i$i = ($172>>>0)<($173>>>0);
           if (!($cmp236$i$i)) {
            $$pre$phi$i46$iZ2D = $171;$F224$0$i$i = $172;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         store4($$pre$phi$i46$iZ2D,$add$ptr17$i$i);
         $bk246$i$i = ((($F224$0$i$i)) + 12|0);
         store4($bk246$i$i,$add$ptr17$i$i);
         $fd247$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd247$i$i,$F224$0$i$i);
         $bk248$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk248$i$i,$arrayidx223$i$i);
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
        $arrayidx287$i$i = (9868 + ($I252$0$i$i<<2)|0);
        $index288$i$i = ((($add$ptr17$i$i)) + 28|0);
        store4($index288$i$i,$I252$0$i$i);
        $child289$i$i = ((($add$ptr17$i$i)) + 16|0);
        $arrayidx290$i$i = ((($child289$i$i)) + 4|0);
        store4($arrayidx290$i$i,0);
        store4($child289$i$i,0);
        $174 = load4((9568));
        $shl294$i$i = 1 << $I252$0$i$i;
        $and295$i$i = $174 & $shl294$i$i;
        $tobool296$i$i = ($and295$i$i|0)==(0);
        if ($tobool296$i$i) {
         $or300$i$i = $174 | $shl294$i$i;
         store4((9568),$or300$i$i);
         store4($arrayidx287$i$i,$add$ptr17$i$i);
         $parent301$i$i = ((($add$ptr17$i$i)) + 24|0);
         store4($parent301$i$i,$arrayidx287$i$i);
         $bk302$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk302$i$i,$add$ptr17$i$i);
         $fd303$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd303$i$i,$add$ptr17$i$i);
         break;
        }
        $175 = load4($arrayidx287$i$i);
        $cmp306$i$i = ($I252$0$i$i|0)==(31);
        $shr310$i$i = $I252$0$i$i >>> 1;
        $sub313$i$i = (25 - ($shr310$i$i))|0;
        $cond315$i$i = $cmp306$i$i ? 0 : $sub313$i$i;
        $shl316$i$i = $qsize$0$i$i << $cond315$i$i;
        $K305$0$i$i = $shl316$i$i;$T$0$i47$i = $175;
        while(1) {
         $head317$i$i = ((($T$0$i47$i)) + 4|0);
         $176 = load4($head317$i$i);
         $and318$i$i = $176 & -8;
         $cmp319$i$i = ($and318$i$i|0)==($qsize$0$i$i|0);
         if ($cmp319$i$i) {
          label = 265;
          break;
         }
         $shr323$i$i = $K305$0$i$i >>> 31;
         $arrayidx325$i$i = (((($T$0$i47$i)) + 16|0) + ($shr323$i$i<<2)|0);
         $shl326$i$i = $K305$0$i$i << 1;
         $177 = load4($arrayidx325$i$i);
         $cmp327$i$i = ($177|0)==(0|0);
         if ($cmp327$i$i) {
          label = 262;
          break;
         } else {
          $K305$0$i$i = $shl326$i$i;$T$0$i47$i = $177;
         }
        }
        if ((label|0) == 262) {
         $178 = load4((9580));
         $cmp332$i$i = ($arrayidx325$i$i>>>0)<($178>>>0);
         if ($cmp332$i$i) {
          _abort();
          // unreachable;
         } else {
          store4($arrayidx325$i$i,$add$ptr17$i$i);
          $parent337$i$i = ((($add$ptr17$i$i)) + 24|0);
          store4($parent337$i$i,$T$0$i47$i);
          $bk338$i$i = ((($add$ptr17$i$i)) + 12|0);
          store4($bk338$i$i,$add$ptr17$i$i);
          $fd339$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd339$i$i,$add$ptr17$i$i);
          break;
         }
        }
        else if ((label|0) == 265) {
         $fd344$i$i = ((($T$0$i47$i)) + 8|0);
         $179 = load4($fd344$i$i);
         $180 = load4((9580));
         $cmp350$i$i = ($179>>>0)>=($180>>>0);
         $not$cmp346$i$i = ($T$0$i47$i>>>0)>=($180>>>0);
         $181 = $cmp350$i$i & $not$cmp346$i$i;
         if ($181) {
          $bk357$i$i = ((($179)) + 12|0);
          store4($bk357$i$i,$add$ptr17$i$i);
          store4($fd344$i$i,$add$ptr17$i$i);
          $fd359$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd359$i$i,$179);
          $bk360$i$i = ((($add$ptr17$i$i)) + 12|0);
          store4($bk360$i$i,$T$0$i47$i);
          $parent361$i$i = ((($add$ptr17$i$i)) + 24|0);
          store4($parent361$i$i,0);
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
     }
    }
    $sp$0$i$i$i = (10012);
    while(1) {
     $182 = load4($sp$0$i$i$i);
     $cmp$i$i$i = ($182>>>0)>($116>>>0);
     if (!($cmp$i$i$i)) {
      $size$i$i$i = ((($sp$0$i$i$i)) + 4|0);
      $183 = load4($size$i$i$i);
      $add$ptr$i$i$i = (($182) + ($183)|0);
      $cmp2$i$i$i = ($add$ptr$i$i$i>>>0)>($116>>>0);
      if ($cmp2$i$i$i) {
       break;
      }
     }
     $next$i$i$i = ((($sp$0$i$i$i)) + 8|0);
     $184 = load4($next$i$i$i);
     $sp$0$i$i$i = $184;
    }
    $add$ptr2$i$i = ((($add$ptr$i$i$i)) + -47|0);
    $add$ptr3$i$i = ((($add$ptr2$i$i)) + 8|0);
    $185 = $add$ptr3$i$i;
    $and$i$i = $185 & 7;
    $cmp$i9$i = ($and$i$i|0)==(0);
    $186 = (0 - ($185))|0;
    $and6$i10$i = $186 & 7;
    $cond$i$i = $cmp$i9$i ? 0 : $and6$i10$i;
    $add$ptr7$i$i = (($add$ptr2$i$i) + ($cond$i$i)|0);
    $add$ptr81$i$i = ((($116)) + 16|0);
    $cmp9$i$i = ($add$ptr7$i$i>>>0)<($add$ptr81$i$i>>>0);
    $cond13$i$i = $cmp9$i$i ? $116 : $add$ptr7$i$i;
    $add$ptr14$i$i = ((($cond13$i$i)) + 8|0);
    $add$ptr15$i$i = ((($cond13$i$i)) + 24|0);
    $sub16$i$i = (($tsize$795$i) + -40)|0;
    $add$ptr$i2$i$i = ((($tbase$796$i)) + 8|0);
    $187 = $add$ptr$i2$i$i;
    $and$i$i$i = $187 & 7;
    $cmp$i3$i$i = ($and$i$i$i|0)==(0);
    $188 = (0 - ($187))|0;
    $and3$i$i$i = $188 & 7;
    $cond$i$i$i = $cmp$i3$i$i ? 0 : $and3$i$i$i;
    $add$ptr4$i$i$i = (($tbase$796$i) + ($cond$i$i$i)|0);
    $sub5$i$i$i = (($sub16$i$i) - ($cond$i$i$i))|0;
    store4((9588),$add$ptr4$i$i$i);
    store4((9576),$sub5$i$i$i);
    $or$i$i$i = $sub5$i$i$i | 1;
    $head$i$i$i = ((($add$ptr4$i$i$i)) + 4|0);
    store4($head$i$i$i,$or$i$i$i);
    $add$ptr6$i$i$i = (($add$ptr4$i$i$i) + ($sub5$i$i$i)|0);
    $head7$i$i$i = ((($add$ptr6$i$i$i)) + 4|0);
    store4($head7$i$i$i,40);
    $189 = load4((10052));
    store4((9592),$189);
    $head$i$i = ((($cond13$i$i)) + 4|0);
    store4($head$i$i,27);
    ; store8($add$ptr14$i$i,load8((10012),4),4); store8($add$ptr14$i$i+8 | 0,load8((10012)+8 | 0,4),4);
    store4((10012),$tbase$796$i);
    store4((10016),$tsize$795$i);
    store4((10024),0);
    store4((10020),$add$ptr14$i$i);
    $190 = $add$ptr15$i$i;
    while(1) {
     $add$ptr24$i$i = ((($190)) + 4|0);
     store4($add$ptr24$i$i,7);
     $head26$i$i = ((($190)) + 8|0);
     $cmp27$i$i = ($head26$i$i>>>0)<($add$ptr$i$i$i>>>0);
     if ($cmp27$i$i) {
      $190 = $add$ptr24$i$i;
     } else {
      break;
     }
    }
    $cmp28$i$i = ($cond13$i$i|0)==($116|0);
    if (!($cmp28$i$i)) {
     $sub$ptr$lhs$cast$i$i = $cond13$i$i;
     $sub$ptr$rhs$cast$i$i = $116;
     $sub$ptr$sub$i$i = (($sub$ptr$lhs$cast$i$i) - ($sub$ptr$rhs$cast$i$i))|0;
     $191 = load4($head$i$i);
     $and32$i$i = $191 & -2;
     store4($head$i$i,$and32$i$i);
     $or33$i$i = $sub$ptr$sub$i$i | 1;
     $head34$i$i = ((($116)) + 4|0);
     store4($head34$i$i,$or33$i$i);
     store4($cond13$i$i,$sub$ptr$sub$i$i);
     $shr$i$i = $sub$ptr$sub$i$i >>> 3;
     $cmp36$i$i = ($sub$ptr$sub$i$i>>>0)<(256);
     if ($cmp36$i$i) {
      $shl$i$i = $shr$i$i << 1;
      $arrayidx$i$i = (9604 + ($shl$i$i<<2)|0);
      $192 = load4(9564);
      $shl39$i$i = 1 << $shr$i$i;
      $and40$i$i = $192 & $shl39$i$i;
      $tobool$i$i = ($and40$i$i|0)==(0);
      if ($tobool$i$i) {
       $or44$i$i = $192 | $shl39$i$i;
       store4(9564,$or44$i$i);
       $$pre$i$i = ((($arrayidx$i$i)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $arrayidx$i$i;
      } else {
       $193 = ((($arrayidx$i$i)) + 8|0);
       $194 = load4($193);
       $195 = load4((9580));
       $cmp46$i$i = ($194>>>0)<($195>>>0);
       if ($cmp46$i$i) {
        _abort();
        // unreachable;
       } else {
        $$pre$phi$i$iZ2D = $193;$F$0$i$i = $194;
       }
      }
      store4($$pre$phi$i$iZ2D,$116);
      $bk$i$i = ((($F$0$i$i)) + 12|0);
      store4($bk$i$i,$116);
      $fd54$i$i = ((($116)) + 8|0);
      store4($fd54$i$i,$F$0$i$i);
      $bk55$i$i = ((($116)) + 12|0);
      store4($bk55$i$i,$arrayidx$i$i);
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
     $arrayidx91$i$i = (9868 + ($I57$0$i$i<<2)|0);
     $index$i$i = ((($116)) + 28|0);
     store4($index$i$i,$I57$0$i$i);
     $arrayidx92$i$i = ((($116)) + 20|0);
     store4($arrayidx92$i$i,0);
     store4($add$ptr81$i$i,0);
     $196 = load4((9568));
     $shl95$i$i = 1 << $I57$0$i$i;
     $and96$i$i = $196 & $shl95$i$i;
     $tobool97$i$i = ($and96$i$i|0)==(0);
     if ($tobool97$i$i) {
      $or101$i$i = $196 | $shl95$i$i;
      store4((9568),$or101$i$i);
      store4($arrayidx91$i$i,$116);
      $parent$i$i = ((($116)) + 24|0);
      store4($parent$i$i,$arrayidx91$i$i);
      $bk102$i$i = ((($116)) + 12|0);
      store4($bk102$i$i,$116);
      $fd103$i$i = ((($116)) + 8|0);
      store4($fd103$i$i,$116);
      break;
     }
     $197 = load4($arrayidx91$i$i);
     $cmp106$i$i = ($I57$0$i$i|0)==(31);
     $shr110$i$i = $I57$0$i$i >>> 1;
     $sub113$i$i = (25 - ($shr110$i$i))|0;
     $cond115$i$i = $cmp106$i$i ? 0 : $sub113$i$i;
     $shl116$i$i = $sub$ptr$sub$i$i << $cond115$i$i;
     $K105$0$i$i = $shl116$i$i;$T$0$i$i = $197;
     while(1) {
      $head118$i$i = ((($T$0$i$i)) + 4|0);
      $198 = load4($head118$i$i);
      $and119$i$i = $198 & -8;
      $cmp120$i$i = ($and119$i$i|0)==($sub$ptr$sub$i$i|0);
      if ($cmp120$i$i) {
       label = 292;
       break;
      }
      $shr124$i$i = $K105$0$i$i >>> 31;
      $arrayidx126$i$i = (((($T$0$i$i)) + 16|0) + ($shr124$i$i<<2)|0);
      $shl127$i$i = $K105$0$i$i << 1;
      $199 = load4($arrayidx126$i$i);
      $cmp128$i$i = ($199|0)==(0|0);
      if ($cmp128$i$i) {
       label = 289;
       break;
      } else {
       $K105$0$i$i = $shl127$i$i;$T$0$i$i = $199;
      }
     }
     if ((label|0) == 289) {
      $200 = load4((9580));
      $cmp133$i$i = ($arrayidx126$i$i>>>0)<($200>>>0);
      if ($cmp133$i$i) {
       _abort();
       // unreachable;
      } else {
       store4($arrayidx126$i$i,$116);
       $parent138$i$i = ((($116)) + 24|0);
       store4($parent138$i$i,$T$0$i$i);
       $bk139$i$i = ((($116)) + 12|0);
       store4($bk139$i$i,$116);
       $fd140$i$i = ((($116)) + 8|0);
       store4($fd140$i$i,$116);
       break;
      }
     }
     else if ((label|0) == 292) {
      $fd148$i$i = ((($T$0$i$i)) + 8|0);
      $201 = load4($fd148$i$i);
      $202 = load4((9580));
      $cmp153$i$i = ($201>>>0)>=($202>>>0);
      $not$cmp150$i$i = ($T$0$i$i>>>0)>=($202>>>0);
      $203 = $cmp153$i$i & $not$cmp150$i$i;
      if ($203) {
       $bk158$i$i = ((($201)) + 12|0);
       store4($bk158$i$i,$116);
       store4($fd148$i$i,$116);
       $fd160$i$i = ((($116)) + 8|0);
       store4($fd160$i$i,$201);
       $bk161$i$i = ((($116)) + 12|0);
       store4($bk161$i$i,$T$0$i$i);
       $parent162$i$i = ((($116)) + 24|0);
       store4($parent162$i$i,0);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $204 = load4((9576));
  $cmp257$i = ($204>>>0)>($nb$0>>>0);
  if ($cmp257$i) {
   $sub260$i = (($204) - ($nb$0))|0;
   store4((9576),$sub260$i);
   $205 = load4((9588));
   $add$ptr262$i = (($205) + ($nb$0)|0);
   store4((9588),$add$ptr262$i);
   $or264$i = $sub260$i | 1;
   $head265$i = ((($add$ptr262$i)) + 4|0);
   store4($head265$i,$or264$i);
   $or267$i = $nb$0 | 3;
   $head268$i = ((($205)) + 4|0);
   store4($head268$i,$or267$i);
   $add$ptr269$i = ((($205)) + 8|0);
   $retval$0 = $add$ptr269$i;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 store4(10072,12);
 $retval$0 = 0;
 STACKTOP = sp;return ($retval$0|0);
}
function _free($mem) {
 $mem = $mem|0;
 var $$pre = 0, $$pre$phiZ2D = 0, $$pre308 = 0, $$pre309 = 0, $$sink = 0, $$sink4 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $8 = 0;
 var $9 = 0, $F510$0 = 0, $I534$0 = 0, $K583$0 = 0, $R$1 = 0, $R$3 = 0, $R332$1 = 0, $R332$3 = 0, $RP$1 = 0, $RP360$1 = 0, $T$0 = 0, $add$ptr = 0, $add$ptr16 = 0, $add$ptr217 = 0, $add$ptr261 = 0, $add$ptr482 = 0, $add$ptr498 = 0, $add$ptr6 = 0, $add17 = 0, $add246 = 0;
 var $add258 = 0, $add267 = 0, $add550 = 0, $add555 = 0, $add559 = 0, $add561 = 0, $add564 = 0, $and = 0, $and140 = 0, $and210 = 0, $and215 = 0, $and232 = 0, $and240 = 0, $and266 = 0, $and301 = 0, $and410 = 0, $and46 = 0, $and495 = 0, $and5 = 0, $and512 = 0;
 var $and545 = 0, $and549 = 0, $and554 = 0, $and563 = 0, $and574 = 0, $and592 = 0, $and8 = 0, $arrayidx = 0, $arrayidx108 = 0, $arrayidx113 = 0, $arrayidx130 = 0, $arrayidx149 = 0, $arrayidx157 = 0, $arrayidx182 = 0, $arrayidx188 = 0, $arrayidx198 = 0, $arrayidx279 = 0, $arrayidx362 = 0, $arrayidx374 = 0, $arrayidx379 = 0;
 var $arrayidx400 = 0, $arrayidx419 = 0, $arrayidx427 = 0, $arrayidx454 = 0, $arrayidx460 = 0, $arrayidx470 = 0, $arrayidx509 = 0, $arrayidx567 = 0, $arrayidx570 = 0, $arrayidx599 = 0, $arrayidx99 = 0, $bk = 0, $bk275 = 0, $bk286 = 0, $bk321 = 0, $bk333 = 0, $bk34 = 0, $bk343 = 0, $bk529 = 0, $bk531 = 0;
 var $bk580 = 0, $bk611 = 0, $bk631 = 0, $bk634 = 0, $bk66 = 0, $bk73 = 0, $bk82 = 0, $child = 0, $child171 = 0, $child361 = 0, $child443 = 0, $child569 = 0, $cmp = 0, $cmp$i = 0, $cmp1 = 0, $cmp100 = 0, $cmp104 = 0, $cmp109 = 0, $cmp114 = 0, $cmp118 = 0;
 var $cmp127 = 0, $cmp13 = 0, $cmp131 = 0, $cmp143 = 0, $cmp165 = 0, $cmp173 = 0, $cmp176 = 0, $cmp18 = 0, $cmp189 = 0, $cmp192 = 0, $cmp2 = 0, $cmp211 = 0, $cmp22 = 0, $cmp228 = 0, $cmp243 = 0, $cmp249 = 0, $cmp25 = 0, $cmp255 = 0, $cmp269 = 0, $cmp280 = 0;
 var $cmp283 = 0, $cmp287 = 0, $cmp29 = 0, $cmp296 = 0, $cmp305 = 0, $cmp308 = 0, $cmp31 = 0, $cmp312 = 0, $cmp334 = 0, $cmp340 = 0, $cmp344 = 0, $cmp348 = 0, $cmp35 = 0, $cmp363 = 0, $cmp368 = 0, $cmp375 = 0, $cmp380 = 0, $cmp386 = 0, $cmp395 = 0, $cmp401 = 0;
 var $cmp413 = 0, $cmp42 = 0, $cmp435 = 0, $cmp445 = 0, $cmp448 = 0, $cmp461 = 0, $cmp464 = 0, $cmp484 = 0, $cmp50 = 0, $cmp502 = 0, $cmp519 = 0, $cmp53 = 0, $cmp536 = 0, $cmp540 = 0, $cmp57 = 0, $cmp584 = 0, $cmp593 = 0, $cmp601 = 0, $cmp605 = 0, $cmp624 = 0;
 var $cmp640 = 0, $cmp74 = 0, $cmp80 = 0, $cmp83 = 0, $cmp87 = 0, $cond = 0, $cond292 = 0, $cond293 = 0, $dec = 0, $fd = 0, $fd273 = 0, $fd311 = 0, $fd322$pre$phiZ2D = 0, $fd338 = 0, $fd347 = 0, $fd530 = 0, $fd56 = 0, $fd581 = 0, $fd612 = 0, $fd620 = 0;
 var $fd633 = 0, $fd67$pre$phiZ2D = 0, $fd78 = 0, $fd86 = 0, $head = 0, $head209 = 0, $head216 = 0, $head231 = 0, $head248 = 0, $head260 = 0, $head481 = 0, $head497 = 0, $head591 = 0, $idx$neg = 0, $index = 0, $index399 = 0, $index568 = 0, $neg = 0, $neg139 = 0, $neg300 = 0;
 var $neg409 = 0, $next4$i = 0, $not$cmp150 = 0, $not$cmp420 = 0, $not$cmp621 = 0, $or = 0, $or247 = 0, $or259 = 0, $or480 = 0, $or496 = 0, $or516 = 0, $or578 = 0, $p$1 = 0, $parent = 0, $parent170 = 0, $parent183 = 0, $parent199 = 0, $parent331 = 0, $parent442 = 0, $parent455 = 0;
 var $parent471 = 0, $parent579 = 0, $parent610 = 0, $parent635 = 0, $psize$1 = 0, $psize$2 = 0, $shl = 0, $shl138 = 0, $shl278 = 0, $shl299 = 0, $shl408 = 0, $shl45 = 0, $shl508 = 0, $shl511 = 0, $shl546 = 0, $shl551 = 0, $shl557 = 0, $shl560 = 0, $shl573 = 0, $shl590 = 0;
 var $shl600 = 0, $shr = 0, $shr268 = 0, $shr501 = 0, $shr535 = 0, $shr544 = 0, $shr548 = 0, $shr553 = 0, $shr558 = 0, $shr562 = 0, $shr586 = 0, $shr597 = 0, $sp$0$i = 0, $sp$0$in$i = 0, $sub = 0, $sub547 = 0, $sub552 = 0, $sub556 = 0, $sub589 = 0, $tobool233 = 0;
 var $tobool241 = 0, $tobool513 = 0, $tobool575 = 0, $tobool9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($mem|0)==(0|0);
 if ($cmp) {
  return;
 }
 $add$ptr = ((($mem)) + -8|0);
 $0 = load4((9580));
 $cmp1 = ($add$ptr>>>0)<($0>>>0);
 if ($cmp1) {
  _abort();
  // unreachable;
 }
 $head = ((($mem)) + -4|0);
 $1 = load4($head);
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
 L10: do {
  if ($tobool9) {
   $2 = load4($add$ptr);
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
   $3 = load4((9584));
   $cmp22 = ($add$ptr16|0)==($3|0);
   if ($cmp22) {
    $head209 = ((($add$ptr6)) + 4|0);
    $27 = load4($head209);
    $and210 = $27 & 3;
    $cmp211 = ($and210|0)==(3);
    if (!($cmp211)) {
     $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    $add$ptr217 = (($add$ptr16) + ($add17)|0);
    $head216 = ((($add$ptr16)) + 4|0);
    $or = $add17 | 1;
    $and215 = $27 & -2;
    store4((9572),$add17);
    store4($head209,$and215);
    store4($head216,$or);
    store4($add$ptr217,$add17);
    return;
   }
   $shr = $2 >>> 3;
   $cmp25 = ($2>>>0)<(256);
   if ($cmp25) {
    $fd = ((($add$ptr16)) + 8|0);
    $4 = load4($fd);
    $bk = ((($add$ptr16)) + 12|0);
    $5 = load4($bk);
    $shl = $shr << 1;
    $arrayidx = (9604 + ($shl<<2)|0);
    $cmp29 = ($4|0)==($arrayidx|0);
    if (!($cmp29)) {
     $cmp31 = ($4>>>0)<($0>>>0);
     if ($cmp31) {
      _abort();
      // unreachable;
     }
     $bk34 = ((($4)) + 12|0);
     $6 = load4($bk34);
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
     $7 = load4(9564);
     $and46 = $7 & $neg;
     store4(9564,$and46);
     $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    $cmp50 = ($5|0)==($arrayidx|0);
    if ($cmp50) {
     $$pre309 = ((($5)) + 8|0);
     $fd67$pre$phiZ2D = $$pre309;
    } else {
     $cmp53 = ($5>>>0)<($0>>>0);
     if ($cmp53) {
      _abort();
      // unreachable;
     }
     $fd56 = ((($5)) + 8|0);
     $8 = load4($fd56);
     $cmp57 = ($8|0)==($add$ptr16|0);
     if ($cmp57) {
      $fd67$pre$phiZ2D = $fd56;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk66 = ((($4)) + 12|0);
    store4($bk66,$5);
    store4($fd67$pre$phiZ2D,$4);
    $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
    break;
   }
   $parent = ((($add$ptr16)) + 24|0);
   $9 = load4($parent);
   $bk73 = ((($add$ptr16)) + 12|0);
   $10 = load4($bk73);
   $cmp74 = ($10|0)==($add$ptr16|0);
   do {
    if ($cmp74) {
     $child = ((($add$ptr16)) + 16|0);
     $arrayidx99 = ((($child)) + 4|0);
     $14 = load4($arrayidx99);
     $cmp100 = ($14|0)==(0|0);
     if ($cmp100) {
      $15 = load4($child);
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
      $16 = load4($arrayidx108);
      $cmp109 = ($16|0)==(0|0);
      if (!($cmp109)) {
       $R$1 = $16;$RP$1 = $arrayidx108;
       continue;
      }
      $arrayidx113 = ((($R$1)) + 16|0);
      $17 = load4($arrayidx113);
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
      store4($RP$1,0);
      $R$3 = $R$1;
      break;
     }
    } else {
     $fd78 = ((($add$ptr16)) + 8|0);
     $11 = load4($fd78);
     $cmp80 = ($11>>>0)<($0>>>0);
     if ($cmp80) {
      _abort();
      // unreachable;
     }
     $bk82 = ((($11)) + 12|0);
     $12 = load4($bk82);
     $cmp83 = ($12|0)==($add$ptr16|0);
     if (!($cmp83)) {
      _abort();
      // unreachable;
     }
     $fd86 = ((($10)) + 8|0);
     $13 = load4($fd86);
     $cmp87 = ($13|0)==($add$ptr16|0);
     if ($cmp87) {
      store4($bk82,$10);
      store4($fd86,$11);
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
    $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
   } else {
    $index = ((($add$ptr16)) + 28|0);
    $18 = load4($index);
    $arrayidx130 = (9868 + ($18<<2)|0);
    $19 = load4($arrayidx130);
    $cmp131 = ($add$ptr16|0)==($19|0);
    $cond292 = ($R$3|0)==(0|0);
    do {
     if ($cmp131) {
      store4($arrayidx130,$R$3);
      if ($cond292) {
       $shl138 = 1 << $18;
       $neg139 = $shl138 ^ -1;
       $20 = load4((9568));
       $and140 = $20 & $neg139;
       store4((9568),$and140);
       $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
       break L10;
      }
     } else {
      $21 = load4((9580));
      $cmp143 = ($9>>>0)<($21>>>0);
      if ($cmp143) {
       _abort();
       // unreachable;
      } else {
       $arrayidx149 = ((($9)) + 16|0);
       $22 = load4($arrayidx149);
       $not$cmp150 = ($22|0)!=($add$ptr16|0);
       $$sink = $not$cmp150&1;
       $arrayidx157 = (((($9)) + 16|0) + ($$sink<<2)|0);
       store4($arrayidx157,$R$3);
       if ($cond292) {
        $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
        break L10;
       } else {
        break;
       }
      }
     }
    } while(0);
    $23 = load4((9580));
    $cmp165 = ($R$3>>>0)<($23>>>0);
    if ($cmp165) {
     _abort();
     // unreachable;
    }
    $parent170 = ((($R$3)) + 24|0);
    store4($parent170,$9);
    $child171 = ((($add$ptr16)) + 16|0);
    $24 = load4($child171);
    $cmp173 = ($24|0)==(0|0);
    do {
     if (!($cmp173)) {
      $cmp176 = ($24>>>0)<($23>>>0);
      if ($cmp176) {
       _abort();
       // unreachable;
      } else {
       $arrayidx182 = ((($R$3)) + 16|0);
       store4($arrayidx182,$24);
       $parent183 = ((($24)) + 24|0);
       store4($parent183,$R$3);
       break;
      }
     }
    } while(0);
    $arrayidx188 = ((($child171)) + 4|0);
    $25 = load4($arrayidx188);
    $cmp189 = ($25|0)==(0|0);
    if ($cmp189) {
     $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
    } else {
     $26 = load4((9580));
     $cmp192 = ($25>>>0)<($26>>>0);
     if ($cmp192) {
      _abort();
      // unreachable;
     } else {
      $arrayidx198 = ((($R$3)) + 20|0);
      store4($arrayidx198,$25);
      $parent199 = ((($25)) + 24|0);
      store4($parent199,$R$3);
      $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
   }
  } else {
   $28 = $add$ptr;$p$1 = $add$ptr;$psize$1 = $and5;
  }
 } while(0);
 $cmp228 = ($28>>>0)<($add$ptr6>>>0);
 if (!($cmp228)) {
  _abort();
  // unreachable;
 }
 $head231 = ((($add$ptr6)) + 4|0);
 $29 = load4($head231);
 $and232 = $29 & 1;
 $tobool233 = ($and232|0)==(0);
 if ($tobool233) {
  _abort();
  // unreachable;
 }
 $and240 = $29 & 2;
 $tobool241 = ($and240|0)==(0);
 if ($tobool241) {
  $30 = load4((9588));
  $cmp243 = ($add$ptr6|0)==($30|0);
  $31 = load4((9584));
  if ($cmp243) {
   $32 = load4((9576));
   $add246 = (($32) + ($psize$1))|0;
   store4((9576),$add246);
   store4((9588),$p$1);
   $or247 = $add246 | 1;
   $head248 = ((($p$1)) + 4|0);
   store4($head248,$or247);
   $cmp249 = ($p$1|0)==($31|0);
   if (!($cmp249)) {
    return;
   }
   store4((9584),0);
   store4((9572),0);
   return;
  }
  $cmp255 = ($add$ptr6|0)==($31|0);
  if ($cmp255) {
   $33 = load4((9572));
   $add258 = (($33) + ($psize$1))|0;
   store4((9572),$add258);
   store4((9584),$28);
   $or259 = $add258 | 1;
   $head260 = ((($p$1)) + 4|0);
   store4($head260,$or259);
   $add$ptr261 = (($28) + ($add258)|0);
   store4($add$ptr261,$add258);
   return;
  }
  $and266 = $29 & -8;
  $add267 = (($and266) + ($psize$1))|0;
  $shr268 = $29 >>> 3;
  $cmp269 = ($29>>>0)<(256);
  L108: do {
   if ($cmp269) {
    $fd273 = ((($add$ptr6)) + 8|0);
    $34 = load4($fd273);
    $bk275 = ((($add$ptr6)) + 12|0);
    $35 = load4($bk275);
    $shl278 = $shr268 << 1;
    $arrayidx279 = (9604 + ($shl278<<2)|0);
    $cmp280 = ($34|0)==($arrayidx279|0);
    if (!($cmp280)) {
     $36 = load4((9580));
     $cmp283 = ($34>>>0)<($36>>>0);
     if ($cmp283) {
      _abort();
      // unreachable;
     }
     $bk286 = ((($34)) + 12|0);
     $37 = load4($bk286);
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
     $38 = load4(9564);
     $and301 = $38 & $neg300;
     store4(9564,$and301);
     break;
    }
    $cmp305 = ($35|0)==($arrayidx279|0);
    if ($cmp305) {
     $$pre308 = ((($35)) + 8|0);
     $fd322$pre$phiZ2D = $$pre308;
    } else {
     $39 = load4((9580));
     $cmp308 = ($35>>>0)<($39>>>0);
     if ($cmp308) {
      _abort();
      // unreachable;
     }
     $fd311 = ((($35)) + 8|0);
     $40 = load4($fd311);
     $cmp312 = ($40|0)==($add$ptr6|0);
     if ($cmp312) {
      $fd322$pre$phiZ2D = $fd311;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk321 = ((($34)) + 12|0);
    store4($bk321,$35);
    store4($fd322$pre$phiZ2D,$34);
   } else {
    $parent331 = ((($add$ptr6)) + 24|0);
    $41 = load4($parent331);
    $bk333 = ((($add$ptr6)) + 12|0);
    $42 = load4($bk333);
    $cmp334 = ($42|0)==($add$ptr6|0);
    do {
     if ($cmp334) {
      $child361 = ((($add$ptr6)) + 16|0);
      $arrayidx362 = ((($child361)) + 4|0);
      $47 = load4($arrayidx362);
      $cmp363 = ($47|0)==(0|0);
      if ($cmp363) {
       $48 = load4($child361);
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
       $49 = load4($arrayidx374);
       $cmp375 = ($49|0)==(0|0);
       if (!($cmp375)) {
        $R332$1 = $49;$RP360$1 = $arrayidx374;
        continue;
       }
       $arrayidx379 = ((($R332$1)) + 16|0);
       $50 = load4($arrayidx379);
       $cmp380 = ($50|0)==(0|0);
       if ($cmp380) {
        break;
       } else {
        $R332$1 = $50;$RP360$1 = $arrayidx379;
       }
      }
      $51 = load4((9580));
      $cmp386 = ($RP360$1>>>0)<($51>>>0);
      if ($cmp386) {
       _abort();
       // unreachable;
      } else {
       store4($RP360$1,0);
       $R332$3 = $R332$1;
       break;
      }
     } else {
      $fd338 = ((($add$ptr6)) + 8|0);
      $43 = load4($fd338);
      $44 = load4((9580));
      $cmp340 = ($43>>>0)<($44>>>0);
      if ($cmp340) {
       _abort();
       // unreachable;
      }
      $bk343 = ((($43)) + 12|0);
      $45 = load4($bk343);
      $cmp344 = ($45|0)==($add$ptr6|0);
      if (!($cmp344)) {
       _abort();
       // unreachable;
      }
      $fd347 = ((($42)) + 8|0);
      $46 = load4($fd347);
      $cmp348 = ($46|0)==($add$ptr6|0);
      if ($cmp348) {
       store4($bk343,$42);
       store4($fd347,$43);
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
     $52 = load4($index399);
     $arrayidx400 = (9868 + ($52<<2)|0);
     $53 = load4($arrayidx400);
     $cmp401 = ($add$ptr6|0)==($53|0);
     $cond293 = ($R332$3|0)==(0|0);
     do {
      if ($cmp401) {
       store4($arrayidx400,$R332$3);
       if ($cond293) {
        $shl408 = 1 << $52;
        $neg409 = $shl408 ^ -1;
        $54 = load4((9568));
        $and410 = $54 & $neg409;
        store4((9568),$and410);
        break L108;
       }
      } else {
       $55 = load4((9580));
       $cmp413 = ($41>>>0)<($55>>>0);
       if ($cmp413) {
        _abort();
        // unreachable;
       } else {
        $arrayidx419 = ((($41)) + 16|0);
        $56 = load4($arrayidx419);
        $not$cmp420 = ($56|0)!=($add$ptr6|0);
        $$sink4 = $not$cmp420&1;
        $arrayidx427 = (((($41)) + 16|0) + ($$sink4<<2)|0);
        store4($arrayidx427,$R332$3);
        if ($cond293) {
         break L108;
        } else {
         break;
        }
       }
      }
     } while(0);
     $57 = load4((9580));
     $cmp435 = ($R332$3>>>0)<($57>>>0);
     if ($cmp435) {
      _abort();
      // unreachable;
     }
     $parent442 = ((($R332$3)) + 24|0);
     store4($parent442,$41);
     $child443 = ((($add$ptr6)) + 16|0);
     $58 = load4($child443);
     $cmp445 = ($58|0)==(0|0);
     do {
      if (!($cmp445)) {
       $cmp448 = ($58>>>0)<($57>>>0);
       if ($cmp448) {
        _abort();
        // unreachable;
       } else {
        $arrayidx454 = ((($R332$3)) + 16|0);
        store4($arrayidx454,$58);
        $parent455 = ((($58)) + 24|0);
        store4($parent455,$R332$3);
        break;
       }
      }
     } while(0);
     $arrayidx460 = ((($child443)) + 4|0);
     $59 = load4($arrayidx460);
     $cmp461 = ($59|0)==(0|0);
     if (!($cmp461)) {
      $60 = load4((9580));
      $cmp464 = ($59>>>0)<($60>>>0);
      if ($cmp464) {
       _abort();
       // unreachable;
      } else {
       $arrayidx470 = ((($R332$3)) + 20|0);
       store4($arrayidx470,$59);
       $parent471 = ((($59)) + 24|0);
       store4($parent471,$R332$3);
       break;
      }
     }
    }
   }
  } while(0);
  $or480 = $add267 | 1;
  $head481 = ((($p$1)) + 4|0);
  store4($head481,$or480);
  $add$ptr482 = (($28) + ($add267)|0);
  store4($add$ptr482,$add267);
  $61 = load4((9584));
  $cmp484 = ($p$1|0)==($61|0);
  if ($cmp484) {
   store4((9572),$add267);
   return;
  } else {
   $psize$2 = $add267;
  }
 } else {
  $and495 = $29 & -2;
  store4($head231,$and495);
  $or496 = $psize$1 | 1;
  $head497 = ((($p$1)) + 4|0);
  store4($head497,$or496);
  $add$ptr498 = (($28) + ($psize$1)|0);
  store4($add$ptr498,$psize$1);
  $psize$2 = $psize$1;
 }
 $shr501 = $psize$2 >>> 3;
 $cmp502 = ($psize$2>>>0)<(256);
 if ($cmp502) {
  $shl508 = $shr501 << 1;
  $arrayidx509 = (9604 + ($shl508<<2)|0);
  $62 = load4(9564);
  $shl511 = 1 << $shr501;
  $and512 = $62 & $shl511;
  $tobool513 = ($and512|0)==(0);
  if ($tobool513) {
   $or516 = $62 | $shl511;
   store4(9564,$or516);
   $$pre = ((($arrayidx509)) + 8|0);
   $$pre$phiZ2D = $$pre;$F510$0 = $arrayidx509;
  } else {
   $63 = ((($arrayidx509)) + 8|0);
   $64 = load4($63);
   $65 = load4((9580));
   $cmp519 = ($64>>>0)<($65>>>0);
   if ($cmp519) {
    _abort();
    // unreachable;
   } else {
    $$pre$phiZ2D = $63;$F510$0 = $64;
   }
  }
  store4($$pre$phiZ2D,$p$1);
  $bk529 = ((($F510$0)) + 12|0);
  store4($bk529,$p$1);
  $fd530 = ((($p$1)) + 8|0);
  store4($fd530,$F510$0);
  $bk531 = ((($p$1)) + 12|0);
  store4($bk531,$arrayidx509);
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
 $arrayidx567 = (9868 + ($I534$0<<2)|0);
 $index568 = ((($p$1)) + 28|0);
 store4($index568,$I534$0);
 $child569 = ((($p$1)) + 16|0);
 $arrayidx570 = ((($p$1)) + 20|0);
 store4($arrayidx570,0);
 store4($child569,0);
 $66 = load4((9568));
 $shl573 = 1 << $I534$0;
 $and574 = $66 & $shl573;
 $tobool575 = ($and574|0)==(0);
 do {
  if ($tobool575) {
   $or578 = $66 | $shl573;
   store4((9568),$or578);
   store4($arrayidx567,$p$1);
   $parent579 = ((($p$1)) + 24|0);
   store4($parent579,$arrayidx567);
   $bk580 = ((($p$1)) + 12|0);
   store4($bk580,$p$1);
   $fd581 = ((($p$1)) + 8|0);
   store4($fd581,$p$1);
  } else {
   $67 = load4($arrayidx567);
   $cmp584 = ($I534$0|0)==(31);
   $shr586 = $I534$0 >>> 1;
   $sub589 = (25 - ($shr586))|0;
   $cond = $cmp584 ? 0 : $sub589;
   $shl590 = $psize$2 << $cond;
   $K583$0 = $shl590;$T$0 = $67;
   while(1) {
    $head591 = ((($T$0)) + 4|0);
    $68 = load4($head591);
    $and592 = $68 & -8;
    $cmp593 = ($and592|0)==($psize$2|0);
    if ($cmp593) {
     label = 124;
     break;
    }
    $shr597 = $K583$0 >>> 31;
    $arrayidx599 = (((($T$0)) + 16|0) + ($shr597<<2)|0);
    $shl600 = $K583$0 << 1;
    $69 = load4($arrayidx599);
    $cmp601 = ($69|0)==(0|0);
    if ($cmp601) {
     label = 121;
     break;
    } else {
     $K583$0 = $shl600;$T$0 = $69;
    }
   }
   if ((label|0) == 121) {
    $70 = load4((9580));
    $cmp605 = ($arrayidx599>>>0)<($70>>>0);
    if ($cmp605) {
     _abort();
     // unreachable;
    } else {
     store4($arrayidx599,$p$1);
     $parent610 = ((($p$1)) + 24|0);
     store4($parent610,$T$0);
     $bk611 = ((($p$1)) + 12|0);
     store4($bk611,$p$1);
     $fd612 = ((($p$1)) + 8|0);
     store4($fd612,$p$1);
     break;
    }
   }
   else if ((label|0) == 124) {
    $fd620 = ((($T$0)) + 8|0);
    $71 = load4($fd620);
    $72 = load4((9580));
    $cmp624 = ($71>>>0)>=($72>>>0);
    $not$cmp621 = ($T$0>>>0)>=($72>>>0);
    $73 = $cmp624 & $not$cmp621;
    if ($73) {
     $bk631 = ((($71)) + 12|0);
     store4($bk631,$p$1);
     store4($fd620,$p$1);
     $fd633 = ((($p$1)) + 8|0);
     store4($fd633,$71);
     $bk634 = ((($p$1)) + 12|0);
     store4($bk634,$T$0);
     $parent635 = ((($p$1)) + 24|0);
     store4($parent635,0);
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $74 = load4((9596));
 $dec = (($74) + -1)|0;
 store4((9596),$dec);
 $cmp640 = ($dec|0)==(0);
 if ($cmp640) {
  $sp$0$in$i = (10020);
 } else {
  return;
 }
 while(1) {
  $sp$0$i = load4($sp$0$in$i);
  $cmp$i = ($sp$0$i|0)==(0|0);
  $next4$i = ((($sp$0$i)) + 8|0);
  if ($cmp$i) {
   break;
  } else {
   $sp$0$in$i = $next4$i;
  }
 }
 store4((9596),-1);
 return;
}
function __ZNSt3__211char_traitsIcE6assignERcRKc($__c1,$__c2$val) {
 $__c1 = $__c1|0;
 $__c2$val = $__c2$val|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 store1($__c1,$__c2$val);
 return;
}
function __ZNSt3__211char_traitsIcE6lengthEPKc() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 1;
}
function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((8341|0),(8364|0),304,(8587|0));
 // unreachable;
}
function __ZNSt3__211char_traitsIcE7compareEPKcS3_j($__s1,$__n) {
 $__s1 = $__s1|0;
 $__n = $__n|0;
 var $call = 0, $cmp = 0, $cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__n|0)==(0);
 if ($cmp) {
  $cond = 0;
 } else {
  $call = (_memcmp($__s1,9363,$__n)|0);
  $cond = $call;
 }
 return ($cond|0);
}
function __Znwj($size) {
 $size = $size|0;
 var $$size = 0, $call = 0, $call$lcssa = 0, $call1 = 0, $call2 = 0, $cmp = 0, $cmp1 = 0, $cmp12 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($size|0)==(0);
 $$size = $cmp ? 1 : $size;
 $call1 = (_malloc($$size)|0);
 $cmp12 = ($call1|0)==(0|0);
 L1: do {
  if ($cmp12) {
   while(1) {
    $call2 = (__ZSt15get_new_handlerv()|0);
    $tobool = ($call2|0)==(0|0);
    if ($tobool) {
     $call$lcssa = 0;
     break L1;
    }
    FUNCTION_TABLE_v[$call2 & 3]();
    $call = (_malloc($$size)|0);
    $cmp1 = ($call|0)==(0|0);
    if (!($cmp1)) {
     $call$lcssa = $call;
     break;
    }
   }
  } else {
   $call$lcssa = $call1;
  }
 } while(0);
 return ($call$lcssa|0);
}
function __ZdlPv($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($ptr);
 return;
}
function __ZNSt3__218__libcpp_refstringC2EPKc($this) {
 $this = $this|0;
 var $call3 = 0, $call5 = 0, $cap = 0, $count = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call3 = (__Znwj(36)|0);
 store4($call3,23);
 $cap = ((($call3)) + 4|0);
 store4($cap,23);
 $count = ((($call3)) + 8|0);
 store4($count,0);
 $call5 = (__ZNSt3__218__libcpp_refstring13data_from_repEPNS0_9_Rep_baseE($call3)|0);
 ; store8($call5,load8(4717,1),1); store8($call5+8 | 0,load8(4717+8 | 0,1),1); store8($call5+16 | 0,load8(4717+16 | 0,1),1);
 store4($this,$call5);
 return;
}
function __ZNSt3__218__libcpp_refstring13data_from_repEPNS0_9_Rep_baseE($rep) {
 $rep = $rep|0;
 var $add$ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $add$ptr2 = ((($rep)) + 12|0);
 return ($add$ptr2|0);
}
function __ZNSt11logic_errorC2EPKc($this) {
 $this = $this|0;
 var $__imp_ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(2156));
 $__imp_ = ((($this)) + 4|0);
 __ZNSt3__218__libcpp_refstringC2EPKc($__imp_);
 return;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((8461|0),(8490|0),1183,(8587|0));
 // unreachable;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((8608|0),(8490|0),1194,(8637|0));
 // unreachable;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($this,$__str) {
 $this = $this|0;
 $__str = $__str|0;
 var $0 = 0, $1 = 0, $2 = 0, $__size_$i = 0, $__size_$i5 = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 ; store8($this,i64_const(0,0),4); store4($this+8|0,0,4);
 $__size_$i5 = ((($__str)) + 11|0);
 $0 = load1($__size_$i5);
 $tobool$i = ($0<<24>>24)<(0);
 if ($tobool$i) {
  $1 = load4($__str);
  $__size_$i = ((($__str)) + 4|0);
  $2 = load4($__size_$i);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($this,$1,$2);
 } else {
  ; store8($this,load8($__str,4),4); store4($this+8 | 0,load4($__str+8 | 0,4),4);
 }
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($this,$__s,$__sz) {
 $this = $this|0;
 $__s = $__s|0;
 $__sz = $__sz|0;
 var $__cap_$i = 0, $__p$0 = 0, $__size_$i = 0, $__size_$i12 = 0, $add$i$i = 0, $and$i$i = 0, $arrayidx = 0, $call$i$i$i = 0, $cmp = 0, $cmp2 = 0, $conv$i = 0, $or$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__sz>>>0)>(4294967279);
 if ($cmp) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $cmp2 = ($__sz>>>0)<(11);
 if ($cmp2) {
  $conv$i = $__sz&255;
  $__size_$i = ((($this)) + 11|0);
  store1($__size_$i,$conv$i);
  $__p$0 = $this;
 } else {
  $add$i$i = (($__sz) + 16)|0;
  $and$i$i = $add$i$i & -16;
  $call$i$i$i = (__Znwj($and$i$i)|0);
  store4($this,$call$i$i$i);
  $or$i = $and$i$i | -2147483648;
  $__cap_$i = ((($this)) + 8|0);
  store4($__cap_$i,$or$i);
  $__size_$i12 = ((($this)) + 4|0);
  store4($__size_$i12,$__sz);
  $__p$0 = $call$i$i$i;
 }
 (__ZNSt3__211char_traitsIcE4copyEPcPKcj($__p$0,$__s,$__sz)|0);
 $arrayidx = (($__p$0) + ($__sz)|0);
 __ZNSt3__211char_traitsIcE6assignERcRKc($arrayidx,0);
 return;
}
function __ZNSt3__211char_traitsIcE4copyEPcPKcj($__s1,$__s2,$__n) {
 $__s1 = $__s1|0;
 $__s2 = $__s2|0;
 $__n = $__n|0;
 var $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__n|0)==(0);
 if (!($cmp)) {
  _memcpy(($__s1|0),($__s2|0),($__n|0))|0;
 }
 return ($__s1|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $__size_$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__size_$i = ((($this)) + 11|0);
 $0 = load1($__size_$i);
 $tobool$i = ($0<<24>>24)<(0);
 if ($tobool$i) {
  $1 = load4($this);
  __ZdlPv($1);
 }
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($this,$__str) {
 $this = $this|0;
 $__str = $__str|0;
 var $0 = 0, $1 = 0, $2 = 0, $__size_$i$i$i = 0, $__size_$i3$i = 0, $cmp = 0, $cond$i = 0, $cond$i$i = 0, $conv$i$i = 0, $tobool$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($this|0)==($__str|0);
 if (!($cmp)) {
  $__size_$i$i$i = ((($__str)) + 11|0);
  $0 = load1($__size_$i$i$i);
  $tobool$i$i$i = ($0<<24>>24)<(0);
  $1 = load4($__str);
  $cond$i$i = $tobool$i$i$i ? $1 : $__str;
  $__size_$i3$i = ((($__str)) + 4|0);
  $2 = load4($__size_$i3$i);
  $conv$i$i = $0&255;
  $cond$i = $tobool$i$i$i ? $2 : $conv$i$i;
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj($this,$cond$i$i,$cond$i)|0);
 }
 return ($this|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj($this,$__s,$__n) {
 $this = $this|0;
 $__s = $__s|0;
 $__n = $__n|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__cap_$i$i = 0, $__size_$i$i = 0, $__size_$i3$i = 0, $and$i$i = 0, $arrayidx = 0, $cmp = 0, $cond$i = 0, $cond$i19 = 0, $cond$i25 = 0, $conv$i$i = 0, $conv$i$i29 = 0, $phitmp$i = 0, $sub = 0, $tobool$i$i = 0, $tobool$i$i28 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $__size_$i$i = ((($this)) + 11|0);
 $0 = load1($__size_$i$i);
 $tobool$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i) {
  $__cap_$i$i = ((($this)) + 8|0);
  $1 = load4($__cap_$i$i);
  $and$i$i = $1 & 2147483647;
  $phitmp$i = (($and$i$i) + -1)|0;
  $cond$i = $phitmp$i;
 } else {
  $cond$i = 10;
 }
 $cmp = ($cond$i>>>0)<($__n>>>0);
 $__size_$i3$i = ((($this)) + 4|0);
 do {
  if ($cmp) {
   if ($tobool$i$i) {
    $4 = load4($__size_$i3$i);
    $cond$i25 = $4;
   } else {
    $conv$i$i = $0&255;
    $cond$i25 = $conv$i$i;
   }
   $sub = (($__n) - ($cond$i))|0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($this,$cond$i,$sub,$cond$i25,$cond$i25,$__n,$__s);
  } else {
   if ($tobool$i$i) {
    $2 = load4($this);
    $cond$i19 = $2;
   } else {
    $cond$i19 = $this;
   }
   (__ZNSt3__211char_traitsIcE4moveEPcPKcj($cond$i19,$__s,$__n)|0);
   $arrayidx = (($cond$i19) + ($__n)|0);
   __ZNSt3__211char_traitsIcE6assignERcRKc($arrayidx,0);
   $3 = load1($__size_$i$i);
   $tobool$i$i28 = ($3<<24>>24)<(0);
   if ($tobool$i$i28) {
    store4($__size_$i3$i,$__n);
    break;
   } else {
    $conv$i$i29 = $__n&255;
    store1($__size_$i$i,$conv$i$i29);
    break;
   }
  }
 } while(0);
 return ($this|0);
}
function __ZNSt3__211char_traitsIcE4moveEPcPKcj($__s1,$__s2,$__n) {
 $__s1 = $__s1|0;
 $__s2 = $__s2|0;
 $__n = $__n|0;
 var $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__n|0)==(0);
 if (!($cmp)) {
  _memmove(($__s1|0),($__s2|0),($__n|0))|0;
 }
 return ($__s1|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($this,$__old_cap,$__delta_cap,$__old_sz,$__n_del,$__n_add,$__p_new_stuff) {
 $this = $this|0;
 $__old_cap = $__old_cap|0;
 $__delta_cap = $__delta_cap|0;
 $__old_sz = $__old_sz|0;
 $__n_del = $__n_del|0;
 $__n_add = $__n_add|0;
 $__p_new_stuff = $__p_new_stuff|0;
 var $$sroa$speculated = 0, $0 = 0, $1 = 0, $__cap_$i = 0, $__size_$i = 0, $__size_$i$i = 0, $add = 0, $add$i$i = 0, $add$ptr34 = 0, $add$ptr37 = 0, $add48 = 0, $and$i$i = 0, $arrayidx = 0, $call$i$i$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp23 = 0, $cmp30 = 0, $cmp41 = 0;
 var $cmp5 = 0, $cond$i = 0, $cond40 = 0, $mul = 0, $or$i = 0, $phitmp = 0, $sub2 = 0, $sub28 = 0, $tobool$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $sub2 = (-18 - ($__old_cap))|0;
 $cmp = ($sub2>>>0)<($__delta_cap>>>0);
 if ($cmp) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $__size_$i$i = ((($this)) + 11|0);
 $0 = load1($__size_$i$i);
 $tobool$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i) {
  $1 = load4($this);
  $cond$i = $1;
 } else {
  $cond$i = $this;
 }
 $cmp5 = ($__old_cap>>>0)<(2147483623);
 if ($cmp5) {
  $add = (($__delta_cap) + ($__old_cap))|0;
  $mul = $__old_cap << 1;
  $cmp$i$i$i = ($add>>>0)<($mul>>>0);
  $$sroa$speculated = $cmp$i$i$i ? $mul : $add;
  $cmp$i = ($$sroa$speculated>>>0)<(11);
  $add$i$i = (($$sroa$speculated) + 16)|0;
  $and$i$i = $add$i$i & -16;
  $phitmp = $cmp$i ? 11 : $and$i$i;
  $cond40 = $phitmp;
 } else {
  $cond40 = -17;
 }
 $call$i$i$i = (__Znwj($cond40)|0);
 $cmp23 = ($__n_add|0)==(0);
 if (!($cmp23)) {
  (__ZNSt3__211char_traitsIcE4copyEPcPKcj($call$i$i$i,$__p_new_stuff,$__n_add)|0);
 }
 $sub28 = (($__old_sz) - ($__n_del))|0;
 $cmp30 = ($sub28|0)==(0);
 if (!($cmp30)) {
  $add$ptr34 = (($call$i$i$i) + ($__n_add)|0);
  $add$ptr37 = (($cond$i) + ($__n_del)|0);
  (__ZNSt3__211char_traitsIcE4copyEPcPKcj($add$ptr34,$add$ptr37,$sub28)|0);
 }
 $cmp41 = ($__old_cap|0)==(10);
 if (!($cmp41)) {
  __ZdlPv($cond$i);
 }
 store4($this,$call$i$i$i);
 $or$i = $cond40 | -2147483648;
 $__cap_$i = ((($this)) + 8|0);
 store4($__cap_$i,$or$i);
 $add48 = (($sub28) + ($__n_add))|0;
 $__size_$i = ((($this)) + 4|0);
 store4($__size_$i,$add48);
 $arrayidx = (($call$i$i$i) + ($add48)|0);
 __ZNSt3__211char_traitsIcE6assignERcRKc($arrayidx,0);
 return;
}
function __ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj($this,$__n2) {
 $this = $this|0;
 $__n2 = $__n2|0;
 var $$$call6 = 0, $$call6 = 0, $$sroa$speculated15 = 0, $0 = 0, $1 = 0, $2 = 0, $__size_$i$i = 0, $__size_$i3$i = 0, $call6 = 0, $cmp$i$i$i7 = 0, $cmp2 = 0, $cmp7 = 0, $cmp9 = 0, $cond$i = 0, $cond$i$i = 0, $conv$i$i = 0, $tobool$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__size_$i$i = ((($this)) + 11|0);
 $0 = load1($__size_$i$i);
 $tobool$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i) {
  $__size_$i3$i = ((($this)) + 4|0);
  $1 = load4($__size_$i3$i);
  $cond$i = $1;
 } else {
  $conv$i$i = $0&255;
  $cond$i = $conv$i$i;
 }
 $cmp2 = ($__n2|0)==(-1);
 if ($cmp2) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
  // unreachable;
 }
 if ($tobool$i$i) {
  $2 = load4($this);
  $cond$i$i = $2;
 } else {
  $cond$i$i = $this;
 }
 $cmp$i$i$i7 = ($cond$i>>>0)>($__n2>>>0);
 $$sroa$speculated15 = $cmp$i$i$i7 ? $__n2 : $cond$i;
 $call6 = (__ZNSt3__211char_traitsIcE7compareEPKcS3_j($cond$i$i,$$sroa$speculated15)|0);
 $cmp7 = ($call6|0)==(0);
 if ($cmp7) {
  $cmp9 = ($cond$i>>>0)<($__n2>>>0);
  $$call6 = $cmp$i$i$i7&1;
  $$$call6 = $cmp9 ? -1 : $$call6;
  return ($$$call6|0);
 } else {
  return ($call6|0);
 }
 return (0)|0;
}
function __ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($this) {
 $this = $this|0;
 var $call = 0, $call2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZNSt3__211char_traitsIcE6lengthEPKc()|0);
 $call2 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj($this,$call)|0);
 return ($call2|0);
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = i64(), $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $__type_name$i = 0, $add$ptr = 0, $and = i64(), $call = 0, $call10 = 0, $call14 = 0, $cmp = 0, $cmp7 = 0, $cond = 0, $exception_class = 0, $primaryException = 0, $thrown_object = 0, $tobool = 0;
 var $tobool1 = 0, $vararg_buffer = 0, $vararg_buffer10 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vfn13 = 0, $vtable12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer10 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $thrown_object = sp + 36|0;
 $call = (___cxa_get_globals_fast()|0);
 $tobool = ($call|0)==(0|0);
 if (!($tobool)) {
  $0 = load4($call);
  $tobool1 = ($0|0)==(0|0);
  if (!($tobool1)) {
   $add$ptr = ((($0)) + 80|0);
   $exception_class = ((($0)) + 48|0);
   $1 = load8($exception_class);
   $and = i64_and($1,i64_const(4294967040,4294967295));
   $cmp = i64_eq($and,i64_const(1126902528,1129074247));
   if (!($cmp)) {
    store4($vararg_buffer7,8794);
    _abort_message(8744,$vararg_buffer7);
    // unreachable;
   }
   $cmp7 = i64_eq($1,i64_const(1126902529,1129074247));
   if ($cmp7) {
    $primaryException = ((($0)) + 44|0);
    $2 = load4($primaryException);
    $cond = $2;
   } else {
    $cond = $add$ptr;
   }
   store4($thrown_object,$cond);
   $3 = load4($0);
   $__type_name$i = ((($3)) + 4|0);
   $4 = load4($__type_name$i);
   $call10 = (__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(1336,$3,$thrown_object)|0);
   if ($call10) {
    $5 = load4($thrown_object);
    $vtable12 = load4($5);
    $vfn13 = ((($vtable12)) + 8|0);
    $6 = load4($vfn13);
    $call14 = (FUNCTION_TABLE_ii[$6 & 15]($5)|0);
    store4($vararg_buffer,8794);
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    store4($vararg_ptr1,$4);
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    store4($vararg_ptr2,$call14);
    _abort_message(8658,$vararg_buffer);
    // unreachable;
   } else {
    store4($vararg_buffer3,8794);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,$4);
    _abort_message(8703,$vararg_buffer3);
    // unreachable;
   }
  }
 }
 _abort_message(8782,$vararg_buffer10);
 // unreachable;
}
function ___cxa_get_globals_fast() {
 var $0 = 0, $call = 0, $call1 = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $call = (_pthread_once((10060|0),(2|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  $0 = load4(10064);
  $call1 = (_pthread_getspecific(($0|0))|0);
  STACKTOP = sp;return ($call1|0);
 } else {
  _abort_message(8933,$vararg_buffer);
  // unreachable;
 }
 return (0)|0;
}
function _abort_message($format,$varargs) {
 $format = $format|0;
 $varargs = $varargs|0;
 var $list = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $list = sp;
 store4($list,$varargs);
 _vfprintf($format,$list);
 _fputc();
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
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $call = 0, $cmp = 0, $cmp4 = 0, $dst_ptr_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $path_dst_ptr_to_static_ptr = 0, $retval$0 = 0, $retval$2 = 0, $src2dst_offset = 0, $static_type = 0, $vfn = 0, $vtable = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$thrown_type)|0);
 if ($call) {
  $retval$2 = 1;
 } else {
  $0 = ($thrown_type|0)==(0|0);
  if ($0) {
   $retval$2 = 0;
  } else {
   $1 = (___dynamic_cast($thrown_type,1344)|0);
   $cmp = ($1|0)==(0|0);
   if ($cmp) {
    $retval$2 = 0;
   } else {
    $2 = ((($info)) + 4|0);
    ; store8($2,i64_const(0,0),4); store8($2+8|0,i64_const(0,0),4); store8($2+16|0,i64_const(0,0),4); store8($2+24|0,i64_const(0,0),4); store8($2+32|0,i64_const(0,0),4); store8($2+40|0,i64_const(0,0),4); store4($2+48|0,0,4);
    store4($info,$1);
    $static_type = ((($info)) + 8|0);
    store4($static_type,$this);
    $src2dst_offset = ((($info)) + 12|0);
    store4($src2dst_offset,-1);
    $number_of_dst_type = ((($info)) + 48|0);
    store4($number_of_dst_type,1);
    $vtable = load4($1);
    $vfn = ((($vtable)) + 28|0);
    $3 = load4($vfn);
    $4 = load4($adjustedPtr);
    FUNCTION_TABLE_viiii[$3 & 7]($1,$info,$4,1);
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    $5 = load4($path_dst_ptr_to_static_ptr);
    $cmp4 = ($5|0)==(1);
    if ($cmp4) {
     $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
     $6 = load4($dst_ptr_leading_to_static_ptr);
     store4($adjustedPtr,$6);
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
 var $0 = 0, $call = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($info,$dst_ptr,$current_ptr,$path_below);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add = 0, $call = 0, $call3 = 0, $cmp = 0, $cmp12 = 0, $cmp13 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0;
 var $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $search_done = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 do {
  if ($call) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi($info,$current_ptr,$path_below);
  } else {
   $1 = load4($info);
   $call3 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$1)|0);
   if ($call3) {
    $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
    $2 = load4($dst_ptr_leading_to_static_ptr);
    $cmp = ($2|0)==($current_ptr|0);
    $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
    if (!($cmp)) {
     $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
     $3 = load4($dst_ptr_not_leading_to_static_ptr);
     $cmp5 = ($3|0)==($current_ptr|0);
     if (!($cmp5)) {
      store4($path_dynamic_ptr_to_dst_ptr,$path_below);
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $4 = load4($number_to_dst_ptr);
      $add = (($4) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $number_to_static_ptr = ((($info)) + 36|0);
      $5 = load4($number_to_static_ptr);
      $cmp12 = ($5|0)==(1);
      if ($cmp12) {
       $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
       $6 = load4($path_dst_ptr_to_static_ptr);
       $cmp13 = ($6|0)==(2);
       if ($cmp13) {
        $search_done = ((($info)) + 54|0);
        store1($search_done,1);
       }
      }
      $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
      store4($is_dst_type_derived_from_static_type,4);
      break;
     }
    }
    $cmp7 = ($path_below|0)==(1);
    if ($cmp7) {
     store4($path_dynamic_ptr_to_dst_ptr,1);
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
 var $0 = 0, $call = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($x,$y) {
 $x = $x|0;
 $y = $y|0;
 var $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($x|0)==($y|0);
 return ($cmp|0);
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($info,$adjustedPtr,$path_below) {
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $add = 0, $cmp = 0, $cmp4 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0, $search_done = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $0 = load4($dst_ptr_leading_to_static_ptr);
 $cmp = ($0|0)==(0|0);
 $number_to_static_ptr = ((($info)) + 36|0);
 $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
 do {
  if ($cmp) {
   store4($dst_ptr_leading_to_static_ptr,$adjustedPtr);
   store4($path_dst_ptr_to_static_ptr,$path_below);
   store4($number_to_static_ptr,1);
  } else {
   $cmp4 = ($0|0)==($adjustedPtr|0);
   if (!($cmp4)) {
    $2 = load4($number_to_static_ptr);
    $add = (($2) + 1)|0;
    store4($number_to_static_ptr,$add);
    store4($path_dst_ptr_to_static_ptr,2);
    $search_done = ((($info)) + 54|0);
    store1($search_done,1);
    break;
   }
   $1 = load4($path_dst_ptr_to_static_ptr);
   $cmp7 = ($1|0)==(2);
   if ($cmp7) {
    store4($path_dst_ptr_to_static_ptr,$path_below);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi($info,$current_ptr,$path_below) {
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $cmp = 0, $cmp2 = 0, $path_dynamic_ptr_to_static_ptr = 0, $static_ptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_ptr = ((($info)) + 4|0);
 $0 = load4($static_ptr);
 $cmp = ($0|0)==($current_ptr|0);
 if ($cmp) {
  $path_dynamic_ptr_to_static_ptr = ((($info)) + 28|0);
  $1 = load4($path_dynamic_ptr_to_static_ptr);
  $cmp2 = ($1|0)==(1);
  if (!($cmp2)) {
   store4($path_dynamic_ptr_to_static_ptr,$path_below);
  }
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($info,$dst_ptr,$current_ptr,$path_below) {
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add = 0, $cmp = 0, $cmp10 = 0, $cmp13 = 0, $cmp18 = 0, $cmp2 = 0, $cmp21 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $number_of_dst_type = 0;
 var $number_to_static_ptr = 0, $or$cond = 0, $or$cond19 = 0, $path_dst_ptr_to_static_ptr = 0, $search_done = 0, $static_ptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $found_any_static_type = ((($info)) + 53|0);
 store1($found_any_static_type,1);
 $static_ptr = ((($info)) + 4|0);
 $0 = load4($static_ptr);
 $cmp = ($0|0)==($current_ptr|0);
 do {
  if ($cmp) {
   $found_our_static_ptr = ((($info)) + 52|0);
   store1($found_our_static_ptr,1);
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $1 = load4($dst_ptr_leading_to_static_ptr);
   $cmp2 = ($1|0)==(0|0);
   $search_done = ((($info)) + 54|0);
   $number_of_dst_type = ((($info)) + 48|0);
   $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
   $number_to_static_ptr = ((($info)) + 36|0);
   if ($cmp2) {
    store4($dst_ptr_leading_to_static_ptr,$dst_ptr);
    store4($path_dst_ptr_to_static_ptr,$path_below);
    store4($number_to_static_ptr,1);
    $2 = load4($number_of_dst_type);
    $cmp5 = ($2|0)==(1);
    $cmp7 = ($path_below|0)==(1);
    $or$cond = $cmp7 & $cmp5;
    if (!($or$cond)) {
     break;
    }
    store1($search_done,1);
    break;
   }
   $cmp10 = ($1|0)==($dst_ptr|0);
   if (!($cmp10)) {
    $6 = load4($number_to_static_ptr);
    $add = (($6) + 1)|0;
    store4($number_to_static_ptr,$add);
    store1($search_done,1);
    break;
   }
   $3 = load4($path_dst_ptr_to_static_ptr);
   $cmp13 = ($3|0)==(2);
   if ($cmp13) {
    store4($path_dst_ptr_to_static_ptr,$path_below);
    $5 = $path_below;
   } else {
    $5 = $3;
   }
   $4 = load4($number_of_dst_type);
   $cmp18 = ($4|0)==(1);
   $cmp21 = ($5|0)==(1);
   $or$cond19 = $cmp21 & $cmp18;
   if ($or$cond19) {
    store1($search_done,1);
   }
  }
 } while(0);
 return;
}
function ___dynamic_cast($static_ptr,$dst_type) {
 $static_ptr = $static_ptr|0;
 $dst_type = $dst_type|0;
 var $$ = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr$ = 0, $arrayidx = 0;
 var $arrayidx1 = 0, $call = 0, $cmp = 0, $cmp14 = 0, $cmp16 = 0, $cmp19 = 0, $cmp25 = 0, $cmp27 = 0, $cmp30 = 0, $cmp33 = 0, $dst_ptr$0 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $or$cond = 0, $or$cond15 = 0, $or$cond16 = 0;
 var $or$cond17 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_static_ptr = 0, $src2dst_offset5 = 0, $static_ptr3 = 0, $static_type4 = 0, $vfn = 0, $vfn11 = 0, $vtable10 = 0, $vtable7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $0 = load4($static_ptr);
 $arrayidx = ((($0)) + -8|0);
 $1 = load4($arrayidx);
 $add$ptr = (($static_ptr) + ($1)|0);
 $arrayidx1 = ((($0)) + -4|0);
 $2 = load4($arrayidx1);
 store4($info,$dst_type);
 $static_ptr3 = ((($info)) + 4|0);
 store4($static_ptr3,$static_ptr);
 $static_type4 = ((($info)) + 8|0);
 store4($static_type4,1360);
 $src2dst_offset5 = ((($info)) + 12|0);
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
 $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
 $path_dynamic_ptr_to_static_ptr = ((($info)) + 28|0);
 $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
 $number_to_dst_ptr = ((($info)) + 40|0);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($2,$dst_type)|0);
 ; store8($src2dst_offset5,i64_const(0,0),4); store8($src2dst_offset5+8|0,i64_const(0,0),4); store8($src2dst_offset5+16|0,i64_const(0,0),4); store8($src2dst_offset5+24|0,i64_const(0,0),4); store8($src2dst_offset5+32|0,i64_const(0,0),4); store2($src2dst_offset5+40|0,0,2); store1($src2dst_offset5+42|0,0,1);
 L1: do {
  if ($call) {
   $number_of_dst_type = ((($info)) + 48|0);
   store4($number_of_dst_type,1);
   $vtable7 = load4($2);
   $vfn = ((($vtable7)) + 20|0);
   $3 = load4($vfn);
   FUNCTION_TABLE_viiiiii[$3 & 3]($2,$info,$add$ptr,$add$ptr,1,0);
   $4 = load4($path_dst_ptr_to_static_ptr);
   $cmp = ($4|0)==(1);
   $add$ptr$ = $cmp ? $add$ptr : 0;
   $dst_ptr$0 = $add$ptr$;
  } else {
   $number_to_static_ptr = ((($info)) + 36|0);
   $vtable10 = load4($2);
   $vfn11 = ((($vtable10)) + 24|0);
   $5 = load4($vfn11);
   FUNCTION_TABLE_viiiii[$5 & 3]($2,$info,$add$ptr,1,0);
   $6 = load4($number_to_static_ptr);
   switch ($6|0) {
   case 0:  {
    $7 = load4($number_to_dst_ptr);
    $cmp14 = ($7|0)==(1);
    $8 = load4($path_dynamic_ptr_to_static_ptr);
    $cmp16 = ($8|0)==(1);
    $or$cond = $cmp14 & $cmp16;
    $9 = load4($path_dynamic_ptr_to_dst_ptr);
    $cmp19 = ($9|0)==(1);
    $or$cond15 = $or$cond & $cmp19;
    $10 = load4($dst_ptr_not_leading_to_static_ptr);
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
   $11 = load4($path_dst_ptr_to_static_ptr);
   $cmp25 = ($11|0)==(1);
   if (!($cmp25)) {
    $12 = load4($number_to_dst_ptr);
    $cmp27 = ($12|0)==(0);
    $13 = load4($path_dynamic_ptr_to_static_ptr);
    $cmp30 = ($13|0)==(1);
    $or$cond16 = $cmp27 & $cmp30;
    $14 = load4($path_dynamic_ptr_to_dst_ptr);
    $cmp33 = ($14|0)==(1);
    $or$cond17 = $or$cond16 & $cmp33;
    if (!($or$cond17)) {
     $dst_ptr$0 = 0;
     break;
    }
   }
   $15 = load4($dst_ptr_leading_to_static_ptr);
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
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $call = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $__base_type = ((($this)) + 8|0);
  $1 = load4($__base_type);
  $vtable = load4($1);
  $vfn = ((($vtable)) + 20|0);
  $2 = load4($vfn);
  FUNCTION_TABLE_viiiiii[$2 & 3]($1,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
 }
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_type = 0, $add = 0, $call = 0, $call3 = 0, $cmp = 0, $cmp11 = 0;
 var $cmp26 = 0, $cmp27 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $is_dst_type_derived_from_static_type13$0$off032 = 0, $is_dst_type_derived_from_static_type13$0$off033 = 0, $not$tobool19 = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $search_done = 0, $static_type = 0, $tobool16 = 0, $vfn = 0;
 var $vfn42 = 0, $vtable = 0, $vtable41 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 do {
  if ($call) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi($info,$current_ptr,$path_below);
  } else {
   $1 = load4($info);
   $call3 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$1)|0);
   $__base_type = ((($this)) + 8|0);
   if (!($call3)) {
    $12 = load4($__base_type);
    $vtable41 = load4($12);
    $vfn42 = ((($vtable41)) + 24|0);
    $13 = load4($vfn42);
    FUNCTION_TABLE_viiiii[$13 & 3]($12,$info,$current_ptr,$path_below,$use_strcmp);
    break;
   }
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $2 = load4($dst_ptr_leading_to_static_ptr);
   $cmp = ($2|0)==($current_ptr|0);
   $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
   if (!($cmp)) {
    $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
    $3 = load4($dst_ptr_not_leading_to_static_ptr);
    $cmp5 = ($3|0)==($current_ptr|0);
    if (!($cmp5)) {
     store4($path_dynamic_ptr_to_dst_ptr,$path_below);
     $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
     $4 = load4($is_dst_type_derived_from_static_type);
     $cmp11 = ($4|0)==(4);
     if ($cmp11) {
      break;
     }
     $found_our_static_ptr = ((($info)) + 52|0);
     store1($found_our_static_ptr,0);
     $found_any_static_type = ((($info)) + 53|0);
     store1($found_any_static_type,0);
     $5 = load4($__base_type);
     $vtable = load4($5);
     $vfn = ((($vtable)) + 20|0);
     $6 = load4($vfn);
     FUNCTION_TABLE_viiiiii[$6 & 3]($5,$info,$current_ptr,$current_ptr,1,$use_strcmp);
     $7 = load1($found_any_static_type);
     $tobool16 = ($7<<24>>24)==(0);
     if ($tobool16) {
      $is_dst_type_derived_from_static_type13$0$off032 = 4;
      label = 11;
     } else {
      $8 = load1($found_our_static_ptr);
      $not$tobool19 = ($8<<24>>24)==(0);
      if ($not$tobool19) {
       $is_dst_type_derived_from_static_type13$0$off032 = 3;
       label = 11;
      } else {
       $is_dst_type_derived_from_static_type13$0$off033 = 3;
      }
     }
     if ((label|0) == 11) {
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $9 = load4($number_to_dst_ptr);
      $add = (($9) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $number_to_static_ptr = ((($info)) + 36|0);
      $10 = load4($number_to_static_ptr);
      $cmp26 = ($10|0)==(1);
      if ($cmp26) {
       $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
       $11 = load4($path_dst_ptr_to_static_ptr);
       $cmp27 = ($11|0)==(2);
       if ($cmp27) {
        $search_done = ((($info)) + 54|0);
        store1($search_done,1);
        $is_dst_type_derived_from_static_type13$0$off033 = $is_dst_type_derived_from_static_type13$0$off032;
       } else {
        $is_dst_type_derived_from_static_type13$0$off033 = $is_dst_type_derived_from_static_type13$0$off032;
       }
      } else {
       $is_dst_type_derived_from_static_type13$0$off033 = $is_dst_type_derived_from_static_type13$0$off032;
      }
     }
     store4($is_dst_type_derived_from_static_type,$is_dst_type_derived_from_static_type13$0$off033);
     break;
    }
   }
   $cmp7 = ($path_below|0)==(1);
   if ($cmp7) {
    store4($path_dynamic_ptr_to_dst_ptr,1);
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
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $call = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($info,$adjustedPtr,$path_below);
 } else {
  $__base_type = ((($this)) + 8|0);
  $1 = load4($__base_type);
  $vtable = load4($1);
  $vfn = ((($vtable)) + 28|0);
  $2 = load4($vfn);
  FUNCTION_TABLE_viiii[$2 & 7]($1,$info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $call = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $call = (_pthread_key_create((10064|0),(17|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(8982,$vararg_buffer);
  // unreachable;
 }
}
function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv($p) {
 $p = $p|0;
 var $0 = 0, $call = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 _free($p);
 $0 = load4(10064);
 $call = (_pthread_setspecific(($0|0),(0|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(9032,$vararg_buffer);
  // unreachable;
 }
}
function __ZSt9terminatev() {
 var $0 = 0, $1 = i64(), $2 = 0, $and = i64(), $call = 0, $call8 = 0, $cmp = 0, $exception_class = 0, $terminateHandler = 0, $tobool = 0, $tobool1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___cxa_get_globals_fast()|0);
 $tobool = ($call|0)==(0|0);
 if (!($tobool)) {
  $0 = load4($call);
  $tobool1 = ($0|0)==(0|0);
  if (!($tobool1)) {
   $exception_class = ((($0)) + 48|0);
   $1 = load8($exception_class);
   $and = i64_and($1,i64_const(4294967040,4294967295));
   $cmp = i64_eq($and,i64_const(1126902528,1129074247));
   if ($cmp) {
    $terminateHandler = ((($0)) + 12|0);
    $2 = load4($terminateHandler);
    __ZSt11__terminatePFvvE($2);
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
 var $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 FUNCTION_TABLE_v[$func & 3]();
 _abort_message(9085,$vararg_buffer);
 // unreachable;
}
function __ZSt13get_terminatev() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(2044);
 $1 = (($0) + 0)|0;
 store4(2044,$1);
 $2 = $0;
 return ($2|0);
}
function __ZNSt9bad_allocD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9bad_allocD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNKSt9bad_alloc4whatEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (9125|0);
}
function __ZNSt11logic_errorD2Ev($this) {
 $this = $this|0;
 var $__imp_ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(2156));
 $__imp_ = ((($this)) + 4|0);
 __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($__imp_);
 return;
}
function __ZNSt11logic_errorD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt11logic_errorD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNKSt11logic_error4whatEv($this) {
 $this = $this|0;
 var $__imp_$idx = 0, $__imp_$idx$val = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__imp_$idx = ((($this)) + 4|0);
 $__imp_$idx$val = load4($__imp_$idx);
 $call = (__ZNK12_GLOBAL__N_114__libcpp_nmstr5c_strEv($__imp_$idx$val)|0);
 return ($call|0);
}
function __ZNK12_GLOBAL__N_114__libcpp_nmstr5c_strEv($this$0$0$val) {
 $this$0$0$val = $this$0$0$val|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return ($this$0$0$val|0);
}
function __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $add$ptr = 0, $call = 0, $cmp = 0, $this$idx$val = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $this$idx$val = load4($this);
 $call = (__ZNK12_GLOBAL__N_114__libcpp_nmstr5countEv($this$idx$val)|0);
 $0 = load4($call);
 $1 = (($0) + -1)|0;
 store4($call,$1);
 $2 = (($0) + -1)|0;
 $cmp = ($2|0)<(0);
 if ($cmp) {
  $3 = load4($this);
  $add$ptr = ((($3)) + -12|0);
  __ZdlPv($add$ptr);
 }
 return;
}
function __ZNK12_GLOBAL__N_114__libcpp_nmstr5countEv($this$0$0$val) {
 $this$0$0$val = $this$0$0$val|0;
 var $count = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $count = ((($this$0$0$val)) + -4|0);
 return ($count|0);
}
function __ZNSt12out_of_rangeD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt11logic_errorD2Ev($this);
 __ZdlPv($this);
 return;
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
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$thrown_type)|0);
 return ($call|0);
}
function __ZN10__cxxabiv119__pointer_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type,$adjustedPtr) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 $adjustedPtr = $adjustedPtr|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__flags = 0, $__flags4 = 0;
 var $__pointee = 0, $__pointee7 = 0, $and = 0, $call = 0, $call12 = 0, $call8 = 0, $cmp = 0, $cmp19 = 0, $cmp26 = 0, $cmp29 = 0, $dst_ptr_leading_to_static_ptr = 0, $info = 0, $neg = 0, $number_of_dst_type = 0, $path_dst_ptr_to_static_ptr = 0, $retval$0 = 0, $retval$4 = 0, $src2dst_offset = 0, $static_type = 0, $tobool = 0;
 var $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $0 = load4($adjustedPtr);
 $1 = load4($0);
 store4($adjustedPtr,$1);
 $call = (__ZNK10__cxxabiv117__pbase_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type)|0);
 if ($call) {
  $retval$4 = 1;
 } else {
  $2 = ($thrown_type|0)==(0|0);
  if ($2) {
   $retval$4 = 0;
  } else {
   $3 = (___dynamic_cast($thrown_type,1464)|0);
   $cmp = ($3|0)==(0|0);
   if ($cmp) {
    $retval$4 = 0;
   } else {
    $__flags = ((($3)) + 8|0);
    $4 = load4($__flags);
    $__flags4 = ((($this)) + 8|0);
    $5 = load4($__flags4);
    $neg = $5 ^ -1;
    $and = $4 & $neg;
    $tobool = ($and|0)==(0);
    if ($tobool) {
     $__pointee = ((($this)) + 12|0);
     $6 = load4($__pointee);
     $__pointee7 = ((($3)) + 12|0);
     $7 = load4($__pointee7);
     $call8 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($6,$7)|0);
     if ($call8) {
      $retval$4 = 1;
     } else {
      $call12 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($6,1496)|0);
      if ($call12) {
       $retval$4 = 1;
      } else {
       $8 = ($6|0)==(0|0);
       if ($8) {
        $retval$4 = 0;
       } else {
        $9 = (___dynamic_cast($6,1344)|0);
        $cmp19 = ($9|0)==(0|0);
        if ($cmp19) {
         $retval$4 = 0;
        } else {
         $10 = load4($__pointee7);
         $11 = ($10|0)==(0|0);
         if ($11) {
          $retval$4 = 0;
         } else {
          $12 = (___dynamic_cast($10,1344)|0);
          $cmp26 = ($12|0)==(0|0);
          if ($cmp26) {
           $retval$4 = 0;
          } else {
           $13 = ((($info)) + 4|0);
           ; store8($13,i64_const(0,0),4); store8($13+8|0,i64_const(0,0),4); store8($13+16|0,i64_const(0,0),4); store8($13+24|0,i64_const(0,0),4); store8($13+32|0,i64_const(0,0),4); store8($13+40|0,i64_const(0,0),4); store4($13+48|0,0,4);
           store4($info,$12);
           $static_type = ((($info)) + 8|0);
           store4($static_type,$9);
           $src2dst_offset = ((($info)) + 12|0);
           store4($src2dst_offset,-1);
           $number_of_dst_type = ((($info)) + 48|0);
           store4($number_of_dst_type,1);
           $vtable = load4($12);
           $vfn = ((($vtable)) + 28|0);
           $14 = load4($vfn);
           $15 = load4($adjustedPtr);
           FUNCTION_TABLE_viiii[$14 & 7]($12,$info,$15,1);
           $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
           $16 = load4($path_dst_ptr_to_static_ptr);
           $cmp29 = ($16|0)==(1);
           if ($cmp29) {
            $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
            $17 = load4($dst_ptr_leading_to_static_ptr);
            store4($adjustedPtr,$17);
            $retval$0 = 1;
           } else {
            $retval$0 = 0;
           }
           $retval$4 = $retval$0;
          }
         }
        }
       }
      }
     }
    } else {
     $retval$4 = 0;
    }
   }
  }
 }
 STACKTOP = sp;return ($retval$4|0);
}
function __ZNK10__cxxabiv117__pbase_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 var $call = 0, $call2 = 0, $retval$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$thrown_type)|0);
 if ($call) {
  $retval$0 = 1;
 } else {
  $call2 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($thrown_type,1504)|0);
  $retval$0 = $call2;
 }
 return ($retval$0|0);
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
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_count = 0, $__flags = 0, $add$ptr = 0, $and = 0, $and30 = 0, $arraydecay = 0, $call = 0, $cmp = 0, $cmp19 = 0, $cmp40 = 0;
 var $found_any_static_type5 = 0, $found_our_static_ptr2 = 0, $incdec$ptr = 0, $incdec$ptr39 = 0, $p$0 = 0, $path_dst_ptr_to_static_ptr = 0, $search_done = 0, $static_type = 0, $tobool14 = 0, $tobool17 = 0, $tobool22 = 0, $tobool27 = 0, $tobool31 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $found_our_static_ptr2 = ((($info)) + 52|0);
  $1 = load1($found_our_static_ptr2);
  $found_any_static_type5 = ((($info)) + 53|0);
  $2 = load1($found_any_static_type5);
  $arraydecay = ((($this)) + 16|0);
  $__base_count = ((($this)) + 12|0);
  $3 = load4($__base_count);
  $add$ptr = (((($this)) + 16|0) + ($3<<3)|0);
  store1($found_our_static_ptr2,0);
  store1($found_any_static_type5,0);
  __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($arraydecay,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
  $cmp = ($3|0)>(1);
  L4: do {
   if ($cmp) {
    $incdec$ptr = ((($this)) + 24|0);
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    $search_done = ((($info)) + 54|0);
    $__flags = ((($this)) + 8|0);
    $p$0 = $incdec$ptr;
    while(1) {
     $4 = load1($search_done);
     $tobool14 = ($4<<24>>24)==(0);
     if (!($tobool14)) {
      break L4;
     }
     $5 = load1($found_our_static_ptr2);
     $tobool17 = ($5<<24>>24)==(0);
     if ($tobool17) {
      $8 = load1($found_any_static_type5);
      $tobool27 = ($8<<24>>24)==(0);
      if (!($tobool27)) {
       $9 = load4($__flags);
       $and30 = $9 & 1;
       $tobool31 = ($and30|0)==(0);
       if ($tobool31) {
        break L4;
       }
      }
     } else {
      $6 = load4($path_dst_ptr_to_static_ptr);
      $cmp19 = ($6|0)==(1);
      if ($cmp19) {
       break L4;
      }
      $7 = load4($__flags);
      $and = $7 & 2;
      $tobool22 = ($and|0)==(0);
      if ($tobool22) {
       break L4;
      }
     }
     store1($found_our_static_ptr2,0);
     store1($found_any_static_type5,0);
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
  store1($found_our_static_ptr2,$1);
  store1($found_any_static_type5,$2);
 }
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_count = 0, $__flags = 0, $add = 0, $add$ptr = 0, $add$ptr64 = 0, $and = 0, $and35 = 0, $and73 = 0, $and88 = 0, $arraydecay = 0, $call = 0, $call3 = 0, $cmp = 0, $cmp100 = 0, $cmp106 = 0;
 var $cmp11 = 0, $cmp115 = 0, $cmp121 = 0, $cmp16 = 0, $cmp164 = 0, $cmp27 = 0, $cmp44 = 0, $cmp46 = 0, $cmp5 = 0, $cmp7 = 0, $cmp70 = 0, $cmp77 = 0, $cmp85 = 0, $cmp97 = 0, $does_dst_type_point_to_our_static_type$0$off0$lcssa = 0, $does_dst_type_point_to_our_static_type$0$off05 = 0, $does_dst_type_point_to_our_static_type$1$off0 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $found_any_static_type = 0;
 var $found_our_static_ptr = 0, $incdec$ptr = 0, $incdec$ptr105 = 0, $incdec$ptr120 = 0, $incdec$ptr69 = 0, $incdec$ptr84 = 0, $is_dst_type_derived_from_static_type = 0, $is_dst_type_derived_from_static_type13$0$off07 = 0, $is_dst_type_derived_from_static_type13$1$off0 = 0, $is_dst_type_derived_from_static_type13$2$off0 = 0, $is_dst_type_derived_from_static_type13$2$off015 = 0, $is_dst_type_derived_from_static_type13$2$off016 = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $p$06 = 0, $p65$0 = 0, $p65$1 = 0, $p65$2 = 0, $path_dst_ptr_to_static_ptr45 = 0, $path_dynamic_ptr_to_dst_ptr = 0;
 var $search_done48 = 0, $static_type = 0, $tobool111 = 0, $tobool18 = 0, $tobool22 = 0, $tobool25 = 0, $tobool30 = 0, $tobool36 = 0, $tobool74 = 0, $tobool80 = 0, $tobool89 = 0, $tobool93 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 L1: do {
  if ($call) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi($info,$current_ptr,$path_below);
  } else {
   $1 = load4($info);
   $call3 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$1)|0);
   $__base_count = ((($this)) + 12|0);
   $path_dst_ptr_to_static_ptr45 = ((($info)) + 24|0);
   $number_to_static_ptr = ((($info)) + 36|0);
   $search_done48 = ((($info)) + 54|0);
   $__flags = ((($this)) + 8|0);
   $arraydecay = ((($this)) + 16|0);
   if (!($call3)) {
    $16 = load4($__base_count);
    $add$ptr64 = (((($this)) + 16|0) + ($16<<3)|0);
    __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($arraydecay,$info,$current_ptr,$path_below,$use_strcmp);
    $incdec$ptr69 = ((($this)) + 24|0);
    $cmp70 = ($16|0)>(1);
    if (!($cmp70)) {
     break;
    }
    $17 = load4($__flags);
    $and73 = $17 & 2;
    $tobool74 = ($and73|0)==(0);
    if ($tobool74) {
     $18 = load4($number_to_static_ptr);
     $cmp77 = ($18|0)==(1);
     if ($cmp77) {
      $p65$0 = $incdec$ptr69;
     } else {
      $and88 = $17 & 1;
      $tobool89 = ($and88|0)==(0);
      if ($tobool89) {
       $p65$2 = $incdec$ptr69;
       while(1) {
        $23 = load1($search_done48);
        $tobool111 = ($23<<24>>24)==(0);
        if (!($tobool111)) {
         break L1;
        }
        $24 = load4($number_to_static_ptr);
        $cmp115 = ($24|0)==(1);
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
      } else {
       $p65$1 = $incdec$ptr69;
      }
      while(1) {
       $20 = load1($search_done48);
       $tobool93 = ($20<<24>>24)==(0);
       if (!($tobool93)) {
        break L1;
       }
       $21 = load4($number_to_static_ptr);
       $cmp97 = ($21|0)==(1);
       if ($cmp97) {
        $22 = load4($path_dst_ptr_to_static_ptr45);
        $cmp100 = ($22|0)==(1);
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
    } else {
     $p65$0 = $incdec$ptr69;
    }
    while(1) {
     $19 = load1($search_done48);
     $tobool80 = ($19<<24>>24)==(0);
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
   $2 = load4($dst_ptr_leading_to_static_ptr);
   $cmp = ($2|0)==($current_ptr|0);
   $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
   if (!($cmp)) {
    $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
    $3 = load4($dst_ptr_not_leading_to_static_ptr);
    $cmp5 = ($3|0)==($current_ptr|0);
    if (!($cmp5)) {
     store4($path_dynamic_ptr_to_dst_ptr,$path_below);
     $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
     $4 = load4($is_dst_type_derived_from_static_type);
     $cmp11 = ($4|0)==(4);
     if ($cmp11) {
      break;
     }
     $5 = load4($__base_count);
     $add$ptr = (((($this)) + 16|0) + ($5<<3)|0);
     $found_our_static_ptr = ((($info)) + 52|0);
     $found_any_static_type = ((($info)) + 53|0);
     $cmp164 = ($5|0)>(0);
     L29: do {
      if ($cmp164) {
       $does_dst_type_point_to_our_static_type$0$off05 = 0;$is_dst_type_derived_from_static_type13$0$off07 = 0;$p$06 = $arraydecay;
       L30: while(1) {
        store1($found_our_static_ptr,0);
        store1($found_any_static_type,0);
        __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($p$06,$info,$current_ptr,$current_ptr,1,$use_strcmp);
        $6 = load1($search_done48);
        $tobool18 = ($6<<24>>24)==(0);
        if (!($tobool18)) {
         $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$2$off0 = $is_dst_type_derived_from_static_type13$0$off07;
         break;
        }
        $7 = load1($found_any_static_type);
        $tobool22 = ($7<<24>>24)==(0);
        do {
         if ($tobool22) {
          $does_dst_type_point_to_our_static_type$1$off0 = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$1$off0 = $is_dst_type_derived_from_static_type13$0$off07;
         } else {
          $8 = load1($found_our_static_ptr);
          $tobool25 = ($8<<24>>24)==(0);
          if ($tobool25) {
           $11 = load4($__flags);
           $and35 = $11 & 1;
           $tobool36 = ($and35|0)==(0);
           if ($tobool36) {
            $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$2$off0 = 1;
            break L30;
           } else {
            $does_dst_type_point_to_our_static_type$1$off0 = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$1$off0 = 1;
            break;
           }
          }
          $9 = load4($path_dst_ptr_to_static_ptr45);
          $cmp27 = ($9|0)==(1);
          if ($cmp27) {
           label = 22;
           break L29;
          }
          $10 = load4($__flags);
          $and = $10 & 2;
          $tobool30 = ($and|0)==(0);
          if ($tobool30) {
           label = 22;
           break L29;
          } else {
           $does_dst_type_point_to_our_static_type$1$off0 = 1;$is_dst_type_derived_from_static_type13$1$off0 = 1;
          }
         }
        } while(0);
        $incdec$ptr = ((($p$06)) + 8|0);
        $cmp16 = ($incdec$ptr>>>0)<($add$ptr>>>0);
        if ($cmp16) {
         $does_dst_type_point_to_our_static_type$0$off05 = $does_dst_type_point_to_our_static_type$1$off0;$is_dst_type_derived_from_static_type13$0$off07 = $is_dst_type_derived_from_static_type13$1$off0;$p$06 = $incdec$ptr;
        } else {
         $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$1$off0;$is_dst_type_derived_from_static_type13$2$off0 = $is_dst_type_derived_from_static_type13$1$off0;
         break;
        }
       }
       if ($does_dst_type_point_to_our_static_type$0$off0$lcssa) {
        $is_dst_type_derived_from_static_type13$2$off016 = $is_dst_type_derived_from_static_type13$2$off0;
        label = 21;
       } else {
        $is_dst_type_derived_from_static_type13$2$off015 = $is_dst_type_derived_from_static_type13$2$off0;
        label = 18;
       }
      } else {
       $is_dst_type_derived_from_static_type13$2$off015 = 0;
       label = 18;
      }
     } while(0);
     if ((label|0) == 18) {
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $12 = load4($number_to_dst_ptr);
      $add = (($12) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $13 = load4($number_to_static_ptr);
      $cmp44 = ($13|0)==(1);
      if ($cmp44) {
       $14 = load4($path_dst_ptr_to_static_ptr45);
       $cmp46 = ($14|0)==(2);
       if ($cmp46) {
        store1($search_done48,1);
        if ($is_dst_type_derived_from_static_type13$2$off015) {
         label = 22;
        } else {
         $15 = 4;
        }
       } else {
        $is_dst_type_derived_from_static_type13$2$off016 = $is_dst_type_derived_from_static_type13$2$off015;
        label = 21;
       }
      } else {
       $is_dst_type_derived_from_static_type13$2$off016 = $is_dst_type_derived_from_static_type13$2$off015;
       label = 21;
      }
     }
     if ((label|0) == 21) {
      if ($is_dst_type_derived_from_static_type13$2$off016) {
       label = 22;
      } else {
       $15 = 4;
      }
     }
     if ((label|0) == 22) {
      $15 = 3;
     }
     store4($is_dst_type_derived_from_static_type,$15);
     break;
    }
   }
   $cmp7 = ($path_below|0)==(1);
   if ($cmp7) {
    store4($path_dynamic_ptr_to_dst_ptr,1);
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
 var $0 = 0, $1 = 0, $2 = 0, $__base_count = 0, $add$ptr = 0, $arraydecay = 0, $call = 0, $cmp = 0, $cmp7 = 0, $incdec$ptr = 0, $incdec$ptr6 = 0, $p$0 = 0, $search_done = 0, $static_type = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 L1: do {
  if ($call) {
   __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($info,$adjustedPtr,$path_below);
  } else {
   $arraydecay = ((($this)) + 16|0);
   $__base_count = ((($this)) + 12|0);
   $1 = load4($__base_count);
   $add$ptr = (((($this)) + 16|0) + ($1<<3)|0);
   __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($arraydecay,$info,$adjustedPtr,$path_below);
   $cmp = ($1|0)>(1);
   if ($cmp) {
    $incdec$ptr = ((($this)) + 24|0);
    $search_done = ((($info)) + 54|0);
    $p$0 = $incdec$ptr;
    while(1) {
     __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($p$0,$info,$adjustedPtr,$path_below);
     $2 = load1($search_done);
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
 $0 = load4($__offset_flags);
 $shr = $0 >> 8;
 $and = $0 & 1;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $offset_to_base$0 = $shr;
 } else {
  $1 = load4($adjustedPtr);
  $add$ptr = (($1) + ($shr)|0);
  $2 = load4($add$ptr);
  $offset_to_base$0 = $2;
 }
 $3 = load4($this);
 $vtable3 = load4($3);
 $vfn = ((($vtable3)) + 28|0);
 $4 = load4($vfn);
 $add$ptr4 = (($adjustedPtr) + ($offset_to_base$0)|0);
 $and6 = $0 & 2;
 $tobool7 = ($and6|0)!=(0);
 $cond = $tobool7 ? $path_below : 2;
 FUNCTION_TABLE_viiii[$4 & 7]($3,$info,$add$ptr4,$cond);
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
 $0 = load4($__offset_flags);
 $shr = $0 >> 8;
 $and = $0 & 1;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $offset_to_base$0 = $shr;
 } else {
  $1 = load4($current_ptr);
  $add$ptr = (($1) + ($shr)|0);
  $2 = load4($add$ptr);
  $offset_to_base$0 = $2;
 }
 $3 = load4($this);
 $vtable3 = load4($3);
 $vfn = ((($vtable3)) + 20|0);
 $4 = load4($vfn);
 $add$ptr4 = (($current_ptr) + ($offset_to_base$0)|0);
 $and6 = $0 & 2;
 $tobool7 = ($and6|0)!=(0);
 $cond = $tobool7 ? $path_below : 2;
 FUNCTION_TABLE_viiiiii[$4 & 3]($3,$info,$dst_ptr,$add$ptr4,$cond,$use_strcmp);
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
 $0 = load4($__offset_flags);
 $shr = $0 >> 8;
 $and = $0 & 1;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $offset_to_base$0 = $shr;
 } else {
  $1 = load4($current_ptr);
  $add$ptr = (($1) + ($shr)|0);
  $2 = load4($add$ptr);
  $offset_to_base$0 = $2;
 }
 $3 = load4($this);
 $vtable3 = load4($3);
 $vfn = ((($vtable3)) + 24|0);
 $4 = load4($vfn);
 $add$ptr4 = (($current_ptr) + ($offset_to_base$0)|0);
 $and6 = $0 & 2;
 $tobool7 = ($and6|0)!=(0);
 $cond = $tobool7 ? $path_below : 2;
 FUNCTION_TABLE_viiiii[$4 & 3]($3,$info,$add$ptr4,$cond,$use_strcmp);
 return;
}
function __ZNSt9bad_allocC2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(2136));
 return;
}
function __ZSt15get_new_handlerv() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(10068);
 $1 = (($0) + 0)|0;
 store4(10068,$1);
 $2 = $0;
 return ($2|0);
}
function ___cxa_can_catch($catchType,$excpType,$thrown) {
 $catchType = $catchType|0;
 $excpType = $excpType|0;
 $thrown = $thrown|0;
 var $0 = 0, $1 = 0, $2 = 0, $call = 0, $conv = 0, $temp = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $temp = sp;
 $0 = load4($thrown);
 store4($temp,$0);
 $vtable = load4($catchType);
 $vfn = ((($vtable)) + 16|0);
 $1 = load4($vfn);
 $call = (FUNCTION_TABLE_iiii[$1 & 31]($catchType,$excpType,$temp)|0);
 $conv = $call&1;
 if ($call) {
  $2 = load4($temp);
  store4($thrown,$2);
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
  $1 = (___dynamic_cast($type,1464)|0);
  $phitmp = ($1|0)!=(0|0);
  $2 = $phitmp;
 }
 $conv = $2&1;
 return ($conv|0);
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
function _llvm_bswap_i32(x) {
    x = x|0;
    return (((x&0xff)<<24) | (((x>>8)&0xff)<<16) | (((x>>16)&0xff)<<8) | (x>>>24))|0;
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
  
  return FUNCTION_TABLE_i[index&3]()|0;
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
  return FUNCTION_TABLE_ii[index&15](a1|0)|0;
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&7](a1|0,a2|0,a3|0);
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
function b11(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; abort(11);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorIjNS3_9allocatorIjEEEEjES2_S9_JjEE6invokeEPSB_PS7_j,__ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3setERS6_jRKj,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKbEE6invokeEPFjSA_SC_EPNS0_11BindingTypeIS8_EUt_Eb,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKjEE6invokeEPFjSA_SC_EPNS0_11BindingTypeIS8_EUt_Ej,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEESA_EE6invokeEPFjSA_SA_EPNS0_11BindingTypeIS8_EUt_ESH_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_3mapIS8_S8_NS2_4lessIS8_EENS6_INS2_4pairIS9_S8_EEEEEEEE6invokeEPFjSA_SJ_EPNS0_11BindingTypeIS8_EUt_EPSH_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SF_EPNS0_11BindingTypeIS8_EUt_EPSD_,__Z5h_sdnRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_3mapIS5_S5_NS_4lessIS5_EENS3_INS_4pairIS6_S5_EEEEEERKj,__Z5h_sdtRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_3mapIS5_S5_NS_4lessIS5_EENS3_INS_4pairIS6_S5_EEEEEES7_,__Z5h_sdcRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_3mapIS5_S5_NS_4lessIS5_EENS3_INS_4pairIS6_S5_EEEEEERKNS_6vectorIjNS3_IjEEEE,__Z5h_elmRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_3mapIS5_S5_NS_4lessIS5_EENS3_INS_4pairIS6_S5_EEEEEEi,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib];
var FUNCTION_TABLE_i = [b2,__ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newINSt3__26vectorIjNS2_9allocatorIjEEEEJEEEPT_DpOT0_,b2];
var FUNCTION_TABLE_vi = [b3,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,__ZNSt11logic_errorD2Ev,__ZNSt11logic_errorD0Ev,__ZNSt12out_of_rangeD0Ev,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,__ZN10__cxxabiv119__pointer_type_infoD0Ev,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,__ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__26vectorIjNS2_9allocatorIjEEEEEEvPT_,__Z14deleteVNodePtrRKj,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3];
var FUNCTION_TABLE_vii = [b4,__ZNSt3__26vectorIjNS_9allocatorIjEEE9push_backERKj,__ZN10emscripten8internal7InvokerIvJRKjEE6invokeEPFvS3_Ej,__Z14removeChildPtrRKjS0_,__Z8patchPtrjj,b4,b4,b4];
var FUNCTION_TABLE_ii = [b5,___stdio_close,__ZNKSt9bad_alloc4whatEv,__ZNKSt11logic_error4whatEv,__ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE,__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv,__ZN10emscripten8internal13getActualTypeINSt3__26vectorIjNS2_9allocatorIjEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__26vectorIjNS2_9allocatorIjEEEEJEE6invokeEPFS7_vE,__ZNKSt3__26vectorIjNS_9allocatorIjEEE4sizeEv,__Z3h_sRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE,__Z7getNodeRKj,b5,b5,b5,b5];
var FUNCTION_TABLE_viii = [b6,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvRKjEvPS6_JS8_EE6invokeERKSA_SB_j,__ZNSt3__26vectorIjNS_9allocatorIjEEE6resizeEjRKj,__ZN10emscripten8internal7InvokerIvJRKjS3_EE6invokeEPFvS3_S3_Ejj,__Z15replaceChildPtrRKjS0_S0_,__ZN10emscripten8internal7InvokerIvJjjEE6invokeEPFvjjEjj,b6];
var FUNCTION_TABLE_v = [b7,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b7];
var FUNCTION_TABLE_iiiii = [b8,__ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorIjNS2_9allocatorIjEEEEjRKjEbS7_JjS9_EE6invokeEPSB_PS6_jj,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_3mapIS8_S8_NS2_4lessIS8_EENS6_INS2_4pairIS9_S8_EEEEEERKjEE6invokeEPFjSA_SJ_SL_EPNS0_11BindingTypeIS8_EUt_EPSH_j,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_3mapIS8_S8_NS2_4lessIS8_EENS6_INS2_4pairIS9_S8_EEEEEESA_EE6invokeEPFjSA_SJ_SA_EPNS0_11BindingTypeIS8_EUt_EPSH_SQ_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_3mapIS8_S8_NS2_4lessIS8_EENS6_INS2_4pairIS9_S8_EEEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SJ_SO_EPNS0_11BindingTypeIS8_EUt_EPSH_PSM_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEERKNS2_3mapIS8_S8_NS2_4lessIS8_EENS6_INS2_4pairIS9_S8_EEEEEEiEE6invokeEPFjSA_SJ_iEPNS0_11BindingTypeIS8_EUt_EPSH_i,b8,b8];
var FUNCTION_TABLE_viiiiii = [b9,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib];
var FUNCTION_TABLE_iii = [b10,__ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEKFjvEjPKS6_JEE6invokeERKS8_SA_,__ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3getERKS6_j,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEE6invokeEPFjSA_EPNS0_11BindingTypeIS8_EUt_E,__Z4h_tiRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKb,__Z4h_snRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKj,__Z4h_stRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_,__Z4h_sdRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_3mapIS5_S5_NS_4lessIS5_EENS3_INS_4pairIS6_S5_EEEEEE,__Z4h_scRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERKNS_6vectorIjNS3_IjEEEE,__ZN10emscripten8internal7InvokerIiJRKjEE6invokeEPFiS3_Ej,b10,b10,b10,b10];
var FUNCTION_TABLE_viiii = [b11,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvjRKjEvPS6_JjS8_EE6invokeERKSA_SB_jj,__ZN10emscripten8internal7InvokerIvJRKjS3_S3_EE6invokeEPFvS3_S3_S3_Ejjj,b11];

  return { _sbrk: _sbrk, ___cxa_can_catch: ___cxa_can_catch, _free: _free, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _memmove: _memmove, _memset: _memset, _malloc: _malloc, _emscripten_get_global_libc: _emscripten_get_global_libc, _memcpy: _memcpy, ___getTypeName: ___getTypeName, _llvm_bswap_i32: _llvm_bswap_i32, __GLOBAL__sub_I_asm_dom_cpp: __GLOBAL__sub_I_asm_dom_cpp, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, runPostSets: runPostSets, _emscripten_replace_memory: _emscripten_replace_memory, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setTempRet0: setTempRet0, getTempRet0: getTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_i: dynCall_i, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
;