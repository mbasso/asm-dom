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
});
