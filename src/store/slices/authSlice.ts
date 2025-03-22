import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user:
    typeof window !== "undefined"
      ? Cookies.get("user")
        ? JSON.parse(Cookies.get("user")!)
        : null
      : null,
  token: typeof window !== "undefined" ? Cookies.get("token") || null : null,
  isAuthenticated:
    typeof window !== "undefined"
      ? Cookies.get("isAuthenticated") === "true"
      : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      Cookies.set("user", JSON.stringify(action.payload), {
        secure: true,
        sameSite: "strict",
      });
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      Cookies.set("token", action.payload, {
        secure: true,
        sameSite: "strict",
      });
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
      Cookies.set("isAuthenticated", action.payload.toString(), {
        secure: true,
        sameSite: "strict",
      });
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      Cookies.remove("token");
      Cookies.remove("user");
      Cookies.remove("isAuthenticated");
    },
  },
});

export const { setUser, setToken, setIsAuthenticated, logout } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
