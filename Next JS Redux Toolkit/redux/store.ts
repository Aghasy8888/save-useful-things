import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import authReducerTwo from "./features/auth/authSlice_2";

import logger from 'redux-logger';

export const makeStore = () => {
    return configureStore({
        reducer: {
            authReducer,
            authReducerTwo
        },
        middleware: (getDefaultMiddleware) => 
        process.env.NODE_ENV === "development" 
        ? getDefaultMiddleware().concat(logger) 
        : getDefaultMiddleware(),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']