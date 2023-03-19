class App extends HTMLElement {
  constructor() {
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.state.count = this.state.count + 1;
  };

  decreaseCount = () => {
    this.state.count = this.state.count - 1;
  };

  connectedCallback() {
    this.innerHTML = this.render();
  }

  render() {
    return `
        <div>
            <button class='btn'>---</button>
            <span>${this.state.count}</span>
            <button class='btn'>+++</button>
        </div>
    `;
  }
}

customElements.define('it-app', App);
