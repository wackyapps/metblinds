// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { appReducer } from "./app";
import { authReducer } from "./slices/authSlice";
import { authApi } from "./services/authApi";
import { blogApi } from "./services/blogApi";
import { bannersApi } from "./services/bannersApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      app: appReducer,
      auth: authReducer,
      [authApi.reducerPath]: authApi.reducer,
      [blogApi.reducerPath]: blogApi.reducer,
      [bannersApi.reducerPath]: bannersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authApi.middleware,
        blogApi.middleware,
        bannersApi.middleware,
      ),
  });

  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  setupListeners(store.dispatch);

  return store;
};

export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
export const wrapper = createWrapper(makeStore);
