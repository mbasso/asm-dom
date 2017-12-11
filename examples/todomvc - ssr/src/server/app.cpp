#include "../../../../src/cpp/asm-dom.hpp"
#include "../../../../src/cpp/asm-dom-server.hpp"
#include "../shared/todos.hpp"
#include "../shared/helpers.hpp"
#include <emscripten.h>
#include <emscripten/bind.h>

using namespace asmdom;
using namespace todomvc::todos;

std::function<void(todomvc::todos::action)> handler;

void onRequest(emscripten::val req, emscripten::val res, emscripten::val next) {
	std::string appString = toHTML(
		view(todomvc::todos::init(), handler)
	);

	res.call<void>("send",
		utf8_to_wstring(
			"<!doctype html>"
			"<html lang=\"en\">"
				"<head>"
					"<meta charset=\"utf-8\">"
					"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
					"<title>asm-dom • TodoMVC</title>"
				"</head>"
				"<body>"
					+ appString +
					"<footer class=\"info\">"
						"<p>Double-click to edit a todo</p>"
						"<p>Created by <a href=\"https://github.com/mbasso\">Matteo Basso</a></p>"
						"<p>Part of <a href=\"http://todomvc.com\">TodoMVC</a></p>"
					"</footer>"
					"<script src=\"bundle.js\"></script>"
				"</body>"
			"</html>"
		)
	);
};

int main() {
	Config config;
	init(config);

	EM_ASM(
		var path = require('path');
		var express = require('express');
		var app = express();
		var port = 9000;

		app.use(express['static']('./dist/client'));
		app.get('/', Module['onRequest']);
		app.listen(port);
		console.log('Listening on port ' + port + '...');
	);

	return 0;
};

EMSCRIPTEN_BINDINGS(app) {
  emscripten::function("onRequest", &onRequest);
};
