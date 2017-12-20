import { JSDOM } from 'jsdom';
import installCE from 'document-register-element/pony';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.HTMLElement = dom.window.HTMLElement;
installCE(global, 'force');

class WebComponent extends HTMLElement {}
customElements.define('web-component', WebComponent);
