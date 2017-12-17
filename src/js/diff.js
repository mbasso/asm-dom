import { nodes } from '../cpp/domApi';

const emptyObj = {};

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
        elm.removeEventListener(key, oldValues[key], false);
      }
    }

    elm.asmDomEvents = {};
    // eslint-disable-next-line
    for (const key in newValues) {
      elm.asmDomEvents[key] = newValues[key];
      if (oldValues[key] !== newValues[key]) {
        if (oldValues[key] !== undefined) {
          elm.removeEventListener(key, oldValues[key], false);
        }
        elm.addEventListener(key, newValues[key], false);
      }
    }
  }
};
