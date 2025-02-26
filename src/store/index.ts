// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { appReducer } from "./app";

export const makeStore = () =>
  configureStore({
    reducer: {
      app: appReducer,
    },
  });

export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
export const wrapper = createWrapper(makeStore);
