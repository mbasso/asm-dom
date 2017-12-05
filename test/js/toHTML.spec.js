import expect from 'expect';
import init from '../../src/js/';

describe('toHTML (js)', function testToHTML() {
  this.timeout(30000);

  let vdom;
  let h;
  let toHTML;

  before((done) => {
    init({
      useAsmJS: true,
      hardReload: true,
    }).then((asmDom) => {
      vdom = asmDom;
      h = vdom.h;
      toHTML = vdom.toHTML;
      done();
    });
  });

  it('should handle NULL VNode', () => {
    const vnode = undefined;

    expect(toHTML(vnode)).toEqual('');
  });

  it('should parse elements', () => {
    const vnode = h('div');

    expect(toHTML(vnode)).toEqual('<div></div>');
  });

  it('should parse comments', () => {
    const vnode = h('!', 'comment');

    expect(toHTML(vnode)).toEqual('<!--comment-->');
  });

  it('should parse text', () => {
    const vnode = h('a text', true);

    expect(toHTML(vnode)).toEqual('a text');
  });

  it('should handle children', () => {
    const vnode = h('div', [
      h('span'),
      h('b'),
    ]);

    expect(toHTML(vnode)).toEqual('<div><span></span><b></b></div>');
  });

  it('should handle text content', () => {
    const vnode = h('p', 'a text');

    expect(toHTML(vnode)).toEqual('<p>a text</p>');
  });

  it('should parse attributes', () => {
    const vnode = h('div', {
      'data-foo': 'bar',
    });

    expect(toHTML(vnode)).toEqual('<div data-foo="bar"></div>');
  });

  it('should omit falsy attributes', () => {
    const vnode = h('div', {
      readonly: false,
      style: 'width: 250px; height: 250px;',
    });

    expect(toHTML(vnode)).toEqual('<div style="width: 250px; height: 250px;"></div>');
  });

  it('should set truthy attributes to empty string', () => {
    const vnode = h('div', {
      readonly: true,
    });

    expect(toHTML(vnode)).toEqual('<div readonly=""></div>');
  });

  it('should parse props', () => {
    const vnode = h('div', {
      raw: {
        readonly: true,
      },
    });

    expect(toHTML(vnode)).toEqual('<div readonly="true"></div>');
  });

  it('should omit props', () => {
    const vnode = h('div', {
      raw: {
        attributes: 'foo',
        childElementCount: 'foo',
        children: 'foo',
        classList: 'foo',
        clientHeight: 'foo',
        clientLeft: 'foo',
        clientTop: 'foo',
        clientWidth: 'foo',
        currentStyle: 'foo',
        firstElementChild: 'foo',
        innerHTML: 'foo',
        lastElementChild: 'foo',
        nextElementSibling: 'foo',
        ongotpointercapture: 'foo',
        onlostpointercapture: 'foo',
        onwheel: 'foo',
        outerHTML: 'foo',
        previousElementSibling: 'foo',
        runtimeStyle: 'foo',
        scrollHeight: 'foo',
        scrollLeft: 'foo',
        scrollLeftMax: 'foo',
        scrollTop: 'foo',
        scrollTopMax: 'foo',
        scrollWidth: 'foo',
        tabStop: 'foo',
        tagName: 'foo',
      },
    });

    expect(toHTML(vnode)).toEqual('<div>foo</div>');
  });

  it('should omit callbacks', () => {
    const vnode = h('div', {
      raw: {
        onclick: () => {},
      },
    });

    expect(toHTML(vnode)).toEqual('<div></div>');
  });

  it('should handle innerHTML', () => {
    const vnode = h('div', {
      raw: {
        innerHTML: '<p>a text 字à</p>',
      },
    });

    expect(toHTML(vnode)).toEqual('<div><p>a text 字à</p></div>');
  });

  it('should handle svg container elements', () => {
    const vnode = h('svg', [
      h('a'),
      h('defs'),
      h('glyph'),
      h('g'),
      h('marker'),
      h('mask'),
      h('missing-glyph'),
      h('pattern'),
      h('svg'),
      h('switch'),
      h('symbol'),
      h('text'),
      h('desc'),
      h('metadata'),
      h('title'),
    ]);

    expect(toHTML(vnode)).toEqual('<svg><a></a><defs></defs><glyph></glyph><g></g><marker></marker><mask></mask><missing-glyph></missing-glyph><pattern></pattern><svg></svg><switch></switch><symbol></symbol><text></text><desc></desc><metadata></metadata><title></title></svg>');
  });

  it('should handle svg non container elements', () => {
    const vnode = h('svg', [
      h('rect'),
    ]);

    expect(toHTML(vnode)).toEqual('<svg><rect /></svg>');
  });

  it('should handle void elements', () => {
    const vnode = h('div', [
      h('area'),
      h('base'),
      h('br'),
      h('col'),
      h('embed'),
      h('hr'),
      h('img'),
      h('input'),
      h('keygen'),
      h('link'),
      h('meta'),
      h('param'),
      h('source'),
      h('track'),
      h('wbr'),
    ]);

    expect(toHTML(vnode)).toEqual('<div><area><base><br><col><embed><hr><img><input><keygen><link><meta><param><source><track><wbr></div>');
  });

  it('should escape text', () => {
    const vnode = h('<>"\'&`text', true);

    expect(toHTML(vnode)).toEqual('&lt;&gt;&quot;&apos;&amp;&#96;text');
  });

  it('should escape text content', () => {
    const vnode = h('p', '<>"\'&`text');

    expect(toHTML(vnode)).toEqual('<p>&lt;&gt;&quot;&apos;&amp;&#96;text</p>');
  });

  it('should escape attributes', () => {
    const vnode = h('div', {
      'data-foo': '<>"\'&`text',
    });

    expect(toHTML(vnode)).toEqual('<div data-foo="&lt;&gt;&quot;&apos;&amp;&#96;text"></div>');
  });

  it('should escape props', () => {
    const vnode = h('div', {
      raw: {
        'data-foo': '<>"\'&`text',
      },
    });

    expect(toHTML(vnode)).toEqual('<div data-foo="&lt;&gt;&quot;&apos;&amp;&#96;text"></div>');
  });

  it('should support attrs and props in utf8', () => {
    const vnode = h('div', {
      'data-bar': '漢字àèò',
      raw: {
        'data-foo': 'àèò漢字',
      },
    });

    expect(toHTML(vnode)).toEqual('<div data-bar="漢字àèò" data-foo="àèò漢字"></div>');
  });
});
