import { nodes } from '../cpp/domApi';

export default (oldVnodePtr, vnodePtr, elmPtr) => {
  let oldRaws = window.asmDomHelpers.vnodesData[oldVnodePtr];
  let newRaws = window.asmDomHelpers.vnodesData[vnodePtr];
  if (oldRaws !== undefined) oldRaws = oldRaws.raw;
  if (newRaws !== undefined) newRaws = newRaws.raw;

  if (oldRaws === undefined && newRaws === undefined || oldRaws === newRaws) return;
  if (oldRaws === undefined) oldRaws = {};
  if (newRaws === undefined) newRaws = {};

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
