export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  COMPANY = 'company',
  EMPLOYEES = 'employees',
  EMPLOYEE = 'employee',
  EVENTS = 'events',
  ANALYTICS = 'analytics',
  INSTRUCTIONS = 'instructions',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => "/hr/";
export const getRouteCompany = (id: string) => `/hr/company/${id}`;
export const getRouteEmployees = () => "/hr/employees";
export const getRouteEmployee = (id: string) => `/hr/employees/${id}`;
export const getRouteEvents = () => "/hr/events";
export const getRouteAnalytics = () => "/hr/analytics";
export const getRouteInstructions = () => "/hr/instructions";
export const getRouteProfile = (id: string) => `/hr/profile/${id}`;