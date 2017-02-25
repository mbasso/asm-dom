
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

// VoidPtr

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VoidPtr___destroy___0(void** self) {
  delete self;
}

// VNode

VNode* EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_VNode_2(char* arg0, char* arg1) {
  return new VNode(arg0, arg1);
}

char* EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_getName_0(VNode* self) {
  return self->getName();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_setName_1(VNode* self, char* arg0) {
  self->setName(arg0);
}

char* EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_getKey_0(VNode* self) {
  return self->getKey();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_setKey_1(VNode* self, char* arg0) {
  self->setKey(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode_render_1(VNode* self, VNode* arg0) {
  self->render(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VNode___destroy___0(VNode* self) {
  delete self;
}

}

