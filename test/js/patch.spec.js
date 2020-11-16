import expect from 'expect';
import { knuthShuffle } from 'knuth-shuffle';
import init from '../../src/js/';
import setup from '../setup';

describe('patch (js)', function testPatch() {
  this.timeout(30000);

  const shuffle = knuthShuffle;
  let root;
  let vdom;
  let h;
  let patch;
  let getNode;

  const spanNum = (n) => {
    let result = n;
    if (typeof n === 'string') {
      result = h('span', {}, n);
    } else if (n !== null && n !== undefined) {
      result = h('span', { key: n }, n.toString());
    }
    return result;
  };

  const map = (fn, list) => {
    const ret = [];
    for (let i = 0; i < list.length; ++i) {
      ret[i] = fn(list[i]);
    }
    return ret;
  };

  const prop = name => obj => obj[name];

  const inner = prop('innerHTML');

  before((done) => {
    setup();
    init({
      useAsmJS: true,
    }).then((asmDom) => {
      vdom = asmDom;
      h = vdom.h;
      patch = vdom.patch;
      getNode = vdom.getNode;
      done();
    });
  });

  beforeEach(() => {
    vdom.reset();

    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
  });

  it('should patch a node', () => {
    expect(document.body.children.length).toEqual(1);
    expect(document.body.firstChild).toEqual(root);
    const vnode = h('span');
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(document.body.children.length).toEqual(1);
    expect(elm.nodeName).toEqual('SPAN');
    expect(elm.getAttribute('id')).toBeFalsy();
    expect(elm.className).toBeFalsy();
    vdom.deleteVNode(vnode);
  });

  it('should have a tag', () => {
    const vnode = h('div');
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.tagName).toEqual('DIV');
    vdom.deleteVNode(elmPtr);
  });

  it('should have the correct namespace', () => {
    const svgNamespace = 'http://www.w3.org/2000/svg';

    patch(root, h('div', [h('div', { ns: svgNamespace })]));
    const elm = document.body.firstChild;
    expect(elm.firstChild.namespaceURI).toEqual(svgNamespace);
  });

  it('should inject svg namespace', () => {
    const svgNamespace = 'http://www.w3.org/2000/svg';
    const XHTMLNamespace = 'http://www.w3.org/1999/xhtml';

    const vnode = h('svg', [
      h('foreignObject', [
        h('div', ['I am HTML embedded in SVG']),
      ]),
    ]);

    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.namespaceURI).toEqual(svgNamespace);
    expect(elm.firstChild.namespaceURI).toEqual(svgNamespace);
    expect(elm.firstChild.firstChild.namespaceURI).toEqual(XHTMLNamespace);
    vdom.deleteVNode(vnode);
  });

  it('should create elements with class', () => {
    const vnode = h('div', { 'class': 'foo' });
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttribute('class')).toEqual('foo');
    vdom.deleteVNode(elmPtr);
  });

  it('should create elements with className', () => {
    const vnode = h('div', { className: 'foo' });
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.getAttribute('class')).toEqual('foo');
    vdom.deleteVNode(elmPtr);
  });

  it('should create elements with text content', () => {
    const vnode = h('div', ['I am a string']);
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.innerHTML).toEqual('I am a string');
    vdom.deleteVNode(elmPtr);
  });

  it('should create elements with text content in utf8', () => {
    const vnode = h('div', ['I am a string, àèò漢字']);
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.innerHTML).toEqual('I am a string, àèò漢字');
    vdom.deleteVNode(elmPtr);
  });

  it('should create elements with span and text content', () => {
    const vnode = h('a', [h('span'), 'I am a string']);
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.childNodes[0].tagName).toEqual('SPAN');
    expect(elm.childNodes[1].textContent).toEqual('I am a string');
    vdom.deleteVNode(elmPtr);
  });

  it('is a patch of the root element', () => {
    const elmWithIdAndClass = document.createElement('div');
    elmWithIdAndClass.id = 'id';
    elmWithIdAndClass.className = 'class';
    const vnode = h('div', {
      id: 'id',
      className: 'class',
    }, [h('span', 'Hi')]);
    patch(elmWithIdAndClass, vnode);
    const elm = getNode(vnode);
    expect(elm).toEqual(elmWithIdAndClass);
    expect(elm.tagName).toEqual('DIV');
    expect(elm.id).toEqual('id');
    expect(elm.className).toEqual('class');
    vdom.deleteVNode(vnode);
  });

  it('should create comments', () => {
    const vnode = h('!', 'test');
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.nodeType).toEqual(document.COMMENT_NODE);
    expect(elm.textContent).toEqual('test');
    vdom.deleteVNode(elmPtr);
  });

  it('should create fragments', () => {
    const vnode = h('', 'foo');
    const elmPtr = patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.nodeType).toEqual(document.TEXT_NODE);
    expect(elm.textContent).toEqual('foo');
    vdom.deleteVNode(elmPtr);
  });

  it('should patch an element inside a fragment', () => {
    const vnode = h('', h('span', 'foo'));
    const vnode2 = h('', h('span', 'bar'));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.tagName).toEqual('SPAN');
    expect(elm.textContent).toEqual('foo');
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(elm.tagName).toEqual('SPAN');
    expect(elm.textContent).toEqual('bar');
    vdom.deleteVNode(vnode2);
  });

  it('should append elements to fragment', () => {
    const vnode = h('div', h('', h('span', 'foo')));
    const vnode2 = h('div', h('', [
      h('span', 'foo'),
      h('span', 'bar'),
    ]));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.tagName).toEqual('DIV');
    expect(elm.children.length).toEqual(1);
    expect(elm.children[0].tagName).toEqual('SPAN');
    expect(elm.children[0].textContent).toEqual('foo');
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(elm.tagName).toEqual('DIV');
    expect(elm.children.length).toEqual(2);
    expect(elm.children[0].tagName).toEqual('SPAN');
    expect(elm.children[0].textContent).toEqual('foo');
    expect(elm.children[1].tagName).toEqual('SPAN');
    expect(elm.children[1].textContent).toEqual('bar');
    vdom.deleteVNode(vnode2);
  });

  it('should remove elements from fragment', () => {
    const vnode = h('div', h('', [
      h('span', 'foo'),
      h('span', 'bar'),
    ]));
    const vnode2 = h('div', h('', h('span', 'foo')));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.tagName).toEqual('DIV');
    expect(elm.children.length).toEqual(2);
    expect(elm.children[0].tagName).toEqual('SPAN');
    expect(elm.children[0].textContent).toEqual('foo');
    expect(elm.children[1].tagName).toEqual('SPAN');
    expect(elm.children[1].textContent).toEqual('bar');
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(elm.tagName).toEqual('DIV');
    expect(elm.children.length).toEqual(1);
    expect(elm.children[0].tagName).toEqual('SPAN');
    expect(elm.children[0].textContent).toEqual('foo');
    vdom.deleteVNode(vnode2);
  });

  /*
  it('should create an element created inside an iframe', (done) => {
    // Only run if srcdoc is supported.
    const frame = document.createElement('iframe');
    if (typeof frame.srcdoc !== 'undefined') {
      frame.srcdoc = '<div>Thing 1</div>';
      frame.onload = () => {
        const vnode = h('div', 'Thing 2');
        patch(frame.contentDocument.body.querySelector('div'), vnode);
        expect(frame.contentDocument.body.querySelector('div').textContent).toEqual('Thing 2');
        frame.remove();
        vdom.deleteVNode(vnode);
        done();
      };
      document.body.appendChild(frame);
    } else {
      done();
    }
  });
  */

  it('should append elements', () => {
    const vnode = h('span', [1].map(spanNum));
    const vnode2 = h('span', [1, 2, 3].map(spanNum));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(1);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(elm.children.length).toEqual(3);
    expect(elm.children[1].innerHTML).toEqual('2');
    expect(elm.children[2].innerHTML).toEqual('3');
    vdom.deleteVNode(vnode2);
  });

  it('should prepend elements', () => {
    const vnode = h('span', [4, 5].map(spanNum));
    const vnode2 = h('span', [1, 2, 3, 4, 5].map(spanNum));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(2);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['1', '2', '3', '4', '5']);
    vdom.deleteVNode(vnode2);
  });

  it('should add elements in the middle', () => {
    const vnode = h('span', [1, 2, 4, 5].map(spanNum));
    const vnode2 = h('span', [1, 2, 3, 4, 5].map(spanNum));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(4);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['1', '2', '3', '4', '5']);
    vdom.deleteVNode(vnode2);
  });

  it('should add elements at begin and end', () => {
    const vnode = h('span', [2, 3, 4].map(spanNum));
    const vnode2 = h('span', [1, 2, 3, 4, 5].map(spanNum));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(3);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['1', '2', '3', '4', '5']);
    vdom.deleteVNode(vnode2);
  });

  it('should add children to parent with no children', () => {
    const vnode = h('span', { key: 'span' });
    const vnode2 = h('span', { key: 'span' }, [1, 2, 3].map(spanNum));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(0);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['1', '2', '3']);
    vdom.deleteVNode(vnode2);
  });

  it('should remove all children from parent', () => {
    const vnode = h('span', { key: 'span' }, [1, 2, 3].map(spanNum));
    const vnode2 = h('span', { key: 'span' });
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['1', '2', '3']);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(elm.children.length).toEqual(0);
    vdom.deleteVNode(vnode2);
  });

  it('should update one child with same key but different sel', () => {
    const vnode = h('span', { key: 'span' }, [1, 2, 3].map(spanNum));
    const vnode2 = h('span', { key: 'span' }, [spanNum(1), h('i', { key: 2 }, '2'), spanNum(3)]);
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['1', '2', '3']);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['1', '2', '3']);
    expect(elm.children.length).toEqual(3);
    expect(elm.children[1].tagName).toEqual('I');
    vdom.deleteVNode(vnode2);
  });

  it('should remove elements from the beginning', () => {
    const vnode = h('span', [1, 2, 3, 4, 5].map(spanNum));
    const vnode2 = h('span', [3, 4, 5].map(spanNum));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(5);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['3', '4', '5']);
    vdom.deleteVNode(vnode2);
  });

  it('should remove elements from the end', () => {
    const vnode = h('span', [1, 2, 3, 4, 5].map(spanNum));
    const vnode2 = h('span', [1, 2, 3].map(spanNum));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(5);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(elm.children.length).toEqual(3);
    expect(elm.children[0].innerHTML).toEqual('1');
    expect(elm.children[1].innerHTML).toEqual('2');
    expect(elm.children[2].innerHTML).toEqual('3');
    vdom.deleteVNode(vnode2);
  });

  it('should remove elements from the middle', () => {
    const vnode = h('span', [1, 2, 3, 4, 5].map(spanNum));
    const vnode2 = h('span', [1, 2, 4, 5].map(spanNum));
    patch(root, vnode);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(5);
    patch(vnode, vnode2);
    elm = document.body.firstChild;
    expect(elm.children.length).toEqual(4);
    expect(elm.children[0].innerHTML).toEqual('1');
    expect(elm.children[1].innerHTML).toEqual('2');
    expect(elm.children[2].innerHTML).toEqual('4');
    expect(elm.children[3].innerHTML).toEqual('5');
    vdom.deleteVNode(vnode2);
  });

  it('should move element forward', () => {
    const vnode1 = h('span', [1, 2, 3, 4].map(spanNum));
    const vnode2 = h('span', [2, 3, 1, 4].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(4);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.children.length).toEqual(4);
    expect(elm.children[0].innerHTML).toEqual('2');
    expect(elm.children[1].innerHTML).toEqual('3');
    expect(elm.children[2].innerHTML).toEqual('1');
    expect(elm.children[3].innerHTML).toEqual('4');
    vdom.deleteVNode(vnode2);
  });

  it('should move element to end', () => {
    const vnode1 = h('span', [1, 2, 3].map(spanNum));
    const vnode2 = h('span', [2, 3, 1].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(3);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.children.length).toEqual(3);
    expect(elm.children[0].innerHTML).toEqual('2');
    expect(elm.children[1].innerHTML).toEqual('3');
    expect(elm.children[2].innerHTML).toEqual('1');
    vdom.deleteVNode(vnode2);
  });

  it('should move element backwards', () => {
    const vnode1 = h('span', [1, 2, 3, 4].map(spanNum));
    const vnode2 = h('span', [1, 4, 2, 3].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(4);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.children.length).toEqual(4);
    expect(elm.children[0].innerHTML).toEqual('1');
    expect(elm.children[1].innerHTML).toEqual('4');
    expect(elm.children[2].innerHTML).toEqual('2');
    expect(elm.children[3].innerHTML).toEqual('3');
    vdom.deleteVNode(vnode2);
  });

  it('should swap first and last', () => {
    const vnode1 = h('span', [1, 2, 3, 4].map(spanNum));
    const vnode2 = h('span', [4, 2, 3, 1].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(4);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.children.length).toEqual(4);
    expect(elm.children[0].innerHTML).toEqual('4');
    expect(elm.children[1].innerHTML).toEqual('2');
    expect(elm.children[2].innerHTML).toEqual('3');
    expect(elm.children[3].innerHTML).toEqual('1');
    vdom.deleteVNode(vnode2);
  });

  it('should move to left and replace', () => {
    const vnode1 = h('span', [1, 2, 3, 4, 5].map(spanNum));
    const vnode2 = h('span', [4, 1, 2, 3, 6].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(5);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.children.length, 5);
    expect(elm.children[0].innerHTML).toEqual('4');
    expect(elm.children[1].innerHTML).toEqual('1');
    expect(elm.children[2].innerHTML).toEqual('2');
    expect(elm.children[3].innerHTML).toEqual('3');
    expect(elm.children[4].innerHTML).toEqual('6');
    vdom.deleteVNode(vnode2);
  });

  it('should move to left and leaves hole', () => {
    const vnode1 = h('span', [1, 4, 5].map(spanNum));
    const vnode2 = h('span', [4, 6].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(3);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['4', '6']);
    vdom.deleteVNode(vnode2);
  });

  it('should handle moved and set to undefined element ending at the end', () => {
    const vnode1 = h('span', [2, 4, 5].map(spanNum));
    const vnode2 = h('span', [4, 5, 3].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(3);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.children.length, 3);
    expect(elm.children[0].innerHTML).toEqual('4');
    expect(elm.children[1].innerHTML).toEqual('5');
    expect(elm.children[2].innerHTML).toEqual('3');
    vdom.deleteVNode(vnode2);
  });

  it('should move a key in non-keyed nodes with a size up', () => {
    const vnode1 = h('span', [1, 'a', 'b', 'c'].map(spanNum));
    const vnode2 = h('span', ['d', 'a', 'b', 'c', 1, 'e'].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.childNodes.length).toEqual(4);
    expect(elm.textContent).toEqual('1abc');
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.childNodes.length).toEqual(6);
    expect(elm.textContent).toEqual('dabc1e');
    vdom.deleteVNode(vnode2);
  });

  it('should reverse elements', () => {
    const vnode1 = h('span', [1, 2, 3, 4, 5, 6, 7, 8].map(spanNum));
    const vnode2 = h('span', [8, 7, 6, 5, 4, 3, 2, 1].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(8);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['8', '7', '6', '5', '4', '3', '2', '1']);
    vdom.deleteVNode(vnode2);
  });

  it('should reverse elements with 0', () => {
    const vnode1 = h('span', [0, 1, 2, 3, 4, 5].map(spanNum));
    const vnode2 = h('span', [4, 3, 2, 1, 5, 0].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(6);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['4', '3', '2', '1', '5', '0']);
    vdom.deleteVNode(vnode2);
  });

  it('should handle random shuffles', () => {
    let n;
    let i;
    const arr = [];
    const opacities = [];
    const elms = 14;
    const samples = 5;
    const spanNumWithOpacity = (z, o) =>
      h('span', { key: z, style: `opacity: ${o}` }, z.toString());
    for (n = 0; n < elms; ++n) { arr[n] = n; }
    for (n = 0; n < samples; ++n) {
      const vnode1 = h('span', arr.map(z => spanNumWithOpacity(z, '1')));
      const shufArr = shuffle(arr.slice(0));
      let elm = document.createElement('div');
      patch(elm, vnode1);
      elm = getNode(vnode1);
      for (i = 0; i < elms; ++i) {
        expect(elm.children[i].innerHTML, i.toString());
        opacities[i] = Math.random().toFixed(5).toString();
      }
      const vnode2 = h('span', arr.map(z => spanNumWithOpacity(shufArr[z], opacities[z])));
      patch(vnode1, vnode2);
      elm = getNode(vnode2);
      for (i = 0; i < elms; ++i) {
        expect(elm.children[i].innerHTML).toEqual(shufArr[i].toString());
        expect(opacities[i].indexOf(elm.children[i].style.opacity)).toEqual(0);
      }

      vdom.reset();
    }
  });

  it('should support null/undefined children', () => {
    const vnode1 = h('i', [0, 1, 2, 3, 4, 5].map(spanNum));
    const vnode2 = h('i', [null, 2, undefined, null, 1, 0, null, 5, 4, null, 3, undefined].map(spanNum));
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(6);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['2', '1', '0', '5', '4', '3']);
    vdom.deleteVNode(vnode2);
  });

  it('should support all null/undefined children', () => {
    const vnode1 = h('i', [0, 1, 2, 3, 4, 5].map(spanNum));
    const vnode2 = h('i', [null, null, undefined, null, null, undefined]);
    const vnode3 = h('i', [5, 4, 3, 2, 1, 0].map(spanNum));
    patch(root, vnode1);
    patch(vnode1, vnode2);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(0);
    patch(vnode2, vnode3);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['5', '4', '3', '2', '1', '0']);
    vdom.deleteVNode(vnode3);
  });

  it('should handle random shuffles with null/undefined children', () => {
    let i;
    let j;
    let r;
    let len;
    let arr;
    const maxArrLen = 15;
    const samples = 5;
    let vnode1 = root;
    let vnode2;
    for (i = 0; i < samples; ++i, vnode1 = vnode2) {
      len = Math.floor(Math.random() * maxArrLen);
      arr = [];
      for (j = 0; j < len; ++j) {
        r = Math.random();
        if (r < 0.5) arr[j] = String(j);
        else if (r < 0.75) arr[j] = null;
        else arr[j] = undefined;
      }
      shuffle(arr);
      vnode2 = h('div', arr.map(spanNum));
      patch(vnode1, vnode2);
      const elm = document.body.firstChild;
      expect(map(inner, elm.children), arr.filter(x => x !== null && x !== undefined));
    }
    vdom.deleteVNode(vnode2);
  });

  it('should append elements', () => {
    const vnode1 = h('div', [h('span', 'Hello')]);
    const vnode2 = h('div', [h('span', 'Hello'), h('span', 'World')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['Hello']);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['Hello', 'World']);
    vdom.deleteVNode(vnode2);
  });

  it('should handle unmoved text nodes', () => {
    const vnode1 = h('div', ['Text', h('span', 'Span')]);
    const vnode2 = h('div', ['Text', h('span', 'Span')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.childNodes[0].textContent).toEqual('Text');
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.childNodes[0].textContent).toEqual('Text');
    vdom.deleteVNode(vnode2);
  });

  it('should handle changing text children', () => {
    const vnode1 = h('div', ['Text', h('span', 'Span')]);
    const vnode2 = h('div', ['Text2', h('span', 'Span')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.childNodes[0].textContent).toEqual('Text');
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.childNodes[0].textContent).toEqual('Text2');
    vdom.deleteVNode(vnode2);
  });

  it('should handle unmoved comment nodes', () => {
    const vnode1 = h('div', [h('!', 'Text'), h('span', 'Span')]);
    const vnode2 = h('div', [h('!', 'Text'), h('span', 'Span')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.childNodes[0].textContent).toEqual('Text');
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.childNodes[0].textContent).toEqual('Text');
    vdom.deleteVNode(vnode2);
  });

  it('should handle changing comment text', () => {
    const vnode1 = h('div', [h('!', 'Text'), h('span', 'Span')]);
    const vnode2 = h('div', [h('!', 'Text2'), h('span', 'Span')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.childNodes[0].textContent).toEqual('Text');
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.childNodes[0].textContent).toEqual('Text2');
    vdom.deleteVNode(vnode2);
  });

  it('should handle changing empty comment', () => {
    const vnode1 = h('div', [h('!'), h('span', 'Span')]);
    const vnode2 = h('div', [h('!', 'Test'), h('span', 'Span')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.childNodes[0].textContent).toEqual('');
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.childNodes[0].textContent).toEqual('Test');
    vdom.deleteVNode(vnode2);
  });

  it('should prepend element', () => {
    const vnode1 = h('div', [h('span', 'World')]);
    const vnode2 = h('div', [h('span', 'Hello'), h('span', 'World')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['World']);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['Hello', 'World']);
    vdom.deleteVNode(vnode2);
  });

  it('should prepend element of different tag type', () => {
    const vnode1 = h('div', [h('span', 'World')]);
    const vnode2 = h('div', [h('div', 'Hello'), h('span', 'World')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['World']);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(prop('tagName'), elm.children)).toEqual(['DIV', 'SPAN']);
    expect(map(inner, elm.children)).toEqual(['Hello', 'World']);
    vdom.deleteVNode(vnode2);
  });

  it('should remove elements', () => {
    const vnode1 = h('div', [h('span', 'One'), h('span', 'Two'), h('span', 'Three')]);
    const vnode2 = h('div', [h('span', 'One'), h('span', 'Three')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['One', 'Two', 'Three']);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['One', 'Three']);
    vdom.deleteVNode(vnode2);
  });

  it('should remove a single text node', () => {
    const vnode1 = h('div', 'One');
    const vnode2 = h('div');
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.textContent).toEqual('One');
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.textContent).toEqual('');
    vdom.deleteVNode(vnode2);
  });

  it('should remove a single text node when children are updated', () => {
    const vnode1 = h('div', 'One');
    const vnode2 = h('div', [h('div', 'Two'), h('span', 'Three')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.textContent).toEqual('One');
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(prop('textContent'), elm.childNodes)).toEqual(['Two', 'Three']);
    vdom.deleteVNode(vnode2);
  });

  it('should remove a text node among other elements', () => {
    const vnode1 = h('div', ['One', h('span', 'Two')]);
    const vnode2 = h('div', [h('div', 'Three')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(map(prop('textContent'), elm.childNodes)).toEqual(['One', 'Two']);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.childNodes.length).toEqual(1);
    expect(elm.childNodes[0].tagName).toEqual('DIV');
    expect(elm.childNodes[0].textContent).toEqual('Three');
    vdom.deleteVNode(vnode2);
  });

  it('should reorder elements', () => {
    const vnode1 = h('div', [h('span', 'One'), h('div', 'Two'), h('b', 'Three')]);
    const vnode2 = h('div', [h('b', 'Three'), h('span', 'One'), h('div', 'Two')]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['One', 'Two', 'Three']);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(prop('tagName'), elm.children)).toEqual(['B', 'SPAN', 'DIV']);
    expect(map(inner, elm.children)).toEqual(['Three', 'One', 'Two']);
    vdom.deleteVNode(vnode2);
  });

  it('should support null/undefined children', () => {
    const vnode1 = h('i', [null, h('i', '1'), h('i', '2'), null]);
    const vnode2 = h('i', [h('i', '2'), undefined, undefined, h('i', '1'), undefined]);
    const vnode3 = h('i', [null, h('i', '1'), undefined, null, h('i', '2'), undefined, null]);
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['1', '2']);
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['2', '1']);
    patch(vnode2, vnode3);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['1', '2']);
    vdom.deleteVNode(vnode3);
  });

  it('should support all null/undefined children', () => {
    const vnode1 = h('i', [h('i', '1'), h('i', '2')]);
    const vnode2 = h('i', [null, undefined]);
    const vnode3 = h('i', [h('i', '2'), h('i', '1')]);
    patch(root, vnode1);
    patch(vnode1, vnode2);
    let elm = document.body.firstChild;
    expect(elm.children.length).toEqual(0);
    patch(vnode2, vnode3);
    elm = document.body.firstChild;
    expect(map(inner, elm.children)).toEqual(['2', '1']);
    vdom.deleteVNode(vnode3);
  });

  it('should set asmDomRaws', () => {
    const vnode1 = h('i', {
      raw: {
        onclick: () => {},
        foo: '',
      },
    });
    const vnode2 = h('i', {
      raw: {
        bar: '',
      },
    });
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.asmDomRaws).toEqual({
      onclick: true,
      foo: true,
    });
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.asmDomRaws).toEqual({
      bar: true,
    });
    vdom.deleteVNode(vnode2);
  });

  it('should automatically set value as raw', () => {
    const vnode1 = h('i', {
      value: 'foo',
      raw: {
        foo: '',
      },
    });
    const vnode2 = h('i', {
      value: 'bar',
    });
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.asmDomRaws).toEqual({
      foo: true,
      value: true,
    });
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.asmDomRaws).toEqual({
      value: true,
    });
    vdom.deleteVNode(vnode2);
  });

  it('should automatically set checked as raw', () => {
    const vnode1 = h('i', {
      checked: 'foo',
      raw: {
        foo: '',
      },
    });
    const vnode2 = h('i', {
      checked: 'bar',
    });
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.asmDomRaws).toEqual({
      foo: true,
      checked: true,
    });
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.asmDomRaws).toEqual({
      checked: true,
    });
    vdom.deleteVNode(vnode2);
  });

  it('should set asmDomEvents', () => {
    const callbacks = {
      click: () => {},
      keydown: () => {},
    };
    const vnode1 = h('i', {
      onclick: callbacks.click,
    });
    const vnode2 = h('i', {
      onkeydown: callbacks.keydown,
      raw: {
        bar: '',
      },
    });
    patch(root, vnode1);
    let elm = document.body.firstChild;
    expect(elm.asmDomEvents).toEqual({
      click: callbacks.click,
    });
    patch(vnode1, vnode2);
    elm = document.body.firstChild;
    expect(elm.asmDomRaws).toEqual({
      bar: true,
    });
    expect(elm.asmDomEvents).toEqual({
      keydown: callbacks.keydown,
    });
    vdom.deleteVNode(vnode2);
  });

  it('should patch a WebComponent', () => {
    const vnode = h('web-component');
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.nodeName).toEqual('WEB-COMPONENT');
    vdom.deleteVNode(vnode);
  });

  it('should patch a WebComponent with attributes', () => {
    const vnode = h('web-component', {
      foo: 'bar',
      bar: 42,
    });
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.nodeName).toEqual('WEB-COMPONENT');
    expect(elm.getAttribute('foo')).toEqual('bar');
    expect(elm.getAttribute('bar')).toEqual('42');
    vdom.deleteVNode(vnode);
  });

  it('should patch a WebComponent with eventlisteners', () => {
    const vnode = h('web-component', {
      onclick: () => {},
      'onfoo-event': () => {},
    });
    patch(root, vnode);
    patch(root, vnode);
    const elm = document.body.firstChild;
    expect(elm.nodeName).toEqual('WEB-COMPONENT');
    vdom.deleteVNode(vnode);
  });

  it('should create a template node', () => {
    const vnode = h('template', {
      id: 'template-node',
    }, [
      h('style', 'p { color: green; }'),
      h('p', 'Hello world!'),
    ]);
    patch(root, vnode);
    const template = document.getElementById('template-node');
    const fragment = template.content.cloneNode(true);
    expect(fragment.nodeName).toEqual('#document-fragment');
    vdom.deleteVNode(vnode);
  });

  it('should call ref with DOM node', () => {
    let param;
    const data = {
      'data-foo': 'bar',
      ref: (node) => {
        param = node;
        if (node !== null) {
          expect(node.getAttribute('data-foo')).toEqual('bar');
        }
      },
    };
    const vnode = h('div', h('div', data));
    patch(root, vnode);
    expect(param).toBeTruthy();

    const vnode2 = h('div');
    patch(vnode, vnode2);
    expect(param).toEqual(null);
    vdom.deleteVNode(vnode2);
  });

  it('should call ref on add', () => {
    const data = {
      ref: (node) => {
        expect(node.getAttribute('data-foo')).toEqual('bar');
      },
    };
    const spy = expect.spyOn(data, 'ref');
    const vnode = h('div', h('div', data));
    patch(root, vnode);
    expect(spy.calls.length).toEqual(1);

    const vnode2 = h('div', h('div', data));
    patch(vnode, vnode2);
    expect(spy.calls.length).toEqual(1);
    vdom.deleteVNode(vnode2);
  });

  it('should call ref on remove', () => {
    const data = {
      ref: () => {},
    };
    const spy = expect.spyOn(data, 'ref');
    const vnode = h('div', h('div', data));
    patch(root, vnode);

    const vnode2 = h('div');
    patch(vnode, vnode2);
    expect(spy.calls.length).toEqual(2);
    expect(spy.calls[1].arguments).toEqual([null]);
    vdom.deleteVNode(vnode2);
  });

  it('should call ref on ref remove itself', () => {
    const data = {
      ref: () => {},
    };
    const spy = expect.spyOn(data, 'ref');
    const vnode = h('div', h('div', data));
    patch(root, vnode);

    const vnode2 = h('div', h('div'));
    patch(vnode, vnode2);
    expect(spy.calls.length).toEqual(2);
    expect(spy.calls[1].arguments).toEqual([null]);
    vdom.deleteVNode(vnode2);
  });

  it('should not call ref on update', () => {
    const data = {
      ref: (node) => {
        expect(node.getAttribute('data-foo')).toEqual('bar');
      },
    };
    const spy = expect.spyOn(data, 'ref');
    const vnode = h('div', h('div', data));
    patch(root, vnode);
    expect(spy.calls.length).toEqual(1);

    const vnode2 = h('div', h('div', data));
    patch(vnode, vnode2);
    expect(spy.calls.length).toEqual(1);
    vdom.deleteVNode(vnode2);
  });

  it('should call ref on change', () => {
    const data1 = {
      ref: (node) => {
        expect(node.getAttribute('data-foo')).toEqual('bar');
      },
    };
    const data2 = {
      ref: (node) => {
        expect(node.getAttribute('data-foo')).toEqual('bar');
      },
    };
    const spy1 = expect.spyOn(data1, 'ref');
    const spy2 = expect.spyOn(data2, 'ref');
    const vnode = h('div', h('div', data1));
    patch(root, vnode);
    expect(spy1.calls.length).toEqual(1);
    expect(spy2.calls.length).toEqual(0);

    const vnode2 = h('div', h('div', data2));
    patch(vnode, vnode2);
    expect(spy1.calls.length).toEqual(2);
    expect(spy1.calls[1].arguments).toEqual([null]);
    expect(spy2.calls.length).toEqual(1);
    vdom.deleteVNode(vnode2);
  });

  it('should call ref on update if ref is added', () => {
    const data = {
      ref: () => {},
    };
    const spy = expect.spyOn(data, 'ref');
    const vnode = h('div', h('div'));
    patch(root, vnode);

    const vnode2 = h('div', h('div', data));
    patch(vnode, vnode2);
    expect(spy.calls.length).toEqual(1);
    vdom.deleteVNode(vnode2);
  });

  it('should not set ref as callback', () => {
    const callbacks = {
      click: () => {},
      ref: () => {},
    };
    const vnode1 = h('i', {
      onclick: callbacks.click,
      ref: callbacks.ref,
    });
    patch(root, vnode1);
    const elm = document.body.firstChild;
    expect(elm.asmDomEvents).toEqual({
      click: callbacks.click,
    });
    vdom.deleteVNode(vnode1);
  });
});
