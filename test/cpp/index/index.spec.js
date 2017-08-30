import init from '../';

describe('load (cpp)', function test() {
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

  // js only:
  // should load asm-dom using asm.js (by config)
  // should load asm-dom using wasm
  // should load asm-dom using wasm (by config)

  it('should automatically clear memory', () => {
    app.shouldAutomaticallyClearMemory();
  });

  it('should automatically clear memory (by config)', () => {
    app.shouldAutomaticallyClearMemoryByConfig();
  });

  it('should not automatically clear memory (by config)', () => {
    app.shouldNotAutomaticallyClearMemoryByConfig();
  });

  it('should use safe patch', () => {
    app.shouldUseSafePatch();
  });

  it('should use safe patch (by config)', () => {
    app.shouldUseSafePatchByConfig();
  });

  it('should not use safe patch (by config)', () => {
    app.shouldNotUseSafePatchByConfig();
  });
});
