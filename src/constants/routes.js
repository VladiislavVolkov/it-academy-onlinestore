import { APP_ROUTES } from './appRoutes';

export const routes = [
  {
    href: APP_ROUTES.catalog,
    component: '<catalog-page>',
  },
  {
    href: APP_ROUTES.contacts,
    component: '<contacts-page>',
  },
  {
    href: APP_ROUTES.blog,
    component: '<blog-page>',
  },
  {
    href: APP_ROUTES.cart,
    component: '<cart-page>',
  },
  {
    href: APP_ROUTES.product,
    component: '<product-page>',
  },
];
