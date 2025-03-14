"use client";
import { Provider } from "react-redux";
import { makeStore } from "./index";

// Create a store instance
const store = makeStore();

/**
 * providing store to the app
 */
export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
