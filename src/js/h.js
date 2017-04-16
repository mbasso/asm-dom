// eslint-disable-next-line
Array.prototype.instanceofArray = true;

const getChildren = (arr) => {
  const result = new window.asmDom.VNodePtrVector();
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      result.push_back(window.asmDom._h_ti(arr[i], true));
    } else if (arr[i]) {
      result.push_back(arr[i]);
    }
  }
  return result;
};

const objToProps = (obj) => {
  const map = new window.asmDom.MapStringString();
  for (const x in obj) {
    if (typeof obj[x] === 'string') {
      map.set(x, obj[x]);
    } else if (obj[x] !== false && x !== 'raw') {
      // eslint-disable-next-line
      map.set(x, '' + obj[x]);
    }
  }
  return map;
};

export default (a, b, c, d) => {
  let result;
  const raw = b && b.raw;
  if (b === undefined) {
    result = window.asmDom._h_s(a);
  } else if (c === undefined) {
    if (b && b.instanceofArray) {
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
          result = window.asmDom._h_sd(a, b = objToProps(b));
          b.delete();
          break;
        default:
          throw new Error('Invalid argument: ', b);
      }
    }
  } else if (d === undefined) {
    if (c && c.instanceofArray) {
      result = window.asmDom._h_sdc(a, b = objToProps(b), c = getChildren(c));
      b.delete();
      c.delete();
    } else {
      switch (typeof c) {
        case 'string':
          result = window.asmDom._h_sdt(a, b = objToProps(b), c);
          b.delete();
          break;
        case 'number':
          result = window.asmDom._h_sdn(a, b = objToProps(b), c);
          b.delete();
          break;
        default:
          throw new Error('Invalid argument: ', c);
      }
    }
  } else {
    result = window.asmDom._h_stdc(a, b, c, d);
  }
  if (raw) window.asmDomHelpers.vnodesData[result] = { raw };
  return result;
};
