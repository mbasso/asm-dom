// https://developer.mozilla.org/en-US/docs/Web/API/element
const omitProps = {
  attributes: true,
  childElementCount: true,
  children: true,
  classList: true,
  clientHeight: true,
  clientLeft: true,
  clientTop: true,
  clientWidth: true,
  currentStyle: true,
  firstElementChild: true,
  innerHTML: true,
  lastElementChild: true,
  nextElementSibling: true,
  ongotpointercapture: true,
  onlostpointercapture: true,
  onwheel: true,
  outerHTML: true,
  previousElementSibling: true,
  runtimeStyle: true,
  scrollHeight: true,
  scrollLeft: true,
  scrollLeftMax: true,
  scrollTop: true,
  scrollTopMax: true,
  scrollWidth: true,
  tabStop: true,
  tagName: true,
};

const escapes = {
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&apos;',
  '`': '&#96;',
};

const escape = string => String(string).replace(/[&<>"'`]/g, char => escapes[char]);

export const appendProps = (vnodePtr) => {
  let raws = window.asmDomHelpers.vnodesData[vnodePtr];
  if (raws === undefined) return '';

  raws = raws.raw;
  if (raws === undefined) return '';

  let props = '';
  // eslint-disable-next-line
  for (const key in raws) {
    const type = typeof raws[key];
    if (omitProps[key] === undefined && type !== 'function' && type !== 'undefined') {
      props += ` ${key}="${escape(raws[key])}"`;
    }
  }

  return props;
};

export const insertInnerHTML = (vnodePtr) => {
  const data = window.asmDomHelpers.vnodesData[vnodePtr];
  return (
    data !== undefined &&
    data.raw !== undefined &&
    data.raw.innerHTML !== undefined
   ) ? String(data.raw.innerHTML)
     : '';
};

export const toHTML = (vnode) => {
  if (typeof vnode !== 'number') return '';

  const html = window.asmDom._toHTML(vnode);

  if (window.asmDom.clearMemory === true) {
    setTimeout(window.asmDom.deleteVNode.bind(null, vnode));
  }

  return html;
};
