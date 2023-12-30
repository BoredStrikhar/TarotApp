import { configureStore } from "@reduxjs/toolkit";
import suitsReducer from "../redux/suits/suitsSlice";


export const store = configureStore({
  reducer: { suits: suitsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;