import { Component } from './core/Component';
import { routes } from './constants/routes';
import { appCategories } from './constants/appCategories';

import './components/templates/Header';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/ContactPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';
import './components/molecules/Footer';

class App extends Component {
  render() {
    const pathname = window.location.pathname;
    console.log(pathname);

    return `
      <div class="main-layout">

        <it-header categories='${JSON.stringify(appCategories)}'></it-header>

        <main>
          <div class="container mt-5 pt-5 border-top">
            ${
              routes.find((route) => route.href === pathname)?.component ??
              '<error-page></error-page>'
            }
          </div>
        </main>

        <it-footer></it-footer>

      </div> 
    `;
  }
}

customElements.define('it-app', App);
