import { Component } from './core/Component';
import './components/organisms/Header';

class App extends Component {
  render() {
    console.log(this.props);
    return `
        <it-header></it-header>
    `;
  }
}

customElements.define('it-app', App);
