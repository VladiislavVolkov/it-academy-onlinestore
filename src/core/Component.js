export class Component extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.state = {};
  }

  setState(callback) {
    this.state = callback(this.state);
    this.innerHTML = this.render();
  }

  connectedCallback() {
    this.componentDidMount();
    this.innerHTML = this.render();
  }

  disconnectedCallback() {
    this.componentWillUnmount();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWillUpdate(name, oldValue, newValue);
    this.getAttributeNames().forEach((attributeName) => {
      this.props[attributeName] = this.getAttribute(attributeName);
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentWillUpdate() {}

  render() {}
}
