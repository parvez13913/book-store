import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "getApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Book", "User"],
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (data) => ({
        url: `/api/v1/books/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),

    getBooks: builder.query({
      query: () => "/api/v1/books",
      providesTags: ["Book"],
    }),

    getSingleBook: builder.query({
      query: (id) => `/api/v1/books/${id}`,
      providesTags: ["Book"],
    }),

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/api/v1/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),

    createUser: builder.mutation({
      query: (data) => ({
        url: `/api/v1/users/create-user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useCreateUserMutation,
} = api;
