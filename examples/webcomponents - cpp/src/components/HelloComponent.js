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
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  attributeChangedCallback() {
    this.render();
    this.shadowRoot.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  render() {
    const name = this.props.name;
    this.shadowRoot.textContent = `Hello ${name}!`;
  }
}

customElements.define('hello-component', HelloComponent);
