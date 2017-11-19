import init from '../';

describe('toVNode (cpp)', function testAttributes() {
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

  it('should convert a node to vnode', () => {
    app.shouldConvertANodeToVNode();
  });

  it('should convert text node to vnode', () => {
    app.shouldConvertTextNodeToVNode();
  });

  it('should convert comment node to vnode', () => {
    app.shouldConvertCommentNodeToVNode();
  });

  it('should convert a node with attributes to vnode', () => {
    app.shouldConvertANodeWithAttributesToVNode();
  });

  it('should convert a node with children to vnode', () => {
    app.shouldConvertANodeWithChildrenToVNode();
  });

  it('should convert a node with attributes and children to vnode', () => {
    app.shouldConvertANodeWithAttributesAndChildrenToVNode();
  });

  it('should remove previous children of the root element', () => {
    app.shouldRemovePreviousChildrenOfTheRootElement();
  });

  it('should support patching in a DocumentFragment', () => {
    app.shouldSupportPatchingInADocumentFragment();
  });

  it('should remove some children of the root element', () => {
    app.shouldRemoveSomeChildrenOfTheRootElement();
  });

  it('should remove text elements', () => {
    app.shouldRemoveTextElements();
  });
});
