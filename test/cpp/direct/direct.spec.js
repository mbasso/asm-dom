import init from '../';
import setup from '../../setup';

describe('direct (cpp)', function testEventlisteners() {
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
    delete document.body['asmDomPtr'];

    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
    document.body.appendChild(document.createElement('div'));
  });

  it('createElement', () => {
    app.shouldDirectlyCreateElements();
  });

  it('createElementNS', () => {
    app.shouldDirectlyCreateElementsWithNamespace();
  });

  it('createTextNode', () => {
    app.shouldDirectlyCreateTextNodes();
  });

  it('createComment', () => {
    app.shouldDirectlyCreateComments();
  });

  it('createDocumentFragment', () => {
    app.shouldDirectlyCreateFragments();
  });

  it('setNodeValue', () => {
    app.shouldDirectlySetNodeValue();
  });

  it('setText', () => {
    app.shouldDirectlySetText();
  });

  it('setComment', () => {
    app.shouldDirectlySetComment();
  });

  it('setAttribute', () => {
    app.shouldDirectlySetAttribute();
  });

  it('removeAttribute', () => {
    app.shouldDirectlyRemoveAttribute();
  });

  it('deleteElement', () => {
    app.shouldDirectlyDeleteElements();
  });

  it('toElement', () => {
    app.shouldDirectlyConvertElementToInt();
  });

  it('getElement', () => {
    app.shouldDirectlyGetElements();
  });

  it('appendChild', () => {
    app.shouldDirectlyAppendChild();
  });

  it('firstChild', () => {
    app.shouldDirectlyFirstChild();
  });

  it('parentNode', () => {
    app.shouldDirectlyParentNode();
  });

  it('remove', () => {
    app.shouldDirectlyRemove();
  });

  it('nextSibling', () => {
    app.shouldDirectlyNextSibling();
  });

  it('insertBefore', () => {
    app.shouldDirectlyInsertBefore();
  });

  it('setProperty', () => {
    app.shouldDirectlySetProperty();
  });

  it('removeProperty', () => {
    app.shouldDirectlyRemoveProperty();
  });

  it('setCallback', () => {
    app.shouldDirectlySetCallback();
  });

  it('removeCallback', () => {
    app.shouldDirectlyRemoveCallback();
  });
});
