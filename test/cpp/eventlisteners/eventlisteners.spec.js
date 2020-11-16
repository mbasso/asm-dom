import init from '../';
import setup from '../../setup';

describe('eventlisteners (cpp)', function testEventlisteners() {
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

  it('should not attach ref event handler to element', () => {
    app.shouldNotAttachRefEventHandlerToElement();
  });
});
