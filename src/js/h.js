const getChildren = (lib, arr) => {
  const result = new lib.VNodePtrVector();
  arr.forEach(x => {
    if (typeof x === 'string') {
      result.push_back(lib._h_ti(x, true));
    } else if (x) {
      result.push_back(x);
    }
  });
  return result;
};

const objToProps = (lib, obj) => {
  const map = new lib.MapStringString();
  Object.keys(obj).forEach(x => {
    if (typeof obj[x] === 'string') {
      map.set(x, obj[x]);
    } else if (obj[x]) {
      map.set(x, String(obj[x]));
    }
  });
  return map;
};

export const getHFunction = (lib) => (a, b, c, d) => {
  let result;
  if (b === undefined) {
    result = lib._h_s(a);
  } else if (c === undefined) {
    if (Array.isArray(b)) {
      result = lib._h_sc(a, b = getChildren(lib, b));
      b.delete();
    } else {
      switch (typeof b) {
        case 'boolean':
          result = lib._h_ti(a, b);
          break;
        case 'string':
          result = lib._h_st(a, b);
          break;
        case 'number':
          result = lib._h_sn(a, b);
          break;
        case 'object':
          result = lib._h_sd(a, b = objToProps(lib, b));
          b.delete();
          break;
        default:
          throw new Error('Invalid argument: ', b);
      }
    }
  } else if (d === undefined) {
    if (Array.isArray(c)) {
      result = lib._h_sdc(a, b = objToProps(lib, b), c = getChildren(lib, c));
      b.delete();
      c.delete();
    } else {
      switch (typeof c) {
        case 'string':
          result = lib._h_sdt(a, b = objToProps(lib, b), c);
          b.delete();
          break;
        case 'number':
          result = lib._h_sdn(a, b = objToProps(lib, b), c);
          b.delete();
          break;
        default:
          throw new Error('Invalid argument: ', c);
      }
    }
  } else {
    result = lib._h_stdc(a, b, c, d);
  }
  return result;
};
