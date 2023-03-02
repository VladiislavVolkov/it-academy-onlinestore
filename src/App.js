import { Component } from './core/Component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
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
