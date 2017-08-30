import init from 'asm-dom';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import todos from './todos';

init().then((asmDom) => {
  const { h, patch } = asmDom;

  function main(initState, oldVnode, { view, update }) {
    let handler;
    const newVnode = view(h, initState, handler = (e) => {
      const newState = update(initState, e);
      main(newState, newVnode, { view, update });
    });
    if (patch(oldVnode, newVnode) !== undefined) {
      window.onhashchange = () => handler(todos.Action.Filter(window.location.hash.substr(2) || 'all'));
    }
  }

  const state = todos.init();

  main(
    state,
    document.querySelector('.todoapp'),
    todos,
  );
});
