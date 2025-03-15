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
    createBlog: builder.mutation<any, Blog>({
      query: (blog: Blog) => ({
        url: "/create-posts",
        method: "POST",
        body: blog,
      }),
    }),
    /**
     * update blog mutation
     */
    updateBlog: builder.mutation<any, { id: string | number; blog: Blog }>({
      query: ({ id, blog }: { id: string | number; blog: Blog }) => ({
        url: `/update-posts/${id}`,
        method: "POST",
        body: blog,
      }),
    }),
    /**
     * delete blog mutation
     */
    deleteBlog: builder.mutation<any, { id: string | number }>({
      query: ({ id }: { id: string | number }) => ({
        url: `/delete-posts/${id}`,
        method: "POST",
      }),
    }),
    /**
     * get all blogs query
     */
    getBlogs: builder.query<any, GetBlogReq>({
      query: (blog: GetBlogReq) =>
        `/index.php/posts?page=${blog.page}&limit=${blog.limit}`,
    }),
    /**
     * get blog by id query
     */
    getBlogById: builder.query<any, { id: string | number }>({
      query: ({ id }: { id: string | number }) => `/index.php/posts/${id}`,
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useGetBlogByIdQuery,
} = blogApi;
