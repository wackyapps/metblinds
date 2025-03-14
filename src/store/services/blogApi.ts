import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Blog = {
  title: string;
  content: string;
  author_id: number;
  post_status: string;
};

type GetBlogReq = {
  limit: number | string;
  page: number | string;
};

export const blogApi = createApi({
  reducerPath: "blogApi",
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
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    /**
     * blog creation mutation
     */
    createBlog: builder.mutation<Blog, any>({
      query: (blog: Blog) => ({
        url: "/create-posts",
        method: "POST",
        body: blog,
      }),
    }),
    /**
     * get all blogs query
     */
    getBlogs: builder.query<GetBlogReq, any>({
      query: (blog: GetBlogReq) =>
        `/index.php/posts?page=${blog.page}&limit=${blog.limit}`,
    }),
    /**
     * get blog by id query
     */
    getBlogById: builder.query<{ id: string | number }, any>({
      query: (id: string) => `/index.php/posts/${id}`,
    }),
  }),
});

export const { useCreateBlogMutation, useGetBlogsQuery, useGetBlogByIdQuery } =
  blogApi;
