import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './features/globalSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    globalReducer: globalSlice
  },
  middleware: (getDefaultMiddleware) =>
    !import.meta.env.PROD
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
