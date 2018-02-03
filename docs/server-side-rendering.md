---
id: server-side-rendering
title: Server Side Rendering
---

If you are interested in server side rendering, you can do that with asm-dom in 2 simple steps:

- You can use `toHTML` to generate HTML on the server and send it to the client for faster page loads and to allow search engines to crawl your pages for SEO purposes.
- After that you can call `toVNode` on the node that you have server-rendered and patch it with a vnode created on the client. In this way asm-dom will preserve it and only attach event handlers, providing a fantastic first-load experience.

Here is an example:

```c++
// a function that returns the view, used on client and server
VNode* view() {
  return (
    h("div",
      Data(
        Attrs {
          {"id", "root"}
        }
      ),
      Children {
        h("h1", std::string("Title")),
        h("button",
          Data(
            Attrs {
              {"class", "btn"}
            },
            Callbacks {
              {"onclick", onButtonClick}
            }
          ),
          "Click Me!"
        )
      }
    )
  );
}

// on the server
VNode* vnode = view();
std::string appString = toHTML(vnode);
std::string html = (
  "<!DOCTYPE html>"
  "<html>"
    "<head>"
      "<title>My Awesome App</title>"
      "<link rel=\"stylesheet\" href=\"/index.css\" />"
    "</head>"
    
    "<body>"
      + appString +
    "</body>"
    
    "<script src=\"/bundle.js\"></script>"
  "</html>"
);

// on the client
VNode* oldVNode = toVNode(
  emscripten::val::global("document").call<emscripten::val>("getElementById", emscripten::val("root"))
);
VNode* vnode = view();
patch(oldVNode, vnode); // attach event handlers
```
