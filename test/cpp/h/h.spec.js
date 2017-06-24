import init from '../';

describe('h (cpp)', function test() {
  this.timeout(30000);

  let app;

  before((done) => {
    init().then((asmApp) => {
      app = asmApp;
      done();
    });
  });

  beforeEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
  });

  // TODO : should get a vnode

  it('should delete a vnode', () => {
    app.shouldDeleteAVNode();
  });

  it('should remove a child', () => {
    app.shouldRemoveAChild();
  });

  it('should replace a child', () => {
    app.shouldReplaceAChild();
  });

  // js only:
  // should create vnode with tag, attrs and elm

  it('should create a vnode with a proper tag', () => {
    app.shouldCreateAVNodeWithAProperTag();
  });

  it('should create a vnode with children', () => {
    app.shouldCreateAVNodeWithChildren();
  });

  it('should create a vnode with one child', () => {
    app.shouldCreateAVNodeWithOneChild();
  });

  it('should create a vnode with attrs and one child', () => {
    app.shouldCreateAVNodeWithAttrsAndOneChild();
  });

  // js only:
  // should create a vnode with text content

  it('should create a vnode with text content in string', () => {
    app.shouldCreateAVNodeWithTextContentInString();
  });

  it('should create a vnode for comment', () => {
    app.shouldCreateAVNodeForComment();
  });

  it('should create a vnode with attrs and text content in string', () => {
    app.shouldCreateAVNodeWithAttrsAndTextContentInString();
  });

  it('should create a vnode with attrs and children', () => {
    app.shouldCreateAVNodeWithAttrsAndChildren();
  });

  it('should create a vnode with text', () => {
    app.shouldCreateAVNodeWithText();
  });

  it('should create a vnode with attrs', () => {
    app.shouldCreateAVNodeWithAttrs();
  });

  it('should create a vnode with props', () => {
    app.shouldCreateAVNodeWithProps();
  });

  it('should create a vnode with callbacks', () => {
    app.shouldCreateAVNodeWithCallbacks();
  });

  it('should create a vnode with attrs and props', () => {
    app.shouldCreateAVNodeWithAttrsAndProps();
  });

  it('should create a vnode with attrs and callbacks', () => {
    app.shouldCreateAVNodeWithAttrsAndCallbacks();
  });

  it('should create a vnode with props and callbacks', () => {
    app.shouldCreateAVNodeWithPropsAndCallbacks();
  });

  it('should create a vnode with attrs, props and callbacks', () => {
    app.shouldCreateAVNodeWithAttrsPropsAndCallbacks();
  });

  // js only:
  // should create a vnode with raw

  // error at compile time:
  // should throw if invalid arguments are provided
});
