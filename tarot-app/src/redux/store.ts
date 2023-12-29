import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice";
import suitsReducer from "../redux/suits/suitsSlice";


export const store = configureStore({
  reducer: { counter: counterReducer, suits: suitsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;