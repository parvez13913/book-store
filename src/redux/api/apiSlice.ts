import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "getApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/api/v1/books",
      providesTags: ["Book"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/api/v1/books/${id}`,
      providesTags: ["Book"],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/api/v1/books/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: [{ type: "Book" }],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useDeleteBookMutation,
} = api;
