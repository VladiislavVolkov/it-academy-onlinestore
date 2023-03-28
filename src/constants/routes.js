import { APP_ROUTES } from './appRoutes';

export const routes = {
  catalog: {
    href: APP_ROUTES.catalog,
    component: 'catalog-page',
  },
  contacts: {
    href: APP_ROUTES.contacts,
    component: 'contacts-page',
  },
  cart: {
    href: APP_ROUTES.cart,
    component: 'cart-page',
  },
  blog: {
    href: APP_ROUTES.blog,
    component: 'blog-page',
  },
  productView: {
    href: APP_ROUTES.product,
    component: 'product-page',
  },
  error: {
    href: '*',
    component: 'error-page',
  },
  admin: {
    href: APP_ROUTES.admin,
    component: 'admin-page',
  },
};
