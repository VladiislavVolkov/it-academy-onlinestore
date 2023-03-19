class App extends HTMLElement {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.state.count = this.state.count + 1;
    console.log(this.state);
    this.innerHTML = this.render();
  };

  decreaseCount = () => {
    this.state.count = this.state.count - 1;
    console.log(this.state);
    this.innerHTML = this.render();
  };

  onClick = (evt) => {
    if (evt.target.closest('.plus')) {
      this.increaseCount();
    }
    if (evt.target.closest('.minus')) {
      this.decreaseCount();
    }
  };

  connectedCallback() {
    this.innerHTML = this.render();
    this.addEventListener('click', this.onClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    return `
        <div>
            <button class='btn btn-primary minus'>---</button>
            <span>${this.state.count}</span>
            <button class='btn btn-primary plus'>+++</button>
        </div>
    `;
  }
}

customElements.define('it-app', App);
