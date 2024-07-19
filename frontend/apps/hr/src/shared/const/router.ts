export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  COMPANY = 'company',
  VALUE_CONSTRUCTOR = 'value_constructor',
  EMPLOYEE = 'employee',
  EVENTS = 'events',
  REQUESTS = 'requests',
  CATALOG = 'catalog',
  TEST_DIAGRAMS = 'test_diagrams', // TODO: Потом удалить
  INSTRUCTIONS = 'instructions',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/hr/';
export const getRouteCompany = () => `/hr/company`;
export const getRouteValueConstructor = () => '/hr/company/constructor';
export const getRouteEmployees = () => '/hr/employees';
export const getRouteEmployee = (id: string) => `/hr/employees/${id}`;
export const getRouteEvents = () => '/hr/events';
export const getRouteCatalog = () => '/hr/catalog';
export const getRouteInstructions = () => '/hr/instructions';
export const getRouteRequestsEvents = () => '/hr/events/requests';
export const getRouteProfile = (id: string) => `/hr/profile/${id}`;
export const getTestDiagrams = () => '/hr/test_diagrams'; // TODO: Потом удалить

export const pathNames = [
  {
    path: getRouteEvents(),
    pathName: AppRoutes.EVENTS,
    value: 'Мероприятия',
  },
  {
    path: getRouteRequestsEvents(),
    pathName: AppRoutes.REQUESTS,
    value: 'Заявки',
  },
];
