
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(Module) {
  Module = Module || {};

var d;d||(d=typeof Module !== 'undefined' ? Module : {});var n={},p;for(p in d)d.hasOwnProperty(p)&&(n[p]=d[p]);d.arguments=[];d.thisProgram="./this.program";d.quit=function(a,b){throw b;};d.preRun=[];d.postRun=[];var r=!1,u=!1,aa=!1,ba=!1;r="object"===typeof window;u="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!r&&!u;ba=!r&&!aa&&!u;var v="";
if(aa){v=__dirname+"/";var ca,ea;d.read=function(a,b){ca||(ca=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};d.readBinary=function(a){a=d.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a};1<process.argv.length&&(d.thisProgram=process.argv[1].replace(/\\/g,"/"));d.arguments=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof x))throw a;});process.on("unhandledRejection",
w);d.quit=function(a){process.exit(a)};d.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(d.read=function(a){return read(a)}),d.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||w("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?d.arguments=scriptArgs:"undefined"!=typeof arguments&&(d.arguments=arguments),"function"===typeof quit&&(d.quit=function(a){quit(a)});
else if(r||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),_scriptDir&&(v=_scriptDir),0!==v.indexOf("blob:")?v=v.substr(0,v.lastIndexOf("/")+1):v="",d.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(d.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),d.readAsync=function(a,b,c){var e=new XMLHttpRequest;e.open("GET",a,!0);
e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):c()};e.onerror=c;e.send(null)},d.setWindowTitle=function(a){document.title=a};var fa=d.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=d.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(p in n)n.hasOwnProperty(p)&&(d[p]=n[p]);n=void 0;
var ha={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},ia=0;"object"!==typeof WebAssembly&&y("no native wasm support detected");var z,ja=!1,ka="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function la(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&ka)return ka.decode(a.subarray(b,c));for(e="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|g);else{var k=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|k:(f&7)<<18|g<<12|k<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}return e}function ma(a,b){return a?la(A,a,b):""}
function na(a,b,c,e){if(0<e){e=c+e-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023}if(127>=g){if(c>=e)break;b[c++]=g}else{if(2047>=g){if(c+1>=e)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=e)break;b[c++]=224|g>>12}else{if(c+3>=e)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}
function oa(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function pa(a){var b=oa(a)+1,c=qa(b);na(a,B,c,b);return c}function ra(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,B,A,sa,ta,C,E,ua,va;
function wa(){d.HEAP8=B=new Int8Array(buffer);d.HEAP16=sa=new Int16Array(buffer);d.HEAP32=C=new Int32Array(buffer);d.HEAPU8=A=new Uint8Array(buffer);d.HEAPU16=ta=new Uint16Array(buffer);d.HEAPU32=E=new Uint32Array(buffer);d.HEAPF32=ua=new Float32Array(buffer);d.HEAPF64=va=new Float64Array(buffer)}var F=d.TOTAL_MEMORY||16777216;5242880>F&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+F+"! (TOTAL_STACK=5242880)");
d.buffer?buffer=d.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(z=new WebAssembly.Memory({initial:F/65536}),buffer=z.buffer):buffer=new ArrayBuffer(F);wa();C[3280]=5256256;function G(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.na;"number"===typeof c?void 0===b.ha?d.dynCall_v(c):d.dynCall_vi(c,b.ha):c(void 0===b.ha?null:b.ha)}}}var xa=[],ya=[],za=[],Ba=[],H=!1;function Ca(){var a=d.preRun.shift();xa.unshift(a)}var I=0,Da=null,J=null;
d.preloadedImages={};d.preloadedAudios={};function Ea(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="app.wasm";if(!Ea()){var Fa=K;K=d.locateFile?d.locateFile(Fa,v):v+Fa}function Ga(){try{if(d.wasmBinary)return new Uint8Array(d.wasmBinary);if(d.readBinary)return d.readBinary(K);throw"both async and sync fetching of the wasm failed";}catch(a){w(a)}}
function Ha(){return d.wasmBinary||!r&&!u||"function"!==typeof fetch?new Promise(function(a){a(Ga())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ga()})}
function Ia(a){function b(a){d.asm=a.exports;I--;d.monitorRunDependencies&&d.monitorRunDependencies(I);0==I&&(null!==Da&&(clearInterval(Da),Da=null),J&&(a=J,J=null,a()))}function c(a){b(a.instance)}function e(a){Ha().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);w(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ha};I++;d.monitorRunDependencies&&d.monitorRunDependencies(I);if(d.instantiateWasm)try{return d.instantiateWasm(f,
b)}catch(g){return y("Module.instantiateWasm callback failed with error: "+g),!1}d.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ea()||"function"!==typeof fetch?e(c):WebAssembly.instantiateStreaming(fetch(K,{credentials:"same-origin"}),f).then(c,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");e(c)});return{}}
d.asm=function(a,b){b.memory=z;b.table=new WebAssembly.Table({initial:72,maximum:72,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Ia(b)};
var M=[function(a,b){d.removeAttribute(a,d.UTF8ToString(b))},function(a,b,c){d.setAttribute(a,d.UTF8ToString(b),d.UTF8ToString(c))},function(a){d.nodes[a].asmDomRaws=[]},function(a,b){d.nodes[a].asmDomRaws.push(d.UTF8ToString(b))},function(a,b){a=d.nodes[a];a.asmDomVNode=b;void 0===a.asmDomEvents&&(a.asmDomEvents={})},function(a,b){b=d.UTF8ToString(b).replace(/^on/,"");a=d.nodes[a];a.removeEventListener(b,d.ia,!1);delete a.asmDomEvents[b]},function(a,b){b=d.UTF8ToString(b).replace(/^on/,"");a=d.nodes[a];
a.addEventListener(b,d.ia,!1);a.asmDomEvents[b]=d.ia},function(a,b){return 0===b?d.createElement(d.UTF8ToString(a)):d.createElementNS(d.UTF8ToString(b),d.UTF8ToString(a))},function(a){return d.createTextNode(d.UTF8ToString(a))},function(){return d.createDocumentFragment()},function(a){return d.createComment(d.UTF8ToString(a))},function(a,b){d.appendChild(a,b)},function(a){d.removeChild(a)},function(a,b,c){d.insertBefore(a,b,d.nextSibling(c))},function(a,b,c){d.insertBefore(a,b,c)},function(a,b,c){d.insertBefore(a,
b,c)},function(a,b){d.sa(a,d.UTF8ToString(b))},function(a,b){var c=d.parentNode(b);0!==c&&(d.insertBefore(c,a,d.nextSibling(b)),d.removeChild(b))},function(){function a(a){if(null===a)return 0;if(void 0!==a.asmDomPtr)return a.asmDomPtr;c[++e]=a;return a.asmDomPtr=e}d.ia=function(a){return d.functionCallback(this.asmDomVNode,a.type,a)};var b=d.recycler={nodes:{}};b.create=function(a){a=a.toUpperCase();var c=b.nodes[a];return void 0!==c&&c.pop()||document.createElement(a)};b.createNS=function(a,c){a=
a.toUpperCase();var f=b.nodes[a+c];a=void 0!==f&&f.pop()||document.createElementNS(c,a);a.asmDomNS=c;return a};b.createText=function(a){var c=b.nodes["#text"];return void 0!==c&&(c=c.pop(),void 0!==c)?(c.nodeValue=a,c):document.createTextNode(a)};b.createComment=function(a){var c=b.nodes["#comment"];return void 0!==c&&(c=c.pop(),void 0!==c)?(c.nodeValue=a,c):document.createComment(a)};b.collect=function(a){for(var c;c=a.lastChild;)a.removeChild(c),b.collect(c);for(c=void 0!==a.attributes?a.attributes.length:
0;c--;)a.removeAttribute(a.attributes[c].name);a.asmDomVNode=void 0;void 0!==a.asmDomRaws&&(a.asmDomRaws.forEach(function(b){a[b]=void 0}),a.asmDomRaws=void 0);void 0!==a.asmDomEvents&&(Object.keys(a.asmDomEvents).forEach(function(b){a.removeEventListener(b,a.asmDomEvents[b],!1)}),a.asmDomEvents=void 0);null!==a.nodeValue&&""!==a.nodeValue&&(a.nodeValue="");Object.keys(a).forEach(function(b){if("a"!==b[0]||"s"!==b[1]||"m"!==b[2]||"D"!==b[3]||"o"!==b[4]||"m"!==b[5])a[b]=void 0});c=a.nodeName;void 0!==
a.asmDomNS&&(c+=a.namespaceURI);var e=b.nodes[c];void 0!==e?e.push(a):b.nodes[c]=[a]};var c=d.nodes={0:null},e=0;d.addNode=function(b){a(b.parentNode);a(b.nextSibling);return a(b)};d.createElement=function(c){return a(b.create(c))};d.createElementNS=function(c,e){return a(b.createNS(e,c))};d.createTextNode=function(c){return a(b.createText(c))};d.createComment=function(c){return a(b.createComment(c))};d.createDocumentFragment=function(){return a(document.createDocumentFragment())};d.insertBefore=
function(a,b,e){c[a].insertBefore(c[b],c[e])};d.removeChild=function(a){a=c[a];if(null!==a&&void 0!==a){var e=a.parentNode;null!==e&&e.removeChild(a);b.collect(a)}};d.appendChild=function(a,b){c[a].appendChild(c[b])};d.removeAttribute=function(a,b){c[a].removeAttribute(b)};d.setAttribute=function(a,b,e){120!==b.charCodeAt(0)?c[a].setAttribute(b,e):58===b.charCodeAt(3)?c[a].setAttributeNS("http://www.w3.org/XML/1998/namespace",b,e):58===b.charCodeAt(5)?c[a].setAttributeNS("http://www.w3.org/1999/xlink",
b,e):c[a].setAttribute(b,e)};d.parentNode=function(a){a=c[a];return null!==a&&void 0!==a&&null!==a.parentNode?a.parentNode.asmDomPtr:0};d.nextSibling=function(a){a=c[a];return null!==a&&void 0!==a&&null!==a.nextSibling?a.nextSibling.asmDomPtr:0};d.sa=function(a,b){c[a].nodeValue=b}}];ya.push({na:function(){Ja()}});function N(){return!!N.la}var Ka=[null,[],[]],P=0;function Q(){P+=4;return C[P-4>>2]}var La={};
function Ma(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Na=void 0;function R(a){for(var b="";A[a];)b+=Na[A[a++]];return b}var S={},T={},Oa={};function Pa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Qa(a,b){a=Pa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Ra(a){var b=Error,c=Qa(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var Sa=void 0;function U(a){throw new Sa(a);}var Ta=void 0;function Ua(a,b){function c(a){a=b(a);if(a.length!==e.length)throw new Ta("Mismatched type converter count");for(var c=0;c<e.length;++c)V(e[c],a[c])}var e=[];e.forEach(function(b){Oa[b]=a});var f=Array(a.length),g=[],k=0;a.forEach(function(a,b){T.hasOwnProperty(a)?f[b]=T[a]:(g.push(a),S.hasOwnProperty(a)||(S[a]=[]),S[a].push(function(){f[b]=T[a];++k;k===g.length&&c(f)}))});0===g.length&&c(f)}
function V(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||U('type "'+e+'" must have a positive integer typeid pointer');if(T.hasOwnProperty(a)){if(c.qa)return;U("Cannot register type '"+e+"' twice")}T[a]=b;delete Oa[a];S.hasOwnProperty(a)&&(b=S[a],delete S[a],b.forEach(function(a){a()}))}var Va=[],W=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Wa(a){4<a&&0===--W[a].ja&&(W[a]=void 0,Va.push(a))}function X(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Va.length?Va.pop():W.length;W[b]={ja:1,value:a};return b}}function Xa(a){return this.fromWireType(E[a>>2])}function Ya(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Za(a,b){switch(b){case 2:return function(a){return this.fromWireType(ua[a>>2])};case 3:return function(a){return this.fromWireType(va[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}function $a(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Qa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function ab(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function bb(a,b){var c=d;if(void 0===c[a].fa){var e=c[a];c[a]=function(){c[a].fa.hasOwnProperty(arguments.length)||U("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].fa+")!");return c[a].fa[arguments.length].apply(this,arguments)};c[a].fa=[];c[a].fa[e.ma]=e}}
function cb(a,b,c){d.hasOwnProperty(a)?((void 0===c||void 0!==d[a].fa&&void 0!==d[a].fa[c])&&U("Cannot register public name '"+a+"' twice"),bb(a,a),d.hasOwnProperty(c)&&U("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),d[a].fa[c]=b):(d[a]=b,void 0!==c&&(d[a].ua=c))}function fb(a,b){for(var c=[],e=0;e<a;e++)c.push(C[(b>>2)+e]);return c}
function gb(a,b){a=R(a);if(void 0!==d["FUNCTION_TABLE_"+a])var c=d["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=d["dynCall_"+a];void 0===c&&(c=d["dynCall_"+a.replace(/f/g,"d")],void 0===c&&U("No dynCall invoker for signature: "+a));for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";c=(new Function("dynCall","rawFunction",
f+"};\n"))(c,b)}"function"!==typeof c&&U("unknown function pointer with signature "+a+": "+b);return c}var hb=void 0;function ib(a){a=jb(a);var b=R(a);Y(a);return b}function kb(a,b){function c(a){f[a]||T[a]||(Oa[a]?Oa[a].forEach(c):(e.push(a),f[a]=!0))}var e=[],f={};b.forEach(c);throw new hb(a+": "+e.map(ib).join([", "]));}
function lb(a,b,c){switch(b){case 0:return c?function(a){return B[a]}:function(a){return A[a]};case 1:return c?function(a){return sa[a>>1]}:function(a){return ta[a>>1]};case 2:return c?function(a){return C[a>>2]}:function(a){return E[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function Z(a){a||U("Cannot use deleted val. handle = "+a);return W[a].value}function mb(a,b){var c=T[a];void 0===c&&U(b+" has unknown type "+ib(a));return c}
function nb(a,b){for(var c=Array(a),e=0;e<a;++e)c[e]=mb(C[(b>>2)+e],"parameter "+e);return c}var ob={};function pb(a){var b=ob[a];return void 0===b?R(a):b}var qb=[];function rb(a){var b=qb.length;qb.push(a);return b}function sb(){return B.length}for(var tb=Array(256),ub=0;256>ub;++ub)tb[ub]=String.fromCharCode(ub);Na=tb;Sa=d.BindingError=Ra("BindingError");Ta=d.InternalError=Ra("InternalError");d.count_emval_handles=function(){for(var a=0,b=5;b<W.length;++b)void 0!==W[b]&&++a;return a};
d.get_first_emval=function(){for(var a=5;a<W.length;++a)if(void 0!==W[a])return W[a];return null};hb=d.UnboundTypeError=Ra("UnboundTypeError");
var wb=d.asm({},{m:w,h:function(a){ia=a},f:function(){return ia},k:function(a){return vb(a)},i:function(a){"uncaught_exception"in N?N.la++:N.la=1;throw a;},z:function(a){d.___errno_location&&(C[d.___errno_location()>>2]=a);return a},H:function(a,b){P=b;try{var c=La.oa();Q();var e=Q(),f=Q(),g=Q();(void 0).ta(c,e,g);C[f>>2]=c.position;c.pa&&0===e&&0===g&&(c.pa=null);return 0}catch(k){return w(k),-k.ka}},y:function(a,b){P=b;try{var c=Q(),e=Q(),f=Q();for(b=a=0;b<f;b++){for(var g=C[e+8*b>>2],k=C[e+(8*
b+4)>>2],h=0;h<k;h++){var q=A[g+h],m=Ka[c];0===q||10===q?((1===c?fa:y)(la(m,0)),m.length=0):m.push(q)}a+=k}return a}catch(D){return w(D),-D.ka}},G:function(a,b){P=b;try{var c=La.oa();(void 0).close(c);return 0}catch(e){return w(e),-e.ka}},F:function(a,b,c,e,f){var g=Ma(c);b=R(b);V(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?e:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===c)var e=B;else if(2===c)e=sa;else if(4===c)e=C;else throw new TypeError("Unknown boolean type size: "+
b);return this.fromWireType(e[a>>g])},ga:null})},Q:function(a,b){b=R(b);V(a,{name:b,fromWireType:function(a){var b=W[a].value;Wa(a);return b},toWireType:function(a,b){return X(b)},argPackAdvance:8,readValueFromPointer:Xa,ga:null})},E:function(a,b,c){c=Ma(c);b=R(b);V(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+Ya(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Za(b,c),
ga:null})},s:function(a,b,c,e,f,g){var k=fb(b,c);a=R(a);f=gb(e,f);cb(a,function(){kb("Cannot call "+a+" due to unbound types",k)},b-1);Ua(k,function(c){var e=[c[0],null].concat(c.slice(1)),h=c=a,k=f,t=e.length;2>t&&U("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Aa=null!==e[1]&&!1,da=!1,l=1;l<e.length;++l)if(null!==e[l]&&void 0===e[l].ga){da=!0;break}var db="void"!==e[0].name,L="",O="";for(l=0;l<t-2;++l)L+=(0!==l?", ":"")+"arg"+l,O+=(0!==l?", ":"")+"arg"+
l+"Wired";h="return function "+Pa(h)+"("+L+") {\nif (arguments.length !== "+(t-2)+") {\nthrowBindingError('function "+h+" called with ' + arguments.length + ' arguments, expected "+(t-2)+" args!');\n}\n";da&&(h+="var destructors = [];\n");var eb=da?"destructors":"null";L="throwBindingError invoker fn runDestructors retType classParam".split(" ");k=[U,k,g,ab,e[0],e[1]];Aa&&(h+="var thisWired = classParam.toWireType("+eb+", this);\n");for(l=0;l<t-2;++l)h+="var arg"+l+"Wired = argType"+l+".toWireType("+
eb+", arg"+l+"); // "+e[l+2].name+"\n",L.push("argType"+l),k.push(e[l+2]);Aa&&(O="thisWired"+(0<O.length?", ":"")+O);h+=(db?"var rv = ":"")+"invoker(fn"+(0<O.length?", ":"")+O+");\n";if(da)h+="runDestructors(destructors);\n";else for(l=Aa?1:2;l<e.length;++l)t=1===l?"thisWired":"arg"+(l-2)+"Wired",null!==e[l].ga&&(h+=t+"_dtor("+t+"); // "+e[l].name+"\n",L.push(t+"_dtor"),k.push(e[l].ga));db&&(h+="var ret = retType.fromWireType(rv);\nreturn ret;\n");L.push(h+"}\n");e=$a(L).apply(null,k);l=b-1;if(!d.hasOwnProperty(c))throw new Ta("Replacing nonexistant public symbol");
void 0!==d[c].fa&&void 0!==l?d[c].fa[l]=e:(d[c]=e,d[c].ma=l);return[]})},p:function(a,b,c,e,f){function g(a){return a}b=R(b);-1===f&&(f=4294967295);var k=Ma(c);if(0===e){var h=32-8*c;g=function(a){return a<<h>>>h}}var q=-1!=b.indexOf("unsigned");V(a,{name:b,fromWireType:g,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+Ya(c)+'" to '+this.name);if(c<e||c>f)throw new TypeError('Passing a number "'+Ya(c)+'" from JS side to C/C++ side to an argument of type "'+
b+'", which is outside the valid range ['+e+", "+f+"]!");return q?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:lb(b,k,0!==e),ga:null})},g:function(a,b,c){function e(a){a>>=2;var b=E;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=R(c);V(a,{name:c,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{qa:!0})},D:function(a,b){b=R(b);var c="std::string"===b;V(a,{name:b,fromWireType:function(a){var b=E[a>>
2];if(c){var e=A[a+4+b],k=0;0!=e&&(k=e,A[a+4+b]=0);var h=a+4;for(e=0;e<=b;++e){var q=a+4+e;if(0==A[q]){h=ma(h);if(void 0===m)var m=h;else m+=String.fromCharCode(0),m+=h;h=q+1}}0!=k&&(A[a+4+b]=k)}else{m=Array(b);for(e=0;e<b;++e)m[e]=String.fromCharCode(A[a+4+e]);m=m.join("")}Y(a);return m},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var e="string"===typeof b;e||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||U("Cannot pass non-string to std::string");
var f=(c&&e?function(){return oa(b)}:function(){return b.length})(),h=vb(4+f+1);E[h>>2]=f;if(c&&e)na(b,A,h+4,f+1);else if(e)for(e=0;e<f;++e){var q=b.charCodeAt(e);255<q&&(Y(h),U("String has UTF-16 code units that do not fit in 8 bits"));A[h+4+e]=q}else for(e=0;e<f;++e)A[h+4+e]=b[e];null!==a&&a.push(Y,h);return h},argPackAdvance:8,readValueFromPointer:Xa,ga:function(a){Y(a)}})},P:function(a,b,c){c=R(c);if(2===b){var e=function(){return ta};var f=1}else 4===b&&(e=function(){return E},f=2);V(a,{name:c,
fromWireType:function(a){for(var b=e(),c=E[a>>2],g=Array(c),m=a+4>>f,D=0;D<c;++D)g[D]=String.fromCharCode(b[m+D]);Y(a);return g.join("")},toWireType:function(a,c){var g=e(),k=c.length,m=vb(4+k*b);E[m>>2]=k;for(var D=m+4>>f,t=0;t<k;++t)g[D+t]=c.charCodeAt(t);null!==a&&a.push(Y,m);return m},argPackAdvance:8,readValueFromPointer:Xa,ga:function(a){Y(a)}})},O:function(a,b){b=R(b);V(a,{ra:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},r:function(a,b,c){a=Z(a);b=mb(b,"emval::as");
var e=[],f=X(e);C[c>>2]=f;return b.toWireType(e,a)},w:function(a,b,c,e){a=Z(a);c=nb(b,c);for(var f=Array(b),g=0;g<b;++g){var k=c[g];f[g]=k.readValueFromPointer(e);e+=k.argPackAdvance}a=a.apply(void 0,f);return X(a)},N:function(a,b,c,e,f){a=qb[a];b=Z(b);c=pb(c);var g=[];C[e>>2]=X(g);return a(b,c,g,f)},c:Wa,x:function(a){if(0===a)return X(Function("return this")());a=pb(a);return X(Function("return this")()[a])},M:function(a,b){b=nb(a,b);for(var c=b[0],e=c.name+"_$"+b.slice(1).map(function(a){return a.name}).join("_")+
"$",f=["retType"],g=[c],k="",h=0;h<a-1;++h)k+=(0!==h?", ":"")+"arg"+h,f.push("argType"+h),g.push(b[1+h]);e="return function "+Pa("methodCaller_"+e)+"(handle, name, destructors, args) {\n";var q=0;for(h=0;h<a-1;++h)e+="    var arg"+h+" = argType"+h+".readValueFromPointer(args"+(q?"+"+q:"")+");\n",q+=b[h+1].argPackAdvance;e+="    var rv = handle[name]("+k+");\n";for(h=0;h<a-1;++h)b[h+1].deleteObject&&(e+="    argType"+h+".deleteObject(arg"+h+");\n");c.ra||(e+="    return retType.toWireType(destructors, rv);\n");
f.push(e+"};\n");a=$a(f).apply(null,g);return rb(a)},u:function(a){a=pb(a);return X(d[a])},e:function(a,b){a=Z(a);b=Z(b);return X(a[b])},q:function(a){4<a&&(W[a].ja+=1)},d:function(a){return X(pb(a))},l:function(a){ab(W[a].value);Wa(a)},C:function(a,b,c){a=Z(a);b=Z(b);c=Z(c);a[b]=c},B:function(a,b){a=Z(a);b=Z(b);return a===b},t:function(a,b){a=mb(a,"_emval_take_value");a=a.readValueFromPointer(b);return X(a)},o:function(){d.abort()},A:function(a){return M[a]()},v:function(a,b){return M[a](b)},j:function(a,
b,c){return M[a](b,c)},n:function(a,b,c,e){return M[a](b,c,e)},L:sb,K:function(a,b,c){A.set(A.subarray(b,b+c),a)},J:function(a){if(2147418112<a)return!1;for(var b=Math.max(sb(),16777216);b<a;)536870912>=b?b=ra(2*b):b=Math.min(ra((3*b+2147483648)/4),2147418112);a=ra(b);var c=buffer.byteLength;try{var e=-1!==z.grow((a-c)/65536)?buffer=z.buffer:null}catch(f){e=null}if(!e||e.byteLength!=b)return!1;wa();return!0},I:function(){w("OOM")},a:13360,b:13120},buffer);d.asm=wb;
var jb=d.___getTypeName=function(){return d.asm.R.apply(null,arguments)},Y=d._free=function(){return d.asm.S.apply(null,arguments)};d._main=function(){return d.asm.T.apply(null,arguments)};var vb=d._malloc=function(){return d.asm.U.apply(null,arguments)},Ja=d.globalCtors=function(){return d.asm.da.apply(null,arguments)},qa=d.stackAlloc=function(){return d.asm.ea.apply(null,arguments)};d.dynCall_ii=function(){return d.asm.V.apply(null,arguments)};
d.dynCall_iii=function(){return d.asm.W.apply(null,arguments)};d.dynCall_iiii=function(){return d.asm.X.apply(null,arguments)};d.dynCall_iiiii=function(){return d.asm.Y.apply(null,arguments)};d.dynCall_v=function(){return d.asm.Z.apply(null,arguments)};d.dynCall_vi=function(){return d.asm._.apply(null,arguments)};d.dynCall_vii=function(){return d.asm.$.apply(null,arguments)};d.dynCall_viiii=function(){return d.asm.aa.apply(null,arguments)};d.dynCall_viiiii=function(){return d.asm.ba.apply(null,arguments)};
d.dynCall_viiiiii=function(){return d.asm.ca.apply(null,arguments)};d.asm=wb;d.UTF8ToString=ma;d.then=function(a){if(d.calledRun)a(d);else{var b=d.onRuntimeInitialized;d.onRuntimeInitialized=function(){b&&b();a(d)}}return d};function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}x.prototype=Error();x.prototype.constructor=x;J=function xb(){d.calledRun||yb();d.calledRun||(J=xb)};
d.callMain=function(a){a=a||[];H||(H=!0,G(ya));var b=a.length+1,c=qa(4*(b+1));C[c>>2]=pa(d.thisProgram);for(var e=1;e<b;e++)C[(c>>2)+e]=pa(a[e-1]);C[(c>>2)+b]=0;try{var f=d._main(b,c,0);if(!d.noExitRuntime||0!==f){if(!d.noExitRuntime&&(ja=!0,d.onExit))d.onExit(f);d.quit(f,new x(f))}}catch(g){g instanceof x||("SimulateInfiniteLoop"==g?d.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),y("exception thrown: "+a),d.quit(1,g)))}finally{}};
function yb(a){function b(){if(!d.calledRun&&(d.calledRun=!0,!ja)){H||(H=!0,G(ya));G(za);if(d.onRuntimeInitialized)d.onRuntimeInitialized();d._main&&zb&&d.callMain(a);if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var b=d.postRun.shift();Ba.unshift(b)}G(Ba)}}a=a||d.arguments;if(!(0<I)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ca();G(xa);0<I||d.calledRun||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},
1);b()},1)):b())}}d.run=yb;function w(a){if(d.onAbort)d.onAbort(a);void 0!==a?(fa(a),y(a),a=JSON.stringify(a)):a="";ja=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}d.abort=w;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();var zb=!0;d.noInitialRun&&(zb=!1);d.noExitRuntime=!0;yb();


  return Module
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = Module;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return Module; });
    else if (typeof exports === 'object')
      exports["Module"] = Module;
    