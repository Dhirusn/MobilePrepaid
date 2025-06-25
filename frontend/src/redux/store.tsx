import { configureStore } from "@reduxjs/toolkit";
import rechargeSlice from './slices/rechargeSlice'
import reloadlySlice from "./slices/reloadlySlice";

export const store = () => configureStore({
    reducer: {
        rechargeSlice,
        reloadlySlice
    }
})

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const server1 = "http://localhost:5000";
export const server = "https://mobile-prepaid-backend.vercel.app"