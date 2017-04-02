import { objToData } from './utils';

const getChildren = (lib, arr) => {
  const result = new lib.VNodePtrVector();
  arr.forEach(x => {
    if (typeof x === 'string') {
      // eslint-disable-next-line
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
		// eslint-disable-next-line
		result = lib._h_s(a);
  } else if (c === undefined) {
    if (typeof b === 'boolean') {
			// eslint-disable-next-line
			result = lib._h_ti(a, b);
    } else if (typeof b === 'string') {
			// eslint-disable-next-line
			result = lib._h_st(a, b);
    } else if (typeof b === 'number') {
			// eslint-disable-next-line
			result = lib._h_sn(a, b);
    } else if (Array.isArray(b)) {
			// eslint-disable-next-line
			result = lib._h_sc(a, getChildren(lib, b));
    } else if (typeof b === 'object') {
			// eslint-disable-next-line
			result = lib._h_sd(a, objToData(b, lib));
    }
  } else if (d === undefined) {
    if (typeof c === 'string') {
			// eslint-disable-next-line
			result = lib._h_sdt(a, objToData(b, lib), c);
    } else if (Array.isArray(c)) {
			// eslint-disable-next-line
			result = lib._h_sdc(a, objToData(b, lib), getChildren(lib, c));
    } else if (typeof c === 'number') {
			// eslint-disable-next-line
			result = lib._h_sdn(a, objToData(b, lib), c);
    }
  } else {
		// eslint-disable-next-line
		result = lib._h_stdc(a, b, c, d);
  }
  return result;
};
