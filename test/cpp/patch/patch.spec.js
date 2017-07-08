import init from '../';

describe('patch (cpp)', function test() {
  this.timeout(30000);

  let app;

  before((done) => {
    init().then((asmApp) => {
      app = asmApp;
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

  it('should patch a node', () => {
    app.shouldPatchANode();
  });

  it('should have a tag', () => {
    app.shouldHaveATag();
  });

  it('should have the correct namespace', () => {
    app.shouldHaveTheCorrectNamespace();
  });

  it('should create elements with class', () => {
    app.shouldCreateElementsWithClass();
  });

  // js only:
  // should create elements with className

  it('should create elements with text content', () => {
    app.shouldCreateElementsWithTextContent();
  });

  it('should create elements with span and text content', () => {
    app.shouldCreateElementsWithSpanAndTextContent();
  });

  it('is a patch of the root element', () => {
    app.isAPatchOfTheRootElement();
  });

  it('should create comments', () => {
    app.shouldCreateComments();
  });

  /* should create an element created inside an iframe */

  it('should append elements', () => {
    app.shouldAppendElements();
  });

  it('should prepend elements', () => {
    app.shouldPrependElements();
  });

  it('should add elements in the middle', () => {
    app.shouldAddElementsInTheMiddle();
  });

  it('should add elements at begin and end', () => {
    app.shouldAddElementsAtBeginAndEnd();
  });

  it('should add children to parent with no children', () => {
    app.shouldAddChildrenToParentWithNoChildren();
  });

  it('should remove all children from parent', () => {
    app.shouldRemoveAllChildrenFromParent();
  });

  it('should update one child with same key but different sel', () => {
    app.shouldUpdateOneChildWithSameKeyButDifferentSel();
  });

  it('should remove elements from the beginning', () => {
    app.shouldRemoveElementsFromTheBeginning();
  });

  it('should remove elements from the end', () => {
    app.shouldRemoveElementsFromTheEnd();
  });

  it('should remove elements from the middle', () => {
    app.shouldRemoveElementsFromTheMiddle();
  });

  it('should move element forward', () => {
    app.shouldMoveElementForward();
  });

  it('should move element to end', () => {
    app.shouldMoveElementToEnd();
  });

  it('should move element backwards', () => {
    app.shouldMoveElementBackwards();
  });

  it('should swap first and last', () => {
    app.shouldSwapFirstAndLast();
  });

  it('should move to left and replace', () => {
    app.shouldMoveToLeftAndReplace();
  });

  it('should move to left and leaves hole', () => {
    app.shouldMoveToLeftAndLeavesHole();
  });

  it('should handle moved and set to undefined element ending at the end', () => {
    app.shouldHandleMovedAndSetToUndefinedElementEndingAtEnd();
  });

  it('should move a key in non-keyed nodes with a size up', () => {
    app.shouldMoveAKeyInNonKeyedNodesWithASizeUp();
  });

  it('should reverse elements', () => {
    app.shouldReverseElements();
  });

  it('should reverse elements with 0', () => {
    app.shouldReverseElementsWith0();
  });

  it('should handle random shuffles', () => {
    app.shouldHandleRandomShuffles();
  });

  it('should support null/undefined children', () => {
    app.shouldSupportNullChildren();
  });

  it('should support all null/undefined children', () => {
    app.shouldSupportAllNullChildren();
  });

  it('should handle random shuffles with null/undefined children', () => {
    app.shouldHandleRandomShufflesWithNullChildren();
  });

  it('should append elements', () => {
    app.shouldAppendElements2();
  });

  it('should handle unmoved text nodes', () => {
    app.shouldHandleUnmovedTextNodes();
  });

  it('should handle changing text children', () => {
    app.shouldHandleChangingTextChildren();
  });

  it('should handle unmoved comment nodes', () => {
    app.shouldHandleUnmovedCommentNodes();
  });

  it('should handle changing comment text', () => {
    app.shouldHandleChangingCommentText();
  });

  it('should handle changing empty comment', () => {
    app.shouldHandleChangingEmptyComment();
  });

  it('should prepend element', () => {
    app.shouldPrependElements2();
  });

  it('should prepend element of different tag type', () => {
    app.shouldPrependElementOfDifferentTagType();
  });

  it('should remove elements', () => {
    app.shouldRemoveElements();
  });

  it('should remove a single text node', () => {
    app.shouldRemoveASingleTextNode();
  });

  it('should remove a single text node when children are updated', () => {
    app.shouldRemoveASingleTextNodeWhenChildrenAreUpdated();
  });

  it('should remove a text node among other elements', () => {
    app.shouldRemoveATextNodeAmongOtherElements();
  });

  it('should reorder elements', () => {
    app.shouldReorderElements();
  });

  it('should support null/undefined children', () => {
    app.shouldSupportNullChildren2();
  });

  it('should support all null/undefined children', () => {
    app.shouldSupportAllNullChildren2();
  });
});
