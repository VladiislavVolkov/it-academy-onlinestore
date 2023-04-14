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
import './components/pages/SignUpPage';
import './components/pages/SignInPage';
import { authService } from './services/Auth';

import './components/molecules/Preloader';
import { eventEmmiter } from './core/EventEmmiter';
import { APP_EVENTS } from './constants/appEvents';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  isLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  async authorizeUser() {
    this.isLoading(true);
    try {
      const user = await authService.authorizeUser();
      console.log(user);
      eventEmmiter.emit(APP_EVENTS.authorizeUser, { user });
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading(false);
    }
  }

  componentDidMount() {
    this.authorizeUser();
  }

  componentWillUnmount() {}

  render() {
    return `
    <it-preloader is-loading="${this.state.isLoading}">
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
              path="${routes.signUp.href}" 
              title="SignUp" 
              component="${routes.signUp.component}">
            </app-route>

            <app-route 
              path="${routes.signIn.href}" 
              title="SignIn" 
              component="${routes.signIn.component}">
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
    </it-preloader>
    `;
  }
}

customElements.define('it-app', App);
