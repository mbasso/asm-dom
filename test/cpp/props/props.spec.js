import init from '../';

describe('props (cpp)', function testAttributes() {
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

  it('should create element with props', () => {
    app.shouldCreateElementWithProps();
  });

  it('changes an elements props', () => {
    app.changesAnElementsProps();
  });

  it('preserves memoized props', () => {
    app.preservesMemoizedProps();
  });

  it('removes an elements props', () => {
    app.removesAnElementsProps();
  });
});
