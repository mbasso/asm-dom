import { nodes } from './domApi';

export default (oldVnodePtr, vnodePtr, elmPtr) => {
  let oldRaws = window.asmDomHelpers.vnodesData[oldVnodePtr];
  let newRaws = window.asmDomHelpers.vnodesData[vnodePtr];
  oldRaws = oldRaws !== undefined && oldRaws !== null ? oldRaws.raw : undefined;
  newRaws = newRaws !== undefined && newRaws !== null ? newRaws.raw : undefined;

  if (oldRaws === undefined && newRaws === undefined || oldRaws === newRaws) return;
  oldRaws = oldRaws !== undefined && oldRaws !== null ? oldRaws : {};
  newRaws = newRaws !== undefined && newRaws !== null ? newRaws : {};

  const elm = nodes[elmPtr];

  for (const key in oldRaws) {
    if (newRaws[key] === undefined) {
      elm[key] = undefined;
    }
  }

  for (const key in newRaws) {
    if (oldRaws[key] !== newRaws[key] || (key === 'value' && elm[key] !== newRaws[key])) {
      elm[key] = newRaws[key];
    }
  }

  elm.asmDomRaws = Object.keys(newRaws);
};
