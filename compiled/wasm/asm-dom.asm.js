Module["asm"] =  (function(global, env, buffer) {
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
  var throwInternalError=env.throwInternalError;
  var get_first_emval=env.get_first_emval;
  var getLiveInheritedInstances=env.getLiveInheritedInstances;
  var ___assert_fail=env.___assert_fail;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var ClassHandle=env.ClassHandle;
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
  var __embind_register_class_property=env.__embind_register_class_property;
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
  var nonConstNoSmartPtrRawPointerToWireType=env.nonConstNoSmartPtrRawPointerToWireType;
  var _abort=env._abort;
  var throwBindingError=env.throwBindingError;
  var getTypeName=env.getTypeName;
  var validateThis=env.validateThis;
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
  var genericPointerToWireType=env.genericPointerToWireType;
  var registerType=env.registerType;
  var ___cxa_throw=env.___cxa_throw;
  var count_emval_handles=env.count_emval_handles;
  var requireFunction=env.requireFunction;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

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

function __Z5addNS5VNode($vnode) {
 $vnode = $vnode|0;
 var $$pn$i = 0, $$pn24$i = 0, $$pre = 0, $$pre$i = 0, $$size$i = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i26 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin$sroa$0$020 = 0, $__begin_$i = 0, $__cap_$i$i = 0, $__cap_$i$i$i = 0, $__end_$i = 0, $__size_$i$i = 0, $__size_$i$i$i = 0, $__size_$i$i$i2 = 0;
 var $__size_$i2$i$i = 0, $__size_$i3$i$i = 0, $add$i$i$i = 0, $agg$tmp = 0, $and$i = 0, $and$i$i$i = 0, $and$i$i$i27 = 0, $and3$i = 0, $arrayidx$i = 0, $arrayidx$i28 = 0, $arrayidx$i35 = 0, $call$i = 0, $call$i7 = 0, $call$lcssa$i = 0, $call$lcssa$i12 = 0, $call1$i = 0, $call1$i2 = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i$i = 0;
 var $cmp$i$i$i$i25 = 0, $cmp$i$i8 = 0, $cmp$i13 = 0, $cmp$i36 = 0, $cmp$i3679 = 0, $cmp$i42$i = 0, $cmp$i6 = 0, $cmp$i8 = 0, $cmp1$i = 0, $cmp1$i8 = 0, $cmp12$i = 0, $cmp12$i3 = 0, $cmp23$i = 0, $cmp41$i = 0, $cmp5$i = 0, $cmp8$i = 0, $cond$i$i22$i = 0, $cond$i$i23 = 0, $cond$i$i5 = 0, $cond$i$i61 = 0;
 var $cond$i19$i = 0, $cond48$i = 0, $conv$i$i$i = 0, $conv$i$i29$i = 0, $dec$i = 0, $incdec$ptr$i = 0, $incdec$ptr$i37 = 0, $incdec$ptr$i50 = 0, $incdec$ptr1323$i = 0, $incdec$ptr3$i = 0, $incdec$ptr7$i = 0, $l$012$i81 = 0, $lnot$i = 0, $lnot$i19 = 0, $lnot$i54 = 0, $mul$i = 0, $n$addr$011$i82 = 0, $neg$i = 0, $ns = 0, $or$cond = 0;
 var $or$i$i = 0, $phitmp$i = 0, $phitmp$i$i = 0, $r$013$i80 = 0, $rem$i = 0, $retval$0$i = 0, $s$addr$0$lcssa$i = 0, $s$addr$015$i = 0, $s$addr$1$lcssa$i = 0, $sub$i = 0, $sub$i53 = 0, $sub$ptr$lhs$cast15$i = 0, $sub2$i = 0, $tobool = 0, $tobool$i = 0, $tobool$i$i$i = 0, $tobool$i$i$i3 = 0, $tobool$i$i28$i = 0, $tobool$i1 = 0, $tobool$i5 = 0;
 var $tobool$i51 = 0, $tobool1$i = 0, $tobool10$i55 = 0, $tobool1021$i = 0, $w$0$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $agg$tmp = sp;
 $ns = ((($vnode)) + 80|0);
 L1: do {
  if (((((2098) & 3)|0)==(0))) {
   $s$addr$0$lcssa$i = 2098;
   label = 4;
  } else {
   $24 = (2098);$s$addr$015$i = 2098;
   while(1) {
    $0 = load1($s$addr$015$i);
    $tobool1$i = ($0<<24>>24)==(0);
    if ($tobool1$i) {
     $$pn$i = $24;
     break L1;
    }
    $incdec$ptr$i50 = ((($s$addr$015$i)) + 1|0);
    $1 = $incdec$ptr$i50;
    $rem$i = $1 & 3;
    $tobool$i51 = ($rem$i|0)==(0);
    if ($tobool$i51) {
     $s$addr$0$lcssa$i = $incdec$ptr$i50;
     label = 4;
     break;
    } else {
     $24 = $1;$s$addr$015$i = $incdec$ptr$i50;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $w$0$i = $s$addr$0$lcssa$i;
  while(1) {
   $2 = load4($w$0$i);
   $sub$i53 = (($2) + -16843009)|0;
   $neg$i = $2 & -2139062144;
   $and$i = $neg$i ^ -2139062144;
   $and3$i = $and$i & $sub$i53;
   $lnot$i54 = ($and3$i|0)==(0);
   $incdec$ptr7$i = ((($w$0$i)) + 4|0);
   if ($lnot$i54) {
    $w$0$i = $incdec$ptr7$i;
   } else {
    break;
   }
  }
  $3 = $2&255;
  $tobool1021$i = ($3<<24>>24)==(0);
  if ($tobool1021$i) {
   $s$addr$1$lcssa$i = $w$0$i;
  } else {
   $$pn24$i = $w$0$i;
   while(1) {
    $incdec$ptr1323$i = ((($$pn24$i)) + 1|0);
    $$pre$i = load1($incdec$ptr1323$i);
    $tobool10$i55 = ($$pre$i<<24>>24)==(0);
    if ($tobool10$i55) {
     $s$addr$1$lcssa$i = $incdec$ptr1323$i;
     break;
    } else {
     $$pn24$i = $incdec$ptr1323$i;
    }
   }
  }
  $sub$ptr$lhs$cast15$i = $s$addr$1$lcssa$i;
  $$pn$i = $sub$ptr$lhs$cast15$i;
 }
 $retval$0$i = (($$pn$i) - (2098))|0;
 $__size_$i$i$i2 = ((($ns)) + 11|0);
 $4 = load1($__size_$i$i$i2);
 $tobool$i$i$i3 = ($4<<24>>24)<(0);
 if ($tobool$i$i$i3) {
  $__cap_$i$i$i = ((($vnode)) + 88|0);
  $5 = load4($__cap_$i$i$i);
  $and$i$i$i = $5 & 2147483647;
  $phitmp$i$i = (($and$i$i$i) + -1)|0;
  $cond$i$i5 = $phitmp$i$i;
 } else {
  $cond$i$i5 = 10;
 }
 $cmp$i6 = ($retval$0$i>>>0)>($cond$i$i5>>>0);
 do {
  if ($cmp$i6) {
   $sub$i = (($retval$0$i) - ($cond$i$i5))|0;
   $sub2$i = (-18 - ($cond$i$i5))|0;
   $cmp$i13 = ($sub2$i>>>0)<($sub$i>>>0);
   if ($cmp$i13) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($tobool$i$i$i3) {
    $8 = load4($ns);
    $cond$i$i23 = $8;
   } else {
    $cond$i$i23 = $ns;
   }
   $cmp5$i = ($cond$i$i5>>>0)<(2147483623);
   if ($cmp5$i) {
    $mul$i = $cond$i$i5 << 1;
    $cmp$i$i$i$i25 = ($retval$0$i>>>0)<($mul$i>>>0);
    $$sroa$speculated$i26 = $cmp$i$i$i$i25 ? $mul$i : $retval$0$i;
    $cmp$i42$i = ($$sroa$speculated$i26>>>0)<(11);
    $add$i$i$i = (($$sroa$speculated$i26) + 16)|0;
    $and$i$i$i27 = $add$i$i$i & -16;
    $phitmp$i = $cmp$i42$i ? 11 : $and$i$i$i27;
    $cond48$i = $phitmp$i;
   } else {
    $cond48$i = -17;
   }
   $cmp$i = ($cond48$i|0)==(0);
   $$size$i = $cmp$i ? 1 : $cond48$i;
   $call1$i = (_malloc($$size$i)|0);
   $cmp12$i = ($call1$i|0)==(0|0);
   L30: do {
    if ($cmp12$i) {
     while(1) {
      $9 = load4(7784);
      $10 = (($9) + 0)|0;
      store4(7784,$10);
      $tobool$i1 = ($9|0)==(0);
      if ($tobool$i1) {
       $call$lcssa$i = 0;
       break L30;
      }
      $11 = $9;
      FUNCTION_TABLE_v[$11 & 3]();
      $call$i = (_malloc($$size$i)|0);
      $cmp1$i = ($call$i|0)==(0|0);
      if (!($cmp1$i)) {
       $call$lcssa$i = $call$i;
       break;
      }
     }
    } else {
     $call$lcssa$i = $call1$i;
    }
   } while(0);
   $cmp23$i = ($retval$0$i|0)==(0);
   if (!($cmp23$i)) {
    _memcpy(($call$lcssa$i|0),(2098|0),($retval$0$i|0))|0;
   }
   $cmp41$i = ($cond$i$i5|0)==(10);
   if (!($cmp41$i)) {
    _free($cond$i$i23);
   }
   store4($ns,$call$lcssa$i);
   $or$i$i = $cond48$i | -2147483648;
   $__cap_$i$i = ((($vnode)) + 88|0);
   store4($__cap_$i$i,$or$i$i);
   $__size_$i$i = ((($vnode)) + 84|0);
   store4($__size_$i$i,$retval$0$i);
   $arrayidx$i28 = (($call$lcssa$i) + ($retval$0$i)|0);
   store1($arrayidx$i28,0);
  } else {
   if ($tobool$i$i$i3) {
    $6 = load4($ns);
    $cond$i19$i = $6;
   } else {
    $cond$i19$i = $ns;
   }
   $cmp$i$i8 = ($retval$0$i|0)==(0);
   if (!($cmp$i$i8)) {
    _memcpy(($cond$i19$i|0),(2098|0),($retval$0$i|0))|0;
   }
   $arrayidx$i = (($cond$i19$i) + ($retval$0$i)|0);
   store1($arrayidx$i,0);
   $7 = load1($__size_$i$i$i2);
   $tobool$i$i28$i = ($7<<24>>24)<(0);
   if ($tobool$i$i28$i) {
    $__size_$i2$i$i = ((($vnode)) + 84|0);
    store4($__size_$i2$i$i,$retval$0$i);
    break;
   } else {
    $conv$i$i29$i = $retval$0$i&255;
    store1($__size_$i$i$i2,$conv$i$i29$i);
    break;
   }
  }
 } while(0);
 $call1$i2 = (_malloc(16)|0);
 $cmp12$i3 = ($call1$i2|0)==(0|0);
 L53: do {
  if ($cmp12$i3) {
   while(1) {
    $12 = load4(7784);
    $13 = (($12) + 0)|0;
    store4(7784,$13);
    $tobool$i5 = ($12|0)==(0);
    if ($tobool$i5) {
     $call$lcssa$i12 = 0;
     break L53;
    }
    $14 = $12;
    FUNCTION_TABLE_v[$14 & 3]();
    $call$i7 = (_malloc(16)|0);
    $cmp1$i8 = ($call$i7|0)==(0|0);
    if (!($cmp1$i8)) {
     $call$lcssa$i12 = $call$i7;
     break;
    }
   }
  } else {
   $call$lcssa$i12 = $call1$i2;
  }
 } while(0);
 ; store8($call$lcssa$i12,load8(2125,1),1); store4($call$lcssa$i12+8 | 0,load4(2125+8 | 0,1),1); store1($call$lcssa$i12+12 | 0,load1(2125+12 | 0,1),1);
 $arrayidx$i35 = ((($call$lcssa$i12)) + 13|0);
 store1($arrayidx$i35,0);
 $__size_$i$i$i = ((($vnode)) + 11|0);
 $15 = load1($__size_$i$i$i);
 $tobool$i$i$i = ($15<<24>>24)<(0);
 if ($tobool$i$i$i) {
  $__size_$i3$i$i = ((($vnode)) + 4|0);
  $16 = load4($__size_$i3$i$i);
  $17 = load4($vnode);
  $cond$i$i22$i = $17;$cond$i$i61 = $16;
 } else {
  $conv$i$i$i = $15&255;
  $cond$i$i22$i = $vnode;$cond$i$i61 = $conv$i$i$i;
 }
 $cmp$i$i$i$i = ($cond$i$i61>>>0)>(13);
 $$sroa$speculated$i = $cmp$i$i$i$i ? 13 : $cond$i$i61;
 $cmp$i$i = ($$sroa$speculated$i|0)==(0);
 L62: do {
  if ($cmp$i$i) {
   label = 45;
  } else {
   $18 = load1($cond$i$i22$i);
   $cmp$i3679 = ($18<<24>>24)==(102);
   if ($cmp$i3679) {
    $l$012$i81 = $cond$i$i22$i;$n$addr$011$i82 = $$sroa$speculated$i;$r$013$i80 = $call$lcssa$i12;
    while(1) {
     $dec$i = (($n$addr$011$i82) + -1)|0;
     $incdec$ptr3$i = ((($r$013$i80)) + 1|0);
     $tobool$i = ($dec$i|0)==(0);
     if ($tobool$i) {
      label = 45;
      break L62;
     }
     $incdec$ptr$i37 = ((($l$012$i81)) + 1|0);
     $$pre = load1($incdec$ptr3$i);
     $19 = load1($incdec$ptr$i37);
     $cmp$i36 = ($19<<24>>24)==($$pre<<24>>24);
     if ($cmp$i36) {
      $l$012$i81 = $incdec$ptr$i37;$n$addr$011$i82 = $dec$i;$r$013$i80 = $incdec$ptr3$i;
     } else {
      break;
     }
    }
   }
  }
 } while(0);
 if ((label|0) == 45) {
  $cmp8$i = ($cond$i$i61>>>0)>(12);
  $tobool = $cmp$i$i$i$i ^ 1;
  $or$cond = $cmp8$i & $tobool;
  if ($or$cond) {
   _free($call$lcssa$i12);
   STACKTOP = sp;return;
  }
 }
 $__begin_$i = ((($vnode)) + 108|0);
 $20 = load4($__begin_$i);
 $__end_$i = ((($vnode)) + 112|0);
 $21 = load4($__end_$i);
 $cmp$i8 = ($20|0)==($21|0);
 _free($call$lcssa$i12);
 if ($cmp$i8) {
  STACKTOP = sp;return;
 }
 $22 = load4($__begin_$i);
 $23 = load4($__end_$i);
 $lnot$i19 = ($22|0)==($23|0);
 if ($lnot$i19) {
  STACKTOP = sp;return;
 } else {
  $__begin$sroa$0$020 = $22;
 }
 while(1) {
  __ZN5VNodeC2ERKS_($agg$tmp,$__begin$sroa$0$020);
  __Z5addNS5VNode($agg$tmp);
  __ZN5VNodeD2Ev($agg$tmp);
  $incdec$ptr$i = ((($__begin$sroa$0$020)) + 120|0);
  $lnot$i = ($incdec$ptr$i|0)==($23|0);
  if ($lnot$i) {
   break;
  } else {
   $__begin$sroa$0$020 = $incdec$ptr$i;
  }
 }
 STACKTOP = sp;return;
}
function __ZN5VNodeC2ERKS_($this,$0) {
 $this = $this|0;
 $0 = $0|0;
 var $$size$i = 0, $$size$i17 = 0, $$size$i3 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $__cap_$i$i = 0, $__cap_$i$i46 = 0, $__cap_$i$i69 = 0, $__p$015$i = 0, $__p$015$i55 = 0, $__p$015$i78 = 0, $__p$016$i = 0, $__p$016$i57 = 0, $__p$016$i80 = 0, $__size_$i$i11 = 0, $__size_$i$i19 = 0, $__size_$i$i36 = 0, $__size_$i$i47 = 0, $__size_$i$i5 = 0, $__size_$i$i70 = 0, $__size_$i12$i = 0, $__size_$i12$i51 = 0, $__size_$i12$i74 = 0;
 var $__size_$i6$i = 0, $__size_$i6$i15 = 0, $__size_$i6$i7 = 0, $add$i$i$i = 0, $add$i$i$i41 = 0, $add$i$i$i64 = 0, $and$i$i$i = 0, $and$i$i$i42 = 0, $and$i$i$i65 = 0, $arrayidx$i = 0, $arrayidx$i58 = 0, $arrayidx$i81 = 0, $call$i = 0, $call$i23 = 0, $call$i9 = 0, $call$lcssa$i = 0, $call$lcssa$i14 = 0, $call$lcssa$i28 = 0, $call1$i = 0, $call1$i18 = 0;
 var $call1$i4 = 0, $children = 0, $children13 = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i53 = 0, $cmp$i$i76 = 0, $cmp$i1 = 0, $cmp$i16 = 0, $cmp$i2 = 0, $cmp$i37 = 0, $cmp$i60 = 0, $cmp1$i = 0, $cmp1$i10 = 0, $cmp1$i24 = 0, $cmp12$i = 0, $cmp12$i19 = 0, $cmp12$i5 = 0, $cmp2$i = 0, $cmp2$i39 = 0;
 var $cmp2$i62 = 0, $conv$i$i = 0, $conv$i$i49 = 0, $conv$i$i72 = 0, $data = 0, $data7 = 0, $handle$i$i = 0, $handle2$i$i = 0, $key = 0, $key3 = 0, $or$i$i = 0, $or$i$i45 = 0, $or$i$i68 = 0, $text = 0, $text4 = 0, $tobool$i = 0, $tobool$i$i16 = 0, $tobool$i$i2 = 0, $tobool$i$i8 = 0, $tobool$i21 = 0;
 var $tobool$i7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 ; store8($this,i64_const(0,0),4); store4($this+8|0,0,4);
 $__size_$i6$i = ((($0)) + 11|0);
 $1 = load1($__size_$i6$i);
 $tobool$i$i2 = ($1<<24>>24)<(0);
 if ($tobool$i$i2) {
  $2 = load4($0);
  $__size_$i$i5 = ((($0)) + 4|0);
  $3 = load4($__size_$i$i5);
  $cmp$i = ($3>>>0)>(4294967279);
  if ($cmp$i) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $cmp2$i = ($3>>>0)<(11);
  if ($cmp2$i) {
   $conv$i$i = $3&255;
   $__size_$i12$i = ((($this)) + 11|0);
   store1($__size_$i12$i,$conv$i$i);
   $cmp$i$i = ($3|0)==(0);
   if ($cmp$i$i) {
    $__p$016$i = $this;
   } else {
    $__p$015$i = $this;
    label = 11;
   }
  } else {
   $add$i$i$i = (($3) + 16)|0;
   $and$i$i$i = $add$i$i$i & -16;
   $cmp$i1 = ($and$i$i$i|0)==(0);
   $$size$i = $cmp$i1 ? 1 : $and$i$i$i;
   $call1$i = (_malloc($$size$i)|0);
   $cmp12$i = ($call1$i|0)==(0|0);
   L9: do {
    if ($cmp12$i) {
     while(1) {
      $4 = load4(7784);
      $5 = (($4) + 0)|0;
      store4(7784,$5);
      $tobool$i = ($4|0)==(0);
      if ($tobool$i) {
       $call$lcssa$i = 0;
       break L9;
      }
      $6 = $4;
      FUNCTION_TABLE_v[$6 & 3]();
      $call$i = (_malloc($$size$i)|0);
      $cmp1$i = ($call$i|0)==(0|0);
      if (!($cmp1$i)) {
       $call$lcssa$i = $call$i;
       break;
      }
     }
    } else {
     $call$lcssa$i = $call1$i;
    }
   } while(0);
   store4($this,$call$lcssa$i);
   $or$i$i = $and$i$i$i | -2147483648;
   $__cap_$i$i = ((($this)) + 8|0);
   store4($__cap_$i$i,$or$i$i);
   $__size_$i$i36 = ((($this)) + 4|0);
   store4($__size_$i$i36,$3);
   $__p$015$i = $call$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($__p$015$i|0),($2|0),($3|0))|0;
   $__p$016$i = $__p$015$i;
  }
  $arrayidx$i = (($__p$016$i) + ($3)|0);
  store1($arrayidx$i,0);
 } else {
  ; store8($this,load8($0,4),4); store4($this+8 | 0,load4($0+8 | 0,4),4);
 }
 $key = ((($this)) + 12|0);
 $key3 = ((($0)) + 12|0);
 ; store8($key,i64_const(0,0),4); store4($key+8|0,0,4);
 $__size_$i6$i7 = ((($key3)) + 11|0);
 $7 = load1($__size_$i6$i7);
 $tobool$i$i8 = ($7<<24>>24)<(0);
 if ($tobool$i$i8) {
  $8 = load4($key3);
  $__size_$i$i11 = ((($0)) + 16|0);
  $9 = load4($__size_$i$i11);
  $cmp$i37 = ($9>>>0)>(4294967279);
  if ($cmp$i37) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $cmp2$i39 = ($9>>>0)<(11);
  if ($cmp2$i39) {
   $conv$i$i49 = $9&255;
   $__size_$i12$i51 = ((($key)) + 11|0);
   store1($__size_$i12$i51,$conv$i$i49);
   $cmp$i$i53 = ($9|0)==(0);
   if ($cmp$i$i53) {
    $__p$016$i57 = $key;
   } else {
    $__p$015$i55 = $key;
    label = 23;
   }
  } else {
   $add$i$i$i41 = (($9) + 16)|0;
   $and$i$i$i42 = $add$i$i$i41 & -16;
   $cmp$i2 = ($and$i$i$i42|0)==(0);
   $$size$i3 = $cmp$i2 ? 1 : $and$i$i$i42;
   $call1$i4 = (_malloc($$size$i3)|0);
   $cmp12$i5 = ($call1$i4|0)==(0|0);
   L27: do {
    if ($cmp12$i5) {
     while(1) {
      $10 = load4(7784);
      $11 = (($10) + 0)|0;
      store4(7784,$11);
      $tobool$i7 = ($10|0)==(0);
      if ($tobool$i7) {
       $call$lcssa$i14 = 0;
       break L27;
      }
      $12 = $10;
      FUNCTION_TABLE_v[$12 & 3]();
      $call$i9 = (_malloc($$size$i3)|0);
      $cmp1$i10 = ($call$i9|0)==(0|0);
      if (!($cmp1$i10)) {
       $call$lcssa$i14 = $call$i9;
       break;
      }
     }
    } else {
     $call$lcssa$i14 = $call1$i4;
    }
   } while(0);
   store4($key,$call$lcssa$i14);
   $or$i$i45 = $and$i$i$i42 | -2147483648;
   $__cap_$i$i46 = ((($this)) + 20|0);
   store4($__cap_$i$i46,$or$i$i45);
   $__size_$i$i47 = ((($this)) + 16|0);
   store4($__size_$i$i47,$9);
   $__p$015$i55 = $call$lcssa$i14;
   label = 23;
  }
  if ((label|0) == 23) {
   _memcpy(($__p$015$i55|0),($8|0),($9|0))|0;
   $__p$016$i57 = $__p$015$i55;
  }
  $arrayidx$i58 = (($__p$016$i57) + ($9)|0);
  store1($arrayidx$i58,0);
 } else {
  ; store8($key,load8($key3,4),4); store4($key+8 | 0,load4($key3+8 | 0,4),4);
 }
 $text = ((($this)) + 24|0);
 $text4 = ((($0)) + 24|0);
 ; store8($text,i64_const(0,0),4); store4($text+8|0,0,4);
 $__size_$i6$i15 = ((($text4)) + 11|0);
 $13 = load1($__size_$i6$i15);
 $tobool$i$i16 = ($13<<24>>24)<(0);
 if (!($tobool$i$i16)) {
  ; store8($text,load8($text4,4),4); store4($text+8 | 0,load4($text4+8 | 0,4),4);
  $data = ((($this)) + 36|0);
  $data7 = ((($0)) + 36|0);
  __ZN9VNodeDataC2ERKS_($data,$data7);
  $handle$i$i = ((($this)) + 104|0);
  $handle2$i$i = ((($0)) + 104|0);
  $19 = load4($handle2$i$i);
  store4($handle$i$i,$19);
  __emval_incref(($19|0));
  $children = ((($this)) + 108|0);
  $children13 = ((($0)) + 108|0);
  __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($children,$children13);
  return;
 }
 $14 = load4($text4);
 $__size_$i$i19 = ((($0)) + 28|0);
 $15 = load4($__size_$i$i19);
 $cmp$i60 = ($15>>>0)>(4294967279);
 if ($cmp$i60) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $cmp2$i62 = ($15>>>0)<(11);
 if ($cmp2$i62) {
  $conv$i$i72 = $15&255;
  $__size_$i12$i74 = ((($text)) + 11|0);
  store1($__size_$i12$i74,$conv$i$i72);
  $cmp$i$i76 = ($15|0)==(0);
  if ($cmp$i$i76) {
   $__p$016$i80 = $text;
  } else {
   $__p$015$i78 = $text;
   label = 35;
  }
 } else {
  $add$i$i$i64 = (($15) + 16)|0;
  $and$i$i$i65 = $add$i$i$i64 & -16;
  $cmp$i16 = ($and$i$i$i65|0)==(0);
  $$size$i17 = $cmp$i16 ? 1 : $and$i$i$i65;
  $call1$i18 = (_malloc($$size$i17)|0);
  $cmp12$i19 = ($call1$i18|0)==(0|0);
  L47: do {
   if ($cmp12$i19) {
    while(1) {
     $16 = load4(7784);
     $17 = (($16) + 0)|0;
     store4(7784,$17);
     $tobool$i21 = ($16|0)==(0);
     if ($tobool$i21) {
      $call$lcssa$i28 = 0;
      break L47;
     }
     $18 = $16;
     FUNCTION_TABLE_v[$18 & 3]();
     $call$i23 = (_malloc($$size$i17)|0);
     $cmp1$i24 = ($call$i23|0)==(0|0);
     if (!($cmp1$i24)) {
      $call$lcssa$i28 = $call$i23;
      break;
     }
    }
   } else {
    $call$lcssa$i28 = $call1$i18;
   }
  } while(0);
  store4($text,$call$lcssa$i28);
  $or$i$i68 = $and$i$i$i65 | -2147483648;
  $__cap_$i$i69 = ((($this)) + 32|0);
  store4($__cap_$i$i69,$or$i$i68);
  $__size_$i$i70 = ((($this)) + 28|0);
  store4($__size_$i$i70,$15);
  $__p$015$i78 = $call$lcssa$i28;
  label = 35;
 }
 if ((label|0) == 35) {
  _memcpy(($__p$015$i78|0),($14|0),($15|0))|0;
  $__p$016$i80 = $__p$015$i78;
 }
 $arrayidx$i81 = (($__p$016$i80) + ($15)|0);
 store1($arrayidx$i81,0);
 $data = ((($this)) + 36|0);
 $data7 = ((($0)) + 36|0);
 __ZN9VNodeDataC2ERKS_($data,$data7);
 $handle$i$i = ((($this)) + 104|0);
 $handle2$i$i = ((($0)) + 104|0);
 $19 = load4($handle2$i$i);
 store4($handle$i$i,$19);
 __emval_incref(($19|0));
 $children = ((($this)) + 108|0);
 $children13 = ((($0)) + 108|0);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($children,$children13);
 return;
}
function __ZN5VNodeD2Ev($this) {
 $this = $this|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__end_$i$i$i = 0, $__size_$i$i = 0, $__size_$i$i2 = 0, $__size_$i$i8 = 0, $cmp$i = 0, $cmp$i$i$i = 0;
 var $cmp$i$i$i2 = 0, $data = 0, $handle$i = 0, $incdec$ptr$i$i$i = 0, $key = 0, $text = 0, $tobool$i$i = 0, $tobool$i$i3 = 0, $tobool$i$i9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 108|0);
 $1 = load4($0);
 $cmp$i = ($1|0)==(0|0);
 if (!($cmp$i)) {
  $__end_$i$i$i = ((($this)) + 112|0);
  $2 = load4($__end_$i$i$i);
  $cmp$i$i$i2 = ($2|0)==($1|0);
  if ($cmp$i$i$i2) {
   $5 = $1;
  } else {
   $3 = $2;
   while(1) {
    $incdec$ptr$i$i$i = ((($3)) + -120|0);
    store4($__end_$i$i$i,$incdec$ptr$i$i$i);
    __ZN5VNodeD2Ev($incdec$ptr$i$i$i);
    $4 = load4($__end_$i$i$i);
    $cmp$i$i$i = ($4|0)==($1|0);
    if ($cmp$i$i$i) {
     break;
    } else {
     $3 = $4;
    }
   }
   $$pre = load4($0);
   $5 = $$pre;
  }
  _free($5);
 }
 $handle$i = ((($this)) + 104|0);
 $6 = load4($handle$i);
 __emval_decref(($6|0));
 $data = ((($this)) + 36|0);
 __ZN9VNodeDataD2Ev($data);
 $text = ((($this)) + 24|0);
 $__size_$i$i2 = ((($text)) + 11|0);
 $7 = load1($__size_$i$i2);
 $tobool$i$i3 = ($7<<24>>24)<(0);
 if ($tobool$i$i3) {
  $8 = load4($text);
  _free($8);
 }
 $key = ((($this)) + 12|0);
 $__size_$i$i8 = ((($key)) + 11|0);
 $9 = load1($__size_$i$i8);
 $tobool$i$i9 = ($9<<24>>24)<(0);
 if ($tobool$i$i9) {
  $10 = load4($key);
  _free($10);
 }
 $__size_$i$i = ((($this)) + 11|0);
 $11 = load1($__size_$i$i);
 $tobool$i$i = ($11<<24>>24)<(0);
 if (!($tobool$i$i)) {
  return;
 }
 $12 = load4($this);
 _free($12);
 return;
}
function __Z1hNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_9VNodeDataNS_6vectorI5VNodeNS3_IS8_EEEE($agg$result,$sel,$text,$data,$children) {
 $agg$result = $agg$result|0;
 $sel = $sel|0;
 $text = $text|0;
 $data = $data|0;
 $children = $children|0;
 var $$pre$i = 0, $$size$i = 0, $$size$i$i = 0, $$size$i3$i = 0, $$size$i5 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $7 = 0, $8 = 0, $9 = 0, $__cap_$i$i = 0, $__cap_$i$i$i = 0, $__cap_$i$i22$i = 0, $__cap_$i$i23 = 0, $__end_$i$i$i = 0, $__end_$i$i$i$i = 0, $__end_$i$i$i$i$i = 0, $__end_$i$i$i25 = 0, $__end_$i$i7$i$i = 0, $__first_$i$i$i7$i$i$i = 0, $__first_$i$i$i7$i$i$i$i = 0, $__first_$i$i$i8$i$i$i = 0;
 var $__first_$i$i$i8$i$i$i$i = 0, $__p$015$i = 0, $__p$015$i$i = 0, $__p$015$i31$i = 0, $__p$015$i32 = 0, $__p$016$i = 0, $__p$016$i$i = 0, $__p$016$i33$i = 0, $__p$016$i34 = 0, $__size_$i$i = 0, $__size_$i$i$i = 0, $__size_$i$i$i$i = 0, $__size_$i$i10 = 0, $__size_$i$i23$i = 0, $__size_$i$i24 = 0, $__size_$i$i3$i = 0, $__size_$i$i4 = 0, $__size_$i$i9$i = 0, $__size_$i12$i = 0, $__size_$i12$i$i = 0;
 var $__size_$i12$i27$i = 0, $__size_$i12$i28 = 0, $__size_$i3$i$i$i = 0, $__size_$i3$i$i29$i = 0, $__size_$i6$i = 0, $__size_$i6$i$i = 0, $__size_$i6$i5$i = 0, $__size_$i6$i6 = 0, $add$i$i$i = 0, $add$i$i$i$i = 0, $add$i$i$i17$i = 0, $add$i$i$i18 = 0, $add$ptr$i$i = 0, $add$ptr$i24$i = 0, $add$ptr$i43$i = 0, $add$ptr$i53$i = 0, $agg$tmp = 0, $agg$tmp$i = 0, $agg$tmp1 = 0, $agg$tmp12 = 0;
 var $agg$tmp2 = 0, $agg$tmp5 = 0, $and$i$i$i = 0, $and$i$i$i$i = 0, $and$i$i$i18$i = 0, $and$i$i$i19 = 0, $args$i$i$i = 0, $args24$i$i$i = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i34$i = 0, $arrayidx$i35 = 0, $attachData$i$i$i = 0, $attachData19$i$i$i = 0, $attrs$i$i$i = 0, $attrs3$i$i$i = 0, $call$i = 0, $call$i$i = 0, $call$i11 = 0, $call$i9$i = 0;
 var $call$lcssa$i = 0, $call$lcssa$i$i = 0, $call$lcssa$i14$i = 0, $call$lcssa$i16 = 0, $call1$i = 0, $call1$i$i = 0, $call1$i4$i = 0, $call1$i6 = 0, $call4$i$i1$i = 0, $children$i = 0, $children$i$i = 0, $children9$i$i = 0, $className$i$i$i = 0, $className4$i$i$i = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i20 = 0, $cmp$i$i18 = 0, $cmp$i$i2$i = 0;
 var $cmp$i$i29$i = 0, $cmp$i$i30 = 0, $cmp$i1 = 0, $cmp$i1$i = 0, $cmp$i13$i = 0, $cmp$i14 = 0, $cmp$i2$i = 0, $cmp$i22 = 0, $cmp$i3 = 0, $cmp$i4 = 0, $cmp1$i = 0, $cmp1$i$i = 0, $cmp1$i10$i = 0, $cmp1$i12 = 0, $cmp12$i = 0, $cmp12$i$i = 0, $cmp12$i5$i = 0, $cmp12$i7 = 0, $cmp13$i = 0, $cmp17$i = 0;
 var $cmp2$i = 0, $cmp2$i$i = 0, $cmp2$i15$i = 0, $cmp2$i16 = 0, $cmp21$i = 0, $cmp26$i = 0, $cmp3$i = 0, $cmp8$i = 0, $cond$i$i$i = 0, $cond$i$i14$i = 0, $cond$i$i23$i = 0, $cond$i$i33$i = 0, $cond$i$i42$i = 0, $cond$i$i52$i = 0, $cond$i$i6$i = 0, $conv$i$i = 0, $conv$i$i$i = 0, $conv$i$i$i$i = 0, $conv$i$i$i31$i = 0, $conv$i$i25$i = 0;
 var $conv$i$i26 = 0, $data$i = 0, $data$i$i = 0, $data5$i$i = 0, $dataset$i$i$i = 0, $dataset10$i$i$i = 0, $elm$i$i = 0, $elm6$i$i = 0, $handle$i$i$i = 0, $hero$i$i$i = 0, $hero16$i$i$i = 0, $incdec$ptr$i$i$i = 0, $key$i = 0, $key$i$i = 0, $key$i$i$i = 0, $key22$i$i$i = 0, $key3$i$i = 0, $ns$i$i$i = 0, $ns23$i$i$i = 0, $on$i$i$i = 0;
 var $on13$i$i$i = 0, $or$i$i = 0, $or$i$i$i = 0, $or$i$i21$i = 0, $or$i$i22 = 0, $style$i$i$i = 0, $style7$i$i$i = 0, $text$i = 0, $text$i$i = 0, $text4$i$i = 0, $tobool$i = 0, $tobool$i$i = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i19 = 0, $tobool$i$i39 = 0, $tobool$i$i45 = 0, $tobool$i$i6$i = 0, $tobool$i$i7 = 0, $tobool$i7$i = 0;
 var $tobool$i9 = 0, $vnode = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 464|0;
 $agg$tmp$i = sp;
 $vnode = sp + 344|0;
 $agg$tmp = sp + 332|0;
 $agg$tmp1 = sp + 320|0;
 $agg$tmp2 = sp + 252|0;
 $agg$tmp5 = sp + 240|0;
 $agg$tmp12 = sp + 120|0;
 ; store8($agg$tmp,i64_const(0,0),4); store4($agg$tmp+8|0,0,4);
 $__size_$i6$i = ((($sel)) + 11|0);
 $0 = load1($__size_$i6$i);
 $tobool$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i) {
  $1 = load4($sel);
  $__size_$i$i = ((($sel)) + 4|0);
  $2 = load4($__size_$i$i);
  $cmp$i1 = ($2>>>0)>(4294967279);
  if ($cmp$i1) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $cmp2$i = ($2>>>0)<(11);
  if ($cmp2$i) {
   $conv$i$i = $2&255;
   $__size_$i12$i = ((($agg$tmp)) + 11|0);
   store1($__size_$i12$i,$conv$i$i);
   $cmp$i$i = ($2|0)==(0);
   if ($cmp$i$i) {
    $__p$016$i = $agg$tmp;
   } else {
    $__p$015$i = $agg$tmp;
    label = 11;
   }
  } else {
   $add$i$i$i = (($2) + 16)|0;
   $and$i$i$i = $add$i$i$i & -16;
   $cmp$i3 = ($and$i$i$i|0)==(0);
   $$size$i = $cmp$i3 ? 1 : $and$i$i$i;
   $call1$i = (_malloc($$size$i)|0);
   $cmp12$i = ($call1$i|0)==(0|0);
   L9: do {
    if ($cmp12$i) {
     while(1) {
      $3 = load4(7784);
      $4 = (($3) + 0)|0;
      store4(7784,$4);
      $tobool$i = ($3|0)==(0);
      if ($tobool$i) {
       $call$lcssa$i = 0;
       break L9;
      }
      $5 = $3;
      FUNCTION_TABLE_v[$5 & 3]();
      $call$i = (_malloc($$size$i)|0);
      $cmp1$i = ($call$i|0)==(0|0);
      if (!($cmp1$i)) {
       $call$lcssa$i = $call$i;
       break;
      }
     }
    } else {
     $call$lcssa$i = $call1$i;
    }
   } while(0);
   store4($agg$tmp,$call$lcssa$i);
   $or$i$i = $and$i$i$i | -2147483648;
   $__cap_$i$i = ((($agg$tmp)) + 8|0);
   store4($__cap_$i$i,$or$i$i);
   $__size_$i$i4 = ((($agg$tmp)) + 4|0);
   store4($__size_$i$i4,$2);
   $__p$015$i = $call$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($__p$015$i|0),($1|0),($2|0))|0;
   $__p$016$i = $__p$015$i;
  }
  $arrayidx$i = (($__p$016$i) + ($2)|0);
  store1($arrayidx$i,0);
 } else {
  ; store8($agg$tmp,load8($sel,4),4); store4($agg$tmp+8 | 0,load4($sel+8 | 0,4),4);
 }
 ; store8($agg$tmp1,i64_const(0,0),4); store4($agg$tmp1+8|0,0,4);
 $__size_$i6$i6 = ((($text)) + 11|0);
 $6 = load1($__size_$i6$i6);
 $tobool$i$i7 = ($6<<24>>24)<(0);
 if ($tobool$i$i7) {
  $7 = load4($text);
  $__size_$i$i10 = ((($text)) + 4|0);
  $8 = load4($__size_$i$i10);
  $cmp$i14 = ($8>>>0)>(4294967279);
  if ($cmp$i14) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $cmp2$i16 = ($8>>>0)<(11);
  if ($cmp2$i16) {
   $conv$i$i26 = $8&255;
   $__size_$i12$i28 = ((($agg$tmp1)) + 11|0);
   store1($__size_$i12$i28,$conv$i$i26);
   $cmp$i$i30 = ($8|0)==(0);
   if ($cmp$i$i30) {
    $__p$016$i34 = $agg$tmp1;
   } else {
    $__p$015$i32 = $agg$tmp1;
    label = 23;
   }
  } else {
   $add$i$i$i18 = (($8) + 16)|0;
   $and$i$i$i19 = $add$i$i$i18 & -16;
   $cmp$i4 = ($and$i$i$i19|0)==(0);
   $$size$i5 = $cmp$i4 ? 1 : $and$i$i$i19;
   $call1$i6 = (_malloc($$size$i5)|0);
   $cmp12$i7 = ($call1$i6|0)==(0|0);
   L27: do {
    if ($cmp12$i7) {
     while(1) {
      $9 = load4(7784);
      $10 = (($9) + 0)|0;
      store4(7784,$10);
      $tobool$i9 = ($9|0)==(0);
      if ($tobool$i9) {
       $call$lcssa$i16 = 0;
       break L27;
      }
      $11 = $9;
      FUNCTION_TABLE_v[$11 & 3]();
      $call$i11 = (_malloc($$size$i5)|0);
      $cmp1$i12 = ($call$i11|0)==(0|0);
      if (!($cmp1$i12)) {
       $call$lcssa$i16 = $call$i11;
       break;
      }
     }
    } else {
     $call$lcssa$i16 = $call1$i6;
    }
   } while(0);
   store4($agg$tmp1,$call$lcssa$i16);
   $or$i$i22 = $and$i$i$i19 | -2147483648;
   $__cap_$i$i23 = ((($agg$tmp1)) + 8|0);
   store4($__cap_$i$i23,$or$i$i22);
   $__size_$i$i24 = ((($agg$tmp1)) + 4|0);
   store4($__size_$i$i24,$8);
   $__p$015$i32 = $call$lcssa$i16;
   label = 23;
  }
  if ((label|0) == 23) {
   _memcpy(($__p$015$i32|0),($7|0),($8|0))|0;
   $__p$016$i34 = $__p$015$i32;
  }
  $arrayidx$i35 = (($__p$016$i34) + ($8)|0);
  store1($arrayidx$i35,0);
 } else {
  ; store8($agg$tmp1,load8($text,4),4); store4($agg$tmp1+8 | 0,load4($text+8 | 0,4),4);
 }
 __ZN9VNodeDataC2ERKS_($agg$tmp2,$data);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($agg$tmp5,$children);
 ; store8($vnode,i64_const(0,0),4); store4($vnode+8|0,0,4);
 $__size_$i6$i$i = ((($agg$tmp)) + 11|0);
 $12 = load1($__size_$i6$i$i);
 $tobool$i$i$i = ($12<<24>>24)<(0);
 if ($tobool$i$i$i) {
  $13 = load4($agg$tmp);
  $__size_$i$i$i = ((($agg$tmp)) + 4|0);
  $14 = load4($__size_$i$i$i);
  $cmp$i$i18 = ($14>>>0)>(4294967279);
  if ($cmp$i$i18) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $cmp2$i$i = ($14>>>0)<(11);
  if ($cmp2$i$i) {
   $conv$i$i$i = $14&255;
   $__size_$i12$i$i = ((($vnode)) + 11|0);
   store1($__size_$i12$i$i,$conv$i$i$i);
   $cmp$i$i$i20 = ($14|0)==(0);
   if ($cmp$i$i$i20) {
    $__p$016$i$i = $vnode;
   } else {
    $__p$015$i$i = $vnode;
    label = 35;
   }
  } else {
   $add$i$i$i$i = (($14) + 16)|0;
   $and$i$i$i$i = $add$i$i$i$i & -16;
   $cmp$i1$i = ($and$i$i$i$i|0)==(0);
   $$size$i$i = $cmp$i1$i ? 1 : $and$i$i$i$i;
   $call1$i$i = (_malloc($$size$i$i)|0);
   $cmp12$i$i = ($call1$i$i|0)==(0|0);
   L45: do {
    if ($cmp12$i$i) {
     while(1) {
      $15 = load4(7784);
      $16 = (($15) + 0)|0;
      store4(7784,$16);
      $tobool$i$i19 = ($15|0)==(0);
      if ($tobool$i$i19) {
       $call$lcssa$i$i = 0;
       break L45;
      }
      $17 = $15;
      FUNCTION_TABLE_v[$17 & 3]();
      $call$i$i = (_malloc($$size$i$i)|0);
      $cmp1$i$i = ($call$i$i|0)==(0|0);
      if (!($cmp1$i$i)) {
       $call$lcssa$i$i = $call$i$i;
       break;
      }
     }
    } else {
     $call$lcssa$i$i = $call1$i$i;
    }
   } while(0);
   store4($vnode,$call$lcssa$i$i);
   $or$i$i$i = $and$i$i$i$i | -2147483648;
   $__cap_$i$i$i = ((($vnode)) + 8|0);
   store4($__cap_$i$i$i,$or$i$i$i);
   $__size_$i$i3$i = ((($vnode)) + 4|0);
   store4($__size_$i$i3$i,$14);
   $__p$015$i$i = $call$lcssa$i$i;
   label = 35;
  }
  if ((label|0) == 35) {
   _memcpy(($__p$015$i$i|0),($13|0),($14|0))|0;
   $__p$016$i$i = $__p$015$i$i;
  }
  $arrayidx$i$i = (($__p$016$i$i) + ($14)|0);
  store1($arrayidx$i$i,0);
 } else {
  ; store8($vnode,load8($agg$tmp,4),4); store4($vnode+8 | 0,load4($agg$tmp+8 | 0,4),4);
 }
 $key$i = ((($vnode)) + 12|0);
 $text$i = ((($vnode)) + 24|0);
 $__size_$i6$i5$i = ((($agg$tmp1)) + 11|0);
 ; store8($key$i,i64_const(0,0),4); store8($key$i+8|0,i64_const(0,0),4); store8($key$i+16|0,i64_const(0,0),4);
 $18 = load1($__size_$i6$i5$i);
 $tobool$i$i6$i = ($18<<24>>24)<(0);
 if ($tobool$i$i6$i) {
  $19 = load4($agg$tmp1);
  $__size_$i$i9$i = ((($agg$tmp1)) + 4|0);
  $20 = load4($__size_$i$i9$i);
  $cmp$i13$i = ($20>>>0)>(4294967279);
  if ($cmp$i13$i) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $cmp2$i15$i = ($20>>>0)<(11);
  if ($cmp2$i15$i) {
   $conv$i$i25$i = $20&255;
   $__size_$i12$i27$i = ((($text$i)) + 11|0);
   store1($__size_$i12$i27$i,$conv$i$i25$i);
   $cmp$i$i29$i = ($20|0)==(0);
   if ($cmp$i$i29$i) {
    $__p$016$i33$i = $text$i;
   } else {
    $__p$015$i31$i = $text$i;
    label = 47;
   }
  } else {
   $add$i$i$i17$i = (($20) + 16)|0;
   $and$i$i$i18$i = $add$i$i$i17$i & -16;
   $cmp$i2$i = ($and$i$i$i18$i|0)==(0);
   $$size$i3$i = $cmp$i2$i ? 1 : $and$i$i$i18$i;
   $call1$i4$i = (_malloc($$size$i3$i)|0);
   $cmp12$i5$i = ($call1$i4$i|0)==(0|0);
   L63: do {
    if ($cmp12$i5$i) {
     while(1) {
      $21 = load4(7784);
      $22 = (($21) + 0)|0;
      store4(7784,$22);
      $tobool$i7$i = ($21|0)==(0);
      if ($tobool$i7$i) {
       $call$lcssa$i14$i = 0;
       break L63;
      }
      $23 = $21;
      FUNCTION_TABLE_v[$23 & 3]();
      $call$i9$i = (_malloc($$size$i3$i)|0);
      $cmp1$i10$i = ($call$i9$i|0)==(0|0);
      if (!($cmp1$i10$i)) {
       $call$lcssa$i14$i = $call$i9$i;
       break;
      }
     }
    } else {
     $call$lcssa$i14$i = $call1$i4$i;
    }
   } while(0);
   store4($text$i,$call$lcssa$i14$i);
   $or$i$i21$i = $and$i$i$i18$i | -2147483648;
   $__cap_$i$i22$i = ((($vnode)) + 32|0);
   store4($__cap_$i$i22$i,$or$i$i21$i);
   $__size_$i$i23$i = ((($vnode)) + 28|0);
   store4($__size_$i$i23$i,$20);
   $__p$015$i31$i = $call$lcssa$i14$i;
   label = 47;
  }
  if ((label|0) == 47) {
   _memcpy(($__p$015$i31$i|0),($19|0),($20|0))|0;
   $__p$016$i33$i = $__p$015$i31$i;
  }
  $arrayidx$i34$i = (($__p$016$i33$i) + ($20)|0);
  store1($arrayidx$i34$i,0);
 } else {
  ; store8($text$i,load8($agg$tmp1,4),4); store4($text$i+8 | 0,load4($agg$tmp1+8 | 0,4),4);
 }
 $data$i = ((($vnode)) + 36|0);
 __ZN9VNodeDataC2ERKS_($data$i,$agg$tmp2);
 $24 = load4(7272);
 __emval_incref(($24|0));
 $25 = load4(7272);
 store4($agg$tmp$i,$25);
 $call4$i$i1$i = (__emval_take_value((1024|0),($agg$tmp$i|0))|0);
 $handle$i$i$i = ((($vnode)) + 104|0);
 store4($handle$i$i$i,$call4$i$i1$i);
 $children$i = ((($vnode)) + 108|0);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($children$i,$agg$tmp5);
 $26 = load4($agg$tmp5);
 $cmp$i = ($26|0)==(0|0);
 if (!($cmp$i)) {
  $__end_$i$i$i = ((($agg$tmp5)) + 4|0);
  $27 = load4($__end_$i$i$i);
  $cmp$i$i2$i = ($27|0)==($26|0);
  if ($cmp$i$i2$i) {
   $30 = $26;
  } else {
   $28 = $27;
   while(1) {
    $incdec$ptr$i$i$i = ((($28)) + -120|0);
    store4($__end_$i$i$i,$incdec$ptr$i$i$i);
    __ZN5VNodeD2Ev($incdec$ptr$i$i$i);
    $29 = load4($__end_$i$i$i);
    $cmp$i$i$i = ($29|0)==($26|0);
    if ($cmp$i$i$i) {
     break;
    } else {
     $28 = $29;
    }
   }
   $$pre$i = load4($agg$tmp5);
   $30 = $$pre$i;
  }
  _free($30);
 }
 __ZN9VNodeDataD2Ev($agg$tmp2);
 $31 = load1($__size_$i6$i5$i);
 $tobool$i$i39 = ($31<<24>>24)<(0);
 if ($tobool$i$i39) {
  $32 = load4($agg$tmp1);
  _free($32);
 }
 $33 = load1($__size_$i6$i$i);
 $tobool$i$i45 = ($33<<24>>24)<(0);
 if ($tobool$i$i45) {
  $34 = load4($agg$tmp);
  _free($34);
 }
 __ZN5VNodeC2ERKS_($agg$tmp12,$vnode);
 $__size_$i$i$i$i = ((($agg$tmp12)) + 11|0);
 $35 = load1($__size_$i$i$i$i);
 $tobool$i$i$i$i = ($35<<24>>24)<(0);
 $__size_$i3$i$i$i = ((($agg$tmp12)) + 4|0);
 $36 = load4($__size_$i3$i$i$i);
 $conv$i$i$i$i = $35&255;
 $cond$i$i$i = $tobool$i$i$i$i ? $36 : $conv$i$i$i$i;
 $cmp$i22 = ($cond$i$i$i>>>0)>(2);
 do {
  if ($cmp$i22) {
   $37 = load4($agg$tmp12);
   $cond$i$i6$i = $tobool$i$i$i$i ? $37 : $agg$tmp12;
   $38 = load1($cond$i$i6$i);
   $cmp3$i = ($38<<24>>24)==(115);
   if ($cmp3$i) {
    $39 = load4($agg$tmp12);
    $cond$i$i14$i = $tobool$i$i$i$i ? $39 : $agg$tmp12;
    $add$ptr$i$i = ((($cond$i$i14$i)) + 1|0);
    $40 = load1($add$ptr$i$i);
    $cmp8$i = ($40<<24>>24)==(118);
    if ($cmp8$i) {
     $41 = load4($agg$tmp12);
     $cond$i$i23$i = $tobool$i$i$i$i ? $41 : $agg$tmp12;
     $add$ptr$i24$i = ((($cond$i$i23$i)) + 2|0);
     $42 = load1($add$ptr$i24$i);
     $cmp13$i = ($42<<24>>24)==(103);
     if ($cmp13$i) {
      $__size_$i3$i$i29$i = ((($agg$tmp12)) + 4|0);
      $43 = load4($__size_$i3$i$i29$i);
      $conv$i$i$i31$i = $35&255;
      $cond$i$i33$i = $tobool$i$i$i$i ? $43 : $conv$i$i$i31$i;
      $cmp17$i = ($cond$i$i33$i|0)==(3);
      if (!($cmp17$i)) {
       $44 = load4($agg$tmp12);
       $cond$i$i52$i = $tobool$i$i$i$i ? $44 : $agg$tmp12;
       $add$ptr$i53$i = ((($cond$i$i52$i)) + 3|0);
       $45 = load1($add$ptr$i53$i);
       $cmp21$i = ($45<<24>>24)==(46);
       if (!($cmp21$i)) {
        $46 = load4($agg$tmp12);
        $cond$i$i42$i = $tobool$i$i$i$i ? $46 : $agg$tmp12;
        $add$ptr$i43$i = ((($cond$i$i42$i)) + 3|0);
        $47 = load1($add$ptr$i43$i);
        $cmp26$i = ($47<<24>>24)==(35);
        if (!($cmp26$i)) {
         break;
        }
       }
      }
      __ZN5VNodeC2ERKS_($agg$tmp$i,$agg$tmp12);
      __Z5addNS5VNode($agg$tmp$i);
      __ZN5VNodeD2Ev($agg$tmp$i);
     }
    }
   }
  }
 } while(0);
 ; store8($agg$result,load8($agg$tmp12,4),4); store4($agg$result+8 | 0,load4($agg$tmp12+8 | 0,4),4);
 ; store8($agg$tmp12,i64_const(0,0),4); store4($agg$tmp12+8|0,0,4);
 $key$i$i = ((($agg$result)) + 12|0);
 $key3$i$i = ((($agg$tmp12)) + 12|0);
 ; store8($key$i$i,load8($key3$i$i,4),4); store4($key$i$i+8 | 0,load4($key3$i$i+8 | 0,4),4);
 ; store8($key3$i$i,i64_const(0,0),4); store4($key3$i$i+8|0,0,4);
 $text$i$i = ((($agg$result)) + 24|0);
 $text4$i$i = ((($agg$tmp12)) + 24|0);
 ; store8($text$i$i,load8($text4$i$i,4),4); store4($text$i$i+8 | 0,load4($text4$i$i+8 | 0,4),4);
 ; store8($text4$i$i,i64_const(0,0),4); store4($text4$i$i+8|0,0,4);
 $data$i$i = ((($agg$result)) + 36|0);
 $data5$i$i = ((($agg$tmp12)) + 36|0);
 $48 = load4($data5$i$i);
 store4($data$i$i,$48);
 store4($data5$i$i,0);
 $attrs$i$i$i = ((($agg$result)) + 40|0);
 $attrs3$i$i$i = ((($agg$tmp12)) + 40|0);
 $49 = load4($attrs3$i$i$i);
 store4($attrs$i$i$i,$49);
 store4($attrs3$i$i$i,0);
 $className$i$i$i = ((($agg$result)) + 44|0);
 $className4$i$i$i = ((($agg$tmp12)) + 44|0);
 $50 = load4($className4$i$i$i);
 store4($className$i$i$i,$50);
 store4($className4$i$i$i,0);
 $style$i$i$i = ((($agg$result)) + 48|0);
 $style7$i$i$i = ((($agg$tmp12)) + 48|0);
 $51 = load4($style7$i$i$i);
 store4($style$i$i$i,$51);
 store4($style7$i$i$i,0);
 $dataset$i$i$i = ((($agg$result)) + 52|0);
 $dataset10$i$i$i = ((($agg$tmp12)) + 52|0);
 $52 = load4($dataset10$i$i$i);
 store4($dataset$i$i$i,$52);
 store4($dataset10$i$i$i,0);
 $on$i$i$i = ((($agg$result)) + 56|0);
 $on13$i$i$i = ((($agg$tmp12)) + 56|0);
 $53 = load4($on13$i$i$i);
 store4($on$i$i$i,$53);
 store4($on13$i$i$i,0);
 $hero$i$i$i = ((($agg$result)) + 60|0);
 $hero16$i$i$i = ((($agg$tmp12)) + 60|0);
 $54 = load4($hero16$i$i$i);
 store4($hero$i$i$i,$54);
 store4($hero16$i$i$i,0);
 $attachData$i$i$i = ((($agg$result)) + 64|0);
 $attachData19$i$i$i = ((($agg$tmp12)) + 64|0);
 $55 = load4($attachData19$i$i$i);
 store4($attachData$i$i$i,$55);
 store4($attachData19$i$i$i,0);
 $key$i$i$i = ((($agg$result)) + 68|0);
 $key22$i$i$i = ((($agg$tmp12)) + 68|0);
 ; store8($key$i$i$i,load8($key22$i$i$i,4),4); store4($key$i$i$i+8 | 0,load4($key22$i$i$i+8 | 0,4),4);
 ; store8($key22$i$i$i,i64_const(0,0),4); store4($key22$i$i$i+8|0,0,4);
 $ns$i$i$i = ((($agg$result)) + 80|0);
 $ns23$i$i$i = ((($agg$tmp12)) + 80|0);
 ; store8($ns$i$i$i,load8($ns23$i$i$i,4),4); store4($ns$i$i$i+8 | 0,load4($ns23$i$i$i+8 | 0,4),4);
 ; store8($ns23$i$i$i,i64_const(0,0),4); store4($ns23$i$i$i+8|0,0,4);
 $args$i$i$i = ((($agg$result)) + 92|0);
 $args24$i$i$i = ((($agg$tmp12)) + 92|0);
 $__end_$i$i$i$i$i = ((($agg$result)) + 96|0);
 $56 = load4($args24$i$i$i);
 store4($args$i$i$i,$56);
 $__end_$i$i7$i$i = ((($agg$tmp12)) + 96|0);
 $57 = load4($__end_$i$i7$i$i);
 store4($__end_$i$i$i$i$i,$57);
 $__first_$i$i$i8$i$i$i$i = ((($agg$tmp12)) + 100|0);
 $58 = load4($__first_$i$i$i8$i$i$i$i);
 $__first_$i$i$i7$i$i$i$i = ((($agg$result)) + 100|0);
 store4($__first_$i$i$i7$i$i$i$i,$58);
 store4($__first_$i$i$i8$i$i$i$i,0);
 store4($__end_$i$i7$i$i,0);
 store4($args24$i$i$i,0);
 $elm$i$i = ((($agg$result)) + 104|0);
 $elm6$i$i = ((($agg$tmp12)) + 104|0);
 $59 = load4($elm6$i$i);
 store4($elm$i$i,$59);
 store4($elm6$i$i,0);
 $children$i$i = ((($agg$result)) + 108|0);
 $children9$i$i = ((($agg$tmp12)) + 108|0);
 $__end_$i$i$i$i = ((($agg$result)) + 112|0);
 $60 = load4($children9$i$i);
 store4($children$i$i,$60);
 $__end_$i$i$i25 = ((($agg$tmp12)) + 112|0);
 $61 = load4($__end_$i$i$i25);
 store4($__end_$i$i$i$i,$61);
 $__first_$i$i$i8$i$i$i = ((($agg$tmp12)) + 116|0);
 $62 = load4($__first_$i$i$i8$i$i$i);
 $__first_$i$i$i7$i$i$i = ((($agg$result)) + 116|0);
 store4($__first_$i$i$i7$i$i$i,$62);
 store4($__first_$i$i$i8$i$i$i,0);
 store4($__end_$i$i$i25,0);
 store4($children9$i$i,0);
 __ZN5VNodeD2Ev($agg$tmp12);
 __ZN5VNodeD2Ev($vnode);
 STACKTOP = sp;return;
}
function __ZN9VNodeDataC2ERKS_($this,$0) {
 $this = $this|0;
 $0 = $0|0;
 var $$size$i = 0, $$size$i$i = 0, $$size$i3 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin1$addr$05$i$i$i = 0, $__cap_$i$i = 0, $__cap_$i$i22 = 0, $__end_$i$i = 0, $__end_$i10$i = 0, $__end_cap_$i9$i = 0, $__first_$i$i$i$i$i = 0;
 var $__p$015$i = 0, $__p$015$i31 = 0, $__p$016$i = 0, $__p$016$i33 = 0, $__size_$i$i = 0, $__size_$i$i23 = 0, $__size_$i$i3 = 0, $__size_$i$i9 = 0, $__size_$i12$i = 0, $__size_$i12$i27 = 0, $__size_$i6$i = 0, $__size_$i6$i5 = 0, $add$i$i$i = 0, $add$i$i$i17 = 0, $add$ptr$i$i = 0, $and$i$i$i = 0, $and$i$i$i18 = 0, $args = 0, $args28 = 0, $arrayidx$i = 0;
 var $arrayidx$i34 = 0, $call$i = 0, $call$i$i = 0, $call$i9 = 0, $call$lcssa$i = 0, $call$lcssa$i$i = 0, $call$lcssa$i14 = 0, $call1$i = 0, $call1$i$i = 0, $call1$i4 = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i29 = 0, $cmp$i1 = 0, $cmp$i1$i = 0, $cmp$i13 = 0, $cmp$i13$i = 0, $cmp$i16 = 0, $cmp$i2 = 0;
 var $cmp1$i = 0, $cmp1$i$i = 0, $cmp1$i10 = 0, $cmp12$i = 0, $cmp12$i$i = 0, $cmp12$i5 = 0, $cmp2$i = 0, $cmp2$i15 = 0, $cmp4$i$i$i = 0, $conv$i$i = 0, $conv$i$i25 = 0, $handle$i$i11 = 0, $handle$i$i13 = 0, $handle$i$i16 = 0, $handle$i$i19 = 0, $handle$i$i22 = 0, $handle$i$i25 = 0, $handle$i$i28 = 0, $handle2$i$i12 = 0, $handle2$i$i14 = 0;
 var $handle2$i$i17 = 0, $handle2$i$i20 = 0, $handle2$i$i23 = 0, $handle2$i$i26 = 0, $handle2$i$i29 = 0, $incdec$ptr$i$i$i = 0, $incdec$ptr1$i$i$i = 0, $key = 0, $key22 = 0, $ns = 0, $ns25 = 0, $or$i$i = 0, $or$i$i21 = 0, $sub$ptr$div$i$i = 0, $sub$ptr$sub$i$i = 0, $tobool$i = 0, $tobool$i$i = 0, $tobool$i$i18 = 0, $tobool$i$i6 = 0, $tobool$i7 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $1 = load4($0);
 store4($this,$1);
 __emval_incref(($1|0));
 $handle$i$i11 = ((($this)) + 4|0);
 $handle2$i$i12 = ((($0)) + 4|0);
 $2 = load4($handle2$i$i12);
 store4($handle$i$i11,$2);
 __emval_incref(($2|0));
 $handle$i$i13 = ((($this)) + 8|0);
 $handle2$i$i14 = ((($0)) + 8|0);
 $3 = load4($handle2$i$i14);
 store4($handle$i$i13,$3);
 __emval_incref(($3|0));
 $handle$i$i16 = ((($this)) + 12|0);
 $handle2$i$i17 = ((($0)) + 12|0);
 $4 = load4($handle2$i$i17);
 store4($handle$i$i16,$4);
 __emval_incref(($4|0));
 $handle$i$i19 = ((($this)) + 16|0);
 $handle2$i$i20 = ((($0)) + 16|0);
 $5 = load4($handle2$i$i20);
 store4($handle$i$i19,$5);
 __emval_incref(($5|0));
 $handle$i$i22 = ((($this)) + 20|0);
 $handle2$i$i23 = ((($0)) + 20|0);
 $6 = load4($handle2$i$i23);
 store4($handle$i$i22,$6);
 __emval_incref(($6|0));
 $handle$i$i25 = ((($this)) + 24|0);
 $handle2$i$i26 = ((($0)) + 24|0);
 $7 = load4($handle2$i$i26);
 store4($handle$i$i25,$7);
 __emval_incref(($7|0));
 $handle$i$i28 = ((($this)) + 28|0);
 $handle2$i$i29 = ((($0)) + 28|0);
 $8 = load4($handle2$i$i29);
 store4($handle$i$i28,$8);
 __emval_incref(($8|0));
 $key = ((($this)) + 32|0);
 $key22 = ((($0)) + 32|0);
 ; store8($key,i64_const(0,0),4); store4($key+8|0,0,4);
 $__size_$i6$i = ((($key22)) + 11|0);
 $9 = load1($__size_$i6$i);
 $tobool$i$i = ($9<<24>>24)<(0);
 if ($tobool$i$i) {
  $10 = load4($key22);
  $__size_$i$i = ((($0)) + 36|0);
  $11 = load4($__size_$i$i);
  $cmp$i = ($11>>>0)>(4294967279);
  if ($cmp$i) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $cmp2$i = ($11>>>0)<(11);
  if ($cmp2$i) {
   $conv$i$i = $11&255;
   $__size_$i12$i = ((($key)) + 11|0);
   store1($__size_$i12$i,$conv$i$i);
   $cmp$i$i = ($11|0)==(0);
   if ($cmp$i$i) {
    $__p$016$i = $key;
   } else {
    $__p$015$i = $key;
    label = 11;
   }
  } else {
   $add$i$i$i = (($11) + 16)|0;
   $and$i$i$i = $add$i$i$i & -16;
   $cmp$i1 = ($and$i$i$i|0)==(0);
   $$size$i = $cmp$i1 ? 1 : $and$i$i$i;
   $call1$i = (_malloc($$size$i)|0);
   $cmp12$i = ($call1$i|0)==(0|0);
   L9: do {
    if ($cmp12$i) {
     while(1) {
      $12 = load4(7784);
      $13 = (($12) + 0)|0;
      store4(7784,$13);
      $tobool$i = ($12|0)==(0);
      if ($tobool$i) {
       $call$lcssa$i = 0;
       break L9;
      }
      $14 = $12;
      FUNCTION_TABLE_v[$14 & 3]();
      $call$i = (_malloc($$size$i)|0);
      $cmp1$i = ($call$i|0)==(0|0);
      if (!($cmp1$i)) {
       $call$lcssa$i = $call$i;
       break;
      }
     }
    } else {
     $call$lcssa$i = $call1$i;
    }
   } while(0);
   store4($key,$call$lcssa$i);
   $or$i$i = $and$i$i$i | -2147483648;
   $__cap_$i$i = ((($this)) + 40|0);
   store4($__cap_$i$i,$or$i$i);
   $__size_$i$i3 = ((($this)) + 36|0);
   store4($__size_$i$i3,$11);
   $__p$015$i = $call$lcssa$i;
   label = 11;
  }
  if ((label|0) == 11) {
   _memcpy(($__p$015$i|0),($10|0),($11|0))|0;
   $__p$016$i = $__p$015$i;
  }
  $arrayidx$i = (($__p$016$i) + ($11)|0);
  store1($arrayidx$i,0);
 } else {
  ; store8($key,load8($key22,4),4); store4($key+8 | 0,load4($key22+8 | 0,4),4);
 }
 $ns = ((($this)) + 44|0);
 $ns25 = ((($0)) + 44|0);
 ; store8($ns,i64_const(0,0),4); store4($ns+8|0,0,4);
 $__size_$i6$i5 = ((($ns25)) + 11|0);
 $15 = load1($__size_$i6$i5);
 $tobool$i$i6 = ($15<<24>>24)<(0);
 if ($tobool$i$i6) {
  $16 = load4($ns25);
  $__size_$i$i9 = ((($0)) + 48|0);
  $17 = load4($__size_$i$i9);
  $cmp$i13 = ($17>>>0)>(4294967279);
  if ($cmp$i13) {
   __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $cmp2$i15 = ($17>>>0)<(11);
  if ($cmp2$i15) {
   $conv$i$i25 = $17&255;
   $__size_$i12$i27 = ((($ns)) + 11|0);
   store1($__size_$i12$i27,$conv$i$i25);
   $cmp$i$i29 = ($17|0)==(0);
   if ($cmp$i$i29) {
    $__p$016$i33 = $ns;
   } else {
    $__p$015$i31 = $ns;
    label = 23;
   }
  } else {
   $add$i$i$i17 = (($17) + 16)|0;
   $and$i$i$i18 = $add$i$i$i17 & -16;
   $cmp$i2 = ($and$i$i$i18|0)==(0);
   $$size$i3 = $cmp$i2 ? 1 : $and$i$i$i18;
   $call1$i4 = (_malloc($$size$i3)|0);
   $cmp12$i5 = ($call1$i4|0)==(0|0);
   L27: do {
    if ($cmp12$i5) {
     while(1) {
      $18 = load4(7784);
      $19 = (($18) + 0)|0;
      store4(7784,$19);
      $tobool$i7 = ($18|0)==(0);
      if ($tobool$i7) {
       $call$lcssa$i14 = 0;
       break L27;
      }
      $20 = $18;
      FUNCTION_TABLE_v[$20 & 3]();
      $call$i9 = (_malloc($$size$i3)|0);
      $cmp1$i10 = ($call$i9|0)==(0|0);
      if (!($cmp1$i10)) {
       $call$lcssa$i14 = $call$i9;
       break;
      }
     }
    } else {
     $call$lcssa$i14 = $call1$i4;
    }
   } while(0);
   store4($ns,$call$lcssa$i14);
   $or$i$i21 = $and$i$i$i18 | -2147483648;
   $__cap_$i$i22 = ((($this)) + 52|0);
   store4($__cap_$i$i22,$or$i$i21);
   $__size_$i$i23 = ((($this)) + 48|0);
   store4($__size_$i$i23,$17);
   $__p$015$i31 = $call$lcssa$i14;
   label = 23;
  }
  if ((label|0) == 23) {
   _memcpy(($__p$015$i31|0),($16|0),($17|0))|0;
   $__p$016$i33 = $__p$015$i31;
  }
  $arrayidx$i34 = (($__p$016$i33) + ($17)|0);
  store1($arrayidx$i34,0);
 } else {
  ; store8($ns,load8($ns25,4),4); store4($ns+8 | 0,load4($ns25+8 | 0,4),4);
 }
 $args = ((($this)) + 56|0);
 $args28 = ((($0)) + 56|0);
 store4($args,0);
 $__end_$i$i = ((($this)) + 60|0);
 store4($__end_$i$i,0);
 $__end_cap_$i9$i = ((($this)) + 64|0);
 store4($__end_cap_$i9$i,0);
 $__end_$i10$i = ((($0)) + 60|0);
 $21 = load4($__end_$i10$i);
 $22 = load4($args28);
 $sub$ptr$sub$i$i = (($21) - ($22))|0;
 $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 2;
 $cmp$i16 = ($sub$ptr$div$i$i|0)==(0);
 if ($cmp$i16) {
  return;
 }
 $cmp$i13$i = ($sub$ptr$div$i$i>>>0)>(1073741823);
 if ($cmp$i13$i) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $cmp$i1$i = ($sub$ptr$sub$i$i|0)==(0);
 $$size$i$i = $cmp$i1$i ? 1 : $sub$ptr$sub$i$i;
 $call1$i$i = (_malloc($$size$i$i)|0);
 $cmp12$i$i = ($call1$i$i|0)==(0|0);
 L43: do {
  if ($cmp12$i$i) {
   while(1) {
    $23 = load4(7784);
    $24 = (($23) + 0)|0;
    store4(7784,$24);
    $tobool$i$i18 = ($23|0)==(0);
    if ($tobool$i$i18) {
     $call$lcssa$i$i = 0;
     break L43;
    }
    $25 = $23;
    FUNCTION_TABLE_v[$25 & 3]();
    $call$i$i = (_malloc($$size$i$i)|0);
    $cmp1$i$i = ($call$i$i|0)==(0|0);
    if (!($cmp1$i$i)) {
     $call$lcssa$i$i = $call$i$i;
     break;
    }
   }
  } else {
   $call$lcssa$i$i = $call1$i$i;
  }
 } while(0);
 store4($__end_$i$i,$call$lcssa$i$i);
 store4($args,$call$lcssa$i$i);
 $add$ptr$i$i = (($call$lcssa$i$i) + ($sub$ptr$div$i$i<<2)|0);
 $__first_$i$i$i$i$i = ((($this)) + 64|0);
 store4($__first_$i$i$i$i$i,$add$ptr$i$i);
 $26 = load4($args28);
 $27 = load4($__end_$i10$i);
 $cmp4$i$i$i = ($26|0)==($27|0);
 if ($cmp4$i$i$i) {
  return;
 } else {
  $29 = $call$lcssa$i$i;$__begin1$addr$05$i$i$i = $26;
 }
 while(1) {
  $28 = load4($__begin1$addr$05$i$i$i);
  store4($29,$28);
  __emval_incref(($28|0));
  $incdec$ptr$i$i$i = ((($__begin1$addr$05$i$i$i)) + 4|0);
  $30 = load4($__end_$i$i);
  $incdec$ptr1$i$i$i = ((($30)) + 4|0);
  store4($__end_$i$i,$incdec$ptr1$i$i$i);
  $cmp$i$i$i = ($incdec$ptr$i$i$i|0)==($27|0);
  if ($cmp$i$i$i) {
   break;
  } else {
   $29 = $incdec$ptr1$i$i$i;$__begin1$addr$05$i$i$i = $incdec$ptr$i$i$i;
  }
 }
 return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin1$addr$0$i24 = 0, $__end_$i = 0, $__end_$i10 = 0, $__end_cap_$i9 = 0, $__first_$i$i$i$i = 0, $add$ptr$i = 0, $call$i = 0, $call$lcssa$i = 0, $call1$i = 0, $cmp$i11 = 0;
 var $cmp$i17 = 0, $cmp$i1723 = 0, $cmp1$i = 0, $cmp12$i = 0, $incdec$ptr$i = 0, $incdec$ptr1$i = 0, $sub$ptr$div$i = 0, $sub$ptr$sub$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,0);
 $__end_$i = ((($this)) + 4|0);
 store4($__end_$i,0);
 $__end_cap_$i9 = ((($this)) + 8|0);
 store4($__end_cap_$i9,0);
 $__end_$i10 = ((($__x)) + 4|0);
 $0 = load4($__end_$i10);
 $1 = load4($__x);
 $sub$ptr$sub$i = (($0) - ($1))|0;
 $sub$ptr$div$i = (($sub$ptr$sub$i|0) / 120)&-1;
 $2 = ($sub$ptr$sub$i|0)==(0);
 if ($2) {
  return;
 }
 $cmp$i11 = ($sub$ptr$div$i>>>0)>(35791394);
 if ($cmp$i11) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $call1$i = (_malloc($sub$ptr$sub$i)|0);
 $cmp12$i = ($call1$i|0)==(0|0);
 L7: do {
  if ($cmp12$i) {
   while(1) {
    $3 = load4(7784);
    $4 = (($3) + 0)|0;
    store4(7784,$4);
    $tobool$i = ($3|0)==(0);
    if ($tobool$i) {
     $call$lcssa$i = 0;
     break L7;
    }
    $5 = $3;
    FUNCTION_TABLE_v[$5 & 3]();
    $call$i = (_malloc($sub$ptr$sub$i)|0);
    $cmp1$i = ($call$i|0)==(0|0);
    if (!($cmp1$i)) {
     $call$lcssa$i = $call$i;
     break;
    }
   }
  } else {
   $call$lcssa$i = $call1$i;
  }
 } while(0);
 store4($__end_$i,$call$lcssa$i);
 store4($this,$call$lcssa$i);
 $add$ptr$i = (($call$lcssa$i) + (($sub$ptr$div$i*120)|0)|0);
 $__first_$i$i$i$i = ((($this)) + 8|0);
 store4($__first_$i$i$i$i,$add$ptr$i);
 $6 = load4($__x);
 $7 = load4($__end_$i10);
 $cmp$i1723 = ($6|0)==($7|0);
 if ($cmp$i1723) {
  return;
 } else {
  $8 = $call$lcssa$i;$__begin1$addr$0$i24 = $6;
 }
 while(1) {
  __ZN5VNodeC2ERKS_($8,$__begin1$addr$0$i24);
  $incdec$ptr$i = ((($__begin1$addr$0$i24)) + 120|0);
  $9 = load4($__end_$i);
  $incdec$ptr1$i = ((($9)) + 120|0);
  store4($__end_$i,$incdec$ptr1$i);
  $cmp$i17 = ($incdec$ptr$i|0)==($7|0);
  if ($cmp$i17) {
   break;
  } else {
   $8 = $incdec$ptr1$i;$__begin1$addr$0$i24 = $incdec$ptr$i;
  }
 }
 return;
}
function __ZN9VNodeDataD2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__end_$i$i$i = 0, $__size_$i$i = 0, $__size_$i$i3 = 0;
 var $cmp$i = 0, $cmp$i$i$i = 0, $handle$i = 0, $handle$i1 = 0, $handle$i10 = 0, $handle$i13 = 0, $handle$i16 = 0, $handle$i4 = 0, $handle$i7 = 0, $incdec$ptr$i$i$i = 0, $key = 0, $ns = 0, $tobool$i$i = 0, $tobool$i$i4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 56|0);
 $1 = load4($0);
 $cmp$i = ($1|0)==(0|0);
 if (!($cmp$i)) {
  $__end_$i$i$i = ((($this)) + 60|0);
  while(1) {
   $2 = load4($__end_$i$i$i);
   $cmp$i$i$i = ($2|0)==($1|0);
   if ($cmp$i$i$i) {
    break;
   }
   $incdec$ptr$i$i$i = ((($2)) + -4|0);
   store4($__end_$i$i$i,$incdec$ptr$i$i$i);
   $3 = load4($incdec$ptr$i$i$i);
   __emval_decref(($3|0));
  }
  $4 = load4($0);
  _free($4);
 }
 $ns = ((($this)) + 44|0);
 $__size_$i$i = ((($ns)) + 11|0);
 $5 = load1($__size_$i$i);
 $tobool$i$i = ($5<<24>>24)<(0);
 if ($tobool$i$i) {
  $6 = load4($ns);
  _free($6);
 }
 $key = ((($this)) + 32|0);
 $__size_$i$i3 = ((($key)) + 11|0);
 $7 = load1($__size_$i$i3);
 $tobool$i$i4 = ($7<<24>>24)<(0);
 if ($tobool$i$i4) {
  $8 = load4($key);
  _free($8);
 }
 $handle$i = ((($this)) + 28|0);
 $9 = load4($handle$i);
 __emval_decref(($9|0));
 $handle$i1 = ((($this)) + 24|0);
 $10 = load4($handle$i1);
 __emval_decref(($10|0));
 $handle$i4 = ((($this)) + 20|0);
 $11 = load4($handle$i4);
 __emval_decref(($11|0));
 $handle$i7 = ((($this)) + 16|0);
 $12 = load4($handle$i7);
 __emval_decref(($12|0));
 $handle$i10 = ((($this)) + 12|0);
 $13 = load4($handle$i10);
 __emval_decref(($13|0));
 $handle$i13 = ((($this)) + 8|0);
 $14 = load4($handle$i13);
 __emval_decref(($14|0));
 $handle$i16 = ((($this)) + 4|0);
 $15 = load4($handle$i16);
 __emval_decref(($15|0));
 $16 = load4($this);
 __emval_decref(($16|0));
 return;
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = i64(), $4 = 0, $5 = 0, $6 = 0, $7 = 0, $and$i = i64(), $call$i1$i = 0, $call1$i2$i = 0, $cmp$i = 0, $cmp$i$i = 0, $exception_class$i = 0, $terminateHandler$i = 0, $tobool$i = 0, $tobool1$i = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 (___cxa_begin_catch(($0|0))|0);
 $call$i1$i = (_pthread_once((7776|0),(2|0))|0);
 $cmp$i$i = ($call$i1$i|0)==(0);
 if (!($cmp$i$i)) {
  _abort_message(6768,$vararg_buffer);
  // unreachable;
 }
 $1 = load4(7780);
 $call1$i2$i = (_pthread_getspecific(($1|0))|0);
 $tobool$i = ($call1$i2$i|0)==(0|0);
 if (!($tobool$i)) {
  $2 = load4($call1$i2$i);
  $tobool1$i = ($2|0)==(0|0);
  if (!($tobool1$i)) {
   $exception_class$i = ((($2)) + 48|0);
   $3 = load8($exception_class$i);
   $and$i = i64_and($3,i64_const(4294967040,4294967295));
   $cmp$i = i64_eq($and$i,i64_const(1126902528,1129074247));
   if ($cmp$i) {
    $terminateHandler$i = ((($2)) + 12|0);
    $4 = load4($terminateHandler$i);
    __ZSt11__terminatePFvvE($4);
    // unreachable;
   }
  }
 }
 $5 = load4(1840);
 $6 = (($5) + 0)|0;
 store4(1840,$6);
 $7 = $5;
 __ZSt11__terminatePFvvE($7);
 // unreachable;
}
function __ZN10emscripten8internal13getActualTypeI9VNodeDataEEPKvPT_($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1032|0);
}
function __ZN10emscripten8internal14raw_destructorI9VNodeDataEEvPT_($ptr) {
 $ptr = $ptr|0;
 var $isnull = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $isnull = ($ptr|0)==(0|0);
 if ($isnull) {
  return;
 }
 __ZN9VNodeDataD2Ev($ptr);
 _free($ptr);
 return;
}
function __ZN10emscripten8internal12operator_newI9VNodeDataJEEEPT_DpOT0_() {
 var $0 = 0, $1 = 0, $2 = 0, $call$i = 0, $call$lcssa$i = 0, $call1$i = 0, $cmp1$i = 0, $cmp12$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call1$i = (_malloc(68)|0);
 $cmp12$i = ($call1$i|0)==(0|0);
 L1: do {
  if ($cmp12$i) {
   while(1) {
    $0 = load4(7784);
    $1 = (($0) + 0)|0;
    store4(7784,$1);
    $tobool$i = ($0|0)==(0);
    if ($tobool$i) {
     $call$lcssa$i = 0;
     break L1;
    }
    $2 = $0;
    FUNCTION_TABLE_v[$2 & 3]();
    $call$i = (_malloc(68)|0);
    $cmp1$i = ($call$i|0)==(0|0);
    if (!($cmp1$i)) {
     $call$lcssa$i = $call$i;
     break;
    }
   }
  } else {
   $call$lcssa$i = $call1$i;
  }
 } while(0);
 __ZN9VNodeDataC2Ev($call$lcssa$i);
 return ($call$lcssa$i|0);
}
function __ZN10emscripten8internal7InvokerIP9VNodeDataJEE6invokeEPFS3_vE($fn) {
 $fn = $fn|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (FUNCTION_TABLE_i[$fn & 3]()|0);
 return ($call|0);
}
function __ZN9VNodeDataC2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $argv$i$i36 = 0, $call4$i$i = 0, $call4$i$i1215 = 0, $call4$i$i1821 = 0;
 var $call4$i$i24 = 0, $call4$i$i2528 = 0, $call4$i$i3134 = 0, $call4$i$i3740 = 0, $call4$i$i69 = 0, $handle$i$i13 = 0, $handle$i$i19 = 0, $handle$i$i26 = 0, $handle$i$i3 = 0, $handle$i$i32 = 0, $handle$i$i38 = 0, $handle$i$i7 = 0, $key = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $argv$i$i36 = sp;
 $0 = load4(7272);
 __emval_incref(($0|0));
 $1 = load4(7272);
 store4($argv$i$i36,$1);
 $call4$i$i = (__emval_take_value((1024|0),($argv$i$i36|0))|0);
 store4($this,$call4$i$i);
 $2 = load4(7272);
 __emval_incref(($2|0));
 $3 = load4(7272);
 store4($argv$i$i36,$3);
 $call4$i$i24 = (__emval_take_value((1024|0),($argv$i$i36|0))|0);
 $handle$i$i3 = ((($this)) + 4|0);
 store4($handle$i$i3,$call4$i$i24);
 $4 = load4(7272);
 __emval_incref(($4|0));
 $5 = load4(7272);
 store4($argv$i$i36,$5);
 $call4$i$i69 = (__emval_take_value((1024|0),($argv$i$i36|0))|0);
 $handle$i$i7 = ((($this)) + 8|0);
 store4($handle$i$i7,$call4$i$i69);
 $6 = load4(7272);
 __emval_incref(($6|0));
 $7 = load4(7272);
 store4($argv$i$i36,$7);
 $call4$i$i1215 = (__emval_take_value((1024|0),($argv$i$i36|0))|0);
 $handle$i$i13 = ((($this)) + 12|0);
 store4($handle$i$i13,$call4$i$i1215);
 $8 = load4(7272);
 __emval_incref(($8|0));
 $9 = load4(7272);
 store4($argv$i$i36,$9);
 $call4$i$i1821 = (__emval_take_value((1024|0),($argv$i$i36|0))|0);
 $handle$i$i19 = ((($this)) + 16|0);
 store4($handle$i$i19,$call4$i$i1821);
 $10 = load4(7272);
 __emval_incref(($10|0));
 $11 = load4(7272);
 store4($argv$i$i36,$11);
 $call4$i$i2528 = (__emval_take_value((1024|0),($argv$i$i36|0))|0);
 $handle$i$i26 = ((($this)) + 20|0);
 store4($handle$i$i26,$call4$i$i2528);
 $12 = load4(7272);
 __emval_incref(($12|0));
 $13 = load4(7272);
 store4($argv$i$i36,$13);
 $call4$i$i3134 = (__emval_take_value((1024|0),($argv$i$i36|0))|0);
 $handle$i$i32 = ((($this)) + 24|0);
 store4($handle$i$i32,$call4$i$i3134);
 $14 = load4(7272);
 __emval_incref(($14|0));
 $15 = load4(7272);
 store4($argv$i$i36,$15);
 $call4$i$i3740 = (__emval_take_value((1024|0),($argv$i$i36|0))|0);
 $handle$i$i38 = ((($this)) + 28|0);
 store4($handle$i$i38,$call4$i$i3740);
 $key = ((($this)) + 32|0);
 ; store8($key,i64_const(0,0),4); store8($key+8|0,i64_const(0,0),4); store8($key+16|0,i64_const(0,0),4); store8($key+24|0,i64_const(0,0),4); store4($key+32|0,0,4);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_($field,$ptr) {
 $field = $field|0;
 $ptr = $ptr|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__size_$i3$i$i$i = 0, $add$i = 0, $call1$i = 0, $cond$i$i$i = 0, $cond$i$i21$i = 0, $conv$i$i$i$i = 0, $data$i = 0, $memptr$offset = 0, $tobool$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($field);
 $memptr$offset = (($ptr) + ($0)|0);
 $1 = ((($memptr$offset)) + 11|0);
 $2 = load1($1);
 $tobool$i$i$i$i = ($2<<24>>24)<(0);
 $__size_$i3$i$i$i = ((($memptr$offset)) + 4|0);
 $3 = load4($__size_$i3$i$i$i);
 $conv$i$i$i$i = $2&255;
 $cond$i$i$i = $tobool$i$i$i$i ? $3 : $conv$i$i$i$i;
 $add$i = (($cond$i$i$i) + 4)|0;
 $call1$i = (_malloc($add$i)|0);
 store4($call1$i,$cond$i$i$i);
 $data$i = ((($call1$i)) + 4|0);
 $4 = load4($memptr$offset);
 $cond$i$i21$i = $tobool$i$i$i$i ? $4 : $memptr$offset;
 _memcpy(($data$i|0),($cond$i$i21$i|0),($cond$i$i$i|0))|0;
 return ($call1$i|0);
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E($field,$ptr,$value) {
 $field = $field|0;
 $ptr = $ptr|0;
 $value = $value|0;
 var $$phitmp$i$i = 0, $$pre = 0, $$size$i = 0, $$size$i3 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $__cap_$i$i = 0, $__cap_$i$i$i = 0, $__cap_$i$i9 = 0, $__new_data$049$i = 0, $__new_data$050$i = 0, $__new_data$058$i = 0, $__now_long$0$off055$i = 0, $__now_long$0$off056$i = 0, $__now_long$0$off061$i = 0, $__p$015$i = 0, $__p$016$i = 0, $__p$051$i = 0, $__p$052$i = 0, $__p$059$i = 0, $__size_$i$i = 0, $__size_$i1$i$i$i = 0, $__size_$i12$i = 0, $__size_$i3$i$i = 0, $__size_$i9$i = 0;
 var $__was_long$0$off053$i = 0, $__was_long$0$off060$i = 0, $add$i = 0, $add$i$i$i = 0, $add$i$i$i3 = 0, $add30$i = 0, $add38$i = 0, $and$i$i$i = 0, $and$i$i$i2 = 0, $and$i$i34$i = 0, $arraydecay$i = 0, $arrayidx$i = 0, $call$i = 0, $call$i9 = 0, $call$lcssa$i = 0, $call$lcssa$i14 = 0, $call1$i = 0, $call1$i4 = 0, $cmp$i = 0, $cmp$i$i = 0;
 var $cmp$i$i6 = 0, $cmp$i1 = 0, $cmp$i2 = 0, $cmp$i33$i = 0, $cmp1$i = 0, $cmp1$i10 = 0, $cmp12$i = 0, $cmp12$i5 = 0, $cmp2$i = 0, $cmp6$i = 0, $cond$i15$i = 0, $cond$i30$i = 0, $cond$i47$i = 0, $conv$i$i = 0, $conv$i$i$i = 0, $conv$i$i11 = 0, $conv$i$i28$i = 0, $memptr$offset = 0, $or$i$i = 0, $or$i$i8 = 0;
 var $phitmp$i$i = 0, $phitmp$i35$i = 0, $ref$tmp = 0, $tobool$i = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i17 = 0, $tobool$i7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 $0 = load4($field);
 $memptr$offset = (($ptr) + ($0)|0);
 $arraydecay$i = ((($value)) + 4|0);
 $1 = load4($value);
 ; store8($ref$tmp,i64_const(0,0),4); store4($ref$tmp+8|0,0,4);
 $cmp$i = ($1>>>0)>(4294967279);
 if ($cmp$i) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $cmp2$i = ($1>>>0)<(11);
 if ($cmp2$i) {
  $conv$i$i = $1&255;
  $__size_$i12$i = ((($ref$tmp)) + 11|0);
  store1($__size_$i12$i,$conv$i$i);
  $cmp$i$i = ($1|0)==(0);
  if ($cmp$i$i) {
   $__p$016$i = $ref$tmp;
  } else {
   $__p$015$i = $ref$tmp;
   label = 9;
  }
 } else {
  $add$i$i$i = (($1) + 16)|0;
  $and$i$i$i = $add$i$i$i & -16;
  $cmp$i1 = ($and$i$i$i|0)==(0);
  $$size$i = $cmp$i1 ? 1 : $and$i$i$i;
  $call1$i = (_malloc($$size$i)|0);
  $cmp12$i = ($call1$i|0)==(0|0);
  L7: do {
   if ($cmp12$i) {
    while(1) {
     $2 = load4(7784);
     $3 = (($2) + 0)|0;
     store4(7784,$3);
     $tobool$i = ($2|0)==(0);
     if ($tobool$i) {
      $call$lcssa$i = 0;
      break L7;
     }
     $4 = $2;
     FUNCTION_TABLE_v[$4 & 3]();
     $call$i = (_malloc($$size$i)|0);
     $cmp1$i = ($call$i|0)==(0|0);
     if (!($cmp1$i)) {
      $call$lcssa$i = $call$i;
      break;
     }
    }
   } else {
    $call$lcssa$i = $call1$i;
   }
  } while(0);
  store4($ref$tmp,$call$lcssa$i);
  $or$i$i = $and$i$i$i | -2147483648;
  $__cap_$i$i = ((($ref$tmp)) + 8|0);
  store4($__cap_$i$i,$or$i$i);
  $__size_$i$i = ((($ref$tmp)) + 4|0);
  store4($__size_$i$i,$1);
  $__p$015$i = $call$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($__p$015$i|0),($arraydecay$i|0),($1|0))|0;
  $__p$016$i = $__p$015$i;
 }
 $arrayidx$i = (($__p$016$i) + ($1)|0);
 store1($arrayidx$i,0);
 $5 = ((($memptr$offset)) + 11|0);
 $6 = load1($5);
 $tobool$i$i$i$i = ($6<<24>>24)<(0);
 if ($tobool$i$i$i$i) {
  $7 = load4($memptr$offset);
  store1($7,0);
  $__size_$i1$i$i$i = ((($memptr$offset)) + 4|0);
  store4($__size_$i1$i$i$i,0);
  $$pre = load1($5);
  $tobool$i$i$i = ($$pre<<24>>24)<(0);
  if ($tobool$i$i$i) {
   $__cap_$i$i$i = ((($memptr$offset)) + 8|0);
   $8 = load4($__cap_$i$i$i);
   $and$i$i$i2 = $8 & 2147483647;
   $phitmp$i$i = (($and$i$i$i2) + -1)|0;
   $16 = $$pre;$cond$i30$i = 0;$cond$i47$i = $phitmp$i$i;$tobool$i$i$i17 = 1;
  } else {
   $9 = $$pre;
   label = 14;
  }
 } else {
  store1($memptr$offset,0);
  store1($5,0);
  $9 = 0;
  label = 14;
 }
 if ((label|0) == 14) {
  $conv$i$i28$i = $9&255;
  $16 = $9;$cond$i30$i = $conv$i$i28$i;$cond$i47$i = 10;$tobool$i$i$i17 = 0;
 }
 $cmp$i33$i = ($cond$i30$i>>>0)<(11);
 $add$i$i$i3 = (($cond$i30$i) + 16)|0;
 $and$i$i34$i = $add$i$i$i3 & 496;
 $phitmp$i35$i = (($and$i$i34$i) + -1)|0;
 $$phitmp$i$i = $cmp$i33$i ? 10 : $phitmp$i35$i;
 $cmp6$i = ($$phitmp$i$i|0)==($cond$i47$i|0);
 if ($cmp6$i) {
  ; store8($memptr$offset,load8($ref$tmp,4),4); store4($memptr$offset+8 | 0,load4($ref$tmp+8 | 0,4),4);
  STACKTOP = sp;return;
 }
 if ($cmp$i33$i) {
  $14 = load4($memptr$offset);
  if ($tobool$i$i$i17) {
   $__new_data$050$i = $memptr$offset;$__now_long$0$off056$i = 0;$__p$052$i = $14;
   label = 23;
  } else {
   $__new_data$058$i = $memptr$offset;$__now_long$0$off061$i = 0;$__p$059$i = $14;$__was_long$0$off060$i = 1;
   label = 24;
  }
 } else {
  $add$i = (($$phitmp$i$i) + 1)|0;
  $cmp$i2 = ($add$i|0)==(0);
  $$size$i3 = $cmp$i2 ? 1 : $add$i;
  $call1$i4 = (_malloc($$size$i3)|0);
  $cmp12$i5 = ($call1$i4|0)==(0|0);
  L28: do {
   if ($cmp12$i5) {
    while(1) {
     $10 = load4(7784);
     $11 = (($10) + 0)|0;
     store4(7784,$11);
     $tobool$i7 = ($10|0)==(0);
     if ($tobool$i7) {
      $call$lcssa$i14 = 0;
      break L28;
     }
     $12 = $10;
     FUNCTION_TABLE_v[$12 & 3]();
     $call$i9 = (_malloc($$size$i3)|0);
     $cmp1$i10 = ($call$i9|0)==(0|0);
     if (!($cmp1$i10)) {
      $call$lcssa$i14 = $call$i9;
      break;
     }
    }
   } else {
    $call$lcssa$i14 = $call1$i4;
   }
  } while(0);
  if ($tobool$i$i$i17) {
   $13 = load4($memptr$offset);
   $__new_data$050$i = $call$lcssa$i14;$__now_long$0$off056$i = 1;$__p$052$i = $13;
   label = 23;
  } else {
   $__new_data$058$i = $call$lcssa$i14;$__now_long$0$off061$i = 1;$__p$059$i = $memptr$offset;$__was_long$0$off060$i = 0;
   label = 24;
  }
 }
 if ((label|0) == 23) {
  $__size_$i3$i$i = ((($memptr$offset)) + 4|0);
  $15 = load4($__size_$i3$i$i);
  $__new_data$049$i = $__new_data$050$i;$__now_long$0$off055$i = $__now_long$0$off056$i;$__p$051$i = $__p$052$i;$__was_long$0$off053$i = 1;$cond$i15$i = $15;
 }
 else if ((label|0) == 24) {
  $conv$i$i$i = $16&255;
  $__new_data$049$i = $__new_data$058$i;$__now_long$0$off055$i = $__now_long$0$off061$i;$__p$051$i = $__p$059$i;$__was_long$0$off053$i = $__was_long$0$off060$i;$cond$i15$i = $conv$i$i$i;
 }
 $add30$i = (($cond$i15$i) + 1)|0;
 $cmp$i$i6 = ($add30$i|0)==(0);
 if (!($cmp$i$i6)) {
  _memcpy(($__new_data$049$i|0),($__p$051$i|0),($add30$i|0))|0;
 }
 if ($__was_long$0$off053$i) {
  _free($__p$051$i);
 }
 if ($__now_long$0$off055$i) {
  $add38$i = (($$phitmp$i$i) + 1)|0;
  $or$i$i8 = $add38$i | -2147483648;
  $__cap_$i$i9 = ((($memptr$offset)) + 8|0);
  store4($__cap_$i$i9,$or$i$i8);
  $__size_$i9$i = ((($memptr$offset)) + 4|0);
  store4($__size_$i9$i,$cond$i30$i);
  store4($memptr$offset,$__new_data$049$i);
  ; store8($memptr$offset,load8($ref$tmp,4),4); store4($memptr$offset+8 | 0,load4($ref$tmp+8 | 0,4),4);
  STACKTOP = sp;return;
 } else {
  $conv$i$i11 = $cond$i30$i&255;
  store1($5,$conv$i$i11);
  ; store8($memptr$offset,load8($ref$tmp,4),4); store4($memptr$offset+8 | 0,load4($ref$tmp+8 | 0,4),4);
  STACKTOP = sp;return;
 }
}
function __ZNKSt3__26vectorI5VNodeNS_9allocatorIS1_EEE4sizeEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $__end_ = 0, $sub$ptr$div = 0, $sub$ptr$sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__end_ = ((($this)) + 4|0);
 $0 = load4($__end_);
 $1 = load4($this);
 $sub$ptr$sub = (($0) - ($1))|0;
 $sub$ptr$div = (($sub$ptr$sub|0) / 120)&-1;
 return ($sub$ptr$div|0);
}
function __ZN10emscripten8internal13getActualTypeI5VNodeEEPKvPT_($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1104|0);
}
function __ZN10emscripten8internal14raw_destructorI5VNodeEEvPT_($ptr) {
 $ptr = $ptr|0;
 var $isnull = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $isnull = ($ptr|0)==(0|0);
 if ($isnull) {
  return;
 }
 __ZN5VNodeD2Ev($ptr);
 _free($ptr);
 return;
}
function __ZN10emscripten8internal12operator_newI5VNodeJEEEPT_DpOT0_() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__begin_$i$i$i = 0, $__end_$i$i$i = 0, $__end_cap_$i$i$i = 0, $argv$i$i$i = 0, $call$i = 0, $call$lcssa$i = 0, $call1$i = 0, $call4$i$i1$i = 0, $cmp1$i = 0, $cmp12$i = 0, $data$i = 0, $handle$i$i$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $argv$i$i$i = sp;
 $call1$i = (_malloc(120)|0);
 $cmp12$i = ($call1$i|0)==(0|0);
 L1: do {
  if ($cmp12$i) {
   while(1) {
    $0 = load4(7784);
    $1 = (($0) + 0)|0;
    store4(7784,$1);
    $tobool$i = ($0|0)==(0);
    if ($tobool$i) {
     $call$lcssa$i = 0;
     break L1;
    }
    $2 = $0;
    FUNCTION_TABLE_v[$2 & 3]();
    $call$i = (_malloc(120)|0);
    $cmp1$i = ($call$i|0)==(0|0);
    if (!($cmp1$i)) {
     $call$lcssa$i = $call$i;
     break;
    }
   }
  } else {
   $call$lcssa$i = $call1$i;
  }
 } while(0);
 $data$i = ((($call$lcssa$i)) + 36|0);
 ; store8($call$lcssa$i,i64_const(0,0),4); store8($call$lcssa$i+8|0,i64_const(0,0),4); store8($call$lcssa$i+16|0,i64_const(0,0),4); store8($call$lcssa$i+24|0,i64_const(0,0),4); store4($call$lcssa$i+32|0,0,4);
 __ZN9VNodeDataC2Ev($data$i);
 $3 = load4(7272);
 __emval_incref(($3|0));
 $4 = load4(7272);
 store4($argv$i$i$i,$4);
 $call4$i$i1$i = (__emval_take_value((1024|0),($argv$i$i$i|0))|0);
 $handle$i$i$i = ((($call$lcssa$i)) + 104|0);
 store4($handle$i$i$i,$call4$i$i1$i);
 $__begin_$i$i$i = ((($call$lcssa$i)) + 108|0);
 store4($__begin_$i$i$i,0);
 $__end_$i$i$i = ((($call$lcssa$i)) + 112|0);
 store4($__end_$i$i$i,0);
 $__end_cap_$i$i$i = ((($call$lcssa$i)) + 116|0);
 store4($__end_cap_$i$i$i,0);
 STACKTOP = sp;return ($call$lcssa$i|0);
}
function __ZN10emscripten8internal7InvokerIP5VNodeJEE6invokeEPFS3_vE($fn) {
 $fn = $fn|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (FUNCTION_TABLE_i[$fn & 3]()|0);
 return ($call|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_($field,$ptr) {
 $field = $field|0;
 $ptr = $ptr|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__size_$i3$i$i$i = 0, $add$i = 0, $call1$i = 0, $cond$i$i$i = 0, $cond$i$i21$i = 0, $conv$i$i$i$i = 0, $data$i = 0, $memptr$offset = 0, $tobool$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($field);
 $memptr$offset = (($ptr) + ($0)|0);
 $1 = ((($memptr$offset)) + 11|0);
 $2 = load1($1);
 $tobool$i$i$i$i = ($2<<24>>24)<(0);
 $__size_$i3$i$i$i = ((($memptr$offset)) + 4|0);
 $3 = load4($__size_$i3$i$i$i);
 $conv$i$i$i$i = $2&255;
 $cond$i$i$i = $tobool$i$i$i$i ? $3 : $conv$i$i$i$i;
 $add$i = (($cond$i$i$i) + 4)|0;
 $call1$i = (_malloc($add$i)|0);
 store4($call1$i,$cond$i$i$i);
 $data$i = ((($call1$i)) + 4|0);
 $4 = load4($memptr$offset);
 $cond$i$i21$i = $tobool$i$i$i$i ? $4 : $memptr$offset;
 _memcpy(($data$i|0),($cond$i$i21$i|0),($cond$i$i$i|0))|0;
 return ($call1$i|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E($field,$ptr,$value) {
 $field = $field|0;
 $ptr = $ptr|0;
 $value = $value|0;
 var $$phitmp$i$i = 0, $$pre = 0, $$size$i = 0, $$size$i3 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $__cap_$i$i = 0, $__cap_$i$i$i = 0, $__cap_$i$i9 = 0, $__new_data$049$i = 0, $__new_data$050$i = 0, $__new_data$058$i = 0, $__now_long$0$off055$i = 0, $__now_long$0$off056$i = 0, $__now_long$0$off061$i = 0, $__p$015$i = 0, $__p$016$i = 0, $__p$051$i = 0, $__p$052$i = 0, $__p$059$i = 0, $__size_$i$i = 0, $__size_$i1$i$i$i = 0, $__size_$i12$i = 0, $__size_$i3$i$i = 0, $__size_$i9$i = 0;
 var $__was_long$0$off053$i = 0, $__was_long$0$off060$i = 0, $add$i = 0, $add$i$i$i = 0, $add$i$i$i3 = 0, $add30$i = 0, $add38$i = 0, $and$i$i$i = 0, $and$i$i$i2 = 0, $and$i$i34$i = 0, $arraydecay$i = 0, $arrayidx$i = 0, $call$i = 0, $call$i9 = 0, $call$lcssa$i = 0, $call$lcssa$i14 = 0, $call1$i = 0, $call1$i4 = 0, $cmp$i = 0, $cmp$i$i = 0;
 var $cmp$i$i6 = 0, $cmp$i1 = 0, $cmp$i2 = 0, $cmp$i33$i = 0, $cmp1$i = 0, $cmp1$i10 = 0, $cmp12$i = 0, $cmp12$i5 = 0, $cmp2$i = 0, $cmp6$i = 0, $cond$i15$i = 0, $cond$i30$i = 0, $cond$i47$i = 0, $conv$i$i = 0, $conv$i$i$i = 0, $conv$i$i11 = 0, $conv$i$i28$i = 0, $memptr$offset = 0, $or$i$i = 0, $or$i$i8 = 0;
 var $phitmp$i$i = 0, $phitmp$i35$i = 0, $ref$tmp = 0, $tobool$i = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i17 = 0, $tobool$i7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 $0 = load4($field);
 $memptr$offset = (($ptr) + ($0)|0);
 $arraydecay$i = ((($value)) + 4|0);
 $1 = load4($value);
 ; store8($ref$tmp,i64_const(0,0),4); store4($ref$tmp+8|0,0,4);
 $cmp$i = ($1>>>0)>(4294967279);
 if ($cmp$i) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $cmp2$i = ($1>>>0)<(11);
 if ($cmp2$i) {
  $conv$i$i = $1&255;
  $__size_$i12$i = ((($ref$tmp)) + 11|0);
  store1($__size_$i12$i,$conv$i$i);
  $cmp$i$i = ($1|0)==(0);
  if ($cmp$i$i) {
   $__p$016$i = $ref$tmp;
  } else {
   $__p$015$i = $ref$tmp;
   label = 9;
  }
 } else {
  $add$i$i$i = (($1) + 16)|0;
  $and$i$i$i = $add$i$i$i & -16;
  $cmp$i1 = ($and$i$i$i|0)==(0);
  $$size$i = $cmp$i1 ? 1 : $and$i$i$i;
  $call1$i = (_malloc($$size$i)|0);
  $cmp12$i = ($call1$i|0)==(0|0);
  L7: do {
   if ($cmp12$i) {
    while(1) {
     $2 = load4(7784);
     $3 = (($2) + 0)|0;
     store4(7784,$3);
     $tobool$i = ($2|0)==(0);
     if ($tobool$i) {
      $call$lcssa$i = 0;
      break L7;
     }
     $4 = $2;
     FUNCTION_TABLE_v[$4 & 3]();
     $call$i = (_malloc($$size$i)|0);
     $cmp1$i = ($call$i|0)==(0|0);
     if (!($cmp1$i)) {
      $call$lcssa$i = $call$i;
      break;
     }
    }
   } else {
    $call$lcssa$i = $call1$i;
   }
  } while(0);
  store4($ref$tmp,$call$lcssa$i);
  $or$i$i = $and$i$i$i | -2147483648;
  $__cap_$i$i = ((($ref$tmp)) + 8|0);
  store4($__cap_$i$i,$or$i$i);
  $__size_$i$i = ((($ref$tmp)) + 4|0);
  store4($__size_$i$i,$1);
  $__p$015$i = $call$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($__p$015$i|0),($arraydecay$i|0),($1|0))|0;
  $__p$016$i = $__p$015$i;
 }
 $arrayidx$i = (($__p$016$i) + ($1)|0);
 store1($arrayidx$i,0);
 $5 = ((($memptr$offset)) + 11|0);
 $6 = load1($5);
 $tobool$i$i$i$i = ($6<<24>>24)<(0);
 if ($tobool$i$i$i$i) {
  $7 = load4($memptr$offset);
  store1($7,0);
  $__size_$i1$i$i$i = ((($memptr$offset)) + 4|0);
  store4($__size_$i1$i$i$i,0);
  $$pre = load1($5);
  $tobool$i$i$i = ($$pre<<24>>24)<(0);
  if ($tobool$i$i$i) {
   $__cap_$i$i$i = ((($memptr$offset)) + 8|0);
   $8 = load4($__cap_$i$i$i);
   $and$i$i$i2 = $8 & 2147483647;
   $phitmp$i$i = (($and$i$i$i2) + -1)|0;
   $16 = $$pre;$cond$i30$i = 0;$cond$i47$i = $phitmp$i$i;$tobool$i$i$i17 = 1;
  } else {
   $9 = $$pre;
   label = 14;
  }
 } else {
  store1($memptr$offset,0);
  store1($5,0);
  $9 = 0;
  label = 14;
 }
 if ((label|0) == 14) {
  $conv$i$i28$i = $9&255;
  $16 = $9;$cond$i30$i = $conv$i$i28$i;$cond$i47$i = 10;$tobool$i$i$i17 = 0;
 }
 $cmp$i33$i = ($cond$i30$i>>>0)<(11);
 $add$i$i$i3 = (($cond$i30$i) + 16)|0;
 $and$i$i34$i = $add$i$i$i3 & 496;
 $phitmp$i35$i = (($and$i$i34$i) + -1)|0;
 $$phitmp$i$i = $cmp$i33$i ? 10 : $phitmp$i35$i;
 $cmp6$i = ($$phitmp$i$i|0)==($cond$i47$i|0);
 if ($cmp6$i) {
  ; store8($memptr$offset,load8($ref$tmp,4),4); store4($memptr$offset+8 | 0,load4($ref$tmp+8 | 0,4),4);
  STACKTOP = sp;return;
 }
 if ($cmp$i33$i) {
  $14 = load4($memptr$offset);
  if ($tobool$i$i$i17) {
   $__new_data$050$i = $memptr$offset;$__now_long$0$off056$i = 0;$__p$052$i = $14;
   label = 23;
  } else {
   $__new_data$058$i = $memptr$offset;$__now_long$0$off061$i = 0;$__p$059$i = $14;$__was_long$0$off060$i = 1;
   label = 24;
  }
 } else {
  $add$i = (($$phitmp$i$i) + 1)|0;
  $cmp$i2 = ($add$i|0)==(0);
  $$size$i3 = $cmp$i2 ? 1 : $add$i;
  $call1$i4 = (_malloc($$size$i3)|0);
  $cmp12$i5 = ($call1$i4|0)==(0|0);
  L28: do {
   if ($cmp12$i5) {
    while(1) {
     $10 = load4(7784);
     $11 = (($10) + 0)|0;
     store4(7784,$11);
     $tobool$i7 = ($10|0)==(0);
     if ($tobool$i7) {
      $call$lcssa$i14 = 0;
      break L28;
     }
     $12 = $10;
     FUNCTION_TABLE_v[$12 & 3]();
     $call$i9 = (_malloc($$size$i3)|0);
     $cmp1$i10 = ($call$i9|0)==(0|0);
     if (!($cmp1$i10)) {
      $call$lcssa$i14 = $call$i9;
      break;
     }
    }
   } else {
    $call$lcssa$i14 = $call1$i4;
   }
  } while(0);
  if ($tobool$i$i$i17) {
   $13 = load4($memptr$offset);
   $__new_data$050$i = $call$lcssa$i14;$__now_long$0$off056$i = 1;$__p$052$i = $13;
   label = 23;
  } else {
   $__new_data$058$i = $call$lcssa$i14;$__now_long$0$off061$i = 1;$__p$059$i = $memptr$offset;$__was_long$0$off060$i = 0;
   label = 24;
  }
 }
 if ((label|0) == 23) {
  $__size_$i3$i$i = ((($memptr$offset)) + 4|0);
  $15 = load4($__size_$i3$i$i);
  $__new_data$049$i = $__new_data$050$i;$__now_long$0$off055$i = $__now_long$0$off056$i;$__p$051$i = $__p$052$i;$__was_long$0$off053$i = 1;$cond$i15$i = $15;
 }
 else if ((label|0) == 24) {
  $conv$i$i$i = $16&255;
  $__new_data$049$i = $__new_data$058$i;$__now_long$0$off055$i = $__now_long$0$off061$i;$__p$051$i = $__p$059$i;$__was_long$0$off053$i = $__was_long$0$off060$i;$cond$i15$i = $conv$i$i$i;
 }
 $add30$i = (($cond$i15$i) + 1)|0;
 $cmp$i$i6 = ($add30$i|0)==(0);
 if (!($cmp$i$i6)) {
  _memcpy(($__new_data$049$i|0),($__p$051$i|0),($add30$i|0))|0;
 }
 if ($__was_long$0$off053$i) {
  _free($__p$051$i);
 }
 if ($__now_long$0$off055$i) {
  $add38$i = (($$phitmp$i$i) + 1)|0;
  $or$i$i8 = $add38$i | -2147483648;
  $__cap_$i$i9 = ((($memptr$offset)) + 8|0);
  store4($__cap_$i$i9,$or$i$i8);
  $__size_$i9$i = ((($memptr$offset)) + 4|0);
  store4($__size_$i9$i,$cond$i30$i);
  store4($memptr$offset,$__new_data$049$i);
  ; store8($memptr$offset,load8($ref$tmp,4),4); store4($memptr$offset+8 | 0,load4($ref$tmp+8 | 0,4),4);
  STACKTOP = sp;return;
 } else {
  $conv$i$i11 = $cond$i30$i&255;
  store1($5,$conv$i$i11);
  ; store8($memptr$offset,load8($ref$tmp,4),4); store4($memptr$offset+8 | 0,load4($ref$tmp+8 | 0,4),4);
  STACKTOP = sp;return;
 }
}
function __ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7getWireIS2_EEPS3_RKMS2_S3_RKT_($field,$ptr) {
 $field = $field|0;
 $ptr = $ptr|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $call$i1 = 0, $call$lcssa$i = 0, $call1$i = 0, $cmp1$i = 0, $cmp12$i = 0, $memptr$offset = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($field);
 $memptr$offset = (($ptr) + ($0)|0);
 $call1$i = (_malloc(68)|0);
 $cmp12$i = ($call1$i|0)==(0|0);
 L1: do {
  if ($cmp12$i) {
   while(1) {
    $1 = load4(7784);
    $2 = (($1) + 0)|0;
    store4(7784,$2);
    $tobool$i = ($1|0)==(0);
    if ($tobool$i) {
     $call$lcssa$i = 0;
     break L1;
    }
    $3 = $1;
    FUNCTION_TABLE_v[$3 & 3]();
    $call$i1 = (_malloc(68)|0);
    $cmp1$i = ($call$i1|0)==(0|0);
    if (!($cmp1$i)) {
     $call$lcssa$i = $call$i1;
     break;
    }
   }
  } else {
   $call$lcssa$i = $call1$i;
  }
 } while(0);
 __ZN9VNodeDataC2ERKS_($call$lcssa$i,$memptr$offset);
 return ($call$lcssa$i|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7setWireIS2_EEvRKMS2_S3_RT_PS3_($field,$ptr,$value) {
 $field = $field|0;
 $ptr = $ptr|0;
 $value = $value|0;
 var $0 = 0, $memptr$offset = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($field);
 $memptr$offset = (($ptr) + ($0)|0);
 __ZN9VNodeDataaSERKS_($memptr$offset,$value);
 return;
}
function __ZN9VNodeDataaSERKS_($this,$0) {
 $this = $this|0;
 $0 = $0|0;
 var $$pre$i$i30$i = 0, $$size$i = 0, $$size$i$i = 0, $$size$i3 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i$i = 0, $$sroa$speculated$i86 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $8 = 0, $9 = 0, $__begin1$addr$05$i$i$i = 0, $__begin1$addr$05$i$i32$i = 0, $__begin_$i = 0;
 var $__cap_$i$i = 0, $__cap_$i$i$i = 0, $__cap_$i$i$i37 = 0, $__cap_$i$i102 = 0, $__end_$i = 0, $__end_$i$i$i$i$i = 0, $__end_$i15$i = 0, $__end_$i16$i = 0, $__first$addr$05$i$i$i = 0, $__first_$i$i$i$i$i$i = 0, $__result$addr$0$lcssa$i$i$i = 0, $__result$addr$06$i$i$i = 0, $__size_$i$i = 0, $__size_$i$i$i = 0, $__size_$i$i$i$i = 0, $__size_$i$i$i$i23 = 0, $__size_$i$i$i35 = 0, $__size_$i$i103 = 0, $__size_$i2$i$i = 0, $__size_$i2$i$i56 = 0;
 var $__size_$i3$i$i = 0, $__size_$i3$i$i28 = 0, $add$i$i$i = 0, $add$i$i$i88 = 0, $add$ptr$i$i = 0, $add$ptr$i$i$__last$i = 0, $add$ptr$i$i$i = 0, $and$i$i$i = 0, $and$i$i$i19 = 0, $and$i$i$i38 = 0, $and$i$i$i89 = 0, $args = 0, $arrayidx$i = 0, $arrayidx$i104 = 0, $arrayidx$i20 = 0, $arrayidx$i53 = 0, $attachData = 0, $attachData15 = 0, $attrs = 0, $attrs3 = 0;
 var $call$i = 0, $call$i$i = 0, $call$i9 = 0, $call$lcssa$i = 0, $call$lcssa$i$i = 0, $call$lcssa$i14 = 0, $call1$i = 0, $call1$i$i = 0, $call1$i4 = 0, $className = 0, $className5 = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i46$i = 0, $cmp$i$i$i$i85 = 0, $cmp$i$i20 = 0, $cmp$i$i23$i = 0;
 var $cmp$i$i37$i = 0, $cmp$i$i40$i = 0, $cmp$i$i50 = 0, $cmp$i1 = 0, $cmp$i1$i = 0, $cmp$i16 = 0, $cmp$i2 = 0, $cmp$i4 = 0, $cmp$i42 = 0, $cmp$i42$i = 0, $cmp$i42$i18 = 0, $cmp$i42$i87 = 0, $cmp$i44$i = 0, $cmp$i71 = 0, $cmp$i8 = 0, $cmp1$i = 0, $cmp1$i$i = 0, $cmp1$i10 = 0, $cmp12$i = 0, $cmp12$i$i = 0;
 var $cmp12$i5 = 0, $cmp23$i = 0, $cmp23$i95 = 0, $cmp3$i$i = 0, $cmp4$i = 0, $cmp4$i$i$i = 0, $cmp4$i$i20$i = 0, $cmp4$i$i29$i = 0, $cmp41$i = 0, $cmp41$i98 = 0, $cmp5$i = 0, $cmp5$i82 = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i$i$i27 = 0, $cond$i$i17 = 0, $cond$i$i3 = 0, $cond$i$i30 = 0, $cond$i$i41 = 0, $cond$i$i81 = 0;
 var $cond$i19$i = 0, $cond$i19$i49 = 0, $cond48$i = 0, $cond48$i92 = 0, $conv$i$i$i = 0, $conv$i$i$i29 = 0, $conv$i$i29$i = 0, $conv$i$i29$i58 = 0, $dataset = 0, $dataset9 = 0, $hero = 0, $hero13 = 0, $incdec$ptr$i$i$i = 0, $incdec$ptr$i$i$i$i$i = 0, $incdec$ptr$i$i21$i = 0, $incdec$ptr$i$i35$i = 0, $incdec$ptr$i$i41$i = 0, $incdec$ptr1$i$i$i = 0, $incdec$ptr1$i$i22$i = 0, $incdec$ptr1$i$i36$i = 0;
 var $key = 0, $key17 = 0, $mul$i = 0, $mul$i$i = 0, $mul$i$i$i$i = 0, $mul$i84 = 0, $ns108 = 0, $ns19109 = 0, $on = 0, $on11 = 0, $or$i$i = 0, $or$i$i101 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $phitmp$i$i39 = 0, $phitmp$i90 = 0, $retval$0$i$i = 0, $style = 0, $style7 = 0, $sub$i = 0;
 var $sub$i66 = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$i$i$i = 0, $sub$ptr$div$i$i$i$i = 0, $sub$ptr$div$i$i14$i = 0, $sub$ptr$lhs$cast$i$i$i = 0, $sub$ptr$rhs$cast$i$i$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i$i$i = 0, $sub$ptr$sub$i$i13$i = 0, $sub2$i = 0, $sub2$i70 = 0, $tobool$i = 0, $tobool$i$i = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i$i24 = 0, $tobool$i$i$i36 = 0, $tobool$i$i28$i = 0, $tobool$i$i28$i54 = 0;
 var $tobool$i7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = load4($0);
 __emval_incref(($1|0));
 $2 = load4($this);
 __emval_decref(($2|0));
 $3 = load4($0);
 store4($this,$3);
 $attrs = ((($this)) + 4|0);
 $attrs3 = ((($0)) + 4|0);
 $4 = load4($attrs3);
 __emval_incref(($4|0));
 $5 = load4($attrs);
 __emval_decref(($5|0));
 $6 = load4($attrs3);
 store4($attrs,$6);
 $className = ((($this)) + 8|0);
 $className5 = ((($0)) + 8|0);
 $7 = load4($className5);
 __emval_incref(($7|0));
 $8 = load4($className);
 __emval_decref(($8|0));
 $9 = load4($className5);
 store4($className,$9);
 $style = ((($this)) + 12|0);
 $style7 = ((($0)) + 12|0);
 $10 = load4($style7);
 __emval_incref(($10|0));
 $11 = load4($style);
 __emval_decref(($11|0));
 $12 = load4($style7);
 store4($style,$12);
 $dataset = ((($this)) + 16|0);
 $dataset9 = ((($0)) + 16|0);
 $13 = load4($dataset9);
 __emval_incref(($13|0));
 $14 = load4($dataset);
 __emval_decref(($14|0));
 $15 = load4($dataset9);
 store4($dataset,$15);
 $on = ((($this)) + 20|0);
 $on11 = ((($0)) + 20|0);
 $16 = load4($on11);
 __emval_incref(($16|0));
 $17 = load4($on);
 __emval_decref(($17|0));
 $18 = load4($on11);
 store4($on,$18);
 $hero = ((($this)) + 24|0);
 $hero13 = ((($0)) + 24|0);
 $19 = load4($hero13);
 __emval_incref(($19|0));
 $20 = load4($hero);
 __emval_decref(($20|0));
 $21 = load4($hero13);
 store4($hero,$21);
 $attachData = ((($this)) + 28|0);
 $attachData15 = ((($0)) + 28|0);
 $22 = load4($attachData15);
 __emval_incref(($22|0));
 $23 = load4($attachData);
 __emval_decref(($23|0));
 $24 = load4($attachData15);
 store4($attachData,$24);
 $key = ((($this)) + 32|0);
 $key17 = ((($0)) + 32|0);
 $cmp$i1 = ($this|0)==($0|0);
 if ($cmp$i1) {
  return;
 }
 $__size_$i$i$i$i = ((($key17)) + 11|0);
 $25 = load1($__size_$i$i$i$i);
 $tobool$i$i$i$i = ($25<<24>>24)<(0);
 $26 = load4($key17);
 $cond$i$i$i = $tobool$i$i$i$i ? $26 : $key17;
 $__size_$i3$i$i = ((($0)) + 36|0);
 $27 = load4($__size_$i3$i$i);
 $conv$i$i$i = $25&255;
 $cond$i$i = $tobool$i$i$i$i ? $27 : $conv$i$i$i;
 $__size_$i$i$i = ((($key)) + 11|0);
 $28 = load1($__size_$i$i$i);
 $tobool$i$i$i = ($28<<24>>24)<(0);
 if ($tobool$i$i$i) {
  $__cap_$i$i$i = ((($this)) + 40|0);
  $29 = load4($__cap_$i$i$i);
  $and$i$i$i = $29 & 2147483647;
  $phitmp$i$i = (($and$i$i$i) + -1)|0;
  $cond$i$i3 = $phitmp$i$i;
 } else {
  $cond$i$i3 = 10;
 }
 $cmp$i4 = ($cond$i$i>>>0)>($cond$i$i3>>>0);
 do {
  if ($cmp$i4) {
   $sub$i = (($cond$i$i) - ($cond$i$i3))|0;
   $sub2$i = (-18 - ($cond$i$i3))|0;
   $cmp$i8 = ($sub2$i>>>0)<($sub$i>>>0);
   if ($cmp$i8) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($tobool$i$i$i) {
    $32 = load4($key);
    $cond$i$i17 = $32;
   } else {
    $cond$i$i17 = $key;
   }
   $cmp5$i = ($cond$i$i3>>>0)<(2147483623);
   if ($cmp5$i) {
    $mul$i = $cond$i$i3 << 1;
    $cmp$i$i$i$i = ($cond$i$i>>>0)<($mul$i>>>0);
    $$sroa$speculated$i = $cmp$i$i$i$i ? $mul$i : $cond$i$i;
    $cmp$i42$i = ($$sroa$speculated$i>>>0)<(11);
    $add$i$i$i = (($$sroa$speculated$i) + 16)|0;
    $and$i$i$i19 = $add$i$i$i & -16;
    $phitmp$i = $cmp$i42$i ? 11 : $and$i$i$i19;
    $cond48$i = $phitmp$i;
   } else {
    $cond48$i = -17;
   }
   $cmp$i = ($cond48$i|0)==(0);
   $$size$i = $cmp$i ? 1 : $cond48$i;
   $call1$i = (_malloc($$size$i)|0);
   $cmp12$i = ($call1$i|0)==(0|0);
   L19: do {
    if ($cmp12$i) {
     while(1) {
      $33 = load4(7784);
      $34 = (($33) + 0)|0;
      store4(7784,$34);
      $tobool$i = ($33|0)==(0);
      if ($tobool$i) {
       $call$lcssa$i = 0;
       break L19;
      }
      $35 = $33;
      FUNCTION_TABLE_v[$35 & 3]();
      $call$i = (_malloc($$size$i)|0);
      $cmp1$i = ($call$i|0)==(0|0);
      if (!($cmp1$i)) {
       $call$lcssa$i = $call$i;
       break;
      }
     }
    } else {
     $call$lcssa$i = $call1$i;
    }
   } while(0);
   $cmp23$i = ($cond$i$i|0)==(0);
   if (!($cmp23$i)) {
    _memcpy(($call$lcssa$i|0),($cond$i$i$i|0),($cond$i$i|0))|0;
   }
   $cmp41$i = ($cond$i$i3|0)==(10);
   if (!($cmp41$i)) {
    _free($cond$i$i17);
   }
   store4($key,$call$lcssa$i);
   $or$i$i = $cond48$i | -2147483648;
   $__cap_$i$i = ((($this)) + 40|0);
   store4($__cap_$i$i,$or$i$i);
   $__size_$i$i = ((($this)) + 36|0);
   store4($__size_$i$i,$cond$i$i);
   $arrayidx$i20 = (($call$lcssa$i) + ($cond$i$i)|0);
   store1($arrayidx$i20,0);
  } else {
   if ($tobool$i$i$i) {
    $30 = load4($key);
    $cond$i19$i = $30;
   } else {
    $cond$i19$i = $key;
   }
   $cmp$i$i = ($cond$i$i|0)==(0);
   if (!($cmp$i$i)) {
    _memmove(($cond$i19$i|0),($cond$i$i$i|0),($cond$i$i|0))|0;
   }
   $arrayidx$i = (($cond$i19$i) + ($cond$i$i)|0);
   store1($arrayidx$i,0);
   $31 = load1($__size_$i$i$i);
   $tobool$i$i28$i = ($31<<24>>24)<(0);
   if ($tobool$i$i28$i) {
    $__size_$i2$i$i = ((($this)) + 36|0);
    store4($__size_$i2$i$i,$cond$i$i);
    break;
   } else {
    $conv$i$i29$i = $cond$i$i&255;
    store1($__size_$i$i$i,$conv$i$i29$i);
    break;
   }
  }
 } while(0);
 $ns108 = ((($this)) + 44|0);
 $ns19109 = ((($0)) + 44|0);
 $__size_$i$i$i$i23 = ((($ns19109)) + 11|0);
 $36 = load1($__size_$i$i$i$i23);
 $tobool$i$i$i$i24 = ($36<<24>>24)<(0);
 $37 = load4($ns19109);
 $cond$i$i$i27 = $tobool$i$i$i$i24 ? $37 : $ns19109;
 $__size_$i3$i$i28 = ((($0)) + 48|0);
 $38 = load4($__size_$i3$i$i28);
 $conv$i$i$i29 = $36&255;
 $cond$i$i30 = $tobool$i$i$i$i24 ? $38 : $conv$i$i$i29;
 $__size_$i$i$i35 = ((($ns108)) + 11|0);
 $39 = load1($__size_$i$i$i35);
 $tobool$i$i$i36 = ($39<<24>>24)<(0);
 if ($tobool$i$i$i36) {
  $__cap_$i$i$i37 = ((($this)) + 52|0);
  $40 = load4($__cap_$i$i$i37);
  $and$i$i$i38 = $40 & 2147483647;
  $phitmp$i$i39 = (($and$i$i$i38) + -1)|0;
  $cond$i$i41 = $phitmp$i$i39;
 } else {
  $cond$i$i41 = 10;
 }
 $cmp$i42 = ($cond$i$i30>>>0)>($cond$i$i41>>>0);
 do {
  if ($cmp$i42) {
   $sub$i66 = (($cond$i$i30) - ($cond$i$i41))|0;
   $sub2$i70 = (-18 - ($cond$i$i41))|0;
   $cmp$i71 = ($sub2$i70>>>0)<($sub$i66>>>0);
   if ($cmp$i71) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($tobool$i$i$i36) {
    $43 = load4($ns108);
    $cond$i$i81 = $43;
   } else {
    $cond$i$i81 = $ns108;
   }
   $cmp5$i82 = ($cond$i$i41>>>0)<(2147483623);
   if ($cmp5$i82) {
    $mul$i84 = $cond$i$i41 << 1;
    $cmp$i$i$i$i85 = ($cond$i$i30>>>0)<($mul$i84>>>0);
    $$sroa$speculated$i86 = $cmp$i$i$i$i85 ? $mul$i84 : $cond$i$i30;
    $cmp$i42$i87 = ($$sroa$speculated$i86>>>0)<(11);
    $add$i$i$i88 = (($$sroa$speculated$i86) + 16)|0;
    $and$i$i$i89 = $add$i$i$i88 & -16;
    $phitmp$i90 = $cmp$i42$i87 ? 11 : $and$i$i$i89;
    $cond48$i92 = $phitmp$i90;
   } else {
    $cond48$i92 = -17;
   }
   $cmp$i2 = ($cond48$i92|0)==(0);
   $$size$i3 = $cmp$i2 ? 1 : $cond48$i92;
   $call1$i4 = (_malloc($$size$i3)|0);
   $cmp12$i5 = ($call1$i4|0)==(0|0);
   L57: do {
    if ($cmp12$i5) {
     while(1) {
      $44 = load4(7784);
      $45 = (($44) + 0)|0;
      store4(7784,$45);
      $tobool$i7 = ($44|0)==(0);
      if ($tobool$i7) {
       $call$lcssa$i14 = 0;
       break L57;
      }
      $46 = $44;
      FUNCTION_TABLE_v[$46 & 3]();
      $call$i9 = (_malloc($$size$i3)|0);
      $cmp1$i10 = ($call$i9|0)==(0|0);
      if (!($cmp1$i10)) {
       $call$lcssa$i14 = $call$i9;
       break;
      }
     }
    } else {
     $call$lcssa$i14 = $call1$i4;
    }
   } while(0);
   $cmp23$i95 = ($cond$i$i30|0)==(0);
   if (!($cmp23$i95)) {
    _memcpy(($call$lcssa$i14|0),($cond$i$i$i27|0),($cond$i$i30|0))|0;
   }
   $cmp41$i98 = ($cond$i$i41|0)==(10);
   if (!($cmp41$i98)) {
    _free($cond$i$i81);
   }
   store4($ns108,$call$lcssa$i14);
   $or$i$i101 = $cond48$i92 | -2147483648;
   $__cap_$i$i102 = ((($this)) + 52|0);
   store4($__cap_$i$i102,$or$i$i101);
   $__size_$i$i103 = ((($this)) + 48|0);
   store4($__size_$i$i103,$cond$i$i30);
   $arrayidx$i104 = (($call$lcssa$i14) + ($cond$i$i30)|0);
   store1($arrayidx$i104,0);
  } else {
   if ($tobool$i$i$i36) {
    $41 = load4($ns108);
    $cond$i19$i49 = $41;
   } else {
    $cond$i19$i49 = $ns108;
   }
   $cmp$i$i50 = ($cond$i$i30|0)==(0);
   if (!($cmp$i$i50)) {
    _memmove(($cond$i19$i49|0),($cond$i$i$i27|0),($cond$i$i30|0))|0;
   }
   $arrayidx$i53 = (($cond$i19$i49) + ($cond$i$i30)|0);
   store1($arrayidx$i53,0);
   $42 = load1($__size_$i$i$i35);
   $tobool$i$i28$i54 = ($42<<24>>24)<(0);
   if ($tobool$i$i28$i54) {
    $__size_$i2$i$i56 = ((($this)) + 48|0);
    store4($__size_$i2$i$i56,$cond$i$i30);
    break;
   } else {
    $conv$i$i29$i58 = $cond$i$i30&255;
    store1($__size_$i$i$i35,$conv$i$i29$i58);
    break;
   }
  }
 } while(0);
 $args = ((($this)) + 56|0);
 $__begin_$i = ((($0)) + 56|0);
 $47 = load4($__begin_$i);
 $__end_$i = ((($0)) + 60|0);
 $48 = load4($__end_$i);
 $sub$ptr$lhs$cast$i$i$i = $48;
 $sub$ptr$rhs$cast$i$i$i = $47;
 $sub$ptr$sub$i$i$i = (($sub$ptr$lhs$cast$i$i$i) - ($sub$ptr$rhs$cast$i$i$i))|0;
 $sub$ptr$div$i$i$i = $sub$ptr$sub$i$i$i >> 2;
 $__first_$i$i$i$i$i$i = ((($this)) + 64|0);
 $49 = load4($__first_$i$i$i$i$i$i);
 $50 = load4($args);
 $sub$ptr$sub$i$i13$i = (($49) - ($50))|0;
 $sub$ptr$div$i$i14$i = $sub$ptr$sub$i$i13$i >> 2;
 $cmp$i16 = ($sub$ptr$div$i$i$i>>>0)>($sub$ptr$div$i$i14$i>>>0);
 $51 = $50;
 if (!($cmp$i16)) {
  $__end_$i16$i = ((($this)) + 60|0);
  $52 = load4($__end_$i16$i);
  $sub$ptr$sub$i$i = (($52) - ($50))|0;
  $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 2;
  $cmp4$i = ($sub$ptr$div$i$i$i>>>0)>($sub$ptr$div$i$i>>>0);
  $add$ptr$i$i$i = (($47) + ($sub$ptr$div$i$i<<2)|0);
  $add$ptr$i$i$__last$i = $cmp4$i ? $add$ptr$i$i$i : $48;
  $cmp4$i$i20$i = ($add$ptr$i$i$__last$i|0)==($47|0);
  if ($cmp4$i$i20$i) {
   $__result$addr$0$lcssa$i$i$i = $51;
  } else {
   $__first$addr$05$i$i$i = $47;$__result$addr$06$i$i$i = $51;
   while(1) {
    $53 = load4($__first$addr$05$i$i$i);
    __emval_incref(($53|0));
    $54 = load4($__result$addr$06$i$i$i);
    __emval_decref(($54|0));
    $55 = load4($__first$addr$05$i$i$i);
    store4($__result$addr$06$i$i$i,$55);
    $incdec$ptr$i$i21$i = ((($__first$addr$05$i$i$i)) + 4|0);
    $incdec$ptr1$i$i22$i = ((($__result$addr$06$i$i$i)) + 4|0);
    $cmp$i$i23$i = ($incdec$ptr$i$i21$i|0)==($add$ptr$i$i$__last$i|0);
    if ($cmp$i$i23$i) {
     $__result$addr$0$lcssa$i$i$i = $incdec$ptr1$i$i22$i;
     break;
    } else {
     $__first$addr$05$i$i$i = $incdec$ptr$i$i21$i;$__result$addr$06$i$i$i = $incdec$ptr1$i$i22$i;
    }
   }
  }
  if (!($cmp4$i)) {
   while(1) {
    $59 = load4($__end_$i16$i);
    $cmp$i$i40$i = ($59|0)==($__result$addr$0$lcssa$i$i$i|0);
    if ($cmp$i$i40$i) {
     break;
    }
    $incdec$ptr$i$i41$i = ((($59)) + -4|0);
    store4($__end_$i16$i,$incdec$ptr$i$i41$i);
    $60 = load4($incdec$ptr$i$i41$i);
    __emval_decref(($60|0));
   }
   return;
  }
  $cmp4$i$i29$i = ($add$ptr$i$i$__last$i|0)==($48|0);
  if ($cmp4$i$i29$i) {
   return;
  }
  $$pre$i$i30$i = load4($__end_$i16$i);
  $57 = $$pre$i$i30$i;$__begin1$addr$05$i$i32$i = $add$ptr$i$i$i;
  while(1) {
   $56 = load4($__begin1$addr$05$i$i32$i);
   store4($57,$56);
   __emval_incref(($56|0));
   $incdec$ptr$i$i35$i = ((($__begin1$addr$05$i$i32$i)) + 4|0);
   $58 = load4($__end_$i16$i);
   $incdec$ptr1$i$i36$i = ((($58)) + 4|0);
   store4($__end_$i16$i,$incdec$ptr1$i$i36$i);
   $cmp$i$i37$i = ($incdec$ptr$i$i35$i|0)==($48|0);
   if ($cmp$i$i37$i) {
    break;
   } else {
    $57 = $incdec$ptr1$i$i36$i;$__begin1$addr$05$i$i32$i = $incdec$ptr$i$i35$i;
   }
  }
  return;
 }
 $cmp$i42$i18 = ($50|0)==(0);
 if ($cmp$i42$i18) {
  $64 = $49;
 } else {
  $__end_$i$i$i$i$i = ((($this)) + 60|0);
  while(1) {
   $61 = load4($__end_$i$i$i$i$i);
   $cmp$i$i$i$i$i = ($61|0)==($51|0);
   if ($cmp$i$i$i$i$i) {
    break;
   }
   $incdec$ptr$i$i$i$i$i = ((($61)) + -4|0);
   store4($__end_$i$i$i$i$i,$incdec$ptr$i$i$i$i$i);
   $62 = load4($incdec$ptr$i$i$i$i$i);
   __emval_decref(($62|0));
  }
  $63 = load4($args);
  _free($63);
  store4($__first_$i$i$i$i$i$i,0);
  store4($__end_$i$i$i$i$i,0);
  store4($args,0);
  $64 = 0;
 }
 $cmp$i44$i = ($sub$ptr$div$i$i$i>>>0)>(1073741823);
 if ($cmp$i44$i) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $sub$ptr$div$i$i$i$i = $64 >> 2;
 $cmp3$i$i = ($sub$ptr$div$i$i$i$i>>>0)<(536870911);
 $mul$i$i = $64 >> 1;
 $cmp$i$i$i$i46$i = ($mul$i$i>>>0)<($sub$ptr$div$i$i$i>>>0);
 $$sroa$speculated$i$i = $cmp$i$i$i$i46$i ? $sub$ptr$div$i$i$i : $mul$i$i;
 $retval$0$i$i = $cmp3$i$i ? $$sroa$speculated$i$i : 1073741823;
 $cmp$i$i20 = ($retval$0$i$i>>>0)>(1073741823);
 if ($cmp$i$i20) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $mul$i$i$i$i = $retval$0$i$i << 2;
 $cmp$i1$i = ($mul$i$i$i$i|0)==(0);
 $$size$i$i = $cmp$i1$i ? 1 : $mul$i$i$i$i;
 $call1$i$i = (_malloc($$size$i$i)|0);
 $cmp12$i$i = ($call1$i$i|0)==(0|0);
 L112: do {
  if ($cmp12$i$i) {
   while(1) {
    $65 = load4(7784);
    $66 = (($65) + 0)|0;
    store4(7784,$66);
    $tobool$i$i = ($65|0)==(0);
    if ($tobool$i$i) {
     $call$lcssa$i$i = 0;
     break L112;
    }
    $67 = $65;
    FUNCTION_TABLE_v[$67 & 3]();
    $call$i$i = (_malloc($$size$i$i)|0);
    $cmp1$i$i = ($call$i$i|0)==(0|0);
    if (!($cmp1$i$i)) {
     $call$lcssa$i$i = $call$i$i;
     break;
    }
   }
  } else {
   $call$lcssa$i$i = $call1$i$i;
  }
 } while(0);
 $__end_$i15$i = ((($this)) + 60|0);
 store4($__end_$i15$i,$call$lcssa$i$i);
 store4($args,$call$lcssa$i$i);
 $add$ptr$i$i = (($call$lcssa$i$i) + ($retval$0$i$i<<2)|0);
 store4($__first_$i$i$i$i$i$i,$add$ptr$i$i);
 $cmp4$i$i$i = ($47|0)==($48|0);
 if ($cmp4$i$i$i) {
  return;
 } else {
  $69 = $call$lcssa$i$i;$__begin1$addr$05$i$i$i = $47;
 }
 while(1) {
  $68 = load4($__begin1$addr$05$i$i$i);
  store4($69,$68);
  __emval_incref(($68|0));
  $incdec$ptr$i$i$i = ((($__begin1$addr$05$i$i$i)) + 4|0);
  $70 = load4($__end_$i15$i);
  $incdec$ptr1$i$i$i = ((($70)) + 4|0);
  store4($__end_$i15$i,$incdec$ptr1$i$i$i);
  $cmp$i$i$i = ($incdec$ptr$i$i$i|0)==($48|0);
  if ($cmp$i$i$i) {
   break;
  } else {
   $69 = $incdec$ptr1$i$i$i;$__begin1$addr$05$i$i$i = $incdec$ptr$i$i$i;
  }
 }
 return;
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7getWireIS2_EEPS7_RKMS2_S7_RKT_($field,$ptr) {
 $field = $field|0;
 $ptr = $ptr|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $call$i1 = 0, $call$lcssa$i = 0, $call1$i = 0, $cmp1$i = 0, $cmp12$i = 0, $memptr$offset = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($field);
 $memptr$offset = (($ptr) + ($0)|0);
 $call1$i = (_malloc(12)|0);
 $cmp12$i = ($call1$i|0)==(0|0);
 L1: do {
  if ($cmp12$i) {
   while(1) {
    $1 = load4(7784);
    $2 = (($1) + 0)|0;
    store4(7784,$2);
    $tobool$i = ($1|0)==(0);
    if ($tobool$i) {
     $call$lcssa$i = 0;
     break L1;
    }
    $3 = $1;
    FUNCTION_TABLE_v[$3 & 3]();
    $call$i1 = (_malloc(12)|0);
    $cmp1$i = ($call$i1|0)==(0|0);
    if (!($cmp1$i)) {
     $call$lcssa$i = $call$i1;
     break;
    }
   }
  } else {
   $call$lcssa$i = $call1$i;
  }
 } while(0);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($call$lcssa$i,$memptr$offset);
 return ($call$lcssa$i|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7setWireIS2_EEvRKMS2_S7_RT_PS7_($field,$ptr,$value) {
 $field = $field|0;
 $ptr = $ptr|0;
 $value = $value|0;
 var $0 = 0, $1 = 0, $2 = 0, $__end_$i = 0, $cmp$i = 0, $memptr$offset = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($field);
 $memptr$offset = (($ptr) + ($0)|0);
 $cmp$i = ($memptr$offset|0)==($value|0);
 if ($cmp$i) {
  return;
 }
 $1 = load4($value);
 $__end_$i = ((($value)) + 4|0);
 $2 = load4($__end_$i);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($memptr$offset,$1,$2);
 return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($this,$__first,$__last) {
 $this = $this|0;
 $__first = $__first|0;
 $__last = $__last|0;
 var $$pre$i26 = 0, $$pre$i39 = 0, $$size$i = 0, $$size$i18 = 0, $$size$i32 = 0, $$size$i4 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i176 = 0, $$sroa$speculated$i22 = 0, $$sroa$speculated$i91 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0;
 var $54 = 0, $55 = 0, $56 = 0, $57 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin1$addr$0$i3$i = 0, $__begin1$addr$0$i3$i28 = 0, $__begin_$i43 = 0, $__cap_$i$i = 0, $__cap_$i$i$i = 0, $__cap_$i$i$i127 = 0, $__cap_$i$i$i42 = 0, $__cap_$i$i107 = 0, $__cap_$i$i192 = 0, $__end_$i$i$i$i = 0, $__end_$i13 = 0, $__end_$i16 = 0;
 var $__end_$i44 = 0, $__first$addr$0$i52 = 0, $__first_$i$i$i$i$i = 0, $__result$addr$0$i$lcssa = 0, $__result$addr$0$i53 = 0, $__size_$i$i = 0, $__size_$i$i$i = 0, $__size_$i$i$i$i = 0, $__size_$i$i$i$i113 = 0, $__size_$i$i$i$i28 = 0, $__size_$i$i$i125 = 0, $__size_$i$i$i40 = 0, $__size_$i$i108 = 0, $__size_$i$i193 = 0, $__size_$i2$i$i = 0, $__size_$i2$i$i146 = 0, $__size_$i2$i$i61 = 0, $__size_$i3$i$i = 0, $__size_$i3$i$i118 = 0, $__size_$i3$i$i33 = 0;
 var $add$i$i$i = 0, $add$i$i$i178 = 0, $add$i$i$i93 = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$__last = 0, $and$i$i$i = 0, $and$i$i$i128 = 0, $and$i$i$i179 = 0, $and$i$i$i23 = 0, $and$i$i$i43 = 0, $and$i$i$i94 = 0, $arrayidx$i = 0, $arrayidx$i109 = 0, $arrayidx$i143 = 0, $arrayidx$i194 = 0, $arrayidx$i25 = 0, $arrayidx$i58 = 0, $call$i = 0, $call$i10 = 0;
 var $call$i24 = 0, $call$i38 = 0, $call$lcssa$i = 0, $call$lcssa$i15 = 0, $call$lcssa$i29 = 0, $call$lcssa$i43 = 0, $call1$i = 0, $call1$i19 = 0, $call1$i33 = 0, $call1$i5 = 0, $children$i$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i175 = 0, $cmp$i$i$i$i21 = 0, $cmp$i$i$i$i38 = 0, $cmp$i$i$i$i90 = 0, $cmp$i$i140 = 0;
 var $cmp$i$i31 = 0, $cmp$i$i35 = 0, $cmp$i$i55 = 0, $cmp$i$i6 = 0, $cmp$i1 = 0, $cmp$i132 = 0, $cmp$i161 = 0, $cmp$i17 = 0, $cmp$i2 = 0, $cmp$i2$i = 0, $cmp$i2$i$i$i = 0, $cmp$i2$i25 = 0, $cmp$i20 = 0, $cmp$i3 = 0, $cmp$i31 = 0, $cmp$i36 = 0, $cmp$i4 = 0, $cmp$i41 = 0, $cmp$i4151 = 0, $cmp$i42$i = 0;
 var $cmp$i42$i177 = 0, $cmp$i42$i92 = 0, $cmp$i47 = 0, $cmp$i76 = 0, $cmp$i9 = 0, $cmp1$i = 0, $cmp1$i11 = 0, $cmp1$i25 = 0, $cmp1$i39 = 0, $cmp12$i = 0, $cmp12$i20 = 0, $cmp12$i34 = 0, $cmp12$i6 = 0, $cmp2$i$i = 0, $cmp23$i = 0, $cmp23$i100 = 0, $cmp23$i185 = 0, $cmp3$i = 0, $cmp4 = 0, $cmp41$i = 0;
 var $cmp41$i103 = 0, $cmp41$i188 = 0, $cmp5$i = 0, $cmp5$i172 = 0, $cmp5$i87 = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i$i$i117 = 0, $cond$i$i$i32 = 0, $cond$i$i120 = 0, $cond$i$i131 = 0, $cond$i$i171 = 0, $cond$i$i18 = 0, $cond$i$i3 = 0, $cond$i$i35 = 0, $cond$i$i46 = 0, $cond$i$i86 = 0, $cond$i19$i = 0, $cond$i19$i139 = 0, $cond$i19$i54 = 0;
 var $cond48$i = 0, $cond48$i182 = 0, $cond48$i97 = 0, $conv$i$i$i = 0, $conv$i$i$i119 = 0, $conv$i$i$i34 = 0, $conv$i$i29$i = 0, $conv$i$i29$i148 = 0, $conv$i$i29$i63 = 0, $data$i$i = 0, $data7$i$i = 0, $elm$i$i = 0, $elm9$i$i = 0, $incdec$ptr$i = 0, $incdec$ptr$i$i = 0, $incdec$ptr$i$i$i$i = 0, $incdec$ptr$i$i29 = 0, $incdec$ptr$i$i34 = 0, $incdec$ptr1$i = 0, $incdec$ptr1$i$i = 0;
 var $incdec$ptr1$i$i30 = 0, $key$i$i214 = 0, $key3$i$i215 = 0, $mul$i = 0, $mul$i$i$i = 0, $mul$i174 = 0, $mul$i20 = 0, $mul$i89 = 0, $or$i$i = 0, $or$i$i106 = 0, $or$i$i191 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $phitmp$i$i129 = 0, $phitmp$i$i44 = 0, $phitmp$i180 = 0, $phitmp$i95 = 0, $retval$0$i = 0, $sub$i = 0, $sub$i156 = 0;
 var $sub$i71 = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$i$i$i = 0, $sub$ptr$div$i$i15 = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i$i14 = 0, $sub2$i = 0, $sub2$i160 = 0, $sub2$i75 = 0, $text$i$i225 = 0, $text5$i$i226 = 0, $tobool$i = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i$i114 = 0, $tobool$i$i$i$i29 = 0;
 var $tobool$i$i$i126 = 0, $tobool$i$i$i41 = 0, $tobool$i$i28$i = 0, $tobool$i$i28$i144 = 0, $tobool$i$i28$i59 = 0, $tobool$i22 = 0, $tobool$i36 = 0, $tobool$i8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $sub$ptr$lhs$cast$i$i = $__last;
 $sub$ptr$rhs$cast$i$i = $__first;
 $sub$ptr$sub$i$i = (($sub$ptr$lhs$cast$i$i) - ($sub$ptr$rhs$cast$i$i))|0;
 $sub$ptr$div$i$i = (($sub$ptr$sub$i$i|0) / 120)&-1;
 $__first_$i$i$i$i$i = ((($this)) + 8|0);
 $0 = load4($__first_$i$i$i$i$i);
 $1 = load4($this);
 $sub$ptr$sub$i$i14 = (($0) - ($1))|0;
 $sub$ptr$div$i$i15 = (($sub$ptr$sub$i$i14|0) / 120)&-1;
 $cmp = ($sub$ptr$div$i$i>>>0)>($sub$ptr$div$i$i15>>>0);
 $2 = $1;
 if ($cmp) {
  $cmp$i36 = ($1|0)==(0);
  if ($cmp$i36) {
   $52 = $0;
  } else {
   $47 = $1;
   $__end_$i$i$i$i = ((($this)) + 4|0);
   $48 = load4($__end_$i$i$i$i);
   $cmp$i2$i$i$i = ($48|0)==($2|0);
   if ($cmp$i2$i$i$i) {
    $51 = $47;
   } else {
    $49 = $48;
    while(1) {
     $incdec$ptr$i$i$i$i = ((($49)) + -120|0);
     store4($__end_$i$i$i$i,$incdec$ptr$i$i$i$i);
     __ZN5VNodeD2Ev($incdec$ptr$i$i$i$i);
     $50 = load4($__end_$i$i$i$i);
     $cmp$i$i$i$i38 = ($50|0)==($2|0);
     if ($cmp$i$i$i$i38) {
      break;
     } else {
      $49 = $50;
     }
    }
    $$pre$i39 = load4($this);
    $51 = $$pre$i39;
   }
   _free($51);
   store4($__first_$i$i$i$i$i,0);
   store4($__end_$i$i$i$i,0);
   store4($this,0);
   $52 = 0;
  }
  $cmp$i20 = ($sub$ptr$div$i$i>>>0)>(35791394);
  if ($cmp$i20) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $sub$ptr$div$i$i$i = (($52|0) / 120)&-1;
  $cmp3$i = ($sub$ptr$div$i$i$i>>>0)<(17895697);
  $mul$i = $sub$ptr$div$i$i$i << 1;
  $cmp$i$i$i$i = ($mul$i>>>0)<($sub$ptr$div$i$i>>>0);
  $$sroa$speculated$i = $cmp$i$i$i$i ? $sub$ptr$div$i$i : $mul$i;
  $retval$0$i = $cmp3$i ? $$sroa$speculated$i : 35791394;
  $cmp$i = ($retval$0$i>>>0)>(35791394);
  if ($cmp$i) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $mul$i$i$i = ($retval$0$i*120)|0;
  $cmp$i31 = ($mul$i$i$i|0)==(0);
  $$size$i32 = $cmp$i31 ? 1 : $mul$i$i$i;
  $call1$i33 = (_malloc($$size$i32)|0);
  $cmp12$i34 = ($call1$i33|0)==(0|0);
  L17: do {
   if ($cmp12$i34) {
    while(1) {
     $53 = load4(7784);
     $54 = (($53) + 0)|0;
     store4(7784,$54);
     $tobool$i36 = ($53|0)==(0);
     if ($tobool$i36) {
      $call$lcssa$i43 = 0;
      break L17;
     }
     $55 = $53;
     FUNCTION_TABLE_v[$55 & 3]();
     $call$i38 = (_malloc($$size$i32)|0);
     $cmp1$i39 = ($call$i38|0)==(0|0);
     if (!($cmp1$i39)) {
      $call$lcssa$i43 = $call$i38;
      break;
     }
    }
   } else {
    $call$lcssa$i43 = $call1$i33;
   }
  } while(0);
  $__end_$i13 = ((($this)) + 4|0);
  store4($__end_$i13,$call$lcssa$i43);
  store4($this,$call$lcssa$i43);
  $add$ptr$i = (($call$lcssa$i43) + (($retval$0$i*120)|0)|0);
  store4($__first_$i$i$i$i$i,$add$ptr$i);
  $cmp$i2$i = ($__first|0)==($__last|0);
  if ($cmp$i2$i) {
   return;
  } else {
   $56 = $call$lcssa$i43;$__begin1$addr$0$i3$i = $__first;
  }
  while(1) {
   __ZN5VNodeC2ERKS_($56,$__begin1$addr$0$i3$i);
   $incdec$ptr$i$i = ((($__begin1$addr$0$i3$i)) + 120|0);
   $57 = load4($__end_$i13);
   $incdec$ptr1$i$i = ((($57)) + 120|0);
   store4($__end_$i13,$incdec$ptr1$i$i);
   $cmp$i$i = ($incdec$ptr$i$i|0)==($__last|0);
   if ($cmp$i$i) {
    break;
   } else {
    $56 = $incdec$ptr1$i$i;$__begin1$addr$0$i3$i = $incdec$ptr$i$i;
   }
  }
  return;
 }
 $__end_$i16 = ((($this)) + 4|0);
 $3 = load4($__end_$i16);
 $sub$ptr$sub$i = (($3) - ($1))|0;
 $sub$ptr$div$i = (($sub$ptr$sub$i|0) / 120)&-1;
 $cmp4 = ($sub$ptr$div$i$i>>>0)>($sub$ptr$div$i>>>0);
 $add$ptr$i$i = (($__first) + (($sub$ptr$div$i*120)|0)|0);
 $add$ptr$i$i$__last = $cmp4 ? $add$ptr$i$i : $__last;
 $cmp$i4151 = ($add$ptr$i$i$__last|0)==($__first|0);
 L28: do {
  if ($cmp$i4151) {
   $__result$addr$0$i$lcssa = $2;
  } else {
   $__first$addr$0$i52 = $__first;$__result$addr$0$i53 = $2;
   L29: while(1) {
    $cmp$i1 = ($__result$addr$0$i53|0)==($__first$addr$0$i52|0);
    do {
     if (!($cmp$i1)) {
      $__size_$i$i$i$i = ((($__first$addr$0$i52)) + 11|0);
      $4 = load1($__size_$i$i$i$i);
      $tobool$i$i$i$i = ($4<<24>>24)<(0);
      $5 = load4($__first$addr$0$i52);
      $cond$i$i$i = $tobool$i$i$i$i ? $5 : $__first$addr$0$i52;
      $__size_$i3$i$i = ((($__first$addr$0$i52)) + 4|0);
      $6 = load4($__size_$i3$i$i);
      $conv$i$i$i = $4&255;
      $cond$i$i = $tobool$i$i$i$i ? $6 : $conv$i$i$i;
      $__size_$i$i$i = ((($__result$addr$0$i53)) + 11|0);
      $7 = load1($__size_$i$i$i);
      $tobool$i$i$i = ($7<<24>>24)<(0);
      if ($tobool$i$i$i) {
       $__cap_$i$i$i = ((($__result$addr$0$i53)) + 8|0);
       $8 = load4($__cap_$i$i$i);
       $and$i$i$i = $8 & 2147483647;
       $phitmp$i$i = (($and$i$i$i) + -1)|0;
       $cond$i$i3 = $phitmp$i$i;
      } else {
       $cond$i$i3 = 10;
      }
      $cmp$i4 = ($cond$i$i>>>0)>($cond$i$i3>>>0);
      do {
       if ($cmp$i4) {
        $sub$i = (($cond$i$i) - ($cond$i$i3))|0;
        $sub2$i = (-18 - ($cond$i$i3))|0;
        $cmp$i9 = ($sub2$i>>>0)<($sub$i>>>0);
        if ($cmp$i9) {
         label = 16;
         break L29;
        }
        if ($tobool$i$i$i) {
         $11 = load4($__result$addr$0$i53);
         $cond$i$i18 = $11;
        } else {
         $cond$i$i18 = $__result$addr$0$i53;
        }
        $cmp5$i = ($cond$i$i3>>>0)<(2147483623);
        if ($cmp5$i) {
         $mul$i20 = $cond$i$i3 << 1;
         $cmp$i$i$i$i21 = ($cond$i$i>>>0)<($mul$i20>>>0);
         $$sroa$speculated$i22 = $cmp$i$i$i$i21 ? $mul$i20 : $cond$i$i;
         $cmp$i42$i = ($$sroa$speculated$i22>>>0)<(11);
         $add$i$i$i = (($$sroa$speculated$i22) + 16)|0;
         $and$i$i$i23 = $add$i$i$i & -16;
         $phitmp$i = $cmp$i42$i ? 11 : $and$i$i$i23;
         $cond48$i = $phitmp$i;
        } else {
         $cond48$i = -17;
        }
        $cmp$i2 = ($cond48$i|0)==(0);
        $$size$i = $cmp$i2 ? 1 : $cond48$i;
        $call1$i = (_malloc($$size$i)|0);
        $cmp12$i = ($call1$i|0)==(0|0);
        L46: do {
         if ($cmp12$i) {
          while(1) {
           $12 = load4(7784);
           $13 = (($12) + 0)|0;
           store4(7784,$13);
           $tobool$i = ($12|0)==(0);
           if ($tobool$i) {
            $call$lcssa$i = 0;
            break L46;
           }
           $14 = $12;
           FUNCTION_TABLE_v[$14 & 3]();
           $call$i = (_malloc($$size$i)|0);
           $cmp1$i = ($call$i|0)==(0|0);
           if (!($cmp1$i)) {
            $call$lcssa$i = $call$i;
            break;
           }
          }
         } else {
          $call$lcssa$i = $call1$i;
         }
        } while(0);
        $cmp23$i = ($cond$i$i|0)==(0);
        if (!($cmp23$i)) {
         _memcpy(($call$lcssa$i|0),($cond$i$i$i|0),($cond$i$i|0))|0;
        }
        $cmp41$i = ($cond$i$i3|0)==(10);
        if (!($cmp41$i)) {
         _free($cond$i$i18);
        }
        store4($__result$addr$0$i53,$call$lcssa$i);
        $or$i$i = $cond48$i | -2147483648;
        $__cap_$i$i = ((($__result$addr$0$i53)) + 8|0);
        store4($__cap_$i$i,$or$i$i);
        $__size_$i$i = ((($__result$addr$0$i53)) + 4|0);
        store4($__size_$i$i,$cond$i$i);
        $arrayidx$i25 = (($call$lcssa$i) + ($cond$i$i)|0);
        store1($arrayidx$i25,0);
       } else {
        if ($tobool$i$i$i) {
         $9 = load4($__result$addr$0$i53);
         $cond$i19$i = $9;
        } else {
         $cond$i19$i = $__result$addr$0$i53;
        }
        $cmp$i$i6 = ($cond$i$i|0)==(0);
        if (!($cmp$i$i6)) {
         _memmove(($cond$i19$i|0),($cond$i$i$i|0),($cond$i$i|0))|0;
        }
        $arrayidx$i = (($cond$i19$i) + ($cond$i$i)|0);
        store1($arrayidx$i,0);
        $10 = load1($__size_$i$i$i);
        $tobool$i$i28$i = ($10<<24>>24)<(0);
        if ($tobool$i$i28$i) {
         $__size_$i2$i$i = ((($__result$addr$0$i53)) + 4|0);
         store4($__size_$i2$i$i,$cond$i$i);
         break;
        } else {
         $conv$i$i29$i = $cond$i$i&255;
         store1($__size_$i$i$i,$conv$i$i29$i);
         break;
        }
       }
      } while(0);
      $key$i$i214 = ((($__result$addr$0$i53)) + 12|0);
      $key3$i$i215 = ((($__first$addr$0$i52)) + 12|0);
      $__size_$i$i$i$i28 = ((($key3$i$i215)) + 11|0);
      $15 = load1($__size_$i$i$i$i28);
      $tobool$i$i$i$i29 = ($15<<24>>24)<(0);
      $16 = load4($key3$i$i215);
      $cond$i$i$i32 = $tobool$i$i$i$i29 ? $16 : $key3$i$i215;
      $__size_$i3$i$i33 = ((($__first$addr$0$i52)) + 16|0);
      $17 = load4($__size_$i3$i$i33);
      $conv$i$i$i34 = $15&255;
      $cond$i$i35 = $tobool$i$i$i$i29 ? $17 : $conv$i$i$i34;
      $__size_$i$i$i40 = ((($key$i$i214)) + 11|0);
      $18 = load1($__size_$i$i$i40);
      $tobool$i$i$i41 = ($18<<24>>24)<(0);
      if ($tobool$i$i$i41) {
       $__cap_$i$i$i42 = ((($__result$addr$0$i53)) + 20|0);
       $19 = load4($__cap_$i$i$i42);
       $and$i$i$i43 = $19 & 2147483647;
       $phitmp$i$i44 = (($and$i$i$i43) + -1)|0;
       $cond$i$i46 = $phitmp$i$i44;
      } else {
       $cond$i$i46 = 10;
      }
      $cmp$i47 = ($cond$i$i35>>>0)>($cond$i$i46>>>0);
      do {
       if ($cmp$i47) {
        $sub$i71 = (($cond$i$i35) - ($cond$i$i46))|0;
        $sub2$i75 = (-18 - ($cond$i$i46))|0;
        $cmp$i76 = ($sub2$i75>>>0)<($sub$i71>>>0);
        if ($cmp$i76) {
         label = 42;
         break L29;
        }
        if ($tobool$i$i$i41) {
         $22 = load4($key$i$i214);
         $cond$i$i86 = $22;
        } else {
         $cond$i$i86 = $key$i$i214;
        }
        $cmp5$i87 = ($cond$i$i46>>>0)<(2147483623);
        if ($cmp5$i87) {
         $mul$i89 = $cond$i$i46 << 1;
         $cmp$i$i$i$i90 = ($cond$i$i35>>>0)<($mul$i89>>>0);
         $$sroa$speculated$i91 = $cmp$i$i$i$i90 ? $mul$i89 : $cond$i$i35;
         $cmp$i42$i92 = ($$sroa$speculated$i91>>>0)<(11);
         $add$i$i$i93 = (($$sroa$speculated$i91) + 16)|0;
         $and$i$i$i94 = $add$i$i$i93 & -16;
         $phitmp$i95 = $cmp$i42$i92 ? 11 : $and$i$i$i94;
         $cond48$i97 = $phitmp$i95;
        } else {
         $cond48$i97 = -17;
        }
        $cmp$i3 = ($cond48$i97|0)==(0);
        $$size$i4 = $cmp$i3 ? 1 : $cond48$i97;
        $call1$i5 = (_malloc($$size$i4)|0);
        $cmp12$i6 = ($call1$i5|0)==(0|0);
        L82: do {
         if ($cmp12$i6) {
          while(1) {
           $23 = load4(7784);
           $24 = (($23) + 0)|0;
           store4(7784,$24);
           $tobool$i8 = ($23|0)==(0);
           if ($tobool$i8) {
            $call$lcssa$i15 = 0;
            break L82;
           }
           $25 = $23;
           FUNCTION_TABLE_v[$25 & 3]();
           $call$i10 = (_malloc($$size$i4)|0);
           $cmp1$i11 = ($call$i10|0)==(0|0);
           if (!($cmp1$i11)) {
            $call$lcssa$i15 = $call$i10;
            break;
           }
          }
         } else {
          $call$lcssa$i15 = $call1$i5;
         }
        } while(0);
        $cmp23$i100 = ($cond$i$i35|0)==(0);
        if (!($cmp23$i100)) {
         _memcpy(($call$lcssa$i15|0),($cond$i$i$i32|0),($cond$i$i35|0))|0;
        }
        $cmp41$i103 = ($cond$i$i46|0)==(10);
        if (!($cmp41$i103)) {
         _free($cond$i$i86);
        }
        store4($key$i$i214,$call$lcssa$i15);
        $or$i$i106 = $cond48$i97 | -2147483648;
        $__cap_$i$i107 = ((($__result$addr$0$i53)) + 20|0);
        store4($__cap_$i$i107,$or$i$i106);
        $__size_$i$i108 = ((($__result$addr$0$i53)) + 16|0);
        store4($__size_$i$i108,$cond$i$i35);
        $arrayidx$i109 = (($call$lcssa$i15) + ($cond$i$i35)|0);
        store1($arrayidx$i109,0);
       } else {
        if ($tobool$i$i$i41) {
         $20 = load4($key$i$i214);
         $cond$i19$i54 = $20;
        } else {
         $cond$i19$i54 = $key$i$i214;
        }
        $cmp$i$i55 = ($cond$i$i35|0)==(0);
        if (!($cmp$i$i55)) {
         _memmove(($cond$i19$i54|0),($cond$i$i$i32|0),($cond$i$i35|0))|0;
        }
        $arrayidx$i58 = (($cond$i19$i54) + ($cond$i$i35)|0);
        store1($arrayidx$i58,0);
        $21 = load1($__size_$i$i$i40);
        $tobool$i$i28$i59 = ($21<<24>>24)<(0);
        if ($tobool$i$i28$i59) {
         $__size_$i2$i$i61 = ((($__result$addr$0$i53)) + 16|0);
         store4($__size_$i2$i$i61,$cond$i$i35);
         break;
        } else {
         $conv$i$i29$i63 = $cond$i$i35&255;
         store1($__size_$i$i$i40,$conv$i$i29$i63);
         break;
        }
       }
      } while(0);
      $text$i$i225 = ((($__result$addr$0$i53)) + 24|0);
      $text5$i$i226 = ((($__first$addr$0$i52)) + 24|0);
      $__size_$i$i$i$i113 = ((($text5$i$i226)) + 11|0);
      $26 = load1($__size_$i$i$i$i113);
      $tobool$i$i$i$i114 = ($26<<24>>24)<(0);
      $27 = load4($text5$i$i226);
      $cond$i$i$i117 = $tobool$i$i$i$i114 ? $27 : $text5$i$i226;
      $__size_$i3$i$i118 = ((($__first$addr$0$i52)) + 28|0);
      $28 = load4($__size_$i3$i$i118);
      $conv$i$i$i119 = $26&255;
      $cond$i$i120 = $tobool$i$i$i$i114 ? $28 : $conv$i$i$i119;
      $__size_$i$i$i125 = ((($text$i$i225)) + 11|0);
      $29 = load1($__size_$i$i$i125);
      $tobool$i$i$i126 = ($29<<24>>24)<(0);
      if ($tobool$i$i$i126) {
       $__cap_$i$i$i127 = ((($__result$addr$0$i53)) + 32|0);
       $30 = load4($__cap_$i$i$i127);
       $and$i$i$i128 = $30 & 2147483647;
       $phitmp$i$i129 = (($and$i$i$i128) + -1)|0;
       $cond$i$i131 = $phitmp$i$i129;
      } else {
       $cond$i$i131 = 10;
      }
      $cmp$i132 = ($cond$i$i120>>>0)>($cond$i$i131>>>0);
      if (!($cmp$i132)) {
       if ($tobool$i$i$i126) {
        $31 = load4($text$i$i225);
        $cond$i19$i139 = $31;
       } else {
        $cond$i19$i139 = $text$i$i225;
       }
       $cmp$i$i140 = ($cond$i$i120|0)==(0);
       if (!($cmp$i$i140)) {
        _memmove(($cond$i19$i139|0),($cond$i$i$i117|0),($cond$i$i120|0))|0;
       }
       $arrayidx$i143 = (($cond$i19$i139) + ($cond$i$i120)|0);
       store1($arrayidx$i143,0);
       $32 = load1($__size_$i$i$i125);
       $tobool$i$i28$i144 = ($32<<24>>24)<(0);
       if ($tobool$i$i28$i144) {
        $__size_$i2$i$i146 = ((($__result$addr$0$i53)) + 28|0);
        store4($__size_$i2$i$i146,$cond$i$i120);
        break;
       } else {
        $conv$i$i29$i148 = $cond$i$i120&255;
        store1($__size_$i$i$i125,$conv$i$i29$i148);
        break;
       }
      }
      $sub$i156 = (($cond$i$i120) - ($cond$i$i131))|0;
      $sub2$i160 = (-18 - ($cond$i$i131))|0;
      $cmp$i161 = ($sub2$i160>>>0)<($sub$i156>>>0);
      if ($cmp$i161) {
       label = 68;
       break L29;
      }
      if ($tobool$i$i$i126) {
       $33 = load4($text$i$i225);
       $cond$i$i171 = $33;
      } else {
       $cond$i$i171 = $text$i$i225;
      }
      $cmp5$i172 = ($cond$i$i131>>>0)<(2147483623);
      if ($cmp5$i172) {
       $mul$i174 = $cond$i$i131 << 1;
       $cmp$i$i$i$i175 = ($cond$i$i120>>>0)<($mul$i174>>>0);
       $$sroa$speculated$i176 = $cmp$i$i$i$i175 ? $mul$i174 : $cond$i$i120;
       $cmp$i42$i177 = ($$sroa$speculated$i176>>>0)<(11);
       $add$i$i$i178 = (($$sroa$speculated$i176) + 16)|0;
       $and$i$i$i179 = $add$i$i$i178 & -16;
       $phitmp$i180 = $cmp$i42$i177 ? 11 : $and$i$i$i179;
       $cond48$i182 = $phitmp$i180;
      } else {
       $cond48$i182 = -17;
      }
      $cmp$i17 = ($cond48$i182|0)==(0);
      $$size$i18 = $cmp$i17 ? 1 : $cond48$i182;
      $call1$i19 = (_malloc($$size$i18)|0);
      $cmp12$i20 = ($call1$i19|0)==(0|0);
      L129: do {
       if ($cmp12$i20) {
        while(1) {
         $34 = load4(7784);
         $35 = (($34) + 0)|0;
         store4(7784,$35);
         $tobool$i22 = ($34|0)==(0);
         if ($tobool$i22) {
          $call$lcssa$i29 = 0;
          break L129;
         }
         $36 = $34;
         FUNCTION_TABLE_v[$36 & 3]();
         $call$i24 = (_malloc($$size$i18)|0);
         $cmp1$i25 = ($call$i24|0)==(0|0);
         if (!($cmp1$i25)) {
          $call$lcssa$i29 = $call$i24;
          break;
         }
        }
       } else {
        $call$lcssa$i29 = $call1$i19;
       }
      } while(0);
      $cmp23$i185 = ($cond$i$i120|0)==(0);
      if (!($cmp23$i185)) {
       _memcpy(($call$lcssa$i29|0),($cond$i$i$i117|0),($cond$i$i120|0))|0;
      }
      $cmp41$i188 = ($cond$i$i131|0)==(10);
      if (!($cmp41$i188)) {
       _free($cond$i$i171);
      }
      store4($text$i$i225,$call$lcssa$i29);
      $or$i$i191 = $cond48$i182 | -2147483648;
      $__cap_$i$i192 = ((($__result$addr$0$i53)) + 32|0);
      store4($__cap_$i$i192,$or$i$i191);
      $__size_$i$i193 = ((($__result$addr$0$i53)) + 28|0);
      store4($__size_$i$i193,$cond$i$i120);
      $arrayidx$i194 = (($call$lcssa$i29) + ($cond$i$i120)|0);
      store1($arrayidx$i194,0);
     }
    } while(0);
    $data$i$i = ((($__result$addr$0$i53)) + 36|0);
    $data7$i$i = ((($__first$addr$0$i52)) + 36|0);
    __ZN9VNodeDataaSERKS_($data$i$i,$data7$i$i);
    $elm$i$i = ((($__result$addr$0$i53)) + 104|0);
    $elm9$i$i = ((($__first$addr$0$i52)) + 104|0);
    $37 = load4($elm9$i$i);
    __emval_incref(($37|0));
    $38 = load4($elm$i$i);
    __emval_decref(($38|0));
    $39 = load4($elm9$i$i);
    store4($elm$i$i,$39);
    if (!($cmp$i1)) {
     $children$i$i = ((($__result$addr$0$i53)) + 108|0);
     $__begin_$i43 = ((($__first$addr$0$i52)) + 108|0);
     $40 = load4($__begin_$i43);
     $__end_$i44 = ((($__first$addr$0$i52)) + 112|0);
     $41 = load4($__end_$i44);
     __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($children$i$i,$40,$41);
    }
    $incdec$ptr$i = ((($__first$addr$0$i52)) + 120|0);
    $incdec$ptr1$i = ((($__result$addr$0$i53)) + 120|0);
    $cmp$i41 = ($incdec$ptr$i|0)==($add$ptr$i$i$__last|0);
    if ($cmp$i41) {
     $__result$addr$0$i$lcssa = $incdec$ptr1$i;
     break L28;
    } else {
     $__first$addr$0$i52 = $incdec$ptr$i;$__result$addr$0$i53 = $incdec$ptr1$i;
    }
   }
   if ((label|0) == 16) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   else if ((label|0) == 42) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   else if ((label|0) == 68) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
  }
 } while(0);
 if (!($cmp4)) {
  $44 = load4($__end_$i16);
  $cmp2$i$i = ($44|0)==($__result$addr$0$i$lcssa|0);
  if ($cmp2$i$i) {
   return;
  } else {
   $45 = $44;
  }
  while(1) {
   $incdec$ptr$i$i34 = ((($45)) + -120|0);
   store4($__end_$i16,$incdec$ptr$i$i34);
   __ZN5VNodeD2Ev($incdec$ptr$i$i34);
   $46 = load4($__end_$i16);
   $cmp$i$i35 = ($46|0)==($__result$addr$0$i$lcssa|0);
   if ($cmp$i$i35) {
    break;
   } else {
    $45 = $46;
   }
  }
  return;
 }
 $cmp$i2$i25 = ($add$ptr$i$i$__last|0)==($__last|0);
 if ($cmp$i2$i25) {
  return;
 }
 $$pre$i26 = load4($__end_$i16);
 $42 = $$pre$i26;$__begin1$addr$0$i3$i28 = $add$ptr$i$i;
 while(1) {
  __ZN5VNodeC2ERKS_($42,$__begin1$addr$0$i3$i28);
  $incdec$ptr$i$i29 = ((($__begin1$addr$0$i3$i28)) + 120|0);
  $43 = load4($__end_$i16);
  $incdec$ptr1$i$i30 = ((($43)) + 120|0);
  store4($__end_$i16,$incdec$ptr1$i$i30);
  $cmp$i$i31 = ($incdec$ptr$i$i29|0)==($__last|0);
  if ($cmp$i$i31) {
   break;
  } else {
   $42 = $incdec$ptr1$i$i30;$__begin1$addr$0$i3$i28 = $incdec$ptr$i$i29;
  }
 }
 return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE9push_backERKS1_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$pre$i$i = 0, $$pre$i$i$i = 0, $$pre$phi11$i$iZ2D = 0, $$pre17$i = 0, $$pre8$i$i = 0, $$size$i$i = 0, $$sroa$speculated$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i11$i = 0, $__end1$addr$04$i$i$i = 0, $__end_ = 0, $__end_$i10$i = 0, $__end_cap_$i$i = 0, $__end_cap_$i8$i = 0, $__first_$i$i$i = 0, $__first_$i$i$i$i12$i = 0, $__second_$i$i$i$i = 0, $__v$i = 0;
 var $add$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr5$i$i = 0, $call$i$i = 0, $call$lcssa$i$i = 0, $call1$i$i = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i1$i = 0, $cmp$i9$i = 0, $cmp1$i$i = 0, $cmp12$i$i = 0, $cmp3$i$i = 0, $cmp3$i$i$i = 0, $cond$i$i = 0, $exception$i$i$i$i = 0;
 var $incdec$ptr = 0, $incdec$ptr$i = 0, $incdec$ptr$i$i$i = 0, $incdec$ptr2$i$i$i = 0, $mul$i$i = 0, $mul$i$i$i$i = 0, $retval$0$i$i = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$i$i$i$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i$i$i$i = 0, $tobool$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $__v$i = sp;
 $__end_ = ((($this)) + 4|0);
 $0 = load4($__end_);
 $__first_$i$i$i = ((($this)) + 8|0);
 $1 = load4($__first_$i$i$i);
 $cmp = ($0|0)==($1|0);
 $2 = $1;
 if (!($cmp)) {
  __ZN5VNodeC2ERKS_($0,$__x);
  $3 = load4($__end_);
  $incdec$ptr = ((($3)) + 120|0);
  store4($__end_,$incdec$ptr);
  STACKTOP = sp;return;
 }
 $4 = $0;
 $5 = load4($this);
 $sub$ptr$sub$i$i = (($4) - ($5))|0;
 $sub$ptr$div$i$i = (($sub$ptr$sub$i$i|0) / 120)&-1;
 $add$i = (($sub$ptr$div$i$i) + 1)|0;
 $cmp$i$i = ($add$i>>>0)>(35791394);
 if ($cmp$i$i) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $__end_cap_$i$i = ((($this)) + 8|0);
 $sub$ptr$sub$i$i$i$i = (($2) - ($5))|0;
 $sub$ptr$div$i$i$i$i = (($sub$ptr$sub$i$i$i$i|0) / 120)&-1;
 $cmp3$i$i = ($sub$ptr$div$i$i$i$i>>>0)<(17895697);
 $mul$i$i = $sub$ptr$div$i$i$i$i << 1;
 $cmp$i$i$i$i$i = ($mul$i$i>>>0)<($add$i>>>0);
 $$sroa$speculated$i$i = $cmp$i$i$i$i$i ? $add$i : $mul$i$i;
 $retval$0$i$i = $cmp3$i$i ? $$sroa$speculated$i$i : 35791394;
 $__end_cap_$i8$i = ((($__v$i)) + 12|0);
 store4($__end_cap_$i8$i,0);
 $__second_$i$i$i$i = ((($__v$i)) + 16|0);
 store4($__second_$i$i$i$i,$__end_cap_$i$i);
 $cmp$i9$i = ($retval$0$i$i|0)==(0);
 if ($cmp$i9$i) {
  $cond$i$i = 0;
 } else {
  $cmp$i$i$i$i = ($retval$0$i$i>>>0)>(35791394);
  if ($cmp$i$i$i$i) {
   $exception$i$i$i$i = (___cxa_allocate_exception(4)|0);
   store4($exception$i$i$i$i,(1932));
   ___cxa_throw(($exception$i$i$i$i|0),(1440|0),(6|0));
   // unreachable;
  }
  $mul$i$i$i$i = ($retval$0$i$i*120)|0;
  $cmp$i1$i = ($mul$i$i$i$i|0)==(0);
  $$size$i$i = $cmp$i1$i ? 1 : $mul$i$i$i$i;
  $call1$i$i = (_malloc($$size$i$i)|0);
  $cmp12$i$i = ($call1$i$i|0)==(0|0);
  L13: do {
   if ($cmp12$i$i) {
    while(1) {
     $6 = load4(7784);
     $7 = (($6) + 0)|0;
     store4(7784,$7);
     $tobool$i$i = ($6|0)==(0);
     if ($tobool$i$i) {
      $call$lcssa$i$i = 0;
      break L13;
     }
     $8 = $6;
     FUNCTION_TABLE_v[$8 & 3]();
     $call$i$i = (_malloc($$size$i$i)|0);
     $cmp1$i$i = ($call$i$i|0)==(0|0);
     if (!($cmp1$i$i)) {
      $call$lcssa$i$i = $call$i$i;
      break;
     }
    }
   } else {
    $call$lcssa$i$i = $call1$i$i;
   }
  } while(0);
  $cond$i$i = $call$lcssa$i$i;
 }
 store4($__v$i,$cond$i$i);
 $add$ptr$i$i = (($cond$i$i) + (($sub$ptr$div$i$i*120)|0)|0);
 $__end_$i10$i = ((($__v$i)) + 8|0);
 store4($__end_$i10$i,$add$ptr$i$i);
 $__begin_$i11$i = ((($__v$i)) + 4|0);
 store4($__begin_$i11$i,$add$ptr$i$i);
 $add$ptr5$i$i = (($cond$i$i) + (($retval$0$i$i*120)|0)|0);
 $__first_$i$i$i$i12$i = ((($__v$i)) + 12|0);
 store4($__first_$i$i$i$i12$i,$add$ptr5$i$i);
 __ZN5VNodeC2ERKS_($add$ptr$i$i,$__x);
 $9 = load4($__end_$i10$i);
 $incdec$ptr$i = ((($9)) + 120|0);
 store4($__end_$i10$i,$incdec$ptr$i);
 $10 = load4($this);
 $11 = load4($__end_);
 $cmp3$i$i$i = ($11|0)==($10|0);
 if ($cmp3$i$i$i) {
  $12 = $10;
  $$pre8$i$i = load4($__begin_$i11$i);
  $$pre$phi11$i$iZ2D = $__begin_$i11$i;$16 = $$pre8$i$i;$17 = $12;$19 = $12;
 } else {
  $$pre$i$i$i = load4($__begin_$i11$i);
  $13 = $$pre$i$i$i;$__end1$addr$04$i$i$i = $11;
  while(1) {
   $add$ptr$i$i$i = ((($13)) + -120|0);
   $incdec$ptr$i$i$i = ((($__end1$addr$04$i$i$i)) + -120|0);
   __ZN5VNodeC2ERKS_($add$ptr$i$i$i,$incdec$ptr$i$i$i);
   $14 = load4($__begin_$i11$i);
   $incdec$ptr2$i$i$i = ((($14)) + -120|0);
   store4($__begin_$i11$i,$incdec$ptr2$i$i$i);
   $cmp$i$i$i = ($incdec$ptr$i$i$i|0)==($10|0);
   if ($cmp$i$i$i) {
    break;
   } else {
    $13 = $incdec$ptr2$i$i$i;$__end1$addr$04$i$i$i = $incdec$ptr$i$i$i;
   }
  }
  $15 = $incdec$ptr2$i$i$i;
  $$pre$i$i = load4($this);
  $$pre17$i = load4($__end_);
  $$pre$phi11$i$iZ2D = $__begin_$i11$i;$16 = $15;$17 = $$pre$i$i;$19 = $$pre17$i;
 }
 store4($this,$16);
 store4($$pre$phi11$i$iZ2D,$17);
 $18 = load4($__end_$i10$i);
 store4($__end_,$18);
 store4($__end_$i10$i,$19);
 $20 = load4($__first_$i$i$i);
 $21 = load4($__first_$i$i$i$i12$i);
 store4($__first_$i$i$i,$21);
 store4($__first_$i$i$i$i12$i,$20);
 $22 = load4($$pre$phi11$i$iZ2D);
 store4($__v$i,$22);
 __ZNSt3__214__split_bufferI5VNodeRNS_9allocatorIS1_EEED2Ev($__v$i);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6resizeEjRKS1_($this,$__sz,$__x) {
 $this = $this|0;
 $__sz = $__sz|0;
 $__x = $__x|0;
 var $$pre$i$i$i = 0, $$pre$i9$i = 0, $$pre$phi11$i$iZ2D = 0, $$pre31$i = 0, $$pre8$i$i = 0, $$size$i$i = 0, $$sroa$speculated$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i25$i = 0, $__end1$addr$04$i$i$i = 0, $__end_$i = 0, $__end_$i24$i = 0, $__end_cap_$i$i = 0, $__end_cap_$i22$i = 0;
 var $__first_$i$i$i$i = 0, $__first_$i$i$i$i26$i = 0, $__n$addr$0$i$i = 0, $__n$addr$0$i16$i = 0, $__second_$i$i$i$i = 0, $__v$i = 0, $add$ptr = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr5$i$i = 0, $call$i$i = 0, $call$lcssa$i$i = 0, $call1$i$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i5 = 0;
 var $cmp$i1$i = 0, $cmp$i10$i = 0, $cmp$i19$i = 0, $cmp$i23$i = 0, $cmp1$i$i = 0, $cmp12$i$i = 0, $cmp2 = 0, $cmp2$i$i = 0, $cmp3$i$i = 0, $cmp3$i$i$i = 0, $cond$i$i = 0, $dec$i$i = 0, $dec$i18$i = 0, $exception$i$i$i$i = 0, $incdec$ptr$i$i = 0, $incdec$ptr$i$i$i = 0, $incdec$ptr$i$i4 = 0, $incdec$ptr$i17$i = 0, $incdec$ptr2$i$i$i = 0, $mul$i$i = 0;
 var $mul$i$i$i$i = 0, $retval$0$i$i = 0, $sub = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i$i$i = 0, $sub$ptr$div$i3 = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i$i$i = 0, $sub$ptr$sub$i2 = 0, $tobool$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $__v$i = sp;
 $__end_$i = ((($this)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($this);
 $sub$ptr$sub$i = (($0) - ($1))|0;
 $sub$ptr$div$i = (($sub$ptr$sub$i|0) / 120)&-1;
 $cmp = ($sub$ptr$div$i>>>0)<($__sz>>>0);
 $2 = $1;
 $3 = $0;
 if (!($cmp)) {
  $cmp2 = ($sub$ptr$div$i>>>0)>($__sz>>>0);
  if (!($cmp2)) {
   STACKTOP = sp;return;
  }
  $add$ptr = (($2) + (($__sz*120)|0)|0);
  $cmp2$i$i = ($3|0)==($add$ptr|0);
  if ($cmp2$i$i) {
   STACKTOP = sp;return;
  } else {
   $25 = $3;
  }
  while(1) {
   $incdec$ptr$i$i = ((($25)) + -120|0);
   store4($__end_$i,$incdec$ptr$i$i);
   __ZN5VNodeD2Ev($incdec$ptr$i$i);
   $26 = load4($__end_$i);
   $cmp$i$i = ($26|0)==($add$ptr|0);
   if ($cmp$i$i) {
    break;
   } else {
    $25 = $26;
   }
  }
  STACKTOP = sp;return;
 }
 $sub = (($__sz) - ($sub$ptr$div$i))|0;
 $__first_$i$i$i$i = ((($this)) + 8|0);
 $4 = load4($__first_$i$i$i$i);
 $sub$ptr$sub$i2 = (($4) - ($0))|0;
 $sub$ptr$div$i3 = (($sub$ptr$sub$i2|0) / 120)&-1;
 $cmp$i = ($sub$ptr$div$i3>>>0)<($sub>>>0);
 if (!($cmp$i)) {
  $5 = $3;$__n$addr$0$i$i = $sub;
  while(1) {
   __ZN5VNodeC2ERKS_($5,$__x);
   $6 = load4($__end_$i);
   $incdec$ptr$i$i4 = ((($6)) + 120|0);
   store4($__end_$i,$incdec$ptr$i$i4);
   $dec$i$i = (($__n$addr$0$i$i) + -1)|0;
   $cmp$i$i5 = ($dec$i$i|0)==(0);
   if ($cmp$i$i5) {
    break;
   } else {
    $5 = $incdec$ptr$i$i4;$__n$addr$0$i$i = $dec$i$i;
   }
  }
  STACKTOP = sp;return;
 }
 $cmp$i10$i = ($__sz>>>0)>(35791394);
 if ($cmp$i10$i) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $__end_cap_$i$i = ((($this)) + 8|0);
 $sub$ptr$sub$i$i$i$i = (($4) - ($1))|0;
 $sub$ptr$div$i$i$i$i = (($sub$ptr$sub$i$i$i$i|0) / 120)&-1;
 $cmp3$i$i = ($sub$ptr$div$i$i$i$i>>>0)<(17895697);
 $mul$i$i = $sub$ptr$div$i$i$i$i << 1;
 $cmp$i$i$i$i$i = ($mul$i$i>>>0)<($__sz>>>0);
 $$sroa$speculated$i$i = $cmp$i$i$i$i$i ? $__sz : $mul$i$i;
 $retval$0$i$i = $cmp3$i$i ? $$sroa$speculated$i$i : 35791394;
 $__end_cap_$i22$i = ((($__v$i)) + 12|0);
 store4($__end_cap_$i22$i,0);
 $__second_$i$i$i$i = ((($__v$i)) + 16|0);
 store4($__second_$i$i$i$i,$__end_cap_$i$i);
 $cmp$i23$i = ($retval$0$i$i|0)==(0);
 if ($cmp$i23$i) {
  $cond$i$i = 0;
 } else {
  $cmp$i$i$i$i = ($retval$0$i$i>>>0)>(35791394);
  if ($cmp$i$i$i$i) {
   $exception$i$i$i$i = (___cxa_allocate_exception(4)|0);
   store4($exception$i$i$i$i,(1932));
   ___cxa_throw(($exception$i$i$i$i|0),(1440|0),(6|0));
   // unreachable;
  }
  $mul$i$i$i$i = ($retval$0$i$i*120)|0;
  $cmp$i1$i = ($mul$i$i$i$i|0)==(0);
  $$size$i$i = $cmp$i1$i ? 1 : $mul$i$i$i$i;
  $call1$i$i = (_malloc($$size$i$i)|0);
  $cmp12$i$i = ($call1$i$i|0)==(0|0);
  L25: do {
   if ($cmp12$i$i) {
    while(1) {
     $7 = load4(7784);
     $8 = (($7) + 0)|0;
     store4(7784,$8);
     $tobool$i$i = ($7|0)==(0);
     if ($tobool$i$i) {
      $call$lcssa$i$i = 0;
      break L25;
     }
     $9 = $7;
     FUNCTION_TABLE_v[$9 & 3]();
     $call$i$i = (_malloc($$size$i$i)|0);
     $cmp1$i$i = ($call$i$i|0)==(0|0);
     if (!($cmp1$i$i)) {
      $call$lcssa$i$i = $call$i$i;
      break;
     }
    }
   } else {
    $call$lcssa$i$i = $call1$i$i;
   }
  } while(0);
  $cond$i$i = $call$lcssa$i$i;
 }
 store4($__v$i,$cond$i$i);
 $add$ptr$i$i = (($cond$i$i) + (($sub$ptr$div$i*120)|0)|0);
 $__end_$i24$i = ((($__v$i)) + 8|0);
 store4($__end_$i24$i,$add$ptr$i$i);
 $__begin_$i25$i = ((($__v$i)) + 4|0);
 store4($__begin_$i25$i,$add$ptr$i$i);
 $add$ptr5$i$i = (($cond$i$i) + (($retval$0$i$i*120)|0)|0);
 $__first_$i$i$i$i26$i = ((($__v$i)) + 12|0);
 store4($__first_$i$i$i$i26$i,$add$ptr5$i$i);
 $10 = $add$ptr$i$i;$__n$addr$0$i16$i = $sub;
 while(1) {
  __ZN5VNodeC2ERKS_($10,$__x);
  $11 = load4($__end_$i24$i);
  $incdec$ptr$i17$i = ((($11)) + 120|0);
  store4($__end_$i24$i,$incdec$ptr$i17$i);
  $dec$i18$i = (($__n$addr$0$i16$i) + -1)|0;
  $cmp$i19$i = ($dec$i18$i|0)==(0);
  if ($cmp$i19$i) {
   break;
  } else {
   $10 = $incdec$ptr$i17$i;$__n$addr$0$i16$i = $dec$i18$i;
  }
 }
 $12 = load4($this);
 $13 = load4($__end_$i);
 $cmp3$i$i$i = ($13|0)==($12|0);
 if ($cmp3$i$i$i) {
  $14 = $12;
  $$pre8$i$i = load4($__begin_$i25$i);
  $$pre$phi11$i$iZ2D = $__begin_$i25$i;$18 = $$pre8$i$i;$19 = $14;$21 = $14;
 } else {
  $$pre$i$i$i = load4($__begin_$i25$i);
  $15 = $$pre$i$i$i;$__end1$addr$04$i$i$i = $13;
  while(1) {
   $add$ptr$i$i$i = ((($15)) + -120|0);
   $incdec$ptr$i$i$i = ((($__end1$addr$04$i$i$i)) + -120|0);
   __ZN5VNodeC2ERKS_($add$ptr$i$i$i,$incdec$ptr$i$i$i);
   $16 = load4($__begin_$i25$i);
   $incdec$ptr2$i$i$i = ((($16)) + -120|0);
   store4($__begin_$i25$i,$incdec$ptr2$i$i$i);
   $cmp$i$i$i = ($incdec$ptr$i$i$i|0)==($12|0);
   if ($cmp$i$i$i) {
    break;
   } else {
    $15 = $incdec$ptr2$i$i$i;$__end1$addr$04$i$i$i = $incdec$ptr$i$i$i;
   }
  }
  $17 = $incdec$ptr2$i$i$i;
  $$pre$i9$i = load4($this);
  $$pre31$i = load4($__end_$i);
  $$pre$phi11$i$iZ2D = $__begin_$i25$i;$18 = $17;$19 = $$pre$i9$i;$21 = $$pre31$i;
 }
 store4($this,$18);
 store4($$pre$phi11$i$iZ2D,$19);
 $20 = load4($__end_$i24$i);
 store4($__end_$i,$20);
 store4($__end_$i24$i,$21);
 $22 = load4($__first_$i$i$i$i);
 $23 = load4($__first_$i$i$i$i26$i);
 store4($__first_$i$i$i$i,$23);
 store4($__first_$i$i$i$i26$i,$22);
 $24 = load4($$pre$phi11$i$iZ2D);
 store4($__v$i,$24);
 __ZNSt3__214__split_bufferI5VNodeRNS_9allocatorIS1_EEED2Ev($__v$i);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3getERKS7_j($v,$index) {
 $v = $v|0;
 $index = $index|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $__end_$i = 0, $argv$i = 0, $arrayidx$i = 0, $call$i = 0, $call$lcssa$i = 0, $call1$i = 0, $call4$i = 0, $cmp = 0, $cmp1$i = 0, $cmp12$i = 0, $retval$sroa$0$0 = 0, $sub$ptr$div$i = 0, $sub$ptr$sub$i = 0, $tobool$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $argv$i = sp;
 $__end_$i = ((($v)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($v);
 $sub$ptr$sub$i = (($0) - ($1))|0;
 $sub$ptr$div$i = (($sub$ptr$sub$i|0) / 120)&-1;
 $cmp = ($sub$ptr$div$i>>>0)>($index>>>0);
 if (!($cmp)) {
  $retval$sroa$0$0 = (1);
  STACKTOP = sp;return ($retval$sroa$0$0|0);
 }
 $2 = $1;
 $arrayidx$i = (($2) + (($index*120)|0)|0);
 $call1$i = (_malloc(120)|0);
 $cmp12$i = ($call1$i|0)==(0|0);
 L4: do {
  if ($cmp12$i) {
   while(1) {
    $3 = load4(7784);
    $4 = (($3) + 0)|0;
    store4(7784,$4);
    $tobool$i = ($3|0)==(0);
    if ($tobool$i) {
     $call$lcssa$i = 0;
     break L4;
    }
    $5 = $3;
    FUNCTION_TABLE_v[$5 & 3]();
    $call$i = (_malloc(120)|0);
    $cmp1$i = ($call$i|0)==(0|0);
    if (!($cmp1$i)) {
     $call$lcssa$i = $call$i;
     break;
    }
   }
  } else {
   $call$lcssa$i = $call1$i;
  }
 } while(0);
 __ZN5VNodeC2ERKS_($call$lcssa$i,$arrayidx$i);
 store4($argv$i,$call$lcssa$i);
 $call4$i = (__emval_take_value((1104|0),($argv$i|0))|0);
 $retval$sroa$0$0 = $call4$i;
 STACKTOP = sp;return ($retval$sroa$0$0|0);
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3setERS7_jRKS4_($v,$index,$value) {
 $v = $v|0;
 $index = $index|0;
 $value = $value|0;
 var $$size$i = 0, $$size$i18 = 0, $$size$i4 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i172 = 0, $$sroa$speculated$i87 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i$i = 0, $__cap_$i$i = 0, $__cap_$i$i$i = 0, $__cap_$i$i$i123 = 0, $__cap_$i$i$i38 = 0, $__cap_$i$i103 = 0, $__cap_$i$i188 = 0, $__end_$i$i = 0, $__size_$i$i = 0, $__size_$i$i$i = 0, $__size_$i$i$i$i = 0, $__size_$i$i$i$i109 = 0, $__size_$i$i$i$i24 = 0, $__size_$i$i$i121 = 0, $__size_$i$i$i36 = 0;
 var $__size_$i$i104 = 0, $__size_$i$i189 = 0, $__size_$i2$i$i = 0, $__size_$i2$i$i142 = 0, $__size_$i2$i$i57 = 0, $__size_$i3$i$i = 0, $__size_$i3$i$i114 = 0, $__size_$i3$i$i29 = 0, $add$i$i$i = 0, $add$i$i$i174 = 0, $add$i$i$i89 = 0, $and$i$i$i = 0, $and$i$i$i124 = 0, $and$i$i$i175 = 0, $and$i$i$i20 = 0, $and$i$i$i39 = 0, $and$i$i$i90 = 0, $arrayidx$i = 0, $arrayidx$i105 = 0, $arrayidx$i139 = 0;
 var $arrayidx$i190 = 0, $arrayidx$i21 = 0, $arrayidx$i5 = 0, $arrayidx$i54 = 0, $call$i = 0, $call$i10 = 0, $call$i24 = 0, $call$lcssa$i = 0, $call$lcssa$i15 = 0, $call$lcssa$i29 = 0, $call1$i = 0, $call1$i19 = 0, $call1$i5 = 0, $children$i = 0, $cmp$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i171 = 0, $cmp$i$i$i$i86 = 0, $cmp$i$i136 = 0, $cmp$i$i4 = 0;
 var $cmp$i$i51 = 0, $cmp$i1 = 0, $cmp$i107 = 0, $cmp$i128 = 0, $cmp$i157 = 0, $cmp$i17 = 0, $cmp$i2 = 0, $cmp$i22 = 0, $cmp$i3 = 0, $cmp$i42$i = 0, $cmp$i42$i173 = 0, $cmp$i42$i88 = 0, $cmp$i43 = 0, $cmp$i72 = 0, $cmp$i9 = 0, $cmp1$i = 0, $cmp1$i11 = 0, $cmp1$i25 = 0, $cmp12$i = 0, $cmp12$i20 = 0;
 var $cmp12$i6 = 0, $cmp23$i = 0, $cmp23$i181 = 0, $cmp23$i96 = 0, $cmp41$i = 0, $cmp41$i184 = 0, $cmp41$i99 = 0, $cmp5$i = 0, $cmp5$i168 = 0, $cmp5$i83 = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i$i$i113 = 0, $cond$i$i$i28 = 0, $cond$i$i1 = 0, $cond$i$i116 = 0, $cond$i$i127 = 0, $cond$i$i167 = 0, $cond$i$i18 = 0, $cond$i$i31 = 0;
 var $cond$i$i42 = 0, $cond$i$i82 = 0, $cond$i19$i = 0, $cond$i19$i135 = 0, $cond$i19$i50 = 0, $cond48$i = 0, $cond48$i178 = 0, $cond48$i93 = 0, $conv$i$i$i = 0, $conv$i$i$i115 = 0, $conv$i$i$i30 = 0, $conv$i$i29$i = 0, $conv$i$i29$i144 = 0, $conv$i$i29$i59 = 0, $data$i = 0, $data7$i = 0, $elm$i = 0, $elm9$i = 0, $key$i = 0, $key3$i = 0;
 var $mul$i = 0, $mul$i170 = 0, $mul$i85 = 0, $or$i$i = 0, $or$i$i102 = 0, $or$i$i187 = 0, $phitmp$i = 0, $phitmp$i$i = 0, $phitmp$i$i125 = 0, $phitmp$i$i40 = 0, $phitmp$i176 = 0, $phitmp$i91 = 0, $sub$i = 0, $sub$i152 = 0, $sub$i67 = 0, $sub2$i = 0, $sub2$i156 = 0, $sub2$i71 = 0, $text$i = 0, $text5$i = 0;
 var $tobool$i = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i$i110 = 0, $tobool$i$i$i$i25 = 0, $tobool$i$i$i122 = 0, $tobool$i$i$i37 = 0, $tobool$i$i28$i = 0, $tobool$i$i28$i140 = 0, $tobool$i$i28$i55 = 0, $tobool$i22 = 0, $tobool$i8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($v);
 $arrayidx$i = (($0) + (($index*120)|0)|0);
 $cmp$i = ($arrayidx$i|0)==($value|0);
 do {
  if (!($cmp$i)) {
   $__size_$i$i$i$i = ((($value)) + 11|0);
   $1 = load1($__size_$i$i$i$i);
   $tobool$i$i$i$i = ($1<<24>>24)<(0);
   $2 = load4($value);
   $cond$i$i$i = $tobool$i$i$i$i ? $2 : $value;
   $__size_$i3$i$i = ((($value)) + 4|0);
   $3 = load4($__size_$i3$i$i);
   $conv$i$i$i = $1&255;
   $cond$i$i = $tobool$i$i$i$i ? $3 : $conv$i$i$i;
   $__size_$i$i$i = ((($arrayidx$i)) + 11|0);
   $4 = load1($__size_$i$i$i);
   $tobool$i$i$i = ($4<<24>>24)<(0);
   if ($tobool$i$i$i) {
    $__cap_$i$i$i = (((($0) + (($index*120)|0)|0)) + 8|0);
    $5 = load4($__cap_$i$i$i);
    $and$i$i$i = $5 & 2147483647;
    $phitmp$i$i = (($and$i$i$i) + -1)|0;
    $cond$i$i1 = $phitmp$i$i;
   } else {
    $cond$i$i1 = 10;
   }
   $cmp$i2 = ($cond$i$i>>>0)>($cond$i$i1>>>0);
   if (!($cmp$i2)) {
    if ($tobool$i$i$i) {
     $6 = load4($arrayidx$i);
     $cond$i19$i = $6;
    } else {
     $cond$i19$i = $arrayidx$i;
    }
    $cmp$i$i4 = ($cond$i$i|0)==(0);
    if (!($cmp$i$i4)) {
     _memmove(($cond$i19$i|0),($cond$i$i$i|0),($cond$i$i|0))|0;
    }
    $arrayidx$i5 = (($cond$i19$i) + ($cond$i$i)|0);
    store1($arrayidx$i5,0);
    $7 = load1($__size_$i$i$i);
    $tobool$i$i28$i = ($7<<24>>24)<(0);
    if ($tobool$i$i28$i) {
     $__size_$i2$i$i = (((($0) + (($index*120)|0)|0)) + 4|0);
     store4($__size_$i2$i$i,$cond$i$i);
     break;
    } else {
     $conv$i$i29$i = $cond$i$i&255;
     store1($__size_$i$i$i,$conv$i$i29$i);
     break;
    }
   }
   $sub$i = (($cond$i$i) - ($cond$i$i1))|0;
   $sub2$i = (-18 - ($cond$i$i1))|0;
   $cmp$i9 = ($sub2$i>>>0)<($sub$i>>>0);
   if ($cmp$i9) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($tobool$i$i$i) {
    $8 = load4($arrayidx$i);
    $cond$i$i18 = $8;
   } else {
    $cond$i$i18 = $arrayidx$i;
   }
   $cmp5$i = ($cond$i$i1>>>0)<(2147483623);
   if ($cmp5$i) {
    $mul$i = $cond$i$i1 << 1;
    $cmp$i$i$i$i = ($cond$i$i>>>0)<($mul$i>>>0);
    $$sroa$speculated$i = $cmp$i$i$i$i ? $mul$i : $cond$i$i;
    $cmp$i42$i = ($$sroa$speculated$i>>>0)<(11);
    $add$i$i$i = (($$sroa$speculated$i) + 16)|0;
    $and$i$i$i20 = $add$i$i$i & -16;
    $phitmp$i = $cmp$i42$i ? 11 : $and$i$i$i20;
    $cond48$i = $phitmp$i;
   } else {
    $cond48$i = -17;
   }
   $cmp$i1 = ($cond48$i|0)==(0);
   $$size$i = $cmp$i1 ? 1 : $cond48$i;
   $call1$i = (_malloc($$size$i)|0);
   $cmp12$i = ($call1$i|0)==(0|0);
   L29: do {
    if ($cmp12$i) {
     while(1) {
      $9 = load4(7784);
      $10 = (($9) + 0)|0;
      store4(7784,$10);
      $tobool$i = ($9|0)==(0);
      if ($tobool$i) {
       $call$lcssa$i = 0;
       break L29;
      }
      $11 = $9;
      FUNCTION_TABLE_v[$11 & 3]();
      $call$i = (_malloc($$size$i)|0);
      $cmp1$i = ($call$i|0)==(0|0);
      if (!($cmp1$i)) {
       $call$lcssa$i = $call$i;
       break;
      }
     }
    } else {
     $call$lcssa$i = $call1$i;
    }
   } while(0);
   $cmp23$i = ($cond$i$i|0)==(0);
   if (!($cmp23$i)) {
    _memcpy(($call$lcssa$i|0),($cond$i$i$i|0),($cond$i$i|0))|0;
   }
   $cmp41$i = ($cond$i$i1|0)==(10);
   if (!($cmp41$i)) {
    _free($cond$i$i18);
   }
   store4($arrayidx$i,$call$lcssa$i);
   $or$i$i = $cond48$i | -2147483648;
   $__cap_$i$i = (((($0) + (($index*120)|0)|0)) + 8|0);
   store4($__cap_$i$i,$or$i$i);
   $__size_$i$i = (((($0) + (($index*120)|0)|0)) + 4|0);
   store4($__size_$i$i,$cond$i$i);
   $arrayidx$i21 = (($call$lcssa$i) + ($cond$i$i)|0);
   store1($arrayidx$i21,0);
  }
 } while(0);
 $key$i = (((($0) + (($index*120)|0)|0)) + 12|0);
 $key3$i = ((($value)) + 12|0);
 $cmp$i22 = ($key$i|0)==($key3$i|0);
 do {
  if (!($cmp$i22)) {
   $__size_$i$i$i$i24 = ((($key3$i)) + 11|0);
   $12 = load1($__size_$i$i$i$i24);
   $tobool$i$i$i$i25 = ($12<<24>>24)<(0);
   $13 = load4($key3$i);
   $cond$i$i$i28 = $tobool$i$i$i$i25 ? $13 : $key3$i;
   $__size_$i3$i$i29 = ((($value)) + 16|0);
   $14 = load4($__size_$i3$i$i29);
   $conv$i$i$i30 = $12&255;
   $cond$i$i31 = $tobool$i$i$i$i25 ? $14 : $conv$i$i$i30;
   $__size_$i$i$i36 = ((($key$i)) + 11|0);
   $15 = load1($__size_$i$i$i36);
   $tobool$i$i$i37 = ($15<<24>>24)<(0);
   if ($tobool$i$i$i37) {
    $__cap_$i$i$i38 = (((($0) + (($index*120)|0)|0)) + 20|0);
    $16 = load4($__cap_$i$i$i38);
    $and$i$i$i39 = $16 & 2147483647;
    $phitmp$i$i40 = (($and$i$i$i39) + -1)|0;
    $cond$i$i42 = $phitmp$i$i40;
   } else {
    $cond$i$i42 = 10;
   }
   $cmp$i43 = ($cond$i$i31>>>0)>($cond$i$i42>>>0);
   if (!($cmp$i43)) {
    if ($tobool$i$i$i37) {
     $17 = load4($key$i);
     $cond$i19$i50 = $17;
    } else {
     $cond$i19$i50 = $key$i;
    }
    $cmp$i$i51 = ($cond$i$i31|0)==(0);
    if (!($cmp$i$i51)) {
     _memmove(($cond$i19$i50|0),($cond$i$i$i28|0),($cond$i$i31|0))|0;
    }
    $arrayidx$i54 = (($cond$i19$i50) + ($cond$i$i31)|0);
    store1($arrayidx$i54,0);
    $18 = load1($__size_$i$i$i36);
    $tobool$i$i28$i55 = ($18<<24>>24)<(0);
    if ($tobool$i$i28$i55) {
     $__size_$i2$i$i57 = (((($0) + (($index*120)|0)|0)) + 16|0);
     store4($__size_$i2$i$i57,$cond$i$i31);
     break;
    } else {
     $conv$i$i29$i59 = $cond$i$i31&255;
     store1($__size_$i$i$i36,$conv$i$i29$i59);
     break;
    }
   }
   $sub$i67 = (($cond$i$i31) - ($cond$i$i42))|0;
   $sub2$i71 = (-18 - ($cond$i$i42))|0;
   $cmp$i72 = ($sub2$i71>>>0)<($sub$i67>>>0);
   if ($cmp$i72) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($tobool$i$i$i37) {
    $19 = load4($key$i);
    $cond$i$i82 = $19;
   } else {
    $cond$i$i82 = $key$i;
   }
   $cmp5$i83 = ($cond$i$i42>>>0)<(2147483623);
   if ($cmp5$i83) {
    $mul$i85 = $cond$i$i42 << 1;
    $cmp$i$i$i$i86 = ($cond$i$i31>>>0)<($mul$i85>>>0);
    $$sroa$speculated$i87 = $cmp$i$i$i$i86 ? $mul$i85 : $cond$i$i31;
    $cmp$i42$i88 = ($$sroa$speculated$i87>>>0)<(11);
    $add$i$i$i89 = (($$sroa$speculated$i87) + 16)|0;
    $and$i$i$i90 = $add$i$i$i89 & -16;
    $phitmp$i91 = $cmp$i42$i88 ? 11 : $and$i$i$i90;
    $cond48$i93 = $phitmp$i91;
   } else {
    $cond48$i93 = -17;
   }
   $cmp$i3 = ($cond48$i93|0)==(0);
   $$size$i4 = $cmp$i3 ? 1 : $cond48$i93;
   $call1$i5 = (_malloc($$size$i4)|0);
   $cmp12$i6 = ($call1$i5|0)==(0|0);
   L69: do {
    if ($cmp12$i6) {
     while(1) {
      $20 = load4(7784);
      $21 = (($20) + 0)|0;
      store4(7784,$21);
      $tobool$i8 = ($20|0)==(0);
      if ($tobool$i8) {
       $call$lcssa$i15 = 0;
       break L69;
      }
      $22 = $20;
      FUNCTION_TABLE_v[$22 & 3]();
      $call$i10 = (_malloc($$size$i4)|0);
      $cmp1$i11 = ($call$i10|0)==(0|0);
      if (!($cmp1$i11)) {
       $call$lcssa$i15 = $call$i10;
       break;
      }
     }
    } else {
     $call$lcssa$i15 = $call1$i5;
    }
   } while(0);
   $cmp23$i96 = ($cond$i$i31|0)==(0);
   if (!($cmp23$i96)) {
    _memcpy(($call$lcssa$i15|0),($cond$i$i$i28|0),($cond$i$i31|0))|0;
   }
   $cmp41$i99 = ($cond$i$i42|0)==(10);
   if (!($cmp41$i99)) {
    _free($cond$i$i82);
   }
   store4($key$i,$call$lcssa$i15);
   $or$i$i102 = $cond48$i93 | -2147483648;
   $__cap_$i$i103 = (((($0) + (($index*120)|0)|0)) + 20|0);
   store4($__cap_$i$i103,$or$i$i102);
   $__size_$i$i104 = (((($0) + (($index*120)|0)|0)) + 16|0);
   store4($__size_$i$i104,$cond$i$i31);
   $arrayidx$i105 = (($call$lcssa$i15) + ($cond$i$i31)|0);
   store1($arrayidx$i105,0);
  }
 } while(0);
 $text$i = (((($0) + (($index*120)|0)|0)) + 24|0);
 $text5$i = ((($value)) + 24|0);
 $cmp$i107 = ($text$i|0)==($text5$i|0);
 do {
  if (!($cmp$i107)) {
   $__size_$i$i$i$i109 = ((($text5$i)) + 11|0);
   $23 = load1($__size_$i$i$i$i109);
   $tobool$i$i$i$i110 = ($23<<24>>24)<(0);
   $24 = load4($text5$i);
   $cond$i$i$i113 = $tobool$i$i$i$i110 ? $24 : $text5$i;
   $__size_$i3$i$i114 = ((($value)) + 28|0);
   $25 = load4($__size_$i3$i$i114);
   $conv$i$i$i115 = $23&255;
   $cond$i$i116 = $tobool$i$i$i$i110 ? $25 : $conv$i$i$i115;
   $__size_$i$i$i121 = ((($text$i)) + 11|0);
   $26 = load1($__size_$i$i$i121);
   $tobool$i$i$i122 = ($26<<24>>24)<(0);
   if ($tobool$i$i$i122) {
    $__cap_$i$i$i123 = (((($0) + (($index*120)|0)|0)) + 32|0);
    $27 = load4($__cap_$i$i$i123);
    $and$i$i$i124 = $27 & 2147483647;
    $phitmp$i$i125 = (($and$i$i$i124) + -1)|0;
    $cond$i$i127 = $phitmp$i$i125;
   } else {
    $cond$i$i127 = 10;
   }
   $cmp$i128 = ($cond$i$i116>>>0)>($cond$i$i127>>>0);
   if (!($cmp$i128)) {
    if ($tobool$i$i$i122) {
     $28 = load4($text$i);
     $cond$i19$i135 = $28;
    } else {
     $cond$i19$i135 = $text$i;
    }
    $cmp$i$i136 = ($cond$i$i116|0)==(0);
    if (!($cmp$i$i136)) {
     _memmove(($cond$i19$i135|0),($cond$i$i$i113|0),($cond$i$i116|0))|0;
    }
    $arrayidx$i139 = (($cond$i19$i135) + ($cond$i$i116)|0);
    store1($arrayidx$i139,0);
    $29 = load1($__size_$i$i$i121);
    $tobool$i$i28$i140 = ($29<<24>>24)<(0);
    if ($tobool$i$i28$i140) {
     $__size_$i2$i$i142 = (((($0) + (($index*120)|0)|0)) + 28|0);
     store4($__size_$i2$i$i142,$cond$i$i116);
     break;
    } else {
     $conv$i$i29$i144 = $cond$i$i116&255;
     store1($__size_$i$i$i121,$conv$i$i29$i144);
     break;
    }
   }
   $sub$i152 = (($cond$i$i116) - ($cond$i$i127))|0;
   $sub2$i156 = (-18 - ($cond$i$i127))|0;
   $cmp$i157 = ($sub2$i156>>>0)<($sub$i152>>>0);
   if ($cmp$i157) {
    __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
    // unreachable;
   }
   if ($tobool$i$i$i122) {
    $30 = load4($text$i);
    $cond$i$i167 = $30;
   } else {
    $cond$i$i167 = $text$i;
   }
   $cmp5$i168 = ($cond$i$i127>>>0)<(2147483623);
   if ($cmp5$i168) {
    $mul$i170 = $cond$i$i127 << 1;
    $cmp$i$i$i$i171 = ($cond$i$i116>>>0)<($mul$i170>>>0);
    $$sroa$speculated$i172 = $cmp$i$i$i$i171 ? $mul$i170 : $cond$i$i116;
    $cmp$i42$i173 = ($$sroa$speculated$i172>>>0)<(11);
    $add$i$i$i174 = (($$sroa$speculated$i172) + 16)|0;
    $and$i$i$i175 = $add$i$i$i174 & -16;
    $phitmp$i176 = $cmp$i42$i173 ? 11 : $and$i$i$i175;
    $cond48$i178 = $phitmp$i176;
   } else {
    $cond48$i178 = -17;
   }
   $cmp$i17 = ($cond48$i178|0)==(0);
   $$size$i18 = $cmp$i17 ? 1 : $cond48$i178;
   $call1$i19 = (_malloc($$size$i18)|0);
   $cmp12$i20 = ($call1$i19|0)==(0|0);
   L109: do {
    if ($cmp12$i20) {
     while(1) {
      $31 = load4(7784);
      $32 = (($31) + 0)|0;
      store4(7784,$32);
      $tobool$i22 = ($31|0)==(0);
      if ($tobool$i22) {
       $call$lcssa$i29 = 0;
       break L109;
      }
      $33 = $31;
      FUNCTION_TABLE_v[$33 & 3]();
      $call$i24 = (_malloc($$size$i18)|0);
      $cmp1$i25 = ($call$i24|0)==(0|0);
      if (!($cmp1$i25)) {
       $call$lcssa$i29 = $call$i24;
       break;
      }
     }
    } else {
     $call$lcssa$i29 = $call1$i19;
    }
   } while(0);
   $cmp23$i181 = ($cond$i$i116|0)==(0);
   if (!($cmp23$i181)) {
    _memcpy(($call$lcssa$i29|0),($cond$i$i$i113|0),($cond$i$i116|0))|0;
   }
   $cmp41$i184 = ($cond$i$i127|0)==(10);
   if (!($cmp41$i184)) {
    _free($cond$i$i167);
   }
   store4($text$i,$call$lcssa$i29);
   $or$i$i187 = $cond48$i178 | -2147483648;
   $__cap_$i$i188 = (((($0) + (($index*120)|0)|0)) + 32|0);
   store4($__cap_$i$i188,$or$i$i187);
   $__size_$i$i189 = (((($0) + (($index*120)|0)|0)) + 28|0);
   store4($__size_$i$i189,$cond$i$i116);
   $arrayidx$i190 = (($call$lcssa$i29) + ($cond$i$i116)|0);
   store1($arrayidx$i190,0);
  }
 } while(0);
 $data$i = (((($0) + (($index*120)|0)|0)) + 36|0);
 $data7$i = ((($value)) + 36|0);
 __ZN9VNodeDataaSERKS_($data$i,$data7$i);
 $elm$i = (((($0) + (($index*120)|0)|0)) + 104|0);
 $elm9$i = ((($value)) + 104|0);
 $34 = load4($elm9$i);
 __emval_incref(($34|0));
 $35 = load4($elm$i);
 __emval_decref(($35|0));
 $36 = load4($elm9$i);
 store4($elm$i,$36);
 if ($cmp$i) {
  return 1;
 }
 $__end_$i$i = ((($value)) + 112|0);
 $__begin_$i$i = ((($value)) + 108|0);
 $children$i = (((($0) + (($index*120)|0)|0)) + 108|0);
 $37 = load4($__begin_$i$i);
 $38 = load4($__end_$i$i);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($children$i,$37,$38);
 return 1;
}
function __ZNSt3__214__split_bufferI5VNodeRNS_9allocatorIS1_EEED2Ev($this) {
 $this = $this|0;
 var $$pre$i$i$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i = 0;
 var $__end_$i$i$i = 0, $__end_$i$i$i$i$i$i$i = 0, $__size_$i$i = 0, $__size_$i$i2 = 0, $__size_$i$i8 = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i2$i$i$i$i = 0, $cmp1$i$i$i = 0, $data$i$i$i$i$i$i = 0, $handle$i$i$i$i$i$i$i = 0, $incdec$ptr$i$i$i = 0, $incdec$ptr$i$i$i$i$i$i$i = 0, $key$i$i$i$i$i$i = 0, $text$i$i$i$i$i$i = 0, $tobool = 0, $tobool$i$i = 0, $tobool$i$i3 = 0, $tobool$i$i9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $__begin_$i = ((($this)) + 4|0);
 $0 = load4($__begin_$i);
 $__end_$i$i$i = ((($this)) + 8|0);
 $1 = load4($__end_$i$i$i);
 $cmp1$i$i$i = ($1|0)==($0|0);
 if (!($cmp1$i$i$i)) {
  $2 = $1;
  while(1) {
   $incdec$ptr$i$i$i = ((($2)) + -120|0);
   store4($__end_$i$i$i,$incdec$ptr$i$i$i);
   $3 = ((($2)) + -12|0);
   $4 = load4($3);
   $cmp$i$i$i$i$i = ($4|0)==(0|0);
   if (!($cmp$i$i$i$i$i)) {
    $__end_$i$i$i$i$i$i$i = ((($2)) + -8|0);
    $5 = load4($__end_$i$i$i$i$i$i$i);
    $cmp$i$i$i2$i$i$i$i = ($5|0)==($4|0);
    if ($cmp$i$i$i2$i$i$i$i) {
     $8 = $4;
    } else {
     $6 = $5;
     while(1) {
      $incdec$ptr$i$i$i$i$i$i$i = ((($6)) + -120|0);
      store4($__end_$i$i$i$i$i$i$i,$incdec$ptr$i$i$i$i$i$i$i);
      __ZN5VNodeD2Ev($incdec$ptr$i$i$i$i$i$i$i);
      $7 = load4($__end_$i$i$i$i$i$i$i);
      $cmp$i$i$i$i$i$i$i = ($7|0)==($4|0);
      if ($cmp$i$i$i$i$i$i$i) {
       break;
      } else {
       $6 = $7;
      }
     }
     $$pre$i$i$i$i = load4($3);
     $8 = $$pre$i$i$i$i;
    }
    _free($8);
   }
   $handle$i$i$i$i$i$i$i = ((($2)) + -16|0);
   $9 = load4($handle$i$i$i$i$i$i$i);
   __emval_decref(($9|0));
   $data$i$i$i$i$i$i = ((($2)) + -84|0);
   __ZN9VNodeDataD2Ev($data$i$i$i$i$i$i);
   $text$i$i$i$i$i$i = ((($2)) + -96|0);
   $__size_$i$i = ((($text$i$i$i$i$i$i)) + 11|0);
   $10 = load1($__size_$i$i);
   $tobool$i$i = ($10<<24>>24)<(0);
   if ($tobool$i$i) {
    $11 = load4($text$i$i$i$i$i$i);
    _free($11);
   }
   $key$i$i$i$i$i$i = ((($2)) + -108|0);
   $__size_$i$i2 = ((($key$i$i$i$i$i$i)) + 11|0);
   $12 = load1($__size_$i$i2);
   $tobool$i$i3 = ($12<<24>>24)<(0);
   if ($tobool$i$i3) {
    $13 = load4($key$i$i$i$i$i$i);
    _free($13);
   }
   $__size_$i$i8 = ((($incdec$ptr$i$i$i)) + 11|0);
   $14 = load1($__size_$i$i8);
   $tobool$i$i9 = ($14<<24>>24)<(0);
   if ($tobool$i$i9) {
    $15 = load4($incdec$ptr$i$i$i);
    _free($15);
   }
   $16 = load4($__end_$i$i$i);
   $cmp$i$i$i = ($16|0)==($0|0);
   if ($cmp$i$i$i) {
    break;
   } else {
    $2 = $16;
   }
  }
 }
 $17 = load4($this);
 $tobool = ($17|0)==(0|0);
 if ($tobool) {
  return;
 }
 _free($17);
 return;
}
function __ZN10emscripten8internal13getActualTypeINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEPKvPT_($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1176|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEvPT_($ptr) {
 $ptr = $ptr|0;
 var $$pre$i = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__end_$i$i$i = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i$i2$i = 0, $incdec$ptr$i$i$i = 0, $isnull = 0, label = 0, sp = 0;
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
  $cmp$i$i2$i = ($1|0)==($0|0);
  if ($cmp$i$i2$i) {
   $4 = $0;
  } else {
   $2 = $1;
   while(1) {
    $incdec$ptr$i$i$i = ((($2)) + -120|0);
    store4($__end_$i$i$i,$incdec$ptr$i$i$i);
    __ZN5VNodeD2Ev($incdec$ptr$i$i$i);
    $3 = load4($__end_$i$i$i);
    $cmp$i$i$i = ($3|0)==($0|0);
    if ($cmp$i$i$i) {
     break;
    } else {
     $2 = $3;
    }
   }
   $$pre$i = load4($ptr);
   $4 = $$pre$i;
  }
  _free($4);
 }
 _free($ptr);
 return;
}
function __ZN10emscripten8internal12operator_newINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEEEPT_DpOT0_() {
 var $0 = 0, $1 = 0, $2 = 0, $__end_$i$i = 0, $__end_cap_$i$i = 0, $call$i = 0, $call$lcssa$i = 0, $call1$i = 0, $cmp1$i = 0, $cmp12$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call1$i = (_malloc(12)|0);
 $cmp12$i = ($call1$i|0)==(0|0);
 L1: do {
  if ($cmp12$i) {
   while(1) {
    $0 = load4(7784);
    $1 = (($0) + 0)|0;
    store4(7784,$1);
    $tobool$i = ($0|0)==(0);
    if ($tobool$i) {
     $call$lcssa$i = 0;
     break L1;
    }
    $2 = $0;
    FUNCTION_TABLE_v[$2 & 3]();
    $call$i = (_malloc(12)|0);
    $cmp1$i = ($call$i|0)==(0|0);
    if (!($cmp1$i)) {
     $call$lcssa$i = $call$i;
     break;
    }
   }
  } else {
   $call$lcssa$i = $call1$i;
  }
 } while(0);
 store4($call$lcssa$i,0);
 $__end_$i$i = ((($call$lcssa$i)) + 4|0);
 store4($__end_$i$i,0);
 $__end_cap_$i$i = ((($call$lcssa$i)) + 8|0);
 store4($__end_cap_$i$i,0);
 return ($call$lcssa$i|0);
}
function __ZN10emscripten8internal7InvokerIPNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEE6invokeEPFS8_vE($fn) {
 $fn = $fn|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (FUNCTION_TABLE_i[$fn & 3]()|0);
 return ($call|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvRKS4_EvPS7_JS9_EE6invokeERKSB_SC_PS4_($method,$wireThis,$args) {
 $method = $method|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 var $$elt1 = 0, $$unpack = 0, $$unpack2 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $vtable = 0, label = 0, sp = 0;
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
  FUNCTION_TABLE_vii[$3 & 1]($0,$args);
  return;
 } else {
  $vtable = load4($0);
  $2 = (($vtable) + ($$unpack)|0);
  $memptr$virtualfn = load4($2);
  $3 = $memptr$virtualfn;
  FUNCTION_TABLE_vii[$3 & 1]($0,$args);
  return;
 }
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvjRKS4_EvPS7_JjS9_EE6invokeERKSB_SC_jPS4_($method,$wireThis,$args,$args1) {
 $method = $method|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $$elt1 = 0, $$unpack = 0, $$unpack2 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $vtable = 0, label = 0, sp = 0;
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
  FUNCTION_TABLE_viii[$3 & 7]($0,$args,$args1);
  return;
 } else {
  $vtable = load4($0);
  $2 = (($vtable) + ($$unpack)|0);
  $memptr$virtualfn = load4($2);
  $3 = $memptr$virtualfn;
  FUNCTION_TABLE_viii[$3 & 7]($0,$args,$args1);
  return;
 }
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEKFjvEjPKS7_JEE6invokeERKS9_SB_($method,$wireThis) {
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
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorI5VNodeNS3_9allocatorIS5_EEEEjES2_SA_JjEE6invokeEPSC_PS8_j($function,$wireThis,$args) {
 $function = $function|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 var $0 = 0, $call2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($function);
 $call2 = (FUNCTION_TABLE_iii[$0 & 7]($wireThis,$args)|0);
 __emval_incref(($call2|0));
 __emval_decref(($call2|0));
 return ($call2|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEjRKS4_EbS8_JjSA_EE6invokeEPSC_PS7_jPS4_($function,$wireThis,$args,$args1) {
 $function = $function|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $call5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($function);
 $call5 = (FUNCTION_TABLE_iiii[$0 & 7]($wireThis,$args,$args1)|0);
 return ($call5|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES9_9VNodeDataNS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_S9_SA_SD_EPNS0_11BindingTypeIS9_EUt_ESK_PSA_PSD_($fn,$args,$args1,$args3,$args5) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 $args5 = $args5|0;
 var $$pre$i14 = 0, $$size$i = 0, $$size$i5 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__cap_$i$i = 0, $__cap_$i$i11 = 0;
 var $__end_$i$i = 0, $__end_$i$i$i$i = 0, $__end_$i$i$i4 = 0, $__end_$i$i$i7 = 0, $__end_$i$i7$i = 0, $__end_cap_$i9$i$i = 0, $__end_cap_$i9$i$i$i = 0, $__first_$i$i$i8$i$i = 0, $__first_$i$i$i8$i$i$i = 0, $__p$015$i = 0, $__p$015$i20 = 0, $__p$016$i = 0, $__p$016$i22 = 0, $__size_$i$i = 0, $__size_$i$i12 = 0, $__size_$i$i25 = 0, $__size_$i$i30 = 0, $__size_$i12$i = 0, $__size_$i12$i16 = 0, $add$i$i$i = 0;
 var $add$i$i$i6 = 0, $agg$tmp = 0, $agg$tmp12 = 0, $agg$tmp7 = 0, $agg$tmp8 = 0, $and$i$i$i = 0, $and$i$i$i7 = 0, $args$i$i = 0, $args24$i$i = 0, $arraydecay$i = 0, $arraydecay$i1 = 0, $arrayidx$i = 0, $arrayidx$i23 = 0, $attachData$i$i = 0, $attachData19$i$i = 0, $attrs$i$i = 0, $attrs3$i$i = 0, $call$i = 0, $call$i11 = 0, $call$i23 = 0;
 var $call$lcssa$i = 0, $call$lcssa$i16 = 0, $call$lcssa$i28 = 0, $call1$i = 0, $call1$i18 = 0, $call1$i6 = 0, $children$i = 0, $children9$i = 0, $className$i$i = 0, $className4$i$i = 0, $cmp$i$i = 0, $cmp$i$i$i11 = 0, $cmp$i$i18 = 0, $cmp$i$i2$i8 = 0, $cmp$i1 = 0, $cmp$i2 = 0, $cmp$i3 = 0, $cmp$i4 = 0, $cmp$i6 = 0, $cmp1$i = 0;
 var $cmp1$i12 = 0, $cmp1$i24 = 0, $cmp12$i = 0, $cmp12$i19 = 0, $cmp12$i7 = 0, $cmp2$i = 0, $cmp2$i4 = 0, $conv$i$i = 0, $conv$i$i14 = 0, $data$i = 0, $data5$i = 0, $dataset$i$i = 0, $dataset10$i$i = 0, $elm$i = 0, $elm6$i = 0, $hero$i$i = 0, $hero16$i$i = 0, $incdec$ptr$i$i$i10 = 0, $key$i = 0, $key$i$i = 0;
 var $key22$i$i = 0, $key3$i = 0, $ns$i$i = 0, $ns23$i$i = 0, $on$i$i = 0, $on13$i$i = 0, $or$i$i = 0, $or$i$i10 = 0, $ref$tmp = 0, $style$i$i = 0, $style7$i$i = 0, $text$i = 0, $text4$i = 0, $tobool$i = 0, $tobool$i$i = 0, $tobool$i$i31 = 0, $tobool$i21 = 0, $tobool$i9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0;
 $ref$tmp = sp + 104|0;
 $agg$tmp = sp + 92|0;
 $agg$tmp7 = sp + 80|0;
 $agg$tmp8 = sp + 12|0;
 $agg$tmp12 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($agg$tmp,i64_const(0,0),4); store4($agg$tmp+8|0,0,4);
 $cmp$i1 = ($0>>>0)>(4294967279);
 if ($cmp$i1) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $cmp2$i = ($0>>>0)<(11);
 if ($cmp2$i) {
  $conv$i$i = $0&255;
  $__size_$i12$i = ((($agg$tmp)) + 11|0);
  store1($__size_$i12$i,$conv$i$i);
  $cmp$i$i = ($0|0)==(0);
  if ($cmp$i$i) {
   $__p$016$i = $agg$tmp;
  } else {
   $__p$015$i = $agg$tmp;
   label = 9;
  }
 } else {
  $add$i$i$i = (($0) + 16)|0;
  $and$i$i$i = $add$i$i$i & -16;
  $cmp$i3 = ($and$i$i$i|0)==(0);
  $$size$i = $cmp$i3 ? 1 : $and$i$i$i;
  $call1$i = (_malloc($$size$i)|0);
  $cmp12$i = ($call1$i|0)==(0|0);
  L7: do {
   if ($cmp12$i) {
    while(1) {
     $1 = load4(7784);
     $2 = (($1) + 0)|0;
     store4(7784,$2);
     $tobool$i = ($1|0)==(0);
     if ($tobool$i) {
      $call$lcssa$i = 0;
      break L7;
     }
     $3 = $1;
     FUNCTION_TABLE_v[$3 & 3]();
     $call$i = (_malloc($$size$i)|0);
     $cmp1$i = ($call$i|0)==(0|0);
     if (!($cmp1$i)) {
      $call$lcssa$i = $call$i;
      break;
     }
    }
   } else {
    $call$lcssa$i = $call1$i;
   }
  } while(0);
  store4($agg$tmp,$call$lcssa$i);
  $or$i$i = $and$i$i$i | -2147483648;
  $__cap_$i$i = ((($agg$tmp)) + 8|0);
  store4($__cap_$i$i,$or$i$i);
  $__size_$i$i = ((($agg$tmp)) + 4|0);
  store4($__size_$i$i,$0);
  $__p$015$i = $call$lcssa$i;
  label = 9;
 }
 if ((label|0) == 9) {
  _memcpy(($__p$015$i|0),($arraydecay$i|0),($0|0))|0;
  $__p$016$i = $__p$015$i;
 }
 $arrayidx$i = (($__p$016$i) + ($0)|0);
 store1($arrayidx$i,0);
 $arraydecay$i1 = ((($args1)) + 4|0);
 $4 = load4($args1);
 ; store8($agg$tmp7,i64_const(0,0),4); store4($agg$tmp7+8|0,0,4);
 $cmp$i2 = ($4>>>0)>(4294967279);
 if ($cmp$i2) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $cmp2$i4 = ($4>>>0)<(11);
 if ($cmp2$i4) {
  $conv$i$i14 = $4&255;
  $__size_$i12$i16 = ((($agg$tmp7)) + 11|0);
  store1($__size_$i12$i16,$conv$i$i14);
  $cmp$i$i18 = ($4|0)==(0);
  if ($cmp$i$i18) {
   $__p$016$i22 = $agg$tmp7;
  } else {
   $__p$015$i20 = $agg$tmp7;
   label = 18;
  }
 } else {
  $add$i$i$i6 = (($4) + 16)|0;
  $and$i$i$i7 = $add$i$i$i6 & -16;
  $cmp$i4 = ($and$i$i$i7|0)==(0);
  $$size$i5 = $cmp$i4 ? 1 : $and$i$i$i7;
  $call1$i6 = (_malloc($$size$i5)|0);
  $cmp12$i7 = ($call1$i6|0)==(0|0);
  L21: do {
   if ($cmp12$i7) {
    while(1) {
     $5 = load4(7784);
     $6 = (($5) + 0)|0;
     store4(7784,$6);
     $tobool$i9 = ($5|0)==(0);
     if ($tobool$i9) {
      $call$lcssa$i16 = 0;
      break L21;
     }
     $7 = $5;
     FUNCTION_TABLE_v[$7 & 3]();
     $call$i11 = (_malloc($$size$i5)|0);
     $cmp1$i12 = ($call$i11|0)==(0|0);
     if (!($cmp1$i12)) {
      $call$lcssa$i16 = $call$i11;
      break;
     }
    }
   } else {
    $call$lcssa$i16 = $call1$i6;
   }
  } while(0);
  store4($agg$tmp7,$call$lcssa$i16);
  $or$i$i10 = $and$i$i$i7 | -2147483648;
  $__cap_$i$i11 = ((($agg$tmp7)) + 8|0);
  store4($__cap_$i$i11,$or$i$i10);
  $__size_$i$i12 = ((($agg$tmp7)) + 4|0);
  store4($__size_$i$i12,$4);
  $__p$015$i20 = $call$lcssa$i16;
  label = 18;
 }
 if ((label|0) == 18) {
  _memcpy(($__p$015$i20|0),($arraydecay$i1|0),($4|0))|0;
  $__p$016$i22 = $__p$015$i20;
 }
 $arrayidx$i23 = (($__p$016$i22) + ($4)|0);
 store1($arrayidx$i23,0);
 __ZN9VNodeDataC2ERKS_($agg$tmp8,$args3);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($agg$tmp12,$args5);
 FUNCTION_TABLE_viiiii[$fn & 7]($ref$tmp,$agg$tmp,$agg$tmp7,$agg$tmp8,$agg$tmp12);
 $call1$i18 = (_malloc(120)|0);
 $cmp12$i19 = ($call1$i18|0)==(0|0);
 L29: do {
  if ($cmp12$i19) {
   while(1) {
    $8 = load4(7784);
    $9 = (($8) + 0)|0;
    store4(7784,$9);
    $tobool$i21 = ($8|0)==(0);
    if ($tobool$i21) {
     $call$lcssa$i28 = 0;
     break L29;
    }
    $10 = $8;
    FUNCTION_TABLE_v[$10 & 3]();
    $call$i23 = (_malloc(120)|0);
    $cmp1$i24 = ($call$i23|0)==(0|0);
    if (!($cmp1$i24)) {
     $call$lcssa$i28 = $call$i23;
     break;
    }
   }
  } else {
   $call$lcssa$i28 = $call1$i18;
  }
 } while(0);
 ; store8($call$lcssa$i28,load8($ref$tmp,4),4); store4($call$lcssa$i28+8 | 0,load4($ref$tmp+8 | 0,4),4);
 ; store8($ref$tmp,i64_const(0,0),4); store4($ref$tmp+8|0,0,4);
 $key$i = ((($call$lcssa$i28)) + 12|0);
 $key3$i = ((($ref$tmp)) + 12|0);
 ; store8($key$i,load8($key3$i,4),4); store4($key$i+8 | 0,load4($key3$i+8 | 0,4),4);
 ; store8($key3$i,i64_const(0,0),4); store4($key3$i+8|0,0,4);
 $text$i = ((($call$lcssa$i28)) + 24|0);
 $text4$i = ((($ref$tmp)) + 24|0);
 ; store8($text$i,load8($text4$i,4),4); store4($text$i+8 | 0,load4($text4$i+8 | 0,4),4);
 ; store8($text4$i,i64_const(0,0),4); store4($text4$i+8|0,0,4);
 $data$i = ((($call$lcssa$i28)) + 36|0);
 $data5$i = ((($ref$tmp)) + 36|0);
 $11 = load4($data5$i);
 store4($data$i,$11);
 store4($data5$i,0);
 $attrs$i$i = ((($call$lcssa$i28)) + 40|0);
 $attrs3$i$i = ((($ref$tmp)) + 40|0);
 $12 = load4($attrs3$i$i);
 store4($attrs$i$i,$12);
 store4($attrs3$i$i,0);
 $className$i$i = ((($call$lcssa$i28)) + 44|0);
 $className4$i$i = ((($ref$tmp)) + 44|0);
 $13 = load4($className4$i$i);
 store4($className$i$i,$13);
 store4($className4$i$i,0);
 $style$i$i = ((($call$lcssa$i28)) + 48|0);
 $style7$i$i = ((($ref$tmp)) + 48|0);
 $14 = load4($style7$i$i);
 store4($style$i$i,$14);
 store4($style7$i$i,0);
 $dataset$i$i = ((($call$lcssa$i28)) + 52|0);
 $dataset10$i$i = ((($ref$tmp)) + 52|0);
 $15 = load4($dataset10$i$i);
 store4($dataset$i$i,$15);
 store4($dataset10$i$i,0);
 $on$i$i = ((($call$lcssa$i28)) + 56|0);
 $on13$i$i = ((($ref$tmp)) + 56|0);
 $16 = load4($on13$i$i);
 store4($on$i$i,$16);
 store4($on13$i$i,0);
 $hero$i$i = ((($call$lcssa$i28)) + 60|0);
 $hero16$i$i = ((($ref$tmp)) + 60|0);
 $17 = load4($hero16$i$i);
 store4($hero$i$i,$17);
 store4($hero16$i$i,0);
 $attachData$i$i = ((($call$lcssa$i28)) + 64|0);
 $attachData19$i$i = ((($ref$tmp)) + 64|0);
 $18 = load4($attachData19$i$i);
 store4($attachData$i$i,$18);
 store4($attachData19$i$i,0);
 $key$i$i = ((($call$lcssa$i28)) + 68|0);
 $key22$i$i = ((($ref$tmp)) + 68|0);
 ; store8($key$i$i,load8($key22$i$i,4),4); store4($key$i$i+8 | 0,load4($key22$i$i+8 | 0,4),4);
 ; store8($key22$i$i,i64_const(0,0),4); store4($key22$i$i+8|0,0,4);
 $ns$i$i = ((($call$lcssa$i28)) + 80|0);
 $ns23$i$i = ((($ref$tmp)) + 80|0);
 ; store8($ns$i$i,load8($ns23$i$i,4),4); store4($ns$i$i+8 | 0,load4($ns23$i$i+8 | 0,4),4);
 ; store8($ns23$i$i,i64_const(0,0),4); store4($ns23$i$i+8|0,0,4);
 $args$i$i = ((($call$lcssa$i28)) + 92|0);
 $args24$i$i = ((($ref$tmp)) + 92|0);
 $__end_$i$i$i$i = ((($call$lcssa$i28)) + 96|0);
 $__end_cap_$i9$i$i$i = ((($call$lcssa$i28)) + 100|0);
 $19 = load4($args24$i$i);
 store4($args$i$i,$19);
 $__end_$i$i7$i = ((($ref$tmp)) + 96|0);
 $20 = load4($__end_$i$i7$i);
 store4($__end_$i$i$i$i,$20);
 $__first_$i$i$i8$i$i$i = ((($ref$tmp)) + 100|0);
 $21 = load4($__first_$i$i$i8$i$i$i);
 store4($__end_cap_$i9$i$i$i,$21);
 store4($__first_$i$i$i8$i$i$i,0);
 store4($__end_$i$i7$i,0);
 store4($args24$i$i,0);
 $elm$i = ((($call$lcssa$i28)) + 104|0);
 $elm6$i = ((($ref$tmp)) + 104|0);
 $22 = load4($elm6$i);
 store4($elm$i,$22);
 store4($elm6$i,0);
 $children$i = ((($call$lcssa$i28)) + 108|0);
 $children9$i = ((($ref$tmp)) + 108|0);
 $__end_$i$i$i4 = ((($call$lcssa$i28)) + 112|0);
 $__end_cap_$i9$i$i = ((($call$lcssa$i28)) + 116|0);
 $23 = load4($children9$i);
 store4($children$i,$23);
 $__end_$i$i = ((($ref$tmp)) + 112|0);
 $24 = load4($__end_$i$i);
 store4($__end_$i$i$i4,$24);
 $__first_$i$i$i8$i$i = ((($ref$tmp)) + 116|0);
 $25 = load4($__first_$i$i$i8$i$i);
 store4($__end_cap_$i9$i$i,$25);
 store4($__first_$i$i$i8$i$i,0);
 store4($__end_$i$i,0);
 store4($children9$i,0);
 __ZN5VNodeD2Ev($ref$tmp);
 $26 = load4($agg$tmp12);
 $cmp$i6 = ($26|0)==(0|0);
 if (!($cmp$i6)) {
  $__end_$i$i$i7 = ((($agg$tmp12)) + 4|0);
  $27 = load4($__end_$i$i$i7);
  $cmp$i$i2$i8 = ($27|0)==($26|0);
  if ($cmp$i$i2$i8) {
   $30 = $26;
  } else {
   $28 = $27;
   while(1) {
    $incdec$ptr$i$i$i10 = ((($28)) + -120|0);
    store4($__end_$i$i$i7,$incdec$ptr$i$i$i10);
    __ZN5VNodeD2Ev($incdec$ptr$i$i$i10);
    $29 = load4($__end_$i$i$i7);
    $cmp$i$i$i11 = ($29|0)==($26|0);
    if ($cmp$i$i$i11) {
     break;
    } else {
     $28 = $29;
    }
   }
   $$pre$i14 = load4($agg$tmp12);
   $30 = $$pre$i14;
  }
  _free($30);
 }
 __ZN9VNodeDataD2Ev($agg$tmp8);
 $__size_$i$i25 = ((($agg$tmp7)) + 11|0);
 $31 = load1($__size_$i$i25);
 $tobool$i$i = ($31<<24>>24)<(0);
 if ($tobool$i$i) {
  $32 = load4($agg$tmp7);
  _free($32);
 }
 $__size_$i$i30 = ((($agg$tmp)) + 11|0);
 $33 = load1($__size_$i$i30);
 $tobool$i$i31 = ($33<<24>>24)<(0);
 if (!($tobool$i$i31)) {
  STACKTOP = sp;return ($call$lcssa$i28|0);
 }
 $34 = load4($agg$tmp);
 _free($34);
 STACKTOP = sp;return ($call$lcssa$i28|0);
}
function __GLOBAL__sub_I_app_cpp() {
 var $$repack4$i$i$i$i = 0, $$repack4$i$i29$i$i = 0, $$repack4$i$i37$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $call$i$i = 0, $call$i$i$i = 0, $call$i$i6 = 0, $call$i102$i = 0, $call$i18$i = 0, $call$i18$i$i = 0, $call$i18$i30 = 0, $call$i30$i = 0, $call$i30$i$i = 0, $call$i30$i42 = 0, $call$i42$i = 0, $call$i42$i$i = 0, $call$i54$i = 0, $call$i6$i = 0, $call$i6$i$i = 0, $call$i6$i18 = 0, $call$i66$i = 0, $call$i78$i = 0, $call$i90$i = 0, $call$lcssa$i$i = 0;
 var $call$lcssa$i$i$i = 0, $call$lcssa$i$i11 = 0, $call$lcssa$i107$i = 0, $call$lcssa$i11$i = 0, $call$lcssa$i11$i$i = 0, $call$lcssa$i11$i23 = 0, $call$lcssa$i23$i = 0, $call$lcssa$i23$i$i = 0, $call$lcssa$i23$i35 = 0, $call$lcssa$i35$i = 0, $call$lcssa$i35$i$i = 0, $call$lcssa$i35$i47 = 0, $call$lcssa$i47$i = 0, $call$lcssa$i47$i$i = 0, $call$lcssa$i59$i = 0, $call$lcssa$i71$i = 0, $call$lcssa$i83$i = 0, $call$lcssa$i95$i = 0, $call1$i$i = 0, $call1$i$i$i = 0;
 var $call1$i$i1 = 0, $call1$i1$i = 0, $call1$i1$i$i = 0, $call1$i1$i12 = 0, $call1$i13$i = 0, $call1$i13$i$i = 0, $call1$i13$i24 = 0, $call1$i25$i = 0, $call1$i25$i$i = 0, $call1$i25$i36 = 0, $call1$i37$i = 0, $call1$i37$i$i = 0, $call1$i49$i = 0, $call1$i61$i = 0, $call1$i73$i = 0, $call1$i85$i = 0, $call1$i97$i = 0, $cmp1$i$i = 0, $cmp1$i$i$i = 0, $cmp1$i$i7 = 0;
 var $cmp1$i103$i = 0, $cmp1$i19$i = 0, $cmp1$i19$i$i = 0, $cmp1$i19$i31 = 0, $cmp1$i31$i = 0, $cmp1$i31$i$i = 0, $cmp1$i31$i43 = 0, $cmp1$i43$i = 0, $cmp1$i43$i$i = 0, $cmp1$i55$i = 0, $cmp1$i67$i = 0, $cmp1$i7$i = 0, $cmp1$i7$i$i = 0, $cmp1$i7$i19 = 0, $cmp1$i79$i = 0, $cmp1$i91$i = 0, $cmp12$i$i = 0, $cmp12$i$i$i = 0, $cmp12$i$i2 = 0, $cmp12$i14$i = 0;
 var $cmp12$i14$i$i = 0, $cmp12$i14$i25 = 0, $cmp12$i2$i = 0, $cmp12$i2$i$i = 0, $cmp12$i2$i13 = 0, $cmp12$i26$i = 0, $cmp12$i26$i$i = 0, $cmp12$i26$i37 = 0, $cmp12$i38$i = 0, $cmp12$i38$i$i = 0, $cmp12$i50$i = 0, $cmp12$i62$i = 0, $cmp12$i74$i = 0, $cmp12$i86$i = 0, $cmp12$i98$i = 0, $tobool$i$i = 0, $tobool$i$i$i = 0, $tobool$i$i4 = 0, $tobool$i100$i = 0, $tobool$i16$i = 0;
 var $tobool$i16$i$i = 0, $tobool$i16$i28 = 0, $tobool$i28$i = 0, $tobool$i28$i$i = 0, $tobool$i28$i40 = 0, $tobool$i4$i = 0, $tobool$i4$i$i = 0, $tobool$i4$i16 = 0, $tobool$i40$i = 0, $tobool$i40$i$i = 0, $tobool$i52$i = 0, $tobool$i64$i = 0, $tobool$i76$i = 0, $tobool$i88$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4(7272,(1));
 __embind_register_class((1032|0),(1040|0),(1056|0),(0|0),(2194|0),(3|0),(2197|0),(0|0),(2197|0),(0|0),(2040|0),(2199|0),(11|0));
 __embind_register_class_constructor((1032|0),1,(1632|0),(2194|0),(4|0),(1|0));
 $call1$i$i = (_malloc(4)|0);
 $cmp12$i$i = ($call1$i$i|0)==(0|0);
 L1: do {
  if ($cmp12$i$i) {
   while(1) {
    $0 = load4(7784);
    $1 = (($0) + 0)|0;
    store4(7784,$1);
    $tobool$i$i = ($0|0)==(0);
    if ($tobool$i$i) {
     $call$lcssa$i$i = 0;
     break L1;
    }
    $2 = $0;
    FUNCTION_TABLE_v[$2 & 3]();
    $call$i$i = (_malloc(4)|0);
    $cmp1$i$i = ($call$i$i|0)==(0|0);
    if (!($cmp1$i$i)) {
     $call$lcssa$i$i = $call$i$i;
     break;
    }
   }
  } else {
   $call$lcssa$i$i = $call1$i$i;
  }
 } while(0);
 store4($call$lcssa$i$i,32);
 $call1$i1$i = (_malloc(4)|0);
 $cmp12$i2$i = ($call1$i1$i|0)==(0|0);
 L6: do {
  if ($cmp12$i2$i) {
   while(1) {
    $3 = load4(7784);
    $4 = (($3) + 0)|0;
    store4(7784,$4);
    $tobool$i4$i = ($3|0)==(0);
    if ($tobool$i4$i) {
     $call$lcssa$i11$i = 0;
     break L6;
    }
    $5 = $3;
    FUNCTION_TABLE_v[$5 & 3]();
    $call$i6$i = (_malloc(4)|0);
    $cmp1$i7$i = ($call$i6$i|0)==(0|0);
    if (!($cmp1$i7$i)) {
     $call$lcssa$i11$i = $call$i6$i;
     break;
    }
   }
  } else {
   $call$lcssa$i11$i = $call1$i1$i;
  }
 } while(0);
 store4($call$lcssa$i11$i,32);
 __embind_register_class_property((1032|0),(2050|0),(1080|0),(2303|0),(1|0),($call$lcssa$i$i|0),(1080|0),(2307|0),(1|0),($call$lcssa$i11$i|0));
 $call1$i13$i = (_malloc(4)|0);
 $cmp12$i14$i = ($call1$i13$i|0)==(0|0);
 L11: do {
  if ($cmp12$i14$i) {
   while(1) {
    $6 = load4(7784);
    $7 = (($6) + 0)|0;
    store4(7784,$7);
    $tobool$i16$i = ($6|0)==(0);
    if ($tobool$i16$i) {
     $call$lcssa$i23$i = 0;
     break L11;
    }
    $8 = $6;
    FUNCTION_TABLE_v[$8 & 3]();
    $call$i18$i = (_malloc(4)|0);
    $cmp1$i19$i = ($call$i18$i|0)==(0|0);
    if (!($cmp1$i19$i)) {
     $call$lcssa$i23$i = $call$i18$i;
     break;
    }
   }
  } else {
   $call$lcssa$i23$i = $call1$i13$i;
  }
 } while(0);
 store4($call$lcssa$i23$i,44);
 $call1$i25$i = (_malloc(4)|0);
 $cmp12$i26$i = ($call1$i25$i|0)==(0|0);
 L16: do {
  if ($cmp12$i26$i) {
   while(1) {
    $9 = load4(7784);
    $10 = (($9) + 0)|0;
    store4(7784,$10);
    $tobool$i28$i = ($9|0)==(0);
    if ($tobool$i28$i) {
     $call$lcssa$i35$i = 0;
     break L16;
    }
    $11 = $9;
    FUNCTION_TABLE_v[$11 & 3]();
    $call$i30$i = (_malloc(4)|0);
    $cmp1$i31$i = ($call$i30$i|0)==(0|0);
    if (!($cmp1$i31$i)) {
     $call$lcssa$i35$i = $call$i30$i;
     break;
    }
   }
  } else {
   $call$lcssa$i35$i = $call1$i25$i;
  }
 } while(0);
 store4($call$lcssa$i35$i,44);
 __embind_register_class_property((1032|0),(2054|0),(1080|0),(2303|0),(1|0),($call$lcssa$i23$i|0),(1080|0),(2307|0),(1|0),($call$lcssa$i35$i|0));
 __embind_register_class((1104|0),(1112|0),(1128|0),(0|0),(2194|0),(5|0),(2197|0),(0|0),(2197|0),(0|0),(2057|0),(2199|0),(12|0));
 __embind_register_class_constructor((1104|0),1,(1636|0),(2194|0),(6|0),(2|0));
 $call1$i$i1 = (_malloc(4)|0);
 $cmp12$i$i2 = ($call1$i$i1|0)==(0|0);
 L21: do {
  if ($cmp12$i$i2) {
   while(1) {
    $12 = load4(7784);
    $13 = (($12) + 0)|0;
    store4(7784,$13);
    $tobool$i$i4 = ($12|0)==(0);
    if ($tobool$i$i4) {
     $call$lcssa$i$i11 = 0;
     break L21;
    }
    $14 = $12;
    FUNCTION_TABLE_v[$14 & 3]();
    $call$i$i6 = (_malloc(4)|0);
    $cmp1$i$i7 = ($call$i$i6|0)==(0|0);
    if (!($cmp1$i$i7)) {
     $call$lcssa$i$i11 = $call$i$i6;
     break;
    }
   }
  } else {
   $call$lcssa$i$i11 = $call1$i$i1;
  }
 } while(0);
 store4($call$lcssa$i$i11,0);
 $call1$i1$i12 = (_malloc(4)|0);
 $cmp12$i2$i13 = ($call1$i1$i12|0)==(0|0);
 L26: do {
  if ($cmp12$i2$i13) {
   while(1) {
    $15 = load4(7784);
    $16 = (($15) + 0)|0;
    store4(7784,$16);
    $tobool$i4$i16 = ($15|0)==(0);
    if ($tobool$i4$i16) {
     $call$lcssa$i11$i23 = 0;
     break L26;
    }
    $17 = $15;
    FUNCTION_TABLE_v[$17 & 3]();
    $call$i6$i18 = (_malloc(4)|0);
    $cmp1$i7$i19 = ($call$i6$i18|0)==(0|0);
    if (!($cmp1$i7$i19)) {
     $call$lcssa$i11$i23 = $call$i6$i18;
     break;
    }
   }
  } else {
   $call$lcssa$i11$i23 = $call1$i1$i12;
  }
 } while(0);
 store4($call$lcssa$i11$i23,0);
 __embind_register_class_property((1104|0),(2063|0),(1080|0),(2303|0),(2|0),($call$lcssa$i$i11|0),(1080|0),(2307|0),(2|0),($call$lcssa$i11$i23|0));
 $call1$i13$i24 = (_malloc(4)|0);
 $cmp12$i14$i25 = ($call1$i13$i24|0)==(0|0);
 L31: do {
  if ($cmp12$i14$i25) {
   while(1) {
    $18 = load4(7784);
    $19 = (($18) + 0)|0;
    store4(7784,$19);
    $tobool$i16$i28 = ($18|0)==(0);
    if ($tobool$i16$i28) {
     $call$lcssa$i23$i35 = 0;
     break L31;
    }
    $20 = $18;
    FUNCTION_TABLE_v[$20 & 3]();
    $call$i18$i30 = (_malloc(4)|0);
    $cmp1$i19$i31 = ($call$i18$i30|0)==(0|0);
    if (!($cmp1$i19$i31)) {
     $call$lcssa$i23$i35 = $call$i18$i30;
     break;
    }
   }
  } else {
   $call$lcssa$i23$i35 = $call1$i13$i24;
  }
 } while(0);
 store4($call$lcssa$i23$i35,12);
 $call1$i25$i36 = (_malloc(4)|0);
 $cmp12$i26$i37 = ($call1$i25$i36|0)==(0|0);
 L36: do {
  if ($cmp12$i26$i37) {
   while(1) {
    $21 = load4(7784);
    $22 = (($21) + 0)|0;
    store4(7784,$22);
    $tobool$i28$i40 = ($21|0)==(0);
    if ($tobool$i28$i40) {
     $call$lcssa$i35$i47 = 0;
     break L36;
    }
    $23 = $21;
    FUNCTION_TABLE_v[$23 & 3]();
    $call$i30$i42 = (_malloc(4)|0);
    $cmp1$i31$i43 = ($call$i30$i42|0)==(0|0);
    if (!($cmp1$i31$i43)) {
     $call$lcssa$i35$i47 = $call$i30$i42;
     break;
    }
   }
  } else {
   $call$lcssa$i35$i47 = $call1$i25$i36;
  }
 } while(0);
 store4($call$lcssa$i35$i47,12);
 __embind_register_class_property((1104|0),(2050|0),(1080|0),(2303|0),(2|0),($call$lcssa$i23$i35|0),(1080|0),(2307|0),(2|0),($call$lcssa$i35$i47|0));
 $call1$i37$i = (_malloc(4)|0);
 $cmp12$i38$i = ($call1$i37$i|0)==(0|0);
 L41: do {
  if ($cmp12$i38$i) {
   while(1) {
    $24 = load4(7784);
    $25 = (($24) + 0)|0;
    store4(7784,$25);
    $tobool$i40$i = ($24|0)==(0);
    if ($tobool$i40$i) {
     $call$lcssa$i47$i = 0;
     break L41;
    }
    $26 = $24;
    FUNCTION_TABLE_v[$26 & 3]();
    $call$i42$i = (_malloc(4)|0);
    $cmp1$i43$i = ($call$i42$i|0)==(0|0);
    if (!($cmp1$i43$i)) {
     $call$lcssa$i47$i = $call$i42$i;
     break;
    }
   }
  } else {
   $call$lcssa$i47$i = $call1$i37$i;
  }
 } while(0);
 store4($call$lcssa$i47$i,24);
 $call1$i49$i = (_malloc(4)|0);
 $cmp12$i50$i = ($call1$i49$i|0)==(0|0);
 L46: do {
  if ($cmp12$i50$i) {
   while(1) {
    $27 = load4(7784);
    $28 = (($27) + 0)|0;
    store4(7784,$28);
    $tobool$i52$i = ($27|0)==(0);
    if ($tobool$i52$i) {
     $call$lcssa$i59$i = 0;
     break L46;
    }
    $29 = $27;
    FUNCTION_TABLE_v[$29 & 3]();
    $call$i54$i = (_malloc(4)|0);
    $cmp1$i55$i = ($call$i54$i|0)==(0|0);
    if (!($cmp1$i55$i)) {
     $call$lcssa$i59$i = $call$i54$i;
     break;
    }
   }
  } else {
   $call$lcssa$i59$i = $call1$i49$i;
  }
 } while(0);
 store4($call$lcssa$i59$i,24);
 __embind_register_class_property((1104|0),(2067|0),(1080|0),(2303|0),(2|0),($call$lcssa$i47$i|0),(1080|0),(2307|0),(2|0),($call$lcssa$i59$i|0));
 $call1$i61$i = (_malloc(4)|0);
 $cmp12$i62$i = ($call1$i61$i|0)==(0|0);
 L51: do {
  if ($cmp12$i62$i) {
   while(1) {
    $30 = load4(7784);
    $31 = (($30) + 0)|0;
    store4(7784,$31);
    $tobool$i64$i = ($30|0)==(0);
    if ($tobool$i64$i) {
     $call$lcssa$i71$i = 0;
     break L51;
    }
    $32 = $30;
    FUNCTION_TABLE_v[$32 & 3]();
    $call$i66$i = (_malloc(4)|0);
    $cmp1$i67$i = ($call$i66$i|0)==(0|0);
    if (!($cmp1$i67$i)) {
     $call$lcssa$i71$i = $call$i66$i;
     break;
    }
   }
  } else {
   $call$lcssa$i71$i = $call1$i61$i;
  }
 } while(0);
 store4($call$lcssa$i71$i,36);
 $call1$i73$i = (_malloc(4)|0);
 $cmp12$i74$i = ($call1$i73$i|0)==(0|0);
 L56: do {
  if ($cmp12$i74$i) {
   while(1) {
    $33 = load4(7784);
    $34 = (($33) + 0)|0;
    store4(7784,$34);
    $tobool$i76$i = ($33|0)==(0);
    if ($tobool$i76$i) {
     $call$lcssa$i83$i = 0;
     break L56;
    }
    $35 = $33;
    FUNCTION_TABLE_v[$35 & 3]();
    $call$i78$i = (_malloc(4)|0);
    $cmp1$i79$i = ($call$i78$i|0)==(0|0);
    if (!($cmp1$i79$i)) {
     $call$lcssa$i83$i = $call$i78$i;
     break;
    }
   }
  } else {
   $call$lcssa$i83$i = $call1$i73$i;
  }
 } while(0);
 store4($call$lcssa$i83$i,36);
 __embind_register_class_property((1104|0),(2072|0),(1032|0),(2303|0),(3|0),($call$lcssa$i71$i|0),(1032|0),(2307|0),(3|0),($call$lcssa$i83$i|0));
 $call1$i85$i = (_malloc(4)|0);
 $cmp12$i86$i = ($call1$i85$i|0)==(0|0);
 L61: do {
  if ($cmp12$i86$i) {
   while(1) {
    $36 = load4(7784);
    $37 = (($36) + 0)|0;
    store4(7784,$37);
    $tobool$i88$i = ($36|0)==(0);
    if ($tobool$i88$i) {
     $call$lcssa$i95$i = 0;
     break L61;
    }
    $38 = $36;
    FUNCTION_TABLE_v[$38 & 3]();
    $call$i90$i = (_malloc(4)|0);
    $cmp1$i91$i = ($call$i90$i|0)==(0|0);
    if (!($cmp1$i91$i)) {
     $call$lcssa$i95$i = $call$i90$i;
     break;
    }
   }
  } else {
   $call$lcssa$i95$i = $call1$i85$i;
  }
 } while(0);
 store4($call$lcssa$i95$i,108);
 $call1$i97$i = (_malloc(4)|0);
 $cmp12$i98$i = ($call1$i97$i|0)==(0|0);
 L66: do {
  if ($cmp12$i98$i) {
   while(1) {
    $39 = load4(7784);
    $40 = (($39) + 0)|0;
    store4(7784,$40);
    $tobool$i100$i = ($39|0)==(0);
    if ($tobool$i100$i) {
     $call$lcssa$i107$i = 0;
     break L66;
    }
    $41 = $39;
    FUNCTION_TABLE_v[$41 & 3]();
    $call$i102$i = (_malloc(4)|0);
    $cmp1$i103$i = ($call$i102$i|0)==(0|0);
    if (!($cmp1$i103$i)) {
     $call$lcssa$i107$i = $call$i102$i;
     break;
    }
   }
  } else {
   $call$lcssa$i107$i = $call1$i97$i;
  }
 } while(0);
 store4($call$lcssa$i107$i,108);
 __embind_register_class_property((1104|0),(2077|0),(1176|0),(2303|0),(4|0),($call$lcssa$i95$i|0),(1176|0),(2307|0),(4|0),($call$lcssa$i107$i|0));
 __embind_register_class((1176|0),(1200|0),(1216|0),(0|0),(2194|0),(7|0),(2197|0),(0|0),(2197|0),(0|0),(2086|0),(2199|0),(13|0));
 __embind_register_class_constructor((1176|0),1,(1640|0),(2194|0),(8|0),(3|0));
 $call1$i$i$i = (_malloc(8)|0);
 $cmp12$i$i$i = ($call1$i$i$i|0)==(0|0);
 L71: do {
  if ($cmp12$i$i$i) {
   while(1) {
    $42 = load4(7784);
    $43 = (($42) + 0)|0;
    store4(7784,$43);
    $tobool$i$i$i = ($42|0)==(0);
    if ($tobool$i$i$i) {
     $call$lcssa$i$i$i = 0;
     break L71;
    }
    $44 = $42;
    FUNCTION_TABLE_v[$44 & 3]();
    $call$i$i$i = (_malloc(8)|0);
    $cmp1$i$i$i = ($call$i$i$i|0)==(0|0);
    if (!($cmp1$i$i$i)) {
     $call$lcssa$i$i$i = $call$i$i$i;
     break;
    }
   }
  } else {
   $call$lcssa$i$i$i = $call1$i$i$i;
  }
 } while(0);
 store4($call$lcssa$i$i$i,(1));
 $$repack4$i$i$i$i = ((($call$lcssa$i$i$i)) + 4|0);
 store4($$repack4$i$i$i$i,0);
 __embind_register_class_function((1176|0),(2467|0),3,(1644|0),(2307|0),(5|0),($call$lcssa$i$i$i|0),0);
 $call1$i1$i$i = (_malloc(8)|0);
 $cmp12$i2$i$i = ($call1$i1$i$i|0)==(0|0);
 L76: do {
  if ($cmp12$i2$i$i) {
   while(1) {
    $45 = load4(7784);
    $46 = (($45) + 0)|0;
    store4(7784,$46);
    $tobool$i4$i$i = ($45|0)==(0);
    if ($tobool$i4$i$i) {
     $call$lcssa$i11$i$i = 0;
     break L76;
    }
    $47 = $45;
    FUNCTION_TABLE_v[$47 & 3]();
    $call$i6$i$i = (_malloc(8)|0);
    $cmp1$i7$i$i = ($call$i6$i$i|0)==(0|0);
    if (!($cmp1$i7$i$i)) {
     $call$lcssa$i11$i$i = $call$i6$i$i;
     break;
    }
   }
  } else {
   $call$lcssa$i11$i$i = $call1$i1$i$i;
  }
 } while(0);
 store4($call$lcssa$i11$i$i,(6));
 $$repack4$i$i29$i$i = ((($call$lcssa$i11$i$i)) + 4|0);
 store4($$repack4$i$i29$i$i,0);
 __embind_register_class_function((1176|0),(2477|0),4,(1656|0),(2586|0),(4|0),($call$lcssa$i11$i$i|0),0);
 $call1$i13$i$i = (_malloc(8)|0);
 $cmp12$i14$i$i = ($call1$i13$i$i|0)==(0|0);
 L81: do {
  if ($cmp12$i14$i$i) {
   while(1) {
    $48 = load4(7784);
    $49 = (($48) + 0)|0;
    store4(7784,$49);
    $tobool$i16$i$i = ($48|0)==(0);
    if ($tobool$i16$i$i) {
     $call$lcssa$i23$i$i = 0;
     break L81;
    }
    $50 = $48;
    FUNCTION_TABLE_v[$50 & 3]();
    $call$i18$i$i = (_malloc(8)|0);
    $cmp1$i19$i$i = ($call$i18$i$i|0)==(0|0);
    if (!($cmp1$i19$i$i)) {
     $call$lcssa$i23$i$i = $call$i18$i$i;
     break;
    }
   }
  } else {
   $call$lcssa$i23$i$i = $call1$i13$i$i;
  }
 } while(0);
 store4($call$lcssa$i23$i$i,(9));
 $$repack4$i$i37$i$i = ((($call$lcssa$i23$i$i)) + 4|0);
 store4($$repack4$i$i37$i$i,0);
 __embind_register_class_function((1176|0),(2484|0),2,(1672|0),(2303|0),(5|0),($call$lcssa$i23$i$i|0),0);
 $call1$i25$i$i = (_malloc(4)|0);
 $cmp12$i26$i$i = ($call1$i25$i$i|0)==(0|0);
 L86: do {
  if ($cmp12$i26$i$i) {
   while(1) {
    $51 = load4(7784);
    $52 = (($51) + 0)|0;
    store4(7784,$52);
    $tobool$i28$i$i = ($51|0)==(0);
    if ($tobool$i28$i$i) {
     $call$lcssa$i35$i$i = 0;
     break L86;
    }
    $53 = $51;
    FUNCTION_TABLE_v[$53 & 3]();
    $call$i30$i$i = (_malloc(4)|0);
    $cmp1$i31$i$i = ($call$i30$i$i|0)==(0|0);
    if (!($cmp1$i31$i$i)) {
     $call$lcssa$i35$i$i = $call$i30$i$i;
     break;
    }
   }
  } else {
   $call$lcssa$i35$i$i = $call1$i25$i$i;
  }
 } while(0);
 store4($call$lcssa$i35$i$i,(6));
 __embind_register_class_function((1176|0),(2489|0),3,(1680|0),(2592|0),(6|0),($call$lcssa$i35$i$i|0),0);
 $call1$i37$i$i = (_malloc(4)|0);
 $cmp12$i38$i$i = ($call1$i37$i$i|0)==(0|0);
 if (!($cmp12$i38$i$i)) {
  $call$lcssa$i47$i$i = $call1$i37$i$i;
  store4($call$lcssa$i47$i$i,(7));
  __embind_register_class_function((1176|0),(2493|0),4,(1692|0),(2597|0),(1|0),($call$lcssa$i47$i$i|0),0);
  __embind_register_function((7107|0),5,(1708|0),(2603|0),(1|0),(4|0));
  return;
 }
 while(1) {
  $54 = load4(7784);
  $55 = (($54) + 0)|0;
  store4(7784,$55);
  $tobool$i40$i$i = ($54|0)==(0);
  if ($tobool$i40$i$i) {
   $call$lcssa$i47$i$i = 0;
   label = 58;
   break;
  }
  $56 = $54;
  FUNCTION_TABLE_v[$56 & 3]();
  $call$i42$i$i = (_malloc(4)|0);
  $cmp1$i43$i$i = ($call$i42$i$i|0)==(0|0);
  if (!($cmp1$i43$i$i)) {
   $call$lcssa$i47$i$i = $call$i42$i$i;
   label = 58;
   break;
  }
 }
 if ((label|0) == 58) {
  store4($call$lcssa$i47$i$i,(7));
  __embind_register_class_function((1176|0),(2493|0),4,(1692|0),(2597|0),(1|0),($call$lcssa$i47$i$i|0),0);
  __embind_register_function((7107|0),5,(1708|0),(2603|0),(1|0),(4|0));
  return;
 }
}
function __GLOBAL__sub_I_bind_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_void((1504|0),(2610|0));
 __embind_register_bool((1520|0),(2615|0),1,1,0);
 __embind_register_integer((1528|0),(2620|0),1,-128,127);
 __embind_register_integer((1544|0),(7177|0),1,-128,127);
 __embind_register_integer((1536|0),(7189|0),1,0,255);
 __embind_register_integer((1552|0),(7203|0),2,-32768,32767);
 __embind_register_integer((1560|0),(7209|0),2,0,65535);
 __embind_register_integer((1568|0),(7226|0),4,-2147483648,2147483647);
 __embind_register_integer((1576|0),(7230|0),4,0,-1);
 __embind_register_integer((1584|0),(2625|0),4,-2147483648,2147483647);
 __embind_register_integer((1592|0),(7243|0),4,0,-1);
 __embind_register_float((1600|0),(7257|0),4);
 __embind_register_float((1608|0),(7263|0),8);
 __embind_register_std_string((1080|0),(7165|0));
 __embind_register_std_string((1232|0),(2630|0));
 __embind_register_std_wstring((1256|0),4,(2663|0));
 __embind_register_emval((1024|0),(2676|0));
 __embind_register_memory_view((1280|0),0,(2692|0));
 __embind_register_memory_view((1288|0),0,(2722|0));
 __embind_register_memory_view((1296|0),1,(2759|0));
 __embind_register_memory_view((1304|0),2,(2798|0));
 __embind_register_memory_view((1312|0),3,(2829|0));
 __embind_register_memory_view((1320|0),4,(2869|0));
 __embind_register_memory_view((1328|0),5,(2898|0));
 __embind_register_memory_view((1336|0),4,(2936|0));
 __embind_register_memory_view((1344|0),5,(2966|0));
 __embind_register_memory_view((1288|0),0,(3005|0));
 __embind_register_memory_view((1296|0),1,(3037|0));
 __embind_register_memory_view((1304|0),2,(3070|0));
 __embind_register_memory_view((1312|0),3,(3103|0));
 __embind_register_memory_view((1320|0),4,(3137|0));
 __embind_register_memory_view((1328|0),5,(3170|0));
 __embind_register_memory_view((1352|0),6,(3204|0));
 __embind_register_memory_view((1360|0),7,(3235|0));
 __embind_register_memory_view((1368|0),7,(3267|0));
 return;
}
function ___getTypeName($ti) {
 $ti = $ti|0;
 var $$pn$i$i = 0, $$pn24$i$i = 0, $$pre$i$i = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $__type_name$i = 0, $add$i = 0, $and$i$i = 0, $and3$i$i = 0, $call1$i = 0, $incdec$ptr$i$i = 0, $incdec$ptr1323$i$i = 0, $incdec$ptr7$i$i = 0, $lnot$i$i = 0, $neg$i$i = 0;
 var $rem$i$i = 0, $rem13$i$i = 0, $retval$0$i = 0, $retval$0$i$i = 0, $s$addr$0$lcssa$i$i = 0, $s$addr$015$i$i = 0, $s$addr$1$lcssa$i$i = 0, $sub$i$i = 0, $sub$ptr$lhs$cast15$i$i = 0, $tobool$i = 0, $tobool$i$i = 0, $tobool1$i$i = 0, $tobool10$i$i = 0, $tobool1021$i$i = 0, $tobool14$i$i = 0, $w$0$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__type_name$i = ((($ti)) + 4|0);
 $0 = load4($__type_name$i);
 $1 = $0;
 $rem13$i$i = $1 & 3;
 $tobool14$i$i = ($rem13$i$i|0)==(0);
 L1: do {
  if ($tobool14$i$i) {
   $s$addr$0$lcssa$i$i = $0;
   label = 4;
  } else {
   $6 = $1;$s$addr$015$i$i = $0;
   while(1) {
    $2 = load1($s$addr$015$i$i);
    $tobool1$i$i = ($2<<24>>24)==(0);
    if ($tobool1$i$i) {
     $$pn$i$i = $6;
     break L1;
    }
    $incdec$ptr$i$i = ((($s$addr$015$i$i)) + 1|0);
    $3 = $incdec$ptr$i$i;
    $rem$i$i = $3 & 3;
    $tobool$i$i = ($rem$i$i|0)==(0);
    if ($tobool$i$i) {
     $s$addr$0$lcssa$i$i = $incdec$ptr$i$i;
     label = 4;
     break;
    } else {
     $6 = $3;$s$addr$015$i$i = $incdec$ptr$i$i;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $w$0$i$i = $s$addr$0$lcssa$i$i;
  while(1) {
   $4 = load4($w$0$i$i);
   $sub$i$i = (($4) + -16843009)|0;
   $neg$i$i = $4 & -2139062144;
   $and$i$i = $neg$i$i ^ -2139062144;
   $and3$i$i = $and$i$i & $sub$i$i;
   $lnot$i$i = ($and3$i$i|0)==(0);
   $incdec$ptr7$i$i = ((($w$0$i$i)) + 4|0);
   if ($lnot$i$i) {
    $w$0$i$i = $incdec$ptr7$i$i;
   } else {
    break;
   }
  }
  $5 = $4&255;
  $tobool1021$i$i = ($5<<24>>24)==(0);
  if ($tobool1021$i$i) {
   $s$addr$1$lcssa$i$i = $w$0$i$i;
  } else {
   $$pn24$i$i = $w$0$i$i;
   while(1) {
    $incdec$ptr1323$i$i = ((($$pn24$i$i)) + 1|0);
    $$pre$i$i = load1($incdec$ptr1323$i$i);
    $tobool10$i$i = ($$pre$i$i<<24>>24)==(0);
    if ($tobool10$i$i) {
     $s$addr$1$lcssa$i$i = $incdec$ptr1323$i$i;
     break;
    } else {
     $$pn24$i$i = $incdec$ptr1323$i$i;
    }
   }
  }
  $sub$ptr$lhs$cast15$i$i = $s$addr$1$lcssa$i$i;
  $$pn$i$i = $sub$ptr$lhs$cast15$i$i;
 }
 $retval$0$i$i = (($$pn$i$i) - ($1))|0;
 $add$i = (($retval$0$i$i) + 1)|0;
 $call1$i = (_malloc($add$i)|0);
 $tobool$i = ($call1$i|0)==(0|0);
 if ($tobool$i) {
  $retval$0$i = 0;
  return ($retval$0$i|0);
 }
 _memcpy(($call1$i|0),($0|0),($add$i|0))|0;
 $retval$0$i = $call1$i;
 return ($retval$0$i|0);
}
function ___stdio_close($f) {
 $f = $f|0;
 var $0 = 0, $call = 0, $cmp$i = 0, $fd = 0, $retval$0$i = 0, $sub$i = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 store4($vararg_buffer,$0);
 $call = (___syscall6(6,($vararg_buffer|0))|0);
 $cmp$i = ($call>>>0)>(4294963200);
 if ($cmp$i) {
  $sub$i = (0 - ($call))|0;
  store4(7276,$sub$i);
  $retval$0$i = -1;
 } else {
  $retval$0$i = $call;
 }
 STACKTOP = sp;return ($retval$0$i|0);
}
function ___stdio_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr41 = 0, $add$ptr46 = 0, $buf31 = 0, $buf_size = 0;
 var $call9 = 0, $cmp = 0, $cmp$i1 = 0, $cmp17 = 0, $cmp22 = 0, $cmp29 = 0, $cmp38 = 0, $cnt$0 = 0, $cnt$1 = 0, $dec = 0, $fd8 = 0, $incdec$ptr = 0, $iov$0 = 0, $iov$1 = 0, $iov_base2 = 0, $iov_len = 0, $iov_len24 = 0, $iov_len28 = 0, $iov_len3 = 0, $iov_len50 = 0;
 var $iov_len50$phi$trans$insert = 0, $iovcnt$0 = 0, $iovcnt$1 = 0, $iovs = 0, $or = 0, $rem$0 = 0, $retval$0 = 0, $sub = 0, $sub$i2 = 0, $sub$ptr$sub = 0, $sub26 = 0, $sub36 = 0, $sub51 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $wbase = 0, $wend = 0, $wend19 = 0, $wpos = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $iovs = sp + 16|0;
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
 $fd8 = ((($f)) + 60|0);
 $buf31 = ((($f)) + 44|0);
 $iov$0 = $iovs;$iovcnt$0 = 2;$rem$0 = $add;
 while(1) {
  $2 = load4($fd8);
  store4($vararg_buffer,$2);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,$iov$0);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,$iovcnt$0);
  $call9 = (___syscall146(146,($vararg_buffer|0))|0);
  $cmp$i1 = ($call9>>>0)>(4294963200);
  if ($cmp$i1) {
   $sub$i2 = (0 - ($call9))|0;
   store4(7276,$sub$i2);
   $cnt$0 = -1;
  } else {
   $cnt$0 = $call9;
  }
  $cmp = ($rem$0|0)==($cnt$0|0);
  if ($cmp) {
   label = 5;
   break;
  }
  $cmp17 = ($cnt$0|0)<(0);
  if ($cmp17) {
   label = 7;
   break;
  }
  $sub26 = (($rem$0) - ($cnt$0))|0;
  $iov_len28 = ((($iov$0)) + 4|0);
  $8 = load4($iov_len28);
  $cmp29 = ($cnt$0>>>0)>($8>>>0);
  if ($cmp29) {
   $9 = load4($buf31);
   store4($wbase,$9);
   store4($wpos,$9);
   $sub36 = (($cnt$0) - ($8))|0;
   $incdec$ptr = ((($iov$0)) + 8|0);
   $dec = (($iovcnt$0) + -1)|0;
   $iov_len50$phi$trans$insert = ((($iov$0)) + 12|0);
   $$pre = load4($iov_len50$phi$trans$insert);
   $12 = $$pre;$cnt$1 = $sub36;$iov$1 = $incdec$ptr;$iovcnt$1 = $dec;
  } else {
   $cmp38 = ($iovcnt$0|0)==(2);
   if ($cmp38) {
    $10 = load4($wbase);
    $add$ptr41 = (($10) + ($cnt$0)|0);
    store4($wbase,$add$ptr41);
    $12 = $8;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = 2;
   } else {
    $12 = $8;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = $iovcnt$0;
   }
  }
  $11 = load4($iov$1);
  $add$ptr46 = (($11) + ($cnt$1)|0);
  store4($iov$1,$add$ptr46);
  $iov_len50 = ((($iov$1)) + 4|0);
  $sub51 = (($12) - ($cnt$1))|0;
  store4($iov_len50,$sub51);
  $iov$0 = $iov$1;$iovcnt$0 = $iovcnt$1;$rem$0 = $sub26;
 }
 if ((label|0) == 5) {
  $3 = load4($buf31);
  $buf_size = ((($f)) + 48|0);
  $4 = load4($buf_size);
  $add$ptr = (($3) + ($4)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  $5 = $3;
  store4($wbase,$5);
  store4($wpos,$5);
  $retval$0 = $len;
 }
 else if ((label|0) == 7) {
  $wend19 = ((($f)) + 16|0);
  store4($wend19,0);
  store4($wbase,0);
  store4($wpos,0);
  $6 = load4($f);
  $or = $6 | 32;
  store4($f,$or);
  $cmp22 = ($iovcnt$0|0)==(2);
  if ($cmp22) {
   $retval$0 = 0;
  } else {
   $iov_len24 = ((($iov$0)) + 4|0);
   $7 = load4($iov_len24);
   $sub = (($len) - ($7))|0;
   $retval$0 = $sub;
  }
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___stdio_seek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $$pre = 0, $0 = 0, $1 = 0, $call = 0, $cmp = 0, $cmp$i = 0, $fd = 0, $ret = 0, $sub$i = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $ret = sp + 20|0;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 store4($vararg_buffer,$0);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$off);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$ret);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$whence);
 $call = (___syscall140(140,($vararg_buffer|0))|0);
 $cmp$i = ($call>>>0)>(4294963200);
 if ($cmp$i) {
  $sub$i = (0 - ($call))|0;
  store4(7276,$sub$i);
  label = 5;
 } else {
  $cmp = ($call|0)<(0);
  if ($cmp) {
   label = 5;
  } else {
   $$pre = load4($ret);
   $1 = $$pre;
  }
 }
 if ((label|0) == 5) {
  store4($ret,-1);
  $1 = -1;
 }
 STACKTOP = sp;return ($1|0);
}
function _printf_core($f,$fmt,$ap,$nl_arg,$nl_type) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 $nl_arg = $nl_arg|0;
 $nl_type = $nl_type|0;
 var $$ = 0, $$$i = 0, $$272 = 0, $$396$i = 0.0, $$404$i = 0.0, $$add$ptr258 = 0, $$l10n$0 = 0, $$p$i = 0, $$p$inc468$i = 0, $$pr = 0, $$pr$i = 0, $$pr477$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i20 = 0, $$pre334 = 0, $$pre335 = 0, $$pre336 = 0, $$pre337 = i64(), $$pre338 = i64();
 var $$pre46 = 0, $$pre558$i = 0, $$pre560$i = 0, $$pre562$i = 0, $$sub514$i = 0, $$sub562$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0;
 var $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0;
 var $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $14 = 0, $15 = i64(), $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = i64(), $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = i64(), $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = i64(), $48 = 0, $49 = i64(), $5 = 0, $50 = i64(), $51 = i64(), $52 = i64(), $53 = i64(), $54 = 0, $55 = i64(), $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = i64(), $66 = 0, $67 = 0, $68 = 0, $69 = 0.0, $7 = 0, $70 = i64(), $71 = i64(), $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var $a$0 = 0, $a$1 = 0, $a$1$lcssa$i = 0, $a$1549$i = 0, $a$2 = 0, $a$2$ph$i = 0, $a$3$lcssa$i = 0, $a$3539$i = 0, $a$5$lcssa$i = 0, $a$5521$i = 0, $a$6$i = 0, $a$8$i = 0, $a$9$ph$i = 0, $add = 0, $add$i = 0, $add$i203 = 0, $add$i223 = i64(), $add$i240 = 0, $add$ptr = 0, $add$ptr139 = 0;
 var $add$ptr206 = 0, $add$ptr213$i = 0, $add$ptr258 = 0, $add$ptr311$i = 0, $add$ptr311$z$4$i = 0, $add$ptr341 = 0, $add$ptr354$i = 0, $add$ptr358$i = 0, $add$ptr360 = 0, $add$ptr373$i = 0, $add$ptr43 = 0, $add$ptr43$arrayidx31 = 0, $add$ptr442$i = 0, $add$ptr442$z$3$i = 0, $add$ptr474 = 0, $add$ptr65$i = 0, $add$ptr671$i = 0, $add$ptr742$i = 0, $add$ptr88 = 0, $add113$i = 0;
 var $add150$i = 0, $add154$i = 0, $add163$i = 0, $add165$i = 0, $add240$i = i64(), $add270 = 0, $add273$i = 0, $add275$i = 0, $add284$i = 0, $add313$i = 0, $add323 = 0, $add355$i = 0, $add396 = 0, $add410$i = 0.0, $add413 = 0, $add414$i = 0, $add442 = 0, $add477$neg$i = 0, $add561$i = 0, $add608$i = 0;
 var $add612$i = 0, $add620$i = 0, $add653$i = 0, $add67$i = 0, $add737$i = 0, $add810$i = 0, $add87$i = 0.0, $add90$i = 0.0, $and = 0, $and$i = 0, $and$i$i = 0, $and$i14 = 0, $and$i216 = 0, $and$i222 = i64(), $and$i231 = 0, $and$i239 = 0, $and$i245 = 0, $and$i406$i = 0, $and$i412$i = 0, $and$i418$i = 0;
 var $and$i424$i = 0, $and$i430$i = 0, $and$i436$i = 0, $and$i442$i = 0, $and$i448$i = 0, $and$i454$i = 0, $and$i460$i = 0, $and$i466$i = 0, $and$i472$i = 0, $and12$i = 0, $and134$i = 0, $and15$i = 0, $and16$i = 0, $and211 = 0, $and215 = 0, $and217 = 0, $and220 = 0, $and250 = 0, $and255 = 0, $and264 = 0;
 var $and27$i = i64(), $and282$i = 0, $and290 = 0, $and295 = 0, $and310 = 0, $and310$fl$4 = 0, $and36$i = 0, $and379$i = 0, $and39$i = 0, $and483$i = 0, $and610$pre$phi$iZ2D = 0, $and62$i = 0, $arg = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $argpos$0 = 0, $arraydecay208$add$ptr213$i = 0, $arrayidx$i = 0;
 var $arrayidx$i1 = 0, $arrayidx$i236 = 0, $arrayidx114 = 0, $arrayidx117$i = 0, $arrayidx119 = 0, $arrayidx124 = 0, $arrayidx132 = 0, $arrayidx16 = 0, $arrayidx174 = 0, $arrayidx193 = 0, $arrayidx251$i = 0, $arrayidx31 = 0, $arrayidx35 = 0, $arrayidx371 = 0, $arrayidx453$i = 0, $arrayidx470 = 0, $arrayidx482$phi$trans$insert = 0, $arrayidx489$i = 0, $arrayidx68 = 0, $arrayidx73 = 0;
 var $arrayidx81 = 0, $big$i = 0, $buf = 0, $buf$i = 0, $call$i11 = 0, $call$i13 = 0, $call$i15 = 0.0, $call102$i = 0, $call305 = 0, $call631$i = 0, $call672$i = 0, $call719$i = 0, $call757$i = 0, $carry$0544$i = 0, $carry262$0535$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i10 = 0, $cmp1 = 0, $cmp103$i = 0;
 var $cmp105 = 0, $cmp11$i = 0, $cmp111 = 0, $cmp1132$i = 0, $cmp116 = 0, $cmp126 = 0, $cmp127$i = 0, $cmp13 = 0, $cmp147$i = 0, $cmp166 = 0, $cmp177 = 0, $cmp18 = 0, $cmp182 = 0, $cmp185 = 0, $cmp188$i = 0, $cmp196$i = 0, $cmp205$i = 0, $cmp212 = 0, $cmp225$i = 0, $cmp225547$i = 0;
 var $cmp228$i = 0, $cmp235$i = 0, $cmp235543$i = 0, $cmp241 = 0, $cmp249$i = 0, $cmp259$i = 0, $cmp259537$i = 0, $cmp265$i = 0, $cmp271 = 0, $cmp277$i = 0, $cmp277533$i = 0, $cmp28$i = 0, $cmp28$i24 = 0, $cmp283 = 0, $cmp299$i = 0, $cmp307 = 0, $cmp308$i = 0, $cmp315$i = 0, $cmp324 = 0, $cmp324$i = 0;
 var $cmp324529$i = 0, $cmp333$i = 0, $cmp338$i = 0, $cmp350$i = 0, $cmp363525$i = 0, $cmp37 = 0, $cmp374$i = 0, $cmp378 = 0, $cmp378308 = 0, $cmp38$i = 0, $cmp385$i = 0, $cmp386 = 0, $cmp390$i = 0, $cmp391 = 0, $cmp398 = 0, $cmp403$i = 0, $cmp405 = 0, $cmp405318 = 0, $cmp411$i = 0, $cmp414 = 0;
 var $cmp416$i = 0, $cmp416519$i = 0, $cmp420$i = 0, $cmp422 = 0, $cmp433$i = 0, $cmp433515$i = 0, $cmp435 = 0, $cmp443 = 0, $cmp443$i = 0, $cmp450$i = 0, $cmp450$lcssa$i = 0, $cmp467 = 0, $cmp470$i = 0, $cmp473$i = 0, $cmp479 = 0, $cmp48$i = 0, $cmp495$i = 0, $cmp495511$i = 0, $cmp50 = 0, $cmp50302 = 0;
 var $cmp505$i = 0, $cmp515$i = 0, $cmp528$i = 0, $cmp563$i = 0, $cmp577$i = 0, $cmp59$i = 0, $cmp614$i = 0, $cmp617$i = 0, $cmp623$i = 0, $cmp636$i = 0, $cmp636506$i = 0, $cmp65 = 0, $cmp660$i = 0, $cmp665$i = 0, $cmp673$i = 0, $cmp678$i = 0, $cmp678491$i = 0, $cmp686$i = 0, $cmp707$i = 0, $cmp707486$i = 0;
 var $cmp710$i = 0, $cmp710487$i = 0, $cmp722$i = 0, $cmp722483$i = 0, $cmp727$i = 0, $cmp745$i = 0, $cmp748$i = 0, $cmp748499$i = 0, $cmp75 = 0, $cmp760$i = 0, $cmp765$i = 0, $cmp770$i = 0, $cmp770495$i = 0, $cmp777$i = 0, $cmp790$i = 0, $cmp8$i = 0, $cmp818$i = 0, $cmp82$i = 0, $cmp94$i = 0, $cmp97 = 0;
 var $cnt$0 = 0, $cnt$1 = 0, $cond$i = 0, $cond$i25 = 0, $cond100$i = 0, $cond233$i = 0, $cond246 = 0, $cond271$i = 0, $cond304$i = 0, $cond355 = 0, $cond427 = 0, $cond43$i = 0, $cond53$i = 0, $cond629$i = 0, $cond732$i = 0, $cond800$i = 0, $conv$i = 0, $conv$i2 = 0, $conv$i205 = 0, $conv$i224 = 0;
 var $conv1$i = 0, $conv101$i = i64(), $conv111$i = 0, $conv114$i = 0, $conv116$i = 0, $conv118393$i = 0, $conv120 = 0, $conv121$i = 0, $conv123$i = 0.0, $conv134 = 0, $conv138 = 0, $conv164 = 0, $conv175 = 0, $conv208 = 0, $conv216$i = 0, $conv218$i = 0.0, $conv227 = i64(), $conv230 = 0, $conv233 = 0, $conv238 = i64();
 var $conv238$i = i64(), $conv239$i = i64(), $conv241$i = 0, $conv242$i = 0, $conv32 = 0, $conv340 = 0, $conv369 = 0, $conv4$i = 0, $conv4$i197 = 0, $conv4$i211 = 0, $conv48 = 0, $conv48300 = 0, $conv58 = 0, $conv630$i = i64(), $conv644$i = 0, $conv646$i = 0, $conv669$i = i64(), $conv69 = 0, $conv716$i = i64(), $conv754$i = i64();
 var $conv83 = 0, $conv87 = 0, $d$0$i = 0, $d$0542$i = 0, $d$0545$i = 0, $d$1534$i = 0, $d$2$lcssa$i = 0, $d$2520$i = 0, $d$4$i = 0, $d$5494$i = 0, $d$6488$i = 0, $d$7500$i = 0, $dec$i = 0, $dec$i13 = 0, $dec$i8 = 0, $dec34$i = 0, $dec476$i = 0, $dec481$i = 0, $dec78$i = 0, $div$i = i64();
 var $div274$i = 0, $div356$i = 0, $div378$i = 0, $div384$i = 0, $e$0531$i = 0, $e$1$i = 0, $e$2517$i = 0, $e$4$i = 0, $e$5$ph$i = 0, $e2$i = 0, $ebuf0$i = 0, $estr$0$i = 0, $estr$1$lcssa$i = 0, $estr$1507$i = 0, $estr$2$i = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded12 = 0;
 var $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded16 = 0, $expanded4 = 0, $expanded5 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $expanded9 = 0, $fl$0275 = 0, $fl$0304 = 0, $fl$1 = 0, $fl$1$and220 = 0, $fl$3 = 0, $fl$4 = 0, $fl$6 = 0, $i$0$lcssa = 0, $i$0$lcssa343 = 0, $i$012$i = 0;
 var $i$0310 = 0, $i$0530$i = 0, $i$07$i = 0, $i$07$i201 = 0, $i$1$lcssa$i = 0, $i$111$i = 0, $i$1319 = 0, $i$1526$i = 0, $i$2292 = 0, $i$2516$i = 0, $i$3512$i = 0, $i137 = 0, $i86 = 0, $idxprom$i = 0, $inc = 0, $inc$i = 0, $inc$i4 = 0, $inc425$i = 0, $inc438$i = 0, $inc468$i = 0;
 var $inc48978 = 0, $inc48978$in = 0, $inc500$i = 0, $incdec$ptr = 0, $incdec$ptr$i = 0, $incdec$ptr$i12 = 0, $incdec$ptr$i204 = 0, $incdec$ptr$i212 = 0, $incdec$ptr$i225 = 0, $incdec$ptr$i7 = 0, $incdec$ptr106$i = 0, $incdec$ptr112$i = 0, $incdec$ptr115$i = 0, $incdec$ptr122$i = 0, $incdec$ptr137$i = 0, $incdec$ptr170 = 0, $incdec$ptr21$i = 0, $incdec$ptr217$i = 0, $incdec$ptr23 = 0, $incdec$ptr246$i = 0;
 var $incdec$ptr288$i = 0, $incdec$ptr292$a$3$i = 0, $incdec$ptr292$a$3567$i = 0, $incdec$ptr292$a$3569$i = 0, $incdec$ptr292$i = 0, $incdec$ptr292566$i = 0, $incdec$ptr296$i = 0, $incdec$ptr33$i = 0, $incdec$ptr384 = 0, $incdec$ptr411 = 0, $incdec$ptr419$i = 0, $incdec$ptr423$i = 0, $incdec$ptr62 = 0, $incdec$ptr639$i = 0, $incdec$ptr645$i = 0, $incdec$ptr647$i = 0, $incdec$ptr681$i = 0, $incdec$ptr689$i = 0, $incdec$ptr698$i = 0, $incdec$ptr725$i = 0;
 var $incdec$ptr734$i = 0, $incdec$ptr773$i = 0, $incdec$ptr776$i = 0, $incdec$ptr808$i = 0, $isdigit = 0, $isdigit$i = 0, $isdigit$i207 = 0, $isdigit188 = 0, $isdigit190 = 0, $isdigit6$i = 0, $isdigit6$i199 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$i = 0, $isdigittmp$i206 = 0, $isdigittmp187 = 0, $isdigittmp189 = 0, $isdigittmp5$i = 0, $isdigittmp5$i198 = 0, $isdigittmp8$i = 0;
 var $isdigittmp8$i200 = 0, $j$0$i = 0, $j$0524$i = 0, $j$0527$i = 0, $j$1513$i = 0, $j$2$i = 0, $l$0 = 0, $l$0$i = 0, $l$1$i = 0, $l$1309 = 0, $l$2 = 0, $l10n$0 = 0, $l10n$0$phi = 0, $l10n$1 = 0, $l10n$2 = 0, $l10n$3 = 0, $land$ext$neg$i = 0, $lnot$ext = 0, $lnot$i = 0, $lnot$i23 = 0;
 var $lnot455$i = 0, $lnot484 = 0, $lor$ext$i = 0, $mb = 0, $mul$i = 0, $mul$i202 = 0, $mul$i241 = 0.0, $mul125$i = 0.0, $mul202$i = 0.0, $mul220$i = 0.0, $mul286$i = 0, $mul322$i = 0, $mul328$i = 0, $mul335$i = 0, $mul349$i = 0, $mul367$i = 0, $mul406$i = 0.0, $mul407$i = 0.0, $mul431$i = 0, $mul437$i = 0;
 var $mul499$i = 0, $mul513$i = 0, $mul80$i = 0.0, $n$addr$0$lcssa$i = 0, $n$addr$043$i = 0, $n$addr$1$lcssa$i = 0, $n$addr$133$i = 0, $n$addr$227$i = 0, $n$addr$3$i = 0, $neg$i = 0, $notlhs$i = 0, $notrhs$i = 0, $or = 0, $or$cond = 0, $or$cond$i = 0, $or$cond$i16 = 0, $or$cond1$not$i = 0, $or$cond192 = 0, $or$cond193 = 0, $or$cond195 = 0;
 var $or$cond2$i = 0, $or$cond321 = 0, $or$cond395$i = 0, $or$cond397$i = 0, $or$cond401$i = 0, $or$cond42$i = 0, $or$i = 0, $or$i242 = 0, $or100 = 0, $or100$fl$0 = 0, $or120$i = 0, $or247 = 0, $or504$i = 0, $or613$i = 0, $p$0 = 0, $p$0$add270 = 0, $p$1 = 0, $p$2 = 0, $p$2$add323 = 0, $p$3 = 0;
 var $p$4340 = 0, $p$5 = 0, $p$addr$2$$sub514398$i = 0, $p$addr$2$$sub562399$i = 0, $p$addr$2$i = 0, $p$addr$3$i = 0, $p$addr$4$lcssa$i = 0, $p$addr$4489$i = 0, $p$addr$5$lcssa$i = 0, $p$addr$5501$i = 0, $pl$0 = 0, $pl$0$i = 0, $pl$1 = 0, $pl$1$i = 0, $pl$2 = 0, $prefix$0 = 0, $prefix$0$add$ptr65$i = 0, $prefix$0$i = 0, $prefix$1 = 0, $prefix$2 = 0;
 var $r$0$a$9$i = 0, $re$1482$i = 0, $rem$i = i64(), $rem360$i = 0, $rem370$i = 0, $rem494$i = 0, $rem494510$i = 0, $retval$0 = 0, $retval$0$i = 0, $round$0481$i = 0.0, $round377$1$i = 0.0, $s$0 = 0, $s$0$i = 0, $s$0$lcssa$i18 = 0, $s$010$i = 0, $s$044$i = 0, $s$1 = 0, $s$1$i = 0, $s$1$i6 = 0, $s$128$i = 0;
 var $s$2$i = 0, $s$2$lcssa = 0, $s$2294 = 0, $s$4 = 0, $s$6 = 0, $s$7 = 0, $s$addr$0$lcssa$i = 0, $s$addr$0$lcssa$i229 = 0, $s$addr$06$i = 0, $s$addr$06$i221 = 0, $s35$0$i = 0, $s668$0492$i = 0, $s668$1$i = 0, $s715$0$lcssa$i = 0, $s715$0484$i = 0, $s753$0$i = 0, $s753$1496$i = 0, $s753$2$i = 0, $scevgep556$i = 0, $scevgep556557$i = 0;
 var $sh_prom$i = i64(), $shl = 0, $shl$i = i64(), $shl280$i = 0, $shl60 = 0, $shr = 0, $shr$i = i64(), $shr$i226 = i64(), $shr283$i = 0, $shr285$i = 0, $small$0$i = 0.0, $small$1$i = 0.0, $st$0 = 0, $storemerge = 0, $storemerge186278 = 0, $storemerge186303 = 0, $storemerge191 = 0, $sub = 0, $sub$i = 0.0, $sub$i22 = 0;
 var $sub$ptr$div$i = 0, $sub$ptr$div321$i = 0, $sub$ptr$div347$i = 0, $sub$ptr$div430$i = 0, $sub$ptr$div511$i = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast160$i = 0, $sub$ptr$lhs$cast305$i = 0, $sub$ptr$lhs$cast318 = 0, $sub$ptr$lhs$cast318$i = 0, $sub$ptr$lhs$cast344$i = 0, $sub$ptr$lhs$cast362 = 0, $sub$ptr$lhs$cast432 = 0, $sub$ptr$lhs$cast508$i = 0, $sub$ptr$lhs$cast694$i = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast152$i = 0, $sub$ptr$rhs$cast268 = 0;
 var $sub$ptr$rhs$cast306$i = 0, $sub$ptr$rhs$cast319 = 0, $sub$ptr$rhs$cast319$i = 0, $sub$ptr$rhs$cast428$i = 0, $sub$ptr$rhs$cast433 = 0, $sub$ptr$rhs$cast634$i = 0, $sub$ptr$rhs$cast634504$i = 0, $sub$ptr$rhs$cast649$i = 0, $sub$ptr$rhs$cast695$i = 0, $sub$ptr$rhs$cast788$i = 0, $sub$ptr$rhs$cast812$i = 0, $sub$ptr$sub = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub145$i = 0, $sub$ptr$sub153$i = 0, $sub$ptr$sub159$i = 0, $sub$ptr$sub162$i = 0, $sub$ptr$sub172$i = 0, $sub$ptr$sub175$i = 0, $sub$ptr$sub269 = 0;
 var $sub$ptr$sub307$i = 0, $sub$ptr$sub320 = 0, $sub$ptr$sub320$i = 0, $sub$ptr$sub346$i = 0, $sub$ptr$sub364 = 0, $sub$ptr$sub429$i = 0, $sub$ptr$sub434 = 0, $sub$ptr$sub434$p$5 = 0, $sub$ptr$sub510$i = 0, $sub$ptr$sub635$i = 0, $sub$ptr$sub635505$i = 0, $sub$ptr$sub650$i = 0, $sub$ptr$sub650$pn$i = 0, $sub$ptr$sub696$i = 0, $sub$ptr$sub789$i = 0, $sub$ptr$sub813$i = 0, $sub101 = 0, $sub101$w$0 = 0, $sub124$i = 0.0, $sub135 = 0;
 var $sub146$i = 0, $sub165 = 0, $sub176 = 0, $sub181$i = 0, $sub203$i = 0, $sub219$i = 0.0, $sub22$i = 0, $sub256$i = 0, $sub264$i = 0, $sub281$i = 0, $sub287 = i64(), $sub336$i = 0, $sub343$i = 0, $sub357$i = 0, $sub390 = 0, $sub409$i = 0, $sub478$i = 0, $sub480$i = 0, $sub49 = 0, $sub49301 = 0;
 var $sub49305 = 0, $sub514$i = 0, $sub562$i = 0, $sub59 = 0, $sub626$le$i = 0, $sub735$i = 0, $sub74$i = 0, $sub806$i = 0, $sub84 = 0, $sub85$i = 0.0, $sub86$i = 0.0, $sub88$i = 0.0, $sub91$i = 0.0, $sub97$i = 0, $sum = 0, $t$0 = 0, $t$1 = 0, $t$addr$0$i = 0, $t$addr$1$i = 0, $tobool = 0;
 var $tobool$i = 0, $tobool$i$i = 0, $tobool$i15 = 0, $tobool$i213 = 0, $tobool$i217 = 0, $tobool$i227 = 0, $tobool$i232 = 0, $tobool$i246 = 0, $tobool$i407$i = 0, $tobool$i413$i = 0, $tobool$i419$i = 0, $tobool$i425$i = 0, $tobool$i431$i = 0, $tobool$i437$i = 0, $tobool$i443$i = 0, $tobool$i449$i = 0, $tobool$i455$i = 0, $tobool$i461$i = 0, $tobool$i467$i = 0, $tobool$i473$i = 0;
 var $tobool$i5 = 0, $tobool13$i = 0, $tobool135$i = 0, $tobool139$i = 0, $tobool140$i = 0, $tobool141 = 0, $tobool179 = 0, $tobool2$i = 0, $tobool2$lcssa$i = 0, $tobool209 = 0, $tobool218 = 0, $tobool222$i = 0, $tobool241$i = 0, $tobool244$i = 0, $tobool25 = 0, $tobool25$i = 0, $tobool2526$i = 0, $tobool253 = 0, $tobool256 = 0, $tobool265 = 0;
 var $tobool28 = 0, $tobool290$i = 0, $tobool290565$i = 0, $tobool291 = 0, $tobool294$i = 0, $tobool296 = 0, $tobool313 = 0, $tobool315 = 0, $tobool341$i = 0, $tobool350 = 0, $tobool358 = 0, $tobool36$i = 0, $tobool37$i = 0, $tobool371$i = 0, $tobool380$i = 0, $tobool381 = 0, $tobool4$i = 0, $tobool40$i = 0, $tobool400$i = 0, $tobool408 = 0;
 var $tobool460 = 0, $tobool463 = 0, $tobool471 = 0, $tobool484$i = 0, $tobool490$i = 0, $tobool5$i = 0, $tobool5$i237 = 0, $tobool5$i9 = 0, $tobool55 = 0, $tobool56$i = 0, $tobool59$i = 0, $tobool63$i = 0, $tobool76$i = 0, $tobool76563$i = 0, $tobool781$i = 0, $tobool79$i = 0, $tobool8$i = 0, $tobool9$i = 0, $tobool90 = 0, $trunc = 0;
 var $w$0 = 0, $w$0$lcssa$i = 0, $w$034$i = 0, $w$1 = 0, $w$2 = 0, $w$add165$i = 0, $w$add653$i = 0, $wc = 0, $ws$0311 = 0, $ws$1320 = 0, $x$addr$0$tr$i = 0, $x$addr$05$i = i64(), $x$addr$07$i = i64(), $xor = 0, $xor$i = 0, $xor167$i = 0, $xor186$i = 0, $xor450 = 0, $xor458 = 0, $xor655$i = 0;
 var $xor816$i = 0, $y$addr$0$i = 0.0, $y$addr$1$i = 0.0, $y$addr$2$i = 0.0, $y$addr$3$i = 0.0, $y$addr$4$i = 0.0, $z$0$i = 0, $z$0$lcssa = 0, $z$0295 = 0, $z$1 = 0, $z$1$lcssa$i = 0, $z$1548$i = 0, $z$2 = 0, $z$2$i = 0, $z$3$lcssa$i = 0, $z$3538$i = 0, $z$4$i = 0, $z$7$add$ptr742$i = 0, $z$7$i = 0, $z$7$ph$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0;
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
     store4(7276,75);
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
  $1 = load1($s$0);
  $tobool = ($1<<24>>24)==(0);
  if ($tobool) {
   label = 261;
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
   $$pre = load1($incdec$ptr);
   $2 = $$pre;$s$1 = $incdec$ptr;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $arrayidx16 = ((($s$2294)) + 1|0);
     $3 = load1($arrayidx16);
     $cmp18 = ($3<<24>>24)==(37);
     if (!($cmp18)) {
      $s$2$lcssa = $s$2294;$z$0$lcssa = $z$0295;
      break L12;
     }
     $incdec$ptr23 = ((($z$0295)) + 1|0);
     $add$ptr = ((($s$2294)) + 2|0);
     $4 = load1($add$ptr);
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
   $5 = load4($f);
   $and$i = $5 & 32;
   $tobool$i = ($and$i|0)==(0);
   if ($tobool$i) {
    ___fwritex($s$0,$sub$ptr$sub,$f);
   }
  }
  $tobool28 = ($sub$ptr$sub|0)==(0);
  if (!($tobool28)) {
   $l10n$0$phi = $l10n$0;$cnt$0 = $cnt$1;$l$0 = $sub$ptr$sub;$s$0 = $s$2$lcssa;$l10n$0 = $l10n$0$phi;
   continue;
  }
  $arrayidx31 = ((($s$2$lcssa)) + 1|0);
  $6 = load1($arrayidx31);
  $conv32 = $6 << 24 >> 24;
  $isdigittmp = (($conv32) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $arrayidx35 = ((($s$2$lcssa)) + 2|0);
   $7 = load1($arrayidx35);
   $cmp37 = ($7<<24>>24)==(36);
   $add$ptr43 = ((($s$2$lcssa)) + 3|0);
   $add$ptr43$arrayidx31 = $cmp37 ? $add$ptr43 : $arrayidx31;
   $$l10n$0 = $cmp37 ? 1 : $l10n$0;
   $isdigittmp$ = $cmp37 ? $isdigittmp : -1;
   $$pre334 = load1($add$ptr43$arrayidx31);
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
     $10 = load1($incdec$ptr62);
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
    $12 = load1($arrayidx68);
    $conv69 = $12 << 24 >> 24;
    $isdigittmp189 = (($conv69) + -48)|0;
    $isdigit190 = ($isdigittmp189>>>0)<(10);
    if ($isdigit190) {
     $arrayidx73 = ((($storemerge186278)) + 2|0);
     $13 = load1($arrayidx73);
     $cmp75 = ($13<<24>>24)==(36);
     if ($cmp75) {
      $arrayidx81 = (($nl_type) + ($isdigittmp189<<2)|0);
      store4($arrayidx81,10);
      $14 = load1($arrayidx68);
      $conv83 = $14 << 24 >> 24;
      $sub84 = (($conv83) + -48)|0;
      $i86 = (($nl_arg) + ($sub84<<3)|0);
      $15 = load8($i86);
      $conv87 = i64_trunc($15);
      $add$ptr88 = ((($storemerge186278)) + 3|0);
      $l10n$2 = 1;$storemerge191 = $add$ptr88;$w$0 = $conv87;
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
     $arglist_current = load4($ap);
     $16 = $arglist_current;
     $expanded5 = ((0) + 4|0);
     $expanded4 = $expanded5;
     $expanded = (($expanded4) - 1)|0;
     $17 = (($16) + ($expanded))|0;
     $expanded9 = ((0) + 4|0);
     $expanded8 = $expanded9;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $18 = $17 & $expanded6;
     $19 = $18;
     $20 = load4($19);
     $arglist_next = ((($19)) + 4|0);
     store4($ap,$arglist_next);
     $l10n$2 = 0;$storemerge191 = $arrayidx68;$w$0 = $20;
    }
    $cmp97 = ($w$0|0)<(0);
    $or100 = $fl$0275 | 8192;
    $sub101 = (0 - ($w$0))|0;
    $or100$fl$0 = $cmp97 ? $or100 : $fl$0275;
    $sub101$w$0 = $cmp97 ? $sub101 : $w$0;
    $$pre335 = load1($storemerge191);
    $$pr = $$pre335;$fl$1 = $or100$fl$0;$l10n$3 = $l10n$2;$s$4 = $storemerge191;$w$1 = $sub101$w$0;
   } else {
    $conv4$i = $11 << 24 >> 24;
    $isdigittmp5$i = (($conv4$i) + -48)|0;
    $isdigit6$i = ($isdigittmp5$i>>>0)<(10);
    if ($isdigit6$i) {
     $21 = $storemerge186278;$i$07$i = 0;$isdigittmp8$i = $isdigittmp5$i;
     while(1) {
      $mul$i = ($i$07$i*10)|0;
      $add$i = (($mul$i) + ($isdigittmp8$i))|0;
      $incdec$ptr$i = ((($21)) + 1|0);
      $22 = load1($incdec$ptr$i);
      $conv$i = $22 << 24 >> 24;
      $isdigittmp$i = (($conv$i) + -48)|0;
      $isdigit$i = ($isdigittmp$i>>>0)<(10);
      if ($isdigit$i) {
       $21 = $incdec$ptr$i;$i$07$i = $add$i;$isdigittmp8$i = $isdigittmp$i;
      } else {
       break;
      }
     }
     $cmp105 = ($add$i|0)<(0);
     if ($cmp105) {
      $retval$0 = -1;
      break L1;
     } else {
      $$pr = $22;$fl$1 = $fl$0275;$l10n$3 = $l10n$1;$s$4 = $incdec$ptr$i;$w$1 = $add$i;
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
    $23 = load1($arrayidx114);
    $cmp116 = ($23<<24>>24)==(42);
    if (!($cmp116)) {
     $conv4$i197 = $23 << 24 >> 24;
     $isdigittmp5$i198 = (($conv4$i197) + -48)|0;
     $isdigit6$i199 = ($isdigittmp5$i198>>>0)<(10);
     if ($isdigit6$i199) {
      $33 = $arrayidx114;$i$07$i201 = 0;$isdigittmp8$i200 = $isdigittmp5$i198;
     } else {
      $p$0 = 0;$s$6 = $arrayidx114;
      break;
     }
     while(1) {
      $mul$i202 = ($i$07$i201*10)|0;
      $add$i203 = (($mul$i202) + ($isdigittmp8$i200))|0;
      $incdec$ptr$i204 = ((($33)) + 1|0);
      $34 = load1($incdec$ptr$i204);
      $conv$i205 = $34 << 24 >> 24;
      $isdigittmp$i206 = (($conv$i205) + -48)|0;
      $isdigit$i207 = ($isdigittmp$i206>>>0)<(10);
      if ($isdigit$i207) {
       $33 = $incdec$ptr$i204;$i$07$i201 = $add$i203;$isdigittmp8$i200 = $isdigittmp$i206;
      } else {
       $p$0 = $add$i203;$s$6 = $incdec$ptr$i204;
       break L45;
      }
     }
    }
    $arrayidx119 = ((($s$4)) + 2|0);
    $24 = load1($arrayidx119);
    $conv120 = $24 << 24 >> 24;
    $isdigittmp187 = (($conv120) + -48)|0;
    $isdigit188 = ($isdigittmp187>>>0)<(10);
    if ($isdigit188) {
     $arrayidx124 = ((($s$4)) + 3|0);
     $25 = load1($arrayidx124);
     $cmp126 = ($25<<24>>24)==(36);
     if ($cmp126) {
      $arrayidx132 = (($nl_type) + ($isdigittmp187<<2)|0);
      store4($arrayidx132,10);
      $26 = load1($arrayidx119);
      $conv134 = $26 << 24 >> 24;
      $sub135 = (($conv134) + -48)|0;
      $i137 = (($nl_arg) + ($sub135<<3)|0);
      $27 = load8($i137);
      $conv138 = i64_trunc($27);
      $add$ptr139 = ((($s$4)) + 4|0);
      $p$0 = $conv138;$s$6 = $add$ptr139;
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
     $28 = $arglist_current2;
     $expanded12 = ((0) + 4|0);
     $expanded11 = $expanded12;
     $expanded10 = (($expanded11) - 1)|0;
     $29 = (($28) + ($expanded10))|0;
     $expanded16 = ((0) + 4|0);
     $expanded15 = $expanded16;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $30 = $29 & $expanded13;
     $31 = $30;
     $32 = load4($31);
     $arglist_next3 = ((($31)) + 4|0);
     store4($ap,$arglist_next3);
     $p$0 = $32;$s$6 = $arrayidx119;
    } else {
     $p$0 = 0;$s$6 = $arrayidx119;
    }
   } else {
    $p$0 = -1;$s$6 = $s$4;
   }
  } while(0);
  $s$7 = $s$6;$st$0 = 0;
  while(1) {
   $35 = load1($s$7);
   $conv164 = $35 << 24 >> 24;
   $sub165 = (($conv164) + -65)|0;
   $cmp166 = ($sub165>>>0)>(57);
   if ($cmp166) {
    $retval$0 = -1;
    break L1;
   }
   $incdec$ptr170 = ((($s$7)) + 1|0);
   $arrayidx174 = ((3802 + (($st$0*58)|0)|0) + ($sub165)|0);
   $36 = load1($arrayidx174);
   $conv175 = $36&255;
   $sub176 = (($conv175) + -1)|0;
   $cmp177 = ($sub176>>>0)<(8);
   if ($cmp177) {
    $s$7 = $incdec$ptr170;$st$0 = $conv175;
   } else {
    break;
   }
  }
  $tobool179 = ($36<<24>>24)==(0);
  if ($tobool179) {
   $retval$0 = -1;
   break;
  }
  $cmp182 = ($36<<24>>24)==(19);
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
     store4($arrayidx193,$conv175);
     $37 = (($nl_arg) + ($argpos$0<<3)|0);
     $38 = load8($37);
     store8($arg,$38);
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
  $39 = load1($s$7);
  $conv208 = $39 << 24 >> 24;
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
     $40 = load4($arg);
     store4($40,$cnt$1);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 1:  {
     $41 = load4($arg);
     store4($41,$cnt$1);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 2:  {
     $conv227 = i64_sext($cnt$1);
     $42 = load4($arg);
     store8($42,$conv227);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 3:  {
     $conv230 = $cnt$1&65535;
     $43 = load4($arg);
     store2($43,$conv230);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 4:  {
     $conv233 = $cnt$1&255;
     $44 = load4($arg);
     store1($44,$conv233);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 6:  {
     $45 = load4($arg);
     store4($45,$cnt$1);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 7:  {
     $conv238 = i64_sext($cnt$1);
     $46 = load4($arg);
     store8($46,$conv238);
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
    $50 = load8($arg);
    $tobool4$i = i64_eq($50,i64_const(0,0));
    if ($tobool4$i) {
     $s$addr$0$lcssa$i229 = $add$ptr206;
    } else {
     $s$addr$06$i221 = $add$ptr206;$x$addr$05$i = $50;
     while(1) {
      $and$i222 = i64_and($x$addr$05$i,i64_const(7,0));
      $add$i223 = i64_or($and$i222,i64_const(48,0));
      $conv$i224 = i64_trunc($add$i223)&255;
      $incdec$ptr$i225 = ((($s$addr$06$i221)) + -1|0);
      store1($incdec$ptr$i225,$conv$i224);
      $shr$i226 = i64_lshr($x$addr$05$i,i64_const(3,0));
      $tobool$i227 = i64_eq($shr$i226,i64_const(0,0));
      if ($tobool$i227) {
       $s$addr$0$lcssa$i229 = $incdec$ptr$i225;
       break;
      } else {
       $s$addr$06$i221 = $incdec$ptr$i225;$x$addr$05$i = $shr$i226;
      }
     }
    }
    $and264 = $fl$1$and220 & 8;
    $tobool265 = ($and264|0)==(0);
    if ($tobool265) {
     $a$0 = $s$addr$0$lcssa$i229;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = 0;$prefix$1 = 4282;
     label = 76;
    } else {
     $sub$ptr$rhs$cast268 = $s$addr$0$lcssa$i229;
     $sub$ptr$sub269 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast268))|0;
     $cmp271 = ($p$0|0)>($sub$ptr$sub269|0);
     $add270 = (($sub$ptr$sub269) + 1)|0;
     $p$0$add270 = $cmp271 ? $p$0 : $add270;
     $a$0 = $s$addr$0$lcssa$i229;$fl$4 = $fl$1$and220;$p$2 = $p$0$add270;$pl$1 = 0;$prefix$1 = 4282;
     label = 76;
    }
    break;
   }
   case 105: case 100:  {
    $51 = load8($arg);
    $cmp283 = i64_slt($51,i64_const(0,0));
    if ($cmp283) {
     $sub287 = i64_sub(i64_const(0,0),$51);
     store8($arg,$sub287);
     $52 = $sub287;$pl$0 = 1;$prefix$0 = 4282;
     label = 75;
     break L74;
    }
    $and290 = $fl$1$and220 & 2048;
    $tobool291 = ($and290|0)==(0);
    $and295 = $fl$1$and220 & 1;
    if ($tobool291) {
     $tobool296 = ($and295|0)==(0);
     $$ = $tobool296 ? 4282 : (4284);
     $52 = $51;$pl$0 = $and295;$prefix$0 = $$;
     label = 75;
    } else {
     $52 = $51;$pl$0 = 1;$prefix$0 = (4283);
     label = 75;
    }
    break;
   }
   case 117:  {
    $$pre337 = load8($arg);
    $52 = $$pre337;$pl$0 = 0;$prefix$0 = 4282;
    label = 75;
    break;
   }
   case 99:  {
    $55 = load8($arg);
    $conv340 = i64_trunc($55)&255;
    store1($add$ptr341,$conv340);
    $a$2 = $add$ptr341;$fl$6 = $and220;$p$5 = 1;$pl$2 = 0;$prefix$2 = 4282;$z$2 = $add$ptr206;
    break;
   }
   case 109:  {
    $56 = load4(7276);
    $i$012$i = 0;
    while(1) {
     $arrayidx$i1 = (4330 + ($i$012$i)|0);
     $57 = load1($arrayidx$i1);
     $conv$i2 = $57&255;
     $cmp$i = ($conv$i2|0)==($56|0);
     if ($cmp$i) {
      label = 80;
      break;
     }
     $inc$i4 = (($i$012$i) + 1)|0;
     $tobool$i5 = ($inc$i4|0)==(87);
     if ($tobool$i5) {
      $i$111$i = 87;$s$010$i = 4418;
      break;
     } else {
      $i$012$i = $inc$i4;
     }
    }
    if ((label|0) == 80) {
     label = 0;
     $tobool59$i = ($i$012$i|0)==(0);
     if ($tobool59$i) {
      $a$1 = 4418;
      label = 87;
      break L74;
     } else {
      $i$111$i = $i$012$i;$s$010$i = 4418;
     }
    }
    while(1) {
     $s$1$i6 = $s$010$i;
     while(1) {
      $58 = load1($s$1$i6);
      $tobool8$i = ($58<<24>>24)==(0);
      $incdec$ptr$i7 = ((($s$1$i6)) + 1|0);
      if ($tobool8$i) {
       break;
      } else {
       $s$1$i6 = $incdec$ptr$i7;
      }
     }
     $dec$i8 = (($i$111$i) + -1)|0;
     $tobool5$i9 = ($dec$i8|0)==(0);
     if ($tobool5$i9) {
      $a$1 = $incdec$ptr$i7;
      label = 87;
      break;
     } else {
      $i$111$i = $dec$i8;$s$010$i = $incdec$ptr$i7;
     }
    }
    break;
   }
   case 115:  {
    $59 = load4($arg);
    $tobool350 = ($59|0)!=(0|0);
    $cond355 = $tobool350 ? $59 : 4292;
    $a$1 = $cond355;
    label = 87;
    break;
   }
   case 67:  {
    $65 = load8($arg);
    $conv369 = i64_trunc($65);
    store4($wc,$conv369);
    store4($arrayidx371,0);
    store4($arg,$wc);
    $133 = $wc;$p$4340 = -1;
    label = 103;
    break;
   }
   case 83:  {
    $$pre336 = load4($arg);
    $cmp378308 = ($p$0|0)==(0);
    if ($cmp378308) {
     _pad($f,32,$w$1,0,$fl$1$and220);
     $i$0$lcssa343 = 0;
     label = 114;
    } else {
     $133 = $$pre336;$p$4340 = $p$0;
     label = 103;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $69 = loadd($arg);
    store4($e2$i,0);
    $70 = i64_bc2i($69);
    $tobool5$i237 = i64_slt($70,i64_const(0,0));
    if ($tobool5$i237) {
     $sub$i = -$69;
     $pl$0$i = 1;$prefix$0$i = 4299;$y$addr$0$i = $sub$i;
    } else {
     $and$i239 = $fl$1$and220 & 2048;
     $tobool9$i = ($and$i239|0)==(0);
     $and12$i = $fl$1$and220 & 1;
     if ($tobool9$i) {
      $tobool13$i = ($and12$i|0)==(0);
      $$$i = $tobool13$i ? (4300) : (4305);
      $pl$0$i = $and12$i;$prefix$0$i = $$$i;$y$addr$0$i = $69;
     } else {
      $pl$0$i = 1;$prefix$0$i = (4302);$y$addr$0$i = $69;
     }
    }
    $71 = i64_bc2i($y$addr$0$i);
    $and27$i = i64_and($71,i64_const(0,2146435072));
    $cmp28$i = i64_ult($and27$i,i64_const(0,2146435072));
    do {
     if ($cmp28$i) {
      $call$i15 = (+_frexp($y$addr$0$i,$e2$i));
      $mul$i241 = $call$i15 * 2.0;
      $tobool56$i = $mul$i241 != 0.0;
      if ($tobool56$i) {
       $74 = load4($e2$i);
       $dec$i = (($74) + -1)|0;
       store4($e2$i,$dec$i);
      }
      $or$i242 = $t$0 | 32;
      $cmp59$i = ($or$i242|0)==(97);
      if ($cmp59$i) {
       $and62$i = $t$0 & 32;
       $tobool63$i = ($and62$i|0)==(0);
       $add$ptr65$i = ((($prefix$0$i)) + 9|0);
       $prefix$0$add$ptr65$i = $tobool63$i ? $prefix$0$i : $add$ptr65$i;
       $add67$i = $pl$0$i | 2;
       $75 = ($p$0>>>0)>(11);
       $sub74$i = (12 - ($p$0))|0;
       $tobool76563$i = ($sub74$i|0)==(0);
       $tobool76$i = $75 | $tobool76563$i;
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
         $76 = load1($prefix$0$add$ptr65$i);
         $cmp82$i = ($76<<24>>24)==(45);
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
       $77 = load4($e2$i);
       $cmp94$i = ($77|0)<(0);
       $sub97$i = (0 - ($77))|0;
       $cond100$i = $cmp94$i ? $sub97$i : $77;
       $conv101$i = i64_sext($cond100$i);
       $call102$i = (_fmt_u($conv101$i,$arrayidx$i236)|0);
       $cmp103$i = ($call102$i|0)==($arrayidx$i236|0);
       if ($cmp103$i) {
        store1($incdec$ptr106$i,48);
        $estr$0$i = $incdec$ptr106$i;
       } else {
        $estr$0$i = $call102$i;
       }
       $78 = $77 >> 31;
       $79 = $78 & 2;
       $80 = (($79) + 43)|0;
       $conv111$i = $80&255;
       $incdec$ptr112$i = ((($estr$0$i)) + -1|0);
       store1($incdec$ptr112$i,$conv111$i);
       $add113$i = (($t$0) + 15)|0;
       $conv114$i = $add113$i&255;
       $incdec$ptr115$i = ((($estr$0$i)) + -2|0);
       store1($incdec$ptr115$i,$conv114$i);
       $notrhs$i = ($p$0|0)<(1);
       $and134$i = $fl$1$and220 & 8;
       $tobool135$i = ($and134$i|0)==(0);
       $s$0$i = $buf$i;$y$addr$2$i = $y$addr$1$i;
       while(1) {
        $conv116$i = (~~(($y$addr$2$i)));
        $arrayidx117$i = (4266 + ($conv116$i)|0);
        $81 = load1($arrayidx117$i);
        $conv118393$i = $81&255;
        $or120$i = $conv118393$i | $and62$i;
        $conv121$i = $or120$i&255;
        $incdec$ptr122$i = ((($s$0$i)) + 1|0);
        store1($s$0$i,$conv121$i);
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
          store1($incdec$ptr122$i,46);
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
       $82 = load4($f);
       $and$i418$i = $82 & 32;
       $tobool$i419$i = ($and$i418$i|0)==(0);
       if ($tobool$i419$i) {
        ___fwritex($prefix$0$add$ptr65$i,$add67$i,$f);
       }
       $xor167$i = $fl$1$and220 ^ 65536;
       _pad($f,48,$w$1,$add165$i,$xor167$i);
       $sub$ptr$sub172$i = (($$pre560$i) - ($sub$ptr$rhs$cast$i))|0;
       $83 = load4($f);
       $and$i424$i = $83 & 32;
       $tobool$i425$i = ($and$i424$i|0)==(0);
       if ($tobool$i425$i) {
        ___fwritex($buf$i,$sub$ptr$sub172$i,$f);
       }
       $sub$ptr$sub175$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast152$i))|0;
       $sum = (($sub$ptr$sub172$i) + ($sub$ptr$sub175$i))|0;
       $sub181$i = (($l$0$i) - ($sum))|0;
       _pad($f,48,$sub181$i,0,0);
       $84 = load4($f);
       $and$i430$i = $84 & 32;
       $tobool$i431$i = ($and$i430$i|0)==(0);
       if ($tobool$i431$i) {
        ___fwritex($incdec$ptr115$i,$sub$ptr$sub175$i,$f);
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
       $85 = load4($e2$i);
       $sub203$i = (($85) + -28)|0;
       store4($e2$i,$sub203$i);
       $$pr$i = $sub203$i;$y$addr$3$i = $mul202$i;
      } else {
       $$pre558$i = load4($e2$i);
       $$pr$i = $$pre558$i;$y$addr$3$i = $mul$i241;
      }
      $cmp205$i = ($$pr$i|0)<(0);
      $arraydecay208$add$ptr213$i = $cmp205$i ? $big$i : $add$ptr213$i;
      $y$addr$4$i = $y$addr$3$i;$z$0$i = $arraydecay208$add$ptr213$i;
      while(1) {
       $conv216$i = (~~(($y$addr$4$i))>>>0);
       store4($z$0$i,$conv216$i);
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
       $86 = $$pr$i;$a$1549$i = $arraydecay208$add$ptr213$i;$z$1548$i = $incdec$ptr217$i;
       while(1) {
        $cmp228$i = ($86|0)>(29);
        $cond233$i = $cmp228$i ? 29 : $86;
        $d$0542$i = ((($z$1548$i)) + -4|0);
        $cmp235543$i = ($d$0542$i>>>0)<($a$1549$i>>>0);
        do {
         if ($cmp235543$i) {
          $a$2$ph$i = $a$1549$i;
         } else {
          $sh_prom$i = i64_zext($cond233$i>>>0);
          $carry$0544$i = 0;$d$0545$i = $d$0542$i;
          while(1) {
           $87 = load4($d$0545$i);
           $conv238$i = i64_zext($87>>>0);
           $shl$i = i64_shl($conv238$i,$sh_prom$i);
           $conv239$i = i64_zext($carry$0544$i>>>0);
           $add240$i = i64_add($shl$i,$conv239$i);
           $rem$i = i64_urem($add240$i,i64_const(1000000000,0));
           $conv241$i = i64_trunc($rem$i);
           store4($d$0545$i,$conv241$i);
           $div$i = i64_udiv($add240$i,i64_const(1000000000,0));
           $conv242$i = i64_trunc($div$i);
           $d$0$i = ((($d$0545$i)) + -4|0);
           $cmp235$i = ($d$0$i>>>0)<($a$1549$i>>>0);
           if ($cmp235$i) {
            break;
           } else {
            $carry$0544$i = $conv242$i;$d$0545$i = $d$0$i;
           }
          }
          $tobool244$i = ($conv242$i|0)==(0);
          if ($tobool244$i) {
           $a$2$ph$i = $a$1549$i;
           break;
          }
          $incdec$ptr246$i = ((($a$1549$i)) + -4|0);
          store4($incdec$ptr246$i,$conv242$i);
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
         $88 = load4($arrayidx251$i);
         $lnot$i = ($88|0)==(0);
         if ($lnot$i) {
          $z$2$i = $arrayidx251$i;
         } else {
          break;
         }
        }
        $89 = load4($e2$i);
        $sub256$i = (($89) - ($cond233$i))|0;
        store4($e2$i,$sub256$i);
        $cmp225$i = ($sub256$i|0)>(0);
        if ($cmp225$i) {
         $86 = $sub256$i;$a$1549$i = $a$2$ph$i;$z$1548$i = $z$2$i;
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
       $90 = $$pr477$i;$a$3539$i = $a$1$lcssa$i;$z$3538$i = $z$1$lcssa$i;
       while(1) {
        $sub264$i = (0 - ($90))|0;
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
           $92 = load4($d$1534$i);
           $and282$i = $92 & $sub281$i;
           $shr283$i = $92 >>> $cond271$i;
           $add284$i = (($shr283$i) + ($carry262$0535$i))|0;
           store4($d$1534$i,$add284$i);
           $mul286$i = Math_imul($and282$i, $shr285$i)|0;
           $incdec$ptr288$i = ((($d$1534$i)) + 4|0);
           $cmp277$i = ($incdec$ptr288$i>>>0)<($z$3538$i>>>0);
           if ($cmp277$i) {
            $carry262$0535$i = $mul286$i;$d$1534$i = $incdec$ptr288$i;
           } else {
            break;
           }
          }
          $93 = load4($a$3539$i);
          $tobool290$i = ($93|0)==(0);
          $incdec$ptr292$i = ((($a$3539$i)) + 4|0);
          $incdec$ptr292$a$3$i = $tobool290$i ? $incdec$ptr292$i : $a$3539$i;
          $tobool294$i = ($mul286$i|0)==(0);
          if ($tobool294$i) {
           $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3$i;$z$4$i = $z$3538$i;
           break;
          }
          $incdec$ptr296$i = ((($z$3538$i)) + 4|0);
          store4($z$3538$i,$mul286$i);
          $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3$i;$z$4$i = $incdec$ptr296$i;
         } else {
          $91 = load4($a$3539$i);
          $tobool290565$i = ($91|0)==(0);
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
        $94 = load4($e2$i);
        $add313$i = (($94) + ($cond271$i))|0;
        store4($e2$i,$add313$i);
        $cmp259$i = ($add313$i|0)<(0);
        if ($cmp259$i) {
         $90 = $add313$i;$a$3539$i = $incdec$ptr292$a$3569$i;$z$3538$i = $add$ptr311$z$4$i;
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
        $95 = load4($a$3$lcssa$i);
        $cmp324529$i = ($95>>>0)<(10);
        if ($cmp324529$i) {
         $e$1$i = $mul322$i;
         break;
        } else {
         $e$0531$i = $mul322$i;$i$0530$i = 10;
        }
        while(1) {
         $mul328$i = ($i$0530$i*10)|0;
         $inc$i = (($e$0531$i) + 1)|0;
         $cmp324$i = ($95>>>0)<($mul328$i>>>0);
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
      $96 = $tobool341$i & $cmp338$i;
      $land$ext$neg$i = $96 << 31 >> 31;
      $sub343$i = (($sub336$i) + ($land$ext$neg$i))|0;
      $sub$ptr$lhs$cast344$i = $z$3$lcssa$i;
      $sub$ptr$sub346$i = (($sub$ptr$lhs$cast344$i) - ($sub$ptr$lhs$cast318$i))|0;
      $sub$ptr$div347$i = $sub$ptr$sub346$i >> 2;
      $97 = ($sub$ptr$div347$i*9)|0;
      $mul349$i = (($97) + -9)|0;
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
       $98 = load4($add$ptr358$i);
       $rem370$i = (($98>>>0) % ($i$1$lcssa$i>>>0))&-1;
       $tobool371$i = ($rem370$i|0)==(0);
       $add$ptr373$i = ((($add$ptr358$i)) + 4|0);
       $cmp374$i = ($add$ptr373$i|0)==($z$3$lcssa$i|0);
       $or$cond395$i = $cmp374$i & $tobool371$i;
       do {
        if ($or$cond395$i) {
         $a$8$i = $a$3$lcssa$i;$d$4$i = $add$ptr358$i;$e$4$i = $e$1$i;
        } else {
         $div378$i = (($98>>>0) / ($i$1$lcssa$i>>>0))&-1;
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
           $99 = load1($prefix$0$i);
           $cmp403$i = ($99<<24>>24)==(45);
           if (!($cmp403$i)) {
            $round377$1$i = $$396$i;$small$1$i = $small$0$i;
            break;
           }
           $mul406$i = -$$396$i;
           $mul407$i = -$small$0$i;
           $round377$1$i = $mul406$i;$small$1$i = $mul407$i;
          }
         } while(0);
         $sub409$i = (($98) - ($rem370$i))|0;
         store4($add$ptr358$i,$sub409$i);
         $add410$i = $round377$1$i + $small$1$i;
         $cmp411$i = $add410$i != $round377$1$i;
         if (!($cmp411$i)) {
          $a$8$i = $a$3$lcssa$i;$d$4$i = $add$ptr358$i;$e$4$i = $e$1$i;
          break;
         }
         $add414$i = (($sub409$i) + ($i$1$lcssa$i))|0;
         store4($add$ptr358$i,$add414$i);
         $cmp416519$i = ($add414$i>>>0)>(999999999);
         if ($cmp416519$i) {
          $a$5521$i = $a$3$lcssa$i;$d$2520$i = $add$ptr358$i;
          while(1) {
           $incdec$ptr419$i = ((($d$2520$i)) + -4|0);
           store4($d$2520$i,0);
           $cmp420$i = ($incdec$ptr419$i>>>0)<($a$5521$i>>>0);
           if ($cmp420$i) {
            $incdec$ptr423$i = ((($a$5521$i)) + -4|0);
            store4($incdec$ptr423$i,0);
            $a$6$i = $incdec$ptr423$i;
           } else {
            $a$6$i = $a$5521$i;
           }
           $100 = load4($incdec$ptr419$i);
           $inc425$i = (($100) + 1)|0;
           store4($incdec$ptr419$i,$inc425$i);
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
         $101 = load4($a$5$lcssa$i);
         $cmp433515$i = ($101>>>0)<(10);
         if ($cmp433515$i) {
          $a$8$i = $a$5$lcssa$i;$d$4$i = $d$2$lcssa$i;$e$4$i = $mul431$i;
          break;
         } else {
          $e$2517$i = $mul431$i;$i$2516$i = 10;
         }
         while(1) {
          $mul437$i = ($i$2516$i*10)|0;
          $inc438$i = (($e$2517$i) + 1)|0;
          $cmp433$i = ($101>>>0)<($mul437$i>>>0);
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
       $102 = load4($arrayidx453$i);
       $lnot455$i = ($102|0)==(0);
       if ($lnot455$i) {
        $z$7$i = $arrayidx453$i;
       } else {
        $cmp450$lcssa$i = 1;
        break;
       }
      }
      do {
       if ($cmp338$i) {
        $103 = $tobool341$i&1;
        $inc468$i = $103 ^ 1;
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
          $104 = load4($arrayidx489$i);
          $tobool490$i = ($104|0)==(0);
          if ($tobool490$i) {
           $j$2$i = 9;
           break;
          }
          $rem494510$i = (($104>>>0) % 10)&-1;
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
           $rem494$i = (($104>>>0) % ($mul499$i>>>0))&-1;
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
        $105 = ($sub$ptr$div511$i*9)|0;
        $mul513$i = (($105) + -9)|0;
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
      $106 = $p$addr$3$i | $and610$pre$phi$iZ2D;
      $107 = ($106|0)!=(0);
      $lor$ext$i = $107&1;
      $or613$i = $t$addr$1$i | 32;
      $cmp614$i = ($or613$i|0)==(102);
      if ($cmp614$i) {
       $cmp617$i = ($e$5$ph$i|0)>(0);
       $add620$i = $cmp617$i ? $e$5$ph$i : 0;
       $estr$2$i = 0;$sub$ptr$sub650$pn$i = $add620$i;
      } else {
       $cmp623$i = ($e$5$ph$i|0)<(0);
       $cond629$i = $cmp623$i ? $sub626$le$i : $e$5$ph$i;
       $conv630$i = i64_sext($cond629$i);
       $call631$i = (_fmt_u($conv630$i,$arrayidx$i236)|0);
       $sub$ptr$rhs$cast634504$i = $call631$i;
       $sub$ptr$sub635505$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast634504$i))|0;
       $cmp636506$i = ($sub$ptr$sub635505$i|0)<(2);
       if ($cmp636506$i) {
        $estr$1507$i = $call631$i;
        while(1) {
         $incdec$ptr639$i = ((($estr$1507$i)) + -1|0);
         store1($incdec$ptr639$i,48);
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
        $estr$1$lcssa$i = $call631$i;
       }
       $108 = $e$5$ph$i >> 31;
       $109 = $108 & 2;
       $110 = (($109) + 43)|0;
       $conv644$i = $110&255;
       $incdec$ptr645$i = ((($estr$1$lcssa$i)) + -1|0);
       store1($incdec$ptr645$i,$conv644$i);
       $conv646$i = $t$addr$1$i&255;
       $incdec$ptr647$i = ((($estr$1$lcssa$i)) + -2|0);
       store1($incdec$ptr647$i,$conv646$i);
       $sub$ptr$rhs$cast649$i = $incdec$ptr647$i;
       $sub$ptr$sub650$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast649$i))|0;
       $estr$2$i = $incdec$ptr647$i;$sub$ptr$sub650$pn$i = $sub$ptr$sub650$i;
      }
      $add608$i = (($pl$0$i) + 1)|0;
      $add612$i = (($add608$i) + ($p$addr$3$i))|0;
      $l$1$i = (($add612$i) + ($lor$ext$i))|0;
      $add653$i = (($l$1$i) + ($sub$ptr$sub650$pn$i))|0;
      _pad($f,32,$w$1,$add653$i,$fl$1$and220);
      $111 = load4($f);
      $and$i436$i = $111 & 32;
      $tobool$i437$i = ($and$i436$i|0)==(0);
      if ($tobool$i437$i) {
       ___fwritex($prefix$0$i,$pl$0$i,$f);
      }
      $xor655$i = $fl$1$and220 ^ 65536;
      _pad($f,48,$w$1,$add653$i,$xor655$i);
      do {
       if ($cmp614$i) {
        $cmp660$i = ($a$9$ph$i>>>0)>($arraydecay208$add$ptr213$i>>>0);
        $r$0$a$9$i = $cmp660$i ? $arraydecay208$add$ptr213$i : $a$9$ph$i;
        $d$5494$i = $r$0$a$9$i;
        while(1) {
         $112 = load4($d$5494$i);
         $conv669$i = i64_zext($112>>>0);
         $call672$i = (_fmt_u($conv669$i,$add$ptr671$i)|0);
         $cmp673$i = ($d$5494$i|0)==($r$0$a$9$i|0);
         do {
          if ($cmp673$i) {
           $cmp686$i = ($call672$i|0)==($add$ptr671$i|0);
           if (!($cmp686$i)) {
            $s668$1$i = $call672$i;
            break;
           }
           store1($incdec$ptr689$i,48);
           $s668$1$i = $incdec$ptr689$i;
          } else {
           $cmp678491$i = ($call672$i>>>0)>($buf$i>>>0);
           if (!($cmp678491$i)) {
            $s668$1$i = $call672$i;
            break;
           }
           $113 = $call672$i;
           $114 = (($113) - ($sub$ptr$rhs$cast$i))|0;
           _memset(($buf$i|0),48,($114|0))|0;
           $s668$0492$i = $call672$i;
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
         $115 = load4($f);
         $and$i442$i = $115 & 32;
         $tobool$i443$i = ($and$i442$i|0)==(0);
         if ($tobool$i443$i) {
          $sub$ptr$rhs$cast695$i = $s668$1$i;
          $sub$ptr$sub696$i = (($sub$ptr$lhs$cast694$i) - ($sub$ptr$rhs$cast695$i))|0;
          ___fwritex($s668$1$i,$sub$ptr$sub696$i,$f);
         }
         $incdec$ptr698$i = ((($d$5494$i)) + 4|0);
         $cmp665$i = ($incdec$ptr698$i>>>0)>($arraydecay208$add$ptr213$i>>>0);
         if ($cmp665$i) {
          break;
         } else {
          $d$5494$i = $incdec$ptr698$i;
         }
        }
        $116 = ($106|0)==(0);
        do {
         if (!($116)) {
          $117 = load4($f);
          $and$i448$i = $117 & 32;
          $tobool$i449$i = ($and$i448$i|0)==(0);
          if (!($tobool$i449$i)) {
           break;
          }
          ___fwritex(7224,1,$f);
         }
        } while(0);
        $cmp707486$i = ($incdec$ptr698$i>>>0)<($z$7$i>>>0);
        $cmp710487$i = ($p$addr$3$i|0)>(0);
        $118 = $cmp710487$i & $cmp707486$i;
        if ($118) {
         $d$6488$i = $incdec$ptr698$i;$p$addr$4489$i = $p$addr$3$i;
         while(1) {
          $119 = load4($d$6488$i);
          $conv716$i = i64_zext($119>>>0);
          $call719$i = (_fmt_u($conv716$i,$add$ptr671$i)|0);
          $cmp722483$i = ($call719$i>>>0)>($buf$i>>>0);
          if ($cmp722483$i) {
           $120 = $call719$i;
           $121 = (($120) - ($sub$ptr$rhs$cast$i))|0;
           _memset(($buf$i|0),48,($121|0))|0;
           $s715$0484$i = $call719$i;
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
           $s715$0$lcssa$i = $call719$i;
          }
          $122 = load4($f);
          $and$i454$i = $122 & 32;
          $tobool$i455$i = ($and$i454$i|0)==(0);
          if ($tobool$i455$i) {
           $cmp727$i = ($p$addr$4489$i|0)>(9);
           $cond732$i = $cmp727$i ? 9 : $p$addr$4489$i;
           ___fwritex($s715$0$lcssa$i,$cond732$i,$f);
          }
          $incdec$ptr734$i = ((($d$6488$i)) + 4|0);
          $sub735$i = (($p$addr$4489$i) + -9)|0;
          $cmp707$i = ($incdec$ptr734$i>>>0)<($z$7$i>>>0);
          $cmp710$i = ($p$addr$4489$i|0)>(9);
          $123 = $cmp710$i & $cmp707$i;
          if ($123) {
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
          $124 = load4($d$7500$i);
          $conv754$i = i64_zext($124>>>0);
          $call757$i = (_fmt_u($conv754$i,$add$ptr671$i)|0);
          $cmp760$i = ($call757$i|0)==($add$ptr671$i|0);
          if ($cmp760$i) {
           store1($incdec$ptr689$i,48);
           $s753$0$i = $incdec$ptr689$i;
          } else {
           $s753$0$i = $call757$i;
          }
          $cmp765$i = ($d$7500$i|0)==($a$9$ph$i|0);
          do {
           if ($cmp765$i) {
            $incdec$ptr776$i = ((($s753$0$i)) + 1|0);
            $125 = load4($f);
            $and$i460$i = $125 & 32;
            $tobool$i461$i = ($and$i460$i|0)==(0);
            if ($tobool$i461$i) {
             ___fwritex($s753$0$i,1,$f);
            }
            $cmp777$i = ($p$addr$5501$i|0)<(1);
            $or$cond401$i = $tobool781$i & $cmp777$i;
            if ($or$cond401$i) {
             $s753$2$i = $incdec$ptr776$i;
             break;
            }
            $126 = load4($f);
            $and$i466$i = $126 & 32;
            $tobool$i467$i = ($and$i466$i|0)==(0);
            if (!($tobool$i467$i)) {
             $s753$2$i = $incdec$ptr776$i;
             break;
            }
            ___fwritex(7224,1,$f);
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
          $127 = load4($f);
          $and$i472$i = $127 & 32;
          $tobool$i473$i = ($and$i472$i|0)==(0);
          if ($tobool$i473$i) {
           $cmp790$i = ($p$addr$5501$i|0)>($sub$ptr$sub789$i|0);
           $cond800$i = $cmp790$i ? $sub$ptr$sub789$i : $p$addr$5501$i;
           ___fwritex($s753$2$i,$cond800$i,$f);
          }
          $sub806$i = (($p$addr$5501$i) - ($sub$ptr$sub789$i))|0;
          $incdec$ptr808$i = ((($d$7500$i)) + 4|0);
          $cmp745$i = ($incdec$ptr808$i>>>0)<($z$7$add$ptr742$i>>>0);
          $cmp748$i = ($sub806$i|0)>(-1);
          $128 = $cmp745$i & $cmp748$i;
          if ($128) {
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
        $129 = load4($f);
        $and$i$i = $129 & 32;
        $tobool$i$i = ($and$i$i|0)==(0);
        if (!($tobool$i$i)) {
         break;
        }
        $sub$ptr$rhs$cast812$i = $estr$2$i;
        $sub$ptr$sub813$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast812$i))|0;
        ___fwritex($estr$2$i,$sub$ptr$sub813$i,$f);
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
      $cond$i = $tobool37$i ? 4318 : 4322;
      $cmp38$i = ($y$addr$0$i != $y$addr$0$i) | (0.0 != 0.0);
      $cond43$i = $tobool37$i ? 6222 : 4326;
      $pl$1$i = $cmp38$i ? 0 : $pl$0$i;
      $s35$0$i = $cmp38$i ? $cond43$i : $cond$i;
      $add$i240 = (($pl$1$i) + 3)|0;
      _pad($f,32,$w$1,$add$i240,$and220);
      $72 = load4($f);
      $and$i406$i = $72 & 32;
      $tobool$i407$i = ($and$i406$i|0)==(0);
      if ($tobool$i407$i) {
       ___fwritex($prefix$0$i,$pl$1$i,$f);
       $$pre$i = load4($f);
       $73 = $$pre$i;
      } else {
       $73 = $72;
      }
      $and$i412$i = $73 & 32;
      $tobool$i413$i = ($and$i412$i|0)==(0);
      if ($tobool$i413$i) {
       ___fwritex($s35$0$i,3,$f);
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
    $a$2 = $s$0;$fl$6 = $fl$1$and220;$p$5 = $p$0;$pl$2 = 0;$prefix$2 = 4282;$z$2 = $add$ptr206;
   }
   }
  } while(0);
  L320: do {
   if ((label|0) == 63) {
    label = 0;
    $47 = load8($arg);
    $and250 = $t$1 & 32;
    $tobool5$i = i64_eq($47,i64_const(0,0));
    if ($tobool5$i) {
     $49 = i64_const(0,0);$s$addr$0$lcssa$i = $add$ptr206;
    } else {
     $s$addr$06$i = $add$ptr206;$x$addr$07$i = $47;
     while(1) {
      $x$addr$0$tr$i = i64_trunc($x$addr$07$i);
      $idxprom$i = $x$addr$0$tr$i & 15;
      $arrayidx$i = (4266 + ($idxprom$i)|0);
      $48 = load1($arrayidx$i);
      $conv4$i211 = $48&255;
      $or$i = $conv4$i211 | $and250;
      $conv1$i = $or$i&255;
      $incdec$ptr$i212 = ((($s$addr$06$i)) + -1|0);
      store1($incdec$ptr$i212,$conv1$i);
      $shr$i = i64_lshr($x$addr$07$i,i64_const(4,0));
      $tobool$i213 = i64_eq($shr$i,i64_const(0,0));
      if ($tobool$i213) {
       break;
      } else {
       $s$addr$06$i = $incdec$ptr$i212;$x$addr$07$i = $shr$i;
      }
     }
     $$pre338 = load8($arg);
     $49 = $$pre338;$s$addr$0$lcssa$i = $incdec$ptr$i212;
    }
    $tobool253 = i64_eq($49,i64_const(0,0));
    $and255 = $fl$3 & 8;
    $tobool256 = ($and255|0)==(0);
    $or$cond193 = $tobool256 | $tobool253;
    $shr = $t$1 >> 4;
    $add$ptr258 = (4282 + ($shr)|0);
    $$add$ptr258 = $or$cond193 ? 4282 : $add$ptr258;
    $$272 = $or$cond193 ? 0 : 2;
    $a$0 = $s$addr$0$lcssa$i;$fl$4 = $fl$3;$p$2 = $p$1;$pl$1 = $$272;$prefix$1 = $$add$ptr258;
    label = 76;
   }
   else if ((label|0) == 75) {
    label = 0;
    $call305 = (_fmt_u($52,$add$ptr206)|0);
    $a$0 = $call305;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = $pl$0;$prefix$1 = $prefix$0;
    label = 76;
   }
   else if ((label|0) == 87) {
    label = 0;
    $60 = $a$1;
    $and39$i = $60 & 3;
    $tobool40$i = ($and39$i|0)!=(0);
    $tobool241$i = ($p$0|0)!=(0);
    $or$cond42$i = $tobool241$i & $tobool40$i;
    L329: do {
     if ($or$cond42$i) {
      $n$addr$043$i = $p$0;$s$044$i = $a$1;
      while(1) {
       $61 = load1($s$044$i);
       $cmp$i10 = ($61<<24>>24)==(0);
       if ($cmp$i10) {
        $n$addr$3$i = $n$addr$043$i;$s$2$i = $s$044$i;
        break L329;
       }
       $incdec$ptr$i12 = ((($s$044$i)) + 1|0);
       $dec$i13 = (($n$addr$043$i) + -1)|0;
       $62 = $incdec$ptr$i12;
       $and$i14 = $62 & 3;
       $tobool$i15 = ($and$i14|0)!=(0);
       $tobool2$i = ($dec$i13|0)!=(0);
       $or$cond$i16 = $tobool2$i & $tobool$i15;
       if ($or$cond$i16) {
        $n$addr$043$i = $dec$i13;$s$044$i = $incdec$ptr$i12;
       } else {
        $n$addr$0$lcssa$i = $dec$i13;$s$0$lcssa$i18 = $incdec$ptr$i12;$tobool2$lcssa$i = $tobool2$i;
        label = 90;
        break;
       }
      }
     } else {
      $n$addr$0$lcssa$i = $p$0;$s$0$lcssa$i18 = $a$1;$tobool2$lcssa$i = $tobool241$i;
      label = 90;
     }
    } while(0);
    L333: do {
     if ((label|0) == 90) {
      label = 0;
      if ($tobool2$lcssa$i) {
       $$pre$i20 = load1($s$0$lcssa$i18);
       $cmp8$i = ($$pre$i20<<24>>24)==(0);
       if ($cmp8$i) {
        $n$addr$3$i = $n$addr$0$lcssa$i;$s$2$i = $s$0$lcssa$i18;
       } else {
        $cmp1132$i = ($n$addr$0$lcssa$i>>>0)>(3);
        L337: do {
         if ($cmp1132$i) {
          $n$addr$133$i = $n$addr$0$lcssa$i;$w$034$i = $s$0$lcssa$i18;
          while(1) {
           $63 = load4($w$034$i);
           $sub$i22 = (($63) + -16843009)|0;
           $neg$i = $63 & -2139062144;
           $and15$i = $neg$i ^ -2139062144;
           $and16$i = $and15$i & $sub$i22;
           $lnot$i23 = ($and16$i|0)==(0);
           if (!($lnot$i23)) {
            break;
           }
           $incdec$ptr21$i = ((($w$034$i)) + 4|0);
           $sub22$i = (($n$addr$133$i) + -4)|0;
           $cmp11$i = ($sub22$i>>>0)>(3);
           if ($cmp11$i) {
            $n$addr$133$i = $sub22$i;$w$034$i = $incdec$ptr21$i;
           } else {
            $n$addr$1$lcssa$i = $sub22$i;$w$0$lcssa$i = $incdec$ptr21$i;
            label = 96;
            break L337;
           }
          }
          $n$addr$227$i = $n$addr$133$i;$s$128$i = $w$034$i;
         } else {
          $n$addr$1$lcssa$i = $n$addr$0$lcssa$i;$w$0$lcssa$i = $s$0$lcssa$i18;
          label = 96;
         }
        } while(0);
        if ((label|0) == 96) {
         label = 0;
         $tobool2526$i = ($n$addr$1$lcssa$i|0)==(0);
         if ($tobool2526$i) {
          $n$addr$3$i = 0;$s$2$i = $w$0$lcssa$i;
          break;
         } else {
          $n$addr$227$i = $n$addr$1$lcssa$i;$s$128$i = $w$0$lcssa$i;
         }
        }
        while(1) {
         $64 = load1($s$128$i);
         $cmp28$i24 = ($64<<24>>24)==(0);
         if ($cmp28$i24) {
          $n$addr$3$i = $n$addr$227$i;$s$2$i = $s$128$i;
          break L333;
         }
         $incdec$ptr33$i = ((($s$128$i)) + 1|0);
         $dec34$i = (($n$addr$227$i) + -1)|0;
         $tobool25$i = ($dec34$i|0)==(0);
         if ($tobool25$i) {
          $n$addr$3$i = 0;$s$2$i = $incdec$ptr33$i;
          break;
         } else {
          $n$addr$227$i = $dec34$i;$s$128$i = $incdec$ptr33$i;
         }
        }
       }
      } else {
       $n$addr$3$i = 0;$s$2$i = $s$0$lcssa$i18;
      }
     }
    } while(0);
    $tobool36$i = ($n$addr$3$i|0)!=(0);
    $cond$i25 = $tobool36$i ? $s$2$i : 0;
    $tobool358 = ($cond$i25|0)==(0|0);
    $sub$ptr$lhs$cast362 = $cond$i25;
    $sub$ptr$sub364 = (($sub$ptr$lhs$cast362) - ($60))|0;
    $add$ptr360 = (($a$1) + ($p$0)|0);
    $p$3 = $tobool358 ? $p$0 : $sub$ptr$sub364;
    $z$1 = $tobool358 ? $add$ptr360 : $cond$i25;
    $a$2 = $a$1;$fl$6 = $and220;$p$5 = $p$3;$pl$2 = 0;$prefix$2 = 4282;$z$2 = $z$1;
   }
   else if ((label|0) == 103) {
    label = 0;
    $i$0310 = 0;$l$1309 = 0;$ws$0311 = $133;
    while(1) {
     $66 = load4($ws$0311);
     $tobool381 = ($66|0)==(0);
     if ($tobool381) {
      $i$0$lcssa = $i$0310;$l$2 = $l$1309;
      break;
     }
     $call$i11 = (_wcrtomb($mb,$66)|0);
     $cmp386 = ($call$i11|0)<(0);
     $sub390 = (($p$4340) - ($i$0310))|0;
     $cmp391 = ($call$i11>>>0)>($sub390>>>0);
     $or$cond195 = $cmp386 | $cmp391;
     if ($or$cond195) {
      $i$0$lcssa = $i$0310;$l$2 = $call$i11;
      break;
     }
     $incdec$ptr384 = ((($ws$0311)) + 4|0);
     $add396 = (($call$i11) + ($i$0310))|0;
     $cmp378 = ($p$4340>>>0)>($add396>>>0);
     if ($cmp378) {
      $i$0310 = $add396;$l$1309 = $call$i11;$ws$0311 = $incdec$ptr384;
     } else {
      $i$0$lcssa = $add396;$l$2 = $call$i11;
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
     label = 114;
    } else {
     $i$1319 = 0;$ws$1320 = $133;
     while(1) {
      $67 = load4($ws$1320);
      $tobool408 = ($67|0)==(0);
      if ($tobool408) {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 114;
       break L320;
      }
      $incdec$ptr411 = ((($ws$1320)) + 4|0);
      $call$i13 = (_wcrtomb($mb,$67)|0);
      $add413 = (($call$i13) + ($i$1319))|0;
      $cmp414 = ($add413|0)>($i$0$lcssa|0);
      if ($cmp414) {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 114;
       break L320;
      }
      $68 = load4($f);
      $and$i231 = $68 & 32;
      $tobool$i232 = ($and$i231|0)==(0);
      if ($tobool$i232) {
       ___fwritex($mb,$call$i13,$f);
      }
      $cmp405 = ($add413>>>0)<($i$0$lcssa>>>0);
      if ($cmp405) {
       $i$1319 = $add413;$ws$1320 = $incdec$ptr411;
      } else {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 114;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 114) {
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
   $53 = load8($arg);
   $tobool313 = i64_ne($53,i64_const(0,0));
   $tobool315 = ($p$2|0)!=(0);
   $or$cond = $tobool315 | $tobool313;
   if ($or$cond) {
    $sub$ptr$rhs$cast319 = $a$0;
    $sub$ptr$sub320 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast319))|0;
    $54 = $tobool313&1;
    $lnot$ext = $54 ^ 1;
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
  $130 = load4($f);
  $and$i245 = $130 & 32;
  $tobool$i246 = ($and$i245|0)==(0);
  if ($tobool$i246) {
   ___fwritex($prefix$2,$pl$2,$f);
  }
  $xor450 = $fl$6 ^ 65536;
  _pad($f,48,$w$2,$add442,$xor450);
  _pad($f,48,$sub$ptr$sub434$p$5,$sub$ptr$sub434,0);
  $131 = load4($f);
  $and$i216 = $131 & 32;
  $tobool$i217 = ($and$i216|0)==(0);
  if ($tobool$i217) {
   ___fwritex($a$2,$sub$ptr$sub434,$f);
  }
  $xor458 = $fl$6 ^ 8192;
  _pad($f,32,$w$2,$add442,$xor458);
  $cnt$0 = $cnt$1;$l$0 = $w$2;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
 }
 L374: do {
  if ((label|0) == 261) {
   $tobool460 = ($f|0)==(0|0);
   if ($tobool460) {
    $tobool463 = ($l10n$0|0)==(0);
    if ($tobool463) {
     $retval$0 = 0;
    } else {
     $i$2292 = 1;
     while(1) {
      $arrayidx470 = (($nl_type) + ($i$2292<<2)|0);
      $132 = load4($arrayidx470);
      $tobool471 = ($132|0)==(0);
      if ($tobool471) {
       $inc48978$in = $i$2292;
       break;
      }
      $add$ptr474 = (($nl_arg) + ($i$2292<<3)|0);
      _pop_arg($add$ptr474,$132,$ap);
      $inc = (($i$2292) + 1)|0;
      $cmp467 = ($inc|0)<(10);
      if ($cmp467) {
       $i$2292 = $inc;
      } else {
       $retval$0 = 1;
       break L374;
      }
     }
     while(1) {
      $inc48978 = (($inc48978$in) + 1)|0;
      $cmp479 = ($inc48978|0)<(10);
      if (!($cmp479)) {
       $retval$0 = 1;
       break L374;
      }
      $arrayidx482$phi$trans$insert = (($nl_type) + ($inc48978<<2)|0);
      $$pre46 = load4($arrayidx482$phi$trans$insert);
      $lnot484 = ($$pre46|0)==(0);
      if ($lnot484) {
       $inc48978$in = $inc48978;
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
function ___fwritex($s,$l,$f) {
 $s = $s|0;
 $l = $l|0;
 $f = $f|0;
 var $$pre = 0, $$pre31 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr26 = 0, $arrayidx = 0, $call = 0, $call16 = 0, $cmp = 0, $cmp11 = 0;
 var $cmp17 = 0, $cmp6 = 0, $i$0 = 0, $l$addr$0 = 0, $lbf = 0, $s$addr$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub21 = 0, $tobool = 0, $tobool1 = 0, $tobool9 = 0, $wend = 0, $wpos = 0, $write = 0, $write15 = 0, label = 0, sp = 0;
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
    (FUNCTION_TABLE_iiii[$5 & 7]($f,$s,$l)|0);
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
       $9 = $4;$l$addr$0 = $l;$s$addr$0 = $s;
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
     $call16 = (FUNCTION_TABLE_iiii[$8 & 7]($f,$s,$i$0)|0);
     $cmp17 = ($call16>>>0)<($i$0>>>0);
     if ($cmp17) {
      break L5;
     }
     $add$ptr = (($s) + ($i$0)|0);
     $sub21 = (($l) - ($i$0))|0;
     $$pre31 = load4($wpos);
     $9 = $$pre31;$l$addr$0 = $sub21;$s$addr$0 = $add$ptr;
    } else {
     $9 = $4;$l$addr$0 = $l;$s$addr$0 = $s;
    }
   } while(0);
   _memcpy(($9|0),($s$addr$0|0),($l$addr$0|0))|0;
   $10 = load4($wpos);
   $add$ptr26 = (($10) + ($l$addr$0)|0);
   store4($wpos,$add$ptr26);
  }
 } while(0);
 return;
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
function _fmt_u($x,$s) {
 $x = i64($x);
 $s = $s|0;
 var $0 = 0, $add = i64(), $add5 = 0, $cmp = 0, $cmp11 = 0, $conv = 0, $conv6 = 0, $div = i64(), $div9 = 0, $extract$t = 0, $extract$t16 = 0, $incdec$ptr = 0, $incdec$ptr7 = 0, $rem = i64(), $rem4 = 0, $s$addr$0$lcssa = 0, $s$addr$013 = 0, $s$addr$1$lcssa = 0, $s$addr$19 = 0, $tobool8 = 0;
 var $x$addr$0$lcssa$off0 = 0, $x$addr$012 = i64(), $y$010 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp11 = i64_ugt($x,i64_const(4294967295,0));
 $extract$t = i64_trunc($x);
 if ($cmp11) {
  $s$addr$013 = $s;$x$addr$012 = $x;
  while(1) {
   $rem = i64_urem($x$addr$012,i64_const(10,0));
   $add = i64_or($rem,i64_const(48,0));
   $conv = i64_trunc($add)&255;
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
   $0 = ($y$010>>>0)<(10);
   if ($0) {
    $s$addr$1$lcssa = $incdec$ptr7;
    break;
   } else {
    $s$addr$19 = $incdec$ptr7;$y$010 = $div9;
   }
  }
 }
 return ($s$addr$1$lcssa|0);
}
function _pad($f,$c,$w,$l,$fl) {
 $f = $f|0;
 $c = $c|0;
 $w = $w|0;
 $l = $l|0;
 $fl = $fl|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $and = 0, $and$i = 0, $and$i15 = 0, $cmp = 0, $cmp1 = 0, $cmp3 = 0, $cmp314 = 0, $cond = 0, $l$addr$0$lcssa21 = 0, $l$addr$017 = 0, $or$cond = 0, $pad = 0, $sub = 0, $sub6 = 0, $tobool = 0;
 var $tobool$i = 0, $tobool$i16 = 0, $tobool$i18 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
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
   $0 = load4($f);
   $and$i15 = $0 & 32;
   $tobool$i16 = ($and$i15|0)==(0);
   if ($cmp314) {
    $3 = $0;$l$addr$017 = $sub;$tobool$i18 = $tobool$i16;
    while(1) {
     if ($tobool$i18) {
      ___fwritex($pad,256,$f);
      $$pre = load4($f);
      $1 = $$pre;
     } else {
      $1 = $3;
     }
     $sub6 = (($l$addr$017) + -256)|0;
     $cmp3 = ($sub6>>>0)>(255);
     $and$i = $1 & 32;
     $tobool$i = ($and$i|0)==(0);
     if ($cmp3) {
      $3 = $1;$l$addr$017 = $sub6;$tobool$i18 = $tobool$i;
     } else {
      break;
     }
    }
    $2 = $sub & 255;
    if ($tobool$i) {
     $l$addr$0$lcssa21 = $2;
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
   ___fwritex($pad,$l$addr$0$lcssa21,$f);
  }
 } while(0);
 STACKTOP = sp;return;
}
function _frexp($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $0 = i64(), $1 = 0, $2 = 0.0, $and10 = i64(), $call = 0.0, $conv = 0, $mul = 0.0, $or = i64(), $retval$0 = 0.0, $shr = i64(), $shr$tr = 0, $storemerge = 0, $sub = 0, $sub8 = 0, $tobool1 = 0, $trunc = 0, $trunc$clear = 0, $x$addr$0 = 0.0, label = 0, sp = 0;
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
  $shr$tr = i64_trunc($shr);
  $conv = $shr$tr & 2047;
  $sub8 = (($conv) + -1022)|0;
  store4($e,$sub8);
  $and10 = i64_and($0,i64_const(4294967295,2148532223));
  $or = i64_or($and10,i64_const(0,1071644672));
  $2 = i64_bc2d($or);
  $retval$0 = $2;
 }
 }
 return (+$retval$0);
}
function _wcrtomb($s,$wc) {
 $s = $s|0;
 $wc = $wc|0;
 var $0 = 0, $and = 0, $and19 = 0, $and23 = 0, $and36 = 0, $and41 = 0, $and45 = 0, $cmp = 0, $cmp11 = 0, $cmp2 = 0, $cmp28 = 0, $cmp9 = 0, $conv = 0, $conv16 = 0, $conv21 = 0, $conv25 = 0, $conv33 = 0, $conv38 = 0, $conv43 = 0, $conv47 = 0;
 var $conv5 = 0, $conv7 = 0, $incdec$ptr = 0, $incdec$ptr17 = 0, $incdec$ptr22 = 0, $incdec$ptr34 = 0, $incdec$ptr39 = 0, $incdec$ptr44 = 0, $or = 0, $or$cond = 0, $or15 = 0, $or20 = 0, $or24 = 0, $or32 = 0, $or37 = 0, $or42 = 0, $or46 = 0, $or6 = 0, $retval$0 = 0, $shr1426 = 0;
 var $shr1827 = 0, $shr28 = 0, $shr3123 = 0, $shr3524 = 0, $shr4025 = 0, $sub27 = 0, $tobool = 0, label = 0, sp = 0;
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
   $cmp2 = ($wc>>>0)<(2048);
   if ($cmp2) {
    $shr28 = $wc >>> 6;
    $or = $shr28 | 192;
    $conv5 = $or&255;
    $incdec$ptr = ((($s)) + 1|0);
    store1($s,$conv5);
    $and = $wc & 63;
    $or6 = $and | 128;
    $conv7 = $or6&255;
    store1($incdec$ptr,$conv7);
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
    store1($s,$conv16);
    $shr1827 = $wc >>> 6;
    $and19 = $shr1827 & 63;
    $or20 = $and19 | 128;
    $conv21 = $or20&255;
    $incdec$ptr22 = ((($s)) + 2|0);
    store1($incdec$ptr17,$conv21);
    $and23 = $wc & 63;
    $or24 = $and23 | 128;
    $conv25 = $or24&255;
    store1($incdec$ptr22,$conv25);
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
    store1($s,$conv33);
    $shr3524 = $wc >>> 12;
    $and36 = $shr3524 & 63;
    $or37 = $and36 | 128;
    $conv38 = $or37&255;
    $incdec$ptr39 = ((($s)) + 2|0);
    store1($incdec$ptr34,$conv38);
    $shr4025 = $wc >>> 6;
    $and41 = $shr4025 & 63;
    $or42 = $and41 | 128;
    $conv43 = $or42&255;
    $incdec$ptr44 = ((($s)) + 3|0);
    store1($incdec$ptr39,$conv43);
    $and45 = $wc & 63;
    $or46 = $and45 | 128;
    $conv47 = $or46&255;
    store1($incdec$ptr44,$conv47);
    $retval$0 = 4;
    break;
   } else {
    store4(7276,84);
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
  $3 = $2;
  $buf_size = ((($f)) + 48|0);
  $4 = load4($buf_size);
  $add$ptr = (($3) + ($4)|0);
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
function ___overflow() {
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $c = 0, $call = 0, $call13 = 0, $cmp = 0, $cmp14 = 0, $cmp7 = 0, $conv18 = 0, $incdec$ptr = 0, $or$cond = 0, $retval$0 = 0, $tobool = 0, $tobool1 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $c = sp;
 store1($c,10);
 $0 = load4((1744));
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite(1728)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4((1744));
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
   $1 = load4((1748));
   $cmp = ($1>>>0)>=($2>>>0);
   $3 = load1((1803));
   $cmp7 = ($3<<24>>24)==(10);
   $or$cond = $cmp | $cmp7;
   if (!($or$cond)) {
    $incdec$ptr = ((($1)) + 1|0);
    store4((1748),$incdec$ptr);
    store1($1,10);
    $retval$0 = 10;
    break;
   }
   $4 = load4((1764));
   $call13 = (FUNCTION_TABLE_iiii[$4 & 7](1728,$c,1)|0);
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
 var $bk74$i$i = 0, $bk78 = 0, $bk82$i$i = 0, $br$2$ph$i = 0, $call107$i = 0, $call131$i = 0, $call132$i = 0, $call37$i = 0, $call68$i = 0, $call83$i = 0, $child$i$i = 0, $child166$i$i = 0, $child289$i$i = 0, $child357$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i11$i = 0, $cmp$i140 = 0, $cmp$i179 = 0;
 var $cmp$i18$i = 0, $cmp$i2$i$i = 0, $cmp$i23$i = 0, $cmp$i51$i = 0, $cmp$i9$i = 0, $cmp1 = 0, $cmp1$i = 0, $cmp10 = 0, $cmp100$i$i = 0, $cmp102$i = 0, $cmp104$i$i = 0, $cmp105$i = 0, $cmp106$i$i = 0, $cmp107$i = 0, $cmp107$i157 = 0, $cmp108$i = 0, $cmp108$i$i = 0, $cmp112$i$i = 0, $cmp113 = 0, $cmp114$i = 0;
 var $cmp116$i = 0, $cmp118$i = 0, $cmp119$i = 0, $cmp12$i = 0, $cmp120$i$i = 0, $cmp120$i42$i = 0, $cmp121$i = 0, $cmp123$i = 0, $cmp124$i$i = 0, $cmp126$i = 0, $cmp127$i = 0, $cmp128 = 0, $cmp128$i = 0, $cmp128$i$i = 0, $cmp130$i = 0, $cmp133$i = 0, $cmp133$i$i = 0, $cmp133$i197 = 0, $cmp135$i = 0, $cmp137$i = 0;
 var $cmp137$i$i = 0, $cmp137$i198 = 0, $cmp138$i = 0, $cmp139 = 0, $cmp140$i = 0, $cmp141$not$i = 0, $cmp142$i = 0, $cmp144$i$i = 0, $cmp146 = 0, $cmp15 = 0, $cmp15$i = 0, $cmp151$i = 0, $cmp152$i = 0, $cmp153$i$i = 0, $cmp155$i = 0, $cmp156 = 0, $cmp156$i = 0, $cmp156$i$i = 0, $cmp157$i = 0, $cmp159$i = 0;
 var $cmp159$i200 = 0, $cmp16 = 0, $cmp160$i$i = 0, $cmp162 = 0, $cmp162$i = 0, $cmp162$i201 = 0, $cmp166$i = 0, $cmp168$i$i = 0, $cmp171$i = 0, $cmp172$i$i = 0, $cmp174$i = 0, $cmp180$i = 0, $cmp185$i = 0, $cmp185$i$i = 0, $cmp186 = 0, $cmp186$i = 0, $cmp189$i$i = 0, $cmp19$i = 0, $cmp190$i = 0, $cmp191$i = 0;
 var $cmp198$i = 0, $cmp2$i$i = 0, $cmp2$i$i$i = 0, $cmp20$i$i = 0, $cmp203$i = 0, $cmp205$i = 0, $cmp208$i = 0, $cmp209$i = 0, $cmp21$i = 0, $cmp215$i$i = 0, $cmp217$i = 0, $cmp218$i = 0, $cmp221$i = 0, $cmp224$i = 0, $cmp228$i = 0, $cmp229$i = 0, $cmp233$i = 0, $cmp236$i$i = 0, $cmp24$i = 0, $cmp24$i$i = 0;
 var $cmp246$i = 0, $cmp250$i = 0, $cmp254$i$i = 0, $cmp257$i = 0, $cmp258$i$i = 0, $cmp26$i = 0, $cmp265$i = 0, $cmp27$i$i = 0, $cmp28$i = 0, $cmp28$i$i = 0, $cmp284$i = 0, $cmp29 = 0, $cmp3$i$i = 0, $cmp301$i = 0, $cmp306$i$i = 0, $cmp31 = 0, $cmp319$i = 0, $cmp319$i$i = 0, $cmp32$i = 0, $cmp32$i186 = 0;
 var $cmp323$i = 0, $cmp327$i$i = 0, $cmp33$i = 0, $cmp332$i$i = 0, $cmp34$i = 0, $cmp34$i$i = 0, $cmp35$i = 0, $cmp350$i$i = 0, $cmp36$i = 0, $cmp36$i$i = 0, $cmp374$i = 0, $cmp38$i = 0, $cmp38$i$i = 0, $cmp388$i = 0, $cmp396$i = 0, $cmp40$i = 0, $cmp401$i = 0, $cmp41$i$i = 0, $cmp42$i$i = 0, $cmp422$i = 0;
 var $cmp43$i = 0, $cmp44$i$i = 0, $cmp45$i = 0, $cmp45$i155 = 0, $cmp46$i = 0, $cmp46$i$i = 0, $cmp46$i38$i = 0, $cmp48$i = 0, $cmp49$i = 0, $cmp5 = 0, $cmp51$i = 0, $cmp54$i$i = 0, $cmp55$i = 0, $cmp55$i187 = 0, $cmp57$i = 0, $cmp57$i$i = 0, $cmp57$i188 = 0, $cmp59$i$i = 0, $cmp60$i = 0, $cmp60$i$i = 0;
 var $cmp62$i = 0, $cmp63$i = 0, $cmp63$i$i = 0, $cmp65$i = 0, $cmp66$i = 0, $cmp66$i191 = 0, $cmp69$i = 0, $cmp7$i$i = 0, $cmp70 = 0, $cmp72$i = 0, $cmp75$i$i = 0, $cmp76 = 0, $cmp76$i = 0, $cmp79 = 0, $cmp81$i = 0, $cmp81$i$i = 0, $cmp81$i192 = 0, $cmp83$i$i = 0, $cmp85$i = 0, $cmp86$i$i = 0;
 var $cmp89$i = 0, $cmp9$i$i = 0, $cmp90$i = 0, $cmp91$i = 0, $cmp93$i = 0, $cmp95$i = 0, $cmp96$i = 0, $cmp97$i = 0, $cmp97$i$i = 0, $cmp977$i = 0, $cmp99 = 0, $cond = 0, $cond$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i19$i = 0, $cond$i25$i = 0, $cond$i53$i = 0, $cond$v$0$i = 0, $cond115$i$i = 0;
 var $cond13$i$i = 0, $cond15$i$i = 0, $cond2$i = 0, $cond2$i$i = 0, $cond3$i = 0, $cond315$i$i = 0, $cond383$i = 0, $cond4$i = 0, $exitcond$i$i = 0, $fd$i = 0, $fd$i$i = 0, $fd$i164 = 0, $fd103$i$i = 0, $fd123 = 0, $fd139$i = 0, $fd140$i$i = 0, $fd148$i$i = 0, $fd160$i$i = 0, $fd219$i = 0, $fd247$i$i = 0;
 var $fd303$i$i = 0, $fd312$i = 0, $fd339$i$i = 0, $fd344$i$i = 0, $fd359$i$i = 0, $fd371$i = 0, $fd408$i = 0, $fd416$i = 0, $fd431$i = 0, $fd50$i = 0, $fd54$i$i = 0, $fd59$i$i = 0, $fd68$pre$phi$i$iZ2D = 0, $fd69 = 0, $fd78$i$i = 0, $fd85$i$i = 0, $fd9 = 0, $head = 0, $head$i = 0, $head$i$i = 0;
 var $head$i$i$i = 0, $head$i154 = 0, $head$i20$i = 0, $head$i31$i = 0, $head$i57$i = 0, $head118$i$i = 0, $head168 = 0, $head173 = 0, $head177 = 0, $head179 = 0, $head179$i = 0, $head182$i = 0, $head187$i = 0, $head189$i = 0, $head195 = 0, $head198 = 0, $head208$i$i = 0, $head211$i$i = 0, $head23$i$i = 0, $head25 = 0;
 var $head265$i = 0, $head268$i = 0, $head271$i = 0, $head274$i = 0, $head279$i = 0, $head281$i = 0, $head29$i = 0, $head29$i$i = 0, $head317$i$i = 0, $head32$i$i = 0, $head34$i$i = 0, $head386$i = 0, $head7$i$i = 0, $head7$i$i$i = 0, $head7$i59$i = 0, $head94 = 0, $head97 = 0, $head99$i = 0, $i$01$i$i = 0, $idx$0$i = 0;
 var $inc$i$i = 0, $index$i = 0, $index$i$i = 0, $index$i172 = 0, $index$i43$i = 0, $index288$i$i = 0, $index356$i = 0, $magic$i$i = 0, $nb$0 = 0, $neg = 0, $neg$i = 0, $neg$i$i = 0, $neg$i173 = 0, $neg$i183 = 0, $neg103$i = 0, $neg13 = 0, $neg132$i$i = 0, $neg48$i = 0, $neg73 = 0, $next$i = 0;
 var $next$i$i = 0, $next$i$i$i = 0, $next231$i = 0, $not$cmp150$i$i = 0, $not$cmp346$i$i = 0, $not$cmp418$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i189 = 0, $or$cond1$i = 0, $or$cond1$i185 = 0, $or$cond2$i = 0, $or$cond3$i = 0, $or$cond4$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond8$i = 0, $or$cond95$i = 0, $or$i = 0, $or$i$i = 0;
 var $or$i$i$i = 0, $or$i196 = 0, $or$i56$i = 0, $or101$i$i = 0, $or110 = 0, $or167 = 0, $or172 = 0, $or176 = 0, $or178$i = 0, $or180 = 0, $or183$i = 0, $or186$i = 0, $or188$i = 0, $or19$i$i = 0, $or194 = 0, $or197 = 0, $or204$i = 0, $or210$i$i = 0, $or22$i$i = 0, $or23 = 0;
 var $or232$i$i = 0, $or26 = 0, $or264$i = 0, $or267$i = 0, $or270$i = 0, $or275$i = 0, $or278$i = 0, $or28$i$i = 0, $or280$i = 0, $or297$i = 0, $or300$i$i = 0, $or33$i$i = 0, $or368$i = 0, $or40 = 0, $or44$i$i = 0, $or93 = 0, $or96 = 0, $p$0$i$i = 0, $parent$i = 0, $parent$i$i = 0;
 var $parent$i162 = 0, $parent$i40$i = 0, $parent135$i = 0, $parent138$i$i = 0, $parent149$i = 0, $parent162$i$i = 0, $parent165$i$i = 0, $parent166$i = 0, $parent179$i$i = 0, $parent196$i$i = 0, $parent226$i = 0, $parent240$i = 0, $parent257$i = 0, $parent301$i$i = 0, $parent337$i$i = 0, $parent361$i$i = 0, $parent369$i = 0, $parent406$i = 0, $parent433$i = 0, $qsize$0$i$i = 0;
 var $retval$0 = 0, $rsize$0$i = 0, $rsize$0$i152 = 0, $rsize$1$i = 0, $rsize$3$i = 0, $rsize$4$lcssa$i = 0, $rsize$49$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sflags193$i = 0, $sflags235$i = 0, $shl = 0, $shl$i = 0, $shl$i$i = 0, $shl$i13$i = 0, $shl$i144 = 0, $shl$i36$i = 0, $shl102 = 0, $shl105 = 0, $shl116$i$i = 0;
 var $shl12 = 0, $shl127$i$i = 0, $shl131$i$i = 0, $shl15$i = 0, $shl18$i = 0, $shl192$i = 0, $shl195$i = 0, $shl198$i = 0, $shl22 = 0, $shl221$i$i = 0, $shl226$i$i = 0, $shl265$i$i = 0, $shl270$i$i = 0, $shl276$i$i = 0, $shl279$i$i = 0, $shl288$i = 0, $shl291$i = 0, $shl294$i$i = 0, $shl31$i = 0, $shl316$i$i = 0;
 var $shl326$i$i = 0, $shl333$i = 0, $shl338$i = 0, $shl344$i = 0, $shl347$i = 0, $shl35 = 0, $shl362$i = 0, $shl37 = 0, $shl384$i = 0, $shl39$i$i = 0, $shl395$i = 0, $shl48$i$i = 0, $shl52$i = 0, $shl60$i = 0, $shl65 = 0, $shl70$i$i = 0, $shl72 = 0, $shl75$i$i = 0, $shl81$i$i = 0, $shl84$i$i = 0;
 var $shl9$i = 0, $shl90 = 0, $shl95$i$i = 0, $shr = 0, $shr$i = 0, $shr$i$i = 0, $shr$i139 = 0, $shr$i34$i = 0, $shr101 = 0, $shr11$i = 0, $shr11$i147 = 0, $shr110$i$i = 0, $shr12$i = 0, $shr123$i$i = 0, $shr15$i = 0, $shr16$i = 0, $shr16$i148 = 0, $shr19$i = 0, $shr194$i = 0, $shr20$i = 0;
 var $shr214$i$i = 0, $shr253$i$i = 0, $shr263$i$i = 0, $shr267$i$i = 0, $shr27$i = 0, $shr272$i$i = 0, $shr277$i$i = 0, $shr281$i$i = 0, $shr283$i = 0, $shr3 = 0, $shr310$i$i = 0, $shr318$i = 0, $shr322$i$i = 0, $shr330$i = 0, $shr335$i = 0, $shr340$i = 0, $shr345$i = 0, $shr349$i = 0, $shr378$i = 0, $shr391$i = 0;
 var $shr4$i = 0, $shr41$i = 0, $shr45 = 0, $shr47 = 0, $shr48 = 0, $shr5$i = 0, $shr5$i142 = 0, $shr51 = 0, $shr52 = 0, $shr55 = 0, $shr56 = 0, $shr58$i$i = 0, $shr59 = 0, $shr60 = 0, $shr63 = 0, $shr68$i$i = 0, $shr7$i = 0, $shr7$i145 = 0, $shr72$i = 0, $shr72$i$i = 0;
 var $shr75$i = 0, $shr76$i = 0, $shr77$i$i = 0, $shr79$i = 0, $shr8$i = 0, $shr80$i = 0, $shr82$i$i = 0, $shr83$i = 0, $shr84$i = 0, $shr86$i$i = 0, $shr87$i = 0, $shr88$i = 0, $shr91$i = 0, $size$i$i = 0, $size$i$i$i = 0, $size188$i = 0, $size245$i = 0, $sizebits$0$i = 0, $sizebits$0$shl52$i = 0, $sp$0$i$i = 0;
 var $sp$0$i$i$i = 0, $sp$0104$i = 0, $sp$1103$i = 0, $ssize$2$ph$i = 0, $ssize$5$i = 0, $sub = 0, $sub$i = 0, $sub$i138 = 0, $sub$i182 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$lhs$cast$i28$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$rhs$cast$i29$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i30$i = 0, $sub10$i = 0, $sub101$i = 0;
 var $sub101$rsize$4$i = 0, $sub112$i = 0, $sub113$i$i = 0, $sub118$i = 0, $sub14$i = 0, $sub16$i$i = 0, $sub160 = 0, $sub172$i = 0, $sub18$i$i = 0, $sub190 = 0, $sub2$i = 0, $sub22$i = 0, $sub260$i = 0, $sub262$i$i = 0, $sub266$i$i = 0, $sub271$i$i = 0, $sub275$i$i = 0, $sub30$i = 0, $sub31$i = 0, $sub31$rsize$0$i = 0;
 var $sub313$i$i = 0, $sub329$i = 0, $sub33$i = 0, $sub334$i = 0, $sub339$i = 0, $sub343$i = 0, $sub381$i = 0, $sub4$i = 0, $sub41$i = 0, $sub42 = 0, $sub44 = 0, $sub5$i$i = 0, $sub5$i$i$i = 0, $sub5$i55$i = 0, $sub50$i = 0, $sub6$i = 0, $sub63$i = 0, $sub67$i = 0, $sub67$i$i = 0, $sub70$i = 0;
 var $sub71$i$i = 0, $sub76$i$i = 0, $sub80$i$i = 0, $sub91 = 0, $sub99$i = 0, $t$0$i = 0, $t$0$i151 = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$48$i = 0, $tbase$793$i = 0, $tobool$i$i = 0, $tobool107 = 0, $tobool195$i = 0, $tobool200$i = 0, $tobool228$i$i = 0, $tobool237$i = 0, $tobool293$i = 0, $tobool296$i$i = 0;
 var $tobool30$i = 0, $tobool364$i = 0, $tobool97$i$i = 0, $tsize$792$i = 0, $v$0$i = 0, $v$0$i153 = 0, $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$410$i = 0, $xor$i$i = 0, label = 0, sp = 0;
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
   $0 = load4(7280);
   $shr3 = $0 >>> $shr;
   $and4 = $shr3 & 3;
   $cmp5 = ($and4|0)==(0);
   if (!($cmp5)) {
    $neg = $shr3 & 1;
    $and7 = $neg ^ 1;
    $add8 = (($and7) + ($shr))|0;
    $shl = $add8 << 1;
    $arrayidx = (7320 + ($shl<<2)|0);
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
      store4(7280,$and14);
     } else {
      $4 = load4((7296));
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
   $7 = load4((7288));
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
     $arrayidx66 = (7320 + ($shl65<<2)|0);
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
       store4(7280,$and74);
       $14 = $and74;
      } else {
       $11 = load4((7296));
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
      $13 = load4((7300));
      $shr101 = $7 >>> 3;
      $shl102 = $shr101 << 1;
      $arrayidx103 = (7320 + ($shl102<<2)|0);
      $shl105 = 1 << $shr101;
      $and106 = $14 & $shl105;
      $tobool107 = ($and106|0)==(0);
      if ($tobool107) {
       $or110 = $14 | $shl105;
       store4(7280,$or110);
       $$pre = ((($arrayidx103)) + 8|0);
       $$pre$phiZ2D = $$pre;$F104$0 = $arrayidx103;
      } else {
       $15 = ((($arrayidx103)) + 8|0);
       $16 = load4($15);
       $17 = load4((7296));
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
     store4((7288),$sub91);
     store4((7300),$add$ptr95);
     $retval$0 = $fd69;
     STACKTOP = sp;return ($retval$0|0);
    }
    $18 = load4((7284));
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
     $arrayidx$i = (7584 + ($add20$i<<2)|0);
     $19 = load4($arrayidx$i);
     $head$i = ((($19)) + 4|0);
     $20 = load4($head$i);
     $and21$i = $20 & -8;
     $sub22$i = (($and21$i) - ($cond))|0;
     $rsize$0$i = $sub22$i;$t$0$i = $19;$v$0$i = $19;
     while(1) {
      $arrayidx23$i = ((($t$0$i)) + 16|0);
      $21 = load4($arrayidx23$i);
      $cmp$i = ($21|0)==(0|0);
      if ($cmp$i) {
       $arrayidx27$i = ((($t$0$i)) + 20|0);
       $22 = load4($arrayidx27$i);
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
      $23 = load4($head29$i);
      $and30$i = $23 & -8;
      $sub31$i = (($and30$i) - ($cond))|0;
      $cmp32$i = ($sub31$i>>>0)<($rsize$0$i>>>0);
      $sub31$rsize$0$i = $cmp32$i ? $sub31$i : $rsize$0$i;
      $cond$v$0$i = $cmp32$i ? $cond4$i : $v$0$i;
      $rsize$0$i = $sub31$rsize$0$i;$t$0$i = $cond4$i;$v$0$i = $cond$v$0$i;
     }
     $24 = load4((7296));
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
     $25 = load4($parent$i);
     $bk$i = ((($v$0$i)) + 12|0);
     $26 = load4($bk$i);
     $cmp40$i = ($26|0)==($v$0$i|0);
     do {
      if ($cmp40$i) {
       $arrayidx61$i = ((($v$0$i)) + 20|0);
       $30 = load4($arrayidx61$i);
       $cmp62$i = ($30|0)==(0|0);
       if ($cmp62$i) {
        $arrayidx65$i = ((($v$0$i)) + 16|0);
        $31 = load4($arrayidx65$i);
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
        $32 = load4($arrayidx71$i);
        $cmp72$i = ($32|0)==(0|0);
        if (!($cmp72$i)) {
         $R$1$i = $32;$RP$1$i = $arrayidx71$i;
         continue;
        }
        $arrayidx75$i = ((($R$1$i)) + 16|0);
        $33 = load4($arrayidx75$i);
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
        store4($RP$1$i,0);
        $R$3$i = $R$1$i;
        break;
       }
      } else {
       $fd$i = ((($v$0$i)) + 8|0);
       $27 = load4($fd$i);
       $cmp45$i = ($27>>>0)<($24>>>0);
       if ($cmp45$i) {
        _abort();
        // unreachable;
       }
       $bk47$i = ((($27)) + 12|0);
       $28 = load4($bk47$i);
       $cmp48$i = ($28|0)==($v$0$i|0);
       if (!($cmp48$i)) {
        _abort();
        // unreachable;
       }
       $fd50$i = ((($26)) + 8|0);
       $29 = load4($fd50$i);
       $cmp51$i = ($29|0)==($v$0$i|0);
       if ($cmp51$i) {
        store4($bk47$i,$26);
        store4($fd50$i,$27);
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
       $34 = load4($index$i);
       $arrayidx94$i = (7584 + ($34<<2)|0);
       $35 = load4($arrayidx94$i);
       $cmp95$i = ($v$0$i|0)==($35|0);
       if ($cmp95$i) {
        store4($arrayidx94$i,$R$3$i);
        $cond2$i = ($R$3$i|0)==(0|0);
        if ($cond2$i) {
         $shl$i = 1 << $34;
         $neg$i = $shl$i ^ -1;
         $and103$i = $18 & $neg$i;
         store4((7284),$and103$i);
         break;
        }
       } else {
        $36 = load4((7296));
        $cmp107$i = ($25>>>0)<($36>>>0);
        if ($cmp107$i) {
         _abort();
         // unreachable;
        }
        $arrayidx113$i = ((($25)) + 16|0);
        $37 = load4($arrayidx113$i);
        $cmp114$i = ($37|0)==($v$0$i|0);
        if ($cmp114$i) {
         store4($arrayidx113$i,$R$3$i);
        } else {
         $arrayidx121$i = ((($25)) + 20|0);
         store4($arrayidx121$i,$R$3$i);
        }
        $cmp126$i = ($R$3$i|0)==(0|0);
        if ($cmp126$i) {
         break;
        }
       }
       $38 = load4((7296));
       $cmp130$i = ($R$3$i>>>0)<($38>>>0);
       if ($cmp130$i) {
        _abort();
        // unreachable;
       }
       $parent135$i = ((($R$3$i)) + 24|0);
       store4($parent135$i,$25);
       $arrayidx137$i = ((($v$0$i)) + 16|0);
       $39 = load4($arrayidx137$i);
       $cmp138$i = ($39|0)==(0|0);
       do {
        if (!($cmp138$i)) {
         $cmp142$i = ($39>>>0)<($38>>>0);
         if ($cmp142$i) {
          _abort();
          // unreachable;
         } else {
          $arrayidx148$i = ((($R$3$i)) + 16|0);
          store4($arrayidx148$i,$39);
          $parent149$i = ((($39)) + 24|0);
          store4($parent149$i,$R$3$i);
          break;
         }
        }
       } while(0);
       $arrayidx154$i = ((($v$0$i)) + 20|0);
       $40 = load4($arrayidx154$i);
       $cmp155$i = ($40|0)==(0|0);
       if (!($cmp155$i)) {
        $41 = load4((7296));
        $cmp159$i = ($40>>>0)<($41>>>0);
        if ($cmp159$i) {
         _abort();
         // unreachable;
        } else {
         $arrayidx165$i = ((($R$3$i)) + 20|0);
         store4($arrayidx165$i,$40);
         $parent166$i = ((($40)) + 24|0);
         store4($parent166$i,$R$3$i);
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
      store4($head179$i,$or178$i);
      $add$ptr181$i = (($v$0$i) + ($add177$i)|0);
      $head182$i = ((($add$ptr181$i)) + 4|0);
      $42 = load4($head182$i);
      $or183$i = $42 | 1;
      store4($head182$i,$or183$i);
     } else {
      $or186$i = $cond | 3;
      $head187$i = ((($v$0$i)) + 4|0);
      store4($head187$i,$or186$i);
      $or188$i = $rsize$0$i | 1;
      $head189$i = ((($add$ptr$i)) + 4|0);
      store4($head189$i,$or188$i);
      $add$ptr190$i = (($add$ptr$i) + ($rsize$0$i)|0);
      store4($add$ptr190$i,$rsize$0$i);
      $cmp191$i = ($7|0)==(0);
      if (!($cmp191$i)) {
       $43 = load4((7300));
       $shr194$i = $7 >>> 3;
       $shl195$i = $shr194$i << 1;
       $arrayidx196$i = (7320 + ($shl195$i<<2)|0);
       $shl198$i = 1 << $shr194$i;
       $and199$i = $shl198$i & $0;
       $tobool200$i = ($and199$i|0)==(0);
       if ($tobool200$i) {
        $or204$i = $shl198$i | $0;
        store4(7280,$or204$i);
        $$pre$i = ((($arrayidx196$i)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F197$0$i = $arrayidx196$i;
       } else {
        $44 = ((($arrayidx196$i)) + 8|0);
        $45 = load4($44);
        $46 = load4((7296));
        $cmp208$i = ($45>>>0)<($46>>>0);
        if ($cmp208$i) {
         _abort();
         // unreachable;
        } else {
         $$pre$phi$iZ2D = $44;$F197$0$i = $45;
        }
       }
       store4($$pre$phi$iZ2D,$43);
       $bk218$i = ((($F197$0$i)) + 12|0);
       store4($bk218$i,$43);
       $fd219$i = ((($43)) + 8|0);
       store4($fd219$i,$F197$0$i);
       $bk220$i = ((($43)) + 12|0);
       store4($bk220$i,$arrayidx196$i);
      }
      store4((7288),$rsize$0$i);
      store4((7300),$add$ptr$i);
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
    $47 = load4((7284));
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
     $arrayidx$i150 = (7584 + ($idx$0$i<<2)|0);
     $48 = load4($arrayidx$i150);
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
        $49 = load4($head$i154);
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
        $50 = load4($arrayidx40$i);
        $shr41$i = $sizebits$0$i >>> 31;
        $arrayidx44$i = (((($t$0$i151)) + 16|0) + ($shr41$i<<2)|0);
        $51 = load4($arrayidx44$i);
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
       $and64$i = $or$i & $47;
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
       $arrayidx94$i156 = (7584 + ($add92$i<<2)|0);
       $53 = load4($arrayidx94$i156);
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
       $54 = load4($head99$i);
       $and100$i = $54 & -8;
       $sub101$i = (($and100$i) - ($and145))|0;
       $cmp102$i = ($sub101$i>>>0)<($rsize$49$i>>>0);
       $sub101$rsize$4$i = $cmp102$i ? $sub101$i : $rsize$49$i;
       $t$4$v$4$i = $cmp102$i ? $t$48$i : $v$410$i;
       $arrayidx106$i = ((($t$48$i)) + 16|0);
       $55 = load4($arrayidx106$i);
       $cmp107$i157 = ($55|0)==(0|0);
       if (!($cmp107$i157)) {
        $rsize$49$i = $sub101$rsize$4$i;$t$48$i = $55;$v$410$i = $t$4$v$4$i;
        label = 90;
        continue;
       }
       $arrayidx113$i159 = ((($t$48$i)) + 20|0);
       $56 = load4($arrayidx113$i159);
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
      $57 = load4((7288));
      $sub118$i = (($57) - ($and145))|0;
      $cmp119$i = ($rsize$4$lcssa$i>>>0)<($sub118$i>>>0);
      if ($cmp119$i) {
       $58 = load4((7296));
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
       $59 = load4($parent$i162);
       $bk$i163 = ((($v$4$lcssa$i)) + 12|0);
       $60 = load4($bk$i163);
       $cmp128$i = ($60|0)==($v$4$lcssa$i|0);
       do {
        if ($cmp128$i) {
         $arrayidx151$i = ((($v$4$lcssa$i)) + 20|0);
         $64 = load4($arrayidx151$i);
         $cmp152$i = ($64|0)==(0|0);
         if ($cmp152$i) {
          $arrayidx155$i = ((($v$4$lcssa$i)) + 16|0);
          $65 = load4($arrayidx155$i);
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
          $66 = load4($arrayidx161$i);
          $cmp162$i = ($66|0)==(0|0);
          if (!($cmp162$i)) {
           $R$1$i168 = $66;$RP$1$i167 = $arrayidx161$i;
           continue;
          }
          $arrayidx165$i169 = ((($R$1$i168)) + 16|0);
          $67 = load4($arrayidx165$i169);
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
          store4($RP$1$i167,0);
          $R$3$i171 = $R$1$i168;
          break;
         }
        } else {
         $fd$i164 = ((($v$4$lcssa$i)) + 8|0);
         $61 = load4($fd$i164);
         $cmp133$i = ($61>>>0)<($58>>>0);
         if ($cmp133$i) {
          _abort();
          // unreachable;
         }
         $bk136$i = ((($61)) + 12|0);
         $62 = load4($bk136$i);
         $cmp137$i = ($62|0)==($v$4$lcssa$i|0);
         if (!($cmp137$i)) {
          _abort();
          // unreachable;
         }
         $fd139$i = ((($60)) + 8|0);
         $63 = load4($fd139$i);
         $cmp140$i = ($63|0)==($v$4$lcssa$i|0);
         if ($cmp140$i) {
          store4($bk136$i,$60);
          store4($fd139$i,$61);
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
         $68 = load4($index$i172);
         $arrayidx184$i = (7584 + ($68<<2)|0);
         $69 = load4($arrayidx184$i);
         $cmp185$i = ($v$4$lcssa$i|0)==($69|0);
         if ($cmp185$i) {
          store4($arrayidx184$i,$R$3$i171);
          $cond3$i = ($R$3$i171|0)==(0|0);
          if ($cond3$i) {
           $shl192$i = 1 << $68;
           $neg$i173 = $shl192$i ^ -1;
           $and194$i = $47 & $neg$i173;
           store4((7284),$and194$i);
           $81 = $and194$i;
           break;
          }
         } else {
          $70 = load4((7296));
          $cmp198$i = ($59>>>0)<($70>>>0);
          if ($cmp198$i) {
           _abort();
           // unreachable;
          }
          $arrayidx204$i = ((($59)) + 16|0);
          $71 = load4($arrayidx204$i);
          $cmp205$i = ($71|0)==($v$4$lcssa$i|0);
          if ($cmp205$i) {
           store4($arrayidx204$i,$R$3$i171);
          } else {
           $arrayidx212$i = ((($59)) + 20|0);
           store4($arrayidx212$i,$R$3$i171);
          }
          $cmp217$i = ($R$3$i171|0)==(0|0);
          if ($cmp217$i) {
           $81 = $47;
           break;
          }
         }
         $72 = load4((7296));
         $cmp221$i = ($R$3$i171>>>0)<($72>>>0);
         if ($cmp221$i) {
          _abort();
          // unreachable;
         }
         $parent226$i = ((($R$3$i171)) + 24|0);
         store4($parent226$i,$59);
         $arrayidx228$i = ((($v$4$lcssa$i)) + 16|0);
         $73 = load4($arrayidx228$i);
         $cmp229$i = ($73|0)==(0|0);
         do {
          if (!($cmp229$i)) {
           $cmp233$i = ($73>>>0)<($72>>>0);
           if ($cmp233$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx239$i = ((($R$3$i171)) + 16|0);
            store4($arrayidx239$i,$73);
            $parent240$i = ((($73)) + 24|0);
            store4($parent240$i,$R$3$i171);
            break;
           }
          }
         } while(0);
         $arrayidx245$i = ((($v$4$lcssa$i)) + 20|0);
         $74 = load4($arrayidx245$i);
         $cmp246$i = ($74|0)==(0|0);
         if ($cmp246$i) {
          $81 = $47;
         } else {
          $75 = load4((7296));
          $cmp250$i = ($74>>>0)<($75>>>0);
          if ($cmp250$i) {
           _abort();
           // unreachable;
          } else {
           $arrayidx256$i = ((($R$3$i171)) + 20|0);
           store4($arrayidx256$i,$74);
           $parent257$i = ((($74)) + 24|0);
           store4($parent257$i,$R$3$i171);
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
         store4($head271$i,$or270$i);
         $add$ptr273$i = (($v$4$lcssa$i) + ($add268$i)|0);
         $head274$i = ((($add$ptr273$i)) + 4|0);
         $76 = load4($head274$i);
         $or275$i = $76 | 1;
         store4($head274$i,$or275$i);
        } else {
         $or278$i = $and145 | 3;
         $head279$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head279$i,$or278$i);
         $or280$i = $rsize$4$lcssa$i | 1;
         $head281$i = ((($add$ptr$i161)) + 4|0);
         store4($head281$i,$or280$i);
         $add$ptr282$i = (($add$ptr$i161) + ($rsize$4$lcssa$i)|0);
         store4($add$ptr282$i,$rsize$4$lcssa$i);
         $shr283$i = $rsize$4$lcssa$i >>> 3;
         $cmp284$i = ($rsize$4$lcssa$i>>>0)<(256);
         if ($cmp284$i) {
          $shl288$i = $shr283$i << 1;
          $arrayidx289$i = (7320 + ($shl288$i<<2)|0);
          $77 = load4(7280);
          $shl291$i = 1 << $shr283$i;
          $and292$i = $77 & $shl291$i;
          $tobool293$i = ($and292$i|0)==(0);
          if ($tobool293$i) {
           $or297$i = $77 | $shl291$i;
           store4(7280,$or297$i);
           $$pre$i177 = ((($arrayidx289$i)) + 8|0);
           $$pre$phi$i178Z2D = $$pre$i177;$F290$0$i = $arrayidx289$i;
          } else {
           $78 = ((($arrayidx289$i)) + 8|0);
           $79 = load4($78);
           $80 = load4((7296));
           $cmp301$i = ($79>>>0)<($80>>>0);
           if ($cmp301$i) {
            _abort();
            // unreachable;
           } else {
            $$pre$phi$i178Z2D = $78;$F290$0$i = $79;
           }
          }
          store4($$pre$phi$i178Z2D,$add$ptr$i161);
          $bk311$i = ((($F290$0$i)) + 12|0);
          store4($bk311$i,$add$ptr$i161);
          $fd312$i = ((($add$ptr$i161)) + 8|0);
          store4($fd312$i,$F290$0$i);
          $bk313$i = ((($add$ptr$i161)) + 12|0);
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
         $arrayidx355$i = (7584 + ($I316$0$i<<2)|0);
         $index356$i = ((($add$ptr$i161)) + 28|0);
         store4($index356$i,$I316$0$i);
         $child357$i = ((($add$ptr$i161)) + 16|0);
         $arrayidx358$i = ((($child357$i)) + 4|0);
         store4($arrayidx358$i,0);
         store4($child357$i,0);
         $shl362$i = 1 << $I316$0$i;
         $and363$i = $shl362$i & $81;
         $tobool364$i = ($and363$i|0)==(0);
         if ($tobool364$i) {
          $or368$i = $shl362$i | $81;
          store4((7284),$or368$i);
          store4($arrayidx355$i,$add$ptr$i161);
          $parent369$i = ((($add$ptr$i161)) + 24|0);
          store4($parent369$i,$arrayidx355$i);
          $bk370$i = ((($add$ptr$i161)) + 12|0);
          store4($bk370$i,$add$ptr$i161);
          $fd371$i = ((($add$ptr$i161)) + 8|0);
          store4($fd371$i,$add$ptr$i161);
          break;
         }
         $82 = load4($arrayidx355$i);
         $cmp374$i = ($I316$0$i|0)==(31);
         $shr378$i = $I316$0$i >>> 1;
         $sub381$i = (25 - ($shr378$i))|0;
         $cond383$i = $cmp374$i ? 0 : $sub381$i;
         $shl384$i = $rsize$4$lcssa$i << $cond383$i;
         $K373$0$i = $shl384$i;$T$0$i = $82;
         while(1) {
          $head386$i = ((($T$0$i)) + 4|0);
          $83 = load4($head386$i);
          $and387$i = $83 & -8;
          $cmp388$i = ($and387$i|0)==($rsize$4$lcssa$i|0);
          if ($cmp388$i) {
           label = 148;
           break;
          }
          $shr391$i = $K373$0$i >>> 31;
          $arrayidx394$i = (((($T$0$i)) + 16|0) + ($shr391$i<<2)|0);
          $shl395$i = $K373$0$i << 1;
          $84 = load4($arrayidx394$i);
          $cmp396$i = ($84|0)==(0|0);
          if ($cmp396$i) {
           label = 145;
           break;
          } else {
           $K373$0$i = $shl395$i;$T$0$i = $84;
          }
         }
         if ((label|0) == 145) {
          $85 = load4((7296));
          $cmp401$i = ($arrayidx394$i>>>0)<($85>>>0);
          if ($cmp401$i) {
           _abort();
           // unreachable;
          } else {
           store4($arrayidx394$i,$add$ptr$i161);
           $parent406$i = ((($add$ptr$i161)) + 24|0);
           store4($parent406$i,$T$0$i);
           $bk407$i = ((($add$ptr$i161)) + 12|0);
           store4($bk407$i,$add$ptr$i161);
           $fd408$i = ((($add$ptr$i161)) + 8|0);
           store4($fd408$i,$add$ptr$i161);
           break;
          }
         }
         else if ((label|0) == 148) {
          $fd416$i = ((($T$0$i)) + 8|0);
          $86 = load4($fd416$i);
          $87 = load4((7296));
          $cmp422$i = ($86>>>0)>=($87>>>0);
          $not$cmp418$i = ($T$0$i>>>0)>=($87>>>0);
          $88 = $cmp422$i & $not$cmp418$i;
          if ($88) {
           $bk429$i = ((($86)) + 12|0);
           store4($bk429$i,$add$ptr$i161);
           store4($fd416$i,$add$ptr$i161);
           $fd431$i = ((($add$ptr$i161)) + 8|0);
           store4($fd431$i,$86);
           $bk432$i = ((($add$ptr$i161)) + 12|0);
           store4($bk432$i,$T$0$i);
           $parent433$i = ((($add$ptr$i161)) + 24|0);
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
 $89 = load4((7288));
 $cmp156 = ($89>>>0)<($nb$0>>>0);
 if (!($cmp156)) {
  $sub160 = (($89) - ($nb$0))|0;
  $90 = load4((7300));
  $cmp162 = ($sub160>>>0)>(15);
  if ($cmp162) {
   $add$ptr166 = (($90) + ($nb$0)|0);
   store4((7300),$add$ptr166);
   store4((7288),$sub160);
   $or167 = $sub160 | 1;
   $head168 = ((($add$ptr166)) + 4|0);
   store4($head168,$or167);
   $add$ptr169 = (($add$ptr166) + ($sub160)|0);
   store4($add$ptr169,$sub160);
   $or172 = $nb$0 | 3;
   $head173 = ((($90)) + 4|0);
   store4($head173,$or172);
  } else {
   store4((7288),0);
   store4((7300),0);
   $or176 = $89 | 3;
   $head177 = ((($90)) + 4|0);
   store4($head177,$or176);
   $add$ptr178 = (($90) + ($89)|0);
   $head179 = ((($add$ptr178)) + 4|0);
   $91 = load4($head179);
   $or180 = $91 | 1;
   store4($head179,$or180);
  }
  $add$ptr182 = ((($90)) + 8|0);
  $retval$0 = $add$ptr182;
  STACKTOP = sp;return ($retval$0|0);
 }
 $92 = load4((7292));
 $cmp186 = ($92>>>0)>($nb$0>>>0);
 if ($cmp186) {
  $sub190 = (($92) - ($nb$0))|0;
  store4((7292),$sub190);
  $93 = load4((7304));
  $add$ptr193 = (($93) + ($nb$0)|0);
  store4((7304),$add$ptr193);
  $or194 = $sub190 | 1;
  $head195 = ((($add$ptr193)) + 4|0);
  store4($head195,$or194);
  $or197 = $nb$0 | 3;
  $head198 = ((($93)) + 4|0);
  store4($head198,$or197);
  $add$ptr199 = ((($93)) + 8|0);
  $retval$0 = $add$ptr199;
  STACKTOP = sp;return ($retval$0|0);
 }
 $94 = load4(7752);
 $cmp$i179 = ($94|0)==(0);
 if ($cmp$i179) {
  store4((7760),4096);
  store4((7756),4096);
  store4((7764),-1);
  store4((7768),-1);
  store4((7772),0);
  store4((7724),0);
  $95 = $magic$i$i;
  $xor$i$i = $95 & -16;
  $and6$i$i = $xor$i$i ^ 1431655768;
  store4($magic$i$i,$and6$i$i);
  store4(7752,$and6$i$i);
  $96 = 4096;
 } else {
  $$pre$i180 = load4((7760));
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
 $97 = load4((7720));
 $cmp15$i = ($97|0)==(0);
 if (!($cmp15$i)) {
  $98 = load4((7712));
  $add17$i184 = (($98) + ($and11$i))|0;
  $cmp19$i = ($add17$i184>>>0)<=($98>>>0);
  $cmp21$i = ($add17$i184>>>0)>($97>>>0);
  $or$cond1$i185 = $cmp19$i | $cmp21$i;
  if ($or$cond1$i185) {
   $retval$0 = 0;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $99 = load4((7724));
 $and29$i = $99 & 4;
 $tobool30$i = ($and29$i|0)==(0);
 L255: do {
  if ($tobool30$i) {
   $100 = load4((7304));
   $cmp32$i186 = ($100|0)==(0|0);
   L257: do {
    if ($cmp32$i186) {
     label = 172;
    } else {
     $sp$0$i$i = (7728);
     while(1) {
      $101 = load4($sp$0$i$i);
      $cmp$i11$i = ($101>>>0)>($100>>>0);
      if (!($cmp$i11$i)) {
       $size$i$i = ((($sp$0$i$i)) + 4|0);
       $102 = load4($size$i$i);
       $add$ptr$i$i = (($101) + ($102)|0);
       $cmp2$i$i = ($add$ptr$i$i>>>0)>($100>>>0);
       if ($cmp2$i$i) {
        break;
       }
      }
      $next$i$i = ((($sp$0$i$i)) + 8|0);
      $103 = load4($next$i$i);
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
      $108 = load4($sp$0$i$i);
      $109 = load4($size$i$i);
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
      $105 = load4((7756));
      $sub41$i = (($105) + -1)|0;
      $and42$i = $sub41$i & $104;
      $cmp43$i = ($and42$i|0)==(0);
      $add46$i = (($sub41$i) + ($104))|0;
      $neg48$i = (0 - ($105))|0;
      $and49$i = $add46$i & $neg48$i;
      $sub50$i = (($and49$i) - ($104))|0;
      $add51$i = $cmp43$i ? 0 : $sub50$i;
      $and11$add51$i = (($add51$i) + ($and11$i))|0;
      $106 = load4((7712));
      $add54$i = (($and11$add51$i) + ($106))|0;
      $cmp55$i187 = ($and11$add51$i>>>0)>($nb$0>>>0);
      $cmp57$i188 = ($and11$add51$i>>>0)<(2147483647);
      $or$cond$i189 = $cmp55$i187 & $cmp57$i188;
      if ($or$cond$i189) {
       $107 = load4((7720));
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
       $110 = load4((7760));
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
   $111 = load4((7724));
   $or$i196 = $111 | 4;
   store4((7724),$or$i196);
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
  $112 = load4((7712));
  $add150$i = (($112) + ($tsize$792$i))|0;
  store4((7712),$add150$i);
  $113 = load4((7716));
  $cmp151$i = ($add150$i>>>0)>($113>>>0);
  if ($cmp151$i) {
   store4((7716),$add150$i);
  }
  $114 = load4((7304));
  $cmp157$i = ($114|0)==(0|0);
  do {
   if ($cmp157$i) {
    $115 = load4((7296));
    $cmp159$i200 = ($115|0)==(0|0);
    $cmp162$i201 = ($tbase$793$i>>>0)<($115>>>0);
    $or$cond8$i = $cmp159$i200 | $cmp162$i201;
    if ($or$cond8$i) {
     store4((7296),$tbase$793$i);
    }
    store4((7728),$tbase$793$i);
    store4((7732),$tsize$792$i);
    store4((7740),0);
    $116 = load4(7752);
    store4((7316),$116);
    store4((7312),-1);
    $i$01$i$i = 0;
    while(1) {
     $shl$i13$i = $i$01$i$i << 1;
     $arrayidx$i14$i = (7320 + ($shl$i13$i<<2)|0);
     $117 = ((($arrayidx$i14$i)) + 12|0);
     store4($117,$arrayidx$i14$i);
     $118 = ((($arrayidx$i14$i)) + 8|0);
     store4($118,$arrayidx$i14$i);
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
    store4((7304),$add$ptr4$i$i);
    store4((7292),$sub5$i$i);
    $or$i$i = $sub5$i$i | 1;
    $head$i20$i = ((($add$ptr4$i$i)) + 4|0);
    store4($head$i20$i,$or$i$i);
    $add$ptr6$i$i = (($add$ptr4$i$i) + ($sub5$i$i)|0);
    $head7$i$i = ((($add$ptr6$i$i)) + 4|0);
    store4($head7$i$i,40);
    $121 = load4((7768));
    store4((7308),$121);
   } else {
    $sp$0104$i = (7728);
    while(1) {
     $122 = load4($sp$0104$i);
     $size188$i = ((($sp$0104$i)) + 4|0);
     $123 = load4($size188$i);
     $add$ptr189$i = (($122) + ($123)|0);
     $cmp190$i = ($tbase$793$i|0)==($add$ptr189$i|0);
     if ($cmp190$i) {
      label = 200;
      break;
     }
     $next$i = ((($sp$0104$i)) + 8|0);
     $124 = load4($next$i);
     $cmp186$i = ($124|0)==(0|0);
     if ($cmp186$i) {
      break;
     } else {
      $sp$0104$i = $124;
     }
    }
    if ((label|0) == 200) {
     $sflags193$i = ((($sp$0104$i)) + 12|0);
     $125 = load4($sflags193$i);
     $and194$i205 = $125 & 8;
     $tobool195$i = ($and194$i205|0)==(0);
     if ($tobool195$i) {
      $cmp203$i = ($114>>>0)>=($122>>>0);
      $cmp209$i = ($114>>>0)<($tbase$793$i>>>0);
      $or$cond95$i = $cmp209$i & $cmp203$i;
      if ($or$cond95$i) {
       $add212$i = (($123) + ($tsize$792$i))|0;
       store4($size188$i,$add212$i);
       $126 = load4((7292));
       $add$ptr$i49$i = ((($114)) + 8|0);
       $127 = $add$ptr$i49$i;
       $and$i50$i = $127 & 7;
       $cmp$i51$i = ($and$i50$i|0)==(0);
       $128 = (0 - ($127))|0;
       $and3$i52$i = $128 & 7;
       $cond$i53$i = $cmp$i51$i ? 0 : $and3$i52$i;
       $add$ptr4$i54$i = (($114) + ($cond$i53$i)|0);
       $add215$i = (($tsize$792$i) - ($cond$i53$i))|0;
       $sub5$i55$i = (($126) + ($add215$i))|0;
       store4((7304),$add$ptr4$i54$i);
       store4((7292),$sub5$i55$i);
       $or$i56$i = $sub5$i55$i | 1;
       $head$i57$i = ((($add$ptr4$i54$i)) + 4|0);
       store4($head$i57$i,$or$i56$i);
       $add$ptr6$i58$i = (($add$ptr4$i54$i) + ($sub5$i55$i)|0);
       $head7$i59$i = ((($add$ptr6$i58$i)) + 4|0);
       store4($head7$i59$i,40);
       $129 = load4((7768));
       store4((7308),$129);
       break;
      }
     }
    }
    $130 = load4((7296));
    $cmp218$i = ($tbase$793$i>>>0)<($130>>>0);
    if ($cmp218$i) {
     store4((7296),$tbase$793$i);
     $145 = $tbase$793$i;
    } else {
     $145 = $130;
    }
    $add$ptr227$i = (($tbase$793$i) + ($tsize$792$i)|0);
    $sp$1103$i = (7728);
    while(1) {
     $131 = load4($sp$1103$i);
     $cmp228$i = ($131|0)==($add$ptr227$i|0);
     if ($cmp228$i) {
      label = 208;
      break;
     }
     $next231$i = ((($sp$1103$i)) + 8|0);
     $132 = load4($next231$i);
     $cmp224$i = ($132|0)==(0|0);
     if ($cmp224$i) {
      $sp$0$i$i$i = (7728);
      break;
     } else {
      $sp$1103$i = $132;
     }
    }
    if ((label|0) == 208) {
     $sflags235$i = ((($sp$1103$i)) + 12|0);
     $133 = load4($sflags235$i);
     $and236$i = $133 & 8;
     $tobool237$i = ($and236$i|0)==(0);
     if ($tobool237$i) {
      store4($sp$1103$i,$tbase$793$i);
      $size245$i = ((($sp$1103$i)) + 4|0);
      $134 = load4($size245$i);
      $add246$i = (($134) + ($tsize$792$i))|0;
      store4($size245$i,$add246$i);
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
      store4($head$i31$i,$or19$i$i);
      $cmp20$i$i = ($add$ptr16$i$i|0)==($114|0);
      do {
       if ($cmp20$i$i) {
        $139 = load4((7292));
        $add$i$i = (($139) + ($sub18$i$i))|0;
        store4((7292),$add$i$i);
        store4((7304),$add$ptr17$i$i);
        $or22$i$i = $add$i$i | 1;
        $head23$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head23$i$i,$or22$i$i);
       } else {
        $140 = load4((7300));
        $cmp24$i$i = ($add$ptr16$i$i|0)==($140|0);
        if ($cmp24$i$i) {
         $141 = load4((7288));
         $add26$i$i = (($141) + ($sub18$i$i))|0;
         store4((7288),$add26$i$i);
         store4((7300),$add$ptr17$i$i);
         $or28$i$i = $add26$i$i | 1;
         $head29$i$i = ((($add$ptr17$i$i)) + 4|0);
         store4($head29$i$i,$or28$i$i);
         $add$ptr30$i$i = (($add$ptr17$i$i) + ($add26$i$i)|0);
         store4($add$ptr30$i$i,$add26$i$i);
         break;
        }
        $head32$i$i = ((($add$ptr16$i$i)) + 4|0);
        $142 = load4($head32$i$i);
        $and33$i$i = $142 & 3;
        $cmp34$i$i = ($and33$i$i|0)==(1);
        if ($cmp34$i$i) {
         $and37$i$i = $142 & -8;
         $shr$i34$i = $142 >>> 3;
         $cmp38$i$i = ($142>>>0)<(256);
         L326: do {
          if ($cmp38$i$i) {
           $fd$i$i = ((($add$ptr16$i$i)) + 8|0);
           $143 = load4($fd$i$i);
           $bk$i35$i = ((($add$ptr16$i$i)) + 12|0);
           $144 = load4($bk$i35$i);
           $shl$i36$i = $shr$i34$i << 1;
           $arrayidx$i37$i = (7320 + ($shl$i36$i<<2)|0);
           $cmp41$i$i = ($143|0)==($arrayidx$i37$i|0);
           do {
            if (!($cmp41$i$i)) {
             $cmp42$i$i = ($143>>>0)<($145>>>0);
             if ($cmp42$i$i) {
              _abort();
              // unreachable;
             }
             $bk43$i$i = ((($143)) + 12|0);
             $146 = load4($bk43$i$i);
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
            $147 = load4(7280);
            $and49$i$i = $147 & $neg$i$i;
            store4(7280,$and49$i$i);
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
             $148 = load4($fd59$i$i);
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
           store4($bk67$i$i,$144);
           store4($fd68$pre$phi$i$iZ2D,$143);
          } else {
           $parent$i40$i = ((($add$ptr16$i$i)) + 24|0);
           $149 = load4($parent$i40$i);
           $bk74$i$i = ((($add$ptr16$i$i)) + 12|0);
           $150 = load4($bk74$i$i);
           $cmp75$i$i = ($150|0)==($add$ptr16$i$i|0);
           do {
            if ($cmp75$i$i) {
             $child$i$i = ((($add$ptr16$i$i)) + 16|0);
             $arrayidx96$i$i = ((($child$i$i)) + 4|0);
             $154 = load4($arrayidx96$i$i);
             $cmp97$i$i = ($154|0)==(0|0);
             if ($cmp97$i$i) {
              $155 = load4($child$i$i);
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
              $156 = load4($arrayidx103$i$i);
              $cmp104$i$i = ($156|0)==(0|0);
              if (!($cmp104$i$i)) {
               $R$1$i$i = $156;$RP$1$i$i = $arrayidx103$i$i;
               continue;
              }
              $arrayidx107$i$i = ((($R$1$i$i)) + 16|0);
              $157 = load4($arrayidx107$i$i);
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
              store4($RP$1$i$i,0);
              $R$3$i$i = $R$1$i$i;
              break;
             }
            } else {
             $fd78$i$i = ((($add$ptr16$i$i)) + 8|0);
             $151 = load4($fd78$i$i);
             $cmp81$i$i = ($151>>>0)<($145>>>0);
             if ($cmp81$i$i) {
              _abort();
              // unreachable;
             }
             $bk82$i$i = ((($151)) + 12|0);
             $152 = load4($bk82$i$i);
             $cmp83$i$i = ($152|0)==($add$ptr16$i$i|0);
             if (!($cmp83$i$i)) {
              _abort();
              // unreachable;
             }
             $fd85$i$i = ((($150)) + 8|0);
             $153 = load4($fd85$i$i);
             $cmp86$i$i = ($153|0)==($add$ptr16$i$i|0);
             if ($cmp86$i$i) {
              store4($bk82$i$i,$150);
              store4($fd85$i$i,$151);
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
           $158 = load4($index$i43$i);
           $arrayidx123$i$i = (7584 + ($158<<2)|0);
           $159 = load4($arrayidx123$i$i);
           $cmp124$i$i = ($add$ptr16$i$i|0)==($159|0);
           do {
            if ($cmp124$i$i) {
             store4($arrayidx123$i$i,$R$3$i$i);
             $cond2$i$i = ($R$3$i$i|0)==(0|0);
             if (!($cond2$i$i)) {
              break;
             }
             $shl131$i$i = 1 << $158;
             $neg132$i$i = $shl131$i$i ^ -1;
             $160 = load4((7284));
             $and133$i$i = $160 & $neg132$i$i;
             store4((7284),$and133$i$i);
             break L326;
            } else {
             $161 = load4((7296));
             $cmp137$i$i = ($149>>>0)<($161>>>0);
             if ($cmp137$i$i) {
              _abort();
              // unreachable;
             }
             $arrayidx143$i$i = ((($149)) + 16|0);
             $162 = load4($arrayidx143$i$i);
             $cmp144$i$i = ($162|0)==($add$ptr16$i$i|0);
             if ($cmp144$i$i) {
              store4($arrayidx143$i$i,$R$3$i$i);
             } else {
              $arrayidx151$i$i = ((($149)) + 20|0);
              store4($arrayidx151$i$i,$R$3$i$i);
             }
             $cmp156$i$i = ($R$3$i$i|0)==(0|0);
             if ($cmp156$i$i) {
              break L326;
             }
            }
           } while(0);
           $163 = load4((7296));
           $cmp160$i$i = ($R$3$i$i>>>0)<($163>>>0);
           if ($cmp160$i$i) {
            _abort();
            // unreachable;
           }
           $parent165$i$i = ((($R$3$i$i)) + 24|0);
           store4($parent165$i$i,$149);
           $child166$i$i = ((($add$ptr16$i$i)) + 16|0);
           $164 = load4($child166$i$i);
           $cmp168$i$i = ($164|0)==(0|0);
           do {
            if (!($cmp168$i$i)) {
             $cmp172$i$i = ($164>>>0)<($163>>>0);
             if ($cmp172$i$i) {
              _abort();
              // unreachable;
             } else {
              $arrayidx178$i$i = ((($R$3$i$i)) + 16|0);
              store4($arrayidx178$i$i,$164);
              $parent179$i$i = ((($164)) + 24|0);
              store4($parent179$i$i,$R$3$i$i);
              break;
             }
            }
           } while(0);
           $arrayidx184$i$i = ((($child166$i$i)) + 4|0);
           $165 = load4($arrayidx184$i$i);
           $cmp185$i$i = ($165|0)==(0|0);
           if ($cmp185$i$i) {
            break;
           }
           $166 = load4((7296));
           $cmp189$i$i = ($165>>>0)<($166>>>0);
           if ($cmp189$i$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx195$i$i = ((($R$3$i$i)) + 20|0);
            store4($arrayidx195$i$i,$165);
            $parent196$i$i = ((($165)) + 24|0);
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
        $167 = load4($head208$i$i);
        $and209$i$i = $167 & -2;
        store4($head208$i$i,$and209$i$i);
        $or210$i$i = $qsize$0$i$i | 1;
        $head211$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head211$i$i,$or210$i$i);
        $add$ptr212$i$i = (($add$ptr17$i$i) + ($qsize$0$i$i)|0);
        store4($add$ptr212$i$i,$qsize$0$i$i);
        $shr214$i$i = $qsize$0$i$i >>> 3;
        $cmp215$i$i = ($qsize$0$i$i>>>0)<(256);
        if ($cmp215$i$i) {
         $shl221$i$i = $shr214$i$i << 1;
         $arrayidx223$i$i = (7320 + ($shl221$i$i<<2)|0);
         $168 = load4(7280);
         $shl226$i$i = 1 << $shr214$i$i;
         $and227$i$i = $168 & $shl226$i$i;
         $tobool228$i$i = ($and227$i$i|0)==(0);
         do {
          if ($tobool228$i$i) {
           $or232$i$i = $168 | $shl226$i$i;
           store4(7280,$or232$i$i);
           $$pre$i45$i = ((($arrayidx223$i$i)) + 8|0);
           $$pre$phi$i46$iZ2D = $$pre$i45$i;$F224$0$i$i = $arrayidx223$i$i;
          } else {
           $169 = ((($arrayidx223$i$i)) + 8|0);
           $170 = load4($169);
           $171 = load4((7296));
           $cmp236$i$i = ($170>>>0)<($171>>>0);
           if (!($cmp236$i$i)) {
            $$pre$phi$i46$iZ2D = $169;$F224$0$i$i = $170;
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
        $arrayidx287$i$i = (7584 + ($I252$0$i$i<<2)|0);
        $index288$i$i = ((($add$ptr17$i$i)) + 28|0);
        store4($index288$i$i,$I252$0$i$i);
        $child289$i$i = ((($add$ptr17$i$i)) + 16|0);
        $arrayidx290$i$i = ((($child289$i$i)) + 4|0);
        store4($arrayidx290$i$i,0);
        store4($child289$i$i,0);
        $172 = load4((7284));
        $shl294$i$i = 1 << $I252$0$i$i;
        $and295$i$i = $172 & $shl294$i$i;
        $tobool296$i$i = ($and295$i$i|0)==(0);
        if ($tobool296$i$i) {
         $or300$i$i = $172 | $shl294$i$i;
         store4((7284),$or300$i$i);
         store4($arrayidx287$i$i,$add$ptr17$i$i);
         $parent301$i$i = ((($add$ptr17$i$i)) + 24|0);
         store4($parent301$i$i,$arrayidx287$i$i);
         $bk302$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk302$i$i,$add$ptr17$i$i);
         $fd303$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd303$i$i,$add$ptr17$i$i);
         break;
        }
        $173 = load4($arrayidx287$i$i);
        $cmp306$i$i = ($I252$0$i$i|0)==(31);
        $shr310$i$i = $I252$0$i$i >>> 1;
        $sub313$i$i = (25 - ($shr310$i$i))|0;
        $cond315$i$i = $cmp306$i$i ? 0 : $sub313$i$i;
        $shl316$i$i = $qsize$0$i$i << $cond315$i$i;
        $K305$0$i$i = $shl316$i$i;$T$0$i47$i = $173;
        while(1) {
         $head317$i$i = ((($T$0$i47$i)) + 4|0);
         $174 = load4($head317$i$i);
         $and318$i$i = $174 & -8;
         $cmp319$i$i = ($and318$i$i|0)==($qsize$0$i$i|0);
         if ($cmp319$i$i) {
          label = 278;
          break;
         }
         $shr322$i$i = $K305$0$i$i >>> 31;
         $arrayidx325$i$i = (((($T$0$i47$i)) + 16|0) + ($shr322$i$i<<2)|0);
         $shl326$i$i = $K305$0$i$i << 1;
         $175 = load4($arrayidx325$i$i);
         $cmp327$i$i = ($175|0)==(0|0);
         if ($cmp327$i$i) {
          label = 275;
          break;
         } else {
          $K305$0$i$i = $shl326$i$i;$T$0$i47$i = $175;
         }
        }
        if ((label|0) == 275) {
         $176 = load4((7296));
         $cmp332$i$i = ($arrayidx325$i$i>>>0)<($176>>>0);
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
        else if ((label|0) == 278) {
         $fd344$i$i = ((($T$0$i47$i)) + 8|0);
         $177 = load4($fd344$i$i);
         $178 = load4((7296));
         $cmp350$i$i = ($177>>>0)>=($178>>>0);
         $not$cmp346$i$i = ($T$0$i47$i>>>0)>=($178>>>0);
         $179 = $cmp350$i$i & $not$cmp346$i$i;
         if ($179) {
          $bk357$i$i = ((($177)) + 12|0);
          store4($bk357$i$i,$add$ptr17$i$i);
          store4($fd344$i$i,$add$ptr17$i$i);
          $fd359$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd359$i$i,$177);
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
     } else {
      $sp$0$i$i$i = (7728);
     }
    }
    while(1) {
     $180 = load4($sp$0$i$i$i);
     $cmp$i$i$i = ($180>>>0)>($114>>>0);
     if (!($cmp$i$i$i)) {
      $size$i$i$i = ((($sp$0$i$i$i)) + 4|0);
      $181 = load4($size$i$i$i);
      $add$ptr$i$i$i = (($180) + ($181)|0);
      $cmp2$i$i$i = ($add$ptr$i$i$i>>>0)>($114>>>0);
      if ($cmp2$i$i$i) {
       break;
      }
     }
     $next$i$i$i = ((($sp$0$i$i$i)) + 8|0);
     $182 = load4($next$i$i$i);
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
    store4((7304),$add$ptr4$i$i$i);
    store4((7292),$sub5$i$i$i);
    $or$i$i$i = $sub5$i$i$i | 1;
    $head$i$i$i = ((($add$ptr4$i$i$i)) + 4|0);
    store4($head$i$i$i,$or$i$i$i);
    $add$ptr6$i$i$i = (($add$ptr4$i$i$i) + ($sub5$i$i$i)|0);
    $head7$i$i$i = ((($add$ptr6$i$i$i)) + 4|0);
    store4($head7$i$i$i,40);
    $187 = load4((7768));
    store4((7308),$187);
    $head$i$i = ((($cond13$i$i)) + 4|0);
    store4($head$i$i,27);
    ; store8($add$ptr14$i$i,load8((7728),4),4); store8($add$ptr14$i$i+8 | 0,load8((7728)+8 | 0,4),4);
    store4((7728),$tbase$793$i);
    store4((7732),$tsize$792$i);
    store4((7740),0);
    store4((7736),$add$ptr14$i$i);
    $p$0$i$i = $add$ptr15$i$i;
    while(1) {
     $add$ptr24$i$i = ((($p$0$i$i)) + 4|0);
     store4($add$ptr24$i$i,7);
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
     $189 = load4($head$i$i);
     $and32$i$i = $189 & -2;
     store4($head$i$i,$and32$i$i);
     $or33$i$i = $sub$ptr$sub$i$i | 1;
     $head34$i$i = ((($114)) + 4|0);
     store4($head34$i$i,$or33$i$i);
     store4($cond13$i$i,$sub$ptr$sub$i$i);
     $shr$i$i = $sub$ptr$sub$i$i >>> 3;
     $cmp36$i$i = ($sub$ptr$sub$i$i>>>0)<(256);
     if ($cmp36$i$i) {
      $shl$i$i = $shr$i$i << 1;
      $arrayidx$i$i = (7320 + ($shl$i$i<<2)|0);
      $190 = load4(7280);
      $shl39$i$i = 1 << $shr$i$i;
      $and40$i$i = $190 & $shl39$i$i;
      $tobool$i$i = ($and40$i$i|0)==(0);
      if ($tobool$i$i) {
       $or44$i$i = $190 | $shl39$i$i;
       store4(7280,$or44$i$i);
       $$pre$i$i = ((($arrayidx$i$i)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $arrayidx$i$i;
      } else {
       $191 = ((($arrayidx$i$i)) + 8|0);
       $192 = load4($191);
       $193 = load4((7296));
       $cmp46$i$i = ($192>>>0)<($193>>>0);
       if ($cmp46$i$i) {
        _abort();
        // unreachable;
       } else {
        $$pre$phi$i$iZ2D = $191;$F$0$i$i = $192;
       }
      }
      store4($$pre$phi$i$iZ2D,$114);
      $bk$i$i = ((($F$0$i$i)) + 12|0);
      store4($bk$i$i,$114);
      $fd54$i$i = ((($114)) + 8|0);
      store4($fd54$i$i,$F$0$i$i);
      $bk55$i$i = ((($114)) + 12|0);
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
     $arrayidx91$i$i = (7584 + ($I57$0$i$i<<2)|0);
     $index$i$i = ((($114)) + 28|0);
     store4($index$i$i,$I57$0$i$i);
     $arrayidx92$i$i = ((($114)) + 20|0);
     store4($arrayidx92$i$i,0);
     store4($add$ptr8$i118$i,0);
     $194 = load4((7284));
     $shl95$i$i = 1 << $I57$0$i$i;
     $and96$i$i = $194 & $shl95$i$i;
     $tobool97$i$i = ($and96$i$i|0)==(0);
     if ($tobool97$i$i) {
      $or101$i$i = $194 | $shl95$i$i;
      store4((7284),$or101$i$i);
      store4($arrayidx91$i$i,$114);
      $parent$i$i = ((($114)) + 24|0);
      store4($parent$i$i,$arrayidx91$i$i);
      $bk102$i$i = ((($114)) + 12|0);
      store4($bk102$i$i,$114);
      $fd103$i$i = ((($114)) + 8|0);
      store4($fd103$i$i,$114);
      break;
     }
     $195 = load4($arrayidx91$i$i);
     $cmp106$i$i = ($I57$0$i$i|0)==(31);
     $shr110$i$i = $I57$0$i$i >>> 1;
     $sub113$i$i = (25 - ($shr110$i$i))|0;
     $cond115$i$i = $cmp106$i$i ? 0 : $sub113$i$i;
     $shl116$i$i = $sub$ptr$sub$i$i << $cond115$i$i;
     $K105$0$i$i = $shl116$i$i;$T$0$i$i = $195;
     while(1) {
      $head118$i$i = ((($T$0$i$i)) + 4|0);
      $196 = load4($head118$i$i);
      $and119$i$i = $196 & -8;
      $cmp120$i$i = ($and119$i$i|0)==($sub$ptr$sub$i$i|0);
      if ($cmp120$i$i) {
       label = 304;
       break;
      }
      $shr123$i$i = $K105$0$i$i >>> 31;
      $arrayidx126$i$i = (((($T$0$i$i)) + 16|0) + ($shr123$i$i<<2)|0);
      $shl127$i$i = $K105$0$i$i << 1;
      $197 = load4($arrayidx126$i$i);
      $cmp128$i$i = ($197|0)==(0|0);
      if ($cmp128$i$i) {
       label = 301;
       break;
      } else {
       $K105$0$i$i = $shl127$i$i;$T$0$i$i = $197;
      }
     }
     if ((label|0) == 301) {
      $198 = load4((7296));
      $cmp133$i$i = ($arrayidx126$i$i>>>0)<($198>>>0);
      if ($cmp133$i$i) {
       _abort();
       // unreachable;
      } else {
       store4($arrayidx126$i$i,$114);
       $parent138$i$i = ((($114)) + 24|0);
       store4($parent138$i$i,$T$0$i$i);
       $bk139$i$i = ((($114)) + 12|0);
       store4($bk139$i$i,$114);
       $fd140$i$i = ((($114)) + 8|0);
       store4($fd140$i$i,$114);
       break;
      }
     }
     else if ((label|0) == 304) {
      $fd148$i$i = ((($T$0$i$i)) + 8|0);
      $199 = load4($fd148$i$i);
      $200 = load4((7296));
      $cmp153$i$i = ($199>>>0)>=($200>>>0);
      $not$cmp150$i$i = ($T$0$i$i>>>0)>=($200>>>0);
      $201 = $cmp153$i$i & $not$cmp150$i$i;
      if ($201) {
       $bk158$i$i = ((($199)) + 12|0);
       store4($bk158$i$i,$114);
       store4($fd148$i$i,$114);
       $fd160$i$i = ((($114)) + 8|0);
       store4($fd160$i$i,$199);
       $bk161$i$i = ((($114)) + 12|0);
       store4($bk161$i$i,$T$0$i$i);
       $parent162$i$i = ((($114)) + 24|0);
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
  $202 = load4((7292));
  $cmp257$i = ($202>>>0)>($nb$0>>>0);
  if ($cmp257$i) {
   $sub260$i = (($202) - ($nb$0))|0;
   store4((7292),$sub260$i);
   $203 = load4((7304));
   $add$ptr262$i = (($203) + ($nb$0)|0);
   store4((7304),$add$ptr262$i);
   $or264$i = $sub260$i | 1;
   $head265$i = ((($add$ptr262$i)) + 4|0);
   store4($head265$i,$or264$i);
   $or267$i = $nb$0 | 3;
   $head268$i = ((($203)) + 4|0);
   store4($head268$i,$or267$i);
   $add$ptr269$i = ((($203)) + 8|0);
   $retval$0 = $add$ptr269$i;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 store4(7276,12);
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
 $0 = load4((7296));
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
 do {
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
   $3 = load4((7300));
   $cmp22 = ($add$ptr16|0)==($3|0);
   if ($cmp22) {
    $head209 = ((($add$ptr6)) + 4|0);
    $27 = load4($head209);
    $and210 = $27 & 3;
    $cmp211 = ($and210|0)==(3);
    if (!($cmp211)) {
     $p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    store4((7288),$add17);
    $and215 = $27 & -2;
    store4($head209,$and215);
    $or = $add17 | 1;
    $head216 = ((($add$ptr16)) + 4|0);
    store4($head216,$or);
    $add$ptr217 = (($add$ptr16) + ($add17)|0);
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
    $arrayidx = (7320 + ($shl<<2)|0);
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
     $7 = load4(7280);
     $and46 = $7 & $neg;
     store4(7280,$and46);
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
    $p$1 = $add$ptr16;$psize$1 = $add17;
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
    $p$1 = $add$ptr16;$psize$1 = $add17;
   } else {
    $index = ((($add$ptr16)) + 28|0);
    $18 = load4($index);
    $arrayidx130 = (7584 + ($18<<2)|0);
    $19 = load4($arrayidx130);
    $cmp131 = ($add$ptr16|0)==($19|0);
    if ($cmp131) {
     store4($arrayidx130,$R$3);
     $cond291 = ($R$3|0)==(0|0);
     if ($cond291) {
      $shl138 = 1 << $18;
      $neg139 = $shl138 ^ -1;
      $20 = load4((7284));
      $and140 = $20 & $neg139;
      store4((7284),$and140);
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    } else {
     $21 = load4((7296));
     $cmp143 = ($9>>>0)<($21>>>0);
     if ($cmp143) {
      _abort();
      // unreachable;
     }
     $arrayidx149 = ((($9)) + 16|0);
     $22 = load4($arrayidx149);
     $cmp150 = ($22|0)==($add$ptr16|0);
     if ($cmp150) {
      store4($arrayidx149,$R$3);
     } else {
      $arrayidx157 = ((($9)) + 20|0);
      store4($arrayidx157,$R$3);
     }
     $cmp162 = ($R$3|0)==(0|0);
     if ($cmp162) {
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
    $23 = load4((7296));
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
     $p$1 = $add$ptr16;$psize$1 = $add17;
    } else {
     $26 = load4((7296));
     $cmp192 = ($25>>>0)<($26>>>0);
     if ($cmp192) {
      _abort();
      // unreachable;
     } else {
      $arrayidx198 = ((($R$3)) + 20|0);
      store4($arrayidx198,$25);
      $parent199 = ((($25)) + 24|0);
      store4($parent199,$R$3);
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
 $28 = load4($head231);
 $and232 = $28 & 1;
 $tobool233 = ($and232|0)==(0);
 if ($tobool233) {
  _abort();
  // unreachable;
 }
 $and240 = $28 & 2;
 $tobool241 = ($and240|0)==(0);
 if ($tobool241) {
  $29 = load4((7304));
  $cmp243 = ($add$ptr6|0)==($29|0);
  if ($cmp243) {
   $30 = load4((7292));
   $add246 = (($30) + ($psize$1))|0;
   store4((7292),$add246);
   store4((7304),$p$1);
   $or247 = $add246 | 1;
   $head248 = ((($p$1)) + 4|0);
   store4($head248,$or247);
   $31 = load4((7300));
   $cmp249 = ($p$1|0)==($31|0);
   if (!($cmp249)) {
    return;
   }
   store4((7300),0);
   store4((7288),0);
   return;
  }
  $32 = load4((7300));
  $cmp255 = ($add$ptr6|0)==($32|0);
  if ($cmp255) {
   $33 = load4((7288));
   $add258 = (($33) + ($psize$1))|0;
   store4((7288),$add258);
   store4((7300),$p$1);
   $or259 = $add258 | 1;
   $head260 = ((($p$1)) + 4|0);
   store4($head260,$or259);
   $add$ptr261 = (($p$1) + ($add258)|0);
   store4($add$ptr261,$add258);
   return;
  }
  $and266 = $28 & -8;
  $add267 = (($and266) + ($psize$1))|0;
  $shr268 = $28 >>> 3;
  $cmp269 = ($28>>>0)<(256);
  do {
   if ($cmp269) {
    $fd273 = ((($add$ptr6)) + 8|0);
    $34 = load4($fd273);
    $bk275 = ((($add$ptr6)) + 12|0);
    $35 = load4($bk275);
    $shl278 = $shr268 << 1;
    $arrayidx279 = (7320 + ($shl278<<2)|0);
    $cmp280 = ($34|0)==($arrayidx279|0);
    if (!($cmp280)) {
     $36 = load4((7296));
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
     $38 = load4(7280);
     $and301 = $38 & $neg300;
     store4(7280,$and301);
     break;
    }
    $cmp305 = ($35|0)==($arrayidx279|0);
    if ($cmp305) {
     $$pre307 = ((($35)) + 8|0);
     $fd322$pre$phiZ2D = $$pre307;
    } else {
     $39 = load4((7296));
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
      $51 = load4((7296));
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
      $44 = load4((7296));
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
     $arrayidx400 = (7584 + ($52<<2)|0);
     $53 = load4($arrayidx400);
     $cmp401 = ($add$ptr6|0)==($53|0);
     if ($cmp401) {
      store4($arrayidx400,$R332$3);
      $cond292 = ($R332$3|0)==(0|0);
      if ($cond292) {
       $shl408 = 1 << $52;
       $neg409 = $shl408 ^ -1;
       $54 = load4((7284));
       $and410 = $54 & $neg409;
       store4((7284),$and410);
       break;
      }
     } else {
      $55 = load4((7296));
      $cmp413 = ($41>>>0)<($55>>>0);
      if ($cmp413) {
       _abort();
       // unreachable;
      }
      $arrayidx419 = ((($41)) + 16|0);
      $56 = load4($arrayidx419);
      $cmp420 = ($56|0)==($add$ptr6|0);
      if ($cmp420) {
       store4($arrayidx419,$R332$3);
      } else {
       $arrayidx427 = ((($41)) + 20|0);
       store4($arrayidx427,$R332$3);
      }
      $cmp432 = ($R332$3|0)==(0|0);
      if ($cmp432) {
       break;
      }
     }
     $57 = load4((7296));
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
      $60 = load4((7296));
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
  $add$ptr482 = (($p$1) + ($add267)|0);
  store4($add$ptr482,$add267);
  $61 = load4((7300));
  $cmp484 = ($p$1|0)==($61|0);
  if ($cmp484) {
   store4((7288),$add267);
   return;
  } else {
   $psize$2 = $add267;
  }
 } else {
  $and495 = $28 & -2;
  store4($head231,$and495);
  $or496 = $psize$1 | 1;
  $head497 = ((($p$1)) + 4|0);
  store4($head497,$or496);
  $add$ptr498 = (($p$1) + ($psize$1)|0);
  store4($add$ptr498,$psize$1);
  $psize$2 = $psize$1;
 }
 $shr501 = $psize$2 >>> 3;
 $cmp502 = ($psize$2>>>0)<(256);
 if ($cmp502) {
  $shl508 = $shr501 << 1;
  $arrayidx509 = (7320 + ($shl508<<2)|0);
  $62 = load4(7280);
  $shl511 = 1 << $shr501;
  $and512 = $62 & $shl511;
  $tobool513 = ($and512|0)==(0);
  if ($tobool513) {
   $or516 = $62 | $shl511;
   store4(7280,$or516);
   $$pre = ((($arrayidx509)) + 8|0);
   $$pre$phiZ2D = $$pre;$F510$0 = $arrayidx509;
  } else {
   $63 = ((($arrayidx509)) + 8|0);
   $64 = load4($63);
   $65 = load4((7296));
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
 $arrayidx567 = (7584 + ($I534$0<<2)|0);
 $index568 = ((($p$1)) + 28|0);
 store4($index568,$I534$0);
 $child569 = ((($p$1)) + 16|0);
 $arrayidx570 = ((($p$1)) + 20|0);
 store4($arrayidx570,0);
 store4($child569,0);
 $66 = load4((7284));
 $shl573 = 1 << $I534$0;
 $and574 = $66 & $shl573;
 $tobool575 = ($and574|0)==(0);
 do {
  if ($tobool575) {
   $or578 = $66 | $shl573;
   store4((7284),$or578);
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
     label = 130;
     break;
    }
    $shr596 = $K583$0 >>> 31;
    $arrayidx599 = (((($T$0)) + 16|0) + ($shr596<<2)|0);
    $shl600 = $K583$0 << 1;
    $69 = load4($arrayidx599);
    $cmp601 = ($69|0)==(0|0);
    if ($cmp601) {
     label = 127;
     break;
    } else {
     $K583$0 = $shl600;$T$0 = $69;
    }
   }
   if ((label|0) == 127) {
    $70 = load4((7296));
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
   else if ((label|0) == 130) {
    $fd620 = ((($T$0)) + 8|0);
    $71 = load4($fd620);
    $72 = load4((7296));
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
 $74 = load4((7312));
 $dec = (($74) + -1)|0;
 store4((7312),$dec);
 $cmp640 = ($dec|0)==(0);
 if ($cmp640) {
  $sp$0$in$i = (7736);
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
 store4((7312),-1);
 return;
}
function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((6226|0),(6249|0),304,(6472|0));
 // unreachable;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((6346|0),(6375|0),1183,(6472|0));
 // unreachable;
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = 0, $2 = i64(), $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $__type_name$i = 0, $add$ptr = 0, $and = i64(), $call$i = 0, $call1$i = 0, $call10 = 0, $call14 = 0, $cmp = 0, $cmp$i = 0, $cmp7 = 0, $cond = 0, $exception_class = 0;
 var $primaryException = 0, $thrown_object = 0, $tobool = 0, $tobool1 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer12 = 0, $vararg_buffer5 = 0, $vararg_buffer9 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, $vararg_ptr8 = 0, $vfn13 = 0, $vtable12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer12 = sp + 40|0;
 $vararg_buffer9 = sp + 32|0;
 $vararg_buffer5 = sp + 24|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $thrown_object = sp + 44|0;
 $call$i = (_pthread_once((7776|0),(2|0))|0);
 $cmp$i = ($call$i|0)==(0);
 if (!($cmp$i)) {
  _abort_message(6768,$vararg_buffer);
  // unreachable;
 }
 $0 = load4(7780);
 $call1$i = (_pthread_getspecific(($0|0))|0);
 $tobool = ($call1$i|0)==(0|0);
 if (!($tobool)) {
  $1 = load4($call1$i);
  $tobool1 = ($1|0)==(0|0);
  if (!($tobool1)) {
   $add$ptr = ((($1)) + 80|0);
   $exception_class = ((($1)) + 48|0);
   $2 = load8($exception_class);
   $and = i64_and($2,i64_const(4294967040,4294967295));
   $cmp = i64_eq($and,i64_const(1126902528,1129074247));
   if (!($cmp)) {
    store4($vararg_buffer9,6629);
    _abort_message(6579,$vararg_buffer9);
    // unreachable;
   }
   $cmp7 = i64_eq($2,i64_const(1126902529,1129074247));
   if ($cmp7) {
    $primaryException = ((($1)) + 44|0);
    $3 = load4($primaryException);
    $cond = $3;
   } else {
    $cond = $add$ptr;
   }
   store4($thrown_object,$cond);
   $4 = load4($1);
   $__type_name$i = ((($4)) + 4|0);
   $5 = load4($__type_name$i);
   $call10 = (__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(1376,$4,$thrown_object)|0);
   if ($call10) {
    $6 = load4($thrown_object);
    $vtable12 = load4($6);
    $vfn13 = ((($vtable12)) + 8|0);
    $7 = load4($vfn13);
    $call14 = (FUNCTION_TABLE_ii[$7 & 15]($6)|0);
    store4($vararg_buffer1,6629);
    $vararg_ptr3 = ((($vararg_buffer1)) + 4|0);
    store4($vararg_ptr3,$5);
    $vararg_ptr4 = ((($vararg_buffer1)) + 8|0);
    store4($vararg_ptr4,$call14);
    _abort_message(6493,$vararg_buffer1);
    // unreachable;
   } else {
    store4($vararg_buffer5,6629);
    $vararg_ptr8 = ((($vararg_buffer5)) + 4|0);
    store4($vararg_ptr8,$5);
    _abort_message(6538,$vararg_buffer5);
    // unreachable;
   }
  }
 }
 _abort_message(6617,$vararg_buffer12);
 // unreachable;
}
function _abort_message($format,$varargs) {
 $format = $format|0;
 $varargs = $varargs|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr$i = 0, $and$i = 0, $and11$i = 0, $ap2$i = 0, $call$i = 0, $cmp$i = 0, $cmp$i1 = 0, $cmp1$i = 0;
 var $cmp16$i = 0, $cmp3$i = 0, $cmp7$i = 0, $incdec$ptr$i = 0, $incdec$ptr21$i = 0, $internal_buf$i = 0, $list = 0, $nl_arg$i = 0, $nl_type$i = 0, $or$i = 0, $tobool$i = 0, $tobool22$i = 0, $vacopy_currentptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 240|0;
 $ap2$i = sp + 136|0;
 $nl_type$i = sp + 96|0;
 $nl_arg$i = sp;
 $internal_buf$i = sp + 152|0;
 $list = sp + 80|0;
 store4($list,$varargs);
 ; store8($nl_type$i,i64_const(0,0),4); store8($nl_type$i+8|0,i64_const(0,0),4); store8($nl_type$i+16|0,i64_const(0,0),4); store8($nl_type$i+24|0,i64_const(0,0),4); store8($nl_type$i+32|0,i64_const(0,0),4);
 $vacopy_currentptr = load4($list);
 store4($ap2$i,$vacopy_currentptr);
 $call$i = (_printf_core(0,$format,$ap2$i,$nl_arg$i,$nl_type$i)|0);
 $cmp$i = ($call$i|0)<(0);
 if ($cmp$i) {
 } else {
  $0 = load4(1728);
  $and$i = $0 & 32;
  $1 = load1((1802));
  $cmp7$i = ($1<<24>>24)<(1);
  if ($cmp7$i) {
   $and11$i = $0 & -33;
   store4(1728,$and11$i);
  }
  $2 = load4((1776));
  $tobool$i = ($2|0)==(0);
  if ($tobool$i) {
   $3 = load4((1772));
   store4((1772),$internal_buf$i);
   store4((1756),$internal_buf$i);
   store4((1748),$internal_buf$i);
   store4((1776),80);
   $add$ptr$i = ((($internal_buf$i)) + 80|0);
   store4((1744),$add$ptr$i);
   (_printf_core(1728,$format,$ap2$i,$nl_arg$i,$nl_type$i)|0);
   $tobool22$i = ($3|0)==(0|0);
   if (!($tobool22$i)) {
    $4 = load4((1764));
    (FUNCTION_TABLE_iiii[$4 & 7](1728,0,0)|0);
    store4((1772),$3);
    store4((1776),0);
    store4((1744),0);
    store4((1756),0);
    store4((1748),0);
   }
  } else {
   (_printf_core(1728,$format,$ap2$i,$nl_arg$i,$nl_type$i)|0);
  }
  $5 = load4(1728);
  $or$i = $5 | $and$i;
  store4(1728,$or$i);
 }
 $6 = load4((1804));
 $cmp$i1 = ($6|0)<(0);
 $7 = load1((1803));
 $cmp1$i = ($7<<24>>24)==(10);
 do {
  if ($cmp$i1) {
   if (!($cmp1$i)) {
    $8 = load4((1748));
    $9 = load4((1744));
    $cmp3$i = ($8>>>0)<($9>>>0);
    if ($cmp3$i) {
     $incdec$ptr$i = ((($8)) + 1|0);
     store4((1748),$incdec$ptr$i);
     store1($8,10);
     break;
    }
   }
   (___overflow()|0);
  } else {
   if (!($cmp1$i)) {
    $10 = load4((1748));
    $11 = load4((1744));
    $cmp16$i = ($10>>>0)<($11>>>0);
    if ($cmp16$i) {
     $incdec$ptr21$i = ((($10)) + 1|0);
     store4((1748),$incdec$ptr21$i);
     store1($10,10);
     break;
    }
   }
   (___overflow()|0);
  }
 } while(0);
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
 _free($this);
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
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $cmp$i = ($this|0)==($thrown_type|0);
 if ($cmp$i) {
  $retval$2 = 1;
 } else {
  $0 = ($thrown_type|0)==(0|0);
  if ($0) {
   $retval$2 = 0;
  } else {
   $1 = (___dynamic_cast($thrown_type,1384)|0);
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
 var $0 = 0, $cmp$i = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
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
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $add = 0, $cmp = 0, $cmp$i = 0, $cmp$i19 = 0, $cmp$i20 = 0, $cmp12 = 0, $cmp13 = 0, $cmp2$i = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0;
 var $dst_ptr_not_leading_to_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_dst_ptr10 = 0, $path_dynamic_ptr_to_static_ptr$i = 0, $search_done = 0, $static_ptr$i = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 do {
  if ($cmp$i) {
   $static_ptr$i = ((($info)) + 4|0);
   $1 = load4($static_ptr$i);
   $cmp$i20 = ($1|0)==($current_ptr|0);
   if ($cmp$i20) {
    $path_dynamic_ptr_to_static_ptr$i = ((($info)) + 28|0);
    $2 = load4($path_dynamic_ptr_to_static_ptr$i);
    $cmp2$i = ($2|0)==(1);
    if (!($cmp2$i)) {
     store4($path_dynamic_ptr_to_static_ptr$i,$path_below);
    }
   }
  } else {
   $3 = load4($info);
   $cmp$i19 = ($this|0)==($3|0);
   if ($cmp$i19) {
    $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
    $4 = load4($dst_ptr_leading_to_static_ptr);
    $cmp = ($4|0)==($current_ptr|0);
    if (!($cmp)) {
     $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
     $5 = load4($dst_ptr_not_leading_to_static_ptr);
     $cmp5 = ($5|0)==($current_ptr|0);
     if (!($cmp5)) {
      $path_dynamic_ptr_to_dst_ptr10 = ((($info)) + 32|0);
      store4($path_dynamic_ptr_to_dst_ptr10,$path_below);
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $6 = load4($number_to_dst_ptr);
      $add = (($6) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $number_to_static_ptr = ((($info)) + 36|0);
      $7 = load4($number_to_static_ptr);
      $cmp12 = ($7|0)==(1);
      if ($cmp12) {
       $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
       $8 = load4($path_dst_ptr_to_static_ptr);
       $cmp13 = ($8|0)==(2);
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
     $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
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
 var $0 = 0, $cmp$i = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($info,$adjustedPtr,$path_below) {
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $add = 0, $cmp = 0, $cmp4 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $number_to_static_ptr = 0, $number_to_static_ptr11 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dst_ptr_to_static_ptr12 = 0, $path_dst_ptr_to_static_ptr6 = 0, $search_done = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $0 = load4($dst_ptr_leading_to_static_ptr);
 $cmp = ($0|0)==(0|0);
 do {
  if ($cmp) {
   store4($dst_ptr_leading_to_static_ptr,$adjustedPtr);
   $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
   store4($path_dst_ptr_to_static_ptr,$path_below);
   $number_to_static_ptr = ((($info)) + 36|0);
   store4($number_to_static_ptr,1);
  } else {
   $cmp4 = ($0|0)==($adjustedPtr|0);
   if (!($cmp4)) {
    $number_to_static_ptr11 = ((($info)) + 36|0);
    $2 = load4($number_to_static_ptr11);
    $add = (($2) + 1)|0;
    store4($number_to_static_ptr11,$add);
    $path_dst_ptr_to_static_ptr12 = ((($info)) + 24|0);
    store4($path_dst_ptr_to_static_ptr12,2);
    $search_done = ((($info)) + 54|0);
    store1($search_done,1);
    break;
   }
   $path_dst_ptr_to_static_ptr6 = ((($info)) + 24|0);
   $1 = load4($path_dst_ptr_to_static_ptr6);
   $cmp7 = ($1|0)==(2);
   if ($cmp7) {
    store4($path_dst_ptr_to_static_ptr6,$path_below);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($info,$dst_ptr,$current_ptr,$path_below) {
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add = 0, $cmp = 0, $cmp10 = 0, $cmp13 = 0, $cmp18 = 0, $cmp2 = 0, $cmp21 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $number_of_dst_type = 0;
 var $number_of_dst_type17 = 0, $number_to_static_ptr = 0, $number_to_static_ptr26 = 0, $or$cond = 0, $or$cond19 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dst_ptr_to_static_ptr12 = 0, $search_done = 0, $search_done23 = 0, $search_done27 = 0, $static_ptr = 0, label = 0, sp = 0;
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
   if ($cmp2) {
    store4($dst_ptr_leading_to_static_ptr,$dst_ptr);
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    store4($path_dst_ptr_to_static_ptr,$path_below);
    $number_to_static_ptr = ((($info)) + 36|0);
    store4($number_to_static_ptr,1);
    $number_of_dst_type = ((($info)) + 48|0);
    $2 = load4($number_of_dst_type);
    $cmp5 = ($2|0)==(1);
    $cmp7 = ($path_below|0)==(1);
    $or$cond = $cmp7 & $cmp5;
    if (!($or$cond)) {
     break;
    }
    $search_done = ((($info)) + 54|0);
    store1($search_done,1);
    break;
   }
   $cmp10 = ($1|0)==($dst_ptr|0);
   if (!($cmp10)) {
    $number_to_static_ptr26 = ((($info)) + 36|0);
    $6 = load4($number_to_static_ptr26);
    $add = (($6) + 1)|0;
    store4($number_to_static_ptr26,$add);
    $search_done27 = ((($info)) + 54|0);
    store1($search_done27,1);
    break;
   }
   $path_dst_ptr_to_static_ptr12 = ((($info)) + 24|0);
   $3 = load4($path_dst_ptr_to_static_ptr12);
   $cmp13 = ($3|0)==(2);
   if ($cmp13) {
    store4($path_dst_ptr_to_static_ptr12,$path_below);
    $5 = $path_below;
   } else {
    $5 = $3;
   }
   $number_of_dst_type17 = ((($info)) + 48|0);
   $4 = load4($number_of_dst_type17);
   $cmp18 = ($4|0)==(1);
   $cmp21 = ($5|0)==(1);
   $or$cond19 = $cmp21 & $cmp18;
   if ($or$cond19) {
    $search_done23 = ((($info)) + 54|0);
    store1($search_done23,1);
   }
  }
 } while(0);
 return;
}
function ___dynamic_cast($static_ptr,$dst_type) {
 $static_ptr = $static_ptr|0;
 $dst_type = $dst_type|0;
 var $$ = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr$ = 0, $arrayidx = 0;
 var $arrayidx1 = 0, $cmp = 0, $cmp$i = 0, $cmp14 = 0, $cmp16 = 0, $cmp19 = 0, $cmp25 = 0, $cmp27 = 0, $cmp30 = 0, $cmp33 = 0, $dst_ptr$0 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $or$cond = 0, $or$cond15 = 0, $or$cond16 = 0;
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
 store4($static_type4,1400);
 $src2dst_offset5 = ((($info)) + 12|0);
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
 $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
 $path_dynamic_ptr_to_static_ptr = ((($info)) + 28|0);
 $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
 $number_to_dst_ptr = ((($info)) + 40|0);
 $cmp$i = ($2|0)==($dst_type|0);
 ; store8($src2dst_offset5,i64_const(0,0),4); store8($src2dst_offset5+8|0,i64_const(0,0),4); store8($src2dst_offset5+16|0,i64_const(0,0),4); store8($src2dst_offset5+24|0,i64_const(0,0),4); store8($src2dst_offset5+32|0,i64_const(0,0),4); store2($src2dst_offset5+40|0,0,2); store1($src2dst_offset5+42|0,0,1);
 L1: do {
  if ($cmp$i) {
   $number_of_dst_type = ((($info)) + 48|0);
   store4($number_of_dst_type,1);
   $vtable7 = load4($dst_type);
   $vfn = ((($vtable7)) + 20|0);
   $3 = load4($vfn);
   FUNCTION_TABLE_viiiiii[$3 & 3]($dst_type,$info,$add$ptr,$add$ptr,1,0);
   $4 = load4($path_dst_ptr_to_static_ptr);
   $cmp = ($4|0)==(1);
   $add$ptr$ = $cmp ? $add$ptr : 0;
   $dst_ptr$0 = $add$ptr$;
  } else {
   $number_to_static_ptr = ((($info)) + 36|0);
   $vtable10 = load4($2);
   $vfn11 = ((($vtable10)) + 24|0);
   $5 = load4($vfn11);
   FUNCTION_TABLE_viiiii[$5 & 7]($2,$info,$add$ptr,1,0);
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
 _free($this);
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
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
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
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_type = 0, $__base_type40 = 0, $add = 0;
 var $cmp = 0, $cmp$i = 0, $cmp$i33 = 0, $cmp$i34 = 0, $cmp11 = 0, $cmp2$i = 0, $cmp26 = 0, $cmp27 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $is_dst_type_derived_from_static_type13$0$off035 = 0, $not$tobool19 = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0;
 var $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_dst_ptr10 = 0, $path_dynamic_ptr_to_static_ptr$i = 0, $search_done = 0, $static_ptr$i = 0, $static_type = 0, $tobool16 = 0, $vfn = 0, $vfn42 = 0, $vtable = 0, $vtable41 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 do {
  if ($cmp$i) {
   $static_ptr$i = ((($info)) + 4|0);
   $1 = load4($static_ptr$i);
   $cmp$i33 = ($1|0)==($current_ptr|0);
   if ($cmp$i33) {
    $path_dynamic_ptr_to_static_ptr$i = ((($info)) + 28|0);
    $2 = load4($path_dynamic_ptr_to_static_ptr$i);
    $cmp2$i = ($2|0)==(1);
    if (!($cmp2$i)) {
     store4($path_dynamic_ptr_to_static_ptr$i,$path_below);
    }
   }
  } else {
   $3 = load4($info);
   $cmp$i34 = ($this|0)==($3|0);
   if (!($cmp$i34)) {
    $__base_type40 = ((($this)) + 8|0);
    $15 = load4($__base_type40);
    $vtable41 = load4($15);
    $vfn42 = ((($vtable41)) + 24|0);
    $16 = load4($vfn42);
    FUNCTION_TABLE_viiiii[$16 & 7]($15,$info,$current_ptr,$path_below,$use_strcmp);
    break;
   }
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $4 = load4($dst_ptr_leading_to_static_ptr);
   $cmp = ($4|0)==($current_ptr|0);
   if (!($cmp)) {
    $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
    $5 = load4($dst_ptr_not_leading_to_static_ptr);
    $cmp5 = ($5|0)==($current_ptr|0);
    if (!($cmp5)) {
     $path_dynamic_ptr_to_dst_ptr10 = ((($info)) + 32|0);
     store4($path_dynamic_ptr_to_dst_ptr10,$path_below);
     $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
     $6 = load4($is_dst_type_derived_from_static_type);
     $cmp11 = ($6|0)==(4);
     if ($cmp11) {
      break;
     }
     $found_our_static_ptr = ((($info)) + 52|0);
     store1($found_our_static_ptr,0);
     $found_any_static_type = ((($info)) + 53|0);
     store1($found_any_static_type,0);
     $__base_type = ((($this)) + 8|0);
     $7 = load4($__base_type);
     $vtable = load4($7);
     $vfn = ((($vtable)) + 20|0);
     $8 = load4($vfn);
     FUNCTION_TABLE_viiiiii[$8 & 3]($7,$info,$current_ptr,$current_ptr,1,$use_strcmp);
     $9 = load1($found_any_static_type);
     $tobool16 = ($9<<24>>24)==(0);
     if ($tobool16) {
      $is_dst_type_derived_from_static_type13$0$off035 = 0;
      label = 13;
     } else {
      $10 = load1($found_our_static_ptr);
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
       store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
       $number_to_dst_ptr = ((($info)) + 40|0);
       $11 = load4($number_to_dst_ptr);
       $add = (($11) + 1)|0;
       store4($number_to_dst_ptr,$add);
       $number_to_static_ptr = ((($info)) + 36|0);
       $12 = load4($number_to_static_ptr);
       $cmp26 = ($12|0)==(1);
       if ($cmp26) {
        $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
        $13 = load4($path_dst_ptr_to_static_ptr);
        $cmp27 = ($13|0)==(2);
        if ($cmp27) {
         $search_done = ((($info)) + 54|0);
         store1($search_done,1);
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
     store4($is_dst_type_derived_from_static_type,$14);
     break;
    }
   }
   $cmp7 = ($path_below|0)==(1);
   if ($cmp7) {
    $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
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
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $cmp$i = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
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
 $call = (_pthread_key_create((7780|0),(14|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(6817,$vararg_buffer);
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
 $0 = load4(7780);
 $call = (_pthread_setspecific(($0|0),(0|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(6867,$vararg_buffer);
  // unreachable;
 }
}
function __ZSt11__terminatePFvvE($func) {
 $func = $func|0;
 var $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 FUNCTION_TABLE_v[$func & 3]();
 _abort_message(6920,$vararg_buffer);
 // unreachable;
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
 _free($this);
 return;
}
function __ZNKSt9bad_alloc4whatEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (6960|0);
}
function __ZN10__cxxabiv123__fundamental_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($this);
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
function __ZN10__cxxabiv119__pointer_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($this);
 return;
}
function __ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type,$adjustedPtr) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 $adjustedPtr = $adjustedPtr|0;
 var $$cmp$i2$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__flags = 0;
 var $__flags4 = 0, $__pointee = 0, $__pointee7 = 0, $and = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i15 = 0, $cmp$i2$i = 0, $cmp19 = 0, $cmp26 = 0, $cmp29 = 0, $dst_ptr_leading_to_static_ptr = 0, $info = 0, $neg = 0, $number_of_dst_type = 0, $or$cond = 0, $path_dst_ptr_to_static_ptr = 0, $retval$0 = 0, $retval$4 = 0;
 var $src2dst_offset = 0, $static_type = 0, $tobool = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $0 = load4($adjustedPtr);
 $1 = load4($0);
 store4($adjustedPtr,$1);
 $cmp$i$i = ($this|0)==($thrown_type|0);
 $cmp$i2$i = ($thrown_type|0)==(1512|0);
 $$cmp$i2$i = $cmp$i$i | $cmp$i2$i;
 if ($$cmp$i2$i) {
  $retval$4 = 1;
 } else {
  $2 = ($thrown_type|0)==(0|0);
  if ($2) {
   $retval$4 = 0;
  } else {
   $3 = (___dynamic_cast($thrown_type,1472)|0);
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
     $cmp$i = ($6|0)==($7|0);
     $cmp$i15 = ($6|0)==(1504|0);
     $or$cond = $cmp$i15 | $cmp$i;
     if ($or$cond) {
      $retval$4 = 1;
     } else {
      $8 = ($6|0)==(0|0);
      if ($8) {
       $retval$4 = 0;
      } else {
       $9 = (___dynamic_cast($6,1384)|0);
       $cmp19 = ($9|0)==(0|0);
       if ($cmp19) {
        $retval$4 = 0;
       } else {
        $10 = load4($__pointee7);
        $11 = ($10|0)==(0|0);
        if ($11) {
         $retval$4 = 0;
        } else {
         $12 = (___dynamic_cast($10,1384)|0);
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
    } else {
     $retval$4 = 0;
    }
   }
  }
 }
 STACKTOP = sp;return ($retval$4|0);
}
function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($this);
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
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $found_our_static_ptr2 = ((($info)) + 52|0);
  $1 = load2($found_our_static_ptr2);
  $2 = $1&255;
  $found_any_static_type5 = ((($info)) + 53|0);
  $3 = ($1&65535) >>> 8;
  $4 = $3&255;
  $arraydecay = ((($this)) + 16|0);
  $__base_count = ((($this)) + 12|0);
  $5 = load4($__base_count);
  $add$ptr = (((($this)) + 16|0) + ($5<<3)|0);
  store1($found_our_static_ptr2,0);
  store1($found_any_static_type5,0);
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
     $6 = load1($search_done);
     $tobool14 = ($6<<24>>24)==(0);
     if (!($tobool14)) {
      break L4;
     }
     $7 = load2($found_our_static_ptr2);
     $8 = $7&255;
     $tobool17 = ($8<<24>>24)==(0);
     if ($tobool17) {
      $tobool27 = ($7&65535)<(256);
      if (!($tobool27)) {
       $11 = load4($__flags);
       $and30 = $11 & 1;
       $tobool31 = ($and30|0)==(0);
       if ($tobool31) {
        break L4;
       }
      }
     } else {
      $9 = load4($path_dst_ptr_to_static_ptr);
      $cmp19 = ($9|0)==(1);
      if ($cmp19) {
       break L4;
      }
      $10 = load4($__flags);
      $and = $10 & 2;
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
  store1($found_our_static_ptr2,$2);
  store1($found_any_static_type5,$4);
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
 var $cmp = 0, $cmp$i = 0, $cmp$i77 = 0, $cmp$i78 = 0, $cmp100 = 0, $cmp106 = 0, $cmp11 = 0, $cmp115 = 0, $cmp121 = 0, $cmp16 = 0, $cmp164 = 0, $cmp2$i = 0, $cmp27 = 0, $cmp44 = 0, $cmp46 = 0, $cmp5 = 0, $cmp7 = 0, $cmp70 = 0, $cmp77 = 0, $cmp85 = 0;
 var $cmp97 = 0, $does_dst_type_point_to_our_static_type$0$off0$lcssa = 0, $does_dst_type_point_to_our_static_type$0$off05 = 0, $does_dst_type_point_to_our_static_type$1$off0 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $incdec$ptr = 0, $incdec$ptr105 = 0, $incdec$ptr120 = 0, $incdec$ptr69 = 0, $incdec$ptr84 = 0, $is_dst_type_derived_from_static_type = 0, $is_dst_type_derived_from_static_type13$0$off07 = 0, $is_dst_type_derived_from_static_type13$1$off0 = 0, $is_dst_type_derived_from_static_type13$2$off0 = 0, $is_dst_type_derived_from_static_type13$2$off015 = 0, $is_dst_type_derived_from_static_type13$2$off016 = 0, $number_to_dst_ptr = 0;
 var $number_to_static_ptr = 0, $number_to_static_ptr76 = 0, $p$06 = 0, $p65$0 = 0, $p65$1 = 0, $p65$2 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dst_ptr_to_static_ptr99 = 0, $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_dst_ptr10 = 0, $path_dynamic_ptr_to_static_ptr$i = 0, $search_done = 0, $search_done110 = 0, $search_done79 = 0, $search_done92 = 0, $static_ptr$i = 0, $static_type = 0, $tobool111 = 0, $tobool18 = 0, $tobool22 = 0;
 var $tobool25 = 0, $tobool30 = 0, $tobool36 = 0, $tobool74 = 0, $tobool80 = 0, $tobool89 = 0, $tobool93 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 L1: do {
  if ($cmp$i) {
   $static_ptr$i = ((($info)) + 4|0);
   $1 = load4($static_ptr$i);
   $cmp$i77 = ($1|0)==($current_ptr|0);
   if ($cmp$i77) {
    $path_dynamic_ptr_to_static_ptr$i = ((($info)) + 28|0);
    $2 = load4($path_dynamic_ptr_to_static_ptr$i);
    $cmp2$i = ($2|0)==(1);
    if (!($cmp2$i)) {
     store4($path_dynamic_ptr_to_static_ptr$i,$path_below);
    }
   }
  } else {
   $3 = load4($info);
   $cmp$i78 = ($this|0)==($3|0);
   if (!($cmp$i78)) {
    $arraydecay62 = ((($this)) + 16|0);
    $__base_count63 = ((($this)) + 12|0);
    $18 = load4($__base_count63);
    $add$ptr64 = (((($this)) + 16|0) + ($18<<3)|0);
    __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($arraydecay62,$info,$current_ptr,$path_below,$use_strcmp);
    $incdec$ptr69 = ((($this)) + 24|0);
    $cmp70 = ($18|0)>(1);
    if (!($cmp70)) {
     break;
    }
    $__flags72 = ((($this)) + 8|0);
    $19 = load4($__flags72);
    $and73 = $19 & 2;
    $tobool74 = ($and73|0)==(0);
    if ($tobool74) {
     $number_to_static_ptr76 = ((($info)) + 36|0);
     $20 = load4($number_to_static_ptr76);
     $cmp77 = ($20|0)==(1);
     if (!($cmp77)) {
      $and88 = $19 & 1;
      $tobool89 = ($and88|0)==(0);
      if ($tobool89) {
       $search_done110 = ((($info)) + 54|0);
       $p65$2 = $incdec$ptr69;
       while(1) {
        $25 = load1($search_done110);
        $tobool111 = ($25<<24>>24)==(0);
        if (!($tobool111)) {
         break L1;
        }
        $26 = load4($number_to_static_ptr76);
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
       $22 = load1($search_done92);
       $tobool93 = ($22<<24>>24)==(0);
       if (!($tobool93)) {
        break L1;
       }
       $23 = load4($number_to_static_ptr76);
       $cmp97 = ($23|0)==(1);
       if ($cmp97) {
        $24 = load4($path_dst_ptr_to_static_ptr99);
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
     $21 = load1($search_done79);
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
   $4 = load4($dst_ptr_leading_to_static_ptr);
   $cmp = ($4|0)==($current_ptr|0);
   if (!($cmp)) {
    $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
    $5 = load4($dst_ptr_not_leading_to_static_ptr);
    $cmp5 = ($5|0)==($current_ptr|0);
    if (!($cmp5)) {
     $path_dynamic_ptr_to_dst_ptr10 = ((($info)) + 32|0);
     store4($path_dynamic_ptr_to_dst_ptr10,$path_below);
     $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
     $6 = load4($is_dst_type_derived_from_static_type);
     $cmp11 = ($6|0)==(4);
     if ($cmp11) {
      break;
     }
     $__base_count = ((($this)) + 12|0);
     $7 = load4($__base_count);
     $add$ptr = (((($this)) + 16|0) + ($7<<3)|0);
     $found_our_static_ptr = ((($info)) + 52|0);
     $found_any_static_type = ((($info)) + 53|0);
     $search_done = ((($info)) + 54|0);
     $__flags34 = ((($this)) + 8|0);
     $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
     $cmp164 = ($7|0)>(0);
     L34: do {
      if ($cmp164) {
       $arraydecay = ((($this)) + 16|0);
       $does_dst_type_point_to_our_static_type$0$off05 = 0;$is_dst_type_derived_from_static_type13$0$off07 = 0;$p$06 = $arraydecay;
       L36: while(1) {
        store1($found_our_static_ptr,0);
        store1($found_any_static_type,0);
        __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($p$06,$info,$current_ptr,$current_ptr,1,$use_strcmp);
        $8 = load1($search_done);
        $tobool18 = ($8<<24>>24)==(0);
        if (!($tobool18)) {
         $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$2$off0 = $is_dst_type_derived_from_static_type13$0$off07;
         break;
        }
        $9 = load1($found_any_static_type);
        $tobool22 = ($9<<24>>24)==(0);
        do {
         if ($tobool22) {
          $does_dst_type_point_to_our_static_type$1$off0 = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$1$off0 = $is_dst_type_derived_from_static_type13$0$off07;
         } else {
          $10 = load1($found_our_static_ptr);
          $tobool25 = ($10<<24>>24)==(0);
          if ($tobool25) {
           $13 = load4($__flags34);
           $and35 = $13 & 1;
           $tobool36 = ($and35|0)==(0);
           if ($tobool36) {
            $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$2$off0 = 1;
            break L36;
           } else {
            $does_dst_type_point_to_our_static_type$1$off0 = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$1$off0 = 1;
            break;
           }
          }
          $11 = load4($path_dst_ptr_to_static_ptr);
          $cmp27 = ($11|0)==(1);
          if ($cmp27) {
           label = 25;
           break L34;
          }
          $12 = load4($__flags34);
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
        label = 24;
       } else {
        $is_dst_type_derived_from_static_type13$2$off015 = $is_dst_type_derived_from_static_type13$2$off0;
        label = 21;
       }
      } else {
       $is_dst_type_derived_from_static_type13$2$off015 = 0;
       label = 21;
      }
     } while(0);
     if ((label|0) == 21) {
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $14 = load4($number_to_dst_ptr);
      $add = (($14) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $number_to_static_ptr = ((($info)) + 36|0);
      $15 = load4($number_to_static_ptr);
      $cmp44 = ($15|0)==(1);
      if ($cmp44) {
       $16 = load4($path_dst_ptr_to_static_ptr);
       $cmp46 = ($16|0)==(2);
       if ($cmp46) {
        store1($search_done,1);
        if ($is_dst_type_derived_from_static_type13$2$off015) {
         label = 25;
        } else {
         $17 = 4;
        }
       } else {
        $is_dst_type_derived_from_static_type13$2$off016 = $is_dst_type_derived_from_static_type13$2$off015;
        label = 24;
       }
      } else {
       $is_dst_type_derived_from_static_type13$2$off016 = $is_dst_type_derived_from_static_type13$2$off015;
       label = 24;
      }
     }
     if ((label|0) == 24) {
      if ($is_dst_type_derived_from_static_type13$2$off016) {
       label = 25;
      } else {
       $17 = 4;
      }
     }
     if ((label|0) == 25) {
      $17 = 3;
     }
     store4($is_dst_type_derived_from_static_type,$17);
     break;
    }
   }
   $cmp7 = ($path_below|0)==(1);
   if ($cmp7) {
    $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
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
 var $0 = 0, $1 = 0, $2 = 0, $__base_count = 0, $add$ptr = 0, $arraydecay = 0, $cmp = 0, $cmp$i = 0, $cmp7 = 0, $incdec$ptr = 0, $incdec$ptr6 = 0, $p$0 = 0, $search_done = 0, $static_type = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 L1: do {
  if ($cmp$i) {
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
 FUNCTION_TABLE_viiiii[$4 & 7]($3,$info,$add$ptr4,$cond,$use_strcmp);
 return;
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
 $call = (FUNCTION_TABLE_iiii[$1 & 7]($catchType,$excpType,$temp)|0);
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
  $1 = (___dynamic_cast($type,1472)|0);
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
  return FUNCTION_TABLE_iiii[index&7](a1|0,a2|0,a3|0)|0;
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&7](a1|0,a2|0,a3|0,a4|0,a5|0);
}


function dynCall_i(index) {
  index = index|0;
  
  return FUNCTION_TABLE_i[index&3]()|0;
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&15](a1|0);
}


function dynCall_vii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  FUNCTION_TABLE_vii[index&1](a1|0,a2|0);
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
  return FUNCTION_TABLE_iiiii[index&1](a1|0,a2|0,a3|0,a4|0)|0;
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_iii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  return FUNCTION_TABLE_iii[index&7](a1|0,a2|0)|0;
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
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorI5VNodeNS3_9allocatorIS5_EEEEjES2_SA_JjEE6invokeEPSC_PS8_j,__ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3setERS7_jRKS4_];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__Z1hNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_9VNodeDataNS_6vectorI5VNodeNS3_IS8_EEEE,b1,b1,b1];
var FUNCTION_TABLE_i = [b2,__ZN10emscripten8internal12operator_newI9VNodeDataJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newI5VNodeJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEEEPT_DpOT0_];
var FUNCTION_TABLE_vi = [b3,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,__ZN10__cxxabiv119__pointer_type_infoD0Ev,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,__ZN10emscripten8internal14raw_destructorI9VNodeDataEEvPT_,__ZN10emscripten8internal14raw_destructorI5VNodeEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEvPT_,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b3];
var FUNCTION_TABLE_vii = [b4,__ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE9push_backERKS1_];
var FUNCTION_TABLE_ii = [b5,___stdio_close,__ZNKSt9bad_alloc4whatEv,__ZN10emscripten8internal13getActualTypeI9VNodeDataEEPKvPT_,__ZN10emscripten8internal7InvokerIP9VNodeDataJEE6invokeEPFS3_vE,__ZN10emscripten8internal13getActualTypeI5VNodeEEPKvPT_,__ZN10emscripten8internal7InvokerIP5VNodeJEE6invokeEPFS3_vE,__ZN10emscripten8internal13getActualTypeINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEE6invokeEPFS8_vE,__ZNKSt3__26vectorI5VNodeNS_9allocatorIS1_EEE4sizeEv,b5,b5,b5,b5,b5,b5];
var FUNCTION_TABLE_viii = [b6,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E,__ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7setWireIS2_EEvRKMS2_S3_RT_PS3_,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7setWireIS2_EEvRKMS2_S7_RT_PS7_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvRKS4_EvPS7_JS9_EE6invokeERKSB_SC_PS4_,__ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6resizeEjRKS1_,b6];
var FUNCTION_TABLE_v = [b7,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b7];
var FUNCTION_TABLE_iiiii = [b8,__ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEjRKS4_EbS8_JjSA_EE6invokeEPSC_PS7_jPS4_];
var FUNCTION_TABLE_viiiiii = [b9,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib];
var FUNCTION_TABLE_iii = [b10,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_,__ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7getWireIS2_EEPS3_RKMS2_S3_RKT_,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7getWireIS2_EEPS7_RKMS2_S7_RKT_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEKFjvEjPKS7_JEE6invokeERKS9_SB_,__ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3getERKS7_j,b10];
var FUNCTION_TABLE_iiiiii = [b11,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES9_9VNodeDataNS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_S9_SA_SD_EPNS0_11BindingTypeIS9_EUt_ESK_PSA_PSD_];
var FUNCTION_TABLE_viiii = [b12,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvjRKS4_EvPS7_JjS9_EE6invokeERKSB_SC_jPS4_,b12,b12,b12];

  return { _sbrk: _sbrk, ___cxa_can_catch: ___cxa_can_catch, _free: _free, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _memmove: _memmove, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, ___getTypeName: ___getTypeName, __GLOBAL__sub_I_app_cpp: __GLOBAL__sub_I_app_cpp, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_i: dynCall_i, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
;