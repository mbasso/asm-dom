import Type from 'union-type';
import { bind, sequence, isBoolean, classnames } from './helpers';
import task from './task';

const KEY_ENTER = 13;

// model : { nextID: Number, editingTitle: String, tasks: [task.model], filter: String }
const Action = Type({
  Add: [String],
  Remove: [Number],
  Archive: [],
  ToggleAll: [isBoolean],
  Filter: [String],
  Modify: [Number, task.Action],
});

const targetChecked = e => Boolean(e.target.checked);
// const targetValue = e => e.target.value;

function onInput(handler, e) {
  if (e.keyCode === KEY_ENTER && e.target.value !== '') {
    handler(Action.Add(e.target.value));
  }
}

function remainingTodos(tasks) {
  // eslint-disable-next-line
  return tasks.reduce((acc, task) => !task.done ? acc + 1 : acc, 0);
}

function filteredTodos(tasks, filter) {
  /* eslint-disable */
  return filter === 'completed' ? tasks.filter(todo => todo.done)
         : filter === 'active'  ? tasks.filter(todo => !todo.done)
                                : tasks;
  /* eslint-enable */
}

function view(h, model, handler) {
  const remaining = remainingTodos(model.tasks);
  const filtered = filteredTodos(model.tasks, model.filter);

  window.onhashchange = () => handler(Action.Filter(window.location.hash.substr(2) || 'all'));

  return h('section', {
    className: 'todoapp',
    raw: {
      onclick: () => console.log('clicked'),
    },
  }, [
    h('header', {
      className: 'header',
    }, [
      h('h1', 'todos'),
      h('input', {
        id: 'new-todo',
        className: 'new-todo',
        placeholder: 'What needs to be done?',
        raw: {
          value: model.editingTitle,
          onkeydown: bind(onInput, handler),
        },
      }),
    ]),
    h('section', {
      className: 'main',
      style: `display: ${model.tasks.length ? 'block' : 'none'}`,
    }, [
      h('input', {
        className: 'toggle-all',
        type: 'checkbox',
        raw: {
          checked: remaining === 0,
          onclick: sequence(targetChecked, Action.ToggleAll, handler),
        },
      }),
      h('ul', {
        className: 'todo-list',
      }, filtered.map(todo =>
        task.view(
          h,
          todo,
          action => handler(Action.Modify(todo.id, action)),
          id => handler(Action.Remove(id)),
        ))),
    ]),
    h('footer', {
      className: 'footer',
      style: `display: ${model.tasks.length ? 'block' : 'none'}`,
    }, [
      h('span', {
        className: 'todo-count',
      }, [
        h('strong', String(remaining)),
        ` item${remaining === 1 ? '' : 's'} left`,
      ]),
      h('ul', {
        className: 'filters',
      }, [
        h('li', [h('a', { className: classnames({ selected: model.filter === 'all' }), href: '#/' }, 'All')]),
        h('li', [h('a', { className: classnames({ selected: model.filter === 'active' }), href: '#/active' }, 'Active')]),
        h('li', [h('a', { className: classnames({ selected: model.filter === 'completed' }), href: '#/completed' }, 'Completed')]),
      ]),
      h('button', {
        className: 'clear-completed',
        style: `display: ${model.tasks.length !== remaining ? 'block' : 'none'}`,
        raw: { onclick: bind(handler, Action.Archive()) },
      }, 'Clear completed'),
    ]),
  ]);
}

function init(tasks = []) {
  return {
    // eslint-disable-next-line
    nextID: tasks.reduce((acc, task) => Math.max(acc, task.id), 0) + 1,
    tasks,
    editingTitle: '',
    filter: 'all',
  };
}

function addTodo(model, title) {
  return {
    ...model,
    tasks: [
      ...model.tasks,
      task.init(model.nextID, title),
    ],
    editingTitle: '',
    nextID: model.nextID + 1,
  };
}

function removeTodo(model, id) {
  return {
    ...model,
    // eslint-disable-next-line
    tasks : model.tasks.filter(taskModel => taskModel.id !== id)
  };
}

function archiveTodos(model) {
  return {
    ...model,
    // eslint-disable-next-line
    tasks : model.tasks.filter( taskModel => !taskModel.done),
  };
}

function toggleAll(model, done) {
  return {
    ...model,
    // eslint-disable-next-line
    tasks : model.tasks.map(taskModel => task.update(taskModel, task.Action.Toggle(done)))
  };
}


function modifyTodo(model, id, action) {
  return {
    ...model,
    tasks: model.tasks.map(
      // eslint-disable-next-line
      taskModel => taskModel.id !== id ? taskModel : task.update(taskModel, action)
    ),
  };
}

function update(model, action) {
  return Action.case({
    Add: title => addTodo(model, title),
    Remove: id => removeTodo(model, id),
    Archive: () => archiveTodos(model),
    ToggleAll: done => toggleAll(model, done),
    Filter: filter => ({ ...model, filter }),
    Modify: (id, action2) => modifyTodo(model, id, action2),
  }, action);
}

export default { view, init, update, Action };
