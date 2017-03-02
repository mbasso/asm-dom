
#include <emscripten.h>

extern "C" {

// Not using size_t for array indices as the values used by the javascript code are signed.
void array_bounds_check(const int array_size, const int array_idx) {
  if (array_idx < 0 || array_idx >= array_size) {
    EM_ASM_INT({
      throw 'Array index ' + $0 + ' out of bounds: [0,' + $1 + ')';
    }, array_idx, array_size);
  }
}

// H

VNode* EMSCRIPTEN_KEEPALIVE emscripten_bind_H_h_1(H* self, char* arg0) {
  return self->h(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_H___destroy___0(H* self) {
  delete self;
}

// VoidPtr

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VoidPtr___destroy___0(void** self) {
  delete self;
}

// VNodeData

const char* EMSCRIPTEN_KEEPALIVE emscripten_bind_VNodeData_get_key_0(VNodeData* self) {
  return self->key;
}

const void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNodeData_set_key_1(VNodeData* self, char* arg0) {
  self->key = arg0;
}

const char* EMSCRIPTEN_KEEPALIVE emscripten_bind_VNodeData_get_ns_0(VNodeData* self) {
  return self->ns;
}

const void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNodeData_set_ns_1(VNodeData* self, char* arg0) {
  self->ns = arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNodeData___destroy___0(VNodeData* self) {
  delete self;
}

// VNode

const char* EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_get_sel_0(VNode* self) {
  return self->sel;
}

const void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_set_sel_1(VNode* self, char* arg0) {
  self->sel = arg0;
}

const char* EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_get_key_0(VNode* self) {
  return self->key;
}

const void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_set_key_1(VNode* self, char* arg0) {
  self->key = arg0;
}

const char* EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_get_text_0(VNode* self) {
  return self->text;
}

const void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_set_text_1(VNode* self, char* arg0) {
  self->text = arg0;
}

VNodeData* EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_get_data_0(VNode* self) {
  return self->data;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_set_data_1(VNode* self, VNodeData* arg0) {
  self->data = arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode___destroy___0(VNode* self) {
  delete self;
}

}

