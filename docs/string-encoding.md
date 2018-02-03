---
id: string-encoding
title: String Encoding
---

asm-dom renders attributes in UTF-8 (they are std::string) and props in UTF-16 (they are [emscripten::val](https://kripken.github.io/emscripten-site/docs/api_reference/val.h.html)).
If you want to take a string from javascript, from an input for example, you have to know that this string is encoded in UTF-16 and you can save it in a `std::wstring` variable, so, you have to pay attention to the encoding. In the [TODOMVC example](https://github.com/mbasso/asm-dom/tree/master/examples/todomvc%20-%20cpp) you can see how we have dealed with that. We have created [2 helpers](https://github.com/mbasso/asm-dom/blob/cpp-api/examples/todomvc%20-%20cpp/src/helpers.cpp) that are used when we take values from events (event.target.value) and put values into props. Here is an example:

```c++
std::wstring utf8_to_wstring(const std::string& str) {
  std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
  return converter.from_bytes(str);
};

std::string wstring_to_utf8(const std::wstring& str) {
  std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
  return converter.to_bytes(str);
};

const int KEY_ENTER = 13;

int main() {
  // some code here...

  std::string val = getInputValue();

  VNode* vnode = h("input",
    Data(
      Attrs {
        // UTF-8 encoding, no stuff needed
        {"type", "text"}
        // UTF-8 encoding, u8 needed for accented characters
        {"class", u8"ehilà"}
      },
      Props {
        // setting a prop: UTF-8 to UTF-16
        {"value", emscripten::val(utf8_to_wstring(val))}
        {"anotherProp", emscripten::val(L"This is UTF-16")}
      },
      Callbacks {
        {"onkeydown", [handler](emscripten::val e) -> bool {
          // get value from event: UTF-16 to UTF-8
          std::string value = wstring_to_utf8(e["target"]["value"].as<std::wstring>());
          if (e["keyCode"].as<int>() == KEY_ENTER && !value.empty()) {
            // do stuff...
          }
          return true;
        }}
      }
    )
  );

  // some code here...
};
```
