#include "utils.hpp"
#include "../HtmlDOMApi/HtmlDOMApi.hpp"
#include <emscripten/val.h>
#include <algorithm>
#include <string>

bool isUndefined(emscripten::val obj) {
  return obj.typeOf().as<std::string>().compare(std::string("undefined")) == 0;
};

bool isNull(emscripten::val obj) {
  return obj.typeOf().as<std::string>().compare(std::string("null")) == 0;
};

bool isDefined(emscripten::val obj) {
  std::string type = obj.typeOf().as<std::string>();
  return type.compare(std::string("undefined")) =! 0 && type.compare(std::string("null")) != 0;
};

bool sameVnode(VNode vnode1, VNode vnode2) {
  return vnode1.key == vnode2.key && vnode1.sel == vnode2.sel;
};

VNode emptyNodeAt(emscripten::val elm) {
  VNode vnode = VNode();
  vnode.elm = elm;
  std::string id;
  if (isDefined(elm["id"])) {
    id += '#';
    id.append(elm["id"].as<std::string>());
  }
  std::string c;
  if (isDefined(elm["className"])) {
    c += '.';
    c.append(elm["className"].as<std::string>());
    std::replace(c.begin(), c.end(), ' ', '.');
  }
  vnode.sel.append(tagName(elm));
  std::transform(vnode.sel.begin(), vnode.sel.end(), vnode.sel.begin(), ::tolower);
  vnode.sel.append(id);
  vnode.sel.append(c)
  return vnode;
};
