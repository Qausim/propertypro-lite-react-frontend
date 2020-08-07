const propertyRouteRoot = '/properties';

export const appName = 'homely';
export const baseURL = 'https://propertyprolite-api.herokuapp.com';

export const routes = {
  home: '/',
  login: '/login',
  about: '/about',
  signup: '/signup',
  contact: '/contact',
  properties: propertyRouteRoot,
  singleProperty: `${propertyRouteRoot}/:slug`
};

export const headerNavs = [
  { title: 'home', link: routes.home },
  { title: 'listings', link: routes.properties },
  { title: 'contact us', link: routes.contact },
  { title: 'about us', link: routes.about },
];

export const authNavs = [
  { title: 'login', link: routes.login },
  { title: 'signup', link: routes.signup },
]

export const propertyStateTypes = {
  sold: 'sold',
  sale: 'sale',
  rent: 'rental',
};

export const actionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_PROPERTY_FILTER: 'SET_PROPERTY_FILTER',
};
