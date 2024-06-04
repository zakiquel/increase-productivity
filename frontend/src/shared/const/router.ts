export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/'
export const getRouteProfile = (id: string) => `/profile/${id}`
