import { appPages } from '../../../constants/appPages';
import { routes } from '../../../constants/routes';
import { Component } from '../../../core/Component';
import '../../molecules/MenuItems';

class Navigation extends Component {
  constructor() {
    super();
    const pathname = window.location.pathname;
    this.activeItem = routes.find((item) => item.href === pathname);
  }

  render() {
    return `
        <nav class="navbar navbar-expand-lg bg-info">
        <div class="container">
        <div class="collapse navbar-collapse d-flex justify-content-between">

        <menu-items 
          items='${JSON.stringify(appPages)}'
          active-item='${JSON.stringify(this?.activeItem)}'
        ></menu-items>

            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link position-relative" href="#">
                <img src="./assets/images/icons/cart.svg" alt="cart" width="24" height="24">
                <span class="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                </span>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    `;
  }
}

customElements.define('it-navigation', Navigation);
