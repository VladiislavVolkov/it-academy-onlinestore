import { Component } from '../../../core/Component';

class ProductPage extends Component {
  render() {
    return `
        <h1>Product</h1>
        `;
  }
}

customElements.define('product-page', ProductPage);
