import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bannersApi = createApi({
  reducerPath: "bannersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://itelc.org/metblind_api",
    prepareHeaders: (headers, { getState }) => {
      // Get the token from localStorage if needed
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Banner"],
  endpoints: (builder) => ({
    /**
     * banner creation mutation
     */
    createBanner: builder.mutation<any, any>({
      query: (banner: any) => ({
        url: "/banners-create",
        method: "POST",
        body: banner,
      }),
    }),
    /**
     * update banner mutation
     */
    updateBanner: builder.mutation<any, { id: string | number; banner: any }>({
      query: ({ id, banner }: { id: string | number; banner: any }) => ({
        url: `/banners-update/${id}`,
        method: "POST",
        body: banner,
      }),
    }),
    /**
     * delete banner mutation
     */
    deleteBanner: builder.mutation<any, { id: string | number }>({
      query: ({ id }: { id: string | number }) => ({
        url: `/delete-banner/${id}`,
        method: "POST",
      }),
    }),
    /**
     * get all banners query
     */
    getBanners: builder.query<any, { page: number; limit: number }>({
      query: (params: { page: number; limit: number }) =>
        `/banners/list?page=${params.page}&limit=${params.limit}`,
      forceRefetch: () => true,
    }),
    /**
     * get banner by id query
     */
    getBannerById: builder.query<any, { id: string | number }>({
      query: ({ id }: { id: string | number }) => `/banners/${id}`,
      forceRefetch: () => true,
    }),
  }),
});

export const {
  useCreateBannerMutation,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
  useGetBannersQuery,
  useGetBannerByIdQuery,
} = bannersApi;
