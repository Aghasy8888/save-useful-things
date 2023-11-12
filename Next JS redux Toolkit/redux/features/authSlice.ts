import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModarator: boolean;
};

const initialState = {
  isAuth: false,
  username: '',
  uid: '',
  isModarator: false,
} as AuthState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.username = action.payload;
      state.uid = 'kjhfjkhfkjsdfkjh';
      state.isModarator = false;
    },
    toggleModerator: (state) => {
      state.isModarator = !state.isModarator;
    },
  },
});

export const { login, logOut, toggleModerator } = auth.actions;
export default auth.reducer;
