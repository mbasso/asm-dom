const getChildren = (lib, arr) => {
  const result = new lib.VNodeVector();
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
    } else if (Array.isArray(b)) {
			// eslint-disable-next-line
			result = lib._h_sc(a, getChildren(lib, b));
    } else if (b instanceof lib.VNodeData) {
			// eslint-disable-next-line
			result = lib._h_sd(a, b);
    } else if (b instanceof lib.VNode) {
			// eslint-disable-next-line
			result = lib._h_sn(a, b);
    }
  } else if (d === undefined) {
    if (typeof c === 'string') {
			// eslint-disable-next-line
			result = lib._h_sdt(a, b, c);
    } else if (Array.isArray(c)) {
			// eslint-disable-next-line
			result = lib._h_sdc(a, b, getChildren(lib, c));
    } else if (c instanceof lib.VNode) {
			// eslint-disable-next-line
			result = lib._h_sdn(a, b, c);
    }
  } else {
		// eslint-disable-next-line
		result = lib._h_stdc(a, b, c, d);
  }
  return result;
};
