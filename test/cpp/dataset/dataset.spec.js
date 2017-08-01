import init from '../';

describe('dataset (cpp)', function testAttributes() {
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

  it('should set on initial element creation', () => {
    app.shouldSetOnInitialElementCreation();
  });

  it('should update dataset', () => {
    app.shouldUpdateDataset();
  });

  // avoid the usage of deleteVNode and do it manually
  /* it('can be memoized', () => {
    app.datasetCanBeMemoized();
  }); */

  // js only:
  // should handles string conversions
});
