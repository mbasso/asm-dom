const stringAttrs = ['key', 'ns'];
const stringMapAttrs = ['dataset', 'attrs', 'props'];
const boolMapAttrs = ['classNames'];

export const objToMap = (prop, type, ListConstr, elmConstr) => {
  const map = new ListConstr();
  Object.keys(prop).forEach(x => {
    map.set(x, typeof prop[x] === type ? prop[x] : elmConstr(prop[x]));
  });
  return map;
};

export const objToData = (data, lib) => {
  stringAttrs.forEach(x => {
    if (typeof data[x] !== 'string') {
      data[x] = '';
    }
  });
  stringMapAttrs.forEach(x => {
    data[x] = data[x] ? (
      objToMap(data[x], 'string', lib.MapStringString, String)
    ) : new lib.MapStringString();
  });
  boolMapAttrs.forEach(x => {
    data[x] = data[x] ? (
      objToMap(data[x], 'bool', lib.MapStringBool, Boolean)
    ) : new lib.MapStringBool();
  });
  return data;
};
