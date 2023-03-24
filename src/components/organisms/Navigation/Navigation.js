import { appPages } from '../../../constants/appPages';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

import '../../molecules/MenuItems';
import './Navigation.scss';

import { APP_EVENTS } from '../../../constants/appEvents';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { APP_ROUTES } from '../../../constants/appRoutes';

import '../../../core/Router/Link';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      productsCount: 0,
    };
  }

  setProductsCount = (count) => {
    this.setState(() => {
      return {
        productsCount: count,
      };
    });
  };

  countProducts = (data) => {
    return data
      .filter((item, index, arr) => {
        return arr.findIndex((indexItem) => indexItem.id === item.id) === index;
      })
      .map((item) => {
        return {
          ...item,
          quantity: item.quantity
            ? item.quantity
            : data.filter((filteredItem) => filteredItem.id === item.id).length,
        };
      })
      .reduce((acc, item) => acc + item.quantity, 0);
  };

  onStorage = (evt) => {
    const count = this.countProducts(evt.detail.data);
    this.setProductsCount(count);
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
    const count = this.countProducts(items);
    this.setProductsCount(count);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }

  render() {
    return `
        <nav class="navbar navbar-expand-lg bg-light fixed">
        <div class="container">
          <div class="collapse navbar-collapse d-flex justify-content-between">
            <menu-items 
              items='${JSON.stringify(appPages)}'
            ></menu-items>
            
            <ul class="navbar-nav">
              <li class="nav-item">
              <router-link to="${APP_ROUTES.cart}">
                <a class="nav-link position-relative" href="${APP_ROUTES.cart}">
                  <img src="./assets/images/icons/cart.svg" alt="cart" width="24" height="24">
                  <span class="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger" >
                    ${this.state.productsCount}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `;
  }
}

customElements.define('it-navigation', Navigation);
