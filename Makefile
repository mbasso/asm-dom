# if you are using windows, comment line 5, 6 and 7 and uncomment line 8, 9 and 10
# leave it as it was before committing as travis uses linux
SRCDIR := src
TESTDIR := test
SRCS := $(shell find $(SRCDIR) -name "*.js")
SRCSCPP := $(shell find $(SRCDIR) -name "*.cpp")
TEST_FILES := $(shell find $(TESTDIR) -name "*.cpp")
#SRCS := $(shell FORFILES /P $(SRCDIR) /S /M *.js /C "CMD /C ECHO @relpath")
#SRCSCPP := $(shell FORFILES /P $(SRCDIR) /S /M *.cpp /C "CMD /C ECHO @relpath")
#TEST_FILES := $(shell FORFILES /P $(TESTDIR) /S /M *.cpp /C "CMD /C ECHO @relpath")

ESDIR := es
LIBDIR := lib
ES := $(SRCS:$(SRCDIR)/%=$(ESDIR)/%)
LIBS := $(SRCS:$(SRCDIR)/%=$(LIBDIR)/%)
DISTDIR := dist
DISTJS := $(DISTDIR)/js
UMDJS := $(DISTJS)/asm-dom.js
TESTCPP := test/cpp/app.asm.js
COMPILED := compiled
COMPILEDASMJS := $(COMPILED)/asmjs
COMPILEDWASM := $(COMPILED)/wasm
CPPDIR := cpp

TREE := \
	$(COMPILED) \
	$(COMPILEDASMJS) \
	$(COMPILEDWASM) \
	$(DISTDIR) \
	$(DISTJS) \
	$(ESDIR) \
	$(LIBDIR) \
	$(sort $(patsubst %/,%,$(dir $(ES)))) \
	$(sort $(patsubst %/,%,$(dir $(LIBS))))

FILES = \
	src/cpp/asm-dom.cpp \
	src/cpp/asm-dom-server.cpp

CFLAGS = \
	-O3 \
	--bind \
	-Wall \
	-Werror \
	-Wall \
	-Wno-deprecated \
	-Wno-parentheses \
	-Wno-format

WASM_OPTIONS = \
	-O3 \
	--bind \
	--memory-init-file 0 \
	--llvm-lto 3 \
	--llvm-opts 3 \
	--js-opts 1 \
	-s ENVIRONMENT=node \
	-s MODULARIZE=1 \
	-s ALLOW_MEMORY_GROWTH=1 \
	-s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
	-s ABORTING_MALLOC=1 \
	-s NO_EXIT_RUNTIME=1 \
	-s NO_FILESYSTEM=1 \
	-s DISABLE_EXCEPTION_CATCHING=2 \
	-s BINARYEN=1 \
	-s EXPORTED_RUNTIME_METHODS=[\'UTF8ToString\']

ASMJS_OPTIONS = \
	-O3 \
	--bind \
	--memory-init-file 0 \
	--llvm-lto 3 \
	--llvm-opts 3 \
	--js-opts 1 \
	-s ENVIRONMENT=node \
	-s MODULARIZE=1 \
	-s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
	-s ELIMINATE_DUPLICATE_FUNCTIONS=1 \
	-s ABORTING_MALLOC=1 \
	-s NO_EXIT_RUNTIME=1 \
	-s NO_FILESYSTEM=1 \
	-s DISABLE_EXCEPTION_CATCHING=2 \
	-s EXPORTED_RUNTIME_METHODS=[\'UTF8ToString\'] \
	-s WASM=0

.PHONY: all install clean lint test test_js test_watch build

all: build

install:
	npm install

clean:
	npx rimraf $(DISTDIR) $(LIBDIR) $(ESDIR) $(CPPDIR) .nyc_output $(COMPILED) $(TESTCPP)

lint:
	npx eslint src test build

test: $(COMPILEDASMJS)/asm-dom.asm.js $(COMPILEDWASM)/asm-dom.js $(TESTCPP) test_js

test_js:
	npx cross-env BABEL_ENV=commonjs TEST_ENV=node mocha --require babel-register test/cpp/toHTML/toHTML.spec.js
	npx cross-env BABEL_ENV=commonjs TEST_ENV=node mocha --require babel-register test/js/toHTML.spec.js
	npx cross-env BABEL_ENV=commonjs nyc --require babel-register mocha --recursive

build: $(COMPILED)/asm-dom.a $(COMPILEDASMJS)/asm-dom.asm.js $(COMPILEDWASM)/asm-dom.js $(TESTCPP) $(LIBS) $(ES) $(UMDJS)
	npx ncp $(SRCDIR)/cpp $(CPPDIR)

$(TESTCPP): $(SRCSCPP) $(TEST_FILES)
	emcc \
		-DASMDOM_TEST \
		$(CFLAGS) \
		$(ASMJS_OPTIONS) \
		$(FILES) \
		$(TEST_FILES) \
		-o $@

.SECONDEXPANSION:
$(COMPILED)/asm-dom.a: $(SRCSCPP) | $$(@D)
	emcc \
		-DASMDOM_JS_SIDE \
		$(CFLAGS) \
		$(FILES) \
		src/js/index.cpp \
		-o $@
$(COMPILEDASMJS)/asm-dom.asm.js: $(FILES) | $$(@D)
	emcc \
		-DASMDOM_JS_SIDE \
		$(ASMJS_OPTIONS) \
		$(FILES) \
		src/js/index.cpp \
		-o $@

$(COMPILEDWASM)/asm-dom.js: $(FILES) | $$(@D)
	emcc \
		-DASMDOM_JS_SIDE \
		$(WASM_OPTIONS) \
		$(FILES) \
		src/js/index.cpp \
		-o $@

$(ESDIR)/%: $(SRCDIR)/% | $$(@D)
	npx cross-env BABEL_ENV=es babel $< --out-file $@

$(LIBDIR)/%: $(SRCDIR)/% | $$(@D)
	npx cross-env BABEL_ENV=commonjs babel $< --out-file $@

$(UMDJS): $(SRCS) | $$(@D)
	npx cross-env BABEL_ENV=commonjs webpack --env.prod src/js/index.js $@

$(TREE): %:
	npx mkdirp $@
