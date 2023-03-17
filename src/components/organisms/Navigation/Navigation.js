import { appPages } from '../../../constants/appPages';
import { routes } from '../../../constants/routes';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

import '../../molecules/MenuItems';

import { APP_EVENTS } from '../../../constants/appEvents';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { APP_ROUTES } from '../../../constants/appRoutes';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      productsCount: 0,
    };
    const pathname = window.location.pathname;
    this.activeItem = routes.find((item) => item.href === pathname);
  }

  setProductsCount = (count) => {
    this.setState(() => {
      return {
        productsCount: count,
      };
    });
  };

  onStorage = (evt) => {
    this.setProductsCount(evt.detail.data.length);
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
    this.setProductsCount(items.length);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }

  render() {
    return `
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <div class="collapse navbar-collapse d-flex justify-content-between">
            <menu-items 
              items='${JSON.stringify(appPages)}'
              active-item='${JSON.stringify(this?.activeItem)}'
            ></menu-items>
            
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link position-relative" href="${APP_ROUTES.cart}">
                  <img src="./assets/images/icons/cart.svg" alt="cart" width="24" height="24">
                  <span class="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger" >
                    ${this.state.productsCount}
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
