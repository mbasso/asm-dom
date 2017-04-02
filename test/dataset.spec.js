import expect from 'expect';
import asmDom from '../src/';

describe('dataset', function testDataset() {
  this.timeout(5000);

  const vdom = asmDom();
  const { h, patch } = vdom;
  let root;

  const clearDOM = () => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    root = document.createElement('div');
    root.setAttribute('id', 'foo');
    document.body.appendChild(root);
  };

  beforeEach(clearDOM);

  it('handles string conversions', () => {
    const vnode = h('i', {
      dataset: {
        empty: '',
        dash: '-',
        dashed: 'foo-bar',
        camel: 'fooBar',
        integer: 0,
        float: 0.1,
      },
    });

    const elmPtr = patch(root, vnode);
    const { elm } = vdom.getVNode(elmPtr);
    expect(elm.getAttribute('data-empty')).toEqual('');
    expect(elm.getAttribute('data-dash')).toEqual('-');
    expect(elm.getAttribute('data-dashed')).toEqual('foo-bar');
    expect(elm.getAttribute('data-camel')).toEqual('fooBar');
    expect(elm.getAttribute('data-integer')).toEqual('0');
    expect(elm.getAttribute('data-float')).toEqual('0.1');
  });
});
