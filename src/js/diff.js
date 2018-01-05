import { nodes } from '../cpp/domApi';

const emptyObj = {};

export function eventProxy(e) {
  return this.asmDomEvents[e.type](e);
}

export default (oldVnodePtr, vnodePtr, elmPtr) => {
  const elm = nodes[elmPtr];
  const oldNode = window.asmDomHelpers.vnodesData[oldVnodePtr];
  const newNode = window.asmDomHelpers.vnodesData[vnodePtr];
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
};
