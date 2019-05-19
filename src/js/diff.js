const emptyObj = {};

export default (Module, oldVnodePtr, vnodePtr, elm, eventProxy) => {
  const oldNode = Module.vnodesData[oldVnodePtr];
  const newNode = Module.vnodesData[vnodePtr];
  let oldValues = oldNode !== undefined && oldNode.raw !== undefined ? oldNode.raw : emptyObj;
  let newValues = newNode !== undefined && newNode.raw !== undefined ? newNode.raw : emptyObj;

  if (oldValues !== newValues) {
    for (const key in oldValues) {
      if (newValues[key] === undefined) {
        elm[key] = undefined;
      }
    }

    elm.asmDomRaws = [];
    // eslint-disable-next-line
    for (const key in newValues) {
      elm.asmDomRaws.push(key);
      if (
        oldValues[key] !== newValues[key] ||
        ((key === 'value' || key === 'checked') && elm[key] !== newValues[key])
      ) {
        elm[key] = newValues[key];
      }
    }
  }

  oldValues = oldNode !== undefined && oldNode.events !== undefined ? oldNode.events : emptyObj;
  newValues = newNode !== undefined && newNode.events !== undefined ? newNode.events : emptyObj;

  if (oldValues !== newValues) {
    for (const key in oldValues) {
      if (newValues[key] === undefined) {
        elm.removeEventListener(key, eventProxy, false);
        delete elm.asmDomEvents[key];
      }
    }

    if (elm.asmDomEvents === undefined) {
      elm.asmDomEvents = {};
    }
    // eslint-disable-next-line
    for (const key in newValues) {
      if (oldValues[key] === undefined) {
        elm.addEventListener(key, eventProxy, false);
      }
      elm.asmDomEvents[key] = newValues[key];
    }
  }

  oldValues = oldNode !== undefined && oldNode.ref !== undefined ? oldNode.ref : undefined;
  newValues = newNode !== undefined && newNode.ref !== undefined ? newNode.ref : undefined;

  if (oldValues !== newValues) {
    if (oldValues !== undefined) oldValues(null);
    if (newValues !== undefined) newValues(elm);
  }
};
