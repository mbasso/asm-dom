var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var code = fs.readFileSync(filePath, 'utf-8');
var preCode = fs.readFileSync(path.join(__dirname, 'pre.js'), 'utf-8');
var postCode = fs.readFileSync(path.join(__dirname, 'post.js'), 'utf-8');

fs.writeFileSync(filePath, preCode + code + postCode);
