import { Component } from './core/Component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseCount() {
    this.setState((state) => {
      return {
        count: state.count < 10 ? state.count + 1 : state.count,
      };
    });
  }

  decreaseCount() {
    this.setState((state) => {
      return {
        count: state.count ? state.count - 1 : state.count,
      };
    });
  }

  onClick = (evt) => {
    if (evt.target.closest('.plus')) {
      this.increaseCount();
    }
    if (evt.target.closest('.minus')) {
      this.decreaseCount();
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.onClick);
  }

  render() {
    console.log(this.props);
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
