import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Blog = {
  title: string;
  content: string;
  author_id: number;
  post_status: string;
  featured_image_id: number;
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
        url: "/posts-create",
        method: "POST",
        body: blog,
      }),
    }),
    /**
     * update blog mutation
     */
    updateBlog: builder.mutation<any, { id: string | number; blog: Blog }>({
      query: ({ id, blog }: { id: string | number; blog: Blog }) => ({
        url: `/posts-update/${id}`,
        method: "POST",
        body: blog,
      }),
    }),
    /**
     * delete blog mutation
     */
    deleteBlog: builder.mutation<any, { id: string | number }>({
      query: ({ id }: { id: string | number }) => ({
        url: `/posts-delete/${id}`,
        method: "POST",
      }),
    }),
    /**
     * get all blogs query
     */
    getBlogs: builder.query<any, GetBlogReq>({
      query: (blog: GetBlogReq) =>
        `/posts/list?page=${blog.page}&limit=${blog.limit}&post_status='published'`,
      forceRefetch: () => true,
    }),
    /**
     * get blog by id query
     */
    getBlogById: builder.query<any, { id: string | number }>({
      query: ({ id }: { id: string | number }) => `/posts/${id}`,
      forceRefetch: () => true,
    }),

    /**
     * get blog by slug
     */
    getBlogBySlug: builder.query<any, { slug: string }>({
      query: ({ slug }: { slug: string }) => `/posts/slug/${slug}`,
      forceRefetch: () => true,
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useGetBlogBySlugQuery,
} = blogApi;
