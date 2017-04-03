import { objToData } from './utils';

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

export const getHFunction = (lib) => (a, b, c, d) => {
  if (b === undefined) {
    return lib._h_s(a);
  } else if (c === undefined) {
    if (Array.isArray(b)) {
      const result = lib._h_sc(a, b = getChildren(lib, b));
      b.delete();
      return result;
    }
    switch (typeof b) {
      case 'boolean':
        return lib._h_ti(a, b);
      case 'string':
        return lib._h_st(a, b);
      case 'number':
        return lib._h_sn(a, b);
      case 'object':
        return lib._h_sd(a, objToData(b, lib));
      default:
        throw new Error('Invalid argument: ', b);
    }
  } else if (d === undefined) {
    if (Array.isArray(c)) {
      const result = lib._h_sdc(a, objToData(b, lib), c = getChildren(lib, c));
      c.delete();
      return result;
    }
    switch (typeof c) {
      case 'string':
        return lib._h_sdt(a, objToData(b, lib), c);
      case 'number':
        return lib._h_sdn(a, objToData(b, lib), c);
      default:
        throw new Error('Invalid argument: ', c);
    }
  } else {
    return lib._h_stdc(a, b, c, d);
  }
};
