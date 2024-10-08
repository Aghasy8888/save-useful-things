import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  isAuth: boolean;
  loading: boolean;
  user: string | null;
  error: string | null;
  uid: string;
  isModarator: boolean;
};

const initialState = {
  loading: false,
  isAuth: false,
  user: '',
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
      state.user = action.payload;
      state.uid = 'kjhfjkhfkjsdfkjh';
      state.isModarator = false;
    },
    toggleModerator: (state) => {
      state.isModarator = !state.isModarator;
    },
  },
});

export const selectIsModarator = (state: RootState) =>
  state.authReducerTwo.isModarator;

export const { login, logOut, toggleModerator } = auth.actions;
export default auth.reducer;
