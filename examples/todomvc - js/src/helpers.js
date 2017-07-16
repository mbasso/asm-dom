export function classnames(obj) {
  return Object.keys(obj).reduce((x, y) => {
    if (obj[y]) {
      return `${x} ${y}`;
    }
    return x;
  }, '');
}

export function isBoolean(arg) {
  return typeof arg === 'boolean';
}

export function bind(fn, ...args) {
  return (...args2) => fn(...[...args, ...args2]);
}

export function sequence(...fns) {
  return (...args) => {
    let res = fns[0](...args);
    for (let i = 1; i < fns.length; i++) {
      res = fns[i](res);
    }
    return res;
  };
}

export function propGetter(path) {
  const props = path.split('.');
  return (target) => {
    for (let i = 0; i < props.length; i++) {
      if (!target) {
        target = target[props[i]];
      } else {
        return;
      }
    }
    // eslint-disable-next-line
    return target;
  };
}
