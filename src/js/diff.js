import { nodes } from './domApi';

export default (oldVnodePtr, vnodePtr, elmPtr) => {
  let oldRaws = (window.asmDomHelpers.vnodesData[oldVnodePtr] || {}).raw;
  let newRaws = (window.asmDomHelpers.vnodesData[vnodePtr] || {}).raw;

  if (!oldRaws && !newRaws || oldRaws === newRaws) return;
  oldRaws = oldRaws || {};
  newRaws = newRaws || {};

  const elm = nodes[elmPtr];

  for (const key in oldRaws) {
    if (!newRaws[key]) {
      elm[key] = undefined;
    }
  }

  for (const key in newRaws) {
    if (oldRaws[key] !== newRaws[key]) {
      elm[key] = newRaws[key];
    }
  }

  elm.asmDomRaws = Object.keys(newRaws);
};
