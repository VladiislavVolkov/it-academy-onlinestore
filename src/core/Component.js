export class Component extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.state = {};
  }

  //
  setState(callback) {
    this.state = callback();
    this.innerHTML = this.render();
  }

  connectedCallback() {
    this.componentDidMount();
    this.innerHTML = this.render();
  }

  disconnectedCallback() {
    this.componentWillUnmount();
  }

  // вызовется когда атрибуты нашего компонента будут изменены
  // name - имя атрибута, который был изменен
  // oldValue - старое значение атрибута
  // newValue - новое значение атрибута
  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWillUpdate(name, oldValue, newValue);
    this.getAttributeNames().forEach((attributeName) => {
      this.props[attributeName] = this.getAttribute(attributeName);
    });
  }

  // компонент смонтировался
  componentDidMount() {}

  // компонент размонтируется
  componentWillUnmount() {}

  // компонент будет обновляться
  componentWillUpdate() {}

  render() {}
}
