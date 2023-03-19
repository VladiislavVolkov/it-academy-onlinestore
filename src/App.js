import { Component } from './core/Component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // пример с атрибутами
  static get observedAttributes() {
    return ['atrtest'];
  }

  increaseCount() {
    this.setState((state) => {
      return {
        count: state.count < 10 ? state.count + 1 : state.count,
      };
    });
    console.log(this.state);
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
    // console.log(this.props.atrtest);
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
