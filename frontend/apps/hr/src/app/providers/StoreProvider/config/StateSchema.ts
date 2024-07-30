import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  state: StateSchema;
}
