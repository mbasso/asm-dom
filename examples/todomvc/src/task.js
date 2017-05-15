import Type from 'union-type';
import { bind, sequence, isBoolean, classnames } from './helpers';

const KEY_ENTER = 13;

// model : {id: Number, title: String, done: Boolean, editing: Boolean, editingValue: String }
const Action = Type({
  SetTitle: [String],
  Toggle: [isBoolean],
  StartEdit: [],
  CommitEdit: [String],
  CancelEdit: [],
});

const targetChecked = e => Boolean(e.target.checked);
// const targetValue = e => e.target.value;

function onInput(handler, e) {
  if (e.keyCode === KEY_ENTER && e.target.value !== '') {
    handler(Action.CommitEdit(e.target.value));
  }
}

function view(h, task, handler, remove) {
  return h('li', {
    className: classnames({ completed: !!task.done && !task.editing, editing: task.editing }),
    key: task.id,
  }, [
    h('div', {
      className: 'view',
    }, [
      h('input', {
        type: 'checkbox',
        className: 'toggle',
        raw: {
          checked: !!task.done,
          onclick: sequence(targetChecked, Action.Toggle, handler),
        },
      }),
      h('label', {
        raw: {
          ondblclick: bind(handler, Action.StartEdit()),
        },
      }, task.title),
      h('button', {
        className: 'destroy',
        raw: {
          onclick: bind(remove, task.id),
        },
      }),
    ]),
    h('input', {
      className: 'edit',
      raw: {
        value: task.title,
        onblur: bind(handler, Action.CancelEdit()),
        onkeydown: bind(onInput, handler),
      },
    }),
  ]);
}

function init(id, title) {
  return { id, title, done: false, editing: false, editingValue: '' };
}

function update(task, action) {
  return Action.case({
    Toggle: done => ({ ...task, done }),
    StartEdit: () => ({ ...task, editing: true, editingValue: task.title }),
    CommitEdit: title => ({ ...task, title, editing: false, editingValue: '' }),
    CancelEdit: () => ({ ...task, editing: false, editingValue: '' }),
  }, action);
}

export default { view, init, update, Action };
