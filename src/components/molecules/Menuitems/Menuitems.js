import { Component } from '../../../core/Component';

class Menuitems extends Component {
  static get observedAttributes() {
    return ['items', 'active-item'];
  }

  render() {
    console.log(JSON.parse(this.props.items));

    const items = JSON.parse(this.props.items);
    const item = this.props['active-item'];
    const activeItem = item ? JSON.parse(item) : {};

    return `
        <ul class="navbar-nav">
            ${items
              .map((item) => {
                return `
                        <li class="nav-item">
                            <a class="nav-link ${
                              activeItem?.href === item.href ? 'active' : ''
                            }" href="${item.href}">${item.label}</a>
                        </li>  
                    `;
              })
              .join(' ')}
        </ul>
        `;
  }
}

customElements.define('menu-items', Menuitems);
