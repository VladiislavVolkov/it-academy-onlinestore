class App extends HTMLElement {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.state.count = this.state.count + 1;
    this.innerHTML = this.render();
  };

  decreaseCount = () => {
    this.state.count = this.state.count - 1;
    this.innerHTML = this.render();
  };

  onClick = (event) => {
    if (event.target.closest('.plus')) {
      this.increaseCount();
    }
    if (event.target.closest('.minus')) {
      this.decreaseCount();
    }
  };

  //вызовется сразу
  connectedCallback() {
    this.innerHTML = this.render();

    this.addEventListener('click', this.onClick);
  }

  // описывание от событий
  disconnectedCallback() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    return `
        <div> 
            <h1>APP - OnLine Shop</h1>
            <button class='btn btn-primary minus'> - </button>
            <span>${this.state.count}</span>
            <button class='btn btn-primary plus'> + </button>
        </div>
    `;
  }
}
customElements.define('it-app', App);
