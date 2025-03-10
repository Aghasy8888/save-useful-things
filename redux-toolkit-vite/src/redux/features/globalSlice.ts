import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchData } from './globalService';

interface InitialState {
  test: string;
  users: IUserInfo[];
  loading: boolean;
}

const initialState: InitialState ={
  loading: false,
  test: '',
  users: [],
};

interface IUserInfo {
  name: string;
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setTest(state, { payload }) {
      state.test = state.test + payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchData.pending, state => {
      state.loading = true;
    })
    .addCase(
      fetchData.fulfilled,
      (state, { payload }: PayloadAction<IUserInfo[]>) => {
        state.loading = false;
        state.users = payload;
      }
    );
  },
});

export const { setTest } = globalSlice.actions;

export const selectTest = (state: RootState) => state.globalReducer.test;
export const selectUsers = (state: RootState) => state.globalReducer.users;

export default globalSlice.reducer;
