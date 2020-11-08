import init from '../';
import setup from '../../setup';

describe('h (cpp)', function test() {
  this.timeout(30000);

  let app;

  before((done) => {
    setup();
    init().then((res) => {
      app = res;
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

  // test only:
  // should get a vnode

  it('should delete a vnode', () => {
    app.shouldDeleteAVNode();
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

  it('should create a vnode for fragment', () => {
    app.shouldCreateAVNodeForFragment();
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
