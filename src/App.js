import { Component } from './core/Component';
import './components/templates/Header';
import { routes } from './constants/routes';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/ContactPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';

class App extends Component {
  render() {
    const pathname = window.location.pathname;

    return `
      <div class="main-layout">
        <it-header></it-header>
        <main>
          <hr class="dropdown-divider" />
          ${
            routes.find((route) => route.href === pathname)?.component ??
            '<error-page></error-page>'
          }
        </main>
      </div> 
    `;
  }
}

customElements.define('it-app', App);
