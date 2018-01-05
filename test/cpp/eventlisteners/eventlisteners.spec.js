import init from '../';

describe('eventlisteners (cpp)', function testEventlisteners() {
  this.timeout(30000);

  let app;

  before((done) => {
    app = init(done);
  });

  beforeEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
  });

  it('should attach a click event handler to element', () => {
    app.shouldAttachAClickEventHandlerToElement();
  });

  it('should detach attached click event handler to element', () => {
    app.shouldDetachAttachedClickEventHandlerToElement();
  });

  it('should share handlers in parent and child nodes', () => {
    app.shouldShareHandlersInParentAndChildNodes();
  });

  it('should handle lambda with capture', () => {
    app.shouldHandleLambdaWithCapture();
  });

  it('should update handlers', () => {
    app.shouldUpdateHandlers();
  });

  it('should not update handlers', () => {
    app.shouldNotUpdateHandlers();
  });
});
