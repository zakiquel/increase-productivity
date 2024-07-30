import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from './StateSchema';

import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
