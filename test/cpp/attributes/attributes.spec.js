import init from '../';

describe('attributes (cpp)', function testAttributes() {
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

  it('should have their provided values', () => {
    app.shouldHaveTheirProvidedValues();
  });

  it('can be memoized', () => {
    app.attributesCanBeMemoized();
  });

  it('should be omitted when falsy values are provided', () => {
    app.shouldBeOmittedWhenFalsyValuesAreProvided();
  });

  it('should set truthy values to empty string', () => {
    app.shouldSetTruthyValuesToEmptyString();
  });

  it('should be set correctly when namespaced', () => {
    app.shouldBeSetCorrectlyWhenNamespaced();
  });
});
