class HelloComponent extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  get props() {
    return {
      name: this.name,
    };
  }

  get name() {
    return this.getAttribute('name') || 'World';
  }

  set name(val) {
    this.setAttribute('name', val);
  }

  constructor() {
    super();
    this.update();
  }

  attributeChangedCallback() {
    this.update();
    this.shadowRoot.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  disconnectedCallback() {
    window.asmDom.deleteVNode(this.currentView);
  }

  update() {
    const { patch } = window.asmDom;
    if (!this.currentView) {
      const root = document.createElement('div');
      this.attachShadow({ mode: 'open' }).appendChild(root);
      this.currentView = root;
    }
    this.currentView = patch(this.currentView, this.render());
  }

  render() {
    const { h } = window.asmDom;
    const name = this.props.name;

    return h('div', `Hello ${name}!`);
  }
}

customElements.define('hello-component', HelloComponent);
