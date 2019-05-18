import Perf from './Perf';

console.log('Preparing...');

const snabbdom = {
  h: require('snabbdom/h').default,
  patch: require('snabbdom').init([
    require('snabbdom/modules/class').default,
    require('snabbdom/modules/dataset').default,
    require('snabbdom/modules/props').default,
    require('snabbdom/modules/style').default,
    require('snabbdom/modules/eventlisteners').default,
    require('snabbdom/modules/attributes').default,
  ]),
};
window.snabbdom = snabbdom;

const config = {};

import('../compiled/wasm/app.wasm')
.then((wasm) => {
  config.wasmBinary = new Uint8Array(wasm);
  return import('../compiled/wasm/app.js').then(factory => {
    const asmDom = factory(config);
    delete asmDom.then;
    return asmDom;
  });
})
.then((app) => {
  const asmdomCpp = app;
  window.asmdomCpp = asmdomCpp;

  setTimeout(() => {
    Perf.afterEach = () => {
      document.body.removeChild(document.getElementsByTagName('div')[0]);
      const root = document.createElement('div');
      root.id = 'root';
      document.body.appendChild(root);
    };

    /* eslint-disable */

    Perf.suite({
      'asm-dom': [{
        message: 'create nodes',
        fn: asmdomCpp.create,
      }, {
        message: 'diff equal nodes',
        setup: function () {
          asmdomCpp.patchWithoutChangesSetup();
        },
        fn: asmdomCpp.patchWithoutChanges,
      }, {
        message: 'diff different nodes',
        setup: function () {
          asmdomCpp.patchWithChangesSetup();
        },
        fn: asmdomCpp.patchWithChanges,
      }, {
        message: 'add/remove nodes',
        setup: function () {
          asmdomCpp.patchWithAdditionSetup();
        },
        fn: asmdomCpp.patchWithAddition,
      }],
      'snabbdom': [{
        message: 'create nodes',
        fn: () => {
          let i = 100;
          while (i--) {
            const vnode = snabbdom.h('div', {
              attrs: {
                foo: 'foo',
                bar: 'bar',
                baz: 'baz',
              },
            }, [
              snabbdom.h('div', { attrs: { foo: 'foo' } }),
              snabbdom.h('div', { attrs: { foo: 'foo' } }),
              snabbdom.h('div', { attrs: { foo: 'foo' } }, [
                snabbdom.h('div', { attrs: { foo: 'foo' } }),
                snabbdom.h('div', { attrs: { foo: 'foo' } }),
                snabbdom.h('div', { attrs: { foo: 'foo' } }),
              ]),
            ]);
          }
        },
      }, {
        message: 'diff equal nodes',
        setup: function() {
          var elm = document.getElementById('root');
          var children = [];
          for (i = 0; i < 100; ++i) {
            children.push(snabbdom.h('span', {
              attrs: { e: i },
            }, [
              snabbdom.h('span', {
                attrs: { e: i - 3 }
              })
            ]));
          }
          var vnode1 = snabbdom.h('div', {
            attrs: {
              foo: 'foo',
              bar: 'bar',
              baz: 'baz',
            },
          }, children);

          snabbdom.patch(elm, vnode1);

          children = [];
          for (i = 0; i < 100; ++i) {
            children.push(snabbdom.h('span', {
              attrs: { e: i },
            }, [
              snabbdom.h('span', {
                attrs: { e: i - 3 }
              })
            ]));
          }
          var vnode2 = snabbdom.h('div', {
            attrs: {
              foo: 'foo',
              bar: 'bar',
              baz: 'baz',
            },
          }, children);
        },
        fn: () => {
          let j = 100;
	        while (j--) {
            snabbdom.patch(vnode1, vnode2);
            const temp = vnode1;
            vnode1 = vnode2;
            vnode2 = temp;
          }
        },
      }, {
        message: 'diff different nodes',
        setup: function() {
          const elm = document.getElementById('root');
          var children = [];
          for (i = 0; i < 100; ++i) {
            children.push(snabbdom.h('span', {
              attrs: { e: i },
            }, [
              snabbdom.h('span', {
                attrs: { e: i - 1 }
              })
            ]));
          }
          var vnode1 = snabbdom.h('div', {
            attrs: {
              foo: 'foo',
              bar: 'bar',
              baz: 'baz',
            },
          }, children);

          snabbdom.patch(elm, vnode1);

          children = [];
          for (i = 0; i < 100; ++i) {
            children.push(snabbdom.h('span', {
              attrs: { e: 27 },
            }, [
              snabbdom.h('span', {
                attrs: { e: 27 }
              })
            ]));
          }
          var vnode2 = snabbdom.h('div', {
            attrs: {
              foo: 'foo',
              bar: 'bar',
              baz: 'baz',
            },
          }, children);
        },
        fn: () => {
          let j = 100;
	        while (j--) {
            snabbdom.patch(vnode1, vnode2);
            const temp = vnode1;
            vnode1 = vnode2;
            vnode2 = temp;
          }
        },
      }, {
        message: 'add/remove nodes',
        setup: function() {
          var elm = document.getElementById('root');
          var children = [];
          for (i = 0; i < 100; ++i) {
            children.push(snabbdom.h('span', [
              snabbdom.h('span')
            ]));
          }

          var vnode1 = snabbdom.h('div', {
            attrs: {
              foo: 'foo',
              bar: 'bar',
              baz: 'baz',
            },
          }, children);

          snabbdom.patch(elm, vnode1);

          var vnode2 = snabbdom.h('div', {
            attrs: {
              foo: 'foo',
              bar: 'bar',
              baz: 'baz',
            },
          });
        },
        fn: () => {
          let j = 100;
	        while (j--) {
            snabbdom.patch(vnode1, vnode2);
            const temp = vnode1;
            vnode1 = vnode2;
            vnode2 = temp;
          }
        },
      }],
    });

    /* eslint-enable */
  }, 3000);
});
