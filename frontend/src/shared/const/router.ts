export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  COMPANY = 'company',
  EMPLOYEES = 'employees',
  EVENTS = 'events',
  ANALYTICS = 'analytics',
  INSTRUCTIONS = 'instructions',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/'
export const getRouteCompany = (id: string) => `/company/${id}`
export const getRouteEmployees = () => '/employees'
export const getRouteEvents = () => '/events'
export const getRouteAnalytics = () => '/analytics'
export const getRouteInstructions = () => '/instructions'
export const getRouteProfile = (id: string) => `/profile/${id}`
