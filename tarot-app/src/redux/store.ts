import { configureStore } from "@reduxjs/toolkit";
import suitsReducer from "../redux/suits/suitsSlice";
import divinationsReducer from "./divinations/divinationsSlice";

export const store = configureStore({
  reducer: { suits: suitsReducer, divinations: divinationsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
