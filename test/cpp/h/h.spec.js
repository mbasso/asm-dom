import expect from 'expect';
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

  // TODO : should get a vnode

  it('should delete a vnode', () => {
    expect(
      () => app.shouldDeleteAVNode(),
    ).toNotThrow();
  });

  // TODO : should remove a child
  // TODO : should replace a child
  // TODO : should create vnode with tag, attrs and elm

  it('should create a vnode with a proper tag', () => {
    expect(() => {
      app.shouldCreateAVNodeWithAProperTag();
    }).toNotThrow();
  });

  it('should create a vnode with children', () => {
    expect(() => {
      app.shouldCreateAVNodeWithChildren();
    }).toNotThrow();
  });

  it('should create a vnode with one child', () => {
    expect(() => {
      app.shouldCreateAVNodeWithOneChild();
    }).toNotThrow();
  });

  it('should create a vnode with attrs and one child', () => {
    expect(() => {
      app.shouldCreateAVNodeWithAttrsAndOneChild();
    }).toNotThrow();
  });

  // js only:
  // should create a vnode with text content

  it('should create a vnode with text content in string', () => {
    expect(() => {
      app.shouldCreateAVNodeWithTextContentInString();
    }).toNotThrow();
  });

  it('should create a vnode for comment', () => {
    expect(() => {
      app.shouldCreateAVNodeForComment();
    }).toNotThrow();
  });

  it('should create a vnode with attrs and text content in string', () => {
    expect(() => {
      app.shouldCreateAVNodeWithAttrsAndTextContentInString();
    }).toNotThrow();
  });

  it('should create a vnode with attrs and children', () => {
    expect(() => {
      app.shouldCreateAVNodeWithAttrsAndChildren();
    }).toNotThrow();
  });

  it('should create a vnode with text', () => {
    expect(() => {
      app.shouldCreateAVNodeWithText();
    }).toNotThrow();
  });

  it('should create a vnode with attrs', () => {
    expect(() => {
      app.shouldCreateAVNodeWithAttrs();
    }).toNotThrow();
  });

  it('should create a vnode with props', () => {
    expect(() => {
      app.shouldCreateAVNodeWithProps();
    }).toNotThrow();
  });

  it('should create a vnode with callbacks', () => {
    expect(() => {
      app.shouldCreateAVNodeWithCallbacks();
    }).toNotThrow();
  });

  it('should create a vnode with attrs and props', () => {
    expect(() => {
      app.shouldCreateAVNodeWithAttrsAndProps();
    }).toNotThrow();
  });

  it('should create a vnode with attrs and callbacks', () => {
    expect(() => {
      app.shouldCreateAVNodeWithAttrsAndCallbacks();
    }).toNotThrow();
  });

  it('should create a vnode with props and callbacks', () => {
    expect(() => {
      app.shouldCreateAVNodeWithPropsAndCallbacks();
    }).toNotThrow();
  });

  it('should create a vnode with attrs, props and callbacks', () => {
    expect(() => {
      app.shouldCreateAVNodeWithAttrsPropsAndCallbacks();
    }).toNotThrow();
  });

  // js only:
  // should create a vnode with raw

  // error at compile time:
  // should throw if invalid arguments are provided
});
