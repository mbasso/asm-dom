import init from 'asm-dom';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import todos from './todos';

init().then((asmDom) => {
  const { h, patch } = asmDom;

  function main(initState, oldVnode, { view, update }) {
    const newVnode = view(h, initState, (e) => {
      const newState = update(initState, e);
      main(newState, newVnode, { view, update });
    });
    patch(oldVnode, newVnode);
  }

  const state = todos.init();

  main(
    state,
    document.querySelector('.todoapp'),
    todos,
  );
});
