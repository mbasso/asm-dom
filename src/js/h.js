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
  let result;
  if (b === undefined) {
    result = lib._h_s(a);
  } else if (c === undefined) {
    if (Array.isArray(b)) {
      result = lib._h_sc(a, getChildren(lib, b));
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
          result = lib._h_sd(a, objToData(b, lib));
          break;
        default:
          break;
      }
    }
  } else if (d === undefined) {
    if (Array.isArray(c)) {
      result = lib._h_sdc(a, objToData(b, lib), getChildren(lib, c));
    } else {
      switch (typeof c) {
        case 'string':
          result = lib._h_sdt(a, objToData(b, lib), c);
          break;
        case 'number':
          result = lib._h_sdn(a, objToData(b, lib), c);
          break;
        default:
          break;
      }
    }
  } else {
    result = lib._h_stdc(a, b, c, d);
  }
  return result;
};
