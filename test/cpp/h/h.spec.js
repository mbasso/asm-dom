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
  // TODO : should create vnode with tag, props and elm

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

  // TODO : should create a vnode with props and one child

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

  // TODO : should create a vnode with props and text content in string
  // TODO : should create a vnode with props and children

  it('should create a vnode with text', () => {
    expect(() => {
      app.shouldCreateAVNodeWithText();
    }).toNotThrow();
  });

  // TODO : should create a vnode with attrs

  // js only:
  // should create a vnode with raw

  // error at compile time:
  // should throw if invalid arguments are provided
});
