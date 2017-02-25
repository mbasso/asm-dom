#ifndef VNode_hpp
#define VNode_hpp

class VNode {
  char* sel;
  char* key;
  // char* text;
  // data: VNodeData | undefined;
  // elm: Node | undefined;
  // children: Array<VNode | string> | undefined;

  public:
      VNode (char* selector, char* nodeKey);

      char* getName();
      void setName(char* selector);

      char* getKey();
      void setKey(char* nodeKey);

      void render(VNode* node);
};

#endif