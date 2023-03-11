import { Component } from '../../../core/Component';

class CategoryItems extends Component {
  static get observedAttributes() {
    return ['items'];
  }

  render() {
    const items = JSON.parse(this.props.items);

    return `
        <ul class="navbar-nav">
            ${items.map((item) => {
              return `
                    <li class="nav-item">
                        <a class="nav-link active">${item.label}</a>
                    </li>
                `;
            }).join(' ')}
        </ul>
    `;
  }
}

customElements.define('category-items', CategoryItems);
