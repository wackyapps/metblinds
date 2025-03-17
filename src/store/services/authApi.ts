import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../index";

interface User {
  id: string;
  name: string;
  email: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface ResetPasswordRequest {
  email: string;
  password: string;
  confirmpassword: string;
  resetcode: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://itelc.org/metblind_api",
    // prepareHeaders: (headers, { getState }) => {
    //   // Get the token from localStorage if needed
    //   const token = (getState() as RootState).auth.token;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    /**
     * Login
     */
    login: builder.mutation<any, LoginRequest>({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    /**
     * Forgot Password
     */
    forgotPassword: builder.mutation<any, { email: string }>({
      query: ({ email }) => ({
        url: "/usersforgotpassword",
        method: "POST",
        body: { email },
      }),
    }),
    /**
     * Reset Password
     */
    resetPassword: builder.mutation<any, ResetPasswordRequest>({
      query: ({ email, password, confirmpassword, resetcode }) => ({
        url: "/users/resetpassword",
        method: "POST",
        body: { email, password, confirmpassword, resetcode },
      }),
    }),
    /**
     * get user by reset code
     */
    getUserByResetCode: builder.query<any, { resetCode: string }>({
      query: ({ resetCode }) => ({
        url: `/userspasswordresetcode/${resetCode}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetUserByResetCodeQuery,
} = authApi;
