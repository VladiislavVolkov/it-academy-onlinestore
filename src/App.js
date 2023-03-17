import { Component } from './core/Component';
import { routes } from './constants/routes';

import './components/organisms/Navigation';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/ContactsPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';
import './components/molecules/Footer';

class App extends Component {
  render() {
    const pathname = window.location.pathname;

    return `
      <div class="main-layout">
      <it-navigation></it-navigation>
        <main>
          ${
            routes.find((route) => route.href === pathname)?.component ??
            '<error-page></error-page>'
          }
        </main>
        <it-footer></it-footer>
      </div>
    `;
  }
}

customElements.define('it-app', App);
