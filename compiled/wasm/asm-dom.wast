(module
  (type $FUNCSIG$v (func))
  (type $FUNCSIG$id (func (param f64) (result i32)))
  (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
  (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
  (type $FUNCSIG$ii (func (param i32) (result i32)))
  (type $FUNCSIG$viiii (func (param i32 i32 i32 i32)))
  (type $FUNCSIG$viiiiii (func (param i32 i32 i32 i32 i32 i32)))
  (type $FUNCSIG$viiiii (func (param i32 i32 i32 i32 i32)))
  (type $FUNCSIG$vi (func (param i32)))
  (type $FUNCSIG$i (func (result i32)))
  (type $FUNCSIG$viii (func (param i32 i32 i32)))
  (type $FUNCSIG$vii (func (param i32 i32)))
  (import "env" "DYNAMICTOP_PTR" (global $DYNAMICTOP_PTR$asm2wasm$import i32))
  (import "env" "STACKTOP" (global $STACKTOP$asm2wasm$import i32))
  (import "env" "STACK_MAX" (global $STACK_MAX$asm2wasm$import i32))
  (import "env" "abort" (func $abort (param i32)))
  (import "env" "enlargeMemory" (func $enlargeMemory (result i32)))
  (import "env" "getTotalMemory" (func $getTotalMemory (result i32)))
  (import "env" "abortOnCannotGrowMemory" (func $abortOnCannotGrowMemory (result i32)))
  (import "env" "_pthread_key_create" (func $_pthread_key_create (param i32 i32) (result i32)))
  (import "env" "__embind_register_memory_view" (func $__embind_register_memory_view (param i32 i32 i32)))
  (import "env" "_abort" (func $_abort))
  (import "env" "___assert_fail" (func $___assert_fail (param i32 i32 i32 i32)))
  (import "env" "__embind_register_void" (func $__embind_register_void (param i32 i32)))
  (import "env" "__emval_take_value" (func $__emval_take_value (param i32 i32) (result i32)))
  (import "env" "___setErrNo" (func $___setErrNo (param i32)))
  (import "env" "__embind_register_std_wstring" (func $__embind_register_std_wstring (param i32 i32 i32)))
  (import "env" "_emscripten_memcpy_big" (func $_emscripten_memcpy_big (param i32 i32 i32) (result i32)))
  (import "env" "__embind_register_bool" (func $__embind_register_bool (param i32 i32 i32 i32 i32)))
  (import "env" "__emval_incref" (func $__emval_incref (param i32)))
  (import "env" "_pthread_getspecific" (func $_pthread_getspecific (param i32) (result i32)))
  (import "env" "__embind_register_emval" (func $__embind_register_emval (param i32 i32)))
  (import "env" "__emval_decref" (func $__emval_decref (param i32)))
  (import "env" "_pthread_once" (func $_pthread_once (param i32 i32) (result i32)))
  (import "env" "__embind_register_integer" (func $__embind_register_integer (param i32 i32 i32 i32 i32)))
  (import "env" "__embind_register_float" (func $__embind_register_float (param i32 i32 i32)))
  (import "env" "_pthread_setspecific" (func $_pthread_setspecific (param i32 i32) (result i32)))
  (import "env" "___syscall6" (func $___syscall6 (param i32 i32) (result i32)))
  (import "env" "___syscall140" (func $___syscall140 (param i32 i32) (result i32)))
  (import "env" "__embind_register_std_string" (func $__embind_register_std_string (param i32 i32)))
  (import "env" "___syscall146" (func $___syscall146 (param i32 i32) (result i32)))
  (import "asm2wasm" "f64-to-int" (func $f64-to-int (param f64) (result i32)))
  (import "asm2wasm" "i32s-div" (func $i32s-div (param i32 i32) (result i32)))
  (import "asm2wasm" "i32s-rem" (func $i32s-rem (param i32 i32) (result i32)))
  (import "asm2wasm" "i32u-rem" (func $i32u-rem (param i32 i32) (result i32)))
  (import "asm2wasm" "i32u-div" (func $i32u-div (param i32 i32) (result i32)))
  (import "env" "memory" (memory $0 256 256))
  (import "env" "table" (table 42 42 anyfunc))
  (import "env" "memoryBase" (global $memoryBase i32))
  (import "env" "tableBase" (global $tableBase i32))
  (global $DYNAMICTOP_PTR (mut i32) (get_global $DYNAMICTOP_PTR$asm2wasm$import))
  (global $STACKTOP (mut i32) (get_global $STACKTOP$asm2wasm$import))
  (global $STACK_MAX (mut i32) (get_global $STACK_MAX$asm2wasm$import))
  (global $__THREW__ (mut i32) (i32.const 0))
  (global $threwValue (mut i32) (i32.const 0))
  (global $tempRet0 (mut i32) (i32.const 0))
  (elem (get_global $tableBase) $b0 $___stdio_write $___stdio_seek $__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv $__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv $b0 $b0 $b0 $b1 $__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $b2 $__ZN10__cxxabiv116__shim_type_infoD2Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN10__cxxabiv116__shim_type_infoD2Ev $__ZN10__cxxabiv116__shim_type_infoD2Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv $b2 $b2 $b2 $b2 $b2 $b2 $b2 $b3 $___stdio_close $b4 $__ZL25default_terminate_handlerv $__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev $b4 $b5 $__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib $__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib $__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib $b6 $__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi $__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi $__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi)
  (data (i32.const 1024) "\8c\06\00\00\ac\06\00\00\00\00\00\00\01\00\00\00\18\04\00\00\00\00\00\00 \06\00\00\eb\06\00\00 \06\00\00\11\07\00\00\8c\06\00\00\b6\0b\00\00\00\00\00\00\01\00\00\00\18\04\00\00\00\00\00\00\8c\06\00\00w\0b\00\00\00\00\00\00\01\00\00\00\18\04\00\00\00\00\00\00 \06\00\00X\0b\00\00 \06\00\009\0b\00\00 \06\00\00\1a\0b\00\00 \06\00\00\fb\n\00\00 \06\00\00\dc\n\00\00 \06\00\00\bd\n\00\00 \06\00\00\9e\n\00\00 \06\00\00\7f\n\00\00 \06\00\00`\n\00\00 \06\00\00A\n\00\00 \06\00\00\"\n\00\00 \06\00\00\03\n\00\00 \06\00\00\8b\16\00\00H\06\00\00\eb\16\00\00\d0\04\00\00\00\00\00\00H\06\00\00\98\16\00\00\e0\04\00\00\00\00\00\00 \06\00\00\b9\16\00\00H\06\00\00\c6\16\00\00\c0\04\00\00\00\00\00\00H\06\00\00\f1\17\00\00\d0\04\00\00\00\00\00\00H\06\00\00\cd\17\00\00\f8\04\00\00\00\00\00\00H\06\00\00\13\18\00\00\d0\04\00\00\00\00\00\00p\06\00\00;\18\00\00p\06\00\00=\18\00\00p\06\00\00?\18\00\00p\06\00\00A\18\00\00p\06\00\00C\18\00\00p\06\00\00E\18\00\00p\06\00\00G\18\00\00p\06\00\00I\18\00\00p\06\00\00K\18\00\00p\06\00\00M\18\00\00p\06\00\00O\18\00\00p\06\00\00Q\18\00\00p\06\00\00S\18\00\00H\06\00\00U\18\00\00\c0\04\00\00\00\00\00\00\01\00\00\00\05")
  (data (i32.const 1456) "\01")
  (data (i32.const 1480) "\01\00\00\00\02\00\00\00\f0\1a")
  (data (i32.const 1504) "\02")
  (data (i32.const 1519) "\ff\ff\ff\ff\ff")
  (data (i32.const 1556) "\01\00\00\00\00\00\00\00\c0\04\00\00\01\00\00\00\02\00\00\00\03\00\00\00\04\00\00\00\03\00\00\00\01\00\00\00\01\00\00\00\01\00\00\00\00\00\00\00\e8\04\00\00\01\00\00\00\05\00\00\00\03\00\00\00\04\00\00\00\03\00\00\00\02\00\00\00\02\00\00\00\02\00\00\00\00\00\00\00\18\05\00\00\01\00\00\00\06\00\00\00\03\00\00\00\04\00\00\00\04\00\00\00\00\00\00\00\90\05\00\00\01\00\00\00\07\00\00\00\03\00\00\00\04\00\00\00\03\00\00\00\03\00\00\00\03\00\00\00\03\00\00\00NSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE\00NSt3__221__basic_string_commonILb1EEE\00N10emscripten3valE\00http://www.w3.org/2000/svg\00foreignObject\00void\00bool\00char\00long\00std::basic_string<unsigned char>\00std::wstring\00emscripten::val\00emscripten::memory_view<char>\00emscripten::memory_view<signed char>\00emscripten::memory_view<unsigned char>\00emscripten::memory_view<short>\00emscripten::memory_view<unsigned short>\00emscripten::memory_view<int>\00emscripten::memory_view<unsigned int>\00emscripten::memory_view<long>\00emscripten::memory_view<unsigned long>\00emscripten::memory_view<int8_t>\00emscripten::memory_view<uint8_t>\00emscripten::memory_view<int16_t>\00emscripten::memory_view<uint16_t>\00emscripten::memory_view<int32_t>\00emscripten::memory_view<uint32_t>\00emscripten::memory_view<float>\00emscripten::memory_view<double>\00emscripten::memory_view<long double>\00N10emscripten11memory_viewIeEE\00N10emscripten11memory_viewIdEE\00N10emscripten11memory_viewIfEE\00N10emscripten11memory_viewImEE\00N10emscripten11memory_viewIlEE\00N10emscripten11memory_viewIjEE\00N10emscripten11memory_viewIiEE\00N10emscripten11memory_viewItEE\00N10emscripten11memory_viewIsEE\00N10emscripten11memory_viewIhEE\00N10emscripten11memory_viewIaEE\00N10emscripten11memory_viewIcEE\00NSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE\00NSt3__212basic_stringIhNS_11char_traitsIhEENS_9allocatorIhEEEE\00\11\00\n\00\11\11\11\00\00\00\00\05\00\00\00\00\00\00\t\00\00\00\00\0b")
  (data (i32.const 3093) "\11\00\0f\n\11\11\11\03\n\07\00\01\13\t\0b\0b\00\00\t\06\0b\00\00\0b\00\06\11\00\00\00\11\11\11")
  (data (i32.const 3142) "\0b")
  (data (i32.const 3151) "\11\00\n\n\11\11\11\00\n\00\00\02\00\t\0b\00\00\00\t\00\0b\00\00\0b")
  (data (i32.const 3200) "\0c")
  (data (i32.const 3212) "\0c\00\00\00\00\0c\00\00\00\00\t\0c\00\00\00\00\00\0c\00\00\0c")
  (data (i32.const 3258) "\0e")
  (data (i32.const 3270) "\0d\00\00\00\04\0d\00\00\00\00\t\0e\00\00\00\00\00\0e\00\00\0e")
  (data (i32.const 3316) "\10")
  (data (i32.const 3328) "\0f\00\00\00\00\0f\00\00\00\00\t\10\00\00\00\00\00\10\00\00\10\00\00\12\00\00\00\12\12\12")
  (data (i32.const 3383) "\12\00\00\00\12\12\12\00\00\00\00\00\00\t")
  (data (i32.const 3432) "\0b")
  (data (i32.const 3444) "\n\00\00\00\00\n\00\00\00\00\t\0b\00\00\00\00\00\0b\00\00\0b")
  (data (i32.const 3490) "\0c")
  (data (i32.const 3502) "\0c\00\00\00\00\0c\00\00\00\00\t\0c\00\00\00\00\00\0c\00\00\0c\00\000123456789ABCDEF-+   0X0x\00(null)\00-0X+0X 0X-0x+0x 0x\00inf\00INF\00NAN\00T!\"\19\0d\01\02\03\11K\1c\0c\10\04\0b\1d\12\1e\'hnopqb \05\06\0f\13\14\15\1a\08\16\07($\17\18\t\n\0e\1b\1f%#\83\82}&*+<=>?CGJMXYZ[\\]^_`acdefgijklrstyz{|\00Illegal byte sequence\00Domain error\00Result not representable\00Not a tty\00Permission denied\00Operation not permitted\00No such file or directory\00No such process\00File exists\00Value too large for data type\00No space left on device\00Out of memory\00Resource busy\00Interrupted system call\00Resource temporarily unavailable\00Invalid seek\00Cross-device link\00Read-only file system\00Directory not empty\00Connection reset by peer\00Operation timed out\00Connection refused\00Host is down\00Host is unreachable\00Address in use\00Broken pipe\00I/O error\00No such device or address\00Block device required\00No such device\00Not a directory\00Is a directory\00Text file busy\00Exec format error\00Invalid argument\00Argument list too long\00Symbolic link loop\00Filename too long\00Too many open files in system\00No file descriptors available\00Bad file descriptor\00No child process\00Bad address\00File too large\00Too many links\00No locks available\00Resource deadlock would occur\00State not recoverable\00Previous owner died\00Operation canceled\00Function not implemented\00No message of desired type\00Identifier removed\00Device not a stream\00No data available\00Device timeout\00Out of streams resources\00Link has been severed\00Protocol error\00Bad message\00File descriptor in bad state\00Not a socket\00Destination address required\00Message too large\00Protocol wrong type for socket\00Protocol not available\00Protocol not supported\00Socket type not supported\00Not supported\00Protocol family not supported\00Address family not supported by protocol\00Address not available\00Network is down\00Network unreachable\00Connection reset by network\00Connection aborted\00No buffer space available\00Socket is connected\00Socket not connected\00Cannot send after socket shutdown\00Operation already in progress\00Operation in progress\00Stale file handle\00Remote I/O error\00Quota exceeded\00No medium found\00Wrong medium type\00No error information\00\00nan\00!\"vector length_error\"\00/Users/mauriziobasso/Documents/javascript/emsdk/emscripten/incoming/system/include/libcxx/vector\00__throw_length_error\00terminating with %s exception of type %s: %s\00terminating with %s exception of type %s\00terminating with %s foreign exception\00terminating\00uncaught\00St9exception\00N10__cxxabiv116__shim_type_infoE\00St9type_info\00N10__cxxabiv120__si_class_type_infoE\00N10__cxxabiv117__class_type_infoE\00pthread_once failure in __cxa_get_globals_fast()\00cannot create pthread key for __cxa_get_globals()\00cannot zero out thread value for __cxa_get_globals()\00terminate_handler unexpectedly returned\00N10__cxxabiv119__pointer_type_infoE\00N10__cxxabiv117__pbase_type_infoE\00N10__cxxabiv123__fundamental_type_infoE\00v\00b\00c\00h\00a\00s\00t\00i\00j\00l\00m\00f\00d\00N10__cxxabiv121__vmi_class_type_infoE\00std::string\00signed char\00unsigned char\00short\00unsigned short\00.\00int\00unsigned int\00unsigned long\00float\00double")
  (export "_emscripten_bind_VNode_get_key_0" (func $_emscripten_bind_VNode_get_key_0))
  (export "_emscripten_bind_VNode_set_key_1" (func $_emscripten_bind_VNode_set_key_1))
  (export "_emscripten_bind_VNode___destroy___0" (func $_emscripten_bind_VNode___destroy___0))
  (export "_emscripten_bind_VNodeData_get_ns_0" (func $_emscripten_bind_VNodeData_get_ns_0))
  (export "_emscripten_bind_H___destroy___0" (func $_emscripten_bind_H___destroy___0))
  (export "___cxa_is_pointer_type" (func $___cxa_is_pointer_type))
  (export "_emscripten_bind_H_h_2" (func $_emscripten_bind_H_h_2))
  (export "_emscripten_bind_H_h_1" (func $_emscripten_bind_H_h_1))
  (export "_emscripten_bind_VoidPtr___destroy___0" (func $_emscripten_bind_H___destroy___0))
  (export "_memset" (func $_memset))
  (export "_sbrk" (func $_sbrk))
  (export "_memcpy" (func $_memcpy))
  (export "_emscripten_bind_VNode_get_sel_0" (func $_emscripten_bind_VNode_get_sel_0))
  (export "_emscripten_bind_VNodeData___destroy___0" (func $_emscripten_bind_VNodeData___destroy___0))
  (export "___getTypeName" (func $___getTypeName))
  (export "_emscripten_bind_VNodeData_set_ns_1" (func $_emscripten_bind_VNodeData_set_ns_1))
  (export "_emscripten_bind_VNode_set_sel_1" (func $_emscripten_bind_VNode_set_sel_1))
  (export "_emscripten_bind_VNode_set_data_1" (func $_emscripten_bind_VNode_set_data_1))
  (export "_emscripten_bind_VNode_set_children_2" (func $_emscripten_bind_VNode_set_children_2))
  (export "_emscripten_bind_VNode_set_text_1" (func $_emscripten_bind_VNode_set_text_1))
  (export "___cxa_can_catch" (func $___cxa_can_catch))
  (export "_emscripten_bind_VNodeData_set_key_1" (func $_emscripten_bind_VNodeData_set_key_1))
  (export "_free" (func $_free))
  (export "_malloc" (func $_malloc))
  (export "_emscripten_bind_VNodeData_get_key_0" (func $_emscripten_bind_VNodeData_get_key_0))
  (export "_emscripten_bind_VNode_get_text_0" (func $_emscripten_bind_VNode_get_text_0))
  (export "_emscripten_bind_VNode_get_data_0" (func $_emscripten_bind_VNode_get_data_0))
  (export "__GLOBAL__sub_I_bind_cpp" (func $__GLOBAL__sub_I_bind_cpp))
  (export "runPostSets" (func $runPostSets))
  (export "stackAlloc" (func $stackAlloc))
  (export "stackSave" (func $stackSave))
  (export "stackRestore" (func $stackRestore))
  (export "establishStackSpace" (func $establishStackSpace))
  (export "setThrew" (func $setThrew))
  (export "setTempRet0" (func $setTempRet0))
  (export "getTempRet0" (func $getTempRet0))
  (export "dynCall_iiii" (func $dynCall_iiii))
  (export "dynCall_viiiii" (func $dynCall_viiiii))
  (export "dynCall_vi" (func $dynCall_vi))
  (export "dynCall_ii" (func $dynCall_ii))
  (export "dynCall_v" (func $dynCall_v))
  (export "dynCall_viiiiii" (func $dynCall_viiiiii))
  (export "dynCall_viiii" (func $dynCall_viiii))
  (func $stackAlloc (param $0 i32) (result i32)
    (local $1 i32)
    (set_local $1
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (get_local $0)
      )
    )
    (set_global $STACKTOP
      (i32.and
        (i32.add
          (get_global $STACKTOP)
          (i32.const 15)
        )
        (i32.const -16)
      )
    )
    (get_local $1)
  )
  (func $stackSave (result i32)
    (get_global $STACKTOP)
  )
  (func $stackRestore (param $0 i32)
    (set_global $STACKTOP
      (get_local $0)
    )
  )
  (func $establishStackSpace (param $0 i32) (param $1 i32)
    (set_global $STACKTOP
      (get_local $0)
    )
    (set_global $STACK_MAX
      (get_local $1)
    )
  )
  (func $setThrew (param $0 i32) (param $1 i32)
    (if
      (i32.eqz
        (get_global $__THREW__)
      )
      (block
        (set_global $__THREW__
          (get_local $0)
        )
        (set_global $threwValue
          (get_local $1)
        )
      )
    )
  )
  (func $setTempRet0 (param $0 i32)
    (set_global $tempRet0
      (get_local $0)
    )
  )
  (func $getTempRet0 (result i32)
    (get_global $tempRet0)
  )
  (func $__Z5addNSP5VNode (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (i32.store offset=40
      (i32.load offset=12
        (get_local $0)
      )
      (i32.const 1828)
    )
    (if
      (i32.eq
        (i32.load8_s
          (tee_local $1
            (i32.load
              (get_local $0)
            )
          )
        )
        (i32.const 102)
      )
      (block
        (set_local $2
          (i32.const 1855)
        )
        (loop $while-in
          (br_if $while-in
            (i32.eqz
              (i32.or
                (i32.eqz
                  (i32.shr_s
                    (i32.shl
                      (tee_local $3
                        (i32.load8_s
                          (tee_local $1
                            (i32.add
                              (get_local $1)
                              (i32.const 1)
                            )
                          )
                        )
                      )
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                )
                (i32.ne
                  (i32.shr_s
                    (i32.shl
                      (get_local $3)
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                  (i32.shr_s
                    (i32.shl
                      (tee_local $4
                        (i32.load8_s
                          (tee_local $2
                            (i32.add
                              (get_local $2)
                              (i32.const 1)
                            )
                          )
                        )
                      )
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                )
              )
            )
          )
        )
        (if
          (i32.eq
            (i32.shr_s
              (i32.shl
                (get_local $3)
                (i32.const 24)
              )
              (i32.const 24)
            )
            (i32.shr_s
              (i32.shl
                (get_local $4)
                (i32.const 24)
              )
              (i32.const 24)
            )
          )
          (return)
        )
      )
    )
    (if
      (i32.eq
        (tee_local $1
          (i32.load offset=20
            (get_local $0)
          )
        )
        (tee_local $2
          (i32.load offset=24
            (get_local $0)
          )
        )
      )
      (return)
      (set_local $0
        (get_local $1)
      )
    )
    (loop $while-in1
      (if
        (i32.load offset=12
          (tee_local $1
            (i32.load
              (get_local $0)
            )
          )
        )
        (call $__Z5addNSP5VNode
          (get_local $1)
        )
      )
      (br_if $while-in1
        (i32.ne
          (tee_local $0
            (i32.add
              (get_local $0)
              (i32.const 4)
            )
          )
          (get_local $2)
        )
      )
    )
  )
  (func $__ZN1H1hEPKc (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (set_local $4
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $1
      (get_local $4)
    )
    (block $label$break$L1
      (if
        (i32.eqz
          (tee_local $2
            (call $_malloc
              (i32.const 32)
            )
          )
        )
        (loop $while-in
          (i32.store
            (i32.const 6884)
            (i32.add
              (tee_local $3
                (i32.load
                  (i32.const 6884)
                )
              )
              (i32.const 0)
            )
          )
          (if
            (i32.eqz
              (get_local $3)
            )
            (block
              (set_local $2
                (i32.const 0)
              )
              (br $label$break$L1)
            )
          )
          (call_indirect $FUNCSIG$v
            (i32.add
              (i32.and
                (get_local $3)
                (i32.const 3)
              )
              (i32.const 30)
            )
          )
          (br_if $while-in
            (i32.eqz
              (tee_local $2
                (call $_malloc
                  (i32.const 32)
                )
              )
            )
          )
        )
      )
    )
    (call $__emval_incref
      (i32.const 1)
    )
    (i32.store
      (get_local $1)
      (i32.load
        (i32.const 1440)
      )
    )
    (i32.store offset=16
      (get_local $2)
      (call $__emval_take_value
        (i32.const 1056)
        (get_local $1)
      )
    )
    (i32.store offset=20
      (get_local $2)
      (i32.const 0)
    )
    (i32.store offset=24
      (get_local $2)
      (i32.const 0)
    )
    (i32.store offset=28
      (get_local $2)
      (i32.const 0)
    )
    (i32.store
      (get_local $2)
      (get_local $0)
    )
    (block $__rjto$0
      (block $__rjti$0
        (if
          (i32.and
            (tee_local $5
              (get_local $0)
            )
            (i32.const 3)
          )
          (block
            (set_local $1
              (get_local $5)
            )
            (set_local $3
              (get_local $0)
            )
            (loop $while-in2
              (br_if $__rjto$0
                (i32.eqz
                  (i32.load8_s
                    (get_local $3)
                  )
                )
              )
              (br_if $while-in2
                (i32.and
                  (tee_local $1
                    (tee_local $3
                      (i32.add
                        (get_local $3)
                        (i32.const 1)
                      )
                    )
                  )
                  (i32.const 3)
                )
              )
              (set_local $1
                (get_local $3)
              )
              (br $__rjti$0)
            )
          )
          (block
            (set_local $1
              (get_local $0)
            )
            (br $__rjti$0)
          )
        )
      )
      (loop $while-in4
        (set_local $3
          (i32.add
            (get_local $1)
            (i32.const 4)
          )
        )
        (if
          (i32.eqz
            (i32.and
              (i32.xor
                (i32.and
                  (tee_local $6
                    (i32.load
                      (get_local $1)
                    )
                  )
                  (i32.const -2139062144)
                )
                (i32.const -2139062144)
              )
              (i32.add
                (get_local $6)
                (i32.const -16843009)
              )
            )
          )
          (block
            (set_local $1
              (get_local $3)
            )
            (br $while-in4)
          )
        )
      )
      (if
        (i32.shr_s
          (i32.shl
            (i32.and
              (get_local $6)
              (i32.const 255)
            )
            (i32.const 24)
          )
          (i32.const 24)
        )
        (loop $while-in6
          (br_if $while-in6
            (i32.load8_s
              (tee_local $1
                (i32.add
                  (get_local $1)
                  (i32.const 1)
                )
              )
            )
          )
        )
      )
    )
    (if
      (i32.le_u
        (tee_local $1
          (i32.sub
            (get_local $1)
            (get_local $5)
          )
        )
        (i32.const 2)
      )
      (block
        (set_global $STACKTOP
          (get_local $4)
        )
        (return
          (get_local $2)
        )
      )
    )
    (if
      (i32.ne
        (i32.load8_s
          (get_local $0)
        )
        (i32.const 115)
      )
      (block
        (set_global $STACKTOP
          (get_local $4)
        )
        (return
          (get_local $2)
        )
      )
    )
    (if
      (i32.ne
        (i32.load8_s offset=1
          (get_local $0)
        )
        (i32.const 118)
      )
      (block
        (set_global $STACKTOP
          (get_local $4)
        )
        (return
          (get_local $2)
        )
      )
    )
    (if
      (i32.ne
        (i32.load8_s offset=2
          (get_local $0)
        )
        (i32.const 103)
      )
      (block
        (set_global $STACKTOP
          (get_local $4)
        )
        (return
          (get_local $2)
        )
      )
    )
    (block $label$break$L32
      (if
        (i32.ne
          (get_local $1)
          (i32.const 3)
        )
        (block
          (block $switch-default
            (block $switch-case
              (br_table $switch-case $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-case $switch-default
                (i32.sub
                  (i32.load8_s offset=3
                    (get_local $0)
                  )
                  (i32.const 35)
                )
              )
            )
            (br $label$break$L32)
          )
          (set_global $STACKTOP
            (get_local $4)
          )
          (return
            (get_local $2)
          )
        )
      )
    )
    (call $__Z5addNSP5VNode
      (get_local $2)
    )
    (set_global $STACKTOP
      (get_local $4)
    )
    (get_local $2)
  )
  (func $_emscripten_bind_H___destroy___0 (param $0 i32)
    (if
      (i32.eqz
        (get_local $0)
      )
      (return)
    )
    (call $_free
      (get_local $0)
    )
  )
  (func $_emscripten_bind_H_h_1 (param $0 i32) (param $1 i32) (result i32)
    (call $__ZN1H1hEPKc
      (get_local $1)
    )
  )
  (func $_emscripten_bind_H_h_2 (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (set_local $4
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $3
      (get_local $4)
    )
    (block $__rjto$0
      (block $__rjti$0
        (if
          (i32.and
            (tee_local $5
              (tee_local $2
                (i32.load
                  (tee_local $3
                    (if i32
                      (get_local $2)
                      (block i32
                        (block $label$break$L3
                          (if
                            (i32.eqz
                              (tee_local $0
                                (call $_malloc
                                  (i32.const 32)
                                )
                              )
                            )
                            (loop $while-in
                              (i32.store
                                (i32.const 6884)
                                (i32.add
                                  (tee_local $0
                                    (i32.load
                                      (i32.const 6884)
                                    )
                                  )
                                  (i32.const 0)
                                )
                              )
                              (if
                                (i32.eqz
                                  (get_local $0)
                                )
                                (block
                                  (set_local $0
                                    (i32.const 0)
                                  )
                                  (br $label$break$L3)
                                )
                              )
                              (call_indirect $FUNCSIG$v
                                (i32.add
                                  (i32.and
                                    (get_local $0)
                                    (i32.const 3)
                                  )
                                  (i32.const 30)
                                )
                              )
                              (br_if $while-in
                                (i32.eqz
                                  (tee_local $0
                                    (call $_malloc
                                      (i32.const 32)
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                        (call $__emval_incref
                          (i32.const 1)
                        )
                        (i32.store
                          (get_local $3)
                          (i32.load
                            (i32.const 1440)
                          )
                        )
                        (i32.store offset=16
                          (get_local $0)
                          (call $__emval_take_value
                            (i32.const 1056)
                            (get_local $3)
                          )
                        )
                        (i32.store offset=20
                          (get_local $0)
                          (i32.const 0)
                        )
                        (i32.store offset=24
                          (get_local $0)
                          (i32.const 0)
                        )
                        (i32.store offset=28
                          (get_local $0)
                          (i32.const 0)
                        )
                        (i32.store offset=8
                          (get_local $0)
                          (get_local $1)
                        )
                        (get_local $0)
                      )
                      (call $__ZN1H1hEPKc
                        (get_local $1)
                      )
                    )
                  )
                )
              )
            )
            (i32.const 3)
          )
          (block
            (set_local $0
              (get_local $5)
            )
            (set_local $1
              (get_local $2)
            )
            (loop $while-in2
              (br_if $__rjto$0
                (i32.eqz
                  (i32.load8_s
                    (get_local $1)
                  )
                )
              )
              (br_if $while-in2
                (i32.and
                  (tee_local $0
                    (tee_local $1
                      (i32.add
                        (get_local $1)
                        (i32.const 1)
                      )
                    )
                  )
                  (i32.const 3)
                )
              )
              (set_local $0
                (get_local $1)
              )
              (br $__rjti$0)
            )
          )
          (block
            (set_local $0
              (get_local $2)
            )
            (br $__rjti$0)
          )
        )
      )
      (loop $while-in4
        (set_local $1
          (i32.add
            (get_local $0)
            (i32.const 4)
          )
        )
        (if
          (i32.eqz
            (i32.and
              (i32.xor
                (i32.and
                  (tee_local $6
                    (i32.load
                      (get_local $0)
                    )
                  )
                  (i32.const -2139062144)
                )
                (i32.const -2139062144)
              )
              (i32.add
                (get_local $6)
                (i32.const -16843009)
              )
            )
          )
          (block
            (set_local $0
              (get_local $1)
            )
            (br $while-in4)
          )
        )
      )
      (if
        (i32.shr_s
          (i32.shl
            (i32.and
              (get_local $6)
              (i32.const 255)
            )
            (i32.const 24)
          )
          (i32.const 24)
        )
        (loop $while-in6
          (br_if $while-in6
            (i32.load8_s
              (tee_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 1)
                )
              )
            )
          )
        )
      )
    )
    (if
      (i32.le_u
        (tee_local $0
          (i32.sub
            (get_local $0)
            (get_local $5)
          )
        )
        (i32.const 2)
      )
      (block
        (set_global $STACKTOP
          (get_local $4)
        )
        (return
          (get_local $3)
        )
      )
    )
    (if
      (i32.ne
        (i32.load8_s
          (get_local $2)
        )
        (i32.const 115)
      )
      (block
        (set_global $STACKTOP
          (get_local $4)
        )
        (return
          (get_local $3)
        )
      )
    )
    (if
      (i32.ne
        (i32.load8_s offset=1
          (get_local $2)
        )
        (i32.const 118)
      )
      (block
        (set_global $STACKTOP
          (get_local $4)
        )
        (return
          (get_local $3)
        )
      )
    )
    (if
      (i32.ne
        (i32.load8_s offset=2
          (get_local $2)
        )
        (i32.const 103)
      )
      (block
        (set_global $STACKTOP
          (get_local $4)
        )
        (return
          (get_local $3)
        )
      )
    )
    (block $label$break$L36
      (if
        (i32.ne
          (get_local $0)
          (i32.const 3)
        )
        (block
          (block $switch-default
            (block $switch-case
              (br_table $switch-case $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-case $switch-default
                (i32.sub
                  (i32.load8_s offset=3
                    (get_local $2)
                  )
                  (i32.const 35)
                )
              )
            )
            (br $label$break$L36)
          )
          (set_global $STACKTOP
            (get_local $4)
          )
          (return
            (get_local $3)
          )
        )
      )
    )
    (call $__Z5addNSP5VNode
      (get_local $3)
    )
    (set_global $STACKTOP
      (get_local $4)
    )
    (get_local $3)
  )
  (func $_emscripten_bind_VNodeData___destroy___0 (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (if
      (i32.eqz
        (get_local $0)
      )
      (return)
    )
    (if
      (tee_local $4
        (i32.load
          (tee_local $3
            (i32.add
              (get_local $0)
              (i32.const 44)
            )
          )
        )
      )
      (block
        (set_local $2
          (i32.add
            (get_local $0)
            (i32.const 48)
          )
        )
        (loop $while-in
          (if
            (i32.ne
              (tee_local $1
                (i32.load
                  (get_local $2)
                )
              )
              (get_local $4)
            )
            (block
              (i32.store
                (get_local $2)
                (tee_local $1
                  (i32.add
                    (get_local $1)
                    (i32.const -4)
                  )
                )
              )
              (call $__emval_decref
                (i32.load
                  (get_local $1)
                )
              )
              (br $while-in)
            )
          )
        )
        (call $_free
          (i32.load
            (get_local $3)
          )
        )
      )
    )
    (call $__emval_decref
      (i32.load offset=28
        (get_local $0)
      )
    )
    (call $__emval_decref
      (i32.load offset=24
        (get_local $0)
      )
    )
    (call $__emval_decref
      (i32.load offset=20
        (get_local $0)
      )
    )
    (call $__emval_decref
      (i32.load offset=16
        (get_local $0)
      )
    )
    (call $__emval_decref
      (i32.load offset=12
        (get_local $0)
      )
    )
    (call $__emval_decref
      (i32.load offset=8
        (get_local $0)
      )
    )
    (call $__emval_decref
      (i32.load offset=4
        (get_local $0)
      )
    )
    (call $__emval_decref
      (i32.load
        (get_local $0)
      )
    )
    (call $_free
      (get_local $0)
    )
  )
  (func $_emscripten_bind_VNodeData_get_key_0 (param $0 i32) (result i32)
    (i32.load offset=36
      (get_local $0)
    )
  )
  (func $_emscripten_bind_VNodeData_get_ns_0 (param $0 i32) (result i32)
    (i32.load offset=40
      (get_local $0)
    )
  )
  (func $_emscripten_bind_VNodeData_set_key_1 (param $0 i32) (param $1 i32)
    (i32.store offset=36
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_VNodeData_set_ns_1 (param $0 i32) (param $1 i32)
    (i32.store offset=40
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_VNode___destroy___0 (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (if
      (i32.eqz
        (get_local $0)
      )
      (return)
    )
    (set_local $3
      (tee_local $1
        (i32.load offset=20
          (get_local $0)
        )
      )
    )
    (if
      (get_local $1)
      (block
        (if
          (i32.ne
            (tee_local $2
              (i32.load
                (tee_local $4
                  (i32.add
                    (get_local $0)
                    (i32.const 24)
                  )
                )
              )
            )
            (get_local $1)
          )
          (i32.store
            (get_local $4)
            (i32.add
              (get_local $2)
              (i32.shl
                (i32.xor
                  (i32.shr_u
                    (i32.sub
                      (i32.add
                        (get_local $2)
                        (i32.const -4)
                      )
                      (get_local $3)
                    )
                    (i32.const 2)
                  )
                  (i32.const -1)
                )
                (i32.const 2)
              )
            )
          )
        )
        (call $_free
          (get_local $1)
        )
      )
    )
    (call $__emval_decref
      (i32.load offset=16
        (get_local $0)
      )
    )
    (call $_free
      (get_local $0)
    )
  )
  (func $_emscripten_bind_VNode_get_data_0 (param $0 i32) (result i32)
    (i32.load offset=12
      (get_local $0)
    )
  )
  (func $_emscripten_bind_VNode_get_key_0 (param $0 i32) (result i32)
    (i32.load offset=4
      (get_local $0)
    )
  )
  (func $_emscripten_bind_VNode_get_sel_0 (param $0 i32) (result i32)
    (i32.load
      (get_local $0)
    )
  )
  (func $_emscripten_bind_VNode_get_text_0 (param $0 i32) (result i32)
    (i32.load offset=8
      (get_local $0)
    )
  )
  (func $_emscripten_bind_VNode_set_children_2 (param $0 i32) (param $1 i32) (param $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (if
      (tee_local $4
        (i32.shr_s
          (tee_local $5
            (i32.shl
              (get_local $2)
              (i32.const 2)
            )
          )
          (i32.const 2)
        )
      )
      (block
        (if
          (i32.gt_u
            (get_local $4)
            (i32.const 1073741823)
          )
          (call $___assert_fail
            (i32.const 5485)
            (i32.const 5508)
            (i32.const 304)
            (i32.const 5605)
          )
        )
        (block $label$break$L6
          (if
            (i32.eqz
              (tee_local $3
                (call $_malloc
                  (tee_local $2
                    (if i32
                      (get_local $2)
                      (get_local $5)
                      (i32.const 1)
                    )
                  )
                )
              )
            )
            (loop $while-in
              (i32.store
                (i32.const 6884)
                (i32.add
                  (tee_local $3
                    (i32.load
                      (i32.const 6884)
                    )
                  )
                  (i32.const 0)
                )
              )
              (if
                (i32.eqz
                  (get_local $3)
                )
                (block
                  (set_local $3
                    (i32.const 0)
                  )
                  (br $label$break$L6)
                )
              )
              (call_indirect $FUNCSIG$v
                (i32.add
                  (i32.and
                    (get_local $3)
                    (i32.const 3)
                  )
                  (i32.const 30)
                )
              )
              (br_if $while-in
                (i32.eqz
                  (tee_local $3
                    (call $_malloc
                      (get_local $2)
                    )
                  )
                )
              )
            )
          )
        )
        (set_local $2
          (get_local $3)
        )
        (set_local $4
          (i32.add
            (get_local $3)
            (i32.shl
              (get_local $4)
              (i32.const 2)
            )
          )
        )
        (if
          (i32.gt_s
            (get_local $5)
            (i32.const 0)
          )
          (block
            (drop
              (call $_memcpy
                (get_local $3)
                (get_local $1)
                (get_local $5)
              )
            )
            (set_local $1
              (get_local $2)
            )
            (set_local $2
              (get_local $4)
            )
          )
          (set_local $1
            (get_local $2)
          )
        )
      )
      (block
        (set_local $1
          (i32.const 0)
        )
        (set_local $2
          (i32.const 0)
        )
        (set_local $4
          (i32.const 0)
        )
      )
    )
    (set_local $6
      (i32.add
        (get_local $0)
        (i32.const 24)
      )
    )
    (if
      (i32.eqz
        (tee_local $3
          (i32.load
            (tee_local $7
              (i32.add
                (get_local $0)
                (i32.const 20)
              )
            )
          )
        )
      )
      (block
        (i32.store
          (get_local $7)
          (get_local $1)
        )
        (i32.store
          (get_local $6)
          (get_local $2)
        )
        (i32.store offset=28
          (get_local $0)
          (get_local $4)
        )
        (return)
      )
    )
    (set_local $5
      (get_local $3)
    )
    (if
      (i32.ne
        (tee_local $8
          (i32.load
            (get_local $6)
          )
        )
        (get_local $3)
      )
      (i32.store
        (get_local $6)
        (i32.add
          (get_local $8)
          (i32.shl
            (i32.xor
              (i32.shr_u
                (i32.sub
                  (i32.add
                    (get_local $8)
                    (i32.const -4)
                  )
                  (get_local $5)
                )
                (i32.const 2)
              )
              (i32.const -1)
            )
            (i32.const 2)
          )
        )
      )
    )
    (call $_free
      (get_local $3)
    )
    (i32.store
      (tee_local $0
        (i32.add
          (get_local $0)
          (i32.const 28)
        )
      )
      (i32.const 0)
    )
    (i32.store
      (get_local $6)
      (i32.const 0)
    )
    (i32.store
      (get_local $7)
      (i32.const 0)
    )
    (i32.store
      (get_local $7)
      (get_local $1)
    )
    (i32.store
      (get_local $6)
      (get_local $2)
    )
    (i32.store
      (get_local $0)
      (get_local $4)
    )
  )
  (func $_emscripten_bind_VNode_set_data_1 (param $0 i32) (param $1 i32)
    (i32.store offset=12
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_VNode_set_key_1 (param $0 i32) (param $1 i32)
    (i32.store offset=4
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_VNode_set_sel_1 (param $0 i32) (param $1 i32)
    (i32.store
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_VNode_set_text_1 (param $0 i32) (param $1 i32)
    (i32.store offset=8
      (get_local $0)
      (get_local $1)
    )
  )
  (func $__GLOBAL__sub_I_bind_cpp
    (call $__embind_register_void
      (i32.const 1320)
      (i32.const 1869)
    )
    (call $__embind_register_bool
      (i32.const 1328)
      (i32.const 1874)
      (i32.const 1)
      (i32.const 1)
      (i32.const 0)
    )
    (call $__embind_register_integer
      (i32.const 1336)
      (i32.const 1879)
      (i32.const 1)
      (i32.const -128)
      (i32.const 127)
    )
    (call $__embind_register_integer
      (i32.const 1352)
      (i32.const 6279)
      (i32.const 1)
      (i32.const -128)
      (i32.const 127)
    )
    (call $__embind_register_integer
      (i32.const 1344)
      (i32.const 6291)
      (i32.const 1)
      (i32.const 0)
      (i32.const 255)
    )
    (call $__embind_register_integer
      (i32.const 1360)
      (i32.const 6305)
      (i32.const 2)
      (i32.const -32768)
      (i32.const 32767)
    )
    (call $__embind_register_integer
      (i32.const 1368)
      (i32.const 6311)
      (i32.const 2)
      (i32.const 0)
      (i32.const 65535)
    )
    (call $__embind_register_integer
      (i32.const 1376)
      (i32.const 6328)
      (i32.const 4)
      (i32.const -2147483648)
      (i32.const 2147483647)
    )
    (call $__embind_register_integer
      (i32.const 1384)
      (i32.const 6332)
      (i32.const 4)
      (i32.const 0)
      (i32.const -1)
    )
    (call $__embind_register_integer
      (i32.const 1392)
      (i32.const 1884)
      (i32.const 4)
      (i32.const -2147483648)
      (i32.const 2147483647)
    )
    (call $__embind_register_integer
      (i32.const 1400)
      (i32.const 6345)
      (i32.const 4)
      (i32.const 0)
      (i32.const -1)
    )
    (call $__embind_register_float
      (i32.const 1408)
      (i32.const 6359)
      (i32.const 4)
    )
    (call $__embind_register_float
      (i32.const 1416)
      (i32.const 6365)
      (i32.const 8)
    )
    (call $__embind_register_std_string
      (i32.const 1024)
      (i32.const 6267)
    )
    (call $__embind_register_std_string
      (i32.const 1064)
      (i32.const 1889)
    )
    (call $__embind_register_std_wstring
      (i32.const 1088)
      (i32.const 4)
      (i32.const 1922)
    )
    (call $__embind_register_emval
      (i32.const 1056)
      (i32.const 1935)
    )
    (call $__embind_register_memory_view
      (i32.const 1112)
      (i32.const 0)
      (i32.const 1951)
    )
    (call $__embind_register_memory_view
      (i32.const 1120)
      (i32.const 0)
      (i32.const 1981)
    )
    (call $__embind_register_memory_view
      (i32.const 1128)
      (i32.const 1)
      (i32.const 2018)
    )
    (call $__embind_register_memory_view
      (i32.const 1136)
      (i32.const 2)
      (i32.const 2057)
    )
    (call $__embind_register_memory_view
      (i32.const 1144)
      (i32.const 3)
      (i32.const 2088)
    )
    (call $__embind_register_memory_view
      (i32.const 1152)
      (i32.const 4)
      (i32.const 2128)
    )
    (call $__embind_register_memory_view
      (i32.const 1160)
      (i32.const 5)
      (i32.const 2157)
    )
    (call $__embind_register_memory_view
      (i32.const 1168)
      (i32.const 4)
      (i32.const 2195)
    )
    (call $__embind_register_memory_view
      (i32.const 1176)
      (i32.const 5)
      (i32.const 2225)
    )
    (call $__embind_register_memory_view
      (i32.const 1120)
      (i32.const 0)
      (i32.const 2264)
    )
    (call $__embind_register_memory_view
      (i32.const 1128)
      (i32.const 1)
      (i32.const 2296)
    )
    (call $__embind_register_memory_view
      (i32.const 1136)
      (i32.const 2)
      (i32.const 2329)
    )
    (call $__embind_register_memory_view
      (i32.const 1144)
      (i32.const 3)
      (i32.const 2362)
    )
    (call $__embind_register_memory_view
      (i32.const 1152)
      (i32.const 4)
      (i32.const 2396)
    )
    (call $__embind_register_memory_view
      (i32.const 1160)
      (i32.const 5)
      (i32.const 2429)
    )
    (call $__embind_register_memory_view
      (i32.const 1184)
      (i32.const 6)
      (i32.const 2463)
    )
    (call $__embind_register_memory_view
      (i32.const 1192)
      (i32.const 7)
      (i32.const 2494)
    )
    (call $__embind_register_memory_view
      (i32.const 1200)
      (i32.const 7)
      (i32.const 2526)
    )
  )
  (func $___getTypeName (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (block $__rjto$0
      (block $__rjti$0
        (if
          (i32.and
            (tee_local $3
              (tee_local $2
                (i32.load offset=4
                  (get_local $0)
                )
              )
            )
            (i32.const 3)
          )
          (block
            (set_local $0
              (get_local $3)
            )
            (set_local $1
              (get_local $2)
            )
            (loop $while-in
              (br_if $__rjto$0
                (i32.eqz
                  (i32.load8_s
                    (get_local $1)
                  )
                )
              )
              (br_if $while-in
                (i32.and
                  (tee_local $0
                    (tee_local $1
                      (i32.add
                        (get_local $1)
                        (i32.const 1)
                      )
                    )
                  )
                  (i32.const 3)
                )
              )
              (set_local $0
                (get_local $1)
              )
              (br $__rjti$0)
            )
          )
          (block
            (set_local $0
              (get_local $2)
            )
            (br $__rjti$0)
          )
        )
      )
      (loop $while-in1
        (set_local $1
          (i32.add
            (get_local $0)
            (i32.const 4)
          )
        )
        (if
          (i32.eqz
            (i32.and
              (i32.xor
                (i32.and
                  (tee_local $4
                    (i32.load
                      (get_local $0)
                    )
                  )
                  (i32.const -2139062144)
                )
                (i32.const -2139062144)
              )
              (i32.add
                (get_local $4)
                (i32.const -16843009)
              )
            )
          )
          (block
            (set_local $0
              (get_local $1)
            )
            (br $while-in1)
          )
        )
      )
      (if
        (i32.shr_s
          (i32.shl
            (i32.and
              (get_local $4)
              (i32.const 255)
            )
            (i32.const 24)
          )
          (i32.const 24)
        )
        (loop $while-in3
          (br_if $while-in3
            (i32.load8_s
              (tee_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 1)
                )
              )
            )
          )
        )
      )
    )
    (if
      (i32.eqz
        (tee_local $0
          (call $_malloc
            (tee_local $1
              (i32.add
                (i32.sub
                  (get_local $0)
                  (get_local $3)
                )
                (i32.const 1)
              )
            )
          )
        )
      )
      (return
        (i32.const 0)
      )
    )
    (drop
      (call $_memcpy
        (get_local $0)
        (get_local $2)
        (get_local $1)
      )
    )
    (get_local $0)
  )
  (func $___stdio_close (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (i32.store
      (tee_local $2
        (get_local $1)
      )
      (i32.load offset=60
        (get_local $0)
      )
    )
    (if
      (i32.gt_u
        (tee_local $0
          (call $___syscall6
            (i32.const 6)
            (get_local $2)
          )
        )
        (i32.const -4096)
      )
      (block
        (i32.store
          (i32.const 6376)
          (i32.sub
            (i32.const 0)
            (get_local $0)
          )
        )
        (set_local $0
          (i32.const -1)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $1)
    )
    (get_local $0)
  )
  (func $___stdio_write (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (set_local $9
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 32)
      )
    )
    (set_local $8
      (get_local $9)
    )
    (i32.store
      (tee_local $3
        (i32.add
          (get_local $9)
          (i32.const 16)
        )
      )
      (tee_local $4
        (i32.load
          (tee_local $6
            (i32.add
              (get_local $0)
              (i32.const 28)
            )
          )
        )
      )
    )
    (i32.store offset=4
      (get_local $3)
      (tee_local $5
        (i32.sub
          (i32.load
            (tee_local $10
              (i32.add
                (get_local $0)
                (i32.const 20)
              )
            )
          )
          (get_local $4)
        )
      )
    )
    (i32.store offset=8
      (get_local $3)
      (get_local $1)
    )
    (i32.store offset=12
      (get_local $3)
      (get_local $2)
    )
    (set_local $13
      (i32.add
        (get_local $0)
        (i32.const 60)
      )
    )
    (set_local $12
      (i32.add
        (get_local $0)
        (i32.const 44)
      )
    )
    (set_local $1
      (get_local $3)
    )
    (set_local $4
      (i32.const 2)
    )
    (set_local $11
      (i32.add
        (get_local $5)
        (get_local $2)
      )
    )
    (block $__rjto$1
      (block $__rjti$1
        (block $__rjti$0
          (loop $while-in
            (i32.store
              (get_local $8)
              (i32.load
                (get_local $13)
              )
            )
            (i32.store offset=4
              (get_local $8)
              (get_local $1)
            )
            (i32.store offset=8
              (get_local $8)
              (get_local $4)
            )
            (if
              (i32.gt_u
                (tee_local $3
                  (call $___syscall146
                    (i32.const 146)
                    (get_local $8)
                  )
                )
                (i32.const -4096)
              )
              (block
                (i32.store
                  (i32.const 6376)
                  (i32.sub
                    (i32.const 0)
                    (get_local $3)
                  )
                )
                (set_local $3
                  (i32.const -1)
                )
              )
            )
            (br_if $__rjti$0
              (i32.eq
                (get_local $11)
                (get_local $3)
              )
            )
            (br_if $__rjti$1
              (i32.lt_s
                (get_local $3)
                (i32.const 0)
              )
            )
            (set_local $5
              (if i32
                (i32.gt_u
                  (get_local $3)
                  (tee_local $5
                    (i32.load offset=4
                      (get_local $1)
                    )
                  )
                )
                (block i32
                  (i32.store
                    (get_local $6)
                    (tee_local $7
                      (i32.load
                        (get_local $12)
                      )
                    )
                  )
                  (i32.store
                    (get_local $10)
                    (get_local $7)
                  )
                  (set_local $7
                    (i32.load offset=12
                      (get_local $1)
                    )
                  )
                  (set_local $1
                    (i32.add
                      (get_local $1)
                      (i32.const 8)
                    )
                  )
                  (set_local $4
                    (i32.add
                      (get_local $4)
                      (i32.const -1)
                    )
                  )
                  (i32.sub
                    (get_local $3)
                    (get_local $5)
                  )
                )
                (if i32
                  (i32.eq
                    (get_local $4)
                    (i32.const 2)
                  )
                  (block i32
                    (i32.store
                      (get_local $6)
                      (i32.add
                        (i32.load
                          (get_local $6)
                        )
                        (get_local $3)
                      )
                    )
                    (set_local $7
                      (get_local $5)
                    )
                    (set_local $4
                      (i32.const 2)
                    )
                    (get_local $3)
                  )
                  (block i32
                    (set_local $7
                      (get_local $5)
                    )
                    (get_local $3)
                  )
                )
              )
            )
            (i32.store
              (get_local $1)
              (i32.add
                (i32.load
                  (get_local $1)
                )
                (get_local $5)
              )
            )
            (i32.store offset=4
              (get_local $1)
              (i32.sub
                (get_local $7)
                (get_local $5)
              )
            )
            (set_local $11
              (i32.sub
                (get_local $11)
                (get_local $3)
              )
            )
            (br $while-in)
          )
        )
        (i32.store offset=16
          (get_local $0)
          (i32.add
            (tee_local $1
              (i32.load
                (get_local $12)
              )
            )
            (i32.load offset=48
              (get_local $0)
            )
          )
        )
        (i32.store
          (get_local $6)
          (get_local $1)
        )
        (i32.store
          (get_local $10)
          (get_local $1)
        )
        (br $__rjto$1)
      )
      (i32.store offset=16
        (get_local $0)
        (i32.const 0)
      )
      (i32.store
        (get_local $6)
        (i32.const 0)
      )
      (i32.store
        (get_local $10)
        (i32.const 0)
      )
      (i32.store
        (get_local $0)
        (i32.or
          (i32.load
            (get_local $0)
          )
          (i32.const 32)
        )
      )
      (set_local $2
        (if i32
          (i32.eq
            (get_local $4)
            (i32.const 2)
          )
          (i32.const 0)
          (i32.sub
            (get_local $2)
            (i32.load offset=4
              (get_local $1)
            )
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $9)
    )
    (get_local $2)
  )
  (func $___stdio_seek (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (set_local $4
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 32)
      )
    )
    (i32.store
      (tee_local $3
        (get_local $4)
      )
      (i32.load offset=60
        (get_local $0)
      )
    )
    (i32.store offset=4
      (get_local $3)
      (i32.const 0)
    )
    (i32.store offset=8
      (get_local $3)
      (get_local $1)
    )
    (i32.store offset=12
      (get_local $3)
      (tee_local $1
        (i32.add
          (get_local $4)
          (i32.const 20)
        )
      )
    )
    (i32.store offset=16
      (get_local $3)
      (get_local $2)
    )
    (block $__rjto$0
      (block $__rjti$0
        (if
          (i32.gt_u
            (tee_local $0
              (call $___syscall140
                (i32.const 140)
                (get_local $3)
              )
            )
            (i32.const -4096)
          )
          (block
            (i32.store
              (i32.const 6376)
              (i32.sub
                (i32.const 0)
                (get_local $0)
              )
            )
            (br $__rjti$0)
          )
          (block
            (br_if $__rjti$0
              (i32.lt_s
                (get_local $0)
                (i32.const 0)
              )
            )
            (set_local $0
              (i32.load
                (get_local $1)
              )
            )
          )
        )
        (br $__rjto$0)
      )
      (i32.store
        (get_local $1)
        (i32.const -1)
      )
      (set_local $0
        (i32.const -1)
      )
    )
    (set_global $STACKTOP
      (get_local $4)
    )
    (get_local $0)
  )
  (func $i64u-rem (param $0 i64) (param $1 i64) (result i64)
    (if i64
      (i64.eqz
        (get_local $1)
      )
      (i64.const 0)
      (i64.rem_u
        (get_local $0)
        (get_local $1)
      )
    )
  )
  (func $i64u-div (param $0 i64) (param $1 i64) (result i64)
    (if i64
      (i64.eqz
        (get_local $1)
      )
      (i64.const 0)
      (i64.div_u
        (get_local $0)
        (get_local $1)
      )
    )
  )
  (func $_printf_core (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 f64)
    (local $16 i32)
    (local $17 i32)
    (local $18 i32)
    (local $19 i64)
    (local $20 i32)
    (local $21 i32)
    (local $22 i32)
    (local $23 f64)
    (local $24 i32)
    (local $25 i32)
    (local $26 i32)
    (local $27 i32)
    (local $28 i32)
    (local $29 i32)
    (local $30 i32)
    (local $31 i32)
    (local $32 i32)
    (local $33 i32)
    (local $34 i32)
    (local $35 i32)
    (local $36 i32)
    (local $37 i32)
    (local $38 i32)
    (local $39 i32)
    (local $40 i32)
    (local $41 i32)
    (local $42 i32)
    (local $43 i32)
    (local $44 i32)
    (local $45 i32)
    (local $46 i32)
    (local $47 i32)
    (local $48 i32)
    (local $49 i32)
    (local $50 i32)
    (local $51 i32)
    (local $52 i64)
    (local $53 i32)
    (local $54 i32)
    (set_local $26
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 624)
      )
    )
    (set_local $22
      (i32.add
        (get_local $26)
        (i32.const 16)
      )
    )
    (set_local $17
      (get_local $26)
    )
    (set_local $39
      (i32.add
        (get_local $26)
        (i32.const 528)
      )
    )
    (set_local $33
      (i32.ne
        (get_local $0)
        (i32.const 0)
      )
    )
    (set_local $41
      (tee_local $24
        (i32.add
          (tee_local $18
            (i32.add
              (get_local $26)
              (i32.const 536)
            )
          )
          (i32.const 40)
        )
      )
    )
    (set_local $42
      (i32.add
        (get_local $18)
        (i32.const 39)
      )
    )
    (set_local $45
      (i32.add
        (tee_local $40
          (i32.add
            (get_local $26)
            (i32.const 8)
          )
        )
        (i32.const 4)
      )
    )
    (set_local $46
      (i32.sub
        (i32.const 0)
        (tee_local $30
          (tee_local $21
            (i32.add
              (get_local $26)
              (i32.const 588)
            )
          )
        )
      )
    )
    (set_local $36
      (i32.add
        (tee_local $18
          (i32.add
            (get_local $26)
            (i32.const 576)
          )
        )
        (i32.const 12)
      )
    )
    (set_local $43
      (i32.add
        (get_local $18)
        (i32.const 11)
      )
    )
    (set_local $47
      (i32.sub
        (tee_local $31
          (get_local $36)
        )
        (get_local $30)
      )
    )
    (set_local $48
      (i32.sub
        (i32.const -2)
        (get_local $30)
      )
    )
    (set_local $49
      (i32.add
        (get_local $31)
        (i32.const 2)
      )
    )
    (set_local $51
      (i32.add
        (tee_local $50
          (i32.add
            (get_local $26)
            (i32.const 24)
          )
        )
        (i32.const 288)
      )
    )
    (set_local $44
      (tee_local $34
        (i32.add
          (get_local $21)
          (i32.const 9)
        )
      )
    )
    (set_local $37
      (i32.add
        (get_local $21)
        (i32.const 8)
      )
    )
    (set_local $16
      (i32.const 0)
    )
    (set_local $11
      (i32.const 0)
    )
    (set_local $18
      (i32.const 0)
    )
    (block $label$break$L374
      (block $__rjti$12
        (loop $label$continue$L1
          (block $label$break$L1
            (if
              (i32.gt_s
                (get_local $16)
                (i32.const -1)
              )
              (set_local $16
                (if i32
                  (i32.gt_s
                    (get_local $11)
                    (i32.sub
                      (i32.const 2147483647)
                      (get_local $16)
                    )
                  )
                  (block i32
                    (i32.store
                      (i32.const 6376)
                      (i32.const 75)
                    )
                    (i32.const -1)
                  )
                  (i32.add
                    (get_local $11)
                    (get_local $16)
                  )
                )
              )
            )
            (br_if $__rjti$12
              (i32.eqz
                (i32.shr_s
                  (i32.shl
                    (tee_local $5
                      (i32.load8_s
                        (get_local $1)
                      )
                    )
                    (i32.const 24)
                  )
                  (i32.const 24)
                )
              )
            )
            (set_local $12
              (get_local $1)
            )
            (block $label$break$L12
              (block $__rjti$4
                (loop $label$continue$L9
                  (block $label$break$L9
                    (block $switch-default
                      (block $switch-case0
                        (block $switch-case
                          (br_table $switch-case0 $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-case $switch-default
                            (i32.sub
                              (i32.shr_s
                                (i32.shl
                                  (get_local $5)
                                  (i32.const 24)
                                )
                                (i32.const 24)
                              )
                              (i32.const 0)
                            )
                          )
                        )
                        (set_local $5
                          (get_local $12)
                        )
                        (br $__rjti$4)
                      )
                      (set_local $5
                        (get_local $12)
                      )
                      (br $label$break$L9)
                    )
                    (set_local $5
                      (i32.load8_s
                        (tee_local $12
                          (i32.add
                            (get_local $12)
                            (i32.const 1)
                          )
                        )
                      )
                    )
                    (br $label$continue$L9)
                  )
                )
                (br $label$break$L12)
              )
              (loop $while-in
                (br_if $label$break$L12
                  (i32.ne
                    (i32.load8_s offset=1
                      (get_local $5)
                    )
                    (i32.const 37)
                  )
                )
                (set_local $12
                  (i32.add
                    (get_local $12)
                    (i32.const 1)
                  )
                )
                (br_if $while-in
                  (i32.eq
                    (i32.load8_s
                      (tee_local $5
                        (i32.add
                          (get_local $5)
                          (i32.const 2)
                        )
                      )
                    )
                    (i32.const 37)
                  )
                )
              )
            )
            (set_local $11
              (i32.sub
                (get_local $12)
                (get_local $1)
              )
            )
            (if
              (get_local $33)
              (if
                (i32.eqz
                  (i32.and
                    (i32.load
                      (get_local $0)
                    )
                    (i32.const 32)
                  )
                )
                (call $___fwritex
                  (get_local $1)
                  (get_local $11)
                  (get_local $0)
                )
              )
            )
            (if
              (get_local $11)
              (block
                (set_local $1
                  (get_local $5)
                )
                (br $label$continue$L1)
              )
            )
            (set_local $11
              (if i32
                (i32.lt_u
                  (tee_local $10
                    (i32.add
                      (i32.shr_s
                        (i32.shl
                          (tee_local $11
                            (i32.load8_s
                              (tee_local $12
                                (i32.add
                                  (get_local $5)
                                  (i32.const 1)
                                )
                              )
                            )
                          )
                          (i32.const 24)
                        )
                        (i32.const 24)
                      )
                      (i32.const -48)
                    )
                  )
                  (i32.const 10)
                )
                (block i32
                  (set_local $11
                    (i32.add
                      (get_local $5)
                      (i32.const 3)
                    )
                  )
                  (if
                    (tee_local $9
                      (i32.eq
                        (i32.load8_s offset=2
                          (get_local $5)
                        )
                        (i32.const 36)
                      )
                    )
                    (set_local $12
                      (get_local $11)
                    )
                  )
                  (if
                    (get_local $9)
                    (set_local $18
                      (i32.const 1)
                    )
                  )
                  (set_local $5
                    (i32.load8_s
                      (get_local $12)
                    )
                  )
                  (if
                    (i32.eqz
                      (get_local $9)
                    )
                    (set_local $10
                      (i32.const -1)
                    )
                  )
                  (get_local $18)
                )
                (block i32
                  (set_local $5
                    (get_local $11)
                  )
                  (set_local $10
                    (i32.const -1)
                  )
                  (get_local $18)
                )
              )
            )
            (block $label$break$L25
              (if
                (i32.lt_u
                  (tee_local $9
                    (i32.add
                      (i32.shr_s
                        (i32.shl
                          (get_local $5)
                          (i32.const 24)
                        )
                        (i32.const 24)
                      )
                      (i32.const -32)
                    )
                  )
                  (i32.const 32)
                )
                (block
                  (set_local $18
                    (i32.const 0)
                  )
                  (loop $while-in4
                    (br_if $label$break$L25
                      (i32.eqz
                        (i32.and
                          (i32.shl
                            (i32.const 1)
                            (get_local $9)
                          )
                          (i32.const 75913)
                        )
                      )
                    )
                    (set_local $18
                      (i32.or
                        (i32.shl
                          (i32.const 1)
                          (i32.add
                            (i32.shr_s
                              (i32.shl
                                (get_local $5)
                                (i32.const 24)
                              )
                              (i32.const 24)
                            )
                            (i32.const -32)
                          )
                        )
                        (get_local $18)
                      )
                    )
                    (br_if $while-in4
                      (i32.lt_u
                        (tee_local $9
                          (i32.add
                            (i32.shr_s
                              (i32.shl
                                (tee_local $5
                                  (i32.load8_s
                                    (tee_local $12
                                      (i32.add
                                        (get_local $12)
                                        (i32.const 1)
                                      )
                                    )
                                  )
                                )
                                (i32.const 24)
                              )
                              (i32.const 24)
                            )
                            (i32.const -32)
                          )
                        )
                        (i32.const 32)
                      )
                    )
                  )
                )
                (set_local $18
                  (i32.const 0)
                )
              )
            )
            (block $do-once5
              (if
                (i32.eq
                  (i32.shr_s
                    (i32.shl
                      (get_local $5)
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                  (i32.const 42)
                )
                (block
                  (set_local $12
                    (block $__rjto$0 i32
                      (block $__rjti$0
                        (br_if $__rjti$0
                          (i32.ge_u
                            (tee_local $9
                              (i32.add
                                (i32.shr_s
                                  (i32.shl
                                    (tee_local $5
                                      (i32.load8_s
                                        (tee_local $6
                                          (i32.add
                                            (get_local $12)
                                            (i32.const 1)
                                          )
                                        )
                                      )
                                    )
                                    (i32.const 24)
                                  )
                                  (i32.const 24)
                                )
                                (i32.const -48)
                              )
                            )
                            (i32.const 10)
                          )
                        )
                        (br_if $__rjti$0
                          (i32.ne
                            (i32.load8_s offset=2
                              (get_local $12)
                            )
                            (i32.const 36)
                          )
                        )
                        (i32.store
                          (i32.add
                            (get_local $4)
                            (i32.shl
                              (get_local $9)
                              (i32.const 2)
                            )
                          )
                          (i32.const 10)
                        )
                        (set_local $8
                          (i32.const 1)
                        )
                        (set_local $11
                          (i32.wrap/i64
                            (i64.load
                              (i32.add
                                (get_local $3)
                                (i32.shl
                                  (i32.add
                                    (i32.load8_s
                                      (get_local $6)
                                    )
                                    (i32.const -48)
                                  )
                                  (i32.const 3)
                                )
                              )
                            )
                          )
                        )
                        (br $__rjto$0
                          (i32.add
                            (get_local $12)
                            (i32.const 3)
                          )
                        )
                      )
                      (if
                        (get_local $11)
                        (block
                          (set_local $16
                            (i32.const -1)
                          )
                          (br $label$break$L1)
                        )
                      )
                      (if
                        (i32.eqz
                          (get_local $33)
                        )
                        (block
                          (set_local $9
                            (get_local $18)
                          )
                          (set_local $18
                            (i32.const 0)
                          )
                          (set_local $12
                            (get_local $6)
                          )
                          (set_local $11
                            (i32.const 0)
                          )
                          (br $do-once5)
                        )
                      )
                      (set_local $11
                        (i32.load
                          (tee_local $12
                            (i32.and
                              (i32.add
                                (i32.load
                                  (get_local $2)
                                )
                                (i32.const 3)
                              )
                              (i32.const -4)
                            )
                          )
                        )
                      )
                      (i32.store
                        (get_local $2)
                        (i32.add
                          (get_local $12)
                          (i32.const 4)
                        )
                      )
                      (set_local $8
                        (i32.const 0)
                      )
                      (get_local $6)
                    )
                  )
                  (set_local $9
                    (i32.or
                      (get_local $18)
                      (i32.const 8192)
                    )
                  )
                  (set_local $6
                    (i32.sub
                      (i32.const 0)
                      (get_local $11)
                    )
                  )
                  (set_local $5
                    (i32.load8_s
                      (get_local $12)
                    )
                  )
                  (if
                    (i32.eqz
                      (tee_local $7
                        (i32.lt_s
                          (get_local $11)
                          (i32.const 0)
                        )
                      )
                    )
                    (set_local $9
                      (get_local $18)
                    )
                  )
                  (set_local $18
                    (get_local $8)
                  )
                  (if
                    (get_local $7)
                    (set_local $11
                      (get_local $6)
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (tee_local $9
                      (i32.add
                        (i32.shr_s
                          (i32.shl
                            (get_local $5)
                            (i32.const 24)
                          )
                          (i32.const 24)
                        )
                        (i32.const -48)
                      )
                    )
                    (i32.const 10)
                  )
                  (block
                    (set_local $6
                      (i32.const 0)
                    )
                    (set_local $5
                      (get_local $9)
                    )
                    (loop $while-in8
                      (set_local $6
                        (i32.add
                          (i32.mul
                            (get_local $6)
                            (i32.const 10)
                          )
                          (get_local $5)
                        )
                      )
                      (br_if $while-in8
                        (i32.lt_u
                          (tee_local $5
                            (i32.add
                              (i32.shr_s
                                (i32.shl
                                  (tee_local $9
                                    (i32.load8_s
                                      (tee_local $12
                                        (i32.add
                                          (get_local $12)
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                  )
                                  (i32.const 24)
                                )
                                (i32.const 24)
                              )
                              (i32.const -48)
                            )
                          )
                          (i32.const 10)
                        )
                      )
                    )
                    (if
                      (i32.lt_s
                        (get_local $6)
                        (i32.const 0)
                      )
                      (block
                        (set_local $16
                          (i32.const -1)
                        )
                        (br $label$break$L1)
                      )
                      (block
                        (set_local $5
                          (get_local $9)
                        )
                        (set_local $9
                          (get_local $18)
                        )
                        (set_local $18
                          (get_local $11)
                        )
                        (set_local $11
                          (get_local $6)
                        )
                      )
                    )
                  )
                  (block
                    (set_local $9
                      (get_local $18)
                    )
                    (set_local $18
                      (get_local $11)
                    )
                    (set_local $11
                      (i32.const 0)
                    )
                  )
                )
              )
            )
            (block $label$break$L45
              (if
                (i32.eq
                  (i32.shr_s
                    (i32.shl
                      (get_local $5)
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                  (i32.const 46)
                )
                (block
                  (if
                    (i32.ne
                      (i32.shr_s
                        (i32.shl
                          (tee_local $5
                            (i32.load8_s
                              (tee_local $6
                                (i32.add
                                  (get_local $12)
                                  (i32.const 1)
                                )
                              )
                            )
                          )
                          (i32.const 24)
                        )
                        (i32.const 24)
                      )
                      (i32.const 42)
                    )
                    (block
                      (if
                        (i32.lt_u
                          (tee_local $5
                            (i32.add
                              (i32.shr_s
                                (i32.shl
                                  (get_local $5)
                                  (i32.const 24)
                                )
                                (i32.const 24)
                              )
                              (i32.const -48)
                            )
                          )
                          (i32.const 10)
                        )
                        (block
                          (set_local $12
                            (get_local $6)
                          )
                          (set_local $6
                            (i32.const 0)
                          )
                        )
                        (block
                          (set_local $5
                            (i32.const 0)
                          )
                          (set_local $12
                            (get_local $6)
                          )
                          (br $label$break$L45)
                        )
                      )
                      (loop $while-in11
                        (set_local $5
                          (i32.add
                            (i32.mul
                              (get_local $6)
                              (i32.const 10)
                            )
                            (get_local $5)
                          )
                        )
                        (br_if $label$break$L45
                          (i32.ge_u
                            (tee_local $8
                              (i32.add
                                (i32.load8_s
                                  (tee_local $12
                                    (i32.add
                                      (get_local $12)
                                      (i32.const 1)
                                    )
                                  )
                                )
                                (i32.const -48)
                              )
                            )
                            (i32.const 10)
                          )
                        )
                        (set_local $6
                          (get_local $5)
                        )
                        (set_local $5
                          (get_local $8)
                        )
                        (br $while-in11)
                      )
                    )
                  )
                  (if
                    (i32.lt_u
                      (tee_local $5
                        (i32.add
                          (i32.load8_s
                            (tee_local $6
                              (i32.add
                                (get_local $12)
                                (i32.const 2)
                              )
                            )
                          )
                          (i32.const -48)
                        )
                      )
                      (i32.const 10)
                    )
                    (if
                      (i32.eq
                        (i32.load8_s offset=3
                          (get_local $12)
                        )
                        (i32.const 36)
                      )
                      (block
                        (i32.store
                          (i32.add
                            (get_local $4)
                            (i32.shl
                              (get_local $5)
                              (i32.const 2)
                            )
                          )
                          (i32.const 10)
                        )
                        (set_local $5
                          (i32.wrap/i64
                            (i64.load
                              (i32.add
                                (get_local $3)
                                (i32.shl
                                  (i32.add
                                    (i32.load8_s
                                      (get_local $6)
                                    )
                                    (i32.const -48)
                                  )
                                  (i32.const 3)
                                )
                              )
                            )
                          )
                        )
                        (set_local $12
                          (i32.add
                            (get_local $12)
                            (i32.const 4)
                          )
                        )
                        (br $label$break$L45)
                      )
                    )
                  )
                  (if
                    (get_local $18)
                    (block
                      (set_local $16
                        (i32.const -1)
                      )
                      (br $label$break$L1)
                    )
                  )
                  (set_local $12
                    (if i32
                      (get_local $33)
                      (block i32
                        (set_local $5
                          (i32.load
                            (tee_local $12
                              (i32.and
                                (i32.add
                                  (i32.load
                                    (get_local $2)
                                  )
                                  (i32.const 3)
                                )
                                (i32.const -4)
                              )
                            )
                          )
                        )
                        (i32.store
                          (get_local $2)
                          (i32.add
                            (get_local $12)
                            (i32.const 4)
                          )
                        )
                        (get_local $6)
                      )
                      (block i32
                        (set_local $5
                          (i32.const 0)
                        )
                        (get_local $6)
                      )
                    )
                  )
                )
                (set_local $5
                  (i32.const -1)
                )
              )
            )
            (set_local $6
              (get_local $12)
            )
            (set_local $7
              (i32.const 0)
            )
            (loop $while-in13
              (if
                (i32.gt_u
                  (tee_local $8
                    (i32.add
                      (i32.load8_s
                        (get_local $6)
                      )
                      (i32.const -65)
                    )
                  )
                  (i32.const 57)
                )
                (block
                  (set_local $16
                    (i32.const -1)
                  )
                  (br $label$break$L1)
                )
              )
              (set_local $12
                (i32.add
                  (get_local $6)
                  (i32.const 1)
                )
              )
              (if
                (i32.lt_u
                  (i32.add
                    (tee_local $8
                      (i32.and
                        (tee_local $13
                          (i32.load8_s
                            (i32.add
                              (i32.add
                                (i32.mul
                                  (get_local $7)
                                  (i32.const 58)
                                )
                                (i32.const 3061)
                              )
                              (get_local $8)
                            )
                          )
                        )
                        (i32.const 255)
                      )
                    )
                    (i32.const -1)
                  )
                  (i32.const 8)
                )
                (block
                  (set_local $6
                    (get_local $12)
                  )
                  (set_local $7
                    (get_local $8)
                  )
                  (br $while-in13)
                )
              )
            )
            (if
              (i32.eqz
                (i32.shr_s
                  (i32.shl
                    (get_local $13)
                    (i32.const 24)
                  )
                  (i32.const 24)
                )
              )
              (block
                (set_local $16
                  (i32.const -1)
                )
                (br $label$break$L1)
              )
            )
            (set_local $14
              (i32.gt_s
                (get_local $10)
                (i32.const -1)
              )
            )
            (block $__rjto$5
              (block $__rjti$5
                (if
                  (i32.eq
                    (i32.shr_s
                      (i32.shl
                        (get_local $13)
                        (i32.const 24)
                      )
                      (i32.const 24)
                    )
                    (i32.const 19)
                  )
                  (if
                    (get_local $14)
                    (block
                      (set_local $16
                        (i32.const -1)
                      )
                      (br $label$break$L1)
                    )
                    (br $__rjti$5)
                  )
                  (block
                    (if
                      (get_local $14)
                      (block
                        (i32.store
                          (i32.add
                            (get_local $4)
                            (i32.shl
                              (get_local $10)
                              (i32.const 2)
                            )
                          )
                          (get_local $8)
                        )
                        (i64.store
                          (get_local $17)
                          (i64.load
                            (i32.add
                              (get_local $3)
                              (i32.shl
                                (get_local $10)
                                (i32.const 3)
                              )
                            )
                          )
                        )
                        (br $__rjti$5)
                      )
                    )
                    (if
                      (i32.eqz
                        (get_local $33)
                      )
                      (block
                        (set_local $16
                          (i32.const 0)
                        )
                        (br $label$break$L1)
                      )
                    )
                    (call $_pop_arg
                      (get_local $17)
                      (get_local $8)
                      (get_local $2)
                    )
                  )
                )
                (br $__rjto$5)
              )
              (if
                (i32.eqz
                  (get_local $33)
                )
                (block
                  (set_local $11
                    (i32.const 0)
                  )
                  (set_local $1
                    (get_local $12)
                  )
                  (br $label$continue$L1)
                )
              )
            )
            (set_local $10
              (i32.and
                (tee_local $6
                  (i32.load8_s
                    (get_local $6)
                  )
                )
                (i32.const -33)
              )
            )
            (if
              (i32.eqz
                (i32.and
                  (i32.ne
                    (get_local $7)
                    (i32.const 0)
                  )
                  (i32.eq
                    (i32.and
                      (get_local $6)
                      (i32.const 15)
                    )
                    (i32.const 3)
                  )
                )
              )
              (set_local $10
                (get_local $6)
              )
            )
            (set_local $8
              (i32.and
                (get_local $9)
                (i32.const -65537)
              )
            )
            (if
              (i32.and
                (get_local $9)
                (i32.const 8192)
              )
              (set_local $9
                (get_local $8)
              )
            )
            (block $__rjto$11
              (block $__rjti$11
                (block $__rjti$10
                  (block $__rjti$9
                    (block $__rjti$8
                      (block $__rjti$7
                        (block $__rjti$6
                          (block $switch-default126
                            (block $switch-case48
                              (block $switch-case47
                                (block $switch-case46
                                  (block $switch-case45
                                    (block $switch-case44
                                      (block $switch-case37
                                        (block $switch-case36
                                          (block $switch-case34
                                            (block $switch-case33
                                              (block $switch-case29
                                                (block $switch-case28
                                                  (block $switch-case27
                                                    (br_table $switch-case48 $switch-default126 $switch-case46 $switch-default126 $switch-case48 $switch-case48 $switch-case48 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-case47 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-case29 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-default126 $switch-case48 $switch-default126 $switch-case37 $switch-case34 $switch-case48 $switch-case48 $switch-case48 $switch-default126 $switch-case34 $switch-default126 $switch-default126 $switch-default126 $switch-case44 $switch-case27 $switch-case33 $switch-case28 $switch-default126 $switch-default126 $switch-case45 $switch-default126 $switch-case36 $switch-default126 $switch-default126 $switch-case29 $switch-default126
                                                      (i32.sub
                                                        (get_local $10)
                                                        (i32.const 65)
                                                      )
                                                    )
                                                  )
                                                  (block $switch-default26
                                                    (block $switch-case25
                                                      (block $switch-case24
                                                        (block $switch-case23
                                                          (block $switch-case22
                                                            (block $switch-case21
                                                              (block $switch-case20
                                                                (block $switch-case19
                                                                  (br_table $switch-case19 $switch-case20 $switch-case21 $switch-case22 $switch-case23 $switch-default26 $switch-case24 $switch-case25 $switch-default26
                                                                    (i32.sub
                                                                      (i32.shr_s
                                                                        (i32.shl
                                                                          (i32.and
                                                                            (get_local $7)
                                                                            (i32.const 255)
                                                                          )
                                                                          (i32.const 24)
                                                                        )
                                                                        (i32.const 24)
                                                                      )
                                                                      (i32.const 0)
                                                                    )
                                                                  )
                                                                )
                                                                (i32.store
                                                                  (i32.load
                                                                    (get_local $17)
                                                                  )
                                                                  (get_local $16)
                                                                )
                                                                (set_local $11
                                                                  (i32.const 0)
                                                                )
                                                                (set_local $1
                                                                  (get_local $12)
                                                                )
                                                                (br $label$continue$L1)
                                                              )
                                                              (i32.store
                                                                (i32.load
                                                                  (get_local $17)
                                                                )
                                                                (get_local $16)
                                                              )
                                                              (set_local $11
                                                                (i32.const 0)
                                                              )
                                                              (set_local $1
                                                                (get_local $12)
                                                              )
                                                              (br $label$continue$L1)
                                                            )
                                                            (i64.store
                                                              (i32.load
                                                                (get_local $17)
                                                              )
                                                              (i64.extend_s/i32
                                                                (get_local $16)
                                                              )
                                                            )
                                                            (set_local $11
                                                              (i32.const 0)
                                                            )
                                                            (set_local $1
                                                              (get_local $12)
                                                            )
                                                            (br $label$continue$L1)
                                                          )
                                                          (i32.store16
                                                            (i32.load
                                                              (get_local $17)
                                                            )
                                                            (get_local $16)
                                                          )
                                                          (set_local $11
                                                            (i32.const 0)
                                                          )
                                                          (set_local $1
                                                            (get_local $12)
                                                          )
                                                          (br $label$continue$L1)
                                                        )
                                                        (i32.store8
                                                          (i32.load
                                                            (get_local $17)
                                                          )
                                                          (get_local $16)
                                                        )
                                                        (set_local $11
                                                          (i32.const 0)
                                                        )
                                                        (set_local $1
                                                          (get_local $12)
                                                        )
                                                        (br $label$continue$L1)
                                                      )
                                                      (i32.store
                                                        (i32.load
                                                          (get_local $17)
                                                        )
                                                        (get_local $16)
                                                      )
                                                      (set_local $11
                                                        (i32.const 0)
                                                      )
                                                      (set_local $1
                                                        (get_local $12)
                                                      )
                                                      (br $label$continue$L1)
                                                    )
                                                    (i64.store
                                                      (i32.load
                                                        (get_local $17)
                                                      )
                                                      (i64.extend_s/i32
                                                        (get_local $16)
                                                      )
                                                    )
                                                    (set_local $11
                                                      (i32.const 0)
                                                    )
                                                    (set_local $1
                                                      (get_local $12)
                                                    )
                                                    (br $label$continue$L1)
                                                  )
                                                  (set_local $11
                                                    (i32.const 0)
                                                  )
                                                  (set_local $1
                                                    (get_local $12)
                                                  )
                                                  (br $label$continue$L1)
                                                )
                                                (set_local $9
                                                  (i32.or
                                                    (get_local $9)
                                                    (i32.const 8)
                                                  )
                                                )
                                                (if
                                                  (i32.le_u
                                                    (get_local $5)
                                                    (i32.const 8)
                                                  )
                                                  (set_local $5
                                                    (i32.const 8)
                                                  )
                                                )
                                                (set_local $10
                                                  (i32.const 120)
                                                )
                                                (br $__rjti$6)
                                              )
                                              (br $__rjti$6)
                                            )
                                            (if
                                              (i64.eq
                                                (tee_local $19
                                                  (i64.load
                                                    (get_local $17)
                                                  )
                                                )
                                                (i64.const 0)
                                              )
                                              (set_local $6
                                                (get_local $24)
                                              )
                                              (block
                                                (set_local $1
                                                  (get_local $24)
                                                )
                                                (loop $while-in32
                                                  (i64.store8
                                                    (tee_local $1
                                                      (i32.add
                                                        (get_local $1)
                                                        (i32.const -1)
                                                      )
                                                    )
                                                    (i64.or
                                                      (i64.and
                                                        (get_local $19)
                                                        (i64.const 7)
                                                      )
                                                      (i64.const 48)
                                                    )
                                                  )
                                                  (br_if $while-in32
                                                    (i64.ne
                                                      (tee_local $19
                                                        (i64.shr_u
                                                          (get_local $19)
                                                          (i64.const 3)
                                                        )
                                                      )
                                                      (i64.const 0)
                                                    )
                                                  )
                                                  (set_local $6
                                                    (get_local $1)
                                                  )
                                                )
                                              )
                                            )
                                            (if
                                              (i32.and
                                                (get_local $9)
                                                (i32.const 8)
                                              )
                                              (block
                                                (set_local $8
                                                  (i32.add
                                                    (tee_local $1
                                                      (i32.sub
                                                        (get_local $41)
                                                        (get_local $6)
                                                      )
                                                    )
                                                    (i32.const 1)
                                                  )
                                                )
                                                (if
                                                  (i32.le_s
                                                    (get_local $5)
                                                    (get_local $1)
                                                  )
                                                  (set_local $5
                                                    (get_local $8)
                                                  )
                                                )
                                                (set_local $7
                                                  (i32.const 0)
                                                )
                                                (set_local $8
                                                  (i32.const 3541)
                                                )
                                                (br $__rjti$11)
                                              )
                                              (block
                                                (set_local $7
                                                  (i32.const 0)
                                                )
                                                (set_local $8
                                                  (i32.const 3541)
                                                )
                                                (br $__rjti$11)
                                              )
                                            )
                                          )
                                          (if
                                            (i64.lt_s
                                              (tee_local $19
                                                (i64.load
                                                  (get_local $17)
                                                )
                                              )
                                              (i64.const 0)
                                            )
                                            (block
                                              (i64.store
                                                (get_local $17)
                                                (tee_local $19
                                                  (i64.sub
                                                    (i64.const 0)
                                                    (get_local $19)
                                                  )
                                                )
                                              )
                                              (set_local $7
                                                (i32.const 1)
                                              )
                                              (set_local $8
                                                (i32.const 3541)
                                              )
                                              (br $__rjti$7)
                                            )
                                          )
                                          (set_local $1
                                            (i32.and
                                              (get_local $9)
                                              (i32.const 1)
                                            )
                                          )
                                          (if
                                            (i32.and
                                              (get_local $9)
                                              (i32.const 2048)
                                            )
                                            (block
                                              (set_local $7
                                                (i32.const 1)
                                              )
                                              (set_local $8
                                                (i32.const 3542)
                                              )
                                              (br $__rjti$7)
                                            )
                                            (block
                                              (set_local $7
                                                (get_local $1)
                                              )
                                              (set_local $8
                                                (if i32
                                                  (get_local $1)
                                                  (i32.const 3543)
                                                  (i32.const 3541)
                                                )
                                              )
                                              (br $__rjti$7)
                                            )
                                          )
                                        )
                                        (set_local $19
                                          (i64.load
                                            (get_local $17)
                                          )
                                        )
                                        (set_local $7
                                          (i32.const 0)
                                        )
                                        (set_local $8
                                          (i32.const 3541)
                                        )
                                        (br $__rjti$7)
                                      )
                                      (i64.store8
                                        (get_local $42)
                                        (i64.load
                                          (get_local $17)
                                        )
                                      )
                                      (set_local $1
                                        (get_local $42)
                                      )
                                      (set_local $9
                                        (get_local $8)
                                      )
                                      (set_local $6
                                        (i32.const 1)
                                      )
                                      (set_local $7
                                        (i32.const 0)
                                      )
                                      (set_local $8
                                        (i32.const 3541)
                                      )
                                      (set_local $5
                                        (get_local $24)
                                      )
                                      (br $__rjto$11)
                                    )
                                    (set_local $9
                                      (i32.load
                                        (i32.const 6376)
                                      )
                                    )
                                    (set_local $1
                                      (i32.const 0)
                                    )
                                    (block $__rjto$1
                                      (block $__rjti$1
                                        (loop $while-in39
                                          (br_if $__rjti$1
                                            (i32.eq
                                              (i32.load8_u
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 3589)
                                                )
                                              )
                                              (get_local $9)
                                            )
                                          )
                                          (br_if $while-in39
                                            (i32.ne
                                              (tee_local $1
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 1)
                                                )
                                              )
                                              (i32.const 87)
                                            )
                                          )
                                          (set_local $1
                                            (i32.const 87)
                                          )
                                          (set_local $9
                                            (i32.const 3677)
                                          )
                                        )
                                        (br $__rjto$1)
                                      )
                                      (if
                                        (get_local $1)
                                        (set_local $9
                                          (i32.const 3677)
                                        )
                                        (block
                                          (set_local $9
                                            (i32.const 3677)
                                          )
                                          (br $__rjti$8)
                                        )
                                      )
                                    )
                                    (loop $while-in41
                                      (set_local $6
                                        (get_local $9)
                                      )
                                      (loop $while-in43
                                        (set_local $9
                                          (i32.add
                                            (get_local $6)
                                            (i32.const 1)
                                          )
                                        )
                                        (if
                                          (i32.load8_s
                                            (get_local $6)
                                          )
                                          (block
                                            (set_local $6
                                              (get_local $9)
                                            )
                                            (br $while-in43)
                                          )
                                        )
                                      )
                                      (br_if $while-in41
                                        (tee_local $1
                                          (i32.add
                                            (get_local $1)
                                            (i32.const -1)
                                          )
                                        )
                                      )
                                      (br $__rjti$8)
                                    )
                                  )
                                  (if
                                    (i32.eqz
                                      (tee_local $9
                                        (i32.load
                                          (get_local $17)
                                        )
                                      )
                                    )
                                    (set_local $9
                                      (i32.const 3551)
                                    )
                                  )
                                  (br $__rjti$8)
                                )
                                (i64.store32
                                  (get_local $40)
                                  (i64.load
                                    (get_local $17)
                                  )
                                )
                                (i32.store
                                  (get_local $45)
                                  (i32.const 0)
                                )
                                (i32.store
                                  (get_local $17)
                                  (get_local $40)
                                )
                                (set_local $6
                                  (get_local $40)
                                )
                                (set_local $7
                                  (i32.const -1)
                                )
                                (br $__rjti$9)
                              )
                              (set_local $6
                                (i32.load
                                  (get_local $17)
                                )
                              )
                              (if
                                (get_local $5)
                                (block
                                  (set_local $7
                                    (get_local $5)
                                  )
                                  (br $__rjti$9)
                                )
                                (block
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $11)
                                    (i32.const 0)
                                    (get_local $9)
                                  )
                                  (set_local $1
                                    (i32.const 0)
                                  )
                                  (br $__rjti$10)
                                )
                              )
                            )
                            (set_local $15
                              (f64.load
                                (get_local $17)
                              )
                            )
                            (i32.store
                              (get_local $22)
                              (i32.const 0)
                            )
                            (set_local $29
                              (if i32
                                (i64.lt_s
                                  (i64.reinterpret/f64
                                    (get_local $15)
                                  )
                                  (i64.const 0)
                                )
                                (block i32
                                  (set_local $27
                                    (i32.const 1)
                                  )
                                  (set_local $15
                                    (f64.neg
                                      (get_local $15)
                                    )
                                  )
                                  (i32.const 3558)
                                )
                                (block i32
                                  (set_local $1
                                    (i32.and
                                      (get_local $9)
                                      (i32.const 1)
                                    )
                                  )
                                  (if i32
                                    (i32.and
                                      (get_local $9)
                                      (i32.const 2048)
                                    )
                                    (block i32
                                      (set_local $27
                                        (i32.const 1)
                                      )
                                      (i32.const 3561)
                                    )
                                    (block i32
                                      (set_local $27
                                        (get_local $1)
                                      )
                                      (if i32
                                        (get_local $1)
                                        (i32.const 3564)
                                        (i32.const 3559)
                                      )
                                    )
                                  )
                                )
                              )
                            )
                            (block $do-once55
                              (if
                                (i64.lt_u
                                  (i64.and
                                    (i64.reinterpret/f64
                                      (get_local $15)
                                    )
                                    (i64.const 9218868437227405312)
                                  )
                                  (i64.const 9218868437227405312)
                                )
                                (block
                                  (if
                                    (tee_local $1
                                      (f64.ne
                                        (tee_local $15
                                          (f64.mul
                                            (call $_frexp
                                              (get_local $15)
                                              (get_local $22)
                                            )
                                            (f64.const 2)
                                          )
                                        )
                                        (f64.const 0)
                                      )
                                    )
                                    (i32.store
                                      (get_local $22)
                                      (i32.add
                                        (i32.load
                                          (get_local $22)
                                        )
                                        (i32.const -1)
                                      )
                                    )
                                  )
                                  (if
                                    (i32.eq
                                      (tee_local $25
                                        (i32.or
                                          (get_local $10)
                                          (i32.const 32)
                                        )
                                      )
                                      (i32.const 97)
                                    )
                                    (block
                                      (set_local $1
                                        (i32.add
                                          (get_local $29)
                                          (i32.const 9)
                                        )
                                      )
                                      (if
                                        (tee_local $7
                                          (i32.and
                                            (get_local $10)
                                            (i32.const 32)
                                          )
                                        )
                                        (set_local $29
                                          (get_local $1)
                                        )
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.or
                                            (i32.gt_u
                                              (get_local $5)
                                              (i32.const 11)
                                            )
                                            (i32.eqz
                                              (tee_local $1
                                                (i32.sub
                                                  (i32.const 12)
                                                  (get_local $5)
                                                )
                                              )
                                            )
                                          )
                                        )
                                        (block
                                          (set_local $23
                                            (f64.const 8)
                                          )
                                          (loop $while-in60
                                            (set_local $23
                                              (f64.mul
                                                (get_local $23)
                                                (f64.const 16)
                                              )
                                            )
                                            (br_if $while-in60
                                              (tee_local $1
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const -1)
                                                )
                                              )
                                            )
                                          )
                                          (set_local $15
                                            (if f64
                                              (i32.eq
                                                (i32.load8_s
                                                  (get_local $29)
                                                )
                                                (i32.const 45)
                                              )
                                              (f64.neg
                                                (f64.add
                                                  (get_local $23)
                                                  (f64.sub
                                                    (f64.neg
                                                      (get_local $15)
                                                    )
                                                    (get_local $23)
                                                  )
                                                )
                                              )
                                              (f64.sub
                                                (f64.add
                                                  (get_local $15)
                                                  (get_local $23)
                                                )
                                                (get_local $23)
                                              )
                                            )
                                          )
                                        )
                                      )
                                      (set_local $1
                                        (i32.sub
                                          (i32.const 0)
                                          (tee_local $6
                                            (i32.load
                                              (get_local $22)
                                            )
                                          )
                                        )
                                      )
                                      (if
                                        (i32.eq
                                          (tee_local $1
                                            (call $_fmt_u
                                              (i64.extend_s/i32
                                                (if i32
                                                  (i32.lt_s
                                                    (get_local $6)
                                                    (i32.const 0)
                                                  )
                                                  (get_local $1)
                                                  (get_local $6)
                                                )
                                              )
                                              (get_local $36)
                                            )
                                          )
                                          (get_local $36)
                                        )
                                        (block
                                          (i32.store8
                                            (get_local $43)
                                            (i32.const 48)
                                          )
                                          (set_local $1
                                            (get_local $43)
                                          )
                                        )
                                      )
                                      (set_local $13
                                        (i32.or
                                          (get_local $27)
                                          (i32.const 2)
                                        )
                                      )
                                      (i32.store8
                                        (i32.add
                                          (get_local $1)
                                          (i32.const -1)
                                        )
                                        (i32.add
                                          (i32.and
                                            (i32.shr_s
                                              (get_local $6)
                                              (i32.const 31)
                                            )
                                            (i32.const 2)
                                          )
                                          (i32.const 43)
                                        )
                                      )
                                      (i32.store8
                                        (tee_local $8
                                          (i32.add
                                            (get_local $1)
                                            (i32.const -2)
                                          )
                                        )
                                        (i32.add
                                          (get_local $10)
                                          (i32.const 15)
                                        )
                                      )
                                      (set_local $10
                                        (i32.lt_s
                                          (get_local $5)
                                          (i32.const 1)
                                        )
                                      )
                                      (set_local $14
                                        (i32.eqz
                                          (i32.and
                                            (get_local $9)
                                            (i32.const 8)
                                          )
                                        )
                                      )
                                      (set_local $1
                                        (get_local $21)
                                      )
                                      (loop $while-in62
                                        (i32.store8
                                          (get_local $1)
                                          (i32.or
                                            (i32.load8_u
                                              (i32.add
                                                (tee_local $6
                                                  (call $f64-to-int
                                                    (get_local $15)
                                                  )
                                                )
                                                (i32.const 3525)
                                              )
                                            )
                                            (get_local $7)
                                          )
                                        )
                                        (set_local $15
                                          (f64.mul
                                            (f64.sub
                                              (get_local $15)
                                              (f64.convert_s/i32
                                                (get_local $6)
                                              )
                                            )
                                            (f64.const 16)
                                          )
                                        )
                                        (set_local $1
                                          (block $do-once63 i32
                                            (if i32
                                              (i32.eq
                                                (i32.sub
                                                  (tee_local $6
                                                    (i32.add
                                                      (get_local $1)
                                                      (i32.const 1)
                                                    )
                                                  )
                                                  (get_local $30)
                                                )
                                                (i32.const 1)
                                              )
                                              (block i32
                                                (drop
                                                  (br_if $do-once63
                                                    (get_local $6)
                                                    (i32.and
                                                      (get_local $14)
                                                      (i32.and
                                                        (get_local $10)
                                                        (f64.eq
                                                          (get_local $15)
                                                          (f64.const 0)
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                                (i32.store8
                                                  (get_local $6)
                                                  (i32.const 46)
                                                )
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 2)
                                                )
                                              )
                                              (get_local $6)
                                            )
                                          )
                                        )
                                        (br_if $while-in62
                                          (f64.ne
                                            (get_local $15)
                                            (f64.const 0)
                                          )
                                        )
                                      )
                                      (set_local $7
                                        (i32.sub
                                          (i32.add
                                            (get_local $49)
                                            (get_local $5)
                                          )
                                          (tee_local $6
                                            (get_local $8)
                                          )
                                        )
                                      )
                                      (set_local $10
                                        (i32.add
                                          (i32.sub
                                            (get_local $47)
                                            (get_local $6)
                                          )
                                          (get_local $1)
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 32)
                                        (get_local $11)
                                        (tee_local $5
                                          (i32.add
                                            (if i32
                                              (i32.and
                                                (i32.ne
                                                  (get_local $5)
                                                  (i32.const 0)
                                                )
                                                (i32.lt_s
                                                  (i32.add
                                                    (get_local $48)
                                                    (get_local $1)
                                                  )
                                                  (get_local $5)
                                                )
                                              )
                                              (get_local $7)
                                              (tee_local $7
                                                (get_local $10)
                                              )
                                            )
                                            (get_local $13)
                                          )
                                        )
                                        (get_local $9)
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (call $___fwritex
                                          (get_local $29)
                                          (get_local $13)
                                          (get_local $0)
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 48)
                                        (get_local $11)
                                        (get_local $5)
                                        (i32.xor
                                          (get_local $9)
                                          (i32.const 65536)
                                        )
                                      )
                                      (set_local $1
                                        (i32.sub
                                          (get_local $1)
                                          (get_local $30)
                                        )
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (call $___fwritex
                                          (get_local $21)
                                          (get_local $1)
                                          (get_local $0)
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 48)
                                        (i32.sub
                                          (get_local $7)
                                          (i32.add
                                            (get_local $1)
                                            (tee_local $1
                                              (i32.sub
                                                (get_local $31)
                                                (get_local $6)
                                              )
                                            )
                                          )
                                        )
                                        (i32.const 0)
                                        (i32.const 0)
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (call $___fwritex
                                          (get_local $8)
                                          (get_local $1)
                                          (get_local $0)
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 32)
                                        (get_local $11)
                                        (get_local $5)
                                        (i32.xor
                                          (get_local $9)
                                          (i32.const 8192)
                                        )
                                      )
                                      (if
                                        (i32.ge_s
                                          (get_local $5)
                                          (get_local $11)
                                        )
                                        (set_local $11
                                          (get_local $5)
                                        )
                                      )
                                      (br $do-once55)
                                    )
                                  )
                                  (if
                                    (get_local $1)
                                    (block
                                      (i32.store
                                        (get_local $22)
                                        (tee_local $7
                                          (i32.add
                                            (i32.load
                                              (get_local $22)
                                            )
                                            (i32.const -28)
                                          )
                                        )
                                      )
                                      (set_local $15
                                        (f64.mul
                                          (get_local $15)
                                          (f64.const 268435456)
                                        )
                                      )
                                    )
                                    (set_local $7
                                      (i32.load
                                        (get_local $22)
                                      )
                                    )
                                  )
                                  (set_local $8
                                    (tee_local $6
                                      (if i32
                                        (i32.lt_s
                                          (get_local $7)
                                          (i32.const 0)
                                        )
                                        (get_local $50)
                                        (get_local $51)
                                      )
                                    )
                                  )
                                  (loop $while-in66
                                    (i32.store
                                      (get_local $8)
                                      (tee_local $1
                                        (call $f64-to-int
                                          (get_local $15)
                                        )
                                      )
                                    )
                                    (set_local $8
                                      (i32.add
                                        (get_local $8)
                                        (i32.const 4)
                                      )
                                    )
                                    (br_if $while-in66
                                      (f64.ne
                                        (tee_local $15
                                          (f64.mul
                                            (f64.sub
                                              (get_local $15)
                                              (f64.convert_u/i32
                                                (get_local $1)
                                              )
                                            )
                                            (f64.const 1e9)
                                          )
                                        )
                                        (f64.const 0)
                                      )
                                    )
                                  )
                                  (if
                                    (i32.gt_s
                                      (get_local $7)
                                      (i32.const 0)
                                    )
                                    (block
                                      (set_local $1
                                        (get_local $6)
                                      )
                                      (loop $while-in68
                                        (set_local $14
                                          (if i32
                                            (i32.gt_s
                                              (get_local $7)
                                              (i32.const 29)
                                            )
                                            (i32.const 29)
                                            (get_local $7)
                                          )
                                        )
                                        (block $do-once69
                                          (if
                                            (i32.ge_u
                                              (tee_local $7
                                                (i32.add
                                                  (get_local $8)
                                                  (i32.const -4)
                                                )
                                              )
                                              (get_local $1)
                                            )
                                            (block
                                              (set_local $19
                                                (i64.extend_u/i32
                                                  (get_local $14)
                                                )
                                              )
                                              (set_local $13
                                                (i32.const 0)
                                              )
                                              (loop $while-in72
                                                (i64.store32
                                                  (get_local $7)
                                                  (call $i64u-rem
                                                    (tee_local $52
                                                      (i64.add
                                                        (i64.shl
                                                          (i64.extend_u/i32
                                                            (i32.load
                                                              (get_local $7)
                                                            )
                                                          )
                                                          (get_local $19)
                                                        )
                                                        (i64.extend_u/i32
                                                          (get_local $13)
                                                        )
                                                      )
                                                    )
                                                    (i64.const 1000000000)
                                                  )
                                                )
                                                (set_local $13
                                                  (i32.wrap/i64
                                                    (call $i64u-div
                                                      (get_local $52)
                                                      (i64.const 1000000000)
                                                    )
                                                  )
                                                )
                                                (br_if $while-in72
                                                  (i32.ge_u
                                                    (tee_local $7
                                                      (i32.add
                                                        (get_local $7)
                                                        (i32.const -4)
                                                      )
                                                    )
                                                    (get_local $1)
                                                  )
                                                )
                                              )
                                              (br_if $do-once69
                                                (i32.eqz
                                                  (get_local $13)
                                                )
                                              )
                                              (i32.store
                                                (tee_local $1
                                                  (i32.add
                                                    (get_local $1)
                                                    (i32.const -4)
                                                  )
                                                )
                                                (get_local $13)
                                              )
                                            )
                                          )
                                        )
                                        (loop $while-in74
                                          (if
                                            (i32.gt_u
                                              (get_local $8)
                                              (get_local $1)
                                            )
                                            (if
                                              (i32.eqz
                                                (i32.load
                                                  (tee_local $7
                                                    (i32.add
                                                      (get_local $8)
                                                      (i32.const -4)
                                                    )
                                                  )
                                                )
                                              )
                                              (block
                                                (set_local $8
                                                  (get_local $7)
                                                )
                                                (br $while-in74)
                                              )
                                            )
                                          )
                                        )
                                        (i32.store
                                          (get_local $22)
                                          (tee_local $7
                                            (i32.sub
                                              (i32.load
                                                (get_local $22)
                                              )
                                              (get_local $14)
                                            )
                                          )
                                        )
                                        (br_if $while-in68
                                          (i32.gt_s
                                            (get_local $7)
                                            (i32.const 0)
                                          )
                                        )
                                      )
                                    )
                                    (set_local $1
                                      (get_local $6)
                                    )
                                  )
                                  (set_local $20
                                    (if i32
                                      (i32.lt_s
                                        (get_local $5)
                                        (i32.const 0)
                                      )
                                      (i32.const 6)
                                      (get_local $5)
                                    )
                                  )
                                  (if
                                    (i32.lt_s
                                      (get_local $7)
                                      (i32.const 0)
                                    )
                                    (block
                                      (set_local $14
                                        (i32.add
                                          (call $i32s-div
                                            (i32.add
                                              (get_local $20)
                                              (i32.const 25)
                                            )
                                            (i32.const 9)
                                          )
                                          (i32.const 1)
                                        )
                                      )
                                      (set_local $28
                                        (i32.eq
                                          (get_local $25)
                                          (i32.const 102)
                                        )
                                      )
                                      (set_local $5
                                        (get_local $8)
                                      )
                                      (loop $while-in76
                                        (if
                                          (i32.gt_s
                                            (tee_local $13
                                              (i32.sub
                                                (i32.const 0)
                                                (get_local $7)
                                              )
                                            )
                                            (i32.const 9)
                                          )
                                          (set_local $13
                                            (i32.const 9)
                                          )
                                        )
                                        (block $do-once77
                                          (if
                                            (i32.lt_u
                                              (get_local $1)
                                              (get_local $5)
                                            )
                                            (block
                                              (set_local $32
                                                (i32.add
                                                  (i32.shl
                                                    (i32.const 1)
                                                    (get_local $13)
                                                  )
                                                  (i32.const -1)
                                                )
                                              )
                                              (set_local $38
                                                (i32.shr_u
                                                  (i32.const 1000000000)
                                                  (get_local $13)
                                                )
                                              )
                                              (set_local $7
                                                (i32.const 0)
                                              )
                                              (set_local $8
                                                (get_local $1)
                                              )
                                              (loop $while-in80
                                                (i32.store
                                                  (get_local $8)
                                                  (i32.add
                                                    (i32.shr_u
                                                      (tee_local $35
                                                        (i32.load
                                                          (get_local $8)
                                                        )
                                                      )
                                                      (get_local $13)
                                                    )
                                                    (get_local $7)
                                                  )
                                                )
                                                (set_local $7
                                                  (i32.mul
                                                    (i32.and
                                                      (get_local $35)
                                                      (get_local $32)
                                                    )
                                                    (get_local $38)
                                                  )
                                                )
                                                (br_if $while-in80
                                                  (i32.lt_u
                                                    (tee_local $8
                                                      (i32.add
                                                        (get_local $8)
                                                        (i32.const 4)
                                                      )
                                                    )
                                                    (get_local $5)
                                                  )
                                                )
                                              )
                                              (set_local $8
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 4)
                                                )
                                              )
                                              (if
                                                (i32.eqz
                                                  (i32.load
                                                    (get_local $1)
                                                  )
                                                )
                                                (set_local $1
                                                  (get_local $8)
                                                )
                                              )
                                              (br_if $do-once77
                                                (i32.eqz
                                                  (get_local $7)
                                                )
                                              )
                                              (i32.store
                                                (get_local $5)
                                                (get_local $7)
                                              )
                                              (set_local $5
                                                (i32.add
                                                  (get_local $5)
                                                  (i32.const 4)
                                                )
                                              )
                                            )
                                            (block
                                              (set_local $8
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 4)
                                                )
                                              )
                                              (if
                                                (i32.eqz
                                                  (i32.load
                                                    (get_local $1)
                                                  )
                                                )
                                                (set_local $1
                                                  (get_local $8)
                                                )
                                              )
                                            )
                                          )
                                        )
                                        (set_local $7
                                          (i32.add
                                            (tee_local $8
                                              (if i32
                                                (get_local $28)
                                                (get_local $6)
                                                (get_local $1)
                                              )
                                            )
                                            (i32.shl
                                              (get_local $14)
                                              (i32.const 2)
                                            )
                                          )
                                        )
                                        (if
                                          (i32.gt_s
                                            (i32.shr_s
                                              (i32.sub
                                                (get_local $5)
                                                (get_local $8)
                                              )
                                              (i32.const 2)
                                            )
                                            (get_local $14)
                                          )
                                          (set_local $5
                                            (get_local $7)
                                          )
                                        )
                                        (i32.store
                                          (get_local $22)
                                          (tee_local $7
                                            (i32.add
                                              (i32.load
                                                (get_local $22)
                                              )
                                              (get_local $13)
                                            )
                                          )
                                        )
                                        (br_if $while-in76
                                          (i32.lt_s
                                            (get_local $7)
                                            (i32.const 0)
                                          )
                                        )
                                        (set_local $13
                                          (get_local $5)
                                        )
                                      )
                                    )
                                    (set_local $13
                                      (get_local $8)
                                    )
                                  )
                                  (set_local $28
                                    (get_local $6)
                                  )
                                  (block $do-once81
                                    (if
                                      (i32.lt_u
                                        (get_local $1)
                                        (get_local $13)
                                      )
                                      (block
                                        (set_local $5
                                          (i32.mul
                                            (i32.shr_s
                                              (i32.sub
                                                (get_local $28)
                                                (get_local $1)
                                              )
                                              (i32.const 2)
                                            )
                                            (i32.const 9)
                                          )
                                        )
                                        (br_if $do-once81
                                          (i32.lt_u
                                            (tee_local $7
                                              (i32.load
                                                (get_local $1)
                                              )
                                            )
                                            (i32.const 10)
                                          )
                                        )
                                        (set_local $8
                                          (i32.const 10)
                                        )
                                        (loop $while-in84
                                          (set_local $5
                                            (i32.add
                                              (get_local $5)
                                              (i32.const 1)
                                            )
                                          )
                                          (br_if $while-in84
                                            (i32.ge_u
                                              (get_local $7)
                                              (tee_local $8
                                                (i32.mul
                                                  (get_local $8)
                                                  (i32.const 10)
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                      (set_local $5
                                        (i32.const 0)
                                      )
                                    )
                                  )
                                  (set_local $32
                                    (i32.eq
                                      (get_local $25)
                                      (i32.const 103)
                                    )
                                  )
                                  (set_local $38
                                    (i32.ne
                                      (get_local $20)
                                      (i32.const 0)
                                    )
                                  )
                                  (if
                                    (i32.lt_s
                                      (tee_local $8
                                        (i32.add
                                          (i32.sub
                                            (get_local $20)
                                            (if i32
                                              (i32.ne
                                                (get_local $25)
                                                (i32.const 102)
                                              )
                                              (get_local $5)
                                              (i32.const 0)
                                            )
                                          )
                                          (i32.shr_s
                                            (i32.shl
                                              (i32.and
                                                (get_local $38)
                                                (get_local $32)
                                              )
                                              (i32.const 31)
                                            )
                                            (i32.const 31)
                                          )
                                        )
                                      )
                                      (i32.add
                                        (i32.mul
                                          (i32.shr_s
                                            (i32.sub
                                              (get_local $13)
                                              (get_local $28)
                                            )
                                            (i32.const 2)
                                          )
                                          (i32.const 9)
                                        )
                                        (i32.const -9)
                                      )
                                    )
                                    (block
                                      (set_local $14
                                        (call $i32s-div
                                          (tee_local $8
                                            (i32.add
                                              (get_local $8)
                                              (i32.const 9216)
                                            )
                                          )
                                          (i32.const 9)
                                        )
                                      )
                                      (if
                                        (i32.lt_s
                                          (tee_local $8
                                            (i32.add
                                              (call $i32s-rem
                                                (get_local $8)
                                                (i32.const 9)
                                              )
                                              (i32.const 1)
                                            )
                                          )
                                          (i32.const 9)
                                        )
                                        (block
                                          (set_local $7
                                            (i32.const 10)
                                          )
                                          (loop $while-in86
                                            (set_local $7
                                              (i32.mul
                                                (get_local $7)
                                                (i32.const 10)
                                              )
                                            )
                                            (br_if $while-in86
                                              (i32.ne
                                                (tee_local $8
                                                  (i32.add
                                                    (get_local $8)
                                                    (i32.const 1)
                                                  )
                                                )
                                                (i32.const 9)
                                              )
                                            )
                                          )
                                        )
                                        (set_local $7
                                          (i32.const 10)
                                        )
                                      )
                                      (set_local $14
                                        (call $i32u-rem
                                          (tee_local $25
                                            (i32.load
                                              (tee_local $8
                                                (i32.add
                                                  (i32.add
                                                    (get_local $6)
                                                    (i32.const 4)
                                                  )
                                                  (i32.shl
                                                    (i32.add
                                                      (get_local $14)
                                                      (i32.const -1024)
                                                    )
                                                    (i32.const 2)
                                                  )
                                                )
                                              )
                                            )
                                          )
                                          (get_local $7)
                                        )
                                      )
                                      (block $do-once87
                                        (if
                                          (i32.eqz
                                            (i32.and
                                              (tee_local $35
                                                (i32.eq
                                                  (i32.add
                                                    (get_local $8)
                                                    (i32.const 4)
                                                  )
                                                  (get_local $13)
                                                )
                                              )
                                              (i32.eqz
                                                (get_local $14)
                                              )
                                            )
                                          )
                                          (block
                                            (set_local $53
                                              (call $i32u-div
                                                (get_local $25)
                                                (get_local $7)
                                              )
                                            )
                                            (set_local $15
                                              (if f64
                                                (i32.lt_u
                                                  (get_local $14)
                                                  (tee_local $54
                                                    (call $i32s-div
                                                      (get_local $7)
                                                      (i32.const 2)
                                                    )
                                                  )
                                                )
                                                (f64.const 0.5)
                                                (if f64
                                                  (i32.and
                                                    (get_local $35)
                                                    (i32.eq
                                                      (get_local $14)
                                                      (get_local $54)
                                                    )
                                                  )
                                                  (f64.const 1)
                                                  (f64.const 1.5)
                                                )
                                              )
                                            )
                                            (set_local $23
                                              (if f64
                                                (i32.and
                                                  (get_local $53)
                                                  (i32.const 1)
                                                )
                                                (f64.const 9007199254740994)
                                                (f64.const 9007199254740992)
                                              )
                                            )
                                            (block $do-once89
                                              (if
                                                (get_local $27)
                                                (block
                                                  (br_if $do-once89
                                                    (i32.ne
                                                      (i32.load8_s
                                                        (get_local $29)
                                                      )
                                                      (i32.const 45)
                                                    )
                                                  )
                                                  (set_local $23
                                                    (f64.neg
                                                      (get_local $23)
                                                    )
                                                  )
                                                  (set_local $15
                                                    (f64.neg
                                                      (get_local $15)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                            (i32.store
                                              (get_local $8)
                                              (tee_local $14
                                                (i32.sub
                                                  (get_local $25)
                                                  (get_local $14)
                                                )
                                              )
                                            )
                                            (br_if $do-once87
                                              (f64.eq
                                                (f64.add
                                                  (get_local $23)
                                                  (get_local $15)
                                                )
                                                (get_local $23)
                                              )
                                            )
                                            (i32.store
                                              (get_local $8)
                                              (tee_local $5
                                                (i32.add
                                                  (get_local $14)
                                                  (get_local $7)
                                                )
                                              )
                                            )
                                            (if
                                              (i32.gt_u
                                                (get_local $5)
                                                (i32.const 999999999)
                                              )
                                              (loop $while-in92
                                                (i32.store
                                                  (get_local $8)
                                                  (i32.const 0)
                                                )
                                                (if
                                                  (i32.lt_u
                                                    (tee_local $8
                                                      (i32.add
                                                        (get_local $8)
                                                        (i32.const -4)
                                                      )
                                                    )
                                                    (get_local $1)
                                                  )
                                                  (i32.store
                                                    (tee_local $1
                                                      (i32.add
                                                        (get_local $1)
                                                        (i32.const -4)
                                                      )
                                                    )
                                                    (i32.const 0)
                                                  )
                                                )
                                                (i32.store
                                                  (get_local $8)
                                                  (tee_local $5
                                                    (i32.add
                                                      (i32.load
                                                        (get_local $8)
                                                      )
                                                      (i32.const 1)
                                                    )
                                                  )
                                                )
                                                (br_if $while-in92
                                                  (i32.gt_u
                                                    (get_local $5)
                                                    (i32.const 999999999)
                                                  )
                                                )
                                              )
                                            )
                                            (set_local $5
                                              (i32.mul
                                                (i32.shr_s
                                                  (i32.sub
                                                    (get_local $28)
                                                    (get_local $1)
                                                  )
                                                  (i32.const 2)
                                                )
                                                (i32.const 9)
                                              )
                                            )
                                            (br_if $do-once87
                                              (i32.lt_u
                                                (tee_local $14
                                                  (i32.load
                                                    (get_local $1)
                                                  )
                                                )
                                                (i32.const 10)
                                              )
                                            )
                                            (set_local $7
                                              (i32.const 10)
                                            )
                                            (loop $while-in94
                                              (set_local $5
                                                (i32.add
                                                  (get_local $5)
                                                  (i32.const 1)
                                                )
                                              )
                                              (br_if $while-in94
                                                (i32.ge_u
                                                  (get_local $14)
                                                  (tee_local $7
                                                    (i32.mul
                                                      (get_local $7)
                                                      (i32.const 10)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                      (set_local $14
                                        (get_local $1)
                                      )
                                      (set_local $7
                                        (get_local $5)
                                      )
                                      (if
                                        (i32.le_u
                                          (get_local $13)
                                          (tee_local $8
                                            (i32.add
                                              (get_local $8)
                                              (i32.const 4)
                                            )
                                          )
                                        )
                                        (set_local $8
                                          (get_local $13)
                                        )
                                      )
                                    )
                                    (block
                                      (set_local $14
                                        (get_local $1)
                                      )
                                      (set_local $7
                                        (get_local $5)
                                      )
                                      (set_local $8
                                        (get_local $13)
                                      )
                                    )
                                  )
                                  (set_local $35
                                    (i32.sub
                                      (i32.const 0)
                                      (get_local $7)
                                    )
                                  )
                                  (loop $while-in96
                                    (block $while-out95
                                      (if
                                        (i32.le_u
                                          (get_local $8)
                                          (get_local $14)
                                        )
                                        (block
                                          (set_local $25
                                            (i32.const 0)
                                          )
                                          (br $while-out95)
                                        )
                                      )
                                      (if
                                        (i32.load
                                          (tee_local $1
                                            (i32.add
                                              (get_local $8)
                                              (i32.const -4)
                                            )
                                          )
                                        )
                                        (set_local $25
                                          (i32.const 1)
                                        )
                                        (block
                                          (set_local $8
                                            (get_local $1)
                                          )
                                          (br $while-in96)
                                        )
                                      )
                                    )
                                  )
                                  (block $do-once97
                                    (if
                                      (get_local $32)
                                      (block
                                        (set_local $1
                                          (if i32
                                            (i32.and
                                              (i32.gt_s
                                                (tee_local $1
                                                  (i32.add
                                                    (i32.xor
                                                      (i32.and
                                                        (get_local $38)
                                                        (i32.const 1)
                                                      )
                                                      (i32.const 1)
                                                    )
                                                    (get_local $20)
                                                  )
                                                )
                                                (get_local $7)
                                              )
                                              (i32.gt_s
                                                (get_local $7)
                                                (i32.const -5)
                                              )
                                            )
                                            (block i32
                                              (set_local $5
                                                (i32.add
                                                  (get_local $10)
                                                  (i32.const -1)
                                                )
                                              )
                                              (i32.sub
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const -1)
                                                )
                                                (get_local $7)
                                              )
                                            )
                                            (block i32
                                              (set_local $5
                                                (i32.add
                                                  (get_local $10)
                                                  (i32.const -2)
                                                )
                                              )
                                              (i32.add
                                                (get_local $1)
                                                (i32.const -1)
                                              )
                                            )
                                          )
                                        )
                                        (br_if $do-once97
                                          (tee_local $13
                                            (i32.and
                                              (get_local $9)
                                              (i32.const 8)
                                            )
                                          )
                                        )
                                        (block $do-once99
                                          (if
                                            (get_local $25)
                                            (block
                                              (if
                                                (i32.eqz
                                                  (tee_local $20
                                                    (i32.load
                                                      (i32.add
                                                        (get_local $8)
                                                        (i32.const -4)
                                                      )
                                                    )
                                                  )
                                                )
                                                (block
                                                  (set_local $10
                                                    (i32.const 9)
                                                  )
                                                  (br $do-once99)
                                                )
                                              )
                                              (if
                                                (call $i32u-rem
                                                  (get_local $20)
                                                  (i32.const 10)
                                                )
                                                (block
                                                  (set_local $10
                                                    (i32.const 0)
                                                  )
                                                  (br $do-once99)
                                                )
                                                (block
                                                  (set_local $13
                                                    (i32.const 10)
                                                  )
                                                  (set_local $10
                                                    (i32.const 0)
                                                  )
                                                )
                                              )
                                              (loop $while-in102
                                                (set_local $10
                                                  (i32.add
                                                    (get_local $10)
                                                    (i32.const 1)
                                                  )
                                                )
                                                (br_if $while-in102
                                                  (i32.eqz
                                                    (call $i32u-rem
                                                      (get_local $20)
                                                      (tee_local $13
                                                        (i32.mul
                                                          (get_local $13)
                                                          (i32.const 10)
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                            (set_local $10
                                              (i32.const 9)
                                            )
                                          )
                                        )
                                        (set_local $20
                                          (i32.add
                                            (i32.mul
                                              (i32.shr_s
                                                (i32.sub
                                                  (get_local $8)
                                                  (get_local $28)
                                                )
                                                (i32.const 2)
                                              )
                                              (i32.const 9)
                                            )
                                            (i32.const -9)
                                          )
                                        )
                                        (if
                                          (i32.eq
                                            (i32.or
                                              (get_local $5)
                                              (i32.const 32)
                                            )
                                            (i32.const 102)
                                          )
                                          (block
                                            (set_local $13
                                              (i32.const 0)
                                            )
                                            (if
                                              (i32.ge_s
                                                (get_local $1)
                                                (if i32
                                                  (i32.lt_s
                                                    (tee_local $10
                                                      (i32.sub
                                                        (get_local $20)
                                                        (get_local $10)
                                                      )
                                                    )
                                                    (i32.const 0)
                                                  )
                                                  (tee_local $10
                                                    (i32.const 0)
                                                  )
                                                  (get_local $10)
                                                )
                                              )
                                              (set_local $1
                                                (get_local $10)
                                              )
                                            )
                                          )
                                          (block
                                            (set_local $13
                                              (i32.const 0)
                                            )
                                            (if
                                              (i32.ge_s
                                                (get_local $1)
                                                (if i32
                                                  (i32.lt_s
                                                    (tee_local $10
                                                      (i32.sub
                                                        (i32.add
                                                          (get_local $20)
                                                          (get_local $7)
                                                        )
                                                        (get_local $10)
                                                      )
                                                    )
                                                    (i32.const 0)
                                                  )
                                                  (tee_local $10
                                                    (i32.const 0)
                                                  )
                                                  (get_local $10)
                                                )
                                              )
                                              (set_local $1
                                                (get_local $10)
                                              )
                                            )
                                          )
                                        )
                                      )
                                      (block
                                        (set_local $13
                                          (i32.and
                                            (get_local $9)
                                            (i32.const 8)
                                          )
                                        )
                                        (set_local $1
                                          (get_local $20)
                                        )
                                        (set_local $5
                                          (get_local $10)
                                        )
                                      )
                                    )
                                  )
                                  (if
                                    (tee_local $28
                                      (i32.eq
                                        (i32.or
                                          (get_local $5)
                                          (i32.const 32)
                                        )
                                        (i32.const 102)
                                      )
                                    )
                                    (block
                                      (set_local $10
                                        (i32.const 0)
                                      )
                                      (if
                                        (i32.le_s
                                          (get_local $7)
                                          (i32.const 0)
                                        )
                                        (set_local $7
                                          (i32.const 0)
                                        )
                                      )
                                    )
                                    (block
                                      (if
                                        (i32.lt_s
                                          (i32.sub
                                            (get_local $31)
                                            (tee_local $10
                                              (call $_fmt_u
                                                (i64.extend_s/i32
                                                  (if i32
                                                    (i32.lt_s
                                                      (get_local $7)
                                                      (i32.const 0)
                                                    )
                                                    (get_local $35)
                                                    (get_local $7)
                                                  )
                                                )
                                                (get_local $36)
                                              )
                                            )
                                          )
                                          (i32.const 2)
                                        )
                                        (loop $while-in104
                                          (i32.store8
                                            (tee_local $10
                                              (i32.add
                                                (get_local $10)
                                                (i32.const -1)
                                              )
                                            )
                                            (i32.const 48)
                                          )
                                          (br_if $while-in104
                                            (i32.lt_s
                                              (i32.sub
                                                (get_local $31)
                                                (get_local $10)
                                              )
                                              (i32.const 2)
                                            )
                                          )
                                        )
                                      )
                                      (i32.store8
                                        (i32.add
                                          (get_local $10)
                                          (i32.const -1)
                                        )
                                        (i32.add
                                          (i32.and
                                            (i32.shr_s
                                              (get_local $7)
                                              (i32.const 31)
                                            )
                                            (i32.const 2)
                                          )
                                          (i32.const 43)
                                        )
                                      )
                                      (i32.store8
                                        (tee_local $7
                                          (i32.add
                                            (get_local $10)
                                            (i32.const -2)
                                          )
                                        )
                                        (get_local $5)
                                      )
                                      (set_local $10
                                        (get_local $7)
                                      )
                                      (set_local $7
                                        (i32.sub
                                          (get_local $31)
                                          (get_local $7)
                                        )
                                      )
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $11)
                                    (tee_local $20
                                      (i32.add
                                        (i32.add
                                          (i32.add
                                            (i32.add
                                              (get_local $27)
                                              (i32.const 1)
                                            )
                                            (get_local $1)
                                          )
                                          (i32.ne
                                            (tee_local $32
                                              (i32.or
                                                (get_local $1)
                                                (get_local $13)
                                              )
                                            )
                                            (i32.const 0)
                                          )
                                        )
                                        (get_local $7)
                                      )
                                    )
                                    (get_local $9)
                                  )
                                  (if
                                    (i32.eqz
                                      (i32.and
                                        (i32.load
                                          (get_local $0)
                                        )
                                        (i32.const 32)
                                      )
                                    )
                                    (call $___fwritex
                                      (get_local $29)
                                      (get_local $27)
                                      (get_local $0)
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 48)
                                    (get_local $11)
                                    (get_local $20)
                                    (i32.xor
                                      (get_local $9)
                                      (i32.const 65536)
                                    )
                                  )
                                  (block $do-once105
                                    (if
                                      (get_local $28)
                                      (block
                                        (set_local $7
                                          (tee_local $10
                                            (if i32
                                              (i32.gt_u
                                                (get_local $14)
                                                (get_local $6)
                                              )
                                              (get_local $6)
                                              (get_local $14)
                                            )
                                          )
                                        )
                                        (loop $while-in108
                                          (set_local $5
                                            (call $_fmt_u
                                              (i64.extend_u/i32
                                                (i32.load
                                                  (get_local $7)
                                                )
                                              )
                                              (get_local $34)
                                            )
                                          )
                                          (block $do-once109
                                            (if
                                              (i32.eq
                                                (get_local $7)
                                                (get_local $10)
                                              )
                                              (block
                                                (br_if $do-once109
                                                  (i32.ne
                                                    (get_local $5)
                                                    (get_local $34)
                                                  )
                                                )
                                                (i32.store8
                                                  (get_local $37)
                                                  (i32.const 48)
                                                )
                                                (set_local $5
                                                  (get_local $37)
                                                )
                                              )
                                              (block
                                                (br_if $do-once109
                                                  (i32.le_u
                                                    (get_local $5)
                                                    (get_local $21)
                                                  )
                                                )
                                                (drop
                                                  (call $_memset
                                                    (get_local $21)
                                                    (i32.const 48)
                                                    (i32.sub
                                                      (get_local $5)
                                                      (get_local $30)
                                                    )
                                                  )
                                                )
                                                (loop $while-in112
                                                  (br_if $while-in112
                                                    (i32.gt_u
                                                      (tee_local $5
                                                        (i32.add
                                                          (get_local $5)
                                                          (i32.const -1)
                                                        )
                                                      )
                                                      (get_local $21)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                          (if
                                            (i32.eqz
                                              (i32.and
                                                (i32.load
                                                  (get_local $0)
                                                )
                                                (i32.const 32)
                                              )
                                            )
                                            (call $___fwritex
                                              (get_local $5)
                                              (i32.sub
                                                (get_local $44)
                                                (get_local $5)
                                              )
                                              (get_local $0)
                                            )
                                          )
                                          (if
                                            (i32.le_u
                                              (tee_local $5
                                                (i32.add
                                                  (get_local $7)
                                                  (i32.const 4)
                                                )
                                              )
                                              (get_local $6)
                                            )
                                            (block
                                              (set_local $7
                                                (get_local $5)
                                              )
                                              (br $while-in108)
                                            )
                                          )
                                        )
                                        (block $do-once113
                                          (if
                                            (get_local $32)
                                            (block
                                              (br_if $do-once113
                                                (i32.and
                                                  (i32.load
                                                    (get_local $0)
                                                  )
                                                  (i32.const 32)
                                                )
                                              )
                                              (call $___fwritex
                                                (i32.const 6326)
                                                (i32.const 1)
                                                (get_local $0)
                                              )
                                            )
                                          )
                                        )
                                        (if
                                          (i32.and
                                            (i32.gt_s
                                              (get_local $1)
                                              (i32.const 0)
                                            )
                                            (i32.lt_u
                                              (get_local $5)
                                              (get_local $8)
                                            )
                                          )
                                          (loop $while-in116
                                            (if
                                              (i32.gt_u
                                                (tee_local $6
                                                  (call $_fmt_u
                                                    (i64.extend_u/i32
                                                      (i32.load
                                                        (get_local $5)
                                                      )
                                                    )
                                                    (get_local $34)
                                                  )
                                                )
                                                (get_local $21)
                                              )
                                              (block
                                                (drop
                                                  (call $_memset
                                                    (get_local $21)
                                                    (i32.const 48)
                                                    (i32.sub
                                                      (get_local $6)
                                                      (get_local $30)
                                                    )
                                                  )
                                                )
                                                (loop $while-in118
                                                  (br_if $while-in118
                                                    (i32.gt_u
                                                      (tee_local $6
                                                        (i32.add
                                                          (get_local $6)
                                                          (i32.const -1)
                                                        )
                                                      )
                                                      (get_local $21)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                            (if
                                              (i32.eqz
                                                (i32.and
                                                  (i32.load
                                                    (get_local $0)
                                                  )
                                                  (i32.const 32)
                                                )
                                              )
                                              (call $___fwritex
                                                (get_local $6)
                                                (if i32
                                                  (i32.gt_s
                                                    (get_local $1)
                                                    (i32.const 9)
                                                  )
                                                  (i32.const 9)
                                                  (get_local $1)
                                                )
                                                (get_local $0)
                                              )
                                            )
                                            (set_local $6
                                              (i32.add
                                                (get_local $1)
                                                (i32.const -9)
                                              )
                                            )
                                            (if
                                              (i32.and
                                                (i32.gt_s
                                                  (get_local $1)
                                                  (i32.const 9)
                                                )
                                                (i32.lt_u
                                                  (tee_local $5
                                                    (i32.add
                                                      (get_local $5)
                                                      (i32.const 4)
                                                    )
                                                  )
                                                  (get_local $8)
                                                )
                                              )
                                              (block
                                                (set_local $1
                                                  (get_local $6)
                                                )
                                                (br $while-in116)
                                              )
                                              (set_local $1
                                                (get_local $6)
                                              )
                                            )
                                          )
                                        )
                                        (call $_pad
                                          (get_local $0)
                                          (i32.const 48)
                                          (i32.add
                                            (get_local $1)
                                            (i32.const 9)
                                          )
                                          (i32.const 9)
                                          (i32.const 0)
                                        )
                                      )
                                      (block
                                        (set_local $5
                                          (i32.add
                                            (get_local $14)
                                            (i32.const 4)
                                          )
                                        )
                                        (if
                                          (i32.eqz
                                            (get_local $25)
                                          )
                                          (set_local $8
                                            (get_local $5)
                                          )
                                        )
                                        (if
                                          (i32.gt_s
                                            (get_local $1)
                                            (i32.const -1)
                                          )
                                          (block
                                            (set_local $13
                                              (i32.eqz
                                                (get_local $13)
                                              )
                                            )
                                            (set_local $6
                                              (get_local $14)
                                            )
                                            (set_local $5
                                              (get_local $1)
                                            )
                                            (loop $while-in120
                                              (if
                                                (i32.eq
                                                  (tee_local $1
                                                    (call $_fmt_u
                                                      (i64.extend_u/i32
                                                        (i32.load
                                                          (get_local $6)
                                                        )
                                                      )
                                                      (get_local $34)
                                                    )
                                                  )
                                                  (get_local $34)
                                                )
                                                (block
                                                  (i32.store8
                                                    (get_local $37)
                                                    (i32.const 48)
                                                  )
                                                  (set_local $1
                                                    (get_local $37)
                                                  )
                                                )
                                              )
                                              (block $do-once121
                                                (if
                                                  (i32.eq
                                                    (get_local $6)
                                                    (get_local $14)
                                                  )
                                                  (block
                                                    (if
                                                      (i32.eqz
                                                        (i32.and
                                                          (i32.load
                                                            (get_local $0)
                                                          )
                                                          (i32.const 32)
                                                        )
                                                      )
                                                      (call $___fwritex
                                                        (get_local $1)
                                                        (i32.const 1)
                                                        (get_local $0)
                                                      )
                                                    )
                                                    (set_local $1
                                                      (i32.add
                                                        (get_local $1)
                                                        (i32.const 1)
                                                      )
                                                    )
                                                    (br_if $do-once121
                                                      (i32.and
                                                        (get_local $13)
                                                        (i32.lt_s
                                                          (get_local $5)
                                                          (i32.const 1)
                                                        )
                                                      )
                                                    )
                                                    (br_if $do-once121
                                                      (i32.and
                                                        (i32.load
                                                          (get_local $0)
                                                        )
                                                        (i32.const 32)
                                                      )
                                                    )
                                                    (call $___fwritex
                                                      (i32.const 6326)
                                                      (i32.const 1)
                                                      (get_local $0)
                                                    )
                                                  )
                                                  (block
                                                    (br_if $do-once121
                                                      (i32.le_u
                                                        (get_local $1)
                                                        (get_local $21)
                                                      )
                                                    )
                                                    (drop
                                                      (call $_memset
                                                        (get_local $21)
                                                        (i32.const 48)
                                                        (i32.add
                                                          (get_local $1)
                                                          (get_local $46)
                                                        )
                                                      )
                                                    )
                                                    (loop $while-in124
                                                      (br_if $while-in124
                                                        (i32.gt_u
                                                          (tee_local $1
                                                            (i32.add
                                                              (get_local $1)
                                                              (i32.const -1)
                                                            )
                                                          )
                                                          (get_local $21)
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                              (set_local $7
                                                (i32.sub
                                                  (get_local $44)
                                                  (get_local $1)
                                                )
                                              )
                                              (if
                                                (i32.eqz
                                                  (i32.and
                                                    (i32.load
                                                      (get_local $0)
                                                    )
                                                    (i32.const 32)
                                                  )
                                                )
                                                (call $___fwritex
                                                  (get_local $1)
                                                  (if i32
                                                    (i32.gt_s
                                                      (get_local $5)
                                                      (get_local $7)
                                                    )
                                                    (get_local $7)
                                                    (get_local $5)
                                                  )
                                                  (get_local $0)
                                                )
                                              )
                                              (br_if $while-in120
                                                (i32.and
                                                  (i32.lt_u
                                                    (tee_local $6
                                                      (i32.add
                                                        (get_local $6)
                                                        (i32.const 4)
                                                      )
                                                    )
                                                    (get_local $8)
                                                  )
                                                  (i32.gt_s
                                                    (tee_local $5
                                                      (i32.sub
                                                        (get_local $5)
                                                        (get_local $7)
                                                      )
                                                    )
                                                    (i32.const -1)
                                                  )
                                                )
                                              )
                                              (set_local $1
                                                (get_local $5)
                                              )
                                            )
                                          )
                                        )
                                        (call $_pad
                                          (get_local $0)
                                          (i32.const 48)
                                          (i32.add
                                            (get_local $1)
                                            (i32.const 18)
                                          )
                                          (i32.const 18)
                                          (i32.const 0)
                                        )
                                        (br_if $do-once105
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (call $___fwritex
                                          (get_local $10)
                                          (i32.sub
                                            (get_local $31)
                                            (get_local $10)
                                          )
                                          (get_local $0)
                                        )
                                      )
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $11)
                                    (get_local $20)
                                    (i32.xor
                                      (get_local $9)
                                      (i32.const 8192)
                                    )
                                  )
                                  (if
                                    (i32.ge_s
                                      (get_local $20)
                                      (get_local $11)
                                    )
                                    (set_local $11
                                      (get_local $20)
                                    )
                                  )
                                )
                                (block
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $11)
                                    (tee_local $6
                                      (i32.add
                                        (if i32
                                          (tee_local $7
                                            (i32.or
                                              (f64.ne
                                                (get_local $15)
                                                (get_local $15)
                                              )
                                              (i32.const 0)
                                            )
                                          )
                                          (tee_local $27
                                            (i32.const 0)
                                          )
                                          (get_local $27)
                                        )
                                        (i32.const 3)
                                      )
                                    )
                                    (get_local $8)
                                  )
                                  (if
                                    (i32.eqz
                                      (i32.and
                                        (tee_local $1
                                          (i32.load
                                            (get_local $0)
                                          )
                                        )
                                        (i32.const 32)
                                      )
                                    )
                                    (block
                                      (call $___fwritex
                                        (get_local $29)
                                        (get_local $27)
                                        (get_local $0)
                                      )
                                      (set_local $1
                                        (i32.load
                                          (get_local $0)
                                        )
                                      )
                                    )
                                  )
                                  (set_local $8
                                    (if i32
                                      (tee_local $5
                                        (i32.ne
                                          (i32.and
                                            (get_local $10)
                                            (i32.const 32)
                                          )
                                          (i32.const 0)
                                        )
                                      )
                                      (i32.const 3577)
                                      (i32.const 3581)
                                    )
                                  )
                                  (set_local $5
                                    (if i32
                                      (get_local $5)
                                      (i32.const 5481)
                                      (i32.const 3585)
                                    )
                                  )
                                  (if
                                    (i32.eqz
                                      (get_local $7)
                                    )
                                    (set_local $5
                                      (get_local $8)
                                    )
                                  )
                                  (if
                                    (i32.eqz
                                      (i32.and
                                        (get_local $1)
                                        (i32.const 32)
                                      )
                                    )
                                    (call $___fwritex
                                      (get_local $5)
                                      (i32.const 3)
                                      (get_local $0)
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $11)
                                    (get_local $6)
                                    (i32.xor
                                      (get_local $9)
                                      (i32.const 8192)
                                    )
                                  )
                                  (if
                                    (i32.ge_s
                                      (get_local $6)
                                      (get_local $11)
                                    )
                                    (set_local $11
                                      (get_local $6)
                                    )
                                  )
                                )
                              )
                            )
                            (set_local $1
                              (get_local $12)
                            )
                            (br $label$continue$L1)
                          )
                          (set_local $6
                            (get_local $5)
                          )
                          (set_local $7
                            (i32.const 0)
                          )
                          (set_local $8
                            (i32.const 3541)
                          )
                          (set_local $5
                            (get_local $24)
                          )
                          (br $__rjto$11)
                        )
                        (set_local $6
                          (i32.and
                            (get_local $10)
                            (i32.const 32)
                          )
                        )
                        (set_local $6
                          (if i32
                            (i64.eq
                              (tee_local $19
                                (i64.load
                                  (get_local $17)
                                )
                              )
                              (i64.const 0)
                            )
                            (block i32
                              (set_local $19
                                (i64.const 0)
                              )
                              (get_local $24)
                            )
                            (block i32
                              (set_local $1
                                (get_local $24)
                              )
                              (loop $while-in129
                                (i32.store8
                                  (tee_local $1
                                    (i32.add
                                      (get_local $1)
                                      (i32.const -1)
                                    )
                                  )
                                  (i32.or
                                    (i32.load8_u
                                      (i32.add
                                        (i32.and
                                          (i32.wrap/i64
                                            (get_local $19)
                                          )
                                          (i32.const 15)
                                        )
                                        (i32.const 3525)
                                      )
                                    )
                                    (get_local $6)
                                  )
                                )
                                (br_if $while-in129
                                  (i64.ne
                                    (tee_local $19
                                      (i64.shr_u
                                        (get_local $19)
                                        (i64.const 4)
                                      )
                                    )
                                    (i64.const 0)
                                  )
                                )
                              )
                              (set_local $19
                                (i64.load
                                  (get_local $17)
                                )
                              )
                              (get_local $1)
                            )
                          )
                        )
                        (set_local $8
                          (i32.add
                            (i32.shr_s
                              (get_local $10)
                              (i32.const 4)
                            )
                            (i32.const 3541)
                          )
                        )
                        (if
                          (tee_local $1
                            (i32.or
                              (i32.eqz
                                (i32.and
                                  (get_local $9)
                                  (i32.const 8)
                                )
                              )
                              (i64.eq
                                (get_local $19)
                                (i64.const 0)
                              )
                            )
                          )
                          (set_local $8
                            (i32.const 3541)
                          )
                        )
                        (set_local $7
                          (if i32
                            (get_local $1)
                            (i32.const 0)
                            (i32.const 2)
                          )
                        )
                        (br $__rjti$11)
                      )
                      (set_local $6
                        (call $_fmt_u
                          (get_local $19)
                          (get_local $24)
                        )
                      )
                      (br $__rjti$11)
                    )
                    (block $label$break$L333
                      (block $__rjti$3
                        (if
                          (i32.and
                            (tee_local $7
                              (i32.ne
                                (get_local $5)
                                (i32.const 0)
                              )
                            )
                            (i32.ne
                              (i32.and
                                (tee_local $13
                                  (get_local $9)
                                )
                                (i32.const 3)
                              )
                              (i32.const 0)
                            )
                          )
                          (block
                            (set_local $6
                              (get_local $5)
                            )
                            (set_local $1
                              (get_local $9)
                            )
                            (loop $while-in132
                              (br_if $label$break$L333
                                (i32.eqz
                                  (i32.load8_s
                                    (get_local $1)
                                  )
                                )
                              )
                              (br_if $while-in132
                                (i32.and
                                  (tee_local $7
                                    (i32.ne
                                      (tee_local $6
                                        (i32.add
                                          (get_local $6)
                                          (i32.const -1)
                                        )
                                      )
                                      (i32.const 0)
                                    )
                                  )
                                  (i32.ne
                                    (i32.and
                                      (tee_local $1
                                        (i32.add
                                          (get_local $1)
                                          (i32.const 1)
                                        )
                                      )
                                      (i32.const 3)
                                    )
                                    (i32.const 0)
                                  )
                                )
                              )
                              (br $__rjti$3)
                            )
                          )
                          (block
                            (set_local $6
                              (get_local $5)
                            )
                            (set_local $1
                              (get_local $9)
                            )
                            (br $__rjti$3)
                          )
                        )
                      )
                      (if
                        (get_local $7)
                        (if
                          (i32.load8_s
                            (get_local $1)
                          )
                          (block
                            (block $__rjto$2
                              (block $__rjti$2
                                (br_if $__rjti$2
                                  (i32.le_u
                                    (get_local $6)
                                    (i32.const 3)
                                  )
                                )
                                (loop $while-in136
                                  (if
                                    (i32.eqz
                                      (i32.and
                                        (i32.xor
                                          (i32.and
                                            (tee_local $7
                                              (i32.load
                                                (get_local $1)
                                              )
                                            )
                                            (i32.const -2139062144)
                                          )
                                          (i32.const -2139062144)
                                        )
                                        (i32.add
                                          (get_local $7)
                                          (i32.const -16843009)
                                        )
                                      )
                                    )
                                    (block
                                      (set_local $1
                                        (i32.add
                                          (get_local $1)
                                          (i32.const 4)
                                        )
                                      )
                                      (br_if $while-in136
                                        (i32.gt_u
                                          (tee_local $6
                                            (i32.add
                                              (get_local $6)
                                              (i32.const -4)
                                            )
                                          )
                                          (i32.const 3)
                                        )
                                      )
                                      (br $__rjti$2)
                                    )
                                  )
                                )
                                (br $__rjto$2)
                              )
                              (if
                                (i32.eqz
                                  (get_local $6)
                                )
                                (block
                                  (set_local $6
                                    (i32.const 0)
                                  )
                                  (br $label$break$L333)
                                )
                              )
                            )
                            (loop $while-in138
                              (br_if $label$break$L333
                                (i32.eqz
                                  (i32.load8_s
                                    (get_local $1)
                                  )
                                )
                              )
                              (set_local $1
                                (i32.add
                                  (get_local $1)
                                  (i32.const 1)
                                )
                              )
                              (br_if $while-in138
                                (tee_local $6
                                  (i32.add
                                    (get_local $6)
                                    (i32.const -1)
                                  )
                                )
                              )
                              (set_local $6
                                (i32.const 0)
                              )
                            )
                          )
                        )
                        (set_local $6
                          (i32.const 0)
                        )
                      )
                    )
                    (set_local $14
                      (i32.eqz
                        (tee_local $10
                          (if i32
                            (get_local $6)
                            (get_local $1)
                            (i32.const 0)
                          )
                        )
                      )
                    )
                    (set_local $6
                      (i32.sub
                        (get_local $10)
                        (get_local $13)
                      )
                    )
                    (set_local $13
                      (i32.add
                        (get_local $9)
                        (get_local $5)
                      )
                    )
                    (set_local $1
                      (get_local $9)
                    )
                    (set_local $9
                      (get_local $8)
                    )
                    (if
                      (get_local $14)
                      (set_local $6
                        (get_local $5)
                      )
                    )
                    (set_local $7
                      (i32.const 0)
                    )
                    (set_local $8
                      (i32.const 3541)
                    )
                    (set_local $5
                      (if i32
                        (get_local $14)
                        (get_local $13)
                        (get_local $10)
                      )
                    )
                    (br $__rjto$11)
                  )
                  (set_local $1
                    (i32.const 0)
                  )
                  (set_local $5
                    (i32.const 0)
                  )
                  (set_local $8
                    (get_local $6)
                  )
                  (loop $while-in140
                    (block $while-out139
                      (br_if $while-out139
                        (i32.eqz
                          (tee_local $10
                            (i32.load
                              (get_local $8)
                            )
                          )
                        )
                      )
                      (br_if $while-out139
                        (i32.or
                          (i32.lt_s
                            (tee_local $5
                              (call $_wcrtomb
                                (get_local $39)
                                (get_local $10)
                              )
                            )
                            (i32.const 0)
                          )
                          (i32.gt_u
                            (get_local $5)
                            (i32.sub
                              (get_local $7)
                              (get_local $1)
                            )
                          )
                        )
                      )
                      (set_local $8
                        (i32.add
                          (get_local $8)
                          (i32.const 4)
                        )
                      )
                      (br_if $while-in140
                        (i32.gt_u
                          (get_local $7)
                          (tee_local $1
                            (i32.add
                              (get_local $5)
                              (get_local $1)
                            )
                          )
                        )
                      )
                    )
                  )
                  (if
                    (i32.lt_s
                      (get_local $5)
                      (i32.const 0)
                    )
                    (block
                      (set_local $16
                        (i32.const -1)
                      )
                      (br $label$break$L1)
                    )
                  )
                  (call $_pad
                    (get_local $0)
                    (i32.const 32)
                    (get_local $11)
                    (get_local $1)
                    (get_local $9)
                  )
                  (if
                    (get_local $1)
                    (block
                      (set_local $5
                        (i32.const 0)
                      )
                      (loop $while-in142
                        (br_if $__rjti$10
                          (i32.eqz
                            (tee_local $8
                              (i32.load
                                (get_local $6)
                              )
                            )
                          )
                        )
                        (br_if $__rjti$10
                          (i32.gt_s
                            (tee_local $5
                              (i32.add
                                (tee_local $8
                                  (call $_wcrtomb
                                    (get_local $39)
                                    (get_local $8)
                                  )
                                )
                                (get_local $5)
                              )
                            )
                            (get_local $1)
                          )
                        )
                        (if
                          (i32.eqz
                            (i32.and
                              (i32.load
                                (get_local $0)
                              )
                              (i32.const 32)
                            )
                          )
                          (call $___fwritex
                            (get_local $39)
                            (get_local $8)
                            (get_local $0)
                          )
                        )
                        (set_local $6
                          (i32.add
                            (get_local $6)
                            (i32.const 4)
                          )
                        )
                        (br_if $while-in142
                          (i32.lt_u
                            (get_local $5)
                            (get_local $1)
                          )
                        )
                        (br $__rjti$10)
                      )
                    )
                    (block
                      (set_local $1
                        (i32.const 0)
                      )
                      (br $__rjti$10)
                    )
                  )
                )
                (call $_pad
                  (get_local $0)
                  (i32.const 32)
                  (get_local $11)
                  (get_local $1)
                  (i32.xor
                    (get_local $9)
                    (i32.const 8192)
                  )
                )
                (if
                  (i32.le_s
                    (get_local $11)
                    (get_local $1)
                  )
                  (set_local $11
                    (get_local $1)
                  )
                )
                (set_local $1
                  (get_local $12)
                )
                (br $label$continue$L1)
              )
              (set_local $1
                (i32.and
                  (get_local $9)
                  (i32.const -65537)
                )
              )
              (if
                (i32.gt_s
                  (get_local $5)
                  (i32.const -1)
                )
                (set_local $9
                  (get_local $1)
                )
              )
              (set_local $5
                (if i32
                  (i32.or
                    (get_local $5)
                    (tee_local $10
                      (i64.ne
                        (i64.load
                          (get_local $17)
                        )
                        (i64.const 0)
                      )
                    )
                  )
                  (block i32
                    (set_local $1
                      (get_local $6)
                    )
                    (if
                      (i32.gt_s
                        (get_local $5)
                        (tee_local $6
                          (i32.add
                            (i32.xor
                              (i32.and
                                (get_local $10)
                                (i32.const 1)
                              )
                              (i32.const 1)
                            )
                            (i32.sub
                              (get_local $41)
                              (get_local $6)
                            )
                          )
                        )
                      )
                      (set_local $6
                        (get_local $5)
                      )
                    )
                    (get_local $24)
                  )
                  (block i32
                    (set_local $1
                      (get_local $24)
                    )
                    (set_local $6
                      (i32.const 0)
                    )
                    (get_local $24)
                  )
                )
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 32)
              (if i32
                (i32.lt_s
                  (get_local $11)
                  (tee_local $5
                    (i32.add
                      (if i32
                        (i32.lt_s
                          (get_local $6)
                          (tee_local $10
                            (i32.sub
                              (get_local $5)
                              (get_local $1)
                            )
                          )
                        )
                        (tee_local $6
                          (get_local $10)
                        )
                        (get_local $6)
                      )
                      (get_local $7)
                    )
                  )
                )
                (tee_local $11
                  (get_local $5)
                )
                (get_local $11)
              )
              (get_local $5)
              (get_local $9)
            )
            (if
              (i32.eqz
                (i32.and
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 32)
                )
              )
              (call $___fwritex
                (get_local $8)
                (get_local $7)
                (get_local $0)
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 48)
              (get_local $11)
              (get_local $5)
              (i32.xor
                (get_local $9)
                (i32.const 65536)
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 48)
              (get_local $6)
              (get_local $10)
              (i32.const 0)
            )
            (if
              (i32.eqz
                (i32.and
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 32)
                )
              )
              (call $___fwritex
                (get_local $1)
                (get_local $10)
                (get_local $0)
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 32)
              (get_local $11)
              (get_local $5)
              (i32.xor
                (get_local $9)
                (i32.const 8192)
              )
            )
            (set_local $1
              (get_local $12)
            )
            (br $label$continue$L1)
          )
        )
        (br $label$break$L374)
      )
      (if
        (i32.eqz
          (get_local $0)
        )
        (if
          (get_local $18)
          (block
            (set_local $0
              (i32.const 1)
            )
            (loop $while-in145
              (if
                (tee_local $1
                  (i32.load
                    (i32.add
                      (get_local $4)
                      (i32.shl
                        (get_local $0)
                        (i32.const 2)
                      )
                    )
                  )
                )
                (block
                  (call $_pop_arg
                    (i32.add
                      (get_local $3)
                      (i32.shl
                        (get_local $0)
                        (i32.const 3)
                      )
                    )
                    (get_local $1)
                    (get_local $2)
                  )
                  (br_if $while-in145
                    (i32.lt_s
                      (tee_local $0
                        (i32.add
                          (get_local $0)
                          (i32.const 1)
                        )
                      )
                      (i32.const 10)
                    )
                  )
                  (set_local $16
                    (i32.const 1)
                  )
                  (br $label$break$L374)
                )
              )
            )
            (loop $while-in147
              (if
                (i32.ge_s
                  (tee_local $0
                    (i32.add
                      (get_local $0)
                      (i32.const 1)
                    )
                  )
                  (i32.const 10)
                )
                (block
                  (set_local $16
                    (i32.const 1)
                  )
                  (br $label$break$L374)
                )
              )
              (br_if $while-in147
                (i32.eqz
                  (i32.load
                    (i32.add
                      (get_local $4)
                      (i32.shl
                        (get_local $0)
                        (i32.const 2)
                      )
                    )
                  )
                )
              )
              (set_local $16
                (i32.const -1)
              )
            )
          )
          (set_local $16
            (i32.const 0)
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $26)
    )
    (get_local $16)
  )
  (func $___fwritex (param $0 i32) (param $1 i32) (param $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (block $label$break$L5
      (block $__rjti$0
        (br_if $__rjti$0
          (tee_local $4
            (i32.load
              (tee_local $3
                (i32.add
                  (get_local $2)
                  (i32.const 16)
                )
              )
            )
          )
        )
        (if
          (i32.eqz
            (call $___towrite
              (get_local $2)
            )
          )
          (block
            (set_local $4
              (i32.load
                (get_local $3)
              )
            )
            (br $__rjti$0)
          )
        )
        (br $label$break$L5)
      )
      (if
        (i32.lt_u
          (i32.sub
            (get_local $4)
            (tee_local $4
              (i32.load
                (tee_local $5
                  (i32.add
                    (get_local $2)
                    (i32.const 20)
                  )
                )
              )
            )
          )
          (get_local $1)
        )
        (block
          (drop
            (call_indirect $FUNCSIG$iiii
              (get_local $2)
              (get_local $0)
              (get_local $1)
              (i32.add
                (i32.and
                  (i32.load offset=36
                    (get_local $2)
                  )
                  (i32.const 7)
                )
                (i32.const 0)
              )
            )
          )
          (br $label$break$L5)
        )
      )
      (block $label$break$L10
        (if
          (i32.gt_s
            (i32.load8_s offset=75
              (get_local $2)
            )
            (i32.const -1)
          )
          (block
            (set_local $3
              (get_local $1)
            )
            (loop $while-in
              (br_if $label$break$L10
                (i32.eqz
                  (get_local $3)
                )
              )
              (if
                (i32.ne
                  (i32.load8_s
                    (i32.add
                      (get_local $0)
                      (tee_local $6
                        (i32.add
                          (get_local $3)
                          (i32.const -1)
                        )
                      )
                    )
                  )
                  (i32.const 10)
                )
                (block
                  (set_local $3
                    (get_local $6)
                  )
                  (br $while-in)
                )
              )
            )
            (br_if $label$break$L5
              (i32.lt_u
                (call_indirect $FUNCSIG$iiii
                  (get_local $2)
                  (get_local $0)
                  (get_local $3)
                  (i32.add
                    (i32.and
                      (i32.load offset=36
                        (get_local $2)
                      )
                      (i32.const 7)
                    )
                    (i32.const 0)
                  )
                )
                (get_local $3)
              )
            )
            (set_local $4
              (i32.load
                (get_local $5)
              )
            )
            (set_local $1
              (i32.sub
                (get_local $1)
                (get_local $3)
              )
            )
            (set_local $0
              (i32.add
                (get_local $0)
                (get_local $3)
              )
            )
          )
        )
      )
      (drop
        (call $_memcpy
          (get_local $4)
          (get_local $0)
          (get_local $1)
        )
      )
      (i32.store
        (get_local $5)
        (i32.add
          (i32.load
            (get_local $5)
          )
          (get_local $1)
        )
      )
    )
  )
  (func $_pop_arg (param $0 i32) (param $1 i32) (param $2 i32)
    (local $3 i32)
    (local $4 f64)
    (local $5 i64)
    (block $label$break$L1
      (if
        (i32.le_u
          (get_local $1)
          (i32.const 20)
        )
        (block $switch-default
          (block $switch-case9
            (block $switch-case8
              (block $switch-case7
                (block $switch-case6
                  (block $switch-case5
                    (block $switch-case4
                      (block $switch-case3
                        (block $switch-case2
                          (block $switch-case1
                            (block $switch-case
                              (br_table $switch-case $switch-case1 $switch-case2 $switch-case3 $switch-case4 $switch-case5 $switch-case6 $switch-case7 $switch-case8 $switch-case9 $switch-default
                                (i32.sub
                                  (get_local $1)
                                  (i32.const 9)
                                )
                              )
                            )
                            (set_local $3
                              (i32.load
                                (tee_local $1
                                  (i32.and
                                    (i32.add
                                      (i32.load
                                        (get_local $2)
                                      )
                                      (i32.const 3)
                                    )
                                    (i32.const -4)
                                  )
                                )
                              )
                            )
                            (i32.store
                              (get_local $2)
                              (i32.add
                                (get_local $1)
                                (i32.const 4)
                              )
                            )
                            (i32.store
                              (get_local $0)
                              (get_local $3)
                            )
                            (br $label$break$L1)
                          )
                          (set_local $3
                            (i32.load
                              (tee_local $1
                                (i32.and
                                  (i32.add
                                    (i32.load
                                      (get_local $2)
                                    )
                                    (i32.const 3)
                                  )
                                  (i32.const -4)
                                )
                              )
                            )
                          )
                          (i32.store
                            (get_local $2)
                            (i32.add
                              (get_local $1)
                              (i32.const 4)
                            )
                          )
                          (i64.store
                            (get_local $0)
                            (i64.extend_s/i32
                              (get_local $3)
                            )
                          )
                          (br $label$break$L1)
                        )
                        (set_local $3
                          (i32.load
                            (tee_local $1
                              (i32.and
                                (i32.add
                                  (i32.load
                                    (get_local $2)
                                  )
                                  (i32.const 3)
                                )
                                (i32.const -4)
                              )
                            )
                          )
                        )
                        (i32.store
                          (get_local $2)
                          (i32.add
                            (get_local $1)
                            (i32.const 4)
                          )
                        )
                        (i64.store
                          (get_local $0)
                          (i64.extend_u/i32
                            (get_local $3)
                          )
                        )
                        (br $label$break$L1)
                      )
                      (set_local $5
                        (i64.load
                          (tee_local $1
                            (i32.and
                              (i32.add
                                (i32.load
                                  (get_local $2)
                                )
                                (i32.const 7)
                              )
                              (i32.const -8)
                            )
                          )
                        )
                      )
                      (i32.store
                        (get_local $2)
                        (i32.add
                          (get_local $1)
                          (i32.const 8)
                        )
                      )
                      (i64.store
                        (get_local $0)
                        (get_local $5)
                      )
                      (br $label$break$L1)
                    )
                    (set_local $3
                      (i32.load
                        (tee_local $1
                          (i32.and
                            (i32.add
                              (i32.load
                                (get_local $2)
                              )
                              (i32.const 3)
                            )
                            (i32.const -4)
                          )
                        )
                      )
                    )
                    (i32.store
                      (get_local $2)
                      (i32.add
                        (get_local $1)
                        (i32.const 4)
                      )
                    )
                    (i64.store
                      (get_local $0)
                      (i64.extend_s/i32
                        (i32.shr_s
                          (i32.shl
                            (i32.and
                              (get_local $3)
                              (i32.const 65535)
                            )
                            (i32.const 16)
                          )
                          (i32.const 16)
                        )
                      )
                    )
                    (br $label$break$L1)
                  )
                  (set_local $3
                    (i32.load
                      (tee_local $1
                        (i32.and
                          (i32.add
                            (i32.load
                              (get_local $2)
                            )
                            (i32.const 3)
                          )
                          (i32.const -4)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $2)
                    (i32.add
                      (get_local $1)
                      (i32.const 4)
                    )
                  )
                  (i64.store
                    (get_local $0)
                    (i64.extend_u/i32
                      (i32.and
                        (get_local $3)
                        (i32.const 65535)
                      )
                    )
                  )
                  (br $label$break$L1)
                )
                (set_local $3
                  (i32.load
                    (tee_local $1
                      (i32.and
                        (i32.add
                          (i32.load
                            (get_local $2)
                          )
                          (i32.const 3)
                        )
                        (i32.const -4)
                      )
                    )
                  )
                )
                (i32.store
                  (get_local $2)
                  (i32.add
                    (get_local $1)
                    (i32.const 4)
                  )
                )
                (i64.store
                  (get_local $0)
                  (i64.extend_s/i32
                    (i32.shr_s
                      (i32.shl
                        (i32.and
                          (get_local $3)
                          (i32.const 255)
                        )
                        (i32.const 24)
                      )
                      (i32.const 24)
                    )
                  )
                )
                (br $label$break$L1)
              )
              (set_local $3
                (i32.load
                  (tee_local $1
                    (i32.and
                      (i32.add
                        (i32.load
                          (get_local $2)
                        )
                        (i32.const 3)
                      )
                      (i32.const -4)
                    )
                  )
                )
              )
              (i32.store
                (get_local $2)
                (i32.add
                  (get_local $1)
                  (i32.const 4)
                )
              )
              (i64.store
                (get_local $0)
                (i64.extend_u/i32
                  (i32.and
                    (get_local $3)
                    (i32.const 255)
                  )
                )
              )
              (br $label$break$L1)
            )
            (set_local $4
              (f64.load
                (tee_local $1
                  (i32.and
                    (i32.add
                      (i32.load
                        (get_local $2)
                      )
                      (i32.const 7)
                    )
                    (i32.const -8)
                  )
                )
              )
            )
            (i32.store
              (get_local $2)
              (i32.add
                (get_local $1)
                (i32.const 8)
              )
            )
            (f64.store
              (get_local $0)
              (get_local $4)
            )
            (br $label$break$L1)
          )
          (set_local $4
            (f64.load
              (tee_local $1
                (i32.and
                  (i32.add
                    (i32.load
                      (get_local $2)
                    )
                    (i32.const 7)
                  )
                  (i32.const -8)
                )
              )
            )
          )
          (i32.store
            (get_local $2)
            (i32.add
              (get_local $1)
              (i32.const 8)
            )
          )
          (f64.store
            (get_local $0)
            (get_local $4)
          )
        )
      )
    )
  )
  (func $_fmt_u (param $0 i64) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i64)
    (local $4 i32)
    (set_local $2
      (i32.wrap/i64
        (get_local $0)
      )
    )
    (if
      (i64.gt_u
        (get_local $0)
        (i64.const 4294967295)
      )
      (block
        (loop $while-in
          (i64.store8
            (tee_local $1
              (i32.add
                (get_local $1)
                (i32.const -1)
              )
            )
            (i64.or
              (call $i64u-rem
                (get_local $0)
                (i64.const 10)
              )
              (i64.const 48)
            )
          )
          (set_local $3
            (call $i64u-div
              (get_local $0)
              (i64.const 10)
            )
          )
          (if
            (i64.gt_u
              (get_local $0)
              (i64.const 42949672959)
            )
            (block
              (set_local $0
                (get_local $3)
              )
              (br $while-in)
            )
          )
        )
        (set_local $2
          (i32.wrap/i64
            (get_local $3)
          )
        )
      )
    )
    (if
      (get_local $2)
      (loop $while-in1
        (i32.store8
          (tee_local $1
            (i32.add
              (get_local $1)
              (i32.const -1)
            )
          )
          (i32.or
            (call $i32u-rem
              (get_local $2)
              (i32.const 10)
            )
            (i32.const 48)
          )
        )
        (set_local $4
          (call $i32u-div
            (get_local $2)
            (i32.const 10)
          )
        )
        (if
          (i32.ge_u
            (get_local $2)
            (i32.const 10)
          )
          (block
            (set_local $2
              (get_local $4)
            )
            (br $while-in1)
          )
        )
      )
    )
    (get_local $1)
  )
  (func $_pad (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (local $5 i32)
    (local $6 i32)
    (set_local $6
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 256)
      )
    )
    (set_local $5
      (get_local $6)
    )
    (block $do-once
      (if
        (i32.and
          (i32.gt_s
            (get_local $2)
            (get_local $3)
          )
          (i32.eqz
            (i32.and
              (get_local $4)
              (i32.const 73728)
            )
          )
        )
        (block
          (drop
            (call $_memset
              (get_local $5)
              (get_local $1)
              (if i32
                (i32.gt_u
                  (tee_local $4
                    (i32.sub
                      (get_local $2)
                      (get_local $3)
                    )
                  )
                  (i32.const 256)
                )
                (i32.const 256)
                (get_local $4)
              )
            )
          )
          (set_local $3
            (i32.eqz
              (i32.and
                (tee_local $1
                  (i32.load
                    (get_local $0)
                  )
                )
                (i32.const 32)
              )
            )
          )
          (if
            (i32.gt_u
              (get_local $4)
              (i32.const 255)
            )
            (block
              (set_local $2
                (get_local $4)
              )
              (loop $while-in
                (if
                  (get_local $3)
                  (block
                    (call $___fwritex
                      (get_local $5)
                      (i32.const 256)
                      (get_local $0)
                    )
                    (set_local $1
                      (i32.load
                        (get_local $0)
                      )
                    )
                  )
                )
                (set_local $3
                  (i32.eqz
                    (i32.and
                      (get_local $1)
                      (i32.const 32)
                    )
                  )
                )
                (br_if $while-in
                  (i32.gt_u
                    (tee_local $2
                      (i32.add
                        (get_local $2)
                        (i32.const -256)
                      )
                    )
                    (i32.const 255)
                  )
                )
              )
              (br_if $do-once
                (i32.eqz
                  (get_local $3)
                )
              )
              (set_local $4
                (i32.and
                  (get_local $4)
                  (i32.const 255)
                )
              )
            )
            (br_if $do-once
              (i32.eqz
                (get_local $3)
              )
            )
          )
          (call $___fwritex
            (get_local $5)
            (get_local $4)
            (get_local $0)
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $6)
    )
  )
  (func $_frexp (param $0 f64) (param $1 i32) (result f64)
    (local $2 i64)
    (local $3 i64)
    (block $switch
      (block $switch-default
        (block $switch-case0
          (block $switch-case
            (br_table $switch-case $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-case0 $switch-default
              (i32.sub
                (i32.shr_s
                  (i32.shl
                    (i32.and
                      (i32.and
                        (i32.wrap/i64
                          (tee_local $3
                            (i64.shr_u
                              (tee_local $2
                                (i64.reinterpret/f64
                                  (get_local $0)
                                )
                              )
                              (i64.const 52)
                            )
                          )
                        )
                        (i32.const 65535)
                      )
                      (i32.const 2047)
                    )
                    (i32.const 16)
                  )
                  (i32.const 16)
                )
                (i32.const 0)
              )
            )
          )
          (i32.store
            (get_local $1)
            (if i32
              (f64.ne
                (get_local $0)
                (f64.const 0)
              )
              (block i32
                (set_local $0
                  (call $_frexp
                    (f64.mul
                      (get_local $0)
                      (f64.const 18446744073709551615)
                    )
                    (get_local $1)
                  )
                )
                (i32.add
                  (i32.load
                    (get_local $1)
                  )
                  (i32.const -64)
                )
              )
              (i32.const 0)
            )
          )
          (br $switch)
        )
        (br $switch)
      )
      (i32.store
        (get_local $1)
        (i32.add
          (i32.and
            (i32.wrap/i64
              (get_local $3)
            )
            (i32.const 2047)
          )
          (i32.const -1022)
        )
      )
      (set_local $0
        (f64.reinterpret/i64
          (i64.or
            (i64.and
              (get_local $2)
              (i64.const -9218868437227405313)
            )
            (i64.const 4602678819172646912)
          )
        )
      )
    )
    (get_local $0)
  )
  (func $_wcrtomb (param $0 i32) (param $1 i32) (result i32)
    (block $do-once i32
      (if i32
        (get_local $0)
        (block i32
          (if
            (i32.lt_u
              (get_local $1)
              (i32.const 128)
            )
            (block
              (i32.store8
                (get_local $0)
                (get_local $1)
              )
              (br $do-once
                (i32.const 1)
              )
            )
          )
          (if
            (i32.lt_u
              (get_local $1)
              (i32.const 2048)
            )
            (block
              (i32.store8
                (get_local $0)
                (i32.or
                  (i32.shr_u
                    (get_local $1)
                    (i32.const 6)
                  )
                  (i32.const 192)
                )
              )
              (i32.store8 offset=1
                (get_local $0)
                (i32.or
                  (i32.and
                    (get_local $1)
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (br $do-once
                (i32.const 2)
              )
            )
          )
          (if
            (i32.or
              (i32.lt_u
                (get_local $1)
                (i32.const 55296)
              )
              (i32.eq
                (i32.and
                  (get_local $1)
                  (i32.const -8192)
                )
                (i32.const 57344)
              )
            )
            (block
              (i32.store8
                (get_local $0)
                (i32.or
                  (i32.shr_u
                    (get_local $1)
                    (i32.const 12)
                  )
                  (i32.const 224)
                )
              )
              (i32.store8 offset=1
                (get_local $0)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $1)
                      (i32.const 6)
                    )
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.store8 offset=2
                (get_local $0)
                (i32.or
                  (i32.and
                    (get_local $1)
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (br $do-once
                (i32.const 3)
              )
            )
          )
          (if i32
            (i32.lt_u
              (i32.add
                (get_local $1)
                (i32.const -65536)
              )
              (i32.const 1048576)
            )
            (block i32
              (i32.store8
                (get_local $0)
                (i32.or
                  (i32.shr_u
                    (get_local $1)
                    (i32.const 18)
                  )
                  (i32.const 240)
                )
              )
              (i32.store8 offset=1
                (get_local $0)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $1)
                      (i32.const 12)
                    )
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.store8 offset=2
                (get_local $0)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $1)
                      (i32.const 6)
                    )
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.store8 offset=3
                (get_local $0)
                (i32.or
                  (i32.and
                    (get_local $1)
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.const 4)
            )
            (block i32
              (i32.store
                (i32.const 6376)
                (i32.const 84)
              )
              (i32.const -1)
            )
          )
        )
        (i32.const 1)
      )
    )
  )
  (func $___towrite (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (i32.load8_s
        (tee_local $2
          (i32.add
            (get_local $0)
            (i32.const 74)
          )
        )
      )
    )
    (i32.store8
      (get_local $2)
      (i32.or
        (i32.add
          (get_local $1)
          (i32.const 255)
        )
        (get_local $1)
      )
    )
    (tee_local $0
      (if i32
        (i32.and
          (tee_local $1
            (i32.load
              (get_local $0)
            )
          )
          (i32.const 8)
        )
        (block i32
          (i32.store
            (get_local $0)
            (i32.or
              (get_local $1)
              (i32.const 32)
            )
          )
          (i32.const -1)
        )
        (block i32
          (i32.store offset=8
            (get_local $0)
            (i32.const 0)
          )
          (i32.store offset=4
            (get_local $0)
            (i32.const 0)
          )
          (i32.store offset=28
            (get_local $0)
            (tee_local $1
              (i32.load offset=44
                (get_local $0)
              )
            )
          )
          (i32.store offset=20
            (get_local $0)
            (get_local $1)
          )
          (i32.store offset=16
            (get_local $0)
            (i32.add
              (get_local $1)
              (i32.load offset=48
                (get_local $0)
              )
            )
          )
          (i32.const 0)
        )
      )
    )
  )
  (func $___overflow (result i32)
    (local $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (set_local $1
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (i32.store8
      (tee_local $2
        (get_local $1)
      )
      (i32.const 10)
    )
    (block $do-once
      (block $__rjti$0
        (br_if $__rjti$0
          (tee_local $0
            (i32.load
              (i32.const 1460)
            )
          )
        )
        (if
          (call $___towrite
            (i32.const 1444)
          )
          (set_local $0
            (i32.const -1)
          )
          (block
            (set_local $0
              (i32.load
                (i32.const 1460)
              )
            )
            (br $__rjti$0)
          )
        )
        (br $do-once)
      )
      (if
        (i32.eqz
          (i32.or
            (i32.ge_u
              (tee_local $3
                (i32.load
                  (i32.const 1464)
                )
              )
              (get_local $0)
            )
            (i32.eq
              (i32.load8_s
                (i32.const 1519)
              )
              (i32.const 10)
            )
          )
        )
        (block
          (i32.store
            (i32.const 1464)
            (i32.add
              (get_local $3)
              (i32.const 1)
            )
          )
          (i32.store8
            (get_local $3)
            (i32.const 10)
          )
          (set_local $0
            (i32.const 10)
          )
          (br $do-once)
        )
      )
      (set_local $0
        (if i32
          (i32.eq
            (call_indirect $FUNCSIG$iiii
              (i32.const 1444)
              (get_local $2)
              (i32.const 1)
              (i32.add
                (i32.and
                  (i32.load
                    (i32.const 1480)
                  )
                  (i32.const 7)
                )
                (i32.const 0)
              )
            )
            (i32.const 1)
          )
          (i32.load8_u
            (get_local $2)
          )
          (i32.const -1)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $1)
    )
    (get_local $0)
  )
  (func $_malloc (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (local $16 i32)
    (local $17 i32)
    (local $18 i32)
    (local $19 i32)
    (local $20 i32)
    (local $21 i32)
    (set_local $14
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $18
      (get_local $14)
    )
    (block $do-once
      (if
        (i32.lt_u
          (get_local $0)
          (i32.const 245)
        )
        (block
          (set_local $3
            (i32.and
              (i32.add
                (get_local $0)
                (i32.const 11)
              )
              (i32.const -8)
            )
          )
          (if
            (i32.and
              (tee_local $0
                (i32.shr_u
                  (tee_local $8
                    (i32.load
                      (i32.const 6380)
                    )
                  )
                  (tee_local $2
                    (i32.shr_u
                      (if i32
                        (i32.lt_u
                          (get_local $0)
                          (i32.const 11)
                        )
                        (tee_local $3
                          (i32.const 16)
                        )
                        (get_local $3)
                      )
                      (i32.const 3)
                    )
                  )
                )
              )
              (i32.const 3)
            )
            (block
              (set_local $4
                (i32.load
                  (tee_local $1
                    (i32.add
                      (tee_local $7
                        (i32.load
                          (tee_local $3
                            (i32.add
                              (tee_local $2
                                (i32.add
                                  (i32.shl
                                    (i32.shl
                                      (tee_local $5
                                        (i32.add
                                          (i32.xor
                                            (i32.and
                                              (get_local $0)
                                              (i32.const 1)
                                            )
                                            (i32.const 1)
                                          )
                                          (get_local $2)
                                        )
                                      )
                                      (i32.const 1)
                                    )
                                    (i32.const 2)
                                  )
                                  (i32.const 6420)
                                )
                              )
                              (i32.const 8)
                            )
                          )
                        )
                      )
                      (i32.const 8)
                    )
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $2)
                  (get_local $4)
                )
                (i32.store
                  (i32.const 6380)
                  (i32.and
                    (get_local $8)
                    (i32.xor
                      (i32.shl
                        (i32.const 1)
                        (get_local $5)
                      )
                      (i32.const -1)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $4)
                      (i32.load
                        (i32.const 6396)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $0
                          (i32.add
                            (get_local $4)
                            (i32.const 12)
                          )
                        )
                      )
                      (get_local $7)
                    )
                    (block
                      (i32.store
                        (get_local $0)
                        (get_local $2)
                      )
                      (i32.store
                        (get_local $3)
                        (get_local $4)
                      )
                    )
                    (call $_abort)
                  )
                )
              )
              (i32.store offset=4
                (get_local $7)
                (i32.or
                  (tee_local $0
                    (i32.shl
                      (get_local $5)
                      (i32.const 3)
                    )
                  )
                  (i32.const 3)
                )
              )
              (i32.store
                (tee_local $0
                  (i32.add
                    (i32.add
                      (get_local $7)
                      (get_local $0)
                    )
                    (i32.const 4)
                  )
                )
                (i32.or
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 1)
                )
              )
              (set_global $STACKTOP
                (get_local $14)
              )
              (return
                (get_local $1)
              )
            )
          )
          (if
            (i32.gt_u
              (get_local $3)
              (tee_local $16
                (i32.load
                  (i32.const 6388)
                )
              )
            )
            (block
              (if
                (get_local $0)
                (block
                  (set_local $5
                    (i32.and
                      (i32.shr_u
                        (tee_local $0
                          (i32.add
                            (i32.and
                              (tee_local $0
                                (i32.and
                                  (i32.shl
                                    (get_local $0)
                                    (get_local $2)
                                  )
                                  (i32.or
                                    (tee_local $0
                                      (i32.shl
                                        (i32.const 2)
                                        (get_local $2)
                                      )
                                    )
                                    (i32.sub
                                      (i32.const 0)
                                      (get_local $0)
                                    )
                                  )
                                )
                              )
                              (i32.sub
                                (i32.const 0)
                                (get_local $0)
                              )
                            )
                            (i32.const -1)
                          )
                        )
                        (i32.const 12)
                      )
                      (i32.const 16)
                    )
                  )
                  (set_local $12
                    (i32.load
                      (tee_local $5
                        (i32.add
                          (tee_local $9
                            (i32.load
                              (tee_local $2
                                (i32.add
                                  (tee_local $4
                                    (i32.add
                                      (i32.shl
                                        (i32.shl
                                          (tee_local $11
                                            (i32.add
                                              (i32.or
                                                (i32.or
                                                  (i32.or
                                                    (i32.or
                                                      (tee_local $0
                                                        (i32.and
                                                          (i32.shr_u
                                                            (tee_local $2
                                                              (i32.shr_u
                                                                (get_local $0)
                                                                (get_local $5)
                                                              )
                                                            )
                                                            (i32.const 5)
                                                          )
                                                          (i32.const 8)
                                                        )
                                                      )
                                                      (get_local $5)
                                                    )
                                                    (tee_local $0
                                                      (i32.and
                                                        (i32.shr_u
                                                          (tee_local $2
                                                            (i32.shr_u
                                                              (get_local $2)
                                                              (get_local $0)
                                                            )
                                                          )
                                                          (i32.const 2)
                                                        )
                                                        (i32.const 4)
                                                      )
                                                    )
                                                  )
                                                  (tee_local $0
                                                    (i32.and
                                                      (i32.shr_u
                                                        (tee_local $2
                                                          (i32.shr_u
                                                            (get_local $2)
                                                            (get_local $0)
                                                          )
                                                        )
                                                        (i32.const 1)
                                                      )
                                                      (i32.const 2)
                                                    )
                                                  )
                                                )
                                                (tee_local $0
                                                  (i32.and
                                                    (i32.shr_u
                                                      (tee_local $2
                                                        (i32.shr_u
                                                          (get_local $2)
                                                          (get_local $0)
                                                        )
                                                      )
                                                      (i32.const 1)
                                                    )
                                                    (i32.const 1)
                                                  )
                                                )
                                              )
                                              (i32.shr_u
                                                (get_local $2)
                                                (get_local $0)
                                              )
                                            )
                                          )
                                          (i32.const 1)
                                        )
                                        (i32.const 2)
                                      )
                                      (i32.const 6420)
                                    )
                                  )
                                  (i32.const 8)
                                )
                              )
                            )
                          )
                          (i32.const 8)
                        )
                      )
                    )
                  )
                  (if
                    (i32.eq
                      (get_local $4)
                      (get_local $12)
                    )
                    (i32.store
                      (i32.const 6380)
                      (tee_local $7
                        (i32.and
                          (get_local $8)
                          (i32.xor
                            (i32.shl
                              (i32.const 1)
                              (get_local $11)
                            )
                            (i32.const -1)
                          )
                        )
                      )
                    )
                    (block
                      (if
                        (i32.lt_u
                          (get_local $12)
                          (i32.load
                            (i32.const 6396)
                          )
                        )
                        (call $_abort)
                      )
                      (if
                        (i32.eq
                          (i32.load
                            (tee_local $0
                              (i32.add
                                (get_local $12)
                                (i32.const 12)
                              )
                            )
                          )
                          (get_local $9)
                        )
                        (block
                          (i32.store
                            (get_local $0)
                            (get_local $4)
                          )
                          (i32.store
                            (get_local $2)
                            (get_local $12)
                          )
                          (set_local $7
                            (get_local $8)
                          )
                        )
                        (call $_abort)
                      )
                    )
                  )
                  (i32.store offset=4
                    (get_local $9)
                    (i32.or
                      (get_local $3)
                      (i32.const 3)
                    )
                  )
                  (i32.store offset=4
                    (tee_local $4
                      (i32.add
                        (get_local $9)
                        (get_local $3)
                      )
                    )
                    (i32.or
                      (tee_local $11
                        (i32.sub
                          (i32.shl
                            (get_local $11)
                            (i32.const 3)
                          )
                          (get_local $3)
                        )
                      )
                      (i32.const 1)
                    )
                  )
                  (i32.store
                    (i32.add
                      (get_local $4)
                      (get_local $11)
                    )
                    (get_local $11)
                  )
                  (if
                    (get_local $16)
                    (block
                      (set_local $9
                        (i32.load
                          (i32.const 6400)
                        )
                      )
                      (set_local $2
                        (i32.add
                          (i32.shl
                            (i32.shl
                              (tee_local $0
                                (i32.shr_u
                                  (get_local $16)
                                  (i32.const 3)
                                )
                              )
                              (i32.const 1)
                            )
                            (i32.const 2)
                          )
                          (i32.const 6420)
                        )
                      )
                      (if
                        (i32.and
                          (get_local $7)
                          (tee_local $0
                            (i32.shl
                              (i32.const 1)
                              (get_local $0)
                            )
                          )
                        )
                        (if
                          (i32.lt_u
                            (tee_local $0
                              (i32.load
                                (tee_local $3
                                  (i32.add
                                    (get_local $2)
                                    (i32.const 8)
                                  )
                                )
                              )
                            )
                            (i32.load
                              (i32.const 6396)
                            )
                          )
                          (call $_abort)
                          (block
                            (set_local $6
                              (get_local $3)
                            )
                            (set_local $1
                              (get_local $0)
                            )
                          )
                        )
                        (block
                          (i32.store
                            (i32.const 6380)
                            (i32.or
                              (get_local $7)
                              (get_local $0)
                            )
                          )
                          (set_local $6
                            (i32.add
                              (get_local $2)
                              (i32.const 8)
                            )
                          )
                          (set_local $1
                            (get_local $2)
                          )
                        )
                      )
                      (i32.store
                        (get_local $6)
                        (get_local $9)
                      )
                      (i32.store offset=12
                        (get_local $1)
                        (get_local $9)
                      )
                      (i32.store offset=8
                        (get_local $9)
                        (get_local $1)
                      )
                      (i32.store offset=12
                        (get_local $9)
                        (get_local $2)
                      )
                    )
                  )
                  (i32.store
                    (i32.const 6388)
                    (get_local $11)
                  )
                  (i32.store
                    (i32.const 6400)
                    (get_local $4)
                  )
                  (set_global $STACKTOP
                    (get_local $14)
                  )
                  (return
                    (get_local $5)
                  )
                )
              )
              (if
                (tee_local $6
                  (i32.load
                    (i32.const 6384)
                  )
                )
                (block
                  (set_local $2
                    (i32.and
                      (i32.shr_u
                        (tee_local $0
                          (i32.add
                            (i32.and
                              (get_local $6)
                              (i32.sub
                                (i32.const 0)
                                (get_local $6)
                              )
                            )
                            (i32.const -1)
                          )
                        )
                        (i32.const 12)
                      )
                      (i32.const 16)
                    )
                  )
                  (set_local $9
                    (i32.sub
                      (i32.and
                        (i32.load offset=4
                          (tee_local $2
                            (i32.load
                              (i32.add
                                (i32.shl
                                  (i32.add
                                    (i32.or
                                      (i32.or
                                        (i32.or
                                          (i32.or
                                            (tee_local $0
                                              (i32.and
                                                (i32.shr_u
                                                  (tee_local $1
                                                    (i32.shr_u
                                                      (get_local $0)
                                                      (get_local $2)
                                                    )
                                                  )
                                                  (i32.const 5)
                                                )
                                                (i32.const 8)
                                              )
                                            )
                                            (get_local $2)
                                          )
                                          (tee_local $0
                                            (i32.and
                                              (i32.shr_u
                                                (tee_local $1
                                                  (i32.shr_u
                                                    (get_local $1)
                                                    (get_local $0)
                                                  )
                                                )
                                                (i32.const 2)
                                              )
                                              (i32.const 4)
                                            )
                                          )
                                        )
                                        (tee_local $0
                                          (i32.and
                                            (i32.shr_u
                                              (tee_local $1
                                                (i32.shr_u
                                                  (get_local $1)
                                                  (get_local $0)
                                                )
                                              )
                                              (i32.const 1)
                                            )
                                            (i32.const 2)
                                          )
                                        )
                                      )
                                      (tee_local $0
                                        (i32.and
                                          (i32.shr_u
                                            (tee_local $1
                                              (i32.shr_u
                                                (get_local $1)
                                                (get_local $0)
                                              )
                                            )
                                            (i32.const 1)
                                          )
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                    (i32.shr_u
                                      (get_local $1)
                                      (get_local $0)
                                    )
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 6684)
                              )
                            )
                          )
                        )
                        (i32.const -8)
                      )
                      (get_local $3)
                    )
                  )
                  (set_local $1
                    (get_local $2)
                  )
                  (loop $while-in
                    (block $while-out
                      (if
                        (i32.eqz
                          (tee_local $0
                            (i32.load offset=16
                              (get_local $1)
                            )
                          )
                        )
                        (br_if $while-out
                          (i32.eqz
                            (tee_local $0
                              (i32.load offset=20
                                (get_local $1)
                              )
                            )
                          )
                        )
                      )
                      (if
                        (tee_local $7
                          (i32.lt_u
                            (tee_local $1
                              (i32.sub
                                (i32.and
                                  (i32.load offset=4
                                    (get_local $0)
                                  )
                                  (i32.const -8)
                                )
                                (get_local $3)
                              )
                            )
                            (get_local $9)
                          )
                        )
                        (set_local $9
                          (get_local $1)
                        )
                      )
                      (set_local $1
                        (get_local $0)
                      )
                      (if
                        (get_local $7)
                        (set_local $2
                          (get_local $0)
                        )
                      )
                      (br $while-in)
                    )
                  )
                  (if
                    (i32.lt_u
                      (get_local $2)
                      (tee_local $12
                        (i32.load
                          (i32.const 6396)
                        )
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.ge_u
                      (get_local $2)
                      (tee_local $13
                        (i32.add
                          (get_local $2)
                          (get_local $3)
                        )
                      )
                    )
                    (call $_abort)
                  )
                  (set_local $15
                    (i32.load offset=24
                      (get_local $2)
                    )
                  )
                  (block $do-once4
                    (if
                      (i32.eq
                        (tee_local $0
                          (i32.load offset=12
                            (get_local $2)
                          )
                        )
                        (get_local $2)
                      )
                      (block
                        (if
                          (i32.eqz
                            (tee_local $0
                              (i32.load
                                (tee_local $1
                                  (i32.add
                                    (get_local $2)
                                    (i32.const 20)
                                  )
                                )
                              )
                            )
                          )
                          (if
                            (i32.eqz
                              (tee_local $0
                                (i32.load
                                  (tee_local $1
                                    (i32.add
                                      (get_local $2)
                                      (i32.const 16)
                                    )
                                  )
                                )
                              )
                            )
                            (block
                              (set_local $4
                                (i32.const 0)
                              )
                              (br $do-once4)
                            )
                          )
                        )
                        (loop $while-in7
                          (if
                            (tee_local $7
                              (i32.load
                                (tee_local $11
                                  (i32.add
                                    (get_local $0)
                                    (i32.const 20)
                                  )
                                )
                              )
                            )
                            (block
                              (set_local $0
                                (get_local $7)
                              )
                              (set_local $1
                                (get_local $11)
                              )
                              (br $while-in7)
                            )
                          )
                          (if
                            (tee_local $7
                              (i32.load
                                (tee_local $11
                                  (i32.add
                                    (get_local $0)
                                    (i32.const 16)
                                  )
                                )
                              )
                            )
                            (block
                              (set_local $0
                                (get_local $7)
                              )
                              (set_local $1
                                (get_local $11)
                              )
                              (br $while-in7)
                            )
                          )
                        )
                        (if
                          (i32.lt_u
                            (get_local $1)
                            (get_local $12)
                          )
                          (call $_abort)
                          (block
                            (i32.store
                              (get_local $1)
                              (i32.const 0)
                            )
                            (set_local $4
                              (get_local $0)
                            )
                          )
                        )
                      )
                      (block
                        (if
                          (i32.lt_u
                            (tee_local $11
                              (i32.load offset=8
                                (get_local $2)
                              )
                            )
                            (get_local $12)
                          )
                          (call $_abort)
                        )
                        (if
                          (i32.ne
                            (i32.load
                              (tee_local $7
                                (i32.add
                                  (get_local $11)
                                  (i32.const 12)
                                )
                              )
                            )
                            (get_local $2)
                          )
                          (call $_abort)
                        )
                        (if
                          (i32.eq
                            (i32.load
                              (tee_local $1
                                (i32.add
                                  (get_local $0)
                                  (i32.const 8)
                                )
                              )
                            )
                            (get_local $2)
                          )
                          (block
                            (i32.store
                              (get_local $7)
                              (get_local $0)
                            )
                            (i32.store
                              (get_local $1)
                              (get_local $11)
                            )
                            (set_local $4
                              (get_local $0)
                            )
                          )
                          (call $_abort)
                        )
                      )
                    )
                  )
                  (block $do-once8
                    (if
                      (get_local $15)
                      (block
                        (if
                          (i32.eq
                            (get_local $2)
                            (i32.load
                              (tee_local $0
                                (i32.add
                                  (i32.shl
                                    (tee_local $1
                                      (i32.load offset=28
                                        (get_local $2)
                                      )
                                    )
                                    (i32.const 2)
                                  )
                                  (i32.const 6684)
                                )
                              )
                            )
                          )
                          (block
                            (i32.store
                              (get_local $0)
                              (get_local $4)
                            )
                            (if
                              (i32.eqz
                                (get_local $4)
                              )
                              (block
                                (i32.store
                                  (i32.const 6384)
                                  (i32.and
                                    (get_local $6)
                                    (i32.xor
                                      (i32.shl
                                        (i32.const 1)
                                        (get_local $1)
                                      )
                                      (i32.const -1)
                                    )
                                  )
                                )
                                (br $do-once8)
                              )
                            )
                          )
                          (block
                            (if
                              (i32.lt_u
                                (get_local $15)
                                (i32.load
                                  (i32.const 6396)
                                )
                              )
                              (call $_abort)
                            )
                            (if
                              (i32.eq
                                (i32.load
                                  (tee_local $0
                                    (i32.add
                                      (get_local $15)
                                      (i32.const 16)
                                    )
                                  )
                                )
                                (get_local $2)
                              )
                              (i32.store
                                (get_local $0)
                                (get_local $4)
                              )
                              (i32.store offset=20
                                (get_local $15)
                                (get_local $4)
                              )
                            )
                            (br_if $do-once8
                              (i32.eqz
                                (get_local $4)
                              )
                            )
                          )
                        )
                        (if
                          (i32.lt_u
                            (get_local $4)
                            (tee_local $0
                              (i32.load
                                (i32.const 6396)
                              )
                            )
                          )
                          (call $_abort)
                        )
                        (i32.store offset=24
                          (get_local $4)
                          (get_local $15)
                        )
                        (if
                          (tee_local $1
                            (i32.load offset=16
                              (get_local $2)
                            )
                          )
                          (if
                            (i32.lt_u
                              (get_local $1)
                              (get_local $0)
                            )
                            (call $_abort)
                            (block
                              (i32.store offset=16
                                (get_local $4)
                                (get_local $1)
                              )
                              (i32.store offset=24
                                (get_local $1)
                                (get_local $4)
                              )
                            )
                          )
                        )
                        (if
                          (tee_local $0
                            (i32.load offset=20
                              (get_local $2)
                            )
                          )
                          (if
                            (i32.lt_u
                              (get_local $0)
                              (i32.load
                                (i32.const 6396)
                              )
                            )
                            (call $_abort)
                            (block
                              (i32.store offset=20
                                (get_local $4)
                                (get_local $0)
                              )
                              (i32.store offset=24
                                (get_local $0)
                                (get_local $4)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                  (if
                    (i32.lt_u
                      (get_local $9)
                      (i32.const 16)
                    )
                    (block
                      (i32.store offset=4
                        (get_local $2)
                        (i32.or
                          (tee_local $0
                            (i32.add
                              (get_local $9)
                              (get_local $3)
                            )
                          )
                          (i32.const 3)
                        )
                      )
                      (i32.store
                        (tee_local $0
                          (i32.add
                            (i32.add
                              (get_local $2)
                              (get_local $0)
                            )
                            (i32.const 4)
                          )
                        )
                        (i32.or
                          (i32.load
                            (get_local $0)
                          )
                          (i32.const 1)
                        )
                      )
                    )
                    (block
                      (i32.store offset=4
                        (get_local $2)
                        (i32.or
                          (get_local $3)
                          (i32.const 3)
                        )
                      )
                      (i32.store offset=4
                        (get_local $13)
                        (i32.or
                          (get_local $9)
                          (i32.const 1)
                        )
                      )
                      (i32.store
                        (i32.add
                          (get_local $13)
                          (get_local $9)
                        )
                        (get_local $9)
                      )
                      (if
                        (get_local $16)
                        (block
                          (set_local $7
                            (i32.load
                              (i32.const 6400)
                            )
                          )
                          (set_local $3
                            (i32.add
                              (i32.shl
                                (i32.shl
                                  (tee_local $0
                                    (i32.shr_u
                                      (get_local $16)
                                      (i32.const 3)
                                    )
                                  )
                                  (i32.const 1)
                                )
                                (i32.const 2)
                              )
                              (i32.const 6420)
                            )
                          )
                          (if
                            (i32.and
                              (tee_local $0
                                (i32.shl
                                  (i32.const 1)
                                  (get_local $0)
                                )
                              )
                              (get_local $8)
                            )
                            (if
                              (i32.lt_u
                                (tee_local $0
                                  (i32.load
                                    (tee_local $1
                                      (i32.add
                                        (get_local $3)
                                        (i32.const 8)
                                      )
                                    )
                                  )
                                )
                                (i32.load
                                  (i32.const 6396)
                                )
                              )
                              (call $_abort)
                              (block
                                (set_local $10
                                  (get_local $1)
                                )
                                (set_local $5
                                  (get_local $0)
                                )
                              )
                            )
                            (block
                              (i32.store
                                (i32.const 6380)
                                (i32.or
                                  (get_local $0)
                                  (get_local $8)
                                )
                              )
                              (set_local $10
                                (i32.add
                                  (get_local $3)
                                  (i32.const 8)
                                )
                              )
                              (set_local $5
                                (get_local $3)
                              )
                            )
                          )
                          (i32.store
                            (get_local $10)
                            (get_local $7)
                          )
                          (i32.store offset=12
                            (get_local $5)
                            (get_local $7)
                          )
                          (i32.store offset=8
                            (get_local $7)
                            (get_local $5)
                          )
                          (i32.store offset=12
                            (get_local $7)
                            (get_local $3)
                          )
                        )
                      )
                      (i32.store
                        (i32.const 6388)
                        (get_local $9)
                      )
                      (i32.store
                        (i32.const 6400)
                        (get_local $13)
                      )
                    )
                  )
                  (set_global $STACKTOP
                    (get_local $14)
                  )
                  (return
                    (i32.add
                      (get_local $2)
                      (i32.const 8)
                    )
                  )
                )
                (set_local $0
                  (get_local $3)
                )
              )
            )
            (set_local $0
              (get_local $3)
            )
          )
        )
        (if
          (i32.gt_u
            (get_local $0)
            (i32.const -65)
          )
          (set_local $0
            (i32.const -1)
          )
          (block
            (set_local $7
              (i32.and
                (tee_local $0
                  (i32.add
                    (get_local $0)
                    (i32.const 11)
                  )
                )
                (i32.const -8)
              )
            )
            (if
              (tee_local $5
                (i32.load
                  (i32.const 6384)
                )
              )
              (block
                (set_local $17
                  (if i32
                    (tee_local $0
                      (i32.shr_u
                        (get_local $0)
                        (i32.const 8)
                      )
                    )
                    (if i32
                      (i32.gt_u
                        (get_local $7)
                        (i32.const 16777215)
                      )
                      (i32.const 31)
                      (i32.or
                        (i32.and
                          (i32.shr_u
                            (get_local $7)
                            (i32.add
                              (tee_local $0
                                (i32.add
                                  (i32.sub
                                    (i32.const 14)
                                    (i32.or
                                      (i32.or
                                        (tee_local $0
                                          (i32.and
                                            (i32.shr_u
                                              (i32.add
                                                (tee_local $1
                                                  (i32.shl
                                                    (get_local $0)
                                                    (tee_local $3
                                                      (i32.and
                                                        (i32.shr_u
                                                          (i32.add
                                                            (get_local $0)
                                                            (i32.const 1048320)
                                                          )
                                                          (i32.const 16)
                                                        )
                                                        (i32.const 8)
                                                      )
                                                    )
                                                  )
                                                )
                                                (i32.const 520192)
                                              )
                                              (i32.const 16)
                                            )
                                            (i32.const 4)
                                          )
                                        )
                                        (get_local $3)
                                      )
                                      (tee_local $0
                                        (i32.and
                                          (i32.shr_u
                                            (i32.add
                                              (tee_local $1
                                                (i32.shl
                                                  (get_local $1)
                                                  (get_local $0)
                                                )
                                              )
                                              (i32.const 245760)
                                            )
                                            (i32.const 16)
                                          )
                                          (i32.const 2)
                                        )
                                      )
                                    )
                                  )
                                  (i32.shr_u
                                    (i32.shl
                                      (get_local $1)
                                      (get_local $0)
                                    )
                                    (i32.const 15)
                                  )
                                )
                              )
                              (i32.const 7)
                            )
                          )
                          (i32.const 1)
                        )
                        (i32.shl
                          (get_local $0)
                          (i32.const 1)
                        )
                      )
                    )
                    (i32.const 0)
                  )
                )
                (set_local $3
                  (i32.sub
                    (i32.const 0)
                    (get_local $7)
                  )
                )
                (block $__rjto$3
                  (block $__rjti$3
                    (block $__rjti$2
                      (if
                        (tee_local $1
                          (i32.load
                            (i32.add
                              (i32.shl
                                (get_local $17)
                                (i32.const 2)
                              )
                              (i32.const 6684)
                            )
                          )
                        )
                        (block
                          (set_local $0
                            (i32.sub
                              (i32.const 25)
                              (i32.shr_u
                                (get_local $17)
                                (i32.const 1)
                              )
                            )
                          )
                          (set_local $4
                            (i32.const 0)
                          )
                          (set_local $10
                            (i32.shl
                              (get_local $7)
                              (if i32
                                (i32.eq
                                  (get_local $17)
                                  (i32.const 31)
                                )
                                (i32.const 0)
                                (get_local $0)
                              )
                            )
                          )
                          (set_local $0
                            (i32.const 0)
                          )
                          (loop $while-in14
                            (if
                              (i32.lt_u
                                (tee_local $6
                                  (i32.sub
                                    (i32.and
                                      (i32.load offset=4
                                        (get_local $1)
                                      )
                                      (i32.const -8)
                                    )
                                    (get_local $7)
                                  )
                                )
                                (get_local $3)
                              )
                              (if
                                (get_local $6)
                                (block
                                  (set_local $3
                                    (get_local $6)
                                  )
                                  (set_local $0
                                    (get_local $1)
                                  )
                                )
                                (block
                                  (set_local $3
                                    (i32.const 0)
                                  )
                                  (set_local $0
                                    (get_local $1)
                                  )
                                  (br $__rjti$3)
                                )
                              )
                            )
                            (set_local $1
                              (if i32
                                (i32.or
                                  (i32.eqz
                                    (tee_local $19
                                      (i32.load offset=20
                                        (get_local $1)
                                      )
                                    )
                                  )
                                  (i32.eq
                                    (get_local $19)
                                    (tee_local $6
                                      (i32.load
                                        (i32.add
                                          (i32.add
                                            (get_local $1)
                                            (i32.const 16)
                                          )
                                          (i32.shl
                                            (i32.shr_u
                                              (get_local $10)
                                              (i32.const 31)
                                            )
                                            (i32.const 2)
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                                (get_local $4)
                                (get_local $19)
                              )
                            )
                            (set_local $10
                              (i32.shl
                                (get_local $10)
                                (i32.xor
                                  (i32.and
                                    (tee_local $4
                                      (i32.eqz
                                        (get_local $6)
                                      )
                                    )
                                    (i32.const 1)
                                  )
                                  (i32.const 1)
                                )
                              )
                            )
                            (if
                              (get_local $4)
                              (block
                                (set_local $4
                                  (get_local $1)
                                )
                                (set_local $1
                                  (get_local $0)
                                )
                                (br $__rjti$2)
                              )
                              (block
                                (set_local $4
                                  (get_local $1)
                                )
                                (set_local $1
                                  (get_local $6)
                                )
                                (br $while-in14)
                              )
                            )
                          )
                        )
                        (block
                          (set_local $4
                            (i32.const 0)
                          )
                          (set_local $1
                            (i32.const 0)
                          )
                        )
                      )
                    )
                    (br_if $__rjti$3
                      (tee_local $0
                        (if i32
                          (i32.and
                            (i32.eqz
                              (get_local $4)
                            )
                            (i32.eqz
                              (get_local $1)
                            )
                          )
                          (block i32
                            (if
                              (i32.eqz
                                (tee_local $0
                                  (i32.and
                                    (i32.or
                                      (tee_local $0
                                        (i32.shl
                                          (i32.const 2)
                                          (get_local $17)
                                        )
                                      )
                                      (i32.sub
                                        (i32.const 0)
                                        (get_local $0)
                                      )
                                    )
                                    (get_local $5)
                                  )
                                )
                              )
                              (block
                                (set_local $0
                                  (get_local $7)
                                )
                                (br $do-once)
                              )
                            )
                            (set_local $10
                              (i32.and
                                (i32.shr_u
                                  (tee_local $0
                                    (i32.add
                                      (i32.and
                                        (get_local $0)
                                        (i32.sub
                                          (i32.const 0)
                                          (get_local $0)
                                        )
                                      )
                                      (i32.const -1)
                                    )
                                  )
                                  (i32.const 12)
                                )
                                (i32.const 16)
                              )
                            )
                            (i32.load
                              (i32.add
                                (i32.shl
                                  (i32.add
                                    (i32.or
                                      (i32.or
                                        (i32.or
                                          (i32.or
                                            (tee_local $0
                                              (i32.and
                                                (i32.shr_u
                                                  (tee_local $4
                                                    (i32.shr_u
                                                      (get_local $0)
                                                      (get_local $10)
                                                    )
                                                  )
                                                  (i32.const 5)
                                                )
                                                (i32.const 8)
                                              )
                                            )
                                            (get_local $10)
                                          )
                                          (tee_local $0
                                            (i32.and
                                              (i32.shr_u
                                                (tee_local $4
                                                  (i32.shr_u
                                                    (get_local $4)
                                                    (get_local $0)
                                                  )
                                                )
                                                (i32.const 2)
                                              )
                                              (i32.const 4)
                                            )
                                          )
                                        )
                                        (tee_local $0
                                          (i32.and
                                            (i32.shr_u
                                              (tee_local $4
                                                (i32.shr_u
                                                  (get_local $4)
                                                  (get_local $0)
                                                )
                                              )
                                              (i32.const 1)
                                            )
                                            (i32.const 2)
                                          )
                                        )
                                      )
                                      (tee_local $0
                                        (i32.and
                                          (i32.shr_u
                                            (tee_local $4
                                              (i32.shr_u
                                                (get_local $4)
                                                (get_local $0)
                                              )
                                            )
                                            (i32.const 1)
                                          )
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                    (i32.shr_u
                                      (get_local $4)
                                      (get_local $0)
                                    )
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 6684)
                              )
                            )
                          )
                          (get_local $4)
                        )
                      )
                    )
                    (set_local $4
                      (get_local $1)
                    )
                    (br $__rjto$3)
                  )
                  (loop $while-in16
                    (if
                      (tee_local $10
                        (i32.lt_u
                          (tee_local $4
                            (i32.sub
                              (i32.and
                                (i32.load offset=4
                                  (get_local $0)
                                )
                                (i32.const -8)
                              )
                              (get_local $7)
                            )
                          )
                          (get_local $3)
                        )
                      )
                      (set_local $3
                        (get_local $4)
                      )
                    )
                    (if
                      (get_local $10)
                      (set_local $1
                        (get_local $0)
                      )
                    )
                    (if
                      (tee_local $4
                        (i32.load offset=16
                          (get_local $0)
                        )
                      )
                      (block
                        (set_local $0
                          (get_local $4)
                        )
                        (br $while-in16)
                      )
                    )
                    (br_if $while-in16
                      (tee_local $0
                        (i32.load offset=20
                          (get_local $0)
                        )
                      )
                    )
                    (set_local $4
                      (get_local $1)
                    )
                  )
                )
                (if
                  (get_local $4)
                  (if
                    (i32.lt_u
                      (get_local $3)
                      (i32.sub
                        (i32.load
                          (i32.const 6388)
                        )
                        (get_local $7)
                      )
                    )
                    (block
                      (if
                        (i32.lt_u
                          (get_local $4)
                          (tee_local $12
                            (i32.load
                              (i32.const 6396)
                            )
                          )
                        )
                        (call $_abort)
                      )
                      (if
                        (i32.ge_u
                          (get_local $4)
                          (tee_local $6
                            (i32.add
                              (get_local $4)
                              (get_local $7)
                            )
                          )
                        )
                        (call $_abort)
                      )
                      (set_local $10
                        (i32.load offset=24
                          (get_local $4)
                        )
                      )
                      (block $do-once17
                        (if
                          (i32.eq
                            (tee_local $0
                              (i32.load offset=12
                                (get_local $4)
                              )
                            )
                            (get_local $4)
                          )
                          (block
                            (if
                              (i32.eqz
                                (tee_local $0
                                  (i32.load
                                    (tee_local $1
                                      (i32.add
                                        (get_local $4)
                                        (i32.const 20)
                                      )
                                    )
                                  )
                                )
                              )
                              (if
                                (i32.eqz
                                  (tee_local $0
                                    (i32.load
                                      (tee_local $1
                                        (i32.add
                                          (get_local $4)
                                          (i32.const 16)
                                        )
                                      )
                                    )
                                  )
                                )
                                (block
                                  (set_local $13
                                    (i32.const 0)
                                  )
                                  (br $do-once17)
                                )
                              )
                            )
                            (loop $while-in20
                              (if
                                (tee_local $11
                                  (i32.load
                                    (tee_local $9
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 20)
                                      )
                                    )
                                  )
                                )
                                (block
                                  (set_local $0
                                    (get_local $11)
                                  )
                                  (set_local $1
                                    (get_local $9)
                                  )
                                  (br $while-in20)
                                )
                              )
                              (if
                                (tee_local $11
                                  (i32.load
                                    (tee_local $9
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 16)
                                      )
                                    )
                                  )
                                )
                                (block
                                  (set_local $0
                                    (get_local $11)
                                  )
                                  (set_local $1
                                    (get_local $9)
                                  )
                                  (br $while-in20)
                                )
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $1)
                                (get_local $12)
                              )
                              (call $_abort)
                              (block
                                (i32.store
                                  (get_local $1)
                                  (i32.const 0)
                                )
                                (set_local $13
                                  (get_local $0)
                                )
                              )
                            )
                          )
                          (block
                            (if
                              (i32.lt_u
                                (tee_local $9
                                  (i32.load offset=8
                                    (get_local $4)
                                  )
                                )
                                (get_local $12)
                              )
                              (call $_abort)
                            )
                            (if
                              (i32.ne
                                (i32.load
                                  (tee_local $11
                                    (i32.add
                                      (get_local $9)
                                      (i32.const 12)
                                    )
                                  )
                                )
                                (get_local $4)
                              )
                              (call $_abort)
                            )
                            (if
                              (i32.eq
                                (i32.load
                                  (tee_local $1
                                    (i32.add
                                      (get_local $0)
                                      (i32.const 8)
                                    )
                                  )
                                )
                                (get_local $4)
                              )
                              (block
                                (i32.store
                                  (get_local $11)
                                  (get_local $0)
                                )
                                (i32.store
                                  (get_local $1)
                                  (get_local $9)
                                )
                                (set_local $13
                                  (get_local $0)
                                )
                              )
                              (call $_abort)
                            )
                          )
                        )
                      )
                      (block $do-once21
                        (if
                          (get_local $10)
                          (block
                            (if
                              (i32.eq
                                (get_local $4)
                                (i32.load
                                  (tee_local $0
                                    (i32.add
                                      (i32.shl
                                        (tee_local $1
                                          (i32.load offset=28
                                            (get_local $4)
                                          )
                                        )
                                        (i32.const 2)
                                      )
                                      (i32.const 6684)
                                    )
                                  )
                                )
                              )
                              (block
                                (i32.store
                                  (get_local $0)
                                  (get_local $13)
                                )
                                (if
                                  (i32.eqz
                                    (get_local $13)
                                  )
                                  (block
                                    (i32.store
                                      (i32.const 6384)
                                      (tee_local $2
                                        (i32.and
                                          (get_local $5)
                                          (i32.xor
                                            (i32.shl
                                              (i32.const 1)
                                              (get_local $1)
                                            )
                                            (i32.const -1)
                                          )
                                        )
                                      )
                                    )
                                    (br $do-once21)
                                  )
                                )
                              )
                              (block
                                (if
                                  (i32.lt_u
                                    (get_local $10)
                                    (i32.load
                                      (i32.const 6396)
                                    )
                                  )
                                  (call $_abort)
                                )
                                (if
                                  (i32.eq
                                    (i32.load
                                      (tee_local $0
                                        (i32.add
                                          (get_local $10)
                                          (i32.const 16)
                                        )
                                      )
                                    )
                                    (get_local $4)
                                  )
                                  (i32.store
                                    (get_local $0)
                                    (get_local $13)
                                  )
                                  (i32.store offset=20
                                    (get_local $10)
                                    (get_local $13)
                                  )
                                )
                                (if
                                  (i32.eqz
                                    (get_local $13)
                                  )
                                  (block
                                    (set_local $2
                                      (get_local $5)
                                    )
                                    (br $do-once21)
                                  )
                                )
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $13)
                                (tee_local $0
                                  (i32.load
                                    (i32.const 6396)
                                  )
                                )
                              )
                              (call $_abort)
                            )
                            (i32.store offset=24
                              (get_local $13)
                              (get_local $10)
                            )
                            (if
                              (tee_local $1
                                (i32.load offset=16
                                  (get_local $4)
                                )
                              )
                              (if
                                (i32.lt_u
                                  (get_local $1)
                                  (get_local $0)
                                )
                                (call $_abort)
                                (block
                                  (i32.store offset=16
                                    (get_local $13)
                                    (get_local $1)
                                  )
                                  (i32.store offset=24
                                    (get_local $1)
                                    (get_local $13)
                                  )
                                )
                              )
                            )
                            (if
                              (tee_local $0
                                (i32.load offset=20
                                  (get_local $4)
                                )
                              )
                              (if
                                (i32.lt_u
                                  (get_local $0)
                                  (i32.load
                                    (i32.const 6396)
                                  )
                                )
                                (call $_abort)
                                (block
                                  (i32.store offset=20
                                    (get_local $13)
                                    (get_local $0)
                                  )
                                  (i32.store offset=24
                                    (get_local $0)
                                    (get_local $13)
                                  )
                                  (set_local $2
                                    (get_local $5)
                                  )
                                )
                              )
                              (set_local $2
                                (get_local $5)
                              )
                            )
                          )
                          (set_local $2
                            (get_local $5)
                          )
                        )
                      )
                      (block $do-once25
                        (if
                          (i32.lt_u
                            (get_local $3)
                            (i32.const 16)
                          )
                          (block
                            (i32.store offset=4
                              (get_local $4)
                              (i32.or
                                (tee_local $0
                                  (i32.add
                                    (get_local $3)
                                    (get_local $7)
                                  )
                                )
                                (i32.const 3)
                              )
                            )
                            (i32.store
                              (tee_local $0
                                (i32.add
                                  (i32.add
                                    (get_local $4)
                                    (get_local $0)
                                  )
                                  (i32.const 4)
                                )
                              )
                              (i32.or
                                (i32.load
                                  (get_local $0)
                                )
                                (i32.const 1)
                              )
                            )
                          )
                          (block
                            (i32.store offset=4
                              (get_local $4)
                              (i32.or
                                (get_local $7)
                                (i32.const 3)
                              )
                            )
                            (i32.store offset=4
                              (get_local $6)
                              (i32.or
                                (get_local $3)
                                (i32.const 1)
                              )
                            )
                            (i32.store
                              (i32.add
                                (get_local $6)
                                (get_local $3)
                              )
                              (get_local $3)
                            )
                            (set_local $0
                              (i32.shr_u
                                (get_local $3)
                                (i32.const 3)
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $3)
                                (i32.const 256)
                              )
                              (block
                                (set_local $3
                                  (i32.add
                                    (i32.shl
                                      (i32.shl
                                        (get_local $0)
                                        (i32.const 1)
                                      )
                                      (i32.const 2)
                                    )
                                    (i32.const 6420)
                                  )
                                )
                                (if
                                  (i32.and
                                    (tee_local $1
                                      (i32.load
                                        (i32.const 6380)
                                      )
                                    )
                                    (tee_local $0
                                      (i32.shl
                                        (i32.const 1)
                                        (get_local $0)
                                      )
                                    )
                                  )
                                  (if
                                    (i32.lt_u
                                      (tee_local $0
                                        (i32.load
                                          (tee_local $1
                                            (i32.add
                                              (get_local $3)
                                              (i32.const 8)
                                            )
                                          )
                                        )
                                      )
                                      (i32.load
                                        (i32.const 6396)
                                      )
                                    )
                                    (call $_abort)
                                    (block
                                      (set_local $16
                                        (get_local $1)
                                      )
                                      (set_local $8
                                        (get_local $0)
                                      )
                                    )
                                  )
                                  (block
                                    (i32.store
                                      (i32.const 6380)
                                      (i32.or
                                        (get_local $1)
                                        (get_local $0)
                                      )
                                    )
                                    (set_local $16
                                      (i32.add
                                        (get_local $3)
                                        (i32.const 8)
                                      )
                                    )
                                    (set_local $8
                                      (get_local $3)
                                    )
                                  )
                                )
                                (i32.store
                                  (get_local $16)
                                  (get_local $6)
                                )
                                (i32.store offset=12
                                  (get_local $8)
                                  (get_local $6)
                                )
                                (i32.store offset=8
                                  (get_local $6)
                                  (get_local $8)
                                )
                                (i32.store offset=12
                                  (get_local $6)
                                  (get_local $3)
                                )
                                (br $do-once25)
                              )
                            )
                            (set_local $1
                              (i32.add
                                (i32.shl
                                  (tee_local $5
                                    (if i32
                                      (tee_local $0
                                        (i32.shr_u
                                          (get_local $3)
                                          (i32.const 8)
                                        )
                                      )
                                      (if i32
                                        (i32.gt_u
                                          (get_local $3)
                                          (i32.const 16777215)
                                        )
                                        (i32.const 31)
                                        (i32.or
                                          (i32.and
                                            (i32.shr_u
                                              (get_local $3)
                                              (i32.add
                                                (tee_local $0
                                                  (i32.add
                                                    (i32.sub
                                                      (i32.const 14)
                                                      (i32.or
                                                        (i32.or
                                                          (tee_local $0
                                                            (i32.and
                                                              (i32.shr_u
                                                                (i32.add
                                                                  (tee_local $1
                                                                    (i32.shl
                                                                      (get_local $0)
                                                                      (tee_local $5
                                                                        (i32.and
                                                                          (i32.shr_u
                                                                            (i32.add
                                                                              (get_local $0)
                                                                              (i32.const 1048320)
                                                                            )
                                                                            (i32.const 16)
                                                                          )
                                                                          (i32.const 8)
                                                                        )
                                                                      )
                                                                    )
                                                                  )
                                                                  (i32.const 520192)
                                                                )
                                                                (i32.const 16)
                                                              )
                                                              (i32.const 4)
                                                            )
                                                          )
                                                          (get_local $5)
                                                        )
                                                        (tee_local $0
                                                          (i32.and
                                                            (i32.shr_u
                                                              (i32.add
                                                                (tee_local $1
                                                                  (i32.shl
                                                                    (get_local $1)
                                                                    (get_local $0)
                                                                  )
                                                                )
                                                                (i32.const 245760)
                                                              )
                                                              (i32.const 16)
                                                            )
                                                            (i32.const 2)
                                                          )
                                                        )
                                                      )
                                                    )
                                                    (i32.shr_u
                                                      (i32.shl
                                                        (get_local $1)
                                                        (get_local $0)
                                                      )
                                                      (i32.const 15)
                                                    )
                                                  )
                                                )
                                                (i32.const 7)
                                              )
                                            )
                                            (i32.const 1)
                                          )
                                          (i32.shl
                                            (get_local $0)
                                            (i32.const 1)
                                          )
                                        )
                                      )
                                      (i32.const 0)
                                    )
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 6684)
                              )
                            )
                            (i32.store offset=28
                              (get_local $6)
                              (get_local $5)
                            )
                            (i32.store offset=4
                              (tee_local $0
                                (i32.add
                                  (get_local $6)
                                  (i32.const 16)
                                )
                              )
                              (i32.const 0)
                            )
                            (i32.store
                              (get_local $0)
                              (i32.const 0)
                            )
                            (if
                              (i32.eqz
                                (i32.and
                                  (tee_local $0
                                    (i32.shl
                                      (i32.const 1)
                                      (get_local $5)
                                    )
                                  )
                                  (get_local $2)
                                )
                              )
                              (block
                                (i32.store
                                  (i32.const 6384)
                                  (i32.or
                                    (get_local $0)
                                    (get_local $2)
                                  )
                                )
                                (i32.store
                                  (get_local $1)
                                  (get_local $6)
                                )
                                (i32.store offset=24
                                  (get_local $6)
                                  (get_local $1)
                                )
                                (i32.store offset=12
                                  (get_local $6)
                                  (get_local $6)
                                )
                                (i32.store offset=8
                                  (get_local $6)
                                  (get_local $6)
                                )
                                (br $do-once25)
                              )
                            )
                            (set_local $0
                              (i32.load
                                (get_local $1)
                              )
                            )
                            (set_local $1
                              (i32.sub
                                (i32.const 25)
                                (i32.shr_u
                                  (get_local $5)
                                  (i32.const 1)
                                )
                              )
                            )
                            (set_local $5
                              (i32.shl
                                (get_local $3)
                                (if i32
                                  (i32.eq
                                    (get_local $5)
                                    (i32.const 31)
                                  )
                                  (i32.const 0)
                                  (get_local $1)
                                )
                              )
                            )
                            (block $__rjto$1
                              (block $__rjti$1
                                (block $__rjti$0
                                  (loop $while-in28
                                    (br_if $__rjti$1
                                      (i32.eq
                                        (i32.and
                                          (i32.load offset=4
                                            (get_local $0)
                                          )
                                          (i32.const -8)
                                        )
                                        (get_local $3)
                                      )
                                    )
                                    (set_local $2
                                      (i32.shl
                                        (get_local $5)
                                        (i32.const 1)
                                      )
                                    )
                                    (br_if $__rjti$0
                                      (i32.eqz
                                        (tee_local $1
                                          (i32.load
                                            (tee_local $5
                                              (i32.add
                                                (i32.add
                                                  (get_local $0)
                                                  (i32.const 16)
                                                )
                                                (i32.shl
                                                  (i32.shr_u
                                                    (get_local $5)
                                                    (i32.const 31)
                                                  )
                                                  (i32.const 2)
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                    (set_local $5
                                      (get_local $2)
                                    )
                                    (set_local $0
                                      (get_local $1)
                                    )
                                    (br $while-in28)
                                  )
                                )
                                (if
                                  (i32.lt_u
                                    (get_local $5)
                                    (i32.load
                                      (i32.const 6396)
                                    )
                                  )
                                  (call $_abort)
                                  (block
                                    (i32.store
                                      (get_local $5)
                                      (get_local $6)
                                    )
                                    (i32.store offset=24
                                      (get_local $6)
                                      (get_local $0)
                                    )
                                    (i32.store offset=12
                                      (get_local $6)
                                      (get_local $6)
                                    )
                                    (i32.store offset=8
                                      (get_local $6)
                                      (get_local $6)
                                    )
                                    (br $do-once25)
                                  )
                                )
                                (br $__rjto$1)
                              )
                              (if
                                (i32.and
                                  (i32.ge_u
                                    (tee_local $2
                                      (i32.load
                                        (tee_local $3
                                          (i32.add
                                            (get_local $0)
                                            (i32.const 8)
                                          )
                                        )
                                      )
                                    )
                                    (tee_local $1
                                      (i32.load
                                        (i32.const 6396)
                                      )
                                    )
                                  )
                                  (i32.ge_u
                                    (get_local $0)
                                    (get_local $1)
                                  )
                                )
                                (block
                                  (i32.store offset=12
                                    (get_local $2)
                                    (get_local $6)
                                  )
                                  (i32.store
                                    (get_local $3)
                                    (get_local $6)
                                  )
                                  (i32.store offset=8
                                    (get_local $6)
                                    (get_local $2)
                                  )
                                  (i32.store offset=12
                                    (get_local $6)
                                    (get_local $0)
                                  )
                                  (i32.store offset=24
                                    (get_local $6)
                                    (i32.const 0)
                                  )
                                )
                                (call $_abort)
                              )
                            )
                          )
                        )
                      )
                      (set_global $STACKTOP
                        (get_local $14)
                      )
                      (return
                        (i32.add
                          (get_local $4)
                          (i32.const 8)
                        )
                      )
                    )
                    (set_local $0
                      (get_local $7)
                    )
                  )
                  (set_local $0
                    (get_local $7)
                  )
                )
              )
              (set_local $0
                (get_local $7)
              )
            )
          )
        )
      )
    )
    (if
      (i32.ge_u
        (tee_local $1
          (i32.load
            (i32.const 6388)
          )
        )
        (get_local $0)
      )
      (block
        (set_local $2
          (i32.load
            (i32.const 6400)
          )
        )
        (if
          (i32.gt_u
            (tee_local $3
              (i32.sub
                (get_local $1)
                (get_local $0)
              )
            )
            (i32.const 15)
          )
          (block
            (i32.store
              (i32.const 6400)
              (tee_local $1
                (i32.add
                  (get_local $2)
                  (get_local $0)
                )
              )
            )
            (i32.store
              (i32.const 6388)
              (get_local $3)
            )
            (i32.store offset=4
              (get_local $1)
              (i32.or
                (get_local $3)
                (i32.const 1)
              )
            )
            (i32.store
              (i32.add
                (get_local $1)
                (get_local $3)
              )
              (get_local $3)
            )
            (i32.store offset=4
              (get_local $2)
              (i32.or
                (get_local $0)
                (i32.const 3)
              )
            )
          )
          (block
            (i32.store
              (i32.const 6388)
              (i32.const 0)
            )
            (i32.store
              (i32.const 6400)
              (i32.const 0)
            )
            (i32.store offset=4
              (get_local $2)
              (i32.or
                (get_local $1)
                (i32.const 3)
              )
            )
            (i32.store
              (tee_local $0
                (i32.add
                  (i32.add
                    (get_local $2)
                    (get_local $1)
                  )
                  (i32.const 4)
                )
              )
              (i32.or
                (i32.load
                  (get_local $0)
                )
                (i32.const 1)
              )
            )
          )
        )
        (set_global $STACKTOP
          (get_local $14)
        )
        (return
          (i32.add
            (get_local $2)
            (i32.const 8)
          )
        )
      )
    )
    (if
      (i32.gt_u
        (tee_local $10
          (i32.load
            (i32.const 6392)
          )
        )
        (get_local $0)
      )
      (block
        (i32.store
          (i32.const 6392)
          (tee_local $3
            (i32.sub
              (get_local $10)
              (get_local $0)
            )
          )
        )
        (i32.store
          (i32.const 6404)
          (tee_local $1
            (i32.add
              (tee_local $2
                (i32.load
                  (i32.const 6404)
                )
              )
              (get_local $0)
            )
          )
        )
        (i32.store offset=4
          (get_local $1)
          (i32.or
            (get_local $3)
            (i32.const 1)
          )
        )
        (i32.store offset=4
          (get_local $2)
          (i32.or
            (get_local $0)
            (i32.const 3)
          )
        )
        (set_global $STACKTOP
          (get_local $14)
        )
        (return
          (i32.add
            (get_local $2)
            (i32.const 8)
          )
        )
      )
    )
    (if
      (i32.le_u
        (tee_local $6
          (i32.and
            (tee_local $8
              (i32.add
                (tee_local $1
                  (if i32
                    (i32.load
                      (i32.const 6852)
                    )
                    (i32.load
                      (i32.const 6860)
                    )
                    (block i32
                      (i32.store
                        (i32.const 6860)
                        (i32.const 4096)
                      )
                      (i32.store
                        (i32.const 6856)
                        (i32.const 4096)
                      )
                      (i32.store
                        (i32.const 6864)
                        (i32.const -1)
                      )
                      (i32.store
                        (i32.const 6868)
                        (i32.const -1)
                      )
                      (i32.store
                        (i32.const 6872)
                        (i32.const 0)
                      )
                      (i32.store
                        (i32.const 6824)
                        (i32.const 0)
                      )
                      (i32.store
                        (get_local $18)
                        (tee_local $1
                          (i32.xor
                            (i32.and
                              (get_local $18)
                              (i32.const -16)
                            )
                            (i32.const 1431655768)
                          )
                        )
                      )
                      (i32.store
                        (i32.const 6852)
                        (get_local $1)
                      )
                      (i32.const 4096)
                    )
                  )
                )
                (tee_local $13
                  (i32.add
                    (get_local $0)
                    (i32.const 47)
                  )
                )
              )
            )
            (tee_local $4
              (i32.sub
                (i32.const 0)
                (get_local $1)
              )
            )
          )
        )
        (get_local $0)
      )
      (block
        (set_global $STACKTOP
          (get_local $14)
        )
        (return
          (i32.const 0)
        )
      )
    )
    (if
      (tee_local $2
        (i32.load
          (i32.const 6820)
        )
      )
      (if
        (i32.or
          (i32.le_u
            (tee_local $1
              (i32.add
                (tee_local $3
                  (i32.load
                    (i32.const 6812)
                  )
                )
                (get_local $6)
              )
            )
            (get_local $3)
          )
          (i32.gt_u
            (get_local $1)
            (get_local $2)
          )
        )
        (block
          (set_global $STACKTOP
            (get_local $14)
          )
          (return
            (i32.const 0)
          )
        )
      )
    )
    (set_local $7
      (i32.add
        (get_local $0)
        (i32.const 48)
      )
    )
    (block $__rjto$13
      (block $__rjti$13
        (if
          (i32.eqz
            (i32.and
              (i32.load
                (i32.const 6824)
              )
              (i32.const 4)
            )
          )
          (block
            (block $label$break$L274
              (block $__rjti$5
                (block $__rjti$4
                  (br_if $__rjti$4
                    (i32.eqz
                      (tee_local $3
                        (i32.load
                          (i32.const 6404)
                        )
                      )
                    )
                  )
                  (set_local $2
                    (i32.const 6828)
                  )
                  (loop $while-in32
                    (block $while-out31
                      (if
                        (i32.le_u
                          (tee_local $1
                            (i32.load
                              (get_local $2)
                            )
                          )
                          (get_local $3)
                        )
                        (br_if $while-out31
                          (i32.gt_u
                            (i32.add
                              (get_local $1)
                              (i32.load
                                (tee_local $5
                                  (i32.add
                                    (get_local $2)
                                    (i32.const 4)
                                  )
                                )
                              )
                            )
                            (get_local $3)
                          )
                        )
                      )
                      (br_if $__rjti$4
                        (i32.eqz
                          (tee_local $1
                            (i32.load offset=8
                              (get_local $2)
                            )
                          )
                        )
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (br $while-in32)
                    )
                  )
                  (if
                    (i32.lt_u
                      (tee_local $3
                        (i32.and
                          (i32.sub
                            (get_local $8)
                            (get_local $10)
                          )
                          (get_local $4)
                        )
                      )
                      (i32.const 2147483647)
                    )
                    (if
                      (i32.eq
                        (tee_local $1
                          (call $_sbrk
                            (get_local $3)
                          )
                        )
                        (i32.add
                          (i32.load
                            (get_local $2)
                          )
                          (i32.load
                            (get_local $5)
                          )
                        )
                      )
                      (br_if $__rjti$13
                        (i32.ne
                          (get_local $1)
                          (i32.const -1)
                        )
                      )
                      (block
                        (set_local $2
                          (get_local $1)
                        )
                        (set_local $1
                          (get_local $3)
                        )
                        (br $__rjti$5)
                      )
                    )
                  )
                  (br $label$break$L274)
                )
                (if
                  (i32.ne
                    (tee_local $1
                      (call $_sbrk
                        (i32.const 0)
                      )
                    )
                    (i32.const -1)
                  )
                  (block
                    (set_local $2
                      (i32.sub
                        (i32.and
                          (i32.add
                            (tee_local $5
                              (i32.add
                                (tee_local $2
                                  (i32.load
                                    (i32.const 6856)
                                  )
                                )
                                (i32.const -1)
                              )
                            )
                            (tee_local $3
                              (get_local $1)
                            )
                          )
                          (i32.sub
                            (i32.const 0)
                            (get_local $2)
                          )
                        )
                        (get_local $3)
                      )
                    )
                    (set_local $4
                      (i32.add
                        (tee_local $3
                          (i32.add
                            (if i32
                              (i32.and
                                (get_local $5)
                                (get_local $3)
                              )
                              (get_local $2)
                              (i32.const 0)
                            )
                            (get_local $6)
                          )
                        )
                        (tee_local $5
                          (i32.load
                            (i32.const 6812)
                          )
                        )
                      )
                    )
                    (if
                      (i32.and
                        (i32.gt_u
                          (get_local $3)
                          (get_local $0)
                        )
                        (i32.lt_u
                          (get_local $3)
                          (i32.const 2147483647)
                        )
                      )
                      (block
                        (if
                          (tee_local $2
                            (i32.load
                              (i32.const 6820)
                            )
                          )
                          (br_if $label$break$L274
                            (i32.or
                              (i32.le_u
                                (get_local $4)
                                (get_local $5)
                              )
                              (i32.gt_u
                                (get_local $4)
                                (get_local $2)
                              )
                            )
                          )
                        )
                        (br_if $__rjti$13
                          (i32.eq
                            (tee_local $2
                              (call $_sbrk
                                (get_local $3)
                              )
                            )
                            (get_local $1)
                          )
                        )
                        (set_local $1
                          (get_local $3)
                        )
                        (br $__rjti$5)
                      )
                    )
                  )
                )
                (br $label$break$L274)
              )
              (set_local $5
                (i32.sub
                  (i32.const 0)
                  (get_local $1)
                )
              )
              (if
                (i32.and
                  (i32.gt_u
                    (get_local $7)
                    (get_local $1)
                  )
                  (i32.and
                    (i32.lt_u
                      (get_local $1)
                      (i32.const 2147483647)
                    )
                    (i32.ne
                      (get_local $2)
                      (i32.const -1)
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (tee_local $3
                      (i32.and
                        (i32.add
                          (i32.sub
                            (get_local $13)
                            (get_local $1)
                          )
                          (tee_local $3
                            (i32.load
                              (i32.const 6860)
                            )
                          )
                        )
                        (i32.sub
                          (i32.const 0)
                          (get_local $3)
                        )
                      )
                    )
                    (i32.const 2147483647)
                  )
                  (if
                    (i32.eq
                      (call $_sbrk
                        (get_local $3)
                      )
                      (i32.const -1)
                    )
                    (block
                      (drop
                        (call $_sbrk
                          (get_local $5)
                        )
                      )
                      (br $label$break$L274)
                    )
                    (set_local $3
                      (i32.add
                        (get_local $3)
                        (get_local $1)
                      )
                    )
                  )
                  (set_local $3
                    (get_local $1)
                  )
                )
                (set_local $3
                  (get_local $1)
                )
              )
              (if
                (i32.ne
                  (get_local $2)
                  (i32.const -1)
                )
                (block
                  (set_local $1
                    (get_local $2)
                  )
                  (br $__rjti$13)
                )
              )
            )
            (i32.store
              (i32.const 6824)
              (i32.or
                (i32.load
                  (i32.const 6824)
                )
                (i32.const 4)
              )
            )
          )
        )
        (if
          (i32.lt_u
            (get_local $6)
            (i32.const 2147483647)
          )
          (if
            (i32.and
              (i32.lt_u
                (tee_local $1
                  (call $_sbrk
                    (get_local $6)
                  )
                )
                (tee_local $3
                  (call $_sbrk
                    (i32.const 0)
                  )
                )
              )
              (i32.and
                (i32.ne
                  (get_local $1)
                  (i32.const -1)
                )
                (i32.ne
                  (get_local $3)
                  (i32.const -1)
                )
              )
            )
            (br_if $__rjti$13
              (i32.gt_u
                (tee_local $3
                  (i32.sub
                    (get_local $3)
                    (get_local $1)
                  )
                )
                (i32.add
                  (get_local $0)
                  (i32.const 40)
                )
              )
            )
          )
        )
        (br $__rjto$13)
      )
      (i32.store
        (i32.const 6812)
        (tee_local $2
          (i32.add
            (i32.load
              (i32.const 6812)
            )
            (get_local $3)
          )
        )
      )
      (if
        (i32.gt_u
          (get_local $2)
          (i32.load
            (i32.const 6816)
          )
        )
        (i32.store
          (i32.const 6816)
          (get_local $2)
        )
      )
      (block $do-once38
        (if
          (tee_local $8
            (i32.load
              (i32.const 6404)
            )
          )
          (block
            (set_local $2
              (i32.const 6828)
            )
            (block $__rjto$10
              (block $__rjti$10
                (loop $while-in43
                  (br_if $__rjti$10
                    (i32.eq
                      (get_local $1)
                      (i32.add
                        (tee_local $4
                          (i32.load
                            (get_local $2)
                          )
                        )
                        (tee_local $5
                          (i32.load
                            (tee_local $7
                              (i32.add
                                (get_local $2)
                                (i32.const 4)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                  (br_if $while-in43
                    (tee_local $2
                      (i32.load offset=8
                        (get_local $2)
                      )
                    )
                  )
                )
                (br $__rjto$10)
              )
              (if
                (i32.eqz
                  (i32.and
                    (i32.load offset=12
                      (get_local $2)
                    )
                    (i32.const 8)
                  )
                )
                (if
                  (i32.and
                    (i32.lt_u
                      (get_local $8)
                      (get_local $1)
                    )
                    (i32.ge_u
                      (get_local $8)
                      (get_local $4)
                    )
                  )
                  (block
                    (i32.store
                      (get_local $7)
                      (i32.add
                        (get_local $5)
                        (get_local $3)
                      )
                    )
                    (set_local $5
                      (i32.load
                        (i32.const 6392)
                      )
                    )
                    (set_local $1
                      (i32.and
                        (i32.sub
                          (i32.const 0)
                          (tee_local $2
                            (i32.add
                              (get_local $8)
                              (i32.const 8)
                            )
                          )
                        )
                        (i32.const 7)
                      )
                    )
                    (i32.store
                      (i32.const 6404)
                      (tee_local $2
                        (i32.add
                          (get_local $8)
                          (if i32
                            (i32.and
                              (get_local $2)
                              (i32.const 7)
                            )
                            (get_local $1)
                            (tee_local $1
                              (i32.const 0)
                            )
                          )
                        )
                      )
                    )
                    (i32.store
                      (i32.const 6392)
                      (tee_local $1
                        (i32.add
                          (get_local $5)
                          (i32.sub
                            (get_local $3)
                            (get_local $1)
                          )
                        )
                      )
                    )
                    (i32.store offset=4
                      (get_local $2)
                      (i32.or
                        (get_local $1)
                        (i32.const 1)
                      )
                    )
                    (i32.store offset=4
                      (i32.add
                        (get_local $2)
                        (get_local $1)
                      )
                      (i32.const 40)
                    )
                    (i32.store
                      (i32.const 6408)
                      (i32.load
                        (i32.const 6868)
                      )
                    )
                    (br $do-once38)
                  )
                )
              )
            )
            (if
              (i32.lt_u
                (get_local $1)
                (tee_local $2
                  (i32.load
                    (i32.const 6396)
                  )
                )
              )
              (block
                (i32.store
                  (i32.const 6396)
                  (get_local $1)
                )
                (set_local $2
                  (get_local $1)
                )
              )
            )
            (set_local $10
              (i32.add
                (get_local $1)
                (get_local $3)
              )
            )
            (set_local $5
              (i32.const 6828)
            )
            (block $__rjto$11
              (block $__rjti$11
                (loop $while-in45
                  (br_if $__rjti$11
                    (i32.eq
                      (i32.load
                        (get_local $5)
                      )
                      (get_local $10)
                    )
                  )
                  (br_if $while-in45
                    (tee_local $5
                      (i32.load offset=8
                        (get_local $5)
                      )
                    )
                  )
                  (set_local $5
                    (i32.const 6828)
                  )
                )
                (br $__rjto$11)
              )
              (if
                (i32.and
                  (i32.load offset=12
                    (get_local $5)
                  )
                  (i32.const 8)
                )
                (set_local $5
                  (i32.const 6828)
                )
                (block
                  (i32.store
                    (get_local $5)
                    (get_local $1)
                  )
                  (i32.store
                    (tee_local $5
                      (i32.add
                        (get_local $5)
                        (i32.const 4)
                      )
                    )
                    (i32.add
                      (i32.load
                        (get_local $5)
                      )
                      (get_local $3)
                    )
                  )
                  (set_local $7
                    (i32.and
                      (i32.sub
                        (i32.const 0)
                        (tee_local $4
                          (i32.add
                            (get_local $1)
                            (i32.const 8)
                          )
                        )
                      )
                      (i32.const 7)
                    )
                  )
                  (set_local $3
                    (i32.and
                      (i32.sub
                        (i32.const 0)
                        (tee_local $5
                          (i32.add
                            (get_local $10)
                            (i32.const 8)
                          )
                        )
                      )
                      (i32.const 7)
                    )
                  )
                  (set_local $6
                    (i32.add
                      (tee_local $13
                        (i32.add
                          (get_local $1)
                          (if i32
                            (i32.and
                              (get_local $4)
                              (i32.const 7)
                            )
                            (get_local $7)
                            (i32.const 0)
                          )
                        )
                      )
                      (get_local $0)
                    )
                  )
                  (set_local $7
                    (i32.sub
                      (i32.sub
                        (tee_local $4
                          (i32.add
                            (get_local $10)
                            (if i32
                              (i32.and
                                (get_local $5)
                                (i32.const 7)
                              )
                              (get_local $3)
                              (i32.const 0)
                            )
                          )
                        )
                        (get_local $13)
                      )
                      (get_local $0)
                    )
                  )
                  (i32.store offset=4
                    (get_local $13)
                    (i32.or
                      (get_local $0)
                      (i32.const 3)
                    )
                  )
                  (block $do-once46
                    (if
                      (i32.eq
                        (get_local $4)
                        (get_local $8)
                      )
                      (block
                        (i32.store
                          (i32.const 6392)
                          (tee_local $0
                            (i32.add
                              (i32.load
                                (i32.const 6392)
                              )
                              (get_local $7)
                            )
                          )
                        )
                        (i32.store
                          (i32.const 6404)
                          (get_local $6)
                        )
                        (i32.store offset=4
                          (get_local $6)
                          (i32.or
                            (get_local $0)
                            (i32.const 1)
                          )
                        )
                      )
                      (block
                        (if
                          (i32.eq
                            (get_local $4)
                            (i32.load
                              (i32.const 6400)
                            )
                          )
                          (block
                            (i32.store
                              (i32.const 6388)
                              (tee_local $0
                                (i32.add
                                  (i32.load
                                    (i32.const 6388)
                                  )
                                  (get_local $7)
                                )
                              )
                            )
                            (i32.store
                              (i32.const 6400)
                              (get_local $6)
                            )
                            (i32.store offset=4
                              (get_local $6)
                              (i32.or
                                (get_local $0)
                                (i32.const 1)
                              )
                            )
                            (i32.store
                              (i32.add
                                (get_local $6)
                                (get_local $0)
                              )
                              (get_local $0)
                            )
                            (br $do-once46)
                          )
                        )
                        (i32.store
                          (tee_local $0
                            (i32.add
                              (tee_local $0
                                (if i32
                                  (i32.eq
                                    (i32.and
                                      (tee_local $0
                                        (i32.load offset=4
                                          (get_local $4)
                                        )
                                      )
                                      (i32.const 3)
                                    )
                                    (i32.const 1)
                                  )
                                  (block i32
                                    (set_local $11
                                      (i32.and
                                        (get_local $0)
                                        (i32.const -8)
                                      )
                                    )
                                    (set_local $1
                                      (i32.shr_u
                                        (get_local $0)
                                        (i32.const 3)
                                      )
                                    )
                                    (block $label$break$L326
                                      (if
                                        (i32.lt_u
                                          (get_local $0)
                                          (i32.const 256)
                                        )
                                        (block
                                          (set_local $5
                                            (i32.load offset=12
                                              (get_local $4)
                                            )
                                          )
                                          (block $do-once49
                                            (if
                                              (i32.ne
                                                (tee_local $3
                                                  (i32.load offset=8
                                                    (get_local $4)
                                                  )
                                                )
                                                (tee_local $0
                                                  (i32.add
                                                    (i32.shl
                                                      (i32.shl
                                                        (get_local $1)
                                                        (i32.const 1)
                                                      )
                                                      (i32.const 2)
                                                    )
                                                    (i32.const 6420)
                                                  )
                                                )
                                              )
                                              (block
                                                (if
                                                  (i32.lt_u
                                                    (get_local $3)
                                                    (get_local $2)
                                                  )
                                                  (call $_abort)
                                                )
                                                (br_if $do-once49
                                                  (i32.eq
                                                    (i32.load offset=12
                                                      (get_local $3)
                                                    )
                                                    (get_local $4)
                                                  )
                                                )
                                                (call $_abort)
                                              )
                                            )
                                          )
                                          (if
                                            (i32.eq
                                              (get_local $5)
                                              (get_local $3)
                                            )
                                            (block
                                              (i32.store
                                                (i32.const 6380)
                                                (i32.and
                                                  (i32.load
                                                    (i32.const 6380)
                                                  )
                                                  (i32.xor
                                                    (i32.shl
                                                      (i32.const 1)
                                                      (get_local $1)
                                                    )
                                                    (i32.const -1)
                                                  )
                                                )
                                              )
                                              (br $label$break$L326)
                                            )
                                          )
                                          (block $do-once51
                                            (if
                                              (i32.eq
                                                (get_local $5)
                                                (get_local $0)
                                              )
                                              (set_local $20
                                                (i32.add
                                                  (get_local $5)
                                                  (i32.const 8)
                                                )
                                              )
                                              (block
                                                (if
                                                  (i32.lt_u
                                                    (get_local $5)
                                                    (get_local $2)
                                                  )
                                                  (call $_abort)
                                                )
                                                (if
                                                  (i32.eq
                                                    (i32.load
                                                      (tee_local $0
                                                        (i32.add
                                                          (get_local $5)
                                                          (i32.const 8)
                                                        )
                                                      )
                                                    )
                                                    (get_local $4)
                                                  )
                                                  (block
                                                    (set_local $20
                                                      (get_local $0)
                                                    )
                                                    (br $do-once51)
                                                  )
                                                )
                                                (call $_abort)
                                              )
                                            )
                                          )
                                          (i32.store offset=12
                                            (get_local $3)
                                            (get_local $5)
                                          )
                                          (i32.store
                                            (get_local $20)
                                            (get_local $3)
                                          )
                                        )
                                        (block
                                          (set_local $8
                                            (i32.load offset=24
                                              (get_local $4)
                                            )
                                          )
                                          (block $do-once53
                                            (if
                                              (i32.eq
                                                (tee_local $0
                                                  (i32.load offset=12
                                                    (get_local $4)
                                                  )
                                                )
                                                (get_local $4)
                                              )
                                              (block
                                                (if
                                                  (i32.eqz
                                                    (tee_local $0
                                                      (i32.load
                                                        (tee_local $1
                                                          (i32.add
                                                            (tee_local $3
                                                              (i32.add
                                                                (get_local $4)
                                                                (i32.const 16)
                                                              )
                                                            )
                                                            (i32.const 4)
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                  (if
                                                    (tee_local $0
                                                      (i32.load
                                                        (get_local $3)
                                                      )
                                                    )
                                                    (set_local $1
                                                      (get_local $3)
                                                    )
                                                    (block
                                                      (set_local $12
                                                        (i32.const 0)
                                                      )
                                                      (br $do-once53)
                                                    )
                                                  )
                                                )
                                                (loop $while-in56
                                                  (if
                                                    (tee_local $3
                                                      (i32.load
                                                        (tee_local $5
                                                          (i32.add
                                                            (get_local $0)
                                                            (i32.const 20)
                                                          )
                                                        )
                                                      )
                                                    )
                                                    (block
                                                      (set_local $0
                                                        (get_local $3)
                                                      )
                                                      (set_local $1
                                                        (get_local $5)
                                                      )
                                                      (br $while-in56)
                                                    )
                                                  )
                                                  (if
                                                    (tee_local $3
                                                      (i32.load
                                                        (tee_local $5
                                                          (i32.add
                                                            (get_local $0)
                                                            (i32.const 16)
                                                          )
                                                        )
                                                      )
                                                    )
                                                    (block
                                                      (set_local $0
                                                        (get_local $3)
                                                      )
                                                      (set_local $1
                                                        (get_local $5)
                                                      )
                                                      (br $while-in56)
                                                    )
                                                  )
                                                )
                                                (if
                                                  (i32.lt_u
                                                    (get_local $1)
                                                    (get_local $2)
                                                  )
                                                  (call $_abort)
                                                  (block
                                                    (i32.store
                                                      (get_local $1)
                                                      (i32.const 0)
                                                    )
                                                    (set_local $12
                                                      (get_local $0)
                                                    )
                                                  )
                                                )
                                              )
                                              (block
                                                (if
                                                  (i32.lt_u
                                                    (tee_local $5
                                                      (i32.load offset=8
                                                        (get_local $4)
                                                      )
                                                    )
                                                    (get_local $2)
                                                  )
                                                  (call $_abort)
                                                )
                                                (if
                                                  (i32.ne
                                                    (i32.load
                                                      (tee_local $3
                                                        (i32.add
                                                          (get_local $5)
                                                          (i32.const 12)
                                                        )
                                                      )
                                                    )
                                                    (get_local $4)
                                                  )
                                                  (call $_abort)
                                                )
                                                (if
                                                  (i32.eq
                                                    (i32.load
                                                      (tee_local $1
                                                        (i32.add
                                                          (get_local $0)
                                                          (i32.const 8)
                                                        )
                                                      )
                                                    )
                                                    (get_local $4)
                                                  )
                                                  (block
                                                    (i32.store
                                                      (get_local $3)
                                                      (get_local $0)
                                                    )
                                                    (i32.store
                                                      (get_local $1)
                                                      (get_local $5)
                                                    )
                                                    (set_local $12
                                                      (get_local $0)
                                                    )
                                                  )
                                                  (call $_abort)
                                                )
                                              )
                                            )
                                          )
                                          (br_if $label$break$L326
                                            (i32.eqz
                                              (get_local $8)
                                            )
                                          )
                                          (block $do-once57
                                            (if
                                              (i32.eq
                                                (get_local $4)
                                                (i32.load
                                                  (tee_local $0
                                                    (i32.add
                                                      (i32.shl
                                                        (tee_local $1
                                                          (i32.load offset=28
                                                            (get_local $4)
                                                          )
                                                        )
                                                        (i32.const 2)
                                                      )
                                                      (i32.const 6684)
                                                    )
                                                  )
                                                )
                                              )
                                              (block
                                                (i32.store
                                                  (get_local $0)
                                                  (get_local $12)
                                                )
                                                (br_if $do-once57
                                                  (get_local $12)
                                                )
                                                (i32.store
                                                  (i32.const 6384)
                                                  (i32.and
                                                    (i32.load
                                                      (i32.const 6384)
                                                    )
                                                    (i32.xor
                                                      (i32.shl
                                                        (i32.const 1)
                                                        (get_local $1)
                                                      )
                                                      (i32.const -1)
                                                    )
                                                  )
                                                )
                                                (br $label$break$L326)
                                              )
                                              (block
                                                (if
                                                  (i32.lt_u
                                                    (get_local $8)
                                                    (i32.load
                                                      (i32.const 6396)
                                                    )
                                                  )
                                                  (call $_abort)
                                                )
                                                (if
                                                  (i32.eq
                                                    (i32.load
                                                      (tee_local $0
                                                        (i32.add
                                                          (get_local $8)
                                                          (i32.const 16)
                                                        )
                                                      )
                                                    )
                                                    (get_local $4)
                                                  )
                                                  (i32.store
                                                    (get_local $0)
                                                    (get_local $12)
                                                  )
                                                  (i32.store offset=20
                                                    (get_local $8)
                                                    (get_local $12)
                                                  )
                                                )
                                                (br_if $label$break$L326
                                                  (i32.eqz
                                                    (get_local $12)
                                                  )
                                                )
                                              )
                                            )
                                          )
                                          (if
                                            (i32.lt_u
                                              (get_local $12)
                                              (tee_local $1
                                                (i32.load
                                                  (i32.const 6396)
                                                )
                                              )
                                            )
                                            (call $_abort)
                                          )
                                          (i32.store offset=24
                                            (get_local $12)
                                            (get_local $8)
                                          )
                                          (if
                                            (tee_local $3
                                              (i32.load
                                                (tee_local $0
                                                  (i32.add
                                                    (get_local $4)
                                                    (i32.const 16)
                                                  )
                                                )
                                              )
                                            )
                                            (if
                                              (i32.lt_u
                                                (get_local $3)
                                                (get_local $1)
                                              )
                                              (call $_abort)
                                              (block
                                                (i32.store offset=16
                                                  (get_local $12)
                                                  (get_local $3)
                                                )
                                                (i32.store offset=24
                                                  (get_local $3)
                                                  (get_local $12)
                                                )
                                              )
                                            )
                                          )
                                          (br_if $label$break$L326
                                            (i32.eqz
                                              (tee_local $0
                                                (i32.load offset=4
                                                  (get_local $0)
                                                )
                                              )
                                            )
                                          )
                                          (if
                                            (i32.lt_u
                                              (get_local $0)
                                              (i32.load
                                                (i32.const 6396)
                                              )
                                            )
                                            (call $_abort)
                                            (block
                                              (i32.store offset=20
                                                (get_local $12)
                                                (get_local $0)
                                              )
                                              (i32.store offset=24
                                                (get_local $0)
                                                (get_local $12)
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                    (set_local $7
                                      (i32.add
                                        (get_local $11)
                                        (get_local $7)
                                      )
                                    )
                                    (i32.add
                                      (get_local $4)
                                      (get_local $11)
                                    )
                                  )
                                  (get_local $4)
                                )
                              )
                              (i32.const 4)
                            )
                          )
                          (i32.and
                            (i32.load
                              (get_local $0)
                            )
                            (i32.const -2)
                          )
                        )
                        (i32.store offset=4
                          (get_local $6)
                          (i32.or
                            (get_local $7)
                            (i32.const 1)
                          )
                        )
                        (i32.store
                          (i32.add
                            (get_local $6)
                            (get_local $7)
                          )
                          (get_local $7)
                        )
                        (set_local $0
                          (i32.shr_u
                            (get_local $7)
                            (i32.const 3)
                          )
                        )
                        (if
                          (i32.lt_u
                            (get_local $7)
                            (i32.const 256)
                          )
                          (block
                            (set_local $3
                              (i32.add
                                (i32.shl
                                  (i32.shl
                                    (get_local $0)
                                    (i32.const 1)
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 6420)
                              )
                            )
                            (block $do-once61
                              (if
                                (i32.and
                                  (tee_local $1
                                    (i32.load
                                      (i32.const 6380)
                                    )
                                  )
                                  (tee_local $0
                                    (i32.shl
                                      (i32.const 1)
                                      (get_local $0)
                                    )
                                  )
                                )
                                (block
                                  (if
                                    (i32.ge_u
                                      (tee_local $0
                                        (i32.load
                                          (tee_local $1
                                            (i32.add
                                              (get_local $3)
                                              (i32.const 8)
                                            )
                                          )
                                        )
                                      )
                                      (i32.load
                                        (i32.const 6396)
                                      )
                                    )
                                    (block
                                      (set_local $21
                                        (get_local $1)
                                      )
                                      (set_local $9
                                        (get_local $0)
                                      )
                                      (br $do-once61)
                                    )
                                  )
                                  (call $_abort)
                                )
                                (block
                                  (i32.store
                                    (i32.const 6380)
                                    (i32.or
                                      (get_local $1)
                                      (get_local $0)
                                    )
                                  )
                                  (set_local $21
                                    (i32.add
                                      (get_local $3)
                                      (i32.const 8)
                                    )
                                  )
                                  (set_local $9
                                    (get_local $3)
                                  )
                                )
                              )
                            )
                            (i32.store
                              (get_local $21)
                              (get_local $6)
                            )
                            (i32.store offset=12
                              (get_local $9)
                              (get_local $6)
                            )
                            (i32.store offset=8
                              (get_local $6)
                              (get_local $9)
                            )
                            (i32.store offset=12
                              (get_local $6)
                              (get_local $3)
                            )
                            (br $do-once46)
                          )
                        )
                        (set_local $3
                          (i32.add
                            (i32.shl
                              (tee_local $2
                                (block $do-once63 i32
                                  (if i32
                                    (tee_local $0
                                      (i32.shr_u
                                        (get_local $7)
                                        (i32.const 8)
                                      )
                                    )
                                    (block i32
                                      (drop
                                        (br_if $do-once63
                                          (i32.const 31)
                                          (i32.gt_u
                                            (get_local $7)
                                            (i32.const 16777215)
                                          )
                                        )
                                      )
                                      (i32.or
                                        (i32.and
                                          (i32.shr_u
                                            (get_local $7)
                                            (i32.add
                                              (tee_local $0
                                                (i32.add
                                                  (i32.sub
                                                    (i32.const 14)
                                                    (i32.or
                                                      (i32.or
                                                        (tee_local $0
                                                          (i32.and
                                                            (i32.shr_u
                                                              (i32.add
                                                                (tee_local $1
                                                                  (i32.shl
                                                                    (get_local $0)
                                                                    (tee_local $3
                                                                      (i32.and
                                                                        (i32.shr_u
                                                                          (i32.add
                                                                            (get_local $0)
                                                                            (i32.const 1048320)
                                                                          )
                                                                          (i32.const 16)
                                                                        )
                                                                        (i32.const 8)
                                                                      )
                                                                    )
                                                                  )
                                                                )
                                                                (i32.const 520192)
                                                              )
                                                              (i32.const 16)
                                                            )
                                                            (i32.const 4)
                                                          )
                                                        )
                                                        (get_local $3)
                                                      )
                                                      (tee_local $0
                                                        (i32.and
                                                          (i32.shr_u
                                                            (i32.add
                                                              (tee_local $1
                                                                (i32.shl
                                                                  (get_local $1)
                                                                  (get_local $0)
                                                                )
                                                              )
                                                              (i32.const 245760)
                                                            )
                                                            (i32.const 16)
                                                          )
                                                          (i32.const 2)
                                                        )
                                                      )
                                                    )
                                                  )
                                                  (i32.shr_u
                                                    (i32.shl
                                                      (get_local $1)
                                                      (get_local $0)
                                                    )
                                                    (i32.const 15)
                                                  )
                                                )
                                              )
                                              (i32.const 7)
                                            )
                                          )
                                          (i32.const 1)
                                        )
                                        (i32.shl
                                          (get_local $0)
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                    (i32.const 0)
                                  )
                                )
                              )
                              (i32.const 2)
                            )
                            (i32.const 6684)
                          )
                        )
                        (i32.store offset=28
                          (get_local $6)
                          (get_local $2)
                        )
                        (i32.store offset=4
                          (tee_local $0
                            (i32.add
                              (get_local $6)
                              (i32.const 16)
                            )
                          )
                          (i32.const 0)
                        )
                        (i32.store
                          (get_local $0)
                          (i32.const 0)
                        )
                        (if
                          (i32.eqz
                            (i32.and
                              (tee_local $1
                                (i32.load
                                  (i32.const 6384)
                                )
                              )
                              (tee_local $0
                                (i32.shl
                                  (i32.const 1)
                                  (get_local $2)
                                )
                              )
                            )
                          )
                          (block
                            (i32.store
                              (i32.const 6384)
                              (i32.or
                                (get_local $1)
                                (get_local $0)
                              )
                            )
                            (i32.store
                              (get_local $3)
                              (get_local $6)
                            )
                            (i32.store offset=24
                              (get_local $6)
                              (get_local $3)
                            )
                            (i32.store offset=12
                              (get_local $6)
                              (get_local $6)
                            )
                            (i32.store offset=8
                              (get_local $6)
                              (get_local $6)
                            )
                            (br $do-once46)
                          )
                        )
                        (set_local $0
                          (i32.load
                            (get_local $3)
                          )
                        )
                        (set_local $1
                          (i32.sub
                            (i32.const 25)
                            (i32.shr_u
                              (get_local $2)
                              (i32.const 1)
                            )
                          )
                        )
                        (set_local $2
                          (i32.shl
                            (get_local $7)
                            (if i32
                              (i32.eq
                                (get_local $2)
                                (i32.const 31)
                              )
                              (i32.const 0)
                              (get_local $1)
                            )
                          )
                        )
                        (block $__rjto$7
                          (block $__rjti$7
                            (block $__rjti$6
                              (loop $while-in66
                                (br_if $__rjti$7
                                  (i32.eq
                                    (i32.and
                                      (i32.load offset=4
                                        (get_local $0)
                                      )
                                      (i32.const -8)
                                    )
                                    (get_local $7)
                                  )
                                )
                                (set_local $3
                                  (i32.shl
                                    (get_local $2)
                                    (i32.const 1)
                                  )
                                )
                                (br_if $__rjti$6
                                  (i32.eqz
                                    (tee_local $1
                                      (i32.load
                                        (tee_local $2
                                          (i32.add
                                            (i32.add
                                              (get_local $0)
                                              (i32.const 16)
                                            )
                                            (i32.shl
                                              (i32.shr_u
                                                (get_local $2)
                                                (i32.const 31)
                                              )
                                              (i32.const 2)
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                                (set_local $2
                                  (get_local $3)
                                )
                                (set_local $0
                                  (get_local $1)
                                )
                                (br $while-in66)
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $2)
                                (i32.load
                                  (i32.const 6396)
                                )
                              )
                              (call $_abort)
                              (block
                                (i32.store
                                  (get_local $2)
                                  (get_local $6)
                                )
                                (i32.store offset=24
                                  (get_local $6)
                                  (get_local $0)
                                )
                                (i32.store offset=12
                                  (get_local $6)
                                  (get_local $6)
                                )
                                (i32.store offset=8
                                  (get_local $6)
                                  (get_local $6)
                                )
                                (br $do-once46)
                              )
                            )
                            (br $__rjto$7)
                          )
                          (if
                            (i32.and
                              (i32.ge_u
                                (tee_local $2
                                  (i32.load
                                    (tee_local $3
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 8)
                                      )
                                    )
                                  )
                                )
                                (tee_local $1
                                  (i32.load
                                    (i32.const 6396)
                                  )
                                )
                              )
                              (i32.ge_u
                                (get_local $0)
                                (get_local $1)
                              )
                            )
                            (block
                              (i32.store offset=12
                                (get_local $2)
                                (get_local $6)
                              )
                              (i32.store
                                (get_local $3)
                                (get_local $6)
                              )
                              (i32.store offset=8
                                (get_local $6)
                                (get_local $2)
                              )
                              (i32.store offset=12
                                (get_local $6)
                                (get_local $0)
                              )
                              (i32.store offset=24
                                (get_local $6)
                                (i32.const 0)
                              )
                            )
                            (call $_abort)
                          )
                        )
                      )
                    )
                  )
                  (set_global $STACKTOP
                    (get_local $14)
                  )
                  (return
                    (i32.add
                      (get_local $13)
                      (i32.const 8)
                    )
                  )
                )
              )
            )
            (loop $while-in68
              (block $while-out67
                (if
                  (i32.le_u
                    (tee_local $2
                      (i32.load
                        (get_local $5)
                      )
                    )
                    (get_local $8)
                  )
                  (br_if $while-out67
                    (i32.gt_u
                      (tee_local $13
                        (i32.add
                          (get_local $2)
                          (i32.load offset=4
                            (get_local $5)
                          )
                        )
                      )
                      (get_local $8)
                    )
                  )
                )
                (set_local $5
                  (i32.load offset=8
                    (get_local $5)
                  )
                )
                (br $while-in68)
              )
            )
            (set_local $2
              (i32.and
                (i32.sub
                  (i32.const 0)
                  (tee_local $5
                    (i32.add
                      (tee_local $7
                        (i32.add
                          (get_local $13)
                          (i32.const -47)
                        )
                      )
                      (i32.const 8)
                    )
                  )
                )
                (i32.const 7)
              )
            )
            (set_local $10
              (i32.add
                (tee_local $7
                  (if i32
                    (i32.lt_u
                      (tee_local $2
                        (i32.add
                          (get_local $7)
                          (if i32
                            (i32.and
                              (get_local $5)
                              (i32.const 7)
                            )
                            (get_local $2)
                            (i32.const 0)
                          )
                        )
                      )
                      (tee_local $12
                        (i32.add
                          (get_local $8)
                          (i32.const 16)
                        )
                      )
                    )
                    (get_local $8)
                    (get_local $2)
                  )
                )
                (i32.const 8)
              )
            )
            (set_local $5
              (i32.add
                (get_local $7)
                (i32.const 24)
              )
            )
            (set_local $9
              (i32.add
                (get_local $3)
                (i32.const -40)
              )
            )
            (set_local $2
              (i32.and
                (i32.sub
                  (i32.const 0)
                  (tee_local $4
                    (i32.add
                      (get_local $1)
                      (i32.const 8)
                    )
                  )
                )
                (i32.const 7)
              )
            )
            (i32.store
              (i32.const 6404)
              (tee_local $4
                (i32.add
                  (get_local $1)
                  (if i32
                    (i32.and
                      (get_local $4)
                      (i32.const 7)
                    )
                    (get_local $2)
                    (tee_local $2
                      (i32.const 0)
                    )
                  )
                )
              )
            )
            (i32.store
              (i32.const 6392)
              (tee_local $2
                (i32.sub
                  (get_local $9)
                  (get_local $2)
                )
              )
            )
            (i32.store offset=4
              (get_local $4)
              (i32.or
                (get_local $2)
                (i32.const 1)
              )
            )
            (i32.store offset=4
              (i32.add
                (get_local $4)
                (get_local $2)
              )
              (i32.const 40)
            )
            (i32.store
              (i32.const 6408)
              (i32.load
                (i32.const 6868)
              )
            )
            (i32.store
              (tee_local $2
                (i32.add
                  (get_local $7)
                  (i32.const 4)
                )
              )
              (i32.const 27)
            )
            (i64.store align=4
              (get_local $10)
              (i64.load align=4
                (i32.const 6828)
              )
            )
            (i64.store offset=8 align=4
              (get_local $10)
              (i64.load align=4
                (i32.const 6836)
              )
            )
            (i32.store
              (i32.const 6828)
              (get_local $1)
            )
            (i32.store
              (i32.const 6832)
              (get_local $3)
            )
            (i32.store
              (i32.const 6840)
              (i32.const 0)
            )
            (i32.store
              (i32.const 6836)
              (get_local $10)
            )
            (set_local $1
              (get_local $5)
            )
            (loop $while-in70
              (i32.store
                (tee_local $1
                  (i32.add
                    (get_local $1)
                    (i32.const 4)
                  )
                )
                (i32.const 7)
              )
              (br_if $while-in70
                (i32.lt_u
                  (i32.add
                    (get_local $1)
                    (i32.const 4)
                  )
                  (get_local $13)
                )
              )
            )
            (if
              (i32.ne
                (get_local $7)
                (get_local $8)
              )
              (block
                (i32.store
                  (get_local $2)
                  (i32.and
                    (i32.load
                      (get_local $2)
                    )
                    (i32.const -2)
                  )
                )
                (i32.store offset=4
                  (get_local $8)
                  (i32.or
                    (tee_local $4
                      (i32.sub
                        (get_local $7)
                        (get_local $8)
                      )
                    )
                    (i32.const 1)
                  )
                )
                (i32.store
                  (get_local $7)
                  (get_local $4)
                )
                (set_local $1
                  (i32.shr_u
                    (get_local $4)
                    (i32.const 3)
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $4)
                    (i32.const 256)
                  )
                  (block
                    (set_local $2
                      (i32.add
                        (i32.shl
                          (i32.shl
                            (get_local $1)
                            (i32.const 1)
                          )
                          (i32.const 2)
                        )
                        (i32.const 6420)
                      )
                    )
                    (if
                      (i32.and
                        (tee_local $3
                          (i32.load
                            (i32.const 6380)
                          )
                        )
                        (tee_local $1
                          (i32.shl
                            (i32.const 1)
                            (get_local $1)
                          )
                        )
                      )
                      (if
                        (i32.lt_u
                          (tee_local $1
                            (i32.load
                              (tee_local $3
                                (i32.add
                                  (get_local $2)
                                  (i32.const 8)
                                )
                              )
                            )
                          )
                          (i32.load
                            (i32.const 6396)
                          )
                        )
                        (call $_abort)
                        (block
                          (set_local $15
                            (get_local $3)
                          )
                          (set_local $11
                            (get_local $1)
                          )
                        )
                      )
                      (block
                        (i32.store
                          (i32.const 6380)
                          (i32.or
                            (get_local $3)
                            (get_local $1)
                          )
                        )
                        (set_local $15
                          (i32.add
                            (get_local $2)
                            (i32.const 8)
                          )
                        )
                        (set_local $11
                          (get_local $2)
                        )
                      )
                    )
                    (i32.store
                      (get_local $15)
                      (get_local $8)
                    )
                    (i32.store offset=12
                      (get_local $11)
                      (get_local $8)
                    )
                    (i32.store offset=8
                      (get_local $8)
                      (get_local $11)
                    )
                    (i32.store offset=12
                      (get_local $8)
                      (get_local $2)
                    )
                    (br $do-once38)
                  )
                )
                (set_local $2
                  (i32.add
                    (i32.shl
                      (tee_local $5
                        (if i32
                          (tee_local $1
                            (i32.shr_u
                              (get_local $4)
                              (i32.const 8)
                            )
                          )
                          (if i32
                            (i32.gt_u
                              (get_local $4)
                              (i32.const 16777215)
                            )
                            (i32.const 31)
                            (i32.or
                              (i32.and
                                (i32.shr_u
                                  (get_local $4)
                                  (i32.add
                                    (tee_local $1
                                      (i32.add
                                        (i32.sub
                                          (i32.const 14)
                                          (i32.or
                                            (i32.or
                                              (tee_local $1
                                                (i32.and
                                                  (i32.shr_u
                                                    (i32.add
                                                      (tee_local $3
                                                        (i32.shl
                                                          (get_local $1)
                                                          (tee_local $2
                                                            (i32.and
                                                              (i32.shr_u
                                                                (i32.add
                                                                  (get_local $1)
                                                                  (i32.const 1048320)
                                                                )
                                                                (i32.const 16)
                                                              )
                                                              (i32.const 8)
                                                            )
                                                          )
                                                        )
                                                      )
                                                      (i32.const 520192)
                                                    )
                                                    (i32.const 16)
                                                  )
                                                  (i32.const 4)
                                                )
                                              )
                                              (get_local $2)
                                            )
                                            (tee_local $1
                                              (i32.and
                                                (i32.shr_u
                                                  (i32.add
                                                    (tee_local $3
                                                      (i32.shl
                                                        (get_local $3)
                                                        (get_local $1)
                                                      )
                                                    )
                                                    (i32.const 245760)
                                                  )
                                                  (i32.const 16)
                                                )
                                                (i32.const 2)
                                              )
                                            )
                                          )
                                        )
                                        (i32.shr_u
                                          (i32.shl
                                            (get_local $3)
                                            (get_local $1)
                                          )
                                          (i32.const 15)
                                        )
                                      )
                                    )
                                    (i32.const 7)
                                  )
                                )
                                (i32.const 1)
                              )
                              (i32.shl
                                (get_local $1)
                                (i32.const 1)
                              )
                            )
                          )
                          (i32.const 0)
                        )
                      )
                      (i32.const 2)
                    )
                    (i32.const 6684)
                  )
                )
                (i32.store offset=28
                  (get_local $8)
                  (get_local $5)
                )
                (i32.store offset=20
                  (get_local $8)
                  (i32.const 0)
                )
                (i32.store
                  (get_local $12)
                  (i32.const 0)
                )
                (if
                  (i32.eqz
                    (i32.and
                      (tee_local $3
                        (i32.load
                          (i32.const 6384)
                        )
                      )
                      (tee_local $1
                        (i32.shl
                          (i32.const 1)
                          (get_local $5)
                        )
                      )
                    )
                  )
                  (block
                    (i32.store
                      (i32.const 6384)
                      (i32.or
                        (get_local $3)
                        (get_local $1)
                      )
                    )
                    (i32.store
                      (get_local $2)
                      (get_local $8)
                    )
                    (i32.store offset=24
                      (get_local $8)
                      (get_local $2)
                    )
                    (i32.store offset=12
                      (get_local $8)
                      (get_local $8)
                    )
                    (i32.store offset=8
                      (get_local $8)
                      (get_local $8)
                    )
                    (br $do-once38)
                  )
                )
                (set_local $1
                  (i32.load
                    (get_local $2)
                  )
                )
                (set_local $3
                  (i32.sub
                    (i32.const 25)
                    (i32.shr_u
                      (get_local $5)
                      (i32.const 1)
                    )
                  )
                )
                (set_local $5
                  (i32.shl
                    (get_local $4)
                    (if i32
                      (i32.eq
                        (get_local $5)
                        (i32.const 31)
                      )
                      (i32.const 0)
                      (get_local $3)
                    )
                  )
                )
                (block $__rjto$9
                  (block $__rjti$9
                    (block $__rjti$8
                      (loop $while-in72
                        (br_if $__rjti$9
                          (i32.eq
                            (i32.and
                              (i32.load offset=4
                                (get_local $1)
                              )
                              (i32.const -8)
                            )
                            (get_local $4)
                          )
                        )
                        (set_local $2
                          (i32.shl
                            (get_local $5)
                            (i32.const 1)
                          )
                        )
                        (br_if $__rjti$8
                          (i32.eqz
                            (tee_local $3
                              (i32.load
                                (tee_local $5
                                  (i32.add
                                    (i32.add
                                      (get_local $1)
                                      (i32.const 16)
                                    )
                                    (i32.shl
                                      (i32.shr_u
                                        (get_local $5)
                                        (i32.const 31)
                                      )
                                      (i32.const 2)
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                        (set_local $5
                          (get_local $2)
                        )
                        (set_local $1
                          (get_local $3)
                        )
                        (br $while-in72)
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $5)
                        (i32.load
                          (i32.const 6396)
                        )
                      )
                      (call $_abort)
                      (block
                        (i32.store
                          (get_local $5)
                          (get_local $8)
                        )
                        (i32.store offset=24
                          (get_local $8)
                          (get_local $1)
                        )
                        (i32.store offset=12
                          (get_local $8)
                          (get_local $8)
                        )
                        (i32.store offset=8
                          (get_local $8)
                          (get_local $8)
                        )
                        (br $do-once38)
                      )
                    )
                    (br $__rjto$9)
                  )
                  (if
                    (i32.and
                      (i32.ge_u
                        (tee_local $5
                          (i32.load
                            (tee_local $2
                              (i32.add
                                (get_local $1)
                                (i32.const 8)
                              )
                            )
                          )
                        )
                        (tee_local $3
                          (i32.load
                            (i32.const 6396)
                          )
                        )
                      )
                      (i32.ge_u
                        (get_local $1)
                        (get_local $3)
                      )
                    )
                    (block
                      (i32.store offset=12
                        (get_local $5)
                        (get_local $8)
                      )
                      (i32.store
                        (get_local $2)
                        (get_local $8)
                      )
                      (i32.store offset=8
                        (get_local $8)
                        (get_local $5)
                      )
                      (i32.store offset=12
                        (get_local $8)
                        (get_local $1)
                      )
                      (i32.store offset=24
                        (get_local $8)
                        (i32.const 0)
                      )
                    )
                    (call $_abort)
                  )
                )
              )
            )
          )
          (block
            (if
              (i32.or
                (i32.eqz
                  (tee_local $2
                    (i32.load
                      (i32.const 6396)
                    )
                  )
                )
                (i32.lt_u
                  (get_local $1)
                  (get_local $2)
                )
              )
              (i32.store
                (i32.const 6396)
                (get_local $1)
              )
            )
            (i32.store
              (i32.const 6828)
              (get_local $1)
            )
            (i32.store
              (i32.const 6832)
              (get_local $3)
            )
            (i32.store
              (i32.const 6840)
              (i32.const 0)
            )
            (i32.store
              (i32.const 6416)
              (i32.load
                (i32.const 6852)
              )
            )
            (i32.store
              (i32.const 6412)
              (i32.const -1)
            )
            (set_local $2
              (i32.const 0)
            )
            (loop $while-in41
              (i32.store offset=12
                (tee_local $5
                  (i32.add
                    (i32.shl
                      (i32.shl
                        (get_local $2)
                        (i32.const 1)
                      )
                      (i32.const 2)
                    )
                    (i32.const 6420)
                  )
                )
                (get_local $5)
              )
              (i32.store offset=8
                (get_local $5)
                (get_local $5)
              )
              (br_if $while-in41
                (i32.ne
                  (tee_local $2
                    (i32.add
                      (get_local $2)
                      (i32.const 1)
                    )
                  )
                  (i32.const 32)
                )
              )
            )
            (set_local $5
              (i32.add
                (get_local $3)
                (i32.const -40)
              )
            )
            (set_local $3
              (i32.and
                (i32.sub
                  (i32.const 0)
                  (tee_local $2
                    (i32.add
                      (get_local $1)
                      (i32.const 8)
                    )
                  )
                )
                (i32.const 7)
              )
            )
            (i32.store
              (i32.const 6404)
              (tee_local $3
                (i32.add
                  (get_local $1)
                  (tee_local $1
                    (if i32
                      (i32.and
                        (get_local $2)
                        (i32.const 7)
                      )
                      (get_local $3)
                      (i32.const 0)
                    )
                  )
                )
              )
            )
            (i32.store
              (i32.const 6392)
              (tee_local $1
                (i32.sub
                  (get_local $5)
                  (get_local $1)
                )
              )
            )
            (i32.store offset=4
              (get_local $3)
              (i32.or
                (get_local $1)
                (i32.const 1)
              )
            )
            (i32.store offset=4
              (i32.add
                (get_local $3)
                (get_local $1)
              )
              (i32.const 40)
            )
            (i32.store
              (i32.const 6408)
              (i32.load
                (i32.const 6868)
              )
            )
          )
        )
      )
      (if
        (i32.gt_u
          (tee_local $1
            (i32.load
              (i32.const 6392)
            )
          )
          (get_local $0)
        )
        (block
          (i32.store
            (i32.const 6392)
            (tee_local $3
              (i32.sub
                (get_local $1)
                (get_local $0)
              )
            )
          )
          (i32.store
            (i32.const 6404)
            (tee_local $1
              (i32.add
                (tee_local $2
                  (i32.load
                    (i32.const 6404)
                  )
                )
                (get_local $0)
              )
            )
          )
          (i32.store offset=4
            (get_local $1)
            (i32.or
              (get_local $3)
              (i32.const 1)
            )
          )
          (i32.store offset=4
            (get_local $2)
            (i32.or
              (get_local $0)
              (i32.const 3)
            )
          )
          (set_global $STACKTOP
            (get_local $14)
          )
          (return
            (i32.add
              (get_local $2)
              (i32.const 8)
            )
          )
        )
      )
    )
    (i32.store
      (i32.const 6376)
      (i32.const 12)
    )
    (set_global $STACKTOP
      (get_local $14)
    )
    (i32.const 0)
  )
  (func $_free (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (if
      (i32.eqz
        (get_local $0)
      )
      (return)
    )
    (if
      (i32.lt_u
        (tee_local $1
          (i32.add
            (get_local $0)
            (i32.const -8)
          )
        )
        (tee_local $11
          (i32.load
            (i32.const 6396)
          )
        )
      )
      (call $_abort)
    )
    (if
      (i32.eq
        (tee_local $8
          (i32.and
            (tee_local $0
              (i32.load
                (i32.add
                  (get_local $0)
                  (i32.const -4)
                )
              )
            )
            (i32.const 3)
          )
        )
        (i32.const 1)
      )
      (call $_abort)
    )
    (set_local $6
      (i32.add
        (get_local $1)
        (tee_local $4
          (i32.and
            (get_local $0)
            (i32.const -8)
          )
        )
      )
    )
    (block $do-once
      (if
        (i32.and
          (get_local $0)
          (i32.const 1)
        )
        (block
          (set_local $3
            (get_local $1)
          )
          (set_local $2
            (get_local $4)
          )
        )
        (block
          (if
            (i32.eqz
              (get_local $8)
            )
            (return)
          )
          (if
            (i32.lt_u
              (tee_local $0
                (i32.add
                  (get_local $1)
                  (i32.sub
                    (i32.const 0)
                    (tee_local $8
                      (i32.load
                        (get_local $1)
                      )
                    )
                  )
                )
              )
              (get_local $11)
            )
            (call $_abort)
          )
          (set_local $1
            (i32.add
              (get_local $8)
              (get_local $4)
            )
          )
          (if
            (i32.eq
              (get_local $0)
              (i32.load
                (i32.const 6400)
              )
            )
            (block
              (if
                (i32.ne
                  (i32.and
                    (tee_local $3
                      (i32.load
                        (tee_local $2
                          (i32.add
                            (get_local $6)
                            (i32.const 4)
                          )
                        )
                      )
                    )
                    (i32.const 3)
                  )
                  (i32.const 3)
                )
                (block
                  (set_local $3
                    (get_local $0)
                  )
                  (set_local $2
                    (get_local $1)
                  )
                  (br $do-once)
                )
              )
              (i32.store
                (i32.const 6388)
                (get_local $1)
              )
              (i32.store
                (get_local $2)
                (i32.and
                  (get_local $3)
                  (i32.const -2)
                )
              )
              (i32.store offset=4
                (get_local $0)
                (i32.or
                  (get_local $1)
                  (i32.const 1)
                )
              )
              (i32.store
                (i32.add
                  (get_local $0)
                  (get_local $1)
                )
                (get_local $1)
              )
              (return)
            )
          )
          (set_local $10
            (i32.shr_u
              (get_local $8)
              (i32.const 3)
            )
          )
          (if
            (i32.lt_u
              (get_local $8)
              (i32.const 256)
            )
            (block
              (set_local $3
                (i32.load offset=12
                  (get_local $0)
                )
              )
              (if
                (i32.ne
                  (tee_local $4
                    (i32.load offset=8
                      (get_local $0)
                    )
                  )
                  (tee_local $2
                    (i32.add
                      (i32.shl
                        (i32.shl
                          (get_local $10)
                          (i32.const 1)
                        )
                        (i32.const 2)
                      )
                      (i32.const 6420)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $4)
                      (get_local $11)
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.ne
                      (i32.load offset=12
                        (get_local $4)
                      )
                      (get_local $0)
                    )
                    (call $_abort)
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $3)
                  (get_local $4)
                )
                (block
                  (i32.store
                    (i32.const 6380)
                    (i32.and
                      (i32.load
                        (i32.const 6380)
                      )
                      (i32.xor
                        (i32.shl
                          (i32.const 1)
                          (get_local $10)
                        )
                        (i32.const -1)
                      )
                    )
                  )
                  (set_local $3
                    (get_local $0)
                  )
                  (set_local $2
                    (get_local $1)
                  )
                  (br $do-once)
                )
              )
              (if
                (i32.eq
                  (get_local $3)
                  (get_local $2)
                )
                (set_local $5
                  (i32.add
                    (get_local $3)
                    (i32.const 8)
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $3)
                      (get_local $11)
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $2
                          (i32.add
                            (get_local $3)
                            (i32.const 8)
                          )
                        )
                      )
                      (get_local $0)
                    )
                    (set_local $5
                      (get_local $2)
                    )
                    (call $_abort)
                  )
                )
              )
              (i32.store offset=12
                (get_local $4)
                (get_local $3)
              )
              (i32.store
                (get_local $5)
                (get_local $4)
              )
              (set_local $3
                (get_local $0)
              )
              (set_local $2
                (get_local $1)
              )
              (br $do-once)
            )
          )
          (set_local $12
            (i32.load offset=24
              (get_local $0)
            )
          )
          (block $do-once0
            (if
              (i32.eq
                (tee_local $4
                  (i32.load offset=12
                    (get_local $0)
                  )
                )
                (get_local $0)
              )
              (block
                (if
                  (tee_local $4
                    (i32.load
                      (tee_local $8
                        (i32.add
                          (tee_local $5
                            (i32.add
                              (get_local $0)
                              (i32.const 16)
                            )
                          )
                          (i32.const 4)
                        )
                      )
                    )
                  )
                  (set_local $5
                    (get_local $8)
                  )
                  (if
                    (i32.eqz
                      (tee_local $4
                        (i32.load
                          (get_local $5)
                        )
                      )
                    )
                    (block
                      (set_local $7
                        (i32.const 0)
                      )
                      (br $do-once0)
                    )
                  )
                )
                (loop $while-in
                  (if
                    (tee_local $10
                      (i32.load
                        (tee_local $8
                          (i32.add
                            (get_local $4)
                            (i32.const 20)
                          )
                        )
                      )
                    )
                    (block
                      (set_local $4
                        (get_local $10)
                      )
                      (set_local $5
                        (get_local $8)
                      )
                      (br $while-in)
                    )
                  )
                  (if
                    (tee_local $10
                      (i32.load
                        (tee_local $8
                          (i32.add
                            (get_local $4)
                            (i32.const 16)
                          )
                        )
                      )
                    )
                    (block
                      (set_local $4
                        (get_local $10)
                      )
                      (set_local $5
                        (get_local $8)
                      )
                      (br $while-in)
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $5)
                    (get_local $11)
                  )
                  (call $_abort)
                  (block
                    (i32.store
                      (get_local $5)
                      (i32.const 0)
                    )
                    (set_local $7
                      (get_local $4)
                    )
                  )
                )
              )
              (block
                (if
                  (i32.lt_u
                    (tee_local $5
                      (i32.load offset=8
                        (get_local $0)
                      )
                    )
                    (get_local $11)
                  )
                  (call $_abort)
                )
                (if
                  (i32.ne
                    (i32.load
                      (tee_local $8
                        (i32.add
                          (get_local $5)
                          (i32.const 12)
                        )
                      )
                    )
                    (get_local $0)
                  )
                  (call $_abort)
                )
                (if
                  (i32.eq
                    (i32.load
                      (tee_local $10
                        (i32.add
                          (get_local $4)
                          (i32.const 8)
                        )
                      )
                    )
                    (get_local $0)
                  )
                  (block
                    (i32.store
                      (get_local $8)
                      (get_local $4)
                    )
                    (i32.store
                      (get_local $10)
                      (get_local $5)
                    )
                    (set_local $7
                      (get_local $4)
                    )
                  )
                  (call $_abort)
                )
              )
            )
          )
          (if
            (get_local $12)
            (block
              (if
                (i32.eq
                  (get_local $0)
                  (i32.load
                    (tee_local $5
                      (i32.add
                        (i32.shl
                          (tee_local $4
                            (i32.load offset=28
                              (get_local $0)
                            )
                          )
                          (i32.const 2)
                        )
                        (i32.const 6684)
                      )
                    )
                  )
                )
                (block
                  (i32.store
                    (get_local $5)
                    (get_local $7)
                  )
                  (if
                    (i32.eqz
                      (get_local $7)
                    )
                    (block
                      (i32.store
                        (i32.const 6384)
                        (i32.and
                          (i32.load
                            (i32.const 6384)
                          )
                          (i32.xor
                            (i32.shl
                              (i32.const 1)
                              (get_local $4)
                            )
                            (i32.const -1)
                          )
                        )
                      )
                      (set_local $3
                        (get_local $0)
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (br $do-once)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $12)
                      (i32.load
                        (i32.const 6396)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $4
                          (i32.add
                            (get_local $12)
                            (i32.const 16)
                          )
                        )
                      )
                      (get_local $0)
                    )
                    (i32.store
                      (get_local $4)
                      (get_local $7)
                    )
                    (i32.store offset=20
                      (get_local $12)
                      (get_local $7)
                    )
                  )
                  (if
                    (i32.eqz
                      (get_local $7)
                    )
                    (block
                      (set_local $3
                        (get_local $0)
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (br $do-once)
                    )
                  )
                )
              )
              (if
                (i32.lt_u
                  (get_local $7)
                  (tee_local $5
                    (i32.load
                      (i32.const 6396)
                    )
                  )
                )
                (call $_abort)
              )
              (i32.store offset=24
                (get_local $7)
                (get_local $12)
              )
              (if
                (tee_local $4
                  (i32.load
                    (tee_local $8
                      (i32.add
                        (get_local $0)
                        (i32.const 16)
                      )
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $4)
                    (get_local $5)
                  )
                  (call $_abort)
                  (block
                    (i32.store offset=16
                      (get_local $7)
                      (get_local $4)
                    )
                    (i32.store offset=24
                      (get_local $4)
                      (get_local $7)
                    )
                  )
                )
              )
              (if
                (tee_local $4
                  (i32.load offset=4
                    (get_local $8)
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $4)
                    (i32.load
                      (i32.const 6396)
                    )
                  )
                  (call $_abort)
                  (block
                    (i32.store offset=20
                      (get_local $7)
                      (get_local $4)
                    )
                    (i32.store offset=24
                      (get_local $4)
                      (get_local $7)
                    )
                    (set_local $3
                      (get_local $0)
                    )
                    (set_local $2
                      (get_local $1)
                    )
                  )
                )
                (block
                  (set_local $3
                    (get_local $0)
                  )
                  (set_local $2
                    (get_local $1)
                  )
                )
              )
            )
            (block
              (set_local $3
                (get_local $0)
              )
              (set_local $2
                (get_local $1)
              )
            )
          )
        )
      )
    )
    (if
      (i32.ge_u
        (get_local $3)
        (get_local $6)
      )
      (call $_abort)
    )
    (if
      (i32.eqz
        (i32.and
          (tee_local $0
            (i32.load
              (tee_local $1
                (i32.add
                  (get_local $6)
                  (i32.const 4)
                )
              )
            )
          )
          (i32.const 1)
        )
      )
      (call $_abort)
    )
    (if
      (i32.and
        (get_local $0)
        (i32.const 2)
      )
      (block
        (i32.store
          (get_local $1)
          (i32.and
            (get_local $0)
            (i32.const -2)
          )
        )
        (i32.store offset=4
          (get_local $3)
          (i32.or
            (get_local $2)
            (i32.const 1)
          )
        )
        (i32.store
          (i32.add
            (get_local $3)
            (get_local $2)
          )
          (get_local $2)
        )
      )
      (block
        (if
          (i32.eq
            (get_local $6)
            (i32.load
              (i32.const 6404)
            )
          )
          (block
            (i32.store
              (i32.const 6392)
              (tee_local $0
                (i32.add
                  (i32.load
                    (i32.const 6392)
                  )
                  (get_local $2)
                )
              )
            )
            (i32.store
              (i32.const 6404)
              (get_local $3)
            )
            (i32.store offset=4
              (get_local $3)
              (i32.or
                (get_local $0)
                (i32.const 1)
              )
            )
            (if
              (i32.ne
                (get_local $3)
                (i32.load
                  (i32.const 6400)
                )
              )
              (return)
            )
            (i32.store
              (i32.const 6400)
              (i32.const 0)
            )
            (i32.store
              (i32.const 6388)
              (i32.const 0)
            )
            (return)
          )
        )
        (if
          (i32.eq
            (get_local $6)
            (i32.load
              (i32.const 6400)
            )
          )
          (block
            (i32.store
              (i32.const 6388)
              (tee_local $0
                (i32.add
                  (i32.load
                    (i32.const 6388)
                  )
                  (get_local $2)
                )
              )
            )
            (i32.store
              (i32.const 6400)
              (get_local $3)
            )
            (i32.store offset=4
              (get_local $3)
              (i32.or
                (get_local $0)
                (i32.const 1)
              )
            )
            (i32.store
              (i32.add
                (get_local $3)
                (get_local $0)
              )
              (get_local $0)
            )
            (return)
          )
        )
        (set_local $5
          (i32.add
            (i32.and
              (get_local $0)
              (i32.const -8)
            )
            (get_local $2)
          )
        )
        (set_local $4
          (i32.shr_u
            (get_local $0)
            (i32.const 3)
          )
        )
        (block $do-once4
          (if
            (i32.lt_u
              (get_local $0)
              (i32.const 256)
            )
            (block
              (set_local $2
                (i32.load offset=12
                  (get_local $6)
                )
              )
              (if
                (i32.ne
                  (tee_local $1
                    (i32.load offset=8
                      (get_local $6)
                    )
                  )
                  (tee_local $0
                    (i32.add
                      (i32.shl
                        (i32.shl
                          (get_local $4)
                          (i32.const 1)
                        )
                        (i32.const 2)
                      )
                      (i32.const 6420)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $1)
                      (i32.load
                        (i32.const 6396)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.ne
                      (i32.load offset=12
                        (get_local $1)
                      )
                      (get_local $6)
                    )
                    (call $_abort)
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $2)
                  (get_local $1)
                )
                (block
                  (i32.store
                    (i32.const 6380)
                    (i32.and
                      (i32.load
                        (i32.const 6380)
                      )
                      (i32.xor
                        (i32.shl
                          (i32.const 1)
                          (get_local $4)
                        )
                        (i32.const -1)
                      )
                    )
                  )
                  (br $do-once4)
                )
              )
              (if
                (i32.eq
                  (get_local $2)
                  (get_local $0)
                )
                (set_local $14
                  (i32.add
                    (get_local $2)
                    (i32.const 8)
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $2)
                      (i32.load
                        (i32.const 6396)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $0
                          (i32.add
                            (get_local $2)
                            (i32.const 8)
                          )
                        )
                      )
                      (get_local $6)
                    )
                    (set_local $14
                      (get_local $0)
                    )
                    (call $_abort)
                  )
                )
              )
              (i32.store offset=12
                (get_local $1)
                (get_local $2)
              )
              (i32.store
                (get_local $14)
                (get_local $1)
              )
            )
            (block
              (set_local $7
                (i32.load offset=24
                  (get_local $6)
                )
              )
              (block $do-once6
                (if
                  (i32.eq
                    (tee_local $0
                      (i32.load offset=12
                        (get_local $6)
                      )
                    )
                    (get_local $6)
                  )
                  (block
                    (if
                      (tee_local $0
                        (i32.load
                          (tee_local $1
                            (i32.add
                              (tee_local $2
                                (i32.add
                                  (get_local $6)
                                  (i32.const 16)
                                )
                              )
                              (i32.const 4)
                            )
                          )
                        )
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (if
                        (i32.eqz
                          (tee_local $0
                            (i32.load
                              (get_local $2)
                            )
                          )
                        )
                        (block
                          (set_local $9
                            (i32.const 0)
                          )
                          (br $do-once6)
                        )
                      )
                    )
                    (loop $while-in9
                      (if
                        (tee_local $4
                          (i32.load
                            (tee_local $1
                              (i32.add
                                (get_local $0)
                                (i32.const 20)
                              )
                            )
                          )
                        )
                        (block
                          (set_local $0
                            (get_local $4)
                          )
                          (set_local $2
                            (get_local $1)
                          )
                          (br $while-in9)
                        )
                      )
                      (if
                        (tee_local $4
                          (i32.load
                            (tee_local $1
                              (i32.add
                                (get_local $0)
                                (i32.const 16)
                              )
                            )
                          )
                        )
                        (block
                          (set_local $0
                            (get_local $4)
                          )
                          (set_local $2
                            (get_local $1)
                          )
                          (br $while-in9)
                        )
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $2)
                        (i32.load
                          (i32.const 6396)
                        )
                      )
                      (call $_abort)
                      (block
                        (i32.store
                          (get_local $2)
                          (i32.const 0)
                        )
                        (set_local $9
                          (get_local $0)
                        )
                      )
                    )
                  )
                  (block
                    (if
                      (i32.lt_u
                        (tee_local $2
                          (i32.load offset=8
                            (get_local $6)
                          )
                        )
                        (i32.load
                          (i32.const 6396)
                        )
                      )
                      (call $_abort)
                    )
                    (if
                      (i32.ne
                        (i32.load
                          (tee_local $1
                            (i32.add
                              (get_local $2)
                              (i32.const 12)
                            )
                          )
                        )
                        (get_local $6)
                      )
                      (call $_abort)
                    )
                    (if
                      (i32.eq
                        (i32.load
                          (tee_local $4
                            (i32.add
                              (get_local $0)
                              (i32.const 8)
                            )
                          )
                        )
                        (get_local $6)
                      )
                      (block
                        (i32.store
                          (get_local $1)
                          (get_local $0)
                        )
                        (i32.store
                          (get_local $4)
                          (get_local $2)
                        )
                        (set_local $9
                          (get_local $0)
                        )
                      )
                      (call $_abort)
                    )
                  )
                )
              )
              (if
                (get_local $7)
                (block
                  (if
                    (i32.eq
                      (get_local $6)
                      (i32.load
                        (tee_local $2
                          (i32.add
                            (i32.shl
                              (tee_local $0
                                (i32.load offset=28
                                  (get_local $6)
                                )
                              )
                              (i32.const 2)
                            )
                            (i32.const 6684)
                          )
                        )
                      )
                    )
                    (block
                      (i32.store
                        (get_local $2)
                        (get_local $9)
                      )
                      (if
                        (i32.eqz
                          (get_local $9)
                        )
                        (block
                          (i32.store
                            (i32.const 6384)
                            (i32.and
                              (i32.load
                                (i32.const 6384)
                              )
                              (i32.xor
                                (i32.shl
                                  (i32.const 1)
                                  (get_local $0)
                                )
                                (i32.const -1)
                              )
                            )
                          )
                          (br $do-once4)
                        )
                      )
                    )
                    (block
                      (if
                        (i32.lt_u
                          (get_local $7)
                          (i32.load
                            (i32.const 6396)
                          )
                        )
                        (call $_abort)
                      )
                      (if
                        (i32.eq
                          (i32.load
                            (tee_local $0
                              (i32.add
                                (get_local $7)
                                (i32.const 16)
                              )
                            )
                          )
                          (get_local $6)
                        )
                        (i32.store
                          (get_local $0)
                          (get_local $9)
                        )
                        (i32.store offset=20
                          (get_local $7)
                          (get_local $9)
                        )
                      )
                      (br_if $do-once4
                        (i32.eqz
                          (get_local $9)
                        )
                      )
                    )
                  )
                  (if
                    (i32.lt_u
                      (get_local $9)
                      (tee_local $2
                        (i32.load
                          (i32.const 6396)
                        )
                      )
                    )
                    (call $_abort)
                  )
                  (i32.store offset=24
                    (get_local $9)
                    (get_local $7)
                  )
                  (if
                    (tee_local $0
                      (i32.load
                        (tee_local $1
                          (i32.add
                            (get_local $6)
                            (i32.const 16)
                          )
                        )
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $0)
                        (get_local $2)
                      )
                      (call $_abort)
                      (block
                        (i32.store offset=16
                          (get_local $9)
                          (get_local $0)
                        )
                        (i32.store offset=24
                          (get_local $0)
                          (get_local $9)
                        )
                      )
                    )
                  )
                  (if
                    (tee_local $0
                      (i32.load offset=4
                        (get_local $1)
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $0)
                        (i32.load
                          (i32.const 6396)
                        )
                      )
                      (call $_abort)
                      (block
                        (i32.store offset=20
                          (get_local $9)
                          (get_local $0)
                        )
                        (i32.store offset=24
                          (get_local $0)
                          (get_local $9)
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
        (i32.store offset=4
          (get_local $3)
          (i32.or
            (get_local $5)
            (i32.const 1)
          )
        )
        (i32.store
          (i32.add
            (get_local $3)
            (get_local $5)
          )
          (get_local $5)
        )
        (if
          (i32.eq
            (get_local $3)
            (i32.load
              (i32.const 6400)
            )
          )
          (block
            (i32.store
              (i32.const 6388)
              (get_local $5)
            )
            (return)
          )
          (set_local $2
            (get_local $5)
          )
        )
      )
    )
    (set_local $1
      (i32.shr_u
        (get_local $2)
        (i32.const 3)
      )
    )
    (if
      (i32.lt_u
        (get_local $2)
        (i32.const 256)
      )
      (block
        (set_local $0
          (i32.add
            (i32.shl
              (i32.shl
                (get_local $1)
                (i32.const 1)
              )
              (i32.const 2)
            )
            (i32.const 6420)
          )
        )
        (if
          (i32.and
            (tee_local $2
              (i32.load
                (i32.const 6380)
              )
            )
            (tee_local $1
              (i32.shl
                (i32.const 1)
                (get_local $1)
              )
            )
          )
          (if
            (i32.lt_u
              (tee_local $1
                (i32.load
                  (tee_local $2
                    (i32.add
                      (get_local $0)
                      (i32.const 8)
                    )
                  )
                )
              )
              (i32.load
                (i32.const 6396)
              )
            )
            (call $_abort)
            (block
              (set_local $15
                (get_local $2)
              )
              (set_local $13
                (get_local $1)
              )
            )
          )
          (block
            (i32.store
              (i32.const 6380)
              (i32.or
                (get_local $2)
                (get_local $1)
              )
            )
            (set_local $15
              (i32.add
                (get_local $0)
                (i32.const 8)
              )
            )
            (set_local $13
              (get_local $0)
            )
          )
        )
        (i32.store
          (get_local $15)
          (get_local $3)
        )
        (i32.store offset=12
          (get_local $13)
          (get_local $3)
        )
        (i32.store offset=8
          (get_local $3)
          (get_local $13)
        )
        (i32.store offset=12
          (get_local $3)
          (get_local $0)
        )
        (return)
      )
    )
    (set_local $0
      (i32.add
        (i32.shl
          (tee_local $1
            (if i32
              (tee_local $0
                (i32.shr_u
                  (get_local $2)
                  (i32.const 8)
                )
              )
              (if i32
                (i32.gt_u
                  (get_local $2)
                  (i32.const 16777215)
                )
                (i32.const 31)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $2)
                      (i32.add
                        (tee_local $0
                          (i32.add
                            (i32.sub
                              (i32.const 14)
                              (i32.or
                                (i32.or
                                  (tee_local $4
                                    (i32.and
                                      (i32.shr_u
                                        (i32.add
                                          (tee_local $1
                                            (i32.shl
                                              (get_local $0)
                                              (tee_local $0
                                                (i32.and
                                                  (i32.shr_u
                                                    (i32.add
                                                      (get_local $0)
                                                      (i32.const 1048320)
                                                    )
                                                    (i32.const 16)
                                                  )
                                                  (i32.const 8)
                                                )
                                              )
                                            )
                                          )
                                          (i32.const 520192)
                                        )
                                        (i32.const 16)
                                      )
                                      (i32.const 4)
                                    )
                                  )
                                  (get_local $0)
                                )
                                (tee_local $1
                                  (i32.and
                                    (i32.shr_u
                                      (i32.add
                                        (tee_local $0
                                          (i32.shl
                                            (get_local $1)
                                            (get_local $4)
                                          )
                                        )
                                        (i32.const 245760)
                                      )
                                      (i32.const 16)
                                    )
                                    (i32.const 2)
                                  )
                                )
                              )
                            )
                            (i32.shr_u
                              (i32.shl
                                (get_local $0)
                                (get_local $1)
                              )
                              (i32.const 15)
                            )
                          )
                        )
                        (i32.const 7)
                      )
                    )
                    (i32.const 1)
                  )
                  (i32.shl
                    (get_local $0)
                    (i32.const 1)
                  )
                )
              )
              (i32.const 0)
            )
          )
          (i32.const 2)
        )
        (i32.const 6684)
      )
    )
    (i32.store offset=28
      (get_local $3)
      (get_local $1)
    )
    (i32.store offset=20
      (get_local $3)
      (i32.const 0)
    )
    (i32.store offset=16
      (get_local $3)
      (i32.const 0)
    )
    (block $do-once12
      (if
        (i32.and
          (tee_local $4
            (i32.load
              (i32.const 6384)
            )
          )
          (tee_local $5
            (i32.shl
              (i32.const 1)
              (get_local $1)
            )
          )
        )
        (block
          (set_local $0
            (i32.load
              (get_local $0)
            )
          )
          (set_local $4
            (i32.sub
              (i32.const 25)
              (i32.shr_u
                (get_local $1)
                (i32.const 1)
              )
            )
          )
          (set_local $1
            (i32.shl
              (get_local $2)
              (if i32
                (i32.eq
                  (get_local $1)
                  (i32.const 31)
                )
                (i32.const 0)
                (get_local $4)
              )
            )
          )
          (block $__rjto$1
            (block $__rjti$1
              (block $__rjti$0
                (loop $while-in15
                  (br_if $__rjti$1
                    (i32.eq
                      (i32.and
                        (i32.load offset=4
                          (get_local $0)
                        )
                        (i32.const -8)
                      )
                      (get_local $2)
                    )
                  )
                  (set_local $4
                    (i32.shl
                      (get_local $1)
                      (i32.const 1)
                    )
                  )
                  (br_if $__rjti$0
                    (i32.eqz
                      (tee_local $5
                        (i32.load
                          (tee_local $1
                            (i32.add
                              (i32.add
                                (get_local $0)
                                (i32.const 16)
                              )
                              (i32.shl
                                (i32.shr_u
                                  (get_local $1)
                                  (i32.const 31)
                                )
                                (i32.const 2)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                  (set_local $1
                    (get_local $4)
                  )
                  (set_local $0
                    (get_local $5)
                  )
                  (br $while-in15)
                )
              )
              (if
                (i32.lt_u
                  (get_local $1)
                  (i32.load
                    (i32.const 6396)
                  )
                )
                (call $_abort)
                (block
                  (i32.store
                    (get_local $1)
                    (get_local $3)
                  )
                  (i32.store offset=24
                    (get_local $3)
                    (get_local $0)
                  )
                  (i32.store offset=12
                    (get_local $3)
                    (get_local $3)
                  )
                  (i32.store offset=8
                    (get_local $3)
                    (get_local $3)
                  )
                  (br $do-once12)
                )
              )
              (br $__rjto$1)
            )
            (if
              (i32.and
                (i32.ge_u
                  (tee_local $2
                    (i32.load
                      (tee_local $1
                        (i32.add
                          (get_local $0)
                          (i32.const 8)
                        )
                      )
                    )
                  )
                  (tee_local $4
                    (i32.load
                      (i32.const 6396)
                    )
                  )
                )
                (i32.ge_u
                  (get_local $0)
                  (get_local $4)
                )
              )
              (block
                (i32.store offset=12
                  (get_local $2)
                  (get_local $3)
                )
                (i32.store
                  (get_local $1)
                  (get_local $3)
                )
                (i32.store offset=8
                  (get_local $3)
                  (get_local $2)
                )
                (i32.store offset=12
                  (get_local $3)
                  (get_local $0)
                )
                (i32.store offset=24
                  (get_local $3)
                  (i32.const 0)
                )
              )
              (call $_abort)
            )
          )
        )
        (block
          (i32.store
            (i32.const 6384)
            (i32.or
              (get_local $4)
              (get_local $5)
            )
          )
          (i32.store
            (get_local $0)
            (get_local $3)
          )
          (i32.store offset=24
            (get_local $3)
            (get_local $0)
          )
          (i32.store offset=12
            (get_local $3)
            (get_local $3)
          )
          (i32.store offset=8
            (get_local $3)
            (get_local $3)
          )
        )
      )
    )
    (i32.store
      (i32.const 6412)
      (tee_local $0
        (i32.add
          (i32.load
            (i32.const 6412)
          )
          (i32.const -1)
        )
      )
    )
    (if
      (get_local $0)
      (return)
      (set_local $0
        (i32.const 6836)
      )
    )
    (loop $while-in17
      (set_local $0
        (i32.add
          (tee_local $2
            (i32.load
              (get_local $0)
            )
          )
          (i32.const 8)
        )
      )
      (br_if $while-in17
        (get_local $2)
      )
    )
    (i32.store
      (i32.const 6412)
      (i32.const -1)
    )
  )
  (func $__ZL25default_terminate_handlerv
    (local $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i64)
    (set_local $2
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 48)
      )
    )
    (set_local $1
      (get_local $2)
    )
    (if
      (call $_pthread_once
        (i32.const 6876)
        (i32.const 2)
      )
      (call $_abort_message
        (i32.const 5901)
        (get_local $1)
      )
    )
    (set_local $1
      (i32.add
        (get_local $2)
        (i32.const 32)
      )
    )
    (set_local $4
      (i32.add
        (get_local $2)
        (i32.const 24)
      )
    )
    (set_local $3
      (i32.add
        (get_local $2)
        (i32.const 8)
      )
    )
    (set_local $5
      (i32.add
        (get_local $2)
        (i32.const 44)
      )
    )
    (if
      (tee_local $0
        (call $_pthread_getspecific
          (i32.load
            (i32.const 6880)
          )
        )
      )
      (if
        (tee_local $0
          (i32.load
            (get_local $0)
          )
        )
        (block
          (if
            (i64.ne
              (i64.and
                (tee_local $6
                  (i64.load offset=48
                    (get_local $0)
                  )
                )
                (i64.const -256)
              )
              (i64.const 4849336966747728640)
            )
            (block
              (i32.store
                (get_local $1)
                (i32.const 5762)
              )
              (call $_abort_message
                (i32.const 5712)
                (get_local $1)
              )
            )
          )
          (set_local $1
            (i32.add
              (get_local $0)
              (i32.const 80)
            )
          )
          (if
            (i64.eq
              (get_local $6)
              (i64.const 4849336966747728641)
            )
            (set_local $1
              (i32.load offset=44
                (get_local $0)
              )
            )
          )
          (i32.store
            (get_local $5)
            (get_local $1)
          )
          (set_local $1
            (i32.load offset=4
              (tee_local $0
                (i32.load
                  (get_local $0)
                )
              )
            )
          )
          (if
            (call $__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv
              (i32.const 1208)
              (get_local $0)
              (get_local $5)
            )
            (block
              (set_local $0
                (call_indirect $FUNCSIG$ii
                  (tee_local $0
                    (i32.load
                      (get_local $5)
                    )
                  )
                  (i32.add
                    (i32.and
                      (i32.load offset=8
                        (i32.load
                          (get_local $0)
                        )
                      )
                      (i32.const 1)
                    )
                    (i32.const 28)
                  )
                )
              )
              (i32.store
                (get_local $3)
                (i32.const 5762)
              )
              (i32.store offset=4
                (get_local $3)
                (get_local $1)
              )
              (i32.store offset=8
                (get_local $3)
                (get_local $0)
              )
              (call $_abort_message
                (i32.const 5626)
                (get_local $3)
              )
            )
            (block
              (i32.store
                (get_local $4)
                (i32.const 5762)
              )
              (i32.store offset=4
                (get_local $4)
                (get_local $1)
              )
              (call $_abort_message
                (i32.const 5671)
                (get_local $4)
              )
            )
          )
        )
      )
    )
    (call $_abort_message
      (i32.const 5750)
      (i32.add
        (get_local $2)
        (i32.const 40)
      )
    )
  )
  (func $_abort_message (param $0 i32) (param $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (set_local $2
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 240)
      )
    )
    (set_local $3
      (i32.add
        (get_local $2)
        (i32.const 152)
      )
    )
    (i32.store
      (tee_local $4
        (i32.add
          (get_local $2)
          (i32.const 80)
        )
      )
      (get_local $1)
    )
    (i64.store align=4
      (tee_local $1
        (i32.add
          (get_local $2)
          (i32.const 96)
        )
      )
      (i64.const 0)
    )
    (i64.store offset=8 align=4
      (get_local $1)
      (i64.const 0)
    )
    (i64.store offset=16 align=4
      (get_local $1)
      (i64.const 0)
    )
    (i64.store offset=24 align=4
      (get_local $1)
      (i64.const 0)
    )
    (i64.store offset=32 align=4
      (get_local $1)
      (i64.const 0)
    )
    (i32.store
      (tee_local $5
        (i32.add
          (get_local $2)
          (i32.const 136)
        )
      )
      (i32.load
        (get_local $4)
      )
    )
    (if
      (i32.ge_s
        (call $_printf_core
          (i32.const 0)
          (get_local $0)
          (get_local $5)
          (get_local $2)
          (get_local $1)
        )
        (i32.const 0)
      )
      (block
        (set_local $4
          (i32.load
            (i32.const 1444)
          )
        )
        (if
          (i32.lt_s
            (i32.load8_s
              (i32.const 1518)
            )
            (i32.const 1)
          )
          (i32.store
            (i32.const 1444)
            (i32.and
              (get_local $4)
              (i32.const -33)
            )
          )
        )
        (if
          (i32.load
            (i32.const 1492)
          )
          (drop
            (call $_printf_core
              (i32.const 1444)
              (get_local $0)
              (get_local $5)
              (get_local $2)
              (get_local $1)
            )
          )
          (block
            (set_local $6
              (i32.load
                (i32.const 1488)
              )
            )
            (i32.store
              (i32.const 1488)
              (get_local $3)
            )
            (i32.store
              (i32.const 1472)
              (get_local $3)
            )
            (i32.store
              (i32.const 1464)
              (get_local $3)
            )
            (i32.store
              (i32.const 1492)
              (i32.const 80)
            )
            (i32.store
              (i32.const 1460)
              (i32.add
                (get_local $3)
                (i32.const 80)
              )
            )
            (drop
              (call $_printf_core
                (i32.const 1444)
                (get_local $0)
                (get_local $5)
                (get_local $2)
                (get_local $1)
              )
            )
            (if
              (get_local $6)
              (block
                (drop
                  (call_indirect $FUNCSIG$iiii
                    (i32.const 1444)
                    (i32.const 0)
                    (i32.const 0)
                    (i32.add
                      (i32.and
                        (i32.load
                          (i32.const 1480)
                        )
                        (i32.const 7)
                      )
                      (i32.const 0)
                    )
                  )
                )
                (i32.store
                  (i32.const 1488)
                  (get_local $6)
                )
                (i32.store
                  (i32.const 1492)
                  (i32.const 0)
                )
                (i32.store
                  (i32.const 1460)
                  (i32.const 0)
                )
                (i32.store
                  (i32.const 1472)
                  (i32.const 0)
                )
                (i32.store
                  (i32.const 1464)
                  (i32.const 0)
                )
              )
            )
          )
        )
        (i32.store
          (i32.const 1444)
          (i32.or
            (i32.load
              (i32.const 1444)
            )
            (i32.and
              (get_local $4)
              (i32.const 32)
            )
          )
        )
      )
    )
    (set_local $0
      (i32.eq
        (i32.load8_s
          (i32.const 1519)
        )
        (i32.const 10)
      )
    )
    (block $do-once
      (if
        (i32.lt_s
          (i32.load
            (i32.const 1520)
          )
          (i32.const 0)
        )
        (block
          (if
            (i32.eqz
              (get_local $0)
            )
            (if
              (i32.lt_u
                (tee_local $0
                  (i32.load
                    (i32.const 1464)
                  )
                )
                (i32.load
                  (i32.const 1460)
                )
              )
              (block
                (i32.store
                  (i32.const 1464)
                  (i32.add
                    (get_local $0)
                    (i32.const 1)
                  )
                )
                (i32.store8
                  (get_local $0)
                  (i32.const 10)
                )
                (br $do-once)
              )
            )
          )
          (drop
            (call $___overflow)
          )
        )
        (block
          (if
            (i32.eqz
              (get_local $0)
            )
            (if
              (i32.lt_u
                (tee_local $0
                  (i32.load
                    (i32.const 1464)
                  )
                )
                (i32.load
                  (i32.const 1460)
                )
              )
              (block
                (i32.store
                  (i32.const 1464)
                  (i32.add
                    (get_local $0)
                    (i32.const 1)
                  )
                )
                (i32.store8
                  (get_local $0)
                  (i32.const 10)
                )
                (br $do-once)
              )
            )
          )
          (drop
            (call $___overflow)
          )
        )
      )
    )
    (call $_abort)
  )
  (func $__ZN10__cxxabiv116__shim_type_infoD2Ev (param $0 i32)
    (nop)
  )
  (func $__ZN10__cxxabiv117__class_type_infoD0Ev (param $0 i32)
    (call $_free
      (get_local $0)
    )
  )
  (func $__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $5
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 64)
      )
    )
    (set_local $3
      (get_local $5)
    )
    (set_local $0
      (if i32
        (i32.eq
          (get_local $0)
          (get_local $1)
        )
        (i32.const 1)
        (if i32
          (get_local $1)
          (if i32
            (tee_local $1
              (call $___dynamic_cast
                (get_local $1)
                (i32.const 1216)
              )
            )
            (block i32
              (i64.store align=4
                (tee_local $4
                  (i32.add
                    (get_local $3)
                    (i32.const 4)
                  )
                )
                (i64.const 0)
              )
              (i64.store offset=8 align=4
                (get_local $4)
                (i64.const 0)
              )
              (i64.store offset=16 align=4
                (get_local $4)
                (i64.const 0)
              )
              (i64.store offset=24 align=4
                (get_local $4)
                (i64.const 0)
              )
              (i64.store offset=32 align=4
                (get_local $4)
                (i64.const 0)
              )
              (i64.store offset=40 align=4
                (get_local $4)
                (i64.const 0)
              )
              (i32.store offset=48
                (get_local $4)
                (i32.const 0)
              )
              (i32.store
                (get_local $3)
                (get_local $1)
              )
              (i32.store offset=8
                (get_local $3)
                (get_local $0)
              )
              (i32.store offset=12
                (get_local $3)
                (i32.const -1)
              )
              (i32.store offset=48
                (get_local $3)
                (i32.const 1)
              )
              (call_indirect $FUNCSIG$viiii
                (get_local $1)
                (get_local $3)
                (i32.load
                  (get_local $2)
                )
                (i32.const 1)
                (i32.add
                  (i32.and
                    (i32.load offset=28
                      (i32.load
                        (get_local $1)
                      )
                    )
                    (i32.const 3)
                  )
                  (i32.const 38)
                )
              )
              (if i32
                (i32.eq
                  (i32.load offset=24
                    (get_local $3)
                  )
                  (i32.const 1)
                )
                (block i32
                  (i32.store
                    (get_local $2)
                    (i32.load offset=16
                      (get_local $3)
                    )
                  )
                  (i32.const 1)
                )
                (i32.const 0)
              )
            )
            (i32.const 0)
          )
          (i32.const 0)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $5)
    )
    (get_local $0)
  )
  (func $__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (if
      (i32.eq
        (get_local $0)
        (i32.load offset=8
          (get_local $1)
        )
      )
      (call $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i
        (get_local $1)
        (get_local $2)
        (get_local $3)
        (get_local $4)
      )
    )
  )
  (func $__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (block $do-once
      (if
        (i32.eq
          (get_local $0)
          (i32.load offset=8
            (get_local $1)
          )
        )
        (if
          (i32.eq
            (i32.load offset=4
              (get_local $1)
            )
            (get_local $2)
          )
          (if
            (i32.ne
              (i32.load
                (tee_local $0
                  (i32.add
                    (get_local $1)
                    (i32.const 28)
                  )
                )
              )
              (i32.const 1)
            )
            (i32.store
              (get_local $0)
              (get_local $3)
            )
          )
        )
        (if
          (i32.eq
            (get_local $0)
            (i32.load
              (get_local $1)
            )
          )
          (block
            (if
              (i32.ne
                (i32.load offset=16
                  (get_local $1)
                )
                (get_local $2)
              )
              (if
                (i32.ne
                  (i32.load
                    (tee_local $0
                      (i32.add
                        (get_local $1)
                        (i32.const 20)
                      )
                    )
                  )
                  (get_local $2)
                )
                (block
                  (i32.store offset=32
                    (get_local $1)
                    (get_local $3)
                  )
                  (i32.store
                    (get_local $0)
                    (get_local $2)
                  )
                  (i32.store
                    (tee_local $0
                      (i32.add
                        (get_local $1)
                        (i32.const 40)
                      )
                    )
                    (i32.add
                      (i32.load
                        (get_local $0)
                      )
                      (i32.const 1)
                    )
                  )
                  (if
                    (i32.eq
                      (i32.load offset=36
                        (get_local $1)
                      )
                      (i32.const 1)
                    )
                    (if
                      (i32.eq
                        (i32.load offset=24
                          (get_local $1)
                        )
                        (i32.const 2)
                      )
                      (i32.store8 offset=54
                        (get_local $1)
                        (i32.const 1)
                      )
                    )
                  )
                  (i32.store offset=44
                    (get_local $1)
                    (i32.const 4)
                  )
                  (br $do-once)
                )
              )
            )
            (if
              (i32.eq
                (get_local $3)
                (i32.const 1)
              )
              (i32.store offset=32
                (get_local $1)
                (i32.const 1)
              )
            )
          )
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (if
      (i32.eq
        (get_local $0)
        (i32.load offset=8
          (get_local $1)
        )
      )
      (call $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi
        (get_local $1)
        (get_local $2)
        (get_local $3)
      )
    )
  )
  (func $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi (param $0 i32) (param $1 i32) (param $2 i32)
    (local $3 i32)
    (local $4 i32)
    (block $do-once
      (if
        (tee_local $4
          (i32.load
            (tee_local $3
              (i32.add
                (get_local $0)
                (i32.const 16)
              )
            )
          )
        )
        (block
          (if
            (i32.ne
              (get_local $4)
              (get_local $1)
            )
            (block
              (i32.store
                (tee_local $1
                  (i32.add
                    (get_local $0)
                    (i32.const 36)
                  )
                )
                (i32.add
                  (i32.load
                    (get_local $1)
                  )
                  (i32.const 1)
                )
              )
              (i32.store offset=24
                (get_local $0)
                (i32.const 2)
              )
              (i32.store8 offset=54
                (get_local $0)
                (i32.const 1)
              )
              (br $do-once)
            )
          )
          (if
            (i32.eq
              (i32.load
                (tee_local $0
                  (i32.add
                    (get_local $0)
                    (i32.const 24)
                  )
                )
              )
              (i32.const 2)
            )
            (i32.store
              (get_local $0)
              (get_local $2)
            )
          )
        )
        (block
          (i32.store
            (get_local $3)
            (get_local $1)
          )
          (i32.store offset=24
            (get_local $0)
            (get_local $2)
          )
          (i32.store offset=36
            (get_local $0)
            (i32.const 1)
          )
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (local $4 i32)
    (i32.store8 offset=53
      (get_local $0)
      (i32.const 1)
    )
    (block $do-once
      (if
        (i32.eq
          (i32.load offset=4
            (get_local $0)
          )
          (get_local $2)
        )
        (block
          (i32.store8 offset=52
            (get_local $0)
            (i32.const 1)
          )
          (if
            (i32.eqz
              (tee_local $4
                (i32.load
                  (tee_local $2
                    (i32.add
                      (get_local $0)
                      (i32.const 16)
                    )
                  )
                )
              )
            )
            (block
              (i32.store
                (get_local $2)
                (get_local $1)
              )
              (i32.store offset=24
                (get_local $0)
                (get_local $3)
              )
              (i32.store offset=36
                (get_local $0)
                (i32.const 1)
              )
              (br_if $do-once
                (i32.eqz
                  (i32.and
                    (i32.eq
                      (get_local $3)
                      (i32.const 1)
                    )
                    (i32.eq
                      (i32.load offset=48
                        (get_local $0)
                      )
                      (i32.const 1)
                    )
                  )
                )
              )
              (i32.store8 offset=54
                (get_local $0)
                (i32.const 1)
              )
              (br $do-once)
            )
          )
          (if
            (i32.ne
              (get_local $4)
              (get_local $1)
            )
            (block
              (i32.store
                (tee_local $1
                  (i32.add
                    (get_local $0)
                    (i32.const 36)
                  )
                )
                (i32.add
                  (i32.load
                    (get_local $1)
                  )
                  (i32.const 1)
                )
              )
              (i32.store8 offset=54
                (get_local $0)
                (i32.const 1)
              )
              (br $do-once)
            )
          )
          (if
            (i32.eq
              (tee_local $1
                (i32.load
                  (tee_local $2
                    (i32.add
                      (get_local $0)
                      (i32.const 24)
                    )
                  )
                )
              )
              (i32.const 2)
            )
            (i32.store
              (get_local $2)
              (get_local $3)
            )
            (set_local $3
              (get_local $1)
            )
          )
          (if
            (i32.and
              (i32.eq
                (get_local $3)
                (i32.const 1)
              )
              (i32.eq
                (i32.load offset=48
                  (get_local $0)
                )
                (i32.const 1)
              )
            )
            (i32.store8 offset=54
              (get_local $0)
              (i32.const 1)
            )
          )
        )
      )
    )
  )
  (func $___dynamic_cast (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (set_local $6
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 64)
      )
    )
    (set_local $4
      (i32.add
        (get_local $0)
        (i32.load
          (i32.add
            (tee_local $2
              (i32.load
                (get_local $0)
              )
            )
            (i32.const -8)
          )
        )
      )
    )
    (set_local $5
      (i32.load
        (i32.add
          (get_local $2)
          (i32.const -4)
        )
      )
    )
    (i32.store
      (tee_local $2
        (get_local $6)
      )
      (get_local $1)
    )
    (i32.store offset=4
      (get_local $2)
      (get_local $0)
    )
    (i32.store offset=8
      (get_local $2)
      (i32.const 1232)
    )
    (set_local $11
      (i32.add
        (get_local $2)
        (i32.const 16)
      )
    )
    (set_local $0
      (i32.add
        (get_local $2)
        (i32.const 20)
      )
    )
    (set_local $7
      (i32.add
        (get_local $2)
        (i32.const 24)
      )
    )
    (set_local $8
      (i32.add
        (get_local $2)
        (i32.const 28)
      )
    )
    (set_local $9
      (i32.add
        (get_local $2)
        (i32.const 32)
      )
    )
    (set_local $10
      (i32.add
        (get_local $2)
        (i32.const 40)
      )
    )
    (i64.store align=4
      (tee_local $3
        (i32.add
          (get_local $2)
          (i32.const 12)
        )
      )
      (i64.const 0)
    )
    (i64.store offset=8 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i64.store offset=16 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i64.store offset=24 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i64.store offset=32 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i32.store16 offset=40
      (get_local $3)
      (i32.const 0)
    )
    (i32.store8 offset=42
      (get_local $3)
      (i32.const 0)
    )
    (block $label$break$L1
      (set_local $0
        (if i32
          (i32.eq
            (get_local $5)
            (get_local $1)
          )
          (block i32
            (i32.store offset=48
              (get_local $2)
              (i32.const 1)
            )
            (call_indirect $FUNCSIG$viiiiii
              (get_local $1)
              (get_local $2)
              (get_local $4)
              (get_local $4)
              (i32.const 1)
              (i32.const 0)
              (i32.add
                (i32.and
                  (i32.load offset=20
                    (i32.load
                      (get_local $1)
                    )
                  )
                  (i32.const 3)
                )
                (i32.const 34)
              )
            )
            (if i32
              (i32.eq
                (i32.load
                  (get_local $7)
                )
                (i32.const 1)
              )
              (get_local $4)
              (i32.const 0)
            )
          )
          (block i32
            (call_indirect $FUNCSIG$viiiii
              (get_local $5)
              (get_local $2)
              (get_local $4)
              (i32.const 1)
              (i32.const 0)
              (i32.add
                (i32.and
                  (i32.load offset=24
                    (i32.load
                      (get_local $5)
                    )
                  )
                  (i32.const 3)
                )
                (i32.const 8)
              )
            )
            (block $switch
              (block $switch-default
                (block $switch-case0
                  (block $switch-case
                    (br_table $switch-case $switch-case0 $switch-default
                      (i32.sub
                        (i32.load offset=36
                          (get_local $2)
                        )
                        (i32.const 0)
                      )
                    )
                  )
                  (set_local $0
                    (i32.load
                      (get_local $0)
                    )
                  )
                  (if
                    (i32.eqz
                      (i32.and
                        (i32.and
                          (i32.eq
                            (i32.load
                              (get_local $10)
                            )
                            (i32.const 1)
                          )
                          (i32.eq
                            (i32.load
                              (get_local $8)
                            )
                            (i32.const 1)
                          )
                        )
                        (i32.eq
                          (i32.load
                            (get_local $9)
                          )
                          (i32.const 1)
                        )
                      )
                    )
                    (set_local $0
                      (i32.const 0)
                    )
                  )
                  (br $label$break$L1)
                )
                (br $switch)
              )
              (set_local $0
                (i32.const 0)
              )
              (br $label$break$L1)
            )
            (if
              (i32.ne
                (i32.load
                  (get_local $7)
                )
                (i32.const 1)
              )
              (if
                (i32.eqz
                  (i32.and
                    (i32.and
                      (i32.eqz
                        (i32.load
                          (get_local $10)
                        )
                      )
                      (i32.eq
                        (i32.load
                          (get_local $8)
                        )
                        (i32.const 1)
                      )
                    )
                    (i32.eq
                      (i32.load
                        (get_local $9)
                      )
                      (i32.const 1)
                    )
                  )
                )
                (block
                  (set_local $0
                    (i32.const 0)
                  )
                  (br $label$break$L1)
                )
              )
            )
            (i32.load
              (get_local $11)
            )
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $6)
    )
    (get_local $0)
  )
  (func $__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (local $6 i32)
    (if
      (i32.eq
        (get_local $0)
        (i32.load offset=8
          (get_local $1)
        )
      )
      (call $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i
        (get_local $1)
        (get_local $2)
        (get_local $3)
        (get_local $4)
      )
      (call_indirect $FUNCSIG$viiiiii
        (tee_local $6
          (i32.load offset=8
            (get_local $0)
          )
        )
        (get_local $1)
        (get_local $2)
        (get_local $3)
        (get_local $4)
        (get_local $5)
        (i32.add
          (i32.and
            (i32.load offset=20
              (i32.load
                (get_local $6)
              )
            )
            (i32.const 3)
          )
          (i32.const 34)
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (block $do-once
      (if
        (i32.eq
          (get_local $0)
          (i32.load offset=8
            (get_local $1)
          )
        )
        (if
          (i32.eq
            (i32.load offset=4
              (get_local $1)
            )
            (get_local $2)
          )
          (if
            (i32.ne
              (i32.load
                (tee_local $0
                  (i32.add
                    (get_local $1)
                    (i32.const 28)
                  )
                )
              )
              (i32.const 1)
            )
            (i32.store
              (get_local $0)
              (get_local $3)
            )
          )
        )
        (block
          (if
            (i32.ne
              (get_local $0)
              (i32.load
                (get_local $1)
              )
            )
            (block
              (call_indirect $FUNCSIG$viiiii
                (tee_local $0
                  (i32.load offset=8
                    (get_local $0)
                  )
                )
                (get_local $1)
                (get_local $2)
                (get_local $3)
                (get_local $4)
                (i32.add
                  (i32.and
                    (i32.load offset=24
                      (i32.load
                        (get_local $0)
                      )
                    )
                    (i32.const 3)
                  )
                  (i32.const 8)
                )
              )
              (br $do-once)
            )
          )
          (if
            (i32.ne
              (i32.load offset=16
                (get_local $1)
              )
              (get_local $2)
            )
            (if
              (i32.ne
                (i32.load
                  (tee_local $5
                    (i32.add
                      (get_local $1)
                      (i32.const 20)
                    )
                  )
                )
                (get_local $2)
              )
              (block
                (i32.store offset=32
                  (get_local $1)
                  (get_local $3)
                )
                (br_if $do-once
                  (i32.eq
                    (i32.load
                      (tee_local $3
                        (i32.add
                          (get_local $1)
                          (i32.const 44)
                        )
                      )
                    )
                    (i32.const 4)
                  )
                )
                (i32.store8
                  (tee_local $6
                    (i32.add
                      (get_local $1)
                      (i32.const 52)
                    )
                  )
                  (i32.const 0)
                )
                (i32.store8
                  (tee_local $7
                    (i32.add
                      (get_local $1)
                      (i32.const 53)
                    )
                  )
                  (i32.const 0)
                )
                (call_indirect $FUNCSIG$viiiiii
                  (tee_local $0
                    (i32.load offset=8
                      (get_local $0)
                    )
                  )
                  (get_local $1)
                  (get_local $2)
                  (get_local $2)
                  (i32.const 1)
                  (get_local $4)
                  (i32.add
                    (i32.and
                      (i32.load offset=20
                        (i32.load
                          (get_local $0)
                        )
                      )
                      (i32.const 3)
                    )
                    (i32.const 34)
                  )
                )
                (i32.store
                  (get_local $3)
                  (tee_local $0
                    (block $__rjto$1 i32
                      (block $__rjti$1
                        (set_local $0
                          (if i32
                            (i32.load8_s
                              (get_local $7)
                            )
                            (block i32
                              (br_if $__rjti$1
                                (i32.load8_s
                                  (get_local $6)
                                )
                              )
                              (i32.const 1)
                            )
                            (i32.const 0)
                          )
                        )
                        (i32.store
                          (get_local $5)
                          (get_local $2)
                        )
                        (i32.store
                          (tee_local $2
                            (i32.add
                              (get_local $1)
                              (i32.const 40)
                            )
                          )
                          (i32.add
                            (i32.load
                              (get_local $2)
                            )
                            (i32.const 1)
                          )
                        )
                        (if
                          (i32.eq
                            (i32.load offset=36
                              (get_local $1)
                            )
                            (i32.const 1)
                          )
                          (if
                            (i32.eq
                              (i32.load offset=24
                                (get_local $1)
                              )
                              (i32.const 2)
                            )
                            (block
                              (i32.store8 offset=54
                                (get_local $1)
                                (i32.const 1)
                              )
                              (br_if $__rjti$1
                                (get_local $0)
                              )
                              (br $__rjto$1
                                (i32.const 4)
                              )
                            )
                          )
                        )
                        (br_if $__rjti$1
                          (get_local $0)
                        )
                        (br $__rjto$1
                          (i32.const 4)
                        )
                      )
                      (i32.const 3)
                    )
                  )
                )
                (br $do-once)
              )
            )
          )
          (if
            (i32.eq
              (get_local $3)
              (i32.const 1)
            )
            (i32.store offset=32
              (get_local $1)
              (i32.const 1)
            )
          )
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (local $4 i32)
    (if
      (i32.eq
        (get_local $0)
        (i32.load offset=8
          (get_local $1)
        )
      )
      (call $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi
        (get_local $1)
        (get_local $2)
        (get_local $3)
      )
      (call_indirect $FUNCSIG$viiii
        (tee_local $4
          (i32.load offset=8
            (get_local $0)
          )
        )
        (get_local $1)
        (get_local $2)
        (get_local $3)
        (i32.add
          (i32.and
            (i32.load offset=28
              (i32.load
                (get_local $4)
              )
            )
            (i32.const 3)
          )
          (i32.const 38)
        )
      )
    )
  )
  (func $__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev
    (local $0 i32)
    (local $1 i32)
    (set_local $0
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $1
      (get_local $0)
    )
    (if
      (call $_pthread_key_create
        (i32.const 6880)
        (i32.const 8)
      )
      (call $_abort_message
        (i32.const 5950)
        (get_local $1)
      )
      (set_global $STACKTOP
        (get_local $0)
      )
    )
  )
  (func $__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $2
      (get_local $1)
    )
    (call $_free
      (get_local $0)
    )
    (if
      (call $_pthread_setspecific
        (i32.load
          (i32.const 6880)
        )
        (i32.const 0)
      )
      (call $_abort_message
        (i32.const 6000)
        (get_local $2)
      )
      (set_global $STACKTOP
        (get_local $1)
      )
    )
  )
  (func $__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (i32.eq
      (get_local $0)
      (get_local $1)
    )
  )
  (func $__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (if
      (i32.eq
        (get_local $0)
        (i32.load offset=8
          (get_local $1)
        )
      )
      (call $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i
        (get_local $1)
        (get_local $2)
        (get_local $3)
        (get_local $4)
      )
      (block
        (set_local $9
          (i32.and
            (tee_local $7
              (i32.load16_s
                (tee_local $6
                  (i32.add
                    (get_local $1)
                    (i32.const 52)
                  )
                )
              )
            )
            (i32.const 255)
          )
        )
        (set_local $10
          (i32.and
            (i32.shr_u
              (i32.and
                (get_local $7)
                (i32.const 65535)
              )
              (i32.const 8)
            )
            (i32.const 255)
          )
        )
        (set_local $11
          (i32.add
            (i32.add
              (get_local $0)
              (i32.const 16)
            )
            (i32.shl
              (tee_local $8
                (i32.load offset=12
                  (get_local $0)
                )
              )
              (i32.const 3)
            )
          )
        )
        (i32.store8
          (get_local $6)
          (i32.const 0)
        )
        (i32.store8
          (tee_local $7
            (i32.add
              (get_local $1)
              (i32.const 53)
            )
          )
          (i32.const 0)
        )
        (call $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib
          (i32.add
            (get_local $0)
            (i32.const 16)
          )
          (get_local $1)
          (get_local $2)
          (get_local $3)
          (get_local $4)
          (get_local $5)
        )
        (block $label$break$L4
          (if
            (i32.gt_s
              (get_local $8)
              (i32.const 1)
            )
            (block
              (set_local $12
                (i32.add
                  (get_local $1)
                  (i32.const 24)
                )
              )
              (set_local $8
                (i32.add
                  (get_local $0)
                  (i32.const 8)
                )
              )
              (set_local $13
                (i32.add
                  (get_local $1)
                  (i32.const 54)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 24)
                )
              )
              (loop $while-in
                (br_if $label$break$L4
                  (i32.load8_s
                    (get_local $13)
                  )
                )
                (if
                  (i32.shr_s
                    (i32.shl
                      (i32.and
                        (tee_local $14
                          (i32.load16_s
                            (get_local $6)
                          )
                        )
                        (i32.const 255)
                      )
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                  (block
                    (br_if $label$break$L4
                      (i32.eq
                        (i32.load
                          (get_local $12)
                        )
                        (i32.const 1)
                      )
                    )
                    (br_if $label$break$L4
                      (i32.eqz
                        (i32.and
                          (i32.load
                            (get_local $8)
                          )
                          (i32.const 2)
                        )
                      )
                    )
                  )
                  (if
                    (i32.ge_s
                      (i32.and
                        (get_local $14)
                        (i32.const 65535)
                      )
                      (i32.const 256)
                    )
                    (br_if $label$break$L4
                      (i32.eqz
                        (i32.and
                          (i32.load
                            (get_local $8)
                          )
                          (i32.const 1)
                        )
                      )
                    )
                  )
                )
                (i32.store8
                  (get_local $6)
                  (i32.const 0)
                )
                (i32.store8
                  (get_local $7)
                  (i32.const 0)
                )
                (call $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib
                  (get_local $0)
                  (get_local $1)
                  (get_local $2)
                  (get_local $3)
                  (get_local $4)
                  (get_local $5)
                )
                (br_if $while-in
                  (i32.lt_u
                    (tee_local $0
                      (i32.add
                        (get_local $0)
                        (i32.const 8)
                      )
                    )
                    (get_local $11)
                  )
                )
              )
            )
          )
        )
        (i32.store8
          (get_local $6)
          (get_local $9)
        )
        (i32.store8
          (get_local $7)
          (get_local $10)
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (block $label$break$L1
      (if
        (i32.eq
          (get_local $0)
          (i32.load offset=8
            (get_local $1)
          )
        )
        (if
          (i32.eq
            (i32.load offset=4
              (get_local $1)
            )
            (get_local $2)
          )
          (if
            (i32.ne
              (i32.load
                (tee_local $0
                  (i32.add
                    (get_local $1)
                    (i32.const 28)
                  )
                )
              )
              (i32.const 1)
            )
            (i32.store
              (get_local $0)
              (get_local $3)
            )
          )
        )
        (block
          (if
            (i32.ne
              (get_local $0)
              (i32.load
                (get_local $1)
              )
            )
            (block
              (set_local $5
                (i32.load offset=12
                  (get_local $0)
                )
              )
              (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
                (i32.add
                  (get_local $0)
                  (i32.const 16)
                )
                (get_local $1)
                (get_local $2)
                (get_local $3)
                (get_local $4)
              )
              (br_if $label$break$L1
                (i32.le_s
                  (get_local $5)
                  (i32.const 1)
                )
              )
              (set_local $6
                (i32.add
                  (i32.add
                    (get_local $0)
                    (i32.const 16)
                  )
                  (i32.shl
                    (get_local $5)
                    (i32.const 3)
                  )
                )
              )
              (set_local $5
                (i32.add
                  (get_local $0)
                  (i32.const 24)
                )
              )
              (if
                (i32.eqz
                  (i32.and
                    (tee_local $0
                      (i32.load offset=8
                        (get_local $0)
                      )
                    )
                    (i32.const 2)
                  )
                )
                (if
                  (i32.ne
                    (i32.load
                      (tee_local $7
                        (i32.add
                          (get_local $1)
                          (i32.const 36)
                        )
                      )
                    )
                    (i32.const 1)
                  )
                  (block
                    (if
                      (i32.eqz
                        (i32.and
                          (get_local $0)
                          (i32.const 1)
                        )
                      )
                      (block
                        (set_local $0
                          (i32.add
                            (get_local $1)
                            (i32.const 54)
                          )
                        )
                        (loop $while-in
                          (br_if $label$break$L1
                            (i32.load8_s
                              (get_local $0)
                            )
                          )
                          (br_if $label$break$L1
                            (i32.eq
                              (i32.load
                                (get_local $7)
                              )
                              (i32.const 1)
                            )
                          )
                          (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
                            (get_local $5)
                            (get_local $1)
                            (get_local $2)
                            (get_local $3)
                            (get_local $4)
                          )
                          (br_if $while-in
                            (i32.lt_u
                              (tee_local $5
                                (i32.add
                                  (get_local $5)
                                  (i32.const 8)
                                )
                              )
                              (get_local $6)
                            )
                          )
                          (br $label$break$L1)
                        )
                      )
                    )
                    (set_local $8
                      (i32.add
                        (get_local $1)
                        (i32.const 24)
                      )
                    )
                    (set_local $0
                      (i32.add
                        (get_local $1)
                        (i32.const 54)
                      )
                    )
                    (loop $while-in1
                      (br_if $label$break$L1
                        (i32.load8_s
                          (get_local $0)
                        )
                      )
                      (if
                        (i32.eq
                          (i32.load
                            (get_local $7)
                          )
                          (i32.const 1)
                        )
                        (br_if $label$break$L1
                          (i32.eq
                            (i32.load
                              (get_local $8)
                            )
                            (i32.const 1)
                          )
                        )
                      )
                      (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
                        (get_local $5)
                        (get_local $1)
                        (get_local $2)
                        (get_local $3)
                        (get_local $4)
                      )
                      (br_if $while-in1
                        (i32.lt_u
                          (tee_local $5
                            (i32.add
                              (get_local $5)
                              (i32.const 8)
                            )
                          )
                          (get_local $6)
                        )
                      )
                      (br $label$break$L1)
                    )
                  )
                )
              )
              (set_local $0
                (i32.add
                  (get_local $1)
                  (i32.const 54)
                )
              )
              (loop $while-in3
                (br_if $label$break$L1
                  (i32.load8_s
                    (get_local $0)
                  )
                )
                (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
                  (get_local $5)
                  (get_local $1)
                  (get_local $2)
                  (get_local $3)
                  (get_local $4)
                )
                (br_if $while-in3
                  (i32.lt_u
                    (tee_local $5
                      (i32.add
                        (get_local $5)
                        (i32.const 8)
                      )
                    )
                    (get_local $6)
                  )
                )
                (br $label$break$L1)
              )
            )
          )
          (if
            (i32.ne
              (i32.load offset=16
                (get_local $1)
              )
              (get_local $2)
            )
            (if
              (i32.ne
                (i32.load
                  (tee_local $6
                    (i32.add
                      (get_local $1)
                      (i32.const 20)
                    )
                  )
                )
                (get_local $2)
              )
              (block
                (i32.store offset=32
                  (get_local $1)
                  (get_local $3)
                )
                (br_if $label$break$L1
                  (i32.eq
                    (i32.load
                      (tee_local $7
                        (i32.add
                          (get_local $1)
                          (i32.const 44)
                        )
                      )
                    )
                    (i32.const 4)
                  )
                )
                (set_local $8
                  (i32.add
                    (i32.add
                      (get_local $0)
                      (i32.const 16)
                    )
                    (i32.shl
                      (tee_local $3
                        (i32.load offset=12
                          (get_local $0)
                        )
                      )
                      (i32.const 3)
                    )
                  )
                )
                (set_local $9
                  (i32.add
                    (get_local $1)
                    (i32.const 52)
                  )
                )
                (set_local $10
                  (i32.add
                    (get_local $1)
                    (i32.const 53)
                  )
                )
                (set_local $11
                  (i32.add
                    (get_local $1)
                    (i32.const 54)
                  )
                )
                (set_local $12
                  (i32.add
                    (get_local $0)
                    (i32.const 8)
                  )
                )
                (set_local $13
                  (i32.add
                    (get_local $1)
                    (i32.const 24)
                  )
                )
                (block $__rjto$2
                  (block $__rjti$2
                    (block $__rjti$1
                      (if
                        (i32.gt_s
                          (get_local $3)
                          (i32.const 0)
                        )
                        (block
                          (set_local $3
                            (i32.const 0)
                          )
                          (set_local $5
                            (i32.const 0)
                          )
                          (set_local $0
                            (i32.add
                              (get_local $0)
                              (i32.const 16)
                            )
                          )
                          (loop $label$continue$L36
                            (block $label$break$L36
                              (i32.store8
                                (get_local $9)
                                (i32.const 0)
                              )
                              (i32.store8
                                (get_local $10)
                                (i32.const 0)
                              )
                              (call $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib
                                (get_local $0)
                                (get_local $1)
                                (get_local $2)
                                (get_local $2)
                                (i32.const 1)
                                (get_local $4)
                              )
                              (if
                                (i32.load8_s
                                  (get_local $11)
                                )
                                (block
                                  (set_local $0
                                    (get_local $5)
                                  )
                                  (br $label$break$L36)
                                )
                              )
                              (block $do-once
                                (if
                                  (i32.load8_s
                                    (get_local $10)
                                  )
                                  (block
                                    (if
                                      (i32.eqz
                                        (i32.load8_s
                                          (get_local $9)
                                        )
                                      )
                                      (if
                                        (i32.and
                                          (i32.load
                                            (get_local $12)
                                          )
                                          (i32.const 1)
                                        )
                                        (block
                                          (set_local $5
                                            (i32.const 1)
                                          )
                                          (br $do-once)
                                        )
                                        (block
                                          (set_local $0
                                            (i32.const 1)
                                          )
                                          (br $label$break$L36)
                                        )
                                      )
                                    )
                                    (br_if $__rjti$2
                                      (i32.eq
                                        (i32.load
                                          (get_local $13)
                                        )
                                        (i32.const 1)
                                      )
                                    )
                                    (br_if $__rjti$2
                                      (i32.eqz
                                        (i32.and
                                          (i32.load
                                            (get_local $12)
                                          )
                                          (i32.const 2)
                                        )
                                      )
                                    )
                                    (set_local $3
                                      (i32.const 1)
                                    )
                                    (set_local $5
                                      (i32.const 1)
                                    )
                                  )
                                )
                              )
                              (br_if $label$continue$L36
                                (i32.lt_u
                                  (tee_local $0
                                    (i32.add
                                      (get_local $0)
                                      (i32.const 8)
                                    )
                                  )
                                  (get_local $8)
                                )
                              )
                              (set_local $0
                                (get_local $5)
                              )
                            )
                          )
                          (br_if $__rjti$1
                            (get_local $3)
                          )
                        )
                        (set_local $0
                          (i32.const 0)
                        )
                      )
                      (i32.store
                        (get_local $6)
                        (get_local $2)
                      )
                      (i32.store
                        (tee_local $2
                          (i32.add
                            (get_local $1)
                            (i32.const 40)
                          )
                        )
                        (i32.add
                          (i32.load
                            (get_local $2)
                          )
                          (i32.const 1)
                        )
                      )
                      (br_if $__rjti$1
                        (i32.ne
                          (i32.load offset=36
                            (get_local $1)
                          )
                          (i32.const 1)
                        )
                      )
                      (br_if $__rjti$1
                        (i32.ne
                          (i32.load
                            (get_local $13)
                          )
                          (i32.const 2)
                        )
                      )
                      (i32.store8
                        (get_local $11)
                        (i32.const 1)
                      )
                      (br_if $__rjti$2
                        (get_local $0)
                      )
                      (set_local $0
                        (i32.const 4)
                      )
                      (br $__rjto$2)
                    )
                    (br_if $__rjti$2
                      (get_local $0)
                    )
                    (set_local $0
                      (i32.const 4)
                    )
                    (br $__rjto$2)
                  )
                  (set_local $0
                    (i32.const 3)
                  )
                )
                (i32.store
                  (get_local $7)
                  (get_local $0)
                )
                (br $label$break$L1)
              )
            )
          )
          (if
            (i32.eq
              (get_local $3)
              (i32.const 1)
            )
            (i32.store offset=32
              (get_local $1)
              (i32.const 1)
            )
          )
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (local $4 i32)
    (local $5 i32)
    (block $label$break$L1
      (if
        (i32.eq
          (get_local $0)
          (i32.load offset=8
            (get_local $1)
          )
        )
        (call $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi
          (get_local $1)
          (get_local $2)
          (get_local $3)
        )
        (block
          (set_local $5
            (i32.add
              (i32.add
                (get_local $0)
                (i32.const 16)
              )
              (i32.shl
                (tee_local $4
                  (i32.load offset=12
                    (get_local $0)
                  )
                )
                (i32.const 3)
              )
            )
          )
          (call $__ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi
            (i32.add
              (get_local $0)
              (i32.const 16)
            )
            (get_local $1)
            (get_local $2)
            (get_local $3)
          )
          (if
            (i32.gt_s
              (get_local $4)
              (i32.const 1)
            )
            (block
              (set_local $4
                (i32.add
                  (get_local $1)
                  (i32.const 54)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 24)
                )
              )
              (loop $while-in
                (call $__ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi
                  (get_local $0)
                  (get_local $1)
                  (get_local $2)
                  (get_local $3)
                )
                (br_if $label$break$L1
                  (i32.load8_s
                    (get_local $4)
                  )
                )
                (br_if $while-in
                  (i32.lt_u
                    (tee_local $0
                      (i32.add
                        (get_local $0)
                        (i32.const 8)
                      )
                    )
                    (get_local $5)
                  )
                )
              )
            )
          )
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (set_local $4
      (i32.shr_s
        (tee_local $5
          (i32.load offset=4
            (get_local $0)
          )
        )
        (i32.const 8)
      )
    )
    (if
      (i32.and
        (get_local $5)
        (i32.const 1)
      )
      (set_local $4
        (i32.load
          (i32.add
            (i32.load
              (get_local $2)
            )
            (get_local $4)
          )
        )
      )
    )
    (set_local $6
      (i32.load offset=28
        (i32.load
          (tee_local $0
            (i32.load
              (get_local $0)
            )
          )
        )
      )
    )
    (call_indirect $FUNCSIG$viiii
      (get_local $0)
      (get_local $1)
      (i32.add
        (get_local $2)
        (get_local $4)
      )
      (if i32
        (i32.and
          (get_local $5)
          (i32.const 2)
        )
        (get_local $3)
        (i32.const 2)
      )
      (i32.add
        (i32.and
          (get_local $6)
          (i32.const 3)
        )
        (i32.const 38)
      )
    )
  )
  (func $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (set_local $6
      (i32.shr_s
        (tee_local $7
          (i32.load offset=4
            (get_local $0)
          )
        )
        (i32.const 8)
      )
    )
    (if
      (i32.and
        (get_local $7)
        (i32.const 1)
      )
      (set_local $6
        (i32.load
          (i32.add
            (i32.load
              (get_local $3)
            )
            (get_local $6)
          )
        )
      )
    )
    (set_local $8
      (i32.load offset=20
        (i32.load
          (tee_local $0
            (i32.load
              (get_local $0)
            )
          )
        )
      )
    )
    (call_indirect $FUNCSIG$viiiiii
      (get_local $0)
      (get_local $1)
      (get_local $2)
      (i32.add
        (get_local $3)
        (get_local $6)
      )
      (if i32
        (i32.and
          (get_local $7)
          (i32.const 2)
        )
        (get_local $4)
        (i32.const 2)
      )
      (get_local $5)
      (i32.add
        (i32.and
          (get_local $8)
          (i32.const 3)
        )
        (i32.const 34)
      )
    )
  )
  (func $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (set_local $5
      (i32.shr_s
        (tee_local $6
          (i32.load offset=4
            (get_local $0)
          )
        )
        (i32.const 8)
      )
    )
    (if
      (i32.and
        (get_local $6)
        (i32.const 1)
      )
      (set_local $5
        (i32.load
          (i32.add
            (i32.load
              (get_local $2)
            )
            (get_local $5)
          )
        )
      )
    )
    (set_local $7
      (i32.load offset=24
        (i32.load
          (tee_local $0
            (i32.load
              (get_local $0)
            )
          )
        )
      )
    )
    (call_indirect $FUNCSIG$viiiii
      (get_local $0)
      (get_local $1)
      (i32.add
        (get_local $2)
        (get_local $5)
      )
      (if i32
        (i32.and
          (get_local $6)
          (i32.const 2)
        )
        (get_local $3)
        (i32.const 2)
      )
      (get_local $4)
      (i32.add
        (i32.and
          (get_local $7)
          (i32.const 3)
        )
        (i32.const 8)
      )
    )
  )
  (func $___cxa_can_catch (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (set_local $3
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (i32.store
      (tee_local $4
        (get_local $3)
      )
      (i32.load
        (get_local $2)
      )
    )
    (if
      (tee_local $0
        (call_indirect $FUNCSIG$iiii
          (get_local $0)
          (get_local $1)
          (get_local $4)
          (i32.add
            (i32.and
              (i32.load offset=16
                (i32.load
                  (get_local $0)
                )
              )
              (i32.const 7)
            )
            (i32.const 0)
          )
        )
      )
      (i32.store
        (get_local $2)
        (i32.load
          (get_local $4)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $3)
    )
    (i32.and
      (get_local $0)
      (i32.const 1)
    )
  )
  (func $___cxa_is_pointer_type (param $0 i32) (result i32)
    (i32.and
      (if i32
        (get_local $0)
        (i32.ne
          (call $___dynamic_cast
            (get_local $0)
            (i32.const 1288)
          )
          (i32.const 0)
        )
        (i32.const 0)
      )
      (i32.const 1)
    )
  )
  (func $runPostSets
    (nop)
  )
  (func $_memset (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $4
      (i32.add
        (get_local $0)
        (get_local $2)
      )
    )
    (if
      (i32.ge_s
        (get_local $2)
        (i32.const 20)
      )
      (block
        (set_local $1
          (i32.and
            (get_local $1)
            (i32.const 255)
          )
        )
        (if
          (tee_local $3
            (i32.and
              (get_local $0)
              (i32.const 3)
            )
          )
          (block
            (set_local $3
              (i32.sub
                (i32.add
                  (get_local $0)
                  (i32.const 4)
                )
                (get_local $3)
              )
            )
            (loop $while-in
              (if
                (i32.lt_s
                  (get_local $0)
                  (get_local $3)
                )
                (block
                  (i32.store8
                    (get_local $0)
                    (get_local $1)
                  )
                  (set_local $0
                    (i32.add
                      (get_local $0)
                      (i32.const 1)
                    )
                  )
                  (br $while-in)
                )
              )
            )
          )
        )
        (set_local $3
          (i32.or
            (i32.or
              (i32.or
                (get_local $1)
                (i32.shl
                  (get_local $1)
                  (i32.const 8)
                )
              )
              (i32.shl
                (get_local $1)
                (i32.const 16)
              )
            )
            (i32.shl
              (get_local $1)
              (i32.const 24)
            )
          )
        )
        (set_local $5
          (i32.and
            (get_local $4)
            (i32.const -4)
          )
        )
        (loop $while-in1
          (if
            (i32.lt_s
              (get_local $0)
              (get_local $5)
            )
            (block
              (i32.store
                (get_local $0)
                (get_local $3)
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 4)
                )
              )
              (br $while-in1)
            )
          )
        )
      )
    )
    (loop $while-in3
      (if
        (i32.lt_s
          (get_local $0)
          (get_local $4)
        )
        (block
          (i32.store8
            (get_local $0)
            (get_local $1)
          )
          (set_local $0
            (i32.add
              (get_local $0)
              (i32.const 1)
            )
          )
          (br $while-in3)
        )
      )
    )
    (i32.sub
      (get_local $0)
      (get_local $2)
    )
  )
  (func $_memcpy (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (if
      (i32.ge_s
        (get_local $2)
        (i32.const 4096)
      )
      (return
        (call $_emscripten_memcpy_big
          (get_local $0)
          (get_local $1)
          (get_local $2)
        )
      )
    )
    (set_local $3
      (get_local $0)
    )
    (if
      (i32.eq
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.and
          (get_local $1)
          (i32.const 3)
        )
      )
      (block
        (loop $while-in
          (if
            (i32.and
              (get_local $0)
              (i32.const 3)
            )
            (block
              (if
                (i32.eqz
                  (get_local $2)
                )
                (return
                  (get_local $3)
                )
              )
              (i32.store8
                (get_local $0)
                (i32.load8_s
                  (get_local $1)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 1)
                )
              )
              (set_local $1
                (i32.add
                  (get_local $1)
                  (i32.const 1)
                )
              )
              (set_local $2
                (i32.sub
                  (get_local $2)
                  (i32.const 1)
                )
              )
              (br $while-in)
            )
          )
        )
        (loop $while-in1
          (if
            (i32.ge_s
              (get_local $2)
              (i32.const 4)
            )
            (block
              (i32.store
                (get_local $0)
                (i32.load
                  (get_local $1)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 4)
                )
              )
              (set_local $1
                (i32.add
                  (get_local $1)
                  (i32.const 4)
                )
              )
              (set_local $2
                (i32.sub
                  (get_local $2)
                  (i32.const 4)
                )
              )
              (br $while-in1)
            )
          )
        )
      )
    )
    (loop $while-in3
      (if
        (i32.gt_s
          (get_local $2)
          (i32.const 0)
        )
        (block
          (i32.store8
            (get_local $0)
            (i32.load8_s
              (get_local $1)
            )
          )
          (set_local $0
            (i32.add
              (get_local $0)
              (i32.const 1)
            )
          )
          (set_local $1
            (i32.add
              (get_local $1)
              (i32.const 1)
            )
          )
          (set_local $2
            (i32.sub
              (get_local $2)
              (i32.const 1)
            )
          )
          (br $while-in3)
        )
      )
    )
    (get_local $3)
  )
  (func $_sbrk (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (i32.add
        (tee_local $2
          (i32.load
            (get_global $DYNAMICTOP_PTR)
          )
        )
        (tee_local $0
          (i32.and
            (i32.add
              (get_local $0)
              (i32.const 15)
            )
            (i32.const -16)
          )
        )
      )
    )
    (if
      (i32.or
        (i32.and
          (i32.gt_s
            (get_local $0)
            (i32.const 0)
          )
          (i32.lt_s
            (get_local $1)
            (get_local $2)
          )
        )
        (i32.lt_s
          (get_local $1)
          (i32.const 0)
        )
      )
      (block
        (drop
          (call $abortOnCannotGrowMemory)
        )
        (call $___setErrNo
          (i32.const 12)
        )
        (return
          (i32.const -1)
        )
      )
    )
    (i32.store
      (get_global $DYNAMICTOP_PTR)
      (get_local $1)
    )
    (if
      (i32.gt_s
        (get_local $1)
        (call $getTotalMemory)
      )
      (if
        (i32.eqz
          (call $enlargeMemory)
        )
        (block
          (call $___setErrNo
            (i32.const 12)
          )
          (i32.store
            (get_global $DYNAMICTOP_PTR)
            (get_local $2)
          )
          (return
            (i32.const -1)
          )
        )
      )
    )
    (get_local $2)
  )
  (func $dynCall_iiii (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
    (call_indirect $FUNCSIG$iiii
      (get_local $1)
      (get_local $2)
      (get_local $3)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 7)
        )
        (i32.const 0)
      )
    )
  )
  (func $dynCall_viiiii (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (call_indirect $FUNCSIG$viiiii
      (get_local $1)
      (get_local $2)
      (get_local $3)
      (get_local $4)
      (get_local $5)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 8)
      )
    )
  )
  (func $dynCall_vi (param $0 i32) (param $1 i32)
    (call_indirect $FUNCSIG$vi
      (get_local $1)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 15)
        )
        (i32.const 12)
      )
    )
  )
  (func $dynCall_ii (param $0 i32) (param $1 i32) (result i32)
    (call_indirect $FUNCSIG$ii
      (get_local $1)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 1)
        )
        (i32.const 28)
      )
    )
  )
  (func $dynCall_v (param $0 i32)
    (call_indirect $FUNCSIG$v
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 30)
      )
    )
  )
  (func $dynCall_viiiiii (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (param $6 i32)
    (call_indirect $FUNCSIG$viiiiii
      (get_local $1)
      (get_local $2)
      (get_local $3)
      (get_local $4)
      (get_local $5)
      (get_local $6)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 34)
      )
    )
  )
  (func $dynCall_viiii (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (call_indirect $FUNCSIG$viiii
      (get_local $1)
      (get_local $2)
      (get_local $3)
      (get_local $4)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 38)
      )
    )
  )
  (func $b0 (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (call $abort
      (i32.const 0)
    )
    (i32.const 0)
  )
  (func $b1 (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (call $abort
      (i32.const 1)
    )
  )
  (func $b2 (param $0 i32)
    (call $abort
      (i32.const 2)
    )
  )
  (func $b3 (param $0 i32) (result i32)
    (call $abort
      (i32.const 3)
    )
    (i32.const 0)
  )
  (func $b4
    (call $abort
      (i32.const 4)
    )
  )
  (func $b5 (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (call $abort
      (i32.const 5)
    )
  )
  (func $b6 (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (call $abort
      (i32.const 6)
    )
  )
)
