export enum Routes {
  MAIN = 'main',
  PROFILE = 'profile',
  CATALOG = 'catalog',
  EVENTS = '',
  TRANSACTION = 'transaction',
  PRODUCTS = 'products',
  HISTORY = 'history',
}

export const getMainPath = () => '/'
export const getProfilePath = () => '/profile'
export const getCatalogPath = () => '/catalog'
export const getEventsPath = () => '/'
export const getTransactionPath = () => '/profile/transaction'
export const getProductPath = () => '/catalog/products'
export const getHistoryPath = () => '/catalog/history'

export const pathNames = [
  {
    path: getProfilePath(),
    pathName: Routes.PROFILE,
    value: 'Личный кабинет /',
  },
  {
    path: getCatalogPath(),
    pathName: Routes.CATALOG,
    value: 'Каталог /',
  },
  {
    path: getEventsPath(),
    pathName: Routes.EVENTS,
    value: 'Мероприятия /',
  },

  {
    path: getTransactionPath(),
    pathName: Routes.TRANSACTION,
    value: 'История транзакций',
  },
  {
    path: getProductPath(),
    pathName: Routes.PRODUCTS,
    value: 'Товары',
  },
  {
    path: getHistoryPath(),
    pathName: Routes.HISTORY,
    value: 'История',
  },
]
