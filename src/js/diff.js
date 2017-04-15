import { nodes } from './domApi';

export default (oldVnodePtr, vnodePtr, elmPtr) => {
  let oldListeners = (window.asmDomHelpers.vnodesData[oldVnodePtr] || {}).raw;
  let newListeners = (window.asmDomHelpers.vnodesData[vnodePtr] || {}).raw;

  if (!oldListeners && !newListeners || oldListeners === newListeners) return;
  oldListeners = oldListeners || {};
  newListeners = newListeners || {};

  const elm = nodes[elmPtr];

  for (const key in oldListeners) {
    if (!newListeners[key]) {
      elm[key] = undefined;
    }
  }

  for (const key in newListeners) {
    if (oldListeners[key] !== newListeners[key]) {
      elm[key] = newListeners[key];
    }
  }

  elm.asmDomListeners = Object.keys(newListeners);
};
