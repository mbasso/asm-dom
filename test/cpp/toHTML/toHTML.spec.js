import init from '../';

describe('toHTML (cpp)', function test() {
  this.timeout(30000);

  let app;

  before((done) => {
    app = init(done);
  });

  it('should handle NULL VNode', () => {
    app.shouldHandleNullVNode();
  });

  it('should parse elements', () => {
    app.shouldParseElements();
  });

  it('should parse comments', () => {
    app.shouldParseComments();
  });

  it('should parse fragments', () => {
    app.shouldParseFragments();
  });

  it('should parse text', () => {
    app.shouldParseText();
  });

  it('should handle children', () => {
    app.shouldHandleChildren();
  });

  it('should handle text content', () => {
    app.shouldHandleTextContent();
  });

  it('should parse attributes', () => {
    app.shouldParseAttributes();
  });

  it('should omit falsy attributes', () => {
    app.shouldOmitFalsyAttributes();
  });

  it('should set truthy attributes to empty string', () => {
    app.shouldSetTruthyAttributesToEmptyString();
  });

  it('should parse props', () => {
    app.shouldParseProps();
  });

  it('should omit props', () => {
    app.shouldOmitProps();
  });

  it('should omit callbacks', () => {
    app.shouldOmitCallbacks();
  });

  it('should handle innerHTML', () => {
    app.shouldHandleInnerHTML();
  });

  it('should handle svg container elements', () => {
    app.shouldHandleSvgContainerElements();
  });

  it('should handle svg non container elements', () => {
    app.shouldHandleSvgNonContainerElements();
  });

  it('should handle void elements', () => {
    app.shouldHandleVoidElements();
  });

  it('should escape text', () => {
    app.shouldEscapeText();
  });

  it('should escape text content', () => {
    app.shouldEscapeTextContent();
  });

  it('should escape attributes', () => {
    app.shouldEscapeAttributes();
  });

  it('should escape props', () => {
    app.shouldEscapeProps();
  });

  // js only:
  // should support props in utf8
});
