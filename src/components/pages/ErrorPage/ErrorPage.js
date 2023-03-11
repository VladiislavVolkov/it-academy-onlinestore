import { Component } from '../../../core/Component';

class ErrorPage extends Component {
  render() {
    return `
        <h1>Error 404</h1>
        `;
  }
}

customElements.define('error-page', ErrorPage);
