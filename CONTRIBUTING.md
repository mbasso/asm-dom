# Contributing

We are pleased to receive any contribution by the community. By contributing to asm-dom, you agree to abide by the [code of conduct](https://github.com/mbasso/asm-dom/blob/master/CODE_OF_CONDUCT.md).

## Issues

Before opening an issue, please search the [issue tracker](https://github.com/mbasso/asm-dom/issues) to make sure your issue hasn’t already been reported.
Please follow our guidelines when opening an issue, in that way we can understand your problem easily and we can help you faster.

### Bugs and Improvements

Bugs and Improvements in general can be discussed on the [issue tracker](https://github.com/mbasso/asm-dom/issues), make sure that there aren't other issues with the same purpose.

## Development

Visit the [issue tracker](https://github.com/mbasso/asm-dom/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

```
git clone https://github.com/mbasso/asm-dom.git
```

### Building

#### Building asm-dom

Running `make` will create both the C++ and the JS version of asm-dom, a CommonJS module-per-module build and a UMD build.
```
make
```

The result will be in the `lib`, `es` and `dist` folder.

### Testing and Linting

To run linting:

```
make lint
```

To run tests:

```
make test
```

### Docs

Improvements to the documentation are always welcome. Before submitting your changes, check that they respect all docs style.
For example, use "-" for lists etc.

### Pull Request

Pull requests are welcome, but make sure that your changes respect the 2 points in PR template:

- Pull request has tests / docs demo, and is linted.
- Description explains the issue / use-case resolved, and auto-closes the related issue(s)

Thank you!
