// Import createSlice from Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserInfo } from './userService';
import { RootState } from '@/redux/store';

// Initial state
const initialState: IAuthState = {
  loading: false,
  userInfo: null,
};

const authSliceTwo = createSlice({
  name: 'authTwo',
  initialState,
  reducers: {
    authLoading(state) {
      state.loading = true;
    },
    authError(state) {
      state.loading = false;
    },
    authSuccess(state) {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUserInfo.fulfilled,
        (state, action: PayloadAction<IUserInfoTwo>) => {
          console.log('action.payload', action.payload);

          state.loading = false;
          state.userInfo = action.payload;
        }
      )
      .addCase(getUserInfo.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { authLoading, authError, authSuccess } = authSliceTwo.actions;

export const selectUserInfo = (state: RootState) =>
  state.authReducerTwo.userInfo;

export default authSliceTwo.reducer;
