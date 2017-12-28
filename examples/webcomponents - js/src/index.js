import init from 'asm-dom';
import './components/HelloComponent';

init({
  unsafePatch: true,
}).then((asmDom) => {
  const { h, patch } = asmDom;

  const oldVnode = h('div', {
    id: 'root',
  }, [
    'Here is an "Hello" component that accepts a "name" attribute, and emit a "change" event, please open the console',
    h('br'),
    h('br'),
    h('hello-component', {
      name: 'World',
      // eslint-disable-next-line
      onchange: e => console.log('name changed:', e.target.name),
    }),
  ]);

  patch(
    document.getElementById('root'),
    oldVnode,
  );

  const newVnode = h('div', {
    id: 'root',
  }, [
    'Here is an "Hello" component that accepts a "name" attribute, and emit a "change" event, please open the console',
    h('br'),
    h('br'),
    h('hello-component', {
      name: 'asm-dom',
      // eslint-disable-next-line
      onchange: e => console.log('name changed:', e.target.name),
    }),
  ]);

  patch(oldVnode, newVnode);
});
