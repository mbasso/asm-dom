---
id: init
title: init
---

The `init` function has to been called before using `asm-dom`, in the `main` function, to prepare its environment. It takes a `Config` struct defined as follows:

```c++
struct Config { 
  bool clearMemory = true;
  bool unsafePatch = false;
}
```

- `clearMemory`: `true` by default, set it to `false` if you want to free memory manually, for more information see [memory management](memory-management.html).
- `unsafePatch`: `false` by default, set it to `true` if you haven't a single `patch` in your application. This allows you to call patch with an `oldVnode` that hasn't been used previously.

```c++
Config config = Config();
config.unsafePatch = true;
init(config);
```
