const stringAttrs = ['dataset', 'attributes', 'props'];
const boolAttrs = ['classNames'];

export const objToMap = (obj, map, type, constr) => {
  Object.keys(obj).forEach(x => {
    if (typeof obj[x] === type) {
      map.set(x, obj[x]);
    } else if (obj[x] !== undefined) {
      map.set(x, constr(obj[x]));
    }
  });
  return map;
};

export const objToData = (obj, lib) => {
  const result = new lib.VNodeData();
  if (typeof obj.key === 'string') result.key = obj.key;
  if (typeof obj.ns === 'string') result.ns = obj.ns;
  stringAttrs.forEach(x => {
    if (obj[x]) {
      result[x] = objToMap(obj[x], result[x], 'string', String);
    }
  });
  boolAttrs.forEach(x => {
    if (obj[x]) {
      result[x] = objToMap(obj[x], result[x], 'bool', Boolean);
    }
  });
  return result;
};
