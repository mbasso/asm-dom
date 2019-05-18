// eslint-disable-next-line
Array.prototype.instanceofArray = true;

const getChildren = (Module, arr) => {
  const result = new Module.VNodePtrVector();
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      result.push_back(Module._h_ti(arr[i], true));
    } else if (arr[i] !== false && arr[i] !== null && arr[i] !== undefined) {
      result.push_back(arr[i]);
    }
  }
  return result;
};

const getData = (Module, obj) => {
  let hasRaws = obj.raw !== undefined;
  let hasEvents = false;

  let ref;
  const attrs = new Module.MapStringString();
  const raw = obj.raw !== undefined ? obj.raw : {};
  const events = {};

  if (typeof obj.className === 'string') attrs.set('class', obj.className);
  const keys = Object.keys(obj);
  let i = keys.length;
  while (i--) {
    const key = keys[i];
    const value = obj[key];
    if (key === 'value' || key === 'checked') {
      raw[key] = value;
      hasRaws = true;
    } else if (typeof value === 'function') {
      if (key === 'ref') {
        ref = value;
      } else {
        events[key.replace(/^on/, '')] = value;
        hasEvents = true;
      }
    } else if (value !== false && key !== 'raw' && key !== 'className') {
      // eslint-disable-next-line
      attrs.set(key, '' + value);
    }
  }

  return {
    ref,
    raw: hasRaws ? raw : undefined,
    events: hasEvents ? events : undefined,
    attrs,
  };
};

export default (Module, a, b, c, d) => {
  let result;
  let data;
  if (b === undefined) {
    result = Module._h_s(a);
  } else if (c === undefined) {
    if (b.instanceofArray === true) {
      result = Module._h_sc(a, b = getChildren(Module, b));
      b.delete();
    } else {
      switch (typeof b) {
        case 'boolean':
          result = Module._h_ti(a, b);
          break;
        case 'string':
          result = Module._h_st(a, b);
          break;
        case 'number':
          result = Module._h_sn(a, b);
          break;
        case 'object':
          data = getData(Module, b);
          result = Module._h_sd(a, data.attrs);
          break;
        default:
          throw new Error('Invalid argument: ', b);
      }
    }
  } else if (d === undefined) {
    data = getData(Module, b);
    if (c.instanceofArray === true) {
      result = Module._h_sdc(a, data.attrs, c = getChildren(Module, c));
      c.delete();
    } else {
      switch (typeof c) {
        case 'string':
          result = Module._h_sdt(a, data.attrs, c);
          break;
        case 'number':
          result = Module._h_sdn(a, data.attrs, c);
          break;
        default:
          throw new Error('Invalid argument: ', c);
      }
    }
  } else {
    throw new Error('Invalid arguments provided to h function');
  }
  if (data !== undefined) {
    data.attrs.delete();
    if (
      data.raw !== undefined ||
      data.events !== undefined ||
      data.ref !== undefined
    ) {
      delete data.attrs;
      Module.vnodesData[result] = data;
    }
  }
  return result;
};
