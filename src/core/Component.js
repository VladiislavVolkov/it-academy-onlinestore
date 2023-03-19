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

  // метод вызван тогдаб, когда атрибуты нашего компонента будут изменены
  // name - имя атрибута
  // oldValue - старое значение атрибута
  // newValue - новое значение атрибута
  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWillUpdate(name, oldValue, newValue);

    // поведение которое следит за всеми атрибутами
    this.getAttributeNames().forEach((attributeName) => {
      this.props[attributeName] = this.getAttribute(attributeName);
    });
  }

  // метод при встраивании в дерево
  componentDidMount() {}

  // метод когда удаляемся из дерева
  componentWillUnmount() {}

  componentWillUpdate() {}

  render() {}
}
