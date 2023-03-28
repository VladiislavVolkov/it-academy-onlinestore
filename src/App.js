import { Component } from './core/Component';
import './core/Router/Router';
import { routes } from './constants/routes';

import './components/organisms/Navigation';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/ContactsPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';
import './components/molecules/Footer';
import './components/pages/AdminPage';

class App extends Component {
  render() {
    return `
      <div class="main-layout">
      <it-navigation></it-navigation>
        <main>
          <app-router>

            <app-route 
              path="${routes.catalog.href}" 
              title="Catalog" 
              component="${routes.catalog.component}">
            </app-route>

            <app-route 
              path="${routes.contacts.href}" 
              title="Contacts" 
              component="${routes.contacts.component}">
            </app-route>

            <app-route 
              path="${routes.cart.href}" 
              title="Cart" 
              component="${routes.cart.component}">
            </app-route>

            <app-route 
              path="${routes.blog.href}" 
              title="Blog" 
              component="${routes.blog.component}">
            </app-route>

            <app-route 
              path="${routes.productView.href}" 
              title="ProductView" 
              component="${routes.productView.component}">
            </app-route>

            <app-route 
              path="${routes.admin.href}" 
              title="Admin" 
              component="${routes.admin.component}">
            </app-route>

            <app-route 
              path="${routes.error.href}" 
              title="Error" 
              component="${routes.error.component}">
            </app-route>

            <app-outlet></app-outlet>

          </app-router>
        </main>
        <it-footer></it-footer>
      </div>
    `;
  }
}

customElements.define('it-app', App);
