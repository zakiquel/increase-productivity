import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginByPass, LoginSchema } from '../../../api/loginApi';

import { USER_SECRET_TOKEN } from '@/shared/const/localstorage';

export const login = createAsyncThunk(
  'login/loginByPassword',
  async (authData: LoginSchema, { rejectWithValue, dispatch }) => {
    try {
      const response = await dispatch(loginByPass(authData));

      if (!response.data) {
        return rejectWithValue('error');
      }

      localStorage.setItem(USER_SECRET_TOKEN, response.data.access_token);

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
