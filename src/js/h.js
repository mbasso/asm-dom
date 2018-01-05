// eslint-disable-next-line
Array.prototype.instanceofArray = true;

const getChildren = (arr) => {
  const result = new window.asmDom.VNodePtrVector();
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      result.push_back(window.asmDom._h_ti(arr[i], true));
    } else if (arr[i] !== false && arr[i] !== null && arr[i] !== undefined) {
      result.push_back(arr[i]);
    }
  }
  return result;
};

const getData = (obj) => {
  let hasRaws = obj.raw !== undefined;
  let hasEvents = false;

  const attrs = new window.asmDom.MapStringString();
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
      events[key.replace(/^on/, '')] = value;
      hasEvents = true;
    } else if (value !== false && key !== 'raw' && key !== 'className') {
      // eslint-disable-next-line
      attrs.set(key, '' + value);
    }
  }

  return {
    raw: hasRaws ? raw : undefined,
    events: hasEvents ? events : undefined,
    attrs,
  };
};

export default (a, b, c, d) => {
  let result;
  let data;
  if (b === undefined) {
    result = window.asmDom._h_s(a);
  } else if (c === undefined) {
    if (b.instanceofArray === true) {
      result = window.asmDom._h_sc(a, b = getChildren(b));
      b.delete();
    } else {
      switch (typeof b) {
        case 'boolean':
          result = window.asmDom._h_ti(a, b);
          break;
        case 'string':
          result = window.asmDom._h_st(a, b);
          break;
        case 'number':
          result = window.asmDom._h_sn(a, b);
          break;
        case 'object':
          data = getData(b);
          result = window.asmDom._h_sd(a, data.attrs);
          break;
        default:
          throw new Error('Invalid argument: ', b);
      }
    }
  } else if (d === undefined) {
    data = getData(b);
    if (c.instanceofArray === true) {
      result = window.asmDom._h_sdc(a, data.attrs, c = getChildren(c));
      c.delete();
    } else {
      switch (typeof c) {
        case 'string':
          result = window.asmDom._h_sdt(a, data.attrs, c);
          break;
        case 'number':
          result = window.asmDom._h_sdn(a, data.attrs, c);
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
    if (data.raw !== undefined || data.events !== undefined) {
      delete data.attrs;
      window.asmDomHelpers.vnodesData[result] = data;
    }
  }
  return result;
};
