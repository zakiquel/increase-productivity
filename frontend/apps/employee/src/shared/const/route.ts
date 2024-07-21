export enum Routes {
  MAIN = 'main',
  PROFILE = 'profile',
  CATALOG = 'catalog',
  EVENTS = 'events',
  TRANSACTION = 'transaction',
  PRODUCTS = 'products',
  HISTORY = 'history',
}

export const getMainPath = () => '/';
export const getProfilePath = () => '/profile';
export const getCatalogPath = () => '/catalog';
export const getEventsPath = () => '/events';
export const getTransactionPath = () => '/profile/transaction';
export const getProductPath = () => '/catalog/products';
export const getHistoryPath = () => '/catalog/history';
